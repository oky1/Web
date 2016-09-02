var square = document.getElementsByClassName('square');
  var sound = document.getElementsByClassName('sound');
  var stepScore = document.getElementById('stepScore');
  var offButton = document.getElementById('offButton');
  var startButton = document.getElementById('start');
  var resetButton = document.getElementById('reset');
  var onButton = document.getElementById('onButton');
  var modal = document.getElementById('modal');
  var particlesjs = document.getElementById('particles-js');
  var info = document.getElementById('info');
  var player = [];
 	var counter = 0;
 	var computer = [];
  var strict = false
  var timer = 750;
  var delay = 350;


//Ie 11
var trident = !!navigator.userAgent.match(/Trident\/7.0/);
var net = !!navigator.userAgent.match(/.NET4.0E/);
var IE11 = trident && net;
if(IE11){
  container.className = '';
  document.getElementById('ie11_1').style.paddingRight = '75px';
  document.getElementById('ie11_2').style.paddingRight = '75px';
  document.getElementById('ie11_3').style.paddingRight = '75px';
 }

//Strict mode 
function strictOn(){reset();strict=true; onButton.className = 'bn onOff animated tada'; offButton.className = 'bn onOff'}
function strictOff(){reset();strict=false; offButton.className = 'bn onOff animated tada'; onButton.className = 'bn onOff'}

//random n
function randomN() {
    var n = Math.floor(Math.random() * 4);
    return n;
}

// start
function start(){
  startButton.disabled = true;
  startButton.className = 'bn animated tada';
  resetButton.className = 'bn';
  counter++;
  stepScore.innerHTML = '&#8194;' + counter;
  if(counter == 21){
      info.innerHTML = 'You win';
      modal.className = 'show animated tada'; 
      reset();
      setTimeout(function(){
        modal.className = 'hide';
        info.innerHTML = 'Wrong';},3000)
    }
  //else if(counter>10){timer=600; delay = 300;}
  n = randomN();
  computer.push(n);
  displaySquare();
 }

//comp turn
function displaySquare(){
    off()
    player = computer.slice();
    computer.map(function(num,i){
    var iCount = i+1;
    setTimeout(function(){square[num].className ='square animated tada'; sound[num].play()},timer*iCount);
    setTimeout(function(){square[num].className ='square';},(timer*iCount)+delay);
  })
setTimeout(function(){on()},(computer.length*timer)+delay);
};

function off(){
  for (var i = 0; i < square.length; i++) {
  square[i].removeEventListener('click', squareFunction, false)};
}

//player turn
function on(){
  for (var i = 0; i < square.length; i++) {
  square[i].addEventListener('click', squareFunction, false)};
}

function reset(){
  startButton.disabled = false;
  startButton.className = 'bn';
  resetButton.className = 'bn animated tada';
  computer = []; counter = 0; stepScore.innerHTML = '&#8194;' + counter;
  timer = 750; delay = 350;
  off();
  player = [];
}

function squareFunction() {
  var squareVal = this.getAttribute("value");
  var target = document.getElementById(this.id);
  var button =  player.shift();
  if(squareVal !=button){
    //you wrong!!!
    if(strict === true){
      reset();
      start();
    }
    modal.className = 'show animated tada';
    setTimeout(function(){ modal.className = 'hide'},timer) 
    player.unshift(button);
    displaySquare()
  } else {
     target.className = 'square animated tada';
     sound[squareVal].play();
     setTimeout(function(){target.className = 'square';},delay);
     //You survive
     if(player.length ==0){
        setTimeout(function(){start()},timer);
        color = getRandomColor();
        particlesjs.style.backgroundColor = color}
     }  
  }

  //main background
  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

particlesJS("particles-js",
 {
  "particles": {
    "number": {
      "value": 40,
      "density": {
        "enable": false,
        "value_area": 800
      }
    },
    "color": {
      "value": "ff7f50"
    },
    "shape": {
      "type": "star",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.2,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 30,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 3,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "repulse"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}
);