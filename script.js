document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle
    const themeToggle = document.querySelector('.theme-toggle');
    themeToggle.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
        themeToggle.textContent = document.documentElement.classList.contains('dark') ? '☀️' : '🌙';
    });

    // Exclusive Accordion FAQ Logic
    const allFaqItems = document.querySelectorAll('.faq-item');
    document.querySelectorAll('.faq-question').forEach(button => {
        button.addEventListener('click', () => {
            const currentFaqItem = button.closest('.faq-item');
            const wasActive = currentFaqItem.classList.contains('active');
            allFaqItems.forEach(item => item.classList.remove('active'));
            if (!wasActive) currentFaqItem.classList.add('active');
        });
    });

    // Form Submission
    document.getElementById('start-journey-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Adventure awaits! Thank you for signing up.');
        e.target.reset();
    });
    
    // Intersection Observer for animations and active nav links
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Nav link highlighting
                if (entry.target.classList.contains('section')) {
                    document.querySelectorAll('.nav-link').forEach(link => {
                        link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
                    });
                }
                // Scroll animations
                if (entry.target.classList.contains('reveal')) {
                    entry.target.classList.add('visible');
                }
            }
        });
    }, { threshold: 0.3 });
    document.querySelectorAll('.section, .reveal').forEach(el => observer.observe(el));
});
