const links = document.querySelectorAll('header nav ul li a');
links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

const form = document.getElementById('contactForm');
form.addEventListener('submit', e => {
  e.preventDefault();
  alert('Message sent successfully!');
  form.reset();
});
