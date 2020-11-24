var request = new XMLHttpRequest();
request.open("GET", "/assets/video/boxer2.mp4", true);
/* set the response to blob type */
request.responseType = "blob";
request.onload = function () {
  if (this.status === 200) {
     var videoBlob = this.response;
     /* create the video URL from the blob */
     var videoUrl = URL.createObjectURL(videoBlob);
     /* set the video URL as source on the video element */
     video.src = videoUrl;
     console.log('Video SRC Loaded...');
  }
}
request.onerror = function() {
  alert('Error Loading Video SRC...');
}
//request.send();