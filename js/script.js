import { } from "./utils.js";

const render = () => {

const todoSection = document.getElementById("todo");
const doingSection = document.getElementById("doing");
const doneSection = document.getElementById("done");

const form = document.getElementById("todo-form");
const taskInput = document.getElementById("taskInput");

function createCard(text) {
  const card = document.createElement("div");
  card.classList.add("card");

  const taskText = document.createElement("p");
  taskText.textContent = text;

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

  todoSection.insertBefore(card, todoSection.firstChild);
}

form.addEventListener("submit", function(event) {
  event.preventDefault();
  const inputText = taskInput.value;
  createCard(inputText);
  taskInput.value = "";
});

todoSection.addEventListener("click", function(event) {
  const target = event.target;
  const card = target.parentNode;

  if (target.classList.contains("left-button")) {
    const previousSection = card.parentNode.previousElementSibling;
    if (previousSection) {
      previousSection.appendChild(card);
    }
  } else if (target.classList.contains("right-button")) {
    const nextSection = card.parentNode.nextElementSibling;
    if (nextSection) {
      nextSection.appendChild(card);
    }
  } else if (target.classList.contains("delete-button")) {
    card.remove();
  }
});

doingSection.addEventListener("click", function(event) {
  const target = event.target;
  const card = target.parentNode;

  if (target.classList.contains("left-button")) {
    const previousSection = card.parentNode.previousElementSibling;
    if (previousSection) {
      previousSection.appendChild(card);
    }
  } else if (target.classList.contains("right-button")) {
    const nextSection = card.parentNode.nextElementSibling;
    if (nextSection) {
      nextSection.appendChild(card);
    }
  } else if (target.classList.contains("delete-button")) {
    card.remove();
  }
});

doneSection.addEventListener("click", function(event) {
  const target = event.target;
  const card = target.parentNode;

  if (target.classList.contains("left-button")) {
    const previousSection = card.parentNode.previousElementSibling;
    if (previousSection) {
      previousSection.appendChild(card);
    }
  } else if (target.classList.contains("right-button")) {
    const nextSection = card.parentNode.nextElementSibling;
    if (nextSection) {
      nextSection.appendChild(card);
    }
  } else if (target.classList.contains("delete-button")) {
    card.remove();
  }
});

}



window.onload = render;