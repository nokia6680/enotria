"use strict";

function validationTel() {
  var tel = document.getElementById('tel-reg').value;
  var telInput = document.getElementById('tel-reg');
  var textTel = document.querySelector('.form__error--tel, .cabinet__error--tel');
  var patternTel = /^((\+7)[\- ]?)?(\(?\d{3,4}\)?[\- ]?)?[\d\-]{7,10}$/;

  if (tel.match(patternTel)) {
    telInput.classList.remove('error');
    telInput.classList.add('correct');
  } else {
    telInput.classList.add('error');
    telInput.classList.remove('correct');
    textTel.innerHTML = "Телефон указан неверно. Должно быть 11 цифр, например: +7 (900) 800-70-60";
  }

  if (tel == '') {
    telInput.classList.remove('error');
    telInput.classList.remove('correct');
    textTel.innerHTML = "";
  }

  if (tel == '+') {
    telInput.classList.remove('error');
    telInput.classList.remove('correct');
    textTel.innerHTML = "";
  }

  if (tel == '+7 (') {
    telInput.classList.remove('error');
    telInput.classList.remove('correct');
    textTel.innerHTML = "";
  }
}

;

function validationMail() {
  var email = document.getElementById('email-reg').value;
  var emailInput = document.getElementById('email-reg');
  var textMail = document.querySelector('.form__error--mreg, .cabinet__error--mreg');
  var pattern = /^[^ ]+@[^ ]+\.[a-z]{1,3}$/;

  if (email.match(pattern)) {
    emailInput.classList.remove('error');
    emailInput.classList.add('correct');
  } else {
    emailInput.classList.add('error');
    emailInput.classList.remove('correct');
    textMail.innerHTML = "Поле email заполнено не верно. Оно должно содержать латинские буквы и @";
  }

  if (email == '') {
    emailInput.classList.remove('error');
    emailInput.classList.remove('correct');
    textMail.innerHTML = "";
  }
}

function validationMailEnter() {
  var emailE = document.getElementById('email').value;
  var emailEInput = document.getElementById('email');
  var textMailE = document.querySelector('.form__error--mail, .cabinet__error--mreg');
  var pattern = /^[^ ]+@[^ ]+\.[a-z]{1,3}$/;

  if (emailE.match(pattern)) {
    emailEInput.classList.remove('error');
    emailEInput.classList.add('correct');
  } else {
    emailEInput.classList.add('error');
    emailEInput.classList.remove('correct');
    textMailE.innerHTML = "Поле email заполнено не верно. Оно должно содержать латинские буквы и @";
  }

  if (emailE == '') {
    emailEInput.classList.remove('error');
    emailEInput.classList.remove('correct');
    textMailE.innerHTML = "";
  }
}

function validationName() {
  var name = document.getElementById('name').value;
  var nameInput = document.getElementById('name');
  var textName = document.querySelector('.form__error--name, .cabinet__error--name');
  var pattern = /^[а-яА-ЯёЁa-zA-Z]+$/;

  if (name.match(pattern)) {
    nameInput.classList.remove('error');
    nameInput.classList.add('correct');
  } else {
    nameInput.classList.add('error');
    nameInput.classList.remove('correct');
    textName.innerHTML = "Допускается использование только кириллицы";
  }

  if (name == '') {
    nameInput.classList.remove('error');
    nameInput.classList.remove('correct');
    textName.innerHTML = "";
  }
}

function validationSurname() {
  var surname = document.getElementById('surname').value;
  var surnameInput = document.getElementById('surname');
  var textSur = document.querySelector('.form__error--surname, .cabinet__error--surname');
  var pattern = /^[а-яА-ЯёЁa-zA-Z]+$/;

  if (surname.match(pattern)) {
    surnameInput.classList.remove('error');
    surnameInput.classList.add('correct');
  } else {
    surnameInput.classList.add('error');
    surnameInput.classList.remove('correct');
    textSur.innerHTML = "Допускается использование только кириллицы";
  }

  if (surname == '') {
    surnameInput.classList.remove('error');
    surnameInput.classList.remove('correct');
    textSur.innerHTML = "";
  }
}

function validationPatr() {
  var patr = document.getElementById('patronymic').value;
  var patrInput = document.getElementById('patronymic');
  var textPatr = document.querySelector('.form__error--patronymic, .cabinet__error--patronymic');
  var pattern = /^[а-яА-ЯёЁa-zA-Z]$/;

  if (patr.match(pattern)) {
    patrInput.classList.remove('error');
    patrInput.classList.add('correct');
  } else {
    patrInput.classList.remove('correct');
    patrInput.classList.add('error');
    textPatr.innerHTML = "Допускается использование только кириллицы";
  }

  if (patr == '') {
    patrInput.classList.remove('error');
    patrInput.classList.remove('correct');
    textPatr.innerHTML = "";
  }
}