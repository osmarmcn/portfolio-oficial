var typed = new Typed(".dynamic-text", {
    strings: ["Full Stack Developer", "freelancer", "student"],
    typeSpeed: 100,
    backSpeed:100,
    backDelay:1000,
    loop: true
})
// ---------------------- icon menu ----------------------------------------------------//
let menuIcon = document.getElementById("menu-icon")
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bxs-x-circle')
    navbar.classList.toggle('active-btn')
  
}

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active'); // Adiciona ou remove a classe 'show'
});

// ------------------------ remove ------------------------------------------------------//
menuIcon.classList.remove('bxs-x-circle')
navbar.classList.remove('active-btn')


// --------------------------------------------------------------------------------//

let section = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () =>{
    section.forEach(sec =>{
        let top = window.scrollY
        let offset = sec.offsetTop - 150
        let height = sec.offsetHeight
        let id = sec.getAttribute('id')

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active-btn')
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active-btn')
            })
        }
    })
}

// ----------------------------------------------------------------------------------//

let header = document.querySelector('header')
header.classList.toggle('sticky', window.scrollY > 100)


// ------------------------------scrollreveal---------------------------------------------//

ScrollReveal({ 
    // reset: true,
    distance: '80px',
    duration: 3000,
    delay:200
});

ScrollReveal().reveal('.heading', { origin: 'top'});
ScrollReveal().reveal('.services-container, .portfolio-box, .contact form', { origin: 'bottom'});
ScrollReveal().reveal('.about-img', { origin: 'left'});
ScrollReveal().reveal('.about-content-text', { origin: 'right'});
ScrollReveal().reveal('about-skill', {origin:'bottom'})
ScrollReveal().reveal('.skills-section', {origin:'bottom'})




// ------------------ skill animation --------------------------------------------------

const scrollers = document.querySelectorAll(".scroller");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);
    
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    let totalWidth = 0;

    while (totalWidth < scroller.clientWidth * 2) {
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        scrollerInner.appendChild(duplicatedItem);
        totalWidth += item.offsetWidth;
      });
    }
  });
}


document.addEventListener("DOMContentLoaded", () => {
 
  document.querySelectorAll(".progress").forEach((bar) => {
      const percentage = bar.style.width
      bar.style.setProperty("--progress-width", percentage)
      bar.style.width = "0%"
  })

  
  document.querySelectorAll(".circle").forEach((circle) => {
      const targetPercent = parseInt(circle.getAttribute("data-percent"))
      const textSpan = circle.querySelector("span")

      let currentPercent = 0

      
      const interval = setInterval(() => {
          if (currentPercent >= targetPercent) {
              clearInterval(interval)
          } else {
              currentPercent++;
              const gradient = `conic-gradient(
                  #00d1ff ${currentPercent * 3.6}deg,
                  #243b55 0deg
              )`

              circle.style.background = gradient
              textSpan.textContent = `${currentPercent}%`
          }
      }, 20)
  })
});


// ---------------------------------------------------------------



