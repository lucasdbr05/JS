function addInput() {
  const ul = document.getElementById("inputs");

  const new_li = document.createElement("li");
  new_li.className = "list-item";
  new_li.innerText = "Novo Input: ";

  const new_input = document.createElement("input");
  new_input.type = "text";
  new_input.name = "input";

  new_li.appendChild(new_input);
  ul.appendChild(new_li);
  ul.appendChild();
}
