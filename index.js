const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

dir = "sounds/sounds/";
playlist = ["drum", "voicetwo", "hihat", "kick", "snare", "deep"];
ext = ".wav";

btn1.addEventListener("click", function () {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
  audioQ = new Audio();
  audioQ.src = dir + playlist[0] + ext;
  audioQ.loop = false;
  audioQ.play();
});

btn2.addEventListener("click", function () {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
  audioW = new Audio();
  audioW.src = dir + playlist[1] + ext;
  audioW.loop = false;
  audioW.play();
});

btn3.addEventListener("click", function () {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
  audioE = new Audio();
  audioE.src = dir + playlist[2] + ext;
  audioE.loop = false;
  audioE.play();
});

btn4.addEventListener("click", function () {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
  audioA = new Audio();
  audioA.src = dir + playlist[3] + ext;
  audioA.loop = false;
  audioA.play();
});

btn5.addEventListener("click", function () {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
  audioS = new Audio();
  audioS.src = dir + playlist[4] + ext;
  audioS.loop = false;
  audioS.play();
});

btn6.addEventListener("click", function () {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
  audioD = new Audio();
  audioD.src = dir + playlist[5] + ext;
  audioD.loop = false;
  audioD.play();
});

document.addEventListener("keydown", function (event) {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
  if (event.code == "KeyQ") {
    audioQ = new Audio();
    audioQ.src = dir + playlist[0] + ext;
    audioQ.loop = false;
    audioQ.play();
  } else if (event.code == "KeyW") {
    audioW = new Audio();
    audioW.src = dir + playlist[1] + ext;
    audioW.loop = false;
    audioW.play();
  } else if (event.code == "KeyE") {
    audioE = new Audio();
    audioE.src = dir + playlist[2] + ext;
    audioE.loop = false;
    audioE.play();
  } else if (event.code == "KeyA") {
    audioA = new Audio();
    audioA.src = dir + playlist[3] + ext;
    audioA.loop = false;
    audioA.play();
  } else if (event.code == "KeyS") {
    audioS = new Audio();
    audioS.src = dir + playlist[4] + ext;
    audioS.loop = false;
    audioS.play();
  } else if (event.code == "KeyD") {
    audioD = new Audio();
    audioD.src = dir + playlist[5] + ext;
    audioD.loop = false;
    audioD.play();
  }
});
