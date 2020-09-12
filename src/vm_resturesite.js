function calcValue(a,b){
  return [
    a+b,
    a-b, 
    a*b,
    a/b, 
    undefined
  ];
}

// console.log(calcValue(4,2));


// const [sum, sub] = calcValue(42,32);
const result= calcValue(42,32);
const [sum, sub = 0, ,...others] = result; //sum = першому елементу масива, sub = дорівнює другому єлемента масива, якщо ми пропускаємо через кому то він буде проігнорований, ...others в нас буде забирати всі остальні дані в одне, можна задавати дефолтне значення якщо він буде пусти, то підставиться 
// console.log(others);


const person = { 
  name: 'Viktoria',
  age:20, 
  address:{
    city: 'Kharkiv',
    country: 'Ukraine'
  } };


// const { name: firstName = 'без ім\'я ', car='lada', address: { city: homeTown = 'kiev' } } = person;
// const { name, ...info } = person;
// console.log(info);

function logInfo({ name = 'без ім\я є',age }){
  console.log(name + ' '+ age);
}
logInfo(person);