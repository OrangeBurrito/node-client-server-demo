const {v4} = require('uuid')

const todos = [
	{
		title: 'finish gogurt packs in fridge before they go bad'
	},
	{
		title: 'bribe bank employee for access to bank files'
	},
	{
		title: 'plan escape route'
	},
	{
		title: 'disable security cameras through backend loophole'
	},
	{
		title: 'rob bank'
	},
	{
		title: 'buy gogurt'
	}
]

const books = [
	{
		id: v4(),
		title: 'cows of our planet'
	},
	{
		id: v4(),
		title: 'the chickens are restless'
	},
	{
		id: v4(),
		title: 'when did ignorance become a point of view'
	},
]

module.exports = {todos, books}