let arr = [[1,4],[3,6],[2,8]]   //output - [[2,8]]

const covered = arr.reduce((acc,value,index)=>{
  [start,end] = value
  if(index === 0){
    acc.push(value)
  }
  else{
 if(start <= acc[acc.length-1][0] && end >= acc[acc.length-1][1]){
acc.pop()
 acc.push(value)
 }

  }
  return acc
},[])
console,log("lj ljljl",covered)

// intervals = [[1,3],[6,9]]
// newInterval = [2,5]
//[[1,5],[6,9]]


const intervals = [[1,3],[6,9]]
const newInterval = [7,11]

const covered2 = [];
for(let index = 0; index < intervals.length; index++){
    const [start, end] = newInterval
    const [intervalStart, intervalEnd] = intervals[index]
    if(intervalEnd <= newInterval[1] && intervalStart >= newInterval[0]){
        covered2.push([start, newInterval[1]]);
        if(intervals[index+1]) covered2.push(intervals[index+1]);
        break;
    } else {
        console.log("cccccc",intervals[index + 1][0])
        
        covered.push(intervals[index],[intervals[index + 1][0],newInterval[1]])

        break;
}
}
console.log("lj ljljl",covered2)

//find the longest substring without repeating characters in a given string
// Input:  "abcabcbb"
// Output: 3   // "abc"

const input = "abcabcbb";
let maxLength = 0;
let set = new Set();
for(let i = 0; i<input.length; i++){
  if(set.has(input[i])){
    set.clear();
  }
  set.add(input[i])
  maxLength = Math.max(maxLength, set.size);
}
console.log(maxLength);

function customParseInt(str)
{
if(typeof str !== 'string'){
  throw new error("Invalid input: Expected a string");
}

let result = 0; //scoreborad ready

for(let i = 0; i< str.length; i++){
  const char = str[i]
  const value = char.charCodeAt()- '0'.charCodeAt();

  if(value < 0 || value > 9){
    throw new error("Invalid input: String contains non-numeric characters");
  } 
result = result * 10 + value; //scoreboard update
}

return result;
}


console.log(customParseInt("123")); 
// Output: 123 (number format not string)