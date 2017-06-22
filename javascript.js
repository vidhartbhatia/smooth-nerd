var lines = [
" *my_heart doesnt throw any dereference errors because my_heart points to you!",
"I need those loop invariants because otherwise I would keep looking at you forever.",
""
]

function newLine() {
	var rand = Math.floor(Math.random() * (lines.length));
	document.getElementById('lines').innerHTML = lines[rand];

}
