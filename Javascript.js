

$("#button1").on("click", function() {
	//Increase the size of the box.
	$("#box").animate({height:"+=35px", width:"+=35px"}, "fast");
})

$("#button5").on("click", function() {
	//Decrease the size of the box.
	$("#box").animate({height:"-=35px", width:"-=35px"}, "fast");
})

$("#button2").on("click", function() {
	//change color
	document.getElementById("box").style.backgroundColor = "blue";
})

$("#button4").on("click", function() {
	//reset
	document.getElementById("box").style.height = "150px";
	document.getElementById("box").style.width = "150px";
	
	document.getElementById("box").style.opacity = "1";
	document.getElementById("box").style.backgroundColor = "orange";
})

$("#button3").on("click", function() {
	//Fade
	document.getElementById("box").style.opacity = ".2";
})