let num = [24,true,"hello",38];
let num2 = new Array(24,true,"hello",38);
console.log(num);
console.log(num2);
//add element to the end
num.push("fruits");
console.log(num);
//add element at the start
num.unshift(3);
console.log(num);
//remove element at end
num.pop("fruits");
console.log(num)
//remove element at the start
    num.shift(3);
console.log(num);
//use index notation to add lements at a specific index point
//Given an array of numbers  x return an array even where  item in x is multiplied by 5
//declare array
let x = [2,8,2,87,33,67];
let even = x.map(function(item){
return item*5
})
console.log(even)
//for each
let result=x.forEach(function(item){
    return item*5
    
})
console.log(result)
//to use for each to get for an array 
let results =[];
x.forEach(function(item){
results.push(item *5) //one can use shift insert and the start of 
})
console.log(results);

//contactination (adding array) a way of m
let newArray =num.concat(x);
console.log(newArray)
// spread operator takes everything in x and add it(""...n)
let tests=["Angela",...x,...num]
console.log(tests)
//distructure using a spread operator(the )
let[a,b,...c] = x;
console.log({a});
console.log({b});
console.log({c});
//Given an array of numbers  x return an array even where  item in x is multiplied by 5
//declare array
let p=[23,45,67]
let ven =p.map(function(item){
    return (item*5)

}
)
console.log(ven)
//I've invited you to fill out a form:
//Arrays
//Find the last element of the following arrays.
//arr1 = [3,7,34,90,12]
//arr2 = [true, "green", "where",12,56]
const arr1 =[3,7,34,909,12]
const all=arr1[arr1.length-1]
console.log(all)

const arr2 =[true,"green","where",12,56]
const arr3 =arr2[arr2.length-1]
console.log(arr3)
//Write a JS program that will join the following array elements into a string
//myPets = ["Cow", "Python", "Snake", "Dog"];
const myPets =["Cows","Python","Snake","Dog"]
console.log(myPets.join())
//Write a JS script to sort the following array items
//var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
const arr5 =[-5,9,5,3,2,-3,6,8,4,1,]
console.log(arr5.sort())
//Write a program to remove duplicates from the following array.
//Console the array without duplicates, and console another array that only contains the duplicates
//var arr = ["apple", "mango", "apple",
           // "orange", "mango", "mango"];
           const arr6 =["apple", "mango", "apple",
            "orange", "mango", "mango"]
            const arr=[...new Set(arr6)]

            //Write a JS script to search for the following word in the array.
//4
//If the word is present, console it else console "the search word was not found"
let arr7 = ["the", "way", "x", 4, 23];
// console.log(arr7.includes(4))
 const y =4
 if (y=="the"){
 console.log(y)}
 else{
    console.log("the search word was not found")
 }
//Write a JS script to sort the following string
let word = "lufituaeb"
console.log(word.split("").sort().join(""))


