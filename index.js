// Function to scroll to the 'About Me' section when the button is clicked
function scrollToAbout() {
    const aboutSection = document.getElementById('about-me-section-1');
    if (aboutSection) {
        // Use smooth scrolling behavior
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
}

//==================== SCROLL UP ====================
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


//==================== SCROLL SECTIONS ACTIVE LINK ====================
// Note: This now includes #projects-header for section highlighting
const sections = document.querySelectorAll('section[id]') 

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50; // Offset by header height
        const sectionId = current.getAttribute('id')

        // Check if current scroll position is within the section bounds
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            // Add active link class to the corresponding nav item
            const navLink = document.querySelector(`.nav a[href*="#${sectionId}"]`);
            if (navLink) {
                 navLink.classList.add('active-link');
            }
        } else {
             // Remove active link class
             const navLink = document.querySelector(`.nav a[href*="#${sectionId}"]`);
             if (navLink) {
                 navLink.classList.remove('active-link');
             }
        }
    })
}
window.addEventListener('scroll', scrollActive)


//==================== CHANGE BACKGROUND HEADER ====================
function scrollHeader(){
    const nav = document.querySelector('.header') // Select the fixed header
    // When the scroll is greater than 80 viewport height, add the scroll-header class
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


//==================== ADDED: ANIMATE ELEMENTS ON SCROLL ====================
function animateOnScroll() {
    // Get all elements that need to animate (your skill cards)
    const animatedElements = document.querySelectorAll('.animate-card-init');
    const screenHeight = window.innerHeight;

    animatedElements.forEach(element => {
        // Get the position of the element relative to the viewport
        const elementTop = element.getBoundingClientRect().top;

        // Animate the element when it is 80% (0.8) of the screen height into view
        if (elementTop < screenHeight * 0.8) {
            element.classList.add('show-animate');
            // Remove the initial class to ensure it doesn't try to re-animate
            element.classList.remove('animate-card-init');
        }
    });
}

// Initial check and subsequent checks on scroll
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll); // Run once on page load to check initial position