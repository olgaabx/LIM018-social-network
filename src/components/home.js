import { savePost } from '../firebase/index.js';

export function homePage() {
  /* html */
  const viewHome = `
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

  const nodeHome = document.createElement('div');
  nodeHome.innerHTML = viewHome;

  return nodeHome;
  // const divElement = document.createElement('div');
  // // divElement.setAttribute('class', 'backgroundImage');
  // divElement.innerHTML = viewHome;
  // const blankPage = document.querySelector('#container');
  // blankPage.appendChild(divElement);
}

export function addHomePageEvents() {
  const taskForm = document.getElementById('task-form');

  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = taskForm["task-title"];
    const description = taskForm["task-description"];

    savePost(title.value, description.value);
  });
}
