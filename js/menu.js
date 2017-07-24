'use strict';

(function() {
  var menu = document.getElementById('site-navigation');
  menu.classList.remove('navigation--no-js');
  var navToggle = document.querySelector('.nav-toggle');

  navToggle.addEventListener('click', function(){
    if (menu.classList.contains('navigation--closed')) {
      menu.classList.remove('navigation--closed');
      menu.classList.add('navigation--opened');
    } else {
      menu.classList.add('navigation--closed');
      menu.classList.remove('navigation--opened');
    }
  });

})();
