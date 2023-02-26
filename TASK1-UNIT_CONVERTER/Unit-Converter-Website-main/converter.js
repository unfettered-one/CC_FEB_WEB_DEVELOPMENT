var ctf = function () {
    var ctp = parseInt(document.getElementById("tbox").value);
    if (ctp !== "" && !isNaN(ctp)) {
        var ftp = (ctp * (9 / 5)) + 32;
        document.getElementById("result").innerHTML = ftp.toFixed(2) + " &deg;F";
    } else {
        alert("NOTE: Please enter a valid input.");
        document.getElementById("tbox").value = "";
        document.getElementById("tbox").focus();
    }
};
var ftc = function () {
    var ftp = parseInt(document.getElementById("tbox").value);
    if (ftp !== "" && !isNaN(ftp)) {
        var ctp = ((ftp - 32) * (5 / 9));
        document.getElementById("result").innerHTML = ctp.toFixed(2) + " &deg;C";
    } else {
        alert("NOTE: Please enter a valid input.");
        document.getElementById("tbox").value = "";
        document.getElementById("tbox").focus();
    }
};

var ctk = function () {
    var cel = parseInt(document.getElementById("tbox").value);
    if (cel !== "" && !isNaN(cel)) {
        var kel = cel + 273.15;
        document.getElementById("result").innerHTML = kel.toFixed(2) + " &deg;K";
    } else {
        alert("NOTE: Please enter a valid input.");
        document.getElementById("tbox").value = "";
        document.getElementById("tbox").focus();
    }
};
var ktc = function () {
    var kel = parseInt(document.getElementById("tbox").value);
    if (kel !== "" && !isNaN(kel)) {
        var cel = kel - 273.15;
        document.getElementById("result").innerHTML = cel.toFixed(2) + " &deg;C";
    } else {
        alert("NOTE: Please enter a valid input.");
        document.getElementById("tbox").value = "";
        document.getElementById("tbox").focus();
    }
};
var fttomt = function () {
    var ft = parseInt(document.getElementById("tbox").value);
    if (ft !== "" && !isNaN(ft)) {
        var mt = ft / 3.281;
        document.getElementById("result").innerHTML = mt.toFixed(2) + " m";
    } else {
        alert("NOTE: Please enter a valid input.");
        document.getElementById("tbox").value = "";
        document.getElementById("tbox").focus();
    }
};
var mttoft = function () {
    var mt = parseInt(document.getElementById("tbox").value);
    if (mt !== "" && !isNaN(mt)) {
        var ft = mt * 3.281;
        document.getElementById("result").innerHTML = ft.toFixed(2) + " ft";
    } else {
        alert("NOTE: Please enter a valid input.");
        document.getElementById("tbox").value = "";
        document.getElementById("tbox").focus();
    }
};
var intcm = function () {
    var inch = parseInt(document.getElementById("tbox").value);
    if (inch !== "" && !isNaN(inch)) {
        var cm = inch * 2.54;
        document.getElementById("result").innerHTML = cm.toFixed(2) + " cm";
    } else {
        alert("NOTE: Please enter a valid input.");
        document.getElementById("tbox").value = "";
        document.getElementById("tbox").focus();
    }
};
var cmtin = function () {
    var cm = parseInt(document.getElementById("tbox").value);
    if (cm !== "" && !isNaN(cm)) {
        var inch = cm / 2.54;
        document.getElementById("result").innerHTML = inch.toFixed(2) + " in";
    } else {
        alert("NOTE: Please enter a valid input.");
        document.getElementById("tbox").value = "";
        document.getElementById("tbox").focus();
    }
};
var pdtkg = function () {
    var pd = parseInt(document.getElementById("tbox").value);
    if (pd !== "" && !isNaN(pd)) {
        var kilo = pd / 2.205;
        document.getElementById("result").innerHTML = kilo.toFixed(2) + " kg";
    } else {
        alert("NOTE: Please enter a valid input.");
        document.getElementById("tbox").value = "";
        document.getElementById("tbox").focus();
    }
};
var kgtpd = function () {
    var kilo = parseInt(document.getElementById("tbox").value);
    if (kilo !== "" && !isNaN(kilo)) {
        var pd = kilo * 2.205;
        document.getElementById("result").innerHTML = pd.toFixed(2) + " lb";
    } else {
        alert("NOTE: Please enter a valid input.");
        document.getElementById("tbox").value = "";
        document.getElementById("tbox").focus();
    }
};

var ontkg = function () {
    var on = parseInt(document.getElementById("tbox").value);
    if (on !== "" && !isNaN(on)) {
        var kilo = on / 35.274;
        document.getElementById("result").innerHTML = kilo.toFixed(2) + " kg";
    } else {
        alert("NOTE: Please enter a valid input.");
        document.getElementById("tbox").value = "";
        document.getElementById("tbox").focus();
    }
};
var kgton = function () {
    var kilo = parseInt(document.getElementById("tbox").value);
    if (kilo !== "" && !isNaN(kilo)) {
        var on = kilo * 35.274;
        document.getElementById("result").innerHTML = on.toFixed(2) + " ounces";
    } else {
        alert("NOTE: Please enter a valid input.");
        document.getElementById("tbox").value = "";
        document.getElementById("tbox").focus();
    }
};
var stm = function () {
    var sec = parseInt(document.getElementById("tbox").value);
    if (sec !== "" && !isNaN(sec)) {
        var min = sec / 60;
        document.getElementById("result").innerHTML = min.toFixed(2) + " minutes";
    } else {
        alert("NOTE: Please enter a valid input.");
        document.getElementById("tbox").value = "";
        document.getElementById("tbox").focus();
    }
};
var mts = function () {
    var min = parseInt(document.getElementById("tbox").value);
    if (min !== "" && !isNaN(min)) {
        var sec = min * 60;
        document.getElementById("result").innerHTML = sec.toFixed(2) + " seconds";
    } else {
        alert("NOTE: Please enter a valid input.");
        document.getElementById("tbox").value = "";
        document.getElementById("tbox").focus();
    }
};

var htm = function () {
    var hr = parseInt(document.getElementById("tbox").value);
    if (hr !== "" && !isNaN(hr)) {
        var min = hr * 60;
        document.getElementById("result").innerHTML = min.toFixed(2) + " minutes";
    } else {
        alert("NOTE: Please enter a valid input.");
        document.getElementById("tbox").value = "";
        document.getElementById("tbox").focus();
    }
};
var mth = function () {
    var min = parseInt(document.getElementById("tbox").value);
    if (min !== "" && !isNaN(min)) {
        var hr = min / 60;
        document.getElementById("result").innerHTML = hr.toFixed(2) + " hours";
    } else {
        alert("NOTE: Please enter a valid input.");
        document.getElementById("tbox").value = "";
        document.getElementById("tbox").focus();
    }
};
var clearTxt = function () {
    document.getElementById("tbox").value = "";
    document.getElementById("result").innerHTML = "";
    document.getElementById("tbox").focus();

};