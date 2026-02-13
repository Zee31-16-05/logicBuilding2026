// convert array into query string

const arr1 = ["firstName", "lastName", "age"];
const arr2 = ["Suresh", "lawde", 30];
const result = arr1.map((item,index)=>{
    return `${item}=${arr2[index]}`
}).join('&');

// console.log(result); // firstName=Suresh&lastName=lawde&age=30

let arr = [1,2,[34,55],6,[77,88],9]
let arr12 = []
let mapResult = arr.map((item)=>{
    if(Array.isArray(item)){
        for(let i=0;i<item.length;i++){
            arr12.push(item[i])
    }
}
else{
    arr12.push(item)
}
})

// console.log(arr12) // [1, 2, 34, 55, 6, 77, 88, 9]

let obj22 = {
    name: "Suresh",
    age: 30,
    city: "Pune",
    address : {
        street: "MG Road",
        zip: 411001
    }
}
let flatObj = {}
for(let key in obj22){
    let value = obj22[key]
    // console.log(`${key} : ${value}`)
    if (value && typeof value === 'object' && !Array.isArray(value)) {
        for (let key2 in value) {
            flatObj[key2] = value[key2]
        }
    } else {
        flatObj[key] = value
    }
}
console.log(flatObj) // { name: 'Suresh', age: 30, city: 'Pune', street: 'MG Road', zip: 411001 }

const arr23 = [1,2,3,3,3,4,4,4,5,5]

const result23 = arr23.reduce((acc,curr)=>{
    if(curr in acc){
        acc[curr]++
    }
    else{
        acc[curr] = 1
    }
    return acc
},{})
console.log(result23);

const str11 = "node js backend developer"
let arr55 = []
for(let i = 0; i < str11.length; i++){
    if(str11[i] !== ' ' &&  i !== 0){
        arr55.push(str11[i])
    }
    else if(i == 0){
        arr55.push(str11[i].toUpperCase())
    }
    else{
        arr55.push(str11[i])
        arr55.push(str11[i + 1].toUpperCase())
        i++
    }
}
console.log(arr55.join(''))
