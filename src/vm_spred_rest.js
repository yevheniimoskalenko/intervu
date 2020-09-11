const cityesUkraine = ['Київ', 'Харків','Кропівницький','Миргород','Хорол','Полтава','Ромодан','Лубни','Львів','Яремча','Одеса','Карлівка','Глобино','Перятин','Запоріжжя','Донецьк','Миколаїв'];
const cityesEurope = ['Краків', 'Катовіца', 'Берлін', 'Прага','Париж'];

const cityesUkraineWithPopulations = {
  Kiev: 5,
  Poltava: 2,
  Kharkiv: 4
};
const cityesEuropeWithPopulations = {
  Berlin: 10,
  praha: 1,
  Paris: 6
};

//Spread es-6 Збирає в один масив/об'єкт 

// console.log(...cityesUkraine); //розвиртаємо масив в рядки

// clone array
// console.log([...cityesUkraine, 'Вашингтон',...cityesEurope]); // Зклонували два масива в один


// Object

// console.log(...cityesUkraineWithPopulations);//Об'єкт не ми не можемо його розвиртати в рядок, а тільки в об'єкт{}

// console.log({ ...cityesUkraineWithPopulations,Odessa: 4 ,...cityesEuropeWithPopulations }); // розвиртаємо його в один масив, тобто concat


const numbers = [5,32,1,78,43];

// console.log(Math.max(5,32,1,78,43));Працює лише із рядком
// console.log(Math.max(...numbers));// Розвирнули масив в рядок і отримали результат
// console.log(Math.max.apply(null, numbers)); //старий підхід

// Rest Збирає залишок

// function sum(a, b, ...rest){//rest тут збираємо залишок
//   // console.log(...rest); //sread розвиртаємо масив
//   return a+b +rest.reduce((a,i)=>a+i,0);

// }
// console.log(sum(...numbers)); // таким чином ми відправили в функцію 2 аргумента, а остальні проігноровані

// Реструктизація

const [a, b, ...rest] = [1, 2, 3, 4, 5];
console.log(rest);

// const Person = {
//   name:'Yevhenii', 
//   age:23, 
//   city: 'Kharkiv'
// };
// const { name } = Person; //таким чином ми забираємо із об'єкт тільки одне поле
// console.log(name);