//sync_async.js
function async_fun() {
    console.log('I am an async function.');
}
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
setTimeout(async_fun, 1000); //Browser API setTimeout executes async_fun after 1 sec. elapsed
//setTimeout(()=>{console.log(‘I am an async function.’}, 1000); //using => function
fun1();
fun2();
fun3();