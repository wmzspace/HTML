
var start = new Date();
document.onreadystatechange = function () {
    try {
        if (document.readyState == "interactive") {
            var readyState = document.getElementById("readyState");
            let elePre = document.querySelectorAll("pre");
            for (let i = 0; i < elePre.length; i++)
                if (elePre[i].innerText)
                    elePre[i].style.border = "medium double black";
        }
        if (document.readyState == "complete") {
            var readyState = document.getElementById("readyState");
            readyState.style.color = "green";
            var now = new Date();
            var dif = now - start;
            if (dif >= 100)
                readyState.innerHTML = document.readyState + " in " + dif / 1000 + " seconds";
            else
                readyState.innerHTML = document.readyState + " in " + dif + " ms";
        }
        // sleep(1000);
    } catch (e) {
        document.getElementById("readyState").style.color = "red";
        document.getElementById("readyState").innerText = "Exception Occurred!\n";
        document.getElementById("readyState").innerText += e;
    }
}
function println(content) {
    document.writeln(content);
}
function sleep(time) {
    for (let sleep_start = Date.now(); Date.now() - sleep_start < time;);
}
function generate_nav() {
    html = {
        'docinfo.html': "Document Information",
        'cookie.html': "Cookie Test",
        'domnav.html': "DOM Navigation",
    }
    var nav = document.getElementById("html_nav");
    nav.innerHTML += "<ul>";
    for (key in html) {
        nav.innerHTML += "<li><a href=" + key + ">" + html[key] + "</a></li>\n";
    }
    nav.innerHTML += "</ul>";
    // nav.getElementsByTagName("ul").style.padding = "0";
}


