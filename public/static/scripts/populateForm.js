/* eslint-disable */
console.log('🚨 inside poopulateForm.js');
const _first_name = 'input[name="firstName"]';
const _last_name = 'input[name="lastName"]';
const _email = 'input[name="email"]';

if (document.readyState !== 'loading') {
  BreadButter.getProfile((profile) => {
    if (profile && profile.first_name)
        document.querySelector(_first_name).value = profile.first_name;
    if (profile && profile.last_name)
        document.querySelector(_last_name).value = profile.last_name;
    if (profile && profile.email_address)
        document.querySelector(_email).value = profile.email_address;
  });
} else {
  document.addEventListener("DOMContentLoaded", (event) => {
    BreadButter.getProfile((profile)=> {
      if (profile && profile.first_name)
          document.querySelector(_first_name).value = profile.first_name;
      if (profile && profile.last_name)
          document.querySelector(_last_name).value = profile.last_name;
      if (profile && profile.email_address)
          document.querySelector(_email).value = profile.email_address;
    });
  });
}
  