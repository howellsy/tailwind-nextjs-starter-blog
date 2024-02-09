/* eslint-disable */
document.addEventListener("DOMContentLoaded", function(event) {
  const _first_name = 'input[name="FIELD_NAME"]';
  const _last_name = 'input[name="FIELD_NAME"]';
  const _email = 'input[name="FIELD_NAME"]';
  BreadButter.getProfile((profile)=> {
      if (profile && profile.first_name)
          document.querySelector(_first_name).value = profile.first_name;
      if (profile && profile.last_name)
          document.querySelector(_last_name).value = profile.last_name;
      if (profile && profile.email_address)
          document.querySelector(_email).value = profile.email_address;
  });
});