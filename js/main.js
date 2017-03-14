$(document).ready(function(){
	$('body').hide().fadeIn('slow');
	var txt = $(".introText").text();
	if($("body").attr("id") !== "day1" || sessionStorage.getItem("firstVisit") === null){
		sessionStorage.setItem("firstVisit", "1");
		$(".introText").text("");
		$(".introText").removeClass("hidden");
		$(".introText").typed({
			// Waits 1000ms after typing "First"
			strings: [txt], showCursor: false, typeSpeed: 10, callback: function() {
				//show the button
				$("#mainBtn").removeClass("hidden");
				$("form").removeClass("hidden");
				$(".tTip").removeClass("hidden");
			}});
		}
		else{
			$(".introText").removeClass("hidden");
			$("#mainBtn").removeClass("hidden");
			$("form").removeClass("hidden");
			$(".tTip").removeClass("hidden");
			}
	});
$("body").on('click', '#mainBtn', function () {
	//$(".firstScreen").addClass("zoomed");
	window.location = "level1.html";
	});
$('body').tooltip({
    placement:'top',
    selector: '[data-toggle=tooltip]'
	});
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});			
	