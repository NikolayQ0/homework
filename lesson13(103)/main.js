// const user = 
//     {
//         name: 'Nikolay',
//         age: 16,
//         sayHello(name) {
//             console.log(`Hello ${name}`)
//         }
//     }


// console.log(user.sayHello('name'))

const users = [
    {
        name: 'Masha',
        age: 19,
        isAdmin: true
    },
    {
        name: 'Denis',
        age: 22,
        isAdmin: true
    },
    {
        name: 'Tom',
        age: 19,
        isAdmin: false
    },
    {
        name: 'Jerry',
        age: 13,
        isAdmin: false
    },
    {
        name: 'Zoro',
        age: 21,
        isAdmin: false
    },
    {
        name: 'Alex',
        age: 20,
        isAdmin: true
    },
]

let normalUsers = 0

for (const user of users) {
    if (!user.isAdmin) {
        normalUsers++;
    }
}

console.log(normalUsers);