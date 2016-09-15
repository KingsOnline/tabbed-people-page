$(document).ready(function() {

	openTab(readUrlAnchor());

    $('.tabs .tab-links a').on('click', function(e)  {
        var currentAttrValue = $(this).attr('href');
 		console.log($(this));
        // Show/Hide Tabs
        $('.tabs ' + currentAttrValue).show().siblings().hide();
 
        // Change/remove current tab to active
        $(this).parent('li').addClass('active').siblings().removeClass('active');
 
        e.preventDefault();

        //window.history.pushState('page2', 'Title', '/page2.php');
    });

    $('.hotspot').on('click', function(e)  {
    	openTab('#' + this.id)
    });

    $('.hamburger').on('click', function(e)  {
    	if($('.tab-links').hasClass('visible')) {
    		$('.tab-links').removeClass('visible');
    		$('.hamburger').removeClass('expanded');
    	} else {
    		$('.tab-links').addClass('visible');
    		$('.hamburger').addClass('expanded');
    	}
    });

    $('.tab').on('click', function(e)  {
		$('.tab-links').removeClass('visible');
		$('.hamburger').removeClass('expanded');
    });

	resize();
});


$(window).resize(function(){
	resize();
});    

function resize() {
	 if($(window).width() < 750){
		  $('.tab-links').removeClass('visible').addClass('mobile');
		  $('.hamburger').addClass('visible');
 	} else {
		  $('.tab-links').addClass('visible').removeClass('mobile');
		  $('.hamburger').removeClass('visible');
 	}
}

function openTab(url){
	if ($(url).length > 0) {
		console.log($(url));
   		 $('.tab-content').find(url).show().siblings().hide();
		$('.tab-links').find(url).parent('li').addClass('active').siblings().removeClass('active');
	} else {
	 	$('.tab-content').find('#tab1').show().siblings().hide();
		$('.tab-links').find('#tab1').parent('li').addClass('active').siblings().removeClass('active');	
	}
}

function readUrlAnchor(){
	var url = window.location.href;
	if(url.indexOf('#') == -1) return;
	var section = url.substring(url.indexOf('#'));
	return section;
}