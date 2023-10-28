import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
formEl.addEventListener('input', throttle(onFormInput, 500));
formEl.addEventListener('submit', onFormSubmit);

let localStorageValue = JSON.parse(localStorage.getItem('feedback-form-state'));

function onFormInput(evt) {
  evt.preventDefault();
  const emailEl = formEl.elements.email.value;
  const messageEl = formEl.elements.message.value;
  const inputValue = {
    email: emailEl,
    message: messageEl,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(inputValue));
}

function onFormSubmit(evt) {
  evt.preventDefault();
  if (
    formEl.elements.email.value === '' ||
    formEl.elements.message.value === ''
  ) {
    return alert('Please fill in all the fields!');
  }
  localStorageValue = JSON.parse(localStorage.getItem('feedback-form-state'));
  console.log(localStorageValue);
  localStorage.clear();
  formEl.reset();
}

if (localStorageValue) {
  formEl.elements.email.value = localStorageValue.email;
  formEl.elements.message.value = localStorageValue.message;
}
