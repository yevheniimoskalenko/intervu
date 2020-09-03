const people = [
  { name: 'Victoria', age: 20, beautiful: true, budget: 2000 },
  { name: 'Yevhenii', age: 23, beautiful: true, budget: 1430 },
  { name: 'Elena', age: 25, beautiful: true, budget: 3212 }
];

//for
// for (let i = 0; i < people.length; i++){
//   console.log(people[ i ]);
// }


// for of
// for (let i of people){
//   console.log(i);
// }

// forEach 
// people.forEach(elem => console.log(elem));


// map

// const arrs = people.map(elem => elem.age*2); // через мап в нас є доступ до кожного елемента масива і повертає новий масив
// console.log(arrs);

// filter

// const adults = people.filter( elem => {
//   if (elem.age >= 21){
//     return true;
//   }
// });
// const adults = people.filter( elem => elem.age >= 21);

// reduce

// const budget = people.reduce((acc, elem) => { // приймає 2 параметра з яких є колл бек, а другий є начальне число ....
//   return acc + elem.budget;
// },0);


// console.log(budget);


// find 


// const person = people.find(person => person.name === 'Victoria'); // пошук по полю

// console.log(person);

// findIndex

// const personIndex = people.findIndex(person => person.name === 'Yevhenii'); // пошук по полю і повертає нам індекс, якщо не знайшов то -1

// console.log(personIndex);