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

//mano variantas
let lightOff = document.getElementById("light-off");
let lightOn = document.getElementById("light-on");
lightOff.src = "/img/lamp-off.png";
lightOn.src = "/img/lamp-on.png";


var lonh = lightOn.style.display = 'none';
var lons = lightOn.style.display = 'contents';
var loffh = lightOff.style.display = 'none';
var loffs = lightOff.style.display = 'contents';


function setImageVisible(id) {
    var img = document.getElementById(id);
    img.style.display = 'contents';
}
function setImageHidden(id) {
    var img = document.getElementById(id);
    img.style.display = 'none';
}

function jungtiIsjungti() {
    if (lonh = true){
        setImageVisible("light-off");
        setImageHidden("light-on")
    } else {
        setImageVisible("light-on");
        setImageHidden("light-off")
    }

}
//veikia blogai (bandyt pagal destytojo tik su mygtuku

//destytojo varinatas
var state = false;
function lempute() {
    if (state){
        document.getElementById('lemp2').src = "/img/lamp-off.png";
    } else {
        document.getElementById('lemp2').src = "/img/lamp-on.png";
    }
    state = !state;
}

//jQuerry

