// import { async } from 'regenerator-runtime';
import { savePost, OngetTask } from '../firebase/index.js';
// getTask
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

export const getPosts = async () => {
  const taskContainer = document.getElementById('tasks-container');
  // querySnapshot son los datos que existen en este momento y los trae de firestore
  OngetTask((querySnapshot) => {
  // const querySnapshot = await getTask();
  // Aqui llamo a querySnapshot y traigo solo los DOC con forEach,
  // los convierto en data de js con data()
    let html = '';
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      const dataPosts = doc.data();
      html += `
    <div>
      <h3>${dataPosts.title}</h3>
      <p>${dataPosts.description}</p>
    </div>
    `;
    });
    taskContainer.innerHTML = html;
  });
};

export const addHomePageEvents = () => {
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
};
