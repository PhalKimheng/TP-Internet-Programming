const bookList = document.querySelector("#output");
const topInfo = document.querySelector("#top");
const bottomInfo = document.querySelector("#bottom");

fetch("http://jsonplaceholder.typicode.com/photos").then(async (response) => {
  let data = await response.json();
  let size = Object.keys(data).length;
  bookList.innerHTML = "";
  for (i = 0; i < 100; i++) {
    bookList.innerHTML += `
    <div class="bookList">
        <span><img src="${data[i].thumbnailUrl}"></span>
        <span>${data[i].title}</span>
        <span>Album ID: ${data[i].id}</span>
        <span>Category: ${data[i].albumId}</span>
        <a href="seeMore.html?id=${data[i].id}" target="_blank">See more</a>
    </div>
    `;
  }
});

function seeMore() {
  let bookId = parseInt(document.URL.split("id=")[1]);
  fetch(`http://jsonplaceholder.typicode.com/photos/${bookId}`).then(
    async (response) => {
      let data = await response.json();
      let str =
        "Resize the browser window to see that this page is responsive by the way";
      topInfo.innerHTML = "";
      bottomInfo.innerHTML = "";
      topInfo.innerHTML = `
        <div class="bookDetailTop">
          <h1>${data.title}</h1>
          <span class="font-normal text-lg">${data.id}</span>
          <span class="font-normal text-lg">${str}</span>
        </div>
      `;
      bottomInfo.innerHTML = `
        <div class="bookDetailBottom">
          <span>${data.albumId}</span>
          <span><img src="${data.thumbnailUrl}"></span>
        </div>
      `;
      console.log(data);
    }
  );
}
