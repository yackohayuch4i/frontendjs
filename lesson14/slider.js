const slider = document.getElementById("slider");
const arrowLeft = document.querySelector(".arrowLeft");
const arrowRight = document.querySelector(".arrowRight");
const slides = document.querySelectorAll(".slideImage");
const bottom = document.getElementById("bottom");
let currentSlideIndex = 0;
const paginationCircles = [];
const sliderWidth = slider.clientWidth; // Визначаємо ширину слайдера

// Функція створення пагінаційного кола
function createPaginationCircle() {
    const div = document.createElement("div");
    div.className = "paginationCurcle"; // Виправлення класу
    bottom.appendChild(div);
    paginationCircles.push(div);
}

// Додавання пагінаційних точок
function addPagination() {
    slides.forEach(createPaginationCircle);
    paginationCircles[0].classList.add("active");
    paginationCircles.forEach((circle, index) => {
        circle.addEventListener("click", () => changeSlide(index));
    });
}

// Додавання активного класу до поточної пагінаційної точки
function addActiveClass() {
    paginationCircles[currentSlideIndex].classList.add("active");
}

// Видалення активного класу з поточної пагінаційної точки
function removeActiveClass() {
    paginationCircles[currentSlideIndex].classList.remove("active");
}

// Показ поточного слайда
function showSlide() {
    slider.style.transform = `translateX(-${currentSlideIndex * sliderWidth}px)`; // Використовуємо шаблонні рядки
    updateNavButtons(); // Оновлюємо стан кнопок навігації
}

// Зміна на наступний або попередній слайд
function changeSlide(slideIndex) {
    removeActiveClass();
    currentSlideIndex = slideIndex;
    addActiveClass();
    showSlide();
}

// Навігація на наступний слайд
function nextSlide() {
    if (currentSlideIndex < slides.length - 1) {
        changeSlide(currentSlideIndex + 1);
    }
}

// Навігація на попередній слайд
function previousSlide() {
    if (currentSlideIndex > 0) {
        changeSlide(currentSlideIndex - 1);
    }
}

// Оновлення стану кнопок навігації
function updateNavButtons() {
    arrowLeft.style.display = currentSlideIndex === 0 ? 'none' : 'block';
    arrowRight.style.display = currentSlideIndex === slides.length - 1 ? 'none' : 'block';
}

// Ініціалізація пагінації та додавання слухачів подій
addPagination();
arrowLeft.addEventListener("click", previousSlide);
arrowRight.addEventListener("click", nextSlide);
showSlide(); // Показуємо перший слайд та оновлюємо кнопки навігації
