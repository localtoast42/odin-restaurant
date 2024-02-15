function createMenu() {
    const contentDiv = document.querySelector('#content');

    const headline = document.createElement('h1');
    headline.textContent = 'This is the menu.';

    const mainText = document.createElement('p');
    mainText.textContent = 'There will be food.';

    contentDiv.appendChild(headline);
    contentDiv.appendChild(mainText);
}

export { createMenu };