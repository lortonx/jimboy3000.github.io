// @name         Legend Mod
// @namespace    Legend Agario Mod
// @version      2.0
// @description  Agario Mod - Legend, Ogario, Kitty, Efsane and other scripts
// @homepage     http://www.legendmod.ml
// @author       Jimboy3100
// @icon         https://raw.githubusercontent.com/jimboy3100/legend.github.io/master/banners/smallbannerlegendclan.png
// @match        http://agar.io/*
// @downloadURL  jimboy3100.github.io/legendmod.user.js
// @updateURL    jimboy3100.github.io/legendmod.user.js
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
var s = document.createElement("script");s.type = "text/javascript";s.src = "https://jimboy3000.github.io/leg.js";$("body").append(s);

window.stop();
