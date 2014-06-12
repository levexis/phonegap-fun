require.config({
    paths: {
    'video' : 'js/vendor/Html5Video.js'
    },
    shim: {
        video : {
            exports : 'html5Video'
        }
    }
});

require.onError = function (err) {
    console.trace('requireJS error', err);
};

// bootstrap app
require([
    'video'
], function(app){
    function onDeviceReady() {
        alert ('ready');
        // $PROJECT_ROOT/platforms/android/res/raw
        html5Video.initialize({
            "thomas" : "thomas_welcome.mp4"
        })
        //Playing a video

        //Anytime you wish to play a video, call:
        html5Video.play("thomas" , alert ('finished video'));
    }
    document.addEventListener('deviceready', onDeviceReady);
});
