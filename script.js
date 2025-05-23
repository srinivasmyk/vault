'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const loginModal = document.querySelector('.modal-login');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnCloseLoginModal = document.querySelector('.login-close');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const header = document.querySelector('.header');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const  btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');
const loginOpenAccount =document.querySelector('.login-openAccount');
const logout =document.querySelector('.logout');


function getTypedValue(){
    var result= getElementById("bankSearch").value;
    aptrinsic('track',"bankistSearch",{"searchTerm":result});
}

function mercclick(){
var r= document.querySelector('.cevent');
    r.innerHTML = "https://support.gainsight.com/PX";
    r.href="https://support.gainsight.com/PX";
    
}
//aptrinsic('set', 'globalContext', {"version":555, "name":"Vault"});


//////////////////////////////

const openModal = function (e) {
  //e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const openLoginModal = function (e) {
 // e.preventDefault();
  loginModal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function (e) {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
const closeLoginModal = function (e) {
  loginModal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn  => btn.addEventListener('click', function(e){
  //console.log(e.target.classList);
  if(e.target.classList.contains('login')) {
    openLoginModal();
  }
  else{
    openModal();
  }
}));


//btnCloseModal.addEventListener('click',closeModal);
//btnCloseLoginModal.addEventListener('click',closeLoginModal);
//overlay.addEventListener('click', closeModal);


document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

/////////////////////////
////login page logic

// loginOpenAccount.addEventListener('click',function(e){
//   document.querySelector('.login-modal-login').classList.add('hidden');
// });hjkhg


////////////////////////

const message= document.createElement('div');
message.classList.add('cookie-message');
message.textContent='we use cookie for improved service';
message.innerHTML='we use cookie for improved service . <button class="btn btn--close-cookie">Got it!!</button>';

//header.prepend(message);
//header.append(message);

////removing
document.querySelector(".btn--close-cookie").addEventListener('click',function(){
  message.classList.add('hidden');
});

////scrolll


btnScrollTo.addEventListener('click', (e) =>{
  const s1Cords = section1.getBoundingClientRect();
// window.scrollTo({
//   left: s1Cords.left + window.pageXOffset,
//   top: s1Cords.top + window.pageYOffset,
//   behavior: 'smooth',
// });
section1.scrollIntoView({behavior:'smooth'});
});

///////page navigation///////

// document.querySelectorAll('.nav__link').forEach(
//   (el)=>{
//     el.addEventListener('click', function (e){
//       e.preventDefault();

//       const id = this.getAttribute('href');
//       document.querySelector(id).scrollIntoView({behavior:'smooth'});
//     })
//   }
// )

//event delegation

document.querySelector('.nav__links').addEventListener
('click',function(e){
  if(!e.target.classList.contains('ops')) {
  
  if(target.classList.contains('nav__link')){
    e.preventDefault();
      const id = target.getAttribute('href');
      document.querySelector(id).scrollIntoView({behavior:'smooth'});
  }
  }
});


///////tabed content ---operations/////




tabsContainer.addEventListener('click', function(e){
  const clicked = e.target.closest('.operations__tab');////selecting the nearest  

  if(!clicked) return;

  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');

  ///content !!!
  tabsContent.forEach(t => t.classList.remove('operations__content--active'));
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');

});

///////////////////////menu fade animation////////////////////////////

const handleHover = function(e,opacity){
  if(  e.target.classList.contains('nav__link')){
    const link = e.target;
    const sibling= link.closest('.nav').querySelectorAll('.nav__link');
    const logo= link.closest('.nav').querySelector('img');

    sibling.forEach(el =>{
      if(el !=link) el.style.opacity =this;
    });

    logo.style.opacity= this;

  }
}

// nav.addEventListener('mouseover', function(e){
//   handleHover(e, 0.5);
// })
// nav.addEventListener('mouseout', function(e){
//   handleHover(e, 1);
//   })
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));


////sticky nav bar//////////

// const initialChords = section1.getBoundingClientRect();

// window.addEventListener('scroll', function(e){
// if(this.window.scrollY > initialChords.top) nav.classList.add('sticky')
// });

// ////////Top nav button////////

const goTop = document.querySelector('.btnSticky');

goTop.addEventListener('click', function(e){
  e.preventDefault();
  document.querySelector('.header').scrollIntoView({behavior:"smooth"});
})


/////////Sticky nav Intersection Observer API

const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);


////////////image reveal///////////////////

const allSections = document.querySelectorAll('.section');
const revealSection = function(entries, observer){
  const [entry]= entries;

  if(!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target)
};
const sectionObserver = new IntersectionObserver(
  revealSection, {
    root:null,
    threshold: 0.15,
  });

  allSections.forEach(function(section){
    sectionObserver.observe(section);
    section.classList.add('section--hidden')
  })
  //////lazy load img////

  const imgTargets = document.querySelectorAll('img[data-src]');

  const loadImg = function(entries, observer){
const [entry] = entries;

if(!entry.isIntersecting) return;

entry.target.src = entry.target.dataset.src;
entry.target.addEventListener('load',function(){
  entry.target.classList.remove('lazy-img');
})

observer.unobserve(entry.target);
  }

  const imgObserver = new IntersectionObserver(loadImg,{
    root:null,
    threshold:0,
    rootMargin:'200px',///load even before reaching the img
  });

  imgTargets.forEach(img => imgObserver.observe(img));

  //////slider section/////

  const slider = function () {
    const slides = document.querySelectorAll('.slide');
    const btnLeft = document.querySelector('.slider__btn--left');
    const btnRight = document.querySelector('.slider__btn--right');
    const dotContainer = document.querySelector('.dots');
  
    let curSlide = 0;
    const maxSlide = slides.length;
  
    // Functions
    const createDots = function () {
      slides.forEach(function (_, i) {
        dotContainer.insertAdjacentHTML(
          'beforeend',
          `<button class="dots__dot" data-slide="${i}"></button>`
        );
      });
    };
  
    const activateDot = function (slide) {
      document
        .querySelectorAll('.dots__dot')
        .forEach(dot => dot.classList.remove('dots__dot--active'));
  
      document
        .querySelector(`.dots__dot[data-slide="${slide}"]`)
        .classList.add('dots__dot--active');
    };
  
    const goToSlide = function (slide) {
      slides.forEach(
        (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
      );
    };
  
    // Next slide
    const nextSlide = function () {
      if (curSlide === maxSlide - 1) {
        curSlide = 0;
      } else {
        curSlide++;
      }
  
      goToSlide(curSlide);
      activateDot(curSlide);
    };
  
    const prevSlide = function () {
      if (curSlide === 0) {
        curSlide = maxSlide - 1;
      } else {
        curSlide--;
      }
      goToSlide(curSlide);
      activateDot(curSlide);
    };
  
    const init = function () {
      goToSlide(0);
      createDots();
  
      activateDot(0);
    };
    init();
  
    // Event handlers
    btnRight.addEventListener('click', nextSlide);
    btnLeft.addEventListener('click', prevSlide);
  
    document.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') prevSlide();
      e.key === 'ArrowRight' && nextSlide();
    });
  
    dotContainer.addEventListener('click', function (e) {
      if (e.target.classList.contains('dots__dot')) {
        const { slide } = e.target.dataset;
        goToSlide(slide);
        activateDot(slide);
      }
    });
  };
  slider();

  ////////Logout handling//////////

  logout.addEventListener('click',function(){
    window.aptrinsic('reset');
  })
  
//////////////////////////

function PXPageTimer(maxSecondsTracked, trackPagesOverMax) {
  this.pageName = null;
  this.startTime = null;
  this.maxSecondsTracked = maxSecondsTracked || 3600 * 24;
  this.trackPagesOverMax = trackPagesOverMax !== false;
  this.startTimer = function (pageName) {
    try {
      if (this.pageName && this.pageName !== pageName) {
        this.endTimer();
      }
      this.pageName = pageName;
      this.startTime = Date.now();
    } catch (e) {
      console.log("Unable to start timer on ", this.pageName);
    }
  };
  this.endTimer = function (pageUnloaded) {
    try {
      if (this.pageName) {
        let endTime = Date.now();
        let secondsOnPage = (endTime - this.startTime) / 1000;
          
        if (secondsOnPage%5==0) {
          window.aptrinsic('track', 'timeOnPage', {
            'pageName': this.pageName,
            'seconds': 5,
            'pageUnloaded': pageUnloaded
          });
        }
        this.pageName = undefined;
      }
    } catch (e) {
      console.log("Unable to log time on page", this.pageName);
    }
  };
}

(function InitializeTimer() {
  let maxSecondsTracked = 60 * 60; // Track time on page for up to one hour
  let trackPagesOverMax = false;  // Ignore any pages over one hour
  let featureTimer = new PXPageTimer(maxSecondsTracked, trackPagesOverMax);
  
  // Initial page
  featureTimer.startTimer(window.location.href);

  window.addEventListener('hashchange', () => {
    featureTimer.startTimer(window.location.href);
  });
  window.addEventListener('popstate', () => {
    featureTimer.startTimer(window.location.href);
  });
  window.addEventListener('beforeunload', () => {
    featureTimer.endTimer(true);
  });
  let realPushState = window.history.pushState;
  window.history.pushState = function (state, title, newLocation) {
    featureTimer.startTimer(newLocation.href);
    return realPushState.apply(window.history, arguments); // Call the original
  };
})();

//////// modal logic
//var modal = document.getElementById('myModal');

// Function to open the modal
function openModal() {
  modal.style.display = 'block';
}

// Function to close the modal
function closeModal() {
  modal.style.display = 'none';
}

// Close the modal when the user clicks anywhere outside of it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}

