//Legend Mod Sniff2 by jimboy3100
(function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = 'https://jimboy3100.github.io/banners/icon32croped.ico.gif';
    document.getElementsByTagName('head')[0].appendChild(link);
})();

document.title = "LM express";   
setTimeout(function () {
document.title = "LM express";   
}, 700);
setTimeout(function () {
document.title = "LM express";   
}, 1300);
setTimeout(function () {
document.title = "LM express";   
}, 1500);

var CutNameConflictwithMessage=false;	
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

setTimeout(function () {
$(".agario-profile-name").css('vertical-align', '');
}, 6000);

//2. Administration Tools
Premadeletter39="Due to spamming issues, you must be in game and use password";
setTimeout(function () {
var legbgpic = $("#menuBg").val();
var legbgcolor = $("#menuPanelColor").val();	
$("#menu-footer").after('<div id="administrationtools" style="display: none; background-image: url('+legbgpic+'); background-color: '+legbgcolor+'; border: 1px solid black; height: 165px; width: 500px; ";>'+
	'<div id="administrationtoolshud" style="display:block; margin-left: 10px; margin-right: 10px;">'+ //margin-left: 10px"
	'<div id="administrationtoolshud1" align="middle"><h5 class="main-color">ADMINISTRATOR TOOLS</h5>'+	
	'<p style="color:white; font-size:12px";" align="middle">Enter your Clan symbol and ADMIN Password</p>'+
											'<input id="AdminClanSymbol" class="form-control" placeholder="Clan Symbol" value="" style="margin-top: 2px; margin-right: 2px; width: 40%; display: inline;" " data-toggle="tooltip" data-placement="top" data-original-title="The symbol of Clan you belong" >' +	
											'<input id="AdminPassword" class="form-control" placeholder="Password" value="" style="margin-top: 2px; margin-left: 2px; width: 40%; display: inline;" " data-toggle="tooltip" data-placement="top" data-original-title="Put ADMIN password" >' +																							
											'</div><p style="color:white; font-size:12px";" align="middle">IMPORTANT NOTICE: Admin Tools can only be used by the Admins of the Legend mod</u></p>'+											
											'</div></div>');
$("#administrationtoolshud").after('<button id="AdminBacktomenu" onclick="administrationtools(); return false" class="btn btn-danger"  style="margin-left: 10px;" data-itr="page_login_and_play" data-original-title="" title="">Close</button>');
	$("#AdminClanSymbol").val("℄");
	$('#AdminClanSymbol').val(localStorage.getItem("AdminClanSymbol"));
	$('#AdminPassword').val(localStorage.getItem("AdminPassword"));
	
	$("#AdminClanSymbol").blur(function(){ 
		AdminClanSymbol=$("#AdminClanSymbol").val();
		localStorage.setItem("AdminClanSymbol", AdminClanSymbol);
	});
			
	$("#AdminPassword").blur(function(){
		AdminPassword=$("#AdminPassword").val();
		if ($("#AdminClanSymbol").val()!=""){	
			if (AdminPassword=="LEGEND69"){
				localStorage.setItem("AdminPassword", AdminPassword);
			//	toastr["warning"]('<b>[SERVER]: Welcome to Administrative tools <font color="red">' + document.getElementById("nick").value + '</font></b>!');
				$("#main-menu").show();	
				$("#skins-panel").show();
				$("#quick-menu").show();
				$("#exp-bar").show();
				$("#administrationtools").hide();		
				$("#minimap-hud").prepend('<div id="administrationtool-hud" class="hud" style="width: 35%; height: 30px; padding: 0px; pointer-events: auto; position: absolute; right: 0px; top: -120px; display: block;">'+
				'<button id="administrationtool1" class="btn-link" style="padding: 0px; color: #d6d3d3; width: 33%; height: 100%;" onclick="disconnect2min();"><i id="administrationtool11" class="fa fa-bomb" style="padding-left: 0px;"></i></button>'+
				'<button id="administrationtool2" class="btn-link" style="padding: 0px; color: #d6d3d3; width: 33%; height: 100%;" onclick="disconnectnow();"><i id="administrationtoo21" class="fa fa-ban" style="padding-left: 0px;"></i></button>'+
				'<button id="administrationtool3" class="btn-link" style="padding: 0px; color: #d6d3d3; width: 33%; height: 100%;" onclick="showstatsphp();"><i id="administrationtoo31" class="fa fa-database" style="padding-left: 0px;"></i></button>'+				
				'</div>');
//				$("#administrationtool1").attr("data-original-title", "Disconnect enemies in 2 minutes " + $("#AdminClanSymbol").val() + " Symbol" );
//				$("#administrationtool2").attr("data-original-title", "Disconnect enemies in now " + $("#AdminClanSymbol").val() + " Symbol" );
				return AdminRights=1;
			}
			else { toastr["info"]('Access denied!'); }
		}
		else { toastr["info"]('You must register your Clan Symbol first'); }
	});
setTimeout(function () {	
	$("#nick").blur(function(){
		if ($('#administrationtoolshud').is(':hidden')) {
			if($("#nick").val()=="℄🌀Jimboy3100"||$("#nick").val()=="℄ 🌀 ☠ 🐦EΛ"){
			$("#main-menu").hide();
			$("#skins-panel").hide();
			$("#quick-menu").hide();
			$("#exp-bar").hide();
			$("#administrationtools").show();		
		}	}	
});	}, 8000);
if ($("#AdminPassword").val()=="LEGEND69"){ $("#AdminPassword").blur();}		
}, 100);

function disconnect2min(){
	if (AdminRights==1){
		commandMsg="EU-London"; 
		otherMsg=""; //otherMsg=$("#AdminClanSymbol").val();
		dosendadmincommand();
		toastr["info"]("Those who use Legend Mod (except those who use ℄ symbol), same password will disconnect in 120 seconds");		
		}}
		
function disconnectnow(){
	if (AdminRights==1){
		commandMsg="RU-Russia";
		otherMsg=""; //otherMsg=$("#AdminClanSymbol").val();
		dosendadmincommand();
		toastr["info"]("Those who use Legend Mod (except those who use ℄ symbol), same password will disconnect now");
		}}	
function showstatsphp(){
	window.open('https://analytics.google.com/analytics/web/?hl=el&pli=1#realtime/rt-content/a92655864w165988480p166491055/', '_blank');
}
		
function dosendadmincommand(){
		if(AdminRights==1){
		if($('#message-box').css('display') == 'none'){KeyEvent.simulate(13, 13);};
		setTimeout(function (){$("#message").val("http://agar.io/sip=151.80.91.73:1511&?do=" + otherMsg +"&?com="+commandMsg);KeyEvent.simulate(13, 13);if($('#message').css('display') == 'block'){KeyEvent.simulate(13, 13);};if($('#message-box').css('display') == 'block'){KeyEvent.simulate(13, 13);}},100);		
		}
		else{
			toastr["info"]("Something gone wrong");}
}		

function administrationtools(){
$("#main-menu").show();	
$("#skins-panel").show();
$("#quick-menu").show();
$("#exp-bar").show();
$("#administrationtools").hide();		
}



//3. User Scripts
var Userscript1;
var Userscript2;
var Userscript3;
var Userscript4;
var Userscript5;
var Userscripttext11;
var Userscripttext12;
var Userscripttext13;
var Userscripttext14;
var Userscripttext15;
var Userscripttexture1;
var Userscripttexture2;
var Userscripttexture3;
var Userscripttexture4;
var Userscripttexture5;
setTimeout(function () {
	

/*
$("#main-menu").hide();
$("#skins-panel").hide();
$("#quick-menu").hide();
$("#exp-bar").hide();
$("#userscripts").show();
*/

var Externalletter6;
var Externalletter7;
var Externalletter8;
var Externalletter9;
var Externalletter10;
var Externalletter11;
var Externalletter12;
var Externalletter13;

if(Externalletter6==null){Externalletter6 = "Paste your Script in this Textarea, you can load multiple Scripts";}
if(Externalletter7==null){Externalletter7 = "Load Script from Textarea";}
if(Externalletter8==null){Externalletter8 = "Choose";}
if(Externalletter9==null){Externalletter9 = "Erase Script";}
if(Externalletter10==null){Externalletter10 = "Name";}
if(Externalletter11==null){Externalletter11 = "Url of Raw Github, or other Raw Script, starting with";}
if(Externalletter12==null){Externalletter12 = "Leave this empty if script not imported from URL";}
if(Externalletter13==null){Externalletter13 = "IMPORTANT NOTICE: Do not keep URLs which do not work, because they are used as onload events. If Scenario damages onload events, then DELETE COOKIES";}


$("#menu-footer").after('<div id="userscripts" style="background-image: url('+legbgpic+'); background-color: '+legbgcolor+'; border: 1px solid black; height: 600px; width: 600px; ";>'+
	'<div id="Userscriptshud" style="display:block; margin-left: 10px; margin-right: 10px;">'+ //margin-left: 10px"
	'<div id="Userscriptshud2" align="middle"><h5 class="main-color">USER SCRIPTS</h5>'+
	
	'<p id="userscripter1" style="color:white; font-size:12px";" align="middle">'+Externalletter6+'</p>'+
	
	
   '<textarea id="Userscripttexture1" class="form-control ps-container ps-theme-default" rows="14" cols="100" spellcheck="false" align="middle" style="display: block;"></textarea>'+
   '<textarea id="Userscripttexture2" class="form-control ps-container ps-theme-default" rows="14" cols="100" spellcheck="false" align="middle" style="display: none;"></textarea>'+
   '<textarea id="Userscripttexture3" class="form-control ps-container ps-theme-default" rows="14" cols="100" spellcheck="false" align="middle" style="display: none;"></textarea>'+
   '<textarea id="Userscripttexture4" class="form-control ps-container ps-theme-default" rows="14" cols="100" spellcheck="false" align="middle" style="display: none;"></textarea>'+
   '<textarea id="Userscripttexture5" class="form-control ps-container ps-theme-default" rows="14" cols="100" spellcheck="false" align="middle" style="display: none;"></textarea>'+
	'<button id="userscriptBtn1" type="button" class="btn btn-block btn-info" data-toggle="button" aria-pressed="false" autocomplete="off" style="margin-top: 2px; display: block;"><i class="fa fa-code"></i>'+Externalletter7+'</button>'+
	'<button id="userscriptBtn2" type="button" class="btn btn-block btn-info" data-toggle="button" aria-pressed="false" autocomplete="off" style="margin-top: 2px; display: none;"><i class="fa fa-code"></i>'+Externalletter7+'</button>'+
	'<button id="userscriptBtn3" type="button" class="btn btn-block btn-info" data-toggle="button" aria-pressed="false" autocomplete="off" style="margin-top: 2px; display: none;"><i class="fa fa-code"></i>'+Externalletter7+'</button>'+
	'<button id="userscriptBtn4" type="button" class="btn btn-block btn-info" data-toggle="button" aria-pressed="false" autocomplete="off" style="margin-top: 2px; display: none;"><i class="fa fa-code"></i>'+Externalletter7+'</button>'+
	'<button id="userscriptBtn5" type="button" class="btn btn-block btn-info" data-toggle="button" aria-pressed="false" autocomplete="off" style="margin-top: 2px; display: none;"><i class="fa fa-code"></i>'+Externalletter7+'</button>'+
	
		'<br>'+
											'<div class="input-box" style=" color:white; font-size:12px";" text-align: center; font-size: 12px; margin-top: 4px; padding: 4px 0 6px 0;"><span id="userscriptpages" class="title" style="">'+Externalletter8+' User Script:  </span>' +
											'<select id="Userscriptpages3" class="form-control" onchange="userscriptpages();" required="" data-original-title="" title="" style="display:inline; width: 40%" >' +
											'<option value="1" data-itr="">User Script 1</option>' +
											'<option value="2" data-itr="">User Script 2</option>' +
											'<option value="3" data-itr="">User Script 3</option>' +
											'<option value="4" data-itr="">User Script 4</option>' +
											'<option value="5" data-itr="">User Script 5</option>' +
											'</select>' +
											'<button id="EraseScripter" align="left" onclick="erasescripter(); return false" class="btn btn-primary btn" data-itr="page_login_and_play" data-original-title="" title="" style="display:inline; margin-top: -4px; margin-left: 60px; width: 30%; ">'+Externalletter9+'</button>' +
											'<input id="UserscripttextA" class="form-control" placeholder="User Script 1 '+Externalletter10+'" value="" style="margin-top: 2px; display: block;" onblur="Userscripttext11();" >' +
											
											'<input id="UserscripttextB" class="form-control" placeholder="User Script 2 '+Externalletter10+'" value="" style="margin-top: 2px; display: none;" onblur="Userscripttext12();"  >' +
											'<input id="UserscripttextC" class="form-control" placeholder="User Script 3 '+Externalletter10+'" value="" style="margin-top: 2px; display: none;" onblur="Userscripttext13();"  >' +						
											'<input id="UserscripttextD" class="form-control" placeholder="User Script 4 '+Externalletter10+'" value="" style="margin-top: 2px; display: none;" onblur="Userscripttext14();"  >' +
											'<input id="UserscripttextE" class="form-control" placeholder="User Script 5 '+Externalletter10+'" value="" style="margin-top: 2px; display: none;" onblur="Userscripttext15();"  >' +	
											'<input id="UserscriptA" class="form-control" placeholder="User Script 1 .js URL ('+Externalletter12+')" text="Url 1" style="margin-top: 2px; display: block;" " data-toggle="tooltip" data-placement="top" data-original-title="'+Externalletter11+' http://... or https://..." >' +	
											'<input id="UserscriptB" class="form-control" placeholder="User Script 2 .js URL ('+Externalletter12+')" text="Url 2" style="margin-top: 2px; display: none;" " data-toggle="tooltip" data-placement="top" data-original-title="'+Externalletter11+' http://... or https://..." >' +		
											'<input id="UserscriptC" class="form-control" placeholder="User Script 3 .js URL ('+Externalletter12+')" text="Url 3" style="margin-top: 2px; display: none;" " data-toggle="tooltip" data-placement="top" data-original-title="'+Externalletter11+' http://... or https://..." >' +		
											'<input id="UserscriptD" class="form-control" placeholder="User Script 4 .js URL ('+Externalletter12+')" text="Url 4" style="margin-top: 2px; display: none;" " data-toggle="tooltip" data-placement="top" data-original-title="'+Externalletter11+' http://... or https://..." >' +		
											'<input id="UserscriptE" class="form-control" placeholder="User Script 5 .js URL ('+Externalletter12+')" text="Url 5" style="margin-top: 2px; display: none;" " data-toggle="tooltip" data-placement="top" data-original-title="'+Externalletter11+' http://... or https://..." >' +												
											'</div>' +	
											'<p id="userscripter2" style="color:white; font-size:12px";" align="middle">'+Externalletter13+': <u>chrome://settings/clearBrowserData</u></p>'+											
											'</div>'+
											'</div>');
$("#Userscriptshud").after('<button id="Backtomenu" onclick="closeuserscripts(); return false" class="btn btn-danger" style="margin-left: 10px;" data-itr="page_login_and_play" data-original-title="" title="">Close</button>');

$('[data-toggle="tooltip"]').tooltip();
$("#userscripts").hide();
	






$('#UserscriptA').blur(function(){
if ($("#UserscriptA").val()!=""){
Userscript1=$("#UserscriptA").val();localStorage.setItem("Userscript1", Userscript1);
$("#Userscripttexture1").load(Userscript1);setTimeout(function () {$("#userscriptBtn1").click(); }, 300); }return false;});
$('#UserscriptB').blur(function(){
if ($("#UserscriptB").val()!=""){
Userscript2=$("#UserscriptB").val();localStorage.setItem("Userscript2", Userscript2);
$("#Userscripttexture2").load(Userscript2);setTimeout(function () {$("#userscriptBtn2").click(); }, 400); }return false;});
$('#UserscriptC').blur(function(){
if ($("#UserscriptC").val()!=""){
Userscript3=$("#UserscriptC").val();localStorage.setItem("Userscript3", Userscript3);
$("#Userscripttexture3").load(Userscript3);setTimeout(function () {$("#userscriptBtn3").click(); }, 500); }return false;});
$('#UserscriptD').blur(function(){
if ($("#UserscriptD").val()!=""){
Userscript4=$("#UserscriptD").val();localStorage.setItem("Userscript4", Userscript4);
$("#Userscripttexture4").load(Userscript4);setTimeout(function () {$("#userscriptBtn4").click(); }, 600); }return false;});
$('#UserscriptE').blur(function(){
if ($("#UserscriptE").val()!=""){
Userscript5=$("#UserscriptE").val();localStorage.setItem("Userscript5", Userscript5);
$("#Userscripttexture5").load(Userscript5);setTimeout(function () {$("#userscriptBtn5").click(); }, 700); }return false;});

$("#Userscripttexture1").blur(function(){
if ($("#Userscripttexture1").val()!=""){Userscripttexture1=$("#Userscripttexture1").val();localStorage.setItem("Userscripttexture1", Userscripttexture1);}});	
$("#Userscripttexture2").blur(function(){
if ($("#Userscripttexture2").val()!=""){Userscripttexture2=$("#Userscripttexture2").val();localStorage.setItem("Userscripttexture2", Userscripttexture2);}});	
$("#Userscripttexture3").blur(function(){
if ($("#Userscripttexture3").val()!=""){Userscripttexture3=$("#Userscripttexture3").val();localStorage.setItem("Userscripttexture3", Userscripttexture3);}});	
$("#Userscripttexture4").blur(function(){
if ($("#Userscripttexture4").val()!=""){Userscripttexture4=$("#Userscripttexture4").val();localStorage.setItem("Userscripttexture4", Userscripttexture4);}});	
$("#Userscripttexture5").blur(function(){
if ($("#Userscripttexture5").val()!=""){Userscripttexture5=$("#Userscripttexture5").val();localStorage.setItem("Userscripttexture5", Userscripttexture5);}});	
	




$("#userscriptBtn1").click(function() {
	var sUser1 = document.createElement("script");sUser1.type = "text/javascript"; sUser1.text=$("#Userscripttexture1").val(); $("head").append(sUser1);});
$("#userscriptBtn2").click(function() {
	var sUser2 = document.createElement("script");sUser2.type = "text/javascript"; sUser2.text=$("#Userscripttexture2").val(); $("head").append(sUser2);});
$("#userscriptBtn3").click(function() {
	var sUser3 = document.createElement("script");sUser3.type = "text/javascript"; sUser3.text=$("#Userscripttexture3").val(); $("head").append(sUser3);});
$("#userscriptBtn4").click(function() {
	var sUser4 = document.createElement("script");sUser4.type = "text/javascript"; sUser4.text=$("#Userscripttexture4").val(); $("head").append(sUser4);});
$("#userscriptBtn5").click(function() {
	var sUser5 = document.createElement("script");sUser5.type = "text/javascript"; sUser5.text=$("#Userscripttexture5").val(); $("head").append(sUser5);});


	document.getElementById("UserscripttextA").value =localStorage.getItem("Userscripttext11");
	document.getElementById("UserscripttextB").value =localStorage.getItem("Userscripttext12");
	document.getElementById("UserscripttextC").value =localStorage.getItem("Userscripttext13");
	document.getElementById("UserscripttextD").value =localStorage.getItem("Userscripttext14");
	document.getElementById("UserscripttextE").value =localStorage.getItem("Userscripttext15");

	$('#UserscriptA').val(localStorage.getItem("Userscript1"));
	if($('#UserscriptA').val()!=""){$('#UserscriptA').blur();}
	else if($('#UserscriptA').val()==""){document.getElementById("Userscripttexture1").value =localStorage.getItem("Userscripttexture1");setTimeout(function () {$("#userscriptBtn1").click(); }, 100);}
	$('#UserscriptB').val(localStorage.getItem("Userscript2"));
	if($('#UserscriptB').val()!=""){$('#UserscriptB').blur();}
	else if($('#UserscriptB').val()==""){document.getElementById("Userscripttexture2").value =localStorage.getItem("Userscripttexture2");setTimeout(function () {$("#userscriptBtn2").click(); }, 100);}
	$('#UserscriptC').val(localStorage.getItem("Userscript3"));
	if($('#UserscriptC').val()!=""){$('#UserscriptC').blur();}
	else if($('#UserscriptC').val()==""){document.getElementById("Userscripttexture3").value =localStorage.getItem("Userscripttexture3");setTimeout(function () {$("#userscriptBtn3").click(); }, 100);}
	$('#UserscriptD').val(localStorage.getItem("Userscript4"));
	if($('#UserscriptD').val()!=""){$('#UserscriptD').blur();}
	else if($('#UserscriptD').val()==""){document.getElementById("Userscripttexture4").value =localStorage.getItem("Userscripttexture4");setTimeout(function () {$("#userscriptBtn4").click(); }, 100);}
	$('#UserscriptE').val(localStorage.getItem("Userscript5"));
	if($('#UserscriptE').val()!=""){$('#UserscriptE').blur();}
	else if($('#UserscriptE').val()==""){document.getElementById("Userscripttexture5").value =localStorage.getItem("Userscripttexture5");setTimeout(function () {$("#userscriptBtn5").click(); }, 100);}

}, 5000);

function Userscripttext11(){ Userscripttext11=$("#UserscripttextA").val();localStorage.setItem("Userscripttext11", Userscripttext11);
if (Userscripttext11!=""){$('#Userscriptpages3>option:nth-child(1)').text(Userscripttext11);}}
function Userscripttext12(){ Userscripttext12=$("#UserscripttextB").val();localStorage.setItem("Userscripttext12", Userscripttext12);
if (Userscripttext12!=""){$('#Userscriptpages3>option:nth-child(2)').text(Userscripttext12);}}
function Userscripttext13(){ Userscripttext13=$("#UserscripttextC").val();localStorage.setItem("Userscripttext13", Userscripttext13);
if (Userscripttext13!=""){$('#Userscriptpages3>option:nth-child(3)').text(Userscripttext13);}}
function Userscripttext14(){ Userscripttext14=$("#UserscripttextD").val();localStorage.setItem("Userscripttext14", Userscripttext14);
if (Userscripttext14!=""){$('#Userscriptpages3>option:nth-child(4)').text(Userscripttext14);}}
function Userscripttext15(){ Userscripttext15=$("#UserscripttextE").val();localStorage.setItem("Userscripttext15", Userscripttext15);
if (Userscripttext15!=""){$('#Userscriptpages3>option:nth-child(5)').text(Userscripttext15);}}

function closeuserscripts(){
$("#main-menu").show();	
$("#skins-panel").show();
$("#quick-menu").show();
$("#exp-bar").show();
$("#userscripts").hide();
}

function userscriptpages(){
	$("#UserscriptA").hide();
	$("#UserscriptB").hide();
	$("#UserscriptC").hide();
	$("#UserscriptD").hide();
	$("#UserscriptE").hide();
	$("#UserscripttextA").hide();
	$("#UserscripttextB").hide();
	$("#UserscripttextC").hide();
	$("#UserscripttextD").hide();
	$("#UserscripttextE").hide();
	$("#Userscripttexture1").hide();
	$("#Userscripttexture2").hide();
	$("#Userscripttexture3").hide();
	$("#Userscripttexture4").hide();
	$("#Userscripttexture5").hide();
	$("#userscriptBtn1").hide();
	$("#userscriptBtn2").hide();
	$("#userscriptBtn3").hide();
	$("#userscriptBtn4").hide();
	$("#userscriptBtn5").hide();
		if ($("#Userscriptpages3").val()==1){
			$("#UserscriptA").show();
			$("#UserscripttextA").show();
			$("#Userscripttexture1").show();
			$("#userscriptBtn1").show();
		}
		if ($("#Userscriptpages3").val()==2){
			$("#UserscriptB").show();
			$("#UserscripttextB").show();
			$("#Userscripttexture2").show();
			$("#userscriptBtn2").show();			
		}
		if ($("#Userscriptpages3").val()==3){
			$("#UserscriptC").show();
			$("#UserscripttextC").show();
			$("#Userscripttexture3").show();
			$("#userscriptBtn3").show();
		}
		if ($("#Userscriptpages3").val()==4){
			$("#UserscriptD").show();
			$("#UserscripttextD").show();
			$("#Userscripttexture4").show();
			$("#userscriptBtn4").show();
		}
		if ($("#Userscriptpages3").val()==5){
			$("#UserscriptE").show();
			$("#UserscripttextE").show();
			$("#Userscripttexture5").show();
			$("#userscriptBtn5").show();
		}		
}

function erasescripter(){
	if ($("#Userscriptpages3").val()==1){
		$("#Userscripttexture1").val(""); localStorage.setItem("Userscripttexture1", ""); $('#Userscriptpages3>option:nth-child(1)').text("User Script 1"); $("#UserscripttextA").val(""); localStorage.setItem("Userscripttext11", ""); $("#UserscriptA").val(""); localStorage.setItem("Userscript1", "");}
	if ($("#Userscriptpages3").val()==2){
		$("#Userscripttexture2").val(""); localStorage.setItem("Userscripttexture2", ""); $('#Userscriptpages3>option:nth-child(2)').text("User Script 2"); $("#UserscripttextB").val(""); localStorage.setItem("Userscripttext12", ""); $("#UserscriptB").val(""); localStorage.setItem("Userscript2", "");}
	if ($("#Userscriptpages3").val()==3){
		$("#Userscripttexture3").val(""); localStorage.setItem("Userscripttexture3", ""); $('#Userscriptpages3>option:nth-child(3)').text("User Script 3"); $("#UserscripttextC").val(""); localStorage.setItem("Userscripttext13", ""); $("#UserscriptC").val(""); localStorage.setItem("Userscript3", "");}
	if ($("#Userscriptpages3").val()==4){
		$("#Userscripttexture4").val(""); localStorage.setItem("Userscripttexture4", ""); $('#Userscriptpages3>option:nth-child(4)').text("User Script 4"); $("#UserscripttextD").val(""); localStorage.setItem("Userscripttext14", ""); $("#UserscriptD").val(""); localStorage.setItem("Userscript4", "");}
	if ($("#Userscriptpages3").val()==5){
		$("#Userscripttexture5").val(""); localStorage.setItem("Userscripttexture5", ""); $('#Userscriptpages3>option:nth-child(5)').text("User Script 5"); $("#UserscripttextE").val(""); localStorage.setItem("Userscripttext15", ""); $("#UserscriptE").val(""); localStorage.setItem("Userscript5", "");}
}

