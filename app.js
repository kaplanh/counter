




const p = document.getElementById("par");

let dakika = +prompt("lütfen dakika giriniz");
let saniye = dakika * 60;
// console.log(saniye);
function myFunction() {
  let minutes = Math.floor(saniye / 60);
  let seconds = saniye % 60;

  seconds = seconds < 10 ? "0" + seconds : seconds;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  // console.log(minutes);
  p.innerText = `${minutes}:${seconds}`;
  saniye--;

  if (minutes >= 0) {
    p.innerText = `${minutes}:${seconds}`;
  } else {
    p.innerText = "00:00";
  }
}
myFunction();
setInterval(myFunction, 1000);
