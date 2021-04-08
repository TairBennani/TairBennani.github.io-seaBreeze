
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





}); // конец ready
