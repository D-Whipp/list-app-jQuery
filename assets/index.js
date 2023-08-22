$(document).ready(function () {
    // $('#item-name').change(function () {
    //     let itemName = $(this).val();
    //     let itemPrice = $('#item-price').val();
    //     console.log(itemPrice);

    //     $('ul').append(
    //         '<li>' + itemName + ' <i class="fas fa-check"></i></li>'
    //     );
    //     localStorage.setItem(itemName, itemName);
    //     $(this).val('');
    // });

    $('.clear-list-btn').click(function () {
        localStorage.clear();
        $('#item-list').empty();
    });

    let items = [];

    $('form#content-form').submit(function (e) {
        e.preventDefault();
        // location.reload(true);

        let itemName = $('#form-item-name').val();
        let itemPrice = $('#form-item-price').val();
        console.log('Form items: ' + itemName + ' ' + itemPrice);
        let fields = {
            name: itemName,
            price: itemPrice,
            id: Date.now(),
        };
        console.log('Fields: ', fields);
        items.push(fields);
        console.log('items: ', items);

        localStorage.setItem('list', JSON.stringify(items));
    });

    let displayItems = JSON.parse(localStorage.getItem('list') || []);
    console.log('Display items: ', displayItems);
    console.log(displayItems.length);

    for (let i = 0; i < displayItems.length; i++) {
        // console.log(i);
        // console.log(displayItems[i].name);
        // console.log(displayItems[i].price);
        if (displayItems.length === 0) {
            // console.log('length: ', displayItems.length);
            return;
        } else {
            $('ul').append(
                '<li>' +
                    displayItems[i].name +
                    ' $' +
                    displayItems[i].price +
                    ' <i class="fas fa-check"></li>'
            );
        }
    }

    // let prices = [];

    // $('.price-input').change(function () {
    //     $('.total-cost').val('');

    //     let price = parseFloat($(this).val());

    //     prices.push(price);
    //     console.log(prices);

    //     let sum = 0;

    //     for (let i = 0; i < prices.length; i++) {
    //         sum += prices[i];
    //         console.log('sum: ', typeof sum);
    //     }

    //     $('.total-cost').text(sum);
    // });

    // $('ul').on('click', '.fa-check', function () {
    //     $(this).parent('li').toggleClass('checked');
    // });

    // let keys = Object.keys(localStorage);
    // console.log('Keys: ', keys);

    // for (let j = 0; j < keys.length; j++) {
    //     console.log(keys[j]);
    //     $('ul').append(
    //         '<li>' + keys[j] + '<i class="fas fa-check"></i></li>'
    //     );
    // }
});
