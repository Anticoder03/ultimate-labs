// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Initialize Anime.js animations
    initializeAnimations();
});

// Anime.js Animations
function initializeAnimations() {
    // Hero section text animation
    anime.timeline({
        easing: 'easeOutExpo',
    })
    .add({
        targets: '.animate-fade-in',
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 1000,
    })
    .add({
        targets: '.animate-fade-in-delay',
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 1000,
    }, '-=800');

    // Service cards animation
    anime({
        targets: '.service-card',
        translateY: [50, 0],
        opacity: [0, 1],
        delay: anime.stagger(200),
        easing: 'easeOutExpo',
    });

    // Why Choose Us section animation
    anime({
        targets: '.text-center',
        translateY: [30, 0],
        opacity: [0, 1],
        delay: anime.stagger(100),
        easing: 'easeOutExpo',
    });
}

// Smooth scroll for anchor links
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

// Form validation and submission
const appointmentForm = document.querySelector('#appointment-form');
if (appointmentForm) {
    appointmentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Show loading spinner
        const submitButton = this.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.innerHTML;
        submitButton.innerHTML = '<div class="loading-spinner"></div>';
        
        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            submitButton.innerHTML = originalButtonText;
            // Show success message
            alert('Appointment request submitted successfully! We will contact you shortly.');
            this.reset();
        }, 1500);
    });
}

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements with animation classes
document.querySelectorAll('.animate-on-scroll').forEach(element => {
    observer.observe(element);
});

// Dynamic copyright year
document.querySelector('.copyright-year').textContent = new Date().getFullYear(); 