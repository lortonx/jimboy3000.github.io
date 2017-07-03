//v0.3
/** @type {Array} */
var _0x217b = ["color2Hex", "smallerCellsCache", "push", "STECellsCache", "biggerCellsCache", "biggerSTECellsCache", "prototype", "ogarioCtx", "_fillRect", "fillRect", "_fillText", "fillText", "displayLeaderboard", "leaderboardHTML", ":teams", "gameMode", "leaderboardIndex", "indexOf", "replace", "&lt;", "&gt;", "#ffaaaa", "fillStyle", '<span class="me">', "</span>", "clanTag", '<span class="teammate">', "<span>", "play", "&amp;", "apply", "ogario", "#999999", "mapOffsetX", "mapOffset", "mapOffsetY", 
"mapOffsetFixed", "cursorX", "clientX", "innerW", "canvasScale", "viewScale", "playerX", "cursorY", "clientY", "innerH", "playerY", "min", "targetY", "targetDistance", "round", "pow", "playerCellsMass", "length", "playerBestMass", "playerMass", "virColors", "splitRange", "oppColors", "oppRings", "showStatsSTE", "playerMinMass", "playerMaxMass", "selectBiggestCell", "STE", "floor"];
(function(paths, opt_attributes) {
  /**
   * @param {?} val
   * @return {undefined}
   */
  var setter = function(val) {
    for (;--val;) {
      paths["push"](paths["shift"]());
    }
  };
  /**
   * @return {undefined}
   */
  var makeRequest = function() {
    var item = {
      "data" : {
        "key" : "cookie",
        "value" : "timeout"
      },
      /**
       * @param {Object} res
       * @param {string} name
       * @param {string} value
       * @param {Object} options
       * @return {undefined}
       */
      "setCookie" : function(res, name, value, options) {
        options = options || {};
        /** @type {string} */
        var out = name + "=" + value;
        /** @type {number} */
        var i = 0;
        /** @type {number} */
        i = 0;
        var ii = res["length"];
        for (;i < ii;i++) {
          var k = res[i];
          out += "; " + k;
          var r = res[k];
          res["push"](r);
          ii = res["length"];
          if (r !== !![]) {
            out += "=" + r;
          }
        }
        /** @type {string} */
        options["cookie"] = out;
      },
      /**
       * @return {?}
       */
      "removeCookie" : function() {
        return "dev";
      },
      /**
       * @param {Function} replace
       * @param {Object} name
       * @return {?}
       */
      "getCookie" : function(replace, name) {
        replace = replace || function(s) {
          return s;
        };
        var matches = replace(new RegExp("(?:^|; )" + name["replace"](/([.$?*|{}()[]\/+^])/g, "$1") + "=([^;]*)"));
        /**
         * @param {Function} fun
         * @param {number} opt_attributes
         * @return {undefined}
         */
        var traverseNode = function(fun, opt_attributes) {
          fun(++opt_attributes);
        };
        traverseNode(setter, opt_attributes);
        return matches ? decodeURIComponent(matches[1]) : undefined;
      }
    };
    /**
     * @return {?}
     */
    var next = function() {
      /** @type {RegExp} */
      var rPrefix = new RegExp("\\w+ *\\(\\) *{\\w+ *['|\"].+['|\"];? *}");
      return rPrefix["test"](item["removeCookie"]["toString"]());
    };
    /** @type {function (): ?} */
    item["updateCookie"] = next;
    /** @type {string} */
    var optsData = "";
    var _0x5b618f = item["updateCookie"]();
    if (!_0x5b618f) {
      item["setCookie"](["*"], "counter", 1);
    } else {
      if (_0x5b618f) {
        optsData = item["getCookie"](null, "counter");
      } else {
        item["removeCookie"]();
      }
    }
  };
  makeRequest();
})(_0x217b, 295);
/**
 * @param {string} timeoutKey
 * @param {?} dataAndEvents
 * @return {?}
 */
var _0xb217 = function(timeoutKey, dataAndEvents) {
  /** @type {number} */
  timeoutKey = timeoutKey - 0;
  var scheduledFunc = _0x217b[timeoutKey];
  return scheduledFunc;
};
!function() {
  var throttledUpdate = function() {
    /** @type {boolean} */
    var showMessage = !![];
    return function(R, create) {
      /** @type {Function} */
      var body = showMessage ? function() {
        if (create) {
          var r = create["apply"](R, arguments);
          /** @type {null} */
          create = null;
          return r;
        }
      } : function() {
      };
      /** @type {boolean} */
      showMessage = ![];
      return body;
    };
  }();
  var tryIt = throttledUpdate(this, function() {
    /**
     * @return {?}
     */
    var tobj = function() {
      return "dev";
    };
    /**
     * @return {?}
     */
    var stringify = function() {
      return "window";
    };
    /**
     * @return {?}
     */
    var cleanUp = function() {
      /** @type {RegExp} */
      var rPrefix = new RegExp("\\w+ *\\(\\) *{\\w+ *['|\"].+['|\"];? *}");
      return!rPrefix["test"](tobj["toString"]());
    };
    /**
     * @return {?}
     */
    var testCase = function() {
      /** @type {RegExp} */
      var rPrefix = new RegExp("(\\\\[x|u](\\w){2,4})+");
      return rPrefix["test"](stringify["toString"]());
    };
    /**
     * @param {(Object|string)} deepDataAndEvents
     * @return {undefined}
     */
    var done = function(deepDataAndEvents) {
      /** @type {number} */
      var lastIdx = ~-1 >> 1 + 255 % 0;
      if (deepDataAndEvents["indexOf"]("i" === lastIdx)) {
        onEnd(deepDataAndEvents);
      }
    };
    /**
     * @param {(Object|string)} deepDataAndEvents
     * @return {undefined}
     */
    var onEnd = function(deepDataAndEvents) {
      /** @type {number} */
      var _0x28d8a5 = ~-4 >> 1 + 255 % 0;
      if (deepDataAndEvents["indexOf"]((!![] + "")[3]) !== _0x28d8a5) {
        done(deepDataAndEvents);
      }
    };
    if (!cleanUp()) {
      if (!testCase()) {
        done("ind\u0435xOf");
      } else {
        done("indexOf");
      }
    } else {
      done("ind\u0435xOf");
    }
  });
  tryIt();
  window[_0xb217("0x0")] = {
    "play" : false,
    "spectate" : false,
    "gameMode" : "",
    "clanTag" : "",
    "playerColor" : null,
    "playerX" : 0,
    "playerY" : 0,
    "playerCells" : [],
    "playerCellsMass" : [],
    "playerMass" : 0,
    "playerMinMass" : 0,
    "playerMaxMass" : 0,
    "playerBestMass" : null,
    "STE" : null,
    "mapSize" : 14142,
    "mapOffset" : 7071,
    "mapOffsetX" : 0,
    "mapOffsetY" : 0,
    "mapOffsetFixed" : false,
    "mapMinX" : -7071,
    "mapMinY" : -7071,
    "mapMaxX" : 7071,
    "mapMaxY" : 7071,
    "zoomValue" : 1,
    "zoomResetValue" : 0,
    "zoomSpeedValue" : 0.9,
    "viewScale" : 1,
    "canvasScale" : 1,
    "animation" : 140,
    "innerW" : 0,
    "innerH" : 0,
    "cursorX" : 0,
    "cursorY" : 0,
    "clientX" : 0,
    "clientY" : 0,
    "targetX" : 0,
    "targetY" : 0,
    "targetDistance" : 0,
    "menuHeight" : 618,
    "leaderboardHTML" : "",
    "leaderboardIndex" : 1,
    "foodCache" : [],
    "virusesCache" : [],
    "biggerSTECellsCache" : [],
    "biggerCellsCache" : [],
    "smallerCellsCache" : [],
    "STECellsCache" : [],
    "virusColor" : "#999999",
    "virusStrokeColor" : _0xb217("0x1"),
    "gloabalAlpha" : 1,
    "cellsAlpha" : 0.9,
    "skinsAlpha" : 0.7,
    "virusAlpha" : 0.6,
    "virusStrokeSize" : 14,
    "autoZoom" : false,
    "autoHideFood" : false,
    "autoHideFoodOnZoom" : false,
    "vanillaSkins" : false,
    "customSkins" : true,
    "myTransparentSkin" : false,
    "myCustomColor" : false,
    "transparentCells" : false,
    "transparentViruses" : true,
    "transparentSkins" : false,
    "rainbowFood" : false,
    "oppColors" : false,
    "oppRings" : false,
    "virColors" : false,
    "splitRange" : false,
    "virusesRange" : false,
    "cursorTracking" : false,
    "showStatsSTE" : false,
    "showFood" : true,
    "foodIsHidden" : false,
    "showCustomSkins" : true,
    "selectBiggestCell" : true,
    "hideSmallBots" : false,
    "pause" : false,
    "targeting" : false,
    "getWS" : null,
    "displayLeaderboard" : null,
    "drawGrid" : null,
    "customDraw" : null,
    "drawCellInfo" : null,
    "setOppColor" : null,
    "setVirusColor" : null,
    "setVirusStrokeColor" : null,
    "getString" : null,
    "getCustomSkin" : null,
    /**
     * @param {number} iStart
     * @param {number} b
     * @param {number} iEnd
     * @param {number} a
     * @param {number} near
     * @param {number} far
     * @return {undefined}
     */
    "setMapCoords" : function(iStart, b, iEnd, a, near, far) {
      if (far - near == 24) {
        if (iEnd - iStart > 14E3) {
          if (a - b > 14E3) {
            /** @type {number} */
            this[_0xb217("0x2")] = this[_0xb217("0x3")] - iEnd;
            /** @type {number} */
            this[_0xb217("0x4")] = this[_0xb217("0x3")] - a;
            /** @type {boolean} */
            this[_0xb217("0x5")] = true;
          }
        }
      }
    },
    /**
     * @return {undefined}
     */
    "setCursorPosition" : function() {
      this[_0xb217("0x6")] = (this[_0xb217("0x7")] - this[_0xb217("0x8")] / 2) * this[_0xb217("0x9")] / this[_0xb217("0xa")] + this[_0xb217("0xb")];
      this[_0xb217("0xc")] = (this[_0xb217("0xd")] - this[_0xb217("0xe")] / 2) * this[_0xb217("0x9")] / this[_0xb217("0xa")] + this[_0xb217("0xf")];
    },
    /**
     * @param {(number|string)} p
     * @param {(number|string)} aPosition
     * @return {undefined}
     */
    "setTargetPosition" : function(p, aPosition) {
      /** @type {number} */
      p = p - this[_0xb217("0x2")];
      /** @type {number} */
      aPosition = aPosition - this[_0xb217("0x4")];
      /** @type {number} */
      var y = ((p - this[_0xb217("0xb")]) * this[_0xb217("0xa")] + this[_0xb217("0x8")] / 2) * this["canvasScale"];
      /** @type {number} */
      var x = ((aPosition - this[_0xb217("0xf")]) * this[_0xb217("0xa")] + this[_0xb217("0xe")] / 2) * this["canvasScale"];
      this["targetX"] = y > 0 ? Math[_0xb217("0x10")](y, this[_0xb217("0x8")]) : 0;
      this[_0xb217("0x11")] = x > 0 ? Math[_0xb217("0x10")](x, this[_0xb217("0xe")]) : 0;
      this[_0xb217("0x12")] = Math[_0xb217("0x13")](Math["sqrt"](Math[_0xb217("0x14")](this[_0xb217("0xb")] - p, 2) + Math[_0xb217("0x14")](this[_0xb217("0xf")] - aPosition, 2)));
    },
    /**
     * @return {undefined}
     */
    "resetTargetPosition" : function() {
      /** @type {number} */
      this["targetX"] = this[_0xb217("0x8")] / 2 * this[_0xb217("0x9")];
      /** @type {number} */
      this[_0xb217("0x11")] = this[_0xb217("0xe")] / 2 * this[_0xb217("0x9")];
    },
    /**
     * @return {undefined}
     */
    "calculateMass" : function() {
      if (0 != this[_0xb217("0x15")][_0xb217("0x16")]) {
        if ((this["playerMass"] > this[_0xb217("0x17")] || !this[_0xb217("0x17")]) && (this[_0xb217("0x17")] = this[_0xb217("0x18")]), this[_0xb217("0x19")] || (this[_0xb217("0x1a")] || (this[_0xb217("0x1b")] || (this[_0xb217("0x1c")] || this[_0xb217("0x1d")])))) {
          this[_0xb217("0x1e")] = this[_0xb217("0x15")][0];
          this["playerMaxMass"] = this["playerCellsMass"][0];
          /** @type {number} */
          var unlock = 1;
          for (;unlock < this[_0xb217("0x15")][_0xb217("0x16")];unlock++) {
            if (this[_0xb217("0x15")][unlock] < this[_0xb217("0x1e")]) {
              this[_0xb217("0x1e")] = this["playerCellsMass"][unlock];
            } else {
              if (this[_0xb217("0x15")][unlock] > this[_0xb217("0x1f")]) {
                this["playerMaxMass"] = this[_0xb217("0x15")][unlock];
              }
            }
          }
        }
        if (this[_0xb217("0x1d")]) {
          var _0x41ca42 = this[_0xb217("0x20")] ? this[_0xb217("0x1f")] : this["playerMinMass"];
          this[_0xb217("0x21")] = _0x41ca42 > 35 ? Math[_0xb217("0x22")](_0x41ca42 * (1E3 > _0x41ca42 ? 0.35 : 0.38)) : null;
        }
      }
    },
    /**
     * @param {Object} res
     * @return {?}
     */
    "color2Hex" : function(res) {
      var result = res["toString"](16);
      return 1 == result["length"] ? "0" + result : result;
    },
    /**
     * @param {?} red
     * @param {?} green
     * @param {?} deepDataAndEvents
     * @return {?}
     */
    "rgb2Hex" : function(red, green, deepDataAndEvents) {
      return "#" + this[_0xb217("0x23")](red) + this[_0xb217("0x23")](green) + this[_0xb217("0x23")](deepDataAndEvents);
    },
    /**
     * @param {?} moveX
     * @param {?} moveY
     * @param {number} size
     * @return {?}
     */
    "cacheCells" : function(moveX, moveY, size) {
      var orig_val = Math["floor"](size * size / 100);
      var scale = this[_0xb217("0x20")] ? this[_0xb217("0x1f")] : this["playerMinMass"];
      /** @type {number} */
      var distance = orig_val / scale;
      /** @type {number} */
      var thisDistance = 1E3 > scale ? 0.35 : 0.38;
      return 2.5 > distance ? 1.25 > distance ? 1.25 > distance && distance > 0.75 ? void 0 : distance > thisDistance ? void this[_0xb217("0x24")][_0xb217("0x25")]({
        "x" : moveX,
        "y" : moveY,
        "size" : size
      }) : void this[_0xb217("0x26")][_0xb217("0x25")]({
        "x" : moveX,
        "y" : moveY,
        "size" : size
      }) : void this[_0xb217("0x27")][_0xb217("0x25")]({
        "x" : moveX,
        "y" : moveY,
        "size" : size
      }) : void this[_0xb217("0x28")][_0xb217("0x25")]({
        "x" : moveX,
        "y" : moveY,
        "size" : size
      });
    }
  };
  /** @type {boolean} */
  CanvasRenderingContext2D[_0xb217("0x29")][_0xb217("0x2a")] = false;
  CanvasRenderingContext2D[_0xb217("0x29")][_0xb217("0x2b")] = CanvasRenderingContext2D["prototype"][_0xb217("0x2c")];
  /**
   * @return {undefined}
   */
  CanvasRenderingContext2D["prototype"][_0xb217("0x2c")] = function() {
  };
  CanvasRenderingContext2D["prototype"][_0xb217("0x2d")] = CanvasRenderingContext2D[_0xb217("0x29")][_0xb217("0x2e")];
  /**
   * @return {?}
   */
  CanvasRenderingContext2D[_0xb217("0x29")]["fillText"] = function() {
    var data = arguments[0];
    if ("Leaderboard" === data) {
      return window[_0xb217("0x0")][_0xb217("0x2f")] && window[_0xb217("0x0")]["displayLeaderboard"](), window["ogario"]["leaderboardIndex"] = 1, void(window[_0xb217("0x0")][_0xb217("0x30")] = "");
    }
    if (_0xb217("0x31") !== window[_0xb217("0x0")][_0xb217("0x32")]) {
      if (window[_0xb217("0x0")][_0xb217("0x33")] <= 10 && 0 == data[_0xb217("0x34")](window[_0xb217("0x0")][_0xb217("0x33")] + ".")) {
        return data = data[_0xb217("0x35")](/&/g, "&amp;")[_0xb217("0x35")](/</g, _0xb217("0x36"))[_0xb217("0x35")](/>/g, _0xb217("0x37")), window[_0xb217("0x0")][_0xb217("0x30")] += _0xb217("0x38") === this[_0xb217("0x39")] ? _0xb217("0x3a") + data + _0xb217("0x3b") : 3 == data[_0xb217("0x34")](window[_0xb217("0x0")]["clanTag"]) || 4 == data[_0xb217("0x34")](window["ogario"][_0xb217("0x3c")]) && 10 == window[_0xb217("0x0")][_0xb217("0x33")] ? _0xb217("0x3d") + data + _0xb217("0x3b") : _0xb217("0x3e") + 
        data + _0xb217("0x3b"), void window[_0xb217("0x0")][_0xb217("0x33")]++;
      }
      if (11 == window["ogario"][_0xb217("0x33")] && (window[_0xb217("0x0")][_0xb217("0x3f")] && _0xb217("0x38") === this[_0xb217("0x39")])) {
        return data = data["replace"](/&/g, _0xb217("0x40"))[_0xb217("0x35")](/</g, _0xb217("0x36"))[_0xb217("0x35")](/>/g, _0xb217("0x37")), window[_0xb217("0x0")][_0xb217("0x30")] += _0xb217("0x3a") + data + "</span>", void window[_0xb217("0x0")][_0xb217("0x33")]++;
      }
    }
    this[_0xb217("0x2d")][_0xb217("0x41")](this, arguments);
  };
}();
