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
    resetWindows(a);
    return y;
}

var ats1 = '';

function gautiAts() {
    if (ats1 == '') {
        ats1 = document.getElementById("rezultatas").innerHTML;
    }
    return ats1;
}

function resetWindows(a) {
    document.getElementById(a).value = defaultStatus;
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

var mas1 = [
    {name: 'Ernestas', age: 42},
    {name: 'Tomas', age: 28},
    {name: 'Mantas', age: 12},
    {name: 'Mantautas', age: 32},
    {name: 'Lina', age: 25},
    {name: 'Eimantas', age: 60},
    {name: 'Tomas', age: 22},
    {name: 'Vidmantas', age: 89},
    {name: 'Aurimas', age: 24},
    {name: 'Tautvydas', age: 53}
];
// mas1.add()
console.log(mas1);
mas1.forEach(function (i) {
    console.log(i.name, i.age)
});

var spausdintiSarasa = function (kur, ka) {
    kur.innerHTML += ka;
};

function formuotiSarasa(klase) {
    var sarasas = '';

    for (var i = 0; i < klase.length; i++) {
        var asmuo = klase[i];
        sarasas += "<br/>" + "Vardas: " + asmuo.name + ", Amzius: " + asmuo.age;
    }
    return sarasas;
}
var sarasas1 = formuotiSarasa(mas1, 'display2');

var kur1 = document.getElementsByClassName('display2')[1];

spausdintiSarasa(kur1, sarasas1);
