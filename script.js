const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
const overlay = document.querySelector('.overlay');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    nav.classList.toggle('active');
    overlay.classList.toggle('active');
});

overlay.addEventListener('click', () => {
    menuToggle.classList.remove('active');
    nav.classList.remove('active');
    overlay.classList.remove('active');
});

const animateElements = document.querySelectorAll('.animate');

function checkScroll() {
    const triggerBottom = window.innerHeight * 0.8;
    
    animateElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        
        if (elementTop < triggerBottom) {
            const animationClass = element.classList.contains('fadeInUp') ? 'fadeInUp' : '';
            element.style.opacity = '1';
            element.style.animation = `${animationClass} 0.8s forwards`;
        }
    });
}

const header = document.querySelector('header');

function checkHeader() {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const targetPosition = targetElement.offsetTop - header.offsetHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            menuToggle.classList.remove('active');
            nav.classList.remove('active');
            overlay.classList.remove('active');
        }
    });
});

window.addEventListener('scroll', checkScroll);
window.addEventListener('scroll', checkHeader);

checkScroll();
checkHeader();
