function createLabel(text, htmlFor) {
  const label = document.createElement("label");
  label.innerText = text;
  label.htmlFor = htmlFor;
  return label;
}

function createInput(id, value, name, type = "text", placeholder = "") {
  const input = document.createElement("input");
  input.id = id;
  input.value = value;
  input.name = name;
  input.type = type;
  input.placeholder = placeholder;
  return input;
}

const form = document.getElementById("devForm");
const addTech = document.getElementById("addTechBtn");
const developers = [];
let inputRows = 0;

addTech.addEventListener("click", function (ev) {
  const ul = document.getElementById("stackInputs");
  const newRow = document.createElement("li");
  const rowIndex = inputRows;
  inputRows++;
  newRow.id = "inputRow-" + rowIndex;
  newRow.className = "inputRow";

  const labelTech = createLabel("Nome: ", "techName-" + rowIndex);
  const inputTech = createInput("techName-" + rowIndex, null, "techName");

  const labelXP = createLabel("Experiencia: ");
  const xpRadio1 = createInput(
    "expRadio-" + rowIndex + ".1",
    "0-2 anos",
    "techExp-" + rowIndex,
    "radio"
  );
  const xpLabel1 = createLabel("0-2 anos", "expRadio-" + rowIndex + ".1");
  const xpRadio2 = createInput(
    "expRadio-" + rowIndex + ".2",
    "3-4 anos",
    "techExp-" + rowIndex,
    "radio"
  );
  const xpLabel2 = createLabel("3-4 anos", "expRadio-" + rowIndex + ".2");
  const xpRadio3 = createInput(
    "expRadio-" + rowIndex + ".3",
    "5+ anos",
    "techExp-" + rowIndex,
    "radio"
  );
  const xpLabel3 = createLabel("5+ anos", "expRadio-" + rowIndex + ".3");

  const removeRowBtn = document.createElement("button");
  removeRowBtn.innerText = "REMOVER";
  removeRowBtn.type = "button";
  removeRowBtn.addEventListener("click", function () {
    ul.removeChild(newRow);
  });

  newRow.append(
    labelTech,
    inputTech,
    labelXP,
    xpRadio1,
    xpLabel1,
    xpRadio2,
    xpLabel2,
    xpRadio3,
    xpLabel3,
    removeRowBtn
  );
  ul.appendChild(newRow);
});

form.addEventListener("submit", function (ev) {
  ev.preventDefault();

  const fullnameInput = document.getElementById("fullname");
  const inputRows = document.querySelectorAll(".inputRow");

  let technologies = [];
  inputRows.forEach(function (row) {
    const techName = document.querySelector(
      "#" + row.id + " input[name='techName']"
    ).value;
    const techExp = document.querySelector(
      "#" + row.id + " input[type='radio']:checked"
    ).value;
    technologies.push({ name: techName, xp: techExp });
  });

  const newDev = { fullname: fullnameInput.value, technologies: technologies };
  developers.push(newDev);
  alert("Dev cadasrado com sucesso!");

  fullnameInput.value = "";

  inputRows.forEach(function (row) {
    row.remove();
  });
  console.log(developers);
});
