const triggerTab = document.querySelector('.trigger');
triggerTab.addEventListener('click', () => {
    const menu = document.querySelector('.menu');

    menu.classList.toggle('visible');
    menu.classList.toggle('invisible');
});