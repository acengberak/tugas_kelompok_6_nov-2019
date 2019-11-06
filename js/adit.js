$(document).ready(function () {
    $(window).scroll(function () {
        if ($(document).scrollTop() > 50) {
            $('nav').addClass('shrink');
        }
        else {
            $('nav').removeClass('shrink');
        }
    });
    $(window).scroll(function () {
        var positiontop = $(document).scrollTop();
        console.log(positiontop);
        if ((positiontop > 200) && (positiontop < 663)) {
            $("#sec-1").hide();
            $("#sec-1").slideDown('slow');
            $("#sec-1-text").hide();
            $("#sec-1-text").fadeIn('slow');
            $("#sec-1-desc1").hide();
            $("#sec-1-desc1").show('slow');
            $("#sec-1-desc2").hide();
            $("#sec-1-desc2").show('slow');
            $("#sec-1-desc3").hide();
            $("#sec-1-desc3").show('slow');
            $("#sec-1-desc4").hide();
            $("#sec-1-desc4").show('slow');
        }
        if ((positiontop > 663) && (positiontop < 1358)) {
            $("#port").hide();
            $("#port").show('slow');
        }
    });



});