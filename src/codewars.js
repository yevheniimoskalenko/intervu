// const arr1 = [1, 2, 4, 3, 4],
//   arr2 = [2, 1, 2, 4, 3];
// function arraysSimilar(arr1, arr2) {
//   return JSON.stringify(arr1.sort() === JSON.stringify(arr2.sort()));//третій варіант
//   if (arr1.length !== arr2.length) { // певий ділом ми зрівнюємо їх довжину між собою
//     return false;
//   }
//   arr1.sort(); // сортуємо перший масив
//   arr2.sort();// сортуємо другий масив

//   for (let i = 0; i < arr1.length; i++){ // через цикл ми беремо одне значення і перевіряємо чи воно не рівне іншому в іншому масиві, якщо не рівне то повертаємо false
//     if (arr1[ i ] !== arr2[ i ]) {
//       return false;
//     }
//   }
//   return true;
// }

// function arraysSimilar(arr1, arr2) {
//   return JSON.stringify(arr1.slice().sort()) === JSON.stringify(arr2.slice().sort());
// }

// console.log( arraysSimilar(arr1,arr2));


// ================================================================
// Sum ALL the arrays!
// const arr = [1,2,3,4,'git',[5,6,[7]],8];

// function arraySum(arr) {
//   arr = arr.toString().split(','); //тут ми перетворюємо багатомірний масив в рядок і його потім переводимо в одномірний масив який із значеннями буде string

//   let sum = arr.reduce((sum, elem) => { // за допомогою raduce ми беремо масив і кожен елемент плюсуємо в акамулятор, якщо в нас з'являється, не чесло то ми присвоюємо 0 до акамулятора, а якщо у нас число то просто добавляємо до суми
//     return Number.isNaN(+elem) ? sum += 0 : sum += +elem;
//   },0);
//   return sum;
//   // sum ALL the things!
// return arr.reduce((n, x) => n + (Array.isArray(x) ? arraySum(x) : isNaN(x) ? 0 : x), 0)
// }
// console.log(arraySum(arr));




