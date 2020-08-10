// function seyHello(name){
//     let message = `hello ${name}`
//     return function(){ //функция имеет доступ до верхнего scope перемены
//         console.log(message)
//     }
// }

// // name  это первая функция, а seyHello - это возврат
// const name = seyHello('yevhenii')
// name()


// function sum(a,b){
//     return function(){
//         console.log(a+b)
//     }
// }
// const math = sum(1,5)
// math()

// function create(){
//     const fw = ['angular', 'react'] // мы замкнули значение в функции и оно стало доступным только в рамка функции (приват)
//     return {
//         add:function(framework){   
//             fw.push(framework)
//         },
//         print: function(){
//             console.log(fw)
//         }
//     }
// }
// const cr= create().print()


// setTimeout


 const fib = [1,2,3,4,5,13]
for(var i = 0; i< fib.length; i++){

(function(j){ setTimeout(function(){
    console.log(`fib${j}, [${fib[j]}]`)
},1500)})// мы замикаем setTimeout, 

(i) //отправлем значение в фунуцию(замикание)

}