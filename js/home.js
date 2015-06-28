$(function(){

    function resizeLeftDiv(){
        var width = $(window).width() - 480;
        if(width < 450)
            width = 450;
        $("#leftDiv").width(width);

    }

    $( window ).resize(function() {
        resizeLeftDiv();
    });

    resizeLeftDiv();

});

