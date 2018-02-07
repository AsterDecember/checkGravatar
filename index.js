console.log('js working!');

function getInput() {
	console.log('Info:');
	var input = document.getElementById('input').value;
	var profile = md5(input.toLowerCase());
	var url = 'https://www.gravatar.com/avatar/'+profile;
	console.log(url);
	document.getElementById('imgGravatar').src = url;
}