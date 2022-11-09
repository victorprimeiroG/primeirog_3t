afunction moeda(atual) {
    return atual.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
}

function total() {
    let c = document.getElementById("valor").value;
    let j = document.getElementById("juros").value;
    let t = document.getElementById("meses").value;
    let r = c;
    if (!Number(c)) {
        alert("O capital deve ser numeros.");
        document.getElementById("valor").value = "";
        document.getElementById("valor").focus();
        return;
    }
    if (!Number(j)) {
        alert("O juros deve ser numeros.");
        document.getElementById("juros").value = "";
        document.getElementById("juros").focus();
        return;
    }
    if (!Number(t)) {
        alert("O meses deve ser numeros.");
        document.getElementById("meses").value = "";
        document.getElementById("meses").focus();
        return;
    }
    let mes = "";
    for (let i = 1; i <= t; i++) {
        r = c * (1 + (j / 100));
        mes += i + ": " + moeda(r) + "<br>";
        //  document.write("Mês " + i + " valor: " + moeda(r) +"<br>");
        c = r;
    }
    document.getElementById("mes").innerHTML = mes;
    document.getElementById("total").innerHTML = "Total: " + moeda(r);
    // document.write("Resultado: " + moeda(r));


}
