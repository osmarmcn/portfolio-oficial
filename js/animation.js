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
// <i class='bx bxs-x-circle'></i>
// menuIcon.addEventListener("click", (e) =>{
//     e.classList.toggle('bxs-x-circle')
//     navbar.classList.toggle('active')
// })
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bxs-x-circle')
    navbar.classList.toggle('active-btn')
  
}

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
    duration: 2000,
    delay:200
});

ScrollReveal().reveal('.heading', { origin: 'top'});
ScrollReveal().reveal('.services-container, .portfolio-box, .contact form', { origin: 'bottom'});
ScrollReveal().reveal('.about-img', { origin: 'left'});
ScrollReveal().reveal('.about-content-text', { origin: 'right'});



// ------------------ skill animation --------------------------------------------------

const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}


