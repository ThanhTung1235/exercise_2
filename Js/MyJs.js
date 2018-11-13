var Index = 1;
slide(Index);

function ControlSlide(n) {
    slide(Index += n);
}

function dot(n) {
    slide(Index = n)
}

function slide(n) {
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    if (n > slides.length) {
        Index = 1;
    }
    if (n < 1) {
        Index = slides.length;
    }
    for (var i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[Index - 1].style.display = "block";
    dots[Index - 1].className += " active";
    // setTimeout(slide, 8000);
}


// var countDownt = document.getElementById("time");
//
// var countDowntDate = new Date('Nov 20 ,2018 19:00:00').getTime();
//
// var i = setInterval(function () {
//     var now = new Date().getTime();
//     var distance = countDowntDate - now;
//
//     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//     var hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
//     var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
//     var seconds = Math.floor(distance % (1000 * 60) / 1000);
//
//     countDownt.innerHTML = "days" + days + ' - ' + "hours" + hours + ' - ' + "minute" + minutes + ' - ' + "second" + seconds;
//     if (distance < 0) {
//         clearInterval();
//         countDownt.innerHTML = "<h1> Time out! </h1>"
//     }
// });
