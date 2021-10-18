
let controlo = [false, 0];

function menu() {

    if (controlo[0]) {
        document.getElementsByClassName("links")[0].style = "width: 0%;";
        controlo[0] = false;
    } else {
        document.getElementsByClassName("links")[0].style = "width: 100%;";
        controlo[0] = true;
    }
}

let tagitem;
let tamanho;

function zoomIn() {

    if (controlo[1] < 3) {

        tagitem = document.getElementsByTagName('h1');
        tamanho = parseFloat(window.getComputedStyle(tagitem[0]).getPropertyValue('font-size'))

        for (let index in tagitem)
            tagitem[index].style = "font-size:" + (tamanho + 10) + "px ;";

        tagitem = document.getElementsByTagName('h3');
        tamanho = parseFloat(window.getComputedStyle(tagitem[0]).getPropertyValue('font-size'))

        for (let index in tagitem)
            tagitem[index].style = "font-size:" + (tamanho + 10) + "px ;";

        tagitem = document.getElementsByTagName('p');
        tamanho = parseFloat(window.getComputedStyle(tagitem[0]).getPropertyValue('font-size'))

        for (let index in tagitem)
            tagitem[index].style = "font-size:" + (tamanho + 10) + "px ;";

        controlo[1]++;
    }

}

function zoomOut() {

    if (controlo[1] > 0) {

        tagitem = document.getElementsByTagName('h1');
        tamanho = parseFloat(window.getComputedStyle(tagitem[0]).getPropertyValue('font-size'))

        for (let index in tagitem)
            tagitem[index].style = "font-size:" + (tamanho - 10) + "px ;";

        tagitem = document.getElementsByTagName('h3');
        tamanho = parseFloat(window.getComputedStyle(tagitem[0]).getPropertyValue('font-size'))

        for (let index in tagitem)
            tagitem[index].style = "font-size:" + (tamanho - 10) + "px ;";

        tagitem = document.getElementsByTagName('p');
        tamanho = parseFloat(window.getComputedStyle(tagitem[0]).getPropertyValue('font-size'))

        for (let index in tagitem)
            tagitem[index].style = "font-size:" + (tamanho - 10) + "px ;";

        controlo[1]--;
    }
}

function mostrar(eu) {

    let estaberta = parseFloat(window.getComputedStyle(eu.parentNode.parentNode.getElementsByClassName("texto")[0]).getPropertyValue('height'));

    //alert(parseFloat(window.getComputedStyle(eu.parentNode.parentNode.getElementsByClassName("texto")[0]).getPropertyValue('height')))

    if (estaberta == 0) {
        //document.getElementsByClassName("texto")[0].style = "height: 0px;";
        eu.parentNode.parentNode.getElementsByClassName("texto")[0].style = "height: 100%;"
        eu.textContent = "zoom_out";
    } else {
        //document.getElementsByClassName("texto")[0].style = "height: 100%;";
        eu.parentNode.parentNode.getElementsByClassName("texto")[0].style = "height: 0px;"
        eu.textContent = "zoom_in";
    }

}

let cor = 0;

function cores() {

    let arr = document.getElementsByClassName("cores").length;

    if (cor == 0) {


        document.body.style = "background-color: #333333;";
        document.getElementsByClassName("help")[0].style = "filter: invert(80%);";
        document.getElementsByClassName("icons")[0].style = "filter: invert(80%);";

        for (var i = 0; i < arr; i++) {
            document.getElementsByClassName("cores")[i].style = "color: white;";
        }

        cor = 1;
    } else {
        document.body.style = "background-color: white";


        document.getElementsByClassName("help")[0].style = "filter: invert(0%);";
        document.getElementsByClassName("icons")[0].style = "filter: invert(0%);";

        for (var i = 0; i < arr; i++) {
            document.getElementsByClassName("cores")[i].style = "color: black;";
        }

        cor = 0;
    }

}

function reset() {
    //alert(window.matchMedia("(max-width: 768px)").matches)
    if (window.matchMedia("(max-width: 768px)").matches) {
        document.getElementsByClassName("links")[0].style = "width: 0%;";
        controlo[0] = false;
    }
}

window.onresize = function() {

    if (window.matchMedia("(min-width: 768px)").matches) {
        document.getElementsByClassName("links")[0].style = "transition: none;width: 100%;";
        controlo[0] = false;
    }
    else{
        document.getElementsByClassName("links")[0].style = "transition: none;width: 0%;";
        controlo[0] = false;
    }

}