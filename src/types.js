// null, undefined, boolean, number, string, object, symbol

// console.log( typeof 0) // number 
// console.log(typeof true) // boolean
// console.log(typeof '123') // string
// console.log(typeof {}) //object
// console.log(typeof undefined) // не обявлена или нет никого значение
// console.log(typeof Symbol('js'))
// console.log(typeof null) // отсутствоет значенте

// привидение типов
// let lenguages = 'JavaScript'
// if(lenguages){
//     console.log(`the best lenguage ${lenguages}`)
// }

// булиан значение которые виртают false - '', 0 , null, undefined, false, NaN

// console.log(Boolean('')) //false
// console.log(Boolean(0)) //false
// console.log(Boolean(undefined)) //false
// console.log(Boolean(null)) //false
// console.log(Boolean(false)) //false
// console.log(Boolean(NaN)) //false

// console.log(Boolean(''))
// console.log(Boolean('hello'))
// console.log(Boolean(' ')) //true пробел это уже не пустаня строка
// console.log(Boolean('0')) // true это уже строка из значением
// console.log(Boolean(0)) //будет false 0 - это false
// console.log(Boolean(undefined)) //default false
// console.log(Boolean(null)) //default false
// console.log(Boolean(false)) //default false
// console.log(Boolean(NaN)) //default false
// console.log(Boolean([])) //default true
// console.log(Boolean({})) //default true
// console.log(Boolean(function(){})) //default true

// строки и числа

// console.log(1 + '2') // 12 через то что 1 это число а 2 - это строка - и в итоге выходит 12 строка
// console.log('' + 1 + 0) // js видет что это сткрока и  1 приводит к строке складает 0 и в сумме выходит что 10 сткрока
// console.log('' -1+0) // это уже чилисло
// console.log('1' * '23') // будут число  оно будет привлодить эти строки к числам number
// console.log(4+10 +'px') //в таком порядке то будет 14px сначала плюсует число а потом соеденяет в строку number
// console.log('px'+5+10) //сначала соеденило 5 из строкой а потом уже и остальное число px510 string
// console.log('42' - 40)// number
// console.log('24px'- 2)
// console.log(null) // будет приравнен 0
// console.log(undefined) // неможно привести к чеслу



// == && ===
// == двойные приводят до одного типа и потом сравнивают
// === тройной только сравнивает по значению
// console.log(2 == '2') //true
// console.log(2 === '2') //false
// console.log(undefined == null) //true
// console.log(undefined === null) //false
// console.log('0' == 0) //true
// console.log('0' === 0) //false
// console.log(0 == 0) //true
// console.log(0 === 0) //true


// ====
// console.log(false == '') // true
// console.log(false == []) // true
// console.log(false == {}) //false

// console.log('' == 0) // true
// console.log('' == []) // true
// console.log('' == {}) //false

// console.log(0 == null) // false
// console.log(0 == []) // true
// console.log(0 == {}) //false










