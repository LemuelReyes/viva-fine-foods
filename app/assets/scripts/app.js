// Include images
let img_src = ['assets/images/blue-bicycle.png', 'assets/images/blue-muffin.png', 'assets/images/blue-coffee.png', 'assets/images/blue-volleyball.png', 'assets/images/blue-sandals.png', 'assets/images/blue-kayak.png', 'assets/images/blue-moustache.png', 'assets/images/black-moustache.png', 'assets/images/black-volleyball.png', 'assets/images/black-coffee.png', 'assets/images/black-muffin.png', 'assets/images/black-kayak.png', 'assets/images/black-bicycle.png', 'assets/images/black-sandals.png'];

// Name images included
let image_type = [];
for(var i=0; i<img_src.length; i++)
{
  image_type.push("image"+i);
}

// Configure particles-js
particlesJS('particles-js',  
  {
    "particles": {
      "number": {
        "value": img_src.length, // No of images
        "density": {
          "enable": true,
          "value_area": 500 // Specify area (Lesser is greater density)
        }
      },
      "color": {
        "value": "#5affd4"
      },
      "shape": {
        "type":  image_type, // Add images to particle-js
        "stroke": {
          "width": 0,
        },
        "polygon": {
          "nb_sides": 4
        }
      },
      "opacity": {
        "value": 0.3, // Adjust opactiy
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 32, // Adjust the image size
        "random": false,
        "anim": {
          "enable": false,
          "speed": 10,
          "size_min": 40,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 200,
        "color": "#ffffff",
        "opacity": 1,
        "width": 2
      },
      "move": {
        "enable": true,
        "speed": 1,   // Speed of particle motion
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
          "mode": "grab"
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