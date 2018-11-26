let el = document.getElementById("elementas");
let elPakeistas;
var couter = 0;

function pakeisti () {
    if (couter == 0) {
        el.style.display = "block";
        el.style.width = "auto";
        el.style.position = "relative";
        el.style.textAlign = "center";
        el.style.textTransform = "uppercase";
        el.style.color = "red";
        el.style.backgroundColor = "blue";
        el.style.fontSize = "24px";
        // el.style.overflow = "auto";
        document.getElementById('foto').height = "200";
        document.getElementById('foto').width = "400";
        elPakeistas = document.getElementById("elementas");
        counter = 1;} else {
        // document.get
    }
}

let pav = document.getElementById("foto");
pav.src = "/img/html5-css-javascript-logos.png";
pav.height = "24";
pav.width = "60";

var x = 0;
while (x<255){
    x+=1;
    el.fontSize = x + "px";
}

//lempute su JS.
var state = false;
function lempute() {
    if (state){
        document.getElementById('lemp2').src = "/img/lamp-off.png";
    } else {
        document.getElementById('lemp2').src = "/img/lamp-on.png";
    }
    state = !state;
}


