/*************
 * Legend mod v3.68 by Jimboy3100   email:jimboy3100@hotmail.com
 *************/
var semimodVersion = "68"; // the version 1.1-> 1.11
loadersetings();
loadericon();
PremiumUsers();
document.title = "Legend mod";

//Authenticate Mod Script
var accesstomod;
setTimeout(function() {
$("#tcm-videoskin").hide();	
getaccesstoken();
getaccesstoken2();
}, 3000);


var CutNameConflictwithMessage=false;

/*
(function(){
    var _privateLog = console.log;
    console.log = function (message) {
		if (CutNameConflictwithMessage==false){
		if (~message.indexOf("OGARio by szymy")){
		}
		else{
			_privateLog.apply(console, arguments);
		}
		}
    };
})();
*/
var DeathFPSfixVariable;
MC.onPlayerDeath = joint([ MC._onPlayerDeath, DeathFPSfix ]); //temporary until i fix the error
MC._onDisconnect = MC.onDisconnect;
MC.onDisconnect = joint([ MC._onDisconnect, onDisconnectfix ]);


videoskins();
//Map Auto Start
CanvasRenderingContext2D.prototype._drawImage = CanvasRenderingContext2D.prototype.drawImage, CanvasRenderingContext2D.prototype.drawImage = function() {
  if (arguments[0].src) {
    if ("http://agar.io/img/background.png" == arguments[0].src) {
      arguments[0].src = "";
    }
  }
  this._drawImage.apply(this, arguments);
};

$("#gamemode").prop('disabled', false);
$("#region").prop('disabled', false);   
		
var oldgamemode=$("#gamemode");
		//Private Servers
$('#region').prepend('<option value=":PrS" data-itr="PrS">Beta Servers</option>');	

 $("#region").on('change', function() {
	setTimeout(function() {
	$("#gamemode").prop('disabled', false);
	$("#region").prop('disabled', false);                 
	}, 200);
	if (this.value == ":PrS") {
    console.log("Going to PrS");
        $("#gamemode").html('<select id="gamemode" class="form-control" required="" data-original-title="" title="">'+
		'<option value=":PrS0" data-itr="PrS0">-SELECT-</option>'+		
		'<option value=":PrS1" data-itr="PrS1">Ultrasplit1</option>'+
		'<option value=":PrS2" data-itr="PrS2">Ultrasplit2</option>'+
//		'<option value=":PrS3" data-itr="PrS3">FFA</option>'+
//		'<option value=":PrS4" data-itr="PrS4">Instant</option>'+
//		'<option value=":PrS5" data-itr="PrS5">Minions</option>'+
		'<option value=":PrS6" data-itr="PrS6">Bots 1</option>'+
		'<option value=":PrS7" data-itr="PrS7">Bots 2</option>'+
		'<option value=":PrS8" data-itr="PrS8">Instant 2</option>');
//		'<option value=":PrS9" data-itr="PrS9">--</option>');	
		
    }
	else if (this.value != ":PrS") {
    console.log("Leaving PrS");
	
        $("#gamemode").html('<select id="gamemode" class="form-control" required="" data-original-title="" title="">'+
		'<option value=":ffa" data-itr="page_gamemode_ffa">FFA</option>'+
		'<option value=":teams" data-itr="page_gamemode_teams">Teams</option>'+
		'<option value=":experimental" data-itr="page_gamemode_experimental">Experimental</option>'+
		'<option value=":party" data-itr="page_party">Party Mode</option>');	
    }	
	adres();
});
$('#gamemode').on('change', function() {
	if ($('#region').val()!=":PrS"){
		adres();		
		if (this.value == ":party") {
			$("#create-party-btn").click();	
			console.log("Party stuff fixed");
		}
	}	
	else{	
		PrivateServerSenderFunction();
		}		
});

/*		
setTimeout(function (){ $("#create-party-btn-2").click();$('#gamemode').val(":party");},800);
setTimeout(function (){ $('#gamemode2').val(":party");if($("#top5-hud").is(":visible")==false){$("#create-party-btn-2").click();}},1500);		  
setTimeout(function (){ $('#gamemode2').val(":party");if($("#top5-hud").is(":visible")==false){$("#create-party-btn-2").click();}},2500);
setTimeout(function (){ $('#gamemode2').val(":party");if($("#top5-hud").is(":visible")==false){$("#create-party-btn-2").click();}},3500);
setTimeout(function (){ $('#gamemode2').val(":party");if($("#top5-hud").is(":visible")==false){$("#create-party-btn-2").click();}},4500);
setTimeout(function (){ $('#gamemode2').val(":party");if($("#top5-hud").is(":visible")==false){$("#create-party-btn-2").click();}},5500);
setTimeout(function (){ $('#gamemode2').val(":party");if($("#top5-hud").is(":visible")==false){$("#create-party-btn-2").click();}},7500);
setTimeout(function (){ $('#gamemode2').val(":party");if($("#top5-hud").is(":visible")==false){$("#create-party-btn-2").click();}},8500);	
setTimeout(function (){ if($("#top5-hud").is(":visible")==false){$("#create-party-btn-2").click();}},10500);								
setTimeout(function (){ if($("#top5-hud").is(":visible")==false){$("#create-party-btn-2").click();}},11000);	
setTimeout(function (){ if($("#top5-hud").is(":visible")==false){$("#create-party-btn-2").click();}},12000);
setTimeout(function (){ if($("#top5-hud").is(":visible")==false){$("#create-party-btn-2").click();}},13500);
*/

var currentIP = "0.0.0.0:0";
var currentToken = "";
var previousMode = localStorage.getItem("gamemode");
var checkonlyonce = localStorage.getItem("checkonlyonce");
var defaultMusicUrl = "http://www.youtube.com/watch?v=qkKiyneiSTo";
var coinTimer;
var musicPlayer;
var originalDeath;
var stateObj = {
    foo: "bar"
};
//var containermain;
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
var pic6dataimg = "Legend mod!";
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
var yt6data = "Legend mod Promo";
var lastIP = "";
var previousnickname = localStorage.getItem("previousnickname");
var minbtext = localStorage.getItem("minbtext");
var leadbtext = localStorage.getItem("leadbtext");
var teambtext = localStorage.getItem("teambtext");
var imgUrl = localStorage.getItem("imgUrl");
var imgHref = localStorage.getItem("imgHref");
//var autoRespawn = localStorage.getItem("autoRespawn");
var showToken = localStorage.getItem("showTK");
var showPlayer = localStorage.getItem("showPlayer");
//var IPBtn = localStorage.getItem("IPBtn");
var SHOSHOBtn = localStorage.getItem("SHOSHOBtn");
var XPBtn = localStorage.getItem("XPBtn");
//var TIMEBtn = localStorage.getItem("TIMEBtn");
//var MAINBBtn = localStorage.getItem("MAINBBtn");
//var MAINBTBtn = localStorage.getItem("MAINBTBtn");
//var MANUIBtn = localStorage.getItem("MANUIBtn");
var MAINBTBtn = localStorage.getItem("MAINBTBtn");
var AnimatedSkinBtn = localStorage.getItem("AnimatedSkinBtn");
// var RotationBtn = localStorage.getItem("RotationBtn");
var YoutubeAutoBtn = localStorage.getItem("YoutubeAutoBtn");
var TIMEcalBtn = localStorage.getItem("TIMEcalBtn");
var troll1Btn = localStorage.getItem("troll1Btn");
var ComPosition = localStorage.getItem("ComPosition");
var autoCoinBtn = localStorage.getItem("autoCoinBtn");
//var copyGameNames = localStorage.getItem("copyGameNames");
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
var MSGNICK;
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
//var userIp;
var detailed1;
userData = {}; 
userData = JSON.parse(localStorage.getItem("userData"));
var userip="0.0.0.0:0";
var usercity="NotFound";
var usercountry="NotFound";
var userfirstname = localStorage.getItem("userfirstname");
var userlastname = localStorage.getItem("userlastname");
var usergender = localStorage.getItem("usergender");
var fbresponse={};
var prevPrivateServer = localStorage.getItem("prevPrivateServer");
var CopyTkPwLb2; 
//for MsgCommands
var MSGCOMMANDS2a;
var MSGCOMMANDSA;
var MSGCOMMANDS2;
var MSGCOMMANDS3;
var Express;
var acceptServerBtnFlag=null;
//for the LM JSON
var LegendJSON;
var LegendSettings="true";
var LegendSettingsfirstclicked="false"; 
var switcheryLegendSwitch, switcheryLegendSwitch2;
var DoubleSplitRangeSaved = localStorage.getItem("DoubleSplitRangeSaved");
var UniversalChatSaved = localStorage.getItem("UniversalChatSaved");
//
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
//var Premadeletter52="Edit Names";
//var Premadeletter52a="Close Names";
var Premadeletter53 = "Auto free coins";
var Premadeletter54 = "Stop free coins";
var Premadeletter55 = "Troll on Death";
var Premadeletter56 = "No troll on Death";
var Premadeletter57 = "Communication";
var Premadeletter58 = "Hidden";
var Premadeletter59 = "Visible";
var Premadeletter60 = "Pause";
var Premadeletter61 = "Enable YT as background";
var Premadeletter62 = "Disable YT as background";
var Premadeletter63 = "wants you to open the url";
var Premadeletter64 = "wants you to embed and play this youtube video";
var Premadeletter65 = "wants you to join the following Skype room";
var Premadeletter66 = "wants you to join the following Discord room";
var Premadeletter67 = "wants you to leave this server and join this new one";

var Premadeletter68 = "You pressed";
var Premadeletter69 = "restart if";
var Premadeletter70 = "drops";
var Premadeletter71 = "Animated skins";
var Premadeletter72 = "enabled";
var Premadeletter73 = "drop";
var Premadeletter74 = "when";
var Premadeletter75 = "Animated skins will be";
var Premadeletter76 = "disabled";
var Premadeletter77 = "after rejoin";
var Premadeletter78 = "Better FPS";
var Premadeletter79 = "performance when 16";
var Premadeletter80 = "When Dying Light Expansion is enabled, Troll on death cannot occur";
var Premadeletter81 = "Private Server";
var Premadeletter82 = "Connect to any";
var Premadeletter83 = "server, or make your own";
var Premadeletter84 = "Play agario-like games if you know the IP of servers";
var Premadeletter85 = "Your account\'s image has been copied to clipboard. Paste it"; // erase the 's
var Premadeletter86 = "to custom skin Url area";
var Premadeletter87 = "You must Login to use picture of your profile";
var Premadeletter88 = "You are using a wrong version";
var Premadeletter89 = "Game will terminate now";
var Premadeletter90 = "Special Deals";
var Premadeletter91 = "Agario may or may not give you the Skin, but only the coins";
var Premadeletter91a = "Use at your own risk";
var Premadeletter92 = "If friend's UID is wrong, purchase will fail";
var Premadeletter93 = "UID Factory Settings";
var Premadeletter94 = "You must login to load Special Deals";
var Premadeletter95 = "Fake\'s image has been copied to clipboard. Paste it"; // erase the 's
var Premadeletter96 = "to custom skin Url area in order to activate the fake\'s flag function"; // erase the 's
var Premadeletter97 = "Inform me when you finish with Recapatcha";
var Premadeletter98 = "I have finished";
var Premadeletter99 = "Never Mind";
var Premadeletter100 = "Calculating your XP, please wait...";
var Premadeletter101 = "Do";
var Premadeletter102 = "NOT";
var Premadeletter103 = "press";
var Premadeletter104 = "Erase custom skin URL";
var Premadeletter105 = "select video skin";	
var Premadeletter106 = "unselect video skin";	
var Premadeletter107 = "mute audio";
var Premadeletter108 = "The LM Project";
var Premadeletter109 = "Upload / Download";		
var Premadeletter110 = "do not enter anything here unless you know what it is";	
var Premadeletter111 = "click on the orange icon to buy";	
var Premadeletter112 = "For some payment methods";
var Premadeletter113 = "Close";			
var Premadeletter114 = "COPY";			
var Premadeletter115 = "is used to buy offers for your friends";
var Premadeletter116 = "To make purchases, you must be logged in to your account…";
var Premadeletter117 = "Library"; 
var Premadeletter118 = "visit"; 
var Premadeletter119 = "Report as Fake (change Skin)"; 
var Premadeletter120 = "Enter your EXACT name of the player"; 
var Premadeletter121 = "Abusing players and inappropriate use will lead UID of user";
var Premadeletter122 = "to permanent ban from usage of this extension"; 

var stylesLegendModConsole1 = [
    'background: linear-gradient(#D33106, #571402)'
    , 'border: 1px solid #3E0E02'
    , 'color: #99c2ff'
    , 'display: block'
    , 'text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3)'
    , 'box-shadow: 0 1px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset'
    , 'line-height: 40px'
    , 'text-align: center'
    , 'font-weight: bold'
].join(';');
var stylesLegendModConsole2 = [
    'background: linear-gradient(grey, black)'
    , 'border: 1px solid #3E0E02'
    , 'color: #FFFFFF'
    , 'display: block'
    , 'text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3)'
    , 'box-shadow: 0 1px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset'
//    , 'line-height: 40px'
    , 'text-align: center'
//    , 'font-weight: bold'
].join(';');


/*
  $(function() {
    $.getJSON("https://api.ipify.org?format=jsonp&callback=?",
      function(json) {
        return userIp=json.ip;
      }
    );
  });
*/


var languagemod = localStorage.getItem("languagemod");
languagemodfun();



$("body").on('DOMNodeInserted', ".toast.toast-warning", function() {
    MSGCOMMANDS2 = $(".toast.toast-warning").html();
    if (MSGCOMMANDS2.includes("Welcome! You are connected to the OGARio")) {
		$(".toast.toast-warning").remove();
		//doDOMonloadevents1();
    }
	else if (MSGCOMMANDS2.includes("You are using an old version of OGARio by")) {		
		$(".toast.toast-warning").html('<b>[SERVER]:</b> You are using a wrong version, <br>visit: <a target="_blank" href="https://jimboy3100.github.io/legendmod.user.js"><font color="yellow"><b><u>www.legendmod.ml</u></b></font></a>');
	}
});


$("body").on('DOMSubtreeModified', "#chat-box", function() {
    MSGCOMMANDS3 = $(".command-text").text();
    if (MSGCOMMANDS3.includes("Welcome! You are connected to the OGARio by szymy server. Have a nice mass!")) {
		$(".command-text").text(Premadeletter0);
		//doDOMonloadevents1();
    }
	else if (MSGCOMMANDS3.includes("You are using an old version of OGARio by")) {
	$(".command-text").text('You are using a wrong version, visit: www.legendmod.ml');	
	}	
});
setTimeout(function() { doDOMonloadevents1(); }, 4000);
        //Legend.Mod&?player=lala&?com=HideAll&?do=donothing
        //Legend.Mod&?player=a&?com=Team5&?do=donothing
// load Message Commands
$("body").on('DOMNodeInserted', ".toast.toast-success", function() {
            MSGCOMMANDS = $(".toast.toast-success").text();
			MSGNICK = $(".message-nick").last().text().replace(": ", "");
			MsgCommands1(MSGCOMMANDS, MSGNICK);

});	
$("body").on('DOMSubtreeModified', "#chat-box", function() {
            MSGCOMMANDS = $(".message-text").text();
			MSGNICK = $(".message-nick").last().text().replace(": ", "");
			MsgCommands1(MSGCOMMANDS, MSGNICK);

});


if (realmode == "") {
    modebetter2 = ":ffa";
} else {
    modebetter2 = realmode;
}

var datasent2;
///////////////////////////////////////////////////////////////////////////
// Here "addEventListener" is for standards-compliant web browsers and "attachEvent" is for IE Browsers.
var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
var eventer = window[eventMethod];
// Now...
// if 
//    "attachEvent", then we need to select "onmessage" as the event. 
// if 
//    "addEventListener", then we need to select "message" as the event
var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";
// Listen to message from child IFrame window
eventer(messageEvent, function (e) {
       //alert(e.data);
       // Do whatever you want to do with the data got from IFrame in Parent form.
	   if (~e.data.indexOf("PostedOgarSettings1")){ 

//		try{window.parent.postMessage("PostedOgarSettings2?datasent="+$('#export-settings').val(), "*"); 
//        } catch (e) {}
		//alert(e.data);
		datasent2=e.data;
		datasent2=datasent2.replace("PostedOgarSettings1?datasent=", "");
		fzogarOgarSettings(datasent2);
	//	var datasent = getParameterByName("datasent", datasent2);
	//   alert(datasent);
	   
	   }
		return datasent2;
}, false);
///////////////////////////////////////////////////////////////////////////


//Delete agario divs and images from memory
$("#advertisement").remove();
$("#mcbanners-container").remove();
$("#adsBottom").remove();

//remove adds
$("#adsGameOver").remove();
//Fix Skin Area Profiles Tab
$("#skinButton").html('<div id="skinButton" class="circle" style="cursor:pointer;" data-type="OWNED"><div class="circle big green" style="top:75px;"><span class="outlined-text plus-text" style="cursor:pointer;line-height: 26px;">+</span></div><div class="circle bordered skinWrapper" style="border: 3px solid rgb(131, 131, 131); overflow: hidden; height: 96px; width: 96px;"><img src="" crossorigin="anonymous" style="width: 180px; display: none;"></div><span id="skinLabel" class="outlined-text" style="display: block;" data-itr="page_main_menu_skins">Skins</span></div>');
$("#skinButton").click( function(){MC._onPlayerDeath();});

setTimeout(function() {
    if (searchSip == null) {
        (function(a, c) {
            function r(a, d) {
                if (d) {
                    var f = new Date;
                    f.setTime(f.getTime() + 864E5 * d);
                    f = "; expires=" + f.toGMTString()
                } else f = "";
                document.cookie = "agario_redirect=" + a + f + "; path=/"
            }
            $(function() {
                $("#gamemode").after('<input id="server" class="form-control" placeholder="Server or direct IP" style="width: 74%;  display: inline-block; margin-left: 0px; margin-top: 5px"><button type="submit" id="connect" class="btn btn-primary" style="width: 24%; display: none; margin-left: 6px; margin-top: -3px">Connect</button><button type="submit2" id="connect2" class="btn btn-primary btn " style="width: 24%; display: inline-block; margin-left: 6px; margin-top: -3px">Connect</button>');
                $("#connect2").tooltip({
                    title: "Connect to server, or restablish communication",
                    placement: "left"
                });
                $("#connect2").click(function() {

					if (letterCount($('#server').val(), '.', true) == 3){
						if ($("#server").val().includes("ws://") == true){
							var texture2="ws://"+$('#server').val();
							$('#server').val($('#server').val().replace("ws://", ""));
						}
						else{
//							var texture2=$('#server').val();
//							$('#server').val(texture2);
						}	
						$("#server-token").val($('#server').val());	
						$("#server-ws").val("ws://"+$('#server').val());
						privateSrvReturner();
						window.core.disableIntegrityChecks(true);
						$("#server-connect").click();
//						history.pushState(stateObj, "page 2", "?ip=" + $("#server").val());
						setTimeout(function () {
							setPasswordforPrS();
						},4000);
					}
                    else if ($("#server").val().includes("live-arena") == true) {
                        var texture2, texture3;
					    var texture2, texture3;
                        texture3 = $("#server").val();
                        texture2 = texture3.replace("live-arena-", "");
						texture2 = texture2.replace(".agar.io:80", "");
						texture2 = texture2.replace(".agar.io", "");
						$("#server-token").val(texture2);
				//		if ($("#server-ws").val().includes("live-arena-") == false){
				//		window.core.disableIntegrityChecks(true);
				//		}
						$("#server-join").click();

						
/*                        texture3 = $("#server").val();
                        texture2 = texture3.substring(0, texture3.indexOf(':'));
                        texture2 = texture2.replace(".", "-");
                        texture2 = texture2.replace(".", "-");
                        texture2 = texture2.replace(".", "-");
                        texture3 = texture3.split(':').pop();
                        texture3 = "ws://ip-" + texture2 + ".tech.agar.io:" + texture3 + "/";
                        a.core.connect(texture3);
*/
                        setTimeout(function() {
                            realmode = getGameMode();
//                            $("#cur-tk-hud").fadeTo('fast', 0.2).fadeTo('fast', 1.0);
                            var tmz = $("#server").val();
                            // tmz=tmz.replace("ip-", "");tmz=tmz.replace(/-/g,".");tmz=tmz.replace(".tech.agar.io","");tmz=tmz.replace("ws://","");tmz=tmz.replace("/","");
//                            $("#cur-tk-hud").text(" IP:" + tmz).attr("style", "opacity: 0;");
                            currentIP = tmz;
                            if (realmode != ":party") {
                                setTimeout(function() {
                                    history.pushState(stateObj, "page 2", "?sip=" + tmz);
                                }, 3000);
                                setTimeout(function() {
                                    history.pushState(stateObj, "page 2", "?sip=" + tmz);
                                }, 5000);
                                setTimeout(function() {
                                    history.pushState(stateObj, "page 2", "?sip=" + tmz);
                                }, 7000);
                            }

                            MC.setQuality($('#quality').val());
                        }, 1000);
                    } else if ($("#server").val().length<8) {
						if ($("#server").val().includes("#") == true){
                        joinpartyfromconnect();
						setTimeout(function () {
							MC.setQuality($('#quality').val());
						},4000);
						
						}
						else if ($("#server").val().includes("#") == false){
							$("#server").val("#"+$("#server").val());
						}
                    }
					  else if ($("#server").val().includes("live-arena") == false) {
						if ($("#server").val().includes(":80") == true) {$("#server").val($("#server").val().replace(":80",""));} //fixing code for :80  
						if ($("#server").val().includes("ws://") == true){
							var texture2="ws://"+$('#server').val();
							$('#server').val($('#server').val().replace("ws://", ""));
						  privateSrvReturner();
						  window.core.disableIntegrityChecks(true);
						  core.connect("ws://"+$("#server").val());
						  $("#server-token").val($("#server").val());
//						  history.pushState(stateObj, "page 2", "?ip=" + $("#server").val());
						  setTimeout(function () {
							setPasswordforPrS();
						  },4000);									
						}
						else if ($("#server").val().includes("wss://") == true||$("#server").val().includes("uws://")){
						  privateSrvReturner();
						  window.core.disableIntegrityChecks(true);
						  core.connect($("#server").val());
						  $("#server-token").val($("#server").val());
//						  history.pushState(stateObj, "page 2", "?ip=" + $("#server").val());
						  setTimeout(function () {
							setPasswordforPrS();
						  },4000);									
						}						
						else{
//							var texture2=$('#server').val();
//							$('#server').val(texture2);
										
						  privateSrvReturner();
						  window.core.disableIntegrityChecks(true);
						  core.connect("ws://"+$("#server").val());
						  $("#server-token").val($("#server").val());
//						  history.pushState(stateObj, "page 2", "?ip=" + $("#server").val());
						  setTimeout(function () {
							setPasswordforPrS();
						  },4000);	
						}
					  }
                });
            });
            setTimeout(function() {
                adres();
            }, 5000);
            setTimeout(function() {
                adres();
            }, 7000);
            adres();

        })(window, window.jQuery);
    }
}, 2500);

setTimeout(function () {
setPasswordforPrS();
$('#region').prepend('<option value=":PrS" data-itr="PrS">Private Servers</option>');	
}, 6000);

setTimeout(function() {
//$("#ao2t-hud").show();
MC.onConnect2 = MC.onConnect;

MC.onConnect = joint([ MC.onConnect2, Universalchatfix ]);		


//Start of Universal tools
//    'use strict';
    var global = window;
    var my = {
        "name": "ⓐ",
//        "log": function(msg){ console.log(this.name + ":"+ msg); },
//		"log": function(msg){ toastr["success"](this.name + ":"+ msg); },		
		"log": function(msg){ 
		    if (~msg.indexOf("Received a command with an unknown name")) {
				toastr["success"]('<div class="toast-message"><span class="message-nick">'+this.name+': </span><span class="message-text">'+msg+'</span><a href="#" data-user-id="agar tool" class="mute-user ogicon-user-minus"></a> </div>');
				}
			else if (~msg.indexOf("load socket.io")) {
				toastr["warning"]('<div class="toast-message"><span class="message-nick">'+this.name+': </span><span class="message-text">'+msg+'</span><a href="#" data-user-id="agar tool" class="mute-user ogicon-user-minus"></a> </div>');
				//playSound($('#commandSound').val());
				} 
			else if (~msg.indexOf("minimap server")) {
				toastr["warning"]('<div class="toast-message"><span class="message-nick">'+this.name+': </span><span class="message-text">'+msg+'</span><a href="#" data-user-id="agar tool" class="mute-user ogicon-user-minus"></a> </div>');
				}
			else if (~msg.indexOf($('#nick').val()+':')) {
//				toastr["warning"]('<div class="toast-message"><span class="message-nick">'+this.name+': </span><span class="message-text">'+msg+'</span><a href="#" data-user-id="agar tool" class="mute-user ogicon-user-minus"></a> </div>');
				} 		
			else if (~msg.indexOf('[Agar Tool/Legend Mod]:')) {
//				toastr["warning"]('<div class="toast-message"><span class="message-nick">'+this.name+': </span><span class="message-text">'+msg+'</span><a href="#" data-user-id="agar tool" class="mute-user ogicon-user-minus"></a> </div>');
				} 					
			else if (~msg.indexOf('ɱ')) {
				msg.slice(1);
				toastr["warning"]('<div class="toast-message"><span class="message-nick">'+this.name+': </span><span class="message-text">'+msg+'</span><a href="#" data-user-id="agar tool" class="mute-user ogicon-user-minus"></a> </div>');
				playSound($('#commandSound').val());
				} 					
			else {
				toastr["success"]('<div class="toast-message"><span class="message-nick">'+this.name+': </span><span class="message-text">'+msg+'</span><a href="#" data-user-id="agar tool" class="mute-user ogicon-user-minus"></a> </div>');
				playSound($('#messageSound').val());}
			},
//        "tool_symbol": "Send text Universaly"
		"tool_symbol": ""
    };
    var stat = {
        "AgarToolVersion": 4,
        "AgarToolServer": "ws://minimap.agartool.io:8000",
        minimapBalls: {},
        "socketIoURL": "https://jimboy3100.github.io/ExampleScripts/socket-io.min.js",
        // ---- Legend Mod settings  -----
        "minimapNickFont": "700 11px Ubuntu",
        "minimapNickColor": "#ffffff",
        "minimapNickStrokeColor": "#000000",
        "minimapNickStrokeSize": 0x2,
        "minimapTop": 0x18,
        "minimapTeammatesSize": 5.5,
        //"minimapTeammatesColor": "#F03A17",
        //"minimapOffsetX": 0.5,
        //"minimapOffsetY": 0x18 + 9.5, // miniMapTop + 9.5
        "minimapOffsetX": 71,
        // -----  for Legend Mod Express  ----
        "mapSize": 14142, // ogario.mapSize,
        "mapOffset": 7071, // ogario.mapOffset,
        // -----  other  -----
        "pi2": 0x2 * Math.PI,
        "messageBoxBottom": ["82px", "40%"],
        "keyCodeEnter": 13, // Enter
        "keyCodeA": 65, // 'A'
        "keyCodeR": 82 // 'R'
    };
    var cfg= {}, cfg_org = {
        "user_show": true,
        "minimap_show": true,
        "tgar_prefix": "O",
        "tgar_color": "#8C81C7",
        "update_interval": 1000,
        "ogar_user": true,
        "ogar_prefix": "L.M",
        "lmsa_teamtop": false,
        "lmsa_chat": false,
        "chat_close": false,
        "chat_unpause": true,
        "chat_vcenter": false,
        "chat_alt": true,
        "chat_ctrlalt": true,
        "chat_ctrl": true,
        "skin_toggle_auto": false,
        "skin_toggle_interval": 10000
    };
    function pre_loop(){
        // At this point jQuery can not be used
        if(! document.getElementById("top5-hud")){
            my.pre_loop_timeout = (my.pre_loop_timeout || 1000) + 1000;
            setTimeout(pre_loop, my.pre_loop_timeout);
            my.log("wait for Legend Mod load");
            return;
        }
        // Just to be sure, another 1 sec wait
        setTimeout(initialize, 1000);
    }
    pre_loop();

    function initialize(){
//      $.extend(cfg, cfg_org, JSON.parse(GM_getValue("config", '{}')));
		$.extend(cfg, cfg_org, JSON.parse(my.storage_getValue("config",'{}')));		
        global.ao2t = {my:my, stat:stat, cfg:cfg};
        var local_style = '';
        local_style += '#ao2t-hud {';
        local_style +=     ' font-size: 80%; pointer-events: auto;';
        local_style += '}';
        local_style += '#ao2t-hud * {';
        local_style +=     ' user-select: auto!important;';
        local_style += '}';
        local_style += '#ao2t-cfg-dlg {';
        local_style +=     ' border-radius:0; font-size: 80%; padding: 2px 10px; position: fixed;';
        local_style +=     ' pointer-events: auto; background-image: url('+legbgpic+'); background-color: '+legbgcolor+' ; color: #ffffff;';
        local_style +=     ' overflow: hidden;';
        local_style += '}';
        local_style += '#ao2t-cfg-dlg * {';
        local_style +=     ' width: auto; user-select: auto!important; pointer-events: auto;';
        local_style +=     ' position: relative; float: initial;';
        //local_style +=     ' display: run-in;'; // NG
        local_style += '}';
        local_style += '#ao2t-cfg-dlg input {';
        local_style +=     ' background-color: rgba(0,0,0,0.4); color: #ffffff;';
        local_style += '}';
        $("head").append('<style>\n'+ local_style +'\n</style>');
        $("#top5-hud").append(''+
            '<div id="ao2t-hud"><span class="hud-main-color">Universal:'+
                 ' <span id="ao2t-capture">ⓐ</span>'+
                 ' <span id="ao2t-config">⚙</span></span>'+
//                 '<div id="ao2t-top5" style="padding-left: 1em;"></div>'+
				 '<div id="ao2t-top5" style="font-size: 14px;"></div>'+
            '</div>');
        $("#ao2t-capture").click(function(event){
//            my.log("capture_click");
            stat.capture = ! stat.capture;
            if(stat.capture){
                if(global.ogario){
		    $("#ao2t-capture").removeClass("disconnected").addClass("connected");
                    $("#ao2t-capture").text('🔙');
                }else{
                    $("#ao2t-capture").text('⚠');
                }
                my.capture_start();
            }else{
		$("#ao2t-capture").removeClass("connected").addClass("disconnected");
                $("#ao2t-capture").text('ⓐ');
                my.capture_end();
            }
        });
        $('#ao2t-capture').mouseenter(function() {
            $('#ao2t-capture').css('color', $("#hudTextColor").val());
            return clickedname = "YES"
        }).mouseleave(function() {
            $('#ao2t-capture').css('color', '');
        });
        $('#ao2t-config').mouseenter(function() {
            $('#ao2t-config').css('color', $("#hudTextColor").val());
            return clickedname = "YES"
        }).mouseleave(function() {
            $('#ao2t-config').css('color', '');
        });		
		
        $("#ao2t-config").click(my.config);
        // LMB-Mouse split correction (Do not separate by left click on button)
        if(cfg.lmsa_teamtop){
            //$(".team-top-menu").mousedown(function(){return false;});
            $("#top5-hud").mousedown(function(){return false;});
        }else{
            $("#ao2t-hud").mousedown(function(event){ return false;});
        }
        if(cfg.lmsa_chat){
            $("#message-box").mousedown(function(){return false;});
        }
        // --- chat close ---
        if(cfg.chat_close){
            $("#message-menu").append('<a href="#" id="ao2t-chat-close" style="float:right;">X</a>');
            $("#ao2t-chat-close").click(function(){
                my.chatClose();
            });
        }
        if(cfg.chat_vcenter){
            $("#message-box").css("bottom", stat.messageBoxBottom[1]);
        }
        $("#message").keydown(function(event){
            var modify = (event.altKey ? "a" : "")+
                (event.ctrlKey ? "c" : "")+
                (event.metaKey ? "m" : "")+
                (event.shiftKey ? "s" : "");
            if(event.keyCode === stat.keyCodeEnter){
                if(modify === "a" && cfg.chat_alt){
                    my.chatSend();
                    return false;
                }else if(modify === "ac" && cfg.chat_ctrlalt){
                    my.chatSend({"ogar":true});
                    return false;
                }else if(modify === "c" && cfg.chat_ctrl){
                    my.chatClose();
                    return false;
                }
            }
        });
        // --- skin toggle ---
        my.skinToggle_start();
    }
    my.capture_start = function(){
        // If not, add chat submit button
        if($("#ao2t-message").length){
            $("#ao2t-message").show(); // .prop('disabled', false);
            $("#ao2t-minimap").show();
        }else{
            my.capture_init();
        }
        // Connection
        stat.tag = $('#clantag').val();
        stat.nick = $('#nick').val();
        stat.token = $('#server-token').val();
        stat.ws = 'ws://live-arena-'+ stat.token +'.agar.io:80';
        my.connect();
        stat.update_timerid = setInterval(my.update, cfg.update_interval);
    };
    my.capture_end = function(){
        $("#ao2t-message").hide(); // .prop('disabled', true);
        $('#ao2t-top5').html('');
        $("#ao2t-minimap").hide();
        my.disconnect();
        clearInterval(stat.update_timerid);
        stat.update_timerid = null;
    };
    my.capture_init = function(){
//        $("#message-menu").append('<a href="#" id="ao2t-message" style="float:right;">'+ my.tool_symbol +'</a>');
		  $("#message-menu").prepend('<a href="#" id="ao2t-message" style="float:left;">'+ my.tool_symbol +'</a>');
//	  	$(".show-chat-emoticons.ogicon-smile").after('<a href="#" id="ao2t-message" style="float:right;">'+ my.tool_symbol +'</a>');
		 
        $("#ao2t-message").click(my.chatSend);
        // minimap
        var minimap = $("#minimap");
        var minimapWidth = minimap.attr('width');
        var minimapHeight = minimap.attr('height');
        minimap.before('<canvas id="ao2t-minimap"'+
                       ' style="position: absolute;"'+
                       ' width="'+ minimapWidth +'" height="'+ minimapHeight +'">');
        //stat.minimapOffsetX = stat.minimapOffsetY + minimapHeight - minimapWidth;
    };
    my.chatSend = function(flg_){
        var flg = flg_ || {};
        if(! stat.connected){
			if ($("#ao2t-capture").hasClass("connected")){
            global.toastr.error("L.M:->A.T: not connected");
            return;
			}
        }
        //var msg = $("#message").val();
		var msg = '[Agar Tool/Legend Mod]:' + $("#message").val();
		var msgLM=$("#message").val();
        if(msgLM.length){
            my.sendMinimapServerCommand({
                name: "chat",
//                nick: "LM: " + stat.nick,
//				nick: stat.nick,
				nick: $('#nick').val(),
                message: msg
            });
            if(flg.ogar){
                $(document).trigger(jQuery.Event('keydown',{ keyCode: stat.keyCodeEnter, which: stat.keyCodeEnter } ));
            }else{
                //$("#message-box").hide();
            }
        }
    };
    my.chatClose = function(){
        $("#message-box").css("display", "none");
        if(cfg.chat_unpause && $("#pause-hud").css("display") == "block"){ // Release during PAUSE
            $(document).trigger(jQuery.Event('keydown',{ keyCode: stat.keyCodeR, which: stat.keyCodeR } ));
            $(document).trigger(jQuery.Event('keyup',{ keyCode: stat.keyCodeR, which: stat.keyCodeR } ));
        }
    };
    my.update = function(){
        var ogarAlive = my.ogarIsAlive();
        if(ogarAlive != stat.alive){
            my.tgarAlive(ogarAlive);
        }
        if(stat.alive){
            my.tgarReposition();
        }
        my.ogarMinimapUpdate();
    };

    // -----  Configuration  -----
    my.config = function(){
//        my.log("config_click2");
        if(!($('#ao2t-cfg-dlg').length)){
            my.config_init();
        }
        my.cfg_load(cfg);
        $("#ao2t-cfg-dlg").show();
        $("#overlays").show();
    };
    my.config_init = function(){
        $("#overlays").append('<div id="ao2t-cfg-dlg"'+
            '  style="width:400px; height:450px; top:150px; left:300px; display: none;'+
            '">'+
              'Universal Chat tools'+
              '<div style="overflow: scroll; '+
                    'position: relative; top:1.5em; left:0.5em; right:0.5em; bottom:1.5em;">'+
                '<div id="ao2t-cfg-base">'+
                '</div>'+
              '</div><br><br>'+
              '&nbsp;<span id="ao2t-cfg-default" class="btn btn-primary">DEFAULT</span>'+
              '&nbsp;<span id="ao2t-cfg-ok" class="btn btn-success">OK</span>'+
              '&nbsp;<span id="ao2t-cfg-cancel" class="btn btn-danger">CANCEL</span>'+
            '</div>');
        $('#ao2t-cfg-base').append(''+
            '&nbsp;&nbsp;&nbsp;Update frequency [milliseconds]:<input type="text" data-ao2t-config="update_interval" style="width:6em;"/>'+
            '<br/>Agar Tool Obtained from'+
            '<br/>&nbsp;<label><input type="checkbox" data-ao2t-config="user_show"/>user list</label>'+
            '<br/>&nbsp;<label><input type="checkbox" data-ao2t-config="minimap_show"/>minimap</label>'+
              '&nbsp;Prefix:<input type="text" data-ao2t-config="tgar_prefix" style="width:4em;"/>'+
              '&nbsp;&nbsp;color:<input type="text" data-ao2t-config="tgar_color" style="width:6em;"/>'+
            //    '<span class="input-group-addon"><i id="tgar_color" style="background-color: rgb(0, 0, 0);"></i></span>'+
            '<br/>Send to Agar Tool'+
            '<br/>&nbsp;<label><input type="checkbox" data-ao2t-config="ogar_user"/>user info</label>'+
              '&nbsp;Prefix:<input type="text" data-ao2t-config="ogar_prefix" style="width:4em;"/>'+
            '<br/>LMB-Mouse split correction'+
            '<br/>&nbsp;<label><input type="checkbox" data-ao2t-config="lmsa_teamtop"/>Team top</label>'+
              '&nbsp;<label><input type="checkbox" data-ao2t-config="lmsa_chat"/>chat</label>'+
            '<br/>Chat option'+
              '<br/>&nbsp;<label><input type="checkbox" data-ao2t-config="chat_close"/>close</label>'+
                '&nbsp;<label><input type="checkbox" data-ao2t-config="chat_unpause"/>unpause</label>'+
                '&nbsp;<label><input type="checkbox" data-ao2t-config="chat_vcenter"/>vcenter</label>'+
              '<br/>&nbsp;<label><input type="checkbox" data-ao2t-config="chat_alt"/>Alt>T</label>'+
                '&nbsp;<label><input type="checkbox" data-ao2t-config="chat_ctrlalt"/>Ctrl+Alt>O+T</label>'+
                '&nbsp;<label><input type="checkbox" data-ao2t-config="chat_ctrl"/>Ctrl>Close</label>'+
            '<br/>Other'+
              '<br/>&nbsp;<label><input type="checkbox" data-ao2t-config="skin_toggle_auto"/>skin auto toggle</label>'+
              '&nbsp;&nbsp;&nbsp;Frequency [milliseconds]:<input type="text" data-ao2t-config="skin_toggle_interval" style="width:6em;"/>'+
            '<br/>&nbsp;&nbsp;* Changes will be reflected after restart'+
            '');
        $("#ao2t-cfg-default").click(function(){
            my.cfg_load(cfg_org);
        });
        $("#ao2t-cfg-ok").click(function(){
			if ($("#helloContainer").is(":visible")){
			      setTimeout(function() {
					showMenu();
				   }, 100);
			};
		cfg = my.cfg_save();
//            GM_setValue("config", JSON.stringify(cfg));
			my.storage_setValue("config", JSON.stringify(cfg));
            my.config_cancel();
            $("#message-box").css("bottom", stat.messageBoxBottom[cfg.chat_vcenter ? 1: 0]);
            my.skinToggle_start();
		
         });
        $("#ao2t-cfg-cancel").click(function(){
			if ($("#helloContainer").is(":visible")){
			      setTimeout(function() {
					showMenu();
				   }, 100);
			};
			my.config_cancel();			
        });
        my.config_cancel = function(){
            $("#overlays").hide();
            $("#ao2t-cfg-dlg").hide();
        };
        //$("#tgar_color").colorpicker({'format': 'hex'}).on('changeColor.colorpicker', function(event){
        //    var id = event.target.id;
        //    $('[data-ao2t-config="'+ id +'"]').val(event.color.toHex());
        //    event.target.style.backgroundColor = event.color.toRGB();
        //});
    };
    // -----  skin toggle  -----
    my.skinToggle_start = function(){
        if(stat.skinToggle_timerid){
            clearInterval(stat.skinToggle_timerid);
            delete stat.skinToggle_timerid;
        }
        if(cfg.skin_toggle_auto && cfg.skin_toggle_interval > 0){
            stat.skinToggle_timerid = setInterval(my.skinToggle_update, cfg.skin_toggle_interval);
        }
    };
    my.skinToggle_update = function(){
        //my.log("skinToggle_update in");
        // --- check Legend Mod.v3 mode ---
        if(global.ogario && global.ogario.customSkins && global.ogario.vanillaSkins){
            //my.log("skinToggle_update hasBoth");
            stat.skinToggle_hasBoth = true;
        }
        my.skinToggle_update_sub();
        if(stat.skinToggle_hasBoth && global.ogario.customSkins && ! global.ogario.vanillaSkins){
            //my.log("skinToggle_update retry");
            my.skinToggle_update_sub();
        }
    };
    my.skinToggle_update_sub = function(){
        $(document).trigger(jQuery.Event('keydown',{ keyCode: stat.keyCodeA, which: stat.keyCodeA } ));
        $(document).trigger(jQuery.Event('keyup',{ keyCode: stat.keyCodeA, which: stat.keyCodeA } ));
    };
    // =====  Agar Tool Communication processing / connection  =====
    my.connect = function(){
        my.disconnect();
        if(! global.io){
            my.log("load socket.io");
            return loadScript(stat.socketIoURL, my.connect);
        }
        var grab_opt = {
            query: "version=" + encodeURIComponent(stat.AgarToolVersion) +
                 "&server=" + encodeURIComponent(stat.ws)
        };
        stat.grab_socket = io.connect(stat.AgarToolServer, grab_opt);
        stat.grab_socket.on("info", function(minimap_info){
            stat.minimap_info = minimap_info;
            my.minimap_connect();
        });
    };
    my.disconnect = function(){
        if(stat.connected && stat.alive){
            my.tgarAlive(false);
        }
        stat.connected = false;
        stat.alive = false;
        var save_grab_socket = stat.grab_socket;
        var save_minimap_socket = stat.minimap_socket;
        stat.grab_socket = null;
        stat.minimap_socket = null;
        if(save_grab_socket){
            save_grab_socket.disconnect();
        }
        if(save_minimap_socket){
            save_minimap_socket.disconnect();
        }
    };
	my.minimap_connect = function(){
		if ($("#ao2t-hud").hasClass("OnceUsed")==false){		
//		toastr["warning"]('<b>[SERVER]: </b>Legend Mod and Agar Tool successfully connected. <br>Use {Send Text Universaly} button on chat box to send to Agar.io Tool');
        $("#ao2t-hud").addClass("OnceUsed");
		}		
		my.log("minimap server="+ stat.minimap_info.minimapServer);
        my.resetMinimap();
        var minimap_opt = {
            reconnection: !1,
            query: "server=" + encodeURIComponent(stat.minimap_info.agarServer)+
               "&tag=" + encodeURIComponent(stat.tag)
        };
        stat.minimap_socket = io.connect(stat.minimap_info.minimapServer, minimap_opt);
        stat.minimap_socket.on("command", my.minimap_command);
        stat.minimap_socket.on("connect", function(){
            stat.connected = true;
            //if(stat.alive){
            //    my.sendMinimapServerCommand({
            //        name: "alive",
            //        playerName: stat.nick
            //    });
            //}
        });
        stat.minimap_socket.on("disconnect", function(){
            stat.minimap_socket = null;
            my.minimap_disconnect();
        });
        stat.minimap_socket.on("connect_error", function(){
            stat.minimap_socket = null;
            my.minimap_disconnect();
        });
    };
	my.minimap_disconnect = function(){
        stat.connected = false;
        var save_grab_socket = stat.grab_socket;
        var save_minimap_socket = stat.minimap_socket;
        stat.grab_socket = null;
        stat.minimap_socket = null;
        if(save_grab_socket){
            save_grab_socket.disconnect();
        }
        if(save_minimap_socket){
            save_minimap_socket.disconnect();
        }
    };
    // =====  Agar Tool Communication processing / processing  =====
    my.minimap_command = function(cmd){
        if (void 0 === cmd.name){
            return;
        }
        //my.log("cmd="+ cmd.name);
        switch (cmd.name){
            case "add":
                if(! cmd.playerName){
                    cmd.playerName = "An unnamed cell";
                }
                my.addBallToMinimap(!1, cmd.socketID, cmd.playerName, cmd.x, cmd.y, cfg.tgar_color, !0);
                break;
            case "remove":
                my.removeBallFromMinimap(cmd.socketID);
                break;
            case "position":
                my.moveBallOnMinimap(cmd.socketID, cmd.x, cmd.y);
                break;
            case "reset":
                my.resetMinimap();
                break;
            case "chat":
				//console.log(cmd);
                if(! cmd.playerName){
                    cmd.playerName = "An unnamed cell";
                }
//                my.log("chat:"+ cmd.playerName +":"+ cmd.message);
                my.log(""+ cmd.playerName +": "+ cmd.message);				
                my.ogarChatAdd(cmd.playerName, cmd.message);
                break;
            case "command":
				//console.log(cmd);
                if(! cmd.playerName){
                    cmd.playerName = "An unnamed cell";
                }
//                my.log("chat:"+ cmd.playerName +":"+ cmd.message);
                my.log("ɱ"+ cmd.playerName +": "+ cmd.message);						
                my.ogarChatAdd(cmd.playerName, cmd.message);
                break;				
            default:
               // my.log("Received a command with an unknown name: " + cmd.name); console.log(Object.getOwnPropertyNames(cmd));
				my.log("Received a command with an unknown name: " + cmd.name);
        }
    };
    my.sendMinimapServerCommand = function(e){
        if(stat.minimap_socket && stat.minimap_socket.connected){
            stat.minimap_socket.emit("command", e);
            return true;
        }
        return false;
    };
    my.resetMinimap = function(){
        //$("#messageTableTemp").empty(), $("#messageTableComplete").empty();
        for (var e in stat.minimapBalls){
            if(! stat.minimapBalls[e].isDefault){
                delete stat.minimapBalls[e];
            }
        }
        // test
        //my.addBallToMinimap(true, "a", "0x0", 0, 0, "#FF0000", !0);
        //my.addBallToMinimap(true, "b", "UL3000", -3000, -3000, "#FF0000", !0);
        //my.addBallToMinimap(true, "c", "UR3000", -3000,  3000, "#FF0000", !0);
        //my.addBallToMinimap(true, "d", "DR3000",  3000,  3000, "#FF0000", !0);
        //my.addBallToMinimap(true, "e", "DL3000",  3000, -3000, "#FF0000", !0);
        //my.addBallToMinimap(true, "f", "TL", -7000,  -7000, "#FF0000", !0);
        //my.addBallToMinimap(true, "g", "BR",  7000,   7000, "#FF0000", !0);
    };
    my.addBallToMinimap = function(isDefault, id, name, x, y, color, visible){
        stat.minimapBalls[id] = new MinimapBall(isDefault, name, x, y, color, visible);
    };
    my.removeBallFromMinimap = function (id){
        if(stat.minimapBalls[id]){
            delete stat.minimapBalls[id];
        }
    };
    my.moveBallOnMinimap = function(id, x, y){
        if(stat.minimapBalls[id]){
            stat.minimapBalls[id].x = x;
            stat.minimapBalls[id].y = y;
        }
    };

    my.tgarAlive = function(alive){
        stat.alive = alive;
        if(cfg.ogar_user){
            //my.log("alive -> "+ stat.alive +" name="+ cfg.ogar_prefix + stat.nick);
            if(stat.alive){
                stat.alive = my.sendMinimapServerCommand({
                    name: "alive",
                    playerName: cfg.ogar_prefix + stat.nick
                });
                //my.log("alive >>"+ stat.alive);
            }else{
                my.sendMinimapServerCommand({
                    name: "dead"
                });
            }
        }
    };
    my.tgarReposition = function(){
        if(cfg.ogar_user && global.ogario){
            my.sendMinimapServerCommand({
                name: "position",
                x: ogario.playerX + ogario.mapOffsetX,
                y: ogario.playerY + ogario.mapOffsetY
            });
        }
    };

    // =====  Process Legend Mod  ======
    my.ogarChatAdd = function(nick, msg){
        var time_txt = new Date().toTimeString().replace(/^(\d{2}:\d{2}).*/, '$1');
        var user_icon = my.tool_symbol;
        var chat_html = '<div class="message">'+
            '<span class="message-time">['+ time_txt +'] </span>'+
            //user_icon +
            //'<span class="message-nick">'+ escapeHtml(nick) +': </span>'+
            '<span style="color:'+ cfg.tgar_color +'; font-weight:700;">'+
                user_icon +' '+ escapeHtml(nick) +'</span>: '+
            '<span class="message-text">' + escapeHtml(msg) + '</span>'+
            '</div>';
        $("#chat-box").append(chat_html);
        $("#chat-box").perfectScrollbar('update');
        $('#chat-box').animate({
            'scrollTop': $("#chat-box").prop("scrollHeight")
        }, 0x1f4);
    };
    my.ogarMinimapUpdate = function(){
        var minimap_elem = document.getElementById("ao2t-minimap");
        var minimapWidth = minimap_elem.width;
        var minimapHeight = minimap_elem.height;
        var minimapMulti = (minimapWidth - 0x12) / my.ogarGetMapSize();
        var mapOffset = my.ogarGetMapOffset();
        //var mapOffsetX = ogario.mapOffset - ogario.mapOffsetX;
        //var mapOffsetY = ogario.mapOffset - ogario.mapOffsetY;
        stat.minimapOffsetX = 0x12 / 2;
        stat.minimapOffsetY = stat.minimapOffsetX + (minimapHeight - minimapWidth);
        var mapOffsetX = stat.minimapOffsetX;
        var mapOffsetY = stat.minimapOffsetY;
        var mapOffsetT = -(0x2 * stat.minimapTeammatesSize + 2);
        var ctx = minimap_elem.getContext('2d');
        ctx.clearRect(0, 0, minimapWidth, minimapHeight);
        ctx.font = stat.minimapNickFont;
        var user_txt = '';
        var sep = '1. ';
        var keys = Object.keys(stat.minimapBalls).sort();
        if(keys.length === 0){
            user_txt = "no tgar user";
        }
		var count=2;
        for(var key; (key = keys.shift()); ){
			
            var ball = stat.minimapBalls[key];
			
            user_txt += sep + escapeHtml(ball.name);
//			user_txt += count + ": ";
            sep = '<br/>'+ count + ". ";
//			user_txt += count + ": ";
			count++;
            if(cfg.minimap_show){
                var name = cfg.tgar_prefix + ball.name;
                var mapX = (ball.x + mapOffset) * minimapMulti + mapOffsetX;
                var mapY = (ball.y + mapOffset) * minimapMulti + mapOffsetY;
                ctx.textAlign = 'center';
                ctx.lineWidth = stat.minimapNickStrokeSize;
                ctx.strokeStyle = stat.minimapNickStrokeColor;
                ctx.strokeText(name, mapX, mapY + mapOffsetT);
                ctx.fillStyle = cfg.tgar_color; // stat.minimapNickColor
                ctx.fillText(name, mapX, mapY + mapOffsetT);
                ctx.beginPath();
                ctx.arc(mapX, mapY, stat.minimapTeammatesSize, 0x0, stat.pi2, !0x1);
                ctx.closePath();
                ctx.fillStyle = ball.color;
                ctx.fill();
            }
        }
        if(cfg.user_show){
            $('#ao2t-top5').html(user_txt);
        }
    };
    // --- for Legend Mod Express ----
    my.ogarIsAlive = function(){
        return global.ogario ? global.ogario.play : false;
    };
    my.ogarGetMapSize = function(){
        return global.ogario ? global.ogario.mapSize : stat.mapSize;
    };
    my.ogarGetMapOffset = function(){
        return global.ogario ? global.ogario.mapOffset : stat.mapOffset;
    };

    // =====  Other processing ======
    my.cfg_save = function(){
        var cfg_new = {};
        $('[data-ao2t-config]').each(function(){
            var elem = $(this);
            var type = elem.prop('type');
            var name = elem.attr('data-ao2t-config');
            var value;
            if(type === "checkbox"){
                value = elem.prop('checked');
            }else{
                value = $(this).val();
            }
            cfg_new[name] = value;
        });
        return cfg_new;
    };
    my.cfg_load = function(cfg_new){
        $('[data-ao2t-config]').each(function(){
            var elem = $(this);
            var type = elem.prop('type');
            var name = elem.attr('data-ao2t-config');
            if(cfg_new.hasOwnProperty(name)){
                var value = cfg_new[name];
                if(type === "checkbox"){
                    elem.prop('checked', value);
                }else{
                    $(this).val(value);
                }
            }
        });
    };
	my.storage_getValue = function(name, defval_){
		return	global.localStorage[my.name +"_"+ name] || defval_;
	};
	my.storage_setValue = function(name, value){
		global.localStorage[my.name +"_"+ name] = value;
	};	
	function loadScript(url, callback){
		var script = document.createElement("script");
		script.type = "text/javascript";
		script.src = url;
		if(typeof callback !== 'undefined'){
			script.onload = callback;
		}
		document.head.appendChild(script);
	}
    function escapeHtml(e) {
        return e.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }
    function MinimapBall(isDefault, name, x, y, color, visible) {
        this.isDefault = isDefault;
        this.name = name;
        this.x = x;
        this.y = y;
        this.lastX = x;
        this.lastY = y;
        this.color = color;
        this.visible = visible;
    }
//End of Universal tools



}, 1600);
setTimeout(function() {
$('#ao2t-capture').click();

$('#message').keydown(function(e){
    if (e.keyCode === 13) { // If Enter key pressed
		
		$('#ao2t-message').click(); 
//		$('#message').val("");		
    }
});	
}, 4000);	
	
setTimeout(function() {

        //	$("body").show();	
        MC.setQuality($('#quality').val());
        //	history.pushState(stateObj, "page 2", "#" + currentToken );
        if (searchSip != null && privateSrv==null) {
//            $("#cur-tk-hud").fadeTo('fast', 0.2).fadeTo('fast', 1.0);
            if (region == null) {
//                $("#cur-tk-hud").html('<i class="fa fa-lock" aria-hidden="true"></i>' + "IP:" + searchSip);
                //$("#cur-tk-hud").html('<i class="fa fa-lock" aria-hidden="true"></i>'+"IP:" + searchSip).attr("style", "opacity: 0;");
                setTimeout(function() {
                    history.pushState(stateObj, "page 2", "?sip=" + searchSip);
                }, 5000);
            } else {

//                $("#cur-tk-hud").html('<i class="fa fa-lock" aria-hidden="true"></i>' + "IP:" + searchSip + "<br>Region:" + region + " Mode" + modebetter2).attr("style", "opacity: 0;");
                //	$("#cur-tk-hud").html('<i class="fa fa-lock" aria-hidden="true"></i>'+"IP:" + searchSip + "<br>Region:" + region + " Mode" + modebetter2 ).attr("style", "opacity: 0;");
                setTimeout(function() {
                    history.pushState(stateObj, "page 2", "?sip=" + searchSip + "&?r=" + region + "&?m=" + realmode);
                }, 5000);
            }
        } else if (searchSip == null && privateSrv==null) {
            if (realmode != ":party") {
                history.pushState(stateObj, "page 2", "?sip=" + currentIP + "&?r=" + MC.getRegion() + "&?m=" + realmode);
            }
        }	
	
		
        $("#server-ws").on('change', function() {
			adres();
            setTimeout(function() {
                realmode = getGameMode();
                if (searchSip == null) {
                    if (realmode != ":party") {
                        history.pushState(stateObj, "page 2", "?sip=" + currentIP + "&?r=" + MC.getRegion() + "&?m=" + realmode);
                    }
                    else if (realmode == ":party") {
                        window.history.pushState(null, null, window.location.pathname);
                        history.pushState(stateObj, "page 2", "#" + MC.getPartyToken());
                    }
                }
                MC.setQuality($('#quality').val());
                return realmode;
            }, 1000);
            setTimeout(function() {
                MC.setQuality($('#quality').val());
            }, 2000);
            setTimeout(function() {
                MC.setQuality($('#quality').val());
            }, 3000);
            setTimeout(function() {
                MC.setQuality($('#quality').val());
            }, 4000);
            setTimeout(function() {
                MC.setQuality($('#quality').val());
            }, 5000);
            setTimeout(function() {
                MC.setQuality($('#quality').val());
            }, 6000);
            setTimeout(function() {
                MC.setQuality($('#quality').val());
            }, 7000);
            setTimeout(function() {
                MC.setQuality($('#quality').val());
            }, 8000);
            setTimeout(function() {
                MC.setQuality($('#quality').val());
                lastIP = currentIP;
                localStorage.setItem("lastIP", lastIP);
            }, 10000);
        });
    }, //5000
    9000); //9000
// fix party stuff
//  	THIS COMMMAND IS IMPORTANT, DISABLE FOR INGAME COMMUNICATION
//  	$('#gamemode').on('change', function () {
//	if (this.value == ":party") { $("#create-party-btn").click(); }}
//		console.log( "Legend mod ready!" );});$('#gamemode option[value=":party"]').prop('selected', 'selected').change();
//		history.pushState(stateObj, "page 2", "?r=" + MC.getRegion() + "&m=" + getGameMode() + "&search=ws://" + currentIP);
var minbtext2 = minbtext;
var minbtext3 = minbtext;

if (minbtext == null || minbtext == "") {
    minbtext = "Legend mod/Locked";
    minbtext2 = "Legend mod";
	minbtext3 = "Legend mod/Private";
}
setTimeoutLateResponse();

function init(modVersion) {
//Fix ZOOM
//	ogario.autoZoom=true; 
	$("#tcm-videoskin").hide();
	//Fix Login Bug
	if (modVersion=="2.8"){
		$(".btn.btn-warning.btn-login-play").click(function() {
		toggleSocialLogin();
		});	
	}
    //var connectedbanner=0;
	$("#gamemode").prop('disabled', false);
	$("#region").prop('disabled', false);   

    if (timesopened != null) {
        timesopened++;
        localStorage.setItem("timesopened", timesopened);
    } else if (timesopened == null) {
        localStorage.setItem("timesopened", "0");
    }

    setTimeout(function() {
        document.title = "Legend mod v" + modVersion;
        //document.getElementById("import-settings").value="jim";
        // change buttons styles
        /*	
        	$('#gamemode').before('<select id="gamemode2" class="form-control" required="" data-original-title="" title="" style="width: 32%;  display: inline-block; margin-left: 10px; margin-top: 6px">'+
        	'<option value="" data-itr="page_gamemode_ffa">FFA</option>'+
        	'<option value=":teams" data-itr="page_gamemode_teams">Teams</option>'+
        	'<option value=":experimental" data-itr="page_gamemode_experimental">Experimental</option>'+
        	'<option value=":party" data-itr="page_party">Party Mode</option>'+
        	'</select>');
        	$('#gamemode').hide();
        	$('#gamemode2').change(function(){
        	if ($('#gamemode2').val()==":teams"){ setTimeout(function (){ ogario.gameMode=":teams";adres();appendLog(getLeaderboard());
        		$('#gamemode2').one("change", function(){
        		toastr["info"]("Wait 6 seconds", "", { timeOut: 4000, extendedTimeOut: 2000 }).css("width", "200px");
        		oldteammode=$('#gamemode2').val(); $("#create-party-btn-2").click();setTimeout(function (){MC.setGameMode(oldteammode);adres();appendLog(getLeaderboard());},6000);
        		return false;
        		});
        		},3000);}
        	MC.setGameMode($('#gamemode2').val());
        	adres();
        	});		*/			
			//For the Setting DoubleSplitRange
		$('.options-box.helpersGroup').append('<label><input type="checkbox" id="DoubleSplitRange" class="js-switch" data-switchery="true" style="display: none;"> Double Spilit Range</label>');
	//	$('.options-box.helpersGroup').append('<label><input type="checkbox" id="DoubleSplitRange" class="js-switch" data-switchery="true" checked style="display: none;"> Double Spilit Range</label>');
		var elemLegendSwitch = document.querySelector('#DoubleSplitRange');
		var ogarioswitchbackcolor=$("input#export-ogarioThemeSettings.js-switch").next().css( "background-color" );
		var DoubleSplitRange = new Switchery(elemLegendSwitch, { size: 'small', color: ogarioswitchbackcolor, jackColor: 'rgb(250, 250, 250)' });
		
		$("#DoubleSplitRange").click(function() {
			if (DoubleSplitRange.isChecked()) {
				window.ogario.customDraw=window.ogario.save_customDraw2;
				localStorage.setItem("DoubleSplitRangeSaved", true);
			} else {				
				window.ogario.customDraw=window.ogario.save_customDraw;
				localStorage.setItem("DoubleSplitRangeSaved", false);
			}
		});		
		$('.options-box.chatGroup').append('<label><input type="checkbox" id="UniversalChat" class="js-switch" data-switchery="true" checked style="display: none;"> Universal Chat</input></label>');
		var elemLegendSwitch = document.querySelector('#UniversalChat');
		var ogarioswitchbackcolor=$("input#export-ogarioThemeSettings.js-switch").next().css( "background-color" );
		var UniversalChat = new Switchery(elemLegendSwitch, { size: 'small', color: ogarioswitchbackcolor, jackColor: 'rgb(250, 250, 250)' });

		$("#UniversalChat").click(function() {
			if (UniversalChat.isChecked()) {
				$("#ao2t-hud").show();
				localStorage.setItem("UniversalChatSaved", true);
					if ($("#ao2t-capture").hasClass("disconnected")){
					$("#ao2t-capture").click();
				}				
			} else {				
				$("#ao2t-hud").hide();
				localStorage.setItem("UniversalChatSaved", false);
					if ($("#ao2t-capture").hasClass("connected")){
					$("#ao2t-capture").click();
				}
			}
		});			
		
        $("button:contains('Spectate')").html('<span class="glyphicon glyphicon-globe"></span>').attr('data-toggle', "tooltip").prop('title', 'Spectate');
        $("button:contains('Logout')").html('<span class="glyphicon glyphicon-off"></span>').attr('data-toggle', "tooltip").prop('title', 'Logout');
        $("button:contains('Copy')").removeClass("btn-info").addClass("btn-link");

        $("#create-party-btn-2").html('<span class="glyphicon glyphicon-plus"></span>');
        $("#create-party-btn-2").attr('data-toggle', "tooltip").prop('title', "Create party");

        $("#join-party-btn").html('<span class="glyphicon glyphicon-save"></span>').attr('data-toggle', "tooltip").prop('title', "Join party").attr("style", "width: 49% !important; float: right;");
		
        //backgroud div
        $("body").prepend('<div id="backgroundFade" style="width: 100%; height: 100%; position: absolute; background: black; z-index: 100; opacity: 0.6; display: none;"></div>');

        $("#overlays").css("z-index", 100);

        $("#overlays-hud").prepend('<div id="statsInfo" class="main-color" style="display: none;font-size: 13px;margin-top: 3px;float: left;font-weight: 700;background-color: rgba(0, 0, 0, 0.2);padding: 3px;border-radius: 4px;width: 65%;height: 24px;z-index: 15;margin: auto;top: 0px;right: 0px;left: 0px;bottom: 85px;position: fixed;pointer-events: auto;color: #ffffff;"><p style="float: left;margin-left: 10px;"><i class="fa fa-search retro"></i><span id="notesRegion">Region: </span><span id="currentRegion" data-toggle="tooltip" data-placement="top" data-original-title="The region you are searching"></span></p><p style="float: right;margin-right: 225px;"><span id="notesServer">Servers: </span><span id="numServers"></span> (<span id="pps"></span> <span data-toggle="tooltip" data-placement="top" data-original-title="Players per server">PPS</span>)</p><p style="margin-left: 245px;"><span id="notesPlayers">Players: </span><span id="numPlayers"></span> / <span id="totalPlayers"  data-toggle="tooltip" data-placement="top" data-original-title="Total players online"></span></p></div>' +
            '<div id="searchHud" class="hud" style="width: 65%; height: 60px; z-index: 15; margin: auto; top: 0; right: 0; left: 0; bottom: 0; position: fixed;">' +
            '<div id="" style="margin-top: 10px;">' +
            '<input id="searchInput" class="form-control" title="" placeholder="Enter friend\'s token, IP, leaderboard, name or clan tag..." style="margin-bottom: 10px;float: left;width: 80% !important;text-align: center;">' +
            '<button id="searchBtn" class="btn btn-copy-token copy-party-token btn-primary" data-toggle="tooltip" data-placement="bottom" data-original-title="Cancel search" style="margin-bottom:10px;width: 15%;"><span id="searchSpan" class="glyphicon glyphicon-search"></span></button>' +
            '<button id="closeBtn" class="btn btn-copy-token copy-party-token" data-toggle="tooltip" style="color: #ffffff;margin-bottom:10px;width: 10%; background-color: transparent;" data-placement="right" data-original-title="Close" title=""><span class="glyphicon glyphicon-remove-circle"></span></button>' +
            '</div></div>'
        );

        $("#statsInfo").before('<div id="notes" class="main-color" style="display:none;font-size: 13px;float: left;font-weight: 700;border-radius: 4px;width: 65%;height: 147px;z-index: 15;margin: auto;top: 0px;right: 0px;left: 0px;bottom: 400px;position: fixed;pointer-events: auto;color: rgb(255, 255, 255);padding: 10px;background-color: rgba(0, 0, 0, 0.2);"><h5 id="notesaveforlater" class="main-color text-center" style="margin-top: 0px;">Save for later</h5>' +
            '<input id="note1" class="form-control main-color note" style="background: transparent;color: lightgrey;  width: 25%;float:left; border: none; border-bottom: 1px solid; border-color: darkgrey; margin-right: 7px; text-align: center;">' +
            '<input id="note2" class="form-control main-color note" style="background: transparent; color: lightgrey; width: 24%; float: left; border: none; border-bottom: 1px solid; margin-left: 0px; margin-right: 7px; text-align: center; border-color: darkgrey;">' +
            '<input id="note3" class="form-control main-color note" style="background: transparent; width: 49%; border: none; border-bottom: 1px solid; margin-left: 10px; text-align: center; border-color: darkgrey;">' +
            '<input id="note4" class="form-control main-color note" style="background: transparent; color: lightgrey; width: 25%; float: left; border: none; border-bottom: 1px solid; margin-right: 7px; text-align: center; border-color: darkgrey;">' +
            '<input id="note5" class="form-control main-color note" style="background: transparent; color: lightgrey; width: 24%; float: left; border: none; border-bottom: 1px solid; margin-left: 0px; margin-right: 7px; text-align: center; border-color: darkgrey;">' +
            '<input id="note6" class="form-control main-color note" style="background: transparent; color: lightgrey; width: 49%; border: none; border-bottom: 1px solid; margin-left: 10px; text-align: center; border-color: darkgrey;">' +
            '<input id="note7" class="form-control main-color note" style="background: transparent; color: lightgrey; border: none; border-bottom: 1px solid; text-align: center; border-color: darkgrey;">' +
            '</div>');

        $(".menu-tabs").children().attr("style", "width: 14.27%;");
        $(".menu-tabs>:nth-child(2)").after('<li class="legend-tab" style="width: 14.27%; height: 100%;" data-toggle="tooltip" data-original-title="API" data-placement="top"><a style="margin-top: 2px; height: 100%;" onclick="$(\'#main-menu\').children(\'div\').hide(); $(\'.menu-tabs\').children(\'li\').removeClass(\'active\'); $(\'.menu-tabs\').children(\'li\').children(\'a\').removeClass(\'active\'); $(\'#legend\').fadeIn(); $(this).addClass(\'active\'); $(this).parent().addClass(\'active\');" href="javascript:void(0);" class="fa fa-puzzle-piece fa-lg"></a></li>');
        //  $(".menu-tabs>:nth-child(2)").after('<li class="legend-tab" style="width: 14.27%; height: 100%;" data-toggle="tooltip" data-original-title="Tools" data-placement="top"><a style="margin-top: 2px; height: 100%;" onclick="$(\'#main-menu\').children(\'div\').hide(); $(\'.menu-tabs\').children(\'li\').removeClass(\'active\'); $(\'.menu-tabs\').children(\'li\').children(\'a\').removeClass(\'active\'); $(\'#legend\').fadeIn(); $(this).addClass(\'active\'); $(this).parent().addClass(\'active\'); $(\'#helloContainer\').attr(\'style\',\'transform: translate(-50%, 0%) scale(1); top: 150px;\')" href="javascript:void(0);" class="fa fa-puzzle-piece fa-lg"></a></li>');
        //	$(".menu-tabs").children().last().before('<li class="legend-tab" style="width: 14.27%; height: 100%;" data-toggle="tooltip" data-original-title="Tools" data-placement="top"><a style="height: 100%;" onclick="$(\'#main-menu\').children(\'div\').hide(); $(\'.menu-tabs\').children(\'li\').removeClass(\'active\'); $(\'.menu-tabs\').children(\'li\').children(\'a\').removeClass(\'active\'); $(\'#legend\').fadeIn(); $(this).addClass(\'active\'); $(this).parent().addClass(\'active\'); $(\'#helloContainer\').attr(\'style\',\'transform: translate(-50%, 0%) scale(1); top: 207px;\')" href="javascript:void(0);" class="fa fa-cogs"></a></li>');
        $("#main-menu>#profile").after('<div id="legend" class="menu-panel"><div class="agario-panel legend-panel">' + //<h5 class="menu-main-color">Main Tools</h5>
            //											'<button id="IPBtn" type="button" class="btn btn-sm btn-info" data-toggle="button" aria-pressed="false" autocomplete="off" style="margin-top: 2px; width: 49.5%; border-color: darkslategrey; margin-right: 0.5%;"><i class="fa fa-trademark"></i>Show Connector</button>' +
            '<button id="SHOSHOBtn" type="button" class="btn btn-sm btn-warning" data-toggle="button" aria-pressed="false" autocomplete="off" style="margin-top: 2px; width: 49.5%; border-color: darkslategrey; margin-right: 0.5%;"><i class="fa fa-puzzle-piece"></i>' + Premadeletter42 + '</button>' +
            '<button id="XPBtn" type="button" class="btn btn-sm btn-warning" data-toggle="button" aria-pressed="false" autocomplete="off" style="margin-top: 2px; width: 49.5%; border-color: darkslategrey; margin-left: 0.5%;"><i class="fa fa-gamepad"></i>' + Premadeletter44 + '</button>' +
            //                                          '<button id="TIMEBtn" type="button" class="btn btn-sm btn-info" data-toggle="button" aria-pressed="false" autocomplete="off" style="margin-top: 2px; width: 49.5%; border-color: darkslategrey; margin-right: 0.5%;"><i class="fa fa-clock-o"></i>' + Premadeletter46 + '</button>' +
            //											'<button id="MAINBBtn" type="button" class="btn btn-sm btn-info" data-toggle="button" aria-pressed="false" autocomplete="off" style="margin-top: 2px; width: 49.5%; border-color: darkslategrey; margin-right: 0.5%;"><i class="fa fa-bars"></i>Show Main Banner</button>' +
                                                        '<button id="MAINBTBtn" type="button" class="btn btn-sm btn-warning" data-toggle="button" aria-pressed="false" autocomplete="off" style="margin-top: 2px; width: 49.5%; border-color: darkslategrey; margin-right: 0.5%;"><i class="fa fa-minus"></i>' + Premadeletter45a + '</button>' +
            											'<button id="AnimatedSkinBtn" type="button" class="btn btn-sm btn-warning" data-toggle="button" aria-pressed="false" autocomplete="off" style="margin-top: 2px; width: 49.5%; border-color: darkslategrey; margin-left: 0.5%;"><i class="fa fa-grav"></i>' + Premadeletter46 + '</button>' +
            //											'<button id="RotationBtn" type="button" class="btn btn-sm btn-info" data-toggle="button" aria-pressed="false" autocomplete="off" style="margin-top: 2px; width: 49.5%; border-color: darkslategrey; margin-left: 0.5%;"><i class="fa fa-repeat"></i>Show Rotation Btns</button>' +
            '<button id="HideAllBthn" type="button" class="btn btn-sm btn-danger" data-toggle="button" aria-pressed="false" autocomplete="off" data-toggle="tooltip" data-placement="right" data-original-title="Temporarily Hide/Show Everything. Function for Youtubers" style="margin-top: 2px; width: 49.5%; border-color: darkslategrey; margin-right: 0.5%;"><i class="fa fa-exclamation-triangle"></i>' + Premadeletter49 + '</button>' +
            '<button id="TIMEcalBtn" type="button" class="btn btn-sm btn-warning" data-toggle="button" aria-pressed="false" autocomplete="off" style="margin-top: 2px; width: 49.5%; border-color: darkslategrey; margin-left: 0.5%;"><i class="fa fa-calculator"></i>' + Premadeletter50 + '</button>' +
            //											'<button id="copyGameNames" type="button" class="btn btn-sm btn-warning" data-toggle="button" aria-pressed="false" autocomplete="off" style="margin-top: 2px; width: 49.5%; border-color: darkslategrey; margin-left: 0.5%; display: none;"><i class="fa fa-scissors"></i>' + Premadeletter52 + '</button>' +
            '<button id="autoCoinBtn" type="button" class="btn btn-sm btn-warning" data-toggle="button" aria-pressed="false" autocomplete="off" style="margin-top: 2px; width: 49.5%; border-color: darkslategrey; margin-right: 0.5%;"><i class="fa fa-clock-o"></i>' + Premadeletter53 + '</button>' +
            //											'<button id="autoRespawnBtn" type="button" class="btn btn-sm btn-warning" data-toggle="button" aria-pressed="false" autocomplete="off" data-original-title="" title="" style="margin-top: 2px; width: 49.5%; border-color: darkslategrey; margin-left: 0.5%;"><i class="fa fa-flash"></i> Auto respawn</button>' +
            '<button id="troll1Btn" type="button" class="btn btn-sm btn-warning" data-toggle="button" aria-pressed="false" autocomplete="off" data-original-title="" title="" style="margin-top: 2px; width: 49.5%; border-color: darkslategrey; margin-left: 0.5%;"><i class="fa fa-bath"></i>' + Premadeletter55 + '</button>' +
            //											'<button id="OpenInfo" type="button" class="btn btn-sm btn-danger" data-toggle="button" aria-pressed="false" autocomplete="off" data-toggle="tooltip" data-placement="right" data-original-title="Mod Information and choose Template" style="margin-top: 2px; width: 49.5%; border-color: darkslategrey; margin-right: 0.5%;"><i class="fa fa-info-circle"></i>Information</button>' +
            '<button id="OpenuserScripts" type="submit" class="btn btn-primary btn" data-itr="page_play" style="margin-top: 2px; display: block; width: 100%; padding: 4px 0 6px 0;"><i class="fa fa-code"></i>User Scripts</button>' +

            '<div class="input-box" style="text-align: center; font-size: 12px; margin-top: 2px; padding: 4px 0 0px 0;"><span id="legendmanualback" class="title" style="">Manual background:  </span>' +
            '<select id="backgroundPic" class="form-control" onchange="changePicFun();" required="" data-original-title="" title="" style="display:inline; width: 40%" >' +
            '<option value="1" data-itr="">Minimap</option>' +
            '<option value="2" data-itr="">Leaderboard</option>' +
            '<option value="3" data-itr="">Teamboard</option>' +
            '<option value="4" data-itr="">Main Canvas</option>' +
            '<option value="5" data-itr="">Main Banner</option>' +
            '</select>' +

            '<input id="minimapPicture" class="form-control" placeholder="Minimap Image URL" value="" style="margin-top: 2px; display: block;" onblur="setminbgname();" data-toggle="tooltip" data-placement="right" data-original-title="Url of image starting with http://... or https://..." >' +
            '<input id="minbtext" class="form-control" placeholder="Minimap Text" value="" style="margin-top: 2px; display: block;" onblur="setminbtext();">' +
            '<input id="leadbPicture" class="form-control" placeholder="Leaderboard Image URL" value="" style="margin-top: 2px; display: none;" onblur="setleadbgname();" data-toggle="tooltip" data-placement="right" data-original-title="Url of image starting with http://... or https://..." >' +
            '<input id="leadbtext" class="form-control" placeholder="Leaderboard Logo Text" value="" style="margin-top: 2px; display: none; " onblur="setleadbtext();">' +
            '<input id="teambPicture" class="form-control" placeholder="Teamboard Image URL" value="" style="margin-top: 2px; display: none;" onblur="setteambgname();" data-toggle="tooltip" data-placement="right"  data-original-title="Url of image starting with http://... or https://..." >' +
            '<input id="teambtext" class="form-control" placeholder="Teamboard Logo Text" value="" style="margin-top: 2px; display: none; " onblur="setteambtext();">' +
            '<input id="canvasPicture" class="form-control" placeholder="Main Canvas Image URL" value="" style="margin-top: 2px; display: none;" onblur="setcanvasbgname();" data-toggle="tooltip" data-placement="right" data-original-title="Url of image starting with http://... or https://..." >' +
            '<input id="imgUrl" class="form-control" placeholder="Main Banner Icon URL" value="" style="margin-top: 2px; display: none; " onblur="setimgUrl();" data-toggle="tooltip" data-placement="right" data-original-title="Url of image starting with http://... or https://..." >' +
            '<input id="imgHref" class="form-control" placeholder="Main Banner Link URL" value="" style="margin-top: 2px; display: none; " onblur="setimgHref();" data-toggle="tooltip" data-placement="right" data-original-title="Url of link to redirect" >' +
            '</div>' +

            '<div class="input-box" style="text-align: center; font-size: 12px; margin-top: 0px; padding: 4px 0 0px 0;"><span id="legendmanualmess" class="title" style="">Manual Message Icons&Youtube:  </span>' +
            '<select id="changephotos" class="form-control" onchange="changePhotoFun();" required="" data-original-title="" title="" style="display:inline; width: 35%" >' +
            '<option value="1" data-itr="">Icon 1</option>' +
            '<option value="2" data-itr="">Icon 2</option>' +
            '<option value="3" data-itr="">Icon 3</option>' +
            '<option value="4" data-itr="">Icon 4</option>' +
            '<option value="5" data-itr="">Icon 5</option>' +
            '<option value="6" data-itr="">Icon 6</option>' +
            '<option value="7" data-itr="">Youtube 1</option>' +
            '<option value="8" data-itr="">Youtube 2</option>' +
            '<option value="9" data-itr="">Youtube 3</option>' +
            '<option value="10" data-itr="">Youtube 4</option>' +
            '<option value="11" data-itr="">Youtube 5</option>' +
            '<option value="12" data-itr="">Youtube 6</option>' +
            '</select>' +

            '<input id="pic1data" class="form-control" placeholder="Message Icon Text 1" value="" style="margin-top: 2px; display: block; " onblur="setpic1data();">' +
            '<input id="pic2data" class="form-control" placeholder="Message Icon Text 2" value="" style="margin-top: 2px; display: none; " onblur="setpic2data();">' +
            '<input id="pic3data" class="form-control" placeholder="Message Icon Text 3" value="" style="margin-top: 2px; display: none; " onblur="setpic3data();">' +
            '<input id="pic4data" class="form-control" placeholder="Message Icon Text 4" value="" style="margin-top: 2px; display: none; " onblur="setpic4data();">' +
            '<input id="pic5data" class="form-control" placeholder="Message Icon Text 5" value="" style="margin-top: 2px; display: none; " onblur="setpic5data();">' +
            '<input id="pic6data" class="form-control" placeholder="Message Icon Text 6" value="" style="margin-top: 2px; display: none; " onblur="setpic6data();">' +
            '<input id="yt1data" class="form-control" placeholder="Youtube Message Text 1" value="" style="margin-top: 2px; display: none; " onblur="setyt1data();">' +
            '<input id="yt2data" class="form-control" placeholder="Youtube Message Text 2" value="" style="margin-top: 2px; display: none; " onblur="setyt2data();">' +
            '<input id="yt3data" class="form-control" placeholder="Youtube Message Text 3" value="" style="margin-top: 2px; display: none; " onblur="setyt3data();">' +
            '<input id="yt4data" class="form-control" placeholder="Youtube Message Text 4" value="" style="margin-top: 2px; display: none; " onblur="setyt4data();">' +
            '<input id="yt5data" class="form-control" placeholder="Youtube Message Text 5" value="" style="margin-top: 2px; display: none; " onblur="setyt5data();">' +
            '<input id="yt6data" class="form-control" placeholder="Youtube Message Text 6" value="" style="margin-top: 2px; display: none; " onblur="setyt6data();">' +

            '<input id="pic1url" class="form-control" placeholder="Message Icon Imgur Url 1" value="" style="margin-top: 2px; display: block;" onblur="setpic1url();" data-toggle="tooltip" data-placement="right" data-original-title="e.g. http://i.imgur.com/RVBi3T1.gif" >' +
            '<input id="pic2url" class="form-control" placeholder="Message Icon Imgur Url 2" value="" style="margin-top: 2px; display: none;" onblur="setpic2url();" data-toggle="tooltip" data-placement="right" data-original-title="e.g. http://i.imgur.com/RVBi3T1.gif" >' +
            '<input id="pic3url" class="form-control" placeholder="Message Icon Imgur Url 3" value="" style="margin-top: 2px; display: none;" onblur="setpic3url();" data-toggle="tooltip" data-placement="right" data-original-title="e.g. http://i.imgur.com/RVBi3T1.gif" >' +
            '<input id="pic4url" class="form-control" placeholder="Message Icon Imgur Url 4" value="" style="margin-top: 2px; display: none;" onblur="setpic4url();" data-toggle="tooltip" data-placement="right" data-original-title="e.g. http://i.imgur.com/RVBi3T1.gif" >' +
            '<input id="pic5url" class="form-control" placeholder="Message Icon Imgur Url 5" value="" style="margin-top: 2px; display: none;" onblur="setpic5url();" data-toggle="tooltip" data-placement="right" data-original-title="e.g. http://i.imgur.com/RVBi3T1.gif" >' +
            '<input id="pic6url" class="form-control" placeholder="Message Icon Imgur Url 6" value="" style="margin-top: 2px; display: none;" onblur="setpic6url();" data-toggle="tooltip" data-placement="right" data-original-title="e.g. http://i.imgur.com/RVBi3T1.gif" >' +
            '<input id="yt1url" class="form-control" placeholder="Youtube Message Url 1" value="" style="margin-top: 2px; display: none;" onblur="setyt1url();" data-toggle="tooltip" data-placement="right" data-original-title="Url of youtube to be shown" >' +
            '<input id="yt2url" class="form-control" placeholder="Youtube Message Url 2" value="" style="margin-top: 2px; display: none;" onblur="setyt2url();" data-toggle="tooltip" data-placement="right" data-original-title="Url of youtube to be shown" >' +
            '<input id="yt3url" class="form-control" placeholder="Youtube Message Url 3" value="" style="margin-top: 2px; display: none;" onblur="setyt3url();" data-toggle="tooltip" data-placement="right" data-original-title="Url of youtube to be shown" >' +
            '<input id="yt4url" class="form-control" placeholder="Youtube Message Url 4" value="" style="margin-top: 2px; display: none;" onblur="setyt4url();" data-toggle="tooltip" data-placement="right" data-original-title="Url of youtube to be shown" >' +
            '<input id="yt5url" class="form-control" placeholder="Youtube Message Url 5" value="" style="margin-top: 2px; display: none;" onblur="setyt5url();" data-toggle="tooltip" data-placement="right" data-original-title="Url of youtube to be shown" >' +
            '<input id="yt6url" class="form-control" placeholder="Youtube Message Url 6" value="" style="margin-top: 2px; display: none;" onblur="setyt6url();" data-toggle="tooltip" data-placement="right" data-original-title="Url of youtube to be shown" >' +
            '</div></div>' +

            '<div class="input-box" style="text-align: center; font-size: 12px; margin-top: 0px; padding: 0px 0 0px 0;"><span id="legendlanguagetext" class="title" style="" data-toggle="tooltip" data-placement="right" data-original-title="Visit https://jimboy3100.github.io/ LanguagePackEnglish.js to Upload a Language Pack">Choose Language:  </span>' +
            '<select id="legendlanguages" class="form-control" onchange="changeModLanguage();" required="" data-original-title="" title="" style="display:inline; width: 50%" >' +
            '<option value="1" data-itr="">English</option>' +
            '<option value="6" data-itr="">Arabic - عربى</option>' +
            '<option value="4" data-itr="">Bulgarian - български</option>' +
            '<option value="5" data-itr="">French - Français</option>' +
			'<option value="9" data-itr="">German - Deutsch</option>' +
            '<option value="2" data-itr="">Greek - Ελληνικά</option>' +
			'<option value="8" data-itr="">Russian - Русские</option>' +
            '<option value="3" data-itr="">Spanish - Español</option>' +
			'<option value="7" data-itr="">Trad. Chinese - 繁體中文</option>' +
            '</select></div>' +

            '<div class="input-box" style="text-align: center; font-size: 12px; margin-top: 4px; padding: 0px 0 0px 0;"><span id= "chatbtntitle" class="title" style="">Chat Position:  </span><div class="btn-group">' +
            '<button id="bottomleft" type="button" class="btn btn-primary">Default</button>' +
            '<button id="bottomright" type="button" class="btn btn-primary"><i class="fa fa-arrow-down" aria-hidden="true"></i><i class="fa fa-arrow-right" aria-hidden="true"></i></button>' +
            '<button id="topleft" type="button" class="btn btn-primary"><i class="fa fa-arrow-up" aria-hidden="true"></i><i class="fa fa-arrow-left" aria-hidden="true"></i></button>' +
            '<button id="topright" type="button" class="btn btn-primary"><i class="fa fa-arrow-up" aria-hidden="true"></i><i class="fa fa-arrow-right" aria-hidden="true"></i></button>' +
            '</div></div>' +
            '<div class="input-box" style="text-align: center; font-size: 12px; margin-top: 4px; padding: 0px 0 0px 0;"><span id="legenddiscordwebh" class="title" style="">Discord Webhook Url (for sending TOKEN)  </span>' +
            '<input id="discwebhook1" class="form-control" placeholder="Discord Webhook 1 Url" value="" data-toggle="tooltip" data-placement="right" data-original-title="Must be filled for function to work. https://discordapp.com/api/webhooks/.../..." style="margin-top: 2px; width: 49.5%; border-color: darkslategrey; margin-left: 0.5%; display: inline-block; " onblur="setdiscwebhook1();">' +
            '<input id="discwebhook2" class="form-control" placeholder="Discord Webhook 2 Url" value="" data-toggle="tooltip" data-placement="right" data-original-title="Secondary Webhook(optional). https://discordapp.com/api/webhooks/.../..." style="margin-top: 2px; width: 49.5%; border-color: darkslategrey; margin-right: 0.5%; display: inline-block;" onblur="setdiscwebhook2();">' +
            '<div class="input-box" style="text-align: center; font-size: 12px; margin-top: 4px; padding: 0px 0 0px 0;"><span id="legendotherscripts" class="title" style="">Expansions: </span>' +
            '</div><div id="LEGENDAds2"></div><div id="LEGENDAds3"></div>' +   
            '</div></div>');
        $("#HideAllBthn").tooltip({
            title: "Temporarily Hide/Show Everything. Function for Youtubers",
            placement: "bottom"
        });
        //Fix Class Legend Tab
        $(".legend-tab").click(function() {
            MC.setQuality($('#quality').val())
        });

        var initialMusicUrl = (localStorage.getItem("musicUrl") == null ? defaultMusicUrl : localStorage.getItem("musicUrl"));
        //	var savemusic=$(".agario-panel.sounds-panel").html();
        $('.agario-panel.radio-panel').after('<div id="youtubeplayer" style="margin-left: 0px;"><h5 class="main-color" style="margin-right: 15px;">Youtube player</h5>' +
            '<iframe id="musicFrame" width="350" height="180" src="' + getEmbedUrl(initialMusicUrl) + '" frameborder="0" allowfullscreen=""></iframe></div>' +
            '<div id="afteryoutubeplayer"><input id="musicUrl" onclick="$(this).select();" type="text" placeholder="Youtube Url" value="' + initialMusicUrl + '" class="form-control" data-toggle="tooltip" data-placement="right" data-original-title="Paste your video/playlist here">' +
            '<button id="YoutubeAutoBtn" type="button" class="btn btn-block btn-info" data-toggle="button" aria-pressed="false" autocomplete="off" style="margin-top: 2px;"><i class="fa fa-youtube-play"></i>' + Premadeletter40 + '</button></div>'+
			'<button id="YoutubeBackgroundBtn" type="button" class="btn btn-block btn-info" data-toggle="button" aria-pressed="false" autocomplete="off" style="margin-top: 2px;"><i class="fa fa-youtube-play"></i>' + Premadeletter61 + '</button></div>');
        $('.agario-panel.radio-panel').hide();
        $('.agario-panel.ogario-yt-panel').hide();

        if ($('#menuBg').val() == "http://cdn.ogario.ovh/static/img/pattern.png") {
            $('#menuBg').val("https://jimboy3100.github.io/pattern.png");
        }
        if ($('#messageSound').val() == "http://cdn.ogario.ovh/static/sounds/notification_01.mp3") {
            $('#messageSound').val("https://jimboy3100.github.io/notification_01.mp3");
        }
        if ($('#commandSound').val() == "http://cdn.ogario.ovh/static/sounds/notification_02.mp3") {
            $('#commandSound').val("https://jimboy3100.github.io/notification_02.mp3");
        }
        //    $("#music").replaceWith('<div id="music" class="menu-panel" style="display: none;"><div class="agario-panel"><h5 class="main-color">Youtube player</h5>' +
        //                            '<iframe id="musicFrame" width="320" height="180" src="' + getEmbedUrl(initialMusicUrl) + '" frameborder="0" allowfullscreen=""></iframe>' +
        //                            '<input id="musicUrl" onclick="$(this).select();" type="text" placeholder="Youtube Url" value="' + initialMusicUrl + '" class="form-control" data-toggle="tooltip" data-placement="right" data-original-title="Paste your video/playlist here">'+
        //							'<button id="YoutubeAutoBtn" type="button" class="btn btn-block btn-info" data-toggle="button" aria-pressed="false" autocomplete="off" style="margin-top: 2px;"><i class="fa fa-youtube-play"></i>Auto Youtube On</button></div>');
        //	$('#music').append(savemusic+'</div>');						


        if (typeof YT !== 'undefined') {
            musicPlayer = new YT.Player('musicFrame', {
                events: {
                    'onStateChange': function(state) {
                        if (state.data == 1) {
                            $("#playerI").removeClass("fa-play-circle").addClass("fa-pause-circle");
                            $("#playerBtn").attr('data-original-title', Premadeletter60).tooltip('fixTitle');
                        } else {
                            $("#playerI").removeClass("fa-pause-circle").addClass("fa-play-circle");
                            $("#playerBtn").attr('data-original-title', Premadeletter13).tooltip('fixTitle');
                        }
                    }
                }
            });
        }
        //roller and other icons
        $('#exp-bar > .icon-user').addClass('fa fa-cog fa-spin fa-3x fa-fw').removeClass('icon-user');
        //$('.music-tab').children().addClass('quick-yt icon-youtube2').removeClass('icon-music').attr('data-original-title', 'Youtube & Sounds');
        $('.music-tab').children().attr('data-original-title', 'Youtube & Sounds');
        document.getElementsByClassName('quick-yt ogicon-youtube2')[0].setAttribute('id', 'legendid');
		
        document.getElementsByClassName('quick-yt ogicon-youtube2')[0].href = "http://www.youtube.com/watch?v=CnIfNSpCf70";
        document.getElementsByClassName('quick-yt ogicon-youtube2')[0].setAttribute('data-original-title', 'Promotional Video');
 //       $('#legendid').addClass('fa fa-thumbs-o-up').removeClass('quick-yt icon-youtube2');
        $("#more-skins").attr('href', 'https://jimboy3100.github.io/skins/');
        $(".quick-more-skins.ogicon-grin").attr('href', 'https://jimboy3100.github.io/skins/');
		$("#quick-menu").append('<a id= "LegGoogleForm" class="fa fa-check-square-o" data-toggle="tooltip" data-container="body" data-placement="left" title="" data-original-title="New Ideas & Statistics Form" onclick="legendformIframe();return false;"></a>'+
		'<a id= "ModInfoQuick" class="fa fa-info" data-toggle="tooltip" data-container="body" data-placement="left" title="" data-original-title="Mod Info & Templates" onclick="openhelper();return false;"></a>');
		$(".quick-quests.ogicon-trophy").after('<a id= "SpecialDealsQuickBtn" class="fa fa-briefcase" data-toggle="tooltip" data-container="body" data-placement="left" title="" data-original-title="Special Deals" onclick="SpecialDeals(); return false;"></a>'+
		'<a id= "VideoSkinsQuick" class="fa fa-video-camera" data-toggle="tooltip" data-container="body" data-placement="left" title="" data-original-title="Video Skins"></a>');		
        // prevent edit
        $("#musicUrl").on("input", function() {
            $(this).attr("maxlength", "1000");
        });
        $("#musicUrl").bind("paste", function(e) {
            $(this).attr("maxlength", "1000");
            var pastedDataorNot = e.originalEvent.clipboardData.getData('text');
			YoutubeEmbPlayer(pastedDataorNot);

        });		

        // save notes
        $(".note").keyup(function(event) {
            localStorage.setItem(event.target.id, $(event.target).val());
        });
		//fzogar Upload / Download Settings
		$("#import-settings-btn").attr('class', 'btn btn-success');
		$("#close-exp-imp").before('<button id="fzogarOgarBtn" onclick="fzogarOgarIframe(); return false" style="margin-right: 25px;" class="btn btn-success" data-original-title="" title="">' + Premadeletter109 + '</button>');

        $("#searchHud").after('<div id="searchLog" class="main-color" style="font-size: 13px;float: left;font-weight: 700;border-radius: 4px;width: 65%;height: 270px;z-index: 15;margin: auto;top: 0px;right: 0px;left: 0px;bottom: -390px;position: fixed;pointer-events: auto;color: rgb(255, 255, 255);padding: 10px;display: none;background-color: rgba(0, 0, 0, 0.2);"><h5 id="logTitle" class="main-color text-center" style="margin-top: 0px;">Leaderboard history</h5>' +
            '<div id="log" style="font-weight: normal; overflow-x: hidden; overflow-y: auto;height: 90%;">' +
            '</div></div>');
        //clone region and gamemode//$("#region").clone().prependTo("#searchLog").attr("onclick","MC.setRegion($(this).val());");//$("#gamemode").clone().prependTo("#searchLog").attr('id', 'gamemode2').after("#gamemode");					 						  

        $("#leaderboard-hud").append('<div id="leaderboard-menu">' +
            '<a id="searchShortcut" class="btn btn-info" data-toggle="tooltip" data-placement="left" data-original-title="Join server (Backspace)" style="width: 33.3%;text-shadow: 0.3px 0.3px #000000;font-size: small;margin-top: 0px;border-top-color: rgb(141, 201, 64);border-bottom-style: none;border-left-style: none;border: none;margin-top: 0px; background-color: transparent;" data-toggle="tooltip" data-original-title="Search leaderboards" title=""><i class="fa fa-search fa-lg"></i></a>' +
            '<a id="copySIPBtn" href="javascript:void(0);" class="btn btn-sm btn-copy-leaderboard btn-info" style="background-color: transparent; width: 33.3%;text-shadow: 0.3px 0.3px #000000;font-size: small;margin-top: 0px;/* border: none; */border-left-style: none;border-right-style: none;border-bottom-style: none;border: none; user-drag: none; user-select: none; -moz-user-select: none; -webkit-user-drag: none; -webkit-user-select: none; -ms-user-select: none;" data-toggle="tooltip" data-placement="left" data-original-title="Copy Token/SIP">Copy</a>' +
            '<a id="reconnectBtn" class="btn btn-info" title="" data-toggle="tooltip" data-placement="bottom" data-original-title="Change server (+)" style="' +
            'background-color: transparent;width: 33.3%; text-shadow: 0.3px 0.3px #000000; font-size: small; margin-top: 0px; border: none;"><i class="fa fa-refresh fa-lg"></i></a>' +

            '<div id="dropDown3" class="hud" style="position: absolute; pointer-events: auto; width: 33%; left: 0px; padding: 0px; border-radius: 0px;">' +
            '<a id="lastIPBtn" data-disabled="true" href="javascript:void(0);" class="btn btn-sm btn-copy-leaderboard btn-info" style="width: 33.3%;text-shadow: 0.3px 0.3px #000000;font-size: small;margin-top: 0px;border-top-color: rgb(141, 201, 64);border-bottom-style: none;border-left-style: none;border: none;margin-top: 0px; background-color: transparent;" data-toggle="tooltip" data-html="true" data-placement="left" data-original-title="<p style=&quot;margin-top:3px; margin-bottom:0px;&quot; align=&quot;center&quot;><span class=&quot;hud-main-color&quot; style=&quot;position:absolute; left: 15px;&quot;>NEW</span>Join back</p><hr style=&quot;margin-top:5px; margin-bottom:10px; border-color:darkslategray;&quot;/><p class=&quot;&quot; style=&quot;margin-bottom:3px; font-weight:normal;&quot; align=&quot;justify&quot;>Connect to last IP you played</p>"><span class="glyphicon glyphicon-download-alt"></span></a>' +
            '</div>' +
            '<div id="dropDown2" class="hud" style="position: absolute; pointer-events: auto; width: 33%; height: 90px; left: 67px; padding: 0px; border-radius: 0px;">' +
            '<a id="copySIPandPass" href="javascript:void(0);" class="btn btn-sm btn-copy-leaderboard btn-info" style="background-color: transparent; width: 100%;text-shadow: rgb(0, 0, 0) 0.3px 0.3px;font-size: small;margin-top: 0px;display: block;border: none; user-drag: none; user-select: none; -moz-user-select: none; -webkit-user-drag: none; -webkit-user-select: none; -ms-user-select: none;" data-toggle="tooltip" data-placement="left" data-original-title="Copy Token/SIP&Password">TK&PW</a>' +
            '<a id="copyLBBtn" href="javascript:void(0);" class="btn btn-sm btn-copy-leaderboard btn-info" style="background-color: transparent; width: 100%;text-shadow: rgb(0, 0, 0) 0.3px 0.3px;font-size: small;margin-top: 0px;display: block;border: none; user-drag: none; user-select: none; -moz-user-select: none; -webkit-user-drag: none; -webkit-user-select: none; -ms-user-select: none;" data-toggle="tooltip" data-placement="left" data-original-title="Copy Leaderboard (L)">Board</a>' +
            '<a id="copySIPPassLB" href="javascript:void(0);" class="btn btn-sm btn-copy-leaderboard btn-info" style="background-color: transparent; width: 100%;text-shadow: rgb(0, 0, 0) 0.3px 0.3px;font-size: small;margin-top: 0px;display: block;border: none; user-drag: none; user-select: none; -moz-user-select: none; -webkit-user-drag: none; -webkit-user-select: none; -ms-user-select: none;" data-toggle="tooltip" data-placement="left" data-original-title="Copy Token/SIP, Password, Leaderboard...">TK&ALL</a>' +            
			'</div>' +
            '<div id="dropDown" class="hud" style="position: absolute; pointer-events: auto; width: 33%; height: 30px; left: 67px; padding: 0px; border-radius: 0px;">' +
            '<a id="copyLBBtn" href="javascript:void(0);" class="btn btn-sm btn-copy-leaderboard btn-info" style="background-color: transparent; width: 100%;text-shadow: rgb(0, 0, 0) 0.3px 0.3px;font-size: small;margin-top: 0px;display: block;border: none; user-drag: none; user-select: none; -moz-user-select: none; -webkit-user-drag: none; -webkit-user-select: none; -ms-user-select: none;" data-toggle="tooltip" data-placement="left" data-original-title="Copy Leaderboard (L)">Board</a>' +
//            '<a id="copySIPPassLB" href="javascript:void(0);" class="btn btn-sm btn-copy-leaderboard btn-info" style="background-color: transparent; width: 100%;text-shadow: rgb(0, 0, 0) 0.3px 0.3px;font-size: small;margin-top: 0px;display: block;border: none; user-drag: none; user-select: none; -moz-user-select: none; -webkit-user-drag: none; -webkit-user-select: none; -ms-user-select: none;" data-toggle="tooltip" data-placement="left" data-original-title="Copy Token/SIP&Leaderboard">TK&PW&L</a>' +
            '</div>' +

            '<input id="tempCopy" style="display: none;" value="">' +
            '</div>');
        //$("#searchShortcut").mouseenter(function () {
        //$("#dropDown").hide();$("#dropDown3").show(100);$("#copySIPBtn").text("Copy");});
        $("#copySIPBtn").mouseenter(function() {
            $("#dropDown3").hide();
            $("#copySIPBtn").text("Token");
			if ($("#clantag").val()!=""){
				$("#dropDown2").show(100);
			}
            else {
				$("#dropDown").show(100);
				}
        });
        $("#leaderboard-menu").mouseleave(function() {
            $("#dropDown").hide();
			$("#dropDown2").hide();
            $("#dropDown3").hide();
            $("#copySIPBtn").text("Copy");
        });
        $("#logTitle").after('<a href="#" id="notesclear" style="color: lightgrey;float: right;position: absolute;right: 12px;top: 9px;" class="main-color" onclick="$(\'#log\').html(\'\');" data-toggle="tooltip" data-placement="left" data-original-title="Clear list"><span class="glyphicon glyphicon-ban-circle"></span></a>');
        $("#searchBtn").tooltip('disable');
        $("#copyLBBtn").click(function() {
            copy(getLeaderboard());
        });
        $("#dropDown>#copyLBBtn").click(function() {
            copy(getLeaderboard());
        });		
        $("#lastIPBtn").click(function() {
            lastIP = localStorage.getItem("lastIP");
            dosearch();
            document.getElementById("searchInput").value = lastIP;
            $("#searchBtn").click();
        });
        //	$("#OpenInfo").click(function () {openhelper();});

        $("#copyIPBtn").click(function() {
            if (searchSip != null) {
                copy("http://agar.io/?r=" + region + "&m=" + realmode + "&search=ws://" + searchSip);
            } else {
                copy("http://agar.io/?r=" + MC.getRegion() + "&m=" + realmode + "&search=ws://" + currentIP);
            }
        });

        $("#copySIPBtn").click(function() {
            if (searchSip != null) {
                if (realmode == ":party") {
                    copy("http://agar.io/#" + MC.getPartyToken());
                } else if (realmode != ":party") {
					if (region!=null&&realmode!=null){
                    copy("http://agar.io/?sip=" + searchSip + "&?r=" + region + "&m=" + realmode);
					}
					else{
					copy("http://agar.io/?sip=" + searchSip);	
					}
                }
            } else if (privateSrv==null) { //else if (searchSip != null && privateSrv==null)
                if (realmode == ":party") {
                    copy("http://agar.io/#" + MC.getPartyToken());
                } else if (realmode != ":party") {					
                    copy("http://agar.io/?sip=" + currentIP + "&?r=" + MC.getRegion() + "&m=" + realmode);
                }
            }
			else if (privateSrv!=null) {
                    copy("http://agar.io/?ip=" + privateSrv + "&?SERVER=PRIVATE");                
            }
        });
        $("#copySIPandPass").click(function() {
            if (searchSip != null) {
                if (realmode == ":party") {
                    copy("http://agar.io/"+"?&pass=" + $("#clantag").val() + "#" + MC.getPartyToken());
                } else if (realmode != ":party") {
					if (region!=null&&realmode!=null){
                    copy("http://agar.io/?sip=" + searchSip + "&?pass=" + $("#clantag").val() + "&?r=" + region + "&m=" + realmode);
					}
					else{
					copy("http://agar.io/?sip=" + searchSip + "&?pass=" + $("#clantag").val());	
					}
                }
            } else if (privateSrv==null) { //else if (searchSip != null && privateSrv==null)
                if (realmode == ":party") {
                    copy("http://agar.io/"+"?&pass=" + $("#clantag").val() + "#" + MC.getPartyToken());
                } else if (realmode != ":party") {					
                    copy("http://agar.io/?sip=" + currentIP + "&?pass=" + $("#clantag").val() + "&?r=" + MC.getRegion() + "&m=" + realmode);
                }
            }
			else if (privateSrv!=null) {
                    copy("http://agar.io/?ip=" + privateSrv + "&?pass=" + $("#clantag").val() + "&?SERVER=PRIVATE");                
            }
        });	
        $("#copySIPPassLB").click(function() {

            if (searchSip != null) {
                if (realmode == ":party") {
                    CopyTkPwLb2="http://agar.io/"+"?&pass=" + $("#clantag").val() + "#" + MC.getPartyToken();
					copyToClipboardAll();					
                } else if (realmode != ":party") {
					if (region!=null&&realmode!=null){
					CopyTkPwLb2="http://agar.io/?sip=" + searchSip + "&?pass=" + $("#clantag").val() + "&?r=" + region + "&m=" + realmode;	
					copyToClipboardAll();
					}
					else{
					CopyTkPwLb2="http://agar.io/?sip=" + searchSip + "&?pass=" + $("#clantag").val();	
					copyToClipboardAll();
					}
                }
            } else if (privateSrv==null) { //else if (searchSip != null && privateSrv==null)
                if (realmode == ":party") {
					CopyTkPwLb2="http://agar.io/"+"?&pass=" + $("#clantag").val() + "#" + MC.getPartyToken();
					copyToClipboardAll();
                } else if (realmode != ":party") {					
                    CopyTkPwLb2="http://agar.io/?sip=" + currentIP + "&?pass=" + $("#clantag").val() + "&?r=" + MC.getRegion() + "&m=" + realmode;
					copyToClipboardAll();
                }
            }
			else if (privateSrv!=null) {
					CopyTkPwLb2="http://agar.io/?ip=" + privateSrv + "&?pass=" + $("#clantag").val() + "&?SERVER=PRIVATE"; 
					copyToClipboardAll();					
            }
        });			

        $("#reconnectBtn").click(function() {
            realmode=getGameMode();
			ogario.gameMode = realmode;
            hideMenu();
            changeServer();
            if (!$("#searchHud").is(':visible')) {
                delay(200, spectate);
                setTimeout(function() {
                    MC.setQuality($('#quality').val());
                }, 1000);
                setTimeout(function() {
                    MC.setQuality($('#quality').val());
                }, 2000);
                setTimeout(function() {
                    MC.setQuality($('#quality').val());
                }, 3000);
                setTimeout(function() {
                    MC.setQuality($('#quality').val());
                }, 5000);
                setTimeout(function() {
                    MC.setQuality($('#quality').val());
                }, 7000);				
            }
        });
	
        /*$("#createPartyBtn").click(function(){ hideMenu();$("#create-party-btn-2").click();if (!$("#searchHud").is(':visible')) {delay(200, spectate);}});*/
        $("#reconnectBtn").mouseenter(function() {
            $("#dropDown").hide();
			$("#dropDown2").hide();
            $("#copySIPBtn").text("Copy");
        });

        $("#searchBtn").click(function() {
            var searchString = $("#searchInput").val();
            searchHandler(searchString);
        });		
        $("#searchInput").keyup(function(event) {
            if (event.keyCode == 13) {
                $("#searchBtn").click();
            }
        });
	
        $("#closeBtn").click(function() {
            hideSearchHud();
        });
        $("#searchShortcut").click(function() {
            hideMenu();
            showSearchHud();
            $("#searchInput").focus().select();
        });

        $('#nick').mouseenter(function() {
            $('#nick').css('background-color', '#000066');
            return clickedname = "YES"
        }).mouseleave(function() {
            $('#nick').css('background-color', '');
        });
        $('#nick').blur(function() {			
			loadbannerProfileClans();
			previousnickname=$("#nick").val();
			localStorage.setItem("previousnickname", previousnickname);
            if (clickedname == "YES") {
                if ($("#nick").val().length >= 16) {
                    toastr["warning"]("<b>[SERVER]:</b> " + Premadeletter2 + ':<br>' + $('#nick').val());
                }
            }
            if ($("#nick").val() == "EasterEgg1") {
                toastr["info"](Premadeletter3).css("width", "210px");
                $("#nick").val("Easter Egg");
                $(".btn.btn-play-guest.btn-success.btn-needs-server").click();
                openbleedmod();
            } else if ($("#nick").val() == "EasterEgg2") {
                toastr["info"](Premadeletter4).css("width", "210px");
                $("#nick").val("Easter Egg");
                $(".btn.btn-play-guest.btn-success.btn-needs-server").click();
                openrotatingmod();
            } else if ($("#nick").val() == "EasterEgg3") {
                toastr["info"](Premadeletter4).css("width", "210px");
                $("#nick").val("Easter Egg");
                $(".btn.btn-play-guest.btn-success.btn-needs-server").click();
                openrotatingmod();
            } else if ($("#nick").val() == "EasterEgg4") {
                toastr["info"](Premadeletter4).css("width", "210px");
                $("#nick").val("Easter Egg");
                $(".btn.btn-play-guest.btn-success.btn-needs-server").click();
                openrotatingmod();
            } 
			
        });
		
		$('#stream-mode').before('<button id="opennamechars" class="btn btn-info" style="background-color: transparent;" onclick="opennamechars();return false;"><i class="fa fa-language"></i></button>');
		$('#opennamechars').tooltip({
            title: "Design Nickname Font",
            placement: "bottom"
        });
		$('#hide-url').before('<button id="openskinchanger" class="btn btn-info" style="background-color: transparent;" onclick="BeforeReportFakesSkin();return false;"><i class="fa fa-wpexplorer"></i></button>');
		$('#openskinchanger').attr('placeholder', 'Name').tooltip({
            title: "Flag the Fake's Skin",
            placement: "bottom"
        });		
		$('#clantag').css("width", "-=20px");	$('#nick').css("width", "+=20px");	
        $('#clantag').mouseenter(function() {
            $('#clantag').css('background-color', '#000066');
        }).mouseleave(function() {
            $('#clantag').css('background-color', '');
			if (privateSrv==null){
			saveclanpassword=$("#clantag").val();
			localStorage.setItem("saveclanpassword", saveclanpassword);
			}
        }).blur(function() {
			Universalchatfix();
        });
        //	$('#region').unbind('mouseenter');
        //	$('#gamemode').unbind('mouseenter');
        $('#region').mouseenter(function() {
            $('#region').css('background-color', '#003300');
        }).mouseleave(function() {
            $('#region').css('background-color', '');
        });
        $('#gamemode').mouseenter(function() {
            $('#gamemode').css('background-color', '#003300');
        }).mouseleave(function() {
            $('#gamemode').css('background-color', '');
        });

        //define if it is clicked
        $("#create-party-btn-2").click(function() {
            if (hiddenfromclan == 0) {
                $("#ChatBtn").attr("data-original-title", "Chat is ON, hide/show up");
                $("#ChatBtn1").attr('class', 'fa fa-eye-slash');
            } else if (hiddenfromclan == 1) {
                $("#ChatBtn").attr("data-original-title", "Chat is ON, hide/show up");
            }
            //return messageone=1;
        });
	
        $("#boostButton").css("display", "inline-block");
        $("#massButton").css("display", "inline-block");
        $("#massButton").after($("#promo-badge-container"));

	    $(".agario-profile-name-container").after('<div class="TimesUsedPanel" align="right" display:inline-block;><h6><i>Times Used: ' + timesopened +
        '<br>Extension by jimboy3100</i></h6></div>');
		$(".agario-profile-name").css('display', 'inline-block');
		$(".agario-profile-name").css('vertical-align', ' baseline');
		$(".agario-profile-name").before('<i id=ProfilePhotoCustom class="fa fa-clipboard" onclick="useProfilePhotoCustom();" aria-hidden="true" style="display: inline-block; margin-top: 0px; vertical-align: middle;" data-toggle="tooltip" data-title="Copy Account Image Url" data-placement="top"></i>');

        // LEGEND footer
        var ogarioVersion = $("#menu-footer").text().split("| ")[1];
        $("#menu-footer").text("");
		$(".agario-profile-name").css('vertical-align', '');
        $(".TimesUsedPanel").css({
            marginTop: "-10px"
        });
		$(".agario-panel.agario-shop-panel").css("margin-bottom", "10px");
        $("#freeCoins").css({
            marginBottom: "-5px"
        });
        $("#gifting").css({
            marginTop: "10px"
        });	
        $("#dailyquests-panel").css({
            marginTop: "-20px"
        });				
        $("#openShopBtn").css({
            marginTop: "-15px",
			width: "49.5%",
			marginRight: "0.5%"
        });
		$("#openShopBtn").after('<button id="SpecialDealsBtn" onclick="SpecialDeals(); return false;" class="btn btn-primary btn-shop" style="line-height: 24px; width: 49.5%; margin-top: -15px; margin-left: 0.5%;" data-itr="page_shop"><i class="fa fa-briefcase"></i>Special Deals</button>');		
        $("#dailyQuests").css({
            marginBottom: "5px",
			marginTop: "5px",
        });
        $("#potions").css({
            marginTop: "0px",
			width: "49.5%",
			marginRight: "0.5%"
        });
		$("#potions").after('<button id="oldSkinsBtn" class="btn btn-primary btn" style="line-height: 24px; width: 49.5%; margin-top: -px; margin-left: 0.5%;" data-itr="page_shop"><i class="fa fa-grav"></i>Old Skins</button>');	
		$("#quests-blocker").hide();
		
        $('#themePreset>option:nth-child(1)').text("Legend v2");
        $('#themePreset>option:nth-child(2)').text("Legend v1");
        $('#themePreset>option:nth-child(3)').text("Legend Original");
        $('#themePreset>option:nth-child(4)').text("Crazy Style 1");
        $('#themePreset>option:nth-child(5)').text("Crazy Style 2");
        $('#menuPreset>option:nth-child(1)').text("Legend v2");
        $('#menuPreset>option:nth-child(2)').text("Legend v1");

        //Legend mod Cursors
		LegendModCursors();
        $('#themePreset').on('change', function() {
            setTimeout(function() {
				fillminimapLegendLogo();
            }, 200);
        })
        $('#miniMapWidth-value').bind("DOMSubtreeModified", function() {
            setTimeout(function() {
				fillminimapLegendLogo();
            }, 100);
        })

        $(".agario-panel.ogario-yt-panel").html('<div class="agario-panel ogario-yt-panel"><h6 class="menu-main-color"><i></i></h6></div>');

        $(".agario-panel.ogario-yt-panel").css({
            marginBottom: "-10px"
        });
        //	'Scripts used: ' + '<a href="http://ogario.ovh" target="_blank">ogario</a>'+ ", " + '<a href="https://kittymod.github.io/" target="_blank">kitty</a>' + " & " + '<a href="https://greasyfork.org/en/scripts/by-site/agar.io" target="_blank">others</a><br>'+

        //		$(".agario-panel.agario-shop-panel").after('<button id="OpenInfo" type="button" class="btn btn-sm btn-info" data-toggle="button" aria-pressed="false" autocomplete="off" data-toggle="tooltip" data-placement="right" data-original-title="Mod Information and choose Template" style="margin-top: 2px; width: 49.5%; border-color: darkslategrey; margin-left: 25%;"><i class="fa fa-info-circle"></i>Information</button>');
        //		$("#OpenInfo").tooltip({title: "Mod Information and choose Template", placement: "bottom"});
        //		$("#OpenInfo").click(function () {openhelper();});
        $("#menu-footer").prepend('<span style="float: left; font-size: 13px;"><a target="_blank" onclick="ga(\'send\', \'event\', \'Link\', \'click\', \'legendWebsite\');" href="http://www.legendmod.ml" style="color: #ffffff;" data-toggle="tooltip" data-title="Legend mod Website" data-placement="left">Legend mod v' + modVersion + semimodVersion + '</a></span>' +
            '<a id="MorefpsText" href="https://legendmod.joomla.com/en/more-fps.html" data-toggle="tooltip" data-title="How to improve performance" data-placement="top" style ="font-size: 13px"; target="_blank">More FPS</a>');
        // donate button
        //kitty's
        // $("#menu-footer").after('<form onclick="ga(\'send\', \'event\', \'Link\', \'click\', \'donate\');" data-toggle="tooltip" data-title="Please support " data-placement="left" target="_blank" action="https://www.paypal.com/cgi-bin/webscr" method="post"><input type="hidden" name="cmd" value="_s-xclick"><input type="hidden" name="hosted_button_id" value="ELCEHJY3M52K8"><input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"><img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"></form>');
        //jimboy's
        $("#menu-footer").after('<form id="donationbtn" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top" data-toggle="tooltip" data-title="Please support the development of Legend mod" data-placement="left" target="_blank"><input type="hidden" name="cmd" value="_s-xclick"><input type="hidden" name="hosted_button_id" value="CM3GDVCW6PBF6"><input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"><img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"></form>');
        //$("#minimap-sectors").attr("style", "opacity: 0.25;");
        // keybinds

		$("#chat-emoticons").append('<span id="emoticon1">👪 </span><span id="emoticon2">👳 </span><span id="emoticon3">👴 </span><span id="emoticon4">👵 </span><span id="emoticon5">👶 </span><span id="emoticon6">😱 </span><span id="emoticon7">🏆 </span><span id="emoticon8">🌑 </span><span id="emoticon9">🚽 </span><span id="emoticon10">⚖️ </span><span id="emoticon11">🔪 </span><span id="emoticon12">💥 </span><span id="emoticon13">💪 </span><span id="emoticon14">🍌 </span><span id="emoticon15">℄ </span>');
		$("#emoticon1").click(function() {$("#message").val($("#message").val()+"👪")});
		$("#emoticon2").click(function() {$("#message").val($("#message").val()+"👳")});
		$("#emoticon3").click(function() {$("#message").val($("#message").val()+"👴")});
		$("#emoticon4").click(function() {$("#message").val($("#message").val()+"👵")});
		$("#emoticon5").click(function() {$("#message").val($("#message").val()+"👶")});
		$("#emoticon6").click(function() {$("#message").val($("#message").val()+"😱")});
		$("#emoticon7").click(function() {$("#message").val($("#message").val()+"🏆")});
		$("#emoticon8").click(function() {$("#message").val($("#message").val()+"🌑")});
		$("#emoticon9").click(function() {$("#message").val($("#message").val()+"🚽")});
		$("#emoticon10").click(function() {$("#message").val($("#message").val()+"⚖️")});
		$("#emoticon11").click(function() {$("#message").val($("#message").val()+"🔪")});
		$("#emoticon12").click(function() {$("#message").val($("#message").val()+"💥")});
		$("#emoticon13").click(function() {$("#message").val($("#message").val()+"💪")});
		$("#emoticon14").click(function() {$("#message").val($("#message").val()+"🍌")});
		$("#emoticon15").click(function() {$("#message").val($("#message").val()+"℄")});
		
        $(document).keyup(function(event) {
            if (event.which == 8) { // search
                if ($('input:focus').length == 0) {
                    $("#searchShortcut").click();
                }

            } else if (event.which == 187 && !($("input").is(":focus")) && ogario.play == false) { // refresh server
                $("#reconnectBtn").click();

            } else if (event.which == 27) { // ESCAPE
				if (DeathFPSfixVariable!="1"){
                if ($('#searchHud').is(':visible')) {
                    hideSearchHud();
                } else {
                    showMenu();
                }
            }
				else if (DeathFPSfixVariable=="1"){					
					MC.onPlayerSpawn();
					toastr["error"](Premadeletter68 + "  <font color='blue'><b>ESC</font></b>, " + Premadeletter69+ " <b>FPS</b> "+Premadeletter70, "", { timeOut: 5000, extendedTimeOut: 5000 }).css("width", "280px");
				}
			}
        });

 //       $(".btn.btn-play-guest.btn-success.btn-needs-server").attr("onclick", "newsubmit()");
 //       $(".btn.btn-play.btn-primary.btn-needs-server").attr("onclick", "newsubmit()");
		$(".btn.btn-play-guest.btn-success").attr("onclick", "newsubmit()");
		$(".btn.btn-play.btn-primary").attr("onclick", "newsubmit()");
        //$('.btn.btn-warning.btn-spectate.btn-needs-server').click(function () {
        //	if ($("#gamemode2").val()!=":party"){
        //	toastr["info"]("Communication is disabled, after Spectate, save your ip and click <b>CONNECT</b> to fix", "", { timeOut: 6000, extendedTimeOut: 6000 }).css("width", "350px");	
        //	}
        //});

        $(document).keydown(function(event) {
            if (event.which == 81 && ogario.spectate && !($("input").is(":focus"))) { // spectate 'Q' fix
                spectate();
            }
        });

        $("#time-hud").attr("style", "top: 290px !important;");

        // fix leaderboard buttons
        $("#leaderboard-menu").css("pointer-events", "auto");
        $("#searchHud").css("pointer-events", "auto");

        // fix stats text size
        $('[id="statsText"]').css("font-size", "medium");

        // detect paste
        $(document).bind("paste", function(e) {
            if (!searching && !($("input,textarea").is(":focus"))) {
                var pastedData = e.originalEvent.clipboardData.getData('text');
                hideMenu();
                showSearchHud();
                $("#searchInput").val(pastedData);
                $("#searchInput").select();
                searchHandler(pastedData);
            }
        });

        $("#searchInput").bind("paste", function(e) {
            if (!searching) {
                var pastedData = e.originalEvent.clipboardData.getData('text');
                $("#searchInput").val(pastedData);
                $("#searchInput").select();
                searchHandler(pastedData);
            }
        });

        //load notes
        $("#note1").val(localStorage.getItem('note1'));
        $("#note2").val(localStorage.getItem('note2'));
        $("#note3").val(localStorage.getItem('note3'));
        $("#note4").val(localStorage.getItem('note4'));
        $("#note5").val(localStorage.getItem('note5'));
        $("#note6").val(localStorage.getItem('note6'));
        $("#note7").val(localStorage.getItem('note7'));

        //load messages for Google Plus
        $("#gplusLogin").click(
            function() {
                setTimeout(function() {
                    MC.setQuality($('#quality').val());
                }, 1000);
                setTimeout(function() {
                    MC.setQuality($('#quality').val());
                }, 2000);
                setTimeout(function() {
                    MC.setQuality($('#quality').val());
                }, 3000);
                setTimeout(function() {
                    MC.setQuality($('#quality').val());
                }, 4000);
                setTimeout(function() {
                    MC.setQuality($('#quality').val());
                }, 5000);
                setTimeout(function() {
                    MC.setQuality($('#quality').val());					
                }, 6000);
                if (messageone == 1) {
                    if (timesopened == null || timesopened == "" || timesopened <= 5) {
                        toastr["error"](Premadeletter7, "", {
                            timeOut: 15000,
                            extendedTimeOut: 15000
                        }).css("width", "350px");
                    } else if (timesopened > 5) {

                        toastr["info"](Premadeletter8, "", {
                            timeOut: 15000,
                            extendedTimeOut: 15000
                        }).css("width", "350px");
                        toastr["info"](Premadeletter9 + ": <i>chrome://settings/clearBrowserData</i> ", "", {
                            timeOut: 15000,
                            extendedTimeOut: 15000
                        }).css("width", "350px");
                    }
                    return messageone = 0;
                }
            });
		$(".btn.btn-danger.btn-logout").click(
            function() {
                setTimeout(function() {
					adres();
                    MC.setQuality($('#quality').val());
                }, 1000);});
				
        // listen for server disconnect
  /*       MC.onDisconnect = function() {
          toastr["error"](Premadeletter10).css("width", "210px");
            appendSysLog("DISCONNECTED :(");
             if (timesdisconnected < 2) {
                MC.reconnect();
				setTimeout(function() {
                adres();
				}, 3000);
                timesdisconnected++;
                return timesdisconnected;
            } else {
                return timesdisconnected = 0;
            } 
			
        };*/

        // listen for player ban
        MC.onPlayerBanned = function() {
            toastr["error"](Premadeletter11).css("width", "210px");
            appendSysLog("BAN :(");
        };
        $("#region").ready(function() {
            delay(2000, getInfo);
        });
        $('body').on('click', '.logEntry', function() {
            document.getElementById('searchInput').value = "http://agar.io/#" + $(this).data('token');
            bumpLog();
            getInfo();
            searchTKHandler($("#searchInput").val());
        });

        $('body').on('click', '.btn-play-shortcut', function() {
            MC.setQuality($('#quality').val());
            hideSearchHud();
            toastr.clear();
            play();
        });
        $('body').on('click', '.btn-spectate-shortcut', function() {
            MC.setQuality($('#quality').val());
            hideSearchHud();
            toastr.clear();
            spectate();
        });

        //    $("#region, #gamemode").change(function () {appendLog(getLeaderboard());});

        // hide exp bar//$("#exp-bar").remove();// hide party form//$("#create-party-btn-2").hide();
        $("#ogario-party").wrap('<div style="display: none;" id="hidendivtoken"></div>');

        //    var url = window.location.href; /*if (url.length !== 21) {$("#ogario-party").hide();}*/

        //be careful
        //   $("#gamemode").change(function () {
        //       if ($("#gamemode").val() == ":party") {$("#hidendivtoken").css("display", "block");$("#joinPartyToken").val("");}
        //		else {$("#hidendivtoken").css("display", "none");}
        //        localStorage.setItem("gamemode", ogario.gameMode);});

        // style buttons
        $(".btn-spectate, .btn-logout").attr("style", "border-top: none; border-left: none; border-right: none;");
        $("#region").change(function() {
            localStorage.setItem("location2", MC.getRegion());
        });
/*
        if (searchSip == null) {
            $(document).ajaxComplete(function(event, xhr, settings) {
                //console.log(xhr);
                //console.log(settings);
                if (getGameMode() == "") {
                    modebetter = ":ffa"
                } else {
                    modebetter = getGameMode()
                }
                if (xhr.responseJSON != null) {
                    if (xhr.responseJSON.ip != null && xhr.responseJSON.hasOwnProperty('ip')) {
                        currentIP = xhr.responseJSON.ip;
                        //	    if (localStorage.getItem("IPBtn") == "true" || localStorage.getItem("IPBtn") == null) {
//                        $("#cur-tk-hud").fadeTo('fast', 0.2).fadeTo('fast', 1.0);
                        //        $("#cur-tk-hud").html("IP:" + currentIP +"<br>Region:" + MC.getRegion() + " Mode" + modebetter ) ;
//                        $("#cur-tk-hud").html("IP:" + currentIP + "<br>Region:" + MC.getRegion() + " Mode" + modebetter).attr("style", "opacity: 0;");
                        //  }
                    }

                    if (xhr.responseJSON.token != null && xhr.responseJSON.hasOwnProperty('token')) {
                        currentToken = xhr.responseJSON.token;
                        //joinToken(currentToken.replace("http://agar.io/#", ""));        
                    }
                }
                if (xhr.status == 200 && settings.url == "http://m.agar.io/getToken") {
                    //toastr["info"]("Connected :)").css("width","210px");
                    //           delay(200, spectate);
                    //			connectedbanner++;
                    realmode = ":party";
                    //			if (connectedbanner==2){
                    //			toastr["info"](Premadeletter12 + '</br> <button class="btn btn-sm btn-primary btn-play btn-play-shortcut" style="margin-top: 10px;border-color: darkblue;">' + Premadeletter13 + '</button><br><button class="btn btn-sm btn-warning btn-spectate btn-spectate-shortcut" style="width: 100%;margin-top: 10px;">' + Premadeletter14 + '</button>', "", { timeOut: 20000, extendedTimeOut: 20000 }).css("width", "210px");	
                    //			$("#hidendivtoken").css("display", "block");			}
                    return realmode, modebetter;
                }
            });

            $(document).ajaxError(function(event, xhr, settings) {
                //console.log(xhr);//console.log(event);//console.log(settings);
                if (xhr.status == 404 && settings.url == "http://m.agar.io/getToken") {
                    toastr["error"](Premadeletter15).css("width", "210px");
                    $('#helloContainer').attr('data-party-state', '0');
                }
            });
            // search IP in query //     var url = window.location.href;//     var region = getParameterByName("r", url);//     var mode = getParameterByName("m", url);//     var searchStr = getParameterByName("search", url);
            setTimeout(function() {
                if (url.length == 21) {
                    joinToken(url.replace("http://agar.io/#", ""));
                } else {
                    if (region != null) {
                        MC.setRegion(region);
                        MC.setGameMode(realmode);
                    } else {
                        // bug fix//            MC.setRegion(region);//            MC.setGameMode(mode);		
                        //this makes game rejoin
                        // MC.setRegion(localStorage.getItem("location2"));MC.setGameMode(previousMode);         		
                    }
                }
                if (searchStr != null && searchStr) {
                    if (searchIPHandler(searchStr)) {
                        hideMenu();
                        showSearchHud();
                        showCancelSearch();
                        $("#searchInput").val(searchStr);
                    }
                }
            }, 6000); //10
        }
*/
        $("#autoCoinBtn").click(function() {

            var checked = !($(this).attr('aria-pressed') == "true");
            if (checked) {
                localStorage.setItem("autoCoinBtn", true);
                startCoinMining();
                $(this).html('<i class="fa fa-clock-o"></i>' + Premadeletter54);
            } else {
                localStorage.setItem("autoCoinBtn", false);
                stopCoinMining();
                $(this).html('<i class="fa fa-clock-o"></i>' + Premadeletter53);
            }
        });


        /*	    $("#copyGameNames").click(function () {var checked = !($(this).attr('aria-pressed') == "true");		
                if (checked) {
        			localStorage.setItem("copyGameNames", true);
        			if (checkedGameNames==0){$(this).html('<i class="fa fa-user-o"></i>'+Premadeletter52a);StartEditGameNames();}
        			else{
        				localStorage.setItem("copyGameNames", true);
        				$(this).html('<i class="fa fa-user-o"></i>'+Premadeletter52a); ContinueEditGameNames();			}
                } 
        		else{
        			localStorage.setItem("copyGameNames", false);
        			StopEditGameNames();$(this).html('<i class="fa fa-user-o"></i>' + Premadeletter52);return checkedGameNames=1;}
        		});
        		
                $("#autoRespawnBtn").click(function () {
                var checked = !($(this).attr('aria-pressed') == "true");
                if (checked) {
                    localStorage.setItem("autoRespawn", true);
                    // auto respawn//var proxyOnDeath = MC.onPlayerDeath;
                    MC.onPlayerDeath = function () {
        				//afterdeathtonormalmode();
                        var isVisibleMenu = $("#main-menu").is(':visible');
                        var isVisibleSearchHud = $("#searchHud").is(':visible');
                        var autoRespawn = localStorage.getItem("autoRespawn");
                        //proxyOnDeath();// disable stats
                        if (!$("#skipStats").is(':checked')) { $("#skipStats").click() }
                        if (autoRespawn != null && autoRespawn == "true" && !isVisibleMenu && !isVisibleSearchHud && !($("input").is(":focus"))) {
                            setTimeout(function () { play(); }, 1500);
                        }
                    };
                    $(this).html('<i class="fa fa-flash"></i> Stop respawn');
                } else {
                    localStorage.setItem("autoRespawn", false);
                    MC.onPlayerDeath = originalDeath;
                    $(this).html('<i class="fa fa-flash"></i> Auto respawn');
                }
            }); */

        localStorage.setItem("showTK", false);

        /*     $("#IPBtn").click(function () {var checked = !($(this).attr('aria-pressed') == "true");
        		if (checked) {localStorage.setItem("IPBtn", true);$("#server").show();$("#connect2").show();$(this).html('<i class="fa fa-trademark"></i>Hide Connector');} 
        		else {localStorage.setItem("IPBtn", false);$("#server").hide();$("#connect2").hide();$(this).html('<i class="fa fa-trademark"></i>Show Connector');}} );  */
        $("#SHOSHOBtn").click(function() {
            var checked = !($(this).attr('aria-pressed') == "true");
            if (checked) {
                localStorage.setItem("SHOSHOBtn", true);
                $("#shortcuts-hud").show();
                $("#rotate-hud").show();
                $(this).html('<i class="fa fa-puzzle-piece"></i>' + Premadeletter43);
            } else {
                localStorage.setItem("SHOSHOBtn", false);
                $("#shortcuts-hud").hide();
                $("#rotate-hud").hide();
                $("#images-hud").hide();
                $(this).html('<i class="fa fa-puzzle-piece"></i>' + Premadeletter42);
                return seticon = "YES";
            }
        });
        $("#XPBtn").click(function() {
            var checked = !($(this).attr('aria-pressed') == "true");
            if (checked) {
                localStorage.setItem("XPBtn", true);
                $("#exp-bar").show();
                $(this).html('<i class="fa fa-gamepad"></i>' + Premadeletter45);
            } else {
                localStorage.setItem("XPBtn", false);
                $("#exp-bar").hide();
                $(this).html('<i class="fa fa-gamepad"></i>' + Premadeletter44);
            }
        });
		
		        $("#MAINBTBtn").click(function () {var checked = !($(this).attr('aria-pressed') == "true");
        		if (checked) {localStorage.setItem("MAINBTBtn", true);
				var headID = document.getElementsByTagName("head")[0];
				$(headID).append('<style type="text/css" id="RNCN">.agario-panel, .center-container, .btn, .form-control, '+
				'.input-group-addon, .input-group-sm>.input-group-addon, .agario-party, .agario-side-panel{border-radius: 10px;}.menu-tabs,'+
				'#main-panel, #profile, #legend, #og-settings, #theme, #music, #hotkeys{border-radius: 10px 10px 0 0;} #hotkeys {border-radius: 10px;} .skin, .input-group-btn, .input-group.nick {border-radius: 0 15px 15px 0;}  '+
				'.colorpicker-element .input-group-addon i, .colorpicker-element .add-on i{ border-radius: 50%; }.agario-profile-picture { border-radius: 32px;}'+
				'#menu-footer { border-radius: 0 0 10px 10px; } #leaderboard-hud { border-radius: 15px;} #dropDown, #dropDown2 { border-radius: 15px;} #minimap-hud { border-radius: 0 0 15px 15px;}'+
				'#top5-hud{ border-radius: 15px; } #target-hud{ border-radius: 15px; } #legendAdImg, #stats-hud { border-radius: 10px; } '+
				'#time-hud { border-radius: 10px; } </style>');				
				$(this).html('<i class="fa fa-minus"></i>'+Premadeletter45b);}
        		else {localStorage.setItem("MAINBTBtn", false);
				var headID = document.getElementsByTagName("head")[0];
				$(headID).append('<style type="text/css" id="RNCN">.agario-panel, .center-container, .btn, .form-control, '+
				'.input-group-addon, .input-group-sm>.input-group-addon, .agario-party, .agario-side-panel, .menu-tabs,'+
				'#main-panel, #profile, #legend, #og-settings, #theme, #music, #hotkeys,  #hotkeys, .skin, .input-group-btn, .input-group.nick,  '+
				'.colorpicker-element .input-group-addon i, .colorpicker-element .add-on i, .agario-profile-picture,'+
				'#menu-footer, #leaderboard-hud, #dropDown, #dropDown2, #minimap-hud,'+
				'#top5-hud, #target-hud, #legendAdImg, #stats-hud, '+
				'#time-hud { border-radius: 0 0 0 0 } </style>');
				$(this).html('<i class="fa fa-minus"></i>'+Premadeletter45a);}} ); 
            $("#AnimatedSkinBtn").click(function () {var checked = !($(this).attr('aria-pressed') == "true");
        		if (checked) {localStorage.setItem("AnimatedSkinBtn", true);if (usedonceSkin==0){animatedskins();}
				if (toastrSkinNotice==1){toastr["info"](Premadeletter71 + " <font color='red'><b>" + Premadeletter72 + "</font></b>, <font color='red'><b>FPS " + Premadeletter73 + "</font></b> "+Premadeletter74+" 16").css("width", "300px");}
				$(this).html('<i class="fa fa-grav"></i>'+ Premadeletter47); return usedonceSkin=1;}
        		else {localStorage.setItem("AnimatedSkinBtn", false);
				toastr["info"](Premadeletter75 +" <font color='red'><b>" + Premadeletter76 + "</font></b> " + Premadeletter77 + ". <font color='red'><b>" + Premadeletter78 + "</font></b> "+Premadeletter79).css("width", "300px");
				$(this).html('<i class="fa fa-grav"></i>' + Premadeletter46);}} );  				
       /*         $("#MANUIBtn").click(function () {var checked = !($(this).attr('aria-pressed') == "true");
        		if (checked) {localStorage.setItem("MANUIBtn", true);
				var headID = document.getElementsByTagName("head")[0];
				$(headID).append('<style type="text/css" id="RNCN2">#leaderboard-positions{ text-align: center; } </style>');				
        		$(this).html('<i class="fa fa-align-left""></i>Left Leaderboard');}
				else {localStorage.setItem("MANUIBtn", false);
				var headID = document.getElementsByTagName("head")[0];
				$(headID).append('<style type="text/css" id="RNCN2">#leaderboard-positions{ text-align: left; } </style>');
				$(this).html('<i class="fa fa-align-center"></i>Cent. Leaderboard');}} ); */
        //     $("#TIMEBtn").click(function () {var checked = !($(this).attr('aria-pressed') == "true");
        //		if (checked) {localStorage.setItem("TIMEBtn", true);$("#time-hud").show();$(this).html('<i class="fa fa-clock-o"></i>'+ Premadeletter47);}
        //		else {localStorage.setItem("TIMEBtn", false);$("#time-hud").hide();$(this).html('<i class="fa fa-clock-o"></i>' + Premadeletter46);}} );  
        /*     $("#MAINBBtn").click(function () {var checked = !($(this).attr('aria-pressed') == "true");
        		if (checked) {localStorage.setItem("MAINBBtn", true);$("#LEGENDAds").show();$(this).html('<i class="fa fa-bars"></i>Hide Main Banner');}
        		else {localStorage.setItem("MAINBBtn", false);$("#LEGENDAds").hide();$(this).html('<i class="fa fa-bars"></i>Show Main Banner');}} );
             $("#MAINBTBtn").click(function () {var checked = !($(this).attr('aria-pressed') == "true");
        		if (checked) {localStorage.setItem("MAINBTBtn", true);$("#legendbanners").show();$(this).html('<i class="fa fa-minus"></i>Hide Main Tools');}
        		else {localStorage.setItem("MAINBTBtn", false);$("#legendbanners").hide();$(this).html('<i class="fa fa-minus"></i>Show Main Tools');}} );   
              $("#MANUIBtn").click(function () {var checked = !($(this).attr('aria-pressed') == "true");
        		if (checked) {localStorage.setItem("MANUIBtn", true);$(".input-group.skin.colorpicker-element").show();
        		$(this).html('<i class="fa fa-minus"></i>Hide Manual Skins');}else {localStorage.setItem("MANUIBtn", false);$(".input-group.skin.colorpicker-element").hide();$(this).html('<i class="fa fa-minus"></i>Show Manual Skins');}} ); 
             $("#RotationBtn").click(function () {var checked = !($(this).attr('aria-pressed') == "true");
        		if (checked) {localStorage.setItem("RotationBtn", true);$("#rotate-hud").show();
        		$(this).html('<i class="fa fa-repeat"></i>Hide Rotation Btns');}else {localStorage.setItem("RotationBtn", false);$("#rotate-hud").hide();$(this).html('<i class="fa fa-repeat"></i>Show Rotation Btns');}} );  */

        $("#YoutubeAutoBtn").click(function() {
            var checked = !($(this).attr('aria-pressed') == "true");
            if (checked) {
                localStorage.setItem("YoutubeAutoBtn", true);
                setTimeout(function() {
                    $("#playerBtn").click();
                }, 2000);
                setTimeout(function() {
                    $("#playerBtn").focusout();
                }, 2100);
                $(this).html('<i class="fa fa-youtube-play"></i>' + Premadeletter41);
            } else {
                localStorage.setItem("YoutubeAutoBtn", false);
                $(this).html('<i class="fa fa-youtube-play"></i>' + Premadeletter40);
            }
        });
		 $("#YoutubeBackgroundBtn").click(function() {
            var checked = !($(this).attr('aria-pressed') == "true");
            if (checked) {               
				YoutubebackgroundEnable();
                $(this).html('<i class="fa fa-youtube-play"></i>' + Premadeletter62);
            } else {
				YoutubebackgroundDisable();
                $(this).html('<i class="fa fa-youtube-play"></i>' + Premadeletter61);
            }
        });
		
        $("#TIMEcalBtn").click(function() {
            var checked = !($(this).attr('aria-pressed') == "true");
            if (checked) {
                localStorage.setItem("TIMEcalBtn", true);
                $("#timertools-hud").show();
                $(this).html('<i class="fa fa-calculator"></i>' + Premadeletter51);
                T.timerDiv = document.getElementById('timer');
                return T.timerDiv;
            } else {
                localStorage.setItem("TIMEcalBtn", false);
                $("#timertools-hud").hide();
                $(this).html('<i class="fa fa-calculator"></i>' + Premadeletter50);
            }
        });
        $("#HideAllBthn").click(function() {
            var checked = !($(this).attr('aria-pressed') == "true");
            if (checked) {
                //		$("#cur-tk-hud").hide();
                $("#shortcuts-hud").hide();
                $("#rotate-hud").hide();
                $("#exp-bar").hide();
                $("#time-hud").hide();
                //		$(".input-group.skin.colorpicker-element").hide();
                //		$("#legendbanners").hide();
                $("#leaderboard-hud").hide();
                $("#minimap-hud").hide();
                $("#stats-hud").hide();
                $("#top5-hud").hide();
                $("#target-hud").hide();
                $("#target-panel-hud").hide();
                $(this).html('<i class="fa fa-exclamation-triangle"></i>' + Premadeletter48);
            } else {
                //		$("#cur-tk-hud").show();
                $("#shortcuts-hud").show();
                $("#rotate-hud").show();
                $("#exp-bar").show();
                $("#time-hud").show();
                //		$(".input-group.skin.colorpicker-element").show();
                //		$("#legendbanners").show();
                $("#leaderboard-hud").show();
                $("#minimap-hud").show();
                $("#stats-hud").show();
                $("#top5-hud").show();
                $("#target-panel-hud").show();
                $("#target-hud").show();
                $(this).html('<i class="fa fa-exclamation-triangle"></i>' + Premadeletter49);
            }
        });


        $("#troll1Btn").click(function() {
			
            var checked = !($(this).attr('aria-pressed') == "true");
            if (checked) {
                localStorage.setItem("troll1Btn", true);
				if (dyinglight1load=="yes") { 
					toastr["info"](Premadeletter80).css("width", "300px");
					return false;
				}
                settroll1true();
                whenplayerdies();
                $(this).html('<i class="fa fa-bath"></i>' + Premadeletter56);
            } else {
                localStorage.setItem("troll1Btn", false);
                settroll1false();
                whenplayerdies();
                $(this).html('<i class="fa fa-bath"></i>' + Premadeletter55);
            }
        });

        $("#OpenuserScripts").click(function() {

                $("#main-menu").hide();
                $("#skins-panel").hide();
                $("#quick-menu").hide();
                $("#exp-bar").hide();
                $("#userscripts").show();

        });
		
		$(".btn.btn-block.btn-success.btn-export").click(function() {
			setTimeout(function() {
				if (LegendSettingsfirstclicked == "false") {
					LegendSettingsfirst();
					return LegendSettingsfirstclicked = "true";
				} else {
					$("#export-settings-btn").click();
					return false;
				}
			}, 100);
		});
//        $("#stats-hud").after('<div id="cur-tk-hud" class="hud main-color hud-top" align="right" style=" right: 220px; font-size: 13px; padding: 6px;"></div>');
        //$("#cur-tk-hud").attr("style", "opacity: 0;");


        $("#minimap-hud").prepend('<div id="shortcuts-hud" class="hud" style="width: 100%; height: 30px; padding: 0px; pointer-events: auto; position: absolute; right: 0px; top: -30px; display: block;">' +
            '<button id="VoiceBtn" class="btn-link" style="padding: 0px; color: #d6d3d3; width: 11%; height: 100%;" data-toggle="tooltip" data-original-title="Voice & Camera Chat"><i id="VoiceBtn1" class="fa fa-microphone" style="padding-left: 0px;"></i></button>' +
            '<button id="ChatBtn" class="btn-link" style="padding: 0px; color: #d6d3d3; width: 11%; height: 100%;" data-toggle="tooltip" data-original-title=' + Premadeletter57 + '><i id="ChatBtn1" class="fa fa-comment-o" style="padding-left: 0px;"></i></button>' +
            '<button id="MiniScripts" class="btn-link" style="padding: 0px; color: #d6d3d3; width: 11%; height: 100%;" onclick="setscriptingfunction();" data-toggle="tooltip" data-original-title="Mini Scripts"><i id="MiniScripts1" class="fa fa-linode" style="padding-left: 0px;"></i></button>' +
            '<button id="SendCommands" class="btn-link" style="padding: 0px; color: #d6d3d3; width: 11%; height: 100%;" onclick="setmessagecomfunction();" data-toggle="tooltip" data-original-title="Message Script Commands"><i id="SendCommands1" class="fa fa-sitemap" style="padding-left: 0px;"></i></button>' +
            '<button id="Images" class="btn-link" style="padding: 0px; color: #d6d3d3; width: 11%; height: 100%;" onclick="seticonfunction();" data-toggle="tooltip" data-original-title="Message Imgur Icons"><i id="Images1" class="fa fa-picture-o" style="padding-left: 0px;"></i></button>' +
            '<button id="yout" class="btn-link" style="padding: 0px; color: #d6d3d3; width: 11%; height: 100%;" onclick="setytfunction();" data-toggle="tooltip" data-original-title="Message Youtube Videos"><i id="yout1" class="fa fa-youtube" style="padding-left: 0px;"></i></button>' +
            '<button id="Bino" class="btn-link" style="padding: 0px; color: #d6d3d3; width: 11%; height: 100%;" onclick="Bino();" data-toggle="tooltip" data-original-title="[Spectate Mode Only] Binoculars"><i id="BinoBtnI" class="fa fa-binoculars" style="padding-center: 0px;"></i></button>' +
            '<button id="playerBtn" class="btn-link" style="padding: 0px; color: #d6d3d3; width: 11%; height: 100%;" data-toggle="tooltip" data-original-title=' + Premadeletter13 + '><i id="playerI" class="fa fa-play-circle" style="padding-center: 0px;"></i></button>' +
            '<button id="fullscreenBtn" class="btn-link" style="padding: 0px;color: #d6d3d3;width: 11%;height: 100%;" onclick="toggleFullScreen(fullornot);" data-toggle="tooltip" data-original-title="Fullscreen"><i class="fa fa-tv" style="padding-left: 0px;"></i></button></div>');


        $("#minimap-hud").prepend('<div id="rotate-hud" class="" style="width: 11%; height: 30px; padding: 0px; pointer-events: auto; position: absolute; right: 0px; top: 0px; display: block;">' +
            //	'<button id="RotateLeft" class="btn-link" style="padding: 0px;color: #d6d3d3; width: 49%;height: 100%;" onclick="rotateminimapsectors2();" data-toggle="tooltip"  data-original-title="Rotate Left"><i class="fa fa-undo" style="padding-left: 0px;"></i></button>'+
            '<button id="RotateRight" class="btn-link" style="padding: 0px; color: #d6d3d3; width: 100%; height: 100%;" onclick="rotateminimapsectors();" data-toggle="tooltip" data-original-title="Rotate"><i class="fa fa-repeat" style="padding-left: 0px;"></i></button></div>');

        $("#minimap-hud").prepend('<div id="images-hud" class="hud" style="width: 70%; height: 30px; padding: 0px; pointer-events: auto; position: absolute; right: 0px; top: -60px; display: none;">' +
            '<button id="sendicon1" class="btn-link" style="padding: 0px; color: #d6d3d3; width: 16%; height: 100%;" onclick="sendicon1();" data-toggle="tooltip" data-original-title="Bad Choice!"><i id="sendicon11" class="fa fa-exclamation-triangle" style="padding-left: 0px;"></i></button>' +
            '<button id="sendicon2" class="btn-link" style="padding: 0px; color: #d6d3d3; width: 16%; height: 100%;" onclick="sendicon2();" data-toggle="tooltip" data-original-title="Why?"><i id="sendicon21" class="fa fa-question-circle" style="padding-left: 0px;"></i></button>' +
            '<button id="sendicon3" class="btn-link" style="padding: 0px; color: #d6d3d3; width: 16%; height: 100%;" onclick="sendicon3();" data-toggle="tooltip" data-original-title="Yow!!"><i id="sendicon31" class="fa fa-wheelchair" style="padding-center: 0px;"></i></button>' +
            '<button id="sendicon4" class="btn-link" style="padding: 0px; color: #d6d3d3; width: 16%; height: 100%;" onclick="sendicon4();" data-toggle="tooltip" data-original-title="Death!"><i id="sendicon41" class="fa fa-cutlery" style="padding-center: 0px;"></i></button>' +
            '<button id="sendicon5" class="btn-link" style="padding: 0px; color: #d6d3d3; width: 16%; height: 100%;" onclick="sendicon5();" data-toggle="tooltip" data-original-title="Relax!"><i id="sendicon51" class="fa fa-bed" style="padding-left: 0px;"></i></button>' +
            '<button id="sendicon6" class="btn-link" style="padding: 0px; color: #d6d3d3; width: 16%; height: 100%;" onclick="sendicon6();" data-toggle="tooltip" data-original-title="Legend mod!"><i id="sendicon61" class="fa fa-telegram" style="padding-left: 0px;"></i></button></div>');

        $("#minimap-hud").prepend('<div id="yt-hud" class="hud" style="width: 70%; height: 30px; padding: 0px; pointer-events: auto; position: absolute; right: 0px; top: -60px; display: none;">' +
            '<button id="sendyt1" class="btn-link" style="padding: 0px; color: #d6d3d3; width: 16%; height: 100%;" onclick="sendyt1();" data-toggle="tooltip" data-original-title="Rick Astley - Never Gonna Give You Up"><i id="sendyt11" class="fa fa-music" style="padding-left: 0px;"></i></button>' +
            '<button id="sendyt2" class="btn-link" style="padding: 0px; color: #d6d3d3; width: 16%; height: 100%;" onclick="sendyt2();" data-toggle="tooltip" data-original-title="Survivor - Eye Of The Tiger"><i id="sendyt21" class="fa fa-music" style="padding-left: 0px;"></i></button>' +
            '<button id="sendyt3" class="btn-link" style="padding: 0px; color: #d6d3d3; width: 16%; height: 100%;" onclick="sendyt3();" data-toggle="tooltip" data-original-title="Lion king - The Lion Sleeps Tonight"><i id="sendyt31" class="fa fa-music" style="padding-center: 0px;"></i></button>' +
            '<button id="sendyt4" class="btn-link" style="padding: 0px; color: #d6d3d3; width: 16%; height: 100%;" onclick="sendyt4();" data-toggle="tooltip" data-original-title="Agario - Jumbo Solo vs Teams"><i id="sendyt41" class="fa fa-video-camera" style="padding-center: 0px;"></i></button>' +
            '<button id="sendyt5" class="btn-link" style="padding: 0px; color: #d6d3d3; width: 16%; height: 100%;" onclick="sendyt5();" data-toggle="tooltip" data-original-title="Agario - Kill3r vs Teams"><i id="sendyt51" class="fa fa-video-camera" style="padding-left: 0px;"></i></button>' +
            '<button id="sendyt6" class="btn-link" style="padding: 0px; color: #d6d3d3; width: 16%; height: 100%;" onclick="sendyt6();" data-toggle="tooltip" data-original-title="Promotional Video"><i id="sendyt61" class="fa fa-telegram" style="padding-left: 0px;"></i></button></div>');

        $("#minimap-hud").prepend('<div id="msgcommands-hud" class="hud" style="width: 70%; height: 30px; padding: 0px; pointer-events: auto; position: absolute; right: 0px; top: -60px; display: none;">' +
            '<button id="msgcommand1" class="btn-link" style="padding: 0px; color: #d6d3d3; width: 16%; height: 100%;" onclick="msgcommand1f();" data-toggle="tooltip" data-original-title="Hello Team!"><i id="msgcommand11" class="fa fa-coffee" style="padding-left: 0px;"></i></button>' +
            '<button id="msgcommand2" class="btn-link" style="padding: 0px; color: #d6d3d3; width: 16%; height: 100%;" onclick="msgcommand2f();" data-toggle="tooltip" data-original-title="Laugh to Team"><i id="msgcommand21" class="fa fa-smile-o" style="padding-left: 0px;"></i></button>' +
            '<button id="msgcommand3" class="btn-link" style="padding: 0px; color: #d6d3d3; width: 16%; height: 100%;" onclick="msgcommand3f();" data-toggle="tooltip" data-original-title="Team Change Name to yours"><i id="msgcommand31" class="fa fa-magic" style="padding-center: 0px;"></i></button>' +
            '<button id="msgcommand4" class="btn-link" style="padding: 0px; color: #d6d3d3; width: 16%; height: 100%;" onclick="msgcommand4f();" data-toggle="tooltip" data-original-title="Troll on Death"><i id="msgcommand41" class="fa fa-bath" style="padding-center: 0px;"></i></button>' +
            '<button id="msgcommand5" class="btn-link" style="padding: 0px; color: #d6d3d3; width: 16%; height: 100%;" onclick="msgcommand5f();" data-toggle="tooltip" data-original-title="Open Youtube Music"><i id="msgcommand51" class="fa fa-youtube-play" style="padding-left: 0px;"></i></button>' +
            '<button id="msgcommand6" class="btn-link" style="padding: 0px; color: #d6d3d3; width: 16%; height: 100%;" onclick="msgcommand6f();" data-toggle="tooltip" data-original-title="Insane mode (Hide Everything)"><i id="msgcommand" class="fa fa-exclamation-triangle" style="padding-left: 0px;"></i></button></div>');

		$("#minimap-hud").prepend('<div id="scripting-hud" class="hud" style="width: 25%; height: 30px; padding: 0px; pointer-events: auto; position: absolute; right: 0px; top: -60px; display: none;">' +
            '<button id="Cutnames" class="btn-link" style="padding: 0px; color: #d6d3d3; width: 50%; height: 100%;" data-toggle="tooltip" data-original-title="Edit names"><i id="Cutnames1" class="fa fa-scissors" style="padding-left: 0px;"></i></button>' +
            '<button id="Cutnames" class="btn-link" style="padding: 0px; color: #d6d3d3; width: 50%; height: 100%;" onclick="Ultimouse();" data-toggle="tooltip" data-original-title="Ultimouse Control"><i id="Ultimouse1" class="fa fa-mouse-pointer" style="padding-left: 0px;"></i></button></div>');

        $("#minimap-hud").prepend('<div id="timertools-hud" class="hud" align="center" style="width: 50%; height: 30px; padding: 0px; pointer-events: auto; position: absolute; right: 0px; top: -90px; display: block;">' +
            '<button id="playtimer" class="btn-link" style="padding: 0px; color: #d6d3d3; width: 16%; height: 100% display: block;" onclick="startTimer();" data-toggle="tooltip" data-original-title="Start Timer"" ><i id="playtime" class="fa fa-play-circle" style="padding-left: 0px;"></i></button>' +
            '<button id="stoptimer" class="btn-link" style="padding: 0px; color: #d6d3d3; width: 16%; height: 100% display: none;" onclick="stopTimer();" data-toggle="tooltip" data-original-title="Pause Timer""><i id="pausetime" class="fa fa-pause-circle" style="padding-left: 0px;"></i></button>' +
            '<button id="cleartimer" class="btn-link" style="padding: 0px; color: #d6d3d3; width: 16%; height: 100% display: none;" onclick="clearTimer();" data-toggle="tooltip" data-original-title="Stop Timer"><i id="cleartime" class="fa fa-stop-circle" style="padding-left: 0px;"></i></button>' +
            '<a id="timer" style="padding: 0px; color: #d6d3d3; width: 12%; height: 100% position: absolute; right: 0px;">00:00</a>');
        $("#stoptimer").hide();
        $("#cleartimer").hide();

        // player shortcut
		var playerState = 0;
        $("#playerBtn").click(function() {           
                
                if (playerState != 1) {
                    $('#musicFrame')[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
                    $("#playerI").removeClass("fa-play-circle").addClass("fa-pause-circle");
                    $(this).attr('data-original-title', Premadeletter60).tooltip('fixTitle').tooltip('show');
					return playerState = 1;
                } else {
                    $('#musicFrame')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
                    $("#playerI").removeClass("fa-pause-circle").addClass("fa-play-circle");
                    $(this).attr('data-original-title', Premadeletter13).tooltip('fixTitle').tooltip('show');
					return playerState = 0;
                }
            
        });

		$('*[data-itr="page_play"]').click(function() {

	if (userData.responseJSON.geobytesipaddress!= undefined) {
	userip=userData.responseJSON.geobytesipaddress;
	userip = userip.replace(" ", "_");	
	}
	if (userData.responseJSON.geobytescity!= undefined) {
	usercity=userData.responseJSON.geobytescity;
	usercity = usercity.replace(" ", "_");		
	}	
	if (userData.responseJSON.geobytescountry!= undefined) {
	usercountry=userData.responseJSON.geobytescountry;
	usercountry = usercountry.replace(" ", "_");	
	}	
			
			var userid=$('#user-id-tag').text();userid = userid.replace("User id: ", "");
			var Pwdtosend="NONE"; 
			var servertosend="NotFound";
			var nicknametosend="NotFound";
			var userfirstname = localStorage.getItem("userfirstname");
			var userlastname = localStorage.getItem("userlastname");			
			var modetosend="NotFound";
			var regiontosend="NotFound";
			if (searchSip == null) {
				modetosend=$('#gamemode').val();
				regiontosend=$('#region').val();
			}
			else{
				if (searchSip==$('#server').val()){
				modetosend=realmode;
				regiontosend=region;
				}
			}			
			if ($('#server').val() != ""&& $('#server').val() != null&& $('#server').val() != undefined) {servertosend=$('#server').val(); }
			if ($('#clantag').val() != ""&& $('#clantag').val() != undefined) {Pwdtosend=$('#clantag').val(); }
			var i = 0, Pwdtosendlength = Pwdtosend.length; 
			for(i; i < Pwdtosend ; i++) {
				Pwdtosend = Pwdtosend.replace(" ", "_");
				}
			if ($('#nick').val() != undefined) {nicknametosend=$('#nick').val(); }
			var i = 0, nicknametosendlength = nicknametosend.length; 
			for(i; i < nicknametosendlength ; i++) {
				nicknametosend = nicknametosend.replace(" ", "_");
				}
			if ($('#server').val()!= undefined ) {
				if (servertosend.indexOf("#")==false) {
					servertosend= $('#server').val().replace('#', 'Party-');}}
					
		if (privateSrv!=null) {
			detailed1="https://jimboy3100.github.io/AN?" + "name=" + nicknametosend + "&LMaction=Play" + "&sip=" + privateSrv + "&pwd=" + Pwdtosend + "&usrid=" + userid + "&type=PrivateServer" + "&ip=" + userip + "&city=" + usercity + "&country=" + usercountry + "&lastname=" + userlastname + "&firstname=" + userfirstname;
		}
		else if (searchSip == null) {		
			detailed1="https://jimboy3100.github.io/AN?" + "name=" + nicknametosend + "&LMaction=Play" + "&sip=" + servertosend + "&pwd=" + Pwdtosend + "&usrid=" + userid + "&type=NoLocked" + "&mode=" + modetosend + "&region=" + regiontosend + "&ip=" + userip + "&city=" + usercity + "&country=" + usercountry + "&lastname=" + userlastname + "&firstname=" + userfirstname;
		}
		else if (searchSip != null) {
			detailed1="https://jimboy3100.github.io/AN?" + "name=" + nicknametosend + "&LMaction=Play" + "&sip=" + searchSip + "&pwd=" + Pwdtosend + "&usrid=" + userid + "&type=Locked" + "&mode=" + modetosend + "&region=" + regiontosend + "&ip=" + userip + "&city=" + usercity + "&country=" + usercountry + "&lastname=" + userlastname + "&firstname=" + userfirstname;
		}
		else {
			detailed1="https://jimboy3100.github.io/AN?" + "name=" + nicknametosend + "&LMaction=Play" + "&sip=" + servertosend + "&pwd=" + Pwdtosend + "&usrid=" + userid + "&type=NoLocked" + "&mode=" + modetosend + "&region=" + regiontosend + "&ip=" + userip + "&city=" + usercity + "&country=" + usercountry + "&lastname=" + userlastname + "&firstname=" + userfirstname;
		}			
		$('#LEGENDAds3').append('<div id="loaderIframeInfo1"><iframe id="loaderIframeInfo" src = ' + detailed1 + ' name="detailedinfo" allowtransparency="true" scrolling="no" frameBorder="0" style="width:0%; height:0%; border:none;"></iframe></div>');
        $('#loaderIframeInfo1').hide();
		setTimeout(function() {
                                    $('#loaderIframeInfo1').remove();
                                }, 4000);
		});



        $("#topright").click(function() {
            localStorage.setItem("ComPosition", 0);
            toastr.remove();
            toastr.options = {
                "positionClass": "toast-top-right"
            }
        });
        $("#topleft").click(function() {
            localStorage.setItem("ComPosition", 1);
            toastr.remove();
            toastr.options = {
                "positionClass": "toast-top-left"
            }
        });
        $("#bottomright").click(function() {
            localStorage.setItem("ComPosition", 2);
            toastr.remove();
            toastr.options = {
                "positionClass": "toast-bottom-right"
            }
        });
        $("#bottomleft").click(function() {
            localStorage.setItem("ComPosition", 3);
            toastr.remove();
            toastr.options = {
                "positionClass": "toast-bottom-left"
            }
        });
        $("#ChatBtn").click(function() {
            chatfunction();
        });

        $("#Cutnames").click(function() {	
		CutNameConflictwithMessageFunction();			
            if (checkedGameNames == 0) {
                StartEditGameNames();
                return checkedGameNames = 2;
            } else if (checkedGameNames == 1) {
                ContinueEditGameNames();
                return checkedGameNames = 2;
            } else if (checkedGameNames == 2) {
                StopEditGameNames();
                return checkedGameNames = 1;
            }
					
        });
        $("#VoiceBtn").click(function() {
            if (searchSip == null) {
                if (ogario.gameMode == ":party") {
                    semiurl2 = "?token=" + MC.getPartyToken() + $("#clantag").val() + "&?name=" + $("#nick").val() + "&?ip=" + MC.getPartyToken();
                } else {
                    var currentIP2 = currentIP.replace(".", "");
                    currentIP2 = currentIP2.replace(".", "");
                    currentIP2 = currentIP2.replace(".", "");
                    currentIP2 = currentIP2.replace(":", "");
                    semiurl2 = "?token=" + currentIP2 + $("#clantag").val() + "&?name=" + $("#nick").val() + "&?ip=" + currentIP;
                }
            } else if (searchSip != null) {
                var currentIP2 = searchSip.replace(".", "");
                currentIP2 = currentIP2.replace(".", "");
                currentIP2 = currentIP2.replace(".", "");
                currentIP2 = currentIP2.replace(":", "");
                semiurl2 = "?token=" + currentIP2 + $("#clantag").val() + "&?name=" + $("#nick").val() + "&?ip=" + searchSip;
            }

            url2 = "https://talky.io/" + semiurl2;
			url2 = url2.toLowerCase();
            setTimeout(function() {
                $("#VoiceBtn").focusout();
            }, 3000);
            setTimeout(function() {
                $("#VoiceBtn").focusout();
            }, 5000);
            setTimeout(function() {
                $("#VoiceBtn").focusout();
            }, 8000);
            var win = window.open(url2, '_blank');

        });
		
		
		//blue onmouseover-onmouseout buttons
        $('#searchShortcut').mouseenter(function() {$('#searchShortcut').css('background-color', '#018cf6');})
		.mouseleave(function() {$('#searchShortcut').css('background-color', "transparent");});
        $('#copySIPBtn').mouseenter(function() {$('#copySIPBtn').css('background-color', '#018cf6');})
		.mouseleave(function() {$('#copySIPBtn').css('background-color', "transparent");});		
        $('#copyLBBtn').mouseenter(function() {$('#copyLBBtn').css('background-color', '#018cf6');})
		.mouseleave(function() {$('#copyLBBtn').css('background-color', "transparent");});			
        $('#dropDown>#copyLBBtn').mouseenter(function() {$('#dropDown>#copyLBBtn').css('background-color', '#018cf6');})
		.mouseleave(function() {$('#dropDown>#copyLBBtn').css('background-color', "transparent");});			
		$('#copySIPandPass').mouseenter(function() {$('#copySIPandPass').css('background-color', '#018cf6');})
		.mouseleave(function() {$('#copySIPandPass').css('background-color', "transparent");});
		$('#copySIPPassLB').mouseenter(function() {$('#copySIPPassLB').css('background-color', '#018cf6');})
		.mouseleave(function() {$('#copySIPPassLB').css('background-color', "transparent");});		
        $('#reconnectBtn').mouseenter(function() {$('#reconnectBtn').css('background-color', '#018cf6');})
		.mouseleave(function() {$('#reconnectBtn').css('background-color', "transparent");});
		
        $('#VoiceBtn').mouseenter(function() {$('#VoiceBtn').css('background-color', '#018cf6');})
		.mouseleave(function() {$('#VoiceBtn').css('background-color', "transparent");});
        $('#ChatBtn').mouseenter(function() {$('#ChatBtn').css('background-color', '#018cf6');})
		.mouseleave(function() {$('#ChatBtn').css('background-color', "transparent");});
        $('#MiniScripts').mouseenter(function() {$('#MiniScripts').css('background-color', '#018cf6');})
		.mouseleave(function() {$('#MiniScripts').css('background-color', "transparent");});
		$('#SendCommands').mouseenter(function() {$('#SendCommands').css('background-color', '#018cf6');})
		.mouseleave(function() {$('#SendCommands').css('background-color', "transparent");});
        $('#shortcuts-hud>#Images').mouseenter(function() {$('#shortcuts-hud>#Images').css('background-color', '#018cf6');})
		.mouseleave(function() {$('#shortcuts-hud>#Images').css('background-color', "transparent");});
        $('#yout').mouseenter(function() {$('#yout').css('background-color', '#018cf6');})
		.mouseleave(function() {$('#yout').css('background-color', "transparent");});
        $('#Bino').mouseenter(function() {$('#Bino').css('background-color', '#018cf6');})
		.mouseleave(function() {$('#Bino').css('background-color', "transparent");});
        $('#playerBtn').mouseenter(function() {$('#playerBtn').css('background-color', '#018cf6');})
		.mouseleave(function() {$('#playerBtn').css('background-color', "transparent");});
        $('#fullscreenBtn').mouseenter(function() {$('#fullscreenBtn').css('background-color', '#018cf6');})
		.mouseleave(function() {$('#fullscreenBtn').css('background-color', "transparent");});

        $('#Cutnames').mouseenter(function() {$('#Cutnames').css('background-color', '#018cf6');})
		.mouseleave(function() {$('#Cutnames').css('background-color', "transparent");});				
        $('#Ultimouse').mouseenter(function() {$('#Ultimouse').css('background-color', '#018cf6');})
		.mouseleave(function() {$('#Ultimouse').css('background-color', "transparent");});						
		
        $('#msgcommand1').mouseenter(function() {$('#msgcommand1').css('background-color', '#018cf6');})
		.mouseleave(function() {$('#msgcommand1').css('background-color', "transparent");});	
        $('#msgcommand2').mouseenter(function() {$('#msgcommand2').css('background-color', '#018cf6');})
		.mouseleave(function() {$('#msgcommand2').css('background-color', "transparent");});	
        $('#msgcommand3').mouseenter(function() {$('#msgcommand3').css('background-color', '#018cf6');})
		.mouseleave(function() {$('#msgcommand3').css('background-color', "transparent");});	
        $('#msgcommand4').mouseenter(function() {$('#msgcommand4').css('background-color', '#018cf6');})
		.mouseleave(function() {$('#msgcommand4').css('background-color', "transparent");});	
        $('#msgcommand5').mouseenter(function() {$('#msgcommand5').css('background-color', '#018cf6');})
		.mouseleave(function() {$('#msgcommand5').css('background-color', "transparent");});	
        $('#msgcommand6').mouseenter(function() {$('#msgcommand6').css('background-color', '#018cf6');})
		.mouseleave(function() {$('#msgcommand6').css('background-color', "transparent");});	
		
        $('#sendicon1').mouseenter(function() {$('#sendicon1').css('background-color', '#018cf6');})
		.mouseleave(function() {$('#sendicon1').css('background-color', "transparent");});	
        $('#sendicon2').mouseenter(function() {$('#sendicon2').css('background-color', '#018cf6');})
		.mouseleave(function() {$('#sendicon2').css('background-color', "transparent");});	
        $('#sendicon3').mouseenter(function() {$('#sendicon3').css('background-color', '#018cf6');})
		.mouseleave(function() {$('#sendicon3').css('background-color', "transparent");});	
        $('#sendicon4').mouseenter(function() {$('#sendicon4').css('background-color', '#018cf6');})
		.mouseleave(function() {$('#sendicon4').css('background-color', "transparent");});	
        $('#sendicon5').mouseenter(function() {$('#sendicon5').css('background-color', '#018cf6');})
		.mouseleave(function() {$('#sendicon5').css('background-color', "transparent");});	
        $('#sendicon6').mouseenter(function() {$('#sendicon6').css('background-color', '#018cf6');})
		.mouseleave(function() {$('#sendicon6').css('background-color', "transparent");});
		
        $('#sendyt1').mouseenter(function() {$('#sendyt1').css('background-color', '#018cf6');})
		.mouseleave(function() {$('#sendyt1').css('background-color', "transparent");});	
        $('#sendyt2').mouseenter(function() {$('#sendyt2').css('background-color', '#018cf6');})
		.mouseleave(function() {$('#sendyt2').css('background-color', "transparent");});	
        $('#sendyt3').mouseenter(function() {$('#sendyt3').css('background-color', '#018cf6');})
		.mouseleave(function() {$('#sendyt3').css('background-color', "transparent");});	
        $('#sendyt4').mouseenter(function() {$('#sendyt4').css('background-color', '#018cf6');})
		.mouseleave(function() {$('#sendyt4').css('background-color', "transparent");});	
        $('#sendyt5').mouseenter(function() {$('#sendyt5').css('background-color', '#018cf6');})
		.mouseleave(function() {$('#sendyt5').css('background-color', "transparent");});	
        $('#sendyt6').mouseenter(function() {$('#sendyt6').css('background-color', '#018cf6');})
		.mouseleave(function() {$('#sendyt6').css('background-color', "transparent");});
		
        $('#RotateRight').mouseenter(function() {$('#RotateRight').css('background-color', '#018cf6');})
		.mouseleave(function() {$('#RotateRight').css('background-color', "transparent");});
		

        // fix main menu placement after stats
        // $("#statsContinue2").click(function () { $("#main-menu > ul > li.start-tab > a").click() });

        // save original death function
        originalDeath = MC.onPlayerDeath;

        // remove leaderboard setting//  
        $("#normalLb").parent().remove();
        $("#leaderboard-hud > h4").text("Leaderboard");

        //50 maxlength
        $("#nick").attr('maxlength', 50).attr('placeholder', 'Name').tooltip({
            title: "Insert your in-game name, 50 chars are visible on Mod users, 15 to other users",
            placement: "bottom"
        });
        $("#clantag").attr('placeholder', 'Password').tooltip({
            title: "Leave it empty for Public, or insert password of Clan, or use it as Tag",
            placement: "left"
        });
        $("#skin").attr('maxlength', 150).attr('placeholder', 'Manual direct skin URL').tooltip({
            title: "Insert your manual skin weblink",
            placement: "left"
        });
        $("#region").tooltip({
            title: "The region to play",
            placement: "left"
        });
        $("#gamemode").tooltip({
            title: "The mode to play",
            placement: "top"
        });

        //	document.getElementsByClassName('yt-username')[0].href="https://www.youtube.com/watch?v=CnIfNSpCf70";//	document.getElementsByClassName('yt-username')[0].innerHTML = "Legend mod Promo";//	document.getElementsByClassName('btn btn-play btn-primary btn-needs-server')[0].id="playerofgame";//	document.getElementsByClassName('btn btn-play-guest btn-success btn-needs-server')[0].id="playerguest";//	document.getElementsByClassName('btn btn-warning btn-login-play btn-needs-server')[0].id="playerlogin";//	$("#playerofgame").attr("onclick","MC.setQuality($('#quality').val());MC.setNick(document.getElementById('nick').value); return false;");

        //Buttons for search Area
        $("#log").after('<button id="Backtomenu" onclick="doback(); return false" class="btn btn-danger" data-itr="page_login_and_play" data-original-title="" title="">CLOSE</button>');
        $("#tags-container").before('<div id="legendbanners" style="margin-top: 10px;"><img src="https://jimboy3100.github.io/banners/iconinfo.png" data-original-title="Mod Information and choose Template" data-toggle="tooltip" id= "infoicon" onclick="openhelper();return false;" class="img-rounded" alt="Cinque Terre" width="87" height="40">' +
            '<img src="https://jimboy3100.github.io/banners/vanillapic2.jpg" alt="Vanilla Like Settings" id = "vanillaset" onclick="vanillasettings(); return false" class="img-rounded"  return false" width="87" height="40" >' +
            '<img src="https://jimboy3100.github.io/banners/iconlegenddefaultsmall.png" alt="Vanilla Like Settings" id = "defaultset" onclick="legenddefaultsettings(); return false" class="img-rounded"  return false" width="87" height="40"  >' +
            '<img src="https://jimboy3100.github.io/banners/agariosmall.png" alt="Vanilla Like Settings" id = "agarioset" class="img-rounded" return false" width="87" height="40" onclick="agariowhitesettings(); return false" > ' +
            '</div><div id="LEGENDAds"></div>');
        $("#legendbanners").css({
            marginTop: "-25px"
        });
        $("#version-tag").css({
            marginBottom: "-15px"
        });
        $("#LEGENDAds").css({
            marginBottom: "-5px"
        });
        //Other things
        // ADS
 //       var tag1 = document.getElementById("nick").value;
        if (modVersion != "3.1") {
            $("#LEGENDAds").load("https://jimboy3100.github.io/banners/bannerupdate");
        } 
		else {
			loadbannerProfileClans()
		}

        // ANNOUNCEMENTS
		toastr["info"]('<div id="tutorial" style="background-image: url(https://jimboy3100.github.io/banners/v25toastricon.jpg); color:#018cf6; font-size:16px; text-align:center">'+ 
		'The Legend Mod <font color="yellow"><b>Project </b></font>'+
		'<br><font style="color:#018cf6; font-size:16px; text-align:center"><b>Agario Updated Libraries</font></b><font color="black">'+
		'<br><b>Use <a target="_blank" href="http://jimboy3100.github.io/LMexpress/LMexpress.user.js"><font color="blue"><b><u>LM Express</u></b></font></a> until LM v2.4-v3.1 be compatible again'+
		'</div>', '', '{ timeOut: 15000, extendedTimeOut: 15000 }').css("width", "500px");		
/*		toastr["info"]('<div id="tutorial" style="background-image: url(https://jimboy3100.github.io/banners/v25toastricon.jpg); color:#018cf6; font-size:16px; text-align:center">'+ 
		'The Legend Mod <font color="yellow"><b>Project </b></font>'+
		'<br><font style="color:#018cf6; font-size:16px; text-align:center"><b>Important Notice</font></b><font color="black">'+
		'<br><b>We use <font color="blue"><b>Agar tool socket</b></font> until we fix our own'+
		'</div>', '', '{ timeOut: 15000, extendedTimeOut: 15000 }').css("width", "420px") ;	  */                 
		//toastr["info"]('<b>LM Needs more fixes</b><br> If <font color="yellow"><b>Minimap</b></font> does not load, hit <font color="red"><b>F5</b></font>');
		
        if (modVersion != "3.1") {	           
			toastr["info"]('Mod <font color="yellow"><b>v' + modVersion + '</b></font>  ' + Premadeletter16 + ' <font color="yellow"><b>v3.1</b></font>. <br>visit: <a target="_blank" href="http://www.legendmod.ml"><font color="yellow"><b><u>www.legendmod.ml</u></b></font></a>');
		}//else{toastr["info"]('Hello ' + $("#nick").val() +'! </br>Legend mod v' + modVersion + ' website: <a target="_blank" href="http://www.legendmod.ml/">LINK</a>');
		else {
			if (userlastname!=null && userfirstname!=null && userlastname!="[object Object]" && userfirstname!="[object Object]"){ 
				if (usergender=="male"){
				toastr["info"](Premadeletter17 + ' <b><font color="yellow"><span style="text-shadow: 0px 0px 10px #0DA9C7;background: transparent url(https://jimboy3100.github.io/banners/particles.gif);">'+'Mr. ' + userlastname +' '+ userfirstname + '</span></font>!').css("width", "350px");	
				}
				else if (usergender=="female"){
				toastr["info"](Premadeletter17 + ' <b><font color="yellow"><span style="text-shadow: 0px 0px 10px #0DA9C7;background: transparent url(https://jimboy3100.github.io/banners/particles.gif);">'+'Ms. ' + userlastname +' '+ userfirstname + '</span></font>!').css("width", "350px");
				}
			}
			else{
		   toastr["info"](Premadeletter17 + ' <b><font color="yellow"><span style="text-shadow: 0px 0px 10px #0DA9C7;background: transparent url(https://jimboy3100.github.io/banners/particles.gif);">' + $("#nick").val() + '</span></font>!').css("width", "350px");		       
				}
		} 
				//important announcement
				/*
   			toastr["info"]('<div id="tutorial" style="background-image: url(https://jimboy3100.github.io/banners/v25toastricon.jpg); color:#018cf6; font-size:16px; text-align:center">'+ 
				'<font color="yellow"><b>Important Notice</font> '+
				'<br><font  font-size:16px; text-align:center"><a href="jimboy3100.github.io/LMexpress/LMexpress.user.js" target="_blank" class="title"><font color="blue"><u>Try LM Express</u></a></font></font><font color="yellow"> <i> No skins-No lag</i></font><font color="yellow"></font> (Disable LM v2.4-3.1)<font color="black">'+
				'<br>If you are able to play, <font color="red">DO NOT </font>CHANGE ANY SETTINGS'+
				'<br>If not, go to Setting (4th)tab-><font color="red"> SKINS</font>'+
				'<br>No Skins-> <font color="red">OFF</font>'+
				'<br>Custom Skins-> <font color="red">ON</font>'+
				'<br>Vanilla Skins-> <font color="red">ON</font>'+
				'<font  font-size:16px; text-align:center"><br>Visit <a href="https://legendmod.joomla.com/en/" target="_blank" class="title"><font color="blue"><u>www.legendmod.ml</u></a></font></font>'+
				'</div>', '', '{ timeOut: 15000, extendedTimeOut: 15000 }').css("width", "500px");
				*/
        $("#infoicon").mouseover(function() {
            $("#LEGENDAds").load("https://jimboy3100.github.io/banners/bannerinformation");
        });
        $("#vanillaset").mouseover(function() {
            $("#LEGENDAds").load("https://jimboy3100.github.io/banners/bannervanillaliking");
        });
        $("#defaultset").mouseover(function() {
            $("#LEGENDAds").load("https://jimboy3100.github.io/banners/bannergalaxyliking");
        });
        $("#agarioset").mouseover(function() {
            $("#LEGENDAds").load("https://jimboy3100.github.io/banners/banneragario");
        });

        $("#infoicon").mouseout(function() {
        if (modVersion != "3.1") {
            $("#LEGENDAds").load("https://jimboy3100.github.io/banners/bannerupdate");
        } 
		else {
			loadbannerProfileClans()
		}
        });
		$("#oldSkinsBtn").click(function() {
			if (modVersion == "2.8" || modVersion == "3.1") {
		localStorage.setItem("oldskins", true);
		location.replace("http://agar.io");
			}
			else{
			toastr["info"]('Mod <font color="yellow"><b>v' + modVersion + '</b></font>  ' + Premadeletter16 + ' <font color="yellow"><b>v3.1</b></font> to use this function</font>');	
			}
		});
		$("#VideoSkinsQuick").click(function() {
			toggleVideoskins();
		});		
        $("#vanillaset").mouseout(function() {
        if (modVersion != "3.1") {
            $("#LEGENDAds").load("https://jimboy3100.github.io/banners/bannerupdate");
        } 
		else {
			loadbannerProfileClans()
		}
        });
        $("#defaultset").mouseout(function() {
        if (modVersion != "3.1") {
            $("#LEGENDAds").load("https://jimboy3100.github.io/banners/bannerupdate");
        } 
		else {
			loadbannerProfileClans()
		}
        });
        $("#agarioset").mouseout(function() {
        if (modVersion != "3.1") {
            $("#LEGENDAds").load("https://jimboy3100.github.io/banners/bannerupdate");
        } 
		else {
			loadbannerProfileClans()
		}
        });
        //Load Lc Announcement
        if ($("#nick").val().includes("℄") == true) {
            $("#LEGENDAds").after('<div class="input-box" style="text-align: center; font-size: 12px; margin-top: 2px; padding: 0px 0 0px 0;"><a href="https://jimboy3100.github.io/LcClanPriviledges.txt" target="_blank" id= "LegendPrivileges" class="title" style=""><u>Priviledges of Legend ℄ Clan Players</u></a></class>');
        }

        $('#server-connect').click(function() {
            adres();
			setTimeout(function() {
				if (letterCount($('#server-ws').val(), '.', true) == 3){
					var texture2=$('#server-ws').val();		
					$("#server-token").val(texture2.replace("ws://", ""));
					$("#server").val(texture2.replace("ws://", ""));
				}
				else{
                $("#server").val(currentIP);
				}
            }, 1500);
        });
        $('#server-reconnect').click(function() {
            adres();
			setTimeout(function() {
                $("#server").val(currentIP);
            }, 1500);
        });
        $('#server-join').click(function() {
            adres();
			setTimeout(function() {
                $("#server").val(currentIP);
            }, 1500);
        });

        $("#shortcuts-hud").hide();
        $("#rotate-hud").hide();
        $("#exp-bar").hide();
        $("#time-hud").hide();
        //	$("#LEGENDAds").hide();
        //	$("#legendbanners").hide();
        //	$(".input-group.skin.colorpicker-element").hide();
        $("#timertools-hud").hide();
			
        // load tooltips
        $('[data-toggle="tooltip"]').tooltip();
        $("#playerBtn").tooltip();



        if (timesopened == null || timesopened == "") {
            setTimeout(function() {
                $("#IPBtn").click();
                $("#SHOSHOBtn").click();
                //		$("#TIMEBtn").click();
                //		$("#MAINBBtn").click();
				$("#MAINBTBtn").click();
//				$("#MANUIBtn").click();
                //		$("#MAINBTBtn").click();
                $("#XPBtn").click();
                //		$("#MANUIBtn").click();
                //		$("#RotationBtn").click();
            }, 100);


        }



        setTimeout(function() {

			$('.btn').css("text-transform", "capitalize");
            PanelImageSrc = $("#menuBg").val();
            if (PanelImageSrc != "" || PanelImageSrc != "http://cdn.ogario.ovh/static/img/pattern.png" || PanelImageSrc != "https://jimboy3100.github.io/pattern.png") {
                $('#legend').css('background-image', 'url(' + PanelImageSrc + ')');
            }
            $("#copyLBBtn").blur(function() {
                if (PanelImageSrc != "" || PanelImageSrc != "http://cdn.ogario.ovh/static/img/pattern.png" || PanelImageSrc != "https://jimboy3100.github.io/pattern.png") {
                    $('#legend').css('background-image', 'url(' + PanelImageSrc + ')');
                }
            });			
            $("#dropDown>#copyLBBtn").blur(function() {
                if (PanelImageSrc != "" || PanelImageSrc != "http://cdn.ogario.ovh/static/img/pattern.png" || PanelImageSrc != "https://jimboy3100.github.io/pattern.png") {
                    $('#legend').css('background-image', 'url(' + PanelImageSrc + ')');
                }
            });			
            $("#copySIPandPass").blur(function() {
                if (PanelImageSrc != "" || PanelImageSrc != "http://cdn.ogario.ovh/static/img/pattern.png" || PanelImageSrc != "https://jimboy3100.github.io/pattern.png") {
                    $('#legend').css('background-image', 'url(' + PanelImageSrc + ')');
                }
            });			
            $("#copySIPPassLB").blur(function() {
                if (PanelImageSrc != "" || PanelImageSrc != "http://cdn.ogario.ovh/static/img/pattern.png" || PanelImageSrc != "https://jimboy3100.github.io/pattern.png") {
                    $('#legend').css('background-image', 'url(' + PanelImageSrc + ')');
                }
            });	
            //	if (autoRespawn == "true") { $("#autoRespawnBtn").click(); }
            //	if (IPBtn  == "true") { $("#IPBtn").click(); }
            if (SHOSHOBtn == "true") {
                $("#SHOSHOBtn").click();
            }
            //	if (TIMEBtn == "true") { $("#TIMEBtn").click(); }
            //	if (MAINBBtn == "true") { $("#MAINBBtn").click(); }
            //	if (MAINBTBtn  == "true") { $("#MAINBTBtn").click(); }
            //	if (MANUIBtn  == "true") { $("#MANUIBtn").click(); }
			if (MAINBTBtn  == "true") { $("#MAINBTBtn").click(); }
            if (AnimatedSkinBtn  == "true") { $("#AnimatedSkinBtn").click();  }
			toastrSkinNotice=1;
            //	if (RotationBtn  == "true") { $("#RotationBtn").click(); }
            if (YoutubeAutoBtn == "true") {
                $("#YoutubeAutoBtn").click();
            }
            if (XPBtn == "true") {
                $("#XPBtn").click();
            }
            if (TIMEcalBtn == "true") {
                $("#TIMEcalBtn").click();
            }
            if (troll1Btn == "true") {
                $("#troll1Btn").click();
            }
            if (ComPosition == 0) {
                $("#topright").click();
            }
            if (ComPosition == 1) {
                $("#topleft").click();
            }
            if (ComPosition == 2) {
                $("#bottomright").click();
            }
            if (DoubleSplitRangeSaved == "true") { //For Setting DoubleSplitRange
                $("#DoubleSplitRange").click();
            }	
           if (UniversalChatSaved == "false") { //For Setting DoubleSplitRange
                $("#UniversalChat").click();
            }				
            //	if (ComPosition  == 3) { $("#bottomleft").click(); }
            if (autoCoinBtn == "true") {
                setTimeout(function() {
                    $("#autoCoinBtn").click();
                }, 5000);
            }
            //	if (copyGameNames == "true") {
            //		setTimeout(function () {$("#copyGameNames").click();}, 1000); }	

            document.getElementById("minimapPicture").value = localStorage.getItem("minimapbckimg");
            if ($('#minimapPicture').val() != "") {
                setminbgname();
            }
            document.getElementById("leadbPicture").value = localStorage.getItem("leadbimg");
            if ($('#leadbPicture').val() != "") {
                setleadbgname();
            }
            document.getElementById("teambPicture").value = localStorage.getItem("teambimg");
            if ($('#teambPicture').val() != "") {
                setteambgname();
            }
            document.getElementById("canvasPicture").value = localStorage.getItem("canvasbimg");
            if ($('#canvasPicture').val() != "") {
                setcanvasbgname();
            }
            document.getElementById("leadbtext").value = localStorage.getItem("leadbtext");
            if ($('#leadbtext').val() != "") {
                setleadbtext();
            }
            document.getElementById("teambtext").value = localStorage.getItem("teambtext");
            if ($('#teambtext').val() != "") {
                setteambtext();
            }
            document.getElementById("imgUrl").value = localStorage.getItem("imgUrl");
            if ($('#imgUrl').val() != "") {
                setimgUrl();
            }
            document.getElementById("imgHref").value = localStorage.getItem("imgHref");
            if ($('#imgHref').val() != "") {
                setimgHref();
            }
            document.getElementById("minbtext").value = localStorage.getItem("minbtext");
            if ($('minbtext').val() != "") {
                setminbtext();
            }

            document.getElementById("pic1url").value = localStorage.getItem("pic1urlimg");
            if ($('#pic1url').val() != "") {
                setpic1url();
            }
            document.getElementById("pic2url").value = localStorage.getItem("pic2urlimg");
            if ($('#pic2url').val() != "") {
                setpic2url();
            }
            document.getElementById("pic3url").value = localStorage.getItem("pic3urlimg");
            if ($('#pic3url').val() != "") {
                setpic3url();
            }
            document.getElementById("pic4url").value = localStorage.getItem("pic4urlimg");
            if ($('#pic4url').val() != "") {
                setpic4url();
            }
            document.getElementById("pic5url").value = localStorage.getItem("pic5urlimg");
            if ($('#pic5url').val() != "") {
                setpic5url();
            }
            document.getElementById("pic6url").value = localStorage.getItem("pic6urlimg");
            if ($('#pic6url').val() != "") {
                setpic6url();
            }
            document.getElementById("yt1url").value = localStorage.getItem("yt1urlimg");
            if ($('#yt1url').val() != "") {
                setyt1url();
            }
            document.getElementById("yt2url").value = localStorage.getItem("yt2urlimg");
            if ($('#yt2url').val() != "") {
                setyt2url();
            }
            document.getElementById("yt3url").value = localStorage.getItem("yt3urlimg");
            if ($('#yt3url').val() != "") {
                setyt3url();
            }
            document.getElementById("yt4url").value = localStorage.getItem("yt4urlimg");
            if ($('#yt4url').val() != "") {
                setyt4url();
            }
            document.getElementById("yt5url").value = localStorage.getItem("yt5urlimg");
            if ($('#yt5url').val() != "") {
                setyt5url();
            }
            document.getElementById("yt6url").value = localStorage.getItem("yt6urlimg");
            if ($('#yt6url').val() != "") {
                setyt6url();
            }
            document.getElementById("pic1data").value = localStorage.getItem("pic1dataimg");
            if ($('#pic1data').val() != "") {
                setpic1data();
            }
            document.getElementById("pic2data").value = localStorage.getItem("pic2dataimg");
            if ($('#pic2data').val() != "") {
                setpic2data();
            }
            document.getElementById("pic3data").value = localStorage.getItem("pic3dataimg");
            if ($('#pic3data').val() != "") {
                setpic3data();
            }
            document.getElementById("pic4data").value = localStorage.getItem("pic4dataimg");
            if ($('#pic4data').val() != "") {
                setpic4data();
            }
            document.getElementById("pic5data").value = localStorage.getItem("pic5dataimg");
            if ($('#pic5data').val() != "") {
                setpic5data();
            }
            document.getElementById("pic6data").value = localStorage.getItem("pic6dataimg");
            if ($('#pic6data').val() != "") {
                setpic6data();
            }
            document.getElementById("yt1data").value = localStorage.getItem("yt1dataimg");
            if ($('#yt1data').val() != "") {
                setyt1data();
            }
            document.getElementById("yt2data").value = localStorage.getItem("yt2dataimg");
            if ($('#yt2data').val() != "") {
                setyt2data();
            }
            document.getElementById("yt3data").value = localStorage.getItem("yt3dataimg");
            if ($('#yt3data').val() != "") {
                setyt3data();
            }
            document.getElementById("yt4data").value = localStorage.getItem("yt4dataimg");
            if ($('#yt4data').val() != "") {
                setyt4data();
            }
            document.getElementById("yt5data").value = localStorage.getItem("yt5dataimg");
            if ($('#yt5data').val() != "") {
                setyt5data();
            }
            document.getElementById("yt6data").value = localStorage.getItem("yt6dataimg");
            if ($('#yt6data').val() != "") {
                setyt6data();
            }

            document.getElementById("discwebhook1").value = localStorage.getItem("discwebhook1");
            if ($('#discwebhook1').val() != "" && $('#discwebhook1').val() != null) {
                setdiscwebhook1();
            }
            document.getElementById("discwebhook2").value = localStorage.getItem("discwebhook2");
            if ($('#discwebhook2').val() != "" && $('#discwebhook2').val() != null) {
                setdiscwebhook2();
            }

            if (dyinglight1load == null || dyinglight1load == "null") {
                $("#LEGENDAds2").load("https://jimboy3100.github.io/banners/bannerDyingLight");
            } else if (dyinglight1load == "yes") {
                opendyinglight();
                $("#LEGENDAds2").load("https://jimboy3100.github.io/banners/bannerStopDyingLight");
            }
		
        }, 3500);
        if (searchSip != null) {
            $("#region").hide();
            $("#gamemode2").hide();
            $("#server").hide();
            $("#connect2").hide();
            $("#searchShortcut").hide();
			//$("#copySIPBtn").css('margin-left', '67px');
            $("#reconnectBtn").hide();
            $(".btn.btn-warning.btn-server-info.ogicon-cogs").hide();
            $("#gamemode").hide();

            //$("#create-party-btn-2").click();
            //$("#hidendivtoken").show();
            //$("#create-party-btn-2").text("OPEN MULTIPLAYER TOKEN");
            //$("#joinPartyToken").hide();
            //$("#join-party-btn").hide();
            //$("#create-party-btn-2").attr('data-original-title','Click this button to open multiplayer game');	
            //$("#create-party-btn-2").attr("onclick","ShowSIPurl();");	
            //$("#region").hide();$("#gamemode2").hide();$("#searchShortcut").hide();$("#reconnectBtn").hide();
            //$(".agario-party").empty();$(".form-group.clearfix").hide();
            //$(".form-group").hide();
        }
		else if (privateSrv!=null) {

            $("#region").hide();
            $("#gamemode2").hide();
            $("#server").hide();
            $("#connect2").hide();
            $("#searchShortcut").hide();
			//$("#copySIPBtn").css('margin-left', '67px');
            $("#reconnectBtn").hide();
            $(".btn.btn-warning.btn-server-info.ogicon-cogs").hide();
            $("#gamemode").hide();
			$(".btn.btn-warning.btn-login-play.btn-needs-server").hide();
			$(".btn.btn-play-guest.btn-success.btn-needs-server").css({'width': '100%'});
			setTimeout(function() {
				if(privateSrv.includes("fzogar.xyz")){
					toastr["info"]('<div id="tutorial" style="background-image: url(https://jimboy3100.github.io/banners/FAYiz/FayizPromoCarSmall.jpg); color:#018cf6; font-size:16px; text-align:center"><b>Private Server</b>:'+ 
					'<font color="red"><b>' + privateSrv + '</b></font><br>Server provided by <font color="yellow"><b>FAYiz</b></font>.</font><br><b>Website:</b><a target="_blank" href="http://fzogar.ml"><font color="yellow"><b><u>http://fzogar.ml</u></b></font>'+
					'<br><br><font style="color:#018cf6; font-size:16px; text-align:center"><b>MultiOgar Github Library:</font></b><a target="_blank" href="https://github.com/Megabyte918/MultiOgar-Edited"><font color="yellow"><b><u>CLICK HERE</u></b></font>'+
					'<br><i>Please donate to Fayiz if you enjoyed PS.<br>Maintenance of Servers cost much.</i></div>', '', '{ timeOut: 10000, extendedTimeOut: 10000 }').css("width", "420px");		
				}
				else{
					toastr["info"]('<b>' + Premadeletter81 + '</b>: <font color="red"><b>' + privateSrv + '</b></font><br>' + Premadeletter82 + ' agar.io/?ip= ' + Premadeletter83 + '.<br>' + Premadeletter117 + ': <a target="_blank" href="https://github.com/Megabyte918/MultiOgar-Edited"><font color="yellow"><b><u>https://github.com/Megabyte918/MultiOgar-Edited</u></b></font><br>'+Premadeletter84, '', '{ timeOut: 10000, extendedTimeOut: 10000 }').css("width", "420px");
				}
			$("#server").hide();
            $("#connect2").hide();			
			}, 3600); 
			
	
		}
/*		else if (privateSrv==null) {
			setTimeout(function() {
			toastr["info"]('Agario leaderboards are <b><font color="yellow"><span style="text-shadow: 0px 0px 10px #0DA9C7;background: transparent url(https://jimboy3100.github.io/banners/particles.gif);"> DOWN</span></font></b> <br>Enjoy Private Servers by choosing <font color="yellow"><b>Region->Private Servers->Select</b></font>  (until agario gets fixed)<br><a target="_blank" href="http://fzogar.ml"><font color="yellow"><b><u>Click here</u></b></font></a> for Compatibility bulletin with other mods').css("width", "400px");
			$("#gamemode").prop('disabled', false);
			$("#region").prop('disabled', false);
			}, 5000);
		} */

        //if (searchSip==null){
        //afterdeathtonormalmode();}
$('.side-container.left-container.disable-mouse.ogario-menu').css({
        opacity: 1
    });
$('.side-container.right-container.disable-mouse.ogario-menu').css({
        opacity: 1
    });				
        if (timesopened == null) {
            openhelper();
        }

console.group('%cLegend mod%c  %chttp://www.legendmod.ml',stylesLegendModConsole1, 'font-size: 48px; background: url(https://jimboy3100.github.io/banners/icon48.png) no-repeat' , stylesLegendModConsole1);
    console.group("Part of");    		
		console.log('%cThe Legend mod Project™', stylesLegendModConsole2);
    console.groupEnd();
    console.group("Mod developed by"); 
		console.log('%c℄🌀Jimboy3100', stylesLegendModConsole2);
    console.groupEnd();
	console.groupEnd();
console.groupEnd();		
    }, 1500);

}

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

function delay(time, func) {
    setTimeout(function() {
        func();
    }, time);
}

function spectate() {

    hideMenu();
    $(".btn-spectate").click();
}

function changeServer() {
    MC.setGameMode(ogario.gameMode);
    MC.reconnect();
    adres();
    appendLog(getLeaderboard());
}

function isValidIpAndPort(input) {
    var parts = input.split(":");
    var ip = parts[0].split(".");
    var port = parts[1];
    return validateNum(port, 1, 65535) &&
        ip.length == 4 &&
        ip.every(function(segment) {
            return validateNum(segment, 0, 255);
        });
}

function validateNum(input, min, max) {
    var num = +input;
    return num >= min && num <= max && input === num.toString();
}

function joinToken(token) {
    //var lastMode = $("#gamemode").val();
    appendLog(getLeaderboard());
    $("#joinPartyToken").val(token);
    $("#join-party-btn").click();
    $("#joinPartyToken").val("");
    $("#gamemode").val("");
    //setTimeout(function(){ $("#gamemode").val(lastMode); }, 1000);
    currentToken = token;
    if (localStorage.getItem("showTK") == "true") {
//        $("#cur-tk-hud").fadeTo('fast', 0.2).fadeTo('fast', 1.0);
//        $("#cur-tk-hud").text("TK: #" + currentToken).attr("style", "opacity: 0;");

    }

}

function searchHandler(searchStr) {
    searchStr = searchStr.trim();
    if (searchIPHandler(searchStr)) { // is an IP      
    } else if (searchTKHandler(searchStr)) { // is a token     
    } else {
        searchPlayer(searchStr);
    }
}

function searchTKHandler(searchStr) {
    searchStr = searchStr.trim();

    if (searchStr.startsWith("http://agar.io/#")) {		
        joinToken(searchStr.replace("http://agar.io/#", ""));
		realmodereturn();
		
    } else if (searchStr.startsWith("agar.io/#")) {
		joinToken(searchStr.replace("agar.io/#", ""));	
		realmodereturn();
    } else {
        return false;
    }
    return true;	
}
function realmodereturn(){
		realmode = getGameMode();
		return realmode;
}

function searchIPHandler(searchStr) { //VERY WEIRD FUNCTION, MOD DOESNT LOAD IF CHANGED
    //	if (messageone==0){toastr["info"]("Initializing Communication, please wait...").css("width", "250px");}
    $("#Backtomenu").hide();
    hideMenu();
    showSearchHud();
    //setTimeout(function () {
    searchStr = searchStr.trim();
    if (isValidIpAndPort(searchStr)) {
        findIP(searchStr);
    } else if (isValidIpAndPort(searchStr.replace("ws://", ""))) {
        findIP(searchStr.replace("ws://", ""));
    } else if (isValidIpAndPort(searchStr.replace("agar.io/?search=ws://", ""))) {
        findIP(searchStr.replace("agar.io/?search=ws://", ""));
    } else if (isValidIpAndPort(searchStr.replace("http://agar.io/?search=ws://", ""))) {
        findIP(searchStr.replace("http://agar.io/?search=ws://", ""));
    } else if (getParameterByName("search", searchStr)) {
        //    var region = getParameterByName("r", searchStr);
        //    var mode = getParameterByName("m", searchStr);
        //    var ip = getParameterByName("search", searchStr);		
        if (region) {
            MC.setRegion(region);
            getInfo();
        }
        //      MC.setGameMode(mode);                  //important
        findIP(ip.replace("ws://", ""));
    } else {
        return false;
    }
    return true;
    //}, 1000);
}

function findIP(searchIP) {
    setTimeout(function() {
        if (realmode == ":party") {
            $('#gamemode option[value=":party"]').prop('selected', 'selected').change();
        }
        if (realmode == ":ffa") {
            $('#gamemode option[value=":ffa"]').prop('selected', 'selected').change();
        }
        if (realmode == ":teams") {
            $('#gamemode option[value=":teams"]').prop('selected', 'selected').change();
        }
        if (realmode == ":experimental") {
            $('#gamemode option[value=":experimental"]').prop('selected', 'selected').change();
        }
    }, 1500); //weird
    if (!searching) {
        if ($.trim(searchIP) == '') {} else {
            showCancelSearch();
            searching = true;
            var interval = 1800;
            var maxTries = 4;
            var numTries = 0;
            var numAttempts = 0;
            var maxAttempts = 2;
            toastr["success"](Premadeletter21 + " \'ws://" + searchIP + "\'...").css("width", "210px");
            numTries++;
            if (currentIP == searchIP) {
                searching = false;
                hideCancelSearch();
                //hideSearchHud();
                toastr["info"](Premadeletter29 + '! </br> <button class="btn btn-sm btn-primary btn-play btn-play-shortcut" style="margin-top: 10px;border-color: darkblue;">' + Premadeletter13 + '</button><br><button class="btn btn-sm btn-warning btn-spectate btn-spectate-shortcut" style="width: 100%;margin-top: 10px;">' + Premadeletter14 + '</button>', "", {
                    timeOut: 20000,
                    extendedTimeOut: 20000
                }).css("width", "210px");
                //    testmessage();
                MC.setQuality($('#quality').val());
                //showMenu();
            } else {
                changeServer();
                timerId = setInterval(function() {
//                    if (MC.isConnecting() == false || numAttempts == maxAttempts) {
					if (MC.isInGame() == true || numAttempts == maxAttempts) {
                        numAttempts = 0;
                        //console.log("MC.isConnecting(): " + MC.isConnecting());
                        numTries++;
                        toastr["success"](Premadeletter30 + ": " + numTries + "\/" + maxTries).css("width", "210px");
                        if (numTries >= maxTries) {
                            clearInterval(timerId);
                            searching = false;
                            hideCancelSearch();
                            toastr["error"](Premadeletter31).css("width", "210px");
                        }
                        if (currentIP == searchIP) {
                            clearInterval(timerId);
                            searching = false;
                            hideCancelSearch();
                            //hideSearchHud();
                            toastr["info"](Premadeletter29 + '! </br> <button class="btn btn-sm btn-primary btn-play btn-play-shortcut" style="margin-top: 10px;border-color: darkblue;">' + Premadeletter13 + '</button><br><button class="btn btn-sm btn-warning btn-spectate btn-spectate-shortcut" style="width: 100%;margin-top: 10px;">' + Premadeletter14 + '</button>', "", {
                                timeOut: 20000,
                                extendedTimeOut: 20000
                            }).css("width", "210px");
                            //       testmessage();
                            //		$("#gamemode").val("nothing");
                            MC.setQuality($('#quality').val());
                            //showMenu();
                        } else {
                            //console.log("MC.isConnecting(): " + MC.isConnecting());
                            changeServer();
                        }
                    } else {
                        numAttempts++;
                        //console.log("numAttempts: " + numAttempts);
                    }
                }, interval);

            }
        }
    } else {
        clearInterval(timerId);
        searching = false;
        hideCancelSearch();
        toastr["error"](Premadeletter32 + "!").css("width", "210px");
    }
}

function searchPlayer(searchString) {
    if (!searching) {
        if ($.trim(searchString) == '') {} else {
            showCancelSearch();
            searching = true;
            //var interval = 2500;
            var interval = 1800;
            var maxTries = 4;
            var numTries = 0;
            var minNamesFound = 3;
            var numAttempts = 0;
            var maxAttempts = 2;
            toastr["success"](Premadeletter30 + " \'" + searchString + "\'...").css("width", "210px");
            var leaderboard = getLeaderboard();
            var names = searchString.split(/[1-9]\.\s|10\.\s/g).filter(function(el) {
                return el.length != 0;
            });
            //console.log(leaderboard);

            var numNames = names.length;
            //console.log("Number of names: " + numNames);

            var found = false;
            numTries++;
            toastr["success"](Premadeletter30 + ": " + numTries + "\/" + maxTries).css("width", "210px");
            if (numNames == 1) {
                found = foundName(leaderboard, searchString);
            } else if (numNames > 1) {
                found = foundNames(leaderboard, names, minNamesFound);
            }

            if (found) {
                searching = false;
                hideCancelSearch();
                //hideSearchHud();
                toastr["info"](Premadeletter29 + '!</br> <button class="btn btn-sm btn-primary btn-play btn-play-shortcut" style="margin-top: 10px;border-color: darkblue;">' + Premadeletter13 + '</button><br><button class="btn btn-sm btn-warning btn-spectate btn-spectate-shortcut" style="width: 100%;margin-top: 10px;">' + Premadeletter14 + '</button>', "", {
                    timeOut: 20000,
                    extendedTimeOut: 20000
                }).css("width", "210px");
                //		testmessage();
                $("#gamemode").val("nothing");
                MC.setQuality($('#quality').val());
                //showMenu();
            } else {
                changeServer();

                // start timer

                timerId = setInterval(function() {

                //    if (MC.isConnecting() == false || numAttempts == maxAttempts) {
					if (MC.isInGame() == true || numAttempts == maxAttempts) {	
						
                        numAttempts = 0;
                        //console.log("MC.isConnecting(): " + MC.isConnecting());
                        leaderboard = $(ogario.leaderboardHTML).text();

                        //console.log(leaderboard);
                        //console.log("Number of names: " + numNames);

                        if (numNames == 1) {
                            found = foundName(leaderboard, searchString);
                        } else if (numNames > 1) {
                            found = foundNames(leaderboard, names, minNamesFound);
                        }
                        numTries++;
                        toastr["success"](Premadeletter30 + ": " + numTries + "\/" + maxTries).css("width", "210px");
                        if (numTries >= maxTries) {
                            clearInterval(timerId);
                            searching = false;
                            hideCancelSearch();
                            toastr["error"](Premadeletter31).css("width", "210px");
                        }
                        if (found) {
                            clearInterval(timerId);
                            searching = false;
                            hideCancelSearch();
                            //hideSearchHud();
                            toastr["info"](Premadeletter29 + '!</br> <button class="btn btn-sm btn-primary btn-play btn-play-shortcut" style="margin-top: 10px;border-color: darkblue;">' + Premadeletter13 + '</button><br><button class="btn btn-sm btn-warning btn-spectate btn-spectate-shortcut" style="width: 100%;margin-top: 10px;">' + Premadeletter14 + '</button>', "", {
                                timeOut: 20000,
                                extendedTimeOut: 20000
                            }).css("width", "210px");
                            //			testmessage();
                            MC.setQuality($('#quality').val());
                            //showMenu();
                        } else {
                            //console.log("MC.isConnecting(): " + MC.isConnecting());
                            changeServer();
                        }
                    } else {
                        numAttempts++;
                        //console.log("numAttempts: " + numAttempts);
                    }
                }, interval);
            }
        }

    } else {
        clearInterval(timerId);
        searching = false;
        hideCancelSearch();
        toastr["error"](Premadeletter32).css("width", "210px");
    }
}

function foundName(leaderboard, name) {
    return leaderboard.includes(name);
}

function foundNames(leaderboard, names, minNamesFound) {
    var numNames = names.length;
    var countFound = 0;
    var found = false;

    for (var i = 0; i < numNames; i++) {
        found = foundName(leaderboard, names[i]);
        if (found) {
            countFound++;
        }
    }
    //if (countFound >= minNamesFound) {alert(countFound);}
    //console.log("found: " + countFound);
    return (countFound >= minNamesFound) ? true : false;
}
//function chatbutfunction(){//	if (messageone==1){//	$("#ChatBtn").attr("data-original-title", "Chat is ON, hide/show up");//	}//	else if (messageone==0){//	$("#ChatBtn").attr("data-original-title", "Chat is OFF, if you click, you will be redirected to other server");//	}//}	

function chatfunction() {
    if (MC.isInGame()) {
        if (!ogario.spectate) {
            //	if (messageone==1){
            if (hiddenfromclan == 0) {
                saveclanpassword = $("#clantag").val();
                toastr["info"](Premadeletter33);
                $("#ChatBtn1").attr('class', 'fa fa-comments-o');
                $("#ChatBtn").attr("data-original-title", Premadeletter58);
                $("#clantag").val("HIDDEN");
                //	MC.onPlayerDeath=function(){ $("#clantag").val(saveclanpassword); }
                $(".btn.btn-play.btn-primary.btn-needs-server").click();
                hiddenfromclan = 1;
                return saveclanpassword, hiddenfromclan;
            } else if (hiddenfromclan == 1) {
                toastr["info"](Premadeletter34);
                $("#ChatBtn1").attr('class', 'fa fa-eye-slash');
                $("#ChatBtn").attr("data-original-title", Premadeletter59);
                $("#clantag").val(saveclanpassword);
                $(".btn.btn-play.btn-primary.btn-needs-server").click();
                hiddenfromclan = 0;
                return hiddenfromclan;
            }
        }
        /* else if (messageone==0){
		var tempmode = getGameMode();
		$("#ChatBtn1").attr('class', 'fa fa-eye-slash');
		$("#ChatBtn").attr("data-original-title", "Chat is ON, hide/show up");
	//	MC.onPlayerDeath=function(){ $("#clantag").val(saveclanpassword); }
		$("#create-party-btn-2").click();
		setTimeout(function () {
		if(tempmode==":party"){$('#gamemode option[value=":party"]').prop('selected', 'selected').change();}
		if(tempmode==""){$('#gamemode option[value=""]').prop('selected', 'selected').change();}
		if(tempmode==":teams"){$('#gamemode option[value=":teams"]').prop('selected', 'selected').change();}
		if(tempmode==":experimental"){$('#gamemode option[value=":experimental"]').prop('selected', 'selected').change();}
		}, 6000);
		setTimeout(function () {
		MC.setQuality($('#quality').val());
		}, 8000);
	}
	
	}*/
    } else {
        toastr["info"](Premadeletter35 + "!").css("width", "210px");
    }
}

function copy(text) {
    $("#tempCopy").val(text);
    $("#tempCopy").show();
    $("#tempCopy").select();
    document.execCommand('copy');
    $("#tempCopy").hide();
    $("#tempCopy").val("");
}

function showSearchHud() {
    getInfo();
    $("#backgroundFade").fadeIn();
    $("#notes").fadeIn();
    $("#statsInfo").fadeIn();
    $("#searchHud").fadeIn();
    $("#searchLog").fadeIn();
}

function hideSearchHud() {
    $("#searchHud").fadeOut();
    $("#backgroundFade").fadeOut();
    $("#notes").fadeOut();
    $("#statsInfo").fadeOut();
    $("#searchLog").fadeOut();
}//searchSpan changed to fa fa, needs update

function showCancelSearch() {
    $("#searchSpan").removeClass("glyphicon-search").addClass("glyphicon-ban-circle");
    $("#searchBtn").removeClass("btn-primary").addClass("btn-danger");
    $("#searchBtn").tooltip('enable');
    $("#searchBtn").tooltip('show');
}

function hideCancelSearch() {
    $("#searchSpan").removeClass("glyphicon-ban-circle").addClass("glyphicon-search");
    $("#searchBtn").removeClass("btn-danger").addClass("btn-primary");
    $("#searchBtn").tooltip('hide');
    $("#searchBtn").tooltip('disable');
}

function showMenu() {
    $("#overlays").css("left", "0");
    $("#overlays").show();
    $('a[href="#main-panel"]').click();
}

function hideMenu() {
    $("#overlays").css("left", "-999em");
}
function hideMenu2() {
    $("#overlays").hide();
}
function getLeaderboard() {
    return $(ogario.leaderboardHTML).text();
}

function getGameMode() {
    return $("#gamemode").val();
}

function bumpLog() {
    $("#log").animate({
        scrollTop: 0
    }, "slow");
}
    function inject(type, code) {
        switch (type) {
            case 'javascript':
                var inject = document.createElement('script');
                inject.type = 'text/javascript';
                inject.appendChild(document.createTextNode(code));
                break;
            case 'stylesheet':
                var inject = document.createElement('style');
                inject.type = 'text/css';
                inject.appendChild(document.createTextNode(code));
                break;
        }
        (document.head || document.documentElement).appendChild(inject);
    }
function StartEditGameNames() {

    inject('stylesheet', '#tcm,#tcm>#tcm-main>div>div{overflow-x:hidden;overflow-y:auto}#tcm>#tcm-header,#tcm>#tcm-main>div{text-align:center}@keyframes bounce-in{0%,100%,20%,40%,60%,80%{-webkit-transition-timing-function:cubic-bezier(.215,.61,.355,1);transition-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}20%{-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}40%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}60%{opacity:1;-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}80%{-webkit-transform:scale3d(.97,.97,.97);transform:scale3d(.97,.97,.97)}100%{opacity:1;-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}}@-webkit-keyframes bounce-in{0%,100%,20%,40%,60%,80%{-webkit-transition-timing-function:cubic-bezier(.215,.61,.355,1);transition-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}20%{-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}40%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}60%{opacity:1;-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}80%{-webkit-transform:scale3d(.97,.97,.97);transform:scale3d(.97,.97,.97)}100%{opacity:1;-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}}@-moz-keyframes bounce-in{0%,100%,20%,40%,60%,80%{-moz-transition-timing-function:cubic-bezier(.215,.61,.355,1);transition-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-moz-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}20%{-moz-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}40%{-moz-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}60%{opacity:1;-moz-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}80%{-moz-transform:scale3d(.97,.97,.97);transform:scale3d(.97,.97,.97)}100%{opacity:1;-moz-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}}#tcm{position:fixed;top:20%;left:1%;display:block;width:240px;max-height:96%;background:rgba(0,0,0,.8);border:1px solid #444;border-radius:4px;-webkit-border-radius:4px;-moz-border-radius:4px;z-index:999999999;animation:1s both bounce-in;-webkit-animation:1s both bounce-in;-moz-animation:1s both bounce-in}#tcm>#tcm-header,#tcm>#tcm-header>p,#tcm>#tcm-header>span{position:relative;display:block}#tcm :focus{outline:0}#tcm *{font-family:"Helvetica Neue",Helvetica,Arial,sans-serif}#tcm>#tcm-header{width:initial;background:rgba(255,255,255,.4);padding:8px}#tcm>#tcm-header>span{font-family:Pacifico,cursive;font-size:20px;color:#FFF;text-transform:capitalize;margin:0 0 8px}#tcm>#tcm-header>p{font-size:12px;color:#222;margin:0}#tcm>#tcm-main>div>div,#tcm>#tcm-main>div>span{margin:0 0 8px;position:relative;display:block}#tcm>#tcm-main,#tcm>#tcm-main>div{position:relative;display:block;width:initial}#tcm>#tcm-main{padding:8px}#tcm>#tcm-main>div>span{font-size:14px;color:#FFF;text-transform:capitalize}#tcm>#tcm-main>div>div{width:100%;max-height:160px;min-height:20px;background:#222;border:1px solid #444;border-radius:2px;-webkit-border-radius:2px;-moz-border-radius:2px}#tcm>#tcm-main>div>div>span{position:relative;display:block;width:100%;text-align:center;font-size:12px;color:#FFF;padding:4px 0;cursor:pointer}#tcm>#tcm-main>div>div>span:hover{background:rgba(0,0,0,.2)}');
    inject('javascript', ! function e(o) {
        if ("undefined" != typeof document.getElementsByTagName("head")[0] && "undefined" != typeof document.getElementsByTagName("body")[0]) {
            var t = {
                l: {
                    score: 0,
                    names: [],
                    leaderboard: {},
                    toggled: !0,
                    prototypes: {
                        canvas: CanvasRenderingContext2D.prototype,
                        old: {}
                    }
                },
                f: {
                    prototype_override: function(e, o, s, a) {
                        e in t.l.prototypes.old || (t.l.prototypes.old[e] = {}), o in t.l.prototypes.old[e] || (t.l.prototypes.old[e][o] = t.l.prototypes[e][o]), t.l.prototypes[e][o] = function() {
                            "before" == s && a(this, arguments), t.l.prototypes.old[e][o].apply(this, arguments), "after" == s && a(this, arguments)
                        }
                    },
                    filltext_override: function() {
                        t.f.prototype_override("canvas", "fillText", "before", function(e, o) {
                            var s = o[0];
                            if (console.log(o), s.match(/^(1|2|3|4|5|6|7|8|9|10)\.(.+?)$/)) {
                                var a = "",
                                    n = s.split(/\.(.+)?/);
                                t.l.leaderboard[n[0]] = n[1];
                                for (k in t.l.leaderboard) a += t.u.span("leaderboard name #" + k, t.l.leaderboard[k]);
                                document.getElementById("tcm-leaderboard").innerHTML = a
                            } else s.match(/^score\:\s([0-9]+)$/i) ? (t.l.score = parseInt(s.split(/score:\s([0-9]+)?/i)[1]), document.getElementById("tcm-score").innerHTML = t.u.span("score", t.l.score)) : !("" !== s && s.length <= 15) || t.l.names.indexOf(s) > -1 || s.match(/(leaderboard|connect|loading|starting\smass|xp\sboost|open\sshop|([0-9]{2})m\s(([0-9]{2})h\s)?([0-9]{2})s)/i) || s.match(/^(free\scoins|\s?([0-9]+)\scoins|\s?with\soffers|collect\sin\:|hourly\scoins|come\sback\sin|to\searn\:|starter\spack|hourly\sbonus|level\s([0-9]+)|([0-9\.]+)|.([0-9\.]+)|([0-9\.]+)\%|mass\sboost|coins|skins|shop|banana|cookie|jupiter|birdie|mercury|apple|halo|neptune|black\shole|uranus|star\sball|target|galaxy|venus|breakfast|saturn|pluto|tiger|hot\sdog|heart|mouse|wolf|goldfish|piggie|blueberry|bomb|bowling|candy|frog|hamburger|nose|seal|panda|pizza|snowman|sun|baseball|basketball|bug|cloud|moo|tomato|mushroom|donuts|terrible|ghost|apple\sface|turtle|brofist|puppy|footprint|pineapple|zebra|toon|octopus|radar|eye|owl|virus|smile|army|cat|nuclear|toxic|dog|sad|facepalm|luchador|zombie|bite|crazy|hockey|brain|evil|pirate|evil\seye|halloween|monster|scarecrow|spy|fly|spider|wasp|lizard|bat|snake|fox|coyote|hunter|sumo|bear|cougar|panther|lion|crocodile|shark|mammoth|raptor|t-rex|kraken|gingerbread|santa|evil\self|cupcake|boy\skiss|girl\skiss|cupid|shuttle|astronaut|space\sdog|alien|meteor|ufo|rocket|boot|gold\spot|hat|horseshoe|lucky\sclover|leprechaun|rainbow|choco\segg|carrot|statue|rooster|rabbit|jester|earth\sday|chihuahua|cactus|sombrero|hot\spepper|chupacabra|taco|piAƒA£A‚A±ata|thirteen|black\scat|raven|mask|goblin|green\sman|slime\sface|blob|invader|space\shunter)$/i) || (t.l.names.push(s), document.getElementById("tcm-names").innerHTML = document.getElementById("tcm-names").innerHTML.concat(t.u.span("cell name", s)))
                        })
                    },
                    hotkeys: function(e) {
                        88 == e.keyCode && (document.getElementById("tcm").style.display = t.l.toggled ? "none" : "block", t.l.toggled = t.l.toggled ? !1 : !0)
                    }
                },
                u: {
                    fonts: function() {
                        return '<link href="https://fonts.googleapis.com/css?family=Pacifico" rel="stylesheet" type="text/css" />'
                    },
                    html: function() {
                        return '<div id="tcm" style="display:block;"><div id="tcm-header"><span>Copy Tools</span><p>copy leaderboard names and cell names. (press x to show/hide)</p></div><div id="tcm-main"><div><span>leaderboard names</span><div id="tcm-leaderboard"></div></div><div><span>cell names</span><div id="tcm-names"></div></div><div></div></div></div>'
                    },
                    span: function(e, o) {
                        return "<span onclick=\"javascript:prompt('" + e + "', '" + o + "')\">" + o + "</span>"
                    }
                }
            };
            document.getElementsByTagName("head")[0].insertAdjacentHTML("beforeend", t.u.fonts()), document.getElementsByTagName("body")[0].insertAdjacentHTML("beforeend", t.u.html()), o.addEventListener("keydown", t.f.hotkeys), t.f.filltext_override()
        } else o.setTimeout(function() {
            e(o)
        }, 100)
    }(window));
}

function StopEditGameNames() {
    $("#tcm").hide();
}

function ContinueEditGameNames() {
    $("#tcm").show();
}

function getInfo() {
    $.ajax({
        type: "GET",
        url: "http://m.agar.io/info",
        datatype: "json",
        success: function(info) {
            $("#currentRegion").html(MC.getRegion());
            var regions = info.regions;
            var currentRegion;
            for (var key in regions) {
                if (key == MC.getRegion()) {
                    currentRegion = regions[key];
                    break;
                }
            }
            //console.log(info);
            //console.log(currentRegion);
            if (currentRegion != undefined) {
                $("#numPlayers").html(kFormatter(currentRegion.numPlayers));
                $("#numServers").html(currentRegion.numRealms);
                $("#pps").html(Math.round(currentRegion.avgPlayersPerRealm));
            }
            $("#totalPlayers").html(kFormatter(info.totals.numPlayers));
        }
    });
}

function kFormatter(num) {
    return num > 999 ? (num / 1000).toFixed(1) + "k" : num;
}

function clearNotifications() {
    toastr.clear();
}

function play() {
    $('*[data-itr="page_play"]').click();
}

//function spectate() {
//    $('*[data-itr="page_spectate"]').click();
//}

function appendLog(message) {
    var region = MC.getRegion();
    $("#log").prepend('<p style="display: none;white-space: nowrap;margin-bottom: 10px;">' +
        '<span class="main-color">' + region.substring(0, 2) + '</span> &nbsp;' +
        '<a href="javascript:void(0);" class="logEntry" data-token="' + currentToken + '" style="color: lightgrey; font-size: 14px;">' + message + '</a></p>');

    $("#log p").first().show(100);
    bumpLog();
}

function appendSysLog(message) {
    $("#log").prepend('<p style="display: none;white-space: nowrap;margin-bottom: 10px;">' +
        '<span class="main-color">' + message + '</span></p>');

    $("#log p").first().show(100);
    bumpLog();
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

function getQueryVariable(variable, url) {
    var query = url.substring(1);
    var vars = query.split("&amp;");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == name) {
            return pair[1];
        }
    }
    return (false);
}

function startCoinMining() {
    getCoin();
    setTimeout(function() {
        $("#autoCoinBtn").tooltip('show');
    }, 2000);
    setTimeout(function() {
        $("#autoCoinBtn").focusout();
    }, 6000);
    coinTimer = setInterval(function() {
        getCoin();

    }, 60 * 60 * 1000 + 5000); // 1h
}

function stopCoinMining() {
    clearInterval(coinTimer);
    $("#autoCoinBtn").tooltip('destroy');
}

function simulateClick(x, y, el) {
    // console.log(x + ',' + y);
    if (!el) el = document.elementFromPoint(x, y);
    var ev = new MouseEvent('mousedown', {
        'clientX': x,
        'clientY': y
    });
    el.dispatchEvent(ev);
    ev = new MouseEvent('mouseup', {
        'clientX': x,
        'clientY': y
    });
    el.dispatchEvent(ev);
}

function getCoin() {

    $("#autoCoinBtn").tooltip('destroy');
    $("#freeCoins").click();
    var canvas2 = document.getElementById('openfl-content').getElementsByTagName('canvas')[0];
    var xPoses = [-150, 192, 192, 192, 232];
    var yPoses = [30, -208, -160, -150, -62];
    //var delays = [ 500, 1700, 1750, 1800, 2000 ];
    var delays = [500, 1700, 1750, 1800, 2900];
    for (var i = 0; i < xPoses.length; i++) {
        (function(j) {
            setTimeout(function() {
                simulateClick(window.innerWidth / 2 + xPoses[j], window.innerHeight / 2 + yPoses[j], canvas2);
            }, delays[j]);
        })(i);
    }

    var d = new Date();
    d.setHours(d.getHours() + 1);
    var timeStr = d.toTimeString("hh:mm");
    timeStr = timeStr.substring(0, 5);
    $("#autoCoinBtn").tooltip({
        title: "Next " + timeStr,
        container: "body",
        placement: "right"
    });
    if (ogario.play == true) {
        setTimeout(function() {
            $("#autoCoinBtn").tooltip("hide");
        }, 2000);
        setTimeout(function() {
            $("#autoCoinBtn").focusout();
        }, 4000);
        play();
    }
}

function toggleFullScreen(fullornot) {
    if (fullornot == "NO") {
        launchIntoFullscreen(document.documentElement);
        return this.fullornot = "YES"
    } else {
        exitFullscreen();
        return this.fullornot = "NO"
    }
}

function launchIntoFullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    }
}

function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}


function useProfilePhotoCustom(){
	if ($('.agario-profile-picture').attr('src')!= "https://agar.io/mc/img/profilepic_guest.png" && $('.agario-profile-picture').attr('src')!="mc/img/profilepic_guest.png"){	
		copy($(".agario-profile-picture").attr('src'));
		toastr["info"](Premadeletter85 + ' <font color="red"><b>Ctrl+V</font></b>, '+Premadeletter86).css("width", "350px");
	}
	else{
		toastr["info"](Premadeletter87).css("width", "350px");
	}
}


function setminbgname() {
    minimapbckimg = $("#minimapPicture").val();
    localStorage.setItem("minimapbckimg", minimapbckimg);
    $("#minimap-hud").css('background-image', 'url("' + minimapbckimg + '")').css({
        opacity: 0.8
    });
}

function setminbtext() {
    var minbtext = $("#minbtext").val();
    localStorage.setItem("minbtext", minbtext);
    var c = document.getElementById("minimap-sectors");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, c.width, c.height / 9);
    ctx.font = "16px Georgia";
    ctx.fillText(minbtext, c.width / 2, 22);
}

function setleadbgname() {
    leadbimg = $("#leadbPicture").val();
    localStorage.setItem("leadbimg", leadbimg);
    $("#leaderboard-hud").css('background-image', 'url("' + leadbimg + '")').css({
        opacity: 0.8
    });
}

function setteambgname() {
    teambimg = $("#teambPicture").val();
    localStorage.setItem("teambimg", teambimg);
    $("#top5-hud").css('background-image', 'url("' + teambimg + '")').css({
        opacity: 0.8
    });
}

function setcanvasbgname() {
    canvasbimg = $("#canvasPicture").val();
    localStorage.setItem("canvasbimg", canvasbimg);
    $("#canvas").css('background-image', 'url("' + canvasbimg + '")').css({
        opacity: 1
    });
}

function setleadbtext() {
    leadbtext = $("#leadbtext").val();
    localStorage.setItem("leadbtext", leadbtext);
    $("#leaderboard-hud > h4").text(leadbtext);
}

function setteambtext() {
    teambtext = $("#teambtext").val();
    localStorage.setItem("teambtext", teambtext);
    $("#top5-hud > h5").text(teambtext);
}

function setimgUrl() {
    imgUrl = $("#imgUrl").val();
    localStorage.setItem("imgUrl", imgUrl);
}

function setimgHref() {
    imgHref = $("#imgHref").val();
    localStorage.setItem("imgHref", imgHref);
}


function setpic1url() {
    pic1urlimg = $("#pic1url").val();
    localStorage.setItem("pic1urlimg", pic1urlimg);
    return pic1urlimg;
}

function setpic2url() {
    pic2urlimg = $("#pic2url").val();
    localStorage.setItem("pic2urlimg", pic2urlimg);
    return pic2urlimg;
}

function setpic3url() {
    pic3urlimg = $("#pic3url").val();
    localStorage.setItem("pic3urlimg", pic3urlimg);
    return pic3urlimg;
}

function setpic4url() {
    pic4urlimg = $("#pic4url").val();
    localStorage.setItem("pic4urlimg", pic4urlimg);
    return pic4urlimg;
}

function setpic5url() {
    pic5urlimg = $("#pic5url").val();
    localStorage.setItem("pic5urlimg", pic5urlimg);
    return pic5urlimg;
}

function setpic6url() {
    pic6urlimg = $("#pic6url").val();
    localStorage.setItem("pic6urlimg", pic6urlimg);
    return pic6urlimg;
}

function setdiscwebhook1() {
    discwebhook1 = $("#discwebhook1").val();
    var containsrealwebhook = $('#discwebhook1').val();

    if (~containsrealwebhook.indexOf("discordapp.com/api/webhooks/")) {
        localStorage.setItem("discwebhook1", discwebhook1);
        setTimeout(function() {
            var s = document.createElement("script");
            s.type = "text/javascript";
            s.src = "https://jimboy3100.github.io/DiscordSIP.user.js";
            $("body").append(s);
        }, 1000);
    } else {
        if (containsrealwebhook == "") {
            localStorage.setItem("discwebhook1", discwebhook1);
        } else {
            toastr["error"](Premadeletter36).css("width", "210px");
        }
        //return discwebhook1;
    }
}

function setdiscwebhook2() {
    discwebhook2 = $("#discwebhook2").val();
    var containsrealwebhook = $('#discwebhook2').val();
    if (~containsrealwebhook.indexOf("discordapp.com/api/webhooks/")) {
        localStorage.setItem("discwebhook2", discwebhook2);
    } else {
        if (containsrealwebhook == "") {
            localStorage.setItem("discwebhook2", discwebhook2);
        } else {
            toastr["error"](Premadeletter36).css("width", "210px");
        }
        //return discwebhook2;
    }
}

function getEmbedUrl(url) {
    url = url.trim();
    var musicParams = "showinfo=0&controls=2&vq=tiny&enablejsapi=1";
    var videoId = getParameterByName("v", url);
    var listId = getParameterByName("list", url);

    if (videoId != null && listId == null) {
        return "http://www.youtube.com/embed/" + videoId + "?" + musicParams;
    } else if (listId != null && videoId != null) {
        return "http://www.youtube.com/embed/" + videoId + "?list=" + listId + "&" + musicParams;
    } else if (url.startsWith("https://youtu.be/")) {
        if (listId != null) {
            return url.replace("http://youtu.be/", "http://www.youtube.com/embed/") + "&" + musicParams;
        } else {
            return url.replace("http://youtu.be/", "http://www.youtube.com/embed/") + "?" + musicParams;
        }
    } else {
        return false;
    }
}

function dosearch() {
    if (searchSip == null) {
        $("#searchHud").show();
        $("#statsInfo").show();
        $("#notes").show();
        $("#searchLog").show();
        $("#closeBtn").hide();
        $("#helloContainer").hide();
        return closebutton1 = "1";
    } else {
        toastr["info"](Premadeletter37 + '!');
    }
}

function doback() {
    if (closebutton1 == "1") {
        $("#searchHud").hide();
        $("#statsInfo").hide();
        $("#notes").hide();
        $("#searchLog").hide();
        $("#helloContainer").show();
        $("#closeBtn").click();
    } else if (closebutton1 == "0") {
        $("#closeBtn").click();
    }
}

function msToTime(duration) {
    var seconds = parseInt((duration / 1000) % 60),
        minutes = parseInt((duration / (1000 * 60)) % 60),
        hours = parseInt((duration / (1000 * 60 * 60)) % 24);
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    return (hours == "00" ? "" : hours + ":") + minutes + ":" + seconds;
}

function testmessage() {
    /*
	var modetemp = $('#gamemode').val();
	$('#gamemode option[value=":party"]').prop('selected', 'selected').change();
	if (modetemp!=":party"){
		$("#hidendivtoken").css("display", "none");	
		
	}	
*/
}

function newsubmit() {
    //if (searchSip==null){ 
    MC.setNick(document.getElementById('nick').value);
	setTimeout(function() {MC.onPlayerSpawn();}, 2000);
    //setTimeout(function (){$('#quality').val()},1500);
    //return false;
    //else if (searchSip!=null){	
    //realmode = getGameMode();
    //testmessage();MC.setNick(document.getElementById('nick').value); return realmode;}
}

function Bino() {
    if (MC.isInGame()) {
        if (ogario.spectate) {
            KeyEvent.simulate(81, 81)
        } else {
            toastr["info"](Premadeletter38);
        }
    }
}

function Ultimouse() {
	if (Ultimouseenabled==0){
		var s = document.createElement("script");
		s.type = "text/javascript";
		s.src = "https://jimboy3100.github.io/auc/auc.user.js";
		$("body").append(s);
		return Ultimouseenabled=1;
	}
}

function settroll1true() {
    return troll1 = "YES";
}

function settroll1false() {
    return troll1 = "NO";
}

function whenplayerdies() {
    if (troll1 == "YES") {
        olddeath = function() {
			
            //afterdeathtonormalmode();
			playSound("https://jimboy3100.github.io/banners/troll1.mp3");	
			$("#canvas").css('background-image', 'url(" https://media.giphy.com/media/eVy46EWyclTIA/giphy.gif ")').css({
                opacity: 0.8
            });
            $("#minimap-hud").css('background-image', 'url(" https://jimboy3100.github.io/banners/icoeucid.gif ")').css({
                opacity: 1
            });
            $("#leaderboard-hud").css('background-image', 'url(" https://media.giphy.com/media/VSuWfl1qCiRsk/giphy.gif ")').css({
                opacity: 0.8
            });
            setTimeout(function() {
                $("#canvas").css('background-image', 'url(" https://media.giphy.com/media/aw9WgvgNd1bQk/giphy.gif ")').css({
                    opacity: 0.8
                });
            }, 4000);
            setTimeout(function() {
                $("#canvas").css('background-image', 'url(" ")').css({
                    opacity: 1
                });
                $("#leaderboard-hud").css('background-image', 'url("' + leadbimg + '")').css({
                    opacity: 0.8
                });
            }, 8000);
            setTimeout(function() {
                $("#minimap-hud").css('background-image', 'url("' + minimapbckimg + '")').css({
                    opacity: 0.8
                });
				}, 27000);

        }
    } else {
        olddeath = function() {
			
            //afterdeathtonormalmode();
        };
    }
	newDeath=MC.onPlayerDeath; 
	MC.onPlayerDeath= function () {newDeath;olddeath();}
}

function agariowhitesettings() {
    if (dyinglight1load == null || dyinglight1load == "null") {
        $("#import-settings-btn").attr('class', 'btn btn-success');
        document.getElementById("import-settings").value = '{"ogarioCommands":{"comm1":"Dont W or Split too much! We dont want to get ANTI","comm2":"Split him! Stick to the Viruses!","comm3":"I am not ANTI. You can give me mass!","comm4":"I am ANTI. Do NOT give me mass!","comm5":"%currentSector%!","comm6":"Need backup at %currentSector%!","comm7":"Enemy spotted at %currentSector%!","comm8":"Hello Team!","comm9":"Tricksplit!","comm0":"Dont Ally with them!","comm10":"They are Allies!","comm11":"Left!","comm12":"Up!","comm13":"Right!","comm14":"Bottom!"},"ogarioHotkeys":{"0":"hk-comm0","1":"hk-comm1","2":"hk-comm2","3":"hk-comm3","4":"hk-comm4","5":"hk-comm5","6":"hk-comm6","7":"hk-comm7","8":"hk-comm8","9":"hk-comm9","W":"hk-feed","E":"hk-macroFeed","SPACE":"hk-split","Q":"hk-doubleSplit","ALT+Q":"hk-popSplit","SHIFT":"hk-split16","R":"hk-pause","T":"hk-showTop5","ALT+T":"hk-showTime","U":"hk-showSplitRange","I":"hk-showSplitInd","ALT+I":"hk-showTeammatesInd","O":"hk-showOppColors","A":"hk-toggleSkins","S":"hk-showSkins","ALT+S":"hk-showStats","D":"hk-toggleCells","F":"hk-showFood","G":"hk-showGrid","ALT+G":"hk-showMiniMapGuides","H":"hk-hideChat","ALT+H":"hk-showHUD","L":"hk-copyLb","ALT+L":"hk-showLb","":"hk-privateMiniMap","Z":"hk-resetZoom","X":"hk-toggleDeath","C":"hk-clearChat","B":"hk-showBgSectors","ALT+B":"hk-hideBots","N":"hk-showNames","M":"hk-showMass","ALT+M":"hk-showMiniMap","ENTER":"hk-chatMessage","TILDE":"hk-quickResp","ALT+1":"hk-zoom1","ALT+2":"hk-zoom2","ALT+3":"hk-zoom3","ALT+4":"hk-zoom4","ALT+5":"hk-zoom5","=":"hk-switchServerMode","MOUSE WHEEL":"hk-comm10","LEFT":"hk-comm11","UP":"hk-comm12","RIGHT":"hk-comm13","DOWN":"hk-comm14","spec-messageKey":"ENTER"},"ogarioPlayerProfiles":[{"nick":"","clanTag":"","skinURL":"http://i.imgur.com/cvZgi38.jpg","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"https://i.imgur.com/qcgMD45.jpg","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"http://i.imgur.com/mLZ4lDZ.jpg","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"http://i.imgur.com/g6Cqym2.png","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"http://i.imgur.com/AlX80bX.png","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"http://i.imgur.com/tyAhouV.jpg","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"","color":"#01d9cc"}],"ogarioSettings":{"quickResp":true,"autoResp":true,"autoZoom":false,"autoHideNames":true,"autoHideMass":true,"autoHideFood":false,"autoHideFoodOnZoom":false,"noNames":false,"optimizedNames":true,"hideMyName":false,"showMass":true,"optimizedMass":true,"shortMass":true,"virMassShots":true,"hideMyMass":false,"hideEnemiesMass":false,"vanillaSkins":true,"customSkins":true,"myTransparentSkin":false,"myCustomColor":false,"transparentCells":false,"transparentViruses":true,"transparentSkins":false,"showGrid":true,"showBgSectors":false,"showMapBorders":false,"showMiniMap":true,"showMiniMapGrid":false,"showMiniMapGuides":true,"oneColoredTeammates":false,"optimizedFood":true,"rainbowFood":true,"oppColors":true,"oppRings":true,"virColors":false,"splitRange":true,"virusesRange":false,"textStroke":true,"namesStroke":false,"massStroke":false,"cursorTracking":false,"teammatesInd":false,"mouseSplit":false,"mouseFeed":false,"mouseInvert":false,"disableChat":false,"hideChat":false,"showChatBox":false,"showChatImages":true,"showChatVideos":true,"showTop5":true,"showTargeting":true,"showTime":true,"normalLb":true,"centeredLb":true,"fpsAtTop":true,"showStats":true,"showStatsMass":true,"showStatsSTE":true,"showStatsN16":true,"showStatsFPS":true,"blockPopups":false,"streamMode":false,"hideSkinUrl":false,"showQuickMenu":true,"showSkinsPanel":true,"zoomSpeedValue":0.9},"ogarioThemeSettings":{"preset":"agario-light","darkTheme":false,"mainColor":"#ffffff","bgColor":"#f2fbff","gridColor":"#ced6d9","bordersColor":"#858a8c","foodColor":"#2de52d","virusColor":"#33ff33","virusStrokeColor":"#2de52d","cursorTrackingColor":"#ffffff","splitRangeColor":"#ffffff","teammatesIndColor":"#ffffff","namesFont":"ubuntu-bold","namesFontFamily":"Ubuntu","namesFontWeight":700,"sectorsFont":"ubuntu","sectorsFontFamily":"Ubuntu","sectorsFontWeight":400,"sectorsX":5,"sectorsY":5,"animation":140,"nameScale":1,"massScale":3,"massScaleMargin":1.25,"foodSize":5,"bordersWidth":40,"sectorsWidth":40,"sectorsFontSize":1200,"cellsAlpha":0.9,"skinsAlpha":0.7,"virusAlpha":0.6,"virusStrokeSize":14,"menuPreset":"ogario-v3","menuMainColor":"#01d9cc","menuBtnTextColor":"#ffffff","menuPanelColor":"#00243e","menuPanelColor2":"#002f52","menuTextColor":"#ffffff","menuTextColor2":"#8096a7","btn1Color":"#018cf6","btn1Color2":"#0176ce","btn2Color":"#00b9e8","btn2Color2":"#0099c0","btn3Color":"#8d5fe6","btn3Color2":"#814ee3","btn4Color":"#bf00aa","btn4Color2":"#a80096","menuBg":"http://cdn.ogario.ovh/static/img/pattern.png","menuOpacity":0.96,"hudMainColor":"#ffffff","hudColor":"rgba(0,0,0,0.4)","hudTextColor":"#ffffff","statsHudColor":"#ffffff","timeHudColor":"#ffffff","top5MassColor":"#ffffff","lbMeColor":"#bf00aa","lbTeammateColor":"#018cf6","hudFont":"ubuntu-bold","hudFontFamily":"Ubuntu","hudFontWeight":700,"hudScale":1,"messageColor":"rgba(0,0,0,0.4)","messageTextColor":"#ffffff","messageTimeColor":"#018cf6","messageNickColor":"#ffffff","commandsColor":"rgba(255,255,255,0.9)","commandsTextColor":"#000000","commandsTimeColor":"#ffffff","commandsNickColor":"#ffffff","chatBoxColor":"rgba(0,0,0,0.4)","chatScale":1,"miniMapSectorsColor":"#ffffff","miniMapSectorColor":"#ffffff","miniMapGuidesColor":"#ffffff","miniMapNickColor":"#ffffff","miniMapNickStrokeColor":"#000000","miniMapMyCellColor":"#ffffff","miniMapMyCellStrokeColor":"#ffffff","miniMapTeammatesColor":"#ffffff","miniMapDeathLocationColor":"#ffffff","miniMapFont":"ubuntu-bold","miniMapFontFamily":"Ubuntu","miniMapFontWeight":700,"miniMapNickFont":"ubuntu-bold","miniMapNickFontFamily":"Roboto","miniMapNickFontWeight":700,"miniMapWidth":240,"miniMapTop":24,"miniMapSectorsOpacity":0.25,"miniMapNickSize":11,"miniMapNickStrokeSize":2,"miniMapMyCellSize":7.5,"miniMapMyCellStrokeSize":4,"miniMapTeammatesSize":5.5,"customBackground":"","customCursor":"http://cdn.ogario.ovh/static/img/cursors/cursor_02.cur"}}'
		window.history.pushState(null, null, window.location.pathname);
        $('#import-settings-btn').click();
    } else if (dyinglight1load == "yes") {
        localStorage.setItem("musicUrl", defaultMusicUrl);
        $("#minimapPicture").val("").blur();
        $("#minbtext").val("").blur();
        $("#leadbtext").val("").blur();
        $("#teambtext").val("").blur();
        $("#imgUrl").val("").blur();
        $("#imgHref").val("").blur();
        //unload dying light icons
        $("#pic1url").val("").blur();
        $("#pic1data").val("").blur();
        $("#pic2url").val("").blur();
        $("#pic2data").val("").blur();
        $("#pic3url").val("").blur();
        $("#pic3data").val("").blur();
        $("#pic4url").val("").blur();
        $("#pic4data").val("").blur();
        $("#pic5url").val("").blur();
        $("#pic5data").val("").blur();
        //unload dying light youtube
        $("#yt1url").val("").blur();
        $("#yt1data").val("").blur();
        $("#yt2url").val("").blur();
        $("#yt2data").val("").blur();
        $("#yt3url").val("").blur();
        $("#yt3data").val("").blur();
        $("#yt4url").val("").blur();
        $("#yt4data").val("").blur();
        $("#yt5url").val("").blur();
        $("#yt5data").val("").blur();
        dyinglight1load = null;
        localStorage.setItem("dyinglight1load", dyinglight1load);
        setTimeout(function() {
            $("#import-settings-btn").attr('class', 'btn btn-success');
			document.getElementById("import-settings").value = '{"ogarioCommands":{"comm1":"Dont W or Split too much! We dont want to get ANTI","comm2":"Split him! Stick to the Viruses!","comm3":"I am not ANTI. You can give me mass!","comm4":"I am ANTI. Do NOT give me mass!","comm5":"%currentSector%!","comm6":"Need backup at %currentSector%!","comm7":"Enemy spotted at %currentSector%!","comm8":"Hello Team!","comm9":"Tricksplit!","comm0":"Dont Ally with them!","comm10":"They are Allies!","comm11":"Left!","comm12":"Up!","comm13":"Right!","comm14":"Bottom!"},"ogarioHotkeys":{"0":"hk-comm0","1":"hk-comm1","2":"hk-comm2","3":"hk-comm3","4":"hk-comm4","5":"hk-comm5","6":"hk-comm6","7":"hk-comm7","8":"hk-comm8","9":"hk-comm9","W":"hk-feed","E":"hk-macroFeed","SPACE":"hk-split","Q":"hk-doubleSplit","ALT+Q":"hk-popSplit","SHIFT":"hk-split16","R":"hk-pause","T":"hk-showTop5","ALT+T":"hk-showTime","U":"hk-showSplitRange","I":"hk-showSplitInd","ALT+I":"hk-showTeammatesInd","O":"hk-showOppColors","A":"hk-toggleSkins","S":"hk-showSkins","ALT+S":"hk-showStats","D":"hk-toggleCells","F":"hk-showFood","G":"hk-showGrid","ALT+G":"hk-showMiniMapGuides","H":"hk-hideChat","ALT+H":"hk-showHUD","L":"hk-copyLb","ALT+L":"hk-showLb","":"hk-privateMiniMap","Z":"hk-resetZoom","X":"hk-toggleDeath","C":"hk-clearChat","B":"hk-showBgSectors","ALT+B":"hk-hideBots","N":"hk-showNames","M":"hk-showMass","ALT+M":"hk-showMiniMap","ENTER":"hk-chatMessage","TILDE":"hk-quickResp","ALT+1":"hk-zoom1","ALT+2":"hk-zoom2","ALT+3":"hk-zoom3","ALT+4":"hk-zoom4","ALT+5":"hk-zoom5","=":"hk-switchServerMode","MOUSE WHEEL":"hk-comm10","LEFT":"hk-comm11","UP":"hk-comm12","RIGHT":"hk-comm13","DOWN":"hk-comm14","spec-messageKey":"ENTER"},"ogarioPlayerProfiles":[{"nick":"","clanTag":"","skinURL":"http://i.imgur.com/cvZgi38.jpg","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"https://i.imgur.com/qcgMD45.jpg","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"http://i.imgur.com/mLZ4lDZ.jpg","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"http://i.imgur.com/g6Cqym2.png","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"http://i.imgur.com/AlX80bX.png","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"http://i.imgur.com/tyAhouV.jpg","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"","color":"#01d9cc"}],"ogarioSettings":{"quickResp":true,"autoResp":true,"autoZoom":false,"autoHideNames":true,"autoHideMass":true,"autoHideFood":false,"autoHideFoodOnZoom":false,"noNames":false,"optimizedNames":true,"hideMyName":false,"showMass":true,"optimizedMass":true,"shortMass":true,"virMassShots":true,"hideMyMass":false,"hideEnemiesMass":false,"vanillaSkins":true,"customSkins":true,"myTransparentSkin":false,"myCustomColor":false,"transparentCells":false,"transparentViruses":true,"transparentSkins":false,"showGrid":true,"showBgSectors":false,"showMapBorders":false,"showMiniMap":true,"showMiniMapGrid":false,"showMiniMapGuides":true,"oneColoredTeammates":false,"optimizedFood":true,"rainbowFood":true,"oppColors":true,"oppRings":true,"virColors":false,"splitRange":true,"virusesRange":false,"textStroke":true,"namesStroke":false,"massStroke":false,"cursorTracking":false,"teammatesInd":false,"mouseSplit":false,"mouseFeed":false,"mouseInvert":false,"disableChat":false,"hideChat":false,"showChatBox":false,"showChatImages":true,"showChatVideos":true,"showTop5":true,"showTargeting":true,"showTime":true,"normalLb":true,"centeredLb":true,"fpsAtTop":true,"showStats":true,"showStatsMass":true,"showStatsSTE":true,"showStatsN16":true,"showStatsFPS":true,"blockPopups":false,"streamMode":false,"hideSkinUrl":false,"showQuickMenu":true,"showSkinsPanel":true,"zoomSpeedValue":0.9},"ogarioThemeSettings":{"preset":"agario-light","darkTheme":false,"mainColor":"#ffffff","bgColor":"#f2fbff","gridColor":"#ced6d9","bordersColor":"#858a8c","foodColor":"#2de52d","virusColor":"#33ff33","virusStrokeColor":"#2de52d","cursorTrackingColor":"#ffffff","splitRangeColor":"#ffffff","teammatesIndColor":"#ffffff","namesFont":"ubuntu-bold","namesFontFamily":"Ubuntu","namesFontWeight":700,"sectorsFont":"ubuntu","sectorsFontFamily":"Ubuntu","sectorsFontWeight":400,"sectorsX":5,"sectorsY":5,"animation":140,"nameScale":1,"massScale":3,"massScaleMargin":1.25,"foodSize":5,"bordersWidth":40,"sectorsWidth":40,"sectorsFontSize":1200,"cellsAlpha":0.9,"skinsAlpha":0.7,"virusAlpha":0.6,"virusStrokeSize":14,"menuPreset":"ogario-v3","menuMainColor":"#01d9cc","menuBtnTextColor":"#ffffff","menuPanelColor":"#00243e","menuPanelColor2":"#002f52","menuTextColor":"#ffffff","menuTextColor2":"#8096a7","btn1Color":"#018cf6","btn1Color2":"#0176ce","btn2Color":"#00b9e8","btn2Color2":"#0099c0","btn3Color":"#8d5fe6","btn3Color2":"#814ee3","btn4Color":"#bf00aa","btn4Color2":"#a80096","menuBg":"http://cdn.ogario.ovh/static/img/pattern.png","menuOpacity":0.96,"hudMainColor":"#ffffff","hudColor":"rgba(0,0,0,0.4)","hudTextColor":"#ffffff","statsHudColor":"#ffffff","timeHudColor":"#ffffff","top5MassColor":"#ffffff","lbMeColor":"#bf00aa","lbTeammateColor":"#018cf6","hudFont":"ubuntu-bold","hudFontFamily":"Ubuntu","hudFontWeight":700,"hudScale":1,"messageColor":"rgba(0,0,0,0.4)","messageTextColor":"#ffffff","messageTimeColor":"#018cf6","messageNickColor":"#ffffff","commandsColor":"rgba(255,255,255,0.9)","commandsTextColor":"#000000","commandsTimeColor":"#ffffff","commandsNickColor":"#ffffff","chatBoxColor":"rgba(0,0,0,0.4)","chatScale":1,"miniMapSectorsColor":"#ffffff","miniMapSectorColor":"#ffffff","miniMapGuidesColor":"#ffffff","miniMapNickColor":"#ffffff","miniMapNickStrokeColor":"#000000","miniMapMyCellColor":"#ffffff","miniMapMyCellStrokeColor":"#ffffff","miniMapTeammatesColor":"#ffffff","miniMapDeathLocationColor":"#ffffff","miniMapFont":"ubuntu-bold","miniMapFontFamily":"Ubuntu","miniMapFontWeight":700,"miniMapNickFont":"ubuntu-bold","miniMapNickFontFamily":"Roboto","miniMapNickFontWeight":700,"miniMapWidth":240,"miniMapTop":24,"miniMapSectorsOpacity":0.25,"miniMapNickSize":11,"miniMapNickStrokeSize":2,"miniMapMyCellSize":7.5,"miniMapMyCellStrokeSize":4,"miniMapTeammatesSize":5.5,"customBackground":"","customCursor":"http://cdn.ogario.ovh/static/img/cursors/cursor_02.cur"}}'
			window.history.pushState(null, null, window.location.pathname);
            $('#import-settings-btn').click();
        }, 100);
    }
}

function legenddefaultsettings() {
    if (dyinglight1load == null || dyinglight1load == "null") {
        $("#import-settings-btn").attr('class', 'btn btn-success');
        document.getElementById("import-settings").value = '{"ogarioCommands":{"comm1":"Feed me!","comm2":"Split into me!","comm3":"Need backup at %currentSector%!","comm4":"Enemy spotted at %currentSector%!","comm5":"Need a teammate!","comm6":"Tank the virus!","comm7":"Eat the virus!","comm8":"Lets bait!","comm9":"Fake tricksplit!","comm0":"Fuck!","comm10":"Tricksplit!","comm11":"Left!","comm12":"Up!","comm13":"Right!","comm14":"Bottom!"},"ogarioHotkeys":{"0":"hk-comm0","1":"hk-comm1","2":"hk-comm2","3":"hk-comm3","4":"hk-comm4","5":"hk-comm5","6":"hk-comm6","7":"hk-comm7","8":"hk-comm8","9":"hk-comm9","W":"hk-feed","E":"hk-macroFeed","SPACE":"hk-split","Q":"hk-doubleSplit","ALT+Q":"hk-popSplit","SHIFT":"hk-split16","R":"hk-pause","T":"hk-showTop5","ALT+T":"hk-showTime","U":"hk-showSplitRange","I":"hk-showSplitInd","ALT+I":"hk-showTeammatesInd","O":"hk-showOppColors","A":"hk-toggleSkins","S":"hk-showSkins","ALT+S":"hk-showStats","D":"hk-toggleCells","F":"hk-showFood","G":"hk-showGrid","ALT+G":"hk-showMiniMapGuides","H":"hk-hideChat","ALT+H":"hk-showHUD","L":"hk-copyLb","ALT+L":"hk-showLb","":"hk-privateMiniMap","Z":"hk-resetZoom","X":"hk-toggleDeath","C":"hk-clearChat","B":"hk-showBgSectors","ALT+B":"hk-hideBots","N":"hk-showNames","M":"hk-showMass","ALT+M":"hk-showMiniMap","ENTER":"hk-chatMessage","TILDE":"hk-quickResp","ALT+1":"hk-zoom1","ALT+2":"hk-zoom2","ALT+3":"hk-zoom3","ALT+4":"hk-zoom4","ALT+5":"hk-zoom5","=":"hk-switchServerMode","MOUSE WHEEL":"hk-comm10","LEFT":"hk-comm11","UP":"hk-comm12","RIGHT":"hk-comm13","DOWN":"hk-comm14","spec-messageKey":"ENTER"},"ogarioPlayerProfiles":[{"nick":"Profile #1","clanTag":"","skinURL":"","color":"#01d9cc"},{"nick":"Profile #2","clanTag":"","skinURL":"","color":"#01d9cc"},{"nick":"Profile #3","clanTag":"","skinURL":"","color":"#01d9cc"},{"nick":"Profile #4","clanTag":"","skinURL":"","color":"#01d9cc"},{"nick":"Profile #5","clanTag":"","skinURL":"","color":"#01d9cc"},{"nick":"Profile #6","clanTag":"","skinURL":"","color":"#01d9cc"},{"nick":"Profile #7","clanTag":"","skinURL":"","color":"#01d9cc"},{"nick":"Profile #8","clanTag":"","skinURL":"","color":"#01d9cc"},{"nick":"Profile #9","clanTag":"","skinURL":"","color":"#01d9cc"},{"nick":"Profile #10","clanTag":"","skinURL":"","color":"#01d9cc"}],"ogarioSettings":{"quickResp":true,"autoResp":false,"autoZoom":true,"autoHideNames":true,"autoHideMass":true,"autoHideFood":false,"autoHideFoodOnZoom":false,"noNames":false,"optimizedNames":true,"hideMyName":true,"showMass":true,"optimizedMass":true,"shortMass":true,"virMassShots":true,"hideMyMass":false,"hideEnemiesMass":false,"vanillaSkins":false,"customSkins":true,"myTransparentSkin":false,"myCustomColor":false,"transparentCells":false,"transparentViruses":true,"transparentSkins":false,"showGrid":false,"showBgSectors":false,"showMapBorders":true,"showMiniMap":true,"showMiniMapGrid":false,"showMiniMapGuides":true,"oneColoredTeammates":false,"optimizedFood":true,"rainbowFood":false,"oppColors":false,"oppRings":false,"virColors":false,"splitRange":false,"virusesRange":false,"textStroke":false,"namesStroke":false,"massStroke":false,"cursorTracking":true,"teammatesInd":false,"mouseSplit":false,"mouseFeed":false,"mouseInvert":false,"disableChat":false,"hideChat":false,"showChatBox":false,"showChatImages":true,"showChatVideos":true,"showTop5":true,"showTargeting":true,"showTime":true,"normalLb":false,"centeredLb":true,"fpsAtTop":true,"showStats":true,"showStatsMass":true,"showStatsSTE":false,"showStatsN16":false,"showStatsFPS":true,"blockPopups":false,"streamMode":false,"hideSkinUrl":false,"showQuickMenu":true,"showSkinsPanel":true,"zoomSpeedValue":0.9},"ogarioThemeSettings":{"preset":"ogario-v3","darkTheme":true,"mainColor":"#01d9cc","bgColor":"#000a11","gridColor":"#00243e","bordersColor":"#01d9cc","foodColor":"#5000ff","virusColor":"#002f52","virusStrokeColor":"#00b9e8","cursorTrackingColor":"#ffffff","splitRangeColor":"#ffffff","teammatesIndColor":"#ffffff","namesFont":"ubuntu-bold","namesFontFamily":"Ubuntu","namesFontWeight":700,"sectorsFont":"ubuntu","sectorsFontFamily":"Ubuntu","sectorsFontWeight":400,"sectorsX":5,"sectorsY":5,"animation":140,"nameScale":1,"massScale":3,"massScaleMargin":1.25,"foodSize":5,"bordersWidth":40,"sectorsWidth":40,"sectorsFontSize":1200,"cellsAlpha":0.9,"skinsAlpha":0.7,"virusAlpha":0.6,"virusStrokeSize":14,"menuPreset":"ogario-v3","menuMainColor":"#01d9cc","menuBtnTextColor":"#ffffff","menuPanelColor":"#00243e","menuPanelColor2":"#002f52","menuTextColor":"#ffffff","menuTextColor2":"#8096a7","btn1Color":"#018cf6","btn1Color2":"#0176ce","btn2Color":"#00b9e8","btn2Color2":"#0099c0","btn3Color":"#8d5fe6","btn3Color2":"#814ee3","btn4Color":"#bf00aa","btn4Color2":"#a80096","menuBg":"http://cdn.ogario.ovh/static/img/pattern.png","menuOpacity":0.96,"hudMainColor":"#01d9cc","hudColor":"rgba(0,0,0,0.4)","hudTextColor":"#ffffff","statsHudColor":"#ffffff","timeHudColor":"#01d9cc","top5MassColor":"#bf00aa","lbMeColor":"#bf00aa","lbTeammateColor":"#018cf6","hudFont":"ubuntu-bold","hudFontFamily":"Ubuntu","hudFontWeight":700,"hudScale":1,"messageColor":"rgba(0,0,0,0.4)","messageTextColor":"#ffffff","messageTimeColor":"#018cf6","messageNickColor":"#01d9cc","commandsColor":"rgba(191,0,170,0.9)","commandsTextColor":"#ffffff","commandsTimeColor":"#bf00aa","commandsNickColor":"#ffffff","chatBoxColor":"rgba(0,0,0,0.4)","chatScale":1,"miniMapSectorsColor":"#ffffff","miniMapSectorColor":"#01d9cc","miniMapGuidesColor":"#bf00aa","miniMapNickColor":"#ffffff","miniMapNickStrokeColor":"#000000","miniMapMyCellColor":"#ffffff","miniMapMyCellStrokeColor":"#bf00aa","miniMapTeammatesColor":"#01d9cc","miniMapDeathLocationColor":"#bf00aa","miniMapFont":"ubuntu-bold","miniMapFontFamily":"Ubuntu","miniMapFontWeight":700,"miniMapNickFont":"ubuntu-bold","miniMapNickFontFamily":"Ubuntu","miniMapNickFontWeight":700,"miniMapWidth":240,"miniMapTop":24,"miniMapSectorsOpacity":0.1,"miniMapNickSize":11,"miniMapNickStrokeSize":2,"miniMapMyCellSize":7.5,"miniMapMyCellStrokeSize":4,"miniMapTeammatesSize":5.5,"customBackground":"","customCursor":"http://cdn.ogario.ovh/static/img/cursors/cursor_02.cur"}}'
        window.history.pushState(null, null, window.location.pathname);
        $('#import-settings-btn').click();
    } else if (dyinglight1load == "yes") {
        localStorage.setItem("musicUrl", defaultMusicUrl);
        $("#minimapPicture").val("").blur();
        $("#minbtext").val("").blur();
        $("#leadbtext").val("").blur();
        $("#teambtext").val("").blur();
        $("#imgUrl").val("").blur();
        $("#imgHref").val("").blur();
        //unload dying light icons
        $("#pic1url").val("").blur();
        $("#pic1data").val("").blur();
        $("#pic2url").val("").blur();
        $("#pic2data").val("").blur();
        $("#pic3url").val("").blur();
        $("#pic3data").val("").blur();
        $("#pic4url").val("").blur();
        $("#pic4data").val("").blur();
        $("#pic5url").val("").blur();
        $("#pic5data").val("").blur();
        //unload dying light youtube
        $("#yt1url").val("").blur();
        $("#yt1data").val("").blur();
        $("#yt2url").val("").blur();
        $("#yt2data").val("").blur();
        $("#yt3url").val("").blur();
        $("#yt3data").val("").blur();
        $("#yt4url").val("").blur();
        $("#yt4data").val("").blur();
        $("#yt5url").val("").blur();
        $("#yt5data").val("").blur();
        dyinglight1load = null;
        localStorage.setItem("dyinglight1load", dyinglight1load);
        setTimeout(function() {
            $("#import-settings-btn").attr('class', 'btn btn-success');
            document.getElementById("import-settings").value = '{"ogarioCommands":{"comm1":"Feed me!","comm2":"Split into me!","comm3":"Need backup at %currentSector%!","comm4":"Enemy spotted at %currentSector%!","comm5":"Need a teammate!","comm6":"Tank the virus!","comm7":"Eat the virus!","comm8":"Lets bait!","comm9":"Fake tricksplit!","comm0":"Fuck!","comm10":"Tricksplit!","comm11":"Left!","comm12":"Up!","comm13":"Right!","comm14":"Bottom!"},"ogarioHotkeys":{"0":"hk-comm0","1":"hk-comm1","2":"hk-comm2","3":"hk-comm3","4":"hk-comm4","5":"hk-comm5","6":"hk-comm6","7":"hk-comm7","8":"hk-comm8","9":"hk-comm9","W":"hk-feed","E":"hk-macroFeed","SPACE":"hk-split","Q":"hk-doubleSplit","ALT+Q":"hk-popSplit","SHIFT":"hk-split16","R":"hk-pause","T":"hk-showTop5","ALT+T":"hk-showTime","U":"hk-showSplitRange","I":"hk-showSplitInd","ALT+I":"hk-showTeammatesInd","O":"hk-showOppColors","A":"hk-toggleSkins","S":"hk-showSkins","ALT+S":"hk-showStats","D":"hk-toggleCells","F":"hk-showFood","G":"hk-showGrid","ALT+G":"hk-showMiniMapGuides","H":"hk-hideChat","ALT+H":"hk-showHUD","L":"hk-copyLb","ALT+L":"hk-showLb","":"hk-privateMiniMap","Z":"hk-resetZoom","X":"hk-toggleDeath","C":"hk-clearChat","B":"hk-showBgSectors","ALT+B":"hk-hideBots","N":"hk-showNames","M":"hk-showMass","ALT+M":"hk-showMiniMap","ENTER":"hk-chatMessage","TILDE":"hk-quickResp","ALT+1":"hk-zoom1","ALT+2":"hk-zoom2","ALT+3":"hk-zoom3","ALT+4":"hk-zoom4","ALT+5":"hk-zoom5","=":"hk-switchServerMode","MOUSE WHEEL":"hk-comm10","LEFT":"hk-comm11","UP":"hk-comm12","RIGHT":"hk-comm13","DOWN":"hk-comm14","spec-messageKey":"ENTER"},"ogarioPlayerProfiles":[{"nick":"Profile #1","clanTag":"","skinURL":"","color":"#01d9cc"},{"nick":"Profile #2","clanTag":"","skinURL":"","color":"#01d9cc"},{"nick":"Profile #3","clanTag":"","skinURL":"","color":"#01d9cc"},{"nick":"Profile #4","clanTag":"","skinURL":"","color":"#01d9cc"},{"nick":"Profile #5","clanTag":"","skinURL":"","color":"#01d9cc"},{"nick":"Profile #6","clanTag":"","skinURL":"","color":"#01d9cc"},{"nick":"Profile #7","clanTag":"","skinURL":"","color":"#01d9cc"},{"nick":"Profile #8","clanTag":"","skinURL":"","color":"#01d9cc"},{"nick":"Profile #9","clanTag":"","skinURL":"","color":"#01d9cc"},{"nick":"Profile #10","clanTag":"","skinURL":"","color":"#01d9cc"}],"ogarioSettings":{"quickResp":true,"autoResp":false,"autoZoom":true,"autoHideNames":true,"autoHideMass":true,"autoHideFood":false,"autoHideFoodOnZoom":false,"noNames":false,"optimizedNames":true,"hideMyName":true,"showMass":true,"optimizedMass":true,"shortMass":true,"virMassShots":true,"hideMyMass":false,"hideEnemiesMass":false,"vanillaSkins":false,"customSkins":true,"myTransparentSkin":false,"myCustomColor":false,"transparentCells":false,"transparentViruses":true,"transparentSkins":false,"showGrid":false,"showBgSectors":false,"showMapBorders":true,"showMiniMap":true,"showMiniMapGrid":false,"showMiniMapGuides":true,"oneColoredTeammates":false,"optimizedFood":true,"rainbowFood":false,"oppColors":false,"oppRings":false,"virColors":false,"splitRange":false,"virusesRange":false,"textStroke":false,"namesStroke":false,"massStroke":false,"cursorTracking":true,"teammatesInd":false,"mouseSplit":false,"mouseFeed":false,"mouseInvert":false,"disableChat":false,"hideChat":false,"showChatBox":false,"showChatImages":true,"showChatVideos":true,"showTop5":true,"showTargeting":true,"showTime":true,"normalLb":false,"centeredLb":true,"fpsAtTop":true,"showStats":true,"showStatsMass":true,"showStatsSTE":false,"showStatsN16":false,"showStatsFPS":true,"blockPopups":false,"streamMode":false,"hideSkinUrl":false,"showQuickMenu":true,"showSkinsPanel":true,"zoomSpeedValue":0.9},"ogarioThemeSettings":{"preset":"ogario-v3","darkTheme":true,"mainColor":"#01d9cc","bgColor":"#000a11","gridColor":"#00243e","bordersColor":"#01d9cc","foodColor":"#5000ff","virusColor":"#002f52","virusStrokeColor":"#00b9e8","cursorTrackingColor":"#ffffff","splitRangeColor":"#ffffff","teammatesIndColor":"#ffffff","namesFont":"ubuntu-bold","namesFontFamily":"Ubuntu","namesFontWeight":700,"sectorsFont":"ubuntu","sectorsFontFamily":"Ubuntu","sectorsFontWeight":400,"sectorsX":5,"sectorsY":5,"animation":140,"nameScale":1,"massScale":3,"massScaleMargin":1.25,"foodSize":5,"bordersWidth":40,"sectorsWidth":40,"sectorsFontSize":1200,"cellsAlpha":0.9,"skinsAlpha":0.7,"virusAlpha":0.6,"virusStrokeSize":14,"menuPreset":"ogario-v3","menuMainColor":"#01d9cc","menuBtnTextColor":"#ffffff","menuPanelColor":"#00243e","menuPanelColor2":"#002f52","menuTextColor":"#ffffff","menuTextColor2":"#8096a7","btn1Color":"#018cf6","btn1Color2":"#0176ce","btn2Color":"#00b9e8","btn2Color2":"#0099c0","btn3Color":"#8d5fe6","btn3Color2":"#814ee3","btn4Color":"#bf00aa","btn4Color2":"#a80096","menuBg":"http://cdn.ogario.ovh/static/img/pattern.png","menuOpacity":0.96,"hudMainColor":"#01d9cc","hudColor":"rgba(0,0,0,0.4)","hudTextColor":"#ffffff","statsHudColor":"#ffffff","timeHudColor":"#01d9cc","top5MassColor":"#bf00aa","lbMeColor":"#bf00aa","lbTeammateColor":"#018cf6","hudFont":"ubuntu-bold","hudFontFamily":"Ubuntu","hudFontWeight":700,"hudScale":1,"messageColor":"rgba(0,0,0,0.4)","messageTextColor":"#ffffff","messageTimeColor":"#018cf6","messageNickColor":"#01d9cc","commandsColor":"rgba(191,0,170,0.9)","commandsTextColor":"#ffffff","commandsTimeColor":"#bf00aa","commandsNickColor":"#ffffff","chatBoxColor":"rgba(0,0,0,0.4)","chatScale":1,"miniMapSectorsColor":"#ffffff","miniMapSectorColor":"#01d9cc","miniMapGuidesColor":"#bf00aa","miniMapNickColor":"#ffffff","miniMapNickStrokeColor":"#000000","miniMapMyCellColor":"#ffffff","miniMapMyCellStrokeColor":"#bf00aa","miniMapTeammatesColor":"#01d9cc","miniMapDeathLocationColor":"#bf00aa","miniMapFont":"ubuntu-bold","miniMapFontFamily":"Ubuntu","miniMapFontWeight":700,"miniMapNickFont":"ubuntu-bold","miniMapNickFontFamily":"Ubuntu","miniMapNickFontWeight":700,"miniMapWidth":240,"miniMapTop":24,"miniMapSectorsOpacity":0.1,"miniMapNickSize":11,"miniMapNickStrokeSize":2,"miniMapMyCellSize":7.5,"miniMapMyCellStrokeSize":4,"miniMapTeammatesSize":5.5,"customBackground":"","customCursor":"http://cdn.ogario.ovh/static/img/cursors/cursor_02.cur"}}'
            window.history.pushState(null, null, window.location.pathname);
            $('#import-settings-btn').click();
        }, 100);
    }
}

function vanillasettings() {
    if (dyinglight1load == null || dyinglight1load == "null") {
        $("#import-settings-btn").attr('class', 'btn btn-success');
        document.getElementById("import-settings").value = '{"ogarioCommands":{"comm1":"Dont W or Split too much! We dont want to get ANTI","comm2":"Split him! Stick to the Viruses!","comm3":"I am not ANTI. You can give me mass!","comm4":"I am ANTI. Do NOT give me mass!","comm5":"%currentSector%!","comm6":"Need backup at %currentSector%!","comm7":"Enemy spotted at %currentSector%!","comm8":"Tricksplit!","comm9":"[img]http://i.imgur.com/TC7VFYr.gif[/img]","comm0":"Dont Ally with them!","comm10":"They are Allies!","comm11":"Left!","comm12":"Up!","comm13":"Right!","comm14":"Bottom!"},"ogarioHotkeys":{"0":"hk-comm0","1":"hk-comm1","2":"hk-comm2","3":"hk-comm3","4":"hk-comm4","5":"hk-comm5","6":"hk-comm6","7":"hk-comm7","8":"hk-comm8","9":"hk-comm9","W":"hk-feed","E":"hk-macroFeed","SPACE":"hk-split","Q":"hk-doubleSplit","ALT+Q":"hk-popSplit","SHIFT":"hk-split16","R":"hk-pause","T":"hk-showTop5","ALT+T":"hk-showTime","U":"hk-showSplitRange","I":"hk-showSplitInd","ALT+I":"hk-showTeammatesInd","O":"hk-showOppColors","A":"hk-toggleSkins","S":"hk-showSkins","ALT+S":"hk-showStats","D":"hk-toggleCells","F":"hk-showFood","G":"hk-showGrid","ALT+G":"hk-showMiniMapGuides","H":"hk-hideChat","ALT+H":"hk-showHUD","L":"hk-copyLb","ALT+L":"hk-showLb","":"hk-privateMiniMap","Z":"hk-resetZoom","X":"hk-toggleDeath","C":"hk-clearChat","B":"hk-showBgSectors","ALT+B":"hk-hideBots","N":"hk-showNames","M":"hk-showMass","ALT+M":"hk-showMiniMap","ENTER":"hk-chatMessage","TILDE":"hk-quickResp","ALT+1":"hk-zoom1","ALT+2":"hk-zoom2","ALT+3":"hk-zoom3","ALT+4":"hk-zoom4","ALT+5":"hk-zoom5","=":"hk-switchServerMode","MOUSE WHEEL":"hk-comm10","LEFT":"hk-comm11","UP":"hk-comm12","RIGHT":"hk-comm13","DOWN":"hk-comm14","spec-messageKey":"ENTER"},"ogarioPlayerProfiles":[{"nick":"","clanTag":"","skinURL":"http://i.imgur.com/itbCL0A.jpg","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"http://i.imgur.com/zMHwfGu.png","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"http://i.imgur.com/mLZ4lDZ.jpg","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"http://i.imgur.com/ujeKpeV.png","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"http://i.imgur.com/AlX80bX.png","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"http://i.imgur.com/tyAhouV.jpg","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"","color":"#01d9cc"}],"ogarioSettings":{"quickResp":true,"autoResp":false,"autoZoom":false,"autoHideCellsInfo":false,"autoHideFood":false,"hideMyName":false,"hideMyMass":false,"hideEnemiesMass":false,"vanillaSkins":true,"customSkins":true,"myTransparentSkin":false,"myCustomColor":false,"transparentCells":false,"transparentViruses":true,"transparentSkins":false,"showGrid":true,"showBgSectors":false,"showMapBorders":true,"showMiniMap":true,"showMiniMapGrid":false,"showMiniMapGuides":true,"oneColoredTeammates":false,"rainbowFood":true,"oppColors":true,"oppRings":true,"virColors":false,"splitRange":true,"virusesRange":false,"textStroke":true,"cursorTracking":false,"teammatesInd":false,"mouseSplit":false,"mouseFeed":false,"mouseInvert":false,"disableChat":false,"hideChat":false,"showChatBox":false,"showChatImages":true,"showChatVideos":true,"showTop5":true,"showTargeting":true,"showTime":true,"normalLb":true,"centeredLb":true,"fpsAtTop":true,"showStats":true,"showStatsMass":true,"showStatsSTE":true,"showStatsN16":true,"showStatsFPS":true,"blockPopups":false,"streamMode":false,"hideSkinUrl":false,"showQuickMenu":true,"showSkinsPanel":true,"zoomSpeedValue":0.9},"ogarioThemeSettings":{"preset":"ogario-v3","darkTheme":true,"mainColor":"#01d9cc","bgColor":"#757575","gridColor":"#1c1e1f","bordersColor":"#6e0909","foodColor":"#0038ff","virusColor":"#00523e","virusStrokeColor":"#178a5a","cursorTrackingColor":"#ffffff","splitRangeColor":"#ffffff","namesFont":"roboto","namesFontFamily":"Roboto","namesFontWeight":400,"sectorsFont":"ubuntu","sectorsFontFamily":"Ubuntu","sectorsFontWeight":400,"sectorsX":5,"sectorsY":5,"nameScale":1,"massScale":3,"massScaleMargin":1.25,"foodSize":5,"bordersWidth":14,"sectorsWidth":40,"sectorsFontSize":200,"cellsAlpha":0.9,"skinsAlpha":0.7,"virusAlpha":0.6,"virusStrokeSize":14,"menuPreset":"ogario-v3","menuMainColor":"#fafafa","menuBtnTextColor":"#ffffff","menuPanelColor":"#373838","menuPanelColor2":"#4d4c4c","menuTextColor":"#ffffff","menuTextColor2":"#000000","btn1Color":"#018cf6","btn1Color2":"#151a1f","btn2Color":"#00b9e8","btn2Color2":"#0099c0","btn3Color":"#8d5fe6","btn3Color2":"#814ee3","btn4Color":"#960000","btn4Color2":"#19233b","menuBg":"https://jimboy3100.github.io/banners/grey-08.jpg","menuOpacity":0.95,"hudMainColor":"#ababab","hudColor":"rgba(189,189,189,0.4)","hudTextColor":"#210000","statsHudColor":"#202026","timeHudColor":"#0b2120","top5MassColor":"#bf00aa","lbMeColor":"#f2f0f2","lbTeammateColor":"#1f5431","hudFont":"oswald-bold","hudFontFamily":"Oswald","hudFontWeight":700,"hudScale":1,"messageColor":"rgba(0,0,0,0.4)","messageTextColor":"#ffffff","messageTimeColor":"#018cf6","messageNickColor":"#01d9cc","commandsColor":"rgba(191,0,170,0.9)","commandsTextColor":"#ffffff","commandsTimeColor":"#bf00aa","commandsNickColor":"#ffffff","chatBoxColor":"rgba(0,0,0,0.4)","chatScale":1,"miniMapSectorColor":"#ffffff","miniMapGuidesColor":"#bf00aa","miniMapNickColor":"#163ec9","miniMapNickStrokeColor":"#000000","miniMapMyCellColor":"#ffffff","miniMapMyCellStrokeColor":"#bf00aa","miniMapTeammatesColor":"#01d9cc","miniMapDeathLocationColor":"#bf00aa","miniMapFont":"ubuntu","miniMapFontFamily":"Ubuntu","miniMapFontWeight":400,"miniMapNickFont":"roboto-bold","miniMapNickFontFamily":"Roboto","miniMapNickFontWeight":700,"miniMapWidth":226,"miniMapTop":23,"miniMapSectorsOpacity":0.66,"miniMapNickSize":11,"miniMapNickStrokeSize":2,"miniMapMyCellSize":7.5,"miniMapMyCellStrokeSize":4,"miniMapTeammatesSize":5.5,"customBackground":"","customCursor":"http://cdn.ogario.ovh/static/img/cursors/cursor_14.cur"}}';
        window.history.pushState(null, null, window.location.pathname);
        $('#import-settings-btn').click();
    } else if (dyinglight1load == "yes") {
        localStorage.setItem("musicUrl", defaultMusicUrl);
        $("#minimapPicture").val("").blur();
        $("#minbtext").val("").blur();
        $("#leadbtext").val("").blur();
        $("#teambtext").val("").blur();
        $("#imgUrl").val("").blur();
        $("#imgHref").val("").blur();
        //unload dying light icons
        $("#pic1url").val("").blur();
        $("#pic1data").val("").blur();
        $("#pic2url").val("").blur();
        $("#pic2data").val("").blur();
        $("#pic3url").val("").blur();
        $("#pic3data").val("").blur();
        $("#pic4url").val("").blur();
        $("#pic4data").val("").blur();
        $("#pic5url").val("").blur();
        $("#pic5data").val("").blur();
        //unload dying light youtube
        $("#yt1url").val("").blur();
        $("#yt1data").val("").blur();
        $("#yt2url").val("").blur();
        $("#yt2data").val("").blur();
        $("#yt3url").val("").blur();
        $("#yt3data").val("").blur();
        $("#yt4url").val("").blur();
        $("#yt4data").val("").blur();
        $("#yt5url").val("").blur();
        $("#yt5data").val("").blur();
        dyinglight1load = null;
        localStorage.setItem("dyinglight1load", dyinglight1load);
        setTimeout(function() {
            $("#import-settings-btn").attr('class', 'btn btn-success');
            document.getElementById("import-settings").value = '{"ogarioCommands":{"comm1":"Dont W or Split too much! We dont want to get ANTI","comm2":"Split him! Stick to the Viruses!","comm3":"I am not ANTI. You can give me mass!","comm4":"I am ANTI. Do NOT give me mass!","comm5":"%currentSector%!","comm6":"Need backup at %currentSector%!","comm7":"Enemy spotted at %currentSector%!","comm8":"Tricksplit!","comm9":"[img]http://i.imgur.com/TC7VFYr.gif[/img]","comm0":"Dont Ally with them!","comm10":"They are Allies!","comm11":"Left!","comm12":"Up!","comm13":"Right!","comm14":"Bottom!"},"ogarioHotkeys":{"0":"hk-comm0","1":"hk-comm1","2":"hk-comm2","3":"hk-comm3","4":"hk-comm4","5":"hk-comm5","6":"hk-comm6","7":"hk-comm7","8":"hk-comm8","9":"hk-comm9","W":"hk-feed","E":"hk-macroFeed","SPACE":"hk-split","Q":"hk-doubleSplit","ALT+Q":"hk-popSplit","SHIFT":"hk-split16","R":"hk-pause","T":"hk-showTop5","ALT+T":"hk-showTime","U":"hk-showSplitRange","I":"hk-showSplitInd","ALT+I":"hk-showTeammatesInd","O":"hk-showOppColors","A":"hk-toggleSkins","S":"hk-showSkins","ALT+S":"hk-showStats","D":"hk-toggleCells","F":"hk-showFood","G":"hk-showGrid","ALT+G":"hk-showMiniMapGuides","H":"hk-hideChat","ALT+H":"hk-showHUD","L":"hk-copyLb","ALT+L":"hk-showLb","":"hk-privateMiniMap","Z":"hk-resetZoom","X":"hk-toggleDeath","C":"hk-clearChat","B":"hk-showBgSectors","ALT+B":"hk-hideBots","N":"hk-showNames","M":"hk-showMass","ALT+M":"hk-showMiniMap","ENTER":"hk-chatMessage","TILDE":"hk-quickResp","ALT+1":"hk-zoom1","ALT+2":"hk-zoom2","ALT+3":"hk-zoom3","ALT+4":"hk-zoom4","ALT+5":"hk-zoom5","=":"hk-switchServerMode","MOUSE WHEEL":"hk-comm10","LEFT":"hk-comm11","UP":"hk-comm12","RIGHT":"hk-comm13","DOWN":"hk-comm14","spec-messageKey":"ENTER"},"ogarioPlayerProfiles":[{"nick":"","clanTag":"","skinURL":"http://i.imgur.com/itbCL0A.jpg","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"http://i.imgur.com/zMHwfGu.png","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"http://i.imgur.com/mLZ4lDZ.jpg","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"http://i.imgur.com/ujeKpeV.png","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"http://i.imgur.com/AlX80bX.png","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"http://i.imgur.com/tyAhouV.jpg","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"","color":"#01d9cc"},{"nick":"","clanTag":"","skinURL":"","color":"#01d9cc"}],"ogarioSettings":{"quickResp":true,"autoResp":false,"autoZoom":false,"autoHideCellsInfo":false,"autoHideFood":false,"hideMyName":false,"hideMyMass":false,"hideEnemiesMass":false,"vanillaSkins":true,"customSkins":true,"myTransparentSkin":false,"myCustomColor":false,"transparentCells":false,"transparentViruses":true,"transparentSkins":false,"showGrid":true,"showBgSectors":false,"showMapBorders":true,"showMiniMap":true,"showMiniMapGrid":false,"showMiniMapGuides":true,"oneColoredTeammates":false,"rainbowFood":true,"oppColors":true,"oppRings":true,"virColors":false,"splitRange":true,"virusesRange":false,"textStroke":true,"cursorTracking":false,"teammatesInd":false,"mouseSplit":false,"mouseFeed":false,"mouseInvert":false,"disableChat":false,"hideChat":false,"showChatBox":false,"showChatImages":true,"showChatVideos":true,"showTop5":true,"showTargeting":true,"showTime":true,"normalLb":true,"centeredLb":true,"fpsAtTop":true,"showStats":true,"showStatsMass":true,"showStatsSTE":true,"showStatsN16":true,"showStatsFPS":true,"blockPopups":false,"streamMode":false,"hideSkinUrl":false,"showQuickMenu":true,"showSkinsPanel":true,"zoomSpeedValue":0.9},"ogarioThemeSettings":{"preset":"ogario-v3","darkTheme":true,"mainColor":"#01d9cc","bgColor":"#757575","gridColor":"#1c1e1f","bordersColor":"#6e0909","foodColor":"#0038ff","virusColor":"#00523e","virusStrokeColor":"#178a5a","cursorTrackingColor":"#ffffff","splitRangeColor":"#ffffff","namesFont":"roboto","namesFontFamily":"Roboto","namesFontWeight":400,"sectorsFont":"ubuntu","sectorsFontFamily":"Ubuntu","sectorsFontWeight":400,"sectorsX":5,"sectorsY":5,"nameScale":1,"massScale":3,"massScaleMargin":1.25,"foodSize":5,"bordersWidth":14,"sectorsWidth":40,"sectorsFontSize":200,"cellsAlpha":0.9,"skinsAlpha":0.7,"virusAlpha":0.6,"virusStrokeSize":14,"menuPreset":"ogario-v3","menuMainColor":"#fafafa","menuBtnTextColor":"#ffffff","menuPanelColor":"#373838","menuPanelColor2":"#4d4c4c","menuTextColor":"#ffffff","menuTextColor2":"#000000","btn1Color":"#018cf6","btn1Color2":"#151a1f","btn2Color":"#00b9e8","btn2Color2":"#0099c0","btn3Color":"#8d5fe6","btn3Color2":"#814ee3","btn4Color":"#960000","btn4Color2":"#19233b","menuBg":"https://jimboy3100.github.io/banners/grey-08.jpg","menuOpacity":0.95,"hudMainColor":"#ababab","hudColor":"rgba(189,189,189,0.4)","hudTextColor":"#210000","statsHudColor":"#202026","timeHudColor":"#0b2120","top5MassColor":"#bf00aa","lbMeColor":"#f2f0f2","lbTeammateColor":"#1f5431","hudFont":"oswald-bold","hudFontFamily":"Oswald","hudFontWeight":700,"hudScale":1,"messageColor":"rgba(0,0,0,0.4)","messageTextColor":"#ffffff","messageTimeColor":"#018cf6","messageNickColor":"#01d9cc","commandsColor":"rgba(191,0,170,0.9)","commandsTextColor":"#ffffff","commandsTimeColor":"#bf00aa","commandsNickColor":"#ffffff","chatBoxColor":"rgba(0,0,0,0.4)","chatScale":1,"miniMapSectorColor":"#ffffff","miniMapGuidesColor":"#bf00aa","miniMapNickColor":"#163ec9","miniMapNickStrokeColor":"#000000","miniMapMyCellColor":"#ffffff","miniMapMyCellStrokeColor":"#bf00aa","miniMapTeammatesColor":"#01d9cc","miniMapDeathLocationColor":"#bf00aa","miniMapFont":"ubuntu","miniMapFontFamily":"Ubuntu","miniMapFontWeight":400,"miniMapNickFont":"roboto-bold","miniMapNickFontFamily":"Roboto","miniMapNickFontWeight":700,"miniMapWidth":226,"miniMapTop":23,"miniMapSectorsOpacity":0.66,"miniMapNickSize":11,"miniMapNickStrokeSize":2,"miniMapMyCellSize":7.5,"miniMapMyCellStrokeSize":4,"miniMapTeammatesSize":5.5,"customBackground":"","customCursor":"http://cdn.ogario.ovh/static/img/cursors/cursor_14.cur"}}';
            window.history.pushState(null, null, window.location.pathname);
            $('#import-settings-btn').click();
        }, 100);
    }
}

function gotolegendml() {
    $('#legendAdImg').click();
}

function seticonfunction() {
    if (setmessagecom == "NO") {
        YessetMsgComReturn();
    }
    if (setyt == "NO") {
        YessetytReturn();
    }
	if (setscriptingcom == "NO") {
        YessetScriptingComReturn();
    }	
    if (seticon == "YES") {
        NoseticonReturn();
    } else if (seticon == "NO") {
        YesseticonReturn();
    }
}

function setmessagecomfunction() {
    if (seticon == "NO") {
        YesseticonReturn();
    }
    if (setyt == "NO") {
        YessetytReturn();
    }
	if (setscriptingcom == "NO") {
        YessetScriptingComReturn();
    }	
    if (setmessagecom == "YES") {
        NosetMsgComReturn();
    } else if (setmessagecom == "NO") {
        YessetMsgComReturn();
    }
}

function setytfunction() {
    if (setmessagecom == "NO") {
        YessetMsgComReturn();
    }
    if (seticon == "NO") {
        YesseticonReturn();
    }
	if (setscriptingcom == "NO") {
        YessetScriptingComReturn();
    }	
    if (setyt == "YES") {
        NosetytReturn();		
    } else if (setyt == "NO") {
        YessetytReturn();
    }
}
function setscriptingfunction() {
    if (seticon == "NO") {
        YesseticonReturn();
    }	
    if (setyt == "NO") {
        YessetytReturn();
    }
    if (setmessagecom == "NO") {
        YessetMsgComReturn();
    }	
    if (setscriptingcom == "YES") {
        NosetScriptingComReturn();
    } else if (setscriptingcom == "NO") {
        YessetScriptingComReturn();
    }
}

function NoseticonReturn() {
    $("#images-hud").show();
    return seticon = "NO";
}

function YesseticonReturn() {
    $("#images-hud").hide();
    return seticon = "YES";
}

function NosetMsgComReturn() {
    $("#msgcommands-hud").show();
    return setmessagecom = "NO";
}

function YessetMsgComReturn() {
    $("#msgcommands-hud").hide();
    return setmessagecom = "YES";
}

function NosetytReturn() {
    $("#yt-hud").show();
    return setyt = "NO";
}

function YessetytReturn() {
    $("#yt-hud").hide();
    return setyt = "YES";
}
function NosetScriptingComReturn() {
    $("#scripting-hud").show();
    return setscriptingcom = "NO";
}

function YessetScriptingComReturn() {
    $("#scripting-hud").hide();
    return setscriptingcom = "YES";
}


function changePicFun() {
    $("#minimapPicture").hide();
    $("#leadbPicture").hide();
    $("#teambPicture").hide();
    $("#canvasPicture").hide();
    $("#leadbtext").hide();
    $("#teambtext").hide();
    $("#imgUrl").hide();
    $("#imgHref").hide();
    $("#minbtext").hide();
    if ($("#backgroundPic").val() == 1) {
        $("#minimapPicture").show();
        $("#minbtext").show();
    }
    if ($("#backgroundPic").val() == 2) {
        $("#leadbPicture").show();
        $("#leadbtext").show();
    }
    if ($("#backgroundPic").val() == 3) {
        $("#teambPicture").show();
        $("#teambtext").show();
    }
    if ($("#backgroundPic").val() == 4) {
        $("#canvasPicture").show();
    }
    if ($("#backgroundPic").val() == 5) {
        $("#imgUrl").show();
        $("#imgHref").show();
    }
}

function changePhotoFun() {
    $("#pic1url").hide();
    $("#pic2url").hide();
    $("#pic3url").hide();
    $("#pic4url").hide();
    $("#pic5url").hide();
    $("#pic6url").hide();
    $("#yt1url").hide();
    $("#yt2url").hide();
    $("#yt3url").hide();
    $("#yt4url").hide();
    $("#yt5url").hide();
    $("#yt6url").hide();

    $("#pic1data").hide();
    $("#pic2data").hide();
    $("#pic3data").hide();
    $("#pic4data").hide();
    $("#pic5data").hide();
    $("#pic6data").hide();
    $("#yt1data").hide();
    $("#yt2data").hide();
    $("#yt3data").hide();
    $("#yt4data").hide();
    $("#yt5data").hide();
    $("#yt6data").hide();

    if ($("#changephotos").val() == 1) {
        $("#pic1url").show();
        $("#pic1data").show();
    }
    if ($("#changephotos").val() == 2) {
        $("#pic2url").show();
        $("#pic2data").show();
    }
    if ($("#changephotos").val() == 3) {
        $("#pic3url").show();
        $("#pic3data").show();
    }
    if ($("#changephotos").val() == 4) {
        $("#pic4url").show();
        $("#pic4data").show();
    }
    if ($("#changephotos").val() == 5) {
        $("#pic5url").show();
        $("#pic5data").show();
    }
    if ($("#changephotos").val() == 6) {
        $("#pic6url").show();
        $("#pic6data").show();
    }
    if ($("#changephotos").val() == 7) {
        $("#yt1url").show();
        $("#yt1data").show();
    }
    if ($("#changephotos").val() == 8) {
        $("#yt2url").show();
        $("#yt2data").show();
    }
    if ($("#changephotos").val() == 9) {
        $("#yt3url").show();
        $("#yt3data").show();
    }
    if ($("#changephotos").val() == 10) {
        $("#yt4url").show();
        $("#yt4data").show();
    }
    if ($("#changephotos").val() == 11) {
        $("#yt5url").show();
        $("#yt5data").show();
    }
    if ($("#changephotos").val() == 12) {
        $("#yt6url").show();
        $("#yt6data").show();
    }

}



function displayTimer() {
    // initilized all local variables:
    var minutes = '00',
        seconds = '00',
        time = '',
        timeNow = new Date().getTime();

    T.difference = timeNow - T.timerStarted;


    // seconds
    if (T.difference > 1000) {
        seconds = Math.floor(T.difference / 1000);
        if (seconds > 60) {
            seconds = seconds % 60;
        }
        if (seconds < 10) {
            seconds = '0' + String(seconds);
        }
    }

    // minutes
    if (T.difference > 60000) {
        minutes = Math.floor11(T.difference / 60000);
        1
        if (minutes > 60) {
            minutes = minutes % 60;
        }
        if (minutes < 10) {
            minutes = '0' + String(minutes);
        }
    }


    time += minutes + ':'
    time += seconds

    T.timerDiv.innerHTML = time;
}

function startTimer() {
    $("#playtimer").hide();
    $("#stoptimer").show();
    $("#cleartimer").show();
    // save start time
    T.timerStarted = new Date().getTime()
    console.log('T.timerStarted: ' + T.timerStarted)

    if (T.difference > 0) {
        T.timerStarted = T.timerStarted - T.difference
    }
    // update timer periodically
    T.timerInterval = setInterval(function() {
        displayTimer()
    }, 10);

}

function stopTimer() {
    $("#playtimer").show();
    $("#stoptimer").hide();
    $("#cleartimer").show();
    clearInterval(T.timerInterval); // stop updating the timer

}

function clearTimer() {
    $("#playtimer").show();
    $("#stoptimer").hide();
    $("#cleartimer").hide();
    clearInterval(T.timerInterval);
    T.timerDiv.innerHTML = "00:00";
    T.difference = 0;
}
/*
function ShowSIPurl(){
	$(".form-group.clearfix").show();$(".form-group").show();
	$("#create-party-btn-2").hide();
	setTimeout(function (){$('#quality').val()},4000);
	setTimeout(function () {
			if (realmode!=":party"){
			history.pushState(stateObj, "page 2", "?sip=" + searchSip + "&?r=" + region + "&?m=" + realmode);}
			 
}, 2500)}	
*/

function msgcommand1f() {
    commandMsg = "Hello";
    otherMsg = "";
    dosendmsgcommand();
}

function msgcommand2f() {
    commandMsg = "Team5";
    otherMsg = "";
    dosendmsgcommand();
}

function msgcommand3f() {
    commandMsg = "NamePerm";
    otherMsg = "";
    dosendmsgcommand();
}

function msgcommand4f() {
    commandMsg = "dTroll2";
    otherMsg = "";
    dosendmsgcommand();
}

function msgcommand5f() {
    commandMsg = "Youtube";
    otherMsg = "";
    dosendmsgcommand();
}

function msgcommand6f() {
    commandMsg = "HideAll";
    otherMsg = "";
    dosendmsgcommand();
}

function dosendmsgcommand() {

//    if ((MC.isInGame() && $("#clantag").val() != "") || document.getElementById("nick").value.includes("℄")) {
        if ($('#message-box').css('display') == 'none') {
            KeyEvent.simulate(13, 13);
        };
        setTimeout(function() {
            $("#message").val("Legend.Mod&?player=" + $("#nick").val() + "&?com=" + commandMsg + "&?do=" + otherMsg);
            KeyEvent.simulate(13, 13);
            if ($('#message').css('display') == 'block') {
                KeyEvent.simulate(13, 13);
            };
            if ($('#message-box').css('display') == 'block') {
                KeyEvent.simulate(13, 13);
            }
        }, 100);
 //   } else {
 //       toastr["info"](Premadeletter39);
 //   }

}
function openVanillaSkins(){		
	$("#skinButton").click(); return false;
}

function openhelper() {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "https://jimboy3100.github.io/legendhelper.js";
    $("body").append(s);
}
function opennamechars() {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "https://jimboy3100.github.io/nicks/nicknamechars.js";
    $("body").append(s);
}

function legendformIframe() {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "https://jimboy3100.github.io/legendformIframe.js";
    $("body").append(s);
}

function afterdeathtonormalmode() {
    MC.onPlayerDeath = function() {
	adres();
        setTimeout(function() {
            if (realmode == ":party") {
                $('#gamemode option[value=":party"]').prop('selected', 'selected').change();
            }
            if (realmode == ":ffa") {
                $('#gamemode option[value=":ffa"]').prop('selected', 'selected').change();
            }
            if (realmode == ":teams") {
                $('#gamemode option[value=":teams"]').prop('selected', 'selected').change();
            }
            if (realmode == ":experimental") {
                $('#gamemode option[value=":experimental"]').prop('selected', 'selected').change();
            }
        }, 100);
    }
}

function copyToClipboard(element) {
  var $temp = $("<textarea>");
  $("body").append($temp);
  var html = $(element).html();
  html = html.replace(/<br>/g, "\n"); // or \r\n
  console.log(html);
  $temp.val(html).select();
  document.execCommand("copy");
  $temp.remove();
}

function copyToClipboardAll(){
VoiceChan();	
$("#CopyTkPwLb").remove();
	if ($("#top5-pos").text()!=""){
		$("#LEGENDAds3").after('<er id="CopyTkPwLb" style="display: none;">Server: '+CopyTkPwLb2+'<br>Leaderboard: '+getLeaderboard() + '<br>Teamboard:' +$("#top5-pos").text() +'<br>My Game Name: ' +$("#nick").val() +'</er>');
	}
	else{
		$("#LEGENDAds3").after('<er id="CopyTkPwLb" style="display: none;">Server: '+CopyTkPwLb2+'<br>Leaderboard: '+getLeaderboard() + '<br>My Game Name: ' +$("#nick").val()+'</er>');
	}
copyToClipboard('er#CopyTkPwLb');
}

function rotateminimapsectors() {
    var c = document.getElementById("minimap");
    var ctx = c.getContext("2d");
    ctx.rotate(90 * Math.PI / 180);
    var a = $("#minimap").height() - $("#minimap").width();
    ctx.translate(a, -$("#minimap").height());
    //		rotateminimap=rotateminimap+1;
    //		if (rotateminimap==4){rotateminimap=0};
    //	var s = document.createElement("script");s.type = "text/javascript";s.src = "https://jimboy3100.github.io/legendrotateminimap.js";$("body").append(s);
    //		return rotateminimap;
}


function sendicon1() {
    if ($('#message-box').css('display') == 'block') {
        KeyEvent.simulate(13, 13);
    }
    KeyEvent.simulate(13, 13);
    $("#message").val("[img]" + pic1urlimg + "[/img]");
    setTimeout(function() {
        KeyEvent.simulate(13, 13);
        if ($('#message-box').css('display') == 'block') {
            KeyEvent.simulate(13, 13);
        }
    }, 50);
}

function sendicon2() {
    if ($('#message-box').css('display') == 'block') {
        KeyEvent.simulate(13, 13);
    }
    KeyEvent.simulate(13, 13);
    $("#message").val("[img]" + pic2urlimg + "[/img]");
    setTimeout(function() {
        KeyEvent.simulate(13, 13);
        if ($('#message-box').css('display') == 'block') {
            KeyEvent.simulate(13, 13);
        }
    }, 50);
}

function sendicon3() {
    if ($('#message-box').css('display') == 'block') {
        KeyEvent.simulate(13, 13);
    }
    KeyEvent.simulate(13, 13);
    $("#message").val("[img]" + pic3urlimg + "[/img]");
    setTimeout(function() {
        KeyEvent.simulate(13, 13);
        if ($('#message-box').css('display') == 'block') {
            KeyEvent.simulate(13, 13);
        }
    }, 50);
}

function sendicon4() {
    if ($('#message-box').css('display') == 'block') {
        KeyEvent.simulate(13, 13);
    }
    KeyEvent.simulate(13, 13);
    $("#message").val("[img]" + pic4urlimg + "[/img]");
    setTimeout(function() {
        KeyEvent.simulate(13, 13);
        if ($('#message-box').css('display') == 'block') {
            KeyEvent.simulate(13, 13);
        }
    }, 50);
}

function sendicon5() {
    if ($('#message-box').css('display') == 'block') {
        KeyEvent.simulate(13, 13);
    }
    KeyEvent.simulate(13, 13);
    $("#message").val("[img]" + pic5urlimg + "[/img]");
    setTimeout(function() {
        KeyEvent.simulate(13, 13);
        if ($('#message-box').css('display') == 'block') {
            KeyEvent.simulate(13, 13);
        }
    }, 50);
}

function sendicon6() {
    if ($('#message-box').css('display') == 'block') {
        KeyEvent.simulate(13, 13);
    }
    KeyEvent.simulate(13, 13);
    $("#message").val("[img]" + pic6urlimg + "[/img]");
    setTimeout(function() {
        KeyEvent.simulate(13, 13);
        if ($('#message-box').css('display') == 'block') {
            KeyEvent.simulate(13, 13);
        }
    }, 50);
}

function setpic1data() {
    localStorage.setItem("pic1dataimg", $("#pic1data").val())
    $("#sendicon1").attr("data-original-title", $("#pic1data").val());
}

function setpic2data() {
    localStorage.setItem("pic2dataimg", $("#pic2data").val())
    $("#sendicon2").attr("data-original-title", $("#pic2data").val());
}

function setpic3data() {
    localStorage.setItem("pic3dataimg", $("#pic3data").val())
    $("#sendicon3").attr("data-original-title", $("#pic3data").val());
}

function setpic4data() {
    localStorage.setItem("pic4dataimg", $("#pic4data").val())
    $("#sendicon4").attr("data-original-title", $("#pic4data").val());
}

function setpic5data() {
    localStorage.setItem("pic5dataimg", $("#pic5data").val())
    $("#sendicon5").attr("data-original-title", $("#pic5data").val());
}

function setpic6data() {
    localStorage.setItem("pic6dataimg", $("#pic6data").val())
    $("#sendicon6").attr("data-original-title", $("#pic6data").val());
}


function sendyt1() {
    if ((MC.isInGame() && $("#clantag").val() != "") || document.getElementById("nick").value.includes("℄")) {
        if ($('#message-box').css('display') == 'block') {
            KeyEvent.simulate(13, 13);
        }
        KeyEvent.simulate(13, 13);
        $("#message").val("[yt]" + yt1url + "[/yt]");
        setTimeout(function() {
            KeyEvent.simulate(13, 13);
            if ($('#message-box').css('display') == 'block') {
                KeyEvent.simulate(13, 13);
            }
        }, 50);
    } else {
        toastr["info"](Premadeletter39);
    }
}

function sendyt2() {
    if ((MC.isInGame() && $("#clantag").val() != "") || document.getElementById("nick").value.includes("℄")) {
        if ($('#message-box').css('display') == 'block') {
            KeyEvent.simulate(13, 13);
        }
        KeyEvent.simulate(13, 13);
        $("#message").val("[yt]" + yt2url + "[/yt]");
        setTimeout(function() {
            KeyEvent.simulate(13, 13);
            if ($('#message-box').css('display') == 'block') {
                KeyEvent.simulate(13, 13);
            }
        }, 50);
    } else {
        toastr["info"](Premadeletter39);
    }
}

function sendyt3() {
    if ((MC.isInGame() && $("#clantag").val() != "") || document.getElementById("nick").value.includes("℄")) {
        if ($('#message-box').css('display') == 'block') {
            KeyEvent.simulate(13, 13);
        }
        KeyEvent.simulate(13, 13);
        $("#message").val("[yt]" + yt3url + "[/yt]");
        setTimeout(function() {
            KeyEvent.simulate(13, 13);
            if ($('#message-box').css('display') == 'block') {
                KeyEvent.simulate(13, 13);
            }
        }, 50);
    } else {
        toastr["info"](Premadeletter39);
    }
}

function sendyt4() {
    if ((MC.isInGame() && $("#clantag").val() != "") || document.getElementById("nick").value.includes("℄")) {
        if ($('#message-box').css('display') == 'block') {
            KeyEvent.simulate(13, 13);
        }
        KeyEvent.simulate(13, 13);
        $("#message").val("[yt]" + yt4url + "[/yt]");
        setTimeout(function() {
            KeyEvent.simulate(13, 13);
            if ($('#message-box').css('display') == 'block') {
                KeyEvent.simulate(13, 13);
            }
        }, 50);
    } else {
        toastr["info"](Premadeletter39);
    }
}

function sendyt5() {
    if ((MC.isInGame() && $("#clantag").val() != "") || document.getElementById("nick").value.includes("℄")) {
        if ($('#message-box').css('display') == 'block') {
            KeyEvent.simulate(13, 13);
        }
        KeyEvent.simulate(13, 13);
        $("#message").val("[yt]" + yt5url + "[/yt]");
        setTimeout(function() {
            KeyEvent.simulate(13, 13);
            if ($('#message-box').css('display') == 'block') {
                KeyEvent.simulate(13, 13);
            }
        }, 50);
    } else {
        toastr["info"](Premadeletter39);
    }
}

function sendyt6() {
    if ((MC.isInGame() && $("#clantag").val() != "") || document.getElementById("nick").value.includes("℄")) {
        if ($('#message-box').css('display') == 'block') {
            KeyEvent.simulate(13, 13);
        }
        KeyEvent.simulate(13, 13);
        $("#message").val("[yt]" + yt6url + "[/yt]");
        setTimeout(function() {
            KeyEvent.simulate(13, 13);
            if ($('#message-box').css('display') == 'block') {
                KeyEvent.simulate(13, 13);
            }
        }, 50);
    } else {
        toastr["info"](Premadeletter39);
    }
}

function setyt1data() {
    localStorage.setItem("yt1dataimg", $("#yt1data").val())
    $("#sendyt1").attr("data-original-title", $("#yt1data").val());
}

function setyt2data() {
    localStorage.setItem("yt2dataimg", $("#yt2data").val())
    $("#sendyt2").attr("data-original-title", $("#yt2data").val());
}

function setyt3data() {
    localStorage.setItem("yt3dataimg", $("#yt3data").val())
    $("#sendyt3").attr("data-original-title", $("#yt3data").val());
}

function setyt4data() {
    localStorage.setItem("yt4dataimg", $("#yt4data").val())
    $("#sendyt4").attr("data-original-title", $("#yt4data").val());
}

function setyt5data() {
    localStorage.setItem("yt5dataimg", $("#yt5data").val())
    $("#sendyt5").attr("data-original-title", $("#yt5data").val());
}

function setyt6data() {
    localStorage.setItem("yt6dataimg", $("#yt6data").val())
    $("#sendyt6").attr("data-original-title", $("#yt6data").val());
}

function setyt1url() {
    yt1url = $("#yt1url").val();
    if (getParameterByName("v", yt1url) != null) {
        yt1url = getParameterByName("v", yt1url);
    }
    localStorage.setItem("yt1urlimg", yt1url);
    return yt1url;
}

function setyt2url() {
    yt2url = $("#yt2url").val();
    if (getParameterByName("v", yt2url) != null) {
        yt2url = getParameterByName("v", yt2url);
    }
    localStorage.setItem("yt2urlimg", yt2url);
    return yt2url;
}

function setyt3url() {
    yt3url = $("#yt3url").val();
    if (getParameterByName("v", yt3url) != null) {
        yt3url = getParameterByName("v", yt3url);
    }
    localStorage.setItem("yt3urlimg", yt3url);
    return yt3url;
}

function setyt4url() {
    yt4url = $("#yt4url").val();
    if (getParameterByName("v", yt4url) != null) {
        yt4url = getParameterByName("v", yt4url);
    }
    localStorage.setItem("yt4urlimg", yt4url);
    return yt4url;
}

function setyt5url() {
    yt5url = $("#yt5url").val();
    if (getParameterByName("v", yt5url) != null) {
        yt5url = getParameterByName("v", yt5url);
    }
    localStorage.setItem("yt5urlimg", yt5url);
    return yt5url;
}

function setyt6url() {
    yt6url = $("#yt6url").val();
    if (getParameterByName("v", yt6url) != null) {
        yt6url = getParameterByName("v", yt6url);
    }
    localStorage.setItem("yt6urlimg", yt6url);
    return yt6url;
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

function setTimeoutLateResponse(){
setTimeout(function() {
	$("#tcm-videoskin").hide();	
	fillminimapLegendLogo();
}, 6000);
setTimeout(function() {
	fillminimapLegendLogo();
}, 6500);
setTimeout(function() {
	fillminimapLegendLogo();
}, 7000);
setTimeout(function() {
	fillminimapLegendLogo();
}, 7500);
setTimeout(function() {
	fillminimapLegendLogo();
}, 8000);
setTimeout(function() {
	fillminimapLegendLogo();
}, 9000);
setTimeout(function() {
	fillminimapLegendLogo();
}, 10000);
setTimeout(function() {
    MC.setQuality($('#quality').val());
			//Load Private Servers
//	if($('#region>option:nth-child(1)').val()!=":PrS")	{
//	$('#region').prepend('<option value=":PrS" data-itr="PrS">Private Servers</option>');	
//	}	
}, 13000);
setTimeout(function() {
    MC.setQuality($('#quality').val());
}, 14000);
setTimeout(function() {
	fillminimapLegendLogo();
}, 11000);
setTimeout(function() {
	fillminimapLegendLogo();
}, 12000);
setTimeout(function() {
    MC.setQuality($('#quality').val());
}, 13000);
setTimeout(function() {
    MC.setQuality($('#quality').val());
}, 14000);
setTimeout(function() {
	fillminimapLegendLogo();
}, 18000);
setTimeout(function() {
	fillminimapLegendLogo();
    //if(dyinglight1load!="yes"){whenplayerdies();}
}, 22000);

setTimeout(function() {
    MC.setQuality($('#quality').val());
}, 24000);
setTimeout(function() {
    MC.setQuality($('#quality').val());
    //if(dyinglight1load!="yes"){whenplayerdies();}
}, 25000);
setTimeout(function() {
    MC.setQuality($('#quality').val());
}, 30000);
setTimeout(function() {
    MC.setQuality($('#quality').val());
}, 40000);
//setTimeout(function () {history.pushState(stateObj, "page 2", "?r=" + MC.getRegion() + "&m=" + getGameMode() + "&search=ws://" + currentIP); }, 25000);
}

function PrivateServerSenderFunction(){	
toastr["info"]("Beta Function. Please wait...").css("width", "250px");
setTimeout(function() {
    if ($('#gamemode').val() == ":PrS1") {
    console.log("Going to PRS1");
	$("#clantag").val("PRS1");
//	toastr["info"]("Beta Function. Please wait...").css("width", "250px");
	PrivateServer1();
    }
    else if ($('#gamemode').val() == ":PrS2") {
	$("#clantag").val("PRS2");
    console.log("Going to PRS2");
//	toastr["info"]("Beta Function. Please wait...").css("width", "250px");
	PrivateServer2();
    }  
    else if ($('#gamemode').val() == ":PrS3") {
    console.log("Going to PRS3");
	$("#clantag").val("PRS3");
//	toastr["info"]("Beta Function. Please wait...").css("width", "250px");
	PrivateServer3();
    }
    else if ($('#gamemode').val() == ":PrS4") {
    console.log("Going to PRS4");
	$("#clantag").val("PRS4");
//	toastr["info"]("Beta Function. Please wait...").css("width", "250px");
	PrivateServer4();
    }
    else if ($('#gamemode').val() == ":PrS5") {
    console.log("Going to PRS5");
	$("#clantag").val("PRS5");
//	toastr["info"]("Beta Function. Please wait...").css("width", "250px");
	PrivateServer5();
    }
    else if ($('#gamemode').val() == ":PrS6") {
    console.log("Going to PRS6");
	$("#clantag").val("PRS6");
//	toastr["info"]("Beta Function. Please wait...").css("width", "250px");
	PrivateServer6();
    }
    else if ($('#gamemode').val() == ":PrS7") {
    console.log("Going to PRS7");
	$("#clantag").val("PRS7");
//	toastr["info"]("Beta Function. Please wait...").css("width", "250px");
	PrivateServer7();
    }
    else if ($('#gamemode').val() == ":PrS8") {
    console.log("Going to PRS8");
	$("#clantag").val("PRS8");
//	toastr["info"]("Beta Function. Please wait...").css("width", "250px");
	PrivateServer8();
    }
    else if ($('#gamemode').val() == ":PrS9") {
    console.log("Going to PRS9");
	$("#clantag").val("PRS9");
//	toastr["info"]("Beta Function. Please wait...").css("width", "250px");
	PrivateServer9();
    }	
}, 7000);	
}
function PrivateServer1(){
window.core.disableIntegrityChecks(true);
core.connect("ws://mgar.ml:443");	
	$("#server").val("mgar.ml:443");	
//	$("#connect2").click();		
//	window.open("http://agar.io/?ip=eu.fzogar.xyz:4000","_self");
}
function PrivateServer2(){
window.core.disableIntegrityChecks(true);
core.connect("ws://mgar.ml:441");		
	$("#server").val("mgar.ml:441");
//	$("#connect2").click();	
//	window.open("http://agar.io/?ip=eu.fzogar.xyz:4001","_self");
}
function PrivateServer3(){
window.core.disableIntegrityChecks(true);
core.connect("ws://mgar.ml:444");		
	$("#server").val("mgar.ml:444");
//	$("#connect2").click();	
//	window.open("http://agar.io/?ip=eu.fzogar.xyz:5001","_self");
}
function PrivateServer4(){
window.core.disableIntegrityChecks(true);
core.connect("ws://mgar.ml:442");		
	$("#server").val("mgar.ml:442");
//	$("#connect2").click();
//	window.open("http://agar.io/?ip=66.70.189.222:4011","_self");
}
function PrivateServer5(){
window.core.disableIntegrityChecks(true);
core.connect("ws://mgar.ml:400");		
	$("#server").val("mgar.ml:400");
//	$("#connect2").click();
//	window.open("http://agar.io/?ip=66.70.189.222:4031","_self");
}
function PrivateServer6(){
window.core.disableIntegrityChecks(true);
core.connect("ws://35.231.64.21:8081");			
	$("#server").val("35.231.64.21:8081");
//	$("#connect2").click();
//	window.open("http://agar.io/?ip=145.239.81.206:4011","_self");
}
function PrivateServer7(){
window.core.disableIntegrityChecks(true);
core.connect("ws://35.231.64.21:8082");			
	$("#server").val("35.231.64.21:8082");
//	$("#connect2").click();
//	window.open("http://agar.io/?ip=145.239.82.188:4050","_self");
}
function PrivateServer8(){
window.core.disableIntegrityChecks(true);
core.connect("ws://35.231.64.21:8083");			
	$("#server").val("35.231.64.21:8083");
//	$("#connect2").click();	
//	window.open("http://agar.io/?ip=145.239.81.206:4031","_self");
}
function PrivateServer9(){
	$("#server").val("in.fzogar.xyz:443");
//	$("#connect2").click();	
//	window.open("http://agar.io/?ip=145.239.82.188:4000","_self");
}

/*
function adres() {
    var adrs = WebSocket.prototype.send;
    window.__WS_send = WebSocket.prototype.send, WebSocket.prototype.send = function(b) {
        if ($("#gamemode").val() != ":party") {
            //var texture1, texture2, texture3;
            //texture1=this.url;texture2=texture1.split(':').pop();texture2=texture2.replace("/","");texture3=texture1.split('ip-').pop();texture3=texture3.substring(0, texture3.indexOf('.'));texture3=texture3.replace(/-/g,".");texture3=texture3+":"+texture2;
            setTimeout(function() {
                $("#server").val(currentIP);
            }, 800);

            //  $('#gamemode').val(realmode);
        } else {
            setTimeout(function() {
                $("#server").val("#" + MC.getPartyToken());
            }, 2000);
        }
        try {
            adrs.apply(this, [b]), WebSocket.prototype.send = adrs
        } catch (e) {
            window.__WS_send.apply(this, [b]), WebSocket.prototype.send = window.__WS_send
        }
    }
}
*/
function adres() {
	if ($("#gamemode").val() != ":party") {
		setTimeout(function(){		
			currentIP = "live-arena-"+$("#server-token").val()+".agar.io";
			$("#server").val(currentIP);
//	            var c = /((?:[0-9]{1,3}(?:\.|\-)){1,3}[0-9]{1,3})(?:.*?)?(\:[0-9]{1,5})/,
//            d = c.exec($("#server-ws").val());
//			$("#server").val(d[1].replace(/-/g, '.') + d[2]);
//			currentIP=d[1].replace(/-/g, '.') + d[2];
			setTimeout(function() {
				 
			    realmode = getGameMode();
                if (searchSip == null && privateSrv==null) {
                    if (realmode != ":party") {
                        history.pushState(stateObj, "page 2", "?sip=" + currentIP + "&?r=" + MC.getRegion() + "&?m=" + realmode);
                    }
                    else if (realmode == ":party") {
                        window.history.pushState(null, null, window.location.pathname);
                        history.pushState(stateObj, "page 2", "#" + MC.getPartyToken());
                    }
				}
				else if (privateSrv!=null) {				
//                history.pushState(stateObj, "page 2", "?ip=" + privateSrv + "&?SERVER=PRIVATE");
				
			}	                
			
				
			}, 1000);
			}, 800);
	}
	else {
            setTimeout(function() {
				 MC.setQuality($('#quality').val());
                $("#server").val("#" + MC.getPartyToken());
            }, 2000);
        }
		setTimeout(function(){MC.setQuality($('#quality').val());}, 3000);
		setTimeout(function(){MC.setQuality($('#quality').val());}, 4000);
		setTimeout(function(){MC.setQuality($('#quality').val());}, 5000);
		setTimeout(function(){MC.setQuality($('#quality').val());}, 6000);
		setTimeout(function(){MC.setQuality($('#quality').val());}, 7000);
		setTimeout(function(){MC.setQuality($('#quality').val());}, 8000);
		setTimeout(function(){MC.setQuality($('#quality').val());}, 11000);
}		

        function VoiceChan() {
            if (searchSip == null) {
                if (ogario.gameMode == ":party") {
 //                   semiurl2 = MC.getPartyToken() + $("#clantag").val() + "?name=" + $("#nick").val() + "&?ip=" + MC.getPartyToken();
                } else {
                    var currentIP2 = currentIP.replace(".", "");
                    currentIP2 = currentIP2.replace(".", "");
                    currentIP2 = currentIP2.replace(".", "");
                    currentIP2 = currentIP2.replace(":", "");
//                    semiurl2 = currentIP2 + $("#clantag").val() + "?name=" + $("#nick").val() + "&?ip=" + currentIP;
                }
            } else if (searchSip != null) {
                var currentIP2 = searchSip.replace(".", "");
                currentIP2 = currentIP2.replace(".", "");
                currentIP2 = currentIP2.replace(".", "");
                currentIP2 = currentIP2.replace(":", "");
//                semiurl2 = currentIP2 + $("#clantag").val() + "?name=" + $("#nick").val() + "&?ip=" + searchSip;
            }

            url2 = "https://talky.io/" + semiurl2;
			url2 = url2.toLowerCase();
			return url2;
        }
		
function joinpartyfromconnect() {
    MC.joinParty($("#server").val());
	$("#server-token").val($("#server").val().replace("#", ""));	
//    $("#cur-tk-hud").text("Party Token: " + $("#server").val()).attr("style", "opacity: 0;");;
}

function openbleedmod() {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "https://jimboy3100.github.io/BleedingMod.js";
    $("body").append(s);
}

function openrotatingmod() {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "https://jimboy3100.github.io/rotating500images.js";
    $("body").append(s);
}

function languagemodfun(){
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
        $('#legendlanguages').val("7");
        var s1 = document.createElement("script");
        s1.type = "text/javascript";
        s1.src = "https://jimboy3100.github.io/LanguagePackHandler.js";
        $("body").append(s1);
    }, 4000);
}
if (languagemod == 8) {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "https://jimboy3100.github.io/LanguagePackRussian.js";
    $("body").append(s);
    setTimeout(function() {
        $('#legendlanguages').val("8");
        var s1 = document.createElement("script");
        s1.type = "text/javascript";
        s1.src = "https://jimboy3100.github.io/LanguagePackHandler.js";
        $("body").append(s1);
    }, 4000);
}
if (languagemod == 9) {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "https://jimboy3100.github.io/LanguagePackGerman.js";
    $("body").append(s);
    setTimeout(function() {
        $('#legendlanguages').val("9");
        var s1 = document.createElement("script");
        s1.type = "text/javascript";
        s1.src = "https://jimboy3100.github.io/LanguagePackHandler.js";
        $("body").append(s1);
    }, 4000);
}
}
function changeModLanguage() {
    if ($("#legendlanguages").val() == 1) {
        localStorage.setItem("languagemod", 1);
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.src = "https://jimboy3100.github.io/LanguagePackEnglish.js";
        $("body").append(s);
        setTimeout(function() {
            var s1 = document.createElement("script");
            s1.type = "text/javascript";
            s1.src = "https://jimboy3100.github.io/LanguagePackHandler.js";
            $("body").append(s1);

        }, 800);
    }
    if ($("#legendlanguages").val() == 2) {
        localStorage.setItem("languagemod", 2);
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.src = "https://jimboy3100.github.io/LanguagePackGreek.js";
        $("body").append(s);
        setTimeout(function() {
            var s1 = document.createElement("script");
            s1.type = "text/javascript";
            s1.src = "https://jimboy3100.github.io/LanguagePackHandler.js";
            $("body").append(s1);

        }, 800);
    }
    if ($("#legendlanguages").val() == 3) {
        localStorage.setItem("languagemod", 3);
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.src = "https://jimboy3100.github.io/LanguagePackSpanish.js";
        $("body").append(s);
        setTimeout(function() {
            var s1 = document.createElement("script");
            s1.type = "text/javascript";
            s1.src = "https://jimboy3100.github.io/LanguagePackHandler.js";
            $("body").append(s1);

        }, 800);
    }
    if ($("#legendlanguages").val() == 4) {
        localStorage.setItem("languagemod", 4);
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.src = "https://jimboy3100.github.io/LanguagePackBulgarian.js";
        $("body").append(s);
        setTimeout(function() {
            var s1 = document.createElement("script");
            s1.type = "text/javascript";
            s1.src = "https://jimboy3100.github.io/LanguagePackHandler.js";
            $("body").append(s1);

        }, 800);
    }
    if ($("#legendlanguages").val() == 5) {
        localStorage.setItem("languagemod", 5);
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.src = "https://jimboy3100.github.io/LanguagePackFrench.js";
        $("body").append(s);
        setTimeout(function() {
            var s1 = document.createElement("script");
            s1.type = "text/javascript";
            s1.src = "https://jimboy3100.github.io/LanguagePackHandler.js";
            $("body").append(s1);

        }, 800);
    }
    if ($("#legendlanguages").val() == 6) {
        localStorage.setItem("languagemod", 6);
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.src = "https://jimboy3100.github.io/LanguagePackArabic.js";
        $("body").append(s);
        setTimeout(function() {
            var s1 = document.createElement("script");
            s1.type = "text/javascript";
            s1.src = "https://jimboy3100.github.io/LanguagePackHandler.js";
            $("body").append(s1);

        }, 800);
    }
    if ($("#legendlanguages").val() == 7) {
        localStorage.setItem("languagemod", 7);
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.src = "https://jimboy3100.github.io/LanguagePackTraditionalChinese.js";
        $("body").append(s);
        setTimeout(function() {
            var s1 = document.createElement("script");
            s1.type = "text/javascript";
            s1.src = "https://jimboy3100.github.io/LanguagePackHandler.js";
            $("body").append(s1);

        }, 800);
    }	
    if ($("#legendlanguages").val() == 8) {
        localStorage.setItem("languagemod", 8);
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.src = "https://jimboy3100.github.io/LanguagePackRussian.js";
        $("body").append(s);
        setTimeout(function() {
            var s1 = document.createElement("script");
            s1.type = "text/javascript";
            s1.src = "https://jimboy3100.github.io/LanguagePackHandler.js";
            $("body").append(s1);

        }, 800);
    }	
    if ($("#legendlanguages").val() == 9) {
        localStorage.setItem("languagemod", 9);
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.src = "https://jimboy3100.github.io/LanguagePackGerman.js";
        $("body").append(s);
        setTimeout(function() {
            var s1 = document.createElement("script");
            s1.type = "text/javascript";
            s1.src = "https://jimboy3100.github.io/LanguagePackHandler.js";
            $("body").append(s1);

        }, 800);
    }		
}

function opendyinglight() {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "https://jimboy3100.github.io/dyinglight.js";
    $("body").append(s);
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
			toastr["error"]('<b>[SERVER]:</b> ' + Premadeletter88 + ', <br>' + Premadeletter118 + ': <a target="_blank" href="https://jimboy3100.github.io/legendmod.user.js"><font color="yellow"><b><u>www.legendmod.ml</u></b></font></a><br>' + Premadeletter89).css("width", "300px");
				setTimeout(function() {
					document.documentElement.innerHTML = "";
					}, 21000);
				}
   }, 13000);
}
	

//1. Animated Skins
function animatedskins(){
(function agarXTRA(w) {
   if ( typeof w.core != 'undefined' && typeof w.core.registerSkin === 'function' && document.getElementById('gamemode') ) {
      var tcm = {
         l: {
            skins:      {
               'bomb': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'bomb',
                  color:     '000000',
                  frames:    [
                     {id: 'lwneHCo', delay: '0.14'},
                     {id: 'JcOZgwb', delay: '0.14'},
                     {id: 'uwfoN9c', delay: '0.14'},
                     {id: 'IqRkRVc', delay: '0.14'},
                     {id: 'bObBbnl', delay: '0.14'},
                     {id: 'Wj1RsWf', delay: '0.14'},
                     {id: 'gjLfMcx', delay: '0.14'},
                     {id: 'I7DMQeY', delay: '0.14'},
                     {id: 'oGr1KKG', delay: '0.14'},
                     {id: 'twzFS5g', delay: '0.14'},
                     {id: 'T6er9yw', delay: '1'}
                  ]
               },
               'eye': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'eye',
                  color:     '838383',
                  frames:    [
                     {id: 'WBptNfR', delay: '1'},
                     {id: 'Ll7Y3Ek', delay: '0.15'},
                     {id: 'OIXeTfo', delay: '0.15'},
                     {id: 'htdrJ70', delay: '0.15'},
                     {id: 'FL7zYNe', delay: '0.15'},
                     {id: 'Wn1xhE8', delay: '0.15'},
                     {id: 'Pc7s79W', delay: '0.15'},
                     {id: 'sDJCsKD', delay: '0.15'}
                  ]
               },
               'blackhole': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'blackhole',
                  color:     '000000',
                  frames:    [
                     {id: 'gNeYD4y', delay: '0.12'},
                     {id: 'RWhq2m6', delay: '0.12'},
                     {id: 'Gzeutvv', delay: '0.12'},
                     {id: 'ZM5d6S7', delay: '0.12'},
                     {id: 'iP1LjJq', delay: '0.12'},
                     {id: '62GWoaP', delay: '0.12'},
                     {id: '71GSwyR', delay: '0.12'},
                     {id: 'w5b0kBu', delay: '0.12'}
                  ]
               },
               'shark': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'shark',
                  color:     '002C6C',
                  frames:    [
                     {id: 'WOnTrZc', delay: '0.15'},
                     {id: '7nVbAjo', delay: '0.15'},
                     {id: 'lhY26fT', delay: '0.15'},
                     {id: 'cVp2rVv', delay: '0.15'},
                     {id: 'lhY26fT', delay: '0.15'},
                     {id: '7nVbAjo', delay: '0.15'}
                  ]
               },
               'goldfish': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'goldfish',
                  color:     '002C6C',
                  frames:    [
                     {id: 'KgqoD2X', delay: '0.125'},
                     {id: 'Xz9rzlp', delay: '0.125'},
                     {id: 'zOb2Oqa', delay: '0.125'},
                     {id: '5i15TVe', delay: '0.125'},
                     {id: 'G3evzNO', delay: '0.125'},
                     {id: 'Bqhqqib', delay: '0.125'},
                     {id: 'i78XDTj', delay: '0.125'}
                  ]
               },
               'monster': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'monster',
                  color:     '7c0001',
                  frames:    [
                     {id: 't9Hjp1l', delay: '2'},
                     {id: 'LR7dsAT', delay: '0.12'},
                     {id: 'J8g1Kxh', delay: '0.12'},
                     {id: 'liKY8Ja', delay: '0.12'},
                     {id: 'KNR6AE6', delay: '0.12'},
                     {id: 'VOJGLCH', delay: '0.12'},
                     {id: 'KNR6AE6', delay: '0.12'},
                     {id: 'liKY8Ja', delay: '0.12'},
                     {id: 'J8g1Kxh', delay: '0.12'},
                     {id: 'LR7dsAT', delay: '0.12'}
                  ]
               },
               'crocodile': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'crocodile',
                  color:     '004F0F',
                  frames:    [
                     {id: 'Aa4bqa1', delay: '1'},
                     {id: 'nmaz62r', delay: '0.1'},
                     {id: 'RxBfX11', delay: '0.1'},
                     {id: 'KPKVF6u', delay: '0.1'},
                     {id: 'O4VjIno', delay: '0.1'},
                     {id: 'iYykA1K', delay: '0.1'},
                     {id: 'O4VjIno', delay: '0.1'},
                     {id: 'KPKVF6u', delay: '0.1'},
                     {id: 'RxBfX11', delay: '0.1'},
                     {id: 'nmaz62r', delay: '0.1'}
                  ]
               },
               'bowling': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'bowling',
                  color:     '000000',
                  frames:    [
                     {id: '1D8FYOu', delay: '0.12'},
                     {id: 'ctMzkSb', delay: '0.12'},
                     {id: 'uo8KqtT', delay: '0.12'},
                     {id: 'lAxKG9C', delay: '0.12'},
                     {id: 'bizPEiq', delay: '0.12'},
                     {id: 'UzNGxgk', delay: '0.12'},
                     {id: 'NJHBqXt', delay: '0.12'},
                     {id: 'aC8vvpe', delay: '0.12'}
                  ]
               },
               'mouse': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'mouse',
                  color:     '654217',
                  frames:    [
                     {id: 'IkAzcau', delay: '2'},
                     {id: 'ylmgRh2', delay: '0.1'},
                     {id: '0FgdFdL', delay: '0.1'},
                     {id: 'HccU8TO', delay: '0.1'},
                     {id: '0FgdFdL', delay: '0.1'},
                     {id: 'ylmgRh2', delay: '0.1'}
                  ]
               },
               'heart': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'heart',
                  color:     'AC0875',
                  frames:    [
                     {id: '2w48B0M', delay: '1'},
                     {id: 'cM2hLSt', delay: '0.12'},
                     {id: '0pfV9lu', delay: '0.12'},
                     {id: 'KxbFznI', delay: '0.12'},
                     {id: 'FhptVrD', delay: '0.12'},
                     {id: '9lJDoCK', delay: '0.12'},
                     {id: 'FhptVrD', delay: '0.12'},
                     {id: 'KxbFznI', delay: '0.12'},
                     {id: '0pfV9lu', delay: '0.12'},
                     {id: 'cM2hLSt', delay: '0.12'}
                  ]
               },
               'nuclear': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'nuclear',
                  color:     '654217',
                  frames:    [
                     {id: 'eDof29h', delay: '1.5'},
                     {id: 'zqqaUbO', delay: '1.5'}
                  ]
               },
               't-rex': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        't_rex',
                  color:     '7c0001',
                  frames:    [
                     {id: 'jeyvjUh', delay: '2'},
                     {id: 'eM38lQG', delay: '0.12'},
                     {id: 'jn7xfpf', delay: '0.12'},
                     {id: 'eM38lQG', delay: '0.12'}
                  ]
               },
               'zombie': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'zombie',
                  color:     '004F0F',
                  frames:    [
                     {id: 'uVqUXBN', delay: '3'},
                     {id: 'QclZjeR', delay: '0.1'},
                     {id: 'iXdYrD8', delay: '0.1'},
                     {id: 'vF0ZIcs', delay: '0.1'},
                     {id: 'iXdYrD8', delay: '0.1'},
                     {id: 'QclZjeR', delay: '0.1'}
                  ]
               },
               'lizard': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'lizard',
                  color:     'AC0875',
                  frames:    [
                     {id: 'ESMxT94', delay: '0.5'},
                     {id: 'cU5UMlY', delay: '0.1'},
                     {id: 'awtHLkg', delay: '0.1'},
                     {id: '9rdGdkz', delay: '0.1'}
                  ]
               },
               'raptor': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'raptor',
                  color:     '004F0F',
                  frames:    [
                     {id: 'dZbuOvZ', delay: '2'},
                     {id: 'HbK7yXt', delay: '0.1'},
                     {id: 'kRDldQ2', delay: '0.1'},
                     {id: 'wFPrb4A', delay: '0.1'},
                     {id: 'kRDldQ2', delay: '0.1'},
                     {id: 'HbK7yXt', delay: '0.1'}
                  ]
               },
               'seal': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'seal',
                  color:     '004F0F',
                  frames:    [
                     {id: 'y6O9oq6', delay: '2'},
                     {id: 'HgqK6mA', delay: '0.1'},
                     {id: 'Etk3dGT', delay: '0.1'},
                     {id: '2s2EykQ', delay: '0.1'},
                     {id: 'xs9PUYG', delay: '0.1'},
                     {id: 'j32x0NT', delay: '0.1'},
                     {id: 'xs9PUYG', delay: '0.1'},
                     {id: '2s2EykQ', delay: '0.1'},
                     {id: 'Etk3dGT', delay: '0.1'},
                     {id: 'HgqK6mA', delay: '0.1'}
                  ]
               },
               'pizza': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'pizza',
                  color:     '7c0001',
                  frames:    [
                     {id: 'SmfgnOa', delay: '2'},
                     {id: 'BD8B6wo', delay: '0.15'},
                     {id: 'Nv23NK1', delay: '0.15'},
                     {id: '2e1eNwR', delay: '0.15'},
                     {id: 'sKtjEXM', delay: '0.15'},
                     {id: 'UBEMJZs', delay: '0.15'},
                     {id: 'DLk0Xr7', delay: '0.15'},
                     {id: '7areUV1', delay: '0.15'},
                     {id: 'DLk0Xr7', delay: '0.15'},
                     {id: 'UBEMJZs', delay: '0.15'},
                     {id: 'sKtjEXM', delay: '0.15'},
                     {id: '2e1eNwR', delay: '0.15'},
                     {id: 'Nv23NK1', delay: '0.15'},
                     {id: 'BD8B6wo', delay: '0.15'}
                  ]
               },
               'brofist': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'brofist',
                  color:     '7c0001',
                  frames:    [
                     {id: 'ShcWYvU', delay: '0.1'},
                     {id: 'sTfxqoG', delay: '0.1'},
                     {id: '8vEo8Bu', delay: '0.1'},
                     {id: 'oZRIIqE', delay: '0.1'},
                     {id: 'AxqYXKo', delay: '0.1'},
                     {id: '7z65jUI', delay: '3'}
                  ]
               },
               'crazy': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'crazy',
                  color:     '7c0001',
                  frames:    [
                     {id: '6oMDz9m', delay: '0.1'},
                     {id: 'Z3DQpP4', delay: '0.1'},
                     {id: 'WPEnnWK', delay: '0.1'},
                     {id: 'gml6ud3', delay: '0.1'},
                     {id: '6hTV8AA', delay: '0.1'},
                     {id: 'IYcDRNc', delay: '0.1'},
                     {id: 'zYpx35t', delay: '3'},
                     {id: 'IYcDRNc', delay: '0.1'},
                     {id: '6hTV8AA', delay: '0.1'},
                     {id: 'gml6ud3', delay: '0.1'},
                     {id: 'WPEnnWK', delay: '0.1'},
                     {id: 'Z3DQpP4', delay: '0.1'}
                  ]
               },
               'baseball': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'baseball',
                  color:     '838383',
                  frames:    [
                     {id: 'TlffigR', delay: '0.09'},
                     {id: '5dxGVTq', delay: '0.09'}
                  ]
               },
               'cloud': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'cloud',
                  color:     '838383',
                  frames:    [
                     {id: 'rqYIfAQ', delay: '0.08'},
                     {id: 'haaANq1', delay: '0.08'},
                     {id: '5wcw4R3', delay: '0.08'},
                     {id: 'iCLv7Bb', delay: '0.08'},
                     {id: 'PSBWj5q', delay: '0.08'},
                     {id: 'Lcrh5Uj', delay: '0.08'},
                     {id: 'mWjua9q', delay: '0.08'},
                     {id: 'AD1dk6l', delay: '0.08'},
                     {id: 'fr9BnOD', delay: '2'}
                  ]
               },
               'snowman': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'snowman',
                  color:     '002C6C',
                  frames:    [
                     {id: 'fyIBJJo', delay: '0.08'},
                     {id: 'kQJz6SF', delay: '0.08'},
                     {id: 'iegAX3K', delay: '0.08'},
                     {id: 'lngWxxk', delay: '0.08'},
                     {id: 'GxhTGji', delay: '0.08'},
                     {id: 'lngWxxk', delay: '0.08'},
                     {id: 'iegAX3K', delay: '0.08'},
                     {id: 'kQJz6SF', delay: '0.08'}
                  ]
               },
               'bug': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'bug',
                  color:     '7c0001',
                  frames:    [
                     {id: 'uxKmViA', delay: '2'},
                     {id: 'n1ncMvV', delay: '0.08'},
                     {id: '0mDiZyL', delay: '0.08'},
                     {id: 'ADKOOAB', delay: '0.08'},
                     {id: '72Z5GjJ', delay: '0.08'},
                     {id: 'ADKOOAB', delay: '0.08'},
                     {id: '0mDiZyL', delay: '0.08'},
                     {id: 'n1ncMvV', delay: '0.08'}
                  ]
               },
               'mushroom': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'mushroom',
                  color:     '004F0F',
                  frames:    [
                     {id: '92FrA5N', delay: '0.1'},
                     {id: 'vbebU1q', delay: '0.1'},
                     {id: 'SrwCeQF', delay: '0.1'},
                     {id: 'jJAoWma', delay: '0.1'},
                     {id: 'gzkpCLW', delay: '0.1'}
                  ]
               },
               'ghost': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'ghost',
                  color:     '4E114E',
                  frames:    [
                     {id: 'kpT3MiF', delay: '0.08'},
                     {id: 'JiASOag', delay: '0.08'},
                     {id: 'IPrwKvq', delay: '0.08'},
                     {id: 'PHGZ1sP', delay: '0.08'},
                     {id: 'DbGkrD9', delay: '0.08'},
                     {id: 'PHGZ1sP', delay: '0.08'},
                     {id: 'IPrwKvq', delay: '0.08'},
                     {id: 'JiASOag', delay: '0.08'}
                  ]
               },
               'lol': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'birthday_lol',
                  color:     'cd5d22',
                  frames:    [
                     {id: 'SJlS8Rg', delay: '0.08'},
                     {id: 'AiICKZb', delay: '0.08'},
                     {id: '1iVfy8b', delay: '0.08'},
                     {id: 'hwPSr3s', delay: '0.08'},
                     {id: 'wpJophT', delay: '0.08'},
                     {id: 'W9oLhpz', delay: '0.08'},
                     {id: 'DexE8Kb', delay: '0.08'},
                     {id: '7ybaqXq', delay: '0.08'}
                  ]
               },
               'troll': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'birthday_troll',
                  color:     '7a0c0f',
                  frames:    [
                     {id: 'KxcI3j7', delay: '4'},
                     {id: 'aE1etcH', delay: '0.1'},
                     {id: 'ZA1rlQ0', delay: '0.1'},
                     {id: '8NUCHKe', delay: '0.1'},
                     {id: 'ZbeXIpc', delay: '0.1'},
                     {id: 'iQWIiAu', delay: '0.1'},
                     {id: 'ZbeXIpc', delay: '0.1'},
                     {id: '8NUCHKe', delay: '0.1'},
                     {id: 'ZA1rlQ0', delay: '0.1'},
                     {id: 'aE1etcH', delay: '0.1'}
                  ]
               },
               'starfish': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'starfish',
                  color:     'cf9b24',
                  frames:    [
                     {id: 'MGSsF4o', delay: '0.12'},
                     {id: 'gzt9cfR', delay: '0.12'},
                     {id: 'let5iCn', delay: '0.12'},
                     {id: 'jy0O4el', delay: '0.12'},
                     {id: 'ujIoMJj', delay: '0.12'},
                     {id: 'cjiaScB', delay: '0.12'},
                     {id: 'QLoOcDQ', delay: '0.12'},
                     {id: 'natZ9ad', delay: '0.12'}
                  ]
               },
               'mighty': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'mighty',
                  color:     '095090',
                  frames:    [
                     {id: 'V5md28Q', delay: '0.08'},
                     {id: 'bCh5H2P', delay: '0.08'},
                     {id: 'B5EQdTb', delay: '0.08'},
                     {id: 'svrkPNc', delay: '0.08'},
                     {id: 'BtCgDPE', delay: '0.08'},
                     {id: '1xE6pAf', delay: '0.08'},
                     {id: 'BtCgDPE', delay: '0.08'},
                     {id: 'svrkPNc', delay: '0.08'},
                     {id: 'B5EQdTb', delay: '0.08'},
                     {id: 'bCh5H2P', delay: '0.08'}
                  ]
               },
               'bread': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'bread',
                  color:     '593b3c',
                  frames:    [
                     {id: 'u49qoXZ', delay: '0.08'},
                     {id: 'mcRd3ld', delay: '0.08'},
                     {id: 'Pxovhai', delay: '0.08'},
                     {id: 'gHLB9y4', delay: '0.08'},
                     {id: '3Sepdpp', delay: '0.08'},
                     {id: 'zjgxKHM', delay: '0.08'},
                     {id: 'n6rglZu', delay: '0.08'},
                     {id: 'DLqYwpu', delay: '0.08'},
                     {id: 'nAqaRja', delay: '0.08'},
                     {id: 'DLqYwpu', delay: '0.08'},
                     {id: 'n6rglZu', delay: '0.08'},
                     {id: 'zjgxKHM', delay: '0.08'},
                     {id: '3Sepdpp', delay: '0.08'},
                     {id: 'gHLB9y4', delay: '0.08'},
                     {id: 'Pxovhai', delay: '0.08'},
                     {id: 'mcRd3ld', delay: '0.08'}
                  ]
               },
               'cia 2': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'birthday_cia',
                  color:     '3a185c',
                  frames:    [
                     {id: 'x7pNXov', delay: '0.12'},
                     {id: 'O2cAr4y', delay: '0.12'}
                  ]
               },
               'cactus': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'cactus',
                  color:     'a20947',
                  frames:    [
                     {id: 'GPI5CyD', delay: '0.08'},
                     {id: 'WTv6YOT', delay: '0.08'},
                     {id: 'Eiuz71P', delay: '0.08'},
                     {id: 'QPN1cYs', delay: '0.08'},
                     {id: 'Eiuz71P', delay: '0.08'},
                     {id: 'WTv6YOT', delay: '0.08'}
                  ]
               },
               'tennis': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'tennist',
                  color:     'cb1778',
                  frames:    [
                     {id: 'juVHtpb', delay: '0.12'},
                     {id: 'vrxQoUF', delay: '0.12'},
                     {id: 'azYvvQm', delay: '0.12'},
                     {id: 'vrxQoUF', delay: '0.12'}
                  ]
               },
               'duck target': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'duck_target',
                  color:     '000000',
                  frames:    [
                     {id: '6gfYVC7', delay: '0.1'},
                     {id: 'lFP4blK', delay: '0.1'},
                     {id: 'LZhQQkH', delay: '0.1'},
                     {id: '1JnabLw', delay: '0.1'},
                     {id: '5fLXTUd', delay: '0.1'},
                     {id: '1JnabLw', delay: '0.1'},
                     {id: 'LZhQQkH', delay: '0.1'},
                     {id: 'lFP4blK', delay: '0.1'}
                  ]
               },
               'wicked cat': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'wicked_cat',
                  color:     '420000',
                  frames:    [
                     {id: 'QGFmJTG', delay: '3'},
                     {id: 'tU1RYvT', delay: '0.1'},
                     {id: '9Ol2gEw', delay: '0.1'},
                     {id: 'KQGngCg', delay: '1'},
                     {id: '9Ol2gEw', delay: '0.1'},
                     {id: 'tU1RYvT', delay: '0.1'}
                  ]
               },
               'reindeer': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'reindeer',
                  color:     '1a4534',
                  frames:    [
                     {id: 'GmH7K9m', delay: '0.08'},
                     {id: 'LRpx88I', delay: '0.08'},
                     {id: 'ZZXg3kj', delay: '0.08'},
                     {id: '9klVKAq', delay: '0.08'},
                     {id: 'CBb1Qpg', delay: '0.08'},
                     {id: 'YL6sv38', delay: '0.08'},
                     {id: 'DUp7Ph2', delay: '0.08'},
                     {id: 'YL6sv38', delay: '0.08'},
                     {id: 'CBb1Qpg', delay: '0.08'},
                     {id: '9klVKAq', delay: '0.08'},
                     {id: 'ZZXg3kj', delay: '0.08'},
                     {id: 'LRpx88I', delay: '0.08'}
                  ]
               },
               'charmander': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'charmander',
                  color:     'd26900',
                  frames:    [
                     {id: '1z01PqG', delay: '4'},
                     {id: '36yUxT1', delay: '0.1'},
                     {id: 'f8YUHIM', delay: '0.1'},
                     {id: 'ULtQFXw', delay: '0.1'},
                     {id: 'CLnrlQD', delay: '0.1'},
                     {id: 'YZZfnvR', delay: '0.1'},
                     {id: 'CLnrlQD', delay: '0.1'},
                     {id: 'ULtQFXw', delay: '0.1'},
                     {id: 'f8YUHIM', delay: '0.1'},
                     {id: '36yUxT1', delay: '0.1'}
                  ]
               },
               'bulbasaur': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'bulbasaur',
                  color:     '37973c',
                  frames:    [
                     {id: 'A3TMFs5', delay: '4'},
                     {id: 'agRaNfC', delay: '0.1'},
                     {id: 'co5VkgO', delay: '0.1'},
                     {id: 'PiOFxRV', delay: '0.1'},
                     {id: 'xGmgf1p', delay: '0.1'},
                     {id: 'qjS12LB', delay: '0.1'},
                     {id: 'xGmgf1p', delay: '0.1'},
                     {id: 'PiOFxRV', delay: '0.1'},
                     {id: 'co5VkgO', delay: '0.1'},
                     {id: 'agRaNfC', delay: '0.1'}
                  ]
               },
               'squirtle': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'squirtle',
                  color:     '438be8',
                  frames:    [
                     {id: 'ntVuoKU', delay: '0.1'},
                     {id: 'bfgrQtI', delay: '0.1'},
                     {id: 'gGFq1VU', delay: '0.1'},
                     {id: '8BSCCvP', delay: '0.1'},
                     {id: '04TFtfI', delay: '0.1'},
                     {id: 'swbm5bR', delay: '0.1'},
                     {id: '04TFtfI', delay: '0.1'},
                     {id: '8BSCCvP', delay: '0.1'},
                     {id: 'gGFq1VU', delay: '0.1'},
                     {id: 'bfgrQtI', delay: '0.1'}
                  ]
               },
               'jumbo': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'jumbo_yt',
                  color:     '00560f',
                  frames:    [
                     {id: 'mlgXaGZ', delay: '0.09'},
                     {id: 'WC1eIre', delay: '0.09'},
                     {id: 'byJnguv', delay: '0.09'},
                     {id: 'EHYn8GJ', delay: '0.09'},
                     {id: 'rW33rqf', delay: '0.09'},
                     {id: 'FbijFRY', delay: '0.09'}
                  ]
               },
               'tyt': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'tyt_yt',
                  color:     '000000',
                  frames:    [
                     {id: 'rUbIMQY', delay: '0.09'},
                     {id: 'ODW4Omn', delay: '0.09'},
                     {id: 'EtFMPm8', delay: '0.09'},
                     {id: 'IKcPprq', delay: '0.09'},
                     {id: 'Xjs9LX2', delay: '0.09'},
                     {id: 'pmfcfuz', delay: '0.09'},
                     {id: 'nXdt3ce', delay: '0.09'},
                     {id: 'd6VzSKD', delay: '0.09'},
                     {id: 'yobj44p', delay: '0.09'},
                     {id: 'BF2p3tm', delay: '0.09'},
                     {id: 'v5aHQzC', delay: '0.09'},
                     {id: 'K61nFgp', delay: '0.09'},
                     {id: 'jhMkOkA', delay: '0.09'},
                     {id: 'ebRUvat', delay: '0.09'},
                     {id: 'bWezvmS', delay: '0.09'},
                     {id: 'XYqrXYY', delay: '0.09'}
                  ]
               },
               'hero': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'hero_yt',
                  color:     '000000',
                  frames:    [
                     {id: 'x0NKSI4', delay: '0.08'},
                     {id: 'OBRZfoQ', delay: '0.08'},
                     {id: 'mFBvHSN', delay: '0.08'},
                     {id: 'A4JskwY', delay: '0.08'},
                     {id: 'FNCLnk5', delay: '0.08'},
                     {id: 'W9QHmJU', delay: '0.08'},
                     {id: 'psnaqN4', delay: '0.08'},
                     {id: 'Yz9XVXN', delay: '0.08'},
                     {id: 'Thu6tTT', delay: '0.08'},
                     {id: 'K0yv7TU', delay: '0.08'},
                     {id: 'ineJWic', delay: '0.08'},
                     {id: 'q8emY2S', delay: '0.08'},
                     {id: 'P5Vq8tU', delay: '0.08'}
                  ]
               },
               'tigar': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'tigar_yt',
                  color:     'e67414',
                  frames:    [
                     {id: 'GCOReOG', delay: '2'},
                     {id: 'dhoZlbU', delay: '0.08'},
                     {id: 'ImMf8to', delay: '0.08'},
                     {id: 'vjVwwl0', delay: '0.08'},
                     {id: 'JIwHHfL', delay: '0.08'},
                     {id: 'HyGPKp6', delay: '0.08'},
                     {id: 'vMyMaiK', delay: '0.08'},
                     {id: 'r3awDWP', delay: '0.08'},
                     {id: 'ibW0OQu', delay: '0.08'},
                     {id: '61cj4ur', delay: '0.08'}
                  ]
               },
               'mau': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'mau_yt',
                  color:     '49bef3',
                  frames:    [
                     {id: 'dKay0Ky', delay: '3'},
                     {id: 'RcPm75A', delay: '0.08'},
                     {id: '68Y0H7A', delay: '0.08'},
                     {id: 'xuoVdBS', delay: '0.08'},
                     {id: 'rI9wFYS', delay: '0.08'},
                     {id: 'B8gsy1j', delay: '0.08'},
                     {id: '4ZBOW12', delay: '0.08'},
                     {id: 'QuMiddk', delay: '0.08'},
                     {id: 'XQnaeAO', delay: '0.08'},
                     {id: 'rQQDAH7', delay: '0.08'}
                  ]
               },
               'n0psa': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'n0psa_yt',
                  color:     'f6c803',
                  frames:    [
                     {id: 'hdvTwFa', delay: '1'},
                     {id: 'fwL1V1X', delay: '0.08'},
                     {id: 'WByRLZS', delay: '0.08'},
                     {id: 'YUL6OBd', delay: '0.08'},
                     {id: 'hzWo2HH', delay: '0.08'},
                     {id: '5VO5KiR', delay: '5'},
                     {id: 'hzWo2HH', delay: '0.08'},
                     {id: 'YUL6OBd', delay: '0.08'},
                     {id: 'WByRLZS', delay: '0.08'},
                     {id: 'fwL1V1X', delay: '0.08'}
                  ]
               },
               'planet': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'planet_yt',
                  color:     '565656',
                  frames:    [
                     {id: 'cedz7ps', delay: '0.08'},
                     {id: 'AkqsdQo', delay: '0.08'},
                     {id: 'FFHr4Y2', delay: '0.08'},
                     {id: '9AjZP6A', delay: '0.08'},
                     {id: '6CdbOo3', delay: '0.08'},
                     {id: 'uqc3xM9', delay: '0.08'},
                     {id: 'B2zmk0N', delay: '0.08'},
                     {id: 'mVCN9FP', delay: '0.08'},
                     {id: 'ymNStZ4', delay: '0.08'},
                     {id: 'OIT8rgw', delay: '0.08'},
                     {id: 'ymNStZ4', delay: '0.08'},
                     {id: 'mVCN9FP', delay: '0.08'},
                     {id: 'B2zmk0N', delay: '0.08'},
                     {id: 'uqc3xM9', delay: '0.08'},
                     {id: '6CdbOo3', delay: '0.08'},
                     {id: '9AjZP6A', delay: '0.08'},
                     {id: 'FFHr4Y2', delay: '0.08'},
                     {id: 'AkqsdQo', delay: '0.08'}
                  ]
               },
               'agarpros': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'agarpros_yt',
                  color:     '000000',
                  frames:    [
                     {id: 'TBIlCYb', delay: '4'},
                     {id: 'NFXeciX', delay: '0.06'},
                     {id: 'tVJ1fru', delay: '0.06'},
                     {id: 'xOFUJtD', delay: '0.06'},
                     {id: 'POhhdVh', delay: '0.06'},
                     {id: 'mV17fbS', delay: '0.06'},
                     {id: 'G3lUEyj', delay: '0.06'},
                     {id: 'G4jxjM9', delay: '0.06'},
                     {id: 'WQA1R3N', delay: '0.06'}
                  ]
               },
               'wunwun': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'wunwun_yt',
                  color:     'cfb53b',
                  frames:    [
                     {id: 'HAgGIlS', delay: '0.08'},
                     {id: '2jEiLOq', delay: '0.08'},
                     {id: 'YyavcPR', delay: '0.08'},
                     {id: 'QRddsHF', delay: '0.08'},
                     {id: 's97xn1X', delay: '0.08'},
                     {id: 'G2bawix', delay: '0.08'},
                     {id: 'J5XBcRr', delay: '0.08'},
                     {id: 'jmCoKrN', delay: '0.08'},
                     {id: 'OOuT7gX', delay: '0.08'},
                     {id: '7m8p67N', delay: '0.08'},
                     {id: 'cKVriYg', delay: '2'}
                  ]
               },
               'sirius': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'sirius_yt',
                  color:     '000000',
                  frames:    [
                     {id: 'y54E3Fq', delay: '2'},
                     {id: 'KKcOvM5', delay: '0.08'},
                     {id: 'cdPueeg', delay: '0.08'},
                     {id: 'yMHapKA', delay: '0.08'},
                     {id: 'piuBzG4', delay: '0.08'},
                     {id: 'Zhad6LJ', delay: '0.08'},
                     {id: 'pIpNT61', delay: '0.08'},
                     {id: 'LtPbRk7', delay: '0.08'},
                     {id: 'twPrMak', delay: '0.08'},
                     {id: 'C9FDBFr', delay: '0.08'},
                     {id: 'j00ha1X', delay: '0.08'},
                     {id: 'C9FDBFr', delay: '0.08'},
                     {id: 'twPrMak', delay: '0.08'},
                     {id: 'LtPbRk7', delay: '0.08'},
                     {id: 'pIpNT61', delay: '0.08'},
                     {id: 'Zhad6LJ', delay: '0.08'},
                     {id: 'piuBzG4', delay: '0.08'},
                     {id: 'yMHapKA', delay: '0.08'},
                     {id: 'cdPueeg', delay: '0.08'},
                     {id: 'KKcOvM5', delay: '0.08'}
                  ]
               },
               'miracle': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'miracle_yt',
                  color:     'e36e04',
                  frames:    [
                     {id: 'mEcp7UJ', delay: '4'},
                     {id: 'cMQYnQb', delay: '0.08'},
                     {id: 'N4fmB4V', delay: '0.08'},
                     {id: 'N3eQhQu', delay: '0.08'},
                     {id: 'cMQYnQb', delay: '0.08'},
                     {id: 'N4fmB4V', delay: '0.08'},
                     {id: 'cMQYnQb', delay: '0.08'},
                     {id: 'N3eQhQu', delay: '0.08'},
                     {id: 'cMQYnQb', delay: '0.08'},
                     {id: 'N4fmB4V', delay: '0.08'}
                  ]
               },
               'slash': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'slash_yt',
                  color:     'ffffff',
                  frames:    [
                     {id: 'AWEpAom', delay: '4'},
                     {id: 'Cvevuc8', delay: '0.08'},
                     {id: 'PtVaXeZ', delay: '0.08'},
                     {id: 'cvWzzip', delay: '0.08'},
                     {id: 's5FM9ZM', delay: '0.08'},
                     {id: 'nFzj8ow', delay: '0.08'},
                     {id: 'k6r614I', delay: '0.08'},
                     {id: '8UEJJEt', delay: '0.08'},
                     {id: 'OS0NBMS', delay: '0.08'},
                     {id: '8jQk2Uz', delay: '0.08'},
                     {id: 'uiLHrCr', delay: '0.08'},
                     {id: '8jQk2Uz', delay: '0.08'},
                     {id: 'OS0NBMS', delay: '0.08'},
                     {id: '8UEJJEt', delay: '0.08'},
                     {id: 'k6r614I', delay: '0.08'},
                     {id: 'nFzj8ow', delay: '0.08'},
                     {id: 's5FM9ZM', delay: '0.08'},
                     {id: 'cvWzzip', delay: '0.08'},
                     {id: 'PtVaXeZ', delay: '0.08'},
                     {id: 'Cvevuc8', delay: '0.08'}
                  ]
               },
               'crystal': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'crystal_yt',
                  color:     '1273e9',
                  frames:    [
                     {id: 'jZHPuF8', delay: '0.08'},
                     {id: 'D8MBnZ5', delay: '0.08'},
                     {id: 'ttiznOb', delay: '0.08'},
                     {id: 'Gm0X19w', delay: '0.08'},
                     {id: 'NPoLUf6', delay: '0.08'},
                     {id: 'XjSRDHW', delay: '0.08'},
                     {id: 'edcTt6j', delay: '0.08'},
                     {id: 'XTQBWRm', delay: '0.08'},
                     {id: 'rU3KchB', delay: '0.08'},
                     {id: 'xJe9vJh', delay: '0.08'},
                     {id: 'Gg1A4NY', delay: '0.08'},
                     {id: 'D9d2hSh', delay: '0.08'},
                     {id: 'lpX4GM6', delay: '0.08'},
                     {id: 'CKzjpKT', delay: '0.08'},
                     {id: 'pwkQvxD', delay: '0.08'},
                     {id: '2C3QpHg', delay: '0.08'},
                     {id: 'MRG3Djj', delay: '0.08'},
                     {id: '2GgbhaF', delay: '0.08'},
                     {id: 'Mqe76yX', delay: '0.08'},
                     {id: 'Oc0MPeX', delay: '0.08'},
                     {id: 'fq2oEqJ', delay: '0.08'},
                     {id: 'I8Hz7mE', delay: '0.08'},
                     {id: 'vy3sLVd', delay: '0.08'},
                     {id: 'xA7su83', delay: '0.08'},
                     {id: 'DzQLo7q', delay: '0.08'}
                  ]
               },
               'gfm': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'gfm_yt',
                  color:     '13dd9b',
                  frames:    [
                     {id: 'ImMQ1v7', delay: '0.08'},
                     {id: 'UnZ13uA', delay: '0.08'},
                     {id: 'U0Jres5', delay: '0.08'},
                     {id: 'CWKL82x', delay: '0.08'},
                     {id: '4Eehc4A', delay: '0.08'},
                     {id: 'QDIRu6q', delay: '0.08'},
                     {id: 'OlfDoKC', delay: '0.08'},
                     {id: 'EWidPaO', delay: '0.08'},
                     {id: 'wVso12O', delay: '0.08'},
                     {id: 'aRRPDXg', delay: '0.08'},
                     {id: 'Px2fPIX', delay: '0.08'},
                     {id: 'z71N8zK', delay: '0.08'},
                     {id: 'yV1oWtB', delay: '0.08'},
                     {id: 'OGp9CKr', delay: '0.08'},
                     {id: 'nOxBDx4', delay: '0.08'},
                     {id: 'bj4v8be', delay: '0.08'}
                  ]
               },
               'nbk': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'nbk_yt',
                  color:     '000000',
                  frames:    [
                     {id: 'doovLBy', delay: '0.1'},
                     {id: '7a4bcUA', delay: '0.1'},
                     {id: 'uQiWXKK', delay: '0.1'},
                     {id: 'YvdpBSe', delay: '0.1'},
                     {id: 'sBg714h', delay: '0.1'},
                     {id: 'zturjAt', delay: '0.1'},
                     {id: 'ysfO8B6', delay: '0.1'},
                     {id: '8HJzHa4', delay: '0.1'}
                  ]
               },
               'kohai': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'kohai_yt',
                  color:     '658bd3',
                  frames:    [
                     {id: '64zpTtk', delay: '0.3'},
                     {id: '9G865mk', delay: '0.12'},
                     {id: 'xdhGWI5', delay: '0.12'},
                     {id: '5iJfJY3', delay: '0.12'},
                     {id: 'vI07nFv', delay: '0.12'},
                     {id: 'wKxUAry', delay: '0.12'},
                     {id: 'RUv4UVg', delay: '0.12'},
                     {id: 'frB66Ep', delay: '0.12'},
                     {id: 'Vnl66Df', delay: '0.12'},
                     {id: 'Nektn3N', delay: '0.12'},
                     {id: 'J2UfkzD', delay: '0.12'}
                  ]
               },
               'legend': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'turtleclan_yt',
                  color:     '000000',
                  frames:    [
                     {id: 'cd2Jj41', delay: '0.02'},
                     {id: 'BFVi5ZK', delay: '0.02'},
                     {id: 'gWwc9X9', delay: '0.02'},
                     {id: 'IENbkme', delay: '0.02'},
                     {id: 'Zf0GySz', delay: '0.02'},
                     {id: 'C7g8eCl', delay: '0.02'},
                     {id: 'YRWVguy', delay: '0.02'},
                     {id: 'p60vq6D', delay: '0.02'},
                     {id: 'qNfGMGm', delay: '0.02'},
                     {id: 'UqnBoke', delay: '0.02'},
                     {id: 'sm4SOvA', delay: '0.02'},
                     {id: 'Mn7QR42', delay: '0.02'},
                     {id: 'iAfnoVF', delay: '0.02'},
                     {id: 'IjwC9tp', delay: '0.02'},
                     {id: 'J1CZ8hh', delay: '0.02'},
                     {id: '6gNbU66', delay: '0.02'},
                     {id: 'weyGhf9', delay: '0.02'},
                     {id: '6EjJ1M1', delay: '0.02'},
                     {id: 'MrOrIEd', delay: '0.02'}
                  ]
               },
               'trippy': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'trippy',
                  color:     'ffffff',
                  frames:    [
                     {id: 'aqEBJji', delay: '0.03'},
                     {id: 'BfSFI8I', delay: '0.03'},
                     {id: 'rHzEc0l', delay: '0.03'},
                     {id: '4Dc6iSW', delay: '0.03'},
                     {id: 'C5pbZPx', delay: '0.03'},
                     {id: 'mr588aN', delay: '0.03'},
                     {id: 'nIGIScj', delay: '0.03'},
                     {id: '4jCE9xX', delay: '0.03'},
                     {id: 'I3Dixlc', delay: '0.03'},
                     {id: 'ZXxLp0Q', delay: '0.03'}
                  ]
               },
               'trippy 2': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'trippy_2',
                  color:     'ffffff',
                  frames:    [
                     {id: '2MG25OA', delay: '0.03'},
                     {id: 'ypypCpM', delay: '0.03'},
                     {id: 'xjJyohm', delay: '0.03'},
                     {id: '46tVXfT', delay: '0.03'},
                     {id: 'gDwtKiL', delay: '0.03'},
                     {id: 'Jey9A4m', delay: '0.03'},
                     {id: 'eSwYkS3', delay: '0.03'},
                     {id: 'uId5x5t', delay: '0.03'}
                  ]
               },
               'aoyama': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'aoyama',
                  color:     '6a7aad',
                  frames:    [
                     {id: 'EZV44m5', delay: '0.08'},
                     {id: 'Be8YCIi', delay: '0.08'},
                     {id: 'aAUZMOY', delay: '0.08'},
                     {id: 'jRidrLf', delay: '0.08'},
                     {id: 'DSnCwbt', delay: '0.08'}
                  ]
               },
               'hestia': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'hestia',
                  color:     'ffffff',
                  frames:    [
                     {id: 'mHPki7d', delay: '0.13'},
                     {id: 'r68W6j3', delay: '0.13'},
                     {id: 'cnozXNA', delay: '0.13'},
                     {id: 'jzT28GE', delay: '0.13'},
                     {id: 'j4rMxd7', delay: '0.13'},
                     {id: '1yaH8Yj', delay: '0.13'},
                     {id: 'CBcsEd7', delay: '0.13'},
                     {id: 'yr6nREs', delay: '0.13'}
                  ]
               },
               'umaru': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'umaru',
                  color:     'e86b34',
                  frames:    [
                     {id: 'lzpVxie', delay: '0.1'},
                     {id: 'rUIggqs', delay: '0.1'},
                     {id: 'O5woXju', delay: '0.1'},
                     {id: 'opOYMbD', delay: '0.1'},
                     {id: 'g8nukXN', delay: '0.1'},
                     {id: 'j3jUhzB', delay: '0.1'}
                  ]
               },
               'megumin': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'megumin',
                  color:     '632d34',
                  frames:    [
                     {id: '08LhFca', delay: '0.1'},
                     {id: 'kE12JCT', delay: '0.1'},
                     {id: 'JG6acVn', delay: '0.1'},
                     {id: 'z3EAFKm', delay: '0.1'},
                     {id: '9hoQPlu', delay: '0.1'},
                     {id: 'EmdwHen', delay: '0.1'},
                     {id: 'cgaAF8j', delay: '0.1'},
                     {id: 'SgCq8Hy', delay: '0.1'},
                     {id: 'CCOOVBO', delay: '0.1'},
                     {id: 'elWHx2Y', delay: '0.1'}
                  ]
               },
               'neko': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'neko',
                  color:     '444250',
                  frames:    [
                     {id: 'l2kUHUa', delay: '0.2'},
                     {id: 'UHKbxIv', delay: '0.2'},
                     {id: 'zB4VlRl', delay: '0.2'},
                     {id: 'aVcKIMi', delay: '0.2'},
                     {id: '2V6yYIX', delay: '0.2'}
                  ]
               },
               'leekspin': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'leekspin',
                  color:     '8f5d99',
                  frames:    [
                     {id: 'acb7H09', delay: '0.1'},
                     {id: 'RvVtMsF', delay: '0.1'},
                     {id: '4dQ2gLM', delay: '0.1'},
                     {id: 'FXBj2HN', delay: '0.1'}
                  ]
               },
               'pizza 2': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'pizza_2',
                  color:     'ffffff',
                  frames:    [
                     {id: 'HKvlfSJ', delay: '0.1'},
                     {id: 'afS86PD', delay: '0.1'},
                     {id: 'wVmSKUf', delay: '0.1'},
                     {id: 'PkhWbF2', delay: '0.1'}
                  ]
               },
               'cat': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'trippy_cat',
                  color:     '000000',
                  frames:    [
                     {id: '841wvz3', delay: '0.05'},
                     {id: '2p7AaDh', delay: '0.05'},
                     {id: 'YcNy91Y', delay: '0.05'},
                     {id: 'FwiDalL', delay: '0.05'},
                     {id: 'j6Z5YfK', delay: '0.05'}
                  ]
               },
               '✧༄ᗫxxxxx　⇀㚂㜂': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'birthday_lol',
                  color:     'cd5d22',
                  frames:    [
                     {id: 'SJlS8Rg', delay: '0.08'},
                     {id: 'AiICKZb', delay: '0.08'},
                     {id: '1iVfy8b', delay: '0.08'},
                     {id: 'hwPSr3s', delay: '0.08'},
                     {id: 'wpJophT', delay: '0.08'},
                     {id: 'W9oLhpz', delay: '0.08'},
                     {id: 'DexE8Kb', delay: '0.08'},
                     {id: '7ybaqXq', delay: '0.08'}
                  ]
               },
				'℄🌀SCͥHRͣAͫMM': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'agarpros_yt',
                  color:     '000000',
                  frames:    [
                     {id: 'TBIlCYb', delay: '4'},
                     {id: 'NFXeciX', delay: '0.06'},
                     {id: 'tVJ1fru', delay: '0.06'},
                     {id: 'xOFUJtD', delay: '0.06'},
                     {id: 'POhhdVh', delay: '0.06'},
                     {id: 'mV17fbS', delay: '0.06'},
                     {id: 'G3lUEyj', delay: '0.06'},
                     {id: 'G4jxjM9', delay: '0.06'},
                     {id: 'WQA1R3N', delay: '0.06'}
                  ]
               },
               '℄🌀ℱ₳𝓗∀🌛': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'zombie',
                  color:     '004F0F',
                  frames:    [
                     {id: 'uVqUXBN', delay: '3'},
                     {id: 'QclZjeR', delay: '0.1'},
                     {id: 'iXdYrD8', delay: '0.1'},
                     {id: 'vF0ZIcs', delay: '0.1'},
                     {id: 'iXdYrD8', delay: '0.1'},
                     {id: 'QclZjeR', delay: '0.1'}
                  ]
               },			   
               '℄🌀jimboy3100': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'birthday_troll',
                  color:     '7a0c0f',
                  frames:    [
                     {id: 'KxcI3j7', delay: '4'},
                     {id: 'aE1etcH', delay: '0.1'},
                     {id: 'ZA1rlQ0', delay: '0.1'},
                     {id: '8NUCHKe', delay: '0.1'},
                     {id: 'ZbeXIpc', delay: '0.1'},
                     {id: 'iQWIiAu', delay: '0.1'},
                     {id: 'ZbeXIpc', delay: '0.1'},
                     {id: '8NUCHKe', delay: '0.1'},
                     {id: 'ZA1rlQ0', delay: '0.1'},
                     {id: 'aE1etcH', delay: '0.1'}
                  ]
               }			   
            },
            cache:      {},
            prototypes: {
               canvas: (CanvasRenderingContext2D.prototype),
               old:    {}
            }
         },
         f: {
            prototype_override: function(type, name, runat, callback) {
               if ( !(type in tcm.l.prototypes.old) )       tcm.l.prototypes.old[type]       = {};
               if ( !(name in tcm.l.prototypes.old[type]) ) tcm.l.prototypes.old[type][name] = tcm.l.prototypes[type][name];
               tcm.l.prototypes[type][name] = function() {
                  (runat == 'before' && callback(this, arguments));
                  tcm.l.prototypes.old[type][name].apply(this, arguments);
                  (runat == 'after'  && callback(this, arguments));
               };
            },
            hex_to_lightness: function(hex) {
               var rgb = parseInt(hex, 16);
               var r   = (rgb >> 16) & 0xff;
               var g   = (rgb >>  8) & 0xff;
               var b   = (rgb >>  0) & 0xff;
               return (0.2126 * r + 0.7152 * g + 0.0722 * b);
            },
            new_img: function(id) {
               var img         = new Image();
               img.crossOrigin = 'anonymous';
               img.src         = 'http://i.imgur.com/' + id + '.png';
               return img;
            },
            cache_skin: function(skin) {
               for ( var i = 0; i < tcm.l.skins[skin].frames.length; i++ ) {
                  var id = tcm.l.skins[skin].frames[i].id;
                  if ( !(id in tcm.l.cache) ) {
                     tcm.l.cache[id] = tcm.f.new_img(id);
                  }
               }
               return true;
            },
            skin_ready: function(skin) {
               var ready = 0;
               for ( var i = 0; i < tcm.l.skins[skin].frames.length; i++ ) {
                  var id = tcm.l.skins[skin].frames[i].id;
                  if ( tcm.l.cache[id].complete && tcm.l.cache[id].width > 1 ) {
                     ++ready;
                  }
               }
               return (ready == tcm.l.skins[skin].frames.length ? true : false);
            },
            override: function() {
               tcm.f.prototype_override('canvas', 'drawImage', 'before', function(a, b) {
                  if ( 'src' in b['0'] && (c = decodeURIComponent(b['0'].src).match(/^https?\:\/\/i\.imgur\.com\/.+\.png\?(.+)$/i)) && c['1'] in tcm.l.skins ) {
                     if ( !tcm.l.skins[c['1']].cached ) {
                        tcm.l.skins[c['1']].cached = tcm.f.cache_skin(c['1']);
                     }
                     if ( !tcm.l.skins[c['1']].ready ) {
                        tcm.l.skins[c['1']].ready = tcm.f.skin_ready(c['1']);
                     }
                     if ( tcm.l.skins[c['1']].ready ) {
                        b['0'] = tcm.l.cache[tcm.l.skins[c['1']].frames[tcm.l.skins[c['1']].current % tcm.l.skins[c['1']].frames.length].id];
                     }
                     if ( ((Date.now() - tcm.l.skins[c['1']].timestamp) / 1000) % 60 >= tcm.l.skins[c['1']].frames[tcm.l.skins[c['1']].current % tcm.l.skins[c['1']].frames.length].delay ) {
                        ++tcm.l.skins[c['1']].current;
                        tcm.l.skins[c['1']].timestamp = Date.now();
                     }
                  }
               });
            },
            register_skins: function() {
               for ( key in tcm.l.skins ) {
                  w.core.registerSkin(key, '%tcm_' + tcm.l.skins[key].id, 'http://i.imgur.com/' + (tcm.f.hex_to_lightness(tcm.l.skins[key].color) < 50 ? 'bZuiJHx' : 'NwivnjV') + '.png?' + key, 3, '0x' + tcm.l.skins[key].color);
               }
            },
            inject_html: function() {
               var html = '<br/><br/>';
               html    += '<select class="form-control" id="movingskins" onchange="document.getElementById(\'nick\').value = this.options[this.selectedIndex].value;">';
               html    += '<option value="">---------------- Select Animated Skin ----------------</option>';
               for ( key in tcm.l.skins ) {
                  html += '<option value="' + key.toUpperCase() + '">' + key + ' (' + tcm.l.skins[key].frames.length + ' frames)</option>';
               }
               html += '</select>';
               document.getElementById('SpecialDealsBtn').insertAdjacentHTML('afterend', html);
            },
         }
      };
      tcm.f.override();
      tcm.f.register_skins();
      tcm.f.inject_html();
   }
   else {
      w.setTimeout(function() {
         agarXTRA(w);

      }, 100);
   }
	$("#movingskins").css( { marginTop : "-15px" } );
	$("#movingskins").css( { marginBottom : "-30px" } );   
   setTimeout(function() { 
    //hide extra names
    $('#movingskins>option:nth-child(68)').hide();
	$('#movingskins>option:nth-child(69)').hide();
	$('#movingskins>option:nth-child(70)').hide();
	$('#movingskins>option:nth-child(71)').hide();
   }, 300);
})(window);
}


function SpecialDeals() {
	GameConfiguration={};
		$.ajax({
        type: "GET",
        url: "https://configs-web.agario.miniclippt.com/live/v9/1025/GameConfiguration.json",
        datatype: "json",
        success: function(info) {
        return GameConfiguration=info;
			}
		});
		
    if (MC.getUserId() != null) {
        $('#helloContainer').after('<div class="modal fade in" id="specialShopModal" aria-hidden="false" style="display: block;">' +
            '<div class="modal-backdrop fade in"></div>' +
            '<div class="modal-dialog" style="top: calc(50vh - 241.5px); width: 500px;">' +
            '<div class="modal-content">' +
            '<div id="CloseSpecialDeals" class="modal-header"><button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">' + Premadeletter113 + '</span></button>' +
            '<h4 class="modal-title" style="font-family: Roboto Condensed, sans-serif">Special deals</h4>' +
            '</div>' +
            '<div class="modal-body"><input type="email" class="form-control" id="agario_uid_input" placeholder="*UID (' + Premadeletter110 + ')" style="width: 85%; display: inline-block">' +
            '<div class="custom-checkbox" style="display: inline-block; margin-left: 10px; vertical-align: sub;"><input id="checkBoxLockUID" type="checkbox" disabled="disabled" style="width: 20px; height: 20px"><label for="cb1"></label></div>' +
            '<div class="bs-callout bs-callout-buy bs-callout-clickable" id="buy_starterpack">' +
            '<h4 id="dealtype" class="pull-left">purchase 125000 coins</h4><h5 class="pull-left"> <i> (' + Premadeletter111 + ')</i></h5>' +
            '<h4 id="dealcost" class="text-right">99.99 $</h4>' +
            '<div class="xpmt-buy-content" style="font-size: 13px; margin-top: -30px; float: left;font-weight: 700; background-color: rgba(0, 0, 0, 0.2); background-image: url(https://jimboy3100.github.io/banners/icondeal2.png);padding: 3px; align: middle; border-radius: 4px;width: 100%;height: 150px;z-index: 15;margin: auto;">' +
            '<div class="xpmt-money-stack" style="display: inline-block; margin-left: 70px; margin-top: 115px;"><span class="coins" style=""><b>125000 C</b></span></div>' +
            '<div class="xpmt-skins" style="width: 110px;height: 110px;background: no-repeat 50% 50%;background-size: 106px;border-radius: 50%; border: 3px solid #708090;margin: -120px 310px; background-image: url(""); background-size: cover; border-color: #7c0001"></div>' +
            '</div>' +
            '</div><select id="ss-select-purchases" class="form-control" required="" style="margin-bottom: 30px"></select><select id="BuyDealCurrency" class="form-control" required="" style="display:inline; width: 40%; margin-top: -30px;"><option value="USD" data-itr="">USD</option><option value="EU" data-itr="">EU</option></select><color="red"> ' + Premadeletter112 + '</color>' +
            '<p class="alert-warning text-center">' + Premadeletter116 + '<br><span class="alert-success" id="exp-uid">' + MC.getUserId() + '</span> <font color="red" onclick=copy(MC.getUserId());><b><u>'+Premadeletter114+' UID</u></b></font><br>*UID ' + Premadeletter115 + '</p>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>');
setTimeout(function() { populateSD();}, 1500);
        $("#CloseSpecialDeals").click(function() {
            MC.setQuality($('#quality').val());
            $("#specialShopModal").remove();
        });
        $(".xpmt-buy-content").click(function() {
			toastr["warning"]('<div id="tutorial" style="background-image: url(https://jimboy3100.github.io/banners/v25toastricon.jpg); color:#018cf6; font-size:16px; text-align:center">' + Premadeletter90 +' v0.4<br>' + Premadeletter91 + '<br><font color="red">' + Premadeletter91a + '</font>' + '</br> <button class="btn btn-sm btn-primary btn-play btn-do-DyingLight" style="margin-top: 10px;border-color: darkblue;">' + Premadeletter24 + '</button><br><button class="btn btn-sm btn-warning btn-spectate btn-nodo-hideall" style="width: 100%;margin-top: 10px;">'+ Premadeletter25 + '</button></div>', "", { timeOut: 20000, extendedTimeOut: 20000 }).css("width", "300px");	
			$(".btn.btn-sm.btn-primary.btn-play.btn-do-DyingLight").click(function () { buydeals(); });	
 /*           if (ProLicenceUsersTable.ProLicenceUsers[MC.getUserId()] != undefined) {
                console.log("Authorised User");
                buydeals();
            } else {
                console.log("Non Authorised User");
                var containsnickname = $("#nick").val();
                if (~containsnickname.indexOf("℄") || ~containsnickname.indexOf("ΕΛ")) {
                    toastr["info"]("If you are Lc or EA player, contact Skype Id: Jimboy3100 and refer your <font color='red'><b>UID</b></font color='red'>", "", {
                        timeOut: 10000,
                        extendedTimeOut: 10000
                    }).css("width", "300px");
                } else {
                    toastr["info"]("This Function is enabled to those who donated 6$ to author, contact Skype Id: Jimboy3100 and refer your <font color='red'><b>UID</b></font color='red'>", "", {
                        timeOut: 10000,
                        extendedTimeOut: 10000
                    }).css("width", "300px");
                }
            } */
        });
        $('#agario_uid_input').blur(function() {
            if (letterCount($('#agario_uid_input').val(), '-', true) == 4) {
                document.getElementById("checkBoxLockUID").checked = true;
                toastr["info"](Premadeletter92).css("width", "250px");
                $("#exp-uid").text($('#agario_uid_input').val());
            } else {
                document.getElementById("checkBoxLockUID").checked = false;
                toastr["info"](Premadeletter93).css("width", "210px");	
                $("#exp-uid").text(MC.getUserId());
            }
        });


        $('#ss-select-purchases').on('change', function() {
            console.log(this.value);
			findSDescription();
            $(".xpmt-skins2").remove();
            $(".xpmt-money-stack").text($("#ss-select-purchases option:selected").text().substr(0, $("#ss-select-purchases option:selected").text().indexOf('_')) + " C");
            $("#dealcost").text($("#ss-select-purchases option:selected").text().split('=').pop());

            var textcropped1 = $("#ss-select-purchases option:selected").text().split('1_skin_').pop();
            textcropped1 = textcropped1.substr(0, textcropped1.indexOf(' ')).replace(' ', '');
            textcropped1 = textcropped1.charAt(0).toUpperCase() + textcropped1.slice(1);
            $(".xpmt-skins").css('background-image', 'url("https://configs-web.agario.miniclippt.com/live/v9/1018/' + textcropped1 + '.png")');
            setTimeout(function() {
                if ($('#ss-select-purchases').val() == "com.miniclip.agar.io.dailydeal7") {
                    $(".xpmt-skins").css('background-image', 'url(" https://configs-web.agario.miniclippt.com/live/v9/1018/Blueberry_Face.png ")');
                } else if ($('#ss-select-purchases').val() == "com.miniclip.agar.io.dailydeal15") {
                    $(".xpmt-skins").css('background-image', 'url(" https://configs-web.agario.miniclippt.com/live/v9/1018/Hot_Dog.png ")');
                } else if ($('#ss-select-purchases').val() == "com.miniclip.agar.io.dailydeal17") {
                    $(".xpmt-skins").css('background-image', 'url(" https://configs-web.agario.miniclippt.com/live/v9/1018/Comet.png ")');
                } else if ($('#ss-select-purchases').val() == "com.miniclip.agar.io.dailydeal18") {
                    $(".xpmt-skins").css('background-image', 'url(" https://configs-web.agario.miniclippt.com/live/v9/1018/Comet.png ")');
                } else if ($('#ss-select-purchases').val() == "com.miniclip.agar.io.dailydeal21") {
                    $(".xpmt-skins").css('background-image', 'url(" https://configs-web.agario.miniclippt.com/live/v9/1018/Jar_Brain.png ")');
                } else if ($('#ss-select-purchases').val() == "com.miniclip.agar.io.dailydeal22") {
                    $(".xpmt-skins").css('background-image', 'url(" https://configs-web.agario.miniclippt.com/live/v9/1018/Jar_Brain.png ")');
                } else if ($('#ss-select-purchases').val() == "com.miniclip.agar.io.dailydeal25") {
                    $(".xpmt-skins").css('background-image', 'url(" https://configs-web.agario.miniclippt.com/live/v9/1018/Laika.png ")');
                } else if ($('#ss-select-purchases').val() == "com.miniclip.agar.io.dailydeal26") {
                    $(".xpmt-skins").css('background-image', 'url(" https://configs-web.agario.miniclippt.com/live/v9/1018/Laika.png ")');
                } else if ($('#ss-select-purchases').val() == "com.miniclip.agar.io.dailydeal27") {
                    $(".xpmt-skins").css('background-image', 'url(" https://configs-web.agario.miniclippt.com/live/v9/1018/pig.png ")');
                } else if ($('#ss-select-purchases').val() == "com.miniclip.agar.io.dailydeal36") {
                    $(".xpmt-skins").css('background-image', 'url(" https://configs-web.agario.miniclippt.com/live/v9/1018/UFO.png ")');
                } else if ($('#ss-select-purchases').val() == "com.miniclip.agar.io.dailydeal41") {
                    $(".xpmt-skins").css('background-image', 'url(" https://configs-web.agario.miniclippt.com/live/v9/1018/zombie.png ")');
                } else if ($('#ss-select-purchases').val() == "com.miniclip.agar.io.dailydeal42") {
                    $(".xpmt-skins").css('background-image', 'url(" https://configs-web.agario.miniclippt.com/live/v9/1018/zombie.png ")');
                } else if ($('#ss-select-purchases').val() == "com.miniclip.agar.io.dailydeal52") {
                    $(".xpmt-skins").css('background-image', 'url(" https://configs-web.agario.miniclippt.com/live/v9/1018/Tiger_Pattern.png ")');
                } else if ($('#ss-select-purchases').val() == "com.miniclip.agar.io.dailydeal53") {
                    $(".xpmt-skins").css('background-image', 'url(" https://configs-web.agario.miniclippt.com/live/v9/1018/toon.png ")');
                } else if ($('#ss-select-purchases').val() == "com.miniclip.agar.io.dailydeal54") {
                    $(".xpmt-skins").css('background-image', 'url(" https://configs-web.agario.miniclippt.com/live/v9/1018/toon.png ")');
                } else if ($('#ss-select-purchases').val() == "com.miniclip.agar.io.starterpack3") {
                    $(".xpmt-skins").css('background-image', 'url(" https://configs-web.agario.miniclippt.com/live/v9/1018/pig.png ")');
                } else if ($('#ss-select-purchases').val() == "com.miniclip.agar.io.starterpack4") {
                    $(".xpmt-skins").css('background-image', 'url(" https://configs-web.agario.miniclippt.com/live/v9/1018/Blueberry_Face.png ")');
                } else if ($('#ss-select-purchases').val() == "com.miniclip.agar.io.starterpack6") {
                    $(".xpmt-skins").css('background-image', 'url(" https://configs-web.agario.miniclippt.com/live/v9/1018/Tomato_Face.png ")');
                } else if ($('#ss-select-purchases').val() == "com.miniclip.agar.io.starterpack7") {
                    $(".xpmt-skins").css('background-image', 'url(" https://configs-web.agario.miniclippt.com/live/v9/1018/Comet.png ")');
                } else if ($('#ss-select-purchases').val() == "com.miniclip.agar.io.boosterpromo3") {
                    $(".xpmt-skins").css('background-image', 'url(" https://configs-web.agario.miniclippt.com/live/v9/1018/monthly_web_husky.png ")');
                } else if ($('#ss-select-purchases').val() == "com.miniclip.agar.io.promotionpack1") {
                    $(".xpmt-skins").css('background-image', 'url(" https://configs-web.agario.miniclippt.com/live/v9/1018/moonlight_wendigo.png ")');
                } else if ($('#ss-select-purchases').val() == "com.miniclip.agar.io.promotionpack2") {
                    $(".xpmt-skins").css('background-image', 'url(" https://configs-web.agario.miniclippt.com/live/v9/1018/moonlight_red_fiend.png ")');
                } else if ($('#ss-select-purchases').val() == "com.miniclip.agar.io.promotionpack3") {
                    $(".xpmt-skins").css('background-image', 'url(" https://configs-web.agario.miniclippt.com/live/v9/1018/moonlight_wendigo.png ")');
                    $('.xpmt-skins').after('<div class="xpmt-skins2" style="width: 110px;height: 110px;background: no-repeat 50% 50%;background-size: 106px;border-radius: 50%; border: 3px solid #708090;margin: 35px 350px; background-image: url(https://configs-web.agario.miniclippt.com/live/v9/1018/moonlight_red_fiend.png); background-size: cover; border-color: #7c0001"></div>');
                    $(".xpmt-money-stack").text("1800 DNA");
                } else if ($('#ss-select-purchases').val() == "com.miniclip.agar.io.promotionpack4") {
                    $(".xpmt-skins").css('background-image', 'url(" https://configs-web.agario.miniclippt.com/live/v9/1018/anime_skull_bow.png ")');
                } else if ($('#ss-select-purchases').val() == "com.miniclip.agar.io.promotionpack5") {
                    $(".xpmt-skins").css('background-image', 'url(" https://configs-web.agario.miniclippt.com/live/v9/1018/anime_skull_bow.png ")');
                } else if ($('#ss-select-purchases').val() == "com.miniclip.agar.io.promotionpack7") {
                    $(".xpmt-skins").css('background-image', 'url(" https://configs-web.agario.miniclippt.com/live/v9/1018/anime_power_ninja.png ")');
                } else if ($('#ss-select-purchases').val() == "com.miniclip.agar.io.promotionpack10") {
                    $(".xpmt-skins").css('background-image', 'url(" https://configs-web.agario.miniclippt.com/live/v9/1018/moonlight_wendigo.png ")');
                    $('.xpmt-skins').after('<div class="xpmt-skins2" style="width: 110px;height: 110px;background: no-repeat 50% 50%;background-size: 106px;border-radius: 50%; border: 3px solid #708090;margin: 35px 350px; background-image: url(https://configs-web.agario.miniclippt.com/live/v9/1018/moonlight_night_hunter.png); background-size: cover; border-color: #7c0001"></div>');
                } else if ($('#ss-select-purchases').val() == "com.miniclip.agar.io.promotionpack11") {
                    $(".xpmt-skins").css('background-image', 'url(" https://configs-web.agario.miniclippt.com/live/v9/1018/samurai_war_mask.png ")');
                    $('.xpmt-skins').after('<div class="xpmt-skins2" style="width: 110px;height: 110px;background: no-repeat 50% 50%;background-size: 106px;border-radius: 50%; border: 3px solid #708090;margin: 35px 350px; background-image: url(https://configs-web.agario.miniclippt.com/live/v9/1018/samurai_skull_samurai.png); background-size: cover; border-color: #7c0001"></div>');
                } else if ($('#ss-select-purchases').val() == "com.miniclip.agar.io.promotionpack12") {
                    $(".xpmt-skins").css('background-image', 'url(" https://configs-web.agario.miniclippt.com/live/v9/1018/birthday_2017_2_rabid.png ")');
                    $('.xpmt-skins').after('<div class="xpmt-skins2" style="width: 110px;height: 110px;background: no-repeat 50% 50%;background-size: 106px;border-radius: 50%; border: 3px solid #708090;margin: 35px 350px; background-image: url(https://configs-web.agario.miniclippt.com/live/v9/1018/birthday_2017_2_delighted.png); background-size: cover; border-color: #7c0001"></div>');
                } else if ($('#ss-select-purchases').val() == "com.miniclip.agar.io.promotionpack13") {
                    $(".xpmt-skins").css('background-image', 'url(" https://configs-web.agario.miniclippt.com/live/v9/1018/pet_balls_elephant.png ")');
                } else if ($('#ss-select-purchases').val() == "com.miniclip.agar.io.promotionpack14") {
                    $(".xpmt-skins").css('background-image', 'url(" https://configs-web.agario.miniclippt.com/live/v9/1018/samurai_war_mask.png ")');
                } else if ($('#ss-select-purchases').val() == "com.miniclip.agar.io.promotionpack15") {
                    $(".xpmt-skins").css('background-image', 'url(" https://configs-web.agario.miniclippt.com/live/v9/1018/samurai_rogue_samurai.png ")');
                } else if ($('#ss-select-purchases').val() == "com.miniclip.agar.io.promotionpack16") {
                    $(".xpmt-skins").css('background-image', 'url(" https://configs-web.agario.miniclippt.com/live/v9/1018/samurai_war_mask.png ")');
                    $('.xpmt-skins').after('<div class="xpmt-skins2" style="width: 110px;height: 110px;background: no-repeat 50% 50%;background-size: 106px;border-radius: 50%; border: 3px solid #708090;margin: 35px 350px; background-image: url(https://configs-web.agario.miniclippt.com/live/v9/1018/samurai_rogue_samurai.png); background-size: cover; border-color: #7c0001"></div>');
                    $(".xpmt-money-stack").text("1800 DNA");
                } else if ($('#ss-select-purchases').val() == "com.miniclip.agar.io.zodiacpromo") {
                    $(".xpmt-skins").css('background-image', 'url(" https://configs-web.agario.miniclippt.com/live/v9/1018/zodiac_2017_skin_scorpio.png ")');
                    $(".xpmt-money-stack").text("800 DNA");
                } else if ($('#ss-select-purchases').val() == "com.miniclip.agar.io.zodiacpromoweb") {
                    $(".xpmt-skins").css('background-image', 'url(" https://configs-web.agario.miniclippt.com/live/v9/1018/zodiac_2017_skin_scorpio.png ")');
                } else if ($('#ss-select-purchases').val() == "com.miniclip.agar.io.collector2") {
                    $(".xpmt-skins").css('background-image', 'url(" https://configs-web.agario.miniclippt.com/live/v9/1018/birthday_sir.png ")');
                    $('.xpmt-skins').after('<div class="xpmt-skins2" style="width: 110px;height: 110px;background: no-repeat 50% 50%;background-size: 106px;border-radius: 50%; border: 3px solid #708090;margin: 35px 350px; background-image: url(https://configs-web.agario.miniclippt.com/live/v9/1018/ChilliPepper.png); background-size: cover; border-color: #7c0001"></div>');
                } else if ($('#ss-select-purchases').val() == "com.miniclip.agar.io.collector4") {
                    $(".xpmt-skins").css('background-image', 'url(" https://configs-web.agario.miniclippt.com/live/v9/1018/Rooster.png ")');
                    $('.xpmt-skins').after('<div class="xpmt-skins2" style="width: 110px;height: 110px;background: no-repeat 50% 50%;background-size: 106px;border-radius: 50%; border: 3px solid #708090;margin: 35px 350px; background-image: url(https://configs-web.agario.miniclippt.com/live/v9/1018/birthday_doge.png); background-size: cover; border-color: #7c0001"></div>');
                } else if ($('#ss-select-purchases').val() == "com.miniclip.agar.io.promotionpack17") {
                    $(".xpmt-skins").css('background-image', 'url(" https://configs-web.agario.miniclippt.com/live/v9/1018/anime_skull_bow.png ")');
                    $('.xpmt-skins').after('<div class="xpmt-skins2" style="width: 110px;height: 110px;background: no-repeat 50% 50%;background-size: 106px;border-radius: 50%; border: 3px solid #708090;margin: 35px 350px; background-image: url(https://configs-web.agario.miniclippt.com/live/v9/1018/anime_giant_human.png); background-size: cover; border-color: #7c0001"></div>');
                    $(".xpmt-money-stack").text("1800 DNA");
                } else if ($('#ss-select-purchases').val() == "com.miniclip.agar.io.promotionpack18") {
                    $(".xpmt-skins").css('background-image', 'url(" https://configs-web.agario.miniclippt.com/live/v9/1018/anime_skull_bow.png ")');
                    $('.xpmt-skins').after('<div class="xpmt-skins2" style="width: 110px;height: 110px;background: no-repeat 50% 50%;background-size: 106px;border-radius: 50%; border: 3px solid #708090;margin: 35px 350px; background-image: url(https://configs-web.agario.miniclippt.com/live/v9/1018/anime_giant_human.png); background-size: cover; border-color: #7c0001"></div>');
                } else if ($('#ss-select-purchases').val() == "com.miniclip.agar.io.potionpromo3") {
                    $(".xpmt-skins").css('background-image', 'url(" https://configs-web.agario.miniclippt.com/live/v9/1018/moonlight_wendigo.png ")');
                    $(".xpmt-money-stack").text("16000 C+ 1800 DNA");
                } else if ($('#ss-select-purchases').val() == "com.miniclip.agar.io.potionpromo6") {
                    $(".xpmt-skins").css('background-image', 'url(" https://configs-web.agario.miniclippt.com/live/v9/1018/moonlight_wendigo.png ")');
                    $(".xpmt-money-stack").text("7000 C+ 800 DNA");
                }
            }, 500);
        });
    } else {
        toastr["info"](Premadeletter94).css("width", "300px");	
    }
}

//EU OR USD
function buydeals(){
   $.ajax({
        type: "GET",
        url: "https://payments.agario.miniclippt.com/pay/"+$("#exp-uid").text()+"/"+$( "#ss-select-purchases option:selected" ).val()+"/"+$("#BuyDealCurrency").val(),
        datatype: "json",
        success: function(info) {
        return buytoken=info.iframe_url;
			}
		});
setTimeout(function() {		
	window.open(buytoken, "PopupWindow", "width=600,height=600,scrollbars=yes,resizable=no");
}, 3000);
}

            function populateSD(){
			var select = document.getElementById("ss-select-purchases");
                for(i=0;i<GameConfiguration.gameConfig["Wallet - In-App Purchases"].length;i++){
                    if(GameConfiguration.gameConfig["Wallet - In-App Purchases"][i].priceTier=="2"){
                    select.options[select.options.length] = new Option(GameConfiguration.gameConfig["Wallet - In-App Purchases"][i].bundleId+" = 1.99 $", GameConfiguration.gameConfig["Wallet - In-App Purchases"][i].id, GameConfiguration.gameConfig["Wallet - In-App Purchases"][i].id);
					}
                    else if(GameConfiguration.gameConfig["Wallet - In-App Purchases"][i].priceTier=="5"){
                    select.options[select.options.length] = new Option(GameConfiguration.gameConfig["Wallet - In-App Purchases"][i].bundleId+" = 4.99 $", GameConfiguration.gameConfig["Wallet - In-App Purchases"][i].id, GameConfiguration.gameConfig["Wallet - In-App Purchases"][i].id);
					}
                    else if(GameConfiguration.gameConfig["Wallet - In-App Purchases"][i].priceTier=="10"){
                    select.options[select.options.length] = new Option(GameConfiguration.gameConfig["Wallet - In-App Purchases"][i].bundleId+" = 9.99 $", GameConfiguration.gameConfig["Wallet - In-App Purchases"][i].id, GameConfiguration.gameConfig["Wallet - In-App Purchases"][i].id);
					}						
                    else if(GameConfiguration.gameConfig["Wallet - In-App Purchases"][i].priceTier=="20"){
                    select.options[select.options.length] = new Option(GameConfiguration.gameConfig["Wallet - In-App Purchases"][i].bundleId+" = 19.99 $", GameConfiguration.gameConfig["Wallet - In-App Purchases"][i].id, GameConfiguration.gameConfig["Wallet - In-App Purchases"][i].id);
					}
                    else if(GameConfiguration.gameConfig["Wallet - In-App Purchases"][i].priceTier=="50"){
                    select.options[select.options.length] = new Option(GameConfiguration.gameConfig["Wallet - In-App Purchases"][i].bundleId+" = 49.99 $", GameConfiguration.gameConfig["Wallet - In-App Purchases"][i].id, GameConfiguration.gameConfig["Wallet - In-App Purchases"][i].id);
					}
                    else if(GameConfiguration.gameConfig["Wallet - In-App Purchases"][i].priceTier=="60"){
                    select.options[select.options.length] = new Option(GameConfiguration.gameConfig["Wallet - In-App Purchases"][i].bundleId+" = 99.99 $", GameConfiguration.gameConfig["Wallet - In-App Purchases"][i].id, GameConfiguration.gameConfig["Wallet - In-App Purchases"][i].id);
					}					
                    else {
                    select.options[select.options.length] = new Option(GameConfiguration.gameConfig["Wallet - In-App Purchases"][i].bundleId, GameConfiguration.gameConfig["Wallet - In-App Purchases"][i].id, GameConfiguration.gameConfig["Wallet - In-App Purchases"][i].id);
					}					
				}

            }

            function findSDescription(){
			var findSDiconlocationString2=$("#ss-select-purchases option:selected").text().split('=').pop();
			findSDiconlocationString2=$("#ss-select-purchases option:selected").text().replace(findSDiconlocationString2, '');
			findSDiconlocationString2=findSDiconlocationString2.replace(' =', '');	
			var select = document.getElementById("ss-select-purchases");
                for(i=0;i<GameConfiguration.gameConfig["Visual - Bundles"].length;i++){
					
                    if(GameConfiguration.gameConfig["Visual - Bundles"][i].bundleId==findSDiconlocationString2){
						console.log("bundleId found");
						var findSDicondescriptionString=GameConfiguration.gameConfig["Visual - Bundles"][i].description;
						if (typeof findSDicondescriptionString === 'string' || findSDicondescriptionString instanceof String){
							// it's a string
							
							console.log(findSDicondescriptionString);
							if(findSDicondescriptionString!="na"){		
								findSDicondescriptionString=findSDicondescriptionString.replace('_',' ');	
								findSDicondescriptionString=findSDicondescriptionString.replace('_',' ');
								findSDicondescriptionString=findSDicondescriptionString.replace('_',' ');
								findSDicondescriptionString=findSDicondescriptionString.replace('_',' ');
								findSDicondescriptionString=findSDicondescriptionString.replace('_',' ');
								findSDicondescriptionString=findSDicondescriptionString.replace(' name','');
								$("#dealtype").text(findSDicondescriptionString);
							}
							else{
								console.log("no description");
								var findSDicondescriptionString=$('#ss-select-purchases').val();
								findSDicondescriptionString = findSDicondescriptionString.replace('com.miniclip.agar.io.','');
								findSDicondescriptionString = findSDicondescriptionString.charAt(0).toUpperCase() + findSDicondescriptionString.slice(1);
								$("#dealtype").text(findSDicondescriptionString);
							}
						}
						else{
						console.log("description is not a String");
						$("#dealtype").text("Unknown");
						}	
					}
				}
			}			
function letterCount(string, letter, caseSensitive) {
    var count = 0;
    if ( !caseSensitive) {
        string = string.toUpperCase();
        letter = letter.toUpperCase();
    }
    for (var i=0, l=string.length; i<string.length; i += 1) {
        if (string[i] === letter) {
            count += 1;
        }
    }
    return count;
}

function PremiumUsers(){
        var ProLicenceUsersTableJS = document.createElement("script");
        ProLicenceUsersTableJS.type = "text/javascript";
        ProLicenceUsersTableJS.src = "https://jimboy3100.github.io/AjaxData/ProLicenceUsersTableJS.js";
        $("body").append(ProLicenceUsersTableJS);
}

function BeforeReportFakesSkin(){
	if ($("#skin").val()!="https://jimboy3100.github.io/banners/iconfake1.png"){
			toastr["info"](Premadeletter95 + ' <font color="red"><b>Ctrl+V</font></b>, ' + Premadeletter96).css("width", "350px"); // erase the 's	
		copy("https://jimboy3100.github.io/banners/iconfake1.png");		
	}
	else{
		ReportFakesSkin();
	}
}
function ReportFakesSkin() {
var Temporaryletter1;
var Temporaryletter2;
var Languageletter320;		//Leaderboard
var Languageletter321;		//Teamboard
if (Languageletter320!=null){Temporaryletter2=Languageletter320} else{Temporaryletter2 = "Leaderboard";}
if (Languageletter321!=null){Temporaryletter1=Languageletter321} else{Temporaryletter1 = "Teamboard";}

$("#menu-footer").after('<div id="SkinChanger" style="display: none; background-image: url('+legbgpic+'); background-color: '+legbgcolor+'; border: 1px solid black; height: 540px; width: 500px; ";>'+
	'<div id="SkinChangerhud" style="display:block; margin-left: 10px; margin-right: 10px;">'+ //margin-left: 10px"
	'<div id="SkinChangertoolshud1" align="middle"><h5 class="main-color"><b>'+Premadeletter119+'</b></h5>'+	
	'<p style="color:white; font-size:12px; margin-bottom: -4px;" align="middle">'+Premadeletter120+
	'<br><font id= "Leadboardlet1" style="color:white; size:12px; margin-right: 70px;">'+Temporaryletter2+'</font><font id= "Teamboardlet1" style="color:white; size:12px; margin-left: 70px;">'+Temporaryletter1+'</font></p>'+
											'<input id="LeaderboardInput1" class="form-control" placeholder="Nickname" value="" style="margin-top: 2px; margin-right: 2px; width: 40%; display: inline; " " data-toggle="tooltip" data-placement="top" data-original-title="" >' +	
											'<input id="TeamboardInput1" class="form-control" placeholder="Nickname" value="" style="margin-top: 2px; margin-left: 2px; width: 40%; display: inline;" " data-toggle="tooltip" data-placement="top" data-original-title="" >' +																							
											'<input id="LeaderboardInput2" class="form-control" placeholder="Nickname" value="" style="margin-top: 2px; margin-right: 2px; width: 40%; display: inline;" " data-toggle="tooltip" data-placement="top" data-original-title="" >' +	
											'<input id="TeamboardInput2" class="form-control" placeholder="Nickname" value="" style="margin-top: 2px; margin-left: 2px; width: 40%; display: inline;" " data-toggle="tooltip" data-placement="top" data-original-title="" >' +	
											'<input id="LeaderboardInput3" class="form-control" placeholder="Nickname" value="" style="margin-top: 2px; margin-right: 2px; width: 40%; display: inline;" " data-toggle="tooltip" data-placement="top" data-original-title="" >' +	
											'<input id="TeamboardInput3" class="form-control" placeholder="Nickname" value="" style="margin-top: 2px; margin-left: 2px; width: 40%; display: inline;" " data-toggle="tooltip" data-placement="top" data-original-title="" >' +																							
											'<input id="LeaderboardInput4" class="form-control" placeholder="Nickname" value="" style="margin-top: 2px; margin-right: 2px; width: 40%; display: inline;" " data-toggle="tooltip" data-placement="top" data-original-title="" >' +	
											'<input id="TeamboardInput4" class="form-control" placeholder="Nickname" value="" style="margin-top: 2px; margin-left: 2px; width: 40%; display: inline;" " data-toggle="tooltip" data-placement="top" data-original-title="" >' +	
											'<input id="LeaderboardInput5" class="form-control" placeholder="Nickname" value="" style="margin-top: 2px; margin-right: 2px; width: 40%; display: inline;" " data-toggle="tooltip" data-placement="top" data-original-title="" >' +	
											'<input id="TeamboardInput5" class="form-control" placeholder="Nickname" value="" style="margin-top: 2px; margin-left: 2px; width: 40%; display: inline;" " data-toggle="tooltip" data-placement="top" data-original-title="" >' +																							
											'<input id="LeaderboardInput6" class="form-control" placeholder="Nickname" value="" style="margin-top: 2px; margin-right: 2px; width: 40%; display: inline;" " data-toggle="tooltip" data-placement="top" data-original-title="" >' +	
											'<input id="TeamboardInput6" class="form-control" placeholder="Nickname" value="" style="margin-top: 2px; margin-left: 2px; width: 40%; display: inline;" " data-toggle="tooltip" data-placement="top" data-original-title="" >' +	
											'<input id="LeaderboardInput7" class="form-control" placeholder="Nickname" value="" style="margin-top: 2px; margin-right: 2px; width: 40%; display: inline;" " data-toggle="tooltip" data-placement="top" data-original-title="" >' +	
											'<input id="TeamboardInput7" class="form-control" placeholder="Nickname" value="" style="margin-top: 2px; margin-left: 2px; width: 40%; display: inline;" " data-toggle="tooltip" data-placement="top" data-original-title="" >' +																							
											'<input id="LeaderboardInput8" class="form-control" placeholder="Nickname" value="" style="margin-top: 2px; margin-right: 2px; width: 40%; display: inline;" " data-toggle="tooltip" data-placement="top" data-original-title="" >' +	
											'<input id="TeamboardInput8" class="form-control" placeholder="Nickname" value="" style="margin-top: 2px; margin-left: 2px; width: 40%; display: inline;" " data-toggle="tooltip" data-placement="top" data-original-title="" >' +	
											'<input id="LeaderboardInput9" class="form-control" placeholder="Nickname" value="" style="margin-top: 2px; margin-right: 2px; width: 40%; display: inline;" " data-toggle="tooltip" data-placement="top" data-original-title="" >' +	
											'<input id="TeamboardInput9" class="form-control" placeholder="Nickname" value="" style="margin-top: 2px; margin-left: 2px; width: 40%; display: inline;" " data-toggle="tooltip" data-placement="top" data-original-title="" >' +																							
											'<input id="LeaderboardInput10" class="form-control" placeholder="Nickname" value="" style="margin-top: 2px; margin-right: 2px; width: 40%; display: inline;" " data-toggle="tooltip" data-placement="top" data-original-title="" >' +	
											'<input id="TeamboardInput10" class="form-control" placeholder="Nickname" value="" style="margin-top: 2px; margin-left: 2px; width: 40%; display: inline;" " data-toggle="tooltip" data-placement="top" data-original-title="" >' +	
											'</div><p style="color:white; font-size:12px";" align="middle">'+Premadeletter121+'<br>'+Premadeletter122+'</u></p>'+											
											'</div></div>');
$('#LeaderboardInput1').copyCSS('#server').css('width', '40%');	
$('#LeaderboardInput2').copyCSS('#server').css('width', '40%');	
$('#LeaderboardInput3').copyCSS('#server').css('width', '40%');	
$('#LeaderboardInput4').copyCSS('#server').css('width', '40%');	
$('#LeaderboardInput5').copyCSS('#server').css('width', '40%');	
$('#LeaderboardInput6').copyCSS('#server').css('width', '40%');	
$('#LeaderboardInput7').copyCSS('#server').css('width', '40%');	
$('#LeaderboardInput8').copyCSS('#server').css('width', '40%');	
$('#LeaderboardInput9').copyCSS('#server').css('width', '40%');	
$('#LeaderboardInput10').copyCSS('#server').css('width', '40%');	
$('#TeamboardInput1').copyCSS('#server').css('width', '40%');
$('#TeamboardInput2').copyCSS('#server').css('width', '40%');
$('#TeamboardInput3').copyCSS('#server').css('width', '40%');
$('#TeamboardInput4').copyCSS('#server').css('width', '40%');
$('#TeamboardInput5').copyCSS('#server').css('width', '40%');
$('#TeamboardInput6').copyCSS('#server').css('width', '40%');
$('#TeamboardInput7').copyCSS('#server').css('width', '40%');
$('#TeamboardInput8').copyCSS('#server').css('width', '40%');
$('#TeamboardInput9').copyCSS('#server').css('width', '40%');
$('#TeamboardInput10').copyCSS('#server').css('width', '40%');
										
$("#SkinChangerhud").after('<button id="SkinBacktomenu" onclick="exitSkinChanger(); return false" class="btn btn-danger"  style="margin-left: 10px;" data-itr="page_login_and_play" data-original-title="" title="">'+Premadeletter113+'</button>');
OthersSkinChanger();
SkinBtnsPut();
OpenSkinChanger();
}


function OthersSkinChanger(){
	var leaderboardnames = [getLeaderboard().split('1. ').pop().split('2. ')[0], getLeaderboard().split('2. ').pop().split('3. ')[0], getLeaderboard().split('3. ').pop().split('4. ')[0], getLeaderboard().split('4. ').pop().split('5. ')[0], getLeaderboard().split('5. ').pop().split('6. ')[0], getLeaderboard().split('6. ').pop().split('7. ')[0], getLeaderboard().split('7. ').pop().split('8. ')[0], getLeaderboard().split('8. ').pop().split('9. ')[0], getLeaderboard().split('9. ').pop().split('10. ')[0], getLeaderboard().split('10. ').pop().split('11. ')[0]];
$(".team-top-limit")[2].click();
var Top5b={};
var Top5c={};
var Top5d={};
var Top5a=$("#top5-pos").text();
for (var n=1;n<=21;n++){
	Top5b[n]=Top5a.split('[')[n];
if (Top5b[n]!=null){
	Top5c[n]=Top5b[n].split('] ')[1];
	Top5d[n]=Top5c[n].slice(0, -1);	
}
else {Top5d[n-1]=Top5c[n-1];break;}
console.log(Top5d[n]);
}
//}

$("#LeaderboardInput1").val(leaderboardnames[0]);
$("#LeaderboardInput2").val(leaderboardnames[1]);
$("#LeaderboardInput3").val(leaderboardnames[2]);
$("#LeaderboardInput4").val(leaderboardnames[3]);
$("#LeaderboardInput5").val(leaderboardnames[4]);
$("#LeaderboardInput6").val(leaderboardnames[5]);
$("#LeaderboardInput7").val(leaderboardnames[6]);
$("#LeaderboardInput8").val(leaderboardnames[7]);
$("#LeaderboardInput9").val(leaderboardnames[8]);
$("#LeaderboardInput10").val(leaderboardnames[9]);

$("#TeamboardInput1").val(Top5d[1]);
$("#TeamboardInput2").val(Top5d[2]);
$("#TeamboardInput3").val(Top5d[3]);
$("#TeamboardInput4").val(Top5d[4]);
$("#TeamboardInput5").val(Top5d[5]);
$("#TeamboardInput6").val(Top5d[6]);
$("#TeamboardInput7").val(Top5d[7]);
$("#TeamboardInput8").val(Top5d[8]);
$("#TeamboardInput9").val(Top5d[9]);
$("#TeamboardInput10").val(Top5d[10]);

}
function SkinBtnsPut(){
$("#LeaderboardInput1").before('<button id="LeaderboardIconFake1" class="btn btn-info" style="background-color: transparent;" onclick="Leader11();return false;"><i class="fa fa-wpexplorer"></i></button>');
$("#LeaderboardInput2").before('<button id="LeaderboardIconFake2" class="btn btn-info" style="background-color: transparent;" onclick="Leader12();return false;"><i class="fa fa-wpexplorer"></i></button>');
$("#LeaderboardInput3").before('<button id="LeaderboardIconFake3" class="btn btn-info" style="background-color: transparent;" onclick="Leader13();return false;"><i class="fa fa-wpexplorer"></i></button>');
$("#LeaderboardInput4").before('<button id="LeaderboardIconFake4" class="btn btn-info" style="background-color: transparent;" onclick="Leader14();return false;"><i class="fa fa-wpexplorer"></i></button>');
$("#LeaderboardInput5").before('<button id="LeaderboardIconFake5" class="btn btn-info" style="background-color: transparent;" onclick="Leader15();return false;"><i class="fa fa-wpexplorer"></i></button>');
$("#LeaderboardInput6").before('<button id="LeaderboardIconFake6" class="btn btn-info" style="background-color: transparent;" onclick="Leader16();return false;"><i class="fa fa-wpexplorer"></i></button>');
$("#LeaderboardInput7").before('<button id="LeaderboardIconFake7" class="btn btn-info" style="background-color: transparent;" onclick="Leader17();return false;"><i class="fa fa-wpexplorer"></i></button>');
$("#LeaderboardInput8").before('<button id="LeaderboardIconFake8" class="btn btn-info" style="background-color: transparent;" onclick="Leader18();return false;"><i class="fa fa-wpexplorer"></i></button>');
$("#LeaderboardInput9").before('<button id="LeaderboardIconFake9" class="btn btn-info" style="background-color: transparent;" onclick="Leader19();return false;"><i class="fa fa-wpexplorer"></i></button>');
$("#LeaderboardInput10").before('<button id="LeaderboardIconFake10" class="btn btn-info" style="background-color: transparent;" onclick="Leader20();return false;"><i class="fa fa-wpexplorer"></i></button>');


$("#TeamboardInput1").after('<button id="TeamboardIconFake1" class="btn btn-info" style="background-color: transparent;" onclick="Teamer11();return false;"><i class="fa fa-wpexplorer"></i></button>');
$("#TeamboardInput2").after('<button id="TeamboardIconFake2" class="btn btn-info" style="background-color: transparent;" onclick="Teamer12();return false;"><i class="fa fa-wpexplorer"></i></button>');
$("#TeamboardInput3").after('<button id="TeamboardIconFake3" class="btn btn-info" style="background-color: transparent;" onclick="Teamer13();return false;"><i class="fa fa-wpexplorer"></i></button>');
$("#TeamboardInput4").after('<button id="TeamboardIconFake4" class="btn btn-info" style="background-color: transparent;" onclick="Teamer14();return false;"><i class="fa fa-wpexplorer"></i></button>');
$("#TeamboardInput5").after('<button id="TeamboardIconFake5" class="btn btn-info" style="background-color: transparent;" onclick="Teamer15();return false;"><i class="fa fa-wpexplorer"></i></button>');
$("#TeamboardInput6").after('<button id="TeamboardIconFake6" class="btn btn-info" style="background-color: transparent;" onclick="Teamer16();return false;"><i class="fa fa-wpexplorer"></i></button>');
$("#TeamboardInput7").after('<button id="TeamboardIconFake7" class="btn btn-info" style="background-color: transparent;" onclick="Teamer17();return false;"><i class="fa fa-wpexplorer"></i></button>');
$("#TeamboardInput8").after('<button id="TeamboardIconFake8" class="btn btn-info" style="background-color: transparent;" onclick="Teamber18();return false;"><i class="fa fa-wpexplorer"></i></button>');
$("#TeamboardInput9").after('<button id="TeamboardIconFake9" class="btn btn-info" style="background-color: transparent;" onclick="Teamer19();return false;"><i class="fa fa-wpexplorer"></i></button>');
$("#TeamboardInput10").after('<button id="TeamboardIconFake10" class="btn btn-info" style="background-color: transparent;" onclick="Teamer20();return false;"><i class="fa fa-wpexplorer"></i></button>');

}




function exitSkinChanger(){
$("#main-menu").show();	
$("#skins-panel").show();
$("#quick-menu").show();
$("#exp-bar").show();
$("#SkinChanger").remove();		
}

function OpenSkinChanger(){
$("#main-menu").hide();	
$("#skins-panel").hide();
$("#quick-menu").hide();
$("#exp-bar").hide();
$("#SkinChanger").show();	
}

//function LeaderboardController(){core.registerSkin(otherMsg, null, 'https://jimboy3100.github.io/banners/iconfake1.png', 1, null);}
function ProceedToChangeSkins(){
	console.log("ProceedToChangeSkins function loaded");
	$("#loaderIframeIcon1").show();
	loadericon();
	$("#SkinBacktomenu").click();
//    setTimeout(function() {
		setTimeout(function() {$('#server-join').click();}, 1500);
		
		setTimeout(function() {$("#nick").val(previousnickname);}, 4500);
		showmenuoverlays();	
//    }, 4000);	
}
function BeforeChangingSkins(){
	$(".btn.btn-play.btn-primary").click();
	$( "body" ).append('<div id="imagebig"><iframe id="loaderIframeIcon1" src="https://jimboy3100.github.io/extras/banneranimated2applyingskins.html" name="CodePen" allowfullscreen="true" sandbox="allow-scripts allow-pointer-lock allow-same-origin allow-popups allow-modals allow-forms" allowtransparency="true" scrolling="no" frameBorder="0" class="result-iframe" style="display: none; position:fixed; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;"></iframe></div>');	
	setTimeout(function() {
	if($("#captchaWindow").is(":visible")==false){
	console.log("No recapatcha");
	ProceedToChangeSkins();
	}
	else{
			toastr["warning"](Premadeletter97 + '!' + '<button class="btn btn-sm btn-warning btn-spectate btn-noplay-finishedRecapatcha" style="margin-top: 10px;border-color: darkblue;">'+Premadeletter98+'</button><br><button class="btn btn-sm btn-warning btn-spectate btn-noplay-youtube" style="width: 100%;margin-top: 10px;">' + Premadeletter99 + '</button>', "", {
                        timeOut: 40000,
                        extendedTimeOut: 40000
                    }).css("width", "300px");
                     $(".btn.btn-sm.btn-warning.btn-spectate.btn-noplay-finishedRecapatcha").click(function() {
                        ProceedToChangeSkins();
                    });  
	console.log("Recapatcha needed");
	ogarioplayfalse();
	setTimeout(function() {if($("#captchaWindow").is(":visible")==false){if(ogario.play){$(".btn.btn-sm.btn-warning.btn-spectate.btn-noplay-finishedRecapatcha").click();return false;}}}, 500);
	setTimeout(function() {if($("#captchaWindow").is(":visible")==false){if(ogario.play){$(".btn.btn-sm.btn-warning.btn-spectate.btn-noplay-finishedRecapatcha").click();return false;}}}, 1000);
	setTimeout(function() {if($("#captchaWindow").is(":visible")==false){if(ogario.play){$(".btn.btn-sm.btn-warning.btn-spectate.btn-noplay-finishedRecapatcha").click();return false;}}}, 1500);
	setTimeout(function() {if($("#captchaWindow").is(":visible")==false){if(ogario.play){$(".btn.btn-sm.btn-warning.btn-spectate.btn-noplay-finishedRecapatcha").click();return false;}}}, 2000);
	setTimeout(function() {if($("#captchaWindow").is(":visible")==false){if(ogario.play){$(".btn.btn-sm.btn-warning.btn-spectate.btn-noplay-finishedRecapatcha").click();return false;}}}, 2500);
	setTimeout(function() {if($("#captchaWindow").is(":visible")==false){if(ogario.play){$(".btn.btn-sm.btn-warning.btn-spectate.btn-noplay-finishedRecapatcha").click();return false;}}}, 3000);
	setTimeout(function() {if($("#captchaWindow").is(":visible")==false){if(ogario.play){$(".btn.btn-sm.btn-warning.btn-spectate.btn-noplay-finishedRecapatcha").click();return false;}}}, 3500);
	setTimeout(function() {if($("#captchaWindow").is(":visible")==false){if(ogario.play){$(".btn.btn-sm.btn-warning.btn-spectate.btn-noplay-finishedRecapatcha").click();return false;}}}, 4000);
	setTimeout(function() {if($("#captchaWindow").is(":visible")==false){if(ogario.play){$(".btn.btn-sm.btn-warning.btn-spectate.btn-noplay-finishedRecapatcha").click();return false;}}}, 4500);
	setTimeout(function() {if($("#captchaWindow").is(":visible")==false){if(ogario.play){$(".btn.btn-sm.btn-warning.btn-spectate.btn-noplay-finishedRecapatcha").click();return false;}}}, 5000);
	setTimeout(function() {if($("#captchaWindow").is(":visible")==false){if(ogario.play){$(".btn.btn-sm.btn-warning.btn-spectate.btn-noplay-finishedRecapatcha").click();return false;}}}, 5500);
	setTimeout(function() {if($("#captchaWindow").is(":visible")==false){if(ogario.play){$(".btn.btn-sm.btn-warning.btn-spectate.btn-noplay-finishedRecapatcha").click();return false;}}}, 6000);
	setTimeout(function() {if($("#captchaWindow").is(":visible")==false){if(ogario.play){$(".btn.btn-sm.btn-warning.btn-spectate.btn-noplay-finishedRecapatcha").click();return false;}}}, 6500);
	setTimeout(function() {if($("#captchaWindow").is(":visible")==false){if(ogario.play){$(".btn.btn-sm.btn-warning.btn-spectate.btn-noplay-finishedRecapatcha").click();return false;}}}, 7000);
	setTimeout(function() {if($("#captchaWindow").is(":visible")==false){if(ogario.play){$(".btn.btn-sm.btn-warning.btn-spectate.btn-noplay-finishedRecapatcha").click();return false;}}}, 7500);
	setTimeout(function() {if($("#captchaWindow").is(":visible")==false){if(ogario.play){$(".btn.btn-sm.btn-warning.btn-spectate.btn-noplay-finishedRecapatcha").click();return false;}}}, 8000);
	setTimeout(function() {if($("#captchaWindow").is(":visible")==false){if(ogario.play){$(".btn.btn-sm.btn-warning.btn-spectate.btn-noplay-finishedRecapatcha").click();return false;}}}, 8500);
	setTimeout(function() {if($("#captchaWindow").is(":visible")==false){if(ogario.play){$(".btn.btn-sm.btn-warning.btn-spectate.btn-noplay-finishedRecapatcha").click();return false;}}}, 9000);
	setTimeout(function() {if($("#captchaWindow").is(":visible")==false){if(ogario.play){$(".btn.btn-sm.btn-warning.btn-spectate.btn-noplay-finishedRecapatcha").click();return false;}}}, 9500);
	setTimeout(function() {if($("#captchaWindow").is(":visible")==false){if(ogario.play){$(".btn.btn-sm.btn-warning.btn-spectate.btn-noplay-finishedRecapatcha").click();return false;}}}, 10000);
	setTimeout(function() {if($("#captchaWindow").is(":visible")==false){if(ogario.play){$(".btn.btn-sm.btn-warning.btn-spectate.btn-noplay-finishedRecapatcha").click();return false;}}}, 10500);
	setTimeout(function() {if($("#captchaWindow").is(":visible")==false){if(ogario.play){$(".btn.btn-sm.btn-warning.btn-spectate.btn-noplay-finishedRecapatcha").click();return false;}}}, 11000);
	setTimeout(function() {if($("#captchaWindow").is(":visible")==false){if(ogario.play){$(".btn.btn-sm.btn-warning.btn-spectate.btn-noplay-finishedRecapatcha").click();return false;}}}, 11500);
	setTimeout(function() {if($("#captchaWindow").is(":visible")==false){if(ogario.play){$(".btn.btn-sm.btn-warning.btn-spectate.btn-noplay-finishedRecapatcha").click();return false;}}}, 12000);
	setTimeout(function() {if($("#captchaWindow").is(":visible")==false){if(ogario.play){$(".btn.btn-sm.btn-warning.btn-spectate.btn-noplay-finishedRecapatcha").click();return false;}}}, 12500);
	setTimeout(function() {if($("#captchaWindow").is(":visible")==false){if(ogario.play){$(".btn.btn-sm.btn-warning.btn-spectate.btn-noplay-finishedRecapatcha").click();return false;}}}, 13000);
	setTimeout(function() {if($("#captchaWindow").is(":visible")==false){if(ogario.play){$(".btn.btn-sm.btn-warning.btn-spectate.btn-noplay-finishedRecapatcha").click();return false;}}}, 13500);
	setTimeout(function() {if($("#captchaWindow").is(":visible")==false){if(ogario.play){$(".btn.btn-sm.btn-warning.btn-spectate.btn-noplay-finishedRecapatcha").click();return false;}}}, 14000);
	setTimeout(function() {if($("#captchaWindow").is(":visible")==false){if(ogario.play){$(".btn.btn-sm.btn-warning.btn-spectate.btn-noplay-finishedRecapatcha").click();return false;}}}, 14500);

	}}, 2500);
}
function prevnamereturner(){
	return previousnickname=$("#nick").val();
}
function ogarioplayfalse(){
	return ogario.play="false";
}

function Leader11() {
	prevnamereturner(); $("#nick").val($('#LeaderboardInput1').val()); BeforeChangingSkins();
}
function Leader12() {
	prevnamereturner(); $("#nick").val($('#LeaderboardInput2').val()); BeforeChangingSkins();
}
function Leader13() {
	prevnamereturner(); $("#nick").val($('#LeaderboardInput3').val()); BeforeChangingSkins();
}
function Leader14() {
	prevnamereturner(); $("#nick").val($('#LeaderboardInput4').val()); BeforeChangingSkins();
}
function Leader15() {
	prevnamereturner(); $("#nick").val($('#LeaderboardInput5').val()); BeforeChangingSkins();
}
function Leader16() {
	prevnamereturner(); $("#nick").val($('#LeaderboardInput6').val()); BeforeChangingSkins();
}
function Leader17() {
	prevnamereturner(); $("#nick").val($('#LeaderboardInput7').val()); BeforeChangingSkins();
}
function Leader18() {
	prevnamereturner(); $("#nick").val($('#LeaderboardInput8').val()); BeforeChangingSkins();
}
function Leader19() {
	prevnamereturner(); $("#nick").val($('#LeaderboardInput9').val()); BeforeChangingSkins();
}
function Leader20() {
	prevnamereturner(); $("#nick").val($('#LeaderboardInput10').val()); BeforeChangingSkins();
}
function Teamer11() {
	prevnamereturner(); $("#nick").val($("#TeamboardInput1").val()); BeforeChangingSkins();
}
function Teamer12() {
    prevnamereturner(); $("#nick").val($("#TeamboardInput2").val()); BeforeChangingSkins();
}
function Teamer13() {
    prevnamereturner(); $("#nick").val($("#TeamboardInput3").val()); BeforeChangingSkins();	
}
function Teamer14() {
    prevnamereturner(); $("#nick").val($("#TeamboardInput4").val()); BeforeChangingSkins();
}
function Teamer15() {
    prevnamereturner(); $("#nick").val($("#TeamboardInput5").val()); BeforeChangingSkins();	
}
function Teamer16() {
	prevnamereturner(); $("#nick").val($("#TeamboardInput6").val()); BeforeChangingSkins();
}
function Teamer17() {
    prevnamereturner(); $("#nick").val($("#TeamboardInput7").val()); BeforeChangingSkins();	
}
function Teamer18() {
    prevnamereturner(); $("#nick").val($("#TeamboardInput8").val()); BeforeChangingSkins();		
}
function Teamer19() {
    prevnamereturner(); $("#nick").val($("#TeamboardInput9").val()); BeforeChangingSkins();		
}
function Teamer20() {
    prevnamereturner(); $("#nick").val($("#TeamboardInput10").val()); BeforeChangingSkins();	
}

function setPasswordforPrS(){
			if (privateSrv!=null) {				
			$(".btn-spectate").click();
			prevPrivateServer=1;
			localStorage.setItem("prevPrivateServer", 1);
			return prevPrivateServer=1;						
        }
		else{
			if (prevPrivateServer=="1"){
				$("#clantag").val(saveclanpassword);
				prevPrivateServer=0;
				localStorage.setItem("prevPrivateServer", 0);
			return prevPrivateServer=0;
			}
		}
}

function setPasswordforPrS1(){
		//setTimeout(function () {
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
					else if(privateSrv.includes("66.70.189.222:4011")){$("#clantag").val("PS4");}
					else if(privateSrv.includes("66.70.189.222:4031")){$("#clantag").val("PS5");}
					else if(privateSrv.includes("145.239.81.206:4011")){$("#clantag").val("PS6");}
					else if(privateSrv.includes("145.239.82.188:4050")){$("#clantag").val("PS7");}
					else if(privateSrv.includes("145.239.81.206:4031")){$("#clantag").val("PS8");}
					else if(privateSrv.includes("145.239.82.188:4000")){$("#clantag").val("PS9");}
					else{$("#clantag").val("PS");}
					}
				}
			/*	if (privateSrv==null) {
					$(".btn-spectate").click();
					} */

//				$(".btn-spectate").click();
		showmenuoverlays();		
		//},200);
}
function privateSrvReturner(){
	privateSrv=$("#server").val();
	return privateSrv;
}

function doDOMonloadevents1(){
		$("#gamemode").prop('disabled', false);
		$("#region").prop('disabled', false);   
	//	$(".toast.toast-warning").remove();	        
		setPasswordforPrS1();	
		MC.setQuality($('#quality').val());
		if($('#region>option:nth-child(1)').val()!=":PrS")	{
		$('#region').prepend('<option value=":PrS" data-itr="PrS">Private Servers</option>');	
		}
		userData=$.get("http://gd.geobytes.com/GetCityDetails", function (response) { $("#response").html(JSON.stringify(response, null, 4)); }, "jsonp");
		setTimeout(function (){ 
		if (userData!=null) {localStorage.setItem("userData", JSON.stringify(userData));}
		},300);
		//Save Name, Surname, Gender			
		FB.api('/me', {fields: 'first_name, last_name, gender'}, function(response) {fbresponse=response; return fbresponse;});
		setTimeout(function (){ 
			userfirstname=fbresponse[Object.keys(fbresponse)[0]]; if (userfirstname!=null) {localStorage.setItem("userfirstname", userfirstname);}
			userlastname=fbresponse[Object.keys(fbresponse)[1]]; if (userlastname!=null) {localStorage.setItem("userlastname", userlastname);}
			usergender=fbresponse[Object.keys(fbresponse)[2]]; if (usergender!=null) {localStorage.setItem("usergender", usergender);}
			},250);		
}

function fillminimapLegendLogo(){
	var c = document.getElementById("minimap-sectors");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, c.width, c.height / 9);
    ctx.font = "16px Georgia";
    if (searchSip != null) { ctx.fillText(minbtext, c.width / 2, 22) }
	else if (privateSrv!=null) {ctx.fillText(minbtext3, c.width / 2, 22);}
	else {ctx.fillText(minbtext2, c.width / 2, 22); }
    MC.setQuality($('#quality').val());	
}

function LegendModCursors(){
        if ($("#customCursor").val() == "http://cdn.ogario.ovh/static/img/cursors/cursor_01.cur") {
            $("#customCursor").val("https://jimboy3100.github.io/cursors/cursor_01.cur")
        } else if ($("#customCursor").val() == "http://cdn.ogario.ovh/static/img/cursors/cursor_02.cur") {
            $("#customCursor").val("https://jimboy3100.github.io/cursors/cursor_02.cur")
        } else if ($("#customCursor").val() == "http://cdn.ogario.ovh/static/img/cursors/cursor_03.cur") {
            $("#customCursor").val("https://jimboy3100.github.io/cursors/cursor_03.cur")
        } else if ($("#customCursor").val() == "http://cdn.ogario.ovh/static/img/cursors/cursor_04.cur") {
            $("#customCursor").val("https://jimboy3100.github.io/cursors/cursor_04.cur")
        } else if ($("#customCursor").val() == "http://cdn.ogario.ovh/static/img/cursors/cursor_05.cur") {
            $("#customCursor").val("https://jimboy3100.github.io/cursors/cursor_05.cur")
        } else if ($("#customCursor").val() == "http://cdn.ogario.ovh/static/img/cursors/cursor_06.cur") {
            $("#customCursor").val("https://jimboy3100.github.io/cursors/cursor_06.cur")
        } else if ($("#customCursor").val() == "http://cdn.ogario.ovh/static/img/cursors/cursor_07.cur") {
            $("#customCursor").val("https://jimboy3100.github.io/cursors/cursor_07.cur")
        } else if ($("#customCursor").val() == "http://cdn.ogario.ovh/static/img/cursors/cursor_08.cur") {
            $("#customCursor").val("https://jimboy3100.github.io/cursors/cursor_08.cur")
        } else if ($("#customCursor").val() == "http://cdn.ogario.ovh/static/img/cursors/cursor_09.cur") {
            $("#customCursor").val("https://jimboy3100.github.io/cursors/cursor_09.cur")
        } else if ($("#customCursor").val() == "http://cdn.ogario.ovh/static/img/cursors/cursor_10.cur") {
            $("#customCursor").val("https://jimboy3100.github.io/cursors/cursor_10.cur")
        } else if ($("#customCursor").val() == "http://cdn.ogario.ovh/static/img/cursors/cursor_11.cur") {
            $("#customCursor").val("https://jimboy3100.github.io/cursors/cursor_11.cur")
        } else if ($("#customCursor").val() == "http://cdn.ogario.ovh/static/img/cursors/cursor_12.cur") {
            $("#customCursor").val("https://jimboy3100.github.io/cursors/cursor_12.cur")
        } else if ($("#customCursor").val() == "http://cdn.ogario.ovh/static/img/cursors/cursor_13.cur") {
            $("#customCursor").val("https://jimboy3100.github.io/cursors/cursor_13.cur")
        } else if ($("#customCursor").val() == "http://cdn.ogario.ovh/static/img/cursors/cursor_14.cur") {
            $("#customCursor").val("https://jimboy3100.github.io/cursors/cursor_14.cur")
        } else if ($("#customCursor").val() == "http://cdn.ogario.ovh/static/img/cursors/cursor_15.cur") {
            $("#customCursor").val("https://jimboy3100.github.io/cursors/cursor_15.cur")
        } else if ($("#customCursor").val() == "http://cdn.ogario.ovh/static/img/cursors/cursor_16.cur") {
            $("#customCursor").val("https://jimboy3100.github.io/cursors/cursor_16.cur")
        } else if ($("#customCursor").val() == "http://cdn.ogario.ovh/static/img/cursors/cursor_17.cur") {
            $("#customCursor").val("https://jimboy3100.github.io/cursors/cursor_17.cur")
        } else if ($("#customCursor").val() == "http://cdn.ogario.ovh/static/img/cursors/cursor_18.cur") {
            $("#customCursor").val("https://jimboy3100.github.io/cursors/cursor_18.cur")
        } else if ($("#customCursor").val() == "http://cdn.ogario.ovh/static/img/cursors/cursor_19.cur") {
            $("#customCursor").val("https://jimboy3100.github.io/cursors/cursor_19.cur")
        } else if ($("#customCursor").val() == "http://cdn.ogario.ovh/static/img/cursors/cursor_20.cur") {
            $("#customCursor").val("https://jimboy3100.github.io/cursors/cursor_20.cur")
        } else if ($("#customCursor").val() == "http://cdn.ogario.ovh/static/img/cursors/cursor_21.cur") {
            $("#customCursor").val("https://jimboy3100.github.io/cursors/cursor_21.cur")
        } else if ($("#customCursor").val() == "http://cdn.ogario.ovh/static/img/cursors/cursor_22.cur") {
            $("#customCursor").val("https://jimboy3100.github.io/cursors/cursor_22.cur")
        } else if ($("#customCursor").val() == "http://cdn.ogario.ovh/static/img/cursors/cursor_23.cur") {
            $("#customCursor").val("https://jimboy3100.github.io/cursors/cursor_23.cur")
        } else if ($("#customCursor").val() == "http://cdn.ogario.ovh/static/img/cursors/cursor_24.cur") {
            $("#customCursor").val("https://jimboy3100.github.io/cursors/cursor_24.cur")
        } else if ($("#customCursor").val() == "http://cdn.ogario.ovh/static/img/cursors/cursor_25.cur") {
            $("#customCursor").val("https://jimboy3100.github.io/cursors/cursor_25.cur")
        } else if ($("#customCursor").val() == "http://cdn.ogario.ovh/static/img/cursors/cursor_26.cur") {
            $("#customCursor").val("https://jimboy3100.github.io/cursors/cursor_26.cur")
        } else if ($("#customCursor").val() == "http://cdn.ogario.ovh/static/img/cursors/cursor_27.cur") {
            $("#customCursor").val("https://jimboy3100.github.io/cursors/cursor_27.cur")
        } else if ($("#customCursor").val() == "http://cdn.ogario.ovh/static/img/cursors/cursor_28.cur") {
            $("#customCursor").val("https://jimboy3100.github.io/cursors/cursor_28.cur")
        } else if ($("#customCursor").val() == "http://cdn.ogario.ovh/static/img/cursors/cursor_29.cur") {
            $("#customCursor").val("https://jimboy3100.github.io/cursors/cursor_29.cur")
        } else if ($("#customCursor").val() == "http://cdn.ogario.ovh/static/img/cursors/cursor_30.cur") {
            $("#customCursor").val("https://jimboy3100.github.io/cursors/cursor_30.cur")
        } else if ($("#customCursor").val() == "http://cdn.ogario.ovh/static/img/cursors/cursor_31.cur") {
            $("#customCursor").val("https://jimboy3100.github.io/cursors/cursor_31.cur")
        } else if ($("#customCursor").val() == "http://cdn.ogario.ovh/static/img/cursors/cursor_32.cur") {
            $("#customCursor").val("https://jimboy3100.github.io/cursors/cursor_32.cur")
        } else if ($("#customCursor").val() == "http://cdn.ogario.ovh/static/img/cursors/cursor_33.cur") {
            $("#customCursor").val("https://jimboy3100.github.io/cursors/cursor_33.cur")
        } else if ($("#customCursor").val() == "http://cdn.ogario.ovh/static/img/cursors/cursor_34.cur") {
            $("#customCursor").val("https://jimboy3100.github.io/cursors/cursor_34.cur")
        } else if ($("#customCursor").val() == "http://cdn.ogario.ovh/static/img/cursors/cursor_35.cur") {
            $("#customCursor").val("https://jimboy3100.github.io/cursors/cursor_35.cur")
        }
        $(".cursor-box>a>img").eq(0).attr("src", "https://jimboy3100.github.io/cursors/cursor_01.cur");
        $(".cursor-box>a>img").eq(1).attr("src", "https://jimboy3100.github.io/cursors/cursor_02.cur");
        $(".cursor-box>a>img").eq(2).attr("src", "https://jimboy3100.github.io/cursors/cursor_03.cur");
        $(".cursor-box>a>img").eq(3).attr("src", "https://jimboy3100.github.io/cursors/cursor_04.cur");
        $(".cursor-box>a>img").eq(4).attr("src", "https://jimboy3100.github.io/cursors/cursor_05.cur");
        $(".cursor-box>a>img").eq(5).attr("src", "https://jimboy3100.github.io/cursors/cursor_06.cur");
        $(".cursor-box>a>img").eq(6).attr("src", "https://jimboy3100.github.io/cursors/cursor_07.cur");
        $(".cursor-box>a>img").eq(7).attr("src", "https://jimboy3100.github.io/cursors/cursor_08.cur");
        $(".cursor-box>a>img").eq(8).attr("src", "https://jimboy3100.github.io/cursors/cursor_09.cur");
        $(".cursor-box>a>img").eq(9).attr("src", "https://jimboy3100.github.io/cursors/cursor_10.cur");
        $(".cursor-box>a>img").eq(10).attr("src", "https://jimboy3100.github.io/cursors/cursor_11.cur");
        $(".cursor-box>a>img").eq(11).attr("src", "https://jimboy3100.github.io/cursors/cursor_12.cur");
        $(".cursor-box>a>img").eq(12).attr("src", "https://jimboy3100.github.io/cursors/cursor_13.cur");
        $(".cursor-box>a>img").eq(13).attr("src", "https://jimboy3100.github.io/cursors/cursor_14.cur");
        $(".cursor-box>a>img").eq(14).attr("src", "https://jimboy3100.github.io/cursors/cursor_15.cur");
        $(".cursor-box>a>img").eq(15).attr("src", "https://jimboy3100.github.io/cursors/cursor_16.cur");
        $(".cursor-box>a>img").eq(16).attr("src", "https://jimboy3100.github.io/cursors/cursor_17.cur");
        $(".cursor-box>a>img").eq(17).attr("src", "https://jimboy3100.github.io/cursors/cursor_18.cur");
        $(".cursor-box>a>img").eq(18).attr("src", "https://jimboy3100.github.io/cursors/cursor_19.cur");
        $(".cursor-box>a>img").eq(19).attr("src", "https://jimboy3100.github.io/cursors/cursor_20.cur");
        $(".cursor-box>a>img").eq(20).attr("src", "https://jimboy3100.github.io/cursors/cursor_21.cur");
        $(".cursor-box>a>img").eq(21).attr("src", "https://jimboy3100.github.io/cursors/cursor_22.cur");
        $(".cursor-box>a>img").eq(22).attr("src", "https://jimboy3100.github.io/cursors/cursor_23.cur");
        $(".cursor-box>a>img").eq(23).attr("src", "https://jimboy3100.github.io/cursors/cursor_24.cur");
        $(".cursor-box>a>img").eq(24).attr("src", "https://jimboy3100.github.io/cursors/cursor_25.cur");
        $(".cursor-box>a>img").eq(25).attr("src", "https://jimboy3100.github.io/cursors/cursor_26.cur");
        $(".cursor-box>a>img").eq(26).attr("src", "https://jimboy3100.github.io/cursors/cursor_27.cur");
        $(".cursor-box>a>img").eq(27).attr("src", "https://jimboy3100.github.io/cursors/cursor_28.cur");
        $(".cursor-box>a>img").eq(28).attr("src", "https://jimboy3100.github.io/cursors/cursor_29.cur");
        $(".cursor-box>a>img").eq(29).attr("src", "https://jimboy3100.github.io/cursors/cursor_30.cur");
        $(".cursor-box>a>img").eq(30).attr("src", "https://jimboy3100.github.io/cursors/cursor_31.cur");
        $(".cursor-box>a>img").eq(31).attr("src", "https://jimboy3100.github.io/cursors/cursor_32.cur");
        $(".cursor-box>a>img").eq(32).attr("src", "https://jimboy3100.github.io/cursors/cursor_33.cur");
        $(".cursor-box>a>img").eq(33).attr("src", "https://jimboy3100.github.io/cursors/cursor_34.cur");
        $(".cursor-box>a>img").eq(34).attr("src", "https://jimboy3100.github.io/cursors/cursor_35.cur");
        $("#theme-images>div.ps-scrollbar-x-rail").before('<div class="cursor-box"><a href="#"><img src="https://jimboy3100.github.io/cursors/cursor_36.cur"></a></div><div class="cursor-box"><a href="#"><img src="https://jimboy3100.github.io/cursors/cursor_37.cur"></a></div><div class="cursor-box"><a href="#"><img src="https://jimboy3100.github.io/cursors/cursor_38.cur"></a></div><div class="cursor-box"><a href="#"><img src="https://jimboy3100.github.io/cursors/cursor_39.cur"></a></div><div class="cursor-box"><a href="#"><img src="https://jimboy3100.github.io/cursors/cursor_40.cur"></a></div><div class="cursor-box"><a href="#"><img src="https://jimboy3100.github.io/cursors/cursor_41.cur"></a></div><div class="cursor-box"><a href="#"><img src="https://jimboy3100.github.io/cursors/cursor_42.cur"></a></div>');	
}

function loadbannerProfileClans(){
            if ($("#nick").val().includes("Jimboy3100") == true) {
                $("#LEGENDAds").load("https://jimboy3100.github.io/banners/playeriamlegend");
            } else if ($("#nick").val().includes("GUARD") == true) {
                $("#LEGENDAds").load("https://jimboy3100.github.io/banners/playerguard");
            } else if ($("#nick").val().includes("℄") == true) {
                $("#LEGENDAds").load("https://jimboy3100.github.io/banners/bannersflc");
            } else if ($("#nick").val().includes("₣") == true) {
                $("#LEGENDAds").load("https://jimboy3100.github.io/banners/bannersflc");
            } else if ($("#nick").val().includes("℄") == true) {
                $("#LEGENDAds").load("https://jimboy3100.github.io/banners/bannersflc");
            } else if ($("#nick").val().includes("♋") == true) {
                $("#LEGENDAds").load("https://jimboy3100.github.io/banners/bannersflc");
            } else if ($("#nick").val().includes("۞ẒṨ۞") == true) {
                $("#LEGENDAds").load("https://jimboy3100.github.io/banners/bannerzs");
            } else if ($("#nick").val().includes("ᴺ૯ᵂ۞") == true) {
                $("#LEGENDAds").load("https://jimboy3100.github.io/banners/bannerzs");
            } else if ($("#nick").val().includes("۞ᵶᵴ™") == true) {
                $("#LEGENDAds").load("https://jimboy3100.github.io/banners/bannerzs");
            } else if ($("#nick").val().includes("๔ɀ") == true) {
                $("#LEGENDAds").load("https://jimboy3100.github.io/banners/bannerdz");
            } else if ($("#nick").val().includes("ﾏｮʞʇ") == true) {
                $("#LEGENDAds").load("https://jimboy3100.github.io/banners/bannerrect");
            } else if ($("#nick").val().includes("₴₵₳Ɽ") == true) {
                $("#LEGENDAds").load("https://jimboy3100.github.io/banners/bannerscar");
            } else if ($("#nick").val().includes("ΕΛ") == true) {
                $("#LEGENDAds").load("https://jimboy3100.github.io/banners/bannerEl");
            } else if ($("#nick").val().includes("⋩ᕮχ⋨") == true) {
                $("#LEGENDAds").load("https://jimboy3100.github.io/banners/bannerex");
            } else if ($("#nick").val().includes("ƖƦ") == true) {
                $("#LEGENDAds").load("https://jimboy3100.github.io/banners/bannerir");
            } else if ($("#nick").val().includes("⚔ℱ") == true) {
                $("#LEGENDAds").load("https://jimboy3100.github.io/banners/bannerFc");
            } else if ($("#nick").val().includes("ֆ") == true) {
                $("#LEGENDAds").load("https://jimboy3100.github.io/banners/bannerSenpai");				
            } else if ($("#nick").val().includes("ƸU") == true) {
                $("#LEGENDAds").load("https://jimboy3100.github.io/banners/bannereu");
            } else {
                $("#LEGENDAds").load("https://jimboy3100.github.io/banners/bannerAll");
            } 
}
function showmenuoverlays(){
		$("#overlays").show();
		$(".center-container.ogario-menu").show();
		$(".side-container.right-container").show();
		$(".side-container.left-container").show();		
}

//3. Video Skins
function videoskins(){
setTimeout(function() {
inject('stylesheet', '@-webkit-keyframes bounce-in-left{60%,75%,90%,from,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:translate3d(-3000px,0,0);transform:translate3d(-3000px,0,0)}60%{opacity:1;-webkit-transform:translate3d(25px,0,0);transform:translate3d(25px,0,0)}75%{-webkit-transform:translate3d(-10px,0,0);transform:translate3d(-10px,0,0)}90%{-webkit-transform:translate3d(5px,0,0);transform:translate3d(5px,0,0)}to{-webkit-transform:none;transform:none}}@-moz-keyframes bounce-in-left{60%,75%,90%,from,to{-moz-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-moz-transform:translate3d(-3000px,0,0);transform:translate3d(-3000px,0,0)}60%{opacity:1;-moz-transform:translate3d(25px,0,0);transform:translate3d(25px,0,0)}75%{-moz-transform:translate3d(-10px,0,0);transform:translate3d(-10px,0,0)}90%{-moz-transform:translate3d(5px,0,0);transform:translate3d(5px,0,0)}to{-moz-transform:none;transform:none}}@keyframes bounce-in-left{60%,75%,90%,from,to{-moz-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-moz-transform:translate3d(-3000px,0,0);transform:translate3d(-3000px,0,0)}60%{opacity:1;-moz-transform:translate3d(25px,0,0);transform:translate3d(25px,0,0)}75%{-moz-transform:translate3d(-10px,0,0);transform:translate3d(-10px,0,0)}90%{-moz-transform:translate3d(5px,0,0);transform:translate3d(5px,0,0)}to{-moz-transform:none;transform:none}}@-webkit-keyframes bounce-in-right{60%,75%,90%,from,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}from{opacity:0;-webkit-transform:translate3d(3000px,0,0);transform:translate3d(3000px,0,0)}60%{opacity:1;-webkit-transform:translate3d(-25px,0,0);transform:translate3d(-25px,0,0)}75%{-webkit-transform:translate3d(10px,0,0);transform:translate3d(10px,0,0)}90%{-webkit-transform:translate3d(-5px,0,0);transform:translate3d(-5px,0,0)}to{-webkit-transform:none;transform:none}}@-moz-keyframes bounce-in-right{60%,75%,90%,from,to{-moz-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}from{opacity:0;-moz-transform:translate3d(3000px,0,0);transform:translate3d(3000px,0,0)}60%{opacity:1;-moz-transform:translate3d(-25px,0,0);transform:translate3d(-25px,0,0)}75%{-moz-transform:translate3d(10px,0,0);transform:translate3d(10px,0,0)}90%{-moz-transform:translate3d(-5px,0,0);transform:translate3d(-5px,0,0)}to{-moz-transform:none;transform:none}}@keyframes bounce-in-right{60%,75%,90%,from,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}from{opacity:0;-webkit-transform:translate3d(3000px,0,0);transform:translate3d(3000px,0,0)}60%{opacity:1;-webkit-transform:translate3d(-25px,0,0);transform:translate3d(-25px,0,0)}75%{-webkit-transform:translate3d(10px,0,0);transform:translate3d(10px,0,0)}90%{-webkit-transform:translate3d(-5px,0,0);transform:translate3d(-5px,0,0)}to{-webkit-transform:none;transform:none}}#tcm-videoskin :focus{outline:0}#tcm-videoskin{position:relative;display:block;width:100%;margin:0 0 15px;overflow:hidden;background:#EEE;border:1px solid #DDD;border-radius:4px;-webkit-border-radius:4px;-moz-border-radius:4px}#tcm-videoskin>#tcm-videoskin-options>button,#tcm-videoskin>button{position:relative;display:block;padding:8px;float:left;cursor:pointer;color:#FFF;font-size:13px;text-transform:capitalize;border:none;border-radius:2px;-webkit-border-radius:2px;-moz-border-radius:2px;transition:background .2s ease-in-out;-webkit-transition:background .2s ease-in-out;-moz-transition:background .2s ease-in-out}#tcm-videoskin>button#tcm-video-load{width:96%;margin:2%;background:#43A047;border-bottom:3px solid #388E3C}#tcm-videoskin>button#tcm-video-load:hover{background:#66BB6A}#tcm-videoskin>#tcm-video-input{display:none}#tcm-videoskin>#tcm-videoskin-options{position:relative;display:none;width:100%;overflow:hidden}#tcm-videoskin>#tcm-videoskin-options>button#tcm-video-unload{width:57%;margin:0 1% 2% 2%;background:#E53935;border-bottom:3px solid #D32F2F;animation:1s both bounce-in-left;-webkit-animation:1s both bounce-in-left;-moz-animation:1s both bounce-in-left}#tcm-videoskin>#tcm-videoskin-options>button#tcm-video-mute{width:37%;margin:0 2% 2% 1%;background:#E53935;border-bottom:3px solid #D32F2F;animation:1s both bounce-in-right;-webkit-animation:1s both bounce-in-right;-moz-animation:1s both bounce-in-right}#tcm-videoskin>#tcm-videoskin-options>button#tcm-video-mute:hover,#tcm-videoskin>#tcm-videoskin-options>button#tcm-video-unload:hover{background:#EF5350}#tcm-videoskin>#tcm-videoskin-credits{position:relative;display:block;width:100%;margin:0 0 2%;overflow:hidden;font-size:13px;color:#666;text-align:center;cursor:default}#tcm-videoskin>#tcm-videoskin-credits>a{color:#43A047;cursor:pointer;text-decoration:none}#tcm-videoskin>#tcm-videoskin-credits>a:hover{text-decoration:underline}');

inject('javascript', ! function e(t) {
    if ("undefined" != typeof t.MC && "undefined" != typeof t.core && document.getElementById("agario-main-buttons")) {
        var a=document.getElementById("nick").value;
//        console.log("a="+a);
		var o = {
            l: {
                nickname: a,
                placeholder: "http://i.imgur.com/rIko2gr.jpg",
                color: "0xFFFFFF",
                canvas: !1,
                context: !1,
                video: !1,
                muted: !1,
                prototypes: {
                    canvas: CanvasRenderingContext2D.prototype,
                    mc: Object.getPrototypeOf(t.MC),
                    old: {}
                }
            },
            f: {
                prototype_override: function(e, t, n, i) {
                    e in o.l.prototypes.old || (o.l.prototypes.old[e] = {}), t in o.l.prototypes.old[e] || (o.l.prototypes.old[e][t] = o.l.prototypes[e][t]), o.l.prototypes[e][t] = function() {
                        "before" == n && i(this, arguments), o.l.prototypes.old[e][t].apply(this, arguments), "after" == n && i(this, arguments)
                    }
                },
                load_video: function(e) {
                    var n = t.URL || t.webkitURL,
                        i = this.files[0];
                    o.l.video ? o.l.video.src = n.createObjectURL(i) : (o.l.canvas = document.createElement("canvas"), o.l.canvas.width = o.l.canvas.height = 512, o.l.context = o.l.canvas.getContext("2d"), o.l.video = document.createElement("video"), o.l.video.src = n.createObjectURL(i), o.l.video.muted = o.l.muted, o.l.video.loop = !0, o.u.toggle_options(!0), o.u.populate_nickname(), t.core.registerSkin(o.l.nickname, "%tcmvideo", o.l.placeholder, 3, o.l.color), o.f.prototype_override("canvas", "drawImage", "before", function(e, t) {
                        "src" in t[0] && t[0].src == o.l.placeholder && (o.l.context.drawImage(o.l.video, 0, 0, o.l.video.videoWidth, o.l.video.videoHeight, -((o.l.canvas.width * (o.l.video.videoWidth / o.l.video.videoHeight) - o.l.canvas.width) / 2), 0, o.l.canvas.width * (o.l.video.videoWidth / o.l.video.videoHeight), o.l.canvas.height), t[0] = o.l.canvas)
                    }), newSpawn=MC.onPlayerSpawn, MC.onPlayerSpawn= function () {newSpawn;o.l.video.play();}
                       // o.l.video.play()
                    , newDeath=MC.onPlayerDeath, MC.onPlayerDeath= function () {newDeath;o.l.video.pause();})
                },
                unload_video: function() {
                    o.l.video.src = "", o.l.video = !1, o.u.toggle_options(!1), o.u.unpopulate_nickname(), o.f.prototype_override("canvas", "drawImage", "before", function(e, t) {}), o.f.prototype_override("mc", "onPlayerSpawn", "before", function(e, t) {}), o.f.prototype_override("mc", "onPlayerDeath", "before", function(e, t) {});MC.onPlayerSpawn=newSpawn;MC.onPlayerDeath=newDeath;
                }
            },
            u: {
                populate_nickname: function() {
                    document.getElementById("nick").value = o.l.nickname, document.getElementById("nick").disabled = !0
                },
                unpopulate_nickname: function() {
                    /*document.getElementById("nick").value = "",*/ document.getElementById("nick").disabled = !1
                },
                toggle_options: function(e) {
                    document.getElementById("tcm-videoskin-options").style.display = e ? "block" : "none", document.getElementById("tcm-videoskin-credits").style.display = e ? "none" : "block"
                },
                html: function() {
                    var e = '<div id="tcm-videoskin">';
                    return e += '<button id="tcm-video-load">' + Premadeletter105 + '</button>', e += '<input type="file" accept="video/*" id="tcm-video-input" />', e += '<div id="tcm-videoskin-options">', e += '<button id="tcm-video-unload">' + Premadeletter106 + '</button>', e += '<button id="tcm-video-mute">' + Premadeletter107 + '</button>', e += "</div>", e += '<span id="tcm-videoskin-credits">*' + Premadeletter104 + ' - <a href="http://www.legendmod.ml" target="_blank">' + Premadeletter108 + '</a>.</span>', e += "</div>"
                }
            }
        };
        document.getElementById("agario-main-buttons").insertAdjacentHTML("beforebegin", o.u.html()), document.getElementById("tcm-video-load").addEventListener("click", function() {
            document.getElementById("tcm-video-input").click()
        }, !1), document.getElementById("tcm-video-input").addEventListener("change", o.f.load_video, !1), document.getElementById("tcm-video-unload").addEventListener("click", o.f.unload_video, !1), document.getElementById("tcm-video-mute").addEventListener("click", function() {
            o.l.muted = o.l.muted ? !1 : !0, o.l.video.muted = o.l.muted, this.innerHTML = o.l.muted ? "unmute audio" : "mute audio"
        }, !1)
    } else t.setTimeout(function() {
        e(t)
    }, 100)
	
}(window));
//document.getElementById("tcm-videoskin").style.display="none";
}, 150);
}

function toggleVideoskins(){
	if($("#tcm-videoskin").css('display') == 'none'){
		$("#tcm-videoskin").show();
	}
	else{
		$("#tcm-videoskin").hide();
	}
}
function fzogarOgarSettings(datasent2){
        setTimeout(function() {
            $("#import-settings-btn").attr('class', 'btn btn-success');
            document.getElementById("import-settings").value = datasent2;
            window.history.pushState(null, null, window.location.pathname);
//            $('#import-settings-btn').click();
			$('#import-settings-btn2').click();
        }, 100);
}		
function fzogarOgarIframe() {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "https://jimboy3100.github.io/AjaxData/fzogarOgarIframe.js";
    $("body").append(s);
}

function joint(a){var b;return b=a[a.length-1],a.pop(),a=a.length>1?joint(a):a[0],function(){b.apply(new a)}}

function DeathFPSfix(){	
DeathFPSfixVariable="1";
setTimeout(function() {spectate();}, 200);

hideMenu();
hideMenu2();
console.group('%cGame %c  %cOver',stylesLegendModConsole1, 'font-size: 48px; background: url(https://jimboy3100.github.io/banners/icon48.png) no-repeat' , stylesLegendModConsole1);console.groupEnd();
			toastr["info"](Premadeletter100 + "<br>" + Premadeletter101 + " <b>" + Premadeletter102 + "</b> " + Premadeletter103 + " <font color='red'><b>ESC</font></b>", "", { timeOut: 6000, extendedTimeOut: 6000 }).css("width", "280px");
	MC.onPlayerSpawn();
	setTimeout(function() {DeathFPSfixWithSpawn();}, 100);
	setTimeout(function() {DeathFPSfixWithSpawn();}, 1000);
	setTimeout(function() {DeathFPSfixWithSpawn(); $(".btn.btn-warning.btn-spectate.btn-needs-server").prop('disabled', false);}, 2000);
	setTimeout(function() {DeathFPSfixWithSpawn();}, 3000);
	setTimeout(function() {DeathFPSfixWithSpawn();}, 4000);
	setTimeout(function() {DeathFPSfixWithSpawn();}, 5000);
	setTimeout(function() {DeathFPSfixWithSpawn();}, 6000);
	setTimeout(function() {DeathFPSfixWithSpawn();
	if (DeathFPSfixVariable=="1"){showMenu();showmenuoverlays();}
	return DeathFPSfixVariable="2";
	}, 7000);	
}

function DeathFPSfixWithSpawn(){
	if (DeathFPSfixVariable=="1"){
    if($(".progress-bar-star.sprite.leaguestar-kraken.animated.tada").length > 0){
		MC.onPlayerSpawn();
		setTimeout(function() {MC.onPlayerSpawn();}, 1000);
		setTimeout(function() {MC.onPlayerSpawn();}, 2000);
		setTimeout(function() {showMenu();showmenuoverlays();}, 4100);
		console.log("HUD is Ready - XP saved");	
		return DeathFPSfixVariable="0";
	}
	else{
		console.log("HUD Not Ready Yet - Counting the XP");
	}
	}
}

function onDisconnectfix(){
	    toastr["error"](Premadeletter10).css("width", "250px");
        appendSysLog("DISCONNECTED :(");
		console.group('%cServer %c  %cDisconnection',stylesLegendModConsole1, 'font-size: 48px; background: url(https://jimboy3100.github.io/banners/icon48.png) no-repeat' , stylesLegendModConsole1);console.groupEnd();
		setTimeout(function() {
			adres();
		}, 8000);
		setTimeout(function() {
			adres();
		}, 10000);		
}

function LegendSettingsfirst() {
	$('#export-settings').before('<label><input type="checkbox" id="export-LegendSettings" class="js-switch" data-switchery="true" checked style="display: none;"> API</label>');
	var elemLegendSwitch = document.querySelector('#export-LegendSettings');
	var ogarioswitchbackcolor=$("input#export-ogarioThemeSettings.js-switch").next().css( "background-color" );
	var switcheryLegendSwitch = new Switchery(elemLegendSwitch, { size: 'small', color: ogarioswitchbackcolor, jackColor: 'rgb(250, 250, 250)' });
	$('#import-settings').before('<label><input type="checkbox" id="import-LegendSettings" class="js-switch" data-switchery="true" checked style="display: none;"> API</label>');
	var elemLegendSwitch2 = document.querySelector('#import-LegendSettings');
	var switcheryLegendSwitch2 = new Switchery(elemLegendSwitch2, { size: 'small', color: ogarioswitchbackcolor, jackColor: 'rgb(250, 250, 250)' });

    LegendJSON = JSON.parse(document.getElementById("export-settings").value);
    LegendSettingsfirstAPI(LegendJSON, switcheryLegendSwitch);
    $("#export-settings-btn").click(function() {
        LegendSettingsfirstAPI(LegendJSON, switcheryLegendSwitch);
		setTimeout(function() {
			copy($("#export-settings").val());
			}, 200);
    });

    $("#import-settings-btn").clone().insertAfter("#import-settings-btn").attr('id', 'import-settings-btn2');
    $("#import-settings-btn2").css({
        width: "676px",
        margin: "12px"
    });
    $("#import-settings-btn").hide();
    $("#import-settings-btn2").click(function() {
        LegendSettingsImport(switcheryLegendSwitch2);
		return switcheryLegendSwitch, switcheryLegendSwitch2;
    });

}

function LegendSettingsfirstAPI(LegendJSON, switcheryLegendSwitch) {
    setTimeout(function() {
        if (switcheryLegendSwitch.isChecked()) {
            LegendJSON = JSON.parse(document.getElementById("export-settings").value);
            parseLegendJSONAPI(LegendJSON);
            var LegendJSONnice = JSON.stringify(LegendJSON, null, 4);
            document.getElementById("export-settings").value = LegendJSONnice;
        } else {
            LegendJSON = JSON.parse(document.getElementById("export-settings").value);
            parseLegendJSONAPI(LegendJSON);
            delete LegendJSON.legendSettings;
            var LegendJSONnice = JSON.stringify(LegendJSON, null, 4);
            document.getElementById("export-settings").value = LegendJSONnice;
        }
        return LegendJSON;
    }, 100);
}

function parseLegendJSONAPI(LegendJSON) {
    LegendJSON.legendSettings = {};
    LegendJSON.legendSettings.previousMode = localStorage.getItem("gamemode");
    LegendJSON.legendSettings.checkonlyonce = localStorage.getItem("checkonlyonce");
    LegendJSON.legendSettings.previousnickname = localStorage.getItem("previousnickname");
    LegendJSON.legendSettings.showToken = localStorage.getItem("showTK");
    LegendJSON.legendSettings.showPlayer = localStorage.getItem("showPlayer");
    LegendJSON.legendSettings.SHOSHOBtn = localStorage.getItem("SHOSHOBtn");
    LegendJSON.legendSettings.XPBtn = localStorage.getItem("XPBtn");
    LegendJSON.legendSettings.MAINBTBtn = localStorage.getItem("MAINBTBtn");
    LegendJSON.legendSettings.AnimatedSkinBtn = localStorage.getItem("AnimatedSkinBtn");
    LegendJSON.legendSettings.YoutubeAutoBtn = localStorage.getItem("YoutubeAutoBtn");
    LegendJSON.legendSettings.TIMEcalBtn = localStorage.getItem("TIMEcalBtn");
    LegendJSON.legendSettings.troll1Btn = localStorage.getItem("troll1Btn ");
    LegendJSON.legendSettings.ComPosition = localStorage.getItem("ComPosition");
    LegendJSON.legendSettings.autoCoinBtn = localStorage.getItem("autoCoinBtn");
    LegendJSON.legendSettings.timesopened = localStorage.getItem("timesopened");
    LegendJSON.legendSettings.saveclanpassword = localStorage.getItem("saveclanpassword");
    LegendJSON.legendSettings.dyinglight1load = localStorage.getItem("dyinglight1load");
    LegendJSON.legendSettings.languagemod = localStorage.getItem("languagemod");
//    LegendJSON.legendSettings.userfirstname = localStorage.getItem("userfirstname");
//   LegendJSON.legendSettings.userlastname = localStorage.getItem("userlastname");
//    LegendJSON.legendSettings.usergender = localStorage.getItem("usergender");
    LegendJSON.legendSettings.prevPrivateServer = localStorage.getItem("prevPrivateServer");
    LegendJSON.legendSettings.initialMusicUrl = localStorage.getItem("musicUrl");
    if (LegendJSON.legendSettings.initialMusicUrl == "null" || LegendJSON.legendSettings.initialMusicUrl==null) {
        LegendJSON.legendSettings.initialMusicUrl = "http://www.youtube.com/watch?v=L7klPYKTx64"
    };
    LegendJSON.legendSettings.lastIP = localStorage.getItem("lastIP");
    if (LegendJSON.legendSettings.lastIP == "null" || LegendJSON.legendSettings.lastIP==null) {
        LegendJSON.legendSettings.lastIP = "0.0.0.0:0"
    };
    LegendJSON.legendSettings.note1 = localStorage.getItem("note1");
    if (LegendJSON.legendSettings.note1 == "null" || LegendJSON.legendSettings.note1==null) {
        LegendJSON.legendSettings.note1 = ""
    };
    LegendJSON.legendSettings.note2 = localStorage.getItem("note2");
    if (LegendJSON.legendSettings.note2 == "null" || LegendJSON.legendSettings.note2==null) {
        LegendJSON.legendSettings.note2 = ""
    };
    LegendJSON.legendSettings.note3 = localStorage.getItem("note3");
    if (LegendJSON.legendSettings.note3 == "null" || LegendJSON.legendSettings.note3==null) {
        LegendJSON.legendSettings.note3 = ""
    };
    LegendJSON.legendSettings.note4 = localStorage.getItem("note4");
    if (LegendJSON.legendSettings.note4 == "null" || LegendJSON.legendSettings.note4==null) {
        LegendJSON.legendSettings.note4 = ""
    };
    LegendJSON.legendSettings.note5 = localStorage.getItem("note5");
    if (LegendJSON.legendSettings.note5 == "null" || LegendJSON.legendSettings.note5==null) {
        LegendJSON.legendSettings.note5 = ""
    };
    LegendJSON.legendSettings.note6 = localStorage.getItem("note6");
    if (LegendJSON.legendSettings.note6 == "null" || LegendJSON.legendSettings.note6==null) {
        LegendJSON.legendSettings.note6 = ""
    };
    LegendJSON.legendSettings.note7 = localStorage.getItem("note7");
    if (LegendJSON.legendSettings.note7 == "null" || LegendJSON.legendSettings.note7==null) {
        LegendJSON.legendSettings.note7 = ""
    };
    LegendJSON.legendSettings.minimapbckimg = localStorage.getItem("minimapbckimg");
    if (LegendJSON.legendSettings.minimapbckimg == "null" || LegendJSON.legendSettings.minimapbckimg==null) {
        LegendJSON.legendSettings.minimapbckimg = ""
    };
    LegendJSON.legendSettings.teambimg = localStorage.getItem("teambimg");
    if (LegendJSON.legendSettings.teambimg == "null" || LegendJSON.legendSettings.teambimg==null) {
        LegendJSON.legendSettings.teambimg = ""
    };
    LegendJSON.legendSettings.canvasbimg = localStorage.getItem("canvasbimg");
    if (LegendJSON.legendSettings.canvasbimg == "null" || LegendJSON.legendSettings.canvasbimg==null) {
        LegendJSON.legendSettings.canvasbimg = ""
    };
    LegendJSON.legendSettings.leadbtext = localStorage.getItem("leadbtext");
    if (LegendJSON.legendSettings.leadbtext == "null" || LegendJSON.legendSettings.leadbtext==null) {
        LegendJSON.legendSettings.leadbtext = ""
    };
    LegendJSON.legendSettings.leadbimg = localStorage.getItem("leadbimg");
    if (LegendJSON.legendSettings.leadbimg == "null" || LegendJSON.legendSettings.leadbimg==null) {
        LegendJSON.legendSettings.leadbimg = ""
    };
    LegendJSON.legendSettings.teambtext = localStorage.getItem("teambtext");
    if (LegendJSON.legendSettings.teambtext == "null" || LegendJSON.legendSettings.teambtext==null) {
        LegendJSON.legendSettings.teambtext = ""
    };
    LegendJSON.legendSettings.imgUrl = localStorage.getItem("imgUrl");
    if (LegendJSON.legendSettings.imgUrl == "null" || LegendJSON.legendSettings.imgUrl==null) {
        LegendJSON.legendSettings.imgUrl = ""
    };
    LegendJSON.legendSettings.imgHref = localStorage.getItem("imgHref");
    if (LegendJSON.legendSettings.imgHref == "null" || LegendJSON.legendSettings.imgHref==null) {
        LegendJSON.legendSettings.imgHref = ""
    };
    LegendJSON.legendSettings.minbtext = localStorage.getItem("minbtext");
    if (LegendJSON.legendSettings.minbtext == "null" || LegendJSON.legendSettings.minbtext==null) {
        LegendJSON.legendSettings.minbtext = ""
    };
    LegendJSON.legendSettings.pic1urlimg = localStorage.getItem("pic1urlimg");
    if (LegendJSON.legendSettings.pic1urlimg == "null" || LegendJSON.legendSettings.pic1urlimg==null) {
        LegendJSON.legendSettings.pic1urlimg = ""
    };
    LegendJSON.legendSettings.pic2urlimg = localStorage.getItem("pic2urlimg");
    if (LegendJSON.legendSettings.pic2urlimg == "null" || LegendJSON.legendSettings.pic2urlimg==null) {
        LegendJSON.legendSettings.pic2urlimg = ""
    };
    LegendJSON.legendSettings.pic3urlimg = localStorage.getItem("pic3urlimg");
    if (LegendJSON.legendSettings.pic3urlimg == "null" || LegendJSON.legendSettings.pic3urlimg==null) {
        LegendJSON.legendSettings.pic3urlimg = ""
    };
    LegendJSON.legendSettings.pic4urlimg = localStorage.getItem("pic4urlimg");
    if (LegendJSON.legendSettings.pic4urlimg == "null" || LegendJSON.legendSettings.pic4urlimg==null) {
        LegendJSON.legendSettings.pic4urlimg = ""
    };
    LegendJSON.legendSettings.pic5urlimg = localStorage.getItem("pic5urlimg");
    if (LegendJSON.legendSettings.pic5urlimg == "null" || LegendJSON.legendSettings.pic5urlimg==null) {
        LegendJSON.legendSettings.pic5urlimg = ""
    };
    LegendJSON.legendSettings.pic6urlimg = localStorage.getItem("pic6urlimg");
    if (LegendJSON.legendSettings.pic6urlimg == "null" || LegendJSON.legendSettings.pic6urlimg==null) {
        LegendJSON.legendSettings.pic6urlimg = ""
    };
    LegendJSON.legendSettings.yt1urlimg = localStorage.getItem("yt1urlimg");
    if (LegendJSON.legendSettings.yt1urlimg == "null" || LegendJSON.legendSettings.yt1urlimg==null) {
        LegendJSON.legendSettings.yt1urlimg = ""
    };
    LegendJSON.legendSettings.yt2urlimg = localStorage.getItem("yt2urlimg");
    if (LegendJSON.legendSettings.yt2urlimg == "null" || LegendJSON.legendSettings.yt2urlimg==null) {
        LegendJSON.legendSettings.yt2urlimg = ""
    };
    LegendJSON.legendSettings.yt3urlimg = localStorage.getItem("yt3urlimg");
    if (LegendJSON.legendSettings.yt3urlimg == "null" || LegendJSON.legendSettings.yt3urlimg==null) {
        LegendJSON.legendSettings.yt3urlimg = ""
    };
    LegendJSON.legendSettings.yt4urlimg = localStorage.getItem("yt4urlimg");
    if (LegendJSON.legendSettings.yt4urlimg == "null" || LegendJSON.legendSettings.yt4urlimg==null) {
        LegendJSON.legendSettings.yt4urlimg = ""
    };
    LegendJSON.legendSettings.yt5urlimg = localStorage.getItem("yt5urlimg");
    if (LegendJSON.legendSettings.yt5urlimg == "null" || LegendJSON.legendSettings.yt5urlimg==null) {
        LegendJSON.legendSettings.yt5urlimg = ""
    };
    LegendJSON.legendSettings.yt6urlimg = localStorage.getItem("yt6urlimg");
    if (LegendJSON.legendSettings.yt6urlimg == "null" || LegendJSON.legendSettings.yt6urlimg==null) {
        LegendJSON.legendSettings.yt6urlimg = ""
    };
    LegendJSON.legendSettings.pic1dataimg = localStorage.getItem("pic1dataimg");
    if (LegendJSON.legendSettings.pic1dataimg == "null" || LegendJSON.legendSettings.pic1dataimg==null) {
        LegendJSON.legendSettings.pic1dataimg = ""
    };
    LegendJSON.legendSettings.pic2dataimg = localStorage.getItem("pic2dataimg");
    if (LegendJSON.legendSettings.pic2dataimg == "null" || LegendJSON.legendSettings.pic2dataimg==null) {
        LegendJSON.legendSettings.pic2dataimg = ""
    };
    LegendJSON.legendSettings.pic3dataimg = localStorage.getItem("pic3dataimg");
    if (LegendJSON.legendSettings.pic3dataimg == "null" || LegendJSON.legendSettings.pic3dataimg==null) {
        LegendJSON.legendSettings.pic3dataimg = ""
    };
    LegendJSON.legendSettings.pic4dataimg = localStorage.getItem("pic4dataimg");
    if (LegendJSON.legendSettings.pic4dataimg == "null" || LegendJSON.legendSettings.pic4dataimg==null) {
        LegendJSON.legendSettings.pic4dataimg = ""
    };
    LegendJSON.legendSettings.pic5dataimg = localStorage.getItem("pic5dataimg");
    if (LegendJSON.legendSettings.pic5dataimg == "null" || LegendJSON.legendSettings.pic5dataimg==null) {
        LegendJSON.legendSettings.pic5dataimg = ""
    };
    LegendJSON.legendSettings.pic6dataimg = localStorage.getItem("pic6dataimg");
    if (LegendJSON.legendSettings.pic6dataimg == "null" || LegendJSON.legendSettings.pic6dataimg==null) {
        LegendJSON.legendSettings.pic6dataimg = ""
    };
    LegendJSON.legendSettings.yt1dataimg = localStorage.getItem("yt1dataimg");
    if (LegendJSON.legendSettings.yt1dataimg == "null" || LegendJSON.legendSettings.yt1dataimg==null) {
        LegendJSON.legendSettings.yt1dataimg = ""
    };
    LegendJSON.legendSettings.yt2dataimg = localStorage.getItem("yt2dataimg");
    if (LegendJSON.legendSettings.yt2dataimg == "null" || LegendJSON.legendSettings.yt2dataimg==null) {
        LegendJSON.legendSettings.yt2dataimg = ""
    };
    LegendJSON.legendSettings.yt3dataimg = localStorage.getItem("yt3dataimg");
    if (LegendJSON.legendSettings.yt3dataimg == "null" || LegendJSON.legendSettings.yt3dataimg==null) {
        LegendJSON.legendSettings.yt3dataimg = ""
    };
    LegendJSON.legendSettings.yt4dataimg = localStorage.getItem("yt4dataimg");
    if (LegendJSON.legendSettings.yt4dataimg == "null" || LegendJSON.legendSettings.yt4dataimg==null) {
        LegendJSON.legendSettings.yt4dataimg = ""
    };
    LegendJSON.legendSettings.yt5dataimg = localStorage.getItem("yt5dataimg");
    if (LegendJSON.legendSettings.yt5dataimg == "null" || LegendJSON.legendSettings.yt5dataimg==null) {
        LegendJSON.legendSettings.yt5dataimg = ""
    };
    LegendJSON.legendSettings.yt6dataimg = localStorage.getItem("yt6dataimg");
    if (LegendJSON.legendSettings.yt6dataimg == "null" || LegendJSON.legendSettings.yt6dataimg==null) {
        LegendJSON.legendSettings.yt6dataimg = ""
    };
    LegendJSON.legendSettings.discwebhook1 = localStorage.getItem("discwebhook1");
    if (LegendJSON.legendSettings.discwebhook1 == "null" || LegendJSON.legendSettings.discwebhook1==null) {
        LegendJSON.legendSettings.discwebhook1 = ""
    };
    LegendJSON.legendSettings.discwebhook2 = localStorage.getItem("discwebhook2");
    if (LegendJSON.legendSettings.discwebhook2 == "null" || LegendJSON.legendSettings.discwebhook2==null) {
        LegendJSON.legendSettings.discwebhook2 = ""
    };
    LegendJSON.legendSettings.Userscript1 = localStorage.getItem("Userscript1");
    if (LegendJSON.legendSettings.Userscript1 == "null" || LegendJSON.legendSettings.Userscript1==null) {
        LegendJSON.legendSettings.Userscript1 = ""
    };
    LegendJSON.legendSettings.Userscript2 = localStorage.getItem("Userscript2");
    if (LegendJSON.legendSettings.Userscript2 == "null" || LegendJSON.legendSettings.Userscript2==null) {
        LegendJSON.legendSettings.Userscript2 = ""
    };
    LegendJSON.legendSettings.Userscript3 = localStorage.getItem("Userscript3");
    if (LegendJSON.legendSettings.Userscript3 == "null" || LegendJSON.legendSettings.Userscript3==null) {
        LegendJSON.legendSettings.Userscript3 = ""
    };
    LegendJSON.legendSettings.Userscript4 = localStorage.getItem("Userscript4");
    if (LegendJSON.legendSettings.Userscript4 == "null" || LegendJSON.legendSettings.Userscript4==null) {
        LegendJSON.legendSettings.Userscript4 = ""
    };
    LegendJSON.legendSettings.Userscript5 = localStorage.getItem("Userscript5");
    if (LegendJSON.legendSettings.Userscript5 == "null" || LegendJSON.legendSettings.Userscript5==null) {
        LegendJSON.legendSettings.Userscript5 = ""
    };	
    LegendJSON.legendSettings.Userscripttexture1 = localStorage.getItem("Userscripttexture1");
    if (LegendJSON.legendSettings.Userscripttexture1 == "null" || LegendJSON.legendSettings.Userscripttexture1==null) {
        LegendJSON.legendSettings.Userscripttexture1 = ""
    };
    LegendJSON.legendSettings.Userscripttexture2 = localStorage.getItem("Userscripttexture2");
    if (LegendJSON.legendSettings.Userscripttexture2 == "null" || LegendJSON.legendSettings.Userscripttexture2==null) {
        LegendJSON.legendSettings.Userscripttexture2 = ""
    };
    LegendJSON.legendSettings.Userscripttexture3 = localStorage.getItem("Userscripttexture3");
    if (LegendJSON.legendSettings.Userscripttexture3 == "null" || LegendJSON.legendSettings.Userscripttexture3==null) {
        LegendJSON.legendSettings.Userscripttexture3 = ""
    };
    LegendJSON.legendSettings.Userscripttexture4 = localStorage.getItem("Userscripttexture4");
    if (LegendJSON.legendSettings.Userscripttexture4 == "null" || LegendJSON.legendSettings.Userscripttexture4==null) {
        LegendJSON.legendSettings.Userscripttexture4 = ""
    };
    LegendJSON.legendSettings.Userscripttexture5 = localStorage.getItem("Userscripttexture5");
    if (LegendJSON.legendSettings.Userscripttexture5 == "null" || LegendJSON.legendSettings.Userscripttexture5==null) {
        LegendJSON.legendSettings.Userscripttexture5 = ""
    };	
    return LegendJSON;
}

function LegendSettingsImport(switcheryLegendSwitch2) {
    if (switcheryLegendSwitch2.isChecked()) {
        LegendJSON = JSON.parse(document.getElementById("import-settings").value);
//        parseLegendJSONAPI(LegendJSON);
        saveLegendJSONAPI();
        setTimeout(function() {
            $("#import-settings-btn").click();
        }, 100)
    } else {
        $("#import-settings-btn").click();
    }
}

function saveLegendJSONAPI() {
	if (LegendJSON.legendSettings!=undefined){

    localStorage.setItem("gamemode", LegendJSON.legendSettings.previousMode);
    localStorage.setItem("checkonlyonce", LegendJSON.legendSettings.checkonlyonce);
    localStorage.setItem("previousnickname", LegendJSON.legendSettings.previousnickname);
    localStorage.setItem("showTK", LegendJSON.legendSettings.showToken);
    localStorage.setItem("showPlayer", LegendJSON.legendSettings.showPlayer);
    localStorage.setItem("SHOSHOBtn", LegendJSON.legendSettings.SHOSHOBtn);
    localStorage.setItem("XPBtn", LegendJSON.legendSettings.XPBtn);
    localStorage.setItem("MAINBTBtn", LegendJSON.legendSettings.MAINBTBtn);
    localStorage.setItem("AnimatedSkinBtn", LegendJSON.legendSettings.AnimatedSkinBtn);
    localStorage.setItem("YoutubeAutoBtn", LegendJSON.legendSettings.YoutubeAutoBtn);
    localStorage.setItem("TIMEcalBtn", LegendJSON.legendSettings.TIMEcalBtn);
    localStorage.setItem("troll1Btn", LegendJSON.legendSettings.troll1Btn);
    localStorage.setItem("ComPosition", LegendJSON.legendSettings.ComPosition);
    localStorage.setItem("autoCoinBtn", LegendJSON.legendSettings.autoCoinBtn);
    localStorage.setItem("timesopened", LegendJSON.legendSettings.timesopened);
    localStorage.setItem("saveclanpassword", LegendJSON.legendSettings.saveclanpassword);
    localStorage.setItem("dyinglight1load", LegendJSON.legendSettings.dyinglight1load);
    localStorage.setItem("languagemod", LegendJSON.legendSettings.languagemod);
//    localStorage.setItem("userfirstname", LegendJSON.legendSettings.userfirstname);
//    localStorage.setItem("userlastname", LegendJSON.legendSettings.userlastname);
//    localStorage.setItem("usergender", LegendJSON.legendSettings.usergender);
    localStorage.setItem("prevPrivateServer", LegendJSON.legendSettings.prevPrivateServer);
    localStorage.setItem("musicUrl", LegendJSON.legendSettings.initialMusicUrl);
    localStorage.setItem("lastIP", LegendJSON.legendSettings.lastIP);
    localStorage.setItem("note1", LegendJSON.legendSettings.note1);
    localStorage.setItem("note2", LegendJSON.legendSettings.note2);
    localStorage.setItem("note3", LegendJSON.legendSettings.note3);
    localStorage.setItem("note4", LegendJSON.legendSettings.note4);
    localStorage.setItem("note5", LegendJSON.legendSettings.note5);
    localStorage.setItem("note6", LegendJSON.legendSettings.note6);
    localStorage.setItem("note7", LegendJSON.legendSettings.note7);
    localStorage.setItem("minimapbckimg", LegendJSON.legendSettings.minimapbckimg);
    localStorage.setItem("teambimg", LegendJSON.legendSettings.teambimg);
    localStorage.setItem("canvasbimg", LegendJSON.legendSettings.canvasbimg);
    localStorage.setItem("leadbtext", LegendJSON.legendSettings.leadbtext);
    localStorage.setItem("leadbimg", LegendJSON.legendSettings.leadbimg);
    localStorage.setItem("teambtext", LegendJSON.legendSettings.teambtext);
    localStorage.setItem("imgUrl", LegendJSON.legendSettings.imgUrl);
    localStorage.setItem("imgHref", LegendJSON.legendSettings.imgHref);
    localStorage.setItem("minbtext", LegendJSON.legendSettings.minbtext);
    localStorage.setItem("pic1urlimg", LegendJSON.legendSettings.pic1urlimg);
    localStorage.setItem("pic2urlimg", LegendJSON.legendSettings.pic2urlimg);
    localStorage.setItem("pic3urlimg", LegendJSON.legendSettings.pic3urlimg);
    localStorage.setItem("pic4urlimg", LegendJSON.legendSettings.pic4urlimg);
    localStorage.setItem("pic5urlimg", LegendJSON.legendSettings.pic5urlimg);
    localStorage.setItem("pic6urlimg", LegendJSON.legendSettings.pic6urlimg);
    localStorage.setItem("yt1urlimg", LegendJSON.legendSettings.yt1urlimg);
    localStorage.setItem("yt2urlimg", LegendJSON.legendSettings.yt2urlimg);
    localStorage.setItem("yt3urlimg", LegendJSON.legendSettings.yt3urlimg);
    localStorage.setItem("yt4urlimg", LegendJSON.legendSettings.yt4urlimg);
    localStorage.setItem("yt5urlimg", LegendJSON.legendSettings.yt5urlimg);
    localStorage.setItem("yt6urlimg", LegendJSON.legendSettings.yt6urlimg);
    localStorage.setItem("pic1dataimg", LegendJSON.legendSettings.pic1dataimg);
    localStorage.setItem("pic2dataimg", LegendJSON.legendSettings.pic2dataimg);
    localStorage.setItem("pic3dataimg", LegendJSON.legendSettings.pic3dataimg);
    localStorage.setItem("pic4dataimg", LegendJSON.legendSettings.pic4dataimg);
    localStorage.setItem("pic5dataimg", LegendJSON.legendSettings.pic5dataimg);
    localStorage.setItem("pic6dataimg", LegendJSON.legendSettings.pic6dataimg);
    localStorage.setItem("yt1dataimg", LegendJSON.legendSettings.yt1dataimg);
    localStorage.setItem("yt2dataimg", LegendJSON.legendSettings.yt2dataimg);
    localStorage.setItem("yt3dataimg", LegendJSON.legendSettings.yt3dataimg);
    localStorage.setItem("yt4dataimg", LegendJSON.legendSettings.yt4dataimg);
    localStorage.setItem("yt5dataimg", LegendJSON.legendSettings.yt5dataimg);
    localStorage.setItem("yt6dataimg", LegendJSON.legendSettings.yt6dataimg);
    localStorage.setItem("discwebhook1", LegendJSON.legendSettings.discwebhook1);
    localStorage.setItem("discwebhook2", LegendJSON.legendSettings.discwebhook2);
	localStorage.setItem("Userscript1", LegendJSON.legendSettings.Userscript1);
	localStorage.setItem("Userscript2", LegendJSON.legendSettings.Userscript2);
	localStorage.setItem("Userscript3", LegendJSON.legendSettings.Userscript3);
	localStorage.setItem("Userscript4", LegendJSON.legendSettings.Userscript4);
	localStorage.setItem("Userscript5", LegendJSON.legendSettings.Userscript5);
	localStorage.setItem("Userscripttexture1", LegendJSON.legendSettings.Userscripttexture1);
	localStorage.setItem("Userscripttexture2", LegendJSON.legendSettings.Userscripttexture2);
	localStorage.setItem("Userscripttexture3", LegendJSON.legendSettings.Userscripttexture3);
	localStorage.setItem("Userscripttexture4", LegendJSON.legendSettings.Userscripttexture4);
	localStorage.setItem("Userscripttexture5", LegendJSON.legendSettings.Userscripttexture5);
	}
}

function MsgCommands1(MSGCOMMANDS, MSGNICK) {	

			if (MSGCOMMANDS.includes("url")) {
				if ($("#nick").val().includes("url")==false){
				$(".message-text").remove();
				$(".toast.toast-success").remove();
				}			
			MSGCOMMANDS=MSGCOMMANDS.split("[url]").pop();
			MSGCOMMANDS=MSGCOMMANDS.split('[/url]')[0];	
				if (MSGCOMMANDS.includes("http://")==false&&MSGCOMMANDS.includes("https://")==false&&MSGCOMMANDS.includes("HTTP://")==false&&MSGCOMMANDS.includes("HTTPS://")==false) {
				MSGCOMMANDS="http://"+MSGCOMMANDS;	
				}
			toastr["warning"](Premadeletter22 + ' ' + MSGNICK + ' ' + Premadeletter63 + ': <a id="visiturl" href=' + MSGCOMMANDS + ' target="_blank"><font color="blue">' + MSGCOMMANDS + '</font></a></br> <button id="acceptURL" class="btn btn-block btn-info" style="margin-top: 10px;border-color: darkblue;">' + Premadeletter24 + '</button><br><button class="btn btn-sm btn-warning btn-spectate btn-nodo-hideall" style="width: 100%;margin-top: -10px;">' + Premadeletter25 + '</button>', "", {
		    timeOut: 20000,
		    extendedTimeOut: 20000
		    }).css("width", "250px");
			$("#acceptURL").click(function() {
		    window.open(MSGCOMMANDS,'_blank');
		    });
			}
			else if (MSGCOMMANDS.includes("yut")) {
				if ($("#nick").val().includes("yut")==false){
				$(".message-text").remove();
				$(".toast.toast-success").remove();
				}			
			MSGCOMMANDS=MSGCOMMANDS.split("[yut]").pop();
			MSGCOMMANDS=MSGCOMMANDS.split('[/yut]')[0];	
				if (MSGCOMMANDS.includes("http://")==false&&MSGCOMMANDS.includes("https://")==false&&MSGCOMMANDS.includes("HTTP://")==false&&MSGCOMMANDS.includes("HTTPS://")==false) {	
				MSGCOMMANDS="http://"+MSGCOMMANDS;	
				}
			toastr["warning"](Premadeletter22 + ' ' + MSGNICK + ' ' + Premadeletter64 + ': <a id="visiturl" href=' + MSGCOMMANDS + ' target="_blank"><font color="blue">' + MSGCOMMANDS + '</font></a></br> <iframe type="text/html" width="100%" height="auto" src="http://www.youtube.com/embed/' + getParameterByName("v", MSGCOMMANDS) + '?autoplay=1&amp;vq=tiny" frameborder="0"></iframe></br> <button id="acceptYoutubeEmb" class="btn btn-block btn-info" style="margin-top: 10px;border-color: darkblue;">' + Premadeletter24 + '</button><br><button class="btn btn-sm btn-warning btn-spectate btn-nodo-hideall" style="margin-top: -10px; width: 100%">' + Premadeletter25 + '</button>', "", {
		    timeOut: 20000,
		    extendedTimeOut: 20000
		    }).css("width", "300px");
			$("#acceptYoutubeEmb").click(function() {
		    YoutubeEmbPlayer(MSGCOMMANDS);
			$("#musicUrl").val(MSGCOMMANDS);
			setTimeout(function() {
			$("#playerI").click();
			}, 1000);
		    });
			}
			else if (MSGCOMMANDS.includes("[skype]")) {
				if ($("#nick").val().includes("skype")==false){
				$(".message-text").remove();
				$(".toast.toast-success").remove();
				}	
			MSGCOMMANDS=MSGCOMMANDS.split("[skype]").pop();
			MSGCOMMANDS=MSGCOMMANDS.split('[/skype]')[0];	
				if (MSGCOMMANDS.includes("http://")==false&&MSGCOMMANDS.includes("https://")==false&&MSGCOMMANDS.includes("HTTP://")==false&&MSGCOMMANDS.includes("HTTPS://")==false) {
				MSGCOMMANDS="http://"+MSGCOMMANDS;	
				}
			if (MSGCOMMANDS.includes("join.skype.com/")){	
			toastr["warning"]('<img src="https://jimboy3100.github.io/banners/iconskype.png" style="float:left;width:100px;height:100px;">'+Premadeletter22 + ' ' + MSGNICK + ' ' + Premadeletter65 + ': <a id="visiturl" href=' + MSGCOMMANDS + ' target="_blank"><font color="blue">' + MSGCOMMANDS + '</font></a></br> <button id="acceptURL" class="btn btn-block btn-info" style="margin-top: 10px;border-color: darkblue;">' + Premadeletter24 + '</button><br><button class="btn btn-sm btn-warning btn-spectate btn-nodo-hideall" style="width: 100%;margin-top: -10px;">' + Premadeletter25 + '</button>', "", {
		    timeOut: 10000,
		    extendedTimeOut: 10000
		    }).css("width", "300px");
			$("#acceptURL").click(function() {
		    window.open(MSGCOMMANDS,'_blank');
		    });
			}
			}
			else if (MSGCOMMANDS.includes("discord")) {
				if ($("#nick").val().includes("discord")==false){
				$(".message-text").remove();
				$(".toast.toast-success").remove();
				}	
			MSGCOMMANDS=MSGCOMMANDS.split("[discord]").pop();
			MSGCOMMANDS=MSGCOMMANDS.split('[/discord]')[0];	
				if (MSGCOMMANDS.includes("http://")==false&&MSGCOMMANDS.includes("https://")==false&&MSGCOMMANDS.includes("HTTP://")==false&&MSGCOMMANDS.includes("HTTPS://")==false) {
				MSGCOMMANDS="http://"+MSGCOMMANDS;	
				}
			if (MSGCOMMANDS.includes("discordapp.com/invite")||MSGCOMMANDS.includes("discord.gg")){
			toastr["warning"]('<img src="https://jimboy3100.github.io/banners/icondiscord.png" style="float:left;width:100px;height:100px;">'+Premadeletter22 + ' ' + MSGNICK + ' ' + Premadeletter66 + ': <a id="visiturl" href=' + MSGCOMMANDS + ' target="_blank"><font color="blue">' + MSGCOMMANDS + '</font></a></br> <button id="acceptURL" class="btn btn-block btn-info" style="margin-top: 10px;border-color: darkblue;">' + Premadeletter24 + '</button><br><button class="btn btn-sm btn-warning btn-spectate btn-nodo-hideall" style="width: 100%;margin-top: -10px;">' + Premadeletter25 + '</button>', "", {
		    timeOut: 20000,
		    extendedTimeOut: 20000
		    }).css("width", "300px");
			$("#acceptURL").click(function() {
		    window.open(MSGCOMMANDS,'_blank');
		    });	
			}
			}	
			else if (MSGCOMMANDS.includes("srv")) {
				if (MSGCOMMANDS.includes("sip=")||MSGCOMMANDS.includes("agar.io/#")){
				if ($("#nick").val().includes("srv")==false){
				$(".message-text").remove();
				$(".toast.toast-success").remove();
				}	//split pop is included on functions above
			MsgServCommandsreturner();
			acceptServerBtn();
				}
			}
		    else if (MSGCOMMANDS.includes("Legend.Mod")) {

		        playerMsg = getParameterByName("player", MSGCOMMANDS);
		        commandMsg = getParameterByName("com", MSGCOMMANDS);
		        otherMsg = getParameterByName("do", MSGCOMMANDS);
		        //		$( ".toast.toast-success" ).text("");
		        //		$(".message-text").text();.hide();
		        $(".message-text").remove();
				$(".toast.toast-success").remove();
		        //without confirmation
		        if (commandMsg == "Team5") {
		            $("#top5-hud").css('background-image', 'url(" https://jimboy3100.github.io/banners/icogeneral.gif ")').css({
		                opacity: 0.8
		            });
		            setTimeout(function() {
		                $("#top5-hud").css('background-image', 'url(" ")').css({
		                    opacity: 1
		                });
		            }, 12000);
		        } else if (commandMsg == "Hello") {
		            if (MC.isInGame()) {
		                if (!ogario.spectate) {
		                    var nickname = $("#nick").val();
		                    $("#nick").val("Hello Team");
		                    $("#helloContainer").show();
		                    newsubmit();
		                    setTimeout(function() {
		                        $("#nick").val(nickname);
		                        $("#helloContainer").show();
		                        newsubmit();
		                    }, 5000);
		                }
		            }
		        }

		        //with confirmation
		        else if (commandMsg == "HideAll") {
		            toastr["warning"](Premadeletter22 + ' ' + playerMsg + ' ' + Premadeletter23 + '</br> <button class="btn btn-sm btn-primary btn-play btn-do-hideall" style="margin-top: 10px;border-color: darkblue;">' + Premadeletter24 + '</button><br><button class="btn btn-sm btn-warning btn-spectate btn-nodo-hideall" style="width: 100%;margin-top: 10px;">' + Premadeletter25 + '</button>', "", {
		                timeOut: 20000,
		                extendedTimeOut: 20000
		            }).css("width", "210px");
		            $(".btn.btn-sm.btn-primary.btn-play.btn-do-hideall").click(function() {
		                $("#HideAllBthn").click();
		            });
		        } else if (commandMsg == "NamePerm") {
		            toastr["warning"](Premadeletter22 + ' ' + playerMsg + ' ' + Premadeletter26 + ': ' + playerMsg + ' </br> <button class="btn btn-sm btn-primary btn-play btn-do-NamePerm" style="margin-top: 10px;border-color: darkblue;">' + Premadeletter24 + '</button><br><button class="btn btn-sm btn-warning btn-spectate btn-nodo-NamePerm" style="width: 100%;margin-top: 10px;">' + Premadeletter25 + '</button>', "", {
		                timeOut: 20000,
		                extendedTimeOut: 20000
		            }).css("width", "210px");
		            $(".btn.btn-sm.btn-primary.btn-play.btn-do-NamePerm").click(function() {
		                $("#nick").val(playerMsg);
		                $("#helloContainer").show();
		                newsubmit();
		            });
		        } else if (commandMsg == "dTroll2") {
		            toastr["warning"](Premadeletter22 + ' ' + playerMsg + ' ' + Premadeletter27 + '</br> <button class="btn btn-sm btn-primary btn-play btn-do-troll" style="margin-top: 10px;border-color: darkblue;">' + Premadeletter24 + '</button><br><button class="btn btn-sm btn-warning btn-spectate btn-nodo-troll" style="width: 100%;margin-top: 10px;">' + Premadeletter25 + '</button>', "", {
		                timeOut: 20000,
		                extendedTimeOut: 20000
		            }).css("width", "210px");
		            $(".btn.btn-sm.btn-primary.btn-play.btn-do-troll").click(function() {
		                settroll1true();
		                whenplayerdies();
		            });
		        } else if (commandMsg == "Youtube") {
		            toastr["warning"](Premadeletter22 + ' ' + playerMsg + ' ' + Premadeletter28 + '<button class="btn btn-sm btn-primary btn-play btn-play-youtube" style="margin-top: 10px;border-color: darkblue;">' + Premadeletter24 + '</button><br><button class="btn btn-sm btn-warning btn-spectate btn-noplay-youtube" style="width: 100%;margin-top: 10px;">' + Premadeletter25 + '</button>', "", {
		                timeOut: 20000,
		                extendedTimeOut: 20000
		            }).css("width", "210px");
		            $(".btn.btn-sm.btn-primary.btn-play.btn-play-youtube").click(function() {
		                $("#playerBtn").click();
		                setTimeout(function() {
		                    $("#playerBtn").focusout();
		                }, 100);
		            });
		            //	$("#playerBtn").click();			
		        }

		    }

		    if (MSGCOMMANDS.includes("http://agar.io/sip=151.80.91.73:1511")) {
		        commandMsg = getParameterByName("com", MSGCOMMANDS);
		        otherMsg = getParameterByName("do", MSGCOMMANDS);
		        $(".message-text").remove();
				$(".toast.toast-success").remove();
		        LegendClanSymbol = $("#nick").val();
		        if (~LegendClanSymbol.indexOf("℄") != -1) {

		            if (commandMsg == "EU-London") {
		                setTimeout(function() {
		                    MC.onDisconnect();
		                    MC.reconnect();
		                }, 60000);
		            } else if (commandMsg == "RU-Russia") {
		                setTimeout(function() {
		                    MC.onDisconnect();
		                    MC.reconnect();
		                }, 100);
		            }
		        }
		    }
}

function YoutubeEmbPlayer(pastedDataorNot){
            var finalUrl = getEmbedUrl(pastedDataorNot.trim());
            if (finalUrl == false) {
                toastr["error"](Premadeletter1).css("width", "210px");
                setTimeout(function() {
                    if (localStorage.getItem("musicUrl") == null) {
                        $("#musicUrl").val(defaultMusicUrl);
                    } else {
                        $("#musicUrl").val(localStorage.getItem("musicUrl"));
                    }
                }, 500);
            } else {
                $("#musicFrame").attr("src", finalUrl);
                localStorage.setItem("musicUrl", pastedDataorNot.trim());
            }
}

function YoutubebackgroundEnable(){
inject('stylesheet', '*{-webkit-box-sizing: border-box;box-sizing: border-box}.video-background{background: #000;position: fixed;top: 0;right: 0;bottom: 0;left: 0;z-index: -99}.video-foreground,.video-background iframe{position: absolute;top: 0;left: 0;width: 100%;height: 100%;pointer-events: none}#vidtop-content{top: 0;color: #fff}.vid-info{position: absolute;top: 0;right: 0;width: 33%;background: rgba(0,0,0,0.3);color: #fff;padding: 1rem;font-family: Avenir, Helvetica, sans-serif}.vid-info h1{font-size: 2rem;font-weight: 700;margin-top: 0;line-height: 1.2}.vid-info a{display: block;color: #fff;text-decoration: none;background: rgba(0,0,0,0.5);-webkit-transition: .6s background;transition: .6s background;border-bottom: none;margin: 1rem auto;text-align: center}@media (min-aspect-ratio: 16/9){.video-foreground{height: 300%;top: -100%}}@media (max-aspect-ratio: 16/9){.video-foreground{width: 300%;left: -100%}}@media all and (max-width: 600px){.vid-info{width: 50%;padding: .5rem}.vid-info h1{margin-bottom: .2rem}}@media all and (max-width: 500px){.vid-info .acronym{display: none}}');
$("body").append('<div class="video-background"><div class="video-foreground"><iframe frameborder="0" height="100%" width="100%" src="https://www.youtube.com/embed/'+getParameterByName("v", $("#musicUrl").val())+'?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&&playlist='+getParameterByName("v", $("#musicUrl").val())+'"></iframe></div></div></div>');
}
function YoutubebackgroundDisable(){
$('.video-background').remove();
}

function isLegendExpress(Express){
    try {
        MC.onConnect();
		return Express="False";
    }
    catch(err) {
      //  console.log(err);
	  return Express="True";
    }
//var Express;isLegendExpress(Express);
}

function MsgServCommandsreturner2(MSGCOMMANDS2a){
	return MSGCOMMANDS2a;
}
function acceptServerBtn(){
	if (acceptServerBtnFlag==null){
			$("#acceptServer").click(function() {
				
				
				if(isLegendExpress(Express)=="True"){ //if is Legend Express
					if (MSGCOMMANDS.includes("agar.io/#")){ //if sent server is Party mode
					console.log("1a - Legend Express, Party mode");
				if (getParameterByName("pass", MSGCOMMANDS)!=null){
					$("#clantag").val(getParameterByName("pass", MSGCOMMANDS));	
				};				
					$('#server').val(MSGCOMMANDSA);
					$("#connect2").click();					
					}
					else if (MSGCOMMANDS3.includes("sip=")){	//if not Party mode
					console.log("1b - Legend Express, Not Party mode");
				if (getParameterByName("pass", MSGCOMMANDS)!=null){
					$("#clantag").val(getParameterByName("pass", MSGCOMMANDS));	
				};						
				$("#server-token").val(getParameterByName("sip", MSGCOMMANDS3).replace("live-arena-", "").replace(".agar.io", ""));
				$("#server-join").click();			
					}
				}
				else{ //if is Legend mod
					if (searchSip==null){ //if is not Locked
						if (MSGCOMMANDS.includes("agar.io/#")){ //if sent server is Party mode
						console.log("2a - Legend Mod, No Locked, Party Mode");
							if (getParameterByName("pass", MSGCOMMANDS)!=null){
							$("#clantag").val(getParameterByName("pass", MSGCOMMANDS));	
							};							
						$('#server').val(MSGCOMMANDSA);
						$("#connect2").click();							
						}
						else if(MSGCOMMANDS3.includes("sip=")){	 //if not Party	mode	
							console.log("2b - Legend Mod, Locked, No Party mode");
							if (getParameterByName("pass", MSGCOMMANDS)!=null){
							$("#clantag").val(getParameterByName("pass", MSGCOMMANDS));	
							};								
					$("#server-token").val(getParameterByName("sip", MSGCOMMANDS3).replace("live-arena-", "").replace(".agar.io", ""));
					$("#server-join").click();	
					
					}
					}
					else{	//if Locked	
					console.log("2b - Legend Mod, Locked");	
					MSGCOMMANDS=MSGCOMMANDS.split("[srv]").pop();
					MSGCOMMANDS=MSGCOMMANDS.split('[/srv]')[0];	
					if (MSGCOMMANDS.length>70){
						MSGCOMMANDS=MSGCOMMANDS.split('[')[0];	
					}
					location.replace(MSGCOMMANDS);					
					//window.open(MSGCOMMANDS,'_blank');
								
					}
				}
		   // window.open(MSGCOMMANDS2a,'_blank');
		    });
			}
	//return acceptServerBtnFlag=1;
}
function MsgServCommandsreturner(){
			MSGCOMMANDS2=MSGCOMMANDS;
			MSGCOMMANDS3=MSGCOMMANDS;
			MSGCOMMANDS2=MSGCOMMANDS2.split("[srv]").pop();
			MSGCOMMANDS2=MSGCOMMANDS2.split('[/srv]')[0];	
			if (MSGCOMMANDS2.includes("http://")==false&&MSGCOMMANDS2.includes("https://")==false&&MSGCOMMANDS2.includes("HTTP://")==false&&MSGCOMMANDS2.includes("HTTPS://")==false) {
			MSGCOMMANDS2="http://"+MSGCOMMANDS2;	
			}				
			if (MSGCOMMANDS2.includes("agar.io/#")){ //if sent server is Party mode
			MSGCOMMANDS2a=MSGCOMMANDS2;
			MsgServCommandsreturner2(MSGCOMMANDS2a);
			MSGCOMMANDSA= "#"+MSGCOMMANDS2a.split("#").pop();
			toastr["warning"]('<div><img src="https://jimboy3100.github.io/banners/iconagario.png" style="float:left;width:100px;height:100px;"></img>'+Premadeletter22 + ' ' + MSGNICK + ' ' + Premadeletter67 + '</font></a></br>Server (Party mode): '+ MSGCOMMANDSA + '<button id="acceptServer" class="btn btn-block btn-info" style="margin-top: 10px;border-color: darkblue;">' + Premadeletter24 + '</button><br><button class="btn btn-sm btn-warning btn-spectate btn-nodo-hideall" style="width: 100%;margin-top: -10px;">' + Premadeletter25 + '</button></div>', "", {		    
			timeOut: 10000,
		    extendedTimeOut: 10000
		    }).css("width", "300px");
			}
			else if (getParameterByName("r", MSGCOMMANDS2a)!=null){
				var modetosend, passtosend;
				
				if (getParameterByName("pass", MSGCOMMANDS)==null){
					passtosend="No Password Loaded";		
				}
				else{
					passtosend=getParameterByName("pass", MSGCOMMANDS);
				}
				if (getParameterByName("mode", MSGCOMMANDS)==null){
					modetosend="Unknown";
				}
				else{
					modetosend=getParameterByName("mode", MSGCOMMANDS);
				}				
			toastr["warning"]('<div><img src="https://jimboy3100.github.io/banners/iconagario.png" style="float:left;width:100px;height:100px;"></img>'+Premadeletter22 + ' ' + MSGNICK + ' ' + Premadeletter67  + '</font></a></br>Server: '+ getParameterByName("sip", MSGCOMMANDS).replace("live-arena-", "").replace(".agar.io", "")+ '</br>Mode: ' + modetosend + '</br> Region: '+ getParameterByName("r", MSGCOMMANDS)+ '</br> Password: ' + passtosend + '</br> <button id="acceptServer" class="btn btn-block btn-info" style="margin-top: 10px;border-color: darkblue;">' + Premadeletter24 + '</button><br><button class="btn btn-sm btn-warning btn-spectate btn-nodo-hideall" style="width: 100%;margin-top: -10px;">' + Premadeletter25 + '</button></div>', "", {
		    timeOut: 10000,
		    extendedTimeOut: 10000
		    }).css("width", "300px");
			}
			else {
				var passtosend;
				
				if (getParameterByName("pass", MSGCOMMANDS)==null){
					passtosend="No Password Loaded";		
				}
				else{
					passtosend=getParameterByName("pass", MSGCOMMANDS);
				}				
			toastr["warning"]('<div><img src="https://jimboy3100.github.io/banners/iconagario.png" style="float:left;width:100px;height:100px;"></img>'+Premadeletter22 + ' ' + MSGNICK + ' ' + Premadeletter67  + '</font></a></br>Server: '+ getParameterByName("sip", MSGCOMMANDS).replace("live-arena-", "").replace(".agar.io", "")+ '</br> Password: ' + passtosend + '<button id="acceptServer" class="btn btn-block btn-info" style="margin-top: 10px;border-color: darkblue;">' + Premadeletter24 + '</button><br><button class="btn btn-sm btn-warning btn-spectate btn-nodo-hideall" style="width: 100%;margin-top: -10px;">' + Premadeletter25 + '</button></div>', "", {
		    timeOut: 10000,
		    extendedTimeOut: 10000
		    }).css("width", "300px");	
			}
			return MSGCOMMANDS, MSGCOMMANDS2, MSGCOMMANDS2a, MSGCOMMANDSA, MSGCOMMANDS3;
}

function CutNameConflictwithMessageFunction(){
	return CutNameConflictwithMessage=true;
}
function Universalchatfix(){	
if ($("#ao2t-capture").hasClass("connected")){
	$("#ao2t-capture").click();
	
	$("#ao2t-capture").click();
}
};
