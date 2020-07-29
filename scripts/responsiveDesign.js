function checkWidth(){
  if(window.innerWidth !== undefined && window.innerHeight !== undefined) {
    var w = window.innerWidth;
    var h = window.innerHeight;
  }
  else {
    var w = document.documentElement.clientWidth;
    var h = document.documentElement.clientHeight;
  }
  if (w < 500) {
    document.querySelector('.order').style.flexFlow = 'column nowrap';
  }
  else {
    document.querySelector('.order').style.flexFlow = "row nowrap";
  }
}
