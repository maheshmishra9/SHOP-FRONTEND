var images = ["./images/solar2.jpeg",
				"./images/solar3.jpg",
				"./images/solar4.jpg",
				"./images/solar5.jpg",
				"./images/solar-cells-708178_1280.jpg"]

	var i=0;
	function slides(){
		document.getElementById('slide-image1').src = images[i];
		if(i<(images.length-1))

				i++;
				else
				i=0;

	}
setInterval(slides,2000)

// go to top


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("top-btn").style.display = "block";
  } else {
    document.getElementById("top-btn").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;
}







