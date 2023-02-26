const yourName = document.querySelector("#name");
const yourGender = document.querySelector("#gender");
const YourAccuracy = document.querySelector("#accuracy");

let output = document.querySelector("#output");

function guessGender() {
  let inputName = document.querySelector("#inputName").value;
  if (inputName === "") {
    Swal.fire("Please input your name");
  } else {
    fetch(`https://api.genderize.io?name=${inputName}`).then(
      async (response) => {
        let data = await response.json();
        let name = data.name;
        let gender = data.gender;
        let probability = data.probability;
        yourName.innerHTML = name[0].toUpperCase() + name.slice(1);
        yourGender.innerHTML = gender[0].toUpperCase() + gender.slice(1);
        YourAccuracy.innerHTML = `${probability * 100}%`;
        console.log(data);
      }
    );
  }
}
