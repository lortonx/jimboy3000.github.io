//window.ogario.customDraw=window.ogario.save_customDraw2;
//4. load  doublesplit Range Settings
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
        legendario.customDraw = my.customDraw; //
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
		//var seconds;
        function draw_sub(cells, size_plus, color){
			
            gameCtx.strokeStyle = color;
            cells.forEach(function(cell){
				//seconds = new Date().getTime().toFixed(0).toString().split('').pop();
                gameCtx.beginPath();
                gameCtx.arc(cell.x, cell.y, cell.size + size_plus, 0x0, my.pi2, !0x1);
				//my.log(cell.x);
				//var img = document.getElementById("legendAdImg");
				//gameCtx.drawImage(img);
				
			  //gameCtx.arc(cell.x, cell.y, cell.size + size_plus, 0.2*seconds*my.pi2, 0.1*seconds*my.pi2, !0x1);
				
				//gameCtx.fillRect(cell.x, cell.y, cell.size + size_plus, 0x0, my.pi2, !0x1);
                gameCtx.fill();
				gameCtx.closePath();
				
				//
				
                gameCtx.stroke();
            });
        }
    };
    my.cell_extract = function(){
        //var cellMass = Math.floor(cellSize * cellSize / 100);
        var myMass = legendario.selectBiggestCell ? legendario.playerMaxMass : legendario.playerMinMass;
		//my.log(myMass);
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
		//my.log(stat.cellPlayer);
    };
})();
