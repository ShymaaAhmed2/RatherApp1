// sart navbar 
//  scroll padding 
let nav= document.querySelector(".navbar");
let offcanva = document.querySelector('.offcanvas');
window.onscroll = function(){
  nav.classList.replace("p-3","p-1");
  offcanva.style = ` margin-top: 60px;
  width: 270px;
  transition: 0.5s;`;
  if(window.scrollY === 0){
    nav.classList.replace("p-1","p-3");
    offcanva.style = ` margin-top: 85px;
    width: 270px;
    transition: 0.5s;`;
  }
}
// icon change 

let icons=document.querySelector(".sidebarbottom");
icons.onclick=function(){
  this.children[0].classList.toggle("active");
}

// end navbar 
const swiper = new Swiper('.swiper', {
  direction: 'vertical',
  loop: true,
  autoplay: {
    delay: 5000, // Time in milliseconds between transitions
    disableOnInteraction: false, // Set to false to continue autoplay even when user interacts with the swiper
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

// button 

var exampleModal = document.getElementById('exampleModal');
  exampleModal.addEventListener('show.bs.modal', function (event) {
    // Button that triggered the modal
    var button = event.relatedTarget;
    
    // Extract info from data-bs-* attributes
    var recipient = button.getAttribute('data-bs-whatever');

    // If necessary, you could initiate an AJAX request here
    // and then do the updating in a callback.
    //
    // Update the modal's content.
    var modalTitle = exampleModal.querySelector('.modal-title');
    var modalBodyInput = exampleModal.querySelector('.modal-body input');

    modalTitle.textContent = 'Contact Us ' ;
    // modalBodyInput.value = recipient;
  });

  // form submit 
  let submit = document.querySelector(".submit");
  let namee = document.querySelector(".name");
  let email = document.querySelector(".email");
  let phone = document.querySelector(".phone");
let textarea= document.querySelector(".textarea");
  let loadingMessage = document.getElementById("loadingMessage");
  let successMessage = document.getElementById("successMessage");

  let spanName = document.querySelector(".name-validation");
  let spanEmail = document.querySelector(".email-validation");
  let spanPhone = document.querySelector(".phone-validation");
  let spanTextarea = document.querySelector(".textarea-validation")


submit.addEventListener("click",(e) =>{
  validateField (namee,spanName,e);
  validateField (email,spanEmail,e);
  validateField (phone,spanPhone,e);
  validateField (textarea,spanTextarea,e);
  if (
    namee.value !== "" &&
    email.value !== "" &&
    phone.value !== "" &&
    textarea.value !== ""
  ) {
    sendMassage();
  }
});

let inputFields = document.querySelectorAll(".form-control");

inputFields.forEach((input) => {
  input.addEventListener("focus", () => {
    input.nextElementSibling.style.display = "none";
    input.style.borderColor = "";
  });
});
function validateField(input,span,event){
  if(input.value === "" || input.value== null){
    event.preventDefault ();
    span.style.display= "block";
    input.style.borderColor= "red"
  } else {
    span.style.display= "none";
    input.style.borderColor= ""
  }
}
function sendMassage(){
 
  loadingMessage.style.display = "block";

  setTimeout (() =>{
    loadingMessage.style.display = "none"
    successMessage.style.display = "block"
// clear input fields
namee.value ="";
email.value = "";
phone.value ="";
textarea.value= "";
setTimeout (() =>{
successMessage.style.display= "none";

},3000);
  },2000);
}



//  start up 

let up = document.querySelector(".up");
window.onscroll =function(){
  this.scrollY >= 500 ? up.classList.add("show"): up.classList.remove("show");
};
up.onclick = function(){
  window.scrollTo({
    top :0,
    behavior:"smooth",
  });

}
// end up 
// start Projects 

const grid = document.querySelector('.last-grid');

const iso = new Isotope(grid, {
  itemSelector: '.last-grid-item',
});

const filterContainer = document.querySelector('.last-filter');
filterContainer.addEventListener('click', function(event) {

  if (event.target.tagName === 'DIV') {
    const value = event.target.getAttribute('data-name');
    iso.arrange({
      filter: value 
    });
  }
});
let lis= document.querySelectorAll(".last-filter div");
lis.forEach((li) =>{
  li.addEventListener("click",removeActive);
});
function removeActive(){
  lis.forEach((li) =>{
    li.classList.remove("active");
    this.classList.add("active");
  });
}




/* when using aos libarary that change postion of isotope libarary elements so we make when click on any filter ele in a more 
  correct sense when using isotope delete the data-aos attribute to cencel effect of aos libarary that make over write on
  isotope libarary*/

let gridItems = document.querySelectorAll('.last-grid-item');
let filterEles = document.querySelectorAll('.last-filter div');
filterEles.forEach(ele => {
  ele.onclick = function(){
    gridItems.forEach(elee => {
      elee.removeAttribute('data-aos');
    });
  }
})

lightGallery(document.getElementById('animated-thumbnails'),{ 
  selector: '.iconLink',
  plugins:[lgAutoplay ,lgFullscreen , lgZoom ,lgRotate, lgShare , lgThumbnail]
});

// end projects 
// start experience 
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 380,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
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
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
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
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
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
});

let experience = document.querySelector(".experience");
let counter = document.querySelectorAll(".counter");
let start = false;

window.addEventListener('scroll', function () {
  if (window.scrollY >= experience.offsetTop - 400) {
    if (!start) {
      counter.forEach((count) => {
        let goal = parseInt(count.dataset.goal);
        let num = setInterval(() => {
          let current = parseInt(count.textContent);
          count.textContent = current < goal ? current + 1 : goal;

          if (current >= goal) {
            clearInterval(num); // Stop counting when the goal is reached
          }
        }, 1000 / goal);
      });
    }
    start = true;
  }
});

//  end experience 
// app 
let imgs = document.querySelectorAll('.app .row .images img');
imgs.forEach((img,index)=>{
  img.onclick = function(){
    img.classList.add('back');
    if(index == 0){
      imgs[1].classList.remove('back');
    } else {
      imgs[0].classList.remove('back');
    }
  }

})
// starting footer 
let data = new Date();
let year = data.getFullYear();
document.querySelector('.footer .year').innerHTML = ` ${year}` ; 

// initilazation of aos 
AOS.init();