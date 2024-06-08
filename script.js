window.addEventListener('scroll', function() {
  const slides = document.querySelectorAll('.slide');
  slides.forEach((slide, index) => {
    const slideTop = slide.getBoundingClientRect().top;
    if (slideTop >= 0 && slideTop < window.innerHeight) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });
});
