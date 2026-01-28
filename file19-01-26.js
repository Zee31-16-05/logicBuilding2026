let value = "Nodejs is awesome!";
console.log(value.split(" "));
let result = [];

for(let i = value.split(" ").length; i > 0; i--){
    result.push(value.split(" ")[i - 1]); 
}

console.log(result);