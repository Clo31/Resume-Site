(function(){
  var y = document.querySelectorAll('#year');
  var now = new Date().getFullYear();
  y.forEach(function(el){ el.textContent = now; });
})();