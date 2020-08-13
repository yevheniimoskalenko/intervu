function Cat(name, color){
    this.name = name,
    this.color = color
}
// const cat = new Cat('sus','white')
// console.log(cat)


function myNew(constructor, ...args){
    const obj = {}
    Object.setPrototypeOf(obj, constructor.prototype)
    return constructor.apply(obj, args) || obj
}

const cat = myNew(Cat,'white', 'red')
console.log(cat)
