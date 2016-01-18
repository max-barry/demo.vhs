var $h1 = document.getElementById("mainTitle"),
    $main = document.getElementById("mainWrap"),
    $button = document.getElementById("off"),
    animClass = "a-textjump";

var animH1 = function() {
    $h1.classList.remove(animClass);
    $h1.offsetWidth = $h1.offsetWidth;
    $h1.classList.add(animClass);
};

setInterval(animH1, 6000);

var turnOff = function() {
    $main.classList.add("a-off");
};

$button.addEventListener("click", turnOff);