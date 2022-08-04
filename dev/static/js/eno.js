var regForm = document.querySelector('.popup-menu');
var regCloser = document.querySelector('.popup-menu__closer');
var restoreOpener = document.querySelector('.form__restore');
var restoreForm = document.querySelector('.popup-restore');
var restoreCloser = document.querySelector('.popup-restore__closer');

var regOpener = document.getElementsByClassName('js-cabinet-opener unlogged');
var elNodes = document.querySelectorAll(".js-cabinet-opener.unlogged");
//
for (var i = 0; i < regOpener.length; i++) {
    var elem = regOpener[i];
    elem.addEventListener("click", function() {
        event.preventDefault();
        subForm.classList.remove('active');
        regForm.classList.add('active');
    });
}

if (regCloser) {
    regCloser.addEventListener('click', function() {
        event.preventDefault();
        regForm.classList.remove('active');
    });
};

if (restoreOpener) {
    restoreOpener.addEventListener('click', function() {
        event.preventDefault();
        regForm.classList.remove('active');
        restoreForm.classList.add('active');
    });
};

if (restoreCloser) {
    restoreCloser.addEventListener('click', function() {
        event.preventDefault();
        restoreForm.classList.remove('active');
    });
};

var subOpener = document.querySelector('.course__opener');
var subForm = document.querySelector('.course');
var subCloser = document.querySelector('.course__closer');

if (subOpener) {
    subOpener.addEventListener('click', function() {
        event.preventDefault();
        subForm.classList.add('active');
    });
};

if (subCloser) {
    subCloser.addEventListener('click', function() {
        event.preventDefault();
        subForm.classList.remove('active');
    });
};

const tab = function() {
    let tabNav = document.querySelectorAll('.menu__btn'), // Выбираем элементы навигации табов
        tabContent = document.querySelectorAll('.menu__form'), // Выбираем самы табы
        tabName; // Переменная для имени таба

    // Проходим циклом по каждому элементу навигации и навешиваем обработчик клика, который вызывает функцию selectTabNav
    tabNav.forEach((item) => {
        item.addEventListener('click', selectTabNav)
    });

    function selectTabNav() {
        tabNav.forEach((item) => {
            // Удаляем активный класс у всех элементов навигации табов
            item.classList.remove('active');
        });
        this.classList.add('active'); // Добавляем активный укласс у элемента по которому кликнули
        tabName = this.getAttribute('data-tab-name'); // Получаем имя таба, который нам нужен
        selectTabContent(tabName); // Запускаем функцию, чтобы показать выбранный таб
    }

    function selectTabContent(tab) {
        // Проходим по всем табам и проверяем есть ли у элемента класс, равный имени таба(переменной tabName). Если есть, то добавляем класс активного таба, если нет, то удаляем этот класс
        tabContent.forEach((item) => {
            let classList = item.classList;
            classList.contains(tab) ? classList.add('active') : classList.remove('active');
        });
    }
};

tab();

var changeOpen = document.querySelector('.js-change-opener');
var changePopup = document.querySelector('.popup-change');
var changeCloser = document.querySelector('.popup-change__closer');
    if (changeOpen) {
        changeOpen.addEventListener('click', function() {
            event.preventDefault();
            changePopup.classList.add('active');
        });
    };

if (restoreOpener) {
    restoreOpener.addEventListener('click', function() {
        event.preventDefault();
        changePopup.classList.remove('active');
        restoreForm.classList.add('active');
    });
};

if (changeCloser) {
    changeCloser.addEventListener('click', function() {
        event.preventDefault();
        changePopup.classList.remove('active');
    });
};
