//sync_callback.js
function greeting(name) {
    //alert('Hello ' + name);
    console.log('Hello ' + name);
    }
    function processUserInput(my_callback) {
    //var name = prompt('Please enter your name.');
    var name = 'Tim';
    my_callback(name);
    }
    processUserInput(greeting);