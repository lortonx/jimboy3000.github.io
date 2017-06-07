//Language Pack Handler
//Legend Mod By Jimboy3100


$(".icon-home").attr('data-original-title',Languageletter0);
$(".icon-user").attr('data-original-title',Languageletter1);
$(".icon-cog").attr('data-original-title',Languageletter2);
$(".icon-droplet").attr('data-original-title',Languageletter3);
$(".hotkeys-link.icon-keyboard").attr('data-original-title',Languageletter4);
$(".icon-music").attr('data-original-title',Languageletter5);
$(".legend-tab").attr('data-original-title',Languageletter6);

$("#clantag").attr('placeholder',Languageletter7a).attr('data-original-title',Languageletter7);
$("#nick").attr('placeholder',Languageletter8a).attr('data-original-title',Languageletter8);
$("#skin").attr('placeholder',Languageletter9a).attr('data-original-title',Languageletter9);
$("#region").attr('data-original-title',Languageletter10);
$("#gamemode").attr('data-original-title',Languageletter11);
$("#connect2").text(Languageletter12a).attr('data-original-title',Languageletter12);
$("#server-join").text(Languageletter13);
$(".btn.btn-play-guest.btn-success.btn-needs-server").text(Languageletter14);
$(".btn.btn-warning.btn-login-play.btn-needs-server").text(Languageletter15);
$(".btn.btn-warning.btn-spectate.btn-needs-server").attr('data-original-title',Languageletter16);
$(".btn.btn-primary.btn-login.btn-fb").children().last().text(Languageletter17);
$(".btn.btn-primary.btn-login.btn-gplus").children().last().text(Languageletter18);
$(".btn.btn-play.btn-primary.btn-needs-server").text(Languageletter19);

$(".quick-shop.icon-cart").attr('data-original-title',Languageletter20);
$(".quick-free-coins.icon-coin-dollar").attr('data-original-title',Languageletter21);
$(".quick-free-gifts.icon-gift").attr('data-original-title',Languageletter22);
$(".quick-quests.icon-trophy").attr('data-original-title',Languageletter23);
$(".quick-more-skins.icon-grin").attr('data-original-title',Languageletter24);
$(".fa.fa-thumbs-o-up").attr('data-original-title',Languageletter25);

$("#more-skins").text(Languageletter26);


$("#freeCoins").text(Languageletter27);
$("#gifting").text(Languageletter22);
$("#dailyQuests").text(Languageletter23);
$("#openShopBtn").text(Languageletter20);
$(".btn.btn-danger.btn-logout").attr('data-original-title',Languageletter31);


$(".TimesUsedPanel").replaceWith('<div class="TimesUsedPanel" align="right" display:inline-block;><h6><i>' + Languageletter32+' '+timesopened+
		'<br>'+ Languageletter33 + ' jimboy3100<br>' + Languageletter34 + ' ' + translator + '</i></h6></div>');

$("#tcm>#tcm-header>p").text(Languageletter35);


$(".options-box.animationGroup>h5").text(Languageletter36);
$(".options-box.animationGroup>DIV>DIV>SPAN:nth-child(1)").text(Languageletter37 + ": ");
$(".options-box.zoomGroup>h5").text(Languageletter37b);
$(".options-box.zoomGroup>LABEL").each(function() { var text = $(this).html();
   $(this).html(text.replace('Auto zoom', Languageletter37a)); 
});
$(".options-box.zoomGroup>DIV>DIV>SPAN:nth-child(1)").text(Languageletter38 + ": ");

$(".options-box.respGroup>h5").text(Languageletter39);
$(".options-box.respGroup>LABEL").each(function() { var text = $(this).html();
   $(this).html(text.replace('Auto respawn', Languageletter40)); 
});
$(".options-box.respGroup>LABEL").each(function() { var text = $(this).html();
$(this).html(text.replace('Quick respawn (hotkey)',Languageletter41)); 
});

$(".options-box.namesGroup>h5").text(Languageletter42);
$(".options-box.namesGroup>LABEL").each(function() { var text = $(this).html();
   $(this).html(text.replace('No names', Languageletter43)); 
});
$(".options-box.namesGroup>LABEL").each(function() { var text = $(this).html();
   $(this).html(text.replace('Optimized names', Languageletter44)); 
});
$(".options-box.namesGroup>LABEL").each(function() { var text = $(this).html();
   $(this).html(text.replace('Auto hide names', Languageletter45)); 
});
$(".options-box.namesGroup>LABEL").each(function() { var text = $(this).html();
   $(this).html(text.replace('Hide my name', Languageletter46)); 
});
$(".options-box.namesGroup>LABEL").each(function() { var text = $(this).html();
   $(this).html(text.replace('Hide teammates names', Languageletter47)); 
});
$(".options-box.namesGroup>LABEL").each(function() { var text = $(this).html();
   $(this).html(text.replace('Names stroke', Languageletter48)); 
});

$(".options-box.massGroup>h5").text(Languageletter49);
$(".options-box.massGroup>LABEL").each(function() { var text = $(this).html();
   $(this).html(text.replace('Show mass', Languageletter50)); 
});
$(".options-box.massGroup>LABEL").each(function() { var text = $(this).html();
   $(this).html(text.replace('Optimized mass (+/-2%)',  Languageletter51)); 
});
$(".options-box.massGroup>LABEL").each(function() { var text = $(this).html();
   $(this).html(text.replace('Auto hide mass', Languageletter52)); 
});
$(".options-box.massGroup>LABEL").each(function() { var text = $(this).html();
   $(this).html(text.replace('Hide my mass', Languageletter53)); 
});
$(".options-box.massGroup>LABEL").each(function() { var text = $(this).html();
   $(this).html(text.replace('Hide enemies mass', Languageletter54)); 
});
$(".options-box.massGroup>LABEL").each(function() { var text = $(this).html();
   $(this).html(text.replace('Short mass', Languageletter55)); 
});
$(".options-box.massGroup>LABEL").each(function() { var text = $(this).html();
   $(this).html(text.replace('Virus shots', Languageletter56)); 
});
$(".options-box.massGroup>LABEL").each(function() { var text = $(this).html();
   $(this).html(text.replace('Mass stroke', Languageletter57)); 
});

$(".options-box.skinsGroup>h5").text(Languageletter58);
$(".options-box.skinsGroup>LABEL").each(function() { var text = $(this).html();
   $(this).html(text.replace('No skins', Languageletter59)); 
});
$(".options-box.skinsGroup>LABEL").each(function() { var text = $(this).html();
   $(this).html(text.replace('Custom skins', Languageletter60)); 
});
$(".options-box.skinsGroup>LABEL").each(function() { var text = $(this).html();
   $(this).html(text.replace('Vanilla skins', Languageletter61)); 
});

$(".options-box.foodGroup>h5").text(Languageletter6a2);
$(".options-box.foodGroup>LABEL").each(function() { var text = $(this).html();
   $(this).html(text.replace('Optimized food', Languageletter62)); 
});
$(".options-box.foodGroup>LABEL").each(function() { var text = $(this).html();
   $(this).html(text.replace('Auto hide food (mass)', Languageletter63)); 
});
$(".options-box.foodGroup>LABEL").each(function() { var text = $(this).html();
   $(this).html(text.replace('Auto hide food (zoom)', Languageletter64)); 
});
$(".options-box.foodGroup>LABEL").each(function() { var text = $(this).html();
   $(this).html(text.replace('Rainbow food', Languageletter65)); 
});

$(".options-box.transparencyGroup>h5").text(Languageletter66);
$(".options-box.transparencyGroup>LABEL").each(function() { var text = $(this).html();
   $(this).html(text.replace('No colors', Languageletter67)); 
});
$(".options-box.transparencyGroup>LABEL").each(function() { var text = $(this).html();
   $(this).html(text.replace('My custom color', Languageletter68)); 
});
$(".options-box.transparencyGroup>LABEL").each(function() { var text = $(this).html();
   $(this).html(text.replace('My transparent skin', Languageletter69)); 
});
$(".options-box.transparencyGroup>LABEL").each(function() { var text = $(this).html();
   $(this).html(text.replace('Transparent skins', Languageletter70)); 
});
$(".options-box.transparencyGroup>LABEL").each(function() { var text = $(this).html();
   $(this).html(text.replace('Transparent viruses', Languageletter71)); 
});

$(".options-box.gridGroup>h5").text(Languageletter72);
$(".options-box.gridGroup>LABEL").each(function() { var text = $(this).html();
   $(this).html(text.replace('Show grid', Languageletter73)); 
});
$(".options-box.gridGroup>LABEL").each(function() { var text = $(this).html();
   $(this).html(text.replace('Show background sectors', Languageletter74)); 
});
$(".options-box.gridGroup>LABEL").each(function() { var text = $(this).html();
   $(this).html(text.replace('Show map borders', Languageletter75)); 
});

$(".options-box.chatGroup>h5").text(Languageletter76);
$(".options-box.chatGroup>LABEL").each(function() { var text = $(this).html();
   $(this).html(text.replace('Disable chat', Languageletter77)); 
});
$(".options-box.chatGroup>LABEL").each(function() { var text = $(this).html();
   $(this).html(text.replace('Sound notifications', Languageletter78)); 
});
$(".options-box.chatGroup>LABEL").each(function() { var text = $(this).html();
   $(this).html(text.replace('Emoticons', Languageletter79)); 
});
$(".options-box.chatGroup>LABEL").each(function() { var text = $(this).html();
   $(this).html(text.replace('Show images on chat', Languageletter80)); 
});
$(".options-box.chatGroup>LABEL").each(function() { var text = $(this).html();
   $(this).html(text.replace('Show videos on chat', Languageletter81)); 
});
$(".options-box.chatGroup>LABEL").each(function() { var text = $(this).html();
   $(this).html(text.replace('Chatbox instead of popups', Languageletter82)); 
});

$(".options-box.helpersGroup>h5").text(Languageletter83);
$(".options-box.helpersGroup>LABEL").each(function() { var text = $(this).html();
   $(this).html(text.replace('Opponents colors', Languageletter84)); 
});
$(".options-box.helpersGroup>LABEL").each(function() { var text = $(this).html();
   $(this).html(text.replace('Opponents rings', Languageletter85)); 
});
$(".options-box.helpersGroup>LABEL").each(function() { var text = $(this).html();
   $(this).html(text.replace('Viruses colors', Languageletter86)); 
});
$(".options-box.helpersGroup>LABEL").each(function() { var text = $(this).html();
   $(this).html(text.replace('Split range', Languageletter87)); 
});
$(".options-box.helpersGroup>LABEL").each(function() { var text = $(this).html();
   $(this).html(text.replace('Viruses range', Languageletter88)); 
});
$(".options-box.helpersGroup>LABEL").each(function() { var text = $(this).html();
   $(this).html(text.replace('Cursor tracking', Languageletter89)); 
});
$(".options-box.helpersGroup>LABEL").each(function() { var text = $(this).html();
   $(this).html(text.replace('Teammates indicators', Languageletter90)); 
});

$(".options-box.mouseGroup>h5").text(Languageletter91);
$(".options-box.mouseGroup>LABEL").each(function() { var text = $(this).html();
   $(this).html(text.replace('LMB - Mouse split', Languageletter92)); 
});
$(".options-box.mouseGroup>LABEL").each(function() { var text = $(this).html();
   $(this).html(text.replace('RMB - Mouse feed', Languageletter93)); 
});
$(".options-box.mouseGroup>LABEL").each(function() { var text = $(this).html();
   $(this).html(text.replace('Invert mouse buttons', Languageletter94)); 
});

$(".options-box.hudGroup>h5").text(Languageletter94a);
$(".options-box.hudGroup>LABEL").each(function() { var text = $(this).html();
   $(this).html(text.replace('Show team top 5', Languageletter95)); 
});
$(".options-box.hudGroup>LABEL").each(function() { var text = $(this).html();
   $(this).html(text.replace('Show targeting', Languageletter96)); 
});
$(".options-box.hudGroup>LABEL").each(function() { var text = $(this).html();
   $(this).html(text.replace('Centered leaderboard', Languageletter97)); 
});
$(".options-box.hudGroup>LABEL").each(function() { var text = $(this).html();
   $(this).html(text.replace('Game stats at the top', Languageletter98)); 
});


$(".options-box.statsGroup>h5").text(Languageletter99);
$(".options-box.statsGroup>LABEL").each(function() { var text = $(this).html();
   $(this).html(text.replace('Show game stats', Languageletter100)); 
});
$(".options-box.statsGroup>LABEL").each(function() { var text = $(this).html();
   $(this).html(text.replace('Game stats: Mass', Languageletter101)); 
});
$(".options-box.statsGroup>LABEL").each(function() { var text = $(this).html();
   $(this).html(text.replace('Game stats: STE', Languageletter102)); 
});
$(".options-box.statsGroup>LABEL").each(function() { var text = $(this).html();
   $(this).html(text.replace('Game stats: n/16', Languageletter103)); 
});
$(".options-box.statsGroup>LABEL").each(function() { var text = $(this).html();
   $(this).html(text.replace('Game stats: FPS', Languageletter104)); 
});
$(".options-box.statsGroup>LABEL").each(function() { var text = $(this).html();
   $(this).html(text.replace('Show current time', Languageletter105)); 
});

$(".options-box.extrasGroup>h5").text(Languageletter106);
$(".options-box.extrasGroup>LABEL").each(function() { var text = $(this).html();
   $(this).html(text.replace('Skip stats after death', Languageletter107)); 
});
$(".options-box.extrasGroup>LABEL").each(function() { var text = $(this).html();
   $(this).html(text.replace('Show quest', Languageletter108)); 
});
$(".options-box.extrasGroup>LABEL").each(function() { var text = $(this).html();
   $(this).html(text.replace('Block popups (ads/shop/quest)', Languageletter109)); 
});

$('#quality>option:nth-child(1)').text(Languageletter110);
$('#quality>option:nth-child(2)').text(Languageletter111);
$('#quality>option:nth-child(3)').text(Languageletter112);
$('#quality>option:nth-child(4)').text(Languageletter113);
$('#quality>option:nth-child(5)').text(Languageletter114);
$('#quality>option:nth-child(6)').text(Languageletter115);

$(".btn.btn-block.btn-success.btn-export").text(Languageletter116);
$(".restore-settings>a").eq(0).text(Languageletter117);

$("#exp-imp-settings>h1").eq(0).text(Languageletter118);
$("#exp-imp-settings>h1").eq(0).text(Languageletter119);
$("#exp-imp-settings>h2").eq(0).text(Languageletter120);
$("#exp-imp-settings>h2").eq(1).text(Languageletter121);

$("#exp-imp-settings>LABEL").each(function() { var text = $(this).html();
   $(this).html(text.replace('Commands', Languageletter122)); 
});
$("#exp-imp-settings>LABEL").each(function() { var text = $(this).html();
   $(this).html(text.replace('Hotkeys', Languageletter123)); 
});
$("#exp-imp-settings>LABEL").each(function() { var text = $(this).html();
   $(this).html(text.replace('Profiles', Languageletter124)); 
});
$("#exp-imp-settings>LABEL").each(function() { var text = $(this).html();
   $(this).html(text.replace('Settings', Languageletter125)); 
});
$("#exp-imp-settings>LABEL").each(function() { var text = $(this).html();
   $(this).html(text.replace('Theme', Languageletter126)); 
});
$("#export-settings-btn").text(Languageletter127);
$("#import-settings-btn").text(Languageletter128);

$("#theme>ul>li>.icon-paint-format").attr('data-original-title', Languageletter129);
$("#theme>ul>li>.icon-menu").attr('data-original-title', Languageletter130);
$("#theme>ul>li>.icon-display").attr('data-original-title', Languageletter131);
$("#theme>ul>li>.icon-bubbles").attr('data-original-title', Languageletter132);
$("#theme>ul>li>.icon-location2").attr('data-original-title', Languageletter133);
$("#theme>ul>li>.icon-compass").attr('data-original-title', Languageletter134);

$(".preset-box>span").text(Languageletter135);

$('#themePreset>option:nth-child(3)').text(Languageletter136);
$('#themePreset>option:nth-child(4)').text(Languageletter137 + " 1");
$('#themePreset>option:nth-child(5)').text(Languageletter137 + " 2");

$("#theme-main>div>span").eq(1).text(Languageletter139);
$("#theme-main>div>span").eq(2).text(Languageletter140);
$("#theme-main>div>span").eq(3).text(Languageletter141);
$("#theme-main>div>span").eq(4).text(Languageletter142);
$("#theme-main>div>span").eq(5).text(Languageletter143);
$("#theme-main>div>span").eq(6).text(Languageletter144);
$("#theme-main>div>span").eq(7).text(Languageletter145);
$("#theme-main>div>span").eq(8).text(Languageletter146);
$("#theme-main>div>span").eq(9).text(Languageletter147);
$("#theme-main>div>span").eq(10).text(Languageletter148);
$("#theme-main>div>span").eq(11).text(Languageletter149);
$("#theme-main>div>span").eq(12).text(Languageletter150);
$("#theme-main>div>span").eq(13).text(Languageletter151);
$("#theme-main>div>span").eq(14).text(Languageletter152);
$("#theme-main>div>span").eq(15).text(Languageletter153);
$("#theme-main>div>span").eq(16).text(Languageletter154);
$("#theme-main>div>span").eq(17).text(Languageletter155 + ": ");

$("#theme-main>div>div>span:nth-child(1)").eq(0).text(Languageletter157 + ": ");
$("#theme-main>div>div>span:nth-child(1)").eq(1).text(Languageletter158 + ": ");
$("#theme-main>div>div>span:nth-child(1)").eq(2).text(Languageletter159 + ": ");
$("#theme-main>div>div>span:nth-child(1)").eq(3).text(Languageletter160 + ": ");
$("#theme-main>div>div>span:nth-child(1)").eq(4).text(Languageletter161 + ": ");
$("#theme-main>div>div>span:nth-child(1)").eq(5).text(Languageletter162 + ": ");
$("#theme-main>div>div>span:nth-child(1)").eq(6).text(Languageletter163 + ": ");
$("#theme-main>div>div>span:nth-child(1)").eq(7).text(Languageletter164 + ": ");
$("#theme-main>div>div>span:nth-child(1)").eq(8).text(Languageletter165 + ": ");
$("#theme-main>div>div>span:nth-child(1)").eq(9).text(Languageletter166 + ": ");
$("#theme-main>div>div>span:nth-child(1)").eq(10).text(Languageletter167 + ": ");
$("#theme-main>div>div>span:nth-child(1)").eq(11).text(Languageletter168 + ": ");
$("#theme-main>div>div>span:nth-child(1)").eq(12).text(Languageletter169 + ": ");

$(".restore-settings>a").eq(1).text(Languageletter170);
$(".btn.btn-block.btn-success.btn-save").text(Languageletter171);

$(".preset-box>span").eq(1).text(Languageletter172);
$(".preset-box>div>span").eq(1).text(Languageletter173);

$("#theme-menu>div>div>span:nth-child(1)").eq(0).text(Languageletter174 + ": ");
$("#theme-menu>div>span").eq(1).text(Languageletter175);
$("#theme-menu>div>span").eq(2).text(Languageletter176);
$("#theme-menu>div>span").eq(3).text(Languageletter177);
$("#theme-menu>div>span").eq(4).text(Languageletter177 + " (2)");
$("#theme-menu>div>span").eq(5).text(Languageletter179);
$("#theme-menu>div>span").eq(6).text(Languageletter179 + " (2)");
$("#theme-menu>div>span").eq(7).text(Languageletter181 +" #1");
$("#theme-menu>div>span").eq(8).text(Languageletter181 +" #1 (2)");
$("#theme-menu>div>span").eq(9).text(Languageletter181 +" #2");
$("#theme-menu>div>span").eq(10).text(Languageletter181 +" #2 (2)");
$("#theme-menu>div>span").eq(11).text(Languageletter181 +" #3");
$("#theme-menu>div>span").eq(12).text(Languageletter181 +" #3 (2)");
$("#theme-menu>div>span").eq(13).text(Languageletter181 +" #4");
$("#theme-menu>div>span").eq(14).text(Languageletter181 +" #4 (2)");
$("#theme-menu>div>span").eq(15).text(Languageletter189);
$("#menuBg").attr('placeholder', Languageletter190);

$("#theme-hud>div>span").eq(0).text(Languageletter191);
$("#theme-hud>div>span").eq(1).text(Languageletter192);
$("#theme-hud>div>span").eq(2).text(Languageletter193);
$("#theme-hud>div>span").eq(3).text(Languageletter194);
$("#theme-hud>div>span").eq(4).text(Languageletter195);
$("#theme-hud>div>span").eq(5).text(Languageletter196);
$("#theme-hud>div>span").eq(6).text(Languageletter197);
$("#theme-hud>div>span").eq(7).text(Languageletter198);
$("#theme-hud>div>span").eq(8).text(Languageletter199);
$("#theme-hud>div>div>span:nth-child(1)").eq(0).text(Languageletter200 + ": ");

$("#theme-chat>div>span").eq(0).text(Languageletter201);
$("#theme-chat>div>span").eq(1).text(Languageletter202);
$("#theme-chat>div>span").eq(2).text(Languageletter203);
$("#theme-chat>div>span").eq(3).text(Languageletter204);
$("#theme-chat>div>span").eq(4).text(Languageletter205);
$("#theme-chat>div>span").eq(5).text(Languageletter206);
$("#theme-chat>div>span").eq(6).text(Languageletter207);
$("#theme-chat>div>span").eq(7).text(Languageletter208);
$("#theme-chat>div>span").eq(8).text(Languageletter209);
$("#theme-chat>div>div>span:nth-child(1)").eq(0).text(Languageletter210 + ": ");

$("#theme-minimap>div>span").eq(0).text(Languageletter211);
$("#theme-minimap>div>span").eq(1).text(Languageletter212);
$("#theme-minimap>div>span").eq(2).text(Languageletter213);
$("#theme-minimap>div>span").eq(3).text(Languageletter214);
$("#theme-minimap>div>span").eq(4).text(Languageletter215);
$("#theme-minimap>div>span").eq(5).text(Languageletter216);
$("#theme-minimap>div>span").eq(6).text(Languageletter217);
$("#theme-minimap>div>span").eq(7).text(Languageletter218);
$("#theme-minimap>div>span").eq(8).text(Languageletter219);
$("#theme-minimap>div>span").eq(9).text(Languageletter220);
$("#theme-minimap>div>span").eq(9).text(Languageletter221);

$("#theme-minimap>div>div>span:nth-child(1)").eq(0).text(Languageletter222 + ": ");
$("#theme-minimap>div>div>span:nth-child(1)").eq(1).text(Languageletter223 + ": ");
$("#theme-minimap>div>div>span:nth-child(1)").eq(2).text(Languageletter224 + ": ");
$("#theme-minimap>div>div>span:nth-child(1)").eq(3).text(Languageletter225 + ": ");
$("#theme-minimap>div>div>span:nth-child(1)").eq(4).text(Languageletter226 + ": ");
$("#theme-minimap>div>div>span:nth-child(1)").eq(5).text(Languageletter227 + ": ");
$("#theme-minimap>div>div>span:nth-child(1)").eq(6).text(Languageletter228 + ": ");

$("#theme-images>div>span").eq(0).text(Languageletter229);
$("#theme-images>div>span").eq(1).text(Languageletter230);
$("#customBackground").attr('placeholder',Languageletter231);
$("#customCursor").attr('placeholder',Languageletter232);


$("#hotkeys-cfg>div>div:nth-child(1)").eq(0).text(Languageletter233);
$("#hotkeys-cfg>div>div:nth-child(1)").eq(1).text(Languageletter234);
$("#hotkeys-cfg>div>div:nth-child(1)").eq(2).text(Languageletter235);
$("#hotkeys-cfg>div>div:nth-child(1)").eq(3).text(Languageletter236);
$("#hotkeys-cfg>div>div:nth-child(1)").eq(4).text(Languageletter237);
$("#hotkeys-cfg>div>div:nth-child(1)").eq(5).text(Languageletter238);
$("#hotkeys-cfg>div>div:nth-child(1)").eq(6).text(Languageletter239);
$("#hotkeys-cfg>div>div:nth-child(1)").eq(7).text(Languageletter240);
$("#hotkeys-cfg>div>div:nth-child(1)").eq(8).text(Languageletter241);
$("#hotkeys-cfg>div>div:nth-child(1)").eq(9).text(Languageletter242);
$("#hotkeys-cfg>div>div:nth-child(1)").eq(10).text(Languageletter243);
$("#hotkeys-cfg>div>div:nth-child(1)").eq(11).text(Languageletter244);
$("#hotkeys-cfg>div>div:nth-child(1)").eq(12).text(Languageletter245);
$("#hotkeys-cfg>div>div:nth-child(1)").eq(13).text(Languageletter246);
$("#hotkeys-cfg>div>div:nth-child(1)").eq(14).text(Languageletter247);
$("#hotkeys-cfg>div>div:nth-child(1)").eq(15).text(Languageletter248);
$("#hotkeys-cfg>div>div:nth-child(1)").eq(16).text(Languageletter249);
$("#hotkeys-cfg>div>div:nth-child(1)").eq(17).text(Languageletter250);
$("#hotkeys-cfg>div>div:nth-child(1)").eq(18).text(Languageletter251);
$("#hotkeys-cfg>div>div:nth-child(1)").eq(19).text(Languageletter252);
$("#hotkeys-cfg>div>div:nth-child(1)").eq(10).text(Languageletter253);
$("#hotkeys-cfg>div>div:nth-child(1)").eq(21).text(Languageletter254);
$("#hotkeys-cfg>div>div:nth-child(1)").eq(22).text(Languageletter255);
$("#hotkeys-cfg>div>div:nth-child(1)").eq(23).text(Languageletter256);
$("#hotkeys-cfg>div>div:nth-child(1)").eq(24).text(Languageletter257);
$("#hotkeys-cfg>div>div:nth-child(1)").eq(25).text(Languageletter258);
$("#hotkeys-cfg>div>div:nth-child(1)").eq(26).text(Languageletter259);
$("#hotkeys-cfg>div>div:nth-child(1)").eq(27).text(Languageletter260);
$("#hotkeys-cfg>div>div:nth-child(1)").eq(28).text(Languageletter261);
$("#hotkeys-cfg>div>div:nth-child(1)").eq(29).text(Languageletter262);
$("#hotkeys-cfg>div>div:nth-child(1)").eq(30).text(Languageletter263);
$("#hotkeys-cfg>div>div:nth-child(1)").eq(31).text(Languageletter264);
$("#hotkeys-cfg>div>div:nth-child(1)").eq(32).text(Languageletter265);
$("#hotkeys-cfg>div>div:nth-child(1)").eq(33).text(Languageletter266);
$("#hotkeys-cfg>div>div:nth-child(1)").eq(34).text(Languageletter267);
$("#hotkeys-cfg>div>div:nth-child(1)").eq(35).text(Languageletter268);
$("#hotkeys-cfg>div>div:nth-child(1)").eq(36).text(Languageletter269);
$("#hotkeys-cfg>div>div:nth-child(1)").eq(37).text(Languageletter270);
$("#hotkeys-cfg>div>div:nth-child(1)").eq(38).text(Languageletter271 + " 1");
$("#hotkeys-cfg>div>div:nth-child(1)").eq(39).text(Languageletter271 + " 2");
$("#hotkeys-cfg>div>div:nth-child(1)").eq(40).text(Languageletter271 + " 3");
$("#hotkeys-cfg>div>div:nth-child(1)").eq(41).text(Languageletter271 + " 4");
$("#hotkeys-cfg>div>div:nth-child(1)").eq(42).text(Languageletter271 + " 5");
$("#hotkeys-cfg>div>div:nth-child(1)").eq(43).text(Languageletter272);
$("#hotkeys-cfg>div>div:nth-child(1)").eq(44).text(Languageletter273);
$("#hotkeys-cfg>div>div:nth-child(1)").eq(45).text(Languageletter274);
$("#hotkeys-cfg>div>div:nth-child(1)").eq(46).text(Languageletter275);
$("#hotkeys-cfg>div>div:nth-child(1)").eq(47).text(Languageletter276);
$("#hotkeys-cfg>div>div:nth-child(1)").eq(48).text(Languageletter277);

$("#hotkeys-inst").replaceWith('<div id="hotkeys-inst"><ul><li>' + Languageletter278 + '</li><li>' + Languageletter279 + '</li><li>' + Languageletter280 + '</li></ul></div>');

$("#reset-hotkeys").text(Languageletter281);
$("#save-hotkeys").text(Languageletter282);
$("#close-hotkeys").text(Languageletter283);

$("#youtubeplayer>h5").text(Languageletter284);
$("#musicUrl").attr('placeholder', Languageletter284a).attr('data-original-title',Languageletter285);
$(".agario-panel.sounds-panel>h5").text(Languageletter286);
$(".agario-panel.sounds-panel>div>span").eq(0).text(Languageletter287);
$(".agario-panel.sounds-panel>div>span").eq(1).text(Languageletter288);

$("#copySIPBtn").text("Copy").attr('data-original-title',Languageletter289);
$("#copySIPBtn").mouseenter(function () {$("#dropDown3").hide();$("#copySIPBtn").text(Languageletter290);$("#dropDown").show(100);});
$("#leaderboard-menu").mouseleave(function () {$("#dropDown").hide();$("#dropDown3").hide();$("#copySIPBtn").text(Languageletter291);});
$("#copyLBBtn").text("Board").attr('data-original-title', Languageletter291);
$("#searchShortcut").attr('data-original-title', Languageletter292);
$("#reconnectBtn").attr('data-original-title', Languageletter293);
$("#logTitle").attr("data-original-title", Languageletter294);
$("#searchInput").attr('placeholder',Languageletter295);
$("#closeBtn").attr("data-original-title", Languageletter283);

$("#top5-total").each(function() { var text = $(this).html();
   $(this).html(text.replace(' Active players: ', ' ' + Languageletter296 + ': ')); 
});
$("#top5-total").each(function() { var text = $(this).html();
   $(this).html(text.replace(' Total mass: ', ' ' + Languageletter297 + ': ')); 
});

if($('#teambtext').val()==""){
	$("#top5-hud > h5").each(function() { var text = $(this).html();
   $(this).html(text.replace('Team top ', Languageletter298 + ' ')); 
});}
if($('#leadbtext').val()==""){
	$("#leaderboard-hud > h4").text(Languageletter299);
};
$("#ChatBtn").attr("data-original-title", Languageletter300);
$("#SendCommands1").attr("data-original-title", Languageletter301);
$("#Images1").attr("data-original-title", Languageletter302);
$("#yout1").attr("data-original-title", Languageletter303);
$("#Cutnames1").attr("data-original-title", Languageletter304);
$("#Bino").attr("data-original-title", Languageletter305);
$("#player").attr("data-original-title", Languageletter306);
$("#fullscreenBtn").attr("data-original-title", Languageletter307);
$("RotateRight").attr("data-original-title", Languageletter308);
$("#bottomleft").text( Languageletter309);
$("#Backtomenu").text( Languageletter310);
$("#notesaveforlater").text(Languageletter311);
$("#notesRegion").text(Languageletter312 + ": ");
$("#notesPlayers").text(Languageletter313 + ": ");
$("#notesServer").text(Languageletter314 + ": ");
if($("#target-status").text()=="[Target not set]"){$("#target-status").text(Languageletter315)}

$("#legendmanualback").text(Languageletter316 + ":  ");
$("#legendmanualmess").text(Languageletter317 + ":  ");
$("#chatbtntitle").text(Languageletter318 + ":  ");
$("#legenddiscordwebh").text(Languageletter319 +"  ");

$('#backgroundPic>option:nth-child(1)').text(Languageletter133);
$('#backgroundPic>option:nth-child(2)').text(Languageletter320);
$('#backgroundPic>option:nth-child(3)').text(Languageletter321);
$('#backgroundPic>option:nth-child(4)').text(Languageletter322);
$('#backgroundPic>option:nth-child(5)').text(Languageletter323);

$('#msgcommand1').attr("data-original-title", Languageletter324);
$('#msgcommand2').attr("data-original-title", Languageletter325);
$('#msgcommand3').attr("data-original-title", Languageletter326);
$('#msgcommand4').attr("data-original-title", Languageletter327);
$('#msgcommand5').attr("data-original-title", Languageletter328);
$('#msgcommand6').attr("data-original-title", Languageletter329);


$('#minimapPicture').attr('placeholder',Languageletter331).attr('data-original-title',Languageletter330);
$('#minbtext').attr('placeholder',Languageletter332);
$('#leadbPicture').attr('placeholder',Languageletter333a).attr('data-original-title',Languageletter330);
$('#leadbtext').attr('placeholder',Languageletter334);
$('#teambPicture').attr('placeholder',Languageletter334a).attr('data-original-title',Languageletter330);
$('#leadbtext').attr('placeholder',Languageletter334);
$('#canvasPicture').attr('placeholder',Languageletter335).attr('data-original-title',Languageletter330);
$('#imgUrl').attr('placeholder',Languageletter336).attr('data-original-title',Languageletter330);
$('#imgHref').attr('placeholder',Languageletter337).attr('data-original-title',Languageletter341);

$('#changephotos>option:nth-child(1)').text(Languageletter338 + " 1");
$('#changephotos>option:nth-child(2)').text(Languageletter338 + " 2");
$('#changephotos>option:nth-child(3)').text(Languageletter338 + " 3");
$('#changephotos>option:nth-child(4)').text(Languageletter338 + " 4");
$('#changephotos>option:nth-child(5)').text(Languageletter338 + " 5");
$('#changephotos>option:nth-child(6)').text(Languageletter338 + " 6");

$('#pic1url').text(Languageletter339 + " http://i.imgur.com/RVBi3T1.gif");
$('#pic2url').text(Languageletter339 + " http://i.imgur.com/RVBi3T1.gif");
$('#pic3url').text(Languageletter339 + " http://i.imgur.com/RVBi3T1.gif");
$('#pic4url').text(Languageletter339 + " http://i.imgur.com/RVBi3T1.gif");
$('#pic5url').text(Languageletter339 + ". http://i.imgur.com/RVBi3T1.gif");
$('#pic6url').text(Languageletter339 + " http://i.imgur.com/RVBi3T1.gif");

$('#yt1url').text(Languageletter340);
$('#yt2url').text(Languageletter340);
$('#yt3url').text(Languageletter340);
$('#yt4url').text(Languageletter340);
$('#yt5url').text(Languageletter340);
$('#yt6url').text(Languageletter340);

$('#discwebhook1').attr('placeholder',Languageletter342 + ' 1').attr('data-original-title', Languageletter343 + '. https://discordapp.com/api/webhooks/.../...');
$('#discwebhook2').attr('placeholder',Languageletter342 + ' 3').attr('data-original-title', Languageletter344 + '. https://discordapp.com/api/webhooks/.../...');

$("#HideAllBthn").attr('data-original-title',Languageletter345);
