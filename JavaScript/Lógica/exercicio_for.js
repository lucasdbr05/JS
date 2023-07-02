let num = prompt("Digite um numero a ser calculado:");
num = parseFloat(num);
let resultado = "Os resultados são:\n ";

for (let i = 1; i <= 20; i++) {
  resultado += num + "*" + i + "=" + num * i + "\n";
}
alert(resultado);
