// const endpoint = "http://localhost:3000/music/search?song=Cầu hôn";
// const endpoint = "http://localhost:3000/music/";
const endpoint = "https://trai-dao-muzic.onrender.com/music";

const listMusic = document.querySelector(".list-music");
const filterInput = document.querySelector("#search-input");

function render(item) {
  console.log("Con gà");
  const itemMusic = `
      <div class="item-music">
        <img
          class="picture-music"
          src="${item.image}"
          alt=""
        />
        <div class="name-music">${item.song} - ${item.author}</div>
        <a href="${item.url}" download=""
          ><i
            class="fa-regular fa-circle-down download"
            style="color: green"
          ></i
        ></a>
      </div>
    `;
  listMusic.insertAdjacentHTML("beforeend", itemMusic);
}

async function getSongs(link = endpoint) {
  // console.log(2);
  const response = await fetch(`${link}`);
  const data = await response.json();
  const dataMusic = [...data.status];
  console.log("dataMusic: ", dataMusic);
  listMusic.innerHTML = "";
  if (dataMusic.length > 0 && Array.isArray(dataMusic)) {
    dataMusic.forEach((item) => render(item));
  }
}

function debounceFn(func, wait, immediate) {
  let timeout;
  return function () {
    let context = this,
      args = arguments;
    let later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

filterInput.addEventListener(
  "keyup",
  debounceFn(async function (e) {
    // const response = await fetch(`${endpoint}?title_like=${e.target.value}`);
    // const data = await response.json();
    // console.log(data);
    console.log(e.target.value);
    if (e.target.value !== "") {
      // console.log(1);
      const path = `${endpoint}/search?song=${e.target.value}`;
      getSongs(path);
    }
  }, 500)
);

// getSongs();

function search() {
  const keyWord = document.querySelector("#search-input");
  console.log(keyWord.value);
  if (keyWord.value !== "") {
    const path = `${endpoint}/search?song=${keyWord.value}`;
    getSongs(path);
  }
}
