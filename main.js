var button1 = document.getElementById('box1')
var button2 = document.getElementById('box2')
var button3 = document.getElementById('box3')

button1.onmousenter="colorChange()"
button1.onclick="window.alert()"
button2.onclick="window.alert()"
button3.onclick="window.alert()"

function colorChange () {
    button1.style.backgroundColor = 'blue';
    button2.style.backgroundColor = 'blue';
    button3.style.backgroundColor = 'blue'
}

function colorChange1 () {
    button1.style.backgroundColor = 'orange';
    button2.style.backgroundColor = 'white';
    button3.style.backgroundColor = 'purple'
}

function select1 () {
    alert ('Oooh - so close, but no cigar');
    this.children[i].classList.toggle('show');
}

function select2 () {
    alert ('DING DING DING We Have a Winner');
    this.children[i].classList.toggle('show');
}

function select3 () {
    alert ('Oops, butter luck next time');
    this.children[i].classList.toggle('show');
}

button1.addEventListener('mouseenter', colorChange);
button2.addEventListener('mouseenter', colorChange);
button3.addEventListener('mouseenter', colorChange);
button1.addEventListener('mouseleave', colorChange1);
button2.addEventListener('mouseleave', colorChange1);
button3.addEventListener('mouseleave', colorChange1);
button1.addEventListener('click', select1);
button2.addEventListener('click', select2);
button3.addEventListener('click', select3);

function startOver() {
    this.children[i].classList.toggle('start-button');
    }

start-button[i].addEventListener('click', startOver);