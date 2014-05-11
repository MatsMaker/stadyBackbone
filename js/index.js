var Todo = Backbone.Model.extend({
	defaults:{
		title: '',
		completed: false
	}
});

var myTodo = new Todo({
	title: 'Ste throungh instatiation.'
});
console.log('Todo title: ' + myTodo.get('title'));
console.log('Completed: ' + myTodo.get('completed'));

myTodo.set("title", "Title attibute set through Model.set()");
console.log('Todo title: ' + myTodo.get('title'));

console.log('Completed: '+myTodo.get('completed'));

myTodo.set({
	title: 'Both attributes set though Model.set()',
	completed: true
});

console.log('Todo title: '+myTodo.get('title'));
console.log('Completed: '+myTodo.get('completed'));

