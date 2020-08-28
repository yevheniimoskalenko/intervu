// class Animal { //по конвенції ми називаємо клас з великої букви
//   static type = 'ANIMAL' // статичне поле
//   constructor(options){  //для того щоб проініціалізувати начальні значення ми через метод передаємо дані через метод constructor
//     this.name = options.name; //для того щоб проініціалізувати значення потрібно через this. передавати дані
//     this.age = options.age; //для того щоб проініціалізувати значення потрібно через this. передавати дані
//     this.hasTail = options.hasTail; //для того щоб проініціалізувати значення потрібно через this. передавати дані
//   }
//   voice(){ //метод який буде доступний  в прототипі класі Animals
// console.log(`Iam Animals`)
//   }
// }
// const animal = new Animal({ // в прототип попадає тільки class Animal,  а помім уже в прототип Object
//   name: 'cat', // таким чином ми передаємо дані в класс які попадуть в constructor
//   age:5,
//   hasTail:true
// });

// class Dog extends Animal{
//   // для того щоб отримати нове поле ми повині викликати старий конструктор через 
// constructor(options){
//   super(options);// через метод super який отримує старий конструктор
//   this.color = options.color // так ми отримуємо поле і присвоюємо його в наш конструктор
// }
// voice(){ // таким чином ми претерли метод який знаходився в батьківськом методі
//   super.voice() // таким чином ми отримаємо батьківський метод і викликаємо його  
//   console.log('i am dog')
// }
// get ageInfo (){ // це поле яке можна викликати за допомогою
// return this.age * 7
// }
// set ageInfo(newAge){ // через set ми встановлюємо дані для поля 
//   this.age = newAge
// }
// } // метод наслідування через ключове слово extend s


// const dog = new Dog({name:'Bim', age:13, hasTail:true, color: 'white'});

// console.log(dog.ageInfo)

// // console.log(Animal.type); // так ми отримуємо поле

