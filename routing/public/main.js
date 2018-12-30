$(function() {
    const $h1 = $('h1');
    const $zip = $('input[name=\'zip\'');

    $('form').on('submit', function(event) {
        event.preventDefault();

        const zipCode = $.trim($zip.val());
        $h1.text('Loading...');

        const request = $.ajax({
            url: '/' + zipCode,
            dataType: 'json'
        });

        request.done(function(data) {
            const temperature = data.temperature;
            $h1.html('It is ' + temperature + '&#176; in ' + zipCode + '.');
        });
        request.fail(function() {
            $h1.text('Error!');
        })
    })
})