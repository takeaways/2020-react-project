'use strict';

/* @jsx createElement */
//createElement 를 사용하도록 변경처리된다.
(() => {

	function createElement(tag, props = {}, ...children) {
		const element = document.createElement(tag);
		Object.entries(props || {}).forEach(([key, valuenpm]) => {
			element[key.toLowerCase()] = value;
		});

		children.flat().forEach(child => {
			if (child instanceof Node) {
				element.appendChild(child);
				return;
			}
			element.appendChild(document.createTextNode(child));
		});
		return element;
	}

	function handleClick() {

		const target = document.querySelector("#count");
		const countText = target.textContent;
		let countNumber = parseInt(countText, 10);
		countNumber++;
		target.textContent = countNumber.toString();
		// render();

	}


	function render() {
		const element = (
			<div id="hello" className="greeting">
				<p>Count:</p>
				<span id="count">0</span>
				<p>
					<button onClick={() => handleClick()}>Click Me!</button>
				</p>
			</div>
		);

		document.querySelector("#app").textContent = '';
		document.querySelector("#app").appendChild(element);
	}

	render();
})();