var arr = [
"my->heart doesnt throw any dereference errors because my heart points to you!",
"I need those loop invariants because otherwise I would keep looking at you forever.",
"Is your name Google? Because you have everything I've been searching for.",
"Is your name Wi-fi? Because I'm really feeling a connection.",
"You had me at \"Hello World.\"",
"I think you've stolen the ASCII to my heart.",
"What font do you use? because you're my type.",
"Even if I stopped using Tkinter I could never make esomething as beautiful as you!",
"I'd switch to emacs for you.",
"You auto-complete me",
"You are my loop condition. I keep coming back to you.",
"I always thought Love is an abstract class, until you created an instance of it.",
"Hey Girl, are you the Cook-Levin theroem? cause you NP-complete me",
"I don't need to run DFS because your the one I'm looking for",
"I'd break Gale-Shapely, because your the only one on my preference list",
"Are you a karp reduction? Cause you make me NP-hard",
"You are always at the top of my priority queue.",
"If I tried to calculate how much I care about you I would get an overflow error.",
"Your beauty puts me into an infinite loop!",
"I can't use RSA against you because you already have the key to my heart"
]


function newLine() {

	var rand = Math.floor(Math.random() * (arr.length));
	//document.getElementById('lines').innerHTML = arr[rand];

	Typed.new(".element", {
			strings: [arr[rand]],
			typeSpeed: 20
		});
	
}