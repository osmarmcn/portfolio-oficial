import { projects } from "./db.js"


const list = document.querySelectorAll('.list')


function activeLink(){
    list.forEach((item) => item.classList.remove('active'))
    this.classList.add('active')
}


list.forEach((item) => item.addEventListener('click', activeLink))


// --------------------------------------------------------------------

// const toggleButtons = document.querySelectorAll('.toggleButton');
// const hiddenContents = document.querySelectorAll('.hidden');

// toggleButtons.forEach(function (button, index) {
//   button.addEventListener('click', function () {
//     // Ocultar todos os conteúdos antes de mostrar o conteúdo específico
//     hiddenContents.forEach(function (content) {
//       content.style.display = 'none';
//     });

//     // Mostrar ou ocultar o conteúdo específico
//     const hiddenContent = document.getElementById(`hiddenContent${index + 1}`);
//     if (hiddenContent.style.display === 'none') {
//       hiddenContent.style.display = 'block';
//     } else {
//       hiddenContent.style.display = 'none';
//     }
//   });
// });

// -------------------------------------------------------------------------------------------------------
// const projetos = [
//   {
//     title: 'Stranger Things',
//     date: '24 de Outubro de 2021',
//     description: `A aplicação temática de Stranger Things transporta você diretamente para Hawkins, com uma interface interativa inspirada na série. <br><br>
//     Recursos da aplicação: <br><br>
//     • Modal inspirado na tecnologia Upside Down, onde o usuário pode inserir seus próprios dados e personalizar seu Card de Hawkins; <br><br>
//     • Armazenamento de informações no LocalStorage, mantendo seus dados salvos, mesmo que você viaje para o Mundo Invertido; <br><br>
//     • Efeitos de animação 3D com a estética sombria da série; <br><br>
//     • Verso do Card com informações misteriosas sobre o universo de Stranger Things; <br>
//     `,
//     video: 'https://www.youtube.com/embed/z7uOPI-l-Eo?si=49rPGBxvcDYlOtCp',
//     linkedin: 'https://www.linkedin.com/feed/update/urn:li:activity:6858050562471145472/',
//     repository: 'https://github.com/rhuanbello/origin-nlw-heat',
//     site: 'https://dowhile2021-rhuanbello.vercel.app/'
//   },
//   {
//     title: 'Ecommecer-shop',
//     date: '07 de Setembro de 2023',
//     description: `A aplicação de e-commerce de roupas traz uma experiência imersiva, unindo estilo e tecnologia com uma interface interativa. Baseada em uma API fake, a loja oferece uma navegação intuitiva e eficiente para os usuários. <br><br>
//     Recursos da aplicação: <br><br>
//     • Carrinho de compras dinâmico, onde os usuários podem adicionar e gerenciar seus produtos selecionados de forma prática; <br><br>
//     • Armazenamento de informações no LocalStorage, garantindo que os itens do carrinho permaneçam salvos mesmo após fechar o navegador; <br><br>
//     • Interface visual moderna, com um design focado em oferecer uma experiência de compra fluida; <br><br>
//     • Detalhamento completo de cada peça de roupa, incluindo descrições, preços e imagens de alta qualidade; <br>
//     `,
//     video: 'https://youtu.be/c5lSn-u5jNA?si=0QMiO4QQbXuul75d',
//     linkedin: 'https://www.linkedin.com/feed/update/urn:li:activity:6858050562471145472/',
//     repository: 'https://github.com/rhuanbello/origin-nlw-heat',
//     site: 'https://dowhile2021-rhuanbello.vercel.app/'
//   },
//   // ... outros projetos
// ];

function modalProjetos(projeto) {
  const modal = document.getElementById('modalInfoProjetos');
  const overlay = document.getElementById('modalOverlay');

  // Preencher o modal com as informações do projeto
  document.getElementById('res-title').textContent = projeto.title;
  document.getElementById('date').textContent = projeto.date;
  document.getElementById('description').innerHTML = projeto.description || "Descrição não disponível";
  
  // Configurar o vídeo
  const videoElement = document.getElementById('video');
  if (projeto.video) {
    videoElement.src = projeto.video;
    videoElement.parentElement.style.display = 'block';
  } else {
    videoElement.parentElement.style.display = 'none';
  }

  // Configurar os links
  const linkProject = document.getElementById('link-project');
  const linkRepository = document.getElementById('link-repository');
  const linkLinkedin = document.getElementById('link-linkedin');

  linkProject.href = projeto.link || "#";
  linkProject.style.display = projeto.link ? 'inline-block' : 'none';

  linkRepository.href = projeto.repository || "#";
  linkRepository.style.display = projeto.repository ? 'inline-block' : 'none';

  linkLinkedin.href = projeto.linkedin || "#";
  linkLinkedin.style.display = projeto.linkedin ? 'inline-block' : 'none';

  // Exibir o modal e o overlay
  modal.style.display = 'block';
  overlay.style.display = 'block';

  // Desativar o scroll da página
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('modalInfoProjetos');
  const overlay = document.getElementById('modalOverlay');

  modal.style.display = 'none';
  overlay.style.display = 'none';

  // Reativar o scroll da página
  document.body.style.overflow = '';
}

// Adicionar event listener para o botão de fechar
document.getElementById('close-modal').addEventListener('click', closeModal);

// Adicionar event listener para fechar o modal ao clicar no overlay
document.getElementById('modalOverlay').addEventListener('click', closeModal);



function displayProjects(filteredProjects) {
  let projetosContainer = document.getElementById('card-projetos');
  projetosContainer.innerHTML = ''; // Limpa o conteúdo anterior

  filteredProjects.forEach((projeto, index) => {
    projetosContainer.innerHTML += `
      <div class="box">
          <div class="cover">
              <img src="${projeto.image}" alt="${projeto.alt}">
          </div>
          <div class="description">
              <div class="details">
                  <p>${projeto.title}</p>
                  <div class="mini-languages">
                    <div class="lang">
                      ${projeto.technologies.map(tech => `<img src="${tech.src}" alt="${tech.alt}">`).join('')}
                    </div>
                    <span>projeto: ${projeto.completed}</span>
                  </div>
              </div>
              <p>${projeto.date}</p>
              <a href="#" class="view-more">Ver mais</a>
          </div>
      </div>
    `;
  });

  // Adiciona os event listeners para os botões "Ver mais"
  document.querySelectorAll('.view-more').forEach((button, index) => {
    button.addEventListener('click', function(event) {
      event.preventDefault();
      modalProjetos(filteredProjects[index]);
    });
  });
}


function filterProjects(language) {
  if (language === 'all') {
      displayProjects(projects);
  } else {
      const filteredProjects = projects.filter(project => project.languages.includes(language));
      displayProjects(filteredProjects);
  }
}


document.addEventListener('DOMContentLoaded', () => {
  // Exibe todos os projetos ao carregar a página
  displayProjects(projects);

  // Adiciona os event listeners para os botões
  document.getElementById('toggleButtonJs').addEventListener('click', () => filterProjects('javascript'));
  document.getElementById('toggleButtonCss').addEventListener('click', () => filterProjects('css'));
  document.getElementById('toggleButtonReact').addEventListener('click', () => filterProjects('react'));
  document.getElementById('toggleButtonPy').addEventListener('click', () => filterProjects('python'));
  document.getElementById('toggleButtonPhp').addEventListener('click', () => filterProjects('laravel'));
  
  // Adicione um botão para mostrar todos os projetos
  document.getElementById('toggleButtonAll').addEventListener('click', () => filterProjects('all'));
});



// const modal = {
//   title: 'DoWhile 2021 Virtual Badge',
//   date: '24 de Outubro de 2021',
//   description: `O DoWhile 2021 Card é uma aplicação interativa que mostra informações do usuário através da API do GitHub :D <br><br>
//   Após concluir o evento, adicionei funcionalidades extras, como: <br><br>
//   • Modal para o usuário inserir seus próprios dados no Card; <br>
//   • Armazenamento dos dados inseridos pelo usuário no LocalStorage do navegador, fazendo com que as informações sejam mantidas mesmo após fechar a página; <br>
//   • Animação de Flip em 3D (com CSS puro); <br>
//   • Verso do Card com informações sobre o DoWhile 2021; <br>
//   • Versão Desktop e Mobile.`,
//   videoSrc: 'https://osmarmcn.github.io/landing-page-stranger-things/',
//   linkedin: 'https://www.linkedin.com/feed/update/urn:li:activity:6858050562471145472/',
//   repository: 'https://github.com/rhuanbello/origin-nlw-heat',
//   site: 'https://dowhile2021-rhuanbello.vercel.app/'
// };

// function CriarModal(index) {
//   const projeto = projects[index];
  
//   // Cria o HTML do modal
//   const modalHTML = `
//     <div id="modal" class="modal">
//         <div class="modal-content">
//             <span id="modal-close" class="modal-close">&times;</span>
//             <h2>${projeto.title}</h2>
//             <p>${projeto.date}</p>
//             <div>${projeto.description}</div>
//             <div id="modal-video">
//                 <iframe width="100%" height="400" frameborder="0" allowfullscreen src="${projeto.videoSrc}"></iframe>
//             </div>
//             <div id="modal-links">
//                 <a href="${projeto.linkedin}" target="_blank">LinkedIn</a>
//                 <a href="${projeto.repository}" target="_blank">Repository</a>
//                 <a href="${projeto.site}" target="_blank">Site</a>
//             </div>
//         </div>
//     </div>
//   `;
  
//   // Adiciona o modal ao corpo do documento
//   document.body.insertAdjacentHTML('beforeend', modalHTML);

//   // Exibe o modal
//   const modalElement = document.getElementById('modal');
//   modalElement.style.display = 'flex';

//   // Fecha o modal quando o botão de fechar é clicado
//   document.getElementById('modal-close').addEventListener('click', function() {
//     modalElement.remove();
//   });

//   // Fecha o modal quando clicar fora do conteúdo
//   window.addEventListener('click', function(event) {
//     if (event.target === modalElement) {
//       modalElement.remove();
//     }
//   });
// }



// document.addEventListener('DOMContentLoaded', () => {
//   // Supondo que você tenha uma maneira de identificar qual projeto foi clicado
//   document.querySelectorAll('.description a').forEach((link, index) => {
//       link.addEventListener('click', (event) => {
//           event.preventDefault(); // Impede a navegação padrão do link
//           CriarModal(); // Cria e mostra o modal
//       });
//   });
// });

// ----------------------------------- modal about --------------------------------

 // Get the modal
 let modalAbout = document.getElementById("myModal-about");

 // Get the button that opens the modal
 let btn = document.getElementById("btn-about");

 // Get the <span> element that closes the modal
 let span = document.getElementsByClassName("close")[0];

 // When the user clicks the button, open the modal 
 btn.onclick = function() {
     modalAbout.style.display = "block";
 }

 // When the user clicks on <span> (x), close the modal
 span.onclick = function() {
     modalAbout.style.display = "none";
 }

 // When the user clicks anywhere outside of the modal, close it
 window.onclick = function(event) {
     if (event.target == modalAbout) {
         modalAbout.style.display = "none";
     }
 }