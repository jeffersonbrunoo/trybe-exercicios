
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Percorra o array imprimindo todos os valores nele contidos com a função console.log();

for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]);
    
}

// Some todos os valores contidos no array e imprima o resultado;

let sum = 0;

for (let index = 0; index < numbers.length; index += 1) {
    sum += numbers[index];
    
}
console.log(sum);

// Calcule e imprima a média aritmética dos valores contidos no array;

// A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.

let media;

for (let index = 0; index < numbers.length; index++) {
    media = sum / numbers.length
    
}console.log(media);

// Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;

if (media > 20) {
    console.log("valor maior que 20");
} else {
    console.log("valor menor ou igual a 20");
}

// Utilizando for, descubra qual o maior valor contido no array e imprima-o;


let maior = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
    if(numbers[index] > maior)
    maior = numbers[index]
}
console.log(maior);

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;


let odd = 0;

for (let index = 0; index < numbers.length; index += 1){
    if (numbers[index] % 2 !== 0) {
        odd += 1
    }
}

if(odd === 0){
    console.log("erro");
} else {
    console.log(odd);
}

// Utilizando for, descubra qual o menor valor contido no array e imprima-o;

let menor = numbers[0];

for (let index = 0; index < numbers.length; index += 1) {
    if(numbers[index] < menor)
    menor = numbers[index]
}
console.log(menor);

// Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado.

let array = [];

for (let index = 1; index <= 25; index += 1) {
    array.push(index)
    
}
console.log(array);

// Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.

for (let index = 0; index < array.length; index += 1) {
    console.log(array[index] / 2);
  };


