
import { Task, saveTask, loadTasks } from './utils.js';

const render = () => {


    const todoSection = document.getElementById("todo");
    const doingSection = document.getElementById("doing");
    const doneSection = document.getElementById("done");
    const form = document.getElementById("todo-form");
    const taskInput = document.getElementById("taskInput");
    
    function createCard(task) {
      const card = task.createCard();
    
      card.querySelector(".left-button").addEventListener("click", function() {
        const previousSection = card.parentNode.previousElementSibling;
        if (previousSection) {
          previousSection.appendChild(card);
          task.state = previousSection.id;
          saveTasksToLocalStorage();
        }
      });
    
      card.querySelector(".right-button").addEventListener("click", function() {
        const nextSection = card.parentNode.nextElementSibling;
        if (nextSection) {
          nextSection.insertBefore(card, nextSection.firstChild);
          task.state = nextSection.id;
          saveTasksToLocalStorage();
        }
      });
    
      card.querySelector(".delete-button").addEventListener("click", function() {
        card.remove();
        tasks = tasks.filter((t) => t !== task);
        saveTasksToLocalStorage();
      });
    
      return card;
    }
    
    function saveTasksToLocalStorage() {
      const tasks = Array.from(todoSection.children)
        .concat(Array.from(doingSection.children))
        .concat(Array.from(doneSection.children))
        .map((card) => {
          const text = card.querySelector("p").textContent;
          const state = card.parentNode.id;
          return new Task(text, state);
        });
    
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
    
    const tasks = loadTasks();
    
    tasks.forEach((task) => {
      let section;
      if (task.state === "To Do") {
        section = todoSection;
      } else if (task.state === "Doing") {
        section = doingSection;
      } else if (task.state === "Done") {
        section = doneSection;
      }
    
      const card = createCard(task);
      section.insertBefore(card, section.firstChild);
    });
    
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      const inputText = taskInput.value;
      const task = new Task(inputText);
      const card = createCard(task);
      todoSection.insertBefore(card, todoSection.firstChild);
      saveTask(task);
      taskInput.value = "";
    });

    

}



window.onload = render;