function solveExpression() {
  var vyraz = document.getElementById("vyraz").value;
  /*
  realizace
  */
  var zasobnik = [];
  for (i = 0; i < vyraz.lenegth; i++) {}
  document.getElementById("vysledek").innerHTML = "Vysledek je: " + vyraz;
}

var input = document.getElementById("vyraz");
//Spustí funkci, když uživatel zmáčkne Enter
input.addEventListener("keyup", function(event) {
  //Zruší výchozí funkci klávesy, pokud nějaká existuje
  event.preventDefault();
  //13 je hodnota lkávesy Enter
  if (event.keyCode == 13) {
    solveExpression();
  }
});
