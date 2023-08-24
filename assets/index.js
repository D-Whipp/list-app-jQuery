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
        let fields = {
            name: itemName,
            price: itemPrice,
            id: Date.now(),
        };
        items.push(fields);

        localStorage.setItem('list', JSON.stringify(items));
        location.reload(true);
    });

    if (localStorage) {
        const retrievedList = JSON.parse(
            localStorage.getItem('list') || '[]'
        );
        items = retrievedList;
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
                    ' - ' +
                    items[i].id +
                    ' <i class="fas fa-check"></i> <i class="fas fa-trash"></i> </li>'
            );
        }
    }

    $('ul').on('click', '.fa-check', function () {
        $(this).parent('li').toggleClass('checked');
    });

    $('ul').on('click', '.fa-trash', function () {
        $(this).parent('li').toggleClass('trashed');
        let id = parseInt($(this).parent().text().slice(-16));
        $(this).parent('li').fadeOut(300);

        for (let i = 0; i < items.length; i++) {
            if (items[i].id == id) {
                items.splice(i, 1);
                localStorage.setItem('list', JSON.stringify(items));
            }
        }
        location.reload(true);
    });

    console.log(items);

    let pricesArray = [];
    for (let k = 0; k < items.length; k++) {
        pricesArray.push(parseInt(items[k].price));
    }
    console.log('prices array: ', pricesArray);
    let total = pricesArray.reduce(function (a, b) {
        return a + b;
    });

    let totalCost = $('.total-cost');
    totalCost.text(total);

    console.log('total: ', total);
});
