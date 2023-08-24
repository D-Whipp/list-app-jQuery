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

    let displayItems = JSON.parse(
        localStorage.getItem('list') || '{}'
    );

    if (localStorage) {
        const retrievedList = JSON.parse(
            localStorage.getItem('list') || '[]'
        );
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

        console.log('Looking at: ', id);

        for (let i = 0; i < items.length; i++) {
            if (items[i].id == id) {
                console.log('Found: ', items[i].name);
                items.splice(i, 1);
                console.log(items);
                localStorage.setItem('list', JSON.stringify(items));
                location.reload(true);
            }
        }
    });
});
