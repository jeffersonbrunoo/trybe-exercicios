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