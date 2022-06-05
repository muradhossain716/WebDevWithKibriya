//function declaration
console.log(sum(2,3))
function sum(a,b){
return a+b;
}

console.log(sum2(2,3))// error !can't access function expression before it is declared
//function expression/anonymous funtion
const sum2=function(a,b){
    return a+b
}
//--immidiately invoked function
    (function(){
        console.log('print hello')
    })()
    
//arrow function
const sum3=(a,b)=>{
    return a+b;
}
//arrow function doesn't have this keyword
//---imidiately invoked arrow function
    (
        ()=>{
            console.log('imidiately invoked arrow function')
        }
    )



//callback function
function callback(){
    sum3();
}