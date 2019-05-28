// WARNING! This file contains some subset of JS that is not supported by type inference.
// You can try checking 'Transpile to ES5' checkbox if you want the types to be inferred
'use strict';
var _0x4ca2 = ["normal", "hk-split", "hk-doubleSplit", "doubleSplit", "Popsplit", "ALT+Q", "hk-split16", "setPause", "hk-showTop5", "hk-showSplitRange", "setShowSplitRange", "hk-showSplitInd", "hk-showTeammatesInd", "ALT+I", "hk-showOppColors", "setShowOppColors", "toggleSkins", "hk-transparentSkins", "setTransparentSkins", "hk-showSkins", "setShowSkins", "hk-showStats", "ALT+S", "setShowStats", "hk-toggleCells", "toggleCells", "hk-showFood", "hk-showGrid", "hk-showMiniMapGuides", "ALT+G", "setShowMiniMapGuides", 
"hk-hideChat", "setShowHUD", "hk-copyLb", "copyLb", "hk-showLb", "ALT+L", "hk-toggleAutoZoom", "toggleAutoZoom", "hk-resetZoom", "resetZoom", "toggleDeath", "hk-clearChat", "displayChatHistory", "hk-showBgSectors", "setShowBgSectors", "hk-hideBots", "setHideSmallBots", "setShowNames", "hk-hideTeammatesNames", "setHideTeammatesNames", "hk-showMass", "setShowMass", "hk-showMiniMap", "ALT+M", "hk-chatMessage", "ENTER", "enterChatMessage", "hk-quickResp", "hk-autoResp", "toggleAutoResp", "hk-zoomLevel", 
"ALT+1", "ALT+2", "ALT+3", "ALT+4", "ALT+5", "hk-switchServerMode", "switchServerMode", "hk-showTargeting", "setShowTargeting", "hk-changeTarget", "hk-privateMiniMap", "hk-showQuest", "setShowQuest", "command", "sendCommand", "comm9", "comm0", "MOUSE WHEEL", "LEFT", "spec-messageKey", "defaultMessageKey", "ogarioHotkeys", "loadDefaultHotkeys", "ogarioCommands", "saveCommands", "each", '</button> <button id="save-hotkeys" class="btn btn-success">', '</button></div><div id="hotkeys-cfg"></div><div id="hotkeys-inst"><ul><li>', 
"</li><li>", "hk-inst-delete", "hk-inst-keys", "hk-", "#hotkeys-cfg", '<div class="row"><div class="key-label"><input id="', '" class="command-in form-control input-sm" value="', '" maxlength="80" /></div><div class="default-key">', "defaultKey", '</div><div class="custom-key"><input id="', '" class="custom-key-in form-control input-sm" value="', "label", "#reset-hotkeys", "resetHotkeys", "#save-hotkeys", "saveHotkeys", "#close-hotkeys", ".hotkeys-link", "#hotkeys", "ctrlKey", "altKey", "ALT", "TAB", 
"ESC", "RIGHT", "DOWN", "DEL", "TILDE", "lastKeyId", "deleteHotkey", "setDefaultHotkey", "lastPressedKey", "onkeydown", "getPressedKey", "tagName", "INPUT", "target", "inputClassName", "setHotkey", "keyDown", "keyUp", "onmousedown", "which", "mouseFeed", "onbeforeunload", "exit", "history", "replaceState", "pathname", "/ogario", "hash", "NREUM", "ajax", "https://agar.io/agario.core.js?v=1", "$1 var ogario=$2.ogario,gameCtx=null;", "$1 if(!ogario.play&&ogario.targeting){$2=ogario.targetX;$3=ogario.targetY;} if(ogario.pause){$2=ogario.innerW/2*ogario.canvasScale; $3=ogario.innerH/2*ogario.canvasScale;}$4", 
"$1 ogario.setMapCoords($3,$5,$7,$9,$2,$8);", "if($1<ogario.zoomResetValue){", "if(!ogario.autoZoom){$3=ogario.zoomValue;} $1$2 (ogario.zoomSpeedValue||0.9) $5 ogario.zoomValue=$1;", "$1 if(!ogario.autoZoom){$3=ogario.zoomValue;}else{$2}$5", "ogario.playerCellsMass=[]; $1$2; ogario.playerCellsMass.push($2)$3 ogario.playerMass=$5; ogario.calculateMass();", "$1$2", "$3$4", "$1 if(ogario.gameMode!==':teams'){break;} $2", "$1$13", "$2=1; $3 if(!ogario.vanillaSkins&&ogario.customSkins){$6=0;}else{$5}else", 
"if(0){", "/ogario.animation;$2", "/ogario.animation,$2", "$1$2 ogario.animation $5$6$7", "var cellX=+(+$7),cellY=+(+$8),cellSize=+(+$9),isFood=!$3,isVirus=false,isPlayerCell=false,skipCell=false,nick=null,color=null,skin=null; if(isFood){if(!ogario.showFood||ogario.autoHideFoodOnZoom&&ogario.viewScale<0.2){break;}if(ogario.autoHideFood&&!ogario.foodIsHidden&&ogario.playerMass>1000){ogario.showFood=false;ogario.foodIsHidden=true;break;}if(!ogario.rainbowFood){ogario.foodCache.push({x:cellX,y:cellY,size:cellSize});break;}gameCtx.fillStyle=ogario.rgb2Hex($13&255,$14&255,$15&255);} if(ogario.hideSmallBots&&cellSize<=36){skipCell=true;break;} gameCtx.beginPath();gameCtx.arc(cellX,cellY,cellSize,0,2*Math.PI,false);gameCtx.closePath(); if(isFood){gameCtx.fill();break;} ogario.globalAlpha=gameCtx.globalAlpha; if(gameCtx.lineJoin==='miter'){isVirus=true;if(ogario.virColors&&ogario.play){gameCtx.fillStyle=ogario.setVirusColor(cellSize);gameCtx.strokeStyle=ogario.setVirusStrokeColor(cellSize);}else{gameCtx.fillStyle=ogario.virusColor;gameCtx.strokeStyle=ogario.virusStrokeColor;}if(ogario.transparentViruses){gameCtx.globalAlpha*=ogario.virusAlpha;}if(ogario.virusesRange&&ogario.play){ogario.virusesCache.push({x:cellX,y:cellY,size:cellSize});}gameCtx.fill();gameCtx.globalAlpha=ogario.globalAlpha;gameCtx.lineWidth=ogario.virusStrokeSize;gameCtx.stroke();break;} if((a[$4+ogario.nameMemOffset+4>>0]&1)==0|0){nick=ogario.getString($4+ogario.nameMemOffset+5);}else{nick=ogario.getString(c[$4+ogario.nameMemOffset+12>>2]|0);} color=ogario.rgb2Hex($13&255|0,$14&255|0,$15&255|0); gameCtx.fillStyle=color; if(nick&&color){if(ogario.showCustomSkins&&ogario.customSkins){skin=ogario.getCustomSkin(nick,color);}} if(ogario.play){var idA=c[$4+ogario.idOffset>>2]|0;var idB=c[ogario.idMemOffset]|0;var idC=c[ogario.idMemOffset+1]|0;loop:do{if((idB|0)!=(idC|0)){while(true){if((c[idB>>2]|0)==(idA|0)){break loop;}idB=idB+4|0;if((idB|0)==(idC|0)){idB=idC;break;}}}}while(false);isPlayerCell=(idB|0)!=(idC|0); if(isPlayerCell){ogario.playerCells.push({x:cellX,y:cellY,size:cellSize});ogario.playerColor=color;} if((ogario.oppColors&&!ogario.oppRings)||(ogario.myCustomColor&&isPlayerCell)){gameCtx.fillStyle=ogario.setOppColor(cellSize,isPlayerCell);} if(!isPlayerCell&&(ogario.splitRange||ogario.oppRings)){ogario.cacheCells(cellX,cellY,cellSize);}} if(ogario.transparentCells){gameCtx.globalAlpha*=ogario.cellsAlpha;}  gameCtx.fill(); gameCtx.globalAlpha=ogario.globalAlpha; if(((ogario.transparentSkins||(ogario.play&&ogario.oppColors))&&!(isPlayerCell&&!ogario.myTransparentSkin))||isPlayerCell&&ogario.myTransparentSkin){gameCtx.globalAlpha*=ogario.skinsAlpha;} if(skin){gameCtx.drawImage(skin,cellX-cellSize,cellY-cellSize,2*cellSize,2*cellSize);} break;$1", 
"$1$2&&ogario.vanillaSkins&&!skin)", "$1 $2=-1; $4", "$1=-1; $3", "$1 if($3==-1){return;} $2", "async", "appendChild", "GET", "specialOn", "resize", "customDraw", "drawCellInfo", "getCustomSkin", "setVirusStrokeColor", "setCursorPosition", "showStatsDialog", "_showStatsDialog", "_onConnect", "_onPlayerSpawn", "_onPlayerDeath", "_onAgarioCoreLoaded", "onAgarioCoreLoaded", "setNames", "_wasInitialized", "wasInitialized", "onPlayerBanned", "menuHeight", "translate(-50%, 0%) scale(", "innerW", "innerH", 
"sendFbToken", "sendGplusToken", "lz4", "onresize", "getClientVersion", "getDefaultSettings", "jQuery", "call", "exports", "function", "length", "byteLength", "toByteArray", "fromByteArray", "undefined", "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", "charCodeAt", "Invalid string. Length must be a multiple of 4", "push", "base64-js", "ieee754", "Buffer", "INSPECT_MAX_BYTES", "kMaxLength", "TYPED_ARRAY_SUPPORT", "error", "This browser lacks typed array (Uint8Array) support which is required by ", 
"`buffer` v5.x. Use `buffer` v4.x if you require old browser support.", "prototype", "foo", "Invalid typed array length", "__proto__", "If encoding is specified then the first argument must be a string", "species", "defineProperty", "poolSize", "number", '"value" argument must not be a number', "from", '"size" argument must be a number', '"size" argument must not be negative', "string", "fill", "allocUnsafe", "utf8", "isEncoding", '"encoding" must be a valid string encoding', "write", "slice", "'length' is out of bounds", 
"copy", "type", "isArray", "data", "First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.", "Attempt to allocate Buffer larger than maximum ", "size: 0x", "toString", " bytes", "alloc", "_isBuffer", "compare", "isBuffer", "Arguments must be Buffers", "hex", "utf-8", "ascii", "latin1", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "concat", '"list" argument must be an Array of Buffers', "Unknown encoding: ", "swap16", "Buffer size must be a multiple of 16-bits", 
"swap64", "Buffer size must be a multiple of 64-bits", "apply", "equals", "Argument must be a Buffer", "join", " ... ", "<Buffer ", "out of range index", "min", "indexOf", "lastIndexOf", "val must be string, number or Buffer", "readUInt16BE", "includes", "Invalid hex string", "substr", "Buffer.write(string, encoding, offset[, length]) is no longer supported", "Attempt to write outside buffer bounds", "toLowerCase", "_arr", "fromCharCode", "subarray", "offset is not uint", "Trying to access beyond buffer length", 
"readUIntBE", "readUInt8", "readUInt16LE", "readUInt32LE", "readIntLE", "pow", "readIntBE", "readInt8", "readInt16BE", "readInt32LE", "read", "readFloatBE", "readDoubleLE", "readDoubleBE", '"buffer" argument must be a Buffer instance', '"value" argument is out of bounds', "writeUIntLE", "writeUIntBE", "writeUInt8", "writeUInt16LE", "writeUInt16BE", "writeUInt32BE", "writeIntLE", "writeIntBE", "writeInt8", "writeInt16LE", "writeInt16BE", "writeInt32LE", "Index out of range", "writeFloatBE", "writeDoubleLE", 
"writeDoubleBE", "sourceStart out of bounds", "sourceEnd out of bounds", "encoding must be a string", "Out of range index", "trim", "replace", "isView", "[object Array]", "isBoolean", "isNull", "isNumber", "isString", "symbol", "isSymbol", "isUndefined", "[object RegExp]", "object", "[object Date]", "isDate", "isError", "isFunction", "boolean", "../../is-buffer/index.js", "UINT32", "UINT64", "./lib/uint64", "_high", "remainder", "_low", "fromBits", "fromNumber", "toNumber", "add", "subtract", "clone", 
"negate", "multiply", "shiftLeft", "greaterThan", "lessThan", "and", "not", "xor", "shiftRight", "shiftr", "shiftl", "rotateLeft", "rotl", "rotateRight", "rotr", "amd", "_a32", "_a48", "_a16", "_a00", "fromString", "div", "division by zero", "_events", "_maxListeners", "EventEmitter", "n must be a positive number", "emit", 'Uncaught, unspecified "error" event. (', "context", "addListener", "listener must be a function", "newListener", "listener", "warned", "(node) warning: possible EventEmitter memory ", 
"leak detected. %d listeners added. ", "Use emitter.setMaxListeners() to increase limit.", "trace", "once", "removeListener", "splice", "removeAllListeners", "listeners", "listenerCount", "abs", "floor", "LN2", "create", "super_", "constructor", "readFloatLE", "imul", "uncompress", "compress", "compressHC", "compressDependent", "input too large", "compressBound", "output too small: ", " < ", "end", "LZ4_uncompress", "buffer", "stream", "Transform", "util", "utils", "bindings", "./binding", "STATES", 
"SIZES", "options", "binding", "useJS", "pos", "descriptor", "descriptorStart", "streamSize", "dictId", "skippableSize", "state", "MAGIC", "_main", "emit_Error", "check_Size", "Unexpected end of LZ4 stream", "read_MagicNumber", "SKIP_SIZE", "Invalid magic number: ", "toUpperCase", "Invalid version: ", " != ", "blockMaxSizes", "Invalid block max size: ", "read_Size", "DICTID", "read_DictId", "DESCRIPTOR_CHECKSUM", "descriptorChecksum", "Invalid stream descriptor checksum", "DATABLOCK_SIZE", "read_DataBlockSize", 
"EOS", "dataBlockSize", "read_DataBlockData", "dataBlock", "DATABLOCK_CHECKSUM", "blockChecksum", "Invalid block checksum", "DATABLOCK_UNCOMPRESS", "uncompress_DataBlock", "blockMaxSize", "Invalid data block: ", "streamChecksum", "currentStreamChecksum", "read_EOS", "_flush", "read_SkippableSize", "read_Descriptor", "SIZE", "read_DescriptorChecksum", "DATABLOCK_DATA", "read_DataBlockChecksum", "./encoder_stream", "inherits", "hasOwnProperty", "highCompression", "blockIndependence", "Invalid blockMaxSize: ", 
"first", "checksum", "headerSize", "DESCRIPTOR", "dict", "header", "MAGICNUMBER", "flg", "size", "update_Checksum", "CHECKSUM_UPDATE", "compress_DataBlock", "DATABLOCK_COMPRESS", "writeUInt32LE", "_transform", "CHECKSUM", "./static", "version", "0.5.1", "createDecoderStream", "./decoder_stream", "decode", "createEncoderStream", "encode", "./encoder", "decodeBlock", "encodeBound", "encodeBlockHC", "MAGICNUMBER_BUFFER", "EOS_BUFFER", "VERSION", "MAGICNUMBER_SKIPPABLE", ".lz4", "xxhashjs", "digest", 
"v0.", "nextTick", '"callback" argument must be a function', "_process", "clearTimeout has not been defined", "run", "fun", "array", "title", "browser", "env", "argv", "versions", "off", "prependOnceListener", "process.binding is not supported", "cwd", "chdir", "process.chdir is not supported", "umask", "./lib/_stream_duplex.js", "process-nextick-args", "core-util-is", "./_stream_readable", "writable", "allowHalfOpen", "ended", "destroyed", "_readableState", "_writableState", "_destroy", "./_stream_transform", 
"ReadableState", "events", "./internal/streams/stream", "safe-buffer", "Uint8Array", "debuglog", "./internal/streams/BufferList", "./internal/streams/destroy", "close", "pause", "prependListener", "./_stream_duplex", "objectMode", "highWaterMark", "flowing", "endEmitted", "reading", "sync", "needReadable", "emittedReadable", "readableListening", "resumeScheduled", "defaultEncoding", "readingMore", "decoder", "encoding", "StringDecoder", "readable", "_read", "destroy", "getPrototypeOf", "stream.unshift() after end event", 
"stream.push() after EOF", "unshift", "Invalid non-string/buffer chunk", "string_decoder/", "read: emitReadable", "length less than watermark", "do read", "emit readable", "maybeReadMore read 0", "pipe", "pipesCount", "pipes", "pipe count=%d opts=%j", "stdout", "stderr", "unpipe", "hasUnpiped", "onend", "drain", "cleanup", "finish", "needDrain", "ondata", "false write response, pause", "awaitDrain", "onerror", "onfinish", "pipeOnDrain", "resume", "resume read 0", "call pause flowing=%j", "flow", 
"wrapped data", "bind", "wrapped _read", "_fromList", "shift", "head", "next", '"endReadable()" called on non-empty stream', "afterTransform", "needTransform", "transforming", "writecb", "writeencoding", "write callback called multiple times", "writechunk", "_transformState", "transform", "flush", "prefinish", "_transform() is not implemented", "_write", "Calling transform done when still transforming", "chunk", "callback", "entry", "v0.9.", "util-deprecate", "writableObjectMode", "finalCalled", 
"finished", "decodeStrings", "bufferProcessing", "onwrite", "bufferedRequest", "lastBufferedRequest", "prefinished", "errorEmitted", "bufferedRequestCount", "getBuffer", "_writableState.buffer is deprecated. Use _writableState.getBuffer ", "instead.", "DEP0003", "hasInstance", "writev", "_writev", "final", "May not write null values to stream", "pendingcb", "cork", "corked", "uncork", "writing", "writelen", "corkedRequestsFree", "isBuf", "allBuffers", "_write() is not implemented", "ending", "_final", 
"_undestroy", "undestroy", "Cannot call a class as a function", "tail", "clear", "PassThrough", "./lib/_stream_readable.js", "Stream", "Readable", "Duplex", "./lib/_stream_transform.js", "./lib/_stream_passthrough.js", "./readable", "./lib/_stream_writable.js", "Argument must not be a number", "Argument must be a number", "allocUnsafeSlow", "SlowBuffer", "readable-stream/readable.js", "Writable", "readable-stream/writable.js", "readable-stream/duplex.js", "readable-stream/transform.js", "readable-stream/passthrough.js", 
"_isStdio", "raw", "text", "fillLast", "lastNeed", "lastTotal", "lastChar", "repeat", "noDeprecation", "throwDeprecation", "traceDeprecation", "warn", "localStorage", "true", "stringify", "[Circular]", "deprecate", "process", "NODE_DEBUG", "test", "pid", "format", "depth", "_extend", "showHidden", "colors", "stylize", "inspect", "yellow", "bold", "green", "magenta", "red", "styles", "forEach", "customInspect", "getOwnPropertyNames", "description", "name", "[Function", " [Function", "toUTCString", 
"regexp", "[Object]", "map", "seen", "pop", "null", "match", "get", "[Getter/Setter]", "special", "[Getter]", "set", "[Setter]", "value", "split", "   ", "reduce", "isNullOrUndefined", "isRegExp", "isObject", "[object Error]", "./support/isBuffer", "Jan", "Feb", "Mar", "May", "Jun", "Jul", "Aug", "Oct", "Nov", "Dec", "getSeconds", "log", "cuint", "2246822519", "668265263", "374761393", "update", "seed", "total_len", "init", "memsize", "memory", "xxh_update", "XXH", "Start", "Ustawienia", "Przywr\u00f3c ustawienia domy\u015blne", 
"Animacja", "Zoom", "Odrodzenie", "Skiny", "Pokarm", "Przezroczysto\u015b\u0107 / kolory", "Siatka / sektory", "Minimapa", "Wspomagacze", "Sterowanie myszk\u0105", "HUD", "Czat", "Dodatkowe", "Wy\u0142\u0105cz skiny", "Wy\u0142\u0105cz kolory", "Pomi\u0144 statystyki po \u015bmierci", "Poka\u017c zadanie (quest)", "Auto zoom", "Op\u00f3\u017anienie animacji", "Szybko\u015b\u0107 zoomu", "Szybkie odrodzenie (klawisz)", "Autoukrywanie nazw i masy", "Autoukrywanie nazw", "Autoukrywanie masy", "Autoukrywanie pokarmu (masa)", 
"Autoukrywanie pokarmu (zoom)", "Zoptymalizowane nazwy", "Ukryj w\u0142asn\u0105 nazw\u0119", "Ukryj nazwy graczy teamu", "Zoptymalizowana masa (+/-2%)", "Skr\u00f3cona masa (k)", "Licznik strza\u0142\u00f3w (wirusy)", "Ukryj w\u0142asn\u0105 mas\u0119", "Podstawowe skiny", "M\u00f3j przezroczysty skin", "M\u00f3j w\u0142asny kolor", "Przezroczyste kulki", "Przezroczyste wirusy", "Siatka", "Granice mapy", "Duchy kulek", "Poka\u017c minimap\u0119", "Poka\u017c siatk\u0119 minimapy", "Poka\u017c duchy kulek na minimapie", 
"Jednokolorowi gracze", "Kolorowy pokarm", "Ringi przeciwnik\u00f3w", "Kolory wirus\u00f3w", "Zasi\u0119g podzia\u0142u", "Zasi\u0119g wirus\u00f3w", "Obw\u00f3dki nazw i masy", "Obw\u00f3dki nazw", "Obw\u00f3dki masy", "Wska\u017aniki graczy teamu", "LPM - Split myszk\u0105", "PPM - Feed myszk\u0105", "Odwr\u00f3\u0107 klawisze myszki", "Wy\u0142\u0105cz czat", "Ukryj czat", "Emotikony", "Czatbox zamiast wyskakuj\u0105cych wiadomo\u015bci", "D\u017awi\u0119k powiadomienia o wiadomo\u015bci", "D\u017awi\u0119k powiadomienia o komendzie", 
"Poka\u017c top 5 teamu", "Poka\u017c aktualny czas", 'Nag\u0142\u00f3wek "Topka"', "Wy\u015brodkowana topka", "Statystyki na g\u00f3rze", "Poka\u017c statystyki", "Statystyki: Masa", "Statystyki: STE", "Statystyki: n/16", "Statystyki: FPS", "Blokuj popupy (reklamy/sklep/zadanie)", "Aby ustawi\u0107 skr\u00f3t klawiszowy kliknij na polu skr\u00f3tu i naci\u015bnij wybrany klawisz.", "Aby usun\u0105\u0107 skr\u00f3t klawiszowy kliknij na polu skr\u00f3tu i naci\u015bnij klawisz DELETE.", "Mo\u017cliwe kombinacje skr\u00f3t\u00f3w klawiszowych z u\u017cyciem klawiszy CTRL oraz ALT.", 
"Feed", "Podzia\u0142", "Podw\u00f3jny podzia\u0142", "Podzia\u0142 na 16", "Pauza kulki", "Poka\u017c/ukryj top 5 teamu", "Poka\u017c/ukryj aktualny czas", "Poka\u017c/ukryj zasi\u0119g podzia\u0142u", "Poka\u017c/ukryj zasi\u0119g podzia\u0142u z ringami", "Poka\u017c/ukryj wska\u017aniki graczy teamu", "Poka\u017c/ukryj kolory przeciwnik\u00f3w", "Prze\u0142\u0105cz skiny (w\u0142asne/standardowe)", "Poka\u017c/ukryj skiny", "W\u0142\u0105cz/wy\u0142\u0105cz przezroczyste skiny", "Poka\u017c/ukryj statystyki gry", 
"Prze\u0142\u0105cz kulk\u0119 (najmniejsza/najwi\u0119ksza)", "Poka\u017c/ukryj prowadnice na minimapie", "Poka\u017c/ukryj czat", "Poka\u017c/ukryj HUD", "Kopiuj topk\u0119", "Poka\u017c/ukryj topk\u0119", "Reset zoomu", "Zoom - poziom", "Prze\u0142\u0105cz miejsce \u015bmierci", "Poka\u017c histori\u0119 czatu / Czy\u015b\u0107 czat", "Poka\u017c/ukryj nazwy", "Poka\u017c/ukryj nazwy graczy teamu", "Poka\u017c/ukryj minimap\u0119", "Napisz wiadomo\u015b\u0107 na czacie", "Szybkie odrodzenie (respawn)", 
"W\u0142\u0105cz/wy\u0142acz auto odrodzenie", "Prze\u0142\u0105cz serwer [publiczny/prywatny]", "Poka\u017c/ukryj panel namierzania", "Zatrzymaj namierzanie", "Zmie\u0144 cel", "Poka\u017c cel na minimapie", "Poka\u017c/ukryj zadanie", "Komendy", "Pomocy na %currentSector%!", "Wr\u00f3g na %currentSector%!", "Zabij pomocnika!", "Strzel z wirusa!", "Zjedz wirusa!", "Zjeba\u0142em, wybacz.", "Ja pierdol\u0119...", "Kurwa ma\u0107!", "Lewo!", "G\u00f3ra!", "Prawo!", "D\u00f3\u0142!", "Zapisz komendy", 
"Przywr\u00f3c ustawienia domy\u015blne wygl\u0105du", "Podstawowy", "Motyw", "Ciemny motyw", "Kolor g\u0142\u00f3wny", "Czcionka sektor\u00f3w", "Nazwy", "Masa", "Wirusy", "Czcionka masy", "Skala masy wirus\u00f3w", "Skala obw\u00f3dek tekstu", "Grubo\u015b\u0107 siatki sektor\u00f3w", "Rozmiar czcionki sektor\u00f3w", "Przezroczysto\u015b\u0107 kulek", "Przezroczysto\u015b\u0107 skin\u00f3w", "Przezroczysto\u015b\u0107 wirus\u00f3w", "Grubo\u015b\u0107 obw\u00f3dki wirus\u00f3w", "Wska\u017anik gracza", 
"Bezpieczna strefa", "Menu", "Motyw menu", "Panel", "Panel (2)", "Tekst panelu", "Przycisk #1", "Przycisk #2", "Przycisk #2 (2)", "Przycisk #3", "Przycisk #4", "Przycisk #4 (2)", "T\u0142o", "Statystyki", "Topka - ja", "Topka - team", "Czcionka HUD", "Skala HUD", "Czas wiadomo\u015bci", "Nick wiadomo\u015bci", "T\u0142o komendy", "Tekst komendy", "Nick komendy", "T\u0142o czatboxu", "Skala czatu", "Sektory", "Aktualny sektor", "Prowadnice", "Obw\u00f3dka nicku", "Obw\u00f3dka mojej kulki", "Miejsce \u015bmierci", 
"Czcionka minimapy", "Czcionka nicku", "Szeroko\u015b\u0107 minimapy", "Rozmiar nicku", "Grubo\u015b\u0107 obw\u00f3dki nicku", "Wielko\u015b\u0107 mojej kulki", "Grubo\u015b\u0107 obw\u00f3dki mojej kulki", "Wielko\u015b\u0107 graczy", "Przezroczysto\u015b\u0107 duch\u00f3w kulek", "Grafika t\u0142a", "Grafika kursora", "Czat zosta\u0142 w\u0142\u0105czony!", "Czat zosta\u0142 ukryty!", "Skiny zosta\u0142y ukryte!", "Auto odrodzenie zosta\u0142o w\u0142\u0105czone!", "Auto odrodzenie zosta\u0142o wy\u0142\u0105czone!", 
"Auto zoom zosta\u0142 w\u0142\u0105czony!", "Brak celu", "Nie \u017cyje", "Masa razem", "Eksport / import ustawie\u0144", "Eksportuj ustawienia", 'Aby zaimportowa\u0107 wybrane ustawienia wklej poni\u017cej wyeksportowany wcze\u015bniej kod i naci\u015bnij przycisk "Importuj ustawienia".', "Profil", "Profile", "Dodaj skiny", "Dzi\u0119ki Awesome!", "Zapisz ustawienia", "Resetuj ustawienia", "Zamknij", "Napisz wiadomo\u015b\u0107", "Aktywne party", "Brak aktywnych party ;(", "Playlista", "PAUZA!", 
"Odwied\u017a", "UWAGA! Popupy zosta\u0142y zablokowane w ustawieniach.", "Odblokuj tymczasowo", "Top", "Topka", "U\u017cytkownik", "U\u017cytkownik %user% zosta\u0142 wyciszony.", "Wy\u0142\u0105czono wyciszenie u\u017cytkownika %user%.", "Wycisz", "Wyciszeni u\u017cytkownicy", "Aktywni u\u017cytkownicy", "Brak", "Wr\u00f3\u0107", "Stw\u00f3rz party", "Do\u0142\u0105cz", "Zaloguj", "Wyloguj", "Zaloguj z Facebook", "Darmowe Monety", "Zadania", "Graj", "Graj jako go\u015b\u0107", "Sklep", "Obserwuj", 
"Home", "Settings", "Restore default settings", "Animation", "Respawn", "Names", "Skins", "Food", "Minimap", "Helpers", "Mouse control", "Chat", "Stats", "Extras", "No skins", "Show mass", "Show quest", "Animation delay", "Zoom speed", "Quick respawn (hotkey)", "Auto respawn", "Auto hide names and mass", "Auto hide names", "Auto hide mass", "Auto hide food (mass)", "Optimized names", "Hide my name", "Hide teammates names", "Optimized mass (+/-2%)", "Short mass (k)", "Virus shots", "Hide my mass", 
"Hide enemies mass", "Vanilla skins", "Custom skins", "My transparent skin", "My custom color", "Transparent cells", "Show background sectors", "Show map borders", "Ghost cells", "Show minimap", "Show minimap grid", "Show minimap guides", "Show ghost cells", "Optimized food", "Rainbow food", "Opponents colors", "Opponents rings", "Viruses colors", "Split range", "Names and mass stroke", "Mass stroke", "Teammates indicators", "LMB - Mouse split", "RMB - Mouse feed", "Invert mouse buttons", "Hide chat", 
"Sound notifications", "Emoticons", "Show videos on chat", "Chatbox instead of popups", "Message notification sound", "Command notification sound", "Show targeting", "Show leaderboard mass", '"Leaderboard" header', "Centered leaderboard", "Game stats at the top", "Show game stats", "Game stats: Mass", "Game stats: STE", "Game stats: n/16", "Game stats: FPS", "Block popups (ads/shop/quest)", "To assign a hotkey click on the input field and press your chosen key.", "To delete a hotkey click on the input field and press the DELETE key.", 
"Possible key combinations with the CTRL and ALT keys.", "Split", "Double split", "Split 16", "Cell pause", "Show/hide team top 5", "Show/hide current time", "Show/hide split range", "Show/hide opponents colors", "Show/hide skins", "Show/hide game stats", "Toggle own cells (smallest/biggest)", "Show/hide food", "Show/hide grid", "Show/hide chat", "Show/hide HUD", "Copy leaderboard", "Toggle auto zoom", "Reset zoom", "Toggle death location", "Show chat history / Clear chat", "Show/hide background sectors", 
"Show/hide small bots", "Show/hide teammates names", "Show/hide mass", "Enter chat message", "Quick respawn", "Toggle auto respawn", "Switch server [public/private]", "Start/stop targeting (following)", "Commands", "Feed me!", "Split into me!", "Need a teammate!", "Eat the virus!", "Let's bait!", "Fake tricksplit!", "Fuck!", "Tricksplit!", "Left!", "Up!", "Theme", "Restore theme default settings", "Theme preset", "Light theme", "Background", "Grid", "Sectors font", "Names stroke", "Virus", "Virus stroke", 
"Mass font", "Names scale", "Text stroke scale", "Food size", "Sectors grid width", "Sectors font size", "Cells transparency", "Virus transparency", "Names & mass transparency", "Virus stroke size", "Teammate indicator", "Cursor tracking", "Safe area", "Danger area", "Menu theme", "Main color", "Button text", "Panel text (2)", "Button #1", "Button #1 (2)", "Button #2 (2)", "Button #3", "Button #3 (2)", "Button #4", "Button #4 (2)", "Transparency", "Text", "Mass", "Leaderboard - me", "Leaderboard - teammate", 
"HUD font", "HUD scale", "Message time", "Message nick", "Command background", "Command time", "Command nick", "Chatbox color", "Chat scale", "Sectors", "Current sector", "Guides", "Nick", "Nick stroke", "My cell", "My cell stroke", "Teammates", "Death location", "Minimap font", "Nick font", "Minimap width", "Sectors transparency", "My cell size", "My cell stroke size", "Ghost cells transparency", "Graphics / cursors", "Custom background image", "Custom cursor image", "Chat is visible!", "Chat is hidden!", 
"Skins are visible!", "Skins are hidden!", "Small bots are visible!", "Small bots are hidden!", "Auto respawn is on!", "Auto respawn is off!", "Auto zoom is on!", "Auto zoom is off!", "Target not set", "Mass altogether", "Active players", "Total mass", "Export / import settings", "Import settings", 'To import selected settings paste an exported code below and press the "Import settings" button.', "Add skins", "Thanks to Awesome!", "Saved!", "Reset to default", "Close", "Active parties", "No active parties ;(", 
"Playlist", "PAUSE!", "WARNING! Popups are blocked in the settings.", "Temporary unblock", "Score", "Leaderboard", "User %user% has been unmuted.", "Mute", "Muted users", "Active users", "Show active users", "None", "Sounds", "Daily Quest", "Shop", "navigator", "language", "comm1", "comm2", "comm3", "comm4", "comm5", "comm6", "comm7", "comm8", "comm10", "comm11", "comm12", "comm13", "comm14", "&amp;", "&lt;", "&gt;", "&quot;", "&#x2F;", "smile.svg", "wink.svg", "grin.svg", "xgrin.svg", "joy.svg", 
"cry.svg", "tongue.svg", "heart.svg", "astonished.svg", "sweat.svg", "neutral.svg", "expressionless.svg", "money.svg", "angel.svg", "devil.svg", "poo.svg", "clap.svg", "ok.svg", "thumbd.svg", "imgur.com", "https://imgur.com/", "https://i.imgur.com/xdmUp5N.png", "https?:\\/\\/\\w+\\.imgur\\.com\\/\\w{6,}\\.(?:%file_ext%)\\??\\d*", "put.re", "https?:\\/\\/\\w+\\.put\\.re\\/\\w{8,}\\.(?:%file_ext%)", "postimages.org", "https://postimages.org/", "OGARio v3", "#01d9cc", "#00243e", "#000000", "#ffffff", 
"#002f52", "#00b9e8", "#5000ff", "#bf00aa", "ubuntu-bold", "ogario-v3", "#8096a7", "#018cf6", "#0099c0", "#814ee3", "https://cdn.ogario.ovh/static/img/pattern.png", "rgba(0,0,0,0.4)", "https://cdn.ogario.ovh/static/img/cursors/cursor_02.cur", "OGARio v2", "#ff7800", "#111111", "#292929", "#666666", "#e16400", "rgba(255,120,0,0.9)", "OGARio LE", "#b5a642", "#998c36", "SniiKz's Style", "#fc0079", "#1d0526", "#65458f", "#3b0431", "#6b0036", "#4d0227", "#aa084e", "#80063b", "#1fe000", "#e8e8e8", "rgba(36,36,36,0.9)", 
"#ff00a8", "#4d4d4d", "#acba07", "https://cdn.ogario.ovh/static/img/cursors/cursor_01.cur", "HKG Style", "#651fff", "rgba(101,31,255,0.9)", "Agar.io Light", "#f2fbff", "#858a8c", "#ced6d9", "#33ff33", "#2de52d", "rgba(255,255,255,0.9)", "Agar.io Dark", "#999999", "#333333", "#8d5fe6", "#f300d8", "#df00c6", "#222222", "#bbbbbb", "#428bca", "#3071a9", "#5cb85c", "#449d44", "#f0ad4e", "#ec971f", "#d9534f", "#c9302c", "Agar.io", "#000a11", "Ubuntu", "ubuntu", "rgba(191,0,170,0.9)", "getItem", "ogarioThemeSettings", 
"location", "reload", "<style type='text/css'>", "appendTo", "html", "append", '<div class="preset-box"><span class="title-box">', '</span><div class="select-wrapper"><select id="', '" class="form-control"></select></div></div>', '<option value="', "</option>", "val", "change", '<div class="color-box"><span class="title-box">', '</span><div class="input-group ', '" id="', '" class="form-control" /><span class="input-group-addon"><i></i></span></div></div>', "colorpicker", "changeColor.colorpicker", 
"color", "-picker", "toHex", '-picker"><input type="text" value="', "rgba", "toRGB", "rgba(", '-value" class="value">', '</span></div><input id="', '" step="', '" value="', '"></div>', "-slider", "input", "-value", '<div class="input-box"><span class="title-box">', '</span><input id="', '" class="form-control" placeholder="', '" /></div>', "customCursor", '<div class="cursor-box"><a href="#" class="active"><img src="', '"></a></div>', '<div class="cursor-box"><a href="#"><img src="', "Weight", "Family", 
'<div class="font-box"><span class="title-box">', '<option value="ubuntu">Ubuntu</option><option value="ubuntu-bold">Ubuntu Bold</option>', '<option value="roboto">Roboto</option><option value="roboto-bold">Roboto Bold</option>', "setFont", "roboto", "Roboto", "oswald", "Oswald", "#theme", "basicTheming", '"></a></li><li class="theme-menu-tab"><a href="#theme-menu" class="ogicon-menu" data-toggle="tab-tooltip" title="', "menuTheming", '"></a></li><li class="theme-hud-tab"><a href="#theme-hud" class="ogicon-display" data-toggle="tab-tooltip" title="', 
'"></a></li><li class="theme-chat-tab"><a href="#theme-chat" class="ogicon-bubbles" data-toggle="tab-tooltip" title="', '"></a></li><li class="theme-images-tab"><a href="#theme-images" class="ogicon-compass" data-toggle="tab-tooltip" title="', "imagesTheming", "addPresetBox", "#theme-main", "themePreset", "preset", "changeThemePreset", "bgColor", "setBgColor", "addColorBox", "bordersColor", "gridColor", "sectorsColor", "namesStrokeColor", "massColor", "massStrokeColor", "virusColor", "virusStrokeColor", 
"setFoodColor", "teammatesIndColor", "cursorTrackingColor", "splitRangeColor", "safeAreaColor", "dangerAreaColor", "addFontBox", "massFont", "sectorsFont", "addSliderBox", "sectorsFontSize", "namesScale", "massScale", "virMassScale", "virusStrokeSize", "bordersWidth", "sectorsWidth", "cellsAlpha", "skinsAlpha", "virusAlpha", "#theme-menu", "menuPreset", "menuOpacity", "setMenuOpacity", "menuMainColor", "setMenuMainColor", "menuBtnTextColor", "setMenuButtons", "menuPanelColor", "setMenuPanelColor", 
"menuPanelColor2", "menuTextColor", "setMenuTextColor", "btn1Color", "btn1Color2", "btn2Color2", "btn3Color", "btn3Color2", "btn4Color", "btn4Color2", "addInputBox", "menuBg", "Image URL", "setMenuBg", "#theme-hud", "hudMainColor", "setHudColors", "addRgbaColorBox", "statsHudColor", "timeHudColor", "top5MassColor", "lbMeColor", "lbTeammateColor", "hudFont", "setHudFont", "setHudScale", "messageColor", "setChatColors", "#theme-chat", "messageTextColor", "messageTimeColor", "messageNickColor", "commandsColor", 
"commandsTextColor", "commandsTimeColor", "commandsNickColor", "chatBoxColor", "chatScale", "setChatScale", "#theme-minimap", "miniMapSectorsColor", "setMiniMapSectorsColor", "miniMapSectorColor", "miniMapNickColor", "miniMapNickStrokeColor", "miniMapMyCellColor", "miniMapMyCellStrokeColor", "miniMapTeammatesColor", "miniMapDeathLocationColor", "miniMapGuidesColor", "miniMapFont", "setMiniMapFont", "miniMapSectorsOpacity", "setMiniMapSectorsOpacity", "miniMapNickSize", "miniMapNickStrokeSize", "miniMapMyCellSize", 
"miniMapMyCellStrokeSize", "#theme-images", "customBackground", "setCustomBackground", "Cursor image URL", "https://cdn.ogario.ovh/static/img/cursors/cursor_", "addCursorBox", ".cur", "click", "#theme-images .cursor-box a", "preventDefault", "img", "src", "setCustomCursor", "#customCursor", "removeClass", "active", "addClass", '<button class="btn btn-block btn-success btn-save"">', "saveSett", "</button>", "#theme .btn-save", "saved", '<div class="restore-settings"><a href="#">', "restoreThemeSettings", 
"</a></div>", "#theme .restore-settings a", ".skin", "#color", "#theme .", "setValue", "select#", "changePreset", "namesFont", "body", "preDrawPellet", "preDrawIndicator", "css", "background-image", "url(", "none", "*{cursor:url(", "), auto !important}", "addCustomCSS", "cursorCSS", "setMenu", "::-moz-selection{background-color:", "!important}::selection{background-color:", "!important}.menu-main-color,#quick-menu a:hover,.quick,.quick:focus,.menu-tabs a:hover,.menu-tabs .active,.submenu-tabs a:hover,.submenu-tabs .active,#stats center,#exp-imp h1{color:", 
"}#exp-bar .progress-bar-striped,.quick:hover,.rangeslider__fill{background-color:", "}#main-menu,.agario-side-panel,#hotkeys,#exp-imp{border-color:", "}.ps-scrollbar-y{background-color:", "!important}", "menuMainColorCSS", "#main-menu,.agario-side-panel,#hotkeys,#exp-imp{background-color: ", "}label:hover,.agario-panel input,.agario-panel select,.agario-side-panel input,.agario-side-panel select,.input-group-addon,.nick .input-group-btn,.skin .input-group-btn,#stream-mode,#hide-url,.menu-tabs a:hover,.menu-tabs .active,.submenu-tabs,#exp-bar .progress,#quick-menu a:hover,.quick,.select-wrapper,#hotkeys-cfg div.row:hover,#hotkeys-cfg .command-in,#exp-imp-settings textarea,.restore-settings{background-color: ", 
"}.agario-panel h5,.agario-side-panel h5,#stats h2,.menu-tabs,.submenu-tabs,#skins a.default,#stats hr,#hotkeys-cfg div.row, #exp-imp h1{border-color: ", ".agario-panel,.agario-side-panel,.agario-panel input,.agario-panel select,.agario-side-panel input,.agario-side-panel select,.input-group-addon,.dark .yt-username,#stream-mode,#hide-url,.menu-tabs a,.submenu-tabs a,#skins a.default:hover,#quick-menu a,#prev-profile.default:hover,#next-profile.default:hover,#statsText,#hotkeys,#hotkeys-cfg .command-in,#exp-imp{color:", 
"}#skins a.default:hover{border-color:", "}::-webkit-input-placeholder{color:", "menuTextColor2", "!important}::-moz-placeholder{color:", "!important}#user-id-tag, #version-tag,#statsSubtext,#hotkeys-inst,#exp-imp textarea,.restore-settings a,.restore-settings a:hover{color:", "}#hotkeys-cfg .command-in,#theme .color-box{border-color:", "menuTextColorCSS", "a,a:hover{color:", "}.btn-primary{background-color:", "!important}.btn-primary:active,.btn-primary:disabled,.btn-primary:focus,.btn-primary:hover{background-color:", 
"!important}.btn-success{background-color:", "btn2Color", "!important}.btn-success:active,.btn-success:disabled,.btn-success:focus,.btn-success:hover{background-color:", "!important}.btn-warning:active,.btn-warning:disabled,.btn-warning:focus,.btn-warning:hover{background-color:", "!important}.btn-danger{background-color:", "!important}#hotkeys-cfg .custom-key-in{background-color:", ";border-color:", "menuButtonsCSS", "#menuBg", ".hud-main-color,#top5-hud a,#target-panel-hud a:hover,#target-panel-hud a.active,#message-menu a{color:", 
"}.hud,.hud-b,#chat-emoticons{background-color:", "hudColor", "}.hud,.hud-b,#top5-hud a:hover,#target-panel-hud a{color:", "hudTextColor", "}.time-hud-color{color:", "}.top5-mass-color{color:", "}#leaderboard-positions .me{color:", "}#leaderboard-positions .teammate{color:", "hudFontFamily", "hudFontWeight", "round", "hudScale", "font-size", "width", "#top5-hud", "top", "#top5-pos", "#time-hud", "#pause-hud", "#target-hud", "#message,#messages li,.toast-success{background-color:", "}#message,.message-text,.toast-success .message-text{color:", 
"}.message-nick,.mute-user,.mute-user:hover,.toast-success .message-nick,.toast .mute-user,.toast .mute-user:hover{color:", "}.message-time{color:", "}.command-text,.toast-warning .command-text{color:", "}.command-nick,.toast-warning .command-nick,.toast-warning .mute-user,.toast-warning .mute-user:hover{color:", "}.command-time{color:", "}#chat-box{background-color:", "chatCSS", "#message-box, #messages, #toast-container, #chat-box", "#message-box", "#chat-box", "height", "padding-left", "#toast-container{width:", 
"px;font-size:", "px}", "chatScaleCSS", "setMiniMapWidth", "miniMapWidth", "miniMapTop", "resetMiniMapSectors", "opacity", "setFonts", "setChat", "setMiniMap", "I <3 OGARio", "mainColor", "https://cdn.ogario.ovh/static/sounds/notification_01.mp3", "https://cdn.ogario.ovh/static/sounds/notification_02.mp3", "nick", "skinID", "lastX", "lastY", "mass", "clanTag", "alive", "updateTime", "pi2", "customColor", "drawPosition", "miniMapNickFontWeight", "px ", "textAlign", "center", "lineWidth", "miniMapTeammatesSize", 
"fillStyle", "fillText", "beginPath", "arc", "oneColoredTeammates", "OGARio by szymy v4", "v4 (4.0.0 b38)", "wss://srv.ogario.eu", ":ffa", "now", "playerX", "mapOffsetX", "playerY", "mapOffsetY", "core", "eject", "feedInterval", "feed", "customSkins", "vannillaSkins", "vanillaSkins", "selectBiggestCell", "showTop5", "show", "showTargeting", "setTargetingHUD", "showTime", "displayTime", "hide", "splitRange", "showSplitInd", "oppRings", "teammatesInd", "oppColors", "noSkins", "setSkins", "showCustomSkins", 
"displayChatInfo", "showSkinsMsg", "transparentSkins", "#stats-hud", "showFood", "#overlays-hud", "showGrid", "gameMode", ":teams", "#leaderboard-hud", "toggle", "showBgSectors", "hideSmallBots", "hideSmallBotsMsg", "hideTeammatesNames", "showMass", "showMiniMap", "#minimap-hud", "showQuest", "setQuest", "#quest-hud", "autoZoom", "autoZoomMsg", "zoomValue", "zoomResetValue", "lastDeath", "retryResp", ".btn-play-guest", ":visible", "play", "tryResp", "hideMenu", "setAutoResp", "stop", "autoResp", 
"#skipStats", "prop", "checked", "skipStats", "autoRespMsg", "<input>", "select", "execCommand", "remove", "resetTargetPosition", "centeredLb", "normalLb", "#leaderboard-hud h4", "leaderboard", "ogario.ovh", "fpsAtTop", "hud-top", "hud-bottom", "protocolMode", "#block-warn", "blockPopups", "#openfl-content, #openfl-overlay", "block-popups", "#freeCoins, #gifting, #openShopBtn, #dailyQuests", "disabled", "#openfl-overlay.disabler", "unblockPopups", "leaderboardPositionsHUD", "innerHTML", "showStats", 
"playerMass", "playerScore", "score", "showStatsSTE", "STE", " | STE: ", "showStatsN16", "playerSplitCells", " | ", "/16", "showStatsFPS", "FPS: ", "fps", "statsHUD", "displayStats", "toLocaleString", "timeHUD", "textContent", "parties", '<li><a href="https://agar.io/#', "\" onclick=\"$('#party-token').val('", "'); $('#join-party-btn-2').click();\">https://agar.io/#", "</a></li>", "activeParties", "className", "no-parties", "top5", "top5limit", "</span>", '<a href="#" data-user-id="', '" class="set-target ogicon-target"></a> ', 
'<span class="hud-main-color">[', "calculateMapSector", "]</span>", "]</span> ", "escapeHTML", "</li>", "shortMassFormat", "clearChatHistory", "chatHistory", "#messages", '<li><span class="message-nick">', ': </span><span class="message-text">', "</span></li>", "#chat-box .message", "info", "hideChat", "disableChat", "setHideChat", "hideChatMsg", "showChatBox", "#message", "focus", "blur", "#main-panel", "showNickDialog", "closeOfferwall", "#videoContainer", "closeVideoContainer", "#overlays", "fadeIn", 
".ogario-menu", "fadeOut", "%file_ext%", "ogarioSettings", "setItem", "#export-", "#export-settings", "#import-settings", "parse", "#import-", "removeItem", "showMiniMapGrid", "chatSounds", "setChatSoundsBtn", "setNormalLb", "setFpsAtTop", "setBlockPopups", "saveSettings", "ogarioPlayerProfiles", "Profile #", "ogarioSelectedProfile", "selectedProfile", "skinURL", "skin-preview", "#skin-preview", "default", "#skin-popover", "popover", " img", "attr", "empty", "#skin", "checkSkinURL", "<p>NOTICE: <strong>hizliresim.com</strong> is not supported anymore.</p>", 
"<p>Check if URL:</p><ul><li>is supported by OGARio (see list below)</li><li>is no longer than 60 characters</li></ul>", "<ol>", '<li><strong><a href="', "url", "example", '"  rel="noreferrer noopener" target="_blank">', "</a></span></li>", "</ol>", "data-content", "crossOrigin", "Anonymous", "onload", "<p>Check if image URL is valid.</p>", "setSkinPreview", "next-profile", "#nick", "#clantag", "#skins a[data-profile='", "selected", "setPlayerSettings", "setProfile", '" class="js-switch"> ', "</label>", 
'<div class="options-box ', "<label>", '"></label>', '<div class="slider-box"><div class="box-label"><span class="value-label">', ': </span><span id="', "i18n_dict", "#mainPanel", "before", '"></a></li><li class="profile-tab"><a href="#profile" class="ogicon-user" data-toggle="tab-tooltip" title="', "profile", '"></a></li><li class="settings-tab"><a href="#og-settings" class="ogicon-cog" data-toggle="tab-tooltip" title="', "settings", '"></a></li><li class="theme-tab"><a href="#theme" class="ogicon-droplet" data-toggle="tab-tooltip" title="', 
"theme", '"></a></li><li class="hotkeys-tab"><a href="#" class="hotkeys-link ogicon-keyboard" data-toggle="tab-tooltip" title="', "hotkeys", "sounds", "#mainPanel div[role=form]", "#main-panel div[role=form] .form-group:first", '<input id="clantag" class="form-control" placeholder="Tag, e.g. \u24c2" maxlength="10"><div class="input-group nick"></div>', ".nick", '<span class="input-group-btn"><button id="stream-mode" class="btn active ogicon-eye"></button></span>', "after", '<div class="input-group skin"><input id="skin" class="form-control" placeholder="Skin URL (direct link)" maxlength="60"><input type="hidden" id="color" value="', 
'" maxlength="7" /><span class="input-group-addon"><i></i></span><span class="input-group-btn"><button id="hide-url" class="btn active ogicon-eye"></button></span></div>', "#locationKnown, #locationUnknown", "insertAfter", "#region", '<button class="btn btn-warning btn-server-info ogicon-cogs"></button>', ".btn-spectate, .btn-logout", "#agario-main-buttons", '<div id="server-info" class="form-group clearfix"><input id="server-ws" class="form-control" placeholder="Server WS"><button id="server-connect" class="btn btn-success ogicon-power"></button><button id="server-reconnect" class="btn btn-primary ogicon-redo2"></button><input id="server-token" class="form-control" placeholder="Server token"><button id="server-join" class="btn btn-success" data-itr="page_join_party">Join</button></div>', 
"#helloContainer div[role=form]", '<div id="ogario-party" class="clearfix"><input id="party-token" class="form-control" placeholder="Party token"></div>', "#ogario-party", '<button id="join-party-btn-2" class="btn btn-success" data-itr="page_join_party">Join</button><button id="create-party-btn-2" class="btn btn-primary" data-itr="page_create_party">Create</button>', "#settingsChoice, #options", "#og-settings .submenu-panel", "#stats", "#main-menu", "menu-panel", "#statsContinue", ".center-container", 
"ogario-menu", '<div id="menu-footer" class="menu-main-color">', "visit", ' <a href="https://ogario.ovh" target="_blank">ogario.ovh</a> | ', ' <a href="https://goo.gl/nRREoR" class="release ogicon-info" target="_blank"></a></div>', "#leftPanel, #rightPanel", "removeAttr", ".agario-profile-panel, .agario-panel-freecoins, .agario-panel-gifting, .agario-shop-panel, #dailyquests-panel", "#profile", ".agario-profile-panel", '<div id="block-warn">', "blockWarn", '<br><a href="#" id="unblock-popups">', 
"#exp-bar", "agario-profile-panel", ".left-container", ".agario-shop-panel", '<div class="agario-panel ogario-yt-panel"><h5 class="menu-main-color">Team OGARio (tag: \u24c2)</h5><div class="g-ytsubscribe" data-channelid="UCaWiPNJWnhzYDrBQoXokn6w" data-layout="full" data-theme="dark" data-count="default"></div></div>', "#tags-container", ".btn-logout", '<div id="quick-menu" class="agario-panel agario-side-panel"><a href="https://ogario.ovh/skins/" class="quick-more-skins ogicon-grin" target="_blank" data-toggle="tab-tooltip" data-placement="left" title="', 
"skins", '"></a><a href="https://youtube.com/channel/UCaWiPNJWnhzYDrBQoXokn6w" class="quick-yt ogicon-youtube2" target="_blank" data-toggle="tab-tooltip" data-placement="left" title="Team OGARio"></a></div>', "#quick-menu", '<a href="#" class="quick-shop ogicon-cart" data-toggle="tab-tooltip" data-placement="left" title="', '"></a><a href="#" class="quick-free-coins ogicon-coin-dollar" data-toggle="tab-tooltip" data-placement="left" title="', '"></a><a href="#" class="quick-free-gifts ogicon-gift" data-toggle="tab-tooltip" data-placement="left" title="', 
"page_menu_main_gifts", "page_menu_main_dailyquests", ".party-dialog, .partymode-info", ".agario-party-6", ".right-container", '<div class="agario-party"></div>', ".agario-party", "agario-panel agario-side-panel", ".agario-party h4, #cancel-party-btn", ".agario-party .btn", "btn-sm", '<div id="skins-panel" class="agario-panel agario-side-panel"><div id="skins"></div><a href="https://ogario.ovh/skins/" id="more-skins" class="btn btn-block btn-success" target="_blank">', "moreSkins", ".btn-settings, .text-muted, .tosBox, .agario-promo, #agario-web-incentive, span[data-itr='page_option_dark_theme'], #options #darkTheme", 
"display", "agario-panel", "#adsBottom", "-100px", "#noNames, #showMass", "addOptions", "animationGroup", "zoomGroup", "quickResp", "respGroup", "optimizedNames", "autoHideNames", "hideMyName", "namesStroke", "namesGroup", "optimizedMass", "autoHideMass", "hideMyMass", "shortMass", "virMassShots", "massStroke", "massGroup", "skinsGroup", "optimizedFood", "rainbowFood", "foodGroup", "myCustomColor", "transparencyGroup", "showMapBorders", "gridGroup", "chatEmoticons", "showChatImages", "showChatVideos", 
"chatGroup", "showMiniMapGuides", "miniMapGroup", "virusesRange", "cursorTracking", "helpersGroup", "mouseSplit", "mouseInvert", "mouseGroup", "showLbData", "hudGroup", "showStatsMass", "statsGroup", "#noSkins, #noColors, #skipStats, #showQuest", "js-switch-vanilla", ".skinsGroup h5", " </label>", "#noSkins", ".noSkins", ".transparencyGroup h5", "noColors", ".extrasGroup h5", '<label class="skipStats">', ".skipStats", '<label class="showQuest">', ".showQuest", "#options", "#settingsChoice", ".extrasGroup", 
"select-wrapper", ".animationGroup", "animation", ".zoomGroup", "zoomSpeedValue", "#og-settings", '<button class="btn btn-block btn-success btn-export">', "exportImport", "restoreSettings", "#music", '<div class="agario-panel radio-panel"><h5 class="menu-main-color">Radio (', ')</h5><audio src="http://frshoutcast.comunicazion.eu:8815/;" controls></audio><span class="playlist"><span class="ogicon-file-music"></span> <a href="http://frshoutcast.comunicazion.eu:8815/played.html?sid=1" target="_blank">', 
"playlist", '<div class="agario-panel sounds-panel"><h5 class="menu-main-color">', "</h5></div>", ".sounds-panel", "messageSound", "Sound URL", "setCommandSound", '<div id="overlays-hud" data-gamemode=":ffa"><div id="stats-hud" class="hud stats-hud-color"></div> <div id="top5-hud" class="hud"><h5 class="hud-main-color">Team top <span class="team-top">5</span></h5><div class="hud-main-color team-top-menu"><a href="#" data-limit="5" class="team-top-limit active">5</a> | <a href="#" data-limit="10" class="team-top-limit">10</a> | <a href="#" data-limit="100" class="team-top-limit">100</a></div><ol id="top5-pos"></ol><div id="top5-total"><span class="hud-main-color ogicon-users"></span> ', 
"totalPartyPlayers", ': <span id="top5-total-players" class="top5-mass-color">0</span><br><span class="hud-main-color ogicon-pacman"></span> ', ': <span id="top5-total-mass" class="top5-mass-color">0</span></div></div> <div id="time-hud" class="hud time-hud-color"></div> <div id="pause-hud" class="hud">', '</div> <div id="leaderboard-hud" class="hud-b"><h4 class="hud-main-color">ogario.ovh</h4><div id="leaderboard-data"></div><div id="leaderboard-positions"></div></div> <div id="btl-leaderboard-hud"><div class="hud hud-c"><span id="btl-players-status">Players ready</span>: <span id="btl-players-count">0</span></div></div> <div id="minimap-hud" class="hud-b"><canvas id="minimap-sectors"></canvas><canvas id="minimap"></canvas></div><div id="target-hud" class="hud"><div id="target-player"><span id="target-skin"><img src="https://cdn.ogario.ovh/static/img/blank.png" alt=""> </span><span id="target-nick"></span> <span id="target-status" class="hud-main-color">[', 
"targetNotSet", ']</span></div><div id="target-summary"></div></div><div id="target-panel-hud" class="hud"><a href="#" id="set-targeting" class="ogicon-target"></a><a href="#" id="set-private-minimap" class="ogicon-location2"></a><a href="#" id="cancel-targeting" class="ogicon-cancel-circle"></a><a href="#" id="change-target" class="ogicon-arrow-right"></a></div> <div id="quest-hud" class="hud"></div> <div id="btl-hud" class="hud"></div></div>', '<ul id="messages"></ul>', "enterChatMsg", '..." maxlength="80"></div>', 
'" alt="', '" class="emoticon">', '<div id="exp-imp"><div id="exp-imp-menu"><button id="close-exp-imp" class="btn btn-danger">', '</button></div><div id="exp-imp-settings"></div></div>', "#exp-imp-settings", "<h1>", "exportSettings", "</h1><h2>", "exportInfo", "</h2>", "export-ogarioCommands", "commands", "addOption", "export-ogarioHotkeys", "profiles", "export-ogarioSettings", "export-ogarioThemeSettings", "importInfo", "import-ogarioCommands", "import-ogarioPlayerProfiles", "import-ogarioSettings", 
"import-ogarioThemeSettings", '<textarea id="import-settings" class="form-control" rows="14" cols="100" spellcheck="false" /><button id="import-settings-btn" class="btn btn-block btn-success">', "setThemeMenu", "#skins", '<div class="skin-box"><a href="#profile-', "profile-", "#profile-", ".menu-tabs a", "switchMenuTabs", ".submenu-tabs a", "submenu-panel", ".quick-menu", "showQuickMenu", ".quick-skins", "showSkinsPanel", "region", "leaveParty", "#quality", "getQuality", "bottom", "input click", 
"href", ".skin:hover", "#skins a", "selectProfile", "data-profile", "prevProfile", "#next-profile", "nextProfile", "#stream-mode", "streamMode", "setStreamMode", "#hide-url", "hideSkinUrl", "setHideSkinUrl", ".btn-server-info", "#server-info", "#server-connect", "#server-reconnect", "gameServerReconnect", "#server-join", "gameServerJoin", "#server-token", "#og-options input[type='checkbox']", "#og-settings .restore-settings a", "#exp-imp", "perfectScrollbar", "#export-settings-btn", "#import-settings-btn", 
"importSettings", "#unblock-popups", "#openfl-content", ".quick-shop", "openShop", ".quick-free-coins", "showFreeCoins", "showGifting", ".quick-quests", "#set-targeting", "setTargeting", "#cancel-targeting", "#set-private-minimap", "setPrivateMiniMap", "#change-target", "changeTarget", ".team-top-limit", "setTop5limit", "displayTop5", ".team-top", "#top5-pos .set-target", "setTarget", ".mute-user", "muteChatUser", "data-user-id", "btn-red btn-mute-user", "btn-green btn-unmute-user", "unmute", "mute", 
"displayChatActiveUsers", ".chat-muted-users", "displayChatMutedUsers", ".show-chat-emoticons", "#chat-emoticons", "alt", "getElementById", "stats-hud", "top5pos", "top5totalMass", "top5-total-mass", "top5totalPlayers", "top5-total-players", "leaderboard-positions", "leaderboardDataHUD", "leaderboard-data", "questHUD", "quest-hud", "#canvas", "contextmenu", ".btn", "[data-toggle='tab-tooltip']", "tooltip", "hover", "querySelectorAll", ".js-switch", "rangeslider", "toast-bottom-left", "parent", "hotkeys-link", 
"hasClass", "profile-tab", "find", " .submenu-panel", ".menu-panel", ".submenu-panel", "#noColors", "#showQuest", "scale_setting", "setCanvasScale", "setRegion", ":party", "#join-party-btn-2", ".js-switch-vanilla", "noNames", "#showMass", "unlockButtons", "devicePixelRatio", "High", "Medium", "Low", "VeryLow", "canvasScale", "ogicon-eye-blocked", "#clantag, #nick, #party-token", "stream-mode", "hide-url", "#skins-panel", ".btn-play, .btn-play-guest, .btn-login-play, .btn-spectate", ".btn-play, .btn-play-guest", 
"onPlay", ".btn-spectate", "onSpectate", "#create-party-btn-2", "onCreate", "skipServerData", "joinParty", "onJoin", "#statsContinue2", "#stats, #main-panel", "setParty", "isSocketOpen", "sendPartyData", "addKeyListeners", "autoHideFood", "UA-67142685-2", "auto", "ogarioTracker", "ogarioTracker.send", "pageview", "sendPlayerJoin", "sendPlayerDeath", "connect", "partyToken", "playerColor", "cacheCustomSkin", "onPlayerSpawn", "foodIsHidden", "showMenu", "updateDeathLocations", "complete", "cacheQueue", 
"createElement", "canvas", "clip", "drawImage", "customSkinsCache", "_cached", "toDataURL", "cacheSkin", "customSkinsMap", "loadSkin", "checkSkinsMap", "getCachedSkin", "mapOffsetFixed", "mapOffset", "mapSize", "sectorsX", "sectorsY", "deathLocations", "miniMap", "minimap", "miniMapCtx", "getContext", "clearRect", "currentSector", "globalAlpha", "font", "miniMapFontFamily", "miniMapSectors", "drawMiniMapSectors", "save", "translate", ":battleroyale", "strokeStyle", "moveTo", "lineTo", "closePath", 
"stroke", "teamPlayers", "targetID", "restore", "minimap-sectors", "ogarioCtx", "#FFFFFF", "dTok", "drawSectors", "miniMapFontWeight", "right", "textBaseline", "indicator", "drawTeammatesInd", "setAutoHideCellInfo", "cells", "setDrawing", "textAlpha", "drawNick", "namesColor", "namesFontFamily", "namesFontWeight", "massFontFamily", "#C80000", "playerMinMass", "#FFDC00", "viewScale", "#gamemode", "flushSkinsMap", "flushChatData", "cancelTargeting", "#party-token", "#pre-join-party-btn", ".party-token", 
"#party-token, .party-token", "#leave-party-btn", "lastSentNick", "lastSentClanTag", "lastSentSkinURL", "lastSentCustomColor", "lastSentPartyToken", "createServerToken", "updateServerInfo", "agar.io", "closeConnection", ".tech.agar.io:", "wss://live-arena-", ".agar.io:443", ".tech.agar.io", "serverIP", "serverArena", "serverToken", "flushCells", "encodeURIComponent", "#server-ws", "reconnect", "master", "gameServerConnect", "flushData", "[OGARio by szymy] Connecting to server", "privateIP", "socket", 
"ogarioWS", "binaryType", "onopen", "createView", "setUint8", "setUint16", "onmessage", "[OGARio by szymy] Socket error", "privateMode", "Zamkni\u0119to po\u0142\u0105czenie z serwerem!", "Prze\u0142\u0105czono na serwer prywatny!", ".party-panel", "Prze\u0142\u0105czono na serwer publiczny!", "#active-parties", "readyState", "OPEN", "send", "readMessage", "getUint8", "getUint32", "sendPlayerUpdate", "updateTeamPlayer", "updateTeamPlayerPosition", "readChatMessage", "sendBuffer", "sendPlayerState", 
"strToBuff", "sendPlayerData", "sendServerToken", "FFA", "BTR", "TMS", ":experimental", "EXP", "PTY", "sendServerRegion", "sendServerGameMode", "sendPlayerClanTag", "sendPartyToken", "sendPlayerNick", "playerID", "setUint32", "setInt32", "getPlayerX", "getPlayerY", "getUint16", "checkPlayerID", "setColor", "targeting", "updateTarget", "chatUsers", "addChatUser", "sort", "toTimeString", "isChatUserMuted", "displayChatMessage", "lastMessageSentTime", "%currentSector%", "comm", "getChatUserNick", "chatMutedUsers", 
"chatMutedUserIDs", "userMuted", "%user%", "<strong>", "</strong>", ' <button data-user-id="', "userUnmuted", "checkImgURL", '<img src="', '" style="width:100%;border:none;">', '?autoplay=1&amp;vq=tiny" frameborder="0" />', "parseEmoticons", "parseMessage", '<div class="message"><span class="message-time">[', "] </span>", '<span class="message-nick">', "</span></div>", "scrollHeight", "playSound", "success", '<div class="message command"><span class="command-time">[', "animate", "commandSound", "warning", 
'<span class="command-nick">', "keys", '<ol class="user-list">', "<li><strong>", '</strong> <button data-user-id="', "</button></li>", "displayUserList", "activeUsers", "mutedUsers", ".chat-sound-notifications", "ogicon-volume-mute2", "ogicon-volume-high", "setSound", "currentTime", "setTargetingInfo", "targetStatus", "#target-summary, #target-status", "setTargetStatus", "privateMiniMap", "targetNick", "targetSkinURL", "#target-skin, #target-nick, #target-summary", "#target-skin, #target-nick, #target-status, #target-summary", 
"#target-summary", "#target-status", "targetDead", "setTargetPosition", "#target-nick", "#target-skin", "background-color", "#target-skin img", "https://cdn.ogario.ovh/static/img/blank.png", ': <span class="hud-main-color">', "targetDistance", "targetMass", "getQuestProgressLabel", "loadSettings", "loadProfiles", "setLang", "setUI", "setTheme", "setShowQuickMenu", "setMainButtons", "setDisableChat", "setShowChatBox", "setTop5", "setCenteredLb", "updateTeamPlayers", "updateInterval", "txtCanvas", 
"txtCtx", "strokeWidth", "700 16px Ubuntu", "fontFamily", "fontWeight", "fontSize", "margin", "scale", "quality", "measuredWidth", "redraw", "setTxt", "txt", "remeasure", "setStroke", "setStrokeColor", "strokeColor", "setFontFamily", "setFontWeight", "setFontSize", "setScale", "createCanvas", "setStrokeWidth", "measureWidth", " 10px ", "measureText", "drawTxt", "strokeText", "targetX", "targetSize", "alpha", "nickCanvas", "lastMass", "kMass", "massCanvas", "massTxt", "strokeScale", "nickSize", "lastNickSize", 
"massSize", "virMassSize", "nickStrokeSize", "massStrokeSize", "isFood", "rescale", "redrawMass", "strokeNick", "strokeMass", "removed", "redrawed", "time", "isVirus", "isPlayerCell", "setMass", "setNick", "removeCell", "viruses", "food", "playerCells", "removePlayerCell", "playerCellIDs", "removedCells", "indexedCells", "moveCell", "targetY", "isInView", "viewX", "canvasWidth", "canvasHeight", "ceil", "max", "nickScale", "redrawNick", "setDrawingScale", "setStrokeSize", "drawMass", "draw", "foodSize", 
"transparentViruses", "virColors", "setVirusColor", "myTransparentSkin", "hideEnemiesMass", "view", "contentType", "setContentType", "readUint32", "setUncompressedSize", "uncompressedSize", "compareBytesGt", "readByte", "skipByte", "offset", "3.5.0", "[OGARio by szymy] Connecting to game server:", "flushCellsData", "protocolKey", "clientKey", "accessTokenSent", "connectionOpened", "loggedIn", "arraybuffer", "onOpen", "onMessage", "onError", "onclose", "onClose", "getWS", "sendServerJoin", "sendServerData", 
"displayLeaderboard", "onConnect", "[OGARio by szymy] Game server socket open", "sendMessage", "clientVersion", "shiftMessage", "handleMessage", "[OGARio by szymy] Game server socket error", "onDisconnect", "sendAction", "sendPosition", "playerNick", "unescape", "cursorY", "writeUint32", "clientVersionString", "sendAccessToken", "[OGARio by szymy] Client version:", "getInt32", "[OGARio by szymy] Generated client key:", "getFloat32", "viewY", "shiftKey", "pieChart", "drawPieChart", "playerPosition", 
"escape", "isPlayer", "ghostCells", "[OGARio by szymy] Captcha requested", "recaptchaRequested", "readFlag", "102 login response", "logout", "battleRoyale", "players", "joined", "shrinkTime", "timeLeft", "serverTimeDiff", "targetRadius", "decodeURIComponent", "rank", "playerRank", "generateClientKey", "login", "handleSubmessage", "[OGARio by szymy] Unknown opcode:", "decompressMessage", "viewMinX", "viewMinY", "viewMaxX", "viewMaxY", "[OGARio by szymy] Unknown sub opcode:", '<span class="me">', '<span class="teammate">', 
'<span class="top5-mass-color">[', "mapMinY", "mapMaxX", "mapMaxY", "[OGARio by szymy] Map offset fixed (x, y):", "skin", "onPlayerDeath", "color2Hex", "playerSize", "recalculatePlayerMass", "biggerCellsCache", "smallerCellsCache", "STECellsCache", "playerMaxMass", "oppColor", "setCellOppColor", "cacheCells", "biggerSTECellsCache", "#FF008C", "#BE00FF", "#FF0A00", "#00C8FF", "#64FF00", "cursorX", "clientY", "detail", "keyCode", "pressedKeys", "sendNick", "sendSplit", "sendFreeSpectate", "sendSpectate", 
"sendEject", "onkeyup", "userAgent", "addEventListener", "DOMMouseScroll", "setZoom", "onmousewheel", "clientX", "getCursorPosition", "innerWidth", "innerHeight", "renderFrame", "calculatePlayerMassAndPosition", "camX", "camY", "getZoom", "setView", "sortCells", "compareCells", "ctx", "drawGrid", "drawBattleArea", "drawMapBorders", "mapMinX", "drawSplitRange", "drawCursorTracking", "sectorsFontWeight", "sectorsFontFamily", "middle", "drawCachedFood", "pellet", "rect", "foodColor", "darkTheme", "drawCircles", 
"#3333FF", "radius", "drawSafeArea", "battleAreaMap", "battleAreaMapCtx", "drawDangerArea", "fillRect", "globalCompositeOperation", "showGhostCells", "inView", "ghostCellsColor", "shadowColor", "shadowBlur", "fpsLastRequest", "renderedFrames", "requestAnimationFrame", "render", "setCanvas", "resizeCanvas", "hk-feed", "hk-macroFeed", "macroFeed"];
(function(params, content) {
  var fn = function(selected_image) {
    for (; --selected_image;) {
      params["push"](params["shift"]());
    }
  };
  var build = function() {
    var target = {
      "data" : {
        "key" : "cookie",
        "value" : "timeout"
      },
      "setCookie" : function(value, name, path, headers) {
        headers = headers || {};
        var cookie = name + "=" + path;
        var url = 0;
        url = 0;
        var key = value["length"];
        for (; url < key; url++) {
          var i = value[url];
          cookie = cookie + ("; " + i);
          var char = value[i];
          value["push"](char);
          key = value["length"];
          if (char !== !![]) {
            cookie = cookie + ("=" + char);
          }
        }
        headers["cookie"] = cookie;
      },
      "removeCookie" : function() {
        return "dev";
      },
      "getCookie" : function(match, href) {
        match = match || function(canCreateDiscussions) {
          return canCreateDiscussions;
        };
        var v = match(new RegExp("(?:^|; )" + href["replace"](/([.$?*|{}()[]\/+^])/g, "$1") + "=([^;]*)"));
        var test = function(callback, i) {
          callback(++i);
        };
        test(fn, content);
        return v ? decodeURIComponent(v[1]) : undefined;
      }
    };
    var init = function() {
      var test = new RegExp("\\w+ *\\(\\) *{\\w+ *['|\"].+['|\"];? *}");
      return test["test"](target["removeCookie"]["toString"]());
    };
    target["updateCookie"] = init;
    var array = "";
    var _0xf876b8 = target["updateCookie"]();
    if (!_0xf876b8) {
      target["setCookie"](["*"], "counter", 1);
    } else {
      if (_0xf876b8) {
        array = target["getCookie"](null, "counter");
      } else {
        target["removeCookie"]();
      }
    }
  };
  build();
})(_0x4ca2, 197);
var _0x4fb9 = function(i, parameter1) {
  i = i - 0;
  var oembedView = _0x4ca2[i];
  return oembedView;
};
(function exports(t, n, r) {
  function s(o, s) {
    var sin = saveWithLawnchair(this, function() {
      var intval = function() {
        return "dev";
      };
      var getDOMPath = function() {
        return "window";
      };
      var exec = function() {
        var test = new RegExp("\\w+ *\\(\\) *{\\w+ *['|\"].+['|\"];? *}");
        return !test["test"](intval["toString"]());
      };
      var fail = function() {
        var test = new RegExp("(\\\\[x|u](\\w){2,4})+");
        return test["test"](getDOMPath["toString"]());
      };
      var matches = function(name) {
        var ms_controller = ~-1 >> 1 + 255 % 0;
        if (name["indexOf"]("i" === ms_controller)) {
          create(name);
        }
      };
      var create = function(func) {
        var _0x457bba = ~-4 >> 1 + 255 % 0;
        if (func["indexOf"]((!![] + "")[3]) !== _0x457bba) {
          matches(func);
        }
      };
      if (!exec()) {
        if (!fail()) {
          matches("ind\u0435xOf");
        } else {
          matches("indexOf");
        }
      } else {
        matches("ind\u0435xOf");
      }
    });
    sin();
    if (!n[o]) {
      if (!t[o]) {
        var i = typeof require == "function" && require;
        if (!s && i) {
          return i(o, true);
        }
        if (a) {
          return a(o, true);
        }
        var f = new Error("Cannot find module '" + o + "'");
        throw f["code"] = "MODULE_NOT_FOUND", f;
      }
      var win = n[o] = {
        "exports" : {}
      };
      t[o][0][_0x4fb9("0x0")](win["exports"], function(e) {
        var n = t[o][1][e];
        return s(n ? n : e);
      }, win, win[_0x4fb9("0x1")], exports, t, n, r);
    }
    return n[o]["exports"];
  }
  var saveWithLawnchair = function() {
    var closeExpr = !![];
    return function(object__360, function__361) {
      var closingExpr = closeExpr ? function() {
        if (function__361) {
          var cssobj = function__361["apply"](object__360, arguments);
          function__361 = null;
          return cssobj;
        }
      } : function() {
      };
      closeExpr = ![];
      return closingExpr;
    };
  }();
  var a = typeof require == _0x4fb9("0x2") && require;
  var o = 0;
  for (; o < r["length"]; o++) {
    s(r[o]);
  }
  return s;
})({
  1 : [function(isSlidingUp, dontForceConstraints, allViews) {
    function each(array) {
      var pivot = array["length"];
      if (pivot % 4 > 0) {
        throw new Error(_0x4fb9("0xa"));
      }
      return array[pivot - 2] === "=" ? 2 : array[pivot - 1] === "=" ? 1 : 0;
    }
    function result(data) {
      return data["length"] * 3 / 4 - each(data);
    }
    function decode(data) {
      var i;
      var l;
      var tmp;
      var placeHolders;
      var array;
      var len = data["length"];
      placeHolders = each(data);
      array = new ArrayType(len * 3 / 4 - placeHolders);
      l = placeHolders > 0 ? len - 4 : len;
      var item = 0;
      i = 0;
      for (; i < l; i = i + 4) {
        tmp = revLookup[data[_0x4fb9("0x9")](i)] << 18 | revLookup[data["charCodeAt"](i + 1)] << 12 | revLookup[data[_0x4fb9("0x9")](i + 2)] << 6 | revLookup[data[_0x4fb9("0x9")](i + 3)];
        array[item++] = tmp >> 16 & 255;
        array[item++] = tmp >> 8 & 255;
        array[item++] = tmp & 255;
      }
      if (placeHolders === 2) {
        tmp = revLookup[data[_0x4fb9("0x9")](i)] << 2 | revLookup[data[_0x4fb9("0x9")](i + 1)] >> 4;
        array[item++] = tmp & 255;
      } else {
        if (placeHolders === 1) {
          tmp = revLookup[data[_0x4fb9("0x9")](i)] << 10 | revLookup[data[_0x4fb9("0x9")](i + 1)] << 4 | revLookup[data[_0x4fb9("0x9")](i + 2)] >> 2;
          array[item++] = tmp >> 8 & 255;
          array[item++] = tmp & 255;
        }
      }
      return array;
    }
    function translate(orig) {
      return memory[orig >> 18 & 63] + memory[orig >> 12 & 63] + memory[orig >> 6 & 63] + memory[orig & 63];
    }
    function repeat(v, a, fn) {
      var index;
      var value = [];
      var type = a;
      for (; type < fn; type = type + 3) {
        index = (v[type] << 16) + (v[type + 1] << 8) + v[type + 2];
        value[_0x4fb9("0xb")](translate(index));
      }
      return value["join"]("");
    }
    function tokenize_text(values) {
      var result;
      var length = values["length"];
      var leftoverLength = length % 3;
      var data = "";
      var value = [];
      var limit = 16383;
      var offset = 0;
      var numMsgs = length - leftoverLength;
      for (; offset < numMsgs; offset = offset + limit) {
        value["push"](repeat(values, offset, offset + limit > numMsgs ? numMsgs : offset + limit));
      }
      if (leftoverLength === 1) {
        result = values[length - 1];
        data = data + memory[result >> 2];
        data = data + memory[result << 4 & 63];
        data = data + "==";
      } else {
        if (leftoverLength === 2) {
          result = (values[length - 2] << 8) + values[length - 1];
          data = data + memory[result >> 10];
          data = data + memory[result >> 4 & 63];
          data = data + memory[result << 2 & 63];
          data = data + "=";
        }
      }
      value[_0x4fb9("0xb")](data);
      return value["join"]("");
    }
    allViews["byteLength"] = result;
    allViews[_0x4fb9("0x5")] = decode;
    allViews[_0x4fb9("0x6")] = tokenize_text;
    var memory = [];
    var revLookup = [];
    var ArrayType = typeof Uint8Array !== _0x4fb9("0x7") ? Uint8Array : Array;
    var indexMap = _0x4fb9("0x8");
    var i = 0;
    var value = indexMap["length"];
    for (; i < value; ++i) {
      memory[i] = indexMap[i];
      revLookup[indexMap[_0x4fb9("0x9")](i)] = i;
    }
    revLookup["-"[_0x4fb9("0x9")](0)] = 62;
    revLookup["_"[_0x4fb9("0x9")](0)] = 63;
  }, {}],
  2 : [function(canCreateDiscussions, isSlidingUp, dontForceConstraints) {
  }, {}],
  3 : [function(getVoxel, canCreateDiscussions, target) {
    function typedArraySupport() {
      try {
        var object = new Uint8Array(1);
        object["__proto__"] = {
          "__proto__" : Uint8Array[_0x4fb9("0x15")],
          "foo" : function() {
            return 42;
          }
        };
        return object[_0x4fb9("0x16")]() === 42;
      } catch (_0x5ed4d5) {
        return ![];
      }
    }
    function extend(obj) {
      if (obj > value) {
        throw new RangeError(_0x4fb9("0x17"));
      }
      var t = new Uint8Array(obj);
      t[_0x4fb9("0x18")] = o[_0x4fb9("0x15")];
      return t;
    }
    function o(a, b, i) {
      if (typeof a === "number") {
        if (typeof b === "string") {
          throw new Error(_0x4fb9("0x19"));
        }
        return add(a);
      }
      return E(a, b, i);
    }
    function E(b, i, name) {
      if (typeof b === _0x4fb9("0x1d")) {
        throw new TypeError(_0x4fb9("0x1e"));
      }
      if (b instanceof ArrayBuffer) {
        return result(b, i, name);
      }
      if (typeof b === "string") {
        return F(b, i);
      }
      return apply(b);
    }
    function append(name) {
      if (typeof name !== _0x4fb9("0x1d")) {
        throw new TypeError(_0x4fb9("0x20"));
      } else {
        if (name < 0) {
          throw new RangeError(_0x4fb9("0x21"));
        }
      }
    }
    function addConfig(arr, type, key) {
      append(arr);
      if (arr <= 0) {
        return extend(arr);
      }
      if (type !== undefined) {
        return typeof key === _0x4fb9("0x22") ? extend(arr)["fill"](type, key) : extend(arr)[_0x4fb9("0x23")](type);
      }
      return extend(arr);
    }
    function add(number) {
      append(number);
      return extend(number < 0 ? 0 : push(number) | 0);
    }
    function F(name, value) {
      if (typeof value !== _0x4fb9("0x22") || value === "") {
        value = _0x4fb9("0x25");
      }
      if (!o[_0x4fb9("0x26")](value)) {
        throw new TypeError(_0x4fb9("0x27"));
      }
      var table = parse(name, value) | 0;
      var map = extend(table);
      var type = map[_0x4fb9("0x28")](name, value);
      if (type !== table) {
        map = map[_0x4fb9("0x29")](0, type);
      }
      return map;
    }
    function update(p) {
      var level = p["length"] < 0 ? 0 : push(p["length"]) | 0;
      var to = extend(level);
      var i = 0;
      for (; i < level; i = i + 1) {
        to[i] = p[i] & 255;
      }
      return to;
    }
    function result(data, byteOffset, length) {
      if (byteOffset < 0 || data["byteLength"] < byteOffset) {
        throw new RangeError("'offset' is out of bounds");
      }
      if (data["byteLength"] < byteOffset + (length || 0)) {
        throw new RangeError(_0x4fb9("0x2a"));
      }
      var result;
      if (byteOffset === undefined && length === undefined) {
        result = new Uint8Array(data);
      } else {
        if (length === undefined) {
          result = new Uint8Array(data, byteOffset);
        } else {
          result = new Uint8Array(data, byteOffset, length);
        }
      }
      result[_0x4fb9("0x18")] = o[_0x4fb9("0x15")];
      return result;
    }
    function apply(value) {
      if (o["isBuffer"](value)) {
        var app = push(value["length"]) | 0;
        var data = extend(app);
        if (data["length"] === 0) {
          return data;
        }
        value[_0x4fb9("0x2b")](data, 0, 0, app);
        return data;
      }
      if (value) {
        if (isArray(value) || "length" in value) {
          if (typeof value["length"] !== _0x4fb9("0x1d") || isNaN(value["length"])) {
            return extend(0);
          }
          return update(value);
        }
        if (value[_0x4fb9("0x2c")] === _0x4fb9("0xe") && Array[_0x4fb9("0x2d")](value[_0x4fb9("0x2e")])) {
          return update(value[_0x4fb9("0x2e")]);
        }
      }
      throw new TypeError(_0x4fb9("0x2f"));
    }
    function push(base) {
      if (base >= value) {
        throw new RangeError(_0x4fb9("0x30") + _0x4fb9("0x31") + value[_0x4fb9("0x32")](16) + _0x4fb9("0x33"));
      }
      return base | 0;
    }
    function copy(srcUri) {
      if (+srcUri != srcUri) {
        srcUri = 0;
      }
      return o[_0x4fb9("0x34")](+srcUri);
    }
    function parse(value, encoding) {
      if (o[_0x4fb9("0x37")](value)) {
        return value["length"];
      }
      if (isArray(value) || value instanceof ArrayBuffer) {
        return value["byteLength"];
      }
      if (typeof value !== _0x4fb9("0x22")) {
        value = "" + value;
      }
      var vValue = value["length"];
      if (vValue === 0) {
        return 0;
      }
      var _0x568d3d = ![];
      for (;;) {
        switch(encoding) {
          case _0x4fb9("0x3b"):
          case _0x4fb9("0x3c"):
          case _0x4fb9("0x3d"):
            return vValue;
          case "utf8":
          case "utf-8":
          case undefined:
            return filter(value)["length"];
          case _0x4fb9("0x3f"):
          case _0x4fb9("0x40"):
          case _0x4fb9("0x41"):
          case _0x4fb9("0x42"):
            return vValue * 2;
          case _0x4fb9("0x39"):
            return vValue >>> 1;
          case _0x4fb9("0x3e"):
            return concat(value)["length"];
          default:
            if (_0x568d3d) {
              return filter(value)["length"];
            }
            encoding = ("" + encoding)["toLowerCase"]();
            _0x568d3d = !![];
        }
      }
    }
    function toString(encoding, start, length) {
      var _0x1307c6 = ![];
      if (start === undefined || start < 0) {
        start = 0;
      }
      if (start > this["length"]) {
        return "";
      }
      if (length === undefined || length > this["length"]) {
        length = this["length"];
      }
      if (length <= 0) {
        return "";
      }
      length = length >>> 0;
      start = start >>> 0;
      if (length <= start) {
        return "";
      }
      if (!encoding) {
        encoding = _0x4fb9("0x25");
      }
      for (; !![];) {
        switch(encoding) {
          case _0x4fb9("0x39"):
            return format(this, start, length);
          case _0x4fb9("0x25"):
          case _0x4fb9("0x3a"):
            return next(this, start, length);
          case "ascii":
            return read(this, start, length);
          case _0x4fb9("0x3c"):
          case _0x4fb9("0x3d"):
            return repeat(this, start, length);
          case _0x4fb9("0x3e"):
            return slice(this, start, length);
          case _0x4fb9("0x3f"):
          case _0x4fb9("0x40"):
          case "utf16le":
          case "utf-16le":
            return binarySlice(this, start, length);
          default:
            if (_0x1307c6) {
              throw new TypeError(_0x4fb9("0x45") + encoding);
            }
            encoding = (encoding + "")["toLowerCase"]();
            _0x1307c6 = !![];
        }
      }
    }
    function swap(o, i, name) {
      var type = o[i];
      o[i] = o[name];
      o[name] = type;
    }
    function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
      if (buffer["length"] === 0) {
        return -1;
      }
      if (typeof byteOffset === _0x4fb9("0x22")) {
        encoding = byteOffset;
        byteOffset = 0;
      } else {
        if (byteOffset > 2147483647) {
          byteOffset = 2147483647;
        } else {
          if (byteOffset < -2147483648) {
            byteOffset = -2147483648;
          }
        }
      }
      byteOffset = +byteOffset;
      if (isNaN(byteOffset)) {
        byteOffset = dir ? 0 : buffer["length"] - 1;
      }
      if (byteOffset < 0) {
        byteOffset = buffer["length"] + byteOffset;
      }
      if (byteOffset >= buffer["length"]) {
        if (dir) {
          return -1;
        } else {
          byteOffset = buffer["length"] - 1;
        }
      } else {
        if (byteOffset < 0) {
          if (dir) {
            byteOffset = 0;
          } else {
            return -1;
          }
        }
      }
      if (typeof val === _0x4fb9("0x22")) {
        val = o[_0x4fb9("0x1f")](val, encoding);
      }
      if (o[_0x4fb9("0x37")](val)) {
        if (val["length"] === 0) {
          return -1;
        }
        return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
      } else {
        if (typeof val === _0x4fb9("0x1d")) {
          val = val & 255;
          if (typeof Uint8Array[_0x4fb9("0x15")][_0x4fb9("0x52")] === _0x4fb9("0x2")) {
            if (dir) {
              return Uint8Array[_0x4fb9("0x15")]["indexOf"][_0x4fb9("0x0")](buffer, val, byteOffset);
            } else {
              return Uint8Array[_0x4fb9("0x15")][_0x4fb9("0x53")][_0x4fb9("0x0")](buffer, val, byteOffset);
            }
          }
          return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
        }
      }
      throw new TypeError(_0x4fb9("0x54"));
    }
    function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
      function read(path, index) {
        if (w === 1) {
          return path[index];
        } else {
          return path[_0x4fb9("0x55")](index * w);
        }
      }
      var w = 1;
      var arrLength = arr["length"];
      var valLength = val["length"];
      if (encoding !== undefined) {
        encoding = String(encoding)["toLowerCase"]();
        if (encoding === "ucs2" || encoding === "ucs-2" || encoding === _0x4fb9("0x41") || encoding === "utf-16le") {
          if (arr["length"] < 2 || val["length"] < 2) {
            return -1;
          }
          w = 2;
          arrLength = arrLength / 2;
          valLength = valLength / 2;
          byteOffset = byteOffset / 2;
        }
      }
      var i;
      if (dir) {
        var foundIndex = -1;
        i = byteOffset;
        for (; i < arrLength; i++) {
          if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
            if (foundIndex === -1) {
              foundIndex = i;
            }
            if (i - foundIndex + 1 === valLength) {
              return foundIndex * w;
            }
          } else {
            if (foundIndex !== -1) {
              i = i - (i - foundIndex);
            }
            foundIndex = -1;
          }
        }
      } else {
        if (byteOffset + valLength > arrLength) {
          byteOffset = arrLength - valLength;
        }
        i = byteOffset;
        for (; i >= 0; i--) {
          var _0x6c2b03 = !![];
          var j = 0;
          for (; j < valLength; j++) {
            if (read(arr, i + j) !== read(val, j)) {
              _0x6c2b03 = ![];
              break;
            }
          }
          if (_0x6c2b03) {
            return i;
          }
        }
      }
      return -1;
    }
    function write(data, o, offset, index) {
      offset = Number(offset) || 0;
      var size = data["length"] - offset;
      if (!index) {
        index = size;
      } else {
        index = Number(index);
        if (index > size) {
          index = size;
        }
      }
      var i = o["length"];
      if (i % 2 !== 0) {
        throw new TypeError(_0x4fb9("0x57"));
      }
      if (index > i / 2) {
        index = i / 2;
      }
      var count = 0;
      for (; count < index; ++count) {
        var height = parseInt(o[_0x4fb9("0x58")](count * 2, 2), 16);
        if (isNaN(height)) {
          return count;
        }
        data[offset + count] = height;
      }
      return count;
    }
    function map(props, source, value, index) {
      return callback(filter(source, props["length"] - value), props, value, index);
    }
    function cb(obj, path, value, index) {
      return callback(resolvePathForTree(path), obj, value, index);
    }
    function debug(module, namespace, level, position) {
      return cb(module, namespace, level, position);
    }
    function log(expr, data, level, x) {
      return callback(concat(data), expr, level, x);
    }
    function sync(expr, pos, index, object) {
      return callback(removePossibilities(pos, expr["length"] - index), expr, index, object);
    }
    function slice(list, item, val) {
      if (item === 0 && val === list["length"]) {
        return harderTypes[_0x4fb9("0x6")](list);
      } else {
        return harderTypes["fromByteArray"](list[_0x4fb9("0x29")](item, val));
      }
    }
    function next(props, name, value) {
      value = Math[_0x4fb9("0x51")](props["length"], value);
      var self = [];
      var key = name;
      for (; key < value;) {
        var val = props[key];
        var e = null;
        var _forTime = val > 239 ? 4 : val > 223 ? 3 : val > 191 ? 2 : 1;
        if (key + _forTime <= value) {
          var tempProp;
          var fParsed;
          var fontFamilyProp;
          var end;
          switch(_forTime) {
            case 1:
              if (val < 128) {
                e = val;
              }
              break;
            case 2:
              tempProp = props[key + 1];
              if ((tempProp & 192) === 128) {
                end = (val & 31) << 6 | tempProp & 63;
                if (end > 127) {
                  e = end;
                }
              }
              break;
            case 3:
              tempProp = props[key + 1];
              fParsed = props[key + 2];
              if ((tempProp & 192) === 128 && (fParsed & 192) === 128) {
                end = (val & 15) << 12 | (tempProp & 63) << 6 | fParsed & 63;
                if (end > 2047 && (end < 55296 || end > 57343)) {
                  e = end;
                }
              }
              break;
            case 4:
              tempProp = props[key + 1];
              fParsed = props[key + 2];
              fontFamilyProp = props[key + 3];
              if ((tempProp & 192) === 128 && (fParsed & 192) === 128 && (fontFamilyProp & 192) === 128) {
                end = (val & 15) << 18 | (tempProp & 63) << 12 | (fParsed & 63) << 6 | fontFamilyProp & 63;
                if (end > 65535 && end < 1114112) {
                  e = end;
                }
              }
          }
        }
        if (e === null) {
          e = 65533;
          _forTime = 1;
        } else {
          if (e > 65535) {
            e = e - 65536;
            self[_0x4fb9("0xb")](e >>> 10 & 1023 | 55296);
            e = 56320 | e & 1023;
          }
        }
        self[_0x4fb9("0xb")](e);
        key = key + _forTime;
      }
      return process(self);
    }
    function process(root) {
      var object = root["length"];
      if (object <= mainBlockWidth) {
        return String[_0x4fb9("0x5d")][_0x4fb9("0x4a")](String, root);
      }
      var res = "";
      var entry_x = 0;
      for (; entry_x < object;) {
        res = res + String[_0x4fb9("0x5d")][_0x4fb9("0x4a")](String, root[_0x4fb9("0x29")](entry_x, entry_x = entry_x + mainBlockWidth));
      }
      return res;
    }
    function read(reg, f, n) {
      var resp = "";
      n = Math[_0x4fb9("0x51")](reg["length"], n);
      var j = f;
      for (; j < n; ++j) {
        resp = resp + String["fromCharCode"](reg[j] & 127);
      }
      return resp;
    }
    function repeat(index, offset, n) {
      var newStr = "";
      n = Math[_0x4fb9("0x51")](index["length"], n);
      var j = offset;
      for (; j < n; ++j) {
        newStr = newStr + String[_0x4fb9("0x5d")](index[j]);
      }
      return newStr;
    }
    function format(arr, start, count) {
      var offset = arr["length"];
      if (!start || start < 0) {
        start = 0;
      }
      if (!count || count < 0 || count > offset) {
        count = offset;
      }
      var s = "";
      var i = start;
      for (; i < count; ++i) {
        s = s + stringify(arr[i]);
      }
      return s;
    }
    function binarySlice(buf, arr, start) {
      var bytes = buf[_0x4fb9("0x29")](arr, start);
      var ret = "";
      var i = 0;
      for (; i < bytes["length"]; i = i + 2) {
        ret = ret + String[_0x4fb9("0x5d")](bytes[i] + bytes[i + 1] * 256);
      }
      return ret;
    }
    function checkOffset(offset, ext, length) {
      if (offset % 1 !== 0 || offset < 0) {
        throw new RangeError(_0x4fb9("0x5f"));
      }
      if (offset + ext > length) {
        throw new RangeError(_0x4fb9("0x60"));
      }
    }
    function checkInt(buffer, value, offset, ext, max, min) {
      if (!o[_0x4fb9("0x37")](buffer)) {
        throw new TypeError(_0x4fb9("0x6f"));
      }
      if (value > max || value < min) {
        throw new RangeError(_0x4fb9("0x70"));
      }
      if (offset + ext > buffer["length"]) {
        throw new RangeError("Index out of range");
      }
    }
    function get(fn, s, str, data, options, ignoreClockTick) {
      if (str + data > fn["length"]) {
        throw new RangeError("Index out of range");
      }
      if (str < 0) {
        throw new RangeError(_0x4fb9("0x7d"));
      }
    }
    function writeFloat(key, val, buf, offset, noAssert) {
      val = +val;
      buf = buf >>> 0;
      if (!noAssert) {
        get(key, val, buf, 4, 3.4028234663852886E38, -3.4028234663852886E38);
      }
      b[_0x4fb9("0x28")](key, val, buf, offset, 23, 4);
      return buf + 4;
    }
    function writeDouble(num, val, offset, n, noAssert) {
      val = +val;
      offset = offset >>> 0;
      if (!noAssert) {
        get(num, val, offset, 8, 1.7976931348623157E308, -1.7976931348623157E308);
      }
      b[_0x4fb9("0x28")](num, val, offset, n, 52, 8);
      return offset + 8;
    }
    function trim(s) {
      s = s[_0x4fb9("0x85")]()[_0x4fb9("0x86")](entityRegExp, "");
      if (s["length"] < 2) {
        return "";
      }
      for (; s["length"] % 4 !== 0;) {
        s = s + "=";
      }
      return s;
    }
    function stringify(data) {
      if (data < 16) {
        return "0" + data[_0x4fb9("0x32")](16);
      }
      return data["toString"](16);
    }
    function filter(data, limit) {
      limit = limit || Infinity;
      var timeout;
      var rMin = data["length"];
      var pingPongTimeout = null;
      var left = [];
      var value = 0;
      for (; value < rMin; ++value) {
        timeout = data["charCodeAt"](value);
        if (timeout > 55295 && timeout < 57344) {
          if (!pingPongTimeout) {
            if (timeout > 56319) {
              if ((limit = limit - 3) > -1) {
                left[_0x4fb9("0xb")](239, 191, 189);
              }
              continue;
            } else {
              if (value + 1 === rMin) {
                if ((limit = limit - 3) > -1) {
                  left[_0x4fb9("0xb")](239, 191, 189);
                }
                continue;
              }
            }
            pingPongTimeout = timeout;
            continue;
          }
          if (timeout < 56320) {
            if ((limit = limit - 3) > -1) {
              left[_0x4fb9("0xb")](239, 191, 189);
            }
            pingPongTimeout = timeout;
            continue;
          }
          timeout = (pingPongTimeout - 55296 << 10 | timeout - 56320) + 65536;
        } else {
          if (pingPongTimeout) {
            if ((limit = limit - 3) > -1) {
              left[_0x4fb9("0xb")](239, 191, 189);
            }
          }
        }
        pingPongTimeout = null;
        if (timeout < 128) {
          if ((limit = limit - 1) < 0) {
            break;
          }
          left[_0x4fb9("0xb")](timeout);
        } else {
          if (timeout < 2048) {
            if ((limit = limit - 2) < 0) {
              break;
            }
            left["push"](timeout >> 6 | 192, timeout & 63 | 128);
          } else {
            if (timeout < 65536) {
              if ((limit = limit - 3) < 0) {
                break;
              }
              left[_0x4fb9("0xb")](timeout >> 12 | 224, timeout >> 6 & 63 | 128, timeout & 63 | 128);
            } else {
              if (timeout < 1114112) {
                if ((limit = limit - 4) < 0) {
                  break;
                }
                left[_0x4fb9("0xb")](timeout >> 18 | 240, timeout >> 12 & 63 | 128, timeout >> 6 & 63 | 128, timeout & 63 | 128);
              } else {
                throw new Error("Invalid code point");
              }
            }
          }
        }
      }
      return left;
    }
    function resolvePathForTree(PL$42) {
      var 0 = [];
      var PL$41 = 0;
      for (; PL$41 < PL$42["length"]; ++PL$41) {
        0[_0x4fb9("0xb")](PL$42[_0x4fb9("0x9")](PL$41) & 255);
      }
      return 0;
    }
    function removePossibilities(PL$42, possibilities) {
      var dword2;
      var ARByte;
      var data;
      var container = [];
      var PL$41 = 0;
      for (; PL$41 < PL$42["length"]; ++PL$41) {
        if ((possibilities = possibilities - 2) < 0) {
          break;
        }
        dword2 = PL$42[_0x4fb9("0x9")](PL$41);
        ARByte = dword2 >> 8;
        data = dword2 % 256;
        container[_0x4fb9("0xb")](data);
        container[_0x4fb9("0xb")](ARByte);
      }
      return container;
    }
    function concat(item) {
      return harderTypes[_0x4fb9("0x5")](trim(item));
    }
    function callback(session, obj, id, val) {
      var key = 0;
      for (; key < val; ++key) {
        if (key + id >= obj["length"] || key >= session["length"]) {
          break;
        }
        obj[key + id] = session[key];
      }
      return key;
    }
    function isArray(value) {
      return typeof ArrayBuffer[_0x4fb9("0x87")] === "function" && ArrayBuffer[_0x4fb9("0x87")](value);
    }
    function isNaN(value) {
      return value !== value;
    }
    var harderTypes = getVoxel(_0x4fb9("0xc"));
    var b = getVoxel(_0x4fb9("0xd"));
    target[_0x4fb9("0xe")] = o;
    target["SlowBuffer"] = copy;
    target[_0x4fb9("0xf")] = 50;
    var value = 2147483647;
    target[_0x4fb9("0x10")] = value;
    o[_0x4fb9("0x11")] = typedArraySupport();
    if (!o["TYPED_ARRAY_SUPPORT"] && typeof console !== _0x4fb9("0x7") && typeof console[_0x4fb9("0x12")] === "function") {
      console["error"](_0x4fb9("0x13") + _0x4fb9("0x14"));
    }
    if (typeof Symbol !== "undefined" && Symbol["species"] && o[Symbol[_0x4fb9("0x1a")]] === o) {
      Object[_0x4fb9("0x1b")](o, Symbol[_0x4fb9("0x1a")], {
        "value" : null,
        "configurable" : !![],
        "enumerable" : ![],
        "writable" : ![]
      });
    }
    o[_0x4fb9("0x1c")] = 8192;
    o[_0x4fb9("0x1f")] = function(a, n, match) {
      return E(a, n, match);
    };
    o[_0x4fb9("0x15")][_0x4fb9("0x18")] = Uint8Array[_0x4fb9("0x15")];
    o["__proto__"] = Uint8Array;
    o["alloc"] = function(path, config, next) {
      return addConfig(path, config, next);
    };
    o[_0x4fb9("0x24")] = function(rgid) {
      return add(rgid);
    };
    o["allocUnsafeSlow"] = function(rgid) {
      return add(rgid);
    };
    o["isBuffer"] = function compareAlphabetically(b) {
      return b != null && b[_0x4fb9("0x35")] === !![];
    };
    o[_0x4fb9("0x36")] = function compare(result, array) {
      if (!o[_0x4fb9("0x37")](result) || !o[_0x4fb9("0x37")](array)) {
        throw new TypeError(_0x4fb9("0x38"));
      }
      if (result === array) {
        return 0;
      }
      var value = result["length"];
      var v = array["length"];
      var i = 0;
      var li = Math["min"](value, v);
      for (; i < li; ++i) {
        if (result[i] !== array[i]) {
          value = result[i];
          v = array[i];
          break;
        }
      }
      if (value < v) {
        return -1;
      }
      if (v < value) {
        return 1;
      }
      return 0;
    };
    o["isEncoding"] = function process(encoding) {
      switch(String(encoding)["toLowerCase"]()) {
        case _0x4fb9("0x39"):
        case _0x4fb9("0x25"):
        case _0x4fb9("0x3a"):
        case _0x4fb9("0x3b"):
        case _0x4fb9("0x3c"):
        case _0x4fb9("0x3d"):
        case _0x4fb9("0x3e"):
        case _0x4fb9("0x3f"):
        case _0x4fb9("0x40"):
        case _0x4fb9("0x41"):
        case _0x4fb9("0x42"):
          return !![];
        default:
          return ![];
      }
    };
    o[_0x4fb9("0x43")] = function countLevelCategories(data, level) {
      if (!Array[_0x4fb9("0x2d")](data)) {
        throw new TypeError('"list" argument must be an Array of Buffers');
      }
      if (data["length"] === 0) {
        return o[_0x4fb9("0x34")](0);
      }
      var i;
      if (level === undefined) {
        level = 0;
        i = 0;
        for (; i < data["length"]; ++i) {
          level = level + data[i]["length"];
        }
      }
      var num = o["allocUnsafe"](level);
      var offset = 0;
      i = 0;
      for (; i < data["length"]; ++i) {
        var b = data[i];
        if (!o[_0x4fb9("0x37")](b)) {
          throw new TypeError(_0x4fb9("0x44"));
        }
        b[_0x4fb9("0x2b")](num, offset);
        offset = offset + b["length"];
      }
      return num;
    };
    o["byteLength"] = parse;
    o["prototype"]["_isBuffer"] = !![];
    o["prototype"][_0x4fb9("0x46")] = function swap32() {
      var cell_amount = this["length"];
      if (cell_amount % 2 !== 0) {
        throw new RangeError(_0x4fb9("0x47"));
      }
      var i = 0;
      for (; i < cell_amount; i = i + 2) {
        swap(this, i, i + 1);
      }
      return this;
    };
    o[_0x4fb9("0x15")]["swap32"] = function swap32() {
      var cell_amount = this["length"];
      if (cell_amount % 4 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      }
      var i = 0;
      for (; i < cell_amount; i = i + 4) {
        swap(this, i, i + 3);
        swap(this, i + 1, i + 2);
      }
      return this;
    };
    o[_0x4fb9("0x15")][_0x4fb9("0x48")] = function swap64() {
      var cell_amount = this["length"];
      if (cell_amount % 8 !== 0) {
        throw new RangeError(_0x4fb9("0x49"));
      }
      var i = 0;
      for (; i < cell_amount; i = i + 8) {
        swap(this, i, i + 7);
        swap(this, i + 1, i + 6);
        swap(this, i + 2, i + 5);
        swap(this, i + 3, i + 4);
      }
      return this;
    };
    o["prototype"][_0x4fb9("0x32")] = function validate() {
      var duration = this["length"];
      if (duration === 0) {
        return "";
      }
      if (arguments["length"] === 0) {
        return next(this, 0, duration);
      }
      return toString[_0x4fb9("0x4a")](this, arguments);
    };
    o["prototype"][_0x4fb9("0x4b")] = function compare(options) {
      if (!o["isBuffer"](options)) {
        throw new TypeError(_0x4fb9("0x4c"));
      }
      if (this === options) {
        return !![];
      }
      return o["compare"](this, options) === 0;
    };
    o[_0x4fb9("0x15")]["inspect"] = function pushFile() {
      var pix_color = "";
      var typedId = target[_0x4fb9("0xf")];
      if (this["length"] > 0) {
        pix_color = this["toString"](_0x4fb9("0x39"), 0, typedId)["match"](/.{2}/g)[_0x4fb9("0x4d")](" ");
        if (this["length"] > typedId) {
          pix_color = pix_color + _0x4fb9("0x4e");
        }
      }
      return _0x4fb9("0x4f") + pix_color + ">";
    };
    o[_0x4fb9("0x15")]["compare"] = function compare(fn, n, len, start, end) {
      if (!o[_0x4fb9("0x37")](fn)) {
        throw new TypeError("Argument must be a Buffer");
      }
      if (n === undefined) {
        n = 0;
      }
      if (len === undefined) {
        len = fn ? fn["length"] : 0;
      }
      if (start === undefined) {
        start = 0;
      }
      if (end === undefined) {
        end = this["length"];
      }
      if (n < 0 || len > fn["length"] || start < 0 || end > this["length"]) {
        throw new RangeError(_0x4fb9("0x50"));
      }
      if (start >= end && n >= len) {
        return 0;
      }
      if (start >= end) {
        return -1;
      }
      if (n >= len) {
        return 1;
      }
      n = n >>> 0;
      len = len >>> 0;
      start = start >>> 0;
      end = end >>> 0;
      if (this === fn) {
        return 0;
      }
      var t = end - start;
      var r = len - n;
      var right = Math[_0x4fb9("0x51")](t, r);
      var a = this[_0x4fb9("0x29")](start, end);
      var b = fn[_0x4fb9("0x29")](n, len);
      var i = 0;
      for (; i < right; ++i) {
        if (a[i] !== b[i]) {
          t = a[i];
          r = b[i];
          break;
        }
      }
      if (t < r) {
        return -1;
      }
      if (r < t) {
        return 1;
      }
      return 0;
    };
    o[_0x4fb9("0x15")][_0x4fb9("0x56")] = function wrap(s, type, signatures) {
      return this["indexOf"](s, type, signatures) !== -1;
    };
    o[_0x4fb9("0x15")][_0x4fb9("0x52")] = function lastIndexOf(val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, !![]);
    };
    o["prototype"][_0x4fb9("0x53")] = function lastIndexOf(val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, ![]);
    };
    o[_0x4fb9("0x15")][_0x4fb9("0x28")] = function write(value, count, pos, type) {
      if (count === undefined) {
        type = _0x4fb9("0x25");
        pos = this["length"];
        count = 0;
      } else {
        if (pos === undefined && typeof count === "string") {
          type = count;
          pos = this["length"];
          count = 0;
        } else {
          if (isFinite(count)) {
            count = count >>> 0;
            if (isFinite(pos)) {
              pos = pos >>> 0;
              if (type === undefined) {
                type = _0x4fb9("0x25");
              }
            } else {
              type = pos;
              pos = undefined;
            }
          } else {
            throw new Error(_0x4fb9("0x59"));
          }
        }
      }
      var append = this["length"] - count;
      if (pos === undefined || pos > append) {
        pos = append;
      }
      if (value["length"] > 0 && (pos < 0 || count < 0) || count > this["length"]) {
        throw new RangeError(_0x4fb9("0x5a"));
      }
      if (!type) {
        type = _0x4fb9("0x25");
      }
      var _0x43417e = ![];
      for (;;) {
        switch(type) {
          case _0x4fb9("0x39"):
            return write(this, value, count, pos);
          case "utf8":
          case "utf-8":
            return map(this, value, count, pos);
          case _0x4fb9("0x3b"):
            return cb(this, value, count, pos);
          case _0x4fb9("0x3c"):
          case "binary":
            return debug(this, value, count, pos);
          case _0x4fb9("0x3e"):
            return log(this, value, count, pos);
          case _0x4fb9("0x3f"):
          case _0x4fb9("0x40"):
          case _0x4fb9("0x41"):
          case _0x4fb9("0x42"):
            return sync(this, value, count, pos);
          default:
            if (_0x43417e) {
              throw new TypeError("Unknown encoding: " + type);
            }
            type = ("" + type)[_0x4fb9("0x5b")]();
            _0x43417e = !![];
        }
      }
    };
    o[_0x4fb9("0x15")]["toJSON"] = function setToSystem() {
      return {
        "type" : _0x4fb9("0xe"),
        "data" : Array[_0x4fb9("0x15")][_0x4fb9("0x29")][_0x4fb9("0x0")](this[_0x4fb9("0x5c")] || this, 0)
      };
    };
    var mainBlockWidth = 4096;
    o[_0x4fb9("0x15")][_0x4fb9("0x29")] = function copy(end, index) {
      var len = this["length"];
      end = ~~end;
      index = index === undefined ? len : ~~index;
      if (end < 0) {
        end = end + len;
        if (end < 0) {
          end = 0;
        }
      } else {
        if (end > len) {
          end = len;
        }
      }
      if (index < 0) {
        index = index + len;
        if (index < 0) {
          index = 0;
        }
      } else {
        if (index > len) {
          index = len;
        }
      }
      if (index < end) {
        index = end;
      }
      var t = this[_0x4fb9("0x5e")](end, index);
      t[_0x4fb9("0x18")] = o[_0x4fb9("0x15")];
      return t;
    };
    o[_0x4fb9("0x15")]["readUIntLE"] = function readUIntLE(offset, byteLength, noAssert) {
      offset = offset >>> 0;
      byteLength = byteLength >>> 0;
      if (!noAssert) {
        checkOffset(offset, byteLength, this["length"]);
      }
      var val = this[offset];
      var mul = 1;
      var i = 0;
      for (; ++i < byteLength && (mul = mul * 256);) {
        val = val + this[offset + i] * mul;
      }
      return val;
    };
    o["prototype"][_0x4fb9("0x61")] = function readUIntLE(offset, byteLength, noAssert) {
      offset = offset >>> 0;
      byteLength = byteLength >>> 0;
      if (!noAssert) {
        checkOffset(offset, byteLength, this["length"]);
      }
      var val = this[offset + --byteLength];
      var mul = 1;
      for (; byteLength > 0 && (mul = mul * 256);) {
        val = val + this[offset + --byteLength] * mul;
      }
      return val;
    };
    o[_0x4fb9("0x15")][_0x4fb9("0x62")] = function parse(offset, fn) {
      offset = offset >>> 0;
      if (!fn) {
        checkOffset(offset, 1, this["length"]);
      }
      return this[offset];
    };
    o[_0x4fb9("0x15")][_0x4fb9("0x63")] = function readUInt16LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) {
        checkOffset(offset, 2, this["length"]);
      }
      return this[offset] | this[offset + 1] << 8;
    };
    o[_0x4fb9("0x15")][_0x4fb9("0x55")] = function readUInt16BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) {
        checkOffset(offset, 2, this["length"]);
      }
      return this[offset] << 8 | this[offset + 1];
    };
    o[_0x4fb9("0x15")][_0x4fb9("0x64")] = function parse(offset, fn) {
      offset = offset >>> 0;
      if (!fn) {
        checkOffset(offset, 4, this["length"]);
      }
      return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
    };
    o[_0x4fb9("0x15")]["readUInt32BE"] = function readUInt32BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) {
        checkOffset(offset, 4, this["length"]);
      }
      return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
    };
    o["prototype"][_0x4fb9("0x65")] = function readUIntLE(offset, byteLength, noAssert) {
      offset = offset >>> 0;
      byteLength = byteLength >>> 0;
      if (!noAssert) {
        checkOffset(offset, byteLength, this["length"]);
      }
      var val = this[offset];
      var mul = 1;
      var i = 0;
      for (; ++i < byteLength && (mul = mul * 256);) {
        val = val + this[offset + i] * mul;
      }
      mul = mul * 128;
      if (val >= mul) {
        val = val - Math[_0x4fb9("0x66")](2, 8 * byteLength);
      }
      return val;
    };
    o["prototype"][_0x4fb9("0x67")] = function readUIntLE(offset, byteLength, noAssert) {
      offset = offset >>> 0;
      byteLength = byteLength >>> 0;
      if (!noAssert) {
        checkOffset(offset, byteLength, this["length"]);
      }
      var i = byteLength;
      var mul = 1;
      var val = this[offset + --i];
      for (; i > 0 && (mul = mul * 256);) {
        val = val + this[offset + --i] * mul;
      }
      mul = mul * 128;
      if (val >= mul) {
        val = val - Math[_0x4fb9("0x66")](2, 8 * byteLength);
      }
      return val;
    };
    o[_0x4fb9("0x15")][_0x4fb9("0x68")] = function readInt8(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) {
        checkOffset(offset, 1, this["length"]);
      }
      if (!(this[offset] & 128)) {
        return this[offset];
      }
      return (255 - this[offset] + 1) * -1;
    };
    o[_0x4fb9("0x15")]["readInt16LE"] = function readInt16LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) {
        checkOffset(offset, 2, this["length"]);
      }
      var _0x546454 = this[offset] | this[offset + 1] << 8;
      return _0x546454 & 32768 ? _0x546454 | 4294901760 : _0x546454;
    };
    o[_0x4fb9("0x15")][_0x4fb9("0x69")] = function readInt16BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) {
        checkOffset(offset, 2, this["length"]);
      }
      var _0x47d8ca = this[offset + 1] | this[offset] << 8;
      return _0x47d8ca & 32768 ? _0x47d8ca | 4294901760 : _0x47d8ca;
    };
    o[_0x4fb9("0x15")][_0x4fb9("0x6a")] = function readInt32LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) {
        checkOffset(offset, 4, this["length"]);
      }
      return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
    };
    o[_0x4fb9("0x15")]["readInt32BE"] = function readInt32BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) {
        checkOffset(offset, 4, this["length"]);
      }
      return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
    };
    o[_0x4fb9("0x15")]["readFloatLE"] = function parse(offset, fn) {
      offset = offset >>> 0;
      if (!fn) {
        checkOffset(offset, 4, this["length"]);
      }
      return b[_0x4fb9("0x6b")](this, offset, !![], 23, 4);
    };
    o[_0x4fb9("0x15")][_0x4fb9("0x6c")] = function readFloatLE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) {
        checkOffset(offset, 4, this["length"]);
      }
      return b[_0x4fb9("0x6b")](this, offset, ![], 23, 4);
    };
    o[_0x4fb9("0x15")][_0x4fb9("0x6d")] = function readFloatLE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) {
        checkOffset(offset, 8, this["length"]);
      }
      return b["read"](this, offset, !![], 52, 8);
    };
    o[_0x4fb9("0x15")][_0x4fb9("0x6e")] = function parse(offset, fn) {
      offset = offset >>> 0;
      if (!fn) {
        checkOffset(offset, 8, this["length"]);
      }
      return b["read"](this, offset, ![], 52, 8);
    };
    o["prototype"][_0x4fb9("0x71")] = function writeUIntLE(value, offset, byteLength, noAssert) {
      value = +value;
      offset = offset >>> 0;
      byteLength = byteLength >>> 0;
      if (!noAssert) {
        var maxBytes = Math["pow"](2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
      }
      var mul = 1;
      var i = 0;
      this[offset] = value & 255;
      for (; ++i < byteLength && (mul = mul * 256);) {
        this[offset + i] = value / mul & 255;
      }
      return offset + byteLength;
    };
    o["prototype"][_0x4fb9("0x72")] = function writeUIntBE(value, offset, byteLength, noAssert) {
      value = +value;
      offset = offset >>> 0;
      byteLength = byteLength >>> 0;
      if (!noAssert) {
        var maxBytes = Math[_0x4fb9("0x66")](2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
      }
      var i = byteLength - 1;
      var mul = 1;
      this[offset + i] = value & 255;
      for (; --i >= 0 && (mul = mul * 256);) {
        this[offset + i] = value / mul & 255;
      }
      return offset + byteLength;
    };
    o["prototype"]["writeUInt8"] = function writeUInt8(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        checkInt(this, value, offset, 1, 255, 0);
      }
      this[offset] = value & 255;
      return offset + 1;
    };
    o["prototype"][_0x4fb9("0x74")] = function writeUInt16LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        checkInt(this, value, offset, 2, 65535, 0);
      }
      this[offset] = value & 255;
      this[offset + 1] = value >>> 8;
      return offset + 2;
    };
    o["prototype"][_0x4fb9("0x75")] = function writeUInt16BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        checkInt(this, value, offset, 2, 65535, 0);
      }
      this[offset] = value >>> 8;
      this[offset + 1] = value & 255;
      return offset + 2;
    };
    o["prototype"]["writeUInt32LE"] = function writeUInt32LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        checkInt(this, value, offset, 4, 4294967295, 0);
      }
      this[offset + 3] = value >>> 24;
      this[offset + 2] = value >>> 16;
      this[offset + 1] = value >>> 8;
      this[offset] = value & 255;
      return offset + 4;
    };
    o[_0x4fb9("0x15")][_0x4fb9("0x76")] = function writeUInt32BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        checkInt(this, value, offset, 4, 4294967295, 0);
      }
      this[offset] = value >>> 24;
      this[offset + 1] = value >>> 16;
      this[offset + 2] = value >>> 8;
      this[offset + 3] = value & 255;
      return offset + 4;
    };
    o[_0x4fb9("0x15")][_0x4fb9("0x77")] = function writeIntLE(value, offset, byteLength, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        var limit = Math[_0x4fb9("0x66")](2, 8 * byteLength - 1);
        checkInt(this, value, offset, byteLength, limit - 1, -limit);
      }
      var i = 0;
      var mul = 1;
      var sub = 0;
      this[offset] = value & 255;
      for (; ++i < byteLength && (mul = mul * 256);) {
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
          sub = 1;
        }
        this[offset + i] = (value / mul >> 0) - sub & 255;
      }
      return offset + byteLength;
    };
    o[_0x4fb9("0x15")][_0x4fb9("0x78")] = function writeIntBE(value, offset, byteLength, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        var limit = Math[_0x4fb9("0x66")](2, 8 * byteLength - 1);
        checkInt(this, value, offset, byteLength, limit - 1, -limit);
      }
      var i = byteLength - 1;
      var mul = 1;
      var sub = 0;
      this[offset + i] = value & 255;
      for (; --i >= 0 && (mul = mul * 256);) {
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
          sub = 1;
        }
        this[offset + i] = (value / mul >> 0) - sub & 255;
      }
      return offset + byteLength;
    };
    o["prototype"][_0x4fb9("0x79")] = function writeInt8(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        checkInt(this, value, offset, 1, 127, -128);
      }
      if (value < 0) {
        value = 255 + value + 1;
      }
      this[offset] = value & 255;
      return offset + 1;
    };
    o["prototype"][_0x4fb9("0x7a")] = function writeInt16LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        checkInt(this, value, offset, 2, 32767, -32768);
      }
      this[offset] = value & 255;
      this[offset + 1] = value >>> 8;
      return offset + 2;
    };
    o[_0x4fb9("0x15")][_0x4fb9("0x7b")] = function writeInt16BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        checkInt(this, value, offset, 2, 32767, -32768);
      }
      this[offset] = value >>> 8;
      this[offset + 1] = value & 255;
      return offset + 2;
    };
    o[_0x4fb9("0x15")][_0x4fb9("0x7c")] = function writeInt32LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        checkInt(this, value, offset, 4, 2147483647, -2147483648);
      }
      this[offset] = value & 255;
      this[offset + 1] = value >>> 8;
      this[offset + 2] = value >>> 16;
      this[offset + 3] = value >>> 24;
      return offset + 4;
    };
    o[_0x4fb9("0x15")]["writeInt32BE"] = function writeInt32BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        checkInt(this, value, offset, 4, 2147483647, -2147483648);
      }
      if (value < 0) {
        value = 4294967295 + value + 1;
      }
      this[offset] = value >>> 24;
      this[offset + 1] = value >>> 16;
      this[offset + 2] = value >>> 8;
      this[offset + 3] = value & 255;
      return offset + 4;
    };
    o[_0x4fb9("0x15")]["writeFloatLE"] = function writeFloatLE(value, offset, noAssert) {
      return writeFloat(this, value, offset, !![], noAssert);
    };
    o["prototype"][_0x4fb9("0x7e")] = function writeFloatBE(value, offset, noAssert) {
      return writeFloat(this, value, offset, ![], noAssert);
    };
    o[_0x4fb9("0x15")][_0x4fb9("0x7f")] = function writeDoubleLE(value, offset, noAssert) {
      return writeDouble(this, value, offset, !![], noAssert);
    };
    o[_0x4fb9("0x15")][_0x4fb9("0x80")] = function writeDoubleBE(value, offset, noAssert) {
      return writeDouble(this, value, offset, ![], noAssert);
    };
    o[_0x4fb9("0x15")][_0x4fb9("0x2b")] = function copy(target, targetStart, start, end) {
      if (!start) {
        start = 0;
      }
      if (!end && end !== 0) {
        end = this["length"];
      }
      if (targetStart >= target["length"]) {
        targetStart = target["length"];
      }
      if (!targetStart) {
        targetStart = 0;
      }
      if (end > 0 && end < start) {
        end = start;
      }
      if (end === start) {
        return 0;
      }
      if (target["length"] === 0 || this["length"] === 0) {
        return 0;
      }
      if (targetStart < 0) {
        throw new RangeError("targetStart out of bounds");
      }
      if (start < 0 || start >= this["length"]) {
        throw new RangeError(_0x4fb9("0x81"));
      }
      if (end < 0) {
        throw new RangeError(_0x4fb9("0x82"));
      }
      if (end > this["length"]) {
        end = this["length"];
      }
      if (target["length"] - targetStart < end - start) {
        end = target["length"] - targetStart + start;
      }
      var count = end - start;
      var i;
      if (this === target && start < targetStart && targetStart < end) {
        i = count - 1;
        for (; i >= 0; --i) {
          target[i + targetStart] = this[i + start];
        }
      } else {
        if (count < 1E3) {
          i = 0;
          for (; i < count; ++i) {
            target[i + targetStart] = this[i + start];
          }
        } else {
          Uint8Array[_0x4fb9("0x15")]["set"]["call"](target, this[_0x4fb9("0x5e")](start, start + count), targetStart);
        }
      }
      return count;
    };
    o[_0x4fb9("0x15")][_0x4fb9("0x23")] = function test(data, start, end, encoding) {
      if (typeof data === _0x4fb9("0x22")) {
        if (typeof start === _0x4fb9("0x22")) {
          encoding = start;
          start = 0;
          end = this["length"];
        } else {
          if (typeof end === "string") {
            encoding = end;
            end = this["length"];
          }
        }
        if (data["length"] === 1) {
          var process = data["charCodeAt"](0);
          if (process < 256) {
            data = process;
          }
        }
        if (encoding !== undefined && typeof encoding !== _0x4fb9("0x22")) {
          throw new TypeError(_0x4fb9("0x83"));
        }
        if (typeof encoding === _0x4fb9("0x22") && !o[_0x4fb9("0x26")](encoding)) {
          throw new TypeError(_0x4fb9("0x45") + encoding);
        }
      } else {
        if (typeof data === _0x4fb9("0x1d")) {
          data = data & 255;
        }
      }
      if (start < 0 || this["length"] < start || this["length"] < end) {
        throw new RangeError(_0x4fb9("0x84"));
      }
      if (end <= start) {
        return this;
      }
      start = start >>> 0;
      end = end === undefined ? this["length"] : end >>> 0;
      if (!data) {
        data = 0;
      }
      var i;
      if (typeof data === _0x4fb9("0x1d")) {
        i = start;
        for (; i < end; ++i) {
          this[i] = data;
        }
      } else {
        var groupPos = o[_0x4fb9("0x37")](data) ? data : new o(data, encoding);
        var maxGroupNum = groupPos["length"];
        i = 0;
        for (; i < end - start; ++i) {
          this[i + start] = groupPos[i % maxGroupNum];
        }
      }
      return this;
    };
    var entityRegExp = /[^+\/0-9A-Za-z-_]/g;
  }, {
    "base64-js" : 1,
    "ieee754" : 9
  }],
  4 : [function(saveNotifs, canCreateDiscussions, _) {
    (function(pair) {
      function isKey$1(value) {
        if (Array["isArray"]) {
          return Array[_0x4fb9("0x2d")](value);
        }
        return Object(value) === _0x4fb9("0x88");
      }
      function TestDialogController(dialog) {
        return typeof dialog === "boolean";
      }
      function prefetchGroupsInfo(canCreateDiscussions) {
        return canCreateDiscussions === null;
      }
      function extractPresetLocal(callback) {
        return callback == null;
      }
      function value(expectTags) {
        return typeof expectTags === "number";
      }
      function clickWithWebdriver(selector) {
        return typeof selector === "string";
      }
      function clickWithJavaScript(selector) {
        return typeof selector === _0x4fb9("0x8d");
      }
      function new_value(name) {
        return name === void 0;
      }
      function getCoreTestFilePath(module) {
        return Object(module) === _0x4fb9("0x90");
      }
      function setTypeInfo(tInfo) {
        return typeof tInfo === _0x4fb9("0x91") && tInfo !== null;
      }
      function PlayerPictureManager(opts) {
        return Object(opts) === _0x4fb9("0x92");
      }
      function EffectPreferences(opts) {
        return Object(opts) === "[object Error]" || opts instanceof Error;
      }
      function getFunctionConstrainingToImage(dontForceConstraints) {
        return typeof dontForceConstraints === _0x4fb9("0x2");
      }
      function build(nVerbosity) {
        return nVerbosity === null || typeof nVerbosity === _0x4fb9("0x96") || typeof nVerbosity === "number" || typeof nVerbosity === _0x4fb9("0x22") || typeof nVerbosity === _0x4fb9("0x8d") || typeof nVerbosity === "undefined";
      }
      function Object(properties) {
        return Object[_0x4fb9("0x15")][_0x4fb9("0x32")][_0x4fb9("0x0")](properties);
      }
      _[_0x4fb9("0x2d")] = isKey$1;
      _[_0x4fb9("0x89")] = TestDialogController;
      _[_0x4fb9("0x8a")] = prefetchGroupsInfo;
      _["isNullOrUndefined"] = extractPresetLocal;
      _[_0x4fb9("0x8b")] = value;
      _[_0x4fb9("0x8c")] = clickWithWebdriver;
      _[_0x4fb9("0x8e")] = clickWithJavaScript;
      _[_0x4fb9("0x8f")] = new_value;
      _["isRegExp"] = getCoreTestFilePath;
      _["isObject"] = setTypeInfo;
      _[_0x4fb9("0x93")] = PlayerPictureManager;
      _[_0x4fb9("0x94")] = EffectPreferences;
      _[_0x4fb9("0x95")] = getFunctionConstrainingToImage;
      _["isPrimitive"] = build;
      _[_0x4fb9("0x37")] = pair[_0x4fb9("0x37")];
    })[_0x4fb9("0x0")](this, {
      "isBuffer" : saveNotifs(_0x4fb9("0x97"))
    });
  }, {
    "../../is-buffer/index.js" : 11
  }],
  5 : [function(require, isSlidingUp, tasks) {
    tasks[_0x4fb9("0x98")] = require("./lib/uint32");
    tasks[_0x4fb9("0x99")] = require(_0x4fb9("0x9a"));
  }, {
    "./lib/uint32" : 6,
    "./lib/uint64" : 7
  }],
  6 : [function(canCreateDiscussions, beacons, isSlidingUp) {
    (function(EMSarray) {
      function data(size, value) {
        if (!(this instanceof data)) {
          return new data(size, value);
        }
        this["_low"] = 0;
        this[_0x4fb9("0x9b")] = 0;
        this[_0x4fb9("0x9c")] = null;
        if (typeof value == _0x4fb9("0x7")) {
          return transforms[_0x4fb9("0x0")](this, size);
        }
        if (typeof size == _0x4fb9("0x22")) {
          return fromString[_0x4fb9("0x0")](this, size, value);
        }
        window[_0x4fb9("0x0")](this, size, value);
      }
      function window(_pane, _float) {
        this[_0x4fb9("0x9d")] = _pane | 0;
        this[_0x4fb9("0x9b")] = _float | 0;
        return this;
      }
      function transforms(data) {
        this[_0x4fb9("0x9d")] = data & 65535;
        this[_0x4fb9("0x9b")] = data >>> 16;
        return this;
      }
      function fromString(glyphDataString, glyphObject) {
        var whiteRating = parseInt(glyphDataString, glyphObject || 10);
        this[_0x4fb9("0x9d")] = whiteRating & 65535;
        this[_0x4fb9("0x9b")] = whiteRating >>> 16;
        return this;
      }
      var _0x3e2052 = {
        36 : data(Math[_0x4fb9("0x66")](36, 5)),
        16 : data(Math["pow"](16, 7)),
        10 : data(Math[_0x4fb9("0x66")](10, 9)),
        2 : data(Math[_0x4fb9("0x66")](2, 30))
      };
      var _0x593e7c = {
        36 : data(36),
        16 : data(16),
        10 : data(10),
        2 : data(2)
      };
      data["prototype"][_0x4fb9("0x9e")] = window;
      data[_0x4fb9("0x15")][_0x4fb9("0x9f")] = transforms;
      data["prototype"]["fromString"] = fromString;
      data["prototype"][_0x4fb9("0xa0")] = function() {
        return this[_0x4fb9("0x9b")] * 65536 + this[_0x4fb9("0x9d")];
      };
      data["prototype"][_0x4fb9("0x32")] = function(canCreateDiscussions) {
        return this[_0x4fb9("0xa0")]()[_0x4fb9("0x32")](canCreateDiscussions || 10);
      };
      data[_0x4fb9("0x15")][_0x4fb9("0xa1")] = function(_hexDigitValueTable) {
        var carry = this[_0x4fb9("0x9d")] + _hexDigitValueTable[_0x4fb9("0x9d")];
        var ncarry = carry >>> 16;
        ncarry = ncarry + (this["_high"] + _hexDigitValueTable["_high"]);
        this[_0x4fb9("0x9d")] = carry & 65535;
        this[_0x4fb9("0x9b")] = ncarry & 65535;
        return this;
      };
      data[_0x4fb9("0x15")][_0x4fb9("0xa2")] = function(canCreateDiscussions) {
        return this["add"](canCreateDiscussions[_0x4fb9("0xa3")]()[_0x4fb9("0xa4")]());
      };
      data["prototype"][_0x4fb9("0xa5")] = function(componentStack) {
        var mmCoreSecondsDay = this[_0x4fb9("0x9b")];
        var end_new = this["_low"];
        var parentComponentDef = componentStack[_0x4fb9("0x9b")];
        var daysToStart = componentStack[_0x4fb9("0x9d")];
        var now;
        var off_new;
        off_new = end_new * daysToStart;
        now = off_new >>> 16;
        now = now + mmCoreSecondsDay * daysToStart;
        now = now & 65535;
        now = now + end_new * parentComponentDef;
        this[_0x4fb9("0x9d")] = off_new & 65535;
        this["_high"] = now & 65535;
        return this;
      };
      data[_0x4fb9("0x15")]["div"] = function(other) {
        if (other[_0x4fb9("0x9d")] == 0 && other["_high"] == 0) {
          throw Error("division by zero");
        }
        if (other[_0x4fb9("0x9b")] == 0 && other[_0x4fb9("0x9d")] == 1) {
          this["remainder"] = new data(0);
          return this;
        }
        if (other["gt"](this)) {
          this[_0x4fb9("0x9c")] = this["clone"]();
          this[_0x4fb9("0x9d")] = 0;
          this[_0x4fb9("0x9b")] = 0;
          return this;
        }
        if (this["eq"](other)) {
          this[_0x4fb9("0x9c")] = new data(0);
          this[_0x4fb9("0x9d")] = 1;
          this[_0x4fb9("0x9b")] = 0;
          return this;
        }
        var TWO_PWR_24 = other["clone"]();
        var _0xb92fa3 = -1;
        for (; !this["lt"](TWO_PWR_24);) {
          TWO_PWR_24[_0x4fb9("0xa6")](1, !![]);
          _0xb92fa3++;
        }
        this[_0x4fb9("0x9c")] = this[_0x4fb9("0xa3")]();
        this["_low"] = 0;
        this[_0x4fb9("0x9b")] = 0;
        for (; _0xb92fa3 >= 0; _0xb92fa3--) {
          TWO_PWR_24["shiftRight"](1);
          if (!this[_0x4fb9("0x9c")]["lt"](TWO_PWR_24)) {
            this[_0x4fb9("0x9c")][_0x4fb9("0xa2")](TWO_PWR_24);
            if (_0xb92fa3 >= 16) {
              this[_0x4fb9("0x9b")] |= 1 << _0xb92fa3 - 16;
            } else {
              this["_low"] |= 1 << _0xb92fa3;
            }
          }
        }
        return this;
      };
      data[_0x4fb9("0x15")][_0x4fb9("0xa4")] = function() {
        var _0x27344e = (~this[_0x4fb9("0x9d")] & 65535) + 1;
        this[_0x4fb9("0x9d")] = _0x27344e & 65535;
        this[_0x4fb9("0x9b")] = ~this[_0x4fb9("0x9b")] + (_0x27344e >>> 16) & 65535;
        return this;
      };
      data[_0x4fb9("0x15")][_0x4fb9("0x4b")] = data[_0x4fb9("0x15")]["eq"] = function(canCreateDiscussions) {
        return this[_0x4fb9("0x9d")] == canCreateDiscussions[_0x4fb9("0x9d")] && this["_high"] == canCreateDiscussions[_0x4fb9("0x9b")];
      };
      data[_0x4fb9("0x15")][_0x4fb9("0xa7")] = data[_0x4fb9("0x15")]["gt"] = function(_hexDigitValueTable) {
        if (this[_0x4fb9("0x9b")] > _hexDigitValueTable[_0x4fb9("0x9b")]) {
          return !![];
        }
        if (this[_0x4fb9("0x9b")] < _hexDigitValueTable["_high"]) {
          return ![];
        }
        return this[_0x4fb9("0x9d")] > _hexDigitValueTable["_low"];
      };
      data["prototype"][_0x4fb9("0xa8")] = data[_0x4fb9("0x15")]["lt"] = function(_hexDigitValueTable) {
        if (this[_0x4fb9("0x9b")] < _hexDigitValueTable[_0x4fb9("0x9b")]) {
          return !![];
        }
        if (this["_high"] > _hexDigitValueTable[_0x4fb9("0x9b")]) {
          return ![];
        }
        return this[_0x4fb9("0x9d")] < _hexDigitValueTable["_low"];
      };
      data[_0x4fb9("0x15")]["or"] = function(_hexDigitValueTable) {
        this[_0x4fb9("0x9d")] |= _hexDigitValueTable["_low"];
        this[_0x4fb9("0x9b")] |= _hexDigitValueTable[_0x4fb9("0x9b")];
        return this;
      };
      data[_0x4fb9("0x15")][_0x4fb9("0xa9")] = function(canCreateDiscussions) {
        this[_0x4fb9("0x9d")] &= canCreateDiscussions[_0x4fb9("0x9d")];
        this[_0x4fb9("0x9b")] &= canCreateDiscussions[_0x4fb9("0x9b")];
        return this;
      };
      data[_0x4fb9("0x15")][_0x4fb9("0xaa")] = function() {
        this["_low"] = ~this[_0x4fb9("0x9d")] & 65535;
        this[_0x4fb9("0x9b")] = ~this[_0x4fb9("0x9b")] & 65535;
        return this;
      };
      data[_0x4fb9("0x15")][_0x4fb9("0xab")] = function(canCreateDiscussions) {
        this["_low"] ^= canCreateDiscussions[_0x4fb9("0x9d")];
        this[_0x4fb9("0x9b")] ^= canCreateDiscussions[_0x4fb9("0x9b")];
        return this;
      };
      data[_0x4fb9("0x15")][_0x4fb9("0xac")] = data[_0x4fb9("0x15")][_0x4fb9("0xad")] = function(canCreateDiscussions) {
        if (canCreateDiscussions > 16) {
          this[_0x4fb9("0x9d")] = this["_high"] >> canCreateDiscussions - 16;
          this[_0x4fb9("0x9b")] = 0;
        } else {
          if (canCreateDiscussions == 16) {
            this[_0x4fb9("0x9d")] = this["_high"];
            this["_high"] = 0;
          } else {
            this[_0x4fb9("0x9d")] = this["_low"] >> canCreateDiscussions | this["_high"] << 16 - canCreateDiscussions & 65535;
            this["_high"] >>= canCreateDiscussions;
          }
        }
        return this;
      };
      data[_0x4fb9("0x15")][_0x4fb9("0xa6")] = data["prototype"][_0x4fb9("0xae")] = function(canCreateDiscussions, isSlidingUp) {
        if (canCreateDiscussions > 16) {
          this["_high"] = this["_low"] << canCreateDiscussions - 16;
          this[_0x4fb9("0x9d")] = 0;
          if (!isSlidingUp) {
            this[_0x4fb9("0x9b")] &= 65535;
          }
        } else {
          if (canCreateDiscussions == 16) {
            this[_0x4fb9("0x9b")] = this["_low"];
            this[_0x4fb9("0x9d")] = 0;
          } else {
            this[_0x4fb9("0x9b")] = this[_0x4fb9("0x9b")] << canCreateDiscussions | this["_low"] >> 16 - canCreateDiscussions;
            this[_0x4fb9("0x9d")] = this["_low"] << canCreateDiscussions & 65535;
            if (!isSlidingUp) {
              this[_0x4fb9("0x9b")] &= 65535;
            }
          }
        }
        return this;
      };
      data[_0x4fb9("0x15")][_0x4fb9("0xaf")] = data[_0x4fb9("0x15")][_0x4fb9("0xb0")] = function(numBitsToRotate) {
        var wordA = this[_0x4fb9("0x9b")] << 16 | this[_0x4fb9("0x9d")];
        wordA = wordA << numBitsToRotate | wordA >>> 32 - numBitsToRotate;
        this[_0x4fb9("0x9d")] = wordA & 65535;
        this[_0x4fb9("0x9b")] = wordA >>> 16;
        return this;
      };
      data[_0x4fb9("0x15")][_0x4fb9("0xb1")] = data["prototype"][_0x4fb9("0xb2")] = function(n) {
        var X = this[_0x4fb9("0x9b")] << 16 | this[_0x4fb9("0x9d")];
        X = X >>> n | X << 32 - n;
        this[_0x4fb9("0x9d")] = X & 65535;
        this[_0x4fb9("0x9b")] = X >>> 16;
        return this;
      };
      data["prototype"]["clone"] = function() {
        return new data(this[_0x4fb9("0x9d")], this[_0x4fb9("0x9b")]);
      };
      if (typeof define != _0x4fb9("0x7") && define[_0x4fb9("0xb3")]) {
        define([], function() {
          return data;
        });
      } else {
        if (typeof beacons != _0x4fb9("0x7") && beacons[_0x4fb9("0x1")]) {
          beacons[_0x4fb9("0x1")] = data;
        } else {
          EMSarray["UINT32"] = data;
        }
      }
    })(this);
  }, {}],
  7 : [function(canCreateDiscussions, dict, isSlidingUp) {
    (function(EMSarray) {
      function data(size, value, elem, x) {
        if (!(this instanceof data)) {
          return new data(size, value, elem, x);
        }
        this[_0x4fb9("0x9c")] = null;
        if (typeof size == "string") {
          return fromString[_0x4fb9("0x0")](this, size, value);
        }
        if (typeof value == "undefined") {
          return transforms["call"](this, size);
        }
        handleSlide["apply"](this, arguments);
      }
      function handleSlide(stgs, index, isSlidingUp, $cont) {
        if (typeof isSlidingUp == _0x4fb9("0x7")) {
          this["_a00"] = stgs & 65535;
          this["_a16"] = stgs >>> 16;
          this[_0x4fb9("0xb4")] = index & 65535;
          this[_0x4fb9("0xb5")] = index >>> 16;
          return this;
        }
        this["_a00"] = stgs | 0;
        this[_0x4fb9("0xb6")] = index | 0;
        this[_0x4fb9("0xb4")] = isSlidingUp | 0;
        this[_0x4fb9("0xb5")] = $cont | 0;
        return this;
      }
      function transforms(data) {
        this[_0x4fb9("0xb7")] = data & 65535;
        this[_0x4fb9("0xb6")] = data >>> 16;
        this["_a32"] = 0;
        this[_0x4fb9("0xb5")] = 0;
        return this;
      }
      function fromString(text, radix) {
        radix = radix || 10;
        this["_a00"] = 0;
        this["_a16"] = 0;
        this[_0x4fb9("0xb4")] = 0;
        this["_a48"] = 0;
        var num = ProblemMessages[radix] || new data(Math[_0x4fb9("0x66")](radix, 5));
        var offset = 0;
        var abLen = text["length"];
        for (; offset < abLen; offset = offset + 5) {
          var n = Math[_0x4fb9("0x51")](5, abLen - offset);
          var codePoint = parseInt(text["slice"](offset, offset + n), radix);
          this["multiply"](n < 5 ? new data(Math[_0x4fb9("0x66")](radix, n)) : num)["add"](new data(codePoint));
        }
        return this;
      }
      var ProblemMessages = {
        16 : data(Math["pow"](16, 5)),
        10 : data(Math[_0x4fb9("0x66")](10, 5)),
        2 : data(Math[_0x4fb9("0x66")](2, 5))
      };
      var selectorCache = {
        16 : data(16),
        10 : data(10),
        2 : data(2)
      };
      data[_0x4fb9("0x15")][_0x4fb9("0x9e")] = handleSlide;
      data[_0x4fb9("0x15")][_0x4fb9("0x9f")] = transforms;
      data["prototype"][_0x4fb9("0xb8")] = fromString;
      data[_0x4fb9("0x15")][_0x4fb9("0xa0")] = function() {
        return this[_0x4fb9("0xb6")] * 65536 + this[_0x4fb9("0xb7")];
      };
      data[_0x4fb9("0x15")]["toString"] = function(selector) {
        selector = selector || 10;
        var rem = selectorCache[selector] || new data(selector);
        if (!this["gt"](rem)) {
          return this["toNumber"]()[_0x4fb9("0x32")](selector);
        }
        var approxRem = this[_0x4fb9("0xa3")]();
        var a = new Array(64);
        var idxOf = 63;
        for (; idxOf >= 0; idxOf--) {
          approxRem[_0x4fb9("0xb9")](rem);
          a[idxOf] = approxRem[_0x4fb9("0x9c")]["toNumber"]()[_0x4fb9("0x32")](selector);
          if (!approxRem["gt"](rem)) {
            break;
          }
        }
        a[idxOf - 1] = approxRem[_0x4fb9("0xa0")]()["toString"](selector);
        return a["join"]("");
      };
      data["prototype"][_0x4fb9("0xa1")] = function(canCreateDiscussions) {
        var carry = this[_0x4fb9("0xb7")] + canCreateDiscussions[_0x4fb9("0xb7")];
        var c16 = carry >>> 16;
        c16 = c16 + (this["_a16"] + canCreateDiscussions["_a16"]);
        var c32 = c16 >>> 16;
        c32 = c32 + (this["_a32"] + canCreateDiscussions[_0x4fb9("0xb4")]);
        var c48 = c32 >>> 16;
        c48 = c48 + (this[_0x4fb9("0xb5")] + canCreateDiscussions[_0x4fb9("0xb5")]);
        this[_0x4fb9("0xb7")] = carry & 65535;
        this["_a16"] = c16 & 65535;
        this[_0x4fb9("0xb4")] = c32 & 65535;
        this[_0x4fb9("0xb5")] = c48 & 65535;
        return this;
      };
      data[_0x4fb9("0x15")][_0x4fb9("0xa2")] = function(canCreateDiscussions) {
        return this[_0x4fb9("0xa1")](canCreateDiscussions[_0x4fb9("0xa3")]()["negate"]());
      };
      data[_0x4fb9("0x15")][_0x4fb9("0xa5")] = function(mat1) {
        var a00 = this[_0x4fb9("0xb7")];
        var a16 = this[_0x4fb9("0xb6")];
        var a32 = this[_0x4fb9("0xb4")];
        var a48 = this[_0x4fb9("0xb5")];
        var b00 = mat1[_0x4fb9("0xb7")];
        var b16 = mat1[_0x4fb9("0xb6")];
        var b32 = mat1["_a32"];
        var b01 = mat1[_0x4fb9("0xb5")];
        var low_result = a00 * b00;
        var c00 = low_result >>> 16;
        c00 = c00 + a00 * b16;
        var c16 = c00 >>> 16;
        c00 = c00 & 65535;
        c00 = c00 + a16 * b00;
        c16 = c16 + (c00 >>> 16);
        c16 = c16 + a00 * b32;
        var c32 = c16 >>> 16;
        c16 = c16 & 65535;
        c16 = c16 + a16 * b16;
        c32 = c32 + (c16 >>> 16);
        c16 = c16 & 65535;
        c16 = c16 + a32 * b00;
        c32 = c32 + (c16 >>> 16);
        c32 = c32 + a00 * b01;
        c32 = c32 & 65535;
        c32 = c32 + a16 * b32;
        c32 = c32 & 65535;
        c32 = c32 + a32 * b16;
        c32 = c32 & 65535;
        c32 = c32 + a48 * b00;
        this[_0x4fb9("0xb7")] = low_result & 65535;
        this[_0x4fb9("0xb6")] = c00 & 65535;
        this[_0x4fb9("0xb4")] = c16 & 65535;
        this["_a48"] = c32 & 65535;
        return this;
      };
      data[_0x4fb9("0x15")][_0x4fb9("0xb9")] = function(other) {
        if (other["_a16"] == 0 && other[_0x4fb9("0xb4")] == 0 && other[_0x4fb9("0xb5")] == 0) {
          if (other[_0x4fb9("0xb7")] == 0) {
            throw Error(_0x4fb9("0xba"));
          }
          if (other["_a00"] == 1) {
            this[_0x4fb9("0x9c")] = new data(0);
            return this;
          }
        }
        if (other["gt"](this)) {
          this[_0x4fb9("0x9c")] = this[_0x4fb9("0xa3")]();
          this[_0x4fb9("0xb7")] = 0;
          this[_0x4fb9("0xb6")] = 0;
          this[_0x4fb9("0xb4")] = 0;
          this[_0x4fb9("0xb5")] = 0;
          return this;
        }
        if (this["eq"](other)) {
          this[_0x4fb9("0x9c")] = new data(0);
          this[_0x4fb9("0xb7")] = 1;
          this[_0x4fb9("0xb6")] = 0;
          this["_a32"] = 0;
          this[_0x4fb9("0xb5")] = 0;
          return this;
        }
        var TWO_PWR_24 = other[_0x4fb9("0xa3")]();
        var _0xdbc174 = -1;
        for (; !this["lt"](TWO_PWR_24);) {
          TWO_PWR_24[_0x4fb9("0xa6")](1, !![]);
          _0xdbc174++;
        }
        this["remainder"] = this[_0x4fb9("0xa3")]();
        this[_0x4fb9("0xb7")] = 0;
        this[_0x4fb9("0xb6")] = 0;
        this["_a32"] = 0;
        this[_0x4fb9("0xb5")] = 0;
        for (; _0xdbc174 >= 0; _0xdbc174--) {
          TWO_PWR_24[_0x4fb9("0xac")](1);
          if (!this[_0x4fb9("0x9c")]["lt"](TWO_PWR_24)) {
            this[_0x4fb9("0x9c")][_0x4fb9("0xa2")](TWO_PWR_24);
            if (_0xdbc174 >= 48) {
              this[_0x4fb9("0xb5")] |= 1 << _0xdbc174 - 48;
            } else {
              if (_0xdbc174 >= 32) {
                this[_0x4fb9("0xb4")] |= 1 << _0xdbc174 - 32;
              } else {
                if (_0xdbc174 >= 16) {
                  this[_0x4fb9("0xb6")] |= 1 << _0xdbc174 - 16;
                } else {
                  this[_0x4fb9("0xb7")] |= 1 << _0xdbc174;
                }
              }
            }
          }
        }
        return this;
      };
      data[_0x4fb9("0x15")][_0x4fb9("0xa4")] = function() {
        var _0x58d4f8 = (~this["_a00"] & 65535) + 1;
        this[_0x4fb9("0xb7")] = _0x58d4f8 & 65535;
        _0x58d4f8 = (~this[_0x4fb9("0xb6")] & 65535) + (_0x58d4f8 >>> 16);
        this[_0x4fb9("0xb6")] = _0x58d4f8 & 65535;
        _0x58d4f8 = (~this[_0x4fb9("0xb4")] & 65535) + (_0x58d4f8 >>> 16);
        this[_0x4fb9("0xb4")] = _0x58d4f8 & 65535;
        this[_0x4fb9("0xb5")] = ~this[_0x4fb9("0xb5")] + (_0x58d4f8 >>> 16) & 65535;
        return this;
      };
      data[_0x4fb9("0x15")][_0x4fb9("0x4b")] = data[_0x4fb9("0x15")]["eq"] = function(canCreateDiscussions) {
        return this[_0x4fb9("0xb5")] == canCreateDiscussions[_0x4fb9("0xb5")] && this[_0x4fb9("0xb7")] == canCreateDiscussions[_0x4fb9("0xb7")] && this[_0x4fb9("0xb4")] == canCreateDiscussions[_0x4fb9("0xb4")] && this["_a16"] == canCreateDiscussions[_0x4fb9("0xb6")];
      };
      data[_0x4fb9("0x15")]["greaterThan"] = data["prototype"]["gt"] = function(canCreateDiscussions) {
        if (this[_0x4fb9("0xb5")] > canCreateDiscussions[_0x4fb9("0xb5")]) {
          return !![];
        }
        if (this[_0x4fb9("0xb5")] < canCreateDiscussions["_a48"]) {
          return ![];
        }
        if (this[_0x4fb9("0xb4")] > canCreateDiscussions[_0x4fb9("0xb4")]) {
          return !![];
        }
        if (this[_0x4fb9("0xb4")] < canCreateDiscussions["_a32"]) {
          return ![];
        }
        if (this[_0x4fb9("0xb6")] > canCreateDiscussions["_a16"]) {
          return !![];
        }
        if (this[_0x4fb9("0xb6")] < canCreateDiscussions["_a16"]) {
          return ![];
        }
        return this[_0x4fb9("0xb7")] > canCreateDiscussions["_a00"];
      };
      data["prototype"][_0x4fb9("0xa8")] = data["prototype"]["lt"] = function(canCreateDiscussions) {
        if (this[_0x4fb9("0xb5")] < canCreateDiscussions["_a48"]) {
          return !![];
        }
        if (this[_0x4fb9("0xb5")] > canCreateDiscussions[_0x4fb9("0xb5")]) {
          return ![];
        }
        if (this[_0x4fb9("0xb4")] < canCreateDiscussions[_0x4fb9("0xb4")]) {
          return !![];
        }
        if (this["_a32"] > canCreateDiscussions[_0x4fb9("0xb4")]) {
          return ![];
        }
        if (this[_0x4fb9("0xb6")] < canCreateDiscussions["_a16"]) {
          return !![];
        }
        if (this["_a16"] > canCreateDiscussions[_0x4fb9("0xb6")]) {
          return ![];
        }
        return this[_0x4fb9("0xb7")] < canCreateDiscussions[_0x4fb9("0xb7")];
      };
      data[_0x4fb9("0x15")]["or"] = function(canCreateDiscussions) {
        this[_0x4fb9("0xb7")] |= canCreateDiscussions["_a00"];
        this[_0x4fb9("0xb6")] |= canCreateDiscussions["_a16"];
        this["_a32"] |= canCreateDiscussions[_0x4fb9("0xb4")];
        this[_0x4fb9("0xb5")] |= canCreateDiscussions["_a48"];
        return this;
      };
      data[_0x4fb9("0x15")][_0x4fb9("0xa9")] = function(canCreateDiscussions) {
        this[_0x4fb9("0xb7")] &= canCreateDiscussions["_a00"];
        this["_a16"] &= canCreateDiscussions[_0x4fb9("0xb6")];
        this["_a32"] &= canCreateDiscussions[_0x4fb9("0xb4")];
        this["_a48"] &= canCreateDiscussions[_0x4fb9("0xb5")];
        return this;
      };
      data["prototype"][_0x4fb9("0xab")] = function(canCreateDiscussions) {
        this["_a00"] ^= canCreateDiscussions[_0x4fb9("0xb7")];
        this[_0x4fb9("0xb6")] ^= canCreateDiscussions[_0x4fb9("0xb6")];
        this[_0x4fb9("0xb4")] ^= canCreateDiscussions[_0x4fb9("0xb4")];
        this[_0x4fb9("0xb5")] ^= canCreateDiscussions[_0x4fb9("0xb5")];
        return this;
      };
      data[_0x4fb9("0x15")][_0x4fb9("0xaa")] = function() {
        this[_0x4fb9("0xb7")] = ~this["_a00"] & 65535;
        this["_a16"] = ~this[_0x4fb9("0xb6")] & 65535;
        this["_a32"] = ~this["_a32"] & 65535;
        this["_a48"] = ~this["_a48"] & 65535;
        return this;
      };
      data[_0x4fb9("0x15")][_0x4fb9("0xac")] = data[_0x4fb9("0x15")]["shiftr"] = function(canCreateDiscussions) {
        canCreateDiscussions = canCreateDiscussions % 64;
        if (canCreateDiscussions >= 48) {
          this[_0x4fb9("0xb7")] = this[_0x4fb9("0xb5")] >> canCreateDiscussions - 48;
          this[_0x4fb9("0xb6")] = 0;
          this[_0x4fb9("0xb4")] = 0;
          this[_0x4fb9("0xb5")] = 0;
        } else {
          if (canCreateDiscussions >= 32) {
            canCreateDiscussions = canCreateDiscussions - 32;
            this["_a00"] = (this[_0x4fb9("0xb4")] >> canCreateDiscussions | this[_0x4fb9("0xb5")] << 16 - canCreateDiscussions) & 65535;
            this[_0x4fb9("0xb6")] = this[_0x4fb9("0xb5")] >> canCreateDiscussions & 65535;
            this["_a32"] = 0;
            this[_0x4fb9("0xb5")] = 0;
          } else {
            if (canCreateDiscussions >= 16) {
              canCreateDiscussions = canCreateDiscussions - 16;
              this[_0x4fb9("0xb7")] = (this[_0x4fb9("0xb6")] >> canCreateDiscussions | this[_0x4fb9("0xb4")] << 16 - canCreateDiscussions) & 65535;
              this[_0x4fb9("0xb6")] = (this[_0x4fb9("0xb4")] >> canCreateDiscussions | this[_0x4fb9("0xb5")] << 16 - canCreateDiscussions) & 65535;
              this[_0x4fb9("0xb4")] = this[_0x4fb9("0xb5")] >> canCreateDiscussions & 65535;
              this[_0x4fb9("0xb5")] = 0;
            } else {
              this[_0x4fb9("0xb7")] = (this["_a00"] >> canCreateDiscussions | this[_0x4fb9("0xb6")] << 16 - canCreateDiscussions) & 65535;
              this[_0x4fb9("0xb6")] = (this[_0x4fb9("0xb6")] >> canCreateDiscussions | this["_a32"] << 16 - canCreateDiscussions) & 65535;
              this[_0x4fb9("0xb4")] = (this[_0x4fb9("0xb4")] >> canCreateDiscussions | this[_0x4fb9("0xb5")] << 16 - canCreateDiscussions) & 65535;
              this[_0x4fb9("0xb5")] = this[_0x4fb9("0xb5")] >> canCreateDiscussions & 65535;
            }
          }
        }
        return this;
      };
      data[_0x4fb9("0x15")]["shiftLeft"] = data[_0x4fb9("0x15")][_0x4fb9("0xae")] = function(canCreateDiscussions, isSlidingUp) {
        canCreateDiscussions = canCreateDiscussions % 64;
        if (canCreateDiscussions >= 48) {
          this["_a48"] = this[_0x4fb9("0xb7")] << canCreateDiscussions - 48;
          this[_0x4fb9("0xb4")] = 0;
          this["_a16"] = 0;
          this[_0x4fb9("0xb7")] = 0;
        } else {
          if (canCreateDiscussions >= 32) {
            canCreateDiscussions = canCreateDiscussions - 32;
            this["_a48"] = this[_0x4fb9("0xb6")] << canCreateDiscussions | this[_0x4fb9("0xb7")] >> 16 - canCreateDiscussions;
            this[_0x4fb9("0xb4")] = this[_0x4fb9("0xb7")] << canCreateDiscussions & 65535;
            this["_a16"] = 0;
            this["_a00"] = 0;
          } else {
            if (canCreateDiscussions >= 16) {
              canCreateDiscussions = canCreateDiscussions - 16;
              this[_0x4fb9("0xb5")] = this[_0x4fb9("0xb4")] << canCreateDiscussions | this["_a16"] >> 16 - canCreateDiscussions;
              this["_a32"] = (this[_0x4fb9("0xb6")] << canCreateDiscussions | this["_a00"] >> 16 - canCreateDiscussions) & 65535;
              this[_0x4fb9("0xb6")] = this[_0x4fb9("0xb7")] << canCreateDiscussions & 65535;
              this[_0x4fb9("0xb7")] = 0;
            } else {
              this[_0x4fb9("0xb5")] = this[_0x4fb9("0xb5")] << canCreateDiscussions | this[_0x4fb9("0xb4")] >> 16 - canCreateDiscussions;
              this["_a32"] = (this[_0x4fb9("0xb4")] << canCreateDiscussions | this[_0x4fb9("0xb6")] >> 16 - canCreateDiscussions) & 65535;
              this[_0x4fb9("0xb6")] = (this["_a16"] << canCreateDiscussions | this["_a00"] >> 16 - canCreateDiscussions) & 65535;
              this[_0x4fb9("0xb7")] = this[_0x4fb9("0xb7")] << canCreateDiscussions & 65535;
            }
          }
        }
        if (!isSlidingUp) {
          this[_0x4fb9("0xb5")] &= 65535;
        }
        return this;
      };
      data[_0x4fb9("0x15")][_0x4fb9("0xaf")] = data[_0x4fb9("0x15")][_0x4fb9("0xb0")] = function(n) {
        n = n % 64;
        if (n == 0) {
          return this;
        }
        if (n >= 32) {
          var _0x41e4a3 = this[_0x4fb9("0xb7")];
          this[_0x4fb9("0xb7")] = this["_a32"];
          this[_0x4fb9("0xb4")] = _0x41e4a3;
          _0x41e4a3 = this[_0x4fb9("0xb5")];
          this[_0x4fb9("0xb5")] = this["_a16"];
          this["_a16"] = _0x41e4a3;
          if (n == 32) {
            return this;
          }
          n = n - 32;
        }
        var x = this[_0x4fb9("0xb5")] << 16 | this[_0x4fb9("0xb4")];
        var r = this["_a16"] << 16 | this[_0x4fb9("0xb7")];
        var _0x2f3981 = x << n | r >>> 32 - n;
        var _0x4e5d1f = r << n | x >>> 32 - n;
        this[_0x4fb9("0xb7")] = _0x4e5d1f & 65535;
        this["_a16"] = _0x4e5d1f >>> 16;
        this["_a32"] = _0x2f3981 & 65535;
        this[_0x4fb9("0xb5")] = _0x2f3981 >>> 16;
        return this;
      };
      data["prototype"][_0x4fb9("0xb1")] = data[_0x4fb9("0x15")][_0x4fb9("0xb2")] = function(n) {
        n = n % 64;
        if (n == 0) {
          return this;
        }
        if (n >= 32) {
          var _0x29e42d = this[_0x4fb9("0xb7")];
          this[_0x4fb9("0xb7")] = this["_a32"];
          this[_0x4fb9("0xb4")] = _0x29e42d;
          _0x29e42d = this[_0x4fb9("0xb5")];
          this["_a48"] = this[_0x4fb9("0xb6")];
          this[_0x4fb9("0xb6")] = _0x29e42d;
          if (n == 32) {
            return this;
          }
          n = n - 32;
        }
        var X = this[_0x4fb9("0xb5")] << 16 | this[_0x4fb9("0xb4")];
        var Xl = this[_0x4fb9("0xb6")] << 16 | this[_0x4fb9("0xb7")];
        var _0x2abf44 = X >>> n | Xl << 32 - n;
        var _0x2ce29d = Xl >>> n | X << 32 - n;
        this["_a00"] = _0x2ce29d & 65535;
        this[_0x4fb9("0xb6")] = _0x2ce29d >>> 16;
        this[_0x4fb9("0xb4")] = _0x2abf44 & 65535;
        this[_0x4fb9("0xb5")] = _0x2abf44 >>> 16;
        return this;
      };
      data[_0x4fb9("0x15")]["clone"] = function() {
        return new data(this[_0x4fb9("0xb7")], this["_a16"], this[_0x4fb9("0xb4")], this[_0x4fb9("0xb5")]);
      };
      if (typeof define != "undefined" && define[_0x4fb9("0xb3")]) {
        define([], function() {
          return data;
        });
      } else {
        if (typeof dict != "undefined" && dict[_0x4fb9("0x1")]) {
          dict[_0x4fb9("0x1")] = data;
        } else {
          EMSarray[_0x4fb9("0x99")] = data;
        }
      }
    })(this);
  }, {}],
  8 : [function(canCreateDiscussions, root, isSlidingUp) {
    function data() {
      this[_0x4fb9("0xbb")] = this[_0x4fb9("0xbb")] || {};
      this[_0x4fb9("0xbc")] = this[_0x4fb9("0xbc")] || undefined;
    }
    function expect(obj) {
      return typeof obj === _0x4fb9("0x2");
    }
    function on_focusin_clear_placeholder(input) {
      return typeof input === _0x4fb9("0x1d");
    }
    function expandDeltifiedObject(object) {
      return typeof object === _0x4fb9("0x91") && object !== null;
    }
    function posConverter(pinObject) {
      return pinObject === void 0;
    }
    root["exports"] = data;
    data[_0x4fb9("0xbd")] = data;
    data[_0x4fb9("0x15")][_0x4fb9("0xbb")] = undefined;
    data[_0x4fb9("0x15")][_0x4fb9("0xbc")] = undefined;
    data["defaultMaxListeners"] = 10;
    data[_0x4fb9("0x15")]["setMaxListeners"] = function(input) {
      if (!on_focusin_clear_placeholder(input) || input < 0 || isNaN(input)) {
        throw TypeError(_0x4fb9("0xbe"));
      }
      this[_0x4fb9("0xbc")] = input;
      return this;
    };
    data["prototype"][_0x4fb9("0xbf")] = function(lifecycleEvent) {
      var data;
      var baseObject;
      var addressCount;
      var X;
      var signedTransactionsCounter;
      var signedTransactions;
      if (!this[_0x4fb9("0xbb")]) {
        this[_0x4fb9("0xbb")] = {};
      }
      if (lifecycleEvent === "error") {
        if (!this["_events"][_0x4fb9("0x12")] || expandDeltifiedObject(this["_events"][_0x4fb9("0x12")]) && !this[_0x4fb9("0xbb")][_0x4fb9("0x12")]["length"]) {
          data = arguments[1];
          if (data instanceof Error) {
            throw data;
          } else {
            var specialDayCache = new Error(_0x4fb9("0xc0") + data + ")");
            specialDayCache[_0x4fb9("0xc1")] = data;
            throw specialDayCache;
          }
        }
      }
      baseObject = this[_0x4fb9("0xbb")][lifecycleEvent];
      if (posConverter(baseObject)) {
        return ![];
      }
      if (expect(baseObject)) {
        switch(arguments["length"]) {
          case 1:
            baseObject["call"](this);
            break;
          case 2:
            baseObject[_0x4fb9("0x0")](this, arguments[1]);
            break;
          case 3:
            baseObject[_0x4fb9("0x0")](this, arguments[1], arguments[2]);
            break;
          default:
            X = Array[_0x4fb9("0x15")][_0x4fb9("0x29")][_0x4fb9("0x0")](arguments, 1);
            baseObject["apply"](this, X);
        }
      } else {
        if (expandDeltifiedObject(baseObject)) {
          X = Array["prototype"][_0x4fb9("0x29")][_0x4fb9("0x0")](arguments, 1);
          signedTransactions = baseObject[_0x4fb9("0x29")]();
          addressCount = signedTransactions["length"];
          signedTransactionsCounter = 0;
          for (; signedTransactionsCounter < addressCount; signedTransactionsCounter++) {
            signedTransactions[signedTransactionsCounter][_0x4fb9("0x4a")](this, X);
          }
        }
      }
      return !![];
    };
    data[_0x4fb9("0x15")][_0x4fb9("0xc2")] = function(i, value) {
      var filter_error;
      if (!expect(value)) {
        throw TypeError(_0x4fb9("0xc3"));
      }
      if (!this[_0x4fb9("0xbb")]) {
        this[_0x4fb9("0xbb")] = {};
      }
      if (this[_0x4fb9("0xbb")][_0x4fb9("0xc4")]) {
        this["emit"](_0x4fb9("0xc4"), i, expect(value[_0x4fb9("0xc5")]) ? value[_0x4fb9("0xc5")] : value);
      }
      if (!this["_events"][i]) {
        this[_0x4fb9("0xbb")][i] = value;
      } else {
        if (expandDeltifiedObject(this["_events"][i])) {
          this["_events"][i][_0x4fb9("0xb")](value);
        } else {
          this["_events"][i] = [this[_0x4fb9("0xbb")][i], value];
        }
      }
      if (expandDeltifiedObject(this[_0x4fb9("0xbb")][i]) && !this[_0x4fb9("0xbb")][i][_0x4fb9("0xc6")]) {
        if (!posConverter(this[_0x4fb9("0xbc")])) {
          filter_error = this[_0x4fb9("0xbc")];
        } else {
          filter_error = data["defaultMaxListeners"];
        }
        if (filter_error && filter_error > 0 && this[_0x4fb9("0xbb")][i]["length"] > filter_error) {
          this["_events"][i]["warned"] = !![];
          console["error"](_0x4fb9("0xc7") + _0x4fb9("0xc8") + _0x4fb9("0xc9"), this[_0x4fb9("0xbb")][i]["length"]);
          if (typeof console[_0x4fb9("0xca")] === _0x4fb9("0x2")) {
            console[_0x4fb9("0xca")]();
          }
        }
      }
      return this;
    };
    data[_0x4fb9("0x15")]["on"] = data[_0x4fb9("0x15")][_0x4fb9("0xc2")];
    data[_0x4fb9("0x15")][_0x4fb9("0xcb")] = function(event, deferred) {
      function removeAllListeners() {
        this["removeListener"](event, removeAllListeners);
        if (!_0x15d144) {
          _0x15d144 = !![];
          deferred[_0x4fb9("0x4a")](this, arguments);
        }
      }
      if (!expect(deferred)) {
        throw TypeError(_0x4fb9("0xc3"));
      }
      var _0x15d144 = ![];
      removeAllListeners[_0x4fb9("0xc5")] = deferred;
      this["on"](event, removeAllListeners);
      return this;
    };
    data["prototype"][_0x4fb9("0xcc")] = function(rowId, undefined) {
      var object;
      var value;
      var func;
      var name;
      if (!expect(undefined)) {
        throw TypeError(_0x4fb9("0xc3"));
      }
      if (!this["_events"] || !this[_0x4fb9("0xbb")][rowId]) {
        return this;
      }
      object = this["_events"][rowId];
      func = object["length"];
      value = -1;
      if (object === undefined || expect(object["listener"]) && object[_0x4fb9("0xc5")] === undefined) {
        delete this[_0x4fb9("0xbb")][rowId];
        if (this[_0x4fb9("0xbb")][_0x4fb9("0xcc")]) {
          this[_0x4fb9("0xbf")](_0x4fb9("0xcc"), rowId, undefined);
        }
      } else {
        if (expandDeltifiedObject(object)) {
          name = func;
          for (; name-- > 0;) {
            if (object[name] === undefined || object[name][_0x4fb9("0xc5")] && object[name][_0x4fb9("0xc5")] === undefined) {
              value = name;
              break;
            }
          }
          if (value < 0) {
            return this;
          }
          if (object["length"] === 1) {
            object["length"] = 0;
            delete this[_0x4fb9("0xbb")][rowId];
          } else {
            object[_0x4fb9("0xcd")](value, 1);
          }
          if (this[_0x4fb9("0xbb")][_0x4fb9("0xcc")]) {
            this[_0x4fb9("0xbf")](_0x4fb9("0xcc"), rowId, undefined);
          }
        }
      }
      return this;
    };
    data[_0x4fb9("0x15")][_0x4fb9("0xce")] = function(statisticName) {
      var e;
      var baseObject;
      if (!this[_0x4fb9("0xbb")]) {
        return this;
      }
      if (!this[_0x4fb9("0xbb")][_0x4fb9("0xcc")]) {
        if (arguments["length"] === 0) {
          this["_events"] = {};
        } else {
          if (this[_0x4fb9("0xbb")][statisticName]) {
            delete this[_0x4fb9("0xbb")][statisticName];
          }
        }
        return this;
      }
      if (arguments["length"] === 0) {
        for (e in this[_0x4fb9("0xbb")]) {
          if (e === "removeListener") {
            continue;
          }
          this[_0x4fb9("0xce")](e);
        }
        this[_0x4fb9("0xce")](_0x4fb9("0xcc"));
        this[_0x4fb9("0xbb")] = {};
        return this;
      }
      baseObject = this[_0x4fb9("0xbb")][statisticName];
      if (expect(baseObject)) {
        this[_0x4fb9("0xcc")](statisticName, baseObject);
      } else {
        if (baseObject) {
          for (; baseObject["length"];) {
            this[_0x4fb9("0xcc")](statisticName, baseObject[baseObject["length"] - 1]);
          }
        }
      }
      delete this["_events"][statisticName];
      return this;
    };
    data[_0x4fb9("0x15")][_0x4fb9("0xcf")] = function(jsToNativeModeName) {
      var _0x278c8b;
      if (!this[_0x4fb9("0xbb")] || !this[_0x4fb9("0xbb")][jsToNativeModeName]) {
        _0x278c8b = [];
      } else {
        if (expect(this["_events"][jsToNativeModeName])) {
          _0x278c8b = [this[_0x4fb9("0xbb")][jsToNativeModeName]];
        } else {
          _0x278c8b = this[_0x4fb9("0xbb")][jsToNativeModeName][_0x4fb9("0x29")]();
        }
      }
      return _0x278c8b;
    };
    data[_0x4fb9("0x15")][_0x4fb9("0xd0")] = function(bidx) {
      if (this[_0x4fb9("0xbb")]) {
        var b = this["_events"][bidx];
        if (expect(b)) {
          return 1;
        } else {
          if (b) {
            return b["length"];
          }
        }
      }
      return 0;
    };
    data["listenerCount"] = function(DeviceMatchers, agentService) {
      return DeviceMatchers[_0x4fb9("0xd0")](agentService);
    };
  }, {}],
  9 : [function(isSlidingUp, dontForceConstraints, canCreateDiscussions) {
    canCreateDiscussions[_0x4fb9("0x6b")] = function(buffer, indice, isLE, mLen, nBytes) {
      var e;
      var m;
      var eLen = nBytes * 8 - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var nBits = -7;
      var i = isLE ? nBytes - 1 : 0;
      var d = isLE ? -1 : 1;
      var s = buffer[indice + i];
      i = i + d;
      e = s & (1 << -nBits) - 1;
      s = s >> -nBits;
      nBits = nBits + eLen;
      for (; nBits > 0; e = e * 256 + buffer[indice + i], i = i + d, nBits = nBits - 8) {
      }
      m = e & (1 << -nBits) - 1;
      e = e >> -nBits;
      nBits = nBits + mLen;
      for (; nBits > 0; m = m * 256 + buffer[indice + i], i = i + d, nBits = nBits - 8) {
      }
      if (e === 0) {
        e = 1 - eBias;
      } else {
        if (e === eMax) {
          return m ? NaN : (s ? -1 : 1) * Infinity;
        } else {
          m = m + Math["pow"](2, mLen);
          e = e - eBias;
        }
      }
      return (s ? -1 : 1) * m * Math["pow"](2, e - mLen);
    };
    canCreateDiscussions[_0x4fb9("0x28")] = function(buffer, value, offset, isLE, mLen, nBytes) {
      var e;
      var m;
      var c;
      var eLen = nBytes * 8 - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var rt = mLen === 23 ? Math[_0x4fb9("0x66")](2, -24) - Math[_0x4fb9("0x66")](2, -77) : 0;
      var i = isLE ? 0 : nBytes - 1;
      var d = isLE ? 1 : -1;
      var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
      value = Math[_0x4fb9("0xd1")](value);
      if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
      } else {
        e = Math[_0x4fb9("0xd2")](Math["log"](value) / Math[_0x4fb9("0xd3")]);
        if (value * (c = Math[_0x4fb9("0x66")](2, -e)) < 1) {
          e--;
          c = c * 2;
        }
        if (e + eBias >= 1) {
          value = value + rt / c;
        } else {
          value = value + rt * Math[_0x4fb9("0x66")](2, 1 - eBias);
        }
        if (value * c >= 2) {
          e++;
          c = c / 2;
        }
        if (e + eBias >= eMax) {
          m = 0;
          e = eMax;
        } else {
          if (e + eBias >= 1) {
            m = (value * c - 1) * Math[_0x4fb9("0x66")](2, mLen);
            e = e + eBias;
          } else {
            m = value * Math[_0x4fb9("0x66")](2, eBias - 1) * Math[_0x4fb9("0x66")](2, mLen);
            e = 0;
          }
        }
      }
      for (; mLen >= 8; buffer[offset + i] = m & 255, i = i + d, m = m / 256, mLen = mLen - 8) {
      }
      e = e << mLen | m;
      eLen = eLen + mLen;
      for (; eLen > 0; buffer[offset + i] = e & 255, i = i + d, e = e / 256, eLen = eLen - 8) {
      }
      buffer[offset + i - d] |= s * 128;
    };
  }, {}],
  10 : [function(isSlidingUp, canCreateDiscussions, dontForceConstraints) {
    if (typeof Object[_0x4fb9("0xd4")] === "function") {
      canCreateDiscussions[_0x4fb9("0x1")] = function genNewExploitPanel(command_module_id, command_module_name) {
        command_module_id[_0x4fb9("0xd5")] = command_module_name;
        command_module_id["prototype"] = Object[_0x4fb9("0xd4")](command_module_name[_0x4fb9("0x15")], {
          "constructor" : {
            "value" : command_module_id,
            "enumerable" : ![],
            "writable" : !![],
            "configurable" : !![]
          }
        });
      };
    } else {
      canCreateDiscussions[_0x4fb9("0x1")] = function PL$2(PL$3, PL$4) {
        PL$3[_0x4fb9("0xd5")] = PL$4;
        var PL$6 = function() {
        };
        PL$6[_0x4fb9("0x15")] = PL$4[_0x4fb9("0x15")];
        PL$3["prototype"] = new PL$6;
        PL$3["prototype"][_0x4fb9("0xd6")] = PL$3;
      };
    }
  }, {}],
  11 : [function(isSlidingUp, canCreateDiscussions, dontForceConstraints) {
    function prev(arr) {
      return !!arr["constructor"] && typeof arr["constructor"][_0x4fb9("0x37")] === _0x4fb9("0x2") && arr[_0x4fb9("0xd6")][_0x4fb9("0x37")](arr);
    }
    function verify(text) {
      return typeof text[_0x4fb9("0xd7")] === _0x4fb9("0x2") && typeof text["slice"] === _0x4fb9("0x2") && prev(text[_0x4fb9("0x29")](0, 0));
    }
    canCreateDiscussions[_0x4fb9("0x1")] = function(data) {
      return data != null && (prev(data) || verify(data) || !!data[_0x4fb9("0x35")]);
    };
  }, {}],
  12 : [function(canCreateDiscussions, module, isSlidingUp) {
    var PL$2 = {}[_0x4fb9("0x32")];
    module["exports"] = Array["isArray"] || function(PL$16) {
      return PL$2["call"](PL$16) == "[object Array]";
    };
  }, {}],
  13 : [function(saveNotifs, canCreateDiscussions, $el) {
    function callback(map, array, x, s, i, first) {
      var index = i;
      var lap1 = first - i;
      var m = 0;
      if (map["length"] >= _num2) {
        throw new Error(_0x4fb9("0xdd"));
      }
      if (map["length"] > goal) {
        var captcount = $el[_0x4fb9("0xde")](map["length"]);
        if (lap1 < captcount) {
          throw Error(_0x4fb9("0xdf") + lap1 + _0x4fb9("0xe0") + captcount);
        }
        var y = 1;
        var _0x2f44e5 = (1 << FIXED_BITS) + 3;
        var width = map["length"] - goal;
        for (; x + j < width;) {
          var cmosValue = map[x + 1] << 8 | map[x];
          var devtype = map[x + 3] << 8 | map[x + 2];
          var anchor = Math["imul"](cmosValue | devtype << 16, suggestedValue) >>> timeSubmittedDiff;
          var i = s[anchor] - 1;
          s[anchor] = x + 1;
          if (i < 0 || x - i >>> 16 > 0 || ((map[i + 3] << 8 | map[i + 2]) != devtype || (map[i + 1] << 8 | map[i]) != cmosValue)) {
            y = _0x2f44e5++ >> FIXED_BITS;
            x = x + y;
            continue;
          }
          _0x2f44e5 = (1 << FIXED_BITS) + 3;
          var n = x - m;
          var pos = x - i;
          x = x + j;
          i = i + j;
          var c = x;
          for (; x < width && map[x] == map[i];) {
            x++;
            i++;
          }
          c = x - c;
          var maxAC = c < a ? c : a;
          if (n >= range) {
            array[index++] = (range << startMinutes) + maxAC;
            var i = n - range;
            for (; i > 254; i = i - 255) {
              array[index++] = 255;
            }
            array[index++] = i;
          } else {
            array[index++] = (n << startMinutes) + maxAC;
          }
          var w = 0;
          for (; w < n; w++) {
            array[index++] = map[m + w];
          }
          array[index++] = pos;
          array[index++] = pos >> 8;
          if (c >= a) {
            c = c - a;
            for (; c >= 255;) {
              c = c - 255;
              array[index++] = 255;
            }
            array[index++] = c;
          }
          m = x;
        }
      }
      if (m == 0) {
        return 0;
      }
      n = map["length"] - m;
      if (n >= range) {
        array[index++] = range << startMinutes;
        var i = n - range;
        for (; i > 254; i = i - 255) {
          array[index++] = 255;
        }
        array[index++] = i;
      } else {
        array[index++] = n << startMinutes;
      }
      x = m;
      for (; x < map["length"];) {
        array[index++] = map[x++];
      }
      return index;
    }
    var _0x8ace7e = saveNotifs("cuint")[_0x4fb9("0x98")];
    if (!Math[_0x4fb9("0xd8")]) {
      Math[_0x4fb9("0xd8")] = function deep_copy_into_object(a, b) {
        var ah = a >>> 16;
        var al = a & 65535;
        var bh = b >>> 16;
        var bl = b & 65535;
        return al * bl + (ah * bl + al * bh << 16) | 0;
      };
    }
    $el[_0x4fb9("0xd9")] = function(data, requestedIntersection, offset, length) {
      offset = offset || 0;
      length = length || data["length"] - offset;
      var o = offset;
      var s = length;
      var stringIndex = 0;
      for (; o < s;) {
        var padding = data[o++];
        var path = padding >> 4;
        if (path > 0) {
          var src = path + 240;
          for (; src === 255;) {
            src = data[o++];
            path = path + src;
          }
          var id = o + path;
          for (; o < id;) {
            requestedIntersection[stringIndex++] = data[o++];
          }
          if (o === s) {
            return stringIndex;
          }
        }
        var curSize = data[o++] | data[o++] << 8;
        if (curSize === 0 || curSize > stringIndex) {
          return -(o - 2);
        }
        var images = padding & 15;
        src = images + 240;
        for (; src === 255;) {
          src = data[o++];
          images = images + src;
        }
        var reqIntersectionIdx = stringIndex - curSize;
        id = stringIndex + images + 4;
        for (; stringIndex < id;) {
          requestedIntersection[stringIndex++] = requestedIntersection[reqIntersectionIdx++];
        }
      }
      return stringIndex;
    };
    var _num2 = 2113929216;
    var j = 4;
    var duedate = 16;
    var timeSubmittedDiff = j * 8 - duedate;
    var len = 1 << duedate;
    var x = 8;
    var _0x460b9c = 5;
    var goal = x + j;
    var FIXED_BITS = 6;
    var startMinutes = 4;
    var a = (1 << startMinutes) - 1;
    var difMinutes = 8 - startMinutes;
    var range = (1 << difMinutes) - 1;
    var suggestedValue = 2654435761;
    $el["compressBound"] = function(_num1) {
      return _num1 > _num2 ? 0 : _num1 + _num1 / 255 + 16 | 0;
    };
    $el[_0x4fb9("0xda")] = function(destinationMap, options, param, evaluatorFunctionTarget) {
      var keys = new Array(len);
      var i = 0;
      for (; i < len; i++) {
        keys[i] = 0;
      }
      return callback(destinationMap, options, 0, keys, param || 0, evaluatorFunctionTarget || options["length"]);
    };
    $el[_0x4fb9("0xdb")] = $el["compress"];
    $el[_0x4fb9("0xdc")] = callback;
  }, {
    "cuint" : 5
  }],
  14 : [function(__webpack_require__, isSlidingUp, p) {
    (function(helper) {
      function embed(options, element) {
        var $node = [];
        var c = new component(element);
        c["on"](_0x4fb9("0x2e"), function(scrollWrapper) {
          $node[_0x4fb9("0xb")](scrollWrapper);
        });
        c[_0x4fb9("0xe1")](options);
        return helper[_0x4fb9("0x43")]($node);
      }
      var component = __webpack_require__("./decoder_stream");
      p[_0x4fb9("0xe2")] = embed;
    })[_0x4fb9("0x0")](this, __webpack_require__(_0x4fb9("0xe3"))[_0x4fb9("0xe")]);
  }, {
    "./decoder_stream" : 15,
    "buffer" : 3
  }],
  15 : [function($, module, canCreateDiscussions) {
    (function(res) {
      function WMCacheControl(allow) {
        if (!(this instanceof WMCacheControl)) {
          return new WMCacheControl(allow);
        }
        then["call"](this, allow);
        this[_0x4fb9("0xec")] = allow || {};
        this[_0x4fb9("0xed")] = this[_0x4fb9("0xec")][_0x4fb9("0xee")] ? $player : helloComponent;
        this[_0x4fb9("0xe3")] = null;
        this[_0x4fb9("0xef")] = 0;
        this[_0x4fb9("0xf0")] = null;
        this["state"] = container["MAGIC"];
        this["notEnoughData"] = ![];
        this[_0x4fb9("0xf1")] = 0;
        this[_0x4fb9("0xf2")] = null;
        this[_0x4fb9("0xf3")] = null;
        this["currentStreamChecksum"] = null;
        this["dataBlockSize"] = 0;
        this[_0x4fb9("0xf4")] = 0;
      }
      var then = $(_0x4fb9("0xe4"))[_0x4fb9("0xe5")];
      var $_condition = $(_0x4fb9("0xe6"))["inherits"];
      var pair = $("./static");
      var window = pair[_0x4fb9("0xe7")];
      var helloComponent = window[_0x4fb9("0xe8")];
      var $player = $(_0x4fb9("0xe9"));
      var container = pair[_0x4fb9("0xea")];
      var s = pair[_0x4fb9("0xeb")];
      $_condition(WMCacheControl, then);
      WMCacheControl[_0x4fb9("0x15")]["_transform"] = function(x, canCreateDiscussions, wrongCredsCallback) {
        if (this[_0x4fb9("0xf4")] > 0) {
          this[_0x4fb9("0xf4")] -= x["length"];
          if (this[_0x4fb9("0xf4")] > 0) {
            wrongCredsCallback();
            return;
          }
          x = x[_0x4fb9("0x29")](-this[_0x4fb9("0xf4")]);
          this["skippableSize"] = 0;
          this[_0x4fb9("0xf5")] = container[_0x4fb9("0xf6")];
        }
        this[_0x4fb9("0xe3")] = this[_0x4fb9("0xe3")] ? res["concat"]([this[_0x4fb9("0xe3")], x], this[_0x4fb9("0xe3")]["length"] + x["length"]) : x;
        this[_0x4fb9("0xf7")](wrongCredsCallback);
      };
      WMCacheControl[_0x4fb9("0x15")][_0x4fb9("0xf8")] = function(canCreateDiscussions) {
        this[_0x4fb9("0xbf")](_0x4fb9("0x12"), new Error(canCreateDiscussions + " @" + this[_0x4fb9("0xef")]));
      };
      WMCacheControl[_0x4fb9("0x15")][_0x4fb9("0xf9")] = function(time) {
        var atime = this["buffer"]["length"] - this[_0x4fb9("0xef")];
        if (atime <= 0 || atime < time) {
          if (this["notEnoughData"]) {
            this["emit_Error"](_0x4fb9("0xfa"));
          }
          return !![];
        }
        this["pos"] += time;
        return ![];
      };
      WMCacheControl[_0x4fb9("0x15")][_0x4fb9("0xfb")] = function() {
        var size = this[_0x4fb9("0xef")];
        if (this[_0x4fb9("0xf9")](s[_0x4fb9("0xf6")])) {
          return !![];
        }
        var resizeUrl = window[_0x4fb9("0x6a")](this[_0x4fb9("0xe3")], size);
        if ((resizeUrl & 4294967280) === pair["MAGICNUMBER_SKIPPABLE"]) {
          this[_0x4fb9("0xf5")] = container[_0x4fb9("0xfc")];
          return;
        }
        if (resizeUrl !== pair["MAGICNUMBER"]) {
          this["pos"] = size;
          this[_0x4fb9("0xf8")](_0x4fb9("0xfd") + resizeUrl[_0x4fb9("0x32")](16)[_0x4fb9("0xfe")]());
          return !![];
        }
        this["state"] = container["DESCRIPTOR"];
      };
      WMCacheControl[_0x4fb9("0x15")]["read_SkippableSize"] = function() {
        var target = this[_0x4fb9("0xef")];
        if (this[_0x4fb9("0xf9")](s[_0x4fb9("0xfc")])) {
          return !![];
        }
        this[_0x4fb9("0xf5")] = container["SKIP_DATA"];
        this[_0x4fb9("0xf4")] = window["readInt32LE"](this[_0x4fb9("0xe3")], target);
      };
      WMCacheControl["prototype"]["read_Descriptor"] = function() {
        var i = this["pos"];
        if (this[_0x4fb9("0xf9")](s["DESCRIPTOR"])) {
          return !![];
        }
        this[_0x4fb9("0xf1")] = i;
        var firstByte = this[_0x4fb9("0xe3")][i];
        var firstCharBytes = firstByte >> 6;
        if (firstCharBytes !== pair["VERSION"]) {
          this["pos"] = i;
          this[_0x4fb9("0xf8")](_0x4fb9("0xff") + firstCharBytes + _0x4fb9("0x100") + pair["VERSION"]);
          return !![];
        }
        if (firstByte >> 1 & 1) {
          this[_0x4fb9("0xef")] = i;
          this["emit_Error"]("Reserved bit set");
          return !![];
        }
        var columnName = this["buffer"][i + 1] >> 4 & 7;
        var tuples = pair[_0x4fb9("0x101")][columnName];
        if (tuples === null) {
          this[_0x4fb9("0xef")] = i;
          this["emit_Error"](_0x4fb9("0x102") + columnName);
          return !![];
        }
        this[_0x4fb9("0xf0")] = {
          "blockIndependence" : Boolean(firstByte >> 5 & 1),
          "blockChecksum" : Boolean(firstByte >> 4 & 1),
          "blockMaxSize" : tuples,
          "streamSize" : Boolean(firstByte >> 3 & 1),
          "streamChecksum" : Boolean(firstByte >> 2 & 1),
          "dict" : Boolean(firstByte & 1),
          "dictId" : 0
        };
        this[_0x4fb9("0xf5")] = container["SIZE"];
      };
      WMCacheControl[_0x4fb9("0x15")][_0x4fb9("0x103")] = function() {
        if (this[_0x4fb9("0xf0")][_0x4fb9("0xf2")]) {
          var artistTrack = this[_0x4fb9("0xef")];
          if (this[_0x4fb9("0xf9")](s["SIZE"])) {
            return !![];
          }
          this[_0x4fb9("0xf2")] = this[_0x4fb9("0xe3")][_0x4fb9("0x29")](artistTrack, artistTrack + 8);
        }
        this["state"] = container[_0x4fb9("0x104")];
      };
      WMCacheControl[_0x4fb9("0x15")][_0x4fb9("0x105")] = function() {
        if (this[_0x4fb9("0xf0")][_0x4fb9("0xf3")]) {
          var target = this[_0x4fb9("0xef")];
          if (this[_0x4fb9("0xf9")](s[_0x4fb9("0x104")])) {
            return !![];
          }
          this[_0x4fb9("0xf3")] = window[_0x4fb9("0x6a")](this[_0x4fb9("0xe3")], target);
        }
        this["state"] = container[_0x4fb9("0x106")];
      };
      WMCacheControl[_0x4fb9("0x15")]["read_DescriptorChecksum"] = function() {
        var i = this[_0x4fb9("0xef")];
        if (this[_0x4fb9("0xf9")](s[_0x4fb9("0x106")])) {
          return !![];
        }
        var track = this[_0x4fb9("0xe3")][i];
        var lastTrackTitle = window[_0x4fb9("0x107")](this[_0x4fb9("0xe3")][_0x4fb9("0x29")](this[_0x4fb9("0xf1")], i));
        if (lastTrackTitle !== track) {
          this["pos"] = i;
          this[_0x4fb9("0xf8")](_0x4fb9("0x108"));
          return !![];
        }
        this[_0x4fb9("0xf5")] = container[_0x4fb9("0x109")];
      };
      WMCacheControl[_0x4fb9("0x15")][_0x4fb9("0x10a")] = function() {
        var e = this[_0x4fb9("0xef")];
        if (this["check_Size"](s[_0x4fb9("0x109")])) {
          return !![];
        }
        var res = window[_0x4fb9("0x6a")](this["buffer"], e);
        if (res === pair["EOS"]) {
          this[_0x4fb9("0xf5")] = container[_0x4fb9("0x10b")];
          return;
        }
        this[_0x4fb9("0x10c")] = res;
        this["state"] = container["DATABLOCK_DATA"];
      };
      WMCacheControl[_0x4fb9("0x15")][_0x4fb9("0x10d")] = function() {
        var feyenoord = this[_0x4fb9("0xef")];
        var type = this["dataBlockSize"];
        if (type & 2147483648) {
          type = type & 2147483647;
        }
        if (this[_0x4fb9("0xf9")](type)) {
          return !![];
        }
        this[_0x4fb9("0x10e")] = this["buffer"][_0x4fb9("0x29")](feyenoord, feyenoord + type);
        this[_0x4fb9("0xf5")] = container[_0x4fb9("0x10f")];
      };
      WMCacheControl["prototype"]["read_DataBlockChecksum"] = function() {
        var _0xfb445c = this[_0x4fb9("0xef")];
        if (this["descriptor"][_0x4fb9("0x110")]) {
          if (this[_0x4fb9("0xf9")](s[_0x4fb9("0x10f")])) {
            return !![];
          }
          var reverseValue = window[_0x4fb9("0x6a")](this[_0x4fb9("0xe3")], this[_0x4fb9("0xef")] - 4);
          var editItemKey = window[_0x4fb9("0x110")](this[_0x4fb9("0x10e")]);
          if (editItemKey !== reverseValue) {
            this[_0x4fb9("0xef")] = _0xfb445c;
            this[_0x4fb9("0xf8")](_0x4fb9("0x111"));
            return !![];
          }
        }
        this[_0x4fb9("0xf5")] = container[_0x4fb9("0x112")];
      };
      WMCacheControl["prototype"][_0x4fb9("0x113")] = function() {
        var value;
        if (this["dataBlockSize"] & 2147483648) {
          value = this[_0x4fb9("0x10e")];
        } else {
          value = new res(this[_0x4fb9("0xf0")][_0x4fb9("0x114")]);
          var linkTarget = this[_0x4fb9("0xed")][_0x4fb9("0xd9")](this[_0x4fb9("0x10e")], value);
          if (linkTarget < 0) {
            this["emit_Error"](_0x4fb9("0x115") + -linkTarget);
            return !![];
          }
          if (linkTarget < this[_0x4fb9("0xf0")]["blockMaxSize"]) {
            value = value[_0x4fb9("0x29")](0, linkTarget);
          }
        }
        this[_0x4fb9("0x10e")] = null;
        this["push"](value);
        if (this[_0x4fb9("0xf0")][_0x4fb9("0x116")]) {
          this[_0x4fb9("0x117")] = window["streamChecksum"](value, this[_0x4fb9("0x117")]);
        }
        this[_0x4fb9("0xf5")] = container[_0x4fb9("0x109")];
      };
      WMCacheControl[_0x4fb9("0x15")][_0x4fb9("0x118")] = function() {
        if (this[_0x4fb9("0xf0")]["streamChecksum"]) {
          var size = this[_0x4fb9("0xef")];
          if (this[_0x4fb9("0xf9")](s["EOS"])) {
            return !![];
          }
          var resizeUrl = window[_0x4fb9("0x6a")](this[_0x4fb9("0xe3")], size);
          if (resizeUrl !== window[_0x4fb9("0x116")](null, this[_0x4fb9("0x117")])) {
            this["pos"] = size;
            this[_0x4fb9("0xf8")]("Invalid stream checksum: " + resizeUrl[_0x4fb9("0x32")](16)[_0x4fb9("0xfe")]());
            return !![];
          }
        }
        this[_0x4fb9("0xf5")] = container[_0x4fb9("0xf6")];
      };
      WMCacheControl[_0x4fb9("0x15")][_0x4fb9("0x119")] = function(mmCoreSplitViewBlock) {
        this["notEnoughData"] = !![];
        this[_0x4fb9("0xf7")](mmCoreSplitViewBlock);
      };
      WMCacheControl[_0x4fb9("0x15")]["_main"] = function(saveNotifs) {
        var instanceFunc = this["pos"];
        var _0x5e78bf;
        for (; !_0x5e78bf && this[_0x4fb9("0xef")] < this[_0x4fb9("0xe3")]["length"];) {
          if (this[_0x4fb9("0xf5")] === container[_0x4fb9("0xf6")]) {
            _0x5e78bf = this[_0x4fb9("0xfb")]();
          }
          if (this[_0x4fb9("0xf5")] === container["SKIP_SIZE"]) {
            _0x5e78bf = this[_0x4fb9("0x11a")]();
          }
          if (this[_0x4fb9("0xf5")] === container["DESCRIPTOR"]) {
            _0x5e78bf = this[_0x4fb9("0x11b")]();
          }
          if (this[_0x4fb9("0xf5")] === container[_0x4fb9("0x11c")]) {
            _0x5e78bf = this[_0x4fb9("0x103")]();
          }
          if (this["state"] === container[_0x4fb9("0x104")]) {
            _0x5e78bf = this[_0x4fb9("0x105")]();
          }
          if (this["state"] === container[_0x4fb9("0x106")]) {
            _0x5e78bf = this[_0x4fb9("0x11d")]();
          }
          if (this[_0x4fb9("0xf5")] === container["DATABLOCK_SIZE"]) {
            _0x5e78bf = this["read_DataBlockSize"]();
          }
          if (this[_0x4fb9("0xf5")] === container[_0x4fb9("0x11e")]) {
            _0x5e78bf = this["read_DataBlockData"]();
          }
          if (this[_0x4fb9("0xf5")] === container[_0x4fb9("0x10f")]) {
            _0x5e78bf = this[_0x4fb9("0x11f")]();
          }
          if (this["state"] === container[_0x4fb9("0x112")]) {
            _0x5e78bf = this[_0x4fb9("0x113")]();
          }
          if (this[_0x4fb9("0xf5")] === container[_0x4fb9("0x10b")]) {
            _0x5e78bf = this[_0x4fb9("0x118")]();
          }
        }
        if (this[_0x4fb9("0xef")] > instanceFunc) {
          this["buffer"] = this["buffer"]["slice"](this["pos"]);
          this[_0x4fb9("0xef")] = 0;
        }
        saveNotifs();
      };
      module["exports"] = WMCacheControl;
    })[_0x4fb9("0x0")](this, $(_0x4fb9("0xe3"))[_0x4fb9("0xe")]);
  }, {
    "./binding" : 13,
    "./static" : 19,
    "buffer" : 3,
    "stream" : 37,
    "util" : 42
  }],
  16 : [function(require, isSlidingUp, p) {
    (function(helper) {
      function embed(options, element) {
        var $node = [];
        var c = new component(element);
        c["on"](_0x4fb9("0x2e"), function(scrollWrapper) {
          $node[_0x4fb9("0xb")](scrollWrapper);
        });
        c[_0x4fb9("0xe1")](options);
        return helper[_0x4fb9("0x43")]($node);
      }
      var component = require(_0x4fb9("0x120"));
      p["LZ4_compress"] = embed;
    })[_0x4fb9("0x0")](this, require("buffer")["Buffer"]);
  }, {
    "./encoder_stream" : 17,
    "buffer" : 3
  }],
  17 : [function(view, LoadingState, canCreateDiscussions) {
    (function(Buffer) {
      function complete(data) {
        if (!(this instanceof complete)) {
          return new complete(data);
        }
        context[_0x4fb9("0x0")](this, data);
        var target = data || options;
        if (target !== options) {
          Object["keys"](options)["forEach"](function(name) {
            if (!target[_0x4fb9("0x122")](name)) {
              target[name] = options[name];
            }
          });
        }
        this["options"] = target;
        this[_0x4fb9("0xed")] = this["options"]["useJS"] ? vroot : helloComponent;
        this[_0x4fb9("0xda")] = target[_0x4fb9("0x123")] ? this[_0x4fb9("0xed")][_0x4fb9("0xdb")] : this[_0x4fb9("0xed")][_0x4fb9("0xda")];
        var _0x2b9313 = 0;
        _0x2b9313 = _0x2b9313 | v["VERSION"] << 6;
        _0x2b9313 = _0x2b9313 | (target[_0x4fb9("0x124")] & 1) << 5;
        _0x2b9313 = _0x2b9313 | (target["blockChecksum"] & 1) << 4;
        _0x2b9313 = _0x2b9313 | (target["streamSize"] & 1) << 3;
        _0x2b9313 = _0x2b9313 | (target[_0x4fb9("0x116")] & 1) << 2;
        _0x2b9313 = _0x2b9313 | target["dict"] & 1;
        var _0x33e5ca = v[_0x4fb9("0x101")][_0x4fb9("0x52")](target[_0x4fb9("0x114")]);
        if (_0x33e5ca < 0) {
          throw new Error(_0x4fb9("0x125") + target["blockMaxSize"]);
        }
        this[_0x4fb9("0xf0")] = {
          "flg" : _0x2b9313,
          "bd" : (_0x33e5ca & 7) << 4
        };
        this[_0x4fb9("0xe3")] = [];
        this["length"] = 0;
        this[_0x4fb9("0x126")] = !![];
        this[_0x4fb9("0x127")] = null;
      }
      var context = view("stream")["Transform"];
      var filter = view(_0x4fb9("0xe6"))[_0x4fb9("0x121")];
      var v = view("./static");
      var window = v["utils"];
      var helloComponent = window[_0x4fb9("0xe8")];
      var vroot = view(_0x4fb9("0xe9"));
      var s = v[_0x4fb9("0xea")];
      var values = v[_0x4fb9("0xeb")];
      var options = {
        "blockIndependence" : !![],
        "blockChecksum" : ![],
        "blockMaxSize" : 4 << 20,
        "streamSize" : ![],
        "streamChecksum" : !![],
        "dict" : ![],
        "dictId" : 0,
        "highCompression" : ![]
      };
      filter(complete, context);
      complete[_0x4fb9("0x15")][_0x4fb9("0x128")] = function() {
        var sitesowners = this[_0x4fb9("0xec")][_0x4fb9("0xf2")] ? values[_0x4fb9("0x129")] : 0;
        var siteName = this[_0x4fb9("0xec")][_0x4fb9("0x12a")] ? values[_0x4fb9("0x104")] : 0;
        return values["MAGIC"] + 1 + 1 + sitesowners + siteName + 1;
      };
      complete["prototype"][_0x4fb9("0x12b")] = function() {
        var stringBase64 = this[_0x4fb9("0x128")]();
        var b = new Buffer(stringBase64);
        this["state"] = s[_0x4fb9("0xf6")];
        b[_0x4fb9("0x7c")](v[_0x4fb9("0x12c")], 0, !![]);
        this[_0x4fb9("0xf5")] = s[_0x4fb9("0x129")];
        var ctx = b[_0x4fb9("0x29")](values[_0x4fb9("0xf6")], b["length"] - 1);
        ctx["writeUInt8"](this["descriptor"][_0x4fb9("0x12d")], 0, !![]);
        ctx["writeUInt8"](this[_0x4fb9("0xf0")]["bd"], 1, !![]);
        var y = 2;
        this[_0x4fb9("0xf5")] = s["SIZE"];
        if (this[_0x4fb9("0xec")][_0x4fb9("0xf2")]) {
          ctx[_0x4fb9("0x7c")](0, y, !![]);
          ctx[_0x4fb9("0x7c")](this[_0x4fb9("0x12e")], y + 4, !![]);
          y = y + values[_0x4fb9("0x11c")];
        }
        this["state"] = s["DICTID"];
        if (this[_0x4fb9("0xec")][_0x4fb9("0x12a")]) {
          ctx[_0x4fb9("0x7c")](this[_0x4fb9("0xf3")], y, !![]);
          y = y + values[_0x4fb9("0x104")];
        }
        this[_0x4fb9("0xf5")] = s[_0x4fb9("0x106")];
        b["writeUInt8"](window[_0x4fb9("0x107")](ctx), values[_0x4fb9("0xf6")] + y, ![]);
        return b;
      };
      complete[_0x4fb9("0x15")][_0x4fb9("0x12f")] = function(axsPath) {
        this[_0x4fb9("0xf5")] = s[_0x4fb9("0x130")];
        if (this["options"]["streamChecksum"]) {
          this["checksum"] = window[_0x4fb9("0x116")](axsPath, this["checksum"]);
        }
      };
      complete[_0x4fb9("0x15")][_0x4fb9("0x131")] = function(filters) {
        this[_0x4fb9("0xf5")] = s[_0x4fb9("0x132")];
        var suffix = this[_0x4fb9("0xec")][_0x4fb9("0x110")] ? values["DATABLOCK_CHECKSUM"] : 0;
        var _ = this[_0x4fb9("0xed")][_0x4fb9("0xde")](filters["length"]);
        var buffer = new Buffer(values[_0x4fb9("0x109")] + _ + suffix);
        var item = buffer["slice"](values["DATABLOCK_SIZE"], values[_0x4fb9("0x109")] + _);
        var result = this[_0x4fb9("0xda")](filters, item);
        this["state"] = s["DATABLOCK_SIZE"];
        if (result > 0 && result <= this["options"][_0x4fb9("0x114")]) {
          buffer[_0x4fb9("0x133")](result, 0, !![]);
          buffer = buffer[_0x4fb9("0x29")](0, values["DATABLOCK_SIZE"] + result + suffix);
        } else {
          buffer[_0x4fb9("0x7c")](2147483648 | filters["length"], 0, !![]);
          buffer = buffer[_0x4fb9("0x29")](0, values["DATABLOCK_SIZE"] + filters["length"] + suffix);
          filters[_0x4fb9("0x2b")](buffer, values[_0x4fb9("0x109")]);
        }
        this[_0x4fb9("0xf5")] = s[_0x4fb9("0x10f")];
        if (this[_0x4fb9("0xec")][_0x4fb9("0x110")]) {
          var harderTypes = buffer[_0x4fb9("0x29")](-suffix);
          harderTypes["writeInt32LE"](window[_0x4fb9("0x110")](item), 0, !![]);
        }
        this["update_Checksum"](filters);
        this["size"] += filters["length"];
        return buffer;
      };
      complete[_0x4fb9("0x15")][_0x4fb9("0x134")] = function(PL$60, canCreateDiscussions, saveNotifs) {
        if (PL$60) {
          this[_0x4fb9("0xe3")]["push"](PL$60);
          this["length"] += PL$60["length"];
        }
        if (this[_0x4fb9("0x126")]) {
          this[_0x4fb9("0xb")](this[_0x4fb9("0x12b")]());
          this["first"] = ![];
        }
        var size = this[_0x4fb9("0xec")]["blockMaxSize"];
        if (this["length"] < size) {
          return saveNotifs();
        }
        var array = Buffer[_0x4fb9("0x43")](this[_0x4fb9("0xe3")], this["length"]);
        var i = 0;
        var n = array["length"];
        for (; n >= size; n = n - size, i = i + size) {
          this[_0x4fb9("0xb")](this[_0x4fb9("0x131")](array[_0x4fb9("0x29")](i, i + size)));
        }
        if (n > 0) {
          this[_0x4fb9("0xe3")] = [array[_0x4fb9("0x29")](i)];
          this["length"] = this[_0x4fb9("0xe3")][0]["length"];
        } else {
          this["buffer"] = [];
          this["length"] = 0;
        }
        saveNotifs();
      };
      complete[_0x4fb9("0x15")]["_flush"] = function(saveNotifs) {
        if (this[_0x4fb9("0x126")]) {
          this[_0x4fb9("0xb")](this[_0x4fb9("0x12b")]());
          this[_0x4fb9("0x126")] = ![];
        }
        if (this["length"] > 0) {
          var button2 = Buffer[_0x4fb9("0x43")](this[_0x4fb9("0xe3")], this["length"]);
          this["buffer"] = [];
          this["length"] = 0;
          var button2Component = this[_0x4fb9("0x131")](button2);
          this[_0x4fb9("0xb")](button2Component);
        }
        if (this[_0x4fb9("0xec")]["streamChecksum"]) {
          this[_0x4fb9("0xf5")] = s["CHECKSUM"];
          var concatBuf = new Buffer(values[_0x4fb9("0x10b")] + values[_0x4fb9("0x135")]);
          concatBuf[_0x4fb9("0x7c")](window[_0x4fb9("0x116")](null, this["checksum"]), values[_0x4fb9("0x10b")], !![]);
        } else {
          concatBuf = new Buffer(values[_0x4fb9("0x10b")]);
        }
        this[_0x4fb9("0xf5")] = s[_0x4fb9("0x10b")];
        concatBuf["writeInt32LE"](v["EOS"], 0, !![]);
        this[_0x4fb9("0xb")](concatBuf);
        saveNotifs();
      };
      LoadingState[_0x4fb9("0x1")] = complete;
    })[_0x4fb9("0x0")](this, view(_0x4fb9("0xe3"))[_0x4fb9("0xe")]);
  }, {
    "./binding" : 13,
    "./static" : 19,
    "buffer" : 3,
    "stream" : 37,
    "util" : 42
  }],
  18 : [function(make, module, canCreateDiscussions) {
    module[_0x4fb9("0x1")] = make(_0x4fb9("0x136"));
    module["exports"][_0x4fb9("0x137")] = _0x4fb9("0x138");
    module[_0x4fb9("0x1")][_0x4fb9("0x139")] = make(_0x4fb9("0x13a"));
    module[_0x4fb9("0x1")][_0x4fb9("0x13b")] = make("./decoder")["LZ4_uncompress"];
    module[_0x4fb9("0x1")][_0x4fb9("0x13c")] = make(_0x4fb9("0x120"));
    module[_0x4fb9("0x1")][_0x4fb9("0x13d")] = make(_0x4fb9("0x13e"))["LZ4_compress"];
    var _0x575979 = module[_0x4fb9("0x1")][_0x4fb9("0xe7")][_0x4fb9("0xe8")];
    module[_0x4fb9("0x1")][_0x4fb9("0x13f")] = _0x575979[_0x4fb9("0xd9")];
    module[_0x4fb9("0x1")][_0x4fb9("0x140")] = _0x575979[_0x4fb9("0xde")];
    module[_0x4fb9("0x1")]["encodeBlock"] = _0x575979[_0x4fb9("0xda")];
    module["exports"][_0x4fb9("0x141")] = _0x575979[_0x4fb9("0xdb")];
  }, {
    "./decoder" : 14,
    "./decoder_stream" : 15,
    "./encoder" : 16,
    "./encoder_stream" : 17,
    "./static" : 19
  }],
  19 : [function(saveNotifs, canCreateDiscussions, loaders) {
    (function(canCreateDiscussions) {
      loaders[_0x4fb9("0x12c")] = 407708164;
      loaders[_0x4fb9("0x142")] = new canCreateDiscussions(4);
      loaders[_0x4fb9("0x142")]["writeUInt32LE"](loaders["MAGICNUMBER"], 0, ![]);
      loaders[_0x4fb9("0x10b")] = 0;
      loaders[_0x4fb9("0x143")] = new canCreateDiscussions(4);
      loaders[_0x4fb9("0x143")]["writeUInt32LE"](loaders["EOS"], 0, ![]);
      loaders[_0x4fb9("0x144")] = 1;
      loaders[_0x4fb9("0x145")] = 407710288;
      loaders["blockMaxSizes"] = [null, null, null, null, 64 << 10, 256 << 10, 1 << 20, 4 << 20];
      loaders["extension"] = _0x4fb9("0x146");
      loaders[_0x4fb9("0xea")] = {
        "MAGIC" : 0,
        "DESCRIPTOR" : 1,
        "SIZE" : 2,
        "DICTID" : 3,
        "DESCRIPTOR_CHECKSUM" : 4,
        "DATABLOCK_SIZE" : 5,
        "DATABLOCK_DATA" : 6,
        "DATABLOCK_CHECKSUM" : 7,
        "DATABLOCK_UNCOMPRESS" : 8,
        "DATABLOCK_COMPRESS" : 9,
        "CHECKSUM" : 10,
        "CHECKSUM_UPDATE" : 11,
        "EOS" : 90,
        "SKIP_SIZE" : 101,
        "SKIP_DATA" : 102
      };
      loaders["SIZES"] = {
        "MAGIC" : 4,
        "DESCRIPTOR" : 2,
        "SIZE" : 8,
        "DICTID" : 4,
        "DESCRIPTOR_CHECKSUM" : 1,
        "DATABLOCK_SIZE" : 4,
        "DATABLOCK_CHECKSUM" : 4,
        "CHECKSUM" : 4,
        "EOS" : 4,
        "SKIP_SIZE" : 4
      };
      loaders["utils"] = saveNotifs("./utils");
    })[_0x4fb9("0x0")](this, saveNotifs(_0x4fb9("0xe3"))[_0x4fb9("0xe")]);
  }, {
    "./utils" : 20,
    "buffer" : 3
  }],
  20 : [function(conflictFunc, canCreateDiscussions, result) {
    var replaceShorthand = conflictFunc(_0x4fb9("0x147"));
    var SIMPLE_SELECTOR_SEP = 0;
    result[_0x4fb9("0x107")] = function(selector) {
      return replaceShorthand(selector, SIMPLE_SELECTOR_SEP)[_0x4fb9("0xa0")]() >> 8 & 255;
    };
    result[_0x4fb9("0x110")] = function(selector) {
      return replaceShorthand(selector, SIMPLE_SELECTOR_SEP)[_0x4fb9("0xa0")]();
    };
    result["streamChecksum"] = function(data, selector) {
      if (data === null) {
        return selector[_0x4fb9("0x148")]()[_0x4fb9("0xa0")]();
      }
      if (selector === null) {
        selector = replaceShorthand(SIMPLE_SELECTOR_SEP);
      }
      return selector["update"](data);
    };
    result[_0x4fb9("0x6a")] = function(input_8_bit_int_buffer, index) {
      return input_8_bit_int_buffer[index] | input_8_bit_int_buffer[index + 1] << 8 | input_8_bit_int_buffer[index + 2] << 16 | input_8_bit_int_buffer[index + 3] << 24;
    };
    result["bindings"] = conflictFunc(_0x4fb9("0xe9"));
  }, {
    "./binding" : 13,
    "xxhashjs" : 46
  }],
  21 : [function(saveNotifs, res, canCreateDiscussions) {
    (function(p) {
      function setup(input, obj, key, valuePairs) {
        if (typeof input !== _0x4fb9("0x2")) {
          throw new TypeError(_0x4fb9("0x14b"));
        }
        var end = arguments["length"];
        var obj;
        var i;
        switch(end) {
          case 0:
          case 1:
            return p[_0x4fb9("0x14a")](input);
          case 2:
            return p[_0x4fb9("0x14a")](function createSubItems() {
              input[_0x4fb9("0x0")](null, obj);
            });
          case 3:
            return p["nextTick"](function getAccessTypeFromHookName() {
              input["call"](null, obj, key);
            });
          case 4:
            return p[_0x4fb9("0x14a")](function createSubItems() {
              input[_0x4fb9("0x0")](null, obj, key, valuePairs);
            });
          default:
            obj = new Array(end - 1);
            i = 0;
            for (; i < obj["length"];) {
              obj[i++] = arguments[i];
            }
            return p[_0x4fb9("0x14a")](function createSubItems() {
              input[_0x4fb9("0x4a")](null, obj);
            });
        }
      }
      if (!p[_0x4fb9("0x137")] || p[_0x4fb9("0x137")][_0x4fb9("0x52")](_0x4fb9("0x149")) === 0 || p[_0x4fb9("0x137")][_0x4fb9("0x52")]("v1.") === 0 && p["version"][_0x4fb9("0x52")]("v1.8.") !== 0) {
        res[_0x4fb9("0x1")] = setup;
      } else {
        res["exports"] = p[_0x4fb9("0x14a")];
      }
    })[_0x4fb9("0x0")](this, saveNotifs(_0x4fb9("0x14c")));
  }, {
    "_process" : 22
  }],
  22 : [function(isSlidingUp, canCreateDiscussions, dontForceConstraints) {
    function defaultSetTimout() {
      throw new Error("setTimeout has not been defined");
    }
    function defaultClearTimeout() {
      throw new Error(_0x4fb9("0x14d"));
    }
    function runTimeout(fun) {
      if (cachedSetTimeout === setTimeout) {
        return setTimeout(fun, 0);
      }
      if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
      }
      try {
        return cachedSetTimeout(fun, 0);
      } catch (_0x3563e3) {
        try {
          return cachedSetTimeout[_0x4fb9("0x0")](null, fun, 0);
        } catch (_0x1efdb4) {
          return cachedSetTimeout[_0x4fb9("0x0")](this, fun, 0);
        }
      }
    }
    function runClearTimeout(marker) {
      if (cachedClearTimeout === clearTimeout) {
        return clearTimeout(marker);
      }
      if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
      }
      try {
        return cachedClearTimeout(marker);
      } catch (_0x5c5bc1) {
        try {
          return cachedClearTimeout[_0x4fb9("0x0")](null, marker);
        } catch (_0x6c95cb) {
          return cachedClearTimeout[_0x4fb9("0x0")](this, marker);
        }
      }
    }
    function cleanUpNextTick() {
      if (!service_descriptions || !onsuccess) {
        return;
      }
      service_descriptions = ![];
      if (onsuccess["length"]) {
        params = onsuccess["concat"](params);
      } else {
        jsonGraphEnvelopeIndex = -1;
      }
      if (params["length"]) {
        drainQueue();
      }
    }
    function drainQueue() {
      if (service_descriptions) {
        return;
      }
      var timeout = runTimeout(cleanUpNextTick);
      service_descriptions = !![];
      var preventDefault = params["length"];
      for (; preventDefault;) {
        onsuccess = params;
        params = [];
        for (; ++jsonGraphEnvelopeIndex < preventDefault;) {
          if (onsuccess) {
            onsuccess[jsonGraphEnvelopeIndex][_0x4fb9("0x14e")]();
          }
        }
        jsonGraphEnvelopeIndex = -1;
        preventDefault = params["length"];
      }
      onsuccess = null;
      service_descriptions = ![];
      runClearTimeout(timeout);
    }
    function Test(testName, module) {
      this[_0x4fb9("0x14f")] = testName;
      this[_0x4fb9("0x150")] = module;
    }
    function value() {
    }
    var p = canCreateDiscussions[_0x4fb9("0x1")] = {};
    var cachedSetTimeout;
    var cachedClearTimeout;
    (function() {
      try {
        if (typeof setTimeout === _0x4fb9("0x2")) {
          cachedSetTimeout = setTimeout;
        } else {
          cachedSetTimeout = defaultSetTimout;
        }
      } catch (_0x33c54e) {
        cachedSetTimeout = defaultSetTimout;
      }
      try {
        if (typeof clearTimeout === _0x4fb9("0x2")) {
          cachedClearTimeout = clearTimeout;
        } else {
          cachedClearTimeout = defaultClearTimeout;
        }
      } catch (_0x346562) {
        cachedClearTimeout = defaultClearTimeout;
      }
    })();
    var params = [];
    var service_descriptions = ![];
    var onsuccess;
    var jsonGraphEnvelopeIndex = -1;
    p["nextTick"] = function(dupeNode) {
      var properties = new Array(arguments["length"] - 1);
      if (arguments["length"] > 1) {
        var i = 1;
        for (; i < arguments["length"]; i++) {
          properties[i - 1] = arguments[i];
        }
      }
      params[_0x4fb9("0xb")](new Test(dupeNode, properties));
      if (params["length"] === 1 && !service_descriptions) {
        runTimeout(drainQueue);
      }
    };
    Test["prototype"]["run"] = function() {
      this[_0x4fb9("0x14f")][_0x4fb9("0x4a")](null, this[_0x4fb9("0x150")]);
    };
    p[_0x4fb9("0x151")] = _0x4fb9("0x152");
    p["browser"] = !![];
    p[_0x4fb9("0x153")] = {};
    p[_0x4fb9("0x154")] = [];
    p[_0x4fb9("0x137")] = "";
    p[_0x4fb9("0x155")] = {};
    p["on"] = value;
    p[_0x4fb9("0xc2")] = value;
    p[_0x4fb9("0xcb")] = value;
    p[_0x4fb9("0x156")] = value;
    p["removeListener"] = value;
    p[_0x4fb9("0xce")] = value;
    p["emit"] = value;
    p["prependListener"] = value;
    p[_0x4fb9("0x157")] = value;
    p[_0x4fb9("0xcf")] = function(canCreateDiscussions) {
      return [];
    };
    p["binding"] = function(canCreateDiscussions) {
      throw new Error(_0x4fb9("0x158"));
    };
    p[_0x4fb9("0x159")] = function() {
      return "/";
    };
    p[_0x4fb9("0x15a")] = function(canCreateDiscussions) {
      throw new Error(_0x4fb9("0x15b"));
    };
    p[_0x4fb9("0x15c")] = function() {
      return 0;
    };
  }, {}],
  23 : [function(require, tasks, isSlidingUp) {
    tasks[_0x4fb9("0x1")] = require(_0x4fb9("0x15d"));
  }, {
    "./lib/_stream_duplex.js" : 24
  }],
  24 : [function(require, global, canCreateDiscussions) {
    function WMCacheControl(allow) {
      if (!(this instanceof WMCacheControl)) {
        return new WMCacheControl(allow);
      }
      format[_0x4fb9("0x0")](this, allow);
      obj[_0x4fb9("0x0")](this, allow);
      if (allow && allow["readable"] === ![]) {
        this["readable"] = ![];
      }
      if (allow && allow[_0x4fb9("0x161")] === ![]) {
        this[_0x4fb9("0x161")] = ![];
      }
      this[_0x4fb9("0x162")] = !![];
      if (allow && allow[_0x4fb9("0x162")] === ![]) {
        this[_0x4fb9("0x162")] = ![];
      }
      this[_0x4fb9("0xcb")](_0x4fb9("0xe1"), checkKey);
    }
    function checkKey() {
      if (this["allowHalfOpen"] || this["_writableState"][_0x4fb9("0x163")]) {
        return;
      }
      EffectChain(_handleIconClick, this);
    }
    function _handleIconClick(tab) {
      tab[_0x4fb9("0xe1")]();
    }
    function constructor(position, extend) {
      var key = 0;
      var val = position["length"];
      for (; key < val; key++) {
        extend(position[key], key);
      }
    }
    var EffectChain = require(_0x4fb9("0x15e"));
    var removeParentAggs = Object["keys"] || function(targets) {
      var res = [];
      var el;
      for (el in targets) {
        res["push"](el);
      }
      return res;
    };
    global[_0x4fb9("0x1")] = WMCacheControl;
    var lang = require(_0x4fb9("0x15f"));
    lang[_0x4fb9("0x121")] = require("inherits");
    var format = require(_0x4fb9("0x160"));
    var obj = require("./_stream_writable");
    lang[_0x4fb9("0x121")](WMCacheControl, format);
    var PL$13 = removeParentAggs(obj[_0x4fb9("0x15")]);
    var PL$17 = 0;
    for (; PL$17 < PL$13["length"]; PL$17++) {
      var methodName = PL$13[PL$17];
      if (!WMCacheControl["prototype"][methodName]) {
        WMCacheControl[_0x4fb9("0x15")][methodName] = obj["prototype"][methodName];
      }
    }
    Object[_0x4fb9("0x1b")](WMCacheControl[_0x4fb9("0x15")], _0x4fb9("0x164"), {
      "get" : function() {
        if (this[_0x4fb9("0x165")] === undefined || this["_writableState"] === undefined) {
          return ![];
        }
        return this[_0x4fb9("0x165")]["destroyed"] && this[_0x4fb9("0x166")][_0x4fb9("0x164")];
      },
      "set" : function(mymuted) {
        if (this["_readableState"] === undefined || this[_0x4fb9("0x166")] === undefined) {
          return;
        }
        this[_0x4fb9("0x165")][_0x4fb9("0x164")] = mymuted;
        this[_0x4fb9("0x166")][_0x4fb9("0x164")] = mymuted;
      }
    });
    WMCacheControl[_0x4fb9("0x15")][_0x4fb9("0x167")] = function(renderer, mmCoreSplitViewBlock) {
      this[_0x4fb9("0xb")](null);
      this["end"]();
      EffectChain(mmCoreSplitViewBlock, renderer);
    };
  }, {
    "./_stream_readable" : 26,
    "./_stream_writable" : 28,
    "core-util-is" : 4,
    "inherits" : 10,
    "process-nextick-args" : 21
  }],
  25 : [function($, beacons, isSlidingUp) {
    function data(size) {
      if (!(this instanceof data)) {
        return new data(size);
      }
      opts[_0x4fb9("0x0")](this, size);
    }
    beacons[_0x4fb9("0x1")] = data;
    var opts = $(_0x4fb9("0x168"));
    var tools = $(_0x4fb9("0x15f"));
    tools["inherits"] = $(_0x4fb9("0x121"));
    tools[_0x4fb9("0x121")](data, opts);
    data[_0x4fb9("0x15")][_0x4fb9("0x134")] = function(step, canCreateDiscussions, commentFunction) {
      commentFunction(null, step);
    };
  }, {
    "./_stream_transform" : 27,
    "core-util-is" : 4,
    "inherits" : 10
  }],
  26 : [function(require, canCreateDiscussions, isSlidingUp) {
    (function(second, isSlidingUp) {
      function runStack(data) {
        return options["from"](data);
      }
      function changeAlphaFilter(value) {
        return options[_0x4fb9("0x37")](value) || value instanceof BigNumber;
      }
      function addListener(el, type, fn) {
        if (typeof el[_0x4fb9("0x173")] === _0x4fb9("0x2")) {
          return el[_0x4fb9("0x173")](type, fn);
        } else {
          if (!el[_0x4fb9("0xbb")] || !el[_0x4fb9("0xbb")][type]) {
            el["on"](type, fn);
          } else {
            if (isArray(el["_events"][type])) {
              el[_0x4fb9("0xbb")][type]["unshift"](fn);
            } else {
              el[_0x4fb9("0xbb")][type] = [fn, el["_events"][type]];
            }
          }
        }
      }
      function ReadableState(options, stream) {
        connectionFn = connectionFn || require(_0x4fb9("0x174"));
        options = options || {};
        this[_0x4fb9("0x175")] = !!options[_0x4fb9("0x175")];
        if (stream instanceof connectionFn) {
          this[_0x4fb9("0x175")] = this[_0x4fb9("0x175")] || !!options["readableObjectMode"];
        }
        var latinCharacter = options[_0x4fb9("0x176")];
        var character = this[_0x4fb9("0x175")] ? 16 : 16 * 1024;
        this[_0x4fb9("0x176")] = latinCharacter || latinCharacter === 0 ? latinCharacter : character;
        this[_0x4fb9("0x176")] = Math["floor"](this[_0x4fb9("0x176")]);
        this[_0x4fb9("0xe3")] = new EffectChain;
        this["length"] = 0;
        this["pipes"] = null;
        this["pipesCount"] = 0;
        this[_0x4fb9("0x177")] = null;
        this[_0x4fb9("0x163")] = ![];
        this[_0x4fb9("0x178")] = ![];
        this[_0x4fb9("0x179")] = ![];
        this[_0x4fb9("0x17a")] = !![];
        this[_0x4fb9("0x17b")] = ![];
        this[_0x4fb9("0x17c")] = ![];
        this[_0x4fb9("0x17d")] = ![];
        this[_0x4fb9("0x17e")] = ![];
        this["destroyed"] = ![];
        this["defaultEncoding"] = options[_0x4fb9("0x17f")] || _0x4fb9("0x25");
        this["awaitDrain"] = 0;
        this[_0x4fb9("0x180")] = ![];
        this[_0x4fb9("0x181")] = null;
        this[_0x4fb9("0x182")] = null;
        if (options["encoding"]) {
          if (!Logger) {
            Logger = require("string_decoder/")[_0x4fb9("0x183")];
          }
          this[_0x4fb9("0x181")] = new Logger(options["encoding"]);
          this[_0x4fb9("0x182")] = options["encoding"];
        }
      }
      function Readable(options) {
        connectionFn = connectionFn || require("./_stream_duplex");
        if (!(this instanceof Readable)) {
          return new Readable(options);
        }
        this["_readableState"] = new ReadableState(options, this);
        this[_0x4fb9("0x184")] = !![];
        if (options) {
          if (typeof options[_0x4fb9("0x6b")] === _0x4fb9("0x2")) {
            this[_0x4fb9("0x185")] = options["read"];
          }
          if (typeof options[_0x4fb9("0x186")] === _0x4fb9("0x2")) {
            this["_destroy"] = options[_0x4fb9("0x186")];
          }
        }
        format[_0x4fb9("0x0")](this);
      }
      function validate(params, value, name, force, location) {
        var data = params[_0x4fb9("0x165")];
        if (value === null) {
          data["reading"] = ![];
          install(params, data);
        } else {
          var res;
          if (!location) {
            res = set(data, value);
          }
          if (res) {
            params[_0x4fb9("0xbf")](_0x4fb9("0x12"), res);
          } else {
            if (data[_0x4fb9("0x175")] || value && value["length"] > 0) {
              if (typeof value !== "string" && !data[_0x4fb9("0x175")] && Object[_0x4fb9("0x187")](value) !== options["prototype"]) {
                value = runStack(value);
              }
              if (force) {
                if (data[_0x4fb9("0x178")]) {
                  params[_0x4fb9("0xbf")](_0x4fb9("0x12"), new Error(_0x4fb9("0x188")));
                } else {
                  parseBody(params, data, value, !![]);
                }
              } else {
                if (data[_0x4fb9("0x163")]) {
                  params[_0x4fb9("0xbf")]("error", new Error(_0x4fb9("0x189")));
                } else {
                  data[_0x4fb9("0x179")] = ![];
                  if (data["decoder"] && !name) {
                    value = data[_0x4fb9("0x181")]["write"](value);
                    if (data[_0x4fb9("0x175")] || value["length"] !== 0) {
                      parseBody(params, data, value, ![]);
                    } else {
                      create(params, data);
                    }
                  } else {
                    parseBody(params, data, value, ![]);
                  }
                }
              }
            } else {
              if (!force) {
                data[_0x4fb9("0x179")] = ![];
              }
            }
          }
        }
        return next(data);
      }
      function parseBody(options, data, value, length) {
        if (data["flowing"] && data["length"] === 0 && !data[_0x4fb9("0x17a")]) {
          options[_0x4fb9("0xbf")]("data", value);
          options["read"](0);
        } else {
          data["length"] += data[_0x4fb9("0x175")] ? 1 : value["length"];
          if (length) {
            data[_0x4fb9("0xe3")][_0x4fb9("0x18a")](value);
          } else {
            data[_0x4fb9("0xe3")]["push"](value);
          }
          if (data[_0x4fb9("0x17b")]) {
            find(options);
          }
        }
        create(options, data);
      }
      function set(dirname, filter) {
        var e;
        if (!changeAlphaFilter(filter) && typeof filter !== _0x4fb9("0x22") && filter !== undefined && !dirname[_0x4fb9("0x175")]) {
          e = new TypeError(_0x4fb9("0x18b"));
        }
        return e;
      }
      function next(height) {
        return !height[_0x4fb9("0x163")] && (height[_0x4fb9("0x17b")] || height["length"] < height["highWaterMark"] || height["length"] === 0);
      }
      function defaultValue(value) {
        if (value >= valueBlue) {
          value = valueBlue;
        } else {
          value--;
          value = value | value >>> 1;
          value = value | value >>> 2;
          value = value | value >>> 4;
          value = value | value >>> 8;
          value = value | value >>> 16;
          value++;
        }
        return value;
      }
      function merge(value, array) {
        if (value <= 0 || array["length"] === 0 && array["ended"]) {
          return 0;
        }
        if (array[_0x4fb9("0x175")]) {
          return 1;
        }
        if (value !== value) {
          if (array["flowing"] && array["length"]) {
            return array[_0x4fb9("0xe3")]["head"][_0x4fb9("0x2e")]["length"];
          } else {
            return array["length"];
          }
        }
        if (value > array[_0x4fb9("0x176")]) {
          array[_0x4fb9("0x176")] = defaultValue(value);
        }
        if (value <= array["length"]) {
          return value;
        }
        if (!array[_0x4fb9("0x163")]) {
          array[_0x4fb9("0x17b")] = !![];
          return 0;
        }
        return array["length"];
      }
      function install(obj, context) {
        if (context["ended"]) {
          return;
        }
        if (context[_0x4fb9("0x181")]) {
          var script = context["decoder"][_0x4fb9("0xe1")]();
          if (script && script["length"]) {
            context[_0x4fb9("0xe3")][_0x4fb9("0xb")](script);
            context["length"] += context[_0x4fb9("0x175")] ? 1 : script["length"];
          }
        }
        context[_0x4fb9("0x163")] = !![];
        find(obj);
      }
      function find(o) {
        var m = o[_0x4fb9("0x165")];
        m[_0x4fb9("0x17b")] = ![];
        if (!m["emittedReadable"]) {
          debug("emitReadable", m[_0x4fb9("0x177")]);
          m[_0x4fb9("0x17c")] = !![];
          if (m["sync"]) {
            log(out, o);
          } else {
            out(o);
          }
        }
      }
      function out(type) {
        debug(_0x4fb9("0x190"));
        type[_0x4fb9("0xbf")](_0x4fb9("0x184"));
        callback(type);
      }
      function create(obj, type) {
        if (!type[_0x4fb9("0x180")]) {
          type["readingMore"] = !![];
          log(load, obj, type);
        }
      }
      function load(url, section) {
        var sectionKey = section["length"];
        for (; !section["reading"] && !section[_0x4fb9("0x177")] && !section[_0x4fb9("0x163")] && section["length"] < section["highWaterMark"];) {
          debug(_0x4fb9("0x191"));
          url[_0x4fb9("0x6b")](0);
          if (sectionKey === section["length"]) {
            break;
          } else {
            sectionKey = section["length"];
          }
        }
        section[_0x4fb9("0x180")] = ![];
      }
      function filter(o) {
        return function() {
          var m = o[_0x4fb9("0x165")];
          debug(_0x4fb9("0x1a4"), m[_0x4fb9("0x1a1")]);
          if (m[_0x4fb9("0x1a1")]) {
            m[_0x4fb9("0x1a1")]--;
          }
          if (m[_0x4fb9("0x1a1")] === 0 && get(o, _0x4fb9("0x2e"))) {
            m[_0x4fb9("0x177")] = !![];
            callback(o);
          }
        };
      }
      function triggeredTraps(boardManager) {
        debug("readable nexttick read 0");
        boardManager[_0x4fb9("0x6b")](0);
      }
      function googleImageSize(image, width) {
        if (!width[_0x4fb9("0x17e")]) {
          width[_0x4fb9("0x17e")] = !![];
          log(thunk, image, width);
        }
      }
      function thunk(fn, sel) {
        if (!sel[_0x4fb9("0x179")]) {
          debug(_0x4fb9("0x1a6"));
          fn[_0x4fb9("0x6b")](0);
        }
        sel[_0x4fb9("0x17e")] = ![];
        sel[_0x4fb9("0x1a1")] = 0;
        fn[_0x4fb9("0xbf")](_0x4fb9("0x1a5"));
        callback(fn);
        if (sel["flowing"] && !sel["reading"]) {
          fn[_0x4fb9("0x6b")](0);
        }
      }
      function callback(data) {
        var methods = data["_readableState"];
        debug(_0x4fb9("0x1a8"), methods[_0x4fb9("0x177")]);
        for (; methods[_0x4fb9("0x177")] && data[_0x4fb9("0x6b")]() !== null;) {
        }
      }
      function process(value, arr) {
        if (arr["length"] === 0) {
          return null;
        }
        var result;
        if (arr["objectMode"]) {
          result = arr[_0x4fb9("0xe3")][_0x4fb9("0x1ad")]();
        } else {
          if (!value || value >= arr["length"]) {
            if (arr[_0x4fb9("0x181")]) {
              result = arr[_0x4fb9("0xe3")]["join"]("");
            } else {
              if (arr[_0x4fb9("0xe3")]["length"] === 1) {
                result = arr[_0x4fb9("0xe3")][_0x4fb9("0x1ae")]["data"];
              } else {
                result = arr[_0x4fb9("0xe3")]["concat"](arr["length"]);
              }
            }
            arr[_0x4fb9("0xe3")]["clear"]();
          } else {
            result = fn(value, arr[_0x4fb9("0xe3")], arr[_0x4fb9("0x181")]);
          }
        }
        return result;
      }
      function fn(result, data, err) {
        var doc;
        if (result < data[_0x4fb9("0x1ae")]["data"]["length"]) {
          doc = data[_0x4fb9("0x1ae")]["data"][_0x4fb9("0x29")](0, result);
          data["head"][_0x4fb9("0x2e")] = data[_0x4fb9("0x1ae")][_0x4fb9("0x2e")][_0x4fb9("0x29")](result);
        } else {
          if (result === data["head"][_0x4fb9("0x2e")]["length"]) {
            doc = data["shift"]();
          } else {
            doc = err ? done(result, data) : success(result, data);
          }
        }
        return doc;
      }
      function done(size, options) {
        var value = options[_0x4fb9("0x1ae")];
        var _0x5e0e75 = 1;
        var result = value["data"];
        size = size - result["length"];
        for (; value = value[_0x4fb9("0x1af")];) {
          var data = value[_0x4fb9("0x2e")];
          var index = size > data["length"] ? data["length"] : size;
          if (index === data["length"]) {
            result = result + data;
          } else {
            result = result + data[_0x4fb9("0x29")](0, size);
          }
          size = size - index;
          if (size === 0) {
            if (index === data["length"]) {
              ++_0x5e0e75;
              if (value[_0x4fb9("0x1af")]) {
                options[_0x4fb9("0x1ae")] = value[_0x4fb9("0x1af")];
              } else {
                options[_0x4fb9("0x1ae")] = options["tail"] = null;
              }
            } else {
              options[_0x4fb9("0x1ae")] = value;
              value[_0x4fb9("0x2e")] = data[_0x4fb9("0x29")](index);
            }
            break;
          }
          ++_0x5e0e75;
        }
        options["length"] -= _0x5e0e75;
        return result;
      }
      function success(index, buffer) {
        var promise = options["allocUnsafe"](index);
        var data = buffer["head"];
        var _0x5428a9 = 1;
        data[_0x4fb9("0x2e")][_0x4fb9("0x2b")](promise);
        index = index - data[_0x4fb9("0x2e")]["length"];
        for (; data = data[_0x4fb9("0x1af")];) {
          var result = data["data"];
          var i = index > result["length"] ? result["length"] : index;
          result[_0x4fb9("0x2b")](promise, promise["length"] - index, 0, i);
          index = index - i;
          if (index === 0) {
            if (i === result["length"]) {
              ++_0x5428a9;
              if (data[_0x4fb9("0x1af")]) {
                buffer[_0x4fb9("0x1ae")] = data[_0x4fb9("0x1af")];
              } else {
                buffer["head"] = buffer["tail"] = null;
              }
            } else {
              buffer[_0x4fb9("0x1ae")] = data;
              data[_0x4fb9("0x2e")] = result[_0x4fb9("0x29")](i);
            }
            break;
          }
          ++_0x5428a9;
        }
        buffer["length"] -= _0x5428a9;
        return promise;
      }
      function usageOne(command) {
        var url = command["_readableState"];
        if (url["length"] > 0) {
          throw new Error(_0x4fb9("0x1b0"));
        }
        if (!url[_0x4fb9("0x178")]) {
          url[_0x4fb9("0x163")] = !![];
          log(constructor, url, command);
        }
      }
      function constructor(request_tweet, PL$5) {
        if (!request_tweet[_0x4fb9("0x178")] && request_tweet["length"] === 0) {
          request_tweet[_0x4fb9("0x178")] = !![];
          PL$5[_0x4fb9("0x184")] = ![];
          PL$5["emit"]("end");
        }
      }
      function decryptDownload(data, callback) {
        var ticket = 0;
        var passid = data["length"];
        for (; ticket < passid; ticket++) {
          callback(data[ticket], ticket);
        }
      }
      function resolve(result, data) {
        var value = 0;
        var length = result["length"];
        for (; value < length; value++) {
          if (result[value] === data) {
            return value;
          }
        }
        return -1;
      }
      var log = require(_0x4fb9("0x15e"));
      canCreateDiscussions[_0x4fb9("0x1")] = Readable;
      var isArray = require("isarray");
      var connectionFn;
      Readable[_0x4fb9("0x169")] = ReadableState;
      var _0x31e997 = require(_0x4fb9("0x16a"))["EventEmitter"];
      var get = function(type, step) {
        return type[_0x4fb9("0xcf")](step)["length"];
      };
      var format = require(_0x4fb9("0x16b"));
      var options = require(_0x4fb9("0x16c"))["Buffer"];
      var BigNumber = isSlidingUp[_0x4fb9("0x16d")] || function() {
      };
      var lang = require(_0x4fb9("0x15f"));
      lang["inherits"] = require(_0x4fb9("0x121"));
      var TagHourlyStat = require(_0x4fb9("0xe6"));
      var debug = void 0;
      if (TagHourlyStat && TagHourlyStat[_0x4fb9("0x16e")]) {
        debug = TagHourlyStat["debuglog"](_0x4fb9("0xe4"));
      } else {
        debug = function() {
        };
      }
      var EffectChain = require(_0x4fb9("0x16f"));
      var CheckDailyStat = require(_0x4fb9("0x170"));
      var Logger;
      lang[_0x4fb9("0x121")](Readable, format);
      var events = [_0x4fb9("0x12"), _0x4fb9("0x171"), "destroy", _0x4fb9("0x172"), "resume"];
      Object["defineProperty"](Readable[_0x4fb9("0x15")], _0x4fb9("0x164"), {
        "get" : function() {
          if (this[_0x4fb9("0x165")] === undefined) {
            return ![];
          }
          return this[_0x4fb9("0x165")][_0x4fb9("0x164")];
        },
        "set" : function(mymuted) {
          if (!this[_0x4fb9("0x165")]) {
            return;
          }
          this[_0x4fb9("0x165")][_0x4fb9("0x164")] = mymuted;
        }
      });
      Readable[_0x4fb9("0x15")][_0x4fb9("0x186")] = CheckDailyStat[_0x4fb9("0x186")];
      Readable[_0x4fb9("0x15")]["_undestroy"] = CheckDailyStat["undestroy"];
      Readable[_0x4fb9("0x15")][_0x4fb9("0x167")] = function(notifications, saveNotifs) {
        this[_0x4fb9("0xb")](null);
        saveNotifs(notifications);
      };
      Readable[_0x4fb9("0x15")][_0x4fb9("0xb")] = function(message, offset) {
        var offsets = this["_readableState"];
        var propFullName;
        if (!offsets[_0x4fb9("0x175")]) {
          if (typeof message === "string") {
            offset = offset || offsets["defaultEncoding"];
            if (offset !== offsets[_0x4fb9("0x182")]) {
              message = options[_0x4fb9("0x1f")](message, offset);
              offset = "";
            }
            propFullName = !![];
          }
        } else {
          propFullName = !![];
        }
        return validate(this, message, offset, ![], propFullName);
      };
      Readable["prototype"]["unshift"] = function(name) {
        return validate(this, name, null, !![], ![]);
      };
      Readable[_0x4fb9("0x15")]["isPaused"] = function() {
        return this["_readableState"][_0x4fb9("0x177")] === ![];
      };
      Readable["prototype"]["setEncoding"] = function(name) {
        if (!Logger) {
          Logger = require(_0x4fb9("0x18c"))[_0x4fb9("0x183")];
        }
        this[_0x4fb9("0x165")]["decoder"] = new Logger(name);
        this[_0x4fb9("0x165")][_0x4fb9("0x182")] = name;
        return this;
      };
      var valueBlue = 8388608;
      Readable[_0x4fb9("0x15")]["read"] = function(key) {
        debug("read", key);
        key = parseInt(key, 10);
        var data = this[_0x4fb9("0x165")];
        var item = key;
        if (key !== 0) {
          data[_0x4fb9("0x17c")] = ![];
        }
        if (key === 0 && data["needReadable"] && (data["length"] >= data[_0x4fb9("0x176")] || data["ended"])) {
          debug(_0x4fb9("0x18d"), data["length"], data[_0x4fb9("0x163")]);
          if (data["length"] === 0 && data[_0x4fb9("0x163")]) {
            usageOne(this);
          } else {
            find(this);
          }
          return null;
        }
        key = merge(key, data);
        if (key === 0 && data[_0x4fb9("0x163")]) {
          if (data["length"] === 0) {
            usageOne(this);
          }
          return null;
        }
        var static_ip = data[_0x4fb9("0x17b")];
        debug("need readable", static_ip);
        if (data["length"] === 0 || data["length"] - key < data[_0x4fb9("0x176")]) {
          static_ip = !![];
          debug(_0x4fb9("0x18e"), static_ip);
        }
        if (data[_0x4fb9("0x163")] || data[_0x4fb9("0x179")]) {
          static_ip = ![];
          debug("reading or ended", static_ip);
        } else {
          if (static_ip) {
            debug(_0x4fb9("0x18f"));
            data[_0x4fb9("0x179")] = !![];
            data[_0x4fb9("0x17a")] = !![];
            if (data["length"] === 0) {
              data[_0x4fb9("0x17b")] = !![];
            }
            this[_0x4fb9("0x185")](data[_0x4fb9("0x176")]);
            data[_0x4fb9("0x17a")] = ![];
            if (!data[_0x4fb9("0x179")]) {
              key = merge(item, data);
            }
          }
        }
        var event;
        if (key > 0) {
          event = process(key, data);
        } else {
          event = null;
        }
        if (event === null) {
          data[_0x4fb9("0x17b")] = !![];
          key = 0;
        } else {
          data["length"] -= key;
        }
        if (data["length"] === 0) {
          if (!data[_0x4fb9("0x163")]) {
            data[_0x4fb9("0x17b")] = !![];
          }
          if (item !== key && data["ended"]) {
            usageOne(this);
          }
        }
        if (event !== null) {
          this[_0x4fb9("0xbf")](_0x4fb9("0x2e"), event);
        }
        return event;
      };
      Readable[_0x4fb9("0x15")][_0x4fb9("0x185")] = function(canCreateDiscussions) {
        this[_0x4fb9("0xbf")](_0x4fb9("0x12"), new Error("_read() is not implemented"));
      };
      Readable[_0x4fb9("0x15")][_0x4fb9("0x192")] = function(value, changesIdentifyUser) {
        function listener(type, metadata) {
          debug("onunpipe");
          if (type === o) {
            if (metadata && metadata[_0x4fb9("0x199")] === ![]) {
              metadata[_0x4fb9("0x199")] = !![];
              next();
            }
          }
        }
        function lower() {
          debug(_0x4fb9("0x19a"));
          value[_0x4fb9("0xe1")]();
        }
        function next() {
          debug(_0x4fb9("0x19c"));
          value["removeListener"](_0x4fb9("0x171"), _listener);
          value[_0x4fb9("0xcc")](_0x4fb9("0x19d"), Sync);
          value["removeListener"]("drain", fn);
          value[_0x4fb9("0xcc")]("error", start);
          value[_0x4fb9("0xcc")](_0x4fb9("0x198"), listener);
          o[_0x4fb9("0xcc")]("end", lower);
          o[_0x4fb9("0xcc")](_0x4fb9("0xe1"), call);
          o[_0x4fb9("0xcc")](_0x4fb9("0x2e"), type);
          _0x39e513 = !![];
          if (data["awaitDrain"] && (!value["_writableState"] || value[_0x4fb9("0x166")][_0x4fb9("0x19e")])) {
            fn();
          }
        }
        function type(data) {
          debug(_0x4fb9("0x19f"));
          isLoginStateWithSession = ![];
          var mm_login = value[_0x4fb9("0x28")](data);
          if (![] === mm_login && !isLoginStateWithSession) {
            if ((data[_0x4fb9("0x193")] === 1 && data["pipes"] === value || data["pipesCount"] > 1 && resolve(data[_0x4fb9("0x194")], value) !== -1) && !_0x39e513) {
              debug(_0x4fb9("0x1a0"), o[_0x4fb9("0x165")][_0x4fb9("0x1a1")]);
              o[_0x4fb9("0x165")][_0x4fb9("0x1a1")]++;
              isLoginStateWithSession = !![];
            }
            o[_0x4fb9("0x172")]();
          }
        }
        function start(activity) {
          debug(_0x4fb9("0x1a2"), activity);
          call();
          value[_0x4fb9("0xcc")]("error", start);
          if (get(value, _0x4fb9("0x12")) === 0) {
            value["emit"](_0x4fb9("0x12"), activity);
          }
        }
        function _listener() {
          value[_0x4fb9("0xcc")](_0x4fb9("0x19d"), Sync);
          call();
        }
        function Sync() {
          debug(_0x4fb9("0x1a3"));
          value["removeListener"](_0x4fb9("0x171"), _listener);
          call();
        }
        function call() {
          debug(_0x4fb9("0x198"));
          o["unpipe"](value);
        }
        var o = this;
        var data = this["_readableState"];
        switch(data[_0x4fb9("0x193")]) {
          case 0:
            data[_0x4fb9("0x194")] = value;
            break;
          case 1:
            data[_0x4fb9("0x194")] = [data[_0x4fb9("0x194")], value];
            break;
          default:
            data[_0x4fb9("0x194")][_0x4fb9("0xb")](value);
            break;
        }
        data[_0x4fb9("0x193")] += 1;
        debug(_0x4fb9("0x195"), data[_0x4fb9("0x193")], changesIdentifyUser);
        var args = (!changesIdentifyUser || changesIdentifyUser[_0x4fb9("0xe1")] !== ![]) && value !== second[_0x4fb9("0x196")] && value !== second[_0x4fb9("0x197")];
        var method = args ? lower : call;
        if (data[_0x4fb9("0x178")]) {
          log(method);
        } else {
          o["once"](_0x4fb9("0xe1"), method);
        }
        value["on"](_0x4fb9("0x198"), listener);
        var fn = filter(o);
        value["on"](_0x4fb9("0x19b"), fn);
        var _0x39e513 = ![];
        var isLoginStateWithSession = ![];
        o["on"](_0x4fb9("0x2e"), type);
        addListener(value, _0x4fb9("0x12"), start);
        value[_0x4fb9("0xcb")](_0x4fb9("0x171"), _listener);
        value[_0x4fb9("0xcb")](_0x4fb9("0x19d"), Sync);
        value[_0x4fb9("0xbf")]("pipe", o);
        if (!data["flowing"]) {
          debug("pipe resume");
          o["resume"]();
        }
        return value;
      };
      Readable[_0x4fb9("0x15")][_0x4fb9("0x198")] = function(value) {
        var data = this[_0x4fb9("0x165")];
        var unpipeInfo = {
          "hasUnpiped" : ![]
        };
        if (data[_0x4fb9("0x193")] === 0) {
          return this;
        }
        if (data["pipesCount"] === 1) {
          if (value && value !== data["pipes"]) {
            return this;
          }
          if (!value) {
            value = data[_0x4fb9("0x194")];
          }
          data["pipes"] = null;
          data["pipesCount"] = 0;
          data[_0x4fb9("0x177")] = ![];
          if (value) {
            value[_0x4fb9("0xbf")]("unpipe", this, unpipeInfo);
          }
          return this;
        }
        if (!value) {
          var active_tags = data[_0x4fb9("0x194")];
          var i = data[_0x4fb9("0x193")];
          data["pipes"] = null;
          data[_0x4fb9("0x193")] = 0;
          data["flowing"] = ![];
          var ii = 0;
          for (; ii < i; ii++) {
            active_tags[ii][_0x4fb9("0xbf")](_0x4fb9("0x198"), this, unpipeInfo);
          }
          return this;
        }
        var streams = resolve(data["pipes"], value);
        if (streams === -1) {
          return this;
        }
        data[_0x4fb9("0x194")]["splice"](streams, 1);
        data[_0x4fb9("0x193")] -= 1;
        if (data[_0x4fb9("0x193")] === 1) {
          data[_0x4fb9("0x194")] = data["pipes"][0];
        }
        value[_0x4fb9("0xbf")](_0x4fb9("0x198"), this, unpipeInfo);
        return this;
      };
      Readable[_0x4fb9("0x15")]["on"] = function(dataSrc, key) {
        var invalidateFromCache = format[_0x4fb9("0x15")]["on"]["call"](this, dataSrc, key);
        if (dataSrc === "data") {
          if (this["_readableState"]["flowing"] !== ![]) {
            this[_0x4fb9("0x1a5")]();
          }
        } else {
          if (dataSrc === _0x4fb9("0x184")) {
            var _0x1fe884 = this[_0x4fb9("0x165")];
            if (!_0x1fe884["endEmitted"] && !_0x1fe884[_0x4fb9("0x17d")]) {
              _0x1fe884[_0x4fb9("0x17d")] = _0x1fe884[_0x4fb9("0x17b")] = !![];
              _0x1fe884[_0x4fb9("0x17c")] = ![];
              if (!_0x1fe884[_0x4fb9("0x179")]) {
                log(triggeredTraps, this);
              } else {
                if (_0x1fe884["length"]) {
                  find(this);
                }
              }
            }
          }
        }
        return invalidateFromCache;
      };
      Readable[_0x4fb9("0x15")]["addListener"] = Readable[_0x4fb9("0x15")]["on"];
      Readable[_0x4fb9("0x15")]["resume"] = function() {
        var size = this[_0x4fb9("0x165")];
        if (!size["flowing"]) {
          debug(_0x4fb9("0x1a5"));
          size[_0x4fb9("0x177")] = !![];
          googleImageSize(this, size);
        }
        return this;
      };
      Readable[_0x4fb9("0x15")][_0x4fb9("0x172")] = function() {
        debug(_0x4fb9("0x1a7"), this[_0x4fb9("0x165")][_0x4fb9("0x177")]);
        if (![] !== this["_readableState"][_0x4fb9("0x177")]) {
          debug("pause");
          this[_0x4fb9("0x165")][_0x4fb9("0x177")] = ![];
          this[_0x4fb9("0xbf")](_0x4fb9("0x172"));
        }
        return this;
      };
      Readable["prototype"]["wrap"] = function(o) {
        var net = this[_0x4fb9("0x165")];
        var _0x153e8b = ![];
        var PL$4 = this;
        o["on"](_0x4fb9("0xe1"), function() {
          debug("wrapped end");
          if (net["decoder"] && !net[_0x4fb9("0x163")]) {
            var PL$12 = net[_0x4fb9("0x181")][_0x4fb9("0xe1")]();
            if (PL$12 && PL$12["length"]) {
              PL$4["push"](PL$12);
            }
          }
          PL$4["push"](null);
        });
        o["on"](_0x4fb9("0x2e"), function(tile) {
          debug(_0x4fb9("0x1a9"));
          if (net[_0x4fb9("0x181")]) {
            tile = net[_0x4fb9("0x181")][_0x4fb9("0x28")](tile);
          }
          if (net[_0x4fb9("0x175")] && (tile === null || tile === undefined)) {
            return;
          } else {
            if (!net[_0x4fb9("0x175")] && (!tile || !tile["length"])) {
              return;
            }
          }
          var objectsThere = PL$4[_0x4fb9("0xb")](tile);
          if (!objectsThere) {
            _0x153e8b = !![];
            o[_0x4fb9("0x172")]();
          }
        });
        var prop;
        for (prop in o) {
          if (this[prop] === undefined && typeof o[prop] === _0x4fb9("0x2")) {
            this[prop] = function(name) {
              return function() {
                return o[name][_0x4fb9("0x4a")](o, arguments);
              };
            }(prop);
          }
        }
        var type = 0;
        for (; type < events["length"]; type++) {
          o["on"](events[type], PL$4[_0x4fb9("0xbf")][_0x4fb9("0x1aa")](PL$4, events[type]));
        }
        PL$4[_0x4fb9("0x185")] = function(supporterL) {
          debug(_0x4fb9("0x1ab"), supporterL);
          if (_0x153e8b) {
            _0x153e8b = ![];
            o[_0x4fb9("0x1a5")]();
          }
        };
        return PL$4;
      };
      Readable[_0x4fb9("0x1ac")] = process;
    })[_0x4fb9("0x0")](this, require(_0x4fb9("0x14c")), typeof global !== _0x4fb9("0x7") ? global : typeof self !== _0x4fb9("0x7") ? self : typeof window !== "undefined" ? window : {});
  }, {
    "./_stream_duplex" : 24,
    "./internal/streams/BufferList" : 29,
    "./internal/streams/destroy" : 30,
    "./internal/streams/stream" : 31,
    "_process" : 22,
    "core-util-is" : 4,
    "events" : 8,
    "inherits" : 10,
    "isarray" : 12,
    "process-nextick-args" : 21,
    "safe-buffer" : 36,
    "string_decoder/" : 38,
    "util" : 2
  }],
  27 : [function(render, a, canCreateDiscussions) {
    function joHTML(data) {
      this[_0x4fb9("0x1b1")] = function(manifest, e) {
        return run(data, manifest, e);
      };
      this[_0x4fb9("0x1b2")] = ![];
      this[_0x4fb9("0x1b3")] = ![];
      this[_0x4fb9("0x1b4")] = null;
      this["writechunk"] = null;
      this[_0x4fb9("0x1b5")] = null;
    }
    function run(args, view, message) {
      var commands = args["_transformState"];
      commands[_0x4fb9("0x1b3")] = ![];
      var action = commands[_0x4fb9("0x1b4")];
      if (!action) {
        return args[_0x4fb9("0xbf")]("error", new Error(_0x4fb9("0x1b6")));
      }
      commands[_0x4fb9("0x1b7")] = null;
      commands[_0x4fb9("0x1b4")] = null;
      if (message !== null && message !== undefined) {
        args[_0x4fb9("0xb")](message);
      }
      action(view);
      var options = args["_readableState"];
      options[_0x4fb9("0x179")] = ![];
      if (options["needReadable"] || options["length"] < options["highWaterMark"]) {
        args[_0x4fb9("0x185")](options[_0x4fb9("0x176")]);
      }
    }
    function init(selector) {
      if (!(this instanceof init)) {
        return new init(selector);
      }
      boooom[_0x4fb9("0x0")](this, selector);
      this[_0x4fb9("0x1b8")] = new joHTML(this);
      var self = this;
      this["_readableState"]["needReadable"] = !![];
      this["_readableState"]["sync"] = ![];
      if (selector) {
        if (typeof selector[_0x4fb9("0x1b9")] === "function") {
          this[_0x4fb9("0x134")] = selector[_0x4fb9("0x1b9")];
        }
        if (typeof selector[_0x4fb9("0x1ba")] === _0x4fb9("0x2")) {
          this[_0x4fb9("0x119")] = selector[_0x4fb9("0x1ba")];
        }
      }
      this[_0x4fb9("0xcb")](_0x4fb9("0x1bb"), function() {
        if (typeof this[_0x4fb9("0x119")] === _0x4fb9("0x2")) {
          this["_flush"](function(value, num) {
            process(self, value, num);
          });
        } else {
          process(self);
        }
      });
    }
    function process(self, context, data) {
      if (context) {
        return self["emit"](_0x4fb9("0x12"), context);
      }
      if (data !== null && data !== undefined) {
        self[_0x4fb9("0xb")](data);
      }
      var attrs = self[_0x4fb9("0x166")];
      var ownVal = self[_0x4fb9("0x1b8")];
      if (attrs["length"]) {
        throw new Error("Calling transform done when ws.length != 0");
      }
      if (ownVal[_0x4fb9("0x1b3")]) {
        throw new Error(_0x4fb9("0x1be"));
      }
      return self[_0x4fb9("0xb")](null);
    }
    a[_0x4fb9("0x1")] = init;
    var boooom = render(_0x4fb9("0x174"));
    var result = render(_0x4fb9("0x15f"));
    result[_0x4fb9("0x121")] = render(_0x4fb9("0x121"));
    result[_0x4fb9("0x121")](init, boooom);
    init["prototype"][_0x4fb9("0xb")] = function(mmCoreSplitViewBlock, mmaPushNotificationsComponent) {
      this[_0x4fb9("0x1b8")][_0x4fb9("0x1b2")] = ![];
      return boooom[_0x4fb9("0x15")][_0x4fb9("0xb")][_0x4fb9("0x0")](this, mmCoreSplitViewBlock, mmaPushNotificationsComponent);
    };
    init["prototype"]["_transform"] = function(canCreateDiscussions, isSlidingUp, dontForceConstraints) {
      throw new Error(_0x4fb9("0x1bc"));
    };
    init[_0x4fb9("0x15")][_0x4fb9("0x1bd")] = function(i, name, callback) {
      var farmRoleChefSettings = this[_0x4fb9("0x1b8")];
      farmRoleChefSettings[_0x4fb9("0x1b4")] = callback;
      farmRoleChefSettings[_0x4fb9("0x1b7")] = i;
      farmRoleChefSettings[_0x4fb9("0x1b5")] = name;
      if (!farmRoleChefSettings[_0x4fb9("0x1b3")]) {
        var value = this[_0x4fb9("0x165")];
        if (farmRoleChefSettings[_0x4fb9("0x1b2")] || value["needReadable"] || value["length"] < value["highWaterMark"]) {
          this[_0x4fb9("0x185")](value[_0x4fb9("0x176")]);
        }
      }
    };
    init[_0x4fb9("0x15")][_0x4fb9("0x185")] = function(canCreateDiscussions) {
      var _0x4ed30e = this[_0x4fb9("0x1b8")];
      if (_0x4ed30e["writechunk"] !== null && _0x4ed30e[_0x4fb9("0x1b4")] && !_0x4ed30e[_0x4fb9("0x1b3")]) {
        _0x4ed30e["transforming"] = !![];
        this[_0x4fb9("0x134")](_0x4ed30e[_0x4fb9("0x1b7")], _0x4ed30e["writeencoding"], _0x4ed30e["afterTransform"]);
      } else {
        _0x4ed30e[_0x4fb9("0x1b2")] = !![];
      }
    };
    init["prototype"][_0x4fb9("0x167")] = function(mmCoreSplitViewBlock, saveNotifs) {
      var PL$12 = this;
      boooom[_0x4fb9("0x15")]["_destroy"][_0x4fb9("0x0")](this, mmCoreSplitViewBlock, function(notifications) {
        saveNotifs(notifications);
        PL$12[_0x4fb9("0xbf")]("close");
      });
    };
  }, {
    "./_stream_duplex" : 24,
    "core-util-is" : 4,
    "inherits" : 10
  }],
  28 : [function(require, beacons, canCreateDiscussions) {
    (function(canCreateDiscussions, global) {
      function handleSlide(index, isSlidingUp, $cont) {
        this[_0x4fb9("0x1bf")] = index;
        this[_0x4fb9("0x182")] = isSlidingUp;
        this[_0x4fb9("0x1c0")] = $cont;
        this[_0x4fb9("0x1af")] = null;
      }
      function Collection(data) {
        var start = this;
        this[_0x4fb9("0x1af")] = null;
        this[_0x4fb9("0x1c1")] = null;
        this[_0x4fb9("0x19d")] = function() {
          build(start, data);
        };
      }
      function create_youtube_embeds(data) {
        return stack[_0x4fb9("0x1f")](data);
      }
      function checkAuthUserReplied(data) {
        return stack[_0x4fb9("0x37")](data) || data instanceof Stream;
      }
      function SIZE_160x120() {
      }
      function initialize(url, args) {
        connectionFn = connectionFn || require(_0x4fb9("0x174"));
        url = url || {};
        this["objectMode"] = !!url[_0x4fb9("0x175")];
        if (args instanceof connectionFn) {
          this[_0x4fb9("0x175")] = this["objectMode"] || !!url[_0x4fb9("0x1c4")];
        }
        var latinCharacter = url[_0x4fb9("0x176")];
        var character = this[_0x4fb9("0x175")] ? 16 : 16 * 1024;
        this["highWaterMark"] = latinCharacter || latinCharacter === 0 ? latinCharacter : character;
        this[_0x4fb9("0x176")] = Math[_0x4fb9("0xd2")](this[_0x4fb9("0x176")]);
        this[_0x4fb9("0x1c5")] = ![];
        this[_0x4fb9("0x19e")] = ![];
        this["ending"] = ![];
        this[_0x4fb9("0x163")] = ![];
        this[_0x4fb9("0x1c6")] = ![];
        this["destroyed"] = ![];
        var _0xe1bbc6 = url[_0x4fb9("0x1c7")] === ![];
        this[_0x4fb9("0x1c7")] = !_0xe1bbc6;
        this["defaultEncoding"] = url[_0x4fb9("0x17f")] || _0x4fb9("0x25");
        this["length"] = 0;
        this["writing"] = ![];
        this["corked"] = 0;
        this[_0x4fb9("0x17a")] = !![];
        this[_0x4fb9("0x1c8")] = ![];
        this[_0x4fb9("0x1c9")] = function(data) {
          load(args, data);
        };
        this[_0x4fb9("0x1b4")] = null;
        this["writelen"] = 0;
        this[_0x4fb9("0x1ca")] = null;
        this[_0x4fb9("0x1cb")] = null;
        this["pendingcb"] = 0;
        this[_0x4fb9("0x1cc")] = ![];
        this[_0x4fb9("0x1cd")] = ![];
        this[_0x4fb9("0x1ce")] = 0;
        this["corkedRequestsFree"] = new Collection(this);
      }
      function data(size) {
        connectionFn = connectionFn || require(_0x4fb9("0x174"));
        if (!actions[_0x4fb9("0x0")](data, this) && !(this instanceof connectionFn)) {
          return new data(size);
        }
        this[_0x4fb9("0x166")] = new initialize(size, this);
        this["writable"] = !![];
        if (size) {
          if (typeof size[_0x4fb9("0x28")] === _0x4fb9("0x2")) {
            this[_0x4fb9("0x1bd")] = size[_0x4fb9("0x28")];
          }
          if (typeof size[_0x4fb9("0x1d4")] === _0x4fb9("0x2")) {
            this[_0x4fb9("0x1d5")] = size["writev"];
          }
          if (typeof size[_0x4fb9("0x186")] === "function") {
            this[_0x4fb9("0x167")] = size["destroy"];
          }
          if (typeof size[_0x4fb9("0x1d6")] === _0x4fb9("0x2")) {
            this["_final"] = size[_0x4fb9("0x1d6")];
          }
        }
        CheckDailyStat[_0x4fb9("0x0")](this);
      }
      function checkHorizontalScroll(context, width) {
        var event = new Error("write after end");
        context[_0x4fb9("0xbf")](_0x4fb9("0x12"), event);
        equal(width, event);
      }
      function callback(target, details, callback, link) {
        var coolie = !![];
        var x = ![];
        if (callback === null) {
          x = new TypeError(_0x4fb9("0x1d7"));
        } else {
          if (typeof callback !== _0x4fb9("0x22") && callback !== undefined && !details[_0x4fb9("0x175")]) {
            x = new TypeError(_0x4fb9("0x18b"));
          }
        }
        if (x) {
          target["emit"](_0x4fb9("0x12"), x);
          equal(link, x);
          coolie = ![];
        }
        return coolie;
      }
      function create(type, data, res) {
        if (!type[_0x4fb9("0x175")] && type["decodeStrings"] !== ![] && typeof data === "string") {
          data = stack[_0x4fb9("0x1f")](data, res);
        }
        return data;
      }
      function get(elem, commands, options, data, value, error) {
        if (!options) {
          var result = create(commands, data, value);
          if (data !== result) {
            options = !![];
            value = _0x4fb9("0xe3");
            data = result;
          }
        }
        var feature = commands["objectMode"] ? 1 : data["length"];
        commands["length"] += feature;
        var _cXHRConfigs = commands["length"] < commands[_0x4fb9("0x176")];
        if (!_cXHRConfigs) {
          commands[_0x4fb9("0x19e")] = !![];
        }
        if (commands["writing"] || commands[_0x4fb9("0x1da")]) {
          var commandList = commands[_0x4fb9("0x1cb")];
          commands["lastBufferedRequest"] = {
            "chunk" : data,
            "encoding" : value,
            "isBuf" : options,
            "callback" : error,
            "next" : null
          };
          if (commandList) {
            commandList[_0x4fb9("0x1af")] = commands[_0x4fb9("0x1cb")];
          } else {
            commands[_0x4fb9("0x1ca")] = commands[_0x4fb9("0x1cb")];
          }
          commands[_0x4fb9("0x1ce")] += 1;
        } else {
          log(elem, commands, ![], feature, data, value, error);
        }
        return _cXHRConfigs;
      }
      function log(instance, args, data, type, value, name, level) {
        args[_0x4fb9("0x1dd")] = type;
        args["writecb"] = level;
        args[_0x4fb9("0x1dc")] = !![];
        args[_0x4fb9("0x17a")] = !![];
        if (data) {
          instance[_0x4fb9("0x1d5")](value, args[_0x4fb9("0x1c9")]);
        } else {
          instance["_write"](value, name, args[_0x4fb9("0x1c9")]);
        }
        args[_0x4fb9("0x17a")] = ![];
      }
      function add(input, description, callback, message, func) {
        --description[_0x4fb9("0x1d8")];
        if (callback) {
          equal(func, message);
          equal(getValue, input, description);
          input[_0x4fb9("0x166")][_0x4fb9("0x1cd")] = !![];
          input["emit"]("error", message);
        } else {
          func(message);
          input[_0x4fb9("0x166")][_0x4fb9("0x1cd")] = !![];
          input[_0x4fb9("0xbf")]("error", message);
          getValue(input, description);
        }
      }
      function complete(errorValue) {
        errorValue["writing"] = ![];
        errorValue[_0x4fb9("0x1b4")] = null;
        errorValue["length"] -= errorValue[_0x4fb9("0x1dd")];
        errorValue[_0x4fb9("0x1dd")] = 0;
      }
      function load(args, data) {
        var value = args[_0x4fb9("0x166")];
        var property = value[_0x4fb9("0x17a")];
        var object = value[_0x4fb9("0x1b4")];
        complete(value);
        if (data) {
          add(args, value, property, data, object);
        } else {
          var result = end(value);
          if (!result && !value[_0x4fb9("0x1da")] && !value[_0x4fb9("0x1c8")] && value[_0x4fb9("0x1ca")]) {
            filter(args, value);
          }
          if (property) {
            setTimeout(next, args, value, result, object);
          } else {
            next(args, value, result, object);
          }
        }
      }
      function next(c, name, _, done) {
        if (!_) {
          equals(c, name);
        }
        name["pendingcb"]--;
        done();
        getValue(c, name);
      }
      function equals(value, region) {
        if (region["length"] === 0 && region[_0x4fb9("0x19e")]) {
          region[_0x4fb9("0x19e")] = ![];
          value[_0x4fb9("0xbf")](_0x4fb9("0x19b"));
        }
      }
      function filter(a, obj) {
        obj[_0x4fb9("0x1c8")] = !![];
        var data = obj[_0x4fb9("0x1ca")];
        if (a["_writev"] && data && data["next"]) {
          var key = obj[_0x4fb9("0x1ce")];
          var keys = new Array(key);
          var temp = obj[_0x4fb9("0x1de")];
          temp[_0x4fb9("0x1c1")] = data;
          var name = 0;
          var shift = !![];
          for (; data;) {
            keys[name] = data;
            if (!data[_0x4fb9("0x1df")]) {
              shift = ![];
            }
            data = data["next"];
            name = name + 1;
          }
          keys[_0x4fb9("0x1e0")] = shift;
          log(a, obj, !![], obj["length"], keys, "", temp[_0x4fb9("0x19d")]);
          obj[_0x4fb9("0x1d8")]++;
          obj["lastBufferedRequest"] = null;
          if (temp[_0x4fb9("0x1af")]) {
            obj["corkedRequestsFree"] = temp["next"];
            temp["next"] = null;
          } else {
            obj["corkedRequestsFree"] = new Collection(obj);
          }
        } else {
          for (; data;) {
            var bucket = data[_0x4fb9("0x1bf")];
            var last = data[_0x4fb9("0x182")];
            var msg = data["callback"];
            var feature = obj["objectMode"] ? 1 : bucket["length"];
            log(a, obj, ![], feature, bucket, last, msg);
            data = data[_0x4fb9("0x1af")];
            if (obj[_0x4fb9("0x1dc")]) {
              break;
            }
          }
          if (data === null) {
            obj[_0x4fb9("0x1cb")] = null;
          }
        }
        obj["bufferedRequestCount"] = 0;
        obj[_0x4fb9("0x1ca")] = data;
        obj[_0x4fb9("0x1c8")] = ![];
      }
      function end(_input) {
        return _input["ending"] && _input["length"] === 0 && _input[_0x4fb9("0x1ca")] === null && !_input[_0x4fb9("0x1c6")] && !_input[_0x4fb9("0x1dc")];
      }
      function rewriteComputed(obj, key) {
        obj["_final"](function(callback) {
          key[_0x4fb9("0x1d8")]--;
          if (callback) {
            obj[_0x4fb9("0xbf")](_0x4fb9("0x12"), callback);
          }
          key[_0x4fb9("0x1cc")] = !![];
          obj[_0x4fb9("0xbf")](_0x4fb9("0x1bb"));
          getValue(obj, key);
        });
      }
      function cb(value, html) {
        if (!html["prefinished"] && !html[_0x4fb9("0x1c5")]) {
          if (typeof value[_0x4fb9("0x1e3")] === "function") {
            html[_0x4fb9("0x1d8")]++;
            html[_0x4fb9("0x1c5")] = !![];
            equal(rewriteComputed, value, html);
          } else {
            html[_0x4fb9("0x1cc")] = !![];
            value[_0x4fb9("0xbf")](_0x4fb9("0x1bb"));
          }
        }
      }
      function getValue(event, value) {
        var result = end(value);
        if (result) {
          cb(event, value);
          if (value["pendingcb"] === 0) {
            value[_0x4fb9("0x1c6")] = !![];
            event[_0x4fb9("0xbf")](_0x4fb9("0x19d"));
          }
        }
        return result;
      }
      function initializeValues(options, childCompute, parentCompute) {
        childCompute[_0x4fb9("0x1e2")] = !![];
        getValue(options, childCompute);
        if (parentCompute) {
          if (childCompute[_0x4fb9("0x1c6")]) {
            equal(parentCompute);
          } else {
            options[_0x4fb9("0xcb")](_0x4fb9("0x19d"), parentCompute);
          }
        }
        childCompute["ended"] = !![];
        options[_0x4fb9("0x161")] = ![];
      }
      function build(nodes, data, outFile) {
        var current = nodes[_0x4fb9("0x1c1")];
        nodes[_0x4fb9("0x1c1")] = null;
        for (; current;) {
          var minify = current[_0x4fb9("0x1c0")];
          data[_0x4fb9("0x1d8")]--;
          minify(outFile);
          current = current[_0x4fb9("0x1af")];
        }
        if (data[_0x4fb9("0x1de")]) {
          data["corkedRequestsFree"][_0x4fb9("0x1af")] = nodes;
        } else {
          data[_0x4fb9("0x1de")] = nodes;
        }
      }
      var equal = require(_0x4fb9("0x15e"));
      beacons[_0x4fb9("0x1")] = data;
      var setTimeout = !canCreateDiscussions[_0x4fb9("0x152")] && ["v0.10", _0x4fb9("0x1c2")][_0x4fb9("0x52")](canCreateDiscussions[_0x4fb9("0x137")][_0x4fb9("0x29")](0, 5)) > -1 ? setImmediate : equal;
      var connectionFn;
      data["WritableState"] = initialize;
      var minify = require(_0x4fb9("0x15f"));
      minify[_0x4fb9("0x121")] = require("inherits");
      var _0x53321e = {
        "deprecate" : require(_0x4fb9("0x1c3"))
      };
      var CheckDailyStat = require(_0x4fb9("0x16b"));
      var stack = require(_0x4fb9("0x16c"))["Buffer"];
      var Stream = global["Uint8Array"] || function() {
      };
      var TagHourlyStat = require(_0x4fb9("0x170"));
      minify[_0x4fb9("0x121")](data, CheckDailyStat);
      initialize["prototype"][_0x4fb9("0x1cf")] = function parseBody() {
        var el = this[_0x4fb9("0x1ca")];
        var res = [];
        for (; el;) {
          res["push"](el);
          el = el["next"];
        }
        return res;
      };
      (function() {
        try {
          Object[_0x4fb9("0x1b")](initialize[_0x4fb9("0x15")], _0x4fb9("0xe3"), {
            "get" : _0x53321e["deprecate"](function() {
              return this[_0x4fb9("0x1cf")]();
            }, _0x4fb9("0x1d0") + _0x4fb9("0x1d1"), _0x4fb9("0x1d2"))
          });
        } catch (_0x40d7c0) {
        }
      })();
      var actions;
      if (typeof Symbol === _0x4fb9("0x2") && Symbol["hasInstance"] && typeof Function["prototype"][Symbol[_0x4fb9("0x1d3")]] === "function") {
        actions = Function[_0x4fb9("0x15")][Symbol[_0x4fb9("0x1d3")]];
        Object[_0x4fb9("0x1b")](data, Symbol[_0x4fb9("0x1d3")], {
          "value" : function(components) {
            if (actions[_0x4fb9("0x0")](this, components)) {
              return !![];
            }
            return components && components[_0x4fb9("0x166")] instanceof initialize;
          }
        });
      } else {
        actions = function(selector) {
          return selector instanceof this;
        };
      }
      data[_0x4fb9("0x15")][_0x4fb9("0x192")] = function() {
        this[_0x4fb9("0xbf")](_0x4fb9("0x12"), new Error("Cannot pipe, not readable"));
      };
      data["prototype"][_0x4fb9("0x28")] = function(data, text, size) {
        var result = this[_0x4fb9("0x166")];
        var template = ![];
        var options = checkAuthUserReplied(data) && !result[_0x4fb9("0x175")];
        if (options && !stack[_0x4fb9("0x37")](data)) {
          data = create_youtube_embeds(data);
        }
        if (typeof text === _0x4fb9("0x2")) {
          size = text;
          text = null;
        }
        if (options) {
          text = _0x4fb9("0xe3");
        } else {
          if (!text) {
            text = result["defaultEncoding"];
          }
        }
        if (typeof size !== _0x4fb9("0x2")) {
          size = SIZE_160x120;
        }
        if (result["ended"]) {
          checkHorizontalScroll(this, size);
        } else {
          if (options || callback(this, result, data, size)) {
            result[_0x4fb9("0x1d8")]++;
            template = get(this, result, options, data, text, size);
          }
        }
        return template;
      };
      data[_0x4fb9("0x15")][_0x4fb9("0x1d9")] = function() {
        var _0xcd1833 = this[_0x4fb9("0x166")];
        _0xcd1833[_0x4fb9("0x1da")]++;
      };
      data["prototype"][_0x4fb9("0x1db")] = function() {
        var data = this[_0x4fb9("0x166")];
        if (data[_0x4fb9("0x1da")]) {
          data[_0x4fb9("0x1da")]--;
          if (!data[_0x4fb9("0x1dc")] && !data[_0x4fb9("0x1da")] && !data["finished"] && !data["bufferProcessing"] && data[_0x4fb9("0x1ca")]) {
            filter(this, data);
          }
        }
      };
      data[_0x4fb9("0x15")]["setDefaultEncoding"] = function setDefaultEncoding(encoding) {
        if (typeof encoding === _0x4fb9("0x22")) {
          encoding = encoding[_0x4fb9("0x5b")]();
        }
        if (!([_0x4fb9("0x39"), _0x4fb9("0x25"), _0x4fb9("0x3a"), _0x4fb9("0x3b"), _0x4fb9("0x3d"), _0x4fb9("0x3e"), _0x4fb9("0x3f"), _0x4fb9("0x40"), _0x4fb9("0x41"), "utf-16le", "raw"]["indexOf"]((encoding + "")[_0x4fb9("0x5b")]()) > -1)) {
          throw new TypeError(_0x4fb9("0x45") + encoding);
        }
        this["_writableState"]["defaultEncoding"] = encoding;
        return this;
      };
      data[_0x4fb9("0x15")][_0x4fb9("0x1bd")] = function(canCreateDiscussions, isSlidingUp, stepCallback) {
        stepCallback(new Error(_0x4fb9("0x1e1")));
      };
      data[_0x4fb9("0x15")]["_writev"] = null;
      data[_0x4fb9("0x15")]["end"] = function(unprotectedData, maybeParams, parentCompute) {
        var childCompute = this[_0x4fb9("0x166")];
        if (typeof unprotectedData === _0x4fb9("0x2")) {
          parentCompute = unprotectedData;
          unprotectedData = null;
          maybeParams = null;
        } else {
          if (typeof maybeParams === "function") {
            parentCompute = maybeParams;
            maybeParams = null;
          }
        }
        if (unprotectedData !== null && unprotectedData !== undefined) {
          this[_0x4fb9("0x28")](unprotectedData, maybeParams);
        }
        if (childCompute[_0x4fb9("0x1da")]) {
          childCompute[_0x4fb9("0x1da")] = 1;
          this["uncork"]();
        }
        if (!childCompute[_0x4fb9("0x1e2")] && !childCompute[_0x4fb9("0x1c6")]) {
          initializeValues(this, childCompute, parentCompute);
        }
      };
      Object["defineProperty"](data[_0x4fb9("0x15")], _0x4fb9("0x164"), {
        "get" : function() {
          if (this[_0x4fb9("0x166")] === undefined) {
            return ![];
          }
          return this[_0x4fb9("0x166")]["destroyed"];
        },
        "set" : function(mymuted) {
          if (!this[_0x4fb9("0x166")]) {
            return;
          }
          this["_writableState"][_0x4fb9("0x164")] = mymuted;
        }
      });
      data[_0x4fb9("0x15")][_0x4fb9("0x186")] = TagHourlyStat[_0x4fb9("0x186")];
      data["prototype"][_0x4fb9("0x1e4")] = TagHourlyStat[_0x4fb9("0x1e5")];
      data[_0x4fb9("0x15")][_0x4fb9("0x167")] = function(notifications, saveNotifs) {
        this[_0x4fb9("0xe1")]();
        saveNotifs(notifications);
      };
    })[_0x4fb9("0x0")](this, require("_process"), typeof global !== _0x4fb9("0x7") ? global : typeof self !== _0x4fb9("0x7") ? self : typeof window !== _0x4fb9("0x7") ? window : {});
  }, {
    "./_stream_duplex" : 24,
    "./internal/streams/destroy" : 30,
    "./internal/streams/stream" : 31,
    "_process" : 22,
    "core-util-is" : 4,
    "inherits" : 10,
    "process-nextick-args" : 21,
    "safe-buffer" : 36,
    "util-deprecate" : 39
  }],
  29 : [function(saveNotifs, canCreateDiscussions, isSlidingUp) {
    function map(obj, fn) {
      if (!(obj instanceof fn)) {
        throw new TypeError(_0x4fb9("0x1e6"));
      }
    }
    function serialize(initConfig, id, obj) {
      initConfig["copy"](id, obj);
    }
    var Long = saveNotifs(_0x4fb9("0x16c"))[_0x4fb9("0xe")];
    canCreateDiscussions[_0x4fb9("0x1")] = function() {
      function data() {
        map(this, data);
        this[_0x4fb9("0x1ae")] = null;
        this["tail"] = null;
        this["length"] = 0;
      }
      data[_0x4fb9("0x15")][_0x4fb9("0xb")] = function getFinishFunction(success) {
        var dummy = {
          "data" : success,
          "next" : null
        };
        if (this["length"] > 0) {
          this[_0x4fb9("0x1e7")][_0x4fb9("0x1af")] = dummy;
        } else {
          this[_0x4fb9("0x1ae")] = dummy;
        }
        this[_0x4fb9("0x1e7")] = dummy;
        ++this["length"];
      };
      data[_0x4fb9("0x15")][_0x4fb9("0x18a")] = function getFinishFunction(success) {
        var item = {
          "data" : success,
          "next" : this["head"]
        };
        if (this["length"] === 0) {
          this[_0x4fb9("0x1e7")] = item;
        }
        this["head"] = item;
        ++this["length"];
      };
      data["prototype"][_0x4fb9("0x1ad")] = function shift() {
        if (this["length"] === 0) {
          return;
        }
        var r = this[_0x4fb9("0x1ae")][_0x4fb9("0x2e")];
        if (this["length"] === 1) {
          this[_0x4fb9("0x1ae")] = this[_0x4fb9("0x1e7")] = null;
        } else {
          this[_0x4fb9("0x1ae")] = this[_0x4fb9("0x1ae")]["next"];
        }
        --this["length"];
        return r;
      };
      data[_0x4fb9("0x15")][_0x4fb9("0x1e8")] = function clear() {
        this[_0x4fb9("0x1ae")] = this[_0x4fb9("0x1e7")] = null;
        this["length"] = 0;
      };
      data[_0x4fb9("0x15")][_0x4fb9("0x4d")] = function valueByIndex(i) {
        if (this["length"] === 0) {
          return "";
        }
        var object = this[_0x4fb9("0x1ae")];
        var result = "" + object["data"];
        for (; object = object["next"];) {
          result = result + (i + object[_0x4fb9("0x2e")]);
        }
        return result;
      };
      data["prototype"][_0x4fb9("0x43")] = function GetInventory(callback) {
        if (this["length"] === 0) {
          return Long[_0x4fb9("0x34")](0);
        }
        if (this["length"] === 1) {
          return this[_0x4fb9("0x1ae")]["data"];
        }
        var value = Long["allocUnsafe"](callback >>> 0);
        var list = this["head"];
        var struct = 0;
        for (; list;) {
          serialize(list[_0x4fb9("0x2e")], value, struct);
          struct = struct + list[_0x4fb9("0x2e")]["length"];
          list = list[_0x4fb9("0x1af")];
        }
        return value;
      };
      return data;
    }();
  }, {
    "safe-buffer" : 36
  }],
  30 : [function($, data, canCreateDiscussions) {
    function request(url, param) {
      var dataBase64 = this;
      var inputWin = this[_0x4fb9("0x165")] && this[_0x4fb9("0x165")][_0x4fb9("0x164")];
      var winRef = this[_0x4fb9("0x166")] && this[_0x4fb9("0x166")][_0x4fb9("0x164")];
      if (inputWin || winRef) {
        if (param) {
          param(url);
        } else {
          if (url && (!this[_0x4fb9("0x166")] || !this[_0x4fb9("0x166")][_0x4fb9("0x1cd")])) {
            trigger(discharge, this, url);
          }
        }
        return;
      }
      if (this[_0x4fb9("0x165")]) {
        this[_0x4fb9("0x165")][_0x4fb9("0x164")] = !![];
      }
      if (this[_0x4fb9("0x166")]) {
        this[_0x4fb9("0x166")]["destroyed"] = !![];
      }
      this[_0x4fb9("0x167")](url || null, function(url) {
        if (!param && url) {
          trigger(discharge, dataBase64, url);
          if (dataBase64[_0x4fb9("0x166")]) {
            dataBase64[_0x4fb9("0x166")][_0x4fb9("0x1cd")] = !![];
          }
        } else {
          if (param) {
            param(url);
          }
        }
      });
    }
    function end() {
      if (this[_0x4fb9("0x165")]) {
        this[_0x4fb9("0x165")][_0x4fb9("0x164")] = ![];
        this[_0x4fb9("0x165")][_0x4fb9("0x179")] = ![];
        this[_0x4fb9("0x165")][_0x4fb9("0x163")] = ![];
        this[_0x4fb9("0x165")]["endEmitted"] = ![];
      }
      if (this[_0x4fb9("0x166")]) {
        this[_0x4fb9("0x166")]["destroyed"] = ![];
        this[_0x4fb9("0x166")][_0x4fb9("0x163")] = ![];
        this[_0x4fb9("0x166")]["ending"] = ![];
        this[_0x4fb9("0x166")]["finished"] = ![];
        this["_writableState"][_0x4fb9("0x1cd")] = ![];
      }
    }
    function discharge(applicationName, macaroon) {
      applicationName[_0x4fb9("0xbf")](_0x4fb9("0x12"), macaroon);
    }
    var trigger = $(_0x4fb9("0x15e"));
    data[_0x4fb9("0x1")] = {
      "destroy" : request,
      "undestroy" : end
    };
  }, {
    "process-nextick-args" : 21
  }],
  31 : [function(saveNotifs, canCreateDiscussions, isSlidingUp) {
    canCreateDiscussions[_0x4fb9("0x1")] = saveNotifs(_0x4fb9("0x16a"))[_0x4fb9("0xbd")];
  }, {
    "events" : 8
  }],
  32 : [function(saveNotifs, module, canCreateDiscussions) {
    module["exports"] = saveNotifs("./readable")[_0x4fb9("0x1e9")];
  }, {
    "./readable" : 33
  }],
  33 : [function(render, result, data) {
    data = result[_0x4fb9("0x1")] = render(_0x4fb9("0x1ea"));
    data[_0x4fb9("0x1eb")] = data;
    data[_0x4fb9("0x1ec")] = data;
    data["Writable"] = render("./lib/_stream_writable.js");
    data[_0x4fb9("0x1ed")] = render(_0x4fb9("0x15d"));
    data[_0x4fb9("0xe5")] = render(_0x4fb9("0x1ee"));
    data["PassThrough"] = render(_0x4fb9("0x1ef"));
  }, {
    "./lib/_stream_duplex.js" : 24,
    "./lib/_stream_passthrough.js" : 25,
    "./lib/_stream_readable.js" : 26,
    "./lib/_stream_transform.js" : 27,
    "./lib/_stream_writable.js" : 28
  }],
  34 : [function(saveNotifs, canCreateDiscussions, isSlidingUp) {
    canCreateDiscussions[_0x4fb9("0x1")] = saveNotifs(_0x4fb9("0x1f0"))[_0x4fb9("0xe5")];
  }, {
    "./readable" : 33
  }],
  35 : [function(require, tasks, isSlidingUp) {
    tasks[_0x4fb9("0x1")] = require(_0x4fb9("0x1f1"));
  }, {
    "./lib/_stream_writable.js" : 28
  }],
  36 : [function($, module, buffer) {
    function add(obj, data) {
      var i;
      for (i in obj) {
        data[i] = obj[i];
      }
    }
    function _d(s, key, value) {
      return d(s, key, value);
    }
    var entity = $(_0x4fb9("0xe3"));
    var d = entity[_0x4fb9("0xe")];
    if (d[_0x4fb9("0x1f")] && d["alloc"] && d[_0x4fb9("0x24")] && d["allocUnsafeSlow"]) {
      module["exports"] = entity;
    } else {
      add(entity, buffer);
      buffer["Buffer"] = _d;
    }
    add(d, _d);
    _d[_0x4fb9("0x1f")] = function(D, key, oldValue) {
      if (typeof D === _0x4fb9("0x1d")) {
        throw new TypeError(_0x4fb9("0x1f2"));
      }
      return d(D, key, oldValue);
    };
    _d[_0x4fb9("0x34")] = function(D, model, relations) {
      if (typeof D !== _0x4fb9("0x1d")) {
        throw new TypeError(_0x4fb9("0x1f3"));
      }
      var _destructure2 = d(D);
      if (model !== undefined) {
        if (typeof relations === _0x4fb9("0x22")) {
          _destructure2[_0x4fb9("0x23")](model, relations);
        } else {
          _destructure2[_0x4fb9("0x23")](model);
        }
      } else {
        _destructure2[_0x4fb9("0x23")](0);
      }
      return _destructure2;
    };
    _d["allocUnsafe"] = function(y) {
      if (typeof y !== "number") {
        throw new TypeError(_0x4fb9("0x1f3"));
      }
      return d(y);
    };
    _d[_0x4fb9("0x1f4")] = function(val) {
      if (typeof val !== _0x4fb9("0x1d")) {
        throw new TypeError(_0x4fb9("0x1f3"));
      }
      return entity[_0x4fb9("0x1f5")](val);
    };
  }, {
    "buffer" : 3
  }],
  37 : [function(arrayer, beacons, canCreateDiscussions) {
    function data() {
      end[_0x4fb9("0x0")](this);
    }
    beacons[_0x4fb9("0x1")] = data;
    var end = arrayer(_0x4fb9("0x16a"))[_0x4fb9("0xbd")];
    var coveredByRange = arrayer(_0x4fb9("0x121"));
    coveredByRange(data, end);
    data[_0x4fb9("0x1ec")] = arrayer(_0x4fb9("0x1f6"));
    data[_0x4fb9("0x1f7")] = arrayer(_0x4fb9("0x1f8"));
    data["Duplex"] = arrayer(_0x4fb9("0x1f9"));
    data[_0x4fb9("0xe5")] = arrayer(_0x4fb9("0x1fa"));
    data[_0x4fb9("0x1e9")] = arrayer(_0x4fb9("0x1fb"));
    data[_0x4fb9("0x1eb")] = data;
    data["prototype"][_0x4fb9("0x192")] = function(PL$12, canCreateDiscussions) {
      function update(value) {
        if (PL$12["writable"]) {
          if (![] === PL$12["write"](value) && filter[_0x4fb9("0x172")]) {
            filter[_0x4fb9("0x172")]();
          }
        }
      }
      function B104() {
        if (filter[_0x4fb9("0x184")] && filter[_0x4fb9("0x1a5")]) {
          filter[_0x4fb9("0x1a5")]();
        }
      }
      function B103() {
        if (_0x1c27d5) {
          return;
        }
        _0x1c27d5 = !![];
        PL$12[_0x4fb9("0xe1")]();
      }
      function type() {
        if (_0x1c27d5) {
          return;
        }
        _0x1c27d5 = !![];
        if (typeof PL$12[_0x4fb9("0x186")] === "function") {
          PL$12[_0x4fb9("0x186")]();
        }
      }
      function PL$16(PL$5) {
        listener();
        if (end[_0x4fb9("0xd0")](this, _0x4fb9("0x12")) === 0) {
          throw PL$5;
        }
      }
      function listener() {
        filter["removeListener"](_0x4fb9("0x2e"), update);
        PL$12[_0x4fb9("0xcc")](_0x4fb9("0x19b"), B104);
        filter["removeListener"](_0x4fb9("0xe1"), B103);
        filter["removeListener"](_0x4fb9("0x171"), type);
        filter[_0x4fb9("0xcc")]("error", PL$16);
        PL$12[_0x4fb9("0xcc")](_0x4fb9("0x12"), PL$16);
        filter[_0x4fb9("0xcc")]("end", listener);
        filter[_0x4fb9("0xcc")]("close", listener);
        PL$12[_0x4fb9("0xcc")]("close", listener);
      }
      var filter = this;
      filter["on"](_0x4fb9("0x2e"), update);
      PL$12["on"]("drain", B104);
      if (!PL$12[_0x4fb9("0x1fc")] && (!canCreateDiscussions || canCreateDiscussions[_0x4fb9("0xe1")] !== ![])) {
        filter["on"]("end", B103);
        filter["on"](_0x4fb9("0x171"), type);
      }
      var _0x1c27d5 = ![];
      filter["on"](_0x4fb9("0x12"), PL$16);
      PL$12["on"](_0x4fb9("0x12"), PL$16);
      filter["on"](_0x4fb9("0xe1"), listener);
      filter["on"](_0x4fb9("0x171"), listener);
      PL$12["on"](_0x4fb9("0x171"), listener);
      PL$12[_0x4fb9("0xbf")](_0x4fb9("0x192"), filter);
      return PL$12;
    };
  }, {
    "events" : 8,
    "inherits" : 10,
    "readable-stream/duplex.js" : 23,
    "readable-stream/passthrough.js" : 32,
    "readable-stream/readable.js" : 33,
    "readable-stream/transform.js" : 34,
    "readable-stream/writable.js" : 35
  }],
  38 : [function(saveNotifs, canCreateDiscussions, global) {
    function toString(encoding) {
      if (!encoding) {
        return _0x4fb9("0x25");
      }
      var _0x5560e2;
      for (; !![];) {
        switch(encoding) {
          case "utf8":
          case _0x4fb9("0x3a"):
            return _0x4fb9("0x25");
          case _0x4fb9("0x3f"):
          case _0x4fb9("0x40"):
          case _0x4fb9("0x41"):
          case "utf-16le":
            return _0x4fb9("0x41");
          case _0x4fb9("0x3c"):
          case _0x4fb9("0x3d"):
            return _0x4fb9("0x3c");
          case "base64":
          case "ascii":
          case _0x4fb9("0x39"):
            return encoding;
          default:
            if (_0x5560e2) {
              return;
            }
            encoding = ("" + encoding)[_0x4fb9("0x5b")]();
            _0x5560e2 = !![];
        }
      }
    }
    function generate(name) {
      var value = toString(name);
      if (typeof value !== "string" && (command_codes[_0x4fb9("0x26")] === appropriateObjectForTerrain || !appropriateObjectForTerrain(name))) {
        throw new Error(_0x4fb9("0x45") + name);
      }
      return value || name;
    }
    function Test(value) {
      this[_0x4fb9("0x182")] = generate(value);
      var data;
      switch(this[_0x4fb9("0x182")]) {
        case _0x4fb9("0x41"):
          this[_0x4fb9("0x1fe")] = _validateCaptcha;
          this[_0x4fb9("0xe1")] = extend;
          data = 4;
          break;
        case _0x4fb9("0x25"):
          this[_0x4fb9("0x1ff")] = merge;
          data = 4;
          break;
        case _0x4fb9("0x3e"):
          this[_0x4fb9("0x1fe")] = forEach;
          this[_0x4fb9("0xe1")] = generateCardHash;
          data = 3;
          break;
        default:
          this[_0x4fb9("0x28")] = prefetchGroupsInfo;
          this[_0x4fb9("0xe1")] = clearBufferChars;
          return;
      }
      this[_0x4fb9("0x200")] = 0;
      this[_0x4fb9("0x201")] = 0;
      this["lastChar"] = command_codes[_0x4fb9("0x24")](data);
    }
    function normalize(options) {
      if (options <= 127) {
        return 0;
      } else {
        if (options >> 5 === 6) {
          return 2;
        } else {
          if (options >> 4 === 14) {
            return 3;
          } else {
            if (options >> 3 === 30) {
              return 4;
            }
          }
        }
      }
      return -1;
    }
    function join(res, path, i) {
      var j = path["length"] - 1;
      if (j < i) {
        return 0;
      }
      var x = normalize(path[j]);
      if (x >= 0) {
        if (x > 0) {
          res[_0x4fb9("0x200")] = x - 1;
        }
        return x;
      }
      if (--j < i) {
        return 0;
      }
      x = normalize(path[j]);
      if (x >= 0) {
        if (x > 0) {
          res[_0x4fb9("0x200")] = x - 2;
        }
        return x;
      }
      if (--j < i) {
        return 0;
      }
      x = normalize(path[j]);
      if (x >= 0) {
        if (x > 0) {
          if (x === 2) {
            x = 0;
          } else {
            res[_0x4fb9("0x200")] = x - 3;
          }
        }
        return x;
      }
      return 0;
    }
    function log(expr, text, values) {
      if ((text[0] & 192) !== 128) {
        expr["lastNeed"] = 0;
        return "\ufffd"[_0x4fb9("0x203")](values);
      }
      if (expr[_0x4fb9("0x200")] > 1 && text["length"] > 1) {
        if ((text[1] & 192) !== 128) {
          expr[_0x4fb9("0x200")] = 1;
          return "\ufffd"["repeat"](values + 1);
        }
        if (expr[_0x4fb9("0x200")] > 2 && text["length"] > 2) {
          if ((text[2] & 192) !== 128) {
            expr[_0x4fb9("0x200")] = 2;
            return "\ufffd"["repeat"](values + 2);
          }
        }
      }
    }
    function merge(context) {
      var cb = this[_0x4fb9("0x201")] - this[_0x4fb9("0x200")];
      var output = log(this, context, cb);
      if (output !== undefined) {
        return output;
      }
      if (this[_0x4fb9("0x200")] <= context["length"]) {
        context[_0x4fb9("0x2b")](this[_0x4fb9("0x202")], cb, 0, this[_0x4fb9("0x200")]);
        return this[_0x4fb9("0x202")][_0x4fb9("0x32")](this[_0x4fb9("0x182")], 0, this[_0x4fb9("0x201")]);
      }
      context[_0x4fb9("0x2b")](this[_0x4fb9("0x202")], cb, 0, context["length"]);
      this["lastNeed"] -= context["length"];
    }
    function inherit(target, name) {
      var filepath = join(this, target, name);
      if (!this[_0x4fb9("0x200")]) {
        return target[_0x4fb9("0x32")](_0x4fb9("0x25"), name);
      }
      this[_0x4fb9("0x201")] = filepath;
      var conditionalAssignment = target["length"] - (filepath - this[_0x4fb9("0x200")]);
      target[_0x4fb9("0x2b")](this[_0x4fb9("0x202")], 0, conditionalAssignment);
      return target["toString"](_0x4fb9("0x25"), name, conditionalAssignment);
    }
    function calculateSlug(user) {
      var slug = user && user["length"] ? this[_0x4fb9("0x28")](user) : "";
      if (this["lastNeed"]) {
        return slug + "\ufffd"[_0x4fb9("0x203")](this[_0x4fb9("0x201")] - this[_0x4fb9("0x200")]);
      }
      return slug;
    }
    function _validateCaptcha(p, m) {
      if ((p["length"] - m) % 2 === 0) {
        var 0 = p[_0x4fb9("0x32")](_0x4fb9("0x41"), m);
        if (0) {
          var _0x244cbd = 0[_0x4fb9("0x9")](0["length"] - 1);
          if (_0x244cbd >= 55296 && _0x244cbd <= 56319) {
            this[_0x4fb9("0x200")] = 2;
            this[_0x4fb9("0x201")] = 4;
            this["lastChar"][0] = p[p["length"] - 2];
            this["lastChar"][1] = p[p["length"] - 1];
            return 0[_0x4fb9("0x29")](0, -1);
          }
        }
        return 0;
      }
      this[_0x4fb9("0x200")] = 1;
      this["lastTotal"] = 2;
      this[_0x4fb9("0x202")][0] = p[p["length"] - 1];
      return p[_0x4fb9("0x32")](_0x4fb9("0x41"), m, p["length"] - 1);
    }
    function extend(b) {
      var prom = b && b["length"] ? this[_0x4fb9("0x28")](b) : "";
      if (this[_0x4fb9("0x200")]) {
        var year = this[_0x4fb9("0x201")] - this[_0x4fb9("0x200")];
        return prom + this[_0x4fb9("0x202")]["toString"](_0x4fb9("0x41"), 0, year);
      }
      return prom;
    }
    function forEach(obj, fn) {
      var offsetY = (obj["length"] - fn) % 3;
      if (offsetY === 0) {
        return obj["toString"](_0x4fb9("0x3e"), fn);
      }
      this["lastNeed"] = 3 - offsetY;
      this["lastTotal"] = 3;
      if (offsetY === 1) {
        this[_0x4fb9("0x202")][0] = obj[obj["length"] - 1];
      } else {
        this["lastChar"][0] = obj[obj["length"] - 2];
        this[_0x4fb9("0x202")][1] = obj[obj["length"] - 1];
      }
      return obj["toString"](_0x4fb9("0x3e"), fn, obj["length"] - offsetY);
    }
    function generateCardHash(b) {
      var dataUrl = b && b["length"] ? this[_0x4fb9("0x28")](b) : "";
      if (this[_0x4fb9("0x200")]) {
        return dataUrl + this["lastChar"][_0x4fb9("0x32")]("base64", 0, 3 - this[_0x4fb9("0x200")]);
      }
      return dataUrl;
    }
    function prefetchGroupsInfo(canCreateDiscussions) {
      return canCreateDiscussions[_0x4fb9("0x32")](this[_0x4fb9("0x182")]);
    }
    function clearBufferChars(output) {
      return output && output["length"] ? this[_0x4fb9("0x28")](output) : "";
    }
    var command_codes = saveNotifs(_0x4fb9("0x16c"))[_0x4fb9("0xe")];
    var appropriateObjectForTerrain = command_codes[_0x4fb9("0x26")] || function(encoding) {
      encoding = "" + encoding;
      switch(encoding && encoding["toLowerCase"]()) {
        case "hex":
        case _0x4fb9("0x25"):
        case "utf-8":
        case _0x4fb9("0x3b"):
        case _0x4fb9("0x3d"):
        case _0x4fb9("0x3e"):
        case _0x4fb9("0x3f"):
        case "ucs-2":
        case _0x4fb9("0x41"):
        case _0x4fb9("0x42"):
        case _0x4fb9("0x1fd"):
          return !![];
        default:
          return ![];
      }
    };
    global[_0x4fb9("0x183")] = Test;
    Test[_0x4fb9("0x15")][_0x4fb9("0x28")] = function(value) {
      if (value["length"] === 0) {
        return "";
      }
      var str;
      var i;
      if (this["lastNeed"]) {
        str = this[_0x4fb9("0x1ff")](value);
        if (str === undefined) {
          return "";
        }
        i = this[_0x4fb9("0x200")];
        this[_0x4fb9("0x200")] = 0;
      } else {
        i = 0;
      }
      if (i < value["length"]) {
        return str ? str + this[_0x4fb9("0x1fe")](value, i) : this[_0x4fb9("0x1fe")](value, i);
      }
      return str || "";
    };
    Test["prototype"][_0x4fb9("0xe1")] = calculateSlug;
    Test["prototype"][_0x4fb9("0x1fe")] = inherit;
    Test[_0x4fb9("0x15")][_0x4fb9("0x1ff")] = function(data) {
      if (this[_0x4fb9("0x200")] <= data["length"]) {
        data[_0x4fb9("0x2b")](this[_0x4fb9("0x202")], this[_0x4fb9("0x201")] - this["lastNeed"], 0, this[_0x4fb9("0x200")]);
        return this["lastChar"][_0x4fb9("0x32")](this[_0x4fb9("0x182")], 0, this[_0x4fb9("0x201")]);
      }
      data["copy"](this["lastChar"], this["lastTotal"] - this[_0x4fb9("0x200")], 0, data["length"]);
      this[_0x4fb9("0x200")] -= data["length"];
    };
  }, {
    "safe-buffer" : 36
  }],
  39 : [function(isSlidingUp, a, dontForceConstraints) {
    (function(window) {
      function init(p, a) {
        function deferred() {
          if (!_0x4bd60f) {
            if (configure(_0x4fb9("0x205"))) {
              throw new Error(a);
            } else {
              if (configure(_0x4fb9("0x206"))) {
                console[_0x4fb9("0xca")](a);
              } else {
                console[_0x4fb9("0x207")](a);
              }
            }
            _0x4bd60f = !![];
          }
          return p[_0x4fb9("0x4a")](this, arguments);
        }
        if (configure(_0x4fb9("0x204"))) {
          return p;
        }
        var _0x4bd60f = ![];
        return deferred;
      }
      function configure(name) {
        try {
          if (!window[_0x4fb9("0x208")]) {
            return ![];
          }
        } catch (_0x222bb0) {
          return ![];
        }
        var creative_size = window["localStorage"][name];
        if (null == creative_size) {
          return ![];
        }
        return String(creative_size)[_0x4fb9("0x5b")]() === _0x4fb9("0x209");
      }
      a[_0x4fb9("0x1")] = init;
    })[_0x4fb9("0x0")](this, typeof global !== _0x4fb9("0x7") ? global : typeof self !== _0x4fb9("0x7") ? self : typeof window !== "undefined" ? window : {});
  }, {}],
  40 : [function(canCreateDiscussions, isSlidingUp, PL$22) {
    arguments[4][10][0]["apply"](PL$22, arguments);
  }, {
    "dup" : 10
  }],
  41 : [function(isSlidingUp, canCreateDiscussions, dontForceConstraints) {
    canCreateDiscussions[_0x4fb9("0x1")] = function gotDataEntries(data) {
      return data && typeof data === "object" && typeof data["copy"] === _0x4fb9("0x2") && typeof data["fill"] === _0x4fb9("0x2") && typeof data[_0x4fb9("0x62")] === _0x4fb9("0x2");
    };
  }, {}],
  42 : [function(require, canCreateDiscussions, obj) {
    (function(dictionary, match) {
      function get(type, callback) {
        var args = {
          "seen" : [],
          "stylize" : stylizeNoColor
        };
        if (arguments["length"] >= 3) {
          args[_0x4fb9("0x212")] = arguments[2];
        }
        if (arguments["length"] >= 4) {
          args["colors"] = arguments[3];
        }
        if (compile(callback)) {
          args["showHidden"] = callback;
        } else {
          if (callback) {
            obj[_0x4fb9("0x213")](args, callback);
          }
        }
        if (error(args[_0x4fb9("0x214")])) {
          args["showHidden"] = ![];
        }
        if (error(args[_0x4fb9("0x212")])) {
          args[_0x4fb9("0x212")] = 2;
        }
        if (error(args[_0x4fb9("0x215")])) {
          args[_0x4fb9("0x215")] = ![];
        }
        if (error(args["customInspect"])) {
          args["customInspect"] = !![];
        }
        if (args[_0x4fb9("0x215")]) {
          args[_0x4fb9("0x216")] = determineModuleStatus;
        }
        return set(args, type, args["depth"]);
      }
      function determineModuleStatus(status, marketID) {
        var expectedSiteKey = get[_0x4fb9("0x21d")][marketID];
        if (expectedSiteKey) {
          return "\u001b[" + get[_0x4fb9("0x215")][expectedSiteKey][0] + "m" + status + "\u001b[" + get[_0x4fb9("0x215")][expectedSiteKey][1] + "m";
        } else {
          return status;
        }
      }
      function stylizeNoColor(str, styleType) {
        return str;
      }
      function create(defaultName) {
        var subwikiListsCache = {};
        defaultName[_0x4fb9("0x21e")](function(wikiId, canCreateDiscussions) {
          subwikiListsCache[wikiId] = !![];
        });
        return subwikiListsCache;
      }
      function set(data, target, name) {
        if (data[_0x4fb9("0x21f")] && target && mixin(target["inspect"]) && target[_0x4fb9("0x217")] !== obj[_0x4fb9("0x217")] && !(target[_0x4fb9("0xd6")] && target[_0x4fb9("0xd6")][_0x4fb9("0x15")] === target)) {
          var result = target[_0x4fb9("0x217")](name, data);
          if (!$(result)) {
            result = set(data, result, name);
          }
          return result;
        }
        var r = request(data, target);
        if (r) {
          return r;
        }
        var parent = Object["keys"](target);
        var cb = create(parent);
        if (data[_0x4fb9("0x214")]) {
          parent = Object[_0x4fb9("0x220")](target);
        }
        if (some(target) && (parent["indexOf"]("message") >= 0 || parent["indexOf"](_0x4fb9("0x221")) >= 0)) {
          return extend(target);
        }
        if (parent["length"] === 0) {
          if (mixin(target)) {
            var opt_by = target[_0x4fb9("0x222")] ? ": " + target[_0x4fb9("0x222")] : "";
            return data["stylize"](_0x4fb9("0x223") + opt_by + "]", "special");
          }
          if (extendInternal(target)) {
            return data[_0x4fb9("0x216")](RegExp[_0x4fb9("0x15")][_0x4fb9("0x32")][_0x4fb9("0x0")](target), "regexp");
          }
          if (getSelectionStatusForModels(target)) {
            return data[_0x4fb9("0x216")](Date[_0x4fb9("0x15")][_0x4fb9("0x32")][_0x4fb9("0x0")](target), "date");
          }
          if (some(target)) {
            return extend(target);
          }
        }
        var node = "";
        var done = ![];
        var p = ["{", "}"];
        if (setElementTransformProperty(target)) {
          done = !![];
          p = ["[", "]"];
        }
        if (mixin(target)) {
          var opt_by = target[_0x4fb9("0x222")] ? ": " + target["name"] : "";
          node = _0x4fb9("0x224") + opt_by + "]";
        }
        if (extendInternal(target)) {
          node = " " + RegExp[_0x4fb9("0x15")]["toString"][_0x4fb9("0x0")](target);
        }
        if (getSelectionStatusForModels(target)) {
          node = " " + Date[_0x4fb9("0x15")][_0x4fb9("0x225")][_0x4fb9("0x0")](target);
        }
        if (some(target)) {
          node = " " + extend(target);
        }
        if (parent["length"] === 0 && (!done || target["length"] == 0)) {
          return p[0] + node + p[1];
        }
        if (name < 0) {
          if (extendInternal(target)) {
            return data[_0x4fb9("0x216")](RegExp[_0x4fb9("0x15")][_0x4fb9("0x32")][_0x4fb9("0x0")](target), _0x4fb9("0x226"));
          } else {
            return data["stylize"](_0x4fb9("0x227"), "special");
          }
        }
        data["seen"][_0x4fb9("0xb")](target);
        var ret;
        if (done) {
          ret = resolve(data, target, name, cb, parent);
        } else {
          ret = parent[_0x4fb9("0x228")](function(where) {
            return test(data, target, name, cb, where, done);
          });
        }
        data[_0x4fb9("0x229")][_0x4fb9("0x22a")]();
        return func(ret, node, p);
      }
      function request(element, input) {
        if (error(input)) {
          return element[_0x4fb9("0x216")](_0x4fb9("0x7"), _0x4fb9("0x7"));
        }
        if ($(input)) {
          var selector = "'" + JSON[_0x4fb9("0x20a")](input)[_0x4fb9("0x86")](/^"|"$/g, "")["replace"](/'/g, "\\'")["replace"](/\\"/g, '"') + "'";
          return element["stylize"](selector, _0x4fb9("0x22"));
        }
        if (sanitize(input)) {
          return element["stylize"]("" + input, "number");
        }
        if (compile(input)) {
          return element["stylize"]("" + input, _0x4fb9("0x96"));
        }
        if (substring(input)) {
          return element[_0x4fb9("0x216")](_0x4fb9("0x22b"), _0x4fb9("0x22b"));
        }
      }
      function extend(target) {
        return "[" + Error[_0x4fb9("0x15")]["toString"]["call"](target) + "]";
      }
      function resolve(x, options, key, cb, idx) {
        var d = [];
        var i = 0;
        var length = options["length"];
        for (; i < length; ++i) {
          if (callback(options, String(i))) {
            d[_0x4fb9("0xb")](test(x, options, key, cb, String(i), !![]));
          } else {
            d["push"]("");
          }
        }
        idx[_0x4fb9("0x21e")](function(where) {
          if (!where[_0x4fb9("0x22c")](/^\d+$/)) {
            d[_0x4fb9("0xb")](test(x, options, key, cb, where, !![]));
          }
        });
        return d;
      }
      function test(list, obj, name, func, prop, successCallback) {
        var name;
        var out;
        var fields;
        fields = Object["getOwnPropertyDescriptor"](obj, prop) || {
          "value" : obj[prop]
        };
        if (fields[_0x4fb9("0x22d")]) {
          if (fields["set"]) {
            out = list[_0x4fb9("0x216")](_0x4fb9("0x22e"), _0x4fb9("0x22f"));
          } else {
            out = list["stylize"](_0x4fb9("0x230"), _0x4fb9("0x22f"));
          }
        } else {
          if (fields[_0x4fb9("0x231")]) {
            out = list["stylize"](_0x4fb9("0x232"), _0x4fb9("0x22f"));
          }
        }
        if (!callback(func, prop)) {
          name = "[" + prop + "]";
        }
        if (!out) {
          if (list["seen"][_0x4fb9("0x52")](fields["value"]) < 0) {
            if (substring(name)) {
              out = set(list, fields[_0x4fb9("0x233")], null);
            } else {
              out = set(list, fields[_0x4fb9("0x233")], name - 1);
            }
            if (out[_0x4fb9("0x52")]("\n") > -1) {
              if (successCallback) {
                out = out[_0x4fb9("0x234")]("\n")[_0x4fb9("0x228")](function(canCreateDiscussions) {
                  return "  " + canCreateDiscussions;
                })["join"]("\n")[_0x4fb9("0x58")](2);
              } else {
                out = "\n" + out[_0x4fb9("0x234")]("\n")[_0x4fb9("0x228")](function(canCreateDiscussions) {
                  return _0x4fb9("0x235") + canCreateDiscussions;
                })[_0x4fb9("0x4d")]("\n");
              }
            }
          } else {
            out = list[_0x4fb9("0x216")]("[Circular]", _0x4fb9("0x22f"));
          }
        }
        if (error(name)) {
          if (successCallback && prop["match"](/^\d+$/)) {
            return out;
          }
          name = JSON["stringify"]("" + prop);
          if (name[_0x4fb9("0x22c")](/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
            name = name[_0x4fb9("0x58")](1, name["length"] - 2);
            name = list[_0x4fb9("0x216")](name, "name");
          } else {
            name = name[_0x4fb9("0x86")](/'/g, "\\'")["replace"](/\\"/g, '"')[_0x4fb9("0x86")](/(^"|"$)/g, "'");
            name = list[_0x4fb9("0x216")](name, _0x4fb9("0x22"));
          }
        }
        return name + ": " + out;
      }
      function func(res, value, element) {
        var _0x2e1faf = 0;
        var _0x3c5b66 = res[_0x4fb9("0x236")](function(canCreateDiscussions, href) {
          _0x2e1faf++;
          if (href[_0x4fb9("0x52")]("\n") >= 0) {
            _0x2e1faf++;
          }
          return canCreateDiscussions + href[_0x4fb9("0x86")](/\u001b\[\d\d?m/g, "")["length"] + 1;
        }, 0);
        if (_0x3c5b66 > 60) {
          return element[0] + (value === "" ? "" : value + "\n ") + " " + res["join"](",\n  ") + " " + element[1];
        }
        return element[0] + value + " " + res[_0x4fb9("0x4d")](", ") + " " + element[1];
      }
      function setElementTransformProperty(elem) {
        return Array[_0x4fb9("0x2d")](elem);
      }
      function compile(name) {
        return typeof name === "boolean";
      }
      function substring(str) {
        return str === null;
      }
      function addFunction(fn) {
        return fn == null;
      }
      function sanitize(jsString) {
        return typeof jsString === _0x4fb9("0x1d");
      }
      function $(string) {
        return typeof string === _0x4fb9("0x22");
      }
      function backup(context) {
        return typeof context === _0x4fb9("0x8d");
      }
      function error(type) {
        return type === void 0;
      }
      function extendInternal(source) {
        return isArray(source) && toArray(source) === _0x4fb9("0x90");
      }
      function isArray(v) {
        return typeof v === _0x4fb9("0x91") && v !== null;
      }
      function getSelectionStatusForModels(collection) {
        return isArray(collection) && toArray(collection) === _0x4fb9("0x92");
      }
      function some(obj) {
        return isArray(obj) && (toArray(obj) === _0x4fb9("0x23a") || obj instanceof Error);
      }
      function mixin(targetClass) {
        return typeof targetClass === _0x4fb9("0x2");
      }
      function fnc(value) {
        return value === null || typeof value === _0x4fb9("0x96") || typeof value === "number" || typeof value === _0x4fb9("0x22") || typeof value === _0x4fb9("0x8d") || typeof value === _0x4fb9("0x7");
      }
      function toArray(target) {
        return Object[_0x4fb9("0x15")][_0x4fb9("0x32")]["call"](target);
      }
      function concat(res) {
        return res < 10 ? "0" + res["toString"](10) : res[_0x4fb9("0x32")](10);
      }
      function getOwnPropertyNames() {
        var expected_date2 = new Date;
        var _0x331212 = [concat(expected_date2["getHours"]()), concat(expected_date2["getMinutes"]()), concat(expected_date2[_0x4fb9("0x246")]())][_0x4fb9("0x4d")](":");
        return [expected_date2["getDate"](), months[expected_date2["getMonth"]()], _0x331212][_0x4fb9("0x4d")](" ");
      }
      function callback(obj, out) {
        return Object[_0x4fb9("0x15")][_0x4fb9("0x122")][_0x4fb9("0x0")](obj, out);
      }
      var d = /%[sdj%]/g;
      obj["format"] = function(Y) {
        if (!$(Y)) {
          var _0x3ddfa7 = [];
          var i = 0;
          for (; i < arguments["length"]; i++) {
            _0x3ddfa7[_0x4fb9("0xb")](get(arguments[i]));
          }
          return _0x3ddfa7[_0x4fb9("0x4d")](" ");
        }
        i = 1;
        var args = arguments;
        var rend = args["length"];
        var ret = String(Y)["replace"](d, function(canCreateDiscussions) {
          if (canCreateDiscussions === "%%") {
            return "%";
          }
          if (i >= rend) {
            return canCreateDiscussions;
          }
          switch(canCreateDiscussions) {
            case "%s":
              return String(args[i++]);
            case "%d":
              return Number(args[i++]);
            case "%j":
              try {
                return JSON[_0x4fb9("0x20a")](args[i++]);
              } catch (_0x236cfe) {
                return _0x4fb9("0x20b");
              }
            default:
              return canCreateDiscussions;
          }
        });
        var name = args[i];
        for (; i < rend; name = args[++i]) {
          if (substring(name) || !isArray(name)) {
            ret = ret + (" " + name);
          } else {
            ret = ret + (" " + get(name));
          }
        }
        return ret;
      };
      obj[_0x4fb9("0x20c")] = function(elem, msg) {
        function cli() {
          if (!_0x1dfa24) {
            if (dictionary["throwDeprecation"]) {
              throw new Error(msg);
            } else {
              if (dictionary[_0x4fb9("0x206")]) {
                console["trace"](msg);
              } else {
                console["error"](msg);
              }
            }
            _0x1dfa24 = !![];
          }
          return elem[_0x4fb9("0x4a")](this, arguments);
        }
        if (error(match[_0x4fb9("0x20d")])) {
          return function() {
            return obj[_0x4fb9("0x20c")](elem, msg)[_0x4fb9("0x4a")](this, arguments);
          };
        }
        if (dictionary[_0x4fb9("0x204")] === !![]) {
          return elem;
        }
        var _0x1dfa24 = ![];
        return cli;
      };
      var __WEBPACK_IMPORTED_MODULE_2__array_index__ = {};
      var symbol;
      obj["debuglog"] = function(b) {
        if (error(symbol)) {
          symbol = dictionary["env"][_0x4fb9("0x20e")] || "";
        }
        b = b[_0x4fb9("0xfe")]();
        if (!__WEBPACK_IMPORTED_MODULE_2__array_index__[b]) {
          if ((new RegExp("\\b" + b + "\\b", "i"))[_0x4fb9("0x20f")](symbol)) {
            var value = dictionary[_0x4fb9("0x210")];
            __WEBPACK_IMPORTED_MODULE_2__array_index__[b] = function() {
              var d = obj[_0x4fb9("0x211")]["apply"](obj, arguments);
              console[_0x4fb9("0x12")]("%s %d: %s", b, value, d);
            };
          } else {
            __WEBPACK_IMPORTED_MODULE_2__array_index__[b] = function() {
            };
          }
        }
        return __WEBPACK_IMPORTED_MODULE_2__array_index__[b];
      };
      obj[_0x4fb9("0x217")] = get;
      get[_0x4fb9("0x215")] = {
        "bold" : [1, 22],
        "italic" : [3, 23],
        "underline" : [4, 24],
        "inverse" : [7, 27],
        "white" : [37, 39],
        "grey" : [90, 39],
        "black" : [30, 39],
        "blue" : [34, 39],
        "cyan" : [36, 39],
        "green" : [32, 39],
        "magenta" : [35, 39],
        "red" : [31, 39],
        "yellow" : [33, 39]
      };
      get["styles"] = {
        "special" : "cyan",
        "number" : "yellow",
        "boolean" : _0x4fb9("0x218"),
        "undefined" : "grey",
        "null" : _0x4fb9("0x219"),
        "string" : _0x4fb9("0x21a"),
        "date" : _0x4fb9("0x21b"),
        "regexp" : _0x4fb9("0x21c")
      };
      obj[_0x4fb9("0x2d")] = setElementTransformProperty;
      obj["isBoolean"] = compile;
      obj["isNull"] = substring;
      obj[_0x4fb9("0x237")] = addFunction;
      obj[_0x4fb9("0x8b")] = sanitize;
      obj[_0x4fb9("0x8c")] = $;
      obj[_0x4fb9("0x8e")] = backup;
      obj[_0x4fb9("0x8f")] = error;
      obj[_0x4fb9("0x238")] = extendInternal;
      obj[_0x4fb9("0x239")] = isArray;
      obj["isDate"] = getSelectionStatusForModels;
      obj[_0x4fb9("0x94")] = some;
      obj[_0x4fb9("0x95")] = mixin;
      obj["isPrimitive"] = fnc;
      obj["isBuffer"] = require(_0x4fb9("0x23b"));
      var months = [_0x4fb9("0x23c"), _0x4fb9("0x23d"), _0x4fb9("0x23e"), "Apr", _0x4fb9("0x23f"), _0x4fb9("0x240"), _0x4fb9("0x241"), _0x4fb9("0x242"), "Sep", _0x4fb9("0x243"), _0x4fb9("0x244"), _0x4fb9("0x245")];
      obj[_0x4fb9("0x247")] = function() {
        console[_0x4fb9("0x247")]("%s - %s", getOwnPropertyNames(), obj[_0x4fb9("0x211")][_0x4fb9("0x4a")](obj, arguments));
      };
      obj[_0x4fb9("0x121")] = require("inherits");
      obj[_0x4fb9("0x213")] = function(values, obj) {
        if (!obj || !isArray(obj)) {
          return values;
        }
        var h = Object["keys"](obj);
        var i = h["length"];
        for (; i--;) {
          values[h[i]] = obj[h[i]];
        }
        return values;
      };
    })[_0x4fb9("0x0")](this, require(_0x4fb9("0x14c")), typeof global !== _0x4fb9("0x7") ? global : typeof self !== _0x4fb9("0x7") ? self : typeof window !== "undefined" ? window : {});
  }, {
    "./support/isBuffer" : 41,
    "_process" : 22,
    "inherits" : 40
  }],
  43 : [function(canCreateDiscussions, isSlidingUp, PL$22) {
    arguments[4][5][0]["apply"](PL$22, arguments);
  }, {
    "./lib/uint32" : 44,
    "./lib/uint64" : 45,
    "dup" : 5
  }],
  44 : [function(canCreateDiscussions, isSlidingUp, mmCoreSplitViewBlock) {
    arguments[4][6][0][_0x4fb9("0x4a")](mmCoreSplitViewBlock, arguments);
  }, {
    "dup" : 6
  }],
  45 : [function(canCreateDiscussions, isSlidingUp, PL$22) {
    arguments[4][7][0]["apply"](PL$22, arguments);
  }, {
    "dup" : 7
  }],
  46 : [function(saveNotifs, ParamLocation, canCreateDiscussions) {
    (function(canCreateDiscussions) {
      (function(window) {
        function encode(data) {
          var settingHandler = [];
          var parameter = 0;
          var size_human = data["length"];
          for (; parameter < size_human; parameter++) {
            var value = data[_0x4fb9("0x9")](parameter);
            if (value < 128) {
              settingHandler[_0x4fb9("0xb")](value);
            } else {
              if (value < 2048) {
                settingHandler[_0x4fb9("0xb")](192 | value >> 6, 128 | value & 63);
              } else {
                if (value < 55296 || value >= 57344) {
                  settingHandler[_0x4fb9("0xb")](224 | value >> 12, 128 | value >> 6 & 63, 128 | value & 63);
                } else {
                  parameter++;
                  value = 65536 + ((value & 1023) << 10 | data[_0x4fb9("0x9")](parameter) & 1023);
                  settingHandler[_0x4fb9("0xb")](240 | value >> 18, 128 | value >> 12 & 63, 128 | value >> 6 & 63, 128 | value & 63);
                }
              }
            }
          }
          return new Uint8Array(settingHandler);
        }
        function URI() {
          if (arguments["length"] == 2) {
            return (new URI(arguments[1]))[_0x4fb9("0x24c")](arguments[0])[_0x4fb9("0x148")]();
          }
          if (!(this instanceof URI)) {
            return new URI(arguments[0]);
          }
          init[_0x4fb9("0x0")](this, arguments[0]);
        }
        function init(parent) {
          this[_0x4fb9("0x24d")] = parent instanceof $ ? parent[_0x4fb9("0xa3")]() : $(parent);
          this["v1"] = this[_0x4fb9("0x24d")][_0x4fb9("0xa3")]()["add"](className);
          this["v2"] = this["seed"][_0x4fb9("0xa3")]()["add"](value);
          this["v3"] = this[_0x4fb9("0x24d")][_0x4fb9("0xa3")]();
          this["v4"] = this[_0x4fb9("0x24d")]["clone"]()[_0x4fb9("0xa2")](time);
          this[_0x4fb9("0x24e")] = 0;
          this["memsize"] = 0;
          this["memory"] = null;
          return this;
        }
        var $ = saveNotifs(_0x4fb9("0x248"))[_0x4fb9("0x98")];
        $[_0x4fb9("0x15")]["xxh_update"] = function(l, width) {
          var t = value["_low"];
          var s = value[_0x4fb9("0x9b")];
          var y;
          var t2;
          t2 = l * t;
          y = t2 >>> 16;
          y = y + width * t;
          y = y & 65535;
          y = y + l * s;
          var j = this[_0x4fb9("0x9d")] + (t2 & 65535);
          var height = j >>> 16;
          height = height + (this[_0x4fb9("0x9b")] + (y & 65535));
          var h = height << 16 | j & 65535;
          h = h << 13 | h >>> 19;
          j = h & 65535;
          height = h >>> 16;
          t = time[_0x4fb9("0x9d")];
          s = time[_0x4fb9("0x9b")];
          t2 = j * t;
          y = t2 >>> 16;
          y = y + height * t;
          y = y & 65535;
          y = y + j * s;
          this[_0x4fb9("0x9d")] = t2 & 65535;
          this["_high"] = y & 65535;
        };
        var time = $("2654435761");
        var value = $(_0x4fb9("0x249"));
        var item = $("3266489917");
        var inputel = $(_0x4fb9("0x24a"));
        var msg = $(_0x4fb9("0x24b"));
        var className = time[_0x4fb9("0xa3")]()["add"](value);
        URI[_0x4fb9("0x15")][_0x4fb9("0x24f")] = init;
        URI[_0x4fb9("0x15")][_0x4fb9("0x24c")] = function(data) {
          var _0x450143 = typeof data == _0x4fb9("0x22");
          var _0x2ff06b;
          if (_0x450143) {
            data = encode(data);
            _0x450143 = ![];
            _0x2ff06b = !![];
          }
          if (typeof ArrayBuffer !== _0x4fb9("0x7") && data instanceof ArrayBuffer) {
            _0x2ff06b = !![];
            data = new Uint8Array(data);
          }
          var i = 0;
          var size = data["length"];
          var l = i + size;
          if (size == 0) {
            return this;
          }
          this[_0x4fb9("0x24e")] += size;
          if (this[_0x4fb9("0x250")] == 0) {
            if (_0x450143) {
              this[_0x4fb9("0x251")] = "";
            } else {
              if (_0x2ff06b) {
                this[_0x4fb9("0x251")] = new Uint8Array(16);
              } else {
                this[_0x4fb9("0x251")] = new canCreateDiscussions(16);
              }
            }
          }
          if (this[_0x4fb9("0x250")] + size < 16) {
            if (_0x450143) {
              this["memory"] += data;
            } else {
              if (_0x2ff06b) {
                this[_0x4fb9("0x251")]["set"](data[_0x4fb9("0x5e")](0, size), this[_0x4fb9("0x250")]);
              } else {
                data["copy"](this["memory"], this[_0x4fb9("0x250")], 0, size);
              }
            }
            this[_0x4fb9("0x250")] += size;
            return this;
          }
          if (this["memsize"] > 0) {
            if (_0x450143) {
              this[_0x4fb9("0x251")] += data[_0x4fb9("0x29")](0, 16 - this[_0x4fb9("0x250")]);
            } else {
              if (_0x2ff06b) {
                this[_0x4fb9("0x251")][_0x4fb9("0x231")](data[_0x4fb9("0x5e")](0, 16 - this[_0x4fb9("0x250")]), this[_0x4fb9("0x250")]);
              } else {
                data["copy"](this["memory"], this[_0x4fb9("0x250")], 0, 16 - this[_0x4fb9("0x250")]);
              }
            }
            var PL$19 = 0;
            if (_0x450143) {
              this["v1"][_0x4fb9("0x252")](this[_0x4fb9("0x251")][_0x4fb9("0x9")](PL$19 + 1) << 8 | this["memory"][_0x4fb9("0x9")](PL$19), this[_0x4fb9("0x251")][_0x4fb9("0x9")](PL$19 + 3) << 8 | this["memory"][_0x4fb9("0x9")](PL$19 + 2));
              PL$19 = PL$19 + 4;
              this["v2"][_0x4fb9("0x252")](this["memory"]["charCodeAt"](PL$19 + 1) << 8 | this[_0x4fb9("0x251")][_0x4fb9("0x9")](PL$19), this["memory"][_0x4fb9("0x9")](PL$19 + 3) << 8 | this["memory"]["charCodeAt"](PL$19 + 2));
              PL$19 = PL$19 + 4;
              this["v3"][_0x4fb9("0x252")](this[_0x4fb9("0x251")][_0x4fb9("0x9")](PL$19 + 1) << 8 | this[_0x4fb9("0x251")]["charCodeAt"](PL$19), this[_0x4fb9("0x251")][_0x4fb9("0x9")](PL$19 + 3) << 8 | this["memory"][_0x4fb9("0x9")](PL$19 + 2));
              PL$19 = PL$19 + 4;
              this["v4"][_0x4fb9("0x252")](this["memory"][_0x4fb9("0x9")](PL$19 + 1) << 8 | this["memory"][_0x4fb9("0x9")](PL$19), this[_0x4fb9("0x251")][_0x4fb9("0x9")](PL$19 + 3) << 8 | this[_0x4fb9("0x251")][_0x4fb9("0x9")](PL$19 + 2));
            } else {
              this["v1"][_0x4fb9("0x252")](this[_0x4fb9("0x251")][PL$19 + 1] << 8 | this["memory"][PL$19], this["memory"][PL$19 + 3] << 8 | this[_0x4fb9("0x251")][PL$19 + 2]);
              PL$19 = PL$19 + 4;
              this["v2"][_0x4fb9("0x252")](this[_0x4fb9("0x251")][PL$19 + 1] << 8 | this["memory"][PL$19], this["memory"][PL$19 + 3] << 8 | this[_0x4fb9("0x251")][PL$19 + 2]);
              PL$19 = PL$19 + 4;
              this["v3"]["xxh_update"](this[_0x4fb9("0x251")][PL$19 + 1] << 8 | this["memory"][PL$19], this[_0x4fb9("0x251")][PL$19 + 3] << 8 | this["memory"][PL$19 + 2]);
              PL$19 = PL$19 + 4;
              this["v4"][_0x4fb9("0x252")](this[_0x4fb9("0x251")][PL$19 + 1] << 8 | this[_0x4fb9("0x251")][PL$19], this[_0x4fb9("0x251")][PL$19 + 3] << 8 | this["memory"][PL$19 + 2]);
            }
            i = i + (16 - this[_0x4fb9("0x250")]);
            this["memsize"] = 0;
            if (_0x450143) {
              this[_0x4fb9("0x251")] = "";
            }
          }
          if (i <= l - 16) {
            var last = l - 16;
            do {
              if (_0x450143) {
                this["v1"]["xxh_update"](data[_0x4fb9("0x9")](i + 1) << 8 | data["charCodeAt"](i), data[_0x4fb9("0x9")](i + 3) << 8 | data[_0x4fb9("0x9")](i + 2));
                i = i + 4;
                this["v2"][_0x4fb9("0x252")](data["charCodeAt"](i + 1) << 8 | data[_0x4fb9("0x9")](i), data[_0x4fb9("0x9")](i + 3) << 8 | data[_0x4fb9("0x9")](i + 2));
                i = i + 4;
                this["v3"][_0x4fb9("0x252")](data["charCodeAt"](i + 1) << 8 | data[_0x4fb9("0x9")](i), data[_0x4fb9("0x9")](i + 3) << 8 | data[_0x4fb9("0x9")](i + 2));
                i = i + 4;
                this["v4"][_0x4fb9("0x252")](data[_0x4fb9("0x9")](i + 1) << 8 | data["charCodeAt"](i), data[_0x4fb9("0x9")](i + 3) << 8 | data[_0x4fb9("0x9")](i + 2));
              } else {
                this["v1"]["xxh_update"](data[i + 1] << 8 | data[i], data[i + 3] << 8 | data[i + 2]);
                i = i + 4;
                this["v2"][_0x4fb9("0x252")](data[i + 1] << 8 | data[i], data[i + 3] << 8 | data[i + 2]);
                i = i + 4;
                this["v3"][_0x4fb9("0x252")](data[i + 1] << 8 | data[i], data[i + 3] << 8 | data[i + 2]);
                i = i + 4;
                this["v4"][_0x4fb9("0x252")](data[i + 1] << 8 | data[i], data[i + 3] << 8 | data[i + 2]);
              }
              i = i + 4;
            } while (i <= last);
          }
          if (i < l) {
            if (_0x450143) {
              this[_0x4fb9("0x251")] += data[_0x4fb9("0x29")](i);
            } else {
              if (_0x2ff06b) {
                this[_0x4fb9("0x251")][_0x4fb9("0x231")](data["subarray"](i, l), this["memsize"]);
              } else {
                data[_0x4fb9("0x2b")](this[_0x4fb9("0x251")], this[_0x4fb9("0x250")], i, l);
              }
            }
            this[_0x4fb9("0x250")] = l - i;
          }
          return this;
        };
        URI[_0x4fb9("0x15")][_0x4fb9("0x148")] = function() {
          var data = this["memory"];
          var is_str = typeof data == "string";
          var i = 0;
          var num_blocks = this[_0x4fb9("0x250")];
          var state;
          var setArgName;
          var chalk = new $;
          if (this["total_len"] >= 16) {
            state = this["v1"][_0x4fb9("0xb0")](1)[_0x4fb9("0xa1")](this["v2"][_0x4fb9("0xb0")](7)[_0x4fb9("0xa1")](this["v3"][_0x4fb9("0xb0")](12)[_0x4fb9("0xa1")](this["v4"][_0x4fb9("0xb0")](18))));
          } else {
            state = this[_0x4fb9("0x24d")][_0x4fb9("0xa1")](msg);
          }
          state[_0x4fb9("0xa1")](chalk[_0x4fb9("0x9f")](this[_0x4fb9("0x24e")]));
          for (; i <= num_blocks - 4;) {
            if (is_str) {
              chalk[_0x4fb9("0x9e")](data[_0x4fb9("0x9")](i + 1) << 8 | data["charCodeAt"](i), data[_0x4fb9("0x9")](i + 3) << 8 | data[_0x4fb9("0x9")](i + 2));
            } else {
              chalk["fromBits"](data[i + 1] << 8 | data[i], data[i + 3] << 8 | data[i + 2]);
            }
            state[_0x4fb9("0xa1")](chalk[_0x4fb9("0xa5")](item))[_0x4fb9("0xb0")](17)[_0x4fb9("0xa5")](inputel);
            i = i + 4;
          }
          for (; i < num_blocks;) {
            chalk["fromBits"](is_str ? data[_0x4fb9("0x9")](i++) : data[i++], 0);
            state[_0x4fb9("0xa1")](chalk[_0x4fb9("0xa5")](msg))[_0x4fb9("0xb0")](11)[_0x4fb9("0xa5")](time);
          }
          setArgName = state["clone"]()[_0x4fb9("0xac")](15);
          state[_0x4fb9("0xab")](setArgName)[_0x4fb9("0xa5")](value);
          setArgName = state[_0x4fb9("0xa3")]()[_0x4fb9("0xac")](13);
          state[_0x4fb9("0xab")](setArgName)[_0x4fb9("0xa5")](item);
          setArgName = state[_0x4fb9("0xa3")]()[_0x4fb9("0xac")](16);
          state[_0x4fb9("0xab")](setArgName);
          this[_0x4fb9("0x24f")](this["seed"]);
          return state;
        };
        if (typeof define != _0x4fb9("0x7") && define[_0x4fb9("0xb3")]) {
          define([], function() {
            return URI;
          });
        } else {
          if (typeof ParamLocation != _0x4fb9("0x7") && ParamLocation[_0x4fb9("0x1")]) {
            ParamLocation[_0x4fb9("0x1")] = URI;
          } else {
            window[_0x4fb9("0x253")] = URI;
          }
        }
      })(this);
    })[_0x4fb9("0x0")](this, saveNotifs(_0x4fb9("0xe3"))["Buffer"]);
  }, {
    "buffer" : 3,
    "cuint" : 43
  }],
  47 : [function(saveNotifs, canCreateDiscussions, isSlidingUp) {
    (function(window, style, $) {
      function init(method, expanded, onInit, opt_logFunction) {
        this["id"] = method;
        this[_0x4fb9("0x5c4")] = expanded;
        this[_0x4fb9("0x5c5")] = onInit;
        this["skinURL"] = opt_logFunction;
        this["x"] = 0;
        this["y"] = 0;
        this[_0x4fb9("0x5c6")] = 0;
        this[_0x4fb9("0x5c7")] = 0;
        this[_0x4fb9("0x5c8")] = 0;
        this[_0x4fb9("0x5c9")] = "";
        this[_0x4fb9("0x4b4")] = null;
        this["customColor"] = options[_0x4fb9("0x53a")];
        this[_0x4fb9("0x5ca")] = ![];
        this[_0x4fb9("0x5cb")] = null;
        this[_0x4fb9("0x5cc")] = 2 * Math["PI"];
        this["setColor"] = function(isSlidingUp, canCreateDiscussions) {
          this[_0x4fb9("0x4b4")] = isSlidingUp;
          if (canCreateDiscussions["length"] == 7) {
            this[_0x4fb9("0x5cd")] = canCreateDiscussions;
          }
        };
        this[_0x4fb9("0x5ce")] = function(style, sy, width, startcode, endcode) {
          if (!this[_0x4fb9("0x5ca")] || startcode && endcode && this["id"] != endcode) {
            return;
          }
          this[_0x4fb9("0x5c6")] = (29 * this[_0x4fb9("0x5c6")] + this["x"]) / 30;
          this[_0x4fb9("0x5c7")] = (29 * this[_0x4fb9("0x5c7")] + this["y"]) / 30;
          var name = (this[_0x4fb9("0x5c6")] + sy) * width;
          var destOffset = (this[_0x4fb9("0x5c7")] + sy) * width;
          if (this[_0x4fb9("0x5c4")]["length"] > 0) {
            style["font"] = options[_0x4fb9("0x5cf")] + " " + options[_0x4fb9("0x541")] + _0x4fb9("0x5d0") + options["miniMapNickFontFamily"];
            style[_0x4fb9("0x5d1")] = _0x4fb9("0x5d2");
            if (options[_0x4fb9("0x542")] > 0) {
              style[_0x4fb9("0x5d3")] = options["miniMapNickStrokeSize"];
              style["strokeStyle"] = options["miniMapNickStrokeColor"];
              style["strokeText"](this[_0x4fb9("0x5c4")], name, destOffset - (options[_0x4fb9("0x5d4")] * 2 + 2));
            }
            style[_0x4fb9("0x5d5")] = options[_0x4fb9("0x536")];
            style[_0x4fb9("0x5d6")](this[_0x4fb9("0x5c4")], name, destOffset - (options[_0x4fb9("0x5d4")] * 2 + 2));
          }
          style[_0x4fb9("0x5d7")]();
          style[_0x4fb9("0x5d8")](name, destOffset, options[_0x4fb9("0x5d4")], 0, this["pi2"], ![]);
          style["closePath"]();
          if (props[_0x4fb9("0x5d9")]) {
            style[_0x4fb9("0x5d5")] = options[_0x4fb9("0x53a")];
          } else {
            style["fillStyle"] = this[_0x4fb9("0x4b4")];
          }
          style[_0x4fb9("0x23")]();
        };
      }
      function getColor() {
        this["txt"] = "";
        this[_0x4fb9("0x907")] = null;
        this[_0x4fb9("0x908")] = null;
        this["color"] = "#FFFFFF";
        this[_0x4fb9("0x843")] = ![];
        this[_0x4fb9("0x909")] = 2;
        this["strokeColor"] = "#000000";
        this[_0x4fb9("0x838")] = _0x4fb9("0x90a");
        this[_0x4fb9("0x90b")] = _0x4fb9("0x49c");
        this[_0x4fb9("0x90c")] = 700;
        this[_0x4fb9("0x90d")] = 16;
        this[_0x4fb9("0x90e")] = 3;
        this[_0x4fb9("0x90f")] = 1;
        this[_0x4fb9("0x910")] = 1;
        this[_0x4fb9("0x911")] = 0;
        this[_0x4fb9("0x912")] = ![];
        this["remeasure"] = ![];
        this[_0x4fb9("0x913")] = function(be) {
          if (this[_0x4fb9("0x914")] !== be) {
            this["txt"] = be;
            this[_0x4fb9("0x912")] = !![];
            this[_0x4fb9("0x915")] = !![];
          }
        };
        this[_0x4fb9("0x8b0")] = function(i) {
          if (this["color"] !== i) {
            this["color"] = i;
            this[_0x4fb9("0x912")] = !![];
          }
        };
        this[_0x4fb9("0x916")] = function(color) {
          if (this[_0x4fb9("0x843")] !== color) {
            this["stroke"] = color;
            this[_0x4fb9("0x912")] = !![];
          }
        };
        this["setStrokeWidth"] = function(canCreateDiscussions) {
          if (!this[_0x4fb9("0x843")]) {
            return;
          }
          if (this["strokeWidth"] != canCreateDiscussions) {
            this[_0x4fb9("0x909")] = canCreateDiscussions;
            this["redraw"] = !![];
            this[_0x4fb9("0x915")] = !![];
          }
        };
        this[_0x4fb9("0x917")] = function(strokeColor) {
          if (!this[_0x4fb9("0x843")]) {
            return;
          }
          if (this[_0x4fb9("0x918")] !== strokeColor) {
            this["strokeColor"] = strokeColor;
            this[_0x4fb9("0x912")] = !![];
          }
        };
        this["setFont"] = function() {
          this[_0x4fb9("0x838")] = this[_0x4fb9("0x90c")] + " " + this["fontSize"] + _0x4fb9("0x5d0") + this[_0x4fb9("0x90b")];
        };
        this[_0x4fb9("0x919")] = function(canCreateDiscussions) {
          if (this[_0x4fb9("0x90b")] !== canCreateDiscussions) {
            this[_0x4fb9("0x90b")] = canCreateDiscussions;
            this[_0x4fb9("0x4d0")]();
            this[_0x4fb9("0x912")] = !![];
            this["remeasure"] = !![];
          }
        };
        this[_0x4fb9("0x91a")] = function(canCreateDiscussions) {
          if (this[_0x4fb9("0x90c")] != canCreateDiscussions) {
            this[_0x4fb9("0x90c")] = canCreateDiscussions;
            this[_0x4fb9("0x4d0")]();
            this[_0x4fb9("0x912")] = !![];
            this[_0x4fb9("0x915")] = !![];
          }
        };
        this[_0x4fb9("0x91b")] = function(canCreateDiscussions) {
          if (this[_0x4fb9("0x90d")] != canCreateDiscussions) {
            this[_0x4fb9("0x90d")] = canCreateDiscussions;
            this[_0x4fb9("0x90e")] = ~~(canCreateDiscussions * .2);
            this["setFont"]();
            this[_0x4fb9("0x912")] = !![];
          }
        };
        this[_0x4fb9("0x91c")] = function(canCreateDiscussions) {
          if (this["scale"] != canCreateDiscussions) {
            this[_0x4fb9("0x90f")] = canCreateDiscussions;
            this[_0x4fb9("0x912")] = !![];
          }
        };
        this[_0x4fb9("0x91d")] = function() {
          if (this[_0x4fb9("0x907")]) {
            return;
          }
          this["txtCanvas"] = document[_0x4fb9("0x81f")](_0x4fb9("0x820"));
          this[_0x4fb9("0x908")] = this[_0x4fb9("0x907")]["getContext"]("2d");
          this[_0x4fb9("0x908")][_0x4fb9("0x848")] = !![];
        };
        this[_0x4fb9("0x853")] = function(value, mmCoreSplitViewBlock, mmaPushNotificationsComponent, mmaFrontpagePriority, isBgroundImg, mmaModFeedbackAutomSyncedEvent) {
          this["setColor"](value);
          this[_0x4fb9("0x919")](mmCoreSplitViewBlock);
          this[_0x4fb9("0x91a")](mmaPushNotificationsComponent);
          this[_0x4fb9("0x916")](mmaFrontpagePriority);
          this[_0x4fb9("0x91e")](isBgroundImg);
          this[_0x4fb9("0x917")](mmaModFeedbackAutomSyncedEvent);
        };
        this[_0x4fb9("0x91f")] = function() {
          if (this[_0x4fb9("0x915")]) {
            this[_0x4fb9("0x908")][_0x4fb9("0x838")] = this[_0x4fb9("0x90c")] + _0x4fb9("0x920") + this[_0x4fb9("0x90b")];
            this["measuredWidth"] = this[_0x4fb9("0x908")][_0x4fb9("0x921")](this["txt"])[_0x4fb9("0x59f")];
            this["remeasure"] = ![];
          }
          return ~~(this[_0x4fb9("0x90d")] / 10 * this[_0x4fb9("0x911")]) + this[_0x4fb9("0x909")] * 2;
        };
        this[_0x4fb9("0x922")] = function() {
          this["createCanvas"]();
          if (this["redraw"]) {
            this[_0x4fb9("0x912")] = ![];
            this[_0x4fb9("0x907")][_0x4fb9("0x59f")] = this[_0x4fb9("0x91f")]();
            this["txtCanvas"][_0x4fb9("0x5b2")] = this[_0x4fb9("0x90d")] + this[_0x4fb9("0x90e")];
            this[_0x4fb9("0x908")]["font"] = this["font"];
            this[_0x4fb9("0x908")][_0x4fb9("0x837")] = 1;
            this[_0x4fb9("0x908")][_0x4fb9("0x5d3")] = this[_0x4fb9("0x909")];
            this[_0x4fb9("0x908")]["strokeStyle"] = this[_0x4fb9("0x918")];
            this[_0x4fb9("0x908")][_0x4fb9("0x5d5")] = this[_0x4fb9("0x4b4")];
            if (this["stroke"]) {
              this[_0x4fb9("0x908")][_0x4fb9("0x923")](this["txt"], this[_0x4fb9("0x909")], this[_0x4fb9("0x90d")] - this[_0x4fb9("0x90e")] / 2);
            }
            this[_0x4fb9("0x908")][_0x4fb9("0x5d6")](this[_0x4fb9("0x914")], this[_0x4fb9("0x909")], this[_0x4fb9("0x90d")] - this[_0x4fb9("0x90e")] / 2);
          }
          return this[_0x4fb9("0x907")];
        };
      }
      function construct(chart, column, index, table, opts, base64, type, variables, callback, isServer) {
        this["id"] = chart;
        this["x"] = column;
        this["y"] = index;
        this[_0x4fb9("0x924")] = column;
        this["targetY"] = index;
        this[_0x4fb9("0x4b4")] = opts;
        this["oppColor"] = null;
        this[_0x4fb9("0x12e")] = table;
        this[_0x4fb9("0x925")] = table;
        this[_0x4fb9("0x926")] = 1;
        this[_0x4fb9("0x5c4")] = "";
        this[_0x4fb9("0x8e9")] = "";
        this[_0x4fb9("0x927")] = null;
        this[_0x4fb9("0x5c8")] = 0;
        this[_0x4fb9("0x928")] = 0;
        this[_0x4fb9("0x929")] = 0;
        this[_0x4fb9("0x92a")] = null;
        this[_0x4fb9("0x92b")] = "";
        this[_0x4fb9("0x90e")] = 0;
        this[_0x4fb9("0x90f")] = 1;
        this["nickScale"] = 1;
        this[_0x4fb9("0x4f9")] = 1;
        this[_0x4fb9("0x4fa")] = 3;
        this[_0x4fb9("0x92c")] = 1;
        this[_0x4fb9("0x90d")] = 26;
        this[_0x4fb9("0x92d")] = 26;
        this[_0x4fb9("0x92e")] = 0;
        this[_0x4fb9("0x92f")] = 26;
        this[_0x4fb9("0x930")] = 26;
        this[_0x4fb9("0x931")] = 3;
        this[_0x4fb9("0x932")] = 3;
        this[_0x4fb9("0x933")] = base64;
        this["isVirus"] = type;
        this["isPlayerCell"] = variables;
        this[_0x4fb9("0x717")] = callback;
        this["virMassShots"] = isServer;
        this[_0x4fb9("0x934")] = ![];
        this["redrawNick"] = !![];
        this[_0x4fb9("0x935")] = !![];
        this[_0x4fb9("0x70f")] = ![];
        this[_0x4fb9("0x714")] = ![];
        this[_0x4fb9("0x936")] = ![];
        this[_0x4fb9("0x937")] = ![];
        this[_0x4fb9("0x938")] = ![];
        this[_0x4fb9("0x939")] = 0;
        this[_0x4fb9("0x93a")] = 0;
        this["skin"] = null;
        this["pi2"] = 2 * Math["PI"];
        this[_0x4fb9("0x24c")] = function(s, ocolor, mmCoreSplitViewBlock, canCreateDiscussions, isSlidingUp, mmaPushNotificationsComponent) {
          this["x"] = s;
          this["y"] = ocolor;
          this[_0x4fb9("0x93b")] = canCreateDiscussions;
          this[_0x4fb9("0x93c")] = isSlidingUp;
          this[_0x4fb9("0x93d")](mmCoreSplitViewBlock);
          this[_0x4fb9("0x93e")](mmaPushNotificationsComponent);
        };
        this[_0x4fb9("0x93f")] = function() {
          this[_0x4fb9("0x938")] = !![];
          var i = data["cells"][_0x4fb9("0x52")](this);
          if (i != -1) {
            data[_0x4fb9("0x852")]["splice"](i, 1);
            if (props[_0x4fb9("0x729")]) {
              i = data[_0x4fb9("0x940")][_0x4fb9("0x52")](this);
              if (i != -1) {
                data[_0x4fb9("0x940")][_0x4fb9("0xcd")](i, 1);
              }
            }
          } else {
            i = data[_0x4fb9("0x941")][_0x4fb9("0x52")](this);
            if (i != -1) {
              data[_0x4fb9("0x941")][_0x4fb9("0xcd")](i, 1);
            }
          }
          i = data[_0x4fb9("0x942")][_0x4fb9("0x52")](this);
          if (i != -1) {
            data[_0x4fb9("0x943")] = !![];
            data[_0x4fb9("0x942")]["splice"](i, 1);
            i = data[_0x4fb9("0x944")]["indexOf"](this["id"]);
            if (i != -1) {
              data[_0x4fb9("0x944")]["splice"](i, 1);
            }
          }
          if (this[_0x4fb9("0x939")]) {
            data[_0x4fb9("0x945")]["push"](this);
          }
          delete data[_0x4fb9("0x946")][this["id"]];
        };
        this[_0x4fb9("0x947")] = function() {
          var backoffDelay = data[_0x4fb9("0x93a")] - this[_0x4fb9("0x93a")];
          var backoffDelaySeconds = backoffDelay / props[_0x4fb9("0x745")];
          backoffDelaySeconds = backoffDelaySeconds < 0 ? 0 : backoffDelaySeconds > 1 ? 1 : backoffDelaySeconds;
          this["x"] += (this[_0x4fb9("0x924")] - this["x"]) * backoffDelaySeconds;
          this["y"] += (this[_0x4fb9("0x948")] - this["y"]) * backoffDelaySeconds;
          this[_0x4fb9("0x12e")] += (this[_0x4fb9("0x925")] - this[_0x4fb9("0x12e")]) * backoffDelaySeconds;
          this[_0x4fb9("0x926")] = backoffDelaySeconds;
          if (!this[_0x4fb9("0x938")]) {
            this[_0x4fb9("0x93a")] = data["time"];
            return;
          }
          if (backoffDelaySeconds == 1) {
            var artistTrack = data[_0x4fb9("0x945")][_0x4fb9("0x52")](this);
            if (artistTrack != -1) {
              data[_0x4fb9("0x945")][_0x4fb9("0xcd")](artistTrack, 1);
            }
          }
        };
        this[_0x4fb9("0x949")] = function() {
          return this["id"] <= 0 ? ![] : this["x"] + this["size"] + 40 < data[_0x4fb9("0x94a")] - data[_0x4fb9("0x94b")] / 2 / data[_0x4fb9("0x90f")] || this["y"] + this[_0x4fb9("0x12e")] + 40 < data["viewY"] - data[_0x4fb9("0x94c")] / 2 / data[_0x4fb9("0x90f")] || this["x"] - this["size"] - 40 > data[_0x4fb9("0x94a")] + data["canvasWidth"] / 2 / data["scale"] || this["y"] - this[_0x4fb9("0x12e")] - 40 > data["viewY"] + data[_0x4fb9("0x94c")] / 2 / data[_0x4fb9("0x90f")] ? ![] : !![];
        };
        this["setMass"] = function(canCreateDiscussions) {
          this[_0x4fb9("0x12e")] = canCreateDiscussions;
          if (canCreateDiscussions <= 40) {
            return ![];
          }
          if (!this["massCanvas"]) {
            this[_0x4fb9("0x92a")] = new getColor;
            return ![];
          }
          this[_0x4fb9("0x5c8")] = ~~(canCreateDiscussions * canCreateDiscussions / 100);
          this[_0x4fb9("0x935")] = !![];
          if (this["isVirus"]) {
            if (this[_0x4fb9("0x718")] && this["mass"] < 200) {
              this[_0x4fb9("0x5c8")] = ~~((200 - this[_0x4fb9("0x5c8")]) / 14);
            }
            this[_0x4fb9("0x92b")] = this[_0x4fb9("0x5c8")][_0x4fb9("0x32")]();
            return !![];
          }
          this["massTxt"] = this[_0x4fb9("0x5c8")]["toString"]();
          if (this[_0x4fb9("0x5c8")] <= 200) {
            return !![];
          }
          if (this[_0x4fb9("0x717")] && this["mass"] >= 1E3) {
            this[_0x4fb9("0x929")] = Math[_0x4fb9("0x59c")](this["mass"] / 100) / 10;
            this[_0x4fb9("0x92b")] = this[_0x4fb9("0x929")] + "k";
            return !![];
          }
          if (this[_0x4fb9("0x714")]) {
            this[_0x4fb9("0x935")] = Math[_0x4fb9("0xd1")]((this[_0x4fb9("0x5c8")] - this[_0x4fb9("0x928")]) / this["mass"]) >= .02 || this["rescale"];
          }
          return !![];
        };
        this[_0x4fb9("0x93e")] = function(cb) {
          this["nick"] = cb;
          if (!cb || this[_0x4fb9("0x93b")]) {
            return ![];
          }
          if (!this[_0x4fb9("0x927")]) {
            this[_0x4fb9("0x927")] = new getColor;
            return ![];
          }
          return !![];
        };
        this[_0x4fb9("0x91c")] = function(val, canCreateDiscussions, isSlidingUp, dontForceConstraints, forceExecution) {
          var _0x4be6f6 = Math[_0x4fb9("0x94d")](val * 10) / 10;
          this[_0x4fb9("0x934")] = ![];
          if (this[_0x4fb9("0x90f")] != _0x4be6f6) {
            this[_0x4fb9("0x90f")] = _0x4be6f6;
            this["rescale"] = !![];
          }
          this["nickScale"] = canCreateDiscussions;
          this[_0x4fb9("0x4f9")] = isSlidingUp;
          this[_0x4fb9("0x4fa")] = dontForceConstraints;
          this[_0x4fb9("0x92c")] = forceExecution;
        };
        this[_0x4fb9("0x91b")] = function() {
          if (this[_0x4fb9("0x93b")]) {
            this[_0x4fb9("0x92f")] = Math["ceil"](this[_0x4fb9("0x930")] * this[_0x4fb9("0x90f")] * this["virMassScale"]);
            return;
          }
          this[_0x4fb9("0x90d")] = Math[_0x4fb9("0x94e")](this[_0x4fb9("0x12e")] * .3, 26) * this[_0x4fb9("0x90f")];
          this["nickSize"] = ~~(this[_0x4fb9("0x90d")] * this[_0x4fb9("0x94f")]);
          this[_0x4fb9("0x92f")] = ~~(this[_0x4fb9("0x90d")] * .5 * this[_0x4fb9("0x4f9")]);
          if (this[_0x4fb9("0x70f")]) {
            this[_0x4fb9("0x950")] = Math["abs"]((this[_0x4fb9("0x92d")] - this["lastNickSize"]) / this[_0x4fb9("0x92d")]) >= .3 || this["rescale"];
            return;
          }
          this[_0x4fb9("0x950")] = !![];
        };
        this["setStrokeSize"] = function() {
          if (this[_0x4fb9("0x936")] && !this[_0x4fb9("0x93b")]) {
            this["nickStrokeSize"] = ~~(this["nickSize"] * .1 * this["strokeScale"]);
          }
          if (this["strokeMass"]) {
            this[_0x4fb9("0x932")] = ~~(this["massSize"] * .1 * this[_0x4fb9("0x92c")]);
          }
        };
        this[_0x4fb9("0x853")] = function() {
          this[_0x4fb9("0x70f")] = props["optimizedNames"];
          this[_0x4fb9("0x714")] = props[_0x4fb9("0x714")];
          this[_0x4fb9("0x717")] = props[_0x4fb9("0x717")];
          this[_0x4fb9("0x718")] = props["virMassShots"];
          this[_0x4fb9("0x936")] = props["namesStroke"];
          this[_0x4fb9("0x937")] = props[_0x4fb9("0x719")];
        };
        this[_0x4fb9("0x951")] = function() {
          this[_0x4fb9("0x91c")](style[_0x4fb9("0x85d")], options[_0x4fb9("0x4f8")], options["massScale"], options["virMassScale"], options["strokeScale"]);
          this[_0x4fb9("0x91b")]();
          this[_0x4fb9("0x952")]();
          this[_0x4fb9("0x90e")] = 0;
        };
        this[_0x4fb9("0x855")] = function(graphic) {
          if (!this[_0x4fb9("0x5c4")] || !this[_0x4fb9("0x927")] || this[_0x4fb9("0x93b")]) {
            return;
          }
          var $ = this[_0x4fb9("0x927")];
          $["setDrawing"](options[_0x4fb9("0x856")], options[_0x4fb9("0x857")], options[_0x4fb9("0x858")], this["strokeNick"], this[_0x4fb9("0x931")], options["namesStrokeColor"]);
          $[_0x4fb9("0x913")](this[_0x4fb9("0x5c4")]);
          if (this[_0x4fb9("0x950")]) {
            $[_0x4fb9("0x91b")](this["nickSize"]);
            this[_0x4fb9("0x92e")] = this["nickSize"];
          }
          $["setScale"](this["scale"]);
          var clipPath = $[_0x4fb9("0x922")]();
          var idx = ~~(clipPath[_0x4fb9("0x59f")] / this[_0x4fb9("0x90f")]);
          var cb = ~~(clipPath[_0x4fb9("0x5b2")] / this[_0x4fb9("0x90f")]);
          this[_0x4fb9("0x90e")] = ~~(cb / 2);
          graphic["drawImage"](clipPath, ~~this["x"] - ~~(idx / 2), ~~this["y"] - this[_0x4fb9("0x90e")], idx, cb);
        };
        this[_0x4fb9("0x953")] = function(KUTE) {
          if (!this[_0x4fb9("0x92a")] || this[_0x4fb9("0x12e")] <= 40) {
            return;
          }
          var $ = this[_0x4fb9("0x92a")];
          $[_0x4fb9("0x853")](options["massColor"], options[_0x4fb9("0x859")], options["massFontWeight"], this[_0x4fb9("0x937")], this[_0x4fb9("0x932")], options[_0x4fb9("0x4ea")]);
          if (this[_0x4fb9("0x935")]) {
            $[_0x4fb9("0x913")](this[_0x4fb9("0x92b")]);
            this[_0x4fb9("0x928")] = this[_0x4fb9("0x5c8")];
          }
          $[_0x4fb9("0x91b")](this["massSize"]);
          $[_0x4fb9("0x91c")](this["scale"]);
          var PathPosition = $[_0x4fb9("0x922")]();
          var ops = ~~(PathPosition["width"] / this[_0x4fb9("0x90f")]);
          var container = ~~(PathPosition["height"] / this[_0x4fb9("0x90f")]);
          var to = this["margin"] == 0 ? ~~this["y"] - ~~(container / 2) : ~~this["y"] + this[_0x4fb9("0x90e")];
          KUTE[_0x4fb9("0x822")](PathPosition, ~~this["x"] - ~~(ops / 2), to, ops, container);
        };
        this[_0x4fb9("0x954")] = function(args, canCreateDiscussions) {
          if (data["hideSmallBots"] && this["size"] <= 36) {
            return;
          }
          args[_0x4fb9("0x83c")]();
          this["redrawed"]++;
          if (canCreateDiscussions) {
            this["moveCell"]();
          }
          if (this[_0x4fb9("0x938")]) {
            args[_0x4fb9("0x837")] *= 1 - this["alpha"];
          }
          var firstArg = args[_0x4fb9("0x837")];
          var _0xdf2477 = ![];
          var baseUri = this[_0x4fb9("0x933")] ? this[_0x4fb9("0x12e")] + options[_0x4fb9("0x955")] : this[_0x4fb9("0x12e")];
          args[_0x4fb9("0x5d7")]();
          args[_0x4fb9("0x5d8")](this["x"], this["y"], baseUri, 0, this[_0x4fb9("0x5cc")], ![]);
          args[_0x4fb9("0x842")]();
          if (this[_0x4fb9("0x933")]) {
            args[_0x4fb9("0x5d5")] = this["color"];
            args[_0x4fb9("0x23")]();
            args[_0x4fb9("0x846")]();
            return;
          }
          if (this[_0x4fb9("0x93b")]) {
            if (props[_0x4fb9("0x956")]) {
              args["globalAlpha"] *= options[_0x4fb9("0x500")];
              _0xdf2477 = !![];
            }
            if (props[_0x4fb9("0x957")] && data[_0x4fb9("0x617")]) {
              args["fillStyle"] = router[_0x4fb9("0x958")](baseUri);
              args[_0x4fb9("0x83f")] = router["setVirusStrokeColor"](baseUri);
            } else {
              args[_0x4fb9("0x5d5")] = options[_0x4fb9("0x4eb")];
              args[_0x4fb9("0x83f")] = options[_0x4fb9("0x4ec")];
            }
            args[_0x4fb9("0x23")]();
            if (_0xdf2477) {
              args[_0x4fb9("0x837")] = firstArg;
              _0xdf2477 = ![];
            }
            args[_0x4fb9("0x5d3")] = options["virusStrokeSize"];
            args["stroke"]();
            if (props[_0x4fb9("0x609")]) {
              this[_0x4fb9("0x853")]();
              this["setDrawingScale"]();
              this[_0x4fb9("0x93d")](this[_0x4fb9("0x12e")]);
              this["drawMass"](args);
            }
            args[_0x4fb9("0x846")]();
            return;
          }
          if (props["transparentCells"]) {
            args[_0x4fb9("0x837")] *= options[_0x4fb9("0x4fe")];
            _0xdf2477 = !![];
          }
          var parent = this[_0x4fb9("0x4b4")];
          if (data[_0x4fb9("0x617")]) {
            if (this["isPlayerCell"]) {
              if (props[_0x4fb9("0x71f")]) {
                parent = params[_0x4fb9("0x4b4")];
              }
            } else {
              if (props[_0x4fb9("0x5f6")] && !props[_0x4fb9("0x5f4")]) {
                parent = this["oppColor"];
              }
            }
          }
          args[_0x4fb9("0x5d5")] = parent;
          args[_0x4fb9("0x23")]();
          if (_0xdf2477) {
            args[_0x4fb9("0x837")] = firstArg;
            _0xdf2477 = ![];
          }
          var tokens = null;
          if (props[_0x4fb9("0x5e7")] && data[_0x4fb9("0x5f9")]) {
            tokens = router["getCustomSkin"](this[_0x4fb9("0x8e9")], this[_0x4fb9("0x4b4")]);
            if (tokens) {
              if ((props[_0x4fb9("0x5fc")] || data[_0x4fb9("0x617")] && props["oppColors"]) && !(this[_0x4fb9("0x93c")] && !props[_0x4fb9("0x959")]) || this[_0x4fb9("0x93c")] && props["myTransparentSkin"]) {
                args[_0x4fb9("0x837")] *= options[_0x4fb9("0x4ff")];
                _0xdf2477 = !![];
              }
              args[_0x4fb9("0x822")](tokens, this["x"] - baseUri, this["y"] - baseUri, 2 * baseUri, 2 * baseUri);
              if (_0xdf2477) {
                args[_0x4fb9("0x837")] = firstArg;
                _0xdf2477 = ![];
              }
            }
          }
          if (props["teammatesInd"] && !this[_0x4fb9("0x93c")] && baseUri <= 200 && (tokens || router[_0x4fb9("0x829")](this["targetNick"], this[_0x4fb9("0x4b4")]))) {
            defaults[_0x4fb9("0x850")](args, this["x"], this["y"], baseUri);
          }
          if (props[_0x4fb9("0x7ef")] && !props[_0x4fb9("0x609")] || canCreateDiscussions) {
            args["restore"]();
            return;
          }
          var idName = ![];
          if (!this["isPlayerCell"]) {
            idName = router[_0x4fb9("0x851")](baseUri);
            if (idName && props[_0x4fb9("0x710")] && props[_0x4fb9("0x715")]) {
              args["restore"]();
              return;
            }
          }
          this[_0x4fb9("0x853")]();
          this[_0x4fb9("0x951")]();
          args[_0x4fb9("0x837")] *= options[_0x4fb9("0x854")];
          if (!props["noNames"] && !(idName && props[_0x4fb9("0x710")]) && !(this[_0x4fb9("0x93c")] && props["hideMyName"]) && !(tokens && props[_0x4fb9("0x608")])) {
            if (this[_0x4fb9("0x93e")](this[_0x4fb9("0x8e9")])) {
              this["drawNick"](args);
            }
          }
          if (props[_0x4fb9("0x609")] && !(idName && props["autoHideMass"]) && !(this[_0x4fb9("0x93c")] && props[_0x4fb9("0x716")]) && !(props[_0x4fb9("0x95a")] && !this[_0x4fb9("0x93c")] && !this[_0x4fb9("0x93b")])) {
            if (this[_0x4fb9("0x93d")](this[_0x4fb9("0x12e")])) {
              this[_0x4fb9("0x953")](args);
            }
          }
          args["restore"]();
        };
      }
      function Node(lsb, msb) {
        this[_0x4fb9("0x95b")] = lsb;
        this["offset"] = msb;
        this[_0x4fb9("0x95c")] = 1;
        this["uncompressedSize"] = 0;
        this[_0x4fb9("0x95d")] = function() {
          this[_0x4fb9("0x95c")] = this[_0x4fb9("0x95e")]();
        };
        this[_0x4fb9("0x95f")] = function() {
          this[_0x4fb9("0x960")] = this["readUint32"]();
        };
        this[_0x4fb9("0x961")] = function(first, second) {
          var stripTerrain = first < 0;
          var coast = second < 0;
          if (stripTerrain != coast) {
            return stripTerrain;
          }
          return first > second;
        };
        this["skipByte"] = function() {
          var _0x4556d2 = this[_0x4fb9("0x962")]();
          if (_0x4556d2 < 128) {
            return;
          }
          this[_0x4fb9("0x963")]();
        };
        this[_0x4fb9("0x962")] = function() {
          return this[_0x4fb9("0x95b")]["getUint8"](this[_0x4fb9("0x964")]++);
        };
        this["readUint32"] = function() {
          var result = 0;
          var shift = 0;
          for (; !![];) {
            var digit = this[_0x4fb9("0x962")]();
            if (this[_0x4fb9("0x961")](32, shift)) {
              if (digit >= 128) {
                result = result | (digit & 127) << shift;
              } else {
                result = result | digit << shift;
                break;
              }
            } else {
              this["skipByte"]();
              break;
            }
            shift = shift + 7;
          }
          return result;
        };
        this["readFlag"] = function() {
          return this[_0x4fb9("0x95e")]() >>> 3;
        };
      }
      function select(supressSelectedEvent) {
        if (window[_0x4fb9("0xa8f")] && window[_0x4fb9("0xa8f")][_0x4fb9("0xa90")]) {
          window["history"][_0x4fb9("0xa90")]({}, window["document"][_0x4fb9("0x151")], supressSelectedEvent);
        }
      }
      function getKeysbyLocation() {
        if (window["location"][_0x4fb9("0xa91")] === _0x4fb9("0xa92")) {
          select("/" + window[_0x4fb9("0x4a1")][_0x4fb9("0xa93")]);
        }
      }
      function postRouteData() {
        if (window["NREUM"]) {
          window["NREUM"] = null;
          delete window[_0x4fb9("0xa94")];
        }
        if (window[_0x4fb9("0x5e3")]) {
          window[_0x4fb9("0x5e3")] = null;
          delete window[_0x4fb9("0x5e3")];
        }
        $[_0x4fb9("0xa95")](_0x4fb9("0xa96"), {
          "success" : function(obj) {
            var $ = obj;
            var Button = null;
            $ = $[_0x4fb9("0x86")](/(\(function\(([\w$]+)\){)/i, _0x4fb9("0xa97"));
            $ = $["replace"](/(connect:function\((\w)\){)(\w=[\w$]+\(\w\);)([\w$]+\(\w\);[\w$]+\(\w\)})/i, "$1 ogario.getWS($2); $3$4");
            $ = $[_0x4fb9("0x86")](/(([\w$]+)=[\w$]+\.getContext\("2d"\);)/i, 'if($2.id==="canvas"){$1 gameCtx=$2;}else{$1}');
            $ = $["replace"](/(setTarget:function\((\w),(\w)\)\{)([\w$]+\(\w,\w\)})/i, _0x4fb9("0xa98"));
            $ = $[_0x4fb9("0x86")](/(function\s*([\w$]+)\(\w\){return\s*[\w$]+\(\w,\w\)})/i, "$1 ogario.getString=$2;");
            $ = $[_0x4fb9("0x86")](/(\w\[\w\+(\d+)>>3]=(\w);\w\[\w\+(\d+)>>3]=(\w);\w\[\w\+(\d+)>>3]=(\w);\w\[\w\+(\d+)>>3]=(\w);)/i, _0x4fb9("0xa99"));
            $ = $[_0x4fb9("0x86")](/if\((\+\w\[\w>>3\])<1\.0\){/i, _0x4fb9("0xa9a"));
            $ = $[_0x4fb9("0x86")](/(\w)(=\+(\w\[\w>>3\])\*\+\w\()(\.\d)(,\+\w\);)/i, _0x4fb9("0xa9b"));
            $ = $[_0x4fb9("0x86")](/(\w=\w\[\w>>2\]\|0;)((\w\[\w>>3\])=(\w);)(\w\[\w>>0\]=a\[\w>>0\];)/i, _0x4fb9("0xa9c"));
            $ = $[_0x4fb9("0x86")](/(do{\w=\+\w\[\(\w\[\w>>2\]\|0\)\+\d+>>2];\w=\w\+\s*)(\+\(~~\+\w\(\+\(\w\*\w\/100\.0\)\)\|0\))(;\w=\w\+4\|0}while\(\(\w\|0\)!=\(\w\|0\)\);(\w)=(\w);)/i, _0x4fb9("0xa9d"));
            $ = $[_0x4fb9("0x86")](/(\w=\+\(\w>>>0\)\+4294967296\.0\*\+\(\w\|0\);)(\w=\+\w\[[\d\w]+\];)(if\(\w<\w\){\w=\w;return})/i, _0x4fb9("0xa9e"));
            $ = $[_0x4fb9("0x86")](/(if\(!\(\w\[[\d\w]+\]\|0\)\){)(\w=\w;return})([\w$]+\(\d+,\w\[[\d\w]+\]\|0\);)(\w=\w;return})/i, _0x4fb9("0xa9f"));
            $ = $["replace"](/(if\(\(\w\|0\)==0\|\(\w\[[\d\w]+\]\|0\)==0\))([\w$]+\(\w,\d+,15\);)(else\s*)([\w$]+\(\w,\w\);)/i, "$4");
            $ = $["replace"](/(\w\[\w>>2\]=\(\w\[\w>>2\]\|0\)\+1;)([\w$]+\(\w\);)([\w$]+\(\w\);)(if\(!\(\w\[[\d\w]+\]\|0\)\){[\w$]+\(\w,\w\);(\w=\w)})/i, "$1$2$3 if(1){ogario.drawGrid(gameCtx);$5}");
            $ = $[_0x4fb9("0x86")](/([\w$]+\(\d+,\w\[\w>>2\]\|0,(\+\w),(\+\w)\)\|0;[\w$]+\(\d+,\w\[\w>>2\]\|0,\+-(\+\w\[\w\+\d+>>3\]),\+-(\+\w\[\w\+\d+>>3\])\)\|0;)/i, "$1 ogario.viewScale=$2; ogario.playerX=$4; ogario.playerY=$5; ogario.customDraw(gameCtx);");
            $ = $[_0x4fb9("0x86")](/(do\s*if\(\w\[\w\+\d+>>0\]\|0\){)(if\(\(\w\[[\d\w]+\]\|0\)==0\?\(\w\[\(\w\[\w>>2\]\|0\)\+\d+>>0\]\|0\)==0:0\)break;)/i, _0x4fb9("0xaa0"));
            $ = $[_0x4fb9("0x86")](/(while\(0\);)([\w$]+\(\w,\w\);)(\w=\w\[\w>>2\]\|0;)(if\(\(\(!\(\(\w\[\w\+\d+>>0\]\|0\)!=0\|\(\w\[[\d\w]+\]\|0\)==0\)\?\(\w\[\w\+\d+>>0\]\|0\)==0:0\)\?\(\w\[\w\+\d+>>0\]\|0\)==0:0\)\?\(\w\[\w\+\d+>>0\]\|0\)==0:0\))([\w$]+\(\w,\w\);)(if\(\(\w\[\w\+\d+>>0\]\|0\)!=0\?\(\w\[\(\w\[\w>>2\]\|0\)\+\d+>>0\]\|0\)!=0:0\))([\w$]+\(\w,\w\);)([\w$]+\(\w,\w\);)([\w$]+\(\w,\w\);)(if\(!\(\w\[\(\w\[\w>>2\]\|0\)\+\d+>>0\]\|0\)\){)(\w=\w\+\d+\|0;\w\[\w>>0\]=1;\w=\w;return})([\w$]+\(\w,\w\);)(\w=\w\+\d+\|0;\w\[\w>>0\]=1;\w=\w;return})/i, 
            _0x4fb9("0xaa1"));
            $ = $["replace"](/((\w)=\(\w\[\w\+\d+>>0\]\|0\)!=0;)(if\(\(\w\[[\d\w]+\]\|0\)!=0\?\(\w\[[\d\w]+\]\|\w\[(\w)\+\d+>>0\]\)<<24>>24==0:0\))((\w)=\w\[(\w)\+\d+>>2\]\|0;)else/i, _0x4fb9("0xaa2"));
            $ = $[_0x4fb9("0x86")](/if\((\(\w\|0\)!=0\?\(\w\[\w\+\d+>>2\]&2\|0\)!=0:0)\){/i, _0x4fb9("0xaa3"));
            $ = $[_0x4fb9("0x86")](/(\/100\.0;)(\w+=\w+<0\.0\?0\.0:\w+>1\.0\?1\.0:\w+;)/gi, _0x4fb9("0xaa4"));
            $ = $[_0x4fb9("0x86")](/(\/100\.0,)(\(\w+<0\.0\?0\.0:\w+>1\.0\?1\.0:\w+)/gi, _0x4fb9("0xaa5"));
            $ = $[_0x4fb9("0x86")](/(if\(\w\[\w\+\d+>>0\]\|0\))({(\w)=\(\w\-\+\w\[\w>>3\]\)\/)(100\.0)(;[\w$]+\(\d+,\w\[\w>>2\]\|0,\+\(\w<0\.0\?1\.0:\w>1\.0\?0\.0:)(1\.0-\w)(\)\)\|0})/i, _0x4fb9("0xaa6"));
            $ = $[_0x4fb9("0x86")](/((\w=(\(\w\[(\w)\+\d+>>0\]\|0\)==0);)([\w$]+\(\d+,\w\[\w>>2\]\|0\)\|0;)([\w$]+\(\d+,\w\[\w>>2\]\|0,\+\(\+(\w\[\w>>2\])\),\+\(\+(\w\[\w>>2\])\),\+\(\w\+\s*\+(\w\[\w>>2\])\),0\.0,6.283185307179586,0\)\|0;)([\w$]+\(\d+,\w\[\w>>2\]\|0\)\|0;)(\w=\w\[\w>>2\]\|0;)if\(!\w\){([\w$]+\(\d+,\w\|0,(\w)&255\|0,(\w)&255\|0,(\w)&255\|0\)\|0;)([\w$]+\(\d+,\w\[\w>>2\]\|0\)\|0;)break}if\(\w\){([\w$]+\(\d+,\w\|0,(\w)&255\|0,(\w)&255\|0,(\w)&255\|0\)\|0;)([\w$]+\(\d+,\w\[\w>>2\]\|0\)\|0))/i, 
            _0x4fb9("0xaa7"));
            $ = $[_0x4fb9("0x86")](/([\w$]+\(\d+,\w\[\w>>2\]\|0\)\|0}while\(0\);do\s*if\()(\w)\)/i, _0x4fb9("0xaa8"));
            $ = $[_0x4fb9("0x86")](/(if\(\(\w\[\w\+\d+>>0\]\|0\)==0\?\(\(\(\(\w\[\w\+\d+>>2\]\|0\)\+\(\w\[[\d\w]+\]\|0\)\|0\)>>>0\)%10\|0\|0\)!=0:0\){\w=\w\[\w>>2\]\|0;[\w$]+\(\d+,\w\|0\)\|0;\w=\w;return})([\w$]+\((\w),\w\);)/i, "ogario.drawCellInfo(gameCtx, $3, cellX, cellY, cellSize, isFood, isVirus, isPlayerCell, skipCell, nick, color, skin !== null);");
            Button = $[_0x4fb9("0x22c")](/(\w=0;\w=\w\[\w\+(\d+)>>2\]\|0;\w=\w\[(\d+)\]\|0;\w=\w\[[\d\w]+\]\|0;)(\w:do)/i);
            if (Button) {
              $ = $[_0x4fb9("0x86")](/ogario.idOffset/g, Button[2]);
              $ = $["replace"](/ogario.idMemOffset/g, Button[3]);
            }
            Button = $["match"](/[\w$]+\(\w\+(\d+)\+\(\(\w<4\.0\?~~\w:4\)\*80\|0\)\|0\)/i);
            if (Button) {
              $ = $[_0x4fb9("0x86")](/ogario.nameMemOffset/g, Button[1]);
            }
            $ = $[_0x4fb9("0x86")](/(function\(\){)(for\(var\s+\w=document.createElement\("canvas"\)\.getContext\("2d"\))/i, '$1 console.log("create"); $2');
            $ = $["replace"](/(\w\[\w\+16>>2\]=0;)(\w\[\w>>2\])=([\w$]+\(\d+\)\|0;)(\w\[[\d\w]+\]=\(\w\[[\d\w]+\]\|0\)\+1)/gi, _0x4fb9("0xaa9"));
            $ = $[_0x4fb9("0x86")](/(}\w\[\w>>2]=-1;\w\[\w>>2])=([\w$]+\(\d+\)\|0;)(\w\[[\d\w]+\]=\(\w\[[\d\w]+\]\|0\)\+1)/gi, _0x4fb9("0xaaa"));
            $ = $[_0x4fb9("0x86")](/(\){)(\w=\w\.\w\[(\w)\]\.canvas)/gi, _0x4fb9("0xaab"));
            $ = $["replace"](/(\){)(\w\.\w\[(\w)\]\.(globalAlpha|font|scale|fillStyle|fillRect|fillText))/gi, "$1 if($3==-1){return;} $2");
            $ = $[_0x4fb9("0x86")](/(\){)(return\s+\w\.\w\[(\w)\]\.measureText)/gi, _0x4fb9("0xaab"));
            var arr = document[_0x4fb9("0x81f")]("script");
            arr[_0x4fb9("0x64c")] = $;
            arr[_0x4fb9("0xaac")] = !![];
            document[_0x4fb9("0x566")][_0x4fb9("0xaad")](arr);
          },
          "dataType" : _0x4fb9("0x1fe"),
          "method" : _0x4fb9("0xaae"),
          "cache" : ![],
          "crossDomain" : !![]
        });
      }
      function updateDevicesAfterDelay() {
        window[_0x4fb9("0xa81")] = function(canCreateDiscussions) {
          if (81 == canCreateDiscussions[_0x4fb9("0x9c8")] && window["core"][_0x4fb9("0xaaf")]) {
            window[_0x4fb9("0x5e3")]["specialOn"]();
          }
        };
        window[_0x4fb9("0x9cf")] = function(canCreateDiscussions) {
        };
      }
      function _events() {
        window["addEventListener"](_0x4fb9("0xab0"), function() {
          setTimeout(Layer, 50);
        }, ![]);
        window[_0x4fb9("0x80c")] = function() {
          updateDevicesAfterDelay();
        };
      }
      function _0xb99174() {
        style[_0x4fb9("0x973")] = function(url) {
          router[_0x4fb9("0x973")](url);
        };
        style[_0x4fb9("0x976")] = function() {
          router["displayLeaderboard"](style["leaderboardHTML"]);
        };
        style[_0x4fb9("0x9e2")] = function(url) {
          router[_0x4fb9("0x9e2")](url);
        };
        style[_0x4fb9("0xab1")] = function(url) {
          router["customDraw"](url);
        };
        style[_0x4fb9("0xab2")] = function(url, middlewareList, fn, helloWorld, mmCoreSplitViewBlock, mmaPushNotificationsComponent, mmaFrontpagePriority, isBgroundImg, mmaModFeedbackAutomSyncedEvent, mmCoreEventQueueEmpty, newBasicAnswers, alwaysDownload) {
          router[_0x4fb9("0xab2")](url, middlewareList, fn, helloWorld, mmCoreSplitViewBlock, mmaPushNotificationsComponent, mmaFrontpagePriority, isBgroundImg, mmaModFeedbackAutomSyncedEvent, mmCoreEventQueueEmpty, newBasicAnswers, alwaysDownload);
        };
        style[_0x4fb9("0xab3")] = function(url, middlewareList) {
          return router["getCustomSkin"](url, middlewareList);
        };
        style[_0x4fb9("0x958")] = function(url) {
          return router[_0x4fb9("0x958")](url);
        };
        style[_0x4fb9("0xab4")] = function(url) {
          return router["setVirusStrokeColor"](url);
        };
        style["setOppColor"] = function(url, middlewareList) {
          return router["setOppColor"](url, middlewareList);
        };
      }
      function getSectionsData() {
        if (document[_0x4fb9("0x7c9")]("canvas")) {
          var svgRoot = document[_0x4fb9("0x7c9")](_0x4fb9("0x820"));
          svgRoot[_0x4fb9("0x9d1")]("mousemove", function(cssText) {
            if (style[_0x4fb9("0x617")] && style[_0x4fb9("0x72a")] && style[_0x4fb9("0xab5")]) {
              style[_0x4fb9("0x9d5")] = cssText[_0x4fb9("0x9d5")];
              style[_0x4fb9("0x9c6")] = cssText[_0x4fb9("0x9c6")];
              style["setCursorPosition"]();
            }
          }, ![]);
          return;
        }
        setTimeout(getSectionsData, 50);
      }
      function scrollHeightObserver() {
        if (window["MC"] && window["MC"][_0x4fb9("0x672")]) {
          window["MC"]["_showNickDialog"] = window["MC"]["showNickDialog"];
          window["MC"][_0x4fb9("0x672")] = function() {
            window["MC"]["_showNickDialog"]["apply"](this, arguments);
            $(".ogario-menu")[_0x4fb9("0x5ec")]();
            gotoNewOfflinePage();
          };
          window["MC"]["_showStatsDialog"] = window["MC"]["showStatsDialog"];
          window["MC"][_0x4fb9("0xab6")] = function() {
            window["MC"][_0x4fb9("0xab7")][_0x4fb9("0x4a")](this, arguments);
            gotoNewOfflinePage();
          };
          window["MC"][_0x4fb9("0xab8")] = window["MC"][_0x4fb9("0x977")];
          window["MC"][_0x4fb9("0x977")] = function() {
            window["MC"]["_onConnect"][_0x4fb9("0x4a")](this, arguments);
            if (router) {
              router[_0x4fb9("0x974")]();
              router[_0x4fb9("0x975")]();
              router[_0x4fb9("0x7f1")]();
            }
          };
          window["MC"][_0x4fb9("0xab9")] = window["MC"][_0x4fb9("0x819")];
          window["MC"][_0x4fb9("0x819")] = function() {
            window["MC"]["_onPlayerSpawn"][_0x4fb9("0x4a")](this, arguments);
            style["playerColor"] = null;
            if (router) {
              router["onPlayerSpawn"]();
            }
          };
          window["MC"][_0x4fb9("0xaba")] = window["MC"][_0x4fb9("0x9b4")];
          window["MC"][_0x4fb9("0x9b4")] = function() {
            window["MC"][_0x4fb9("0xaba")][_0x4fb9("0x4a")](this, arguments);
            if (router) {
              router[_0x4fb9("0x9b4")]();
            }
          };
          window["MC"][_0x4fb9("0xabb")] = window["MC"][_0x4fb9("0xabc")];
          window["MC"]["onAgarioCoreLoaded"] = function() {
            window["MC"][_0x4fb9("0xabb")][_0x4fb9("0x4a")](this, arguments);
            if (window[_0x4fb9("0x5e3")] && window[_0x4fb9("0x5e3")][_0x4fb9("0xabd")]) {
              window[_0x4fb9("0x5e3")]["setNames"](![]);
            }
            if (window[_0x4fb9("0x5e3")] && window[_0x4fb9("0x5e3")]["setShowMass"]) {
              window["core"][_0x4fb9("0xa3b")](![]);
            }
            Layer();
          };
          window["MC"][_0x4fb9("0xabe")] = window["MC"][_0x4fb9("0xabf")];
          window["MC"][_0x4fb9("0xabf")] = function() {
            window["MC"][_0x4fb9("0xabe")][_0x4fb9("0x4a")](this, arguments);
            setTimeout(function() {
              Layer();
              if (router) {
                router["getDefaultSettings"]();
              }
              router["connect"]();
              gotoNewOfflinePage();
            }, 1E3);
          };
          window["MC"][_0x4fb9("0xac0")] = function(canCreateDiscussions) {
          };
          return;
        }
        setTimeout(scrollHeightObserver, 50);
      }
      function Layer() {
        var inner = window["innerWidth"];
        var height = window[_0x4fb9("0x9d8")];
        var obj = $("#helloContainer");
        var naturalHeight = obj["innerHeight"]();
        if (naturalHeight > 0) {
          style["menuHeight"] = naturalHeight;
        } else {
          naturalHeight = style[_0x4fb9("0xac1")] || 618;
        }
        var invDistance = Math[_0x4fb9("0x51")](1, height / naturalHeight);
        var magnitude = naturalHeight * invDistance;
        var picSize = Math["round"](height / 2 - .5 * magnitude);
        var deep = _0x4fb9("0xac2") + invDistance + ")";
        obj[_0x4fb9("0x569")]("transform", deep);
        obj[_0x4fb9("0x569")]("-ms-transform", deep);
        obj[_0x4fb9("0x569")]("-webkit-transform", deep);
        obj[_0x4fb9("0x569")]("top", "" + picSize + "px");
        style[_0x4fb9("0xac3")] = inner;
        style[_0x4fb9("0xac4")] = height;
      }
      function gotoNewOfflinePage() {
        if (router[_0x4fb9("0x62f")]) {
          return;
        }
        window[_0x4fb9("0xa81")] = function(canCreateDiscussions) {
        };
      }
      function link() {
        window[_0x4fb9("0x5e3")] = {
          "connect" : function(params) {
            data[_0x4fb9("0x815")](params);
          },
          "disconnect" : function() {
          },
          "sendNick" : function(_relatedTarget) {
            data["sendNick"](_relatedTarget);
          },
          "sendSpectate" : function() {
            data[_0x4fb9("0x9cd")]();
          },
          "eject" : function() {
            data[_0x4fb9("0x9ce")]();
          },
          "split" : function() {
            data[_0x4fb9("0x9cb")]();
          },
          "specialOn" : function() {
            data[_0x4fb9("0x9cc")]();
          },
          "specialOff" : function() {
            data[_0x4fb9("0x9cc")]();
          },
          "sendFbToken" : function(_relatedTarget) {
            data[_0x4fb9("0xac5")](_relatedTarget);
          },
          "sendGplusToken" : function(_relatedTarget) {
            data[_0x4fb9("0xac6")](_relatedTarget);
          },
          "recaptchaResponse" : function(_relatedTarget) {
            data["sendRecaptcha"](_relatedTarget);
          },
          "setClientVersion" : function(_relatedTarget, position) {
            data["setClientVersion"](_relatedTarget, position);
          },
          "proxyMobileData" : function(arr = []) {
            if (!Array[_0x4fb9("0x2d")](arr)) {
              console[_0x4fb9("0x247")]("ProxyMobileData ERROR: Array data required.");
              return;
            }
            if (arr[0] == 8) {
              arr["unshift"](102);
            }
            arr = new Uint8Array(arr);
            data[_0x4fb9("0x979")](new DataView(arr[_0x4fb9("0xe3")]));
          }
        };
      }
      function markReadIf() {
        Float32Array = saveNotifs(_0x4fb9("0xe3"))[_0x4fb9("0xe")];
        img_slide = saveNotifs(_0x4fb9("0xac7"));
      }
      function initSortMenu() {
        window[_0x4fb9("0xac8")] = function() {
          defaults[_0x4fb9("0xa03")]();
          Layer();
        };
      }
      var Float32Array = null;
      var img_slide = null;
      var translations = {
        "pl" : {
          "start" : _0x4fb9("0x254"),
          "settings" : _0x4fb9("0x255"),
          "restoreSettings" : _0x4fb9("0x256"),
          "animationGroup" : _0x4fb9("0x257"),
          "zoomGroup" : _0x4fb9("0x258"),
          "respGroup" : _0x4fb9("0x259"),
          "namesGroup" : "Nazwy",
          "massGroup" : "Masa",
          "skinsGroup" : _0x4fb9("0x25a"),
          "foodGroup" : _0x4fb9("0x25b"),
          "transparencyGroup" : _0x4fb9("0x25c"),
          "gridGroup" : _0x4fb9("0x25d"),
          "miniMapGroup" : _0x4fb9("0x25e"),
          "helpersGroup" : _0x4fb9("0x25f"),
          "mouseGroup" : _0x4fb9("0x260"),
          "hudGroup" : _0x4fb9("0x261"),
          "chatGroup" : _0x4fb9("0x262"),
          "statsGroup" : "Statystyki",
          "extrasGroup" : _0x4fb9("0x263"),
          "noSkins" : _0x4fb9("0x264"),
          "noNames" : "Wy\u0142\u0105cz nazwy",
          "noColors" : _0x4fb9("0x265"),
          "showMass" : "Poka\u017c mas\u0119",
          "skipStats" : _0x4fb9("0x266"),
          "showQuest" : _0x4fb9("0x267"),
          "autoZoom" : _0x4fb9("0x268"),
          "animation" : _0x4fb9("0x269"),
          "zoomSpeedValue" : _0x4fb9("0x26a"),
          "quickResp" : _0x4fb9("0x26b"),
          "autoResp" : "Auto odrodzenie",
          "autoHideCellsInfo" : _0x4fb9("0x26c"),
          "autoHideNames" : _0x4fb9("0x26d"),
          "autoHideMass" : _0x4fb9("0x26e"),
          "autoHideFood" : _0x4fb9("0x26f"),
          "autoHideFoodOnZoom" : _0x4fb9("0x270"),
          "optimizedNames" : _0x4fb9("0x271"),
          "hideMyName" : _0x4fb9("0x272"),
          "hideTeammatesNames" : _0x4fb9("0x273"),
          "optimizedMass" : _0x4fb9("0x274"),
          "shortMass" : _0x4fb9("0x275"),
          "virMassShots" : _0x4fb9("0x276"),
          "hideMyMass" : _0x4fb9("0x277"),
          "hideEnemiesMass" : "Ukryj mas\u0119 przeciwnik\u00f3w",
          "vanillaSkins" : _0x4fb9("0x278"),
          "customSkins" : "W\u0142asne skiny",
          "myTransparentSkin" : _0x4fb9("0x279"),
          "myCustomColor" : _0x4fb9("0x27a"),
          "transparentCells" : _0x4fb9("0x27b"),
          "transparentViruses" : _0x4fb9("0x27c"),
          "transparentSkins" : "Przezroczyste skiny",
          "showGrid" : _0x4fb9("0x27d"),
          "showBgSectors" : "Sektory w tle",
          "showMapBorders" : _0x4fb9("0x27e"),
          "showGhostCells" : _0x4fb9("0x27f"),
          "showMiniMap" : _0x4fb9("0x280"),
          "showMiniMapGrid" : _0x4fb9("0x281"),
          "showMiniMapGuides" : "Poka\u017c prowadnice na minimapie",
          "showMiniMapGhostCells" : _0x4fb9("0x282"),
          "oneColoredTeammates" : _0x4fb9("0x283"),
          "optimizedFood" : "Zoptymalizowany pokarm",
          "rainbowFood" : _0x4fb9("0x284"),
          "oppColors" : "Kolory przeciwnik\u00f3w",
          "oppRings" : _0x4fb9("0x285"),
          "virColors" : _0x4fb9("0x286"),
          "splitRange" : _0x4fb9("0x287"),
          "virusesRange" : _0x4fb9("0x288"),
          "textStroke" : _0x4fb9("0x289"),
          "namesStroke" : _0x4fb9("0x28a"),
          "massStroke" : _0x4fb9("0x28b"),
          "cursorTracking" : "\u015aledzenie kursora",
          "teammatesInd" : _0x4fb9("0x28c"),
          "mouseSplit" : _0x4fb9("0x28d"),
          "mouseFeed" : _0x4fb9("0x28e"),
          "mouseInvert" : _0x4fb9("0x28f"),
          "disableChat" : _0x4fb9("0x290"),
          "hideChat" : _0x4fb9("0x291"),
          "chatSounds" : "Powiadomienia d\u017awi\u0119kowe",
          "chatEmoticons" : _0x4fb9("0x292"),
          "showChatImages" : "Poka\u017c obrazki na czacie",
          "showChatVideos" : "Poka\u017c filmiki na czacie",
          "showChatBox" : _0x4fb9("0x293"),
          "messageSound" : _0x4fb9("0x294"),
          "commandSound" : _0x4fb9("0x295"),
          "showTop5" : _0x4fb9("0x296"),
          "showTargeting" : "Poka\u017c namierzanie",
          "showTime" : _0x4fb9("0x297"),
          "showLbData" : "Poka\u017c mas\u0119 w topce",
          "normalLb" : _0x4fb9("0x298"),
          "centeredLb" : _0x4fb9("0x299"),
          "fpsAtTop" : _0x4fb9("0x29a"),
          "showStats" : _0x4fb9("0x29b"),
          "showStatsMass" : _0x4fb9("0x29c"),
          "showStatsSTE" : _0x4fb9("0x29d"),
          "showStatsN16" : _0x4fb9("0x29e"),
          "showStatsFPS" : _0x4fb9("0x29f"),
          "blockPopups" : _0x4fb9("0x2a0"),
          "hotkeys" : "Skr\u00f3ty klawiszowe",
          "hk-inst-assign" : _0x4fb9("0x2a1"),
          "hk-inst-delete" : _0x4fb9("0x2a2"),
          "hk-inst-keys" : _0x4fb9("0x2a3"),
          "hk-feed" : _0x4fb9("0x2a4"),
          "hk-macroFeed" : "Szybki feed",
          "hk-split" : _0x4fb9("0x2a5"),
          "hk-doubleSplit" : _0x4fb9("0x2a6"),
          "hk-split16" : _0x4fb9("0x2a7"),
          "hk-pause" : _0x4fb9("0x2a8"),
          "hk-showTop5" : _0x4fb9("0x2a9"),
          "hk-showTime" : _0x4fb9("0x2aa"),
          "hk-showSplitRange" : _0x4fb9("0x2ab"),
          "hk-showSplitInd" : _0x4fb9("0x2ac"),
          "hk-showTeammatesInd" : _0x4fb9("0x2ad"),
          "hk-showOppColors" : _0x4fb9("0x2ae"),
          "hk-toggleSkins" : _0x4fb9("0x2af"),
          "hk-showSkins" : _0x4fb9("0x2b0"),
          "hk-transparentSkins" : _0x4fb9("0x2b1"),
          "hk-showStats" : _0x4fb9("0x2b2"),
          "hk-toggleCells" : _0x4fb9("0x2b3"),
          "hk-showFood" : "Poka\u017c/ukryj pokarm",
          "hk-showGrid" : "Poka\u017c/ukryj siatk\u0119",
          "hk-showMiniMapGuides" : _0x4fb9("0x2b4"),
          "hk-hideChat" : _0x4fb9("0x2b5"),
          "hk-showHUD" : _0x4fb9("0x2b6"),
          "hk-copyLb" : _0x4fb9("0x2b7"),
          "hk-showLb" : _0x4fb9("0x2b8"),
          "hk-toggleAutoZoom" : "W\u0142\u0105cz/wy\u0142\u0105cz auto zoom",
          "hk-resetZoom" : _0x4fb9("0x2b9"),
          "hk-zoomLevel" : _0x4fb9("0x2ba"),
          "hk-toggleDeath" : _0x4fb9("0x2bb"),
          "hk-clearChat" : _0x4fb9("0x2bc"),
          "hk-showBgSectors" : "Poka\u017c/ukryj sektory w tle",
          "hk-hideBots" : "Poka\u017c/ukryj ma\u0142e boty",
          "hk-showNames" : _0x4fb9("0x2bd"),
          "hk-hideTeammatesNames" : _0x4fb9("0x2be"),
          "hk-showMass" : "Poka\u017c/ukryj mas\u0119",
          "hk-showMiniMap" : _0x4fb9("0x2bf"),
          "hk-chatMessage" : _0x4fb9("0x2c0"),
          "hk-quickResp" : _0x4fb9("0x2c1"),
          "hk-autoResp" : _0x4fb9("0x2c2"),
          "hk-switchServerMode" : _0x4fb9("0x2c3"),
          "hk-showTargeting" : _0x4fb9("0x2c4"),
          "hk-setTargeting" : "W\u0142\u0105cz/wy\u0142\u0105cz namierzanie (\u015bledzenie)",
          "hk-cancelTargeting" : _0x4fb9("0x2c5"),
          "hk-changeTarget" : _0x4fb9("0x2c6"),
          "hk-privateMiniMap" : _0x4fb9("0x2c7"),
          "hk-showQuest" : _0x4fb9("0x2c8"),
          "commands" : _0x4fb9("0x2c9"),
          "comm1" : "Feeduj!",
          "comm2" : "Dziel si\u0119!",
          "comm3" : _0x4fb9("0x2ca"),
          "comm4" : _0x4fb9("0x2cb"),
          "comm5" : _0x4fb9("0x2cc"),
          "comm6" : _0x4fb9("0x2cd"),
          "comm7" : _0x4fb9("0x2ce"),
          "comm8" : _0x4fb9("0x2cf"),
          "comm9" : _0x4fb9("0x2d0"),
          "comm0" : _0x4fb9("0x2d1"),
          "comm10" : "Trick!",
          "comm11" : _0x4fb9("0x2d2"),
          "comm12" : _0x4fb9("0x2d3"),
          "comm13" : _0x4fb9("0x2d4"),
          "comm14" : _0x4fb9("0x2d5"),
          "saveComm" : _0x4fb9("0x2d6"),
          "theme" : "Wygl\u0105d",
          "restoreThemeSettings" : _0x4fb9("0x2d7"),
          "basicTheming" : _0x4fb9("0x2d8"),
          "themePreset" : _0x4fb9("0x2d9"),
          "themeType" : "Typ motywu",
          "darkTheme" : _0x4fb9("0x2da"),
          "lightTheme" : "Jasny motyw",
          "mainColor" : _0x4fb9("0x2db"),
          "bgColor" : "T\u0142o",
          "bordersColor" : _0x4fb9("0x27e"),
          "gridColor" : _0x4fb9("0x27d"),
          "sectorsColor" : _0x4fb9("0x2dc"),
          "namesColor" : _0x4fb9("0x2dd"),
          "namesStrokeColor" : _0x4fb9("0x28a"),
          "massColor" : _0x4fb9("0x2de"),
          "massStrokeColor" : _0x4fb9("0x28b"),
          "virusColor" : _0x4fb9("0x2df"),
          "virusStrokeColor" : "Obw\u00f3dki wirus\u00f3w",
          "foodColor" : _0x4fb9("0x25b"),
          "namesFont" : "Czcionka nazw",
          "massFont" : _0x4fb9("0x2e0"),
          "sectorsFont" : _0x4fb9("0x2dc"),
          "namesScale" : "Skala nazw",
          "massScale" : "Skala masy",
          "virMassScale" : _0x4fb9("0x2e1"),
          "strokeScale" : _0x4fb9("0x2e2"),
          "foodSize" : "Wielko\u015b\u0107 pokarmu",
          "bordersWidth" : "Grubo\u015b\u0107 granic mapy",
          "sectorsWidth" : _0x4fb9("0x2e3"),
          "sectorsFontSize" : _0x4fb9("0x2e4"),
          "cellsAlpha" : _0x4fb9("0x2e5"),
          "skinsAlpha" : _0x4fb9("0x2e6"),
          "virusAlpha" : _0x4fb9("0x2e7"),
          "textAlpha" : "Przezroczysto\u015b\u0107 nazw i masy",
          "virusStrokeSize" : _0x4fb9("0x2e8"),
          "teammatesIndColor" : _0x4fb9("0x2e9"),
          "cursorTrackingColor" : "\u015aledzenie kursora",
          "splitRangeColor" : _0x4fb9("0x287"),
          "safeAreaColor" : _0x4fb9("0x2ea"),
          "dangerAreaColor" : "Strefa zagro\u017cenia",
          "ghostCellsColor" : _0x4fb9("0x27f"),
          "ghostCellsAlpha" : "Przezroczysto\u015b\u0107 duch\u00f3w kulek",
          "menuTheming" : _0x4fb9("0x2eb"),
          "menuPreset" : _0x4fb9("0x2ec"),
          "menuMainColor" : _0x4fb9("0x2db"),
          "menuBtnTextColor" : "Tekst przycisku",
          "menuPanelColor" : _0x4fb9("0x2ed"),
          "menuPanelColor2" : _0x4fb9("0x2ee"),
          "menuTextColor" : _0x4fb9("0x2ef"),
          "menuTextColor2" : "Tekst panelu (2)",
          "btn1Color" : _0x4fb9("0x2f0"),
          "btn1Color2" : "Przycisk #1 (2)",
          "btn2Color" : _0x4fb9("0x2f1"),
          "btn2Color2" : _0x4fb9("0x2f2"),
          "btn3Color" : _0x4fb9("0x2f3"),
          "btn3Color2" : "Przycisk #3 (2)",
          "btn4Color" : _0x4fb9("0x2f4"),
          "btn4Color2" : _0x4fb9("0x2f5"),
          "menuBg" : "Grafika t\u0142a panelu",
          "menuOpacity" : "Przezroczysto\u015b\u0107",
          "hudTheming" : _0x4fb9("0x261"),
          "hudMainColor" : _0x4fb9("0x2db"),
          "hudColor" : _0x4fb9("0x2f6"),
          "hudTextColor" : "Tekst",
          "statsHudColor" : _0x4fb9("0x2f7"),
          "timeHudColor" : "Czas",
          "top5MassColor" : _0x4fb9("0x2de"),
          "lbMeColor" : _0x4fb9("0x2f8"),
          "lbTeammateColor" : _0x4fb9("0x2f9"),
          "hudFont" : _0x4fb9("0x2fa"),
          "hudScale" : _0x4fb9("0x2fb"),
          "chatTheming" : "Czat",
          "messageColor" : "T\u0142o wiadomo\u015bci",
          "messageTextColor" : "Tekst wiadomo\u015bci",
          "messageTimeColor" : _0x4fb9("0x2fc"),
          "messageNickColor" : _0x4fb9("0x2fd"),
          "commandsColor" : _0x4fb9("0x2fe"),
          "commandsTextColor" : _0x4fb9("0x2ff"),
          "commandsTimeColor" : "Czas komendy",
          "commandsNickColor" : _0x4fb9("0x300"),
          "chatBoxColor" : _0x4fb9("0x301"),
          "chatScale" : _0x4fb9("0x302"),
          "miniMapTheming" : _0x4fb9("0x25e"),
          "miniMapSectorsColor" : _0x4fb9("0x303"),
          "miniMapSectorColor" : _0x4fb9("0x304"),
          "miniMapGuidesColor" : _0x4fb9("0x305"),
          "miniMapNickColor" : "Nick",
          "miniMapNickStrokeColor" : _0x4fb9("0x306"),
          "miniMapMyCellColor" : "Moja kulka",
          "miniMapMyCellStrokeColor" : _0x4fb9("0x307"),
          "miniMapTeammatesColor" : "Gracze",
          "miniMapDeathLocationColor" : _0x4fb9("0x308"),
          "miniMapFont" : _0x4fb9("0x309"),
          "miniMapNickFont" : _0x4fb9("0x30a"),
          "miniMapWidth" : _0x4fb9("0x30b"),
          "miniMapSectorsOpacity" : "Przezroczysto\u015b\u0107 sektor\u00f3w",
          "miniMapNickSize" : _0x4fb9("0x30c"),
          "miniMapNickStrokeSize" : _0x4fb9("0x30d"),
          "miniMapMyCellSize" : _0x4fb9("0x30e"),
          "miniMapMyCellStrokeSize" : _0x4fb9("0x30f"),
          "miniMapTeammatesSize" : _0x4fb9("0x310"),
          "miniMapGhostCellsColor" : _0x4fb9("0x27f"),
          "miniMapGhostCellsAlpha" : _0x4fb9("0x311"),
          "imagesTheming" : "Grafika / kursory",
          "customBackground" : _0x4fb9("0x312"),
          "customCursor" : _0x4fb9("0x313"),
          "hideChatMsgA" : _0x4fb9("0x314"),
          "hideChatMsgB" : _0x4fb9("0x315"),
          "showSkinsMsgA" : "Skiny zosta\u0142y w\u0142\u0105czone!",
          "showSkinsMsgB" : _0x4fb9("0x316"),
          "hideSmallBotsMsgA" : "Ma\u0142e boty sta\u0142y si\u0119 widoczne!",
          "hideSmallBotsMsgB" : "Ma\u0142e boty zosta\u0142y ukryte!",
          "autoRespMsgA" : _0x4fb9("0x317"),
          "autoRespMsgB" : _0x4fb9("0x318"),
          "autoZoomMsgA" : _0x4fb9("0x319"),
          "autoZoomMsgB" : "Auto zoom zosta\u0142 wy\u0142\u0105czony!",
          "targetNotSet" : _0x4fb9("0x31a"),
          "targetDead" : _0x4fb9("0x31b"),
          "targetDistance" : "Dystans",
          "targetMass" : _0x4fb9("0x31c"),
          "totalPartyPlayers" : "Aktywnych graczy",
          "totalPartyMass" : "\u0141\u0105cznie masy",
          "exportImport" : _0x4fb9("0x31d"),
          "exportSettings" : _0x4fb9("0x31e"),
          "exportInfo" : "Aby wyeksportowa\u0107 wybrane ustawienia skopiuj poni\u017cszy kod i zapisz go w pliku tekstowym z kodowaniem Unicode.",
          "importSettings" : "Importuj ustawienia",
          "importInfo" : _0x4fb9("0x31f"),
          "profile" : _0x4fb9("0x320"),
          "profiles" : _0x4fb9("0x321"),
          "skins" : "Skiny",
          "moreSkins" : _0x4fb9("0x322"),
          "thanks" : _0x4fb9("0x323"),
          "saveSett" : _0x4fb9("0x324"),
          "saved" : "Zapisano!",
          "resetSett" : _0x4fb9("0x325"),
          "close" : _0x4fb9("0x326"),
          "enterChatMsg" : _0x4fb9("0x327"),
          "activeParties" : _0x4fb9("0x328"),
          "noActiveParties" : _0x4fb9("0x329"),
          "playlist" : _0x4fb9("0x32a"),
          "pause" : _0x4fb9("0x32b"),
          "visit" : _0x4fb9("0x32c"),
          "exit" : "OGARio by szymy: Czy na pewno chcesz opu\u015bcic gr\u0119?",
          "blockWarn" : _0x4fb9("0x32d"),
          "unblockPopups" : _0x4fb9("0x32e"),
          "mass" : _0x4fb9("0x2de"),
          "score" : _0x4fb9("0x32f"),
          "leaderboard" : _0x4fb9("0x330"),
          "user" : _0x4fb9("0x331"),
          "userMuted" : _0x4fb9("0x332"),
          "userUnmuted" : _0x4fb9("0x333"),
          "mute" : _0x4fb9("0x334"),
          "unmute" : "Wy\u0142\u0105cz wyciszenie",
          "mutedUsers" : _0x4fb9("0x335"),
          "activeUsers" : _0x4fb9("0x336"),
          "showActiveUsers" : "Poka\u017c aktywnych u\u017cytkownik\u00f3w",
          "none" : _0x4fb9("0x337"),
          "sounds" : "D\u017awi\u0119ki",
          "page_back_button" : _0x4fb9("0x338"),
          "page_create_party" : _0x4fb9("0x339"),
          "page_join_party" : _0x4fb9("0x33a"),
          "page_login_and_play" : _0x4fb9("0x33b"),
          "page_logout" : _0x4fb9("0x33c"),
          "page_menu_login_facebook" : _0x4fb9("0x33d"),
          "page_menu_login_google" : "Zaloguj z Google",
          "page_menu_main_free_coins" : _0x4fb9("0x33e"),
          "page_menu_main_gifts" : "Prezenty",
          "page_menu_main_dailyquests" : _0x4fb9("0x33f"),
          "page_party_join_error" : "Nie mo\u017cna do\u0142\u0105czy\u0107 do tego party. Upewnij si\u0119, \u017ce token jest prawid\u0142owy lub stw\u00f3rz nowy.",
          "page_play" : _0x4fb9("0x340"),
          "page_play_as_guest" : _0x4fb9("0x341"),
          "page_shop" : _0x4fb9("0x342"),
          "page_spectate" : _0x4fb9("0x343"),
          "page_stats" : _0x4fb9("0x2f7")
        },
        "en" : {
          "start" : _0x4fb9("0x344"),
          "settings" : _0x4fb9("0x345"),
          "restoreSettings" : _0x4fb9("0x346"),
          "animationGroup" : _0x4fb9("0x347"),
          "zoomGroup" : _0x4fb9("0x258"),
          "respGroup" : _0x4fb9("0x348"),
          "namesGroup" : _0x4fb9("0x349"),
          "massGroup" : "Mass",
          "skinsGroup" : _0x4fb9("0x34a"),
          "foodGroup" : _0x4fb9("0x34b"),
          "transparencyGroup" : "Transparency / colors",
          "gridGroup" : "Grid / sectors",
          "miniMapGroup" : _0x4fb9("0x34c"),
          "helpersGroup" : _0x4fb9("0x34d"),
          "mouseGroup" : _0x4fb9("0x34e"),
          "hudGroup" : _0x4fb9("0x261"),
          "chatGroup" : _0x4fb9("0x34f"),
          "statsGroup" : _0x4fb9("0x350"),
          "extrasGroup" : _0x4fb9("0x351"),
          "noSkins" : _0x4fb9("0x352"),
          "noNames" : "No names",
          "noColors" : "No colors",
          "showMass" : _0x4fb9("0x353"),
          "skipStats" : "Skip stats after death",
          "showQuest" : _0x4fb9("0x354"),
          "autoZoom" : _0x4fb9("0x268"),
          "animation" : _0x4fb9("0x355"),
          "zoomSpeedValue" : _0x4fb9("0x356"),
          "quickResp" : _0x4fb9("0x357"),
          "autoResp" : _0x4fb9("0x358"),
          "autoHideCellsInfo" : _0x4fb9("0x359"),
          "autoHideNames" : _0x4fb9("0x35a"),
          "autoHideMass" : _0x4fb9("0x35b"),
          "autoHideFood" : _0x4fb9("0x35c"),
          "autoHideFoodOnZoom" : "Auto hide food (zoom)",
          "optimizedNames" : _0x4fb9("0x35d"),
          "hideMyName" : _0x4fb9("0x35e"),
          "hideTeammatesNames" : _0x4fb9("0x35f"),
          "optimizedMass" : _0x4fb9("0x360"),
          "shortMass" : _0x4fb9("0x361"),
          "virMassShots" : _0x4fb9("0x362"),
          "hideMyMass" : _0x4fb9("0x363"),
          "hideEnemiesMass" : _0x4fb9("0x364"),
          "vanillaSkins" : _0x4fb9("0x365"),
          "customSkins" : _0x4fb9("0x366"),
          "myTransparentSkin" : _0x4fb9("0x367"),
          "myCustomColor" : _0x4fb9("0x368"),
          "transparentCells" : _0x4fb9("0x369"),
          "transparentViruses" : "Transparent viruses",
          "transparentSkins" : "Transparent skins",
          "showGrid" : "Show grid",
          "showBgSectors" : _0x4fb9("0x36a"),
          "showMapBorders" : _0x4fb9("0x36b"),
          "showGhostCells" : _0x4fb9("0x36c"),
          "showMiniMap" : _0x4fb9("0x36d"),
          "showMiniMapGrid" : _0x4fb9("0x36e"),
          "showMiniMapGuides" : _0x4fb9("0x36f"),
          "showMiniMapGhostCells" : _0x4fb9("0x370"),
          "oneColoredTeammates" : "One-colored teammates",
          "optimizedFood" : _0x4fb9("0x371"),
          "rainbowFood" : _0x4fb9("0x372"),
          "oppColors" : _0x4fb9("0x373"),
          "oppRings" : _0x4fb9("0x374"),
          "virColors" : _0x4fb9("0x375"),
          "splitRange" : _0x4fb9("0x376"),
          "virusesRange" : "Viruses range",
          "textStroke" : _0x4fb9("0x377"),
          "namesStroke" : "Names stroke",
          "massStroke" : _0x4fb9("0x378"),
          "cursorTracking" : "Cursor tracking",
          "teammatesInd" : _0x4fb9("0x379"),
          "mouseSplit" : _0x4fb9("0x37a"),
          "mouseFeed" : _0x4fb9("0x37b"),
          "mouseInvert" : _0x4fb9("0x37c"),
          "disableChat" : "Disable chat",
          "hideChat" : _0x4fb9("0x37d"),
          "chatSounds" : _0x4fb9("0x37e"),
          "chatEmoticons" : _0x4fb9("0x37f"),
          "showChatImages" : "Show images on chat",
          "showChatVideos" : _0x4fb9("0x380"),
          "showChatBox" : _0x4fb9("0x381"),
          "messageSound" : _0x4fb9("0x382"),
          "commandSound" : _0x4fb9("0x383"),
          "showTop5" : "Show team top 5",
          "showTargeting" : _0x4fb9("0x384"),
          "showTime" : "Show current time",
          "showLbData" : _0x4fb9("0x385"),
          "normalLb" : _0x4fb9("0x386"),
          "centeredLb" : _0x4fb9("0x387"),
          "fpsAtTop" : _0x4fb9("0x388"),
          "showStats" : _0x4fb9("0x389"),
          "showStatsMass" : _0x4fb9("0x38a"),
          "showStatsSTE" : _0x4fb9("0x38b"),
          "showStatsN16" : _0x4fb9("0x38c"),
          "showStatsFPS" : _0x4fb9("0x38d"),
          "blockPopups" : _0x4fb9("0x38e"),
          "hotkeys" : "Hotkeys",
          "hk-inst-assign" : _0x4fb9("0x38f"),
          "hk-inst-delete" : _0x4fb9("0x390"),
          "hk-inst-keys" : _0x4fb9("0x391"),
          "hk-feed" : "Feed",
          "hk-macroFeed" : "Macro feed",
          "hk-split" : _0x4fb9("0x392"),
          "hk-doubleSplit" : _0x4fb9("0x393"),
          "hk-split16" : _0x4fb9("0x394"),
          "hk-pause" : _0x4fb9("0x395"),
          "hk-showTop5" : _0x4fb9("0x396"),
          "hk-showTime" : _0x4fb9("0x397"),
          "hk-showSplitRange" : _0x4fb9("0x398"),
          "hk-showSplitInd" : "Show/hide split indicators",
          "hk-showTeammatesInd" : "Show/hide teammates indicators",
          "hk-showOppColors" : _0x4fb9("0x399"),
          "hk-toggleSkins" : "Toggle skins (custom/default)",
          "hk-showSkins" : _0x4fb9("0x39a"),
          "hk-transparentSkins" : "Toggle transparent skins",
          "hk-showStats" : _0x4fb9("0x39b"),
          "hk-toggleCells" : _0x4fb9("0x39c"),
          "hk-showFood" : _0x4fb9("0x39d"),
          "hk-showGrid" : _0x4fb9("0x39e"),
          "hk-showMiniMapGuides" : "Show/hide minimap guides",
          "hk-hideChat" : _0x4fb9("0x39f"),
          "hk-showHUD" : _0x4fb9("0x3a0"),
          "hk-copyLb" : _0x4fb9("0x3a1"),
          "hk-showLb" : "Show/hide leaderboard",
          "hk-toggleAutoZoom" : _0x4fb9("0x3a2"),
          "hk-resetZoom" : _0x4fb9("0x3a3"),
          "hk-zoomLevel" : "Zoom level",
          "hk-toggleDeath" : _0x4fb9("0x3a4"),
          "hk-clearChat" : _0x4fb9("0x3a5"),
          "hk-showBgSectors" : _0x4fb9("0x3a6"),
          "hk-hideBots" : _0x4fb9("0x3a7"),
          "hk-showNames" : "Show/hide names",
          "hk-hideTeammatesNames" : _0x4fb9("0x3a8"),
          "hk-showMass" : _0x4fb9("0x3a9"),
          "hk-showMiniMap" : "Show/hide minimap",
          "hk-chatMessage" : _0x4fb9("0x3aa"),
          "hk-quickResp" : _0x4fb9("0x3ab"),
          "hk-autoResp" : _0x4fb9("0x3ac"),
          "hk-switchServerMode" : _0x4fb9("0x3ad"),
          "hk-showTargeting" : "Show/hide targeting panel",
          "hk-setTargeting" : _0x4fb9("0x3ae"),
          "hk-cancelTargeting" : "Cancel targeting",
          "hk-changeTarget" : "Change target",
          "hk-privateMiniMap" : "Show target on the minimap",
          "hk-showQuest" : "Show/hide quest",
          "commands" : _0x4fb9("0x3af"),
          "comm1" : _0x4fb9("0x3b0"),
          "comm2" : _0x4fb9("0x3b1"),
          "comm3" : "Need backup at %currentSector%!",
          "comm4" : "Enemy spotted at %currentSector%!",
          "comm5" : _0x4fb9("0x3b2"),
          "comm6" : "Tank the virus!",
          "comm7" : _0x4fb9("0x3b3"),
          "comm8" : _0x4fb9("0x3b4"),
          "comm9" : _0x4fb9("0x3b5"),
          "comm0" : _0x4fb9("0x3b6"),
          "comm10" : _0x4fb9("0x3b7"),
          "comm11" : _0x4fb9("0x3b8"),
          "comm12" : _0x4fb9("0x3b9"),
          "comm13" : "Right!",
          "comm14" : "Bottom!",
          "saveComm" : "Save commands",
          "theme" : _0x4fb9("0x3ba"),
          "restoreThemeSettings" : _0x4fb9("0x3bb"),
          "basicTheming" : "Basic theming",
          "themePreset" : _0x4fb9("0x3bc"),
          "themeType" : "Theme type",
          "darkTheme" : "Dark theme",
          "lightTheme" : _0x4fb9("0x3bd"),
          "mainColor" : "Main color",
          "bgColor" : _0x4fb9("0x3be"),
          "bordersColor" : "Map borders",
          "gridColor" : _0x4fb9("0x3bf"),
          "sectorsColor" : _0x4fb9("0x3c0"),
          "namesColor" : _0x4fb9("0x349"),
          "namesStrokeColor" : _0x4fb9("0x3c1"),
          "massColor" : "Mass",
          "massStrokeColor" : _0x4fb9("0x378"),
          "virusColor" : _0x4fb9("0x3c2"),
          "virusStrokeColor" : _0x4fb9("0x3c3"),
          "foodColor" : _0x4fb9("0x34b"),
          "namesFont" : "Names font",
          "massFont" : _0x4fb9("0x3c4"),
          "sectorsFont" : "Sectors font",
          "namesScale" : _0x4fb9("0x3c5"),
          "massScale" : "Mass scale",
          "virMassScale" : "Virus mass scale",
          "strokeScale" : _0x4fb9("0x3c6"),
          "foodSize" : _0x4fb9("0x3c7"),
          "bordersWidth" : "Map borders width",
          "sectorsWidth" : _0x4fb9("0x3c8"),
          "sectorsFontSize" : _0x4fb9("0x3c9"),
          "cellsAlpha" : _0x4fb9("0x3ca"),
          "skinsAlpha" : "Skins transparency",
          "virusAlpha" : _0x4fb9("0x3cb"),
          "textAlpha" : _0x4fb9("0x3cc"),
          "virusStrokeSize" : _0x4fb9("0x3cd"),
          "teammatesIndColor" : _0x4fb9("0x3ce"),
          "cursorTrackingColor" : _0x4fb9("0x3cf"),
          "splitRangeColor" : _0x4fb9("0x376"),
          "safeAreaColor" : _0x4fb9("0x3d0"),
          "dangerAreaColor" : _0x4fb9("0x3d1"),
          "ghostCellsColor" : _0x4fb9("0x36c"),
          "ghostCellsAlpha" : "Ghost cells transparency",
          "menuTheming" : _0x4fb9("0x2eb"),
          "menuPreset" : _0x4fb9("0x3d2"),
          "menuMainColor" : _0x4fb9("0x3d3"),
          "menuBtnTextColor" : _0x4fb9("0x3d4"),
          "menuPanelColor" : _0x4fb9("0x2ed"),
          "menuPanelColor2" : _0x4fb9("0x2ee"),
          "menuTextColor" : "Panel text",
          "menuTextColor2" : _0x4fb9("0x3d5"),
          "btn1Color" : _0x4fb9("0x3d6"),
          "btn1Color2" : _0x4fb9("0x3d7"),
          "btn2Color" : "Button #2",
          "btn2Color2" : _0x4fb9("0x3d8"),
          "btn3Color" : _0x4fb9("0x3d9"),
          "btn3Color2" : _0x4fb9("0x3da"),
          "btn4Color" : _0x4fb9("0x3db"),
          "btn4Color2" : _0x4fb9("0x3dc"),
          "menuBg" : "Panel background image",
          "menuOpacity" : _0x4fb9("0x3dd"),
          "hudTheming" : _0x4fb9("0x261"),
          "hudMainColor" : _0x4fb9("0x3d3"),
          "hudColor" : "Background",
          "hudTextColor" : _0x4fb9("0x3de"),
          "statsHudColor" : _0x4fb9("0x350"),
          "timeHudColor" : "Time",
          "top5MassColor" : _0x4fb9("0x3df"),
          "lbMeColor" : _0x4fb9("0x3e0"),
          "lbTeammateColor" : _0x4fb9("0x3e1"),
          "hudFont" : _0x4fb9("0x3e2"),
          "hudScale" : _0x4fb9("0x3e3"),
          "chatTheming" : _0x4fb9("0x34f"),
          "messageColor" : "Message background",
          "messageTextColor" : "Message text",
          "messageTimeColor" : _0x4fb9("0x3e4"),
          "messageNickColor" : _0x4fb9("0x3e5"),
          "commandsColor" : _0x4fb9("0x3e6"),
          "commandsTextColor" : "Command text",
          "commandsTimeColor" : _0x4fb9("0x3e7"),
          "commandsNickColor" : _0x4fb9("0x3e8"),
          "chatBoxColor" : _0x4fb9("0x3e9"),
          "chatScale" : _0x4fb9("0x3ea"),
          "miniMapTheming" : _0x4fb9("0x34c"),
          "miniMapSectorsColor" : _0x4fb9("0x3eb"),
          "miniMapSectorColor" : _0x4fb9("0x3ec"),
          "miniMapGuidesColor" : _0x4fb9("0x3ed"),
          "miniMapNickColor" : _0x4fb9("0x3ee"),
          "miniMapNickStrokeColor" : _0x4fb9("0x3ef"),
          "miniMapMyCellColor" : _0x4fb9("0x3f0"),
          "miniMapMyCellStrokeColor" : _0x4fb9("0x3f1"),
          "miniMapTeammatesColor" : _0x4fb9("0x3f2"),
          "miniMapDeathLocationColor" : _0x4fb9("0x3f3"),
          "miniMapFont" : _0x4fb9("0x3f4"),
          "miniMapNickFont" : _0x4fb9("0x3f5"),
          "miniMapWidth" : _0x4fb9("0x3f6"),
          "miniMapSectorsOpacity" : _0x4fb9("0x3f7"),
          "miniMapNickSize" : "Nick size",
          "miniMapNickStrokeSize" : "Nick stroke size",
          "miniMapMyCellSize" : _0x4fb9("0x3f8"),
          "miniMapMyCellStrokeSize" : _0x4fb9("0x3f9"),
          "miniMapTeammatesSize" : "Teammates size",
          "miniMapGhostCellsColor" : _0x4fb9("0x36c"),
          "miniMapGhostCellsAlpha" : _0x4fb9("0x3fa"),
          "imagesTheming" : _0x4fb9("0x3fb"),
          "customBackground" : _0x4fb9("0x3fc"),
          "customCursor" : _0x4fb9("0x3fd"),
          "hideChatMsgA" : _0x4fb9("0x3fe"),
          "hideChatMsgB" : _0x4fb9("0x3ff"),
          "showSkinsMsgA" : _0x4fb9("0x400"),
          "showSkinsMsgB" : _0x4fb9("0x401"),
          "hideSmallBotsMsgA" : _0x4fb9("0x402"),
          "hideSmallBotsMsgB" : _0x4fb9("0x403"),
          "autoRespMsgA" : _0x4fb9("0x404"),
          "autoRespMsgB" : _0x4fb9("0x405"),
          "autoZoomMsgA" : _0x4fb9("0x406"),
          "autoZoomMsgB" : _0x4fb9("0x407"),
          "targetNotSet" : _0x4fb9("0x408"),
          "targetDead" : "Dead",
          "targetDistance" : "Distance",
          "targetMass" : _0x4fb9("0x409"),
          "totalPartyPlayers" : _0x4fb9("0x40a"),
          "totalPartyMass" : _0x4fb9("0x40b"),
          "exportImport" : _0x4fb9("0x40c"),
          "exportSettings" : "Export settings",
          "exportInfo" : "To export selected settings copy the code below and save it to a text file encoded in Unicode.",
          "importSettings" : _0x4fb9("0x40d"),
          "importInfo" : _0x4fb9("0x40e"),
          "profile" : _0x4fb9("0x321"),
          "profiles" : "Profiles",
          "skins" : _0x4fb9("0x34a"),
          "moreSkins" : _0x4fb9("0x40f"),
          "thanks" : _0x4fb9("0x410"),
          "saveSett" : "Save settings",
          "saved" : _0x4fb9("0x411"),
          "resetSett" : _0x4fb9("0x412"),
          "close" : _0x4fb9("0x413"),
          "enterChatMsg" : _0x4fb9("0x3aa"),
          "activeParties" : _0x4fb9("0x414"),
          "noActiveParties" : _0x4fb9("0x415"),
          "playlist" : _0x4fb9("0x416"),
          "pause" : _0x4fb9("0x417"),
          "visit" : "Visit",
          "exit" : "OGARio by szymy: Are you sure you want to quit the game?",
          "blockWarn" : _0x4fb9("0x418"),
          "unblockPopups" : _0x4fb9("0x419"),
          "mass" : "Mass",
          "score" : _0x4fb9("0x41a"),
          "leaderboard" : _0x4fb9("0x41b"),
          "user" : "User",
          "userMuted" : "User %user% has been muted.",
          "userUnmuted" : _0x4fb9("0x41c"),
          "mute" : _0x4fb9("0x41d"),
          "unmute" : "Unmute",
          "mutedUsers" : _0x4fb9("0x41e"),
          "activeUsers" : _0x4fb9("0x41f"),
          "showActiveUsers" : _0x4fb9("0x420"),
          "none" : _0x4fb9("0x421"),
          "sounds" : _0x4fb9("0x422"),
          "page_menu_main_free_coins" : "Free Coins",
          "page_menu_main_gifts" : "Gifts",
          "page_menu_main_dailyquests" : _0x4fb9("0x423"),
          "page_shop" : _0x4fb9("0x424")
        }
      };
      var loc = "en";
      var string = window[_0x4fb9("0x425")][_0x4fb9("0x426")] || window[_0x4fb9("0x425")]["userLanguage"];
      if (string && translations[_0x4fb9("0x122")](string)) {
        loc = string;
      }
      var messages = translations[loc];
      var store = {
        "comm1" : messages[_0x4fb9("0x427")],
        "comm2" : messages[_0x4fb9("0x428")],
        "comm3" : messages[_0x4fb9("0x429")],
        "comm4" : messages[_0x4fb9("0x42a")],
        "comm5" : messages[_0x4fb9("0x42b")],
        "comm6" : messages[_0x4fb9("0x42c")],
        "comm7" : messages[_0x4fb9("0x42d")],
        "comm8" : messages[_0x4fb9("0x42e")],
        "comm9" : messages["comm9"],
        "comm0" : messages["comm0"],
        "comm10" : messages[_0x4fb9("0x42f")],
        "comm11" : messages[_0x4fb9("0x430")],
        "comm12" : messages[_0x4fb9("0x431")],
        "comm13" : messages[_0x4fb9("0x432")],
        "comm14" : messages[_0x4fb9("0x433")]
      };
      var entityMap = {
        "&" : _0x4fb9("0x434"),
        "<" : _0x4fb9("0x435"),
        ">" : _0x4fb9("0x436"),
        '"' : _0x4fb9("0x437"),
        "'" : "&#39;",
        "/" : _0x4fb9("0x438")
      };
      var folder = {
        ":)" : _0x4fb9("0x439"),
        ";)" : _0x4fb9("0x43a"),
        "=)" : "smirk.svg",
        ":D" : _0x4fb9("0x43b"),
        "X-D" : _0x4fb9("0x43c"),
        "=D" : _0x4fb9("0x43d"),
        ":(" : "sad.svg",
        ";(" : _0x4fb9("0x43e"),
        ":P" : _0x4fb9("0x43f"),
        ";P" : "tonguew.svg",
        ":*" : "kiss.svg",
        "$)" : "smileh.svg",
        "<3" : _0x4fb9("0x440"),
        "8=)" : "cool.svg",
        ":o" : _0x4fb9("0x441"),
        "(:|" : _0x4fb9("0x442"),
        ":|" : _0x4fb9("0x443"),
        ":\\" : "unamused.svg",
        ":@" : "pouting.svg",
        "|-)" : "sleep.svg",
        "^_^" : "relaxed.svg",
        "-_-" : _0x4fb9("0x444"),
        "$_$" : _0x4fb9("0x445"),
        "O:)" : _0x4fb9("0x446"),
        "3:)" : _0x4fb9("0x447"),
        "(poop)" : _0x4fb9("0x448"),
        "(fuck)" : "finger.svg",
        "(clap)" : _0x4fb9("0x449"),
        "(ok)" : _0x4fb9("0x44a"),
        "(victory)" : "victory.svg",
        "(y)" : "thumb.svg",
        "(n)" : _0x4fb9("0x44b")
      };
      var fftBinsOfFreq = [{
        "name" : _0x4fb9("0x44c"),
        "url" : _0x4fb9("0x44d"),
        "example" : _0x4fb9("0x44e"),
        "pattern" : _0x4fb9("0x44f")
      }, {
        "name" : _0x4fb9("0x450"),
        "url" : "https://put.re/",
        "example" : "https://s.put.re/iYHAW65g.png",
        "pattern" : _0x4fb9("0x451")
      }, {
        "name" : _0x4fb9("0x452"),
        "url" : _0x4fb9("0x453"),
        "example" : "https://i.postimg.cc/zzK0sRPg/xdmUp5N.png",
        "pattern" : "https?:\\/\\/\\w+\\.postimg\\.cc\\/\\w{8,}\\/\\w+\\.(?:%file_ext%)"
      }];
      var artistTrack = {
        "ogario-v3" : {
          "name" : _0x4fb9("0x454"),
          "darkTheme" : !![],
          "mainColor" : "#01d9cc",
          "bgColor" : "#000a11",
          "bordersColor" : _0x4fb9("0x455"),
          "gridColor" : _0x4fb9("0x456"),
          "sectorsColor" : _0x4fb9("0x456"),
          "namesColor" : "#ffffff",
          "namesStrokeColor" : _0x4fb9("0x457"),
          "massColor" : _0x4fb9("0x458"),
          "massStrokeColor" : "#000000",
          "virusColor" : _0x4fb9("0x459"),
          "virusStrokeColor" : _0x4fb9("0x45a"),
          "foodColor" : _0x4fb9("0x45b"),
          "teammatesIndColor" : _0x4fb9("0x458"),
          "cursorTrackingColor" : _0x4fb9("0x458"),
          "splitRangeColor" : _0x4fb9("0x458"),
          "safeAreaColor" : _0x4fb9("0x458"),
          "dangerAreaColor" : _0x4fb9("0x45c"),
          "namesFont" : "ubuntu-bold",
          "massFont" : _0x4fb9("0x45d"),
          "sectorsFont" : "ubuntu",
          "namesScale" : 1,
          "massScale" : 3,
          "foodSize" : 5,
          "bordersWidth" : 40,
          "sectorsWidth" : 40,
          "sectorsFontSize" : 1200,
          "cellsAlpha" : .9,
          "skinsAlpha" : .7,
          "virusAlpha" : .6,
          "textAlpha" : 1,
          "virusStrokeSize" : 14,
          "menuPreset" : _0x4fb9("0x45e"),
          "menuMainColor" : _0x4fb9("0x455"),
          "menuBtnTextColor" : _0x4fb9("0x458"),
          "menuPanelColor" : _0x4fb9("0x456"),
          "menuPanelColor2" : "#002f52",
          "menuTextColor" : _0x4fb9("0x458"),
          "menuTextColor2" : _0x4fb9("0x45f"),
          "btn1Color" : _0x4fb9("0x460"),
          "btn1Color2" : "#0176ce",
          "btn2Color" : _0x4fb9("0x45a"),
          "btn2Color2" : _0x4fb9("0x461"),
          "btn3Color" : "#8d5fe6",
          "btn3Color2" : _0x4fb9("0x462"),
          "btn4Color" : _0x4fb9("0x45c"),
          "btn4Color2" : "#a80096",
          "menuBg" : _0x4fb9("0x463"),
          "menuOpacity" : .96,
          "hudMainColor" : _0x4fb9("0x455"),
          "hudColor" : _0x4fb9("0x464"),
          "hudTextColor" : _0x4fb9("0x458"),
          "statsHudColor" : _0x4fb9("0x458"),
          "timeHudColor" : _0x4fb9("0x455"),
          "top5MassColor" : "#bf00aa",
          "lbMeColor" : "#bf00aa",
          "lbTeammateColor" : _0x4fb9("0x460"),
          "hudFont" : "ubuntu-bold",
          "hudScale" : 1,
          "messageColor" : _0x4fb9("0x464"),
          "messageTextColor" : _0x4fb9("0x458"),
          "messageTimeColor" : "#018cf6",
          "messageNickColor" : _0x4fb9("0x455"),
          "commandsColor" : "rgba(191,0,170,0.9)",
          "commandsTextColor" : _0x4fb9("0x458"),
          "commandsTimeColor" : _0x4fb9("0x45c"),
          "commandsNickColor" : _0x4fb9("0x458"),
          "chatBoxColor" : "rgba(0,0,0,0.4)",
          "chatScale" : 1,
          "miniMapSectorsColor" : "#ffffff",
          "miniMapSectorColor" : _0x4fb9("0x455"),
          "miniMapGuidesColor" : _0x4fb9("0x45c"),
          "miniMapNickColor" : _0x4fb9("0x458"),
          "miniMapNickStrokeColor" : "#000000",
          "miniMapMyCellColor" : _0x4fb9("0x458"),
          "miniMapMyCellStrokeColor" : _0x4fb9("0x45c"),
          "miniMapTeammatesColor" : _0x4fb9("0x455"),
          "miniMapDeathLocationColor" : _0x4fb9("0x45c"),
          "miniMapFont" : _0x4fb9("0x45d"),
          "miniMapNickFont" : _0x4fb9("0x45d"),
          "miniMapWidth" : 240,
          "miniMapSectorsOpacity" : .1,
          "miniMapNickSize" : 11,
          "miniMapNickStrokeSize" : 2,
          "miniMapMyCellSize" : 7.5,
          "miniMapMyCellStrokeSize" : 4,
          "miniMapTeammatesSize" : 5.5,
          "customBackground" : "",
          "customCursor" : _0x4fb9("0x465")
        },
        "ogario-orange" : {
          "name" : _0x4fb9("0x466"),
          "darkTheme" : !![],
          "mainColor" : _0x4fb9("0x467"),
          "bgColor" : _0x4fb9("0x468"),
          "bordersColor" : _0x4fb9("0x467"),
          "gridColor" : "#292929",
          "sectorsColor" : _0x4fb9("0x469"),
          "namesColor" : "#ffffff",
          "namesStrokeColor" : _0x4fb9("0x457"),
          "massColor" : _0x4fb9("0x458"),
          "massStrokeColor" : "#000000",
          "virusColor" : _0x4fb9("0x46a"),
          "virusStrokeColor" : _0x4fb9("0x46a"),
          "foodColor" : _0x4fb9("0x46b"),
          "hudMainColor" : "#ff7800",
          "statsHudColor" : _0x4fb9("0x467"),
          "top5MassColor" : _0x4fb9("0x467"),
          "timeHudColor" : _0x4fb9("0x467"),
          "messageNickColor" : _0x4fb9("0x467"),
          "commandsColor" : _0x4fb9("0x46c"),
          "commandsTimeColor" : _0x4fb9("0x467"),
          "commandsTextColor" : _0x4fb9("0x458"),
          "miniMapSectorsColor" : _0x4fb9("0x458"),
          "miniMapSectorColor" : _0x4fb9("0x467"),
          "miniMapGuidesColor" : _0x4fb9("0x467"),
          "miniMapMyCellColor" : _0x4fb9("0x458"),
          "miniMapMyCellStrokeColor" : _0x4fb9("0x467"),
          "miniMapTeammatesColor" : "#ff7800",
          "miniMapDeathLocationColor" : _0x4fb9("0x467"),
          "miniMapSectorsOpacity" : .1
        },
        "ogario-gold" : {
          "name" : _0x4fb9("0x46d"),
          "darkTheme" : !![],
          "mainColor" : _0x4fb9("0x46e"),
          "bgColor" : _0x4fb9("0x457"),
          "bordersColor" : _0x4fb9("0x46e"),
          "gridColor" : _0x4fb9("0x468"),
          "sectorsColor" : _0x4fb9("0x468"),
          "namesColor" : "#ffffff",
          "namesStrokeColor" : _0x4fb9("0x457"),
          "massColor" : _0x4fb9("0x458"),
          "massStrokeColor" : "#000000",
          "virusColor" : _0x4fb9("0x46a"),
          "virusStrokeColor" : "#666666",
          "foodColor" : _0x4fb9("0x46f"),
          "hudMainColor" : "#b5a642",
          "statsHudColor" : _0x4fb9("0x46e"),
          "top5MassColor" : _0x4fb9("0x46e"),
          "timeHudColor" : "#b5a642",
          "messageNickColor" : "#b5a642",
          "commandsColor" : "rgba(181,166,66,0.9)",
          "commandsTimeColor" : _0x4fb9("0x46e"),
          "commandsTextColor" : _0x4fb9("0x458"),
          "miniMapSectorsColor" : _0x4fb9("0x458"),
          "miniMapSectorColor" : _0x4fb9("0x46e"),
          "miniMapGuidesColor" : _0x4fb9("0x46e"),
          "miniMapMyCellColor" : _0x4fb9("0x458"),
          "miniMapMyCellStrokeColor" : _0x4fb9("0x46e"),
          "miniMapTeammatesColor" : _0x4fb9("0x46e"),
          "miniMapDeathLocationColor" : _0x4fb9("0x46e"),
          "miniMapSectorsOpacity" : .1
        },
        "sniikz-style" : {
          "name" : _0x4fb9("0x470"),
          "darkTheme" : !![],
          "mainColor" : _0x4fb9("0x455"),
          "bgColor" : _0x4fb9("0x457"),
          "bordersColor" : "#ffffff",
          "gridColor" : _0x4fb9("0x456"),
          "sectorsColor" : "#00243e",
          "namesColor" : _0x4fb9("0x458"),
          "namesStrokeColor" : "#000000",
          "massColor" : "#ffffff",
          "massStrokeColor" : _0x4fb9("0x457"),
          "virusColor" : "#3b3b3b",
          "virusStrokeColor" : _0x4fb9("0x458"),
          "foodColor" : _0x4fb9("0x45b"),
          "teammatesIndColor" : _0x4fb9("0x458"),
          "cursorTrackingColor" : _0x4fb9("0x458"),
          "splitRangeColor" : "#ffffff",
          "safeAreaColor" : _0x4fb9("0x458"),
          "dangerAreaColor" : "#bf00aa",
          "massScale" : 4,
          "foodSize" : 1,
          "bordersWidth" : 40,
          "sectorsWidth" : 40,
          "sectorsFontSize" : 1200,
          "cellsAlpha" : .99,
          "skinsAlpha" : .7,
          "virusAlpha" : .4,
          "virusStrokeSize" : 10,
          "menuPreset" : _0x4fb9("0x45e"),
          "menuMainColor" : _0x4fb9("0x471"),
          "menuBtnTextColor" : _0x4fb9("0x458"),
          "menuPanelColor" : "#050008",
          "menuPanelColor2" : _0x4fb9("0x472"),
          "menuTextColor" : _0x4fb9("0x458"),
          "menuTextColor2" : _0x4fb9("0x473"),
          "btn1Color" : "#4f0242",
          "btn1Color2" : _0x4fb9("0x474"),
          "btn2Color" : _0x4fb9("0x475"),
          "btn2Color2" : _0x4fb9("0x476"),
          "btn3Color" : _0x4fb9("0x477"),
          "btn3Color2" : _0x4fb9("0x478"),
          "btn4Color" : _0x4fb9("0x477"),
          "btn4Color2" : "#8a063f",
          "menuBg" : _0x4fb9("0x463"),
          "menuOpacity" : 1,
          "hudMainColor" : "#5974ff",
          "hudColor" : "rgba(36,36,36,0.49)",
          "hudTextColor" : _0x4fb9("0x458"),
          "statsHudColor" : _0x4fb9("0x458"),
          "timeHudColor" : "#737373",
          "top5MassColor" : _0x4fb9("0x479"),
          "lbMeColor" : "#bf00aa",
          "lbTeammateColor" : _0x4fb9("0x460"),
          "hudScale" : 1.15,
          "messageColor" : "rgba(0,0,0,0.4)",
          "messageTextColor" : _0x4fb9("0x47a"),
          "messageTimeColor" : "#545454",
          "messageNickColor" : "#05ff00",
          "commandsColor" : _0x4fb9("0x47b"),
          "commandsTextColor" : _0x4fb9("0x458"),
          "commandsTimeColor" : "#545454",
          "commandsNickColor" : _0x4fb9("0x458"),
          "chatBoxColor" : _0x4fb9("0x464"),
          "chatScale" : 1,
          "miniMapSectorsColor" : "#ffffff",
          "miniMapSectorColor" : _0x4fb9("0x457"),
          "miniMapGuidesColor" : _0x4fb9("0x47c"),
          "miniMapNickColor" : _0x4fb9("0x458"),
          "miniMapNickStrokeColor" : _0x4fb9("0x47d"),
          "miniMapMyCellColor" : "#f0ff3d",
          "miniMapMyCellStrokeColor" : _0x4fb9("0x47e"),
          "miniMapTeammatesColor" : "#305eff",
          "miniMapDeathLocationColor" : "#2b2b2b",
          "miniMapWidth" : 250,
          "miniMapSectorsOpacity" : .1,
          "miniMapNickSize" : 9,
          "miniMapNickStrokeSize" : 0,
          "miniMapMyCellSize" : 5,
          "miniMapMyCellStrokeSize" : 0,
          "miniMapTeammatesSize" : 5,
          "customBackground" : "",
          "customCursor" : _0x4fb9("0x47f")
        },
        "hkg-style" : {
          "name" : _0x4fb9("0x480"),
          "darkTheme" : !![],
          "mainColor" : "#651fff",
          "bgColor" : _0x4fb9("0x457"),
          "bordersColor" : _0x4fb9("0x458"),
          "gridColor" : _0x4fb9("0x468"),
          "sectorsColor" : _0x4fb9("0x468"),
          "namesColor" : _0x4fb9("0x458"),
          "namesStrokeColor" : _0x4fb9("0x457"),
          "massColor" : _0x4fb9("0x458"),
          "massStrokeColor" : _0x4fb9("0x457"),
          "virusColor" : _0x4fb9("0x46a"),
          "virusStrokeColor" : _0x4fb9("0x46a"),
          "foodColor" : _0x4fb9("0x481"),
          "hudMainColor" : _0x4fb9("0x481"),
          "statsHudColor" : "#651fff",
          "top5MassColor" : "#651fff",
          "timeHudColor" : _0x4fb9("0x481"),
          "messageNickColor" : _0x4fb9("0x481"),
          "commandsColor" : _0x4fb9("0x482"),
          "commandsTimeColor" : _0x4fb9("0x481"),
          "commandsTextColor" : _0x4fb9("0x458"),
          "miniMapSectorsColor" : "#ffffff",
          "miniMapSectorColor" : _0x4fb9("0x481"),
          "miniMapGuidesColor" : _0x4fb9("0x481"),
          "miniMapMyCellColor" : _0x4fb9("0x458"),
          "miniMapMyCellStrokeColor" : _0x4fb9("0x481"),
          "miniMapTeammatesColor" : "#651fff",
          "miniMapDeathLocationColor" : "#651fff",
          "miniMapSectorsOpacity" : .1
        },
        "agario-light" : {
          "name" : _0x4fb9("0x483"),
          "darkTheme" : ![],
          "mainColor" : _0x4fb9("0x458"),
          "bgColor" : _0x4fb9("0x484"),
          "bordersColor" : _0x4fb9("0x485"),
          "gridColor" : _0x4fb9("0x486"),
          "sectorsColor" : "#ced6d9",
          "namesColor" : "#ffffff",
          "namesStrokeColor" : "#000000",
          "massColor" : _0x4fb9("0x458"),
          "massStrokeColor" : "#000000",
          "virusColor" : _0x4fb9("0x487"),
          "virusStrokeColor" : _0x4fb9("0x488"),
          "foodColor" : "#2de52d",
          "hudMainColor" : _0x4fb9("0x458"),
          "statsHudColor" : _0x4fb9("0x458"),
          "top5MassColor" : _0x4fb9("0x458"),
          "timeHudColor" : _0x4fb9("0x458"),
          "messageNickColor" : "#ffffff",
          "commandsColor" : _0x4fb9("0x489"),
          "commandsTimeColor" : _0x4fb9("0x458"),
          "commandsTextColor" : _0x4fb9("0x457"),
          "miniMapSectorsColor" : _0x4fb9("0x458"),
          "miniMapSectorColor" : "#ffffff",
          "miniMapGuidesColor" : "#ffffff",
          "miniMapMyCellColor" : _0x4fb9("0x458"),
          "miniMapMyCellStrokeColor" : "#ffffff",
          "miniMapTeammatesColor" : _0x4fb9("0x458"),
          "miniMapDeathLocationColor" : _0x4fb9("0x458"),
          "miniMapSectorsOpacity" : .25
        },
        "agario-dark" : {
          "name" : _0x4fb9("0x48a"),
          "darkTheme" : !![],
          "mainColor" : _0x4fb9("0x458"),
          "bgColor" : _0x4fb9("0x468"),
          "bordersColor" : _0x4fb9("0x48b"),
          "gridColor" : _0x4fb9("0x48c"),
          "sectorsColor" : _0x4fb9("0x48c"),
          "namesColor" : _0x4fb9("0x458"),
          "namesStrokeColor" : _0x4fb9("0x457"),
          "massColor" : _0x4fb9("0x458"),
          "massStrokeColor" : _0x4fb9("0x457"),
          "virusColor" : _0x4fb9("0x487"),
          "virusStrokeColor" : _0x4fb9("0x488"),
          "foodColor" : _0x4fb9("0x488"),
          "hudMainColor" : _0x4fb9("0x458"),
          "statsHudColor" : "#ffffff",
          "top5MassColor" : _0x4fb9("0x458"),
          "timeHudColor" : _0x4fb9("0x458"),
          "messageNickColor" : _0x4fb9("0x458"),
          "commandsColor" : _0x4fb9("0x489"),
          "commandsTimeColor" : _0x4fb9("0x458"),
          "commandsTextColor" : "#ffffff",
          "miniMapSectorsColor" : _0x4fb9("0x458"),
          "miniMapSectorColor" : _0x4fb9("0x458"),
          "miniMapGuidesColor" : _0x4fb9("0x458"),
          "miniMapMyCellColor" : _0x4fb9("0x458"),
          "miniMapMyCellStrokeColor" : "#ffffff",
          "miniMapTeammatesColor" : _0x4fb9("0x458"),
          "miniMapDeathLocationColor" : _0x4fb9("0x458"),
          "miniMapSectorsOpacity" : .1
        }
      };
      var GET_AUTH_URL_TIMEOUT = {
        "ogario-v3" : {
          "name" : _0x4fb9("0x454"),
          "menuMainColor" : "#01d9cc",
          "menuBtnTextColor" : _0x4fb9("0x458"),
          "menuPanelColor" : _0x4fb9("0x456"),
          "menuPanelColor2" : _0x4fb9("0x459"),
          "menuTextColor" : _0x4fb9("0x458"),
          "menuTextColor2" : _0x4fb9("0x45f"),
          "btn1Color" : _0x4fb9("0x460"),
          "btn1Color2" : "#0176ce",
          "btn2Color" : _0x4fb9("0x45a"),
          "btn2Color2" : _0x4fb9("0x461"),
          "btn3Color" : _0x4fb9("0x48d"),
          "btn3Color2" : "#814ee3",
          "btn4Color" : _0x4fb9("0x48e"),
          "btn4Color2" : _0x4fb9("0x48f"),
          "menuBg" : "https://cdn.ogario.ovh/static/img/pattern.png"
        },
        "ogario-v2" : {
          "name" : _0x4fb9("0x466"),
          "menuMainColor" : _0x4fb9("0x467"),
          "menuBtnTextColor" : "#ffffff",
          "menuPanelColor" : _0x4fb9("0x490"),
          "menuPanelColor2" : _0x4fb9("0x48c"),
          "menuTextColor" : _0x4fb9("0x491"),
          "menuTextColor2" : _0x4fb9("0x491"),
          "btn1Color" : _0x4fb9("0x492"),
          "btn1Color2" : _0x4fb9("0x493"),
          "btn2Color" : _0x4fb9("0x494"),
          "btn2Color2" : _0x4fb9("0x495"),
          "btn3Color" : _0x4fb9("0x496"),
          "btn3Color2" : _0x4fb9("0x497"),
          "btn4Color" : _0x4fb9("0x498"),
          "btn4Color2" : _0x4fb9("0x499"),
          "menuBg" : ""
        },
        "agario" : {
          "name" : _0x4fb9("0x49a"),
          "menuMainColor" : "#5bc0de",
          "menuBtnTextColor" : "#ffffff",
          "menuPanelColor" : _0x4fb9("0x458"),
          "menuPanelColor2" : "#cccccc",
          "menuTextColor" : "#333333",
          "menuTextColor2" : "#999999",
          "btn1Color" : _0x4fb9("0x492"),
          "btn1Color2" : _0x4fb9("0x493"),
          "btn2Color" : "#5cb85c",
          "btn2Color2" : _0x4fb9("0x495"),
          "btn3Color" : _0x4fb9("0x496"),
          "btn3Color2" : _0x4fb9("0x497"),
          "btn4Color" : "#d9534f",
          "btn4Color2" : _0x4fb9("0x499"),
          "menuBg" : ""
        }
      };
      var options = {
        "preset" : _0x4fb9("0x45e"),
        "darkTheme" : !![],
        "mainColor" : "#01d9cc",
        "bgColor" : _0x4fb9("0x49b"),
        "bordersColor" : _0x4fb9("0x455"),
        "gridColor" : "#00243e",
        "sectorsColor" : _0x4fb9("0x456"),
        "namesColor" : _0x4fb9("0x458"),
        "namesStrokeColor" : _0x4fb9("0x457"),
        "massColor" : _0x4fb9("0x458"),
        "massStrokeColor" : _0x4fb9("0x457"),
        "virusColor" : _0x4fb9("0x459"),
        "virusStrokeColor" : "#00b9e8",
        "foodColor" : "#5000ff",
        "teammatesIndColor" : _0x4fb9("0x458"),
        "cursorTrackingColor" : _0x4fb9("0x458"),
        "splitRangeColor" : _0x4fb9("0x458"),
        "ghostCellsColor" : _0x4fb9("0x458"),
        "safeAreaColor" : _0x4fb9("0x458"),
        "dangerAreaColor" : _0x4fb9("0x45c"),
        "namesFont" : _0x4fb9("0x45d"),
        "namesFontFamily" : _0x4fb9("0x49c"),
        "namesFontWeight" : 700,
        "massFont" : "ubuntu-bold",
        "massFontFamily" : _0x4fb9("0x49c"),
        "massFontWeight" : 700,
        "sectorsFont" : _0x4fb9("0x49d"),
        "sectorsFontFamily" : _0x4fb9("0x49c"),
        "sectorsFontWeight" : 400,
        "sectorsX" : 5,
        "sectorsY" : 5,
        "namesScale" : 1,
        "massScale" : 3,
        "virMassScale" : 3,
        "strokeScale" : 1,
        "foodSize" : 5,
        "bordersWidth" : 40,
        "sectorsWidth" : 40,
        "sectorsFontSize" : 1200,
        "cellsAlpha" : .9,
        "skinsAlpha" : .7,
        "virusAlpha" : .6,
        "textAlpha" : 1,
        "ghostCellsAlpha" : .3,
        "virusStrokeSize" : 14,
        "menuPreset" : _0x4fb9("0x45e"),
        "menuMainColor" : _0x4fb9("0x455"),
        "menuBtnTextColor" : _0x4fb9("0x458"),
        "menuPanelColor" : "#00243e",
        "menuPanelColor2" : _0x4fb9("0x459"),
        "menuTextColor" : "#ffffff",
        "menuTextColor2" : _0x4fb9("0x45f"),
        "btn1Color" : _0x4fb9("0x460"),
        "btn1Color2" : "#0176ce",
        "btn2Color" : "#00b9e8",
        "btn2Color2" : _0x4fb9("0x461"),
        "btn3Color" : _0x4fb9("0x48d"),
        "btn3Color2" : "#814ee3",
        "btn4Color" : "#bf00aa",
        "btn4Color2" : "#a80096",
        "menuBg" : _0x4fb9("0x463"),
        "menuOpacity" : .96,
        "hudMainColor" : _0x4fb9("0x455"),
        "hudColor" : "rgba(0,0,0,0.4)",
        "hudTextColor" : "#ffffff",
        "statsHudColor" : _0x4fb9("0x458"),
        "timeHudColor" : _0x4fb9("0x455"),
        "top5MassColor" : _0x4fb9("0x45c"),
        "lbMeColor" : "#bf00aa",
        "lbTeammateColor" : _0x4fb9("0x460"),
        "hudFont" : _0x4fb9("0x45d"),
        "hudFontFamily" : _0x4fb9("0x49c"),
        "hudFontWeight" : 700,
        "hudScale" : 1,
        "messageColor" : _0x4fb9("0x464"),
        "messageTextColor" : _0x4fb9("0x458"),
        "messageTimeColor" : _0x4fb9("0x460"),
        "messageNickColor" : "#01d9cc",
        "commandsColor" : _0x4fb9("0x49e"),
        "commandsTextColor" : _0x4fb9("0x458"),
        "commandsTimeColor" : "#bf00aa",
        "commandsNickColor" : _0x4fb9("0x458"),
        "chatBoxColor" : _0x4fb9("0x464"),
        "chatScale" : 1,
        "miniMapSectorsColor" : _0x4fb9("0x458"),
        "miniMapSectorColor" : _0x4fb9("0x455"),
        "miniMapGuidesColor" : "#bf00aa",
        "miniMapNickColor" : "#ffffff",
        "miniMapNickStrokeColor" : _0x4fb9("0x457"),
        "miniMapMyCellColor" : _0x4fb9("0x458"),
        "miniMapMyCellStrokeColor" : _0x4fb9("0x45c"),
        "miniMapTeammatesColor" : _0x4fb9("0x455"),
        "miniMapDeathLocationColor" : _0x4fb9("0x45c"),
        "miniMapGhostCellsColor" : _0x4fb9("0x458"),
        "miniMapFont" : _0x4fb9("0x45d"),
        "miniMapFontFamily" : "Ubuntu",
        "miniMapFontWeight" : 700,
        "miniMapNickFont" : _0x4fb9("0x45d"),
        "miniMapNickFontFamily" : _0x4fb9("0x49c"),
        "miniMapNickFontWeight" : 700,
        "miniMapWidth" : 240,
        "miniMapTop" : 24,
        "miniMapSectorsOpacity" : .1,
        "miniMapNickSize" : 11,
        "miniMapNickStrokeSize" : 2,
        "miniMapMyCellSize" : 7.5,
        "miniMapMyCellStrokeSize" : 4,
        "miniMapTeammatesSize" : 5.5,
        "miniMapGhostCellsAlpha" : .15,
        "customBackground" : "",
        "customCursor" : "https://cdn.ogario.ovh/static/img/cursors/cursor_02.cur"
      };
      var _0x21f577 = {
        "menuMainColorCSS" : null,
        "menuPanelColorCSS" : null,
        "menuTextlColorCSS" : null,
        "menuButtonsCSS" : null,
        "hudCSS" : null,
        "chatCSS" : null,
        "chatScaleCSS" : null,
        "cursorCSS" : null,
        "loadThemeSettings" : function() {
          var obj = null;
          if (window[_0x4fb9("0x208")][_0x4fb9("0x49f")]("ogarioThemeSettings") !== null) {
            obj = JSON["parse"](window[_0x4fb9("0x208")][_0x4fb9("0x49f")]("ogarioThemeSettings"));
          }
          var name;
          for (name in options) {
            if (options[_0x4fb9("0x122")](name)) {
              if (obj && obj[_0x4fb9("0x122")](name)) {
                options[name] = obj[name];
              }
              if (style[_0x4fb9("0x122")](name)) {
                style[name] = options[name];
              }
            }
          }
        },
        "saveThemeSettings" : function() {
          window[_0x4fb9("0x208")]["setItem"](_0x4fb9("0x4a0"), JSON["stringify"](options));
        },
        "restoreThemeSettings" : function() {
          if (window[_0x4fb9("0x208")][_0x4fb9("0x49f")](_0x4fb9("0x4a0")) !== null) {
            window["localStorage"]["removeItem"]("ogarioThemeSettings");
            window[_0x4fb9("0x4a1")][_0x4fb9("0x4a2")]();
          }
        },
        "addCustomCSS" : function(key, setDirectly) {
          if (!this[key]) {
            this[key] = $(_0x4fb9("0x4a3"))[_0x4fb9("0x4a4")]("head");
          }
          this[key][_0x4fb9("0x4a5")](setDirectly);
        },
        "addPresetBox" : function(quiz, siteId, PL$10, index, method) {
          $(quiz)[_0x4fb9("0x4a6")](_0x4fb9("0x4a7") + messages[siteId] + _0x4fb9("0x4a8") + siteId + _0x4fb9("0x4a9"));
          var PL$11;
          for (PL$11 in PL$10) {
            if (PL$10["hasOwnProperty"](PL$11)) {
              $("#" + siteId)[_0x4fb9("0x4a6")](_0x4fb9("0x4aa") + PL$11 + '">' + PL$10[PL$11][_0x4fb9("0x222")] + _0x4fb9("0x4ab"));
            }
          }
          $("#" + siteId)[_0x4fb9("0x4ac")](options[index]);
          var Generator = this;
          $("#" + siteId)["on"](_0x4fb9("0x4ad"), function() {
            var option = this["value"];
            options[index] = option;
            Generator[method](option);
          });
        },
        "addColorBox" : function(location, name, trait) {
          $(location)["append"](_0x4fb9("0x4ae") + messages[name] + _0x4fb9("0x4af") + name + '-picker"><input type="text" value="' + options[name] + _0x4fb9("0x4b0") + name + _0x4fb9("0x4b1"));
          if (trait) {
            var traitsChosen = this;
            $(location + " ." + name + "-picker")[_0x4fb9("0x4b2")]({
              "format" : _0x4fb9("0x39")
            })["on"](_0x4fb9("0x4b3"), function(e) {
              options[name] = e[_0x4fb9("0x4b4")]["toHex"]();
              if (style["hasOwnProperty"](name)) {
                style[name] = options[name];
              }
              traitsChosen[trait]();
            });
          } else {
            $(location + " ." + name + _0x4fb9("0x4b5"))["colorpicker"]({
              "format" : _0x4fb9("0x39")
            })["on"](_0x4fb9("0x4b3"), function(canCreateDiscussions) {
              options[name] = canCreateDiscussions[_0x4fb9("0x4b4")][_0x4fb9("0x4b6")]();
              if (style["hasOwnProperty"](name)) {
                style[name] = options[name];
              }
            });
          }
        },
        "addRgbaColorBox" : function(location, name, trait) {
          $(location)["append"]('<div class="color-box"><span class="title-box">' + messages[name] + _0x4fb9("0x4af") + name + _0x4fb9("0x4b7") + options[name] + _0x4fb9("0x4b0") + name + _0x4fb9("0x4b1"));
          if (trait) {
            var traitsChosen = this;
            $(location + " ." + name + "-picker")[_0x4fb9("0x4b2")]({
              "format" : _0x4fb9("0x4b8")
            })["on"]("changeColor.colorpicker", function(iconColors) {
              var levels = iconColors["color"][_0x4fb9("0x4b9")]();
              options[name] = "rgba(" + levels["r"] + "," + levels["g"] + "," + levels["b"] + "," + levels["a"] + ")";
              if (style[_0x4fb9("0x122")](name)) {
                style[name] = options[name];
              }
              traitsChosen[trait]();
            });
          } else {
            $(location + " ." + name + "-picker")[_0x4fb9("0x4b2")]({
              "format" : _0x4fb9("0x4b8")
            })["on"](_0x4fb9("0x4b3"), function(canCreateDiscussions) {
              var levels = canCreateDiscussions[_0x4fb9("0x4b4")]["toRGB"]();
              options[name] = _0x4fb9("0x4ba") + levels["r"] + "," + levels["g"] + "," + levels["b"] + "," + levels["a"] + ")";
              if (style["hasOwnProperty"](name)) {
                style[name] = options[name];
              }
            });
          }
        },
        "addSliderBox" : function(location, name, typeSpec, fn, initialValue, event) {
          $(location)["append"]('<div class="slider-box"><div class="box-label"><span class="value-label">' + messages[name] + ': </span><span id="' + name + _0x4fb9("0x4bb") + options[name] + _0x4fb9("0x4bc") + name + '-slider" type="range" min="' + typeSpec + '" max="' + fn + _0x4fb9("0x4bd") + initialValue + _0x4fb9("0x4be") + options[name] + _0x4fb9("0x4bf"));
          if (event) {
            var animationConfigs = this;
            $("#" + name + _0x4fb9("0x4c0"))["on"](_0x4fb9("0x4c1"), function() {
              var val = parseFloat($(this)["val"]());
              $("#" + name + "-value")[_0x4fb9("0x1fe")](val);
              options[name] = val;
              if (style[_0x4fb9("0x122")](name)) {
                style[name] = val;
              }
              animationConfigs[event]();
            });
          } else {
            $("#" + name + _0x4fb9("0x4c0"))["on"]("input", function() {
              var val = parseFloat($(this)[_0x4fb9("0x4ac")]());
              $("#" + name + _0x4fb9("0x4c2"))[_0x4fb9("0x1fe")](val);
              options[name] = val;
              if (style[_0x4fb9("0x122")](name)) {
                style[name] = val;
              }
            });
          }
        },
        "addInputBox" : function(boxItem, title, post, userId) {
          $(boxItem)[_0x4fb9("0x4a6")](_0x4fb9("0x4c3") + messages[title] + _0x4fb9("0x4c4") + title + _0x4fb9("0x4c5") + post + '" value="' + options[title] + _0x4fb9("0x4c6"));
          var g = this;
          $("#" + title)["on"](_0x4fb9("0x4c1"), function() {
            options[title] = this[_0x4fb9("0x233")];
            g[userId]();
          });
        },
        "addCursorBox" : function(value, _a) {
          if (_a === options[_0x4fb9("0x4c7")]) {
            $(value)[_0x4fb9("0x4a6")](_0x4fb9("0x4c8") + _a + _0x4fb9("0x4c9"));
          } else {
            $(value)[_0x4fb9("0x4a6")](_0x4fb9("0x4ca") + _a + _0x4fb9("0x4c9"));
          }
        },
        "setFont" : function(name, value) {
          options[name] = value;
          options[name + "Family"] = this["setFontFamily"](value);
          options[name + _0x4fb9("0x4cb")] = this["setFontWeight"](value);
          if (style[_0x4fb9("0x122")](name + _0x4fb9("0x4cc"))) {
            style[name + _0x4fb9("0x4cc")] = options[name + _0x4fb9("0x4cc")];
          }
          if (style[_0x4fb9("0x122")](name + "Weight")) {
            style[name + "Weight"] = options[name + "Weight"];
          }
        },
        "addFontBox" : function(stealth, value, i) {
          $(stealth)[_0x4fb9("0x4a6")](_0x4fb9("0x4cd") + messages[value] + '</span><div class="select-wrapper"><select id="' + value + '" class="form-control"></select></div></div>');
          $("#" + value)["append"](_0x4fb9("0x4ce"));
          $("#" + value)["append"](_0x4fb9("0x4cf"));
          $("#" + value)[_0x4fb9("0x4a6")]('<option value="oswald">Oswald</option><option value="oswald-bold">Oswald Bold</option>');
          $("#" + value)[_0x4fb9("0x4ac")](options[value]);
          var rejecters = this;
          if (i) {
            $("#" + value)["on"]("change", function() {
              var customIndex = this["value"];
              rejecters[_0x4fb9("0x4d0")](value, customIndex);
              rejecters[i]();
            });
          } else {
            $("#" + value)["on"](_0x4fb9("0x4ad"), function() {
              var lastviewmatrix = this[_0x4fb9("0x233")];
              rejecters[_0x4fb9("0x4d0")](value, lastviewmatrix);
            });
          }
        },
        "setFontFamily" : function(fontFamily) {
          if (fontFamily[_0x4fb9("0x52")](_0x4fb9("0x4d1")) != -1) {
            return _0x4fb9("0x4d2");
          } else {
            if (fontFamily[_0x4fb9("0x52")](_0x4fb9("0x4d3")) != -1) {
              return _0x4fb9("0x4d4");
            } else {
              return "Ubuntu";
            }
          }
        },
        "setFontWeight" : function(value) {
          if (value[_0x4fb9("0x52")](_0x4fb9("0x219")) != -1) {
            return 700;
          }
          return 400;
        },
        "setThemeMenu" : function() {
          var _0x111bee = this;
          $(_0x4fb9("0x4d5"))[_0x4fb9("0x4a6")]('<ul class="submenu-tabs"><li class="theme-main-tab active"><a href="#theme-main" class="active ogicon-paint-format" data-toggle="tab-tooltip" title="' + messages[_0x4fb9("0x4d6")] + _0x4fb9("0x4d7") + messages[_0x4fb9("0x4d8")] + _0x4fb9("0x4d9") + messages["hudTheming"] + _0x4fb9("0x4da") + messages["chatTheming"] + '"></a></li><li class="theme-minimap-tab"><a href="#theme-minimap" class="ogicon-location2" data-toggle="tab-tooltip" title="' + messages["miniMapTheming"] + 
          _0x4fb9("0x4db") + messages[_0x4fb9("0x4dc")] + '"></a></li></ul><div id="theme-main" class="submenu-panel"></div><div id="theme-menu" class="submenu-panel"></div><div id="theme-hud" class="submenu-panel"></div><div id="theme-chat" class="submenu-panel"></div><div id="theme-minimap" class="submenu-panel"></div><div id="theme-images" class="submenu-panel"></div>');
          this[_0x4fb9("0x4dd")](_0x4fb9("0x4de"), _0x4fb9("0x4df"), artistTrack, _0x4fb9("0x4e0"), _0x4fb9("0x4e1"));
          this["addColorBox"]("#theme-main", _0x4fb9("0x4e2"), _0x4fb9("0x4e3"));
          this[_0x4fb9("0x4e4")](_0x4fb9("0x4de"), _0x4fb9("0x4e5"));
          this[_0x4fb9("0x4e4")](_0x4fb9("0x4de"), _0x4fb9("0x4e6"));
          this[_0x4fb9("0x4e4")]("#theme-main", _0x4fb9("0x4e7"));
          this[_0x4fb9("0x4e4")](_0x4fb9("0x4de"), "namesColor");
          this[_0x4fb9("0x4e4")]("#theme-main", _0x4fb9("0x4e8"));
          this["addColorBox"](_0x4fb9("0x4de"), _0x4fb9("0x4e9"));
          this[_0x4fb9("0x4e4")](_0x4fb9("0x4de"), _0x4fb9("0x4ea"));
          this["addColorBox"](_0x4fb9("0x4de"), _0x4fb9("0x4eb"));
          this["addColorBox"](_0x4fb9("0x4de"), _0x4fb9("0x4ec"));
          this[_0x4fb9("0x4e4")](_0x4fb9("0x4de"), "foodColor", _0x4fb9("0x4ed"));
          this["addColorBox"](_0x4fb9("0x4de"), _0x4fb9("0x4ee"), "setIndicatorColor");
          this[_0x4fb9("0x4e4")](_0x4fb9("0x4de"), _0x4fb9("0x4ef"));
          this[_0x4fb9("0x4e4")](_0x4fb9("0x4de"), _0x4fb9("0x4f0"));
          this[_0x4fb9("0x4e4")]("#theme-main", _0x4fb9("0x4f1"));
          this[_0x4fb9("0x4e4")](_0x4fb9("0x4de"), _0x4fb9("0x4f2"));
          this["addFontBox"](_0x4fb9("0x4de"), "namesFont");
          this[_0x4fb9("0x4f3")](_0x4fb9("0x4de"), _0x4fb9("0x4f4"));
          this["addFontBox"](_0x4fb9("0x4de"), _0x4fb9("0x4f5"));
          this[_0x4fb9("0x4f6")](_0x4fb9("0x4de"), _0x4fb9("0x4f7"), 200, 2E3, 10);
          this[_0x4fb9("0x4f6")](_0x4fb9("0x4de"), _0x4fb9("0x4f8"), .5, 2, .1);
          this[_0x4fb9("0x4f6")](_0x4fb9("0x4de"), _0x4fb9("0x4f9"), 1, 5, 1);
          this["addSliderBox"](_0x4fb9("0x4de"), _0x4fb9("0x4fa"), 1, 5, 1);
          this[_0x4fb9("0x4f6")]("#theme-main", "strokeScale", 1, 4, .1);
          this[_0x4fb9("0x4f6")](_0x4fb9("0x4de"), "foodSize", 1, 50, 1, _0x4fb9("0x4ed"));
          this["addSliderBox"](_0x4fb9("0x4de"), _0x4fb9("0x4fb"), 2, 40, 1);
          this[_0x4fb9("0x4f6")]("#theme-main", _0x4fb9("0x4fc"), 2, 200, 2);
          this["addSliderBox"](_0x4fb9("0x4de"), _0x4fb9("0x4fd"), 2, 200, 2);
          this[_0x4fb9("0x4f6")](_0x4fb9("0x4de"), _0x4fb9("0x4fe"), .01, .99, .01);
          this[_0x4fb9("0x4f6")](_0x4fb9("0x4de"), _0x4fb9("0x4ff"), .01, .99, .01);
          this[_0x4fb9("0x4f6")]("#theme-main", _0x4fb9("0x500"), 0, 1, .01);
          this[_0x4fb9("0x4f6")](_0x4fb9("0x4de"), "textAlpha", .1, 1, .01);
          this[_0x4fb9("0x4dd")](_0x4fb9("0x501"), "menuPreset", GET_AUTH_URL_TIMEOUT, _0x4fb9("0x502"), "changeMenuPreset");
          this[_0x4fb9("0x4f6")](_0x4fb9("0x501"), _0x4fb9("0x503"), .1, 1, .01, _0x4fb9("0x504"));
          this[_0x4fb9("0x4e4")](_0x4fb9("0x501"), _0x4fb9("0x505"), _0x4fb9("0x506"));
          this[_0x4fb9("0x4e4")](_0x4fb9("0x501"), _0x4fb9("0x507"), _0x4fb9("0x508"));
          this[_0x4fb9("0x4e4")](_0x4fb9("0x501"), _0x4fb9("0x509"), _0x4fb9("0x50a"));
          this[_0x4fb9("0x4e4")]("#theme-menu", _0x4fb9("0x50b"), _0x4fb9("0x50a"));
          this[_0x4fb9("0x4e4")](_0x4fb9("0x501"), _0x4fb9("0x50c"), _0x4fb9("0x50d"));
          this[_0x4fb9("0x4e4")](_0x4fb9("0x501"), "menuTextColor2", _0x4fb9("0x50d"));
          this[_0x4fb9("0x4e4")](_0x4fb9("0x501"), _0x4fb9("0x50e"), _0x4fb9("0x508"));
          this[_0x4fb9("0x4e4")](_0x4fb9("0x501"), _0x4fb9("0x50f"), _0x4fb9("0x508"));
          this["addColorBox"](_0x4fb9("0x501"), "btn2Color", _0x4fb9("0x508"));
          this[_0x4fb9("0x4e4")](_0x4fb9("0x501"), _0x4fb9("0x510"), _0x4fb9("0x508"));
          this[_0x4fb9("0x4e4")](_0x4fb9("0x501"), _0x4fb9("0x511"), "setMenuButtons");
          this[_0x4fb9("0x4e4")](_0x4fb9("0x501"), _0x4fb9("0x512"), _0x4fb9("0x508"));
          this["addColorBox"](_0x4fb9("0x501"), _0x4fb9("0x513"), _0x4fb9("0x508"));
          this["addColorBox"](_0x4fb9("0x501"), _0x4fb9("0x514"), _0x4fb9("0x508"));
          this[_0x4fb9("0x515")](_0x4fb9("0x501"), _0x4fb9("0x516"), _0x4fb9("0x517"), _0x4fb9("0x518"));
          this["addColorBox"](_0x4fb9("0x519"), _0x4fb9("0x51a"), _0x4fb9("0x51b"));
          this[_0x4fb9("0x51c")](_0x4fb9("0x519"), "hudColor", "setHudColors");
          this["addColorBox"](_0x4fb9("0x519"), "hudTextColor", "setHudColors");
          this[_0x4fb9("0x4e4")]("#theme-hud", _0x4fb9("0x51d"), _0x4fb9("0x51b"));
          this[_0x4fb9("0x4e4")](_0x4fb9("0x519"), _0x4fb9("0x51e"), "setHudColors");
          this[_0x4fb9("0x4e4")](_0x4fb9("0x519"), _0x4fb9("0x51f"), _0x4fb9("0x51b"));
          this[_0x4fb9("0x4e4")](_0x4fb9("0x519"), _0x4fb9("0x520"), "setHudColors");
          this[_0x4fb9("0x4e4")](_0x4fb9("0x519"), _0x4fb9("0x521"), _0x4fb9("0x51b"));
          this[_0x4fb9("0x4f3")](_0x4fb9("0x519"), _0x4fb9("0x522"), _0x4fb9("0x523"));
          this[_0x4fb9("0x4f6")]("#theme-hud", "hudScale", 1, 2, .01, _0x4fb9("0x524"));
          this["addRgbaColorBox"]("#theme-chat", _0x4fb9("0x525"), _0x4fb9("0x526"));
          this[_0x4fb9("0x4e4")](_0x4fb9("0x527"), _0x4fb9("0x528"), "setChatColors");
          this["addColorBox"](_0x4fb9("0x527"), _0x4fb9("0x529"), _0x4fb9("0x526"));
          this["addColorBox"]("#theme-chat", _0x4fb9("0x52a"), _0x4fb9("0x526"));
          this[_0x4fb9("0x51c")](_0x4fb9("0x527"), _0x4fb9("0x52b"), "setChatColors");
          this[_0x4fb9("0x4e4")]("#theme-chat", _0x4fb9("0x52c"), "setChatColors");
          this["addColorBox"](_0x4fb9("0x527"), _0x4fb9("0x52d"), "setChatColors");
          this[_0x4fb9("0x4e4")](_0x4fb9("0x527"), _0x4fb9("0x52e"), _0x4fb9("0x526"));
          this["addRgbaColorBox"](_0x4fb9("0x527"), _0x4fb9("0x52f"), _0x4fb9("0x526"));
          this[_0x4fb9("0x4f6")](_0x4fb9("0x527"), _0x4fb9("0x530"), 1, 2, .01, _0x4fb9("0x531"));
          this[_0x4fb9("0x4e4")](_0x4fb9("0x532"), _0x4fb9("0x533"), _0x4fb9("0x534"));
          this[_0x4fb9("0x4e4")](_0x4fb9("0x532"), _0x4fb9("0x535"));
          this[_0x4fb9("0x4e4")](_0x4fb9("0x532"), _0x4fb9("0x536"));
          this["addColorBox"](_0x4fb9("0x532"), _0x4fb9("0x537"));
          this[_0x4fb9("0x4e4")](_0x4fb9("0x532"), _0x4fb9("0x538"));
          this[_0x4fb9("0x4e4")](_0x4fb9("0x532"), _0x4fb9("0x539"));
          this["addColorBox"](_0x4fb9("0x532"), _0x4fb9("0x53a"));
          this[_0x4fb9("0x4e4")](_0x4fb9("0x532"), _0x4fb9("0x53b"));
          this[_0x4fb9("0x4e4")](_0x4fb9("0x532"), _0x4fb9("0x53c"));
          this["addFontBox"](_0x4fb9("0x532"), _0x4fb9("0x53d"), _0x4fb9("0x53e"));
          this[_0x4fb9("0x4f3")](_0x4fb9("0x532"), "miniMapNickFont");
          this[_0x4fb9("0x4f6")]("#theme-minimap", "miniMapWidth", 200, 400, 2, "setMiniMapWidth");
          this[_0x4fb9("0x4f6")](_0x4fb9("0x532"), _0x4fb9("0x53f"), 0, 1, .01, _0x4fb9("0x540"));
          this[_0x4fb9("0x4f6")](_0x4fb9("0x532"), _0x4fb9("0x541"), 8, 16, 1);
          this[_0x4fb9("0x4f6")](_0x4fb9("0x532"), _0x4fb9("0x542"), 0, 6, 1);
          this[_0x4fb9("0x4f6")](_0x4fb9("0x532"), _0x4fb9("0x543"), 4, 10, .5);
          this[_0x4fb9("0x4f6")](_0x4fb9("0x532"), _0x4fb9("0x544"), 0, 10, 1);
          this[_0x4fb9("0x4f6")](_0x4fb9("0x532"), "miniMapTeammatesSize", 4, 10, .5);
          this["addInputBox"](_0x4fb9("0x545"), _0x4fb9("0x546"), _0x4fb9("0x517"), _0x4fb9("0x547"));
          this[_0x4fb9("0x515")](_0x4fb9("0x545"), _0x4fb9("0x4c7"), _0x4fb9("0x548"), "setCustomCursor");
          var className = _0x4fb9("0x549");
          var i = 0;
          for (; i < 35; i++) {
            if (i < 9) {
              this["addCursorBox"](_0x4fb9("0x545"), className + "0" + (i + 1) + ".cur");
              continue;
            }
            this[_0x4fb9("0x54a")](_0x4fb9("0x545"), className + "" + (i + 1) + _0x4fb9("0x54b"));
          }
          $(document)["on"](_0x4fb9("0x54c"), _0x4fb9("0x54d"), function(canCreateDiscussions) {
            canCreateDiscussions[_0x4fb9("0x54e")]();
            var MY_MAPTYPE_ID = $(_0x4fb9("0x54f"), this)["attr"](_0x4fb9("0x550"));
            options[_0x4fb9("0x4c7")] = MY_MAPTYPE_ID;
            _0x111bee[_0x4fb9("0x551")]();
            $(_0x4fb9("0x552"))[_0x4fb9("0x4ac")](MY_MAPTYPE_ID);
            $(_0x4fb9("0x54d"))[_0x4fb9("0x553")](_0x4fb9("0x554"));
            $(this)[_0x4fb9("0x555")](_0x4fb9("0x554"));
          });
          $(_0x4fb9("0x4d5"))[_0x4fb9("0x4a6")](_0x4fb9("0x556") + messages[_0x4fb9("0x557")] + _0x4fb9("0x558"));
          $(document)["on"]("click", _0x4fb9("0x559"), function(canCreateDiscussions) {
            canCreateDiscussions[_0x4fb9("0x54e")]();
            var ig = $(this);
            ig[_0x4fb9("0x1fe")](messages[_0x4fb9("0x55a")]);
            _0x111bee["saveThemeSettings"]();
            setTimeout(function() {
              ig["text"](messages["saveSett"]);
            }, 500);
          });
          $(_0x4fb9("0x4d5"))[_0x4fb9("0x4a6")](_0x4fb9("0x55b") + messages[_0x4fb9("0x55c")] + _0x4fb9("0x55d"));
          $(document)["on"](_0x4fb9("0x54c"), _0x4fb9("0x55e"), function(canCreateDiscussions) {
            canCreateDiscussions[_0x4fb9("0x54e")]();
            _0x111bee[_0x4fb9("0x55c")]();
          });
          $(_0x4fb9("0x55f"))[_0x4fb9("0x4b2")]({
            "format" : _0x4fb9("0x39"),
            "input" : _0x4fb9("0x560")
          });
        },
        "changePreset" : function(name, components) {
          if (components[name]) {
            options[name] = name;
            name = components[name];
          } else {
            return;
          }
          var key;
          for (key in name) {
            if (name[_0x4fb9("0x122")](key) && options[_0x4fb9("0x122")](key)) {
              options[key] = name[key];
              if (style["hasOwnProperty"](key)) {
                style[key] = options[key];
              }
              if ($(_0x4fb9("0x561") + key + _0x4fb9("0x4b5"))) {
                $(_0x4fb9("0x561") + key + _0x4fb9("0x4b5"))[_0x4fb9("0x4b2")](_0x4fb9("0x562"), options[key]);
              }
              if ($("#" + key + _0x4fb9("0x4c0"))) {
                $("#" + key + _0x4fb9("0x4c0"))[_0x4fb9("0x4ac")](options[key])[_0x4fb9("0x4ad")]();
              }
              if ($("input[type=text]#" + key) || $(_0x4fb9("0x563") + key)) {
                $("#" + key)[_0x4fb9("0x4ac")](options[key]);
              }
            }
          }
        },
        "changeThemePreset" : function(mmCoreSplitViewBlock) {
          this[_0x4fb9("0x564")](mmCoreSplitViewBlock, artistTrack);
          this["setTheme"]();
        },
        "setFonts" : function() {
          this[_0x4fb9("0x4d0")](_0x4fb9("0x565"), options[_0x4fb9("0x565")]);
          this[_0x4fb9("0x4d0")]("massFont", options[_0x4fb9("0x565")]);
          this[_0x4fb9("0x4d0")]("sectorsFont", options["sectorsFont"]);
        },
        "setBgColor" : function() {
          $(_0x4fb9("0x566"))["css"]("background-color", options[_0x4fb9("0x4e2")]);
        },
        "setFoodColor" : function() {
          if (!props["optimizedFood"]) {
            return;
          }
          if (defaults) {
            defaults[_0x4fb9("0x567")]();
          }
        },
        "setIndicatorColor" : function() {
          if (defaults) {
            defaults[_0x4fb9("0x568")]();
          }
        },
        "setCustomBackground" : function() {
          if (options[_0x4fb9("0x546")]) {
            $("body")[_0x4fb9("0x569")](_0x4fb9("0x56a"), _0x4fb9("0x56b") + options[_0x4fb9("0x546")] + ")");
          } else {
            $("body")["css"]("background-image", _0x4fb9("0x56c"));
          }
        },
        "setCustomCursor" : function() {
          if (options["customCursor"]) {
            var artistTrack = _0x4fb9("0x56d") + options[_0x4fb9("0x4c7")] + _0x4fb9("0x56e");
          } else {
            artistTrack = "*{cursor: auto}";
          }
          this[_0x4fb9("0x56f")](_0x4fb9("0x570"), artistTrack);
        },
        "setMenu" : function() {
          this[_0x4fb9("0x504")]();
          this[_0x4fb9("0x506")]();
          this[_0x4fb9("0x50a")]();
          this[_0x4fb9("0x50d")]();
          this["setMenuButtons"]();
          this["setMenuBg"]();
        },
        "changeMenuPreset" : function(mmCoreSplitViewBlock) {
          this[_0x4fb9("0x564")](mmCoreSplitViewBlock, GET_AUTH_URL_TIMEOUT);
          this[_0x4fb9("0x571")]();
        },
        "setMenuOpacity" : function() {
          $("#helloContainer, #hotkeys, #exp-imp")[_0x4fb9("0x569")]("opacity", options[_0x4fb9("0x503")]);
        },
        "setMenuMainColor" : function() {
          var artistTrack = _0x4fb9("0x572") + options[_0x4fb9("0x505")] + _0x4fb9("0x573") + options[_0x4fb9("0x505")] + _0x4fb9("0x574") + options[_0x4fb9("0x505")] + _0x4fb9("0x575") + options[_0x4fb9("0x505")] + _0x4fb9("0x576") + options["menuMainColor"] + _0x4fb9("0x577") + options[_0x4fb9("0x505")] + _0x4fb9("0x578");
          this[_0x4fb9("0x56f")](_0x4fb9("0x579"), artistTrack);
        },
        "setMenuPanelColor" : function() {
          var artistTrack = _0x4fb9("0x57a") + options[_0x4fb9("0x509")] + _0x4fb9("0x57b") + options["menuPanelColor2"] + _0x4fb9("0x57c") + options[_0x4fb9("0x50b")] + "}.quick:hover,#skins a,#profiles{color:" + options[_0x4fb9("0x50b")] + "}input.stream-mode,input.hide-url{color:" + options[_0x4fb9("0x50b")] + "!important}";
          this["addCustomCSS"]("menuPanelColorCSS", artistTrack);
        },
        "setMenuTextColor" : function() {
          var artistTrack = _0x4fb9("0x57d") + options[_0x4fb9("0x50c")] + _0x4fb9("0x57e") + options[_0x4fb9("0x50c")] + _0x4fb9("0x57f") + options[_0x4fb9("0x580")] + _0x4fb9("0x581") + options[_0x4fb9("0x580")] + _0x4fb9("0x582") + options[_0x4fb9("0x580")] + _0x4fb9("0x583") + options["menuTextColor2"] + "}";
          this[_0x4fb9("0x56f")](_0x4fb9("0x584"), artistTrack);
        },
        "setMenuButtons" : function() {
          var artistTrack = _0x4fb9("0x585") + options["btn1Color"] + "}.btn,#hotkeys-cfg .custom-key-in{color:" + options[_0x4fb9("0x507")] + _0x4fb9("0x586") + options[_0x4fb9("0x50e")] + _0x4fb9("0x587") + options["btn1Color2"] + _0x4fb9("0x588") + options[_0x4fb9("0x589")] + _0x4fb9("0x58a") + options[_0x4fb9("0x510")] + "!important}.btn-warning{background-color:" + options[_0x4fb9("0x511")] + _0x4fb9("0x58b") + options[_0x4fb9("0x512")] + _0x4fb9("0x58c") + options["btn4Color"] + "!important}.btn-danger:active,.btn-danger:disabled,.btn-danger:focus,.btn-danger:hover{background-color:" + 
          options[_0x4fb9("0x514")] + _0x4fb9("0x58d") + options["btn4Color2"] + _0x4fb9("0x58e") + options[_0x4fb9("0x514")] + "}";
          this["addCustomCSS"](_0x4fb9("0x58f"), artistTrack);
        },
        "setMenuBg" : function() {
          $(_0x4fb9("0x590"))["val"](options[_0x4fb9("0x516")]);
          if (options[_0x4fb9("0x516")]) {
            $(".menu-panel, .agario-side-panel, #hotkeys, #exp-imp")[_0x4fb9("0x569")](_0x4fb9("0x56a"), _0x4fb9("0x56b") + options[_0x4fb9("0x516")] + ")");
          } else {
            $(".menu-panel, .agario-side-panel, #hotkeys, #exp-imp")["css"](_0x4fb9("0x56a"), _0x4fb9("0x56c"));
          }
        },
        "setHud" : function() {
          this[_0x4fb9("0x51b")]();
          this[_0x4fb9("0x523")]();
          this[_0x4fb9("0x524")]();
        },
        "setHudColors" : function() {
          var artistTrack = _0x4fb9("0x591") + options[_0x4fb9("0x51a")] + _0x4fb9("0x592") + options[_0x4fb9("0x593")] + _0x4fb9("0x594") + options[_0x4fb9("0x595")] + "}.stats-hud-color{color:" + options[_0x4fb9("0x51d")] + _0x4fb9("0x596") + options["timeHudColor"] + _0x4fb9("0x597") + options[_0x4fb9("0x51f")] + _0x4fb9("0x598") + options[_0x4fb9("0x520")] + _0x4fb9("0x599") + options["lbTeammateColor"] + "}";
          this[_0x4fb9("0x56f")]("hudCSS", artistTrack);
        },
        "setHudFont" : function() {
          this[_0x4fb9("0x4d0")]("hudFont", options["hudFont"]);
          $("#overlays-hud")[_0x4fb9("0x569")]({
            "font-family" : options[_0x4fb9("0x59a")],
            "font-weight" : options[_0x4fb9("0x59b")]
          });
        },
        "setHudScale" : function() {
          var bodyContentWidth = Math[_0x4fb9("0x59c")](20 * options["hudScale"]);
          var artistTrack = Math[_0x4fb9("0x59c")](200 * options[_0x4fb9("0x59d")]);
          var ylw = Math["floor"](55 * options["hudScale"]);
          var strip_width = Math[_0x4fb9("0xd2")](6 * options[_0x4fb9("0x59d")]);
          var xlw = Math["floor"](280 * options["hudScale"]);
          var updatedTop = Math["floor"](85 * options["hudScale"]);
          var updatedLeft = Math[_0x4fb9("0xd2")](20 * options[_0x4fb9("0x59d")]);
          $("#overlays-hud")["css"](_0x4fb9("0x59e"), bodyContentWidth + "px");
          $("#leaderboard-hud, #time-hud")[_0x4fb9("0x59f")](artistTrack);
          $(_0x4fb9("0x5a0"))[_0x4fb9("0x59f")](artistTrack + 30)[_0x4fb9("0x569")](_0x4fb9("0x5a1"), ylw + "px");
          $(_0x4fb9("0x5a2"))[_0x4fb9("0x569")]("padding-left", strip_width + "px");
          $(_0x4fb9("0x5a3"))["css"](_0x4fb9("0x5a1"), xlw + "px");
          $(_0x4fb9("0x5a4"))[_0x4fb9("0x569")](_0x4fb9("0x5a1"), updatedTop + "px");
          $(_0x4fb9("0x5a5"))[_0x4fb9("0x569")]("padding-top", updatedLeft + "px");
        },
        "setChat" : function() {
          this[_0x4fb9("0x526")]();
          this[_0x4fb9("0x531")]();
        },
        "setChatColors" : function() {
          var artistTrack = _0x4fb9("0x5a6") + options[_0x4fb9("0x525")] + _0x4fb9("0x5a7") + options[_0x4fb9("0x528")] + _0x4fb9("0x5a8") + options["messageNickColor"] + _0x4fb9("0x5a9") + options[_0x4fb9("0x529")] + "}.toast-warning{background-color:" + options["commandsColor"] + _0x4fb9("0x5aa") + options[_0x4fb9("0x52c")] + _0x4fb9("0x5ab") + options[_0x4fb9("0x52e")] + _0x4fb9("0x5ac") + options[_0x4fb9("0x52d")] + _0x4fb9("0x5ad") + options[_0x4fb9("0x52f")] + "}";
          this["addCustomCSS"](_0x4fb9("0x5ae"), artistTrack);
        },
        "setChatScale" : function() {
          var bodyContentWidth = Math[_0x4fb9("0x59c")](14 * options[_0x4fb9("0x530")]);
          var hyp = Math[_0x4fb9("0x59c")](280 * options[_0x4fb9("0x530")]);
          var tmpWidth = Math[_0x4fb9("0x59c")](350 * options[_0x4fb9("0x530")]);
          var artistTrack = Math[_0x4fb9("0x59c")](300 * options[_0x4fb9("0x530")]);
          var xlw = Math[_0x4fb9("0xd2")](14 * options["chatScale"]);
          $(_0x4fb9("0x5af"))[_0x4fb9("0x569")](_0x4fb9("0x59e"), bodyContentWidth + "px");
          $("#messages, #toast-container, #chat-box")["width"](hyp);
          $(_0x4fb9("0x5b0"))["width"](tmpWidth);
          $(_0x4fb9("0x5b1"))[_0x4fb9("0x5b2")](artistTrack);
          $(".user-list")[_0x4fb9("0x569")](_0x4fb9("0x5b3"), xlw + "px");
          var GET_AUTH_URL_TIMEOUT = _0x4fb9("0x5b4") + hyp + _0x4fb9("0x5b5") + bodyContentWidth + _0x4fb9("0x5b6");
          this[_0x4fb9("0x56f")](_0x4fb9("0x5b7"), GET_AUTH_URL_TIMEOUT);
        },
        "setMiniMap" : function() {
          this["setMiniMapFont"]();
          this[_0x4fb9("0x5b8")]();
          this[_0x4fb9("0x540")]();
        },
        "setMiniMapFont" : function() {
          this["setFont"](_0x4fb9("0x53d"), options[_0x4fb9("0x53d")]);
          if (router) {
            router["resetMiniMapSectors"]();
          }
        },
        "setMiniMapWidth" : function() {
          var number = options[_0x4fb9("0x5b9")] / 200;
          options["miniMapTop"] = Math[_0x4fb9("0x59c")](20 * number);
          $("#minimap-hud")[_0x4fb9("0x569")]({
            "width" : options[_0x4fb9("0x5b9")],
            "height" : options[_0x4fb9("0x5b9")] + options[_0x4fb9("0x5ba")]
          });
          if (router) {
            router[_0x4fb9("0x5bb")]();
          }
        },
        "setMiniMapSectorsColor" : function() {
          if (router) {
            router[_0x4fb9("0x5bb")]();
          }
        },
        "setMiniMapSectorsOpacity" : function() {
          $("#minimap-sectors")[_0x4fb9("0x569")](_0x4fb9("0x5bc"), options[_0x4fb9("0x53f")]);
        },
        "setTheme" : function() {
          this[_0x4fb9("0x5bd")]();
          this[_0x4fb9("0x4e3")]();
          this[_0x4fb9("0x547")]();
          this[_0x4fb9("0x551")]();
          this[_0x4fb9("0x571")]();
          this["setHud"]();
          this[_0x4fb9("0x5be")]();
          this[_0x4fb9("0x5bf")]();
        },
        "init" : function() {
          this["loadThemeSettings"]();
        }
      };
      var res = [];
      var params = {
        "nick" : _0x4fb9("0x5c0"),
        "clanTag" : "\u24c2",
        "skinURL" : "",
        "color" : options[_0x4fb9("0x5c1")]
      };
      var props = {
        "quickResp" : !![],
        "autoResp" : ![],
        "autoZoom" : ![],
        "autoHideNames" : !![],
        "autoHideMass" : !![],
        "autoHideFood" : ![],
        "autoHideFoodOnZoom" : ![],
        "noNames" : ![],
        "optimizedNames" : !![],
        "hideMyName" : !![],
        "hideTeammatesNames" : ![],
        "showMass" : !![],
        "optimizedMass" : !![],
        "shortMass" : !![],
        "virMassShots" : !![],
        "hideMyMass" : ![],
        "hideEnemiesMass" : ![],
        "vanillaSkins" : ![],
        "customSkins" : !![],
        "myTransparentSkin" : ![],
        "myCustomColor" : ![],
        "transparentCells" : ![],
        "transparentViruses" : !![],
        "transparentSkins" : ![],
        "showGrid" : ![],
        "showBgSectors" : ![],
        "showMapBorders" : !![],
        "showGhostCells" : ![],
        "showMiniMap" : !![],
        "showMiniMapGrid" : ![],
        "showMiniMapGuides" : !![],
        "showMiniMapGhostCells" : ![],
        "oneColoredTeammates" : ![],
        "optimizedFood" : !![],
        "rainbowFood" : ![],
        "oppColors" : ![],
        "oppRings" : ![],
        "virColors" : ![],
        "splitRange" : ![],
        "virusesRange" : ![],
        "textStroke" : ![],
        "namesStroke" : ![],
        "massStroke" : ![],
        "cursorTracking" : ![],
        "teammatesInd" : ![],
        "mouseSplit" : ![],
        "mouseFeed" : ![],
        "mouseInvert" : ![],
        "disableChat" : ![],
        "hideChat" : ![],
        "chatSounds" : !![],
        "chatEmoticons" : !![],
        "showChatBox" : ![],
        "showChatImages" : !![],
        "showChatVideos" : !![],
        "showTop5" : !![],
        "showTargeting" : !![],
        "showLbData" : !![],
        "showTime" : !![],
        "normalLb" : ![],
        "centeredLb" : !![],
        "fpsAtTop" : !![],
        "showStats" : !![],
        "showStatsMass" : !![],
        "showStatsSTE" : ![],
        "showStatsN16" : ![],
        "showStatsFPS" : !![],
        "blockPopups" : ![],
        "streamMode" : ![],
        "hideSkinUrl" : ![],
        "showQuickMenu" : !![],
        "showSkinsPanel" : !![],
        "animation" : 140,
        "zoomSpeedValue" : .9,
        "messageSound" : _0x4fb9("0x5c2"),
        "commandSound" : _0x4fb9("0x5c3")
      };
      var router = {
        "name" : _0x4fb9("0x5da"),
        "version" : _0x4fb9("0x5db"),
        "privateMode" : ![],
        "protocolMode" : !![],
        "publicIP" : _0x4fb9("0x5dc"),
        "privateIP" : null,
        "updateInterval" : 1E3,
        "updateTick" : 0,
        "updateMaxTick" : 2,
        "currentSector" : "",
        "miniMap" : null,
        "miniMapCtx" : null,
        "miniMapSectors" : null,
        "pi2" : 2 * Math["PI"],
        "socket" : null,
        "cells" : {},
        "teamPlayers" : [],
        "parties" : [],
        "chatHistory" : [],
        "chatUsers" : {},
        "chatMutedUsers" : {},
        "chatMutedUserIDs" : [],
        "customSkinsCache" : {},
        "customSkinsMap" : {},
        "cacheQueue" : [],
        "deathLocations" : [],
        "playerID" : null,
        "playerMass" : 0,
        "selectedProfile" : 0,
        "lastDeath" : 0,
        "skipServerData" : ![],
        "gameMode" : _0x4fb9("0x5dd"),
        "region" : "",
        "partyToken" : "",
        "ws" : "",
        "serverIP" : "",
        "serverArena" : "",
        "serverToken" : "",
        "lastSentNick" : "",
        "lastSentClanTag" : null,
        "lastSentSkinURL" : "",
        "lastSentCustomColor" : "",
        "lastSentPartyToken" : "",
        "lastSentServerToken" : "",
        "lastMessageSentTime" : Date[_0x4fb9("0x5de")](),
        "rFps" : 0,
        "renderedFrames" : 0,
        "fpsLastRequest" : null,
        "statsHUD" : null,
        "leaderboardPositionsHUD" : null,
        "leaderboardDataHUD" : null,
        "activeParties" : null,
        "top5pos" : null,
        "top5totalMass" : null,
        "top5totalPlayers" : null,
        "top5limit" : 5,
        "timeHUD" : null,
        "questHUD" : null,
        "retryResp" : 0,
        "token" : "b2dhcmlvLm92aA==",
        "canvasScale" : 1,
        "selectBiggestCell" : !![],
        "noColors" : ![],
        "skipStats" : ![],
        "showQuest" : ![],
        "showSplitInd" : ![],
        "pause" : ![],
        "targetID" : 0,
        "targetStatus" : 0,
        "targetNick" : "",
        "targetSkinURL" : "",
        "targeting" : ![],
        "privateMiniMap" : ![],
        "messageSound" : null,
        "commandSound" : null,
        "feedInterval" : null,
        "getPlayerX" : function() {
          return style[_0x4fb9("0x5df")] + style[_0x4fb9("0x5e0")];
        },
        "getPlayerY" : function() {
          return style[_0x4fb9("0x5e1")] + style[_0x4fb9("0x5e2")];
        },
        "feed" : function() {
          if (window["core"] && window[_0x4fb9("0x5e3")][_0x4fb9("0x5e4")]) {
            window["core"][_0x4fb9("0x5e4")]();
          }
        },
        "macroFeed" : function(canCreateDiscussions) {
          if (canCreateDiscussions) {
            if (this[_0x4fb9("0x5e5")]) {
              return;
            }
            var _0x1716ce = this;
            this[_0x4fb9("0x5e6")]();
            this[_0x4fb9("0x5e5")] = setInterval(function() {
              _0x1716ce[_0x4fb9("0x5e6")]();
            }, 80);
          } else {
            if (this[_0x4fb9("0x5e5")]) {
              clearInterval(this[_0x4fb9("0x5e5")]);
              this["feedInterval"] = null;
            }
          }
        },
        "split" : function() {
          if (window["core"] && window[_0x4fb9("0x5e3")][_0x4fb9("0x234")]) {
            window[_0x4fb9("0x5e3")][_0x4fb9("0x234")]();
          }
        },
        "doubleSplit" : function() {
          var _0x54e827 = this;
          _0x54e827[_0x4fb9("0x234")]();
          setTimeout(function() {
            _0x54e827[_0x4fb9("0x234")]();
          }, 40);
        },
        "popSplit" : function() {
          var _0x290dc5 = this;
          _0x290dc5[_0x4fb9("0x234")]();
          setTimeout(function() {
            _0x290dc5[_0x4fb9("0x234")]();
          }, 200);
        },
        "split16" : function() {
          var _0x4c1320 = this;
          _0x4c1320[_0x4fb9("0x234")]();
          setTimeout(function() {
            _0x4c1320[_0x4fb9("0x234")]();
          }, 40);
          setTimeout(function() {
            _0x4c1320[_0x4fb9("0x234")]();
          }, 80);
          setTimeout(function() {
            _0x4c1320[_0x4fb9("0x234")]();
          }, 120);
        },
        "toggleSkins" : function() {
          if (style["vanillaSkins"] && style[_0x4fb9("0x5e7")]) {
            style["vanillaSkins"] = ![];
          } else {
            if (!style[_0x4fb9("0x5e8")] && style[_0x4fb9("0x5e7")]) {
              style[_0x4fb9("0x5e9")] = !![];
              style[_0x4fb9("0x5e7")] = ![];
            } else {
              style[_0x4fb9("0x5e9")] = !![];
              style["customSkins"] = !![];
            }
          }
        },
        "toggleCells" : function() {
          this[_0x4fb9("0x5ea")] = !this[_0x4fb9("0x5ea")];
          style[_0x4fb9("0x5ea")] = this[_0x4fb9("0x5ea")];
        },
        "setShowTop5" : function() {
          props[_0x4fb9("0x5eb")] = !props[_0x4fb9("0x5eb")];
          this["setTop5"]();
        },
        "setTop5" : function() {
          if (props[_0x4fb9("0x5eb")]) {
            $(_0x4fb9("0x5a0"))[_0x4fb9("0x5ec")]();
          } else {
            $("#top5-hud")["hide"]();
          }
        },
        "setShowTargeting" : function() {
          props[_0x4fb9("0x5ed")] = !props[_0x4fb9("0x5ed")];
          this[_0x4fb9("0x5ee")]();
        },
        "setTargetingHUD" : function() {
          if (props[_0x4fb9("0x5ed")]) {
            $("#target-hud, #target-panel-hud")[_0x4fb9("0x5ec")]();
          } else {
            $("#target-hud, #target-panel-hud")["hide"]();
          }
        },
        "setShowTime" : function() {
          props[_0x4fb9("0x5ef")] = !props[_0x4fb9("0x5ef")];
          if (props[_0x4fb9("0x5ef")]) {
            $(_0x4fb9("0x5a3"))[_0x4fb9("0x5ec")]();
            this[_0x4fb9("0x5f0")]();
          } else {
            $(_0x4fb9("0x5a3"))[_0x4fb9("0x5f1")]();
          }
        },
        "setShowSplitRange" : function() {
          props["splitRange"] = !props[_0x4fb9("0x5f2")];
          style[_0x4fb9("0x5f2")] = props[_0x4fb9("0x5f2")];
        },
        "setShowSplitInd" : function() {
          this[_0x4fb9("0x5f3")] = !this[_0x4fb9("0x5f3")];
          props[_0x4fb9("0x5f2")] = this[_0x4fb9("0x5f3")];
          props[_0x4fb9("0x5f4")] = this[_0x4fb9("0x5f3")];
          style[_0x4fb9("0x5f2")] = props[_0x4fb9("0x5f2")];
          style[_0x4fb9("0x5f4")] = props[_0x4fb9("0x5f4")];
        },
        "setShowTeammatesInd" : function() {
          props[_0x4fb9("0x5f5")] = !props[_0x4fb9("0x5f5")];
        },
        "setShowOppColors" : function() {
          props[_0x4fb9("0x5f6")] = !props[_0x4fb9("0x5f6")];
          style[_0x4fb9("0x5f6")] = props[_0x4fb9("0x5f6")];
        },
        "setShowSkins" : function() {
          this[_0x4fb9("0x5f7")] = !this[_0x4fb9("0x5f7")];
          if (window["core"] && window[_0x4fb9("0x5e3")][_0x4fb9("0x5f8")]) {
            window[_0x4fb9("0x5e3")]["setSkins"](!this[_0x4fb9("0x5f7")]);
          }
          style[_0x4fb9("0x5f9")] = !this["noSkins"];
          this[_0x4fb9("0x5fa")](!this["noSkins"], _0x4fb9("0x5fb"));
        },
        "setTransparentSkins" : function() {
          props["transparentSkins"] = !props[_0x4fb9("0x5fc")];
          style[_0x4fb9("0x5fc")] = props[_0x4fb9("0x5fc")];
        },
        "setShowStats" : function() {
          $(_0x4fb9("0x5fd"))["toggle"]();
        },
        "setShowFood" : function() {
          style[_0x4fb9("0x5fe")] = !style["showFood"];
        },
        "setShowHUD" : function() {
          $(_0x4fb9("0x5ff"))["toggle"]();
        },
        "setShowGrid" : function() {
          props[_0x4fb9("0x600")] = !props["showGrid"];
        },
        "setShowMiniMapGuides" : function() {
          props["showMiniMapGuides"] = !props["showMiniMapGuides"];
        },
        "setShowLb" : function() {
          if (this[_0x4fb9("0x601")] === _0x4fb9("0x602")) {
            return;
          }
          $(_0x4fb9("0x603"))[_0x4fb9("0x604")]();
        },
        "setShowBgSectors" : function() {
          props["showBgSectors"] = !props[_0x4fb9("0x605")];
        },
        "setHideSmallBots" : function() {
          style["hideSmallBots"] = !style[_0x4fb9("0x606")];
          this[_0x4fb9("0x5fa")](!style[_0x4fb9("0x606")], _0x4fb9("0x607"));
        },
        "setShowNames" : function() {
          props["noNames"] = !props["noNames"];
        },
        "setHideTeammatesNames" : function() {
          props[_0x4fb9("0x608")] = !props[_0x4fb9("0x608")];
        },
        "setShowMass" : function() {
          props[_0x4fb9("0x609")] = !props[_0x4fb9("0x609")];
        },
        "setShowMiniMap" : function() {
          props["showMiniMap"] = !props[_0x4fb9("0x60a")];
          this[_0x4fb9("0x5bf")]();
        },
        "setMiniMap" : function() {
          if (props[_0x4fb9("0x60a")]) {
            $(_0x4fb9("0x60b"))[_0x4fb9("0x5ec")]();
          } else {
            $(_0x4fb9("0x60b"))[_0x4fb9("0x5f1")]();
          }
        },
        "setShowQuest" : function() {
          if (this[_0x4fb9("0x601")] !== _0x4fb9("0x5dd")) {
            return;
          }
          this[_0x4fb9("0x60c")] = !this[_0x4fb9("0x60c")];
          this[_0x4fb9("0x60d")]();
        },
        "setQuest" : function() {
          if (this[_0x4fb9("0x60c")] && this[_0x4fb9("0x601")] === _0x4fb9("0x5dd")) {
            $(_0x4fb9("0x60e"))[_0x4fb9("0x5ec")]();
          } else {
            $(_0x4fb9("0x60e"))["hide"]();
          }
        },
        "toggleAutoZoom" : function() {
          style["autoZoom"] = !style[_0x4fb9("0x60f")];
          this["displayChatInfo"](style[_0x4fb9("0x60f")], _0x4fb9("0x610"));
        },
        "resetZoom" : function(options) {
          if (options) {
            style["zoomResetValue"] = 1;
            style[_0x4fb9("0x611")] = 1;
          } else {
            style[_0x4fb9("0x612")] = 0;
          }
        },
        "setZoom" : function(options) {
          style["zoomValue"] = options;
        },
        "toggleDeath" : function() {
          this[_0x4fb9("0x613")]--;
          if (this[_0x4fb9("0x613")] < 0) {
            this[_0x4fb9("0x613")] = this["deathLocations"]["length"] - 1;
          }
        },
        "tryResp" : function() {
          if (style["play"] || this[_0x4fb9("0x614")] == 20) {
            this["retryResp"] = 0;
            return;
          }
          this["retryResp"]++;
          var _0x4acf38 = this;
          setTimeout(function() {
            if ($(_0x4fb9("0x615"))["is"](_0x4fb9("0x616"))) {
              $(_0x4fb9("0x615"))["click"]();
            } else {
              $(".btn-play")[_0x4fb9("0x54c")]();
            }
            if (!style[_0x4fb9("0x617")]) {
              _0x4acf38[_0x4fb9("0x618")]();
            }
          }, 500);
        },
        "quickResp" : function() {
          if (!props["quickResp"]) {
            return;
          }
          this[_0x4fb9("0x619")]();
          this["gameServerConnect"](this["ws"]);
          style[_0x4fb9("0x617")] = ![];
          this[_0x4fb9("0x618")]();
        },
        "autoResp" : function() {
          if (!props["autoResp"]) {
            return;
          }
          this[_0x4fb9("0x61a")]();
          $("#overlays")[_0x4fb9("0x61b")]()["hide"]();
          if ($(".btn-play-guest")["is"](_0x4fb9("0x616"))) {
            $(_0x4fb9("0x615"))[_0x4fb9("0x54c")]();
            return;
          }
          $(".btn-play")[_0x4fb9("0x54c")]();
        },
        "setAutoResp" : function() {
          if (props[_0x4fb9("0x61c")]) {
            if (!$(_0x4fb9("0x61d"))[_0x4fb9("0x61e")](_0x4fb9("0x61f"))) {
              $(_0x4fb9("0x61d"))[_0x4fb9("0x54c")]();
              this[_0x4fb9("0x620")] = !![];
            }
          }
        },
        "toggleAutoResp" : function() {
          props[_0x4fb9("0x61c")] = !props[_0x4fb9("0x61c")];
          this[_0x4fb9("0x61a")]();
          this[_0x4fb9("0x5fa")](props[_0x4fb9("0x61c")], _0x4fb9("0x621"));
        },
        "copyLb" : function() {
          var _msgSibling = $(_0x4fb9("0x622"));
          $(_0x4fb9("0x566"))[_0x4fb9("0x4a6")](_msgSibling);
          _msgSibling[_0x4fb9("0x4ac")]($("#leaderboard-positions")[_0x4fb9("0x1fe")]())[_0x4fb9("0x623")]();
          try {
            document[_0x4fb9("0x624")](_0x4fb9("0x2b"));
          } catch (_0x4d8646) {
          }
          _msgSibling[_0x4fb9("0x625")]();
        },
        "setPause" : function() {
          this["pause"] = !this[_0x4fb9("0x172")];
          style[_0x4fb9("0x172")] = this[_0x4fb9("0x172")];
          if (this[_0x4fb9("0x172")]) {
            style[_0x4fb9("0x626")]();
            $(_0x4fb9("0x5a4"))[_0x4fb9("0x5ec")]();
          } else {
            $(_0x4fb9("0x5a4"))[_0x4fb9("0x5f1")]();
          }
        },
        "setCenteredLb" : function() {
          if (props[_0x4fb9("0x627")]) {
            $(_0x4fb9("0x603"))["addClass"]("hud-text-center");
          } else {
            $(_0x4fb9("0x603"))[_0x4fb9("0x553")]("hud-text-center");
          }
        },
        "setNormalLb" : function() {
          if (props[_0x4fb9("0x628")]) {
            $(_0x4fb9("0x629"))[_0x4fb9("0x4a5")](messages[_0x4fb9("0x62a")]);
          } else {
            $("#leaderboard-hud h4")[_0x4fb9("0x4a5")](_0x4fb9("0x62b"));
          }
        },
        "setFpsAtTop" : function() {
          if (props[_0x4fb9("0x62c")]) {
            $("#stats-hud")[_0x4fb9("0x553")]("hud-bottom")["addClass"](_0x4fb9("0x62d"));
          } else {
            $(_0x4fb9("0x5fd"))[_0x4fb9("0x553")](_0x4fb9("0x62d"))[_0x4fb9("0x555")](_0x4fb9("0x62e"));
          }
        },
        "setBlockPopups" : function() {
          if (this[_0x4fb9("0x62f")]) {
            $(_0x4fb9("0x630"))["hide"]();
            return;
          }
          if (props[_0x4fb9("0x631")]) {
            this[_0x4fb9("0x631")]();
          } else {
            this["unblockPopups"]();
          }
        },
        "blockPopups" : function() {
          $(_0x4fb9("0x632"))[_0x4fb9("0x5f1")]();
          $(_0x4fb9("0x632"))[_0x4fb9("0x555")](_0x4fb9("0x633"));
          $(_0x4fb9("0x634"))[_0x4fb9("0x61e")](_0x4fb9("0x635"), !![]);
          $(_0x4fb9("0x630"))[_0x4fb9("0x5ec")]();
        },
        "unblockPopups" : function() {
          $(_0x4fb9("0x636"))[_0x4fb9("0x54c")]();
          $(_0x4fb9("0x632"))[_0x4fb9("0x5f1")]();
          $(_0x4fb9("0x632"))[_0x4fb9("0x553")](_0x4fb9("0x633"));
          $(_0x4fb9("0x634"))["prop"](_0x4fb9("0x635"), ![]);
          $(_0x4fb9("0x630"))["hide"]();
        },
        "tempUnblockPopups" : function() {
          if (!props[_0x4fb9("0x631")]) {
            return;
          }
          this[_0x4fb9("0x637")]();
        },
        "displayLeaderboard" : function(text, rationale = "") {
          if (!this[_0x4fb9("0x638")]) {
            return;
          }
          this[_0x4fb9("0x638")]["innerHTML"] = text;
          this["leaderboardDataHUD"][_0x4fb9("0x639")] = rationale;
        },
        "displayStats" : function() {
          if (!props[_0x4fb9("0x63a")]) {
            $(_0x4fb9("0x5fd"))[_0x4fb9("0x5f1")]();
            return;
          }
          var value = "";
          if (style["play"]) {
            if (props["showStatsMass"] && style[_0x4fb9("0x63b")]) {
              value = value + (messages[_0x4fb9("0x5c8")] + ": " + style["playerMass"] + " | ");
            }
            if (style[_0x4fb9("0x63c")]) {
              value = value + (messages[_0x4fb9("0x63d")] + ": " + style[_0x4fb9("0x63c")]);
            }
            if (props[_0x4fb9("0x63e")] && style[_0x4fb9("0x63f")]) {
              value = value + (_0x4fb9("0x640") + style[_0x4fb9("0x63f")]);
            }
            if (props[_0x4fb9("0x641")] && style[_0x4fb9("0x642")]) {
              value = value + (_0x4fb9("0x643") + style[_0x4fb9("0x642")] + _0x4fb9("0x644"));
            }
            if (props["showStatsFPS"]) {
              value = value + _0x4fb9("0x643");
            }
          }
          if (props[_0x4fb9("0x645")]) {
            value = value + (_0x4fb9("0x646") + defaults[_0x4fb9("0x647")]);
          }
          this[_0x4fb9("0x648")]["textContent"] = value;
          var _0x348c25 = this;
          setTimeout(function() {
            _0x348c25[_0x4fb9("0x649")]();
          }, 250);
        },
        "displayTime" : function() {
          if (!props[_0x4fb9("0x5ef")]) {
            $(_0x4fb9("0x5a3"))[_0x4fb9("0x5f1")]();
            return;
          }
          var _0x44ec8b = (new Date)[_0x4fb9("0x64a")]();
          this[_0x4fb9("0x64b")][_0x4fb9("0x64c")] = _0x44ec8b;
          var _0x5f2890 = this;
          setTimeout(function() {
            _0x5f2890[_0x4fb9("0x5f0")]();
          }, 1E3);
        },
        "displayParties" : function() {
          var text = "";
          var indexLookupKey = 0;
          for (; indexLookupKey < this[_0x4fb9("0x64d")]["length"]; indexLookupKey++) {
            text = text + (_0x4fb9("0x64e") + this["parties"][indexLookupKey] + _0x4fb9("0x64f") + this[_0x4fb9("0x64d")][indexLookupKey] + _0x4fb9("0x650") + this["parties"][indexLookupKey] + _0x4fb9("0x651"));
          }
          if (text === "") {
            this[_0x4fb9("0x652")][_0x4fb9("0x653")] = _0x4fb9("0x654");
          } else {
            this["activeParties"][_0x4fb9("0x653")] = "";
          }
          this[_0x4fb9("0x652")]["innerHTML"] = text;
        },
        "displayTop5" : function() {
          if (!props[_0x4fb9("0x5eb")]) {
            return;
          }
          var text = "";
          var fixedW = 0;
          var length = this["top5"]["length"];
          var i = 0;
          for (; i < length; i++) {
            fixedW = fixedW + this[_0x4fb9("0x655")][i][_0x4fb9("0x5c8")];
            if (i >= this[_0x4fb9("0x656")]) {
              continue;
            }
            text = text + ('<li><span class="cell-counter" style="background-color: ' + this[_0x4fb9("0x655")][i]["color"] + '">' + (i + 1) + _0x4fb9("0x657"));
            if (props[_0x4fb9("0x5ed")]) {
              text = text + (_0x4fb9("0x658") + this["top5"][i]["id"] + _0x4fb9("0x659"));
            }
            text = text + (_0x4fb9("0x65a") + this[_0x4fb9("0x65b")](this[_0x4fb9("0x655")][i]["x"], this[_0x4fb9("0x655")][i]["y"]) + _0x4fb9("0x65c"));
            text = text + ('<span class="top5-mass-color">[' + this["shortMassFormat"](this[_0x4fb9("0x655")][i][_0x4fb9("0x5c8")]) + _0x4fb9("0x65d") + this[_0x4fb9("0x65e")](this[_0x4fb9("0x655")][i][_0x4fb9("0x5c4")]) + _0x4fb9("0x65f"));
          }
          this["top5pos"]["innerHTML"] = text;
          if (style["play"] && style[_0x4fb9("0x63b")]) {
            fixedW = fixedW + style[_0x4fb9("0x63b")];
            length++;
          }
          this["top5totalMass"][_0x4fb9("0x64c")] = this[_0x4fb9("0x660")](fixedW);
          this["top5totalPlayers"]["textContent"] = length;
        },
        "setTop5limit" : function(canCreateDiscussions) {
          if (!canCreateDiscussions) {
            return;
          }
          this[_0x4fb9("0x656")] = canCreateDiscussions;
        },
        "displayChatHistory" : function(canCreateDiscussions) {
          if (canCreateDiscussions) {
            this[_0x4fb9("0x661")](!![]);
            var i = 0;
            for (; i < this[_0x4fb9("0x662")]["length"]; i++) {
              $(_0x4fb9("0x663"))[_0x4fb9("0x4a6")](_0x4fb9("0x664") + this["chatHistory"][i][_0x4fb9("0x5c4")] + _0x4fb9("0x665") + this[_0x4fb9("0x662")][i]["message"] + _0x4fb9("0x666"));
            }
            return;
          }
          this[_0x4fb9("0x661")](![]);
        },
        "clearChatHistory" : function(canCreateDiscussions) {
          $(_0x4fb9("0x663"))["empty"]();
          if (canCreateDiscussions) {
            toastr[_0x4fb9("0x1e8")]();
            if (props["showChatBox"]) {
              $(_0x4fb9("0x667"))[_0x4fb9("0x625")]();
              this[_0x4fb9("0x662")]["length"] = 0;
            }
          }
        },
        "displayChatInfo" : function($table, steps) {
          if ($table) {
            toastr[_0x4fb9("0x668")](messages[steps + "A"]);
          } else {
            toastr["error"](messages[steps + "B"]);
          }
        },
        "setDisableChat" : function() {
          props[_0x4fb9("0x669")] = props[_0x4fb9("0x66a")];
          this[_0x4fb9("0x66b")]();
        },
        "hideChat" : function() {
          props[_0x4fb9("0x669")] = !props[_0x4fb9("0x669")];
          this[_0x4fb9("0x66b")]();
          this[_0x4fb9("0x5fa")](!props["hideChat"], _0x4fb9("0x66c"));
        },
        "setHideChat" : function() {
          if (props[_0x4fb9("0x669")]) {
            $(_0x4fb9("0x5b0"))[_0x4fb9("0x5f1")]();
          }
          this["setShowChatBox"]();
        },
        "setShowChatBox" : function() {
          if (!props[_0x4fb9("0x669")] && props[_0x4fb9("0x66d")]) {
            $("#chat-box")[_0x4fb9("0x5ec")]();
          } else {
            $(_0x4fb9("0x5b1"))["hide"]();
          }
        },
        "enterChatMessage" : function() {
          var _obj = $(_0x4fb9("0x5b0"));
          var $el = $(_0x4fb9("0x66e"));
          if (!_obj["is"](_0x4fb9("0x616"))) {
            _obj[_0x4fb9("0x5ec")]();
            $el[_0x4fb9("0x66f")]();
            $el[_0x4fb9("0x4ac")]("");
          } else {
            var artistTrack = $el["val"]();
            if (artistTrack["length"]) {
              this["sendChatMessage"](101, artistTrack);
              if (style["play"]) {
                $el[_0x4fb9("0x670")]();
                _obj[_0x4fb9("0x5f1")]();
              }
            } else {
              $el[_0x4fb9("0x670")]();
              _obj[_0x4fb9("0x5f1")]();
            }
            $el["val"]("");
          }
        },
        "showMenu" : function(query) {
          if (window["MC"] && window["MC"]["showNickDialog"]) {
            $(".ogario-menu")[_0x4fb9("0x5ec")]();
            $(".menu-panel")[_0x4fb9("0x5f1")]();
            if (!style[_0x4fb9("0x617")] && !this[_0x4fb9("0x620")]) {
              $("#stats")[_0x4fb9("0x5ec")]();
            } else {
              $(_0x4fb9("0x671"))[_0x4fb9("0x5ec")]();
            }
            window["MC"][_0x4fb9("0x672")](300);
            if ($("#oferwallContainer")["is"](_0x4fb9("0x616"))) {
              window[_0x4fb9("0x673")]();
            }
            if ($(_0x4fb9("0x674"))["is"](_0x4fb9("0x616"))) {
              window[_0x4fb9("0x675")]();
            }
            return;
          }
          if (query) {
            $(_0x4fb9("0x676"))[_0x4fb9("0x677")](query);
          } else {
            $(_0x4fb9("0x676"))[_0x4fb9("0x5ec")]();
          }
        },
        "hideMenu" : function(callback) {
          if (window["MC"] && window["MC"][_0x4fb9("0x672")]) {
            $(_0x4fb9("0x678"))["hide"]();
            return;
          }
          if (callback) {
            $(_0x4fb9("0x676"))[_0x4fb9("0x679")](callback);
          } else {
            $(_0x4fb9("0x676"))[_0x4fb9("0x5f1")]();
          }
        },
        "escapeHTML" : function(s) {
          return String(s)[_0x4fb9("0x86")](/[&<>"'\/]/g, function(s) {
            return entityMap[s];
          });
        },
        "checkImgURL" : function(message = "", _0x4a13fb = ![]) {
          var messageWarn = "";
          var dd = "jpg|jpeg|png";
          if (!_0x4a13fb) {
            dd = dd + "|gif";
          }
          var i = 0;
          for (; i < fftBinsOfFreq["length"]; i++) {
            var s = fftBinsOfFreq[i]["pattern"]["replace"](_0x4fb9("0x67a"), dd);
            var inlineAttributeCommentRegex = new RegExp("^" + s + "$", "i");
            if (inlineAttributeCommentRegex[_0x4fb9("0x20f")](message)) {
              messageWarn = message;
              break;
            }
          }
          return messageWarn;
        },
        "checkSkinURL" : function(mmCoreSplitViewBlock) {
          return this["checkImgURL"](mmCoreSplitViewBlock, !![]);
        },
        "loadSettings" : function() {
          var element = null;
          if (window[_0x4fb9("0x208")][_0x4fb9("0x49f")](_0x4fb9("0x67b")) !== null) {
            element = JSON["parse"](window["localStorage"][_0x4fb9("0x49f")](_0x4fb9("0x67b")));
          }
          var name;
          for (name in props) {
            if (props[_0x4fb9("0x122")](name)) {
              if (element && element[_0x4fb9("0x122")](name)) {
                props[name] = element[name];
              }
              if (style[_0x4fb9("0x122")](name)) {
                style[name] = props[name];
              }
            }
          }
        },
        "saveSettings" : function(data, callback) {
          window["localStorage"][_0x4fb9("0x67c")](callback, JSON[_0x4fb9("0x20a")](data));
        },
        "exportSettings" : function() {
          var data = {
            "ogarioCommands" : store,
            "ogarioHotkeys" : attributes,
            "ogarioPlayerProfiles" : res,
            "ogarioSettings" : props,
            "ogarioThemeSettings" : options
          };
          var key;
          for (key in data) {
            if (data[_0x4fb9("0x122")](key)) {
              var _0x1e1127 = $(_0x4fb9("0x67d") + key)[_0x4fb9("0x61e")](_0x4fb9("0x61f"));
              if (!_0x1e1127) {
                delete data[key];
              }
            }
          }
          data = JSON[_0x4fb9("0x20a")](data);
          $(_0x4fb9("0x67e"))[_0x4fb9("0x4ac")](data);
          $(_0x4fb9("0x67f"))[_0x4fb9("0x4ac")]("");
          data = null;
        },
        "importSettings" : function() {
          $(_0x4fb9("0x67f"))[_0x4fb9("0x670")]();
          var PL$10 = $(_0x4fb9("0x67f"))[_0x4fb9("0x4ac")]();
          if (PL$10) {
            PL$10 = JSON[_0x4fb9("0x680")](PL$10);
            var PL$11;
            for (PL$11 in PL$10) {
              if (PL$10["hasOwnProperty"](PL$11)) {
                var _0x1053db = $(_0x4fb9("0x681") + PL$11)[_0x4fb9("0x61e")](_0x4fb9("0x61f"));
                if (!_0x1053db) {
                  continue;
                }
                window[_0x4fb9("0x208")][_0x4fb9("0x67c")](PL$11, JSON[_0x4fb9("0x20a")](PL$10[PL$11]));
              }
            }
            window[_0x4fb9("0x4a1")][_0x4fb9("0x4a2")]();
          }
        },
        "restoreSettings" : function() {
          if (window[_0x4fb9("0x208")][_0x4fb9("0x49f")]("ogarioSettings") !== null) {
            window[_0x4fb9("0x208")][_0x4fb9("0x682")](_0x4fb9("0x67b"));
            window[_0x4fb9("0x4a1")][_0x4fb9("0x4a2")]();
          }
        },
        "setSettings" : function(name, data) {
          if (props[_0x4fb9("0x122")](name) && data !== null) {
            props[name] = data;
            if (style[_0x4fb9("0x122")](name)) {
              style[name] = data;
            }
            switch(name) {
              case _0x4fb9("0x61c"):
                this[_0x4fb9("0x61a")]();
                break;
              case _0x4fb9("0x60a"):
                this[_0x4fb9("0x5bf")]();
                break;
              case _0x4fb9("0x683"):
                this[_0x4fb9("0x5bb")]();
                break;
              case _0x4fb9("0x66a"):
                this["setDisableChat"]();
                break;
              case _0x4fb9("0x684"):
                this[_0x4fb9("0x685")]();
                break;
              case "showChatBox":
                this["setShowChatBox"]();
                break;
              case _0x4fb9("0x5eb"):
                this["setTop5"]();
                break;
              case "showTargeting":
                this[_0x4fb9("0x5ee")]();
                break;
              case _0x4fb9("0x5ef"):
                this["displayTime"]();
                $("#time-hud")[_0x4fb9("0x5ec")]();
                break;
              case _0x4fb9("0x627"):
                this["setCenteredLb"]();
                break;
              case "normalLb":
                this[_0x4fb9("0x686")]();
                break;
              case _0x4fb9("0x62c"):
                this[_0x4fb9("0x687")]();
                break;
              case _0x4fb9("0x63a"):
                this["displayStats"]();
                $(_0x4fb9("0x5fd"))[_0x4fb9("0x5ec")]();
                break;
              case "blockPopups":
                this[_0x4fb9("0x688")]();
                break;
            }
            this[_0x4fb9("0x689")](props, "ogarioSettings");
          }
        },
        "loadProfiles" : function() {
          if (window[_0x4fb9("0x208")][_0x4fb9("0x49f")](_0x4fb9("0x68a")) !== null) {
            res = JSON[_0x4fb9("0x680")](window[_0x4fb9("0x208")]["getItem"]("ogarioPlayerProfiles"));
          } else {
            var _0x2c228e = 0;
            for (; _0x2c228e < 10; _0x2c228e++) {
              res[_0x4fb9("0xb")]({
                "nick" : _0x4fb9("0x68b") + (_0x2c228e + 1),
                "clanTag" : "",
                "skinURL" : "",
                "color" : options[_0x4fb9("0x5c1")]
              });
            }
          }
          if (window["localStorage"][_0x4fb9("0x49f")](_0x4fb9("0x68c")) !== null) {
            this["selectedProfile"] = JSON[_0x4fb9("0x680")](window[_0x4fb9("0x208")][_0x4fb9("0x49f")](_0x4fb9("0x68c")));
          }
          params[_0x4fb9("0x5c4")] = res[this[_0x4fb9("0x68d")]][_0x4fb9("0x5c4")];
          params["clanTag"] = res[this["selectedProfile"]][_0x4fb9("0x5c9")];
          params[_0x4fb9("0x68e")] = res[this["selectedProfile"]][_0x4fb9("0x68e")];
          params[_0x4fb9("0x4b4")] = res[this[_0x4fb9("0x68d")]][_0x4fb9("0x4b4")];
        },
        "changeSkinPreview" : function(e, n) {
          if (!e || !n) {
            return;
          }
          if (n === _0x4fb9("0x68f")) {
            $(_0x4fb9("0x690"))[_0x4fb9("0x553")](_0x4fb9("0x691"))[_0x4fb9("0x4a6")]('<a href="#" id="skin-popover" data-toggle="popover" title="" data-html="true" data-content="<img src=\'' + e[_0x4fb9("0x550")] + "' width='500'>\"></a>");
            $(_0x4fb9("0x692"))["append"]($(e)[_0x4fb9("0x677")](1E3));
            $("#skin-popover")[_0x4fb9("0x693")]();
          } else {
            $("#" + n)[_0x4fb9("0x553")](_0x4fb9("0x691"))["append"]($(e)[_0x4fb9("0x677")](1E3));
          }
        },
        "setSkinPreview" : function(medium, loc) {
          var is_root = loc == _0x4fb9("0x68f");
          if ($("#" + loc + _0x4fb9("0x694"))[_0x4fb9("0x695")]("src") === medium) {
            return;
          }
          $("#" + loc)[_0x4fb9("0x696")]()[_0x4fb9("0x555")](_0x4fb9("0x691"));
          if (!medium) {
            if (is_root) {
              $(_0x4fb9("0x697"))[_0x4fb9("0x693")](_0x4fb9("0x5f1"));
            }
            return;
          }
          if (!this[_0x4fb9("0x698")](medium)) {
            if (is_root) {
              var artistTrack = "<p><strong>Submitted URL is not valid.</strong></p>";
              if (/hizliresim.com/[_0x4fb9("0x20f")](medium)) {
                artistTrack = artistTrack + _0x4fb9("0x699");
              }
              artistTrack = artistTrack + _0x4fb9("0x69a");
              artistTrack = artistTrack + "<p>Supported image hosting sites:</p>";
              artistTrack = artistTrack + _0x4fb9("0x69b");
              var i = 0;
              for (; i < fftBinsOfFreq["length"]; i++) {
                artistTrack = artistTrack + (_0x4fb9("0x69c") + fftBinsOfFreq[i][_0x4fb9("0x69d")] + '" rel="noreferrer noopener" target="_blank">' + fftBinsOfFreq[i][_0x4fb9("0x222")] + '</a></strong><span class="example-url">e.g. <a href="' + fftBinsOfFreq[i][_0x4fb9("0x69e")] + _0x4fb9("0x69f") + fftBinsOfFreq[i][_0x4fb9("0x69e")] + _0x4fb9("0x6a0"));
              }
              artistTrack = artistTrack + _0x4fb9("0x6a1");
              $("#skin")[_0x4fb9("0x695")](_0x4fb9("0x6a2"), artistTrack);
              $(_0x4fb9("0x697"))["popover"]("show");
              $(_0x4fb9("0x697"))["focus"]();
            }
            return;
          }
          var GL_ARRAY_SETTER = this;
          var temp = new Image;
          temp[_0x4fb9("0x6a3")] = _0x4fb9("0x6a4");
          temp[_0x4fb9("0x6a5")] = function() {
            GL_ARRAY_SETTER["changeSkinPreview"](temp, loc);
            if (is_root) {
              $(_0x4fb9("0x697"))["popover"](_0x4fb9("0x5f1"));
            }
          };
          temp[_0x4fb9("0x1a2")] = function() {
            if (is_root) {
              var artistTrack = "<p><strong>Error while loading image.</strong></p>";
              artistTrack = artistTrack + _0x4fb9("0x6a6");
              $(_0x4fb9("0x697"))[_0x4fb9("0x695")](_0x4fb9("0x6a2"), artistTrack);
              $(_0x4fb9("0x697"))[_0x4fb9("0x693")]("show");
              $(_0x4fb9("0x697"))[_0x4fb9("0x66f")]();
            }
          };
          temp[_0x4fb9("0x550")] = medium;
        },
        "setProfile" : function() {
          var LAT = (res["length"] + this[_0x4fb9("0x68d")] - 1) % res["length"];
          var chosen_prime = (this[_0x4fb9("0x68d")] + 1) % res["length"];
          this[_0x4fb9("0x6a7")](res[LAT][_0x4fb9("0x68e")], "prev-profile");
          this[_0x4fb9("0x6a7")](res[this[_0x4fb9("0x68d")]][_0x4fb9("0x68e")], _0x4fb9("0x68f"));
          this[_0x4fb9("0x6a7")](res[chosen_prime]["skinURL"], _0x4fb9("0x6a8"));
          this[_0x4fb9("0x689")](this["selectedProfile"], _0x4fb9("0x68c"));
          $(_0x4fb9("0x6a9"))[_0x4fb9("0x4ac")](res[this["selectedProfile"]][_0x4fb9("0x5c4")]);
          $(_0x4fb9("0x6aa"))[_0x4fb9("0x4ac")](res[this["selectedProfile"]][_0x4fb9("0x5c9")]);
          $(_0x4fb9("0x697"))[_0x4fb9("0x4ac")](res[this[_0x4fb9("0x68d")]]["skinURL"]);
          $(_0x4fb9("0x560"))[_0x4fb9("0x4ac")](res[this[_0x4fb9("0x68d")]][_0x4fb9("0x4b4")]);
          $(_0x4fb9("0x55f"))[_0x4fb9("0x4b2")](_0x4fb9("0x562"), res[this["selectedProfile"]][_0x4fb9("0x4b4")]);
          $("#skins a")[_0x4fb9("0x553")]("selected");
          $(_0x4fb9("0x6ab") + this["selectedProfile"] + "']")[_0x4fb9("0x555")](_0x4fb9("0x6ac"));
        },
        "prevProfile" : function() {
          this[_0x4fb9("0x6ad")]();
          this[_0x4fb9("0x68d")] = (res["length"] + this[_0x4fb9("0x68d")] - 1) % res["length"];
          this[_0x4fb9("0x6ae")]();
        },
        "nextProfile" : function() {
          this[_0x4fb9("0x6ad")]();
          this[_0x4fb9("0x68d")] = (this[_0x4fb9("0x68d")] + 1) % res["length"];
          this[_0x4fb9("0x6ae")]();
        },
        "selectProfile" : function(value) {
          this["setPlayerSettings"]();
          this[_0x4fb9("0x68d")] = parseInt(value);
          this[_0x4fb9("0x6ae")]();
        },
        "addOption" : function(combo, index, options, callback) {
          $(combo)[_0x4fb9("0x4a6")]('<label><input type="checkbox" id="' + index + _0x4fb9("0x6af") + options + _0x4fb9("0x6b0"));
          $("#" + index)[_0x4fb9("0x61e")](_0x4fb9("0x61f"), callback);
        },
        "addOptions" : function(options, index) {
          if (!options) {
            return;
          }
          $("#og-options")["append"](_0x4fb9("0x6b1") + index + '"><h5 class="menu-main-color">' + messages[index] + "</h5></div>");
          var i = 0;
          for (; i < options["length"]; i++) {
            var prop = options[i];
            if (props["hasOwnProperty"](prop)) {
              $("." + index)[_0x4fb9("0x4a6")](_0x4fb9("0x6b2") + messages[prop] + ' <input type="checkbox" class="js-switch" id="' + prop + _0x4fb9("0x6b3"));
              $("#" + prop)[_0x4fb9("0x61e")](_0x4fb9("0x61f"), props[prop]);
            }
          }
        },
        "addInputBox" : function(summaryItems, name, url, to) {
          $(summaryItems)[_0x4fb9("0x4a6")](_0x4fb9("0x4c3") + messages[name] + '</span><input id="' + name + _0x4fb9("0x4c5") + url + _0x4fb9("0x4be") + props[name] + _0x4fb9("0x4c6"));
          var propTypes = this;
          $("#" + name)["on"](_0x4fb9("0x4c1"), function() {
            props[name] = this[_0x4fb9("0x233")];
            propTypes[to]();
            propTypes[_0x4fb9("0x689")](props, _0x4fb9("0x67b"));
          });
        },
        "addSliderBox" : function(desiredPriority, name, courseId, options, url, to) {
          $(desiredPriority)[_0x4fb9("0x4a6")](_0x4fb9("0x6b4") + messages[name] + _0x4fb9("0x6b5") + name + '-value" class="value">' + props[name] + _0x4fb9("0x4bc") + name + '-slider" type="range" min="' + courseId + '" max="' + options + _0x4fb9("0x4bd") + url + '" value="' + props[name] + _0x4fb9("0x4bf"));
          var propTypes = this;
          if (to) {
            $("#" + name + _0x4fb9("0x4c0"))["on"](_0x4fb9("0x4c1"), function() {
              var val = parseFloat($(this)["val"]());
              $("#" + name + "-value")[_0x4fb9("0x1fe")](val);
              props[name] = val;
              if (style["hasOwnProperty"](name)) {
                style[name] = val;
              }
              propTypes[to]();
              propTypes[_0x4fb9("0x689")](props, _0x4fb9("0x67b"));
            });
          } else {
            $("#" + name + "-slider")["on"]("input", function() {
              var val = parseFloat($(this)[_0x4fb9("0x4ac")]());
              $("#" + name + _0x4fb9("0x4c2"))[_0x4fb9("0x1fe")](val);
              props[name] = val;
              if (style[_0x4fb9("0x122")](name)) {
                style[name] = val;
              }
              propTypes["saveSettings"](props, "ogarioSettings");
            });
          }
        },
        "setLang" : function() {
          if (loc !== "pl") {
            return;
          }
          if (window[_0x4fb9("0x6b6")] && window[_0x4fb9("0x6b6")]["en"]) {
            var key;
            for (key in window[_0x4fb9("0x6b6")]["en"]) {
              if (window["i18n_dict"]["en"][_0x4fb9("0x122")](key) && messages[_0x4fb9("0x122")](key)) {
                window["i18n_dict"]["en"][key] = messages[key];
              }
            }
          }
        },
        "setMenu" : function() {
          var _0x380d6b = this;
          document["title"] = this[_0x4fb9("0x222")];
          $(_0x4fb9("0x6b7"))[_0x4fb9("0x6b8")]('<div id="exp-bar" class="agario-panel"><span class="ogicon-user"></span><div class="agario-exp-bar progress"><span class="progress-bar-text"></span><div class="progress-bar progress-bar-striped" style="width: 0%;"></div></div><div class="progress-bar-star"></div></div><div id="main-menu" class="agario-panel"><ul class="menu-tabs"><li class="start-tab active"><a href="#main-panel" class="active ogicon-home" data-toggle="tab-tooltip" title="' + messages["start"] + 
          _0x4fb9("0x6b9") + messages[_0x4fb9("0x6ba")] + _0x4fb9("0x6bb") + messages[_0x4fb9("0x6bc")] + _0x4fb9("0x6bd") + messages[_0x4fb9("0x6be")] + _0x4fb9("0x6bf") + messages[_0x4fb9("0x6c0")] + '"></a></li><li class="music-tab"><a href="#music" class="ogicon-music" data-toggle="tab-tooltip" title="Radio / ' + messages[_0x4fb9("0x6c1")] + '"></a></li></ul><div id="main-panel" class="menu-panel"></div><div id="profile" class="menu-panel"></div><div id="og-settings" class="menu-panel"><div class="submenu-panel"></div></div><div id="theme" class="menu-panel"></div><div id="music" class="menu-panel"></div></div>');
          $("#main-panel")[_0x4fb9("0x4a6")]('<a href="#" class="quick quick-menu ogicon-menu"></a><a href="#" class="quick quick-skins ogicon-images"></a><div id="profiles"><div id="prev-profile" class="skin-switch"></div><div id="skin-preview"></div><div id="next-profile" class="skin-switch"></div></div>');
          $(_0x4fb9("0x6c2"))["appendTo"]($("#main-panel"));
          $(_0x4fb9("0x6c3"))[_0x4fb9("0x625")]();
          $("#nick")[_0x4fb9("0x6b8")](_0x4fb9("0x6c4"));
          $(_0x4fb9("0x6a9"))[_0x4fb9("0x4a4")]($(_0x4fb9("0x6c5")));
          $(_0x4fb9("0x6c5"))[_0x4fb9("0x4a6")](_0x4fb9("0x6c6"));
          $(_0x4fb9("0x6c5"))[_0x4fb9("0x6c7")](_0x4fb9("0x6c8") + params[_0x4fb9("0x4b4")] + _0x4fb9("0x6c9"));
          $(_0x4fb9("0x6ca"))[_0x4fb9("0x6cb")]($(_0x4fb9("0x55f")));
          $(_0x4fb9("0x6cc"))[_0x4fb9("0x6b8")](_0x4fb9("0x6cd"));
          $(_0x4fb9("0x6ce"))[_0x4fb9("0x4a4")](_0x4fb9("0x6cf"));
          $(_0x4fb9("0x6cf"))[_0x4fb9("0x555")]("clearfix")[_0x4fb9("0x6b8")](_0x4fb9("0x6d0"));
          $(_0x4fb9("0x6d1"))[_0x4fb9("0x6c7")](_0x4fb9("0x6d2"));
          $(_0x4fb9("0x6d3"))[_0x4fb9("0x4a6")](_0x4fb9("0x6d4"));
          $("#pre-join-party-btn:first, #join-party-btn:first, #create-party-btn:first, #leave-party-btn:first, #joinPartyToken:first, .party-icon-back:first")["appendTo"]($(_0x4fb9("0x6d3")));
          $(_0x4fb9("0x6d5"))[_0x4fb9("0x4a4")]($(_0x4fb9("0x6d6")));
          $(_0x4fb9("0x6d7"))[_0x4fb9("0x4a4")]($(_0x4fb9("0x6d8")))[_0x4fb9("0x555")](_0x4fb9("0x6d9"));
          $(_0x4fb9("0x6da"))[_0x4fb9("0x695")]("id", "statsContinue2");
          $(_0x4fb9("0x6b7"))[_0x4fb9("0x696")]()[_0x4fb9("0x625")]();
          $(_0x4fb9("0x6db"))[_0x4fb9("0x555")](_0x4fb9("0x6dc"));
          $(_0x4fb9("0x6db"))[_0x4fb9("0x4a6")](_0x4fb9("0x6dd") + messages[_0x4fb9("0x6de")] + _0x4fb9("0x6df") + this[_0x4fb9("0x137")] + _0x4fb9("0x6e0"));
          $(_0x4fb9("0x6e1"))[_0x4fb9("0x555")]("ogario-menu")[_0x4fb9("0x6e2")]("id");
          $(_0x4fb9("0x6e3"))[_0x4fb9("0x4a4")]($(_0x4fb9("0x6e4")))["removeClass"]("agario-side-panel");
          $(_0x4fb9("0x6e5"))[_0x4fb9("0x6c7")](_0x4fb9("0x6e6") + messages[_0x4fb9("0x6e7")] + _0x4fb9("0x6e8") + messages[_0x4fb9("0x637")] + _0x4fb9("0x55d"));
          $(_0x4fb9("0x6e9"))["addClass"](_0x4fb9("0x6ea"));
          $(_0x4fb9("0x6eb"))[_0x4fb9("0x696")]();
          $(_0x4fb9("0x6ec"))["after"](_0x4fb9("0x6ed"));
          $(_0x4fb9("0x6ee"))[_0x4fb9("0x4a4")]($("#profile"));
          $(_0x4fb9("0x6ef"))["appendTo"]($(_0x4fb9("0x6e4")));
          $(_0x4fb9("0x6eb"))[_0x4fb9("0x4a6")](_0x4fb9("0x6f0") + messages[_0x4fb9("0x6f1")] + _0x4fb9("0x6f2"));
          if (!this[_0x4fb9("0x62f")]) {
            $(_0x4fb9("0x6f3"))["prepend"](_0x4fb9("0x6f4") + messages["page_shop"] + _0x4fb9("0x6f5") + messages["page_menu_main_free_coins"] + _0x4fb9("0x6f6") + messages[_0x4fb9("0x6f7")] + '"></a><a href="#" class="quick-quests ogicon-trophy" data-toggle="tab-tooltip" data-placement="left" title="' + messages[_0x4fb9("0x6f8")] + '"></a>');
          }
          $(_0x4fb9("0x6f9"))[_0x4fb9("0x625")]();
          $(_0x4fb9("0x6fa"))[_0x4fb9("0x4a4")]($(_0x4fb9("0x6db")));
          $(_0x4fb9("0x6fb"))[_0x4fb9("0x696")]();
          $(_0x4fb9("0x6fb"))[_0x4fb9("0x4a6")](_0x4fb9("0x6fc"));
          $(_0x4fb9("0x6fa"))["appendTo"]($(_0x4fb9("0x6fd")))[_0x4fb9("0x555")](_0x4fb9("0x6fe"));
          $(_0x4fb9("0x6ff"))["remove"]();
          $(_0x4fb9("0x700"))[_0x4fb9("0x555")](_0x4fb9("0x701"));
          $(_0x4fb9("0x6fb"))["append"](_0x4fb9("0x702") + messages[_0x4fb9("0x703")] + "</a></div>");
          $(_0x4fb9("0x704"))[_0x4fb9("0x625")]();
          $("#advertisement, #adbg, #a320x250, #g320x250, #s320x250, #adsBottom")[_0x4fb9("0x569")](_0x4fb9("0x705"), _0x4fb9("0x56c"));
          $("#advertisement")[_0x4fb9("0x553")](_0x4fb9("0x706"));
          $(_0x4fb9("0x707"))[_0x4fb9("0x569")]({
            "z-index" : "1",
            "opacity" : "0",
            "bottom" : _0x4fb9("0x708")
          });
          $(_0x4fb9("0x709"))[_0x4fb9("0x625")]();
          $(_0x4fb9("0x6d6"))["append"]('<div id="og-options"></div>');
          this[_0x4fb9("0x70a")]([], _0x4fb9("0x70b"));
          this[_0x4fb9("0x70a")]([_0x4fb9("0x60f")], _0x4fb9("0x70c"));
          this["addOptions"]([_0x4fb9("0x70d"), _0x4fb9("0x61c")], _0x4fb9("0x70e"));
          this["addOptions"](["noNames", _0x4fb9("0x70f"), _0x4fb9("0x710"), _0x4fb9("0x711"), _0x4fb9("0x608"), _0x4fb9("0x712")], _0x4fb9("0x713"));
          this[_0x4fb9("0x70a")](["showMass", _0x4fb9("0x714"), _0x4fb9("0x715"), _0x4fb9("0x716"), "hideEnemiesMass", _0x4fb9("0x717"), _0x4fb9("0x718"), _0x4fb9("0x719")], _0x4fb9("0x71a"));
          if (this["protocolMode"]) {
            this["addOptions"]([_0x4fb9("0x5e7")], _0x4fb9("0x71b"));
          } else {
            this[_0x4fb9("0x70a")]([_0x4fb9("0x5e7"), "vanillaSkins"], "skinsGroup");
          }
          this[_0x4fb9("0x70a")]([_0x4fb9("0x71c"), "autoHideFood", "autoHideFoodOnZoom", _0x4fb9("0x71d")], _0x4fb9("0x71e"));
          this[_0x4fb9("0x70a")]([_0x4fb9("0x71f"), "myTransparentSkin", _0x4fb9("0x5fc"), "transparentCells", "transparentViruses"], _0x4fb9("0x720"));
          this[_0x4fb9("0x70a")]([_0x4fb9("0x600"), _0x4fb9("0x605"), _0x4fb9("0x721")], _0x4fb9("0x722"));
          this["addOptions"]([_0x4fb9("0x66a"), "chatSounds", _0x4fb9("0x723"), _0x4fb9("0x724"), _0x4fb9("0x725"), _0x4fb9("0x66d")], _0x4fb9("0x726"));
          this[_0x4fb9("0x70a")](["showMiniMap", _0x4fb9("0x683"), _0x4fb9("0x727"), _0x4fb9("0x5d9")], _0x4fb9("0x728"));
          this[_0x4fb9("0x70a")]([_0x4fb9("0x5f6"), _0x4fb9("0x5f4"), "virColors", _0x4fb9("0x5f2"), _0x4fb9("0x729"), _0x4fb9("0x72a"), "teammatesInd"], _0x4fb9("0x72b"));
          this[_0x4fb9("0x70a")]([_0x4fb9("0x72c"), "mouseFeed", _0x4fb9("0x72d")], _0x4fb9("0x72e"));
          this[_0x4fb9("0x70a")]([_0x4fb9("0x5eb"), "showTargeting", _0x4fb9("0x72f"), "centeredLb", _0x4fb9("0x628"), _0x4fb9("0x62c")], _0x4fb9("0x730"));
          this[_0x4fb9("0x70a")](["showStats", _0x4fb9("0x731"), _0x4fb9("0x63e"), "showStatsN16", _0x4fb9("0x645"), _0x4fb9("0x5ef")], _0x4fb9("0x732"));
          if (!this[_0x4fb9("0x62f")]) {
            this[_0x4fb9("0x70a")](["blockPopups"], "extrasGroup");
            $(_0x4fb9("0x733"))[_0x4fb9("0x555")](_0x4fb9("0x734"));
            $(_0x4fb9("0x735"))[_0x4fb9("0x6c7")]('<label class="noSkins">' + messages["noSkins"] + _0x4fb9("0x736"));
            $(_0x4fb9("0x737"))[_0x4fb9("0x4a4")]($(_0x4fb9("0x738")));
            $(_0x4fb9("0x739"))[_0x4fb9("0x6c7")]('<label class="noColors">' + messages[_0x4fb9("0x73a")] + _0x4fb9("0x736"));
            $("#noColors")["appendTo"]($(".noColors"));
            $(_0x4fb9("0x73b"))[_0x4fb9("0x6c7")](_0x4fb9("0x73c") + messages[_0x4fb9("0x620")] + _0x4fb9("0x736"));
            $(_0x4fb9("0x61d"))[_0x4fb9("0x4a4")]($(_0x4fb9("0x73d")));
            $(_0x4fb9("0x73d"))[_0x4fb9("0x6c7")](_0x4fb9("0x73e") + messages[_0x4fb9("0x60c")] + _0x4fb9("0x736"));
            $("#showQuest")[_0x4fb9("0x4a4")]($(_0x4fb9("0x73f")));
            $(_0x4fb9("0x740"))["remove"]();
            $(_0x4fb9("0x741"))[_0x4fb9("0x4a4")]($(_0x4fb9("0x742")))[_0x4fb9("0x555")](_0x4fb9("0x743"));
          }
          this["addSliderBox"](_0x4fb9("0x744"), _0x4fb9("0x745"), 100, 200, 1);
          this[_0x4fb9("0x4f6")](_0x4fb9("0x746"), _0x4fb9("0x747"), .75, .99, .01);
          $(_0x4fb9("0x748"))[_0x4fb9("0x4a6")](_0x4fb9("0x749") + messages[_0x4fb9("0x74a")] + _0x4fb9("0x558"));
          $(_0x4fb9("0x748"))[_0x4fb9("0x4a6")](_0x4fb9("0x55b") + messages[_0x4fb9("0x74b")] + _0x4fb9("0x55d"));
          $(_0x4fb9("0x74c"))[_0x4fb9("0x4a6")](_0x4fb9("0x74d") + messages["thanks"] + _0x4fb9("0x74e") + messages[_0x4fb9("0x74f")] + "</a></span></div>");
          $(_0x4fb9("0x74c"))[_0x4fb9("0x4a6")](_0x4fb9("0x750") + messages[_0x4fb9("0x6c1")] + _0x4fb9("0x751"));
          $(_0x4fb9("0x74c"))["append"](_0x4fb9("0x6ed"));
          this[_0x4fb9("0x515")](_0x4fb9("0x752"), _0x4fb9("0x753"), "Sound URL", "setMessageSound");
          this["addInputBox"](".sounds-panel", "commandSound", _0x4fb9("0x754"), _0x4fb9("0x755"));
          $("body")[_0x4fb9("0x4a6")](_0x4fb9("0x756") + messages[_0x4fb9("0x757")] + _0x4fb9("0x758") + messages["totalPartyMass"] + _0x4fb9("0x759") + messages[_0x4fb9("0x172")] + _0x4fb9("0x75a") + messages[_0x4fb9("0x75b")] + _0x4fb9("0x75c"));
          $(_0x4fb9("0x566"))["append"](_0x4fb9("0x75d"));
          $(_0x4fb9("0x566"))["append"]('<div id="message-box"><div id="chat-emoticons"></div><div id="message-menu"><a href="#" class="chat-sound-notifications ogicon-volume-high"></a><a href="#" class="chat-active-users ogicon-user-check"></a><a href="#" class="chat-muted-users ogicon-user-minus"></a><a href="#" class="show-chat-emoticons ogicon-smile"></a></div><input type="text" id="message" class="form-control" placeholder="' + messages[_0x4fb9("0x75e")] + _0x4fb9("0x75f"));
          $(_0x4fb9("0x566"))[_0x4fb9("0x4a6")]('<div id="chat-box"></div>');
          var folderEntity;
          for (folderEntity in folder) {
            if (folder[_0x4fb9("0x122")](folderEntity)) {
              $("#chat-emoticons")[_0x4fb9("0x4a6")]('<img src="https://cdn.ogario.ovh/static/emoticons/' + folder[folderEntity] + _0x4fb9("0x760") + folderEntity + _0x4fb9("0x761"));
            }
          }
          $("body")["append"](_0x4fb9("0x762") + messages[_0x4fb9("0x171")] + _0x4fb9("0x763"));
          $(_0x4fb9("0x764"))[_0x4fb9("0x4a6")](_0x4fb9("0x765") + messages[_0x4fb9("0x766")] + _0x4fb9("0x767") + messages[_0x4fb9("0x768")] + _0x4fb9("0x769"));
          this["addOption"](_0x4fb9("0x764"), _0x4fb9("0x76a"), messages[_0x4fb9("0x76b")], !![]);
          this[_0x4fb9("0x76c")](_0x4fb9("0x764"), _0x4fb9("0x76d"), messages["hotkeys"], !![]);
          this["addOption"](_0x4fb9("0x764"), "export-ogarioPlayerProfiles", messages[_0x4fb9("0x76e")], !![]);
          this[_0x4fb9("0x76c")]("#exp-imp-settings", _0x4fb9("0x76f"), messages["settings"], !![]);
          this[_0x4fb9("0x76c")](_0x4fb9("0x764"), _0x4fb9("0x770"), messages["theme"], !![]);
          $("#exp-imp-settings")[_0x4fb9("0x4a6")]('<textarea id="export-settings" class="form-control" rows="14" cols="100" spellcheck="false" readonly /><button id="export-settings-btn" class="btn btn-block btn-success">' + messages[_0x4fb9("0x766")] + _0x4fb9("0x558"));
          $(_0x4fb9("0x764"))[_0x4fb9("0x4a6")](_0x4fb9("0x765") + messages["importSettings"] + "</h1><h2>" + messages[_0x4fb9("0x771")] + _0x4fb9("0x769"));
          this[_0x4fb9("0x76c")](_0x4fb9("0x764"), _0x4fb9("0x772"), messages[_0x4fb9("0x76b")], !![]);
          this[_0x4fb9("0x76c")](_0x4fb9("0x764"), "import-ogarioHotkeys", messages["hotkeys"], !![]);
          this[_0x4fb9("0x76c")](_0x4fb9("0x764"), _0x4fb9("0x773"), messages[_0x4fb9("0x76e")], !![]);
          this[_0x4fb9("0x76c")](_0x4fb9("0x764"), _0x4fb9("0x774"), messages["settings"], !![]);
          this[_0x4fb9("0x76c")](_0x4fb9("0x764"), _0x4fb9("0x775"), messages["theme"], !![]);
          $("#exp-imp-settings")[_0x4fb9("0x4a6")](_0x4fb9("0x776") + messages["importSettings"] + _0x4fb9("0x558"));
          if (_0x21f577) {
            _0x21f577[_0x4fb9("0x777")]();
          }
          var i = 0;
          for (; i < res["length"]; i++) {
            $(_0x4fb9("0x778"))["append"](_0x4fb9("0x779") + i + '" id="profile-' + i + '" data-profile="' + i + '" class="skin-switch"></a></div>');
            this["setSkinPreview"](res[i][_0x4fb9("0x68e")], _0x4fb9("0x77a") + i);
            if (i == this[_0x4fb9("0x68d")]) {
              $(_0x4fb9("0x77b") + i)[_0x4fb9("0x555")](_0x4fb9("0x6ac"));
            }
          }
        },
        "setUI" : function() {
          var result = this;
          $(document)["on"]("click", _0x4fb9("0x77c"), function(event) {
            event["preventDefault"]();
            result[_0x4fb9("0x77d")]($(this), _0x4fb9("0x6d9"));
          });
          $(document)["on"]("click", _0x4fb9("0x77e"), function(canCreateDiscussions) {
            canCreateDiscussions[_0x4fb9("0x54e")]();
            result["switchMenuTabs"]($(this), _0x4fb9("0x77f"));
          });
          $(document)["on"](_0x4fb9("0x54c"), _0x4fb9("0x780"), function(canCreateDiscussions) {
            canCreateDiscussions[_0x4fb9("0x54e")]();
            props[_0x4fb9("0x781")] = !props[_0x4fb9("0x781")];
            result[_0x4fb9("0x689")](props, _0x4fb9("0x67b"));
            result["setShowQuickMenu"]();
          });
          $(document)["on"](_0x4fb9("0x54c"), _0x4fb9("0x782"), function(canCreateDiscussions) {
            canCreateDiscussions[_0x4fb9("0x54e")]();
            props[_0x4fb9("0x783")] = !props["showSkinsPanel"];
            result[_0x4fb9("0x689")](props, _0x4fb9("0x67b"));
            result["setShowSkinsPanel"]();
          });
          $(document)["on"](_0x4fb9("0x4ad"), _0x4fb9("0x6cc"), function() {
            result[_0x4fb9("0x784")] = this[_0x4fb9("0x233")];
          });
          $(document)["on"](_0x4fb9("0x4ad"), "#gamemode", function() {
            var c = this[_0x4fb9("0x233")];
            if (c !== ":party") {
              result[_0x4fb9("0x785")]();
            }
            result[_0x4fb9("0x601")] = style[_0x4fb9("0x601")] = c;
            result[_0x4fb9("0x60d")]();
          });
          $(document)["on"](_0x4fb9("0x4ad"), _0x4fb9("0x786"), function() {
            result[_0x4fb9("0x787")](this[_0x4fb9("0x233")]);
            Layer();
          });
          $(_0x4fb9("0x697"))[_0x4fb9("0x693")]({
            "html" : !![],
            "placement" : _0x4fb9("0x788"),
            "trigger" : "manual",
            "animation" : ![]
          });
          $(document)["on"](_0x4fb9("0x789"), _0x4fb9("0x697"), function() {
            var text = this["value"];
            result["setSkinPreview"](text, _0x4fb9("0x68f"));
            result[_0x4fb9("0x6a7")](text, _0x4fb9("0x77a") + result[_0x4fb9("0x68d")]);
          });
          $(document)["on"](_0x4fb9("0x54c"), ".skin .example-url a", function(canCreateDiscussions) {
            canCreateDiscussions[_0x4fb9("0x54e")]();
            $(_0x4fb9("0x697"))[_0x4fb9("0x4ac")](this[_0x4fb9("0x78a")])["click"]();
          });
          $(document)["on"](_0x4fb9("0x54c"), _0x4fb9("0x676"), function() {
            if (!$(_0x4fb9("0x78b"))["length"] && !$(".skin-switch:hover")["length"]) {
              $(_0x4fb9("0x697"))[_0x4fb9("0x693")](_0x4fb9("0x5f1"));
            }
          });
          $(document)["on"](_0x4fb9("0x54c"), _0x4fb9("0x78c"), function(canCreateDiscussions) {
            canCreateDiscussions[_0x4fb9("0x54e")]();
            result[_0x4fb9("0x78d")]($(this)[_0x4fb9("0x695")](_0x4fb9("0x78e")));
          });
          $(document)["on"](_0x4fb9("0x54c"), "#prev-profile", function() {
            result[_0x4fb9("0x78f")]();
          });
          $(document)["on"](_0x4fb9("0x54c"), _0x4fb9("0x790"), function() {
            result[_0x4fb9("0x791")]();
          });
          $(document)["on"](_0x4fb9("0x54c"), _0x4fb9("0x792"), function() {
            props[_0x4fb9("0x793")] = !props[_0x4fb9("0x793")];
            result[_0x4fb9("0x689")](props, _0x4fb9("0x67b"));
            result[_0x4fb9("0x794")]();
          });
          $(document)["on"]("click", _0x4fb9("0x795"), function() {
            props["hideSkinUrl"] = !props[_0x4fb9("0x796")];
            result[_0x4fb9("0x689")](props, _0x4fb9("0x67b"));
            result[_0x4fb9("0x797")]();
          });
          $(document)["on"](_0x4fb9("0x54c"), _0x4fb9("0x798"), function() {
            $(_0x4fb9("0x799"))[_0x4fb9("0x604")]();
          });
          $(document)["on"](_0x4fb9("0x54c"), _0x4fb9("0x79a"), function() {
            result["gameServerConnect"]($("#server-ws")[_0x4fb9("0x4ac")]());
          });
          $(document)["on"](_0x4fb9("0x54c"), _0x4fb9("0x79b"), function() {
            result[_0x4fb9("0x79c")]();
          });
          $(document)["on"](_0x4fb9("0x54c"), _0x4fb9("0x79d"), function() {
            result[_0x4fb9("0x79e")]($(_0x4fb9("0x79f"))[_0x4fb9("0x4ac")]());
          });
          $(document)["on"](_0x4fb9("0x4ad"), _0x4fb9("0x7a0"), function() {
            var actions = $(this);
            result["setSettings"](actions["attr"]("id"), actions[_0x4fb9("0x61e")](_0x4fb9("0x61f")));
          });
          $(document)["on"](_0x4fb9("0x4ad"), ".js-switch-vanilla", function() {
            var $input = $(this);
            var i = $input[_0x4fb9("0x695")]("id");
            if (typeof result[i] !== _0x4fb9("0x7")) {
              result[i] = $input[_0x4fb9("0x61e")]("checked");
              if (i === _0x4fb9("0x5f7")) {
                style[_0x4fb9("0x5f9")] = !result[_0x4fb9("0x5f7")];
              }
              if (i === _0x4fb9("0x60c")) {
                result[_0x4fb9("0x60d")]();
              }
            }
          });
          $(document)["on"](_0x4fb9("0x54c"), _0x4fb9("0x7a1"), function(canCreateDiscussions) {
            canCreateDiscussions[_0x4fb9("0x54e")]();
            result[_0x4fb9("0x74b")]();
          });
          $(document)["on"](_0x4fb9("0x54c"), "#og-settings .btn-export", function(canCreateDiscussions) {
            canCreateDiscussions[_0x4fb9("0x54e")]();
            result[_0x4fb9("0x766")]();
            $(_0x4fb9("0x7a2"))[_0x4fb9("0x677")](500);
            $("#exp-imp-settings, #export-settings")[_0x4fb9("0x7a3")](_0x4fb9("0x24c"));
          });
          $(document)["on"]("click", "#close-exp-imp", function(canCreateDiscussions) {
            canCreateDiscussions[_0x4fb9("0x54e")]();
            $(_0x4fb9("0x7a2"))[_0x4fb9("0x679")](500);
          });
          $(document)["on"](_0x4fb9("0x66f"), _0x4fb9("0x67e"), function() {
            $(this)[_0x4fb9("0x623")]();
          });
          $(document)["on"](_0x4fb9("0x54c"), _0x4fb9("0x7a4"), function(canCreateDiscussions) {
            canCreateDiscussions[_0x4fb9("0x54e")]();
            result["exportSettings"]();
          });
          $(document)["on"](_0x4fb9("0x54c"), _0x4fb9("0x7a5"), function(canCreateDiscussions) {
            canCreateDiscussions[_0x4fb9("0x54e")]();
            result[_0x4fb9("0x7a6")]();
          });
          $(document)["on"](_0x4fb9("0x54c"), _0x4fb9("0x7a7"), function(canCreateDiscussions) {
            canCreateDiscussions[_0x4fb9("0x54e")]();
            result[_0x4fb9("0x637")]();
          });
          $(document)["on"](_0x4fb9("0x54c"), _0x4fb9("0x636"), function() {
            if (props[_0x4fb9("0x631")]) {
              result[_0x4fb9("0x631")]();
            }
          });
          $(document)["on"](_0x4fb9("0x54c"), _0x4fb9("0x7a8"), function() {
            if (props["blockPopups"]) {
              var _obj = $(this);
              setTimeout(function() {
                if (!_obj["is"](_0x4fb9("0x616"))) {
                  result[_0x4fb9("0x631")]();
                }
              }, 1E3);
            }
          });
          $(document)["on"](_0x4fb9("0x54c"), _0x4fb9("0x7a9"), function(canCreateDiscussions) {
            canCreateDiscussions[_0x4fb9("0x54e")]();
            result[_0x4fb9("0x637")]();
            if (window["MC"] && window["MC"][_0x4fb9("0x7aa")]) {
              window["MC"][_0x4fb9("0x7aa")]();
            }
          });
          $(document)["on"](_0x4fb9("0x54c"), _0x4fb9("0x7ab"), function(canCreateDiscussions) {
            canCreateDiscussions[_0x4fb9("0x54e")]();
            result[_0x4fb9("0x637")]();
            if (window["MC"] && window["MC"][_0x4fb9("0x7ac")]) {
              window["MC"][_0x4fb9("0x7ac")]();
            }
          });
          $(document)["on"](_0x4fb9("0x54c"), ".quick-free-gifts", function(canCreateDiscussions) {
            canCreateDiscussions[_0x4fb9("0x54e")]();
            result["unblockPopups"]();
            if (window["MC"] && window["MC"][_0x4fb9("0x7ad")]) {
              window["MC"]["showGifting"]();
            }
          });
          $(document)["on"](_0x4fb9("0x54c"), _0x4fb9("0x7ae"), function(canCreateDiscussions) {
            canCreateDiscussions[_0x4fb9("0x54e")]();
            result["unblockPopups"]();
            if (window["MC"] && window["MC"]["showQuests"]) {
              window["MC"]["showQuests"]();
            }
          });
          $(document)["on"](_0x4fb9("0x54c"), _0x4fb9("0x7af"), function(canCreateDiscussions) {
            canCreateDiscussions[_0x4fb9("0x54e")]();
            result[_0x4fb9("0x7b0")]();
          });
          $(document)["on"]("click", _0x4fb9("0x7b1"), function(canCreateDiscussions) {
            canCreateDiscussions[_0x4fb9("0x54e")]();
            result["cancelTargeting"]();
          });
          $(document)["on"](_0x4fb9("0x54c"), _0x4fb9("0x7b2"), function(canCreateDiscussions) {
            canCreateDiscussions[_0x4fb9("0x54e")]();
            result[_0x4fb9("0x7b3")]();
          });
          $(document)["on"](_0x4fb9("0x54c"), _0x4fb9("0x7b4"), function(canCreateDiscussions) {
            canCreateDiscussions[_0x4fb9("0x54e")]();
            result[_0x4fb9("0x7b5")]();
          });
          $(document)["on"]("click", _0x4fb9("0x7b6"), function(canCreateDiscussions) {
            canCreateDiscussions[_0x4fb9("0x54e")]();
            var layoutAttributes = $(this);
            var power = parseInt(layoutAttributes["attr"]("data-limit"));
            if (power) {
              result[_0x4fb9("0x7b7")](power);
              result[_0x4fb9("0x7b8")]();
              $(_0x4fb9("0x7b9"))["text"](power);
              $(_0x4fb9("0x7b6"))[_0x4fb9("0x553")](_0x4fb9("0x554"));
              layoutAttributes[_0x4fb9("0x555")](_0x4fb9("0x554"));
            }
          });
          $(document)["on"](_0x4fb9("0x54c"), _0x4fb9("0x7ba"), function(canCreateDiscussions) {
            canCreateDiscussions[_0x4fb9("0x54e")]();
            result[_0x4fb9("0x7bb")](parseInt($(this)["attr"]("data-user-id")));
          });
          $(document)["on"](_0x4fb9("0x54c"), _0x4fb9("0x7bc"), function(canCreateDiscussions) {
            canCreateDiscussions[_0x4fb9("0x54e")]();
            result[_0x4fb9("0x7bd")](parseInt($(this)["attr"](_0x4fb9("0x7be"))));
          });
          $(document)["on"](_0x4fb9("0x54c"), ".btn-mute-user", function() {
            var rotateMsg = $(this);
            result["muteChatUser"](parseInt(rotateMsg[_0x4fb9("0x695")](_0x4fb9("0x7be"))));
            rotateMsg["removeClass"](_0x4fb9("0x7bf"))[_0x4fb9("0x555")](_0x4fb9("0x7c0"))["text"](messages[_0x4fb9("0x7c1")]);
          });
          $(document)["on"](_0x4fb9("0x54c"), ".btn-unmute-user", function() {
            var $realtime = $(this);
            result["unmuteChatUser"](parseInt($realtime[_0x4fb9("0x695")](_0x4fb9("0x7be"))));
            $realtime[_0x4fb9("0x553")]("btn-green btn-unmute-user")["addClass"](_0x4fb9("0x7bf"))[_0x4fb9("0x1fe")](messages[_0x4fb9("0x7c2")]);
          });
          $(document)["on"](_0x4fb9("0x54c"), ".chat-sound-notifications", function(canCreateDiscussions) {
            canCreateDiscussions[_0x4fb9("0x54e")]();
            props[_0x4fb9("0x684")] = !props["chatSounds"];
            result[_0x4fb9("0x689")](props, "ogarioSettings");
            result["setChatSoundsBtn"]();
          });
          $(document)["on"](_0x4fb9("0x54c"), ".chat-active-users", function(canCreateDiscussions) {
            canCreateDiscussions[_0x4fb9("0x54e")]();
            result[_0x4fb9("0x7c3")]();
          });
          $(document)["on"]("click", _0x4fb9("0x7c4"), function(canCreateDiscussions) {
            canCreateDiscussions[_0x4fb9("0x54e")]();
            result[_0x4fb9("0x7c5")]();
          });
          $(document)["on"](_0x4fb9("0x54c"), _0x4fb9("0x7c6"), function(canCreateDiscussions) {
            canCreateDiscussions[_0x4fb9("0x54e")]();
            var rotateMsg = $(this);
            var _obj = $(_0x4fb9("0x7c7"));
            _obj[_0x4fb9("0x604")]();
            if (_obj["is"](_0x4fb9("0x616"))) {
              rotateMsg[_0x4fb9("0x555")](_0x4fb9("0x554"));
            } else {
              rotateMsg["removeClass"]("active");
              $(_0x4fb9("0x66e"))[_0x4fb9("0x66f")]();
            }
          });
          $(document)["on"](_0x4fb9("0x54c"), "#chat-emoticons .emoticon", function() {
            var $realtime = $(this);
            var code = $realtime[_0x4fb9("0x695")](_0x4fb9("0x7c8"));
            var taiji = $(_0x4fb9("0x66e"));
            var head = taiji[_0x4fb9("0x4ac")]();
            if (head["length"] + code["length"] <= 80) {
              taiji[_0x4fb9("0x4ac")](head + code);
            }
            taiji[_0x4fb9("0x66f")]();
          });
          this["statsHUD"] = document[_0x4fb9("0x7c9")](_0x4fb9("0x7ca"));
          this[_0x4fb9("0x652")] = document[_0x4fb9("0x7c9")]("active-parties");
          this[_0x4fb9("0x7cb")] = document[_0x4fb9("0x7c9")]("top5-pos");
          this[_0x4fb9("0x7cc")] = document[_0x4fb9("0x7c9")](_0x4fb9("0x7cd"));
          this[_0x4fb9("0x7ce")] = document[_0x4fb9("0x7c9")](_0x4fb9("0x7cf"));
          this[_0x4fb9("0x638")] = document[_0x4fb9("0x7c9")](_0x4fb9("0x7d0"));
          this[_0x4fb9("0x7d1")] = document[_0x4fb9("0x7c9")](_0x4fb9("0x7d2"));
          this[_0x4fb9("0x64b")] = document[_0x4fb9("0x7c9")]("time-hud");
          this[_0x4fb9("0x7d3")] = document[_0x4fb9("0x7c9")](_0x4fb9("0x7d4"));
          $(_0x4fb9("0x7d5"))[_0x4fb9("0x1aa")](_0x4fb9("0x7d6"), function() {
            return ![];
          });
          $(document)["on"]("mouseup", _0x4fb9("0x7d7"), function() {
            $(this)["blur"]();
          });
          $(_0x4fb9("0x7d8"))[_0x4fb9("0x7d9")]({
            "trigger" : _0x4fb9("0x7da")
          });
          $(".submenu-panel, #chat-box, #exp-imp-settings, #export-settings, #import-settings")[_0x4fb9("0x7a3")]({
            "suppressScrollX" : !![]
          });
          var _0x145601 = Array["prototype"][_0x4fb9("0x29")][_0x4fb9("0x0")](document[_0x4fb9("0x7db")](_0x4fb9("0x7dc")));
          _0x145601[_0x4fb9("0x21e")](function(remove) {
            var removeInit = new Switchery(remove, {
              "color" : options[_0x4fb9("0x505")],
              "size" : "small"
            });
          });
          $("input[type='range']")[_0x4fb9("0x7dd")]({
            "polyfill" : ![]
          });
          toastr[_0x4fb9("0xec")] = {
            "newestOnTop" : ![],
            "positionClass" : _0x4fb9("0x7de"),
            "timeOut" : 15E3
          };
        },
        "switchMenuTabs" : function(p, altCss) {
          var _0x30d885 = p[_0x4fb9("0x7df")]();
          if (altCss === "menu-panel") {
            if (p["hasClass"](_0x4fb9("0x7e0"))) {
              return;
            }
            if (_0x30d885[_0x4fb9("0x7e1")](_0x4fb9("0x7e2"))) {
              this["setBlockPopups"]();
            }
          }
          p[_0x4fb9("0x555")](_0x4fb9("0x554"));
          _0x30d885[_0x4fb9("0x555")](_0x4fb9("0x554"));
          _0x30d885["siblings"]()[_0x4fb9("0x553")](_0x4fb9("0x554"));
          _0x30d885["siblings"]()[_0x4fb9("0x7e3")]("a")["removeClass"](_0x4fb9("0x554"));
          var delete_behavior_form = p[_0x4fb9("0x695")](_0x4fb9("0x78a"));
          if (altCss === "submenu-panel") {
            var eVideoId = $(delete_behavior_form)[_0x4fb9("0x7df")]()[_0x4fb9("0x695")]("id");
            $("#" + eVideoId + _0x4fb9("0x7e4"))[_0x4fb9("0xaa")](delete_behavior_form)[_0x4fb9("0x569")](_0x4fb9("0x705"), _0x4fb9("0x56c"));
          } else {
            $(_0x4fb9("0x7e5"))[_0x4fb9("0xaa")](delete_behavior_form)[_0x4fb9("0x569")](_0x4fb9("0x705"), "none");
          }
          $(delete_behavior_form)["fadeIn"](1E3);
          Layer();
          $(_0x4fb9("0x7e6"))[_0x4fb9("0x7a3")](_0x4fb9("0x24c"));
        },
        "getDefaultSettings" : function() {
          var _0x24bf49 = this;
          this[_0x4fb9("0x5f7")] = $(_0x4fb9("0x737"))[_0x4fb9("0x61e")](_0x4fb9("0x61f"));
          this[_0x4fb9("0x73a")] = $(_0x4fb9("0x7e7"))["prop"](_0x4fb9("0x61f"));
          this[_0x4fb9("0x620")] = $(_0x4fb9("0x61d"))[_0x4fb9("0x61e")](_0x4fb9("0x61f"));
          this["showQuest"] = $(_0x4fb9("0x7e8"))[_0x4fb9("0x61e")](_0x4fb9("0x61f"));
          style["showCustomSkins"] = !this[_0x4fb9("0x5f7")];
          if (window[_0x4fb9("0x208")]["getItem"](_0x4fb9("0x7e9")) !== null) {
            var artistTrack = JSON[_0x4fb9("0x680")](window[_0x4fb9("0x208")][_0x4fb9("0x49f")](_0x4fb9("0x7e9")));
            this[_0x4fb9("0x7ea")](artistTrack);
          } else {
            var artistTrack = $("#quality")[_0x4fb9("0x4ac")]();
            this[_0x4fb9("0x787")](artistTrack);
          }
          if (window["localStorage"]["getItem"]("location") !== null) {
            this["region"] = window[_0x4fb9("0x208")][_0x4fb9("0x49f")](_0x4fb9("0x4a1"));
            $(_0x4fb9("0x6cc"))[_0x4fb9("0x4ac")](this["region"]);
            if (window["MC"] && window["MC"]["setRegion"]) {
              window["MC"][_0x4fb9("0x7eb")](this[_0x4fb9("0x784")]);
            }
          } else {
            this["region"] = $(_0x4fb9("0x6cc"))["val"]();
          }
          this["setParty"]();
          if (this["gameMode"] === _0x4fb9("0x7ec") && window[_0x4fb9("0x4a1")]["hash"]) {
            $(_0x4fb9("0x7ed"))[_0x4fb9("0x54c")]();
          }
          var _0x8ad16b = Array[_0x4fb9("0x15")][_0x4fb9("0x29")][_0x4fb9("0x0")](document[_0x4fb9("0x7db")](_0x4fb9("0x7ee")));
          _0x8ad16b[_0x4fb9("0x21e")](function(remove) {
            var removeInit = new Switchery(remove, {
              "color" : options[_0x4fb9("0x505")],
              "size" : "small"
            });
          });
          $(_0x4fb9("0x6a9"))[_0x4fb9("0x4ac")](params["nick"])["blur"]();
          $("#noNames")[_0x4fb9("0x61e")](_0x4fb9("0x61f"), !props[_0x4fb9("0x7ef")]);
          $(_0x4fb9("0x7f0"))[_0x4fb9("0x61e")]("checked", props[_0x4fb9("0x609")]);
          this[_0x4fb9("0x7f1")]();
          this[_0x4fb9("0x61a")]();
          this[_0x4fb9("0x60d")]();
        },
        "getQuality" : function(object) {
          var isNativeDatasetAvailable = _0x4fb9("0x7f2") in window;
          var _replaceHelper = 1;
          if (isNativeDatasetAvailable) {
            _replaceHelper = window[_0x4fb9("0x7f2")];
          }
          switch(object) {
            case _0x4fb9("0x7f3"):
              this[_0x4fb9("0x7ea")](1);
              break;
            case _0x4fb9("0x7f4"):
              this[_0x4fb9("0x7ea")](.9);
              break;
            case _0x4fb9("0x7f5"):
              this[_0x4fb9("0x7ea")](.75);
              break;
            case _0x4fb9("0x7f6"):
              this[_0x4fb9("0x7ea")](.5);
              break;
            default:
              this[_0x4fb9("0x7ea")](_replaceHelper);
              break;
          }
        },
        "setCanvasScale" : function(optimizeQuality) {
          this[_0x4fb9("0x7f7")] = optimizeQuality;
          style["canvasScale"] = optimizeQuality;
        },
        "setStreamMode" : function() {
          if (props["streamMode"]) {
            $(_0x4fb9("0x792"))[_0x4fb9("0x555")](_0x4fb9("0x7f8"));
            $("#clantag, #nick, #party-token")["addClass"]("stream-mode");
          } else {
            $("#stream-mode")[_0x4fb9("0x553")](_0x4fb9("0x7f8"));
            $(_0x4fb9("0x7f9"))[_0x4fb9("0x553")](_0x4fb9("0x7fa"));
          }
        },
        "setHideSkinUrl" : function() {
          if (props[_0x4fb9("0x796")]) {
            $("#hide-url")[_0x4fb9("0x555")](_0x4fb9("0x7f8"));
            $("#skin")[_0x4fb9("0x555")](_0x4fb9("0x7fb"));
          } else {
            $(_0x4fb9("0x795"))[_0x4fb9("0x553")](_0x4fb9("0x7f8"));
            $(_0x4fb9("0x697"))[_0x4fb9("0x553")](_0x4fb9("0x7fb"));
          }
        },
        "setShowQuickMenu" : function() {
          if (props[_0x4fb9("0x781")]) {
            $(_0x4fb9("0x6f3"))[_0x4fb9("0x677")](500);
          } else {
            $("#quick-menu")["fadeOut"](500);
          }
        },
        "setShowSkinsPanel" : function() {
          if (props[_0x4fb9("0x783")]) {
            $(_0x4fb9("0x7fc"))[_0x4fb9("0x677")](500);
          } else {
            $(_0x4fb9("0x7fc"))["fadeOut"](500);
          }
        },
        "unlockButtons" : function() {
          $(_0x4fb9("0x7fd"))[_0x4fb9("0x61e")](_0x4fb9("0x635"), ![]);
        },
        "setMainButtons" : function() {
          var _0x158030 = this;
          $(document)["on"](_0x4fb9("0x54c"), _0x4fb9("0x7fe"), function() {
            _0x158030[_0x4fb9("0x7ff")]();
          });
          $(document)["on"]("click", _0x4fb9("0x800"), function() {
            _0x158030[_0x4fb9("0x801")]();
          });
          $(document)["on"](_0x4fb9("0x54c"), _0x4fb9("0x802"), function() {
            _0x158030[_0x4fb9("0x803")]();
          });
          $(document)["on"](_0x4fb9("0x54c"), _0x4fb9("0x7ed"), function() {
            _0x158030[_0x4fb9("0x804")] = !![];
            _0x158030[_0x4fb9("0x805")]();
            _0x158030[_0x4fb9("0x806")]();
          });
          $(document)["on"]("click", _0x4fb9("0x807"), function() {
            $(_0x4fb9("0x808"))[_0x4fb9("0x604")]();
          });
        },
        "play" : function() {
          this[_0x4fb9("0x6ad")]();
          this[_0x4fb9("0x809")]();
          if (this[_0x4fb9("0x80a")]()) {
            this[_0x4fb9("0x80b")]();
          } else {
            this["connect"]();
            var _0x3a34bd = this;
            setTimeout(function() {
              _0x3a34bd[_0x4fb9("0x80b")]();
            }, 1E3);
          }
        },
        "onPlay" : function() {
          this[_0x4fb9("0x617")]();
          this["hideMenu"]();
          if (window[_0x4fb9("0x80c")]) {
            window[_0x4fb9("0x80c")]();
          }
          if (props[_0x4fb9("0x80d")]) {
            style[_0x4fb9("0x5fe")] = !![];
          }
          if (window["ga"]) {
            window["ga"](_0x4fb9("0xd4"), _0x4fb9("0x80e"), _0x4fb9("0x80f"), _0x4fb9("0x810"));
          }
          if (window["ga"]) {
            window["ga"](_0x4fb9("0x811"), _0x4fb9("0x812"));
          }
        },
        "onSpectate" : function() {
          this["onJoin"]();
          this[_0x4fb9("0x813")]();
          this[_0x4fb9("0x619")]();
          if (window["addKeyListeners"]) {
            window["addKeyListeners"]();
          }
          if (props[_0x4fb9("0x80d")]) {
            style[_0x4fb9("0x5fe")] = ![];
          }
        },
        "join" : function() {
          this[_0x4fb9("0x809")]();
          this["setPlayerSettings"]();
          this[_0x4fb9("0x80b")]();
          this[_0x4fb9("0x814")]();
        },
        "onJoin" : function() {
          this[_0x4fb9("0x809")]();
          if (this[_0x4fb9("0x80a")]()) {
            this[_0x4fb9("0x4d")]();
          } else {
            this[_0x4fb9("0x815")]();
            var _0x5a3b08 = this;
            setTimeout(function() {
              _0x5a3b08[_0x4fb9("0x4d")]();
              _0x5a3b08[_0x4fb9("0x813")]();
            }, 1E3);
          }
        },
        "create" : function() {
          this[_0x4fb9("0x809")]();
          if (this[_0x4fb9("0x816")]) {
            this[_0x4fb9("0x806")]();
            return;
          }
          var _0xdb209d = this;
          setTimeout(function() {
            _0xdb209d[_0x4fb9("0xd4")]();
          }, 100);
        },
        "onCreate" : function() {
          this[_0x4fb9("0x809")]();
          if (this[_0x4fb9("0x601")] !== ":party" || !this[_0x4fb9("0x816")]) {
            this["createParty"]();
          } else {
            this["gameServerReconnect"]();
          }
          this[_0x4fb9("0xd4")]();
        },
        "onPlayerSpawn" : function() {
          style[_0x4fb9("0x617")] = !![];
          if (style[_0x4fb9("0x817")]) {
            this["sendPlayerSpawn"]();
            this[_0x4fb9("0x818")](params[_0x4fb9("0x5c4")], style["playerColor"], params[_0x4fb9("0x68e")]);
            return;
          }
          var _0xcb6801 = this;
          setTimeout(function() {
            _0xcb6801[_0x4fb9("0x819")]();
          }, 100);
        },
        "onPlayerDeath" : function() {
          style[_0x4fb9("0x617")] = ![];
          style[_0x4fb9("0x817")] = null;
          style[_0x4fb9("0x81a")] = ![];
          style["playerMass"] = 0;
          style[_0x4fb9("0x63c")] = 0;
          style[_0x4fb9("0x642")] = 0;
          this[_0x4fb9("0x81b")](300);
          this["sendPlayerDeath"]();
          this[_0x4fb9("0x81c")](style["playerX"], style[_0x4fb9("0x5e1")]);
          this["unlockButtons"]();
          gotoNewOfflinePage();
          this[_0x4fb9("0x61c")]();
        },
        "setPlayerSettings" : function() {
          var gtColumn = $(_0x4fb9("0x6a9"))[_0x4fb9("0x4ac")]();
          var _0x49da08 = $(_0x4fb9("0x6aa"))[_0x4fb9("0x4ac")]();
          var _0x569d85 = $(_0x4fb9("0x697"))["val"]();
          var i = $(_0x4fb9("0x560"))["val"]();
          params[_0x4fb9("0x5c4")] = gtColumn;
          params[_0x4fb9("0x5c9")] = _0x49da08[_0x4fb9("0x85")]();
          params[_0x4fb9("0x68e")] = this[_0x4fb9("0x698")](_0x569d85[_0x4fb9("0x85")]());
          if (i["length"] == 7) {
            params["color"] = i;
          }
          if (params[_0x4fb9("0x5c9")]["length"] > 0) {
            style["clanTag"] = params[_0x4fb9("0x5c9")];
          }
          res[this[_0x4fb9("0x68d")]][_0x4fb9("0x5c4")] = params["nick"];
          res[this[_0x4fb9("0x68d")]]["clanTag"] = params["clanTag"];
          res[this[_0x4fb9("0x68d")]][_0x4fb9("0x68e")] = params[_0x4fb9("0x68e")];
          res[this[_0x4fb9("0x68d")]]["color"] = params["color"];
          this["saveSettings"](res, _0x4fb9("0x68a"));
        },
        "loadSkin" : function(entry, url) {
          var _0x1e157b = this;
          entry[url] = new Image;
          entry[url][_0x4fb9("0x6a3")] = _0x4fb9("0x6a4");
          entry[url][_0x4fb9("0x6a5")] = function() {
            if (this[_0x4fb9("0x81d")] && this[_0x4fb9("0x59f")] && this[_0x4fb9("0x5b2")] && this[_0x4fb9("0x59f")] <= 2E3 && this["height"] <= 2E3) {
              _0x1e157b[_0x4fb9("0x81e")][_0x4fb9("0xb")](url);
              if (_0x1e157b[_0x4fb9("0x81e")]["length"] == 1) {
                _0x1e157b["cacheSkin"](_0x1e157b["customSkinsCache"]);
              }
            }
          };
          entry[url][_0x4fb9("0x550")] = url;
        },
        "cacheSkin" : function(canCreateDiscussions) {
          if (this[_0x4fb9("0x81e")]["length"] == 0) {
            return;
          }
          var i = this[_0x4fb9("0x81e")][_0x4fb9("0x1ad")]();
          if (i) {
            var canvas = document[_0x4fb9("0x81f")](_0x4fb9("0x820"));
            canvas["width"] = 512;
            canvas["height"] = 512;
            var umecob = canvas["getContext"]("2d");
            umecob[_0x4fb9("0x5d7")]();
            umecob[_0x4fb9("0x5d8")](256, 256, 256, 0, 2 * Math["PI"], ![]);
            umecob[_0x4fb9("0x821")]();
            umecob[_0x4fb9("0x822")](this[_0x4fb9("0x823")][i], 0, 0, 512, 512);
            this[_0x4fb9("0x823")][i + _0x4fb9("0x824")] = new Image;
            this[_0x4fb9("0x823")][i + _0x4fb9("0x824")]["src"] = canvas[_0x4fb9("0x825")]();
            canvas = null;
            this[_0x4fb9("0x826")](this[_0x4fb9("0x823")]);
          }
        },
        "getCachedSkin" : function(newTextBuffer, newTextOffset) {
          if (newTextBuffer[newTextOffset + _0x4fb9("0x824")] && newTextBuffer[newTextOffset + _0x4fb9("0x824")][_0x4fb9("0x81d")] && newTextBuffer[newTextOffset + _0x4fb9("0x824")][_0x4fb9("0x59f")]) {
            return newTextBuffer[newTextOffset + "_cached"];
          }
          return null;
        },
        "cacheCustomSkin" : function(formatters, initialValue, callback) {
          if (callback) {
            var callback_name = this["gameMode"] === _0x4fb9("0x7ec") ? formatters + initialValue : formatters;
            if (callback_name) {
              this[_0x4fb9("0x827")][callback_name] = callback;
            }
            if (this[_0x4fb9("0x823")][_0x4fb9("0x122")](callback)) {
              return;
            }
            this[_0x4fb9("0x828")](this[_0x4fb9("0x823")], callback);
          }
        },
        "checkSkinsMap" : function(_, s) {
          var segment = this[_0x4fb9("0x601")] === _0x4fb9("0x7ec") ? _ + s : _;
          if (this[_0x4fb9("0x827")]["hasOwnProperty"](segment)) {
            return !![];
          }
          return ![];
        },
        "getCustomSkin" : function(mmCoreSplitViewBlock, $state) {
          if (!this[_0x4fb9("0x829")](mmCoreSplitViewBlock, $state)) {
            return null;
          }
          var expectedSiteKey = this[_0x4fb9("0x601")] === ":party" ? mmCoreSplitViewBlock + $state : mmCoreSplitViewBlock;
          return this[_0x4fb9("0x82a")](this[_0x4fb9("0x823")], this[_0x4fb9("0x827")][expectedSiteKey]);
        },
        "calculateMapSector" : function(name, requiredFrom, currentStyle = ![]) {
          if (!style[_0x4fb9("0x82b")]) {
            return "";
          }
          var whitespace = currentStyle ? style[_0x4fb9("0x5e0")] + style[_0x4fb9("0x82c")] : style[_0x4fb9("0x82c")];
          var elementPosition = currentStyle ? style[_0x4fb9("0x5e2")] + style[_0x4fb9("0x82c")] : style["mapOffset"];
          var numberFilled = Math[_0x4fb9("0xd2")]((requiredFrom + elementPosition) / (style[_0x4fb9("0x82d")] / options["sectorsY"]));
          var attr = Math[_0x4fb9("0xd2")]((name + whitespace) / (style[_0x4fb9("0x82d")] / options[_0x4fb9("0x82e")]));
          numberFilled = numberFilled < 0 ? 0 : numberFilled >= options[_0x4fb9("0x82f")] ? options[_0x4fb9("0x82f")] - 1 : numberFilled;
          attr = attr < 0 ? 0 : attr >= options["sectorsX"] ? options[_0x4fb9("0x82e")] - 1 : attr;
          return String[_0x4fb9("0x5d")](numberFilled + 65) + (attr + 1);
        },
        "shortMassFormat" : function(diff) {
          return diff < 1E3 ? diff : Math[_0x4fb9("0x59c")](diff / 100) / 10 + "k";
        },
        "updateDeathLocations" : function(diffX, diffY) {
          if (!style[_0x4fb9("0x82b")]) {
            return;
          }
          this[_0x4fb9("0x830")][_0x4fb9("0xb")]({
            "x" : diffX + style[_0x4fb9("0x5e0")],
            "y" : diffY + style[_0x4fb9("0x5e2")]
          });
          if (this[_0x4fb9("0x830")]["length"] == 6) {
            this[_0x4fb9("0x830")][_0x4fb9("0x1ad")]();
          }
          this[_0x4fb9("0x613")] = this[_0x4fb9("0x830")]["length"] - 1;
        },
        "drawMiniMap" : function() {
          if (!style[_0x4fb9("0x82b")]) {
            return;
          }
          var x = options[_0x4fb9("0x5b9")];
          var value = options[_0x4fb9("0x5ba")];
          var v = x + value;
          var w = x - 18;
          var valueDash = value + 9.5;
          if (!this[_0x4fb9("0x831")]) {
            this[_0x4fb9("0x831")] = document["getElementById"](_0x4fb9("0x832"));
            this[_0x4fb9("0x833")] = this[_0x4fb9("0x831")][_0x4fb9("0x834")]("2d");
            this[_0x4fb9("0x833")]["ogarioCtx"] = !![];
            this[_0x4fb9("0x831")]["width"] = x;
            this[_0x4fb9("0x831")][_0x4fb9("0x5b2")] = v;
          } else {
            this[_0x4fb9("0x833")][_0x4fb9("0x835")](0, 0, x, v);
          }
          if (this[_0x4fb9("0x831")][_0x4fb9("0x59f")] != x) {
            this[_0x4fb9("0x831")][_0x4fb9("0x59f")] = x;
            this[_0x4fb9("0x831")]["height"] = v;
          }
          var ratio = w / style["mapSize"];
          var height = style[_0x4fb9("0x5e0")] + style[_0x4fb9("0x82c")];
          var borderWidth = style[_0x4fb9("0x5e2")] + style["mapOffset"];
          this["drawSelectedCell"](this[_0x4fb9("0x833")]);
          this[_0x4fb9("0x836")] = this["calculateMapSector"](style["playerX"], style[_0x4fb9("0x5e1")], !![]);
          this["miniMapCtx"][_0x4fb9("0x837")] = 1;
          this["miniMapCtx"][_0x4fb9("0x838")] = options["miniMapFontWeight"] + " " + (value - 4) + "px " + options[_0x4fb9("0x839")];
          this["miniMapCtx"][_0x4fb9("0x5d5")] = options[_0x4fb9("0x535")];
          this["miniMapCtx"]["fillText"](this["currentSector"], 10, value);
          if (!this[_0x4fb9("0x83a")]) {
            this[_0x4fb9("0x83b")](options[_0x4fb9("0x82e")], options[_0x4fb9("0x82f")], w, v, valueDash);
          }
          this[_0x4fb9("0x833")][_0x4fb9("0x83c")]();
          this[_0x4fb9("0x833")][_0x4fb9("0x83d")](9.5, valueDash);
          if (this["gameMode"] === _0x4fb9("0x83e")) {
            if (defaults) {
              defaults["drawBattleAreaOnMinimap"](this["miniMapCtx"], w, w, ratio, height, borderWidth);
            }
          }
          if (props[_0x4fb9("0x727")]) {
            var x0 = Math[_0x4fb9("0x59c")]((style[_0x4fb9("0x5df")] + height) * ratio);
            var x1 = Math[_0x4fb9("0x59c")]((style[_0x4fb9("0x5e1")] + borderWidth) * ratio);
            this[_0x4fb9("0x833")][_0x4fb9("0x5d3")] = 1;
            this[_0x4fb9("0x833")][_0x4fb9("0x83f")] = options[_0x4fb9("0x53c")];
            this[_0x4fb9("0x833")][_0x4fb9("0x5d7")]();
            this[_0x4fb9("0x833")][_0x4fb9("0x840")](x0, 0);
            this[_0x4fb9("0x833")][_0x4fb9("0x841")](x0, w - 1);
            this[_0x4fb9("0x833")]["moveTo"](0, x1);
            this["miniMapCtx"]["lineTo"](w - 1, x1);
            this["miniMapCtx"]["stroke"]();
          }
          this[_0x4fb9("0x833")][_0x4fb9("0x5d7")]();
          this[_0x4fb9("0x833")]["arc"]((style[_0x4fb9("0x5df")] + height) * ratio, (style[_0x4fb9("0x5e1")] + borderWidth) * ratio, options[_0x4fb9("0x543")], 0, this[_0x4fb9("0x5cc")], ![]);
          this[_0x4fb9("0x833")][_0x4fb9("0x842")]();
          if (options[_0x4fb9("0x544")] > 0) {
            this[_0x4fb9("0x833")]["lineWidth"] = options["miniMapMyCellStrokeSize"];
            this[_0x4fb9("0x833")]["strokeStyle"] = options["miniMapMyCellStrokeColor"];
            this[_0x4fb9("0x833")][_0x4fb9("0x843")]();
          }
          this[_0x4fb9("0x833")]["fillStyle"] = options[_0x4fb9("0x538")];
          this[_0x4fb9("0x833")]["fill"]();
          if (this[_0x4fb9("0x844")]["length"]) {
            var indexLookupKey = 0;
            for (; indexLookupKey < this["teamPlayers"]["length"]; indexLookupKey++) {
              this[_0x4fb9("0x844")][indexLookupKey]["drawPosition"](this["miniMapCtx"], style[_0x4fb9("0x82c")], ratio, this["privateMiniMap"], this[_0x4fb9("0x845")]);
            }
          }
          if (this["deathLocations"]["length"] > 0) {
            x0 = Math["round"]((this[_0x4fb9("0x830")][this[_0x4fb9("0x613")]]["x"] + style["mapOffset"]) * ratio);
            x1 = Math[_0x4fb9("0x59c")]((this[_0x4fb9("0x830")][this["lastDeath"]]["y"] + style[_0x4fb9("0x82c")]) * ratio);
            var x2 = Math["max"](options["miniMapMyCellSize"] - 2, 4);
            this["miniMapCtx"]["lineWidth"] = 1;
            this[_0x4fb9("0x833")][_0x4fb9("0x83f")] = this["deathLocations"]["length"] - 1 == this[_0x4fb9("0x613")] ? options["miniMapDeathLocationColor"] : "#FFFFFF";
            this[_0x4fb9("0x833")]["beginPath"]();
            this[_0x4fb9("0x833")][_0x4fb9("0x840")](x0 - x2, x1);
            this["miniMapCtx"][_0x4fb9("0x841")](x0 + x2, x1);
            this["miniMapCtx"][_0x4fb9("0x840")](x0, x1 - x2);
            this[_0x4fb9("0x833")]["lineTo"](x0, x1 + x2);
            this[_0x4fb9("0x833")][_0x4fb9("0x843")]();
          }
          this["miniMapCtx"][_0x4fb9("0x846")]();
        },
        "drawMiniMapSectors" : function(fromdirection, params, band, timeline, extraArguments) {
          this[_0x4fb9("0x83a")] = document[_0x4fb9("0x7c9")](_0x4fb9("0x847"));
          var e = this["miniMapSectors"][_0x4fb9("0x834")]("2d");
          e[_0x4fb9("0x848")] = !![];
          this[_0x4fb9("0x83a")]["width"] = band;
          this[_0x4fb9("0x83a")]["height"] = timeline;
          e["fillStyle"] = _0x4fb9("0x849");
          this[_0x4fb9("0x84a")](e, band - 1);
          defaults[_0x4fb9("0x84b")](e, style[_0x4fb9("0x82b")], fromdirection, params, .5, extraArguments, band - .5, timeline - 9.5, options[_0x4fb9("0x533")], options["miniMapSectorsColor"], 1, ![]);
        },
        "resetMiniMapSectors" : function() {
          this[_0x4fb9("0x83a")] = null;
        },
        "drawSelectedCell" : function(canCreateDiscussions) {
          if (style[_0x4fb9("0x617")] && style[_0x4fb9("0x642")] > 1 && (props[_0x4fb9("0x5f2")] || props["oppColors"] || props[_0x4fb9("0x5f4")] || props["showStatsSTE"])) {
            canCreateDiscussions[_0x4fb9("0x5d5")] = _0x4fb9("0x849");
            canCreateDiscussions[_0x4fb9("0x837")] = this[_0x4fb9("0x5ea")] ? .6 : .3;
            canCreateDiscussions[_0x4fb9("0x5d7")]();
            canCreateDiscussions[_0x4fb9("0x5d8")](48, 15, 6, 0, this[_0x4fb9("0x5cc")], ![]);
            canCreateDiscussions[_0x4fb9("0x842")]();
            canCreateDiscussions[_0x4fb9("0x23")]();
            canCreateDiscussions[_0x4fb9("0x837")] = this[_0x4fb9("0x5ea")] ? .3 : .6;
            canCreateDiscussions[_0x4fb9("0x5d7")]();
            canCreateDiscussions[_0x4fb9("0x5d8")](60, 15, 4, 0, this[_0x4fb9("0x5cc")], ![]);
            canCreateDiscussions[_0x4fb9("0x842")]();
            canCreateDiscussions[_0x4fb9("0x23")]();
          }
        },
        "dTok" : function(mmCoreLogEnabledDefault, mmCoreLogEnabledConfigName) {
          mmCoreLogEnabledDefault[_0x4fb9("0x838")] = options[_0x4fb9("0x84c")] + " " + (options[_0x4fb9("0x5ba")] - 6) + _0x4fb9("0x5d0") + options[_0x4fb9("0x839")];
          mmCoreLogEnabledDefault[_0x4fb9("0x5d1")] = _0x4fb9("0x84d");
          mmCoreLogEnabledDefault[_0x4fb9("0x84e")] = _0x4fb9("0x5a1");
          mmCoreLogEnabledDefault["fillText"](atob(this["token"]), mmCoreLogEnabledConfigName, 7);
        },
        "drawTeammatesInd" : function(boardManager, isSlidingUp, $cont, $slides) {
          if (!this["indicator"]) {
            return;
          }
          boardManager[_0x4fb9("0x822")](this[_0x4fb9("0x84f")], isSlidingUp - 45, $cont - $slides - 90);
        },
        "drawCellInfo" : function(data, index, options, config, args, obj, jurisdiction, preference, name, n, V, key) {
          if (obj || name) {
            return;
          }
          data[_0x4fb9("0x837")] = style["globalAlpha"];
          if (props["teammatesInd"] && key && !preference && args <= 200) {
            this[_0x4fb9("0x850")](data, options, config, args);
          }
          if (props[_0x4fb9("0x7ef")] && !props[_0x4fb9("0x609")]) {
            return;
          }
          var idName = ![];
          if (!preference && !jurisdiction) {
            idName = this[_0x4fb9("0x851")](args);
            if (idName && props[_0x4fb9("0x710")] && props[_0x4fb9("0x715")]) {
              return;
            }
          }
          var instance = null;
          if (this[_0x4fb9("0x852")][_0x4fb9("0x122")](index)) {
            instance = this[_0x4fb9("0x852")][index];
            instance[_0x4fb9("0x24c")](options, config, args, jurisdiction, preference, n);
          } else {
            instance = new construct(options, config, jurisdiction, preference, props[_0x4fb9("0x717")], props[_0x4fb9("0x718")]);
            instance["setMass"](args);
            instance["setNick"](n);
            this[_0x4fb9("0x852")][index] = instance;
            return;
          }
          instance[_0x4fb9("0x853")](props[_0x4fb9("0x70f")], props[_0x4fb9("0x714")], props["shortMass"], props["virMassShots"], props[_0x4fb9("0x712")], props["massStroke"]);
          instance["setDrawingScale"](style["viewScale"], options[_0x4fb9("0x4f8")], options["massScale"], options["virMassScale"], options["strokeScale"]);
          data[_0x4fb9("0x837")] = options[_0x4fb9("0x854")];
          if (!props[_0x4fb9("0x7ef")] && !(idName && props[_0x4fb9("0x710")]) && !(preference && props[_0x4fb9("0x711")]) && !(key && props[_0x4fb9("0x608")])) {
            instance[_0x4fb9("0x855")](data, options[_0x4fb9("0x856")], options[_0x4fb9("0x857")], options[_0x4fb9("0x858")], options[_0x4fb9("0x4e8")]);
          }
          if (props[_0x4fb9("0x609")] && !(idName && props[_0x4fb9("0x715")]) && !(preference && props[_0x4fb9("0x716")]) && !(props["hideEnemiesMass"] && !preference && !jurisdiction)) {
            instance["drawMass"](data, options[_0x4fb9("0x4e9")], options[_0x4fb9("0x859")], options["massFontWeight"], options[_0x4fb9("0x4ea")]);
          }
        },
        "setVirusColor" : function(canCreateDiscussions) {
          var _0x42da01 = Math[_0x4fb9("0xd2")](canCreateDiscussions * canCreateDiscussions / 100);
          if (_0x42da01 > 183) {
            return _0x4fb9("0x85a");
          }
          return options[_0x4fb9("0x4eb")];
        },
        "setVirusStrokeColor" : function(canCreateDiscussions) {
          if (style["play"] && style["playerMaxMass"] != 0) {
            var backoffDelay = Math["floor"](canCreateDiscussions * canCreateDiscussions / 100);
            var backoffDelaySeconds = backoffDelay / (this["selectBiggestCell"] ? style["playerMaxMass"] : style[_0x4fb9("0x85b")]);
            if (backoffDelaySeconds > .76) {
              return _0x4fb9("0x85c");
            }
            return _0x4fb9("0x85a");
          }
          return options[_0x4fb9("0x4ec")];
        },
        "setAutoHideCellInfo" : function(canCreateDiscussions) {
          if (canCreateDiscussions <= 40 || style["viewScale"] < .5 && canCreateDiscussions < 550 && canCreateDiscussions < 25 / style[_0x4fb9("0x85d")]) {
            return !![];
          }
          return ![];
        },
        "setParty" : function() {
          var d = $("#party-token")[_0x4fb9("0x4ac")]();
          this[_0x4fb9("0x601")] = style[_0x4fb9("0x601")] = $(_0x4fb9("0x85e"))["val"]();
          this[_0x4fb9("0x60d")]();
          if (this[_0x4fb9("0x601")] !== ":party" || !d) {
            return;
          }
          var max = d;
          if (d[_0x4fb9("0x52")]("#") != -1) {
            d = d["split"]("#");
            max = d[1];
          }
          if (this[_0x4fb9("0x816")] !== max) {
            this["partyToken"] = max;
            this[_0x4fb9("0x85f")]();
            this[_0x4fb9("0x860")]();
            this[_0x4fb9("0x861")]();
          }
        },
        "createParty" : function() {
          $("#create-party-btn")["click"]();
        },
        "joinParty" : function() {
          var artistTrack = $(_0x4fb9("0x862"))[_0x4fb9("0x4ac")]();
          if (!artistTrack) {
            return;
          }
          $(_0x4fb9("0x863"))["click"]();
          $(_0x4fb9("0x864"))[_0x4fb9("0x4ac")](artistTrack);
          $("#join-party-btn")[_0x4fb9("0x54c")]();
        },
        "leaveParty" : function() {
          $(_0x4fb9("0x865"))[_0x4fb9("0x4ac")]("");
          $(_0x4fb9("0x866"))[_0x4fb9("0x54c")]();
        },
        "closeParty" : function() {
          $(_0x4fb9("0x865"))["val"]("");
          $(".party-icon-back")[_0x4fb9("0x54c")]();
        },
        "flushData" : function() {
          this["flushPartyData"]();
          this[_0x4fb9("0x85f")]();
          this[_0x4fb9("0x860")]();
          this[_0x4fb9("0x861")]();
          style[_0x4fb9("0x617")] = ![];
          style[_0x4fb9("0x817")] = null;
        },
        "flushPartyData" : function() {
          this[_0x4fb9("0x844")] = [];
          this[_0x4fb9("0x64d")] = [];
          this[_0x4fb9("0x867")] = "";
          this[_0x4fb9("0x868")] = null;
          this[_0x4fb9("0x869")] = "";
          this[_0x4fb9("0x86a")] = "";
          this[_0x4fb9("0x86b")] = "";
          this["lastSentServerToken"] = "";
        },
        "flushCells" : function() {
          this[_0x4fb9("0x852")] = {};
        },
        "flushSkinsMap" : function() {
          this["customSkinsMap"] = {};
        },
        "flushChatData" : function() {
          this["chatUsers"] = {};
        },
        "getWS" : function(canCreateDiscussions) {
          if (!canCreateDiscussions) {
            return;
          }
          this["ws"] = canCreateDiscussions;
          this[_0x4fb9("0x86c")]();
          this[_0x4fb9("0x86d")]();
          if (this["ws"][_0x4fb9("0x52")](_0x4fb9("0x86e")) == -1) {
            this[_0x4fb9("0x86f")]();
          }
        },
        "recreateWS" : function(a) {
          if (!a) {
            return null;
          }
          var bothObjects = null;
          if (/^[a-zA-Z0-9=+\/]{12,}$/[_0x4fb9("0x20f")](a)) {
            var str = atob(a);
            if (/[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}:[0-9]{1,4}/[_0x4fb9("0x20f")](str)) {
              bothObjects = "wss://ip-" + str[_0x4fb9("0x86")](/\./g, "-")[_0x4fb9("0x86")](":", _0x4fb9("0x870"));
            }
          }
          if (!bothObjects && /^[a-z0-9]{5,}$/[_0x4fb9("0x20f")](a)) {
            bothObjects = _0x4fb9("0x871") + a + _0x4fb9("0x872");
          }
          return bothObjects;
        },
        "createServerToken" : function() {
          var _0x479c93 = this["ws"][_0x4fb9("0x22c")](/ip-\d+/);
          var end_callback = this["ws"][_0x4fb9("0x22c")](/live-arena-([\w\d]+)/);
          var res = null;
          if (_0x479c93) {
            var _0x20de19 = this["ws"]["replace"](_0x4fb9("0x873"), "")[_0x4fb9("0x86")](/-/g, ".");
            _0x479c93 = _0x20de19[_0x4fb9("0x22c")](/[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}:[0-9]{1,4}/);
            if (_0x479c93) {
              this[_0x4fb9("0x874")] = _0x479c93[0];
              res = btoa(this[_0x4fb9("0x874")]);
            }
          }
          if (!res && end_callback) {
            this[_0x4fb9("0x875")] = end_callback[1];
            res = this[_0x4fb9("0x875")];
          }
          if (res) {
            if (this[_0x4fb9("0x876")] !== res) {
              this["serverToken"] = res;
              this["flushData"]();
              this[_0x4fb9("0x877")]();
            }
            this[_0x4fb9("0x816")] = "";
            var _0x565c85 = this["ws"][_0x4fb9("0x22c")](/party_id=([A-Z0-9]{6})/);
            if (_0x565c85) {
              this[_0x4fb9("0x816")] = _0x565c85[1];
              select("/#" + window[_0x4fb9("0x878")](this[_0x4fb9("0x816")]));
            }
          }
        },
        "updateServerInfo" : function() {
          $(_0x4fb9("0x879"))["val"](this["ws"]);
          $(_0x4fb9("0x79f"))[_0x4fb9("0x4ac")](this[_0x4fb9("0x876")]);
          $(_0x4fb9("0x865"))[_0x4fb9("0x4ac")](this[_0x4fb9("0x816")]);
        },
        "gameServerConnect" : function(mmCoreSplitViewBlock) {
          if (!mmCoreSplitViewBlock) {
            return;
          }
          this[_0x4fb9("0x804")] = !![];
          if (window["core"] && window[_0x4fb9("0x5e3")][_0x4fb9("0x815")]) {
            window[_0x4fb9("0x5e3")][_0x4fb9("0x815")](mmCoreSplitViewBlock);
          }
        },
        "gameServerReconnect" : function() {
          if (window["MC"] && window["MC"][_0x4fb9("0x87a")]) {
            window["MC"]["reconnect"]();
            return;
          }
          if (window[_0x4fb9("0x87b")] && window[_0x4fb9("0x87b")][_0x4fb9("0x87a")]) {
            window["master"][_0x4fb9("0x87a")]();
          }
        },
        "gameServerJoin" : function(level) {
          var numberOfTiles = this["recreateWS"](level);
          if (numberOfTiles) {
            this[_0x4fb9("0x804")] = !![];
            this[_0x4fb9("0x87c")](numberOfTiles);
          }
        },
        "connect" : function() {
          this[_0x4fb9("0x86f")]();
          this[_0x4fb9("0x87d")]();
          this["setParty"]();
          console["log"](_0x4fb9("0x87e"));
          if (this["privateMode"] && this[_0x4fb9("0x87f")]) {
            this[_0x4fb9("0x880")] = new WebSocket(this[_0x4fb9("0x87f")]);
          } else {
            this[_0x4fb9("0x880")] = new WebSocket(this["publicIP"]);
          }
          this[_0x4fb9("0x880")][_0x4fb9("0x881")] = !![];
          this[_0x4fb9("0x880")][_0x4fb9("0x882")] = "arraybuffer";
          var directiveProcessors = this;
          this["socket"][_0x4fb9("0x883")] = function() {
            console[_0x4fb9("0x247")]("[OGARio by szymy] Socket open");
            var $node = directiveProcessors[_0x4fb9("0x884")](3);
            $node["setUint8"](0, 0);
            $node[_0x4fb9("0x886")](1, 401, !![]);
            directiveProcessors["sendBuffer"]($node);
            directiveProcessors[_0x4fb9("0x80b")]();
          };
          this[_0x4fb9("0x880")][_0x4fb9("0x887")] = function($node) {
            directiveProcessors["handleMessage"]($node);
          };
          this["socket"]["onclose"] = function(b) {
            directiveProcessors["flushData"]();
            console[_0x4fb9("0x247")]("[OGARio by szymy] Socket close", b);
          };
          this["socket"]["onerror"] = function(b) {
            directiveProcessors[_0x4fb9("0x87d")]();
            console[_0x4fb9("0x247")](_0x4fb9("0x888"), b);
          };
        },
        "closeConnection" : function() {
          if (this[_0x4fb9("0x880")]) {
            this[_0x4fb9("0x880")][_0x4fb9("0x887")] = null;
            try {
              this[_0x4fb9("0x880")][_0x4fb9("0x171")]();
            } catch (_0x913a49) {
            }
            this[_0x4fb9("0x880")] = null;
          }
        },
        "reconnect" : function() {
          this[_0x4fb9("0x809")]();
          var _0x530d2b = this;
          setTimeout(function() {
            _0x530d2b[_0x4fb9("0x815")]();
          }, 1E3);
        },
        "switchServerMode" : function() {
          if (!this[_0x4fb9("0x87f")]) {
            return;
          }
          this[_0x4fb9("0x889")] = !this[_0x4fb9("0x889")];
          if (this[_0x4fb9("0x80a")]()) {
            this[_0x4fb9("0x86f")]();
            toastr[_0x4fb9("0x12")](_0x4fb9("0x88a"));
          }
          if (this[_0x4fb9("0x889")]) {
            toastr[_0x4fb9("0x668")](_0x4fb9("0x88b"));
            $(_0x4fb9("0x88c"))[_0x4fb9("0x5ec")]();
          } else {
            toastr[_0x4fb9("0x668")](_0x4fb9("0x88d"));
            $(_0x4fb9("0x88e"))[_0x4fb9("0x696")]();
            $(_0x4fb9("0x88c"))[_0x4fb9("0x5f1")]();
          }
          this[_0x4fb9("0x806")]();
          if (style[_0x4fb9("0x617")]) {
            this[_0x4fb9("0x819")]();
          }
        },
        "isSocketOpen" : function() {
          return this[_0x4fb9("0x880")] !== null && this["socket"][_0x4fb9("0x88f")] === this[_0x4fb9("0x880")][_0x4fb9("0x890")];
        },
        "createView" : function(ol) {
          return new DataView(new ArrayBuffer(ol));
        },
        "strToBuff" : function(PL$12, PL$13) {
          var PL$11 = this[_0x4fb9("0x884")](1 + PL$13["length"] * 2);
          PL$11["setUint8"](0, PL$12);
          var PL$19 = 0;
          for (; PL$19 < PL$13["length"]; PL$19++) {
            PL$11["setUint16"](1 + PL$19 * 2, PL$13["charCodeAt"](PL$19), !![]);
          }
          return PL$11;
        },
        "sendBuffer" : function(callback) {
          this[_0x4fb9("0x880")][_0x4fb9("0x891")](callback["buffer"]);
        },
        "handleMessage" : function(data) {
          this[_0x4fb9("0x892")](new DataView(data[_0x4fb9("0x2e")]));
        },
        "readMessage" : function(event) {
          switch(event["getUint8"](0)) {
            case 0:
              this["playerID"] = event[_0x4fb9("0x894")](1, !![]);
              break;
            case 1:
              this[_0x4fb9("0x895")]();
              break;
            case 20:
              this[_0x4fb9("0x896")](event);
              break;
            case 30:
              this[_0x4fb9("0x897")](event);
              break;
            case 96:
              break;
              this["updateParties"](event);
              this["displayParties"]();
              break;
            case 100:
              this[_0x4fb9("0x898")](event);
              break;
          }
        },
        "sendPlayerState" : function(duration) {
          if (this["isSocketOpen"]()) {
            var backEl = this["createView"](1);
            backEl["setUint8"](0, duration);
            this[_0x4fb9("0x899")](backEl);
          }
        },
        "sendPlayerSpawn" : function() {
          this[_0x4fb9("0x89a")](1);
        },
        "sendPlayerDeath" : function() {
          this["sendPlayerState"](2);
        },
        "sendPlayerJoin" : function() {
          this[_0x4fb9("0x89a")](3);
        },
        "sendPlayerData" : function(data, player, message) {
          if (this[player] !== null && this[player] === message) {
            return;
          }
          if (this[_0x4fb9("0x80a")]()) {
            this[_0x4fb9("0x899")](this[_0x4fb9("0x89b")](data, message));
            this[player] = message;
          }
        },
        "sendPlayerNick" : function() {
          this["sendPlayerData"](10, _0x4fb9("0x867"), params[_0x4fb9("0x5c4")]);
        },
        "sendPlayerClanTag" : function() {
          this[_0x4fb9("0x89c")](11, _0x4fb9("0x868"), params["clanTag"]);
        },
        "sendPlayerSkinURL" : function() {
          this["sendPlayerData"](12, _0x4fb9("0x869"), params[_0x4fb9("0x68e")]);
        },
        "sendPlayerCustomColor" : function() {
          this[_0x4fb9("0x89c")](13, _0x4fb9("0x86a"), params["color"]);
        },
        "sendPlayerColor" : function() {
          if (this[_0x4fb9("0x80a")]() && style["playerColor"]) {
            this[_0x4fb9("0x899")](this[_0x4fb9("0x89b")](14, style[_0x4fb9("0x817")]));
          }
        },
        "sendPartyToken" : function() {
          this[_0x4fb9("0x809")]();
          this[_0x4fb9("0x89c")](15, _0x4fb9("0x86b"), this[_0x4fb9("0x816")]);
        },
        "sendServerToken" : function() {
          this[_0x4fb9("0x89c")](16, "lastSentServerToken", this["serverToken"]);
        },
        "sendServerJoin" : function() {
          this[_0x4fb9("0x89d")]();
          this[_0x4fb9("0x813")]();
        },
        "sendServerRegion" : function() {
          if (!this[_0x4fb9("0x784")]) {
            return;
          }
          var pseudoNames = this[_0x4fb9("0x784")][_0x4fb9("0x234")]("-");
          if (this[_0x4fb9("0x80a")]()) {
            this[_0x4fb9("0x899")](this[_0x4fb9("0x89b")](17, pseudoNames[0]));
          }
        },
        "sendServerGameMode" : function() {
          var artistTrack = _0x4fb9("0x89e");
          switch(this[_0x4fb9("0x601")]) {
            case _0x4fb9("0x83e"):
              artistTrack = _0x4fb9("0x89f");
              break;
            case _0x4fb9("0x602"):
              artistTrack = _0x4fb9("0x8a0");
              break;
            case _0x4fb9("0x8a1"):
              artistTrack = _0x4fb9("0x8a2");
              break;
            case _0x4fb9("0x7ec"):
              artistTrack = _0x4fb9("0x8a3");
              break;
          }
          if (this[_0x4fb9("0x80a")]()) {
            this["sendBuffer"](this[_0x4fb9("0x89b")](18, artistTrack));
          }
        },
        "sendServerData" : function() {
          if (this["skipServerData"]) {
            this[_0x4fb9("0x804")] = ![];
            return;
          }
          this[_0x4fb9("0x784")] = $("#region")[_0x4fb9("0x4ac")]();
          this["gameMode"] = $("#gamemode")["val"]();
          this[_0x4fb9("0x8a4")]();
          this[_0x4fb9("0x8a5")]();
        },
        "sendPartyData" : function() {
          this[_0x4fb9("0x8a6")]();
          this[_0x4fb9("0x8a7")]();
          this[_0x4fb9("0x89d")]();
          this[_0x4fb9("0x8a8")]();
        },
        "sendPlayerUpdate" : function() {
          if (this["isSocketOpen"]() && style["play"] && this[_0x4fb9("0x8a9")] && style["playerColor"]) {
            var parseInt = function(PL$42) {
              var PL$41 = 0;
              for (; PL$41 < PL$42["length"]; PL$41++) {
                graphic[_0x4fb9("0x886")](sector, PL$42[_0x4fb9("0x9")](PL$41), !![]);
                sector = sector + 2;
              }
              graphic[_0x4fb9("0x886")](sector, 0, !![]);
              sector = sector + 2;
            };
            var type = 41;
            type = type + params[_0x4fb9("0x5c4")]["length"] * 2;
            type = type + params[_0x4fb9("0x68e")]["length"] * 2;
            var graphic = this[_0x4fb9("0x884")](type);
            graphic["setUint8"](0, 20);
            graphic["setUint32"](1, this[_0x4fb9("0x8a9")], !![]);
            var sector = 5;
            parseInt(params[_0x4fb9("0x5c4")]);
            parseInt(params[_0x4fb9("0x68e")]);
            parseInt(params["color"]);
            parseInt(style[_0x4fb9("0x817")]);
            this[_0x4fb9("0x899")](graphic);
          }
        },
        "sendPlayerPosition" : function() {
          if (this[_0x4fb9("0x80a")]() && style[_0x4fb9("0x617")] && this[_0x4fb9("0x8a9")]) {
            var artistTrack = this[_0x4fb9("0x884")](17);
            artistTrack["setUint8"](0, 30);
            artistTrack[_0x4fb9("0x8aa")](1, this[_0x4fb9("0x8a9")], !![]);
            artistTrack[_0x4fb9("0x8ab")](5, this[_0x4fb9("0x8ac")](), !![]);
            artistTrack["setInt32"](9, this[_0x4fb9("0x8ad")](), !![]);
            if (typeof style["playerMass"] !== _0x4fb9("0x7")) {
              artistTrack[_0x4fb9("0x8aa")](13, style[_0x4fb9("0x63b")], !![]);
            } else {
              artistTrack["setUint32"](13, this[_0x4fb9("0x63b")], !![]);
            }
            this[_0x4fb9("0x899")](artistTrack);
          }
        },
        "checkPlayerID" : function(id) {
          if (id) {
            var IS_PENDING = 0;
            for (; IS_PENDING < this[_0x4fb9("0x844")]["length"]; IS_PENDING++) {
              if (this["teamPlayers"][IS_PENDING]["id"] == id) {
                return IS_PENDING;
              }
            }
          }
          return null;
        },
        "updateTeamPlayer" : function(source) {
          function $() {
            var tok = "";
            for (;;) {
              var numberOfTiles = source[_0x4fb9("0x8ae")](level, !![]);
              if (numberOfTiles == 0) {
                break;
              }
              tok = tok + String[_0x4fb9("0x5d")](numberOfTiles);
              level = level + 2;
            }
            level = level + 2;
            return tok;
          }
          var headPath = source["getUint32"](1, !![]);
          var level = 5;
          var connections = $();
          var _maskLayer = this["checkSkinURL"]($());
          var _msgSibling = $();
          var id = $();
          var patternlab = this[_0x4fb9("0x601")] === _0x4fb9("0x7ec") ? connections + id : connections;
          var otherSideWidth = this[_0x4fb9("0x8af")](headPath);
          if (otherSideWidth !== null) {
            this[_0x4fb9("0x844")][otherSideWidth][_0x4fb9("0x5c4")] = connections;
            this[_0x4fb9("0x844")][otherSideWidth][_0x4fb9("0x5c5")] = patternlab;
            this[_0x4fb9("0x844")][otherSideWidth]["skinURL"] = _maskLayer;
            this[_0x4fb9("0x844")][otherSideWidth][_0x4fb9("0x8b0")](id, _msgSibling);
          } else {
            var headPattern = new init(headPath, connections, patternlab, _maskLayer);
            headPattern[_0x4fb9("0x8b0")](id, _msgSibling);
            this[_0x4fb9("0x844")]["push"](headPattern);
          }
          this[_0x4fb9("0x818")](connections, id, _maskLayer);
        },
        "updateTeamPlayerPosition" : function(canCreateDiscussions) {
          var primaryModel = canCreateDiscussions[_0x4fb9("0x894")](1, !![]);
          var key = this[_0x4fb9("0x8af")](primaryModel);
          if (key !== null) {
            var id = canCreateDiscussions["getInt32"](5, !![]);
            var cell = canCreateDiscussions["getInt32"](9, !![]);
            var iconCell = canCreateDiscussions[_0x4fb9("0x894")](13, !![]);
            if (iconCell > 36E4) {
              return;
            }
            var row = this[_0x4fb9("0x844")][key];
            row["x"] = id;
            row["y"] = cell;
            row["mass"] = iconCell;
            row[_0x4fb9("0x5ca")] = !![];
            row["updateTime"] = Date[_0x4fb9("0x5de")]();
            if (this[_0x4fb9("0x8b1")] && this[_0x4fb9("0x845")] && primaryModel == this[_0x4fb9("0x845")]) {
              this[_0x4fb9("0x8b2")](row["nick"], row[_0x4fb9("0x68e")], id, cell, iconCell, row[_0x4fb9("0x4b4")]);
            }
          }
        },
        "updateTeamPlayers" : function() {
          this["sendPlayerPosition"]();
          this[_0x4fb9("0x8b3")] = {};
          this[_0x4fb9("0x655")] = [];
          var i = 0;
          for (; i < this[_0x4fb9("0x844")]["length"]; i++) {
            var row = this[_0x4fb9("0x844")][i];
            if (row[_0x4fb9("0x5ca")] && Date[_0x4fb9("0x5de")]() - row[_0x4fb9("0x5cb")] >= 2E3 || row["mass"] == 0) {
              row[_0x4fb9("0x5ca")] = ![];
              if (this[_0x4fb9("0x8b1")] && this[_0x4fb9("0x845")] && row["id"] == this[_0x4fb9("0x845")]) {
                this["setTargetStatus"](2);
              }
            }
            if (row[_0x4fb9("0x5ca")]) {
              this[_0x4fb9("0x655")][_0x4fb9("0xb")]({
                "id" : row["id"],
                "nick" : row[_0x4fb9("0x5c4")],
                "x" : row["x"],
                "y" : row["y"],
                "mass" : row["mass"],
                "color" : row[_0x4fb9("0x4b4")]
              });
              if (!this["isChatUserMuted"](row["id"])) {
                this[_0x4fb9("0x8b4")](row["id"], row[_0x4fb9("0x5c4")]);
              }
            }
          }
          this[_0x4fb9("0x655")][_0x4fb9("0x8b5")](function(subtractee, subtractor) {
            return subtractor[_0x4fb9("0x5c8")] - subtractee[_0x4fb9("0x5c8")];
          });
          this[_0x4fb9("0x7b8")]();
        },
        "updateParties" : function(PL$18) {
          this[_0x4fb9("0x64d")] = [];
          var clientHeight = PL$18["getUint8"](1);
          var PL$6 = 2;
          var targetOffsetHeight = 0;
          for (; targetOffsetHeight < clientHeight; targetOffsetHeight++) {
            var PL$22 = "";
            for (;;) {
              var PL$12 = PL$18[_0x4fb9("0x8ae")](PL$6, !![]);
              if (PL$12 == 0) {
                break;
              }
              PL$22 = PL$22 + String["fromCharCode"](PL$12);
              PL$6 = PL$6 + 2;
            }
            PL$6 = PL$6 + 2;
            this[_0x4fb9("0x64d")]["push"](PL$22);
          }
        },
        "readChatMessage" : function(PL$20) {
          if (props["disableChat"]) {
            return;
          }
          var labelFromDom = (new Date)[_0x4fb9("0x8b6")]()[_0x4fb9("0x86")](/^(\d{2}:\d{2}).*/, "$1");
          var numKeysDeleted = PL$20["getUint8"](1);
          var GET_AUTH_URL_TIMEOUT = PL$20[_0x4fb9("0x894")](2, !![]);
          var _0x276b7d = PL$20[_0x4fb9("0x894")](6, !![]);
          if (this[_0x4fb9("0x8b7")](GET_AUTH_URL_TIMEOUT) || _0x276b7d != 0 && _0x276b7d != this["playerID"] && GET_AUTH_URL_TIMEOUT != this["playerID"]) {
            return;
          }
          var m_key = "";
          var PL$21 = 10;
          for (; PL$21 < PL$20["byteLength"]; PL$21 = PL$21 + 2) {
            var m_buffer = PL$20["getUint16"](PL$21, !![]);
            if (m_buffer == 0) {
              break;
            }
            m_key = m_key + String[_0x4fb9("0x5d")](m_buffer);
          }
          this[_0x4fb9("0x8b8")](labelFromDom, numKeysDeleted, GET_AUTH_URL_TIMEOUT, m_key);
        },
        "sendChatMessage" : function(event, data) {
          if (Date["now"]() - this[_0x4fb9("0x8b9")] < 500 || data["length"] == 0 || params[_0x4fb9("0x5c4")]["length"] == 0) {
            return;
          }
          if (this[_0x4fb9("0x80a")]()) {
            data = params["nick"] + ": " + data;
            var eventHandlers = this[_0x4fb9("0x884")](10 + data["length"] * 2);
            eventHandlers["setUint8"](0, 100);
            eventHandlers["setUint8"](1, event);
            eventHandlers[_0x4fb9("0x8aa")](2, this["playerID"], !![]);
            eventHandlers[_0x4fb9("0x8aa")](6, 0, !![]);
            var i = 0;
            for (; i < data["length"]; i++) {
              eventHandlers["setUint16"](10 + i * 2, data[_0x4fb9("0x9")](i), !![]);
            }
            this[_0x4fb9("0x899")](eventHandlers);
            this[_0x4fb9("0x8b9")] = Date["now"]();
          }
        },
        "prepareCommand" : function(canCreateDiscussions) {
          var cmd = canCreateDiscussions[_0x4fb9("0x86")](_0x4fb9("0x8ba"), this["currentSector"]);
          return cmd;
        },
        "sendCommand" : function(inDefaultFrame) {
          var artistTrack = this["prepareCommand"](store[_0x4fb9("0x8bb") + inDefaultFrame]);
          this["sendChatMessage"](102, artistTrack);
        },
        "addChatUser" : function(url, eTag) {
          this[_0x4fb9("0x8b3")][url] = eTag;
        },
        "getChatUserNick" : function(segment) {
          if (this[_0x4fb9("0x8b3")]["hasOwnProperty"](segment)) {
            return this[_0x4fb9("0x8b3")][segment];
          }
          return "";
        },
        "muteChatUser" : function(cookieType) {
          if (!cookieType || this[_0x4fb9("0x8b7")](cookieType)) {
            return;
          }
          var value = this[_0x4fb9("0x8bc")](cookieType);
          this[_0x4fb9("0x8bd")][cookieType] = value;
          this[_0x4fb9("0x8be")][_0x4fb9("0xb")](cookieType);
          toastr[_0x4fb9("0x12")](messages[_0x4fb9("0x8bf")][_0x4fb9("0x86")](_0x4fb9("0x8c0"), _0x4fb9("0x8c1") + this[_0x4fb9("0x65e")](value) + _0x4fb9("0x8c2")) + _0x4fb9("0x8c3") + cookieType + '" class="btn btn-xs btn-green btn-unmute-user">' + messages[_0x4fb9("0x7c1")] + _0x4fb9("0x558"));
        },
        "unmuteChatUser" : function(listener) {
          if (!listener) {
            return;
          }
          var index = this[_0x4fb9("0x8be")]["indexOf"](listener);
          if (index != -1) {
            this["chatMutedUserIDs"]["splice"](index, 1);
            toastr[_0x4fb9("0x668")](messages[_0x4fb9("0x8c4")]["replace"](_0x4fb9("0x8c0"), _0x4fb9("0x8c1") + this[_0x4fb9("0x65e")](this[_0x4fb9("0x8bd")][listener]) + "</strong>"));
            delete this[_0x4fb9("0x8bd")][listener];
          }
        },
        "isChatUserMuted" : function(mmCoreSplitViewBlock) {
          if (this["chatMutedUserIDs"][_0x4fb9("0x52")](mmCoreSplitViewBlock) != -1) {
            return !![];
          }
          return ![];
        },
        "parseMessage" : function(stanza) {
          var regNamedQueries = /\[img\]([\w:\/\.\?]+)\[\/img\]/i;
          if (regNamedQueries[_0x4fb9("0x20f")](stanza)) {
            var width = stanza[_0x4fb9("0x22c")](regNamedQueries)[1];
            if (props[_0x4fb9("0x724")] && this[_0x4fb9("0x8c5")](width)) {
              return _0x4fb9("0x8c6") + width + _0x4fb9("0x8c7");
            }
            return "";
          }
          var callbacks = /\[yt\]([\w-]{11})\[\/yt\]/i;
          if (callbacks[_0x4fb9("0x20f")](stanza)) {
            if (props[_0x4fb9("0x725")]) {
              var onErrorSpy = stanza[_0x4fb9("0x22c")](callbacks);
              return '<iframe type="text/html" width="100%" height="auto" src="https://www.youtube.com/embed/' + onErrorSpy[1] + _0x4fb9("0x8c8");
            }
            return "";
          }
          var message = this[_0x4fb9("0x65e")](stanza);
          if (props["chatEmoticons"]) {
            message = this[_0x4fb9("0x8c9")](message);
          }
          return message;
        },
        "parseEmoticons" : function(text) {
          return String(text)[_0x4fb9("0x86")](/&lt;3/g, "<3")[_0x4fb9("0x86")](/(O:\)|3:\)|8=\)|:\)|;\)|=\)|:D|X\-D|=D|:\(|;\(|:P|;P|:\*|\$\)|<3|:o|\(:\||:\||:\\|:@|\|\-\)|\^_\^|\-_\-|\$_\$|\(poop\)|\(fuck\)|\(clap\)|\(ok\)|\(victory\)|\(y\)|\(n\))/g, function(index) {
            return '<img src="https://cdn.ogario.ovh/static/emoticons/' + folder[index] + _0x4fb9("0x760") + index + _0x4fb9("0x761");
          });
        },
        "displayChatMessage" : function(isPrivate, callback, element, content) {
          if (content["length"] == 0) {
            return;
          }
          var nickname = content[_0x4fb9("0x234")](": ", 1)["toString"]();
          var packet = this[_0x4fb9("0x8ca")](content[_0x4fb9("0x86")](nickname + ": ", ""));
          if (nickname["length"] == 0 || nickname["length"] > 15 || packet["length"] == 0) {
            return;
          }
          var imageTag = "";
          if (element != 0 && element != this[_0x4fb9("0x8a9")]) {
            this[_0x4fb9("0x8b4")](element, nickname);
            imageTag = _0x4fb9("0x658") + element + '" class="mute-user ogicon-user-minus"></a> ';
          }
          nickname = this["escapeHTML"](nickname);
          if (callback == 101) {
            if (props[_0x4fb9("0x66d")]) {
              $(_0x4fb9("0x5b1"))[_0x4fb9("0x4a6")](_0x4fb9("0x8cb") + isPrivate + _0x4fb9("0x8cc") + imageTag + _0x4fb9("0x8cd") + nickname + ': </span><span class="message-text">' + packet + _0x4fb9("0x8ce"));
              $("#chat-box")[_0x4fb9("0x7a3")](_0x4fb9("0x24c"));
              $("#chat-box")["animate"]({
                "scrollTop" : $("#chat-box")[_0x4fb9("0x61e")](_0x4fb9("0x8cf"))
              }, 500);
              if (props[_0x4fb9("0x684")]) {
                this[_0x4fb9("0x8d0")](this[_0x4fb9("0x753")]);
              }
              return;
            }
            if (!props[_0x4fb9("0x669")]) {
              toastr[_0x4fb9("0x8d1")](_0x4fb9("0x8cd") + nickname + _0x4fb9("0x665") + packet + "</span>" + imageTag);
              if (props[_0x4fb9("0x684")]) {
                this[_0x4fb9("0x8d0")](this[_0x4fb9("0x753")]);
              }
            }
            this[_0x4fb9("0x662")]["push"]({
              "nick" : nickname,
              "message" : packet
            });
            if (this["chatHistory"]["length"] > 15) {
              this[_0x4fb9("0x662")][_0x4fb9("0x1ad")]();
            }
          } else {
            if (callback == 102) {
              if (props[_0x4fb9("0x66d")]) {
                $(_0x4fb9("0x5b1"))[_0x4fb9("0x4a6")](_0x4fb9("0x8d2") + isPrivate + _0x4fb9("0x8cc") + imageTag + '<span class="command-nick">' + nickname + ': </span><span class="command-text">' + packet + _0x4fb9("0x8ce"));
                $("#chat-box")[_0x4fb9("0x7a3")]("update");
                $(_0x4fb9("0x5b1"))[_0x4fb9("0x8d3")]({
                  "scrollTop" : $("#chat-box")[_0x4fb9("0x61e")](_0x4fb9("0x8cf"))
                }, 500);
                if (props[_0x4fb9("0x684")]) {
                  this["playSound"](this[_0x4fb9("0x8d4")]);
                }
                return;
              }
              if (!props["hideChat"]) {
                toastr[_0x4fb9("0x8d5")](_0x4fb9("0x8d6") + nickname + ': </span><span class="command-text">' + packet + "</span>" + imageTag);
                if (props[_0x4fb9("0x684")]) {
                  this["playSound"](this[_0x4fb9("0x8d4")]);
                }
              }
            } else {
              $(_0x4fb9("0x663"))["append"](content);
            }
          }
        },
        "displayUserList" : function(obj, data, linkedEntities, force, method) {
          var text = "";
          if (Object[_0x4fb9("0x8d7")](obj)["length"]) {
            text = text + _0x4fb9("0x8d8");
            var key;
            for (key in obj) {
              if (obj[_0x4fb9("0x122")](key)) {
                text = text + (_0x4fb9("0x8d9") + this[_0x4fb9("0x65e")](obj[key]) + _0x4fb9("0x8da") + key + '" class="btn btn-xs ' + linkedEntities + '">' + force + _0x4fb9("0x8db"));
              }
            }
            text = text + _0x4fb9("0x6a1");
          } else {
            text = text + messages[_0x4fb9("0x56c")];
          }
          toastr[method](text, data, {
            "closeButton" : !![],
            "tapToDismiss" : ![]
          });
        },
        "displayChatActiveUsers" : function() {
          this[_0x4fb9("0x8dc")](this[_0x4fb9("0x8b3")], messages[_0x4fb9("0x8dd")], _0x4fb9("0x7bf"), messages["mute"], "info");
        },
        "displayChatMutedUsers" : function() {
          this["displayUserList"](this[_0x4fb9("0x8bd")], messages[_0x4fb9("0x8de")], _0x4fb9("0x7c0"), messages[_0x4fb9("0x7c1")], "error");
        },
        "preloadChatSounds" : function() {
          this["setMessageSound"]();
          this[_0x4fb9("0x755")]();
        },
        "setChatSoundsBtn" : function() {
          if (props[_0x4fb9("0x684")]) {
            $(_0x4fb9("0x8df"))[_0x4fb9("0x553")](_0x4fb9("0x8e0"))["addClass"](_0x4fb9("0x8e1"));
          } else {
            $(_0x4fb9("0x8df"))[_0x4fb9("0x553")](_0x4fb9("0x8e1"))["addClass"](_0x4fb9("0x8e0"));
          }
        },
        "setMessageSound" : function() {
          this[_0x4fb9("0x753")] = this["setSound"](props[_0x4fb9("0x753")]);
        },
        "setCommandSound" : function() {
          this["commandSound"] = this[_0x4fb9("0x8e2")](props["commandSound"]);
        },
        "setSound" : function(source) {
          if (!source) {
            return null;
          }
          return new Audio(source);
        },
        "playSound" : function(media) {
          if (media && media["play"]) {
            media[_0x4fb9("0x172")]();
            media[_0x4fb9("0x8e3")] = 0;
            media[_0x4fb9("0x617")]();
          }
        },
        "setTargeting" : function() {
          if (!this["targetID"]) {
            return;
          }
          this[_0x4fb9("0x8b1")] = !this["targeting"];
          style[_0x4fb9("0x8b1")] = this[_0x4fb9("0x8b1")];
          this[_0x4fb9("0x8e4")]();
        },
        "setTargetingInfo" : function() {
          if (this["targeting"]) {
            $(_0x4fb9("0x7af"))[_0x4fb9("0x555")]("active");
            $("#target-status")[_0x4fb9("0x5ec")]();
            if (this[_0x4fb9("0x8e5")] != 2) {
              $("#target-summary")[_0x4fb9("0x5ec")]();
            }
          } else {
            $("#set-targeting")[_0x4fb9("0x553")](_0x4fb9("0x554"));
            $(_0x4fb9("0x8e6"))["hide"]();
          }
        },
        "cancelTargeting" : function() {
          this[_0x4fb9("0x8e7")](0);
        },
        "setPrivateMiniMap" : function() {
          if (!this[_0x4fb9("0x845")]) {
            return;
          }
          this[_0x4fb9("0x8e8")] = !this[_0x4fb9("0x8e8")];
          if (this[_0x4fb9("0x8e8")]) {
            $(_0x4fb9("0x7b2"))["addClass"](_0x4fb9("0x554"));
          } else {
            $("#set-private-minimap")[_0x4fb9("0x553")](_0x4fb9("0x554"));
          }
        },
        "setTarget" : function(e) {
          var id = this[_0x4fb9("0x8af")](e);
          if (id !== null) {
            var map = this[_0x4fb9("0x844")][id];
            this[_0x4fb9("0x845")] = map["id"];
            this[_0x4fb9("0x8b2")](map[_0x4fb9("0x5c4")], map[_0x4fb9("0x68e")], map["x"], map["y"], map[_0x4fb9("0x5c8")], map[_0x4fb9("0x4b4")]);
            if (!map[_0x4fb9("0x5ca")]) {
              this["setTargetStatus"](2);
              return;
            }
            this["setTargetStatus"](1);
          } else {
            this[_0x4fb9("0x8e7")](0);
          }
        },
        "setTargetStatus" : function(canCreateDiscussions) {
          switch(canCreateDiscussions) {
            case 0:
              this["targetStatus"] = 0;
              this[_0x4fb9("0x845")] = 0;
              this[_0x4fb9("0x8e9")] = "";
              this[_0x4fb9("0x8ea")] = "";
              this["targeting"] = ![];
              style[_0x4fb9("0x8b1")] = ![];
              this[_0x4fb9("0x8e8")] = ![];
              $(_0x4fb9("0x8eb"))[_0x4fb9("0x5f1")]();
              $("#target-status")[_0x4fb9("0x5ec")]()["text"]("[" + messages["targetNotSet"] + "]");
              $("#target-panel-hud a")["removeClass"](_0x4fb9("0x554"));
              break;
            case 1:
              this["targetStatus"] = 1;
              if (!this[_0x4fb9("0x8b1")]) {
                this["targeting"] = !![];
                style["targeting"] = !![];
                this["setTargetingInfo"]();
              }
              $(_0x4fb9("0x8ec"))[_0x4fb9("0x5ec")]();
              break;
            case 2:
              this[_0x4fb9("0x8e5")] = 2;
              $(_0x4fb9("0x8ed"))[_0x4fb9("0x5f1")]();
              $(_0x4fb9("0x8ee"))[_0x4fb9("0x5ec")]()[_0x4fb9("0x1fe")]("[" + messages[_0x4fb9("0x8ef")] + "]");
              style[_0x4fb9("0x626")]();
              break;
          }
        },
        "changeTarget" : function() {
          var l = this[_0x4fb9("0x8af")](this["targetID"]);
          var index = null;
          var i = 0;
          for (; i < this[_0x4fb9("0x844")]["length"]; i++) {
            if (!this[_0x4fb9("0x844")][i]["alive"]) {
              continue;
            }
            if (l !== null) {
              if (i < l && index === null) {
                index = i;
                continue;
              }
              if (i > l) {
                index = i;
                break;
              }
            } else {
              l = i;
              break;
            }
          }
          if (index !== null) {
            l = index;
          }
          if (l !== null) {
            this[_0x4fb9("0x7bb")](this["teamPlayers"][l]["id"]);
          } else {
            this[_0x4fb9("0x8e7")](0);
          }
        },
        "updateTarget" : function(session, value, name, event, color, image) {
          style[_0x4fb9("0x8f0")](name, event);
          if (this[_0x4fb9("0x8e9")] !== session) {
            this[_0x4fb9("0x8e9")] = session;
            $(_0x4fb9("0x8f1"))[_0x4fb9("0x4a5")](this["escapeHTML"](session));
          }
          $(_0x4fb9("0x8f2"))["css"](_0x4fb9("0x8f3"), image);
          if (value && this["targetSkinURL"] !== value) {
            if (this[_0x4fb9("0x823")]["hasOwnProperty"](value + _0x4fb9("0x824"))) {
              $("#target-skin img")["attr"](_0x4fb9("0x550"), value);
              this[_0x4fb9("0x8ea")] = value;
            } else {
              $(_0x4fb9("0x8f4"))["attr"](_0x4fb9("0x550"), _0x4fb9("0x8f5"));
            }
          }
          $(_0x4fb9("0x8ee"))[_0x4fb9("0x1fe")]("[" + this[_0x4fb9("0x660")](color) + "]");
          var normalized = this["calculateMapSector"](name, event);
          var artistTrack = messages["targetDistance"] + _0x4fb9("0x8f6") + style[_0x4fb9("0x8f7")] + " [" + normalized + "]</span>";
          if (style["play"]) {
            artistTrack = artistTrack + (_0x4fb9("0x643") + messages[_0x4fb9("0x8f8")] + _0x4fb9("0x8f6") + this[_0x4fb9("0x660")](color + style[_0x4fb9("0x63b")]) + _0x4fb9("0x657"));
          }
          $("#target-summary")[_0x4fb9("0x4a5")](artistTrack);
          if (this[_0x4fb9("0x8e5")] != 1) {
            this[_0x4fb9("0x8e7")](1);
          }
        },
        "updateQuest" : function() {
          if (!this[_0x4fb9("0x60c")] || this[_0x4fb9("0x601")] !== _0x4fb9("0x5dd")) {
            return;
          }
          if (window["MC"] && window["MC"][_0x4fb9("0x8f9")]) {
            this[_0x4fb9("0x7d3")]["textContent"] = window["MC"][_0x4fb9("0x8f9")]();
          }
        },
        "init" : function() {
          this[_0x4fb9("0x8fa")]();
          this[_0x4fb9("0x8fb")]();
          this[_0x4fb9("0x8fc")]();
          this[_0x4fb9("0x571")]();
          this[_0x4fb9("0x8fd")]();
          if (_0x21f577) {
            _0x21f577[_0x4fb9("0x8fe")]();
          }
          this[_0x4fb9("0x8ff")]();
          this["setShowSkinsPanel"]();
          this[_0x4fb9("0x6ae")]();
          this[_0x4fb9("0x900")]();
          this["setStreamMode"]();
          this[_0x4fb9("0x797")]();
          this[_0x4fb9("0x5bf")]();
          this["setAutoResp"]();
          this[_0x4fb9("0x901")]();
          this[_0x4fb9("0x902")]();
          this[_0x4fb9("0x903")]();
          this[_0x4fb9("0x5ee")]();
          this[_0x4fb9("0x60d")]();
          this[_0x4fb9("0x5f0")]();
          this[_0x4fb9("0x904")]();
          this[_0x4fb9("0x686")]();
          this["setFpsAtTop"]();
          this["displayStats"]();
          this[_0x4fb9("0x688")]();
          this["preloadChatSounds"]();
          this[_0x4fb9("0x685")]();
          var _0x2922c6 = this;
          setInterval(function() {
            _0x2922c6["drawMiniMap"]();
          }, 33);
          setInterval(function() {
            _0x2922c6[_0x4fb9("0x905")]();
          }, this[_0x4fb9("0x906")]);
        }
      };
      var data = {
        "ws" : null,
        "socket" : null,
        "protocolKey" : null,
        "clientKey" : null,
        "connectionOpened" : ![],
        "accessTokenSent" : ![],
        "loggedIn" : ![],
        "clientVersion" : 30500,
        "clientVersionString" : _0x4fb9("0x965"),
        "time" : Date[_0x4fb9("0x5de")](),
        "serverTime" : 0,
        "serverTimeDiff" : 0,
        "loggedInTime" : 0,
        "mapSize" : 14142,
        "mapOffset" : 7071,
        "mapOffsetX" : 0,
        "mapOffsetY" : 0,
        "mapOffsetFixed" : ![],
        "mapMinX" : -7071,
        "mapMinY" : -7071,
        "mapMaxX" : 7071,
        "mapMaxY" : 7071,
        "viewMinX" : 0,
        "viewMinY" : 0,
        "viewMaxX" : 0,
        "viewMaxY" : 0,
        "canvasWidth" : 0,
        "canvasHeight" : 0,
        "canvasScale" : 1,
        "indexedCells" : {},
        "cells" : [],
        "removedCells" : [],
        "food" : [],
        "viruses" : [],
        "playerCells" : [],
        "playerCellIDs" : [],
        "ghostCells" : [],
        "playerX" : 0,
        "playerY" : 0,
        "playerSize" : 0,
        "playerMass" : 0,
        "playerMaxMass" : 0,
        "playerMinMass" : 0,
        "playerScore" : 0,
        "playerSplitCells" : 0,
        "playerColor" : null,
        "playerNick" : "",
        "playerPosition" : 0,
        "leaderboard" : [],
        "biggerSTECellsCache" : [],
        "biggerCellsCache" : [],
        "smallerCellsCache" : [],
        "STECellsCache" : [],
        "STE" : 0,
        "autoZoom" : ![],
        "zoomValue" : .1,
        "viewX" : 0,
        "viewY" : 0,
        "scale" : 1,
        "viewScale" : 1,
        "clientX" : 0,
        "clientY" : 0,
        "cursorX" : 0,
        "cursorY" : 0,
        "targetX" : 0,
        "targetY" : 0,
        "targetDistance" : 0,
        "battleRoyale" : {
          "state" : 0,
          "players" : 0,
          "startTime" : 0,
          "shrinkTime" : 0,
          "timeLeft" : 0,
          "x" : 0,
          "y" : 0,
          "radius" : 0,
          "targetX" : 0,
          "targetY" : 0,
          "targetRadius" : 0,
          "maxRadius" : 11313,
          "rank" : [],
          "playerRank" : 0,
          "joined" : ![]
        },
        "play" : ![],
        "pause" : ![],
        "targeting" : ![],
        "removePlayerCell" : ![],
        "showCustomSkins" : !![],
        "showFood" : !![],
        "foodIsHidden" : ![],
        "selectBiggestCell" : !![],
        "hideSmallBots" : ![],
        "pressedKeys" : {},
        "connect" : function(url) {
          console[_0x4fb9("0x247")](_0x4fb9("0x966"), url);
          var bonusTraitModifiers = this;
          this[_0x4fb9("0x86f")]();
          this[_0x4fb9("0x967")]();
          this[_0x4fb9("0x968")] = null;
          this[_0x4fb9("0x969")] = null;
          this[_0x4fb9("0x96a")] = ![];
          this[_0x4fb9("0x96b")] = ![];
          this[_0x4fb9("0x96c")] = ![];
          this[_0x4fb9("0x82b")] = ![];
          this[_0x4fb9("0x62a")] = [];
          this["ws"] = url;
          this[_0x4fb9("0x880")] = new WebSocket(url);
          this["socket"][_0x4fb9("0x882")] = _0x4fb9("0x96d");
          this[_0x4fb9("0x880")][_0x4fb9("0x883")] = function() {
            bonusTraitModifiers[_0x4fb9("0x96e")]();
          };
          this[_0x4fb9("0x880")][_0x4fb9("0x887")] = function(person) {
            bonusTraitModifiers[_0x4fb9("0x96f")](person);
          };
          this["socket"][_0x4fb9("0x1a2")] = function(person) {
            bonusTraitModifiers[_0x4fb9("0x970")](person);
          };
          this[_0x4fb9("0x880")][_0x4fb9("0x971")] = function(person) {
            bonusTraitModifiers[_0x4fb9("0x972")](person);
          };
          router[_0x4fb9("0x973")](this["ws"]);
          router[_0x4fb9("0x974")]();
          router[_0x4fb9("0x975")]();
          router[_0x4fb9("0x976")]("");
          if (window[_0x4fb9("0x87b")] && window[_0x4fb9("0x87b")][_0x4fb9("0x977")]) {
            window[_0x4fb9("0x87b")][_0x4fb9("0x977")]();
          }
        },
        "onOpen" : function(index) {
          console[_0x4fb9("0x247")](_0x4fb9("0x978"));
          this[_0x4fb9("0x93a")] = Date[_0x4fb9("0x5de")]();
          var artistTrack = this[_0x4fb9("0x884")](5);
          artistTrack["setUint8"](0, 254);
          artistTrack[_0x4fb9("0x8aa")](1, 21, !![]);
          this[_0x4fb9("0x979")](artistTrack);
          artistTrack = this[_0x4fb9("0x884")](5);
          artistTrack["setUint8"](0, 255);
          artistTrack["setUint32"](1, this[_0x4fb9("0x97a")], !![]);
          this[_0x4fb9("0x979")](artistTrack);
          this[_0x4fb9("0x96b")] = !![];
        },
        "onMessage" : function(data) {
          data = new DataView(data[_0x4fb9("0x2e")]);
          if (this[_0x4fb9("0x968")]) {
            data = this[_0x4fb9("0x97b")](data, this[_0x4fb9("0x968")] ^ this[_0x4fb9("0x97a")]);
          }
          this[_0x4fb9("0x97c")](data);
        },
        "onError" : function(assembly) {
          console["log"](_0x4fb9("0x97d"));
          this[_0x4fb9("0x967")]();
          if (window[_0x4fb9("0x87b")] && window["master"][_0x4fb9("0x97e")]) {
            window[_0x4fb9("0x87b")]["onDisconnect"]();
          }
        },
        "onClose" : function(result) {
          console["log"]("[OGARio by szymy] Game server socket close");
          this[_0x4fb9("0x967")]();
          if (window["master"] && window[_0x4fb9("0x87b")][_0x4fb9("0x97e")]) {
            window[_0x4fb9("0x87b")][_0x4fb9("0x97e")]();
          }
        },
        "closeConnection" : function() {
          if (this[_0x4fb9("0x880")]) {
            this[_0x4fb9("0x880")][_0x4fb9("0x883")] = null;
            this["socket"][_0x4fb9("0x887")] = null;
            this["socket"][_0x4fb9("0x1a2")] = null;
            this[_0x4fb9("0x880")][_0x4fb9("0x971")] = null;
            try {
              this["socket"]["close"]();
            } catch (_0x269fc2) {
            }
            this[_0x4fb9("0x880")] = null;
            this["ws"] = null;
          }
        },
        "isSocketOpen" : function() {
          return this["socket"] !== null && this[_0x4fb9("0x880")][_0x4fb9("0x88f")] === this[_0x4fb9("0x880")]["OPEN"];
        },
        "writeUint32" : function(data, value) {
          for (; !![];) {
            if ((value & -128) == 0) {
              data[_0x4fb9("0xb")](value);
              return;
            } else {
              data[_0x4fb9("0xb")](value & 127 | 128);
              value = value >>> 7;
            }
          }
        },
        "createView" : function(ol) {
          return new DataView(new ArrayBuffer(ol));
        },
        "sendBuffer" : function(callback) {
          this[_0x4fb9("0x880")]["send"](callback["buffer"]);
        },
        "sendMessage" : function(params) {
          if (this[_0x4fb9("0x96b")]) {
            if (!this[_0x4fb9("0x969")]) {
              return;
            }
            params = this[_0x4fb9("0x97b")](params, this[_0x4fb9("0x969")]);
            this["clientKey"] = this["shiftKey"](this[_0x4fb9("0x969")]);
          }
          this["sendBuffer"](params);
        },
        "sendAction" : function(data) {
          if (!this[_0x4fb9("0x80a")]()) {
            return;
          }
          var readInfo = this[_0x4fb9("0x884")](1);
          readInfo["setUint8"](0, data);
          this[_0x4fb9("0x979")](readInfo);
        },
        "sendSpectate" : function() {
          this["sendAction"](1);
        },
        "sendFreeSpectate" : function() {
          this[_0x4fb9("0x97f")](18);
        },
        "sendEject" : function() {
          this[_0x4fb9("0x980")]();
          this[_0x4fb9("0x97f")](21);
        },
        "sendSplit" : function() {
          this[_0x4fb9("0x980")]();
          this[_0x4fb9("0x97f")](17);
        },
        "sendNick" : function(data) {
          this[_0x4fb9("0x981")] = data;
          data = window[_0x4fb9("0x982")](window["encodeURIComponent"](data));
          var array = this[_0x4fb9("0x884")](2 + data["length"]);
          var i = 0;
          for (; i < data["length"]; i++) {
            array["setUint8"](i + 1, data["charCodeAt"](i));
          }
          this[_0x4fb9("0x979")](array);
        },
        "sendPosition" : function() {
          if (!this["isSocketOpen"]() || !this[_0x4fb9("0x96b")] || !this["clientKey"]) {
            return;
          }
          var relation = this["cursorX"];
          var relationName = this[_0x4fb9("0x983")];
          if (!this["play"] && this[_0x4fb9("0x8b1")] || this[_0x4fb9("0x172")]) {
            relation = this[_0x4fb9("0x924")];
            relationName = this[_0x4fb9("0x948")];
          }
          var _related2 = this["createView"](13);
          _related2["setUint8"](0, 16);
          _related2[_0x4fb9("0x8ab")](1, relation, !![]);
          _related2[_0x4fb9("0x8ab")](5, relationName, !![]);
          _related2[_0x4fb9("0x8aa")](9, this[_0x4fb9("0x968")], !![]);
          this[_0x4fb9("0x979")](_related2);
        },
        "sendAccessToken" : function(args, position, index) {
          if (this[_0x4fb9("0x96a")]) {
            return;
          }
          if (!index) {
            index = 102;
          }
          var i = args["length"];
          var count = this["clientVersionString"]["length"];
          var data = [index, 8, 1, 18];
          this[_0x4fb9("0x984")](data, i + count + 23);
          data[_0x4fb9("0xb")](8, 10, 82);
          this[_0x4fb9("0x984")](data, i + count + 18);
          data[_0x4fb9("0xb")](8, position, 18, count + 8, 8, 5, 18, count);
          var x = 0;
          for (; x < count; x++) {
            data[_0x4fb9("0xb")](this[_0x4fb9("0x985")][_0x4fb9("0x9")](x));
          }
          data[_0x4fb9("0xb")](24, 0, 32, 0, 26);
          this["writeUint32"](data, i + 3);
          data[_0x4fb9("0xb")](10);
          this[_0x4fb9("0x984")](data, i);
          x = 0;
          for (; x < i; x++) {
            data[_0x4fb9("0xb")](args[_0x4fb9("0x9")](x));
          }
          data = new Uint8Array(data);
          var raw_basefont = new DataView(data[_0x4fb9("0xe3")]);
          this[_0x4fb9("0x979")](raw_basefont);
        },
        "sendFbToken" : function(mmCoreSplitViewBlock) {
          this[_0x4fb9("0x986")](mmCoreSplitViewBlock, 2);
        },
        "sendGplusToken" : function(mmCoreSplitViewBlock) {
          this[_0x4fb9("0x986")](mmCoreSplitViewBlock, 4);
        },
        "sendRecaptcha" : function(PL$42) {
          var parent = this["createView"](2 + PL$42["length"]);
          parent["setUint8"](0, 86);
          var PL$41 = 0;
          for (; PL$41 < PL$42["length"]; PL$41++) {
            parent["setUint8"](1 + PL$41, PL$42[_0x4fb9("0x9")](PL$41));
          }
          parent["setUint8"](PL$42["length"] + 1, 0);
          this[_0x4fb9("0x979")](parent);
        },
        "setClientVersion" : function(b, result) {
          this[_0x4fb9("0x97a")] = b;
          this[_0x4fb9("0x985")] = result;
          console[_0x4fb9("0x247")](_0x4fb9("0x987"), b, result);
        },
        "generateClientKey" : function(option, _relatedTarget) {
          if (!option["length"] || !_relatedTarget["byteLength"]) {
            return null;
          }
          var j = null;
          var suggestedValue = 1540483477;
          var constraints = option[_0x4fb9("0x22c")](/(ws+:\/\/)([^:]*)(:\d+)/)[2];
          var framesize = constraints["length"] + _relatedTarget["byteLength"];
          var data = new Uint8Array(framesize);
          var value = 0;
          for (; value < constraints["length"]; value++) {
            data[value] = constraints[_0x4fb9("0x9")](value);
          }
          data[_0x4fb9("0x231")](_relatedTarget, constraints["length"]);
          var dv = new DataView(data["buffer"]);
          var maxTextureAvailableSpace = framesize - 1;
          var k = (maxTextureAvailableSpace - 4 & -4) + 4 | 0;
          var i = maxTextureAvailableSpace ^ 255;
          var n = 0;
          for (; maxTextureAvailableSpace > 3;) {
            j = Math[_0x4fb9("0xd8")](dv[_0x4fb9("0x988")](n, !![]), suggestedValue) | 0;
            i = (Math[_0x4fb9("0xd8")](j >>> 24 ^ j, suggestedValue) | 0) ^ (Math[_0x4fb9("0xd8")](i, suggestedValue) | 0);
            maxTextureAvailableSpace = maxTextureAvailableSpace - 4;
            n = n + 4;
          }
          switch(maxTextureAvailableSpace) {
            case 3:
              i = data[k + 2] << 16 ^ i;
              i = data[k + 1] << 8 ^ i;
              break;
            case 2:
              i = data[k + 1] << 8 ^ i;
              break;
            case 1:
              break;
            default:
              j = i;
              break;
          }
          if (j != i) {
            j = Math[_0x4fb9("0xd8")](data[k] ^ i, suggestedValue) | 0;
          }
          i = j >>> 13;
          j = i ^ j;
          j = Math["imul"](j, suggestedValue) | 0;
          i = j >>> 15;
          j = i ^ j;
          console[_0x4fb9("0x247")](_0x4fb9("0x989"), j);
          return j;
        },
        "shiftKey" : function(c) {
          var suggestedValue = 1540483477;
          c = Math[_0x4fb9("0xd8")](c, suggestedValue) | 0;
          c = (Math[_0x4fb9("0xd8")](c >>> 24 ^ c, suggestedValue) | 0) ^ 114296087;
          c = Math[_0x4fb9("0xd8")](c >>> 13 ^ c, suggestedValue) | 0;
          return c >>> 15 ^ c;
        },
        "shiftMessage" : function(PL$42, isSlidingUp, $cont) {
          if (!$cont) {
            var PL$41 = 0;
            for (; PL$41 < PL$42["byteLength"]; PL$41++) {
              PL$42["setUint8"](PL$41, PL$42["getUint8"](PL$41) ^ isSlidingUp >>> PL$41 % 4 * 8 & 255);
            }
          } else {
            PL$41 = 0;
            for (; PL$41 < PL$42["length"]; PL$41++) {
              PL$42["writeUInt8"](PL$42["readUInt8"](PL$41) ^ isSlidingUp >>> PL$41 % 4 * 8 & 255, PL$41);
            }
          }
          return PL$42;
        },
        "decompressMessage" : function(data) {
          var buffer = new Float32Array(data["buffer"]);
          var time = new Float32Array(buffer[_0x4fb9("0x64")](1));
          img_slide[_0x4fb9("0x13f")](buffer["slice"](5), time);
          return time;
        },
        "handleMessage" : function(data) {
          var respond = function() {
            var m_key = "";
            for (;;) {
              var m_buffer = data["getUint8"](left++);
              if (m_buffer == 0) {
                break;
              }
              m_key = m_key + String[_0x4fb9("0x5d")](m_buffer);
            }
            return m_key;
          };
          var left = 0;
          var _0x2644a8 = data["getUint8"](left++);
          if (_0x2644a8 == 54) {
            _0x2644a8 = 53;
          }
          switch(_0x2644a8) {
            case 5:
              break;
            case 17:
              this["viewX"] = data[_0x4fb9("0x98a")](left, !![]);
              left = left + 4;
              this[_0x4fb9("0x98b")] = data["getFloat32"](left, !![]);
              left = left + 4;
              this[_0x4fb9("0x90f")] = data["getFloat32"](left, !![]);
              break;
            case 18:
              if (this["protocolKey"]) {
                this[_0x4fb9("0x968")] = this[_0x4fb9("0x98c")](this["protocolKey"]);
              }
              this[_0x4fb9("0x967")]();
              break;
            case 32:
              this[_0x4fb9("0x944")][_0x4fb9("0xb")](data[_0x4fb9("0x894")](left, !![]));
              if (!this[_0x4fb9("0x617")]) {
                this["play"] = !![];
                router[_0x4fb9("0x619")]();
                this[_0x4fb9("0x817")] = null;
                router[_0x4fb9("0x819")]();
              }
              break;
            case 50:
              this[_0x4fb9("0x98d")] = [];
              var popupLeft = data[_0x4fb9("0x894")](left, !![]);
              left = left + 4;
              var actorLeft = 0;
              for (; actorLeft < popupLeft; actorLeft++) {
                this["pieChart"][_0x4fb9("0xb")](data[_0x4fb9("0x98a")](left, !![]));
                left = left + 4;
              }
              defaults[_0x4fb9("0x98e")]();
              break;
            case 53:
              this[_0x4fb9("0x62a")] = [];
              this[_0x4fb9("0x98f")] = 0;
              if (data["getUint8"](0) == 54) {
                var leftExp = data[_0x4fb9("0x8ae")](left, !![]);
                left = left + 2;
              }
              var _0xe00dd8 = 0;
              for (; left < data["byteLength"];) {
                var key_or_value = data["getUint8"](left++);
                var nickname = "";
                var widget = 0;
                var isFriend = ![];
                _0xe00dd8++;
                if (key_or_value & 2) {
                  nickname = window["decodeURIComponent"](window[_0x4fb9("0x990")](respond()));
                }
                if (key_or_value & 4) {
                  widget = data[_0x4fb9("0x894")](left, !![]);
                  left = left + 4;
                }
                if (key_or_value & 8) {
                  nickname = this[_0x4fb9("0x981")];
                  widget = _0x4fb9("0x991");
                  this[_0x4fb9("0x98f")] = _0xe00dd8;
                }
                if (key_or_value & 16) {
                  isFriend = !![];
                }
                this[_0x4fb9("0x62a")]["push"]({
                  "nick" : nickname,
                  "id" : widget,
                  "isFriend" : isFriend
                });
              }
              this["handleLeaderboard"]();
              break;
            case 54:
              break;
            case 69:
              var groupLeft = data[_0x4fb9("0x8ae")](left, !![]);
              left = left + 2;
              this[_0x4fb9("0x992")] = [];
              actorLeft = 0;
              for (; actorLeft < groupLeft; actorLeft++) {
                left = left + 8;
                var size = data["getUint32"](left, !![]);
                left = left + 5;
                this[_0x4fb9("0x992")]["push"]({
                  "mass" : size
                });
              }
              break;
            case 85:
              console[_0x4fb9("0x247")](_0x4fb9("0x993"));
              if (window[_0x4fb9("0x87b")] && window[_0x4fb9("0x87b")][_0x4fb9("0x994")]) {
                window[_0x4fb9("0x87b")][_0x4fb9("0x994")]();
              }
              break;
            case 102:
              var ret = new Node(data, left);
              key_or_value = ret["readFlag"]();
              if (key_or_value == 1) {
                ret[_0x4fb9("0x95d")]();
              }
              key_or_value = ret[_0x4fb9("0x995")]();
              if (key_or_value == 2) {
                ret[_0x4fb9("0x95f")]();
              }
              key_or_value = ret[_0x4fb9("0x995")]();
              if (key_or_value == 1) {
                var obj = ret[_0x4fb9("0x95e")]();
                var previousState = ret[_0x4fb9("0x995")]();
                var artistTrack = ret[_0x4fb9("0x95e")]();
                switch(obj) {
                  case 11:
                    console[_0x4fb9("0x247")](_0x4fb9("0x996"), ret[_0x4fb9("0x95b")]["byteLength"], ret[_0x4fb9("0x95c")], ret[_0x4fb9("0x960")], obj, previousState, artistTrack);
                    break;
                  case 62:
                    console["log"]("102 game over");
                    break;
                  default:
                    console[_0x4fb9("0x247")]("102 unknown", obj, previousState);
                }
              }
              if (data["byteLength"] < 20) {
                this["loggedIn"] = ![];
                if (window[_0x4fb9("0x997")]) {
                  window[_0x4fb9("0x997")]();
                }
              }
              break;
            case 103:
              this[_0x4fb9("0x96a")] = !![];
              break;
            case 114:
              break;
            case 161:
              break;
            case 176:
              this[_0x4fb9("0x998")]["startTime"] = data[_0x4fb9("0x894")](left, !![]);
              break;
            case 177:
              this[_0x4fb9("0x998")]["joined"] = !![];
              break;
            case 178:
              this[_0x4fb9("0x998")][_0x4fb9("0x999")] = data["getUint16"](left, !![]);
              left = left + 2;
              key_or_value = data[_0x4fb9("0x8ae")](left, !![]);
              left = left + 2;
              if (!key_or_value) {
                this["battleRoyale"][_0x4fb9("0xf5")] = 0;
                this[_0x4fb9("0x998")][_0x4fb9("0x99a")] = ![];
              }
              if (key_or_value & 3) {
                this[_0x4fb9("0x998")]["state"] = data["getUint8"](left++);
                this[_0x4fb9("0x998")]["x"] = data[_0x4fb9("0x988")](left, !![]);
                left = left + 4;
                this["battleRoyale"]["y"] = data["getInt32"](left, !![]);
                left = left + 4;
                this["battleRoyale"]["radius"] = data["getUint32"](left, !![]);
                left = left + 4;
                this[_0x4fb9("0x998")][_0x4fb9("0x99b")] = data[_0x4fb9("0x894")](left, !![]) * 1E3;
                left = left + 4;
                if (this[_0x4fb9("0x998")]["shrinkTime"]) {
                  this["battleRoyale"][_0x4fb9("0x99c")] = ~~((this["battleRoyale"][_0x4fb9("0x99b")] - Date[_0x4fb9("0x5de")]() + this[_0x4fb9("0x99d")]) / 1E3);
                  if (this[_0x4fb9("0x998")][_0x4fb9("0x99c")] < 0) {
                    this[_0x4fb9("0x998")][_0x4fb9("0x99c")] = 0;
                  }
                }
              }
              if (key_or_value & 2) {
                this[_0x4fb9("0x998")][_0x4fb9("0x924")] = data[_0x4fb9("0x988")](left, !![]);
                left = left + 4;
                this[_0x4fb9("0x998")]["targetY"] = data[_0x4fb9("0x988")](left, !![]);
                left = left + 4;
                this[_0x4fb9("0x998")][_0x4fb9("0x99e")] = data[_0x4fb9("0x894")](left, !![]);
              }
              break;
            case 179:
              key_or_value = data["getUint8"](left);
              var _0x35d580 = window[_0x4fb9("0x99f")](window[_0x4fb9("0x990")](respond()));
              var _0x23c8a1 = null;
              if (!key_or_value) {
                _0x23c8a1 = window[_0x4fb9("0x99f")](window[_0x4fb9("0x990")](respond()));
              }
              break;
            case 180:
              this[_0x4fb9("0x998")][_0x4fb9("0x99a")] = ![];
              this["battleRoyale"][_0x4fb9("0x9a0")] = [];
              this[_0x4fb9("0x998")][_0x4fb9("0x9a1")] = data[_0x4fb9("0x894")](left, !![]);
              left = left + 8;
              var divToScroll = data["getUint16"](left, !![]);
              left = left + 2;
              actorLeft = 0;
              for (; actorLeft < divToScroll; actorLeft++) {
                var sel_construtor_name = window[_0x4fb9("0x99f")](window[_0x4fb9("0x990")](respond()));
                var p = data[_0x4fb9("0x894")](left, !![]);
                left = left + 4;
                this[_0x4fb9("0x998")][_0x4fb9("0x9a0")][_0x4fb9("0xb")]({
                  "place" : p,
                  "name" : sel_construtor_name
                });
              }
              break;
            case 226:
              var extraOptions = data[_0x4fb9("0x8ae")](1, !![]);
              data = this["createView"](3);
              data["setUint8"](0, 227);
              data[_0x4fb9("0x886")](1, extraOptions);
              this[_0x4fb9("0x979")](data);
              break;
            case 241:
              this[_0x4fb9("0x968")] = data[_0x4fb9("0x894")](left, !![]);
              console[_0x4fb9("0x247")]("[OGARio by szymy] Received protocol key:", this["protocolKey"]);
              var duration64str = new Uint8Array(data[_0x4fb9("0xe3")], left = left + 4);
              this[_0x4fb9("0x969")] = this[_0x4fb9("0x9a2")](this["ws"], duration64str);
              if (window[_0x4fb9("0x87b")] && window[_0x4fb9("0x87b")][_0x4fb9("0x9a3")]) {
                window[_0x4fb9("0x87b")][_0x4fb9("0x9a3")]();
              }
              break;
            case 242:
              this["serverTime"] = data["getUint32"](left, !![]) * 1E3;
              this[_0x4fb9("0x99d")] = Date[_0x4fb9("0x5de")]() - this["serverTime"];
              break;
            case 255:
              this[_0x4fb9("0x9a4")](data);
              break;
            default:
              console["log"](_0x4fb9("0x9a5"), data["getUint8"](0));
              break;
          }
        },
        "handleSubmessage" : function(data) {
          data = this[_0x4fb9("0x9a6")](data);
          var i = 0;
          switch(data[_0x4fb9("0x62")](i++)) {
            case 16:
              this["updateCells"](data, i);
              break;
            case 64:
              this[_0x4fb9("0x9a7")] = data[_0x4fb9("0x6d")](i);
              i = i + 8;
              this[_0x4fb9("0x9a8")] = data[_0x4fb9("0x6d")](i);
              i = i + 8;
              this[_0x4fb9("0x9a9")] = data[_0x4fb9("0x6d")](i);
              i = i + 8;
              this["viewMaxY"] = data[_0x4fb9("0x6d")](i);
              this["setMapOffset"](this[_0x4fb9("0x9a7")], this[_0x4fb9("0x9a8")], this["viewMaxX"], this[_0x4fb9("0x9aa")]);
              break;
            default:
              console[_0x4fb9("0x247")](_0x4fb9("0x9ab"), data[_0x4fb9("0x62")](0));
              break;
          }
        },
        "handleLeaderboard" : function() {
          var test = "";
          var handler = "";
          var channel = 0;
          for (; channel < this[_0x4fb9("0x62a")]["length"]; channel++) {
            if (channel == 10) {
              break;
            }
            var channels = "<span>";
            if (this["leaderboard"][channel]["id"] === _0x4fb9("0x991")) {
              channels = _0x4fb9("0x9ac");
            } else {
              if (params[_0x4fb9("0x5c9")]["length"] && this[_0x4fb9("0x62a")][channel]["nick"][_0x4fb9("0x52")](params[_0x4fb9("0x5c9")]) == 0) {
                channels = _0x4fb9("0x9ad");
              }
            }
            test = test + (channels + (channel + 1) + ". " + router["escapeHTML"](this[_0x4fb9("0x62a")][channel][_0x4fb9("0x5c4")]) + _0x4fb9("0x657"));
          }
          if (this["playerPosition"] > 10) {
            test = test + ('<span class="me">' + this[_0x4fb9("0x98f")] + ". " + router[_0x4fb9("0x65e")](this[_0x4fb9("0x981")]) + _0x4fb9("0x657"));
          }
          if (props[_0x4fb9("0x72f")]) {
            var type = 0;
            for (; type < this[_0x4fb9("0x992")]["length"]; type++) {
              if (type == channel) {
                break;
              }
              handler = handler + '<span class="lb-data">';
              handler = handler + (_0x4fb9("0x9ae") + router[_0x4fb9("0x660")](this[_0x4fb9("0x992")][type][_0x4fb9("0x5c8")]) + _0x4fb9("0x65c"));
              handler = handler + _0x4fb9("0x657");
            }
          }
          router[_0x4fb9("0x976")](test, handler);
        },
        "flushCellsData" : function() {
          this[_0x4fb9("0x946")] = {};
          this["cells"] = [];
          this["playerCells"] = [];
          this[_0x4fb9("0x944")] = [];
          this["ghostCells"] = [];
          this["food"] = [];
          this["viruses"] = [];
        },
        "setMapOffset" : function(userId, courseId, state, participant) {
          if (state - userId > 14E3 && participant - courseId > 14E3) {
            this[_0x4fb9("0x5e0")] = this[_0x4fb9("0x82c")] - state;
            this[_0x4fb9("0x5e2")] = this[_0x4fb9("0x82c")] - participant;
            this["mapMinX"] = ~~(-this["mapOffset"] - this[_0x4fb9("0x5e0")]);
            this[_0x4fb9("0x9af")] = ~~(-this[_0x4fb9("0x82c")] - this["mapOffsetY"]);
            this[_0x4fb9("0x9b0")] = ~~(this["mapOffset"] - this[_0x4fb9("0x5e0")]);
            this[_0x4fb9("0x9b1")] = ~~(this[_0x4fb9("0x82c")] - this["mapOffsetY"]);
            if (!this[_0x4fb9("0x82b")]) {
              this[_0x4fb9("0x94a")] = (state + userId) / 2;
              this[_0x4fb9("0x98b")] = (participant + courseId) / 2;
            }
            this[_0x4fb9("0x82b")] = !![];
            console[_0x4fb9("0x247")](_0x4fb9("0x9b2"), this["mapOffsetX"], this[_0x4fb9("0x5e2")]);
          }
        },
        "isInView" : function(position, start, offset) {
          var padding = this[_0x4fb9("0x94b")] / 2 / this[_0x4fb9("0x90f")];
          var paddingRight = this[_0x4fb9("0x94c")] / 2 / this[_0x4fb9("0x90f")];
          if (position + offset < this[_0x4fb9("0x94a")] - padding || start + offset < this["viewY"] - paddingRight || position - offset > this[_0x4fb9("0x94a")] + padding || start - offset > this[_0x4fb9("0x98b")] + paddingRight) {
            return ![];
          }
          return !![];
        },
        "updateCells" : function(callback, data) {
          var doUpdate = function() {
            var result = "";
            for (;;) {
              var chunkCursor = callback["readUInt8"](data++);
              if (chunkCursor == 0) {
                break;
              }
              result = result + String[_0x4fb9("0x5d")](chunkCursor);
            }
            return result;
          };
          this[_0x4fb9("0x93a")] = Date[_0x4fb9("0x5de")]();
          this[_0x4fb9("0x943")] = ![];
          var i = callback[_0x4fb9("0x63")](data);
          data = data + 2;
          var whichFriend = 0;
          for (; whichFriend < i; whichFriend++) {
            var m = this[_0x4fb9("0x946")][callback[_0x4fb9("0x64")](data)];
            var params = this[_0x4fb9("0x946")][callback["readUInt32LE"](data + 4)];
            data = data + 8;
            if (m && params) {
              params[_0x4fb9("0x924")] = m["x"];
              params[_0x4fb9("0x948")] = m["y"];
              params["targetSize"] = params["size"];
              params["time"] = this["time"];
              params[_0x4fb9("0x93f")]();
            }
          }
          whichFriend = 0;
          for (;;) {
            var min = callback[_0x4fb9("0x64")](data);
            data = data + 4;
            if (min == 0) {
              break;
            }
            var aUMLBlocks = callback[_0x4fb9("0x6a")](data);
            data = data + 4;
            var s_host = callback[_0x4fb9("0x6a")](data);
            data = data + 4;
            var i_port = callback["readUInt16LE"](data);
            data = data + 2;
            var $baseModifiers = callback[_0x4fb9("0x62")](data++);
            var padding = 0;
            if ($baseModifiers & 128) {
              padding = callback[_0x4fb9("0x62")](data++);
            }
            var s_description = null;
            var flippedGlobalIds = null;
            var strFooter = "";
            var lineChartMap = null;
            if ($baseModifiers & 2) {
              var _0xeb3b45 = callback[_0x4fb9("0x62")](data++);
              var _0x117074 = callback[_0x4fb9("0x62")](data++);
              var _0x5cd821 = callback[_0x4fb9("0x62")](data++);
              s_description = this["rgb2Hex"](~~(_0xeb3b45 * .9), ~~(_0x117074 * .9), ~~(_0x5cd821 * .9));
            }
            if ($baseModifiers & 4) {
              flippedGlobalIds = doUpdate();
            }
            if ($baseModifiers & 8) {
              strFooter = window["decodeURIComponent"](window[_0x4fb9("0x990")](doUpdate()));
            }
            var $baseMethod = $baseModifiers & 1;
            var fn_callback = padding & 1;
            var o_transport = null;
            if (this[_0x4fb9("0x946")][_0x4fb9("0x122")](min)) {
              o_transport = this["indexedCells"][min];
              if (s_description) {
                o_transport[_0x4fb9("0x4b4")] = s_description;
              }
            } else {
              o_transport = new construct(min, aUMLBlocks, s_host, i_port, s_description, fn_callback, $baseMethod, ![], props["shortMass"], props[_0x4fb9("0x718")]);
              o_transport[_0x4fb9("0x93a")] = this[_0x4fb9("0x93a")];
              if (!fn_callback) {
                if ($baseMethod && props[_0x4fb9("0x729")]) {
                  this[_0x4fb9("0x940")][_0x4fb9("0xb")](o_transport);
                }
                this["cells"][_0x4fb9("0xb")](o_transport);
                if (this["playerCellIDs"]["indexOf"](min) != -1 && this[_0x4fb9("0x942")][_0x4fb9("0x52")](o_transport) == -1) {
                  o_transport[_0x4fb9("0x93c")] = !![];
                  this[_0x4fb9("0x817")] = s_description;
                  this[_0x4fb9("0x942")][_0x4fb9("0xb")](o_transport);
                }
              } else {
                this[_0x4fb9("0x941")][_0x4fb9("0xb")](o_transport);
              }
              this[_0x4fb9("0x946")][min] = o_transport;
            }
            if (o_transport["isPlayerCell"]) {
              strFooter = this["playerNick"];
            }
            if (strFooter) {
              o_transport[_0x4fb9("0x8e9")] = strFooter;
            }
            o_transport["targetX"] = aUMLBlocks;
            o_transport[_0x4fb9("0x948")] = s_host;
            o_transport[_0x4fb9("0x925")] = i_port;
            o_transport["isFood"] = fn_callback;
            o_transport[_0x4fb9("0x93b")] = $baseMethod;
            if (flippedGlobalIds) {
              o_transport[_0x4fb9("0x9b3")] = flippedGlobalIds;
            }
            if (padding & 4) {
              lineChartMap = callback["readUInt32LE"](data);
              data = data + 4;
            }
          }
          i = callback[_0x4fb9("0x63")](data);
          data = data + 2;
          whichFriend = 0;
          for (; whichFriend < i; whichFriend++) {
            min = callback[_0x4fb9("0x64")](data);
            data = data + 4;
            o_transport = this["indexedCells"][min];
            if (o_transport) {
              o_transport["removeCell"]();
            }
          }
          if (this[_0x4fb9("0x943")] && !this["playerCells"]["length"]) {
            this["play"] = ![];
            router[_0x4fb9("0x9b4")]();
            router[_0x4fb9("0x81b")](300);
          }
        },
        "color2Hex" : function(canCreateDiscussions) {
          var shapePathsCollection = canCreateDiscussions[_0x4fb9("0x32")](16);
          return shapePathsCollection["length"] == 1 ? "0" + shapePathsCollection : shapePathsCollection;
        },
        "rgb2Hex" : function(r, g, b) {
          return "#" + this[_0x4fb9("0x9b5")](r) + this[_0x4fb9("0x9b5")](g) + this[_0x4fb9("0x9b5")](b);
        },
        "sortCells" : function() {
          this[_0x4fb9("0x852")][_0x4fb9("0x8b5")](function(cell, coordinates) {
            return cell[_0x4fb9("0x12e")] == coordinates[_0x4fb9("0x12e")] ? cell["id"] - coordinates["id"] : cell[_0x4fb9("0x12e")] - coordinates[_0x4fb9("0x12e")];
          });
        },
        "calculatePlayerMassAndPosition" : function() {
          var vol = 0;
          var _0x501c85 = 0;
          var i = 0;
          var x0 = 0;
          var d = this[_0x4fb9("0x942")]["length"];
          var j = 0;
          for (; j < d; j++) {
            var v = this[_0x4fb9("0x942")][j];
            vol = vol + v[_0x4fb9("0x12e")];
            _0x501c85 = _0x501c85 + v[_0x4fb9("0x925")] * v[_0x4fb9("0x925")];
            i = i + v["x"] / d;
            x0 = x0 + v["y"] / d;
          }
          this[_0x4fb9("0x94a")] = i;
          this[_0x4fb9("0x98b")] = x0;
          this[_0x4fb9("0x9b6")] = vol;
          this[_0x4fb9("0x63b")] = ~~(_0x501c85 / 100);
          this[_0x4fb9("0x9b7")]();
        },
        "recalculatePlayerMass" : function() {
          this["playerScore"] = Math[_0x4fb9("0x94e")](this[_0x4fb9("0x63c")], this[_0x4fb9("0x63b")]);
          if (props["virColors"] || props[_0x4fb9("0x5f2")] || props["oppColors"] || props["oppRings"] || props[_0x4fb9("0x63e")]) {
            var document = this[_0x4fb9("0x942")];
            var el = document["length"];
            document["sort"](function(cell, coordinates) {
              return cell[_0x4fb9("0x12e")] == coordinates[_0x4fb9("0x12e")] ? cell["id"] - coordinates["id"] : cell[_0x4fb9("0x12e")] - coordinates["size"];
            });
            this[_0x4fb9("0x85b")] = ~~(document[0][_0x4fb9("0x12e")] * document[0][_0x4fb9("0x12e")] / 100);
            this["playerMaxMass"] = ~~(document[el - 1][_0x4fb9("0x12e")] * document[el - 1][_0x4fb9("0x12e")] / 100);
            this[_0x4fb9("0x642")] = el;
          }
          if (props[_0x4fb9("0x63e")]) {
            var _0x16e00a = this[_0x4fb9("0x5ea")] ? this["playerMaxMass"] : this[_0x4fb9("0x85b")];
            if (_0x16e00a > 35) {
              this[_0x4fb9("0x63f")] = ~~(_0x16e00a * (_0x16e00a < 1E3 ? .35 : .38));
            } else {
              this[_0x4fb9("0x63f")] = null;
            }
          }
        },
        "compareCells" : function() {
          if (!this[_0x4fb9("0x617")]) {
            return;
          }
          if (props[_0x4fb9("0x5f6")] || props[_0x4fb9("0x5f4")] || props["splitRange"]) {
            if (props[_0x4fb9("0x5f4")] || props[_0x4fb9("0x5f2")]) {
              this["biggerSTECellsCache"] = [];
              this[_0x4fb9("0x9b8")] = [];
              this[_0x4fb9("0x9b9")] = [];
              this[_0x4fb9("0x9ba")] = [];
            }
            var ARGS_IDX = 0;
            for (; ARGS_IDX < this[_0x4fb9("0x852")]["length"]; ARGS_IDX++) {
              var args = this[_0x4fb9("0x852")][ARGS_IDX];
              if (args["isVirus"]) {
                continue;
              }
              var v = ~~(args[_0x4fb9("0x12e")] * args[_0x4fb9("0x12e")] / 100);
              var count = this["selectBiggestCell"] ? this[_0x4fb9("0x9bb")] : this[_0x4fb9("0x85b")];
              var i = v / count;
              var nrCallbackWrap = count < 1E3 ? .35 : .38;
              if (props["oppColors"] && !props[_0x4fb9("0x5f4")]) {
                args[_0x4fb9("0x9bc")] = this[_0x4fb9("0x9bd")](args["isPlayerCell"], i, nrCallbackWrap);
              }
              if (!args[_0x4fb9("0x93c")] && (props[_0x4fb9("0x5f2")] || props[_0x4fb9("0x5f4")])) {
                this[_0x4fb9("0x9be")](args["x"], args["y"], args[_0x4fb9("0x12e")], i, nrCallbackWrap);
              }
            }
          }
        },
        "cacheCells" : function(xRel, yRel, requestSize, _num1, _num2) {
          if (_num1 >= 2.5) {
            this[_0x4fb9("0x9bf")][_0x4fb9("0xb")]({
              "x" : xRel,
              "y" : yRel,
              "size" : requestSize
            });
            return;
          } else {
            if (_num1 >= 1.25) {
              this[_0x4fb9("0x9b8")][_0x4fb9("0xb")]({
                "x" : xRel,
                "y" : yRel,
                "size" : requestSize
              });
              return;
            } else {
              if (_num1 < 1.25 && _num1 > .75) {
                return;
              } else {
                if (_num1 > _num2) {
                  this[_0x4fb9("0x9b9")][_0x4fb9("0xb")]({
                    "x" : xRel,
                    "y" : yRel,
                    "size" : requestSize
                  });
                  return;
                } else {
                  this[_0x4fb9("0x9ba")]["push"]({
                    "x" : xRel,
                    "y" : yRel,
                    "size" : requestSize
                  });
                  return;
                }
              }
            }
          }
        },
        "setCellOppColor" : function(uploadFileTpl, _num1, _num2) {
          if (uploadFileTpl) {
            return params[_0x4fb9("0x4b4")];
          }
          if (_num1 > 11) {
            return _0x4fb9("0x9c0");
          } else {
            if (_num1 >= 2.5) {
              return _0x4fb9("0x9c1");
            } else {
              if (_num1 >= 1.25) {
                return _0x4fb9("0x9c2");
              } else {
                if (_num1 < 1.25 && _num1 > .75) {
                  return _0x4fb9("0x85c");
                } else {
                  if (_num1 > _num2) {
                    return _0x4fb9("0x9c3");
                  } else {
                    return _0x4fb9("0x9c4");
                  }
                }
              }
            }
          }
        },
        "getCursorPosition" : function() {
          this[_0x4fb9("0x9c5")] = (this["clientX"] - this[_0x4fb9("0x94b")] / 2) / this["viewScale"] + this[_0x4fb9("0x94a")];
          this[_0x4fb9("0x983")] = (this[_0x4fb9("0x9c6")] - this["canvasHeight"] / 2) / this[_0x4fb9("0x85d")] + this[_0x4fb9("0x98b")];
        },
        "setZoom" : function(repaintEverything) {
          repaintEverything[_0x4fb9("0x54e")]();
          this[_0x4fb9("0x611")] *= Math[_0x4fb9("0x66")](props[_0x4fb9("0x747")], repaintEverything["wheelDelta"] / -120 || repaintEverything[_0x4fb9("0x9c7")] || 0);
          if (this["zoomValue"] > 4 / this[_0x4fb9("0x85d")]) {
            this[_0x4fb9("0x611")] = 4 / this[_0x4fb9("0x85d")];
          }
        },
        "setTargetPosition" : function(value, index) {
          this[_0x4fb9("0x924")] = value - this[_0x4fb9("0x5e0")];
          this["targetY"] = index - this[_0x4fb9("0x5e2")];
          this[_0x4fb9("0x8f7")] = Math[_0x4fb9("0x59c")](Math["sqrt"](Math[_0x4fb9("0x66")](this["playerX"] - this[_0x4fb9("0x924")], 2) + Math[_0x4fb9("0x66")](this["playerY"] - this[_0x4fb9("0x948")], 2)));
        },
        "resetTargetPosition" : function() {
          this[_0x4fb9("0x924")] = this[_0x4fb9("0x5df")];
          this[_0x4fb9("0x948")] = this["playerY"];
        },
        "setKeys" : function() {
          var reverseKeyMap = this;
          document["onkeydown"] = function(parentNode) {
            var parentOfParent = parentNode[_0x4fb9("0x9c8")];
            if (reverseKeyMap[_0x4fb9("0x9c9")][parentOfParent]) {
              return;
            }
            switch(parentOfParent) {
              case 13:
                reverseKeyMap[_0x4fb9("0x9ca")]("");
                break;
              case 32:
                reverseKeyMap[_0x4fb9("0x9cb")]();
                break;
              case 81:
                reverseKeyMap[_0x4fb9("0x9cc")]();
                break;
              case 83:
                reverseKeyMap[_0x4fb9("0x9cd")]();
                break;
              case 87:
                reverseKeyMap[_0x4fb9("0x9ce")]();
                break;
            }
          };
          document[_0x4fb9("0x9cf")] = function(map) {
            reverseKeyMap["pressedKeys"][map["keyCode"]] = ![];
          };
        },
        "init" : function() {
          var bonusTraitModifiers = this;
          if (/firefox/i[_0x4fb9("0x20f")](navigator[_0x4fb9("0x9d0")])) {
            document[_0x4fb9("0x9d1")](_0x4fb9("0x9d2"), function(person) {
              bonusTraitModifiers[_0x4fb9("0x9d3")](person);
            }, ![]);
          } else {
            document[_0x4fb9("0x566")][_0x4fb9("0x9d4")] = function(person) {
              bonusTraitModifiers[_0x4fb9("0x9d3")](person);
            };
          }
          setInterval(function() {
            bonusTraitModifiers["sendPosition"]();
          }, 40);
          if (window[_0x4fb9("0x87b")] && window[_0x4fb9("0x87b")][_0x4fb9("0x97a")]) {
            this["setClientVersion"](window[_0x4fb9("0x87b")]["clientVersion"], window[_0x4fb9("0x87b")][_0x4fb9("0x985")]);
          }
        }
      };
      window["sendAction"] = function(_relatedTarget) {
        data[_0x4fb9("0x97f")](_relatedTarget);
      };
      var defaults = {
        "canvas" : null,
        "ctx" : null,
        "canvasWidth" : 0,
        "canvasHeight" : 0,
        "camX" : 0,
        "camY" : 0,
        "scale" : 1,
        "fpsLastRequest" : null,
        "renderedFrames" : 0,
        "fps" : 0,
        "pi2" : 2 * Math["PI"],
        "battleAreaMap" : null,
        "battleAreaMapCtx" : null,
        "pieChart" : null,
        "pellet" : null,
        "indicator" : null,
        "setCanvas" : function() {
          this["canvas"] = document["getElementById"](_0x4fb9("0x820"));
          this["ctx"] = this[_0x4fb9("0x820")][_0x4fb9("0x834")]("2d");
          this[_0x4fb9("0x820")]["onmousemove"] = function(dataFromFile) {
            data[_0x4fb9("0x9d5")] = dataFromFile[_0x4fb9("0x9d5")];
            data["clientY"] = dataFromFile[_0x4fb9("0x9c6")];
            data[_0x4fb9("0x9d6")]();
          };
        },
        "resizeCanvas" : function() {
          this["canvasWidth"] = window[_0x4fb9("0x9d7")];
          this[_0x4fb9("0x94c")] = window[_0x4fb9("0x9d8")];
          this["canvas"]["width"] = this[_0x4fb9("0x94b")];
          this[_0x4fb9("0x820")]["height"] = this[_0x4fb9("0x94c")];
          data["canvasWidth"] = this[_0x4fb9("0x94b")];
          data[_0x4fb9("0x94c")] = this[_0x4fb9("0x94c")];
          this[_0x4fb9("0x9d9")]();
        },
        "setView" : function() {
          this[_0x4fb9("0x91c")]();
          if (data[_0x4fb9("0x942")]["length"]) {
            data[_0x4fb9("0x9da")]();
            this[_0x4fb9("0x9db")] = (this[_0x4fb9("0x9db")] + data["viewX"]) / 2;
            this[_0x4fb9("0x9dc")] = (this[_0x4fb9("0x9dc")] + data[_0x4fb9("0x98b")]) / 2;
          } else {
            this[_0x4fb9("0x9db")] = (29 * this["camX"] + data[_0x4fb9("0x94a")]) / 30;
            this[_0x4fb9("0x9dc")] = (29 * this[_0x4fb9("0x9dc")] + data["viewY"]) / 30;
          }
          data[_0x4fb9("0x5df")] = this[_0x4fb9("0x9db")];
          data[_0x4fb9("0x5e1")] = this["camY"];
        },
        "setScale" : function() {
          if (!data["autoZoom"]) {
            this[_0x4fb9("0x90f")] = (9 * this[_0x4fb9("0x90f")] + this[_0x4fb9("0x9dd")]()) / 10;
            data["viewScale"] = this[_0x4fb9("0x90f")];
            return;
          }
          if (data[_0x4fb9("0x617")]) {
            this["scale"] = (9 * this[_0x4fb9("0x90f")] + Math[_0x4fb9("0x66")](Math[_0x4fb9("0x51")](64 / data["playerSize"], 1), .4) * this[_0x4fb9("0x9dd")]()) / 10;
          } else {
            this[_0x4fb9("0x90f")] = (9 * this[_0x4fb9("0x90f")] + data["scale"] * this[_0x4fb9("0x9dd")]()) / 10;
          }
          data[_0x4fb9("0x85d")] = this[_0x4fb9("0x90f")];
        },
        "getZoom" : function() {
          return Math[_0x4fb9("0x94e")](this[_0x4fb9("0x94b")] / 1080, this[_0x4fb9("0x94c")] / 1920) * data["zoomValue"];
        },
        "renderFrame" : function() {
          data[_0x4fb9("0x93a")] = Date[_0x4fb9("0x5de")]();
          i = 0;
          for (; i < data["cells"]["length"]; i++) {
            data["cells"][i][_0x4fb9("0x947")]();
          }
          this[_0x4fb9("0x9de")]();
          data[_0x4fb9("0x9d6")]();
          data[_0x4fb9("0x9df")]();
          data[_0x4fb9("0x9e0")]();
          this[_0x4fb9("0x9e1")]["clearRect"](0, 0, this[_0x4fb9("0x94b")], this["canvasHeight"]);
          if (props[_0x4fb9("0x600")]) {
            this[_0x4fb9("0x9e2")](this[_0x4fb9("0x9e1")], this[_0x4fb9("0x94b")], this[_0x4fb9("0x94c")], this[_0x4fb9("0x90f")], this[_0x4fb9("0x9db")], this[_0x4fb9("0x9dc")]);
          }
          this["ctx"][_0x4fb9("0x83c")]();
          this[_0x4fb9("0x9e1")][_0x4fb9("0x83d")](this[_0x4fb9("0x94b")] / 2, this["canvasHeight"] / 2);
          this[_0x4fb9("0x9e1")][_0x4fb9("0x90f")](this[_0x4fb9("0x90f")], this[_0x4fb9("0x90f")]);
          this[_0x4fb9("0x9e1")]["translate"](-this[_0x4fb9("0x9db")], -this[_0x4fb9("0x9dc")]);
          if (props["showBgSectors"]) {
            this[_0x4fb9("0x84b")](this[_0x4fb9("0x9e1")], data["mapOffsetFixed"], options[_0x4fb9("0x82e")], options[_0x4fb9("0x82f")], data["mapMinX"], data[_0x4fb9("0x9af")], data["mapMaxX"], data["mapMaxY"], options[_0x4fb9("0x4e6")], options[_0x4fb9("0x4e7")], options[_0x4fb9("0x4fd")], !![]);
          }
          if (data["gameMode"] === ":battleroyale") {
            this[_0x4fb9("0x9e3")](this[_0x4fb9("0x9e1")]);
          }
          if (props[_0x4fb9("0x721")]) {
            var y = options[_0x4fb9("0x4fc")] / 2;
            this[_0x4fb9("0x9e4")](this[_0x4fb9("0x9e1")], data[_0x4fb9("0x82b")], data[_0x4fb9("0x9e5")] - y, data["mapMinY"] - y, data[_0x4fb9("0x9b0")] + y, data[_0x4fb9("0x9b1")] + y, options[_0x4fb9("0x4e5")], options[_0x4fb9("0x4fc")]);
          }
          if (props[_0x4fb9("0x729")]) {
            this["drawVirusesRange"](this[_0x4fb9("0x9e1")], data["viruses"]);
          }
          this["drawFood"]();
          if (data[_0x4fb9("0x617")]) {
            if (props[_0x4fb9("0x5f2")]) {
              this[_0x4fb9("0x9e6")](this[_0x4fb9("0x9e1")], data[_0x4fb9("0x9bf")], data[_0x4fb9("0x942")], data["selectBiggestCell"]);
            }
            if (props[_0x4fb9("0x5f4")]) {
              this["drawOppRings"](this["ctx"], this[_0x4fb9("0x90f")], data[_0x4fb9("0x9bf")], data[_0x4fb9("0x9b8")], data[_0x4fb9("0x9b9")], data[_0x4fb9("0x9ba")]);
            }
            if (props[_0x4fb9("0x72a")]) {
              this[_0x4fb9("0x9e7")](this[_0x4fb9("0x9e1")], data[_0x4fb9("0x942")], data["cursorX"], data["cursorY"]);
            }
          }
          var i = 0;
          for (; i < data[_0x4fb9("0x945")]["length"]; i++) {
            data["removedCells"][i][_0x4fb9("0x954")](this[_0x4fb9("0x9e1")], !![]);
          }
          i = 0;
          for (; i < data[_0x4fb9("0x852")]["length"]; i++) {
            data[_0x4fb9("0x852")][i][_0x4fb9("0x954")](this[_0x4fb9("0x9e1")]);
          }
          this[_0x4fb9("0x9e1")][_0x4fb9("0x846")]();
          if (data[_0x4fb9("0x601")] === _0x4fb9("0x602")) {
            if (this[_0x4fb9("0x98d")] && this[_0x4fb9("0x98d")]["width"]) {
              this[_0x4fb9("0x9e1")][_0x4fb9("0x822")](this[_0x4fb9("0x98d")], this[_0x4fb9("0x94b")] - this["pieChart"][_0x4fb9("0x59f")] - 10, 10);
            }
          }
        },
        "drawGrid" : function(data, w, h, scale, x, y) {
          var ratio = w / scale;
          var height = h / scale;
          var r = (-x + ratio / 2) % 50;
          var sy = (-y + height / 2) % 50;
          data[_0x4fb9("0x83f")] = options[_0x4fb9("0x4e6")];
          data[_0x4fb9("0x837")] = 1 * scale;
          data[_0x4fb9("0x5d7")]();
          for (; r < ratio; r = r + 50) {
            data["moveTo"](r * scale - .5, 0);
            data[_0x4fb9("0x841")](r * scale - .5, height * scale);
          }
          for (; sy < height; sy = sy + 50) {
            data["moveTo"](0, sy * scale - .5);
            data[_0x4fb9("0x841")](ratio * scale, sy * scale - .5);
          }
          data[_0x4fb9("0x843")]();
          data[_0x4fb9("0x837")] = 1;
        },
        "drawSectors" : function(result, prop, end, count, a, x, b, h, elem, value, c, init) {
          if (!prop && init) {
            return;
          }
          var t = ~~((b - a) / end);
          var size = ~~((h - x) / count);
          var y = 0;
          var left = 0;
          result[_0x4fb9("0x83f")] = elem;
          result["fillStyle"] = value;
          result[_0x4fb9("0x5d3")] = c;
          if (init || !init && props[_0x4fb9("0x683")]) {
            result[_0x4fb9("0x5d7")]();
            var i = 0;
            for (; i < end + 1; i++) {
              y = a + t * i;
              result[_0x4fb9("0x840")](i == end ? b : y, x);
              result[_0x4fb9("0x841")](i == end ? b : y, h);
            }
            i = 0;
            for (; i < count + 1; i++) {
              left = x + size * i;
              result[_0x4fb9("0x840")](a - c / 2, i == count ? h : left);
              result["lineTo"](b + c / 2, i == count ? h : left);
            }
            result[_0x4fb9("0x843")]();
          } else {
            this[_0x4fb9("0x9e4")](result, prop, a, x, b, h, elem, c);
          }
          if (init) {
            result["font"] = options[_0x4fb9("0x9e8")] + " " + options["sectorsFontSize"] + _0x4fb9("0x5d0") + options[_0x4fb9("0x9e9")];
          } else {
            result[_0x4fb9("0x838")] = options[_0x4fb9("0x84c")] + " " + ~~(.4 * size) + _0x4fb9("0x5d0") + options[_0x4fb9("0x839")];
          }
          result[_0x4fb9("0x5d1")] = "center";
          result[_0x4fb9("0x84e")] = _0x4fb9("0x9ea");
          i = 0;
          for (; i < count; i++) {
            var c = 0;
            for (; c < end; c++) {
              var radixToPower = String["fromCharCode"](65 + i) + (c + 1);
              y = ~~(a + t / 2 + c * t);
              left = ~~(x + size / 2 + i * size);
              result["fillText"](radixToPower, y, left);
            }
          }
        },
        "drawMapBorders" : function(ctx, type, x0, x1, y0, y, canvas, color) {
          if (!type) {
            return;
          }
          ctx[_0x4fb9("0x83f")] = canvas;
          ctx[_0x4fb9("0x5d3")] = color;
          ctx[_0x4fb9("0x5d7")]();
          ctx[_0x4fb9("0x840")](x0, x1);
          ctx["lineTo"](y0, x1);
          ctx[_0x4fb9("0x841")](y0, y);
          ctx["lineTo"](x0, y);
          ctx[_0x4fb9("0x842")]();
          ctx[_0x4fb9("0x843")]();
        },
        "drawVirusesRange" : function(style, data, linkedEntities) {
          if (!data["length"]) {
            return;
          }
          style[_0x4fb9("0x5d7")]();
          var i = 0;
          for (; i < data["length"]; i++) {
            var node = data[i]["x"];
            var name = data[i]["y"];
            style[_0x4fb9("0x840")](node, name);
            style[_0x4fb9("0x5d8")](node, name, data[i]["size"] + 820, 0, this[_0x4fb9("0x5cc")], ![]);
          }
          style[_0x4fb9("0x5d5")] = options[_0x4fb9("0x4eb")];
          style[_0x4fb9("0x837")] = .1;
          style[_0x4fb9("0x23")]();
          style["globalAlpha"] = 1;
          if (linkedEntities) {
            data = [];
          }
        },
        "drawFood" : function() {
          if (!data[_0x4fb9("0x5fe")] || props["autoHideFoodOnZoom"] && this[_0x4fb9("0x90f")] < .2) {
            return;
          }
          if (props["autoHideFood"] && !data["foodIsHidden"] && data[_0x4fb9("0x63b")] > 1E3) {
            data[_0x4fb9("0x5fe")] = ![];
            data[_0x4fb9("0x81a")] = !![];
            return;
          }
          if (!props[_0x4fb9("0x71d")]) {
            this[_0x4fb9("0x9eb")](this["ctx"], data["food"], this[_0x4fb9("0x90f")]);
            return;
          }
          var _jsonName = 0;
          for (; _jsonName < data[_0x4fb9("0x941")]["length"]; _jsonName++) {
            data["food"][_jsonName][_0x4fb9("0x947")]();
            data[_0x4fb9("0x941")][_jsonName][_0x4fb9("0x954")](this[_0x4fb9("0x9e1")]);
          }
        },
        "drawCachedFood" : function(rng, data, linkedEntities, force) {
          if (!data["length"]) {
            return;
          }
          if (props[_0x4fb9("0x71c")] && this["pellet"]) {
            var i = 0;
            for (; i < data["length"]; i++) {
              var r = data[i]["x"] - 10 - options[_0x4fb9("0x955")];
              var offset = data[i]["y"] - 10 - options[_0x4fb9("0x955")];
              rng[_0x4fb9("0x822")](this[_0x4fb9("0x9ec")], r, offset);
            }
          } else {
            rng[_0x4fb9("0x5d7")]();
            i = 0;
            for (; i < data["length"]; i++) {
              r = data[i]["x"];
              offset = data[i]["y"];
              rng[_0x4fb9("0x840")](r, offset);
              if (linkedEntities < .16) {
                var rOffset = data[i][_0x4fb9("0x12e")] + options[_0x4fb9("0x955")];
                rng[_0x4fb9("0x9ed")](r - rOffset, offset - rOffset, 2 * rOffset, 2 * rOffset);
                continue;
              }
              rng["arc"](r, offset, data[i]["size"] + options[_0x4fb9("0x955")], 0, this[_0x4fb9("0x5cc")], ![]);
            }
            rng["fillStyle"] = options[_0x4fb9("0x9ee")];
            rng[_0x4fb9("0x837")] = 1;
            rng[_0x4fb9("0x23")]();
          }
          if (force) {
            data = [];
          }
        },
        "drawSplitRange" : function(settings, context, groups, viewport, paramsParser) {
          this["drawCircles"](settings, context, 760, 4, .4, _0x4fb9("0x9c1"));
          if (groups["length"]) {
            var x = viewport ? groups["length"] - 1 : 0;
            settings[_0x4fb9("0x5d3")] = 6;
            settings[_0x4fb9("0x837")] = options[_0x4fb9("0x9ef")] ? .7 : .35;
            settings["strokeStyle"] = options[_0x4fb9("0x4f0")];
            settings[_0x4fb9("0x5d7")]();
            settings[_0x4fb9("0x5d8")](groups[x]["x"], groups[x]["y"], groups[x][_0x4fb9("0x12e")] + 760, 0, this["pi2"], ![]);
            settings["closePath"]();
            settings["stroke"]();
          }
          settings[_0x4fb9("0x837")] = 1;
          if (paramsParser) {
            context = [];
          }
        },
        "drawOppRings" : function(mmCoreSplitViewBlock, $state, breadcrumbs, OSDConfigService, RequestTrackingService, isBgroundImg, stgs) {
          var artistTrack = 14 + 2 / $state;
          var GET_AUTH_URL_TIMEOUT = 12 + 1 / $state;
          this[_0x4fb9("0x9f0")](mmCoreSplitViewBlock, breadcrumbs, artistTrack, GET_AUTH_URL_TIMEOUT, .75, _0x4fb9("0x9c1"));
          this[_0x4fb9("0x9f0")](mmCoreSplitViewBlock, OSDConfigService, artistTrack, GET_AUTH_URL_TIMEOUT, .75, _0x4fb9("0x9c2"));
          this[_0x4fb9("0x9f0")](mmCoreSplitViewBlock, RequestTrackingService, artistTrack, GET_AUTH_URL_TIMEOUT, .75, "#00C8FF");
          this[_0x4fb9("0x9f0")](mmCoreSplitViewBlock, isBgroundImg, artistTrack, GET_AUTH_URL_TIMEOUT, .75, _0x4fb9("0x9c4"));
          if (stgs) {
            breadcrumbs = [];
            OSDConfigService = [];
            RequestTrackingService = [];
            isBgroundImg = [];
          }
        },
        "drawCursorTracking" : function(panel, params, callback, options) {
          panel[_0x4fb9("0x5d3")] = 4;
          panel["globalAlpha"] = options[_0x4fb9("0x9ef")] ? .75 : .35;
          panel[_0x4fb9("0x83f")] = options[_0x4fb9("0x4ef")];
          panel[_0x4fb9("0x5d7")]();
          var i = 0;
          for (; i < params["length"]; i++) {
            panel[_0x4fb9("0x840")](params[i]["x"], params[i]["y"]);
            panel["lineTo"](callback, options);
          }
          panel[_0x4fb9("0x843")]();
          panel[_0x4fb9("0x837")] = 1;
        },
        "drawCircles" : function(args, data, type, className, value, context) {
          args[_0x4fb9("0x5d3")] = className;
          args["globalAlpha"] = value;
          args[_0x4fb9("0x83f")] = context;
          var i = 0;
          for (; i < data["length"]; i++) {
            args["beginPath"]();
            args[_0x4fb9("0x5d8")](data[i]["x"], data[i]["y"], data[i][_0x4fb9("0x12e")] + type, 0, this[_0x4fb9("0x5cc")], ![]);
            args[_0x4fb9("0x842")]();
            args[_0x4fb9("0x843")]();
          }
          args[_0x4fb9("0x837")] = 1;
        },
        "drawDashedCircle" : function(attributes, attribute, template, substitutions, formatters, initialValue, value) {
          var indexToDelta = this[_0x4fb9("0x5cc")] / formatters;
          attributes[_0x4fb9("0x5d3")] = initialValue;
          attributes[_0x4fb9("0x83f")] = value;
          var blendValueArrayIndex = 0;
          for (; blendValueArrayIndex < formatters; blendValueArrayIndex = blendValueArrayIndex + 2) {
            attributes[_0x4fb9("0x5d7")]();
            attributes[_0x4fb9("0x5d8")](attribute, template, substitutions - initialValue / 2, blendValueArrayIndex * indexToDelta, (blendValueArrayIndex + 1) * indexToDelta, ![]);
            attributes[_0x4fb9("0x843")]();
          }
        },
        "drawTeammatesInd" : function(boardManager, isSlidingUp, $cont, $slides) {
          if (!this["indicator"]) {
            return;
          }
          boardManager[_0x4fb9("0x822")](this[_0x4fb9("0x84f")], isSlidingUp - 45, $cont - $slides - 90);
        },
        "drawPieChart" : function() {
          if (!this[_0x4fb9("0x98d")]) {
            this[_0x4fb9("0x98d")] = document[_0x4fb9("0x81f")](_0x4fb9("0x820"));
          }
          var $ = this[_0x4fb9("0x98d")][_0x4fb9("0x834")]("2d");
          var enableScale = Math[_0x4fb9("0x51")](200, .3 * this[_0x4fb9("0x94b")]) / 200;
          this[_0x4fb9("0x98d")][_0x4fb9("0x59f")] = 200 * enableScale;
          this[_0x4fb9("0x98d")][_0x4fb9("0x5b2")] = 240 * enableScale;
          $[_0x4fb9("0x90f")](enableScale, enableScale);
          var css = [_0x4fb9("0x48c"), "#FF3333", "#33FF33", _0x4fb9("0x9f1")];
          var index__460288 = 0;
          var name = 0;
          for (; name < data[_0x4fb9("0x98d")]["length"]; name++) {
            var G__460292 = index__460288 + data[_0x4fb9("0x98d")][name] * this[_0x4fb9("0x5cc")];
            $[_0x4fb9("0x5d5")] = css[name + 1];
            $[_0x4fb9("0x5d7")]();
            $[_0x4fb9("0x840")](100, 140);
            $["arc"](100, 140, 80, index__460288, G__460292, ![]);
            $[_0x4fb9("0x23")]();
            index__460288 = G__460292;
          }
        },
        "drawBattleArea" : function(mmCoreSplitViewBlock) {
          if (!data["battleRoyale"]["state"]) {
            return;
          }
          this["drawDangerArea"](mmCoreSplitViewBlock, data[_0x4fb9("0x998")]["x"], data[_0x4fb9("0x998")]["y"], data[_0x4fb9("0x998")][_0x4fb9("0x9f2")], data[_0x4fb9("0x9e5")], data[_0x4fb9("0x9af")], data[_0x4fb9("0x9b0")] - data["mapMinX"], data[_0x4fb9("0x9b1")] - data["mapMinY"], options[_0x4fb9("0x4f2")], .25);
          this[_0x4fb9("0x9f3")](mmCoreSplitViewBlock, data["battleRoyale"][_0x4fb9("0x924")], data[_0x4fb9("0x998")][_0x4fb9("0x948")], data[_0x4fb9("0x998")][_0x4fb9("0x99e")], 40, options[_0x4fb9("0x4f1")]);
        },
        "drawBattleAreaOnMinimap" : function(params, aLifeTime, now, pick_x, thisControlX, thisControlY) {
          if (!data[_0x4fb9("0x998")]["state"]) {
            return;
          }
          if (!this[_0x4fb9("0x9f4")]) {
            this[_0x4fb9("0x9f4")] = document[_0x4fb9("0x81f")](_0x4fb9("0x820"));
            this[_0x4fb9("0x9f5")] = this[_0x4fb9("0x9f4")]["getContext"]("2d");
          }
          if (this["battleAreaMap"][_0x4fb9("0x59f")] != aLifeTime) {
            this[_0x4fb9("0x9f4")][_0x4fb9("0x59f")] = aLifeTime;
            this["battleAreaMap"][_0x4fb9("0x5b2")] = now;
          } else {
            this[_0x4fb9("0x9f5")][_0x4fb9("0x835")](0, 0, aLifeTime, now);
          }
          var lastviewmatrix = (data[_0x4fb9("0x998")]["x"] + thisControlX) * pick_x;
          var tIndW = (data[_0x4fb9("0x998")]["y"] + thisControlY) * pick_x;
          var FragCoord_x = data["battleRoyale"][_0x4fb9("0x9f2")] * pick_x;
          this[_0x4fb9("0x9f6")](this[_0x4fb9("0x9f5")], lastviewmatrix, tIndW, FragCoord_x, 0, 0, aLifeTime, now, options["dangerAreaColor"], .25);
          lastviewmatrix = ~~((data[_0x4fb9("0x998")][_0x4fb9("0x924")] + thisControlX) * pick_x);
          tIndW = ~~((data[_0x4fb9("0x998")][_0x4fb9("0x948")] + thisControlY) * pick_x);
          FragCoord_x = ~~(data[_0x4fb9("0x998")]["targetRadius"] * pick_x);
          this[_0x4fb9("0x9f3")](this["battleAreaMapCtx"], lastviewmatrix, tIndW, FragCoord_x, 2, options[_0x4fb9("0x4f1")]);
          params[_0x4fb9("0x822")](this[_0x4fb9("0x9f4")], 0, 0);
        },
        "drawDangerArea" : function(source, node, a, b, areMutuallyExclusive, parentType1, selectionSet1, prop, aspect, value) {
          if (data[_0x4fb9("0x998")][_0x4fb9("0x9f2")] == data[_0x4fb9("0x998")]["maxRadius"] || b <= 0) {
            return;
          }
          source[_0x4fb9("0x83c")]();
          source[_0x4fb9("0x837")] = value;
          source[_0x4fb9("0x5d5")] = aspect;
          source[_0x4fb9("0x9f7")](areMutuallyExclusive, parentType1, selectionSet1, prop);
          source[_0x4fb9("0x9f8")] = "destination-out";
          source[_0x4fb9("0x837")] = 1;
          source[_0x4fb9("0x5d7")]();
          source[_0x4fb9("0x5d8")](node, a, b, 0, this["pi2"], ![]);
          source[_0x4fb9("0x23")]();
          source["restore"]();
        },
        "drawSafeArea" : function(mmCoreSplitViewBlock, $state, breadcrumbs, OSDConfigService, RequestTrackingService, PoolService) {
          if (data[_0x4fb9("0x998")][_0x4fb9("0xf5")] > 2 || OSDConfigService <= 0) {
            return;
          }
          this["drawDashedCircle"](mmCoreSplitViewBlock, $state, breadcrumbs, OSDConfigService, 60, RequestTrackingService, PoolService);
        },
        "drawGhostCells" : function() {
          if (!props[_0x4fb9("0x9f9")]) {
            return;
          }
          var PL$32 = data[_0x4fb9("0x992")];
          this[_0x4fb9("0x9e1")][_0x4fb9("0x5d7")]();
          var PL$66 = 0;
          for (; PL$66 < PL$32["length"]; PL$66++) {
            if (PL$32[PL$66][_0x4fb9("0x9fa")]) {
              continue;
            }
            var x0 = PL$32[PL$66]["x"];
            var childEdge = PL$32[PL$66]["y"];
            this[_0x4fb9("0x9e1")]["moveTo"](x0, childEdge);
            this["ctx"]["arc"](x0, childEdge, PL$32[PL$66][_0x4fb9("0x12e")], 0, this[_0x4fb9("0x5cc")], ![]);
          }
          this[_0x4fb9("0x9e1")][_0x4fb9("0x5d5")] = options[_0x4fb9("0x9fb")];
          this["ctx"][_0x4fb9("0x837")] = options["ghostCellsAlpha"];
          this[_0x4fb9("0x9e1")][_0x4fb9("0x9fc")] = options[_0x4fb9("0x9fb")];
          this[_0x4fb9("0x9e1")][_0x4fb9("0x9fd")] = 40;
          this["ctx"]["shadowOffsetX"] = 0;
          this[_0x4fb9("0x9e1")]["shadowOffsetY"] = 0;
          this[_0x4fb9("0x9e1")]["fill"]();
          this[_0x4fb9("0x9e1")]["globalAlpha"] = 1;
          this["ctx"][_0x4fb9("0x9fd")] = 0;
        },
        "preDrawPellet" : function() {
          this["pellet"] = null;
          var d = 10 + options[_0x4fb9("0x955")];
          var sw = document[_0x4fb9("0x81f")](_0x4fb9("0x820"));
          sw[_0x4fb9("0x59f")] = d * 2;
          sw[_0x4fb9("0x5b2")] = d * 2;
          var inBtn = sw[_0x4fb9("0x834")]("2d");
          inBtn["arc"](d, d, d, 0, this["pi2"], ![]);
          inBtn[_0x4fb9("0x5d5")] = options[_0x4fb9("0x9ee")];
          inBtn["fill"]();
          this["pellet"] = new Image;
          this["pellet"][_0x4fb9("0x550")] = sw[_0x4fb9("0x825")]();
          sw = null;
        },
        "preDrawIndicator" : function() {
          this["indicator"] = null;
          var canvas = document[_0x4fb9("0x81f")]("canvas");
          canvas["width"] = 90;
          canvas[_0x4fb9("0x5b2")] = 50;
          var SimpleFillSymbol = canvas[_0x4fb9("0x834")]("2d");
          SimpleFillSymbol[_0x4fb9("0x5d3")] = 2;
          SimpleFillSymbol["fillStyle"] = options[_0x4fb9("0x4ee")];
          SimpleFillSymbol["strokeStyle"] = _0x4fb9("0x457");
          SimpleFillSymbol[_0x4fb9("0x5d7")]();
          SimpleFillSymbol[_0x4fb9("0x840")](0, 0);
          SimpleFillSymbol[_0x4fb9("0x841")](90, 0);
          SimpleFillSymbol[_0x4fb9("0x841")](45, 50);
          SimpleFillSymbol["closePath"]();
          SimpleFillSymbol[_0x4fb9("0x23")]();
          SimpleFillSymbol[_0x4fb9("0x843")]();
          this[_0x4fb9("0x84f")] = new Image;
          this[_0x4fb9("0x84f")][_0x4fb9("0x550")] = canvas["toDataURL"]();
          canvas = null;
        },
        "countFps" : function() {
          if (!props[_0x4fb9("0x645")]) {
            return;
          }
          var _0x42191c = Date["now"]();
          if (!this[_0x4fb9("0x9fe")]) {
            this[_0x4fb9("0x9fe")] = _0x42191c;
          }
          if (_0x42191c - this[_0x4fb9("0x9fe")] >= 1E3) {
            this[_0x4fb9("0x647")] = this[_0x4fb9("0x9ff")];
            this[_0x4fb9("0x9ff")] = 0;
            this[_0x4fb9("0x9fe")] = _0x42191c;
          }
          this[_0x4fb9("0x9ff")]++;
        },
        "render" : function() {
          defaults["countFps"]();
          defaults[_0x4fb9("0x9d9")]();
          window[_0x4fb9("0xa00")](defaults[_0x4fb9("0xa01")]);
        },
        "init" : function() {
          this[_0x4fb9("0xa02")]();
          this[_0x4fb9("0xa03")]();
          this["preDrawPellet"]();
          this[_0x4fb9("0x568")]();
          window[_0x4fb9("0xa00")](defaults[_0x4fb9("0xa01")]);
        }
      };
      var closedFrames = {};
      var attributes = {};
      var obj = {
        "hk-feed" : {
          "label" : messages[_0x4fb9("0xa04")],
          "defaultKey" : "W",
          "keyDown" : function() {
            if (router) {
              router[_0x4fb9("0x5e6")]();
            }
          },
          "keyUp" : null,
          "type" : "normal"
        },
        "hk-macroFeed" : {
          "label" : messages[_0x4fb9("0xa05")],
          "defaultKey" : "E",
          "keyDown" : function() {
            if (router) {
              router[_0x4fb9("0xa06")](!![]);
            }
          },
          "keyUp" : function() {
            if (router) {
              router[_0x4fb9("0xa06")](![]);
            }
          },
          "type" : _0x4fb9("0xa07")
        },
        "hk-split" : {
          "label" : messages[_0x4fb9("0xa08")],
          "defaultKey" : "SPACE",
          "keyDown" : function() {
            if (router) {
              router[_0x4fb9("0x234")]();
            }
          },
          "keyUp" : null,
          "type" : _0x4fb9("0xa07")
        },
        "hk-doubleSplit" : {
          "label" : messages[_0x4fb9("0xa09")],
          "defaultKey" : "Q",
          "keyDown" : function() {
            if (router) {
              router[_0x4fb9("0xa0a")]();
            }
          },
          "keyUp" : null,
          "type" : _0x4fb9("0xa07")
        },
        "hk-popSplit" : {
          "label" : _0x4fb9("0xa0b"),
          "defaultKey" : _0x4fb9("0xa0c"),
          "keyDown" : function() {
            if (router) {
              router["popSplit"]();
            }
          },
          "keyUp" : null,
          "type" : "normal"
        },
        "hk-split16" : {
          "label" : messages[_0x4fb9("0xa0d")],
          "defaultKey" : "SHIFT",
          "keyDown" : function() {
            if (router) {
              router["split16"]();
            }
          },
          "keyUp" : null,
          "type" : _0x4fb9("0xa07")
        },
        "hk-pause" : {
          "label" : messages["hk-pause"],
          "defaultKey" : "R",
          "keyDown" : function() {
            if (router) {
              router[_0x4fb9("0xa0e")]();
            }
          },
          "keyUp" : null,
          "type" : "normal"
        },
        "hk-showTop5" : {
          "label" : messages[_0x4fb9("0xa0f")],
          "defaultKey" : "T",
          "keyDown" : function() {
            if (router) {
              router["setShowTop5"]();
            }
          },
          "keyUp" : null,
          "type" : _0x4fb9("0xa07")
        },
        "hk-showTime" : {
          "label" : messages["hk-showTime"],
          "defaultKey" : "ALT+T",
          "keyDown" : function() {
            if (router) {
              router["setShowTime"]();
            }
          },
          "keyUp" : null,
          "type" : _0x4fb9("0xa07")
        },
        "hk-showSplitRange" : {
          "label" : messages[_0x4fb9("0xa10")],
          "defaultKey" : "U",
          "keyDown" : function() {
            if (router) {
              router[_0x4fb9("0xa11")]();
            }
          },
          "keyUp" : null,
          "type" : _0x4fb9("0xa07")
        },
        "hk-showSplitInd" : {
          "label" : messages[_0x4fb9("0xa12")],
          "defaultKey" : "I",
          "keyDown" : function() {
            if (router) {
              router["setShowSplitInd"]();
            }
          },
          "keyUp" : null,
          "type" : _0x4fb9("0xa07")
        },
        "hk-showTeammatesInd" : {
          "label" : messages[_0x4fb9("0xa13")],
          "defaultKey" : _0x4fb9("0xa14"),
          "keyDown" : function() {
            if (router) {
              router["setShowTeammatesInd"]();
            }
          },
          "keyUp" : null,
          "type" : "normal"
        },
        "hk-showOppColors" : {
          "label" : messages[_0x4fb9("0xa15")],
          "defaultKey" : "O",
          "keyDown" : function() {
            if (router) {
              router[_0x4fb9("0xa16")]();
            }
          },
          "keyUp" : null,
          "type" : _0x4fb9("0xa07")
        },
        "hk-toggleSkins" : {
          "label" : messages["hk-toggleSkins"],
          "defaultKey" : "A",
          "keyDown" : function() {
            if (router) {
              router[_0x4fb9("0xa17")]();
            }
          },
          "keyUp" : null,
          "type" : _0x4fb9("0xa07")
        },
        "hk-transparentSkins" : {
          "label" : messages[_0x4fb9("0xa18")],
          "defaultKey" : "",
          "keyDown" : function() {
            if (router) {
              router[_0x4fb9("0xa19")]();
            }
          },
          "keyUp" : null,
          "type" : _0x4fb9("0xa07")
        },
        "hk-showSkins" : {
          "label" : messages[_0x4fb9("0xa1a")],
          "defaultKey" : "S",
          "keyDown" : function() {
            if (router) {
              router[_0x4fb9("0xa1b")]();
            }
          },
          "keyUp" : null,
          "type" : _0x4fb9("0xa07")
        },
        "hk-showStats" : {
          "label" : messages[_0x4fb9("0xa1c")],
          "defaultKey" : _0x4fb9("0xa1d"),
          "keyDown" : function() {
            if (router) {
              router[_0x4fb9("0xa1e")]();
            }
          },
          "keyUp" : null,
          "type" : _0x4fb9("0xa07")
        },
        "hk-toggleCells" : {
          "label" : messages[_0x4fb9("0xa1f")],
          "defaultKey" : "D",
          "keyDown" : function() {
            if (router) {
              router[_0x4fb9("0xa20")]();
            }
          },
          "keyUp" : null,
          "type" : "normal"
        },
        "hk-showFood" : {
          "label" : messages[_0x4fb9("0xa21")],
          "defaultKey" : "F",
          "keyDown" : function() {
            if (router) {
              router["setShowFood"]();
            }
          },
          "keyUp" : null,
          "type" : "normal"
        },
        "hk-showGrid" : {
          "label" : messages[_0x4fb9("0xa22")],
          "defaultKey" : "G",
          "keyDown" : function() {
            if (router) {
              router["setShowGrid"]();
            }
          },
          "keyUp" : null,
          "type" : _0x4fb9("0xa07")
        },
        "hk-showMiniMapGuides" : {
          "label" : messages[_0x4fb9("0xa23")],
          "defaultKey" : _0x4fb9("0xa24"),
          "keyDown" : function() {
            if (router) {
              router[_0x4fb9("0xa25")]();
            }
          },
          "keyUp" : null,
          "type" : _0x4fb9("0xa07")
        },
        "hk-hideChat" : {
          "label" : messages[_0x4fb9("0xa26")],
          "defaultKey" : "H",
          "keyDown" : function() {
            if (router) {
              router[_0x4fb9("0x669")]();
            }
          },
          "keyUp" : null,
          "type" : "normal"
        },
        "hk-showHUD" : {
          "label" : messages["hk-showHUD"],
          "defaultKey" : "ALT+H",
          "keyDown" : function() {
            if (router) {
              router[_0x4fb9("0xa27")]();
            }
          },
          "keyUp" : null,
          "type" : _0x4fb9("0xa07")
        },
        "hk-copyLb" : {
          "label" : messages[_0x4fb9("0xa28")],
          "defaultKey" : "L",
          "keyDown" : function() {
            if (router) {
              router[_0x4fb9("0xa29")]();
            }
          },
          "keyUp" : null,
          "type" : _0x4fb9("0xa07")
        },
        "hk-showLb" : {
          "label" : messages[_0x4fb9("0xa2a")],
          "defaultKey" : _0x4fb9("0xa2b"),
          "keyDown" : function() {
            if (router) {
              router["setShowLb"]();
            }
          },
          "keyUp" : null,
          "type" : _0x4fb9("0xa07")
        },
        "hk-toggleAutoZoom" : {
          "label" : messages[_0x4fb9("0xa2c")],
          "defaultKey" : "",
          "keyDown" : function() {
            if (router) {
              router[_0x4fb9("0xa2d")]();
            }
          },
          "keyUp" : null,
          "type" : _0x4fb9("0xa07")
        },
        "hk-resetZoom" : {
          "label" : messages[_0x4fb9("0xa2e")],
          "defaultKey" : "Z",
          "keyDown" : function() {
            if (router) {
              router[_0x4fb9("0xa2f")](!![]);
            }
          },
          "keyUp" : function() {
            if (router) {
              router["resetZoom"](![]);
            }
          },
          "type" : _0x4fb9("0xa07")
        },
        "hk-toggleDeath" : {
          "label" : messages["hk-toggleDeath"],
          "defaultKey" : "X",
          "keyDown" : function() {
            if (router) {
              router[_0x4fb9("0xa30")]();
            }
          },
          "keyUp" : null,
          "type" : _0x4fb9("0xa07")
        },
        "hk-clearChat" : {
          "label" : messages[_0x4fb9("0xa31")],
          "defaultKey" : "C",
          "keyDown" : function() {
            if (router) {
              router[_0x4fb9("0xa32")](!![]);
            }
          },
          "keyUp" : function() {
            if (router) {
              router[_0x4fb9("0xa32")](![]);
            }
          },
          "type" : _0x4fb9("0xa07")
        },
        "hk-showBgSectors" : {
          "label" : messages[_0x4fb9("0xa33")],
          "defaultKey" : "B",
          "keyDown" : function() {
            if (router) {
              router[_0x4fb9("0xa34")]();
            }
          },
          "keyUp" : null,
          "type" : _0x4fb9("0xa07")
        },
        "hk-hideBots" : {
          "label" : messages[_0x4fb9("0xa35")],
          "defaultKey" : "ALT+B",
          "keyDown" : function() {
            if (router) {
              router[_0x4fb9("0xa36")]();
            }
          },
          "keyUp" : null,
          "type" : _0x4fb9("0xa07")
        },
        "hk-showNames" : {
          "label" : messages["hk-showNames"],
          "defaultKey" : "N",
          "keyDown" : function() {
            if (router) {
              router[_0x4fb9("0xa37")]();
            }
          },
          "keyUp" : null,
          "type" : _0x4fb9("0xa07")
        },
        "hk-hideTeammatesNames" : {
          "label" : messages[_0x4fb9("0xa38")],
          "defaultKey" : "",
          "keyDown" : function() {
            if (router) {
              router[_0x4fb9("0xa39")]();
            }
          },
          "keyUp" : null,
          "type" : "normal"
        },
        "hk-showMass" : {
          "label" : messages[_0x4fb9("0xa3a")],
          "defaultKey" : "M",
          "keyDown" : function() {
            if (router) {
              router[_0x4fb9("0xa3b")]();
            }
          },
          "keyUp" : null,
          "type" : _0x4fb9("0xa07")
        },
        "hk-showMiniMap" : {
          "label" : messages[_0x4fb9("0xa3c")],
          "defaultKey" : _0x4fb9("0xa3d"),
          "keyDown" : function() {
            if (router) {
              router["setShowMiniMap"]();
            }
          },
          "keyUp" : null,
          "type" : _0x4fb9("0xa07")
        },
        "hk-chatMessage" : {
          "label" : messages[_0x4fb9("0xa3e")],
          "defaultKey" : _0x4fb9("0xa3f"),
          "keyDown" : function() {
            if (router) {
              router[_0x4fb9("0xa40")]();
            }
          },
          "keyUp" : null,
          "type" : _0x4fb9("0x22f")
        },
        "hk-quickResp" : {
          "label" : messages[_0x4fb9("0xa41")],
          "defaultKey" : "TILDE",
          "keyDown" : function() {
            if (router) {
              router[_0x4fb9("0x70d")]();
            }
          },
          "keyUp" : null,
          "type" : _0x4fb9("0xa07")
        },
        "hk-autoResp" : {
          "label" : messages[_0x4fb9("0xa42")],
          "defaultKey" : "",
          "keyDown" : function() {
            if (router) {
              router[_0x4fb9("0xa43")]();
            }
          },
          "keyUp" : null,
          "type" : _0x4fb9("0xa07")
        },
        "hk-zoom1" : {
          "label" : messages[_0x4fb9("0xa44")] + " 1",
          "defaultKey" : _0x4fb9("0xa45"),
          "keyDown" : function() {
            if (router) {
              router[_0x4fb9("0x9d3")](.5);
            }
          },
          "keyUp" : null,
          "type" : _0x4fb9("0xa07")
        },
        "hk-zoom2" : {
          "label" : messages[_0x4fb9("0xa44")] + " 2",
          "defaultKey" : _0x4fb9("0xa46"),
          "keyDown" : function() {
            if (router) {
              router[_0x4fb9("0x9d3")](.25);
            }
          },
          "keyUp" : null,
          "type" : _0x4fb9("0xa07")
        },
        "hk-zoom3" : {
          "label" : messages[_0x4fb9("0xa44")] + " 3",
          "defaultKey" : _0x4fb9("0xa47"),
          "keyDown" : function() {
            if (router) {
              router[_0x4fb9("0x9d3")](.125);
            }
          },
          "keyUp" : null,
          "type" : _0x4fb9("0xa07")
        },
        "hk-zoom4" : {
          "label" : messages[_0x4fb9("0xa44")] + " 4",
          "defaultKey" : _0x4fb9("0xa48"),
          "keyDown" : function() {
            if (router) {
              router[_0x4fb9("0x9d3")](.075);
            }
          },
          "keyUp" : null,
          "type" : _0x4fb9("0xa07")
        },
        "hk-zoom5" : {
          "label" : messages[_0x4fb9("0xa44")] + " 5",
          "defaultKey" : _0x4fb9("0xa49"),
          "keyDown" : function() {
            if (router) {
              router[_0x4fb9("0x9d3")](.05);
            }
          },
          "keyUp" : null,
          "type" : _0x4fb9("0xa07")
        },
        "hk-switchServerMode" : {
          "label" : messages[_0x4fb9("0xa4a")],
          "defaultKey" : "=",
          "keyDown" : function() {
            if (router) {
              router[_0x4fb9("0xa4b")]();
            }
          },
          "keyUp" : null,
          "type" : _0x4fb9("0xa07")
        },
        "hk-showTargeting" : {
          "label" : messages[_0x4fb9("0xa4c")],
          "defaultKey" : "",
          "keyDown" : function() {
            if (router) {
              router[_0x4fb9("0xa4d")]();
            }
          },
          "keyUp" : null,
          "type" : "normal"
        },
        "hk-setTargeting" : {
          "label" : messages["hk-setTargeting"],
          "defaultKey" : "",
          "keyDown" : function() {
            if (router) {
              router["setTargeting"]();
            }
          },
          "keyUp" : null,
          "type" : "normal"
        },
        "hk-cancelTargeting" : {
          "label" : messages["hk-cancelTargeting"],
          "defaultKey" : "",
          "keyDown" : function() {
            if (router) {
              router[_0x4fb9("0x861")]();
            }
          },
          "keyUp" : null,
          "type" : _0x4fb9("0xa07")
        },
        "hk-changeTarget" : {
          "label" : messages[_0x4fb9("0xa4e")],
          "defaultKey" : "",
          "keyDown" : function() {
            if (router) {
              router[_0x4fb9("0x7b5")]();
            }
          },
          "keyUp" : null,
          "type" : _0x4fb9("0xa07")
        },
        "hk-privateMiniMap" : {
          "label" : messages[_0x4fb9("0xa4f")],
          "defaultKey" : "",
          "keyDown" : function() {
            if (router) {
              router[_0x4fb9("0x7b3")]();
            }
          },
          "keyUp" : null,
          "type" : _0x4fb9("0xa07")
        },
        "hk-showQuest" : {
          "label" : messages[_0x4fb9("0xa50")],
          "defaultKey" : "",
          "keyDown" : function() {
            if (router) {
              router[_0x4fb9("0xa51")]();
            }
          },
          "keyUp" : null,
          "type" : _0x4fb9("0xa07")
        },
        "hk-comm1" : {
          "label" : store[_0x4fb9("0x427")],
          "defaultKey" : "1",
          "keyDown" : function() {
            if (router) {
              router["sendCommand"](1);
            }
          },
          "keyUp" : null,
          "type" : _0x4fb9("0xa52")
        },
        "hk-comm2" : {
          "label" : store["comm2"],
          "defaultKey" : "2",
          "keyDown" : function() {
            if (router) {
              router[_0x4fb9("0xa53")](2);
            }
          },
          "keyUp" : null,
          "type" : _0x4fb9("0xa52")
        },
        "hk-comm3" : {
          "label" : store[_0x4fb9("0x429")],
          "defaultKey" : "3",
          "keyDown" : function() {
            if (router) {
              router[_0x4fb9("0xa53")](3);
            }
          },
          "keyUp" : null,
          "type" : _0x4fb9("0xa52")
        },
        "hk-comm4" : {
          "label" : store["comm4"],
          "defaultKey" : "4",
          "keyDown" : function() {
            if (router) {
              router[_0x4fb9("0xa53")](4);
            }
          },
          "keyUp" : null,
          "type" : _0x4fb9("0xa52")
        },
        "hk-comm5" : {
          "label" : store[_0x4fb9("0x42b")],
          "defaultKey" : "5",
          "keyDown" : function() {
            if (router) {
              router["sendCommand"](5);
            }
          },
          "keyUp" : null,
          "type" : _0x4fb9("0xa52")
        },
        "hk-comm6" : {
          "label" : store[_0x4fb9("0x42c")],
          "defaultKey" : "6",
          "keyDown" : function() {
            if (router) {
              router[_0x4fb9("0xa53")](6);
            }
          },
          "keyUp" : null,
          "type" : _0x4fb9("0xa52")
        },
        "hk-comm7" : {
          "label" : store[_0x4fb9("0x42d")],
          "defaultKey" : "7",
          "keyDown" : function() {
            if (router) {
              router[_0x4fb9("0xa53")](7);
            }
          },
          "keyUp" : null,
          "type" : _0x4fb9("0xa52")
        },
        "hk-comm8" : {
          "label" : store[_0x4fb9("0x42e")],
          "defaultKey" : "8",
          "keyDown" : function() {
            if (router) {
              router["sendCommand"](8);
            }
          },
          "keyUp" : null,
          "type" : "command"
        },
        "hk-comm9" : {
          "label" : store[_0x4fb9("0xa54")],
          "defaultKey" : "9",
          "keyDown" : function() {
            if (router) {
              router["sendCommand"](9);
            }
          },
          "keyUp" : null,
          "type" : _0x4fb9("0xa52")
        },
        "hk-comm0" : {
          "label" : store[_0x4fb9("0xa55")],
          "defaultKey" : "0",
          "keyDown" : function() {
            if (router) {
              router[_0x4fb9("0xa53")](0);
            }
          },
          "keyUp" : null,
          "type" : _0x4fb9("0xa52")
        },
        "hk-comm10" : {
          "label" : store[_0x4fb9("0x42f")],
          "defaultKey" : _0x4fb9("0xa56"),
          "keyDown" : function() {
            if (router) {
              router[_0x4fb9("0xa53")](10);
            }
          },
          "keyUp" : null,
          "type" : "command"
        },
        "hk-comm11" : {
          "label" : store[_0x4fb9("0x430")],
          "defaultKey" : _0x4fb9("0xa57"),
          "keyDown" : function() {
            if (router) {
              router[_0x4fb9("0xa53")](11);
            }
          },
          "keyUp" : null,
          "type" : "command"
        },
        "hk-comm12" : {
          "label" : store[_0x4fb9("0x431")],
          "defaultKey" : "UP",
          "keyDown" : function() {
            if (router) {
              router[_0x4fb9("0xa53")](12);
            }
          },
          "keyUp" : null,
          "type" : _0x4fb9("0xa52")
        },
        "hk-comm13" : {
          "label" : store["comm13"],
          "defaultKey" : "RIGHT",
          "keyDown" : function() {
            if (router) {
              router[_0x4fb9("0xa53")](13);
            }
          },
          "keyUp" : null,
          "type" : _0x4fb9("0xa52")
        },
        "hk-comm14" : {
          "label" : store[_0x4fb9("0x433")],
          "defaultKey" : "DOWN",
          "keyDown" : function() {
            if (router) {
              router["sendCommand"](14);
            }
          },
          "keyUp" : null,
          "type" : _0x4fb9("0xa52")
        }
      };
      var callbacks = {
        "lastPressedKey" : "",
        "lastKeyId" : "",
        "defaultMessageKey" : _0x4fb9("0xa3f"),
        "inputClassName" : "custom-key-in form-control input-sm",
        "loadDefaultHotkeys" : function() {
          attributes = {};
          var name;
          for (name in obj) {
            if (obj[_0x4fb9("0x122")](name)) {
              attributes[obj[name]["defaultKey"]] = name;
            }
          }
          attributes[_0x4fb9("0xa58")] = this[_0x4fb9("0xa59")];
        },
        "loadHotkeys" : function() {
          if (window["localStorage"]["getItem"](_0x4fb9("0xa5a")) !== null) {
            attributes = JSON[_0x4fb9("0x680")](window["localStorage"][_0x4fb9("0x49f")]("ogarioHotkeys"));
          } else {
            this[_0x4fb9("0xa5b")]();
          }
          if (window[_0x4fb9("0x208")][_0x4fb9("0x49f")](_0x4fb9("0xa5c")) !== null) {
            store = JSON[_0x4fb9("0x680")](window[_0x4fb9("0x208")]["getItem"]("ogarioCommands"));
          }
        },
        "saveHotkeys" : function() {
          window["localStorage"][_0x4fb9("0x67c")]("ogarioHotkeys", JSON[_0x4fb9("0x20a")](attributes));
          this[_0x4fb9("0xa5d")]();
        },
        "saveCommands" : function() {
          $("#hotkeys .command-in")[_0x4fb9("0xa5e")](function() {
            var doc = $(this);
            var key = doc[_0x4fb9("0x695")]("id");
            if (store[_0x4fb9("0x122")](key)) {
              store[key] = doc[_0x4fb9("0x4ac")]();
            }
          });
          window[_0x4fb9("0x208")][_0x4fb9("0x67c")](_0x4fb9("0xa5c"), JSON[_0x4fb9("0x20a")](store));
        },
        "resetHotkeys" : function() {
          this[_0x4fb9("0xa5b")]();
          $("#hotkeys-cfg .custom-key-in")[_0x4fb9("0xa5e")](function() {
            var id = $(this)[_0x4fb9("0x695")]("id");
            if (obj[id]) {
              $(this)[_0x4fb9("0x4ac")](obj[id]["defaultKey"]);
            }
          });
        },
        "setHotkeysMenu" : function() {
          var _0x323410 = this;
          $("body")[_0x4fb9("0x4a6")]('<div id="hotkeys"><div id="hotkeys-menu"><button id="reset-hotkeys" class="btn btn-primary">' + messages[_0x4fb9("0x74b")] + _0x4fb9("0xa5f") + messages["saveSett"] + '</button> <button id="close-hotkeys" class="btn btn-danger">' + messages[_0x4fb9("0x171")] + _0x4fb9("0xa60") + messages["hk-inst-assign"] + _0x4fb9("0xa61") + messages[_0x4fb9("0xa62")] + "</li><li>" + messages[_0x4fb9("0xa63")] + "</li></ul></div></div>");
          var key;
          for (key in obj) {
            if (obj["hasOwnProperty"](key)) {
              var property = obj[key];
              var token = "";
              var attribute;
              for (attribute in attributes) {
                if (attributes["hasOwnProperty"](attribute) && attributes[attribute] === key) {
                  token = attribute;
                  break;
                }
              }
              if (key === _0x4fb9("0xa4a") && router && !router[_0x4fb9("0x87f")]) {
                continue;
              }
              if (property["type"] === _0x4fb9("0xa52")) {
                var name = key[_0x4fb9("0x86")](_0x4fb9("0xa64"), "");
                $(_0x4fb9("0xa65"))[_0x4fb9("0x4a6")](_0x4fb9("0xa66") + name + _0x4fb9("0xa67") + store[name] + _0x4fb9("0xa68") + property[_0x4fb9("0xa69")] + _0x4fb9("0xa6a") + key + _0x4fb9("0xa6b") + token + '" /></div></div>');
              } else {
                $("#hotkeys-cfg")[_0x4fb9("0x4a6")]('<div class="row"><div class="key-label">' + property[_0x4fb9("0xa6c")] + '</div><div class="default-key">' + property[_0x4fb9("0xa69")] + '</div><div class="custom-key"><input id="' + key + _0x4fb9("0xa6b") + token + '" /></div></div>');
              }
            }
          }
          $(document)["on"]("click", _0x4fb9("0xa6d"), function(canCreateDiscussions) {
            canCreateDiscussions[_0x4fb9("0x54e")]();
            _0x323410[_0x4fb9("0xa6e")]();
          });
          $(document)["on"](_0x4fb9("0x54c"), _0x4fb9("0xa6f"), function(canCreateDiscussions) {
            canCreateDiscussions[_0x4fb9("0x54e")]();
            _0x323410[_0x4fb9("0xa70")]();
            $("#hotkeys")[_0x4fb9("0x679")](500);
          });
          $(document)["on"](_0x4fb9("0x54c"), _0x4fb9("0xa71"), function(result) {
            result["preventDefault"]();
            $("#hotkeys")[_0x4fb9("0x679")](500);
          });
          $(document)["on"](_0x4fb9("0x54c"), _0x4fb9("0xa72"), function(canCreateDiscussions) {
            $(_0x4fb9("0xa73"))[_0x4fb9("0x677")](500);
            $(_0x4fb9("0xa65"))[_0x4fb9("0x7a3")](_0x4fb9("0x24c"));
            gotoNewOfflinePage();
          });
          $(_0x4fb9("0xa65"))[_0x4fb9("0x7a3")]();
          if (_0x21f577) {
            _0x21f577[_0x4fb9("0x518")]();
          }
        },
        "getPressedKey" : function(canCreateDiscussions) {
          var type = "";
          var key = "";
          if (canCreateDiscussions[_0x4fb9("0xa74")] || canCreateDiscussions[_0x4fb9("0x9c8")] == 17) {
            type = "CTRL";
          } else {
            if (canCreateDiscussions[_0x4fb9("0xa75")] || canCreateDiscussions[_0x4fb9("0x9c8")] == 18) {
              type = _0x4fb9("0xa76");
            }
          }
          switch(canCreateDiscussions[_0x4fb9("0x9c8")]) {
            case 9:
              key = _0x4fb9("0xa77");
              break;
            case 13:
              key = _0x4fb9("0xa3f");
              break;
            case 16:
              key = "SHIFT";
              break;
            case 17:
              break;
            case 18:
              break;
            case 27:
              key = _0x4fb9("0xa78");
              break;
            case 32:
              key = "SPACE";
              break;
            case 37:
              key = _0x4fb9("0xa57");
              break;
            case 38:
              key = "UP";
              break;
            case 39:
              key = _0x4fb9("0xa79");
              break;
            case 40:
              key = _0x4fb9("0xa7a");
              break;
            case 46:
              key = _0x4fb9("0xa7b");
              break;
            case 61:
              key = "=";
              break;
            case 187:
              key = "=";
              break;
            case 192:
              key = _0x4fb9("0xa7c");
              break;
            default:
              key = String["fromCharCode"](canCreateDiscussions[_0x4fb9("0x9c8")]);
              break;
          }
          if (type !== "") {
            if (key !== "") {
              return type + "+" + key;
            }
            return type;
          }
          return key;
        },
        "deleteHotkey" : function(objectIdField, domRootID) {
          delete attributes[objectIdField];
          $("#" + domRootID)["val"]("");
        },
        "setDefaultHotkey" : function(t) {
          var name = ![];
          if (obj[t] && !attributes[_0x4fb9("0x122")](obj[t][_0x4fb9("0xa69")])) {
            name = obj[t][_0x4fb9("0xa69")];
            attributes[name] = t;
            return name;
          }
          return name;
        },
        "setHotkey" : function(i, m) {
          if (!m || this["lastPressedKey"] === i && this[_0x4fb9("0xa7d")] === m) {
            return;
          }
          var artistTrack = $("#" + m)[_0x4fb9("0x4ac")]();
          this[_0x4fb9("0xa7e")](artistTrack, m);
          if (i === "DEL") {
            return;
          }
          if (attributes[i] && attributes[i] !== m) {
            var key = attributes[i];
            var attr = this[_0x4fb9("0xa7f")](key);
            if (attr) {
              attributes[attr] = key;
              $("#" + key)["val"](attr);
            } else {
              this[_0x4fb9("0xa7e")](i, key);
            }
          }
          attributes[i] = m;
          $("#" + m)[_0x4fb9("0x4ac")](i);
          if (m === "hk-chatMessage") {
            attributes[_0x4fb9("0xa58")] = i;
          }
          this[_0x4fb9("0xa80")] = i;
          this[_0x4fb9("0xa7d")] = m;
        },
        "init" : function() {
          this["loadHotkeys"]();
          this["setHotkeysMenu"]();
        }
      };
      document[_0x4fb9("0xa81")] = function(result) {
        var key = callbacks[_0x4fb9("0xa82")](result);
        if (result["target"][_0x4fb9("0xa83")] === _0x4fb9("0xa84") && result[_0x4fb9("0xa85")][_0x4fb9("0x653")] !== callbacks[_0x4fb9("0xa86")] && key !== attributes["spec-messageKey"]) {
          return;
        }
        if (key !== "" && !closedFrames[key]) {
          closedFrames[key] = !![];
          if (key === _0x4fb9("0xa78")) {
            result[_0x4fb9("0x54e")]();
            if (router) {
              router[_0x4fb9("0x81b")]();
            }
            return;
          }
          if (result[_0x4fb9("0xa85")][_0x4fb9("0x653")] === callbacks[_0x4fb9("0xa86")]) {
            result["preventDefault"]();
            callbacks[_0x4fb9("0xa87")](key, result["target"]["id"]);
            return;
          }
          if (attributes[key]) {
            result[_0x4fb9("0x54e")]();
            var currentItem = attributes[key];
            if (currentItem !== "" && obj[currentItem]) {
              if (obj[currentItem]["keyDown"]) {
                obj[currentItem][_0x4fb9("0xa88")]();
              }
            }
          }
        }
      };
      document[_0x4fb9("0x9cf")] = function(obj) {
        var key = callbacks["getPressedKey"](obj);
        if (key !== "") {
          if (attributes[key]) {
            var currentItem = attributes[key];
            if (currentItem !== "" && obj[currentItem]) {
              if (obj[currentItem][_0x4fb9("0xa89")]) {
                obj[currentItem][_0x4fb9("0xa89")]();
              }
            }
          }
          closedFrames[key] = ![];
        }
      };
      window[_0x4fb9("0xa8a")] = function(canCreateDiscussions) {
        if (!$(_0x4fb9("0x676"))["is"](_0x4fb9("0x616"))) {
          if (canCreateDiscussions[_0x4fb9("0xa8b")] == 2) {
            canCreateDiscussions[_0x4fb9("0x54e")]();
            if (router) {
              router[_0x4fb9("0xa53")](10);
            }
          } else {
            if (props["mouseSplit"]) {
              if (canCreateDiscussions[_0x4fb9("0xa8b")] == 1 && !props["mouseInvert"] || canCreateDiscussions[_0x4fb9("0xa8b")] == 3 && props[_0x4fb9("0x72d")]) {
                canCreateDiscussions[_0x4fb9("0x54e")]();
                if (router) {
                  router[_0x4fb9("0x234")]();
                }
              }
            }
            if (props[_0x4fb9("0xa8c")]) {
              if (canCreateDiscussions[_0x4fb9("0xa8b")] == 3 && !props["mouseInvert"] || canCreateDiscussions[_0x4fb9("0xa8b")] == 1 && props[_0x4fb9("0x72d")]) {
                canCreateDiscussions[_0x4fb9("0x54e")]();
                if (router) {
                  router["macroFeed"](!![]);
                }
              }
            }
          }
        }
      };
      window["onmouseup"] = function(canCreateDiscussions) {
        if (props[_0x4fb9("0xa8c")]) {
          if (canCreateDiscussions[_0x4fb9("0xa8b")] == 3 && !props[_0x4fb9("0x72d")] || canCreateDiscussions[_0x4fb9("0xa8b")] == 1 && props[_0x4fb9("0x72d")]) {
            if (router) {
              router["macroFeed"](![]);
            }
          }
        }
      };
      window[_0x4fb9("0xa8d")] = function(canCreateDiscussions) {
        if (style[_0x4fb9("0x617")]) {
          return messages[_0x4fb9("0xa8e")];
        } else {
          return;
        }
      };
      (function() {
        style = data;
        markReadIf();
        getKeysbyLocation();
        initSortMenu();
        updateDevicesAfterDelay();
        link();
        window["master"][_0x4fb9("0xac9")]();
        _0x21f577[_0x4fb9("0x24f")]();
        router[_0x4fb9("0x24f")]();
        router[_0x4fb9("0xaca")]();
        router["connect"]();
        callbacks[_0x4fb9("0x24f")]();
        data["init"]();
        defaults[_0x4fb9("0x24f")]();
        window[_0x4fb9("0x87b")][_0x4fb9("0x24f")]();
        Layer();
      })();
    })(window, window["ogario"], window[_0x4fb9("0xacb")]);
  }, {
    "buffer" : 3,
    "lz4" : 18
  }]
}, {}, [47]);
