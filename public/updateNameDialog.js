// Generate dialog dynamically to edit a name
// Type should be a string of directory or file
export const updateNameDialog = (type, id, name) => {
  const dialog = document.createElement("dialog");
  dialog.classList.add("changeNameDialog");
  const form = document.createElement("form");
  form.method = "POST";
  form.action = `/${type}/${id}/update`;
  const label = document.createElement("label");
  label.htmlFor = "changeName";
  label.textContent = "Name: ";
  const input = document.createElement("input");
  input.type = "text";
  input.name = "name";
  input.id = "changeName";
  input.value = name;
  const button = document.createElement("button");
  button.type = "submit";
  button.textContent = "Change";
  form.append(label, input, button);
  dialog.append(form);
  document.body.appendChild(dialog);
  return dialog;
};
