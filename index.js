// var searchInput = document.getElementById("search-input");

// var i = 0;
// var txt = [
//   "Đặng Phan Hoàng Sang",
//   "Huỳnh Thị Diễm Ngân",
//   "Nguyễn Ngọc Xuân Nhi",
//   "Đặng Nguyễn Hà Nhi",
// ];
// var speed = 50;

// function typeWriter() {
//   if (i < str.length) {
//     console.log("Sang");
//     searchInput.placeholder += str.charAt(i);
//     i++;
//     setTimeout(typeWriter, speed);
//   }
// }

// function start() {
//   var randomString = Math.floor(Math.random() * 4);
// }

// start();

//-----------------------------------------------------------

const data = [
  {
    id: 1,
    "name-music": "Cầu hôn",
    author: "Văn Mai Hương sang",
    image: "https://i1.sndcdn.com/artworks-000475057821-xabo0m-t500x500.jpg",
    url: "http://api.mp3.zing.vn/api/streaming/audio/ZWBIF86E/320.mp3",
  },
  {
    id: 1,
    "name-music": "Waiting for you",
    author: "Mono",
    image: "https://i1.sndcdn.com/artworks-000475057821-xabo0m-t500x500.jpg",
    url: "./circle-down-regular.svg",
  },
  {
    id: 1,
    "name-music": "Waiting for you",
    author: "Mono",
    image: "https://i1.sndcdn.com/artworks-000475057821-xabo0m-t500x500.jpg",
    url: "./circle-down-regular.svg",
  },
];

const listMusic = document.querySelector(".list-music");
console.log(listMusic);

function render(item) {
  console.log("Con gà");
  const itemMusic = `
    <div class="item-music">
      <img
        class="picture-music"
        src="${item.image}"
        alt=""
      />
      <div class="name-music">${item["name-music"]} - ${item.author}</div>
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

function start() {
  listMusic.innerHTML = "";
  if (data.length && Array.isArray(data)) {
    data.forEach((item) => render(item));
  }
}

start();
