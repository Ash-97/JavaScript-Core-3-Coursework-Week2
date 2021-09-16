const imgEl = document.getElementById("contentImg");
const apiUrl = `https://xkcd.now.sh/?comic=latest`;

function fetchImageFromUrl() {
  fetch(apiUrl)
    .then((response) => {
      if (response.status >= 200 && response.status <= 299) {
        return response.json();
      }
    })
    .then((data) => {
      imgEl.src = data.img;
      console.log(data);
    })
    .catch((error) => console.log(error));
}

fetchImageFromUrl();
