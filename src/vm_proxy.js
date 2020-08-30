// //Object

const person = { name: 'Viktoria',age: 20, job: 'Student' };

const op = new Proxy(person, { 
  get(target, prop){
    // console.log('target', target); // весь об'єкт
    // console.log('prop', prop); //ключ 
    // return target[ prop ];
    if (!(prop in person)){
      prop.split('_').map(p => target[ p ]).join(' '); // фішка в тому, що ми беремо всі prop які розбиті на _ то ми беремо через map кожен елемент, повертаємо існуючий, а потім ми з'єднуємо його в одне
    }
    return target[ prop ];
    
  },
  set(target, prop, value) { // метод який встановлює нове значення в обєкт, по ключеві
    if (prop in target){ //перевіряє, якщо в target є  prop який існує то, тоді змінюємо, а так попадаємо в else
      return target[ prop ] = value;
    } else {
      // return target[ prop ] = value; // якщо потрібно то можемо створими
      console.log(`error no field target ${prop}`);
    }
  },
  has(target, prop) { // метод який первіряє чи існує ключ в обєкті
    // if (prop in target) { // первий спосіб, дуже простий
    //   return true;
    // } else {
    //   return  false;
    // }
    return ['name', 'job'].includes(prop);// спосіб він перевіряє чи інсує ключ в obj і повиртає true or false 
    // можемо робити custom перевірки
  },
  deleteProperty(target,prop) { // створюємо функцію яка буде видаляти поле в обєкті
    console.log(`deleting prop`);
    delete target[ prop ]; //беремо стандартний метод який видаляє значення
    return true; // функція повина щось повертати
  }
});

console.log(op.age);
// console.log(op.names = 'yevhenii');
// console.log('age' in op);
// console.log(delete op.age);

// console.log(op);
// const log = text => `text: ${text}`;
// console.log(log('wdwa'));

// // functions
// const fp = new Proxy(log, {
//   apply(target, thisArg, args) {
//     //target = log
//     //thisArg = context, якщо ми передавали
//     //args = text

//     return target.apply(thisArg, args).toUpperCase(); //тепер ми можемо робити, що завгодно з елементати
//   }
// });
// console.log(fp('test'));


// CLASSES

// class Person{
//   constructor(name, age){
//     this.name = name;
//     this.age = age;
//   }
// }

// const PersonProxy = new Proxy(Person, {
//   constructor(target, args){
//     console.log('constructor');
//     console.log(args);
//     return new Proxy(new target, ...args), {
//       get(t, prop){
//         return t[ prop ];
//       }
//     };
//   }
// });
// const p = new PersonProxy('max', 30);
// console.log(p.name);