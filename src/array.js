// властивість
// length, prototype


const item = [1,3,4,6,67];

// console.log(item.length);// властивість яка визначає довжину


// методи

// =============
// from

// перешил приходить масив, або подібним на нього, а другим параметром функція, яка отримає кожен елемент масиву
// console.log(Array.from([1, 2, 3], elem => elem+3));


// =============

// const array = [1,3,4,5];

// console.log(Array.isArray(array)); // Array.isArray() метод який перевіряє, чи це масив чи ні, якщо так то він повиртає true ...

// ==============

// метод повиртає новий масив на який він був викликаний
// concat 


// const array = [1,3,4,5];
// const a = [1];
// const b = a.concat();
// b.push('2');
// console.log(b);

// const array2 =[46,4];
// const array3 = array.concat(array2);
// console.log(array3);


// створює навий масив і ключ 
var arr = ['a', 'b', 'c'];
// var eArr = arr.entries(); // створення 

for (const [key, value] of arr.entries()) { // таким чином можимо створити ключ і значення, і так отримати його
  console.log(value);
  // console.log(eArr.next().value);
}
