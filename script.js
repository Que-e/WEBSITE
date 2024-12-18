
// reveal the container upward

window.addEventListener('scroll', reveal);

function reveal (){
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if(revealTop < windowheight - revealPoint){
            reveals[i].classList.add('active');
        }else{
            reveals[i].classList.remove('active');
        }
    }
}

// reveal the container from left

window.addEventListener('scroll', revealLeft);

function revealLeft (){
    var reveals = document.querySelectorAll('.revealLeft');

    for (var i = 0; i < reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 180;

        if(revealTop < windowheight - revealPoint){
            reveals[i].classList.add('active');
        }else{
            reveals[i].classList.remove('active');
        }
    }
}
// reveal the container from right

window.addEventListener('scroll', revealRight);

function revealRight (){
    var reveals = document.querySelectorAll('.revealRight');

    for (var i = 0; i < reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 180;

        if(revealTop < windowheight - revealPoint){
            reveals[i].classList.add('active');
        }else{
            reveals[i].classList.remove('active');
        }
    }
}

