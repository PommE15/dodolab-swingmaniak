(function(){
var q = 0,
	p = 0,
	imagePath = "assets/img/",
	imagePlaylist = ["01.jpg", "02.jpg", "03.jpg"],
	image,
	musicPath = "assets/music/",
	musicPlaylist = ["bossa dorado", "swing for ninine", "SwingManiac_Tr18_v01", "SwingManiac_Tr20_v01"],
	music,
	title;


function getPlayType() {
	if (music.canPlayType("audio/mp3") !== "") { return ".mp3"}
	else if (music.canPlayType("audio/ogg") !== "") { return ".ogg"}
}	

function setTitlelist() {
	var li;	
	for (var i=0; i<musicPlaylist.length; i++){
		li = document.createElement("li")
		li.textContent = musicPlaylist[i];
		li.addEventListener('click', playTitleClickedMusic);
		title.appendChild(li);
}}

function setImagePlaylist() {
	var img;	
	for (var i=0; i<imagePlaylist.length; i++){
		img = document.createElement("img")
		img.src = imagePath + imagePlaylist[i];
		image.appendChild(img);
}}

function changeImage() {
	var n = image.childElementCount;
	
	if (q === n) { q = 0; }
	for (var i=0; i<n; i++) { image.children[i].style.display = "none"; }
	image.children[q].style.display = "block";
	q++;
}

function changeTitle() {
	for (var i=0; i<title.childElementCount; i++) { title.children[i].style.color = "dimgrey"; }
	title.children[p].style.color = "white";
}

function playMusic() {
	if (p === musicPlaylist.length) { p = 0; }
	music.src = musicPath + musicPlaylist[p] + getPlayType();

	music.load();
	music.play();
	p++;
}

function playNext() {
	changeImage();
	changeTitle();
	playMusic();
}

function playTitleClickedMusic(e) {
	var t = e.target;
	for (var i=0; i<title.childElementCount; i++) {
		if (title.children[i] === t) {
			p = i;
			playNext();
	}}
}

function init() {
	image = document.getElementById("image");
	music = document.getElementById("music");
	title = document.getElementById("title");
	
	setImagePlaylist();
	setTitlelist();
	music.addEventListener("ended", playNext, false);
	
	playNext();
}

window.onload = init;
})()