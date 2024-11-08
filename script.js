const box = document.querySelector(".box");
const body = document.querySelector("body");
const heart = document.querySelector(".heart");
const cursor = document.querySelector(".cursor");

box.addEventListener("dblclick", () => {
  heart.style.opacity = "1";

  setTimeout(() => {
    heart.style.opacity = "0";
  }, 500);
});

box.addEventListener("mouseenter", () => {
  cursor.style.transform = "scale(4)";
});

box.addEventListener("mouseleave", () => {
  cursor.style.transform = "scale(2)"; 
});

body.addEventListener("mousemove", (dets) => {
    console.log(dets)
  cursor.style.left = (dets.x + 20) + "px";
  cursor.style.top = (dets.y + 5) + "px";
  cursor.style.opacity = "1";
});
body.addEventListener("mouseleave", (dets) => {
  cursor.style.opacity = "0";
});
