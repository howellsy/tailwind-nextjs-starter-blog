/* eslint-disable */
document.addEventListener("DOMContentLoaded", (event) => {
  const _name = 'input[name="FIELD_NAME"]';
  const _email = 'input[name="FIELD NAME"]';
  const _form_button = '#FORM_ID button[type=submit]';

  const loadForm = () => {
    const form_button = document.querySelector(_form_button);
      form_button.addEventListener('click', async (event) => {
          await identifyUser();
      });
  };
  
  const identifyUser = () => {
      return new Promise((resolve) => {
          let first_name = document.querySelector(_name).value.trim();
          let last_name = "";
          const email = document.querySelector(_email).value.trim();
          if (first_name.indexOf(' ') > -1) {
              last_name = first_name.substr(first_name.indexOf(' ') + 1);
              first_name = first_name.substr(0, first_name.indexOf(' '));
          }
          BreadButter.api.identifyUser(email, first_name, last_name, resolve);
      });
  };
  loadForm();
});