class Person{
    constructor(name, age, height){
        this.name=name
        this.age=age
        this.height=height
        
        }
        greet(){
            console.log("Hello");
    }
    }
 let person=new Person('Hanna',35,'8inches')
 console.log({person});
 person.greet()
//  inheritence
class  Child extends Person{
    constructor(name, age, height, brains){
        super(name, age, height)  //calling the parent
        this.brains=brains
    }
}
let firstChild=new Child('Jane',2,'2ft','smart')
console.log({firstChild});
class Sister extends Person{
    constructor(name, age, height, brains){
        super(name, age, height)  //calling the parent
        this.brains=brains
        this.height='7ft'    //overriding the height the height will still be 7ft
}
}
let sister=new Sister('Amanda',2,'5ft','average')
console.log({sister});