// create an object
let person={
    name:"Susan",
    age:25,
    height:"5ft5Inch",
    friend:{
        name:"Amanda",
        age:20
    }
}
let student=new Object();
console.log(student);

student.name="Mary" // adding a property
console.log(person.age); //log a value in an object
console.log(person["height"]);
console.log(person.friend.age);//to find the value fron the nested object
console.log(person.friend["age"]);
console.log({student})
person.age=27
person.school="Akirachix" //to add new key and value in an object(properties)
console.log(person)
console.log(person["age"]);

//to add another object to without writing (cloning an object)
let person2=Object.assign(person)
console.log({person2});
person2.country="Kenya"
console.log(person2)

let keys=Object.keys(person)//how to get the keys in an object we use object.keys
console.log({keys});

let values=Object.values(person)
console.log({values})