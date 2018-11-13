var time = document.getElementById("countdownTimer");
var coutndownDate = new Date("Nov 20 ,2018 19:00:00").getTime();
var x = setInterval(function () {

    var now = new Date().getTime();
    var distance = coutndownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
    var seconds = Math.floor(distance % (1000 * 60) / 1000);
    time.innerHTML = '<span class="timer" s>' + days + ' :</span><span class="timer">' + hours + ' :</span><span class="timer">' + minutes + ' :</span><span class="timer">' + seconds + '</span>';

    if (distance < 0) {
        clearInterval();
        time.innerHTML = 'Time out!';
    }

});


