function myFunction() {
    return Promise.resolve("A message from async function");
    }
myFunction().then(function (msg) {
    console.log(msg);
});