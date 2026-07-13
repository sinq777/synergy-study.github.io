(function () {
  const images = [
    { src: './image/1.jpg', alt: 'Изображение 1' },
    { src: './image/2.jpg', alt: 'Изображение 2' },
    { src: './image/3.jpg', alt: 'Изображение 3' },
    { src: './image/4.jpg', alt: 'Изображение 4' },
    { src: './image/5.jpg', alt: 'Изображение 5' },
  ];

  let currentIndex = 0;

  const sliderImage = document.getElementById('sliderImage');
  const counter = document.getElementById('counter');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  function updateCounter() {
    counter.textContent = `Изображение ${currentIndex + 1} из ${images.length}`;
  }

  function showImage(index) {
    const item = images[index];
    sliderImage.classList.add('fade-out');

    setTimeout(function () {
      sliderImage.src = item.src;
      sliderImage.alt = item.alt;
      sliderImage.classList.remove('fade-out');
    }, 150);

    updateCounter();
  }

  function goNext() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }

  function goPrev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  }

  prevBtn.addEventListener('click', goPrev);
  nextBtn.addEventListener('click', goNext);

  document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowLeft') goPrev();
    if (event.key === 'ArrowRight') goNext();
  });

  updateCounter();
})();
