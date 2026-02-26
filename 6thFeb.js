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