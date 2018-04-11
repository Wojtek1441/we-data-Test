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
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if ($(window).width() > 762,scroll > 61) {
	    $(".top").css("background" , "#fff");
      $(".logo").css("color" , "#ee0651");
      $("#menu li").css("color" , "#ee0651");
	  }
    else if ($(window).scroll > 0) {
      $(".top").css("background" , "#green");
      $(".logo").css("color" , "yellow");
      $("#menu li").css("color" , "#ee0651");
    }
	  else {
      $(".top").css("background" , "#ee0651");
      $(".logo").css("color" , "#fff");
      $("#menu li").css("color" , "#fff");

	  }
  });
});
