// Add smooth scrolling to all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Sticky navbar on scroll
  window.onscroll = function () {
    stickyNavbar();
  };
  
  var navbar = document.querySelector('.navbar');
  var sticky = navbar.offsetTop;
  
  function stickyNavbar() {
    if (window.pageYOffset > sticky) {
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');
    }
  }
  