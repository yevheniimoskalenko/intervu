const person = Object.create({
// в цих фігурних дужках створюються prototype 

},{ //створює новий обєкт, з указаними властивостями
  name: {
    value:'Yevhenii', //так добавляються дані в обєкт
    enumerable: true,
    writable: true,
    configurable: true
  }, birthYear: {
    value: 1997,
    enumerable: true, //параметр який по дифолту стоїть false, і через те ме і не бачимо поля(
    writable: true, // дескріптор який за замовчуванням стоїть false, він допомагає, щоб ніхто не мнінював значення
    configurable: false // дескріптор який допомагає видалити поле якщо стоїть в true
  }, age:{
    get(){
      return new Date().getFullYear() - this.birthYear; // за допомогою get, ви можете виконувати різні задачі, і повертати 
    },
    set(value){ // для того, присвоїти нам потрібно її переназначить, за допомогою set ми можемо робити що завгодно
      console.log(value);
    }
  }
});

person.name = 'viktoria'; // якщо дескріптор writable стоїть false то ви не зможемо змінити поле(, якщо true то цей варіант працює
// delete person.name; // видаляємо поле
person.age = 25;
console.log(person);

// for (let [key, value] of person){ // він не виконає, томущо, за замовчуванням enumerable: false, і ми його не бачимо
//   console.log(key);
// }