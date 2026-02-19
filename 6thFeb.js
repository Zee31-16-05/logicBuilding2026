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




const Input = [
  { id: 1, name: 'A' },
  { id: 2, name: 'B' },
  { id: 3, name: 'C' },
  { id: 4, name: 'D' },
  { id: 2, name: 'E' }
]

let newData = []
const Output = Input.map((item, index) => {
  if(newData.length === 0) {
    newData.push(item)
  }
  else{
    for(let i = 0; i < newData.length; i++) {
      if(newData[i].id !== item.id) {
        let count = 0
        for(let j = 0; j < newData.length; j++) {
          
          if(newData[j].id === item.id) {
            count++
            
      }
    }
    if(count === 0) {
      newData.push(item)
    }
  }

    }
  }
})
// console.log(newData)



const data = [
  { id: 1, name: 'A' },
  { id: 2, name: 'B' },
  { id: 3, name: 'C' },
  { id: 4, name: 'D' },
  { id: 2, name: 'E' }
]

const newData1 = []  //new bowl

for(let i =0; i< data.length; i++){

  if(newData1.length === 0){
    newData1.push(data[i])  //put first data in new bowl
  }
  let count = 0
    for(let j = 0; j< newData1.length; j++){
     
      if(data[i].id === newData1[j].id){
        count++
      }
    }
    if(count === 0) {
      newData1.push(data[i])  //put all data in new bowl
    }
}
console.log("new bowl",newData1)


let temp = arr112[0]
const max = arr112.map((num)=>{
  if(temp < num){
    temp = num
  }
  
  return temp
})
console.log(temp)

// Input:
const str = "aabbbc";

// Output:
// { a: 2, b: 3, c: 1 }
const countObj = {}

for(let i = 0; i < str.length; i++){
  if( str[i] in countObj){
    countObj[str[i]]++
  }
  else{
    countObj[str[i]] = 1
  }
}
console.log(countObj)

const flatArray = [1,2,[3,4],5,[6,7,8],9];
const newArray = [];
for(let i = 0; i < flatArray.length; i++) {
  if(Array.isArray(flatArray[i])) {
    for(let j=0; j< flatArray[i].length; j++) {
      newArray.push(flatArray[i][j]);

    }
  }
  else{
    newArray.push(flatArray[i]);
  }
}
console.log(newArray);sure


// Input:

function isAnagram(str1,str2){
  try{
    if(str1.length !== str2.length){
      return "Not anagrams";
    }
    else{
      let obj1 = {}
      let obj2 = {}
      //this is for str1
      for(let i = 0;i < str1.length;i++){
        if(obj1[str1[i]]){
          obj1[str1[i]] += 1;
        }
        else{
          obj1[str1[i]] = 1;
        }
      }

      //this is for str2
      for(let j = 0;j < str2.length;j++){
        if(obj2[str2[j]]){
          obj2[str2[j]] += 1;
        }
        else{
          obj2[str2[j]] = 1;
        }
    }

    //at last comparing both objects values
    for(let key in obj1){
      if(obj1[key] !== obj2[key]){
        return "Not anagrams";
      
    }
    return "Anagrams";
  }
  }
  }
  catch(err){
    console.log(err);
  }
}
const result2 = isAnagram("hello","world");
console.log(result2);




const users = [
  { name: "Zeeshan", role: "admin" },
  { name: "Ali", role: "user" },
  { name: "John", role: "admin" }
];

// Output:
// {
//   admin: [{...}, {...}],
//   user: [{...}]
// }

const result21 = users.reduce((acc,user)=>{
  if(user.role in acc){
    acc[user.role] = [...acc[user.role],user]
  }  else{
    acc[user.role] = [user]
  }
  return acc
},{})

console.log(result21)


