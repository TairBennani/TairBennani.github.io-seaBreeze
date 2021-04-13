
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

    $('#e-mail').blur(function() {
        if ($(this).val() == "") {
            $(this).val("Пример: you@site.ru");
        }

    });

    // $('#e-mail').mouseout(function() {
    //    $(this).css({
    //        'backgroundColor' : 'white',
    //        'color' : 'black'
    //    });
    // });





}); // конец ready
