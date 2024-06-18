// // exercise 1


// let item = ["Egg", 0.25, 12];
// // let name = item[0];
// // let price = item[1];
// // let quantity = item[2];

// const [item0, item1, item2] = item;

// console.log(`Item: ${item0}, Quantity: ${item2}, Price: ${item1}`);


// // Exercise 2

// let numbers = [3, 5, 4, 2, 6, 1];
// // let [one, two, three, four, five, six] = numbers;

// let [three,five,four, two, six, one] = numbers;

// console.log(`One: ${one}, Two: ${two}, Three: ${three}, Four: ${four}, Five: ${five}, Six: ${six}`)

// // Exercise 3
// let user = { name: "John", years: 30 };

// let {name, years: age, isAdmin = false} = user;

// console.log(name); // John
// console.log(age); // 30
// console.log(isAdmin); // false

// Exercise 4

// let person = [12, "Chris", "Owen"];

// // let firstName = person[1];
// // let lastName = person[2];
// // let age = person[0];

// const [age, firstName,lastName] = person;

// console.log(`Person - Age: ${age}, Name: ${firstName} ${lastName}`);

// Exercise 5

let person = ["Chris", 12, "Owen"];

// let firstName = person[0];
// let lastName = person[2];
// let age = person[1]

const [firstName, ,lastName] = person;

console.log(`Name: ${firstName} ${lastName}`);

// Exercise 6

const students = ['Christina', 'Jon', 'Alexandare'];

const [name1,name2 ,lastName2] = students;

console.log(lastName2);

// Exercise 7

const moreStudents = ['Chris',['Ahmad', 'Antigoni'],['Toby', 'Sam']];

[student1,[student2,student3],[student4]] = moreStudents;

console.log(student1, student2, student3, student4);