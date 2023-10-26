import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
formEl.addEventListener('input', throttle(onFormInput, 500));

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

const targetValue = JSON.parse(localStorage.getItem('feedback-form-state'));
if (targetValue) {
  formEl.elements.email.value = targetValue.email;
  formEl.elements.message.value = targetValue.message;
}
