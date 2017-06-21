var lines = [
"You look perfectly put together. Do you display this well in IE?",
"I dig your look and feel.",
"If you like what you see now, wait until you look below the fold.",
"Mind if I take you for a usability test?",
"I like my fonts sans-serif and you sans-pants.",
"Are you helvetica? Because you are beautiful and extremely versatile.",
"How do you like your coffee in the morning? I like mine #000000.",
"I only handle the front-end but I know a good developer who can do your back-end.",
"Can I examine your pixels?",
"sup"
]

function newLine() {
	var rand = Math.floor(Math.random() * (lines.length))
	document.getElementById('lineDisplay').innerHTML = "test";
	
}
