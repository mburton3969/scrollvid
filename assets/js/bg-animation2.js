//Intro Section
const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text = intro.querySelector('h1');
//Fulani Section
const fulani = document.querySelector('.fulani');
const fulani_text = fulani.querySelector('h1');
const fulani_bg = fulani.setAttribute('style','background: url("assets/img/fulani.jpg"); background-size:cover;background-repeat:no-repeat;');
//END SECTION
const section = document.querySelector('section');
const end = section.querySelector('h1');

//Scroll Magic
const controller = new ScrollMagic.Controller();

//Scenes
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
const textAnim = TweenMax.fromTo(text, 3, { opacity: 1 }, { opacity: 0 });

let scene2 = new ScrollMagic.Scene({
  duration: 3000,
  triggerElement: intro,
  triggerHook: 0
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
  duration: 3000,
  tiggerElement: fulani,
  triggerHook: 0
})
.addIndicators({
  name: "Fulani Trigger",
  colorTrigger: "blue",
  colorStart: "blue",
  colorEnd: "blue"
})
.setPin(fulani)
.addTo(controller);

//Text Animation 2
const textAnim2 = TweenMax.fromTo(fulani_text, 3, { opacity: 1 }, { opacity: 0 });

let scene4 = new ScrollMagic.Scene({
  duration: 3000,
  triggerElement: intro,
  triggerHook: 0
})
.addIndicators({
  name: "Fulani Text Trigger",
  colorTrigger: "blue",
  colorStart: "blue",
  colorEnd: "blue"
})
.setTween(textAnim2)
//.setPin(fulani)
.addTo(controller);


//Video Animation
let accelAmount = 0.35;//Edit to change the slow to stop effect
let scrollpos = 0;
let delay = 0;

scene.on('update', e => {
  scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
  delay += (scrollpos - delay) * accelAmount;
  console.log(scrollpos, delay);
  video.currentTime = delay;
}, 175);//change the refresh rate depending on the frame rate of the video.
