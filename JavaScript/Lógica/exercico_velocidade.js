let veiculo1 = window.prompt("NOME DO PRIMEIRO VEÍCULO: ");
let velocidade1 = window.prompt("VELOCIDADE DO PRIMEIRO VEÍCULO(em km/h): ");
let veiculo2 = window.prompt("NOME DO SEGUNDO VEÍCULO: ");
let velocidade2 = window.prompt("VELOCIDADE DO SEGUNDO VEÍCULO(em km/h): ");

velocidade1 = parseFloat(velocidade1);
velocidade2 = parseFloat(velocidade2);

if (velocidade1 > velocidade2) {
  window.alert(veiculo1 + " é mais rápido que " + veiculo2);
} else if (velocidade1 < velocidade2) {
  window.alert(veiculo1 + " é mais rápido que " + veiculo2);
} else {
  window.alert(veiculo1 + " e " + veiculo2 + " possuem a mesma velocidade");
}
