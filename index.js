$(function () {
    $('ul').on('click','button.shopping-item-delete, li', function () {
        $(this).parent().parent().detach('li');
    });

    $('ul').on('click','button.shopping-item-toggle, li', function () {
        $(this).find(".shopping-item").toggleClass("shopping-item__checked");
    });

    $("#js-shopping-list-form button").click(function (e) {
        e.preventDefault();
        let newLi = $('li').html();
        console.log(newLi);
        $('li:last').after('<li>' + newLi + '</li>');
        let userInput= $("#shopping-list-entry").val();
        console.log(userInput);
        $('span.shopping-item', 'li:last').text(''+ userInput + '');
        $('input:text').val('');
    });
})
// most functions/arguments don't need to have anything in parenthesis
// some, such as 