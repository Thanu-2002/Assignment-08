// setTimeout(function, delay_time)
//
// setTimeout(() => {
//     console.log("Timeout!!");
// }, 6000); // 3000ms
//
// // set interval
//
// // setInterval(function, waiting_time)
//
// setInterval(() => {
//     console.log("Interval!!");
// }, 3000); // 3000ms


/////////////////////////////////////////////


let arr = ["A", "B", "C", "D", "E", "F"]; // -> F

setInterval(() => {
    let last_value = arr.pop();
    arr.unshift(last_value);
    console.log(arr);

    document.getElementsByTagName("h2")[0].innerText = arr[0];
    document.getElementsByTagName("h2")[1].innerText = arr[1];
    document.getElementsByTagName("h2")[2].innerText = arr[2];
    document.getElementsByTagName("h2")[3].innerText = arr[3];
    document.getElementsByTagName("h2")[4].innerText = arr[4];
    document.getElementsByTagName("h2")[5].innerText = arr[5];
}, 3000);
