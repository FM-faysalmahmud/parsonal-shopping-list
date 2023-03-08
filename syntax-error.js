function isBigger(num) {
  if (num > 5) {
    return true;
  } else {
    return false;
  }
}
const result = isBigger(4);
console.log(result);

// const sum = a,b => a+b;
const sum = (a, b) => a + b;
const res = sum(3, 5);
console.log(res);

const musk = {
  name: "Elon",
  // age: 53   error karon comma deoua hoy ne
  age: 53,
  job: "tesla",
};
console.log(musk.age);

const numbers = [12, 13, 21, 3, 34, 4, 4];
for (let i = 0; i < 10; i++) {
  const num = numbers[i];
}
console.log(numbers[5]);
