// Default Params
function registerUser(user = 'Bot') {
    // Old way - before using `=`
    // if (!user) {
    //   user = 'Bot';
    // }
    return user + ' is registered';
}
console.log(registerUser('Naina'));

// Rest Params
function sum(...numbers) {
    console.log(numbers);
    let total = 0;
    for (const num of numbers) {
        total += num;
    }
    console.log(total);
}
sum(1, 2, 3, 4, 5, 6, 200);

// Objects as params
function loginUser(user) {
    return `The user ${user.name} with the id of ${user.id} is logged in`;
}
const user = {
    id: 1,
    name: 'John',
};
console.log(loginUser(user));
console.log(
    loginUser({
        id: 2,
        name: 'Sara',
    })
);

// Arrays as params
function getRandom(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    console.log(randomIndex, item);
}
getRandom([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
