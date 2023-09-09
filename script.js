// Function to convert text to speech using the Web Speech API with a delay between lines
function textToSpeechWithDelay(
  text,
  lineDelay = 4000,
  rate = 1.0,
  volume = 1.0,
  lang = "en"
) {
  const synth = window.speechSynthesis;
  const lines = text.split("\n");
  let currentLine = 0;

  function speakNextLine() {
    if (currentLine < lines.length) {
      const utterance = new SpeechSynthesisUtterance(lines[currentLine]);
      utterance.rate = rate;
      utterance.volume = volume;
      utterance.lang = lang;
      synth.speak(utterance);
      currentLine++;
      setTimeout(speakNextLine, lineDelay);
    }
  }

  speakNextLine();
}

const text = `
   Good Morning to all


   Let say our positivity pledge
    I'm loved
    I'm Kind
    I'm smart
    I'm strong
    I'm brave
    I'm Incredible
    I Always try to do better
    I love to learn new things
    I can do anything I set my mind to
    but most importantly I believe in myself

    Thought of the day
    There is Nothing Impossible To they who will try  by  ALEXANDER 
    Thanks Ajaikumar Nataraj  for bringing up such a nice quote.

    Let us sit straight 
    Close your eyes
    ready for our Meditation

    Breath-in
    Breath-out
    Breath-in
    Breath-out
    Breath-in
    Breath-out

    Catch up with your breathe
    Ohm
    Lead us from unreal to the real

    Lead us from darkness to light

    Lead us from death to immortality

    Ohm peace, peace, peace
    
    rub your palms, feel the heat and place it on your eyes 
    now open your eyes

 Have a great day ahead
               `;

document.getElementById("textToSpeechButton").addEventListener("click", () => {
  const lineDelay = 4000; // 3 seconds gap between lines
  const rate = 1.0;
  const volume = 1.0;
  const lang = "ta-IN";
  textToSpeechWithDelay(text, lineDelay, rate, volume, lang);
});

function displayImage(imagePath, width, height) {
  const imageElement = new Image();
  imageElement.src = imagePath;
  imageElement.style.width = width;
  imageElement.style.height = height;
  document.body.appendChild(imageElement);
}

document.getElementById("displayImageButton").addEventListener("click", () => {
  const imagePath = "/peace.jpg";
  const width = "100%";
  const height = "auto";
  displayImage(imagePath, width, height);
});

function playMusic() {
  const musicPlayer = document.getElementById("musicPlayer");
  musicPlayer.play();
}

document.getElementById("playMusicButton").addEventListener("click", () => {
  playMusic();
});
