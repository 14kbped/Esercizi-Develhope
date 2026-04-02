// Crea la tua To-Do List mediante i metodi visti nel video.
// Crea una funzione che ti permetterà di:
// Creare una lista aggiungendo il task desiderato mediante il bottone Aggiungi.
// Creare un checkbox per ogni task aggiunto.

const input = document.querySelector ('input');
const ul = document.querySelector("ul");
function addProduct() {
  const valore = input.value;
  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  li.textContent = valore;
  li.prepend(checkbox);
  ul.appendChild(li);
  input.value = "";
}