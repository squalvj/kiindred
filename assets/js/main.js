jQuery(document).ready(function($) {
	init();
});

var fullpage, util;

util = {
	checkMobile: function(){
		var w = $(window).width();
		return (w <= 576) ? true : false;
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
	}
}

function init(){
	//fullpage.init()
}