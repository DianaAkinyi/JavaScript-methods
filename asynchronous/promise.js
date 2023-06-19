let success=true;
let promise=new Promise(function(resolve,reject){
    if (success){
 resolve("i have everything")}
 else{
    reject("i am still poor");
 }

}).then(()=>{console.log('It is a dream come true');}) //the chaining
.catch(()=>{console.log(" I will get money");})
.finally(()=>{console.log("i will be happy");});
console.log({promise});