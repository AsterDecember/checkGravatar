console.log('js working!');

function getInput() {
	console.log('Info:');
	var input = document.getElementById('input').value;
	document.getElementById('inputText').innerHTML = input;
	console.log(input);
}