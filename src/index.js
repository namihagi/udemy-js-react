const name = "tanaka";
const greet = `My name is ${name}`;
console.log(greet);

const arr1 = [1, 3];
console.log(arr1);
console.log(...arr1);

const nameArr = ["tanaka", "mori", "suzuki"];
nameArr.map((name) => console.log(`${name}さん`));

const numArr = [1, 2, 3, 4, 5];
const newNumArr = numArr.filter((num) => {
  return num % 2 === 1;
});
console.log(newNumArr);
