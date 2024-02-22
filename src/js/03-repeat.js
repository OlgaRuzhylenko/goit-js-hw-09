// Підрахунок суми елементів масиву: Напишіть функцію, яка приймає масив чисел і повертає проміс, який вирішується сумою всіх елементів масиву. Можна використати метод масиву reduce() для підрахунку суми.
// const arr = [1, 2, 3, 4, 10];

// function summOfArr(arr) {
// return new Promise((resolve, reject) => {
//     if (arr && arr.length > 0) {
//        const sum = arr.reduce((acc, item) => acc + item, 0);
//         resolve(sum);
//     } else {
//         reject('Error')
//     }
// })
// }
 
// summOfArr(arr)
//     .then((sum) => {
//     console.log(`final sum is ${sum}`);
// }).catch(() => {
//     console.log('sorry');
// })




// Пошук максимального елемента в масиві: Напишіть функцію, яка приймає масив чисел та повертає проміс, який вирішується максимальним числом у масиві.

// const arr = [1, 5, 3, 4];

// function createPromise(arr) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (arr && arr.length > 0) {
//                 const maxNumber = Math.max(...arr)
//                 resolve (maxNumber)
//             } else {
//  reject('no result');
//             }
//         }, 500)
//     })
// }
// createPromise(arr).then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log('Error:', err);
// })








// Фільтрація масиву: Напишіть функцію, яка приймає масив чисел та значення, і повертає проміс, який вирішується новим масивом,
// який містить лише числа з початкового масиву, більші за задане значення.

// const arr = [1, 2, 5, 7, 45, 11]
// let newArr = []

// function createPromise(arr, x) {
//   return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (arr && arr.length > 0) {
//                 const newArr = arr.filter(item => item > x);
//                 resolve(newArr);
//             } else {
//                 reject('Array is empty or undefined');
//             }
//         }, 500);
//     });
// }

// createPromise(arr, 5)
//     .then(result => {
//         console.log(result);
//     }).catch(error => {
//         console.error('Error:', error);
//     });









// Автентифікація користувача за допомогою форми: Напишіть функцію, яка приймає дані з форми автентифікації(наприклад, ім'я користувача та пароль) та зберігає їх локально на пристрої користувача (наприклад, використовуючи localStorage). Поверніть проміс, який вирішується, коли дані успішно збережено.

const formItem = document.querySelector('.form');
const btn = document.querySelector('button');

let dataObj = JSON.parse(localStorage.getItem('objectInform')) ?? []


formItem.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
    evt.preventDefault();
  
    const obj = {
        name: formItem.elements.Name.value,
        age: formItem.elements.Age.value
    };

    dataObj.push(obj)
    formItem.elements.Name.value = '';
    formItem.elements.Age.value = '';

    localStorage.setItem('objectInform', JSON.stringify(dataObj));

    createPromise().then(() => {
    console.log(`localeStorage has ${obj.name} and ${obj.age}`);
}).catch((error) => {
    console.log('Error:', error);
})

}

function createPromise() {
    return new Promise((resolve, reject) => {
          setTimeout(() => {
              if (dataObj) {
            resolve()
              } else {
                  reject('Error: Data is not available')
        }
    }, 500)
    })
  
}

















