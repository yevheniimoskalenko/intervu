// imediate Invoiked function Expression

let result = []
// for(var i = 0; i < 5; i++){
//          result.push(function(){
//              console.log(i)
//          })
// }
// result[3]()


for(var i = 0; i < 5; i++){
    (function(){
        let j = i
        result.push(function(){
            console.log(j)
        })

    })()
}
result[3]()