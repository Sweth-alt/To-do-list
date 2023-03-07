const todoList = document.getElementById("todo-list");
const todoInput = document.getElementById("todo-input");
const addButton = document.getElementById("add-button");

addButton.addEventListener("click", (event) => {
	event.preventDefault();
	addTodo();
});

todoInput.addEventListener("keydown", (event) => {
	if (event.keyCode === 13) {
		event.preventDefault();
		addTodo();
	}
});

function addTodo() {
	const todoText = todoInput.value.trim();
	if (todoText !== "") {
		const todoItem = document.createElement("li");
		const todoTextSpan = document.createElement("span");
		const deleteButton = document.createElement("button");

		todoTextSpan.textContent = todoText;
		deleteButton.textContent = "Delete";

		deleteButton.addEventListener("click", () => {
			todoList.removeChild(todoItem);
		});

		todoItem.appendChild(todoTextSpan);
		todoItem.appendChild(deleteButton);

		todoList.appendChild(todoItem);

		todoInput.value = "";
		todoInput.focus();
	}
}
