import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { FirstApp } from "./FirstApp";
import { GifExpertApp } from './childcat'; 
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <GifExpertApp/>
      <FirstApp/>
    </React.StrictMode>
)



//const myString = `
  //hello
  //world



//console.log(myString)
// const myCar = {
//   make: "Ford",
//   model: "mustang",
//   year : 1969,
//   city:{
//     name: "colombia",
//     latting:{
//       lat: 123,
//       lng: 456
//     }

//   }

// }
// console.log(myCar)
// const myArray = [1,2,3,4];
// myArray.push(5)
// const mySecondArray = myArray;
// mySecondArray.push(6)
// console.log(myArray, mySecondArray)
//  const myArray = [1,2,3]
//  const myArray2= [4,5,6]

//  const areEvery = myArray.every(x => x < 4)
//  console.log(areEvery) bucle
// const last = myArray.findLast(x => x<2)
// console.log(last) buscar el ultimo


// const[a,b] = [10 ,20]
// const{name: university, city} = {name: "Autonoma", city: "Cali"}
// console.log(a)
// console.log(university )

//funciones:
// function oldRegularFunction(a,b){
//   return a+b
// }
// const newRegularFunction = function(a,b){
//   return a+b
// }
// const arrowFunction = (a,b) =>{
//   return a+b
// }
// console.log(oldRegularFunction(2,3))
// console.log(newRegularFunction(2,3))
// console.log(arrowFunction(2,3))
const callPromise= new Promise ((resolve,reject)=>{
  setTimeout(()=>{
    const returnVar = "hola mundo";
    resolve( returnVar);
    reject(returnVar);

  },2000)
})
callPromise.then(successData =>{
  console.log(successData)
}).catch(error => {
  console.log(error)
}).finally(some =>{
  //todo
})