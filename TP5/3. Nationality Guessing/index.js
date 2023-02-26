const yourNationality = document.querySelector("#case");
function guessNationality() {
  let inputName = document.querySelector("#inputName").value;
  if (inputName === "") {
    Swal.fire("Please input your name");
  } else {
    fetch(`https://api.nationalize.io?name=${inputName}`).then(
      async (response) => {
        let data = await response.json();
        let size = Object.keys(data.country).length;
        yourNationality.innerHTML = "";
        for (i = 0; i < size; i++) {
          console.log(data.country[i].country_id);
          yourNationality.innerHTML += `<div class="flex py-2 px-5 justify-between rounded-md bg-gray-200">
          <span>${data.country[i].country_id}</span>
          <span class="text-orange-500">${(
            data.country[i].probability * 100
          ).toPrecision(2)}%</span></div>`;
        }
        console.log(data.country);
      }
    );
  }
}
