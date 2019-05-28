// WARNING! This file contains some subset of JS that is not supported by type inference.
// You can try checking 'Transpile to ES5' checkbox if you want the types to be inferred
'use strict';
var _0x4ca2 = [
    "normal",
    "hk-split",
    "hk-doubleSplit",
    "doubleSplit",
    "Popsplit",
    "ALT+Q",
    "hk-split16",
    "setPause",
    "hk-showTop5",
    "hk-showSplitRange",
    "setShowSplitRange",
    "hk-showSplitInd",
    "hk-showTeammatesInd",
    "ALT+I",
    "hk-showOppColors",
    "setShowOppColors",
    "toggleSkins",
    "hk-transparentSkins",
    "setTransparentSkins",
    "hk-showSkins",
    "setShowSkins",
    "hk-showStats",
    "ALT+S",
    "setShowStats",
    "hk-toggleCells",
    "toggleCells",
    "hk-showFood",
    "hk-showGrid",
    "hk-showMiniMapGuides",
    "ALT+G",
    "setShowMiniMapGuides",
    "hk-hideChat",
    "setShowHUD",
    "hk-copyLb",
    "copyLb",
    "hk-showLb",
    "ALT+L",
    "hk-toggleAutoZoom",
    "toggleAutoZoom",
    "hk-resetZoom",
    "resetZoom",
    "toggleDeath",
    "hk-clearChat",
    "displayChatHistory",
    "hk-showBgSectors",
    "setShowBgSectors",
    "hk-hideBots",
    "setHideSmallBots",
    "setShowNames",
    "hk-hideTeammatesNames",
    "setHideTeammatesNames",
    "hk-showMass",
    "setShowMass",
    "hk-showMiniMap",
    "ALT+M",
    "hk-chatMessage",
    "ENTER",
    "enterChatMessage",
    "hk-quickResp",
    "hk-autoResp",
    "toggleAutoResp",
    "hk-zoomLevel",
    "ALT+1",
    "ALT+2",
    "ALT+3",
    "ALT+4",
    "ALT+5",
    "hk-switchServerMode",
    "switchServerMode",
    "hk-showTargeting",
    "setShowTargeting",
    "hk-changeTarget",
    "hk-privateMiniMap",
    "hk-showQuest",
    "setShowQuest",
    "command",
    "sendCommand",
    "comm9",
    "comm0",
    "MOUSE WHEEL",
    "LEFT",
    "spec-messageKey",
    "defaultMessageKey",
    "ogarioHotkeys",
    "loadDefaultHotkeys",
    "ogarioCommands",
    "saveCommands",
    "each",
    '</button> <button id="save-hotkeys" class="btn btn-success">',
    '</button></div><div id="hotkeys-cfg"></div><div id="hotkeys-inst"><ul><li>',
    "</li><li>",
    "hk-inst-delete",
    "hk-inst-keys",
    "hk-",
    "#hotkeys-cfg",
    '<div class="row"><div class="key-label"><input id="',
    '" class="command-in form-control input-sm" value="',
    '" maxlength="80" /></div><div class="default-key">',
    "defaultKey",
    '</div><div class="custom-key"><input id="',
    '" class="custom-key-in form-control input-sm" value="',
    "label",
    "#reset-hotkeys",
    "resetHotkeys",
    "#save-hotkeys",
    "saveHotkeys",
    "#close-hotkeys",
    ".hotkeys-link",
    "#hotkeys",
    "ctrlKey",
    "altKey",
    "ALT",
    "TAB",
    "ESC",
    "RIGHT",
    "DOWN",
    "DEL",
    "TILDE",
    "lastKeyId",
    "deleteHotkey",
    "setDefaultHotkey",
    "lastPressedKey",
    "onkeydown",
    "getPressedKey",
    "tagName",
    "INPUT",
    "target",
    "inputClassName",
    "setHotkey",
    "keyDown",
    "keyUp",
    "onmousedown",
    "which",
    "mouseFeed",
    "onbeforeunload",
    "exit",
    "history",
    "replaceState",
    "pathname",
    "/ogario",
    "hash",
    "NREUM",
    "ajax",
    "https://agar.io/agario.core.js?v=1",
    "$1 var ogario=$2.ogario,gameCtx=null;",
    "$1 if(!ogario.play&&ogario.targeting){$2=ogario.targetX;$3=ogario.targetY;} if(ogario.pause){$2=ogario.innerW/2*ogario.canvasScale; $3=ogario.innerH/2*ogario.canvasScale;}$4",
    "$1 ogario.setMapCoords($3,$5,$7,$9,$2,$8);",
    "if($1<ogario.zoomResetValue){",
    "if(!ogario.autoZoom){$3=ogario.zoomValue;} $1$2 (ogario.zoomSpeedValue||0.9) $5 ogario.zoomValue=$1;",
    "$1 if(!ogario.autoZoom){$3=ogario.zoomValue;}else{$2}$5",
    "ogario.playerCellsMass=[]; $1$2; ogario.playerCellsMass.push($2)$3 ogario.playerMass=$5; ogario.calculateMass();",
    "$1$2",
    "$3$4",
    "$1 if(ogario.gameMode!==':teams'){break;} $2",
    "$1$13",
    "$2=1; $3 if(!ogario.vanillaSkins&&ogario.customSkins){$6=0;}else{$5}else",
    "if(0){",
    "/ogario.animation;$2",
    "/ogario.animation,$2",
    "$1$2 ogario.animation $5$6$7",
    "var cellX=+(+$7),cellY=+(+$8),cellSize=+(+$9),isFood=!$3,isVirus=false,isPlayerCell=false,skipCell=false,nick=null,color=null,skin=null; if(isFood){if(!ogario.showFood||ogario.autoHideFoodOnZoom&&ogario.viewScale<0.2){break;}if(ogario.autoHideFood&&!ogario.foodIsHidden&&ogario.playerMass>1000){ogario.showFood=false;ogario.foodIsHidden=true;break;}if(!ogario.rainbowFood){ogario.foodCache.push({x:cellX,y:cellY,size:cellSize});break;}gameCtx.fillStyle=ogario.rgb2Hex($13&255,$14&255,$15&255);} if(ogario.hideSmallBots&&cellSize<=36){skipCell=true;break;} gameCtx.beginPath();gameCtx.arc(cellX,cellY,cellSize,0,2*Math.PI,false);gameCtx.closePath(); if(isFood){gameCtx.fill();break;} ogario.globalAlpha=gameCtx.globalAlpha; if(gameCtx.lineJoin==='miter'){isVirus=true;if(ogario.virColors&&ogario.play){gameCtx.fillStyle=ogario.setVirusColor(cellSize);gameCtx.strokeStyle=ogario.setVirusStrokeColor(cellSize);}else{gameCtx.fillStyle=ogario.virusColor;gameCtx.strokeStyle=ogario.virusStrokeColor;}if(ogario.transparentViruses){gameCtx.globalAlpha*=ogario.virusAlpha;}if(ogario.virusesRange&&ogario.play){ogario.virusesCache.push({x:cellX,y:cellY,size:cellSize});}gameCtx.fill();gameCtx.globalAlpha=ogario.globalAlpha;gameCtx.lineWidth=ogario.virusStrokeSize;gameCtx.stroke();break;} if((a[$4+ogario.nameMemOffset+4>>0]&1)==0|0){nick=ogario.getString($4+ogario.nameMemOffset+5);}else{nick=ogario.getString(c[$4+ogario.nameMemOffset+12>>2]|0);} color=ogario.rgb2Hex($13&255|0,$14&255|0,$15&255|0); gameCtx.fillStyle=color; if(nick&&color){if(ogario.showCustomSkins&&ogario.customSkins){skin=ogario.getCustomSkin(nick,color);}} if(ogario.play){var idA=c[$4+ogario.idOffset>>2]|0;var idB=c[ogario.idMemOffset]|0;var idC=c[ogario.idMemOffset+1]|0;loop:do{if((idB|0)!=(idC|0)){while(true){if((c[idB>>2]|0)==(idA|0)){break loop;}idB=idB+4|0;if((idB|0)==(idC|0)){idB=idC;break;}}}}while(false);isPlayerCell=(idB|0)!=(idC|0); if(isPlayerCell){ogario.playerCells.push({x:cellX,y:cellY,size:cellSize});ogario.playerColor=color;} if((ogario.oppColors&&!ogario.oppRings)||(ogario.myCustomColor&&isPlayerCell)){gameCtx.fillStyle=ogario.setOppColor(cellSize,isPlayerCell);} if(!isPlayerCell&&(ogario.splitRange||ogario.oppRings)){ogario.cacheCells(cellX,cellY,cellSize);}} if(ogario.transparentCells){gameCtx.globalAlpha*=ogario.cellsAlpha;}  gameCtx.fill(); gameCtx.globalAlpha=ogario.globalAlpha; if(((ogario.transparentSkins||(ogario.play&&ogario.oppColors))&&!(isPlayerCell&&!ogario.myTransparentSkin))||isPlayerCell&&ogario.myTransparentSkin){gameCtx.globalAlpha*=ogario.skinsAlpha;} if(skin){gameCtx.drawImage(skin,cellX-cellSize,cellY-cellSize,2*cellSize,2*cellSize);} break;$1",
    "$1$2&&ogario.vanillaSkins&&!skin)",
    "$1 $2=-1; $4",
    "$1=-1; $3",
    "$1 if($3==-1){return;} $2",
    "async",
    "appendChild",
    "GET",
    "specialOn",
    "resize",
    "customDraw",
    "drawCellInfo",
    "getCustomSkin",
    "setVirusStrokeColor",
    "setCursorPosition",
    "showStatsDialog",
    "_showStatsDialog",
    "_onConnect",
    "_onPlayerSpawn",
    "_onPlayerDeath",
    "_onAgarioCoreLoaded",
    "onAgarioCoreLoaded",
    "setNames",
    "_wasInitialized",
    "wasInitialized",
    "onPlayerBanned",
    "menuHeight",
    "translate(-50%, 0%) scale(",
    "innerW",
    "innerH",
    "sendFbToken",
    "sendGplusToken",
    "lz4",
    "onresize",
    "getClientVersion",
    "getDefaultSettings",
    "jQuery",
    "call",
    "exports",
    "function",
    "length",
    "byteLength",
    "toByteArray",
    "fromByteArray",
    "undefined",
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    "charCodeAt",
    "Invalid string. Length must be a multiple of 4",
    "push",
    "base64-js",
    "ieee754",
    "Buffer",
    "INSPECT_MAX_BYTES",
    "kMaxLength",
    "TYPED_ARRAY_SUPPORT",
    "error",
    "This browser lacks typed array (Uint8Array) support which is required by ",
    "`buffer` v5.x. Use `buffer` v4.x if you require old browser support.",
    "prototype",
    "foo",
    "Invalid typed array length",
    "__proto__",
    "If encoding is specified then the first argument must be a string",
    "species",
    "defineProperty",
    "poolSize",
    "number",
    '"value" argument must not be a number',
    "from",
    '"size" argument must be a number',
    '"size" argument must not be negative',
    "string",
    "fill",
    "allocUnsafe",
    "utf8",
    "isEncoding",
    '"encoding" must be a valid string encoding',
    "write",
    "slice",
    "'length' is out of bounds",
    "copy",
    "type",
    "isArray",
    "data",
    "First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.",
    "Attempt to allocate Buffer larger than maximum ",
    "size: 0x",
    "toString",
    " bytes",
    "alloc",
    "_isBuffer",
    "compare",
    "isBuffer",
    "Arguments must be Buffers",
    "hex",
    "utf-8",
    "ascii",
    "latin1",
    "binary",
    "base64",
    "ucs2",
    "ucs-2",
    "utf16le",
    "utf-16le",
    "concat",
    '"list" argument must be an Array of Buffers',
    "Unknown encoding: ",
    "swap16",
    "Buffer size must be a multiple of 16-bits",
    "swap64",
    "Buffer size must be a multiple of 64-bits",
    "apply",
    "equals",
    "Argument must be a Buffer",
    "join",
    " ... ",
    "<Buffer ",
    "out of range index",
    "min",
    "indexOf",
    "lastIndexOf",
    "val must be string, number or Buffer",
    "readUInt16BE",
    "includes",
    "Invalid hex string",
    "substr",
    "Buffer.write(string, encoding, offset[, length]) is no longer supported",
    "Attempt to write outside buffer bounds",
    "toLowerCase",
    "_arr",
    "fromCharCode",
    "subarray",
    "offset is not uint",
    "Trying to access beyond buffer length",
    "readUIntBE",
    "readUInt8",
    "readUInt16LE",
    "readUInt32LE",
    "readIntLE",
    "pow",
    "readIntBE",
    "readInt8",
    "readInt16BE",
    "readInt32LE",
    "read",
    "readFloatBE",
    "readDoubleLE",
    "readDoubleBE",
    '"buffer" argument must be a Buffer instance',
    '"value" argument is out of bounds',
    "writeUIntLE",
    "writeUIntBE",
    "writeUInt8",
    "writeUInt16LE",
    "writeUInt16BE",
    "writeUInt32BE",
    "writeIntLE",
    "writeIntBE",
    "writeInt8",
    "writeInt16LE",
    "writeInt16BE",
    "writeInt32LE",
    "Index out of range",
    "writeFloatBE",
    "writeDoubleLE",
    "writeDoubleBE",
    "sourceStart out of bounds",
    "sourceEnd out of bounds",
    "encoding must be a string",
    "Out of range index",
    "trim",
    "replace",
    "isView",
    "[object Array]",
    "isBoolean",
    "isNull",
    "isNumber",
    "isString",
    "symbol",
    "isSymbol",
    "isUndefined",
    "[object RegExp]",
    "object",
    "[object Date]",
    "isDate",
    "isError",
    "isFunction",
    "boolean",
    "../../is-buffer/index.js",
    "UINT32",
    "UINT64",
    "./lib/uint64",
    "_high",
    "remainder",
    "_low",
    "fromBits",
    "fromNumber",
    "toNumber",
    "add",
    "subtract",
    "clone",
    "negate",
    "multiply",
    "shiftLeft",
    "greaterThan",
    "lessThan",
    "and",
    "not",
    "xor",
    "shiftRight",
    "shiftr",
    "shiftl",
    "rotateLeft",
    "rotl",
    "rotateRight",
    "rotr",
    "amd",
    "_a32",
    "_a48",
    "_a16",
    "_a00",
    "fromString",
    "div",
    "division by zero",
    "_events",
    "_maxListeners",
    "EventEmitter",
    "n must be a positive number",
    "emit",
    'Uncaught, unspecified "error" event. (',
    "context",
    "addListener",
    "listener must be a function",
    "newListener",
    "listener",
    "warned",
    "(node) warning: possible EventEmitter memory ",
    "leak detected. %d listeners added. ",
    "Use emitter.setMaxListeners() to increase limit.",
    "trace",
    "once",
    "removeListener",
    "splice",
    "removeAllListeners",
    "listeners",
    "listenerCount",
    "abs",
    "floor",
    "LN2",
    "create",
    "super_",
    "constructor",
    "readFloatLE",
    "imul",
    "uncompress",
    "compress",
    "compressHC",
    "compressDependent",
    "input too large",
    "compressBound",
    "output too small: ",
    " < ",
    "end",
    "LZ4_uncompress",
    "buffer",
    "stream",
    "Transform",
    "util",
    "utils",
    "bindings",
    "./binding",
    "STATES",
    "SIZES",
    "options",
    "binding",
    "useJS",
    "pos",
    "descriptor",
    "descriptorStart",
    "streamSize",
    "dictId",
    "skippableSize",
    "state",
    "MAGIC",
    "_main",
    "emit_Error",
    "check_Size",
    "Unexpected end of LZ4 stream",
    "read_MagicNumber",
    "SKIP_SIZE",
    "Invalid magic number: ",
    "toUpperCase",
    "Invalid version: ",
    " != ",
    "blockMaxSizes",
    "Invalid block max size: ",
    "read_Size",
    "DICTID",
    "read_DictId",
    "DESCRIPTOR_CHECKSUM",
    "descriptorChecksum",
    "Invalid stream descriptor checksum",
    "DATABLOCK_SIZE",
    "read_DataBlockSize",
    "EOS",
    "dataBlockSize",
    "read_DataBlockData",
    "dataBlock",
    "DATABLOCK_CHECKSUM",
    "blockChecksum",
    "Invalid block checksum",
    "DATABLOCK_UNCOMPRESS",
    "uncompress_DataBlock",
    "blockMaxSize",
    "Invalid data block: ",
    "streamChecksum",
    "currentStreamChecksum",
    "read_EOS",
    "_flush",
    "read_SkippableSize",
    "read_Descriptor",
    "SIZE",
    "read_DescriptorChecksum",
    "DATABLOCK_DATA",
    "read_DataBlockChecksum",
    "./encoder_stream",
    "inherits",
    "hasOwnProperty",
    "highCompression",
    "blockIndependence",
    "Invalid blockMaxSize: ",
    "first",
    "checksum",
    "headerSize",
    "DESCRIPTOR",
    "dict",
    "header",
    "MAGICNUMBER",
    "flg",
    "size",
    "update_Checksum",
    "CHECKSUM_UPDATE",
    "compress_DataBlock",
    "DATABLOCK_COMPRESS",
    "writeUInt32LE",
    "_transform",
    "CHECKSUM",
    "./static",
    "version",
    "0.5.1",
    "createDecoderStream",
    "./decoder_stream",
    "decode",
    "createEncoderStream",
    "encode",
    "./encoder",
    "decodeBlock",
    "encodeBound",
    "encodeBlockHC",
    "MAGICNUMBER_BUFFER",
    "EOS_BUFFER",
    "VERSION",
    "MAGICNUMBER_SKIPPABLE",
    ".lz4",
    "xxhashjs",
    "digest",
    "v0.",
    "nextTick",
    '"callback" argument must be a function',
    "_process",
    "clearTimeout has not been defined",
    "run",
    "fun",
    "array",
    "title",
    "browser",
    "env",
    "argv",
    "versions",
    "off",
    "prependOnceListener",
    "process.binding is not supported",
    "cwd",
    "chdir",
    "process.chdir is not supported",
    "umask",
    "./lib/_stream_duplex.js",
    "process-nextick-args",
    "core-util-is",
    "./_stream_readable",
    "writable",
    "allowHalfOpen",
    "ended",
    "destroyed",
    "_readableState",
    "_writableState",
    "_destroy",
    "./_stream_transform",
    "ReadableState",
    "events",
    "./internal/streams/stream",
    "safe-buffer",
    "Uint8Array",
    "debuglog",
    "./internal/streams/BufferList",
    "./internal/streams/destroy",
    "close",
    "pause",
    "prependListener",
    "./_stream_duplex",
    "objectMode",
    "highWaterMark",
    "flowing",
    "endEmitted",
    "reading",
    "sync",
    "needReadable",
    "emittedReadable",
    "readableListening",
    "resumeScheduled",
    "defaultEncoding",
    "readingMore",
    "decoder",
    "encoding",
    "StringDecoder",
    "readable",
    "_read",
    "destroy",
    "getPrototypeOf",
    "stream.unshift() after end event",
    "stream.push() after EOF",
    "unshift",
    "Invalid non-string/buffer chunk",
    "string_decoder/",
    "read: emitReadable",
    "length less than watermark",
    "do read",
    "emit readable",
    "maybeReadMore read 0",
    "pipe",
    "pipesCount",
    "pipes",
    "pipe count=%d opts=%j",
    "stdout",
    "stderr",
    "unpipe",
    "hasUnpiped",
    "onend",
    "drain",
    "cleanup",
    "finish",
    "needDrain",
    "ondata",
    "false write response, pause",
    "awaitDrain",
    "onerror",
    "onfinish",
    "pipeOnDrain",
    "resume",
    "resume read 0",
    "call pause flowing=%j",
    "flow",
    "wrapped data",
    "bind",
    "wrapped _read",
    "_fromList",
    "shift",
    "head",
    "next",
    '"endReadable()" called on non-empty stream',
    "afterTransform",
    "needTransform",
    "transforming",
    "writecb",
    "writeencoding",
    "write callback called multiple times",
    "writechunk",
    "_transformState",
    "transform",
    "flush",
    "prefinish",
    "_transform() is not implemented",
    "_write",
    "Calling transform done when still transforming",
    "chunk",
    "callback",
    "entry",
    "v0.9.",
    "util-deprecate",
    "writableObjectMode",
    "finalCalled",
    "finished",
    "decodeStrings",
    "bufferProcessing",
    "onwrite",
    "bufferedRequest",
    "lastBufferedRequest",
    "prefinished",
    "errorEmitted",
    "bufferedRequestCount",
    "getBuffer",
    "_writableState.buffer is deprecated. Use _writableState.getBuffer ",
    "instead.",
    "DEP0003",
    "hasInstance",
    "writev",
    "_writev",
    "final",
    "May not write null values to stream",
    "pendingcb",
    "cork",
    "corked",
    "uncork",
    "writing",
    "writelen",
    "corkedRequestsFree",
    "isBuf",
    "allBuffers",
    "_write() is not implemented",
    "ending",
    "_final",
    "_undestroy",
    "undestroy",
    "Cannot call a class as a function",
    "tail",
    "clear",
    "PassThrough",
    "./lib/_stream_readable.js",
    "Stream",
    "Readable",
    "Duplex",
    "./lib/_stream_transform.js",
    "./lib/_stream_passthrough.js",
    "./readable",
    "./lib/_stream_writable.js",
    "Argument must not be a number",
    "Argument must be a number",
    "allocUnsafeSlow",
    "SlowBuffer",
    "readable-stream/readable.js",
    "Writable",
    "readable-stream/writable.js",
    "readable-stream/duplex.js",
    "readable-stream/transform.js",
    "readable-stream/passthrough.js",
    "_isStdio",
    "raw",
    "text",
    "fillLast",
    "lastNeed",
    "lastTotal",
    "lastChar",
    "repeat",
    "noDeprecation",
    "throwDeprecation",
    "traceDeprecation",
    "warn",
    "localStorage",
    "true",
    "stringify",
    "[Circular]",
    "deprecate",
    "process",
    "NODE_DEBUG",
    "test",
    "pid",
    "format",
    "depth",
    "_extend",
    "showHidden",
    "colors",
    "stylize",
    "inspect",
    "yellow",
    "bold",
    "green",
    "magenta",
    "red",
    "styles",
    "forEach",
    "customInspect",
    "getOwnPropertyNames",
    "description",
    "name",
    "[Function",
    " [Function",
    "toUTCString",
    "regexp",
    "[Object]",
    "map",
    "seen",
    "pop",
    "null",
    "match",
    "get",
    "[Getter/Setter]",
    "special",
    "[Getter]",
    "set",
    "[Setter]",
    "value",
    "split",
    "   ",
    "reduce",
    "isNullOrUndefined",
    "isRegExp",
    "isObject",
    "[object Error]",
    "./support/isBuffer",
    "Jan",
    "Feb",
    "Mar",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Oct",
    "Nov",
    "Dec",
    "getSeconds",
    "log",
    "cuint",
    "2246822519",
    "668265263",
    "374761393",
    "update",
    "seed",
    "total_len",
    "init",
    "memsize",
    "memory",
    "xxh_update",
    "XXH",
    "Start",
    "Ustawienia",
    "Przywr\u00f3c ustawienia domy\u015blne",
    "Animacja",
    "Zoom",
    "Odrodzenie",
    "Skiny",
    "Pokarm",
    "Przezroczysto\u015b\u0107 / kolory",
    "Siatka / sektory",
    "Minimapa",
    "Wspomagacze",
    "Sterowanie myszk\u0105",
    "HUD",
    "Czat",
    "Dodatkowe",
    "Wy\u0142\u0105cz skiny",
    "Wy\u0142\u0105cz kolory",
    "Pomi\u0144 statystyki po \u015bmierci",
    "Poka\u017c zadanie (quest)",
    "Auto zoom",
    "Op\u00f3\u017anienie animacji",
    "Szybko\u015b\u0107 zoomu",
    "Szybkie odrodzenie (klawisz)",
    "Autoukrywanie nazw i masy",
    "Autoukrywanie nazw",
    "Autoukrywanie masy",
    "Autoukrywanie pokarmu (masa)",
    "Autoukrywanie pokarmu (zoom)",
    "Zoptymalizowane nazwy",
    "Ukryj w\u0142asn\u0105 nazw\u0119",
    "Ukryj nazwy graczy teamu",
    "Zoptymalizowana masa (+/-2%)",
    "Skr\u00f3cona masa (k)",
    "Licznik strza\u0142\u00f3w (wirusy)",
    "Ukryj w\u0142asn\u0105 mas\u0119",
    "Podstawowe skiny",
    "M\u00f3j przezroczysty skin",
    "M\u00f3j w\u0142asny kolor",
    "Przezroczyste kulki",
    "Przezroczyste wirusy",
    "Siatka",
    "Granice mapy",
    "Duchy kulek",
    "Poka\u017c minimap\u0119",
    "Poka\u017c siatk\u0119 minimapy",
    "Poka\u017c duchy kulek na minimapie",
    "Jednokolorowi gracze",
    "Kolorowy pokarm",
    "Ringi przeciwnik\u00f3w",
    "Kolory wirus\u00f3w",
    "Zasi\u0119g podzia\u0142u",
    "Zasi\u0119g wirus\u00f3w",
    "Obw\u00f3dki nazw i masy",
    "Obw\u00f3dki nazw",
    "Obw\u00f3dki masy",
    "Wska\u017aniki graczy teamu",
    "LPM - Split myszk\u0105",
    "PPM - Feed myszk\u0105",
    "Odwr\u00f3\u0107 klawisze myszki",
    "Wy\u0142\u0105cz czat",
    "Ukryj czat",
    "Emotikony",
    "Czatbox zamiast wyskakuj\u0105cych wiadomo\u015bci",
    "D\u017awi\u0119k powiadomienia o wiadomo\u015bci",
    "D\u017awi\u0119k powiadomienia o komendzie",
    "Poka\u017c top 5 teamu",
    "Poka\u017c aktualny czas",
    'Nag\u0142\u00f3wek "Topka"',
    "Wy\u015brodkowana topka",
    "Statystyki na g\u00f3rze",
    "Poka\u017c statystyki",
    "Statystyki: Masa",
    "Statystyki: STE",
    "Statystyki: n/16",
    "Statystyki: FPS",
    "Blokuj popupy (reklamy/sklep/zadanie)",
    "Aby ustawi\u0107 skr\u00f3t klawiszowy kliknij na polu skr\u00f3tu i naci\u015bnij wybrany klawisz.",
    "Aby usun\u0105\u0107 skr\u00f3t klawiszowy kliknij na polu skr\u00f3tu i naci\u015bnij klawisz DELETE.",
    "Mo\u017cliwe kombinacje skr\u00f3t\u00f3w klawiszowych z u\u017cyciem klawiszy CTRL oraz ALT.",
    "Feed",
    "Podzia\u0142",
    "Podw\u00f3jny podzia\u0142",
    "Podzia\u0142 na 16",
    "Pauza kulki",
    "Poka\u017c/ukryj top 5 teamu",
    "Poka\u017c/ukryj aktualny czas",
    "Poka\u017c/ukryj zasi\u0119g podzia\u0142u",
    "Poka\u017c/ukryj zasi\u0119g podzia\u0142u z ringami",
    "Poka\u017c/ukryj wska\u017aniki graczy teamu",
    "Poka\u017c/ukryj kolory przeciwnik\u00f3w",
    "Prze\u0142\u0105cz skiny (w\u0142asne/standardowe)",
    "Poka\u017c/ukryj skiny",
    "W\u0142\u0105cz/wy\u0142\u0105cz przezroczyste skiny",
    "Poka\u017c/ukryj statystyki gry",
    "Prze\u0142\u0105cz kulk\u0119 (najmniejsza/najwi\u0119ksza)",
    "Poka\u017c/ukryj prowadnice na minimapie",
    "Poka\u017c/ukryj czat",
    "Poka\u017c/ukryj HUD",
    "Kopiuj topk\u0119",
    "Poka\u017c/ukryj topk\u0119",
    "Reset zoomu",
    "Zoom - poziom",
    "Prze\u0142\u0105cz miejsce \u015bmierci",
    "Poka\u017c histori\u0119 czatu / Czy\u015b\u0107 czat",
    "Poka\u017c/ukryj nazwy",
    "Poka\u017c/ukryj nazwy graczy teamu",
    "Poka\u017c/ukryj minimap\u0119",
    "Napisz wiadomo\u015b\u0107 na czacie",
    "Szybkie odrodzenie (respawn)",
    "W\u0142\u0105cz/wy\u0142acz auto odrodzenie",
    "Prze\u0142\u0105cz serwer [publiczny/prywatny]",
    "Poka\u017c/ukryj panel namierzania",
    "Zatrzymaj namierzanie",
    "Zmie\u0144 cel",
    "Poka\u017c cel na minimapie",
    "Poka\u017c/ukryj zadanie",
    "Komendy",
    "Pomocy na %currentSector%!",
    "Wr\u00f3g na %currentSector%!",
    "Zabij pomocnika!",
    "Strzel z wirusa!",
    "Zjedz wirusa!",
    "Zjeba\u0142em, wybacz.",
    "Ja pierdol\u0119...",
    "Kurwa ma\u0107!",
    "Lewo!",
    "G\u00f3ra!",
    "Prawo!",
    "D\u00f3\u0142!",
    "Zapisz komendy",
    "Przywr\u00f3c ustawienia domy\u015blne wygl\u0105du",
    "Podstawowy",
    "Motyw",
    "Ciemny motyw",
    "Kolor g\u0142\u00f3wny",
    "Czcionka sektor\u00f3w",
    "Nazwy",
    "Masa",
    "Wirusy",
    "Czcionka masy",
    "Skala masy wirus\u00f3w",
    "Skala obw\u00f3dek tekstu",
    "Grubo\u015b\u0107 siatki sektor\u00f3w",
    "Rozmiar czcionki sektor\u00f3w",
    "Przezroczysto\u015b\u0107 kulek",
    "Przezroczysto\u015b\u0107 skin\u00f3w",
    "Przezroczysto\u015b\u0107 wirus\u00f3w",
    "Grubo\u015b\u0107 obw\u00f3dki wirus\u00f3w",
    "Wska\u017anik gracza",
    "Bezpieczna strefa",
    "Menu",
    "Motyw menu",
    "Panel",
    "Panel (2)",
    "Tekst panelu",
    "Przycisk #1",
    "Przycisk #2",
    "Przycisk #2 (2)",
    "Przycisk #3",
    "Przycisk #4",
    "Przycisk #4 (2)",
    "T\u0142o",
    "Statystyki",
    "Topka - ja",
    "Topka - team",
    "Czcionka HUD",
    "Skala HUD",
    "Czas wiadomo\u015bci",
    "Nick wiadomo\u015bci",
    "T\u0142o komendy",
    "Tekst komendy",
    "Nick komendy",
    "T\u0142o czatboxu",
    "Skala czatu",
    "Sektory",
    "Aktualny sektor",
    "Prowadnice",
    "Obw\u00f3dka nicku",
    "Obw\u00f3dka mojej kulki",
    "Miejsce \u015bmierci",
    "Czcionka minimapy",
    "Czcionka nicku",
    "Szeroko\u015b\u0107 minimapy",
    "Rozmiar nicku",
    "Grubo\u015b\u0107 obw\u00f3dki nicku",
    "Wielko\u015b\u0107 mojej kulki",
    "Grubo\u015b\u0107 obw\u00f3dki mojej kulki",
    "Wielko\u015b\u0107 graczy",
    "Przezroczysto\u015b\u0107 duch\u00f3w kulek",
    "Grafika t\u0142a",
    "Grafika kursora",
    "Czat zosta\u0142 w\u0142\u0105czony!",
    "Czat zosta\u0142 ukryty!",
    "Skiny zosta\u0142y ukryte!",
    "Auto odrodzenie zosta\u0142o w\u0142\u0105czone!",
    "Auto odrodzenie zosta\u0142o wy\u0142\u0105czone!",
    "Auto zoom zosta\u0142 w\u0142\u0105czony!",
    "Brak celu",
    "Nie \u017cyje",
    "Masa razem",
    "Eksport / import ustawie\u0144",
    "Eksportuj ustawienia",
    'Aby zaimportowa\u0107 wybrane ustawienia wklej poni\u017cej wyeksportowany wcze\u015bniej kod i naci\u015bnij przycisk "Importuj ustawienia".',
    "Profil",
    "Profile",
    "Dodaj skiny",
    "Dzi\u0119ki Awesome!",
    "Zapisz ustawienia",
    "Resetuj ustawienia",
    "Zamknij",
    "Napisz wiadomo\u015b\u0107",
    "Aktywne party",
    "Brak aktywnych party ;(",
    "Playlista",
    "PAUZA!",
    "Odwied\u017a",
    "UWAGA! Popupy zosta\u0142y zablokowane w ustawieniach.",
    "Odblokuj tymczasowo",
    "Top",
    "Topka",
    "U\u017cytkownik",
    "U\u017cytkownik %user% zosta\u0142 wyciszony.",
    "Wy\u0142\u0105czono wyciszenie u\u017cytkownika %user%.",
    "Wycisz",
    "Wyciszeni u\u017cytkownicy",
    "Aktywni u\u017cytkownicy",
    "Brak",
    "Wr\u00f3\u0107",
    "Stw\u00f3rz party",
    "Do\u0142\u0105cz",
    "Zaloguj",
    "Wyloguj",
    "Zaloguj z Facebook",
    "Darmowe Monety",
    "Zadania",
    "Graj",
    "Graj jako go\u015b\u0107",
    "Sklep",
    "Obserwuj",
    "Home",
    "Settings",
    "Restore default settings",
    "Animation",
    "Respawn",
    "Names",
    "Skins",
    "Food",
    "Minimap",
    "Helpers",
    "Mouse control",
    "Chat",
    "Stats",
    "Extras",
    "No skins",
    "Show mass",
    "Show quest",
    "Animation delay",
    "Zoom speed",
    "Quick respawn (hotkey)",
    "Auto respawn",
    "Auto hide names and mass",
    "Auto hide names",
    "Auto hide mass",
    "Auto hide food (mass)",
    "Optimized names",
    "Hide my name",
    "Hide teammates names",
    "Optimized mass (+/-2%)",
    "Short mass (k)",
    "Virus shots",
    "Hide my mass",
    "Hide enemies mass",
    "Vanilla skins",
    "Custom skins",
    "My transparent skin",
    "My custom color",
    "Transparent cells",
    "Show background sectors",
    "Show map borders",
    "Ghost cells",
    "Show minimap",
    "Show minimap grid",
    "Show minimap guides",
    "Show ghost cells",
    "Optimized food",
    "Rainbow food",
    "Opponents colors",
    "Opponents rings",
    "Viruses colors",
    "Split range",
    "Names and mass stroke",
    "Mass stroke",
    "Teammates indicators",
    "LMB - Mouse split",
    "RMB - Mouse feed",
    "Invert mouse buttons",
    "Hide chat",
    "Sound notifications",
    "Emoticons",
    "Show videos on chat",
    "Chatbox instead of popups",
    "Message notification sound",
    "Command notification sound",
    "Show targeting",
    "Show leaderboard mass",
    '"Leaderboard" header',
    "Centered leaderboard",
    "Game stats at the top",
    "Show game stats",
    "Game stats: Mass",
    "Game stats: STE",
    "Game stats: n/16",
    "Game stats: FPS",
    "Block popups (ads/shop/quest)",
    "To assign a hotkey click on the input field and press your chosen key.",
    "To delete a hotkey click on the input field and press the DELETE key.",
    "Possible key combinations with the CTRL and ALT keys.",
    "Split",
    "Double split",
    "Split 16",
    "Cell pause",
    "Show/hide team top 5",
    "Show/hide current time",
    "Show/hide split range",
    "Show/hide opponents colors",
    "Show/hide skins",
    "Show/hide game stats",
    "Toggle own cells (smallest/biggest)",
    "Show/hide food",
    "Show/hide grid",
    "Show/hide chat",
    "Show/hide HUD",
    "Copy leaderboard",
    "Toggle auto zoom",
    "Reset zoom",
    "Toggle death location",
    "Show chat history / Clear chat",
    "Show/hide background sectors",
    "Show/hide small bots",
    "Show/hide teammates names",
    "Show/hide mass",
    "Enter chat message",
    "Quick respawn",
    "Toggle auto respawn",
    "Switch server [public/private]",
    "Start/stop targeting (following)",
    "Commands",
    "Feed me!",
    "Split into me!",
    "Need a teammate!",
    "Eat the virus!",
    "Let's bait!",
    "Fake tricksplit!",
    "Fuck!",
    "Tricksplit!",
    "Left!",
    "Up!",
    "Theme",
    "Restore theme default settings",
    "Theme preset",
    "Light theme",
    "Background",
    "Grid",
    "Sectors font",
    "Names stroke",
    "Virus",
    "Virus stroke",
    "Mass font",
    "Names scale",
    "Text stroke scale",
    "Food size",
    "Sectors grid width",
    "Sectors font size",
    "Cells transparency",
    "Virus transparency",
    "Names & mass transparency",
    "Virus stroke size",
    "Teammate indicator",
    "Cursor tracking",
    "Safe area",
    "Danger area",
    "Menu theme",
    "Main color",
    "Button text",
    "Panel text (2)",
    "Button #1",
    "Button #1 (2)",
    "Button #2 (2)",
    "Button #3",
    "Button #3 (2)",
    "Button #4",
    "Button #4 (2)",
    "Transparency",
    "Text",
    "Mass",
    "Leaderboard - me",
    "Leaderboard - teammate",
    "HUD font",
    "HUD scale",
    "Message time",
    "Message nick",
    "Command background",
    "Command time",
    "Command nick",
    "Chatbox color",
    "Chat scale",
    "Sectors",
    "Current sector",
    "Guides",
    "Nick",
    "Nick stroke",
    "My cell",
    "My cell stroke",
    "Teammates",
    "Death location",
    "Minimap font",
    "Nick font",
    "Minimap width",
    "Sectors transparency",
    "My cell size",
    "My cell stroke size",
    "Ghost cells transparency",
    "Graphics / cursors",
    "Custom background image",
    "Custom cursor image",
    "Chat is visible!",
    "Chat is hidden!",
    "Skins are visible!",
    "Skins are hidden!",
    "Small bots are visible!",
    "Small bots are hidden!",
    "Auto respawn is on!",
    "Auto respawn is off!",
    "Auto zoom is on!",
    "Auto zoom is off!",
    "Target not set",
    "Mass altogether",
    "Active players",
    "Total mass",
    "Export / import settings",
    "Import settings",
    'To import selected settings paste an exported code below and press the "Import settings" button.',
    "Add skins",
    "Thanks to Awesome!",
    "Saved!",
    "Reset to default",
    "Close",
    "Active parties",
    "No active parties ;(",
    "Playlist",
    "PAUSE!",
    "WARNING! Popups are blocked in the settings.",
    "Temporary unblock",
    "Score",
    "Leaderboard",
    "User %user% has been unmuted.",
    "Mute",
    "Muted users",
    "Active users",
    "Show active users",
    "None",
    "Sounds",
    "Daily Quest",
    "Shop",
    "navigator",
    "language",
    "comm1",
    "comm2",
    "comm3",
    "comm4",
    "comm5",
    "comm6",
    "comm7",
    "comm8",
    "comm10",
    "comm11",
    "comm12",
    "comm13",
    "comm14",
    "&amp;",
    "&lt;",
    "&gt;",
    "&quot;",
    "&#x2F;",
    "smile.svg",
    "wink.svg",
    "grin.svg",
    "xgrin.svg",
    "joy.svg",
    "cry.svg",
    "tongue.svg",
    "heart.svg",
    "astonished.svg",
    "sweat.svg",
    "neutral.svg",
    "expressionless.svg",
    "money.svg",
    "angel.svg",
    "devil.svg",
    "poo.svg",
    "clap.svg",
    "ok.svg",
    "thumbd.svg",
    "imgur.com",
    "https://imgur.com/",
    "https://i.imgur.com/xdmUp5N.png",
    "https?:\\/\\/\\w+\\.imgur\\.com\\/\\w{6,}\\.(?:%file_ext%)\\??\\d*",
    "put.re",
    "https?:\\/\\/\\w+\\.put\\.re\\/\\w{8,}\\.(?:%file_ext%)",
    "postimages.org",
    "https://postimages.org/",
    "OGARio v3",
    "#01d9cc",
    "#00243e",
    "#000000",
    "#ffffff",
    "#002f52",
    "#00b9e8",
    "#5000ff",
    "#bf00aa",
    "ubuntu-bold",
    "ogario-v3",
    "#8096a7",
    "#018cf6",
    "#0099c0",
    "#814ee3",
    "https://cdn.ogario.ovh/static/img/pattern.png",
    "rgba(0,0,0,0.4)",
    "https://cdn.ogario.ovh/static/img/cursors/cursor_02.cur",
    "OGARio v2",
    "#ff7800",
    "#111111",
    "#292929",
    "#666666",
    "#e16400",
    "rgba(255,120,0,0.9)",
    "OGARio LE",
    "#b5a642",
    "#998c36",
    "SniiKz's Style",
    "#fc0079",
    "#1d0526",
    "#65458f",
    "#3b0431",
    "#6b0036",
    "#4d0227",
    "#aa084e",
    "#80063b",
    "#1fe000",
    "#e8e8e8",
    "rgba(36,36,36,0.9)",
    "#ff00a8",
    "#4d4d4d",
    "#acba07",
    "https://cdn.ogario.ovh/static/img/cursors/cursor_01.cur",
    "HKG Style",
    "#651fff",
    "rgba(101,31,255,0.9)",
    "Agar.io Light",
    "#f2fbff",
    "#858a8c",
    "#ced6d9",
    "#33ff33",
    "#2de52d",
    "rgba(255,255,255,0.9)",
    "Agar.io Dark",
    "#999999",
    "#333333",
    "#8d5fe6",
    "#f300d8",
    "#df00c6",
    "#222222",
    "#bbbbbb",
    "#428bca",
    "#3071a9",
    "#5cb85c",
    "#449d44",
    "#f0ad4e",
    "#ec971f",
    "#d9534f",
    "#c9302c",
    "Agar.io",
    "#000a11",
    "Ubuntu",
    "ubuntu",
    "rgba(191,0,170,0.9)",
    "getItem",
    "ogarioThemeSettings",
    "location",
    "reload",
    "<style type='text/css'>",
    "appendTo",
    "html",
    "append",
    '<div class="preset-box"><span class="title-box">',
    '</span><div class="select-wrapper"><select id="',
    '" class="form-control"></select></div></div>',
    '<option value="',
    "</option>",
    "val",
    "change",
    '<div class="color-box"><span class="title-box">',
    '</span><div class="input-group ',
    '" id="',
    '" class="form-control" /><span class="input-group-addon"><i></i></span></div></div>',
    "colorpicker",
    "changeColor.colorpicker",
    "color",
    "-picker",
    "toHex",
    '-picker"><input type="text" value="',
    "rgba",
    "toRGB",
    "rgba(",
    '-value" class="value">',
    '</span></div><input id="',
    '" step="',
    '" value="',
    '"></div>',
    "-slider",
    "input",
    "-value",
    '<div class="input-box"><span class="title-box">',
    '</span><input id="',
    '" class="form-control" placeholder="',
    '" /></div>',
    "customCursor",
    '<div class="cursor-box"><a href="#" class="active"><img src="',
    '"></a></div>',
    '<div class="cursor-box"><a href="#"><img src="',
    "Weight",
    "Family",
    '<div class="font-box"><span class="title-box">',
    '<option value="ubuntu">Ubuntu</option><option value="ubuntu-bold">Ubuntu Bold</option>',
    '<option value="roboto">Roboto</option><option value="roboto-bold">Roboto Bold</option>',
    "setFont",
    "roboto",
    "Roboto",
    "oswald",
    "Oswald",
    "#theme",
    "basicTheming",
    '"></a></li><li class="theme-menu-tab"><a href="#theme-menu" class="ogicon-menu" data-toggle="tab-tooltip" title="',
    "menuTheming",
    '"></a></li><li class="theme-hud-tab"><a href="#theme-hud" class="ogicon-display" data-toggle="tab-tooltip" title="',
    '"></a></li><li class="theme-chat-tab"><a href="#theme-chat" class="ogicon-bubbles" data-toggle="tab-tooltip" title="',
    '"></a></li><li class="theme-images-tab"><a href="#theme-images" class="ogicon-compass" data-toggle="tab-tooltip" title="',
    "imagesTheming",
    "addPresetBox",
    "#theme-main",
    "themePreset",
    "preset",
    "changeThemePreset",
    "bgColor",
    "setBgColor",
    "addColorBox",
    "bordersColor",
    "gridColor",
    "sectorsColor",
    "namesStrokeColor",
    "massColor",
    "massStrokeColor",
    "virusColor",
    "virusStrokeColor",
    "setFoodColor",
    "teammatesIndColor",
    "cursorTrackingColor",
    "splitRangeColor",
    "safeAreaColor",
    "dangerAreaColor",
    "addFontBox",
    "massFont",
    "sectorsFont",
    "addSliderBox",
    "sectorsFontSize",
    "namesScale",
    "massScale",
    "virMassScale",
    "virusStrokeSize",
    "bordersWidth",
    "sectorsWidth",
    "cellsAlpha",
    "skinsAlpha",
    "virusAlpha",
    "#theme-menu",
    "menuPreset",
    "menuOpacity",
    "setMenuOpacity",
    "menuMainColor",
    "setMenuMainColor",
    "menuBtnTextColor",
    "setMenuButtons",
    "menuPanelColor",
    "setMenuPanelColor",
    "menuPanelColor2",
    "menuTextColor",
    "setMenuTextColor",
    "btn1Color",
    "btn1Color2",
    "btn2Color2",
    "btn3Color",
    "btn3Color2",
    "btn4Color",
    "btn4Color2",
    "addInputBox",
    "menuBg",
    "Image URL",
    "setMenuBg",
    "#theme-hud",
    "hudMainColor",
    "setHudColors",
    "addRgbaColorBox",
    "statsHudColor",
    "timeHudColor",
    "top5MassColor",
    "lbMeColor",
    "lbTeammateColor",
    "hudFont",
    "setHudFont",
    "setHudScale",
    "messageColor",
    "setChatColors",
    "#theme-chat",
    "messageTextColor",
    "messageTimeColor",
    "messageNickColor",
    "commandsColor",
    "commandsTextColor",
    "commandsTimeColor",
    "commandsNickColor",
    "chatBoxColor",
    "chatScale",
    "setChatScale",
    "#theme-minimap",
    "miniMapSectorsColor",
    "setMiniMapSectorsColor",
    "miniMapSectorColor",
    "miniMapNickColor",
    "miniMapNickStrokeColor",
    "miniMapMyCellColor",
    "miniMapMyCellStrokeColor",
    "miniMapTeammatesColor",
    "miniMapDeathLocationColor",
    "miniMapGuidesColor",
    "miniMapFont",
    "setMiniMapFont",
    "miniMapSectorsOpacity",
    "setMiniMapSectorsOpacity",
    "miniMapNickSize",
    "miniMapNickStrokeSize",
    "miniMapMyCellSize",
    "miniMapMyCellStrokeSize",
    "#theme-images",
    "customBackground",
    "setCustomBackground",
    "Cursor image URL",
    "https://cdn.ogario.ovh/static/img/cursors/cursor_",
    "addCursorBox",
    ".cur",
    "click",
    "#theme-images .cursor-box a",
    "preventDefault",
    "img",
    "src",
    "setCustomCursor",
    "#customCursor",
    "removeClass",
    "active",
    "addClass",
    '<button class="btn btn-block btn-success btn-save"">',
    "saveSett",
    "</button>",
    "#theme .btn-save",
    "saved",
    '<div class="restore-settings"><a href="#">',
    "restoreThemeSettings",
    "</a></div>",
    "#theme .restore-settings a",
    ".skin",
    "#color",
    "#theme .",
    "setValue",
    "select#",
    "changePreset",
    "namesFont",
    "body",
    "preDrawPellet",
    "preDrawIndicator",
    "css",
    "background-image",
    "url(",
    "none",
    "*{cursor:url(",
    "), auto !important}",
    "addCustomCSS",
    "cursorCSS",
    "setMenu",
    "::-moz-selection{background-color:",
    "!important}::selection{background-color:",
    "!important}.menu-main-color,#quick-menu a:hover,.quick,.quick:focus,.menu-tabs a:hover,.menu-tabs .active,.submenu-tabs a:hover,.submenu-tabs .active,#stats center,#exp-imp h1{color:",
    "}#exp-bar .progress-bar-striped,.quick:hover,.rangeslider__fill{background-color:",
    "}#main-menu,.agario-side-panel,#hotkeys,#exp-imp{border-color:",
    "}.ps-scrollbar-y{background-color:",
    "!important}",
    "menuMainColorCSS",
    "#main-menu,.agario-side-panel,#hotkeys,#exp-imp{background-color: ",
    "}label:hover,.agario-panel input,.agario-panel select,.agario-side-panel input,.agario-side-panel select,.input-group-addon,.nick .input-group-btn,.skin .input-group-btn,#stream-mode,#hide-url,.menu-tabs a:hover,.menu-tabs .active,.submenu-tabs,#exp-bar .progress,#quick-menu a:hover,.quick,.select-wrapper,#hotkeys-cfg div.row:hover,#hotkeys-cfg .command-in,#exp-imp-settings textarea,.restore-settings{background-color: ",
    "}.agario-panel h5,.agario-side-panel h5,#stats h2,.menu-tabs,.submenu-tabs,#skins a.default,#stats hr,#hotkeys-cfg div.row, #exp-imp h1{border-color: ",
    ".agario-panel,.agario-side-panel,.agario-panel input,.agario-panel select,.agario-side-panel input,.agario-side-panel select,.input-group-addon,.dark .yt-username,#stream-mode,#hide-url,.menu-tabs a,.submenu-tabs a,#skins a.default:hover,#quick-menu a,#prev-profile.default:hover,#next-profile.default:hover,#statsText,#hotkeys,#hotkeys-cfg .command-in,#exp-imp{color:",
    "}#skins a.default:hover{border-color:",
    "}::-webkit-input-placeholder{color:",
    "menuTextColor2",
    "!important}::-moz-placeholder{color:",
    "!important}#user-id-tag, #version-tag,#statsSubtext,#hotkeys-inst,#exp-imp textarea,.restore-settings a,.restore-settings a:hover{color:",
    "}#hotkeys-cfg .command-in,#theme .color-box{border-color:",
    "menuTextColorCSS",
    "a,a:hover{color:",
    "}.btn-primary{background-color:",
    "!important}.btn-primary:active,.btn-primary:disabled,.btn-primary:focus,.btn-primary:hover{background-color:",
    "!important}.btn-success{background-color:",
    "btn2Color",
    "!important}.btn-success:active,.btn-success:disabled,.btn-success:focus,.btn-success:hover{background-color:",
    "!important}.btn-warning:active,.btn-warning:disabled,.btn-warning:focus,.btn-warning:hover{background-color:",
    "!important}.btn-danger{background-color:",
    "!important}#hotkeys-cfg .custom-key-in{background-color:",
    ";border-color:",
    "menuButtonsCSS",
    "#menuBg",
    ".hud-main-color,#top5-hud a,#target-panel-hud a:hover,#target-panel-hud a.active,#message-menu a{color:",
    "}.hud,.hud-b,#chat-emoticons{background-color:",
    "hudColor",
    "}.hud,.hud-b,#top5-hud a:hover,#target-panel-hud a{color:",
    "hudTextColor",
    "}.time-hud-color{color:",
    "}.top5-mass-color{color:",
    "}#leaderboard-positions .me{color:",
    "}#leaderboard-positions .teammate{color:",
    "hudFontFamily",
    "hudFontWeight",
    "round",
    "hudScale",
    "font-size",
    "width",
    "#top5-hud",
    "top",
    "#top5-pos",
    "#time-hud",
    "#pause-hud",
    "#target-hud",
    "#message,#messages li,.toast-success{background-color:",
    "}#message,.message-text,.toast-success .message-text{color:",
    "}.message-nick,.mute-user,.mute-user:hover,.toast-success .message-nick,.toast .mute-user,.toast .mute-user:hover{color:",
    "}.message-time{color:",
    "}.command-text,.toast-warning .command-text{color:",
    "}.command-nick,.toast-warning .command-nick,.toast-warning .mute-user,.toast-warning .mute-user:hover{color:",
    "}.command-time{color:",
    "}#chat-box{background-color:",
    "chatCSS",
    "#message-box, #messages, #toast-container, #chat-box",
    "#message-box",
    "#chat-box",
    "height",
    "padding-left",
    "#toast-container{width:",
    "px;font-size:",
    "px}",
    "chatScaleCSS",
    "setMiniMapWidth",
    "miniMapWidth",
    "miniMapTop",
    "resetMiniMapSectors",
    "opacity",
    "setFonts",
    "setChat",
    "setMiniMap",
    "I <3 OGARio",
    "mainColor",
    "https://cdn.ogario.ovh/static/sounds/notification_01.mp3",
    "https://cdn.ogario.ovh/static/sounds/notification_02.mp3",
    "nick",
    "skinID",
    "lastX",
    "lastY",
    "mass",
    "clanTag",
    "alive",
    "updateTime",
    "pi2",
    "customColor",
    "drawPosition",
    "miniMapNickFontWeight",
    "px ",
    "textAlign",
    "center",
    "lineWidth",
    "miniMapTeammatesSize",
    "fillStyle",
    "fillText",
    "beginPath",
    "arc",
    "oneColoredTeammates",
    "OGARio by szymy v4",
    "v4 (4.0.0 b38)",
    "wss://srv.ogario.eu",
    ":ffa",
    "now",
    "playerX",
    "mapOffsetX",
    "playerY",
    "mapOffsetY",
    "core",
    "eject",
    "feedInterval",
    "feed",
    "customSkins",
    "vannillaSkins",
    "vanillaSkins",
    "selectBiggestCell",
    "showTop5",
    "show",
    "showTargeting",
    "setTargetingHUD",
    "showTime",
    "displayTime",
    "hide",
    "splitRange",
    "showSplitInd",
    "oppRings",
    "teammatesInd",
    "oppColors",
    "noSkins",
    "setSkins",
    "showCustomSkins",
    "displayChatInfo",
    "showSkinsMsg",
    "transparentSkins",
    "#stats-hud",
    "showFood",
    "#overlays-hud",
    "showGrid",
    "gameMode",
    ":teams",
    "#leaderboard-hud",
    "toggle",
    "showBgSectors",
    "hideSmallBots",
    "hideSmallBotsMsg",
    "hideTeammatesNames",
    "showMass",
    "showMiniMap",
    "#minimap-hud",
    "showQuest",
    "setQuest",
    "#quest-hud",
    "autoZoom",
    "autoZoomMsg",
    "zoomValue",
    "zoomResetValue",
    "lastDeath",
    "retryResp",
    ".btn-play-guest",
    ":visible",
    "play",
    "tryResp",
    "hideMenu",
    "setAutoResp",
    "stop",
    "autoResp",
    "#skipStats",
    "prop",
    "checked",
    "skipStats",
    "autoRespMsg",
    "<input>",
    "select",
    "execCommand",
    "remove",
    "resetTargetPosition",
    "centeredLb",
    "normalLb",
    "#leaderboard-hud h4",
    "leaderboard",
    "ogario.ovh",
    "fpsAtTop",
    "hud-top",
    "hud-bottom",
    "protocolMode",
    "#block-warn",
    "blockPopups",
    "#openfl-content, #openfl-overlay",
    "block-popups",
    "#freeCoins, #gifting, #openShopBtn, #dailyQuests",
    "disabled",
    "#openfl-overlay.disabler",
    "unblockPopups",
    "leaderboardPositionsHUD",
    "innerHTML",
    "showStats",
    "playerMass",
    "playerScore",
    "score",
    "showStatsSTE",
    "STE",
    " | STE: ",
    "showStatsN16",
    "playerSplitCells",
    " | ",
    "/16",
    "showStatsFPS",
    "FPS: ",
    "fps",
    "statsHUD",
    "displayStats",
    "toLocaleString",
    "timeHUD",
    "textContent",
    "parties",
    '<li><a href="https://agar.io/#',
    "\" onclick=\"$('#party-token').val('",
    "'); $('#join-party-btn-2').click();\">https://agar.io/#",
    "</a></li>",
    "activeParties",
    "className",
    "no-parties",
    "top5",
    "top5limit",
    "</span>",
    '<a href="#" data-user-id="',
    '" class="set-target ogicon-target"></a> ',
    '<span class="hud-main-color">[',
    "calculateMapSector",
    "]</span>",
    "]</span> ",
    "escapeHTML",
    "</li>",
    "shortMassFormat",
    "clearChatHistory",
    "chatHistory",
    "#messages",
    '<li><span class="message-nick">',
    ': </span><span class="message-text">',
    "</span></li>",
    "#chat-box .message",
    "info",
    "hideChat",
    "disableChat",
    "setHideChat",
    "hideChatMsg",
    "showChatBox",
    "#message",
    "focus",
    "blur",
    "#main-panel",
    "showNickDialog",
    "closeOfferwall",
    "#videoContainer",
    "closeVideoContainer",
    "#overlays",
    "fadeIn",
    ".ogario-menu",
    "fadeOut",
    "%file_ext%",
    "ogarioSettings",
    "setItem",
    "#export-",
    "#export-settings",
    "#import-settings",
    "parse",
    "#import-",
    "removeItem",
    "showMiniMapGrid",
    "chatSounds",
    "setChatSoundsBtn",
    "setNormalLb",
    "setFpsAtTop",
    "setBlockPopups",
    "saveSettings",
    "ogarioPlayerProfiles",
    "Profile #",
    "ogarioSelectedProfile",
    "selectedProfile",
    "skinURL",
    "skin-preview",
    "#skin-preview",
    "default",
    "#skin-popover",
    "popover",
    " img",
    "attr",
    "empty",
    "#skin",
    "checkSkinURL",
    "<p>NOTICE: <strong>hizliresim.com</strong> is not supported anymore.</p>",
    "<p>Check if URL:</p><ul><li>is supported by OGARio (see list below)</li><li>is no longer than 60 characters</li></ul>",
    "<ol>",
    '<li><strong><a href="',
    "url",
    "example",
    '"  rel="noreferrer noopener" target="_blank">',
    "</a></span></li>",
    "</ol>",
    "data-content",
    "crossOrigin",
    "Anonymous",
    "onload",
    "<p>Check if image URL is valid.</p>",
    "setSkinPreview",
    "next-profile",
    "#nick",
    "#clantag",
    "#skins a[data-profile='",
    "selected",
    "setPlayerSettings",
    "setProfile",
    '" class="js-switch"> ',
    "</label>",
    '<div class="options-box ',
    "<label>",
    '"></label>',
    '<div class="slider-box"><div class="box-label"><span class="value-label">',
    ': </span><span id="',
    "i18n_dict",
    "#mainPanel",
    "before",
    '"></a></li><li class="profile-tab"><a href="#profile" class="ogicon-user" data-toggle="tab-tooltip" title="',
    "profile",
    '"></a></li><li class="settings-tab"><a href="#og-settings" class="ogicon-cog" data-toggle="tab-tooltip" title="',
    "settings",
    '"></a></li><li class="theme-tab"><a href="#theme" class="ogicon-droplet" data-toggle="tab-tooltip" title="',
    "theme",
    '"></a></li><li class="hotkeys-tab"><a href="#" class="hotkeys-link ogicon-keyboard" data-toggle="tab-tooltip" title="',
    "hotkeys",
    "sounds",
    "#mainPanel div[role=form]",
    "#main-panel div[role=form] .form-group:first",
    '<input id="clantag" class="form-control" placeholder="Tag, e.g. \u24c2" maxlength="10"><div class="input-group nick"></div>',
    ".nick",
    '<span class="input-group-btn"><button id="stream-mode" class="btn active ogicon-eye"></button></span>',
    "after",
    '<div class="input-group skin"><input id="skin" class="form-control" placeholder="Skin URL (direct link)" maxlength="60"><input type="hidden" id="color" value="',
    '" maxlength="7" /><span class="input-group-addon"><i></i></span><span class="input-group-btn"><button id="hide-url" class="btn active ogicon-eye"></button></span></div>',
    "#locationKnown, #locationUnknown",
    "insertAfter",
    "#region",
    '<button class="btn btn-warning btn-server-info ogicon-cogs"></button>',
    ".btn-spectate, .btn-logout",
    "#agario-main-buttons",
    '<div id="server-info" class="form-group clearfix"><input id="server-ws" class="form-control" placeholder="Server WS"><button id="server-connect" class="btn btn-success ogicon-power"></button><button id="server-reconnect" class="btn btn-primary ogicon-redo2"></button><input id="server-token" class="form-control" placeholder="Server token"><button id="server-join" class="btn btn-success" data-itr="page_join_party">Join</button></div>',
    "#helloContainer div[role=form]",
    '<div id="ogario-party" class="clearfix"><input id="party-token" class="form-control" placeholder="Party token"></div>',
    "#ogario-party",
    '<button id="join-party-btn-2" class="btn btn-success" data-itr="page_join_party">Join</button><button id="create-party-btn-2" class="btn btn-primary" data-itr="page_create_party">Create</button>',
    "#settingsChoice, #options",
    "#og-settings .submenu-panel",
    "#stats",
    "#main-menu",
    "menu-panel",
    "#statsContinue",
    ".center-container",
    "ogario-menu",
    '<div id="menu-footer" class="menu-main-color">',
    "visit",
    ' <a href="https://ogario.ovh" target="_blank">ogario.ovh</a> | ',
    ' <a href="https://goo.gl/nRREoR" class="release ogicon-info" target="_blank"></a></div>',
    "#leftPanel, #rightPanel",
    "removeAttr",
    ".agario-profile-panel, .agario-panel-freecoins, .agario-panel-gifting, .agario-shop-panel, #dailyquests-panel",
    "#profile",
    ".agario-profile-panel",
    '<div id="block-warn">',
    "blockWarn",
    '<br><a href="#" id="unblock-popups">',
    "#exp-bar",
    "agario-profile-panel",
    ".left-container",
    ".agario-shop-panel",
    '<div class="agario-panel ogario-yt-panel"><h5 class="menu-main-color">Team OGARio (tag: \u24c2)</h5><div class="g-ytsubscribe" data-channelid="UCaWiPNJWnhzYDrBQoXokn6w" data-layout="full" data-theme="dark" data-count="default"></div></div>',
    "#tags-container",
    ".btn-logout",
    '<div id="quick-menu" class="agario-panel agario-side-panel"><a href="https://ogario.ovh/skins/" class="quick-more-skins ogicon-grin" target="_blank" data-toggle="tab-tooltip" data-placement="left" title="',
    "skins",
    '"></a><a href="https://youtube.com/channel/UCaWiPNJWnhzYDrBQoXokn6w" class="quick-yt ogicon-youtube2" target="_blank" data-toggle="tab-tooltip" data-placement="left" title="Team OGARio"></a></div>',
    "#quick-menu",
    '<a href="#" class="quick-shop ogicon-cart" data-toggle="tab-tooltip" data-placement="left" title="',
    '"></a><a href="#" class="quick-free-coins ogicon-coin-dollar" data-toggle="tab-tooltip" data-placement="left" title="',
    '"></a><a href="#" class="quick-free-gifts ogicon-gift" data-toggle="tab-tooltip" data-placement="left" title="',
    "page_menu_main_gifts",
    "page_menu_main_dailyquests",
    ".party-dialog, .partymode-info",
    ".agario-party-6",
    ".right-container",
    '<div class="agario-party"></div>',
    ".agario-party",
    "agario-panel agario-side-panel",
    ".agario-party h4, #cancel-party-btn",
    ".agario-party .btn",
    "btn-sm",
    '<div id="skins-panel" class="agario-panel agario-side-panel"><div id="skins"></div><a href="https://ogario.ovh/skins/" id="more-skins" class="btn btn-block btn-success" target="_blank">',
    "moreSkins",
    ".btn-settings, .text-muted, .tosBox, .agario-promo, #agario-web-incentive, span[data-itr='page_option_dark_theme'], #options #darkTheme",
    "display",
    "agario-panel",
    "#adsBottom",
    "-100px",
    "#noNames, #showMass",
    "addOptions",
    "animationGroup",
    "zoomGroup",
    "quickResp",
    "respGroup",
    "optimizedNames",
    "autoHideNames",
    "hideMyName",
    "namesStroke",
    "namesGroup",
    "optimizedMass",
    "autoHideMass",
    "hideMyMass",
    "shortMass",
    "virMassShots",
    "massStroke",
    "massGroup",
    "skinsGroup",
    "optimizedFood",
    "rainbowFood",
    "foodGroup",
    "myCustomColor",
    "transparencyGroup",
    "showMapBorders",
    "gridGroup",
    "chatEmoticons",
    "showChatImages",
    "showChatVideos",
    "chatGroup",
    "showMiniMapGuides",
    "miniMapGroup",
    "virusesRange",
    "cursorTracking",
    "helpersGroup",
    "mouseSplit",
    "mouseInvert",
    "mouseGroup",
    "showLbData",
    "hudGroup",
    "showStatsMass",
    "statsGroup",
    "#noSkins, #noColors, #skipStats, #showQuest",
    "js-switch-vanilla",
    ".skinsGroup h5",
    " </label>",
    "#noSkins",
    ".noSkins",
    ".transparencyGroup h5",
    "noColors",
    ".extrasGroup h5",
    '<label class="skipStats">',
    ".skipStats",
    '<label class="showQuest">',
    ".showQuest",
    "#options",
    "#settingsChoice",
    ".extrasGroup",
    "select-wrapper",
    ".animationGroup",
    "animation",
    ".zoomGroup",
    "zoomSpeedValue",
    "#og-settings",
    '<button class="btn btn-block btn-success btn-export">',
    "exportImport",
    "restoreSettings",
    "#music",
    '<div class="agario-panel radio-panel"><h5 class="menu-main-color">Radio (',
    ')</h5><audio src="http://frshoutcast.comunicazion.eu:8815/;" controls></audio><span class="playlist"><span class="ogicon-file-music"></span> <a href="http://frshoutcast.comunicazion.eu:8815/played.html?sid=1" target="_blank">',
    "playlist",
    '<div class="agario-panel sounds-panel"><h5 class="menu-main-color">',
    "</h5></div>",
    ".sounds-panel",
    "messageSound",
    "Sound URL",
    "setCommandSound",
    '<div id="overlays-hud" data-gamemode=":ffa"><div id="stats-hud" class="hud stats-hud-color"></div> <div id="top5-hud" class="hud"><h5 class="hud-main-color">Team top <span class="team-top">5</span></h5><div class="hud-main-color team-top-menu"><a href="#" data-limit="5" class="team-top-limit active">5</a> | <a href="#" data-limit="10" class="team-top-limit">10</a> | <a href="#" data-limit="100" class="team-top-limit">100</a></div><ol id="top5-pos"></ol><div id="top5-total"><span class="hud-main-color ogicon-users"></span> ',
    "totalPartyPlayers",
    ': <span id="top5-total-players" class="top5-mass-color">0</span><br><span class="hud-main-color ogicon-pacman"></span> ',
    ': <span id="top5-total-mass" class="top5-mass-color">0</span></div></div> <div id="time-hud" class="hud time-hud-color"></div> <div id="pause-hud" class="hud">',
    '</div> <div id="leaderboard-hud" class="hud-b"><h4 class="hud-main-color">ogario.ovh</h4><div id="leaderboard-data"></div><div id="leaderboard-positions"></div></div> <div id="btl-leaderboard-hud"><div class="hud hud-c"><span id="btl-players-status">Players ready</span>: <span id="btl-players-count">0</span></div></div> <div id="minimap-hud" class="hud-b"><canvas id="minimap-sectors"></canvas><canvas id="minimap"></canvas></div><div id="target-hud" class="hud"><div id="target-player"><span id="target-skin"><img src="https://cdn.ogario.ovh/static/img/blank.png" alt=""> </span><span id="target-nick"></span> <span id="target-status" class="hud-main-color">[',
    "targetNotSet",
    ']</span></div><div id="target-summary"></div></div><div id="target-panel-hud" class="hud"><a href="#" id="set-targeting" class="ogicon-target"></a><a href="#" id="set-private-minimap" class="ogicon-location2"></a><a href="#" id="cancel-targeting" class="ogicon-cancel-circle"></a><a href="#" id="change-target" class="ogicon-arrow-right"></a></div> <div id="quest-hud" class="hud"></div> <div id="btl-hud" class="hud"></div></div>',
    '<ul id="messages"></ul>',
    "enterChatMsg",
    '..." maxlength="80"></div>',
    '" alt="',
    '" class="emoticon">',
    '<div id="exp-imp"><div id="exp-imp-menu"><button id="close-exp-imp" class="btn btn-danger">',
    '</button></div><div id="exp-imp-settings"></div></div>',
    "#exp-imp-settings",
    "<h1>",
    "exportSettings",
    "</h1><h2>",
    "exportInfo",
    "</h2>",
    "export-ogarioCommands",
    "commands",
    "addOption",
    "export-ogarioHotkeys",
    "profiles",
    "export-ogarioSettings",
    "export-ogarioThemeSettings",
    "importInfo",
    "import-ogarioCommands",
    "import-ogarioPlayerProfiles",
    "import-ogarioSettings",
    "import-ogarioThemeSettings",
    '<textarea id="import-settings" class="form-control" rows="14" cols="100" spellcheck="false" /><button id="import-settings-btn" class="btn btn-block btn-success">',
    "setThemeMenu",
    "#skins",
    '<div class="skin-box"><a href="#profile-',
    "profile-",
    "#profile-",
    ".menu-tabs a",
    "switchMenuTabs",
    ".submenu-tabs a",
    "submenu-panel",
    ".quick-menu",
    "showQuickMenu",
    ".quick-skins",
    "showSkinsPanel",
    "region",
    "leaveParty",
    "#quality",
    "getQuality",
    "bottom",
    "input click",
    "href",
    ".skin:hover",
    "#skins a",
    "selectProfile",
    "data-profile",
    "prevProfile",
    "#next-profile",
    "nextProfile",
    "#stream-mode",
    "streamMode",
    "setStreamMode",
    "#hide-url",
    "hideSkinUrl",
    "setHideSkinUrl",
    ".btn-server-info",
    "#server-info",
    "#server-connect",
    "#server-reconnect",
    "gameServerReconnect",
    "#server-join",
    "gameServerJoin",
    "#server-token",
    "#og-options input[type='checkbox']",
    "#og-settings .restore-settings a",
    "#exp-imp",
    "perfectScrollbar",
    "#export-settings-btn",
    "#import-settings-btn",
    "importSettings",
    "#unblock-popups",
    "#openfl-content",
    ".quick-shop",
    "openShop",
    ".quick-free-coins",
    "showFreeCoins",
    "showGifting",
    ".quick-quests",
    "#set-targeting",
    "setTargeting",
    "#cancel-targeting",
    "#set-private-minimap",
    "setPrivateMiniMap",
    "#change-target",
    "changeTarget",
    ".team-top-limit",
    "setTop5limit",
    "displayTop5",
    ".team-top",
    "#top5-pos .set-target",
    "setTarget",
    ".mute-user",
    "muteChatUser",
    "data-user-id",
    "btn-red btn-mute-user",
    "btn-green btn-unmute-user",
    "unmute",
    "mute",
    "displayChatActiveUsers",
    ".chat-muted-users",
    "displayChatMutedUsers",
    ".show-chat-emoticons",
    "#chat-emoticons",
    "alt",
    "getElementById",
    "stats-hud",
    "top5pos",
    "top5totalMass",
    "top5-total-mass",
    "top5totalPlayers",
    "top5-total-players",
    "leaderboard-positions",
    "leaderboardDataHUD",
    "leaderboard-data",
    "questHUD",
    "quest-hud",
    "#canvas",
    "contextmenu",
    ".btn",
    "[data-toggle='tab-tooltip']",
    "tooltip",
    "hover",
    "querySelectorAll",
    ".js-switch",
    "rangeslider",
    "toast-bottom-left",
    "parent",
    "hotkeys-link",
    "hasClass",
    "profile-tab",
    "find",
    " .submenu-panel",
    ".menu-panel",
    ".submenu-panel",
    "#noColors",
    "#showQuest",
    "scale_setting",
    "setCanvasScale",
    "setRegion",
    ":party",
    "#join-party-btn-2",
    ".js-switch-vanilla",
    "noNames",
    "#showMass",
    "unlockButtons",
    "devicePixelRatio",
    "High",
    "Medium",
    "Low",
    "VeryLow",
    "canvasScale",
    "ogicon-eye-blocked",
    "#clantag, #nick, #party-token",
    "stream-mode",
    "hide-url",
    "#skins-panel",
    ".btn-play, .btn-play-guest, .btn-login-play, .btn-spectate",
    ".btn-play, .btn-play-guest",
    "onPlay",
    ".btn-spectate",
    "onSpectate",
    "#create-party-btn-2",
    "onCreate",
    "skipServerData",
    "joinParty",
    "onJoin",
    "#statsContinue2",
    "#stats, #main-panel",
    "setParty",
    "isSocketOpen",
    "sendPartyData",
    "addKeyListeners",
    "autoHideFood",
    "UA-67142685-2",
    "auto",
    "ogarioTracker",
    "ogarioTracker.send",
    "pageview",
    "sendPlayerJoin",
    "sendPlayerDeath",
    "connect",
    "partyToken",
    "playerColor",
    "cacheCustomSkin",
    "onPlayerSpawn",
    "foodIsHidden",
    "showMenu",
    "updateDeathLocations",
    "complete",
    "cacheQueue",
    "createElement",
    "canvas",
    "clip",
    "drawImage",
    "customSkinsCache",
    "_cached",
    "toDataURL",
    "cacheSkin",
    "customSkinsMap",
    "loadSkin",
    "checkSkinsMap",
    "getCachedSkin",
    "mapOffsetFixed",
    "mapOffset",
    "mapSize",
    "sectorsX",
    "sectorsY",
    "deathLocations",
    "miniMap",
    "minimap",
    "miniMapCtx",
    "getContext",
    "clearRect",
    "currentSector",
    "globalAlpha",
    "font",
    "miniMapFontFamily",
    "miniMapSectors",
    "drawMiniMapSectors",
    "save",
    "translate",
    ":battleroyale",
    "strokeStyle",
    "moveTo",
    "lineTo",
    "closePath",
    "stroke",
    "teamPlayers",
    "targetID",
    "restore",
    "minimap-sectors",
    "ogarioCtx",
    "#FFFFFF",
    "dTok",
    "drawSectors",
    "miniMapFontWeight",
    "right",
    "textBaseline",
    "indicator",
    "drawTeammatesInd",
    "setAutoHideCellInfo",
    "cells",
    "setDrawing",
    "textAlpha",
    "drawNick",
    "namesColor",
    "namesFontFamily",
    "namesFontWeight",
    "massFontFamily",
    "#C80000",
    "playerMinMass",
    "#FFDC00",
    "viewScale",
    "#gamemode",
    "flushSkinsMap",
    "flushChatData",
    "cancelTargeting",
    "#party-token",
    "#pre-join-party-btn",
    ".party-token",
    "#party-token, .party-token",
    "#leave-party-btn",
    "lastSentNick",
    "lastSentClanTag",
    "lastSentSkinURL",
    "lastSentCustomColor",
    "lastSentPartyToken",
    "createServerToken",
    "updateServerInfo",
    "agar.io",
    "closeConnection",
    ".tech.agar.io:",
    "wss://live-arena-",
    ".agar.io:443",
    ".tech.agar.io",
    "serverIP",
    "serverArena",
    "serverToken",
    "flushCells",
    "encodeURIComponent",
    "#server-ws",
    "reconnect",
    "master",
    "gameServerConnect",
    "flushData",
    "[OGARio by szymy] Connecting to server",
    "privateIP",
    "socket",
    "ogarioWS",
    "binaryType",
    "onopen",
    "createView",
    "setUint8",
    "setUint16",
    "onmessage",
    "[OGARio by szymy] Socket error",
    "privateMode",
    "Zamkni\u0119to po\u0142\u0105czenie z serwerem!",
    "Prze\u0142\u0105czono na serwer prywatny!",
    ".party-panel",
    "Prze\u0142\u0105czono na serwer publiczny!",
    "#active-parties",
    "readyState",
    "OPEN",
    "send",
    "readMessage",
    "getUint8",
    "getUint32",
    "sendPlayerUpdate",
    "updateTeamPlayer",
    "updateTeamPlayerPosition",
    "readChatMessage",
    "sendBuffer",
    "sendPlayerState",
    "strToBuff",
    "sendPlayerData",
    "sendServerToken",
    "FFA",
    "BTR",
    "TMS",
    ":experimental",
    "EXP",
    "PTY",
    "sendServerRegion",
    "sendServerGameMode",
    "sendPlayerClanTag",
    "sendPartyToken",
    "sendPlayerNick",
    "playerID",
    "setUint32",
    "setInt32",
    "getPlayerX",
    "getPlayerY",
    "getUint16",
    "checkPlayerID",
    "setColor",
    "targeting",
    "updateTarget",
    "chatUsers",
    "addChatUser",
    "sort",
    "toTimeString",
    "isChatUserMuted",
    "displayChatMessage",
    "lastMessageSentTime",
    "%currentSector%",
    "comm",
    "getChatUserNick",
    "chatMutedUsers",
    "chatMutedUserIDs",
    "userMuted",
    "%user%",
    "<strong>",
    "</strong>",
    ' <button data-user-id="',
    "userUnmuted",
    "checkImgURL",
    '<img src="',
    '" style="width:100%;border:none;">',
    '?autoplay=1&amp;vq=tiny" frameborder="0" />',
    "parseEmoticons",
    "parseMessage",
    '<div class="message"><span class="message-time">[',
    "] </span>",
    '<span class="message-nick">',
    "</span></div>",
    "scrollHeight",
    "playSound",
    "success",
    '<div class="message command"><span class="command-time">[',
    "animate",
    "commandSound",
    "warning",
    '<span class="command-nick">',
    "keys",
    '<ol class="user-list">',
    "<li><strong>",
    '</strong> <button data-user-id="',
    "</button></li>",
    "displayUserList",
    "activeUsers",
    "mutedUsers",
    ".chat-sound-notifications",
    "ogicon-volume-mute2",
    "ogicon-volume-high",
    "setSound",
    "currentTime",
    "setTargetingInfo",
    "targetStatus",
    "#target-summary, #target-status",
    "setTargetStatus",
    "privateMiniMap",
    "targetNick",
    "targetSkinURL",
    "#target-skin, #target-nick, #target-summary",
    "#target-skin, #target-nick, #target-status, #target-summary",
    "#target-summary",
    "#target-status",
    "targetDead",
    "setTargetPosition",
    "#target-nick",
    "#target-skin",
    "background-color",
    "#target-skin img",
    "https://cdn.ogario.ovh/static/img/blank.png",
    ': <span class="hud-main-color">',
    "targetDistance",
    "targetMass",
    "getQuestProgressLabel",
    "loadSettings",
    "loadProfiles",
    "setLang",
    "setUI",
    "setTheme",
    "setShowQuickMenu",
    "setMainButtons",
    "setDisableChat",
    "setShowChatBox",
    "setTop5",
    "setCenteredLb",
    "updateTeamPlayers",
    "updateInterval",
    "txtCanvas",
    "txtCtx",
    "strokeWidth",
    "700 16px Ubuntu",
    "fontFamily",
    "fontWeight",
    "fontSize",
    "margin",
    "scale",
    "quality",
    "measuredWidth",
    "redraw",
    "setTxt",
    "txt",
    "remeasure",
    "setStroke",
    "setStrokeColor",
    "strokeColor",
    "setFontFamily",
    "setFontWeight",
    "setFontSize",
    "setScale",
    "createCanvas",
    "setStrokeWidth",
    "measureWidth",
    " 10px ",
    "measureText",
    "drawTxt",
    "strokeText",
    "targetX",
    "targetSize",
    "alpha",
    "nickCanvas",
    "lastMass",
    "kMass",
    "massCanvas",
    "massTxt",
    "strokeScale",
    "nickSize",
    "lastNickSize",
    "massSize",
    "virMassSize",
    "nickStrokeSize",
    "massStrokeSize",
    "isFood",
    "rescale",
    "redrawMass",
    "strokeNick",
    "strokeMass",
    "removed",
    "redrawed",
    "time",
    "isVirus",
    "isPlayerCell",
    "setMass",
    "setNick",
    "removeCell",
    "viruses",
    "food",
    "playerCells",
    "removePlayerCell",
    "playerCellIDs",
    "removedCells",
    "indexedCells",
    "moveCell",
    "targetY",
    "isInView",
    "viewX",
    "canvasWidth",
    "canvasHeight",
    "ceil",
    "max",
    "nickScale",
    "redrawNick",
    "setDrawingScale",
    "setStrokeSize",
    "drawMass",
    "draw",
    "foodSize",
    "transparentViruses",
    "virColors",
    "setVirusColor",
    "myTransparentSkin",
    "hideEnemiesMass",
    "view",
    "contentType",
    "setContentType",
    "readUint32",
    "setUncompressedSize",
    "uncompressedSize",
    "compareBytesGt",
    "readByte",
    "skipByte",
    "offset",
    "3.5.0",
    "[OGARio by szymy] Connecting to game server:",
    "flushCellsData",
    "protocolKey",
    "clientKey",
    "accessTokenSent",
    "connectionOpened",
    "loggedIn",
    "arraybuffer",
    "onOpen",
    "onMessage",
    "onError",
    "onclose",
    "onClose",
    "getWS",
    "sendServerJoin",
    "sendServerData",
    "displayLeaderboard",
    "onConnect",
    "[OGARio by szymy] Game server socket open",
    "sendMessage",
    "clientVersion",
    "shiftMessage",
    "handleMessage",
    "[OGARio by szymy] Game server socket error",
    "onDisconnect",
    "sendAction",
    "sendPosition",
    "playerNick",
    "unescape",
    "cursorY",
    "writeUint32",
    "clientVersionString",
    "sendAccessToken",
    "[OGARio by szymy] Client version:",
    "getInt32",
    "[OGARio by szymy] Generated client key:",
    "getFloat32",
    "viewY",
    "shiftKey",
    "pieChart",
    "drawPieChart",
    "playerPosition",
    "escape",
    "isPlayer",
    "ghostCells",
    "[OGARio by szymy] Captcha requested",
    "recaptchaRequested",
    "readFlag",
    "102 login response",
    "logout",
    "battleRoyale",
    "players",
    "joined",
    "shrinkTime",
    "timeLeft",
    "serverTimeDiff",
    "targetRadius",
    "decodeURIComponent",
    "rank",
    "playerRank",
    "generateClientKey",
    "login",
    "handleSubmessage",
    "[OGARio by szymy] Unknown opcode:",
    "decompressMessage",
    "viewMinX",
    "viewMinY",
    "viewMaxX",
    "viewMaxY",
    "[OGARio by szymy] Unknown sub opcode:",
    '<span class="me">',
    '<span class="teammate">',
    '<span class="top5-mass-color">[',
    "mapMinY",
    "mapMaxX",
    "mapMaxY",
    "[OGARio by szymy] Map offset fixed (x, y):",
    "skin",
    "onPlayerDeath",
    "color2Hex",
    "playerSize",
    "recalculatePlayerMass",
    "biggerCellsCache",
    "smallerCellsCache",
    "STECellsCache",
    "playerMaxMass",
    "oppColor",
    "setCellOppColor",
    "cacheCells",
    "biggerSTECellsCache",
    "#FF008C",
    "#BE00FF",
    "#FF0A00",
    "#00C8FF",
    "#64FF00",
    "cursorX",
    "clientY",
    "detail",
    "keyCode",
    "pressedKeys",
    "sendNick",
    "sendSplit",
    "sendFreeSpectate",
    "sendSpectate",
    "sendEject",
    "onkeyup",
    "userAgent",
    "addEventListener",
    "DOMMouseScroll",
    "setZoom",
    "onmousewheel",
    "clientX",
    "getCursorPosition",
    "innerWidth",
    "innerHeight",
    "renderFrame",
    "calculatePlayerMassAndPosition",
    "camX",
    "camY",
    "getZoom",
    "setView",
    "sortCells",
    "compareCells",
    "ctx",
    "drawGrid",
    "drawBattleArea",
    "drawMapBorders",
    "mapMinX",
    "drawSplitRange",
    "drawCursorTracking",
    "sectorsFontWeight",
    "sectorsFontFamily",
    "middle",
    "drawCachedFood",
    "pellet",
    "rect",
    "foodColor",
    "darkTheme",
    "drawCircles",
    "#3333FF",
    "radius",
    "drawSafeArea",
    "battleAreaMap",
    "battleAreaMapCtx",
    "drawDangerArea",
    "fillRect",
    "globalCompositeOperation",
    "showGhostCells",
    "inView",
    "ghostCellsColor",
    "shadowColor",
    "shadowBlur",
    "fpsLastRequest",
    "renderedFrames",
    "requestAnimationFrame",
    "render",
    "setCanvas",
    "resizeCanvas",
    "hk-feed",
    "hk-macroFeed",
    "macroFeed"
];

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
      t[o][0]['call'](win["exports"], function(e) {
        var n = t[o][1][e];
        return s(n ? n : e);
      }, win, win['exports'], exports, t, n, r);
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
  var a = typeof require == 'function' && require;
  var o = 0;
  for (; o < r['length']; o++) {
    s(r[o]);
  }
  return s;
})({
  1 : [function(isSlidingUp, dontForceConstraints, allViews) {
    function each(array) {
      var pivot = array['length'];
      if (pivot % 4 > 0) {
        throw new Error('Invalid string. Length must be a multiple of 4');
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
      var len = data['length'];
      placeHolders = each(data);
      array = new ArrayType(len * 3 / 4 - placeHolders);
      l = placeHolders > 0 ? len - 4 : len;
      var item = 0;
      i = 0;
      for (; i < l; i = i + 4) {
        tmp = revLookup[data['charCodeAt'](i)] << 18 | revLookup[data["charCodeAt"](i + 1)] << 12 | revLookup[data['charCodeAt'](i + 2)] << 6 | revLookup[data['charCodeAt'](i + 3)];
        array[item++] = tmp >> 16 & 255;
        array[item++] = tmp >> 8 & 255;
        array[item++] = tmp & 255;
      }
      if (placeHolders === 2) {
        tmp = revLookup[data['charCodeAt'](i)] << 2 | revLookup[data['charCodeAt'](i + 1)] >> 4;
        array[item++] = tmp & 255;
      } else {
        if (placeHolders === 1) {
          tmp = revLookup[data['charCodeAt'](i)] << 10 | revLookup[data['charCodeAt'](i + 1)] << 4 | revLookup[data['charCodeAt'](i + 2)] >> 2;
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
        value['push'](translate(index));
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
      value['push'](data);
      return value["join"]("");
    }
    allViews['byteLength'] = result;
    allViews['toByteArray'] = decode;
    allViews['fromByteArray'] = tokenize_text;
    var memory = [];
    var revLookup = [];
    var ArrayType = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
    var indexMap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    var i = 0;
    var value = indexMap['length'];
    for (; i < value; ++i) {
      memory[i] = indexMap[i];
      revLookup[indexMap['charCodeAt'](i)] = i;
    }
    revLookup["-"['charCodeAt'](0)] = 62;
    revLookup["_"['charCodeAt'](0)] = 63;
  }, {}],
  2 : [function(canCreateDiscussions, isSlidingUp, dontForceConstraints) {
  }, {}],
  3 : [function(getVoxel, canCreateDiscussions, target) {
    function typedArraySupport() {
      try {
        var object = new Uint8Array(1);
        object["__proto__"] = {
          "__proto__" : Uint8Array['prototype'],
          "foo" : function() {
            return 42;
        };
        return object['foo']() === 42;
      } catch (_0x5ed4d5) {
        return ![];
      }
    }
    function extend(obj) {
      if (obj > value) {
        throw new RangeError('Invalid typed array length');
      }
      var t = new Uint8Array(obj);
      t['__proto__'] = o['prototype'];
      return t;
    }
    function o(a, b, i) {
      if (typeof a === "number") {
        if (typeof b === "string") {
          throw new Error('If encoding is specified then the first argument must be a string');
        }
        return add(a);
      }
      return E(a, b, i);
    }
    function E(b, i, name) {
      if (typeof b === 'number') {
        throw new TypeError('"value" argument must not be a number');
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
      if (typeof name !== 'number') {
        throw new TypeError('"size" argument must be a number');
      } else {
        if (name < 0) {
          throw new RangeError('"size" argument must not be negative');
        }
      }
    }
    function addConfig(arr, type, key) {
      append(arr);
      if (arr <= 0) {
        return extend(arr);
      }
      if (type !== undefined) {
        return typeof key === 'string' ? extend(arr)["fill"](type, key) : extend(arr)['fill'](type);
      }
      return extend(arr);
    }
    function add(number) {
      append(number);
      return extend(number < 0 ? 0 : push(number) | 0);
    }
    function F(name, value) {
      if (typeof value !== 'string' || value === "") {
        value = 'utf8';
      }
      if (!o['isEncoding'](value)) {
        throw new TypeError('"encoding" must be a valid string encoding');
      }
      var table = parse(name, value) | 0;
      var map = extend(table);
      var type = map['write'](name, value);
      if (type !== table) {
        map = map['slice'](0, type);
      }
      return map;
    }
    function update(p) {
      var level = p['length'] < 0 ? 0 : push(p['length']) | 0;
      var to = extend(level);
      var i = 0;
      for (; i < level; i = i + 1) {
        to[i] = p[i] & 255;
      }
      return to;
    }
    function result(data, byteOffset, length) {
      if (byteOffset < 0 || data['byteLength'] < byteOffset) {
        throw new RangeError("'offset' is out of bounds");
      }
      if (data["byteLength"] < byteOffset + (length || 0)) {
        throw new RangeError('\'length\' is out of bounds');
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
      result['__proto__'] = o['prototype'];
      return result;
    }
    function apply(value) {
      if (o["isBuffer"](value)) {
        var app = push(value['length']) | 0;
        var data = extend(app);
        if (data['length'] === 0) {
          return data;
        }
        value['copy'](data, 0, 0, app);
        return data;
      }
      if (value) {
        if (isArray(value) || 'length' in value) {
          if (typeof value["length"] !== 'number' || isNaN(value['length'])) {
            return extend(0);
          return update(value);
        }
        if (value['type'] === 'Buffer' && Array['isArray'](value['data'])) {
          return update(value['data']);
        }
      }
      throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.');
    }
    function push(base) {
      if (base >= value) {
        throw new RangeError('Attempt to allocate Buffer larger than maximum ' + 'size: 0x' + value['toString'](16) + ' bytes');
      }
      return base | 0;
    }
    function copy(srcUri) {
      if (+srcUri != srcUri) {
        srcUri = 0;
      }
      return o['alloc'](+srcUri);
    }
    function parse(value, encoding) {
      if (o['isBuffer'](value)) {
        return value['length'];
      }
      if (isArray(value) || value instanceof ArrayBuffer) {
        return value['byteLength'];
      }
      if (typeof value !== 'string') {
        value = "" + value;
      }
      var vValue = value['length'];
      if (vValue === 0) {
        return 0;
      }
      var _0x568d3d = ![];
      for (;;) {
        switch(encoding) {
          case 'ascii':
          case 'latin1':
          case 'binary':
            return vValue;
          case "utf8":
          case "utf-8":
          case undefined:
            return filter(value)['length'];
          case 'ucs2':
          case 'ucs-2':
          case 'utf16le':
          case 'utf-16le':
            return vValue * 2;
          case 'hex':
            return vValue >>> 1;
          case 'base64':
            return concat(value)["length"];
          default:
            if (_0x568d3d) {
              return filter(value)['length'];
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
      if (start > this['length']) {
        return "";
      }
      if (length === undefined || length > this['length']) {
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
        encoding = 'utf8';
      }
      for (; !![];) {
        switch(encoding) {
          case 'hex':
            return format(this, start, length);
          case 'utf8':
          case 'utf-8':
            return next(this, start, length);
          case "ascii":
            return read(this, start, length);
          case 'latin1':
          case 'binary':
            return repeat(this, start, length);
          case 'base64':
            return slice(this, start, length);
          case 'ucs2':
          case 'ucs-2':
          case "utf16le":
          case "utf-16le":
            return binarySlice(this, start, length);
          default:
            if (_0x1307c6) {
              throw new TypeError('Unknown encoding: ' + encoding);
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
      if (buffer['length'] === 0) {
        return -1;
      }
      if (typeof byteOffset === 'string') {
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
      byteOffset = +byteOffset;
      if (isNaN(byteOffset)) {
        byteOffset = dir ? 0 : buffer['length'] - 1;
      }
      if (byteOffset < 0) {
        byteOffset = buffer['length'] + byteOffset;
      }
      if (byteOffset >= buffer['length']) {
        if (dir) {
          return -1;
        } else {
          byteOffset = buffer['length'] - 1;
        }
      } else {
        if (byteOffset < 0) {
          if (dir) {
            byteOffset = 0;
            return -1;
        }
      }
      if (typeof val === 'string') {
        val = o['from'](val, encoding);
      }
      if (o['isBuffer'](val)) {
        if (val['length'] === 0) {
          return -1;
        }
        return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
      } else {
        if (typeof val === 'number') {
          val = val & 255;
          if (typeof Uint8Array['prototype']['indexOf'] === 'function') {
            if (dir) {
              return Uint8Array['prototype']["indexOf"]['call'](buffer, val, byteOffset);
              return Uint8Array['prototype']['lastIndexOf']['call'](buffer, val, byteOffset);
          return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
        }
      }
      throw new TypeError('val must be string, number or Buffer');
    }
    function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
      function read(path, index) {
        if (w === 1) {
          return path[index];
        } else {
          return path['readUInt16BE'](index * w);
        }
      }
      var w = 1;
      var arrLength = arr['length'];
      var valLength = val["length"];
      if (encoding !== undefined) {
        encoding = String(encoding)["toLowerCase"]();
        if (encoding === "ucs2" || encoding === "ucs-2" || encoding === 'utf16le' || encoding === "utf-16le") {
          if (arr['length'] < 2 || val['length'] < 2) {
            return -1;
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
            if (i - foundIndex + 1 === valLength) {
              return foundIndex * w;
            if (foundIndex !== -1) {
              i = i - (i - foundIndex);
            foundIndex = -1;
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
          if (_0x6c2b03) {
            return i;
        }
      }
      return -1;
    }
    function write(data, o, offset, index) {
      offset = Number(offset) || 0;
      var size = data['length'] - offset;
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
        throw new TypeError('Invalid hex string');
      }
      if (index > i / 2) {
        index = i / 2;
      }
      var count = 0;
      for (; count < index; ++count) {
        var height = parseInt(o['substr'](count * 2, 2), 16);
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
      return callback(removePossibilities(pos, expr['length'] - index), expr, index, object);
    }
    function slice(list, item, val) {
      if (item === 0 && val === list["length"]) {
        return harderTypes['fromByteArray'](list);
      } else {
        return harderTypes["fromByteArray"](list['slice'](item, val));
      }
    }
    function next(props, name, value) {
      value = Math['min'](props['length'], value);
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
              break;
            case 2:
              tempProp = props[key + 1];
              if ((tempProp & 192) === 128) {
                end = (val & 31) << 6 | tempProp & 63;
                if (end > 127) {
                  e = end;
              break;
            case 3:
              tempProp = props[key + 1];
              fParsed = props[key + 2];
              if ((tempProp & 192) === 128 && (fParsed & 192) === 128) {
                end = (val & 15) << 12 | (tempProp & 63) << 6 | fParsed & 63;
                if (end > 2047 && (end < 55296 || end > 57343)) {
                  e = end;
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
        if (e === null) {
          e = 65533;
          _forTime = 1;
        } else {
          if (e > 65535) {
            e = e - 65536;
            self['push'](e >>> 10 & 1023 | 55296);
            e = 56320 | e & 1023;
        }
        self['push'](e);
        key = key + _forTime;
      }
      return process(self);
    }
    function process(root) {
      var object = root["length"];
      if (object <= mainBlockWidth) {
        return String['fromCharCode']['apply'](String, root);
      }
      var res = "";
      var entry_x = 0;
      for (; entry_x < object;) {
        res = res + String['fromCharCode']['apply'](String, root['slice'](entry_x, entry_x = entry_x + mainBlockWidth));
      }
      return res;
    }
    function read(reg, f, n) {
      var resp = "";
      n = Math['min'](reg['length'], n);
      var j = f;
      for (; j < n; ++j) {
        resp = resp + String["fromCharCode"](reg[j] & 127);
      }
      return resp;
    }
    function repeat(index, offset, n) {
      var newStr = "";
      n = Math['min'](index['length'], n);
      var j = offset;
      for (; j < n; ++j) {
        newStr = newStr + String['fromCharCode'](index[j]);
      }
      return newStr;
    }
    function format(arr, start, count) {
      var offset = arr['length'];
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
      var bytes = buf['slice'](arr, start);
      var ret = "";
      var i = 0;
      for (; i < bytes['length']; i = i + 2) {
        ret = ret + String['fromCharCode'](bytes[i] + bytes[i + 1] * 256);
      }
      return ret;
    }
    function checkOffset(offset, ext, length) {
      if (offset % 1 !== 0 || offset < 0) {
        throw new RangeError('offset is not uint');
      }
      if (offset + ext > length) {
        throw new RangeError('Trying to access beyond buffer length');
      }
    }
    function checkInt(buffer, value, offset, ext, max, min) {
      if (!o['isBuffer'](buffer)) {
        throw new TypeError('"buffer" argument must be a Buffer instance');
      }
      if (value > max || value < min) {
        throw new RangeError('"value" argument is out of bounds');
      }
      if (offset + ext > buffer['length']) {
        throw new RangeError("Index out of range");
      }
    }
    function get(fn, s, str, data, options, ignoreClockTick) {
      if (str + data > fn["length"]) {
        throw new RangeError("Index out of range");
      }
      if (str < 0) {
        throw new RangeError('Index out of range');
      }
    }
    function writeFloat(key, val, buf, offset, noAssert) {
      val = +val;
      buf = buf >>> 0;
      if (!noAssert) {
        get(key, val, buf, 4, 3.4028234663852886E38, -3.4028234663852886E38);
      }
      b['write'](key, val, buf, offset, 23, 4);
      return buf + 4;
    }
    function writeDouble(num, val, offset, n, noAssert) {
      val = +val;
      offset = offset >>> 0;
      if (!noAssert) {
        get(num, val, offset, 8, 1.7976931348623157E308, -1.7976931348623157E308);
      }
      b['write'](num, val, offset, n, 52, 8);
      return offset + 8;
    }
    function trim(s) {
      s = s['trim']()['replace'](entityRegExp, "");
      if (s['length'] < 2) {
        return "";
      }
      for (; s['length'] % 4 !== 0;) {
        s = s + "=";
      }
      return s;
    }
    function stringify(data) {
      if (data < 16) {
        return "0" + data['toString'](16);
      }
      return data["toString"](16);
    }
    function filter(data, limit) {
      limit = limit || Infinity;
      var timeout;
      var rMin = data['length'];
      var pingPongTimeout = null;
      var left = [];
      var value = 0;
      for (; value < rMin; ++value) {
        timeout = data["charCodeAt"](value);
        if (timeout > 55295 && timeout < 57344) {
          if (!pingPongTimeout) {
            if (timeout > 56319) {
              if ((limit = limit - 3) > -1) {
                left['push'](239, 191, 189);
              continue;
              if (value + 1 === rMin) {
                if ((limit = limit - 3) > -1) {
                  left['push'](239, 191, 189);
                continue;
            pingPongTimeout = timeout;
            continue;
          if (timeout < 56320) {
            if ((limit = limit - 3) > -1) {
              left['push'](239, 191, 189);
            pingPongTimeout = timeout;
            continue;
          timeout = (pingPongTimeout - 55296 << 10 | timeout - 56320) + 65536;
        } else {
          if (pingPongTimeout) {
            if ((limit = limit - 3) > -1) {
              left['push'](239, 191, 189);
        }
        pingPongTimeout = null;
        if (timeout < 128) {
          if ((limit = limit - 1) < 0) {
            break;
          left['push'](timeout);
        } else {
          if (timeout < 2048) {
            if ((limit = limit - 2) < 0) {
              break;
            left["push"](timeout >> 6 | 192, timeout & 63 | 128);
            if (timeout < 65536) {
              if ((limit = limit - 3) < 0) {
                break;
              left['push'](timeout >> 12 | 224, timeout >> 6 & 63 | 128, timeout & 63 | 128);
              if (timeout < 1114112) {
                if ((limit = limit - 4) < 0) {
                  break;
                left['push'](timeout >> 18 | 240, timeout >> 12 & 63 | 128, timeout >> 6 & 63 | 128, timeout & 63 | 128);
                throw new Error("Invalid code point");
        }
      }
      return left;
    }
    function resolvePathForTree(PL$42) {
      var 0 = [];
      var PL$41 = 0;
      for (; PL$41 < PL$42['length']; ++PL$41) {
        0['push'](PL$42['charCodeAt'](PL$41) & 255);
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
        dword2 = PL$42['charCodeAt'](PL$41);
        ARByte = dword2 >> 8;
        data = dword2 % 256;
        container['push'](data);
        container['push'](ARByte);
      }
      return container;
    }
    function concat(item) {
      return harderTypes['toByteArray'](trim(item));
    }
    function callback(session, obj, id, val) {
      var key = 0;
      for (; key < val; ++key) {
        if (key + id >= obj['length'] || key >= session['length']) {
          break;
        }
        obj[key + id] = session[key];
      }
      return key;
    }
    function isArray(value) {
      return typeof ArrayBuffer['isView'] === "function" && ArrayBuffer['isView'](value);
    }
    function isNaN(value) {
      return value !== value;
    }
    var harderTypes = getVoxel('base64-js');
    var b = getVoxel('ieee754');
    target['Buffer'] = o;
    target["SlowBuffer"] = copy;
    target['INSPECT_MAX_BYTES'] = 50;
    var value = 2147483647;
    target['kMaxLength'] = value;
    o['TYPED_ARRAY_SUPPORT'] = typedArraySupport();
    if (!o["TYPED_ARRAY_SUPPORT"] && typeof console !== 'undefined' && typeof console['error'] === "function") {
      console["error"]('This browser lacks typed array (Uint8Array) support which is required by ' + '`buffer` v5.x. Use `buffer` v4.x if you require old browser support.');
    }
    if (typeof Symbol !== "undefined" && Symbol["species"] && o[Symbol['species']] === o) {
      Object['defineProperty'](o, Symbol['species'], {
        "value" : null,
        "configurable" : !![],
        "enumerable" : ![],
        "writable" : ![]
      });
    }
    o['poolSize'] = 8192;
    o['from'] = function(a, n, match) {
      return E(a, n, match);
    };
    o['prototype']['__proto__'] = Uint8Array['prototype'];
    o["__proto__"] = Uint8Array;
    o["alloc"] = function(path, config, next) {
      return addConfig(path, config, next);
    };
    o['allocUnsafe'] = function(rgid) {
      return add(rgid);
    };
    o["allocUnsafeSlow"] = function(rgid) {
      return add(rgid);
    };
    o["isBuffer"] = function compareAlphabetically(b) {
      return b != null && b['_isBuffer'] === !![];
    };
    o['compare'] = function compare(result, array) {
      if (!o['isBuffer'](result) || !o['isBuffer'](array)) {
        throw new TypeError('Arguments must be Buffers');
      }
      if (result === array) {
        return 0;
      }
      var value = result['length'];
      var v = array['length'];
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
        case 'hex':
        case 'utf8':
        case 'utf-8':
        case 'ascii':
        case 'latin1':
        case 'binary':
        case 'base64':
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return !![];
        default:
          return ![];
      }
    };
    o['concat'] = function countLevelCategories(data, level) {
      if (!Array['isArray'](data)) {
        throw new TypeError('"list" argument must be an Array of Buffers');
      }
      if (data['length'] === 0) {
        return o['alloc'](0);
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
        if (!o['isBuffer'](b)) {
          throw new TypeError('"list" argument must be an Array of Buffers');
        }
        b['copy'](num, offset);
        offset = offset + b["length"];
      }
      return num;
    };
    o['byteLength'] = parse;
    o["prototype"]["_isBuffer"] = !![];
    o["prototype"]['swap16'] = function swap32() {
      var cell_amount = this['length'];
      if (cell_amount % 2 !== 0) {
        throw new RangeError('Buffer size must be a multiple of 16-bits');
      }
      var i = 0;
      for (; i < cell_amount; i = i + 2) {
        swap(this, i, i + 1);
      }
      return this;
    };
    o['prototype']["swap32"] = function swap32() {
      var cell_amount = this['length'];
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
    o['prototype']['swap64'] = function swap64() {
      var cell_amount = this['length'];
      if (cell_amount % 8 !== 0) {
        throw new RangeError('Buffer size must be a multiple of 64-bits');
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
    o["prototype"]['toString'] = function validate() {
      var duration = this['length'];
      if (duration === 0) {
        return "";
      }
      if (arguments['length'] === 0) {
        return next(this, 0, duration);
      }
      return toString['apply'](this, arguments);
    };
    o["prototype"]['equals'] = function compare(options) {
      if (!o["isBuffer"](options)) {
        throw new TypeError('Argument must be a Buffer');
      }
      if (this === options) {
        return !![];
      }
      return o["compare"](this, options) === 0;
    };
    o['prototype']["inspect"] = function pushFile() {
      var pix_color = "";
      var typedId = target['INSPECT_MAX_BYTES'];
      if (this['length'] > 0) {
        pix_color = this["toString"]('hex', 0, typedId)["match"](/.{2}/g)['join'](" ");
        if (this['length'] > typedId) {
          pix_color = pix_color + ' ... ';
        }
      }
      return '<Buffer ' + pix_color + ">";
    };
    o['prototype']["compare"] = function compare(fn, n, len, start, end) {
      if (!o['isBuffer'](fn)) {
        throw new TypeError("Argument must be a Buffer");
      }
      if (n === undefined) {
        n = 0;
      }
      if (len === undefined) {
        len = fn ? fn['length'] : 0;
      }
      if (start === undefined) {
        start = 0;
      }
      if (end === undefined) {
        end = this["length"];
      }
      if (n < 0 || len > fn['length'] || start < 0 || end > this["length"]) {
        throw new RangeError('out of range index');
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
      var right = Math['min'](t, r);
      var a = this['slice'](start, end);
      var b = fn['slice'](n, len);
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
    o['prototype']['includes'] = function wrap(s, type, signatures) {
      return this["indexOf"](s, type, signatures) !== -1;
    };
    o['prototype']['indexOf'] = function lastIndexOf(val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, !![]);
    };
    o["prototype"]['lastIndexOf'] = function lastIndexOf(val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, ![]);
    };
    o['prototype']['write'] = function write(value, count, pos, type) {
      if (count === undefined) {
        type = 'utf8';
        pos = this["length"];
        count = 0;
      } else {
        if (pos === undefined && typeof count === "string") {
          type = count;
          pos = this['length'];
          count = 0;
        } else {
          if (isFinite(count)) {
            count = count >>> 0;
            if (isFinite(pos)) {
              pos = pos >>> 0;
              if (type === undefined) {
                type = 'utf8';
              type = pos;
              pos = undefined;
            throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
        }
      }
      var append = this['length'] - count;
      if (pos === undefined || pos > append) {
        pos = append;
      }
      if (value["length"] > 0 && (pos < 0 || count < 0) || count > this['length']) {
        throw new RangeError('Attempt to write outside buffer bounds');
      }
      if (!type) {
        type = 'utf8';
      }
      var _0x43417e = ![];
      for (;;) {
        switch(type) {
          case 'hex':
            return write(this, value, count, pos);
          case "utf8":
          case "utf-8":
            return map(this, value, count, pos);
          case 'ascii':
            return cb(this, value, count, pos);
          case 'latin1':
          case "binary":
            return debug(this, value, count, pos);
          case 'base64':
            return log(this, value, count, pos);
          case 'ucs2':
          case 'ucs-2':
          case 'utf16le':
          case 'utf-16le':
            return sync(this, value, count, pos);
          default:
            if (_0x43417e) {
              throw new TypeError("Unknown encoding: " + type);
            type = ("" + type)['toLowerCase']();
            _0x43417e = !![];
        }
      }
    };
    o['prototype']["toJSON"] = function setToSystem() {
      return {
        "type" : 'Buffer',
        "data" : Array['prototype']['slice']['call'](this['_arr'] || this, 0)
      };
    };
    var mainBlockWidth = 4096;
    o['prototype']['slice'] = function copy(end, index) {
      var len = this['length'];
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
      var t = this['subarray'](end, index);
      t['__proto__'] = o['prototype'];
      return t;
    };
    o['prototype']["readUIntLE"] = function readUIntLE(offset, byteLength, noAssert) {
      offset = offset >>> 0;
      byteLength = byteLength >>> 0;
      if (!noAssert) {
        checkOffset(offset, byteLength, this['length']);
      }
      var val = this[offset];
      var mul = 1;
      var i = 0;
      for (; ++i < byteLength && (mul = mul * 256);) {
        val = val + this[offset + i] * mul;
      }
      return val;
    };
    o["prototype"]['readUIntBE'] = function readUIntLE(offset, byteLength, noAssert) {
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
    o['prototype']['readUInt8'] = function parse(offset, fn) {
      offset = offset >>> 0;
      if (!fn) {
        checkOffset(offset, 1, this["length"]);
      }
      return this[offset];
    };
    o['prototype']['readUInt16LE'] = function readUInt16LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) {
        checkOffset(offset, 2, this['length']);
      }
      return this[offset] | this[offset + 1] << 8;
    };
    o['prototype']['readUInt16BE'] = function readUInt16BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) {
        checkOffset(offset, 2, this['length']);
      }
      return this[offset] << 8 | this[offset + 1];
    };
    o['prototype']['readUInt32LE'] = function parse(offset, fn) {
      offset = offset >>> 0;
      if (!fn) {
        checkOffset(offset, 4, this["length"]);
      }
      return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
    };
    o['prototype']["readUInt32BE"] = function readUInt32BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) {
        checkOffset(offset, 4, this['length']);
      }
      return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
    };
    o["prototype"]['readIntLE'] = function readUIntLE(offset, byteLength, noAssert) {
      offset = offset >>> 0;
      byteLength = byteLength >>> 0;
      if (!noAssert) {
        checkOffset(offset, byteLength, this['length']);
      }
      var val = this[offset];
      var mul = 1;
      var i = 0;
      for (; ++i < byteLength && (mul = mul * 256);) {
        val = val + this[offset + i] * mul;
      }
      mul = mul * 128;
      if (val >= mul) {
        val = val - Math['pow'](2, 8 * byteLength);
      }
      return val;
    };
    o["prototype"]['readIntBE'] = function readUIntLE(offset, byteLength, noAssert) {
      offset = offset >>> 0;
      byteLength = byteLength >>> 0;
      if (!noAssert) {
        checkOffset(offset, byteLength, this['length']);
      }
      var i = byteLength;
      var mul = 1;
      var val = this[offset + --i];
      for (; i > 0 && (mul = mul * 256);) {
        val = val + this[offset + --i] * mul;
      }
      mul = mul * 128;
      if (val >= mul) {
        val = val - Math['pow'](2, 8 * byteLength);
      }
      return val;
    };
    o['prototype']['readInt8'] = function readInt8(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) {
        checkOffset(offset, 1, this['length']);
      }
      if (!(this[offset] & 128)) {
        return this[offset];
      }
      return (255 - this[offset] + 1) * -1;
    };
    o['prototype']["readInt16LE"] = function readInt16LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) {
        checkOffset(offset, 2, this['length']);
      }
      var _0x546454 = this[offset] | this[offset + 1] << 8;
      return _0x546454 & 32768 ? _0x546454 | 4294901760 : _0x546454;
    };
    o['prototype']['readInt16BE'] = function readInt16BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) {
        checkOffset(offset, 2, this['length']);
      }
      var _0x47d8ca = this[offset + 1] | this[offset] << 8;
      return _0x47d8ca & 32768 ? _0x47d8ca | 4294901760 : _0x47d8ca;
    };
    o['prototype']['readInt32LE'] = function readInt32LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) {
        checkOffset(offset, 4, this['length']);
      }
      return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
    };
    o['prototype']["readInt32BE"] = function readInt32BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) {
        checkOffset(offset, 4, this['length']);
      }
      return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
    };
    o['prototype']["readFloatLE"] = function parse(offset, fn) {
      offset = offset >>> 0;
      if (!fn) {
        checkOffset(offset, 4, this["length"]);
      }
      return b['read'](this, offset, !![], 23, 4);
    };
    o['prototype']['readFloatBE'] = function readFloatLE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) {
        checkOffset(offset, 4, this['length']);
      }
      return b['read'](this, offset, ![], 23, 4);
    };
    o['prototype']['readDoubleLE'] = function readFloatLE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) {
        checkOffset(offset, 8, this['length']);
      }
      return b["read"](this, offset, !![], 52, 8);
    };
    o['prototype']['readDoubleBE'] = function parse(offset, fn) {
      offset = offset >>> 0;
      if (!fn) {
        checkOffset(offset, 8, this["length"]);
      }
      return b["read"](this, offset, ![], 52, 8);
    };
    o["prototype"]['writeUIntLE'] = function writeUIntLE(value, offset, byteLength, noAssert) {
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
    o["prototype"]['writeUIntBE'] = function writeUIntBE(value, offset, byteLength, noAssert) {
      value = +value;
      offset = offset >>> 0;
      byteLength = byteLength >>> 0;
      if (!noAssert) {
        var maxBytes = Math['pow'](2, 8 * byteLength) - 1;
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
    o["prototype"]['writeUInt8'] = function writeUInt8(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        checkInt(this, value, offset, 1, 255, 0);
      }
      this[offset] = value & 255;
      return offset + 1;
    };
    o["prototype"]['writeUInt16LE'] = function writeUInt16LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        checkInt(this, value, offset, 2, 65535, 0);
      }
      this[offset] = value & 255;
      this[offset + 1] = value >>> 8;
      return offset + 2;
    };
    o["prototype"]['writeUInt16BE'] = function writeUInt16BE(value, offset, noAssert) {
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
    o['prototype']['writeUInt32BE'] = function writeUInt32BE(value, offset, noAssert) {
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
    o['prototype']['writeIntLE'] = function writeIntLE(value, offset, byteLength, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        var limit = Math['pow'](2, 8 * byteLength - 1);
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
    o['prototype']['writeIntBE'] = function writeIntBE(value, offset, byteLength, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        var limit = Math['pow'](2, 8 * byteLength - 1);
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
    o["prototype"]['writeInt8'] = function writeInt8(value, offset, noAssert) {
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
    o["prototype"]['writeInt16LE'] = function writeInt16LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        checkInt(this, value, offset, 2, 32767, -32768);
      }
      this[offset] = value & 255;
      this[offset + 1] = value >>> 8;
      return offset + 2;
    };
    o['prototype']['writeInt16BE'] = function writeInt16BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        checkInt(this, value, offset, 2, 32767, -32768);
      }
      this[offset] = value >>> 8;
      this[offset + 1] = value & 255;
      return offset + 2;
    };
    o['prototype']['writeInt32LE'] = function writeInt32LE(value, offset, noAssert) {
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
    o['prototype']["writeInt32BE"] = function writeInt32BE(value, offset, noAssert) {
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
    o['prototype']["writeFloatLE"] = function writeFloatLE(value, offset, noAssert) {
      return writeFloat(this, value, offset, !![], noAssert);
    };
    o["prototype"]['writeFloatBE'] = function writeFloatBE(value, offset, noAssert) {
      return writeFloat(this, value, offset, ![], noAssert);
    };
    o['prototype']['writeDoubleLE'] = function writeDoubleLE(value, offset, noAssert) {
      return writeDouble(this, value, offset, !![], noAssert);
    };
    o['prototype']['writeDoubleBE'] = function writeDoubleBE(value, offset, noAssert) {
      return writeDouble(this, value, offset, ![], noAssert);
    };
    o['prototype']['copy'] = function copy(target, targetStart, start, end) {
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
      if (target['length'] === 0 || this['length'] === 0) {
        return 0;
      }
      if (targetStart < 0) {
        throw new RangeError("targetStart out of bounds");
      }
      if (start < 0 || start >= this["length"]) {
        throw new RangeError('sourceStart out of bounds');
      }
      if (end < 0) {
        throw new RangeError('sourceEnd out of bounds');
      }
      if (end > this['length']) {
        end = this['length'];
      }
      if (target['length'] - targetStart < end - start) {
        end = target['length'] - targetStart + start;
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
        } else {
          Uint8Array['prototype']["set"]["call"](target, this['subarray'](start, start + count), targetStart);
        }
      }
      return count;
    };
    o['prototype']['fill'] = function test(data, start, end, encoding) {
      if (typeof data === 'string') {
        if (typeof start === 'string') {
          encoding = start;
          start = 0;
          end = this["length"];
        } else {
          if (typeof end === "string") {
            encoding = end;
            end = this['length'];
        }
        if (data['length'] === 1) {
          var process = data["charCodeAt"](0);
          if (process < 256) {
            data = process;
        }
        if (encoding !== undefined && typeof encoding !== 'string') {
          throw new TypeError('encoding must be a string');
        }
        if (typeof encoding === 'string' && !o['isEncoding'](encoding)) {
          throw new TypeError('Unknown encoding: ' + encoding);
        }
      } else {
        if (typeof data === 'number') {
          data = data & 255;
        }
      }
      if (start < 0 || this['length'] < start || this['length'] < end) {
        throw new RangeError('Out of range index');
      }
      if (end <= start) {
        return this;
      }
      start = start >>> 0;
      end = end === undefined ? this['length'] : end >>> 0;
      if (!data) {
        data = 0;
      }
      var i;
      if (typeof data === 'number') {
        i = start;
        for (; i < end; ++i) {
          this[i] = data;
        }
      } else {
        var groupPos = o['isBuffer'](data) ? data : new o(data, encoding);
        var maxGroupNum = groupPos['length'];
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
          return Array['isArray'](value);
        }
        return Object(value) === '[object Array]';
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
        return typeof selector === 'symbol';
      }
      function new_value(name) {
        return name === void 0;
      }
      function getCoreTestFilePath(module) {
        return Object(module) === '[object RegExp]';
      }
      function setTypeInfo(tInfo) {
        return typeof tInfo === 'object' && tInfo !== null;
      }
      function PlayerPictureManager(opts) {
        return Object(opts) === '[object Date]';
      }
      function EffectPreferences(opts) {
        return Object(opts) === "[object Error]" || opts instanceof Error;
      }
      function getFunctionConstrainingToImage(dontForceConstraints) {
        return typeof dontForceConstraints === 'function';
      }
      function build(nVerbosity) {
        return nVerbosity === null || typeof nVerbosity === 'boolean' || typeof nVerbosity === "number" || typeof nVerbosity === 'string' || typeof nVerbosity === 'symbol' || typeof nVerbosity === "undefined";
      }
      function Object(properties) {
        return Object['prototype']['toString']['call'](properties);
      }
      _['isArray'] = isKey$1;
      _['isBoolean'] = TestDialogController;
      _['isNull'] = prefetchGroupsInfo;
      _["isNullOrUndefined"] = extractPresetLocal;
      _['isNumber'] = value;
      _['isString'] = clickWithWebdriver;
      _['isSymbol'] = clickWithJavaScript;
      _['isUndefined'] = new_value;
      _["isRegExp"] = getCoreTestFilePath;
      _["isObject"] = setTypeInfo;
      _['isDate'] = PlayerPictureManager;
      _['isError'] = EffectPreferences;
      _['isFunction'] = getFunctionConstrainingToImage;
      _["isPrimitive"] = build;
      _['isBuffer'] = pair['isBuffer'];
    })['call'](this, {
      "isBuffer" : saveNotifs('../../is-buffer/index.js')
    });
  }, {
    "../../is-buffer/index.js" : 11
  }],
  5 : [function(require, isSlidingUp, tasks) {
    tasks['UINT32'] = require("./lib/uint32");
    tasks['UINT64'] = require('./lib/uint64');
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
        this['_high'] = 0;
        this['remainder'] = null;
        if (typeof value == 'undefined') {
          return transforms['call'](this, size);
        }
        if (typeof size == 'string') {
          return fromString['call'](this, size, value);
        }
        window['call'](this, size, value);
      }
      function window(_pane, _float) {
        this['_low'] = _pane | 0;
        this['_high'] = _float | 0;
        return this;
      }
      function transforms(data) {
        this['_low'] = data & 65535;
        this['_high'] = data >>> 16;
        return this;
      }
      function fromString(glyphDataString, glyphObject) {
        var whiteRating = parseInt(glyphDataString, glyphObject || 10);
        this['_low'] = whiteRating & 65535;
        this['_high'] = whiteRating >>> 16;
        return this;
      }
      var _0x3e2052 = {
        36 : data(Math['pow'](36, 5)),
        16 : data(Math["pow"](16, 7)),
        10 : data(Math['pow'](10, 9)),
        2 : data(Math['pow'](2, 30))
      };
      var _0x593e7c = {
        36 : data(36),
        16 : data(16),
        10 : data(10),
        2 : data(2)
      };
      data["prototype"]['fromBits'] = window;
      data['prototype']['fromNumber'] = transforms;
      data["prototype"]["fromString"] = fromString;
      data["prototype"]['toNumber'] = function() {
        return this['_high'] * 65536 + this['_low'];
      };
      data["prototype"]['toString'] = function(canCreateDiscussions) {
        return this['toNumber']()['toString'](canCreateDiscussions || 10);
      };
      data['prototype']['add'] = function(_hexDigitValueTable) {
        var carry = this['_low'] + _hexDigitValueTable['_low'];
        var ncarry = carry >>> 16;
        ncarry = ncarry + (this["_high"] + _hexDigitValueTable["_high"]);
        this['_low'] = carry & 65535;
        this['_high'] = ncarry & 65535;
        return this;
      };
      data['prototype']['subtract'] = function(canCreateDiscussions) {
        return this["add"](canCreateDiscussions['clone']()['negate']());
      };
      data["prototype"]['multiply'] = function(componentStack) {
        var mmCoreSecondsDay = this['_high'];
        var end_new = this["_low"];
        var parentComponentDef = componentStack['_high'];
        var daysToStart = componentStack['_low'];
        var now;
        var off_new;
        off_new = end_new * daysToStart;
        now = off_new >>> 16;
        now = now + mmCoreSecondsDay * daysToStart;
        now = now & 65535;
        now = now + end_new * parentComponentDef;
        this['_low'] = off_new & 65535;
        this["_high"] = now & 65535;
        return this;
      };
      data['prototype']["div"] = function(other) {
        if (other['_low'] == 0 && other["_high"] == 0) {
          throw Error("division by zero");
        }
        if (other['_high'] == 0 && other['_low'] == 1) {
          this["remainder"] = new data(0);
          return this;
        }
        if (other["gt"](this)) {
          this['remainder'] = this["clone"]();
          this['_low'] = 0;
          this['_high'] = 0;
          return this;
        }
        if (this["eq"](other)) {
          this['remainder'] = new data(0);
          this['_low'] = 1;
          this['_high'] = 0;
          return this;
        }
        var TWO_PWR_24 = other["clone"]();
        var _0xb92fa3 = -1;
        for (; !this["lt"](TWO_PWR_24);) {
          TWO_PWR_24['shiftLeft'](1, !![]);
          _0xb92fa3++;
        }
        this['remainder'] = this['clone']();
        this["_low"] = 0;
        this['_high'] = 0;
        for (; _0xb92fa3 >= 0; _0xb92fa3--) {
          TWO_PWR_24["shiftRight"](1);
          if (!this['remainder']["lt"](TWO_PWR_24)) {
            this['remainder']['subtract'](TWO_PWR_24);
            if (_0xb92fa3 >= 16) {
              this['_high'] |= 1 << _0xb92fa3 - 16;
              this["_low"] |= 1 << _0xb92fa3;
        }
        return this;
      };
      data['prototype']['negate'] = function() {
        var _0x27344e = (~this['_low'] & 65535) + 1;
        this['_low'] = _0x27344e & 65535;
        this['_high'] = ~this['_high'] + (_0x27344e >>> 16) & 65535;
        return this;
      };
      data['prototype']['equals'] = data['prototype']["eq"] = function(canCreateDiscussions) {
        return this['_low'] == canCreateDiscussions['_low'] && this["_high"] == canCreateDiscussions['_high'];
      };
      data['prototype']['greaterThan'] = data['prototype']["gt"] = function(_hexDigitValueTable) {
        if (this['_high'] > _hexDigitValueTable['_high']) {
          return !![];
        }
        if (this['_high'] < _hexDigitValueTable["_high"]) {
          return ![];
        }
        return this['_low'] > _hexDigitValueTable["_low"];
      };
      data["prototype"]['lessThan'] = data['prototype']["lt"] = function(_hexDigitValueTable) {
        if (this['_high'] < _hexDigitValueTable['_high']) {
          return !![];
        }
        if (this["_high"] > _hexDigitValueTable['_high']) {
          return ![];
        }
        return this['_low'] < _hexDigitValueTable["_low"];
      };
      data['prototype']["or"] = function(_hexDigitValueTable) {
        this['_low'] |= _hexDigitValueTable["_low"];
        this['_high'] |= _hexDigitValueTable['_high'];
        return this;
      };
      data['prototype']['and'] = function(canCreateDiscussions) {
        this['_low'] &= canCreateDiscussions['_low'];
        this['_high'] &= canCreateDiscussions['_high'];
        return this;
      };
      data['prototype']['not'] = function() {
        this["_low"] = ~this['_low'] & 65535;
        this['_high'] = ~this['_high'] & 65535;
        return this;
      };
      data['prototype']['xor'] = function(canCreateDiscussions) {
        this["_low"] ^= canCreateDiscussions['_low'];
        this['_high'] ^= canCreateDiscussions['_high'];
        return this;
      };
      data['prototype']['shiftRight'] = data['prototype']['shiftr'] = function(canCreateDiscussions) {
        if (canCreateDiscussions > 16) {
          this['_low'] = this["_high"] >> canCreateDiscussions - 16;
          this['_high'] = 0;
        } else {
          if (canCreateDiscussions == 16) {
            this['_low'] = this["_high"];
            this["_high"] = 0;
            this['_low'] = this["_low"] >> canCreateDiscussions | this["_high"] << 16 - canCreateDiscussions & 65535;
            this["_high"] >>= canCreateDiscussions;
        }
        return this;
      };
      data['prototype']['shiftLeft'] = data["prototype"]['shiftl'] = function(canCreateDiscussions, isSlidingUp) {
        if (canCreateDiscussions > 16) {
          this["_high"] = this["_low"] << canCreateDiscussions - 16;
          this['_low'] = 0;
          if (!isSlidingUp) {
            this['_high'] &= 65535;
        } else {
          if (canCreateDiscussions == 16) {
            this['_high'] = this["_low"];
            this['_low'] = 0;
            this['_high'] = this['_high'] << canCreateDiscussions | this["_low"] >> 16 - canCreateDiscussions;
            this['_low'] = this["_low"] << canCreateDiscussions & 65535;
            if (!isSlidingUp) {
              this['_high'] &= 65535;
        }
        return this;
      };
      data['prototype']['rotateLeft'] = data['prototype']['rotl'] = function(numBitsToRotate) {
        var wordA = this['_high'] << 16 | this['_low'];
        wordA = wordA << numBitsToRotate | wordA >>> 32 - numBitsToRotate;
        this['_low'] = wordA & 65535;
        this['_high'] = wordA >>> 16;
        return this;
      };
      data['prototype']['rotateRight'] = data["prototype"]['rotr'] = function(n) {
        var X = this['_high'] << 16 | this['_low'];
        X = X >>> n | X << 32 - n;
        this['_low'] = X & 65535;
        this['_high'] = X >>> 16;
        return this;
      };
      data["prototype"]["clone"] = function() {
        return new data(this['_low'], this['_high']);
      };
      if (typeof define != 'undefined' && define['amd']) {
        define([], function() {
          return data;
        });
      } else {
        if (typeof beacons != 'undefined' && beacons['exports']) {
          beacons['exports'] = data;
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
        this['remainder'] = null;
        if (typeof size == "string") {
          return fromString['call'](this, size, value);
        }
        if (typeof value == "undefined") {
          return transforms["call"](this, size);
        }
        handleSlide["apply"](this, arguments);
      }
      function handleSlide(stgs, index, isSlidingUp, $cont) {
        if (typeof isSlidingUp == 'undefined') {
          this["_a00"] = stgs & 65535;
          this["_a16"] = stgs >>> 16;
          this['_a32'] = index & 65535;
          this['_a48'] = index >>> 16;
          return this;
        }
        this["_a00"] = stgs | 0;
        this['_a16'] = index | 0;
        this['_a32'] = isSlidingUp | 0;
        this['_a48'] = $cont | 0;
        return this;
      }
      function transforms(data) {
        this['_a00'] = data & 65535;
        this['_a16'] = data >>> 16;
        this["_a32"] = 0;
        this['_a48'] = 0;
        return this;
      }
      function fromString(text, radix) {
        radix = radix || 10;
        this["_a00"] = 0;
        this["_a16"] = 0;
        this['_a32'] = 0;
        this["_a48"] = 0;
        var num = ProblemMessages[radix] || new data(Math['pow'](radix, 5));
        var offset = 0;
        var abLen = text['length'];
        for (; offset < abLen; offset = offset + 5) {
          var n = Math['min'](5, abLen - offset);
          var codePoint = parseInt(text["slice"](offset, offset + n), radix);
          this["multiply"](n < 5 ? new data(Math['pow'](radix, n)) : num)["add"](new data(codePoint));
        }
        return this;
      }
      var ProblemMessages = {
        16 : data(Math["pow"](16, 5)),
        10 : data(Math['pow'](10, 5)),
        2 : data(Math['pow'](2, 5))
      };
      var selectorCache = {
        16 : data(16),
        10 : data(10),
        2 : data(2)
      };
      data['prototype']['fromBits'] = handleSlide;
      data['prototype']['fromNumber'] = transforms;
      data["prototype"]['fromString'] = fromString;
      data['prototype']['toNumber'] = function() {
        return this['_a16'] * 65536 + this['_a00'];
      };
      data['prototype']["toString"] = function(selector) {
        selector = selector || 10;
        var rem = selectorCache[selector] || new data(selector);
        if (!this["gt"](rem)) {
          return this["toNumber"]()['toString'](selector);
        }
        var approxRem = this['clone']();
        var a = new Array(64);
        var idxOf = 63;
        for (; idxOf >= 0; idxOf--) {
          approxRem['div'](rem);
          a[idxOf] = approxRem['remainder']["toNumber"]()['toString'](selector);
          if (!approxRem["gt"](rem)) {
            break;
        }
        a[idxOf - 1] = approxRem['toNumber']()["toString"](selector);
        return a["join"]("");
      };
      data["prototype"]['add'] = function(canCreateDiscussions) {
        var carry = this['_a00'] + canCreateDiscussions['_a00'];
        var c16 = carry >>> 16;
        c16 = c16 + (this["_a16"] + canCreateDiscussions["_a16"]);
        var c32 = c16 >>> 16;
        c32 = c32 + (this["_a32"] + canCreateDiscussions['_a32']);
        var c48 = c32 >>> 16;
        c48 = c48 + (this['_a48'] + canCreateDiscussions['_a48']);
        this['_a00'] = carry & 65535;
        this["_a16"] = c16 & 65535;
        this['_a32'] = c32 & 65535;
        this['_a48'] = c48 & 65535;
        return this;
      };
      data['prototype']['subtract'] = function(canCreateDiscussions) {
        return this['add'](canCreateDiscussions['clone']()["negate"]());
      };
      data['prototype']['multiply'] = function(mat1) {
        var a00 = this['_a00'];
        var a16 = this['_a16'];
        var a32 = this['_a32'];
        var a48 = this['_a48'];
        var b00 = mat1['_a00'];
        var b16 = mat1['_a16'];
        var b32 = mat1["_a32"];
        var b01 = mat1['_a48'];
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
        this['_a00'] = low_result & 65535;
        this['_a16'] = c00 & 65535;
        this['_a32'] = c16 & 65535;
        this["_a48"] = c32 & 65535;
        return this;
      };
      data['prototype']['div'] = function(other) {
        if (other["_a16"] == 0 && other['_a32'] == 0 && other['_a48'] == 0) {
          if (other['_a00'] == 0) {
            throw Error('division by zero');
          if (other["_a00"] == 1) {
            this['remainder'] = new data(0);
            return this;
        }
        if (other["gt"](this)) {
          this['remainder'] = this['clone']();
          this['_a00'] = 0;
          this['_a16'] = 0;
          this['_a32'] = 0;
          this['_a48'] = 0;
          return this;
        }
        if (this["eq"](other)) {
          this['remainder'] = new data(0);
          this['_a00'] = 1;
          this['_a16'] = 0;
          this["_a32"] = 0;
          this['_a48'] = 0;
          return this;
        }
        var TWO_PWR_24 = other['clone']();
        var _0xdbc174 = -1;
        for (; !this["lt"](TWO_PWR_24);) {
          TWO_PWR_24['shiftLeft'](1, !![]);
          _0xdbc174++;
        }
        this["remainder"] = this['clone']();
        this['_a00'] = 0;
        this['_a16'] = 0;
        this["_a32"] = 0;
        this['_a48'] = 0;
        for (; _0xdbc174 >= 0; _0xdbc174--) {
          TWO_PWR_24['shiftRight'](1);
          if (!this['remainder']["lt"](TWO_PWR_24)) {
            this['remainder']['subtract'](TWO_PWR_24);
            if (_0xdbc174 >= 48) {
              this['_a48'] |= 1 << _0xdbc174 - 48;
              if (_0xdbc174 >= 32) {
                this['_a32'] |= 1 << _0xdbc174 - 32;
                if (_0xdbc174 >= 16) {
                  this['_a16'] |= 1 << _0xdbc174 - 16;
                  this['_a00'] |= 1 << _0xdbc174;
        }
        return this;
      };
      data['prototype']['negate'] = function() {
        var _0x58d4f8 = (~this["_a00"] & 65535) + 1;
        this['_a00'] = _0x58d4f8 & 65535;
        _0x58d4f8 = (~this['_a16'] & 65535) + (_0x58d4f8 >>> 16);
        this['_a16'] = _0x58d4f8 & 65535;
        _0x58d4f8 = (~this['_a32'] & 65535) + (_0x58d4f8 >>> 16);
        this['_a32'] = _0x58d4f8 & 65535;
        this['_a48'] = ~this['_a48'] + (_0x58d4f8 >>> 16) & 65535;
        return this;
      };
      data['prototype']['equals'] = data['prototype']["eq"] = function(canCreateDiscussions) {
        return this['_a48'] == canCreateDiscussions['_a48'] && this['_a00'] == canCreateDiscussions['_a00'] && this['_a32'] == canCreateDiscussions['_a32'] && this["_a16"] == canCreateDiscussions['_a16'];
      };
      data['prototype']["greaterThan"] = data["prototype"]["gt"] = function(canCreateDiscussions) {
        if (this['_a48'] > canCreateDiscussions['_a48']) {
          return !![];
        }
        if (this['_a48'] < canCreateDiscussions["_a48"]) {
          return ![];
        }
        if (this['_a32'] > canCreateDiscussions['_a32']) {
          return !![];
        }
        if (this['_a32'] < canCreateDiscussions["_a32"]) {
          return ![];
        }
        if (this['_a16'] > canCreateDiscussions["_a16"]) {
          return !![];
        }
        if (this['_a16'] < canCreateDiscussions["_a16"]) {
          return ![];
        }
        return this['_a00'] > canCreateDiscussions["_a00"];
      };
      data["prototype"]['lessThan'] = data["prototype"]["lt"] = function(canCreateDiscussions) {
        if (this['_a48'] < canCreateDiscussions["_a48"]) {
          return !![];
        }
        if (this['_a48'] > canCreateDiscussions['_a48']) {
          return ![];
        }
        if (this['_a32'] < canCreateDiscussions['_a32']) {
          return !![];
        }
        if (this["_a32"] > canCreateDiscussions['_a32']) {
          return ![];
        }
        if (this['_a16'] < canCreateDiscussions["_a16"]) {
          return !![];
        }
        if (this["_a16"] > canCreateDiscussions['_a16']) {
          return ![];
        }
        return this['_a00'] < canCreateDiscussions['_a00'];
      };
      data['prototype']["or"] = function(canCreateDiscussions) {
        this['_a00'] |= canCreateDiscussions["_a00"];
        this['_a16'] |= canCreateDiscussions["_a16"];
        this["_a32"] |= canCreateDiscussions['_a32'];
        this['_a48'] |= canCreateDiscussions["_a48"];
        return this;
      };
      data['prototype']['and'] = function(canCreateDiscussions) {
        this['_a00'] &= canCreateDiscussions["_a00"];
        this["_a16"] &= canCreateDiscussions['_a16'];
        this["_a32"] &= canCreateDiscussions['_a32'];
        this["_a48"] &= canCreateDiscussions['_a48'];
        return this;
      };
      data["prototype"]['xor'] = function(canCreateDiscussions) {
        this["_a00"] ^= canCreateDiscussions['_a00'];
        this['_a16'] ^= canCreateDiscussions['_a16'];
        this['_a32'] ^= canCreateDiscussions['_a32'];
        this['_a48'] ^= canCreateDiscussions['_a48'];
        return this;
      };
      data['prototype']['not'] = function() {
        this['_a00'] = ~this["_a00"] & 65535;
        this["_a16"] = ~this['_a16'] & 65535;
        this["_a32"] = ~this["_a32"] & 65535;
        this["_a48"] = ~this["_a48"] & 65535;
        return this;
      };
      data['prototype']['shiftRight'] = data['prototype']["shiftr"] = function(canCreateDiscussions) {
        canCreateDiscussions = canCreateDiscussions % 64;
        if (canCreateDiscussions >= 48) {
          this['_a00'] = this['_a48'] >> canCreateDiscussions - 48;
          this['_a16'] = 0;
          this['_a32'] = 0;
          this['_a48'] = 0;
        } else {
          if (canCreateDiscussions >= 32) {
            canCreateDiscussions = canCreateDiscussions - 32;
            this["_a00"] = (this['_a32'] >> canCreateDiscussions | this['_a48'] << 16 - canCreateDiscussions) & 65535;
            this['_a16'] = this['_a48'] >> canCreateDiscussions & 65535;
            this["_a32"] = 0;
            this['_a48'] = 0;
            if (canCreateDiscussions >= 16) {
              canCreateDiscussions = canCreateDiscussions - 16;
              this['_a00'] = (this['_a16'] >> canCreateDiscussions | this['_a32'] << 16 - canCreateDiscussions) & 65535;
              this['_a16'] = (this['_a32'] >> canCreateDiscussions | this['_a48'] << 16 - canCreateDiscussions) & 65535;
              this['_a32'] = this['_a48'] >> canCreateDiscussions & 65535;
              this['_a48'] = 0;
              this['_a00'] = (this["_a00"] >> canCreateDiscussions | this['_a16'] << 16 - canCreateDiscussions) & 65535;
              this['_a16'] = (this['_a16'] >> canCreateDiscussions | this["_a32"] << 16 - canCreateDiscussions) & 65535;
              this['_a32'] = (this['_a32'] >> canCreateDiscussions | this['_a48'] << 16 - canCreateDiscussions) & 65535;
              this['_a48'] = this['_a48'] >> canCreateDiscussions & 65535;
        }
        return this;
      };
      data['prototype']["shiftLeft"] = data['prototype']['shiftl'] = function(canCreateDiscussions, isSlidingUp) {
        canCreateDiscussions = canCreateDiscussions % 64;
        if (canCreateDiscussions >= 48) {
          this["_a48"] = this['_a00'] << canCreateDiscussions - 48;
          this['_a32'] = 0;
          this["_a16"] = 0;
          this['_a00'] = 0;
        } else {
          if (canCreateDiscussions >= 32) {
            canCreateDiscussions = canCreateDiscussions - 32;
            this["_a48"] = this['_a16'] << canCreateDiscussions | this['_a00'] >> 16 - canCreateDiscussions;
            this['_a32'] = this['_a00'] << canCreateDiscussions & 65535;
            this["_a16"] = 0;
            this["_a00"] = 0;
            if (canCreateDiscussions >= 16) {
              canCreateDiscussions = canCreateDiscussions - 16;
              this['_a48'] = this['_a32'] << canCreateDiscussions | this["_a16"] >> 16 - canCreateDiscussions;
              this["_a32"] = (this['_a16'] << canCreateDiscussions | this["_a00"] >> 16 - canCreateDiscussions) & 65535;
              this['_a16'] = this['_a00'] << canCreateDiscussions & 65535;
              this['_a00'] = 0;
              this['_a48'] = this['_a48'] << canCreateDiscussions | this['_a32'] >> 16 - canCreateDiscussions;
              this["_a32"] = (this['_a32'] << canCreateDiscussions | this['_a16'] >> 16 - canCreateDiscussions) & 65535;
              this['_a16'] = (this["_a16"] << canCreateDiscussions | this["_a00"] >> 16 - canCreateDiscussions) & 65535;
              this['_a00'] = this['_a00'] << canCreateDiscussions & 65535;
        }
        if (!isSlidingUp) {
          this['_a48'] &= 65535;
        }
        return this;
      };
      data['prototype']['rotateLeft'] = data['prototype']['rotl'] = function(n) {
        n = n % 64;
        if (n == 0) {
          return this;
        }
        if (n >= 32) {
          var _0x41e4a3 = this['_a00'];
          this['_a00'] = this["_a32"];
          this['_a32'] = _0x41e4a3;
          _0x41e4a3 = this['_a48'];
          this['_a48'] = this["_a16"];
          this["_a16"] = _0x41e4a3;
          if (n == 32) {
            return this;
          n = n - 32;
        }
        var x = this['_a48'] << 16 | this['_a32'];
        var r = this["_a16"] << 16 | this['_a00'];
        var _0x2f3981 = x << n | r >>> 32 - n;
        var _0x4e5d1f = r << n | x >>> 32 - n;
        this['_a00'] = _0x4e5d1f & 65535;
        this["_a16"] = _0x4e5d1f >>> 16;
        this["_a32"] = _0x2f3981 & 65535;
        this['_a48'] = _0x2f3981 >>> 16;
        return this;
      };
      data["prototype"]['rotateRight'] = data['prototype']['rotr'] = function(n) {
        n = n % 64;
        if (n == 0) {
          return this;
        }
        if (n >= 32) {
          var _0x29e42d = this['_a00'];
          this['_a00'] = this["_a32"];
          this['_a32'] = _0x29e42d;
          _0x29e42d = this['_a48'];
          this["_a48"] = this['_a16'];
          this['_a16'] = _0x29e42d;
          if (n == 32) {
            return this;
          n = n - 32;
        }
        var X = this['_a48'] << 16 | this['_a32'];
        var Xl = this['_a16'] << 16 | this['_a00'];
        var _0x2abf44 = X >>> n | Xl << 32 - n;
        var _0x2ce29d = Xl >>> n | X << 32 - n;
        this["_a00"] = _0x2ce29d & 65535;
        this['_a16'] = _0x2ce29d >>> 16;
        this['_a32'] = _0x2abf44 & 65535;
        this['_a48'] = _0x2abf44 >>> 16;
        return this;
      };
      data['prototype']["clone"] = function() {
        return new data(this['_a00'], this["_a16"], this['_a32'], this['_a48']);
      };
      if (typeof define != "undefined" && define['amd']) {
        define([], function() {
          return data;
        });
      } else {
        if (typeof dict != "undefined" && dict['exports']) {
          dict['exports'] = data;
        } else {
          EMSarray['UINT64'] = data;
        }
      }
    })(this);
  }, {}],
  8 : [function(canCreateDiscussions, root, isSlidingUp) {
    function data() {
      this['_events'] = this['_events'] || {};
      this['_maxListeners'] = this['_maxListeners'] || undefined;
    }
    function expect(obj) {
      return typeof obj === 'function';
    }
    function on_focusin_clear_placeholder(input) {
      return typeof input === 'number';
    }
    function expandDeltifiedObject(object) {
      return typeof object === 'object' && object !== null;
    }
    function posConverter(pinObject) {
      return pinObject === void 0;
    }
    root["exports"] = data;
    data['EventEmitter'] = data;
    data['prototype']['_events'] = undefined;
    data['prototype']['_maxListeners'] = undefined;
    data["defaultMaxListeners"] = 10;
    data['prototype']["setMaxListeners"] = function(input) {
      if (!on_focusin_clear_placeholder(input) || input < 0 || isNaN(input)) {
        throw TypeError('n must be a positive number');
      }
      this['_maxListeners'] = input;
      return this;
    };
    data["prototype"]['emit'] = function(lifecycleEvent) {
      var data;
      var baseObject;
      var addressCount;
      var X;
      var signedTransactionsCounter;
      var signedTransactions;
      if (!this['_events']) {
        this['_events'] = {};
      }
      if (lifecycleEvent === "error") {
        if (!this["_events"]['error'] || expandDeltifiedObject(this["_events"]['error']) && !this['_events']['error']['length']) {
          data = arguments[1];
          if (data instanceof Error) {
            throw data;
            var specialDayCache = new Error('Uncaught, unspecified "error" event. (' + data + ")");
            specialDayCache['context'] = data;
            throw specialDayCache;
        }
      }
      baseObject = this['_events'][lifecycleEvent];
      if (posConverter(baseObject)) {
        return ![];
      }
      if (expect(baseObject)) {
        switch(arguments['length']) {
          case 1:
            baseObject["call"](this);
            break;
          case 2:
            baseObject['call'](this, arguments[1]);
            break;
          case 3:
            baseObject['call'](this, arguments[1], arguments[2]);
            break;
          default:
            X = Array['prototype']['slice']['call'](arguments, 1);
            baseObject["apply"](this, X);
        }
      } else {
        if (expandDeltifiedObject(baseObject)) {
          X = Array["prototype"]['slice']['call'](arguments, 1);
          signedTransactions = baseObject['slice']();
          addressCount = signedTransactions['length'];
          signedTransactionsCounter = 0;
          for (; signedTransactionsCounter < addressCount; signedTransactionsCounter++) {
            signedTransactions[signedTransactionsCounter]['apply'](this, X);
        }
      }
      return !![];
    };
    data['prototype']['addListener'] = function(i, value) {
      var filter_error;
      if (!expect(value)) {
        throw TypeError('listener must be a function');
      }
      if (!this['_events']) {
        this['_events'] = {};
      }
      if (this['_events']['newListener']) {
        this["emit"]('newListener', i, expect(value['listener']) ? value['listener'] : value);
      }
      if (!this["_events"][i]) {
        this['_events'][i] = value;
      } else {
        if (expandDeltifiedObject(this["_events"][i])) {
          this["_events"][i]['push'](value);
        } else {
          this["_events"][i] = [this['_events'][i], value];
        }
      }
      if (expandDeltifiedObject(this['_events'][i]) && !this['_events'][i]['warned']) {
        if (!posConverter(this['_maxListeners'])) {
          filter_error = this['_maxListeners'];
        } else {
          filter_error = data["defaultMaxListeners"];
        }
        if (filter_error && filter_error > 0 && this['_events'][i]['length'] > filter_error) {
          this["_events"][i]["warned"] = !![];
          console["error"]('(node) warning: possible EventEmitter memory ' + 'leak detected. %d listeners added. ' + 'Use emitter.setMaxListeners() to increase limit.', this['_events'][i]['length']);
          if (typeof console['trace'] === 'function') {
            console['trace']();
        }
      }
      return this;
    };
    data['prototype']["on"] = data['prototype']['addListener'];
    data['prototype']['once'] = function(event, deferred) {
      function removeAllListeners() {
        this["removeListener"](event, removeAllListeners);
        if (!_0x15d144) {
          _0x15d144 = !![];
          deferred['apply'](this, arguments);
        }
      }
      if (!expect(deferred)) {
        throw TypeError('listener must be a function');
      }
      var _0x15d144 = ![];
      removeAllListeners['listener'] = deferred;
      this["on"](event, removeAllListeners);
      return this;
    };
    data["prototype"]['removeListener'] = function(rowId, undefined) {
      var object;
      var value;
      var func;
      var name;
      if (!expect(undefined)) {
        throw TypeError('listener must be a function');
      }
      if (!this["_events"] || !this['_events'][rowId]) {
        return this;
      }
      object = this["_events"][rowId];
      func = object['length'];
      value = -1;
      if (object === undefined || expect(object["listener"]) && object['listener'] === undefined) {
        delete this['_events'][rowId];
        if (this['_events']['removeListener']) {
          this['emit']('removeListener', rowId, undefined);
        }
      } else {
        if (expandDeltifiedObject(object)) {
          name = func;
          for (; name-- > 0;) {
            if (object[name] === undefined || object[name]['listener'] && object[name]['listener'] === undefined) {
              value = name;
              break;
          if (value < 0) {
            return this;
          if (object['length'] === 1) {
            object["length"] = 0;
            delete this['_events'][rowId];
            object['splice'](value, 1);
          if (this['_events']['removeListener']) {
            this['emit']('removeListener', rowId, undefined);
        }
      }
      return this;
    };
    data['prototype']['removeAllListeners'] = function(statisticName) {
      var e;
      var baseObject;
      if (!this['_events']) {
        return this;
      }
      if (!this['_events']['removeListener']) {
        if (arguments['length'] === 0) {
          this["_events"] = {};
        } else {
          if (this['_events'][statisticName]) {
            delete this['_events'][statisticName];
        }
        return this;
      }
      if (arguments["length"] === 0) {
        for (e in this['_events']) {
          if (e === "removeListener") {
            continue;
          this['removeAllListeners'](e);
        }
        this['removeAllListeners']('removeListener');
        this['_events'] = {};
        return this;
      }
      baseObject = this['_events'][statisticName];
      if (expect(baseObject)) {
        this['removeListener'](statisticName, baseObject);
      } else {
        if (baseObject) {
          for (; baseObject['length'];) {
            this['removeListener'](statisticName, baseObject[baseObject['length'] - 1]);
        }
      }
      delete this["_events"][statisticName];
      return this;
    };
    data['prototype']['listeners'] = function(jsToNativeModeName) {
      var _0x278c8b;
      if (!this['_events'] || !this['_events'][jsToNativeModeName]) {
        _0x278c8b = [];
      } else {
        if (expect(this["_events"][jsToNativeModeName])) {
          _0x278c8b = [this['_events'][jsToNativeModeName]];
        } else {
          _0x278c8b = this['_events'][jsToNativeModeName]['slice']();
        }
      }
      return _0x278c8b;
    };
    data['prototype']['listenerCount'] = function(bidx) {
      if (this['_events']) {
        var b = this["_events"][bidx];
        if (expect(b)) {
          return 1;
        } else {
          if (b) {
            return b["length"];
        }
      }
      return 0;
    };
    data["listenerCount"] = function(DeviceMatchers, agentService) {
      return DeviceMatchers['listenerCount'](agentService);
    };
  }, {}],
  9 : [function(isSlidingUp, dontForceConstraints, canCreateDiscussions) {
    canCreateDiscussions['read'] = function(buffer, indice, isLE, mLen, nBytes) {
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
    canCreateDiscussions['write'] = function(buffer, value, offset, isLE, mLen, nBytes) {
      var e;
      var m;
      var c;
      var eLen = nBytes * 8 - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var rt = mLen === 23 ? Math['pow'](2, -24) - Math['pow'](2, -77) : 0;
      var i = isLE ? 0 : nBytes - 1;
      var d = isLE ? 1 : -1;
      var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
      value = Math['abs'](value);
      if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
      } else {
        e = Math['floor'](Math["log"](value) / Math['LN2']);
        if (value * (c = Math['pow'](2, -e)) < 1) {
          e--;
          c = c * 2;
        }
        if (e + eBias >= 1) {
          value = value + rt / c;
        } else {
          value = value + rt * Math['pow'](2, 1 - eBias);
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
            m = (value * c - 1) * Math['pow'](2, mLen);
            e = e + eBias;
            m = value * Math['pow'](2, eBias - 1) * Math['pow'](2, mLen);
            e = 0;
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
    if (typeof Object['create'] === "function") {
      canCreateDiscussions['exports'] = function genNewExploitPanel(command_module_id, command_module_name) {
        command_module_id['super_'] = command_module_name;
        command_module_id["prototype"] = Object['create'](command_module_name['prototype'], {
          "constructor" : {
            "value" : command_module_id,
            "enumerable" : ![],
            "writable" : !![],
            "configurable" : !![]
        });
      };
    } else {
      canCreateDiscussions['exports'] = function PL$2(PL$3, PL$4) {
        PL$3['super_'] = PL$4;
        var PL$6 = function() {
        };
        PL$6['prototype'] = PL$4['prototype'];
        PL$3["prototype"] = new PL$6;
        PL$3["prototype"]['constructor'] = PL$3;
      };
    }
  }, {}],
  11 : [function(isSlidingUp, canCreateDiscussions, dontForceConstraints) {
    function prev(arr) {
      return !!arr["constructor"] && typeof arr["constructor"]['isBuffer'] === 'function' && arr['constructor']['isBuffer'](arr);
    }
    function verify(text) {
      return typeof text['readFloatLE'] === 'function' && typeof text["slice"] === 'function' && prev(text['slice'](0, 0));
    }
    canCreateDiscussions['exports'] = function(data) {
      return data != null && (prev(data) || verify(data) || !!data['_isBuffer']);
    };
  }, {}],
  12 : [function(canCreateDiscussions, module, isSlidingUp) {
    var PL$2 = {}['toString'];
    module["exports"] = Array["isArray"] || function(PL$16) {
      return PL$2["call"](PL$16) == "[object Array]";
    };
  }, {}],
  13 : [function(saveNotifs, canCreateDiscussions, $el) {
    function callback(map, array, x, s, i, first) {
      var index = i;
      var lap1 = first - i;
      var m = 0;
      if (map['length'] >= _num2) {
        throw new Error('input too large');
      }
      if (map['length'] > goal) {
        var captcount = $el['compressBound'](map["length"]);
        if (lap1 < captcount) {
          throw Error('output too small: ' + lap1 + ' < ' + captcount);
        }
        var y = 1;
        var _0x2f44e5 = (1 << FIXED_BITS) + 3;
        var width = map['length'] - goal;
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
          _0x2f44e5 = (1 << FIXED_BITS) + 3;
          var n = x - m;
          var pos = x - i;
          x = x + j;
          i = i + j;
          var c = x;
          for (; x < width && map[x] == map[i];) {
            x++;
            i++;
          c = x - c;
          var maxAC = c < a ? c : a;
          if (n >= range) {
            array[index++] = (range << startMinutes) + maxAC;
            var i = n - range;
            for (; i > 254; i = i - 255) {
              array[index++] = 255;
            array[index++] = i;
            array[index++] = (n << startMinutes) + maxAC;
          var w = 0;
          for (; w < n; w++) {
            array[index++] = map[m + w];
          array[index++] = pos;
          array[index++] = pos >> 8;
          if (c >= a) {
            c = c - a;
            for (; c >= 255;) {
              c = c - 255;
              array[index++] = 255;
            array[index++] = c;
          m = x;
        }
      }
      if (m == 0) {
        return 0;
      }
      n = map['length'] - m;
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
      for (; x < map['length'];) {
        array[index++] = map[x++];
      }
      return index;
    }
    var _0x8ace7e = saveNotifs("cuint")['UINT32'];
    if (!Math['imul']) {
      Math['imul'] = function deep_copy_into_object(a, b) {
        var ah = a >>> 16;
        var al = a & 65535;
        var bh = b >>> 16;
        var bl = b & 65535;
        return al * bl + (ah * bl + al * bh << 16) | 0;
      };
    }
    $el['uncompress'] = function(data, requestedIntersection, offset, length) {
      offset = offset || 0;
      length = length || data['length'] - offset;
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
          var id = o + path;
          for (; o < id;) {
            requestedIntersection[stringIndex++] = data[o++];
          if (o === s) {
            return stringIndex;
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
    $el['compress'] = function(destinationMap, options, param, evaluatorFunctionTarget) {
      var keys = new Array(len);
      var i = 0;
      for (; i < len; i++) {
        keys[i] = 0;
      }
      return callback(destinationMap, options, 0, keys, param || 0, evaluatorFunctionTarget || options['length']);
    };
    $el['compressHC'] = $el["compress"];
    $el['compressDependent'] = callback;
  }, {
    "cuint" : 5
  }],
  14 : [function(__webpack_require__, isSlidingUp, p) {
    (function(helper) {
      function embed(options, element) {
        var $node = [];
        var c = new component(element);
        c["on"]('data', function(scrollWrapper) {
          $node['push'](scrollWrapper);
        });
        c['end'](options);
        return helper['concat']($node);
      }
      var component = __webpack_require__("./decoder_stream");
      p['LZ4_uncompress'] = embed;
    })['call'](this, __webpack_require__('buffer')['Buffer']);
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
        this['options'] = allow || {};
        this['binding'] = this['options']['useJS'] ? $player : helloComponent;
        this['buffer'] = null;
        this['pos'] = 0;
        this['descriptor'] = null;
        this["state"] = container["MAGIC"];
        this["notEnoughData"] = ![];
        this['descriptorStart'] = 0;
        this['streamSize'] = null;
        this['dictId'] = null;
        this["currentStreamChecksum"] = null;
        this["dataBlockSize"] = 0;
        this['skippableSize'] = 0;
      }
      var then = $('stream')['Transform'];
      var $_condition = $('util')["inherits"];
      var pair = $("./static");
      var window = pair['utils'];
      var helloComponent = window['bindings'];
      var $player = $('./binding');
      var container = pair['STATES'];
      var s = pair['SIZES'];
      $_condition(WMCacheControl, then);
      WMCacheControl['prototype']["_transform"] = function(x, canCreateDiscussions, wrongCredsCallback) {
        if (this['skippableSize'] > 0) {
          this['skippableSize'] -= x["length"];
          if (this['skippableSize'] > 0) {
            wrongCredsCallback();
            return;
          x = x['slice'](-this['skippableSize']);
          this["skippableSize"] = 0;
          this['state'] = container['MAGIC'];
        }
        this['buffer'] = this['buffer'] ? res["concat"]([this['buffer'], x], this['buffer']['length'] + x["length"]) : x;
        this['_main'](wrongCredsCallback);
      };
      WMCacheControl['prototype']['emit_Error'] = function(canCreateDiscussions) {
        this['emit']('error', new Error(canCreateDiscussions + " @" + this['pos']));
      };
      WMCacheControl['prototype']['check_Size'] = function(time) {
        var atime = this["buffer"]['length'] - this['pos'];
        if (atime <= 0 || atime < time) {
          if (this["notEnoughData"]) {
            this["emit_Error"]('Unexpected end of LZ4 stream');
          return !![];
        }
        this["pos"] += time;
        return ![];
      };
      WMCacheControl['prototype']['read_MagicNumber'] = function() {
        var size = this['pos'];
        if (this['check_Size'](s['MAGIC'])) {
          return !![];
        }
        var resizeUrl = window['readInt32LE'](this['buffer'], size);
        if ((resizeUrl & 4294967280) === pair["MAGICNUMBER_SKIPPABLE"]) {
          this['state'] = container['SKIP_SIZE'];
          return;
        }
        if (resizeUrl !== pair["MAGICNUMBER"]) {
          this["pos"] = size;
          this['emit_Error']('Invalid magic number: ' + resizeUrl['toString'](16)['toUpperCase']());
          return !![];
        }
        this["state"] = container["DESCRIPTOR"];
      };
      WMCacheControl['prototype']["read_SkippableSize"] = function() {
        var target = this['pos'];
        if (this['check_Size'](s['SKIP_SIZE'])) {
          return !![];
        }
        this['state'] = container["SKIP_DATA"];
        this['skippableSize'] = window["readInt32LE"](this['buffer'], target);
      };
      WMCacheControl["prototype"]["read_Descriptor"] = function() {
        var i = this["pos"];
        if (this['check_Size'](s["DESCRIPTOR"])) {
          return !![];
        }
        this['descriptorStart'] = i;
        var firstByte = this['buffer'][i];
        var firstCharBytes = firstByte >> 6;
        if (firstCharBytes !== pair["VERSION"]) {
          this["pos"] = i;
          this['emit_Error']('Invalid version: ' + firstCharBytes + ' != ' + pair["VERSION"]);
          return !![];
        }
        if (firstByte >> 1 & 1) {
          this['pos'] = i;
          this["emit_Error"]("Reserved bit set");
          return !![];
        }
        var columnName = this["buffer"][i + 1] >> 4 & 7;
        var tuples = pair['blockMaxSizes'][columnName];
        if (tuples === null) {
          this['pos'] = i;
          this["emit_Error"]('Invalid block max size: ' + columnName);
          return !![];
        }
        this['descriptor'] = {
          "blockIndependence" : Boolean(firstByte >> 5 & 1),
          "blockChecksum" : Boolean(firstByte >> 4 & 1),
          "blockMaxSize" : tuples,
          "streamSize" : Boolean(firstByte >> 3 & 1),
          "streamChecksum" : Boolean(firstByte >> 2 & 1),
          "dict" : Boolean(firstByte & 1),
          "dictId" : 0
        };
        this['state'] = container["SIZE"];
      };
      WMCacheControl['prototype']['read_Size'] = function() {
        if (this['descriptor']['streamSize']) {
          var artistTrack = this['pos'];
          if (this['check_Size'](s["SIZE"])) {
            return !![];
          this['streamSize'] = this['buffer']['slice'](artistTrack, artistTrack + 8);
        }
        this["state"] = container['DICTID'];
      };
      WMCacheControl['prototype']['read_DictId'] = function() {
        if (this['descriptor']['dictId']) {
          var target = this['pos'];
          if (this['check_Size'](s['DICTID'])) {
            return !![];
          this['dictId'] = window['readInt32LE'](this['buffer'], target);
        }
        this["state"] = container['DESCRIPTOR_CHECKSUM'];
      };
      WMCacheControl['prototype']["read_DescriptorChecksum"] = function() {
        var i = this['pos'];
        if (this['check_Size'](s['DESCRIPTOR_CHECKSUM'])) {
          return !![];
        }
        var track = this['buffer'][i];
        var lastTrackTitle = window['descriptorChecksum'](this['buffer']['slice'](this['descriptorStart'], i));
        if (lastTrackTitle !== track) {
          this["pos"] = i;
          this['emit_Error']('Invalid stream descriptor checksum');
          return !![];
        }
        this['state'] = container['DATABLOCK_SIZE'];
      };
      WMCacheControl['prototype']['read_DataBlockSize'] = function() {
        var e = this['pos'];
        if (this["check_Size"](s['DATABLOCK_SIZE'])) {
          return !![];
        }
        var res = window['readInt32LE'](this["buffer"], e);
        if (res === pair["EOS"]) {
          this['state'] = container['EOS'];
          return;
        }
        this['dataBlockSize'] = res;
        this["state"] = container["DATABLOCK_DATA"];
      };
      WMCacheControl['prototype']['read_DataBlockData'] = function() {
        var feyenoord = this['pos'];
        var type = this["dataBlockSize"];
        if (type & 2147483648) {
          type = type & 2147483647;
        }
        if (this['check_Size'](type)) {
          return !![];
        }
        this['dataBlock'] = this["buffer"]['slice'](feyenoord, feyenoord + type);
        this['state'] = container['DATABLOCK_CHECKSUM'];
      };
      WMCacheControl["prototype"]["read_DataBlockChecksum"] = function() {
        var _0xfb445c = this['pos'];
        if (this["descriptor"]['blockChecksum']) {
          if (this['check_Size'](s['DATABLOCK_CHECKSUM'])) {
            return !![];
          var reverseValue = window['readInt32LE'](this['buffer'], this['pos'] - 4);
          var editItemKey = window['blockChecksum'](this['dataBlock']);
          if (editItemKey !== reverseValue) {
            this['pos'] = _0xfb445c;
            this['emit_Error']('Invalid block checksum');
            return !![];
        }
        this['state'] = container['DATABLOCK_UNCOMPRESS'];
      };
      WMCacheControl["prototype"]['uncompress_DataBlock'] = function() {
        var value;
        if (this["dataBlockSize"] & 2147483648) {
          value = this['dataBlock'];
        } else {
          value = new res(this['descriptor']['blockMaxSize']);
          var linkTarget = this['binding']['uncompress'](this['dataBlock'], value);
          if (linkTarget < 0) {
            this["emit_Error"]('Invalid data block: ' + -linkTarget);
            return !![];
          if (linkTarget < this['descriptor']["blockMaxSize"]) {
            value = value['slice'](0, linkTarget);
        }
        this['dataBlock'] = null;
        this["push"](value);
        if (this['descriptor']['streamChecksum']) {
          this['currentStreamChecksum'] = window["streamChecksum"](value, this['currentStreamChecksum']);
        }
        this['state'] = container['DATABLOCK_SIZE'];
      };
      WMCacheControl['prototype']['read_EOS'] = function() {
        if (this['descriptor']["streamChecksum"]) {
          var size = this['pos'];
          if (this['check_Size'](s["EOS"])) {
            return !![];
          var resizeUrl = window['readInt32LE'](this['buffer'], size);
          if (resizeUrl !== window['streamChecksum'](null, this['currentStreamChecksum'])) {
            this["pos"] = size;
            this['emit_Error']("Invalid stream checksum: " + resizeUrl['toString'](16)['toUpperCase']());
            return !![];
        }
        this['state'] = container['MAGIC'];
      };
      WMCacheControl['prototype']['_flush'] = function(mmCoreSplitViewBlock) {
        this["notEnoughData"] = !![];
        this['_main'](mmCoreSplitViewBlock);
      };
      WMCacheControl['prototype']["_main"] = function(saveNotifs) {
        var instanceFunc = this["pos"];
        var _0x5e78bf;
        for (; !_0x5e78bf && this['pos'] < this['buffer']['length'];) {
          if (this['state'] === container['MAGIC']) {
            _0x5e78bf = this['read_MagicNumber']();
          if (this['state'] === container["SKIP_SIZE"]) {
            _0x5e78bf = this['read_SkippableSize']();
          if (this['state'] === container["DESCRIPTOR"]) {
            _0x5e78bf = this['read_Descriptor']();
          if (this['state'] === container['SIZE']) {
            _0x5e78bf = this['read_Size']();
          if (this["state"] === container['DICTID']) {
            _0x5e78bf = this['read_DictId']();
          if (this["state"] === container['DESCRIPTOR_CHECKSUM']) {
            _0x5e78bf = this['read_DescriptorChecksum']();
          if (this['state'] === container["DATABLOCK_SIZE"]) {
            _0x5e78bf = this["read_DataBlockSize"]();
          if (this['state'] === container['DATABLOCK_DATA']) {
            _0x5e78bf = this["read_DataBlockData"]();
          if (this['state'] === container['DATABLOCK_CHECKSUM']) {
            _0x5e78bf = this['read_DataBlockChecksum']();
          if (this["state"] === container['DATABLOCK_UNCOMPRESS']) {
            _0x5e78bf = this['uncompress_DataBlock']();
          if (this['state'] === container['EOS']) {
            _0x5e78bf = this['read_EOS']();
        }
        if (this['pos'] > instanceFunc) {
          this["buffer"] = this["buffer"]["slice"](this["pos"]);
          this['pos'] = 0;
        }
        saveNotifs();
      };
      module["exports"] = WMCacheControl;
    })['call'](this, $('buffer')['Buffer']);
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
        c["on"]('data', function(scrollWrapper) {
          $node['push'](scrollWrapper);
        });
        c['end'](options);
        return helper['concat']($node);
      }
      var component = require('./encoder_stream');
      p["LZ4_compress"] = embed;
    })['call'](this, require("buffer")["Buffer"]);
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
        context['call'](this, data);
        var target = data || options;
        if (target !== options) {
          Object["keys"](options)["forEach"](function(name) {
            if (!target['hasOwnProperty'](name)) {
              target[name] = options[name];
        }
        this["options"] = target;
        this['binding'] = this["options"]["useJS"] ? vroot : helloComponent;
        this['compress'] = target['highCompression'] ? this['binding']['compressHC'] : this['binding']['compress'];
        var _0x2b9313 = 0;
        _0x2b9313 = _0x2b9313 | v["VERSION"] << 6;
        _0x2b9313 = _0x2b9313 | (target['blockIndependence'] & 1) << 5;
        _0x2b9313 = _0x2b9313 | (target["blockChecksum"] & 1) << 4;
        _0x2b9313 = _0x2b9313 | (target["streamSize"] & 1) << 3;
        _0x2b9313 = _0x2b9313 | (target['streamChecksum'] & 1) << 2;
        _0x2b9313 = _0x2b9313 | target["dict"] & 1;
        var _0x33e5ca = v['blockMaxSizes']['indexOf'](target['blockMaxSize']);
        if (_0x33e5ca < 0) {
          throw new Error('Invalid blockMaxSize: ' + target["blockMaxSize"]);
        }
        this['descriptor'] = {
          "flg" : _0x2b9313,
          "bd" : (_0x33e5ca & 7) << 4
        };
        this['buffer'] = [];
        this['length'] = 0;
        this['first'] = !![];
        this['checksum'] = null;
      }
      var context = view("stream")["Transform"];
      var filter = view('util')['inherits'];
      var v = view("./static");
      var window = v["utils"];
      var helloComponent = window['bindings'];
      var vroot = view('./binding');
      var s = v['STATES'];
      var values = v['SIZES'];
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
      complete['prototype']['headerSize'] = function() {
        var sitesowners = this['options']['streamSize'] ? values['DESCRIPTOR'] : 0;
        var siteName = this['options']['dict'] ? values['DICTID'] : 0;
        return values["MAGIC"] + 1 + 1 + sitesowners + siteName + 1;
      };
      complete["prototype"]['header'] = function() {
        var stringBase64 = this['headerSize']();
        var b = new Buffer(stringBase64);
        this["state"] = s['MAGIC'];
        b['writeInt32LE'](v['MAGICNUMBER'], 0, !![]);
        this['state'] = s['DESCRIPTOR'];
        var ctx = b['slice'](values['MAGIC'], b["length"] - 1);
        ctx['writeUInt8'](this["descriptor"]['flg'], 0, !![]);
        ctx['writeUInt8'](this['descriptor']["bd"], 1, !![]);
        var y = 2;
        this['state'] = s["SIZE"];
        if (this['options']['streamSize']) {
          ctx['writeInt32LE'](0, y, !![]);
          ctx['writeInt32LE'](this['size'], y + 4, !![]);
          y = y + values['SIZE'];
        }
        this["state"] = s["DICTID"];
        if (this['options']['dict']) {
          ctx['writeInt32LE'](this['dictId'], y, !![]);
          y = y + values['DICTID'];
        }
        this['state'] = s['DESCRIPTOR_CHECKSUM'];
        b['writeUInt8'](window['descriptorChecksum'](ctx), values['MAGIC'] + y, ![]);
        return b;
      };
      complete['prototype']['update_Checksum'] = function(axsPath) {
        this['state'] = s['CHECKSUM_UPDATE'];
        if (this["options"]["streamChecksum"]) {
          this["checksum"] = window['streamChecksum'](axsPath, this["checksum"]);
        }
      };
      complete['prototype']['compress_DataBlock'] = function(filters) {
        this['state'] = s['DATABLOCK_COMPRESS'];
        var suffix = this['options']['blockChecksum'] ? values["DATABLOCK_CHECKSUM"] : 0;
        var _ = this['binding']['compressBound'](filters['length']);
        var buffer = new Buffer(values['DATABLOCK_SIZE'] + _ + suffix);
        var item = buffer["slice"](values["DATABLOCK_SIZE"], values['DATABLOCK_SIZE'] + _);
        var result = this['compress'](filters, item);
        this["state"] = s["DATABLOCK_SIZE"];
        if (result > 0 && result <= this["options"]['blockMaxSize']) {
          buffer['writeUInt32LE'](result, 0, !![]);
          buffer = buffer['slice'](0, values["DATABLOCK_SIZE"] + result + suffix);
        } else {
          buffer['writeInt32LE'](2147483648 | filters['length'], 0, !![]);
          buffer = buffer['slice'](0, values["DATABLOCK_SIZE"] + filters['length'] + suffix);
          filters['copy'](buffer, values['DATABLOCK_SIZE']);
        }
        this['state'] = s['DATABLOCK_CHECKSUM'];
        if (this['options']['blockChecksum']) {
          var harderTypes = buffer['slice'](-suffix);
          harderTypes["writeInt32LE"](window['blockChecksum'](item), 0, !![]);
        }
        this["update_Checksum"](filters);
        this["size"] += filters['length'];
        return buffer;
      };
      complete['prototype']['_transform'] = function(PL$60, canCreateDiscussions, saveNotifs) {
        if (PL$60) {
          this['buffer']["push"](PL$60);
          this['length'] += PL$60["length"];
        }
        if (this['first']) {
          this['push'](this['header']());
          this["first"] = ![];
        }
        var size = this['options']["blockMaxSize"];
        if (this["length"] < size) {
          return saveNotifs();
        }
        var array = Buffer['concat'](this['buffer'], this['length']);
        var i = 0;
        var n = array['length'];
        for (; n >= size; n = n - size, i = i + size) {
          this['push'](this['compress_DataBlock'](array['slice'](i, i + size)));
        }
        if (n > 0) {
          this['buffer'] = [array['slice'](i)];
          this['length'] = this['buffer'][0]['length'];
        } else {
          this["buffer"] = [];
          this['length'] = 0;
        }
        saveNotifs();
      };
      complete['prototype']["_flush"] = function(saveNotifs) {
        if (this['first']) {
          this['push'](this['header']());
          this['first'] = ![];
        }
        if (this['length'] > 0) {
          var button2 = Buffer['concat'](this['buffer'], this['length']);
          this["buffer"] = [];
          this["length"] = 0;
          var button2Component = this['compress_DataBlock'](button2);
          this['push'](button2Component);
        }
        if (this['options']["streamChecksum"]) {
          this['state'] = s["CHECKSUM"];
          var concatBuf = new Buffer(values['EOS'] + values['CHECKSUM']);
          concatBuf['writeInt32LE'](window['streamChecksum'](null, this["checksum"]), values['EOS'], !![]);
        } else {
          concatBuf = new Buffer(values['EOS']);
        }
        this['state'] = s['EOS'];
        concatBuf["writeInt32LE"](v["EOS"], 0, !![]);
        this['push'](concatBuf);
        saveNotifs();
      };
      LoadingState['exports'] = complete;
    })['call'](this, view('buffer')['Buffer']);
  }, {
    "./binding" : 13,
    "./static" : 19,
    "buffer" : 3,
    "stream" : 37,
    "util" : 42
  }],
  18 : [function(make, module, canCreateDiscussions) {
    module['exports'] = make('./static');
    module["exports"]['version'] = '0.5.1';
    module['exports']['createDecoderStream'] = make('./decoder_stream');
    module['exports']['decode'] = make("./decoder")["LZ4_uncompress"];
    module['exports']['createEncoderStream'] = make('./encoder_stream');
    module['exports']['encode'] = make('./encoder')["LZ4_compress"];
    var _0x575979 = module['exports']['utils']['bindings'];
    module['exports']['decodeBlock'] = _0x575979['uncompress'];
    module['exports']['encodeBound'] = _0x575979['compressBound'];
    module['exports']["encodeBlock"] = _0x575979['compress'];
    module["exports"]['encodeBlockHC'] = _0x575979['compressHC'];
  }, {
    "./decoder" : 14,
    "./decoder_stream" : 15,
    "./encoder" : 16,
    "./encoder_stream" : 17,
    "./static" : 19
  }],
  19 : [function(saveNotifs, canCreateDiscussions, loaders) {
    (function(canCreateDiscussions) {
      loaders['MAGICNUMBER'] = 407708164;
      loaders['MAGICNUMBER_BUFFER'] = new canCreateDiscussions(4);
      loaders['MAGICNUMBER_BUFFER']["writeUInt32LE"](loaders["MAGICNUMBER"], 0, ![]);
      loaders['EOS'] = 0;
      loaders['EOS_BUFFER'] = new canCreateDiscussions(4);
      loaders['EOS_BUFFER']["writeUInt32LE"](loaders["EOS"], 0, ![]);
      loaders['VERSION'] = 1;
      loaders['MAGICNUMBER_SKIPPABLE'] = 407710288;
      loaders["blockMaxSizes"] = [null, null, null, null, 64 << 10, 256 << 10, 1 << 20, 4 << 20];
      loaders["extension"] = '.lz4';
      loaders['STATES'] = {
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
    })['call'](this, saveNotifs('buffer')['Buffer']);
  }, {
    "./utils" : 20,
    "buffer" : 3
  }],
  20 : [function(conflictFunc, canCreateDiscussions, result) {
    var replaceShorthand = conflictFunc('xxhashjs');
    var SIMPLE_SELECTOR_SEP = 0;
    result['descriptorChecksum'] = function(selector) {
      return replaceShorthand(selector, SIMPLE_SELECTOR_SEP)['toNumber']() >> 8 & 255;
    };
    result['blockChecksum'] = function(selector) {
      return replaceShorthand(selector, SIMPLE_SELECTOR_SEP)['toNumber']();
    };
    result["streamChecksum"] = function(data, selector) {
      if (data === null) {
        return selector['digest']()['toNumber']();
      }
      if (selector === null) {
        selector = replaceShorthand(SIMPLE_SELECTOR_SEP);
      }
      return selector["update"](data);
    };
    result['readInt32LE'] = function(input_8_bit_int_buffer, index) {
      return input_8_bit_int_buffer[index] | input_8_bit_int_buffer[index + 1] << 8 | input_8_bit_int_buffer[index + 2] << 16 | input_8_bit_int_buffer[index + 3] << 24;
    };
    result["bindings"] = conflictFunc('./binding');
  }, {
    "./binding" : 13,
    "xxhashjs" : 46
  }],
  21 : [function(saveNotifs, res, canCreateDiscussions) {
    (function(p) {
      function setup(input, obj, key, valuePairs) {
        if (typeof input !== 'function') {
          throw new TypeError('"callback" argument must be a function');
        }
        var end = arguments['length'];
        var obj;
        var i;
        switch(end) {
          case 0:
          case 1:
            return p['nextTick'](input);
          case 2:
            return p['nextTick'](function createSubItems() {
              input['call'](null, obj);
          case 3:
            return p["nextTick"](function getAccessTypeFromHookName() {
              input["call"](null, obj, key);
          case 4:
            return p['nextTick'](function createSubItems() {
              input['call'](null, obj, key, valuePairs);
          default:
            obj = new Array(end - 1);
            i = 0;
            for (; i < obj['length'];) {
              obj[i++] = arguments[i];
            return p['nextTick'](function createSubItems() {
              input['apply'](null, obj);
        }
      }
      if (!p['version'] || p['version']['indexOf']('v0.') === 0 || p['version']['indexOf']("v1.") === 0 && p["version"]['indexOf']("v1.8.") !== 0) {
        res['exports'] = setup;
      } else {
        res["exports"] = p['nextTick'];
      }
    })['call'](this, saveNotifs('_process'));
  }, {
    "_process" : 22
  }],
  22 : [function(isSlidingUp, canCreateDiscussions, dontForceConstraints) {
    function defaultSetTimout() {
      throw new Error("setTimeout has not been defined");
    }
    function defaultClearTimeout() {
      throw new Error('clearTimeout has not been defined');
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
          return cachedSetTimeout['call'](null, fun, 0);
        } catch (_0x1efdb4) {
          return cachedSetTimeout['call'](this, fun, 0);
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
          return cachedClearTimeout['call'](null, marker);
        } catch (_0x6c95cb) {
          return cachedClearTimeout['call'](this, marker);
        }
      }
    }
    function cleanUpNextTick() {
      if (!service_descriptions || !onsuccess) {
        return;
      }
      service_descriptions = ![];
      if (onsuccess['length']) {
        params = onsuccess["concat"](params);
      } else {
        jsonGraphEnvelopeIndex = -1;
      }
      if (params['length']) {
        drainQueue();
      }
    }
    function drainQueue() {
      if (service_descriptions) {
        return;
      }
      var timeout = runTimeout(cleanUpNextTick);
      service_descriptions = !![];
      var preventDefault = params['length'];
      for (; preventDefault;) {
        onsuccess = params;
        params = [];
        for (; ++jsonGraphEnvelopeIndex < preventDefault;) {
          if (onsuccess) {
            onsuccess[jsonGraphEnvelopeIndex]['run']();
        }
        jsonGraphEnvelopeIndex = -1;
        preventDefault = params['length'];
      }
      onsuccess = null;
      service_descriptions = ![];
      runClearTimeout(timeout);
    }
    function Test(testName, module) {
      this['fun'] = testName;
      this['array'] = module;
    }
    function value() {
    }
    var p = canCreateDiscussions['exports'] = {};
    var cachedSetTimeout;
    var cachedClearTimeout;
    (function() {
      try {
        if (typeof setTimeout === 'function') {
          cachedSetTimeout = setTimeout;
        } else {
          cachedSetTimeout = defaultSetTimout;
        }
      } catch (_0x33c54e) {
        cachedSetTimeout = defaultSetTimout;
      }
      try {
        if (typeof clearTimeout === 'function') {
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
      var properties = new Array(arguments['length'] - 1);
      if (arguments['length'] > 1) {
        var i = 1;
        for (; i < arguments["length"]; i++) {
          properties[i - 1] = arguments[i];
        }
      }
      params['push'](new Test(dupeNode, properties));
      if (params['length'] === 1 && !service_descriptions) {
        runTimeout(drainQueue);
      }
    };
    Test["prototype"]["run"] = function() {
      this['fun']['apply'](null, this['array']);
    };
    p['title'] = 'browser';
    p["browser"] = !![];
    p['env'] = {};
    p['argv'] = [];
    p['version'] = "";
    p['versions'] = {};
    p["on"] = value;
    p['addListener'] = value;
    p['once'] = value;
    p['off'] = value;
    p["removeListener"] = value;
    p['removeAllListeners'] = value;
    p["emit"] = value;
    p["prependListener"] = value;
    p['prependOnceListener'] = value;
    p['listeners'] = function(canCreateDiscussions) {
      return [];
    };
    p["binding"] = function(canCreateDiscussions) {
      throw new Error('process.binding is not supported');
    };
    p['cwd'] = function() {
      return "/";
    };
    p['chdir'] = function(canCreateDiscussions) {
      throw new Error('process.chdir is not supported');
    };
    p['umask'] = function() {
      return 0;
    };
  }, {}],
  23 : [function(require, tasks, isSlidingUp) {
    tasks['exports'] = require('./lib/_stream_duplex.js');
  }, {
    "./lib/_stream_duplex.js" : 24
  }],
  24 : [function(require, global, canCreateDiscussions) {
    function WMCacheControl(allow) {
      if (!(this instanceof WMCacheControl)) {
        return new WMCacheControl(allow);
      }
      format['call'](this, allow);
      obj['call'](this, allow);
      if (allow && allow["readable"] === ![]) {
        this["readable"] = ![];
      }
      if (allow && allow['writable'] === ![]) {
        this['writable'] = ![];
      }
      this['allowHalfOpen'] = !![];
      if (allow && allow['allowHalfOpen'] === ![]) {
        this['allowHalfOpen'] = ![];
      }
      this['once']('end', checkKey);
    }
    function checkKey() {
      if (this["allowHalfOpen"] || this["_writableState"]['ended']) {
        return;
      }
      EffectChain(_handleIconClick, this);
    }
    function _handleIconClick(tab) {
      tab['end']();
    }
    function constructor(position, extend) {
      var key = 0;
      var val = position['length'];
      for (; key < val; key++) {
        extend(position[key], key);
      }
    }
    var EffectChain = require('process-nextick-args');
    var removeParentAggs = Object["keys"] || function(targets) {
      var res = [];
      var el;
      for (el in targets) {
        res["push"](el);
      }
      return res;
    };
    global['exports'] = WMCacheControl;
    var lang = require('core-util-is');
    lang['inherits'] = require("inherits");
    var format = require('./_stream_readable');
    var obj = require("./_stream_writable");
    lang['inherits'](WMCacheControl, format);
    var PL$13 = removeParentAggs(obj['prototype']);
    var PL$17 = 0;
    for (; PL$17 < PL$13['length']; PL$17++) {
      var methodName = PL$13[PL$17];
      if (!WMCacheControl["prototype"][methodName]) {
        WMCacheControl['prototype'][methodName] = obj["prototype"][methodName];
      }
    }
    Object['defineProperty'](WMCacheControl['prototype'], 'destroyed', {
      "get" : function() {
        if (this['_readableState'] === undefined || this["_writableState"] === undefined) {
          return ![];
        }
        return this['_readableState']["destroyed"] && this['_writableState']['destroyed'];
      },
      "set" : function(mymuted) {
        if (this["_readableState"] === undefined || this['_writableState'] === undefined) {
          return;
        }
        this['_readableState']['destroyed'] = mymuted;
        this['_writableState']['destroyed'] = mymuted;
      }
    });
    WMCacheControl['prototype']['_destroy'] = function(renderer, mmCoreSplitViewBlock) {
      this['push'](null);
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
      opts['call'](this, size);
    }
    beacons['exports'] = data;
    var opts = $('./_stream_transform');
    var tools = $('core-util-is');
    tools["inherits"] = $('inherits');
    tools['inherits'](data, opts);
    data['prototype']['_transform'] = function(step, canCreateDiscussions, commentFunction) {
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
        return options['isBuffer'](value) || value instanceof BigNumber;
      }
      function addListener(el, type, fn) {
        if (typeof el['prependListener'] === 'function') {
          return el['prependListener'](type, fn);
        } else {
          if (!el['_events'] || !el['_events'][type]) {
            el["on"](type, fn);
            if (isArray(el["_events"][type])) {
              el['_events'][type]["unshift"](fn);
              el['_events'][type] = [fn, el["_events"][type]];
        }
      }
      function ReadableState(options, stream) {
        connectionFn = connectionFn || require('./_stream_duplex');
        options = options || {};
        this['objectMode'] = !!options['objectMode'];
        if (stream instanceof connectionFn) {
          this['objectMode'] = this['objectMode'] || !!options["readableObjectMode"];
        }
        var latinCharacter = options['highWaterMark'];
        var character = this['objectMode'] ? 16 : 16 * 1024;
        this['highWaterMark'] = latinCharacter || latinCharacter === 0 ? latinCharacter : character;
        this['highWaterMark'] = Math["floor"](this['highWaterMark']);
        this['buffer'] = new EffectChain;
        this["length"] = 0;
        this["pipes"] = null;
        this["pipesCount"] = 0;
        this['flowing'] = null;
        this['ended'] = ![];
        this['endEmitted'] = ![];
        this['reading'] = ![];
        this['sync'] = !![];
        this['needReadable'] = ![];
        this['emittedReadable'] = ![];
        this['readableListening'] = ![];
        this['resumeScheduled'] = ![];
        this["destroyed"] = ![];
        this["defaultEncoding"] = options['defaultEncoding'] || 'utf8';
        this["awaitDrain"] = 0;
        this['readingMore'] = ![];
        this['decoder'] = null;
        this['encoding'] = null;
        if (options["encoding"]) {
          if (!Logger) {
            Logger = require("string_decoder/")['StringDecoder'];
          this['decoder'] = new Logger(options["encoding"]);
          this['encoding'] = options["encoding"];
        }
      }
      function Readable(options) {
        connectionFn = connectionFn || require("./_stream_duplex");
        if (!(this instanceof Readable)) {
          return new Readable(options);
        }
        this["_readableState"] = new ReadableState(options, this);
        this['readable'] = !![];
        if (options) {
          if (typeof options['read'] === 'function') {
            this['_read'] = options["read"];
          if (typeof options['destroy'] === 'function') {
            this["_destroy"] = options['destroy'];
        }
        format['call'](this);
      }
      function validate(params, value, name, force, location) {
        var data = params['_readableState'];
        if (value === null) {
          data["reading"] = ![];
          install(params, data);
        } else {
          var res;
          if (!location) {
            res = set(data, value);
          if (res) {
            params['emit']('error', res);
            if (data['objectMode'] || value && value["length"] > 0) {
              if (typeof value !== "string" && !data['objectMode'] && Object['getPrototypeOf'](value) !== options["prototype"]) {
                value = runStack(value);
              if (force) {
                if (data['endEmitted']) {
                  params['emit']('error', new Error('stream.unshift() after end event'));
                  parseBody(params, data, value, !![]);
                if (data['ended']) {
                  params['emit']("error", new Error('stream.push() after EOF'));
                  data['reading'] = ![];
                  if (data["decoder"] && !name) {
                    value = data['decoder']["write"](value);
                    if (data['objectMode'] || value['length'] !== 0) {
                      parseBody(params, data, value, ![]);
                      create(params, data);
                    parseBody(params, data, value, ![]);
              if (!force) {
                data['reading'] = ![];
        }
        return next(data);
      }
      function parseBody(options, data, value, length) {
        if (data["flowing"] && data['length'] === 0 && !data['sync']) {
          options['emit']("data", value);
          options["read"](0);
        } else {
          data['length'] += data['objectMode'] ? 1 : value['length'];
          if (length) {
            data['buffer']['unshift'](value);
            data['buffer']["push"](value);
          if (data['needReadable']) {
            find(options);
        }
        create(options, data);
      }
      function set(dirname, filter) {
        var e;
        if (!changeAlphaFilter(filter) && typeof filter !== 'string' && filter !== undefined && !dirname['objectMode']) {
          e = new TypeError('Invalid non-string/buffer chunk');
        }
        return e;
      }
      function next(height) {
        return !height['ended'] && (height['needReadable'] || height['length'] < height["highWaterMark"] || height["length"] === 0);
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
        if (value <= 0 || array['length'] === 0 && array["ended"]) {
          return 0;
        }
        if (array['objectMode']) {
          return 1;
        }
        if (value !== value) {
          if (array["flowing"] && array['length']) {
            return array['buffer']["head"]['data']["length"];
            return array['length'];
        }
        if (value > array['highWaterMark']) {
          array['highWaterMark'] = defaultValue(value);
        }
        if (value <= array["length"]) {
          return value;
        }
        if (!array['ended']) {
          array['needReadable'] = !![];
          return 0;
        }
        return array['length'];
      }
      function install(obj, context) {
        if (context["ended"]) {
          return;
        }
        if (context['decoder']) {
          var script = context["decoder"]['end']();
          if (script && script['length']) {
            context['buffer']['push'](script);
            context['length'] += context['objectMode'] ? 1 : script["length"];
        }
        context['ended'] = !![];
        find(obj);
      }
      function find(o) {
        var m = o['_readableState'];
        m['needReadable'] = ![];
        if (!m["emittedReadable"]) {
          debug("emitReadable", m['flowing']);
          m['emittedReadable'] = !![];
          if (m["sync"]) {
            log(out, o);
            out(o);
        }
      }
      function out(type) {
        debug('emit readable');
        type['emit']('readable');
        callback(type);
      }
      function create(obj, type) {
        if (!type['readingMore']) {
          type["readingMore"] = !![];
          log(load, obj, type);
        }
      }
      function load(url, section) {
        var sectionKey = section['length'];
        for (; !section["reading"] && !section['flowing'] && !section['ended'] && section['length'] < section["highWaterMark"];) {
          debug('maybeReadMore read 0');
          url['read'](0);
          if (sectionKey === section['length']) {
            break;
            sectionKey = section['length'];
        }
        section['readingMore'] = ![];
      }
      function filter(o) {
        return function() {
          var m = o['_readableState'];
          debug('pipeOnDrain', m['awaitDrain']);
          if (m['awaitDrain']) {
            m['awaitDrain']--;
          if (m['awaitDrain'] === 0 && get(o, 'data')) {
            m['flowing'] = !![];
            callback(o);
        };
      }
      function triggeredTraps(boardManager) {
        debug("readable nexttick read 0");
        boardManager['read'](0);
      }
      function googleImageSize(image, width) {
        if (!width['resumeScheduled']) {
          width['resumeScheduled'] = !![];
          log(thunk, image, width);
        }
      }
      function thunk(fn, sel) {
        if (!sel['reading']) {
          debug('resume read 0');
          fn['read'](0);
        }
        sel['resumeScheduled'] = ![];
        sel['awaitDrain'] = 0;
        fn['emit']('resume');
        callback(fn);
        if (sel["flowing"] && !sel["reading"]) {
          fn['read'](0);
        }
      }
      function callback(data) {
        var methods = data["_readableState"];
        debug('flow', methods['flowing']);
        for (; methods['flowing'] && data['read']() !== null;) {
        }
      }
      function process(value, arr) {
        if (arr['length'] === 0) {
          return null;
        }
        var result;
        if (arr["objectMode"]) {
          result = arr['buffer']['shift']();
        } else {
          if (!value || value >= arr["length"]) {
            if (arr['decoder']) {
              result = arr['buffer']["join"]("");
              if (arr['buffer']['length'] === 1) {
                result = arr['buffer']['head']["data"];
                result = arr['buffer']["concat"](arr['length']);
            arr['buffer']["clear"]();
            result = fn(value, arr['buffer'], arr['decoder']);
        }
        return result;
      }
      function fn(result, data, err) {
        var doc;
        if (result < data['head']["data"]['length']) {
          doc = data['head']["data"]['slice'](0, result);
          data["head"]['data'] = data['head']['data']['slice'](result);
        } else {
          if (result === data["head"]['data']['length']) {
            doc = data["shift"]();
            doc = err ? done(result, data) : success(result, data);
        }
        return doc;
      }
      function done(size, options) {
        var value = options['head'];
        var _0x5e0e75 = 1;
        var result = value["data"];
        size = size - result['length'];
        for (; value = value['next'];) {
          var data = value['data'];
          var index = size > data['length'] ? data['length'] : size;
          if (index === data['length']) {
            result = result + data;
            result = result + data['slice'](0, size);
          size = size - index;
          if (size === 0) {
            if (index === data['length']) {
              ++_0x5e0e75;
              if (value['next']) {
                options['head'] = value['next'];
                options['head'] = options["tail"] = null;
              options['head'] = value;
              value['data'] = data['slice'](index);
            break;
          ++_0x5e0e75;
        }
        options['length'] -= _0x5e0e75;
        return result;
      }
      function success(index, buffer) {
        var promise = options["allocUnsafe"](index);
        var data = buffer["head"];
        var _0x5428a9 = 1;
        data['data']['copy'](promise);
        index = index - data['data']['length'];
        for (; data = data['next'];) {
          var result = data["data"];
          var i = index > result['length'] ? result["length"] : index;
          result['copy'](promise, promise['length'] - index, 0, i);
          index = index - i;
          if (index === 0) {
            if (i === result["length"]) {
              ++_0x5428a9;
              if (data['next']) {
                buffer['head'] = data['next'];
                buffer["head"] = buffer["tail"] = null;
              buffer['head'] = data;
              data['data'] = result['slice'](i);
            break;
          ++_0x5428a9;
        }
        buffer['length'] -= _0x5428a9;
        return promise;
      }
      function usageOne(command) {
        var url = command["_readableState"];
        if (url['length'] > 0) {
          throw new Error('"endReadable()" called on non-empty stream');
        }
        if (!url['endEmitted']) {
          url['ended'] = !![];
          log(constructor, url, command);
        }
      }
      function constructor(request_tweet, PL$5) {
        if (!request_tweet['endEmitted'] && request_tweet['length'] === 0) {
          request_tweet['endEmitted'] = !![];
          PL$5['readable'] = ![];
          PL$5["emit"]("end");
        }
      }
      function decryptDownload(data, callback) {
        var ticket = 0;
        var passid = data['length'];
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
        return -1;
      }
      var log = require('process-nextick-args');
      canCreateDiscussions['exports'] = Readable;
      var isArray = require("isarray");
      var connectionFn;
      Readable['ReadableState'] = ReadableState;
      var _0x31e997 = require('events')["EventEmitter"];
      var get = function(type, step) {
        return type['listeners'](step)['length'];
      };
      var format = require('./internal/streams/stream');
      var options = require('safe-buffer')["Buffer"];
      var BigNumber = isSlidingUp['Uint8Array'] || function() {
      };
      var lang = require('core-util-is');
      lang["inherits"] = require('inherits');
      var TagHourlyStat = require('util');
      var debug = void 0;
      if (TagHourlyStat && TagHourlyStat['debuglog']) {
        debug = TagHourlyStat["debuglog"]('stream');
      } else {
        debug = function() {
        };
      }
      var EffectChain = require('./internal/streams/BufferList');
      var CheckDailyStat = require('./internal/streams/destroy');
      var Logger;
      lang['inherits'](Readable, format);
      var events = ['error', 'close', "destroy", 'pause', "resume"];
      Object["defineProperty"](Readable['prototype'], 'destroyed', {
        "get" : function() {
          if (this['_readableState'] === undefined) {
            return ![];
          return this['_readableState']['destroyed'];
        },
        "set" : function(mymuted) {
          if (!this['_readableState']) {
            return;
          this['_readableState']['destroyed'] = mymuted;
        }
      });
      Readable['prototype']['destroy'] = CheckDailyStat['destroy'];
      Readable['prototype']["_undestroy"] = CheckDailyStat["undestroy"];
      Readable['prototype']['_destroy'] = function(notifications, saveNotifs) {
        this['push'](null);
        saveNotifs(notifications);
      };
      Readable['prototype']['push'] = function(message, offset) {
        var offsets = this["_readableState"];
        var propFullName;
        if (!offsets['objectMode']) {
          if (typeof message === "string") {
            offset = offset || offsets["defaultEncoding"];
            if (offset !== offsets['encoding']) {
              message = options['from'](message, offset);
              offset = "";
            propFullName = !![];
        } else {
          propFullName = !![];
        }
        return validate(this, message, offset, ![], propFullName);
      };
      Readable["prototype"]["unshift"] = function(name) {
        return validate(this, name, null, !![], ![]);
      };
      Readable['prototype']["isPaused"] = function() {
        return this["_readableState"]['flowing'] === ![];
      };
      Readable["prototype"]["setEncoding"] = function(name) {
        if (!Logger) {
          Logger = require('string_decoder/')['StringDecoder'];
        }
        this['_readableState']["decoder"] = new Logger(name);
        this['_readableState']['encoding'] = name;
        return this;
      };
      var valueBlue = 8388608;
      Readable['prototype']["read"] = function(key) {
        debug("read", key);
        key = parseInt(key, 10);
        var data = this['_readableState'];
        var item = key;
        if (key !== 0) {
          data['emittedReadable'] = ![];
        }
        if (key === 0 && data["needReadable"] && (data['length'] >= data['highWaterMark'] || data["ended"])) {
          debug('read: emitReadable', data['length'], data['ended']);
          if (data["length"] === 0 && data['ended']) {
            usageOne(this);
            find(this);
          return null;
        }
        key = merge(key, data);
        if (key === 0 && data['ended']) {
          if (data['length'] === 0) {
            usageOne(this);
          return null;
        }
        var static_ip = data['needReadable'];
        debug("need readable", static_ip);
        if (data['length'] === 0 || data["length"] - key < data['highWaterMark']) {
          static_ip = !![];
          debug('length less than watermark', static_ip);
        }
        if (data['ended'] || data['reading']) {
          static_ip = ![];
          debug("reading or ended", static_ip);
        } else {
          if (static_ip) {
            debug('do read');
            data['reading'] = !![];
            data['sync'] = !![];
            if (data['length'] === 0) {
              data['needReadable'] = !![];
            this['_read'](data['highWaterMark']);
            data['sync'] = ![];
            if (!data['reading']) {
              key = merge(item, data);
        }
        var event;
        if (key > 0) {
          event = process(key, data);
        } else {
          event = null;
        }
        if (event === null) {
          data['needReadable'] = !![];
          key = 0;
        } else {
          data['length'] -= key;
        }
        if (data['length'] === 0) {
          if (!data['ended']) {
            data['needReadable'] = !![];
          if (item !== key && data["ended"]) {
            usageOne(this);
        }
        if (event !== null) {
          this['emit']('data', event);
        }
        return event;
      };
      Readable['prototype']['_read'] = function(canCreateDiscussions) {
        this['emit']('error', new Error("_read() is not implemented"));
      };
      Readable['prototype']['pipe'] = function(value, changesIdentifyUser) {
        function listener(type, metadata) {
          debug("onunpipe");
          if (type === o) {
            if (metadata && metadata['hasUnpiped'] === ![]) {
              metadata['hasUnpiped'] = !![];
              next();
        }
        function lower() {
          debug('onend');
          value['end']();
        }
        function next() {
          debug('cleanup');
          value["removeListener"]('close', _listener);
          value['removeListener']('finish', Sync);
          value["removeListener"]("drain", fn);
          value['removeListener']("error", start);
          value['removeListener']('unpipe', listener);
          o['removeListener']("end", lower);
          o['removeListener']('end', call);
          o['removeListener']('data', type);
          _0x39e513 = !![];
          if (data["awaitDrain"] && (!value["_writableState"] || value['_writableState']['needDrain'])) {
            fn();
        }
        function type(data) {
          debug('ondata');
          isLoginStateWithSession = ![];
          var mm_login = value['write'](data);
          if (![] === mm_login && !isLoginStateWithSession) {
            if ((data['pipesCount'] === 1 && data["pipes"] === value || data["pipesCount"] > 1 && resolve(data['pipes'], value) !== -1) && !_0x39e513) {
              debug('false write response, pause', o['_readableState']['awaitDrain']);
              o['_readableState']['awaitDrain']++;
              isLoginStateWithSession = !![];
            o['pause']();
        }
        function start(activity) {
          debug('onerror', activity);
          call();
          value['removeListener']("error", start);
          if (get(value, 'error') === 0) {
            value["emit"]('error', activity);
        }
        function _listener() {
          value['removeListener']('finish', Sync);
          call();
        }
        function Sync() {
          debug('onfinish');
          value["removeListener"]('close', _listener);
          call();
        }
        function call() {
          debug('unpipe');
          o["unpipe"](value);
        }
        var o = this;
        var data = this["_readableState"];
        switch(data['pipesCount']) {
          case 0:
            data['pipes'] = value;
            break;
          case 1:
            data['pipes'] = [data['pipes'], value];
            break;
          default:
            data['pipes']['push'](value);
            break;
        }
        data['pipesCount'] += 1;
        debug('pipe count=%d opts=%j', data['pipesCount'], changesIdentifyUser);
        var args = (!changesIdentifyUser || changesIdentifyUser['end'] !== ![]) && value !== second['stdout'] && value !== second['stderr'];
        var method = args ? lower : call;
        if (data['endEmitted']) {
          log(method);
        } else {
          o["once"]('end', method);
        }
        value["on"]('unpipe', listener);
        var fn = filter(o);
        value["on"]('drain', fn);
        var _0x39e513 = ![];
        var isLoginStateWithSession = ![];
        o["on"]('data', type);
        addListener(value, 'error', start);
        value['once']('close', _listener);
        value['once']('finish', Sync);
        value['emit']("pipe", o);
        if (!data["flowing"]) {
          debug("pipe resume");
          o["resume"]();
        }
        return value;
      };
      Readable['prototype']['unpipe'] = function(value) {
        var data = this['_readableState'];
        var unpipeInfo = {
          "hasUnpiped" : ![]
        };
        if (data['pipesCount'] === 0) {
          return this;
        }
        if (data["pipesCount"] === 1) {
          if (value && value !== data["pipes"]) {
            return this;
          if (!value) {
            value = data['pipes'];
          data["pipes"] = null;
          data["pipesCount"] = 0;
          data['flowing'] = ![];
          if (value) {
            value['emit']("unpipe", this, unpipeInfo);
          return this;
        }
        if (!value) {
          var active_tags = data['pipes'];
          var i = data['pipesCount'];
          data["pipes"] = null;
          data['pipesCount'] = 0;
          data["flowing"] = ![];
          var ii = 0;
          for (; ii < i; ii++) {
            active_tags[ii]['emit']('unpipe', this, unpipeInfo);
          return this;
        }
        var streams = resolve(data["pipes"], value);
        if (streams === -1) {
          return this;
        }
        data['pipes']["splice"](streams, 1);
        data['pipesCount'] -= 1;
        if (data['pipesCount'] === 1) {
          data['pipes'] = data["pipes"][0];
        }
        value['emit']('unpipe', this, unpipeInfo);
        return this;
      };
      Readable['prototype']["on"] = function(dataSrc, key) {
        var invalidateFromCache = format['prototype']["on"]["call"](this, dataSrc, key);
        if (dataSrc === "data") {
          if (this["_readableState"]["flowing"] !== ![]) {
            this['resume']();
        } else {
          if (dataSrc === 'readable') {
            var _0x1fe884 = this['_readableState'];
            if (!_0x1fe884["endEmitted"] && !_0x1fe884['readableListening']) {
              _0x1fe884['readableListening'] = _0x1fe884['needReadable'] = !![];
              _0x1fe884['emittedReadable'] = ![];
              if (!_0x1fe884['reading']) {
                log(triggeredTraps, this);
                if (_0x1fe884['length']) {
                  find(this);
        }
        return invalidateFromCache;
      };
      Readable['prototype']["addListener"] = Readable['prototype']["on"];
      Readable['prototype']["resume"] = function() {
        var size = this['_readableState'];
        if (!size["flowing"]) {
          debug('resume');
          size['flowing'] = !![];
          googleImageSize(this, size);
        }
        return this;
      };
      Readable['prototype']['pause'] = function() {
        debug('call pause flowing=%j', this['_readableState']['flowing']);
        if (![] !== this["_readableState"]['flowing']) {
          debug("pause");
          this['_readableState']['flowing'] = ![];
          this['emit']('pause');
        }
        return this;
      };
      Readable["prototype"]["wrap"] = function(o) {
        var net = this['_readableState'];
        var _0x153e8b = ![];
        var PL$4 = this;
        o["on"]('end', function() {
          debug("wrapped end");
          if (net["decoder"] && !net['ended']) {
            var PL$12 = net['decoder']['end']();
            if (PL$12 && PL$12['length']) {
              PL$4["push"](PL$12);
          PL$4["push"](null);
        });
        o["on"]('data', function(tile) {
          debug('wrapped data');
          if (net['decoder']) {
            tile = net['decoder']['write'](tile);
          if (net['objectMode'] && (tile === null || tile === undefined)) {
            return;
            if (!net['objectMode'] && (!tile || !tile['length'])) {
              return;
          var objectsThere = PL$4['push'](tile);
          if (!objectsThere) {
            _0x153e8b = !![];
            o['pause']();
        });
        var prop;
        for (prop in o) {
          if (this[prop] === undefined && typeof o[prop] === 'function') {
            this[prop] = function(name) {
              return function() {
                return o[name]['apply'](o, arguments);
        }
        var type = 0;
        for (; type < events['length']; type++) {
          o["on"](events[type], PL$4['emit']['bind'](PL$4, events[type]));
        }
        PL$4['_read'] = function(supporterL) {
          debug('wrapped _read', supporterL);
          if (_0x153e8b) {
            _0x153e8b = ![];
            o['resume']();
        };
        return PL$4;
      };
      Readable['_fromList'] = process;
    })['call'](this, require('_process'), typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : typeof window !== "undefined" ? window : {});
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
      this['afterTransform'] = function(manifest, e) {
        return run(data, manifest, e);
      };
      this['needTransform'] = ![];
      this['transforming'] = ![];
      this['writecb'] = null;
      this["writechunk"] = null;
      this['writeencoding'] = null;
    }
    function run(args, view, message) {
      var commands = args["_transformState"];
      commands['transforming'] = ![];
      var action = commands['writecb'];
      if (!action) {
        return args['emit']("error", new Error('write callback called multiple times'));
      }
      commands['writechunk'] = null;
      commands['writecb'] = null;
      if (message !== null && message !== undefined) {
        args['push'](message);
      }
      action(view);
      var options = args["_readableState"];
      options['reading'] = ![];
      if (options["needReadable"] || options['length'] < options["highWaterMark"]) {
        args['_read'](options['highWaterMark']);
      }
    }
    function init(selector) {
      if (!(this instanceof init)) {
        return new init(selector);
      }
      boooom['call'](this, selector);
      this['_transformState'] = new joHTML(this);
      var self = this;
      this["_readableState"]["needReadable"] = !![];
      this["_readableState"]["sync"] = ![];
      if (selector) {
        if (typeof selector['transform'] === "function") {
          this['_transform'] = selector['transform'];
        }
        if (typeof selector['flush'] === 'function') {
          this['_flush'] = selector['flush'];
        }
      }
      this['once']('prefinish', function() {
        if (typeof this['_flush'] === 'function') {
          this["_flush"](function(value, num) {
            process(self, value, num);
        } else {
          process(self);
        }
      });
    }
    function process(self, context, data) {
      if (context) {
        return self["emit"]('error', context);
      }
      if (data !== null && data !== undefined) {
        self['push'](data);
      }
      var attrs = self['_writableState'];
      var ownVal = self['_transformState'];
      if (attrs["length"]) {
        throw new Error("Calling transform done when ws.length != 0");
      }
      if (ownVal['transforming']) {
        throw new Error('Calling transform done when still transforming');
      }
      return self['push'](null);
    }
    a['exports'] = init;
    var boooom = render('./_stream_duplex');
    var result = render('core-util-is');
    result['inherits'] = render('inherits');
    result['inherits'](init, boooom);
    init["prototype"]['push'] = function(mmCoreSplitViewBlock, mmaPushNotificationsComponent) {
      this['_transformState']['needTransform'] = ![];
      return boooom['prototype']['push']['call'](this, mmCoreSplitViewBlock, mmaPushNotificationsComponent);
    };
    init["prototype"]["_transform"] = function(canCreateDiscussions, isSlidingUp, dontForceConstraints) {
      throw new Error('_transform() is not implemented');
    };
    init['prototype']['_write'] = function(i, name, callback) {
      var farmRoleChefSettings = this['_transformState'];
      farmRoleChefSettings['writecb'] = callback;
      farmRoleChefSettings['writechunk'] = i;
      farmRoleChefSettings['writeencoding'] = name;
      if (!farmRoleChefSettings['transforming']) {
        var value = this['_readableState'];
        if (farmRoleChefSettings['needTransform'] || value["needReadable"] || value["length"] < value["highWaterMark"]) {
          this['_read'](value['highWaterMark']);
        }
      }
    };
    init['prototype']['_read'] = function(canCreateDiscussions) {
      var _0x4ed30e = this['_transformState'];
      if (_0x4ed30e["writechunk"] !== null && _0x4ed30e['writecb'] && !_0x4ed30e['transforming']) {
        _0x4ed30e["transforming"] = !![];
        this['_transform'](_0x4ed30e['writechunk'], _0x4ed30e["writeencoding"], _0x4ed30e["afterTransform"]);
      } else {
        _0x4ed30e['needTransform'] = !![];
      }
    };
    init["prototype"]['_destroy'] = function(mmCoreSplitViewBlock, saveNotifs) {
      var PL$12 = this;
      boooom['prototype']["_destroy"]['call'](this, mmCoreSplitViewBlock, function(notifications) {
        saveNotifs(notifications);
        PL$12['emit']("close");
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
        this['chunk'] = index;
        this['encoding'] = isSlidingUp;
        this['callback'] = $cont;
        this['next'] = null;
      }
      function Collection(data) {
        var start = this;
        this['next'] = null;
        this['entry'] = null;
        this['finish'] = function() {
          build(start, data);
        };
      }
      function create_youtube_embeds(data) {
        return stack['from'](data);
      }
      function checkAuthUserReplied(data) {
        return stack['isBuffer'](data) || data instanceof Stream;
      }
      function SIZE_160x120() {
      }
      function initialize(url, args) {
        connectionFn = connectionFn || require('./_stream_duplex');
        url = url || {};
        this["objectMode"] = !!url['objectMode'];
        if (args instanceof connectionFn) {
          this['objectMode'] = this["objectMode"] || !!url['writableObjectMode'];
        }
        var latinCharacter = url['highWaterMark'];
        var character = this['objectMode'] ? 16 : 16 * 1024;
        this["highWaterMark"] = latinCharacter || latinCharacter === 0 ? latinCharacter : character;
        this['highWaterMark'] = Math['floor'](this['highWaterMark']);
        this['finalCalled'] = ![];
        this['needDrain'] = ![];
        this["ending"] = ![];
        this['ended'] = ![];
        this['finished'] = ![];
        this["destroyed"] = ![];
        var _0xe1bbc6 = url['decodeStrings'] === ![];
        this['decodeStrings'] = !_0xe1bbc6;
        this["defaultEncoding"] = url['defaultEncoding'] || 'utf8';
        this['length'] = 0;
        this["writing"] = ![];
        this["corked"] = 0;
        this['sync'] = !![];
        this['bufferProcessing'] = ![];
        this['onwrite'] = function(data) {
          load(args, data);
        };
        this['writecb'] = null;
        this["writelen"] = 0;
        this['bufferedRequest'] = null;
        this['lastBufferedRequest'] = null;
        this["pendingcb"] = 0;
        this['prefinished'] = ![];
        this['errorEmitted'] = ![];
        this['bufferedRequestCount'] = 0;
        this["corkedRequestsFree"] = new Collection(this);
      }
      function data(size) {
        connectionFn = connectionFn || require('./_stream_duplex');
        if (!actions['call'](data, this) && !(this instanceof connectionFn)) {
          return new data(size);
        }
        this['_writableState'] = new initialize(size, this);
        this["writable"] = !![];
        if (size) {
          if (typeof size['write'] === 'function') {
            this['_write'] = size['write'];
          if (typeof size['writev'] === 'function') {
            this['_writev'] = size["writev"];
          if (typeof size['destroy'] === "function") {
            this['_destroy'] = size["destroy"];
          if (typeof size['final'] === 'function') {
            this["_final"] = size['final'];
        }
        CheckDailyStat['call'](this);
      }
      function checkHorizontalScroll(context, width) {
        var event = new Error("write after end");
        context['emit']('error', event);
        equal(width, event);
      }
      function callback(target, details, callback, link) {
        var coolie = !![];
        var x = ![];
        if (callback === null) {
          x = new TypeError('May not write null values to stream');
        } else {
          if (typeof callback !== 'string' && callback !== undefined && !details['objectMode']) {
            x = new TypeError('Invalid non-string/buffer chunk');
        }
        if (x) {
          target["emit"]('error', x);
          equal(link, x);
          coolie = ![];
        }
        return coolie;
      }
      function create(type, data, res) {
        if (!type['objectMode'] && type["decodeStrings"] !== ![] && typeof data === "string") {
          data = stack['from'](data, res);
        }
        return data;
      }
      function get(elem, commands, options, data, value, error) {
        if (!options) {
          var result = create(commands, data, value);
          if (data !== result) {
            options = !![];
            value = 'buffer';
            data = result;
        }
        var feature = commands["objectMode"] ? 1 : data['length'];
        commands['length'] += feature;
        var _cXHRConfigs = commands['length'] < commands['highWaterMark'];
        if (!_cXHRConfigs) {
          commands['needDrain'] = !![];
        }
        if (commands["writing"] || commands['corked']) {
          var commandList = commands['lastBufferedRequest'];
          commands["lastBufferedRequest"] = {
            "chunk" : data,
            "encoding" : value,
            "isBuf" : options,
            "callback" : error,
            "next" : null
          if (commandList) {
            commandList['next'] = commands['lastBufferedRequest'];
            commands['bufferedRequest'] = commands['lastBufferedRequest'];
          commands['bufferedRequestCount'] += 1;
        } else {
          log(elem, commands, ![], feature, data, value, error);
        }
        return _cXHRConfigs;
      }
      function log(instance, args, data, type, value, name, level) {
        args['writelen'] = type;
        args["writecb"] = level;
        args['writing'] = !![];
        args['sync'] = !![];
        if (data) {
          instance['_writev'](value, args['onwrite']);
        } else {
          instance["_write"](value, name, args['onwrite']);
        }
        args['sync'] = ![];
      }
      function add(input, description, callback, message, func) {
        --description['pendingcb'];
        if (callback) {
          equal(func, message);
          equal(getValue, input, description);
          input['_writableState']['errorEmitted'] = !![];
          input["emit"]("error", message);
        } else {
          func(message);
          input['_writableState']['errorEmitted'] = !![];
          input['emit']("error", message);
          getValue(input, description);
        }
      }
      function complete(errorValue) {
        errorValue["writing"] = ![];
        errorValue['writecb'] = null;
        errorValue['length'] -= errorValue['writelen'];
        errorValue['writelen'] = 0;
      }
      function load(args, data) {
        var value = args['_writableState'];
        var property = value['sync'];
        var object = value['writecb'];
        complete(value);
        if (data) {
          add(args, value, property, data, object);
        } else {
          var result = end(value);
          if (!result && !value['corked'] && !value['bufferProcessing'] && value['bufferedRequest']) {
            filter(args, value);
          if (property) {
            setTimeout(next, args, value, result, object);
            next(args, value, result, object);
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
        if (region['length'] === 0 && region['needDrain']) {
          region['needDrain'] = ![];
          value['emit']('drain');
        }
      }
      function filter(a, obj) {
        obj['bufferProcessing'] = !![];
        var data = obj['bufferedRequest'];
        if (a["_writev"] && data && data["next"]) {
          var key = obj['bufferedRequestCount'];
          var keys = new Array(key);
          var temp = obj['corkedRequestsFree'];
          temp['entry'] = data;
          var name = 0;
          var shift = !![];
          for (; data;) {
            keys[name] = data;
            if (!data['isBuf']) {
              shift = ![];
            data = data["next"];
            name = name + 1;
          keys['allBuffers'] = shift;
          log(a, obj, !![], obj['length'], keys, "", temp['finish']);
          obj['pendingcb']++;
          obj["lastBufferedRequest"] = null;
          if (temp['next']) {
            obj["corkedRequestsFree"] = temp["next"];
            temp["next"] = null;
            obj["corkedRequestsFree"] = new Collection(obj);
        } else {
          for (; data;) {
            var bucket = data['chunk'];
            var last = data['encoding'];
            var msg = data["callback"];
            var feature = obj["objectMode"] ? 1 : bucket["length"];
            log(a, obj, ![], feature, bucket, last, msg);
            data = data['next'];
            if (obj['writing']) {
              break;
          if (data === null) {
            obj['lastBufferedRequest'] = null;
        }
        obj["bufferedRequestCount"] = 0;
        obj['bufferedRequest'] = data;
        obj['bufferProcessing'] = ![];
      }
      function end(_input) {
        return _input["ending"] && _input['length'] === 0 && _input['bufferedRequest'] === null && !_input['finished'] && !_input['writing'];
      }
      function rewriteComputed(obj, key) {
        obj["_final"](function(callback) {
          key['pendingcb']--;
          if (callback) {
            obj['emit']('error', callback);
          key['prefinished'] = !![];
          obj['emit']('prefinish');
          getValue(obj, key);
        });
      }
      function cb(value, html) {
        if (!html["prefinished"] && !html['finalCalled']) {
          if (typeof value['_final'] === "function") {
            html['pendingcb']++;
            html['finalCalled'] = !![];
            equal(rewriteComputed, value, html);
            html['prefinished'] = !![];
            value['emit']('prefinish');
        }
      }
      function getValue(event, value) {
        var result = end(value);
        if (result) {
          cb(event, value);
          if (value["pendingcb"] === 0) {
            value['finished'] = !![];
            event['emit']('finish');
        }
        return result;
      }
      function initializeValues(options, childCompute, parentCompute) {
        childCompute['ending'] = !![];
        getValue(options, childCompute);
        if (parentCompute) {
          if (childCompute['finished']) {
            equal(parentCompute);
            options['once']('finish', parentCompute);
        }
        childCompute["ended"] = !![];
        options['writable'] = ![];
      }
      function build(nodes, data, outFile) {
        var current = nodes['entry'];
        nodes['entry'] = null;
        for (; current;) {
          var minify = current['callback'];
          data['pendingcb']--;
          minify(outFile);
          current = current['next'];
        }
        if (data['corkedRequestsFree']) {
          data["corkedRequestsFree"]['next'] = nodes;
        } else {
          data['corkedRequestsFree'] = nodes;
        }
      }
      var equal = require('process-nextick-args');
      beacons['exports'] = data;
      var setTimeout = !canCreateDiscussions['browser'] && ["v0.10", 'v0.9.']['indexOf'](canCreateDiscussions['version']['slice'](0, 5)) > -1 ? setImmediate : equal;
      var connectionFn;
      data["WritableState"] = initialize;
      var minify = require('core-util-is');
      minify['inherits'] = require("inherits");
      var _0x53321e = {
        "deprecate" : require('util-deprecate')
      };
      var CheckDailyStat = require('./internal/streams/stream');
      var stack = require('safe-buffer')["Buffer"];
      var Stream = global["Uint8Array"] || function() {
      };
      var TagHourlyStat = require('./internal/streams/destroy');
      minify['inherits'](data, CheckDailyStat);
      initialize["prototype"]['getBuffer'] = function parseBody() {
        var el = this['bufferedRequest'];
        var res = [];
        for (; el;) {
          res["push"](el);
          el = el["next"];
        }
        return res;
      };
      (function() {
        try {
          Object['defineProperty'](initialize['prototype'], 'buffer', {
            "get" : _0x53321e["deprecate"](function() {
              return this['getBuffer']();
        } catch (_0x40d7c0) {
        }
      })();
      var actions;
      if (typeof Symbol === 'function' && Symbol["hasInstance"] && typeof Function["prototype"][Symbol['hasInstance']] === "function") {
        actions = Function['prototype'][Symbol['hasInstance']];
        Object['defineProperty'](data, Symbol['hasInstance'], {
          "value" : function(components) {
            if (actions['call'](this, components)) {
              return !![];
            return components && components['_writableState'] instanceof initialize;
        });
      } else {
        actions = function(selector) {
          return selector instanceof this;
        };
      }
      data['prototype']['pipe'] = function() {
        this['emit']('error', new Error("Cannot pipe, not readable"));
      };
      data["prototype"]['write'] = function(data, text, size) {
        var result = this['_writableState'];
        var template = ![];
        var options = checkAuthUserReplied(data) && !result['objectMode'];
        if (options && !stack['isBuffer'](data)) {
          data = create_youtube_embeds(data);
        }
        if (typeof text === 'function') {
          size = text;
          text = null;
        }
        if (options) {
          text = 'buffer';
        } else {
          if (!text) {
            text = result["defaultEncoding"];
        }
        if (typeof size !== 'function') {
          size = SIZE_160x120;
        }
        if (result["ended"]) {
          checkHorizontalScroll(this, size);
        } else {
          if (options || callback(this, result, data, size)) {
            result['pendingcb']++;
            template = get(this, result, options, data, text, size);
        }
        return template;
      };
      data['prototype']['cork'] = function() {
        var _0xcd1833 = this['_writableState'];
        _0xcd1833['corked']++;
      };
      data["prototype"]['uncork'] = function() {
        var data = this['_writableState'];
        if (data['corked']) {
          data['corked']--;
          if (!data['writing'] && !data['corked'] && !data["finished"] && !data["bufferProcessing"] && data['bufferedRequest']) {
            filter(this, data);
        }
      };
      data['prototype']["setDefaultEncoding"] = function setDefaultEncoding(encoding) {
        if (typeof encoding === 'string') {
          encoding = encoding['toLowerCase']();
        }
        if (!(['hex', 'utf8', 'utf-8', 'ascii', 'binary', 'base64', 'ucs2', 'ucs-2', 'utf16le', "utf-16le", "raw"]["indexOf"]((encoding + "")['toLowerCase']()) > -1)) {
          throw new TypeError('Unknown encoding: ' + encoding);
        }
        this["_writableState"]["defaultEncoding"] = encoding;
        return this;
      };
      data['prototype']['_write'] = function(canCreateDiscussions, isSlidingUp, stepCallback) {
        stepCallback(new Error('_write() is not implemented'));
      };
      data['prototype']["_writev"] = null;
      data['prototype']["end"] = function(unprotectedData, maybeParams, parentCompute) {
        var childCompute = this['_writableState'];
        if (typeof unprotectedData === 'function') {
          parentCompute = unprotectedData;
          unprotectedData = null;
          maybeParams = null;
        } else {
          if (typeof maybeParams === "function") {
            parentCompute = maybeParams;
            maybeParams = null;
        }
        if (unprotectedData !== null && unprotectedData !== undefined) {
          this['write'](unprotectedData, maybeParams);
        }
        if (childCompute['corked']) {
          childCompute['corked'] = 1;
          this["uncork"]();
        }
        if (!childCompute['ending'] && !childCompute['finished']) {
          initializeValues(this, childCompute, parentCompute);
        }
      };
      Object["defineProperty"](data['prototype'], 'destroyed', {
        "get" : function() {
          if (this['_writableState'] === undefined) {
            return ![];
          return this['_writableState']["destroyed"];
        },
        "set" : function(mymuted) {
          if (!this['_writableState']) {
            return;
          this["_writableState"]['destroyed'] = mymuted;
        }
      });
      data['prototype']['destroy'] = TagHourlyStat['destroy'];
      data["prototype"]['_undestroy'] = TagHourlyStat['undestroy'];
      data['prototype']['_destroy'] = function(notifications, saveNotifs) {
        this['end']();
        saveNotifs(notifications);
      };
    })['call'](this, require("_process"), typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : {});
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
        throw new TypeError('Cannot call a class as a function');
      }
    }
    function serialize(initConfig, id, obj) {
      initConfig["copy"](id, obj);
    }
    var Long = saveNotifs('safe-buffer')['Buffer'];
    canCreateDiscussions['exports'] = function() {
      function data() {
        map(this, data);
        this['head'] = null;
        this["tail"] = null;
        this['length'] = 0;
      }
      data['prototype']['push'] = function getFinishFunction(success) {
        var dummy = {
          "data" : success,
          "next" : null
        };
        if (this["length"] > 0) {
          this['tail']['next'] = dummy;
        } else {
          this['head'] = dummy;
        }
        this['tail'] = dummy;
        ++this["length"];
      };
      data['prototype']['unshift'] = function getFinishFunction(success) {
        var item = {
          "data" : success,
          "next" : this["head"]
        };
        if (this['length'] === 0) {
          this['tail'] = item;
        }
        this["head"] = item;
        ++this['length'];
      };
      data["prototype"]['shift'] = function shift() {
        if (this['length'] === 0) {
          return;
        }
        var r = this['head']['data'];
        if (this['length'] === 1) {
          this['head'] = this['tail'] = null;
        } else {
          this['head'] = this['head']["next"];
        }
        --this['length'];
        return r;
      };
      data['prototype']['clear'] = function clear() {
        this['head'] = this['tail'] = null;
        this['length'] = 0;
      };
      data['prototype']['join'] = function valueByIndex(i) {
        if (this['length'] === 0) {
          return "";
        }
        var object = this['head'];
        var result = "" + object["data"];
        for (; object = object["next"];) {
          result = result + (i + object['data']);
        }
        return result;
      };
      data["prototype"]['concat'] = function GetInventory(callback) {
        if (this['length'] === 0) {
          return Long['alloc'](0);
        }
        if (this['length'] === 1) {
          return this['head']["data"];
        }
        var value = Long["allocUnsafe"](callback >>> 0);
        var list = this["head"];
        var struct = 0;
        for (; list;) {
          serialize(list['data'], value, struct);
          struct = struct + list['data']['length'];
          list = list['next'];
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
      var inputWin = this['_readableState'] && this['_readableState']['destroyed'];
      var winRef = this['_writableState'] && this['_writableState']['destroyed'];
      if (inputWin || winRef) {
        if (param) {
          param(url);
        } else {
          if (url && (!this['_writableState'] || !this['_writableState']['errorEmitted'])) {
            trigger(discharge, this, url);
        }
        return;
      }
      if (this['_readableState']) {
        this['_readableState']['destroyed'] = !![];
      }
      if (this['_writableState']) {
        this['_writableState']["destroyed"] = !![];
      }
      this['_destroy'](url || null, function(url) {
        if (!param && url) {
          trigger(discharge, dataBase64, url);
          if (dataBase64['_writableState']) {
            dataBase64['_writableState']['errorEmitted'] = !![];
        } else {
          if (param) {
            param(url);
        }
      });
    }
    function end() {
      if (this['_readableState']) {
        this['_readableState']['destroyed'] = ![];
        this['_readableState']['reading'] = ![];
        this['_readableState']['ended'] = ![];
        this['_readableState']["endEmitted"] = ![];
      }
      if (this['_writableState']) {
        this['_writableState']["destroyed"] = ![];
        this['_writableState']['ended'] = ![];
        this['_writableState']["ending"] = ![];
        this['_writableState']["finished"] = ![];
        this["_writableState"]['errorEmitted'] = ![];
      }
    }
    function discharge(applicationName, macaroon) {
      applicationName['emit']('error', macaroon);
    }
    var trigger = $('process-nextick-args');
    data['exports'] = {
      "destroy" : request,
      "undestroy" : end
    };
  }, {
    "process-nextick-args" : 21
  }],
  31 : [function(saveNotifs, canCreateDiscussions, isSlidingUp) {
    canCreateDiscussions['exports'] = saveNotifs('events')['EventEmitter'];
  }, {
    "events" : 8
  }],
  32 : [function(saveNotifs, module, canCreateDiscussions) {
    module["exports"] = saveNotifs("./readable")['PassThrough'];
  }, {
    "./readable" : 33
  }],
  33 : [function(render, result, data) {
    data = result['exports'] = render('./lib/_stream_readable.js');
    data['Stream'] = data;
    data['Readable'] = data;
    data["Writable"] = render("./lib/_stream_writable.js");
    data['Duplex'] = render('./lib/_stream_duplex.js');
    data['Transform'] = render('./lib/_stream_transform.js');
    data["PassThrough"] = render('./lib/_stream_passthrough.js');
  }, {
    "./lib/_stream_duplex.js" : 24,
    "./lib/_stream_passthrough.js" : 25,
    "./lib/_stream_readable.js" : 26,
    "./lib/_stream_transform.js" : 27,
    "./lib/_stream_writable.js" : 28
  }],
  34 : [function(saveNotifs, canCreateDiscussions, isSlidingUp) {
    canCreateDiscussions['exports'] = saveNotifs('./readable')['Transform'];
  }, {
    "./readable" : 33
  }],
  35 : [function(require, tasks, isSlidingUp) {
    tasks['exports'] = require('./lib/_stream_writable.js');
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
    var entity = $('buffer');
    var d = entity['Buffer'];
    if (d['from'] && d["alloc"] && d['allocUnsafe'] && d["allocUnsafeSlow"]) {
      module["exports"] = entity;
    } else {
      add(entity, buffer);
      buffer["Buffer"] = _d;
    }
    add(d, _d);
    _d['from'] = function(D, key, oldValue) {
      if (typeof D === 'number') {
        throw new TypeError('Argument must not be a number');
      }
      return d(D, key, oldValue);
    };
    _d['alloc'] = function(D, model, relations) {
      if (typeof D !== 'number') {
        throw new TypeError('Argument must be a number');
      }
      var _destructure2 = d(D);
      if (model !== undefined) {
        if (typeof relations === 'string') {
          _destructure2['fill'](model, relations);
        } else {
          _destructure2['fill'](model);
        }
      } else {
        _destructure2['fill'](0);
      }
      return _destructure2;
    };
    _d["allocUnsafe"] = function(y) {
      if (typeof y !== "number") {
        throw new TypeError('Argument must be a number');
      }
      return d(y);
    };
    _d['allocUnsafeSlow'] = function(val) {
      if (typeof val !== 'number') {
        throw new TypeError('Argument must be a number');
      }
      return entity['SlowBuffer'](val);
    };
  }, {
    "buffer" : 3
  }],
  37 : [function(arrayer, beacons, canCreateDiscussions) {
    function data() {
      end['call'](this);
    }
    beacons['exports'] = data;
    var end = arrayer('events')['EventEmitter'];
    var coveredByRange = arrayer('inherits');
    coveredByRange(data, end);
    data['Readable'] = arrayer('readable-stream/readable.js');
    data['Writable'] = arrayer('readable-stream/writable.js');
    data["Duplex"] = arrayer('readable-stream/duplex.js');
    data['Transform'] = arrayer('readable-stream/transform.js');
    data['PassThrough'] = arrayer('readable-stream/passthrough.js');
    data['Stream'] = data;
    data["prototype"]['pipe'] = function(PL$12, canCreateDiscussions) {
      function update(value) {
        if (PL$12["writable"]) {
          if (![] === PL$12["write"](value) && filter['pause']) {
            filter['pause']();
        }
      }
      function B104() {
        if (filter['readable'] && filter['resume']) {
          filter['resume']();
        }
      }
      function B103() {
        if (_0x1c27d5) {
          return;
        }
        _0x1c27d5 = !![];
        PL$12['end']();
      }
      function type() {
        if (_0x1c27d5) {
          return;
        }
        _0x1c27d5 = !![];
        if (typeof PL$12['destroy'] === "function") {
          PL$12['destroy']();
        }
      }
      function PL$16(PL$5) {
        listener();
        if (end['listenerCount'](this, 'error') === 0) {
          throw PL$5;
        }
      }
      function listener() {
        filter["removeListener"]('data', update);
        PL$12['removeListener']('drain', B104);
        filter["removeListener"]('end', B103);
        filter["removeListener"]('close', type);
        filter['removeListener']("error", PL$16);
        PL$12['removeListener']('error', PL$16);
        filter['removeListener']("end", listener);
        filter['removeListener']("close", listener);
        PL$12['removeListener']("close", listener);
      }
      var filter = this;
      filter["on"]('data', update);
      PL$12["on"]("drain", B104);
      if (!PL$12['_isStdio'] && (!canCreateDiscussions || canCreateDiscussions['end'] !== ![])) {
        filter["on"]("end", B103);
        filter["on"]('close', type);
      }
      var _0x1c27d5 = ![];
      filter["on"]('error', PL$16);
      PL$12["on"]('error', PL$16);
      filter["on"]('end', listener);
      filter["on"]('close', listener);
      PL$12["on"]('close', listener);
      PL$12['emit']('pipe', filter);
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
        return 'utf8';
      }
      var _0x5560e2;
      for (; !![];) {
        switch(encoding) {
          case "utf8":
          case 'utf-8':
            return 'utf8';
          case 'ucs2':
          case 'ucs-2':
          case 'utf16le':
          case "utf-16le":
            return 'utf16le';
          case 'latin1':
          case 'binary':
            return 'latin1';
          case "base64":
          case "ascii":
          case 'hex':
            return encoding;
          default:
            if (_0x5560e2) {
              return;
            encoding = ("" + encoding)['toLowerCase']();
            _0x5560e2 = !![];
        }
      }
    }
    function generate(name) {
      var value = toString(name);
      if (typeof value !== "string" && (command_codes['isEncoding'] === appropriateObjectForTerrain || !appropriateObjectForTerrain(name))) {
        throw new Error('Unknown encoding: ' + name);
      }
      return value || name;
    }
    function Test(value) {
      this['encoding'] = generate(value);
      var data;
      switch(this['encoding']) {
        case 'utf16le':
          this['text'] = _validateCaptcha;
          this['end'] = extend;
          data = 4;
          break;
        case 'utf8':
          this['fillLast'] = merge;
          data = 4;
          break;
        case 'base64':
          this['text'] = forEach;
          this['end'] = generateCardHash;
          data = 3;
          break;
        default:
          this['write'] = prefetchGroupsInfo;
          this['end'] = clearBufferChars;
          return;
      }
      this['lastNeed'] = 0;
      this['lastTotal'] = 0;
      this["lastChar"] = command_codes['allocUnsafe'](data);
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
            if (options >> 3 === 30) {
              return 4;
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
          res['lastNeed'] = x - 1;
        }
        return x;
      }
      if (--j < i) {
        return 0;
      }
      x = normalize(path[j]);
      if (x >= 0) {
        if (x > 0) {
          res['lastNeed'] = x - 2;
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
            res['lastNeed'] = x - 3;
        }
        return x;
      }
      return 0;
    }
    function log(expr, text, values) {
      if ((text[0] & 192) !== 128) {
        expr["lastNeed"] = 0;
        return "\ufffd"['repeat'](values);
      }
      if (expr['lastNeed'] > 1 && text["length"] > 1) {
        if ((text[1] & 192) !== 128) {
          expr['lastNeed'] = 1;
          return "\ufffd"["repeat"](values + 1);
        }
        if (expr['lastNeed'] > 2 && text['length'] > 2) {
          if ((text[2] & 192) !== 128) {
            expr['lastNeed'] = 2;
            return "\ufffd"["repeat"](values + 2);
        }
      }
    }
    function merge(context) {
      var cb = this['lastTotal'] - this['lastNeed'];
      var output = log(this, context, cb);
      if (output !== undefined) {
        return output;
      }
      if (this['lastNeed'] <= context['length']) {
        context['copy'](this['lastChar'], cb, 0, this['lastNeed']);
        return this['lastChar']['toString'](this['encoding'], 0, this['lastTotal']);
      }
      context['copy'](this['lastChar'], cb, 0, context['length']);
      this["lastNeed"] -= context['length'];
    }
    function inherit(target, name) {
      var filepath = join(this, target, name);
      if (!this['lastNeed']) {
        return target['toString']('utf8', name);
      }
      this['lastTotal'] = filepath;
      var conditionalAssignment = target['length'] - (filepath - this['lastNeed']);
      target['copy'](this['lastChar'], 0, conditionalAssignment);
      return target["toString"]('utf8', name, conditionalAssignment);
    }
    function calculateSlug(user) {
      var slug = user && user['length'] ? this['write'](user) : "";
      if (this["lastNeed"]) {
        return slug + "\ufffd"['repeat'](this['lastTotal'] - this['lastNeed']);
      }
      return slug;
    }
    function _validateCaptcha(p, m) {
      if ((p['length'] - m) % 2 === 0) {
        var 0 = p['toString']('utf16le', m);
        if (0) {
          var _0x244cbd = 0['charCodeAt'](0['length'] - 1);
          if (_0x244cbd >= 55296 && _0x244cbd <= 56319) {
            this['lastNeed'] = 2;
            this['lastTotal'] = 4;
            this["lastChar"][0] = p[p["length"] - 2];
            this["lastChar"][1] = p[p['length'] - 1];
            return 0['slice'](0, -1);
        }
        return 0;
      }
      this['lastNeed'] = 1;
      this["lastTotal"] = 2;
      this['lastChar'][0] = p[p['length'] - 1];
      return p['toString']('utf16le', m, p['length'] - 1);
    }
    function extend(b) {
      var prom = b && b["length"] ? this['write'](b) : "";
      if (this['lastNeed']) {
        var year = this['lastTotal'] - this['lastNeed'];
        return prom + this['lastChar']["toString"]('utf16le', 0, year);
      }
      return prom;
    }
    function forEach(obj, fn) {
      var offsetY = (obj['length'] - fn) % 3;
      if (offsetY === 0) {
        return obj["toString"]('base64', fn);
      }
      this["lastNeed"] = 3 - offsetY;
      this["lastTotal"] = 3;
      if (offsetY === 1) {
        this['lastChar'][0] = obj[obj['length'] - 1];
      } else {
        this["lastChar"][0] = obj[obj['length'] - 2];
        this['lastChar'][1] = obj[obj["length"] - 1];
      }
      return obj["toString"]('base64', fn, obj['length'] - offsetY);
    }
    function generateCardHash(b) {
      var dataUrl = b && b["length"] ? this['write'](b) : "";
      if (this['lastNeed']) {
        return dataUrl + this["lastChar"]['toString']("base64", 0, 3 - this['lastNeed']);
      }
      return dataUrl;
    }
    function prefetchGroupsInfo(canCreateDiscussions) {
      return canCreateDiscussions['toString'](this['encoding']);
    }
    function clearBufferChars(output) {
      return output && output['length'] ? this['write'](output) : "";
    }
    var command_codes = saveNotifs('safe-buffer')['Buffer'];
    var appropriateObjectForTerrain = command_codes['isEncoding'] || function(encoding) {
      encoding = "" + encoding;
      switch(encoding && encoding["toLowerCase"]()) {
        case "hex":
        case 'utf8':
        case "utf-8":
        case 'ascii':
        case 'binary':
        case 'base64':
        case 'ucs2':
        case "ucs-2":
        case 'utf16le':
        case 'utf-16le':
        case 'raw':
          return !![];
        default:
          return ![];
      }
    };
    global['StringDecoder'] = Test;
    Test['prototype']['write'] = function(value) {
      if (value['length'] === 0) {
        return "";
      }
      var str;
      var i;
      if (this["lastNeed"]) {
        str = this['fillLast'](value);
        if (str === undefined) {
          return "";
        }
        i = this['lastNeed'];
        this['lastNeed'] = 0;
      } else {
        i = 0;
      }
      if (i < value["length"]) {
        return str ? str + this['text'](value, i) : this['text'](value, i);
      }
      return str || "";
    };
    Test["prototype"]['end'] = calculateSlug;
    Test["prototype"]['text'] = inherit;
    Test['prototype']['fillLast'] = function(data) {
      if (this['lastNeed'] <= data['length']) {
        data['copy'](this['lastChar'], this['lastTotal'] - this["lastNeed"], 0, this['lastNeed']);
        return this["lastChar"]['toString'](this['encoding'], 0, this['lastTotal']);
      }
      data["copy"](this["lastChar"], this["lastTotal"] - this['lastNeed'], 0, data["length"]);
      this['lastNeed'] -= data['length'];
    };
  }, {
    "safe-buffer" : 36
  }],
  39 : [function(isSlidingUp, a, dontForceConstraints) {
    (function(window) {
      function init(p, a) {
        function deferred() {
          if (!_0x4bd60f) {
            if (configure('throwDeprecation')) {
              throw new Error(a);
              if (configure('traceDeprecation')) {
                console['trace'](a);
                console['warn'](a);
            _0x4bd60f = !![];
          return p['apply'](this, arguments);
        }
        if (configure('noDeprecation')) {
          return p;
        }
        var _0x4bd60f = ![];
        return deferred;
      }
      function configure(name) {
        try {
          if (!window['localStorage']) {
            return ![];
        } catch (_0x222bb0) {
          return ![];
        }
        var creative_size = window["localStorage"][name];
        if (null == creative_size) {
          return ![];
        }
        return String(creative_size)['toLowerCase']() === 'true';
      }
      a['exports'] = init;
    })['call'](this, typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : typeof window !== "undefined" ? window : {});
  }, {}],
  40 : [function(canCreateDiscussions, isSlidingUp, PL$22) {
    arguments[4][10][0]["apply"](PL$22, arguments);
  }, {
    "dup" : 10
  }],
  41 : [function(isSlidingUp, canCreateDiscussions, dontForceConstraints) {
    canCreateDiscussions['exports'] = function gotDataEntries(data) {
      return data && typeof data === "object" && typeof data["copy"] === 'function' && typeof data["fill"] === 'function' && typeof data['readUInt8'] === 'function';
    };
  }, {}],
  42 : [function(require, canCreateDiscussions, obj) {
    (function(dictionary, match) {
      function get(type, callback) {
        var args = {
          "seen" : [],
          "stylize" : stylizeNoColor
        };
        if (arguments['length'] >= 3) {
          args['depth'] = arguments[2];
        }
        if (arguments["length"] >= 4) {
          args["colors"] = arguments[3];
        }
        if (compile(callback)) {
          args["showHidden"] = callback;
        } else {
          if (callback) {
            obj['_extend'](args, callback);
        }
        if (error(args['showHidden'])) {
          args["showHidden"] = ![];
        }
        if (error(args['depth'])) {
          args['depth'] = 2;
        }
        if (error(args['colors'])) {
          args['colors'] = ![];
        }
        if (error(args["customInspect"])) {
          args["customInspect"] = !![];
        }
        if (args['colors']) {
          args['stylize'] = determineModuleStatus;
        }
        return set(args, type, args["depth"]);
      }
      function determineModuleStatus(status, marketID) {
        var expectedSiteKey = get['styles'][marketID];
        if (expectedSiteKey) {
          return "\u001b[" + get['colors'][expectedSiteKey][0] + "m" + status + "\u001b[" + get['colors'][expectedSiteKey][1] + "m";
        } else {
          return status;
        }
      }
      function stylizeNoColor(str, styleType) {
        return str;
      }
      function create(defaultName) {
        var subwikiListsCache = {};
        defaultName['forEach'](function(wikiId, canCreateDiscussions) {
          subwikiListsCache[wikiId] = !![];
        });
        return subwikiListsCache;
      }
      function set(data, target, name) {
        if (data['customInspect'] && target && mixin(target["inspect"]) && target['inspect'] !== obj['inspect'] && !(target['constructor'] && target['constructor']['prototype'] === target)) {
          var result = target['inspect'](name, data);
          if (!$(result)) {
            result = set(data, result, name);
          return result;
        }
        var r = request(data, target);
        if (r) {
          return r;
        }
        var parent = Object["keys"](target);
        var cb = create(parent);
        if (data['showHidden']) {
          parent = Object['getOwnPropertyNames'](target);
        }
        if (some(target) && (parent["indexOf"]("message") >= 0 || parent["indexOf"]('description') >= 0)) {
          return extend(target);
        }
        if (parent['length'] === 0) {
          if (mixin(target)) {
            var opt_by = target['name'] ? ": " + target['name'] : "";
            return data["stylize"]('[Function' + opt_by + "]", "special");
          if (extendInternal(target)) {
            return data['stylize'](RegExp['prototype']['toString']['call'](target), "regexp");
          if (getSelectionStatusForModels(target)) {
            return data['stylize'](Date['prototype']['toString']['call'](target), "date");
          if (some(target)) {
            return extend(target);
        }
        var node = "";
        var done = ![];
        var p = ["{", "}"];
        if (setElementTransformProperty(target)) {
          done = !![];
          p = ["[", "]"];
        }
        if (mixin(target)) {
          var opt_by = target['name'] ? ": " + target["name"] : "";
          node = ' [Function' + opt_by + "]";
        }
        if (extendInternal(target)) {
          node = " " + RegExp['prototype']["toString"]['call'](target);
        }
        if (getSelectionStatusForModels(target)) {
          node = " " + Date['prototype']['toUTCString']['call'](target);
        }
        if (some(target)) {
          node = " " + extend(target);
        }
        if (parent['length'] === 0 && (!done || target['length'] == 0)) {
          return p[0] + node + p[1];
        }
        if (name < 0) {
          if (extendInternal(target)) {
            return data['stylize'](RegExp['prototype']['toString']['call'](target), 'regexp');
            return data["stylize"]('[Object]', "special");
        }
        data["seen"]['push'](target);
        var ret;
        if (done) {
          ret = resolve(data, target, name, cb, parent);
        } else {
          ret = parent['map'](function(where) {
            return test(data, target, name, cb, where, done);
        }
        data['seen']['pop']();
        return func(ret, node, p);
      }
      function request(element, input) {
        if (error(input)) {
          return element['stylize']('undefined', 'undefined');
        }
        if ($(input)) {
          var selector = "'" + JSON['stringify'](input)['replace'](/^"|"$/g, "")["replace"](/'/g, "\\'")["replace"](/\\"/g, '"') + "'";
          return element["stylize"](selector, 'string');
        }
        if (sanitize(input)) {
          return element["stylize"]("" + input, "number");
        }
        if (compile(input)) {
          return element["stylize"]("" + input, 'boolean');
        }
        if (substring(input)) {
          return element['stylize']('null', 'null');
        }
      }
      function extend(target) {
        return "[" + Error['prototype']["toString"]["call"](target) + "]";
      }
      function resolve(x, options, key, cb, idx) {
        var d = [];
        var i = 0;
        var length = options["length"];
        for (; i < length; ++i) {
          if (callback(options, String(i))) {
            d['push'](test(x, options, key, cb, String(i), !![]));
            d["push"]("");
        }
        idx['forEach'](function(where) {
          if (!where['match'](/^\d+$/)) {
            d['push'](test(x, options, key, cb, where, !![]));
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
        if (fields['get']) {
          if (fields["set"]) {
            out = list['stylize']('[Getter/Setter]', 'special');
            out = list["stylize"]('[Getter]', 'special');
        } else {
          if (fields['set']) {
            out = list["stylize"]('[Setter]', 'special');
        }
        if (!callback(func, prop)) {
          name = "[" + prop + "]";
        }
        if (!out) {
          if (list["seen"]['indexOf'](fields["value"]) < 0) {
            if (substring(name)) {
              out = set(list, fields['value'], null);
              out = set(list, fields['value'], name - 1);
            if (out['indexOf']("\n") > -1) {
              if (successCallback) {
                out = out['split']("\n")['map'](function(canCreateDiscussions) {
                  return "  " + canCreateDiscussions;
                out = "\n" + out['split']("\n")['map'](function(canCreateDiscussions) {
                  return '   ' + canCreateDiscussions;
            out = list['stylize']("[Circular]", 'special');
        }
        if (error(name)) {
          if (successCallback && prop["match"](/^\d+$/)) {
            return out;
          name = JSON["stringify"]("" + prop);
          if (name['match'](/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
            name = name['substr'](1, name["length"] - 2);
            name = list['stylize'](name, "name");
            name = name['replace'](/'/g, "\\'")["replace"](/\\"/g, '"')['replace'](/(^"|"$)/g, "'");
            name = list['stylize'](name, 'string');
        }
        return name + ": " + out;
      }
      function func(res, value, element) {
        var _0x2e1faf = 0;
        var _0x3c5b66 = res['reduce'](function(canCreateDiscussions, href) {
          _0x2e1faf++;
          if (href['indexOf']("\n") >= 0) {
            _0x2e1faf++;
          return canCreateDiscussions + href['replace'](/\u001b\[\d\d?m/g, "")['length'] + 1;
        }, 0);
        if (_0x3c5b66 > 60) {
          return element[0] + (value === "" ? "" : value + "\n ") + " " + res["join"](",\n  ") + " " + element[1];
        }
        return element[0] + value + " " + res['join'](", ") + " " + element[1];
      }
      function setElementTransformProperty(elem) {
        return Array['isArray'](elem);
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
        return typeof jsString === 'number';
      }
      function $(string) {
        return typeof string === 'string';
      }
      function backup(context) {
        return typeof context === 'symbol';
      }
      function error(type) {
        return type === void 0;
      }
      function extendInternal(source) {
        return isArray(source) && toArray(source) === '[object RegExp]';
      }
      function isArray(v) {
        return typeof v === 'object' && v !== null;
      }
      function getSelectionStatusForModels(collection) {
        return isArray(collection) && toArray(collection) === '[object Date]';
      }
      function some(obj) {
        return isArray(obj) && (toArray(obj) === '[object Error]' || obj instanceof Error);
      }
      function mixin(targetClass) {
        return typeof targetClass === 'function';
      }
      function fnc(value) {
        return value === null || typeof value === 'boolean' || typeof value === "number" || typeof value === 'string' || typeof value === 'symbol' || typeof value === 'undefined';
      }
      function toArray(target) {
        return Object['prototype']['toString']["call"](target);
      }
      function concat(res) {
        return res < 10 ? "0" + res["toString"](10) : res['toString'](10);
      }
      function getOwnPropertyNames() {
        var expected_date2 = new Date;
        var _0x331212 = [concat(expected_date2["getHours"]()), concat(expected_date2["getMinutes"]()), concat(expected_date2['getSeconds']())]['join'](":");
        return [expected_date2["getDate"](), months[expected_date2["getMonth"]()], _0x331212]['join'](" ");
      }
      function callback(obj, out) {
        return Object['prototype']['hasOwnProperty']['call'](obj, out);
      }
      var d = /%[sdj%]/g;
      obj["format"] = function(Y) {
        if (!$(Y)) {
          var _0x3ddfa7 = [];
          var i = 0;
          for (; i < arguments['length']; i++) {
            _0x3ddfa7['push'](get(arguments[i]));
          return _0x3ddfa7['join'](" ");
        }
        i = 1;
        var args = arguments;
        var rend = args['length'];
        var ret = String(Y)["replace"](d, function(canCreateDiscussions) {
          if (canCreateDiscussions === "%%") {
            return "%";
          if (i >= rend) {
            return canCreateDiscussions;
          switch(canCreateDiscussions) {
            case "%s":
              return String(args[i++]);
            case "%d":
              return Number(args[i++]);
            case "%j":
              try {
                return JSON['stringify'](args[i++]);
                return '[Circular]';
            default:
              return canCreateDiscussions;
        });
        var name = args[i];
        for (; i < rend; name = args[++i]) {
          if (substring(name) || !isArray(name)) {
            ret = ret + (" " + name);
            ret = ret + (" " + get(name));
        }
        return ret;
      };
      obj['deprecate'] = function(elem, msg) {
        function cli() {
          if (!_0x1dfa24) {
            if (dictionary["throwDeprecation"]) {
              throw new Error(msg);
              if (dictionary['traceDeprecation']) {
                console["trace"](msg);
                console["error"](msg);
            _0x1dfa24 = !![];
          return elem['apply'](this, arguments);
        }
        if (error(match['process'])) {
          return function() {
            return obj['deprecate'](elem, msg)['apply'](this, arguments);
        }
        if (dictionary['noDeprecation'] === !![]) {
          return elem;
        }
        var _0x1dfa24 = ![];
        return cli;
      };
      var __WEBPACK_IMPORTED_MODULE_2__array_index__ = {};
      var symbol;
      obj["debuglog"] = function(b) {
        if (error(symbol)) {
          symbol = dictionary["env"]['NODE_DEBUG'] || "";
        }
        b = b['toUpperCase']();
        if (!__WEBPACK_IMPORTED_MODULE_2__array_index__[b]) {
          if ((new RegExp("\\b" + b + "\\b", "i"))['test'](symbol)) {
            var value = dictionary['pid'];
            __WEBPACK_IMPORTED_MODULE_2__array_index__[b] = function() {
              var d = obj['format']["apply"](obj, arguments);
              console['error']("%s %d: %s", b, value, d);
            __WEBPACK_IMPORTED_MODULE_2__array_index__[b] = function() {
        }
        return __WEBPACK_IMPORTED_MODULE_2__array_index__[b];
      };
      obj['inspect'] = get;
      get['colors'] = {
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
        "boolean" : 'yellow',
        "undefined" : "grey",
        "null" : 'bold',
        "string" : 'green',
        "date" : 'magenta',
        "regexp" : 'red'
      };
      obj['isArray'] = setElementTransformProperty;
      obj["isBoolean"] = compile;
      obj["isNull"] = substring;
      obj['isNullOrUndefined'] = addFunction;
      obj['isNumber'] = sanitize;
      obj['isString'] = $;
      obj['isSymbol'] = backup;
      obj['isUndefined'] = error;
      obj['isRegExp'] = extendInternal;
      obj['isObject'] = isArray;
      obj["isDate"] = getSelectionStatusForModels;
      obj['isError'] = some;
      obj['isFunction'] = mixin;
      obj["isPrimitive"] = fnc;
      obj["isBuffer"] = require('./support/isBuffer');
      var months = ['Jan', 'Feb', 'Mar', "Apr", 'May', 'Jun', 'Jul', 'Aug', "Sep", 'Oct', 'Nov', 'Dec'];
      obj['log'] = function() {
        console['log']("%s - %s", getOwnPropertyNames(), obj['format']['apply'](obj, arguments));
      };
      obj['inherits'] = require("inherits");
      obj['_extend'] = function(values, obj) {
        if (!obj || !isArray(obj)) {
          return values;
        }
        var h = Object["keys"](obj);
        var i = h['length'];
        for (; i--;) {
          values[h[i]] = obj[h[i]];
        }
        return values;
      };
    })['call'](this, require('_process'), typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : typeof window !== "undefined" ? window : {});
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
    arguments[4][6][0]['apply'](mmCoreSplitViewBlock, arguments);
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
          var size_human = data['length'];
          for (; parameter < size_human; parameter++) {
            var value = data['charCodeAt'](parameter);
            if (value < 128) {
              settingHandler['push'](value);
              if (value < 2048) {
                settingHandler['push'](192 | value >> 6, 128 | value & 63);
                if (value < 55296 || value >= 57344) {
                  settingHandler['push'](224 | value >> 12, 128 | value >> 6 & 63, 128 | value & 63);
                  parameter++;
                  value = 65536 + ((value & 1023) << 10 | data['charCodeAt'](parameter) & 1023);
                  settingHandler['push'](240 | value >> 18, 128 | value >> 12 & 63, 128 | value >> 6 & 63, 128 | value & 63);
          return new Uint8Array(settingHandler);
        }
        function URI() {
          if (arguments['length'] == 2) {
            return (new URI(arguments[1]))['update'](arguments[0])['digest']();
          if (!(this instanceof URI)) {
            return new URI(arguments[0]);
          init['call'](this, arguments[0]);
        }
        function init(parent) {
          this['seed'] = parent instanceof $ ? parent['clone']() : $(parent);
          this["v1"] = this['seed']['clone']()["add"](className);
          this["v2"] = this["seed"]['clone']()["add"](value);
          this["v3"] = this['seed']['clone']();
          this["v4"] = this['seed']["clone"]()['subtract'](time);
          this['total_len'] = 0;
          this["memsize"] = 0;
          this["memory"] = null;
          return this;
        }
        var $ = saveNotifs('cuint')['UINT32'];
        $['prototype']["xxh_update"] = function(l, width) {
          var t = value["_low"];
          var s = value['_high'];
          var y;
          var t2;
          t2 = l * t;
          y = t2 >>> 16;
          y = y + width * t;
          y = y & 65535;
          y = y + l * s;
          var j = this['_low'] + (t2 & 65535);
          var height = j >>> 16;
          height = height + (this['_high'] + (y & 65535));
          var h = height << 16 | j & 65535;
          h = h << 13 | h >>> 19;
          j = h & 65535;
          height = h >>> 16;
          t = time['_low'];
          s = time['_high'];
          t2 = j * t;
          y = t2 >>> 16;
          y = y + height * t;
          y = y & 65535;
          y = y + j * s;
          this['_low'] = t2 & 65535;
          this["_high"] = y & 65535;
        };
        var time = $("2654435761");
        var value = $('2246822519');
        var item = $("3266489917");
        var inputel = $('668265263');
        var msg = $('374761393');
        var className = time['clone']()["add"](value);
        URI['prototype']['init'] = init;
        URI['prototype']['update'] = function(data) {
          var _0x450143 = typeof data == 'string';
          var _0x2ff06b;
          if (_0x450143) {
            data = encode(data);
            _0x450143 = ![];
            _0x2ff06b = !![];
          if (typeof ArrayBuffer !== 'undefined' && data instanceof ArrayBuffer) {
            _0x2ff06b = !![];
            data = new Uint8Array(data);
          var i = 0;
          var size = data['length'];
          var l = i + size;
          if (size == 0) {
            return this;
          this['total_len'] += size;
          if (this['memsize'] == 0) {
            if (_0x450143) {
              this['memory'] = "";
              if (_0x2ff06b) {
                this['memory'] = new Uint8Array(16);
                this['memory'] = new canCreateDiscussions(16);
          if (this['memsize'] + size < 16) {
            if (_0x450143) {
              this["memory"] += data;
              if (_0x2ff06b) {
                this['memory']["set"](data['subarray'](0, size), this['memsize']);
                data["copy"](this["memory"], this['memsize'], 0, size);
            this['memsize'] += size;
            return this;
          if (this["memsize"] > 0) {
            if (_0x450143) {
              this['memory'] += data['slice'](0, 16 - this['memsize']);
              if (_0x2ff06b) {
                this['memory']['set'](data['subarray'](0, 16 - this['memsize']), this['memsize']);
                data["copy"](this["memory"], this['memsize'], 0, 16 - this['memsize']);
            var PL$19 = 0;
            if (_0x450143) {
              this["v1"]['xxh_update'](this['memory']['charCodeAt'](PL$19 + 1) << 8 | this["memory"]['charCodeAt'](PL$19), this['memory']['charCodeAt'](PL$19 + 3) << 8 | this["memory"]['charCodeAt'](PL$19 + 2));
              PL$19 = PL$19 + 4;
              this["v2"]['xxh_update'](this["memory"]["charCodeAt"](PL$19 + 1) << 8 | this['memory']['charCodeAt'](PL$19), this["memory"]['charCodeAt'](PL$19 + 3) << 8 | this["memory"]["charCodeAt"](PL$19 + 2));
              PL$19 = PL$19 + 4;
              this["v3"]['xxh_update'](this['memory']['charCodeAt'](PL$19 + 1) << 8 | this['memory']["charCodeAt"](PL$19), this['memory']['charCodeAt'](PL$19 + 3) << 8 | this["memory"]['charCodeAt'](PL$19 + 2));
              PL$19 = PL$19 + 4;
              this["v4"]['xxh_update'](this["memory"]['charCodeAt'](PL$19 + 1) << 8 | this["memory"]['charCodeAt'](PL$19), this['memory']['charCodeAt'](PL$19 + 3) << 8 | this['memory']['charCodeAt'](PL$19 + 2));
              this["v1"]['xxh_update'](this['memory'][PL$19 + 1] << 8 | this["memory"][PL$19], this["memory"][PL$19 + 3] << 8 | this['memory'][PL$19 + 2]);
              PL$19 = PL$19 + 4;
              this["v2"]['xxh_update'](this['memory'][PL$19 + 1] << 8 | this["memory"][PL$19], this["memory"][PL$19 + 3] << 8 | this['memory'][PL$19 + 2]);
              PL$19 = PL$19 + 4;
              this["v3"]["xxh_update"](this['memory'][PL$19 + 1] << 8 | this["memory"][PL$19], this['memory'][PL$19 + 3] << 8 | this["memory"][PL$19 + 2]);
              PL$19 = PL$19 + 4;
              this["v4"]['xxh_update'](this['memory'][PL$19 + 1] << 8 | this['memory'][PL$19], this['memory'][PL$19 + 3] << 8 | this["memory"][PL$19 + 2]);
            i = i + (16 - this['memsize']);
            this["memsize"] = 0;
            if (_0x450143) {
              this['memory'] = "";
          if (i <= l - 16) {
            var last = l - 16;
            do {
              if (_0x450143) {
                this["v1"]["xxh_update"](data['charCodeAt'](i + 1) << 8 | data["charCodeAt"](i), data['charCodeAt'](i + 3) << 8 | data['charCodeAt'](i + 2));
                i = i + 4;
                this["v2"]['xxh_update'](data["charCodeAt"](i + 1) << 8 | data['charCodeAt'](i), data['charCodeAt'](i + 3) << 8 | data['charCodeAt'](i + 2));
                i = i + 4;
                this["v3"]['xxh_update'](data["charCodeAt"](i + 1) << 8 | data['charCodeAt'](i), data['charCodeAt'](i + 3) << 8 | data['charCodeAt'](i + 2));
                i = i + 4;
                this["v4"]['xxh_update'](data['charCodeAt'](i + 1) << 8 | data["charCodeAt"](i), data['charCodeAt'](i + 3) << 8 | data['charCodeAt'](i + 2));
                this["v1"]["xxh_update"](data[i + 1] << 8 | data[i], data[i + 3] << 8 | data[i + 2]);
                i = i + 4;
                this["v2"]['xxh_update'](data[i + 1] << 8 | data[i], data[i + 3] << 8 | data[i + 2]);
                i = i + 4;
                this["v3"]['xxh_update'](data[i + 1] << 8 | data[i], data[i + 3] << 8 | data[i + 2]);
                i = i + 4;
                this["v4"]['xxh_update'](data[i + 1] << 8 | data[i], data[i + 3] << 8 | data[i + 2]);
              i = i + 4;
          if (i < l) {
            if (_0x450143) {
              this['memory'] += data['slice'](i);
              if (_0x2ff06b) {
                this['memory']['set'](data["subarray"](i, l), this["memsize"]);
                data['copy'](this['memory'], this['memsize'], i, l);
            this['memsize'] = l - i;
          return this;
        };
        URI['prototype']['digest'] = function() {
          var data = this["memory"];
          var is_str = typeof data == "string";
          var i = 0;
          var num_blocks = this['memsize'];
          var state;
          var setArgName;
          var chalk = new $;
          if (this["total_len"] >= 16) {
            state = this["v1"]['rotl'](1)['add'](this["v2"]['rotl'](7)['add'](this["v3"]['rotl'](12)['add'](this["v4"]['rotl'](18))));
            state = this['seed']['add'](msg);
          state['add'](chalk['fromNumber'](this['total_len']));
          for (; i <= num_blocks - 4;) {
            if (is_str) {
              chalk['fromBits'](data['charCodeAt'](i + 1) << 8 | data["charCodeAt"](i), data['charCodeAt'](i + 3) << 8 | data['charCodeAt'](i + 2));
              chalk["fromBits"](data[i + 1] << 8 | data[i], data[i + 3] << 8 | data[i + 2]);
            state['add'](chalk['multiply'](item))['rotl'](17)['multiply'](inputel);
            i = i + 4;
          for (; i < num_blocks;) {
            chalk["fromBits"](is_str ? data['charCodeAt'](i++) : data[i++], 0);
            state['add'](chalk['multiply'](msg))['rotl'](11)['multiply'](time);
          setArgName = state["clone"]()['shiftRight'](15);
          state['xor'](setArgName)['multiply'](value);
          setArgName = state['clone']()['shiftRight'](13);
          state['xor'](setArgName)['multiply'](item);
          setArgName = state['clone']()['shiftRight'](16);
          state['xor'](setArgName);
          this['init'](this["seed"]);
          return state;
        };
        if (typeof define != 'undefined' && define['amd']) {
          define([], function() {
            return URI;
        } else {
          if (typeof ParamLocation != 'undefined' && ParamLocation['exports']) {
            ParamLocation['exports'] = URI;
            window['XXH'] = URI;
        }
      })(this);
    })['call'](this, saveNotifs('buffer')["Buffer"]);
  }, {
    "buffer" : 3,
    "cuint" : 43
  }],
  47 : [function(saveNotifs, canCreateDiscussions, isSlidingUp) {
    (function(window, style, $) {
      function init(method, expanded, onInit, opt_logFunction) {
        this["id"] = method;
        this['nick'] = expanded;
        this['skinID'] = onInit;
        this["skinURL"] = opt_logFunction;
        this["x"] = 0;
        this["y"] = 0;
        this['lastX'] = 0;
        this['lastY'] = 0;
        this['mass'] = 0;
        this['clanTag'] = "";
        this['color'] = null;
        this["customColor"] = options['miniMapTeammatesColor'];
        this['alive'] = ![];
        this['updateTime'] = null;
        this['pi2'] = 2 * Math["PI"];
        this["setColor"] = function(isSlidingUp, canCreateDiscussions) {
          this['color'] = isSlidingUp;
          if (canCreateDiscussions['length'] == 7) {
            this['customColor'] = canCreateDiscussions;
        };
        this['drawPosition'] = function(style, sy, width, startcode, endcode) {
          if (!this['alive'] || startcode && endcode && this["id"] != endcode) {
            return;
          this['lastX'] = (29 * this['lastX'] + this["x"]) / 30;
          this['lastY'] = (29 * this['lastY'] + this["y"]) / 30;
          var name = (this['lastX'] + sy) * width;
          var destOffset = (this['lastY'] + sy) * width;
          if (this['nick']['length'] > 0) {
            style["font"] = options['miniMapNickFontWeight'] + " " + options['miniMapNickSize'] + 'px ' + options["miniMapNickFontFamily"];
            style['textAlign'] = 'center';
            if (options['miniMapNickStrokeSize'] > 0) {
              style['lineWidth'] = options["miniMapNickStrokeSize"];
              style["strokeStyle"] = options["miniMapNickStrokeColor"];
              style["strokeText"](this['nick'], name, destOffset - (options['miniMapTeammatesSize'] * 2 + 2));
            style['fillStyle'] = options['miniMapNickColor'];
            style['fillText'](this['nick'], name, destOffset - (options['miniMapTeammatesSize'] * 2 + 2));
          style['beginPath']();
          style['arc'](name, destOffset, options['miniMapTeammatesSize'], 0, this["pi2"], ![]);
          style["closePath"]();
          if (props['oneColoredTeammates']) {
            style['fillStyle'] = options['miniMapTeammatesColor'];
            style["fillStyle"] = this['color'];
          style['fill']();
        };
      }
      function getColor() {
        this["txt"] = "";
        this['txtCanvas'] = null;
        this['txtCtx'] = null;
        this["color"] = "#FFFFFF";
        this['stroke'] = ![];
        this['strokeWidth'] = 2;
        this["strokeColor"] = "#000000";
        this['font'] = '700 16px Ubuntu';
        this['fontFamily'] = 'Ubuntu';
        this['fontWeight'] = 700;
        this['fontSize'] = 16;
        this['margin'] = 3;
        this['scale'] = 1;
        this['quality'] = 1;
        this['measuredWidth'] = 0;
        this['redraw'] = ![];
        this["remeasure"] = ![];
        this['setTxt'] = function(be) {
          if (this['txt'] !== be) {
            this["txt"] = be;
            this['redraw'] = !![];
            this['remeasure'] = !![];
        };
        this['setColor'] = function(i) {
          if (this["color"] !== i) {
            this["color"] = i;
            this['redraw'] = !![];
        };
        this['setStroke'] = function(color) {
          if (this['stroke'] !== color) {
            this["stroke"] = color;
            this['redraw'] = !![];
        };
        this["setStrokeWidth"] = function(canCreateDiscussions) {
          if (!this['stroke']) {
            return;
          if (this["strokeWidth"] != canCreateDiscussions) {
            this['strokeWidth'] = canCreateDiscussions;
            this["redraw"] = !![];
            this['remeasure'] = !![];
        };
        this['setStrokeColor'] = function(strokeColor) {
          if (!this['stroke']) {
            return;
          if (this['strokeColor'] !== strokeColor) {
            this["strokeColor"] = strokeColor;
            this['redraw'] = !![];
        };
        this["setFont"] = function() {
          this['font'] = this['fontWeight'] + " " + this["fontSize"] + 'px ' + this['fontFamily'];
        };
        this['setFontFamily'] = function(canCreateDiscussions) {
          if (this['fontFamily'] !== canCreateDiscussions) {
            this['fontFamily'] = canCreateDiscussions;
            this['setFont']();
            this['redraw'] = !![];
            this["remeasure"] = !![];
        };
        this['setFontWeight'] = function(canCreateDiscussions) {
          if (this['fontWeight'] != canCreateDiscussions) {
            this['fontWeight'] = canCreateDiscussions;
            this['setFont']();
            this['redraw'] = !![];
            this['remeasure'] = !![];
        };
        this['setFontSize'] = function(canCreateDiscussions) {
          if (this['fontSize'] != canCreateDiscussions) {
            this['fontSize'] = canCreateDiscussions;
            this['margin'] = ~~(canCreateDiscussions * .2);
            this["setFont"]();
            this['redraw'] = !![];
        };
        this['setScale'] = function(canCreateDiscussions) {
          if (this["scale"] != canCreateDiscussions) {
            this['scale'] = canCreateDiscussions;
            this['redraw'] = !![];
        };
        this['createCanvas'] = function() {
          if (this['txtCanvas']) {
            return;
          this["txtCanvas"] = document['createElement']('canvas');
          this['txtCtx'] = this['txtCanvas']["getContext"]("2d");
          this['txtCtx']['ogarioCtx'] = !![];
        };
        this['setDrawing'] = function(value, mmCoreSplitViewBlock, mmaPushNotificationsComponent, mmaFrontpagePriority, isBgroundImg, mmaModFeedbackAutomSyncedEvent) {
          this["setColor"](value);
          this['setFontFamily'](mmCoreSplitViewBlock);
          this['setFontWeight'](mmaPushNotificationsComponent);
          this['setStroke'](mmaFrontpagePriority);
          this['setStrokeWidth'](isBgroundImg);
          this['setStrokeColor'](mmaModFeedbackAutomSyncedEvent);
        };
        this['measureWidth'] = function() {
          if (this['remeasure']) {
            this['txtCtx']['font'] = this['fontWeight'] + ' 10px ' + this['fontFamily'];
            this["measuredWidth"] = this['txtCtx']['measureText'](this["txt"])['width'];
            this["remeasure"] = ![];
          return ~~(this['fontSize'] / 10 * this['measuredWidth']) + this['strokeWidth'] * 2;
        };
        this['drawTxt'] = function() {
          this["createCanvas"]();
          if (this["redraw"]) {
            this['redraw'] = ![];
            this['txtCanvas']['width'] = this['measureWidth']();
            this["txtCanvas"]['height'] = this['fontSize'] + this['margin'];
            this['txtCtx']["font"] = this["font"];
            this['txtCtx']['globalAlpha'] = 1;
            this['txtCtx']['lineWidth'] = this['strokeWidth'];
            this['txtCtx']["strokeStyle"] = this['strokeColor'];
            this['txtCtx']['fillStyle'] = this['color'];
            if (this["stroke"]) {
              this['txtCtx']['strokeText'](this["txt"], this['strokeWidth'], this['fontSize'] - this['margin'] / 2);
            this['txtCtx']['fillText'](this['txt'], this['strokeWidth'], this['fontSize'] - this['margin'] / 2);
          return this['txtCanvas'];
        };
      }
      function construct(chart, column, index, table, opts, base64, type, variables, callback, isServer) {
        this["id"] = chart;
        this["x"] = column;
        this["y"] = index;
        this['targetX'] = column;
        this["targetY"] = index;
        this['color'] = opts;
        this["oppColor"] = null;
        this['size'] = table;
        this['targetSize'] = table;
        this['alpha'] = 1;
        this['nick'] = "";
        this['targetNick'] = "";
        this['nickCanvas'] = null;
        this['mass'] = 0;
        this['lastMass'] = 0;
        this['kMass'] = 0;
        this['massCanvas'] = null;
        this['massTxt'] = "";
        this['margin'] = 0;
        this['scale'] = 1;
        this["nickScale"] = 1;
        this['massScale'] = 1;
        this['virMassScale'] = 3;
        this['strokeScale'] = 1;
        this['fontSize'] = 26;
        this['nickSize'] = 26;
        this['lastNickSize'] = 0;
        this['massSize'] = 26;
        this['virMassSize'] = 26;
        this['nickStrokeSize'] = 3;
        this['massStrokeSize'] = 3;
        this['isFood'] = base64;
        this["isVirus"] = type;
        this["isPlayerCell"] = variables;
        this['shortMass'] = callback;
        this["virMassShots"] = isServer;
        this['rescale'] = ![];
        this["redrawNick"] = !![];
        this['redrawMass'] = !![];
        this['optimizedNames'] = ![];
        this['optimizedMass'] = ![];
        this['strokeNick'] = ![];
        this['strokeMass'] = ![];
        this['removed'] = ![];
        this['redrawed'] = 0;
        this['time'] = 0;
        this["skin"] = null;
        this["pi2"] = 2 * Math["PI"];
        this['update'] = function(s, ocolor, mmCoreSplitViewBlock, canCreateDiscussions, isSlidingUp, mmaPushNotificationsComponent) {
          this["x"] = s;
          this["y"] = ocolor;
          this['isVirus'] = canCreateDiscussions;
          this['isPlayerCell'] = isSlidingUp;
          this['setMass'](mmCoreSplitViewBlock);
          this['setNick'](mmaPushNotificationsComponent);
        };
        this['removeCell'] = function() {
          this['removed'] = !![];
          var i = data["cells"]['indexOf'](this);
          if (i != -1) {
            data['cells']["splice"](i, 1);
            if (props['virusesRange']) {
              i = data['viruses']['indexOf'](this);
              if (i != -1) {
                data['viruses']['splice'](i, 1);
            i = data['food']['indexOf'](this);
            if (i != -1) {
              data['food']['splice'](i, 1);
          i = data['playerCells']['indexOf'](this);
          if (i != -1) {
            data['removePlayerCell'] = !![];
            data['playerCells']["splice"](i, 1);
            i = data['playerCellIDs']["indexOf"](this["id"]);
            if (i != -1) {
              data['playerCellIDs']["splice"](i, 1);
          if (this['redrawed']) {
            data['removedCells']["push"](this);
          delete data['indexedCells'][this["id"]];
        };
        this['moveCell'] = function() {
          var backoffDelay = data['time'] - this['time'];
          var backoffDelaySeconds = backoffDelay / props['animation'];
          backoffDelaySeconds = backoffDelaySeconds < 0 ? 0 : backoffDelaySeconds > 1 ? 1 : backoffDelaySeconds;
          this["x"] += (this['targetX'] - this["x"]) * backoffDelaySeconds;
          this["y"] += (this['targetY'] - this["y"]) * backoffDelaySeconds;
          this['size'] += (this['targetSize'] - this['size']) * backoffDelaySeconds;
          this['alpha'] = backoffDelaySeconds;
          if (!this['removed']) {
            this['time'] = data["time"];
            return;
          if (backoffDelaySeconds == 1) {
            var artistTrack = data['removedCells']['indexOf'](this);
            if (artistTrack != -1) {
              data['removedCells']['splice'](artistTrack, 1);
        };
        this['isInView'] = function() {
          return this["id"] <= 0 ? ![] : this["x"] + this["size"] + 40 < data['viewX'] - data['canvasWidth'] / 2 / data['scale'] || this["y"] + this['size'] + 40 < data["viewY"] - data['canvasHeight'] / 2 / data['scale'] || this["x"] - this["size"] - 40 > data['viewX'] + data["canvasWidth"] / 2 / data["scale"] || this["y"] - this['size'] - 40 > data["viewY"] + data['canvasHeight'] / 2 / data['scale'] ? ![] : !![];
        };
        this["setMass"] = function(canCreateDiscussions) {
          this['size'] = canCreateDiscussions;
          if (canCreateDiscussions <= 40) {
            return ![];
          if (!this["massCanvas"]) {
            this['massCanvas'] = new getColor;
            return ![];
          this['mass'] = ~~(canCreateDiscussions * canCreateDiscussions / 100);
          this['redrawMass'] = !![];
          if (this["isVirus"]) {
            if (this['virMassShots'] && this["mass"] < 200) {
              this['mass'] = ~~((200 - this['mass']) / 14);
            this['massTxt'] = this['mass']['toString']();
            return !![];
          this["massTxt"] = this['mass']["toString"]();
          if (this['mass'] <= 200) {
            return !![];
          if (this['shortMass'] && this["mass"] >= 1E3) {
            this['kMass'] = Math['round'](this["mass"] / 100) / 10;
            this['massTxt'] = this['kMass'] + "k";
            return !![];
          if (this['optimizedMass']) {
            this['redrawMass'] = Math['abs']((this['mass'] - this['lastMass']) / this["mass"]) >= .02 || this["rescale"];
          return !![];
        };
        this['setNick'] = function(cb) {
          this["nick"] = cb;
          if (!cb || this['isVirus']) {
            return ![];
          if (!this['nickCanvas']) {
            this['nickCanvas'] = new getColor;
            return ![];
          return !![];
        };
        this['setScale'] = function(val, canCreateDiscussions, isSlidingUp, dontForceConstraints, forceExecution) {
          var _0x4be6f6 = Math['ceil'](val * 10) / 10;
          this['rescale'] = ![];
          if (this['scale'] != _0x4be6f6) {
            this['scale'] = _0x4be6f6;
            this["rescale"] = !![];
          this["nickScale"] = canCreateDiscussions;
          this['massScale'] = isSlidingUp;
          this['virMassScale'] = dontForceConstraints;
          this['strokeScale'] = forceExecution;
        };
        this['setFontSize'] = function() {
          if (this['isVirus']) {
            this['massSize'] = Math["ceil"](this['virMassSize'] * this['scale'] * this["virMassScale"]);
            return;
          this['fontSize'] = Math['max'](this['size'] * .3, 26) * this['scale'];
          this["nickSize"] = ~~(this['fontSize'] * this['nickScale']);
          this['massSize'] = ~~(this['fontSize'] * .5 * this['massScale']);
          if (this['optimizedNames']) {
            this['redrawNick'] = Math["abs"]((this['nickSize'] - this["lastNickSize"]) / this['nickSize']) >= .3 || this["rescale"];
            return;
          this['redrawNick'] = !![];
        };
        this["setStrokeSize"] = function() {
          if (this['strokeNick'] && !this['isVirus']) {
            this["nickStrokeSize"] = ~~(this["nickSize"] * .1 * this["strokeScale"]);
          if (this["strokeMass"]) {
            this['massStrokeSize'] = ~~(this["massSize"] * .1 * this['strokeScale']);
        };
        this['setDrawing'] = function() {
          this['optimizedNames'] = props["optimizedNames"];
          this['optimizedMass'] = props['optimizedMass'];
          this['shortMass'] = props['shortMass'];
          this['virMassShots'] = props["virMassShots"];
          this['strokeNick'] = props["namesStroke"];
          this['strokeMass'] = props['massStroke'];
        };
        this['setDrawingScale'] = function() {
          this['setScale'](style['viewScale'], options['namesScale'], options["massScale"], options["virMassScale"], options["strokeScale"]);
          this['setFontSize']();
          this['setStrokeSize']();
          this['margin'] = 0;
        };
        this['drawNick'] = function(graphic) {
          if (!this['nick'] || !this['nickCanvas'] || this['isVirus']) {
            return;
          var $ = this['nickCanvas'];
          $["setDrawing"](options['namesColor'], options['namesFontFamily'], options['namesFontWeight'], this["strokeNick"], this['nickStrokeSize'], options["namesStrokeColor"]);
          $['setTxt'](this['nick']);
          if (this['redrawNick']) {
            $['setFontSize'](this["nickSize"]);
            this['lastNickSize'] = this["nickSize"];
          $["setScale"](this["scale"]);
          var clipPath = $['drawTxt']();
          var idx = ~~(clipPath['width'] / this['scale']);
          var cb = ~~(clipPath['height'] / this['scale']);
          this['margin'] = ~~(cb / 2);
          graphic["drawImage"](clipPath, ~~this["x"] - ~~(idx / 2), ~~this["y"] - this['margin'], idx, cb);
        };
        this['drawMass'] = function(KUTE) {
          if (!this['massCanvas'] || this['size'] <= 40) {
            return;
          var $ = this['massCanvas'];
          $['setDrawing'](options["massColor"], options['massFontFamily'], options["massFontWeight"], this['strokeMass'], this['massStrokeSize'], options['massStrokeColor']);
          if (this['redrawMass']) {
            $['setTxt'](this['massTxt']);
            this['lastMass'] = this['mass'];
          $['setFontSize'](this["massSize"]);
          $['setScale'](this["scale"]);
          var PathPosition = $['drawTxt']();
          var ops = ~~(PathPosition["width"] / this['scale']);
          var container = ~~(PathPosition["height"] / this['scale']);
          var to = this["margin"] == 0 ? ~~this["y"] - ~~(container / 2) : ~~this["y"] + this['margin'];
          KUTE['drawImage'](PathPosition, ~~this["x"] - ~~(ops / 2), to, ops, container);
        };
        this['draw'] = function(args, canCreateDiscussions) {
          if (data["hideSmallBots"] && this["size"] <= 36) {
            return;
          args['save']();
          this["redrawed"]++;
          if (canCreateDiscussions) {
            this["moveCell"]();
          if (this['removed']) {
            args['globalAlpha'] *= 1 - this["alpha"];
          var firstArg = args['globalAlpha'];
          var _0xdf2477 = ![];
          var baseUri = this['isFood'] ? this['size'] + options['foodSize'] : this['size'];
          args['beginPath']();
          args['arc'](this["x"], this["y"], baseUri, 0, this['pi2'], ![]);
          args['closePath']();
          if (this['isFood']) {
            args['fillStyle'] = this["color"];
            args['fill']();
            args['restore']();
            return;
          if (this['isVirus']) {
            if (props['transparentViruses']) {
              args["globalAlpha"] *= options['virusAlpha'];
              _0xdf2477 = !![];
            if (props['virColors'] && data['play']) {
              args["fillStyle"] = router['setVirusColor'](baseUri);
              args['strokeStyle'] = router["setVirusStrokeColor"](baseUri);
              args['fillStyle'] = options['virusColor'];
              args['strokeStyle'] = options['virusStrokeColor'];
            args['fill']();
            if (_0xdf2477) {
              args['globalAlpha'] = firstArg;
              _0xdf2477 = ![];
            args['lineWidth'] = options["virusStrokeSize"];
            args["stroke"]();
            if (props['showMass']) {
              this['setDrawing']();
              this["setDrawingScale"]();
              this['setMass'](this['size']);
              this["drawMass"](args);
            args['restore']();
            return;
          if (props["transparentCells"]) {
            args['globalAlpha'] *= options['cellsAlpha'];
            _0xdf2477 = !![];
          var parent = this['color'];
          if (data['play']) {
            if (this["isPlayerCell"]) {
              if (props['myCustomColor']) {
                parent = params['color'];
              if (props['oppColors'] && !props['oppRings']) {
                parent = this["oppColor"];
          args['fillStyle'] = parent;
          args['fill']();
          if (_0xdf2477) {
            args['globalAlpha'] = firstArg;
            _0xdf2477 = ![];
          var tokens = null;
          if (props['customSkins'] && data['showCustomSkins']) {
            tokens = router["getCustomSkin"](this['targetNick'], this['color']);
            if (tokens) {
              if ((props['transparentSkins'] || data['play'] && props["oppColors"]) && !(this['isPlayerCell'] && !props['myTransparentSkin']) || this['isPlayerCell'] && props["myTransparentSkin"]) {
                args['globalAlpha'] *= options['skinsAlpha'];
                _0xdf2477 = !![];
              args['drawImage'](tokens, this["x"] - baseUri, this["y"] - baseUri, 2 * baseUri, 2 * baseUri);
              if (_0xdf2477) {
                args['globalAlpha'] = firstArg;
                _0xdf2477 = ![];
          if (props["teammatesInd"] && !this['isPlayerCell'] && baseUri <= 200 && (tokens || router['checkSkinsMap'](this["targetNick"], this['color']))) {
            defaults['drawTeammatesInd'](args, this["x"], this["y"], baseUri);
          if (props['noNames'] && !props['showMass'] || canCreateDiscussions) {
            args["restore"]();
            return;
          var idName = ![];
          if (!this["isPlayerCell"]) {
            idName = router['setAutoHideCellInfo'](baseUri);
            if (idName && props['autoHideNames'] && props['autoHideMass']) {
              args["restore"]();
              return;
          this['setDrawing']();
          this['setDrawingScale']();
          args['globalAlpha'] *= options['textAlpha'];
          if (!props["noNames"] && !(idName && props['autoHideNames']) && !(this['isPlayerCell'] && props["hideMyName"]) && !(tokens && props['hideTeammatesNames'])) {
            if (this['setNick'](this['targetNick'])) {
              this["drawNick"](args);
          if (props['showMass'] && !(idName && props["autoHideMass"]) && !(this['isPlayerCell'] && props['hideMyMass']) && !(props['hideEnemiesMass'] && !this['isPlayerCell'] && !this['isVirus'])) {
            if (this['setMass'](this['size'])) {
              this['drawMass'](args);
          args["restore"]();
        };
      }
      function Node(lsb, msb) {
        this['view'] = lsb;
        this["offset"] = msb;
        this['contentType'] = 1;
        this["uncompressedSize"] = 0;
        this['setContentType'] = function() {
          this['contentType'] = this['readUint32']();
        };
        this['setUncompressedSize'] = function() {
          this['uncompressedSize'] = this["readUint32"]();
        };
        this['compareBytesGt'] = function(first, second) {
          var stripTerrain = first < 0;
          var coast = second < 0;
          if (stripTerrain != coast) {
            return stripTerrain;
          return first > second;
        };
        this["skipByte"] = function() {
          var _0x4556d2 = this['readByte']();
          if (_0x4556d2 < 128) {
            return;
          this['skipByte']();
        };
        this['readByte'] = function() {
          return this['view']['getUint8'](this['offset']++);
        };
        this["readUint32"] = function() {
          var result = 0;
          var shift = 0;
          for (; !![];) {
            var digit = this['readByte']();
            if (this['compareBytesGt'](32, shift)) {
              if (digit >= 128) {
                result = result | (digit & 127) << shift;
                result = result | digit << shift;
                break;
              this["skipByte"]();
              break;
            shift = shift + 7;
          return result;
        };
        this["readFlag"] = function() {
          return this['readUint32']() >>> 3;
        };
      }
      function select(supressSelectedEvent) {
        if (window['history'] && window['history']['replaceState']) {
          window["history"]['replaceState']({}, window["document"]['title'], supressSelectedEvent);
        }
      }
      function getKeysbyLocation() {
        if (window["location"]['pathname'] === '/ogario') {
          select("/" + window['location']['hash']);
        }
      }
      function postRouteData() {
        if (window["NREUM"]) {
          window["NREUM"] = null;
          delete window['NREUM'];
        }
        if (window['core']) {
          window['core'] = null;
          delete window['core'];
        }
        $['ajax']('https://agar.io/agario.core.js?v=1', {
          "success" : function(obj) {
            var $ = obj;
            var Button = null;
            $ = $['replace'](/(\(function\(([\w$]+)\){)/i, '$1 var ogario=$2.ogario,gameCtx=null;');
            $ = $["replace"](/(connect:function\((\w)\){)(\w=[\w$]+\(\w\);)([\w$]+\(\w\);[\w$]+\(\w\)})/i, "$1 ogario.getWS($2); $3$4");
            $ = $['replace'](/(([\w$]+)=[\w$]+\.getContext\("2d"\);)/i, 'if($2.id==="canvas"){$1 gameCtx=$2;}else{$1}');
            $ = $["replace"](/(setTarget:function\((\w),(\w)\)\{)([\w$]+\(\w,\w\)})/i, '$1 if(!ogario.play&&ogario.targeting){$2=ogario.targetX;$3=ogario.targetY;} if(ogario.pause){$2=ogario.innerW/2*ogario.canvasScale; $3=ogario.innerH/2*ogario.canvasScale;}$4');
            $ = $['replace'](/(function\s*([\w$]+)\(\w\){return\s*[\w$]+\(\w,\w\)})/i, "$1 ogario.getString=$2;");
            $ = $['replace'](/(\w\[\w\+(\d+)>>3]=(\w);\w\[\w\+(\d+)>>3]=(\w);\w\[\w\+(\d+)>>3]=(\w);\w\[\w\+(\d+)>>3]=(\w);)/i, '$1 ogario.setMapCoords($3,$5,$7,$9,$2,$8);');
            $ = $['replace'](/if\((\+\w\[\w>>3\])<1\.0\){/i, 'if($1<ogario.zoomResetValue){');
            $ = $['replace'](/(\w)(=\+(\w\[\w>>3\])\*\+\w\()(\.\d)(,\+\w\);)/i, 'if(!ogario.autoZoom){$3=ogario.zoomValue;} $1$2 (ogario.zoomSpeedValue||0.9) $5 ogario.zoomValue=$1;');
            $ = $['replace'](/(\w=\w\[\w>>2\]\|0;)((\w\[\w>>3\])=(\w);)(\w\[\w>>0\]=a\[\w>>0\];)/i, '$1 if(!ogario.autoZoom){$3=ogario.zoomValue;}else{$2}$5');
            $ = $['replace'](/(do{\w=\+\w\[\(\w\[\w>>2\]\|0\)\+\d+>>2];\w=\w\+\s*)(\+\(~~\+\w\(\+\(\w\*\w\/100\.0\)\)\|0\))(;\w=\w\+4\|0}while\(\(\w\|0\)!=\(\w\|0\)\);(\w)=(\w);)/i, 'ogario.playerCellsMass=[]; $1$2; ogario.playerCellsMass.push($2)$3 ogario.playerMass=$5; ogario.calculateMass();');
            $ = $['replace'](/(\w=\+\(\w>>>0\)\+4294967296\.0\*\+\(\w\|0\);)(\w=\+\w\[[\d\w]+\];)(if\(\w<\w\){\w=\w;return})/i, '$1$2');
            $ = $['replace'](/(if\(!\(\w\[[\d\w]+\]\|0\)\){)(\w=\w;return})([\w$]+\(\d+,\w\[[\d\w]+\]\|0\);)(\w=\w;return})/i, '$3$4');
            $ = $["replace"](/(if\(\(\w\|0\)==0\|\(\w\[[\d\w]+\]\|0\)==0\))([\w$]+\(\w,\d+,15\);)(else\s*)([\w$]+\(\w,\w\);)/i, "$4");
            $ = $["replace"](/(\w\[\w>>2\]=\(\w\[\w>>2\]\|0\)\+1;)([\w$]+\(\w\);)([\w$]+\(\w\);)(if\(!\(\w\[[\d\w]+\]\|0\)\){[\w$]+\(\w,\w\);(\w=\w)})/i, "$1$2$3 if(1){ogario.drawGrid(gameCtx);$5}");
            $ = $['replace'](/([\w$]+\(\d+,\w\[\w>>2\]\|0,(\+\w),(\+\w)\)\|0;[\w$]+\(\d+,\w\[\w>>2\]\|0,\+-(\+\w\[\w\+\d+>>3\]),\+-(\+\w\[\w\+\d+>>3\])\)\|0;)/i, "$1 ogario.viewScale=$2; ogario.playerX=$4; ogario.playerY=$5; ogario.customDraw(gameCtx);");
            $ = $['replace'](/(do\s*if\(\w\[\w\+\d+>>0\]\|0\){)(if\(\(\w\[[\d\w]+\]\|0\)==0\?\(\w\[\(\w\[\w>>2\]\|0\)\+\d+>>0\]\|0\)==0:0\)break;)/i, '$1 if(ogario.gameMode!==\':teams\'){break;} $2');
            $ = $['replace'](/(while\(0\);)([\w$]+\(\w,\w\);)(\w=\w\[\w>>2\]\|0;)(if\(\(\(!\(\(\w\[\w\+\d+>>0\]\|0\)!=0\|\(\w\[[\d\w]+\]\|0\)==0\)\?\(\w\[\w\+\d+>>0\]\|0\)==0:0\)\?\(\w\[\w\+\d+>>0\]\|0\)==0:0\)\?\(\w\[\w\+\d+>>0\]\|0\)==0:0\))([\w$]+\(\w,\w\);)(if\(\(\w\[\w\+\d+>>0\]\|0\)!=0\?\(\w\[\(\w\[\w>>2\]\|0\)\+\d+>>0\]\|0\)!=0:0\))([\w$]+\(\w,\w\);)([\w$]+\(\w,\w\);)([\w$]+\(\w,\w\);)(if\(!\(\w\[\(\w\[\w>>2\]\|0\)\+\d+>>0\]\|0\)\){)(\w=\w\+\d+\|0;\w\[\w>>0\]=1;\w=\w;return})([\w$]+\(\w,\w\);)(\w=\w\+\d+\|0;\w\[\w>>0\]=1;\w=\w;return})/i, 
            '$1$13');
            $ = $["replace"](/((\w)=\(\w\[\w\+\d+>>0\]\|0\)!=0;)(if\(\(\w\[[\d\w]+\]\|0\)!=0\?\(\w\[[\d\w]+\]\|\w\[(\w)\+\d+>>0\]\)<<24>>24==0:0\))((\w)=\w\[(\w)\+\d+>>2\]\|0;)else/i, '$2=1; $3 if(!ogario.vanillaSkins&&ogario.customSkins){$6=0;}else{$5}else');
            $ = $['replace'](/if\((\(\w\|0\)!=0\?\(\w\[\w\+\d+>>2\]&2\|0\)!=0:0)\){/i, 'if(0){');
            $ = $['replace'](/(\/100\.0;)(\w+=\w+<0\.0\?0\.0:\w+>1\.0\?1\.0:\w+;)/gi, '/ogario.animation;$2');
            $ = $['replace'](/(\/100\.0,)(\(\w+<0\.0\?0\.0:\w+>1\.0\?1\.0:\w+)/gi, '/ogario.animation,$2');
            $ = $['replace'](/(if\(\w\[\w\+\d+>>0\]\|0\))({(\w)=\(\w\-\+\w\[\w>>3\]\)\/)(100\.0)(;[\w$]+\(\d+,\w\[\w>>2\]\|0,\+\(\w<0\.0\?1\.0:\w>1\.0\?0\.0:)(1\.0-\w)(\)\)\|0})/i, '$1$2 ogario.animation $5$6$7');
            $ = $['replace'](/((\w=(\(\w\[(\w)\+\d+>>0\]\|0\)==0);)([\w$]+\(\d+,\w\[\w>>2\]\|0\)\|0;)([\w$]+\(\d+,\w\[\w>>2\]\|0,\+\(\+(\w\[\w>>2\])\),\+\(\+(\w\[\w>>2\])\),\+\(\w\+\s*\+(\w\[\w>>2\])\),0\.0,6.283185307179586,0\)\|0;)([\w$]+\(\d+,\w\[\w>>2\]\|0\)\|0;)(\w=\w\[\w>>2\]\|0;)if\(!\w\){([\w$]+\(\d+,\w\|0,(\w)&255\|0,(\w)&255\|0,(\w)&255\|0\)\|0;)([\w$]+\(\d+,\w\[\w>>2\]\|0\)\|0;)break}if\(\w\){([\w$]+\(\d+,\w\|0,(\w)&255\|0,(\w)&255\|0,(\w)&255\|0\)\|0;)([\w$]+\(\d+,\w\[\w>>2\]\|0\)\|0))/i, 
            'var cellX=+(+$7),cellY=+(+$8),cellSize=+(+$9),isFood=!$3,isVirus=false,isPlayerCell=false,skipCell=false,nick=null,color=null,skin=null; if(isFood){if(!ogario.showFood||ogario.autoHideFoodOnZoom&&ogario.viewScale<0.2){break;}if(ogario.autoHideFood&&!ogario.foodIsHidden&&ogario.playerMass>1000){ogario.showFood=false;ogario.foodIsHidden=true;break;}if(!ogario.rainbowFood){ogario.foodCache.push({x:cellX,y:cellY,size:cellSize});break;}gameCtx.fillStyle=ogario.rgb2Hex($13&255,$14&255,$15&255);} if(ogario.hideSmallBots&&cellSize<=36){skipCell=true;break;} gameCtx.beginPath();gameCtx.arc(cellX,cellY,cellSize,0,2*Math.PI,false);gameCtx.closePath(); if(isFood){gameCtx.fill();break;} ogario.globalAlpha=gameCtx.globalAlpha; if(gameCtx.lineJoin===\'miter\'){isVirus=true;if(ogario.virColors&&ogario.play){gameCtx.fillStyle=ogario.setVirusColor(cellSize);gameCtx.strokeStyle=ogario.setVirusStrokeColor(cellSize);}else{gameCtx.fillStyle=ogario.virusColor;gameCtx.strokeStyle=ogario.virusStrokeColor;}if(ogario.transparentViruses){gameCtx.globalAlpha*=ogario.virusAlpha;}if(ogario.virusesRange&&ogario.play){ogario.virusesCache.push({x:cellX,y:cellY,size:cellSize});}gameCtx.fill();gameCtx.globalAlpha=ogario.globalAlpha;gameCtx.lineWidth=ogario.virusStrokeSize;gameCtx.stroke();break;} if((a[$4+ogario.nameMemOffset+4>>0]&1)==0|0){nick=ogario.getString($4+ogario.nameMemOffset+5);}else{nick=ogario.getString(c[$4+ogario.nameMemOffset+12>>2]|0);} color=ogario.rgb2Hex($13&255|0,$14&255|0,$15&255|0); gameCtx.fillStyle=color; if(nick&&color){if(ogario.showCustomSkins&&ogario.customSkins){skin=ogario.getCustomSkin(nick,color);}} if(ogario.play){var idA=c[$4+ogario.idOffset>>2]|0;var idB=c[ogario.idMemOffset]|0;var idC=c[ogario.idMemOffset+1]|0;loop:do{if((idB|0)!=(idC|0)){while(true){if((c[idB>>2]|0)==(idA|0)){break loop;}idB=idB+4|0;if((idB|0)==(idC|0)){idB=idC;break;}}}}while(false);isPlayerCell=(idB|0)!=(idC|0); if(isPlayerCell){ogario.playerCells.push({x:cellX,y:cellY,size:cellSize});ogario.playerColor=color;} if((ogario.oppColors&&!ogario.oppRings)||(ogario.myCustomColor&&isPlayerCell)){gameCtx.fillStyle=ogario.setOppColor(cellSize,isPlayerCell);} if(!isPlayerCell&&(ogario.splitRange||ogario.oppRings)){ogario.cacheCells(cellX,cellY,cellSize);}} if(ogario.transparentCells){gameCtx.globalAlpha*=ogario.cellsAlpha;}  gameCtx.fill(); gameCtx.globalAlpha=ogario.globalAlpha; if(((ogario.transparentSkins||(ogario.play&&ogario.oppColors))&&!(isPlayerCell&&!ogario.myTransparentSkin))||isPlayerCell&&ogario.myTransparentSkin){gameCtx.globalAlpha*=ogario.skinsAlpha;} if(skin){gameCtx.drawImage(skin,cellX-cellSize,cellY-cellSize,2*cellSize,2*cellSize);} break;$1');
            $ = $['replace'](/([\w$]+\(\d+,\w\[\w>>2\]\|0\)\|0}while\(0\);do\s*if\()(\w)\)/i, '$1$2&&ogario.vanillaSkins&&!skin)');
            $ = $['replace'](/(if\(\(\w\[\w\+\d+>>0\]\|0\)==0\?\(\(\(\(\w\[\w\+\d+>>2\]\|0\)\+\(\w\[[\d\w]+\]\|0\)\|0\)>>>0\)%10\|0\|0\)!=0:0\){\w=\w\[\w>>2\]\|0;[\w$]+\(\d+,\w\|0\)\|0;\w=\w;return})([\w$]+\((\w),\w\);)/i, "ogario.drawCellInfo(gameCtx, $3, cellX, cellY, cellSize, isFood, isVirus, isPlayerCell, skipCell, nick, color, skin !== null);");
            Button = $['match'](/(\w=0;\w=\w\[\w\+(\d+)>>2\]\|0;\w=\w\[(\d+)\]\|0;\w=\w\[[\d\w]+\]\|0;)(\w:do)/i);
            if (Button) {
              $ = $['replace'](/ogario.idOffset/g, Button[2]);
              $ = $["replace"](/ogario.idMemOffset/g, Button[3]);
            Button = $["match"](/[\w$]+\(\w\+(\d+)\+\(\(\w<4\.0\?~~\w:4\)\*80\|0\)\|0\)/i);
            if (Button) {
              $ = $['replace'](/ogario.nameMemOffset/g, Button[1]);
            $ = $['replace'](/(function\(\){)(for\(var\s+\w=document.createElement\("canvas"\)\.getContext\("2d"\))/i, '$1 console.log("create"); $2');
            $ = $["replace"](/(\w\[\w\+16>>2\]=0;)(\w\[\w>>2\])=([\w$]+\(\d+\)\|0;)(\w\[[\d\w]+\]=\(\w\[[\d\w]+\]\|0\)\+1)/gi, '$1 $2=-1; $4');
            $ = $['replace'](/(}\w\[\w>>2]=-1;\w\[\w>>2])=([\w$]+\(\d+\)\|0;)(\w\[[\d\w]+\]=\(\w\[[\d\w]+\]\|0\)\+1)/gi, '$1=-1; $3');
            $ = $['replace'](/(\){)(\w=\w\.\w\[(\w)\]\.canvas)/gi, '$1 if($3==-1){return;} $2');
            $ = $["replace"](/(\){)(\w\.\w\[(\w)\]\.(globalAlpha|font|scale|fillStyle|fillRect|fillText))/gi, "$1 if($3==-1){return;} $2");
            $ = $['replace'](/(\){)(return\s+\w\.\w\[(\w)\]\.measureText)/gi, '$1 if($3==-1){return;} $2');
            var arr = document['createElement']("script");
            arr['textContent'] = $;
            arr['async'] = !![];
            document['body']['appendChild'](arr);
          "dataType" : 'text',
          "method" : 'GET',
          "cache" : ![],
          "crossDomain" : !![]
        });
      }
      function updateDevicesAfterDelay() {
        window['onkeydown'] = function(canCreateDiscussions) {
          if (81 == canCreateDiscussions['keyCode'] && window["core"]['specialOn']) {
            window['core']["specialOn"]();
        };
        window['onkeyup'] = function(canCreateDiscussions) {
        };
      }
      function _events() {
        window["addEventListener"]('resize', function() {
          setTimeout(Layer, 50);
        }, ![]);
        window['addKeyListeners'] = function() {
          updateDevicesAfterDelay();
        };
      }
      function _0xb99174() {
        style['getWS'] = function(url) {
          router['getWS'](url);
        };
        style['displayLeaderboard'] = function() {
          router["displayLeaderboard"](style["leaderboardHTML"]);
        };
        style['drawGrid'] = function(url) {
          router['drawGrid'](url);
        };
        style['customDraw'] = function(url) {
          router["customDraw"](url);
        };
        style['drawCellInfo'] = function(url, middlewareList, fn, helloWorld, mmCoreSplitViewBlock, mmaPushNotificationsComponent, mmaFrontpagePriority, isBgroundImg, mmaModFeedbackAutomSyncedEvent, mmCoreEventQueueEmpty, newBasicAnswers, alwaysDownload) {
          router['drawCellInfo'](url, middlewareList, fn, helloWorld, mmCoreSplitViewBlock, mmaPushNotificationsComponent, mmaFrontpagePriority, isBgroundImg, mmaModFeedbackAutomSyncedEvent, mmCoreEventQueueEmpty, newBasicAnswers, alwaysDownload);
        };
        style['getCustomSkin'] = function(url, middlewareList) {
          return router["getCustomSkin"](url, middlewareList);
        };
        style['setVirusColor'] = function(url) {
          return router['setVirusColor'](url);
        };
        style['setVirusStrokeColor'] = function(url) {
          return router["setVirusStrokeColor"](url);
        };
        style["setOppColor"] = function(url, middlewareList) {
          return router["setOppColor"](url, middlewareList);
        };
      }
      function getSectionsData() {
        if (document['getElementById']("canvas")) {
          var svgRoot = document['getElementById']('canvas');
          svgRoot['addEventListener']("mousemove", function(cssText) {
            if (style['play'] && style['cursorTracking'] && style['setCursorPosition']) {
              style['clientX'] = cssText['clientX'];
              style['clientY'] = cssText['clientY'];
              style["setCursorPosition"]();
          return;
        }
        setTimeout(getSectionsData, 50);
      }
      function scrollHeightObserver() {
        if (window["MC"] && window["MC"]['showNickDialog']) {
          window["MC"]["_showNickDialog"] = window["MC"]["showNickDialog"];
          window["MC"]['showNickDialog'] = function() {
            window["MC"]["_showNickDialog"]["apply"](this, arguments);
            $(".ogario-menu")['show']();
            gotoNewOfflinePage();
          window["MC"]["_showStatsDialog"] = window["MC"]["showStatsDialog"];
          window["MC"]['showStatsDialog'] = function() {
            window["MC"]['_showStatsDialog']['apply'](this, arguments);
            gotoNewOfflinePage();
          window["MC"]['_onConnect'] = window["MC"]['onConnect'];
          window["MC"]['onConnect'] = function() {
            window["MC"]["_onConnect"]['apply'](this, arguments);
            if (router) {
              router['sendServerJoin']();
              router['sendServerData']();
              router['unlockButtons']();
          window["MC"]['_onPlayerSpawn'] = window["MC"]['onPlayerSpawn'];
          window["MC"]['onPlayerSpawn'] = function() {
            window["MC"]["_onPlayerSpawn"]['apply'](this, arguments);
            style["playerColor"] = null;
            if (router) {
              router["onPlayerSpawn"]();
          window["MC"]['_onPlayerDeath'] = window["MC"]['onPlayerDeath'];
          window["MC"]['onPlayerDeath'] = function() {
            window["MC"]['_onPlayerDeath']['apply'](this, arguments);
            if (router) {
              router['onPlayerDeath']();
          window["MC"]['_onAgarioCoreLoaded'] = window["MC"]['onAgarioCoreLoaded'];
          window["MC"]["onAgarioCoreLoaded"] = function() {
            window["MC"]['_onAgarioCoreLoaded']['apply'](this, arguments);
            if (window['core'] && window['core']['setNames']) {
              window['core']["setNames"](![]);
            if (window['core'] && window['core']["setShowMass"]) {
              window["core"]['setShowMass'](![]);
            Layer();
          window["MC"]['_wasInitialized'] = window["MC"]['wasInitialized'];
          window["MC"]['wasInitialized'] = function() {
            window["MC"]['_wasInitialized']['apply'](this, arguments);
            setTimeout(function() {
              Layer();
              if (router) {
                router["getDefaultSettings"]();
              router["connect"]();
              gotoNewOfflinePage();
          window["MC"]['onPlayerBanned'] = function(canCreateDiscussions) {
          return;
        }
        setTimeout(scrollHeightObserver, 50);
      }
      function Layer() {
        var inner = window["innerWidth"];
        var height = window['innerHeight'];
        var obj = $("#helloContainer");
        var naturalHeight = obj["innerHeight"]();
        if (naturalHeight > 0) {
          style["menuHeight"] = naturalHeight;
        } else {
          naturalHeight = style['menuHeight'] || 618;
        }
        var invDistance = Math['min'](1, height / naturalHeight);
        var magnitude = naturalHeight * invDistance;
        var picSize = Math["round"](height / 2 - .5 * magnitude);
        var deep = 'translate(-50%, 0%) scale(' + invDistance + ")";
        obj['css']("transform", deep);
        obj['css']("-ms-transform", deep);
        obj['css']("-webkit-transform", deep);
        obj['css']("top", "" + picSize + "px");
        style['innerW'] = inner;
        style['innerH'] = height;
      }
      function gotoNewOfflinePage() {
        if (router['protocolMode']) {
          return;
        }
        window['onkeydown'] = function(canCreateDiscussions) {
        };
      }
      function link() {
        window['core'] = {
          "connect" : function(params) {
            data['connect'](params);
          "disconnect" : function() {
          "sendNick" : function(_relatedTarget) {
            data["sendNick"](_relatedTarget);
          "sendSpectate" : function() {
            data['sendSpectate']();
          "eject" : function() {
            data['sendEject']();
          "split" : function() {
            data['sendSplit']();
          "specialOn" : function() {
            data['sendFreeSpectate']();
          "specialOff" : function() {
            data['sendFreeSpectate']();
          "sendFbToken" : function(_relatedTarget) {
            data['sendFbToken'](_relatedTarget);
          "sendGplusToken" : function(_relatedTarget) {
            data['sendGplusToken'](_relatedTarget);
          "recaptchaResponse" : function(_relatedTarget) {
            data["sendRecaptcha"](_relatedTarget);
          "setClientVersion" : function(_relatedTarget, position) {
            data["setClientVersion"](_relatedTarget, position);
          "proxyMobileData" : function(arr = []) {
            if (!Array['isArray'](arr)) {
              console['log']("ProxyMobileData ERROR: Array data required.");
              return;
            if (arr[0] == 8) {
              arr["unshift"](102);
            arr = new Uint8Array(arr);
            data['sendMessage'](new DataView(arr['buffer']));
        };
      }
      function markReadIf() {
        Float32Array = saveNotifs('buffer')['Buffer'];
        img_slide = saveNotifs('lz4');
      }
      function initSortMenu() {
        window['onresize'] = function() {
          defaults['resizeCanvas']();
          Layer();
        };
      }
      var Float32Array = null;
      var img_slide = null;
      var translations = {
        "pl" : {
          "start" : 'Start',
          "settings" : 'Ustawienia',
          "restoreSettings" : 'Przywróc ustawienia domyślne',
          "animationGroup" : 'Animacja',
          "zoomGroup" : 'Zoom',
          "respGroup" : 'Odrodzenie',
          "namesGroup" : "Nazwy",
          "massGroup" : "Masa",
          "skinsGroup" : 'Skiny',
          "foodGroup" : 'Pokarm',
          "transparencyGroup" : 'Przezroczystość / kolory',
          "gridGroup" : 'Siatka / sektory',
          "miniMapGroup" : 'Minimapa',
          "helpersGroup" : 'Wspomagacze',
          "mouseGroup" : 'Sterowanie myszką',
          "hudGroup" : 'HUD',
          "chatGroup" : 'Czat',
          "statsGroup" : "Statystyki",
          "extrasGroup" : 'Dodatkowe',
          "noSkins" : 'Wyłącz skiny',
          "noNames" : "Wy\u0142\u0105cz nazwy",
          "noColors" : 'Wyłącz kolory',
          "showMass" : "Poka\u017c mas\u0119",
          "skipStats" : 'Pomiń statystyki po śmierci',
          "showQuest" : 'Pokaż zadanie (quest)',
          "autoZoom" : 'Auto zoom',
          "animation" : 'Opóźnienie animacji',
          "zoomSpeedValue" : 'Szybkość zoomu',
          "quickResp" : 'Szybkie odrodzenie (klawisz)',
          "autoResp" : "Auto odrodzenie",
          "autoHideCellsInfo" : 'Autoukrywanie nazw i masy',
          "autoHideNames" : 'Autoukrywanie nazw',
          "autoHideMass" : 'Autoukrywanie masy',
          "autoHideFood" : 'Autoukrywanie pokarmu (masa)',
          "autoHideFoodOnZoom" : 'Autoukrywanie pokarmu (zoom)',
          "optimizedNames" : 'Zoptymalizowane nazwy',
          "hideMyName" : 'Ukryj własną nazwę',
          "hideTeammatesNames" : 'Ukryj nazwy graczy teamu',
          "optimizedMass" : 'Zoptymalizowana masa (+/-2%)',
          "shortMass" : 'Skrócona masa (k)',
          "virMassShots" : 'Licznik strzałów (wirusy)',
          "hideMyMass" : 'Ukryj własną masę',
          "hideEnemiesMass" : "Ukryj mas\u0119 przeciwnik\u00f3w",
          "vanillaSkins" : 'Podstawowe skiny',
          "customSkins" : "W\u0142asne skiny",
          "myTransparentSkin" : 'Mój przezroczysty skin',
          "myCustomColor" : 'Mój własny kolor',
          "transparentCells" : 'Przezroczyste kulki',
          "transparentViruses" : 'Przezroczyste wirusy',
          "transparentSkins" : "Przezroczyste skiny",
          "showGrid" : 'Siatka',
          "showBgSectors" : "Sektory w tle",
          "showMapBorders" : 'Granice mapy',
          "showGhostCells" : 'Duchy kulek',
          "showMiniMap" : 'Pokaż minimapę',
          "showMiniMapGrid" : 'Pokaż siatkę minimapy',
          "showMiniMapGuides" : "Poka\u017c prowadnice na minimapie",
          "showMiniMapGhostCells" : 'Pokaż duchy kulek na minimapie',
          "oneColoredTeammates" : 'Jednokolorowi gracze',
          "optimizedFood" : "Zoptymalizowany pokarm",
          "rainbowFood" : 'Kolorowy pokarm',
          "oppColors" : "Kolory przeciwnik\u00f3w",
          "oppRings" : 'Ringi przeciwników',
          "virColors" : 'Kolory wirusów',
          "splitRange" : 'Zasięg podziału',
          "virusesRange" : 'Zasięg wirusów',
          "textStroke" : 'Obwódki nazw i masy',
          "namesStroke" : 'Obwódki nazw',
          "massStroke" : 'Obwódki masy',
          "cursorTracking" : "\u015aledzenie kursora",
          "teammatesInd" : 'Wskaźniki graczy teamu',
          "mouseSplit" : 'LPM - Split myszką',
          "mouseFeed" : 'PPM - Feed myszką',
          "mouseInvert" : 'Odwróć klawisze myszki',
          "disableChat" : 'Wyłącz czat',
          "hideChat" : 'Ukryj czat',
          "chatSounds" : "Powiadomienia d\u017awi\u0119kowe",
          "chatEmoticons" : 'Emotikony',
          "showChatImages" : "Poka\u017c obrazki na czacie",
          "showChatVideos" : "Poka\u017c filmiki na czacie",
          "showChatBox" : 'Czatbox zamiast wyskakujących wiadomości',
          "messageSound" : 'Dźwięk powiadomienia o wiadomości',
          "commandSound" : 'Dźwięk powiadomienia o komendzie',
          "showTop5" : 'Pokaż top 5 teamu',
          "showTargeting" : "Poka\u017c namierzanie",
          "showTime" : 'Pokaż aktualny czas',
          "showLbData" : "Poka\u017c mas\u0119 w topce",
          "normalLb" : 'Nagłówek "Topka"',
          "centeredLb" : 'Wyśrodkowana topka',
          "fpsAtTop" : 'Statystyki na górze',
          "showStats" : 'Pokaż statystyki',
          "showStatsMass" : 'Statystyki: Masa',
          "showStatsSTE" : 'Statystyki: STE',
          "showStatsN16" : 'Statystyki: n/16',
          "showStatsFPS" : 'Statystyki: FPS',
          "blockPopups" : 'Blokuj popupy (reklamy/sklep/zadanie)',
          "hotkeys" : "Skr\u00f3ty klawiszowe",
          "hk-inst-assign" : 'Aby ustawić skrót klawiszowy kliknij na polu skrótu i naciśnij wybrany klawisz.',
          "hk-inst-delete" : 'Aby usunąć skrót klawiszowy kliknij na polu skrótu i naciśnij klawisz DELETE.',
          "hk-inst-keys" : 'Możliwe kombinacje skrótów klawiszowych z użyciem klawiszy CTRL oraz ALT.',
          "hk-feed" : 'Feed',
          "hk-macroFeed" : "Szybki feed",
          "hk-split" : 'Podział',
          "hk-doubleSplit" : 'Podwójny podział',
          "hk-split16" : 'Podział na 16',
          "hk-pause" : 'Pauza kulki',
          "hk-showTop5" : 'Pokaż/ukryj top 5 teamu',
          "hk-showTime" : 'Pokaż/ukryj aktualny czas',
          "hk-showSplitRange" : 'Pokaż/ukryj zasięg podziału',
          "hk-showSplitInd" : 'Pokaż/ukryj zasięg podziału z ringami',
          "hk-showTeammatesInd" : 'Pokaż/ukryj wskaźniki graczy teamu',
          "hk-showOppColors" : 'Pokaż/ukryj kolory przeciwników',
          "hk-toggleSkins" : 'Przełącz skiny (własne/standardowe)',
          "hk-showSkins" : 'Pokaż/ukryj skiny',
          "hk-transparentSkins" : 'Włącz/wyłącz przezroczyste skiny',
          "hk-showStats" : 'Pokaż/ukryj statystyki gry',
          "hk-toggleCells" : 'Przełącz kulkę (najmniejsza/największa)',
          "hk-showFood" : "Poka\u017c/ukryj pokarm",
          "hk-showGrid" : "Poka\u017c/ukryj siatk\u0119",
          "hk-showMiniMapGuides" : 'Pokaż/ukryj prowadnice na minimapie',
          "hk-hideChat" : 'Pokaż/ukryj czat',
          "hk-showHUD" : 'Pokaż/ukryj HUD',
          "hk-copyLb" : 'Kopiuj topkę',
          "hk-showLb" : 'Pokaż/ukryj topkę',
          "hk-toggleAutoZoom" : "W\u0142\u0105cz/wy\u0142\u0105cz auto zoom",
          "hk-resetZoom" : 'Reset zoomu',
          "hk-zoomLevel" : 'Zoom - poziom',
          "hk-toggleDeath" : 'Przełącz miejsce śmierci',
          "hk-clearChat" : 'Pokaż historię czatu / Czyść czat',
          "hk-showBgSectors" : "Poka\u017c/ukryj sektory w tle",
          "hk-hideBots" : "Poka\u017c/ukryj ma\u0142e boty",
          "hk-showNames" : 'Pokaż/ukryj nazwy',
          "hk-hideTeammatesNames" : 'Pokaż/ukryj nazwy graczy teamu',
          "hk-showMass" : "Poka\u017c/ukryj mas\u0119",
          "hk-showMiniMap" : 'Pokaż/ukryj minimapę',
          "hk-chatMessage" : 'Napisz wiadomość na czacie',
          "hk-quickResp" : 'Szybkie odrodzenie (respawn)',
          "hk-autoResp" : 'Włącz/wyłacz auto odrodzenie',
          "hk-switchServerMode" : 'Przełącz serwer [publiczny/prywatny]',
          "hk-showTargeting" : 'Pokaż/ukryj panel namierzania',
          "hk-setTargeting" : "W\u0142\u0105cz/wy\u0142\u0105cz namierzanie (\u015bledzenie)",
          "hk-cancelTargeting" : 'Zatrzymaj namierzanie',
          "hk-changeTarget" : 'Zmień cel',
          "hk-privateMiniMap" : 'Pokaż cel na minimapie',
          "hk-showQuest" : 'Pokaż/ukryj zadanie',
          "commands" : 'Komendy',
          "comm1" : "Feeduj!",
          "comm2" : "Dziel si\u0119!",
          "comm3" : 'Pomocy na %currentSector%!',
          "comm4" : 'Wróg na %currentSector%!',
          "comm5" : 'Zabij pomocnika!',
          "comm6" : 'Strzel z wirusa!',
          "comm7" : 'Zjedz wirusa!',
          "comm8" : 'Zjebałem, wybacz.',
          "comm9" : 'Ja pierdolę...',
          "comm0" : 'Kurwa mać!',
          "comm10" : "Trick!",
          "comm11" : 'Lewo!',
          "comm12" : 'Góra!',
          "comm13" : 'Prawo!',
          "comm14" : 'Dół!',
          "saveComm" : 'Zapisz komendy',
          "theme" : "Wygl\u0105d",
          "restoreThemeSettings" : 'Przywróc ustawienia domyślne wyglądu',
          "basicTheming" : 'Podstawowy',
          "themePreset" : 'Motyw',
          "themeType" : "Typ motywu",
          "darkTheme" : 'Ciemny motyw',
          "lightTheme" : "Jasny motyw",
          "mainColor" : 'Kolor główny',
          "bgColor" : "T\u0142o",
          "bordersColor" : 'Granice mapy',
          "gridColor" : 'Siatka',
          "sectorsColor" : 'Czcionka sektorów',
          "namesColor" : 'Nazwy',
          "namesStrokeColor" : 'Obwódki nazw',
          "massColor" : 'Masa',
          "massStrokeColor" : 'Obwódki masy',
          "virusColor" : 'Wirusy',
          "virusStrokeColor" : "Obw\u00f3dki wirus\u00f3w",
          "foodColor" : 'Pokarm',
          "namesFont" : "Czcionka nazw",
          "massFont" : 'Czcionka masy',
          "sectorsFont" : 'Czcionka sektorów',
          "namesScale" : "Skala nazw",
          "massScale" : "Skala masy",
          "virMassScale" : 'Skala masy wirusów',
          "strokeScale" : 'Skala obwódek tekstu',
          "foodSize" : "Wielko\u015b\u0107 pokarmu",
          "bordersWidth" : "Grubo\u015b\u0107 granic mapy",
          "sectorsWidth" : 'Grubość siatki sektorów',
          "sectorsFontSize" : 'Rozmiar czcionki sektorów',
          "cellsAlpha" : 'Przezroczystość kulek',
          "skinsAlpha" : 'Przezroczystość skinów',
          "virusAlpha" : 'Przezroczystość wirusów',
          "textAlpha" : "Przezroczysto\u015b\u0107 nazw i masy",
          "virusStrokeSize" : 'Grubość obwódki wirusów',
          "teammatesIndColor" : 'Wskaźnik gracza',
          "cursorTrackingColor" : "\u015aledzenie kursora",
          "splitRangeColor" : 'Zasięg podziału',
          "safeAreaColor" : 'Bezpieczna strefa',
          "dangerAreaColor" : "Strefa zagro\u017cenia",
          "ghostCellsColor" : 'Duchy kulek',
          "ghostCellsAlpha" : "Przezroczysto\u015b\u0107 duch\u00f3w kulek",
          "menuTheming" : 'Menu',
          "menuPreset" : 'Motyw menu',
          "menuMainColor" : 'Kolor główny',
          "menuBtnTextColor" : "Tekst przycisku",
          "menuPanelColor" : 'Panel',
          "menuPanelColor2" : 'Panel (2)',
          "menuTextColor" : 'Tekst panelu',
          "menuTextColor2" : "Tekst panelu (2)",
          "btn1Color" : 'Przycisk #1',
          "btn1Color2" : "Przycisk #1 (2)",
          "btn2Color" : 'Przycisk #2',
          "btn2Color2" : 'Przycisk #2 (2)',
          "btn3Color" : 'Przycisk #3',
          "btn3Color2" : "Przycisk #3 (2)",
          "btn4Color" : 'Przycisk #4',
          "btn4Color2" : 'Przycisk #4 (2)',
          "menuBg" : "Grafika t\u0142a panelu",
          "menuOpacity" : "Przezroczysto\u015b\u0107",
          "hudTheming" : 'HUD',
          "hudMainColor" : 'Kolor główny',
          "hudColor" : 'Tło',
          "hudTextColor" : "Tekst",
          "statsHudColor" : 'Statystyki',
          "timeHudColor" : "Czas",
          "top5MassColor" : 'Masa',
          "lbMeColor" : 'Topka - ja',
          "lbTeammateColor" : 'Topka - team',
          "hudFont" : 'Czcionka HUD',
          "hudScale" : 'Skala HUD',
          "chatTheming" : "Czat",
          "messageColor" : "T\u0142o wiadomo\u015bci",
          "messageTextColor" : "Tekst wiadomo\u015bci",
          "messageTimeColor" : 'Czas wiadomości',
          "messageNickColor" : 'Nick wiadomości',
          "commandsColor" : 'Tło komendy',
          "commandsTextColor" : 'Tekst komendy',
          "commandsTimeColor" : "Czas komendy",
          "commandsNickColor" : 'Nick komendy',
          "chatBoxColor" : 'Tło czatboxu',
          "chatScale" : 'Skala czatu',
          "miniMapTheming" : 'Minimapa',
          "miniMapSectorsColor" : 'Sektory',
          "miniMapSectorColor" : 'Aktualny sektor',
          "miniMapGuidesColor" : 'Prowadnice',
          "miniMapNickColor" : "Nick",
          "miniMapNickStrokeColor" : 'Obwódka nicku',
          "miniMapMyCellColor" : "Moja kulka",
          "miniMapMyCellStrokeColor" : 'Obwódka mojej kulki',
          "miniMapTeammatesColor" : "Gracze",
          "miniMapDeathLocationColor" : 'Miejsce śmierci',
          "miniMapFont" : 'Czcionka minimapy',
          "miniMapNickFont" : 'Czcionka nicku',
          "miniMapWidth" : 'Szerokość minimapy',
          "miniMapSectorsOpacity" : "Przezroczysto\u015b\u0107 sektor\u00f3w",
          "miniMapNickSize" : 'Rozmiar nicku',
          "miniMapNickStrokeSize" : 'Grubość obwódki nicku',
          "miniMapMyCellSize" : 'Wielkość mojej kulki',
          "miniMapMyCellStrokeSize" : 'Grubość obwódki mojej kulki',
          "miniMapTeammatesSize" : 'Wielkość graczy',
          "miniMapGhostCellsColor" : 'Duchy kulek',
          "miniMapGhostCellsAlpha" : 'Przezroczystość duchów kulek',
          "imagesTheming" : "Grafika / kursory",
          "customBackground" : 'Grafika tła',
          "customCursor" : 'Grafika kursora',
          "hideChatMsgA" : 'Czat został włączony!',
          "hideChatMsgB" : 'Czat został ukryty!',
          "showSkinsMsgA" : "Skiny zosta\u0142y w\u0142\u0105czone!",
          "showSkinsMsgB" : 'Skiny zostały ukryte!',
          "hideSmallBotsMsgA" : "Ma\u0142e boty sta\u0142y si\u0119 widoczne!",
          "hideSmallBotsMsgB" : "Ma\u0142e boty zosta\u0142y ukryte!",
          "autoRespMsgA" : 'Auto odrodzenie zostało włączone!',
          "autoRespMsgB" : 'Auto odrodzenie zostało wyłączone!',
          "autoZoomMsgA" : 'Auto zoom został włączony!',
          "autoZoomMsgB" : "Auto zoom zosta\u0142 wy\u0142\u0105czony!",
          "targetNotSet" : 'Brak celu',
          "targetDead" : 'Nie żyje',
          "targetDistance" : "Dystans",
          "targetMass" : 'Masa razem',
          "totalPartyPlayers" : "Aktywnych graczy",
          "totalPartyMass" : "\u0141\u0105cznie masy",
          "exportImport" : 'Eksport / import ustawień',
          "exportSettings" : 'Eksportuj ustawienia',
          "exportInfo" : "Aby wyeksportowa\u0107 wybrane ustawienia skopiuj poni\u017cszy kod i zapisz go w pliku tekstowym z kodowaniem Unicode.",
          "importSettings" : "Importuj ustawienia",
          "importInfo" : 'Aby zaimportować wybrane ustawienia wklej poniżej wyeksportowany wcześniej kod i naciśnij przycisk "Importuj ustawienia".',
          "profile" : 'Profil',
          "profiles" : 'Profile',
          "skins" : "Skiny",
          "moreSkins" : 'Dodaj skiny',
          "thanks" : 'Dzięki Awesome!',
          "saveSett" : 'Zapisz ustawienia',
          "saved" : "Zapisano!",
          "resetSett" : 'Resetuj ustawienia',
          "close" : 'Zamknij',
          "enterChatMsg" : 'Napisz wiadomość',
          "activeParties" : 'Aktywne party',
          "noActiveParties" : 'Brak aktywnych party ;(',
          "playlist" : 'Playlista',
          "pause" : 'PAUZA!',
          "visit" : 'Odwiedź',
          "exit" : "OGARio by szymy: Czy na pewno chcesz opu\u015bcic gr\u0119?",
          "blockWarn" : 'UWAGA! Popupy zostały zablokowane w ustawieniach.',
          "unblockPopups" : 'Odblokuj tymczasowo',
          "mass" : 'Masa',
          "score" : 'Top',
          "leaderboard" : 'Topka',
          "user" : 'Użytkownik',
          "userMuted" : 'Użytkownik %user% został wyciszony.',
          "userUnmuted" : 'Wyłączono wyciszenie użytkownika %user%.',
          "mute" : 'Wycisz',
          "unmute" : "Wy\u0142\u0105cz wyciszenie",
          "mutedUsers" : 'Wyciszeni użytkownicy',
          "activeUsers" : 'Aktywni użytkownicy',
          "showActiveUsers" : "Poka\u017c aktywnych u\u017cytkownik\u00f3w",
          "none" : 'Brak',
          "sounds" : "D\u017awi\u0119ki",
          "page_back_button" : 'Wróć',
          "page_create_party" : 'Stwórz party',
          "page_join_party" : 'Dołącz',
          "page_login_and_play" : 'Zaloguj',
          "page_logout" : 'Wyloguj',
          "page_menu_login_facebook" : 'Zaloguj z Facebook',
          "page_menu_login_google" : "Zaloguj z Google",
          "page_menu_main_free_coins" : 'Darmowe Monety',
          "page_menu_main_gifts" : "Prezenty",
          "page_menu_main_dailyquests" : 'Zadania',
          "page_party_join_error" : "Nie mo\u017cna do\u0142\u0105czy\u0107 do tego party. Upewnij si\u0119, \u017ce token jest prawid\u0142owy lub stw\u00f3rz nowy.",
          "page_play" : 'Graj',
          "page_play_as_guest" : 'Graj jako gość',
          "page_shop" : 'Sklep',
          "page_spectate" : 'Obserwuj',
          "page_stats" : 'Statystyki'
        },
        "en" : {
          "start" : 'Home',
          "settings" : 'Settings',
          "restoreSettings" : 'Restore default settings',
          "animationGroup" : 'Animation',
          "zoomGroup" : 'Zoom',
          "respGroup" : 'Respawn',
          "namesGroup" : 'Names',
          "massGroup" : "Mass",
          "skinsGroup" : 'Skins',
          "foodGroup" : 'Food',
          "transparencyGroup" : "Transparency / colors",
          "gridGroup" : "Grid / sectors",
          "miniMapGroup" : 'Minimap',
          "helpersGroup" : 'Helpers',
          "mouseGroup" : 'Mouse control',
          "hudGroup" : 'HUD',
          "chatGroup" : 'Chat',
          "statsGroup" : 'Stats',
          "extrasGroup" : 'Extras',
          "noSkins" : 'No skins',
          "noNames" : "No names",
          "noColors" : "No colors",
          "showMass" : 'Show mass',
          "skipStats" : "Skip stats after death",
          "showQuest" : 'Show quest',
          "autoZoom" : 'Auto zoom',
          "animation" : 'Animation delay',
          "zoomSpeedValue" : 'Zoom speed',
          "quickResp" : 'Quick respawn (hotkey)',
          "autoResp" : 'Auto respawn',
          "autoHideCellsInfo" : 'Auto hide names and mass',
          "autoHideNames" : 'Auto hide names',
          "autoHideMass" : 'Auto hide mass',
          "autoHideFood" : 'Auto hide food (mass)',
          "autoHideFoodOnZoom" : "Auto hide food (zoom)",
          "optimizedNames" : 'Optimized names',
          "hideMyName" : 'Hide my name',
          "hideTeammatesNames" : 'Hide teammates names',
          "optimizedMass" : 'Optimized mass (+/-2%)',
          "shortMass" : 'Short mass (k)',
          "virMassShots" : 'Virus shots',
          "hideMyMass" : 'Hide my mass',
          "hideEnemiesMass" : 'Hide enemies mass',
          "vanillaSkins" : 'Vanilla skins',
          "customSkins" : 'Custom skins',
          "myTransparentSkin" : 'My transparent skin',
          "myCustomColor" : 'My custom color',
          "transparentCells" : 'Transparent cells',
          "transparentViruses" : "Transparent viruses",
          "transparentSkins" : "Transparent skins",
          "showGrid" : "Show grid",
          "showBgSectors" : 'Show background sectors',
          "showMapBorders" : 'Show map borders',
          "showGhostCells" : 'Ghost cells',
          "showMiniMap" : 'Show minimap',
          "showMiniMapGrid" : 'Show minimap grid',
          "showMiniMapGuides" : 'Show minimap guides',
          "showMiniMapGhostCells" : 'Show ghost cells',
          "oneColoredTeammates" : "One-colored teammates",
          "optimizedFood" : 'Optimized food',
          "rainbowFood" : 'Rainbow food',
          "oppColors" : 'Opponents colors',
          "oppRings" : 'Opponents rings',
          "virColors" : 'Viruses colors',
          "splitRange" : 'Split range',
          "virusesRange" : "Viruses range",
          "textStroke" : 'Names and mass stroke',
          "namesStroke" : "Names stroke",
          "massStroke" : 'Mass stroke',
          "cursorTracking" : "Cursor tracking",
          "teammatesInd" : 'Teammates indicators',
          "mouseSplit" : 'LMB - Mouse split',
          "mouseFeed" : 'RMB - Mouse feed',
          "mouseInvert" : 'Invert mouse buttons',
          "disableChat" : "Disable chat",
          "hideChat" : 'Hide chat',
          "chatSounds" : 'Sound notifications',
          "chatEmoticons" : 'Emoticons',
          "showChatImages" : "Show images on chat",
          "showChatVideos" : 'Show videos on chat',
          "showChatBox" : 'Chatbox instead of popups',
          "messageSound" : 'Message notification sound',
          "commandSound" : 'Command notification sound',
          "showTop5" : "Show team top 5",
          "showTargeting" : 'Show targeting',
          "showTime" : "Show current time",
          "showLbData" : 'Show leaderboard mass',
          "normalLb" : '"Leaderboard" header',
          "centeredLb" : 'Centered leaderboard',
          "fpsAtTop" : 'Game stats at the top',
          "showStats" : 'Show game stats',
          "showStatsMass" : 'Game stats: Mass',
          "showStatsSTE" : 'Game stats: STE',
          "showStatsN16" : 'Game stats: n/16',
          "showStatsFPS" : 'Game stats: FPS',
          "blockPopups" : 'Block popups (ads/shop/quest)',
          "hotkeys" : "Hotkeys",
          "hk-inst-assign" : 'To assign a hotkey click on the input field and press your chosen key.',
          "hk-inst-delete" : 'To delete a hotkey click on the input field and press the DELETE key.',
          "hk-inst-keys" : 'Possible key combinations with the CTRL and ALT keys.',
          "hk-feed" : "Feed",
          "hk-macroFeed" : "Macro feed",
          "hk-split" : 'Split',
          "hk-doubleSplit" : 'Double split',
          "hk-split16" : 'Split 16',
          "hk-pause" : 'Cell pause',
          "hk-showTop5" : 'Show/hide team top 5',
          "hk-showTime" : 'Show/hide current time',
          "hk-showSplitRange" : 'Show/hide split range',
          "hk-showSplitInd" : "Show/hide split indicators",
          "hk-showTeammatesInd" : "Show/hide teammates indicators",
          "hk-showOppColors" : 'Show/hide opponents colors',
          "hk-toggleSkins" : "Toggle skins (custom/default)",
          "hk-showSkins" : 'Show/hide skins',
          "hk-transparentSkins" : "Toggle transparent skins",
          "hk-showStats" : 'Show/hide game stats',
          "hk-toggleCells" : 'Toggle own cells (smallest/biggest)',
          "hk-showFood" : 'Show/hide food',
          "hk-showGrid" : 'Show/hide grid',
          "hk-showMiniMapGuides" : "Show/hide minimap guides",
          "hk-hideChat" : 'Show/hide chat',
          "hk-showHUD" : 'Show/hide HUD',
          "hk-copyLb" : 'Copy leaderboard',
          "hk-showLb" : "Show/hide leaderboard",
          "hk-toggleAutoZoom" : 'Toggle auto zoom',
          "hk-resetZoom" : 'Reset zoom',
          "hk-zoomLevel" : "Zoom level",
          "hk-toggleDeath" : 'Toggle death location',
          "hk-clearChat" : 'Show chat history / Clear chat',
          "hk-showBgSectors" : 'Show/hide background sectors',
          "hk-hideBots" : 'Show/hide small bots',
          "hk-showNames" : "Show/hide names",
          "hk-hideTeammatesNames" : 'Show/hide teammates names',
          "hk-showMass" : 'Show/hide mass',
          "hk-showMiniMap" : "Show/hide minimap",
          "hk-chatMessage" : 'Enter chat message',
          "hk-quickResp" : 'Quick respawn',
          "hk-autoResp" : 'Toggle auto respawn',
          "hk-switchServerMode" : 'Switch server [public/private]',
          "hk-showTargeting" : "Show/hide targeting panel",
          "hk-setTargeting" : 'Start/stop targeting (following)',
          "hk-cancelTargeting" : "Cancel targeting",
          "hk-changeTarget" : "Change target",
          "hk-privateMiniMap" : "Show target on the minimap",
          "hk-showQuest" : "Show/hide quest",
          "commands" : 'Commands',
          "comm1" : 'Feed me!',
          "comm2" : 'Split into me!',
          "comm3" : "Need backup at %currentSector%!",
          "comm4" : "Enemy spotted at %currentSector%!",
          "comm5" : 'Need a teammate!',
          "comm6" : "Tank the virus!",
          "comm7" : 'Eat the virus!',
          "comm8" : 'Let\'s bait!',
          "comm9" : 'Fake tricksplit!',
          "comm0" : 'Fuck!',
          "comm10" : 'Tricksplit!',
          "comm11" : 'Left!',
          "comm12" : 'Up!',
          "comm13" : "Right!",
          "comm14" : "Bottom!",
          "saveComm" : "Save commands",
          "theme" : 'Theme',
          "restoreThemeSettings" : 'Restore theme default settings',
          "basicTheming" : "Basic theming",
          "themePreset" : 'Theme preset',
          "themeType" : "Theme type",
          "darkTheme" : "Dark theme",
          "lightTheme" : 'Light theme',
          "mainColor" : "Main color",
          "bgColor" : 'Background',
          "bordersColor" : "Map borders",
          "gridColor" : 'Grid',
          "sectorsColor" : 'Sectors font',
          "namesColor" : 'Names',
          "namesStrokeColor" : 'Names stroke',
          "massColor" : "Mass",
          "massStrokeColor" : 'Mass stroke',
          "virusColor" : 'Virus',
          "virusStrokeColor" : 'Virus stroke',
          "foodColor" : 'Food',
          "namesFont" : "Names font",
          "massFont" : 'Mass font',
          "sectorsFont" : "Sectors font",
          "namesScale" : 'Names scale',
          "massScale" : "Mass scale",
          "virMassScale" : "Virus mass scale",
          "strokeScale" : 'Text stroke scale',
          "foodSize" : 'Food size',
          "bordersWidth" : "Map borders width",
          "sectorsWidth" : 'Sectors grid width',
          "sectorsFontSize" : 'Sectors font size',
          "cellsAlpha" : 'Cells transparency',
          "skinsAlpha" : "Skins transparency",
          "virusAlpha" : 'Virus transparency',
          "textAlpha" : 'Names & mass transparency',
          "virusStrokeSize" : 'Virus stroke size',
          "teammatesIndColor" : 'Teammate indicator',
          "cursorTrackingColor" : 'Cursor tracking',
          "splitRangeColor" : 'Split range',
          "safeAreaColor" : 'Safe area',
          "dangerAreaColor" : 'Danger area',
          "ghostCellsColor" : 'Ghost cells',
          "ghostCellsAlpha" : "Ghost cells transparency",
          "menuTheming" : 'Menu',
          "menuPreset" : 'Menu theme',
          "menuMainColor" : 'Main color',
          "menuBtnTextColor" : 'Button text',
          "menuPanelColor" : 'Panel',
          "menuPanelColor2" : 'Panel (2)',
          "menuTextColor" : "Panel text",
          "menuTextColor2" : 'Panel text (2)',
          "btn1Color" : 'Button #1',
          "btn1Color2" : 'Button #1 (2)',
          "btn2Color" : "Button #2",
          "btn2Color2" : 'Button #2 (2)',
          "btn3Color" : 'Button #3',
          "btn3Color2" : 'Button #3 (2)',
          "btn4Color" : 'Button #4',
          "btn4Color2" : 'Button #4 (2)',
          "menuBg" : "Panel background image",
          "menuOpacity" : 'Transparency',
          "hudTheming" : 'HUD',
          "hudMainColor" : 'Main color',
          "hudColor" : "Background",
          "hudTextColor" : 'Text',
          "statsHudColor" : 'Stats',
          "timeHudColor" : "Time",
          "top5MassColor" : 'Mass',
          "lbMeColor" : 'Leaderboard - me',
          "lbTeammateColor" : 'Leaderboard - teammate',
          "hudFont" : 'HUD font',
          "hudScale" : 'HUD scale',
          "chatTheming" : 'Chat',
          "messageColor" : "Message background",
          "messageTextColor" : "Message text",
          "messageTimeColor" : 'Message time',
          "messageNickColor" : 'Message nick',
          "commandsColor" : 'Command background',
          "commandsTextColor" : "Command text",
          "commandsTimeColor" : 'Command time',
          "commandsNickColor" : 'Command nick',
          "chatBoxColor" : 'Chatbox color',
          "chatScale" : 'Chat scale',
          "miniMapTheming" : 'Minimap',
          "miniMapSectorsColor" : 'Sectors',
          "miniMapSectorColor" : 'Current sector',
          "miniMapGuidesColor" : 'Guides',
          "miniMapNickColor" : 'Nick',
          "miniMapNickStrokeColor" : 'Nick stroke',
          "miniMapMyCellColor" : 'My cell',
          "miniMapMyCellStrokeColor" : 'My cell stroke',
          "miniMapTeammatesColor" : 'Teammates',
          "miniMapDeathLocationColor" : 'Death location',
          "miniMapFont" : 'Minimap font',
          "miniMapNickFont" : 'Nick font',
          "miniMapWidth" : 'Minimap width',
          "miniMapSectorsOpacity" : 'Sectors transparency',
          "miniMapNickSize" : "Nick size",
          "miniMapNickStrokeSize" : "Nick stroke size",
          "miniMapMyCellSize" : 'My cell size',
          "miniMapMyCellStrokeSize" : 'My cell stroke size',
          "miniMapTeammatesSize" : "Teammates size",
          "miniMapGhostCellsColor" : 'Ghost cells',
          "miniMapGhostCellsAlpha" : 'Ghost cells transparency',
          "imagesTheming" : 'Graphics / cursors',
          "customBackground" : 'Custom background image',
          "customCursor" : 'Custom cursor image',
          "hideChatMsgA" : 'Chat is visible!',
          "hideChatMsgB" : 'Chat is hidden!',
          "showSkinsMsgA" : 'Skins are visible!',
          "showSkinsMsgB" : 'Skins are hidden!',
          "hideSmallBotsMsgA" : 'Small bots are visible!',
          "hideSmallBotsMsgB" : 'Small bots are hidden!',
          "autoRespMsgA" : 'Auto respawn is on!',
          "autoRespMsgB" : 'Auto respawn is off!',
          "autoZoomMsgA" : 'Auto zoom is on!',
          "autoZoomMsgB" : 'Auto zoom is off!',
          "targetNotSet" : 'Target not set',
          "targetDead" : "Dead",
          "targetDistance" : "Distance",
          "targetMass" : 'Mass altogether',
          "totalPartyPlayers" : 'Active players',
          "totalPartyMass" : 'Total mass',
          "exportImport" : 'Export / import settings',
          "exportSettings" : "Export settings",
          "exportInfo" : "To export selected settings copy the code below and save it to a text file encoded in Unicode.",
          "importSettings" : 'Import settings',
          "importInfo" : 'To import selected settings paste an exported code below and press the "Import settings" button.',
          "profile" : 'Profile',
          "profiles" : "Profiles",
          "skins" : 'Skins',
          "moreSkins" : 'Add skins',
          "thanks" : 'Thanks to Awesome!',
          "saveSett" : "Save settings",
          "saved" : 'Saved!',
          "resetSett" : 'Reset to default',
          "close" : 'Close',
          "enterChatMsg" : 'Enter chat message',
          "activeParties" : 'Active parties',
          "noActiveParties" : 'No active parties ;(',
          "playlist" : 'Playlist',
          "pause" : 'PAUSE!',
          "visit" : "Visit",
          "exit" : "OGARio by szymy: Are you sure you want to quit the game?",
          "blockWarn" : 'WARNING! Popups are blocked in the settings.',
          "unblockPopups" : 'Temporary unblock',
          "mass" : "Mass",
          "score" : 'Score',
          "leaderboard" : 'Leaderboard',
          "user" : "User",
          "userMuted" : "User %user% has been muted.",
          "userUnmuted" : 'User %user% has been unmuted.',
          "mute" : 'Mute',
          "unmute" : "Unmute",
          "mutedUsers" : 'Muted users',
          "activeUsers" : 'Active users',
          "showActiveUsers" : 'Show active users',
          "none" : 'None',
          "sounds" : 'Sounds',
          "page_menu_main_free_coins" : "Free Coins",
          "page_menu_main_gifts" : "Gifts",
          "page_menu_main_dailyquests" : 'Daily Quest',
          "page_shop" : 'Shop'
        }
      };
      var loc = "en";
      var string = window['navigator']['language'] || window['navigator']["userLanguage"];
      if (string && translations['hasOwnProperty'](string)) {
        loc = string;
      }
      var messages = translations[loc];
      var store = {
        "comm1" : messages['comm1'],
        "comm2" : messages['comm2'],
        "comm3" : messages['comm3'],
        "comm4" : messages['comm4'],
        "comm5" : messages['comm5'],
        "comm6" : messages['comm6'],
        "comm7" : messages['comm7'],
        "comm8" : messages['comm8'],
        "comm9" : messages["comm9"],
        "comm0" : messages["comm0"],
        "comm10" : messages['comm10'],
        "comm11" : messages['comm11'],
        "comm12" : messages['comm12'],
        "comm13" : messages['comm13'],
        "comm14" : messages['comm14']
      };
      var entityMap = {
        "&" : '&amp;',
        "<" : '&lt;',
        ">" : '&gt;',
        '"' : '&quot;',
        "'" : "&#39;",
        "/" : '&#x2F;'
      };
      var folder = {
        ":)" : 'smile.svg',
        ";)" : 'wink.svg',
        "=)" : "smirk.svg",
        ":D" : 'grin.svg',
        "X-D" : 'xgrin.svg',
        "=D" : 'joy.svg',
        ":(" : "sad.svg",
        ";(" : 'cry.svg',
        ":P" : 'tongue.svg',
        ";P" : "tonguew.svg",
        ":*" : "kiss.svg",
        "$)" : "smileh.svg",
        "<3" : 'heart.svg',
        "8=)" : "cool.svg",
        ":o" : 'astonished.svg',
        "(:|" : 'sweat.svg',
        ":|" : 'neutral.svg',
        ":\\" : "unamused.svg",
        ":@" : "pouting.svg",
        "|-)" : "sleep.svg",
        "^_^" : "relaxed.svg",
        "-_-" : 'expressionless.svg',
        "$_$" : 'money.svg',
        "O:)" : 'angel.svg',
        "3:)" : 'devil.svg',
        "(poop)" : 'poo.svg',
        "(fuck)" : "finger.svg",
        "(clap)" : 'clap.svg',
        "(ok)" : 'ok.svg',
        "(victory)" : "victory.svg",
        "(y)" : "thumb.svg",
        "(n)" : 'thumbd.svg'
      };
      var fftBinsOfFreq = [{
        "name" : 'imgur.com',
        "url" : 'https://imgur.com/',
        "example" : 'https://i.imgur.com/xdmUp5N.png',
        "pattern" : 'https?:\/\/\w+\.imgur\.com\/\w{6,}\.(?:%file_ext%)\??\d*'
      }, {
        "name" : 'put.re',
        "url" : "https://put.re/",
        "example" : "https://s.put.re/iYHAW65g.png",
        "pattern" : 'https?:\/\/\w+\.put\.re\/\w{8,}\.(?:%file_ext%)'
      }, {
        "name" : 'postimages.org',
        "url" : 'https://postimages.org/',
        "example" : "https://i.postimg.cc/zzK0sRPg/xdmUp5N.png",
        "pattern" : "https?:\\/\\/\\w+\\.postimg\\.cc\\/\\w{8,}\\/\\w+\\.(?:%file_ext%)"
      }];
      var artistTrack = {
        "ogario-v3" : {
          "name" : 'OGARio v3',
          "darkTheme" : !![],
          "mainColor" : "#01d9cc",
          "bgColor" : "#000a11",
          "bordersColor" : '#01d9cc',
          "gridColor" : '#00243e',
          "sectorsColor" : '#00243e',
          "namesColor" : "#ffffff",
          "namesStrokeColor" : '#000000',
          "massColor" : '#ffffff',
          "massStrokeColor" : "#000000",
          "virusColor" : '#002f52',
          "virusStrokeColor" : '#00b9e8',
          "foodColor" : '#5000ff',
          "teammatesIndColor" : '#ffffff',
          "cursorTrackingColor" : '#ffffff',
          "splitRangeColor" : '#ffffff',
          "safeAreaColor" : '#ffffff',
          "dangerAreaColor" : '#bf00aa',
          "namesFont" : "ubuntu-bold",
          "massFont" : 'ubuntu-bold',
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
          "menuPreset" : 'ogario-v3',
          "menuMainColor" : '#01d9cc',
          "menuBtnTextColor" : '#ffffff',
          "menuPanelColor" : '#00243e',
          "menuPanelColor2" : "#002f52",
          "menuTextColor" : '#ffffff',
          "menuTextColor2" : '#8096a7',
          "btn1Color" : '#018cf6',
          "btn1Color2" : "#0176ce",
          "btn2Color" : '#00b9e8',
          "btn2Color2" : '#0099c0',
          "btn3Color" : "#8d5fe6",
          "btn3Color2" : '#814ee3',
          "btn4Color" : '#bf00aa',
          "btn4Color2" : "#a80096",
          "menuBg" : 'https://cdn.ogario.ovh/static/img/pattern.png',
          "menuOpacity" : .96,
          "hudMainColor" : '#01d9cc',
          "hudColor" : 'rgba(0,0,0,0.4)',
          "hudTextColor" : '#ffffff',
          "statsHudColor" : '#ffffff',
          "timeHudColor" : '#01d9cc',
          "top5MassColor" : "#bf00aa",
          "lbMeColor" : "#bf00aa",
          "lbTeammateColor" : '#018cf6',
          "hudFont" : "ubuntu-bold",
          "hudScale" : 1,
          "messageColor" : 'rgba(0,0,0,0.4)',
          "messageTextColor" : '#ffffff',
          "messageTimeColor" : "#018cf6",
          "messageNickColor" : '#01d9cc',
          "commandsColor" : "rgba(191,0,170,0.9)",
          "commandsTextColor" : '#ffffff',
          "commandsTimeColor" : '#bf00aa',
          "commandsNickColor" : '#ffffff',
          "chatBoxColor" : "rgba(0,0,0,0.4)",
          "chatScale" : 1,
          "miniMapSectorsColor" : "#ffffff",
          "miniMapSectorColor" : '#01d9cc',
          "miniMapGuidesColor" : '#bf00aa',
          "miniMapNickColor" : '#ffffff',
          "miniMapNickStrokeColor" : "#000000",
          "miniMapMyCellColor" : '#ffffff',
          "miniMapMyCellStrokeColor" : '#bf00aa',
          "miniMapTeammatesColor" : '#01d9cc',
          "miniMapDeathLocationColor" : '#bf00aa',
          "miniMapFont" : 'ubuntu-bold',
          "miniMapNickFont" : 'ubuntu-bold',
          "miniMapWidth" : 240,
          "miniMapSectorsOpacity" : .1,
          "miniMapNickSize" : 11,
          "miniMapNickStrokeSize" : 2,
          "miniMapMyCellSize" : 7.5,
          "miniMapMyCellStrokeSize" : 4,
          "miniMapTeammatesSize" : 5.5,
          "customBackground" : "",
          "customCursor" : 'https://cdn.ogario.ovh/static/img/cursors/cursor_02.cur'
        },
        "ogario-orange" : {
          "name" : 'OGARio v2',
          "darkTheme" : !![],
          "mainColor" : '#ff7800',
          "bgColor" : '#111111',
          "bordersColor" : '#ff7800',
          "gridColor" : "#292929",
          "sectorsColor" : '#292929',
          "namesColor" : "#ffffff",
          "namesStrokeColor" : '#000000',
          "massColor" : '#ffffff',
          "massStrokeColor" : "#000000",
          "virusColor" : '#666666',
          "virusStrokeColor" : '#666666',
          "foodColor" : '#e16400',
          "hudMainColor" : "#ff7800",
          "statsHudColor" : '#ff7800',
          "top5MassColor" : '#ff7800',
          "timeHudColor" : '#ff7800',
          "messageNickColor" : '#ff7800',
          "commandsColor" : 'rgba(255,120,0,0.9)',
          "commandsTimeColor" : '#ff7800',
          "commandsTextColor" : '#ffffff',
          "miniMapSectorsColor" : '#ffffff',
          "miniMapSectorColor" : '#ff7800',
          "miniMapGuidesColor" : '#ff7800',
          "miniMapMyCellColor" : '#ffffff',
          "miniMapMyCellStrokeColor" : '#ff7800',
          "miniMapTeammatesColor" : "#ff7800",
          "miniMapDeathLocationColor" : '#ff7800',
          "miniMapSectorsOpacity" : .1
        },
        "ogario-gold" : {
          "name" : 'OGARio LE',
          "darkTheme" : !![],
          "mainColor" : '#b5a642',
          "bgColor" : '#000000',
          "bordersColor" : '#b5a642',
          "gridColor" : '#111111',
          "sectorsColor" : '#111111',
          "namesColor" : "#ffffff",
          "namesStrokeColor" : '#000000',
          "massColor" : '#ffffff',
          "massStrokeColor" : "#000000",
          "virusColor" : '#666666',
          "virusStrokeColor" : "#666666",
          "foodColor" : '#998c36',
          "hudMainColor" : "#b5a642",
          "statsHudColor" : '#b5a642',
          "top5MassColor" : '#b5a642',
          "timeHudColor" : "#b5a642",
          "messageNickColor" : "#b5a642",
          "commandsColor" : "rgba(181,166,66,0.9)",
          "commandsTimeColor" : '#b5a642',
          "commandsTextColor" : '#ffffff',
          "miniMapSectorsColor" : '#ffffff',
          "miniMapSectorColor" : '#b5a642',
          "miniMapGuidesColor" : '#b5a642',
          "miniMapMyCellColor" : '#ffffff',
          "miniMapMyCellStrokeColor" : '#b5a642',
          "miniMapTeammatesColor" : '#b5a642',
          "miniMapDeathLocationColor" : '#b5a642',
          "miniMapSectorsOpacity" : .1
        },
        "sniikz-style" : {
          "name" : 'SniiKz\'s Style',
          "darkTheme" : !![],
          "mainColor" : '#01d9cc',
          "bgColor" : '#000000',
          "bordersColor" : "#ffffff",
          "gridColor" : '#00243e',
          "sectorsColor" : "#00243e",
          "namesColor" : '#ffffff',
          "namesStrokeColor" : "#000000",
          "massColor" : "#ffffff",
          "massStrokeColor" : '#000000',
          "virusColor" : "#3b3b3b",
          "virusStrokeColor" : '#ffffff',
          "foodColor" : '#5000ff',
          "teammatesIndColor" : '#ffffff',
          "cursorTrackingColor" : '#ffffff',
          "splitRangeColor" : "#ffffff",
          "safeAreaColor" : '#ffffff',
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
          "menuPreset" : 'ogario-v3',
          "menuMainColor" : '#fc0079',
          "menuBtnTextColor" : '#ffffff',
          "menuPanelColor" : "#050008",
          "menuPanelColor2" : '#1d0526',
          "menuTextColor" : '#ffffff',
          "menuTextColor2" : '#65458f',
          "btn1Color" : "#4f0242",
          "btn1Color2" : '#3b0431',
          "btn2Color" : '#6b0036',
          "btn2Color2" : '#4d0227',
          "btn3Color" : '#aa084e',
          "btn3Color2" : '#80063b',
          "btn4Color" : '#aa084e',
          "btn4Color2" : "#8a063f",
          "menuBg" : 'https://cdn.ogario.ovh/static/img/pattern.png',
          "menuOpacity" : 1,
          "hudMainColor" : "#5974ff",
          "hudColor" : "rgba(36,36,36,0.49)",
          "hudTextColor" : '#ffffff',
          "statsHudColor" : '#ffffff',
          "timeHudColor" : "#737373",
          "top5MassColor" : '#1fe000',
          "lbMeColor" : "#bf00aa",
          "lbTeammateColor" : '#018cf6',
          "hudScale" : 1.15,
          "messageColor" : "rgba(0,0,0,0.4)",
          "messageTextColor" : '#e8e8e8',
          "messageTimeColor" : "#545454",
          "messageNickColor" : "#05ff00",
          "commandsColor" : 'rgba(36,36,36,0.9)',
          "commandsTextColor" : '#ffffff',
          "commandsTimeColor" : "#545454",
          "commandsNickColor" : '#ffffff',
          "chatBoxColor" : 'rgba(0,0,0,0.4)',
          "chatScale" : 1,
          "miniMapSectorsColor" : "#ffffff",
          "miniMapSectorColor" : '#000000',
          "miniMapGuidesColor" : '#ff00a8',
          "miniMapNickColor" : '#ffffff',
          "miniMapNickStrokeColor" : '#4d4d4d',
          "miniMapMyCellColor" : "#f0ff3d",
          "miniMapMyCellStrokeColor" : '#acba07',
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
          "customCursor" : 'https://cdn.ogario.ovh/static/img/cursors/cursor_01.cur'
        },
        "hkg-style" : {
          "name" : 'HKG Style',
          "darkTheme" : !![],
          "mainColor" : "#651fff",
          "bgColor" : '#000000',
          "bordersColor" : '#ffffff',
          "gridColor" : '#111111',
          "sectorsColor" : '#111111',
          "namesColor" : '#ffffff',
          "namesStrokeColor" : '#000000',
          "massColor" : '#ffffff',
          "massStrokeColor" : '#000000',
          "virusColor" : '#666666',
          "virusStrokeColor" : '#666666',
          "foodColor" : '#651fff',
          "hudMainColor" : '#651fff',
          "statsHudColor" : "#651fff",
          "top5MassColor" : "#651fff",
          "timeHudColor" : '#651fff',
          "messageNickColor" : '#651fff',
          "commandsColor" : 'rgba(101,31,255,0.9)',
          "commandsTimeColor" : '#651fff',
          "commandsTextColor" : '#ffffff',
          "miniMapSectorsColor" : "#ffffff",
          "miniMapSectorColor" : '#651fff',
          "miniMapGuidesColor" : '#651fff',
          "miniMapMyCellColor" : '#ffffff',
          "miniMapMyCellStrokeColor" : '#651fff',
          "miniMapTeammatesColor" : "#651fff",
          "miniMapDeathLocationColor" : "#651fff",
          "miniMapSectorsOpacity" : .1
        },
        "agario-light" : {
          "name" : 'Agar.io Light',
          "darkTheme" : ![],
          "mainColor" : '#ffffff',
          "bgColor" : '#f2fbff',
          "bordersColor" : '#858a8c',
          "gridColor" : '#ced6d9',
          "sectorsColor" : "#ced6d9",
          "namesColor" : "#ffffff",
          "namesStrokeColor" : "#000000",
          "massColor" : '#ffffff',
          "massStrokeColor" : "#000000",
          "virusColor" : '#33ff33',
          "virusStrokeColor" : '#2de52d',
          "foodColor" : "#2de52d",
          "hudMainColor" : '#ffffff',
          "statsHudColor" : '#ffffff',
          "top5MassColor" : '#ffffff',
          "timeHudColor" : '#ffffff',
          "messageNickColor" : "#ffffff",
          "commandsColor" : 'rgba(255,255,255,0.9)',
          "commandsTimeColor" : '#ffffff',
          "commandsTextColor" : '#000000',
          "miniMapSectorsColor" : '#ffffff',
          "miniMapSectorColor" : "#ffffff",
          "miniMapGuidesColor" : "#ffffff",
          "miniMapMyCellColor" : '#ffffff',
          "miniMapMyCellStrokeColor" : "#ffffff",
          "miniMapTeammatesColor" : '#ffffff',
          "miniMapDeathLocationColor" : '#ffffff',
          "miniMapSectorsOpacity" : .25
        },
        "agario-dark" : {
          "name" : 'Agar.io Dark',
          "darkTheme" : !![],
          "mainColor" : '#ffffff',
          "bgColor" : '#111111',
          "bordersColor" : '#999999',
          "gridColor" : '#333333',
          "sectorsColor" : '#333333',
          "namesColor" : '#ffffff',
          "namesStrokeColor" : '#000000',
          "massColor" : '#ffffff',
          "massStrokeColor" : '#000000',
          "virusColor" : '#33ff33',
          "virusStrokeColor" : '#2de52d',
          "foodColor" : '#2de52d',
          "hudMainColor" : '#ffffff',
          "statsHudColor" : "#ffffff",
          "top5MassColor" : '#ffffff',
          "timeHudColor" : '#ffffff',
          "messageNickColor" : '#ffffff',
          "commandsColor" : 'rgba(255,255,255,0.9)',
          "commandsTimeColor" : '#ffffff',
          "commandsTextColor" : "#ffffff",
          "miniMapSectorsColor" : '#ffffff',
          "miniMapSectorColor" : '#ffffff',
          "miniMapGuidesColor" : '#ffffff',
          "miniMapMyCellColor" : '#ffffff',
          "miniMapMyCellStrokeColor" : "#ffffff",
          "miniMapTeammatesColor" : '#ffffff',
          "miniMapDeathLocationColor" : '#ffffff',
          "miniMapSectorsOpacity" : .1
        }
      };
      var GET_AUTH_URL_TIMEOUT = {
        "ogario-v3" : {
          "name" : 'OGARio v3',
          "menuMainColor" : "#01d9cc",
          "menuBtnTextColor" : '#ffffff',
          "menuPanelColor" : '#00243e',
          "menuPanelColor2" : '#002f52',
          "menuTextColor" : '#ffffff',
          "menuTextColor2" : '#8096a7',
          "btn1Color" : '#018cf6',
          "btn1Color2" : "#0176ce",
          "btn2Color" : '#00b9e8',
          "btn2Color2" : '#0099c0',
          "btn3Color" : '#8d5fe6',
          "btn3Color2" : "#814ee3",
          "btn4Color" : '#f300d8',
          "btn4Color2" : '#df00c6',
          "menuBg" : "https://cdn.ogario.ovh/static/img/pattern.png"
        },
        "ogario-v2" : {
          "name" : 'OGARio v2',
          "menuMainColor" : '#ff7800',
          "menuBtnTextColor" : "#ffffff",
          "menuPanelColor" : '#222222',
          "menuPanelColor2" : '#333333',
          "menuTextColor" : '#bbbbbb',
          "menuTextColor2" : '#bbbbbb',
          "btn1Color" : '#428bca',
          "btn1Color2" : '#3071a9',
          "btn2Color" : '#5cb85c',
          "btn2Color2" : '#449d44',
          "btn3Color" : '#f0ad4e',
          "btn3Color2" : '#ec971f',
          "btn4Color" : '#d9534f',
          "btn4Color2" : '#c9302c',
          "menuBg" : ""
        },
        "agario" : {
          "name" : 'Agar.io',
          "menuMainColor" : "#5bc0de",
          "menuBtnTextColor" : "#ffffff",
          "menuPanelColor" : '#ffffff',
          "menuPanelColor2" : "#cccccc",
          "menuTextColor" : "#333333",
          "menuTextColor2" : "#999999",
          "btn1Color" : '#428bca',
          "btn1Color2" : '#3071a9',
          "btn2Color" : "#5cb85c",
          "btn2Color2" : '#449d44',
          "btn3Color" : '#f0ad4e',
          "btn3Color2" : '#ec971f',
          "btn4Color" : "#d9534f",
          "btn4Color2" : '#c9302c',
          "menuBg" : ""
        }
      };
      var options = {
        "preset" : 'ogario-v3',
        "darkTheme" : !![],
        "mainColor" : "#01d9cc",
        "bgColor" : '#000a11',
        "bordersColor" : '#01d9cc',
        "gridColor" : "#00243e",
        "sectorsColor" : '#00243e',
        "namesColor" : '#ffffff',
        "namesStrokeColor" : '#000000',
        "massColor" : '#ffffff',
        "massStrokeColor" : '#000000',
        "virusColor" : '#002f52',
        "virusStrokeColor" : "#00b9e8",
        "foodColor" : "#5000ff",
        "teammatesIndColor" : '#ffffff',
        "cursorTrackingColor" : '#ffffff',
        "splitRangeColor" : '#ffffff',
        "ghostCellsColor" : '#ffffff',
        "safeAreaColor" : '#ffffff',
        "dangerAreaColor" : '#bf00aa',
        "namesFont" : 'ubuntu-bold',
        "namesFontFamily" : 'Ubuntu',
        "namesFontWeight" : 700,
        "massFont" : "ubuntu-bold",
        "massFontFamily" : 'Ubuntu',
        "massFontWeight" : 700,
        "sectorsFont" : 'ubuntu',
        "sectorsFontFamily" : 'Ubuntu',
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
        "menuPreset" : 'ogario-v3',
        "menuMainColor" : '#01d9cc',
        "menuBtnTextColor" : '#ffffff',
        "menuPanelColor" : "#00243e",
        "menuPanelColor2" : '#002f52',
        "menuTextColor" : "#ffffff",
        "menuTextColor2" : '#8096a7',
        "btn1Color" : '#018cf6',
        "btn1Color2" : "#0176ce",
        "btn2Color" : "#00b9e8",
        "btn2Color2" : '#0099c0',
        "btn3Color" : '#8d5fe6',
        "btn3Color2" : "#814ee3",
        "btn4Color" : "#bf00aa",
        "btn4Color2" : "#a80096",
        "menuBg" : 'https://cdn.ogario.ovh/static/img/pattern.png',
        "menuOpacity" : .96,
        "hudMainColor" : '#01d9cc',
        "hudColor" : "rgba(0,0,0,0.4)",
        "hudTextColor" : "#ffffff",
        "statsHudColor" : '#ffffff',
        "timeHudColor" : '#01d9cc',
        "top5MassColor" : '#bf00aa',
        "lbMeColor" : "#bf00aa",
        "lbTeammateColor" : '#018cf6',
        "hudFont" : 'ubuntu-bold',
        "hudFontFamily" : 'Ubuntu',
        "hudFontWeight" : 700,
        "hudScale" : 1,
        "messageColor" : 'rgba(0,0,0,0.4)',
        "messageTextColor" : '#ffffff',
        "messageTimeColor" : '#018cf6',
        "messageNickColor" : "#01d9cc",
        "commandsColor" : 'rgba(191,0,170,0.9)',
        "commandsTextColor" : '#ffffff',
        "commandsTimeColor" : "#bf00aa",
        "commandsNickColor" : '#ffffff',
        "chatBoxColor" : 'rgba(0,0,0,0.4)',
        "chatScale" : 1,
        "miniMapSectorsColor" : '#ffffff',
        "miniMapSectorColor" : '#01d9cc',
        "miniMapGuidesColor" : "#bf00aa",
        "miniMapNickColor" : "#ffffff",
        "miniMapNickStrokeColor" : '#000000',
        "miniMapMyCellColor" : '#ffffff',
        "miniMapMyCellStrokeColor" : '#bf00aa',
        "miniMapTeammatesColor" : '#01d9cc',
        "miniMapDeathLocationColor" : '#bf00aa',
        "miniMapGhostCellsColor" : '#ffffff',
        "miniMapFont" : 'ubuntu-bold',
        "miniMapFontFamily" : "Ubuntu",
        "miniMapFontWeight" : 700,
        "miniMapNickFont" : 'ubuntu-bold',
        "miniMapNickFontFamily" : 'Ubuntu',
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
          if (window['localStorage']['getItem']("ogarioThemeSettings") !== null) {
            obj = JSON["parse"](window['localStorage']['getItem']("ogarioThemeSettings"));
          var name;
          for (name in options) {
            if (options['hasOwnProperty'](name)) {
              if (obj && obj['hasOwnProperty'](name)) {
                options[name] = obj[name];
              if (style['hasOwnProperty'](name)) {
                style[name] = options[name];
        },
        "saveThemeSettings" : function() {
          window['localStorage']["setItem"]('ogarioThemeSettings', JSON["stringify"](options));
        },
        "restoreThemeSettings" : function() {
          if (window['localStorage']['getItem']('ogarioThemeSettings') !== null) {
            window["localStorage"]["removeItem"]("ogarioThemeSettings");
            window['location']['reload']();
        },
        "addCustomCSS" : function(key, setDirectly) {
          if (!this[key]) {
            this[key] = $('<style type=\'text/css\'>')['appendTo']("head");
          this[key]['html'](setDirectly);
        },
        "addPresetBox" : function(quiz, siteId, PL$10, index, method) {
          $(quiz)['append']('<div class="preset-box"><span class="title-box">' + messages[siteId] + '</span><div class="select-wrapper"><select id="' + siteId + '" class="form-control"></select></div></div>');
          var PL$11;
          for (PL$11 in PL$10) {
            if (PL$10["hasOwnProperty"](PL$11)) {
              $("#" + siteId)['append']('<option value="' + PL$11 + '">' + PL$10[PL$11]['name'] + '</option>');
          $("#" + siteId)['val'](options[index]);
          var Generator = this;
          $("#" + siteId)["on"]('change', function() {
            var option = this["value"];
            options[index] = option;
            Generator[method](option);
        },
        "addColorBox" : function(location, name, trait) {
          $(location)["append"]('<div class="color-box"><span class="title-box">' + messages[name] + '</span><div class="input-group ' + name + '-picker"><input type="text" value="' + options[name] + '" id="' + name + '" class="form-control" /><span class="input-group-addon"><i></i></span></div></div>');
          if (trait) {
            var traitsChosen = this;
            $(location + " ." + name + "-picker")['colorpicker']({
              "format" : 'hex'
              options[name] = e['color']["toHex"]();
              if (style["hasOwnProperty"](name)) {
                style[name] = options[name];
              traitsChosen[trait]();
            $(location + " ." + name + '-picker')["colorpicker"]({
              "format" : 'hex'
              options[name] = canCreateDiscussions['color']['toHex']();
              if (style["hasOwnProperty"](name)) {
                style[name] = options[name];
        },
        "addRgbaColorBox" : function(location, name, trait) {
          $(location)["append"]('<div class="color-box"><span class="title-box">' + messages[name] + '</span><div class="input-group ' + name + '-picker"><input type="text" value="' + options[name] + '" id="' + name + '" class="form-control" /><span class="input-group-addon"><i></i></span></div></div>');
          if (trait) {
            var traitsChosen = this;
            $(location + " ." + name + "-picker")['colorpicker']({
              "format" : 'rgba'
              var levels = iconColors["color"]['toRGB']();
              options[name] = "rgba(" + levels["r"] + "," + levels["g"] + "," + levels["b"] + "," + levels["a"] + ")";
              if (style['hasOwnProperty'](name)) {
                style[name] = options[name];
              traitsChosen[trait]();
            $(location + " ." + name + "-picker")['colorpicker']({
              "format" : 'rgba'
              var levels = canCreateDiscussions['color']["toRGB"]();
              options[name] = 'rgba(' + levels["r"] + "," + levels["g"] + "," + levels["b"] + "," + levels["a"] + ")";
              if (style["hasOwnProperty"](name)) {
                style[name] = options[name];
        },
        "addSliderBox" : function(location, name, typeSpec, fn, initialValue, event) {
          $(location)["append"]('<div class="slider-box"><div class="box-label"><span class="value-label">' + messages[name] + ': </span><span id="' + name + '-value" class="value">' + options[name] + '</span></div><input id="' + name + '-slider" type="range" min="' + typeSpec + '" max="' + fn + '" step="' + initialValue + '" value="' + options[name] + '"></div>');
          if (event) {
            var animationConfigs = this;
            $("#" + name + '-slider')["on"]('input', function() {
              var val = parseFloat($(this)["val"]());
              $("#" + name + "-value")['text'](val);
              options[name] = val;
              if (style['hasOwnProperty'](name)) {
                style[name] = val;
              animationConfigs[event]();
            $("#" + name + '-slider')["on"]("input", function() {
              var val = parseFloat($(this)['val']());
              $("#" + name + '-value')['text'](val);
              options[name] = val;
              if (style['hasOwnProperty'](name)) {
                style[name] = val;
        },
        "addInputBox" : function(boxItem, title, post, userId) {
          $(boxItem)['append']('<div class="input-box"><span class="title-box">' + messages[title] + '</span><input id="' + title + '" class="form-control" placeholder="' + post + '" value="' + options[title] + '" /></div>');
          var g = this;
          $("#" + title)["on"]('input', function() {
            options[title] = this['value'];
            g[userId]();
        },
        "addCursorBox" : function(value, _a) {
          if (_a === options['customCursor']) {
            $(value)['append']('<div class="cursor-box"><a href="#" class="active"><img src="' + _a + '"></a></div>');
            $(value)['append']('<div class="cursor-box"><a href="#"><img src="' + _a + '"></a></div>');
        },
        "setFont" : function(name, value) {
          options[name] = value;
          options[name + "Family"] = this["setFontFamily"](value);
          options[name + 'Weight'] = this["setFontWeight"](value);
          if (style['hasOwnProperty'](name + 'Family')) {
            style[name + 'Family'] = options[name + 'Family'];
          if (style['hasOwnProperty'](name + "Weight")) {
            style[name + "Weight"] = options[name + "Weight"];
        },
        "addFontBox" : function(stealth, value, i) {
          $(stealth)['append']('<div class="font-box"><span class="title-box">' + messages[value] + '</span><div class="select-wrapper"><select id="' + value + '" class="form-control"></select></div></div>');
          $("#" + value)["append"]('<option value="ubuntu">Ubuntu</option><option value="ubuntu-bold">Ubuntu Bold</option>');
          $("#" + value)["append"]('<option value="roboto">Roboto</option><option value="roboto-bold">Roboto Bold</option>');
          $("#" + value)['append']('<option value="oswald">Oswald</option><option value="oswald-bold">Oswald Bold</option>');
          $("#" + value)['val'](options[value]);
          var rejecters = this;
          if (i) {
            $("#" + value)["on"]("change", function() {
              var customIndex = this["value"];
              rejecters['setFont'](value, customIndex);
              rejecters[i]();
            $("#" + value)["on"]('change', function() {
              var lastviewmatrix = this['value'];
              rejecters['setFont'](value, lastviewmatrix);
        },
        "setFontFamily" : function(fontFamily) {
          if (fontFamily['indexOf']('roboto') != -1) {
            return 'Roboto';
            if (fontFamily['indexOf']('oswald') != -1) {
              return 'Oswald';
              return "Ubuntu";
        },
        "setFontWeight" : function(value) {
          if (value['indexOf']('bold') != -1) {
            return 700;
          return 400;
        },
        "setThemeMenu" : function() {
          var _0x111bee = this;
          $('#theme')['append']('<ul class="submenu-tabs"><li class="theme-main-tab active"><a href="#theme-main" class="active ogicon-paint-format" data-toggle="tab-tooltip" title="' + messages['basicTheming'] + '"></a></li><li class="theme-menu-tab"><a href="#theme-menu" class="ogicon-menu" data-toggle="tab-tooltip" title="' + messages['menuTheming'] + '"></a></li><li class="theme-hud-tab"><a href="#theme-hud" class="ogicon-display" data-toggle="tab-tooltip" title="' + messages["hudTheming"] + '"></a></li><li class="theme-chat-tab"><a href="#theme-chat" class="ogicon-bubbles" data-toggle="tab-tooltip" title="' + messages["chatTheming"] + '"></a></li><li class="theme-minimap-tab"><a href="#theme-minimap" class="ogicon-location2" data-toggle="tab-tooltip" title="' + messages["miniMapTheming"] + 
          '"></a></li><li class="theme-images-tab"><a href="#theme-images" class="ogicon-compass" data-toggle="tab-tooltip" title="' + messages['imagesTheming'] + '"></a></li></ul><div id="theme-main" class="submenu-panel"></div><div id="theme-menu" class="submenu-panel"></div><div id="theme-hud" class="submenu-panel"></div><div id="theme-chat" class="submenu-panel"></div><div id="theme-minimap" class="submenu-panel"></div><div id="theme-images" class="submenu-panel"></div>');
          this['addPresetBox']('#theme-main', 'themePreset', artistTrack, 'preset', 'changeThemePreset');
          this["addColorBox"]("#theme-main", 'bgColor', 'setBgColor');
          this['addColorBox']('#theme-main', 'bordersColor');
          this['addColorBox']('#theme-main', 'gridColor');
          this['addColorBox']("#theme-main", 'sectorsColor');
          this['addColorBox']('#theme-main', "namesColor");
          this['addColorBox']("#theme-main", 'namesStrokeColor');
          this["addColorBox"]('#theme-main', 'massColor');
          this['addColorBox']('#theme-main', 'massStrokeColor');
          this["addColorBox"]('#theme-main', 'virusColor');
          this["addColorBox"]('#theme-main', 'virusStrokeColor');
          this['addColorBox']('#theme-main', "foodColor", 'setFoodColor');
          this["addColorBox"]('#theme-main', 'teammatesIndColor', "setIndicatorColor");
          this['addColorBox']('#theme-main', 'cursorTrackingColor');
          this['addColorBox']('#theme-main', 'splitRangeColor');
          this['addColorBox']("#theme-main", 'safeAreaColor');
          this['addColorBox']('#theme-main', 'dangerAreaColor');
          this["addFontBox"]('#theme-main', "namesFont");
          this['addFontBox']('#theme-main', 'massFont');
          this["addFontBox"]('#theme-main', 'sectorsFont');
          this['addSliderBox']('#theme-main', 'sectorsFontSize', 200, 2E3, 10);
          this['addSliderBox']('#theme-main', 'namesScale', .5, 2, .1);
          this['addSliderBox']('#theme-main', 'massScale', 1, 5, 1);
          this["addSliderBox"]('#theme-main', 'virMassScale', 1, 5, 1);
          this['addSliderBox']("#theme-main", "strokeScale", 1, 4, .1);
          this['addSliderBox']('#theme-main', "foodSize", 1, 50, 1, 'setFoodColor');
          this["addSliderBox"]('#theme-main', 'virusStrokeSize', 2, 40, 1);
          this['addSliderBox']("#theme-main", 'bordersWidth', 2, 200, 2);
          this["addSliderBox"]('#theme-main', 'sectorsWidth', 2, 200, 2);
          this['addSliderBox']('#theme-main', 'cellsAlpha', .01, .99, .01);
          this['addSliderBox']('#theme-main', 'skinsAlpha', .01, .99, .01);
          this['addSliderBox']("#theme-main", 'virusAlpha', 0, 1, .01);
          this['addSliderBox']('#theme-main', "textAlpha", .1, 1, .01);
          this['addPresetBox']('#theme-menu', "menuPreset", GET_AUTH_URL_TIMEOUT, 'menuPreset', "changeMenuPreset");
          this['addSliderBox']('#theme-menu', 'menuOpacity', .1, 1, .01, 'setMenuOpacity');
          this['addColorBox']('#theme-menu', 'menuMainColor', 'setMenuMainColor');
          this['addColorBox']('#theme-menu', 'menuBtnTextColor', 'setMenuButtons');
          this['addColorBox']('#theme-menu', 'menuPanelColor', 'setMenuPanelColor');
          this['addColorBox']("#theme-menu", 'menuPanelColor2', 'setMenuPanelColor');
          this['addColorBox']('#theme-menu', 'menuTextColor', 'setMenuTextColor');
          this['addColorBox']('#theme-menu', "menuTextColor2", 'setMenuTextColor');
          this['addColorBox']('#theme-menu', 'btn1Color', 'setMenuButtons');
          this['addColorBox']('#theme-menu', 'btn1Color2', 'setMenuButtons');
          this["addColorBox"]('#theme-menu', "btn2Color", 'setMenuButtons');
          this['addColorBox']('#theme-menu', 'btn2Color2', 'setMenuButtons');
          this['addColorBox']('#theme-menu', 'btn3Color', "setMenuButtons");
          this['addColorBox']('#theme-menu', 'btn3Color2', 'setMenuButtons');
          this["addColorBox"]('#theme-menu', 'btn4Color', 'setMenuButtons');
          this["addColorBox"]('#theme-menu', 'btn4Color2', 'setMenuButtons');
          this['addInputBox']('#theme-menu', 'menuBg', 'Image URL', 'setMenuBg');
          this["addColorBox"]('#theme-hud', 'hudMainColor', 'setHudColors');
          this['addRgbaColorBox']('#theme-hud', "hudColor", "setHudColors");
          this["addColorBox"]('#theme-hud', "hudTextColor", "setHudColors");
          this['addColorBox']("#theme-hud", 'statsHudColor', 'setHudColors');
          this['addColorBox']('#theme-hud', 'timeHudColor', "setHudColors");
          this['addColorBox']('#theme-hud', 'top5MassColor', 'setHudColors');
          this['addColorBox']('#theme-hud', 'lbMeColor', "setHudColors");
          this['addColorBox']('#theme-hud', 'lbTeammateColor', 'setHudColors');
          this['addFontBox']('#theme-hud', 'hudFont', 'setHudFont');
          this['addSliderBox']("#theme-hud", "hudScale", 1, 2, .01, 'setHudScale');
          this["addRgbaColorBox"]("#theme-chat", 'messageColor', 'setChatColors');
          this['addColorBox']('#theme-chat', 'messageTextColor', "setChatColors");
          this["addColorBox"]('#theme-chat', 'messageTimeColor', 'setChatColors');
          this["addColorBox"]("#theme-chat", 'messageNickColor', 'setChatColors');
          this['addRgbaColorBox']('#theme-chat', 'commandsColor', "setChatColors");
          this['addColorBox']("#theme-chat", 'commandsTextColor', "setChatColors");
          this["addColorBox"]('#theme-chat', 'commandsTimeColor', "setChatColors");
          this['addColorBox']('#theme-chat', 'commandsNickColor', 'setChatColors');
          this["addRgbaColorBox"]('#theme-chat', 'chatBoxColor', 'setChatColors');
          this['addSliderBox']('#theme-chat', 'chatScale', 1, 2, .01, 'setChatScale');
          this['addColorBox']('#theme-minimap', 'miniMapSectorsColor', 'setMiniMapSectorsColor');
          this['addColorBox']('#theme-minimap', 'miniMapSectorColor');
          this['addColorBox']('#theme-minimap', 'miniMapNickColor');
          this["addColorBox"]('#theme-minimap', 'miniMapNickStrokeColor');
          this['addColorBox']('#theme-minimap', 'miniMapMyCellColor');
          this['addColorBox']('#theme-minimap', 'miniMapMyCellStrokeColor');
          this["addColorBox"]('#theme-minimap', 'miniMapTeammatesColor');
          this['addColorBox']('#theme-minimap', 'miniMapDeathLocationColor');
          this['addColorBox']('#theme-minimap', 'miniMapGuidesColor');
          this["addFontBox"]('#theme-minimap', 'miniMapFont', 'setMiniMapFont');
          this['addFontBox']('#theme-minimap', "miniMapNickFont");
          this['addSliderBox']("#theme-minimap", "miniMapWidth", 200, 400, 2, "setMiniMapWidth");
          this['addSliderBox']('#theme-minimap', 'miniMapSectorsOpacity', 0, 1, .01, 'setMiniMapSectorsOpacity');
          this['addSliderBox']('#theme-minimap', 'miniMapNickSize', 8, 16, 1);
          this['addSliderBox']('#theme-minimap', 'miniMapNickStrokeSize', 0, 6, 1);
          this['addSliderBox']('#theme-minimap', 'miniMapMyCellSize', 4, 10, .5);
          this['addSliderBox']('#theme-minimap', 'miniMapMyCellStrokeSize', 0, 10, 1);
          this['addSliderBox']('#theme-minimap', "miniMapTeammatesSize", 4, 10, .5);
          this["addInputBox"]('#theme-images', 'customBackground', 'Image URL', 'setCustomBackground');
          this['addInputBox']('#theme-images', 'customCursor', 'Cursor image URL', "setCustomCursor");
          var className = 'https://cdn.ogario.ovh/static/img/cursors/cursor_';
          var i = 0;
          for (; i < 35; i++) {
            if (i < 9) {
              this["addCursorBox"]('#theme-images', className + "0" + (i + 1) + ".cur");
              continue;
            this['addCursorBox']('#theme-images', className + "" + (i + 1) + '.cur');
          $(document)["on"]('click', '#theme-images .cursor-box a', function(canCreateDiscussions) {
            canCreateDiscussions['preventDefault']();
            var MY_MAPTYPE_ID = $('img', this)["attr"]('src');
            options['customCursor'] = MY_MAPTYPE_ID;
            _0x111bee['setCustomCursor']();
            $('#customCursor')['val'](MY_MAPTYPE_ID);
            $('#theme-images .cursor-box a')['removeClass']('active');
            $(this)['addClass']('active');
          $('#theme')['append']('<button class="btn btn-block btn-success btn-save"">' + messages['saveSett'] + '</button>');
          $(document)["on"]("click", '#theme .btn-save', function(canCreateDiscussions) {
            canCreateDiscussions['preventDefault']();
            var ig = $(this);
            ig['text'](messages['saved']);
            _0x111bee["saveThemeSettings"]();
            setTimeout(function() {
              ig["text"](messages["saveSett"]);
          $('#theme')['append']('<div class="restore-settings"><a href="#">' + messages['restoreThemeSettings'] + '</a></div>');
          $(document)["on"]('click', '#theme .restore-settings a', function(canCreateDiscussions) {
            canCreateDiscussions['preventDefault']();
            _0x111bee['restoreThemeSettings']();
          $('.skin')['colorpicker']({
            "format" : 'hex',
            "input" : '#color'
        },
        "changePreset" : function(name, components) {
          if (components[name]) {
            options[name] = name;
            name = components[name];
            return;
          var key;
          for (key in name) {
            if (name['hasOwnProperty'](key) && options['hasOwnProperty'](key)) {
              options[key] = name[key];
              if (style["hasOwnProperty"](key)) {
                style[key] = options[key];
              if ($('#theme .' + key + '-picker')) {
                $('#theme .' + key + '-picker')['colorpicker']('setValue', options[key]);
              if ($("#" + key + '-slider')) {
                $("#" + key + '-slider')['val'](options[key])['change']();
              if ($("input[type=text]#" + key) || $('select#' + key)) {
                $("#" + key)['val'](options[key]);
        },
        "changeThemePreset" : function(mmCoreSplitViewBlock) {
          this['changePreset'](mmCoreSplitViewBlock, artistTrack);
          this["setTheme"]();
        },
        "setFonts" : function() {
          this['setFont']('namesFont', options['namesFont']);
          this['setFont']("massFont", options['namesFont']);
          this['setFont']("sectorsFont", options["sectorsFont"]);
        },
        "setBgColor" : function() {
          $('body')["css"]("background-color", options['bgColor']);
        },
        "setFoodColor" : function() {
          if (!props["optimizedFood"]) {
            return;
          if (defaults) {
            defaults['preDrawPellet']();
        },
        "setIndicatorColor" : function() {
          if (defaults) {
            defaults['preDrawIndicator']();
        },
        "setCustomBackground" : function() {
          if (options['customBackground']) {
            $("body")['css']('background-image', 'url(' + options['customBackground'] + ")");
            $("body")["css"]("background-image", 'none');
        },
        "setCustomCursor" : function() {
          if (options["customCursor"]) {
            var artistTrack = '*{cursor:url(' + options['customCursor'] + '), auto !important}';
            artistTrack = "*{cursor: auto}";
          this['addCustomCSS']('cursorCSS', artistTrack);
        },
        "setMenu" : function() {
          this['setMenuOpacity']();
          this['setMenuMainColor']();
          this['setMenuPanelColor']();
          this['setMenuTextColor']();
          this["setMenuButtons"]();
          this["setMenuBg"]();
        },
        "changeMenuPreset" : function(mmCoreSplitViewBlock) {
          this['changePreset'](mmCoreSplitViewBlock, GET_AUTH_URL_TIMEOUT);
          this['setMenu']();
        },
        "setMenuOpacity" : function() {
          $("#helloContainer, #hotkeys, #exp-imp")['css']("opacity", options['menuOpacity']);
        },
        "setMenuMainColor" : function() {
          var artistTrack = '::-moz-selection{background-color:' + options['menuMainColor'] + '!important}::selection{background-color:' + options['menuMainColor'] + '!important}.menu-main-color,#quick-menu a:hover,.quick,.quick:focus,.menu-tabs a:hover,.menu-tabs .active,.submenu-tabs a:hover,.submenu-tabs .active,#stats center,#exp-imp h1{color:' + options['menuMainColor'] + '}#exp-bar .progress-bar-striped,.quick:hover,.rangeslider__fill{background-color:' + options['menuMainColor'] + '}#main-menu,.agario-side-panel,#hotkeys,#exp-imp{border-color:' + options["menuMainColor"] + '}.ps-scrollbar-y{background-color:' + options['menuMainColor'] + '!important}';
          this['addCustomCSS']('menuMainColorCSS', artistTrack);
        },
        "setMenuPanelColor" : function() {
          var artistTrack = '#main-menu,.agario-side-panel,#hotkeys,#exp-imp{background-color: ' + options['menuPanelColor'] + '}label:hover,.agario-panel input,.agario-panel select,.agario-side-panel input,.agario-side-panel select,.input-group-addon,.nick .input-group-btn,.skin .input-group-btn,#stream-mode,#hide-url,.menu-tabs a:hover,.menu-tabs .active,.submenu-tabs,#exp-bar .progress,#quick-menu a:hover,.quick,.select-wrapper,#hotkeys-cfg div.row:hover,#hotkeys-cfg .command-in,#exp-imp-settings textarea,.restore-settings{background-color: ' + options["menuPanelColor2"] + '}.agario-panel h5,.agario-side-panel h5,#stats h2,.menu-tabs,.submenu-tabs,#skins a.default,#stats hr,#hotkeys-cfg div.row, #exp-imp h1{border-color: ' + options['menuPanelColor2'] + "}.quick:hover,#skins a,#profiles{color:" + options['menuPanelColor2'] + "}input.stream-mode,input.hide-url{color:" + options['menuPanelColor2'] + "!important}";
          this["addCustomCSS"]("menuPanelColorCSS", artistTrack);
        },
        "setMenuTextColor" : function() {
          var artistTrack = '.agario-panel,.agario-side-panel,.agario-panel input,.agario-panel select,.agario-side-panel input,.agario-side-panel select,.input-group-addon,.dark .yt-username,#stream-mode,#hide-url,.menu-tabs a,.submenu-tabs a,#skins a.default:hover,#quick-menu a,#prev-profile.default:hover,#next-profile.default:hover,#statsText,#hotkeys,#hotkeys-cfg .command-in,#exp-imp{color:' + options['menuTextColor'] + '}#skins a.default:hover{border-color:' + options['menuTextColor'] + '}::-webkit-input-placeholder{color:' + options['menuTextColor2'] + '!important}::-moz-placeholder{color:' + options['menuTextColor2'] + '!important}#user-id-tag, #version-tag,#statsSubtext,#hotkeys-inst,#exp-imp textarea,.restore-settings a,.restore-settings a:hover{color:' + options['menuTextColor2'] + '}#hotkeys-cfg .command-in,#theme .color-box{border-color:' + options["menuTextColor2"] + "}";
          this['addCustomCSS']('menuTextColorCSS', artistTrack);
        },
        "setMenuButtons" : function() {
          var artistTrack = 'a,a:hover{color:' + options["btn1Color"] + "}.btn,#hotkeys-cfg .custom-key-in{color:" + options['menuBtnTextColor'] + '}.btn-primary{background-color:' + options['btn1Color'] + '!important}.btn-primary:active,.btn-primary:disabled,.btn-primary:focus,.btn-primary:hover{background-color:' + options["btn1Color2"] + '!important}.btn-success{background-color:' + options['btn2Color'] + '!important}.btn-success:active,.btn-success:disabled,.btn-success:focus,.btn-success:hover{background-color:' + options['btn2Color2'] + "!important}.btn-warning{background-color:" + options['btn3Color'] + '!important}.btn-warning:active,.btn-warning:disabled,.btn-warning:focus,.btn-warning:hover{background-color:' + options['btn3Color2'] + '!important}.btn-danger{background-color:' + options["btn4Color"] + "!important}.btn-danger:active,.btn-danger:disabled,.btn-danger:focus,.btn-danger:hover{background-color:" + 
          options['btn4Color2'] + '!important}#hotkeys-cfg .custom-key-in{background-color:' + options["btn4Color2"] + ';border-color:' + options['btn4Color2'] + "}";
          this["addCustomCSS"]('menuButtonsCSS', artistTrack);
        },
        "setMenuBg" : function() {
          $('#menuBg')["val"](options['menuBg']);
          if (options['menuBg']) {
            $(".menu-panel, .agario-side-panel, #hotkeys, #exp-imp")['css']('background-image', 'url(' + options['menuBg'] + ")");
            $(".menu-panel, .agario-side-panel, #hotkeys, #exp-imp")["css"]('background-image', 'none');
        },
        "setHud" : function() {
          this['setHudColors']();
          this['setHudFont']();
          this['setHudScale']();
        },
        "setHudColors" : function() {
          var artistTrack = '.hud-main-color,#top5-hud a,#target-panel-hud a:hover,#target-panel-hud a.active,#message-menu a{color:' + options['hudMainColor'] + '}.hud,.hud-b,#chat-emoticons{background-color:' + options['hudColor'] + '}.hud,.hud-b,#top5-hud a:hover,#target-panel-hud a{color:' + options['hudTextColor'] + "}.stats-hud-color{color:" + options['statsHudColor'] + '}.time-hud-color{color:' + options["timeHudColor"] + '}.top5-mass-color{color:' + options['top5MassColor'] + '}#leaderboard-positions .me{color:' + options['lbMeColor'] + '}#leaderboard-positions .teammate{color:' + options["lbTeammateColor"] + "}";
          this['addCustomCSS']("hudCSS", artistTrack);
        },
        "setHudFont" : function() {
          this['setFont']("hudFont", options["hudFont"]);
          $("#overlays-hud")['css']({
            "font-family" : options['hudFontFamily'],
            "font-weight" : options['hudFontWeight']
        },
        "setHudScale" : function() {
          var bodyContentWidth = Math['round'](20 * options["hudScale"]);
          var artistTrack = Math['round'](200 * options['hudScale']);
          var ylw = Math["floor"](55 * options["hudScale"]);
          var strip_width = Math['floor'](6 * options['hudScale']);
          var xlw = Math["floor"](280 * options["hudScale"]);
          var updatedTop = Math["floor"](85 * options["hudScale"]);
          var updatedLeft = Math['floor'](20 * options['hudScale']);
          $("#overlays-hud")["css"]('font-size', bodyContentWidth + "px");
          $("#leaderboard-hud, #time-hud")['width'](artistTrack);
          $('#top5-hud')['width'](artistTrack + 30)['css']('top', ylw + "px");
          $('#top5-pos')['css']("padding-left", strip_width + "px");
          $('#time-hud')["css"]('top', xlw + "px");
          $('#pause-hud')['css']('top', updatedTop + "px");
          $('#target-hud')['css']("padding-top", updatedLeft + "px");
        },
        "setChat" : function() {
          this['setChatColors']();
          this['setChatScale']();
        },
        "setChatColors" : function() {
          var artistTrack = '#message,#messages li,.toast-success{background-color:' + options['messageColor'] + '}#message,.message-text,.toast-success .message-text{color:' + options['messageTextColor'] + '}.message-nick,.mute-user,.mute-user:hover,.toast-success .message-nick,.toast .mute-user,.toast .mute-user:hover{color:' + options["messageNickColor"] + '}.message-time{color:' + options['messageTimeColor'] + "}.toast-warning{background-color:" + options["commandsColor"] + '}.command-text,.toast-warning .command-text{color:' + options['commandsTextColor'] + '}.command-nick,.toast-warning .command-nick,.toast-warning .mute-user,.toast-warning .mute-user:hover{color:' + options['commandsNickColor'] + '}.command-time{color:' + options['commandsTimeColor'] + '}#chat-box{background-color:' + options['chatBoxColor'] + "}";
          this["addCustomCSS"]('chatCSS', artistTrack);
        },
        "setChatScale" : function() {
          var bodyContentWidth = Math['round'](14 * options['chatScale']);
          var hyp = Math['round'](280 * options['chatScale']);
          var tmpWidth = Math['round'](350 * options['chatScale']);
          var artistTrack = Math['round'](300 * options['chatScale']);
          var xlw = Math['floor'](14 * options["chatScale"]);
          $('#message-box, #messages, #toast-container, #chat-box')['css']('font-size', bodyContentWidth + "px");
          $("#messages, #toast-container, #chat-box")["width"](hyp);
          $('#message-box')["width"](tmpWidth);
          $('#chat-box')['height'](artistTrack);
          $(".user-list")['css']('padding-left', xlw + "px");
          var GET_AUTH_URL_TIMEOUT = '#toast-container{width:' + hyp + 'px;font-size:' + bodyContentWidth + 'px}';
          this['addCustomCSS']('chatScaleCSS', GET_AUTH_URL_TIMEOUT);
        },
        "setMiniMap" : function() {
          this["setMiniMapFont"]();
          this['setMiniMapWidth']();
          this['setMiniMapSectorsOpacity']();
        },
        "setMiniMapFont" : function() {
          this["setFont"]('miniMapFont', options['miniMapFont']);
          if (router) {
            router["resetMiniMapSectors"]();
        },
        "setMiniMapWidth" : function() {
          var number = options['miniMapWidth'] / 200;
          options["miniMapTop"] = Math['round'](20 * number);
          $("#minimap-hud")['css']({
            "width" : options['miniMapWidth'],
            "height" : options['miniMapWidth'] + options['miniMapTop']
          if (router) {
            router['resetMiniMapSectors']();
        },
        "setMiniMapSectorsColor" : function() {
          if (router) {
            router['resetMiniMapSectors']();
        },
        "setMiniMapSectorsOpacity" : function() {
          $("#minimap-sectors")['css']('opacity', options['miniMapSectorsOpacity']);
        },
        "setTheme" : function() {
          this['setFonts']();
          this['setBgColor']();
          this['setCustomBackground']();
          this['setCustomCursor']();
          this['setMenu']();
          this["setHud"]();
          this['setChat']();
          this['setMiniMap']();
        },
        "init" : function() {
          this["loadThemeSettings"]();
        }
      };
      var res = [];
      var params = {
        "nick" : 'I <3 OGARio',
        "clanTag" : "\u24c2",
        "skinURL" : "",
        "color" : options['mainColor']
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
        "messageSound" : 'https://cdn.ogario.ovh/static/sounds/notification_01.mp3',
        "commandSound" : 'https://cdn.ogario.ovh/static/sounds/notification_02.mp3'
      };
      var router = {
        "name" : 'OGARio by szymy v4',
        "version" : 'v4 (4.0.0 b38)',
        "privateMode" : ![],
        "protocolMode" : !![],
        "publicIP" : 'wss://srv.ogario.eu',
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
        "gameMode" : ':ffa',
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
        "lastMessageSentTime" : Date['now'](),
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
          return style['playerX'] + style['mapOffsetX'];
        },
        "getPlayerY" : function() {
          return style['playerY'] + style['mapOffsetY'];
        },
        "feed" : function() {
          if (window["core"] && window['core']['eject']) {
            window["core"]['eject']();
        },
        "macroFeed" : function(canCreateDiscussions) {
          if (canCreateDiscussions) {
            if (this['feedInterval']) {
              return;
            var _0x1716ce = this;
            this['feed']();
            this['feedInterval'] = setInterval(function() {
              _0x1716ce['feed']();
            if (this['feedInterval']) {
              clearInterval(this['feedInterval']);
              this["feedInterval"] = null;
        },
        "split" : function() {
          if (window["core"] && window['core']['split']) {
            window['core']['split']();
        },
        "doubleSplit" : function() {
          var _0x54e827 = this;
          _0x54e827['split']();
          setTimeout(function() {
            _0x54e827['split']();
        },
        "popSplit" : function() {
          var _0x290dc5 = this;
          _0x290dc5['split']();
          setTimeout(function() {
            _0x290dc5['split']();
        },
        "split16" : function() {
          var _0x4c1320 = this;
          _0x4c1320['split']();
          setTimeout(function() {
            _0x4c1320['split']();
          setTimeout(function() {
            _0x4c1320['split']();
          setTimeout(function() {
            _0x4c1320['split']();
        },
        "toggleSkins" : function() {
          if (style["vanillaSkins"] && style['customSkins']) {
            style["vanillaSkins"] = ![];
            if (!style['vannillaSkins'] && style['customSkins']) {
              style['vanillaSkins'] = !![];
              style['customSkins'] = ![];
              style['vanillaSkins'] = !![];
              style["customSkins"] = !![];
        },
        "toggleCells" : function() {
          this['selectBiggestCell'] = !this['selectBiggestCell'];
          style['selectBiggestCell'] = this['selectBiggestCell'];
        },
        "setShowTop5" : function() {
          props['showTop5'] = !props['showTop5'];
          this["setTop5"]();
        },
        "setTop5" : function() {
          if (props['showTop5']) {
            $('#top5-hud')['show']();
            $("#top5-hud")["hide"]();
        },
        "setShowTargeting" : function() {
          props['showTargeting'] = !props['showTargeting'];
          this['setTargetingHUD']();
        },
        "setTargetingHUD" : function() {
          if (props['showTargeting']) {
            $("#target-hud, #target-panel-hud")['show']();
            $("#target-hud, #target-panel-hud")["hide"]();
        },
        "setShowTime" : function() {
          props['showTime'] = !props['showTime'];
          if (props['showTime']) {
            $('#time-hud')['show']();
            this['displayTime']();
            $('#time-hud')['hide']();
        },
        "setShowSplitRange" : function() {
          props["splitRange"] = !props['splitRange'];
          style['splitRange'] = props['splitRange'];
        },
        "setShowSplitInd" : function() {
          this['showSplitInd'] = !this['showSplitInd'];
          props['splitRange'] = this['showSplitInd'];
          props['oppRings'] = this['showSplitInd'];
          style['splitRange'] = props['splitRange'];
          style['oppRings'] = props['oppRings'];
        },
        "setShowTeammatesInd" : function() {
          props['teammatesInd'] = !props['teammatesInd'];
        },
        "setShowOppColors" : function() {
          props['oppColors'] = !props['oppColors'];
          style['oppColors'] = props['oppColors'];
        },
        "setShowSkins" : function() {
          this['noSkins'] = !this['noSkins'];
          if (window["core"] && window['core']['setSkins']) {
            window['core']["setSkins"](!this['noSkins']);
          style['showCustomSkins'] = !this["noSkins"];
          this['displayChatInfo'](!this["noSkins"], 'showSkinsMsg');
        },
        "setTransparentSkins" : function() {
          props["transparentSkins"] = !props['transparentSkins'];
          style['transparentSkins'] = props['transparentSkins'];
        },
        "setShowStats" : function() {
          $('#stats-hud')["toggle"]();
        },
        "setShowFood" : function() {
          style['showFood'] = !style["showFood"];
        },
        "setShowHUD" : function() {
          $('#overlays-hud')["toggle"]();
        },
        "setShowGrid" : function() {
          props['showGrid'] = !props["showGrid"];
        },
        "setShowMiniMapGuides" : function() {
          props["showMiniMapGuides"] = !props["showMiniMapGuides"];
        },
        "setShowLb" : function() {
          if (this['gameMode'] === ':teams') {
            return;
          $('#leaderboard-hud')['toggle']();
        },
        "setShowBgSectors" : function() {
          props["showBgSectors"] = !props['showBgSectors'];
        },
        "setHideSmallBots" : function() {
          style["hideSmallBots"] = !style['hideSmallBots'];
          this['displayChatInfo'](!style['hideSmallBots'], 'hideSmallBotsMsg');
        },
        "setShowNames" : function() {
          props["noNames"] = !props["noNames"];
        },
        "setHideTeammatesNames" : function() {
          props['hideTeammatesNames'] = !props['hideTeammatesNames'];
        },
        "setShowMass" : function() {
          props['showMass'] = !props['showMass'];
        },
        "setShowMiniMap" : function() {
          props["showMiniMap"] = !props['showMiniMap'];
          this['setMiniMap']();
        },
        "setMiniMap" : function() {
          if (props['showMiniMap']) {
            $('#minimap-hud')['show']();
            $('#minimap-hud')['hide']();
        },
        "setShowQuest" : function() {
          if (this['gameMode'] !== ':ffa') {
            return;
          this['showQuest'] = !this['showQuest'];
          this['setQuest']();
        },
        "setQuest" : function() {
          if (this['showQuest'] && this['gameMode'] === ':ffa') {
            $('#quest-hud')['show']();
            $('#quest-hud')["hide"]();
        },
        "toggleAutoZoom" : function() {
          style["autoZoom"] = !style['autoZoom'];
          this["displayChatInfo"](style['autoZoom'], 'autoZoomMsg');
        },
        "resetZoom" : function(options) {
          if (options) {
            style["zoomResetValue"] = 1;
            style['zoomValue'] = 1;
            style['zoomResetValue'] = 0;
        },
        "setZoom" : function(options) {
          style["zoomValue"] = options;
        },
        "toggleDeath" : function() {
          this['lastDeath']--;
          if (this['lastDeath'] < 0) {
            this['lastDeath'] = this["deathLocations"]['length'] - 1;
        },
        "tryResp" : function() {
          if (style["play"] || this['retryResp'] == 20) {
            this["retryResp"] = 0;
            return;
          this["retryResp"]++;
          var _0x4acf38 = this;
          setTimeout(function() {
            if ($('.btn-play-guest')["is"](':visible')) {
              $('.btn-play-guest')["click"]();
              $(".btn-play")['click']();
            if (!style['play']) {
              _0x4acf38['tryResp']();
        },
        "quickResp" : function() {
          if (!props["quickResp"]) {
            return;
          this['hideMenu']();
          this["gameServerConnect"](this["ws"]);
          style['play'] = ![];
          this['tryResp']();
        },
        "autoResp" : function() {
          if (!props["autoResp"]) {
            return;
          this['setAutoResp']();
          $("#overlays")['stop']()["hide"]();
          if ($(".btn-play-guest")["is"](':visible')) {
            $('.btn-play-guest')['click']();
            return;
          $(".btn-play")['click']();
        },
        "setAutoResp" : function() {
          if (props['autoResp']) {
            if (!$('#skipStats')['prop']('checked')) {
              $('#skipStats')['click']();
              this['skipStats'] = !![];
        },
        "toggleAutoResp" : function() {
          props['autoResp'] = !props['autoResp'];
          this['setAutoResp']();
          this['displayChatInfo'](props['autoResp'], 'autoRespMsg');
        },
        "copyLb" : function() {
          var _msgSibling = $('<input>');
          $('body')['append'](_msgSibling);
          _msgSibling['val']($("#leaderboard-positions")['text']())['select']();
          try {
            document['execCommand']('copy');
          _msgSibling['remove']();
        },
        "setPause" : function() {
          this["pause"] = !this['pause'];
          style['pause'] = this['pause'];
          if (this['pause']) {
            style['resetTargetPosition']();
            $('#pause-hud')['show']();
            $('#pause-hud')['hide']();
        },
        "setCenteredLb" : function() {
          if (props['centeredLb']) {
            $('#leaderboard-hud')["addClass"]("hud-text-center");
            $('#leaderboard-hud')['removeClass']("hud-text-center");
        },
        "setNormalLb" : function() {
          if (props['normalLb']) {
            $('#leaderboard-hud h4')['html'](messages['leaderboard']);
            $("#leaderboard-hud h4")['html']('ogario.ovh');
        },
        "setFpsAtTop" : function() {
          if (props['fpsAtTop']) {
            $("#stats-hud")['removeClass']("hud-bottom")["addClass"]('hud-top');
            $('#stats-hud')['removeClass']('hud-top')['addClass']('hud-bottom');
        },
        "setBlockPopups" : function() {
          if (this['protocolMode']) {
            $('#block-warn')["hide"]();
            return;
          if (props['blockPopups']) {
            this['blockPopups']();
            this["unblockPopups"]();
        },
        "blockPopups" : function() {
          $('#openfl-content, #openfl-overlay')['hide']();
          $('#openfl-content, #openfl-overlay')['addClass']('block-popups');
          $('#freeCoins, #gifting, #openShopBtn, #dailyQuests')['prop']('disabled', !![]);
          $('#block-warn')['show']();
        },
        "unblockPopups" : function() {
          $('#openfl-overlay.disabler')['click']();
          $('#openfl-content, #openfl-overlay')['hide']();
          $('#openfl-content, #openfl-overlay')['removeClass']('block-popups');
          $('#freeCoins, #gifting, #openShopBtn, #dailyQuests')["prop"]('disabled', ![]);
          $('#block-warn')["hide"]();
        },
        "tempUnblockPopups" : function() {
          if (!props['blockPopups']) {
            return;
          this['unblockPopups']();
        },
        "displayLeaderboard" : function(text, rationale = "") {
          if (!this['leaderboardPositionsHUD']) {
            return;
          this['leaderboardPositionsHUD']["innerHTML"] = text;
          this["leaderboardDataHUD"]['innerHTML'] = rationale;
        },
        "displayStats" : function() {
          if (!props['showStats']) {
            $('#stats-hud')['hide']();
            return;
          var value = "";
          if (style["play"]) {
            if (props["showStatsMass"] && style['playerMass']) {
              value = value + (messages['mass'] + ": " + style["playerMass"] + " | ");
            if (style['playerScore']) {
              value = value + (messages['score'] + ": " + style['playerScore']);
            if (props['showStatsSTE'] && style['STE']) {
              value = value + (' | STE: ' + style['STE']);
            if (props['showStatsN16'] && style['playerSplitCells']) {
              value = value + (' | ' + style['playerSplitCells'] + '/16');
            if (props["showStatsFPS"]) {
              value = value + ' | ';
          if (props['showStatsFPS']) {
            value = value + ('FPS: ' + defaults['fps']);
          this['statsHUD']["textContent"] = value;
          var _0x348c25 = this;
          setTimeout(function() {
            _0x348c25['displayStats']();
        },
        "displayTime" : function() {
          if (!props['showTime']) {
            $('#time-hud')['hide']();
            return;
          var _0x44ec8b = (new Date)['toLocaleString']();
          this['timeHUD']['textContent'] = _0x44ec8b;
          var _0x5f2890 = this;
          setTimeout(function() {
            _0x5f2890['displayTime']();
        },
        "displayParties" : function() {
          var text = "";
          var indexLookupKey = 0;
          for (; indexLookupKey < this['parties']['length']; indexLookupKey++) {
            text = text + ('<li><a href="https://agar.io/#' + this["parties"][indexLookupKey] + '" onclick="$(\'#party-token\').val(\'' + this['parties'][indexLookupKey] + '\'); $(\'#join-party-btn-2\').click();">https://agar.io/#' + this["parties"][indexLookupKey] + '</a></li>');
          if (text === "") {
            this['activeParties']['className'] = 'no-parties';
            this["activeParties"]['className'] = "";
          this['activeParties']["innerHTML"] = text;
        },
        "displayTop5" : function() {
          if (!props['showTop5']) {
            return;
          var text = "";
          var fixedW = 0;
          var length = this["top5"]["length"];
          var i = 0;
          for (; i < length; i++) {
            fixedW = fixedW + this['top5'][i]['mass'];
            if (i >= this['top5limit']) {
              continue;
            text = text + ('<li><span class="cell-counter" style="background-color: ' + this['top5'][i]["color"] + '">' + (i + 1) + '</span>');
            if (props['showTargeting']) {
              text = text + ('<a href="#" data-user-id="' + this["top5"][i]["id"] + '" class="set-target ogicon-target"></a> ');
            text = text + ('<span class="hud-main-color">[' + this['calculateMapSector'](this['top5'][i]["x"], this['top5'][i]["y"]) + ']</span>');
            text = text + ('<span class="top5-mass-color">[' + this["shortMassFormat"](this['top5'][i]['mass']) + ']</span> ' + this['escapeHTML'](this['top5'][i]['nick']) + '</li>');
          this["top5pos"]["innerHTML"] = text;
          if (style["play"] && style['playerMass']) {
            fixedW = fixedW + style['playerMass'];
            length++;
          this["top5totalMass"]['textContent'] = this['shortMassFormat'](fixedW);
          this["top5totalPlayers"]["textContent"] = length;
        },
        "setTop5limit" : function(canCreateDiscussions) {
          if (!canCreateDiscussions) {
            return;
          this['top5limit'] = canCreateDiscussions;
        },
        "displayChatHistory" : function(canCreateDiscussions) {
          if (canCreateDiscussions) {
            this['clearChatHistory'](!![]);
            var i = 0;
            for (; i < this['chatHistory']["length"]; i++) {
              $('#messages')['append']('<li><span class="message-nick">' + this["chatHistory"][i]['nick'] + ': </span><span class="message-text">' + this['chatHistory'][i]["message"] + '</span></li>');
            return;
          this['clearChatHistory'](![]);
        },
        "clearChatHistory" : function(canCreateDiscussions) {
          $('#messages')["empty"]();
          if (canCreateDiscussions) {
            toastr['clear']();
            if (props["showChatBox"]) {
              $('#chat-box .message')['remove']();
              this['chatHistory']['length'] = 0;
        },
        "displayChatInfo" : function($table, steps) {
          if ($table) {
            toastr['info'](messages[steps + "A"]);
            toastr["error"](messages[steps + "B"]);
        },
        "setDisableChat" : function() {
          props['hideChat'] = props['disableChat'];
          this['setHideChat']();
        },
        "hideChat" : function() {
          props['hideChat'] = !props['hideChat'];
          this['setHideChat']();
          this['displayChatInfo'](!props["hideChat"], 'hideChatMsg');
        },
        "setHideChat" : function() {
          if (props['hideChat']) {
            $('#message-box')['hide']();
          this["setShowChatBox"]();
        },
        "setShowChatBox" : function() {
          if (!props['hideChat'] && props['showChatBox']) {
            $("#chat-box")['show']();
            $('#chat-box')["hide"]();
        },
        "enterChatMessage" : function() {
          var _obj = $('#message-box');
          var $el = $('#message');
          if (!_obj["is"](':visible')) {
            _obj['show']();
            $el['focus']();
            $el['val']("");
            var artistTrack = $el["val"]();
            if (artistTrack['length']) {
              this["sendChatMessage"](101, artistTrack);
              if (style["play"]) {
                $el['blur']();
                _obj['hide']();
              $el['blur']();
              _obj['hide']();
            $el["val"]("");
        },
        "showMenu" : function(query) {
          if (window["MC"] && window["MC"]["showNickDialog"]) {
            $(".ogario-menu")['show']();
            $(".menu-panel")['hide']();
            if (!style['play'] && !this['skipStats']) {
              $("#stats")['show']();
              $('#main-panel')['show']();
            window["MC"]['showNickDialog'](300);
            if ($("#oferwallContainer")["is"](':visible')) {
              window['closeOfferwall']();
            if ($('#videoContainer')["is"](':visible')) {
              window['closeVideoContainer']();
            return;
          if (query) {
            $('#overlays')['fadeIn'](query);
            $('#overlays')['show']();
        },
        "hideMenu" : function(callback) {
          if (window["MC"] && window["MC"]['showNickDialog']) {
            $('.ogario-menu')["hide"]();
            return;
          if (callback) {
            $('#overlays')['fadeOut'](callback);
            $('#overlays')['hide']();
        },
        "escapeHTML" : function(s) {
          return String(s)['replace'](/[&<>"'\/]/g, function(s) {
            return entityMap[s];
        },
        "checkImgURL" : function(message = "", _0x4a13fb = ![]) {
          var messageWarn = "";
          var dd = "jpg|jpeg|png";
          if (!_0x4a13fb) {
            dd = dd + "|gif";
          var i = 0;
          for (; i < fftBinsOfFreq['length']; i++) {
            var s = fftBinsOfFreq[i]["pattern"]["replace"]('%file_ext%', dd);
            var inlineAttributeCommentRegex = new RegExp("^" + s + "$", "i");
            if (inlineAttributeCommentRegex['test'](message)) {
              messageWarn = message;
              break;
          return messageWarn;
        },
        "checkSkinURL" : function(mmCoreSplitViewBlock) {
          return this["checkImgURL"](mmCoreSplitViewBlock, !![]);
        },
        "loadSettings" : function() {
          var element = null;
          if (window['localStorage']['getItem']('ogarioSettings') !== null) {
            element = JSON["parse"](window["localStorage"]['getItem']('ogarioSettings'));
          var name;
          for (name in props) {
            if (props['hasOwnProperty'](name)) {
              if (element && element['hasOwnProperty'](name)) {
                props[name] = element[name];
              if (style['hasOwnProperty'](name)) {
                style[name] = props[name];
        },
        "saveSettings" : function(data, callback) {
          window["localStorage"]['setItem'](callback, JSON['stringify'](data));
        },
        "exportSettings" : function() {
          var data = {
            "ogarioCommands" : store,
            "ogarioHotkeys" : attributes,
            "ogarioPlayerProfiles" : res,
            "ogarioSettings" : props,
            "ogarioThemeSettings" : options
          var key;
          for (key in data) {
            if (data['hasOwnProperty'](key)) {
              var _0x1e1127 = $('#export-' + key)['prop']('checked');
              if (!_0x1e1127) {
                delete data[key];
          data = JSON['stringify'](data);
          $('#export-settings')['val'](data);
          $('#import-settings')['val']("");
          data = null;
        },
        "importSettings" : function() {
          $('#import-settings')['blur']();
          var PL$10 = $('#import-settings')['val']();
          if (PL$10) {
            PL$10 = JSON['parse'](PL$10);
            var PL$11;
            for (PL$11 in PL$10) {
              if (PL$10["hasOwnProperty"](PL$11)) {
                var _0x1053db = $('#import-' + PL$11)['prop']('checked');
                if (!_0x1053db) {
                  continue;
                window['localStorage']['setItem'](PL$11, JSON['stringify'](PL$10[PL$11]));
            window['location']['reload']();
        },
        "restoreSettings" : function() {
          if (window['localStorage']['getItem']("ogarioSettings") !== null) {
            window['localStorage']['removeItem']('ogarioSettings');
            window['location']['reload']();
        },
        "setSettings" : function(name, data) {
          if (props['hasOwnProperty'](name) && data !== null) {
            props[name] = data;
            if (style['hasOwnProperty'](name)) {
              style[name] = data;
            switch(name) {
              case 'autoResp':
                this['setAutoResp']();
                break;
              case 'showMiniMap':
                this['setMiniMap']();
                break;
              case 'showMiniMapGrid':
                this['resetMiniMapSectors']();
                break;
              case 'disableChat':
                this["setDisableChat"]();
                break;
              case 'chatSounds':
                this['setChatSoundsBtn']();
                break;
              case "showChatBox":
                this["setShowChatBox"]();
                break;
              case 'showTop5':
                this["setTop5"]();
                break;
              case "showTargeting":
                this['setTargetingHUD']();
                break;
              case 'showTime':
                this["displayTime"]();
                $("#time-hud")['show']();
                break;
              case 'centeredLb':
                this["setCenteredLb"]();
                break;
              case "normalLb":
                this['setNormalLb']();
                break;
              case 'fpsAtTop':
                this['setFpsAtTop']();
                break;
              case 'showStats':
                this["displayStats"]();
                $('#stats-hud')['show']();
                break;
              case "blockPopups":
                this['setBlockPopups']();
                break;
            this['saveSettings'](props, "ogarioSettings");
        },
        "loadProfiles" : function() {
          if (window['localStorage']['getItem']('ogarioPlayerProfiles') !== null) {
            res = JSON['parse'](window['localStorage']["getItem"]("ogarioPlayerProfiles"));
            var _0x2c228e = 0;
            for (; _0x2c228e < 10; _0x2c228e++) {
              res['push']({
                "nick" : 'Profile #' + (_0x2c228e + 1),
                "clanTag" : "",
                "skinURL" : "",
                "color" : options['mainColor']
          if (window["localStorage"]['getItem']('ogarioSelectedProfile') !== null) {
            this["selectedProfile"] = JSON['parse'](window['localStorage']['getItem']('ogarioSelectedProfile'));
          params['nick'] = res[this['selectedProfile']]['nick'];
          params["clanTag"] = res[this["selectedProfile"]]['clanTag'];
          params['skinURL'] = res[this["selectedProfile"]]['skinURL'];
          params['color'] = res[this['selectedProfile']]['color'];
        },
        "changeSkinPreview" : function(e, n) {
          if (!e || !n) {
            return;
          if (n === 'skin-preview') {
            $('#skin-preview')['removeClass']('default')['append']('<a href="#" id="skin-popover" data-toggle="popover" title="" data-html="true" data-content="<img src=\'' + e['src'] + "' width='500'>\"></a>");
            $('#skin-popover')["append"]($(e)['fadeIn'](1E3));
            $("#skin-popover")['popover']();
            $("#" + n)['removeClass']('default')["append"]($(e)['fadeIn'](1E3));
        },
        "setSkinPreview" : function(medium, loc) {
          var is_root = loc == 'skin-preview';
          if ($("#" + loc + ' img')['attr']("src") === medium) {
            return;
          $("#" + loc)['empty']()['addClass']('default');
          if (!medium) {
            if (is_root) {
              $('#skin')['popover']('hide');
            return;
          if (!this['checkSkinURL'](medium)) {
            if (is_root) {
              var artistTrack = "<p><strong>Submitted URL is not valid.</strong></p>";
              if (/hizliresim.com/['test'](medium)) {
                artistTrack = artistTrack + '<p>NOTICE: <strong>hizliresim.com</strong> is not supported anymore.</p>';
              artistTrack = artistTrack + '<p>Check if URL:</p><ul><li>is supported by OGARio (see list below)</li><li>is no longer than 60 characters</li></ul>';
              artistTrack = artistTrack + "<p>Supported image hosting sites:</p>";
              artistTrack = artistTrack + '<ol>';
              var i = 0;
              for (; i < fftBinsOfFreq['length']; i++) {
                artistTrack = artistTrack + ('<li><strong><a href="' + fftBinsOfFreq[i]['url'] + '" rel="noreferrer noopener" target="_blank">' + fftBinsOfFreq[i]['name'] + '</a></strong><span class="example-url">e.g. <a href="' + fftBinsOfFreq[i]['example'] + '"  rel="noreferrer noopener" target="_blank">' + fftBinsOfFreq[i]['example'] + '</a></span></li>');
              artistTrack = artistTrack + '</ol>';
              $("#skin")['attr']('data-content', artistTrack);
              $('#skin')["popover"]("show");
              $('#skin')["focus"]();
            return;
          var GL_ARRAY_SETTER = this;
          var temp = new Image;
          temp['crossOrigin'] = 'Anonymous';
          temp['onload'] = function() {
            GL_ARRAY_SETTER["changeSkinPreview"](temp, loc);
            if (is_root) {
              $('#skin')["popover"]('hide');
          temp['onerror'] = function() {
            if (is_root) {
              var artistTrack = "<p><strong>Error while loading image.</strong></p>";
              artistTrack = artistTrack + '<p>Check if image URL is valid.</p>';
              $('#skin')['attr']('data-content', artistTrack);
              $('#skin')['popover']("show");
              $('#skin')['focus']();
          temp['src'] = medium;
        },
        "setProfile" : function() {
          var LAT = (res['length'] + this['selectedProfile'] - 1) % res['length'];
          var chosen_prime = (this['selectedProfile'] + 1) % res['length'];
          this['setSkinPreview'](res[LAT]['skinURL'], "prev-profile");
          this['setSkinPreview'](res[this['selectedProfile']]['skinURL'], 'skin-preview');
          this['setSkinPreview'](res[chosen_prime]["skinURL"], 'next-profile');
          this['saveSettings'](this["selectedProfile"], 'ogarioSelectedProfile');
          $('#nick')['val'](res[this["selectedProfile"]]['nick']);
          $('#clantag')['val'](res[this["selectedProfile"]]['clanTag']);
          $('#skin')['val'](res[this['selectedProfile']]["skinURL"]);
          $('#color')['val'](res[this['selectedProfile']]['color']);
          $('.skin')['colorpicker']('setValue', res[this["selectedProfile"]]['color']);
          $("#skins a")['removeClass']("selected");
          $('#skins a[data-profile=\'' + this["selectedProfile"] + "']")['addClass']('selected');
        },
        "prevProfile" : function() {
          this['setPlayerSettings']();
          this['selectedProfile'] = (res['length'] + this['selectedProfile'] - 1) % res["length"];
          this['setProfile']();
        },
        "nextProfile" : function() {
          this['setPlayerSettings']();
          this['selectedProfile'] = (this['selectedProfile'] + 1) % res['length'];
          this['setProfile']();
        },
        "selectProfile" : function(value) {
          this["setPlayerSettings"]();
          this['selectedProfile'] = parseInt(value);
          this['setProfile']();
        },
        "addOption" : function(combo, index, options, callback) {
          $(combo)['append']('<label><input type="checkbox" id="' + index + '" class="js-switch"> ' + options + '</label>');
          $("#" + index)['prop']('checked', callback);
        },
        "addOptions" : function(options, index) {
          if (!options) {
            return;
          $("#og-options")["append"]('<div class="options-box ' + index + '"><h5 class="menu-main-color">' + messages[index] + "</h5></div>");
          var i = 0;
          for (; i < options['length']; i++) {
            var prop = options[i];
            if (props["hasOwnProperty"](prop)) {
              $("." + index)['append']('<label>' + messages[prop] + ' <input type="checkbox" class="js-switch" id="' + prop + '"></label>');
              $("#" + prop)['prop']('checked', props[prop]);
        },
        "addInputBox" : function(summaryItems, name, url, to) {
          $(summaryItems)['append']('<div class="input-box"><span class="title-box">' + messages[name] + '</span><input id="' + name + '" class="form-control" placeholder="' + url + '" value="' + props[name] + '" /></div>');
          var propTypes = this;
          $("#" + name)["on"]('input', function() {
            props[name] = this['value'];
            propTypes[to]();
            propTypes['saveSettings'](props, 'ogarioSettings');
        },
        "addSliderBox" : function(desiredPriority, name, courseId, options, url, to) {
          $(desiredPriority)['append']('<div class="slider-box"><div class="box-label"><span class="value-label">' + messages[name] + ': </span><span id="' + name + '-value" class="value">' + props[name] + '</span></div><input id="' + name + '-slider" type="range" min="' + courseId + '" max="' + options + '" step="' + url + '" value="' + props[name] + '"></div>');
          var propTypes = this;
          if (to) {
            $("#" + name + '-slider')["on"]('input', function() {
              var val = parseFloat($(this)["val"]());
              $("#" + name + "-value")['text'](val);
              props[name] = val;
              if (style["hasOwnProperty"](name)) {
                style[name] = val;
              propTypes[to]();
              propTypes['saveSettings'](props, 'ogarioSettings');
            $("#" + name + "-slider")["on"]("input", function() {
              var val = parseFloat($(this)['val']());
              $("#" + name + '-value')['text'](val);
              props[name] = val;
              if (style['hasOwnProperty'](name)) {
                style[name] = val;
              propTypes["saveSettings"](props, "ogarioSettings");
        },
        "setLang" : function() {
          if (loc !== "pl") {
            return;
          if (window['i18n_dict'] && window['i18n_dict']["en"]) {
            var key;
            for (key in window['i18n_dict']["en"]) {
              if (window["i18n_dict"]["en"]['hasOwnProperty'](key) && messages['hasOwnProperty'](key)) {
                window["i18n_dict"]["en"][key] = messages[key];
        },
        "setMenu" : function() {
          var _0x380d6b = this;
          document["title"] = this['name'];
          $('#mainPanel')['before']('<div id="exp-bar" class="agario-panel"><span class="ogicon-user"></span><div class="agario-exp-bar progress"><span class="progress-bar-text"></span><div class="progress-bar progress-bar-striped" style="width: 0%;"></div></div><div class="progress-bar-star"></div></div><div id="main-menu" class="agario-panel"><ul class="menu-tabs"><li class="start-tab active"><a href="#main-panel" class="active ogicon-home" data-toggle="tab-tooltip" title="' + messages["start"] + 
          '"></a></li><li class="profile-tab"><a href="#profile" class="ogicon-user" data-toggle="tab-tooltip" title="' + messages['profile'] + '"></a></li><li class="settings-tab"><a href="#og-settings" class="ogicon-cog" data-toggle="tab-tooltip" title="' + messages['settings'] + '"></a></li><li class="theme-tab"><a href="#theme" class="ogicon-droplet" data-toggle="tab-tooltip" title="' + messages['theme'] + '"></a></li><li class="hotkeys-tab"><a href="#" class="hotkeys-link ogicon-keyboard" data-toggle="tab-tooltip" title="' + messages['hotkeys'] + '"></a></li><li class="music-tab"><a href="#music" class="ogicon-music" data-toggle="tab-tooltip" title="Radio / ' + messages['sounds'] + '"></a></li></ul><div id="main-panel" class="menu-panel"></div><div id="profile" class="menu-panel"></div><div id="og-settings" class="menu-panel"><div class="submenu-panel"></div></div><div id="theme" class="menu-panel"></div><div id="music" class="menu-panel"></div></div>');
          $("#main-panel")['append']('<a href="#" class="quick quick-menu ogicon-menu"></a><a href="#" class="quick quick-skins ogicon-images"></a><div id="profiles"><div id="prev-profile" class="skin-switch"></div><div id="skin-preview"></div><div id="next-profile" class="skin-switch"></div></div>');
          $('#mainPanel div[role=form]')["appendTo"]($("#main-panel"));
          $('#main-panel div[role=form] .form-group:first')['remove']();
          $("#nick")['before']('<input id="clantag" class="form-control" placeholder="Tag, e.g. Ⓜ" maxlength="10"><div class="input-group nick"></div>');
          $('#nick')['appendTo']($('.nick'));
          $('.nick')['append']('<span class="input-group-btn"><button id="stream-mode" class="btn active ogicon-eye"></button></span>');
          $('.nick')['after']('<div class="input-group skin"><input id="skin" class="form-control" placeholder="Skin URL (direct link)" maxlength="60"><input type="hidden" id="color" value="' + params['color'] + '" maxlength="7" /><span class="input-group-addon"><i></i></span><span class="input-group-btn"><button id="hide-url" class="btn active ogicon-eye"></button></span></div>');
          $('#locationKnown, #locationUnknown')['insertAfter']($('.skin'));
          $('#region')['before']('<button class="btn btn-warning btn-server-info ogicon-cogs"></button>');
          $('.btn-spectate, .btn-logout')['appendTo']('#agario-main-buttons');
          $('#agario-main-buttons')['addClass']("clearfix")['before']('<div id="server-info" class="form-group clearfix"><input id="server-ws" class="form-control" placeholder="Server WS"><button id="server-connect" class="btn btn-success ogicon-power"></button><button id="server-reconnect" class="btn btn-primary ogicon-redo2"></button><input id="server-token" class="form-control" placeholder="Server token"><button id="server-join" class="btn btn-success" data-itr="page_join_party">Join</button></div>');
          $('#helloContainer div[role=form]')['after']('<div id="ogario-party" class="clearfix"><input id="party-token" class="form-control" placeholder="Party token"></div>');
          $('#ogario-party')['append']('<button id="join-party-btn-2" class="btn btn-success" data-itr="page_join_party">Join</button><button id="create-party-btn-2" class="btn btn-primary" data-itr="page_create_party">Create</button>');
          $("#pre-join-party-btn:first, #join-party-btn:first, #create-party-btn:first, #leave-party-btn:first, #joinPartyToken:first, .party-icon-back:first")["appendTo"]($('#ogario-party'));
          $('#settingsChoice, #options')['appendTo']($('#og-settings .submenu-panel'));
          $('#stats')['appendTo']($('#main-menu'))['addClass']('menu-panel');
          $('#statsContinue')['attr']("id", "statsContinue2");
          $('#mainPanel')['empty']()['remove']();
          $('.center-container')['addClass']('ogario-menu');
          $('.center-container')['append']('<div id="menu-footer" class="menu-main-color">' + messages['visit'] + ' <a href="https://ogario.ovh" target="_blank">ogario.ovh</a> | ' + this['version'] + ' <a href="https://goo.gl/nRREoR" class="release ogicon-info" target="_blank"></a></div>');
          $('#leftPanel, #rightPanel')['addClass']("ogario-menu")['removeAttr']("id");
          $('.agario-profile-panel, .agario-panel-freecoins, .agario-panel-gifting, .agario-shop-panel, #dailyquests-panel')['appendTo']($('#profile'))["removeClass"]("agario-side-panel");
          $('.agario-profile-panel')['after']('<div id="block-warn">' + messages['blockWarn'] + '<br><a href="#" id="unblock-popups">' + messages['unblockPopups'] + '</a></div>');
          $('#exp-bar')["addClass"]('agario-profile-panel');
          $('.left-container')['empty']();
          $('.agario-shop-panel')["after"]('<div class="agario-panel ogario-yt-panel"><h5 class="menu-main-color">Team OGARio (tag: Ⓜ)</h5><div class="g-ytsubscribe" data-channelid="UCaWiPNJWnhzYDrBQoXokn6w" data-layout="full" data-theme="dark" data-count="default"></div></div>');
          $('#tags-container')['appendTo']($("#profile"));
          $('.btn-logout')["appendTo"]($('#profile'));
          $('.left-container')['append']('<div id="quick-menu" class="agario-panel agario-side-panel"><a href="https://ogario.ovh/skins/" class="quick-more-skins ogicon-grin" target="_blank" data-toggle="tab-tooltip" data-placement="left" title="' + messages['skins'] + '"></a><a href="https://youtube.com/channel/UCaWiPNJWnhzYDrBQoXokn6w" class="quick-yt ogicon-youtube2" target="_blank" data-toggle="tab-tooltip" data-placement="left" title="Team OGARio"></a></div>');
          if (!this['protocolMode']) {
            $('#quick-menu')["prepend"]('<a href="#" class="quick-shop ogicon-cart" data-toggle="tab-tooltip" data-placement="left" title="' + messages["page_shop"] + '"></a><a href="#" class="quick-free-coins ogicon-coin-dollar" data-toggle="tab-tooltip" data-placement="left" title="' + messages["page_menu_main_free_coins"] + '"></a><a href="#" class="quick-free-gifts ogicon-gift" data-toggle="tab-tooltip" data-placement="left" title="' + messages['page_menu_main_gifts'] + '"></a><a href="#" class="quick-quests ogicon-trophy" data-toggle="tab-tooltip" data-placement="left" title="' + messages['page_menu_main_dailyquests'] + '"></a>');
          $('.party-dialog, .partymode-info')['remove']();
          $('.agario-party-6')['appendTo']($('.center-container'));
          $('.right-container')['empty']();
          $('.right-container')['append']('<div class="agario-party"></div>');
          $('.agario-party-6')["appendTo"]($('.agario-party'))['addClass']('agario-panel agario-side-panel');
          $('.agario-party h4, #cancel-party-btn')["remove"]();
          $('.agario-party .btn')['addClass']('btn-sm');
          $('.right-container')["append"]('<div id="skins-panel" class="agario-panel agario-side-panel"><div id="skins"></div><a href="https://ogario.ovh/skins/" id="more-skins" class="btn btn-block btn-success" target="_blank">' + messages['moreSkins'] + "</a></div>");
          $('.btn-settings, .text-muted, .tosBox, .agario-promo, #agario-web-incentive, span[data-itr=\'page_option_dark_theme\'], #options #darkTheme')['remove']();
          $("#advertisement, #adbg, #a320x250, #g320x250, #s320x250, #adsBottom")['css']('display', 'none');
          $("#advertisement")['removeClass']('agario-panel');
          $('#adsBottom')['css']({
            "z-index" : "1",
            "opacity" : "0",
            "bottom" : '-100px'
          $('#noNames, #showMass')['remove']();
          $('#og-settings .submenu-panel')["append"]('<div id="og-options"></div>');
          this['addOptions']([], 'animationGroup');
          this['addOptions'](['autoZoom'], 'zoomGroup');
          this["addOptions"](['quickResp', 'autoResp'], 'respGroup');
          this["addOptions"](["noNames", 'optimizedNames', 'autoHideNames', 'hideMyName', 'hideTeammatesNames', 'namesStroke'], 'namesGroup');
          this['addOptions'](["showMass", 'optimizedMass', 'autoHideMass', 'hideMyMass', "hideEnemiesMass", 'shortMass', 'virMassShots', 'massStroke'], 'massGroup');
          if (this["protocolMode"]) {
            this["addOptions"](['customSkins'], 'skinsGroup');
            this['addOptions'](['customSkins', "vanillaSkins"], "skinsGroup");
          this['addOptions'](['optimizedFood', "autoHideFood", "autoHideFoodOnZoom", 'rainbowFood'], 'foodGroup');
          this['addOptions'](['myCustomColor', "myTransparentSkin", 'transparentSkins', "transparentCells", "transparentViruses"], 'transparencyGroup');
          this['addOptions'](['showGrid', 'showBgSectors', 'showMapBorders'], 'gridGroup');
          this["addOptions"](['disableChat', "chatSounds", 'chatEmoticons', 'showChatImages', 'showChatVideos', 'showChatBox'], 'chatGroup');
          this['addOptions'](["showMiniMap", 'showMiniMapGrid', 'showMiniMapGuides', 'oneColoredTeammates'], 'miniMapGroup');
          this['addOptions'](['oppColors', 'oppRings', "virColors", 'splitRange', 'virusesRange', 'cursorTracking', "teammatesInd"], 'helpersGroup');
          this['addOptions'](['mouseSplit', "mouseFeed", 'mouseInvert'], 'mouseGroup');
          this['addOptions'](['showTop5', "showTargeting", 'showLbData', "centeredLb", 'normalLb', 'fpsAtTop'], 'hudGroup');
          this['addOptions'](["showStats", 'showStatsMass', 'showStatsSTE', "showStatsN16", 'showStatsFPS', 'showTime'], 'statsGroup');
          if (!this['protocolMode']) {
            this['addOptions'](["blockPopups"], "extrasGroup");
            $('#noSkins, #noColors, #skipStats, #showQuest')['addClass']('js-switch-vanilla');
            $('.skinsGroup h5')['after']('<label class="noSkins">' + messages["noSkins"] + ' </label>');
            $('#noSkins')['appendTo']($('.noSkins'));
            $('.transparencyGroup h5')['after']('<label class="noColors">' + messages['noColors'] + ' </label>');
            $("#noColors")["appendTo"]($(".noColors"));
            $('.extrasGroup h5')['after']('<label class="skipStats">' + messages['skipStats'] + ' </label>');
            $('#skipStats')['appendTo']($('.skipStats'));
            $('.skipStats')['after']('<label class="showQuest">' + messages['showQuest'] + ' </label>');
            $("#showQuest")['appendTo']($('.showQuest'));
            $('#options')["remove"]();
            $('#settingsChoice')['appendTo']($('.extrasGroup'))['addClass']('select-wrapper');
          this["addSliderBox"]('.animationGroup', 'animation', 100, 200, 1);
          this['addSliderBox']('.zoomGroup', 'zoomSpeedValue', .75, .99, .01);
          $('#og-settings')['append']('<button class="btn btn-block btn-success btn-export">' + messages['exportImport'] + '</button>');
          $('#og-settings')['append']('<div class="restore-settings"><a href="#">' + messages['restoreSettings'] + '</a></div>');
          $('#music')['append']('<div class="agario-panel radio-panel"><h5 class="menu-main-color">Radio (' + messages["thanks"] + ')</h5><audio src="http://frshoutcast.comunicazion.eu:8815/;" controls></audio><span class="playlist"><span class="ogicon-file-music"></span> <a href="http://frshoutcast.comunicazion.eu:8815/played.html?sid=1" target="_blank">' + messages['playlist'] + "</a></span></div>");
          $('#music')['append']('<div class="agario-panel sounds-panel"><h5 class="menu-main-color">' + messages['sounds'] + '</h5></div>');
          $('#music')["append"]('<div class="agario-panel ogario-yt-panel"><h5 class="menu-main-color">Team OGARio (tag: Ⓜ)</h5><div class="g-ytsubscribe" data-channelid="UCaWiPNJWnhzYDrBQoXokn6w" data-layout="full" data-theme="dark" data-count="default"></div></div>');
          this['addInputBox']('.sounds-panel', 'messageSound', "Sound URL", "setMessageSound");
          this["addInputBox"](".sounds-panel", "commandSound", 'Sound URL', 'setCommandSound');
          $("body")['append']('<div id="overlays-hud" data-gamemode=":ffa"><div id="stats-hud" class="hud stats-hud-color"></div> <div id="top5-hud" class="hud"><h5 class="hud-main-color">Team top <span class="team-top">5</span></h5><div class="hud-main-color team-top-menu"><a href="#" data-limit="5" class="team-top-limit active">5</a> | <a href="#" data-limit="10" class="team-top-limit">10</a> | <a href="#" data-limit="100" class="team-top-limit">100</a></div><ol id="top5-pos"></ol><div id="top5-total"><span class="hud-main-color ogicon-users"></span> ' + messages['totalPartyPlayers'] + ': <span id="top5-total-players" class="top5-mass-color">0</span><br><span class="hud-main-color ogicon-pacman"></span> ' + messages["totalPartyMass"] + ': <span id="top5-total-mass" class="top5-mass-color">0</span></div></div> <div id="time-hud" class="hud time-hud-color"></div> <div id="pause-hud" class="hud">' + messages['pause'] + '</div> <div id="leaderboard-hud" class="hud-b"><h4 class="hud-main-color">ogario.ovh</h4><div id="leaderboard-data"></div><div id="leaderboard-positions"></div></div> <div id="btl-leaderboard-hud"><div class="hud hud-c"><span id="btl-players-status">Players ready</span>: <span id="btl-players-count">0</span></div></div> <div id="minimap-hud" class="hud-b"><canvas id="minimap-sectors"></canvas><canvas id="minimap"></canvas></div><div id="target-hud" class="hud"><div id="target-player"><span id="target-skin"><img src="https://cdn.ogario.ovh/static/img/blank.png" alt=""> </span><span id="target-nick"></span> <span id="target-status" class="hud-main-color">[' + messages['targetNotSet'] + ']</span></div><div id="target-summary"></div></div><div id="target-panel-hud" class="hud"><a href="#" id="set-targeting" class="ogicon-target"></a><a href="#" id="set-private-minimap" class="ogicon-location2"></a><a href="#" id="cancel-targeting" class="ogicon-cancel-circle"></a><a href="#" id="change-target" class="ogicon-arrow-right"></a></div> <div id="quest-hud" class="hud"></div> <div id="btl-hud" class="hud"></div></div>');
          $('body')["append"]('<ul id="messages"></ul>');
          $('body')["append"]('<div id="message-box"><div id="chat-emoticons"></div><div id="message-menu"><a href="#" class="chat-sound-notifications ogicon-volume-high"></a><a href="#" class="chat-active-users ogicon-user-check"></a><a href="#" class="chat-muted-users ogicon-user-minus"></a><a href="#" class="show-chat-emoticons ogicon-smile"></a></div><input type="text" id="message" class="form-control" placeholder="' + messages['enterChatMsg'] + '..." maxlength="80"></div>');
          $('body')['append']('<div id="chat-box"></div>');
          var folderEntity;
          for (folderEntity in folder) {
            if (folder['hasOwnProperty'](folderEntity)) {
              $("#chat-emoticons")['append']('<img src="https://cdn.ogario.ovh/static/emoticons/' + folder[folderEntity] + '" alt="' + folderEntity + '" class="emoticon">');
          $("body")["append"]('<div id="exp-imp"><div id="exp-imp-menu"><button id="close-exp-imp" class="btn btn-danger">' + messages['close'] + '</button></div><div id="exp-imp-settings"></div></div>');
          $('#exp-imp-settings')['append']('<h1>' + messages['exportSettings'] + '</h1><h2>' + messages['exportInfo'] + '</h2>');
          this["addOption"]('#exp-imp-settings', 'export-ogarioCommands', messages['commands'], !![]);
          this['addOption']('#exp-imp-settings', 'export-ogarioHotkeys', messages["hotkeys"], !![]);
          this["addOption"]('#exp-imp-settings', "export-ogarioPlayerProfiles", messages['profiles'], !![]);
          this['addOption']("#exp-imp-settings", 'export-ogarioSettings', messages["settings"], !![]);
          this['addOption']('#exp-imp-settings', 'export-ogarioThemeSettings', messages["theme"], !![]);
          $("#exp-imp-settings")['append']('<textarea id="export-settings" class="form-control" rows="14" cols="100" spellcheck="false" readonly /><button id="export-settings-btn" class="btn btn-block btn-success">' + messages['exportSettings'] + '</button>');
          $('#exp-imp-settings')['append']('<h1>' + messages["importSettings"] + "</h1><h2>" + messages['importInfo'] + '</h2>');
          this['addOption']('#exp-imp-settings', 'import-ogarioCommands', messages['commands'], !![]);
          this['addOption']('#exp-imp-settings', "import-ogarioHotkeys", messages["hotkeys"], !![]);
          this['addOption']('#exp-imp-settings', 'import-ogarioPlayerProfiles', messages['profiles'], !![]);
          this['addOption']('#exp-imp-settings', 'import-ogarioSettings', messages["settings"], !![]);
          this['addOption']('#exp-imp-settings', 'import-ogarioThemeSettings', messages["theme"], !![]);
          $("#exp-imp-settings")['append']('<textarea id="import-settings" class="form-control" rows="14" cols="100" spellcheck="false" /><button id="import-settings-btn" class="btn btn-block btn-success">' + messages["importSettings"] + '</button>');
          if (_0x21f577) {
            _0x21f577['setThemeMenu']();
          var i = 0;
          for (; i < res['length']; i++) {
            $('#skins')["append"]('<div class="skin-box"><a href="#profile-' + i + '" id="profile-' + i + '" data-profile="' + i + '" class="skin-switch"></a></div>');
            this["setSkinPreview"](res[i]['skinURL'], 'profile-' + i);
            if (i == this['selectedProfile']) {
              $('#profile-' + i)['addClass']('selected');
        },
        "setUI" : function() {
          var result = this;
          $(document)["on"]("click", '.menu-tabs a', function(event) {
            event["preventDefault"]();
            result['switchMenuTabs']($(this), 'menu-panel');
          $(document)["on"]("click", '.submenu-tabs a', function(canCreateDiscussions) {
            canCreateDiscussions['preventDefault']();
            result["switchMenuTabs"]($(this), 'submenu-panel');
          $(document)["on"]('click', '.quick-menu', function(canCreateDiscussions) {
            canCreateDiscussions['preventDefault']();
            props['showQuickMenu'] = !props['showQuickMenu'];
            result['saveSettings'](props, 'ogarioSettings');
            result["setShowQuickMenu"]();
          $(document)["on"]('click', '.quick-skins', function(canCreateDiscussions) {
            canCreateDiscussions['preventDefault']();
            props['showSkinsPanel'] = !props["showSkinsPanel"];
            result['saveSettings'](props, 'ogarioSettings');
            result["setShowSkinsPanel"]();
          $(document)["on"]('change', '#region', function() {
            result['region'] = this['value'];
          $(document)["on"]('change', "#gamemode", function() {
            var c = this['value'];
            if (c !== ":party") {
              result['leaveParty']();
            result['gameMode'] = style['gameMode'] = c;
            result['setQuest']();
          $(document)["on"]('change', '#quality', function() {
            result['getQuality'](this['value']);
            Layer();
          $('#skin')['popover']({
            "html" : !![],
            "placement" : 'bottom',
            "trigger" : "manual",
            "animation" : ![]
          $(document)["on"]('input click', '#skin', function() {
            var text = this["value"];
            result["setSkinPreview"](text, 'skin-preview');
            result['setSkinPreview'](text, 'profile-' + result['selectedProfile']);
          $(document)["on"]('click', ".skin .example-url a", function(canCreateDiscussions) {
            canCreateDiscussions['preventDefault']();
            $('#skin')['val'](this['href'])["click"]();
          $(document)["on"]('click', '#overlays', function() {
            if (!$('.skin:hover')['length'] && !$(".skin-switch:hover")["length"]) {
              $('#skin')['popover']('hide');
          $(document)["on"]('click', '#skins a', function(canCreateDiscussions) {
            canCreateDiscussions['preventDefault']();
            result['selectProfile']($(this)['attr']('data-profile'));
          $(document)["on"]('click', "#prev-profile", function() {
            result['prevProfile']();
          $(document)["on"]('click', '#next-profile', function() {
            result['nextProfile']();
          $(document)["on"]('click', '#stream-mode', function() {
            props['streamMode'] = !props['streamMode'];
            result['saveSettings'](props, 'ogarioSettings');
            result['setStreamMode']();
          $(document)["on"]("click", '#hide-url', function() {
            props["hideSkinUrl"] = !props['hideSkinUrl'];
            result['saveSettings'](props, 'ogarioSettings');
            result['setHideSkinUrl']();
          $(document)["on"]('click', '.btn-server-info', function() {
            $('#server-info')['toggle']();
          $(document)["on"]('click', '#server-connect', function() {
            result["gameServerConnect"]($("#server-ws")['val']());
          $(document)["on"]('click', '#server-reconnect', function() {
            result['gameServerReconnect']();
          $(document)["on"]('click', '#server-join', function() {
            result['gameServerJoin']($('#server-token')['val']());
          $(document)["on"]('change', '#og-options input[type=\'checkbox\']', function() {
            var actions = $(this);
            result["setSettings"](actions["attr"]("id"), actions['prop']('checked'));
          $(document)["on"]('change', ".js-switch-vanilla", function() {
            var $input = $(this);
            var i = $input['attr']("id");
            if (typeof result[i] !== 'undefined') {
              result[i] = $input['prop']("checked");
              if (i === 'noSkins') {
                style['showCustomSkins'] = !result['noSkins'];
              if (i === 'showQuest') {
                result['setQuest']();
          $(document)["on"]('click', '#og-settings .restore-settings a', function(canCreateDiscussions) {
            canCreateDiscussions['preventDefault']();
            result['restoreSettings']();
          $(document)["on"]('click', "#og-settings .btn-export", function(canCreateDiscussions) {
            canCreateDiscussions['preventDefault']();
            result['exportSettings']();
            $('#exp-imp')['fadeIn'](500);
            $("#exp-imp-settings, #export-settings")['perfectScrollbar']('update');
          $(document)["on"]("click", "#close-exp-imp", function(canCreateDiscussions) {
            canCreateDiscussions['preventDefault']();
            $('#exp-imp')['fadeOut'](500);
          $(document)["on"]('focus', '#export-settings', function() {
            $(this)['select']();
          $(document)["on"]('click', '#export-settings-btn', function(canCreateDiscussions) {
            canCreateDiscussions['preventDefault']();
            result["exportSettings"]();
          $(document)["on"]('click', '#import-settings-btn', function(canCreateDiscussions) {
            canCreateDiscussions['preventDefault']();
            result['importSettings']();
          $(document)["on"]('click', '#unblock-popups', function(canCreateDiscussions) {
            canCreateDiscussions['preventDefault']();
            result['unblockPopups']();
          $(document)["on"]('click', '#openfl-overlay.disabler', function() {
            if (props['blockPopups']) {
              result['blockPopups']();
          $(document)["on"]('click', '#openfl-content', function() {
            if (props["blockPopups"]) {
              var _obj = $(this);
              setTimeout(function() {
                if (!_obj["is"](':visible')) {
                  result['blockPopups']();
          $(document)["on"]('click', '.quick-shop', function(canCreateDiscussions) {
            canCreateDiscussions['preventDefault']();
            result['unblockPopups']();
            if (window["MC"] && window["MC"]['openShop']) {
              window["MC"]['openShop']();
          $(document)["on"]('click', '.quick-free-coins', function(canCreateDiscussions) {
            canCreateDiscussions['preventDefault']();
            result['unblockPopups']();
            if (window["MC"] && window["MC"]['showFreeCoins']) {
              window["MC"]['showFreeCoins']();
          $(document)["on"]('click', ".quick-free-gifts", function(canCreateDiscussions) {
            canCreateDiscussions['preventDefault']();
            result["unblockPopups"]();
            if (window["MC"] && window["MC"]['showGifting']) {
              window["MC"]["showGifting"]();
          $(document)["on"]('click', '.quick-quests', function(canCreateDiscussions) {
            canCreateDiscussions['preventDefault']();
            result["unblockPopups"]();
            if (window["MC"] && window["MC"]["showQuests"]) {
              window["MC"]["showQuests"]();
          $(document)["on"]('click', '#set-targeting', function(canCreateDiscussions) {
            canCreateDiscussions['preventDefault']();
            result['setTargeting']();
          $(document)["on"]("click", '#cancel-targeting', function(canCreateDiscussions) {
            canCreateDiscussions['preventDefault']();
            result["cancelTargeting"]();
          $(document)["on"]('click', '#set-private-minimap', function(canCreateDiscussions) {
            canCreateDiscussions['preventDefault']();
            result['setPrivateMiniMap']();
          $(document)["on"]('click', '#change-target', function(canCreateDiscussions) {
            canCreateDiscussions['preventDefault']();
            result['changeTarget']();
          $(document)["on"]("click", '.team-top-limit', function(canCreateDiscussions) {
            canCreateDiscussions['preventDefault']();
            var layoutAttributes = $(this);
            var power = parseInt(layoutAttributes["attr"]("data-limit"));
            if (power) {
              result['setTop5limit'](power);
              result['displayTop5']();
              $('.team-top')["text"](power);
              $('.team-top-limit')['removeClass']('active');
              layoutAttributes['addClass']('active');
          $(document)["on"]('click', '#top5-pos .set-target', function(canCreateDiscussions) {
            canCreateDiscussions['preventDefault']();
            result['setTarget'](parseInt($(this)["attr"]("data-user-id")));
          $(document)["on"]('click', '.mute-user', function(canCreateDiscussions) {
            canCreateDiscussions['preventDefault']();
            result['muteChatUser'](parseInt($(this)["attr"]('data-user-id')));
          $(document)["on"]('click', ".btn-mute-user", function() {
            var rotateMsg = $(this);
            result["muteChatUser"](parseInt(rotateMsg['attr']('data-user-id')));
            rotateMsg["removeClass"]('btn-red btn-mute-user')['addClass']('btn-green btn-unmute-user')["text"](messages['unmute']);
          $(document)["on"]('click', ".btn-unmute-user", function() {
            var $realtime = $(this);
            result["unmuteChatUser"](parseInt($realtime['attr']('data-user-id')));
            $realtime['removeClass']("btn-green btn-unmute-user")["addClass"]('btn-red btn-mute-user')['text'](messages['mute']);
          $(document)["on"]('click', ".chat-sound-notifications", function(canCreateDiscussions) {
            canCreateDiscussions['preventDefault']();
            props['chatSounds'] = !props["chatSounds"];
            result['saveSettings'](props, "ogarioSettings");
            result["setChatSoundsBtn"]();
          $(document)["on"]('click', ".chat-active-users", function(canCreateDiscussions) {
            canCreateDiscussions['preventDefault']();
            result['displayChatActiveUsers']();
          $(document)["on"]("click", '.chat-muted-users', function(canCreateDiscussions) {
            canCreateDiscussions['preventDefault']();
            result['displayChatMutedUsers']();
          $(document)["on"]('click', '.show-chat-emoticons', function(canCreateDiscussions) {
            canCreateDiscussions['preventDefault']();
            var rotateMsg = $(this);
            var _obj = $('#chat-emoticons');
            _obj['toggle']();
            if (_obj["is"](':visible')) {
              rotateMsg['addClass']('active');
              rotateMsg["removeClass"]("active");
              $('#message')['focus']();
          $(document)["on"]('click', "#chat-emoticons .emoticon", function() {
            var $realtime = $(this);
            var code = $realtime['attr']('alt');
            var taiji = $('#message');
            var head = taiji['val']();
            if (head['length'] + code['length'] <= 80) {
              taiji['val'](head + code);
            taiji['focus']();
          this["statsHUD"] = document['getElementById']('stats-hud');
          this['activeParties'] = document['getElementById']("active-parties");
          this['top5pos'] = document['getElementById']("top5-pos");
          this['top5totalMass'] = document['getElementById']('top5-total-mass');
          this['top5totalPlayers'] = document['getElementById']('top5-total-players');
          this['leaderboardPositionsHUD'] = document['getElementById']('leaderboard-positions');
          this['leaderboardDataHUD'] = document['getElementById']('leaderboard-data');
          this['timeHUD'] = document['getElementById']("time-hud");
          this['questHUD'] = document['getElementById']('quest-hud');
          $('#canvas')['bind']('contextmenu', function() {
            return ![];
          $(document)["on"]("mouseup", '.btn', function() {
            $(this)["blur"]();
          $('[data-toggle=\'tab-tooltip\']')['tooltip']({
            "trigger" : 'hover'
          $(".submenu-panel, #chat-box, #exp-imp-settings, #export-settings, #import-settings")['perfectScrollbar']({
            "suppressScrollX" : !![]
          var _0x145601 = Array["prototype"]['slice']['call'](document['querySelectorAll']('.js-switch'));
          _0x145601['forEach'](function(remove) {
            var removeInit = new Switchery(remove, {
              "color" : options['menuMainColor'],
              "size" : "small"
          $("input[type='range']")['rangeslider']({
            "polyfill" : ![]
          toastr['options'] = {
            "newestOnTop" : ![],
            "positionClass" : 'toast-bottom-left',
            "timeOut" : 15E3
        },
        "switchMenuTabs" : function(p, altCss) {
          var _0x30d885 = p['parent']();
          if (altCss === "menu-panel") {
            if (p["hasClass"]('hotkeys-link')) {
              return;
            if (_0x30d885['hasClass']('profile-tab')) {
              this["setBlockPopups"]();
          p['addClass']('active');
          _0x30d885['addClass']('active');
          _0x30d885["siblings"]()['removeClass']('active');
          _0x30d885["siblings"]()['find']("a")["removeClass"]('active');
          var delete_behavior_form = p['attr']('href');
          if (altCss === "submenu-panel") {
            var eVideoId = $(delete_behavior_form)['parent']()['attr']("id");
            $("#" + eVideoId + ' .submenu-panel')['not'](delete_behavior_form)['css']('display', 'none');
            $('.menu-panel')['not'](delete_behavior_form)['css']('display', "none");
          $(delete_behavior_form)["fadeIn"](1E3);
          Layer();
          $('.submenu-panel')['perfectScrollbar']('update');
        },
        "getDefaultSettings" : function() {
          var _0x24bf49 = this;
          this['noSkins'] = $('#noSkins')['prop']('checked');
          this['noColors'] = $('#noColors')["prop"]('checked');
          this['skipStats'] = $('#skipStats')['prop']('checked');
          this["showQuest"] = $('#showQuest')['prop']('checked');
          style["showCustomSkins"] = !this['noSkins'];
          if (window['localStorage']["getItem"]('scale_setting') !== null) {
            var artistTrack = JSON['parse'](window['localStorage']['getItem']('scale_setting'));
            this['setCanvasScale'](artistTrack);
            var artistTrack = $("#quality")['val']();
            this['getQuality'](artistTrack);
          if (window["localStorage"]["getItem"]("location") !== null) {
            this["region"] = window['localStorage']['getItem']('location');
            $('#region')['val'](this["region"]);
            if (window["MC"] && window["MC"]["setRegion"]) {
              window["MC"]['setRegion'](this['region']);
            this["region"] = $('#region')["val"]();
          this["setParty"]();
          if (this["gameMode"] === ':party' && window['location']["hash"]) {
            $('#join-party-btn-2')['click']();
          var _0x8ad16b = Array['prototype']['slice']['call'](document['querySelectorAll']('.js-switch-vanilla'));
          _0x8ad16b['forEach'](function(remove) {
            var removeInit = new Switchery(remove, {
              "color" : options['menuMainColor'],
              "size" : "small"
          $('#nick')['val'](params["nick"])["blur"]();
          $("#noNames")['prop']('checked', !props['noNames']);
          $('#showMass')['prop']("checked", props['showMass']);
          this['unlockButtons']();
          this['setAutoResp']();
          this['setQuest']();
        },
        "getQuality" : function(object) {
          var isNativeDatasetAvailable = 'devicePixelRatio' in window;
          var _replaceHelper = 1;
          if (isNativeDatasetAvailable) {
            _replaceHelper = window['devicePixelRatio'];
          switch(object) {
            case 'High':
              this['setCanvasScale'](1);
              break;
            case 'Medium':
              this['setCanvasScale'](.9);
              break;
            case 'Low':
              this['setCanvasScale'](.75);
              break;
            case 'VeryLow':
              this['setCanvasScale'](.5);
              break;
            default:
              this['setCanvasScale'](_replaceHelper);
              break;
        },
        "setCanvasScale" : function(optimizeQuality) {
          this['canvasScale'] = optimizeQuality;
          style["canvasScale"] = optimizeQuality;
        },
        "setStreamMode" : function() {
          if (props["streamMode"]) {
            $('#stream-mode')['addClass']('ogicon-eye-blocked');
            $("#clantag, #nick, #party-token")["addClass"]("stream-mode");
            $("#stream-mode")['removeClass']('ogicon-eye-blocked');
            $('#clantag, #nick, #party-token')['removeClass']('stream-mode');
        },
        "setHideSkinUrl" : function() {
          if (props['hideSkinUrl']) {
            $("#hide-url")['addClass']('ogicon-eye-blocked');
            $("#skin")['addClass']('hide-url');
            $('#hide-url')['removeClass']('ogicon-eye-blocked');
            $('#skin')['removeClass']('hide-url');
        },
        "setShowQuickMenu" : function() {
          if (props['showQuickMenu']) {
            $('#quick-menu')['fadeIn'](500);
            $("#quick-menu")["fadeOut"](500);
        },
        "setShowSkinsPanel" : function() {
          if (props['showSkinsPanel']) {
            $('#skins-panel')['fadeIn'](500);
            $('#skins-panel')["fadeOut"](500);
        },
        "unlockButtons" : function() {
          $('.btn-play, .btn-play-guest, .btn-login-play, .btn-spectate')['prop']('disabled', ![]);
        },
        "setMainButtons" : function() {
          var _0x158030 = this;
          $(document)["on"]('click', '.btn-play, .btn-play-guest', function() {
            _0x158030['onPlay']();
          $(document)["on"]("click", '.btn-spectate', function() {
            _0x158030['onSpectate']();
          $(document)["on"]('click', '#create-party-btn-2', function() {
            _0x158030['onCreate']();
          $(document)["on"]('click', '#join-party-btn-2', function() {
            _0x158030['skipServerData'] = !![];
            _0x158030['joinParty']();
            _0x158030['onJoin']();
          $(document)["on"]("click", '#statsContinue2', function() {
            $('#stats, #main-panel')['toggle']();
        },
        "play" : function() {
          this['setPlayerSettings']();
          this['setParty']();
          if (this['isSocketOpen']()) {
            this['sendPartyData']();
            this["connect"]();
            var _0x3a34bd = this;
            setTimeout(function() {
              _0x3a34bd['sendPartyData']();
        },
        "onPlay" : function() {
          this['play']();
          this["hideMenu"]();
          if (window['addKeyListeners']) {
            window['addKeyListeners']();
          if (props['autoHideFood']) {
            style['showFood'] = !![];
          if (window["ga"]) {
            window["ga"]('create', 'UA-67142685-2', 'auto', 'ogarioTracker');
          if (window["ga"]) {
            window["ga"]('ogarioTracker.send', 'pageview');
        },
        "onSpectate" : function() {
          this["onJoin"]();
          this['sendPlayerJoin']();
          this['hideMenu']();
          if (window["addKeyListeners"]) {
            window["addKeyListeners"]();
          if (props['autoHideFood']) {
            style['showFood'] = ![];
        },
        "join" : function() {
          this['setParty']();
          this["setPlayerSettings"]();
          this['sendPartyData']();
          this['sendPlayerDeath']();
        },
        "onJoin" : function() {
          this['setParty']();
          if (this['isSocketOpen']()) {
            this['join']();
            this['connect']();
            var _0x5a3b08 = this;
            setTimeout(function() {
              _0x5a3b08['join']();
              _0x5a3b08['sendPlayerJoin']();
        },
        "create" : function() {
          this['setParty']();
          if (this['partyToken']) {
            this['onJoin']();
            return;
          var _0xdb209d = this;
          setTimeout(function() {
            _0xdb209d['create']();
        },
        "onCreate" : function() {
          this['setParty']();
          if (this['gameMode'] !== ":party" || !this['partyToken']) {
            this["createParty"]();
            this["gameServerReconnect"]();
          this['create']();
        },
        "onPlayerSpawn" : function() {
          style['play'] = !![];
          if (style['playerColor']) {
            this["sendPlayerSpawn"]();
            this['cacheCustomSkin'](params['nick'], style["playerColor"], params['skinURL']);
            return;
          var _0xcb6801 = this;
          setTimeout(function() {
            _0xcb6801['onPlayerSpawn']();
        },
        "onPlayerDeath" : function() {
          style['play'] = ![];
          style['playerColor'] = null;
          style['foodIsHidden'] = ![];
          style["playerMass"] = 0;
          style['playerScore'] = 0;
          style['playerSplitCells'] = 0;
          this['showMenu'](300);
          this["sendPlayerDeath"]();
          this['updateDeathLocations'](style["playerX"], style['playerY']);
          this["unlockButtons"]();
          gotoNewOfflinePage();
          this['autoResp']();
        },
        "setPlayerSettings" : function() {
          var gtColumn = $('#nick')['val']();
          var _0x49da08 = $('#clantag')['val']();
          var _0x569d85 = $('#skin')["val"]();
          var i = $('#color')["val"]();
          params['nick'] = gtColumn;
          params['clanTag'] = _0x49da08['trim']();
          params['skinURL'] = this['checkSkinURL'](_0x569d85['trim']());
          if (i['length'] == 7) {
            params["color"] = i;
          if (params['clanTag']['length'] > 0) {
            style["clanTag"] = params['clanTag'];
          res[this['selectedProfile']]['nick'] = params["nick"];
          res[this['selectedProfile']]["clanTag"] = params["clanTag"];
          res[this['selectedProfile']]['skinURL'] = params['skinURL'];
          res[this['selectedProfile']]["color"] = params["color"];
          this["saveSettings"](res, 'ogarioPlayerProfiles');
        },
        "loadSkin" : function(entry, url) {
          var _0x1e157b = this;
          entry[url] = new Image;
          entry[url]['crossOrigin'] = 'Anonymous';
          entry[url]['onload'] = function() {
            if (this['complete'] && this['width'] && this['height'] && this['width'] <= 2E3 && this["height"] <= 2E3) {
              _0x1e157b['cacheQueue']['push'](url);
              if (_0x1e157b['cacheQueue']['length'] == 1) {
                _0x1e157b["cacheSkin"](_0x1e157b["customSkinsCache"]);
          entry[url]['src'] = url;
        },
        "cacheSkin" : function(canCreateDiscussions) {
          if (this['cacheQueue']['length'] == 0) {
            return;
          var i = this['cacheQueue']['shift']();
          if (i) {
            var canvas = document['createElement']('canvas');
            canvas["width"] = 512;
            canvas["height"] = 512;
            var umecob = canvas["getContext"]("2d");
            umecob['beginPath']();
            umecob['arc'](256, 256, 256, 0, 2 * Math["PI"], ![]);
            umecob['clip']();
            umecob['drawImage'](this['customSkinsCache'][i], 0, 0, 512, 512);
            this['customSkinsCache'][i + '_cached'] = new Image;
            this['customSkinsCache'][i + '_cached']["src"] = canvas['toDataURL']();
            canvas = null;
            this['cacheSkin'](this['customSkinsCache']);
        },
        "getCachedSkin" : function(newTextBuffer, newTextOffset) {
          if (newTextBuffer[newTextOffset + '_cached'] && newTextBuffer[newTextOffset + '_cached']['complete'] && newTextBuffer[newTextOffset + '_cached']['width']) {
            return newTextBuffer[newTextOffset + "_cached"];
          return null;
        },
        "cacheCustomSkin" : function(formatters, initialValue, callback) {
          if (callback) {
            var callback_name = this["gameMode"] === ':party' ? formatters + initialValue : formatters;
            if (callback_name) {
              this['customSkinsMap'][callback_name] = callback;
            if (this['customSkinsCache']['hasOwnProperty'](callback)) {
              return;
            this['loadSkin'](this['customSkinsCache'], callback);
        },
        "checkSkinsMap" : function(_, s) {
          var segment = this['gameMode'] === ':party' ? _ + s : _;
          if (this['customSkinsMap']["hasOwnProperty"](segment)) {
            return !![];
          return ![];
        },
        "getCustomSkin" : function(mmCoreSplitViewBlock, $state) {
          if (!this['checkSkinsMap'](mmCoreSplitViewBlock, $state)) {
            return null;
          var expectedSiteKey = this['gameMode'] === ":party" ? mmCoreSplitViewBlock + $state : mmCoreSplitViewBlock;
          return this['getCachedSkin'](this['customSkinsCache'], this['customSkinsMap'][expectedSiteKey]);
        },
        "calculateMapSector" : function(name, requiredFrom, currentStyle = ![]) {
          if (!style['mapOffsetFixed']) {
            return "";
          var whitespace = currentStyle ? style['mapOffsetX'] + style['mapOffset'] : style['mapOffset'];
          var elementPosition = currentStyle ? style['mapOffsetY'] + style['mapOffset'] : style["mapOffset"];
          var numberFilled = Math['floor']((requiredFrom + elementPosition) / (style['mapSize'] / options["sectorsY"]));
          var attr = Math['floor']((name + whitespace) / (style['mapSize'] / options['sectorsX']));
          numberFilled = numberFilled < 0 ? 0 : numberFilled >= options['sectorsY'] ? options['sectorsY'] - 1 : numberFilled;
          attr = attr < 0 ? 0 : attr >= options["sectorsX"] ? options['sectorsX'] - 1 : attr;
          return String['fromCharCode'](numberFilled + 65) + (attr + 1);
        },
        "shortMassFormat" : function(diff) {
          return diff < 1E3 ? diff : Math['round'](diff / 100) / 10 + "k";
        },
        "updateDeathLocations" : function(diffX, diffY) {
          if (!style['mapOffsetFixed']) {
            return;
          this['deathLocations']['push']({
            "x" : diffX + style['mapOffsetX'],
            "y" : diffY + style['mapOffsetY']
          if (this['deathLocations']["length"] == 6) {
            this['deathLocations']['shift']();
          this['lastDeath'] = this['deathLocations']['length'] - 1;
        },
        "drawMiniMap" : function() {
          if (!style['mapOffsetFixed']) {
            return;
          var x = options['miniMapWidth'];
          var value = options['miniMapTop'];
          var v = x + value;
          var w = x - 18;
          var valueDash = value + 9.5;
          if (!this['miniMap']) {
            this['miniMap'] = document["getElementById"]('minimap');
            this['miniMapCtx'] = this['miniMap']['getContext']("2d");
            this['miniMapCtx']["ogarioCtx"] = !![];
            this['miniMap']["width"] = x;
            this['miniMap']['height'] = v;
            this['miniMapCtx']['clearRect'](0, 0, x, v);
          if (this['miniMap']['width'] != x) {
            this['miniMap']['width'] = x;
            this['miniMap']["height"] = v;
          var ratio = w / style["mapSize"];
          var height = style['mapOffsetX'] + style['mapOffset'];
          var borderWidth = style['mapOffsetY'] + style["mapOffset"];
          this["drawSelectedCell"](this['miniMapCtx']);
          this['currentSector'] = this["calculateMapSector"](style["playerX"], style['playerY'], !![]);
          this["miniMapCtx"]['globalAlpha'] = 1;
          this["miniMapCtx"]['font'] = options["miniMapFontWeight"] + " " + (value - 4) + "px " + options['miniMapFontFamily'];
          this["miniMapCtx"]['fillStyle'] = options['miniMapSectorColor'];
          this["miniMapCtx"]["fillText"](this["currentSector"], 10, value);
          if (!this['miniMapSectors']) {
            this['drawMiniMapSectors'](options['sectorsX'], options['sectorsY'], w, v, valueDash);
          this['miniMapCtx']['save']();
          this['miniMapCtx']['translate'](9.5, valueDash);
          if (this["gameMode"] === ':battleroyale') {
            if (defaults) {
              defaults["drawBattleAreaOnMinimap"](this["miniMapCtx"], w, w, ratio, height, borderWidth);
          if (props['showMiniMapGuides']) {
            var x0 = Math['round']((style['playerX'] + height) * ratio);
            var x1 = Math['round']((style['playerY'] + borderWidth) * ratio);
            this['miniMapCtx']['lineWidth'] = 1;
            this['miniMapCtx']['strokeStyle'] = options['miniMapGuidesColor'];
            this['miniMapCtx']['beginPath']();
            this['miniMapCtx']['moveTo'](x0, 0);
            this['miniMapCtx']['lineTo'](x0, w - 1);
            this['miniMapCtx']["moveTo"](0, x1);
            this["miniMapCtx"]["lineTo"](w - 1, x1);
            this["miniMapCtx"]["stroke"]();
          this['miniMapCtx']['beginPath']();
          this['miniMapCtx']["arc"]((style['playerX'] + height) * ratio, (style['playerY'] + borderWidth) * ratio, options['miniMapMyCellSize'], 0, this['pi2'], ![]);
          this['miniMapCtx']['closePath']();
          if (options['miniMapMyCellStrokeSize'] > 0) {
            this['miniMapCtx']["lineWidth"] = options["miniMapMyCellStrokeSize"];
            this['miniMapCtx']["strokeStyle"] = options["miniMapMyCellStrokeColor"];
            this['miniMapCtx']['stroke']();
          this['miniMapCtx']["fillStyle"] = options['miniMapMyCellColor'];
          this['miniMapCtx']["fill"]();
          if (this['teamPlayers']['length']) {
            var indexLookupKey = 0;
            for (; indexLookupKey < this["teamPlayers"]['length']; indexLookupKey++) {
              this['teamPlayers'][indexLookupKey]["drawPosition"](this["miniMapCtx"], style['mapOffset'], ratio, this["privateMiniMap"], this['targetID']);
          if (this["deathLocations"]['length'] > 0) {
            x0 = Math["round"]((this['deathLocations'][this['lastDeath']]["x"] + style["mapOffset"]) * ratio);
            x1 = Math['round']((this['deathLocations'][this["lastDeath"]]["y"] + style['mapOffset']) * ratio);
            var x2 = Math["max"](options["miniMapMyCellSize"] - 2, 4);
            this["miniMapCtx"]["lineWidth"] = 1;
            this['miniMapCtx']['strokeStyle'] = this["deathLocations"]['length'] - 1 == this['lastDeath'] ? options["miniMapDeathLocationColor"] : "#FFFFFF";
            this['miniMapCtx']["beginPath"]();
            this['miniMapCtx']['moveTo'](x0 - x2, x1);
            this["miniMapCtx"]['lineTo'](x0 + x2, x1);
            this["miniMapCtx"]['moveTo'](x0, x1 - x2);
            this['miniMapCtx']["lineTo"](x0, x1 + x2);
            this['miniMapCtx']['stroke']();
          this["miniMapCtx"]['restore']();
        },
        "drawMiniMapSectors" : function(fromdirection, params, band, timeline, extraArguments) {
          this['miniMapSectors'] = document['getElementById']('minimap-sectors');
          var e = this["miniMapSectors"]['getContext']("2d");
          e['ogarioCtx'] = !![];
          this['miniMapSectors']["width"] = band;
          this['miniMapSectors']["height"] = timeline;
          e["fillStyle"] = '#FFFFFF';
          this['dTok'](e, band - 1);
          defaults['drawSectors'](e, style['mapOffsetFixed'], fromdirection, params, .5, extraArguments, band - .5, timeline - 9.5, options['miniMapSectorsColor'], options["miniMapSectorsColor"], 1, ![]);
        },
        "resetMiniMapSectors" : function() {
          this['miniMapSectors'] = null;
        },
        "drawSelectedCell" : function(canCreateDiscussions) {
          if (style['play'] && style['playerSplitCells'] > 1 && (props['splitRange'] || props["oppColors"] || props['oppRings'] || props["showStatsSTE"])) {
            canCreateDiscussions['fillStyle'] = '#FFFFFF';
            canCreateDiscussions['globalAlpha'] = this['selectBiggestCell'] ? .6 : .3;
            canCreateDiscussions['beginPath']();
            canCreateDiscussions['arc'](48, 15, 6, 0, this['pi2'], ![]);
            canCreateDiscussions['closePath']();
            canCreateDiscussions['fill']();
            canCreateDiscussions['globalAlpha'] = this['selectBiggestCell'] ? .3 : .6;
            canCreateDiscussions['beginPath']();
            canCreateDiscussions['arc'](60, 15, 4, 0, this['pi2'], ![]);
            canCreateDiscussions['closePath']();
            canCreateDiscussions['fill']();
        },
        "dTok" : function(mmCoreLogEnabledDefault, mmCoreLogEnabledConfigName) {
          mmCoreLogEnabledDefault['font'] = options['miniMapFontWeight'] + " " + (options['miniMapTop'] - 6) + 'px ' + options['miniMapFontFamily'];
          mmCoreLogEnabledDefault['textAlign'] = 'right';
          mmCoreLogEnabledDefault['textBaseline'] = 'top';
          mmCoreLogEnabledDefault["fillText"](atob(this["token"]), mmCoreLogEnabledConfigName, 7);
        },
        "drawTeammatesInd" : function(boardManager, isSlidingUp, $cont, $slides) {
          if (!this["indicator"]) {
            return;
          boardManager['drawImage'](this['indicator'], isSlidingUp - 45, $cont - $slides - 90);
        },
        "drawCellInfo" : function(data, index, options, config, args, obj, jurisdiction, preference, name, n, V, key) {
          if (obj || name) {
            return;
          data['globalAlpha'] = style["globalAlpha"];
          if (props["teammatesInd"] && key && !preference && args <= 200) {
            this['drawTeammatesInd'](data, options, config, args);
          if (props['noNames'] && !props['showMass']) {
            return;
          var idName = ![];
          if (!preference && !jurisdiction) {
            idName = this['setAutoHideCellInfo'](args);
            if (idName && props['autoHideNames'] && props['autoHideMass']) {
              return;
          var instance = null;
          if (this['cells']['hasOwnProperty'](index)) {
            instance = this['cells'][index];
            instance['update'](options, config, args, jurisdiction, preference, n);
            instance = new construct(options, config, jurisdiction, preference, props['shortMass'], props['virMassShots']);
            instance["setMass"](args);
            instance["setNick"](n);
            this['cells'][index] = instance;
            return;
          instance['setDrawing'](props['optimizedNames'], props['optimizedMass'], props["shortMass"], props["virMassShots"], props['namesStroke'], props["massStroke"]);
          instance["setDrawingScale"](style["viewScale"], options['namesScale'], options["massScale"], options["virMassScale"], options["strokeScale"]);
          data['globalAlpha'] = options['textAlpha'];
          if (!props['noNames'] && !(idName && props['autoHideNames']) && !(preference && props['hideMyName']) && !(key && props['hideTeammatesNames'])) {
            instance['drawNick'](data, options['namesColor'], options['namesFontFamily'], options['namesFontWeight'], options['namesStrokeColor']);
          if (props['showMass'] && !(idName && props['autoHideMass']) && !(preference && props['hideMyMass']) && !(props["hideEnemiesMass"] && !preference && !jurisdiction)) {
            instance["drawMass"](data, options['massColor'], options['massFontFamily'], options["massFontWeight"], options['massStrokeColor']);
        },
        "setVirusColor" : function(canCreateDiscussions) {
          var _0x42da01 = Math['floor'](canCreateDiscussions * canCreateDiscussions / 100);
          if (_0x42da01 > 183) {
            return '#C80000';
          return options['virusColor'];
        },
        "setVirusStrokeColor" : function(canCreateDiscussions) {
          if (style["play"] && style["playerMaxMass"] != 0) {
            var backoffDelay = Math["floor"](canCreateDiscussions * canCreateDiscussions / 100);
            var backoffDelaySeconds = backoffDelay / (this["selectBiggestCell"] ? style["playerMaxMass"] : style['playerMinMass']);
            if (backoffDelaySeconds > .76) {
              return '#FFDC00';
            return '#C80000';
          return options['virusStrokeColor'];
        },
        "setAutoHideCellInfo" : function(canCreateDiscussions) {
          if (canCreateDiscussions <= 40 || style["viewScale"] < .5 && canCreateDiscussions < 550 && canCreateDiscussions < 25 / style['viewScale']) {
            return !![];
          return ![];
        },
        "setParty" : function() {
          var d = $("#party-token")['val']();
          this['gameMode'] = style['gameMode'] = $('#gamemode')["val"]();
          this['setQuest']();
          if (this['gameMode'] !== ":party" || !d) {
            return;
          var max = d;
          if (d['indexOf']("#") != -1) {
            d = d["split"]("#");
            max = d[1];
          if (this['partyToken'] !== max) {
            this["partyToken"] = max;
            this['flushSkinsMap']();
            this['flushChatData']();
            this['cancelTargeting']();
        },
        "createParty" : function() {
          $("#create-party-btn")["click"]();
        },
        "joinParty" : function() {
          var artistTrack = $('#party-token')['val']();
          if (!artistTrack) {
            return;
          $('#pre-join-party-btn')["click"]();
          $('.party-token')['val'](artistTrack);
          $("#join-party-btn")['click']();
        },
        "leaveParty" : function() {
          $('#party-token, .party-token')['val']("");
          $('#leave-party-btn')['click']();
        },
        "closeParty" : function() {
          $('#party-token, .party-token')["val"]("");
          $(".party-icon-back")['click']();
        },
        "flushData" : function() {
          this["flushPartyData"]();
          this['flushSkinsMap']();
          this['flushChatData']();
          this['cancelTargeting']();
          style['play'] = ![];
          style['playerColor'] = null;
        },
        "flushPartyData" : function() {
          this['teamPlayers'] = [];
          this['parties'] = [];
          this['lastSentNick'] = "";
          this['lastSentClanTag'] = null;
          this['lastSentSkinURL'] = "";
          this['lastSentCustomColor'] = "";
          this['lastSentPartyToken'] = "";
          this["lastSentServerToken"] = "";
        },
        "flushCells" : function() {
          this['cells'] = {};
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
          this["ws"] = canCreateDiscussions;
          this['createServerToken']();
          this['updateServerInfo']();
          if (this["ws"]['indexOf']('agar.io') == -1) {
            this['closeConnection']();
        },
        "recreateWS" : function(a) {
          if (!a) {
            return null;
          var bothObjects = null;
          if (/^[a-zA-Z0-9=+\/]{12,}$/['test'](a)) {
            var str = atob(a);
            if (/[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}:[0-9]{1,4}/['test'](str)) {
              bothObjects = "wss://ip-" + str['replace'](/\./g, "-")['replace'](":", '.tech.agar.io:');
          if (!bothObjects && /^[a-z0-9]{5,}$/['test'](a)) {
            bothObjects = 'wss://live-arena-' + a + '.agar.io:443';
          return bothObjects;
        },
        "createServerToken" : function() {
          var _0x479c93 = this["ws"]['match'](/ip-\d+/);
          var end_callback = this["ws"]['match'](/live-arena-([\w\d]+)/);
          var res = null;
          if (_0x479c93) {
            var _0x20de19 = this["ws"]["replace"]('.tech.agar.io', "")['replace'](/-/g, ".");
            _0x479c93 = _0x20de19['match'](/[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}:[0-9]{1,4}/);
            if (_0x479c93) {
              this['serverIP'] = _0x479c93[0];
              res = btoa(this['serverIP']);
          if (!res && end_callback) {
            this['serverArena'] = end_callback[1];
            res = this['serverArena'];
          if (res) {
            if (this['serverToken'] !== res) {
              this["serverToken"] = res;
              this["flushData"]();
              this['flushCells']();
            this['partyToken'] = "";
            var _0x565c85 = this["ws"]['match'](/party_id=([A-Z0-9]{6})/);
            if (_0x565c85) {
              this['partyToken'] = _0x565c85[1];
              select("/#" + window['encodeURIComponent'](this['partyToken']));
        },
        "updateServerInfo" : function() {
          $('#server-ws')["val"](this["ws"]);
          $('#server-token')['val'](this['serverToken']);
          $('#party-token, .party-token')['val'](this['partyToken']);
        },
        "gameServerConnect" : function(mmCoreSplitViewBlock) {
          if (!mmCoreSplitViewBlock) {
            return;
          this['skipServerData'] = !![];
          if (window["core"] && window['core']['connect']) {
            window['core']['connect'](mmCoreSplitViewBlock);
        },
        "gameServerReconnect" : function() {
          if (window["MC"] && window["MC"]['reconnect']) {
            window["MC"]["reconnect"]();
            return;
          if (window['master'] && window['master']['reconnect']) {
            window["master"]['reconnect']();
        },
        "gameServerJoin" : function(level) {
          var numberOfTiles = this["recreateWS"](level);
          if (numberOfTiles) {
            this['skipServerData'] = !![];
            this['gameServerConnect'](numberOfTiles);
        },
        "connect" : function() {
          this['closeConnection']();
          this['flushData']();
          this["setParty"]();
          console["log"]('[OGARio by szymy] Connecting to server');
          if (this["privateMode"] && this['privateIP']) {
            this['socket'] = new WebSocket(this['privateIP']);
            this['socket'] = new WebSocket(this["publicIP"]);
          this['socket']['ogarioWS'] = !![];
          this['socket']['binaryType'] = "arraybuffer";
          var directiveProcessors = this;
          this["socket"]['onopen'] = function() {
            console['log']("[OGARio by szymy] Socket open");
            var $node = directiveProcessors['createView'](3);
            $node['setUint8'](0, 0);
            $node['setUint16'](1, 401, !![]);
            directiveProcessors["sendBuffer"]($node);
            directiveProcessors['sendPartyData']();
          this['socket']['onmessage'] = function($node) {
            directiveProcessors["handleMessage"]($node);
          this["socket"]["onclose"] = function(b) {
            directiveProcessors["flushData"]();
            console['log']("[OGARio by szymy] Socket close", b);
          this["socket"]["onerror"] = function(b) {
            directiveProcessors['flushData']();
            console['log']('[OGARio by szymy] Socket error', b);
        },
        "closeConnection" : function() {
          if (this['socket']) {
            this['socket']['onmessage'] = null;
            try {
              this['socket']['close']();
            this['socket'] = null;
        },
        "reconnect" : function() {
          this['setParty']();
          var _0x530d2b = this;
          setTimeout(function() {
            _0x530d2b['connect']();
        },
        "switchServerMode" : function() {
          if (!this['privateIP']) {
            return;
          this['privateMode'] = !this['privateMode'];
          if (this['isSocketOpen']()) {
            this['closeConnection']();
            toastr['error']('Zamknięto połączenie z serwerem!');
          if (this['privateMode']) {
            toastr['info']('Przełączono na serwer prywatny!');
            $('.party-panel')['show']();
            toastr['info']('Przełączono na serwer publiczny!');
            $('#active-parties')['empty']();
            $('.party-panel')['hide']();
          this['onJoin']();
          if (style['play']) {
            this['onPlayerSpawn']();
        },
        "isSocketOpen" : function() {
          return this['socket'] !== null && this["socket"]['readyState'] === this['socket']['OPEN'];
        },
        "createView" : function(ol) {
          return new DataView(new ArrayBuffer(ol));
        },
        "strToBuff" : function(PL$12, PL$13) {
          var PL$11 = this['createView'](1 + PL$13["length"] * 2);
          PL$11['setUint8'](0, PL$12);
          var PL$19 = 0;
          for (; PL$19 < PL$13['length']; PL$19++) {
            PL$11["setUint16"](1 + PL$19 * 2, PL$13["charCodeAt"](PL$19), !![]);
          return PL$11;
        },
        "sendBuffer" : function(callback) {
          this['socket']['send'](callback["buffer"]);
        },
        "handleMessage" : function(data) {
          this['readMessage'](new DataView(data['data']));
        },
        "readMessage" : function(event) {
          switch(event['getUint8'](0)) {
            case 0:
              this["playerID"] = event['getUint32'](1, !![]);
              break;
            case 1:
              this['sendPlayerUpdate']();
              break;
            case 20:
              this['updateTeamPlayer'](event);
              break;
            case 30:
              this['updateTeamPlayerPosition'](event);
              break;
            case 96:
              break;
              this["updateParties"](event);
              this["displayParties"]();
              break;
            case 100:
              this['readChatMessage'](event);
              break;
        },
        "sendPlayerState" : function(duration) {
          if (this["isSocketOpen"]()) {
            var backEl = this["createView"](1);
            backEl['setUint8'](0, duration);
            this['sendBuffer'](backEl);
        },
        "sendPlayerSpawn" : function() {
          this['sendPlayerState'](1);
        },
        "sendPlayerDeath" : function() {
          this["sendPlayerState"](2);
        },
        "sendPlayerJoin" : function() {
          this['sendPlayerState'](3);
        },
        "sendPlayerData" : function(data, player, message) {
          if (this[player] !== null && this[player] === message) {
            return;
          if (this['isSocketOpen']()) {
            this['sendBuffer'](this['strToBuff'](data, message));
            this[player] = message;
        },
        "sendPlayerNick" : function() {
          this["sendPlayerData"](10, 'lastSentNick', params['nick']);
        },
        "sendPlayerClanTag" : function() {
          this['sendPlayerData'](11, 'lastSentClanTag', params["clanTag"]);
        },
        "sendPlayerSkinURL" : function() {
          this["sendPlayerData"](12, 'lastSentSkinURL', params['skinURL']);
        },
        "sendPlayerCustomColor" : function() {
          this['sendPlayerData'](13, 'lastSentCustomColor', params["color"]);
        },
        "sendPlayerColor" : function() {
          if (this['isSocketOpen']() && style["playerColor"]) {
            this['sendBuffer'](this['strToBuff'](14, style['playerColor']));
        },
        "sendPartyToken" : function() {
          this['setParty']();
          this['sendPlayerData'](15, 'lastSentPartyToken', this['partyToken']);
        },
        "sendServerToken" : function() {
          this['sendPlayerData'](16, "lastSentServerToken", this["serverToken"]);
        },
        "sendServerJoin" : function() {
          this['sendServerToken']();
          this['sendPlayerJoin']();
        },
        "sendServerRegion" : function() {
          if (!this['region']) {
            return;
          var pseudoNames = this['region']['split']("-");
          if (this['isSocketOpen']()) {
            this['sendBuffer'](this['strToBuff'](17, pseudoNames[0]));
        },
        "sendServerGameMode" : function() {
          var artistTrack = 'FFA';
          switch(this['gameMode']) {
            case ':battleroyale':
              artistTrack = 'BTR';
              break;
            case ':teams':
              artistTrack = 'TMS';
              break;
            case ':experimental':
              artistTrack = 'EXP';
              break;
            case ':party':
              artistTrack = 'PTY';
              break;
          if (this['isSocketOpen']()) {
            this["sendBuffer"](this['strToBuff'](18, artistTrack));
        },
        "sendServerData" : function() {
          if (this["skipServerData"]) {
            this['skipServerData'] = ![];
            return;
          this['region'] = $("#region")['val']();
          this["gameMode"] = $("#gamemode")["val"]();
          this['sendServerRegion']();
          this['sendServerGameMode']();
        },
        "sendPartyData" : function() {
          this['sendPlayerClanTag']();
          this['sendPartyToken']();
          this['sendServerToken']();
          this['sendPlayerNick']();
        },
        "sendPlayerUpdate" : function() {
          if (this["isSocketOpen"]() && style["play"] && this['playerID'] && style["playerColor"]) {
            var parseInt = function(PL$42) {
              var PL$41 = 0;
              for (; PL$41 < PL$42['length']; PL$41++) {
                graphic['setUint16'](sector, PL$42['charCodeAt'](PL$41), !![]);
                sector = sector + 2;
              graphic['setUint16'](sector, 0, !![]);
              sector = sector + 2;
            var type = 41;
            type = type + params['nick']['length'] * 2;
            type = type + params['skinURL']['length'] * 2;
            var graphic = this['createView'](type);
            graphic['setUint8'](0, 20);
            graphic["setUint32"](1, this['playerID'], !![]);
            var sector = 5;
            parseInt(params['nick']);
            parseInt(params['skinURL']);
            parseInt(params["color"]);
            parseInt(style['playerColor']);
            this['sendBuffer'](graphic);
        },
        "sendPlayerPosition" : function() {
          if (this['isSocketOpen']() && style['play'] && this['playerID']) {
            var artistTrack = this['createView'](17);
            artistTrack['setUint8'](0, 30);
            artistTrack['setUint32'](1, this['playerID'], !![]);
            artistTrack['setInt32'](5, this['getPlayerX'](), !![]);
            artistTrack["setInt32"](9, this['getPlayerY'](), !![]);
            if (typeof style["playerMass"] !== 'undefined') {
              artistTrack['setUint32'](13, style['playerMass'], !![]);
              artistTrack["setUint32"](13, this['playerMass'], !![]);
            this['sendBuffer'](artistTrack);
        },
        "checkPlayerID" : function(id) {
          if (id) {
            var IS_PENDING = 0;
            for (; IS_PENDING < this['teamPlayers']['length']; IS_PENDING++) {
              if (this["teamPlayers"][IS_PENDING]["id"] == id) {
                return IS_PENDING;
          return null;
        },
        "updateTeamPlayer" : function(source) {
          function $() {
            var tok = "";
            for (;;) {
              var numberOfTiles = source['getUint16'](level, !![]);
              if (numberOfTiles == 0) {
                break;
              tok = tok + String['fromCharCode'](numberOfTiles);
              level = level + 2;
            level = level + 2;
            return tok;
          var headPath = source["getUint32"](1, !![]);
          var level = 5;
          var connections = $();
          var _maskLayer = this["checkSkinURL"]($());
          var _msgSibling = $();
          var id = $();
          var patternlab = this['gameMode'] === ':party' ? connections + id : connections;
          var otherSideWidth = this['checkPlayerID'](headPath);
          if (otherSideWidth !== null) {
            this['teamPlayers'][otherSideWidth]['nick'] = connections;
            this['teamPlayers'][otherSideWidth]['skinID'] = patternlab;
            this['teamPlayers'][otherSideWidth]["skinURL"] = _maskLayer;
            this['teamPlayers'][otherSideWidth]['setColor'](id, _msgSibling);
            var headPattern = new init(headPath, connections, patternlab, _maskLayer);
            headPattern['setColor'](id, _msgSibling);
            this['teamPlayers']["push"](headPattern);
          this['cacheCustomSkin'](connections, id, _maskLayer);
        },
        "updateTeamPlayerPosition" : function(canCreateDiscussions) {
          var primaryModel = canCreateDiscussions['getUint32'](1, !![]);
          var key = this['checkPlayerID'](primaryModel);
          if (key !== null) {
            var id = canCreateDiscussions["getInt32"](5, !![]);
            var cell = canCreateDiscussions["getInt32"](9, !![]);
            var iconCell = canCreateDiscussions['getUint32'](13, !![]);
            if (iconCell > 36E4) {
              return;
            var row = this['teamPlayers'][key];
            row["x"] = id;
            row["y"] = cell;
            row["mass"] = iconCell;
            row['alive'] = !![];
            row["updateTime"] = Date['now']();
            if (this['targeting'] && this['targetID'] && primaryModel == this['targetID']) {
              this['updateTarget'](row["nick"], row['skinURL'], id, cell, iconCell, row['color']);
        },
        "updateTeamPlayers" : function() {
          this["sendPlayerPosition"]();
          this['chatUsers'] = {};
          this['top5'] = [];
          var i = 0;
          for (; i < this['teamPlayers']['length']; i++) {
            var row = this['teamPlayers'][i];
            if (row['alive'] && Date['now']() - row['updateTime'] >= 2E3 || row["mass"] == 0) {
              row['alive'] = ![];
              if (this['targeting'] && this['targetID'] && row["id"] == this['targetID']) {
                this["setTargetStatus"](2);
            if (row['alive']) {
              this['top5']['push']({
                "id" : row["id"],
                "nick" : row['nick'],
                "x" : row["x"],
                "y" : row["y"],
                "mass" : row["mass"],
                "color" : row['color']
              if (!this["isChatUserMuted"](row["id"])) {
                this['addChatUser'](row["id"], row['nick']);
          this['top5']['sort'](function(subtractee, subtractor) {
            return subtractor['mass'] - subtractee['mass'];
          this['displayTop5']();
        },
        "updateParties" : function(PL$18) {
          this['parties'] = [];
          var clientHeight = PL$18["getUint8"](1);
          var PL$6 = 2;
          var targetOffsetHeight = 0;
          for (; targetOffsetHeight < clientHeight; targetOffsetHeight++) {
            var PL$22 = "";
            for (;;) {
              var PL$12 = PL$18['getUint16'](PL$6, !![]);
              if (PL$12 == 0) {
                break;
              PL$22 = PL$22 + String["fromCharCode"](PL$12);
              PL$6 = PL$6 + 2;
            PL$6 = PL$6 + 2;
            this['parties']["push"](PL$22);
        },
        "readChatMessage" : function(PL$20) {
          if (props["disableChat"]) {
            return;
          var labelFromDom = (new Date)['toTimeString']()['replace'](/^(\d{2}:\d{2}).*/, "$1");
          var numKeysDeleted = PL$20['getUint8'](1);
          var GET_AUTH_URL_TIMEOUT = PL$20['getUint32'](2, !![]);
          var _0x276b7d = PL$20['getUint32'](6, !![]);
          if (this['isChatUserMuted'](GET_AUTH_URL_TIMEOUT) || _0x276b7d != 0 && _0x276b7d != this["playerID"] && GET_AUTH_URL_TIMEOUT != this["playerID"]) {
            return;
          var m_key = "";
          var PL$21 = 10;
          for (; PL$21 < PL$20['byteLength']; PL$21 = PL$21 + 2) {
            var m_buffer = PL$20["getUint16"](PL$21, !![]);
            if (m_buffer == 0) {
              break;
            m_key = m_key + String['fromCharCode'](m_buffer);
          this['displayChatMessage'](labelFromDom, numKeysDeleted, GET_AUTH_URL_TIMEOUT, m_key);
        },
        "sendChatMessage" : function(event, data) {
          if (Date["now"]() - this['lastMessageSentTime'] < 500 || data['length'] == 0 || params['nick']['length'] == 0) {
            return;
          if (this['isSocketOpen']()) {
            data = params["nick"] + ": " + data;
            var eventHandlers = this['createView'](10 + data["length"] * 2);
            eventHandlers['setUint8'](0, 100);
            eventHandlers['setUint8'](1, event);
            eventHandlers['setUint32'](2, this["playerID"], !![]);
            eventHandlers['setUint32'](6, 0, !![]);
            var i = 0;
            for (; i < data["length"]; i++) {
              eventHandlers["setUint16"](10 + i * 2, data['charCodeAt'](i), !![]);
            this['sendBuffer'](eventHandlers);
            this['lastMessageSentTime'] = Date["now"]();
        },
        "prepareCommand" : function(canCreateDiscussions) {
          var cmd = canCreateDiscussions['replace']('%currentSector%', this["currentSector"]);
          return cmd;
        },
        "sendCommand" : function(inDefaultFrame) {
          var artistTrack = this["prepareCommand"](store['comm' + inDefaultFrame]);
          this["sendChatMessage"](102, artistTrack);
        },
        "addChatUser" : function(url, eTag) {
          this['chatUsers'][url] = eTag;
        },
        "getChatUserNick" : function(segment) {
          if (this['chatUsers']["hasOwnProperty"](segment)) {
            return this['chatUsers'][segment];
          return "";
        },
        "muteChatUser" : function(cookieType) {
          if (!cookieType || this['isChatUserMuted'](cookieType)) {
            return;
          var value = this['getChatUserNick'](cookieType);
          this['chatMutedUsers'][cookieType] = value;
          this['chatMutedUserIDs']['push'](cookieType);
          toastr['error'](messages['userMuted']['replace']('%user%', '<strong>' + this['escapeHTML'](value) + '</strong>') + ' <button data-user-id="' + cookieType + '" class="btn btn-xs btn-green btn-unmute-user">' + messages['unmute'] + '</button>');
        },
        "unmuteChatUser" : function(listener) {
          if (!listener) {
            return;
          var index = this['chatMutedUserIDs']["indexOf"](listener);
          if (index != -1) {
            this["chatMutedUserIDs"]["splice"](index, 1);
            toastr['info'](messages['userUnmuted']["replace"]('%user%', '<strong>' + this['escapeHTML'](this['chatMutedUsers'][listener]) + "</strong>"));
            delete this['chatMutedUsers'][listener];
        },
        "isChatUserMuted" : function(mmCoreSplitViewBlock) {
          if (this["chatMutedUserIDs"]['indexOf'](mmCoreSplitViewBlock) != -1) {
            return !![];
          return ![];
        },
        "parseMessage" : function(stanza) {
          var regNamedQueries = /\[img\]([\w:\/\.\?]+)\[\/img\]/i;
          if (regNamedQueries['test'](stanza)) {
            var width = stanza['match'](regNamedQueries)[1];
            if (props['showChatImages'] && this['checkImgURL'](width)) {
              return '<img src="' + width + '" style="width:100%;border:none;">';
            return "";
          var callbacks = /\[yt\]([\w-]{11})\[\/yt\]/i;
          if (callbacks['test'](stanza)) {
            if (props['showChatVideos']) {
              var onErrorSpy = stanza['match'](callbacks);
              return '<iframe type="text/html" width="100%" height="auto" src="https://www.youtube.com/embed/' + onErrorSpy[1] + '?autoplay=1&amp;vq=tiny" frameborder="0" />';
            return "";
          var message = this['escapeHTML'](stanza);
          if (props["chatEmoticons"]) {
            message = this['parseEmoticons'](message);
          return message;
        },
        "parseEmoticons" : function(text) {
          return String(text)['replace'](/&lt;3/g, "<3")['replace'](/(O:\)|3:\)|8=\)|:\)|;\)|=\)|:D|X\-D|=D|:\(|;\(|:P|;P|:\*|\$\)|<3|:o|\(:\||:\||:\\|:@|\|\-\)|\^_\^|\-_\-|\$_\$|\(poop\)|\(fuck\)|\(clap\)|\(ok\)|\(victory\)|\(y\)|\(n\))/g, function(index) {
            return '<img src="https://cdn.ogario.ovh/static/emoticons/' + folder[index] + '" alt="' + index + '" class="emoticon">';
        },
        "displayChatMessage" : function(isPrivate, callback, element, content) {
          if (content['length'] == 0) {
            return;
          var nickname = content['split'](": ", 1)["toString"]();
          var packet = this['parseMessage'](content['replace'](nickname + ": ", ""));
          if (nickname['length'] == 0 || nickname['length'] > 15 || packet["length"] == 0) {
            return;
          var imageTag = "";
          if (element != 0 && element != this['playerID']) {
            this['addChatUser'](element, nickname);
            imageTag = '<a href="#" data-user-id="' + element + '" class="mute-user ogicon-user-minus"></a> ';
          nickname = this["escapeHTML"](nickname);
          if (callback == 101) {
            if (props['showChatBox']) {
              $('#chat-box')['append']('<div class="message"><span class="message-time">[' + isPrivate + '] </span>' + imageTag + '<span class="message-nick">' + nickname + ': </span><span class="message-text">' + packet + '</span></div>');
              $("#chat-box")['perfectScrollbar']('update');
              $("#chat-box")["animate"]({
                "scrollTop" : $("#chat-box")['prop']('scrollHeight')
              if (props['chatSounds']) {
                this['playSound'](this['messageSound']);
              return;
            if (!props['hideChat']) {
              toastr['success']('<span class="message-nick">' + nickname + ': </span><span class="message-text">' + packet + "</span>" + imageTag);
              if (props['chatSounds']) {
                this['playSound'](this['messageSound']);
            this['chatHistory']["push"]({
              "nick" : nickname,
              "message" : packet
            if (this["chatHistory"]["length"] > 15) {
              this['chatHistory']['shift']();
            if (callback == 102) {
              if (props['showChatBox']) {
                $('#chat-box')['append']('<div class="message command"><span class="command-time">[' + isPrivate + '] </span>' + imageTag + '<span class="command-nick">' + nickname + ': </span><span class="command-text">' + packet + '</span></div>');
                $("#chat-box")['perfectScrollbar']("update");
                $('#chat-box')['animate']({
                  "scrollTop" : $("#chat-box")['prop']('scrollHeight')
                if (props['chatSounds']) {
                  this["playSound"](this['commandSound']);
                return;
              if (!props["hideChat"]) {
                toastr['warning']('<span class="command-nick">' + nickname + ': </span><span class="command-text">' + packet + "</span>" + imageTag);
                if (props['chatSounds']) {
                  this["playSound"](this['commandSound']);
              $('#messages')["append"](content);
        },
        "displayUserList" : function(obj, data, linkedEntities, force, method) {
          var text = "";
          if (Object['keys'](obj)['length']) {
            text = text + '<ol class="user-list">';
            var key;
            for (key in obj) {
              if (obj['hasOwnProperty'](key)) {
                text = text + ('<li><strong>' + this['escapeHTML'](obj[key]) + '</strong> <button data-user-id="' + key + '" class="btn btn-xs ' + linkedEntities + '">' + force + '</button></li>');
            text = text + '</ol>';
            text = text + messages['none'];
          toastr[method](text, data, {
            "closeButton" : !![],
            "tapToDismiss" : ![]
        },
        "displayChatActiveUsers" : function() {
          this['displayUserList'](this['chatUsers'], messages['activeUsers'], 'btn-red btn-mute-user', messages["mute"], "info");
        },
        "displayChatMutedUsers" : function() {
          this["displayUserList"](this['chatMutedUsers'], messages['mutedUsers'], 'btn-green btn-unmute-user', messages['unmute'], "error");
        },
        "preloadChatSounds" : function() {
          this["setMessageSound"]();
          this['setCommandSound']();
        },
        "setChatSoundsBtn" : function() {
          if (props['chatSounds']) {
            $('.chat-sound-notifications')['removeClass']('ogicon-volume-mute2')["addClass"]('ogicon-volume-high');
            $('.chat-sound-notifications')['removeClass']('ogicon-volume-high')["addClass"]('ogicon-volume-mute2');
        },
        "setMessageSound" : function() {
          this['messageSound'] = this["setSound"](props['messageSound']);
        },
        "setCommandSound" : function() {
          this["commandSound"] = this['setSound'](props["commandSound"]);
        },
        "setSound" : function(source) {
          if (!source) {
            return null;
          return new Audio(source);
        },
        "playSound" : function(media) {
          if (media && media["play"]) {
            media['pause']();
            media['currentTime'] = 0;
            media['play']();
        },
        "setTargeting" : function() {
          if (!this["targetID"]) {
            return;
          this['targeting'] = !this["targeting"];
          style['targeting'] = this['targeting'];
          this['setTargetingInfo']();
        },
        "setTargetingInfo" : function() {
          if (this["targeting"]) {
            $('#set-targeting')['addClass']("active");
            $("#target-status")['show']();
            if (this['targetStatus'] != 2) {
              $("#target-summary")['show']();
            $("#set-targeting")['removeClass']('active');
            $('#target-summary, #target-status')["hide"]();
        },
        "cancelTargeting" : function() {
          this['setTargetStatus'](0);
        },
        "setPrivateMiniMap" : function() {
          if (!this['targetID']) {
            return;
          this['privateMiniMap'] = !this['privateMiniMap'];
          if (this['privateMiniMap']) {
            $('#set-private-minimap')["addClass"]('active');
            $("#set-private-minimap")['removeClass']('active');
        },
        "setTarget" : function(e) {
          var id = this['checkPlayerID'](e);
          if (id !== null) {
            var map = this['teamPlayers'][id];
            this['targetID'] = map["id"];
            this['updateTarget'](map['nick'], map['skinURL'], map["x"], map["y"], map['mass'], map['color']);
            if (!map['alive']) {
              this["setTargetStatus"](2);
              return;
            this["setTargetStatus"](1);
            this['setTargetStatus'](0);
        },
        "setTargetStatus" : function(canCreateDiscussions) {
          switch(canCreateDiscussions) {
            case 0:
              this["targetStatus"] = 0;
              this['targetID'] = 0;
              this['targetNick'] = "";
              this['targetSkinURL'] = "";
              this["targeting"] = ![];
              style['targeting'] = ![];
              this['privateMiniMap'] = ![];
              $('#target-skin, #target-nick, #target-summary')['hide']();
              $("#target-status")['show']()["text"]("[" + messages["targetNotSet"] + "]");
              $("#target-panel-hud a")["removeClass"]('active');
              break;
            case 1:
              this["targetStatus"] = 1;
              if (!this['targeting']) {
                this["targeting"] = !![];
                style["targeting"] = !![];
                this["setTargetingInfo"]();
              $('#target-skin, #target-nick, #target-status, #target-summary')['show']();
              break;
            case 2:
              this['targetStatus'] = 2;
              $('#target-summary')['hide']();
              $('#target-status')['show']()['text']("[" + messages['targetDead'] + "]");
              style['resetTargetPosition']();
              break;
        },
        "changeTarget" : function() {
          var l = this['checkPlayerID'](this["targetID"]);
          var index = null;
          var i = 0;
          for (; i < this['teamPlayers']["length"]; i++) {
            if (!this['teamPlayers'][i]["alive"]) {
              continue;
            if (l !== null) {
              if (i < l && index === null) {
                index = i;
                continue;
              if (i > l) {
                index = i;
                break;
              l = i;
              break;
          if (index !== null) {
            l = index;
          if (l !== null) {
            this['setTarget'](this["teamPlayers"][l]["id"]);
            this['setTargetStatus'](0);
        },
        "updateTarget" : function(session, value, name, event, color, image) {
          style['setTargetPosition'](name, event);
          if (this['targetNick'] !== session) {
            this['targetNick'] = session;
            $('#target-nick')['html'](this["escapeHTML"](session));
          $('#target-skin')["css"]('background-color', image);
          if (value && this["targetSkinURL"] !== value) {
            if (this['customSkinsCache']["hasOwnProperty"](value + '_cached')) {
              $("#target-skin img")["attr"]('src', value);
              this['targetSkinURL'] = value;
              $('#target-skin img')["attr"]('src', 'https://cdn.ogario.ovh/static/img/blank.png');
          $('#target-status')['text']("[" + this['shortMassFormat'](color) + "]");
          var normalized = this["calculateMapSector"](name, event);
          var artistTrack = messages["targetDistance"] + ': <span class="hud-main-color">' + style['targetDistance'] + " [" + normalized + "]</span>";
          if (style["play"]) {
            artistTrack = artistTrack + (' | ' + messages['targetMass'] + ': <span class="hud-main-color">' + this['shortMassFormat'](color + style['playerMass']) + '</span>');
          $("#target-summary")['html'](artistTrack);
          if (this['targetStatus'] != 1) {
            this['setTargetStatus'](1);
        },
        "updateQuest" : function() {
          if (!this['showQuest'] || this['gameMode'] !== ':ffa') {
            return;
          if (window["MC"] && window["MC"]['getQuestProgressLabel']) {
            this['questHUD']["textContent"] = window["MC"]['getQuestProgressLabel']();
        },
        "init" : function() {
          this['loadSettings']();
          this['loadProfiles']();
          this['setLang']();
          this['setMenu']();
          this['setUI']();
          if (_0x21f577) {
            _0x21f577['setTheme']();
          this['setShowQuickMenu']();
          this["setShowSkinsPanel"]();
          this['setProfile']();
          this['setMainButtons']();
          this["setStreamMode"]();
          this['setHideSkinUrl']();
          this['setMiniMap']();
          this["setAutoResp"]();
          this['setDisableChat']();
          this['setShowChatBox']();
          this['setTop5']();
          this['setTargetingHUD']();
          this['setQuest']();
          this['displayTime']();
          this['setCenteredLb']();
          this['setNormalLb']();
          this["setFpsAtTop"]();
          this["displayStats"]();
          this['setBlockPopups']();
          this["preloadChatSounds"]();
          this['setChatSoundsBtn']();
          var _0x2922c6 = this;
          setInterval(function() {
            _0x2922c6["drawMiniMap"]();
          setInterval(function() {
            _0x2922c6['updateTeamPlayers']();
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
        "clientVersionString" : '3.5.0',
        "time" : Date['now'](),
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
          console['log']('[OGARio by szymy] Connecting to game server:', url);
          var bonusTraitModifiers = this;
          this['closeConnection']();
          this['flushCellsData']();
          this['protocolKey'] = null;
          this['clientKey'] = null;
          this['accessTokenSent'] = ![];
          this['connectionOpened'] = ![];
          this['loggedIn'] = ![];
          this['mapOffsetFixed'] = ![];
          this['leaderboard'] = [];
          this["ws"] = url;
          this['socket'] = new WebSocket(url);
          this["socket"]['binaryType'] = 'arraybuffer';
          this['socket']['onopen'] = function() {
            bonusTraitModifiers['onOpen']();
          this['socket']['onmessage'] = function(person) {
            bonusTraitModifiers['onMessage'](person);
          this["socket"]['onerror'] = function(person) {
            bonusTraitModifiers['onError'](person);
          this['socket']['onclose'] = function(person) {
            bonusTraitModifiers['onClose'](person);
          router['getWS'](this["ws"]);
          router['sendServerJoin']();
          router['sendServerData']();
          router['displayLeaderboard']("");
          if (window['master'] && window['master']['onConnect']) {
            window['master']['onConnect']();
        },
        "onOpen" : function(index) {
          console['log']('[OGARio by szymy] Game server socket open');
          this['time'] = Date['now']();
          var artistTrack = this['createView'](5);
          artistTrack["setUint8"](0, 254);
          artistTrack['setUint32'](1, 21, !![]);
          this['sendMessage'](artistTrack);
          artistTrack = this['createView'](5);
          artistTrack['setUint8'](0, 255);
          artistTrack["setUint32"](1, this['clientVersion'], !![]);
          this['sendMessage'](artistTrack);
          this['connectionOpened'] = !![];
        },
        "onMessage" : function(data) {
          data = new DataView(data['data']);
          if (this['protocolKey']) {
            data = this['shiftMessage'](data, this['protocolKey'] ^ this['clientVersion']);
          this['handleMessage'](data);
        },
        "onError" : function(assembly) {
          console["log"]('[OGARio by szymy] Game server socket error');
          this['flushCellsData']();
          if (window['master'] && window["master"]['onDisconnect']) {
            window['master']["onDisconnect"]();
        },
        "onClose" : function(result) {
          console["log"]("[OGARio by szymy] Game server socket close");
          this['flushCellsData']();
          if (window["master"] && window['master']['onDisconnect']) {
            window['master']['onDisconnect']();
        },
        "closeConnection" : function() {
          if (this['socket']) {
            this['socket']['onopen'] = null;
            this["socket"]['onmessage'] = null;
            this["socket"]['onerror'] = null;
            this['socket']['onclose'] = null;
            try {
              this["socket"]["close"]();
            this['socket'] = null;
            this["ws"] = null;
        },
        "isSocketOpen" : function() {
          return this["socket"] !== null && this['socket']['readyState'] === this['socket']["OPEN"];
        },
        "writeUint32" : function(data, value) {
          for (; !![];) {
            if ((value & -128) == 0) {
              data['push'](value);
              return;
              data['push'](value & 127 | 128);
              value = value >>> 7;
        },
        "createView" : function(ol) {
          return new DataView(new ArrayBuffer(ol));
        },
        "sendBuffer" : function(callback) {
          this['socket']["send"](callback["buffer"]);
        },
        "sendMessage" : function(params) {
          if (this['connectionOpened']) {
            if (!this['clientKey']) {
              return;
            params = this['shiftMessage'](params, this['clientKey']);
            this["clientKey"] = this["shiftKey"](this['clientKey']);
          this["sendBuffer"](params);
        },
        "sendAction" : function(data) {
          if (!this['isSocketOpen']()) {
            return;
          var readInfo = this['createView'](1);
          readInfo['setUint8'](0, data);
          this['sendMessage'](readInfo);
        },
        "sendSpectate" : function() {
          this["sendAction"](1);
        },
        "sendFreeSpectate" : function() {
          this['sendAction'](18);
        },
        "sendEject" : function() {
          this['sendPosition']();
          this['sendAction'](21);
        },
        "sendSplit" : function() {
          this['sendPosition']();
          this['sendAction'](17);
        },
        "sendNick" : function(data) {
          this['playerNick'] = data;
          data = window['unescape'](window["encodeURIComponent"](data));
          var array = this['createView'](2 + data["length"]);
          var i = 0;
          for (; i < data["length"]; i++) {
            array['setUint8'](i + 1, data["charCodeAt"](i));
          this['sendMessage'](array);
        },
        "sendPosition" : function() {
          if (!this["isSocketOpen"]() || !this['connectionOpened'] || !this["clientKey"]) {
            return;
          var relation = this["cursorX"];
          var relationName = this['cursorY'];
          if (!this["play"] && this['targeting'] || this['pause']) {
            relation = this['targetX'];
            relationName = this['targetY'];
          var _related2 = this["createView"](13);
          _related2['setUint8'](0, 16);
          _related2['setInt32'](1, relation, !![]);
          _related2['setInt32'](5, relationName, !![]);
          _related2['setUint32'](9, this['protocolKey'], !![]);
          this['sendMessage'](_related2);
        },
        "sendAccessToken" : function(args, position, index) {
          if (this['accessTokenSent']) {
            return;
          if (!index) {
            index = 102;
          var i = args['length'];
          var count = this["clientVersionString"]['length'];
          var data = [index, 8, 1, 18];
          this['writeUint32'](data, i + count + 23);
          data['push'](8, 10, 82);
          this['writeUint32'](data, i + count + 18);
          data['push'](8, position, 18, count + 8, 8, 5, 18, count);
          var x = 0;
          for (; x < count; x++) {
            data['push'](this['clientVersionString']['charCodeAt'](x));
          data['push'](24, 0, 32, 0, 26);
          this["writeUint32"](data, i + 3);
          data['push'](10);
          this['writeUint32'](data, i);
          x = 0;
          for (; x < i; x++) {
            data['push'](args['charCodeAt'](x));
          data = new Uint8Array(data);
          var raw_basefont = new DataView(data['buffer']);
          this['sendMessage'](raw_basefont);
        },
        "sendFbToken" : function(mmCoreSplitViewBlock) {
          this['sendAccessToken'](mmCoreSplitViewBlock, 2);
        },
        "sendGplusToken" : function(mmCoreSplitViewBlock) {
          this['sendAccessToken'](mmCoreSplitViewBlock, 4);
        },
        "sendRecaptcha" : function(PL$42) {
          var parent = this["createView"](2 + PL$42['length']);
          parent["setUint8"](0, 86);
          var PL$41 = 0;
          for (; PL$41 < PL$42['length']; PL$41++) {
            parent['setUint8'](1 + PL$41, PL$42['charCodeAt'](PL$41));
          parent["setUint8"](PL$42['length'] + 1, 0);
          this['sendMessage'](parent);
        },
        "setClientVersion" : function(b, result) {
          this['clientVersion'] = b;
          this['clientVersionString'] = result;
          console['log']('[OGARio by szymy] Client version:', b, result);
        },
        "generateClientKey" : function(option, _relatedTarget) {
          if (!option['length'] || !_relatedTarget['byteLength']) {
            return null;
          var j = null;
          var suggestedValue = 1540483477;
          var constraints = option['match'](/(ws+:\/\/)([^:]*)(:\d+)/)[2];
          var framesize = constraints['length'] + _relatedTarget['byteLength'];
          var data = new Uint8Array(framesize);
          var value = 0;
          for (; value < constraints['length']; value++) {
            data[value] = constraints['charCodeAt'](value);
          data['set'](_relatedTarget, constraints['length']);
          var dv = new DataView(data["buffer"]);
          var maxTextureAvailableSpace = framesize - 1;
          var k = (maxTextureAvailableSpace - 4 & -4) + 4 | 0;
          var i = maxTextureAvailableSpace ^ 255;
          var n = 0;
          for (; maxTextureAvailableSpace > 3;) {
            j = Math['imul'](dv['getInt32'](n, !![]), suggestedValue) | 0;
            i = (Math['imul'](j >>> 24 ^ j, suggestedValue) | 0) ^ (Math['imul'](i, suggestedValue) | 0);
            maxTextureAvailableSpace = maxTextureAvailableSpace - 4;
            n = n + 4;
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
          if (j != i) {
            j = Math['imul'](data[k] ^ i, suggestedValue) | 0;
          i = j >>> 13;
          j = i ^ j;
          j = Math["imul"](j, suggestedValue) | 0;
          i = j >>> 15;
          j = i ^ j;
          console['log']('[OGARio by szymy] Generated client key:', j);
          return j;
        },
        "shiftKey" : function(c) {
          var suggestedValue = 1540483477;
          c = Math['imul'](c, suggestedValue) | 0;
          c = (Math['imul'](c >>> 24 ^ c, suggestedValue) | 0) ^ 114296087;
          c = Math['imul'](c >>> 13 ^ c, suggestedValue) | 0;
          return c >>> 15 ^ c;
        },
        "shiftMessage" : function(PL$42, isSlidingUp, $cont) {
          if (!$cont) {
            var PL$41 = 0;
            for (; PL$41 < PL$42['byteLength']; PL$41++) {
              PL$42['setUint8'](PL$41, PL$42['getUint8'](PL$41) ^ isSlidingUp >>> PL$41 % 4 * 8 & 255);
            PL$41 = 0;
            for (; PL$41 < PL$42['length']; PL$41++) {
              PL$42['writeUInt8'](PL$42["readUInt8"](PL$41) ^ isSlidingUp >>> PL$41 % 4 * 8 & 255, PL$41);
          return PL$42;
        },
        "decompressMessage" : function(data) {
          var buffer = new Float32Array(data["buffer"]);
          var time = new Float32Array(buffer['readUInt32LE'](1));
          img_slide['decodeBlock'](buffer["slice"](5), time);
          return time;
        },
        "handleMessage" : function(data) {
          var respond = function() {
            var m_key = "";
            for (;;) {
              var m_buffer = data["getUint8"](left++);
              if (m_buffer == 0) {
                break;
              m_key = m_key + String['fromCharCode'](m_buffer);
            return m_key;
          var left = 0;
          var _0x2644a8 = data['getUint8'](left++);
          if (_0x2644a8 == 54) {
            _0x2644a8 = 53;
          switch(_0x2644a8) {
            case 5:
              break;
            case 17:
              this["viewX"] = data['getFloat32'](left, !![]);
              left = left + 4;
              this['viewY'] = data["getFloat32"](left, !![]);
              left = left + 4;
              this['scale'] = data["getFloat32"](left, !![]);
              break;
            case 18:
              if (this["protocolKey"]) {
                this['protocolKey'] = this['shiftKey'](this["protocolKey"]);
              this['flushCellsData']();
              break;
            case 32:
              this['playerCellIDs']['push'](data['getUint32'](left, !![]));
              if (!this['play']) {
                this["play"] = !![];
                router['hideMenu']();
                this['playerColor'] = null;
                router['onPlayerSpawn']();
              break;
            case 50:
              this['pieChart'] = [];
              var popupLeft = data['getUint32'](left, !![]);
              left = left + 4;
              var actorLeft = 0;
              for (; actorLeft < popupLeft; actorLeft++) {
                this["pieChart"]['push'](data['getFloat32'](left, !![]));
                left = left + 4;
              defaults['drawPieChart']();
              break;
            case 53:
              this['leaderboard'] = [];
              this['playerPosition'] = 0;
              if (data["getUint8"](0) == 54) {
                var leftExp = data['getUint16'](left, !![]);
                left = left + 2;
              var _0xe00dd8 = 0;
              for (; left < data['byteLength'];) {
                var key_or_value = data["getUint8"](left++);
                var nickname = "";
                var widget = 0;
                var isFriend = ![];
                _0xe00dd8++;
                if (key_or_value & 2) {
                  nickname = window["decodeURIComponent"](window['escape'](respond()));
                if (key_or_value & 4) {
                  widget = data['getUint32'](left, !![]);
                  left = left + 4;
                if (key_or_value & 8) {
                  nickname = this['playerNick'];
                  widget = 'isPlayer';
                  this['playerPosition'] = _0xe00dd8;
                if (key_or_value & 16) {
                  isFriend = !![];
                this['leaderboard']["push"]({
                  "nick" : nickname,
                  "id" : widget,
                  "isFriend" : isFriend
              this["handleLeaderboard"]();
              break;
            case 54:
              break;
            case 69:
              var groupLeft = data['getUint16'](left, !![]);
              left = left + 2;
              this['ghostCells'] = [];
              actorLeft = 0;
              for (; actorLeft < groupLeft; actorLeft++) {
                left = left + 8;
                var size = data["getUint32"](left, !![]);
                left = left + 5;
                this['ghostCells']["push"]({
                  "mass" : size
              break;
            case 85:
              console['log']('[OGARio by szymy] Captcha requested');
              if (window['master'] && window['master']['recaptchaRequested']) {
                window['master']['recaptchaRequested']();
              break;
            case 102:
              var ret = new Node(data, left);
              key_or_value = ret["readFlag"]();
              if (key_or_value == 1) {
                ret['setContentType']();
              key_or_value = ret['readFlag']();
              if (key_or_value == 2) {
                ret['setUncompressedSize']();
              key_or_value = ret['readFlag']();
              if (key_or_value == 1) {
                var obj = ret['readUint32']();
                var previousState = ret['readFlag']();
                var artistTrack = ret['readUint32']();
                switch(obj) {
                  case 11:
                    console['log']('102 login response', ret['view']["byteLength"], ret['contentType'], ret['uncompressedSize'], obj, previousState, artistTrack);
                    break;
                  case 62:
                    console["log"]("102 game over");
                    break;
                  default:
                    console['log']("102 unknown", obj, previousState);
              if (data['byteLength'] < 20) {
                this["loggedIn"] = ![];
                if (window['logout']) {
                  window['logout']();
              break;
            case 103:
              this['accessTokenSent'] = !![];
              break;
            case 114:
              break;
            case 161:
              break;
            case 176:
              this['battleRoyale']["startTime"] = data['getUint32'](left, !![]);
              break;
            case 177:
              this['battleRoyale']["joined"] = !![];
              break;
            case 178:
              this['battleRoyale']['players'] = data["getUint16"](left, !![]);
              left = left + 2;
              key_or_value = data['getUint16'](left, !![]);
              left = left + 2;
              if (!key_or_value) {
                this["battleRoyale"]['state'] = 0;
                this['battleRoyale']['joined'] = ![];
              if (key_or_value & 3) {
                this['battleRoyale']["state"] = data["getUint8"](left++);
                this['battleRoyale']["x"] = data['getInt32'](left, !![]);
                left = left + 4;
                this["battleRoyale"]["y"] = data["getInt32"](left, !![]);
                left = left + 4;
                this["battleRoyale"]["radius"] = data["getUint32"](left, !![]);
                left = left + 4;
                this['battleRoyale']['shrinkTime'] = data['getUint32'](left, !![]) * 1E3;
                left = left + 4;
                if (this['battleRoyale']["shrinkTime"]) {
                  this["battleRoyale"]['timeLeft'] = ~~((this["battleRoyale"]['shrinkTime'] - Date['now']() + this['serverTimeDiff']) / 1E3);
                  if (this['battleRoyale']['timeLeft'] < 0) {
                    this['battleRoyale']['timeLeft'] = 0;
              if (key_or_value & 2) {
                this['battleRoyale']['targetX'] = data['getInt32'](left, !![]);
                left = left + 4;
                this['battleRoyale']["targetY"] = data['getInt32'](left, !![]);
                left = left + 4;
                this['battleRoyale']['targetRadius'] = data['getUint32'](left, !![]);
              break;
            case 179:
              key_or_value = data['getUint8'](left);
              var _0x35d580 = window['decodeURIComponent'](window['escape'](respond()));
              var _0x23c8a1 = null;
              if (!key_or_value) {
                _0x23c8a1 = window['decodeURIComponent'](window['escape'](respond()));
              break;
            case 180:
              this['battleRoyale']['joined'] = ![];
              this["battleRoyale"]['rank'] = [];
              this['battleRoyale']['playerRank'] = data['getUint32'](left, !![]);
              left = left + 8;
              var divToScroll = data["getUint16"](left, !![]);
              left = left + 2;
              actorLeft = 0;
              for (; actorLeft < divToScroll; actorLeft++) {
                var sel_construtor_name = window['decodeURIComponent'](window['escape'](respond()));
                var p = data['getUint32'](left, !![]);
                left = left + 4;
                this['battleRoyale']['rank']['push']({
                  "place" : p,
                  "name" : sel_construtor_name
              break;
            case 226:
              var extraOptions = data['getUint16'](1, !![]);
              data = this["createView"](3);
              data['setUint8'](0, 227);
              data['setUint16'](1, extraOptions);
              this['sendMessage'](data);
              break;
            case 241:
              this['protocolKey'] = data['getUint32'](left, !![]);
              console['log']("[OGARio by szymy] Received protocol key:", this["protocolKey"]);
              var duration64str = new Uint8Array(data['buffer'], left = left + 4);
              this['clientKey'] = this['generateClientKey'](this["ws"], duration64str);
              if (window['master'] && window['master']['login']) {
                window['master']['login']();
              break;
            case 242:
              this["serverTime"] = data["getUint32"](left, !![]) * 1E3;
              this['serverTimeDiff'] = Date['now']() - this["serverTime"];
              break;
            case 255:
              this['handleSubmessage'](data);
              break;
            default:
              console["log"]('[OGARio by szymy] Unknown opcode:', data['getUint8'](0));
              break;
        },
        "handleSubmessage" : function(data) {
          data = this['decompressMessage'](data);
          var i = 0;
          switch(data['readUInt8'](i++)) {
            case 16:
              this["updateCells"](data, i);
              break;
            case 64:
              this['viewMinX'] = data['readDoubleLE'](i);
              i = i + 8;
              this['viewMinY'] = data['readDoubleLE'](i);
              i = i + 8;
              this['viewMaxX'] = data['readDoubleLE'](i);
              i = i + 8;
              this["viewMaxY"] = data['readDoubleLE'](i);
              this["setMapOffset"](this['viewMinX'], this['viewMinY'], this["viewMaxX"], this['viewMaxY']);
              break;
            default:
              console['log']('[OGARio by szymy] Unknown sub opcode:', data['readUInt8'](0));
              break;
        },
        "handleLeaderboard" : function() {
          var test = "";
          var handler = "";
          var channel = 0;
          for (; channel < this['leaderboard']['length']; channel++) {
            if (channel == 10) {
              break;
            var channels = "<span>";
            if (this["leaderboard"][channel]["id"] === 'isPlayer') {
              channels = '<span class="me">';
              if (params['clanTag']['length'] && this['leaderboard'][channel]["nick"]['indexOf'](params['clanTag']) == 0) {
                channels = '<span class="teammate">';
            test = test + (channels + (channel + 1) + ". " + router["escapeHTML"](this['leaderboard'][channel]['nick']) + '</span>');
          if (this["playerPosition"] > 10) {
            test = test + ('<span class="me">' + this['playerPosition'] + ". " + router['escapeHTML'](this['playerNick']) + '</span>');
          if (props['showLbData']) {
            var type = 0;
            for (; type < this['ghostCells']['length']; type++) {
              if (type == channel) {
                break;
              handler = handler + '<span class="lb-data">';
              handler = handler + ('<span class="top5-mass-color">[' + router['shortMassFormat'](this['ghostCells'][type]['mass']) + ']</span>');
              handler = handler + '</span>';
          router['displayLeaderboard'](test, handler);
        },
        "flushCellsData" : function() {
          this['indexedCells'] = {};
          this["cells"] = [];
          this["playerCells"] = [];
          this['playerCellIDs'] = [];
          this["ghostCells"] = [];
          this["food"] = [];
          this["viruses"] = [];
        },
        "setMapOffset" : function(userId, courseId, state, participant) {
          if (state - userId > 14E3 && participant - courseId > 14E3) {
            this['mapOffsetX'] = this['mapOffset'] - state;
            this['mapOffsetY'] = this['mapOffset'] - participant;
            this["mapMinX"] = ~~(-this["mapOffset"] - this['mapOffsetX']);
            this['mapMinY'] = ~~(-this['mapOffset'] - this["mapOffsetY"]);
            this['mapMaxX'] = ~~(this["mapOffset"] - this['mapOffsetX']);
            this['mapMaxY'] = ~~(this['mapOffset'] - this["mapOffsetY"]);
            if (!this['mapOffsetFixed']) {
              this['viewX'] = (state + userId) / 2;
              this['viewY'] = (participant + courseId) / 2;
            this['mapOffsetFixed'] = !![];
            console['log']('[OGARio by szymy] Map offset fixed (x, y):', this["mapOffsetX"], this['mapOffsetY']);
        },
        "isInView" : function(position, start, offset) {
          var padding = this['canvasWidth'] / 2 / this['scale'];
          var paddingRight = this['canvasHeight'] / 2 / this['scale'];
          if (position + offset < this['viewX'] - padding || start + offset < this["viewY"] - paddingRight || position - offset > this['viewX'] + padding || start - offset > this['viewY'] + paddingRight) {
            return ![];
          return !![];
        },
        "updateCells" : function(callback, data) {
          var doUpdate = function() {
            var result = "";
            for (;;) {
              var chunkCursor = callback["readUInt8"](data++);
              if (chunkCursor == 0) {
                break;
              result = result + String['fromCharCode'](chunkCursor);
            return result;
          this['time'] = Date['now']();
          this['removePlayerCell'] = ![];
          var i = callback['readUInt16LE'](data);
          data = data + 2;
          var whichFriend = 0;
          for (; whichFriend < i; whichFriend++) {
            var m = this['indexedCells'][callback['readUInt32LE'](data)];
            var params = this['indexedCells'][callback["readUInt32LE"](data + 4)];
            data = data + 8;
            if (m && params) {
              params['targetX'] = m["x"];
              params['targetY'] = m["y"];
              params["targetSize"] = params["size"];
              params["time"] = this["time"];
              params['removeCell']();
          whichFriend = 0;
          for (;;) {
            var min = callback['readUInt32LE'](data);
            data = data + 4;
            if (min == 0) {
              break;
            var aUMLBlocks = callback['readInt32LE'](data);
            data = data + 4;
            var s_host = callback['readInt32LE'](data);
            data = data + 4;
            var i_port = callback["readUInt16LE"](data);
            data = data + 2;
            var $baseModifiers = callback['readUInt8'](data++);
            var padding = 0;
            if ($baseModifiers & 128) {
              padding = callback['readUInt8'](data++);
            var s_description = null;
            var flippedGlobalIds = null;
            var strFooter = "";
            var lineChartMap = null;
            if ($baseModifiers & 2) {
              var _0xeb3b45 = callback['readUInt8'](data++);
              var _0x117074 = callback['readUInt8'](data++);
              var _0x5cd821 = callback['readUInt8'](data++);
              s_description = this["rgb2Hex"](~~(_0xeb3b45 * .9), ~~(_0x117074 * .9), ~~(_0x5cd821 * .9));
            if ($baseModifiers & 4) {
              flippedGlobalIds = doUpdate();
            if ($baseModifiers & 8) {
              strFooter = window["decodeURIComponent"](window['escape'](doUpdate()));
            var $baseMethod = $baseModifiers & 1;
            var fn_callback = padding & 1;
            var o_transport = null;
            if (this['indexedCells']['hasOwnProperty'](min)) {
              o_transport = this["indexedCells"][min];
              if (s_description) {
                o_transport['color'] = s_description;
              o_transport = new construct(min, aUMLBlocks, s_host, i_port, s_description, fn_callback, $baseMethod, ![], props["shortMass"], props['virMassShots']);
              o_transport['time'] = this['time'];
              if (!fn_callback) {
                if ($baseMethod && props['virusesRange']) {
                  this['viruses']['push'](o_transport);
                this["cells"]['push'](o_transport);
                if (this["playerCellIDs"]["indexOf"](min) != -1 && this['playerCells']['indexOf'](o_transport) == -1) {
                  o_transport['isPlayerCell'] = !![];
                  this['playerColor'] = s_description;
                  this['playerCells']['push'](o_transport);
                this['food']['push'](o_transport);
              this['indexedCells'][min] = o_transport;
            if (o_transport["isPlayerCell"]) {
              strFooter = this["playerNick"];
            if (strFooter) {
              o_transport['targetNick'] = strFooter;
            o_transport["targetX"] = aUMLBlocks;
            o_transport['targetY'] = s_host;
            o_transport['targetSize'] = i_port;
            o_transport["isFood"] = fn_callback;
            o_transport['isVirus'] = $baseMethod;
            if (flippedGlobalIds) {
              o_transport['skin'] = flippedGlobalIds;
            if (padding & 4) {
              lineChartMap = callback["readUInt32LE"](data);
              data = data + 4;
          i = callback['readUInt16LE'](data);
          data = data + 2;
          whichFriend = 0;
          for (; whichFriend < i; whichFriend++) {
            min = callback['readUInt32LE'](data);
            data = data + 4;
            o_transport = this["indexedCells"][min];
            if (o_transport) {
              o_transport["removeCell"]();
          if (this['removePlayerCell'] && !this["playerCells"]['length']) {
            this["play"] = ![];
            router['onPlayerDeath']();
            router['showMenu'](300);
        },
        "color2Hex" : function(canCreateDiscussions) {
          var shapePathsCollection = canCreateDiscussions['toString'](16);
          return shapePathsCollection["length"] == 1 ? "0" + shapePathsCollection : shapePathsCollection;
        },
        "rgb2Hex" : function(r, g, b) {
          return "#" + this['color2Hex'](r) + this['color2Hex'](g) + this['color2Hex'](b);
        },
        "sortCells" : function() {
          this['cells']['sort'](function(cell, coordinates) {
            return cell['size'] == coordinates['size'] ? cell["id"] - coordinates["id"] : cell['size'] - coordinates['size'];
        },
        "calculatePlayerMassAndPosition" : function() {
          var vol = 0;
          var _0x501c85 = 0;
          var i = 0;
          var x0 = 0;
          var d = this['playerCells']['length'];
          var j = 0;
          for (; j < d; j++) {
            var v = this['playerCells'][j];
            vol = vol + v['size'];
            _0x501c85 = _0x501c85 + v['targetSize'] * v['targetSize'];
            i = i + v["x"] / d;
            x0 = x0 + v["y"] / d;
          this['viewX'] = i;
          this['viewY'] = x0;
          this['playerSize'] = vol;
          this['playerMass'] = ~~(_0x501c85 / 100);
          this['recalculatePlayerMass']();
        },
        "recalculatePlayerMass" : function() {
          this["playerScore"] = Math['max'](this['playerScore'], this['playerMass']);
          if (props["virColors"] || props['splitRange'] || props["oppColors"] || props["oppRings"] || props['showStatsSTE']) {
            var document = this['playerCells'];
            var el = document['length'];
            document["sort"](function(cell, coordinates) {
              return cell['size'] == coordinates['size'] ? cell["id"] - coordinates["id"] : cell['size'] - coordinates["size"];
            this['playerMinMass'] = ~~(document[0]['size'] * document[0]['size'] / 100);
            this["playerMaxMass"] = ~~(document[el - 1]['size'] * document[el - 1]['size'] / 100);
            this['playerSplitCells'] = el;
          if (props['showStatsSTE']) {
            var _0x16e00a = this['selectBiggestCell'] ? this["playerMaxMass"] : this['playerMinMass'];
            if (_0x16e00a > 35) {
              this['STE'] = ~~(_0x16e00a * (_0x16e00a < 1E3 ? .35 : .38));
              this['STE'] = null;
        },
        "compareCells" : function() {
          if (!this['play']) {
            return;
          if (props['oppColors'] || props['oppRings'] || props["splitRange"]) {
            if (props['oppRings'] || props['splitRange']) {
              this["biggerSTECellsCache"] = [];
              this['biggerCellsCache'] = [];
              this['smallerCellsCache'] = [];
              this['STECellsCache'] = [];
            var ARGS_IDX = 0;
            for (; ARGS_IDX < this['cells']['length']; ARGS_IDX++) {
              var args = this['cells'][ARGS_IDX];
              if (args["isVirus"]) {
                continue;
              var v = ~~(args['size'] * args['size'] / 100);
              var count = this["selectBiggestCell"] ? this['playerMaxMass'] : this['playerMinMass'];
              var i = v / count;
              var nrCallbackWrap = count < 1E3 ? .35 : .38;
              if (props["oppColors"] && !props['oppRings']) {
                args['oppColor'] = this['setCellOppColor'](args["isPlayerCell"], i, nrCallbackWrap);
              if (!args['isPlayerCell'] && (props['splitRange'] || props['oppRings'])) {
                this['cacheCells'](args["x"], args["y"], args['size'], i, nrCallbackWrap);
        },
        "cacheCells" : function(xRel, yRel, requestSize, _num1, _num2) {
          if (_num1 >= 2.5) {
            this['biggerSTECellsCache']['push']({
              "x" : xRel,
              "y" : yRel,
              "size" : requestSize
            return;
            if (_num1 >= 1.25) {
              this['biggerCellsCache']['push']({
                "x" : xRel,
                "y" : yRel,
                "size" : requestSize
              return;
              if (_num1 < 1.25 && _num1 > .75) {
                return;
                if (_num1 > _num2) {
                  this['smallerCellsCache']['push']({
                    "x" : xRel,
                    "y" : yRel,
                    "size" : requestSize
                  return;
                  this['STECellsCache']["push"]({
                    "x" : xRel,
                    "y" : yRel,
                    "size" : requestSize
                  return;
        },
        "setCellOppColor" : function(uploadFileTpl, _num1, _num2) {
          if (uploadFileTpl) {
            return params['color'];
          if (_num1 > 11) {
            return '#FF008C';
            if (_num1 >= 2.5) {
              return '#BE00FF';
              if (_num1 >= 1.25) {
                return '#FF0A00';
                if (_num1 < 1.25 && _num1 > .75) {
                  return '#FFDC00';
                  if (_num1 > _num2) {
                    return '#00C8FF';
                    return '#64FF00';
        },
        "getCursorPosition" : function() {
          this['cursorX'] = (this["clientX"] - this['canvasWidth'] / 2) / this["viewScale"] + this['viewX'];
          this['cursorY'] = (this['clientY'] - this["canvasHeight"] / 2) / this['viewScale'] + this['viewY'];
        },
        "setZoom" : function(repaintEverything) {
          repaintEverything['preventDefault']();
          this['zoomValue'] *= Math['pow'](props['zoomSpeedValue'], repaintEverything["wheelDelta"] / -120 || repaintEverything['detail'] || 0);
          if (this["zoomValue"] > 4 / this['viewScale']) {
            this['zoomValue'] = 4 / this['viewScale'];
        },
        "setTargetPosition" : function(value, index) {
          this['targetX'] = value - this['mapOffsetX'];
          this["targetY"] = index - this['mapOffsetY'];
          this['targetDistance'] = Math['round'](Math["sqrt"](Math['pow'](this["playerX"] - this['targetX'], 2) + Math['pow'](this["playerY"] - this['targetY'], 2)));
        },
        "resetTargetPosition" : function() {
          this['targetX'] = this['playerX'];
          this['targetY'] = this["playerY"];
        },
        "setKeys" : function() {
          var reverseKeyMap = this;
          document["onkeydown"] = function(parentNode) {
            var parentOfParent = parentNode['keyCode'];
            if (reverseKeyMap['pressedKeys'][parentOfParent]) {
              return;
            switch(parentOfParent) {
              case 13:
                reverseKeyMap['sendNick']("");
                break;
              case 32:
                reverseKeyMap['sendSplit']();
                break;
              case 81:
                reverseKeyMap['sendFreeSpectate']();
                break;
              case 83:
                reverseKeyMap['sendSpectate']();
                break;
              case 87:
                reverseKeyMap['sendEject']();
                break;
          document['onkeyup'] = function(map) {
            reverseKeyMap["pressedKeys"][map["keyCode"]] = ![];
        },
        "init" : function() {
          var bonusTraitModifiers = this;
          if (/firefox/i['test'](navigator['userAgent'])) {
            document['addEventListener']('DOMMouseScroll', function(person) {
              bonusTraitModifiers['setZoom'](person);
            document['body']['onmousewheel'] = function(person) {
              bonusTraitModifiers['setZoom'](person);
          setInterval(function() {
            bonusTraitModifiers["sendPosition"]();
          if (window['master'] && window['master']['clientVersion']) {
            this["setClientVersion"](window['master']["clientVersion"], window['master']['clientVersionString']);
        }
      };
      window["sendAction"] = function(_relatedTarget) {
        data['sendAction'](_relatedTarget);
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
          this["canvas"] = document["getElementById"]('canvas');
          this["ctx"] = this['canvas']['getContext']("2d");
          this['canvas']["onmousemove"] = function(dataFromFile) {
            data['clientX'] = dataFromFile['clientX'];
            data["clientY"] = dataFromFile['clientY'];
            data['getCursorPosition']();
        },
        "resizeCanvas" : function() {
          this["canvasWidth"] = window['innerWidth'];
          this['canvasHeight'] = window['innerHeight'];
          this["canvas"]["width"] = this['canvasWidth'];
          this['canvas']["height"] = this['canvasHeight'];
          data["canvasWidth"] = this['canvasWidth'];
          data['canvasHeight'] = this['canvasHeight'];
          this['renderFrame']();
        },
        "setView" : function() {
          this['setScale']();
          if (data['playerCells']["length"]) {
            data['calculatePlayerMassAndPosition']();
            this['camX'] = (this['camX'] + data["viewX"]) / 2;
            this['camY'] = (this['camY'] + data['viewY']) / 2;
            this['camX'] = (29 * this["camX"] + data['viewX']) / 30;
            this['camY'] = (29 * this['camY'] + data["viewY"]) / 30;
          data['playerX'] = this['camX'];
          data['playerY'] = this["camY"];
        },
        "setScale" : function() {
          if (!data["autoZoom"]) {
            this['scale'] = (9 * this['scale'] + this['getZoom']()) / 10;
            data["viewScale"] = this['scale'];
            return;
          if (data['play']) {
            this["scale"] = (9 * this['scale'] + Math['pow'](Math['min'](64 / data["playerSize"], 1), .4) * this['getZoom']()) / 10;
            this['scale'] = (9 * this['scale'] + data["scale"] * this['getZoom']()) / 10;
          data['viewScale'] = this['scale'];
        },
        "getZoom" : function() {
          return Math['max'](this['canvasWidth'] / 1080, this['canvasHeight'] / 1920) * data["zoomValue"];
        },
        "renderFrame" : function() {
          data['time'] = Date['now']();
          i = 0;
          for (; i < data["cells"]["length"]; i++) {
            data["cells"][i]['moveCell']();
          this['setView']();
          data['getCursorPosition']();
          data['sortCells']();
          data['compareCells']();
          this['ctx']["clearRect"](0, 0, this['canvasWidth'], this["canvasHeight"]);
          if (props['showGrid']) {
            this['drawGrid'](this['ctx'], this['canvasWidth'], this['canvasHeight'], this['scale'], this['camX'], this['camY']);
          this["ctx"]['save']();
          this['ctx']['translate'](this['canvasWidth'] / 2, this["canvasHeight"] / 2);
          this['ctx']['scale'](this['scale'], this['scale']);
          this['ctx']["translate"](-this['camX'], -this['camY']);
          if (props["showBgSectors"]) {
            this['drawSectors'](this['ctx'], data["mapOffsetFixed"], options['sectorsX'], options['sectorsY'], data["mapMinX"], data['mapMinY'], data["mapMaxX"], data["mapMaxY"], options['gridColor'], options['sectorsColor'], options['sectorsWidth'], !![]);
          if (data["gameMode"] === ":battleroyale") {
            this['drawBattleArea'](this['ctx']);
          if (props['showMapBorders']) {
            var y = options['bordersWidth'] / 2;
            this['drawMapBorders'](this['ctx'], data['mapOffsetFixed'], data['mapMinX'] - y, data["mapMinY"] - y, data['mapMaxX'] + y, data['mapMaxY'] + y, options['bordersColor'], options['bordersWidth']);
          if (props['virusesRange']) {
            this["drawVirusesRange"](this['ctx'], data["viruses"]);
          this["drawFood"]();
          if (data['play']) {
            if (props['splitRange']) {
              this['drawSplitRange'](this['ctx'], data['biggerSTECellsCache'], data['playerCells'], data["selectBiggestCell"]);
            if (props['oppRings']) {
              this["drawOppRings"](this["ctx"], this['scale'], data['biggerSTECellsCache'], data['biggerCellsCache'], data['smallerCellsCache'], data['STECellsCache']);
            if (props['cursorTracking']) {
              this['drawCursorTracking'](this['ctx'], data['playerCells'], data["cursorX"], data["cursorY"]);
          var i = 0;
          for (; i < data['removedCells']['length']; i++) {
            data["removedCells"][i]['draw'](this['ctx'], !![]);
          i = 0;
          for (; i < data['cells']['length']; i++) {
            data['cells'][i]['draw'](this['ctx']);
          this['ctx']['restore']();
          if (data['gameMode'] === ':teams') {
            if (this['pieChart'] && this['pieChart']["width"]) {
              this['ctx']['drawImage'](this['pieChart'], this['canvasWidth'] - this["pieChart"]['width'] - 10, 10);
        },
        "drawGrid" : function(data, w, h, scale, x, y) {
          var ratio = w / scale;
          var height = h / scale;
          var r = (-x + ratio / 2) % 50;
          var sy = (-y + height / 2) % 50;
          data['strokeStyle'] = options['gridColor'];
          data['globalAlpha'] = 1 * scale;
          data['beginPath']();
          for (; r < ratio; r = r + 50) {
            data["moveTo"](r * scale - .5, 0);
            data['lineTo'](r * scale - .5, height * scale);
          for (; sy < height; sy = sy + 50) {
            data["moveTo"](0, sy * scale - .5);
            data['lineTo'](ratio * scale, sy * scale - .5);
          data['stroke']();
          data['globalAlpha'] = 1;
        },
        "drawSectors" : function(result, prop, end, count, a, x, b, h, elem, value, c, init) {
          if (!prop && init) {
            return;
          var t = ~~((b - a) / end);
          var size = ~~((h - x) / count);
          var y = 0;
          var left = 0;
          result['strokeStyle'] = elem;
          result["fillStyle"] = value;
          result['lineWidth'] = c;
          if (init || !init && props['showMiniMapGrid']) {
            result['beginPath']();
            var i = 0;
            for (; i < end + 1; i++) {
              y = a + t * i;
              result['moveTo'](i == end ? b : y, x);
              result['lineTo'](i == end ? b : y, h);
            i = 0;
            for (; i < count + 1; i++) {
              left = x + size * i;
              result['moveTo'](a - c / 2, i == count ? h : left);
              result["lineTo"](b + c / 2, i == count ? h : left);
            result['stroke']();
            this['drawMapBorders'](result, prop, a, x, b, h, elem, c);
          if (init) {
            result["font"] = options['sectorsFontWeight'] + " " + options["sectorsFontSize"] + 'px ' + options['sectorsFontFamily'];
            result['font'] = options['miniMapFontWeight'] + " " + ~~(.4 * size) + 'px ' + options['miniMapFontFamily'];
          result['textAlign'] = "center";
          result['textBaseline'] = 'middle';
          i = 0;
          for (; i < count; i++) {
            var c = 0;
            for (; c < end; c++) {
              var radixToPower = String["fromCharCode"](65 + i) + (c + 1);
              y = ~~(a + t / 2 + c * t);
              left = ~~(x + size / 2 + i * size);
              result["fillText"](radixToPower, y, left);
        },
        "drawMapBorders" : function(ctx, type, x0, x1, y0, y, canvas, color) {
          if (!type) {
            return;
          ctx['strokeStyle'] = canvas;
          ctx['lineWidth'] = color;
          ctx['beginPath']();
          ctx['moveTo'](x0, x1);
          ctx["lineTo"](y0, x1);
          ctx['lineTo'](y0, y);
          ctx["lineTo"](x0, y);
          ctx['closePath']();
          ctx['stroke']();
        },
        "drawVirusesRange" : function(style, data, linkedEntities) {
          if (!data['length']) {
            return;
          style['beginPath']();
          var i = 0;
          for (; i < data['length']; i++) {
            var node = data[i]["x"];
            var name = data[i]["y"];
            style['moveTo'](node, name);
            style['arc'](node, name, data[i]["size"] + 820, 0, this['pi2'], ![]);
          style['fillStyle'] = options['virusColor'];
          style['globalAlpha'] = .1;
          style['fill']();
          style["globalAlpha"] = 1;
          if (linkedEntities) {
            data = [];
        },
        "drawFood" : function() {
          if (!data['showFood'] || props["autoHideFoodOnZoom"] && this['scale'] < .2) {
            return;
          if (props["autoHideFood"] && !data["foodIsHidden"] && data['playerMass'] > 1E3) {
            data['showFood'] = ![];
            data['foodIsHidden'] = !![];
            return;
          if (!props['rainbowFood']) {
            this['drawCachedFood'](this["ctx"], data["food"], this['scale']);
            return;
          var _jsonName = 0;
          for (; _jsonName < data['food']['length']; _jsonName++) {
            data["food"][_jsonName]['moveCell']();
            data['food'][_jsonName]['draw'](this['ctx']);
        },
        "drawCachedFood" : function(rng, data, linkedEntities, force) {
          if (!data['length']) {
            return;
          if (props['optimizedFood'] && this["pellet"]) {
            var i = 0;
            for (; i < data["length"]; i++) {
              var r = data[i]["x"] - 10 - options['foodSize'];
              var offset = data[i]["y"] - 10 - options['foodSize'];
              rng['drawImage'](this['pellet'], r, offset);
            rng['beginPath']();
            i = 0;
            for (; i < data['length']; i++) {
              r = data[i]["x"];
              offset = data[i]["y"];
              rng['moveTo'](r, offset);
              if (linkedEntities < .16) {
                var rOffset = data[i]['size'] + options['foodSize'];
                rng['rect'](r - rOffset, offset - rOffset, 2 * rOffset, 2 * rOffset);
                continue;
              rng["arc"](r, offset, data[i]["size"] + options['foodSize'], 0, this['pi2'], ![]);
            rng["fillStyle"] = options['foodColor'];
            rng['globalAlpha'] = 1;
            rng['fill']();
          if (force) {
            data = [];
        },
        "drawSplitRange" : function(settings, context, groups, viewport, paramsParser) {
          this["drawCircles"](settings, context, 760, 4, .4, '#BE00FF');
          if (groups['length']) {
            var x = viewport ? groups['length'] - 1 : 0;
            settings['lineWidth'] = 6;
            settings['globalAlpha'] = options['darkTheme'] ? .7 : .35;
            settings["strokeStyle"] = options['splitRangeColor'];
            settings['beginPath']();
            settings['arc'](groups[x]["x"], groups[x]["y"], groups[x]['size'] + 760, 0, this["pi2"], ![]);
            settings["closePath"]();
            settings["stroke"]();
          settings['globalAlpha'] = 1;
          if (paramsParser) {
            context = [];
        },
        "drawOppRings" : function(mmCoreSplitViewBlock, $state, breadcrumbs, OSDConfigService, RequestTrackingService, isBgroundImg, stgs) {
          var artistTrack = 14 + 2 / $state;
          var GET_AUTH_URL_TIMEOUT = 12 + 1 / $state;
          this['drawCircles'](mmCoreSplitViewBlock, breadcrumbs, artistTrack, GET_AUTH_URL_TIMEOUT, .75, '#BE00FF');
          this['drawCircles'](mmCoreSplitViewBlock, OSDConfigService, artistTrack, GET_AUTH_URL_TIMEOUT, .75, '#FF0A00');
          this['drawCircles'](mmCoreSplitViewBlock, RequestTrackingService, artistTrack, GET_AUTH_URL_TIMEOUT, .75, "#00C8FF");
          this['drawCircles'](mmCoreSplitViewBlock, isBgroundImg, artistTrack, GET_AUTH_URL_TIMEOUT, .75, '#64FF00');
          if (stgs) {
            breadcrumbs = [];
            OSDConfigService = [];
            RequestTrackingService = [];
            isBgroundImg = [];
        },
        "drawCursorTracking" : function(panel, params, callback, options) {
          panel['lineWidth'] = 4;
          panel["globalAlpha"] = options['darkTheme'] ? .75 : .35;
          panel['strokeStyle'] = options['cursorTrackingColor'];
          panel['beginPath']();
          var i = 0;
          for (; i < params['length']; i++) {
            panel['moveTo'](params[i]["x"], params[i]["y"]);
            panel["lineTo"](callback, options);
          panel['stroke']();
          panel['globalAlpha'] = 1;
        },
        "drawCircles" : function(args, data, type, className, value, context) {
          args['lineWidth'] = className;
          args["globalAlpha"] = value;
          args['strokeStyle'] = context;
          var i = 0;
          for (; i < data['length']; i++) {
            args["beginPath"]();
            args['arc'](data[i]["x"], data[i]["y"], data[i]['size'] + type, 0, this['pi2'], ![]);
            args['closePath']();
            args['stroke']();
          args['globalAlpha'] = 1;
        },
        "drawDashedCircle" : function(attributes, attribute, template, substitutions, formatters, initialValue, value) {
          var indexToDelta = this['pi2'] / formatters;
          attributes['lineWidth'] = initialValue;
          attributes['strokeStyle'] = value;
          var blendValueArrayIndex = 0;
          for (; blendValueArrayIndex < formatters; blendValueArrayIndex = blendValueArrayIndex + 2) {
            attributes['beginPath']();
            attributes['arc'](attribute, template, substitutions - initialValue / 2, blendValueArrayIndex * indexToDelta, (blendValueArrayIndex + 1) * indexToDelta, ![]);
            attributes['stroke']();
        },
        "drawTeammatesInd" : function(boardManager, isSlidingUp, $cont, $slides) {
          if (!this["indicator"]) {
            return;
          boardManager['drawImage'](this['indicator'], isSlidingUp - 45, $cont - $slides - 90);
        },
        "drawPieChart" : function() {
          if (!this['pieChart']) {
            this['pieChart'] = document['createElement']('canvas');
          var $ = this['pieChart']['getContext']("2d");
          var enableScale = Math['min'](200, .3 * this['canvasWidth']) / 200;
          this['pieChart']['width'] = 200 * enableScale;
          this['pieChart']['height'] = 240 * enableScale;
          $['scale'](enableScale, enableScale);
          var css = ['#333333', "#FF3333", "#33FF33", '#3333FF'];
          var index__460288 = 0;
          var name = 0;
          for (; name < data['pieChart']['length']; name++) {
            var G__460292 = index__460288 + data['pieChart'][name] * this['pi2'];
            $['fillStyle'] = css[name + 1];
            $['beginPath']();
            $['moveTo'](100, 140);
            $["arc"](100, 140, 80, index__460288, G__460292, ![]);
            $['fill']();
            index__460288 = G__460292;
        },
        "drawBattleArea" : function(mmCoreSplitViewBlock) {
          if (!data["battleRoyale"]["state"]) {
            return;
          this["drawDangerArea"](mmCoreSplitViewBlock, data['battleRoyale']["x"], data['battleRoyale']["y"], data['battleRoyale']['radius'], data['mapMinX'], data['mapMinY'], data['mapMaxX'] - data["mapMinX"], data['mapMaxY'] - data["mapMinY"], options['dangerAreaColor'], .25);
          this['drawSafeArea'](mmCoreSplitViewBlock, data["battleRoyale"]['targetX'], data['battleRoyale']['targetY'], data['battleRoyale']['targetRadius'], 40, options['safeAreaColor']);
        },
        "drawBattleAreaOnMinimap" : function(params, aLifeTime, now, pick_x, thisControlX, thisControlY) {
          if (!data['battleRoyale']["state"]) {
            return;
          if (!this['battleAreaMap']) {
            this['battleAreaMap'] = document['createElement']('canvas');
            this['battleAreaMapCtx'] = this['battleAreaMap']["getContext"]("2d");
          if (this["battleAreaMap"]['width'] != aLifeTime) {
            this['battleAreaMap']['width'] = aLifeTime;
            this["battleAreaMap"]['height'] = now;
            this['battleAreaMapCtx']['clearRect'](0, 0, aLifeTime, now);
          var lastviewmatrix = (data['battleRoyale']["x"] + thisControlX) * pick_x;
          var tIndW = (data['battleRoyale']["y"] + thisControlY) * pick_x;
          var FragCoord_x = data["battleRoyale"]['radius'] * pick_x;
          this['drawDangerArea'](this['battleAreaMapCtx'], lastviewmatrix, tIndW, FragCoord_x, 0, 0, aLifeTime, now, options["dangerAreaColor"], .25);
          lastviewmatrix = ~~((data['battleRoyale']['targetX'] + thisControlX) * pick_x);
          tIndW = ~~((data['battleRoyale']['targetY'] + thisControlY) * pick_x);
          FragCoord_x = ~~(data['battleRoyale']["targetRadius"] * pick_x);
          this['drawSafeArea'](this["battleAreaMapCtx"], lastviewmatrix, tIndW, FragCoord_x, 2, options['safeAreaColor']);
          params['drawImage'](this['battleAreaMap'], 0, 0);
        },
        "drawDangerArea" : function(source, node, a, b, areMutuallyExclusive, parentType1, selectionSet1, prop, aspect, value) {
          if (data['battleRoyale']['radius'] == data['battleRoyale']["maxRadius"] || b <= 0) {
            return;
          source['save']();
          source['globalAlpha'] = value;
          source['fillStyle'] = aspect;
          source['fillRect'](areMutuallyExclusive, parentType1, selectionSet1, prop);
          source['globalCompositeOperation'] = "destination-out";
          source['globalAlpha'] = 1;
          source['beginPath']();
          source['arc'](node, a, b, 0, this["pi2"], ![]);
          source['fill']();
          source["restore"]();
        },
        "drawSafeArea" : function(mmCoreSplitViewBlock, $state, breadcrumbs, OSDConfigService, RequestTrackingService, PoolService) {
          if (data['battleRoyale']['state'] > 2 || OSDConfigService <= 0) {
            return;
          this["drawDashedCircle"](mmCoreSplitViewBlock, $state, breadcrumbs, OSDConfigService, 60, RequestTrackingService, PoolService);
        },
        "drawGhostCells" : function() {
          if (!props['showGhostCells']) {
            return;
          var PL$32 = data['ghostCells'];
          this['ctx']['beginPath']();
          var PL$66 = 0;
          for (; PL$66 < PL$32['length']; PL$66++) {
            if (PL$32[PL$66]['inView']) {
              continue;
            var x0 = PL$32[PL$66]["x"];
            var childEdge = PL$32[PL$66]["y"];
            this['ctx']["moveTo"](x0, childEdge);
            this["ctx"]["arc"](x0, childEdge, PL$32[PL$66]['size'], 0, this['pi2'], ![]);
          this['ctx']['fillStyle'] = options['ghostCellsColor'];
          this["ctx"]['globalAlpha'] = options["ghostCellsAlpha"];
          this['ctx']['shadowColor'] = options['ghostCellsColor'];
          this['ctx']['shadowBlur'] = 40;
          this["ctx"]["shadowOffsetX"] = 0;
          this['ctx']["shadowOffsetY"] = 0;
          this['ctx']["fill"]();
          this['ctx']["globalAlpha"] = 1;
          this["ctx"]['shadowBlur'] = 0;
        },
        "preDrawPellet" : function() {
          this["pellet"] = null;
          var d = 10 + options['foodSize'];
          var sw = document['createElement']('canvas');
          sw['width'] = d * 2;
          sw['height'] = d * 2;
          var inBtn = sw['getContext']("2d");
          inBtn["arc"](d, d, d, 0, this["pi2"], ![]);
          inBtn['fillStyle'] = options['foodColor'];
          inBtn["fill"]();
          this["pellet"] = new Image;
          this["pellet"]['src'] = sw['toDataURL']();
          sw = null;
        },
        "preDrawIndicator" : function() {
          this["indicator"] = null;
          var canvas = document['createElement']("canvas");
          canvas["width"] = 90;
          canvas['height'] = 50;
          var SimpleFillSymbol = canvas['getContext']("2d");
          SimpleFillSymbol['lineWidth'] = 2;
          SimpleFillSymbol["fillStyle"] = options['teammatesIndColor'];
          SimpleFillSymbol["strokeStyle"] = '#000000';
          SimpleFillSymbol['beginPath']();
          SimpleFillSymbol['moveTo'](0, 0);
          SimpleFillSymbol['lineTo'](90, 0);
          SimpleFillSymbol['lineTo'](45, 50);
          SimpleFillSymbol["closePath"]();
          SimpleFillSymbol['fill']();
          SimpleFillSymbol['stroke']();
          this['indicator'] = new Image;
          this['indicator']['src'] = canvas["toDataURL"]();
          canvas = null;
        },
        "countFps" : function() {
          if (!props['showStatsFPS']) {
            return;
          var _0x42191c = Date["now"]();
          if (!this['fpsLastRequest']) {
            this['fpsLastRequest'] = _0x42191c;
          if (_0x42191c - this['fpsLastRequest'] >= 1E3) {
            this['fps'] = this['renderedFrames'];
            this['renderedFrames'] = 0;
            this['fpsLastRequest'] = _0x42191c;
          this['renderedFrames']++;
        },
        "render" : function() {
          defaults["countFps"]();
          defaults['renderFrame']();
          window['requestAnimationFrame'](defaults['render']);
        },
        "init" : function() {
          this['setCanvas']();
          this['resizeCanvas']();
          this["preDrawPellet"]();
          this['preDrawIndicator']();
          window['requestAnimationFrame'](defaults['render']);
        }
      };
      var closedFrames = {};
      var attributes = {};
      var obj = {
        "hk-feed" : {
          "label" : messages['hk-feed'],
          "defaultKey" : "W",
          "keyDown" : function() {
            if (router) {
              router['feed']();
          "keyUp" : null,
          "type" : "normal"
        },
        "hk-macroFeed" : {
          "label" : messages['hk-macroFeed'],
          "defaultKey" : "E",
          "keyDown" : function() {
            if (router) {
              router['macroFeed'](!![]);
          "keyUp" : function() {
            if (router) {
              router['macroFeed'](![]);
          "type" : 'normal'
        },
        "hk-split" : {
          "label" : messages['hk-split'],
          "defaultKey" : "SPACE",
          "keyDown" : function() {
            if (router) {
              router['split']();
          "keyUp" : null,
          "type" : 'normal'
        },
        "hk-doubleSplit" : {
          "label" : messages['hk-doubleSplit'],
          "defaultKey" : "Q",
          "keyDown" : function() {
            if (router) {
              router['doubleSplit']();
          "keyUp" : null,
          "type" : 'normal'
        },
        "hk-popSplit" : {
          "label" : 'Popsplit',
          "defaultKey" : 'ALT+Q',
          "keyDown" : function() {
            if (router) {
              router["popSplit"]();
          "keyUp" : null,
          "type" : "normal"
        },
        "hk-split16" : {
          "label" : messages['hk-split16'],
          "defaultKey" : "SHIFT",
          "keyDown" : function() {
            if (router) {
              router["split16"]();
          "keyUp" : null,
          "type" : 'normal'
        },
        "hk-pause" : {
          "label" : messages["hk-pause"],
          "defaultKey" : "R",
          "keyDown" : function() {
            if (router) {
              router['setPause']();
          "keyUp" : null,
          "type" : "normal"
        },
        "hk-showTop5" : {
          "label" : messages['hk-showTop5'],
          "defaultKey" : "T",
          "keyDown" : function() {
            if (router) {
              router["setShowTop5"]();
          "keyUp" : null,
          "type" : 'normal'
        },
        "hk-showTime" : {
          "label" : messages["hk-showTime"],
          "defaultKey" : "ALT+T",
          "keyDown" : function() {
            if (router) {
              router["setShowTime"]();
          "keyUp" : null,
          "type" : 'normal'
        },
        "hk-showSplitRange" : {
          "label" : messages['hk-showSplitRange'],
          "defaultKey" : "U",
          "keyDown" : function() {
            if (router) {
              router['setShowSplitRange']();
          "keyUp" : null,
          "type" : 'normal'
        },
        "hk-showSplitInd" : {
          "label" : messages['hk-showSplitInd'],
          "defaultKey" : "I",
          "keyDown" : function() {
            if (router) {
              router["setShowSplitInd"]();
          "keyUp" : null,
          "type" : 'normal'
        },
        "hk-showTeammatesInd" : {
          "label" : messages['hk-showTeammatesInd'],
          "defaultKey" : 'ALT+I',
          "keyDown" : function() {
            if (router) {
              router["setShowTeammatesInd"]();
          "keyUp" : null,
          "type" : "normal"
        },
        "hk-showOppColors" : {
          "label" : messages['hk-showOppColors'],
          "defaultKey" : "O",
          "keyDown" : function() {
            if (router) {
              router['setShowOppColors']();
          "keyUp" : null,
          "type" : 'normal'
        },
        "hk-toggleSkins" : {
          "label" : messages["hk-toggleSkins"],
          "defaultKey" : "A",
          "keyDown" : function() {
            if (router) {
              router['toggleSkins']();
          "keyUp" : null,
          "type" : 'normal'
        },
        "hk-transparentSkins" : {
          "label" : messages['hk-transparentSkins'],
          "defaultKey" : "",
          "keyDown" : function() {
            if (router) {
              router['setTransparentSkins']();
          "keyUp" : null,
          "type" : 'normal'
        },
        "hk-showSkins" : {
          "label" : messages['hk-showSkins'],
          "defaultKey" : "S",
          "keyDown" : function() {
            if (router) {
              router['setShowSkins']();
          "keyUp" : null,
          "type" : 'normal'
        },
        "hk-showStats" : {
          "label" : messages['hk-showStats'],
          "defaultKey" : 'ALT+S',
          "keyDown" : function() {
            if (router) {
              router['setShowStats']();
          "keyUp" : null,
          "type" : 'normal'
        },
        "hk-toggleCells" : {
          "label" : messages['hk-toggleCells'],
          "defaultKey" : "D",
          "keyDown" : function() {
            if (router) {
              router['toggleCells']();
          "keyUp" : null,
          "type" : "normal"
        },
        "hk-showFood" : {
          "label" : messages['hk-showFood'],
          "defaultKey" : "F",
          "keyDown" : function() {
            if (router) {
              router["setShowFood"]();
          "keyUp" : null,
          "type" : "normal"
        },
        "hk-showGrid" : {
          "label" : messages['hk-showGrid'],
          "defaultKey" : "G",
          "keyDown" : function() {
            if (router) {
              router["setShowGrid"]();
          "keyUp" : null,
          "type" : 'normal'
        },
        "hk-showMiniMapGuides" : {
          "label" : messages['hk-showMiniMapGuides'],
          "defaultKey" : 'ALT+G',
          "keyDown" : function() {
            if (router) {
              router['setShowMiniMapGuides']();
          "keyUp" : null,
          "type" : 'normal'
        },
        "hk-hideChat" : {
          "label" : messages['hk-hideChat'],
          "defaultKey" : "H",
          "keyDown" : function() {
            if (router) {
              router['hideChat']();
          "keyUp" : null,
          "type" : "normal"
        },
        "hk-showHUD" : {
          "label" : messages["hk-showHUD"],
          "defaultKey" : "ALT+H",
          "keyDown" : function() {
            if (router) {
              router['setShowHUD']();
          "keyUp" : null,
          "type" : 'normal'
        },
        "hk-copyLb" : {
          "label" : messages['hk-copyLb'],
          "defaultKey" : "L",
          "keyDown" : function() {
            if (router) {
              router['copyLb']();
          "keyUp" : null,
          "type" : 'normal'
        },
        "hk-showLb" : {
          "label" : messages['hk-showLb'],
          "defaultKey" : 'ALT+L',
          "keyDown" : function() {
            if (router) {
              router["setShowLb"]();
          "keyUp" : null,
          "type" : 'normal'
        },
        "hk-toggleAutoZoom" : {
          "label" : messages['hk-toggleAutoZoom'],
          "defaultKey" : "",
          "keyDown" : function() {
            if (router) {
              router['toggleAutoZoom']();
          "keyUp" : null,
          "type" : 'normal'
        },
        "hk-resetZoom" : {
          "label" : messages['hk-resetZoom'],
          "defaultKey" : "Z",
          "keyDown" : function() {
            if (router) {
              router['resetZoom'](!![]);
          "keyUp" : function() {
            if (router) {
              router["resetZoom"](![]);
          "type" : 'normal'
        },
        "hk-toggleDeath" : {
          "label" : messages["hk-toggleDeath"],
          "defaultKey" : "X",
          "keyDown" : function() {
            if (router) {
              router['toggleDeath']();
          "keyUp" : null,
          "type" : 'normal'
        },
        "hk-clearChat" : {
          "label" : messages['hk-clearChat'],
          "defaultKey" : "C",
          "keyDown" : function() {
            if (router) {
              router['displayChatHistory'](!![]);
          "keyUp" : function() {
            if (router) {
              router['displayChatHistory'](![]);
          "type" : 'normal'
        },
        "hk-showBgSectors" : {
          "label" : messages['hk-showBgSectors'],
          "defaultKey" : "B",
          "keyDown" : function() {
            if (router) {
              router['setShowBgSectors']();
          "keyUp" : null,
          "type" : 'normal'
        },
        "hk-hideBots" : {
          "label" : messages['hk-hideBots'],
          "defaultKey" : "ALT+B",
          "keyDown" : function() {
            if (router) {
              router['setHideSmallBots']();
          "keyUp" : null,
          "type" : 'normal'
        },
        "hk-showNames" : {
          "label" : messages["hk-showNames"],
          "defaultKey" : "N",
          "keyDown" : function() {
            if (router) {
              router['setShowNames']();
          "keyUp" : null,
          "type" : 'normal'
        },
        "hk-hideTeammatesNames" : {
          "label" : messages['hk-hideTeammatesNames'],
          "defaultKey" : "",
          "keyDown" : function() {
            if (router) {
              router['setHideTeammatesNames']();
          "keyUp" : null,
          "type" : "normal"
        },
        "hk-showMass" : {
          "label" : messages['hk-showMass'],
          "defaultKey" : "M",
          "keyDown" : function() {
            if (router) {
              router['setShowMass']();
          "keyUp" : null,
          "type" : 'normal'
        },
        "hk-showMiniMap" : {
          "label" : messages['hk-showMiniMap'],
          "defaultKey" : 'ALT+M',
          "keyDown" : function() {
            if (router) {
              router["setShowMiniMap"]();
          "keyUp" : null,
          "type" : 'normal'
        },
        "hk-chatMessage" : {
          "label" : messages['hk-chatMessage'],
          "defaultKey" : 'ENTER',
          "keyDown" : function() {
            if (router) {
              router['enterChatMessage']();
          "keyUp" : null,
          "type" : 'special'
        },
        "hk-quickResp" : {
          "label" : messages['hk-quickResp'],
          "defaultKey" : "TILDE",
          "keyDown" : function() {
            if (router) {
              router['quickResp']();
          "keyUp" : null,
          "type" : 'normal'
        },
        "hk-autoResp" : {
          "label" : messages['hk-autoResp'],
          "defaultKey" : "",
          "keyDown" : function() {
            if (router) {
              router['toggleAutoResp']();
          "keyUp" : null,
          "type" : 'normal'
        },
        "hk-zoom1" : {
          "label" : messages['hk-zoomLevel'] + " 1",
          "defaultKey" : 'ALT+1',
          "keyDown" : function() {
            if (router) {
              router['setZoom'](.5);
          "keyUp" : null,
          "type" : 'normal'
        },
        "hk-zoom2" : {
          "label" : messages['hk-zoomLevel'] + " 2",
          "defaultKey" : 'ALT+2',
          "keyDown" : function() {
            if (router) {
              router['setZoom'](.25);
          "keyUp" : null,
          "type" : 'normal'
        },
        "hk-zoom3" : {
          "label" : messages['hk-zoomLevel'] + " 3",
          "defaultKey" : 'ALT+3',
          "keyDown" : function() {
            if (router) {
              router['setZoom'](.125);
          "keyUp" : null,
          "type" : 'normal'
        },
        "hk-zoom4" : {
          "label" : messages['hk-zoomLevel'] + " 4",
          "defaultKey" : 'ALT+4',
          "keyDown" : function() {
            if (router) {
              router['setZoom'](.075);
          "keyUp" : null,
          "type" : 'normal'
        },
        "hk-zoom5" : {
          "label" : messages['hk-zoomLevel'] + " 5",
          "defaultKey" : 'ALT+5',
          "keyDown" : function() {
            if (router) {
              router['setZoom'](.05);
          "keyUp" : null,
          "type" : 'normal'
        },
        "hk-switchServerMode" : {
          "label" : messages['hk-switchServerMode'],
          "defaultKey" : "=",
          "keyDown" : function() {
            if (router) {
              router['switchServerMode']();
          "keyUp" : null,
          "type" : 'normal'
        },
        "hk-showTargeting" : {
          "label" : messages['hk-showTargeting'],
          "defaultKey" : "",
          "keyDown" : function() {
            if (router) {
              router['setShowTargeting']();
          "keyUp" : null,
          "type" : "normal"
        },
        "hk-setTargeting" : {
          "label" : messages["hk-setTargeting"],
          "defaultKey" : "",
          "keyDown" : function() {
            if (router) {
              router["setTargeting"]();
          "keyUp" : null,
          "type" : "normal"
        },
        "hk-cancelTargeting" : {
          "label" : messages["hk-cancelTargeting"],
          "defaultKey" : "",
          "keyDown" : function() {
            if (router) {
              router['cancelTargeting']();
          "keyUp" : null,
          "type" : 'normal'
        },
        "hk-changeTarget" : {
          "label" : messages['hk-changeTarget'],
          "defaultKey" : "",
          "keyDown" : function() {
            if (router) {
              router['changeTarget']();
          "keyUp" : null,
          "type" : 'normal'
        },
        "hk-privateMiniMap" : {
          "label" : messages['hk-privateMiniMap'],
          "defaultKey" : "",
          "keyDown" : function() {
            if (router) {
              router['setPrivateMiniMap']();
          "keyUp" : null,
          "type" : 'normal'
        },
        "hk-showQuest" : {
          "label" : messages['hk-showQuest'],
          "defaultKey" : "",
          "keyDown" : function() {
            if (router) {
              router['setShowQuest']();
          "keyUp" : null,
          "type" : 'normal'
        },
        "hk-comm1" : {
          "label" : store['comm1'],
          "defaultKey" : "1",
          "keyDown" : function() {
            if (router) {
              router["sendCommand"](1);
          "keyUp" : null,
          "type" : 'command'
        },
        "hk-comm2" : {
          "label" : store["comm2"],
          "defaultKey" : "2",
          "keyDown" : function() {
            if (router) {
              router['sendCommand'](2);
          "keyUp" : null,
          "type" : 'command'
        },
        "hk-comm3" : {
          "label" : store['comm3'],
          "defaultKey" : "3",
          "keyDown" : function() {
            if (router) {
              router['sendCommand'](3);
          "keyUp" : null,
          "type" : 'command'
        },
        "hk-comm4" : {
          "label" : store["comm4"],
          "defaultKey" : "4",
          "keyDown" : function() {
            if (router) {
              router['sendCommand'](4);
          "keyUp" : null,
          "type" : 'command'
        },
        "hk-comm5" : {
          "label" : store['comm5'],
          "defaultKey" : "5",
          "keyDown" : function() {
            if (router) {
              router["sendCommand"](5);
          "keyUp" : null,
          "type" : 'command'
        },
        "hk-comm6" : {
          "label" : store['comm6'],
          "defaultKey" : "6",
          "keyDown" : function() {
            if (router) {
              router['sendCommand'](6);
          "keyUp" : null,
          "type" : 'command'
        },
        "hk-comm7" : {
          "label" : store['comm7'],
          "defaultKey" : "7",
          "keyDown" : function() {
            if (router) {
              router['sendCommand'](7);
          "keyUp" : null,
          "type" : 'command'
        },
        "hk-comm8" : {
          "label" : store['comm8'],
          "defaultKey" : "8",
          "keyDown" : function() {
            if (router) {
              router["sendCommand"](8);
          "keyUp" : null,
          "type" : "command"
        },
        "hk-comm9" : {
          "label" : store['comm9'],
          "defaultKey" : "9",
          "keyDown" : function() {
            if (router) {
              router["sendCommand"](9);
          "keyUp" : null,
          "type" : 'command'
        },
        "hk-comm0" : {
          "label" : store['comm0'],
          "defaultKey" : "0",
          "keyDown" : function() {
            if (router) {
              router['sendCommand'](0);
          "keyUp" : null,
          "type" : 'command'
        },
        "hk-comm10" : {
          "label" : store['comm10'],
          "defaultKey" : 'MOUSE WHEEL',
          "keyDown" : function() {
            if (router) {
              router['sendCommand'](10);
          "keyUp" : null,
          "type" : "command"
        },
        "hk-comm11" : {
          "label" : store['comm11'],
          "defaultKey" : 'LEFT',
          "keyDown" : function() {
            if (router) {
              router['sendCommand'](11);
          "keyUp" : null,
          "type" : "command"
        },
        "hk-comm12" : {
          "label" : store['comm12'],
          "defaultKey" : "UP",
          "keyDown" : function() {
            if (router) {
              router['sendCommand'](12);
          "keyUp" : null,
          "type" : 'command'
        },
        "hk-comm13" : {
          "label" : store["comm13"],
          "defaultKey" : "RIGHT",
          "keyDown" : function() {
            if (router) {
              router['sendCommand'](13);
          "keyUp" : null,
          "type" : 'command'
        },
        "hk-comm14" : {
          "label" : store['comm14'],
          "defaultKey" : "DOWN",
          "keyDown" : function() {
            if (router) {
              router["sendCommand"](14);
          "keyUp" : null,
          "type" : 'command'
        }
      };
      var callbacks = {
        "lastPressedKey" : "",
        "lastKeyId" : "",
        "defaultMessageKey" : 'ENTER',
        "inputClassName" : "custom-key-in form-control input-sm",
        "loadDefaultHotkeys" : function() {
          attributes = {};
          var name;
          for (name in obj) {
            if (obj['hasOwnProperty'](name)) {
              attributes[obj[name]["defaultKey"]] = name;
          attributes['spec-messageKey'] = this['defaultMessageKey'];
        },
        "loadHotkeys" : function() {
          if (window["localStorage"]["getItem"]('ogarioHotkeys') !== null) {
            attributes = JSON['parse'](window["localStorage"]['getItem']("ogarioHotkeys"));
            this['loadDefaultHotkeys']();
          if (window['localStorage']['getItem']('ogarioCommands') !== null) {
            store = JSON['parse'](window['localStorage']["getItem"]("ogarioCommands"));
        },
        "saveHotkeys" : function() {
          window["localStorage"]['setItem']("ogarioHotkeys", JSON['stringify'](attributes));
          this['saveCommands']();
        },
        "saveCommands" : function() {
          $("#hotkeys .command-in")['each'](function() {
            var doc = $(this);
            var key = doc['attr']("id");
            if (store['hasOwnProperty'](key)) {
              store[key] = doc['val']();
          window['localStorage']['setItem']('ogarioCommands', JSON['stringify'](store));
        },
        "resetHotkeys" : function() {
          this['loadDefaultHotkeys']();
          $("#hotkeys-cfg .custom-key-in")['each'](function() {
            var id = $(this)['attr']("id");
            if (obj[id]) {
              $(this)['val'](obj[id]["defaultKey"]);
        },
        "setHotkeysMenu" : function() {
          var _0x323410 = this;
          $("body")['append']('<div id="hotkeys"><div id="hotkeys-menu"><button id="reset-hotkeys" class="btn btn-primary">' + messages['restoreSettings'] + '</button> <button id="save-hotkeys" class="btn btn-success">' + messages["saveSett"] + '</button> <button id="close-hotkeys" class="btn btn-danger">' + messages['close'] + '</button></div><div id="hotkeys-cfg"></div><div id="hotkeys-inst"><ul><li>' + messages["hk-inst-assign"] + '</li><li>' + messages['hk-inst-delete'] + "</li><li>" + messages['hk-inst-keys'] + "</li></ul></div></div>");
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
              if (key === 'hk-switchServerMode' && router && !router['privateIP']) {
                continue;
              if (property["type"] === 'command') {
                var name = key['replace']('hk-', "");
                $('#hotkeys-cfg')['append']('<div class="row"><div class="key-label"><input id="' + name + '" class="command-in form-control input-sm" value="' + store[name] + '" maxlength="80" /></div><div class="default-key">' + property['defaultKey'] + '</div><div class="custom-key"><input id="' + key + '" class="custom-key-in form-control input-sm" value="' + token + '" /></div></div>');
                $("#hotkeys-cfg")['append']('<div class="row"><div class="key-label">' + property['label'] + '</div><div class="default-key">' + property['defaultKey'] + '</div><div class="custom-key"><input id="' + key + '" class="custom-key-in form-control input-sm" value="' + token + '" /></div></div>');
          $(document)["on"]("click", '#reset-hotkeys', function(canCreateDiscussions) {
            canCreateDiscussions['preventDefault']();
            _0x323410['resetHotkeys']();
          $(document)["on"]('click', '#save-hotkeys', function(canCreateDiscussions) {
            canCreateDiscussions['preventDefault']();
            _0x323410['saveHotkeys']();
            $("#hotkeys")['fadeOut'](500);
          $(document)["on"]('click', '#close-hotkeys', function(result) {
            result["preventDefault"]();
            $("#hotkeys")['fadeOut'](500);
          $(document)["on"]('click', '.hotkeys-link', function(canCreateDiscussions) {
            $('#hotkeys')['fadeIn'](500);
            $('#hotkeys-cfg')['perfectScrollbar']('update');
            gotoNewOfflinePage();
          $('#hotkeys-cfg')['perfectScrollbar']();
          if (_0x21f577) {
            _0x21f577['setMenuBg']();
        },
        "getPressedKey" : function(canCreateDiscussions) {
          var type = "";
          var key = "";
          if (canCreateDiscussions['ctrlKey'] || canCreateDiscussions['keyCode'] == 17) {
            type = "CTRL";
            if (canCreateDiscussions['altKey'] || canCreateDiscussions['keyCode'] == 18) {
              type = 'ALT';
          switch(canCreateDiscussions['keyCode']) {
            case 9:
              key = 'TAB';
              break;
            case 13:
              key = 'ENTER';
              break;
            case 16:
              key = "SHIFT";
              break;
            case 17:
              break;
            case 18:
              break;
            case 27:
              key = 'ESC';
              break;
            case 32:
              key = "SPACE";
              break;
            case 37:
              key = 'LEFT';
              break;
            case 38:
              key = "UP";
              break;
            case 39:
              key = 'RIGHT';
              break;
            case 40:
              key = 'DOWN';
              break;
            case 46:
              key = 'DEL';
              break;
            case 61:
              key = "=";
              break;
            case 187:
              key = "=";
              break;
            case 192:
              key = 'TILDE';
              break;
            default:
              key = String["fromCharCode"](canCreateDiscussions['keyCode']);
              break;
          if (type !== "") {
            if (key !== "") {
              return type + "+" + key;
            return type;
          return key;
        },
        "deleteHotkey" : function(objectIdField, domRootID) {
          delete attributes[objectIdField];
          $("#" + domRootID)["val"]("");
        },
        "setDefaultHotkey" : function(t) {
          var name = ![];
          if (obj[t] && !attributes['hasOwnProperty'](obj[t]['defaultKey'])) {
            name = obj[t]['defaultKey'];
            attributes[name] = t;
            return name;
          return name;
        },
        "setHotkey" : function(i, m) {
          if (!m || this["lastPressedKey"] === i && this['lastKeyId'] === m) {
            return;
          var artistTrack = $("#" + m)['val']();
          this['deleteHotkey'](artistTrack, m);
          if (i === "DEL") {
            return;
          if (attributes[i] && attributes[i] !== m) {
            var key = attributes[i];
            var attr = this['setDefaultHotkey'](key);
            if (attr) {
              attributes[attr] = key;
              $("#" + key)["val"](attr);
              this['deleteHotkey'](i, key);
          attributes[i] = m;
          $("#" + m)['val'](i);
          if (m === "hk-chatMessage") {
            attributes['spec-messageKey'] = i;
          this['lastPressedKey'] = i;
          this['lastKeyId'] = m;
        },
        "init" : function() {
          this["loadHotkeys"]();
          this["setHotkeysMenu"]();
        }
      };
      document['onkeydown'] = function(result) {
        var key = callbacks['getPressedKey'](result);
        if (result["target"]['tagName'] === 'INPUT' && result['target']['className'] !== callbacks['inputClassName'] && key !== attributes["spec-messageKey"]) {
          return;
        }
        if (key !== "" && !closedFrames[key]) {
          closedFrames[key] = !![];
          if (key === 'ESC') {
            result['preventDefault']();
            if (router) {
              router['showMenu']();
            return;
          if (result['target']['className'] === callbacks['inputClassName']) {
            result["preventDefault"]();
            callbacks['setHotkey'](key, result["target"]["id"]);
            return;
          if (attributes[key]) {
            result['preventDefault']();
            var currentItem = attributes[key];
            if (currentItem !== "" && obj[currentItem]) {
              if (obj[currentItem]["keyDown"]) {
                obj[currentItem]['keyDown']();
        }
      };
      document['onkeyup'] = function(obj) {
        var key = callbacks["getPressedKey"](obj);
        if (key !== "") {
          if (attributes[key]) {
            var currentItem = attributes[key];
            if (currentItem !== "" && obj[currentItem]) {
              if (obj[currentItem]['keyUp']) {
                obj[currentItem]['keyUp']();
          closedFrames[key] = ![];
        }
      };
      window['onmousedown'] = function(canCreateDiscussions) {
        if (!$('#overlays')["is"](':visible')) {
          if (canCreateDiscussions['which'] == 2) {
            canCreateDiscussions['preventDefault']();
            if (router) {
              router['sendCommand'](10);
            if (props["mouseSplit"]) {
              if (canCreateDiscussions['which'] == 1 && !props["mouseInvert"] || canCreateDiscussions['which'] == 3 && props['mouseInvert']) {
                canCreateDiscussions['preventDefault']();
                if (router) {
                  router['split']();
            if (props['mouseFeed']) {
              if (canCreateDiscussions['which'] == 3 && !props["mouseInvert"] || canCreateDiscussions['which'] == 1 && props['mouseInvert']) {
                canCreateDiscussions['preventDefault']();
                if (router) {
                  router["macroFeed"](!![]);
        }
      };
      window["onmouseup"] = function(canCreateDiscussions) {
        if (props['mouseFeed']) {
          if (canCreateDiscussions['which'] == 3 && !props['mouseInvert'] || canCreateDiscussions['which'] == 1 && props['mouseInvert']) {
            if (router) {
              router["macroFeed"](![]);
        }
      };
      window['onbeforeunload'] = function(canCreateDiscussions) {
        if (style['play']) {
          return messages['exit'];
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
        window["master"]['getClientVersion']();
        _0x21f577['init']();
        router['init']();
        router['getDefaultSettings']();
        router["connect"]();
        callbacks['init']();
        data["init"]();
        defaults['init']();
        window['master']['init']();
        Layer();
      })();
    })(window, window["ogario"], window['jQuery']);
  }, {
    "buffer" : 3,
    "lz4" : 18
  }]
}, {}, [47]);

