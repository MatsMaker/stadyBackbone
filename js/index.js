var Photo = Backbone.Model.extend({
    defaults: {
        src: 'placeholder.js',
        title: 'an image placeholder',
        coordinates: [0,0]
    },
    initialize: function(){
        this.on('change:src',function(){
            var src =this.get("src");
            console.log('Image source updated to ' + src);
        });
    },
    changeSrc: function( source ){
        this.set({
            src: source
        });
    }
});

var somePhoto = new Photo({
    src: 'test.js',
    title: 'testing'
});

somePhoto.changeSrc('magic.js');