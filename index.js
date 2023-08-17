const btnEl = document.getElementById("calculate"); //button
const billInput = document.getElementById("bill"); //input-1
const tipInput = document.getElementById("tip"); //input-2
const totalSpan = document.getElementById("total");

function calculateTotal() {
  // console.log("clicked");
  const billValue = billInput.value;
  // console.log("billValue====",billValue); //120
  const tipValue = tipInput.value;
  // console.log("tipValue=====",tipValue); //10
  const totalValue = billValue * (1 + tipValue / 100);
  // console.log("totalValue====",totalValue); //132
  totalSpan.innerText = totalValue.toFixed(2);
}

btnEl.addEventListener("click", calculateTotal);




// #1
// Formula of Percentage:====>>>>>
//  const totalValue = billValue * (1 + tipValue / 100);

// #2
// 10.00000 but we need only 10.00 so we use toFixed();
// toFixed(2);