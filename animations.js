
const textPath = document.querySelector("#text-path");

const h = document.documentElement,
    b = document.body,
    st = 'scrollTop',
    sh = 'scrollHeight';

myID = document.getElementById("logo-in-navbar");

var myScrollFunc = function () {
    var y = window.scrollY;
    if (y >= 60) {
        myID.style.display = "block";
    } else {
        myID.style.display = "none";
    }
};

window.addEventListener("scroll", myScrollFunc);

document.addEventListener("scroll", e => {
    let percent = (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
    textPath.setAttribute("startOffset", (-percent * 5))
}
);


function toggleNavbar() {
    var x = document.getElementById("navbar-multi-level");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}; 



window.addEventListener('mousemove', function (e) {
    var arr = [1, 0.9, 0.8, 0.5, 0.2];

    arr.forEach(function (i) {
        var x = (1 - i) * 50;
        var star = document.createElement('div');

        star.className = 'star';
        star.style.top = e.pageY + Math.round(Math.random() * x - x / 2) + 'px';
        star.style.left = e.pageX + Math.round(Math.random() * x - x / 2) + 'px';

        document.body.appendChild(star);

        window.setTimeout(function () {
            document.body.removeChild(star);
        }, Math.round(Math.random() * i * 1600));
    });
}, false);

