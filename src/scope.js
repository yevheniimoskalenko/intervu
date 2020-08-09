function funcA (){
    let a = 1
    function funcB(){
        let b = 2
        function funcC(){
            let c = 3
            console.log('c', a,b,c)
        }
        funcC() // доступно только a,b,c чем выше знаходится тем больше перемен доступно
        console.log('b', a,b)
    }
    funcB() // доступно только  a, b
    console.log('b', a)
}
funcA() //  уровень вложенсти, доступно только а


