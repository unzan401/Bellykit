function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function eraseCookie(name) {
    setCookie(name, "", -1);
}



function checkCookie() {
    var user = getCookie("username");
    if (user != "") {
        let A = document.getElementById("logintext");
        A.innerText = "登出";
        A.href = "#logout";
        A.onclick = () => {
            eraseCookie("username");
            A.innerText = "登入";
            A.href = "#login";
            A.onclick = null;
        };
    }
}

function login() {
    const email = document.getElementById("loginemail");
    const password = document.getElementById("loginpassword");

    if (email.value === "test@bellykit.com" && password.value === "123") {
        const user = "劉重慶";
        setCookie("username", user, 30);
        document.location.href = "dashboard.html";
        checkCookie();
    }
}