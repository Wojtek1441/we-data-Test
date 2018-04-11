//Hamburger Menu
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


//Fixed navigation
$(document).ready(function(){
  $(window).on("scroll", function() {
      if ($(this).scrollTop() > 100) {
	    $(".top").css("background" , "#fff");
      $(".logo").css("color" , "#ee0651");
      $("#menu li").css("color" , "#ee0651");
	  }
	  else {
      $(".top").css("background" , "#ee0651");
      $(".logo").css("color" , "#fff");
      $("#menu li").css("color" , "#fff");

	  }
  });
});


//Validation- check if fields are empty
$('form').submit(function () {

    // Get the Login Name value and trim it
    var name = $.trim($('#log').val());

    // Check if empty of not
    if (name  === '') {
        alert('Please Complete All Fields.');
        return false;
    }
});


//Scroll to top
