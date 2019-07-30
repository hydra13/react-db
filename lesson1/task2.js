// 2. Написать функцию calculateArea, которая будет принимать параметры, для вычисления площади
// (можете выбрать какую то конкретную фигуру, а можете, основываясь на переданных параметрах, 
// выполнять требуемый алгоритм вычисления площади для переданной в параметрах фигуры) и 
// возвращать объект вида: { area, figure, input }, где area - вычисленная площадь, 
// figure - название фигуры, для которой вычислялась площадь, 
// input - входные параметры, по которым было произведено вычисление.

function calculateArea(width, height) {
    if (width) {
        const area = height ? width * height : width * width;
        const figure = width === height || (width && !height) ? 'square' : 'rectangle';
        const input = { width, height };
        return { area, figure, input }
    } else {
        return { error: 'There are only 3 options: 1) square (only with width) 2) square (width = height) 3) rectangle. You must use at least one parameter.' }
    }
}

console.dir('args(15, 10): ' + JSON.stringify(calculateArea(15, 10)));
// args(15, 10): {"area":150,"figure":"rectangle","input":{"width":15,"height":10}}

console.dir('args(5, 5): ' + JSON.stringify(calculateArea(5, 5)));
// args(5, 5): {"area":25,"figure":"square","input":{"width":5,"height":5}}

console.dir('args(3): ' + JSON.stringify(calculateArea(3)));
// args(3): {"area":9,"figure":"square","input":{"width":3}}

console.dir('args(): ' + JSON.stringify(calculateArea()));
// args(): {"error":"There are only 3 options: 1) square (only with width) 2) square (width = height) 3) rectangle. You must use at least one parameter."}
