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

document.addEventListener("DOMContentLoaded", function () {
  let currentImage = document.getElementById("cityImage"); 

  const addButton = document.getElementById("addButton");
  const increaseButton = document.getElementById("increaseButton");
  const decreaseButton = document.getElementById("decreaseButton");
  const removeButton = document.getElementById("removeButton");

  // Додати зображення
  addButton.addEventListener("click", function () {
    if (currentImage) {
      const newImage = document.createElement("img");
      newImage.src = currentImage.src; 
      newImage.alt = currentImage.alt; 
      newImage.width = 400; 
      document.body.appendChild(newImage); 
      currentImage = newImage; 
    }
  });

  // Збільшити розмір зображення
  increaseButton.addEventListener("click", function () {
    if (currentImage) {
      currentImage.width += 50; 
    }
  });

  // Зменшити розмір зображення
  decreaseButton.addEventListener("click", function () {
    if (currentImage && currentImage.width > 50) {
      
      currentImage.width -= 50; 
    }
  });

  // Видалити зображення
  removeButton.addEventListener("click", function () {
    if (currentImage) {
      currentImage.remove(); 
      currentImage = null; 
    }
  });

  // Додати логіку для повторного додавання зображення
  document.body.addEventListener("click", function () {
    const images = document.querySelectorAll("img");
    if (images.length > 0) {
      currentImage = images[images.length - 1]; 
  });
});
