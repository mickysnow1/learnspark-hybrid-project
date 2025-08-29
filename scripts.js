// This file contains all the vanilla JavaScript for the main website's interactivity.
document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
            themeToggle.textContent = document.documentElement.classList.contains('dark') ? '☀️' : '🌙';
        });
    }

    // Exclusive Accordion FAQ Logic
    const allFaqItems = document.querySelectorAll('.faq-item');
    const faqQuestions = document.querySelectorAll('.faq-question');
    if (faqQuestions.length > 0) {
        faqQuestions.forEach(button => {
            button.addEventListener('click', () => {
                const currentFaqItem = button.closest('.faq-item');
                const wasActive = currentFaqItem.classList.contains('active');
                allFaqItems.forEach(item => item.classList.remove('active'));
                if (!wasActive) currentFaqItem.classList.add('active');
            });
        });
    }

    // Form Submission
    const journeyForm = document.getElementById('start-journey-form');
    if(journeyForm) {
        journeyForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Adventure awaits! Thank you for signing up.');
            e.target.reset();
        });
    }
    
    // Intersection Observer for animations and active nav links
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('section')) {
                    document.querySelectorAll('.nav-link').forEach(link => {
                        link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
                    });
                }
                if (entry.target.classList.contains('reveal')) {
                    entry.target.classList.add('visible');
                }
            }
        });
    }, { threshold: 0.3 });
    document.querySelectorAll('.section, .reveal').forEach(el => observer.observe(el));
});
