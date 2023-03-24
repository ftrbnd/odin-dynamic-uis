const menu = document.querySelector('.menu');
const triggerTab = document.querySelector('.trigger');

triggerTab.addEventListener('mouseover', () => {
    menu.classList.toggle('visible');
    menu.classList.toggle('invisible');
});

triggerTab.addEventListener('mouseout', () => {
    if (menu.classList.contains('visible') && menu.matches(':hover')) return;

    menu.classList.toggle('visible');
    menu.classList.toggle('invisible');
});

menu.addEventListener('mouseout', () => {
    if (menu.classList.contains('visible') && menu.matches(':hover')) return;

    menu.classList.toggle('visible');
    menu.classList.toggle('invisible');
});