function gerarPalpite() {
  document.getElementById("message").innerHTML = " ";
  const quantidade = 6,
    minimo = 1,
    maximo = 60;
  const todos = [];
  for (let i = minimo; i <= maximo; i++) {
    // gera um array com todos os números
    todos.push(i);
  }
  // embaralha as 6 primeiras posições
  for (let i = 0; i < quantidade; i++) {
    // pega uma posição aleatória do array e troca com a posição atual
    const j = Math.floor(Math.random() * todos.length);
    const tmp = todos[j];
    todos[j] = todos[i];
    todos[i] = tmp;
  }
  // pega os 6 primeiros elementos
  const result = todos.slice(0, quantidade);
  resultadoFinal = result.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });

  //criando li para cada elemento do array
  let ul = document.createElement("ul");
  for (let i = 0; i < resultadoFinal.length; i++) {
    let li = document.createElement("li");
    li.textContent = resultadoFinal[i];
    ul.appendChild(li);
  }
  document.getElementById("message").appendChild(ul);
}
