const axios = require('axios'); // підключаемо axios, бо fetch немає в node.js
const delay = ms => { // створюємо функцію, з промісом, в якому буде затримка 
  return new Promise(resolve => setTimeout(()=> resolve(), ms));
};


const url = 'https://jsonplaceholder.typicode.com/todos';

// function fetchTodo (){ // створюємо функцію яка буде відправляти запит на сервер
//   return delay(2000).then(() =>{ // викликаємо функцію з затримкою, яка буде несе з собой проміс
//     return  axios({ method: 'get', url }); // ми робимо запит, і ми повиртаємо його до первоначального рівня
//   });
// }
// fetchTodo().then(res => console.log(res)).catch(e => console.log(e)); // коли ми повертали результ, то нам доступний метод then  

async function fetchAsyncTodos(){ // async це синтексичний цукор, який в кінцевому результаті буде обгорнутий в проміс, 
  try {
    await delay(2000);// await він буде працювати лише, тільки із async - повинен бути викликаний в батьківській функції
    const response = await axios({ method: 'get', url });// він чикає коли виконає перша функція із await 
    const data = await response.data;// поміщаємо результат в зміну
    console.log(data); // викликаємо її
  } catch (e){
    console.log(e); //на етапі асінхроного коду, вийшла помилка, то ми відразу її відловлюємо
  }

}
fetchAsyncTodos();