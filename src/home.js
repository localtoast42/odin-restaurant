function createHome() {
    const contentDiv = document.querySelector('#content');

    const headline = document.createElement('h1');
    headline.textContent = 'This is a really good restaurant.';

    const mainText = document.createElement('p');
    mainText.textContent = 'No, really, this restaurant is really, really good.';

    contentDiv.appendChild(headline);
    contentDiv.appendChild(mainText);
}

export { createHome };

