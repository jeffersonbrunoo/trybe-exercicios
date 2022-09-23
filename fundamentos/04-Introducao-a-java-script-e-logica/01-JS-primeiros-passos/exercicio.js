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
    case "bispo":
        console.log("movimento na diagonal em todo o tabuleiro");
        break;
    case "peão":
        console.log("Movimento para frente e captura na diagonal");
        break;
    case "rei":
        console.log("Movimento para qualquer casa adjacente");
        break;
    case "Rainha":
        console.log("Move para qualquer casa em linha reta ou diagonal");
        break;
    default:
        console.log("Erro, Peça inválida");
}

let nota = 45;

if(nota >= 90){
    console.log("A");
}else if(nota < 0 || nota > 100){
    console.log("nota inválida");
}else if(nota >= 80){
    console.log("B");
}else if(nota >= 70){
    console.log("C");
}else if(nota >= 60){
    console.log("D");
}else if(nota >= 50){
    console.log("E");
}else {
    console.log("F");
}

let a = 15;
let b = 10;
let c = 13;

let even = false;

if((a % 2 === 0 || b % 2 === 0 || c % 2 === 0)) {
    even = true;
};

console.log(even);

let a = 8;
let b = 10;
let c = 10;

let odd = false;

if((a % 3 === 0 || b % 3 === 0 || c % 3 === 0)) {
    odd = true;
};

console.log(odd);

const cost = 40;
const sale = 50;

// valorDoCUstoTOtal = cost + impostoSobreCusto;
// lucro = sale - valtal;orDoCUstoTO

if(cost >= 0 && sale >= 0){
    const valorDoCUstoTOtal = cost * 1.2;
    const LucroTotal = (sale - valorDoCUstoTOtal) * 1000;
    console.log(LucroTotal);
}else{
    console.log("erro");
};

let aliquotINSS;
let aliquotIR;

const grossSalary = 2000.00;

if (grossSalary <= 1556.94) {
  aliquotINSS = grossSalary * 0.08;
} else if (grossSalary <= 2594.92) {
  aliquotINSS = grossSalary * 0.09;
} else if (grossSalary <= 5189.82) {
  aliquotINSS = grossSalary * 0.11;
} else {
  aliquotINSS = 570.88;
}

const baseSalary = grossSalary - aliquotINSS;

if (baseSalary <= 1903.98) {
  aliquotIR = 0;
} else if (baseSalary <= 2826.65) {
  aliquotIR = (baseSalary * 0.075) - 142.80;
} else if (baseSalary <= 3751.05) {
  aliquotIR = (baseSalary * 0.15) - 354.80;
} else if (baseSalary <= 4664.68) {
  aliquotIR = (baseSalary * 0.225) - 636.13;
} else {
  aliquotIR = (baseSalary * 0.275) - 869.36;
};

console.log("Salário: " + (baseSalary - aliquotIR));

