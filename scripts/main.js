
// document.write("test");
$(document).ready(function(){
    (function () {
        const burger = document.querySelector('.burger');
        burger.addEventListener('click',() => {
            burger.classList.toggle('burger_active');
        });
    }());
    // document.write("test");
    $("#test").text("I've changed");

    











}); // конец ready
