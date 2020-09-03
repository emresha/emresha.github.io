function continueReg() {
const buttonReg = document.querySelector('.continue-reg');
const inputs = document.querySelectorAll('.hidden')
const fFields = document.querySelectorAll('.first-fields')
if ((fFields[0].value === '') || (fFields[1] === '')) {
  if (fFields[0].value === '') {
    fFields[0].style.borderColor = '#fe9477';
  }
  if (fFields[1].value === '') {
    fFields[1].style.borderColor = '#fe9477';
  }
}
else {
  buttonReg.style.opacity = '1';
  buttonReg.style.cursor = 'pointer'
  for (let i=0; i < 2; i++) {
    fFields[i].style.borderColor = '#6b6b6b';
  }
  for (let i=0; i < 4; i++) {
    inputs[i].classList.remove('hidden')
  }
  buttonReg.classList.add('hidden');
  }
}
