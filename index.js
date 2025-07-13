// Theme Toggle Functionality
class ThemeManager {
    constructor() {
        this.themeToggle = document.getElementById('themeToggle');
        this.currentTheme = localStorage.getItem('theme') || 'light';
        this.init();
    }

    init() {
        // Set initial theme
        this.setTheme(this.currentTheme);
        
        // Add event listener
        this.themeToggle.addEventListener('click', () => {
            this.toggleTheme();
        });

        // Add keyboard support
        this.themeToggle.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.toggleTheme();
            }
        });
    }

    setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        this.currentTheme = theme;
        localStorage.setItem('theme', theme);
        
        // Update aria-label for accessibility
        this.themeToggle.setAttribute('aria-label', 
            theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
        );
    }

    toggleTheme() {
        const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.setTheme(newTheme);
        
        // Add a subtle animation effect
        this.themeToggle.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.themeToggle.style.transform = 'scale(1)';
        }, 150);
    }
}

// Smooth Scrolling for Navigation Links
class SmoothScroller {
    constructor() {
        this.navLinks = document.querySelectorAll('.nav-link[href^="#"]');
        this.init();
    }

    init() {
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = targetElement.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
}

// Active Navigation Highlighting
class NavigationHighlighter {
    constructor() {
        this.sections = document.querySelectorAll('section[id]');
        this.navLinks = document.querySelectorAll('.nav-link[href^="#"]');
        this.init();
    }

    init() {
        window.addEventListener('scroll', () => {
            this.updateActiveSection();
        });
    }

    updateActiveSection() {
        const scrollPosition = window.scrollY + 100; // Offset for header

        this.sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                this.navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
}

// Header Background on Scroll
class HeaderBackground {
    constructor() {
        this.header = document.querySelector('.header');
        this.init();
    }

    init() {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                this.header.classList.add('scrolled');
            } else {
                this.header.classList.remove('scrolled');
            }
        });
    }
}

// Project Card Interactions
class ProjectCards {
    constructor() {
        this.projectCards = document.querySelectorAll('.project-card');
        this.init();
    }

    init() {
        this.projectCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-10px)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0)';
            });
        });
    }
}

// Typing Animation for Hero Title
class TypingAnimation {
    constructor() {
        this.heroTitle = document.querySelector('.hero-title');
        this.init();
    }

    init() {
        if (this.heroTitle) {
            const text = this.heroTitle.textContent;
            this.heroTitle.textContent = '';
            this.heroTitle.style.borderRight = '2px solid var(--accent-primary)';
            
            let i = 0;
            const typeWriter = () => {
                if (i < text.length) {
                    this.heroTitle.textContent += text.charAt(i);
                    i++;
                    setTimeout(typeWriter, 100);
                } else {
                    // Remove cursor after typing is complete
                    setTimeout(() => {
                        this.heroTitle.style.borderRight = 'none';
                    }, 1000);
                }
            };
            
            // Start typing animation after a short delay
            setTimeout(typeWriter, 500);
        }
    }
}

// Intersection Observer for Animations
class ScrollAnimations {
    constructor() {
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        this.init();
    }

    init() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, this.observerOptions);

        // Observe elements for animation
        const animateElements = document.querySelectorAll('.project-card, .skill-tag, .about-content');
        animateElements.forEach(el => {
            observer.observe(el);
        });
    }
}

// Form Validation (if you add a contact form later)
class FormValidation {
    constructor() {
        this.forms = document.querySelectorAll('form');
        this.init();
    }

    init() {
        this.forms.forEach(form => {
            form.addEventListener('submit', (e) => {
                if (!this.validateForm(form)) {
                    e.preventDefault();
                }
            });
        });
    }

    validateForm(form) {
        const inputs = form.querySelectorAll('input[required], textarea[required]');
        let isValid = true;

        inputs.forEach(input => {
            if (!input.value.trim()) {
                this.showError(input, 'This field is required');
                isValid = false;
            } else {
                this.clearError(input);
            }
        });

        return isValid;
    }

    showError(input, message) {
        const errorDiv = input.parentNode.querySelector('.error-message') || 
                        document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        errorDiv.style.color = 'var(--accent-secondary)';
        errorDiv.style.fontSize = '0.875rem';
        errorDiv.style.marginTop = '0.25rem';

        if (!input.parentNode.querySelector('.error-message')) {
            input.parentNode.appendChild(errorDiv);
        }
    }

    clearError(input) {
        const errorDiv = input.parentNode.querySelector('.error-message');
        if (errorDiv) {
            errorDiv.remove();
        }
    }
}

// Performance Optimization
class PerformanceOptimizer {
    constructor() {
        this.init();
    }

    init() {
        // Lazy load images if you add them later
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            });

            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }
    }
}

// Initialize all classes when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ThemeManager();
    new SmoothScroller();
    new NavigationHighlighter();
    new HeaderBackground();
    new ProjectCards();
    new TypingAnimation();
    new ScrollAnimations();
    new FormValidation();
    new PerformanceOptimizer();
});

// Add some CSS for animations
const style = document.createElement('style');
style.textContent = `
    .project-card, .skill-tag, .about-content {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .project-card.animate-in, .skill-tag.animate-in, .about-content.animate-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    .nav-link.active {
        color: var(--accent-primary) !important;
        font-weight: 600;
    }
    
    .header.scrolled {
        box-shadow: 0 2px 20px var(--shadow-medium);
    }
    
    .hero-title {
        overflow: hidden;
        white-space: nowrap;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .fade-in-up {
        animation: fadeInUp 0.6s ease forwards;
    }
`;
document.head.appendChild(style);
