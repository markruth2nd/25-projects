window.addEventListener("load", calculateTime)

function calculateTime(){
    var date = new Date();
    
    /* console.log(date); */

    var dayNumber = date.getDay();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var ampm = hour >= 12 ? "PM" : "AM";
    var dayNames = ["SUN", "MON", "TUE", "WED", "THUR", "FRI", "SAT"];

/*     BELOW CONVERTS TO 12 O' CLOCK FORMAT */
    hour = hour % 12;

    /*     BELOW CONVERTS 0 TO 12 WHEN IT IS MIDNIGHT OR NOON */
    hour = hour ? 12 : "12";

    /*     BELOW ADDS '0' IF TIME IS BELOW 10 TO DISPLAY AS 01 OR 02, NOT JUST 1 OR 2 */
    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;

    /* BELOW LINKS DAY HOUR AND MINUTES TO CORRECT ID'S IN HTML */
    document.getElementById("day").innerHTML = dayNames[dayNumber];
    document.getElementById("hour").innerHTML = hour;
    document.getElementById("minute").innerHTML = minute;
    document.getElementById("ampm").innerHTML = ampm;

    setTimeout(calculateTime, 200);
}


