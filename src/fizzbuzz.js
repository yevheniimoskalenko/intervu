function fizzBuzz(num){
  for (let i = 1; i<= num; i++){
    if (i % 3 === 0 && i % 5 === 0){ //перевірка кратних 3 і 5. якщо так то виводимо fizzbuzz
      console.log('fizzBuzz');
    } else if (i % 3 === 0){ // якщо тільки 3 то fizz
      console.log('fizz');
    } else if (i % 5 === 0){ // якщо тільки 5 то buzz
      console.log('buzz');
    } else {
      console.log(i); 
    }
  }
}
fizzBuzz(5);