var allPanels = $('.accordion > dd').hide();

	$('.accordion > dt').click(function() {
		allPanels.slideUp();

    $(this).filter('.open').removeClass('open').addClass('closing')
    $('.accordion > dt ').removeClass('open');
    $(this).not(".closing").addClass('open').next().slideDown();
    $('.accordion > dt').removeClass('closing');
    
    return false;
	});

  // Animate on scroll
 AOS.init({
  offset: 250, // offset (in px) from the original trigger point
  delay: 100, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: true // whether animation should happen only once - while scrolling down
});


// Typed.js Code
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


  $('.slider-container').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    dots: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });


// hamburger button
  $('.hamburger-button').click(function(){
    $('.mobile-menu').slideToggle(100);
    $(this).toggleClass('active');
  });
  
  function myFunction(x) {
    x.classList.toggle("change");
  }



