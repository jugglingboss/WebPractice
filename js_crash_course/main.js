// console.log('Hello Wddrld');
// console.error('This is an erros')
// console.warn('This is a warning')

// const age = 30;


// console.log(age)


// const rating = 4.5;
// const isCool = true;
// const x = null;
// const y = undefined;
// let z;

// console.log(typeof z);

// const name = 'John';
// const age = 20;

// //Concatentation
// console.log('My name is ' + name + ' and I am ' + age)
// //Template String
// const Hello = `My name is a ${name} and I am ${age}`

// console.log(Hello)

//const s ='Hello World!';
//console.log(s.length)
//console.log(s.toUpperCase())
//console.log(s.substring(0,5).toUpperCase())
// const a = 'tech, com, it, code'
// console.log(a.split(', '))

//Arrays
//const numbers = new Array(1,2,3,4,5);
// const fruits = ['apples','oranges','pears',10,true];
// fruits[3] = 'grapes';
// fruits.push('manngos');
// fruits.unshift('strawberrys');
// fruits.pop(); //pops the last array value off

// console.log(Array.isArray("hjee"));
// console.log(fruits.indexOf('oranges'));


// console.log(fruits);

// const person = {
//     firstname: 'John',
//     lastname: 'Doe',
//     age: 30,
//     hobbies: ['music', 'moveies', 'sports'],
//     address: {
//         street: '50 main street',
//         city: 'West newton',
//         state: 'PA'
//     }
// }

// //console.log(person.firstname,person.lastname)
// console.log(person.address.city)

// // const {firstname,lastname, address: {city}} = person

// // console.log(firstname)
// // console.log(city)

// person.email = "hi@google.come"
// console.log(person)'


// const todoes = [
//     {
//         id:1,
//         text: 'Take out trash',
//         isCompleted:true
//     },
//     {
//         id:2,
//         text: 'meeting with boss',
//         isCompleted:true
//     },
//     {
//         id:3,
//         text: 'Dentist appt',
//         isCompleted:false
//     }
// ]

// console.log(todoes)
// console.log(todoes[1].text)

// const todoJSON = JSON.stringify(todoes);
// console.log(todoJSON);


// //For 
// for(let i=0;i<10; i++){
//     console.log(`For loop number ${i}`)
// }

// //while
// let i=0
// while(i<10){
//     console.log(`while loop number ${i}`)
//     i++;
// }


//For 
// for(let todo of todoes){
//     console.log(todo.text)
// }

//foreach, map, filter
// todoes.forEach(function(todo) {
//     console.log(todo.text)
// });

// const todoText = todoes.map(function(todo) {
//     return todo.text;
// });
// console.log(todoText)

// const todoCompleted = todoes.filter(function(todo) {
//     return todo.isCompleted === true;
// }).map(function(todo){
//     return todo.text
// })
// console.log(todoCompleted)

//triple eaul also matches data type
// const x = 4;
// const y = 10;
//or is ||
//and is &&
// if(x > 5 || y > 10 ){
//     console.log('x is more than five or y is more than 10')
// }


// const x = 9;
// const color = 'green'
// //const color = x  >10 ? 'red' : 'blue';

// // console.log(color)

// switch(color){
//     case 'red':
//         console.log('color is red');
//         break;
//     case 'blue':
//         console.log('colore is blue')
//         break
//     default:
//         console.log('color is NOT red or blue');
//         break
// }

// function addNums(num1 = 1 , num2=1){
//     return (num1 + num2);
// }
// const sum = addNums(4,5)
// console.log(sum)


// const addNums = (num1=1, num2=1) => (num1+num2)
// console.log(addNums(5,5));

// const add5 = num1 => num1+5
// console.log(add5(1))

function Person(firstname, lastname, dob){

}


