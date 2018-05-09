var _$_64d1 = ["ogario", "jQuery", "id", "nick", "skinID", "skinURL", "length", "color", "canvas", "getElementById", "mousemove", "play", "cursorTracking", "setCursorPosition", "clientX", "clientY", "addEventListener", "MC", "showNickDialog", "_showNickDialog", "apply", "show", "#main-panel", "onkeydown", "_showStatsDialog", "showStatsDialog", "_onPlayerSpawn", "onPlayerSpawn", "playerColor", "_onPlayerDeath", "onPlayerDeath", "_onAgarioCoreLoaded", "onAgarioCoreLoaded", "_wasInitialized", "wasInitialized", "getDefaultSettings", "disabled", "prop", ".btn-spectate", "innerWidth", "innerHeight", "#helloContainer", "menuHeight", "min", "round", "translate(-50%, 0%) scale(", ")", "transform", "css", "-ms-transform", "-webkit-transform", "top", "", "px", "innerW", "innerH", "exit", "/ogario", "pathname", "location", "history", "replaceState", "title", "document", "/", "hash", "NREUM", "core", "http://agar.io/agario.core.js", "$1 var ogario=$2.ogario,gameCtx=null;", "replace", "if($2.id===\"canvas\"){$1 gameCtx=$2;}else{$1}", "$1if(ogario.pause){$2=ogario.innerW/2*ogario.canvasScale; $3=ogario.innerH/2*ogario.canvasScale;}$4", "$1 ogario.getString=$2;", "$1 if(ogario.setMapCoords){ogario.setMapCoords($3,$5,$7,$9,$2,$8);}", "if($1<ogario.zoomResetValue){", "if(!ogario.autoZoom){$3=ogario.zoomValue;} $1$2 (ogario.zoomSpeedValue||0.9) $5 ogario.zoomValue=$1;", "$1 if(!ogario.autoZoom){$3=ogario.zoomValue;}else{$2}$5", "ogario.playerCellsMass=[]; $1$2; ogario.playerCellsMass.push($2)$3 ogario.playerMass=$5; if(ogario.calculateMass){ogario.calculateMass();}", "$1 ogario.viewScale=$2; ogario.playerX=$4; ogario.playerY=$5; if(ogario.customDraw){ogario.customDraw(gameCtx);}", "$1$6", "{}", "$1$2{if(ogario.drawGrid){ogario.drawGrid(gameCtx);} return;", "ogario.cellMemOffset=$2; $1 if(!ogario.vanillaSkins&&ogario.customSkins){$4=0;}else{}else", "if(($1)&&!ogario.customSkins){", "var nick=null,color=null,skin=null,cellX=null,cellY=null,cellSize=null,isFood=false,isVirus=false,isPlayerCell=false,skipCell=false;do if($1=1,$1){cellSize=$4;$2 if(!$3){isFood=true;if(!ogario.showFood){break;} if(ogario.autoHideFood&&!ogario.foodIsHidden&&ogario.playerMass>1000){ogario.showFood=false;ogario.foodIsHidden=true;} if(!ogario.rainbowFood){ogario.foodCache.push({x:$6,y:$7,size:cellSize});break;}} if(ogario.hideSmallBots&&cellSize<=36){skipCell=true;break;}$5$8 if($3){if(gameCtx){ogario.globalApha=gameCtx.globalAlpha;cellX=$6;cellY=$7;if(gameCtx.lineJoin==='miter'){isVirus=true;if(ogario.setVirusColor&&ogario.setVirusStrokeColor){gameCtx.fillStyle='#333333';gameCtx.strokeStyle='#333333';}else{gameCtx.fillStyle=ogario.virusColor;gameCtx.strokeStyle=ogario.virusStrokeColor;} if(ogario.transparentViruses){gameCtx.globalAlpha*=ogario.virusAlpha;} if(ogario.virusesRange&&ogario.play){ogario.virusesCache.push({x:cellX,y:cellY,size:cellSize});}}else{if(ogario.nameMemOffset&&ogario.cellMemOffset&&ogario.getString){if((a[ogario.cellMemOffset+ogario.nameMemOffset+4>>0]&1)==0|0){nick=ogario.getString(ogario.cellMemOffset+ogario.nameMemOffset+5);}else{nick=ogario.getString(c[ogario.cellMemOffset+ogario.nameMemOffset+12>>2]|0);}} if(ogario.rgb2Hex){color=ogario.rgb2Hex($10,$11,$12);} if(nick&&nick.length>0&&color){if(ogario.showCustomSkins&&ogario.customSkins&&ogario.getCustomSkin){skin=ogario.getCustomSkin(nick,color);}} if(ogario.play){if(ogario.cellMemOffset&&ogario.idOffset&&ogario.idMemOffset){var idA=c[ogario.cellMemOffset+ogario.idOffset>>2]|0;var idB=c[ogario.idMemOffset]|0;var idC=c[ogario.idMemOffset+1]|0;loop:do{if((idB|0)!=(idC|0)){while(true){if((c[idB>>2]|0)==(idA|0)){break loop;}idB=idB+4|0;if((idB|0)==(idC|0)){idB=idC;break;}}}}while(false);isPlayerCell=(idB|0)!=(idC|0);} if(isPlayerCell&&ogario.playerCells){ogario.playerCells.push({x:cellX,y:cellY,size:cellSize});ogario.playerColor=color;} if(((ogario.oppColors&&!ogario.oppRings)||(ogario.myCustomColor&&isPlayerCell))&&ogario.setOppColor){gameCtx.fillStyle=ogario.setOppColor(cellSize,isPlayerCell);}else{$9} if(!isPlayerCell&&(ogario.splitRange||ogario.oppRings)&&ogario.cacheCells){ogario.cacheCells(cellX,cellY,cellSize);}}else{$9} if(ogario.transparentCells){gameCtx.globalAlpha*=ogario.cellsAlpha;}}$13gameCtx.globalAlpha=ogario.globalApha;if(isVirus){gameCtx.stroke();}if(((ogario.transparentSkins||(ogario.play&&ogario.oppColors))&&!(isPlayerCell&&!ogario.myTransparentSkin))||isPlayerCell&&ogario.myTransparentSkin){gameCtx.globalAlpha*=ogario.skinsAlpha;} if(skin){gameCtx.save();gameCtx.clip();gameCtx.drawImage(skin,cellX-cellSize,cellY-cellSize,2*cellSize,2*cellSize);gameCtx.restore();}}else{$9$13}break;", "if(gameCtx&&ogario){gameCtx.globalAlpha=ogario.globalApha;}$1 if(!(skipCell||(ogario.autoHideCellsInfo&&ogario.setAutoHideCellsInfo&&cellSize&&!isFood&&!isVirus&&!isPlayerCell&&ogario.setAutoHideCellsInfo(cellSize)))){$2}", "$1$2&&ogario.vanillaSkins&&!skin)", "$1 ogario.idOffset=$2; ogario.idMemOffset=$3; $4", "$1 1.5 $2", "$1 if($2<0.3){$2=0.3}", "$1 $2*=2;", "do if(($2&&!($1&&o auto respawn (evergreen).user.js
// Copyright Ãƒâ€šÃ‚Â© 2016 ogario.ovh
! function(e, t) {
    function a(e, t, a, i, o, s, n, r) {
        this.id = e, this.x = t, this.y = a, this.lastX = t, this.lastY = a, this.mass = i, this.clanTag = o, this.setNick(s), this.skinURL = n, 7 == r.length && (this.color = r), this.alive = !0, this.updateTime = Date.now()
    }
    function i() {}
    function o() {
        if (null !== document.getElementById("canvas")) {
            var t = document.getElementById("canvas");
            return t.addEventListener("mousemove", function(t) {
                if (e.play && e.cursorTracking) {
                    var a = 1 * t.clientX,
                        i = 1 * t.clientY;
                    e.cursorX = (a - e.innerW / 2) / e.viewScale + e.playerX, e.cursorY = (i - e.innerH / 2) / e.viewScale + e.playerY
                }
            }, !1), void(e.gameCtx = t.getContext("2d"))
        }
        setTimeout(o, 50)
    }
    function s() {
        return window.MC ? (window.MC._showNickDialog = window.MC.showNickDialog, window.MC.showNickDialog = function() {
            window.MC._showNickDialog.apply(this, arguments), window.onkeydown = function() {}
        }, window.MC._showStatsDialog = window.MC.showStatsDialog, window.MC.showStatsDialog = function() {
            window.MC._showStatsDialog.apply(this, arguments), window.onkeydown = function() {}
        }, window.MC._onPlayerSpawn = window.MC.onPlayerSpawn, window.MC.onPlayerSpawn = function() {
            window.MC._onPlayerSpawn.apply(this, arguments), e.play = !0, f.sendPlayerSpawn()
        }, window.MC._onPlayerDeath = window.MC.onPlayerDeath, void(window.MC.onPlayerDeath = function() {
            window.MC._onPlayerDeath.apply(this, arguments), e.play = !1, f.sendPlayerDeath(), f.updateDeathLocations(e.playerX, e.playerY), window.onkeydown = function() {}
        })) : void setTimeout(s, 50)
    }
    function n() {
        var a = 1 * window.innerWidth,
            i = 1 * window.innerHeight,
            o = t("#helloContainer"),
            s = o.innerHeight();
        0 != s ? e.menuHeight = s : s = e.menuHeight || 760;
        var n = Math.min(1, i / s),
            r = s * n,
            l = Math.round(i / 2 - .5 * r),
            c = "translate(-50%, 0%) scale(" + n + ")";
        o.css("transform", c), o.css("-ms-transform", c), o.css("-webkit-transform", c), o.css("top", "" + l + "px"), e.innerW = a, e.innerH = i
    }
    function r() {
        return window.jQuery("#helloContainer").innerHeight() > 0 ? void n() : void setTimeout(r, 50)
    }
    function l() {
        return e.play ? d[c].exit : void 0
    }! function() {
        window.core && (window.core = null, delete window.core), t.ajax("http://agar.io/agario.core.js", {
            success: function(e) {
                var t = e;
                t = t.replace(/if\((\+\w\[\w>>3\])<1\.0\){/i, "if($1<window.ogario.zoom){"), t = t.replace(/(\d\.\d;return}function\s*)([\w$]+\(.,.\)){/i, "$1$2{return;"), t = t.replace(/do\s*if\((\w)\){((\w)=!\((\+\w\[\w>>2\])<=20\.0\);)([\w$]+\(\d+,\w\[\w>>2]\|0\)\|0;[\w$]+\(\d+,\w\[\w>>2]\|0,(\+\(\+\w\[\w>>2\]\)),(\+\(\+\w\[\w>>2\]\)),\+\(\+\w\[\w>>2\])\+5\.0(\),0\.0,6\.283185307179586,0\)\|0;[\w$]+\(\d+,\w\[\w>>2]\|0\)\|0;\w=\w\[\w>>2\]\|0;)if\(\w\){([\w$]+\(\d+,\w\|0,\w&255\|0,\w&255\|0,\w&255\|0\)\|0;)([\w$]+\(\d+,\w\[\w>>2]\|0\)\|0;)/i, "var gameCtx=null,ogario=null,nick=null,skin=null,cellSize=null,isFood=false,isVirus=false,isMyCell=false;do if($1=1,$1){cellSize=$4;$2 if(!$3){isFood=true;if(!window.ogario.showFood){break;}if(window.ogario.autoHideFood&&window.ogario.playerMass>1000){window.ogario.showFood=false;}if(!window.ogario.rainbowFood){window.ogario.foodCache.push({x:$6,y:$7,size:cellSize});break;}}$5$8 if($3){gameCtx=window.ogario.gameCtx;if(gameCtx){var ogario=window.ogario;ogario.globalApha=gameCtx.globalAlpha;if(gameCtx.lineJoin=='miter'){isVirus=true;if(ogario.setVirusColor&&ogario.setVirusStrokeColor){gameCtx.fillStyle=ogario.setVirusColor(cellSize);gameCtx.strokeStyle=ogario.setVirusStrokeColor(cellSize);}else{gameCtx.fillStyle=gameCtx.strokeStyle=ogario.virusColor;}gameCtx.stroke();gameCtx.globalAlpha*=ogario.virusAlpha;}else{if(ogario.cellMemOffset!==null&&ogario.getString){if((a[ogario.cellMemOffset+ogario.nameMemOffset+4>>0]&1)==0|0){nick=ogario.getString(ogario.cellMemOffset+ogario.nameMemOffset+5);}else{nick=ogario.getString(c[ogario.cellMemOffset+ogario.nameMemOffset+12>>2]|0);}}if(nick&&nick.length>0){if(ogario.playerNick&&nick===ogario.playerNick){isMyCell=true;}if(ogario.customSkins&&ogario.getCustomSkin){skin=ogario.getCustomSkin(nick);}}if(ogario.play){if(ogario.oppColors&&ogario.setOppColor){gameCtx.fillStyle=ogario.setOppColor(cellSize,isMyCell);}else{$9}if(ogario.splitRange&&ogario.cacheBiggerCells){ogario.cacheBiggerCells($6,$7,cellSize);}}else{$9}if(ogario.transparentCells){gameCtx.globalAlpha*=ogario.cellsAlpha;}}$10gameCtx.globalAlpha=ogario.globalApha;if((ogario.transparentSkins||ogario.oppColors)&&!(isMyCell&&!ogario.ownTransparentSkin)){gameCtx.globalAlpha*=ogario.skinsAlpha;}if(skin){gameCtx.save();gameCtx.clip();gameCtx.drawImage(skin,$6-cellSize,$7-cellSize,2*cellSize,2*cellSize);gameCtx.restore();}}else{$9$10}break;"), t = t.replace(/(if\(\(\w\[\w\+\d+>>0\]\|0\)==0\?\(\(\(\(\w\[\w\+\d+>>2\]\|0\)\+\(\w\[\d+\]\|0\)\|0\)>>>0\)%10\|0\|0\)!=0:0\){\w=\w\[\w>>2\]\|0;[\w$]+\(\d+,\w\|0\)\|0;\w=\w;return})([\w$]+\(\w,\w\);)/i, "if(gameCtx&&ogario){gameCtx.globalAlpha=ogario.globalApha;}$1 var hideCellInfo=false;if(cellSize&&cellSize>=40){if(!isVirus&&!isMyCell&&ogario.autoHideCellsInfo&&ogario.setAutoHideCellsInfo){hideCellInfo=ogario.setAutoHideCellsInfo(cellSize);}if(!hideCellInfo){$2}}else{$2}"), t = t.replace(/(\w\[\w\+(\d+)>>3]=(\w);\w\[\w\+(\d+)>>3]=(\w);\w\[\w\+(\d+)>>3]=(\w);\w\[\w\+(\d+)>>3]=(\w);)/i, "$1 if(window.ogario.setMapCoords){window.ogario.setMapCoords($3,$5,$7,$9,$2,$8);}"), t = t.replace(/(do{\w=\+\w\[\(\w\[\w>>2\]\|0\)\+\d+>>2];\w=\w\+\s*)(\+\(~~\+\w\(\+\(\w\*\w\/100\.0\)\)\|0\))(;\w=\w\+4\|0}while\(\(\w\|0\)!=\(\w\|0\)\);(\w)=(\w);)/i, "window.ogario.playerCellsMass=[]; $1$2; window.ogario.playerCellsMass.push($2); $3 window.ogario.playerMass=$5; if(window.ogario.calculateMass){window.ogario.calculateMass();}"), t = t.replace(/([\w$]+\(\d+,\w\[\w>>2\]\|0,(\+\w),(\+\w)\)\|0;[\w$]+\(\d+,\w\[\w>>2\]\|0,\+-(\+\w\[\w\+\d+>>3\]),\+-(\+\w\[\w\+\d+>>3\])\)\|0;)/i, "$1 window.ogario.viewScale=$2; window.ogario.playerX=$4; window.ogario.playerY=$5; if(window.ogario.customDraw){window.ogario.customDraw();}"), t = t.replace(/(if\(\w<=)(20\.0)(\){\w=\w;return})(if\(!\w\){if\(\(\w\[\d+\]\|0\)!=\(\w\[\d+\]\|0\)\){\w=\w;return}if\(\(\w\[\w\+\d+>>0\]\|0\)!=0\?\(\w\[\w>>0\]\|0\)==0:0\){\w=\w;return}})/i, "$140.0$3"), t = t.replace(/(\w=~~\(\+\(\w\[\w\+\d+>>2\]\|0\)\/\w)\);([\w$]+\(\w\)\|0;)(\w=~~\(\+\(\w\[\w\+\d+>>2\]\|0\)\/\w)\);(if\(!\w\){\w=\w;return})/i, "$1/0.6);$2$3/0.6);$4"), t = t.replace(/(\w=\w\[\w>>2\]\|0;)(\w\[\w>>3\]=\w;)(\w\[\w>>0\]=a\[\w>>0\];)/i, "$1 if(window.ogario.autoZoom){$2}$3"), t = t.replace(/(function\s*([\w$]+)\(\w\){return\s*[\w$]+\(\w,\w\)})/i, "$1 window.ogario.getString=$2;"), t = t.replace(/(if\(\(\w\[\d+\]\|0\)!=0\?\(\w\[\d+\]\|\w\[(\w)\+\d+>>0\]\)<<24>>24==0:0\))((\w)=\w\[(\w)\+\d+>>2\]\|0;)else/i, "window.ogario.cellMemOffset=$2; $1 if(window.ogario.customSkins){$4=0;}else{$3}else"), t = t.replace(/(\w=\w\+(\d+)\|0;\w=~~\(\+\w\[\w\+\d+>>2\]\*\.3\);)/i, "$1 window.ogario.nameMemOffset=$2;"), t = t.replace(/(while\(0\);)([\w$]+\(\w,\w\);)([\w$]+\(\w,\w\);)([\w$]+\(\w,\w\);)([\w$]+\(\w,\w\);)(\w\[\w\+\d+>>0\]=1;\w=\w;return})/i, "$1$3$4$5$6");
                var a = document.createElement("script");
                a.textContent = t, a.async = !0, document.body.appendChild(a)
            },
            dataType: "text",
            method: "GET",
            cache: !1,
            crossDomain: !0
        })
    }();
    var c = "en",
        d = {
            pl: {
                start: "Start",
                settings: "Ustawienia",
                autoZoom: "Auto zoom",
                autoHideCellsInfo: "Autoukrywanie nazw i masy",
                autoHideFood: "Autoukrywanie pokarmu",
                hideOwnName: "Ukryj wÃƒâ€¦Ã¢â‚¬Å¡asnÃƒâ€žÃ¢â‚¬Â¦ nazwÃƒâ€žÃ¢â€žÂ¢",
                customSkins: "WÃƒâ€¦Ã¢â‚¬Å¡asne skiny",
                rainbowFood: "Kolorowy pokarm",
                transparentCells: "Przezroczyste kulki",
                transparentSkins: "Przezroczyste skiny",
                ownTransparentSkin: "WÃƒâ€¦Ã¢â‚¬Å¡asny przezroczysty skin",
                showBgSectors: "Sektory w tle",
                showMapBorders: "Granice mapy",
                showMiniMap: "PokaÃƒâ€¦Ã‚Â¼ minimapÃƒâ€žÃ¢â€žÂ¢",
                oppColors: "Kolory przeciwnikÃƒÆ’Ã‚Â³w",
                splitRange: "ZasiÃƒâ€žÃ¢â€žÂ¢g podziaÃƒâ€¦Ã¢â‚¬Å¡u",
                showFPS: "PokaÃƒâ€¦Ã‚Â¼ statystyki gry",
                textStroke: "ObwÃƒÆ’Ã‚Â³dki tekstu",
                disableShift: "WyÃƒâ€¦Ã¢â‚¬Å¡Ãƒâ€žÃ¢â‚¬Â¦cz Shift",
                disableAlt: "WyÃƒâ€¦Ã¢â‚¬Å¡Ãƒâ€žÃ¢â‚¬Â¦cz Alt",
                hideChat: "Ukryj czat",
                mouseControl: "Split/feed myszkÃƒâ€žÃ¢â‚¬Â¦",
                mouseInvert: "OdwrÃƒÆ’Ã‚Â³Ãƒâ€žÃ¢â‚¬Â¡ klawisze myszki",
                cursorTracking: "Ãƒâ€¦Ã…Â¡ledzenie kursora",
                keys: "Klawisze",
                qKey: "PodwÃƒÆ’Ã‚Â³jny podziaÃƒâ€¦Ã¢â‚¬Å¡",
                wKey: "Karmienie",
                eKey: "Pauza kulki",
                aKey: "PokaÃƒâ€¦Ã‚Â¼/ukryj nazwy",
                sKey: "PokaÃƒâ€¦Ã‚Â¼/ukryj skiny",
                dKey: "PokaÃƒâ€¦Ã‚Â¼/ukryj sektory w tle",
                fKey: "PokaÃƒâ€¦Ã‚Â¼/ukryj pokarm",
                hKey: "Ukryj czat",
                zKey: "Reset zoomu",
                cKey: "Historia czatu / CzyÃƒâ€¦Ã¢â‚¬ÂºÃƒâ€žÃ¢â‚¬Â¡ czat",
                shiftKey: "Szybki podziaÃƒâ€¦Ã¢â‚¬Å¡ n16",
                spaceKey: "PodziaÃƒâ€¦Ã¢â‚¬Å¡",
                space: "Spacja",
                enterKey: "Napisz wiadomoÃƒâ€¦Ã¢â‚¬ÂºÃƒâ€žÃ¢â‚¬Â¡",
                tildeKey: "Szybki resp (party)",
                commands: "Komendy",
                saveComm: "Zapisz komendy",
                theme: "WyglÃƒâ€žÃ¢â‚¬Â¦d",
                themeType: "Motyw",
                darkTheme: "Ciemny motyw",
                lightTheme: "Jasny motyw",
                mainColor: "Kolor gÃƒâ€¦Ã¢â‚¬Å¡ÃƒÆ’Ã‚Â³wny",
                bgColor: "Kolor tÃƒâ€¦Ã¢â‚¬Å¡a",
                foodColor: "Kolor pokarmu",
                gridColor: "Kolor sektorÃƒÆ’Ã‚Â³w",
                saveSett: "Zapisz ustawienia",
                hideChatMsg: "Ukryto czat!",
                activePartys: "Aktywne party",
                pause: "PAUZA!",
                visit: "OdwiedÃƒâ€¦Ã‚Âº ",
                exit: "OGARio by szymy: Czy na pewno chcesz opuÃƒâ€¦Ã¢â‚¬Âºcic grÃƒâ€žÃ¢â€žÂ¢?"
            },
            en: {
                start: "Start",
                settings: "Settings",
                autoZoom: "Auto zoom",
                autoHideCellsInfo: "Auto hide names and mass",
                autoHideFood: "Auto hide food",
                hideOwnName: "Hide own name",
                customSkins: "Custom skins",
                rainbowFood: "Rainbow food",
                transparentCells: "Transparent cells",
                transparentSkins: "Transparent skins",
                ownTransparentSkin: "Own transparent skin",
                showBgSectors: "Show background sectors",
                showMapBorders: "Show map borders",
                showMiniMap: "Show minimap",
                oppColors: "Opponents colors",
                splitRange: "Split range",
                showFPS: "Show game stats",
                textStroke: "Text stroke",
                disableShift: "Disable Shift",
                disableAlt: "Disable Alt",
                hideChat: "Hide chat",
                mouseControl: "Mouse feed/split",
                mouseInvert: "Invert mouse buttons",
                cursorTracking: "Cursor tracking",
                keys: "Keys",
                qKey: "Double split",
                wKey: "Macro feed",
                eKey: "Cell pause",
                aKey: "Toggle names",
                sKey: "Toggle skins",
                dKey: "Toggle background sectors",
                fKey: "Toggle food",
                hKey: "Hide chat",
                zKey: "Reset zoom",
                cKey: "Chat history / Clear chat",
                shiftKey: "Split n16",
                spaceKey: "Split",
                space: "Space",
                enterKey: "Enter chat message",
                tildeKey: "Quick resp (party)",
                commands: "Commands",
                saveComm: "Save commands",
                theme: "Theme",
                themeType: "Theme type",
                darkTheme: "Dark theme",
                lightTheme: "Light theme",
                mainColor: "Main color",
                bgColor: "Background color",
                foodColor: "Food color",
                gridColor: "Grid color",
                saveSett: "Save settings",
                hideChatMsg: "Hide chat!",
                activePartys: "Active partys",
                pause: "PAUSE!",
                visit: "Visit ",
                exit: "OGARio by szymy: Are you sure you want to quit the game?"
            }
        };
    if ("pl" == c) var h = {
        comm1: "Feeduj!",
        comm2: "Dziel siÃƒâ€žÃ¢â€žÂ¢!",
        comm3: "Pomocy na %currentSector%!",
        comm4: "WrÃƒÆ’Ã‚Â³g na %currentSector%!",
        comm5: "Zabij pomocnika!",
        comm6: "Strzel z wirusa!",
        comm7: "Zjedz wirusa!",
        comm8: "ZjebaÃƒâ€¦Ã¢â‚¬Å¡em, wybacz.",
        comm9: "Ja pierdolÃƒâ€žÃ¢â€žÂ¢...",
        comm0: "Kurwa maÃƒâ€žÃ¢â‚¬Â¡!",
        comm10: "Trick!",
        comm11: "Lewo!",
        comm12: "GÃƒÆ’Ã‚Â³ra!",
        comm13: "Prawo!",
        comm14: "DÃƒÆ’Ã‚Â³Ãƒâ€¦Ã¢â‚¬Å¡!"
    };
    else var h = {
        comm1: "Feed me!",
        comm2: "Split into me!",
        comm3: "Need backup on %currentSector%!",
        comm4: "Enemy spotted on %currentSector%!",
        comm5: "Need a teammate!",
        comm6: "Tank the virus!",
        comm7: "Eat the virus!",
        comm8: "Let's bait!",
        comm9: "Fake tricksplit!",
        comm0: "Fuck!",
        comm10: "Tricksplit!",
        comm11: "Left!",
        comm12: "Up!",
        comm13: "Right!",
        comm14: "Bottom!"
    };
    var p = null,
        m = {
            mainColor: "#0D47A1",
            bgColor: "#000000",
            foodColor: "#0D47A1",
            gridColor: "#0D47A1",
            darkTheme: !0
        },
        u = {
            nick: "I <3 szymy",
            clanTag: "BNC",
            skinURL: "",
            color: m.mainColor
        },
        w = {
            autoZoom: !0,
            autoHideCellsInfo: !0,
            autoHideFood: !1,
            hideOwnName: !1,
            customSkins: !0,
            rainbowFood: !1,
            transparentCells: !0,
            transparentSkins: !0,
            ownTransparentSkin: !1,
            showBgSectors: !0,
            showMapBorders: !0,
            showMiniMap: !0,
            oppColors: !0,
            splitRange: !0,
            showFPS: !0,
            textStroke: !1,
            disableShift: !1,
            disableAlt: !0,
            hideChat: !1,
            mouseControl: !1,
            mouseInvert: !1
        };
    a.prototype = {
        id: 0,
        x: 0,
        y: 0,
        lastX: 0,
        lastY: 0,
        mass: 0,
        clanTag: "",
        nick: "",
        nickImg: null,
        skinURL: "",
        color: m.mainColor,
        alive: !1,
        updateTime: null,
        pi2: 2 * Math.PI,
        setNick: function(e) {
            e && e != this.nick && (this.nick = e)
        },
        drawPosition: function(e, t, a) {
            if (this.alive) {
                this.lastX = (29 * this.lastX + this.x) / 30, this.lastY = (29 * this.lastY + this.y) / 30;
                var i = (this.lastX + t) * a,
                    o = (this.lastY + t) * a;
                this.nick.length > 0 && (e.fillStyle = "#FFFFFF", e.font = "9px Ubuntu", e.fillText(this.nick, i - e.measureText(this.nick).width / 2, o - 10)), e.beginPath(), e.arc(i, o, 4.5, 0, this.pi2, !1), e.closePath(), e.fillStyle = this.color, e.fill()
            }
        }
    }, i.prototype = {
        name: "OGARio LE by szymy",
        version: "For more updates by SZYMY",
        currentSector: "",
        miniMap: null,
        miniMapCtx: null,
        miniMapSectors: null,
        pi2: 2 * Math.PI,
        sectors: 5,
        mapBordersWidth: 20,
        socket: null,
        teamPlayers: [],
        partys: [],
        chatHistory: [],
        customSkinsCache: {},
        deathLocations: [],
        lastDeath: 0,
        gameMode: "",
        partyToken: "",
        playerIP: "",
        playerMass: 0,
        updateTick: 0,
        rFps: 0,
        renderedFrames: 0,
        fpsLastRequest: null,
        fpsHUD: null,
        leaderboardInfo: null,
        leaderboardPositionsHUD: null,
        activePartys: null,
        top5p: null,
        lastMessageSend: Date.now(),
        selectBiggestCell: !0,
        setSkins: !0,
        setNames: !0,
        getPlayerX: function() {
            return e.playerX + e.mapOffsetX
        },
        getPlayerY: function() {
            return e.playerY + e.mapOffsetY
        },
        parseSettings: function(e, t) {
            return "save" === t ? "string" == typeof e ? e : JSON.stringify(e) : "string" != typeof e ? JSON.stringify(e) : "true" == e || "false" == e ? JSON.parse(e) : e
        },
        loadSettings: function(e) {
            for (var t in e) e.hasOwnProperty(t) && null != window.localStorage.getItem(t) && (e[t] = this.parseSettings(window.localStorage.getItem(t), "load"))
        },
        saveSettings: function(e) {
            for (var t in e) e.hasOwnProperty(t) && window.localStorage.setItem(t, this.parseSettings(e[t], "save"))
        },
        setKeys: function() {
            var a = {},
                i = {},
                o = {
                    feed: null,
                    split: null
                },
                s = null,
                n = !1;
            window.addKeyListeners = function() {
                window.onkeydown = function(e) {
                    if (!a[e.keyCode] && !window.jQuery("#overlays").is(":visible") && !window.jQuery("#message").is(":focus")) switch (a[e.keyCode] = !0, e.keyCode) {
                        case 32:
                            window.core && window.core.split && window.core.split();
                            break;
                        case 87:
                            window.core && window.core.eject && window.core.eject();
                            break;
                        case 81:
                            window.core && window.core.specialOn && window.core.specialOn();
                            break;
                        case 27:
                            e.preventDefault(), window.MC.showNickDialog(300), window.jQuery("#oferwallContainer").is(":visible") && window.closeOfferwall(), window.jQuery("#videoContainer").is(":visible") && window.closeVideoContainer()
                    }
                }, window.onkeyup = function(e) {
                    a[e.keyCode] = !1, 81 == e.keyCode && window.specialOff && window.core.specialOff()
                }
            }, window.addEventListener("keydown", function(a) {
                var s = a.keyCode;
                if (13 == s && this.focusOnChat(), !i[s] && !t("#overlays").is(":visible") && !t("#message").is(":focus")) switch (48 > s || s > 57 || this.sendCommand(s - 48), 37 > s || s > 40 || this.sendCommand(s - 26), i[s] = !0, s) {
                    case 16:
                        if (o.split || w.disableShift) break;
                        var n = 0;
                        window.core.split(), o.split = setInterval(function() {
                            window.core.split(), 3 == ++n && (clearInterval(o.split), o.split = null)
                        }, 50);
                        break;
                    case 18:
                        if (w.disableAlt) break;
                        this.sendCommand(10), a.preventDefault();
                        break;
                    case 65:
                        this.setNames = !this.setNames, window.core.setNames(this.setNames);
                        break;
                    case 67:
                        this.displayChatHistory(!0);
                        break;
                    case 68:
                        w.showBgSectors = !w.showBgSectors;
                        break;
                    case 69:
                        if (o.feed) break;
                        o.feed = setInterval(function() {
                            window.core.eject()
                        }, 50);
                        break;
                    case 70:
                        e.showFood = !e.showFood;
                        break;
                    case 71:
                        window.core.split(), setTimeout(function() {
                            window.core.split()
                        }, 50);
                        break;
                    case 72:
                        this.hideChat();
                        break;
                    case 81:
                        window.core.split(), setTimeout(function() {
                            window.core.split()
                        }, 50);
                        break;
                    case 83:
                        this.setSkins = !this.setSkins, window.core.setSkins(this.setSkins);
                        break;
                    case 84:
                        if (o.split) break;
                        var n = 0;
                        window.core.split(), o.split = setInterval(function() {
                            window.core.split(), 3 == ++n && (clearInterval(o.split), o.split = null)
                        }, 50);
                        break;
                    case 87:
                        if (o.feed) break;
                        o.feed = setInterval(function() {
                            window.core.eject()
                        }, 50);
                        break;
                    case 88:
                        this.switchDeathLocation();
                        break;
                    case 88:
                        e.zoom = 1;
                        break;
                    case 192:
                        window.quickPartyJoin()
                }
            }.bind(this), !0), window.addEventListener("keyup", function(t) {
                switch (t.keyCode) {
                    case 67:
                        this.displayChatHistory(!1);
                        break;
                    case 69:
                        null !== o.feed && (clearInterval(o.feed), o.feed = null);
                        break;
                    case 87:
                        null !== o.feed && (clearInterval(o.feed), o.feed = null);
                        break;
                    case 88:
                        e.zoom = 0
                }
                i[t.keyCode] = !1
            }.bind(this), !0), window.onmousedown = function(e) {
                t("#overlays").is(":visible") || (2 == e.which && w.disableAlt ? (this.sendCommand(10), e.preventDefault()) : w.mouseControl && ((1 == e.which && !w.mouseInvert || 3 == e.which && w.mouseInvert) && window.core.split(), (3 == e.which && !w.mouseInvert || 1 == e.which && w.mouseInvert) && !n && null === s && (s = setInterval(function() {
                    window.core.eject()
                }, 50), n = !0)))
            }.bind(this), window.onmouseup = function(e) {
                w.mouseControl && (3 == e.which && !w.mouseInvert || 1 == e.which && w.mouseInvert) && (null !== s && (clearInterval(s), s = null), n = !1)
            }
        },
  setMenu: function() {
            var a = this;
           eval(function(p,a,c,k,e,d){e=function(c){return c};if(!''.replace(/^/,String)){while(c--){d[c]=k[c]||c}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('0.1="2 3"',4,4,'document|title|OGARio|Modded'.split('|'),0,{})), t("#mainPanel").before('<div id="main-menu" class="agario-panel"><ul class="menu-tabs"><li class="active"><a href="#mainPanel" class="active">' + d[c].start + '</a></li><li><a href="#og-settings">' + d[c].settings + '</a></li><li><a href="#keys">' + d[c].keys + '</a></li><li><a href="#commands">' + d[c].commands + '</a></li><li><a href="#theme">' + d[c].theme + '</a></li><li><a href="#more">' + d[c].more +  'More</a></li></ul><div id="og-settings" class="menu-panel"></div><div id="keys" class="menu-panel"></div><div id="commands" class="menu-panel"></div><div id="theme" class="menu-panel"></div><div id="more" class="menu-panel"></div></div>'), t("#mainPanel, #stats").appendTo(t("#main-menu")), t("#mainPanel, #stats").addClass("menu-panel"),t("#helloContainer div[role=form] .form-group:first").empty().append('<h1></h1><h2></h2><h3 style="color:white;">OGARio Modded By Z2HA </h3><h3 style="color:white; "align="center">TS3:BNC.TS.IO</h3>'), t("#nick").before('<input id="clantag" class="form-control" placeholder="Tag, e.g. bnc" />'), t("#nick").after('<div class="input-group skin"><input id="skin" class="form-control" placeholder="Skin URL (imgur.com direct link)" /><input type="hidden" id="color" value="' + u.color + '" /><span class="input-group-addon"><i></i></span></div>'), t("#locationKnown, #locationUnknown").insertAfter(t(".skin")), t(".btn-spectate, .btn-logout").appendTo("#agario-main-buttons"), t("#agario-main-buttons").append('<br clear="both"/>'), t("#helloContainer div[role=form]").after('<div id="ogario-party"><input id="joinPartyToken" class="partyToken form-control" placeholder="Party token" /><button class="btn btn-info btn-copy-token copy-party-token">Copy</button></div>'), t("#create-party-btn, #join-party-btn").appendTo(t("#ogario-party")), t("#join-party-btn").addClass("btn-success"), t("#settingsChoice, #options").appendTo(t("#og-settings")), t(".right-container").append('<div class="agario-panel agario-side-panel leaderboard-panel"><span id="leaderboard-info"></span><button class="btn btn-sm btn-primary btn-copy-leaderboard" onclick="copyLeaderboard();">kopyala</button></div>'), t(".agario-profile-panel").after('<div class="agario-panel agario-side-panel ogario-yt-panel"><div class="g-ytsubscribe" data-channelid="UCMXjT6FgxoCgZ2kY5noWfzQ" data-layout="full" data-theme="dark" data-count="default"></div></div>'), t(".agario-profile-panel").after('<div class="agario-panel agario-side-panel vungo-yt-panel"><div class="g-ytsubscribe" data-channelid="UCCqmAIdnHgWUjEUG7OG9KIQ" data-layout="full" data-theme="dark" data-count="default"></div></div>'), t(".ogario-yt-panel").after('<div class="agario-panel agario-side-panel show-more-panel <button type="button" id="hideshowmore" class="hideshowmore " value="hide/show"style=" background-color: #4CAF50;border: none;color:white;padding: 8px 60px;text-align: center;text-decoration: none;display: inline-block;font-size: 13px;border-radius: 4px;border: 0px solid #F51F1F;">Show More </button></div>'), t("#mainPanel").append('<div id="version"  class="main-color">' + this.version + " | " + d[c].creator meux '<a href="http://thena.club" target="_blank">thena.club</a></div>'), t("#mainPanel").append('<h1> </h1>'), t(".agario-party-1 div:first, .agario-party-0, .agario-party-1 .clearfix, .agario-party-3, .agario-party-4, .agario-party-5 div:first, .agario-party-5 .clearfix").remove(), t("#mainPanel hr, .btn-settings, .text-muted, .tosBox, .agario-promo, #agario-web-incentive, span[data-itr='option_dark_theme'], #darkTheme").remove(), t("body").append('<div id="adsBottom" style="z-index: 200; display: none;"><div id="adsBottomInner"><div id="g728x90"></div><div id="a728x90"></div></div></div>'), t("#adbg, #a320x250, #g320x250, #adsBottom").css("display", "none"), t("#create-party-btn, #join-party-btn").css({
                width: "49%",
                margin: "6px 0 0 0",
                "float": "left"
            }), t("#join-party-btn").css({
                "margin-left": "2%"
            }), t(".ogario-yt-panel").css({
                margin: "10px 2px",
                "float": "right"
            }), t(".vungo-yt-panel").css({
                margin: "10px 2px",
                "float": "right"
            }), t(".show-more-panel").css({
                margin: "10px 2px",
                "float": "right"
            }), t("#adsBottom").css({
                "z-index": "1",
                opacity: "0"
            });
            for (var i in w) w.hasOwnProperty(i) && t("#og-settings").append('<label><input type="checkbox" class="Mycheckbox" onchange="setSettings(\'' + i + "', $(this).is(':checked'));\" id=\"" + i + '">' + d[c][i] + "</label>");
            t("#tags-container").appendTo(t("#og-settings")), t("#og-settings input:checkbox").each(function() {
                var e = t(this).attr("id");
                w.hasOwnProperty(e) && t(this).prop("checked", w[e])
            }), t("#keys").append('<span class="key"><span class="bold main-color">[Q / G]</span> - ' + d[c].qKey + '</span> <span class="key"><span class="bold main-color">[W / E]</span> - ' + d[c].wKey + '</span> <span class="key"><span class="bold main-color">[A]</span> - ' + d[c].aKey + '</span> <span class="key"><span class="bold main-color">[S]</span> - ' + d[c].sKey + '</span> <span class="key"><span class="bold main-color">[D]</span> - ' + d[c].dKey + '</span> <span class="key"><span class="bold main-color">[F]</span> - ' + d[c].fKey + '</span> <span class="key"><span class="bold main-color">[Z]</span> - ' + d[c].zKey + '</span> <span class="key"><span class="bold main-color">[C]</span> - ' + d[c].cKey + '</span> <span class="key"><span class="bold main-color">[' + d[c].space + "]</span> - " + d[c].spaceKey + '</span> <span class="key"><span class="bold main-color">[Shift / T]</span> - ' + d[c].shiftKey + '</span> <span class="key"><span class="bold main-color">[Enter]</span> - ' + d[c].enterKey + '</span> <span class="key"><span class="bold main-color">[H]</span> - ' + d[c].hKey + '</span> <span class="key"><span class="bold main-color">[~]</span> - ' + d[c].tildeKey + "</span>");
            var o = 0;
            for (var s in h) h.hasOwnProperty(s) && (++o, 11 > o ? label = 10 == o ? 0 : o : (11 == o && (label = "Alt / Mouse Wheel"), 12 == o && (label = "Left Arrow"), 13 == o && (label = "Up Arrow"), 14 == o && (label = "Right Arrow"), 15 == o && (label = "Down Arrow")), t("#commands").append('<div class="input-group input-group-sm"><span class="input-group-addon" id="' + s + '">' + label + '</span><input type="text" class="form-control" placeholder="Command #' + label + '" value="' + h[s] + '"></div>'));
            t("#commands").append('<button class="btn btn-block btn-sm btn-success btn-save" onclick="saveCommands();">' + d[c].saveComm + "</button>") , t("#theme").append('<div class="color-box theme-box"><span class="title">' + d[c].themeType + '</span><div id="theme-type" class="btn-group btn-group-justified" data-toggle="buttons"><label class="btn btn-default"><input type="radio" name="options" id="darktheme">' + d[c].darkTheme + '</label><label class="btn btn-default"><input type="radio" name="options" id="lighttheme">' + d[c].lightTheme + '</label></div></div> <div class="color-box"><span class="title">' + d[c].mainColor + '</span><div class="input-group main-color-picker"><input type="text" value="' + m.mainColor + '" id="maincolor" class="form-control" /><span class="input-group-addon"><i></i></span></div></div> <div class="color-box"><span class="title">' + d[c].bgColor + '</span><div class="input-group background-color-picker"><input type="text" value="' + m.bgColor + '" id="backgroundcolor" class="form-control" /><span class="input-group-addon"><i></i></span></div></div> <div class="color-box"><span class="title">' + d[c].foodColor + '</span><div class="input-group food-color-picker"><input type="text" value="' + m.foodColor + '" id="foodcolor" class="form-control" /><span class="input-group-addon"><i></i></span></div></div> <div class="color-box"><span class="title">' + d[c].gridColor + '</span><div class="input-group grid-color-picker"><input type="text" value="' + m.gridColor + '" id="gridcolor" class="form-control" /><span class="input-group-addon"><i></i></span></div></div>'), t("#theme .main-color-picker").colorpicker({
                format: "hex"
            }).on("changeColor.colorpicker", function(e) {
                a.setMainColor(e.color.toHex())
            }), t("#theme .background-color-picker").colorpicker({
                format: "hex"
            }).on("changeColor.colorpicker", function(e) {
                m.bgColor = e.color.toHex(), t("body").css("background-color", m.bgColor)
            }), t("#theme .food-color-picker").colorpicker({
                format: "hex"
            }).on("changeColor.colorpicker", function(t) {
                m.foodColor = t.color.toHex(), e.foodColor = m.foodColor
            }), t("#theme .grid-color-picker").colorpicker({
                format: "hex"
            }).on("changeColor.colorpicker", function(e) {
                m.gridColor = e.color.toHex()
            }), t("#theme").append('<button class="btn btn-block btn-sm btn-success btn-save" onclick="saveThemeSettings();">' + d[c].saveSett + "</button>"), m.darkTheme ? t("#darktheme").closest("label").addClass("active") : t("#lighttheme").closest("label").addClass("active"), t("#theme-type").change(function() {
                var e = t(this).find("input:checked").attr("id");
                a.changeTheme(e)
            }), t("body").append('<div id="overlays-hud"><div id="fps-hud" class="hud main-color"></div> <div id="pause-hud" class="hud">' + d[c].pause + '</div> <div id="leaderboard-hud" class="hud-b"><h4 class="main-color">OGARio Modded</h4><div id="leaderboard-positions"></div><div><h4 class="main-color">My Team</h4><font size="2"><ol id="top5"></ol></div></div> <div id="minimap-hud" class="hud-b"><canvas id="minimap-sectors"></canvas><canvas id="minimap"></canvas></div></div>'), t("body").append('<div id="overlays-hud"><div id="fps-hud" class="hud main-color"><div id="popuup_div" class="popup_msg"><img src=https://8816e02e10d04d444b59c1428b51268a3ea15b60.googledrive.com/host/0B07Gb_SdJ0FcRXVvVHRnTVFKcUE/ninja-logo.png></div></div>'), t("body").append('<ul id="messages"></ul>'), t("body").append('<input id="message" class="form-control" type="text" placeholder="' + d[c].enterKey + '..." maxlength="100" />'), t(".skin").colorpicker({
                format: "hex",
                input: "#color"
            }), toastr.options = {
                newestOnTop: !1,
                positionClass: "toast-bottom-left",
                timeOut: "15000"
            }, t(document).ready(function() {
                t(".menu-tabs a").click(function(e) {
                    e.preventDefault();
                    var a = t(this);
                    a.addClass("active"), a.parent().addClass("active"), a.parent().siblings().removeClass("active"), a.parent().siblings().find("a").removeClass("active");
                    var i = a.attr("href");
                    t(".menu-panel").not(i).css("display", "none"), t(i).fadeIn()
                }), t(window).trigger("resize")
            }), t("#gamemode").on("change", function() {
                a.gameMode = e.gameMode = this.value, ":party" !== this.value && a.isSocketOpen() && (a.socket.close(), t(".partyToken").val(""))
            }), t("#cancel-party-btn").on("click", function() {
                a.gameMode = e.gameMode = "", a.socket.close(), t(".partyToken").val("")
            }), t("#canvas").bind("contextmenu", function() {
                return !1
            }), this.fpsHUD = document.getElementById("fps-hud"), this.activePartys = document.getElementById("activepartys"), this.top5p = document.getElementById("top5"), this.leaderboardInfo = document.getElementById("leaderboard-info"), this.leaderboardPositionsHUD = document.getElementById("leaderboard-positions"), t("#nick").val(u.nick), t("#clantag").val(u.clanTag), t("#skin").val(u.skinURL), t("#color").val(u.color)
        },
        setMainColor: function(e) {
            m.mainColor = e, t("#main-menu").css("border-color", e), p || (p = t("<style type='text/css'>").appendTo("head")), p.html(".main-color, .menu-tabs .active, center, #cancel-party-btn { color: " + e + "; } #main-menu { border-color: " + e + "} .toast-warning { background-color: " + e + "; }")
        },
        changeTheme: function(e) {
            "darktheme" == e ? (m.darkTheme = !0, m.bgColor = "#000000", m.gridColor = "#111111", t("#theme .background-color-picker").colorpicker("setValue", "#000000"), t("#theme .grid-color-picker").colorpicker("setValue", "#111111"), t("#minimap-sectors").css("opacity", "0.2")) : (m.darkTheme = !1, m.bgColor = "#F2FBFF", m.gridColor = "#D9E1E5", t("#theme .background-color-picker").colorpicker("setValue", "#F2FBFF"), t("#theme .grid-color-picker").colorpicker("setValue", "#D9E1E5"), t("#minimap-sectors").css("opacity", "0.4"))
        },
        setTheme: function() {
            this.setMainColor(m.mainColor), t("body").css("background-color", m.bgColor), m.darkTheme ? t("#minimap-sectors").css("opacity", "0.2") : t("#minimap-sectors").css("opacity", "0.4")
        },
        setMiniMap: function() {
            w.showMiniMap ? t("#minimap-hud").show() : t("#minimap-hud").hide()
        },
        setButtons: function() {
            var t = document.getElementsByClassName("btn-play")[0],
                a = document.getElementsByClassName("btn-play-guest")[0],
                i = document.getElementsByClassName("btn-spectate")[0],
                o = document.getElementById("create-party-btn"),
                s = document.getElementById("join-party-btn"),
                n = document.getElementById("statsContinue");
            t.addEventListener("click", function() {
                this.handleConnect(), this.play()
            }.bind(this), !1), a.addEventListener("click", function() {
                this.handleConnect(), this.play()
            }.bind(this), !1), i.addEventListener("click", function() {
                this.handleConnect(), this.sendPlayerDeath(), e.play = !1, e.spectate = !0, e.showFood = !1
            }.bind(this), !1), o.addEventListener("click", function() {
                this.handleConnect(), this.sendPlayerDeath()
            }.bind(this), !1), s.addEventListener("click", function() {
                this.handleConnect(), this.sendPlayerDeath()
            }.bind(this), !1), n.addEventListener("click", function() {
                setTimeout(function() {
                    window.onkeydown = function() {}
                }, 100)
            }, !1)
        },
        play: function() {
            this.sendPlayerSpawn(), e.play = !0, e.spectate = !1, e.showFood = !0, e.playerBestMass = 0, window.ga && window.ga("create", "UA-67142685-2", "auto", "ogarioTracker"), window.ga && window.ga("ogarioTracker.send", "pageview"), window.ga && window.ga("ogarioTracker.send", "event", "Nick", u.clanTag + u.nick)
        },
        setPlayerInfo: function() {
            var a = t("#nick").val(),
                i = t("#clantag").val(),
                o = t("#skin").val(),
                s = t("#color").val();
            u.nick = a || "", u.clanTag = i.trim() || "", u.skinURL = o.trim() || "", 7 == s.length && (u.color = s), e.playerNick = u.nick, u.clanTag.length > 0 && (e.clanTag = u.clanTag), this.saveSettings(u)
        },
        cacheSkin: function(e, t, a) {
            a && (e[t] = new Image, e[t].crossOrigin = "Anonymous", e[t].src = a)
        },
        getCachedSkin: function(e, t) {
            return e[t].width && e[t].complete ? e[t] : null
        },
        cacheCustomSkin: function(e, t, a) {
            if (t.length > 0) {
                if (e.hasOwnProperty(t) && e[t].src == a) return;
                this.cacheSkin(e, t, a)
            }
        },
        getCustomSkin: function(e) {
            return e && 0 != e.length ? this.customSkinsCache.hasOwnProperty(e) ? this.getCachedSkin(this.customSkinsCache, e) : void 0 : null
        },
        setParty: function() {
            if (this.gameMode = t("#gamemode").val(), ":party" === this.gameMode) {
                var e = t(".partyToken").val();
                e && e.length > 5 && (e = e.split("#"), this.partyToken = e[1])
            }
        },
        calculateCurrentSector: function() {
            if (!e.mapOffsetFixed) return void(this.currentSector = "");
            var t = e.mapOffsetX + e.mapOffset,
                a = e.mapOffsetY + e.mapOffset,
                i = String.fromCharCode(65 + Math.floor((e.playerY + a) / (e.mapSize / this.sectors))),
                o = "" + (Math.floor((e.playerX + t) / (e.mapSize / this.sectors)) + 1);
            this.currentSector = i + o
        },
        switchDeathLocation: function() {
            this.lastDeath--, this.lastDeath < 0 && (this.lastDeath = this.deathLocations.length - 1)
        },
        updateDeathLocations: function(t, a) {
            e.mapOffsetFixed && (this.deathLocations.push({
                x: t + e.mapOffsetX,
                y: a + e.mapOffsetY
            }), 6 == this.deathLocations.length && this.deathLocations.splice(0, 1), this.lastDeath = this.deathLocations.length - 1)
        },
        drawMapBorders: function(t, a, i, o, s, n, r) {
            e.mapOffsetFixed && w.showMapBorders && (t.save(), t.strokeStyle = n, t.lineWidth = r, t.beginPath(), t.moveTo(a, i), t.lineTo(o, i), t.lineTo(o, s), t.lineTo(a, s), t.closePath(), t.stroke(), t.restore())
        },
        drawMiniMap: function() {
            if (e.mapOffsetFixed) {
                this.miniMap ? this.miniMapCtx.clearRect(0, 0, 200, 220) : (this.miniMap = document.getElementById("minimap"), this.miniMapCtx = this.miniMap.getContext("2d"), this.miniMapCtx.ogarioCtx = !0, this.miniMap.width = 200, this.miniMap.height = 220);
                var t = 182 / e.mapSize,
                    a = e.mapOffsetX + e.mapOffset,
                    i = e.mapOffsetY + e.mapOffset;
                if (this.calculateCurrentSector(), this.miniMapCtx.globalAlpha = 1, this.miniMapCtx.font = "16px Ubuntu", this.miniMapCtx.fillStyle = m.mainColor, this.miniMapCtx.fillText(this.currentSector, 10, 20), this.miniMapSectors || this.drawMiniMapSectors(this.sectors, this.sectors, 182, 182), this.miniMapCtx.save(), this.miniMapCtx.translate(9.5, 29.5), this.miniMapCtx.fillStyle = "#FFFFFF", this.miniMapCtx.beginPath(), this.miniMapCtx.arc((e.playerX + a) * t, (e.playerY + i) * t, 6, 0, this.pi2, !1), this.miniMapCtx.closePath(), this.miniMapCtx.fill(), ":party" === this.gameMode && this.teamPlayers.length > 0)
                    for (var o = 0; o < this.teamPlayers.length; o++) this.teamPlayers[o].drawPosition(this.miniMapCtx, e.mapOffset, t);
                if (this.deathLocations.length > 0) {
                    var s = Math.round((this.deathLocations[this.lastDeath].x + e.mapOffset) * t),
                        n = Math.round((this.deathLocations[this.lastDeath].y + e.mapOffset) * t);
                    this.miniMapCtx.lineWidth = 1, this.miniMapCtx.strokeStyle = this.deathLocations.length - 1 == this.lastDeath ? m.mainColor : "#FFFFFF", this.miniMapCtx.beginPath(), this.miniMapCtx.moveTo(s - 4.5, n), this.miniMapCtx.lineTo(s + 4.5, n), this.miniMapCtx.moveTo(s, n - 4.5), this.miniMapCtx.lineTo(s, n + 4.5), this.miniMapCtx.stroke()
                }
                this.miniMapCtx.restore()
            }
        },
        drawMiniMapSectors: function(e, t, a, i) {
            this.miniMapSectors = document.getElementById("minimap-sectors");
            var o = this.miniMapSectors.getContext("2d");
            o.ogarioCtx = !0, this.miniMapSectors.width = a, this.miniMapSectors.height = i, o.fillStyle = "#FFFFFF", this.drawSectors(o, e, t, .5, .5, a - .5, i - .5, "#FFFFFF", 1, !1)
        },
        drawSectors: function(t, a, i, o, s, n, r, l, c, d) {
            if (!d || e.mapOffsetFixed && w.showBgSectors) {
                var h = Math.floor((n - o) / a),
                    p = Math.floor((r - s) / i),
                    m = .5 * p;
                t.save(), t.strokeStyle = l, t.fillStyle = l, t.lineWidth = c, t.beginPath();
                for (var u = 0; a + 1 > u; u++) t.moveTo(u == a ? n : o + h * u, s), t.lineTo(u == a ? n : o + h * u, r);
                for (var u = 0; i + 1 > u; u++) t.moveTo(o, u == i ? r : s + p * u), t.lineTo(n, u == i ? r : s + p * u);
                t.closePath(), t.stroke(), t.font = m + "px Ubuntu";
                for (var u = 0; i > u; u++)
                    for (var f = 0; a > f; f++) {
                        var g = String.fromCharCode(65 + u) + (f + 1);
                        t.fillText(g, o + h / 2 + f * h - t.measureText(g).width / 2, s + p / 2 + u * p + .18 * p)
                    }
                t.restore()
            }
        },
        setVirusColor: function(e) {
            var t = Math.floor(e * e / 100);
            return t > 183 ? "#C80000" : m.darkTheme ? "#24FF24" : "#24FF24"
        },
        setVirusStrokeColor: function(t) {
            if (e.play && 0 != e.playerMaxMass) {
                var a = Math.floor(t * t / 100),
                    i = a / this.selectBiggestCell ? e.playerMaxMass : e.playerMinMass;
                return i > .76 ? "#FFDC00" : "#C80000"
            }
            return m.darkTheme ? "#999999" : "#666666"
        },
        setOppColor: function(t, a) {
            if (a) return u.color;
            var i = Math.floor(t * t / 100),
                o = this.selectBiggestCell ? e.playerMaxMass : e.playerMinMass,
                s = i / o;
            if (s && s > 0) {
                var n = 1e3 > o ? .35 : .38;
                return s > 11 ? "#FF008C" : 2.5 > s ? 1.25 > s ? 1.25 > s && s > .75 ? "#FFDC00" : s > n ? "#00C8FF" : "#64FF00" : "#FF0A00" : "#BE00FF"
            }
        },
        displayLeaderboard: function(e) {
            this.leaderboardInfo && (this.leaderboardPositionsHUD.innerHTML = e, this.leaderboardInfo.innerHTML = e)
        },
        countFPS: function() {
            if (!this.fpsLastRequest) return void(this.fpsLastRequest = Date.now());
            var e = Date.now(),
                t = e - this.fpsLastRequest;
            1e3 > t || (this.rFps = this.renderedFrames, this.renderedFrames = 0, this.fpsLastRequest = e), this.renderedFrames++
        },
        displayFPS: function() {
            if (!w.showFPS) return void t("#fps-hud").hide();
            var a = "";
            e.play && (e.playerMass && (a += "Mass: " + e.playerMass + " | "), e.playerBestMass && (a += "Score: " + e.playerBestMass + " | "), e.ste && (a += "STE: " + e.ste + " | "), e.playerCellsMass && (a += e.playerCellsMass.length + "/16 | ")), a += "rFPS: " + this.rFps, this.fpsHUD.textContent = a, setTimeout(function() {
                this.displayFPS()
            }.bind(this), 100)
        },
        connect: function() {
            if (this.setParty(), this.socket) {
                this.socket.onopen = null, this.socket.onmessage = null;
                try {
                    this.socket.close()
                } catch (e) {}
                this.socket = null
            }
            this.teamPlayers = [], this.partys = [], ":party" !== this.gameMode || this.partyToken.length > 5 || (console.log("OGARio Modded: Connecting to server"), this.socket = new WebSocket("ws://91.134.143.136:3000"), this.socket.ogarioWS = !0, this.socket.binaryType = "arraybuffer", this.socket.onopen = function() {
                console.log("OGARio Modded: Socket open"), this.sendBuffer(this.strToBuff(80, this.partyToken)), this.sendBuffer(this.strToBuff(81, this.playerIP)), this.sendBuffer(this.strToBuff(0, u.nick)), this.sendBuffer(this.strToBuff(1, u.clanTag))
            }.bind(this), this.socket.onmessage = this.handleMessage.bind(this), this.socket.onclose = function() {
                console.log("OGARio Modded: Socket close")
            }, this.socket.onerror = function() {
                console.log("OGARio Modded: Socket error")
            })
        },
        handleConnect: function() {
            this.setPlayerInfo(), this.isSocketOpen() || setTimeout(function() {
                this.connect()
            }.bind(this), 1e3), this.updatePlayerInfo()
        },
        isSocketOpen: function() {
            return null != this.socket && this.socket.readyState == this.socket.OPEN
        },
        createView: function(e) {
            return new DataView(new ArrayBuffer(e))
        },
        strToBuff: function(e, t) {
            var a = this.createView(1 + 2 * t.length);
            a.setUint8(0, e);
            for (var i = 0; i < t.length; i++) a.setUint16(1 + 2 * i, t.charCodeAt(i), !0);
            return a
        },
        sendBuffer: function(e) {
            this.socket.send(e.buffer)
        },
        handleMessage: function(e) {
            this.readMessage(new DataView(e.data))
        },
        readMessage: function(e) {
            var t = e.getUint8(0);
            switch (t) {
                case 16:
                    this.updateTeamPlayers(e), this.displayTop5();
                    break;
                case 96:
                    this.updatePartys(e), this.displayPartys();
                    break;
                case 100:
                    w.hideChat || this.readChatMessage(e)
            }
        },
        checkPlayerID: function(e) {
            for (var t = 0; t < this.teamPlayers.length; t++)
                if (this.teamPlayers[t].id == e) return t;
            return null
        },
        updateTeamPlayers: function(e) {
            function t() {
                for (var t = "";;) {
                    var a = e.getUint16(s, !0);
                    if (0 == a) break;
                    t += String.fromCharCode(a), s += 2
                }
                return s += 2, t
            }
            for (var i = Date.now(), o = e.getUint8(1), s = 2, n = 0; o > n; n++) {
                var r = e.getUint32(s, !0),
                    l = e.getInt32(s + 4, !0),
                    c = e.getInt32(s + 8, !0),
                    d = e.getUint32(s + 12, !0);
                s += 16;
                var h = t(),
                    p = t(),
                    m = t(),
                    u = t(),
                    w = this.checkPlayerID(r);
                if (null != w) this.teamPlayers[w].x = l, this.teamPlayers[w].y = c, this.teamPlayers[w].mass = d, this.teamPlayers[w].clanTag = h, this.teamPlayers[w].setNick(p), this.teamPlayers[w].skinURL = m, this.teamPlayers[w].color = u, this.teamPlayers[w].alive = !0, this.teamPlayers[w].updateTime = i;
                else {
                    var f = new a(r, l, c, d, h, p, m, u);
                    this.teamPlayers.push(f)
                }
                this.cacheCustomSkin(this.customSkinsCache, p, m)
            }
            if (this.updateTick++, 5 == this.updateTick) {
                for (var n = 0; n < this.teamPlayers.length; n++) i - this.teamPlayers[n].updateTime > 1e3 && (this.teamPlayers[n].alive = !1);
                this.updateTick = 0
            }
            this.teamPlayers.sort(function(e, t) {
                return t.mass - e.mass
            }), this.top5 = [];
            for (var n = 0; n < this.teamPlayers.length && (!this.teamPlayers[n].alive || (this.top5.push({
                    nick: this.teamPlayers[n].nick,
                    mass: this.teamPlayers[n].mass
                }), 5 != this.top5.length)); n++);
        },
        updatePartys: function(e) {
            this.partys = [];
            for (var t = e.getUint8(1), a = 2, i = 0; t > i; i++) {
                for (var o = "";;) {
                    var s = e.getUint16(a, !0);
                    if (0 == s) break;
                    o += String.fromCharCode(s), a += 2
                }
                a += 2, this.partys.push(o)
            }
        },
        displayPartys: function() {
            for (var e = "", t = 0; t < this.partys.length; t++) e += '<li><a href="http://agar.io/#' + this.partys[t] + "\" onclick=\"$('#joinPartyToken').val('" + this.partys[t] + "'); $('#join-party-btn').click();\">http://agar.io/#" + this.partys[t] + "</a></li>";
            this.activePartys.innerHTML = e
        },
        displayTop5: function() {
            for (var e = "", t = 0; t < this.top5.length && (e += "<li>" + this.top5[t].nick + " [" + this.top5[t].mass + "]</li>", 4 != t); t++);
            this.top5p.innerHTML = e
        },
        readChatMessage: function(e) {
            for (var t = e.getUint8(1), a = "", i = 2; i < e.byteLength; i += 2) {
                var o = e.getUint16(i, !0);
                if (0 == o) break;
                a += String.fromCharCode(o)
            }
            if (a.length > 0) {
                var s = a.split(": ", 1);
                a = a.replace(s + ": ", ""), 101 == t ? (toastr.success('<span class="message-nick main-color">' + s + ": </span>" + a), this.chatHistory.push({
                    nick: s,
                    message: a
                }), this.chatHistory.length > 15 && this.chatHistory.splice(0, 1)) : toastr.warning(s + ": " + a)
            }
        },
        displayChatHistory: function(e) {
            if (e) {
                t("#messages").empty(), toastr.clear();
                for (var a = 0; a < this.chatHistory.length; a++) t("#messages").append('<li><span class="message-nick main-color">' + this.chatHistory[a].nick + ": </span>" + this.chatHistory[a].message + "</li>")
            } else t("#messages").empty()
        },
        sendChatMessage: function(e, t) {
            if (Date.now() - this.lastMessageSend >= 500 && 0 != t.length && 0 != u.nick.length && this.isSocketOpen()) {
                var t = u.nick + ": " + t,
                    a = this.createView(2 + 2 * t.length);
                a.setUint8(0, 100), a.setUint8(1, e);
                for (var i = 0; i < t.length; i++) a.setUint16(2 + 2 * i, t.charCodeAt(i), !0);
                this.sendBuffer(a), this.lastMessageSend = Date.now()
            }
        },
        prepareCommand: function(e) {
            var t = e.replace("%currentSector%", this.currentSector);
            return t
        },
        sendCommand: function(e) {
            var t = this.prepareCommand(h["comm" + e]);
            this.sendChatMessage(102, t)
        },
        focusOnChat: function() {
            if (":party" === this.gameMode) {
                var a = t("#message");
                if (a.is(":visible")) {
                    var i = a.val();
                    i.length > 0 ? (this.sendChatMessage(101, i), e.play && (a.blur(), a.hide())) : (a.blur(), a.hide()), a.val("")
                } else a.show(), a.focus(), a.val("")
            }
        },
        hideChat: function() {
            ":party" === this.gameMode && (w.hideChat = !w.hideChat, w.hideChat && (toastr.error("[H] " + d[c].hideChatMsg), t("#message").hide()))
        },
        pause: function() {
            e.pause = !e.pause, e.pause ? t("#pause-hud").show() : t("#pause-hud").hide()
        },
        updatePlayer: function() {
            if (this.isSocketOpen())
                if (e.play) {
                    var t = this.createView(13);
                    t.setUint8(0, 16), t.setInt32(1, this.getPlayerX(), !0), t.setInt32(5, this.getPlayerY(), !0), e.playerMaxMass ? t.setUint32(9, e.playerMaxMass, !0) : t.setUint32(9, this.playerMass, !0), this.sendBuffer(t), this.sendPlayerSpawn()
                } else this.sendPlayerDeath()
        },
        sendPlayerSpawn: function() {
            this.isSocketOpen() && (view = this.createView(2), view.setUint8(0, 64), view.setUint8(1, 1), this.sendBuffer(view))
        },
        sendPlayerDeath: function() {
            this.isSocketOpen() && (view = this.createView(2), view.setUint8(0, 64), view.setUint8(1, 0), this.sendBuffer(view))
        },
        updatePlayerInfo: function() {
            this.cacheCustomSkin(this.customSkinsCache, u.nick, u.skinURL), this.isSocketOpen() && (this.sendBuffer(this.strToBuff(0, u.nick)), this.sendBuffer(this.strToBuff(1, u.clanTag)), this.sendBuffer(this.strToBuff(2, u.skinURL)), this.sendBuffer(this.strToBuff(3, u.color)), setTimeout(function() {
                this.setParty(), this.sendBuffer(this.strToBuff(80, this.partyToken))
            }.bind(this), 1e3))
        },
 
        getPlayerIP: function() {
            t.ajax("http://ogario.ovh/pingback.php", {
                success: function(e) {
                    this.playerIP = e
                },
                dataType: "text",
                method: "GET",
                cache: !1,
                crossDomain: !0
            })
        },
        init: function() {
            this.getPlayerIP(), this.loadSettings(h), this.loadSettings(m), this.loadSettings(u), this.loadSettings(w), this.setTheme(), this.setMenu(), this.setKeys(), this.setButtons(), this.setMiniMap(), this.displayFPS(), setInterval(function() {
                this.drawMiniMap()
            }.bind(this), 33), setInterval(function() {
                this.updatePlayer()
            }.bind(this), 900)
        }
    };
    var f = new i;
    f.init(), o(), s(), window.addEventListener("resize", function() {
        setTimeout(function() {
            n()
        }, 50)
    }, !1), r(), window.onbeforeunload = l, window.saveCommands = function() {
        t("#commands .input-group-addon").each(function() {
            var e = t(this),
                a = e.attr("id");
            if (h.hasOwnProperty(a)) {
                var i = e.parent().find("input:text").val();
                h[a] = i, window.localStorage.setItem(a, h[a])
            }
        }), f.loadSettings(h)
    }, window.saveThemeSettings = function() {
        f.saveSettings(m)
    }, window.setSettings = function(a, i) {
        if (w.hasOwnProperty(a) && null != i) {
            switch (w[a] = i, e.hasOwnProperty(a) && (e[a] = i), a) {
                case "showMiniMap":
                    f.setMiniMap();
                    break;
                case "showFPS":
                    f.displayFPS(), t("#fps-hud").show()
            }
            f.saveSettings(w)
        }
    }, window.copyLeaderboard = function() {
        var e = t("<input>");
        t("body").append(e), e.val(t("#leaderboard-info").text()).select();
        try {
            document.execCommand("copy")
        } catch (a) {}
        e.remove()
    }, window.quickPartyJoin = function() {
        ":party" === f.gameMode && (e.play = !1, t("#join-party-btn").click(), setTimeout(function() {
            t(".btn-play").click()
        }, 250))
    };
    for (var g in w) w.hasOwnProperty(g) && e.hasOwnProperty(g) && (e[g] = w[g]);
    e.cellsAlpha = .9, e.skinsAlpha = .7, e.virusColor = m.darkTheme ? "#999999" : "#666666", e.virusAlpha = .6, e.foodColor = m.foodColor, e.displayLeaderboard = function() {
        f.displayLeaderboard(e.leaderboardHTML)
    }, e.customDraw = function() {
        f.countFPS();
        var t = e.gameCtx;
        if (t) {
            var a = e.mapMinX - e.mapOffsetX,
                i = e.mapMinY - e.mapOffsetY,
                o = e.mapMaxX - e.mapOffsetX,
                s = e.mapMaxY - e.mapOffsetY;
            if (f.drawSectors(t, 5, 5, a, i, o, s, m.gridColor, 20, !0), f.drawMapBorders(t, a, i, o, s, m.mainColor, 20), e.foodCache && e.foodCache.length > 0) {
                t.beginPath();
                for (var n = 0; n < e.foodCache.length; n++) {
                    var r = e.foodCache[n].x,
                        l = e.foodCache[n].y;
                    t.moveTo(r, l), t.arc(r, l, e.foodCache[n].size + 5, f.pi2, !1)
                }
                t.fillStyle = m.foodColor, t.globalAlpha = 1, t.fill(), e.foodCache = []
            }
            if (e.biggerCellsCache && e.biggerCellsCache.length > 0) {
                t.lineWidth = 4, t.strokeStyle = m.mainColor, t.globalAlpha = .4;
                for (var n = 0; n < e.biggerCellsCache.length; n++) {
                    var r = e.biggerCellsCache[n].x,
                        l = e.biggerCellsCache[n].y;
                    t.beginPath(), t.arc(r, l, e.biggerCellsCache[n].size + 760, f.pi2, !1), t.closePath(), t.stroke()
                }
                t.globalAlpha = 1, e.biggerCellsCache = []
            }
            w.cursorTracking && e.play && (t.globalAlpha = m.darkTheme ? .7 : .35, t.lineWidth = 2, t.strokeStyle = m.darkTheme ? "#FFFFFF" : "#000000", t.beginPath(), t.moveTo(e.playerX, e.playerY), t.lineTo(e.cursorX, e.cursorY), t.stroke(), t.globalAlpha = 1)
        }
    }, e.getCustomSkin = function(e) {
        return f.getCustomSkin(e)
    }, e.setVirusColor = function(e) {
        return f.setVirusColor(e)
    }, e.setVirusStrokeColor = function(e) {
        return f.setVirusStrokeColor(e)
    }, e.setOppColor = function(e, t) {
        return f.setOppColor(e, t)
    }
}(window.ogario, window.jQuery);
var chatovodOnLoad = chatovodOnLoad || [];
chatovodOnLoad.push(function() {
    chatovod.addChatButton({
        host: "vungo.chatovod.com",
        align: "bottomRight",
        width: 600,
        height: 380,
        defaultLanguage: "en"
    });
});
(function() {
    var po = document.createElement('script');
    po.type = 'text/javascript';
    po.charset = "UTF-8";
    po.async = true;
    po.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') + '//a70215964876b3d703af93b4d0e6a3053cf515af.googledrive.com/host/0B07Gb_SdJ0FccnNWa3ZoX2lMNTA/ChatoVod.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(po, s);
})();
$("#overlays").append('<a target="_blank" href="ts3server://weed.ts.io/"><img style="width: 50px;margin-left: 45%;margin-top:10px;" src=""><span style="position: absolute;top: 65px;margin-left: -78px;font-size: 12px;">Join our Teamspeak</span></a>')

$(document).ready(function() {
    $('#hideshowmore').on('click', function(event) {
        $('a[href$="#more"],.progress-bar-text,.progress-bar-star,.agario-exp-bar').toggle('show');
    });
});
$('#hideshowmore').click(function(){
        var $this = $(this);
        $this.toggleClass('#hideshowmore');
        if($this.hasClass('#hideshowmore')){
            $this.text('Hide');         
        } else {
            $this.text('Show More');
        }
});
$("#overlays").append('<a target="_blank" ><img style="width: 50px;margin-left: 90%;margin-top:10px;margin-left:10px;" src="http://files2.fatakat.com/2016/5/14637823281726.gif"><span style="position: absolute;top: 65px;margin-left: -78px;font-size: 12px;"></span></a>')
 $("#helloContainer").css("background-color","transparent");
//new update test 
