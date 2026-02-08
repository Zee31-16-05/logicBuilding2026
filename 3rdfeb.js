// const arr = ["apple", "banana", "cherry",34,12,true];
// const reversedArr = [];
// for(let i= arr.length -1; i>=0; i--){
//     reversedArr.push(arr[i]);
// }
// console.log(reversedArr);

let str = "NodejsIsAwesome";
let words = [];
let currentWord = "";

// step 1: divide the string into comma separated characters
for(let i= 0; i< str.length; i++){
    words.push(str[i]);
}
console.log(words);

// step 2: reverse the array of comma separated characters using map method
const reverseChar = words.map((char,index,arr)=>{
    return arr[arr.length -1 - index]
})
console.log(reverseChar);

// step 3: join the reversed characters to form the final reversed string

// let temp = ''
// const joinedStr = reverseChar.map((char,index,arr)=>{
//     temp += char;
//     return temp;
// })
// console.log(joinedStr);
// output :
// [
//   'e',               'em',
//   'emo',             'emos',
//   'emose',           'emosew',
//   'emosewA',         'emosewAs',
//   'emosewAsI',       'emosewAsIs',
//   'emosewAsIsj',     'emosewAsIsje',
//   'emosewAsIsjed',   'emosewAsIsjedo',
//   'emosewAsIsjedoN'
// ]

// not using map method to join the characters becuase
// it will return array of intermediate strings not as a single string
let temp = '';
for (let i = 0; i < reverseChar.length; i++) {
    temp += reverseChar[i];
}
console.log(temp); // "emosewAsIsjedoN"


