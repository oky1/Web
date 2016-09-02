$(document).ready(function() {
    $('#start').on('click', function(e) {
        e.preventDefault();
        clock.start();
        $('#rest').hide();
        $('#session').show();
        $('#start').hide();
        $('#stop').show();
    });
    $('#stop').on('click', function(e) {
        e.preventDefault();
        clock.stop();
        $('#session').hide();
        $('#start').show();
        $('#stop').hide();
    });
    $("#reset").on('click', function(e) {
        e.preventDefault();
        $('#session').hide();
        $('#rest').hide();
        session = 1500;
        $('#sesst').text('Session time: ' + session / 60);
        breakt = 300;
        $("#bt").text('Break time: ' + breakt / 60);
        $('#start').show();
        $('#stop').hide();
        clock.reset();
        clock.setTime(session);
    });
    /* session settings*/

    $("#sess-").on('click', function(e) {
        e.preventDefault();
        $('#start').show();
        $('#stop').hide();
        if (session > 60) {
            session -= 60;
        }
        $('#sesst').text('Session time: ' + session / 60)
        clock.stop();
        clock.reset();
        clock.setTime(session);
    });
    $('#sessP').on('click', function(e) {
        e.preventDefault();
        if (session > 0) {
            session += 60;
        }
        $('#sesst').text('Session time: ' + session / 60);
        clock.stop();
        clock.reset();
        clock.setTime(session);
    });
    /*break settings*/

    $('#break-').on('click', function(e) {
        if (breakt > 60) {
            breakt -= 60;
        }
        $('#bt').text('Break time: ' + breakt / 60);
        clock.stop();
        clock.reset();
        clock.setTime(session);
    });
    $('#breakP').on('click', function(e) {
        if (breakt > 0) {
            breakt += 60;
        }
        $('#bt').text('Break time: ' + breakt / 60);
        clock.stop();
        clock.reset();
        clock.setTime(session);
    });
});
/*change*/
function change() {
    if (time === breakt) {
        $('#session').show();
        $('#rest').hide();
        time = session;
    } else {
        $('#rest').show();
        $('#session').hide();
        time = breakt;
    }
    clock.setTime(time);
    clock.start();
}

/* main change */
var session = 1500;
var time = session;
var breakt = 300;
var clock = $('.clock').FlipClock(session, {
    //clockFace: 'MinuteCounter' ,
    countdown: true,
    autoStart: false,
    callbacks: {
        interval: function() {
            var now = this.factory.getTime().time;
            if (now == 0) {
                console.log('end');
                change();
            }
        }
    }
});
