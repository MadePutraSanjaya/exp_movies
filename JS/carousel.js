var couter = 1;
setInterval(function() {
  document.getElementById('radio' + couter).checked = true;
  couter++;
  if(couter > 3) {
    couter = 1;
  }
}, 5000);;