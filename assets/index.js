$(document).ready(function () {
    $('.clear-list-btn').click(function () {
        localStorage.clear();
        $('#item-list').empty();
    });

    let items = [];

    $('form#content-form').submit(function (e) {
        e.preventDefault();

        let itemName = $('#form-item-name').val();
        let itemPrice = $('#form-item-price').val();
        console.log('Form items: ' + itemName + ' ' + itemPrice);
        let fields = {
            name: itemName,
            price: itemPrice,
            id: Date.now(),
        };
        items.push(fields);

        localStorage.setItem('list', JSON.stringify(items));
    });

    let displayItems = JSON.parse(
        localStorage.getItem('list') || '{}'
    );
    console.log('Display items: ', displayItems);

    for (let i = 0; i < displayItems.length; i++) {
        if (displayItems.length === 0) {
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
});
