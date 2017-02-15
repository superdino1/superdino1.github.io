function Calcola() {
  var prezzo = document.forms["main"]["prezzo"].value;
  var r1 = document.getElementById("r1").checked;
  var r2 = document.getElementById("r2").checked;
  var r3 = document.getElementById("r3").checked;
  if (r1 == true) {
    var q = 4;
  } else if (r2 == true) {
    var q = 10;
  } else {
    var q = 22;
  }
  var iva = document.forms["main"]["iva"].value;

  iva = iva / 100;
  var prezzoTot = prezzo * q;
  var prezzoIva = prezzoTot + (prezzoTot * iva);
  document.forms["main"]["prezzoTot"].value = prezzoTot;
  document.forms["main"]["prezzoTotIva"].value = prezzoIva;
}

function Reset() {
  document.forms["main"]["prezzo"].value = "";
  document.forms["main"]["iva"].value = "";
  document.forms["main"]["prezzoTot"].value = "";
  document.forms["main"]["prezzoTotIva"].value = "";
}
