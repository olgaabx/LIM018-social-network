import { currentUser, getUserById } from '../firebase/auth.js';
// import { doc } from '../firebase/config.js';
import {
  savePost,
  onGetPost,
  deletePost,
  signOut,
  auth,
  arrayRemove,
  arrayUnion,
  // postLikes,
} from '../firebase/index.js';
import {
  getPost, updatePost,
  // updatePost
} from '../firebase/post.js';
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
    </div>
    <div class="navbar-right">
      <ul class="containerlogocerrarsesion">
        <li class="navbar-shopping-cart">
          <img class="photoCerrarSesion" src="https://img1.freepng.es/20180326/xze/kisspng-computer-icons-user-profile-avatar-female-profile-5ab915f5e6da82.5608284515220792219456.jpg" alt="profile photo">
          <a href="" id="logOutS">Cerrar sesión</a>
        </li>
      </ul>
    </div>
  </nav>
  <!--Contenedor del home-->
  <div class="home-container">
    <!--Barra lateral de menú-->
    <div class="lateral-menu-container">
      <div class="logo-container-home">
        <img src="https://d9hhrg4mnvzow.cloudfront.net/admissions.prepscholar.com/7ade0971-artificial-intelligence_107g07g07a07a000000028.png" alt="logo" class="logo-home">
        <p class="logo-home-title">TecHelp</p>
      </div>

      <div class="profile-section" id="profile-box">
        
      </div>
      <div class="">
      </div>
    </div> <!-- Cierre lateral-menu-container -->

    <!--Contenedor de las publicaciones-->
    <div class="posts-container">
      <form id="task-form">
        <div class="section-posting">
          <!--<label for="description">Description:</label>-->
          <textarea id="task-description" rows="3" placeholder="¿Qué te gustaría compartirnos hoy?"></textarea>
          <div class="div-button-post">
            <button class="btn-task-save">Publicar</button>
          </div>
        </div>
      </form>

      <!-- Publicaciones --> <!-- -->
      <div class="post-user-container" id="post-container">
      </div>
      <div id="editModal">
      </div>
    </div> <!-- Cierre posts-container -->
  </div> <!--Cierra home-container-->

  <!--Footer para mobile-->
  <footer>
    <!-- <div class="tweet-bottom">
      <i class="fi fi-rs-edit"></i>
    </div> -->
    <div class="footer-container">
      <div class="footer-home-icon">
        <svg class="up" width="30" height="30" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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

// FUNCIÓN DE SCROLL PARA SUBIR AL INICIO DEL HOME
export const scrollHome = () => {
  const upButton = document.querySelector('.up');
  upButton.addEventListener('click', () => {
    window.scrollTo(0, 0);
  });
};

// BORRAR LOS POST
const functionDelete = () => {
  const taskContainer = document.getElementById('post-container');
  const buttonDelete = taskContainer.querySelectorAll('.trash');
  buttonDelete.forEach((btn) => {
    btn.addEventListener('click', (event) => {
      deletePost(event.target.dataset.id);
    });
  });
};

// FUNCION CERRAR MODAL PARA EDITAR POST
const closeModal = (divEditModal) => {
  const containerEditModal = document.getElementById('editModal');
  const buttonClose = divEditModal.querySelector('.close');
  buttonClose.addEventListener('click', () => {
    containerEditModal.style.display = 'none';
  });
};

// FUNCIÓN EDIT POST MODAL
const functionUpdatePost = (idPost, editModal) => {
  const buttonSave = editModal.querySelector('.save');
  buttonSave.addEventListener('click', () => {
    const description = editModal.querySelector('.postDescription').value;
    // console.log(description);
    const postDescription = {
      description,
    };
    // eslint-disable-next-line no-param-reassign
    updatePost(idPost, postDescription).then(() => { editModal.style.display = 'none'; });
  });
};

// FUNCIÓN DE LIKES POST
const functionLikesPost = (userId) => {
  const btnLike = document.querySelectorAll('.heart-icon');
  btnLike.forEach((btn) => {
    // console.log(btn);
    btn.addEventListener('click', (event) => {
      const idPost = event.target.dataset.id;
      // eslint-disable-next-line no-console
      // console.log(idPost);
      getPost(idPost).then((post) => {
        // console.log(post);
        const dataPost = post.data();
        let newLike;

        if (dataPost.likes.includes(userId)) {
          newLike = { likes: arrayRemove(userId) };
          // eslint-disable-next-line no-console
          // console.log(newLike);
          // btn.style.display = 'none';
        } else {
          // eslint-disable-next-line no-console
          // console.log(userId);
          newLike = { likes: arrayUnion(userId) };
          // btn.style.color = 'block';
        }

        updatePost(idPost, newLike);
      });
    });
  });
};

// EDITAR POST
const functionEditPost = () => {
  const taskContainer = document.getElementById('post-container');
  const buttonEdit = taskContainer.querySelectorAll('.bi-pencil-square');
  buttonEdit.forEach((btn) => {
    btn.addEventListener('click', (event) => {
      // Obteniendo el ID de Post
      const getPostId = event.target.dataset.id;

      getPost(getPostId).then((editDoc) => {
        const post = editDoc.data();
        const modalEvent = document.getElementById('editModal');
        modalEvent.style.display = 'flex';
        // trayendo el nombre del usuario
        getUserById(post.userId).then((user) => {
          /* html */
          modalEvent.innerHTML = `
          <div class="containerPostEdit">
              <div class="headerPostEdit">
                <label class="headerpost">Editar publicación</label>
                <span class="close">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                  </svg></span>

              </div>
              <!-- <div class="photoEdit">
                <img src="/" alt="profile photo">
                <a  class="tweet-text name">${user.data().name}</a>
              </div> -->
            <div class = "postEdition">
              <div class ="containerTextarea">
                <textarea type = "text" class="postDescription" cols="41" rows="5">${post.description}</textarea>
              </div>
              <div class="botonesEditar">
                <button class="save"><spanx>Guardar</span></button>
              </div>
            </div>
          </div>`;
          closeModal(modalEvent);
          functionUpdatePost(getPostId, modalEvent);
        });
      });
    });
  });
};

export const profileBox = async () => {
  const profileSection = document.getElementById('profile-box');
  // console.log(profileSection);
  onGetPost((querySnapshot) => {
    let html = '';
    querySnapshot.forEach((doc) => {
      const dataPost = doc.data();
      const current = currentUser();

      // console.log(dataPost);
      // console.log(current);

      getUserById(dataPost.userId).then((user) => {
        // console.log(user.data().id);
        // console.log(user.data());
        // console.log(current);
        // eslint-disable-next-line no-console
        // console.log(doc.id);
        /* html */
        html = `
        <div class="tweet-container">
          <div class="tweet-photo">
            <img src="./imagens/perfil-01.png" alt="profile photo">
            <div class="containerP">
              <a  class="tweet-text name">${user.data().name}</a
            </div>
          </div>`;
        // </div>`;
        profileSection.innerHTML = html;
      });
    });
  });
};
// console.log(profileBox);

export const getPosts = async () => {
  // const user = auth.currentUser();
  const taskContainer = document.getElementById('post-container');
  // querySnapshot son los datos que existen en este momento y los trae de firestore
  onGetPost((querySnapshot) => {
    let html = '';
    querySnapshot.forEach((doc) => {
      // console.log(doc.id);
      const dataPost = doc.data();
      const current = currentUser();
      // console.log(current.uid);
      // Con esto guardo guardamos el nombre del usurio que hiso la publicación
      getUserById(dataPost.userId).then((user) => {
        const likesQty = dataPost.likes ? dataPost.likes.length : 0;
        // console.log(user.data().id);
        // eslint-disable-next-line no-console
        // console.log(doc.id);
        /* html */
        html += `
        <div class="tweet-container">
          <div class="tweet-photo">
            <img src="./imagens/perfil-01.png" alt="profile photo">
            <div class="containerP">
              <a  class="tweet-text name">${user.data().name}</a
              <p class="tweet-date">${dataPost.datePost.toDate().toLocaleDateString()}</p>
            </div>
          </div>
          <div class="text">
            <p href="" class ="publication">${dataPost.description}</p>
          </div>
          <div class="tweet-icons">
            <img src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png" class="heart-icon" data-id="${doc.id}">
            <p class="contador">${likesQty}</p>
          </div>`;
        // </div>`;
        if (user.data().userId === current.uid) {
          html /* HTML */
          += `
            <div class="containerButton">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" data-id="${doc.id}" viewBox="0 0 16 16">
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3 trash" data-id="${doc.id}" viewBox="0 0 16 16">
                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
              </svg>
            </div>
            </div>`;
        } else {
          html += '</div>';
        }
        taskContainer.innerHTML = html;
        functionDelete();
        functionEditPost();
        functionLikesPost(current.uid);
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
    // console.log(currentUserId);
    savePost(
      description.value,
      currentUserId.uid /* currentUserId.displayname */,
      [],
    );
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
