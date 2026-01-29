// let value = "Nodejs is awesome!";
// console.log(value.split(" "));
// let result = [];

// for(let i = value.split(" ").length; i > 0; i--){
//     result.push(value.split(" ")[i - 1]); 
// }
// console.log(result);

//Q.2
// Input: ['node', 'express', 'node', 'js']
// Output: { node: 2, express: 1, js: 1 }

// let arr = ['node', 'express', 'node', 'js'];
// const output = arr.reduce(((acc,curr)=>{
//     if(acc[curr]){
//         acc[curr]++;
//     }
//     else{
//        acc[curr]=1 
//     }
//     return acc;     //always return the accumulator while using reduce my friend.
// }),{})
// console.log(output);

//Q.3 Given an array of objects, remove duplicates based on a specific key (id).
// let Input = [
//   { id: 1, name: 'A' },
//   { id: 2, name: 'B' },
//   { id: 1, name: 'C' }
// ]
// let reso = []
// for(let i= 0; i<Input.length; i++){
//   console.log(Input[i]);  
//   if(reso.length === 0){
//     reso.push(Input[i])
//   }
//   else{
//     if(reso[0].id !== Input[i].id){
//       reso.push(Input[i]) 
//     }
//   }
// }
// go for some() function my boi coz it checks on all Element.
// Output: [
//   { id: 1, name: 'A' },
//   { id: 2, name: 'B' }
// ]

// let arr = Input.reduce(((acc,curr)=>{
//     if(!acc.some(obj=> obj.id === curr.id)){
//          acc.push(curr)
//     }
// return acc;
// }),[])

// console.log(arr);


const zee = [
  { name: 'Alice', role: 'admin' },
  { name: 'Bob', role: 'user' },
  { name: 'Charlie', role: 'admin' }
]
// Output: {
//   admin: [{ name: 'Alice', role: 'admin' }, { name: 'Charlie', role: 'admin' }],
//   user: [{ name: 'Bob', role: 'user' }]
// }
let data = []
const group = zee.reduce((acc,curr)=>{
  if(acc[curr.role]){
    acc[curr.role].push(curr)
  }
  else{
    acc[curr.role] = curr
  }
  return acc
},{})
console.log(group);