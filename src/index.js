import "./less/index.less";

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
document.querySelector("h1").addEventListener("click", function (e) {
  alert("Yolculuğa Hazır mısın?");
});

// Kodlar buraya gelecek!
const üstkisim = document.querySelectorAll("a");
üstkisim[0].addEventListener("click", (e) => {
  üstkisim[0].classList.toggle("large");
});

üstkisim[1].addEventListener("click", (e) => {
  üstkisim[1].classList.toggle("large");
});
üstkisim[2].addEventListener("click", (e) => {
  üstkisim[2].classList.toggle("large");
});

üstkisim[3].addEventListener("click", () => {
  alert("Sizinle İletişime Geçeceğiz");
});
let isDrawing = false;
let x = 0;
let y = 0;

const myPics = document.getElementById("myPics");
const context = myPics.getContext("2d");

myPics.addEventListener("mousedown", (e) => {
  x = e.offsetX;
  y = e.offsetY;
  isDrawing = true;
});

myPics.addEventListener("mousemove", (e) => {
  if (isDrawing) {
    drawLine(context, x, y, e.offsetX, e.offsetY);
    x = e.offsetX;
    y = e.offsetY;
  }
});

window.addEventListener("mouseup", (e) => {
  if (isDrawing) {
    drawLine(context, x, y, e.offsetX, e.offsetY);
    x = 0;
    y = 0;
    isDrawing = false;
  }
});
function drawLine(context, x1, y1, x2, y2) {
  context.beginPath();
  context.strokeStyle = "black";
  context.lineWidth = 1;
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
  context.closePath();
}

const form = document.getElementById("form");

form.addEventListener(
  "focus",
  (event) => {
    event.target.style.background = "pink";
  },
  true
);

form.addEventListener(
  "blur",
  (event) => {
    event.target.style.background = "";
  },
  true
);
const input2 = document.getElementById("buton");
input2.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("myBtn").click();
  }
});
