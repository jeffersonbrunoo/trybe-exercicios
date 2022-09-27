// Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:
// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)

function soma(a, b){
    return a + b
}
function sub(a, b){
    return a - b
}
function mult(a, b){
    return a * b
}
function div(a, b){
    return a / b
}
function mod(a, b){
    return a % b
}

// Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.

function maior(numberOne, numberTwo) {
    if (numberOne > numberTwo) {
        return numberOne + " é maior que " + numberTwo
    } else {
        return numberTwo + " é maior que " + numberOne
    }
}

console.log(maior(10, 5));

// Faça um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.

function maior(numberOne, numberTwo, numberThree) {
    if (numberOne > numberTwo && numberOne > numberThree) {
        return numberOne + " é o maior dos números"
    } else if (numberTwo > numberOne && numberTwo > numberThree) {
        return numberTwo + " é o maior dos números "
    } else {
        return numberThree + " é o maior dos números "
    }
}

console.log(maior(1, 5, 3));