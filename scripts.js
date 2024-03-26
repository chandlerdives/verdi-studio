// ------ Accordion
var allPanels = $('.accordion > dd').hide();

	$('.accordion > dt').click(function() {
		allPanels.slideUp();

    $(this).filter('.open').removeClass('open').addClass('closing')
    $('.accordion > dt ').removeClass('open');
    $(this).not(".closing").addClass('open').next().slideDown();
    $('.accordion > dt').removeClass('closing');
    
    return false;
	});


// ------ Animate on scroll
AOS.init({
  offset: 250, // offset (in px) from the original trigger point
  delay: 100, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: true // whether animation should happen only once - while scrolling down
});


// ------ Hamburger Button
$('.hamburger-button').click(function(){
  $('.mobile-menu').slideToggle(100);
  $(this).toggleClass('active');
});

function myFunction(x) {
  x.classList.toggle("change");
}

// ------ Cookie Banner
document.addEventListener("DOMContentLoaded", () => {
  let cookiePopup = document.getElementById("cookiePopup");
  let cookieAccept = document.getElementById("cookieAccept");

  cookieAccept.addEventListener("click", function() {
      cookiePopup.style.display = "none";
      setCookie("cookieConsent", "true", 31);
  });

  if (!getCookie("cookieConsent")) {
      cookiePopup.style.display = "block";
  }
});

const setCookie = (name, value, days) => {
  let expires = "";
  if (days) {
      let date = new Date();
      date.setTime(date.getTime() + (days*24*60*60*1000));
      expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}

const getCookie = (name) => {
  let nameEQ = name + "=";
  let cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i];
      while (cookie.charAt(0) === ' ') {
          cookie = cookie.substring(1, cookie.length);
      }
      if (cookie.indexOf(nameEQ) === 0) {
          return cookie.substring(nameEQ.length, cookie.length);
      }
  }
  return null;
}


// ------ Typed.js Code
var typed = new Typed('#typed', {
  stringsElement: '#typed-strings',
  	typeSpeed: 30,
  	startDelay: 500,
  	backSpeed: 10,
  	backDelay: 1500,
  	smartBackspace: true,
  	loop: true,
  	loopCount: Infinity
  });





