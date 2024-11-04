const fs=require('fs')
// const book={
//     title:'hello',
//     author:'anika'
// }
// const bookJSON =JSON.stringify(book)
// fs.writeFileSync('1-json.json',bookJSON)
// const databuffer=fs.readFileSync('1-json.json')
// const dataJSON=databuffer.toString()
// const data=JSON.parse(dataJSON)
// console.log(data.title)

const databuffer=fs.readFileSync('1-json.json')
const dataJSON=databuffer.toString()
const data=JSON.parse(dataJSON)
data.name="annika"
data.age="19"

const userJSON=JSON.stringify(data)
fs.writeFileSync('1-JSON.json',userJSON)