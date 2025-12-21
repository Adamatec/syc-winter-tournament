// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add active state to navigation links on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Fade in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all team cards, matches, and table rows
document.querySelectorAll('.team-card, .match, tbody tr').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Mobile menu toggle (optional enhancement)
const createMobileMenu = () => {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelector('.nav-links');
    
    // Check if we're on mobile
    if (window.innerWidth <= 768) {
        // Add hamburger button if it doesn't exist
        if (!document.querySelector('.hamburger')) {
            const hamburger = document.createElement('button');
            hamburger.className = 'hamburger';
            hamburger.innerHTML = '☰';
            hamburger.style.cssText = `
                background: none;
                border: none;
                color: #00d9ff;
                font-size: 2rem;
                cursor: pointer;
                display: none;
            `;
            
            // Add mobile styles
            if (window.innerWidth <= 768) {
                hamburger.style.display = 'block';
                navLinks.style.display = 'none';
            }
            
            hamburger.addEventListener('click', () => {
                if (navLinks.style.display === 'none') {
                    navLinks.style.display = 'flex';
                    navLinks.style.flexDirection = 'column';
                    navLinks.style.position = 'absolute';
                    navLinks.style.top = '100%';
                    navLinks.style.left = '0';
                    navLinks.style.right = '0';
                    navLinks.style.background = 'rgba(10, 14, 39, 0.98)';
                    navLinks.style.padding = '20px';
                } else {
                    navLinks.style.display = 'none';
                }
            });
            
            navbar.querySelector('.container').appendChild(hamburger);
        }
    }
};

// Initialize mobile menu
creeateMobileMenu();
window.addEventListener('resize', createMobileMenu);

// Add particle effect to hero section (optional visual enhancement)
const createParticles = () => {
    const hero = document.getElementById('home');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: #00d9ff;
            border-radius: 50%;
            pointer-events: none;
            opacity: ${Math.random() * 0.5 + 0.2};
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${Math.random() * 10 + 5}s linear infinite;
        `;
        hero.appendChild(particle);
    }
};

// Add floating animation to CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% {
            transform: translateY(0) translateX(0);
        }
        25% {
            transform: translateY(-20px) translateX(10px);
        }
        50% {
            transform: translateY(0) translateX(20px);
        }
        75% {
            transform: translateY(20px) translateX(10px);
        }
    }
    
    .nav-links a.active {
        color: #00d9ff !important;
        text-shadow: 0 0 10px rgba(0, 217, 255, 0.8);
    }
`;
document.head.appendChild(style);

// Initialize particles
createParticles();

console.log('SYC Winter Tournament Website Loaded! ⚡');
