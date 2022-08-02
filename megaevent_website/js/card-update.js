const secondPhase = document.getElementById("phase-two");

var priceOne = document.getElementById("price-one");
var priceTwo = document.getElementById("price-two");
var priceThree = document.getElementById("price-three");
var priceFour = document.getElementById("price-four");

secondPhase.addEventListener("click", () => {

  thirdPhase.classList.remove("yellow");
  secondPhase.classList.add("yellow");

  priceOne.innerHTML = "15.00KM";
  priceTwo.innerHTML = "20.00KM";
  priceThree.innerHTML = "50.00KM";
  priceFour.innerHTML = "60.00KM";
});

const thirdPhase = document.getElementById("phase-three");

thirdPhase.addEventListener("click", () => {

  secondPhase.classList.remove("yellow");
  thirdPhase.classList.add("yellow");

  priceOne.innerHTML = "20.00KM";
  priceTwo.innerHTML = "30.00KM";
  priceThree.innerHTML = "60.00KM";
  priceFour.innerHTML = "70.00KM";
});

