// timer
setInterval(function() {
    document.getElementById("do-time").innerHTML = formatTime();
}, 1000);

function formatTime() {
    var d = new Date(),
        minutes = d.getMinutes().toString().length == 1 ? '0' + d.getMinutes() : d.getMinutes(),
        hours = d.getHours().toString().length == 1 ? '0' + d.getHours() : d.getHours();
    return '<h2>' + hours + '<span class="blinking">:</span>' + minutes + '</h2>'
}

// weather

$('document').ready(function() {
    getLocation();

    function getLocation() {
        $.get("http://ipinfo.io", function(location) {
            console.log(location);
            $('#city').append(location.city + ' - ').append(location.region);
            getWheather(location.loc, 'imperial');
        }, "jsonp")
    }

    function getWheather(location, units) {
        lat = location.split(',')[0];
        lng = location.split(',')[1];

        var url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lng +
            '&units=' + units + '&APPID=38150c022595a54a0b19b5b84ad0cab3';
        $.get(url, function(weather) {
            $('#forPic').append("<img src='http://openweathermap.org/img/w/" + weather.weather[0].icon + ".png'>");
            $('.temp').prepend(weather.main.temp.toFixed(1));
            $('#wind').append(weather.wind.speed);
            $('#humidity').append(weather.main.humidity + ' %');
            $('#rain').append(((weather.hasOwnProperty(rain)) ? weather.rain['3h'] : '0') + ' %');
            $('.sunrise').append(weather.sys.sunrise);
        }, 'jsonp');
    }
})

function farCel() {
    if ($('#temp').hasClass('faringate')) {
        var faringate = $('.temp').text().split(' ')[0];
        var tmp = (Number(faringate) - 32) * 5 / 9;
        $('.temp').text(tmp.toFixed(1));
        $('#temp').toggleClass('faringate');
    } else {
        var celcium = $('.temp').text().split(' ')[0];
        var tmp = Number(celcium) * (9 / 5) + 32;
        $('.temp').text(tmp.toFixed(1));
        $('#temp').toggleClass('faringate');
    }
};
