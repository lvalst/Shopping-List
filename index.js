$ (function(){
    $(h1).css('color', 'red');
    $("shopping-item").click(function() {
        event.preventDefault();
    });
    $ ("shopping-item-toggle").toggleClass("shopping-item__checked");

});