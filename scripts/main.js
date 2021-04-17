
// document.write("test");
$(document).ready(function(){
    // (function () {
    //     const burger = document.querySelector('.burger');
    //     burger.addEventListener('click',() => {
    //         burger.classList.toggle('burger_active');
    //     });
    // }());

    // document.write("test");
    $('.burger').toggle(function(){
        $(this).addClass('burger_active');
    },function(){
        $(this).removeClass('burger_active');
    });

    $("#test").text("I've changed");


    // $('.burger').click(function(){
    //    $('.menu').removeClass('menu');
    // });
    //
    // $('.burger').click(function(){
    //    $('.menu').addClass('menu');
    // });s

        // if(window.matchMedia('(max-width: 965px)').matches){
        //
        // };

    $('.burger').toggle(function(){
        $('.forNav').css({'visibility' : 'visible'});
    },function(){
        $('.forNav').css({'visibility' : 'hidden'});
    });

    $('#button').click(function(){
        alert("Не подключён POST и php");
    });

    $('#e-mail').focus(function() {
        if ($(this).val() == "Пример: you@site.ru") {
            $(this).val("");
        }
    });

    var regV = /[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}/;
    $('#e-mail').blur(function() {

        if ($(this).val() == "") {
            $(this).val("Пример: you@site.ru").css('border','2px solid rgba(2,133,168, 0.6)');
        }
        else if( ($(this).val() ).search(regV) == -1) {
            $(this).css('border','2px solid red');
        }
        else {
            $(this).css('border','2px solid green');
        }
    });



    $('#page_4').hover(function() {
        $('.megaMenu_1').css('visibility', 'visible');
    });
    $('article').hover(function() {
        $('.megaMenu_1').css('visibility', 'hidden');
    });
    $('.forNav a:not(.forNav #page_4)').hover(function() {
        $('.megaMenu_1').css('visibility', 'hidden');
    });








}); // конец ready
