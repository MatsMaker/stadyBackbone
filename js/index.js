var PhotoOne = Backbone.Model.extend({
    defaults: {
        src: 'placeholder.js',
        title: 'an image placeholder',
        coordinates: [0, 0]
    },
    initialize: function() {
        this.on('change:src', function() {
            var src = this.get("src");
            console.log('Image source updated to ' + src);
        });
    },
    changeSrc: function(source) {
        this.set({
            src: source
        });
    }
});

var somePhoto = new PhotoOne({
    src: 'test.js',
    title: 'testing'
});

somePhoto.changeSrc('magic.js');



var PhotoTwo = Backbone.Model.extend({
    validate: function(attibs) {
        if (attibs.src === undefined) {
            return "Remember to set a source for your image!";
        }
    },
    initialize: function() {
        console.log('this model has been initialized');
        this.on('error', function() {
            console.log(error);
        });
    }
});

var myPhoto = new PhotoTwo();
myPhoto.set({
    title: "On the beach"
});


var PhotoCollection = Backbone.Collection.extend({
    model: PhotoOne
});


var a = new PhotoOne({
    title: 'my vacation'
}),
b = new PhotoOne({
    title: 'my holiday'
}),
c = new PhotoOne({
    title: 'my weekend'
});

var photoCollection = new PhotoCollection([a, b]);
photoCollection.add(c);

photoCollection.remove([a, c]);
photoCollection.remove(b);