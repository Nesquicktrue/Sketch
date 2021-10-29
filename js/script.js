const pole = document.querySelector(".pole");
const pixelDiv = document.createElement("div");


let pocetSloupcu = 16;
let pocetRadku = 16;

function generujPole (pocet) {
    for (let i = 1; i <= pocet; i++) {
        pole.appendChild(pixelDiv.cloneNode(true)).classList.add("pixel");
    }
};

generujPole(pocetSloupcu * pocetRadku);
