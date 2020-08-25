// замикання, а саме функція в середині другої функції


// function calc(n){
//   // функція замкнула зміну, в функції і тепер вона стала приватною
//   return function(){
//     console.log(100* n);
//   };
// }



// // calc(3); //якщо ми так залишимо то, воно нам поверне нову функцію яка знаходиться на в return, а для того щоб вона запрацювала можна зробити таким способом як calc(3)() другі дужки, це виклик першої функції
// // s();
// calc(3)();
// // console.log(calc());	

// function createIncrementor(n){ //createIncrementor(1)
//   return function (num){ 
//     return n+num; //addOne(12);
//   };
// }
// const addOne = createIncrementor(1);
// console.log(addOne(12));
// console.log(addOne(43)); // коили ми стоврили новий виклик, то в страрому в нас нічого не змінюється через те, що ми замкнули його в функції


// ==========


// function urlGenarater(domain){
//   return function(url){
//     return `http://${url}.${domain}`;
//   };
// }

// const comUrl = urlGenarater('com');
// const uaUrl = urlGenarater('ua');



// console.log(comUrl('google'));
// console.log(uaUrl('localhost'));



// робота з власним методом


// function binds(context, fn){// передаємо перешим аргументом контекст а другим функцію, 
//   return function(...args){ // в ці аргументи попаде обєкт із значеннями
//     return fn.apply(context, args);
//   };
// }


// const person = {
//   name: 'viktoria',
//   job: 'fron-end'
// };
// function logPerson(){
//   console.log(`Person: ${this.name}, ${this.job}`);
// }

// binds(person)();


function numOne(){
  let i = 2;
  return function(n){
    return n+i;
  };
}

console.log(numOne()(2));
console.log(numOne()(4));
console.log(numOne()(4));
console.log(numOne()(4));