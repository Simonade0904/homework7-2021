let video = document.querySelector("#player1");
let slider = document.querySelector("#slider");

window.addEventListener("load", function() {
	console.log("Good job opening the window");
});

document.querySelector("#play").addEventListener("click", function() {
	video.play();
	console.log("Play Video");
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
	console.log("Pause Video");
})

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Old video speed is " + video.playbackRate);
	video.playbackRate = video.playbackRate / 1.05;
	console.log("New video speed is " + video.playbackRate);
})

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Old video speed is " + video.playbackRate);
	video.playbackRate = video.playbackRate * 1.05;
	console.log("New video speed is " + video.playbackRate);
})

document.querySelector("#mute").addEventListener("click", function() {
	if (video.volume !== 0){
		video.volume = 0
		document.querySelector("#mute").innerHTML = "Unmute";
	}

	else {
		video.volume = slider.value / 100;
		document.querySelector("#mute").innerHTML = "Mute";
	}	
})

slider.addEventListener("change", function(){
	video.volume = slider.value / 100;
})

document.querySelector("#vintage").addEventListener("click", function(){
	video.classList.add("oldSchool");
})

document.querySelector("#orig").addEventListener("click", function(){
	video.classList.remove("oldSchool");
})


