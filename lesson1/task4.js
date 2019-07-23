// 4*. Написать цикл, который создаёт массив промисов, внутри каждого промиса происходит обращение
// к ресурсу (https://jsonplaceholder.typicode.com/users/number), где вместо number подставляется 
// число от 1 до 10, в итоге должно получиться 10 промисов. Следует дождаться выполнения загрузки 
// всеми промисами и далее вывести массив загруженных данных.

//т.к. в Node.js нет встроенного fetch использую модуль node-fetch
const fetch = require('node-fetch');

const promises = [];
for (let i = 0; i < 10; i++) {
    promises.push(fetch(`https://jsonplaceholder.typicode.com/users/${i + 1}`));
}
Promise.all(promises)
    .then(values => values.forEach((value, idx) => value.json().then(data => console.log(`${idx}: ${JSON.stringify(data)}`))))
    .catch(err => console.error(err.message));
