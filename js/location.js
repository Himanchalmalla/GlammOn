document.addEventListener("DOMContentLoaded", function() {
    if (document.querySelector(".signup").style = "display.visible") {
        document.querySelector(".signup").style = "display:none";
    }

    document.getElementById("signupPage").onclick = () => {
        document.querySelector(".signup").style = "display:visible";
        document.querySelector(".login").style = "display:none";
    }

    document.getElementById("loginPage").onclick = () => {
        document.querySelector(".login").style = "display:visible";
        document.querySelector(".signup").style = "display:none";
    }

    document.getElementById("btn_signin").onclick = () => {
        location.href = "../html/GlammOn.html";
    };


});