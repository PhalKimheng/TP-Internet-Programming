const activity = document.querySelector("#activity");
const type = document.querySelector("#type");
const participants = document.querySelector("#participants");
const price = document.querySelector("#price");
const link = document.querySelector("#link");

function fetchNewActivity() {
  activity.innerHTML = "";
  type.innerHTML = "";
  participants.innerHTML = "";
  price.innerHTML = "";
  link.innerHTML = "";
  fetch("https://www.boredapi.com/api/activity").then(async (response) => {
    let data = await response.json();
    activity.innerHTML = data["activity"];
    type.innerHTML = data["type"];
    participants.innerHTML = data["participants"];
    price.innerHTML = `${data["price"] * 10}$`;
    link.innerHTML = `<a href="${data["link"]}" target="blank">${data["link"]}</a>`;
    link.style.color = "#6495ED";
    console.log(data);
  });
}
