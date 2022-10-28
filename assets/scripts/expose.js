// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const jsConfetti = new JSConfetti();

  let horn = document.getElementById("horn-select");
  let audio = document.querySelector(".hidden");
  horn.addEventListener("change", function () {
    let image = document.querySelectorAll('img')[0];
    switch(horn.value) {
    case("air-horn"):
      image.src = "assets/images/air-horn.svg";
      audio.src = "assets/audio/air-horn.mp3";
      break;
      
    case("car-horn"):
      image.src = "assets/images/car-horn.svg";
      audio.src = "assets/audio/car-horn.mp3";
      break;

    case("party-horn"):
      image.src = "assets/images/party-horn.svg";
      audio.src = "assets/audio/party-horn.mp3";
      break;
    }
  })

  let volume = document.getElementById("volume-controls");
  volume.addEventListener("change", function (volume) {
    let image = document.querySelectorAll('img')[1];
    if (volume.target.value > 66) {
      image.src = "assets/icons/volume-level-3.svg";
      audio.volume = volume.target.value / 100;
    } else if (volume.target.value > 33) {
      image.src = "assets/icons/volume-level-2.svg";
      audio.volume = volume.target.value / 100;
    } else if (volume.target.value > 0) {
      image.src = "assets/icons/volume-level-1.svg";
      audio.volume = volume.target.value / 100;
    } else {
      image.src = "assets/icons/volume-level-0.svg";
      audio.volume = volume.target.value / 100;
    }
  })


  document.querySelector("button").addEventListener("click", function () {
    console.log(audio.src);
    audio.play();
    if (horn.value == "party-horn") {
      jsConfetti.addConfetti()
    }
  })
}