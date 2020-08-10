// let a = 'variable 1'
// let b= 'variable 2'

// {
//     a = 'new variable 1' // может изменятся 
//     let b = 'variable scope 2' // доступна только в фигурных душках
//     console.log(a);
//     console.log(b);

// }
// console.log(a);
// console.log(b);

// const //можем тьлько менять состояние 


const PORT = 3000
// PORT=242 // нельзя менять значение
console.log(PORT)


const array = ['js', 'is', 'awesome']
console.log(array)
array.push('good') // добавлеяет значение
console.log(array)
// array = '' // переопределить в пусты нельзя
array[0] = 'javaScript' //можно заменять значение ячейки
console.log(array)

const obj = {} //мы можемо менять внутринее состояния обекта
obj.name = 'yevhenii' // добавляет в обект
obj.age = 23 
delete obj.name // удаляет елемент в обекте

console.log(obj);

