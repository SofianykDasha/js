document.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.getElementById('menu-icon');
  const menu = document.getElementById('menu');
  const slides = document.getElementById('slides');
  const prev = document.getElementById('prev');
  const next = document.getElementById('next');
  const indicators = document.getElementById('indicators').children;
  let currentSlide = 0;
  const totalSlides = slides.children.length;

  menuIcon.addEventListener('click', () => {
    if (menu.classList.contains('show')) {
      menu.classList.remove('show');
      menu.classList.add('hide');
    } else {
      menu.classList.remove('hide');
      menu.classList.add('show');
    }
  });

  const showSlide = (index) => {
      if (index >= totalSlides) index = 0;
      if (index < 0) index = totalSlides - 1;
      slides.style.transform = `translateX(${-index * 100}%)`;
      slides.children[index].style.opacity = '1'
      slides.children[index].style.visibility = 'visible'
      slides.children[index].style.transition = 'opacity 1s'
      slides.children[currentSlide].style.opacity = '0'
      slides.children[currentSlide].style.visibility = 'hidden'
      currentSlide = index;
      updateIndicators();
  };

  const updateIndicators = () => {
      for (let i = 0; i < indicators.length; i++) {
          indicators[i].classList.remove('active');
      }
      indicators[currentSlide].classList.add('active');
  };

  next.addEventListener('click', () => {
      showSlide(currentSlide + 1);
  });

  prev.addEventListener('click', () => {
      showSlide(currentSlide - 1);
  });

  for (let i = 0; i < indicators.length; i++) {
      indicators[i].addEventListener('click', () => {
          showSlide(i);
      });
  }

  setInterval(() => {
      showSlide(currentSlide + 1);
  }, 3000);
});
