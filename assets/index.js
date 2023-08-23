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
        location.reload(true);
    });

    let displayItems = JSON.parse(
        localStorage.getItem('list') || '{}'
    );

    if (localStorage) {
        const retrievedList = JSON.parse(localStorage.getItem('list') || '[]');
        items = retrievedList;
        console.log(items);
    }

    for (let i = 0; i < items.length; i++) {
        if (items.length === 0) {
            return;
        } else {
            $('ul').append(
                '<li>' +
                    items[i].name +
                    ' $' +
                    items[i].price +
                    ' <i class="fas fa-check"></li>'
            );
        }
    }
});
