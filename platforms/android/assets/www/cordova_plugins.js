cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/jaeger.Html5Video/www/Html5Video.js",
        "id": "jaeger.Html5Video.Html5Video",
        "clobbers": [
            "plugins.html5Video"
        ]
    },
    {
        "file": "plugins/org.jshybugger.cordova/www/jsHybuggerLoader.js",
        "id": "org.jshybugger.cordova.jsHybuggerLoader",
        "runs": true
    },
    {
        "file": "plugins/org.apache.cordova.device/www/device.js",
        "id": "org.apache.cordova.device.device",
        "clobbers": [
            "device"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "jaeger.Html5Video": "1.2.1",
    "org.jshybugger.cordova": "4.5.3",
    "org.apache.cordova.device": "0.2.10-dev"
}
// BOTTOM OF METADATA
});