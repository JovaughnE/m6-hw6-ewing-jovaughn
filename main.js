var button1 = document.getElementById('box1')
var button2 = document.getElementById('box2')
var button3 = document.getElementById('box3')

button1.onmouseover="colorChange()"

function colorChange () {
    document.getElementById('box1').style.backgroundColor = 'blue';
}

button1.addEventListener('mouseover', function () {
    colorChange) }

button2.addEventListener('mouseover', colorChange)
button3.addEventListener('mouseover', colorChange)

