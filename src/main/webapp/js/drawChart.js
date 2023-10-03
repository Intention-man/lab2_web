const image = document.getElementById('image');
const imageContainer = document.querySelector('.image-container');

// Обработчик события клика на изображение
imageContainer.addEventListener('click', (e) => {

    let r = document.getElementsByName("r")[0].value;
    if (isNumber(r) && r > 2 && r < 5) {
        const {xPercentage, yPercentage} = calcCoords(e);
        drawPoint(xPercentage, yPercentage);
        addPointToStorage(xPercentage, yPercentage);
        r = parseFloat(r)
        const x = Math.round((xPercentage - 47) / 50 * 1.5 * r);
        const y = -1 * ((yPercentage - 51) / 50 * 1.5 * r);
        if (isCorrect(x, y, r)) {
            sendRequestFromCanvas(x, y, r);
        } else {
            window.alert("At this point, at least one of the coordinates does not fall within the range of acceptable values");
        }
    } else {
        window.alert("Enter the correct R value to perform a hit");
    }
});

window.onload = (event) => {
    drawAllPoints();
}

const drawPoint = (xPercentage, yPercentage) => {
    const point = document.createElement('div');
    point.className = 'point';

    // Установите координаты точки в процентах
    point.style.left = `${xPercentage}%`;
    point.style.top = `${yPercentage}%`;
    // Добавьте точку на страницу
    imageContainer.appendChild(point);
}

const drawAllPoints = () => {
    let storedObjects = sessionStorage.getItem('results');
    let myObjects;
    if (storedObjects == null) {
        myObjects = [];
    } else {
        myObjects = Array.from(JSON.parse(storedObjects));
        myObjects.forEach(function(obj, index) {
            drawPoint(obj.x_coord, obj.y_coord)
        });
    }
}

const calcCoords = (e) => {
    // Рассчитайте координаты точки относительно вершины и ширины изображения
    const xPercentage = (e.clientX - imageContainer.getBoundingClientRect().left) / image.width * 100;
    const yPercentage = (e.clientY - imageContainer.getBoundingClientRect().top) / image.height * 100;
    return {xPercentage, yPercentage};
}

const addPointToStorage = (xPercentage, yPercentage) => {
    let storedObjects = sessionStorage.getItem('results');
    let myObjects;
    if (storedObjects == null) {
        myObjects = [];
    } else {
        myObjects = Array.from(JSON.parse(storedObjects));
    }
    let newObj = { x_coord: xPercentage, y_coord: yPercentage};
    myObjects.push(newObj);
    sessionStorage.setItem('results', JSON.stringify(myObjects));


    // Обновление данных в sessionStorage
    //
    // let myObjects = JSON.parse(storedObjects);
    //
    // sessionStorage.setItem('results', JSON.stringify(myObjects));
}

// Создайте событие "click"
const clickEvent = new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    view: window
});

const sendRequestFromCanvas = (x, y, r) => {
    document.getElementsByName("r")[0].value = r;
    document.getElementsByName("y")[0].value = y;
    Array.from(document.querySelectorAll('input[name=x]'))[x + 4].checked = true;
    console.log("ready to send")

    setSendAvailability();
    const button = document.getElementById('send_button');
    button.dispatchEvent(clickEvent);
}