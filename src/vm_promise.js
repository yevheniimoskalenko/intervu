console.log('request date'); //попав в стек і виконав першим

// setTimeout(()=>{ // попав в webAPI, коли настав час то функцію передали в стек на  виконання
//   console.log(`prepering date`); //попав в стек і виконав другим

//   // створюємо дані, як із бд
//   const backDate = {
//     server: 'aws',
//     port: 3000,
//     status: 'working'
//   };

//   setTimeout(()=>{ //створюємо затримку через browser web api 
//     backDate.modefied= true; //отримуємо дані із бд, і добавляємо нове поле
//     console.log('backend',backDate); //отримуємо дані із бд із добавленими даними
//   },2000);
// },2000);


// const p = new Promise((resolve, reject)=>{
//   setTimeout(()=>{ // попав в webAPI, коли настав час то функцію передали в стек на  виконання
//     console.log(`prepering date`); //попав в стек і виконав другим

//     // створюємо дані, як із бд
//     const backDate = {
//       server: 'aws',
//       port: 3000,
//       status: 'working'
//     };
//     resolve(backDate);
//   },2000);
  
// });


// p.then(data => {
//   return new Promise((resolve, reject)=>{ //  resolve - це функція, як працює коли все чудово, а reject навпаки
//     setTimeout(()=>{ //створюємо затримку через browser web api 
//       data.modefied= true; //отримуємо дані із бд, і добавляємо нове поле
//       resolve(data);// повертаємо дані коли вес впорядку
//     },2000);
//   });
//   // p2.then(clientData => {
//   //   console.log('data received',clientData);
//   // });
// }).then(clientData =>{// then працює лише коли є проміс, коли є успіх то він попадає сюди

//   console.log('data received',clientData);
//   clientData.date = Date.now();
//   return clientData;
// })
//   .then(result => console.log(result)) // після повернення отриманих даних ми можемо отримати їх
//   .catch(e => console.log(e)) // коли помилка, або reject, то він попадає сиди
//   .finally(()=>console.log('finally')); // метод finally виконується завжди


const sleep = ms => {
  return new Promise(resolve=> {
    setTimeout(()=> resolve() ,ms);
  });
};

// sleep(2000).then(()=> console.log('after 2 sec'));


Promise.all([sleep(2000), sleep(3000)]).then(()=> console.log('greate')); //Promise All приймає масив промісів, він буде чикати коли всі виконання, а потім він попада в свій then


Promise.race([sleep(2000), sleep(3000)]).then(()=> console.log('greate')); // працює навпаки, коли перший виконується на він одразу попадає в then