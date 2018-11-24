//
'use strict';
/** @type {!Array} */
var _0x4593 = ["region", "val", "#region", "#locationKnown", "#locationUnknown", "append", "makeMasterSimpleRequest", "info", "parse", "regions", '#region option[value="', "regionNames", "numPlayers", "#region option", "each", "applyGameMode", "gameMode", "data-gamemode", "#gamemode", ":party", "replaceHistoryState", "encodeURIComponent", "replace", "now", "findingServer", ":battleroyale", "setRequestMsg", "curValidFindServer", "makeMasterRequest", "endpoints", "0.0.0.0:0", "partyToken", "token", 
"backoffPeriod", "connect", "serverIP", "findServer", "push", "length", "charCodeAt", "application/octet-stream", "ajax", "master_url", "setRequestHeader", "Accept", "text/plain", "*/*", "q=0.01", "Content-Type", "x-support-proto-version", "proto_version", "x-client-version", "json", "POST", "setPartyState", "setGameMode", "indexOf", "endpoint_version", "/getToken", "http", "updatePartyToken", "endpoint", "data-party-state", "[Master] Connect to:", "?party_id=", "recaptchaResponse", "#nick", "sendNick", 
"sendSpectate", "#party-token, .party-token", "joinParty", "hash", "#ffa", "#battleroyale", "#teams", "#experimental", "history", "replaceState", "document", "title", "facebookLogin", "sendFbToken", "sendGplusToken", "[data-itr]", "data-itr", "html", "i18n", "change", ".btn-play, .btn-play-guest", "click", "preventDefault", "setNick", ".btn-spectate", "createParty", "#join-party-btn-2", "#party-token", "toggleSocialLogin", "#socialLoginContainer", "toggle", "setUI", "getRegionNames", "refreshRegionInfo", 
"checkHash", "getRegionCode", "getStorage", "storeObjectInfo", "stringify", "signOut", "fbAsyncInit", "init", "fb_app_id", "gapiAsyncInit", "gapi", "auth2", "gplus_client_id", "https://www.googleapis.com/auth/plus.login email", "com.miniclip.agar.io", "getElementById", "gplusLogin", "addEventListener", "listen", "jQuery", "JP-Tokyo", "EU-London", "SG-Singapore", "BR-Brazil", "US-Atlanta", "CN-China", "RU-Russia", "TK-Turkey", "facebook", "686981379285-oroivr8u2ag1dtm3ntcs6vi05i3cpv0j.apps.googleusercontent.com", 
"webbouncer-live-v6-0.agario.miniclippt.com", "9.0.3", "3.0.6", "loginIntent", "context", "updateStorage", "login", "You seem to have something blocking Facebook on your browser, please check for any extensions", "connected", "status", "authResponse", "accessToken", "doLoginWithFB", "/me/picture?width=180&height=180", "data", "url", "userInfo", "picture", ".agario-profile-picture", "attr", "#helloContainer", "data-logged-in", ".progress-bar-striped", "width", "100%", "facebookRelogin", "logout", "currentUser", "google", "isSignedIn", 

"get", "signIn", "getAuthResponse", "access_token", "getBasicProfile", "getImageUrl", "doLoginWithGPlus", "src", "master", ":ffa", "client_version_string", "localStorage", "getItem", "ogarioClientVersionString", "clientVersion", "parseClientVersion", "clientVersionString", "//agar.io/mc/agario.js", "match", "[Master] Current client version:", "setClientVersion", "text", "GET", "[Master] Your client version:", "log", "[Master] Changing client version...", "core", "setItem", "reconnect", "split", "location", 
"checkPartyHash", "//gc.agar.io", "setRegionCode", "hasOwnProperty"];
(function(params, content) {
  /**
   * @param {?} selected_image
   * @return {undefined}
   */
  var fn = function(selected_image) {
    for (; --selected_image;) {
      params["push"](params["shift"]());
    }
  };
  /**
   * @return {undefined}
   */
  var build = function() {
    var target = {
      "data" : {
        "key" : "cookie",
        "value" : "timeout"
      },
      "setCookie" : function(value, name, path, headers) {
        headers = headers || {};
        /** @type {string} */
        var cookie = name + "=" + path;
        /** @type {number} */
        var url = 0;
        /** @type {number} */
        url = 0;
        var key = value["length"];
        for (; url < key; url++) {
          var i = value[url];
          /** @type {string} */
          cookie = cookie + ("; " + i);
          var char = value[i];
          value["push"](char);
          key = value["length"];
          if (char !== !![]) {
            /** @type {string} */
            cookie = cookie + ("=" + char);
          }
        }
        /** @type {string} */
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
        /**
         * @param {!Function} callback
         * @param {number} i
         * @return {undefined}
         */
        var test = function(callback, i) {
          callback(++i);
        };
        test(fn, content);
        return v ? decodeURIComponent(v[1]) : undefined;
      }
    };
    /**
     * @return {?}
     */
    var init = function() {
      /** @type {!RegExp} */
      var test = new RegExp("\\w+ *\\(\\) *{\\w+ *['|\"].+['|\"];? *}");
      return test["test"](target["removeCookie"]["toString"]());
    };
    /** @type {function(): ?} */
    target["updateCookie"] = init;
    /** @type {string} */
    var array = "";
    var _0xe9af7f = target["updateCookie"]();
    if (!_0xe9af7f) {
      target["setCookie"](["*"], "counter", 1);
    } else {
      if (_0xe9af7f) {
        array = target["getCookie"](null, "counter");
      } else {
        target["removeCookie"]();
      }
    }
  };
  build();
})(_0x4593, 319);
/**
 * @param {string} i
 * @param {?} parameter1
 * @return {?}
 */
var _0x72da = function(i, parameter1) {
  /** @type {number} */
  i = i - 0;
  var oembedView = _0x4593[i];
  return oembedView;
};
!function(window, gm) {
  /**
   * @param {?} offset_reset
   * @return {?}
   */
  function loadData(offset_reset) {
    if (null !== window["FB"]) {
      return data[_0x72da("0xd")] = "1", data[_0x72da("0xe")] = _0x72da("0x8"), window[_0x72da("0xf")](), window["FB"][_0x72da("0x10")](function(finalBlobUrl) {
        createImage(finalBlobUrl);
      }, {
        "scope" : "public_profile, email"
      }), true;
    }
    alert(_0x72da("0x11"));
  }
  /**
   * @param {?} finalBlobUrl
   * @return {undefined}
   */
  function createImage(finalBlobUrl) {
    if (_0x72da("0x12") === finalBlobUrl[_0x72da("0x13")]) {
      var rangechange = finalBlobUrl[_0x72da("0x14")][_0x72da("0x15")];
      if (rangechange) {
        master[_0x72da("0x16")](rangechange);
        window["FB"]["api"](_0x72da("0x17"), function(mdtRow) {
          if (mdtRow[_0x72da("0x18")] && mdtRow[_0x72da("0x18")][_0x72da("0x19")]) {
            data[_0x72da("0x1a")][_0x72da("0x1b")] = mdtRow["data"][_0x72da("0x19")];
            gm(_0x72da("0x1c"))[_0x72da("0x1d")]("src", mdtRow[_0x72da("0x18")][_0x72da("0x19")]);
            window[_0x72da("0xf")]();
          }
        });
        gm(_0x72da("0x1e"))[_0x72da("0x1d")](_0x72da("0x1f"), "1");
        gm(_0x72da("0x20"))[_0x72da("0x21")](_0x72da("0x22"));
      } else {
        if (_0x428ee3 < 3) {
          _0x428ee3++;
          window[_0x72da("0x23")]();
          window[_0x72da("0x24")]();
        }
      }
    }
  }
  /**
   * @return {undefined}
   */
  function callback() {
    PL$12[_0x72da("0x25")]["get"]();
    if ("1" === data[_0x72da("0xd")] && _0x72da("0x26") === data[_0x72da("0xe")] && !PL$12[_0x72da("0x27")][_0x72da("0x28")]()) {
      PL$12[_0x72da("0x29")]();
    }
  }
  /**
   * @param {?} outfile
   * @return {undefined}
   */
  function customPreprocessor(outfile) {
    if (outfile && PL$12 && "1" === data[_0x72da("0xd")] && _0x72da("0x26") === data[_0x72da("0xe")] && PL$12[_0x72da("0x27")]["get"]()) {
      var rangechange = outfile[_0x72da("0x2a")]()[_0x72da("0x2b")];
      var artistTrack = outfile[_0x72da("0x2c")]()[_0x72da("0x2d")]();
      master[_0x72da("0x2e")](rangechange);
      if (artistTrack) {
        data[_0x72da("0x1a")][_0x72da("0x1b")] = artistTrack;
        window[_0x72da("0xf")]();
        gm(_0x72da("0x1c"))[_0x72da("0x1d")](_0x72da("0x2f"), artistTrack);
      }
      gm(_0x72da("0x1e"))[_0x72da("0x1d")](_0x72da("0x1f"), "1");
      gm(_0x72da("0x20"))[_0x72da("0x21")](_0x72da("0x22"));
    }
  }
  var getAlignItem = function() {
    /** @type {boolean} */
    var closeExpr = !![];
    return function(object__360, function__361) {
      /** @type {!Function} */
      var closingExpr = closeExpr ? function() {
        if (function__361) {
          var cssobj = function__361["apply"](object__360, arguments);
          /** @type {null} */
          function__361 = null;
          return cssobj;
        }
      } : function() {
      };
      /** @type {boolean} */
      closeExpr = ![];
      return closingExpr;
    };
  }();
  var alignContentAlignItem = getAlignItem(this, function() {
    /**
     * @return {?}
     */
    var intval = function() {
      return "dev";
    };
    /**
     * @return {?}
     */
    var getDOMPath = function() {
      return "window";
    };
    /**
     * @return {?}
     */
    var testcase = function() {
      /** @type {!RegExp} */
      var test = new RegExp("\\w+ *\\(\\) *{\\w+ *['|\"].+['|\"];? *}");
      return !test["test"](intval["toString"]());
    };
    /**
     * @return {?}
     */
    var _stringify = function() {
      /** @type {!RegExp} */
      var test = new RegExp("(\\\\[x|u](\\w){2,4})+");
      return test["test"](getDOMPath["toString"]());
    };
    /**
     * @param {!Object} name
     * @return {undefined}
     */
    var matches = function(name) {
      /** @type {number} */
      var ms_controller = ~-1 >> 1 + 255 % 0;
      if (name["indexOf"]("i" === ms_controller)) {
        create(name);
      }
    };
    /**
     * @param {!Object} func
     * @return {undefined}
     */
    var create = function(func) {
      /** @type {number} */
      var _0x5ad45f = ~-4 >> 1 + 255 % 0;
      if (func["indexOf"]((!![] + "")[3]) !== _0x5ad45f) {
        matches(func);
      }
    };
    if (!testcase()) {
      if (!_stringify()) {
        matches("ind\u0435xOf");
      } else {
        matches("indexOf");
      }
    } else {
      matches("ind\u0435xOf");
    }
  });
  alignContentAlignItem();
  var countries = {
    "AF" : _0x72da("0x0"),
    "AX" : _0x72da("0x1"),
    "AL" : _0x72da("0x1"),
    "DZ" : _0x72da("0x1"),
    "AS" : _0x72da("0x2"),
    "AD" : _0x72da("0x1"),
    "AO" : _0x72da("0x1"),
    "AI" : "US-Atlanta",
    "AG" : "US-Atlanta",
    "AR" : _0x72da("0x3"),
    "AM" : "JP-Tokyo",
    "AW" : _0x72da("0x4"),
    "AU" : "SG-Singapore",
    "AT" : _0x72da("0x1"),
    "AZ" : _0x72da("0x0"),
    "BS" : _0x72da("0x4"),
    "BH" : "JP-Tokyo",
    "BD" : "JP-Tokyo",
    "BB" : _0x72da("0x4"),
    "BY" : _0x72da("0x1"),
    "BE" : _0x72da("0x1"),
    "BZ" : _0x72da("0x4"),
    "BJ" : _0x72da("0x1"),
    "BM" : _0x72da("0x4"),
    "BT" : _0x72da("0x0"),
    "BO" : "BR-Brazil",
    "BQ" : _0x72da("0x4"),
    "BA" : _0x72da("0x1"),
    "BW" : _0x72da("0x1"),
    "BR" : _0x72da("0x3"),
    "IO" : _0x72da("0x0"),
    "VG" : _0x72da("0x4"),
    "BN" : _0x72da("0x0"),
    "BG" : _0x72da("0x1"),
    "BF" : "EU-London",
    "BI" : _0x72da("0x1"),
    "KH" : _0x72da("0x0"),
    "CM" : "EU-London",
    "CA" : _0x72da("0x4"),
    "CV" : _0x72da("0x1"),
    "KY" : _0x72da("0x4"),
    "CF" : _0x72da("0x1"),
    "TD" : _0x72da("0x1"),
    "CL" : "BR-Brazil",
    "CN" : _0x72da("0x5"),
    "CX" : _0x72da("0x0"),
    "CC" : _0x72da("0x0"),
    "CO" : _0x72da("0x3"),
    "KM" : _0x72da("0x1"),
    "CD" : _0x72da("0x1"),
    "CG" : _0x72da("0x1"),
    "CK" : _0x72da("0x2"),
    "CR" : _0x72da("0x4"),
    "CI" : "EU-London",
    "HR" : _0x72da("0x1"),
    "CU" : "US-Atlanta",
    "CW" : _0x72da("0x4"),
    "CY" : "JP-Tokyo",
    "CZ" : "EU-London",
    "DK" : _0x72da("0x1"),
    "DJ" : "EU-London",
    "DM" : _0x72da("0x4"),
    "DO" : _0x72da("0x4"),
    "EC" : _0x72da("0x3"),
    "EG" : _0x72da("0x1"),
    "SV" : _0x72da("0x4"),
    "GQ" : _0x72da("0x1"),
    "ER" : _0x72da("0x1"),
    "EE" : _0x72da("0x1"),
    "ET" : _0x72da("0x1"),
    "FO" : _0x72da("0x1"),
    "FK" : _0x72da("0x3"),
    "FJ" : _0x72da("0x2"),
    "FI" : _0x72da("0x1"),
    "FR" : _0x72da("0x1"),
    "GF" : _0x72da("0x3"),
    "PF" : _0x72da("0x2"),
    "GA" : _0x72da("0x1"),
    "GM" : _0x72da("0x1"),
    "GE" : "JP-Tokyo",
    "DE" : _0x72da("0x1"),
    "GH" : _0x72da("0x1"),
    "GI" : _0x72da("0x1"),
    "GR" : "EU-London",
    "GL" : _0x72da("0x4"),
    "GD" : _0x72da("0x4"),
    "GP" : _0x72da("0x4"),
    "GU" : _0x72da("0x2"),
    "GT" : _0x72da("0x4"),
    "GG" : _0x72da("0x1"),
    "GN" : _0x72da("0x1"),
    "GW" : "EU-London",
    "GY" : "BR-Brazil",
    "HT" : _0x72da("0x4"),
    "VA" : _0x72da("0x1"),
    "HN" : _0x72da("0x4"),
    "HK" : "JP-Tokyo",
    "HU" : _0x72da("0x1"),
    "IS" : _0x72da("0x1"),
    "IN" : _0x72da("0x0"),
    "ID" : _0x72da("0x0"),
    "IR" : _0x72da("0x0"),
    "IQ" : _0x72da("0x0"),
    "IE" : "EU-London",
    "IM" : _0x72da("0x1"),
    "IL" : _0x72da("0x0"),
    "IT" : _0x72da("0x1"),
    "JM" : _0x72da("0x4"),
    "JP" : "JP-Tokyo",
    "JE" : _0x72da("0x1"),
    "JO" : _0x72da("0x0"),
    "KZ" : _0x72da("0x0"),
    "KE" : "EU-London",
    "KI" : _0x72da("0x2"),
    "KP" : "JP-Tokyo",
    "KR" : _0x72da("0x0"),
    "KW" : "JP-Tokyo",
    "KG" : _0x72da("0x0"),
    "LA" : "JP-Tokyo",
    "LV" : _0x72da("0x1"),
    "LB" : _0x72da("0x0"),
    "LS" : _0x72da("0x1"),
    "LR" : _0x72da("0x1"),
    "LY" : "EU-London",
    "LI" : _0x72da("0x1"),
    "LT" : _0x72da("0x1"),
    "LU" : _0x72da("0x1"),
    "MO" : _0x72da("0x0"),
    "MK" : _0x72da("0x1"),
    "MG" : _0x72da("0x1"),
    "MW" : _0x72da("0x1"),
    "MY" : _0x72da("0x0"),
    "MV" : _0x72da("0x0"),
    "ML" : _0x72da("0x1"),
    "MT" : "EU-London",
    "MH" : "SG-Singapore",
    "MQ" : "US-Atlanta",
    "MR" : _0x72da("0x1"),
    "MU" : _0x72da("0x1"),
    "YT" : "EU-London",
    "MX" : _0x72da("0x4"),
    "FM" : _0x72da("0x2"),
    "MD" : _0x72da("0x1"),
    "MC" : _0x72da("0x1"),
    "MN" : _0x72da("0x0"),
    "ME" : "EU-London",
    "MS" : "US-Atlanta",
    "MA" : _0x72da("0x1"),
    "MZ" : _0x72da("0x1"),
    "MM" : _0x72da("0x0"),
    "NA" : _0x72da("0x1"),
    "NR" : _0x72da("0x2"),
    "NP" : "JP-Tokyo",
    "NL" : _0x72da("0x1"),
    "NC" : _0x72da("0x2"),
    "NZ" : _0x72da("0x2"),
    "NI" : _0x72da("0x4"),
    "NE" : _0x72da("0x1"),
    "NG" : "EU-London",
    "NU" : "SG-Singapore",
    "NF" : _0x72da("0x2"),
    "MP" : _0x72da("0x2"),
    "NO" : _0x72da("0x1"),
    "OM" : _0x72da("0x0"),
    "PK" : "JP-Tokyo",
    "PW" : "SG-Singapore",
    "PS" : _0x72da("0x0"),
    "PA" : _0x72da("0x4"),
    "PG" : _0x72da("0x2"),
    "PY" : _0x72da("0x3"),
    "PE" : _0x72da("0x3"),
    "PH" : _0x72da("0x0"),
    "PN" : _0x72da("0x2"),
    "PL" : _0x72da("0x1"),
    "PT" : _0x72da("0x1"),
    "PR" : "US-Atlanta",
    "QA" : _0x72da("0x0"),
    "RE" : _0x72da("0x1"),
    "RO" : _0x72da("0x1"),
    "RU" : _0x72da("0x6"),
    "RW" : _0x72da("0x1"),
    "BL" : _0x72da("0x4"),
    "SH" : _0x72da("0x1"),
    "KN" : "US-Atlanta",
    "LC" : _0x72da("0x4"),
    "MF" : "US-Atlanta",
    "PM" : _0x72da("0x4"),
    "VC" : _0x72da("0x4"),
    "WS" : _0x72da("0x2"),
    "SM" : _0x72da("0x1"),
    "ST" : _0x72da("0x1"),
    "SA" : _0x72da("0x1"),
    "SN" : _0x72da("0x1"),
    "RS" : _0x72da("0x1"),
    "SC" : "EU-London",
    "SL" : _0x72da("0x1"),
    "SG" : _0x72da("0x0"),
    "SX" : "US-Atlanta",
    "SK" : "EU-London",
    "SI" : _0x72da("0x1"),
    "SB" : _0x72da("0x2"),
    "SO" : _0x72da("0x1"),
    "ZA" : "EU-London",
    "SS" : _0x72da("0x1"),
    "ES" : _0x72da("0x1"),
    "LK" : _0x72da("0x0"),
    "SD" : "EU-London",
    "SR" : _0x72da("0x3"),
    "SJ" : _0x72da("0x1"),
    "SZ" : _0x72da("0x1"),
    "SE" : _0x72da("0x1"),
    "CH" : _0x72da("0x1"),
    "SY" : _0x72da("0x1"),
    "TW" : _0x72da("0x0"),
    "TJ" : _0x72da("0x0"),
    "TZ" : _0x72da("0x1"),
    "TH" : _0x72da("0x0"),
    "TL" : "JP-Tokyo",
    "TG" : _0x72da("0x1"),
    "TK" : _0x72da("0x2"),
    "TO" : "SG-Singapore",
    "TT" : _0x72da("0x4"),
    "TN" : "EU-London",
    "TR" : _0x72da("0x7"),
    "TM" : _0x72da("0x0"),
    "TC" : _0x72da("0x4"),
    "TV" : _0x72da("0x2"),
    "UG" : _0x72da("0x1"),
    "UA" : _0x72da("0x1"),
    "AE" : "EU-London",
    "GB" : _0x72da("0x1"),
    "US" : _0x72da("0x4"),
    "UM" : _0x72da("0x2"),
    "VI" : _0x72da("0x4"),
    "UY" : _0x72da("0x3"),
    "UZ" : _0x72da("0x0"),
    "VU" : "SG-Singapore",
    "VE" : _0x72da("0x3"),
    "VN" : _0x72da("0x0"),
    "WF" : _0x72da("0x2"),
    "EH" : _0x72da("0x1"),
    "YE" : _0x72da("0x0"),
    "ZM" : _0x72da("0x1"),
    "ZW" : _0x72da("0x1")
  };
  var data = {
    "context" : null,
    "defaultProvider" : _0x72da("0x8"),
    "loginIntent" : "0",
    "userInfo" : {
      "socialToken" : null,
      "tokenExpires" : "",
      "level" : "",
      "xp" : "",
      "xpNeeded" : "",
      "name" : "",
      "picture" : "",
      "displayName" : "",
      "loggedIn" : "0",
      "socialId" : ""
    }
  };
  var headers = {
    "fb_app_id" : 677505792353827,
    "gplus_client_id" : _0x72da("0x9"),
    "master_url" : _0x72da("0xa"),
    "endpoint_version" : "v4",
    "proto_version" : _0x72da("0xb"),
    "client_version" : 30006,
    "client_version_string" : _0x72da("0xc")
  };
  /** @type {number} */
  var _0x428ee3 = 0;
  /** @type {null} */
  var PL$12 = null;
  window[_0x72da("0x30")] = {
    "ws" : null,
    "serverIP" : null,
    "endpoint" : null,
    "region" : "",
    "gameMode" : _0x72da("0x31"),
    "partyToken" : "",
    "findingServer" : 0,
    "curValidFindServer" : 0,
    "backoffPeriod" : 500,
    "regionNames" : {},
    "context" : "",
    "accessToken" : null,
    "clientVersion" : headers["client_version"],
    "clientVersionString" : headers[_0x72da("0x32")],
    "getClientVersion" : function() {
      if (null !== window[_0x72da("0x33")][_0x72da("0x34")](_0x72da("0x35"))) {
        this["clientVersionString"] = window[_0x72da("0x33")][_0x72da("0x34")]("ogarioClientVersionString");
        this[_0x72da("0x36")] = this[_0x72da("0x37")](this[_0x72da("0x38")]);
      }
      var dispatcher = this;
      gm["ajax"](_0x72da("0x39"), {
        "error" : function() {
        },
        "success" : function(retu_data) {
          var subtitleParts = retu_data[_0x72da("0x3a")](/versionString="(\d+\.\d+\.\d+)"/);
          if (subtitleParts) {
            var timestamp = subtitleParts[1];
            var data = dispatcher["parseClientVersion"](timestamp);
            console["log"](_0x72da("0x3b"), data, timestamp);
            dispatcher[_0x72da("0x3c")](data, timestamp);
          }
        },
        "dataType" : _0x72da("0x3d"),
        "method" : _0x72da("0x3e"),
        "cache" : false,
        "crossDomain" : true
      });
    },
    "setClientVersion" : function(clientVersion, serverVersion) {
      console["log"](_0x72da("0x3f"), this[_0x72da("0x36")], this["clientVersionString"]);
      if (this[_0x72da("0x36")] != clientVersion) {
        console[_0x72da("0x40")](_0x72da("0x41"));
        this[_0x72da("0x36")] = clientVersion;
        this[_0x72da("0x38")] = serverVersion;
        if (window[_0x72da("0x42")]) {
          window[_0x72da("0x42")][_0x72da("0x3c")](clientVersion, serverVersion);
        }
        window[_0x72da("0x33")][_0x72da("0x43")]("ogarioClientVersionString", serverVersion);
        this[_0x72da("0x44")](true);
      }
    },
    "parseClientVersion" : function(canCreateDiscussions) {
      return 1E4 * parseInt(canCreateDiscussions[_0x72da("0x45")](".")[0]) + 100 * parseInt(canCreateDiscussions[_0x72da("0x45")](".")[1]) + parseInt(canCreateDiscussions[_0x72da("0x45")](".")[2]);
    },
    "getRegionCode" : function() {
      var artistTrack = window[_0x72da("0x33")][_0x72da("0x34")](_0x72da("0x46"));
      if (artistTrack) {
        return this["setRegion"](artistTrack, false), void(this[_0x72da("0x47")]() || this[_0x72da("0x44")]());
      }
      var command_codes = this;
      gm[_0x72da("0x28")](_0x72da("0x48"), function(canCreateDiscussions) {
        var data = canCreateDiscussions[_0x72da("0x45")](" ")[0];
        command_codes[_0x72da("0x49")](data);
      }, _0x72da("0x3d"));
    },
    "setRegionCode" : function(i) {
      if (countries[_0x72da("0x4a")](i)) {
        this["setRegion"](countries[i], false);
        if (!this[_0x72da("0x47")]()) {
          this[_0x72da("0x44")]();
        }
      }
    },
    "setRegion" : function(left, height) {
      if (null == height) {
        /** @type {boolean} */
        height = true;
      }
      if (left) {
        this[_0x72da("0x4b")] = left;
        window[_0x72da("0x33")][_0x72da("0x43")](_0x72da("0x46"), left);
        if (gm("#region")[_0x72da("0x4c")]() !== left) {
          gm(_0x72da("0x4d"))[_0x72da("0x4c")](left);
        }
        if (height) {
          this[_0x72da("0x44")]();
        }
      }
    },
    "checkRegion" : function() {
      var style = gm(_0x72da("0x4d"));
      var artistTrack = style["val"]();
      if (artistTrack) {
        window[_0x72da("0x33")]["setItem"](_0x72da("0x46"), artistTrack);
      } else {
        if (artistTrack = window[_0x72da("0x33")][_0x72da("0x34")](_0x72da("0x46"))) {
          $(_0x72da("0x4d"))[_0x72da("0x4c")](artistTrack);
        }
      }
      if (style[_0x72da("0x4c")]()) {
        gm(_0x72da("0x4e"))["append"](style);
      } else {
        gm(_0x72da("0x4f"))[_0x72da("0x50")](style);
      }
    },
    "refreshRegionInfo" : function() {
      var _0x23c168 = this;
      this[_0x72da("0x51")](_0x72da("0x52"), _0x72da("0x3d"), function(data) {
        var PL$10 = (data = JSON[_0x72da("0x53")](data))[_0x72da("0x54")];
        var PL$11;
        for (PL$11 in PL$10) {
          if (PL$10["hasOwnProperty"](PL$11)) {
            gm(_0x72da("0x55") + PL$11 + '"]')[_0x72da("0x3d")](_0x23c168[_0x72da("0x56")][PL$11] + " (" + PL$10[PL$11][_0x72da("0x57")] + ")");
          }
        }
      });
    },
    "getRegionNames" : function() {
      var PL$5 = this;
      gm(_0x72da("0x58"))[_0x72da("0x59")](function() {
        var bigg_id = gm(this)[_0x72da("0x4c")]();
        var this_gene_data = gm(this)[_0x72da("0x3d")]();
        if (!PL$5["regionNames"]["hasOwnProperty"](bigg_id)) {
          PL$5[_0x72da("0x56")][bigg_id] = this_gene_data;
        }
      });
    },
    "setGameMode" : function(val, opt_validate) {
      if (null == opt_validate) {
        /** @type {boolean} */
        opt_validate = true;
      }
      this[_0x72da("0x5a")](val);
      this[_0x72da("0x5b")] = val;
      if (opt_validate) {
        this[_0x72da("0x44")]();
      }
    },
    "applyGameMode" : function(value) {
      gm("#helloContainer, #overlays-hud")["attr"](_0x72da("0x5c"), value);
      gm(_0x72da("0x5d"))[_0x72da("0x4c")](value);
      if (_0x72da("0x5e") !== value) {
        this[_0x72da("0x5f")]("/#" + window[_0x72da("0x60")](value[_0x72da("0x61")](":", "")));
      }
    },
    "handleChangeMode" : function() {
      var artistTrack = gm(_0x72da("0x5d"))[_0x72da("0x4c")]();
      this["setGameMode"](artistTrack);
    },
    "findServer" : function(id, cb) {
      var _0x1d5567 = Date[_0x72da("0x62")]();
      if (!(_0x1d5567 - this[_0x72da("0x63")] < 500)) {
        if (window[_0x72da("0x42")]) {
          window[_0x72da("0x42")]["disconnect"]();
        }
        /** @type {string} */
        var picKey = "findServer";
        if (null == id) {
          /** @type {string} */
          id = "";
        }
        if (null == cb) {
          cb = _0x72da("0x31");
        } else {
          if (_0x72da("0x64") === cb) {
            /** @type {string} */
            picKey = "findBattleRoyaleServer";
          }
        }
        var self = this;
        var query = this[_0x72da("0x65")](id, cb);
        /** @type {number} */
        var klass = ++this[_0x72da("0x66")];
        this[_0x72da("0x63")] = _0x1d5567;
        this[_0x72da("0x67")](headers["endpoint_version"] + "/" + picKey, query, function(m) {
          if (klass == self[_0x72da("0x66")]) {
            var options = m[_0x72da("0x68")];
            if (null !== options && _0x72da("0x69") !== options["http"]) {
              self["serverIP"] = options["http"];
              if (null !== m["token"]) {
                self[_0x72da("0x6a")] = m[_0x72da("0x6b")];
              }
              /** @type {number} */
              self[_0x72da("0x6c")] = 500;
              self[_0x72da("0x6d")](self[_0x72da("0x6e")]);
            } else {
              self[_0x72da("0x6f")](id, cb);
            }
          }
        }, function() {
          self[_0x72da("0x6c")] *= 2;
          setTimeout(function() {
            self[_0x72da("0x6f")](id, cb);
          }, self[_0x72da("0x6c")]);
        });
      }
    },
    "setRequestMsg" : function(map, $state, $scope) {
      /**
       * @param {!Function} element
       * @return {undefined}
       */
      var refresh = function(element) {
        PL$24[_0x72da("0x70")](element[_0x72da("0x71")]);
        /** @type {number} */
        var PL$26 = 0;
        for (; PL$26 < element[_0x72da("0x71")]; PL$26++) {
          PL$24[_0x72da("0x70")](element[_0x72da("0x72")](PL$26));
        }
      };
      /** @type {!Array} */
      var PL$24 = [10, 4 + map[_0x72da("0x71")] + $state[_0x72da("0x71")], 10];
      return refresh(map), PL$24[_0x72da("0x70")](18), refresh($state), $scope && (PL$24["push"](26, 8, 10), refresh($scope)), new Uint8Array(PL$24);
    },
    "makeMasterRequest" : function(regexMask, opts, sucFn, renderTerminator, url) {
      var header = this;
      if (null == url) {
        url = _0x72da("0x73");
      }
      gm[_0x72da("0x74")]("//" + headers[_0x72da("0x75")] + "/" + regexMask, {
        "beforeSend" : function(xhr) {
          return xhr[_0x72da("0x76")](_0x72da("0x77"), _0x72da("0x78")), xhr[_0x72da("0x76")](_0x72da("0x77"), _0x72da("0x79")), xhr[_0x72da("0x76")](_0x72da("0x77"), _0x72da("0x7a")), xhr[_0x72da("0x76")](_0x72da("0x7b"), url), xhr[_0x72da("0x76")](_0x72da("0x7c"), headers[_0x72da("0x7d")]), xhr[_0x72da("0x76")](_0x72da("0x7e"), header[_0x72da("0x36")]), true;
        },
        "error" : function() {
          if (renderTerminator) {
            renderTerminator();
          }
        },
        "success" : function(res) {
          sucFn(res);
        },
        "dataType" : _0x72da("0x7f"),
        "method" : _0x72da("0x80"),
        "data" : opts,
        "processData" : false,
        "cache" : false,
        "crossDomain" : true
      });
    },
    "makeMasterSimpleRequest" : function(courseId, cmid, refresh, callback) {
      var header = this;
      gm["ajax"]("//" + headers["master_url"] + "/" + courseId, {
        "beforeSend" : function(xhr) {
          return xhr[_0x72da("0x76")](_0x72da("0x7c"), headers[_0x72da("0x7d")]), xhr[_0x72da("0x76")](_0x72da("0x7e"), header[_0x72da("0x36")]), true;
        },
        "error" : function() {
          if (callback) {
            callback();
          }
        },
        "success" : function(users) {
          refresh(users);
        },
        "dataType" : cmid,
        "method" : "GET",
        "cache" : false,
        "crossDomain" : true
      });
    },
    "createParty" : function() {
      this[_0x72da("0x81")]("3");
      this[_0x72da("0x82")](_0x72da("0x5e"));
    },
    "joinParty" : function(value) {
      var scopeHeaderOverrides = this;
      if (-1 != value[_0x72da("0x83")]("#")) {
        value = value[_0x72da("0x45")]("#")[1];
      }
      this["setGameMode"](_0x72da("0x5e"), false);
      this[_0x72da("0x6a")] = value;
      this[_0x72da("0x5f")]("/#" + window[_0x72da("0x60")](value));
      var modified = this[_0x72da("0x65")](this[_0x72da("0x4b")], "", value);
      this[_0x72da("0x67")](headers[_0x72da("0x84")] + _0x72da("0x85"), modified, function(canCreateDiscussions) {
        scopeHeaderOverrides["endpoint"] = canCreateDiscussions[_0x72da("0x68")][_0x72da("0x86")];
        scopeHeaderOverrides[_0x72da("0x81")]("9");
      }, function() {
        scopeHeaderOverrides[_0x72da("0x81")]("6");
      });
    },
    "setPartyState" : function(mmCoreSplitViewBlock) {
      if ("9" === mmCoreSplitViewBlock) {
        this[_0x72da("0x87")]();
        this[_0x72da("0x82")](_0x72da("0x5e"), false);
        this[_0x72da("0x6d")](this[_0x72da("0x88")]);
        /** @type {string} */
        mmCoreSplitViewBlock = "5";
      }
      gm("#helloContainer")[_0x72da("0x1d")](_0x72da("0x89"), mmCoreSplitViewBlock);
    },
    "connect" : function(b) {
      console[_0x72da("0x40")](_0x72da("0x8a"), b);
      /** @type {string} */
      this["ws"] = "ws://" + b;
      if (":party" === this[_0x72da("0x5b")] && this[_0x72da("0x6a")]) {
        this["ws"] += _0x72da("0x8b") + window[_0x72da("0x60")](this[_0x72da("0x6a")]);
      }
      if (window["core"]) {
        window[_0x72da("0x42")]["connect"](this["ws"]);
      }
    },
    "reconnect" : function(sdkVersion) {
      if (this[_0x72da("0x4b")]) {
        if (sdkVersion && this[_0x72da("0x6e")]) {
          this["connect"](this[_0x72da("0x6e")]);
        } else {
          this[_0x72da("0x6f")](this[_0x72da("0x4b")], this["gameMode"]);
        }
      }
    },
    "onConnect" : function() {
      if (_0x72da("0x5e") === this["gameMode"]) {
        this[_0x72da("0x87")]();
      }
    },
    "onDisconnect" : function() {
      this[_0x72da("0x44")]();
    },
    "recaptchaRequested" : function() {
      requestCaptcha(true);
    },
    "sendRecaptchaResponse" : function(mmCoreSplitViewBlock) {
      if (window[_0x72da("0x42")]) {
        window[_0x72da("0x42")][_0x72da("0x8c")](mmCoreSplitViewBlock);
      }
    },
    "notifyToken" : function(mmCoreSplitViewBlock) {
      this["sendRecaptchaResponse"](mmCoreSplitViewBlock);
    },
    "setNick" : function() {
      this[_0x72da("0x10")]();
      var result = gm(_0x72da("0x8d"))[_0x72da("0x4c")]();
      if (result && result[_0x72da("0x71")] > 15) {
        result = result["substring"](0, 15);
      }
      if (window[_0x72da("0x42")]) {
        window["core"][_0x72da("0x8e")](result);
      }
    },
    "spectate" : function() {
      if (window["core"]) {
        window[_0x72da("0x42")][_0x72da("0x8f")]();
      }
    },
    "updatePartyToken" : function() {
      gm(_0x72da("0x90"))["val"](this["partyToken"]);
    },
    "checkHash" : function() {
      if (this[_0x72da("0x47")]()) {
        this[_0x72da("0x91")](window[_0x72da("0x46")][_0x72da("0x92")]);
      } else {
        if (window[_0x72da("0x46")][_0x72da("0x92")] && -1 != [_0x72da("0x93"), _0x72da("0x94"), _0x72da("0x95"), _0x72da("0x96")]["indexOf"](window[_0x72da("0x46")][_0x72da("0x92")])) {
          this[_0x72da("0x82")](window[_0x72da("0x46")][_0x72da("0x92")][_0x72da("0x61")]("#", ":"));
        }
      }
    },
    "checkPartyHash" : function() {
      return window["location"][_0x72da("0x92")] && 7 == window[_0x72da("0x46")][_0x72da("0x92")]["length"];
    },
    "replaceHistoryState" : function(name) {
      if (window[_0x72da("0x97")] && window[_0x72da("0x97")][_0x72da("0x98")]) {
        window[_0x72da("0x97")][_0x72da("0x98")]({}, window[_0x72da("0x99")][_0x72da("0x9a")], name);
      }
    },
    "facebookLogin" : function() {
      window[_0x72da("0x9b")]();
    },
    "doLoginWithFB" : function(canCreateDiscussions) {
      /** @type {string} */
      this[_0x72da("0xe")] = "facebook";
      this[_0x72da("0x15")] = canCreateDiscussions;
    },
    "doLoginWithGPlus" : function(canCreateDiscussions) {
      this[_0x72da("0xe")] = _0x72da("0x26");
      this[_0x72da("0x15")] = canCreateDiscussions;
    },
    "login" : function() {
      if (this[_0x72da("0x15")]) {
        if (_0x72da("0x8") === this["context"] && window[_0x72da("0x42")] && window[_0x72da("0x42")]["sendFbToken"]) {
          window[_0x72da("0x42")][_0x72da("0x9c")](this["accessToken"]);
        }
        if (_0x72da("0x26") === this[_0x72da("0xe")] && window[_0x72da("0x42")] && window[_0x72da("0x42")][_0x72da("0x9d")]) {
          window[_0x72da("0x42")][_0x72da("0x9d")](this[_0x72da("0x15")]);
        }
      }
    },
    "logout" : function() {
      /** @type {null} */
      this[_0x72da("0x15")] = null;
      this[_0x72da("0x44")]();
    },
    "setUI" : function() {
      var _0x265c2e = this;
      gm(_0x72da("0x9e"))["each"](function() {
        var requireCompilers = gm(this);
        var code = requireCompilers[_0x72da("0x1d")](_0x72da("0x9f"));
        requireCompilers[_0x72da("0xa0")](window[_0x72da("0xa1")](code));
      });
      gm(_0x72da("0x5d"))["on"](_0x72da("0xa2"), function() {
        _0x265c2e["handleChangeMode"]();
      });
      gm(_0x72da("0xa3"))["on"](_0x72da("0xa4"), function(canCreateDiscussions) {
        canCreateDiscussions[_0x72da("0xa5")]();
        _0x265c2e[_0x72da("0xa6")]();
      });
      gm(_0x72da("0xa7"))["on"]("click", function(canCreateDiscussions) {
        canCreateDiscussions[_0x72da("0xa5")]();
        _0x265c2e["spectate"]();
      });
      gm("#create-party-btn-2")["on"](_0x72da("0xa4"), function(result) {
        result["preventDefault"]();
        _0x265c2e[_0x72da("0xa8")]();
      });
      $(_0x72da("0xa9"))["on"](_0x72da("0xa4"), function(canCreateDiscussions) {
        canCreateDiscussions[_0x72da("0xa5")]();
        _0x265c2e["joinParty"](gm(_0x72da("0xaa"))[_0x72da("0x4c")]());
      });
      /**
       * @return {undefined}
       */
      window[_0x72da("0xab")] = function() {
        gm(_0x72da("0xac"))[_0x72da("0xad")]();
      };
    },
    "init" : function() {
      var _0x23c168 = this;
      this[_0x72da("0xae")]();
      this[_0x72da("0xaf")]();
      this[_0x72da("0xb0")]();
      this[_0x72da("0xb1")]();
      this[_0x72da("0xb2")]();
      this["checkRegion"]();
      setInterval(function() {
        _0x23c168[_0x72da("0xb0")]();
      }, 18E4);
    }
  };
  /**
   * @return {undefined}
   */
  window[_0x72da("0xb3")] = function() {
    if (null !== window[_0x72da("0x33")][_0x72da("0x34")]("storeObjectInfo")) {
      data = JSON["parse"](window[_0x72da("0x33")][_0x72da("0x34")]("storeObjectInfo"));
    }
  };
  /**
   * @return {undefined}
   */
  window[_0x72da("0xf")] = function() {
    window[_0x72da("0x33")][_0x72da("0x43")](_0x72da("0xb4"), JSON[_0x72da("0xb5")](data));
  };
  /**
   * @return {undefined}
   */
  window[_0x72da("0x24")] = function() {
    if (_0x72da("0x26") === data[_0x72da("0xe")] && PL$12) {
      PL$12[_0x72da("0xb6")]();
    }
    delete window[_0x72da("0x33")][_0x72da("0xb4")];
    gm(_0x72da("0x1e"))[_0x72da("0x1d")](_0x72da("0x1f"), "0");
    gm(_0x72da("0x20"))[_0x72da("0x21")]("0%");
    master["logout"]();
  };
  /**
   * @return {undefined}
   */
  window["facebookLogin"] = function() {
    alert("You seem to have something blocking Facebook on your browser, please check for any extensions");
  };
  /**
   * @return {undefined}
   */
  window[_0x72da("0xb7")] = function() {
    window["FB"][_0x72da("0xb8")]({
      "appId" : headers[_0x72da("0xb9")],
      "cookie" : true,
      "xfbml" : true,
      "status" : true,
      "version" : "v2.8"
    });
    if (true) {
      window[_0x72da("0xb3")]();
      if ("1" === data["loginIntent"] && _0x72da("0x8") === data[_0x72da("0xe")]) {
        window["FB"]["getLoginStatus"](function(finalBlobUrl) {
          if ("connected" === finalBlobUrl[_0x72da("0x13")]) {
            createImage(finalBlobUrl);
          } else {
            window["logout"]();
          }
        });
      }
      /** @type {function(?): ?} */
      window[_0x72da("0x23")] = loadData;
      /** @type {function(?): ?} */
      window[_0x72da("0x9b")] = loadData;
    }
  };
  /**
   * @return {undefined}
   */
  window[_0x72da("0xba")] = function() {
    window[_0x72da("0xb3")]();
    window[_0x72da("0xbb")]["load"](_0x72da("0xbc"), function() {
      PL$12 = window[_0x72da("0xbb")]["auth2"][_0x72da("0xb8")]({
        "client_id" : headers[_0x72da("0xbd")],
        "cookie_policy" : "single_host_origin",
        "scope" : _0x72da("0xbe"),
        "app_package_name" : _0x72da("0xbf")
      });
      var PL$8 = document[_0x72da("0xc0")](_0x72da("0xc1"));
      PL$8[_0x72da("0xc2")]("click", function() {
        /** @type {string} */
        data[_0x72da("0xd")] = "1";
        data["context"] = _0x72da("0x26");
        window[_0x72da("0xf")]();
      });
      PL$12["attachClickHandler"](PL$8);
      PL$12[_0x72da("0x25")][_0x72da("0xc3")](customPreprocessor);
      PL$12["then"](callback);
    });
  };
}(window, window[_0x72da("0xc4")]);
