// #region Variables

// Getting values from the html page
const input1 = document.getElementById("input1");
const saveId = document.getElementById("saveId");
const addTodo = document.getElementById("addTodo");
const saveTodo = document.getElementById("saveTodo");
const output1 = document.getElementById("output1");

// Initialize some variables
let todolist = [];
let defaultPH = "Add Todo";
let newPH = "Edit Todo";
var alertOnce = localStorage.getItem("browser_alert_once") || "";
var readme = `
* To-Do List (JS App)

# Features:
1. CRUD Functionality
2. Keyboard/Click Events on Add/Update
3. Validation before removing item(s)
4. Using localStorage of browser for storing data
5. Check for duplicate values while adding/updating
6. Change placeholder of input textbox while adding/updating
`
// #endregion

// #region Run these in the beginning

// Alert only once per reload
if (alertOnce == "done") {
 localStorage.setItem("browser_alert_once", "");
 alert(readme);
} else {
 localStorage.setItem("browser_alert_once", "done");
 alert(readme);
}

// Reset the values after changes
browserTodo = parseTodoFromBrowser();
loadTodo(browserTodo);


// #endregion

// #region Common Functions

function parseTodoFromBrowser() {
 let my_todo = localStorage.getItem("browser_todo");
 if (my_todo === null) {
  todolist = [];
 } else {
  todolist = JSON.parse(my_todo);
 }
 return todolist;
}

function setBrowserTodo(todolist) {
 localStorage.setItem("browser_todo", JSON.stringify(todolist));
}

function loadTodo(todolist) {
 input1.value = null;
 input1.placeholder = defaultPH;
 setBrowserTodo(todolist);
 displayTodo();
}

function resetTodo() {
 var checkEdit = "Yoo, Please update/save changes in your edit first bro.";
 var chance = "Bro, Do you really want to remove everything, Chad?";

 if (addTodo.style.display == "none") {
  alert(checkEdit);

 } else {
  if (confirm(chance)) {
   let todolist = parseTodoFromBrowser();
   todolist.splice(0, todolist.length);
   loadTodo(todolist);
  }
 }
}

function isValidationAdd(text, todolist) {
 if (text == "") {
  alert("Please type something to add..");
  return false;
 } else {
  if (todolist.includes(text)) {
   alert("You've already added this item, Chad User.");
   return false;
  } else {
   return true;
  }
 }
}

function isValidationEdit(text, previousItem, todolist) {
 if (text == previousItem) {
  return true;
 } else {
  if (isValidationAdd(text, todolist)) {
   return true;
  } else {
   return false;
  }
 }
}

// #endregion

// #region Keyboard & Click events

// Keyboard event for Adding / Updating
input1.addEventListener("keyup", function (e) {
 e.preventDefault();
 if (e.keyCode === 13) {
  if (addTodo.style.display == "none") {
   updateTodo();
  } else if (saveTodo.style.display == "none") {
   insertTodo();
  } else {
   alert("Some strang error occured!")
  }
 }
});

// Click event for Adding / Updating
addTodo.addEventListener("click", (e) => {
 insertTodo();
});
saveTodo.addEventListener("click", () => {
 updateTodo();
});

// #endregion

// #region CRUD Operation

// (CRUD - Create) Add items in todolist 
function insertTodo() {
 let todolist = parseTodoFromBrowser();
 let text = input1.value;

 if (isValidationAdd(text, todolist)) {
  todolist.push(input1.value);
 }
 loadTodo(todolist);
}

// (CRUD - Read) Show all the items in the list 
function displayTodo() {
 let todolist = parseTodoFromBrowser();
 let insertHtml = "";
 todolist.forEach((item, index) => {
  insertHtml += `
   <li>
    <p>${item}</p>
    <button onclick="editTodo(${index})">Edit</button>
    <button onclick="deleteTodo(${index})">Delete</button>
   </li>
  `;
 });
 output1.innerHTML = insertHtml;
}

// (CRUD - Update) Edit items in the todolist
function editTodo(index) {
 saveTodo.value = index;
 let todolist = parseTodoFromBrowser();
 input1.value = todolist[index];
 addTodo.style.display = "none";
 saveTodo.style.display = "inline-block";
 input1.placeholder = newPH;
}

function updateTodo() {
 let todolist = parseTodoFromBrowser();
 let text = input1.value;
 let editId = saveTodo.value;
 let previousItem = todolist[editId];

 if (isValidationEdit(text, previousItem, todolist)) {
  todolist[editId] = text;
  addTodo.style.display = "inline-block";
  saveTodo.style.display = "none";
  loadTodo(todolist);
 }
}

// (CRUD - Delete) Remove items in the todolist
function deleteTodo(index) {
 var checkEdit = "Yoo, Please update/save changes in your edit first bro.";
 var chance = "Bro, Do you really want to delete this, Chad?";

 if (addTodo.style.display == "none") {
  alert(checkEdit);

 } else {
  if (confirm(chance)) {
   let todolist = parseTodoFromBrowser();
   todolist.splice(index, 1);
   loadTodo(todolist);
  }
 }
}

// #endregion