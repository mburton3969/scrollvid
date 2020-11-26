//Intro Section
const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text = intro.querySelector('h1');
const text2 = intro.querySelector('.intro_text_2');
//Fulani Section
const fulani = document.querySelector('.fulani');
fulani.setAttribute('style','background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("assets/img/fulani.jpg");');
fulani.style.backgroundSize = 'cover';
fulani.style.backgroundRepeat = 'no-repeat';
const fulani_title = fulani.querySelector('h1');
const fulani_text_1 = fulani.querySelector('.fulani_text_1');
const fulani_text_2 = fulani.querySelector('.fulani_text_2');
//IDP SECTION
const idp = document.querySelector('.idp');
idp.setAttribute('style','background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://cdn.statically.io/img/nigeria.ignition633.org/wp-content/uploads/2020/07/IDP-camp2-2.jpeg") 50% 50%;');
idp.style.backgroundSize = 'cover';
idp.style.backgroundRepeat = 'no-repeat';
const idp_title = idp.querySelector('h1');
const idp_text_1 = idp.querySelector('.idp_text_1');
const idp_text_2 = idp.querySelector('.idp_text_2');
const idp_text_3 = idp.querySelector('.idp_text_3');
//END SECTION
const section = document.querySelector('section');
const end = section.querySelector('h1');

//Scroll Magic
const controller = new ScrollMagic.Controller();

//Intro Scenes
let scene = new ScrollMagic.Scene({
  duration: 9000,
  triggerElement: intro,
  triggerHook: 0
})
.addIndicators({
  name: "Intro Trigger",
  colorTrigger: "blue",
  colorStart: "blue",
  colorEnd: "blue"
})
.setPin(intro)
.addTo(controller);

//Text Animation
const textAnim = TweenMax.fromTo(text, 2, { opacity: 1 }, { opacity: 0 });
//Text Animation 3
const textAnim3 = TweenMax.fromTo(text2, 2, { opacity: 1 }, { opacity: 0 });
//Text Animation 2
const textAnim2 = TweenMax.fromTo(text2, 2, { opacity: 0 }, { opacity: 1 });

let scene2 = new ScrollMagic.Scene({
  //duration: 2000,
  triggerElement: intro,
  triggerHook: 0,
  offset: 150
})
.addIndicators({
  name: "Intro Text Trigger",
  colorTrigger: "blue",
  colorStart: "blue",
  colorEnd: "blue"
})
.setTween(textAnim)
.addTo(controller);


let scene3 = new ScrollMagic.Scene({
  //duration: 2000,
  triggerElement: intro,
  triggerHook: 0,
  offset: 2000
})
.addIndicators({
  name: "Intro Text2 Trigger",
  colorTrigger: "blue",
  colorStart: "blue",
  colorEnd: "blue"
})
.setTween(textAnim2)
.addTo(controller);


let scene4 = new ScrollMagic.Scene({
  //duration: 2000,
  triggerElement: intro,
  triggerHook: 0,
  offset: 4000
})
.addIndicators({
  name: "Intro Text3 Trigger",
  colorTrigger: "blue",
  colorStart: "blue",
  colorEnd: "blue"
})
.setTween(textAnim3)
.addTo(controller);



//FULANI SCENES

//Text Animation 4
const textAnim4 = TweenMax.fromTo(fulani_title, 2, { opacity: 0 }, { opacity: 1 });
//Text Animation 5
const textAnim5 = TweenMax.fromTo(fulani_text_1, 2, { opacity: 0 }, { opacity: 1 });
//Text Animation 6
const textAnim6 = TweenMax.fromTo(fulani_text_2, 2, { opacity: 0 }, { opacity: 1 });

let scene5 = new ScrollMagic.Scene({
  duration: 2000,
  triggerElement: '.fulani',
  triggerHook: 0,
})
.addIndicators({
  name: "Fulani Title Trigger",
  colorTrigger: "blue",
  colorStart: "blue",
  colorEnd: "blue"
})
.setPin(fulani)
.addTo(controller);

let scene6 = new ScrollMagic.Scene({
  triggerElement: '.fulani',
  triggerHook: 0,
})
.addIndicators({
  name: "Fulani Title Trigger",
  colorTrigger: "blue",
  colorStart: "blue",
  colorEnd: "blue"
})
.setTween(textAnim4)
.addTo(controller);

let scene7 = new ScrollMagic.Scene({
  triggerElement: '.fulani',
  triggerHook: 0,
  offset: 500
})
.addIndicators({
  name: "Fulani Text1 Trigger",
  colorTrigger: "blue",
  colorStart: "blue",
  colorEnd: "blue"
})
.setTween(textAnim5)
.addTo(controller);

let scene8 = new ScrollMagic.Scene({
  triggerElement: '.fulani',
  triggerHook: 0,
  offset: 1000
})
.addIndicators({
  name: "Fulani Text1 Trigger",
  colorTrigger: "blue",
  colorStart: "blue",
  colorEnd: "blue"
})
.setTween(textAnim6)
.addTo(controller);


//IDP Scenes

//Text Animation 7
const textAnim7 = TweenMax.fromTo(idp_title, 2, { opacity: 0 }, { opacity: 1 });
//Text Animation 8
const textAnim8 = TweenMax.fromTo(idp_text_1, 2, { opacity: 0 }, { opacity: 1 });
//Text Animation 9
const textAnim9 = TweenMax.fromTo(idp_text_2, 2, { opacity: 0 }, { opacity: 1 });
//Text Animation 10
const textAnim10 = TweenMax.fromTo(idp_text_3, 2, { opacity: 0 }, { opacity: 1 });

let scene9 = new ScrollMagic.Scene({
  duration: 2500,
  triggerElement: idp,
  triggerHook: 0,
})
.addIndicators({
  name: "IDP Title Trigger",
  colorTrigger: "blue",
  colorStart: "blue",
  colorEnd: "blue"
})
.setPin(idp)
.addTo(controller);

let scene10 = new ScrollMagic.Scene({
  triggerElement: idp,
  triggerHook: 0,
})
.addIndicators({
  name: "IDP Title Trigger",
  colorTrigger: "blue",
  colorStart: "blue",
  colorEnd: "blue"
})
.setTween(textAnim7)
.addTo(controller);

let scene11 = new ScrollMagic.Scene({
  triggerElement: idp,
  triggerHook: 0,
  offset: 500
})
.addIndicators({
  name: "IDP Text1 Trigger",
  colorTrigger: "blue",
  colorStart: "blue",
  colorEnd: "blue"
})
.setTween(textAnim8)
.addTo(controller);

let scene12 = new ScrollMagic.Scene({
  triggerElement: idp,
  triggerHook: 0,
  offset: 1000
})
.addIndicators({
  name: "IDP Text2 Trigger",
  colorTrigger: "blue",
  colorStart: "blue",
  colorEnd: "blue"
})
.setTween(textAnim9)
.addTo(controller);

let scene13 = new ScrollMagic.Scene({
  triggerElement: idp,
  triggerHook: 0,
  offset: 1500
})
.addIndicators({
  name: "IDP Text3 Trigger",
  colorTrigger: "blue",
  colorStart: "blue",
  colorEnd: "blue"
})
.setTween(textAnim10)
.addTo(controller);



//Video Animation
let accelAmount = 0.1;//Edit to change the slow to stop effect
let scrollpos = 0;
let delay = 0;

scene.on('update', e => {
  scrollpos = e.scrollPos / 1000;
  //console.log(scrollpos, e.scrollPos);
});

setInterval(() => {
  delay += (scrollpos - delay) * accelAmount;
  //console.log(scrollpos, delay);
  video.currentTime = delay;
}, 166);//change the refresh rate depending on the frame rate of the video.
