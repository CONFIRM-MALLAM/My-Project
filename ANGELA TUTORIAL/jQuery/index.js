$("h1").click(function(){
    $("h1").css("color", "red");
});

    $("button").click(function(){
        $("h1").toggle();
    });

    $(document).keypress(function(event){
        $("h1").text(event.key);
    })