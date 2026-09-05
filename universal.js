/* ============================================================
   UNIVERSAL.JS
   ============================================================

   FEATURES
   ------------------------------------------------------------
   1. Adds Share button to every normal VIDEO thumbnail.
   2. Share link is generated from the media ID.
   3. Example:
        index.html?video=v7

   4. Opening that link shows ONLY the shared video.
   5. Displays "Shared Video" at the top.
   6. Displays "View All" button.
   7. View All returns to the normal feed.
   8. Shorts are NOT modified.
   9. Existing video-card UI is reused.
   10. No changes to card HTML/CSS are required.
   ============================================================ */


(function () {

  "use strict";


  /* ==========================================================
     CONFIGURATION
     ========================================================== */

  const SHARE_PARAMETER = "video";

  const VIDEO_CARD_SELECTOR =
    "#main-feed .video-card";

  const THUMBNAIL_SELECTOR =
    ".video-thumbnail-box";


  /* ==========================================================
     GET SHARED VIDEO ID
     ========================================================== */

  function getSharedVideoId() {

    try {

      const params =
        new URLSearchParams(
          window.location.search
        );

      const id =
        params.get(
          SHARE_PARAMETER
        );

      if (!id) {
        return null;
      }

      return id.trim();

    } catch (error) {

      console.error(
        "Universal.js: Could not read shared video ID.",
        error
      );

      return null;

    }

  }


  /* ==========================================================
     SHARED VIDEO ID
     ========================================================== */

  const sharedVideoId =
    getSharedVideoId();


  /* ==========================================================
     FIND MEDIA BY ID
     ==========================================================

     IMPORTANT:

     Search allMediaData FIRST.

     mediaData is only the currently-visible/active
     plan-filtered database.

     allMediaData contains the complete database.
     ========================================================== */

  function findVideoById(id) {

    if (!id) {
      return null;
    }


    /* --------------------------------------------------------
       First search complete database
       -------------------------------------------------------- */

    if (
      Array.isArray(
        window.allMediaData
      )
    ) {

      const completeMatch =
        window.allMediaData.find(
          function (item) {

            return (
              String(item.id) ===
              String(id) &&
              item.type === "video"
            );

          }
        );

      if (completeMatch) {
        return completeMatch;
      }

    }


    /* --------------------------------------------------------
       Fallback to visible database
       -------------------------------------------------------- */

    if (
      Array.isArray(
        window.mediaData
      )
    ) {

      const visibleMatch =
        window.mediaData.find(
          function (item) {

            return (
              String(item.id) ===
              String(id) &&
              item.type === "video"
            );

          }
        );

      if (visibleMatch) {
        return visibleMatch;
      }

    }


    return null;

  }


  /* ==========================================================
     SHARED MEDIA
     ========================================================== */

  const sharedMedia =
    findVideoById(
      sharedVideoId
    );


  /* ==========================================================
     PREPARE SHARED MODE
     ==========================================================

     THIS RUNS BEFORE YOUR EXISTING DOMContentLoaded FEED
     RENDERER.

     Your index.html does:

       data.js
       universal.js
       existing script

     Therefore we can safely replace mediaData before
     the existing renderer does:

       const dataset = mediaData;

     This solves the infinite-feed problem completely.
     ========================================================== */

  if (
    sharedVideoId &&
    sharedMedia
  ) {

    /*
      Keep only the requested video.

      We use a new array rather than modifying
      allMediaData.
    */

    window.mediaData = [
      sharedMedia
    ];

  }


  /* ==========================================================
     INJECT UNIVERSAL CSS
     ========================================================== */

  function injectStyles() {

    if (
      document.getElementById(
        "universal-share-styles"
      )
    ) {

      return;

    }


    const style =
      document.createElement(
        "style"
      );

    style.id =
      "universal-share-styles";


    style.textContent = `

      /* ======================================================
         SHARE BUTTON
         ====================================================== */

      .universal-share-btn {

        position: absolute;

        top: 8px;

        right: 48px;

        width: 32px;

        height: 32px;

        border: none;

        border-radius: 50%;

        background:
          rgba(0, 0, 0, 0.68);

        backdrop-filter:
          blur(5px);

        -webkit-backdrop-filter:
          blur(5px);

        color: #ffffff;

        display: flex;

        align-items: center;

        justify-content: center;

        padding: 0;

        margin: 0;

        cursor: pointer;

        z-index: 10;

        transition:
          transform 0.15s ease,
          background 0.15s ease;

      }


      .universal-share-btn:active {

        transform:
          scale(0.88);

      }


      .universal-share-btn svg {

        width: 17px;

        height: 17px;

        pointer-events: none;

      }


      /* ======================================================
         SHARED VIDEO HEADER
         ====================================================== */

      .universal-shared-header {

        display: flex;

        align-items: center;

        justify-content: space-between;

        gap: 10px;

        padding:
          8px 2px 14px 2px;

        margin-bottom: 2px;

      }


      .universal-shared-label {

        font-size: 18px;

        line-height: 1.2;

        font-weight: 700;

        color: #ffffff;

      }


      .universal-view-all {

        border: none;

        background: #ffffff;

        color: #0f0f0f;

        border-radius: 18px;

        padding:
          7px 13px;

        font-size: 12px;

        font-weight: 700;

        cursor: pointer;

        white-space: nowrap;

      }


      .universal-view-all:active {

        transform:
          scale(0.96);

      }


      /* ======================================================
         SHARED ERROR
         ====================================================== */

      .universal-shared-error {

        padding:
          30px 10px;

        text-align: center;

        color: #aaaaaa;

        font-size: 14px;

      }

    `;


    document.head.appendChild(
      style
    );

  }


  /* ==========================================================
     SHARE SVG
     ========================================================== */

  function getShareIcon() {

    return `

      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >

        <circle
          cx="18"
          cy="5"
          r="3"
        ></circle>

        <circle
          cx="6"
          cy="12"
          r="3"
        ></circle>

        <circle
          cx="18"
          cy="19"
          r="3"
        ></circle>

        <line
          x1="8.59"
          y1="13.51"
          x2="15.42"
          y2="17.49"
        ></line>

        <line
          x1="15.41"
          y1="6.51"
          x2="8.59"
          y2="10.49"
        ></line>

      </svg>

    `;

  }


  /* ==========================================================
     CREATE SHARE URL
     ========================================================== */

  function createShareUrl(id) {

    const url =
      new URL(
        window.location.href
      );


    /*
      Remove any existing parameters.
    */

    url.search = "";


    /*
      Add the shared video ID.
    */

    url.searchParams.set(
      SHARE_PARAMETER,
      id
    );


    /*
      Remove hash if one exists.
    */

    url.hash = "";


    return url.toString();

  }


  /* ==========================================================
     COPY TO CLIPBOARD
     ========================================================== */

  async function copyToClipboard(
    text
  ) {

    try {

      if (
        navigator.clipboard &&
        navigator.clipboard.writeText
      ) {

        await navigator.clipboard.writeText(
          text
        );

        return true;

      }

    } catch (error) {

      console.warn(
        "Clipboard API failed.",
        error
      );

    }


    /*
      Older browser fallback.
    */

    try {

      const textarea =
        document.createElement(
          "textarea"
        );

      textarea.value =
        text;

      textarea.style.position =
        "fixed";

      textarea.style.opacity =
        "0";

      textarea.style.pointerEvents =
        "none";

      document.body.appendChild(
        textarea
      );

      textarea.focus();

      textarea.select();

      const successful =
        document.execCommand(
          "copy"
        );

      textarea.remove();

      return successful;

    } catch (error) {

      console.error(
        "Clipboard fallback failed.",
        error
      );

      return false;

    }

  }


  /* ==========================================================
     SHARE VIDEO
     ========================================================== */

  async function shareVideo(
    media
  ) {

    if (!media || !media.id) {
      return;
    }


    const shareUrl =
      createShareUrl(
        media.id
      );


    const shareData = {

      title:
        media.title ||
        "Shared Video",

      text:
        media.title ||
        "Check out this video",

      url:
        shareUrl

    };


    /*
      Native Android / browser share.
    */

    if (
      navigator.share
    ) {

      try {

        await navigator.share(
          shareData
        );

        return;

      } catch (error) {

        /*
          User pressing Cancel is not an error
          that needs a fallback.
        */

        if (
          error &&
          error.name ===
            "AbortError"
        ) {

          return;

        }

      }

    }


    /*
      Clipboard fallback.
    */

    const copied =
      await copyToClipboard(
        shareUrl
      );


    if (copied) {

      showTemporaryMessage(
        "Link copied"
      );

    } else {

      /*
        Last-resort fallback.
      */

      window.prompt(
        "Copy this video link:",
        shareUrl
      );

    }

  }


  /* ==========================================================
     TEMPORARY MESSAGE
     ========================================================== */

  function showTemporaryMessage(
    message
  ) {

    const oldMessage =
      document.getElementById(
        "universal-share-message"
      );

    if (oldMessage) {
      oldMessage.remove();
    }


    const box =
      document.createElement(
        "div"
      );

    box.id =
      "universal-share-message";


    box.textContent =
      message;


    box.style.position =
      "fixed";

    box.style.left =
      "50%";

    box.style.bottom =
      "24px";

    box.style.transform =
      "translateX(-50%)";

    box.style.zIndex =
      "99999";

    box.style.background =
      "rgba(40,40,40,0.96)";

    box.style.color =
      "#ffffff";

    box.style.padding =
      "10px 15px";

    box.style.borderRadius =
      "20px";

    box.style.fontSize =
      "13px";

    box.style.fontWeight =
      "600";

    box.style.boxShadow =
      "0 5px 25px rgba(0,0,0,.35)";


    document.body.appendChild(
      box
    );


    setTimeout(
      function () {

        box.style.opacity =
          "0";

        box.style.transition =
          "opacity .2s ease";

        setTimeout(
          function () {

            box.remove();

          },
          220
        );

      },
      1800
    );

  }


  /* ==========================================================
     ADD SHARE BUTTON TO ONE VIDEO CARD
     ========================================================== */

  function installShareButton(
    card
  ) {

    if (!card) {
      return;
    }


    /*
      Do not install twice.
    */

    if (
      card.dataset.universalShareInstalled ===
      "true"
    ) {

      return;

    }


    const id =
      card.getAttribute(
        "data-id"
      );


    if (!id) {
      return;
    }


    /*
      Make absolutely sure this is a
      normal video card.
    */

    const media =
      findVideoById(
        id
      );


    if (
      !media ||
      media.type !== "video"
    ) {

      return;

    }


    const thumbnail =
      card.querySelector(
        THUMBNAIL_SELECTOR
      );


    if (!thumbnail) {
      return;
    }


    /*
      Prevent duplicate buttons.
    */

    if (
      thumbnail.querySelector(
        ".universal-share-btn"
      )
    ) {

      card.dataset.universalShareInstalled =
        "true";

      return;

    }


    const button =
      document.createElement(
        "button"
      );


    button.type =
      "button";

    button.className =
      "universal-share-btn";

    button.setAttribute(
      "aria-label",
      "Share video"
    );

    button.setAttribute(
      "title",
      "Share video"
    );


    button.innerHTML =
      getShareIcon();


    /*
      IMPORTANT:

      This button sits INSIDE the <a>
      video card.

      Therefore prevent the anchor from
      opening when Share is pressed.
    */

    button.addEventListener(
      "click",
      async function (event) {

        event.preventDefault();

        event.stopPropagation();

        if (
          event.stopImmediatePropagation
        ) {

          event.stopImmediatePropagation();

        }


        await shareVideo(
          media
        );

      },
      true
    );


    thumbnail.appendChild(
      button
    );


    card.dataset.universalShareInstalled =
      "true";

  }


  /* ==========================================================
     INSTALL SHARE BUTTONS ON ALL CURRENT CARDS
     ========================================================== */

  function installShareButtons() {

    const cards =
      document.querySelectorAll(
        VIDEO_CARD_SELECTOR
      );


    cards.forEach(
      function (card) {

        installShareButton(
          card
        );

      }
    );

  }


  /* ==========================================================
     WATCH DYNAMIC FEED
     ========================================================== */

  function startCardObserver() {

    if (!document.body) {
      return;
    }


    const observer =
      new MutationObserver(
        function () {

          installShareButtons();

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
     START SHARING SYSTEM
     ========================================================== */

  function startShareSystem() {

    injectStyles();

    installShareButtons();

    startCardObserver();


    /*
      Backup scans because your feed
      creates cards asynchronously.
    */

    setTimeout(
      installShareButtons,
      100
    );

    setTimeout(
      installShareButtons,
      300
    );

    setTimeout(
      installShareButtons,
      700
    );

    setTimeout(
      installShareButtons,
      1500
    );

    setTimeout(
      installShareButtons,
      3000
    );

  }


  /* ==========================================================
     SHARED VIDEO MODE
     ========================================================== */

  function activateSharedMode() {

    const feed =
      document.getElementById(
        "main-feed"
      );


    if (!feed) {
      return;
    }


    /*
      We don't immediately manipulate the feed.

      The existing index.html needs to first
      create its normal video card.
    */

    let attempts = 0;

    const maxAttempts = 40;


    const timer =
      setInterval(
        function () {

          attempts++;


          const card =
            feed.querySelector(
              `.video-card[data-id="${CSS.escape(sharedVideoId)}"]`
            );


          if (card) {

            clearInterval(
              timer
            );

            buildSharedLayout(
              feed,
              card
            );

            return;

          }


          if (
            attempts >=
            maxAttempts
          ) {

            clearInterval(
              timer
            );

          }

        },
        250
      );

  }


  /* ==========================================================
     BUILD SHARED LAYOUT
     ========================================================== */

  function buildSharedLayout(
    feed,
    sharedCard
  ) {

    /*
      Don't build it twice.
    */

    if (
      feed.querySelector(
        ".universal-shared-header"
      )
    ) {

      return;

    }


    /*
      IMPORTANT:

      We DO NOT move the card into another
      container.

      The existing card stays exactly where
      the existing feed renderer put it.

      This preserves all existing event
      listeners, including:

        - Save
        - Click analytics
        - View tracking
    */


    const children =
      Array.from(
        feed.children
      );


    /*
      Hide everything except:

        - the requested video
        - the sentinel
    */

    children.forEach(
      function (child) {

        if (
          child === sharedCard
        ) {

          child.style.display =
            "";

          return;

        }


        /*
          Hide sentinel too.

          This prevents more feed content
          from being generated while viewing
          a shared video.
        */

        child.style.display =
          "none";

      }
    );


    const sentinel =
      document.getElementById(
        "sentinel"
      );


    if (sentinel) {

      sentinel.style.display =
        "none";

    }


    /*
      Create header.
    */

    const header =
      document.createElement(
        "div"
      );


    header.className =
      "universal-shared-header";


    header.innerHTML = `

      <div
        class="universal-shared-label"
      >
        Shared Video
      </div>

      <button
        type="button"
        class="universal-view-all"
      >
        View All
      </button>

    `;


    /*
      Put header BEFORE the video.

      Because the other feed elements are
      display:none, the selected video
      naturally appears directly underneath.
    */

    feed.insertBefore(
      header,
      sharedCard
    );


    /*
      View All.
    */

    const viewAll =
      header.querySelector(
        ".universal-view-all"
      );


    if (viewAll) {

      viewAll.addEventListener(
        "click",
        function (event) {

          event.preventDefault();

          event.stopPropagation();


          /*
            Remove ?video=...
            and reload the same index page.

            This is the safest way to restore
            the original shuffled feed because
            your index.html creates its feed
            using local variables captured from
            mediaData during DOMContentLoaded.
          */

          const cleanUrl =
            window.location.origin +
            window.location.pathname;


          window.location.href =
            cleanUrl;

        }
      );

    }


    /*
      Make sure Share button is installed
      on the shared card too.
    */

    installShareButton(
      sharedCard
    );


    /*
      Scroll the actual feed to the top.
    */

    feed.scrollTop =
      0;

  }


  /* ==========================================================
     SHARED VIDEO NOT FOUND
     ========================================================== */

  function showSharedVideoError() {

    if (!sharedVideoId) {
      return;
    }


    if (sharedMedia) {
      return;
    }


    const feed =
      document.getElementById(
        "main-feed"
      );


    if (!feed) {
      return;
    }


    /*
      Avoid duplicate error.
    */

    if (
      feed.querySelector(
        ".universal-shared-error"
      )
    ) {

      return;

    }


    feed.innerHTML = `

      <div
        class="universal-shared-header"
      >

        <div
          class="universal-shared-label"
        >
          Shared Video
        </div>

        <button
          type="button"
          class="universal-view-all"
        >
          View All
        </button>

      </div>


      <div
        class="universal-shared-error"
      >
        This video could not be found.
      </div>

    `;


    const button =
      feed.querySelector(
        ".universal-view-all"
      );


    if (button) {

      button.addEventListener(
        "click",
        function () {

          window.location.href =
            window.location.origin +
            window.location.pathname;

        }
      );

    }

  }


  /* ==========================================================
     INITIALIZE
     ========================================================== */

  function initialize() {

    /*
      CSS can be installed immediately.
    */

    injectStyles();


    /*
      Normal share buttons are installed
      after DOM is ready.
    */

    startShareSystem();


    /*
      Shared mode.
    */

    if (sharedVideoId) {

      if (sharedMedia) {

        activateSharedMode();

      } else {

        showSharedVideoError();

      }

    }

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
      initialize
    );

  } else {

    initialize();

  }


})();