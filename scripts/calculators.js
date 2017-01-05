function calculateZInterval(){
	// do calculations in here.
	var button = document.createElement('button');
	var textNode = document.createTextNode('Click Me!');
	button.appendChild(textNode);
	button.className = 'mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect';
	componentHandler.upgradeElement(button);
	document.getElementById('container').appendChild(button);
}