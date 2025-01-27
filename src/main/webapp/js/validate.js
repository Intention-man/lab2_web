const setSendAvailability = () => {
    let button = document.getElementById("send_button");
    if (checkDataFromForm()){
        button.removeAttribute('disabled');
    } else {
        button.setAttribute('disabled', 'disabled');
    }
}

const checkDataFromForm = () => {
    const r = document.getElementsByName("r")[0].value;
    const y = document.getElementsByName("y")[0].value;
    let x;
    try{
        x = Array.from(document.querySelectorAll('input[name=x]:checked'))[0].value;
        return isCorrect(x, y, r);
    } catch (ex) {
        return false;
    }
}
const isCorrect = (x, y, r) => {
    return (isNumber(x) && isNumber(y) && isNumber(r) && Math.abs(x) <= 4 && y > -3 && y < 3 && r > 2 && r < 5)
}

const isNumber = (number) => {
    return !isNaN(parseInt(number)) || !isNaN(parseFloat(number))
}

const selectOnlyThis = (id) => {
    const xCheckbox = document.querySelectorAll('input[name=x]:checked');
    Array.prototype.forEach.call(xCheckbox,function(el){
        el.checked = false;
    });
    if (document.getElementById(id) && !document.getElementById(id).checked) {
        document.getElementById(id).checked = true;
    }
}

function toCanvasCoords(x, y, r, canvasSize) {
    const scale = canvasSize / 2;
    return {
        x: scale / r * x + scale,
        y: canvasSize - (scale / r * y + scale)
    };
}

function toNormalCoords(canvasX, canvasY, r, canvasSize){
    const scale = canvasSize / 2;
    return {
        x: r * (canvasX - scale) / scale,
        y: r * (canvasSize - canvasY - scale) / scale
    }
}