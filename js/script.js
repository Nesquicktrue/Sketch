const pole = document.querySelector(".pole");
const pixelDiv = document.createElement("div");
const posuvnikVelikosti = document.getElementById("posuvnikVelikosti");
const vyberBarvu = document.getElementById("vyberBarvu");
let pocetPixelu;
let barva;

posuvnikVelikosti.onchange = (e) => {
    pocetPixelu = e.target.value;
    pole.replaceChildren("");
    generujPole(pocetPixelu*pocetPixelu);    
}

vyberBarvu.addEventListener("input", zmenBarvu, false);
vyberBarvu.onchange = (e) => {
    barva = e.target.value;
}

function generujPole(pocet) {
    pole.style.gridTemplateColumns = `repeat(${pocetPixelu}, 1fr)`
    pole.style.gridTemplateRows = `repeat(${pocetPixelu}, 1fr)`
    let sirkaPixelu = 400 / pocetPixelu;
    console.log(sirkaPixelu);

    for (let i = 1; i <= pocet; i++) {
        pixelDiv.style.width = `${sirkaPixelu}`;
        pixelDiv.style.height = `${sirkaPixelu}`;
        pole.appendChild(pixelDiv.cloneNode(true)).addEventListener("mouseover", zmenBarvu);
    }
};

function zmenBarvu () {
    this.style.backgroundColor = `${barva}`;
}

