// function*  strGenerator(){ //щоб функцію стала генератором потрібно, перед назвою поставити зірочку і тоді він стане генератором
//   yield'h'; // тепер нам доступне  функція yield
//   yield'e'; // тепер нам доступне  функція yield
//   yield'l'; // тепер нам доступне  функція yield
//   yield'l'; // тепер нам доступне  функція yield
//   yield'o'; // тепер нам доступне  функція yield

// }
// console.log(strGenerator().next()); //щоб отримати результат нам потрібно викликати функцію і метод next() який після кожного викклика буде викликати його, після виклика метода ми отримуємо обєкт з {value: значення, done: true/false} в залежності від того чи є далі yield, якщо є то false, якщо нема true


// function* genNum(n = 10){
//   for (let i = 0; i < n; i++) {
//     yield i; 
//   }
// }
// console.log(genNum(2).next()); // при виликі генератора із циклом при першому виклику він видасть результат і зупинить цикл, до наступного його виклика


const iterator ={
  gen(n =10){
    let i = 0;
    return {
      next(){
        if (i < n){
          return { value: ++i, done: false };
        }
        return { value: undefined, done: true };
      }
    }; 
  }
};
const itg = iterator.gen(); // таким чином ми повторили генератор
console.log(itg.next());