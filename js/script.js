$(document).ready(function(){
    $(".box-close").click(function(){
        $(this).parent(".box").fadeOut();
    });
    $(".answer").hide();
    $(".question").click(function(){
        $(this).next(".answer").slideToggle();
    });
    $(".faq .question").addClass("pointer");
    $(".question").append('<span class="icon">>></span>');

    $("#more").click(function(){
        $("#place-holder").load("more.html .more-items");
        return false;
    })
})