/*
Resultado abaixo de 17 - Muito abaixo do peso;
Resultado entre 17 e 18,49 - Abaixo do peso;
Resultado entre 18,5 e 24,99 - Peso Ideal;
Resultado 25 e 29,99 - Sobrepeso;
Resultado entre 38 e 34,9 - Obesidade grau I;
Resultado entre 35 e 39,9 - Obesidade grau II (severa);
Resultado acima de 48 - Obesidade grau III (mórbida);
*/

var altura;
var peso;
var imc;
var resultado;

function calcular(event){
    event.preventDefault()

    peso = parseFloat(document.getElementById("peso").value);
    altura = parseFloat(document.getElementById("altura").value);

    imc = peso / (altura + altura)

    resultado = document.getElementById("resultado");

    if (imc < 17) {
        resultado = document.getElementById("resultado");
        resultado.innerHTML = "<br/> Seu resultado foi; " + imc.toFixed(2) + "<br/> Cuidado você está muito abaixo do peso!"
    }
    if (imc >= 17 && imc <= 18.49) {
        resultado = document.getElementById("resultado");
        resultado.innerHTML = "<br/> Seu resultado foi; " + imc.toFixed(2) + "<br/> Abaixo do peso!"
    }
    if (imc >= 18.5 && imc <= 24.99) {
        resultado = document.getElementById("resultado");
        resultado.innerHTML = "<br/> Seu resultado foi; " + imc.toFixed(2) + "<br/> Você está no peso ideal!"
    }
    if (imc >= 25 && imc <= 29.99) {
        resultado = document.getElementById("resultado");
        resultado.innerHTML = "<br/> Seu resultado foi; " + imc.toFixed(2) + "<br/> Você está com sobrepeso"
    }
    if (imc >= 30 && imc <= 34.99) {
        resultado = document.getElementById("resultado");
        resultado.innerHTML = "<br/> Seu resultado foi; " + imc.toFixed(2) + "<br/> CUIDADO, obesidade grau I!"
    }
    if (imc >= 35 && imc <= 39.99) {
        resultado = document.getElementById("resultado");
        resultado.innerHTML = "<br/> Seu resultado foi; " + imc.toFixed(2) + "<br/> CUIDADO, obesidade grau II!"
    }
    if (imc >= 40) {
        resultado = document.getElementById("resultado");
        resultado.innerHTML = "<br/> Seu resultado foi; " + imc.toFixed(2) + "<br/> CUIDADO, obesidade grau III!"
    }

    document.getAnimations("peso").value = ""
    document.getElementById("altura").value = "";
}