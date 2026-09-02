const mediaData = [
  {
    id: "v1",
    type: "video",
    title: "Building a Fullstack Web App from Scratch",
    creator: "Code Master",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    creatorAvatar: "https://picsum.photos/id/1005/40/40"
  },
  {
    id: "s1",
    type: "shorts",
    title: "Quick JavaScript Trick You Didn't Know! 🚀",
    creator: "DevTips",
    url: "https://www.youtube.com/shorts/kJQP7kiw5Fk",
    creatorAvatar: "https://picsum.photos/id/1011/40/40"
  },
  {
    id: "v2",
    type: "video",
    title: "10 CSS Tricks to Improve Your UI Design",
    creator: "Design Pro",
    url: "https://www.youtube.com/watch?v=3JZ_D3ELwOQ",
    creatorAvatar: "https://picsum.photos/id/1025/40/40"
  },
  {
    id: "s2",
    type: "shorts",
    title: "CSS Grid in 30 Seconds 🎨",
    creator: "UI Ninja",
    url: "https://www.youtube.com/shorts/fC7oUOUEEi4",
    creatorAvatar: "https://picsum.photos/id/1062/40/40"
  },
    {
    id: "v3",
    type: "video",
    title: "10 CSS Tricks to Improve Your UI Design",
    creator: "Design Pro",
    url: "https://www.youtube.com/watch?v=3JZ_D3ELwOQ",
    creatorAvatar: "https://picsum.photos/id/1025/40/40"
  },
  {
    id: "s3",
    type: "shorts",
    title: "Why Async/Await is Awesome",
    creator: "JS Guru",
    url: "https://www.youtube.com/shorts/V_Kr9OSfDeU",
    creatorAvatar: "https://picsum.photos/id/1074/40/40"
  }
];

function logInteraction(id, type) {
  console.log(`[Analytics IndexedDB] Logged ${type} for ID: ${id}`);
}
