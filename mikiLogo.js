function grow() {
    var black = document.getElementById('logoBlack');
    var pink = document.getElementById('logoPink');
    black.classList.add('logoBlack');
    pink.classList.add('logoPink');
    waitForIt();
};
var wait;
function waitForIt() {
    wait = setTimeout(typeWriter, 4000);
};
var i = 0;
var text = "miki";
var speed = 300;
function typeWriter() {
        if(i < text.length) {
            document.getElementById('text').innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
    }
};