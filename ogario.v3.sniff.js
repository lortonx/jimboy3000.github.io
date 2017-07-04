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
