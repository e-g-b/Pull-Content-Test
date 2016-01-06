require.config({
    shim: {
        'http://www.gannett-cdn.com/labs/globals/scripts/jquery-easing-1.3.min.js': {
            deps: ['jquery']
        }
    }
});

define([
    'jquery',
    'underscore',
    'backbone',
    'http://www.gannett-cdn.com/labs/globals/scripts/jquery-easing-1.3.min.js'
],

function(
    $,
    _,
    Backbone
) {
    var LabsView = Backbone.View.extend({
        
        /*
        * Change el class name to what you've called it in your own HTML
        */
        el: '.development-template',

        delay: [],

        imageRoot : '',

        events: {

        },
        
        /* 
    	* Any setup work for the app should be preformed here before render() is called
        */
        initialize: function() {

            console.log('Labs View Initialized...');

			$(document).ready(_.bind(function() {
				this.render();
			}, this));

        },

        /*
		* Render is where the app will do any dynamic work in the DOM to generate the app
        */
        render: function() {

			console.log('Document is ready and render is called');

            this.prestoAPIparse();

            $(window).on('resize', this.detectScreenSize);

        },

        /* 
        * Detect users screen size on window resize event
        */
        detectScreenSize: function() {

            var width = $(window).width();

            if((width <= 1230)) {
            	// equal to or less than 1230 - Full Size
            }

            if((width <= 1024)) {
            	// equal to or less than 1024 - iPad Landscape
            }

            if((width <= 768)) {
            	// equal to or less than 768 - iPad Portrait
            }

            if((width <= 414)) {
            	// equal to or less than 414 - iPhone 6 Plus
            }

            if((width <= 375)) {
            	// equal to or less than 375 - iPhone 6
            }

            if((width <= 320)) {
            	// equal to or less than 320 - iPhone 5
            }

        },
        
        /* 
        * Clear and reset all timed delays 
        */
        clearDelay: function() {

            for(i=0; this.delay.length > i; i++) {
                clearTimeout(this.delay[i]);
            }
        },

        prestoAPIparse: function() {

            $.ajax({
                method: "GET",
                cache: true,
                url: "http://api.gannett-cdn.com/presentation/v4/fronts/121/life",
                data: {style: "composite", transform: "full", siteId: "121", frontName: "life", consumer: "true", api_key: "w634zsk6v46v2pj96z8myhqu"},
                dataType: 'jsonp'
            }).done(_.bind(function(data) {
                console.log(JSON.stringify(data));
            }, this));

        },


    }); // END

    return LabsView;
});


