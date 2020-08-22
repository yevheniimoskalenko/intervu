const person = {
  name: 'Yevhenii',
  age: 23,
  greet: function () { // ми строврили функцію локально- тобто вона доступна лише в цьому обєкті
    console.log('greet'); 
  }
};


Object.prototype.seyHello = function(){ // створили глобально новий метод і тепер він доступний для всіх обєктів
  console.log('sey hello');
};

// console.log(person.seyHello());// виклик функции


const viktoria = Object.create(person); // створюємо обєкт, а саме прототип в якому будуть поля ім'я вік ... це лише в протоотипі
viktoria.name = 'viktoria'; // так ми заповнили даними наш пустий обект, тепер ми бачимо, що у зміній є поле із ім'ям вікторія


// console.log(viktoria);

// console.log(viktoria.seyHello());// пошук по полів або функцій (прототип)зверху вниз як показано на прикладі


// js збудований на обєктах і прототипах


const str = ''; //звичайний рядок, з типом String в якого є свої методи (прототипи)


// console.log(str.greet());// він недостпуний, томущо він був сворений лише локально


// const str= new String('iam string');// ми створили рядок із типом string в нього є доступні для цього типу прототипи, в яких він може викликати

// console.log(str.seyHello()); // ми пробігаємося по всих методах (функціях) і доходимо до посліднього прототипу який знаходиться в Object і викликаємо його

Array.prototype.log = function(){ // так створюється прототип для масиву, і вона доступна лише в масиві
  console.log('log');
};
const s = [1,2,3,4];
console.log(s.log());



// console.log(str.log()); // не працює