/* eslint-disable */
document.addEventListener("DOMContentLoaded", function(event) {
  const _name = 'input[name="FIELD_NAME"]';
  const _email = 'input[name="FIELD NAME"]';
  const _form_button = 'FORM_ID button[type=submit]';

  let loadForm = ()=> {
      let form_button = document.querySelector('FORM_ID button[type=submit]');
      form_button.addEventListener('click', async function(event) {
          await identifyUser();
      });
  };
  
  let identifyUser = () => {
      return new Promise((resolve) => {
          let first_name = document.querySelector(_name).value.trim();
          let email = document.querySelector(_email).value.trim();
          let last_name = "";
          if (first_name.indexOf(' ') > -1) {
              last_name = first_name.substr(first_name.indexOf(' ') + 1);
              first_name = first_name.substr(0, first_name.indexOf(' '));
          }
          BreadButter.api.identifyUser(email, first_name, last_name, function(){
              resolve();
          });
      });
  };
  loadForm();
});