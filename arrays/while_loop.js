let num =[3,5,10,30,8,6];
let i =0;
let multiplication=1
let sum =0;
while(i<num.length){
    console.log(num[i]);
    sum+=num[i]
    multiplication*=num[i]
    i++;
}
console.log({sum});
console.log({multiplication})