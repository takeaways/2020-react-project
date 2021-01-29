# 2020-react-project

Do something with react

# 개발환경

- https://joshua1988.github.io/webpack-guide/guide.html

1. webpack-dev-server설치하기

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

5. createElement 함수 만들어 보기.

```javascript
(() => {
	'use strict';

	function _createElement(tag, ...children) {
		const element = document.createElement(tag);
		children.forEach((child) => {
			element.appendChild(child);
		});
		return element;
	}

	document
		.querySelector('#app')
		.appendChild(
			_createElement(
				'div',
				_createElement(
					'p',
					...[1, 2, 3].map((i) =>
						document.createTextNode(`Hello Number : ${i}`)
					),
					document.createTextNode('Hello world1'),
					document.createTextNode('Hello world2'),
					document.createTextNode('Hello world3')
				)
			)
		);
})();
```

6. Babel 사용해보기

- DSL (Domain Specific Language)
- 최신의 javascript 코드를 구버전의 자바스크립트로 변경하는 것이 가능하다.


```bash
# npm install -D babel-loader //webpack에서 babel을 사용할 수 있도록 처리 할 수 있게 도와줌.
# npn install -D @babel/core
# npm install -D @babel/preset-env @babel/preset-react
```

- webpack.config.js 파일 설정해주기

```javascript
module.exports = {
	module: {
		rules: [
			{
				test: /\.jsx?$/g,
				exclude: /node_modules/,
				use: 'babel-loader',
			},
		],
	},
};
```

- babel.config.js 파일 설정

```javascript
module.exports = {
	presets: [
		[
			'@babel/preset-env',
			{
				targets: {
					node: 'current',
				},
			},
		],
		'@babel/preset-react',
	],
};
```

7. jsx : javascript를 이용한 DOM을 구현한다

```javascript
// 다음과 같이 index.js 파일 내부에서 HTML DOM을 사용하는 행위를 하게되면 
// 내부 적으로 React.createElemet() 함수의 객체로 새로운 객체가 생성 된다.

const element = (
    <div>Hello Jsx</div>
)
```
