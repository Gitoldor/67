/* ============================================================
   UNIVERSALSHORTS.JS

   WORKS WITH:
   - data.js
   - Optimized Shorts system
   - Dynamically created .short-slide
   - Hard-killed previous Shorts

   FEATURES:
   ------------------------------------------------------------
   ✓ Adds Share button to every active Short UI
   ✓ Works even when Short is dynamically recreated
   ✓ No duplicate buttons
   ✓ Uses Short ID
   ✓ Creates:
       index.html?short=s1

   ✓ Native mobile share
   ✓ Clipboard fallback
   ✓ Does not create extra iframes
   ✓ Does not keep old Shorts in DOM
   ✓ Very lightweight
   ============================================================ */

(function () {

  "use strict";


  /* ==========================================================
     CONFIGURATION
  ========================================================== */

  const SHARE_PARAMETER =
    "short";


  /*
    IMPORTANT:

    Your shared Short opens on index.html.
  */

  const SHARE_PAGE =
    "index.html";


  const SLIDE_SELECTOR =
    ".short-slide";


  const ACTIONS_SELECTOR =
    ".actions-bar";


  const SHARE_BUTTON_CLASS =
    "universal-short-share-btn";


  /* ==========================================================
     SHARE ICON
  ========================================================== */

  function getShareIcon() {

    return `

      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
      >

        <path d="
          M18 8
          a3 3 0 1 0-2.82-4
          c0 .15.01.3.04.44
          L8.91 7.56
          A3 3 0 0 0 6 7
          a3 3 0 1 0 2.91 4.44
          l6.31 3.12
          A3 3 0 0 0 15 15
          a3 3 0 1 0 .22 1.56
          l-6.31-3.12
          A3 3 0 0 0 6 17
          a3 3 0 1 0 2.91-4.44
          l6.31-3.12
          A3 3 0 0 0 18 8z
        "

        fill="currentColor"

        />

      </svg>

    `;

  }


  /* ==========================================================
     INJECT PROFESSIONAL SHARE BUTTON STYLE
  ========================================================== */

  function injectStyles() {

    if (

      document.getElementById(
        "universal-shorts-share-styles"
      )

    ) {

      return;

    }


    const style =
      document.createElement(
        "style"
      );


    style.id =
      "universal-shorts-share-styles";


    style.textContent = `

      /* ================================================
         SHARE BUTTON
      ================================================= */

      .universal-short-share-btn {

        display: flex !important;

        flex-direction: column !important;

        align-items: center !important;

        justify-content: center !important;

        gap: 4px !important;

        background: none !important;

        border: none !important;

        color: #ffffff !important;

        font-size: 11px !important;

        font-weight: 500 !important;

        cursor: pointer !important;

        padding: 0 !important;

        margin: 0 !important;

        font-family: inherit !important;

        -webkit-tap-highlight-color:
          transparent !important;

        touch-action:
          manipulation !important;

      }


      /* ================================================
         ICON CIRCLE
      ================================================= */

      .universal-short-share-btn
      .universal-share-icon-wrapper {

        width: 44px !important;

        height: 44px !important;

        border-radius: 50% !important;

        background:

          rgba(
            33,
            33,
            33,
            0.6
          ) !important;


        backdrop-filter:

          blur(
            10px
          ) !important;


        -webkit-backdrop-filter:

          blur(
            10px
          ) !important;


        display: flex !important;

        align-items: center !important;

        justify-content: center !important;

        transition:

          transform 0.15s ease,

          background 0.15s ease !important;

      }


      /* ================================================
         ICON
      ================================================= */

      .universal-short-share-btn svg {

        width: 22px !important;

        height: 22px !important;

        fill: #ffffff !important;

        color: #ffffff !important;

        pointer-events: none !important;

      }


      /* ================================================
         ACTIVE EFFECT
      ================================================= */

      .universal-short-share-btn:active
      .universal-share-icon-wrapper {

        transform:

          scale(
            0.88
          );

      }


      /* ================================================
         LABEL
      ================================================= */

      .universal-short-share-btn
      .universal-share-label {

        color:
          #ffffff !important;

        font-size:
          11px !important;

        line-height:
          1 !important;

        pointer-events:
          none !important;

      }

    `;


    document.head.appendChild(
      style
    );

  }


  /* ==========================================================
     GET SHORT DATABASE

     Searches:

     1. allMediaData
     2. mediaData
  ========================================================== */

  function getShortDatabase() {

    const database =
      [];


    const seen =
      new Set();


    /*
      Complete database first.
    */

    if (

      Array.isArray(
        window.allMediaData
      )

    ) {

      window.allMediaData.forEach(

        function (item) {

          if (

            item

            &&

            item.type === "shorts"

            &&

            item.id

          ) {

            if (

              !seen.has(
                String(item.id)
              )

            ) {

              seen.add(
                String(item.id)
              );


              database.push(
                item
              );

            }

          }

        }

      );

    }


    /*
      Current database fallback.
    */

    if (

      Array.isArray(
        window.mediaData
      )

    ) {

      window.mediaData.forEach(

        function (item) {

          if (

            item

            &&

            item.type === "shorts"

            &&

            item.id

          ) {

            if (

              !seen.has(
                String(item.id)
              )

            ) {

              seen.add(
                String(item.id)
              );


              database.push(
                item
              );

            }

          }

        }

      );

    }


    return database;

  }


  /* ==========================================================
     FIND SHORT BY ID
  ========================================================== */

  function findShortById(id) {

    if (!id) {
      return null;
    }


    const database =
      getShortDatabase();


    return (

      database.find(

        function (item) {

          return (

            String(item.id)

            ===

            String(id)

          );

        }

      )

      ||

      null

    );

  }


  /* ==========================================================
     CREATE SHARE URL

     IMPORTANT:

     ALWAYS CREATES:

     index.html?short=s1
  ========================================================== */

  function createShareURL(id) {

    const url =
      new URL(
        window.location.href
      );


    /*
      Force correct page.
    */

    url.pathname =

      url.pathname.replace(
        /[^/]*$/,
        SHARE_PAGE
      );


    /*
      Remove old query parameters.
    */

    url.search = "";


    url.hash = "";


    /*
      Add Short ID.
    */

    url.searchParams.set(

      SHARE_PARAMETER,

      id

    );


    return url.toString();

  }


  /* ==========================================================
     SHARE SHORT
  ========================================================== */

  async function shareShort(item) {

    if (

      !item

      ||

      !item.id

    ) {

      return;

    }


    const shareURL =
      createShareURL(
        item.id
      );


    const shareData = {

      title:

        item.title

        ||

        "Shared Short",


      text:

        item.title

        ||

        "Check out this Short",


      url:

        shareURL

    };


    /* ================================================
       NATIVE SHARE
    ================================================= */

    if (

      navigator.share

    ) {

      try {

        await navigator.share(
          shareData
        );


        return;

      }

      catch (error) {

        /*
          User cancelled sharing.

          Do nothing.
        */

        if (

          error

          &&

          error.name ===
          "AbortError"

        ) {

          return;

        }

      }

    }


    /* ================================================
       CLIPBOARD FALLBACK
    ================================================= */

    try {

      await navigator.clipboard.writeText(
        shareURL
      );


      showShareMessage(
        "Link copied!"
      );


      return;

    }

    catch (error) {}


    /* ================================================
       FINAL FALLBACK
    ================================================= */

    window.prompt(

      "Copy this Short link:",

      shareURL

    );

  }


  /* ==========================================================
     SMALL SHARE MESSAGE
  ========================================================== */

  function showShareMessage(message) {

    let toast =
      document.querySelector(
        ".universal-short-share-toast"
      );


    if (!toast) {

      toast =
        document.createElement(
          "div"
        );


      toast.className =
        "universal-short-share-toast";


      toast.style.cssText = `

        position: fixed;

        left: 50%;

        bottom: 28px;

        transform:
          translateX(-50%);

        background:
          rgba(20,20,20,.92);

        color:
          #ffffff;

        padding:
          10px 16px;

        border-radius:
          20px;

        font-size:
          13px;

        font-family:
          -apple-system,
          BlinkMacSystemFont,
          "Segoe UI",
          Roboto,
          sans-serif;

        z-index:
          2147483647;

        pointer-events:
          none;

        opacity:
          0;

        transition:
          opacity .2s ease;

      `;


      document.body.appendChild(
        toast
      );

    }


    toast.textContent =
      message;


    toast.style.opacity =
      "1";


    clearTimeout(
      toast._hideTimer
    );


    toast._hideTimer =
      setTimeout(

        function () {

          toast.style.opacity =
            "0";

        },

        1500

      );

  }


  /* ==========================================================
     GET SHORT ID FROM SLIDE
  ========================================================== */

  function getShortIdFromSlide(slide) {

    if (!slide) {
      return null;
    }


    const id =
      slide.getAttribute(
        "data-id"
      );


    if (

      !id

      ||

      !String(id).trim()

    ) {

      return null;

    }


    return String(id).trim();

  }


  /* ==========================================================
     CREATE SHARE BUTTON
  ========================================================== */

  function createShareButton() {

    const button =
      document.createElement(
        "button"
      );


    button.type =
      "button";


    button.className =
      SHARE_BUTTON_CLASS;


    button.setAttribute(

      "aria-label",

      "Share Short"

    );


    button.setAttribute(

      "title",

      "Share Short"

    );


    button.innerHTML = `

      <div
        class="universal-share-icon-wrapper"
      >

        ${getShareIcon()}

      </div>


      <span
        class="universal-share-label"
      >

        Share

      </span>

    `;


    return button;

  }


  /* ==========================================================
     INSTALL SHARE BUTTON

     THIS IS THE IMPORTANT PART.

     Your optimization system deletes
     and recreates:

       .short-slide

     Therefore this function can be
     called repeatedly safely.

     It never duplicates buttons.
  ========================================================== */

  function installShareButton(slide) {

    if (

      !slide

      ||

      !slide.matches(
        SLIDE_SELECTOR
      )

    ) {

      return;

    }


    const id =
      getShortIdFromSlide(
        slide
      );


    if (!id) {

      return;

    }


    const actions =
      slide.querySelector(
        ACTIONS_SELECTOR
      );


    if (!actions) {

      return;

    }


    /*
      Already installed.
    */

    if (

      actions.querySelector(
        "." + SHARE_BUTTON_CLASS
      )

    ) {

      return;

    }


    /*
      Confirm Short exists.
    */

    const item =
      findShortById(
        id
      );


    if (!item) {

      return;

    }


    const button =
      createShareButton();


    /*
      Store ID directly.

      This means the click system
      does not depend on card order.
    */

    button.dataset.shortId =
      id;


    /*
      Put Share button in the
      existing professional UI.

      Order:

      Like
      Save
      Share ← NEW
      Open
    */

    const openButton =
      Array.from(
        actions.children
      ).find(

        function (element) {

          return (

            element.tagName === "A"

          );

        }

      );


    if (openButton) {

      actions.insertBefore(

        button,

        openButton

      );

    }

    else {

      actions.appendChild(
        button
      );

    }

  }


  /* ==========================================================
     INSTALL ON CURRENT SHORTS
  ========================================================== */

  function installOnCurrentShorts() {

    const slides =
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
     CLICK HANDLING

     EVENT DELEGATION.

     IMPORTANT:

     Your active Short can be destroyed
     at any moment.

     Therefore we attach ONE listener
     to document.

     No repeated listeners.
     No memory leaks.
  ========================================================== */

  document.addEventListener(

    "click",

    async function (event) {

      const button =
        event.target.closest(

          "." + SHARE_BUTTON_CLASS

        );


      if (!button) {
        return;
      }


      event.preventDefault();


      event.stopPropagation();


      if (

        event.stopImmediatePropagation

      ) {

        event.stopImmediatePropagation();

      }


      const id =
        button.dataset.shortId;


      if (!id) {
        return;
      }


      const item =
        findShortById(
          id
        );


      if (!item) {
        return;
      }


      await shareShort(
        item
      );

    },

    true

  );


  /* ==========================================================
     LIGHTWEIGHT DOM OBSERVER

     This watches ONLY for newly added nodes.

     It does NOT:

     ✗ scan every Short repeatedly
     ✗ create iframes
     ✗ modify data.js
     ✗ keep deleted Shorts alive

     When your optimized system creates:

       .short-slide

     the button is immediately added.
  ========================================================== */

  function startObserver() {

    if (!document.body) {
      return;
    }


    const observer =
      new MutationObserver(

        function (mutations) {

          mutations.forEach(

            function (mutation) {

              mutation.addedNodes.forEach(

                function (node) {

                  if (

                    node.nodeType !== 1

                  ) {

                    return;

                  }


                  /*
                    New Short itself.
                  */

                  if (

                    node.matches

                    &&

                    node.matches(
                      SLIDE_SELECTOR
                    )

                  ) {

                    installShareButton(
                      node
                    );


                    return;

                  }


                  /*
                    In case a parent containing
                    a Short was added.
                  */

                  if (

                    node.querySelectorAll

                  ) {

                    const slides =
                      node.querySelectorAll(
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

                }

              );

            }

          );

        }

      );


    observer.observe(

      document.body,

      {

        childList:
          true,


        subtree:
          true

      }

    );

  }


  /* ==========================================================
     START
  ========================================================== */

  function startUniversalShorts() {

    injectStyles();


    /*
      Install button if the active Short
      already exists.
    */

    installOnCurrentShorts();


    /*
      Detect future dynamically created
      Shorts.
    */

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

      startUniversalShorts,

      {

        once: true

      }

    );

  }

  else {

    startUniversalShorts();

  }


})();