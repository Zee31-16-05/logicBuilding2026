// 4️⃣ Sort Array of Objects by a Dynamic Key

const users = [
  { name: "A", age: 30 },
  { name: "B", age: 25 }
]
const sortBy = "name"


users.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));
    
// console.log(users);  // Output: [ { name: 'B', age: 25 }, { name: 'A', age: 30 } ]

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

// 5️⃣ Find Intersection of Two Arrays


const Intersection1 = [1, 2, 3, 4]
const Intersection2 = [3, 4, 5, 6]
const Intersection3 = [{name: "BK"}]
const intersectionResult = Intersection1.filter(value => Intersection2.includes(value));
// const intersectionResult2 = Intersection3.filter(value => console.log(value));

// understood filter as well.
// console.log(intersectionResult2); // Output: [3, 4] 
let common= []
for(let i=0; i<Intersection1.length; i++){
    for(let j=0; j<Intersection2.length; j++){
        if(Intersection1[i] === Intersection2[j]){
            common.push(Intersection1[i])
        }
    }
}
// console.log("helllo", common);

// 6️⃣ Capitalize First Letter of Each word in a Sentence

let sentence = "hello world. this is node.";
const resultSentence = sentence.split(" ")

const utu = resultSentence.map(word=>{
    return word.charAt(0).toUpperCase() + word.slice(1);
})
console.log(utu);
// console.log(resultSentence);