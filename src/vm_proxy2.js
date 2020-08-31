// wrapper

// const withDefaultValue = (target, valueDefault = 0) => { //створили функцію яка приймає дві параметра (ціль і дефолтне значення) 
//   return new Proxy(target, { //першим значенням приймаємо ціль, помім йдуть перемекачі
//     get: (obj, prop) => { // створюємо метод який приймає ціль, а потім ключ
//       if (prop in obj){// перевіряємо чи існує ключ в цілі
//         return obj[ prop ]; // якщо так то повертаємо його назад
//       } else {
//         return valueDefault; // якщо немає то повераємо дефолтне значення
//       }
      
//     }
//   });
// };

// const position = withDefaultValue({
//   x: 24,
//   y: 42
// },0);

// console.log(position.x);

// Hidden properies
const withHiddenProps = (target, prefix = '_') => {
  return new Proxy(target, {
    has: (obj, prop) => prop in obj && !prop.startsWith(prefix),
    ownKeys: obj => Reflect.ownKeys(obj).filter(p => !p.startsWith(prefix)),
    get: (obj, prop, receiver) => (prop in receiver ? obj[ prop ] : void 0)
  });
};

const data = withHiddenProps({
  name: 'Vladilen',
  age: 25,
  _uid: '1231231'
});

// Optimization
const IndexedArray = new Proxy(Array, { 
  construct(target, [args]) { //створюємо новий метод який який приймає Class і array 
    // console.log(target);
    const index = {}; 
    args.forEach(item => (index[ item.id ] = item)); //перебераємо елементи масиву і добавляємо його в наш obj
    return new Proxy(new target(...args), { // повертаємо новий проксі, із полями
      get(arr, prop) { // створюємо новий метод для отримуємо поля
        switch (prop) { // отримуємо ключ і перевіряємо чи існує він в array
        case 'push': // якщо метод викликається метод push 
          return item => { // створюємо функцію из параметром item
            index[ item.id ] = item;  // отриманий  елемент obj і добавляємо його в наш obj
            arr[ prop ].call(arr, item);  //через call ми прокидаємо в arr такі значення item
          };
        case 'findById': // метод findById через який ми передаємо id, і отримуємо дані
          return id => index[ id ];
        default:
          return arr[ prop ];
        }
      }
    });
  }
});

const users = new IndexedArray([
  { id: 11, name: 'Vladilen', job: 'Fullstack', age: 25 },
  { id: 22, name: 'Elena', job: 'Student', age: 22 },
  { id: 33, name: 'Victor', job: 'Backend', age: 23 },
  { id: 44, name: 'Vasilisa', job: 'Teacher', age: 24 }
]);
console.log(users.findById(22));