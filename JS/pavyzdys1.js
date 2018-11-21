// function suma(a, b) {
//     return a + b;
// }
//
// console.log(suma(2, 2));

// var x1 = document.getElementById(x1).innerText;
//
// jei5(x1.parseInt());
// var txt = jei5().toString();
// document.getElementById("ats1").innerHTML = txt;
// var ats12 = "";
//
// function jei5(x1) {
//     if (x1 == 5){
//         ats12 = "PENKI!";
//     } else {
//         ats12 = "Ne penki :(";
//     }
//     return ats12;
// }
function gauti(a) {
    gautiAts();
    var x = document.getElementById(a).value;
    var y = parseInt(x);
    document.getElementById(a).value = defaultStatus;
    return y;
}

var ats1 = gautiAts();

function gautiAts() {
    var ats = document.getElementById("rezultatas").innerHTML;
    return ats;
}

function rodytiAtsakyma(a) {
    var x = document.getElementById("rezultatas").innerHTML = ats1 + " " + a;
}

function sudeti() {
    var a = gauti('A');
    var b = gauti('B');
    rez = a + b;

    rodytiAtsakyma(rez);
}

function atimti() {
    var a = gauti('A');
    var b = gauti('B');

    rez = a - b;

    rodytiAtsakyma(rez);
}

function dauginti() {
    var a = gauti('A');
    var b = gauti('B');

    rez = a * b;

    rodytiAtsakyma(rez);
}

function dalinti() {
    var a = gauti('A');
    var b = gauti('B');
    if (b != 0) {
        rez = a / b;
    } else {
        rez = "Dalyba is nulio negalima.";
    }
    rodytiAtsakyma(rez);
}
