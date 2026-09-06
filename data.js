/* ============================================================
   SAWANTWADI DIGITAL - MEDIA VISIBILITY DATABASE
   ============================================================ */


/* ============================================================
   SUPER ATTRIBUTES
   ============================================================ */

const superAttributes = {

  BASIC: {
    name: "BASIC",
    dailyHours: 6,
    startHour: 12,
    endHour: 18,
    pricePerWeek: 10
  },

  PRO: {
    name: "PRO",
    dailyHours: 12,
    startHour: 10,
    endHour: 22,
    pricePerWeek: 15
  },

  PREMIUM: {
    name: "PREMIUM",
    dailyHours: 24,
    startHour: 0,
    endHour: 24,
    pricePerWeek: 20
  }

};


/* ============================================================
   ALL MEDIA DATA
   ============================================================ */

var allMediaData = [

  /* ==========================================================
     STANDARD VIDEOS
     ========================================================== */

  {
    id: "v1",
    type: "video",
    title: "Building a Fullstack Web App from Scratch",
    creator: "freeCodeCamp.org",
    url: "https://www.youtube.com/watch?v=nu_pCVPKzTk",
    href: "https://www.youube.com/watch?v=nu_pCVPKzTk",
    creatorAvatar: "https://picsum.photos/id/1005/40/40",
    plan: "PREMIUM"
  },

  {
    id: "v2",
    type: "video",
    title: "10 CSS Pro Tips - Code This, NOT That!",
    creator: "Fireship",
    url: "https://www.youtube.com/watch?v=Qhaz36TZG5Y",
    href: "https://www.youtube.com/watch?v=Qhaz36TZG5Y",
    creatorAvatar: "https://picsum.photos/id/1025/40/40",
    plan: "PREMIUM"
  },

  {
    id: "v3",
    type: "video",
    title: "React Performance Optimization Guide",
    creator: "Jack Herrington",
    url: "https://www.youtube.com/watch?v=0y2m93_Mv9k",
    href: "https://www.youtube.com/watch?v=0y2m93_Mv9k",
    creatorAvatar: "https://picsum.photos/id/1027/40/40",
    plan: "PREMIUM"
  },

  {
    id: "v4",
    type: "video",
    title: "System Design Essentials for Engineers",
    creator: "ByteByteGo",
    url: "https://www.youtube.com/watch?v=i53Gi_K3o7I",
    href: "https://www.youtube.com/watch?v=i53Gi_K3o7I",
    creatorAvatar: "https://picsum.photos/id/1035/40/40",
    plan: "BASIC"
  },

  {
    id: "v5",
    type: "video",
    title: "Mastering Node.js Architecture",
    creator: "Traversy Media",
    url: "https://www.youtube.com/watch?v=fBNz5xF-Kx4",
    href: "https://www.youtube.com/watch?v=fBNz5xF-Kx4",
    creatorAvatar: "https://picsum.photos/id/1040/40/40",
    plan: "PRO"
  },

  {
    id: "v6",
    type: "video",
    title: "Tailwind CSS Tutorial for Beginners",
    creator: "Kevin Powell",
    url: "https://www.youtube.com/watch?v=dFgzHOX84xQ",
    href: "https://www.youtube.com/watch?v=dFgzHOX84xQ",
    creatorAvatar: "https://picsum.photos/id/1062/40/40",
    plan: "PREMIUM"
  },

  {
    id: "v7",
    type: "video",
    title: "Docker Crash Course for Beginners",
    creator: "TechWorld with Nana",
    url: "https://www.youtube.com/watch?v=3c-iBn73dDE",
    href: "https://www.youtube.com/watch?v=3c-iBn73dDE",
    creatorAvatar: "https://picsum.photos/id/1069/40/40",
    plan: "BASIC"
  },

  {
    id: "v8",
    type: "video",
    title: "Building Real-time Apps with WebSockets",
    creator: "Fireship",
    url: "https://www.youtube.com/watch?v=1BfCnjr_Vjg",
    href: "https://www.youtube.com/watch?v=1BfCnjr_Vjg",
    creatorAvatar: "https://picsum.photos/id/1074/40/40",
    plan: "PRO"
  },

  {
    id: "v9",
    type: "video",
    title: "TypeScript Full Course for Beginners",
    creator: "Programming with Mosh",
    url: "https://www.youtube.com/watch?v=d56mG7DezGs",
    href: "https://www.youtube.com/watch?v=d56mG7DezGs",
    creatorAvatar: "https://picsum.photos/id/1005/40/40",
    plan: "PREMIUM"
  },

  {
    id: "v10",
    type: "video",
    title: "How Large Language Models Work",
    creator: "3Blue1Brown",
    url: "https://www.youtube.com/watch?v=wjZofJX0v4M",
    href: "https://www.youtube.com/watch?v=wjZofJX0v4M",
    creatorAvatar: "https://picsum.photos/id/1080/40/40",
    plan: "BASIC"
  },

  {
    id: "v11",
    type: "video",
    title: "Figma UI Design Tutorial",
    creator: "DesignCourse",
    url: "https://www.youtube.com/watch?v=6t_dYhXyYjI",
    href: "https://www.youtube.com/watch?v=6t_dYhXyYjI",
    creatorAvatar: "https://picsum.photos/id/1025/40/40",
    plan: "PRO"
  },

  {
    id: "v12",
    type: "video",
    title: "Learn PostgreSQL Tutorial - Full Course for Beginners",
    creator: "freeCodeCamp.org",
    url: "https://www.youtube.com/watch?v=qw--VYLpxG4",
    href: "https://www.youtube.com/watch?v=qw--VYLpxG4",
    creatorAvatar: "https://picsum.photos/id/1084/40/40",
    plan: "PREMIUM"
  },

  {
    id: "v13",
    type: "video",
    title: "TypeScript Generics Tutorial",
    creator: "Web Dev Simplified",
    url: "https://www.youtube.com/watch?v=EcCTIExsqmI",
    href: "https://www.youtube.com/watch?v=EcCTIExsqmI",
    creatorAvatar: "https://picsum.photos/id/1011/40/40",
    plan: "BASIC"
  },

  {
    id: "v14",
    type: "video",
    title: "Flexbox in 100 Seconds",
    creator: "Fireship",
    url: "https://www.youtube.com/watch?v=K74l26pE4YA",
    href: "https://www.youtube.com/watch?v=K74l26pE4YA",
    creatorAvatar: "https://picsum.photos/id/1082/40/40",
    plan: "PRO"
  },

  {
    id: "v15",
    type: "video",
    title: "7 Clean Code Tips You Should Know",
    creator: "CodeAesthetic",
    url: "https://www.youtube.com/watch?v=CFRhGnuXG-4",
    href: "https://www.youtube.com/watch?v=CFRhGnuXG-4",
    creatorAvatar: "https://picsum.photos/id/1035/40/40",
    plan: "PREMIUM"
  },


  /* ==========================================================
     REAL YOUTUBE SHORTS
     ========================================================== */

  {
    id: "s1",
    type: "shorts",
    title: "Don't Use JavaScript for This - Part 1",
    creator: "Kevin Powell",
    url: "https://www.youtube.com/shorts/zoJkZ7GC1s4",
    creatorAvatar: "https://picsum.photos/id/1011/40/40",
    plan: "BASIC"
  },

  {
    id: "s2",
    type: "shorts",
    title: "Responsive Scrolling with CSS",
    creator: "Kevin Powell",
    url: "https://www.youtube.com/shorts/G7bKldPwBmk",
    creatorAvatar: "https://picsum.photos/id/1062/40/40",
    plan: "PRO"
  },

  {
    id: "s3",
    type: "shorts",
    title: "The Scrollbar Control You Didn't Know You Needed",
    creator: "Kevin Powell",
    url: "https://www.youtube.com/shorts/ZFhPGfLfSa8",
    creatorAvatar: "https://picsum.photos/id/1025/40/40",
    plan: "PREMIUM"
  },

  {
    id: "s4",
    type: "shorts",
    title: "CSS Shorthands Aren't Always Worth It",
    creator: "Kevin Powell",
    url: "https://www.youtube.com/shorts/iTps-EehgKc",
    creatorAvatar: "https://picsum.photos/id/1027/40/40",
    plan: "BASIC"
  },

  {
    id: "s5",
    type: "shorts",
    title: "Simplify Your Code with This Pseudo-Class",
    creator: "Kevin Powell",
    url: "https://www.youtube.com/shorts/wk79huqm1h4",
    creatorAvatar: "https://picsum.photos/id/1074/40/40",
    plan: "PRO"
  },

  {
    id: "s6",
    type: "shorts",
    title: "Number Inputs Aren't So Straight-Forward",
    creator: "Kevin Powell",
    url: "https://www.youtube.com/shorts/nnZS761ngXE",
    creatorAvatar: "https://picsum.photos/id/1040/40/40",
    plan: "PREMIUM"
  },

  {
    id: "s7",
    type: "shorts",
    title: "Social Media Icons with Hover Tooltip",
    creator: "CodeByGaurav",
    url: "https://www.youtube.com/shorts/NobIwYsX8XI",
    creatorAvatar: "https://picsum.photos/id/1005/40/40",
    plan: "BASIC"
  },

  {
    id: "s8",
    type: "shorts",
    title: "Simple Sign In Form UI",
    creator: "CodeByGaurav",
    url: "https://www.youtube.com/shorts/IjqSSyjrWPA",
    creatorAvatar: "https://picsum.photos/id/1062/40/40",
    plan: "PRO"
  },

  {
    id: "s9",
    type: "shorts",
    title: "Creative Menu Hover Effects",
    creator: "CodeByGaurav",
    url: "https://www.youtube.com/shorts/DgHJZuVu7bE",
    creatorAvatar: "https://picsum.photos/id/1025/40/40",
    plan: "PREMIUM"
  },

  {
    id: "s10",
    type: "shorts",
    title: "Social Icons Hover Effects",
    creator: "CodeByGaurav",
    url: "https://www.youtube.com/shorts/IQcVTmO34Tw",
    creatorAvatar: "https://picsum.photos/id/1027/40/40",
    plan: "BASIC"
  },

  {
    id: "s11",
    type: "shorts",
    title: "Tags Input Field Using JavaScript",
    creator: "CodeByGaurav",
    url: "https://www.youtube.com/shorts/AW66n-xzytI",
    creatorAvatar: "https://picsum.photos/id/1074/40/40",
    plan: "PRO"
  },

  {
    id: "s12",
    type: "shorts",
    title: "Modern Digital Clock UI",
    creator: "CodeByGaurav",
    url: "https://www.youtube.com/shorts/wEV3uYCYcJ0",
    creatorAvatar: "https://picsum.photos/id/1084/40/40",
    plan: "PREMIUM"
  },

  {
    id: "s13",
    type: "shorts",
    title: "Animated Download Button",
    creator: "CodeByGaurav",
    url: "https://www.youtube.com/shorts/Rk8W1dfmxHA",
    creatorAvatar: "https://picsum.photos/id/1035/40/40",
    plan: "BASIC"
  },

  {
    id: "s14",
    type: "shorts",
    title: "Animated Login Form",
    creator: "CodeByGaurav",
    url: "https://www.youtube.com/shorts/UAoT_QOuL90",
    creatorAvatar: "https://picsum.photos/id/1011/40/40",
    plan: "PRO"
  },

  {
    id: "s15",
    type: "shorts",
    title: "Apple Liquid Navigation Bar",
    creator: "CodeByGaurav",
    url: "https://www.youtube.com/shorts/RNJpgEHeO8A",
    creatorAvatar: "https://picsum.photos/id/1069/40/40",
    plan: "PREMIUM"
  },

  {
    id: "s16",
    type: "shorts",
    title: "Animated Toggle Switch",
    creator: "CodeByGaurav",
    url: "https://www.youtube.com/shorts/olwPaNJn59g",
    creatorAvatar: "https://picsum.photos/id/1062/40/40",
    plan: "BASIC"
  },

  {
    id: "s17",
    type: "shorts",
    title: "Python File Handling Tutorial",
    creator: "CodeOneDigest",
    url: "https://www.youtube.com/shorts/TeCuTFP5IZU",
    creatorAvatar: "https://picsum.photos/id/1080/40/40",
    plan: "PRO"
  },

  {
    id: "s18",
    type: "shorts",
    title: "Difference Between Python Modules, Packages and Libraries",
    creator: "CodeOneDigest",
    url: "https://www.youtube.com/shorts/J8GfcfghfWQ",
    creatorAvatar: "https://picsum.photos/id/1082/40/40",
    plan: "PREMIUM"
  }

];


/* ============================================================
   CURRENTLY VISIBLE MEDIA
   ============================================================ */

var mediaData = [];


/* ============================================================
   PLAN VISIBILITY
   ============================================================ */

function isMediaPlanActive(plan) {

  plan = String(plan || "").toUpperCase();

  var rule = superAttributes[plan];

  if (!rule) {
    return false;
  }

  var hour = new Date().getHours();

  var start = rule.startHour;
  var end = rule.endHour;


  /* 24-hour plan */

  if (start === 0 && end === 24) {
    return true;
  }


  /* Normal time range */

  if (start < end) {

    return (
      hour >= start &&
      hour < end
    );

  }


  /* Overnight time range */

  if (start > end) {

    return (
      hour >= start ||
      hour < end
    );

  }


  return false;
}


/* ============================================================
   SHUFFLE MEDIA
   ============================================================ */

function shuffleMedia(array) {

  /*
    Fisher-Yates shuffle

    Gives every item a proper random position.
  */

  for (
    var i = array.length - 1;
    i > 0;
    i--
  ) {

    var j =
      Math.floor(
        Math.random() * (i + 1)
      );


    var temp =
      array[i];

    array[i] =
      array[j];

    array[j] =
      temp;

  }

  return array;

}


/* ============================================================
   BUILD CURRENT MEDIA DATABASE
   ============================================================ */

function buildMediaDatabase() {

  /*
    First filter media according to
    the active plan.
  */

  mediaData = allMediaData.filter(
    function(media) {

      return isMediaPlanActive(
        media.plan
      );

    }
  );


  /*
    Then shuffle the currently
    visible media.

    The original allMediaData
    order is NOT changed.
  */

  shuffleMedia(
    mediaData
  );

}


/* ============================================================
   INITIAL BUILD
   ============================================================ */

buildMediaDatabase();


/* ============================================================
   ANALYTICS
   ============================================================ */

function logInteraction(id, type) {

  console.log(
    `[Analytics IndexedDB] Logged ${type} for ID: ${id}`
  );

}


/* ============================================================
   UNIVERSAL CARD HREF LOGIC
   ============================================================
   
   This part makes the href in this data file control
   what happens when a VIDEO CARD is clicked.

   No UI/card-rendering code needs to be edited.
   ============================================================ */

(function setupMediaCardHrefLogic() {

  var installedCards = new WeakSet();


  /* ----------------------------------------------------------
     Get currently visible cards
     ---------------------------------------------------------- */

  function getCards() {

    return Array.from(
      document.querySelectorAll(
        "#carousel .card"
      )
    );

  }


  /* ----------------------------------------------------------
     Find the media belonging to a card
     ---------------------------------------------------------- */

  function getMediaForCard(card) {

    var cards = getCards();

    var index =
      cards.indexOf(card);

    if (index === -1) {
      return null;
    }


    /*
      active media is normally rendered in the
      same order as mediaData.
    */

    if (
      Array.isArray(mediaData) &&
      mediaData[index]
    ) {

      return mediaData[index];

    }


    /*
      Fallback to allMediaData.
    */

    if (
      Array.isArray(allMediaData) &&
      allMediaData[index]
    ) {

      return allMediaData[index];

    }


    return null;
  }


  /* ----------------------------------------------------------
     Handle card click
     ---------------------------------------------------------- */

  function handleCardClick(event) {

    var card =
      event.currentTarget;

    var media =
      getMediaForCard(card);

    if (!media) {
      return;
    }


    /*
      ONLY normal videos use href.

      Shorts keep their existing UI behavior.
    */

    if (
      media.type !== "video"
    ) {

      return;

    }


    if (
      !media.href
    ) {

      return;

    }


    /*
      Stop the existing UI click handler
      from opening the old YouTube URL.
    */

    event.preventDefault();

    event.stopImmediatePropagation();


    /*
      Open the href from THIS data.js.
    */

    window.location.href =
      media.href;

  }


  /* ----------------------------------------------------------
     Install click handler on every video card
     ---------------------------------------------------------- */

  function install() {

    var cards =
      getCards();

    cards.forEach(
      function(card) {

        if (
          installedCards.has(card)
        ) {

          return;

        }


        var media =
          getMediaForCard(card);

        if (!media) {
          return;
        }


        /*
          Only normal video cards.
        */

        if (
          media.type !== "video"
        ) {

          return;

        }


        if (
          !media.href
        ) {

          return;

        }


        installedCards.add(
          card
        );


        /*
          Capture phase is important.

          It lets this handler run before
          the existing card click handler.
        */

        card.addEventListener(
          "click",
          handleCardClick,
          true
        );


        /*
          Also make the card behave like a link
          visually/semantically.
        */

        card.setAttribute(
          "data-href",
          media.href
        );

        card.style.cursor =
          "pointer";

      }
    );

  }


  /* ----------------------------------------------------------
     Watch for cards created dynamically
     ---------------------------------------------------------- */

  function startObserver() {

    if (
      !document.body
    ) {

      return;

    }


    var observer =
      new MutationObserver(
        function() {

          install();

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


  /* ----------------------------------------------------------
     Start after DOM is ready
     ---------------------------------------------------------- */

  function start() {

    install();

    startObserver();


    /*
      Backup scans because the map/card UI is
      rendered asynchronously.
    */

    setTimeout(
      install,
      250
    );

    setTimeout(
      install,
      500
    );

    setTimeout(
      install,
      1000
    );

    setTimeout(
      install,
      2000
    );

    setTimeout(
      install,
      4000
    );

  }


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


/* ============================================================
   REFRESH EVERY 30 SECONDS
   ============================================================ */

setInterval(
  function() {

    var beforeIds =
      mediaData
        .map(
          function(media) {
            return media.id;
          }
        )
        .join(",");


    buildMediaDatabase();


    var afterIds =
      mediaData
        .map(
          function(media) {
            return media.id;
          }
        )
        .join(",");


    if (
      beforeIds !== afterIds
    ) {

      window.dispatchEvent(
        new Event(
          "MediaVisibilityChanged"
        )
      );

    }

  },
  30000
);