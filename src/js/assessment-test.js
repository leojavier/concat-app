$(document).ready(function () {
    var init = 1;
    $('body').css('background', '#111');
    var navStatus = 5;
    var section = ['PHYSICAL BODY', 'EMOTION AND MEANING', 'RELATIONSHIPS', 'TIME MANAGEMENT', 'WORK/CARRER', 'ECONOMIC/FINANCES', 'CONTRIBUTION'];
    var video = ['playeryHFHzfLrnSxT', 'playerlqudHxSWSoyF', 'playerZXuMGvbvmYIA', 'playerIbLLcWrsjfLg', 'playerGbOmydcksoiu', 'playerOzpzBuEXbcsw', 'playerpmNtoGXYpBbz'];
    $('.slide-labels-dis, .slider-labels').on('click', function (e) {e.stopImmediatePropagation();}); // Slider numbers not clickeable
   
    //jwplayer(video[0]).play();
        
    $('.slider').on({
        slide: function (e) {
            e.preventDefault();
            var value = $(e.target).val();
            $(e.target).parent().find('input').val(value);
        },
        set: function (e) {
            e.preventDefault();
            var value = $(e.target).val();
            $(e.target).parent().find('input').val(value);
        },
        change: function (e) {
            e.preventDefault();
            var value = $(e.target).val();
            $(e.target).parent().find('input').val(value);
        }

    });
    function isInteger(x) {
        return x % 1 === 0;
    }
    function changeSection(position) {
        position ? navStatus++ : navStatus--;
        var item = Math.floor(navStatus / 5);
        var videoItem=0;
        $('.nav-tabs-dektop ul li').removeClass('active');
        if (item <= 1) {
            $('.nav-tabs-dektop ul li:nth-child(1)').addClass('active');
            if (isInteger(navStatus / 5)) {
                Video[item - 1]();
            }
            
        } else {
            $('.nav-tabs-dektop ul li:nth-child(' + item + ')').addClass('active');
            if (isInteger(navStatus / 5) && navStatus < 40) {
                Video[item - 1]();
            }
        }
        $('.test-progress-mobile-label').html(section[item - 1]);
    }
    function stopVideos() {
        for (var i = 0; i < video.length; i++) {
            jwplayer(video[i]).stop();
        }
    }
    function loadModal(register) {
        if (navPrimary.hasClass('active')) {
            navPrimary.removeClass('active');
            navToggleIcon.toggleClass('fa-navicon').toggleClass('fa-times');
            login.toggleClass('active');
        } else if (login.hasClass('active')) {
            login.removeClass('active');
            body.toggleClass('nav-active');
            overlay.toggleClass('active');
        } else {
            login.toggleClass('active');
            body.toggleClass('nav-active');
            overlay.removeClass('opt-in').toggleClass('active');
        }
        if (register) {
            $('#login').find('input').css({ 'margin-bottom': '10px', 'font-size': '1em' });
            $('.signUp-fields').fadeIn();
            $('#member').show();
            $('#no-member, .non-member').hide();
    
        } else {
            $('.signUp-fields').fadeOut(0);
            $('#login').find('input').css({ 'margin-bottom': '1.5em', 'font-size': '1.5em' });
            $('#member, .non-member').hide();
            $('#no-member').show();
               
        }
    }
    $('#login-btn').on('click', function () {
        $('#login').find('input').css({ 'margin-bottom': '1.5em', 'font-size': '1.5em' });
        $('#he-register-form').hide();
        $('#he-login-form').show();
        status = false;
        loadModal(false);
        $("#login-submit").attr('data-source', '/wheel_of_life/results');
    });
    $('#register-btn').on('click', function () {
        $('.member a').trigger('click');
        $('#login').find('input').css({ 'margin-bottom': '10px', 'font-size': '1em' }); 
        $('#he-register-form').show();
        $('#he-register-form input').show();
        $('#he-login-form').hide();
        status = false;
        $("#register-submit").attr('data-source', '/wheel-of-life/welcome');
    });
    $('#submit-form-btn').on('click', function (e) {
        e.preventDefault();
        var postData = $("#identity-test-form").serializeArray();
        var formURL = $("#identity-test-form").attr("action");
        $.ajax(
        {
            url: formURL,
            type: "POST",
            data: postData,
            success: function (data, textStatus, jqXHR) {
                window.location = "/wheel-of-life/results"
              
            },
            error: function (jqXHR, textStatus, errorThrown) {
                //if fails      
                console.log('error');
            }
        });
        e.preventDefault(); //STOP default action
        e.unbind(); //unbind. to stop multiple form submit.
    });

    $('.previous-question').on('click', function () {
        stopVideos();
        owl.prev();
        var actualValue = $('.progress-bar').data('progress');
        $('.progress-bar').setProgress(actualValue - questionStep);
        changeSection(false);// Control navigationnstatus
    });
    $('.next-question').on('click', function () {
        if (init == 1) {
            owl = $(".owl-carousel").data('owlCarousel');
            init++;
        }
        //owl.next();
        stopVideos();
        var actualValue = $('.progress-bar').data('progress');
        $('.progress-bar').setProgress(actualValue + questionStep);
        changeSection(true);// Control navigationnstatus
    });
    
});