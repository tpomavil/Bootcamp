async function myFunction() {
    let myPromise = new Promise(function(resolve, reject) {
        resolve("A message from myFunction");
    });
    msg = await myPromise;
    console.log(msg);
}
myFunction();