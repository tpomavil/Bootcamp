//myFunction returns a Promise object
async function myFunction() {
    return "A message from async function";
    }
p = myFunction();
p.then(function(msg) { //equivalent to p.then((msg) => console.log(msg));
    console.log(msg)
});