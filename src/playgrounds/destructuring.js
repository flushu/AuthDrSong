console.log('destructuring');

const obj = {
  name: 'Benjamin',
  age: 21,
  location: {
    state: 'California',
    temp: 92
  }
};

const {name = 'Anonymous', age} = obj;
const {state, temp: temperature} = obj.location;
console.log(`${name} is ${age}. He's living in ${city}.`);

const address = ['15532 Wilder Avenue', 'Norwalk', 'California', '90650'];

const [, city] = address;

console.log(`${name} is living in ${city}, ${state} with temperature of ${temperature}`);