//Scroll Magic
const controller = new ScrollMagic.Controller();

const scenes = document.querySelectorAll('.scene');
console.log(scenes);


scenes.forEach(function(s){
  var duration = s.dataset.duration;
  var triggerHook = s.dataset.triggerhook;
  var indicator_name = s.dataset.indicatorname;
  var bg = s.dataset.bgimg;
  if(bg){
    console.warn('yes');
    s.setAttribute('style','background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("'+bg+'");');
    s.style.backgroundSize = 'cover';
    s.style.backgroundRepeat = 'no-repeat';
  }else{
    console.warn('no background data found...');
    bg = false;
  }
  //Intro Scenes
  let scene = new ScrollMagic.Scene({
    duration: duration,
    triggerElement: s,
    triggerHook: triggerHook
  })
  .addIndicators({
    name: indicator_name,
    colorTrigger: "blue",
    colorStart: "blue",
    colorEnd: "blue"
  })
  .setPin(s)
  .addTo(controller);
  
  var title = s.querySelector('h1');
  var texts = s.querySelectorAll('h2');
  console.log(texts);
  
  
  
});
