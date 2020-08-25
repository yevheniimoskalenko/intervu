const person = { surname: 'Start',
  knows:function(what, name){ // принимаем контекст
    console.log(`что он знает ${what} кто ${name} ${this.surname}`);  // выводим метод

  } };
// person.knows('start','yevhneii') // вызиваем метод и передаем контекст


// const jon = {surname: 'jhon'}
// person.knows.call(jon, 'all', 'test') // забераем метод и передаем из person и спомощью call передаем контекст и параметры
// person.knows.apply(jon, ['all', 'test']) // забераем метод и передаем из person и спомощью call передаем контекст и параметры
// person.knows.call(jon, ...['all', 'test']) // забераем метод и передаем из person и спомощью call передаем контекст и параметры
// person.knows.bind(jon, 'nathing', 'test')() // все тоже самое, но возвращает новую функцию


// ====== явный 
// function logInfo(){
//     console.log(this)
// }

// const obj = {a: 32, b: 311}

// logInfo.bind(obj)()
// logInfo.call(obj)
// logInfo.apply(obj)

// === неявный

// const animals = {
//     heand: 5,
//     logInfo: function(){
//         console.log(this)
//     }
// }
// animals.logInfo()


function Cat(color){
  this.color = color;
  console.log(this);
  (()=>{
    console.log(this);
  })();
}
Cat('red');