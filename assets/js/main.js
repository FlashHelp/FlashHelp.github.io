var w = window.innerWidth ||
	document.documentElement.clientWidth ||
	document.body.clientWidth;

var h = window.innerHeight ||
	document.documentElement.clientHeight ||
	document.body.clientHeight;

document.getElementById("topBox").style.height = h-10 + "px";

window.onload = function() {
	load_home();
}

function load_home() {
	document.getElementById("iconsView").innerHTML =
		'<object type="text/html" data="https://boxicons.com" width="100%" height="100%"></object>';
}
