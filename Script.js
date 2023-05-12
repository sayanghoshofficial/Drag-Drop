// Dom Elements
const boxs = document.querySelectorAll(".drag-box"),
  img = document.querySelector("#img-box"),
  counter = document.querySelector("#count");
let count = 0;

//   Loop through each boxes element
boxs.forEach((box) => {
  // when a draggable element dragged over a box element
  box.addEventListener("dragover", (e) => {
    e.preventDefault(); // prevent default behaviour
    box.classList.add("hovered");
  });
  // when draggable element leaves from a box element
  box.addEventListener("dragleave", (e) => {
    box.classList.remove("hovered");
  });
  // when draggable element droppped on a box
  box.addEventListener("drop", () => {
    box.appendChild(img);
    box.classList.remove("hovered");
    // Increase counter
    count++;
    counter.innerHTML = count;
  });
});
