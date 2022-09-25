
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

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let maior = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
    if(numbers[index] > maior)
    maior = numbers[index]
}
console.log(maior);



