/* 

Social Share Links:


Facebook:
https://www.facebook.com/sharer.php?u=[post-url]

Twitter:
https://twitter.com/share?url=[post-url]&text=[post-title]



Reddit:
https://reddit.com/submit?url=[post-url]&title=[post-title]

*/


const facebookBtn = document.querySelector(".facebook-btn");
const twitterBtn = document.querySelector(".twitter-btn");
const redditBtn = document.querySelector(".reddit-btn");

function init() {
 const pinterestImg = document.querySelector(".main-logo");

  let postUrl = encodeURI(document.location.href);
  let postTitle = encodeURI("Hi! Check this page from the Cosplayer, Not the Character website: ");
  let postImg = encodeURI(pinterestImg.src);

  facebookBtn.setAttribute(
    "href",
    `https://www.facebook.com/sharer.php?u=${postUrl}`
  );

  twitterBtn.setAttribute(
    "href",
    `https://twitter.com/share?url=${postUrl}&text=${postTitle}`
  );
	
	redditBtn.setAttribute(
    "href",
    `https://reddit.com/submit?url=${postUrl}&title=${postTitle}`
  );

}

init(); 
