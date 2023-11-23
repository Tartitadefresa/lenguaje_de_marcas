document.documentElement.setAttribute("data-theme", "dark");

$('.tdnn').click(function () {
  $(".moon").toggleClass('sun');
  $(".tdnn").toggleClass('day');

  if (document.documentElement.getAttribute("data-theme") === "light") {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
});