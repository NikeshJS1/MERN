//Functions in JS
//normal and arrow function
function add1(a,b){
    console.log(a+b)

}
add1(5,10)
//This is a normal function

const add2=(a,b)=>{
    console.log(a+b)
}
add2(5,20)
//This is an arrow function

//While coding in JS, only use arrow function

const showName = (name) => {
    console.log("Hello"+" "+name)
}
showName("MERN")

const myArray = [1,2,3,4,5,6,7,8]
for(let i = 0; i<myArray.length; i++){
    console.log(myArray[i])
}

//Using JS methods: 1. Map
const newArr = myArray.map(item => item * 2)
console.log(newArr)

//2. Filter
const filteredArray = myArray.filter(item => item < 3)
console.log(filteredArray)

