
function divide(num){

    if(num.length<=1){
        return num
    }
    let middle =Math.floor(num.length/2)
    let left =num.slice(0,middle)
    let right =num.slice(middle)
    return sortedArray(divide(left),divide(right))
}
function sortedArray(left,right){
    emptyArray=[]
    while(left.length && right.length){
        if(left[0]<right[0]){
            return emptyArray.push(left.shift())
        }
        else{
            emptyArray.push(left.shift())
        }
        return[...emptyArray,...left,...right]
    }
}
const num =[7,4,3,6,8,1]
// const addition =6
console.log(divide(num))
// function binary(nam,target) {
//     let left =0;
//     let  right=nam.length -1;
//     while (left<=right){
//         let middle =Math.floor((left + right)/2);
//         if(nam[middle] ===target){
//             return middle;
//         }
//         else if (nam[middle] <target){
//                 left =middle+1;
//         }
//         else{
//             right =middle -1;
//         }
//     }
//     return null

// }
// let nam =[2,3,4,8,10,11,56]

// let target =8;
// console.log(binary(nam,target))

// function add (num,target){
//     let lef
// }
function less(add){
    if( add .length<=1){
return add
    }
   let middle=Math.floor(add.length/2) 
   let left =add.slice(0,middle)
   let right = add.slice(middle)
   return sortedArray(less(left),less(right))
}
function sortedArray(left,right){
    emptyArray=[]
    while(left.length && right.length){
  if(left[0]>right[0]){
    emptyArray.push(left.shift())
  }
  else{
    emptyArray.push(right.shift())
  }
    }
    return[...emptyArray,...left,...right]
}
let add =[1,34,56,7,8,9,1]
console.log(less(add))
function divideArry(nums){
    if(nums.length<=1){
        return nums
    }
    let middle = Math .floor(nums.length/2)
    let left=nums.slice(0, middle)
    let right =nums.slice(middle)
    return sortedArray(divideArry(left),divideArry(right))

}
function sortedArray(left,right){
    emptyArry =[]
    while(left.length && right.length){
        if(left[0]>right[0]){
            emptyArry.push(left.shift())
        }
        else{
            emptyArry.push(right.shift())
        }
        
    }
    return[...emptyArry,...left,...right]
}
let nums =[4,56,78,7,90,87,54]
console.log(divideArry(nums))