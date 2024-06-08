function startSlideshow() {
  let slides = document.querySelectorAll('.slide');
  let subhead = document.querySelector('.subheading');
  let btn = document.querySelector('.btn_click');
  let slideshow = document.querySelector('.slideshow');
  let currentSlide = 0;
  let interval;

  // Show the slideshow
  slideshow.style.display = 'block';

  // Hide subheading and button
  subhead.style.display = 'none';
  btn.style.display = 'none';

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.display = i === index ? 'block' : 'none';
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);

    // If we've gone through all slides, stop the slideshow
    if (currentSlide === 0) {
      clearInterval(interval);
      subhead.style.display = 'block';
      btn.style.display = 'block';
      slideshow.style.display = 'none'; // Hide the slideshow after one rotation
    }
  }

  showSlide(currentSlide);
  interval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
}
