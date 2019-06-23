var Intervalstatistics = setInterval(CellTimer, 1000);	
function CellTimer() {
	myCells = [];
	for (var i = 0; i < window.legendmod.cells.length; i++) {
//legendmod.cells[i].historyMass->window.cellsId[legendmod.cells[i].id].historyMass
		
			if (window.cellsId[legendmod.cells[i].id].historyMass[window.legendmod2.fps]>window.cellsId[legendmod.cells[i].id].historyMass[0]*1.4){
				var j=i;
				var x=0;
				//setTimeout(function() {					
					MergeCells(j,x);
				//}, 1000);
			}
		}
	}	

function MergeCells(j,x){
x++;
window.cellsId[legendmod.cells[j].id].mergeTime=30 + (2.33/100)*window.cellsId[legendmod.cells[j].id].mass-x;
	console.log(j,x, Math.round(window.cellsId[legendmod.cells[j].id].mergeTime));
	if (window.cellsId[legendmod.cells[j].id].mergeTime>0){
	setTimeout(function() {	
		MergeCells(j,x);
		}, 1000);
	}
	return j,x;
}


