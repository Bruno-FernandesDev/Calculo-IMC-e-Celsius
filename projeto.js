
let altura = document.getElementById("altura")
let peso = document.getElementById("peso")

let total

function Calcular() {

    total = Number(peso.value) / (Number(altura.value) * (altura.value));

    alert(`O seu IMC é ${total.toFixed(3)}`)
}

let grausCelsius = document.getElementById("celsius");
let totalFinal

function Somar() {

    totalFinal = grausCelsius.value * 1.8 + 32;

    alert(`A temperatura é ${totalFinal} ºF.`)
}