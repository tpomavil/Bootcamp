//sync_calls.js
function fun1() {
    console.log('Function 1');
    fun2();
    }
function fun2() {
    console.log('Function 2');
    fun3();
    }
    function fun3() {
    console.log('Function 3');
    }
    fun1();
    fun2();
    fun3();