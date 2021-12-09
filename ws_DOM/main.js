// step1: we check if the HTML is linked with JS
// console.log("test if it is linked");

//step2:
// call the variables
const btnPlus = document.querySelectorAll(".btn-plus");
// const btnPlus2 = document.getElementsByClassName("btn-plus");
const qte = document.querySelectorAll(".quantity");
const prices = document.querySelectorAll(".prx");
const btnMinus = document.querySelectorAll(".btn-moins");
const btnDelete = Array.from(document.getElementsByClassName("btn-delete"));
const product = Array.from(document.getElementsByClassName("product-div"));

// ---------------------------------------------------

// total function :
function totale() {
  const prices = document.querySelectorAll(".prx");
  const qte = document.querySelectorAll(".quantity");

  let somme = 0;
  for (let i = 0; i < prices.length; i++) {
    somme = somme + prices[i].innerHTML * qte[i].innerHTML;
  }
  document.getElementById("prix-total").innerHTML = somme;
}

// ---------------------------------------------------------
//events& functions
// increment
for (let i = 0; i <= btnPlus.length - 1; i++) {
  btnPlus[i].addEventListener("click", function () {
    qte[i].innerHTML++;
    totale();
  });
}

// decrement
for (let i = 0; i <= btnMinus.length - 1; i++) {
  btnMinus[i].addEventListener("click", function () {
    if (qte[i].innerHTML > 0) {
      qte[i].innerHTML--;
      totale();
    }
  });
}

// delete
for (let i = 0; i < btnDelete.length; i++) {
  btnDelete[i].addEventListener("click", function () {
    // alert("test");
    product[i].remove();
    totale();
  });
}
