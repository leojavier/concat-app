//(function () {
//    $('#item-0').show();
//    var TabsApp = {
//        Utils: {
//            loadModule: function (element) {
//                $('.tabs-content').hide();
//                $('#' + element).fadeIn();
//            }
//        }
//    }
//    //Events
//    $('.nav-tabs a').on('click', function (e) {
//        TabsApp.Utils.loadModule($(e.target).data('source'));
//    });
//    // Carousel for the events -- Stories Module
//    $(".owl-test").owlCarousel({
//        navigation: true, // Show next and prev buttons
//        navigationText: [
//          "<i class='fa fa-angle-left fa-4x'></i>",
//          "<i class='fa fa-angle-right fa-4x'></i>"
//        ],
//        slideSpeed: 300,
//        pagination: false,
//        mouseDrag: false,
//        itemsCustom: [
//        [0, 1],
//        [920, 2.5],
//        [1200, 2.5]
//        ]

//    });
//})();

//Blog detail page
$(document).ready(function () { 
$('.sign-up-blog-btn').on('click', function () {
    $('.member a').trigger('click');
    $('#login').find('input').css({ 'margin-bottom': '10px', 'font-size': '1em' });
    $('#he-register-form').show();
    $('#he-login-form').hide();
    status = false;
});
});