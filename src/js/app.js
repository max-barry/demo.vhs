var $h1 = document.getElementById("mainTitle"),
    $main = document.getElementById("mainWrap"),
    $buttonOff = document.getElementById("off"),
    $buttonStyle = document.getElementById("style"),
    animClass = "a-textjump";

// ------------
// Little bit of js to goose the animation
// ------------
var animH1 = function() {
    $h1.classList.remove(animClass);
    $h1.offsetWidth = $h1.offsetWidth;
    $h1.classList.add(animClass);
};

setInterval(animH1, 6000);

// ------------
// Turn off
// ------------
var turnOff = function() {
    $main.classList.add("a-off");
};

$buttonOff.addEventListener("click", turnOff);

// ------------
// Change style
// ------------

var toggleClass = function(el, className) {
    if (el.classList) {
       el.classList.toggle(className);
    } else {
        var classes = el.className.split(' ');
        var existingIndex = classes.indexOf(className);

        if (existingIndex >= 0) {
            classes.splice(existingIndex, 1);
        }
        else {
            classes.push(className);
        }

        el.className = classes.join(' ');
    }
};

var switchStyle = function() {
    toggleClass(document.body, "t-order");
};

$buttonStyle.addEventListener("click", switchStyle);

// ------------
// Show / hide controls based on if mouse is moving
// ------------
var mouseMoving;

var timeoutNav = function(){
    
    clearTimeout(mouseMoving);

    $buttonOff.style.display = "block";
    $buttonStyle.style.display = "block";
    
    mouseMoving = setTimeout(function() {
        $buttonOff.style.display = "none";
        $buttonStyle.style.display = "none";
    }, 3000);

};

document.addEventListener("mousemove", timeoutNav);