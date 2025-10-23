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

// add your code here
const ul = document.createElement("ul");
document.body.appendChild(ul);

for (const item of todoList) {
  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = `todo-${item.id}`;
  checkbox.checked = item.completed;
  const label = document.createElement("label");
  label.htmlFor = `todo-${item.id}`;
  label.textContent = item.task;
  li.appendChild(checkbox);
  li.appendChild(label);
  ul.appendChild(li);
}
