'use strict';

/* @jsx createElement */
//createElement 를 사용하도록 변경처리된다.
(() => {

	function createElement(tag, props = {}, ...children) {
		const element = document.createElement(tag);
		Object.entries(props || {}).forEach(([key, value]) => {
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

	let count = 0;

	function handleClick() {
		count++;
		render();
	}

	function handleClickNumber(number) {
		count = number;
		render();
	}

	function render() {
		const element = (
			<div id="hello" className={"greeting"}>
				<p>Hello world</p> ({count})
				<p>
					<button onClick={handleClick}>Click Me! {count}</button>
				</p>
				<p>
					{[1,2,3].map(n => <button onClick={()=>handleClickNumber(n)}>{n}</button>)}
				</p>
			</div>
		);

		document.querySelector("#app").textContent = '';
		document.querySelector("#app").appendChild(element);
	}

	render();
})();