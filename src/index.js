(() => {
	'use strict';

	function _createElement(tag, ...children) {
		const element = document.createElement(tag);
		children.forEach(child => {
			element.appendChild(child);
		});
		return element;
	}

	document.querySelector("#app")
	.appendChild(
		_createElement('div',
			_createElement("p",
				document.createTextNode("Hello world1"),
				document.createTextNode("Hello world2"),
				document.createTextNode("Hello world3"),
			)
		)
	);

})();