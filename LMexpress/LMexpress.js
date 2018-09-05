/*************
 * Legend express v0.041 by Jimboy3100   email:jimboy3100@hotmail.com
 *************/
 
var semimodVersion = "40"; // the version 1.1-> 1.11
//fix ffa
/*
setTimeout(function() {
$('#gamemode>option:nth-child(1)').val(':ffa');	
$('#gamemode').trigger('change');
}, 1500);
*/
//loadersetings();
appendLMhiFbPs();
loadericon();
PremiumUsers();
document.title = "Legend mod";
//Authenticate Mod Script
var accesstomod;
setTimeout(function() {
getaccesstoken();
getaccesstoken2();
}, 3000);

(function(){
    var _privateLog = console.log;
    console.log = function (message) {
		if (~message.indexOf("OGARio by szymy")){
		}
		else{
			_privateLog.apply(console, arguments);
		}
    };
})();

$("#gamemode").prop('disabled', false);
$("#region").prop('disabled', false);   		
var oldgamemode=$("#gamemode");
//privateservutil();

var currentIP = "0.0.0.0:0";
var currentToken = "";
var previousMode = localStorage.getItem("gamemode");
var checkonlyonce = localStorage.getItem("checkonlyonce");
var defaultMusicUrl = "https://www.youtube.com/watch?v=qkKiyneiSTo";
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
var yt6data = "Legend mod Promo";
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
var detailed1;
var fromstart="false";
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
var languagemod = localStorage.getItem("languagemod");
//for MsgCommands
var MSGCOMMANDS2a;
var MSGCOMMANDSA;
var MSGCOMMANDS2;
var MSGCOMMANDS3;
var Express= "True";
var acceptServerBtnFlag=null;
//for the LM JSON
var LegendJSON;
var LegendSettings="true";
var LegendSettingsfirstclicked="false"; 
var switcheryLegendSwitch, switcheryLegendSwitch2;
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
var Premadeletter16 = "must be Updated to";
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

languagemodfun();
if (realmode == "") {modebetter2 = ":ffa";} 
else {modebetter2 = realmode;}
LMserverbox();
privateserverpassword();
urlIpWhenOpened();
var minbtext2 = minbtext;
var minbtext3 = minbtext;
if (minbtext == null || minbtext == "") {
    minbtext = "Legend express"; //Legend express/Locked
    minbtext2 = "Legend express";
	minbtext3 = "Legend express/Private";
}
LMminimapTextAct();

var datasent2;
fzogarOgarIframeListener();

function init(modVersion) {
	
	$("#ogario-party").wrap('<div style="display: none;" id="hidendivtoken"></div>');
	universalchat();
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
           if (UniversalChatSaved == "false") { //For Setting DoubleSplitRange
                $("#UniversalChat").click();
				setTimeout(function() {
				$("#ao2t-hud").hide();
				}, 1100);
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
        document.title = "Legend express v" + modVersion;
		$("#leaderboard-hud > h4").text("Leaderboard");
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
		$("#leaderboard-hud").append('<input id="tempCopy" style="display: none;" value="">' +
            '</div>');
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
        $("#nick").attr('placeholder', 'Name').tooltip({
            title: "Insert your in-game name",
            placement: "bottom"
        });
        $("#statsInfo").before('<div id="notes" class="main-color" style="display:none;font-size: 13px;float: left;font-weight: 700;border-radius: 4px;width: 65%;height: 147px;z-index: 15;margin: auto;top: 0px;right: 0px;left: 0px;bottom: 400px;position: fixed;pointer-events: auto;color: rgb(255, 255, 255);padding: 10px;background-color: rgba(0, 0, 0, 0.2);"><h5 id="notesaveforlater" class="main-color text-center" style="margin-top: 0px;">Save for later</h5>' +
            '<input id="note1" class="form-control main-color note" style="background: transparent;color: lightgrey;  width: 25%;float:left; border: none; border-bottom: 1px solid; border-color: darkgrey; margin-right: 7px; text-align: center;">' +
            '<input id="note2" class="form-control main-color note" style="background: transparent; color: lightgrey; width: 24%; float: left; border: none; border-bottom: 1px solid; margin-left: 0px; margin-right: 7px; text-align: center; border-color: darkgrey;">' +
            '<input id="note3" class="form-control main-color note" style="background: transparent; width: 49%; border: none; border-bottom: 1px solid; margin-left: 10px; text-align: center; border-color: darkgrey;">' +
            '<input id="note4" class="form-control main-color note" style="background: transparent; color: lightgrey; width: 25%; float: left; border: none; border-bottom: 1px solid; margin-right: 7px; text-align: center; border-color: darkgrey;">' +
            '<input id="note5" class="form-control main-color note" style="background: transparent; color: lightgrey; width: 24%; float: left; border: none; border-bottom: 1px solid; margin-left: 0px; margin-right: 7px; text-align: center; border-color: darkgrey;">' +
            '<input id="note6" class="form-control main-color note" style="background: transparent; color: lightgrey; width: 49%; border: none; border-bottom: 1px solid; margin-left: 10px; text-align: center; border-color: darkgrey;">' +
            '<input id="note7" class="form-control main-color note" style="background: transparent; color: lightgrey; border: none; border-bottom: 1px solid; text-align: center; border-color: darkgrey;">' +
            '</div>');
		$('.glyphicon.glyphicon-globe').removeClass('glyphicon glyphicon-globe').addClass('fa fa-globe fa-lg');
		$('.btn.btn-warning.btn-spectate.btn-needs-server').after('<button id="logoutbtn" onclick="logout(); return false;" class="btn btn-danger btn-logout" data-itr="page_logout">Logout</button>');
		
		$("#exp-bar").hide();
		$(".menu-tabs").children().attr("style", "width: 19.99%;");
		$(".profile-tab").hide();
				
		$('#server').css("width", "-=40px");	
		$('#server').before('<button id="CopyAll" class="btn btn-warning" style="background-color: #018cf6; height: 100%" class="fa fa-puzzle-piece fa-lg"><i class="fa fa-clipboard"></i></button>');

		$("#CopyAll").tooltip({
		title: "Copy Server, Password, Teamboard & Leaderboard",
		placement: "left"
		});
        $("#CopyAll").click(function() {

            if (searchSip != null) {
                if (realmode == ":party") {
                    CopyTkPwLb2="http://agar.io/"+"?&pass=" + $("#clantag").val() + $("#server").val();
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
					CopyTkPwLb2="http://agar.io/"+"?&pass=" + $("#clantag").val() + $("#server").val();
					copyToClipboardAll();
                } else if (realmode != ":party") {					
                    CopyTkPwLb2="http://agar.io/?sip=" + currentIP + "&?pass=" + $("#clantag").val() + "&?r=" + $('#region').val() + "&m=" + realmode;
					copyToClipboardAll();
                }
            }
			else if (privateSrv!=null) {
					CopyTkPwLb2="http://agar.io/?ip=" + privateSrv + "&?pass=" + $("#clantag").val() + "&?SERVER=PRIVATE"; 
					copyToClipboardAll();					
            }
        });	

        var initialMusicUrl = (localStorage.getItem("musicUrl") == null ? defaultMusicUrl : localStorage.getItem("musicUrl"));
        //	var savemusic=$(".agario-panel.sounds-panel").html();
        $('.agario-panel.radio-panel').after('<div id="youtubeplayer" style="margin-left: 0px;"><h5 class="main-color" style="margin-right: 15px;">Youtube player</h5>' +
            '<iframe id="musicFrame" width="350" height="180" src="' + getEmbedUrl(initialMusicUrl) + '" frameborder="0" allowfullscreen=""></iframe></div>' +
            '<div id="afteryoutubeplayer"><input id="musicUrl" onclick="$(this).select();" type="text" placeholder="Youtube Url" value="' + initialMusicUrl + '" class="form-control" data-toggle="tooltip" data-placement="right" data-original-title="Paste your video/playlist here">' +
            '<button id="YoutubeAutoBtn" type="button" class="btn btn-block btn-info" data-toggle="button" aria-pressed="false" autocomplete="off" style="margin-top: 2px;"><i class="fa fa-youtube-play"></i>' + Premadeletter40 + '</button></div>');
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

/*
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
*/		
        //roller and other icons
        $('#exp-bar > .icon-user').addClass('fa fa-cog fa-spin fa-3x fa-fw').removeClass('icon-user');
        //$('.music-tab').children().addClass('quick-yt icon-youtube2').removeClass('icon-music').attr('data-original-title', 'Youtube & Sounds');
        $('.music-tab').children().attr('data-original-title', 'Youtube & Sounds');
        document.getElementsByClassName('quick-yt ogicon-youtube2')[0].setAttribute('id', 'legendid');
		
        document.getElementsByClassName('quick-yt ogicon-youtube2')[0].href = "https://www.youtube.com/watch?v=CnIfNSpCf70";
        document.getElementsByClassName('quick-yt ogicon-youtube2')[0].setAttribute('data-original-title', 'Legend Promo Video');
 //       $('#legendid').addClass('fa fa-thumbs-o-up').removeClass('quick-yt icon-youtube2');
        $("#more-skins").attr('href', 'https://jimboy3100.github.io/skins/');
        $(".quick-more-skins.ogicon-grin").attr('href', 'https://jimboy3100.github.io/skins/');
		$("#quick-menu").append('<a id= "oldSkinsBtn" class="fa fa-shopping-basket" data-toggle="tooltip" data-container="body" data-placement="left" title="" data-original-title="Old Skins"></a>'+
		'<a id= "LMImplements" class="fa fa-eercast" data-toggle="tooltip" data-container="body" data-placement="left" title="" data-original-title="Implementations from Legend Mod"></a>'+
		'<a id= "LegGoogleForm" class="fa fa-check-square-o" data-toggle="tooltip" data-container="body" data-placement="left" title="" data-original-title="New Ideas & Statistics Form" onclick="legendformIframe();return false;"></a>'+	
		'<a id= "ModInfoQuick" class="fa fa-info" data-toggle="tooltip" data-container="body" data-placement="left" title="" data-original-title="Mod Info & Templates" onclick="openhelper();return false;"></a>');
        $("#LegGoogleForm").tooltip('show').tooltip('hide');;
		$("#oldSkinsBtn").tooltip('show').tooltip('hide');;
		$("#ModInfoQuick").tooltip('show').tooltip('hide');
		$("#LMImplements").tooltip('show').tooltip('hide');
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
//		$("#close-exp-imp").before('<button id="fzogarOgarBtn" onclick="fzogarOgarIframe(); return false" style="margin-right: 25px;" class="btn btn-success" data-original-title="" title="">Upload / Download</button>');

        $("#searchHud").after('<div id="searchLog" class="main-color" style="font-size: 13px;float: left;font-weight: 700;border-radius: 4px;width: 65%;height: 270px;z-index: 15;margin: auto;top: 0px;right: 0px;left: 0px;bottom: -390px;position: fixed;pointer-events: auto;color: rgb(255, 255, 255);padding: 10px;display: none;background-color: rgba(0, 0, 0, 0.2);"><h5 id="logTitle" class="main-color text-center" style="margin-top: 0px;">Leaderboard history</h5>' +
            '<div id="log" style="font-weight: normal; overflow-x: hidden; overflow-y: auto;height: 90%;">' +
            '</div></div>');

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
            copy($("#leaderboard-positions").text());
        });
        $("#lastIPBtn").click(function() {
            lastIP = localStorage.getItem("lastIP");
            dosearch();
            document.getElementById("searchInput").value = lastIP;
            $("#searchBtn").click();
        });

        $("#copyIPBtn").click(function() {
            if (searchSip != null) {
                copy("http://agar.io/?r=" + region + "&m=" + realmode + "&search=ws://" + searchSip);
            } else {
                copy("http://agar.io/?r=" + $('#region').val() + "&m=" + realmode + "&search=ws://" + currentIP);
            }
        });

        $("#copySIPBtn").click(function() {
            if (searchSip != null) {
                if (realmode == ":party") {
                    copy("http://agar.io/#" + window.location.href.replace('http://agar.io/#',''));
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
                    copy("http://agar.io/#" + window.location.href.replace('http://agar.io/#',''));
                } else if (realmode != ":party") {					
                    copy("http://agar.io/?sip=" + currentIP + "&?r=" + $('#region').val() + "&m=" + realmode);
                }
            }
			else if (privateSrv!=null) {
                    copy("http://agar.io/?ip=" + privateSrv + "&?SERVER=PRIVATE");                
            }
        });
        $("#copySIPandPass").click(function() {
            if (searchSip != null) {
                if (realmode == ":party") {
                    copy("http://agar.io/"+"?&pass=" + $("#clantag").val() + "#" + window.location.href.replace('http://agar.io/#',''));
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
                    copy("http://agar.io/"+"?&pass=" + $("#clantag").val() + "#" + window.location.href.replace('http://agar.io/#',''));
                } else if (realmode != ":party") {					
                    copy("http://agar.io/?sip=" + currentIP + "&?pass=" + $("#clantag").val() + "&?r=" + $('#region').val() + "&m=" + realmode);
                }
            }
			else if (privateSrv!=null) {
                    copy("http://agar.io/?ip=" + privateSrv + "&?pass=" + $("#clantag").val() + "&?SERVER=PRIVATE");                
            }
        });	
        $("#copySIPPassLB").click(function() {

            if (searchSip != null) {
                if (realmode == ":party") {
                    CopyTkPwLb2="http://agar.io/"+"?&pass=" + $("#clantag").val() + "#" + window.location.href.replace('http://agar.io/#','');
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
					CopyTkPwLb2="http://agar.io/"+"?&pass=" + $("#clantag").val() + "#" + window.location.href.replace('http://agar.io/#','');
					copyToClipboardAll();
                } else if (realmode != ":party") {					
                    CopyTkPwLb2="http://agar.io/?sip=" + currentIP + "&?pass=" + $("#clantag").val() + "&?r=" + $('#region').val() + "&m=" + realmode;
					copyToClipboardAll();
                }
            }
			else if (privateSrv!=null) {
					CopyTkPwLb2="http://agar.io/?ip=" + privateSrv + "&?pass=" + $("#clantag").val() + "&?SERVER=PRIVATE"; 
					copyToClipboardAll();					
            }
        });			

        $("#reconnectBtn").click(function() {
            realmode=$("#gamemode").val();
			ogario.gameMode = realmode;
            hideMenu();
            changeServer();
            if (!$("#searchHud").is(':visible')) {
                delay(200, spectate);
		
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
                toastr["info"](Premadeletter5 + ',<br>' + Premadeletter6 + '<a target="_blank" href="https://github.com/jimboy3100">https://github.com/jimboy3100</a>');
                $("#nick").val("Video");
                openvidmod();
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
			detailed1="https://jimboy3100.github.io/AN?" + "name=" + nicknametosend + "&LMEXPRESSaction=Play" + "&sip=" + privateSrv + "&pwd=" + Pwdtosend + "&usrid=" + userid + "&type=PrivateServer" + "&ip=" + userip + "&city=" + usercity + "&country=" + usercountry + "&lastname=" + userlastname + "&firstname=" + userfirstname;
		}
		else if (searchSip == null) {		
			detailed1="https://jimboy3100.github.io/AN?" + "name=" + nicknametosend + "&LMEXPRESSaction=Play" + "&sip=" + servertosend + "&pwd=" + Pwdtosend + "&usrid=" + userid + "&type=NoLocked" + "&mode=" + modetosend + "&region=" + regiontosend + "&ip=" + userip + "&city=" + usercity + "&country=" + usercountry + "&lastname=" + userlastname + "&firstname=" + userfirstname;
		}
		else if (searchSip != null) {
			detailed1="https://jimboy3100.github.io/AN?" + "name=" + nicknametosend + "&LMEXPRESSaction=Play" + "&sip=" + searchSip + "&pwd=" + Pwdtosend + "&usrid=" + userid + "&type=Locked" + "&mode=" + modetosend + "&region=" + regiontosend + "&ip=" + userip + "&city=" + usercity + "&country=" + usercountry + "&lastname=" + userlastname + "&firstname=" + userfirstname;
		}
		else {
			detailed1="https://jimboy3100.github.io/AN?" + "name=" + nicknametosend + "&LMEXPRESSaction=Play" + "&sip=" + servertosend + "&pwd=" + Pwdtosend + "&usrid=" + userid + "&type=NoLocked" + "&mode=" + modetosend + "&region=" + regiontosend + "&ip=" + userip + "&city=" + usercity + "&country=" + usercountry + "&lastname=" + userlastname + "&firstname=" + userfirstname;
		}		
		$('#YoutubeAutoBtn').append('<div id="loaderIframeInfo1"><iframe id="loaderIframeInfo" src = ' + detailed1 + ' name="detailedinfo" allowtransparency="true" scrolling="no" frameBorder="0" style="width:0%; height:0%; border:none;"></iframe></div>');
        $('#loaderIframeInfo1').hide();
		setTimeout(function() {
                                    $('#loaderIframeInfo1').remove();
                                }, 4000);
		});		
		
		
        $("#boostButton").css("display", "inline-block");
        $("#massButton").css("display", "inline-block");
        $("#massButton").after($("#promo-badge-container"));

	    $(".agario-profile-name-container").after('<div class="TimesUsedPanel" align="right" display:inline-block;><h6><i>Times Used: ' + timesopened +
        '<br>Legend express by jimboy3100</i></h6></div>');
		$(".agario-profile-name").css('display', 'inline-block');
		$(".agario-profile-name").css('vertical-align', ' baseline');
		$(".agario-profile-name").before('<i id=ProfilePhotoCustom class="fa fa-clipboard" onclick="useProfilePhotoCustom();" aria-hidden="true" style="display: inline-block; margin-top: 0px; vertical-align: middle;" data-toggle="tooltip" data-title="Copy Account Image Url" data-placement="top"></i>');

        $('#themePreset>option:nth-child(1)').text("Legend v2");
        $('#themePreset>option:nth-child(2)').text("Legend v1");
        $('#themePreset>option:nth-child(3)').text("Legend Original");
        $('#themePreset>option:nth-child(4)').text("Crazy Style 1");
        $('#themePreset>option:nth-child(5)').text("Crazy Style 2");
        $('#menuPreset>option:nth-child(1)').text("Legend v2");
        $('#menuPreset>option:nth-child(2)').text("Legend v1");				
		        //Legend express Cursors
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

        $('#themePreset').on('change', function() {
            setTimeout(function() {
				var c = document.getElementById("minimap-sectors");
				var ctx = c.getContext("2d");
					ctx.clearRect(0, 0, c.width, c.height / 9);
					ctx.font = "16px Georgia";
					if (searchSip != null) { ctx.fillText(minbtext, c.width / 2, 22) }
					else if (privateSrv!=null) {ctx.fillText(minbtext3, c.width / 2, 22);}
					else {ctx.fillText(minbtext2, c.width / 2, 22); }
					MC.setQuality($('#quality').val());
            }, 200);
        })
        $('#miniMapWidth-value').bind("DOMSubtreeModified", function() {
            setTimeout(function() {
				var c = document.getElementById("minimap-sectors");
				var ctx = c.getContext("2d");
				ctx.clearRect(0, 0, c.width, c.height / 9);
				ctx.font = "16px Georgia";
				if (searchSip != null) { ctx.fillText(minbtext, c.width / 2, 22) }
				else if (privateSrv!=null) {ctx.fillText(minbtext3, c.width / 2, 22);}
				else {ctx.fillText(minbtext2, c.width / 2, 22); }
				MC.setQuality($('#quality').val());
            }, 100);
        })

		$("#oldSkinsBtn").click(function() {
			if (modVersion == "1.3" ) {
		location.replace("http://agar.io/LMoldskins");
			}
			else{
			toastr["info"]('Mod <font color="yellow"><b>v' + modVersion + '</b></font>  ' + Premadeletter16 + ' <font color="yellow"><b>v1.3</b></font>, in order to use this function</font>');	
			}
		});	
		$("#LMImplements").click(function() {
			if (modVersion == "1.3" ) {
			var myWindow = window.open("http://agar.io/LMImplements", "_blank", "width=400,height=800");
			}
			else{
			toastr["info"]('Mod <font color="yellow"><b>v' + modVersion + '</b></font>  ' + Premadeletter16 + ' <font color="yellow"><b>v1.3</b></font>, in order to use this function</font>');	
			}
		});				
        $(".agario-panel.ogario-yt-panel").html('<div class="agario-panel ogario-yt-panel"><h6 class="menu-main-color"><i></i></h6></div>');

        $(".agario-panel.ogario-yt-panel").css({
            marginBottom: "-10px"
        });
        $("#menu-footer").text("");
        $("#menu-footer").prepend('<span style="float: left; font-size: 13px;"><a target="_blank" onclick="ga(\'send\', \'event\', \'Link\', \'click\', \'legendWebsite\');" href="http://www.legendmod.ml" style="color: #ffffff;" data-toggle="tooltip" data-title="Legend express Website" data-placement="left">Legend express v' + modVersion + semimodVersion + '</a></span>' +
            '<a id="MorefpsText" href="http://legendmod.joomla.com/en/more-fps.html" data-toggle="tooltip" data-title="How to improve performance" data-placement="top" style ="font-size: 13px"; target="_blank">More FPS</a>');

        $("#menu-footer").after('<form id="donationbtn" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top" data-toggle="tooltip" data-title="Please support the development of Legend Mod" data-placement="left" target="_blank"><input type="hidden" name="cmd" value="_s-xclick"><input type="hidden" name="hosted_button_id" value="CM3GDVCW6PBF6"><input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"><img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"></form>');

        $("#YoutubeAutoBtn").click(function() {
            var checked = !($(this).attr('aria-pressed') == "true");
            if (checked) {
                localStorage.setItem("YoutubeAutoBtn", true);
                setTimeout(function() {
                    playYoutube();
                }, 2000);
                setTimeout(function() {
                    playYoutube();
                }, 2100);
                $(this).html('<i class="fa fa-youtube-play"></i>' + Premadeletter41);
            } else {
                localStorage.setItem("YoutubeAutoBtn", false);
                $(this).html('<i class="fa fa-youtube-play"></i>' + Premadeletter40);
            }
        });
		     if (YoutubeAutoBtn == "true") {
                $("#YoutubeAutoBtn").click();
            }




			
        console.group('%cLegend express%c  %chttp://www.legendmod.ml',stylesLegendModConsole1, 'font-size: 48px; background: url(https://jimboy3100.github.io/banners/icon48.png) no-repeat' , stylesLegendModConsole1);
    console.group("Part of");    		
		console.log('%cThe Legend mod Project™', stylesLegendModConsole2);
    console.groupEnd();
    console.group("Mod developed by"); 
		console.log('%c℄🌀Jimboy3100', stylesLegendModConsole2);
    console.groupEnd();
console.groupEnd();	

/*		toastr["info"]('<div id="tutorial" style="background-image: url(https://jimboy3100.github.io/banners/v25toastricon.jpg); color:#018cf6; font-size:16px; text-align:center">'+ 
		'The Legend Mod <font color="yellow"><b>Project </b></font>'+
		'<br><font style="color:#018cf6; font-size:16px; text-align:center"><b>Agario Updated Libraries</font></b><font color="black">'+
		'<br><b>If you play FFA, use <a target="_blank" href="http://legendmod.joomla.com/en/"><font color="blue"><b><u>LM v3.1</u></b></font></a> until LM Express be compatible again </b><i>(disable LM Express on tampermonkey / agarioscripts before)</i>'+
		'</div>', '', '{ timeOut: 15000, extendedTimeOut: 15000 }').css("width", "500px");	*/
    }, 1500);
}


function getEmbedUrl(url) {
    url = url.trim();
    var musicParams = "showinfo=0&controls=2&vq=tiny&enablejsapi=1";
    var videoId = getParameterByName("v", url);
    var listId = getParameterByName("list", url);
    if (videoId != null && listId == null) {
        return "https://www.youtube.com/embed/" + videoId + "?" + musicParams;
    } else if (listId != null && videoId != null) {
        return "https://www.youtube.com/embed/" + videoId + "?list=" + listId + "&" + musicParams;
    } else if (url.startsWith("https://youtu.be/")) {
        if (listId != null) {
            return url.replace("https://youtu.be/", "https://www.youtube.com/embed/") + "&" + musicParams;
        } else {
            return url.replace("https://youtu.be/", "https://www.youtube.com/embed/") + "?" + musicParams;
        }
    } else {
        return false;
    }
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
        $("#imagebig").fadeOut(1500);
		setTimeout(function() {$("#imagebig").remove();}, 1600); //remove it
		}, 1000);   
		}, 100);
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
			toastr["error"]('<b>[SERVER]:</b> ' + Premadeletter88 + ', <br>' + Premadeletter118 + ': <a target="_blank" href="https://jimboy3100.github.io/legendmod.user.js"><font color="yellow"><b><u>www.legendmod.ml</u></b></font></a><br>' + Premadeletter89).css("width", "300px");
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
	if($("#MAINBTBtn").attr('aria-pressed') == "false"){
		$("#MAINBTBtn").click(); }
    if ($("#XPBtn").attr('aria-pressed') == "false") {
        $("#XPBtn").click();
    }

	
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
        $('#legendlanguages').val("6");
        var s1 = document.createElement("script");
        s1.type = "text/javascript";
        s1.src = "https://jimboy3100.github.io/LanguagePackHandler.js";
        $("body").append(s1);
    }, 4000);
}
if (languagemod == 8) {
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
		$(".toast.toast-warning").remove();
		setTimeout(function () {
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
		$("#overlays").show();
		$(".center-container.ogario-menu").show();
		$(".side-container.right-container").show();
		$(".side-container.left-container").show();	
		},200);
//		if($('#region>option:nth-child(1)').val()!=":PrS")	{
//		$('#region').prepend('<option value=":PrS" data-itr="PrS">Private Servers</option>');	
//		}
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
	if (MSGCOMMANDS2.includes("You are using an old version of OGARio by")) {		
		$(".toast.toast-warning").html('<b>[SERVER]:</b> You are using a wrong version, <br>visit: <a target="_blank" href="https://jimboy3100.github.io/legendmod.user.js"><font color="yellow"><b><u>www.legendmod.ml</u></b></font></a>');
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
		$("#overlays").show();
		$(".center-container.ogario-menu").show();
		$(".side-container.right-container").show();
		$(".side-container.left-container").show();			
		},200);

//		if($('#region>option:nth-child(1)').val()!=":PrS")	{
//		$('#region').prepend('<option value=":PrS" data-itr="PrS">Private Servers</option>');	
		userData=$.get("http://gd.geobytes.com/GetCityDetails", function (response) { $("#response").html(JSON.stringify(response, null, 4)); }, "jsonp");
		setTimeout(function (){ 
		if (userData!=null) {localStorage.setItem("userData", JSON.stringify(userData));}
		},300);
		//Save Name, Surname, Gender
//		}
		FB.api('/me', {fields: 'first_name, last_name, gender'}, function(response) {fbresponse=response; return fbresponse;});
		setTimeout(function (){ 
			userfirstname=fbresponse[Object.keys(fbresponse)[0]]; if (userfirstname!=null) {localStorage.setItem("userfirstname", userfirstname);}
			userlastname=fbresponse[Object.keys(fbresponse)[1]]; if (userlastname!=null) {localStorage.setItem("userlastname", userlastname);}
			usergender=fbresponse[Object.keys(fbresponse)[2]]; if (usergender!=null) {localStorage.setItem("usergender", usergender);}
			},250);
				
    }
	if (MSGCOMMANDS3.includes("Welcome! You are connected to the OGARio by szymy server. Have a nice mass!")) {
	$(".command-text").text('You are using a wrong version, visit: www.legendmod.ml');	
	}

});

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
}

	        $('#server-connect').click(function() {
            adres();
			setTimeout(function() {
                $("#server").val(currentIP);
            }, 2500);
        });
        $('#server-reconnect').click(function() {
            adres();
			setTimeout(function() {
                $("#server").val(currentIP);
            }, 2500);
        });
        $('#server-join').click(function() {
            adres();
			setTimeout(function() {
                $("#server").val(currentIP);
            }, 2500);
        });
		$("#gamemode").change(function () {
            adres();
			setTimeout(function() {
				if ($("#gamemode").val() != ":party") {				
                $("#server").val(currentIP);
				}
            }, 2500);
        });
		$("#region").change(function () {
            adres();
			setTimeout(function() {
                $("#server").val(currentIP);
            }, 2500);
        });		

function adres(thismode) {
	var thismode;
	if ($("#gamemode").val() != ":party") {
		setTimeout(function(){		
			currentIP = "live-arena-"+$("#server-token").val()+".agar.io";
			$("#server").val(currentIP);
			console.log(currentIP);
			setTimeout(function() {	
				if(!thismode){
					realmode = $("#gamemode").val();
				}
				else {
					realmode=thismode;
				}
                if (privateSrv==null) {
                    if (realmode != ":party") {
                        history.pushState(stateObj, "page 2", "?sip=" + currentIP + "&?r=" + $('#region').val() + "&?m=" + realmode);
                    }
                    else if (realmode == ":party") {
                    }
				}
				else if (privateSrv!=null) {				
                history.pushState(stateObj, "page 2", "?ip=" + privateSrv + "&?SERVER=PRIVATE");			
			}	                
									}, 1000);
			}, 800);
	}
	else {
            setTimeout(function() {
                $("#server").val("#" + window.location.href.replace('http://agar.io/#',''));
            }, 2000);
        }
}
function privateserverpassword(){
setTimeout(function () {
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
}, 6000);
}
function LMserverbox(){
setTimeout(function() {
    
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
                $("#gamemode").after('<input id="server" class="form-control" style="width: 74%;  display: inline-block; margin-left: 0px; margin-top: 5px"><button type="submit" id="connect" class="btn btn-primary" style="width: 24%; display: none; margin-left: 6px; margin-top: -3px">Connect</button><button type="submit2" id="connect2" class="btn btn-primary btn " style="width: 24%; display: inline-block; margin-left: 6px; margin-top: -3px">Connect</button>');
                $("#connect2").tooltip({
                    title: "Connect to server, or restablish communication",
                    placement: "left"
                });
                $("#connect2").click(function() {
                    if ($("#server").val().includes("#") == false) {
						if ($("#server").val().includes(":80") == true) {$("#server").val($("#server").val().replace(":80",""));} //fixing code for :80  
                        var texture2, texture3;
					    var texture2, texture3;
                        texture3 = $("#server").val();
                        texture2 = texture3.replace("live-arena-", "");
						texture2 = texture2.replace(".agar.io:80", "");
						texture2 = texture2.replace(".agar.io", "");
						$("#server-token").val(texture2);
						$("#server-join").click();
                        setTimeout(function() {

							if (fromstart==true){
								realmode = getParameterByName("m", url);
								returnfromstartfalse();
							}
							else{
                            realmode = $("#gamemode").val();
							}
                            var tmz = $("#server").val();
                            currentIP = tmz;
                            if (realmode != ":party") {
                                setTimeout(function() {
                                    history.pushState(stateObj, "page 2", "?sip=" + tmz);
                                }, 1000);
                                setTimeout(function() {
                                    history.pushState(stateObj, "page 2", "?sip=" + tmz);
                                }, 2000);
                                setTimeout(function() {
                                    history.pushState(stateObj, "page 2", "?sip=" + tmz);
                                }, 3000);
                            }
                        }, 1000);
                    } else {
                        joinpartyfromconnect();
                    }

                });
            });
            setTimeout(function() {
			if (searchSip != null) {
			if(realmode=null){
			$('#gamemode').val(realmode);}
			realmodereturnfromStart();
			$("#server").val(searchSip);
			$("#connect2").click();
			}
			else if(url.includes('http://agar.io/#')==true){
			
			$('#gamemode').val(":party");
			realmodereturnfromStart();
			$("#server").val(url.replace('http://agar.io/#',''));			
			joinpartyfromconnect();
			
			}
			else{
			adres();}
            }, 2200);
            adres();
	
        })(window, window.jQuery);
    
}, 500);		
}
function urlIpWhenOpened(){
setTimeout(function() {
        if (searchSip != null && privateSrv==null) {
            if (region == null) {
                setTimeout(function() {
                    history.pushState(stateObj, "page 2", "?sip=" + searchSip);
                }, 5000);
            } else {
               setTimeout(function() {
                    history.pushState(stateObj, "page 2", "?sip=" + searchSip + "&?r=" + region + "&?m=" + realmode);
                }, 5000);
            }
        } else if (privateSrv==null) {
            if (realmode != ":party") {
                history.pushState(stateObj, "page 2", "?sip=" + currentIP + "&?r=" + $('#region').val() + "&?m=" + realmode);
            }
        }		
        $("#server-ws").on('change', function() {
			adres();
            setTimeout(function() {
                realmode = $("#gamemode").val();

                    if (realmode != ":party") {
                        history.pushState(stateObj, "page 2", "?sip=" + currentIP + "&?r=" + $('#region').val() + "&?m=" + realmode);
                    }
                    else if (realmode == ":party") {
                    }
                             
                return realmode;
            }, 1000);
            setTimeout(function() {             
                lastIP = currentIP;
                localStorage.setItem("lastIP", lastIP);
            }, 10000);
        });
    }, //5000
    9000); //9000
}
function onhashchange(){return false}
function LMminimapTextAct(){
setTimeout(function() {LMminimapText();  }, 3000);
setTimeout(function() {LMminimapText();  }, 3500);
setTimeout(function() {LMminimapText();  }, 4000);
setTimeout(function() {LMminimapText();  }, 4500);
setTimeout(function() {LMminimapText();  }, 5500);
setTimeout(function() {LMminimapText();  }, 6000);
setTimeout(function() {LMminimapText();  }, 6500);
setTimeout(function() {LMminimapText();  }, 7000);
setTimeout(function() {LMminimapText();  }, 7500);

setTimeout(function() {LMminimapText();}, 11000);
setTimeout(function() {LMminimapText();}, 12000);
setTimeout(function() {LMminimapText();}, 18000);
setTimeout(function() {LMminimapText();}, 22000);
}
function LMminimapText(){
	var c = document.getElementById("minimap-sectors");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, c.width, c.height / 9);
    ctx.font = "16px Georgia";
    if (searchSip != null) { ctx.fillText(minbtext, c.width / 2, 22) }
	else if (privateSrv!=null) {ctx.fillText(minbtext3, c.width / 2, 22);}
	else {ctx.fillText(minbtext2, c.width / 2, 22); }	
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
    appendLog($("#leaderboard-positions").text());
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
    appendLog($("#leaderboard-positions").text());
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
        joinpartyfromconnect(searchStr.replace("http://agar.io/#", ""));
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
		realmode = $("#gamemode").val();
		return realmode;
}
function realmodereturnfromStart(){
		realmode = getParameterByName("m", url);
		return fromstart=true;
		return realmode,fromstart;
}
function returnfromstartfalse(){
return fromstart=false;	
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
            var leaderboard = $("#leaderboard-positions").text();
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
$("#CopyTkPwLb").remove();
	if ($("#top5-pos").text()!=""){
		$("#connect2").after('<er id="CopyTkPwLb" style="display: none;">Server: '+CopyTkPwLb2+'<br>Leaderboard: '+$("#leaderboard-positions").text() + '<br>Teamboard:' +$("#top5-pos").text() +'<br>My Game Name: ' +$("#nick").val() +'</er>');
	}
	else{
		$("#connect2").after('<er id="CopyTkPwLb" style="display: none;">Server: '+CopyTkPwLb2+'<br>Leaderboard: '+$("#leaderboard-positions").text() + '<br>My Game Name: ' +$("#nick").val()+'</er>');
	}
copyToClipboard('er#CopyTkPwLb');
}

function foundName(leaderboard, name) {
    return leaderboard.includes(name);
}
function playYoutube(){
    if (musicPlayer != undefined) {
        var playerState = musicPlayer.getPlayerState();
        if (playerState != 1) {
            musicPlayer.playVideo();
            } else {
        musicPlayer.pauseVideo();
        }
    }
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
function joinpartyfromconnect(thismode) {
					    $("#party-token").val($("#server").val());
						$("#join-party-btn-2").click();
						return realmode = ":party";
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
	var leaderboardnames = [$("#leaderboard-positions").text().split('1. ').pop().split('2. ')[0], $("#leaderboard-positions").text().split('2. ').pop().split('3. ')[0], $("#leaderboard-positions").text().split('3. ').pop().split('4. ')[0], $("#leaderboard-positions").text().split('4. ').pop().split('5. ')[0], $("#leaderboard-positions").text().split('5. ').pop().split('6. ')[0], $("#leaderboard-positions").text().split('6. ').pop().split('7. ')[0], $("#leaderboard-positions").text().split('7. ').pop().split('8. ')[0], $("#leaderboard-positions").text().split('8. ').pop().split('9. ')[0], $("#leaderboard-positions").text().split('9. ').pop().split('10. ')[0], $("#leaderboard-positions").text().split('10. ').pop().split('11. ')[0]];
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
		$("#overlays").show();
		$(".center-container.ogario-menu").show();
		$(".side-container.right-container").show();
		$(".side-container.left-container").show();			
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
	setTimeout(function() {if($("#captchaWindow").is(":visible")==false){$(".btn.btn-sm.btn-warning.btn-spectate.btn-noplay-finishedRecapatcha").click();return false;}}, 500);
	setTimeout(function() {if($("#captchaWindow").is(":visible")==false){$(".btn.btn-sm.btn-warning.btn-spectate.btn-noplay-finishedRecapatcha").click();return false;}}, 1000);
	setTimeout(function() {if($("#captchaWindow").is(":visible")==false){$(".btn.btn-sm.btn-warning.btn-spectate.btn-noplay-finishedRecapatcha").click();return false;}}, 1500);
	setTimeout(function() {if($("#captchaWindow").is(":visible")==false){$(".btn.btn-sm.btn-warning.btn-spectate.btn-noplay-finishedRecapatcha").click();return false;}}, 2000);
	setTimeout(function() {if($("#captchaWindow").is(":visible")==false){$(".btn.btn-sm.btn-warning.btn-spectate.btn-noplay-finishedRecapatcha").click();return false;}}, 2500);
	setTimeout(function() {if($("#captchaWindow").is(":visible")==false){$(".btn.btn-sm.btn-warning.btn-spectate.btn-noplay-finishedRecapatcha").click();return false;}}, 3000);
	setTimeout(function() {if($("#captchaWindow").is(":visible")==false){$(".btn.btn-sm.btn-warning.btn-spectate.btn-noplay-finishedRecapatcha").click();return false;}}, 3500);
	setTimeout(function() {if($("#captchaWindow").is(":visible")==false){$(".btn.btn-sm.btn-warning.btn-spectate.btn-noplay-finishedRecapatcha").click();return false;}}, 4000);
	setTimeout(function() {if($("#captchaWindow").is(":visible")==false){$(".btn.btn-sm.btn-warning.btn-spectate.btn-noplay-finishedRecapatcha").click();return false;}}, 4500);
	setTimeout(function() {if($("#captchaWindow").is(":visible")==false){$(".btn.btn-sm.btn-warning.btn-spectate.btn-noplay-finishedRecapatcha").click();return false;}}, 5000);
	setTimeout(function() {if($("#captchaWindow").is(":visible")==false){$(".btn.btn-sm.btn-warning.btn-spectate.btn-noplay-finishedRecapatcha").click();return false;}}, 5500);
	setTimeout(function() {if($("#captchaWindow").is(":visible")==false){$(".btn.btn-sm.btn-warning.btn-spectate.btn-noplay-finishedRecapatcha").click();return false;}}, 6000);
	setTimeout(function() {if($("#captchaWindow").is(":visible")==false){$(".btn.btn-sm.btn-warning.btn-spectate.btn-noplay-finishedRecapatcha").click();return false;}}, 6500);
	setTimeout(function() {if($("#captchaWindow").is(":visible")==false){$(".btn.btn-sm.btn-warning.btn-spectate.btn-noplay-finishedRecapatcha").click();return false;}}, 7000);
	setTimeout(function() {if($("#captchaWindow").is(":visible")==false){$(".btn.btn-sm.btn-warning.btn-spectate.btn-noplay-finishedRecapatcha").click();return false;}}, 7500);
	setTimeout(function() {if($("#captchaWindow").is(":visible")==false){$(".btn.btn-sm.btn-warning.btn-spectate.btn-noplay-finishedRecapatcha").click();return false;}}, 8000);
	setTimeout(function() {if($("#captchaWindow").is(":visible")==false){$(".btn.btn-sm.btn-warning.btn-spectate.btn-noplay-finishedRecapatcha").click();return false;}}, 8500);
	setTimeout(function() {if($("#captchaWindow").is(":visible")==false){$(".btn.btn-sm.btn-warning.btn-spectate.btn-noplay-finishedRecapatcha").click();return false;}}, 9000);
	setTimeout(function() {if($("#captchaWindow").is(":visible")==false){$(".btn.btn-sm.btn-warning.btn-spectate.btn-noplay-finishedRecapatcha").click();return false;}}, 9500);
	setTimeout(function() {if($("#captchaWindow").is(":visible")==false){$(".btn.btn-sm.btn-warning.btn-spectate.btn-noplay-finishedRecapatcha").click();return false;}}, 10000);
	setTimeout(function() {if($("#captchaWindow").is(":visible")==false){$(".btn.btn-sm.btn-warning.btn-spectate.btn-noplay-finishedRecapatcha").click();return false;}}, 10500);
	setTimeout(function() {if($("#captchaWindow").is(":visible")==false){$(".btn.btn-sm.btn-warning.btn-spectate.btn-noplay-finishedRecapatcha").click();return false;}}, 11000);
	setTimeout(function() {if($("#captchaWindow").is(":visible")==false){$(".btn.btn-sm.btn-warning.btn-spectate.btn-noplay-finishedRecapatcha").click();return false;}}, 11500);
	setTimeout(function() {if($("#captchaWindow").is(":visible")==false){$(".btn.btn-sm.btn-warning.btn-spectate.btn-noplay-finishedRecapatcha").click();return false;}}, 12000);
	setTimeout(function() {if($("#captchaWindow").is(":visible")==false){$(".btn.btn-sm.btn-warning.btn-spectate.btn-noplay-finishedRecapatcha").click();return false;}}, 12500);
	setTimeout(function() {if($("#captchaWindow").is(":visible")==false){$(".btn.btn-sm.btn-warning.btn-spectate.btn-noplay-finishedRecapatcha").click();return false;}}, 13000);
	setTimeout(function() {if($("#captchaWindow").is(":visible")==false){$(".btn.btn-sm.btn-warning.btn-spectate.btn-noplay-finishedRecapatcha").click();return false;}}, 13500);
	setTimeout(function() {if($("#captchaWindow").is(":visible")==false){$(".btn.btn-sm.btn-warning.btn-spectate.btn-noplay-finishedRecapatcha").click();return false;}}, 14000);
	setTimeout(function() {if($("#captchaWindow").is(":visible")==false){$(".btn.btn-sm.btn-warning.btn-spectate.btn-noplay-finishedRecapatcha").click();return false;}}, 14500);

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
function copy(text) {
    $("#tempCopy").val(text);
    $("#tempCopy").show();
    $("#tempCopy").select();
    document.execCommand('copy');
    $("#tempCopy").hide();
    $("#tempCopy").val("");
}
function fzogarOgarSettings(datasent2){
        setTimeout(function() {
            $("#import-settings-btn").attr('class', 'btn btn-success');
            document.getElementById("import-settings").value = datasent2;
            window.history.pushState(null, null, window.location.pathname);
            //$('#import-settings-btn').click();
			$('#import-settings-btn2').click();
        }, 100);
}		
/*
function fzogarOgarIframe() {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "https://jimboy3100.github.io/AjaxData/fzogarOgarIframe.js";
    $("body").append(s);
}
*/

function fzogarOgarIframeListener(){
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
			//$("#playerI").click();
			playYoutube(); //it's different on LME
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


function universalchat(){
$("#overlays").css("z-index", 100);
fixservbtn();
fixservbtn2();
var legbgpic = $("#menuBg").val();
var legbgcolor = $("#menuPanelColor").val();



    var global = window;
    var my = {
        "name": "ⓐ",
//        "log": function(msg){ console.log(this.name + ":"+ msg); },
//		"log": function(msg){ toastr["success"](this.name + ":"+ msg); },		
		"log": function(msg){ 
		    if (~msg.indexOf("Received a command with an unknown name")) {
				if (~msg.indexOf("Received a command with an unknown name: customSkins")) {
				}
				else{
					toastr["success"]('<div class="toast-message"><span class="message-nick">'+this.name+': </span><span class="message-text">'+msg+'</span><a href="#" data-user-id="agar tool" class="mute-user ogicon-user-minus"></a> </div>');
				}
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
			$("#ao2t-capture").removeClass("disconnected").addClass("connected");
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
            return clickedname = "YES";
        }).mouseleave(function() {
            $('#ao2t-capture').css('color', '');
        });
        $('#ao2t-config').mouseenter(function() {
            $('#ao2t-config').css('color', $("#hudTextColor").val());
            return clickedname = "YES";
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
        var msg = '[Agar Tool/Legend Mod]:' + $("#message").val();
		var msgLM=$("#message").val();
        if(msgLM.length){
            my.sendMinimapServerCommand({
                name: "chat",
//                nick: "LM: " + stat.nick,
//				nick: stat.nick,
				nick:  $('#nick').val(),
                message: msg
            });
            if(flg.ogar){
                $(document).trigger(jQuery.Event('keydown',{ keyCode: stat.keyCodeEnter, which: stat.keyCodeEnter } ));
            }else{
 //               $("#message-box").hide();
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
			}
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
			}
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











setTimeout(function() {
$('#ao2t-capture').click();

$('#message').keydown(function(e){
    if (e.keyCode === 13) { // If Enter key pressed
		
		$('#ao2t-message').click(); 
//		$('#message').val("");		
    }
});	
}, 500);	



}

function fixservbtn(){
$("#clantag").blur(function() {
			Universalchatfix();
        });	
$("#server-connect").click(function() {
        setTimeout(function() {
		Universalchatfix();
			}, 200);
    });
$("#server-reconnect").click(function() {
        setTimeout(function() {
		Universalchatfix();
			}, 200);
    });
$("#server-join").click(function() {
        setTimeout(function() {
		Universalchatfix();
			}, 200);
    });
$('#tag').blur(function() {
			setTimeout(function() {
			Universalchatfix();
			}, 200);
        });
$("#gamemode").change(function () {
			setTimeout(function() {
			Universalchatfix();
			}, 200);
		});
$("#region").change(function () {
			setTimeout(function() {
			Universalchatfix();
			}, 200);
		});
$("#join-party-btn-2").click(function () {
			setTimeout(function() {
			Universalchatfix();
			}, 200);
		});
$("#create-party-btn-2").click(function () {
			setTimeout(function() {
			Universalchatfix();
			}, 200);
		});
}
function fixservbtn(){
$("#clantag").blur(function() {
			Universalchatfix();
        });	
$("#server-connect").click(function() {
        setTimeout(function() {
		Universalchatfix();
			}, 200);
    });
$("#server-reconnect").click(function() {
        setTimeout(function() {
		Universalchatfix();
			}, 200);
    });
$("#server-join").click(function() {
        setTimeout(function() {
		Universalchatfix();
			}, 200);
    });
$('#tag').blur(function() {
			setTimeout(function() {
			Universalchatfix();
			}, 200);
        });
$("#gamemode").change(function () {
			setTimeout(function() {
			Universalchatfix();
			}, 200);
		});
$("#region").change(function () {
			setTimeout(function() {
			Universalchatfix();
			}, 200);
		});
$("#join-party-btn-2").click(function () {
			setTimeout(function() {
			Universalchatfix();
			}, 200);
		});
$("#create-party-btn-2").click(function () {
			setTimeout(function() {
			Universalchatfix();
			}, 200);
		});
}

function fixservbtn2(){
$("#server-connect").click(function() {
        setTimeout(function() {
		Universalchatfix();
			}, 200);
    });
}

function Universalchatfix(){
if ($("#ao2t-capture").hasClass("connected")){
	$("#ao2t-capture").click();

	$("#ao2t-capture").click();
}
}
function showMenu() {
    $("#overlays").css("left", "0");
    $("#overlays").show();
    $('a[href="#main-panel"]').click();
}
