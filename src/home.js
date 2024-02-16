function createHome() {
    const contentDiv = document.querySelector('#content');

    const containerDiv = document.createElement('div');
    containerDiv.classList.add('container');

    const headline = document.createElement('h1');
    headline.textContent = 'This is a really good restaurant.';

    const mainText = document.createElement('p');
    mainText.textContent = 'No, really, this restaurant is really, really good.';

    containerDiv.appendChild(headline);
    containerDiv.appendChild(mainText);
    contentDiv.appendChild(containerDiv);
}

export { createHome };

