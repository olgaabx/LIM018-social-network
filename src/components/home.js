import { saveTask } from "../firebase/config.js";

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
      </div>
</div>`;

  return viewMuro;
}

window.addEventListener('DOMContentLoaded', () => {
 console.log('works');
});

// const taskForm = document.getElementById('task-form');

// taskForm.addEventListener('submit', (e) => {
//   e.preventDefault();

//   const title = taskForm['task-title'];
//   const description = taskForm['task-description'];

//   console.log(title.value, description.value);
// });

// const prueba = saveTask();
