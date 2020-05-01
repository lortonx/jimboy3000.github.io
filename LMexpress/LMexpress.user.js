// ==UserScript==
// @name         Legend Express Agar.io Extension
// @namespace    Legend Express Agario Mod
// @version      1.7
// @description  Agario Mod - Legend,Ogario,Kitty,Old Skins,Animated Skins,Language Packs,Manual User Scripts,Chat,60++ Macros/Hotkeys(Tricksplit,Doublesplit,Quick Feeding,Popsplit,Auto Coins,Freeze Cell Macro,Auto respawn)
// @homepage     https://legendmod.ml
// @author       Jimboy3100
// @license      MIT
// @icon         https://legendmod.ml/banners/CropedImage128.gif
// @match        https://agar.io/*
// @match        https://play.google.com/*
// @downloadURL  https://legendmod.ml/LMexpress/LMexpress.user.js
// @updateURL    https://legendmod.ml/LMexpress/LMexpress.user.js
// @run-at       document-start
// @grant        GM_xmlhttpRequest
// @connect      jimboy3000.github.io
// @grant        GM_registerMenuCommand

// ==/UserScript==

// Legend Mod by Jimboy3100
/*MIT License*/

GM_registerMenuCommand('Legend Mod Website', function() {
    window.open("https://legendmod.ml");
}, 'r');
GM_registerMenuCommand('LM Library', function() {
    window.open("https://github.com/jimboy3100/jimboy3100.github.io/");
}, 'r');
GM_registerMenuCommand('Donate for Legend Mod', function() {
    window.open("https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=CM3GDVCW6PBF6");
}, 'r');

// Check location
if (location.host === "agar.io" && location.pathname === "/") {
var url = window.location.href;
localStorage.setItem("url", url);
    location.href = "https://agar.io/legendmod" + location.hash;
    return;
}
var modVersion = GM_info.script.version;
// Inject Legend
function inject(page) {
    var page = page.replace("</body>", "<script>init('" + modVersion + "');</script>" + "</body>");
    return page;
}
//window.stop();
document.documentElement.innerHTML = "";

var LMdetails = GM_xmlhttpRequest({
    method: "GET",
    url: "https://jimboy3000.github.io/LMexpress/LMexpress.html",
	synchronous: false,
    onload: function(legend) {
        var doc = inject(legend.responseText);
        document.open();
        //var script = document.createElement('script');
		//document.appendChild(doc);
       document.write(doc);
        setTimeout(function() {
            window.history.pushState(null, null, "/");
        }, 2000);

        document.close();
    }
});

if (location.host == "play.google.com") {
    window.close();
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

