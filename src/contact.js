function createContact() {
    const contentDiv = document.querySelector('#content');

    const headline = document.createElement('h1');
    headline.textContent = 'Contact us.';

    const mainText = document.createElement('p');
    mainText.textContent = 'Here is our contact info.';

    contentDiv.appendChild(headline);
    contentDiv.appendChild(mainText);
}

export { createContact };