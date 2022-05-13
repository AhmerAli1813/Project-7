var heart = document.getElementById("heart1");
var bar1 = document.getElementById("bars1");
var playlist = document.getElementById("playlist");
function heart1(){
    heart.classList.remove('far');
    heart.classList.add('fas');
   
    }
function bars1(){
    bar1.classList.remove('fa-bars');
    bar1.classList.remove('fa-bars');
}
// songs
    
let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");

// Specify globally used values
let track_index = 0;
let isPlaying = false;
let updateTimer;

let curr_track = document.createElement('audio');

// Define the list of tracks that have to be played
let track_list = [
{
	name: "Night Owl",
	artist: "Broke For Free",
	image: "img/pexels-harrison-haines-3536244.jpg",
	path: "audio/Kun.mp3"
},
{
	name: "Enthusiast",
	artist: "Tours",
	image: "img/pexels-justinas-stanislovaitis-4003004.jpg",
	path: "audio/1.mp3"
},
{
	name: "Shipping Lanes",
	artist: "Chad Crouch",
	image: "img/pexels-jeremy-bishop-2923591.jpg",
	path: "audio/1.mp3",
},
];

// step 2
function loadTrack(track_index) {
	// Clear the previous seek timer
	clearInterval(updateTimer);
	resetValues();
	
	// Load a new track
	curr_track.src = track_list[track_index].path;
	curr_track.load();
	
	// Update details of the track
	track_art.style.backgroundImage =
		"url(" + track_list[track_index].image + ")";
	track_name.textContent = track_list[track_index].name;
	track_artist.textContent = track_list[track_index].artist;
	now_playing.textContent =
		"PLAYING " + (track_index + 1) + " OF " + track_list.length;
	
	updateTimer = setInterval(seekUpdate, 1000);
	curr_track.addEventListener("ended", nextTrack);
	
	// Apply a random background color
	random_bg_color();
	}
	
	
	

	function resetValues() {
	curr_time.textContent = "00:00";
	total_duration.textContent = "00:00";
	seek_slider.value = 0;
	}

	function playpauseTrack() {
	if (!isPlaying) playTrack();
	else pauseTrack();
	}
	
	function playTrack() {
	// Play the loaded track
	curr_track.play();
	isPlaying = true;
	
	// Replace icon with the pause icon
	playpause_btn.innerHTML = '<i class="fa fa-pause-circle "></i>';
	}
	
	function pauseTrack() {

	curr_track.pause();
	isPlaying = false;
	

	playpause_btn.innerHTML = '<i class="fa fa-play-circle "></i>';
	}
	
	function nextTrack() {
	if (track_index < track_list.length - 1)
		track_index += 1;
	else track_index = 0;
	
	// Load and play the new track
	loadTrack(track_index);
	playTrack();
	}
	
	function prevTrack() {
	if (track_index > 0)
		track_index -= 1;
	else track_index = track_list.length - 1;
		
	// Load and play the new track
	loadTrack(track_index);
	playTrack();
	}
	// step
	function seekTo() {
	seekto = curr_track.duration * (seek_slider.value / 100);
	

	curr_track.currentTime = seekto;
	}
	
	function setVolume() {

	curr_track.volume = volume_slider.value / 100;
	}
	
	function seekUpdate() {
	let seekPosition = 0;
	
	// Check if the current track duration is a legible number
	if (!isNaN(curr_track.duration)) {
		seekPosition = curr_track.currentTime * (100 / curr_track.duration);
		seek_slider.value = seekPosition;
	
		// Calculate the time left and the total duration
		let currentMinutes = Math.floor(curr_track.currentTime / 60);
		let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
		let durationMinutes = Math.floor(curr_track.duration / 60);
		let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);
	
		// Add a zero to the single digit time values
		if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
		if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
		if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
		if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }
	
		// Display the updated duration
		curr_time.textContent = currentMinutes + ":" + currentSeconds;
		total_duration.textContent = durationMinutes + ":" + durationSeconds;
	}
	}
	