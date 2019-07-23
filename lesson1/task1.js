// 1. Написать функцию loop, которая будет принимать параметры: times (значение по умолчанию = 0), 
// callback (значение по умолчанию = null) и будет в цикле (times раз), вызывать функцию callback. 
// Если функция не передана, то цикл не должен отрабатывать ни разу. Покажите применение этой функции

function loop(times, callback) {
    if (typeof callback === 'function') {
        for (let i = 0; i < times; i++) {
            callback();
        }
    }
}
console.log('test1: start // repeat 3 times')
loop(3, () => console.log('testing...'));
console.log('test1: end')
console.log('test2: start // without any callback functions');
loop(2);
console.log('test2: end');