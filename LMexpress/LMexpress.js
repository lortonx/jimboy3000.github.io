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
privateservutil();

var currentIP = "0.0.0.0:0";
var currentToken = "";
var previousMode = localStorage.getItem("gamemode");
var checkonlyonce = localStorage.getItem("checkonlyonce");
var defaultMusicUrl = "https://www.youtube.com/watch?v=L7klPYKTx64";
var coinTimer;
var musicPlayer;
var originalDeath;
var stateObj = {foo: "bar"};
var containermain;
var closebutton1 = "0";
var modebetter = "";
var modbetter2 = "";
var fullornot = "NO";
var minimapbckimg = "";
var leadbimg = "";
var teambimg = "";
var canvasbimg = "";
var pic1urlimg = "http://i.imgur.com/RVBi3T1.gif";
var pic2urlimg = "http://i.imgur.com/p2T29QE.gif";
var pic3urlimg = "http://i.imgur.com/EucIfYY.gif";
var pic4urlimg = "http://i.imgur.com/KOoBDaK.gif";
var pic5urlimg = "http://i.imgur.com/CS03xWv.gif";
var pic6urlimg = "http://i.imgur.com/tfMUu2J.gif";
var pic1dataimg = "Bad Choice!";
var pic2dataimg = "Why?";
var pic3dataimg = "Yow!!";
var pic4dataimg = "Death!";
var pic5dataimg = "Relax!";
var pic6dataimg = "Legend Mod!";
var yt1url = "dQw4w9WgXcQ";
var yt2url = "btPJPFnesV4";
var yt3url = "UD-MkihnOXg";
var yt4url = "vpoqWs6BuIY";
var yt5url = "VUvfn5-BLM8";
var yt6url = "CnIfNSpCf70";
var yt1data = "Rick Astley - Never Gonna Give You Up";
var yt2data = "Survivor - Eye Of The Tiger";
var yt3data = "Lion king - The Lion Sleeps Tonight";
var yt4data = "Agario - Jumbo Solo vs Teams";
var yt5data = "Agario - Kill3r vs Teams";
var yt6data = "Legend Mod Promo";
var lastIP = "";
var previousnickname = localStorage.getItem("previousnickname");
var minbtext = localStorage.getItem("minbtext");
var leadbtext = localStorage.getItem("leadbtext");
var teambtext = localStorage.getItem("teambtext");
var imgUrl = localStorage.getItem("imgUrl");
var imgHref = localStorage.getItem("imgHref");
var showToken = localStorage.getItem("showTK");
var showPlayer = localStorage.getItem("showPlayer");
var SHOSHOBtn = localStorage.getItem("SHOSHOBtn");
var XPBtn = localStorage.getItem("XPBtn");
var MAINBTBtn = localStorage.getItem("MAINBTBtn");
var AnimatedSkinBtn = localStorage.getItem("AnimatedSkinBtn");
var YoutubeAutoBtn = localStorage.getItem("YoutubeAutoBtn");
var TIMEcalBtn = localStorage.getItem("TIMEcalBtn");
var troll1Btn = localStorage.getItem("troll1Btn");
var ComPosition = localStorage.getItem("ComPosition");
var autoCoinBtn = localStorage.getItem("autoCoinBtn");
var timesopened = localStorage.getItem("timesopened");
var url = localStorage.getItem("url");
var region = getParameterByName("r", url);
var realmode = getParameterByName("m", url);
var searchStr = getParameterByName("search", url);
var searchSip = getParameterByName("sip", url);
var privateSrv = getParameterByName("ip", url);
var clanpass = getParameterByName("pass", url);
var realmode2 = "";
var mode=""; //just in case
var token = "";
var messageone = 1; //If legendmod is being used
var hiddenfromclan = 0;
var saveclanpassword= localStorage.getItem("saveclanpassword");
var troll1;
var seticon = "YES";
var setmessagecom = "YES";
var setyt = "YES";
var searching;
var timerId;
T = {};
var MSGCOMMANDS = "";
var MSGCOMMANDS2;
var MSGCOMMANDS;
var playerMsg = "";
var commandMsg = "";
var otherMsg = "";
var rotateminimap = 0;
var rotateminimapfirst = 0;
var openthecommunication = "NO";
var clickedname = "NO";
var oldteammode;
var checkedGameNames = 0;
var timesdisconnected = 0;
var PanelImageSrc;
var AdminClanSymbol;
var AdminPassword;
var AdminRights = 0;
var LegendClanSymbol = "0";
var legbgcolor = $("#menuPanelColor").val();
var legbgpic = $("#menuBg").val();
var dyinglight1load = localStorage.getItem("dyinglight1load");
var url2;
var semiurl2;
var PostedThings;
var Ultimouseenabled=0;
var setscriptingcom = "YES";
var usedonceSkin=0;
var toastrSkinNotice=0;
var detailed="";
var detailed1;
var userfirstname = localStorage.getItem("userfirstname");
var userlastname = localStorage.getItem("userlastname");
var usergender = localStorage.getItem("usergender");
var fbresponse={};
var prevPrivateServer = localStorage.getItem("prevPrivateServer");
var CopyTkPwLb2; 
var languagemod = localStorage.getItem("languagemod");
var Premadeletter0 = "Communication Activated";
var Premadeletter1 = "Cannot open this youtube URL";
var Premadeletter2 = "You cannot chat if player name > 15 chars";
var Premadeletter3 = "Easter Egg 1 Activated";
var Premadeletter4 = "Easter Egg 2 Activated";
var Premadeletter5 = "Easter Egg 3 Activated";
var Premadeletter6 = "Video works better on vanilla, visit:";
var Premadeletter7 = "Notes:<b>Facebook</b> compatibility is better than <b>Google Plus</b>.";
var Premadeletter8 = "Notes:Agar.io can only connect to <b>Google Plus</b> on onload events. If logout occurs, rejoin Agar.io or use <b>Facebook</b>.";
var Premadeletter9 = "If logout occurs on onload events, delete Chrome cookies from ";
var Premadeletter10 = "Disconnected from server :(";
var Premadeletter11 = "You were banned, restart your rooter!";
var Premadeletter12 = "Connected!";
var Premadeletter13 = "PLAY";
var Premadeletter14 = "SPECTATE";
var Premadeletter15 = "Invalid token or server has closed :(";
var Premadeletter16 = "can be Updated to";
var Premadeletter17 = "Welcome back";
var Premadeletter18 = "Your shortcut area and other areas (from last tab) are still disabled! We suggest you enable them.";
var Premadeletter19 = "Enable Them";
var Premadeletter20 = "Keep Them Disabled";
var Premadeletter21 = "Searching IP";
var Premadeletter22 = "Your teammate";
var Premadeletter23 = "wants you to hide all (leaderboard and minimap)";
var Premadeletter24 = "Accept";
var Premadeletter25 = "NO WAY!";
var Premadeletter26 = "wants you to change your name to";
var Premadeletter27 = "wants you to Enable Troll on death";
var Premadeletter28 = "wants you to open Youtube Player";
var Premadeletter29 = "Leaderboard found";
var Premadeletter30 = "Search";
var Premadeletter31 = "The leaderboard was not found. Keep trying...";
var Premadeletter32 = "Search was canceled";
var Premadeletter33 = "You are invisible to Team / Clan";
var Premadeletter34 = "You are visible to Team / Clan";
var Premadeletter35 = "Hide/Show can be used only while playing";
var Premadeletter36 = "This is not valid Discord Webhook address";
var Premadeletter37 = "Server is locked";
var Premadeletter38 = "You must be on spectate mode";
var Premadeletter39 = "Due to spamming issues, you must be in game and use password";
var Premadeletter40 = "Auto Youtube On";
var Premadeletter41 = "Auto Youtube Off";
var Premadeletter42 = "Show Shortcuts";
var Premadeletter43 = "Hide Shortcuts";
var Premadeletter44 = "Show XP BAR";
var Premadeletter45 = "Hide XP BAR";
var Premadeletter45a = "Rounded Hud";
var Premadeletter45b = "Square Hud";
var Premadeletter46 = "Show Anim. Skins";
var Premadeletter47 = "Hide Anim. Skins";
var Premadeletter48 = "Show Everything";
var Premadeletter49 = "Hide Everything";
var Premadeletter50 = "Show Timer Calc.";
var Premadeletter51 = "Hide Timer Calc."
var Premadeletter53 = "Auto free coins";
var Premadeletter54 = "Stop free coins";
var Premadeletter55 = "Troll on Death";
var Premadeletter56 = "No troll on Death";
var Premadeletter57 = "Communication";
var Premadeletter58 = "Hidden";
var Premadeletter59 = "Visible";
var Premadeletter60 = "Pause";

languagemod();
appendLMhiFbPs();
if (realmode == "") {modebetter2 = ":ffa";} 
else {modebetter2 = realmode;}


























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

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}



function languagemod(){
if (languagemod == 2) {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "https://jimboy3100.github.io/LanguagePackGreek.js";
    $("body").append(s);
    setTimeout(function() {
        $('#legendlanguages').val("2");
        var s1 = document.createElement("script");
        s1.type = "text/javascript";
        s1.src = "https://jimboy3100.github.io/LanguagePackHandler.js";
        $("body").append(s1);
    }, 4000);
}
if (languagemod == 3) {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "https://jimboy3100.github.io/LanguagePackSpanish.js";
    $("body").append(s);
    setTimeout(function() {
        $('#legendlanguages').val("3");
        var s1 = document.createElement("script");
        s1.type = "text/javascript";
        s1.src = "https://jimboy3100.github.io/LanguagePackHandler.js";
        $("body").append(s1);
    }, 4000);
}
if (languagemod == 4) {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "https://jimboy3100.github.io/LanguagePackBulgarian.js";
    $("body").append(s);
    setTimeout(function() {
        $('#legendlanguages').val("4");
        var s1 = document.createElement("script");
        s1.type = "text/javascript";
        s1.src = "https://jimboy3100.github.io/LanguagePackHandler.js";
        $("body").append(s1);
    }, 4000);
}
if (languagemod == 5) {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "https://jimboy3100.github.io/LanguagePackFrench.js";
    $("body").append(s);
    setTimeout(function() {
        $('#legendlanguages').val("5");
        var s1 = document.createElement("script");
        s1.type = "text/javascript";
        s1.src = "https://jimboy3100.github.io/LanguagePackHandler.js";
        $("body").append(s1);
    }, 4000);
}
if (languagemod == 6) {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "https://jimboy3100.github.io/LanguagePackArabic.js";
    $("body").append(s);
    setTimeout(function() {
        $('#legendlanguages').val("6");
        var s1 = document.createElement("script");
        s1.type = "text/javascript";
        s1.src = "https://jimboy3100.github.io/LanguagePackHandler.js";
        $("body").append(s1);
    }, 4000);
}
if (languagemod == 7) {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "https://jimboy3100.github.io/LanguagePackTraditionalChinese.js";
    $("body").append(s);
    setTimeout(function() {
        $('#legendlanguages').val("6");
        var s1 = document.createElement("script");
        s1.type = "text/javascript";
        s1.src = "https://jimboy3100.github.io/LanguagePackHandler.js";
        $("body").append(s1);
    }, 4000);
}
}

function appendLMhiFbPs(){
$("body").on('DOMNodeInserted', ".toast.toast-warning", function() {
    MSGCOMMANDS2 = $(".toast.toast-warning").html();
    if (MSGCOMMANDS2.includes("Welcome! You are connected to the OGARio")) {
		$("#gamemode").prop('disabled', false);
		$("#region").prop('disabled', false);   
        //$(".toast.toast-warning").html("<b>[SERVER]:</b> " + Premadeletter0);
		$(".toast.toast-warning").remove();
		setTimeout(function () {
		//spectate();
				if (clanpass!=null&&clanpass!="") {		
					$("#clantag").val(clanpass);
					$('#clantag').css('background-color', '#ff6347');						
				}
				if (privateSrv!=null) {
					if ($('#clantag').val() == ""){
					if(privateSrv.includes("eu.fzogar.xyz:4000")){$("#clantag").val("PS1");} 
					else if(privateSrv.includes("eu.fzogar.xyz:4001")){$("#clantag").val("PS2");}
					else if(privateSrv.includes("eu.fzogar.xyz:5001")){$("#clantag").val("PS3");}
					else if(privateSrv.includes("eu.fzogar.xyz:5002")){$("#clantag").val("PS4");}
					else if(privateSrv.includes("sg.fzogar.xyz:4000")){$("#clantag").val("PS5");}
					else if(privateSrv.includes("sg.fzogar.xyz:4001")){$("#clantag").val("PS6");}
					else if(privateSrv.includes("in.fzogar.xyz:443")){$("#clantag").val("PS7");}
					else{$("#clantag").val("PS");}
					}
				}
				
//				$(".btn-spectate").click();		
		
		$("#overlays").show();
		$(".center-container.ogario-menu").show();
		$(".side-container.right-container").show();
		$(".side-container.left-container").show();	
		},200);
		if($('#region>option:nth-child(1)').val()!=":PrS")	{
		$('#region').prepend('<option value=":PrS" data-itr="PrS">Private Servers</option>');	
		}
		//Save Name, Surname, Gender
		FB.api('/me', {fields: 'first_name, last_name, gender'}, function(response) {fbresponse=response; return fbresponse;});
		setTimeout(function (){ 
			userfirstname=fbresponse[Object.keys(fbresponse)[0]]; if (userfirstname!=null) {localStorage.setItem("userfirstname", userfirstname);}
			userlastname=fbresponse[Object.keys(fbresponse)[1]]; if (userlastname!=null) {localStorage.setItem("userlastname", userlastname);}
			usergender=fbresponse[Object.keys(fbresponse)[2]]; if (usergender!=null) {localStorage.setItem("usergender", usergender);}
			},250);
    }
	if (MSGCOMMANDS2.includes("You are using an old version of OGARio by")) {		
		$(".toast.toast-warning").html('<b>[SERVER]:</b> You are using a wrong version of Legend Mod, <br>visit: <a target="_blank" href="https://jimboy3100.github.io/legendmod.user.js"><font color="yellow"><b><u>www.legendmod.ml</u></b></font></a>');
	}
});


$("body").on('DOMSubtreeModified', "#chat-box", function() {
    MSGCOMMANDS3 = $(".command-text").text();
    if (MSGCOMMANDS3.includes("Welcome! You are connected to the OGARio by szymy server. Have a nice mass!")) {
		$("#gamemode").prop('disabled', false);
		$("#region").prop('disabled', false);   
	//	$(".toast.toast-warning").remove();
	        $(".command-text").text(Premadeletter0);
		setTimeout(function () {
		//spectate();
				if (clanpass!=null&&clanpass!="") {		
					$("#clantag").val(clanpass);
					$('#clantag').css('background-color', '#ff6347');						
				}
				if (privateSrv!=null) {
					if ($('#clantag').val() == ""){
					if(privateSrv.includes("eu.fzogar.xyz:4000")){$("#clantag").val("PS1");} 
					else if(privateSrv.includes("eu.fzogar.xyz:4001")){$("#clantag").val("PS2");}
					else if(privateSrv.includes("eu.fzogar.xyz:5001")){$("#clantag").val("PS3");}
					else if(privateSrv.includes("eu.fzogar.xyz:5002")){$("#clantag").val("PS4");}
					else if(privateSrv.includes("sg.fzogar.xyz:4000")){$("#clantag").val("PS5");}
					else if(privateSrv.includes("sg.fzogar.xyz:4001")){$("#clantag").val("PS6");}
					else if(privateSrv.includes("sg.fzogar.xyz:4002")){$("#clantag").val("PS7");}
					else{$("#clantag").val("PS");}
					}
				}

//				$(".btn-spectate").click();
				
		$("#overlays").show();
		$(".center-container.ogario-menu").show();
		$(".side-container.right-container").show();
		$(".side-container.left-container").show();			
		},200);

		if($('#region>option:nth-child(1)').val()!=":PrS")	{
		$('#region').prepend('<option value=":PrS" data-itr="PrS">Private Servers</option>');	
		//Save Name, Surname, Gender
		FB.api('/me', {fields: 'first_name, last_name, gender'}, function(response) {fbresponse=response; return fbresponse;});
		setTimeout(function (){ 
			userfirstname=fbresponse[Object.keys(fbresponse)[0]]; if (userfirstname!=null) {localStorage.setItem("userfirstname", userfirstname);}
			userlastname=fbresponse[Object.keys(fbresponse)[1]]; if (userlastname!=null) {localStorage.setItem("userlastname", userlastname);}
			usergender=fbresponse[Object.keys(fbresponse)[2]]; if (usergender!=null) {localStorage.setItem("usergender", usergender);}
			},250);
		}
		
    }
	if (MSGCOMMANDS3.includes("Welcome! You are connected to the OGARio by szymy server. Have a nice mass!")) {
	$(".command-text").text('You are using a wrong version of Legend Mod, visit: www.legendmod.ml');	
	}
});
}

function privateservutil(){
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
$('#gamemode').on('change', function() {
   adres();
    if (this.value == ":party") {
        $("#create-party-btn").click();
    console.log("Party stuff fixed");
	}
    else if (this.value == ":PrS1") {
    console.log("Going to PRS1");
	PrivateServer1();
    }
    else if (this.value == ":PrS2") {
    console.log("Going to PRS2");
	PrivateServer2();
    }  
    else if (this.value == ":PrS3") {
    console.log("Going to PRS3");
	PrivateServer3();
    }
    else if (this.value == ":PrS4") {
    console.log("Going to PRS4");
	PrivateServer4();
    }
    else if (this.value == ":PrS5") {
    console.log("Going to PRS5");
	PrivateServer5();
    }
    else if (this.value == ":PrS6") {
    console.log("Going to PRS6");
	PrivateServer6();
    }
    else if (this.value == ":PrS7") {
    console.log("Going to PRS7");
	PrivateServer7();
    }
    else if (this.value == ":PrS8") {
    console.log("Going to PRS8");
	PrivateServer8();
    }
    else if (this.value == ":PrS9") {
    console.log("Going to PRS9");
	PrivateServer9();
    }		
});
}
