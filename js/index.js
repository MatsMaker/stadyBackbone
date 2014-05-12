var TodoView = Backbone.View.extend({
	tagName: 'li',
	
	todoTpl: _.template("An example template"),

	events: {
		'dblclick label': 'edit',
		'keypress .edit': 'updateOnEnter',
		'blur .edit': 'close'
	},

	initialize: function(options){
		this.options = options || {};
	},

	render: function(){
		this.$el.html(this.todoTpl(this.model.toJSON()));
		this.input - this.$('.edit');
	},

	edit: function(){

	},

	close: function(){

	},

	updateOnEnter: function(e){

	}
});

var todoView = new TodoView();

console.log(todoView.el);