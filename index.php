<?php
$cache_buster = uniqid();
?>
<html>
  <head>
    <title>Title</title>
    <link href="assets/css/style.css" rel="stylesheet" />
  </head>
  <body>
          
      <div class="intro">
        <h1>
          Demo Animation
        </h1>
        <video>
          <source src="assets/video/boxer.mp4" type="video/mp4">
          Your browser does not support this video type...
        </video>
      </div>
      
      <section>
        <h1>
          Power Tools
        </h1>
      </section>
        
  </body>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/ScrollMagic.min.js" integrity="sha512-8E3KZoPoZCD+1dgfqhPbejQBnQfBXe8FuwL4z/c8sTrgeDMFEnoyTlH3obB4/fV+6Sg0a0XF+L/6xS4Xx1fUEg==" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/plugins/animation.gsap.js" integrity="sha512-judXDFLnOTJsUwd55lhbrX3uSoSQSOZR6vNrsll+4ViUFv+XOIr/xaIK96soMj6s5jVszd7I97a0H+WhgFwTEg==" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/plugins/debug.addIndicators.js" integrity="sha512-mq6TSOBEH8eoYFBvyDQOQf63xgTeAk7ps+MHGLWZ6Byz0BqQzrP+3GIgYL+KvLaWgpL8XgDVbIRYQeLa3Vqu6A==" crossorigin="anonymous"></script>
  <script src="assets/js/video-loader.js?cb=<?php echo $cache_buster; ?>"></script>
  <script src="assets/js/bg-animation.js?cb=<?php echo $cache_buster; ?>"></script>
  
</html>