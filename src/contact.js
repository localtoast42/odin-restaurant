function createContact() {
    const contentDiv = document.querySelector('#content');

    const containerDiv = document.createElement('div');
    containerDiv.classList.add('container');

    const headline = document.createElement('h1');
    headline.textContent = 'Contact us.';

    const mainText = document.createElement('p');
    mainText.textContent = 'Here is our contact info.';

    containerDiv.appendChild(headline);
    containerDiv.appendChild(mainText);
    contentDiv.appendChild(containerDiv);
}

export { createContact };