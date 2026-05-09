'use strict';

// write your code here
const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error(`Promise was rejected!`));
  }, 3000);
});

promise1.then((message) => {
  const div = document.createElement('div');

  div.classList.add('message');
  div.textContent = message;
  document.body.appendChild(div);
});

promise2.catch((message) => {
  const div = document.createElement('div');

  div.classList.add('message', 'error-message');
  div.textContent = message;
  document.body.appendChild(div);
});
