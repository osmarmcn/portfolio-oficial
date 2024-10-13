
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

const projects = [
  {
      title: "Lading page stranger things",
      image: "assets/projects/Mundo invertido.png",
      alt: "mundo invertido",
      date: "01 de Março de 2024",
      completed: 'Concluído',
      technologies: [
          { src: "assets/mini-languages/html.svg", alt: "html" },
          { src: "assets/mini-languages/css.svg", alt: "css" },
          { src: "assets/mini-languages/javascript.svg", alt: "javascript" },
          { src: "assets/mini-languages/firebase.svg", alt: "firebase" }
      ],
      languages: ["css", "html"],
      link: "#"
  },
  {
      title: "Lading page Adventure",
      image: "assets/projects/adventure.png",
      alt: "landing page adventure",
      date: "18 de Fevereiro de 2024",
      completed: 'Concluído',
      technologies: [
          { src: "assets/mini-languages/html.svg", alt: "html" },
          { src: "assets/mini-languages/css.svg", alt: "css" },
          { src: "assets/mini-languages/javascript.svg", alt: "javascript" },
      ],
      languages: ["css", "html"],
      link: "#"
  },
  {
    title: "Lading page Galeria",
    image: "assets/projects/galeria.png",
    alt: "glaeria de imagens",
    date: "15 de Maio de 2024",
    completed: 'Concluído',
    technologies: [
        { src: "assets/mini-languages/html.svg", alt: "html" },
        { src: "assets/mini-languages/sass.svg", alt: "css" },
       
    ],
    languages: ["css", "html"],
    link: "#"
},
{
  title: "page cat",
  image: "assets/projects/page-cat.png",
  alt: "pagina de gatos",
  date: "09 de Maio de 2024",
  completed: 'Concluído',
  technologies: [
      { src: "assets/mini-languages/html.svg", alt: "html" },
      { src: "assets/mini-languages/css.svg", alt: "css" },
      { src: "assets/mini-languages/figma.svg", alt: "figma" },
     
  ],
  languages: ["css", "html"],
  link: "#"
},
{
  title: "pagina de receita",
  image: "assets/projects/receita.png",
  alt: "pagina de receita",
  date: "17 de Abril de 2024",
  completed: 'Concluído',
  technologies: [
      { src: "assets/mini-languages/html.svg", alt: "html" },
      { src: "assets/mini-languages/css.svg", alt: "css" },
      { src: "assets/mini-languages/figma.svg", alt: "figma" },
     
  ],
  languages: ["css", "html"],
  link: "#"
},
{
  title: "to-do-list",
  image: "assets/projects/to do list.png",
  alt: "lista de tarefas",
  date: "27 de Agosto de 2024",
  completed: 'Concluído',
  technologies: [
      { src: "assets/mini-languages/html.svg", alt: "html" },
      { src: "assets/mini-languages/css.svg", alt: "css" },
      { src: "assets/mini-languages/javascript.svg", alt: "javascript" },
     
  ],
  languages: ["javascript"],
  link: "#"
},
{
  title: "Controle do tempo",
  image: "assets/projects/controle do tempo.png",
  alt: "Controle do tempo",
  date: "15 de Junho de 2024",
  completed: 'Concluído',
  technologies: [
    { src: "assets/mini-languages/html.svg", alt: "html" },
    { src: "assets/mini-languages/css.svg", alt: "css" },
    { src: "assets/mini-languages/javascript.svg", alt: "javascript" },
    { src: "assets/mini-languages/figma.svg", alt: "figma" },
     
  ],
  languages: ["javascript"],
  link: "#"
},
{
  title: "Catalogo de livros",
  image: "assets/projects/catalogo livro.png",
  alt: "Catalogo de livros",
  date: "15 de Junho de 2024",
  completed: 'Concluído',
  technologies: [
    { src: "assets/mini-languages/html.svg", alt: "html" },
    { src: "assets/mini-languages/css.svg", alt: "css" },
    { src: "assets/mini-languages/javascript.svg", alt: "javascript" },
     
  ],
  languages: ["javascript"],
  link: "#"
},
{
  title: "Sistema de presença",
  image: "assets/projects/sistema de presenca.png",
  alt: "Catalogo de livros",
  date: "15 de Junho de 2024",
  completed: 'Em andamento',
  technologies: [
    { src: "assets/mini-languages/html.svg", alt: "html" },
    { src: "assets/mini-languages/css.svg", alt: "css" },
    { src: "assets/mini-languages/javascript.svg", alt: "javascript" },
     
  ],
  languages: ["javascript"],
  link: "#"
},
  // Adicione mais projetos conforme necessário
];



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
              <a href="#" data-index="${index}" class="view-more">Ver mais</a>
          </div>
      </div>
    `;
  });

  // Adiciona os event listeners para os botões "Ver mais"
  document.querySelectorAll('.view-more').forEach(button => {
    button.addEventListener('click', function(event) {
      event.preventDefault();
      const index = this.getAttribute('data-index');
      CriarModal(index);
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



const modal = {
  title: 'DoWhile 2021 Virtual Badge',
  date: '24 de Outubro de 2021',
  description: `O DoWhile 2021 Card é uma aplicação interativa que mostra informações do usuário através da API do GitHub :D <br><br>
  Após concluir o evento, adicionei funcionalidades extras, como: <br><br>
  • Modal para o usuário inserir seus próprios dados no Card; <br>
  • Armazenamento dos dados inseridos pelo usuário no LocalStorage do navegador, fazendo com que as informações sejam mantidas mesmo após fechar a página; <br>
  • Animação de Flip em 3D (com CSS puro); <br>
  • Verso do Card com informações sobre o DoWhile 2021; <br>
  • Versão Desktop e Mobile.`,
  videoSrc: 'https://streamable.com/e/qceqn0',
  linkedin: 'https://www.linkedin.com/feed/update/urn:li:activity:6858050562471145472/',
  repository: 'https://github.com/rhuanbello/origin-nlw-heat',
  site: 'https://dowhile2021-rhuanbello.vercel.app/'
};

function CriarModal(index) {
  const projeto = projects[index];
  
  // Cria o HTML do modal
  const modalHTML = `
    <div id="modal" class="modal">
        <div class="modal-content">
            <span id="modal-close" class="modal-close">&times;</span>
            <h2>${projeto.title}</h2>
            <p>${projeto.date}</p>
            <div>${projeto.description}</div>
            <div id="modal-video">
                <iframe width="100%" height="400" frameborder="0" allowfullscreen src="${projeto.videoSrc}"></iframe>
            </div>
            <div id="modal-links">
                <a href="${projeto.linkedin}" target="_blank">LinkedIn</a>
                <a href="${projeto.repository}" target="_blank">Repository</a>
                <a href="${projeto.site}" target="_blank">Site</a>
            </div>
        </div>
    </div>
  `;
  
  // Adiciona o modal ao corpo do documento
  document.body.insertAdjacentHTML('beforeend', modalHTML);

  // Exibe o modal
  const modalElement = document.getElementById('modal');
  modalElement.style.display = 'flex';

  // Fecha o modal quando o botão de fechar é clicado
  document.getElementById('modal-close').addEventListener('click', function() {
    modalElement.remove();
  });

  // Fecha o modal quando clicar fora do conteúdo
  window.addEventListener('click', function(event) {
    if (event.target === modalElement) {
      modalElement.remove();
    }
  });
}



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