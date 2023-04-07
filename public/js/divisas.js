$('Form[name="conversion"]').submit(function (e) {
    e.preventDefault();
    var monedas = ['MXN', 'EUR', 'RUB', 'CAD', 'JPY', 'GBP']
    var index = 0;
    var cantidad = $("#conversion_Cantidad").val()
    var divisa = $("select[name='conversion[divisas]']").val()

    async function conversion() {
        let result
        try {
            result = await $.ajax({
                method: 'GET',
                url: 'https://api.api-ninjas.com/v1/convertcurrency?want=' + monedas[index] + '&have=' + divisa + '&amount=' + cantidad,
                headers: { 'X-Api-Key': 'fdd276367dmsh9232ea72549c929p1ffa7ajsnee5f69fc77eb' },
                contentType: 'application/json',
                success: function (result) {
                    // console.log(result);
                },
                error: function ajaxError(jqXHR) {
                    console.error('Error: ', jqXHR.responseText);
                }
            });
            return result
        } catch (error) {
            console.log(error)
        }
    }

    function displayNextMoneda() {

        conversion().then((data) => {
            var amount = data['old_amount'];
            var from_currency = data['old_currency'];
            var to_currency = data['new_currency'];
            var new_amount = data['new_amount'];

            $('#json-table tbody').append($('<tr><td>' + data["old_currency"] + '</td><td>' + data["old_amount"] + '</td><td>' + data["new_currency"] + '</td><td>' + data["new_amount"] + '</td></tr>'));
            $.ajax({
                type: "POST",
                url: "/nueva",
                data: {
                    amount: amount,
                    from_currency: from_currency,
                    to_currency: to_currency,
                    new_amount: new_amount
                },
                dataType: "JSON",
                success: function (response) {
                    console.log(response);
                },
                error: function ajaxError(jqXHR) {
                    console.error('Error: ', jqXHR.responseText);
                }
            });
        })

        index = (index + 1);
        if (index >= monedas.length) {
            return; // Stop the execution of the function
        }
        setTimeout(displayNextMoneda, 1500)

    }

    displayNextMoneda();


    // async function fetchData(url) {
    //     try {
    //         const response = await fetch(url);
    //         const data = await response.json();
    //             $('#json-table tbody').append($('<tr><td>' + data["old_currency"] + '</td><td>' + data["old_amount"] + '</td><td>' + data["new_currency"] + '</td><td>' + data["new_amount"] + '</td></tr>'));

    //     } catch (error) {
    //         console.error('Error fetching data:', error)
    //     }
    // }

    // function displayNextMoneda() {
    //     fetchData('https://api.api-ninjas.com/v1/convertcurrency?want=' + monedas[index] + '&have=' + divisa + '&amount=' + cantidad);
    //     index = (index + 1);
    //     if (index >= monedas.length) {
    //         return; // Stop the execution of the function
    //     }
    //     setTimeout(displayNextMoneda, 1500)

    // }

    // displayNextMoneda();
});

