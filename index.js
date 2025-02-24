document.addEventListener('DOMContentLoaded', function() {
    // Обработчик для кнопки-бургера
    const burger = document.getElementById('burger');
    const navMenu = document.getElementById('nav-menu');

    if (burger) {
        burger.addEventListener('click', function() {
            navMenu.classList.toggle('active'); // Переключаем класс active
            const isActive = navMenu.classList.contains('active');
            burger.setAttribute('aria-expanded', isActive); // Обновляем атрибут aria
        });
    }

    // Обработчик события скролла
    window.addEventListener('scroll', function() {
        const navBar = document.querySelector('.nav-bar');
        if (window.scrollY > 100) {
            navBar.classList.add('expanded');
        } else {
            navBar.classList.remove('expanded');
        }
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
    
            // Получаем целевой элемент
            const targetElement = document.querySelector(this.getAttribute('href'));
    
            // Прокручиваем страницу с учетом фиксированного меню
            window.scrollTo({
                top: targetElement.offsetTop - 100, // 100 - это высота вашего фиксированного меню
                behavior: 'smooth' // Плавная прокрутка
            });
        });
    });   
});
