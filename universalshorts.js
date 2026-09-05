/* ============================================================
   UNIVERSAL SHORTS SHARE + DEEP LINK SYSTEM
   ============================================================

   PURPOSE
   ------------------------------------------------------------
   1. Adds a Share button to every Short.
   2. Creates a link using the Short's ID.

      Example:
      https://example.com/shorts.html?short=s8

   3. Opening ?short=s8:
      - keeps the user on shorts.html
      - moves s8 to the first position
      - starts the feed on s8
      - scrolling down continues through the normal Shorts feed

   4. Does NOT modify data.js.
   5. Does NOT replace the existing Shorts rendering logic.
   ============================================================ */

(function universalShortsShareSystem () {

  "use strict";


  /* ==========================================================
     CONFIGURATION
     ========================================================== */

  var PARAMETER_NAME = "short";

  var VIEWPORT_SELECTOR = "#shortsViewport";

  var SLIDE_SELECTOR = ".short-slide";

  var SHARE_CLASS = "universal-short-share-btn";

  var installedSlides = new WeakSet();


  /* ==========================================================
     GET SHORT ID
     ========================================================== */

  function getShortId(slide) {

    if (!slide) {
      return null;
    }

    return slide.getAttribute("data-id");

  }


  /* ==========================================================
     GET CURRENT SHORT ID FROM URL
     ========================================================== */

  function getRequestedShortId() {

    var params =
      new URLSearchParams(
        window.location.search
      );

    var id =
      params.get(PARAMETER_NAME);

    if (!id) {
      return null;
    }

    return id.trim();

  }


  /* ==========================================================
     BUILD SHARE URL
     ========================================================== */

  function buildShareUrl(id) {

    if (!id) {
      return window.location.href;
    }

    var url =
      new URL(
        window.location.href
      );

    /*
       Remove everything except the Shorts
       deep-link parameter.
    */

    url.search = "";

    url.searchParams.set(
      PARAMETER_NAME,
      id
    );

    /*
       Remove #hash if present.
    */

    url.hash = "";

    return url.toString();

  }


  /* ==========================================================
     SHARE ICON
     ========================================================== */

  function getShareIcon() {

    return `
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7
             c.05-.23.09-.46.09-.7s-.03-.47-.09-.7l7.05-4.11
             A2.99 2.99 0 0 0 18 7.91
             a3 3 0 1 0-2.96-3.5L8 8.52
             A3 3 0 1 0 8 15.48l7.05 4.11
             A3 3 0 1 0 18 16.08z"
        ></path>
      </svg>
    `;

  }


  /* ==========================================================
     CREATE SHARE BUTTON
     ========================================================== */

  function createShareButton(slide) {

    var id =
      getShortId(slide);

    if (!id) {
      return null;
    }

    var button =
      document.createElement("button");

    button.type = "button";

    button.className =
      "action-btn " + SHARE_CLASS;

    button.setAttribute(
      "data-short-id",
      id
    );

    button.setAttribute(
      "aria-label",
      "Share this Short"
    );

    button.innerHTML = `
      <div class="action-icon-wrapper">
        ${getShareIcon()}
      </div>
      <span>Share</span>
    `;


    /* --------------------------------------------------------
       SHARE CLICK
       -------------------------------------------------------- */

    button.addEventListener(
      "click",
      async function (event) {

        event.preventDefault();

        event.stopPropagation();


        var shortId =
          button.getAttribute(
            "data-short-id"
          );

        if (!shortId) {
          return;
        }


        var shareUrl =
          buildShareUrl(shortId);


        /*
           Use native Android/iOS share sheet
           whenever available.
        */

        if (
          navigator.share &&
          typeof navigator.share === "function"
        ) {

          try {

            await navigator.share({

              title:
                "Short",

              text:
                "Check out this Short",

              url:
                shareUrl

            });

            return;

          } catch (error) {

            /*
               User cancelled the native share
               sheet. Do nothing.
            */

            if (
              error &&
              error.name === "AbortError"
            ) {
              return;
            }

          }

        }


        /*
           Fallback to clipboard.
        */

        try {

          if (
            navigator.clipboard &&
            navigator.clipboard.writeText
          ) {

            await navigator.clipboard.writeText(
              shareUrl
            );

            showShareFeedback(
              button,
              "Copied!"
            );

            return;

          }

        } catch (error) {

          console.warn(
            "Clipboard sharing failed:",
            error
          );

        }


        /*
           Last-resort fallback.
        */

        window.prompt(
          "Copy this Short link:",
          shareUrl
        );

      },
      true
    );


    return button;

  }


  /* ==========================================================
     SHARE FEEDBACK
     ========================================================== */

  function showShareFeedback(
    button,
    message
  ) {

    if (!button) {
      return;
    }

    var text =
      button.querySelector(
        "span"
      );

    if (!text) {
      return;
    }

    var original =
      text.textContent;

    text.textContent =
      message;


    setTimeout(
      function () {

        /*
           Only restore if the button
           still exists.
        */

        if (
          document.body.contains(button)
        ) {

          text.textContent =
            original;

        }

      },
      1500
    );

  }


  /* ==========================================================
     INSTALL SHARE BUTTON
     ========================================================== */

  function installShareButton(slide) {

    if (!slide) {
      return;
    }


    /*
       Prevent duplicate installation.
    */

    if (
      installedSlides.has(slide)
    ) {
      return;
    }


    var id =
      getShortId(slide);

    if (!id) {
      return;
    }


    var actionsBar =
      slide.querySelector(
        ".actions-bar"
      );

    if (!actionsBar) {
      return;
    }


    /*
       Check again in case another
       script already created one.
    */

    var existing =
      actionsBar.querySelector(
        "." + SHARE_CLASS
      );

    if (existing) {

      installedSlides.add(
        slide
      );

      return;

    }


    var shareButton =
      createShareButton(
        slide
      );

    if (!shareButton) {
      return;
    }


    /*
       Insert Share before Open.

       Existing order:

       Like
       Save
       Open

       New order:

       Like
       Save
       Share
       Open
    */

    var openButton =
      actionsBar.querySelector(
        'a.action-btn'
      );

    if (openButton) {

      actionsBar.insertBefore(
        shareButton,
        openButton
      );

    } else {

      actionsBar.appendChild(
        shareButton
      );

    }


    installedSlides.add(
      slide
    );

  }


  /* ==========================================================
     SCAN ALL CURRENT SHORTS
     ========================================================== */

  function installAll() {

    var slides =
      document.querySelectorAll(
        SLIDE_SELECTOR
      );

    slides.forEach(
      function (slide) {

        installShareButton(
          slide
        );

      }
    );

  }


  /* ==========================================================
     HANDLE DEEP-LINKED SHORT
     ========================================================== */

  function openRequestedShort() {

    var requestedId =
      getRequestedShortId();

    if (!requestedId) {
      return;
    }


    var viewport =
      document.querySelector(
        VIEWPORT_SELECTOR
      );

    if (!viewport) {
      return;
    }


    var slides =
      Array.from(
        viewport.querySelectorAll(
          SLIDE_SELECTOR
        )
      );


    if (!slides.length) {
      return;
    }


    /*
       Find the requested Short.
    */

    var target =
      slides.find(
        function (slide) {

          return (
            getShortId(slide) ===
            requestedId
          );

        }
      );


    /*
       If the ID doesn't exist,
       leave the normal feed alone.
    */

    if (!target) {

      console.warn(
        "Requested Short not found:",
        requestedId
      );

      return;

    }


    /*
       --------------------------------------------------------
       IMPORTANT
       --------------------------------------------------------

       Move ONLY the shared Short to the
       beginning.

       All other Shorts remain in their
       existing randomized session order.

       Example:

       Normal:

       s7
       s12
       s4
       s8
       s2
       s15

       Shared:

       ?short=s8

       Becomes:

       s8
       s7
       s12
       s4
       s2
       s15

       Therefore scrolling DOWN naturally
       exits the shared Short and enters
       the normal feed.
       --------------------------------------------------------
    */

    if (
      viewport.firstElementChild !==
      target
    ) {

      viewport.insertBefore(
        target,
        viewport.firstElementChild
      );

    }


    /*
       Clear the old session scroll position.

       Otherwise shorts.html could restore
       the user to a previous position.
    */

    try {

      sessionStorage.removeItem(
        "frozen_scroll_top"
      );

      sessionStorage.setItem(
        "frozen_active_short_id",
        requestedId
      );

    } catch (error) {

      console.warn(
        "SessionStorage unavailable:",
        error
      );

    }


    /*
       Start exactly at the shared Short.
    */

    requestAnimationFrame(
      function () {

        viewport.scrollTop = 0;

      }
    );

  }


  /* ==========================================================
     MUTATION OBSERVER
     ========================================================== */

  function startObserver() {

    if (!document.body) {
      return;
    }


    var observer =
      new MutationObserver(
        function () {

          /*
             New Shorts may be rendered
             asynchronously.
          */

          installAll();

          /*
             Deep-link target may also
             appear asynchronously.
          */

          if (
            getRequestedShortId()
          ) {

            openRequestedShort();

          }

        }
      );


    observer.observe(
      document.body,
      {
        childList: true,
        subtree: true
      }
    );

  }


  /* ==========================================================
     INITIAL START
     ========================================================== */

  function start() {

    /*
       Shorts.html renders asynchronously,
       so scan several times.
    */

    installAll();


    setTimeout(
      installAll,
      100
    );

    setTimeout(
      installAll,
      300
    );

    setTimeout(
      installAll,
      600
    );

    setTimeout(
      installAll,
      1000
    );

    setTimeout(
      installAll,
      2000
    );


    /*
       Open shared Short after
       rendering has happened.
    */

    setTimeout(
      openRequestedShort,
      300
    );

    setTimeout(
      openRequestedShort,
      700
    );

    setTimeout(
      openRequestedShort,
      1500
    );


    startObserver();

  }


  /* ==========================================================
     DOM READY
     ========================================================== */

  if (
    document.readyState ===
    "loading"
  ) {

    document.addEventListener(
      "DOMContentLoaded",
      start
    );

  } else {

    start();

  }


})(); 
