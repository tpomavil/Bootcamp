//event_test.js
function waitfunction() {
        var a = 5000 + new Date().getTime();
        while (new Date() < a){}
        console.log('waitfunction() context will be popped after this line');
    }
    function my_clickHandler() {
        console.log('This is a click event handler.');
    }
    //my_clickHandler is a callback function that is added to click event.
    document.addEventListener('click', my_clickHandler);
    waitfunction(); //This function is placed on the Call Stack
    console.log('Global context from Call Stack will be popped after this line.');

