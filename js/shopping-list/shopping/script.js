const shoppingList = document.querySelector(".shopping-list");
const shoppingForm = document.querySelector(".shopping-form");
const filterButtons = document.querySelectorAll(".filter-buttons button");
const clearBtn = document.querySelector(".clear");

document.addEventListener("DOMContentLoaded", function () {
  loadItems();
  upadteState();
  shoppingForm.addEventListener("submit", handleFormSubmit);

  for (let button of filterButtons) {
    button.addEventListener("click", handleFilterSelection);
  }

  clearBtn.addEventListener("click", clear);
});

function clear() {
  shoppingList.innerHTML = "";
  localStorage.clear("shoppingItems");
  upadteState();
}

function upadteState() {
  const isEmpty = shoppingList.querySelectorAll("li").length == 0;
  const alert = document.querySelector(".alert");
  const filterBtn = document.querySelector(".filter-buttons");

  alert.classList.toggle("d-none", !isEmpty);
  clearBtn.classList.toggle("d-none", isEmpty);
  filterBtn.classList.toggle("d-none", isEmpty);
}

function saveToLs() {
  const listItems = shoppingList.querySelectorAll("li");
  const liste = [];

  for (let li of listItems) {
    const id = li.getAttribute("item-id");
    const name = li.querySelector(".item-name").textContent;
    const completed = li.hasAttribute("item-completed");

    liste.push({ id, name, completed });
  }

  localStorage.setItem("shoppingItems", JSON.stringify(liste));
}

function loadItems() {
  const items = JSON.parse(localStorage.getItem("shoppingItems")) || [];
  shoppingList.innerHTML = "";

  for (let item of items) {
    const li = createListItem(item);
    shoppingList.appendChild(li);
  }
}

function addItem(input) {
  const id = generateId();
  const newItem = createListItem({
    id: id,
    name: input.value,
    completed: false,
  });
  shoppingList.prepend(newItem);

  input.value = "";
  updateFilteredItems();
  saveToLs();
  upadteState();
}
function generateId() {
  return Date.now().toString();
}

function handleFormSubmit(e) {
  e.preventDefault();

  const input = document.getElementById("item_name");

  if (input.value.trim().length === 0) {
    alert("Yeni Değer Giriniz.");
    return;
  }
  addItem(input);
}

function toggleCompleted(e) {
  const li = e.target.parentElement;
  li.toggleAttribute("item-completed", e.target.checked);
  updateFilteredItems();
  saveToLs();
}

function createListItem(item) {
  // checkbox
  const input = document.createElement("input");
  input.type = "checkbox";
  input.classList.add("form-check-input");
  input.checked = item.completed;
  input.addEventListener("change", toggleCompleted);

  // item
  const div = document.createElement("div");
  div.textContent = item.name;
  div.classList.add("item-name");
  div.addEventListener("click", openEditMode);
  div.addEventListener("blur", closEditMode);
  div.addEventListener("keydown", cancelEnter);

  // delete icon
  const deleteIcon = document.createElement("span");
  deleteIcon.className = "fs-3 bi bi-x text-danger delete-icon";
  deleteIcon.addEventListener("click", removeItem);

  // li
  const li = document.createElement("li");
  li.setAttribute("item-id", item.id);
  li.className = "border rounded p-2 mb-1";
  li.toggleAttribute("item-completed", item.completed);

  li.appendChild(input);
  li.appendChild(div);
  li.appendChild(deleteIcon);

  return li;
}

function removeItem(e) {
  const li = e.target.parentElement;
  shoppingList.removeChild(li);
  saveToLs();
  upadteState();
}

function openEditMode(e) {
  const li = e.target.parentElement;
  if (li.hasAttribute("item-completed") == false) {
    e.target.contentEditable = true;
  }
}
function closEditMode(e) {
  e.target.contentEditable = false;
  saveToLs();
}
function cancelEnter(e) {
  if (e.key == "Enter") {
    e.preventDefault();
    closEditMode(e);
  }
}

function handleFilterSelection(e) {
  const filterBtn = e.target;

  for (let button of filterButtons) {
    button.classList.add("btn-secondary");
    button.classList.remove("btn-primary");
  }

  filterBtn.classList.add("btn-primary");
  filterBtn.classList.remove("btn-secondary");

  filterBtn.getAttribute("item-filter");
  filterItems(filterBtn.getAttribute("item-filter"));
}

function filterItems(filterType) {
  const li_items = shoppingList.querySelectorAll("li");
  for (let li of li_items) {
    li.classList.remove("d-flex");
    li.classList.remove("d-none");

    const completed = li.hasAttribute("item-completed");

    if (filterType == "completed") {
      li.classList.toggle(completed ? "d-flex" : "d-none");
    } else if (filterType == "incompleted") {
      li.classList.toggle(completed ? "d-none" : "d-flex");
    } else if (filterType == "all") {
      li.classList.toggle("d-flex");
    }
  }
}

function updateFilteredItems() {
  const activeFilter = document.querySelector(".btn-primary[item-filter]");

  filterItems(activeFilter.getAttribute("item-filter"));
}
