jQuery(document).ready(function($) {
	init();
	
});

var fullpage, util;

util = {
	checkMobile: function(){
		var w = $(window).width();
		return (w <= 576) ? true : false;
	},
	checkTab: function(){
		var w = $(window).width();
		return (w <= 768) ? true : false;
	},
	reveal: function(){
		window.sr = ScrollReveal();
		sr.reveal('.reveal', 
			{
				duration: 1000 ,
				easing: 'ease',
				distance: '10px',
				viewFactor: 0.8,
				afterReveal: function (el) {
					if ($(el).find('video')){
						$(el).find('video').trigger('play');
					}
				}
			}
		);

		sr.reveal('.top-reveal', 
			{
				duration: 1000 ,
				origin: 'top',
				easing: 'ease',
				distance: '10px',
				viewFactor: 0.8,
			}
		);

		sr.reveal('.box', { 
			duration: 1500 ,
			easing: 'ease'
		}, 150);
	}
}

navbar = {
	hamburgerClick : function(){
		$(".hamburger").click(function(event) {
			$(this).toggleClass('is-active');
			$("#nav").fadeToggle('400')
		});
	},

	headerClick: function(){
		$(".header-click").click(function(event) {
			if (util.checkMobile() || util.checkTab()){
				$("#nav").fadeOut('400')
				$(".hamburger").removeClass('is-active')
			}
		});
	},

	click: function(){
		$('a[href^="#"]').click(function () {
		    $('html, body').animate({
		        scrollTop: $('[data-anchor-name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
		    }, 500);

		   	var href = $.attr(this, 'href');
        	window.location.hash = href;

		    return false;
		});
	}


}

fullpage = {
	init: function(){
		var anchor;
		anchor = [];
		this.namingAnchor(anchor);
	 	
		$('#fullpage').fullpage({
			scrollingSpeed: 1000,
			css3: true,
			scrollOverflow: false,
			anchors: anchor,
			verticalCentered: (util.checkMobile()) ? true : false,
			controlArrows: false,
			onLeave: function(index, nextIndex, direction) {
				var el,nextEl;
				el = $(this)
			    
		  	},
		  	afterLoad: function(anchorLink, index) {
		  		
		  	},
	  	 	afterRender: function () {
	  	 		 
			}
		})
	},

	namingAnchor: function(anchor){
		// naming section so we can access it using anchor
		$('.section').each(function(el, i) {
	 		anchor[el] = $(this).data('anchorName');
	 	});
	},
}

function init(){
	//fullpage.init()
	navbar.hamburgerClick()
	navbar.click();
	navbar.headerClick();
	util.reveal();
}