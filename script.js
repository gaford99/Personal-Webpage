// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Fade name in and out on scroll
  const nameElement = document.getElementById('name');
  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const opacity = 1 - scrollPosition / 300; // Adjust 300 for fade speed
    nameElement.style.opacity = opacity > 0 ? opacity : 0;
  });

document.addEventListener('DOMContentLoaded', function() {
    const firstPage = document.getElementById('first-page');
    const secondPage = document.getElementById('second-page');
    const enterButton = document.querySelector('.enter-button');

    enterButton.addEventListener('click', function() {
        // Fade out first page
        firstPage.classList.add('hidden');
        
        // Show second page
        secondPage.classList.remove('hidden');
        
        // After transition, remove first page from DOM flow
        setTimeout(() => {
            firstPage.style.display = 'none';
        }, 1000);
    });
});