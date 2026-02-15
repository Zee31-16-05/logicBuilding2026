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