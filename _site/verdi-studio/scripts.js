$(document).ready(function(){
  $('.hamburger').click(function() {
    $('nav').toggleClass('show');
    $('.hamburger').toggleClass('fix');
  });
