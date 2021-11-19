let video = document.querySelector("#player1");
let slider = document.querySelector("#slider");
let volume_display = document.querySelector("#volume");

window.addEventListener("load", function() {
	volume_display.innerHTML = "100%";
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
	video.playbackRate = video.playbackRate / 1.05;
	console.log("New speed is " + video.playbackRate);
})

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 1.05;
	console.log("New speed is " + video.playbackRate);
})

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Original location " + String(video.currentTime));
	video.currentTime += 15;
	if (video.currentTime === video.duration){
		video.currentTime = 0;
		console.log("Going back to beginning");
	}
	console.log("New location " + String(video.currentTime));
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
	volume_display.innerHTML = String(slider.value) + "%";
})

document.querySelector("#vintage").addEventListener("click", function(){
	video.classList.add("oldSchool");
})

document.querySelector("#orig").addEventListener("click", function(){
	video.classList.remove("oldSchool");
})


