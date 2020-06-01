# 2020-react-roject
Do something with react

# 개발환경 셋팅하기
1. webpack-dev-server 설치하기
```bash
# npm i -D webpack webpack-cli webpack-dev-server
```
2. package.json 에서 webpack-dev-server 셋팅하기
```json
{
  "scripts": {
    "start": "webpack-dev-server"
  }
}
```
3. index.html 파일 만들고 main.js 연결, src/index.js 파일 생성
4. eslint 설치하기
```bash
# npm i -D eslint
# npx eslint --init 
``` 
5. createElement 함수 만들어 보기
```javascript
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
                ...[1,2,3].map(i=> document.createTextNode(`Hello Number : ${i}`)),
				document.createTextNode("Hello world1"),
				document.createTextNode("Hello world2"),
				document.createTextNode("Hello world3"),
			)
		)
	);

})();
```