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

// // Constructor function
// function Person(firstName, lastName, dob){
//     this.firstName = firstName;
//     this.lastName =lastName;
//     this.dob = new Date (dob);
//     // this.getBirthYear = function() {
//     //     return this.dob.getFullYear()
//     // }
//     // this.getFullName = function(){
//     //     return `${this.firstName} ${this.lastName}`
//     // }
// }

// Person.prototype.getBirthYear = function(){
//     return this.dob.getFullYear()
// }

// Person.prototype.getFullName = function(){
//     return  `${this.firstName} ${this.lastName}`
// }

// //Class (same this as above except in a prettier way)
// class Person{
//     constructor(firstName, lastName, dob){
//         this.firstName = firstName;
//         this.lastName =lastName;
//         this.dob = new Date (dob);
//     }

//     getBirthYear(){
//         return this.dob.getFullYear()
//     }
//     getFullName(){
//         return  `${this.firstName} ${this.lastName}`
//     }
// }

// //Instantiate object
// const person1 = new Person('John', 'Doe', '4-3-1980');
// const person2 = new Person('Mery', 'Smith', '3-6-1980');

// //console.log(person2.dob.getFullYear());
// //console.log(person1.getBirthYear())
// //console.log(person1.getFullName());

// console.log(person2.getFullName())
// console.log(person1)


//console.log(window);
//Single element
//console.log(document.getElementById('my-form'))
//console.log(document.querySelector('.container'))
//console.log(document.querySelector('h1'))

//Multiple element
//console.log(document.querySelectorAll('.item')) //use this
//console.log(document.getElementsByClassName('item'))  //not this, the above one can select anything while this can only select classes
//console.log(document.getElementsByTagName('item'))  //not this, the above one can select anything while this can only select classes

//const items = document.querySelectorAll('.item');
//items.forEach((item) => console.log(item))

//const ul = document.querySelector('.items');
//ul.remove();
//ul.lastElementChild.remove()
//ul.firstElementChild.textContent = 'Hello'
//ul.children[1].innerText = 'Mike'
//ul.lastElementChild.innerHTML = '<h1>Hello</h1>'

const btn = document.querySelector('.btn');
//btn.style.background = 'red' //USE THIS IN HOME AUTOMATION AFTER SOMETHING IS CLICKED ON TO CHANGED THE BACKROUND COLOR

btn.addEventListener('click', (e) => {
     e.preventDefault();
     //console.log('click');
     //console.log(e.target.className)
     document.querySelector('#my-form').style.background = '#ccc'
     document.querySelector('body').classList.add('bg-dark')
     document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>'
 });

// btn.addEventListener('mouseover', (e) => {
//     e.preventDefault();
//     //console.log('click');
//     //console.log(e.target.className)
//     document.querySelector('#my-form').style.background = '#ccc'
//     document.querySelector('body').classList.add('bg-dark')
//     document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>'
// });


const myFrom = document.querySelector('#my-form')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const msg = document.querySelector('.msg')
const userList = document.querySelector('#users')


myFrom.addEventListener('submit',onSubmit)

function onSubmit(e) {
    e.preventDefault();

    //console.log(nameInput.value)
    if(nameInput.value === '' || emailInput.value === ''){
        //alert('Please enter fields')
        msg.classList.add('error')
        msg.innerHTML = 'Please enter all fields';
        setTimeout(() => msg.remove(), 3000)
    } else{
        //console.log('success');
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`))

        userList.appendChild(li);

        //Clear fields
        nameInput.value = '';
        emailInput.value = '';
    }
}