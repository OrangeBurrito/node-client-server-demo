const baseUrl = 'http://localhost:2200'

const root = query('#app')

console.log(root)

const state = {
	title: 'iApp',
	todos: [{
		id: '456192',
		title: 'Title'
	}]
}

render()

async function render() {
	// title
	append(root, h1(state.title))

	let list = ul()
	append(root, list)

	let resp = await getTodos()
	let todos = await resp.json()
	for(let todo of todos){
		let listItem = li(todo.title)
		append(list, listItem)
	}

	// getTodos()
	// .then(resp => resp.json())
	// .then(todos => {
	// 	for(let todo of todos){
	// 		let listItem = li(todo.title)
	// 		append(list, listItem)
	// 	}
	// })
}

async function getTodos() {
	let url = `${baseUrl}/todos`
	let resp = await fetch(url)
	let todos = await resp.json()

	return todos
}


function div(content, attributes) {
	return dom_element('div', content, attributes)
}

function h1(content, attributes) {
	return dom_element('h1', content, attributes)
}

function ul(content, attributes) {
	return dom_element('ul', content, attributes)
}

function li(content, attributes) {
	return dom_element('li', content, attributes)
}


function dom_element(type, content, attributes) {
	let el = element(type)

	if (content) {
		if(typeof(content) === 'string'){
			el.textContent = content
		} else {
			append(el, content)
		}
	}
	return el
}

function element(type) {
	return document.createElement(type)
}

function query(s) {
	return document.querySelector(s)
}

function append(target, node) {
	console.log('target', target)
	console.log('node', node)
	target.appendChild(node)
}