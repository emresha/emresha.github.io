function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false );
    xmlHttp.send( null );
    return xmlHttp.responseText;
}
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function updateCases() {
  let a = httpGet('https://api.apify.com/v2/key-value-stores/1brJ0NLbQaJKPTWMO/records/LATEST?disableRedirect=true'); // get covid information
  let b = JSON.parse(a); // parsing JSON so that we can get the info
  let allCases = numberWithCommas(b.infected);
  let toShow = document.querySelector('.cases');
  toShow.textContent = allCases;
  let newCasesShow = document.createElement('sub')
  let cases = document.createElement('sub')
  cases.classList.add('theCases');
  cases.textContent = '   случаев'
  toShow.append(cases);
}
let repeat = setInterval(updateCases(), 10000);
// if you are reading this then what are you doing?
