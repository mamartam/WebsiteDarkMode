var modeIcon = document.getElementById("mode-icon");
var logoIcon = document.getElementById("logo-icon");
modeIcon.onclick = function(){
    document.body.classList.toggle("dark-mode");
    if(document.body.classList.contains("dark-mode")){
        modeIcon.src = "img/sun.png";
        logoIcon.src = "img/logo-for-dark.png";
    }
    else{
        modeIcon.src = "img/moon.png";
        logoIcon.src = "img/logo-for-light.png";
    }
}


var idn = document.getElementsByClassName("idn");
var girl = document.getElementById("girl");
var originalSrc = girl.src;

for (var i = 0; i < idn.length; i++) {
    idn[i].onclick = function(){
        girl.src = "img/idn.png";
        setTimeout(function() {
            setTimeout(function() {
                girl.src = originalSrc; // Revert to original image source
            }, 500); // Match the timeout to the duration of the CSS transition
        }, 2000); // Change image back after 3 seconds
    }
}