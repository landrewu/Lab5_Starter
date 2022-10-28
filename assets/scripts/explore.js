// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const speech = window.speechSynthesis;
  let voices = [];
  let list = document.getElementById("voice-select");

  speech.addEventListener("voiceschanged", function() {
    voices = speech.getVoices();
    
    for (let i = 0; i < voices.length ; i++) {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      if (voices[i].default) {
        option.textContent += ' — DEFAULT';
      }

      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      list.appendChild(option);
    }
  })

  let input = document.getElementById("text-to-speak");
  document.querySelector("button").addEventListener("click", function () {
    let message = new SpeechSynthesisUtterance(input.value);
    const selectedOption = list.selectedOptions[0].getAttribute('data-name');
    for (let i = 0; i < voices.length ; i++) {
      if (voices[i].name === selectedOption) {
        message.voice = voices[i];
      }
    }
    message.addEventListener("start", function () {
      document.querySelector("img").src = "assets/images/smiling-open.png";
    })
    message.addEventListener("end", function () {
      document.querySelector("img").src = "assets/images/smiling.png";
    })
    speech.speak(message);
  })
}