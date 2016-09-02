var container = document.getElementById("container");
var square = document.getElementsByClassName("square");
var scoPl1 = document.getElementById('scoPl1');
var scoPl2 = document.getElementById('scoPl2');
var scoComp = document.getElementById('scoComp');
var winner = document.getElementById('winner');
var modal = document.getElementById('modal');
var bn1 = document.getElementById('bn1');
var bn2 = document.getElementById('bn2');
var x = document.getElementById('x');
var o = document.getElementById('o');
var pl = 'x'; var op = 'o';
var counter = [];
var player1 = [];
var player2 = [];
var computer = [];
var oponent = player2;
var oponentName = 'player2';
var countComp = [];
var countPlayer1 = [];
var countPlayer2 = [];
var step = [];


//Ie 11
var trident = !!navigator.userAgent.match(/Trident\/7.0/);
var net = !!navigator.userAgent.match(/.NET4.0E/);
var IE11 = trident && net;
if(IE11){
  container.className = '';
}

//player2 or computer

function swX(){
    x.className = 'xo bn animated tada';
    o.className = 'bn xo';
    swXO();
}

function swO(){
    o.className = 'xo bn animated tada';
    x.className = 'bn xo';
    swXO();
}

function swPlayer() {
    clear();
    bn2.className = 'bn';
    bn1.className = 'bn animated tada';
    oponent = player2;
    oponentName = 'player2';
}

function swComp() {
    clear();
    bn1.className = 'bn';
    bn2.className = 'bn animated tada';
    oponent = computer;
    oponentName = 'computer';
}

function swXO(){
   clear();
   x.className == 'xo bn animated tada' ? pl = 'x' : pl = 'о'  ;
   pl == 'x' ? op = 'o': op = 'x';

}

function hide(){
    modal.className = 'animated zoomOut';
    setTimeout(function(){
        modal.className = 'hide';
    },1000);
}

// turn 
function turn(squareVal) {
    var icon = square[squareVal - 1];
    counter++;
    if (counter % 2 == 0) {
        step = oponent;
        if (oponentName == 'player2') {
            icon.innerHTML = op
            step.push(squareVal);
        } else {
            step.push(squareVal + '');
            icon.innerHTML = op;
        }
    } else {
        step = player1;
        icon.innerHTML = pl;
        icon.className ='square animated fadeIn';
        step.push(squareVal);
    }
    check();
    tie();
    compCheck();
}

// players steps
function squareFunction() {
    var squareVal = this.getAttribute("value");
    if (player1.indexOf(squareVal) > -1 || oponent.indexOf(squareVal) > -1) {} else {
        turn(squareVal)
    }
};

function check() {
     if (
        //horizontal
        step.indexOf('1') > -1 && step.indexOf('2') > -1 && step.indexOf('3') > -1 ||
        step.indexOf('4') > -1 && step.indexOf('5') > -1 && step.indexOf('6') > -1 ||
        step.indexOf('7') > -1 && step.indexOf('8') > -1 && step.indexOf('9') > -1 ||
        //vertical
        step.indexOf('1') > -1 && step.indexOf('4') > -1 && step.indexOf('7') > -1 ||
        step.indexOf('2') > -1 && step.indexOf('5') > -1 && step.indexOf('8') > -1 ||
        step.indexOf('3') > -1 && step.indexOf('6') > -1 && step.indexOf('9') > -1 ||
        //diagonal
        step.indexOf('1') > -1 && step.indexOf('5') > -1 && step.indexOf('9') > -1 ||
        step.indexOf('3') > -1 && step.indexOf('5') > -1 && step.indexOf('7') > -1
    ) {
        if (step == player1) {
            modal.className = 'show animated zoomIn';
            winner.innerHTML = 'player 1 win';
            countPlayer1++;
            scoPl1.innerHTML =  countPlayer1;

        } else {
            modal.className = 'show animated zoomIn';
            winner.innerHTML = oponentName + ' ' + 'win';
            oponentName == 'player2' ? countPlayer2++ : countComp++;
            oponentName == 'player2' ? scoPl2.innerHTML = countPlayer2 : 
            scoComp.innerHTML = countComp;
        };
        clear();
    }

}

function compCheck() {
    if (counter % 2 == !0 && oponentName == 'computer') {
        num = randomN();
        turn(num);
    }
}

function tie() {
    if (player1.length == 5 &&
        oponent.length == 4) {
        modal.className = 'show animated tada';
        winner.innerHTML = 'Tie';
        clear();
    }
}


for (var i = 0; i < square.length; i++) {
    square[i].addEventListener('click', squareFunction, false);
}

function clear() {
    counter = 0;  player1 = [];  player2 = []; computer = []; oponent = [];
    step = player1;
    for (var i = 0; i < square.length; i++) {
        square[i].innerHTML = ' ';
        square[i].className = 'square';
    }
}

function randomN() {
    var indxs = [];
    for (var itr = 0; itr < 9; itr++) {
        if (square[itr].innerHTML === ' ') {
            indxs.push(itr + 1);
        }
    }
    return freeStep = indxs.splice(Math.floor(Math.random() * indxs.length), 1);
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