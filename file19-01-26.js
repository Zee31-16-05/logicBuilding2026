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
let Input = [
  { id: 1, name: 'A' },
  { id: 2, name: 'B' },
  { id: 1, name: 'C' }
]
// Output: [
//   { id: 1, name: 'A' },
//   { id: 2, name: 'B' }
// ]

let arr = Input.reduce(((acc,curr)=>{
    if(!acc.some(obj=> obj.id === curr.id)){
         acc.push(curr)
    }
return acc;
}),[])

console.log(arr);
