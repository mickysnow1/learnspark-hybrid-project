import React from 'react'
import ReactDOM from 'react-dom/client'
import SubscriptionPlans from './SubscriptionPlans.jsx'

// --- START OF VANILLA JAVASCRIPT LOGIC ---
// We moved the code from script.js here so Vite can bundle it.

// This code will run after the initial HTML is on the page.
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
// --- END OF VANILLA JAVASCRIPT LOGIC ---


// This is the React part: it finds the #plans-root div and injects the component.
const container = document.getElementById('plans-root')
if (container) {
  ReactDOM.createRoot(container).render(
    <React.StrictMode>
      <SubscriptionPlans />
    </React.StrictMode>,
  )
}
