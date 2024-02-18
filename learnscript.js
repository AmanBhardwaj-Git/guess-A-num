// ------------------------------------
//Basic JS
// function calculateCartPrice(a, b,...num){
//   let sum = 0
//     for (const i of num) {
//     sum+=i
//   }
//     return a+b+sum
// }
// console.log(calculateCartPrice(200, 300, 400,500,600))

// function calculateCartPrice(getnum){
//     return getnum[1]
// }
// console.log(calculateCartPrice([12,23,34,45]) )

// const User ={
//     userName: 'sdas',
//     price :121
// }

// // passing object as argument and parameter
// function calculateCartPrice(userObj){
//   return `userName is ${userObj.userName}, price is ${userObj.price}`
// }
// console.log(calculateCartPrice(User))

// // destructuring in parameter
// function calculateCartPrice({userName, price}){
//   return `userName is ${userName}, price is ${price}`
// }
// console.log(calculateCartPrice(User))

// // without making any extra object
// function calculateCartPrice(obj){
//   return `userName is ${obj.userName}, price is ${obj.price}`
// }
// console.log(calculateCartPrice
//     ({userName: 'sdas', price :121 })
// )

// const Big = function (){
//     const a = "sadas"
//         function small(){
//             const b ="asdas"
//             console.log(a)
//         }

//         small()
//     }
//     Big()

//In JS function is treated as higher order and first class functions
// Higher Order function means function can accept a function as paramenter and also return a function
// First class Function means function can be treated as a variable's value or, assign to a variable

//arrow function

// const app ={
//     name: 'pingpong',

//     pong(){
//         return `name is ${this.name}`
//     },
//     ping: function(){
//        console.log(this)
//         return `name is ${this.name} `
//     },

//     ding:()=>{
//         return `name is ${this.name}`
//     }
// }

// console.log(app.pong())
// app.name= 'sdfs'
// console.log(app.ping())
// console.log(this)

// console.log(app.ding())

// function abc(){
//     console.log(this)
// }
// abc()

// // explicit return
// let def=()=>{
//     console.log(this)
// }
// def()

// implicit return
// const add = (a,b)=> {return a+b}
// const square = a => a*a
// const obj = () => ( {man: 'aman'} )

// console.log(add(3,5))
// console.log(square(3))
// console.log(obj())

// const array = [1,23,5,6,3]
// array.forEach(elem => console.log(elem))

// //IIFE (Immediately Invoked Function Expression) : (defination)(declaration)

// function name0(){
//     console.log("asdas")
// }

// name0();
// //named IIFE
// (function name1(pingpong){
//    console.log("sdasdas".concat(pingpong))
// })('dinggon');

// //unnamed IIFE
// (pingpong=> console.log("adasasa".concat(pingpong)))('dasda');

// function name2(){
//     console.log("asdasasdas")
// }
// name2();
// let str = ' '
// const obj ={}
// if(Object.keys(obj).length==0){
//     console.log('empty object')
// }
// else{
//     console.log('not empty object')
// }
// const array=[]
// if(array.length==0){
//     console.log('empty array')
// }else{
//     console.log('not empty array')
// }

// const key = 2;
// switch (key) {
//   case 1: {
//     console.log("1 called");
//   }
//   case 2: {
//     console.log("2 called");
//   }
//   case 3: {
//     console.log("3 called");
//   }
//   default: {
//     console.log("break statement");
//   }
// }

// for (let i = 1; i <=10; i++) {
//     for (let j = 1; j <=10; j++) {
//        console.log(`${i} * ${j} = ${i*j}`)
//     }
//     console.log(`table of ${i}`)
// }

// mapping
// const arr = [1,2,4,6]
// const ping = arr.map(elem=>elem+2)
// console.log(ping)
// filter
// const fit = ping.filter((elem)=>!(elem%2))
// console.log(fit)
// reduce
// const red = fit.reduce((total, elem)=>total*elem, 1)
// console.log(red)

// for-of loops:

// const array = [1,2,4,6,7]
// for (const arrayKey of array) {
//     console.log(arrayKey)
// }

// const val = 'hello buddy'
// for (const val1 of val) {
//     console.log(`each char is ${val1}`)
// }

// const obj = {1:'one', 2:'two', 5:'five', 6:'six'}
// for (const key of Object.keys(obj)) {
//     console.log(`${key} : ${obj[key]}`)
// }

// const array = [{1:'one', 2:'two'},{3:'three', 4:'four'},{5:'five', 6:'six'}]

// for (const key of array) {
//     for (const iterator of Object.keys(key)) {
//         console.log(`${iterator} :- ${key[iterator]}`)
//     }
// }

// const map = new Map();
// map.set('one', 'oneVal')
// map.set('two', 'twoVal')
// map.set('one', 'oneVal')

// map.forEach((elem, keys)=>console.log(`${keys}: ${elem}`))

// for (const [key, value] of map) {
//     console.log(key ,' :- ', value);
// }
// const obj = {
//     1:'one',
//     2: 'two'
// }
// for (const key in obj) {
//     console.log(`${key} : ${obj[key]}`)
// }

// const arr = [1,2,4,6]
// arr.forEach((elem, index, arr)=> console.log(`${elem}`,index, arr))
// for (const key in arr) {
//     console.log(`${key} : ${arr[key]}`)
// }

// const arrayObj = [
//     {
//         newObj : 'obj1',
//         oldObj : 'obj2',
//         publich : 1992,
//         genere: 'history'
//     },
//     {
//         newObj : 'obj3',
//         oldObj : 'obj4',
//         publich : 1995,
//         genere: 'geo'
//     },
//     {
//         newObj : 'obj5',
//         oldObj : 'obj6',
//         publich : 2002,
//         genere: 'politics'
//     },
//     {
//         newObj : 'obj7',
//         oldObj : 'obj8',
//         publich : 2001,
//         genere: 'history'
//     }
// ]
// arrayObj.forEach((elem)=>{
//     for (const iterator of Object.keys(elem)) {
//         iterator=='newObj'?
//         console.log(iterator, elem[iterator]):null
//     }
// })
// const mapper = arrayObj
//     .map((elem)=> elem.publich < 2000)
//     .map((val)=> console.log(`public is less than 2000 ?? ${val}`))

// const filterer = arrayObj.filter((elem)=>elem.genere == 'history'&& elem.publich <2000  )

// filterer.forEach(elem => console.log(`newObj is : ${elem.newObj}`) )

// const myNum = [1,2,4,6,3,4,8,9]
// const myFilterIndex =
//     myNum.filter(elem=>elem>5)
//         .map(elem=>myNum.indexOf(elem))

// myFilterIndex.forEach(elem=>{
//     console.log(`Index :${elem}, Element : ${myNum[elem]}`)
// } )

// reduce(accumalator, currentValue)=>
// expression , initialVal
// const myNum = [1,2,4,6,3,4,8,9]
// const myReduce = myNum.reduce
// ((accVal,curVal)=>
// {
//     console.log(`AccVal is : ${accVal} + CurVal is : ${curVal}`)
//     return accVal + curVal
// }   , 10)
// console.log(myReduce)

// const shoppingCart = [
//     {
//         itemName : "C++",
//         itemPrice : 1299
//     },
//     {
//         itemName : "C",
//         itemPrice : 2299
//     },
//     {
//         itemName : "Java",
//         itemPrice : 3299
//     },
//     {
//         itemName : "DSA",
//         itemPrice : 4299
//     },
//     {
//         itemName : "Js & TS",
//         itemPrice : 5399
//     }
// ]
// const reducePrice =
// shoppingCart.map(elem=>elem.itemPrice)
// .reduce((acc, curr)=> acc+ curr, 0)
// console.log(reducePrice)
//or
// const reducePrice = shoppingCart
// .reduce((acc, elem)=>acc+ elem.itemPrice, 0)
// console.log(reducePrice)

// // JS Moderate

// console.log(window.document)
// or,
// console.dir(document)

// document.querySelector('h1')
// .innerHTML = '<h2>ping</h2>'
// let str = document.getElementById('title').getAttribute('class')

//  document.getElementById('title').setAttribute('class', `${str} underline  underline-offset-[15px]`)

//  document.getElementById('title').setAttribute('style', 'color:red; font-weight:700')

// document.getElementById('title').style.background = 'black'
// console.log(document.getElementById('title').innerText)
// console.log(document.getElementById('title').textContent)
// console.log(document.getElementById('title').innerHTML)

// console.log(document.querySelector('input[type="password"]').style='background: black; color:white')
// let unOrderList =document.querySelectorAll('li')
// let unOrderListArray = [...unOrderList]

// const arr =['red', 'yellow', 'orange']
// unOrderListArray.forEach((elem, index) => elem.style= `color:${arr[index]}`
// );

// let val = document.querySelector('p')
// let elem = 0;
// setInterval(() => {
//     val.style.color = `${arr[elem]}`;

//     elem==3 ? elem = 0 : elem++;
// }, 2000);

// const colorArray = ["red", "blue", "green", "yellow"]

// const nodeLi = document.querySelectorAll('li');
// nodeLi.forEach((element, index) => {
//  console.log(element.style.color= colorArray[index])
// });

// const list = document.getElementsByClassName('list-items')
// Array.from(list)
//     .map((elem, index)=>
//     console.log(elem.style.color= colorArray[index])
// )

// const underList = document.querySelector('ul')
// console.log(
// Array.from(underList.children)
// .map(elem=>{
//         elem.style.color= "yellow";
//         elem.style.backgroundColor = "black";
//         elem.style.margin = "10px 0px";
//         elem.style.display = "inline-block";
//         elem.style.padding = "5px 14px"})
// )
// const listItemOne = document.querySelector('li')
// console.log(listItemOne.nextElementSibling)
// console.log(underList.childNodes[7].childNodes.item(0))

// const div = document.createElement('div')

// console.log(div)
// div.className = 'Main2'
// div.id = `id-${Math.round(Math.random()*10 + 1)}`
// div.setAttribute('title', 'titlegenerated')
// div.setAttribute('title', 'titlegenerated')
// div.style.background = 'yellow';
// div.innerHTML = '<h1>hellow</h1>'

// const addText = document.createTextNode('add text')
// div.appendChild(addText)

// let title2t = document.querySelector('#title')
// title2t.appendChild(div)
// console.log(div)

// function addLanguage(langName){
// const listItem =
//  document.createElement('li')

// listItem.innerHTML=`${langName}`

//  document.querySelector
//     ('.language')
//     .appendChild(listItem)
// }
// addLanguage('noice')

// function addOptLanguage(langName){
// const listItem =
//     document.createElement('li');

// listItem.appendChild
//     (document.createTextNode(langName))

// document.querySelector
//     ('.language')
//     .appendChild(listItem)
// }

// addOptLanguage("python")

// // edit

// const secondList = document.querySelector('li:nth-child(2)')
// secondList.replaceWith('pingpng')
// console.log(secondList)

// const firstList = document.querySelector('li:nth-child(1)')
// firstList.outerHTML = '<h5>hellow</h5>'

// // remove
// const lastList = document.querySelector('li:nth-child(3)')
// lastList.remove()

/*
____________________________________ 

      project1 backgroundChanger 
____________________________________ 

function buttonClick(buttonColor){
document.body.style.backgroundColor = buttonColor;
}

document.querySelectorAll('.button')
.forEach((elem)=>{
   elem.addEventListener('click',function(){
   buttonClick(elem.getAttribute('id')) }
   )}
)
*/

/*
____________________________________ 

      Body Mass Index(BMI CALC)
[weight (kg) / height (cm) / height (cm)] 
x 10,000
____________________________________ 


const form = document.querySelector('form');
form.addEventListener('submit',(e)=>{
    e.preventDefault()
let height = parseInt(document.querySelector('#height').value ) 
let weight = parseInt(document.querySelector('#weight').value ) 

let result = ( weight / (height* height)) * 10000;
document.querySelector('p').append(result.toFixed(1))
}) 

*/

/*
____________________________________ 

        Digital Clock
____________________________________  

let clock = document.getElementById('clock');
setInterval(function(){
    let date = new Date()
    // console.log(date.toLocaleTimeString())
    clock.innerHTML = `<h1>${date.toLocaleTimeString()}</h1>`

}, 1000)

*/

/*
____________________________________ 

        Guess The Number
____________________________________  
*/

let prevGuess = [];
let prevField = document.querySelector('.guessesPrev')



let remguess = document.querySelector(".lastResult");
remguess.textContent = "10";


document.querySelector("#closebtn").addEventListener("click", () => {
  document.querySelector("#failedCase").style.display = "none";
  remguess.textContent = "10";
});

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
//   let randomNum = 12;
    let randomNum = Math.round(Math.random() * 10 + 1);
  let guessInp = document.querySelector("#guessField").value;
  let prevNum = document.querySelector(".guesses");

  if (parseInt(remguess.textContent) > 0) {
    if (guessInp == randomNum) {
      document.querySelector("#msgBack").style.backgroundColor = "yellow";
      document.querySelector("#failedCase").style.visibility = "visible";
    } 
    else {
      remguess.textContent = parseInt(remguess.textContent) - 1;
      prevGuess.push(parseInt(guessInp))
      prevField.innerHTML = (prevGuess.reverse())[0]

      if (guessInp > randomNum) {
      document.querySelector('.lowOrHi').textContent = 'Big Guess'
      document.querySelector('.lowOrHi').style.color = 'green'
      
    } else {
        document.querySelector('.lowOrHi').textContent = 'Small Guess'
        document.querySelector('.lowOrHi').style.color = 'blue'
      }

      prevNum.innerHTML = randomNum;
    }
} else {
      document.querySelector("#failedCase").style.visibility = "visible";
    document.querySelector("#msgBtn").textContent = "Game Over";
    document.querySelector("#msgBack").style.backgroundColor = "red";
  }
});
