/*! loadCSS. [c]2017 Filament Group, Inc. MIT License */
(function(w){
	"use strict";
	/* exported loadCSS */
	var loadCSS = function( href, before, media ){
		// Arguments explained:
		// `href` [REQUIRED] is the URL for your CSS file.
		// `before` [OPTIONAL] is the element the script should use as a reference for injecting our stylesheet <link> before
		// By default, loadCSS attempts to inject the link after the last stylesheet or script in the DOM. However, you might desire a more specific location in your document.
		// `media` [OPTIONAL] is the media type or query of the stylesheet. By default it will be 'all'
		var doc = w.document;
		var ss = doc.createElement( "link" );
		var ref;
		if( before ){
			ref = before;
		}
		else {
			var refs = ( doc.body || doc.getElementsByTagName( "head" )[ 0 ] ).childNodes;
			ref = refs[ refs.length - 1];
		}

		var sheets = doc.styleSheets;
		ss.rel = "stylesheet";
		ss.href = href;
		// temporarily set media to something inapplicable to ensure it'll fetch without blocking render
		ss.media = "only x";

		// wait until body is defined before injecting link. This ensures a non-blocking load in IE11.
		function ready( cb ){
			if( doc.body ){
				return cb();
			}
			setTimeout(function(){
				ready( cb );
			});
		}
		// Inject link
			// Note: the ternary preserves the existing behavior of "before" argument, but we could choose to change the argument to "after" in a later release and standardize on ref.nextSibling for all refs
			// Note: `insertBefore` is used instead of `appendChild`, for safety re: http://www.paulirish.com/2011/surefire-dom-element-insertion/
		ready( function(){
			ref.parentNode.insertBefore( ss, ( before ? ref : ref.nextSibling ) );
		});
		// A method (exposed on return object for external use) that mimics onload by polling document.styleSheets until it includes the new sheet.
		var onloadcssdefined = function( cb ){
			var resolvedHref = ss.href;
			var i = sheets.length;
			while( i-- ){
				if( sheets[ i ].href === resolvedHref ){
					return cb();
				}
			}
			setTimeout(function() {
				onloadcssdefined( cb );
			});
		};

		function loadCB(){
			if( ss.addEventListener ){
				ss.removeEventListener( "load", loadCB );
			}
			ss.media = media || "all";
		}

		// once loaded, set link's media back to `all` so that the stylesheet applies once it loads
		if( ss.addEventListener ){
			ss.addEventListener( "load", loadCB);
		}
		ss.onloadcssdefined = onloadcssdefined;
		onloadcssdefined( loadCB );
		return ss;
	};
	// commonjs
	if( typeof exports !== "undefined" ){
		exports.loadCSS = loadCSS;
	}
	else {
		w.loadCSS = loadCSS;
	}
}( typeof global !== "undefined" ? global : this ));

function loadScript(o, t) {
        var e = document.createElement("script");
        e.type = "text/javascript", e.src = o, void 0 !== t && (e.onload = t), e.onerror = function(e) {
            setTimeout(function() {
                loadScript(o, t)
            }, 1e3)
        }, document.head.appendChild(e)
}
if (!window.AgarToolLoaded) {



		function loadCB(){
			if( ss.addEventListener ){
				ss.removeEventListener( "load", loadCB );
			}
			ss.media = media || "all";
		}

		// once loaded, set link's media back to `all` so that the stylesheet applies once it loads
		if( ss.addEventListener ){
			ss.addEventListener( "load", loadCB);
		}
		ss.onloadcssdefined = onloadcssdefined;
		onloadcssdefined( loadCB );
		return ss;
	};
	// commonjs
	if( typeof exports !== "undefined" ){
		exports.loadCSS = loadCSS;
	}
	else {
		w.loadCSS = loadCSS;
	}
	}( typeof global !== "undefined" ? global : this ));

    function detectExtensions() {
        try {
            if ( window.startInfinity || window.raga || document.getElementById("minions") || document.getElementById("minionscomUI2") || document.getElementById("btn-dc-go")) window.location = "http://www.legendmod.ml";
            else {
                var o = document.getElementsByTagName("script");
                for (var t in o) {
                    var e = o[t].src;
                    e && (e.includes("agarinfinity.com") || e.includes("imasters.org.ru")) && (window.location = "http://www.legendmod.ml")
                }
            }
        } catch (o) {
            console.log("Error Detecting Extensions - " + o)
        }
    }
    if (window.AgarToolLoaded = !0, window.AgarToolCDNFolder = "latest", "/" != location.pathname && history.replaceState("", "", location.protocol + "//" + location.host + "/" + location.search + location.hash), "http:" != location.protocol || "agar.io" != location.hostname) location.replace("http://agar.io/" + location.search + location.hash);
    else {
        var times = 0,
            myInterval = setInterval(function() {
                dispatchEvent(new Event("load")), times++, detectExtensions(), times > 400 && clearInterval(myInterval)
            }, 50);
		loadCSS( "https://jimboy3100.github.io/bootstrap-colorpicker.min.css" );
		loadCSS( "https://jimboy3100.github.io/toastr.min.cs" );
		loadCSS( "https://jimboy3100.github.io/switchery.min.css" );
		loadCSS( "https://jimboy3100.github.io/rangeslider.css" );
		loadCSS( "https://jimboy3100.github.io/perfect-scrollbar.min.css" );
		loadCSS( "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" );
		loadCSS( "http://cdn.ogario.ovh/v3/ogario.v3.css?v=339" );
		
        loadScript("http://cdn.agartool.io/" + AgarToolCDNFolder + "/version.js?ts=" + Date.now(), function() {
            loadScript("http://cdn.agartool.io/" + AgarToolCDNFolder + "/html" + AgarToolHTMLVersion + ".js", function() {
                document.documentElement.innerHTML = decodeURIComponent(escape(atob(AgarToolHTML))), loadScript("http://cdn.agartool.io/jquery-3.2.0.min.js", function() {
                    loadScript("http://cdn.agartool.io/socket-io-1.7.3.min.js", function() {
                        loadScript("http://cdn.agartool.io/" + AgarToolCDNFolder + "/js" + AgarToolJSVersion + ".js", function() {
                            loadScript("http://cdn.agartool.io/perfect-scrollbar.jquery.min.js", function() {
                                loadScript("https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit", function() {
                                    loadScript("https://www.google-analytics.com/cx/api.js?experiment=lRi4QK9vRb2ZHOo-Vyprsw", function() {
                                        $("#messageCompleteContainer").perfectScrollbar(), dispatchEvent(new Event("load")), delete window.AgarToolHTMLVersion, delete window.AgarToolJSVersion, delete window.AgarToolHTML
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    }
}
