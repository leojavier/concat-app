$(document).ready(function () {
    var status = true;
    var resetPassStatus = false;
    var controller = "/login/step1"
    var step = 1;

    function changePass(e) {
        $('#change-password-submit').hide();
        $('.change-password-submit-wrapper').append('<img id="loader" style="width: 25px;" src="Content/images/page-loader.gif" />');

        var postData = $("#password-change-form").serializeArray();

        $.ajax({
            url: "/home/ChangePassword",
            type: "POST",
            data: postData,
            success: function (data, textStatus, jqXHR) {
                //data: return data from server
                if (data.Result) {
                    $('#change-error').html('');
                    window.location = '/';
                }
                else {
                    $('#change-error').html(data.Message);
                    $('#change-password-submit').show();
                }

                $('#loader').remove();
            },
            error: function (jqXHR, textStatus, errorThrown) {
                //if fails      
                console.log('error');
            }
        });
    }
    $('#password-change-form').keypress(function (e) {
        if (e.which == 13) {
            $('#change-password-submit').trigger('click');
        }
    });
    $('#change-password-submit').on('click', function (e) {
        changePass(e);
    });


    $('#password-changed-msg .email-btn').on('click', function () {
        $('#password-changed-msg').hide();
        $('.member-toggle').trigger('click');
        $('.forgot-password-link').trigger('click');
    });

    $('.forgot-password-link, .back-to-login').on('click', function () {
        if (!resetPassStatus) {
            $('#login-next').val('RESET PASSWORD');
            controller = '/login/forgotpassword';
            resetPassStatus = true;
            $('.non-member').hide();
            $('.back-to-login').css('display', 'block');
        }else{
            $('#login-next').val('NEXT');
            controller = '/login/step1';
            $('.non-member').show();
            $('.back-to-login').css('display', 'none');
            resetPassStatus = false;
        }
        if (step = 2) {
            $('.login-step-1').show();
            $('.login-step-2').hide();
            step = 1;
        }
        
    });

    $('input').css('text-transform', 'none');

    // Display the appropriate form, based on user interaction
    $('.non-member-toggle').on('click', function () {
        $('#loader').remove();
        if (status) {
            $('#login').find('input').css({ 'margin-bottom': '10px', 'font-size': '1em' });
            $('#he-register-form').show();
            $('#he-login-form').hide();
            status = false;
        } else {
            $('#login').find('input').css({ 'margin-bottom': '1.5em', 'font-size': '1.5em', 'margin' : 'auto' });
            $('#he-register-form').hide();
            $('#he-login-form').show();
            status = true;
        }
    });

    // Step 1 of the 2 part log-in
    $('#login-next').on('click', function () {
        $('#login-next').hide();
        $('.submit-btn-wrapper.login-step-1').append('<img id="loader" style="width: 25px;" src="../Content/images/page-loader.gif" />');
        var postData = $("#login-form").serializeArray();
        
        $.ajax({
            url: controller,
            type: "POST",
            data: postData,
            success: function (data, textStatus, jqXHR) {
                //data: return data from server
                if (data.Result) {
                    $('#login-error').html('');
                    $('#login-form-email-label').html($('#LoginUsername').val());
                    $('.login-step-1').hide();
                    
                    if (controller == "/login/forgotpassword") {
                        $('#password-change-email-label').html($('#LoginUsername').val());
                        $('#change-password-submit').show();
                        $('#password-changed-msg').fadeIn(300);
                    } else {
                        $('.login-step-2').show();
                        step = 2;
                    }
                }
                else
                {
                    $('#login-form-error').html(data.Message);
                    $('#login-next').show();
                }
                
                $('#loader').remove();
            },
            error: function (jqXHR, textStatus, errorThrown) {
                //if fails      
                console.log('error');
            }
        })
    });

    // Reset the modal to login form
    $('.member-toggle').on('click', function () {
        $('#loader').remove();
        if (status) {
            $('#login').find('input').css({ 'margin-bottom': '1.5em', 'font-size': '1.5em' });
            $('#he-register-form').hide();
            $('#he-login-form').show();
            $('.login-step-2').hide();
            $('.login-step-1').show();
            $('#LoginUsername').val('');
            status = true;
        } else {
            $('#login').find('input').css({ 'margin-bottom': '10px', 'font-size': '1em' });
            $('#he-register-form').show();
            $('#he-login-form').hide();
            status = false;
        }

        $('#login-error').html('');
    });

    // Close the modal dialog
    $('.close-login').on('click', function () {
        if (!status) {
            $('#login').find('input').css({ 'margin-bottom': '1.5em', 'font-size': '1.5em' });
            $('#he-register-form').show();
            $('#he-login-form').hide();
            status = true;
        }
    });

    // Submit login form when enter is pressed on step 1
    $('#LoginUsername').keypress(function (e) {
        if (e.which == 13) 
            $('#login-next').trigger('click');
    });

    // Submit login form when enter is pressed on step 2
    $('#LoginPassword').keypress(function (e) {
        if (e.which == 13) 
            $('#login-submit').trigger('click');
    });

    // Submit registration form when enter is pressed
    $('#register-form').keypress(function (e) {
        if (e.which == 13) {
            $('#register-submit').trigger('click');
        }
    });

    //Submit the answers
    function submitAnswers(callback, referer) {
        $("#identity-test-form").submit(function (e) {
            var postData = $("#identity-test-form").serializeArray();
            var formURL = $("#identity-test-form").attr("action");
            $.ajax(
            {
                url: formURL,
                type: "POST",
                data: postData,
                success: function (data, textStatus, jqXHR) {
                    //data: return data from server
                    if (referer) {
                        window.location = "/wheel-of-life/results"
                    } else {
                        window.location = callback;
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    //if fails      
                    console.log('error');
                }
            });
            e.preventDefault(); //STOP default action
            e.unbind(); //unbind. to stop multiple form submit.
        });
        $("#identity-test-form").submit();
    }

    // Registration and/or Login form
    function submitForm(d, b) {
        var postData = $(d).serializeArray();
        var formURL = $(d).attr("action");

        $.ajax({
            url: formURL,
            type: "POST",
            data: postData,
            success: function (data, textStatus, jqXHR) {
                //data: return data from server
                if (data.Result) {
                    if ($(b).data('source')) {
                        submitAnswers($(b).data('source'), true); //Submit answers and redirect to the result page
                    } else {
                        if (d == "#register-form") {
                            window.location = "/wheel-of-life/welcome"
                        } else {
                            location.reload();
                        }
                    }
                }
                else {
                    $(d + '-error').html(data.Message);
                    $('.submit-btn-wrapper input').show();
                    while ($('#loader').length) {
                        $('#loader').remove();
                    }
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                //if fails      
                console.log('error');
            }
        });
    }

    // Submit the login form
    $("#login-submit").on('click', function (e) {
        e.preventDefault(); //STOP default action
        if (!$("#login-form input").hasClass('required') && $("#login-form input").val().length > 0) {
            $('.submit-btn-wrapper input').hide();
            $('.submit-btn-wrapper.login-step-2').append('<img id="loader" style="width: 25px;" src="../Content/images/page-loader.gif" />');
            //callback handler for form submit
            submitForm("#login-form", "#login-submit");
        }
    });

    //// Submit the registration form
    //$('#register-submit').on('click', function (e) {
    //    var fields = true;
    //    $("#register-form input").each(function () {
    //        if ($(this).val() < 1) {
    //            fields = false;
    //        }
    //    });
    //    if (fields) {
    //        $('.reg-error').remove();
    //    }
    //    e.preventDefault(); //STOP default action
    //    if (!$("#register-form input").hasClass('required') && fields && $('#RegisterPassword').val() == $('#RegisterPasswordConfirm').val()) {
    //        $('.reg-error').remove();
    //        $('.submit-btn-wrapper input').hide();
    //        $('.submit-btn-wrapper').append('<img id="loader" style="width: 25px;" src="../Content/images/page-loader.gif" />');
    //        submitForm("#register-form", "#register-submit");
    //    } else if (!fields) {
    //        if (!$('.reg-error').length) {
    //            $('#he-register-form').prepend("<p class='reg-error' style='color:red'>All the fields needs to be filled</p>");
    //            $('#register-form input').each(function () {
    //                if ($(this).val().length < 1) {
    //                    $(this).addClass('required');
    //                }
    //            });
    //        }
    //    }

    //    if ($('#RegisterPassword').val() != $('#RegisterPasswordConfirm').val() || $('#RegisterPassword').val().length < 1 || $('#RegisterPasswordConfirm').val().length < 1) {
    //        $('#RegisterPassword, #RegisterPasswordConfirm').addClass('required');
    //    } else {
    //        $('#RegisterPassword, #RegisterPasswordConfirm').removeClass('required');
    //    }
    //});


    // Submit the registration form
    $('#register-submit').on('click', function (e) {
        e.preventDefault(); //STOP default action
        $('#RegisterEmail').val().replace(/\s/g, '');
        if ($('#RegisterPassword').val() != $('#RegisterPasswordConfirm').val()) {
            if (!$('.regex-errorb').length || !$('.regex-errorb').length && $('.regex-error').val() != "The passwords do not match") {
                $('#he-register-form').prepend("<p class='regex-errorb' style='color:red'></p>");
            }
            $('#he-register-form .regex-errorb').html("The passwords do not match");
            $('#RegisterPassword, #RegisterPasswordConfirm').addClass('required');
        } else {
            $('#RegisterPassword, #RegisterPasswordConfirm').removeClass('required');
            $('.regex-errorb').remove();
        }


        $("#register-form input").each(function (a) {
            if ($(this).val().length < 1) {
                $(this).addClass('required');
            } else {
                $(this).removeClass('required');
            }
        });

        if (!$("#register-form input").hasClass('required') && $("#register-form input").val().length > 0) {
            if ($('#RegisterPassword').val() == $('#RegisterPasswordConfirm').val() && $('#RegisterPasswordConfirm').val().length >= 8 && $('#RegisterPasswordConfirm').val().length < 12) {
                $('.submit-btn-wrapper input').hide();
                $('.submit-btn-wrapper').append('<img id="loader" style="width: 25px; max-width: 236px;" src="../Content/images/page-loader.gif" />');
                submitForm("#register-form", "#register-submit");
            }
        }

    });
});