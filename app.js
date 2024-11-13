// 1. VARIABLE declared without var,let and const:

// if(true){
//     variable = 10

//     console.log(variable)
// }



// 2. HOISTING:

//FUNCTION HOISTING:

// myFunction();

// function myFunction(){
//     console.log('hello world');
// }



//VARIABLE HOISTING:

// x=10;

// console.log(x);

// var x;


// OBJECT:

// let person = {
//     name : 'umair',
//     age : 30,
//     grade : ['A' , 'B' , 'C'],
//     greet : function(){
//         console.log(this.name);
//     }

// };

// console.log(person.name)



// IF STATEMENT:

// let x = 5;

// if(x>5){
//     console.log('notgo');
// }else if(x<=5){
//     console.log('go');

// }else{
//     console.log('do what you want');
// }


// SWITCH STATEMENT:

// let a = 5;

// switch(a){
//     case 1:
//         console.log('1');
//         break;
//         case 5:
//             console.log('2');
//             break;
//             default:
//                 console.log('3')

// }



// TERNARY OPERATORS:

// let y = 10;

// let z = y < 10 ? 'fail' : 'pass'

// console.log(z)


//MAP:

// let arr = [1,2,3,4,5];

// let mapArr = arr.map((e) =>  e*2);

// console.log(mapArr)


//FOR EACH:

// let arr = [1,2,3,4,5];

// arr.forEach((e) => {
//    console.log(e*2)
// })


//FOR IN LOAP:


// let person ={
//     brand: 'king',
//     name: 'Babar'  
// }

// for (let val in person){
//     console.log(person[val])
// }


//APIS:

// fetch('https')
// .then(response =>
//     response.json())
//     .then(data =>
//         console.log(data));



//PROMISE:

// let promise = new 
// promise((resole,reject) =>{
//     resolve('success')
// }
// )
// promise.then(result=>{
//     console.log(result)
// })



//ASYNC OR AWAIT:

// async function getData(){
//     let response = await
//     fetch('https');
//     let data = await
//     response.json();
//     console.log(data)
// }
// getData();







