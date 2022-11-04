function moeda(atual){
  return atual.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}
function total() {
  let c = document.getElementById("capital").value;
  let j = document.getElementById("juros").value;
  let t = document.getElementById("meses").value;
  if (Number(c)) {
    alert("o valor do capital deve ser um número.")
    document.getElementById("capital").value =
      document.getElementById("capital").focus();
    return

  }
  if (Number(j)) {
    alert("o valor dos juros deve ser um número.")
    document.getElementById("juros").value =
      document.getElementById("juros").focus();
    return

  }
  if (Number(t)) {
    alert("a quantidade de meses deve ser um número.")
    document.getElementById("meses").value = "";
      document.getElementById("meses").focus();
    return

  }
  let m = 0;
  let texto = "";
  for (let i = 1; i <= t; i++) {
    m = c * (1 + (j / 100));
    texto += 1 + ": " + moeda(m) + "<br>";
    //document.write("Valor do mês " + i + " valor: " + m + "<br>");
    c = m;
  }
  document.getElementById("listames").innerHTML = texto;
  document.getElementById("total").innerHTML = moeda(m);
  //document.write("Montante: " + m);
}
