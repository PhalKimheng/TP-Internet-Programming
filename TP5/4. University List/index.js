const universityList = document.querySelector("#output");
function findUniversity() {
  let countrySelect = document.querySelector("#country-select").value;
  fetch(
    `http://universities.hipolabs.com/search?country=${countrySelect}`
  ).then(async (response) => {
    let data = await response.json();
    let size = Object.keys(data).length;
    universityList.innerHTML = "";
    for (i = 0; i < size; i++) {
      universityList.innerHTML += `
        <div class="uniList">
          <div>${data[i].name}</div>
          <div>${data[i].country} - ${data[i].alpha_two_code}</div>
          <div class="flex gap-x-1 items-center"><img class="w-[20px] h-[20px]" 
            src="https://cdn-icons-png.flaticon.com/128/841/841364.png">
            <a href="${data[i].web_pages}">${data[i].web_pages}</a></div>
        </div>`;
    }
    console.log(data);
  });
}
