var projects = $("#projects");
$("#scroll_button").on("click", function (){
	$("body").animate({scrollTop: projects.offset().top}, 800, 'swing');
});
