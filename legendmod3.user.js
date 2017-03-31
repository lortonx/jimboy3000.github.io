// ==UserScript==
// @name         Legend Mod TEST1
// @namespace    Legend Agario Mod
// @version      2.0
// @description  Legend Agario Mod - Communicate, Play All!
// @homepage     http://www.legendmod.ml
// @author       Jimboy3100
// @icon         https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/smallbannerlegendclan.png
// @match        http://agar.io/*
// @downloadURL  https://jimboy3000.github.io/legendmod.user.js
// @updateURL    https://jimboy3000.github.io/legendmod.user.js
// @run-at       document-start
// @grant        GM_xmlhttpRequest
// @connect      agar.io
// ==/UserScript==

// Legend Mod by Jimboy3100
// Start of script

if (location.host == "agar.io" && location.pathname == "/") {

    location.href = "http://agar.io/legendmod" + window.location.search + location.hash;
    //return;
}

var legendmod = '<script src="https://jimboy3000.github.io/legendmodstarter.js"></script>';
var modVersion = GM_info.script.version;

function inject(page) {
    var page = page.replace("</head>", legendmod + cpickerCSS + toastrCSS + switchCSS + rangeCSS + perfectCSS + legendarioCSS + faCSS + cpickerJS + toastrJS + switchJS + rangeJS + perfectJS + legendJSniff2JS + legendarioSniffJS + ytJS + keyJS + "</head>");

    
    page = page.replace(/<script.*?>[\s]*?.*?window\.NREUM[\s\S]*?<\/script>/, "");
    page = page.replace(/<script.*?src=".*?agario\.core\.js.*?><\/script>/, "");
    page = page.replace("</body>", legendJSniffJS + legendarioJS + legendJS + "<script>init('" + modVersion + "');</script>" + "</body>");
    return page;
}

window.stop();
document.documentElement.innerHTML = "";
GM_xmlhttpRequest({
    method: "GET",
    url: "http://agar.io/",
    onload: function (e) {
        var doc = inject(e.responseText);
        document.open();
        document.write(doc);
        document.close();
    }
});
