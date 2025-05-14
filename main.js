const container = document.getElementById("smiley-container");
const count = 15;

for (let i = 0; i < count; i++) {
  const img = document.createElement("img");
  img.src = "idiot.png";
  img.style.top = Math.random() * 100 + "vh";
  img.style.left = Math.random() * 100 + "vw";
  container.appendChild(img);
}
