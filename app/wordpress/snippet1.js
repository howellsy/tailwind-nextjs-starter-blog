/* eslint-disable */
document.addEventListener("DOMContentLoaded", (event) => {
  const _first_name = 'input[name="FIELD_NAME"]';
  const _last_name = 'input[name="FIELD_NAME"]';
  const _email = 'input[name="FIELD_NAME"]';
  const _form_button = '#FORM_ID button[type=submit]';

  const loadForm = () => {
      const form_button = document.querySelector(_form_button);
      form_button.addEventListener('click', async (event) => {
          await identifyUser();
      });
  };
  
  const identifyUser = () => {
      return new Promise((resolve) => {
          const first_name = document.querySelector(_first_name).value;
          const last_name = document.querySelector(_last_name).value;
          const email = document.querySelector(_email).value;
          BreadButter.api.identifyUser(email, first_name, last_name, resolve);
      });
  };
  loadForm();
});