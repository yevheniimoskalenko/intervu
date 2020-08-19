const axios = require('axios')
const p = new Promise(async(resolve, reject) =>{
   await axios({url: `https://jsonplaceholder.typicode.com/todos/1`, method: 'get'})

   .then(response => resolve(response))
 
})


// p.then((r) => console.log(r)).then(res=>{
//     console.log(res.data)
// } )


const sleep = ms => {
    return new Promise(async(resolve, reject)=> {
      await  setTimeout(()=>{
            console.log(`sleeping : ${ms}`)
        }, ms)
       return resolve()
    })
}

sleep(0).then(rs => console.log(rs))
sleep(0).then(rs => console.log(rs))
sleep(2000).then(rs => console.log(rs))
sleep(1500).then(rs => console.log(rs))