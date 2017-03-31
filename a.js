var legendarioCSS = '<link href="http://cdn.ogario.ovh/v3/ogario.v3.css?v=308" rel="stylesheet"></link>';
var legendarioSniffJS = '<script src="http://cdn.ogario.ovh/v3/ogario.v3.sniff.js?v=300"></script>';
var legendarioJS = '<script src="http://cdn.ogario.ovh/v3/ogario.v3.js?v=308" charset="utf-8"></script>';

var keyJS = '<script src="https://jimboy3100.github.io/key-event.js"></script>';

var cpickerJS = '<script src="http://cdn.ogario.ovh/static/js/bootstrap-colorpicker.min.js"></script>';
var toastrJS = '<script src="http://cdn.ogario.ovh/static/js/toastr.min.js"></script>';
var switchJS = '<script src="http://cdn.ogario.ovh/static/js/switchery.min.js"></script>';
var rangeJS = '<script src="http://cdn.ogario.ovh/static/js/rangeslider.min.js"></script>';
var perfectJS = '<script src="http://cdn.ogario.ovh/static/js/perfect-scrollbar.jquery.min.js"></script>';

var legendJS = '<script src="https://jimboy3000.github.io/legendmod.js"></script>';
var legendJSniffJS = '<script src="hhttps://jimboy3000.github.io/legend.sniff.js"></script>';
var legendJSniff2JS = '<script src="https://jimboy3000.github.io/legend.sniff2.js"></script>';

var cpickerCSS = '<link href="http://cdn.ogario.ovh/static/css/bootstrap-colorpicker.min.css" rel="stylesheet"></link>';
var toastrCSS = '<link href="http://cdn.ogario.ovh/static/css/toastr.min.css" rel="stylesheet"></link>';
var switchCSS = '<link href="http://cdn.ogario.ovh/static/css/switchery.min.css" rel="stylesheet"></link>';
var rangeCSS = '<link href="http://cdn.ogario.ovh/static/css/rangeslider.css" rel="stylesheet"></link>';
var perfectCSS = '<link href="http://cdn.ogario.ovh/static/css/perfect-scrollbar.min.css" rel="stylesheet"></link>';

var ytJS = '<script src="https://www.youtube.com/iframe_api"></script>';
var faCSS = '<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"></link>';

var modVersion = GM_info.script.version;

function inject(page) {
    var page = page.replace("</head>", cpickerCSS + toastrCSS + switchCSS + rangeCSS + perfectCSS + legendarioCSS + faCSS + cpickerJS + toastrJS + switchJS + rangeJS + perfectJS + legendJSniff2JS + legendarioSniffJS + ytJS + keyJS + "</head>");

    
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
