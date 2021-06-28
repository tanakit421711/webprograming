//Destructuring
let obj = {
    name: "Jakkrit",
    lastname: "Sukajan",
    age: 20,
    salary: 0,
} 
let obj2 = {
    name: "Worachit",
    lastname: "Toto",
    age: 20,
    salary: 100,
}
const showdata =({name,lastname,age,salary}) =>`สวัสดีคุณ ${name} ${lastname}
ขณะนี้คุณมีอายุเท่ากับ ${age}
ขณะนี้คุณมีเงินเดือนเท่ากับ ${salary}`;



console.log(showdata(obj));
console.log(showdata(obj2));

// Spread Operator

const fun = (x,y,z) => x+y+z;

let num = [5,6,7];

let res = fun(...num);

console.log(res);