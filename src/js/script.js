const n = 25;
const targetIndex = (n % 10) + 1;

let isAltColor = false;

function toggleColor(element) {
  element.classList.toggle("alt-color");
}

document.querySelectorAll("body *").forEach((element, index) => {
  console.log(`Елемент ${index + 1}:`, element);

  element.addEventListener("click", () => {
    if (index + 1 === targetIndex) {
      console.log(`Клік на елементі ${index + 1}`);
      toggleColor(element);
    }
  });
});
