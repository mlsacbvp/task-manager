window.addEventListener('load', init);

function init() {
    bindEvents();
}

const bindEvents = () => {
    document.querySelector('.btn').addEventListener('click', () => {
        document.querySelector('.addTask').classList.toggle('popup');
    });

    document.querySelector('.popup-close').addEventListener('click', () => {
        document.querySelector('.addTask').classList.toggle('popup');
    });
}