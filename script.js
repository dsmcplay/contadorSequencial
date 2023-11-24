function contar() {
  // window.alert("chamou");
  let inicio = document.getElementById("txti");
  let fim = document.getElementById("txtf");
  let passo = document.getElementById("txtp");
  let res = document.getElementById("res");
  if (
    passo.value.length == 0 ||
    inicio.value.length == 0 ||
    fim.value.length == 0
  ) {
    // window.alert("esta faltando dados.")
    res.innerHTML = "impossivel contar";
  } else {
    res.innerHTML = "contando: <br>";
    let i = Number(inicio.value);
    let f = Number(fim.value);
    let p = Number(passo.value);
    if (p <= 0) {
      window.alert("passo invalido! considerando passo = 1");
      p = 1;
    }

    if (i < f) {
      //contagem crescente
      for (let c = i; c <= f; c += p) {
        res.innerHTML += `${c} \u{1f449} `;
      }
    } else {
      //contagem regresiva
      for (let c = i; c >= f; c -= p) {
        res.innerHTML += `${c} \u{1f449}`;
      }
    }
    res.innerHTML += ` \u{1f3c1}`;
  }
}
