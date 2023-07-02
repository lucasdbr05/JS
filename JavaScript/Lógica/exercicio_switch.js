let valor = prompt("Digite um valor em metros: ");
valor = parseFloat(valor);
let conversor = prompt(
  "Escolha uma unidade de medida para converter:\n[km,hm,dam,dm,cm,mm]"
);

switch (conversor) {
  case "km":
    valor /= 1000;
    alert(valor + " km");
    break;
  case "hm":
    valor /= 100;
    alert(valor + " hm");
    break;
  case "dam":
    valor /= 10;
    alert(valor + " dam");
    break;
  case "dm":
    valor *= 10;
    alert(valor + " dm");
    12;
    break;
  case "cm":
    valor *= 100;
    alert(valor + " cm");
    break;
  case "mm":
    valor *= 1000;
    alert(valor + "mm");
    break;
  default:
    alert("Opção Inválida");
}
