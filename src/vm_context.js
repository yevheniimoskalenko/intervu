function hello(){
  console.log(`hello`, this); //якщо this знаходиться у функції то він зсилаєтсья на глобальну зміну widnow, в node.js буде global
}


const s = {
  cauntry: 'Ukraine'
};

const person = {
  name: 'viktoria',
  age: 20,
  seyhello: hello, // отримуємо функцію із посиланням на context обєкта. тобто як биреться контекст, якщо злівої сторони биреться контекст, в якому була викликана
  seyHellowWindow: hello.bind(s), // а тут ми передали контект із зміної s, буде зв'язаний із нашою зміною
  //   seyDom: hello.bind(document) //в node.js не існує в браузері є і він зсилається на html
  logInfo: function(job){ //параметр який буде приймати функція 
    console.log(`name is ${this.name}`);// контекст зсилається на person
    console.log(`work as ${job}`);// контекст зсилається на person
  }
};

const yevhenii = {
  name: 'Yevhenii',
  age: 23,
};


// person.logInfo.bind(yevhenii)('back-end'); // він не викликає функцію, а створює нову і ми можемо викликати його, коли завгодно, через яку прив'язали новий контекс
// person.logInfo.bind(yevhenii,'back-end')(); // немає різниці
// person.logInfo.call(yevhenii,'back-end'); // call викликає одразу, а все остально подібне bidn
person.logInfo.apply(yevhenii,['back-end']); // таке саме що call , но зміні передаються массивом, і завжди повині передати два параметра, а саме перша зміна це context, а друга це []
// щоб передати властивість ви повині написати таким чином [bind(context, зміна1, зміна2...)]



// ====== прикла комбінації із прототипами


const array = [1,3,4,5];

//простий прикла, я переробити так щоб ми не експортувати кудись, а в прототип
function multy(arr, n){
  return arr.map(elem => {
	 return elem* n;
  });
}

Array.prototype.multy = function(n){ // ми створили нову функцію в прототипі, і тепер доступно для Array метод
  return this.map(elem => { //в this ми беремо context 
	 return elem* n;
  });
};
console.log(array.multy(5));
console.log(multy(array,5));