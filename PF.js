// JavaScript Document\

function toggle_visibility(id) {
       var e = document.getElementById(id);
       if(e.style.display == 'block')
          e.style.display = 'none';
       else
          e.style.display = 'block';
}

var autoPlayVideo =
	document.getElementById(id);
		autoPlayVideo.oncanplauthrough =
function() {
			autoPlayVideo.muted = true;
			autoPlayVideo.play();
			autoPlayVideo.pause();
			autoPlayVideo.play();
		}