// Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Use a sintaxe meuObjeto.chave. Valor esperado no console:

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  console.log("bem vinda, " + info.personagem);

  console.log("*************");

//   Insira no objeto uma nova propriedade com o nome de chave ‘recorrente’ e o valor ‘Sim’ e, em seguida, imprima o objeto no console. Use a sintaxe meuObjeto['chave'] = valor. Valor esperado no console:

info.recorrente = "sim";
console.log(info);

console.log("*************");

// Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:

for (const key in info) {
   console.log(key);
}
console.log("*************");

// Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:

for (const key in info) {
   console.log(info[key]);
    }

    console.log("*************");

    // Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: ‘Tio Patinhas’, ‘Christmas on Bear Mountain, Dell’s Four Color Comics #178’, ‘O último MacPatinhas’, ‘Sim’. Então, imprima os valores de cada objeto juntos, de acordo com cada uma das chaves. Valor esperado no console:
let info2 = {
    personagem: "Tio Patinhas",
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: "sim"
};

for (const key in info) {
    if (key !== "recorrente") {
        console.log(info[key] + " e " + info2[key]);   
    } else {
        console.log("ambos recorrente");
    }
}
console.log("*************");


