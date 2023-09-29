console.log("hello world");
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let new_num = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let num2 = [45, 763, 47, 211, 98, 57, 34, 65, 77];

let compare = (a, b) => {
  return a - b;
};
let newarray = num.concat(new_num);
console.log(newarray.length);
delete newarray[0];
console.log(`after deletion 
${newarray.length}`);
console.log(typeof newarray);
console.log(newarray);

num2.sort(compare);
console.log(num2);
