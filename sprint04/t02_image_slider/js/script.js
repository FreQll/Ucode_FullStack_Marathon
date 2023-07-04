let curSlide = 1;
let timer;
showSlides(curSlide);

function plusSlide(n) {
    showSlides(curSlide += n);
    startTimer();
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName('slide');
    if (n > slides.length) curSlide = 1;
    if (n < 1) curSlide = slides.length;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[curSlide - 1].style.display = "block";
}

function startTimer() {
    timer = setTimeout(function() {
        plusSlide(1);
    }, 3000);
    console.log('timer start');
}

function stopTimer() {
    clearTimeout(timer);
    console.log('timer stop');
}

prev.addEventListener('click', function() {
    stopTimer();
})

next.addEventListener('click', function() {
    stopTimer();
})

startTimer();