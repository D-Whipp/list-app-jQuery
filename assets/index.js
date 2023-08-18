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
        $('#item-list').empty();
    });

    let prices = [];

    $('.price-input').change(function () {
        $('.total-cost').val('');

        let price = parseFloat($(this).val());

        prices.push(price);
        console.log(prices);

        let sum = 0;

        for (let i = 0; i < prices.length; i++) {
            sum += prices[i];
            console.log('sum: ', typeof sum);
        }

        $('.total-cost').text(sum);
    });

    $('ul').on('click', '.fa-check', function () {
        $(this).parent('li').toggleClass('checked');
    });

    let keys = Object.keys(localStorage);
    console.log(keys);

    for (let j = 0; j < keys.length; j++) {
        console.log(keys[j]);
        $('ul').append(
            '<li>' + keys[j] + '<i class="fas fa-check"></i></li>'
        );
    }
});
