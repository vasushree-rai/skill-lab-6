
/*let num=2
//console.log(num);
num="hello"         //while reinitializing dont use let ex:let num="hello"
console.log(num);
//const num=3;
//console.log(num);   //const is used to declare a constant variable which cannot be reinitialized or reassigned.
//num is already declared in the same scope. You cannot redeclare a variable with const. If you want to change the value of num, you should not use const. Instead, you can use let or var.
const num1=3;
console.log(num1);
*/
/*
let num1=100
let num2=200
if(num2>num1) {
    var msg="Done"
    //console.log("Success!!");
}
console.log(msg);  //var is function scoped, so it is accessible outside the if block. However, it is generally recommended to use let or const for variable declarations to avoid unintended consequences of variable hoisting and scope issues.
*/
/*let n1=10
let n2=20
let mul=n1*n2
console.log(mul);
*/
/*
let number=1
if(number%2==0) {
    console.log("Even");
}
else{
    console.log("Odd");
}
*/

//Functions in JS : block of code that can be reused
/*function sum(a,b) {
    return a+b
}
let result=sum(5,7)
co
*/
/*let arr=[]
let obj={
    id : 1,
    name : "John",
    address : {   
        city : "New York",
    },
    isActive : true
}
//console.log(obj.name);
//console.log(obj.address);
//console.log(obj.isActive);
let {name, address} = obj
console.log(name, address);*/
const userProfile={
    id: 402,
    username: "react-ninja",
    email: "ninja@example.com",
    address: {
        city: "New York",
        zip: "10001"
    }
}
const {username, email, address:{city}} = userProfile
console.log(username, email, city);



let {username,email,address}=userProfile
console.log(username);
console.log(email);
console.log(address);
*/
//spread operator: ... used to expand an iterable (like an array or object) into individual elements. It is denoted by three dots (...).
//let arr1=[1,2,3]
//let arr2=[...arr1]  copying arr1 to arr2 using spread operator
//console.log(arr2);  //Output: [1, 2, 3]

//let arr1=[1,2,3]
//let arr2=[...arr1,4,5]
//let arr3=[...arr1,...arr2]  merging arr1 and arr2 into arr3 using spread operator
//console.log(arr2);
/*
const obj1={a:1};
const obj2={b:2};
const mergedObj={...obj1,...obj2}  //merging obj1 and obj2 into mergedObj using spread operator
console.log(mergedObj);  //Output: {a: 1, b: 2}

//Add item immutably
const newArray={...originalArray,5};
console.log("New Array:", newArray);  //Output: New Array: {0: 1, 1: 2, 2: 3, 5: undefined}

//remove item immutably
const filteredArray=originalArray.filter((num)=>num!==2);
console.log("Removed 2:",filteredArray);  //Output: Removed 2: [1, 3]
*/
//update object immutably
const userState={
    name:"Rahul",
    role:"Developer"
};

const updatedUser={
    ...userState,
    role:"Admin"
};
console.log("Original State:",userState);  //Output: Original State: {name: "Rahul", role: "Developer"}
console.log("Updated State:",updatedUser);  //Output: Updated State: {name: "Rahul", role: "Admin"}


//Array .map() (Transforming data)
//Simple transformation
const numbers=[1,2,3,4,5];
const doubled=numbers.map(num=>num*2);
console.log(doubled);  //Output: [2, 4, 6, 8, 10]

//A React-Style scenario (transforming strings to "UI")
const names=["Alice","Bob","Charlie"];
const userCards=names.map((name)=>{
    return <Card name="${name}"/>;
});

const products = [
 { id: 1, name: "Phone", price: 800 },
//   { id: 2, name: "Mouse", price: 40 },
//   { id: 3, name: "Laptop", price: 1200 }
// ];