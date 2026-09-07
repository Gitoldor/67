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
   ALL MEDIA DATA (Total 33 Items: 15 Videos & 18 Shorts)
   ========================================================== */

var allMediaData = [

  /* ==========================================================
     VIDEOS (15 Items)
     ========================================================== */

  {
    id: "v1",
    type: "video",
    title: "कोकणातील एकच वाडी-सावंतवाडी दर्शन",
    creator: "Bhushan The Explorer",
    url: "https://www.youtube.com/watch?v=r2IS--OCGls",
    href: "https://www.youtube.com/watch?v=r2IS--OCGls",
    creatorAvatar: "https://picsum.photos/id/1005/40/40",
    plan: "PREMIUM"
  },

  {
    id: "v2",
    type: "video",
    title: "सावंतवाडीतील एक छोटंसं सुंदर गाव – कोल्झर",
    creator: "Saurabh Sawant Vlogs",
    url: "https://www.youtube.com/watch?v=AKYk4uJKHRE",
    href: "https://www.youtube.com/watch?v=AKYk4uJKHRE",
    creatorAvatar: "https://picsum.photos/id/1025/40/40",
    plan: "PREMIUM"
  },

  {
    id: "v3",
    type: "video",
    title: "My First Vlog | Gig at Sawantwadi",
    creator: "Marshon Fernandes",
    url: "https://www.youtube.com/watch?v=cL6_DZKTpIQ",
    href: "https://www.youtube.com/watch?v=cL6_DZKTpIQ",
    creatorAvatar: "https://picsum.photos/id/1027/40/40",
    plan: "PREMIUM"
  },

  {
    id: "v4",
    type: "video",
    title: "Sawantwadi Tourist Places | सावंतवाडी शहराची सफर",
    creator: "Konkan Tour",
    url: "https://www.youtube.com/watch?v=q7GLAVL-C-o",
    href: "https://www.youtube.com/watch?v=q7GLAVL-C-o",
    creatorAvatar: "https://picsum.photos/id/1035/40/40",
    plan: "BASIC"
  },

  {
    id: "v5",
    type: "video",
    title: "निसर्गसौंदर्याने नटलेल्या सावंतवाडी शहराची सफर",
    creator: "Waman Parulekar Vlogs",
    url: "https://www.youtube.com/watch?v=aoqHZ_ObT5M",
    href: "https://www.youtube.com/watch?v=aoqHZ_ObT5M",
    creatorAvatar: "https://picsum.photos/id/1040/40/40",
    plan: "PRO"
  },

  {
    id: "v6",
    type: "video",
    title: "Sawantwadi - Konkan’s most underrated beauty",
    creator: "Riding The Wanderlust",
    url: "https://www.youtube.com/watch?v=J6uwrggQyEo",
    href: "https://www.youtube.com/watch?v=J6uwrggQyEo",
    creatorAvatar: "https://picsum.photos/id/1062/40/40",
    plan: "PREMIUM"
  },

  {
    id: "v7",
    type: "video",
    title: "Walking tour of Sawantwadi, Maharashtra",
    creator: "Memorable Journeys",
    url: "https://www.youtube.com/watch?v=70aCMntByzA",
    href: "https://www.youtube.com/watch?v=70aCMntByzA",
    creatorAvatar: "https://picsum.photos/id/1069/40/40",
    plan: "BASIC"
  },

  {
    id: "v8",
    type: "video",
    title: "Sawantwadi Khau Galli | Kokan Street Food",
    creator: "Bharatiya Touring Party",
    url: "https://www.youtube.com/watch?v=962lpJyO6ks",
    href: "https://www.youtube.com/watch?v=962lpJyO6ks",
    creatorAvatar: "https://picsum.photos/id/1074/40/40",
    plan: "PRO"
  },

  {
    id: "v9",
    type: "video",
    title: "Sawantwadi | Kokan🌴 | Sindhudurg",
    creator: "Nana",
    url: "https://www.youtube.com/watch?v=LL1xfSaKddw",
    href: "https://www.youtube.com/watch?v=LL1xfSaKddw",
    creatorAvatar: "https://picsum.photos/id/1005/40/40",
    plan: "PREMIUM"
  },

  {
    id: "v10",
    type: "video",
    title: "Sawantwadi Town & Rajwada History",
    creator: "Konkan Explorer",
    url: "https://www.youtube.com/watch?v=r2IS--OCGls",
    href: "https://www.youtube.com/watch?v=r2IS--OCGls",
    creatorAvatar: "https://picsum.photos/id/1080/40/40",
    plan: "BASIC"
  },

  {
    id: "v11",
    type: "video",
    title: "Exploring Moti Talao & Palace Grounds",
    creator: "Sindhudurg Diaries",
    url: "https://www.youtube.com/watch?v=q7GLAVL-C-o",
    href: "https://www.youtube.com/watch?v=q7GLAVL-C-o",
    creatorAvatar: "https://picsum.photos/id/1025/40/40",
    plan: "PRO"
  },

  {
    id: "v12",
    type: "video",
    title: "Traditional Wooden Toys of Sawantwadi",
    creator: "Craft Heritage India",
    url: "https://www.youtube.com/watch?v=aoqHZ_ObT5M",
    href: "https://www.youtube.com/watch?v=aoqHZ_ObT5M",
    creatorAvatar: "https://picsum.photos/id/1084/40/40",
    plan: "PREMIUM"
  },

  {
    id: "v13",
    type: "video",
    title: "Malvani Food Tour in Sawantwadi Market",
    creator: "Food Ranger Kokan",
    url: "https://www.youtube.com/watch?v=962lpJyO6ks",
    href: "https://www.youtube.com/watch?v=962lpJyO6ks",
    creatorAvatar: "https://picsum.photos/id/1011/40/40",
    plan: "BASIC"
  },

  {
    id: "v14",
    type: "video",
    title: "Monsoon Drive through Amboli Ghat to Sawantwadi",
    creator: "DriveWithMe",
    url: "https://www.youtube.com/watch?v=J6uwrggQyEo",
    href: "https://www.youtube.com/watch?v=J6uwrggQyEo",
    creatorAvatar: "https://picsum.photos/id/1082/40/40",
    plan: "PRO"
  },

  {
    id: "v15",
    type: "video",
    title: "Hidden Waterfalls & Nature Trails near Sawantwadi",
    creator: "Wild Konkan",
    url: "https://www.youtube.com/watch?v=70aCMntByzA",
    href: "https://www.youtube.com/watch?v=70aCMntByzA",
    creatorAvatar: "https://picsum.photos/id/1035/40/40",
    plan: "PREMIUM"
  },


  /* ==========================================================
     YOUTUBE SHORTS (18 Items)
     ========================================================== */

  {
    id: "s1",
    type: "shorts",
    title: "The Royal Magic of Sawantwadi",
    creator: "Neel Madhav",
    url: "https://www.youtube.com/shorts/CvHfEYGQyYM",
    creatorAvatar: "https://picsum.photos/id/1011/40/40",
    plan: "BASIC"
  },

  {
    id: "s2",
    type: "shorts",
    title: "महाराष्ट्र का आखिरी जीला सावंतवाड़ी",
    creator: "Travel Shorts",
    url: "https://www.youtube.com/shorts/3B5pO1SUgYE",
    creatorAvatar: "https://picsum.photos/id/1062/40/40",
    plan: "PRO"
  },

  {
    id: "s3",
    type: "shorts",
    title: "सावंतवाडीत दगड खाणीत मारहाण घटना",
    creator: "LS Marathi",
    url: "https://www.youtube.com/shorts/Xq1FgoakQmI",
    creatorAvatar: "https://picsum.photos/id/1025/40/40",
    plan: "PREMIUM"
  },

  {
    id: "s4",
    type: "shorts",
    title: "Sawantwadi Enclave Lobby Gym Garden",
    creator: "Landkraft Spaces",
    url: "https://www.youtube.com/shorts/5p3qR-5eUzI",
    creatorAvatar: "https://picsum.photos/id/1027/40/40",
    plan: "BASIC"
  },

  {
    id: "s5",
    type: "shorts",
    title: "आजोबा पड़ले तलावात सावंतवाडी",
    creator: "Ride With Kokankar",
    url: "https://www.youtube.com/shorts/RueA5BZQ60o",
    creatorAvatar: "https://picsum.photos/id/1074/40/40",
    plan: "PRO"
  },

  {
    id: "s6",
    type: "shorts",
    title: "sawantwadi beauty of sindhudurg",
    creator: "30 sec LIFE",
    url: "https://www.youtube.com/shorts/FisLGEMTsD4",
    creatorAvatar: "https://picsum.photos/id/1040/40/40",
    plan: "PREMIUM"
  },

  {
    id: "s7",
    type: "shorts",
    title: "Best Cocktail spot in sawantwadi",
    creator: "खादाड कन्या",
    url: "https://www.youtube.com/shorts/zsee3MH9GtI",
    creatorAvatar: "https://picsum.photos/id/1005/40/40",
    plan: "BASIC"
  },

  {
    id: "s8",
    type: "shorts",
    title: "Sawantwadi lake sunset view",
    creator: "Ride With Kokankar",
    url: "https://www.youtube.com/shorts/N_N3a0aPTeM",
    creatorAvatar: "https://picsum.photos/id/1062/40/40",
    plan: "PRO"
  },

  {
    id: "s9",
    type: "shorts",
    title: "Moti Talao Fountain Lights",
    creator: "Konkan Shorts",
    url: "https://www.youtube.com/shorts/CvHfEYGQyYM",
    creatorAvatar: "https://picsum.photos/id/1025/40/40",
    plan: "PREMIUM"
  },

  {
    id: "s10",
    type: "shorts",
    title: "Sawantwadi Palace Durbar Hall",
    creator: "Heritage Walks",
    url: "https://www.youtube.com/shorts/3B5pO1SUgYE",
    creatorAvatar: "https://picsum.photos/id/1027/40/40",
    plan: "BASIC"
  },

  {
    id: "s11",
    type: "shorts",
    title: "Ganjifa Card Making in Sawantwadi",
    creator: "Artisan Guild",
    url: "https://www.youtube.com/shorts/Xq1FgoakQmI",
    creatorAvatar: "https://picsum.photos/id/1074/40/40",
    plan: "PRO"
  },

  {
    id: "s12",
    type: "shorts",
    title: "Morning Vibes at Sawantwadi Market",
    creator: "KokanVibes",
    url: "https://www.youtube.com/shorts/5p3qR-5eUzI",
    creatorAvatar: "https://picsum.photos/id/1084/40/40",
    plan: "PREMIUM"
  },

  {
    id: "s13",
    type: "shorts",
    title: "Chitale Bandhu & Local Sweets",
    creator: "FoodieShorts",
    url: "https://www.youtube.com/shorts/RueA5BZQ60o",
    creatorAvatar: "https://picsum.photos/id/1035/40/40",
    plan: "BASIC"
  },

  {
    id: "s14",
    type: "shorts",
    title: "Narendra Hill Top View",
    creator: "Sindhudurg Peaks",
    url: "https://www.youtube.com/shorts/FisLGEMTsD4",
    creatorAvatar: "https://picsum.photos/id/1011/40/40",
    plan: "PRO"
  },

  {
    id: "s15",
    type: "shorts",
    title: "Rajaram Stadium Evening Vibe",
    creator: "Local Sports",
    url: "https://www.youtube.com/shorts/zsee3MH9GtI",
    creatorAvatar: "https://picsum.photos/id/1069/40/40",
    plan: "PREMIUM"
  },

  {
    id: "s16",
    type: "shorts",
    title: "Cashew Processing Unit in Sawantwadi",
    creator: "KokanAgri",
    url: "https://www.youtube.com/shorts/N_N3a0aPTeM",
    creatorAvatar: "https://picsum.photos/id/1062/40/40",
    plan: "BASIC"
  },

  {
    id: "s17",
    type: "shorts",
    title: "Traditional Gauri Ganpati Festival",
    creator: "Festival Reels",
    url: "https://www.youtube.com/shorts/CvHfEYGQyYM",
    creatorAvatar: "https://picsum.photos/id/1080/40/40",
    plan: "PRO"
  },

  {
    id: "s18",
    type: "shorts",
    title: "Bye Bye Sawantwadi - Road Trip End",
    creator: "Wanderlust Diary",
    url: "https://www.youtube.com/shorts/3B5pO1SUgYE",
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

  mediaData = allMediaData.filter(
    function(media) {

      return isMediaPlanActive(
        media.plan
      );

    }
  );

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
   ============================================================ */

(function setupMediaCardHrefLogic() {

  var installedCards = new WeakSet();

  function getCards() {

    return Array.from(
      document.querySelectorAll(
        "#carousel .card"
      )
    );

  }

  function getMediaForCard(card) {

    var cards = getCards();

    var index =
      cards.indexOf(card);

    if (index === -1) {
      return null;
    }

    if (
      Array.isArray(mediaData) &&
      mediaData[index]
    ) {

      return mediaData[index];

    }

    if (
      Array.isArray(allMediaData) &&
      allMediaData[index]
    ) {

      return allMediaData[index];

    }

    return null;
  }

  function handleCardClick(event) {

    var card =
      event.currentTarget;

    var media =
      getMediaForCard(card);

    if (!media) {
      return;
    }

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

    event.preventDefault();

    event.stopImmediatePropagation();

    window.location.href =
      media.href;

  }

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

        card.addEventListener(
          "click",
          handleCardClick,
          true
        );

        card.setAttribute(
          "data-href",
          media.href
        );

        card.style.cursor =
          "pointer";

      }
    );

  }

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

  function start() {

    install();

    startObserver();

    setTimeout(install, 250);
    setTimeout(install, 500);
    setTimeout(install, 1000);
    setTimeout(install, 2000);
    setTimeout(install, 4000);

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
