$(document).ready(function() {
	$(".show_sidebar").on( "click", function() {
		$(".sidebar").toggleClass("sidebar_mobile");
		$(".show_sidebar").css('display', 'none');
		$(".close_sidebar").css('display', 'block');
	});

	$(".close_sidebar").on( "click", function() {
		$(".sidebar").toggleClass("sidebar_mobile");
		$(".close_sidebar").css('display', 'none');
		$(".show_sidebar").css('display', 'block');
	});

	$(".title_expand").on( "click", function() {
		$(this).next().toggleClass('show_expand');
	});
});