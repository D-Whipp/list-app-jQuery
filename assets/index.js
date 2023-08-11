$(document).ready(function () {
    $('#input').change(function () {
        let input = $(this).val();
        $('ul').append(
            '<li>' + input + ' <i class="fas fa-check"></i></li>'
        );
        localStorage.setItem(input, input);
        $(this).val('');
    });

    $('.clear-list-btn').click(function () {
        localStorage.clear();
        console.log('clear list: ', $('#item-list').empty());
    });

    $('ul').on('click', '.fa-check', function () {
        $(this).parent('li').toggleClass('checked');
    });
});
