var locatdate_time = () => {
    function date_time() {
        var today_dateTime = new Date();
        var mm = String(today_dateTime.getMonth() + 1);
        if (mm < 10) {
            var mm = "0" + mm;
        }
        var dd = String(today_dateTime.getDate());
        if (dd < 10) {
            var dd = "0" + dd;
        }

        var yyy = String(today_dateTime.getFullYear());
        var ampm = today_dateTime.getHours() >= 12 ? "PM" : "AM";
        var hh = today_dateTime.getHours() % 12;
        if (hh < 10) {
            var hh = "0" + hh;
        }

        var min = today_dateTime.getMinutes();
        if (min < 10) {
            var min = "0" + min;
        }

        var ss = today_dateTime.getSeconds();
        if (ss < 10) {
            var ss = "0" + ss;
        }
        today_dateTime = dd + "/" + mm + "/" + yyy + "  " + hh + ":" + min + ":" + ss + " " + ampm
        document.getElementById("local_date").innerHTML = today_dateTime;
    }

    // function refresh() {
    //     var refresh_time = 1000;
    //     newTime = setTimeout('date_time()', refresh_time);
    // }

    refresh();
    date_time();
}

function refresh() {
    var refresh = 1000; // Refresh rate in milli seconds
    mytime = setTimeout("locatdate_time()", refresh)
}
refresh();