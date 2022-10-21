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

console.log(sortOddsAndEvens([13, 3, 4, 10, 7, 2]));