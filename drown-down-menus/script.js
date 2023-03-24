loadApp();

function loadApp() {
    const TAB_AMOUNT = 4, ITEM_AMOUNT = 4;
    const dropDownMenu = createDropDownMenu(TAB_AMOUNT, ITEM_AMOUNT);

    document.querySelector('body').prepend(dropDownMenu);
}

function createDropDownMenu(tabAmount = 4, itemAmount = 4) {
    const dropDownMenu = document.createElement('div');
    dropDownMenu.classList.add('drop-down-menu');

    const navBar = document.createElement('div');
    navBar.classList.add('nav');
    for (let i = 1; i <= tabAmount; i++) {
        const tab = document.createElement('div');
        tab.classList.add('tab');
        tab.textContent = 'TAB';

        if (i == tabAmount) {
            tab.classList.add('trigger');

            tab.addEventListener('mouseover', () => {
                menu.classList.toggle('visible');
                menu.classList.toggle('invisible');
            });

            tab.addEventListener('mouseout', () => {
                if (menu.classList.contains('visible') && menu.matches(':hover')) return;

                menu.classList.toggle('visible');
                menu.classList.toggle('invisible');
            });
        }
    
        navBar.appendChild(tab);
    }

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');
    const menu = document.createElement('div');
    menu.classList.add('menu', 'invisible');
    for (let i = 1; i <= itemAmount; i++) {
        const item = document.createElement('div');
        item.classList.add('item');
        item.textContent = 'ITEM';

        menu.appendChild(item);
    }
    menu.addEventListener('mouseout', () => {
        if (menu.classList.contains('visible') && menu.matches(':hover')) return;

        menu.classList.toggle('visible');
        menu.classList.toggle('invisible');
    });
    menuContainer.appendChild(menu);

    dropDownMenu.appendChild(navBar);
    dropDownMenu.appendChild(menuContainer);

    return dropDownMenu;
}