// let a = 42 
// let b = a //получаем значение a 
// b++ //
// console.log(b)

let a = [1,2,3]

let b = a // копируем ссылку на массив, а не значение 
// let b = a.concat() // копируеем чтобы не мутировал


b.push(4)//добавляем значение, это не правельно для массива, а нужно использовать concat

// console.log(a)
// console.log(b)

// const c = [1,2,3,4]
// const d = {1:1}

// console.log(a == b) //true бо это одно ти тоже
// console.log(a ===c) // false в действительности это разные обекты 

// console.log(Array.isArray(c)) // проверка типа Array



