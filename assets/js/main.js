$(document).ready(function(){
	$('.sidenav').sidenav();
	$('.tooltipped').tooltip();
	$(".dropdown-trigger").dropdown();
	$('.collapsible').collapsible();
	$('.modal').modal();
	$('.parallax').parallax();
	$('.scrollspy').scrollSpy();

	$('.slick-single-item').slick({
		dots: true,
		lazyLoad: 'ondemand',
		infinite: false
	});

	$('.slick-responsive').slick({
	dots: true,
	lazyLoad: 'ondemand',
	infinite: false,
	speed: 300,
	slidesToShow: 4,
	slidesToScroll: 4,
	responsive: [
		{
		breakpoint: 1024,
		settings: {
			slidesToShow: 3,
			slidesToScroll: 3,
			infinite: true,
			dots: true
		}
		},
		{
		breakpoint: 600,
		settings: {
			slidesToShow: 2,
			slidesToScroll: 2
		}
		},
		{
		breakpoint: 480,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		}
		}
	]
	});

	$('.slick-clientes').slick({
		dots: false,
		lazyLoad: 'ondemand',
		infinite: true,
		autoplay: true,
		autoplaySpeed: 2000,
		slidesToShow: 6,
		slidesToScroll: 3,
		responsive: [
		  {
			breakpoint: 1024,
			settings: {
			  slidesToShow: 5,
			  slidesToScroll: 3,
			  infinite: true,
			  dots: true
			}
		  },
		  {
			breakpoint: 600,
			settings: {
			  slidesToShow: 4,
			  slidesToScroll: 2
			}
		  },
		  {
			breakpoint: 480,
			settings: {
			  slidesToShow: 3,
			  slidesToScroll: 1
			}
		  }
		  // You can unslick at a given breakpoint now by adding:
		  // settings: "unslick"
		  // instead of a settings object
		]
	});
});