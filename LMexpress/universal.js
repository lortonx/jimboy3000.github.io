function universalchat() {
    setTimeout(function() {		
		if (application) application.setUniversalChat()
    }, 2000);

    var legbgpic = $("#menuBg").val();
    var legbgcolor = $("#menuPanelColor").val();


	window.authenticAgartoolId=[];
    var global = window;
    var my = {
        "name": "<i class='fa fa-universal-access' aria-hidden='true'></i>",
        //        "log": function(msg){ console.log(this.name + ":"+ msg); },
        //		"log": function(msg){ toastr["success"](this.name + ":"+ msg); },		
        "log": function(msg) {
            if (($('#chat-box').is(":visible") == false)) {
                //console.log(".....");
                /*
                window.teammatelegendmodnicks.forEach(function(a){
                	if (~msg.indexOf(a)+":") {	
                		msg="[Universal chat]:";
                	}
                	}); */
                if (~msg.indexOf("Received a command with an unknown name")) {
                    if (~msg.indexOf("Received a command with an unknown name: customSkins")) {} else {
                        toastr["success"]('<div class="toast-message"><span class="message-nick">' + this.name + ': </span><span class="message-text">' + msg + '</span><a href="#" data-user-id="agar tool" class="mute-user ogicon-user-minus"></a> </div>');
                    }
                } else if (~msg.indexOf(Premadeletter109b + " socket.io")) {
                    toastr.warning('<div class="toast-message"><span class="message-nick">' + this.name + ': </span><span class="message-text">' + msg + '</span><a href="#" data-user-id="agar tool" class="mute-user ogicon-user-minus"></a> </div>');
                    //playSound($('#commandSound').val());
                } else if (~msg.indexOf("minimap server")) {
                    toastr.warning('<div class="toast-message"><span class="message-nick">' + this.name + ': </span><span class="message-text">' + msg + '</span><a href="#" data-user-id="agar tool" class="mute-user ogicon-user-minus"></a> </div>');
                } else if (~msg.indexOf($('#nick').val() + ':')) {
                    if (window.noOgarioSocket) {
                        toastr["success"]('<div class="toast-message"><span class="message-nick">' + this.name + ': </span><span class="message-text">' + msg + '</span><a href="#" data-user-id="agar tool" class="mute-user ogicon-user-minus"></a> </div>');
                        playSound($('#messageSound').val());
                    } else {}
                } else if (~msg.indexOf('[Universal chat]:')) {} else if (~msg.indexOf('@')) {
                    msg.slice(1);
                    toastr.warning('<div class="toast-message"><span class="message-nick">' + this.name + ': </span><span class="message-text">' + msg + '</span><a href="#" data-user-id="agar tool" class="mute-user ogicon-user-minus"></a> </div>');
                    playSound($('#commandSound').val());
                } else {
                    toastr["success"]('<div class="toast-message"><span class="message-nick">' + this.name + ': </span><span class="message-text">' + msg + '</span><a href="#" data-user-id="agar tool" class="mute-user ogicon-user-minus"></a> </div>');
                    playSound($('#messageSound').val());
                }
            }
        },
        //        "tool_symbol": "Send text Universaly"
        "tool_symbol": ""
    };
	window.lalala = 5
    var stat = {
        "AgarToolVersion": window.lalala,
		
        //"AgarToolServer": "wss://minimap.agartool.io:9000",
		//"AgarToolServer": "wss://minimap.agartool.io",
		"AgarToolServer": "wss://minimap.agartool.io:443",
        minimapBalls: {},
        "socketIoURL": "https://legendmod.ml/ExampleScripts/socket-io.min.js",
        "minimapNickFont": "700 11px Ubuntu",
        "minimapNickColor": "#ffffff",
        "minimapNickStrokeColor": "#000000",
        "minimapNickStrokeSize": 2,
        "minimapTop": 24,
        "minimapTeammatesSize": 5.5,
        "minimapOffsetX": 71,
        "mapSize": 14142,
        "mapOffset": 7071,
        "pi2": 2 * Math.PI,
        "messageBoxBottom": ["82px", "40%"],
        "keyCodeEnter": 13,
        "keyCodeA": 65,
        "keyCodeR": 82
    };
    var cfg = {};
    var cfg_org = {
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

    function pre_loop() {
        // At this point jQuery can not be used
        if (!document.getElementById("top5-hud")) {
            my.pre_loop_timeout = (my.pre_loop_timeout || 1000) + 1000;
            setTimeout(pre_loop, my.pre_loop_timeout);
            my.log("wait for mod to load");
            return;
        }
        // Just to be sure, another 1 sec wait
        setTimeout(initialize, 1000);
    }
    pre_loop();
    function initialize() {
        //      $.extend(cfg, cfg_org, JSON.parse(GM_getValue("config", '{}')));
        $.extend(cfg, cfg_org, JSON.parse(my.storage_getValue("config", '{}')));
        global.ao2t = {
            my: my,
            stat: stat,
            cfg: cfg
        };
        var local_style = '';
        local_style += '#ao2t-hud {';
        local_style += ' font-size: 80%; pointer-events: auto;';
        local_style += '}';
        local_style += '#ao2t-hud * {';
        local_style += ' user-select: auto!important;';
        local_style += '}';
        local_style += '#ao2t-cfg-dlg {';
        local_style += ' border-radius:0; font-size: 80%; padding: 2px 10px; position: fixed;';
        local_style += ' pointer-events: auto; background-image: url(' + legbgpic + '); background-color: ' + legbgcolor + ' ; color: #ffffff;';
        local_style += ' overflow: hidden;';
        local_style += '}';
        local_style += '#ao2t-cfg-dlg * {';
        local_style += ' width: auto; user-select: auto!important; pointer-events: auto;';
        local_style += ' position: relative; float: initial;';
        //local_style +=     ' display: run-in;'; // NG
        local_style += '}';
        local_style += '#ao2t-cfg-dlg input {';
        local_style += ' background-color: rgba(0,0,0,0.4); color: #ffffff;';
        local_style += '}';
        $("head").append('<style>\n' + local_style + '\n</style>');
        $("#top5-hud").append('' +
            '<div id="ao2t-hud"><span class="hud-main-color">Universal:' +
            ' <span id="ao2t-capture"><i class="fa fa-universal-access" aria-hidden="true"></i></span>' +
            ' <span id="ao2t-config"><i class="fa fa-wrench" aria-hidden="true"></i></span></span>' +
            //                 '<div id="ao2t-top5" style="padding-left: 1em;"></div>'+
            '<div id="ao2t-top5" style="font-size: 14px;"></div>' +
            '</div>');
        $("#ao2t-capture").click(function(event) {
            //            my.log("capture_click");
            stat.capture = !stat.capture;
            if (stat.capture) {
                if (global.ogario) {
                    $("#ao2t-capture").removeClass("disconnected").addClass("connected");
                    //$("#ao2t-capture").text('??');
                    $("#ao2t-capture").html('<i class="fa fa-times" aria-hidden="true"></i>');
                } else {
                    $("#ao2t-capture").removeClass("disconnected").addClass("connected");
                    $("#ao2t-capture").html('<i class="fa fa-times" aria-hidden="true"></i>');

                }
                my.capture_start();
            } else {
                $("#ao2t-capture").removeClass("connected").addClass("disconnected");
                $("#ao2t-capture").html('<i class="fa fa-universal-access" aria-hidden="true"></i>');
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
        if (cfg.lmsa_teamtop) {
            //$(".team-top-menu").mousedown(function(){return false;});
            $("#top5-hud").mousedown(function() {
                return false;
            });
        } else {
            $("#ao2t-hud").mousedown(function(event) {
                return false;
            });
        }
        if (cfg.lmsa_chat) {
            $("#message-box").mousedown(function() {
                return false;
            });
        }
        // --- chat close ---
        if (cfg.chat_close) {
            $("#message-menu").append('<a href="#" id="ao2t-chat-close" style="float:right;">X</a>');
            $("#ao2t-chat-close").click(function() {
                my.chatClose();
            });
        }
        if (cfg.chat_vcenter) {
            $("#message-box").css("bottom", stat.messageBoxBottom[1]);
        }
        $("#message").keydown(function(event) {
            var modify = (event.altKey ? "a" : "") +
                (event.ctrlKey ? "c" : "") +
                (event.metaKey ? "m" : "") +
                (event.shiftKey ? "s" : "");
            if (event.keyCode === stat.keyCodeEnter) {
                if (modify === "a" && cfg.chat_alt) {
                    my.chatSend();
                    return false;
                } else if (modify === "ac" && cfg.chat_ctrlalt) {
                    my.chatSend({
                        "ogar": true
                    });
                    return false;
                } else if (modify === "c" && cfg.chat_ctrl) {
                    my.chatClose();
                    return false;
                }
            }
        });
        // --- skin toggle ---
        my.skinToggle_start();
		$("#ao2t-cfg-dlg").draggable()
    }	
    my.capture_start = function() {
        // If not, add chat submit button
        if ($("#ao2t-message").length) {
            $("#ao2t-message").show(); // .prop('disabled', false);
            $("#ao2t-minimap").show();
        } else {
            my.capture_init();
        }
        // Connection
        stat.tag = $('#clantag').val();
        stat.nick = $('#nick').val();
        stat.token = $('#server-token').val();
        stat.ws = 'wss://live-arena-' + stat.token + '.agar.io:80';
        my.connect();
        stat.update_timerid = setInterval(my.update, cfg.update_interval);
    };
    my.capture_end = function() {
        $("#ao2t-message").hide(); // .prop('disabled', true);
        $('#ao2t-top5').html('');
        $("#ao2t-minimap").hide();
        my.disconnect();
        clearInterval(stat.update_timerid);
        stat.update_timerid = null;
    };
    my.capture_init = function() {
        //        $("#message-menu").append('<a href="#" id="ao2t-message" style="float:right;">'+ my.tool_symbol +'</a>');
        $("#message-menu").prepend('<a href="#" id="ao2t-message" style="float:left;">' + my.tool_symbol + '</a>');
        //	  	$(".show-chat-emoticons.ogicon-smile").after('<a href="#" id="ao2t-message" style="float:right;">'+ my.tool_symbol +'</a>');

        $("#ao2t-message").click(my.chatSend);
        // minimap
        var minimap = $("#minimap");
        var minimapWidth = minimap.attr('width');
        var minimapHeight = minimap.attr('height');
        minimap.before('<canvas id="ao2t-minimap"' +
            ' style="position: absolute;"' +
            ' width="' + minimapWidth + '" height="' + minimapHeight + '">');
        //stat.minimapOffsetX = stat.minimapOffsetY + minimapHeight - minimapWidth;
    };
    my.chatSend = function(flg_) {
        var flg = flg_ || {};
        if (!stat.connected) {
            if ($("#ao2t-capture").hasClass("connected")) {
                global.toastr.error("L.M:->A.T: not connected");
                return;
            }
        }

        var msg = '[Universal chat]:' + $("#message").val();
        var msgLM = $("#message").val();
        if (msgLM.indexOf('[url]') == -1 && msgLM.indexOf('[yut]') == -1 && msgLM.indexOf('[skype]') == -1 && msgLM.indexOf('[discord]') == -1 && msgLM.indexOf('[srv]') == -1 && msgLM.indexOf('[tag]') == -1 && msgLM.indexOf('Legend.Mod') == -1 && msgLM.indexOf('https://agar.io/sip=151.80.91.73:1511') == -1) {
            if (msgLM.length) {
                my.sendMinimapServerCommand({
                    name: "chat",
                    //                nick: "LM: " + stat.nick,
                    //				nick: stat.nick,
                    nick: $('#nick').val(),
                    message: "LM:" + msg
                });
                if (flg.ogar) {
                    $(document).trigger(jQuery.Event('keydown', {
                        keyCode: stat.keyCodeEnter,
                        which: stat.keyCodeEnter
                    }));
                } else {
                    //               $("#message-box").hide();
                }
            }
        } else {
            console.log("Message included Script command, thus it is not sent to agar tool");
        }
    };
    my.chatClose = function() {
        $("#message-box").css("display", "none");
        if (cfg.chat_unpause && $("#pause-hud").css("display") == "block") { // Release during PAUSE
            $(document).trigger(jQuery.Event('keydown', {
                keyCode: stat.keyCodeR,
                which: stat.keyCodeR
            }));
            $(document).trigger(jQuery.Event('keyup', {
                keyCode: stat.keyCodeR,
                which: stat.keyCodeR
            }));
        }
    };
    my.update = function() {
        var ogarAlive = my.ogarIsAlive();
        if (ogarAlive != stat.alive) {
            my.tgarAlive(ogarAlive);
        }
        if (stat.alive) {
            my.tgarReposition();
        }
        my.ogarMinimapUpdate();
    };

    // -----  Configuration  -----
    my.config = function() {
        //        my.log("config_click2");
        if (!($('#ao2t-cfg-dlg').length)) {
            my.config_init();
        }
        my.cfg_load(cfg);
        $("#ao2t-cfg-dlg").show();
        $("#overlays").show();
    };
    my.config_init = function() {
        $("#overlays").append('<div id="ao2t-cfg-dlg"' +
            '  style="width:400px; height:480px; top:150px; left:300px; display: none;' +
            '">' +
            'Agar Tool/Legend Mod tools' +
            '<div style="overflow: scroll; ' +
            'position: relative; top:1.5em; left:0.5em; right:0.5em; bottom:1.5em;">' +
            '<div id="ao2t-cfg-base">' +
            '</div>' +
            '</div><br><br>' +
            '&nbsp;<span id="ao2t-cfg-default" class="btn btn-primary">' + Languageletter309.toUpperCase() + '</span>' +
            '&nbsp;<span id="ao2t-cfg-ok" class="btn btn-success">' + Languageletter171 + '</span>' +
            '&nbsp;<span id="ao2t-cfg-cancel" class="btn btn-danger">' + Languageletter283 + '</span>' +
            '</div>');
        $('#ao2t-cfg-base').append('' +
            '&nbsp;&nbsp;&nbsp;Update frequency [milliseconds]:<input type="text" data-ao2t-config="update_interval" style="width:6em;"/>' +
            '<br/>Agar Tool Obtained from' +
            '<br/>&nbsp;<label><input type="checkbox" data-ao2t-config="user_show"/>user list</label>' +
            '<br/>&nbsp;<label><input type="checkbox" data-ao2t-config="minimap_show"/>minimap</label>' +
            '&nbsp;Prefix:<input type="text" data-ao2t-config="tgar_prefix" style="width:4em;"/>' +
            '&nbsp;&nbsp;color:<input type="text" data-ao2t-config="tgar_color" style="width:6em;"/>' +
            //    '<span class="input-group-addon"><i id="tgar_color" style="background-color: rgb(0, 0, 0);"></i></span>'+
            '<br/>Send to Agar Tool' +
            '<br/>&nbsp;<label><input type="checkbox" data-ao2t-config="ogar_user"/>user info</label>' +
            '&nbsp;Prefix:<input type="text" data-ao2t-config="ogar_prefix" style="width:4em;"/>' +
            '<br/>LMB-Mouse split correction' +
            '<br/>&nbsp;<label><input type="checkbox" data-ao2t-config="lmsa_teamtop"/>Teamboard</label>' +
            '&nbsp;<label><input type="checkbox" data-ao2t-config="lmsa_chat"/>chat</label>' +
            '<br/>Chat option' +
            '<br/>&nbsp;<label><input type="checkbox" data-ao2t-config="chat_close"/>close</label>' +
            '&nbsp;<label><input type="checkbox" data-ao2t-config="chat_unpause"/>unpause</label>' +
            '&nbsp;<label><input type="checkbox" data-ao2t-config="chat_vcenter"/>vcenter</label>' +
            '<br/>&nbsp;<label><input type="checkbox" data-ao2t-config="chat_alt"/>Alt>T</label>' +
            '&nbsp;<label><input type="checkbox" data-ao2t-config="chat_ctrlalt"/>Ctrl+Alt>O+T</label>' +
            '&nbsp;<label><input type="checkbox" data-ao2t-config="chat_ctrl"/>Ctrl>Close</label>' +
            '<br/>Other' +
            '<br/>&nbsp;<label><input type="checkbox" data-ao2t-config="skin_toggle_auto"/>skin auto toggle</label>' +
            '&nbsp;&nbsp;&nbsp;Frequency [milliseconds]:<input type="text" data-ao2t-config="skin_toggle_interval" style="width:6em;"/>' +
            '<br/>&nbsp;&nbsp;* Changes will be reflected after restart' +
            '');
        $("#ao2t-cfg-default").click(function() {
            my.cfg_load(cfg_org);
        });
        $("#ao2t-cfg-ok").click(function() {
            if ($("#helloContainer").is(":visible")) {
                showMenu2();
            }
            cfg = my.cfg_save();
            //            GM_setValue("config", JSON.stringify(cfg));
            my.storage_setValue("config", JSON.stringify(cfg));
            my.config_cancel();
            $("#message-box").css("bottom", stat.messageBoxBottom[cfg.chat_vcenter ? 1 : 0]);
            my.skinToggle_start();

        });
        $("#ao2t-cfg-cancel").click(function() {
            if ($("#helloContainer").is(":visible")) {
                showMenu2();
            }
            my.config_cancel();
        });
        my.config_cancel = function() {
            //$("#overlays").hide();
            $("#ao2t-cfg-dlg").hide();
        };
    };
    // -----  skin toggle  -----
    my.skinToggle_start = function() {
        if (stat.skinToggle_timerid) {
            clearInterval(stat.skinToggle_timerid);
            delete stat.skinToggle_timerid;
        }
        if (cfg.skin_toggle_auto && cfg.skin_toggle_interval > 0) {
            stat.skinToggle_timerid = setInterval(my.skinToggle_update, cfg.skin_toggle_interval);
        }
    };
    my.skinToggle_update = function() {
        //my.log("skinToggle_update in");
        // --- check Legend Mod.v3 mode ---
        if (global.ogario && global.ogario.customSkins && global.ogario.vanillaSkins) {
            //my.log("skinToggle_update hasBoth");
            stat.skinToggle_hasBoth = true;
        }
        my.skinToggle_update_sub();
        if (stat.skinToggle_hasBoth && global.ogario.customSkins && !global.ogario.vanillaSkins) {
            //my.log("skinToggle_update retry");
            my.skinToggle_update_sub();
        }
    };
    my.skinToggle_update_sub = function() {
        $(document).trigger(jQuery.Event('keydown', {
            keyCode: stat.keyCodeA,
            which: stat.keyCodeA
        }));
        $(document).trigger(jQuery.Event('keyup', {
            keyCode: stat.keyCodeA,
            which: stat.keyCodeA
        }));
    };
    // =====  Agar Tool Communication processing / connection  =====	
	
    my.connect = function() {
        my.disconnect();
        if (!global.io) {
            //my.log(Premadeletter109b + " socket.io");
			this.socket = new WebSocket(AgarToolServer);
            //return loadScript(stat.socketIoURL, my.connect);
        }
			this.socket.onopen = () => {
            this.comebackTimeout = 5000
            this.log('Connected');
            var p = new Packet
            p.setCommandID(155);
            p.writeUInt8(stat.AgarToolVersion);
            my.sendBuffer(p);
            this.emit('estabilished')
			}
        this.socket.onmessage = message => my.readMessage(message);
        this.socket.onclose = close => {
            this.log('Disconnected', close);
            my.reconnect()
        };
        this.socket.onerror = error => this.log(`Connect error`, error);			
    };		
    my.closeConnection = function() {
        if (this.socket) {
            try {
            this.socket.onopen = null;
            this.socket.onmessage = null;
            this.socket.onerror = null;
            this.socket.onclose = null;
            this.socket.close();
            this.log('Disconnected')
            } catch (error) {}
            this.socket = null;
        }
    }
    my.increaseComeback = function() {
        this.comebackTimeout  = this.comebackTimeout<40000? this.comebackTimeout*2 : 40000
    }	
    my.reconnect = function() {setTimeout(() => {my.connect()}, this.comebackTimeout); my.increaseComeback()}
    my.isSocketOpen = function() {return this.socket !== null && this.socket.readyState === this.socket.OPEN;}
    my.sendBuffer = function(value) {
        if(!my.isSocketOpen()) return this.error('Not connected')
        this.socket.send(new Uint8Array(value.get()));
    }
    my.readMessage = function(message) {
        var p = new Packet(message.data)
        var opcode = p.readUInt8()
        switch (opcode) {
            case 97:
                var p97 = new Packet;
                p97.setCommandID(97);
                p97.writeUTF8String(function() {
                    return 'agartool@gay.io' + " - " + 'Lylko' + " - " + 'Alexander' + " - " + 'https://i.imgur.com/7cugADY.png';
                }());
                my.sendBuffer(p97);
                break;
            case 66: /* Message */
                const message_type = p.readUInt8()
                const chat_name = p.readUTF8String()
                const chat_message = p.readUTF8String()
                const type = message_type === 0?ChatMessageType.MESSAGE:ChatMessageType.COMMAND
                const time = new Date().toTimeString().replace(/^(\d{2}:\d{2}).*/, '$1');
                this.emit('message',this, time, type, chat_name, chat_name, chat_message,chat_name == ogarcopythelb.nick);
                break
            case 155: /* Player ID */
                this.playerID =  p.readUTF8String()
                this.onConnect()
                break;
            case 197: /* Maybe ping */
                const p2 = new Packet()
                p2.setCommandID(197);
                my.sendBuffer(p2);
                break;
            case 130: /* Player info on enter in room */
                //console.log('??????????? ??? ?????? ? ???????', 130)
                var total = p.readUInt16()
                for(var i=0;total>i;i++){
                    let playerID,nick,skinURL,skinID,isAlive,x,y,mass,json
                    playerID = p.readUTF8String()
                    nick = p.readUTF8String()
                    skinURL = p.readUTF8String()
                    skinID = p.readUTF8String()
                    isAlive = p.readBoolean()
                    x = p.readInt32()
                    y = p.readInt32()
                    mass = p.readUInt32()
                    json = p.readUTF8String()
                    if(this.playerID === playerID) break;
                    this.emit('player',{api:this,playerID,nick,skinURL,skinID,isAlive,x,y,mass,json,color:'#8C81C7',customColor:'#8C81C7'});
                    //(skinID||skinURL)&&console.log(130,{api:this,playerID,nick,skinURL,skinID,isAlive,x,y,mass,json,color:'#8C81C7',customColor:'#8C81C7'})
                }
                break;
            case 200: /* Player info */
            //console.log('op', 200)
                var total = p.readUInt16()
                for(var i=0;total>i;i++){
                    let playerID,nick,skinURL,skinID,isAlive,x,y,mass,json
                    playerID = p.readUTF8String()
                    var flags = p.readUInt8()
                    if (flags & 1) nick = p.readUTF8String()
                    if (flags & 2) skinURL = p.readUTF8String()
                    if (flags & 4) skinID = p.readUTF8String()
                    if (flags & 8) isAlive = p.readBoolean()
                    if (flags & 16) x = p.readInt32()
                    if (flags & 32) y = p.readInt32()
                    if (flags & 64) mass = p.readUInt32()
                    if (flags & 128) {
                        var flags2 = p.readUInt8()
                        if (flags2 & 1) json = p.readUTF8String()
                    }
                    if(this.playerID === playerID) continue;
                    this.emit('player',{api:this,playerID,nick,skinURL,skinID,isAlive,x,y,mass,json,color:'#8C81C7',customColor:'#8C81C7'});
                    //(skinID||skinURL)&&console.log(200,{api:this,playerID,nick,skinURL,skinID,isAlive,x,y,mass,json,color:'#8C81C7',customColor:'#8C81C7'})
                }
                break;
            case 201: /* Player info  when someone enter in room */
            
                    let playerID,nick,skinURL,skinID,isAlive,x,y,mass,json
                    playerID = p.readUTF8String()
                    nick = p.readUTF8String()
                    skinURL = p.readUTF8String()
                    skinID = p.readUTF8String()
                    isAlive = p.readBoolean()
                    x = p.readInt32()
                    y = p.readInt32()
                    mass = p.readUInt32()
                    json = p.readUTF8String()
                    if(this.playerID === playerID) break;
                    this.emit('player',{api:this,playerID,nick,skinURL,skinID,isAlive,x,y,mass,json,color:'#8C81C7',customColor:'#8C81C7'});
                    //(skinID||skinURL)&&console.log(201,{api:this,playerID,nick,skinURL,skinID,isAlive,x,y,mass,json,color:'#8C81C7',customColor:'#8C81C7'})
                    //console.log('op', 201, {api:this,playerID,nick,skinURL,skinID,isAlive,x,y,mass,json,color:'#8C81C7',customColor:'#8C81C7'})
                break;
            case 202: /* remove player from room */
                this.emit('playerRemove', p.readUTF8String())
                break;
            default: this.log('Unknown opcode',opcode)
        }
    }	
    onConnect = function() {
        if(my.isSocketOpen()){
            this.sendPlayerDeath()
            this.send_serverToken()
            legendmod.play && this.sendPlayerPosition(true)
        }
    }

    /* Below protocol functions and event handlers*/
    sendPlayerDisconnected = function() { // ????????? 
        var p = new Packet;
        p.setCommandID(163);
        my.sendBuffer(p);
    }
    send_clanTag = function(val = stat.tag, val2 = stat.token) {
        var p = new Packet;
        p.setCommandID(157);
        p.writeUTF8String(val);
        p.writeUTF8String(val2);
        my.sendBuffer(p);
    }
    send_serverToken = function(val = stat.tag, val2 = stat.token) {
        var p = new Packet;
        p.setCommandID(157);
        p.writeUTF8String(val);
        p.writeUTF8String(val2);
        my.sendBuffer(p);
    }
    sendPlayerSpawn = function() {
        this.sendPlayerPosition(true)
    }
    sendPlayerDeath = function() {
        this.sendPlayerPosition(true)
    }
    sendPlayerPosition = function(dontCheckClientPlay) {  //
        if (my.isSocketOpen() && (legendmod.play || dontCheckClientPlay) ) {
            let flags = 0
            if(this.changed.nick !== ogarcopythelb.nick) this.changed.nick = ogarcopythelb.nick ;flags |= 1 
            if(this.changed.skinURL !== ogarcopythelb.skinURL) this.changed.skinURL !== ogarcopythelb.skinURL;  flags |= 2
            //if(this.changed.skinID !== this.client.player_protocol_skin) this.changed.skinID !== this.client.player_protocol_skin;  flags |= 4
            if(this.changed.isAlive !== legendmod.play) this.changed.isAlive = legendmod.play;  flags |= 8
            if(this.changed.x !== ogario.playerX + ogario.mapOffsetX) this.changed.x = ogario.playerX + ogario.mapOffsetX;  flags |= 16
            if(this.changed.y !== ogario.playerY + ogario.mapOffsetY) this.changed.y = ogario.playerY + ogario.mapOffsetY;  flags |= 32
            if(this.changed.mass !== ogario.playerMass) this.changed.mass = ogario.playerMass;  flags |= 64
            if(this.changed.apiOgarID !== application.playerID) this.changed.apiOgarID = application.playerID;  flags |= 128
            let p = new Packet
            p.setCommandID(161)
            p.writeUInt8(flags)
            if (flags & 1) p.writeUTF8String(ogarcopythelb.nick)
            if (flags & 2) p.writeUTF8String(ogarcopythelb.skinURL)
            //if (flags & 4) p.writeUTF8String(this.client.player_protocol_skin)
            if (flags & 8) p.writeBoolean(legendmod.play)
            if (flags & 16) p.writeInt32(ogario.playerX + ogario.mapOffsetX)
            if (flags & 32) p.writeInt32(ogario.playerY + ogario.mapOffsetY)
            if (flags & 64) p.writeUInt32(ogario.playerMass)
            if (flags & 128) {
                var flags2 = 0
                flags2 |= 1
                p.writeUInt8(flags2)
				var temp = application.playerID
                if (flags2 & 1) p.writeUTF8String(JSON.stringify({temp}))
            }
            my.sendBuffer(p)
        }
    }
    sendChatMessage = function(type = ChatMessageType.COMMAND, nick = '', message = '') {
        const typ = type===ChatMessageType.MESSAGE?0:1
        if(message.indexOf('.')==0) return;
        const p = new Packet();
        p.setCommandID(66);
        p.writeUInt8(typ);
        p.writeUTF8String(nick);
        p.writeUTF8String(message);
        my.sendBuffer(p)
    }
		/*
        var grab_opt = {
            query: "version=" + encodeURIComponent(stat.AgarToolVersion) +
                "&server=" + encodeURIComponent(stat.ws)
        };
        stat.grab_socket = io.connect(stat.AgarToolServer, grab_opt);
        stat.grab_socket.on("info", function(minimap_info) {
            stat.minimap_info = minimap_info;
            my.minimap_connect();
        });*/
}
