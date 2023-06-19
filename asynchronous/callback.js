function add(num ,callback){
console.log(num)
callback(num);
}

    function nums(num){
        console.log(num+40)
    }
add(12,nums)