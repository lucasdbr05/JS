let velocidade = prompt("Digite a velocidade:");

while (velocidade > 0) {
  alert("O carro está a " + velocidade + " km/h.");
  velocidade -= 20;
  alert("Reduzindo 20km/h");
  if (velocidade <= 0) {
    alert("O carro parou.");
  }
}
