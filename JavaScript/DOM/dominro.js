function show() {
  const contact_list = document.getElementById("contact-list");
  console.log(contact_list);

  const li_elements = document.getElementsByTagName("li");
  console.log(li_elements);

  const contact_inputs = document.getElementsByClassName("contact-input");
  console.log(contact_inputs);

  const contacts = document.querySelectorAll("#contact-list > li > label");
  console.log(contacts);

  const contact1 = document.getElementsByName("contact1");
  console.log(contact1);
}
