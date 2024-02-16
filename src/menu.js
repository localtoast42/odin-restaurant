function createMenu() {
    const contentDiv = document.querySelector('#content');

    const containerDiv = document.createElement('div');
    containerDiv.classList.add('container');

    const headline = document.createElement('h1');
    headline.textContent = 'This is the menu.';

    const mainText = document.createElement('p');
    mainText.textContent = 'There will be food.';

    containerDiv.appendChild(headline);
    containerDiv.appendChild(mainText);
    contentDiv.appendChild(containerDiv);
}

export { createMenu };