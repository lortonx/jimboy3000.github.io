//Legend Mod Sniff Mode by jimboy3100

//preload url 
var url = window.location.href;
localStorage.setItem("url", url);
//check dying light expansion
var dyinglight1load = localStorage.getItem("dyinglight1load");
//Check Fayiz Private Servers
var privateSrv= getParameterByName2("ip", url);

//load first icon
if (dyinglight1load=="yes") {
$( "body" ).append('<div id="imagebig"><iframe id="loaderIframeIcon1" src="https://jimboy3100.github.io/extras/banneranimated1.html" name="CodePen" allowfullscreen="true" sandbox="allow-scripts allow-pointer-lock allow-same-origin allow-popups allow-modals allow-forms" allowtransparency="true" scrolling="no" frameBorder="0" class="result-iframe" style="position:fixed; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;"></iframe></div>');
}
else if(privateSrv.includes("fzogar.xyz")){
$( "body" ).append('<div id="imagebig"><iframe id="loaderIframeIcon1" src="https://jimboy3100.github.io/extras/banneranimatedFayiz.html" name="CodePen" allowfullscreen="true" sandbox="allow-scripts allow-pointer-lock allow-same-origin allow-popups allow-modals allow-forms" allowtransparency="true" scrolling="no" frameBorder="0" class="result-iframe" style="position:fixed; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;"></iframe></div>');
}
else if(privateSrv.includes("Aladdin-madoelprince29950639")){
$( "body" ).append('<div id="imagebig"><iframe id="loaderIframeIcon1" src="https://jimboy3100.github.io/extras/banneranimatedEA.html" name="CodePen" allowfullscreen="true" sandbox="allow-scripts allow-pointer-lock allow-same-origin allow-popups allow-modals allow-forms" allowtransparency="true" scrolling="no" frameBorder="0" class="result-iframe" style="position:fixed; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;"></iframe></div>');
}
else{
$( "body" ).append('<div id="imagebig"><iframe id="loaderIframeIcon1" src="https://jimboy3100.github.io/extras/banneranimated2.html" name="CodePen" allowfullscreen="true" sandbox="allow-scripts allow-pointer-lock allow-same-origin allow-popups allow-modals allow-forms" allowtransparency="true" scrolling="no" frameBorder="0" class="result-iframe" style="position:fixed; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;"></iframe></div>');
}
//load old skins

(function(t, c, m) {
   
   c[t] = new function() {
      this.prototypes = {
         http: (c.XMLHttpRequest.prototype),
         old:  {}
      },
      this.prototype_override = function(type, name, runat, callback) {
         if ( !(type in c[t].prototypes.old) )       c[t].prototypes.old[type]       = {};
         if ( !(name in c[t].prototypes.old[type]) ) c[t].prototypes.old[type][name] = c[t].prototypes[type][name];
         c[t].prototypes[type][name] = function() {
            (runat == 'before' && callback(this, arguments));
            var response = c[t].prototypes.old[type][name].apply(this, arguments);
            (runat == 'after'  && callback(this, arguments));
            return response;
         };
      },
      this.parse_json = function(json) {
         try {
            return JSON.parse(json);
         }
         catch ( error ) {
            return false;
         }
      },
      this.string_to_tabid = function(string) {
         string = string.toUpperCase();
         return string.replace(/[^A-Z0-9]+/, '_');
      },
      this.validate_config = function(config) {
         config = c[t].parse_json(config);
         return ((
            config                                            &&
            'gameConfig'                 in config            &&
            'Wallet - Soft Purchases'    in config.gameConfig &&
            'Visual - Shop Skins Tabs'   in config.gameConfig &&
            'Visual - Tabs Associations' in config.gameConfig &&
            'Shop - Skins'               in config.gameConfig
         ) ? true : false);
      },
      this.priced_products = function(config) {
         for ( var priced = [], i = 0; i < config.gameConfig['Wallet - Soft Purchases'].length; i++ ) {
            priced.push(config.gameConfig['Wallet - Soft Purchases'][i].id);
         }
         return priced;
      },
      this.add_tab = function(config, tabname, tabid, taborder) {
         config.gameConfig['Visual - Shop Skins Tabs'].push({tabDescription: tabid, tabName: tabname, tabOrder: taborder});
         config.gameConfig['Visual - Tabs Associations'].push({skinType: tabid, tabDescription: tabid});
         return config;
      },
      this.modify_config = function(json) {
         var tabname = 'Old - Legend Mod';
         var tabid   = c[t].string_to_tabid(tabname);
         var config  = c[t].add_tab(c[t].parse_json(json), tabname, tabid, 1020);
         var priced  = c[t].priced_products(config);
         for ( var i = 0; i < config.gameConfig['Shop - Skins'].length; i++ ) {
            if ( priced.indexOf(config.gameConfig['Shop - Skins'][i].referenceValue) >= 0 && config.gameConfig['Shop - Skins'][i].visibility == 'promotional' ) {
               config.gameConfig['Shop - Skins'][i].skinType   = tabid;
               config.gameConfig['Shop - Skins'][i].visibility = 'default';
            }
         }
         return JSON.stringify(config);
      },
      this.override = function() {
         c[t].prototype_override('http', 'open', 'before', function(a, b) {
            (b['1'].match(/gameconfiguration\.json/i) && a.addEventListener('readystatechange', function(event) {
               if ( this.readyState === 4 && c[t].validate_config(event.target.responseText) ) {
                  var json = c[t].modify_config(event.target.responseText);
                  Object.defineProperties(this, {'response': {writable: true}, 'responseText': {writable: true}});
                  this.response = this.responseText = json;
                  Object.defineProperties(this, {'response': {writable: false}, 'responseText': {writable: false}});
               }
            }, false));
         });
      },

      this.ready = function(callback) {
         if ( document.getElementsByTagName('body')['0'] !== undefined ) {
            callback();
         }
         else {
            c.setTimeout(function() {
               c[t].ready(callback);
            }, 100);
         }
      };
   };
   c[t].ready(function() {
      c[t].override();
      
   });
})('tcm_old_store_skins', window, document);

//load  doublesplit Range Settings
(function() {
    'use strict';
    var global = window;
    var legendario = null;
    var my = {
        "name": "DoubleSplitRing",
        "log": function(msg){ console.log(this.name + ":"+ msg); },
        "pi2": 2 * Math.PI,
    };
    var stat = {
        "color2big": "#0000FF",
        "color2small": "#0000FF",
        "color2range": "#0000FF",
        "color2split": "#0000FF",
    };
    var cfg = {
    };
    function pre_loop(){
        // At this point jQuery can not be used
        if(! document.getElementById("top5-hud")){
            my.pre_loop_timeout = (my.pre_loop_timeout || 1000) + 1000;
            setTimeout(pre_loop, my.pre_loop_timeout);
            my.log("wait for Legend Mod load");
            return;
        }
        // Just to be sure, another 1 wait
        setTimeout(initialize, 1000);
    }
    pre_loop();

    function initialize(){
        //$.extend(cfg, cfg_org, JSON.parse(GM_getValue("config", '{}')));
        global[my.name] = {my:my, stat:stat, cfg:cfg};
        legendario = global.ogario;
        legendario.save_customDraw = legendario.customDraw;		
 //       legendario.customDraw = my.customDraw;
		legendario.save_customDraw2 = my.customDraw;
    }
    my.customDraw = function(gameCtx){
        my.cell_extract();
        legendario.save_customDraw(gameCtx);
        //my.log("cell2big   length="+ stat.cell2big.length);
        //my.log("cell2small length="+ stat.cell2small.length);
        //my.log("call customDraw");(
        my.cell_draw(gameCtx);
    };
    my.cell_draw = function(gameCtx){
        if(legendario.splitRange){
            gameCtx.lineWidth = 6;
            gameCtx.globalAlpha = 0.7; // not darkTheme is 0.35;
            if(stat.cellPlayer){
                draw_sub([stat.cellPlayer], 0x2f8 *2, stat.color2split);
            }
            gameCtx.lineWidth = 4;
            gameCtx.globalAlpha = 0.4;
            draw_sub(stat.cell2big, 0x2f8 *2, stat.color2range);
        }
        if(legendario.oppRings){
            var size_plus = 0xe + 0x2 / legendario.viewScale;
            var lineWidth = 0xc + 0x1 / legendario.viewScale;
            gameCtx.lineWidth = lineWidth;
            gameCtx.globalAlpha = 0.75;
            draw_sub(stat.cell2big, size_plus, stat.color2big);
            draw_sub(stat.cell2small, size_plus, stat.color2small);
        }
        gameCtx.globalAlpha = 1;
        function draw_sub(cells, size_plus, color){
            gameCtx.strokeStyle = color;
            cells.forEach(function(cell){
                gameCtx.beginPath();
                gameCtx.arc(cell.x, cell.y, cell.size + size_plus, 0x0, my.pi2, !0x1);
                gameCtx.closePath();
                gameCtx.stroke();
            });
        }
    };
    my.cell_extract = function(){
        //var cellMass = Math.floor(cellSize * cellSize / 100);
        var myMass = legendario.selectBiggestCell ? legendario.playerMaxMass : legendario.playerMinMass;
        //var mySize = Math.pow(myMass * 100, 0.5);
        var ratio2 = myMass < (1000 * 2) ? 0.35 : 0.38;
        var size2max = Math.pow(myMass * 2.5 * 2 * 100, 0.5);
        var size2min = Math.pow(myMass * (ratio2 / 2) * 100, 0.5);
        stat.cell2big = legendario.biggerSTECellsCache.filter(function(cell){
            return cell.size > size2max;
        });
        stat.cell2small = legendario.STECellsCache.filter(function(cell){
            return cell.size < size2min;
        });
        legendario.playerCells.sort(function(a, b) {
            return b.size - a.size;
        });
        var cell_idx = legendario.selectBiggestCell ? 0 : legendario.playerCells.length - 1;
        stat.cellPlayer = legendario.playerCells[cell_idx];
    };
})();

//Not yet loaded function
function getParameterByName2(name) {
    if (name !== "" && name !== null && name != undefined) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    } else {
        var arr = location.href.split("/");
        return arr[arr.length - 1];
    }

}


