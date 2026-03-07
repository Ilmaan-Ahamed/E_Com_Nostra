
// Navigation functions
function showNavbar() {
    var sidenav = document.querySelector(".side-navbar")
    if (sidenav) sidenav.style.left = "0"
}

function closeNavbar() {
    var sidenav = document.querySelector(".side-navbar")
    if (sidenav) sidenav.style.left = "-60%"
}

function smartNavigate(target) {
    const user = localStorage.getItem('nostra-user');
    if (target === 'profile') {
        window.location.href = user ? 'profile.html' : 'login.html';
    }
}

// Theme Toggle Logic
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('nostra-theme', newTheme);

    const themeIcon = document.querySelector('.theme-toggle i');
    if (themeIcon) {
        themeIcon.className = newTheme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    }
}

// Initialize Theme & Auth
document.addEventListener('DOMContentLoaded', () => {
    // Check Authentication (Skip for login page)
    const path = window.location.pathname;
    const isLoginPage = path.includes('login.html');

    if (!isLoginPage) {
        checkAuth();
    }

    const savedTheme = localStorage.getItem('nostra-theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);

    const themeIcon = document.querySelector('.theme-toggle i');
    if (themeIcon) {
        themeIcon.className = savedTheme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    }

    // Active Nav Link Highlighting
    highlightActiveNav();

    // Universal Profile Icon Handler
    document.querySelectorAll('.login-icon-container').forEach(icon => {
        icon.style.cursor = 'pointer';
        icon.onclick = () => smartNavigate('profile');
    });

    // Initialize Animations
    initScrollReveal();
    initBackToTop();
});

// ═══════════════════════════════════════════
// Authentication Logic
// ═══════════════════════════════════════════

function checkAuth() {
    const user = localStorage.getItem('nostra-user');
    if (!user) {
        console.log("No user session found, redirecting to login...");
        window.location.href = 'login.html';
    } else {
        console.log("Session active:", JSON.parse(user).email);
    }
}

function logout() {
    localStorage.removeItem('nostra-user');
    window.location.href = 'login.html';
}

// ═══════════════════════════════════════════
// Active Nav Link Highlighting
// ═══════════════════════════════════════════

function highlightActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.navbar-links a, .side-navbar a, .side-navbar-links a');

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active-link');
        }
    });
}

// ═══════════════════════════════════════════
// Scroll Reveal Animations
// ═══════════════════════════════════════════

function initScrollReveal() {
    const revealElements = document.querySelectorAll(
        '.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale'
    );

    if (revealElements.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                // Reveal staggered children too
                const children = entry.target.querySelectorAll(
                    '.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale'
                );
                children.forEach(child => child.classList.add('revealed'));
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
}

// ═══════════════════════════════════════════
// Back to Top Button
// ═══════════════════════════════════════════

function initBackToTop() {
    const btn = document.querySelector('.back-to-top');
    if (!btn) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });

    btn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}