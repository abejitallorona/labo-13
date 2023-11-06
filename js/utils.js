export class Task {
    constructor(text, state = "To Do") {
      this.text = text;
      this.state = state;
    }
  
    createCard() {
      const card = document.createElement("div");
      card.classList.add("card");
  
      const taskText = document.createElement("p");
      taskText.textContent = this.text;
  
      const leftButton = document.createElement("button");
      leftButton.textContent = "<";
      leftButton.classList.add("left-button");
  
      const rightButton = document.createElement("button");
      rightButton.textContent = ">";
      rightButton.classList.add("right-button");
  
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "X";
      deleteButton.classList.add("delete-button");
  
      card.appendChild(deleteButton);
      card.appendChild(taskText);
      card.appendChild(leftButton);
      card.appendChild(rightButton);
  
      return card;
    }
  }
  
  export function saveTask(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push({ text: task.text, state: task.state });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  
  export function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    return tasks.map((task) => new Task(task.text, task.state));
  }
  
  