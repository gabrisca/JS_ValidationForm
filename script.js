// option 1
// let username = document.getElementById('username');
// let email = document.getElementById('email');
// let password = document.getElementById('password');

// option 2
let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let username = id('username'),
  email = id('email'),
  password = id('password'),
  form = id('form'),
  errorMsg = classes('error'),
  successIcon = classes('success-icon'),
  failureIcon = classes('failure-icon');

// errorMsg = ['error', 'error', 'error'];
// errorMsg[1].innerHTML = 'errore'; // it will select the class error with index 1 (form input mail)

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // ! I replaced it with a function
  // if (username.value === '') {
  //   errorMsg[0].innerHTML = 'User Name Cannot be blank';
  //   failureIcon[0].style.opacity = '1';
  //   successIcon[0].style.opacity = '0';
  // } else {
  //   errorMsg[0].innerHTML = '';
  //   successIcon[0].style.opacity = '1';
  //   failureIcon[0].style.opacity = '0';
  // }
  checkValidation(username, 0, 'User Name Cannot be blank');
  checkValidation(email, 1, 'Email Cannot be blank');
  checkValidation(password, 2, 'Password Cannot be blank');

})

let checkValidation = (id, index, msg) => {
  if (id.value.trim() === '') {
    errorMsg[index].innerHTML = msg;
    failureIcon[index].style.opacity = '1';
    successIcon[index].style.opacity = '0';
  } else {
    errorMsg[index].innerHTML = '';
    successIcon[index].style.opacity = '1';
    failureIcon[index].style.opacity = '0';
  }
}