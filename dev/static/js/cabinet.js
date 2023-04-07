const tab = function() {
    let tabNav = document.querySelectorAll('.test__nav-item'), // Выбираем элементы навигации табов
        tabContent = document.querySelectorAll('.test__block'), // Выбираем самы табы
        tabName; // Переменная для имени таба

    // Проходим циклом по каждому элементу навигации и навешиваем обработчик клика, который вызывает функцию selectTabNav
    tabNav.forEach((item) => {
        item.addEventListener('click', selectTabNav)
    });

    function selectTabNav() {
        tabNav.forEach((item) => {
            // Удаляем активный класс у всех элементов навигации табов
            item.classList.remove('is-active');
        });
        this.classList.add('is-active'); // Добавляем активный укласс у элемента по которому кликнули
        tabName = this.getAttribute('test-tab-name'); // Получаем имя таба, который нам нужен
        selectTabContent(tabName); // Запускаем функцию, чтобы показать выбранный таб
    }

    function selectTabContent(tab) {
        // Проходим по всем табам и проверяем есть ли у элемента класс, равный имени таба(переменной tabName). Если есть, то добавляем класс активного таба, если нет, то удаляем этот класс
        tabContent.forEach((item) => {
            let classList = item.classList;
            classList.contains(tab) ? classList.add('is-active') : classList.remove('is-active');
        });
    }
};

tab();

const tab2 = function() {
    let tabNav = document.querySelectorAll('.cabinet__intro-tab'), // Выбираем элементы навигации табов
        tabContent = document.querySelectorAll('.cabinet__block'), // Выбираем самы табы
        tabName; // Переменная для имени таба

    // Проходим циклом по каждому элементу навигации и навешиваем обработчик клика, который вызывает функцию selectTabNav
    tabNav.forEach((item) => {
        item.addEventListener('click', selectTabNav)
    });

    function selectTabNav() {
        tabNav.forEach((item) => {
            // Удаляем активный класс у всех элементов навигации табов
            item.classList.remove('is-active');
        });
        this.classList.add('is-active'); // Добавляем активный укласс у элемента по которому кликнули
        tabName = this.getAttribute('data-tab-name'); // Получаем имя таба, который нам нужен
        selectTabContent(tabName); // Запускаем функцию, чтобы показать выбранный таб
    }

    function selectTabContent(tab) {
        // Проходим по всем табам и проверяем есть ли у элемента класс, равный имени таба(переменной tabName). Если есть, то добавляем класс активного таба, если нет, то удаляем этот класс
        tabContent.forEach((item) => {
            let classList = item.classList;
            classList.contains(tab) ? classList.add('is-active') : classList.remove('is-active');
        });
    }
};

tab2();

const input = document.querySelectorAll('input[name="checkout-person"]')
const div = document.querySelector('.cabinet__list--otherPerson')
for (const i of input) {
    i.onchange = () => {
        div.classList.toggle('active');
    }
}

const prepayRadio = document.querySelectorAll('input[name="checkout-payment"]')
const prepayWrap = document.querySelector('.cabinet__prepay')
for (const i of prepayRadio) {
    i.onchange = () => {
        prepayWrap.classList.toggle('active');
    }
}
