// Обработка формы обратной связи
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            // Проверка заполнения полей
            if (name && email && message) {
                // Дополнительная валидация email
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(email)) {
                    alert('Пожалуйста, введите корректный email адрес!');
                    return;
                }

                alert('Спасибо за ваше сообщение, ' + name + '!\n\nМы свяжемся с вами по адресу:\n' + email);

                // Очистка формы после отправки
                contactForm.reset();
            } else {
                alert('Пожалуйста, заполните все обязательные поля!');
            }
        });

        // Добавление живой валидации для email
        const emailInput = document.getElementById('email');
        if (emailInput) {
            emailInput.addEventListener('blur', function () {
                const email = this.value.trim();
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                if (email && !emailPattern.test(email)) {
                    this.style.borderColor = '#e74c3c';
                } else {
                    this.style.borderColor = '#2c5364';
                }
            });
        }
    }
});