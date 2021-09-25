window.addEventListener("load", startTime())

function startTime() {
    const currentDate = new Date();

    let hours   = padTime(currentDate.getHours());
    let minutes = padTime(currentDate.getMinutes());
    let seconds = padTime(currentDate.getSeconds());

    let year  = currentDate.getYear() + 1900;
    let month = padTime(currentDate.getMonth());
    let day   = padTime(currentDate.getDay());

    date = year + "/" + month + "/" + day;
    time = hours + ":" + minutes + ":" + seconds;

    setClock(date, time);
    setTimeout(startTime, 1000);
}

function padTime(timeUnit) {
    if (timeUnit < 10) {
        return "0" + timeUnit;
    }

    return timeUnit;
}

function setClock(date, time) {
    document.getElementById("time").innerHTML = date + "<br>" + time;
}
