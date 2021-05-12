function toggleNav() {
  var menu = document.getElementById('menu');
  var menu_btn = document.getElementById('menu_btn')

  menu_btn.addEventListener('click', function() {
    menu.classList.toggle('nav-open');
  });
}
toggleNav();
