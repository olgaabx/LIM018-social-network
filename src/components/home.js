import { saveTask } from '../firebase/config.js';

export function homePage() {
  const home = /* html */ `
    <div class="logo-container logo-container-register">
      <div class="logo-circle logo-circle-register">
        <img src="../imagens/logo.png" alt="logo" class="logo logo-img-register">
      </div>
    <p class="logo-title logo-title-register">TecHelp</p>
    </div>
    <form id="taskForm">
    <label for="title">Title:</label>
    <input
      type="text"
      id="task-title"
      class="form-control mb-3"
      class="My First Title"
      placeholder="Task Title"
      autofocus
    />

    <label for="description">Description:</label>
    <textarea
      id="task-description"
      rows="3"
      class="form-control mb-3"
      placeholder="Task Description"
    ></textarea>

    <button class="btn btn-primary" id="btn-task-form">Save</button>
  </form>

  <div class="col-md-6" id="tasks-container"></div>
 `;
  return home;
}

window.addEventListener('DOMContentLoaded', () => {

});

const taskForm = document.getElementById('taskForm');

/* taskForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = taskForm['task-title'];
  const description = taskForm['task-description'];

  saveTask(title.value, description.value);
}); */
