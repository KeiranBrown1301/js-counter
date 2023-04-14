// Find the HTML element
// Tell the element to listen to an event
// Execute the logic when the even is triggered

let count = 0;

const countHeader = document.getElementById("count");
const countAddBtn = document.getElementById("add");
const countMinusBtn = document.getElementById("minus");

countHeader.innerText = count;

countAddBtn.addEventListener("click", () => {
  count++;
  countHeader.innerText = count;
});

countMinusBtn.addEventListener("click", () => {
  count--;
  countHeader.innerText = count;
});
