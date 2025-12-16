// ============================================
// MONSTER HUNTER FESTIVAL - JAVASCRIPT
// Interactive Features & Animations
// ============================================

// ============================================
// DOM READY
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    initBurgerMenu();
    initFAQAccordion();
    initSmoothScroll();
    initFormValidation();
    initScrollAnimations();
    initNavbarScroll();
});

// ============================================
// BURGER MENU (Mobile Navigation)
// ============================================
function initBurgerMenu() {
    const burgerMenu = document.getElementById('burgerMenu');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (!burgerMenu || !navMenu) return;
    
    // Toggle menu on burger click
    burgerMenu.addEventListener('click', function() {
        burgerMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });
    
    // Close menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            burgerMenu.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideMenu = navMenu.contains(event.target);
        const isClickOnBurger = burgerMenu.contains(event.target);
        
        if (!isClickInsideMenu && !isClickOnBurger && navMenu.classList.contains('active')) {
            burgerMenu.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// ============================================
// FAQ ACCORDION
// ============================================
function initFAQAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        if (!question) return;
        
        question.addEventListener('click', function() {
            const isActive = item.classList.contains('active');
            
            // Close all other FAQ items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    const otherQuestion = otherItem.querySelector('.faq-question');
                    if (otherQuestion) {
                        otherQuestion.setAttribute('aria-expanded', 'false');
                    }
                }
            });
            
            // Toggle current item
            if (isActive) {
                item.classList.remove('active');
                question.setAttribute('aria-expanded', 'false');
            } else {
                item.classList.add('active');
                question.setAttribute('aria-expanded', 'true');
            }
        });
    });
}

// ============================================
// SMOOTH SCROLL
// ============================================
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip empty anchors
            if (href === '#') return;
            
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Update active nav link
                updateActiveNavLink(href);
            }
        });
    });
}

// ============================================
// UPDATE ACTIVE NAV LINK
// ============================================
function updateActiveNavLink(targetHref) {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        
        if (link.getAttribute('href') === targetHref) {
            link.classList.add('active');
        }
    });
}

// ============================================
// FORM VALIDATION
// ============================================
function initFormValidation() {
    const form = document.getElementById('contactForm');
    
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        
        // Reset previous errors
        clearErrors();
        
        let isValid = true;
        
        // Validate email
        if (!emailInput.value.trim()) {
            showError(emailInput, 'L\'email est requis');
            isValid = false;
        } else if (!isValidEmail(emailInput.value)) {
            showError(emailInput, 'Veuillez entrer un email valide');
            isValid = false;
        }
        
        // Validate message
        if (!messageInput.value.trim()) {
            showError(messageInput, 'Le message est requis');
            isValid = false;
        } else if (messageInput.value.trim().length < 10) {
            showError(messageInput, 'Le message doit contenir au moins 10 caractères');
            isValid = false;
        }
        
        // If valid, show success message
        if (isValid) {
            showSuccessMessage();
            form.reset();
        }
    });
}

// ============================================
// VALIDATION HELPERS
// ============================================
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showError(input, message) {
    const formGroup = input.closest('.form-group');
    
    // Create error message element
    const errorElement = document.createElement('div');
    errorElement.className = 'error-message';
    errorElement.style.color = '#ff6b35';
    errorElement.style.fontSize = '0.9rem';
    errorElement.style.marginTop = '0.5rem';
    errorElement.textContent = message;
    
    // Add error styling to input
    input.style.borderColor = '#ff6b35';
    
    // Append error message
    formGroup.appendChild(errorElement);
}

function clearErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    const inputs = document.querySelectorAll('.contact-form input, .contact-form textarea');
    
    errorMessages.forEach(error => error.remove());
    inputs.forEach(input => input.style.borderColor = '');
}

function showSuccessMessage() {
    const form = document.getElementById('contactForm');
    
    // Create success message
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.style.padding = '1rem';
    successDiv.style.background = 'rgba(45, 216, 129, 0.2)';
    successDiv.style.border = '2px solid #2dd881';
    successDiv.style.borderRadius = '8px';
    successDiv.style.color = '#2dd881';
    successDiv.style.textAlign = 'center';
    successDiv.style.marginTop = '1rem';
    successDiv.style.fontWeight = '600';
    successDiv.textContent = '✓ Message envoyé avec succès ! Nous vous répondrons bientôt.';
    
    form.appendChild(successDiv);
    
    // Remove success message after 5 seconds
    setTimeout(() => {
        successDiv.remove();
    }, 5000);
}

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        // Add shadow on scroll
        if (currentScroll > 50) {
            navbar.style.boxShadow = '0 4px 24px rgba(0, 0, 0, 0.3)';
        } else {
            navbar.style.boxShadow = 'none';
        }
        
        lastScroll = currentScroll;
    });
}

// ============================================
// SCROLL ANIMATIONS (Optional)
// ============================================
function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe cards
    const cards = document.querySelectorAll('.game-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
    
    // Observe FAQ items
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
        observer.observe(item);
    });
}

// ============================================
// ACTIVE NAV ON SCROLL
// ============================================
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - navbarHeight - 100;
        const sectionHeight = section.offsetHeight;
        
        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});
