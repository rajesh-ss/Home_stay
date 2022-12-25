var abtlefclk = document.getElementById('abtscrollleft');
var abtrigclk = document.getElementById('abtscrollright');

var serlefclk = document.getElementById('serscrollleft');
var serrigclk = document.getElementById('serscrollright');

var testlefclk = document.getElementById('testscrollleft');
var testrigclk = document.getElementById('testscrollright');


abtlefclk.onclick = function() {
    var container = document.getElementById('containerimg');
    container.scrollLeft += 500;
}

abtrigclk.onclick = function() {
    var container = document.getElementById('containerimg');
    container.scrollLeft -= 500;
}

testlefclk.onclick = function() {
    var container = document.getElementById('testreviewcontainer');
    container.scrollLeft += 100;
}

testrigclk.onclick = function() {
    var container = document.getElementById('testreviewcontainer');
    container.scrollLeft -= 100;
}

serlefclk.onclick = function() {
    var container = document.getElementById('service');
    container.scrollLeft += 200;
}

serrigclk.onclick = function() {
    var container = document.getElementById('service');
    container.scrollLeft -= 200;
}