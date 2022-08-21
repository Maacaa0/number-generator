let btn = document.querySelector("button");
let inputBox = document.querySelector(".textInput");



//btn.addEventListener("click", randomize(minInput, maxInput));

btn.addEventListener("click", () => { 
  let minInput = parseInt(document.getElementById("min").value);
  let maxInput = parseInt(document.getElementById("max").value);
  randomize(minInput, maxInput)});

function randomize(minNum, maxNum) {
  

   if (minNum > maxNum) {
    return alert("MIN number has to be lower than MAX number")
   } else {
        inputBox.textContent = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
  }  
}