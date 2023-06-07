const tv = {
  power: false,
  mute: false,
  volume: 1,
  chanel: 1,
};

const btnPower = document.getElementById("power");
const btnVolumeUp = document.getElementById("volumeUp");
const btnVolumeDown = document.getElementById("volumeDown");
const btnChanelUp = document.getElementById("chanelUp");
const btnChaneDown = document.getElementById("chanelDown");
const btnMute = document.getElementById("mute");
const chanel = document.getElementById("contChanel");
const volume = document.getElementById("contVolume");
const mute = document.getElementById("muting");

btnPower.addEventListener("click", () => {
  if (!tv.power) {
    tv.power = true;
    tv.volume = 3;
    btnPower.classList.remove("bg-danger");
    btnPower.classList.add("bg-success");
  } else {
    tv.power = false;
    btnPower.classList.remove("bg-success");
    btnPower.classList.add("bg-danger");
  }
});

btnVolumeUp.addEventListener("click", () => {
  volume.innerHTML = `${tv.volume}`;
  if (tv.volume <= 10) {
    tv.volume++;
  } else {
    console.log("volumen maximo");
    tv.volume = 10;
  }
});

btnVolumeDown.addEventListener("click", () => {
  volume.innerHTML = `${tv.volume}`;
  if (tv.volume >= 1) {
    tv.volume--;
  } else {
    console.log("volumen minimo");
    tv.volume = 1;
  }
});

btnChanelUp.addEventListener("click", () => {
  chanel.innerHTML = `${tv.chanel}`;
  if (tv.chanel <= 100) {
    tv.chanel++;
  } else {
    console.log("canal maximo");
    tv.chanel = 100;
  }
});

btnChaneDown.addEventListener("click", () => {
  chanel.innerHTML = `${tv.chanel}`;
  if (tv.chanel >= 1) {
    tv.chanel--;
  } else {
    console.log("canal minimo");
    tv.chanel = 1;
  }
});
