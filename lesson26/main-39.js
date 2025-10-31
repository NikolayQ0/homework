// Задача 1.
// Создайте объект person с несколькими свойствами, содержащими информацию о вас. Затем выведите значения этих свойств в консоль.

const person = {
    name: "Nikolay",
    age: 16,
    favoriteColor: "red"
};

for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

// Задача 2.
// Создайте функцию isEmpty, которая проверяет является ли переданный объект пустым. Если объект пуст - верните true, в противном случае false.

function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}

console.log(isEmpty(person));




// Задача 3.
// Создайте объект task с несколькими свойствами: title, description, isCompleted.
// Напишите функцию cloneAndModify(object, modifications), которая с помощью оператора spread создает копию объекта и применяет изменения из объекта modifications.
// Затем с помощью цикла for in выведите все свойства полученного объекта.

const task = {
    title: "Сделать домашнее задание",
    description: "Написать код",
    isCompleted: false
};

function cloneAndModify(object, modifications) {
    const newObject = { ...object, ...modifications };
    return newObject;
}

const updatedTask = cloneAndModify(task, {
    isCompleted: true,
    description: "Задача выполнена успешно!"
});

for (let key in updatedTask) {
    console.log(`${key}: ${updatedTask[key]}`);
}



// Задача 4.
// Создайте функцию callAllMethods, которая принимает объект и вызывает все его методы.

function callAllMethods(obj) {
    for (let key in obj) {
        if (typeof obj[key] === "function") {
            console.log(`Вызов метода: ${key}`);
            obj[key]();
        }
    }
}

// Пример использования
const myObject = {
    method1() {
        console.log("Метод 1 вызван");
    },
    method2() {
        console.log("Метод 2 вызван");
    },
    property: "Это не метод"
};

callAllMethods(myObject);