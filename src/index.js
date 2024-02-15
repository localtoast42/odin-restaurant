import { createHome } from "./home";
import { createMenu } from "./menu";
import { createContact } from "./contact";

const nav = document.querySelector('nav');
const contentDiv = document.querySelector('#content');

const homeNavItem = document.querySelector('#home');
const menuNavItem = document.querySelector('#menu');
const contactNavItem = document.querySelector('#contact');

homeNavItem.addEventListener('click', () => {
    contentDiv.textContent = ''
    createHome();
});

menuNavItem.addEventListener('click', () => {
    contentDiv.textContent = ''
    createMenu();
});

contactNavItem.addEventListener('click', () => {
    contentDiv.textContent = ''
    createContact();
});

createHome();