var myCells;
var myCellsHistoryMass;
var myBiggerCell = {}; //your biggest cell
var mySmallerCell = {}; //your smallest cell
    myBiggerCell.mass = 0;
    mySmallerCell.mass = 25000;
//Object.keys(window.legendmod.cells).forEach(node => { 

//if (window.legendmod.cells[node].isPlayerCell){
//	myCell=window.legendmod.cells[node];
//}
//});

var Intervalstatistics = setInterval(CellTimer, 1000);	
function CellTimer() {
	myCells = [];
	myCellsHistoryMass=[];
    for (var i = 0; i < window.legendmod.playerCells.length; i++) {
		myCells.push(window.legendmod.playerCells[i]);
        if (window.legendmod.playerCells[i].mass > myBiggerCell.mass) {
            myBiggerCell = window.legendmod.playerCells[i];
        }
        if (window.legendmod.playerCells[i].mass < mySmallerCell.mass) {
            mySmallerCell = window.legendmod.playerCells[i];
        }
    }
	for (var i = 0; i < myCells.length; i++) {	
		for (var j = 0; j < myCells[i].historyMass.length; j++) {
			if (myCellsHistoryMass[j]==undefined){
				myCellsHistoryMass[j]=0;
			}
			myCellsHistoryMass[j] += myCells[i].historyMass[j];
	}
	}

	
try{
	var myCellsHistoryMassTop=0;
	for (var i = 0; i < window.legendmod2.fps-5; i++) {	//window.legendmod2.fps-5 is because for making bug in case of increased fps in case of an eject
		if (myCellsHistoryMass[i]>myCellsHistoryMassTop){
			myCellsHistoryMassTop=myCellsHistoryMass[i];
		}
	}
if 	(myCellsHistoryMassTop!=0 && myCellsHistoryMassTop!=myCellsHistoryMass[0]){
		
	if (myCellsHistoryMass[0] < myCellsHistoryMassTop){ 
		if (window.lastejected){
			window.lastejected=false;
		}
		else if (1-myCellsHistoryMass[0]/myCellsHistoryMassTop<1000){
	console.log((1-myCellsHistoryMass[0]/myCellsHistoryMassTop).toFixed(5)*100 +"%");
		}
	}
}
}
catch(e) { 
}
}
function StopIntervalstatistics() {
  clearInterval(Intervalstatistics);
}


