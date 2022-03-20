// 程式碼寫這裡
const addBtn = document.querySelector("#addBtn");
const taskInput = document.querySelector("#taskInput");

addBtn.addEventListener("click", function () {
  const todoitem = document.createElement("li");
  todoitem.classList.add("todo-item");
  const item = document.createElement("span");
  item.classList.add("item");
  const closeBtn = document.createElement("button");
  closeBtn.classList.add("closeBtn");
  closeBtn.textContent = "X";

  const todolist = document.querySelector(".todo-list");
  todolist.appendChild(todoitem);
  todoitem.appendChild(item);
  todoitem.appendChild(closeBtn);

  item.textContent = taskInput.value;

  todolist.insertAdjacentElement("afterbegin", todoitem);

  closeBtn.addEventListener("click", function () {
    todoitem.remove();
  });
});
