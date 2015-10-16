require.config({

    paths: {
		jquery: 'http://www.gannett-cdn.com/labs/globals/scripts/jquery-2.1.4.min',
		backbone: 'http://www.gannett-cdn.com/labs/globals/scripts/backbone-1.2.3.min',
		underscore: 'http://www.gannett-cdn.com/labs/globals/scripts/underscore-1.8.3.min'
    },

    shim: {
		backbone: ["jquery", "underscore"]
    }

});

require(['script'], function(LabsView){
    var labsView = new LabsView();
});