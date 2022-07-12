//get_users.js
const users = [
    {name: 'Bob', age: 20},
    {name: 'Joe', age: 30}
];
function getUsers() {
    setTimeout(() => {
        let output = '';
        users.forEach((user, index) => {
            output += `<li>${user.name}</li>`; //this is a backquote
            //console.log("idx: " + index)
        });
        document.getElementById("demo").innerHTML = output;
    }, 1000);
}
function createUsers(user) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            users.push(user);
            const error = false;
            if (!error) {
                resolve();
            } else {
                reject('Eorror occurred');
            }
        }, 2000);
    })
}
async function init() {
    await createUsers({name: 'Jane', age: 25});
    getUsers();
}
async function fetchUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data);
}
init();
fetchUsers();