//Fixed navigation changes colours when scrolling
$(function() {
    var header = $(".top");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 60) {
            header.addClass("top2");
        } else {
            header.removeClass("top2");
        }
    });
});


//Validation- check if fields are empty
document.addEventListener('DOMContentLoaded', init, false);
function init() {
  function message () {
    alert("Please fill All Fields");
  }
  var button = document.getElementById('button');
  button.addEventListener('click', message, true);
}

//Scroll to top
