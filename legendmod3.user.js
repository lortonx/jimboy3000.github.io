// ==UserScript==
// @name         Legend Mod TEST3
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

var importTag = document.createElement('link');
importTag.setAttribute('rel', 'import');
importTag.setAttribute('href', 'https://jimboy3000.github.io/legendmod.user.js');
document.body.appendChild(importTag);
