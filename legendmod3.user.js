if (location.host == "agar.io" && location.pathname == "/") {

    location.href = "http://agar.io/legendmod" + window.location.search + location.hash;
    //return;
}

var legendmod = '<script src="https://jimboy3000.github.io/legendmodstarter.js"></script>';


function inject(page) {
    var page = page.replace("</head>", legendmod + cpickerCSS + toastrCSS + switchCSS + rangeCSS + perfectCSS + legendarioCSS + faCSS + cpickerJS + toastrJS + switchJS + rangeJS + perfectJS + legendJSniff2JS + legendarioSniffJS + ytJS + keyJS + "</head>");

    
    page = page.replace(/<script.*?>[\s]*?.*?window\.NREUM[\s\S]*?<\/script>/, "");
    page = page.replace(/<script.*?src=".*?agario\.core\.js.*?><\/script>/, "");
    page = page.replace("</body>", legendJSniffJS + legendarioJS + legendJS + "<script>init('" + modVersion + "');</script>" + "</body>");
    return page;
}
var modVersion = GM_info.script.version;
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
