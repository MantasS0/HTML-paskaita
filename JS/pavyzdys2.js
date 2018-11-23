let el = document.getElementById("elementas");

function pakeisti () {

    el.style.color = "red";
    el.style.backgroundColor = "blue";
    el.style.fontSize = "24px";
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

let lightOff = document.getElementById("light-off");
let lightOn = document.getElementById("light-on");
lightOff.src = "/img/lamp-off.png";
lightOn.src = "/img/lamp-on.png";
// lightOn.replace

// var lonh = lightOn.display = "hidden";
// var lons = lightOn.display = "show";
// var loffh = lightOff.display = "hidden";
// var loffs = lightOff.display = "show";
//
//
//
// function jungtiIsjungti() {
//
//     if (loffs == "hidden"){
//
//     }
//
// }