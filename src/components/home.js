// import { async } from 'regenerator-runtime';
import { savePost } from '../firebase/index.js';

export function homePage() {
  const viewMuro = /* html */ `
    <form id="task-form">
      <label for="title">Title:</label>
      <input type="text" id="task-title" placeholder="Task Title" id="task-title">
        

      <label for="description">Description:</label>
      <textarea id="task-description" rows="3" placeholder="Task Description"></textarea>

      <button class="btn-task-save">Save</button>
    </form>
          
    <!-- Tasks List -->
    <div class="col-md-6" id="tasks-container"></div>
`;

  return viewMuro;
}

export function addHomePageEvents() {
  // window.addEventListener('DOMContentLoaded', async () => {
  //   // querySnapshot son los datos que existen en este momento
  //   const querySnapshot = await getTask();
  //   console.log(querySnapshot);
  // });
  // const querySnapshot =  getTask();
  // querySnapshot.forEach((doc) => {
  //   console.log(doc);
  // });

  const taskForm = document.getElementById('task-form');
  taskForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = taskForm['task-title'];
    const description = taskForm['task-description'];

    savePost(title.value, description.value);
    taskForm.reset();
  });
}
