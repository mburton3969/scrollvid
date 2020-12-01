<?php
$cache_buster = uniqid();
?>
<html>
  <head>
    <!--<meta name="viewport" content="width=device-width, initial-scale=1.0">-->
    <title>Title</title>
    <link href="assets/css/style.css?cb=<?php echo $cache_buster; ?>" rel="stylesheet" />
  </head>
  <body>
    
      <div class="scene intro">
        <video playsinline autoplay defaultMuted>
          <source src="assets/video/nigeria-slums.mp4" type="video/mp4">
          Your browser does not support this video type...
        </video>
        <h1>
          These are the Issues...
        </h1>
        <h1 class="intro_text_2" style="opacity:0;">
          Facing Nigeria Today
        </h1>
      </div>
          
      <div class="scene fulani" data-bgimg="assets/img/fulani.jpg" data-duration="5000" data-triggerhook="0" data-indicatorname="Fulani Trigger">
        <h1 class="fulani_title">
          Fulani Herdsmen Oppression
        </h1>
        <h2 class="fulani_text_1">
          The Fulani are an Islamic tribe throughout West Africa with a significant population in Nigeria. 
          They are predominantly nomadic, and make their living by herding and trading cattle. There are many 
          radicalized groups of Fulani who have taken up the Islamic Jihad movement and have targeted Christian 
          villages to seize lands needed for their cattle to graze, as well as to achieve their extreme religious 
          beliefs by exterminating Christians.
        </h2>
        <h2 class="fulani_text_2">
          These Fulani Herdsman attacks are DEVESTATING. They pillage and burn down the villages. 
          Many people are ruthlessly killed in their wake of destruction. The villages are purposely 
          left uninhabitable and those who escape seek never to return.
        </h2>
      </div>
    
      <div class="scene idp">
        <h1 class="idp_title">
          Internally Displaced People [IDP] Camps
        </h1>
        <h2 class="idp_text_1">
          The people came into the camps carrying only what they could 
          grab as they fled for their lives. There is currently no organized effort in place to 
          assist this forgotten group. When our team visited for the first time to assess the crises 
          and pray directly with the distraught refugees, two requests immediately emerged:
        </h2>
        <br>
        <h2 class="idp_text_2">
          <span>The ability to bathe.</span> The women in the camps whispered privately to the women on our team 
          that they needed water to bathe. Most of the people in the camps have no ability to wash 
          themselves or attend to their most basic hygiene needs, and go days without bathing in 
          temperatures normally above 100F. Many of the camps do not have good access to clean water 
          and certainly not soap or other cleaning products.
        </h2>
        <br>
        <h2 class="idp_text_3">
          <span>Food.</span> Food is extremely limited. There is constant urgent need for even basic food provisions.
        </h2>
      </div>
    
      <div class="scene edu">
        <h1 class="edu_title">
          Poor Education
        </h1>
        <h2 class="edu_text_1">
          The people came into the camps carrying only what they could 
          grab as they fled for their lives. There is currently no organized effort in place to 
          assist this forgotten group. When our team visited for the first time to assess the crises 
          and pray directly with the distraught refugees, two requests immediately emerged:
        </h2>
        <br>
        <h2 class="edu_text_2">
          <span>The ability to bathe.</span> The women in the camps whispered privately to the women on our team 
          that they needed water to bathe. Most of the people in the camps have no ability to wash 
          themselves or attend to their most basic hygiene needs, and go days without bathing in 
          temperatures normally above 100F. Many of the camps do not have good access to clean water 
          and certainly not soap or other cleaning products.
        </h2>
        <br>
        <h2 class="edu_text_3">
          <span>Food.</span> Food is extremely limited. There is constant urgent need for even basic food provisions.
        </h2>
      </div>
    
      <div class="scene end">
        <video playsinline autoplay defaultMuted>
          <source src="assets/video/nigeria-slums-2.mp4" type="video/mp4">
          Your browser does not support this video type...
        </video>
        <h1>
          Would you consider engaging with us?
        </h1>
        <h1 class="end_text_2">
          <a href="/engage">Click here to find out how</a>
        </h1>
      </div>
    
      <!--<section>
        <h1>
          End Section
        </h1>
      </section>-->
        
  </body>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/ScrollMagic.min.js" integrity="sha512-8E3KZoPoZCD+1dgfqhPbejQBnQfBXe8FuwL4z/c8sTrgeDMFEnoyTlH3obB4/fV+6Sg0a0XF+L/6xS4Xx1fUEg==" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/plugins/animation.gsap.js" integrity="sha512-judXDFLnOTJsUwd55lhbrX3uSoSQSOZR6vNrsll+4ViUFv+XOIr/xaIK96soMj6s5jVszd7I97a0H+WhgFwTEg==" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/plugins/debug.addIndicators.js" integrity="sha512-mq6TSOBEH8eoYFBvyDQOQf63xgTeAk7ps+MHGLWZ6Byz0BqQzrP+3GIgYL+KvLaWgpL8XgDVbIRYQeLa3Vqu6A==" crossorigin="anonymous"></script>
  <script src="assets/js/video-loader.js?cb=<?php echo $cache_buster; ?>"></script>
  <script src="assets/js/bg-animation-2.js?cb=<?php echo $cache_buster; ?>"></script>
  
</html>