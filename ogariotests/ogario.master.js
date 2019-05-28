'use strict';
/** @type {!Array} */
var _0x4d9c = ["token", "backoffPeriod", "connect", "serverIP", "push", "length", "charCodeAt", "application/octet-stream", "https://", "master_url", "setRequestHeader", "Accept", "text/plain", "q=0.01", "Content-Type", "x-support-proto-version", "x-client-version", "json", "POST", "proto_version", "setPartyState", ":party", "indexOf", "partyToken", "endpoint_version", "/getToken", "endpoint", "updatePartyToken", "#helloContainer", "data-party-state", "?party_id=", "recaptchaResponse", "substring", 
"sendNick", "sendSpectate", "#party-token, .party-token", "joinParty", "hash", "#teams", "#experimental", "history", "replaceState", "document", "title", "facebookLogin", "context", "accessToken", "google", "sendFbToken", "[data-itr]", "html", "i18n", "change", "handleChangeMode", ".btn-play, .btn-play-guest", "click", "preventDefault", "setNick", ".btn-spectate", "createParty", "#party-token", "toggleSocialLogin", "toggle", "setUI", "getRegionNames", "refreshRegionInfo", "checkHash", "getRegionCode", 
"checkRegion", "getStorage", "storeObjectInfo", "updateStorage", "logout", "signOut", "data-logged-in", ".progress-bar-striped", "width", "You seem to have something blocking Facebook on your browser, please check for any extensions", "fbAsyncInit", "init", "fb_app_id", "v2.8", "status", "facebookRelogin", "loginIntent", "login", "public_profile, email", "connected", "api", "/me/picture?width=180&height=180", "url", "userInfo", "picture", "data", "src", "100%", "gapi", "auth2", "gplus_client_id", 
"single_host_origin", "profile", "getElementById", "gplusLogin", "addEventListener", "attachClickHandler", "currentUser", "then", "isSignedIn", "signIn", "getAuthResponse", "id_token", "getBasicProfile", "doLoginWithGPlus", ".agario-profile-picture", "jQuery", "JP-Tokyo", "EU-London", "SG-Singapore", "US-Atlanta", "BR-Brazil", "CN-China", "RU-Russia", "TK-Turkey", "facebook", "12.0.1", "master", ":ffa", "client_version", "client_version_string", "localStorage", "getItem", "ogarioClientVersionString", 
"clientVersionString", "clientVersion", "parseClientVersion", "ajax", "//agar.io/mc/agario.js", "log", "setClientVersion", "GET", "[Master] Changing client version...", "core", "setItem", "reconnect", "split", "location", "setRegion", "checkPartyHash", "get", "//gc.agar.io", "setRegionCode", "region", "val", "#region", "#locationKnown", "append", "#locationUnknown", "makeMasterSimpleRequest", "text", "hasOwnProperty", '#region option[value="', "regionNames", "numPlayers", "#region option", "applyGameMode", 
"gameMode", "#helloContainer, #overlays-hud", "attr", "data-gamemode", "#gamemode", "replaceHistoryState", "encodeURIComponent", "replace", "setGameMode", "now", "disconnect", "findServer", "findBattleRoyaleServer", "setRequestMsg", "findingServer", "makeMasterRequest", "curValidFindServer", "endpoints", "0.0.0.0:0", "https"];
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
    var _0x3042f6 = target["updateCookie"]();
    if (!_0x3042f6) {
      target["setCookie"](["*"], "counter", 1);
    } else {
      if (_0x3042f6) {
        array = target["getCookie"](null, "counter");
      } else {
        target["removeCookie"]();
      }
    }
  };
  build();
})(_0x4d9c, 485);
/**
 * @param {string} i
 * @param {?} parameter1
 * @return {?}
 */
var _0x47b1 = function(i, parameter1) {
  /** @type {number} */
  i = i - 0;
  var oembedView = _0x4d9c[i];
  return oembedView;
};
(function(object, require) {
  /**
   * @return {undefined}
   */
  function editorSocket() {
    if (_0x569461) {
      object[_0x47b1("0x8b")]();
      if (message["loginIntent"] === "1" && message[_0x47b1("0x73")] === _0x47b1("0x8")) {
        object["FB"]["getLoginStatus"](function(mode) {
          if (mode[_0x47b1("0x98")] === "connected") {
            parse(mode);
          } else {
            object[_0x47b1("0x8e")]();
          }
        });
      }
      /** @type {function(?): ?} */
      object[_0x47b1("0x99")] = initialize;
      /** @type {function(?): ?} */
      object["facebookLogin"] = initialize;
    }
  }
  /**
   * @param {?} keyBindingMapper
   * @return {?}
   */
  function initialize(keyBindingMapper) {
    if (object["FB"] === null) {
      alert(_0x47b1("0x93"));
    } else {
      /** @type {string} */
      message[_0x47b1("0x9a")] = "1";
      /** @type {string} */
      message["context"] = "facebook";
      object[_0x47b1("0x8d")]();
      return object["FB"][_0x47b1("0x9b")](function(argvString) {
        parse(argvString);
      }, {
        "scope" : _0x47b1("0x9c")
      }), !![];
    }
  }
  /**
   * @param {!Object} response
   * @return {undefined}
   */
  function parse(response) {
    if (response[_0x47b1("0x98")] === _0x47b1("0x9d")) {
      var rangechange = response["authResponse"][_0x47b1("0x74")];
      if (rangechange) {
        master["doLoginWithFB"](rangechange);
        object["FB"][_0x47b1("0x9e")](_0x47b1("0x9f"), function(mdtRow) {
          if (mdtRow["data"] && mdtRow["data"][_0x47b1("0xa0")]) {
            message[_0x47b1("0xa1")][_0x47b1("0xa2")] = mdtRow[_0x47b1("0xa3")][_0x47b1("0xa0")];
            require(".agario-profile-picture")[_0x47b1("0x34")](_0x47b1("0xa4"), mdtRow[_0x47b1("0xa3")][_0x47b1("0xa0")]);
            object[_0x47b1("0x8d")]();
          }
        });
        require(_0x47b1("0x62"))[_0x47b1("0x34")](_0x47b1("0x90"), "1");
        require(_0x47b1("0x91"))[_0x47b1("0x92")](_0x47b1("0xa5"));
      } else {
        if (_0x48a52d < 3) {
          _0x48a52d++;
          object[_0x47b1("0x99")]();
          object[_0x47b1("0x8e")]();
        }
      }
    }
  }
  /**
   * @return {undefined}
   */
  function initExtentmap() {
    object[_0x47b1("0xa6")]["load"](_0x47b1("0xa7"), function() {
      params = object[_0x47b1("0xa6")][_0x47b1("0xa7")][_0x47b1("0x95")]({
        "client_id" : headers[_0x47b1("0xa8")],
        "cookie_policy" : _0x47b1("0xa9"),
        "scope" : _0x47b1("0xaa"),
        "app_package_name" : "com.miniclip.agar.io"
      });
      var x = document[_0x47b1("0xab")](_0x47b1("0xac"));
      x[_0x47b1("0xad")]("click", function() {
        /** @type {string} */
        message[_0x47b1("0x9a")] = "1";
        /** @type {string} */
        message["context"] = "google";
        object[_0x47b1("0x8d")]();
      });
      params[_0x47b1("0xae")](x);
      params[_0x47b1("0xaf")]["listen"](init);
      params[_0x47b1("0xb0")](normalizeProvider);
    });
  }
  /**
   * @return {undefined}
   */
  function normalizeProvider() {
    params["currentUser"][_0x47b1("0x21")]();
    if (message[_0x47b1("0x9a")] === "1" && message[_0x47b1("0x73")] === "google") {
      if (!params[_0x47b1("0xb1")][_0x47b1("0x21")]()) {
        params[_0x47b1("0xb2")]();
      }
    }
  }
  /**
   * @param {?} id
   * @return {undefined}
   */
  function init(id) {
    if (!id || !params) {
      return;
    }
    if (message[_0x47b1("0x9a")] === "1" && message[_0x47b1("0x73")] === _0x47b1("0x75")) {
      if (params[_0x47b1("0xb1")][_0x47b1("0x21")]()) {
        var widgetArr = id[_0x47b1("0xb3")]();
        var _maskLayer = widgetArr[_0x47b1("0xb4")];
        var _0x4f1679 = id[_0x47b1("0xb5")]();
        var artistTrack = _0x4f1679["getImageUrl"]();
        master[_0x47b1("0xb6")](_maskLayer);
        if (artistTrack) {
          message[_0x47b1("0xa1")]["picture"] = artistTrack;
          object[_0x47b1("0x8d")]();
          require(_0x47b1("0xb7"))[_0x47b1("0x34")]("src", artistTrack);
        }
        require(_0x47b1("0x62"))["attr"](_0x47b1("0x90"), "1");
        require(_0x47b1("0x91"))["width"](_0x47b1("0xa5"));
      }
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
      var _0x296519 = ~-4 >> 1 + 255 % 0;
      if (func["indexOf"]((!![] + "")[3]) !== _0x296519) {
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
  var obj = {
    "AF" : _0x47b1("0x0"),
    "AX" : _0x47b1("0x1"),
    "AL" : _0x47b1("0x1"),
    "DZ" : _0x47b1("0x1"),
    "AS" : _0x47b1("0x2"),
    "AD" : _0x47b1("0x1"),
    "AO" : _0x47b1("0x1"),
    "AI" : _0x47b1("0x3"),
    "AG" : "US-Atlanta",
    "AR" : _0x47b1("0x4"),
    "AM" : _0x47b1("0x0"),
    "AW" : _0x47b1("0x3"),
    "AU" : _0x47b1("0x2"),
    "AT" : "EU-London",
    "AZ" : _0x47b1("0x0"),
    "BS" : _0x47b1("0x3"),
    "BH" : _0x47b1("0x0"),
    "BD" : _0x47b1("0x0"),
    "BB" : "US-Atlanta",
    "BY" : "EU-London",
    "BE" : "EU-London",
    "BZ" : _0x47b1("0x3"),
    "BJ" : _0x47b1("0x1"),
    "BM" : _0x47b1("0x3"),
    "BT" : "JP-Tokyo",
    "BO" : _0x47b1("0x4"),
    "BQ" : _0x47b1("0x3"),
    "BA" : _0x47b1("0x1"),
    "BW" : "EU-London",
    "BR" : _0x47b1("0x4"),
    "IO" : "JP-Tokyo",
    "VG" : _0x47b1("0x3"),
    "BN" : _0x47b1("0x0"),
    "BG" : _0x47b1("0x1"),
    "BF" : "EU-London",
    "BI" : _0x47b1("0x1"),
    "KH" : "JP-Tokyo",
    "CM" : _0x47b1("0x1"),
    "CA" : "US-Atlanta",
    "CV" : "EU-London",
    "KY" : _0x47b1("0x3"),
    "CF" : _0x47b1("0x1"),
    "TD" : "EU-London",
    "CL" : _0x47b1("0x4"),
    "CN" : _0x47b1("0x5"),
    "CX" : _0x47b1("0x0"),
    "CC" : _0x47b1("0x0"),
    "CO" : _0x47b1("0x4"),
    "KM" : _0x47b1("0x1"),
    "CD" : _0x47b1("0x1"),
    "CG" : _0x47b1("0x1"),
    "CK" : _0x47b1("0x2"),
    "CR" : "US-Atlanta",
    "CI" : _0x47b1("0x1"),
    "HR" : "EU-London",
    "CU" : _0x47b1("0x3"),
    "CW" : _0x47b1("0x3"),
    "CY" : "JP-Tokyo",
    "CZ" : _0x47b1("0x1"),
    "DK" : _0x47b1("0x1"),
    "DJ" : _0x47b1("0x1"),
    "DM" : _0x47b1("0x3"),
    "DO" : "US-Atlanta",
    "EC" : _0x47b1("0x4"),
    "EG" : "EU-London",
    "SV" : _0x47b1("0x3"),
    "GQ" : _0x47b1("0x1"),
    "ER" : _0x47b1("0x1"),
    "EE" : _0x47b1("0x1"),
    "ET" : _0x47b1("0x1"),
    "FO" : "EU-London",
    "FK" : "BR-Brazil",
    "FJ" : _0x47b1("0x2"),
    "FI" : "EU-London",
    "FR" : _0x47b1("0x1"),
    "GF" : _0x47b1("0x4"),
    "PF" : _0x47b1("0x2"),
    "GA" : _0x47b1("0x1"),
    "GM" : _0x47b1("0x1"),
    "GE" : "JP-Tokyo",
    "DE" : "EU-London",
    "GH" : _0x47b1("0x1"),
    "GI" : _0x47b1("0x1"),
    "GR" : _0x47b1("0x1"),
    "GL" : _0x47b1("0x3"),
    "GD" : _0x47b1("0x3"),
    "GP" : _0x47b1("0x3"),
    "GU" : "SG-Singapore",
    "GT" : _0x47b1("0x3"),
    "GG" : _0x47b1("0x1"),
    "GN" : "EU-London",
    "GW" : _0x47b1("0x1"),
    "GY" : _0x47b1("0x4"),
    "HT" : _0x47b1("0x3"),
    "VA" : "EU-London",
    "HN" : "US-Atlanta",
    "HK" : _0x47b1("0x0"),
    "HU" : _0x47b1("0x1"),
    "IS" : _0x47b1("0x1"),
    "IN" : _0x47b1("0x0"),
    "ID" : "JP-Tokyo",
    "IR" : _0x47b1("0x0"),
    "IQ" : _0x47b1("0x0"),
    "IE" : _0x47b1("0x1"),
    "IM" : _0x47b1("0x1"),
    "IL" : _0x47b1("0x0"),
    "IT" : "EU-London",
    "JM" : _0x47b1("0x3"),
    "JP" : _0x47b1("0x0"),
    "JE" : _0x47b1("0x1"),
    "JO" : _0x47b1("0x0"),
    "KZ" : "JP-Tokyo",
    "KE" : _0x47b1("0x1"),
    "KI" : _0x47b1("0x2"),
    "KP" : _0x47b1("0x0"),
    "KR" : _0x47b1("0x0"),
    "KW" : "JP-Tokyo",
    "KG" : _0x47b1("0x0"),
    "LA" : "JP-Tokyo",
    "LV" : _0x47b1("0x1"),
    "LB" : _0x47b1("0x0"),
    "LS" : _0x47b1("0x1"),
    "LR" : "EU-London",
    "LY" : _0x47b1("0x1"),
    "LI" : _0x47b1("0x1"),
    "LT" : "EU-London",
    "LU" : _0x47b1("0x1"),
    "MO" : _0x47b1("0x0"),
    "MK" : _0x47b1("0x1"),
    "MG" : _0x47b1("0x1"),
    "MW" : _0x47b1("0x1"),
    "MY" : _0x47b1("0x0"),
    "MV" : "JP-Tokyo",
    "ML" : "EU-London",
    "MT" : _0x47b1("0x1"),
    "MH" : _0x47b1("0x2"),
    "MQ" : _0x47b1("0x3"),
    "MR" : _0x47b1("0x1"),
    "MU" : _0x47b1("0x1"),
    "YT" : _0x47b1("0x1"),
    "MX" : "US-Atlanta",
    "FM" : _0x47b1("0x2"),
    "MD" : "EU-London",
    "MC" : "EU-London",
    "MN" : _0x47b1("0x0"),
    "ME" : "EU-London",
    "MS" : _0x47b1("0x3"),
    "MA" : "EU-London",
    "MZ" : _0x47b1("0x1"),
    "MM" : _0x47b1("0x0"),
    "NA" : _0x47b1("0x1"),
    "NR" : _0x47b1("0x2"),
    "NP" : _0x47b1("0x0"),
    "NL" : _0x47b1("0x1"),
    "NC" : _0x47b1("0x2"),
    "NZ" : _0x47b1("0x2"),
    "NI" : "US-Atlanta",
    "NE" : _0x47b1("0x1"),
    "NG" : _0x47b1("0x1"),
    "NU" : _0x47b1("0x2"),
    "NF" : _0x47b1("0x2"),
    "MP" : _0x47b1("0x2"),
    "NO" : _0x47b1("0x1"),
    "OM" : _0x47b1("0x0"),
    "PK" : _0x47b1("0x0"),
    "PW" : _0x47b1("0x2"),
    "PS" : "JP-Tokyo",
    "PA" : "US-Atlanta",
    "PG" : _0x47b1("0x2"),
    "PY" : _0x47b1("0x4"),
    "PE" : _0x47b1("0x4"),
    "PH" : "JP-Tokyo",
    "PN" : "SG-Singapore",
    "PL" : "EU-London",
    "PT" : _0x47b1("0x1"),
    "PR" : _0x47b1("0x3"),
    "QA" : _0x47b1("0x0"),
    "RE" : _0x47b1("0x1"),
    "RO" : _0x47b1("0x1"),
    "RU" : _0x47b1("0x6"),
    "RW" : _0x47b1("0x1"),
    "BL" : _0x47b1("0x3"),
    "SH" : _0x47b1("0x1"),
    "KN" : _0x47b1("0x3"),
    "LC" : _0x47b1("0x3"),
    "MF" : _0x47b1("0x3"),
    "PM" : _0x47b1("0x3"),
    "VC" : _0x47b1("0x3"),
    "WS" : "SG-Singapore",
    "SM" : _0x47b1("0x1"),
    "ST" : "EU-London",
    "SA" : _0x47b1("0x1"),
    "SN" : _0x47b1("0x1"),
    "RS" : _0x47b1("0x1"),
    "SC" : _0x47b1("0x1"),
    "SL" : _0x47b1("0x1"),
    "SG" : _0x47b1("0x0"),
    "SX" : "US-Atlanta",
    "SK" : "EU-London",
    "SI" : "EU-London",
    "SB" : _0x47b1("0x2"),
    "SO" : _0x47b1("0x1"),
    "ZA" : _0x47b1("0x1"),
    "SS" : _0x47b1("0x1"),
    "ES" : _0x47b1("0x1"),
    "LK" : _0x47b1("0x0"),
    "SD" : _0x47b1("0x1"),
    "SR" : _0x47b1("0x4"),
    "SJ" : _0x47b1("0x1"),
    "SZ" : _0x47b1("0x1"),
    "SE" : "EU-London",
    "CH" : "EU-London",
    "SY" : _0x47b1("0x1"),
    "TW" : _0x47b1("0x0"),
    "TJ" : "JP-Tokyo",
    "TZ" : _0x47b1("0x1"),
    "TH" : _0x47b1("0x0"),
    "TL" : _0x47b1("0x0"),
    "TG" : _0x47b1("0x1"),
    "TK" : _0x47b1("0x2"),
    "TO" : _0x47b1("0x2"),
    "TT" : _0x47b1("0x3"),
    "TN" : _0x47b1("0x1"),
    "TR" : _0x47b1("0x7"),
    "TM" : "JP-Tokyo",
    "TC" : _0x47b1("0x3"),
    "TV" : _0x47b1("0x2"),
    "UG" : _0x47b1("0x1"),
    "UA" : _0x47b1("0x1"),
    "AE" : _0x47b1("0x1"),
    "GB" : _0x47b1("0x1"),
    "US" : _0x47b1("0x3"),
    "UM" : _0x47b1("0x2"),
    "VI" : _0x47b1("0x3"),
    "UY" : _0x47b1("0x4"),
    "UZ" : _0x47b1("0x0"),
    "VU" : _0x47b1("0x2"),
    "VE" : _0x47b1("0x4"),
    "VN" : _0x47b1("0x0"),
    "WF" : _0x47b1("0x2"),
    "EH" : _0x47b1("0x1"),
    "YE" : "JP-Tokyo",
    "ZM" : _0x47b1("0x1"),
    "ZW" : _0x47b1("0x1")
  };
  var message = {
    "context" : null,
    "defaultProvider" : _0x47b1("0x8"),
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
    "gplus_client_id" : "686981379285-oroivr8u2ag1dtm3ntcs6vi05i3cpv0j.apps.googleusercontent.com",
    "master_url" : "webbouncer-live-v7-0.agario.miniclippt.com",
    "endpoint_version" : "v4",
    "proto_version" : _0x47b1("0x9"),
    "client_version" : 30500,
    "client_version_string" : "3.5.0"
  };
  /** @type {boolean} */
  var _0x569461 = ![];
  /** @type {number} */
  var _0x48a52d = 0;
  /** @type {null} */
  var params = null;
  object[_0x47b1("0xa")] = {
    "ws" : null,
    "serverIP" : null,
    "endpoint" : null,
    "region" : "",
    "gameMode" : _0x47b1("0xb"),
    "partyToken" : "",
    "findingServer" : 0,
    "curValidFindServer" : 0,
    "backoffPeriod" : 500,
    "regionNames" : {},
    "context" : "",
    "accessToken" : null,
    "clientVersion" : headers[_0x47b1("0xc")],
    "clientVersionString" : headers[_0x47b1("0xd")],
    "getClientVersion" : function() {
      if (object[_0x47b1("0xe")][_0x47b1("0xf")](_0x47b1("0x10")) !== null) {
        this[_0x47b1("0x11")] = object[_0x47b1("0xe")][_0x47b1("0xf")](_0x47b1("0x10"));
        this[_0x47b1("0x12")] = this[_0x47b1("0x13")](this[_0x47b1("0x11")]);
      }
      var queue = this;
      require[_0x47b1("0x14")](_0x47b1("0x15"), {
        "error" : function() {
        },
        "success" : function(result) {
          var object = result["match"](/versionString="(\d+\.\d+\.\d+)"/);
          if (object) {
            var result = object[1];
            var data = queue[_0x47b1("0x13")](result);
            console[_0x47b1("0x16")]("[Master] Current client version:", data, result);
            queue[_0x47b1("0x17")](data, result);
          }
        },
        "dataType" : "text",
        "method" : _0x47b1("0x18"),
        "cache" : ![],
        "crossDomain" : !![]
      });
    },
    "setClientVersion" : function(clientVersion, serverVersion) {
      console[_0x47b1("0x16")]("[Master] Your client version:", this[_0x47b1("0x12")], this[_0x47b1("0x11")]);
      if (this[_0x47b1("0x12")] != clientVersion) {
        console[_0x47b1("0x16")](_0x47b1("0x19"));
        this[_0x47b1("0x12")] = clientVersion;
        this[_0x47b1("0x11")] = serverVersion;
        if (object[_0x47b1("0x1a")]) {
          object[_0x47b1("0x1a")][_0x47b1("0x17")](clientVersion, serverVersion);
        }
        object[_0x47b1("0xe")][_0x47b1("0x1b")](_0x47b1("0x10"), serverVersion);
        this[_0x47b1("0x1c")](!![]);
      }
    },
    "parseClientVersion" : function(canCreateDiscussions) {
      return parseInt(canCreateDiscussions[_0x47b1("0x1d")](".")[0]) * 1E4 + parseInt(canCreateDiscussions[_0x47b1("0x1d")](".")[1]) * 100 + parseInt(canCreateDiscussions[_0x47b1("0x1d")](".")[2]);
    },
    "getRegionCode" : function() {
      var artistTrack = object[_0x47b1("0xe")][_0x47b1("0xf")](_0x47b1("0x1e"));
      if (artistTrack) {
        this[_0x47b1("0x1f")](artistTrack, ![]);
        if (!this[_0x47b1("0x20")]()) {
          this[_0x47b1("0x1c")]();
        }
        return;
      }
      var command_codes = this;
      require[_0x47b1("0x21")](_0x47b1("0x22"), function(canCreateDiscussions) {
        var widgetArr = canCreateDiscussions[_0x47b1("0x1d")](" ");
        var _maskLayer = widgetArr[0];
        command_codes[_0x47b1("0x23")](_maskLayer);
      }, "text");
    },
    "setRegionCode" : function(key) {
      if (obj["hasOwnProperty"](key)) {
        this[_0x47b1("0x1f")](obj[key], ![]);
        if (!this["checkPartyHash"]()) {
          this[_0x47b1("0x1c")]();
        }
      }
    },
    "setRegion" : function(left, height) {
      if (height == null) {
        /** @type {boolean} */
        height = !![];
      }
      if (!left) {
        return;
      }
      this[_0x47b1("0x24")] = left;
      object[_0x47b1("0xe")][_0x47b1("0x1b")](_0x47b1("0x1e"), left);
      if (require("#region")[_0x47b1("0x25")]() !== left) {
        require(_0x47b1("0x26"))[_0x47b1("0x25")](left);
      }
      if (height) {
        this[_0x47b1("0x1c")]();
      }
    },
    "checkRegion" : function() {
      var CheckDailyStat = require(_0x47b1("0x26"));
      var pathStub = CheckDailyStat[_0x47b1("0x25")]();
      if (pathStub) {
        object[_0x47b1("0xe")][_0x47b1("0x1b")]("location", pathStub);
      } else {
        pathStub = object[_0x47b1("0xe")]["getItem"]("location");
        if (pathStub) {
          $(_0x47b1("0x26"))[_0x47b1("0x25")](pathStub);
        }
      }
      if (CheckDailyStat[_0x47b1("0x25")]()) {
        require(_0x47b1("0x27"))[_0x47b1("0x28")](CheckDailyStat);
      } else {
        require(_0x47b1("0x29"))[_0x47b1("0x28")](CheckDailyStat);
      }
    },
    "refreshRegionInfo" : function() {
      var drawnCurrentBalls = this;
      this[_0x47b1("0x2a")]("info", _0x47b1("0x2b"), function(data) {
        data = JSON["parse"](data);
        var collection = data["regions"];
        var fqPropertyName;
        for (fqPropertyName in collection) {
          if (collection[_0x47b1("0x2c")](fqPropertyName)) {
            require(_0x47b1("0x2d") + fqPropertyName + '"]')["text"](drawnCurrentBalls[_0x47b1("0x2e")][fqPropertyName] + " (" + collection[fqPropertyName][_0x47b1("0x2f")] + ")");
          }
        }
      });
    },
    "getRegionNames" : function() {
      var packagesPromises = this;
      require(_0x47b1("0x30"))["each"](function() {
        var packageId = require(this)[_0x47b1("0x25")]();
        var uninstalling = require(this)["text"]();
        if (!packagesPromises["regionNames"][_0x47b1("0x2c")](packageId)) {
          packagesPromises[_0x47b1("0x2e")][packageId] = uninstalling;
        }
      });
    },
    "setGameMode" : function(val, opt_validate) {
      if (opt_validate == null) {
        /** @type {boolean} */
        opt_validate = !![];
      }
      this[_0x47b1("0x31")](val);
      this[_0x47b1("0x32")] = val;
      if (opt_validate) {
        this[_0x47b1("0x1c")]();
      }
    },
    "applyGameMode" : function(placement) {
      require(_0x47b1("0x33"))[_0x47b1("0x34")](_0x47b1("0x35"), placement);
      require(_0x47b1("0x36"))[_0x47b1("0x25")](placement);
      if (placement !== ":party") {
        this[_0x47b1("0x37")]("/#" + object[_0x47b1("0x38")](placement[_0x47b1("0x39")](":", "")));
      }
    },
    "handleChangeMode" : function() {
      var artistTrack = require(_0x47b1("0x36"))[_0x47b1("0x25")]();
      this[_0x47b1("0x3a")](artistTrack);
    },
    "findServer" : function(id, cb) {
      var _0xcbb73c = Date[_0x47b1("0x3b")]();
      if (_0xcbb73c - this["findingServer"] < 500) {
        return;
      }
      if (object[_0x47b1("0x1a")]) {
        object[_0x47b1("0x1a")][_0x47b1("0x3c")]();
      }
      var picKey = _0x47b1("0x3d");
      if (id == null) {
        /** @type {string} */
        id = "";
      }
      if (cb == null) {
        cb = _0x47b1("0xb");
      } else {
        if (cb === ":battleroyale") {
          picKey = _0x47b1("0x3e");
        }
      }
      var self = this;
      var query = this[_0x47b1("0x3f")](id, cb);
      /** @type {number} */
      var oldMenu = ++this["curValidFindServer"];
      this[_0x47b1("0x40")] = _0xcbb73c;
      this[_0x47b1("0x41")](headers["endpoint_version"] + "/" + picKey, query, function(data) {
        if (oldMenu != self[_0x47b1("0x42")]) {
          return;
        }
        var headers = data[_0x47b1("0x43")];
        if (headers === null || headers["https"] === _0x47b1("0x44")) {
          self["findServer"](id, cb);
          return;
        }
        self["serverIP"] = headers[_0x47b1("0x45")];
        if (data[_0x47b1("0x46")] !== null) {
          self["partyToken"] = data[_0x47b1("0x46")];
        }
        /** @type {number} */
        self[_0x47b1("0x47")] = 500;
        self[_0x47b1("0x48")](self[_0x47b1("0x49")]);
      }, function() {
        self[_0x47b1("0x47")] *= 2;
        setTimeout(function() {
          self[_0x47b1("0x3d")](id, cb);
        }, self[_0x47b1("0x47")]);
      });
    },
    "setRequestMsg" : function(one, two, three) {
      /**
       * @param {!Object} fn
       * @return {undefined}
       */
      var require = function(fn) {
        PL$24[_0x47b1("0x4a")](fn[_0x47b1("0x4b")]);
        /** @type {number} */
        var PL$26 = 0;
        for (; PL$26 < fn[_0x47b1("0x4b")]; PL$26++) {
          PL$24[_0x47b1("0x4a")](fn[_0x47b1("0x4c")](PL$26));
        }
      };
      /** @type {!Array} */
      var PL$24 = [10, 4 + one[_0x47b1("0x4b")] + two["length"], 10];
      require(one);
      PL$24[_0x47b1("0x4a")](18);
      require(two);
      if (three) {
        PL$24["push"](26, 8, 10);
        require(three);
      }
      return new Uint8Array(PL$24);
    },
    "makeMasterRequest" : function(context, objects, callback, event, XMLHttpRequest) {
      var header = this;
      if (XMLHttpRequest == null) {
        XMLHttpRequest = _0x47b1("0x4d");
      }
      require[_0x47b1("0x14")](_0x47b1("0x4e") + headers[_0x47b1("0x4f")] + "/" + context, {
        "beforeSend" : function(xhr) {
          xhr[_0x47b1("0x50")](_0x47b1("0x51"), _0x47b1("0x52"));
          xhr[_0x47b1("0x50")](_0x47b1("0x51"), "*/*");
          xhr[_0x47b1("0x50")](_0x47b1("0x51"), _0x47b1("0x53"));
          xhr["setRequestHeader"](_0x47b1("0x54"), XMLHttpRequest);
          xhr[_0x47b1("0x50")](_0x47b1("0x55"), headers["proto_version"]);
          xhr["setRequestHeader"](_0x47b1("0x56"), header[_0x47b1("0x12")]);
          return !![];
        },
        "error" : function() {
          if (event) {
            event();
          }
        },
        "success" : function(playlistCopy) {
          callback(playlistCopy);
        },
        "dataType" : _0x47b1("0x57"),
        "method" : _0x47b1("0x58"),
        "data" : objects,
        "processData" : ![],
        "cache" : ![],
        "crossDomain" : !![]
      });
    },
    "makeMasterSimpleRequest" : function(courseId, cmid, refresh, callback) {
      var header = this;
      require["ajax"](_0x47b1("0x4e") + headers["master_url"] + "/" + courseId, {
        "beforeSend" : function(xhr) {
          xhr["setRequestHeader"](_0x47b1("0x55"), headers[_0x47b1("0x59")]);
          xhr[_0x47b1("0x50")](_0x47b1("0x56"), header[_0x47b1("0x12")]);
          return !![];
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
        "method" : _0x47b1("0x18"),
        "cache" : ![],
        "crossDomain" : !![]
      });
    },
    "createParty" : function() {
      this[_0x47b1("0x5a")]("3");
      this["setGameMode"](_0x47b1("0x5b"));
    },
    "joinParty" : function(name) {
      var _0x3eb9d6 = this;
      if (name[_0x47b1("0x5c")]("#") != -1) {
        var shortUri = name["split"]("#")[1];
        name = shortUri;
      }
      this[_0x47b1("0x3a")](":party", ![]);
      /** @type {!Object} */
      this[_0x47b1("0x5d")] = name;
      this["replaceHistoryState"]("/#" + object[_0x47b1("0x38")](name));
      var _name = this["setRequestMsg"](this[_0x47b1("0x24")], "", name);
      this[_0x47b1("0x41")](headers[_0x47b1("0x5e")] + _0x47b1("0x5f"), _name, function(canCreateDiscussions) {
        _0x3eb9d6[_0x47b1("0x60")] = canCreateDiscussions[_0x47b1("0x43")]["https"];
        _0x3eb9d6["setPartyState"]("9");
      }, function() {
        _0x3eb9d6[_0x47b1("0x5a")]("6");
      });
    },
    "setPartyState" : function(mmCoreSplitViewBlock) {
      if (mmCoreSplitViewBlock === "9") {
        this[_0x47b1("0x61")]();
        this[_0x47b1("0x3a")](_0x47b1("0x5b"), ![]);
        this["connect"](this["endpoint"]);
        /** @type {string} */
        mmCoreSplitViewBlock = "5";
      }
      require(_0x47b1("0x62"))[_0x47b1("0x34")](_0x47b1("0x63"), mmCoreSplitViewBlock);
    },
    "connect" : function(b) {
      console[_0x47b1("0x16")]("[Master] Connect to:", b);
      /** @type {string} */
      this["ws"] = "wss://" + b;
      if (this[_0x47b1("0x32")] === _0x47b1("0x5b") && this["partyToken"]) {
        this["ws"] += _0x47b1("0x64") + object[_0x47b1("0x38")](this[_0x47b1("0x5d")]);
      }
      if (object[_0x47b1("0x1a")]) {
        object[_0x47b1("0x1a")][_0x47b1("0x48")](this["ws"]);
      }
    },
    "reconnect" : function(sdkVersion) {
      if (!this[_0x47b1("0x24")]) {
        return;
      }
      if (sdkVersion && this[_0x47b1("0x49")]) {
        this[_0x47b1("0x48")](this[_0x47b1("0x49")]);
      } else {
        this["findServer"](this[_0x47b1("0x24")], this[_0x47b1("0x32")]);
      }
    },
    "onConnect" : function() {
      if (this[_0x47b1("0x32")] === _0x47b1("0x5b")) {
        this["updatePartyToken"]();
      }
    },
    "onDisconnect" : function() {
      this["reconnect"]();
    },
    "recaptchaRequested" : function() {
      requestCaptcha(!![]);
    },
    "sendRecaptchaResponse" : function(mmCoreSplitViewBlock) {
      if (object[_0x47b1("0x1a")]) {
        object[_0x47b1("0x1a")][_0x47b1("0x65")](mmCoreSplitViewBlock);
      }
    },
    "notifyToken" : function(mmCoreSplitViewBlock) {
      this["sendRecaptchaResponse"](mmCoreSplitViewBlock);
    },
    "setNick" : function() {
      this["login"]();
      var artistTrack = require("#nick")[_0x47b1("0x25")]();
      if (artistTrack && artistTrack[_0x47b1("0x4b")] > 15) {
        artistTrack = artistTrack[_0x47b1("0x66")](0, 15);
      }
      if (object[_0x47b1("0x1a")]) {
        object[_0x47b1("0x1a")][_0x47b1("0x67")](artistTrack);
      }
    },
    "spectate" : function() {
      if (object[_0x47b1("0x1a")]) {
        object["core"][_0x47b1("0x68")]();
      }
    },
    "updatePartyToken" : function() {
      require(_0x47b1("0x69"))[_0x47b1("0x25")](this["partyToken"]);
    },
    "checkHash" : function() {
      if (this["checkPartyHash"]()) {
        this[_0x47b1("0x6a")](object[_0x47b1("0x1e")][_0x47b1("0x6b")]);
        return;
      }
      /** @type {!Array} */
      var _0x6a31ff = ["#ffa", "#battleroyale", _0x47b1("0x6c"), _0x47b1("0x6d")];
      if (object[_0x47b1("0x1e")][_0x47b1("0x6b")] && _0x6a31ff[_0x47b1("0x5c")](object[_0x47b1("0x1e")][_0x47b1("0x6b")]) != -1) {
        this[_0x47b1("0x3a")](object[_0x47b1("0x1e")][_0x47b1("0x6b")][_0x47b1("0x39")]("#", ":"));
      }
    },
    "checkPartyHash" : function() {
      return object["location"][_0x47b1("0x6b")] && object[_0x47b1("0x1e")][_0x47b1("0x6b")][_0x47b1("0x4b")] == 7;
    },
    "replaceHistoryState" : function(name) {
      if (object[_0x47b1("0x6e")] && object[_0x47b1("0x6e")][_0x47b1("0x6f")]) {
        object[_0x47b1("0x6e")]["replaceState"]({}, object[_0x47b1("0x70")][_0x47b1("0x71")], name);
      }
    },
    "facebookLogin" : function() {
      object[_0x47b1("0x72")]();
    },
    "doLoginWithFB" : function(canCreateDiscussions) {
      this[_0x47b1("0x73")] = _0x47b1("0x8");
      this[_0x47b1("0x74")] = canCreateDiscussions;
    },
    "doLoginWithGPlus" : function(canCreateDiscussions) {
      this["context"] = _0x47b1("0x75");
      this[_0x47b1("0x74")] = canCreateDiscussions;
    },
    "login" : function() {
      if (!this[_0x47b1("0x74")]) {
        return;
      }
      if (this[_0x47b1("0x73")] === _0x47b1("0x8") && object[_0x47b1("0x1a")] && object[_0x47b1("0x1a")][_0x47b1("0x76")]) {
        object[_0x47b1("0x1a")][_0x47b1("0x76")](this[_0x47b1("0x74")]);
      }
      if (this[_0x47b1("0x73")] === "google" && object[_0x47b1("0x1a")] && object[_0x47b1("0x1a")]["sendGplusToken"]) {
        object[_0x47b1("0x1a")]["sendGplusToken"](this["accessToken"]);
      }
    },
    "logout" : function() {
      /** @type {null} */
      this["accessToken"] = null;
      this[_0x47b1("0x1c")]();
    },
    "setUI" : function() {
      var _0x5a5f0d = this;
      require(_0x47b1("0x77"))["each"](function() {
        var $ = require(this);
        var evt = $[_0x47b1("0x34")]("data-itr");
        $[_0x47b1("0x78")](object[_0x47b1("0x79")](evt));
      });
      require(_0x47b1("0x36"))["on"](_0x47b1("0x7a"), function() {
        _0x5a5f0d[_0x47b1("0x7b")]();
      });
      require(_0x47b1("0x7c"))["on"](_0x47b1("0x7d"), function(canCreateDiscussions) {
        canCreateDiscussions[_0x47b1("0x7e")]();
        _0x5a5f0d[_0x47b1("0x7f")]();
      });
      require(_0x47b1("0x80"))["on"]("click", function(canCreateDiscussions) {
        canCreateDiscussions[_0x47b1("0x7e")]();
        _0x5a5f0d["spectate"]();
      });
      require("#create-party-btn-2")["on"](_0x47b1("0x7d"), function(canCreateDiscussions) {
        canCreateDiscussions[_0x47b1("0x7e")]();
        _0x5a5f0d[_0x47b1("0x81")]();
      });
      $("#join-party-btn-2")["on"](_0x47b1("0x7d"), function(canCreateDiscussions) {
        canCreateDiscussions[_0x47b1("0x7e")]();
        _0x5a5f0d[_0x47b1("0x6a")](require(_0x47b1("0x82"))["val"]());
      });
      /**
       * @return {undefined}
       */
      object[_0x47b1("0x83")] = function() {
        require("#socialLoginContainer")[_0x47b1("0x84")]();
      };
    },
    "init" : function() {
      var _0x1f6d4d = this;
      this[_0x47b1("0x85")]();
      this[_0x47b1("0x86")]();
      this[_0x47b1("0x87")]();
      this[_0x47b1("0x88")]();
      this[_0x47b1("0x89")]();
      this[_0x47b1("0x8a")]();
      setInterval(function() {
        _0x1f6d4d[_0x47b1("0x87")]();
      }, 18E4);
    }
  };
  /**
   * @return {undefined}
   */
  object[_0x47b1("0x8b")] = function() {
    if (object[_0x47b1("0xe")]["getItem"]("storeObjectInfo") !== null) {
      message = JSON["parse"](object[_0x47b1("0xe")][_0x47b1("0xf")](_0x47b1("0x8c")));
    }
  };
  /**
   * @return {undefined}
   */
  object[_0x47b1("0x8d")] = function() {
    object[_0x47b1("0xe")]["setItem"](_0x47b1("0x8c"), JSON["stringify"](message));
  };
  /**
   * @return {undefined}
   */
  object[_0x47b1("0x8e")] = function() {
    if (message[_0x47b1("0x73")] === "google") {
      if (params) {
        params[_0x47b1("0x8f")]();
      }
    }
    delete object[_0x47b1("0xe")][_0x47b1("0x8c")];
    require(_0x47b1("0x62"))[_0x47b1("0x34")](_0x47b1("0x90"), "0");
    require(_0x47b1("0x91"))[_0x47b1("0x92")]("0%");
    master[_0x47b1("0x8e")]();
  };
  /**
   * @return {undefined}
   */
  object["facebookLogin"] = function() {
    alert(_0x47b1("0x93"));
  };
  /**
   * @return {undefined}
   */
  object[_0x47b1("0x94")] = function() {
    object["FB"][_0x47b1("0x95")]({
      "appId" : headers[_0x47b1("0x96")],
      "cookie" : !![],
      "xfbml" : !![],
      "status" : !![],
      "version" : _0x47b1("0x97")
    });
    /** @type {boolean} */
    _0x569461 = !![];
    editorSocket();
  };
  /**
   * @return {undefined}
   */
  object["gapiAsyncInit"] = function() {
    object[_0x47b1("0x8b")]();
    initExtentmap();
  };
})(window, window[_0x47b1("0xb8")]);
