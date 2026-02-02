// 4️⃣ Sort Array of Objects by a Dynamic Key

const users = [
  { name: "A", age: 30 },
  { name: "B", age: 25 }
]
const sortBy = "age"


users.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));
    
console.log(users); // Output: [ { name: 'B', age: 25 }, { name: 'A', age: 30 } ]

// const uts = users.reduce((acc,curr)=>{
//     // console.log(curr["name"])
//     console.log(acc);
    
//     if(acc == Object.keys(curr)[0]){
//         console.log(curr);
        
//         return curr
//     }
// }),"name")
// console.log("uts", uts)

// so what my findings are,
//  in order to compare only numbers we should only use sort((a,b)=> a-key - b-key) 
// and for strings we should use localeCompare method.    
// if we do vise versa, we will get an error.