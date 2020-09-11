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


// Valid Parentheses


// function validParentheses(parens){
//   const open = ['(', '{', '[']; // створюємо масив з відкриваєчими дужками
//   const close = [')', '}', ']'];//  створюємо масив з закриваєчими дужками

//   const stack = []; //  коди будемо складати дужки
//   parens =parens.split('') // отриманий рядок розбиваємо на масив
//     .map(elem => { //отриманий кожен елемент масива
//       if (open.includes(elem)){ // перевіряємо відкриті дужки чи є в нашому масиві
//         stack.push(elem); // то добавляємо його в кінець stack
//       } else { //якщо немає то тоді ми шукаємо його закриту дужку
//         if (close.indexOf(elem) === open.indexOf(stack[ stack.length - 1 ])){ // в першому ми шукаємо закриваючу дужку, а в другому откриту дужку
//           stack.pop(); // видаляємо із кінця
//         } else {
//           return false;
//         }
        
//       }
//     });
//   console.log(stack);

//   return stack.length === 0;


// }

// function validParentheses(parens){
//   const open = ['(', '{', '[']; // створюємо масив з відкриваєчими дужками
//   const close = [')', '}', ']'];//  створюємо масив з закриваєчими дужками

//   let stack = 0; //  коди будемо складати дужки
//   parens =parens.split('') // отриманий рядок розбиваємо на масив
//     .map(elem => { //отриманий кожен елемент масива
//       if (elem === '('){
//         stack++;
//       } else if (elem === ')'){
//         stack--;
//       }
//       if (stack < 0) {
//         return false;
//       }
//     });
//   if (stack === 0) {
//     return true;
//   } else {
//     return false;
//   }
//   // console.log(stack);

//   // return stack.length === 0;
// }
// console.log(validParentheses('())'));

// function spongeMeme(sentence) {
//   let res = '';
//   for (let i = 0; i < sentence.length; i++){
//     if (i % 2){
//       res += sentence[ i ].toLowerCase();
//     } else {
//       res += sentence[ i ].toUpperCase();
//     }
//   }
//   return res;
// }

// const spongeMeme = sentence => 
//   sentence.split('').map((letter, i) => 
//     i % 2 ? letter.toLowerCase() : letter.toUpperCase()
//   ).join('')

function spongeMeme(sentence) {
  return sentence.split('').map((v,i) => i % 2 ? v.toLowerCase(): v.toUpperCase()).join('');
} 
console.log(spongeMeme('stop Making spongebob Memes!'));