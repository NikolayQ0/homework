// Задание 1.
// Дан массив пользователей:
const users = [
    { name: 'Alex', age: 24, isAdmin: false },
    { name: 'Bob', age: 13, isAdmin: false },
    { name: 'John', age: 31, isAdmin: true },
    { name: 'Jane', age: 20, isAdmin: false },
]

// Добавьте в конец массива двух пользователей:
// { name: 'Ann', age: 19, isAdmin: false },
// { name: 'Jack', age: 43, isAdmin: true }

const addUser = function (obj) {
    users.push(obj);
}

addUser({ name: 'Ann', age: 19, isAdmin: false });
addUser({ name: 'Jack', age: 43, isAdmin: true });

console.log(users);

// Задание 2.
// Используя массив пользователей users из предыдущего задания, напишите функцию getUserAverageAge(users), которая возвращает средний возраст пользователей.

function getUserAverageAge(users) {
    const totalAge = users.reduce((sum, user) => sum + user.age, 0);

    return totalAge / users.length;
}

console.log(getUserAverageAge(users));

// Задание 3.
// Используя массив пользователей users из предыдущего задания, напишите функцию getAllAdmins(users), которая возвращает массив всех администраторов.

var admins = [];

function getAllAdmins(users) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].isAdmin === true) {
            admins.push(users[i]);
        }
    }
}

getAllAdmins(users);
console.log(admins);


// Задание 4.
// Напишите функцию first(arr, n), которая возвращает первые n элементов массива. Если n == 0, возвращается пустой массив [], если n == undefined, то возвращается массив с первым элементом.

function first(arr, n) {
    if (n === undefined) {
        return arr.slice(0, 1);
    }

    if (n === 0) {
        return [];
    }

    return arr.slice(0, n);
}

// Пример использования:
console.log(first([1, 2, 3, 4, 5]));
console.log(first([1, 2, 3, 4, 5], 3));
console.log(first([1, 2, 3, 4, 5], 0));
