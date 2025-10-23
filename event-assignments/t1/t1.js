// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];
const ul = document.getElementsByTagName("ul")[0];
document.body.appendChild(ul);
for (const item of todoList) {
  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  const deleteButton = document.createElement("button");

  checkbox.type = "checkbox";
  checkbox.id = `todo-${item.id}`;
  checkbox.checked = item.completed;
  checkbox.addEventListener("change", e => {
      console.log(todoList);
      item.completed = !item.completed;
  })
  deleteButton.addEventListener("click", e => {
      ul.removeChild(li);
      const index = todoList.indexOf(item);

      if (index > -1) {
        todoList.splice(index, 1);
      }
      console.log(todoList)

  })
  const label = document.createElement("label");
  label.htmlFor = `todo-${item.id}`;
  label.textContent = item.task;
  li.appendChild(checkbox);
  li.appendChild(label);
  li.appendChild(deleteButton);
  ul.appendChild(li);
}
function addTodo(){
    const dialog = document.querySelector("dialog");
    dialog.showModal();
}

const form = document.querySelector("dialog form");
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const input = form.querySelector("input");
    const value = input.value.trim();
    if (!value) return;

    let item = {
          id: todoList.length+1,
          task: value,
          completed: false,
    }

    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    const deleteButton = document.createElement("button");
    checkbox.type = "checkbox";
    checkbox.id = `todo-${item.id}`;
    checkbox.checked = item.completed;
    checkbox.addEventListener("change", e => {
        console.log(todoList)
        item.completed = !item.completed;
    })
    deleteButton.addEventListener("click", e => {
        ul.removeChild(li);
        const index = todoList.indexOf(item);
        if (index > -1) {
          todoList.splice(index, 1);
        }
        console.log(todoList)

    })
    const label = document.createElement("label");
    label.htmlFor = `todo-${item.id}`;
    label.textContent = item.task;
    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(deleteButton);

    ul.appendChild(li);

    todoList.push(item);

    input.value = "";
    form.closest("dialog").close();
    console.log(todoList);
});

