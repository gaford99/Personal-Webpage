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
    const menuPage = document.getElementById('menu-page');
    const continueButton = document.querySelector('.continue-button');
    const menuItems = document.querySelectorAll('.menu-item');

    // Handle continue button click
    continueButton.addEventListener('click', function(e) {
        e.preventDefault();
        firstPage.style.opacity = '0';
        setTimeout(() => {
            firstPage.classList.add('hidden');
            menuPage.classList.remove('hidden');
            setTimeout(() => {
                menuPage.classList.add('visible');
            }, 50);
        }, 500);
    });

    // Handle menu item selection
    menuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.dataset.page;
            // Add your page transition logic here
            console.log(`Navigate to ${page} page`);
        });

        // Handle hover sound effects if desired
        item.addEventListener('mouseenter', function() {
            // Add hover sound effect here if desired
        });
    });
});