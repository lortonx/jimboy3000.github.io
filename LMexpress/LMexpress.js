/*************
 * LEGEND mod Express v0.001 by Jimboy3100   email:jimboy3100@hotmail.com
 *************/
 
var semimodVersion = "00"; // the version 1.1-> 1.11
loadersetings();
loadericon();
PremiumUsers();
document.title = "Legend mod";
//Authenticate Mod Script
var accesstomod;
setTimeout(function() {
getaccesstoken();
getaccesstoken2();
}, 3000);
$("#gamemode").prop('disabled', false);
$("#region").prop('disabled', false);   		
var oldgamemode=$("#gamemode");

//Private Servers
 $("#region").on('change', function() {
	setTimeout(function() {
	$("#gamemode").prop('disabled', false);
	$("#region").prop('disabled', false);                 
	}, 200);
	if (this.value == ":PrS") {
    console.log("Going to PrS");
        $("#gamemode").html('<select id="gamemode" class="form-control" required="" data-original-title="" title="">'+
		'<option value=":PrS0" data-itr="PrS0">-SELECT-</option>'+		
		'<option value=":PrS1" data-itr="PrS1">1vs1 Arena(1)</option>'+
		'<option value=":PrS2" data-itr="PrS2">1vs1 Arena(2)</option>'+
		'<option value=":PrS3" data-itr="PrS3">Party Server(1)</option>'+
//		'<option value=":PrS4" data-itr="PrS4">Party Server(2)</option>'+
//		'<option value=":PrS6" data-itr="PrS6">Instant Merge(1)</option>'+
//		'<option value=":PrS5" data-itr="PrS5">Instant Merge(2)</option>'+
		'<option value=":PrS7" data-itr="PrS7">Experimental</option>');
//		'<option value=":PrS8" data-itr="PrS8">Virus Mode</option>');
//		'<option value=":PrS9" data-itr="PrS9">Small Bots</option>');			
    }
	else if (this.value != ":PrS") {
    console.log("Leaving PrS");	
        $("#gamemode").html('<select id="gamemode" class="form-control" required="" data-original-title="" title="">'+
		'<option value="" data-itr="page_gamemode_ffa">FFA</option>'+
		'<option value=":teams" data-itr="page_gamemode_teams">Teams</option>'+
		'<option value=":experimental" data-itr="page_gamemode_experimental">Experimental</option>'+
		'<option value=":party" data-itr="page_party">Party Mode</option>');	
    }	
	adres();
});




function loadersetings() {
    setTimeout(function() {
        if (timesopened >= 3) {
            if (checkonlyonce != "true") {
                //if($("#SHOSHOBtn").attr('aria-pressed') == "false"){
                if (SHOSHOBtn != "true") {
                    toastr["error"](Premadeletter18 + '</br> <button id=enableshortcuts1 class="btn btn-sm btn-primary btn-play btn-enable-shortcuts" style="margin-top: 10px;border-color: darkblue;">' + Premadeletter19 + '</button><br><button class="btn btn-sm btn-warning btn-spectate btn-play btn-enable-shortcuts" style="width: 100%;margin-top: 10px;">' + Premadeletter20 + '</button>', "", {
                        timeOut: 15000,
                        extendedTimeOut: 15000
                    }).css("width", "300px");
                    $("#enableshortcuts1").click(function() {
                        enableshortcuts();
                    });
                }
            }
        }
        if (timesopened == 10 || timesopened == 100 || timesopened == 1000) {
            //if($("#SHOSHOBtn").attr('aria-pressed') == "false"){
            if (SHOSHOBtn != "true") {
                toastr["error"](Premadeletter18 + '</br> <button id=enableshortcuts1 class="btn btn-sm btn-primary btn-play btn-enable-shortcuts" style="margin-top: 10px;border-color: darkblue;">' + Premadeletter19 + '</button><br><button class="btn btn-sm btn-warning btn-spectate btn-play btn-enable-shortcuts" style="width: 100%;margin-top: 10px;">' + Premadeletter20 + '</button>', "", {
                    timeOut: 15000,
                    extendedTimeOut: 15000
                }).css("width", "300px");
                $("#enableshortcuts").click(function() {
                    enableshortcuts();
                });
            }
        }
        checkonlyonce = "true";
        localStorage.setItem("checkonlyonce", checkonlyonce);
    }, 3500);
}
function loadericon() {
	//continue loadericon
    setTimeout(function() {
        setTimeout(function() {
        $("#imagebig").fadeOut(2500);
        
        MC.setQuality($('#quality').val());
		setTimeout(function() {$("#imagebig").remove();}, 2600); //remove it
		}, 3000);   
		}, 1000);
}
function PremiumUsers(){
        var ProLicenceUsersTableJS = document.createElement("script");
        ProLicenceUsersTableJS.type = "text/javascript";
        ProLicenceUsersTableJS.src = "https://jimboy3100.github.io/AjaxData/ProLicenceUsersTableJS.js";
        $("body").append(ProLicenceUsersTableJS);
}
function getaccesstoken() {
    $.ajax({
        type: "GET",
        url: "https://jimboy3100.github.io/AjaxData/accesstoken.html",
        datatype: "json",
        success: function(info) {
		  accesstomod =  info[17];
			return accesstomod;
		}
	});
}

function getaccesstoken2() {
    setTimeout(function() {
        if(accesstomod != "a" && accesstomod != null){
			toastr["error"]('<b>[SERVER]:</b> You are using a wrong version of Legend Mod, <br>visit: <a target="_blank" href="https://jimboy3100.github.io/legendmod.user.js"><font color="yellow"><b><u>www.legendmod.ml</u></b></font></a><br>Legend mod will terminate now').css("width", "300px");
				setTimeout(function() {
					document.documentElement.innerHTML = "";
					}, 21000);
				}
   }, 13000);
}
function enableshortcuts() {
    if ($("#IPBtn").attr('aria-pressed') == "false") {
        $("#IPBtn").click();
    }
    if ($("#SHOSHOBtn").attr('aria-pressed') == "false") {
        $("#SHOSHOBtn").click();
    }
    //	if($("#TIMEBtn").attr('aria-pressed') == "false"){
    //	$("#TIMEBtn").click(); }
    //	if($("#MAINBBtn").attr('aria-pressed') == "false"){
    //	$("#MAINBBtn").click(); }
    //	if($("#MAINBTBtn").attr('aria-pressed') == "false"){
    //	$("#MAINBTBtn").click(); }
	    	if($("#MAINBTBtn").attr('aria-pressed') == "false"){
				$("#MAINBTBtn").click(); }
//			if($("#AnimatedSkinBtn").attr('aria-pressed') == "false"){
//				$("#AnimatedSkinBtn").click(); }
    if ($("#XPBtn").attr('aria-pressed') == "false") {
        $("#XPBtn").click();
    }
    //	if($("#MANUIBtn").attr('aria-pressed') == "false"){
    //	$("#MANUIBtn").click(); }
}


