let showBtn = document.getElementById("show");
  let content = document.getElementById("people_online");
  let onlineOpen = false;
  showBtn.addEventListener("click", () => {
    if (!onlineOpen) {
      content.classList.add("active");
      onlineOpen = true;
    } else {
      content.classList.remove("active");
      onlineOpen = false;
    }
  })

const loader = document.querySelector(".loader");
const div = document.querySelector(".content");
const body = document.querySelector("body");
 window.onload = function () {
  loader.style.display = "none";
  div.style.opacity = "1";
  body.style.background ="url('https://cdn.glitch.global/ccc8c57f-ca9f-4e50-aded-b843a7073956/back.png?v=1658217319260')";
 }