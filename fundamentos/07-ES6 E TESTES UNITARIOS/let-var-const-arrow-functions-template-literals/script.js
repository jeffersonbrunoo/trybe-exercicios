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

const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const listSkills = (student) => {
  const arrayOfSkills = Object.keys(student);
  for (const index in arrayOfSkills) {
    console.log(`${arrayOfSkills[index]}, Nível: ${student[arrayOfSkills[index]]}`);
  }
};
console.log('Estudante 1');
listSkills(student1);

console.log('Estudante 2');
listSkills(student2);

const coolestTvShow = {
  name: 'BoJack Horseman',
  genre: 'adult animation',
  createdBy: 'Raphael Bob-Waksberg',
  favoriteCharacter: 'Princess Carolyn',
  quote: 'Princess Carolyn always lands on her feet.',
  seasons: 6,
};

console.log(Object.entries(coolestTvShow));

const países = {
  França: 'Paris',
  Brasil: 'Brasília',
  Espanha: 'Madrid',
  Portugal: 'Lisboa',
};
const pairKeyValue = Object.entries(países);
console.log(pairKeyValue);

for(index in pairKeyValue) {
  console.log('--------');
  console.log('País:', pairKeyValue[index][0]);
  console.log('Capital:', pairKeyValue[index][1]);
};

const band = {
  name: 'Blind Guardian',
  formedIn: 1986,
  lastAlbum: 'Beyond the Red Mirror',
};

const info = {
  genre: 'Power Metal',
  lastAlbum: 'Twilight Orchestra: Legacy of the Dark Lands',
};

console.log(Object.assign(band, info));