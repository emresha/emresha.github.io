
document.querySelector('.changeThemeIcon').onclick = function () {
  let helpMEPLEASE = document.querySelector('.changeThemeIcon');
  helpMEPLEASE.classList.toggle('light')
  document.querySelector('.order').classList.toggle('dark');
  let a = document.querySelectorAll('div');
  let i;
  for (i = 0; i < a.length; i++) {
    a[i].toggle('dark');
  }
  let b = document.querySelectorAll('.yeah')
  for (i = 0; i < b.length; i++) {
    b[i].toggle('dark');
  }
  document.querySelector('a').classList.toggle('dark');
  document.querySelector('.login-popup').classList.toggle('dark');

}
