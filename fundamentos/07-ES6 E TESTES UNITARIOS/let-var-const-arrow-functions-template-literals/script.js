const testingScope = (escopo) => {
    if (escopo === true) {
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = `${ifScope} ótimo, fui utilizada no escopo!`;
      console.log(ifScope);
    } else {
      const elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
      console.log(elseScope);
    }
  }

  testingScope(true);


  const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const sortOddsAndEvens = (array) => {
    for (let index = 0; index < array.length; index++) {
        for (let secondIndex = 0; secondIndex < index; secondIndex++) {
            if (array[index] < array[secondIndex]) {
                let position = array[index];
                array[index] = array[secondIndex];
                array[secondIndex] = position;
            }
        }
    }
    return array;
};

const sortedArray = sortOddsAndEvens(oddsAndEvens);
console.log(`Os números ${oddsAndEvens.sort((a, b) => a - b)} se encontram ordenados de forma crescente!`);

const factorial = (number) => {
  let result = 1;
  for (let index = 2; index <= number; index++) {
    result *= index;
    
  }
  return result;
}
const resulTwo = factorial(4);
console.log(`esse é o fatoria ${resulTwo}`);

const factorial2 = number => number > 1 ? number * factorial2(number - 1) : 1;
console.log(factorial2(4));

x ? y : z

const longestWord = (text) => {
  const wordArray = text.split(' ');
  let maxLength = 0;
  let result = '';

  for (const key of wordArray) {
    if (key.length > maxLength) {
      maxLength = key.length;
      result = key;
    }
  }
 return result;
}

console.log(longestWord('Antonio foi ao banheiro e não sabemos o que aconteceu'));

let clickCount = 0;
const text = document.getElementById('text');
const btnClick = document.getElementById('btn');

btnClick.addEventListener('click', () => text.innerHTML = clickCount += 1);

const substituaX = (nome) => {
  const frase = 'Tryber x aqui!';
  const fraseArray = frase.split(' ');
  for (let index = 0; index < fraseArray.length; index += 1) {
    if (fraseArray[index] === 'x') {
      fraseArray[index] = nome;
    }
    
  }
  return fraseArray.join(' ');
}

console.log(substituaX('bebeto'));

const minhasSkills = (func) => {

  const skills = ['javascript', 'html', 'css'];
  let resultado = `${func} 
  
  Minhas três habilidades são:
  `;
for (let index = 0; index < skills.length; index++) {
  resultado = `${resultado}
  - ${skills[index]}`;
  
}
return resultado;

};

console.log(minhasSkills(substituaX('bebeto')));
