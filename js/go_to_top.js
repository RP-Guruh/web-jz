  $(document).ready(function(){
    
    $("#back-to-top").hide();
     
     $(window).scroll(function () {
            $("#back-to-top").show();
            if ($(this).scrollTop() > 50) {
                $('#back-to-top').fadeIn('slow');
            } else {
                $("#back-to-top").hide();
                $('#back-to-top').fadeOut('slow');
            }
        });
        // scroll body to 0px on click
        $('#back-to-top').click(function () {
            $('#back-to-top').tooltip('hide');
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });

        $('#back-to-top').tooltip('show');

});





