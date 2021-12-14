function listRandom() {
    buttonOpacity();
    galleryRandom();
}

function buttonOpacity() {
    let elemento = document.getElementById("random")
    if (elemento.style.opacity == 0.5) {
        elemento.style.opacity = 1;
    } else {
        elemento.style.opacity = 0.5;
    }
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



function getListRandom(n, min, max) {
    let listRnd = []
    let numRandom = getRndInteger(min, max);
    while (listRnd.length != n) {
        while (!listRnd.includes(numRandom)) {
            listRnd.push(numRandom);
        }
        numRandom = getRndInteger(min, max);
    }
    return listRnd;
}

function galleryRandom() {
    let min = 1;
    let max = 6;
    let imagenes = document.getElementsByTagName("img")
    let listRnd = getListRandom(imagenes.length - 1, min, max)
    for (let i = 0; i < imagenes.length - 1; i++) {
        imagenes[i].setAttribute("src","/img_/IMG_" + listRnd[i] + ".PNG/.png/.jpg/.webp/.JPG")
    }

}

window.onload = function() {
    saludo();
}

function saludo() {
    // buenos dias buenas tardes buenas noches
    let d = new Date();
    let header = document.getElementsByTagName("header")
    let footer = document.getElementsByTagName("footer")
    let encabezado = document.getElementById("saludo");
    if (d.getHours() <= 6 && > 14) {
        header.innerHTML = "¡Buenos dias!"
    if (d.getHours() <= 14 && > 21) {
        header.innerHTML = "¡Buenas tardes!"
    if (d.getHours() <= 21 && > 6) {
        header.innerHTML = "¡Buenas noches!"
        



}