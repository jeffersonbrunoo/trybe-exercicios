const a = 10;
const b = 13;

console.log("Adição: " + (a+b));
console.log("Subtração: " + (a-b));
console.log("Multiplicação: " + (a*b));
console.log("Divisão: " + (a/b));
console.log("Módulo: " + (a%b));

if(a > b){
    console.log("'a' é maior que 'b'");
} else {
    console.log("'b' é maior que 'a'");
};

const c = 13;
const d = 10;
const e = 15;

if (c > d && c > e) {
    console.log("o maior número é: " + c + '(c)')
}else if (d > a && d > e) {
    console.log("o maior número é: " + d + '(d)')
}else {
    console.log("o maior número é: " + e + '(e)')
}

let teste = 2;


if(teste > 0) {
    console.log("Positive")
}else if(teste < 0) {
    console.log("Negative")
}else {
    console.log("Zero")
}

let angulo1 = 60;
let angulo2 = 60;
let angulo3 = 60;

let somaAngulos = angulo1 + angulo2 + angulo3;
let angulos = angulo1 > 0 && angulo2 > 0 && angulo3 > 0;

if(angulos) {
    if(somaAngulos === 180){
        console.log("True");
    }else{
        console.log("False");
    }
} else {
    console.log("os ângulos não formam um triângulo");
}

let pecaDeXadrez = "bispo";

switch(pecaDeXadrez.toLocaleLowerCase()){
    case "bispo";
    console.log("movimento na diagonal em todo o tabuleiro");
    break;

}

