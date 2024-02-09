document.addEventListener("DOMContentLoaded", function(event) {
  const _first_name = 'input[name="FIELD_NAME"]';
  const _last_name = 'input[name="FIELD_NAME"]';
  const _email = 'input[name="FIELD_NAME"]';
  const _form_button = 'FORM_ID button[type=submit]';

  let loadForm = ()=> {
      let form_button = document.querySelector('FORM_ID button[type=submit]');
      form_button.addEventListener('click', async function(event) {
          await identifyUser();
      });
  };
  
  let identifyUser = () => {
      return new Promise((resolve) => {
          let first_name = document.querySelector(_first_name).value;
          let last_name = document.querySelector(_last_name).value;
          let email = document.querySelector(_email).value;
          BreadButter.api.identifyUser(email, first_name, last_name, () => {
              resolve();
          });
      });
  };
  loadForm();
});