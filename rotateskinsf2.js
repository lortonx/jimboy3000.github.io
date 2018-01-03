var exp = 0;
var d = new Date()["getTime"]();
if (typeof al == "undefined" && parseInt(atob(t)) + parseInt(atob("NDMyMDAwMDA=")) < d) {
    var al = document["createElement"]("font");
    al["innerHTML"] = errorMsg;
    al["color"] = "#FF0000";
    exp = 1
};
var init = setInterval(function() {
    if (typeof window["core"] !== "undefined" && exp == 0) {
        clearInterval(init);
        if (typeof sint !== "undefined") {
            clearInterval(sint)
        };
        document["getElementsByClassName"]("btn btn-play btn-primary")[0];
        addEventListener("click", function() {
            clearInterval(variable_2);
            window["core"]["loadSkin"]("%" + skin)
        });
        document["getElementsByClassName"]("btn btn-play-guest btn-success")[0];
        addEventListener("click", function() {
            clearInterval(variable_2);
            window["core"]["loadSkin"]("%" + skin)
        });
        var variable_2 = setInterval(function() {
            document["getElementsByClassName"]("circle bordered skinWrapper")[0]["innerHTML"] = "<img src='https://configs-web.agario.miniclippt.com/live/" + version + "/" + image["replace"](/\.png/gi, "_low.png") + "' crossorigin='anonymous' style='width: 90px; height: 90px;'>"
        }, 100)
    }
}, 100)
