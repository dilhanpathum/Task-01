window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  const navLinks = document.querySelectorAll('#main-nav ul li a');
  const scrollPosition = window.scrollY;

  // Change header background color on scroll
  if (scrollPosition > 100) {
    header.style.backgroundColor = '#333';
  } else {
    header.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
  }

  // Change menu item font color on hover
  navLinks.forEach(link => {
    link.addEventListener('mouseover', function() {
      this.style.color = '#fff';
    });
    link.addEventListener('mouseout', function() {
      this.style.color = '#333';
    });
  });
});
