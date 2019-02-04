!(function(o, n) {
    function e(n) {
        if (null !== o.FB)
            return (
                (s.loginIntent = "1"),
                (s.context = "facebook"),
                o.updateStorage(),
                o.FB.login(
                    function(o) {
                        t(o);
                    }, {
                        scope: "public_profile, email"
                    }
                ),
                !0
            );
        alert(
            "You seem to have something blocking Facebook on your browser, please check for any extensions"
        );
    }

    function t(e) {
        if ("connected" === e.status) {
            var t = e.authResponse.accessToken;
            t
                ?
                (master.doLoginWithFB(t),
                    o.FB.api("/me/picture?width=180&height=180", function(e) {
                        e.data &&
                            e.data.url &&
                            ((s.userInfo.picture = e.data.url),
                                n(".agario-profile-picture").attr("src", e.data.url),
                                o.updateStorage());
                    }),
                    n("#helloContainer").attr("data-logged-in", "1"),
                    n(".progress-bar-striped").width("100%")) :
                S < 3 && (S++, o.facebookRelogin(), o.logout());
        }
    }

    function a() {
        U.currentUser.get(),
            "1" === s.loginIntent &&
            "google" === s.context &&
            !U.isSignedIn.get() &&
            U.signIn();
    }

    function i(e) {
        if (
            e &&
            U &&
            "1" === s.loginIntent &&
            "google" === s.context &&
            U.isSignedIn.get()
        ) {
            var t = e.getAuthResponse().access_token,
                a = e.getBasicProfile().getImageUrl();
            master.doLoginWithGPlus(t),
                a &&
                ((s.userInfo.picture = a),
                    o.updateStorage(),
                    n(".agario-profile-picture").attr("src", a)),
                n("#helloContainer").attr("data-logged-in", "1"),
                n(".progress-bar-striped").width("100%");
        }
    }
    var r = {
            AF: "JP-Tokyo",
            AX: "EU-London",
            AL: "EU-London",
            DZ: "EU-London",
            AS: "SG-Singapore",
            AD: "EU-London",
            AO: "EU-London",
            AI: "US-Atlanta",
            AG: "US-Atlanta",
            AR: "BR-Brazil",
            AM: "JP-Tokyo",
            AW: "US-Atlanta",
            AU: "SG-Singapore",
            AT: "EU-London",
            AZ: "JP-Tokyo",
            BS: "US-Atlanta",
            BH: "JP-Tokyo",
            BD: "JP-Tokyo",
            BB: "US-Atlanta",
            BY: "EU-London",
            BE: "EU-London",
            BZ: "US-Atlanta",
            BJ: "EU-London",
            BM: "US-Atlanta",
            BT: "JP-Tokyo",
            BO: "BR-Brazil",
            BQ: "US-Atlanta",
            BA: "EU-London",
            BW: "EU-London",
            BR: "BR-Brazil",
            IO: "JP-Tokyo",
            VG: "US-Atlanta",
            BN: "JP-Tokyo",
            BG: "EU-London",
            BF: "EU-London",
            BI: "EU-London",
            KH: "JP-Tokyo",
            CM: "EU-London",
            CA: "US-Atlanta",
            CV: "EU-London",
            KY: "US-Atlanta",
            CF: "EU-London",
            TD: "EU-London",
            CL: "BR-Brazil",
            CN: "CN-China",
            CX: "JP-Tokyo",
            CC: "JP-Tokyo",
            CO: "BR-Brazil",
            KM: "EU-London",
            CD: "EU-London",
            CG: "EU-London",
            CK: "SG-Singapore",
            CR: "US-Atlanta",
            CI: "EU-London",
            HR: "EU-London",
            CU: "US-Atlanta",
            CW: "US-Atlanta",
            CY: "JP-Tokyo",
            CZ: "EU-London",
            DK: "EU-London",
            DJ: "EU-London",
            DM: "US-Atlanta",
            DO: "US-Atlanta",
            EC: "BR-Brazil",
            EG: "EU-London",
            SV: "US-Atlanta",
            GQ: "EU-London",
            ER: "EU-London",
            EE: "EU-London",
            ET: "EU-London",
            FO: "EU-London",
            FK: "BR-Brazil",
            FJ: "SG-Singapore",
            FI: "EU-London",
            FR: "EU-London",
            GF: "BR-Brazil",
            PF: "SG-Singapore",
            GA: "EU-London",
            GM: "EU-London",
            GE: "JP-Tokyo",
            DE: "EU-London",
            GH: "EU-London",
            GI: "EU-London",
            GR: "EU-London",
            GL: "US-Atlanta",
            GD: "US-Atlanta",
            GP: "US-Atlanta",
            GU: "SG-Singapore",
            GT: "US-Atlanta",
            GG: "EU-London",
            GN: "EU-London",
            GW: "EU-London",
            GY: "BR-Brazil",
            HT: "US-Atlanta",
            VA: "EU-London",
            HN: "US-Atlanta",
            HK: "JP-Tokyo",
            HU: "EU-London",
            IS: "EU-London",
            IN: "JP-Tokyo",
            ID: "JP-Tokyo",
            IR: "JP-Tokyo",
            IQ: "JP-Tokyo",
            IE: "EU-London",
            IM: "EU-London",
            IL: "JP-Tokyo",
            IT: "EU-London",
            JM: "US-Atlanta",
            JP: "JP-Tokyo",
            JE: "EU-London",
            JO: "JP-Tokyo",
            KZ: "JP-Tokyo",
            KE: "EU-London",
            KI: "SG-Singapore",
            KP: "JP-Tokyo",
            KR: "JP-Tokyo",
            KW: "JP-Tokyo",
            KG: "JP-Tokyo",
            LA: "JP-Tokyo",
            LV: "EU-London",
            LB: "JP-Tokyo",
            LS: "EU-London",
            LR: "EU-London",
            LY: "EU-London",
            LI: "EU-London",
            LT: "EU-London",
            LU: "EU-London",
            MO: "JP-Tokyo",
            MK: "EU-London",
            MG: "EU-London",
            MW: "EU-London",
            MY: "JP-Tokyo",
            MV: "JP-Tokyo",
            ML: "EU-London",
            MT: "EU-London",
            MH: "SG-Singapore",
            MQ: "US-Atlanta",
            MR: "EU-London",
            MU: "EU-London",
            YT: "EU-London",
            MX: "US-Atlanta",
            FM: "SG-Singapore",
            MD: "EU-London",
            MC: "EU-London",
            MN: "JP-Tokyo",
            ME: "EU-London",
            MS: "US-Atlanta",
            MA: "EU-London",
            MZ: "EU-London",
            MM: "JP-Tokyo",
            NA: "EU-London",
            NR: "SG-Singapore",
            NP: "JP-Tokyo",
            NL: "EU-London",
            NC: "SG-Singapore",
            NZ: "SG-Singapore",
            NI: "US-Atlanta",
            NE: "EU-London",
            NG: "EU-London",
            NU: "SG-Singapore",
            NF: "SG-Singapore",
            MP: "SG-Singapore",
            NO: "EU-London",
            OM: "JP-Tokyo",
            PK: "JP-Tokyo",
            PW: "SG-Singapore",
            PS: "JP-Tokyo",
            PA: "US-Atlanta",
            PG: "SG-Singapore",
            PY: "BR-Brazil",
            PE: "BR-Brazil",
            PH: "JP-Tokyo",
            PN: "SG-Singapore",
            PL: "EU-London",
            PT: "EU-London",
            PR: "US-Atlanta",
            QA: "JP-Tokyo",
            RE: "EU-London",
            RO: "EU-London",
            RU: "RU-Russia",
            RW: "EU-London",
            BL: "US-Atlanta",
            SH: "EU-London",
            KN: "US-Atlanta",
            LC: "US-Atlanta",
            MF: "US-Atlanta",
            PM: "US-Atlanta",
            VC: "US-Atlanta",
            WS: "SG-Singapore",
            SM: "EU-London",
            ST: "EU-London",
            SA: "EU-London",
            SN: "EU-London",
            RS: "EU-London",
            SC: "EU-London",
            SL: "EU-London",
            SG: "JP-Tokyo",
            SX: "US-Atlanta",
            SK: "EU-London",
            SI: "EU-London",
            SB: "SG-Singapore",
            SO: "EU-London",
            ZA: "EU-London",
            SS: "EU-London",
            ES: "EU-London",
            LK: "JP-Tokyo",
            SD: "EU-London",
            SR: "BR-Brazil",
            SJ: "EU-London",
            SZ: "EU-London",
            SE: "EU-London",
            CH: "EU-London",
            SY: "EU-London",
            TW: "JP-Tokyo",
            TJ: "JP-Tokyo",
            TZ: "EU-London",
            TH: "JP-Tokyo",
            TL: "JP-Tokyo",
            TG: "EU-London",
            TK: "SG-Singapore",
            TO: "SG-Singapore",
            TT: "US-Atlanta",
            TN: "EU-London",
            TR: "TK-Turkey",
            TM: "JP-Tokyo",
            TC: "US-Atlanta",
            TV: "SG-Singapore",
            UG: "EU-London",
            UA: "EU-London",
            AE: "EU-London",
            GB: "EU-London",
            US: "US-Atlanta",
            UM: "SG-Singapore",
            VI: "US-Atlanta",
            UY: "BR-Brazil",
            UZ: "JP-Tokyo",
            VU: "SG-Singapore",
            VE: "BR-Brazil",
            VN: "JP-Tokyo",
            WF: "SG-Singapore",
            EH: "EU-London",
            YE: "JP-Tokyo",
            ZM: "EU-London",
            ZW: "EU-London"
        },
        s = {
            context: null,
            defaultProvider: "facebook",
            loginIntent: "0",
            userInfo: {
                socialToken: null,
                tokenExpires: "",
                level: "",
                xp: "",
                xpNeeded: "",
                name: "",
                picture: "",
                displayName: "",
                loggedIn: "0",
                socialId: ""
            }
        },
        c = 677505792353827,
        l =
        "686981379285-oroivr8u2ag1dtm3ntcs6vi05i3cpv0j.apps.googleusercontent.com",
        d = "webbouncer-live-v6-0.agario.miniclippt.com",
        g = "v4",
        u = "12.0.1",
        h = 30400,
        p = "3.4.0",
        S = 0,
        U = null;
    (o.master = {
        ws: null,
        serverIP: null,
        endpoint: null,
        region: "",
        gameMode: ":ffa",
        partyToken: "",
        findingServer: 0,
        curValidFindServer: 0,
        backoffPeriod: 500,
        regionNames: {},
        context: "",
        accessToken: null,
        clientVersion: h,
        clientVersionString: p,
        getClientVersion: function() {
            null !== o.localStorage.getItem("ogarioClientVersionString") &&
                ((this.clientVersionString = o.localStorage.getItem(
                        "ogarioClientVersionString"
                    )),
                    (this.clientVersion = this.parseClientVersion(
                        this.clientVersionString
                    )));
            var e = this;
            n.ajax("//agar.io/mc/agario.js", {
                error: function() {},
                success: function(o) {
                    var n = o.match(/versionString=\"(\d+\.\d+\.\d+)\"/);
                    if (n) {
                        var t = n[1],
                            a = e.parseClientVersion(t);
                        console.log("[Master] Current client version:", a, t),
                            e.setClientVersion(a, t);
                    }
                },
                dataType: "text",
                method: "GET",
                cache: !1,
                crossDomain: !0
            });
        },
        setClientVersion: function(n, e) {
            console.log(
                    "[Master] Your client version:",
                    this.clientVersion,
                    this.clientVersionString
                ),
                this.clientVersion != n &&
                (console.log("[Master] Changing client version..."),
                    (this.clientVersion = n),
                    (this.clientVersionString = e),
                    o.core && o.core.setClientVersion(n, e),
                    o.localStorage.setItem("ogarioClientVersionString", e),
                    this.reconnect(!0));
        },
        parseClientVersion: function(o) {
            return (
                1e4 * parseInt(o.split(".")[0]) +
                100 * parseInt(o.split(".")[1]) +
                parseInt(o.split(".")[2])
            );
        },
        getRegionCode: function() {
            var e = o.localStorage.getItem("location");
            if (e)
                return (
                    this.setRegion(e, !1),
                    void(this.checkPartyHash() || this.reconnect())
                );
            var t = this;
            n.get(
                "//gc.agar.io",
                function(o) {
                    var n = o.split(" ")[0];
                    t.setRegionCode(n);
                },
                "text"
            );
        },
        setRegionCode: function(o) {
            r.hasOwnProperty(o) &&
                (this.setRegion(r[o], !1), this.checkPartyHash() || this.reconnect());
        },
        setRegion: function(e, t) {
            null == t && (t = !0),
                e &&
                ((this.region = e),
                    o.localStorage.setItem("location", e),
                    n("#region").val() !== e && n("#region").val(e),
                    t && this.reconnect());
        },
        checkRegion: function() {
            var e = n("#region"),
                t = e.val();
            t
                ?
                o.localStorage.setItem("location", t) :
                (t = o.localStorage.getItem("location")) && $("#region").val(t),
                e.val() ?
                n("#locationKnown").append(e) :
                n("#locationUnknown").append(e);
        },
        refreshRegionInfo: function() {
            var o = this;
            this.makeMasterSimpleRequest("info", "text", function(e) {
                var t = (e = JSON.parse(e)).regions;
                for (var a in t)
                    t.hasOwnProperty(a) &&
                    n('#region option[value="' + a + '"]').text(
                        o.regionNames[a] + " (" + t[a].numPlayers + ")"
                    );
            });
        },
        getRegionNames: function() {
            var o = this;
            n("#region option").each(function() {
                var e = n(this).val(),
                    t = n(this).text();
                o.regionNames.hasOwnProperty(e) || (o.regionNames[e] = t);
            });
        },
        setGameMode: function(o, n) {
            null == n && (n = !0),
                this.applyGameMode(o),
                (this.gameMode = o),
                n && this.reconnect();
        },
        applyGameMode: function(e) {
            n("#helloContainer, #overlays-hud").attr("data-gamemode", e),
                n("#gamemode").val(e),
                ":party" !== e &&
                this.replaceHistoryState(
                    "/#" + o.encodeURIComponent(e.replace(":", ""))
                );
        },
        handleChangeMode: function() {
            var o = n("#gamemode").val();
            this.setGameMode(o);
        },
        findServer: function(n, e) {
            var t = Date.now();
            if (!(t - this.findingServer < 500)) {
                o.core && o.core.disconnect();
                var a = "findServer";
                null == n && (n = ""),
                    null == e ?
                    (e = ":ffa") :
                    ":battleroyale" === e && (a = "findBattleRoyaleServer");
                var i = this,
                    r = this.setRequestMsg(n, e),
                    s = ++this.curValidFindServer;
                (this.findingServer = t),
                this.makeMasterRequest(
                    g + "/" + a,
                    r,
                    function(o) {
                        if (s == i.curValidFindServer) {
                            var t = o.endpoints;
                            null !== t && "0.0.0.0:0" !== t.https ?
                                ((i.serverIP = t.https),
                                    null !== o.token && (i.partyToken = o.token),
                                    (i.backoffPeriod = 500),
                                    i.connect(i.serverIP)) :
                                i.findServer(n, e);
                        }
                    },
                    function() {
                        (i.backoffPeriod *= 2),
                        setTimeout(function() {
                            i.findServer(n, e);
                        }, i.backoffPeriod);
                    }
                );
            }
        },
        setRequestMsg: function(o, n, e) {
            var t = function(o) {
                    a.push(o.length);
                    for (var n = 0; n < o.length; n++) a.push(o.charCodeAt(n));
                },
                a = [10, 4 + o.length + n.length, 10];
            return (
                t(o),
                a.push(18),
                t(n),
                e && (a.push(26, 8, 10), t(e)),
                new Uint8Array(a)
            );
        },
        makeMasterRequest: function(o, e, t, a, i) {
            var r = this;
            null == i && (i = "application/octet-stream"),
                n.ajax("https://" + d + "/" + o, {
                    beforeSend: function(o) {
                        return (
                            o.setRequestHeader("Accept", "text/plain"),
                            o.setRequestHeader("Accept", "*/*"),
                            o.setRequestHeader("Accept", "q=0.01"),
                            o.setRequestHeader("Content-Type", i),
                            o.setRequestHeader("x-support-proto-version", u),
                            o.setRequestHeader("x-client-version", r.clientVersion),
                            !0
                        );
                    },
                    error: function() {
                        a && a();
                    },
                    success: function(o) {
                        t(o);
                    },
                    dataType: "json",
                    method: "POST",
                    data: e,
                    processData: !1,
                    cache: !1,
                    crossDomain: !0
                });
        },
        makeMasterSimpleRequest: function(o, e, t, a) {
            var i = this;
            n.ajax("https://" + d + "/" + o, {
                beforeSend: function(o) {
                    return (
                        o.setRequestHeader("x-support-proto-version", u),
                        o.setRequestHeader("x-client-version", i.clientVersion),
                        !0
                    );
                },
                error: function() {
                    a && a();
                },
                success: function(o) {
                    t(o);
                },
                dataType: e,
                method: "GET",
                cache: !1,
                crossDomain: !0
            });
        },
        createParty: function() {
            this.setPartyState("3"), this.setGameMode(":party");
        },
        joinParty: function(n) {
            var e = this; -
            1 != n.indexOf("#") && (n = n.split("#")[1]),
                this.setGameMode(":party", !1),
                (this.partyToken = n),
                this.replaceHistoryState("/#" + o.encodeURIComponent(n));
            var t = this.setRequestMsg(this.region, "", n);
            this.makeMasterRequest(
                g + "/getToken",
                t,
                function(o) {
                    (e.endpoint = o.endpoints.https), e.setPartyState("9");
                },
                function() {
                    e.setPartyState("6");
                }
            );
        },
        setPartyState: function(o) {
            "9" === o &&
                (this.updatePartyToken(),
                    this.setGameMode(":party", !1),
                    this.connect(this.endpoint),
                    (o = "5")),
                n("#helloContainer").attr("data-party-state", o);
        },
        connect: function(n) {
            console.log("[Master] Connect to:", n),
                (this.ws = "wss://" + n),
                ":party" === this.gameMode &&
                this.partyToken &&
                (this.ws += "?party_id=" + o.encodeURIComponent(this.partyToken)),
                o.core && o.core.connect(this.ws);
        },
        reconnect: function(o) {
            this.region &&
                (o && this.serverIP ?
                    this.connect(this.serverIP) :
                    this.findServer(this.region, this.gameMode));
        },
        onConnect: function() {
            ":party" === this.gameMode && this.updatePartyToken();
        },
        onDisconnect: function() {
            this.reconnect();
        },
        recaptchaRequested: function() {
            requestCaptcha(!0);
        },
        sendRecaptchaResponse: function(n) {
            o.core && o.core.recaptchaResponse(n);
        },
        notifyToken: function(o) {
            this.sendRecaptchaResponse(o);
        },
        setNick: function() {
            this.login();
            var e = n("#nick").val();
            e && e.length > 15 && (e = e.substring(0, 15)),
                o.core && o.core.sendNick(e);
        },
        spectate: function() {
            o.core && o.core.sendSpectate();
        },
        updatePartyToken: function() {
            n("#party-token, .party-token").val(this.partyToken);
        },
        checkHash: function() {
            this.checkPartyHash() ?
                this.joinParty(o.location.hash) :
                o.location.hash &&
                -1 != ["#ffa", "#battleroyale", "#teams", "#experimental"].indexOf(
                    o.location.hash
                ) &&
                this.setGameMode(o.location.hash.replace("#", ":"));
        },
        checkPartyHash: function() {
            return o.location.hash && 7 == o.location.hash.length;
        },
        replaceHistoryState: function(n) {
            o.history &&
                o.history.replaceState &&
                o.history.replaceState({}, o.document.title, n);
        },
        facebookLogin: function() {
            o.facebookLogin();
        },
        doLoginWithFB: function(o) {
            (this.context = "facebook"), (this.accessToken = o);
        },
        doLoginWithGPlus: function(o) {
            (this.context = "google"), (this.accessToken = o);
        },
        login: function() {
            this.accessToken &&
                ("facebook" === this.context &&
                    o.core &&
                    o.core.sendFbToken &&
                    o.core.sendFbToken(this.accessToken),
                    "google" === this.context &&
                    o.core &&
                    o.core.sendGplusToken &&
                    o.core.sendGplusToken(this.accessToken));
        },
        logout: function() {
            (this.accessToken = null), this.reconnect();
        },
        setUI: function() {
            var e = this;
            n("[data-itr]").each(function() {
                    var e = n(this),
                        t = e.attr("data-itr");
                    e.html(o.i18n(t));
                }),
                n("#gamemode").on("change", function() {
                    e.handleChangeMode();
                }),
                n(".btn-play, .btn-play-guest").on("click", function(o) {
                    o.preventDefault(), e.setNick();
                }),
                n(".btn-spectate").on("click", function(o) {
                    o.preventDefault(), e.spectate();
                }),
                n("#create-party-btn-2").on("click", function(o) {
                    o.preventDefault(), e.createParty();
                }),
                $("#join-party-btn-2").on("click", function(o) {
                    o.preventDefault(), e.joinParty(n("#party-token").val());
                }),
                (o.toggleSocialLogin = function() {
                    n("#socialLoginContainer").toggle();
                });
        },
        init: function() {
            var o = this;
            this.setUI(),
                this.getRegionNames(),
                this.refreshRegionInfo(),
                this.checkHash(),
                this.getRegionCode(),
                this.checkRegion(),
                setInterval(function() {
                    o.refreshRegionInfo();
                }, 18e4);
        }
    }),
    (o.getStorage = function() {
        null !== o.localStorage.getItem("storeObjectInfo") &&
            (s = JSON.parse(o.localStorage.getItem("storeObjectInfo")));
    }),
    (o.updateStorage = function() {
        o.localStorage.setItem("storeObjectInfo", JSON.stringify(s));
    }),
    (o.logout = function() {
        "google" === s.context && U && U.signOut(),
            delete o.localStorage.storeObjectInfo,
            n("#helloContainer").attr("data-logged-in", "0"),
            n(".progress-bar-striped").width("0%"),
            master.logout();
    }),
    (o.facebookLogin = function() {
        alert(
            "You seem to have something blocking Facebook on your browser, please check for any extensions"
        );
    }),
    (o.fbAsyncInit = function() {
        o.FB.init({
                appId: c,
                cookie: !0,
                xfbml: !0,
                status: !0,
                version: "v2.8"
            }),
            o.getStorage(),
            "1" === s.loginIntent &&
            "facebook" === s.context &&
            o.FB.getLoginStatus(function(n) {
                "connected" === n.status ? t(n) : o.logout();
            }),
            (o.facebookRelogin = e),
            (o.facebookLogin = e);
    }),
    (o.gapiAsyncInit = function() {
        o.getStorage(),
            o.gapi.load("auth2", function() {
                U = o.gapi.auth2.init({
                    client_id: l,
                    cookie_policy: "single_host_origin",
                    scope: "https://www.googleapis.com/auth/plus.login email",
                    app_package_name: "com.miniclip.agar.io"
                });
                var n = document.getElementById("gplusLogin");
                n.addEventListener("click", function() {
                        (s.loginIntent = "1"), (s.context = "google"), o.updateStorage();
                    }),
                    U.attachClickHandler(n),
                    U.currentUser.listen(i),
                    U.then(a);
            });
    });
})(window, window.jQuery);
