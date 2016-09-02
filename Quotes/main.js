var but = document.getElementById('but');
	var quotes =  document.getElementById('quotes'); 
	var autor = document.getElementById('autor');
	but.addEventListener("click", function(e) {
  	e.preventDefault();
	var arr = ["The time is now, the place is here. Stay in the present. You can do nothing to change the past, and the future will never come exactly as you plan or hope for. *- Dan Millman -","For centuries, theologians have been explaining the unknowable in terms of the-not-worth-knowing. * - H. L. Mencken (1880 - 1956) -","A cynic is a man who, when he smells flowers, looks around for a coffin. *- H. L. Mencken (1880 - 1956) -","We do not need magic to transform our world. We carry all the power we need inside ourselves already. We have the power to imagine better. *- J. K. Rowling -","Love is union with somebody, or something, outside oneself, under the condition of retaining the separateness and integrity of one's own self. *- Erich Fromm (1900 - 1980) -","Human beings are the only creatures that allow their children to come back home. *- Bill Cosby (1937 - ) -"];
	var arr2 =[];
for (var i=0, t=arr.length-1; i<t; i++) {
    var k = (Math.round(Math.random() * t))
}
arr2 = arr[k].split("*");
quotes.innerHTML = (arr2[0]);
autor.innerHTML = (arr2[1]);
});

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