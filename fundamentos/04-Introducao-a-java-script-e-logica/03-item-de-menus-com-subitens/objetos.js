// let name = 'Marta';
// let lastName = 'Silva';
// let age = 34;
// let medals = { golden: 2, silver: 3 };

let player = {
  name: "marta",
  lastName: "silva",
  age: 34,
  medals: {
    golden: 2,
    silver: 3
  }
};

console.log("A senhora " + player.name + " tem " + player.age);


let cars = ['Saab', 'Volvo', 'BMW'];

for (let index in cars) {
  console.log(index, cars[index]);
}

let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge',
};

for (const key in names) {
  console.log("Olá " + names[key]);
};

let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for (const key in car) {
  console.log(key + ": " + car[key]);
};


