const btnEl = document.getElementById("calculate");
const billIput = document.getElementById("bill");
const tipsIput = document.getElementById("tip");
const totalSpan = document.getElementById("total");

function calculateTotal(){
    const billValue = billIput.value;
    const tipValue = tipsIput.value;
    const totalValue = billValue * (1+ tipValue/100);
    totalSpan.innerText = "$" + totalValue.toFixed(2);
}

btnEl.addEventListener("click", calculateTotal);

