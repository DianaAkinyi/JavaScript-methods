let a=20;     //global variable
function add(b){
    console.log(a+b);
    let fruit='apple'
    console.log(fruit) //local scope anything within the boundary cannot be accessed outside
                        //if consoled outside it brings an error of not defined.
}
add(50);


function subtract(c){
    a=50
    console.log(a-c)
}
subtract(100)
console.log("a2",a)


function greet(){
    let hello="hi"
   function talk(){
    let c="hello there"
    console.log(`${hello} ${c}`); 
   }
   talk()
   function speech(){
    let d=" how are you  today"
    console.log(`${hello} ${d}`);
   }
   speech()
}
greet()