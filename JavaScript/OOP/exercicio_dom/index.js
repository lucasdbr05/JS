import { Component } from "./Component.js";
import { Form } from "./Form.js";
import { Input } from "./Input.js";
import { Label } from "./Label.js";

const el = new Component("h2", "body", { textContent: "Olá, Mundo!" });
console.log(el);

el.tag = "h1";
el.build().render();

const form = new Form("body");

const label = new Label("Nome:", form, { htmlFor: "nameInput" });
const input = new Input(form, { id: "nameInput", name: "birthday" });

form.render();

label.render();
form.addChildren(input);

form.addChildren(
  new Component("br"),
  new Component("br"),
  new Label("Data de Nascimento:", { htmlFor: "birthdayInput" }),
  new Input(form, { id: "birthdayInput", name: "birthday", type: "date" })
);
