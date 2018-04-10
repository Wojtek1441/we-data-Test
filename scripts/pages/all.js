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
	  if (scroll > 61) {
	    $(".top").css("background" , "#fff");
      $(".logo").css("color" , "#ee0651");
      $("#menu li").css("color" , "#ee0651");
	  }
	  else{
		  $(".top").css("background" , "none");
      $(".logo").css("color" , "#fff");
      $("#menu li").css("color" , "#fff");

	  }
  });
});

//Carousel
$('.multiple-items').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3
});
