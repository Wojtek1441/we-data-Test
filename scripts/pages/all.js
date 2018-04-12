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
document.getElementById("button").addEventListener("click", validateForm);

function validateForm() {
    var x = document.forms["form"]["firstname"].value;
	var x = document.forms["form"]["lastname"].value;
	var x = document.forms["form"]["message"].value;
    if (x == "") {
        alert("All Fields must be filled out");
        return false;
    }
}

//Scroll to top
