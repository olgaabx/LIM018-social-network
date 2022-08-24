// import { async } from 'regenerator-runtime';
import { currentUser, getUserById } from '../firebase/auth.js';
import {
  savePost,
  onGetPost,
  deletePost,
  signOut,
  auth,
} from '../firebase/index.js';
import { postLikes } from '../firebase/post.js';
import {
  query, orderBy, dataBase, collection,
} from '../firebase/config.js';
// getTask

export function homePage() {
  /* html */
  const viewHome = `
    <nav>
    <div class="navbar-left">
      <div class="logo-container-home">
        <img src="https://d9hhrg4mnvzow.cloudfront.net/admissions.prepscholar.com/7ade0971-artificial-intelligence_107g07g07a07a000000028.png" alt="logo" class="logo-home">
        <p class="logo-home-title">TecHelp</p>
      </div>
            <ul>
                <!--<li>
                    <a href="" id="logOutS">Cerrar sesión</a>
                </li>
                <li>
                    <a href=""></a>
                </li>
                <li>
                    <a href=""></a>
                </li>
                <li>
                    <a href=""></a>
                </li>
                <li>
                    <a href=""></a>
                </li>
                <li>
                    <a href=""></a>
                </li>
            </ul> -->
    </div>
    <div class="navbar-right">
      <ul>
        <li class="navbar-shopping-cart">
          <img src="./" alt="profile photo">
          <a href="" id="logOutS">Cerrar sesión</a>
        </li>
      </ul>
    </div>
  </nav>
    <form id="task-form">

      <label for="description">Description:</label>
      <textarea id="task-description" rows="3" placeholder="Task Description"></textarea>

      <button class="btn-task-save">Publicar</button>
    </form>
    <!-- Tasks List -->
    <div class="post-user-container" id="post-container"></div>

    <footer>
    <!-- <div class="tweet-bottom">
      <i class="fi fi-rs-edit"></i>
    </div> -->
    <div class="footer-container">
      <div class="footer-home-icon">
        <svg width="30" height="30" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M21 8.77217L14.0208 1.79299C12.8492 0.621414 10.9497 0.621413 9.77817 1.79299L3 8.57116V23.0858H10V17.0858C10 15.9812 10.8954 15.0858 12 15.0858C13.1046 15.0858 14 15.9812 14 17.0858V23.0858H21V8.77217ZM11.1924 3.2072L5 9.39959V21.0858H8V17.0858C8 14.8767 9.79086 13.0858 12 13.0858C14.2091 13.0858 16 14.8767 16 17.0858V21.0858H19V9.6006L12.6066 3.2072C12.2161 2.81668 11.5829 2.81668 11.1924 3.2072Z" fill="currentColor"/>
        </svg>
      </div>
      <div class="footer-search-icon">
        <svg width="30" height="30" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.319 14.4326C20.7628 11.2941 20.542 6.75347 17.6569 3.86829C14.5327 0.744098 9.46734 0.744098 6.34315 3.86829C3.21895 6.99249 3.21895 12.0578 6.34315 15.182C9.22833 18.0672 13.769 18.2879 16.9075 15.8442C16.921 15.8595 16.9351 15.8745 16.9497 15.8891L21.1924 20.1317C21.5829 20.5223 22.2161 20.5223 22.6066 20.1317C22.9971 19.7412 22.9971 19.1081 22.6066 18.7175L18.364 14.4749C18.3493 14.4603 18.3343 14.4462 18.319 14.4326ZM16.2426 5.28251C18.5858 7.62565 18.5858 11.4246 16.2426 13.7678C13.8995 16.1109 10.1005 16.1109 7.75736 13.7678C5.41421 11.4246 5.41421 7.62565 7.75736 5.28251C10.1005 2.93936 13.8995 2.93936 16.2426 5.28251Z" fill="currentColor"/>
        </svg>
      </div>
      <div class="footer-group-icon">
        <svg width="30" height="30" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M17 5H7C6.44772 5 6 5.44772 6 6V18C6 18.5523 6.44772 19 7 19H17C17.5523 19 18 18.5523 18 18V6C18 5.44772 17.5523 5 17 5ZM7 3C5.34315 3 4 4.34315 4 6V18C4 19.6569 5.34315 21 7 21H17C18.6569 21 20 19.6569 20 18V6C20 4.34315 18.6569 3 17 3H7Z" fill="currentColor"/>
        <path d="M8 7H16V9H8V7Z" fill="currentColor"/>
        </svg>
      </div>
    </div>
  </footer>`;

  const nodeHome = document.createElement('div');
  nodeHome.innerHTML = viewHome;
  return nodeHome;
}

export const getPosts = async () => {
  const taskContainer = document.getElementById('post-container');
  // querySnapshot son los datos que existen en este momento y los trae de firestore
  // const q = query(collection(dataBase, 'posts'), orderBy('datePost', 'desc'));
  onGetPost((querySnapshot) => {
    let html = '';
    querySnapshot.forEach((doc) => {
      // console.log(doc.id);
      const dataPost = doc.data();
      // console.log(dataPosts);
      getUserById(dataPost.userId).then((user) => {
        console.log(user);
        // const user = snap.docs[0].data();
        /* html */
        html += `
        <div class="tweet-container">
          <div class="tweet-photo">
            <img src="/" alt="profile photo">
            <a href="/" class="tweet-text name">${user.data().name}</a>
            <p class="tweet-date"></p>
          </div>
          <div class="text">
            <p>${dataPost.description}</p>
          </div>
          <div class="tweet-icons">
            <span><i class="fi fi-rs-heart buton">
            </i></span>
            <span><i class="fi fi-rs-pencil buton"></i></span>
            <span><i class="fi fi-rs-trash buton" data-id="${doc.id}"></i></span>
          </div>
        </div>
        `;
        taskContainer.innerHTML = html;

        const buttonDelete = taskContainer.querySelectorAll('.fi-rs-trash');
        buttonDelete.forEach((btn) => {
          // console.log(btn);
          btn.addEventListener('click', (event) => {
            deletePost(event.target.dataset.id);
            // console.log(event.target.dataset.id);
          });
        });

        const buttonLike = taskContainer.querySelectorAll('.fi-rs-heart');
        buttonLike.forEach((btn) => {
          btn.addEventListener('click', (event) => {
            postLikes(event.target.dataset.id);
          });
        });
      });
    });
  });
};

// Función para publicar Posts
export const addHomePageEvents = () => {
  const taskForm = document.getElementById('task-form');
  taskForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const description = taskForm['task-description'];
    const currentUserId = currentUser();
    // eslint-disable-next-line no-console
    console.log(currentUserId);
    savePost(description.value, currentUserId.uid, currentUserId.displayname);
    taskForm.reset();
  });
};

// Función para cerrar sesión
export function logOut() {
  const logOutBtn = document.getElementById('logOutS');
  logOutBtn.addEventListener('click', () => {
    signOut(auth)
      .then(() => {
        sessionStorage.clear();
        window.location.hash = '#/inicio';
        // return console.log('se cerró sesión exitosamente');
        // Sign-out successful.
      })
      .catch((error) => error);
  });
}
