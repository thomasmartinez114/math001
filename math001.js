/*
The html file will ask the user for two numbers.
Your program will multiply the two numbers and output the result to the webpage. (edited)
*/

calculate = () => {
  event.preventDefault()
  //   console.log("Calculating")
  multiply()
}

multiply = () => {
  let num01 = document.getElementById("number01").value
  let num02 = document.getElementById("number02").value
  let sum = num01 * num02
  document.getElementById("sumMult").innerHTML = `${num01} x ${num02} = ${sum}`
}
