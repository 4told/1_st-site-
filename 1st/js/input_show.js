/**
 * Created by Димас on 10.12.14.
 */

$(document).ready(function(){
    $(".search").click(function () {
        if ($(".search-holder").is(":hidden")) {
            $(".search-holder").show("slow");
        } else {
    $(".search-holder").hide("slow");
    }
return false;
});
});
