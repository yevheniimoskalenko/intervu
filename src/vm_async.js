console.log('start');
console.log('start 2');

setTimeout(()=>{ // після доходження до рядка, він закидає його в стек, в стекі він починає дивитися на рядок і  баче, що є setTimeout і він викидає його із стека, но реєструє тільки функцію, і чекає коли стороній API виконнає свою роботу, після викананя функція попадає в чергу, в черзі є простий цикл який пробігає по черзі, і коли вона готова то його закидує його в стек і виконую його
  console.log(`after 5 sec`);
},5000);

function time2sec(){
  return console.log(`time2sec`);
}
setTimeout( // закидає в стак. І реєструє функцію, а саме закидаємо її і через 2 сикунди викликається
  time2sec
  ,2000);

console.log(`end`);