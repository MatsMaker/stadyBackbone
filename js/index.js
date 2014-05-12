var Todo = Backbone.Model.extend({

	defaults:{
		completed: false
	},

	validate: function(attr){
		if(attr.title === undefined){
			return 'Remember to set a title for you todo.';
		}
	},

	initialize: function(){
		console.log('This model has ben initialized.');
		this.on('invalid', function(model, error){
			console.log(error);
		});
	}
});

var myTodo = new Todo();
myTodo.set({completed: true}, {validate: true});
console.log('completed: '+myTodo.get('completed'));