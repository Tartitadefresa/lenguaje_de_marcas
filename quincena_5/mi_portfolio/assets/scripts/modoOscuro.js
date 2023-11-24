document.documentElement.setAttribute("data-theme", "dark"); //Configura inicialmente el atributo data-theme del elemento raíz (html en este caso) en "dark". Esto indica que el tema predeterminado de la página es oscuro

$('.tdnn').click(function () {
  $(".moon").toggleClass('sun');
  $(".tdnn").toggleClass('day');

  if (document.documentElement.getAttribute("data-theme") === "light") {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
});