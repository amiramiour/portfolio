let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

const cursorDot = document.querySelector('[data-cursor-dot]');
const cursorOutline = document.querySelector('[data-cursor-outline]');

window.addEventListener("mousemove", function (e) {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: "forwards" });
});

const links = document.querySelectorAll('a, button, .service-box, .project-card, .timeline-content , .edu-box, .skill-box, .skill-content span');
links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        document.body.classList.add('hover');
    });
    link.addEventListener('mouseleave', () => {
        document.body.classList.remove('hover');
    });
});

ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.greeting', { origin: 'top', delay: 200 });
ScrollReveal().reveal('.hero-name', { origin: 'top', delay: 300 });
ScrollReveal().reveal('.home-content h3', { origin: 'bottom', delay: 400 });
ScrollReveal().reveal('.home-content p', { origin: 'bottom', delay: 500 });
ScrollReveal().reveal('.home-actions', { origin: 'bottom', delay: 600 });


ScrollReveal().reveal('.about-container', { origin: 'bottom' });


ScrollReveal().reveal('.heading', { origin: 'top' });

ScrollReveal().reveal('.timeline-item.left', { origin: 'left' });
ScrollReveal().reveal('.timeline-item.right', { origin: 'right' });

ScrollReveal().reveal('.services-container, .projects-box, .contact form, .education-container, .skills-container', { origin: 'bottom' });
const typed = new Typed('.text-animation', {
    strings: [
'Développeur Backend',
'Développeur Full-Stack',
'Développeur Frontend'
],    
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

VanillaTilt.init(document.querySelectorAll(".service-box, .timeline-content, .edu-box, .skill-box"), {
    max: 25,            
    speed: 400,         
    glare: true,        
    "max-glare": 0.5,   
    scale: 1.05         
});

const modal = document.getElementById("about-modal");
const btnReadMore = document.getElementById("readMoreBtn"); 
const spanClose = document.getElementsByClassName("close-modal")[0];

if(btnReadMore) {
    btnReadMore.onclick = function(e) {
        e.preventDefault(); 
        modal.style.display = "flex"; 
        setTimeout(() => {
            modal.classList.add("active");
        }, 10);
    }
}

if(spanClose) {
    spanClose.onclick = function() {
        modal.classList.remove("active");
        setTimeout(() => {
            modal.style.display = "none";
        }, 300); 
    }
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.classList.remove("active");
        setTimeout(() => {
            modal.style.display = "none";
        }, 300);
    }
}

document.querySelectorAll(".project-card").forEach(card => {
    const btnFlip = card.querySelector(".btn-flip");
    const btnBack = card.querySelector(".btn-back");

    if (btnFlip) {
        btnFlip.addEventListener("click", (e) => {
            e.stopPropagation();
            card.classList.add("flipped");
        });
    }

    if (btnBack) {
        btnBack.addEventListener("click", (e) => {
            e.stopPropagation();
            card.classList.remove("flipped");
        });
    }
});