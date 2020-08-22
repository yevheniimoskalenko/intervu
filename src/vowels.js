function vowels (str) {
  let count = 0; // створюеэмо лічильник
  const vowels = ['a', 'e', 'i' , 'o', 'u']; // перераховуємо голосні символи
  for (const iterator of str.toLowerCase()) { // запускаемо цикл 
    
    if (vowels.includes(iterator)){ // отримуємо кожен символ із str і перевіряємо його в нашому масиві, якщо повирнув нам true
      count++; // додаємо до лічильника
    } 
  }
  return count; // повертаємо
}
// function vowels(str){
//   let matchd = str.match(/[aeiou]/gi);
//   return matchd ? matchd.length : 0;
// }

console.log(vowels('hello'));