let userDetails=true;

let promise=new Promise(function(resolve,reject){
    if(userDetails){
        setTimeout(()=>{resolve('User details available')},5000);
    }else{
        setTimeout(()=>{reject('No user details available')},5000);//takes a call back function
    }
});
let add=()=>{
    console.log(20+30);
}
add()
const getUserDetails=async()=>{
    let response =await promise;
     console.log(response);
    
}
getUserDetails();