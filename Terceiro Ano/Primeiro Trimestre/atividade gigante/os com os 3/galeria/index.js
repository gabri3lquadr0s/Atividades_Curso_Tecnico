document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('.imgs');
  const fullpage = document.getElementById('fullpage');

  images.forEach(img => {
      img.addEventListener('click', function() {
          fullpage.style.backgroundImage = `url(${this.src})`;
          fullpage.style.display = 'block';
      });
  });

  fullpage.addEventListener('click', function() {
      this.style.display = 'none';
  });
});