$(document).ready(function(){
    $(".country-holder").click(function(){
        var name = $(this).find(".name").html();
        $(".bank").html(name);
        console.log(name);
    });
});