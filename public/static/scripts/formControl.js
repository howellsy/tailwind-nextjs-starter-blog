/* eslint-disable */
console.log('🚨 inside formControl.js');
const firstName = 'input[name="firstName"]';
const lastName = 'input[name="lastName"]';
const email = 'input[name="email"]';
const submit = '#contactForm button[type=submit]';

const loadForm = ()=> {
    const submitButton = document.querySelector(submit);
    submitButton.addEventListener('click', async (event) => {
        event.preventDefault();
        console.log('🚨 submit button clicked');
        await identifyUser();
    });
};

const identifyUser = () => {
    return new Promise((resolve) => {
        const firstNameInput = document.querySelector(firstName).value;
        const lastNameInput = document.querySelector(lastName).value;
        const emailInput = document.querySelector(email).value;
        console.log('🚨 about to call identifyUser');
        console.log('🚨 firstNameInput', firstNameInput);
        console.log('🚨 lastNameInput', lastNameInput);
        console.log('🚨 emailInput', emailInput);
        BreadButter.api.identifyUser(emailInput, firstNameInput, lastNameInput, resolve);
    });
};

if (document.readyState !== 'loading') {
  loadForm();
} else {
  document.addEventListener("DOMContentLoaded", (event) => {
    loadForm();
  });
}
  