// const sendRequestx = (x, y, r) => {
//     fetch(`/lab2_web/controller`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json;charset=UTF-8',
//             "Accept": ""
//         },
//         body: new URLSearchParams({
//             x: x,
//             y: y,
//             r: r
//         }).toString()
//     }).then(response => {
//         console.log(response.json())
//         if (!response.ok) {
//             throw new Error(`Server answered with code ${response.status} : ${response.statusText}`)
//         }
//         return response.json()
//     }).then(data => {
//         const table = document.getElementById('hitRow');
//         const row = table.insertRow(-1);
//         const cellX = row.insertCell(0);
//         const cellY = row.insertCell(1);
//         const cellR = row.insertCell(2);
//         const cellRes = row.insertCell(3);
//
//         cellX.textContent = x;
//         cellX.className = "new-cell"
//         cellY.textContent = y;
//         cellY.className = "new-cell"
//         cellR.textContent = r;
//         cellR.className = "new-cell"
//         cellRes.textContent = data.result;
//
//         if (data.result === "In") {
//             cellRes.className = "result-cell-in"
//         } else {
//             cellRes.className = "result-cell-out"
//         }
//
//         const canvasCoords = toCanvasCoords(x, y, r, 350);
//         drawPoint(canvasCoords.x, canvasCoords.y, data.result === "In" ? 'green' : 'red');
//
//     })
// }
//
//
// const submitBtn = document.getElementById('send_button');
// submitBtn.addEventListener('click', function (e) {
//     e.preventDefault();
//
//     const x = Array.from(document.querySelectorAll('input[name=x]:checked'))[0].value;
//     const y = document.getElementsByName("y")[0].value;
//     const r = document.getElementsByName("r")[0].value;
//     sendRequestx(x, y, r);
//
//
        // .catch(error => {
        //     Toastify({
        //         text: "There was an error processing your request:" + error.message,
        //         className: "error",
        //         style: {
        //             background: "linear-gradient(to right, #ff6347, #ff0000)",
        //             border: "1px solid white"
        //         },
        //         offset: {
        //             x: window.innerWidth / 2 - 75,
        //             y: 0
        //         },
        //         position: "right",
        //     }).showToast();
        // });


    // if (validator.getResponseCode() === 1){
    //     //const canvasCoords = toCanvasCoords(xVal, yVal, rVal, 350);
    //
    //
    //     //drawPoint(canvasCoords.x, canvasCoords.y);
    //     sendRequestx(xVal, yVal, rVal, "sendValue");
    // } else {
    //     Toastify({
    //         text: validator.getMessage(),
    //         className: "error",
    //         style: {
    //             background: "linear-gradient(to right, #ff6347, #ff0000)",
    //             border: "1px solid white"
    //         },
    //         offset: {
    //             x: window.innerWidth / 2 - 75,
    //             y: 0
    //         },
    //         position: "right",
    //     }).showToast();
    // }
//
// })