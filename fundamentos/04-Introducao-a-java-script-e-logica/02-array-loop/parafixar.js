let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);

let indexOfPortfolio = menu.indexOf('Portfólio');

console.log(indexOfPortfolio);

menu.push("Contato");
console.log(menu);



let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let index = 0; index < groceryList.length; index++) {
  const alimentos = groceryList[index];
  console.log(alimentos);
}

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for(let index of names){
    console.log(index)
}