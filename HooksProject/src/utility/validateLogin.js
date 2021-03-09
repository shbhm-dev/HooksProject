export default function (values) {
  let errors = {};
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!values.email) {
    errors.email = 'email address is required';
  } else if (!re.test(values.email)) {
    errors.email = 'email address is invalid';
  }
  if (!values.password) {
    errors.password = 'password address is required';
  } else if (values.password.length < 10) {
    errors.password = 'password needs to be at least 10 characters ';
  }
  return errors;
}
