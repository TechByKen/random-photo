const imageContainer = document.querySelector(".image-container");
const btn = document.querySelector(".btn");

function addNewImages() {
  for (let i = 0; i < imgnum; i++) {
    const newImage = document.createElement("img");
    newImage.src = `https://picsum.photos/300?random=${Math.floor(
      Math.random() * 2000
    )}`;

    imageContainer.appendChild(newImage);
  }
}

btn.addEventListener("click", () => {
  imgnum = 10;
  addNewImages();
});
