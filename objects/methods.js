let student={
    name:"Ann",
    age:20,
    introduce:function(){
        console.log("Hello");
        console.log(`Hello my name is ${this.name} `);
    }
}
student.introduce();
student.hobby=()=>{        //used as a function arrow function
    console.log("I love swimming");
}
console.log({student})
student.hobby()
student.introduce()
//how to delete 
delete student.age
console.log(student);