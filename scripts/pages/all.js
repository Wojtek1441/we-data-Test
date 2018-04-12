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
var form = document.querySelector('#form');
form.addEventListener('submit', function (x) {
  x.preventDefault();
  alert('Please Complete All Fields');
}, false);
form.submit();
