// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener('pause', onPause.bind(this), false);
        document.addEventListener('resume', onResume.bind(this), false);

        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.


        var username = prompt('Please enter a username:');

        var uri = 'ws://testwebsockets.azurewebsites.net/api/users?username=' + username;

        var uri = 'ws://testwebsockets.azurewebsites.net/api/users?username=' + username;
        var websocket = new WebSocket(uri);

        websocket.onopen = function () {
            $('#messages').prepend('<div>Connected.</div>');

            $('#chatform').submit(function (event) {
                websocket.send($('#user').val());
                $('#user').val('');
                event.preventDefault();
            });
        };

        websocket.onerror = function (event) {
            $('#messages').prepend('<div>ERROR</div>');
        };

        websocket.onmessage = function (event) {
            $('#messages').prepend('<div>' + event.data + '</div>');
        };        
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
})();