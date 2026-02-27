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
        covered.push([start, newInterval[1]]);
        if(intervals[index+1]) covered.push(intervals[index+1]);
        break;
    } else {
        console.log("cccccc",intervals[index + 1][0])
        
        covered.push(intervals[index],[intervals[index + 1][0],newInterval[1]])

        break;
}
}
console.log("lj ljljl",covered2)