let u = "nodejsisawesome";
//[n,o,d,e.....]
const result = u.split("").reverse().join()
console.log(result); // e,s,o,m,a,w,i,s,j,e,n,o,d

let query = { page: 1, limit: 10, sort: "asc" }
// result => "page=1&limit=10&sort=asc"

const result2 = Object.entries(query).map(([key, value])=>{
    return `${key}=${value}`;
}).join("&")
console.log(result2); // [ [ 'page', 1 ], [ 'limit', 10 ], [ 'sort', 'asc' ] ]

const arrQuery = ["page: 1", "limit: 10", "sort: asc"]
let uuu = ""
for (let i = 0; i < arrQuery.length; i++) {
    const [key, value] = arrQuery[i].split(": ");
    uuu += `${key}=${value}&`
}