const newImageBtn = document.getElementById("newImageBtn");
const listEl = document.getElementById("imageList");

function fetchDogImage() {
  fetch(`https://dog.ceo/api/breeds/image/random`)
    .then((response) => {
      if (response.status >= 200 && response.status <= 299) {
        return response.json();
      }
    })
    .then((data) => {
      const newListEl = document.createElement("li");
      listEl.appendChild(newListEl);
      const imageEl = document.createElement("img");
      newListEl.appendChild(imageEl);
      imageEl.src = data.message;
    })
    .catch((error) => console.error("Error Occurred:", error));
}

newImageBtn.addEventListener("click", fetchDogImage);
