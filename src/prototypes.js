// __proto__
// Object.getPrototypeOf


function Cat(name, color="tse"){
    this.name = name
    this.color = color
}

Cat.prototype.voice = function(){
    console.log(`${this.name}`)
}
// const cat = new Cat('murchik')
// console.log(cat.__proto__ === Cat.prototype)
// cat.voice()


function Person (){

}
Person.prototype.lags = 2
Person.prototype.skin= 'white'

const person = new Person()
person.name='yevhenii'

console.log('skin' in person)
console.log(person.skin)


console.log(Object.hasOwnProperty('name'))
console.log(Object.hasOwnProperty('legs'))

