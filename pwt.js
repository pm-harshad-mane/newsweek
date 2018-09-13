function pwtCreatePrebidNamespace(preBidNameSpace) {
    window[preBidNameSpace] = window[preBidNameSpace] || {};
    window[preBidNameSpace].que = window[preBidNameSpace].que || [];
    /* prebid.js v1.13.0Updated : 2018-09-04 */
    !(function(d) {
        var s = window.pbjsChunk;
        window.pbjsChunk = function(e, t, n) {
            for (var r, i, o, a = 0, u = []; a < e.length; a++)
                i = e[a],
                c[i] && u.push(c[i][0]),
                c[i] = 0;
            for (r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (d[r] = t[r]);
            for (s && s(e, t, n); u.length; )
                u.shift()();
            if (n)
                for (a = 0; a < n.length; a++)
                    o = f(f.s = n[a]);
            return o
        }
        ;
        var n = {}
          , c = {
            142: 0
        };
        function f(e) {
            if (n[e])
                return n[e].exports;
            var t = n[e] = {
                i: e,
                l: !1,
                exports: {}
            };
            return d[e].call(t.exports, t, t.exports, f),
            t.l = !0,
            t.exports
        }
        f.m = d,
        f.c = n,
        f.d = function(e, t, n) {
            f.o(e, t) || Object.defineProperty(e, t, {
                configurable: !1,
                enumerable: !0,
                get: n
            })
        }
        ,
        f.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            }
            : function() {
                return e
            }
            ;
            return f.d(t, "a", t),
            t
        }
        ,
        f.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        ,
        f.p = "",
        f.oe = function(e) {
            throw console.error(e),
            e
        }
        ,
        f(f.s = 487)
    }
    )({
        0: function(e, i, t) {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            }),
            i.getLatestHighestCpmBid = i.getOldestHighestCpmBid = i.getHighestCpm = void 0;
            var r = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
              , u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ;
            i.getAdUnitSizes = function(e) {
                if (!e)
                    return;
                var t = [];
                if (e.mediaTypes && e.mediaTypes.banner && Array.isArray(e.mediaTypes.banner.sizes)) {
                    var n = e.mediaTypes.banner.sizes;
                    Array.isArray(n[0]) ? t = n : t.push(n)
                } else
                    Array.isArray(e.sizes) && (Array.isArray(e.sizes[0]) ? t = e.sizes : t.push(e.sizes));
                return t
            }
            ,
            i.parseSizesInput = function(e) {
                var t = [];
                if ("string" == typeof e) {
                    var n = e.split(",")
                      , r = /^(\d)+x(\d)+$/i;
                    if (n)
                        for (var i in n)
                            S(n, i) && n[i].match(r) && t.push(n[i])
                } else if ("object" === (void 0 === e ? "undefined" : u(e))) {
                    var o = e.length;
                    if (0 < o)
                        if (2 === o && "number" == typeof e[0] && "number" == typeof e[1])
                            t.push(b(e));
                        else
                            for (var a = 0; a < o; a++)
                                t.push(b(e[a]))
                }
                return t
            }
            ,
            i.parseGPTSingleSizeArray = b,
            i.uniques = A,
            i.flatten = I,
            i.getBidRequest = function(n, e) {
                var r = void 0;
                return e.some((function(e) {
                    var t = (0,
                    a.default)(e.bids, (function(t) {
                        return ["bidId", "adId", "bid_id"].some((function(e) {
                            return t[e] === n
                        }
                        ))
                    }
                    ));
                    return t && (r = t),
                    t
                }
                )),
                r
            }
            ,
            i.getKeys = _,
            i.getValue = w,
            i.getBidderCodes = function() {
                return (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : pbjs.adUnits).map((function(e) {
                    return e.bids.map((function(e) {
                        return e.bidder
                    }
                    )).reduce(I, [])
                }
                )).reduce(I).filter(A)
            }
            ,
            i.isGptPubadsDefined = function() {
                if (window.googletag && i.isFn(window.googletag.pubads) && i.isFn(window.googletag.pubads().getSlots))
                    return !0
            }
            ,
            i.shuffle = function(e) {
                var t = e.length;
                for (; 0 < t; ) {
                    var n = Math.floor(Math.random() * t)
                      , r = e[--t];
                    e[t] = e[n],
                    e[n] = r
                }
                return e
            }
            ,
            i.adUnitsFilter = function(e, t) {
                return (0,
                d.default)(e, t && t.adUnitCode)
            }
            ,
            i.isSrcdocSupported = function(e) {
                return e.defaultView && e.defaultView.frameElement && "srcdoc"in e.defaultView.frameElement && !/firefox/i.test(navigator.userAgent)
            }
            ,
            i.deepClone = function(e) {
                return (0,
                o.default)(e)
            }
            ,
            i.inIframe = function() {
                try {
                    return i.getWindowSelf() !== i.getWindowTop()
                } catch (e) {
                    return !0
                }
            }
            ,
            i.isSafariBrowser = function() {
                return /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
            }
            ,
            i.replaceAuctionPrice = function(e, t) {
                if (!e)
                    return;
                return e.replace(/\$\{AUCTION_PRICE\}/g, t)
            }
            ,
            i.timestamp = function() {
                return (new Date).getTime()
            }
            ,
            i.checkCookieSupport = function() {
                if (window.navigator.cookieEnabled || document.cookie.length)
                    return !0
            }
            ,
            i.cookiesAreEnabled = function() {
                if (i.checkCookieSupport())
                    return !0;
                return window.document.cookie = "prebid.cookieTest",
                -1 != window.document.cookie.indexOf("prebid.cookieTest")
            }
            ,
            i.delayExecution = function(e, t) {
                if (t < 1)
                    throw new Error("numRequiredCalls must be a positive number. Got " + t);
                var n = 0;
                return function() {
                    ++n === t && e.apply(null, arguments)
                }
            }
            ,
            i.groupBy = function(e, n) {
                return e.reduce((function(e, t) {
                    return (e[t[n]] = e[t[n]] || []).push(t),
                    e
                }
                ), {})
            }
            ,
            i.deepAccess = function(e, t) {
                if (!e)
                    return;
                t = String(t).split(".");
                for (var n = 0; n < t.length; n++)
                    if (void 0 === (e = e[t[n]]))
                        return;
                return e
            }
            ,
            i.createContentToExecuteExtScriptInFriendlyFrame = function(e) {
                return e ? '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"><html><head><base target="_top" /><script>inDapIF=true;<\/script></head><body>\x3c!--PRE_SCRIPT_TAG_MACRO--\x3e<script src="' + e + '"><\/script>\x3c!--POST_SCRIPT_TAG_MACRO--\x3e</body></html>' : ""
            }
            ,
            i.getDefinedParams = function(n, e) {
                return e.filter((function(e) {
                    return n[e]
                }
                )).reduce((function(e, t) {
                    return r(e, (function(e, t, n) {
                        t in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n;
                        return e
                    }
                    )({}, t, n[t]))
                }
                ), {})
            }
            ,
            i.isValidMediaTypes = function(e) {
                var t = ["banner", "native", "video"];
                if (!Object.keys(e).every((function(e) {
                    return (0,
                    d.default)(t, e)
                }
                )))
                    return !1;
                if (e.video && e.video.context)
                    return (0,
                    d.default)(["instream", "outstream"], e.video.context);
                return !0
            }
            ,
            i.getBidderRequest = function(e, t, n) {
                return (0,
                a.default)(e, (function(e) {
                    return 0 < e.bids.filter((function(e) {
                        return e.bidder === t && e.adUnitCode === n
                    }
                    )).length
                }
                )) || {
                    start: null,
                    auctionId: null
                }
            }
            ,
            i.getUserConfiguredParams = function(e, t, n) {
                return e.filter((function(e) {
                    return e.code === t
                }
                )).map((function(e) {
                    return e.bids
                }
                )).reduce(I, []).filter((function(e) {
                    return e.bidder === n
                }
                )).map((function(e) {
                    return e.params || {}
                }
                ))
            }
            ,
            i.getOrigin = function() {
                return window.location.origin ? window.location.origin : window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : "")
            }
            ,
            i.getDNT = function() {
                return "1" === navigator.doNotTrack || "1" === window.doNotTrack || "1" === navigator.msDoNotTrack || "yes" === navigator.doNotTrack
            }
            ,
            i.isAdUnitCodeMatchingSlot = function(t) {
                return function(e) {
                    return O(t, e)
                }
            }
            ,
            i.isSlotMatchingAdUnitCode = function(t) {
                return function(e) {
                    return O(e, t)
                }
            }
            ,
            i.unsupportedBidderMessage = function(e, t) {
                var n = Object.keys(e.mediaTypes || {
                    banner: "banner"
                }).join(", ");
                return "\n    " + e.code + " is a " + n + " ad unit\n    containing bidders that don't support " + n + ": " + t + ".\n    This bidder won't fetch demand.\n  "
            }
            ,
            i.deletePropertyFromObject = function(e, t) {
                var n = r({}, e);
                return delete n[t],
                n
            }
            ,
            i.removeRequestId = function(e) {
                return i.deletePropertyFromObject(e, "requestId")
            }
            ,
            i.isInteger = function(e) {
                return Number.isInteger ? Number.isInteger(e) : "number" == typeof e && isFinite(e) && Math.floor(e) === e
            }
            ,
            i.convertCamelToUnderscore = function(e) {
                return e.replace(/(?:^|\.?)([A-Z])/g, (function(e, t) {
                    return "_" + t.toLowerCase()
                }
                )).replace(/^_/, "")
            }
            ;
            var n = t(2)
              , o = c(t(63))
              , a = c(t(10))
              , d = c(t(7))
              , s = t(12);
            function c(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var f = t(3)
              , l = !1
              , g = Object.prototype.toString
              , p = null;
            try {
                p = console.info.bind(window.console)
            } catch (e) {}
            i.replaceTokenInString = function(i, e, o) {
                return this._each(e, (function(e, t) {
                    e = void 0 === e ? "" : e;
                    var n = o + t.toUpperCase() + o
                      , r = new RegExp(n,"g");
                    i = i.replace(r, e)
                }
                )),
                i
            }
            ;
            var v, y = (v = 0,
            function() {
                return ++v
            }
            );
            function m() {
                return y() + Math.random().toString(16).substr(2)
            }
            function b(e) {
                if (i.isArray(e) && 2 === e.length && !isNaN(e[0]) && !isNaN(e[1]))
                    return e[0] + "x" + e[1]
            }
            function h() {
                return window.console && window.console.log
            }
            i.getUniqueIdentifierStr = m,
            i.generateUUID = function e(t) {
                return t ? (t ^ 16 * Math.random() >> t / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, e)
            }
            ,
            i.getBidIdParameter = function(e, t) {
                return t && t[e] ? t[e] : ""
            }
            ,
            i.tryAppendQueryString = function(e, t, n) {
                return n ? e + (t + "=") + encodeURIComponent(n) + "&" : e
            }
            ,
            i.parseQueryStringParameters = function(e) {
                var t = "";
                for (var n in e)
                    e.hasOwnProperty(n) && (t += n + "=" + encodeURIComponent(e[n]) + "&");
                return t
            }
            ,
            i.transformAdServerTargetingObj = function(t) {
                return t && 0 < Object.getOwnPropertyNames(t).length ? _(t).map((function(e) {
                    return e + "=" + encodeURIComponent(w(t, e))
                }
                )).join("&") : ""
            }
            ,
            i.getTopWindowLocation = function() {
                if (i.inIframe()) {
                    var e = void 0;
                    try {
                        e = i.getAncestorOrigins() || i.getTopFrameReferrer()
                    } catch (e) {
                        logInfo("could not obtain top window location", e)
                    }
                    if (e)
                        return (0,
                        s.parse)(e, {
                            decodeSearchAsString: !0
                        })
                }
                return i.getWindowLocation()
            }
            ,
            i.getTopFrameReferrer = function() {
                try {
                    window.top.location.toString();
                    for (var e = "", t = void 0; (t = t ? t.parent : window).document && t.document.referrer && (e = t.document.referrer),
                    t !== window.top; )
                        ;
                    return e
                } catch (e) {
                    return window.document.referrer
                }
            }
            ,
            i.getAncestorOrigins = function() {
                if (window.document.location && window.document.location.ancestorOrigins && 1 <= window.document.location.ancestorOrigins.length)
                    return window.document.location.ancestorOrigins[window.document.location.ancestorOrigins.length - 1]
            }
            ,
            i.getWindowTop = function() {
                return window.top
            }
            ,
            i.getWindowSelf = function() {
                return window.self
            }
            ,
            i.getWindowLocation = function() {
                return window.location
            }
            ,
            i.getTopWindowUrl = function() {
                var t = void 0;
                try {
                    t = this.getTopWindowLocation().href
                } catch (e) {
                    t = ""
                }
                return t
            }
            ,
            i.getTopWindowHostName = function() {
                var t = void 0;
                try {
                    t = this.getTopWindowLocation().hostname
                } catch (e) {
                    t = ""
                }
                return t
            }
            ,
            i.getTopWindowReferrer = function() {
                try {
                    return window.top.document.referrer
                } catch (e) {
                    return document.referrer
                }
            }
            ,
            i.logWarn = function(e) {
                E() && console.warn && console.warn("WARNING: " + e)
            }
            ,
            i.logInfo = function(e, t) {
                E() && h() && p && (t && 0 !== t.length || (t = ""),
                p("INFO: " + e + ("" === t ? "" : " : params : "), t))
            }
            ,
            i.logMessage = function(e) {
                E() && h() && console.log("MESSAGE: " + e)
            }
            ,
            i.hasConsoleLogger = h;
            var E = function() {
                if (!1 === n.config.getConfig("debug") && !1 === l) {
                    var e = "TRUE" === T(f.DEBUG_MODE).toUpperCase();
                    n.config.setConfig({
                        debug: e
                    }),
                    l = !0
                }
                return !!n.config.getConfig("debug")
            };
            i.debugTurnedOn = E,
            i.logError = function() {
                E() && window.console && window.console.error && console.error.apply(console, arguments)
            }
            ,
            i.createInvisibleIframe = function() {
                var e = document.createElement("iframe");
                return e.id = m(),
                e.height = 0,
                e.width = 0,
                e.border = "0px",
                e.hspace = "0",
                e.vspace = "0",
                e.marginWidth = "0",
                e.marginHeight = "0",
                e.style.border = "0",
                e.scrolling = "no",
                e.frameBorder = "0",
                e.src = "about:blank",
                e.style.display = "none",
                e
            }
            ;
            var T = function(e) {
                var t = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(window.location.search);
                return null === t ? "" : decodeURIComponent(t[1].replace(/\+/g, " "))
            };
            i.getParameterByName = T,
            i.hasValidBidRequest = function(e, n, t) {
                var r = !1;
                function i(e, t) {
                    t === n[o] && (r = !0)
                }
                for (var o = 0; o < n.length; o++)
                    if (r = !1,
                    this._each(e, i),
                    !r)
                        return this.logError("Params are missing for bid request. One of these required paramaters are missing: " + n, t),
                        !1;
                return !0
            }
            ,
            i.addEventHandler = function(e, t, n) {
                e.addEventListener ? e.addEventListener(t, n, !0) : e.attachEvent && e.attachEvent("on" + t, n)
            }
            ,
            i.isA = function(e, t) {
                return g.call(e) === "[object " + t + "]"
            }
            ,
            i.isFn = function(e) {
                return this.isA(e, "Function")
            }
            ,
            i.isStr = function(e) {
                return this.isA(e, "String")
            }
            ,
            i.isArray = function(e) {
                return this.isA(e, "Array")
            }
            ,
            i.isNumber = function(e) {
                return this.isA(e, "Number")
            }
            ,
            i.isPlainObject = function(e) {
                return this.isA(e, "Object")
            }
            ,
            i.isEmpty = function(e) {
                if (!e)
                    return !0;
                if (i.isArray(e) || i.isStr(e))
                    return !(0 < e.length);
                for (var t in e)
                    if (hasOwnProperty.call(e, t))
                        return !1;
                return !0
            }
            ,
            i.isEmptyStr = function(e) {
                return this.isStr(e) && (!e || 0 === e.length)
            }
            ,
            i._each = function(e, t) {
                if (!this.isEmpty(e)) {
                    if (this.isFn(e.forEach))
                        return e.forEach(t, this);
                    var n = 0
                      , r = e.length;
                    if (0 < r)
                        for (; n < r; n++)
                            t(e[n], n, e);
                    else
                        for (n in e)
                            hasOwnProperty.call(e, n) && t.call(this, e[n], n)
                }
            }
            ,
            i.contains = function(e, t) {
                if (this.isEmpty(e))
                    return !1;
                if (this.isFn(e.indexOf))
                    return -1 !== e.indexOf(t);
                for (var n = e.length; n--; )
                    if (e[n] === t)
                        return !0;
                return !1
            }
            ,
            i.indexOf = (function() {
                if (Array.prototype.indexOf)
                    return Array.prototype.indexOf
            }
            )(),
            i._map = function(n, r) {
                if (this.isEmpty(n))
                    return [];
                if (this.isFn(n.map))
                    return n.map(r);
                var i = [];
                return this._each(n, (function(e, t) {
                    i.push(r(e, t, n))
                }
                )),
                i
            }
            ;
            var S = function(e, t) {
                return e.hasOwnProperty ? e.hasOwnProperty(t) : void 0 !== e[t] && e.constructor.prototype[t] !== e[t]
            };
            function A(e, t, n) {
                return n.indexOf(e) === t
            }
            function I(e, t) {
                return e.concat(t)
            }
            function _(e) {
                return Object.keys(e)
            }
            function w(e, t) {
                return e[t]
            }
            i.insertElement = function(e, t, n) {
                t = t || document;
                var r = void 0;
                r = n ? t.getElementsByTagName(n) : t.getElementsByTagName("head");
                try {
                    (r = r.length ? r : t.getElementsByTagName("body")).length && (r = r[0]).insertBefore(e, r.firstChild)
                } catch (e) {}
            }
            ,
            i.triggerPixel = function(e) {
                (new Image).src = e
            }
            ,
            i.callBurl = function(e) {
                var t = e.source
                  , n = e.burl;
                t === f.S2S.SRC && n && i.triggerPixel(n)
            }
            ,
            i.insertHtmlIntoIframe = function(e) {
                if (e) {
                    var t = document.createElement("iframe");
                    t.id = i.getUniqueIdentifierStr(),
                    t.width = 0,
                    t.height = 0,
                    t.hspace = "0",
                    t.vspace = "0",
                    t.marginWidth = "0",
                    t.marginHeight = "0",
                    t.style.display = "none",
                    t.style.height = "0px",
                    t.style.width = "0px",
                    t.scrolling = "no",
                    t.frameBorder = "0",
                    t.allowtransparency = "true",
                    i.insertElement(t, document, "body"),
                    t.contentWindow.document.open(),
                    t.contentWindow.document.write(e),
                    t.contentWindow.document.close()
                }
            }
            ,
            i.insertUserSyncIframe = function(e) {
                var t = this.createTrackPixelIframeHtml(e, !1, "allow-scripts allow-same-origin")
                  , n = document.createElement("div");
                n.innerHTML = t;
                var r = n.firstChild;
                i.insertElement(r)
            }
            ,
            i.createTrackPixelHtml = function(e) {
                if (!e)
                    return "";
                var t = '<div style="position:absolute;left:0px;top:0px;visibility:hidden;">';
                return t += '<img src="' + encodeURI(e) + '"></div>'
            }
            ,
            i.createTrackPixelIframeHtml = function(e) {
                var t = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1]
                  , n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "";
                return e ? (t && (e = encodeURI(e)),
                n && (n = 'sandbox="' + n + '"'),
                "<iframe " + n + ' id="' + i.getUniqueIdentifierStr() + '"\n      frameborder="0"\n      allowtransparency="true"\n      marginheight="0" marginwidth="0"\n      width="0" hspace="0" vspace="0" height="0"\n      style="height:0px;width:0px;display:none;"\n      scrolling="no"\n      src="' + e + '">\n    </iframe>') : ""
            }
            ,
            i.getIframeDocument = function(e) {
                if (e) {
                    var t = void 0;
                    try {
                        t = e.contentWindow ? e.contentWindow.document : e.contentDocument.document ? e.contentDocument.document : e.contentDocument
                    } catch (e) {
                        this.logError("Cannot get iframe document", e)
                    }
                    return t
                }
            }
            ,
            i.getValueString = function(e, t, n) {
                return null == t ? n : this.isStr(t) ? t : this.isNumber(t) ? t.toString() : void this.logWarn("Unsuported type for param: " + e + " required type: String")
            }
            ;
            i.getHighestCpm = C("timeToRespond", (function(e, t) {
                return t < e
            }
            )),
            i.getOldestHighestCpmBid = C("responseTimestamp", (function(e, t) {
                return t < e
            }
            )),
            i.getLatestHighestCpmBid = C("responseTimestamp", (function(e, t) {
                return e < t
            }
            ));
            function C(n, r) {
                return function(e, t) {
                    return e.cpm === t.cpm ? r(e[n], t[n]) ? t : e : e.cpm < t.cpm ? t : e
                }
            }
            var O = function(e, t) {
                return e.getAdUnitPath() === t || e.getSlotElementId() === t
            }
        },
        1: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var c = function(e, t) {
                if (Array.isArray(e))
                    return e;
                if (Symbol.iterator in Object(e))
                    return (function(e, t) {
                        var n = []
                          , r = !0
                          , i = !1
                          , o = void 0;
                        try {
                            for (var a, u = e[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value),
                            !t || n.length !== t); r = !0)
                                ;
                        } catch (e) {
                            i = !0,
                            o = e
                        } finally {
                            try {
                                !r && u.return && u.return()
                            } finally {
                                if (i)
                                    throw o
                            }
                        }
                        return n
                    }
                    )(e, t);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
              , p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
              , v = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ;
            t.registerBidder = function(t) {
                var n = Array.isArray(t.supportedMediaTypes) ? {
                    supportedMediaTypes: t.supportedMediaTypes
                } : void 0;
                function r(e) {
                    var t = l(e);
                    i.default.registerBidAdapter(t, e.code, n)
                }
                r(t),
                Array.isArray(t.aliases) && t.aliases.forEach((function(e) {
                    i.default.aliasRegistry[e] = t.code,
                    r(v({}, t, {
                        code: e
                    }))
                }
                ))
            }
            ,
            t.newBidder = l,
            t.isValid = T;
            var r = s(n(28))
              , i = s(n(8))
              , y = n(2)
              , m = s(n(19))
              , o = n(15)
              , a = n(18)
              , u = n(65)
              , b = s(n(3))
              , h = s(n(9))
              , d = s(n(7))
              , E = n(0);
            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var f = ["requestId", "cpm", "ttl", "creativeId", "netRevenue", "currency"];
            function l(f) {
                return v(new r.default(f.code), {
                    getSpec: function() {
                        return Object.freeze(f)
                    },
                    registerSyncs: l,
                    callBids: function(o, a, r, n) {
                        if (Array.isArray(o.bids)) {
                            var u = {}
                              , d = []
                              , e = o.bids.filter(g);
                            if (0 !== e.length) {
                                var s = {};
                                e.forEach((function(e) {
                                    (s[e.bidId] = e).adUnitCode || (e.adUnitCode = e.placementCode)
                                }
                                ));
                                var t = f.buildRequests(e, o);
                                if (t && 0 !== t.length) {
                                    Array.isArray(t) || (t = [t]);
                                    var c = (0,
                                    E.delayExecution)(i, t.length);
                                    t.forEach((function(i) {
                                        switch (i.method) {
                                        case "GET":
                                            n("" + i.url + (function(e) {
                                                if (e)
                                                    return "?" + ("object" === (void 0 === e ? "undefined" : p(e)) ? (0,
                                                    E.parseQueryStringParameters)(e) : e);
                                                return ""
                                            }
                                            )(i.data), {
                                                success: e,
                                                error: t
                                            }, void 0, v({
                                                method: "GET",
                                                withCredentials: !0
                                            }, i.options));
                                            break;
                                        case "POST":
                                            n(i.url, {
                                                success: e,
                                                error: t
                                            }, "string" == typeof i.data ? i.data : JSON.stringify(i.data), v({
                                                method: "POST",
                                                contentType: "text/plain",
                                                withCredentials: !0
                                            }, i.options));
                                            break;
                                        default:
                                            (0,
                                            E.logWarn)("Skipping invalid request from " + f.code + ". Request type " + i.type + " must be GET or POST"),
                                            c()
                                        }
                                        function e(e, t) {
                                            try {
                                                e = JSON.parse(e)
                                            } catch (e) {}
                                            e = {
                                                body: e,
                                                headers: {
                                                    get: t.getResponseHeader.bind(t)
                                                }
                                            },
                                            d.push(e);
                                            var n = void 0;
                                            try {
                                                n = f.interpretResponse(e, i)
                                            } catch (e) {
                                                return (0,
                                                E.logError)("Bidder " + f.code + " failed to interpret the server's response. Continuing without bids", null, e),
                                                void c()
                                            }
                                            function r(e) {
                                                var t, n, r = s[e.requestId];
                                                if (r) {
                                                    var i = v(m.default.createBid(b.default.STATUS.GOOD, r), e);
                                                    t = r.adUnitCode,
                                                    n = i,
                                                    u[t] = !0,
                                                    T(t, n, [o]) && a(t, n)
                                                } else
                                                    (0,
                                                    E.logWarn)("Bidder " + f.code + " made bid for unknown request ID: " + e.requestId + ". Ignoring.")
                                            }
                                            n && (n.forEach ? n.forEach(r) : r(n)),
                                            c(n)
                                        }
                                        function t(e) {
                                            (0,
                                            E.logError)("Server call for " + f.code + " failed: " + e + ". Continuing without bids."),
                                            c()
                                        }
                                    }
                                    ))
                                } else
                                    i()
                            } else
                                i()
                        }
                        function i(e) {
                            var t = (e ? e[0] ? e : [e] : []).some((function(e) {
                                return "video" === e.mediaType
                            }
                            ))
                              , n = y.config.getConfig("cache.url");
                            t && n || r(),
                            h.default.emit(b.default.EVENTS.BIDDER_DONE, o),
                            l(d, o.gdprConsent)
                        }
                    }
                });
                function l(e, t) {
                    if (f.getUserSyncs) {
                        var n = f.getUserSyncs({
                            iframeEnabled: y.config.getConfig("userSync.iframeEnabled"),
                            pixelEnabled: y.config.getConfig("userSync.pixelEnabled")
                        }, e, t);
                        n && (Array.isArray(n) || (n = [n]),
                        n.forEach((function(e) {
                            o.userSync.registerSync(e.type, f.code, e.url)
                        }
                        )))
                    }
                }
                function g(e) {
                    return !!f.isBidRequestValid(e) || ((0,
                    E.logWarn)("Invalid bid sent to bidder " + f.code + ": " + JSON.stringify(e)),
                    !1)
                }
            }
            function T(e, t, n) {
                function r(e) {
                    return "Invalid bid from " + t.bidderCode + ". Ignoring bid: " + e
                }
                return e ? t ? (i = Object.keys(t),
                f.every((function(e) {
                    return (0,
                    d.default)(i, e)
                }
                )) ? "native" !== t.mediaType || (0,
                a.nativeBidIsValid)(t, n) ? "video" !== t.mediaType || (0,
                u.isValidVideoBid)(t, n) ? !("banner" === t.mediaType && !(function(e, t, n) {
                    if ((t.width || 0 === t.width) && (t.height || 0 === t.height))
                        return !0;
                    var r = (0,
                    E.getBidderRequest)(n, t.bidderCode, e)
                      , i = r && r.bids && r.bids[0] && r.bids[0].sizes
                      , o = (0,
                    E.parseSizesInput)(i);
                    if (1 !== o.length)
                        return !1;
                    var a = o[0].split("x")
                      , u = c(a, 2)
                      , d = u[0]
                      , s = u[1];
                    return t.width = d,
                    t.height = s,
                    !0
                }
                )(e, t, n)) || ((0,
                E.logError)(r("Banner bids require a width and height")),
                !1) : ((0,
                E.logError)(r("Video bid does not have required vastUrl or renderer property")),
                !1) : ((0,
                E.logError)(r("Native bid missing some required properties.")),
                !1) : ((0,
                E.logError)(r("Bidder " + t.bidderCode + " is missing required params. Check http://prebid.org/dev-docs/bidder-adapter-1.html for list of params.")),
                !1)) : ((0,
                E.logWarn)("Some adapter tried to add an undefined bid for " + e + "."),
                !1) : ((0,
                E.logWarn)("No adUnitCode was supplied to addBidResponse."),
                !1);
                var i
            }
        },
        10: function(e, t, n) {
            n(43),
            e.exports = n(13).Array.find
        },
        102: function(e, t, n) {
            "use strict";
            var r = n(16)
              , i = n(33)(6)
              , o = "findIndex"
              , a = !0;
            o in [] && Array(1)[o]((function() {
                a = !1
            }
            )),
            r(r.P + r.F * a, "Array", {
                findIndex: function(e) {
                    return i(this, e, 1 < arguments.length ? arguments[1] : void 0)
                }
            }),
            n(27)(o)
        },
        11: function(e, t, n) {
            "use strict";
            var r, i = n(7), o = (r = i) && r.__esModule ? r : {
                default: r
            }, a = (function(e) {
                {
                    if (e && e.__esModule)
                        return e;
                    var t = {};
                    if (null != e)
                        for (var n in e)
                            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e,
                    t
                }
            }
            )(n(0));
            var u = {}
              , d = ["criteo"];
            function s(e, t) {
                var n = document.createElement("script");
                n.type = "text/javascript",
                n.async = !0,
                t && "function" == typeof t && (n.readyState ? n.onreadystatechange = function() {
                    "loaded" !== n.readyState && "complete" !== n.readyState || (n.onreadystatechange = null,
                    t())
                }
                : n.onload = function() {
                    t()
                }
                ),
                n.src = e;
                var r = document.getElementsByTagName("head");
                (r = r.length ? r : document.getElementsByTagName("body")).length && (r = r[0]).insertBefore(n, r.firstChild)
            }
            t.loadExternalScript = function(e, t) {
                if (t && e)
                    if ((0,
                    o.default)(d, t)) {
                        if (!u[e]) {
                            a.logWarn("module " + t + " is loading external JavaScript");
                            var n = document.createElement("script");
                            n.type = "text/javascript",
                            n.async = !0,
                            n.src = e,
                            a.insertElement(n),
                            u[e] = !0
                        }
                    } else
                        a.logError(t + " not whitelisted for loading external JavaScript");
                else
                    a.logError("cannot load external script without url and moduleCode")
            }
            ,
            t.loadScript = function(t, e, n) {
                t ? n ? u[t] ? e && "function" == typeof e && (u[t].loaded ? e() : u[t].callbacks.push(e)) : (u[t] = {
                    loaded: !1,
                    callbacks: []
                },
                e && "function" == typeof e && u[t].callbacks.push(e),
                s(t, (function() {
                    u[t].loaded = !0;
                    try {
                        for (var e = 0; e < u[t].callbacks.length; e++)
                            u[t].callbacks[e]()
                    } catch (e) {
                        a.logError("Error executing callback", "adloader.js:loadScript", e)
                    }
                }
                ))) : s(t, e) : a.logError("Error attempting to request empty URL", "adloader.js:loadScript")
            }
        },
        12: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = function(e, t) {
                if (Array.isArray(e))
                    return e;
                if (Symbol.iterator in Object(e))
                    return (function(e, t) {
                        var n = []
                          , r = !0
                          , i = !1
                          , o = void 0;
                        try {
                            for (var a, u = e[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value),
                            !t || n.length !== t); r = !0)
                                ;
                        } catch (e) {
                            i = !0,
                            o = e
                        } finally {
                            try {
                                !r && u.return && u.return()
                            } finally {
                                if (i)
                                    throw o
                            }
                        }
                        return n
                    }
                    )(e, t);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            };
            function i(e) {
                return e ? e.replace(/^\?/, "").split("&").reduce((function(e, t) {
                    var n = t.split("=")
                      , r = a(n, 2)
                      , i = r[0]
                      , o = r[1];
                    return /\[\]$/.test(i) ? (e[i = i.replace("[]", "")] = e[i] || [],
                    e[i].push(o)) : e[i] = o || "",
                    e
                }
                ), {}) : {}
            }
            function r(e) {
                return Object.keys(e).map((function(t) {
                    return Array.isArray(e[t]) ? e[t].map((function(e) {
                        return t + "[]=" + e
                    }
                    )).join("&") : t + "=" + e[t]
                }
                )).join("&")
            }
            t.parseQS = i,
            t.formatQS = r,
            t.parse = function(e, t) {
                var n = document.createElement("a");
                t && "noDecodeWholeURL"in t && t.noDecodeWholeURL ? n.href = e : n.href = decodeURIComponent(e);
                var r = t && "decodeSearchAsString"in t && t.decodeSearchAsString;
                return {
                    href: n.href,
                    protocol: (n.protocol || "").replace(/:$/, ""),
                    hostname: n.hostname,
                    port: +n.port,
                    pathname: n.pathname.replace(/^(?!\/)/, "/"),
                    search: r ? n.search : i(n.search || ""),
                    hash: (n.hash || "").replace(/^#/, ""),
                    host: n.host || window.location.host
                }
            }
            ,
            t.format = function(e) {
                return (e.protocol || "http") + "://" + (e.host || e.hostname + (e.port ? ":" + e.port : "")) + (e.pathname || "") + (e.search ? "?" + r(e.search || "") : "") + (e.hash ? "#" + e.hash : "")
            }
        },
        13: function(e, t) {
            var n = e.exports = {
                version: "2.5.7"
            };
            "number" == typeof __e && (__e = n)
        },
        14: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.Renderer = r;
            var u = n(11)
              , d = (function(e) {
                {
                    if (e && e.__esModule)
                        return e;
                    var t = {};
                    if (null != e)
                        for (var n in e)
                            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e,
                    t
                }
            }
            )(n(0));
            function r(e) {
                var t = this
                  , n = e.url
                  , r = e.config
                  , i = e.id
                  , o = e.callback
                  , a = e.loaded;
                this.url = n,
                this.config = r,
                this.handlers = {},
                this.id = i,
                this.loaded = a,
                this.cmd = [],
                this.push = function(e) {
                    "function" == typeof e ? t.loaded ? e.call() : t.cmd.push(e) : d.logError("Commands given to Renderer.push must be wrapped in a function")
                }
                ,
                this.callback = o || function() {
                    t.loaded = !0,
                    t.process()
                }
                ,
                (0,
                u.loadScript)(n, this.callback, !0)
            }
            r.install = function(e) {
                return new r({
                    url: e.url,
                    config: e.config,
                    id: e.id,
                    callback: e.callback,
                    loaded: e.loaded
                })
            }
            ,
            r.prototype.getConfig = function() {
                return this.config
            }
            ,
            r.prototype.setRender = function(e) {
                this.render = e
            }
            ,
            r.prototype.setEventHandlers = function(e) {
                this.handlers = e
            }
            ,
            r.prototype.handleVideoEvent = function(e) {
                var t = e.id
                  , n = e.eventName;
                "function" == typeof this.handlers[n] && this.handlers[n](),
                d.logMessage("Prebid Renderer event for id " + t + " type " + n)
            }
            ,
            r.prototype.process = function() {
                for (; 0 < this.cmd.length; )
                    try {
                        this.cmd.shift().call()
                    } catch (e) {
                        d.logError("Error processing Renderer command: ", e)
                    }
            }
        },
        15: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.userSync = void 0;
            var i = function(e, t) {
                if (Array.isArray(e))
                    return e;
                if (Symbol.iterator in Object(e))
                    return (function(e, t) {
                        var n = []
                          , r = !0
                          , i = !1
                          , o = void 0;
                        try {
                            for (var a, u = e[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value),
                            !t || n.length !== t); r = !0)
                                ;
                        } catch (e) {
                            i = !0,
                            o = e
                        } finally {
                            try {
                                !r && u.return && u.return()
                            } finally {
                                if (i)
                                    throw o
                            }
                        }
                        return n
                    }
                    )(e, t);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
              , d = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ;
            t.newUserSync = r;
            var s = (function(e) {
                {
                    if (e && e.__esModule)
                        return e;
                    var t = {};
                    if (null != e)
                        for (var n in e)
                            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e,
                    t
                }
            }
            )(n(0))
              , c = n(2);
            function r(e) {
                var t = {}
                  , o = {
                    image: [],
                    iframe: []
                }
                  , n = !1
                  , a = {}
                  , u = e.config;
                function r() {
                    if (u.syncEnabled && e.browserSupportsCookies && !n) {
                        try {
                            !(function() {
                                if (!u.pixelEnabled)
                                    return;
                                s.shuffle(o.image).forEach((function(e) {
                                    var t = i(e, 2)
                                      , n = t[0]
                                      , r = t[1];
                                    s.logMessage("Invoking image pixel user sync for bidder: " + n),
                                    s.triggerPixel(r)
                                }
                                ))
                            }
                            )(),
                            (function() {
                                if (!u.iframeEnabled)
                                    return;
                                s.shuffle(o.iframe).forEach((function(e) {
                                    var t = i(e, 2)
                                      , n = t[0]
                                      , r = t[1];
                                    s.logMessage("Invoking iframe user sync for bidder: " + n),
                                    s.insertUserSyncIframe(r)
                                }
                                ))
                            }
                            )()
                        } catch (e) {
                            return s.logError("Error firing user syncs", e)
                        }
                        o = {
                            image: [],
                            iframe: []
                        },
                        n = !0
                    }
                }
                return c.config.getConfig("userSync", (function(e) {
                    u = d(u, e.userSync)
                }
                )),
                t.registerSync = function(e, t, n) {
                    return u.syncEnabled && s.isArray(o[e]) ? t ? Number(a[t]) >= u.syncsPerBidder ? s.logWarn('Number of user syncs exceeded for "' + t + '"') : u.enabledBidders && u.enabledBidders.length && u.enabledBidders.indexOf(t) < 0 ? s.logWarn('Bidder "' + t + '" not supported') : (o[e].push([t, n]),
                    (r = a)[i = t] ? r[i] += 1 : r[i] = 1,
                    void (a = r)) : s.logWarn("Bidder is required for registering sync") : s.logWarn('User sync type "' + e + '" not supported');
                    var r, i
                }
                ,
                t.syncUsers = function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0;
                    if (e)
                        return setTimeout(r, Number(e));
                    r()
                }
                ,
                t.triggerUserSyncs = function() {
                    u.enableOverride && t.syncUsers()
                }
                ,
                t
            }
            c.config.setDefaults({
                userSync: {
                    syncEnabled: !0,
                    pixelEnabled: !0,
                    syncsPerBidder: 5,
                    syncDelay: 3e3
                }
            });
            var o = !s.isSafariBrowser() && s.cookiesAreEnabled();
            t.userSync = r({
                config: c.config.getConfig("userSync"),
                browserSupportsCookies: o
            })
        },
        16: function(e, t, n) {
            var v = n(20)
              , y = n(13)
              , m = n(31)
              , b = n(45)
              , h = n(52)
              , E = "prototype"
              , T = function(e, t, n) {
                var r, i, o, a = e & T.F, u = e & T.G, d = e & T.S, s = e & T.P, c = e & T.B, f = e & T.W, l = u ? y : y[t] || (y[t] = {}), g = l[E], p = u ? v : d ? v[t] : (v[t] || {})[E];
                for (r in u && (n = t),
                n)
                    (i = !a && p && void 0 !== p[r]) && h(l, r) || (o = i ? p[r] : n[r],
                    l[r] = u && "function" != typeof p[r] ? n[r] : c && i ? m(o, v) : f && p[r] == o ? (function(r) {
                        var e = function(e, t, n) {
                            if (this instanceof r) {
                                switch (arguments.length) {
                                case 0:
                                    return new r;
                                case 1:
                                    return new r(e);
                                case 2:
                                    return new r(e,t)
                                }
                                return new r(e,t,n)
                            }
                            return r.apply(this, arguments)
                        };
                        return e[E] = r[E],
                        e
                    }
                    )(o) : s && "function" == typeof o ? m(Function.call, o) : o,
                    s && ((l.virtual || (l.virtual = {}))[r] = o,
                    e & T.R && g && !g[r] && b(g, r, o)))
            };
            T.F = 1,
            T.G = 2,
            T.S = 4,
            T.P = 8,
            T.B = 16,
            T.W = 32,
            T.U = 64,
            T.R = 128,
            e.exports = T
        },
        17: function(e, t) {
            e.exports = function(e) {
                return "object" == typeof e ? null !== e : "function" == typeof e
            }
        },
        18: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.hasNonNativeBidder = t.nativeBidder = t.nativeAdUnit = t.NATIVE_TARGETING_KEYS = t.NATIVE_KEYS = t.nativeAdapters = void 0;
            var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ;
            t.processNativeAdUnitParams = function(e) {
                if (e && e.type && (t = e.type,
                t && (0,
                u.default)(Object.keys(c), t) || ((0,
                a.logError)(t + " nativeParam is not supported"),
                0)))
                    return c[e.type];
                var t;
                return e
            }
            ,
            t.nativeBidIsValid = function(t, e) {
                var n = (0,
                a.getBidRequest)(t.adId, e);
                if (!n)
                    return !1;
                if (!(0,
                a.deepAccess)(t, "native.clickUrl"))
                    return !1;
                if ((0,
                a.deepAccess)(t, "native.image") && (!(0,
                a.deepAccess)(t, "native.image.height") || !(0,
                a.deepAccess)(t, "native.image.width")))
                    return !1;
                if ((0,
                a.deepAccess)(t, "native.icon") && (!(0,
                a.deepAccess)(t, "native.icon.height") || !(0,
                a.deepAccess)(t, "native.icon.width")))
                    return !1;
                var r = n.nativeParams;
                if (!r)
                    return !0;
                var i = Object.keys(r).filter((function(e) {
                    return r[e].required
                }
                ))
                  , o = Object.keys(t.native).filter((function(e) {
                    return t.native[e]
                }
                ));
                return i.every((function(e) {
                    return (0,
                    u.default)(o, e)
                }
                ))
            }
            ,
            t.fireNativeTrackers = function(e, t) {
                var n = void 0;
                "click" === e.action ? n = t.native && t.native.clickTrackers : (n = t.native && t.native.impressionTrackers,
                t.native && t.native.javascriptTrackers && (0,
                a.insertHtmlIntoIframe)(t.native.javascriptTrackers));
                (n || []).forEach(a.triggerPixel)
            }
            ,
            t.getNativeTargeting = function(r) {
                var i = {};
                return Object.keys(r.native).forEach((function(e) {
                    var t = s[e]
                      , n = r.native[e];
                    "object" === (void 0 === n ? "undefined" : o(n)) && n.url && (n = n.url),
                    t && (i[t] = n)
                }
                )),
                i
            }
            ;
            var r, a = n(0), i = n(7), u = (r = i) && r.__esModule ? r : {
                default: r
            };
            var d = t.nativeAdapters = []
              , s = t.NATIVE_KEYS = {
                title: "hb_native_title",
                body: "hb_native_body",
                sponsoredBy: "hb_native_brand",
                image: "hb_native_image",
                icon: "hb_native_icon",
                clickUrl: "hb_native_linkurl",
                cta: "hb_native_cta"
            }
              , c = (t.NATIVE_TARGETING_KEYS = Object.keys(s).map((function(e) {
                return s[e]
            }
            )),
            {
                image: {
                    image: {
                        required: !0
                    },
                    title: {
                        required: !0
                    },
                    sponsoredBy: {
                        required: !0
                    },
                    clickUrl: {
                        required: !0
                    },
                    body: {
                        required: !1
                    },
                    icon: {
                        required: !1
                    }
                }
            });
            t.nativeAdUnit = function(e) {
                var t = "native" === e.mediaType
                  , n = (0,
                a.deepAccess)(e, "mediaTypes.native");
                return t || n
            }
            ;
            var f = t.nativeBidder = function(e) {
                return (0,
                u.default)(d, e.bidder)
            }
            ;
            t.hasNonNativeBidder = function(e) {
                return e.bids.filter((function(e) {
                    return !f(e)
                }
                )).length
            }
        },
        182: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.addBidResponse = t.AUCTION_COMPLETED = t.AUCTION_IN_PROGRESS = t.AUCTION_STARTED = void 0;
            var l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
              , g = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ;
            t.newAuction = function(e) {
                var f = e.adUnits
                  , t = e.adUnitCodes
                  , n = e.callback
                  , r = e.cbTimeout
                  , i = e.labels
                  , o = f
                  , a = i
                  , l = t
                  , g = []
                  , p = []
                  , u = void 0
                  , v = w.generateUUID()
                  , y = void 0
                  , m = n
                  , b = void 0
                  , h = r
                  , d = [];
                function s(e, t) {
                    if (t && clearTimeout(b),
                    null != m) {
                        var n = [];
                        e && (w.logMessage("Auction " + v + " timedOut"),
                        u = p,
                        d = (a = g).filter((function(e) {
                            return !e.doneCbCallCount
                        }
                        )).map((function(e) {
                            return e.bidderCode
                        }
                        )).filter(T.uniques),
                        s = u.map((function(e) {
                            return e.bidder
                        }
                        )).filter(T.uniques),
                        c = d.filter((function(e) {
                            return !(0,
                            I.default)(s, e)
                        }
                        )),
                        (n = a.map((function(e) {
                            return (e.bids || []).filter((function(e) {
                                return (0,
                                I.default)(c, e.bidder)
                            }
                            ))
                        }
                        )).reduce(T.flatten, []).map((function(e) {
                            return {
                                bidId: e.bidId,
                                bidder: e.bidder,
                                adUnitCode: e.adUnitCode,
                                auctionId: e.auctionId
                            }
                        }
                        ))).length && O.emit(B.EVENTS.BID_TIMEOUT, n)),
                        O.emit(B.EVENTS.AUCTION_END, {
                            auctionId: v
                        });
                        try {
                            y = U;
                            var r = l
                              , i = [p.filter(T.adUnitsFilter.bind(this, r)).reduce(D, {})];
                            m.apply(pbjs, i)
                        } catch (e) {
                            w.logError("Error executing bidsBackHandler", null, e)
                        } finally {
                            n.length && C.callTimedOutBidders(f, n, h);
                            var o = S.config.getConfig("userSync") || {};
                            o.enableOverride || _(o.syncDelay)
                        }
                        m = null
                    }
                    var a, u, d, s, c
                }
                function c(e) {
                    var t = e;
                    return (0,
                    T.delayExecution)((function() {
                        var e = (0,
                        A.default)(g, (function(e) {
                            return t === e.bidderRequestId
                        }
                        ));
                        e.doneCbCallCount += 1,
                        E()
                    }
                    ), 1)
                }
                function E() {
                    g.every((function(e) {
                        return 1 <= e.doneCbCallCount
                    }
                    )) && (w.logInfo("Bids Received for Auction with id: " + v, p),
                    y = U,
                    s(!1, !0))
                }
                return {
                    addBidReceived: function(e) {
                        p = p.concat(e)
                    },
                    executeCallback: s,
                    callBids: function() {
                        e = s.bind(null, !0),
                        t = setTimeout(e, h),
                        b = t,
                        y = N;
                        var e, t;
                        var n = {
                            timestamp: u = Date.now(),
                            auctionId: v,
                            timeout: h
                        };
                        O.emit(B.EVENTS.AUCTION_INIT, n);
                        var r = C.makeBidRequests(o, u, v, h, a);
                        w.logInfo("Bids Requested for Auction with id: " + v, r),
                        r.forEach((function(e) {
                            var t;
                            t = e,
                            g = g.concat(t)
                        }
                        )),
                        y = R,
                        C.callBids(o, r, j.bind(this), c.bind(this))
                    },
                    bidsBackAll: E,
                    addWinningBid: function(e) {
                        d = d.concat(e)
                    },
                    getWinningBids: function() {
                        return d
                    },
                    getTimeout: function() {
                        return h
                    },
                    getAuctionId: function() {
                        return v
                    },
                    getAuctionStatus: function() {
                        return y
                    },
                    getAdUnits: function() {
                        return o
                    },
                    getAdUnitCodes: function() {
                        return l
                    },
                    getBidRequests: function() {
                        return g
                    },
                    getBidsReceived: function() {
                        return p
                    }
                }
            }
            ,
            t.getStandardBidderSettings = u,
            t.getKeyValueTargetingPairs = m,
            t.adjustBids = s;
            var T = n(0)
              , p = n(30)
              , i = n(18)
              , c = n(183)
              , v = n(14)
              , S = n(2)
              , r = n(15)
              , o = n(21)
              , A = a(n(10))
              , I = a(n(7));
            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var _ = r.userSync.syncUsers
              , w = n(0)
              , C = n(8)
              , O = n(9)
              , B = n(3)
              , N = t.AUCTION_STARTED = "started"
              , R = t.AUCTION_IN_PROGRESS = "inProgress"
              , U = t.AUCTION_COMPLETED = "completed";
            function f(e, t) {
                t.timeToRespond > e.getTimeout() + S.config.getConfig("timeoutBuffer") && e.executeCallback(!0)
            }
            function y(e, t) {
                O.emit(B.EVENTS.BID_RESPONSE, t),
                e.addBidReceived(t),
                f(e, t)
            }
            O.on(B.EVENTS.BID_ADJUSTMENT, (function(e) {
                s(e)
            }
            ));
            var j = t.addBidResponse = (0,
            o.createHook)("asyncSeries", (function(e, t) {
                var n, r, i, o, a = this.getBidRequests(), u = this.getAuctionId(), d = (0,
                T.getBidderRequest)(a, t.bidderCode, e), s = (function(e) {
                    var t = e.adUnitCode
                      , n = e.bid
                      , r = e.bidRequest
                      , i = e.auctionId
                      , o = r.start
                      , a = g({}, n, {
                        auctionId: i,
                        responseTimestamp: (0,
                        T.timestamp)(),
                        requestTimestamp: o,
                        cpm: parseFloat(n.cpm) || 0,
                        bidder: n.bidderCode,
                        adUnitCode: t
                    });
                    a.timeToRespond = a.responseTimestamp - a.requestTimestamp,
                    O.emit(B.EVENTS.BID_ADJUSTMENT, a);
                    var u = r.bids && (0,
                    A.default)(r.bids, (function(e) {
                        return e.adUnitCode == t
                    }
                    ))
                      , d = u && u.renderer;
                    d && d.url && (a.renderer = v.Renderer.install({
                        url: d.url
                    }),
                    a.renderer.setRender(d.render));
                    var s, c = S.config.getConfig("mediaTypePriceGranularity." + n.mediaType), f = (0,
                    p.getPriceBucketString)(a.cpm, "object" === (void 0 === c ? "undefined" : l(c)) ? c : S.config.getConfig("customPriceBucket"), S.config.getConfig("currency.granularityMultiplier"));
                    a.pbLg = f.low,
                    a.pbMg = f.med,
                    a.pbHg = f.high,
                    a.pbAg = f.auto,
                    a.pbDg = f.dense,
                    a.pbCg = f.custom,
                    a.bidderCode && (0 < a.cpm || a.dealId) && (s = m(a.bidderCode, a));
                    return a.adserverTargeting = g(a.adserverTargeting || {}, s),
                    a
                }
                )({
                    adUnitCode: e,
                    bid: t,
                    bidRequest: d,
                    auctionId: u
                });
                "video" === s.mediaType ? (n = this,
                r = s,
                i = d,
                o = !0,
                S.config.getConfig("cache.url") && (r.videoCacheKey ? r.vastUrl || (w.logError("videoCacheKey specified but not required vastUrl for video bid"),
                o = !1) : (o = !1,
                (0,
                c.store)([r], (function(e, t) {
                    e ? (w.logWarn("Failed to save to the video cache: " + e + ". Video bid must be discarded."),
                    f(n, r)) : (r.videoCacheKey = t[0].uuid,
                    r.vastUrl || (r.vastUrl = (0,
                    c.getCacheUrl)(r.videoCacheKey)),
                    i.doneCbCallCount += 1,
                    y(n, r),
                    n.bidsBackAll())
                }
                )))),
                o && y(n, r)) : y(this, s)
            }
            ), "addBidResponse");
            function u(e) {
                var t = S.config.getConfig("mediaTypePriceGranularity." + e)
                  , n = "string" == typeof e && t ? "string" == typeof t ? t : "custom" : S.config.getConfig("priceGranularity")
                  , r = pbjs.bidderSettings;
                return r[B.JSON_MAPPING.BD_SETTING_STANDARD] || (r[B.JSON_MAPPING.BD_SETTING_STANDARD] = {}),
                r[B.JSON_MAPPING.BD_SETTING_STANDARD][B.JSON_MAPPING.ADSERVER_TARGETING] || (r[B.JSON_MAPPING.BD_SETTING_STANDARD][B.JSON_MAPPING.ADSERVER_TARGETING] = [{
                    key: "hb_bidder",
                    val: function(e) {
                        return e.bidderCode
                    }
                }, {
                    key: "hb_adid",
                    val: function(e) {
                        return e.adId
                    }
                }, {
                    key: "hb_pb",
                    val: function(e) {
                        return n === B.GRANULARITY_OPTIONS.AUTO ? e.pbAg : n === B.GRANULARITY_OPTIONS.DENSE ? e.pbDg : n === B.GRANULARITY_OPTIONS.LOW ? e.pbLg : n === B.GRANULARITY_OPTIONS.MEDIUM ? e.pbMg : n === B.GRANULARITY_OPTIONS.HIGH ? e.pbHg : n === B.GRANULARITY_OPTIONS.CUSTOM ? e.pbCg : void 0
                    }
                }, {
                    key: "hb_size",
                    val: function(e) {
                        return e.size
                    }
                }, {
                    key: "hb_deal",
                    val: function(e) {
                        return e.dealId
                    }
                }, {
                    key: "hb_source",
                    val: function(e) {
                        return e.source
                    }
                }, {
                    key: "hb_format",
                    val: function(e) {
                        return e.mediaType
                    }
                }]),
                r[B.JSON_MAPPING.BD_SETTING_STANDARD]
            }
            function m(e, t) {
                if (!t)
                    return {};
                var n = {}
                  , r = pbjs.bidderSettings;
                r && (d(n, u(t.mediaType), t),
                e && r[e] && r[e][B.JSON_MAPPING.ADSERVER_TARGETING] && (d(n, r[e], t),
                t.sendStandardTargeting = r[e].sendStandardTargeting));
                return t.native && (n = g({}, n, (0,
                i.getNativeTargeting)(t))),
                n
            }
            function d(r, i, o) {
                var e = i[B.JSON_MAPPING.ADSERVER_TARGETING];
                return o.size = o.getSize(),
                w._each(e, (function(e) {
                    var t = e.key
                      , n = e.val;
                    if (r[t] && w.logWarn("The key: " + t + " is getting ovewritten"),
                    w.isFn(n))
                        try {
                            n = n(o)
                        } catch (e) {
                            w.logError("bidmanager", "ERROR", e)
                        }
                    (void 0 === i.suppressEmptyKeys || !0 !== i.suppressEmptyKeys) && "hb_deal" !== t || !w.isEmptyStr(n) && null != n ? r[t] = n : w.logInfo("suppressing empty key '" + t + "' from adserver targeting")
                }
                )),
                r
            }
            function s(e) {
                var t = e.bidderCode
                  , n = e.cpm
                  , r = void 0;
                if (pbjs.bidderSettings && (t && pbjs.bidderSettings[t] && "function" == typeof pbjs.bidderSettings[t].bidCpmAdjustment ? r = pbjs.bidderSettings[t].bidCpmAdjustment : pbjs.bidderSettings[B.JSON_MAPPING.BD_SETTING_STANDARD] && "function" == typeof pbjs.bidderSettings[B.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment && (r = pbjs.bidderSettings[B.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment),
                r))
                    try {
                        n = r(e.cpm, g({}, e))
                    } catch (e) {
                        w.logError("Error during bid adjustment", "bidmanager.js", e)
                    }
                0 <= n && (e.cpm = n)
            }
            function D(e, t) {
                return e[t.adUnitCode] || (e[t.adUnitCode] = {
                    bids: []
                }),
                e[t.adUnitCode].bids.push(t),
                e
            }
        },
        183: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.store = function(e, t) {
                var n = {
                    puts: e.map(a)
                };
                (0,
                i.ajax)(o.config.getConfig("cache.url"), (r = t,
                {
                    success: function(e) {
                        var t = void 0;
                        try {
                            t = JSON.parse(e).responses
                        } catch (e) {
                            return void r(e, [])
                        }
                        t ? r(null, t) : r(new Error("The cache server didn't respond with a responses property."), [])
                    },
                    error: function(e, t) {
                        r(new Error("Error storing video ad in the cache: " + e + ": " + JSON.stringify(t)), [])
                    }
                }), JSON.stringify(n), {
                    contentType: "text/plain",
                    withCredentials: !0
                });
                var r
            }
            ,
            t.getCacheUrl = function(e) {
                return o.config.getConfig("cache.url") + "?uuid=" + e
            }
            ;
            var i = n(6)
              , o = n(2);
            function a(e) {
                var t, n;
                return {
                    type: "xml",
                    value: e.vastXml ? e.vastXml : (t = e.vastUrl,
                    n = e.vastImpUrl,
                    '<VAST version="3.0">\n    <Ad>\n      <Wrapper>\n        <AdSystem>prebid.org wrapper</AdSystem>\n        <VASTAdTagURI><![CDATA[' + t + "]]></VASTAdTagURI>\n        <Impression>" + (n ? "<![CDATA[" + n + "]]>" : "") + "</Impression>\n        <Creatives></Creatives>\n      </Wrapper>\n    </Ad>\n  </VAST>")
                }
            }
        },
        19: function(e, t, n) {
            "use strict";
            var o = n(0);
            function r(e, t) {
                var n = t && t.bidId || o.getUniqueIdentifierStr()
                  , r = t && t.src || "client"
                  , i = e || 0;
                this.bidderCode = t && t.bidder || "",
                this.width = 0,
                this.height = 0,
                this.statusMessage = (function() {
                    switch (i) {
                    case 0:
                        return "Pending";
                    case 1:
                        return "Bid available";
                    case 2:
                        return "Bid returned empty or error response";
                    case 3:
                        return "Bid timed out"
                    }
                }
                )(),
                this.adId = n,
                this.mediaType = "banner",
                this.source = r,
                this.getStatusCode = function() {
                    return i
                }
                ,
                this.getSize = function() {
                    return this.width + "x" + this.height
                }
            }
            t.createBid = function(e, t) {
                return new r(e,t)
            }
        },
        2: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.config = t.RANDOM = void 0;
            var d = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
              , s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ;
            t.newConfig = u;
            var r = n(30)
              , c = o(n(10))
              , f = o(n(7))
              , i = n(21);
            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var l = n(0)
              , g = !1
              , p = 3e3
              , v = window.location.origin
              , y = 100
              , m = !0
              , b = !1
              , h = 200
              , a = t.RANDOM = "random"
              , E = {};
            E[a] = !0,
            E.fixed = !0;
            var T = a
              , S = {
                LOW: "low",
                MEDIUM: "medium",
                HIGH: "high",
                AUTO: "auto",
                DENSE: "dense",
                CUSTOM: "custom"
            }
              , A = "*";
            function u() {
                var o = []
                  , a = void 0
                  , u = void 0;
                function e() {
                    function i(t) {
                        return (0,
                        c.default)(Object.keys(S), (function(e) {
                            return t === S[e]
                        }
                        ))
                    }
                    function o(e) {
                        if (!e)
                            return l.logError("Prebid Error: no value passed to `setPriceGranularity()`"),
                            !1;
                        if ("string" == typeof e)
                            i(e) || l.logWarn("Prebid Warning: setPriceGranularity was called with invalid setting, using `medium` as default.");
                        else if ("object" === (void 0 === e ? "undefined" : s(e)) && !(0,
                        r.isValidPriceConfig)(e))
                            return l.logError("Invalid custom price value passed to `setPriceGranularity()`"),
                            !1;
                        return !0
                    }
                    a = {},
                    u = {
                        _debug: g,
                        get debug() {
                            return this._debug
                        },
                        set debug(e) {
                            this._debug = e
                        },
                        _bidderTimeout: p,
                        get bidderTimeout() {
                            return this._bidderTimeout
                        },
                        set bidderTimeout(e) {
                            this._bidderTimeout = e
                        },
                        _publisherDomain: v,
                        get publisherDomain() {
                            return this._publisherDomain
                        },
                        set publisherDomain(e) {
                            this._publisherDomain = e
                        },
                        _cookieSyncDelay: y,
                        get cookieSyncDelay() {
                            return pbjs.cookieSyncDelay || this._cookieSyncDelay
                        },
                        set cookieSyncDelay(e) {
                            this._cookieSyncDelay = e
                        },
                        _priceGranularity: S.MEDIUM,
                        set priceGranularity(e) {
                            o(e) && ("string" == typeof e ? this._priceGranularity = i(e) ? e : S.MEDIUM : "object" === (void 0 === e ? "undefined" : s(e)) && (this._customPriceBucket = e,
                            this._priceGranularity = S.CUSTOM,
                            l.logMessage("Using custom price granularity")))
                        },
                        get priceGranularity() {
                            return this._priceGranularity
                        },
                        _customPriceBucket: {},
                        get customPriceBucket() {
                            return this._customPriceBucket
                        },
                        _mediaTypePriceGranularity: {},
                        get mediaTypePriceGranularity() {
                            return this._mediaTypePriceGranularity
                        },
                        set mediaTypePriceGranularity(n) {
                            var r = this;
                            this._mediaTypePriceGranularity = Object.keys(n).reduce((function(e, t) {
                                return o(n[t]) ? "string" == typeof n ? e[t] = i(n[t]) ? n[t] : r._priceGranularity : "object" === (void 0 === n ? "undefined" : s(n)) && (e[t] = n[t],
                                l.logMessage("Using custom price granularity for " + t)) : l.logWarn("Invalid price granularity for media type: " + t),
                                e
                            }
                            ), {})
                        },
                        _sendAllBids: m,
                        get enableSendAllBids() {
                            return this._sendAllBids
                        },
                        set enableSendAllBids(e) {
                            this._sendAllBids = e
                        },
                        _bidderSequence: T,
                        get bidderSequence() {
                            return this._bidderSequence
                        },
                        set bidderSequence(e) {
                            E[e] ? this._bidderSequence = e : l.logWarn("Invalid order: " + e + ". Bidder Sequence was not set.")
                        },
                        _timoutBuffer: h,
                        get timeoutBuffer() {
                            return this._timoutBuffer
                        },
                        set timeoutBuffer(e) {
                            this._timoutBuffer = e
                        },
                        _disableAjaxTimeout: b,
                        get disableAjaxTimeout() {
                            return this._disableAjaxTimeout
                        },
                        set disableAjaxTimeout(e) {
                            this._disableAjaxTimeout = e
                        }
                    }
                }
                var t = (0,
                i.createHook)("asyncSeries", (function(n) {
                    if ("object" === (void 0 === n ? "undefined" : s(n))) {
                        var i, t, e = Object.keys(n), r = {};
                        e.forEach((function(e) {
                            var t = n[e];
                            "object" === s(a[e]) && "object" === (void 0 === t ? "undefined" : s(t)) && (t = d({}, a[e], t)),
                            r[e] = u[e] = t
                        }
                        )),
                        i = r,
                        t = Object.keys(i),
                        o.filter((function(e) {
                            return (0,
                            f.default)(t, e.topic)
                        }
                        )).forEach((function(e) {
                            var t, n, r;
                            e.callback((t = {},
                            n = e.topic,
                            r = i[e.topic],
                            n in t ? Object.defineProperty(t, n, {
                                value: r,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : t[n] = r,
                            t))
                        }
                        )),
                        o.filter((function(e) {
                            return e.topic === A
                        }
                        )).forEach((function(e) {
                            return e.callback(i)
                        }
                        ))
                    } else
                        l.logError("setConfig options must be an object")
                }
                ));
                return e(),
                {
                    getConfig: function() {
                        if (arguments.length <= 1 && "function" != typeof (arguments.length <= 0 ? void 0 : arguments[0])) {
                            var e = arguments.length <= 0 ? void 0 : arguments[0];
                            return e ? l.deepAccess(u, e) : u
                        }
                        return function(e, t) {
                            var n = t;
                            return "string" != typeof e && (n = e,
                            e = A),
                            "function" == typeof n ? (o.push({
                                topic: e,
                                callback: n
                            }),
                            function() {
                                o.splice(o.indexOf(t), 1)
                            }
                            ) : void l.logError("listener must be a function")
                        }
                        .apply(void 0, arguments)
                    },
                    setConfig: t,
                    setDefaults: function(e) {
                        "object" === (void 0 === a ? "undefined" : s(a)) ? (d(a, e),
                        d(u, e)) : l.logError("defaults must be an object")
                    },
                    resetConfig: e
                }
            }
            t.config = u()
        },
        20: function(e, t) {
            var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
            "number" == typeof __g && (__g = n)
        },
        21: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
              , d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ;
            t.createHook = function(r, i, e) {
                var u = [{
                    fn: i,
                    priority: 0
                }]
                  , o = {
                    sync: function() {
                        for (var t = this, e = arguments.length, n = Array(e), r = 0; r < e; r++)
                            n[r] = arguments[r];
                        u.forEach((function(e) {
                            e.fn.apply(t, n)
                        }
                        ))
                    },
                    asyncSeries: function() {
                        for (var o = this, e = arguments.length, t = Array(e), n = 0; n < e; n++)
                            t[n] = arguments[n];
                        var a = 0;
                        return u[a].fn.apply(this, t.concat((function e() {
                            for (var t = arguments.length, n = Array(t), r = 0; r < t; r++)
                                n[r] = arguments[r];
                            var i = u[++a];
                            if ("object" === (void 0 === i ? "undefined" : d(i)) && "function" == typeof i.fn)
                                return i.fn.apply(o, n.concat(e))
                        }
                        )))
                    }
                };
                if (!o[r])
                    throw "invalid hook type";
                var t = {
                    addHook: function(e) {
                        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 10;
                        "function" == typeof e && (u.push({
                            fn: e,
                            priority: t
                        }),
                        u.sort((function(e, t) {
                            return t.priority - e.priority
                        }
                        )))
                    },
                    removeHook: function(t) {
                        u = u.filter((function(e) {
                            return e.fn === i || e.fn !== t
                        }
                        ))
                    }
                };
                "string" == typeof e && (s[e] = t);
                return a((function() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                        t[n] = arguments[n];
                    return 1 !== u.length || u[0].fn !== i ? o[r].apply(this, t) : i.apply(this, t)
                }
                ), t)
            }
            ;
            var s = t.hooks = {}
        },
        22: function(e, t, n) {
            n(102),
            e.exports = n(13).Array.findIndex
        },
        23: function(e, t, n) {
            e.exports = !n(32)((function() {
                return 7 != Object.defineProperty({}, "a", {
                    get: function() {
                        return 7
                    }
                }).a
            }
            ))
        },
        24: function(e, t) {
            var n = {}.toString;
            e.exports = function(e) {
                return n.call(e).slice(8, -1)
            }
        },
        25: function(e, t) {
            e.exports = function(e) {
                if (null == e)
                    throw TypeError("Can't call method on  " + e);
                return e
            }
        },
        26: function(e, t, n) {
            var r = n(56)("wks")
              , i = n(58)
              , o = n(20).Symbol
              , a = "function" == typeof o;
            (e.exports = function(e) {
                return r[e] || (r[e] = a && o[e] || (a ? o : i)("Symbol." + e))
            }
            ).store = r
        },
        27: function(e, t) {
            e.exports = function() {}
        },
        28: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.default = function(e) {
                var t = e;
                return {
                    callBids: function() {},
                    setBidderCode: function(e) {
                        t = e
                    },
                    getBidderCode: function() {
                        return t
                    }
                }
            }
        },
        29: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.auctionManager = void 0,
            t.newAuctionManager = d;
            var r, i = n(0), s = n(182), o = n(10), a = (r = o) && r.__esModule ? r : {
                default: r
            };
            var u = n(3);
            function d() {
                var d = []
                  , r = {};
                return r.addWinningBid = function(t) {
                    var e = (0,
                    a.default)(d, (function(e) {
                        return e.getAuctionId() === t.auctionId
                    }
                    ));
                    e ? e.addWinningBid(t) : utils.logWarn("Auction not found when adding winning bid")
                }
                ,
                r.getAllWinningBids = function() {
                    return d.map((function(e) {
                        return e.getWinningBids()
                    }
                    )).reduce(i.flatten, [])
                }
                ,
                r.getBidsRequested = function() {
                    return d.map((function(e) {
                        return e.getBidRequests()
                    }
                    )).reduce(i.flatten, [])
                }
                ,
                r.getBidsReceived = function() {
                    return d.map((function(e) {
                        if (e.getAuctionStatus() === s.AUCTION_COMPLETED)
                            return e.getBidsReceived()
                    }
                    )).reduce(i.flatten, []).filter((function(e) {
                        return e
                    }
                    ))
                }
                ,
                r.getAdUnits = function() {
                    return d.map((function(e) {
                        return e.getAdUnits()
                    }
                    )).reduce(i.flatten, [])
                }
                ,
                r.getAdUnitCodes = function() {
                    return d.map((function(e) {
                        return e.getAdUnitCodes()
                    }
                    )).reduce(i.flatten, []).filter(i.uniques)
                }
                ,
                r.createAuction = function(e) {
                    var t, n = e.adUnits, r = e.adUnitCodes, i = e.callback, o = e.cbTimeout, a = e.labels, u = (0,
                    s.newAuction)({
                        adUnits: n,
                        adUnitCodes: r,
                        callback: i,
                        cbTimeout: o,
                        labels: a
                    });
                    return t = u,
                    d.push(t),
                    u
                }
                ,
                r.findBidByAdId = function(t) {
                    return (0,
                    a.default)(d.map((function(e) {
                        return e.getBidsReceived()
                    }
                    )).reduce(i.flatten, []), (function(e) {
                        return e.adId === t
                    }
                    ))
                }
                ,
                r.getStandardBidderAdServerTargeting = function() {
                    return (0,
                    s.getStandardBidderSettings)()[u.JSON_MAPPING.ADSERVER_TARGETING]
                }
                ,
                r.setStatusForBids = function(e, t) {
                    var n = r.findBidByAdId(e);
                    n && (n.status = t)
                }
                ,
                r
            }
            t.auctionManager = d()
        },
        3: function(e, t) {
            e.exports = {
                JSON_MAPPING: {
                    PL_CODE: "code",
                    PL_SIZE: "sizes",
                    PL_BIDS: "bids",
                    BD_BIDDER: "bidder",
                    BD_ID: "paramsd",
                    BD_PL_ID: "placementId",
                    ADSERVER_TARGETING: "adserverTargeting",
                    BD_SETTING_STANDARD: "standard"
                },
                REPO_AND_VERSION: "prebid_prebid_1.13.0",
                DEBUG_MODE: "pbjs_debug",
                STATUS: {
                    GOOD: 1,
                    NO_BID: 2
                },
                CB: {
                    TYPE: {
                        ALL_BIDS_BACK: "allRequestedBidsBack",
                        AD_UNIT_BIDS_BACK: "adUnitBidsBack",
                        BID_WON: "bidWon",
                        REQUEST_BIDS: "requestBids"
                    }
                },
                EVENTS: {
                    AUCTION_INIT: "auctionInit",
                    AUCTION_END: "auctionEnd",
                    BID_ADJUSTMENT: "bidAdjustment",
                    BID_TIMEOUT: "bidTimeout",
                    BID_REQUESTED: "bidRequested",
                    BID_RESPONSE: "bidResponse",
                    BID_WON: "bidWon",
                    BIDDER_DONE: "bidderDone",
                    SET_TARGETING: "setTargeting",
                    REQUEST_BIDS: "requestBids",
                    ADD_AD_UNITS: "addAdUnits",
                    AD_RENDER_FAILED: "adRenderFailed"
                },
                AD_RENDER_FAILED_REASON: {
                    PREVENT_WRITING_ON_MAIN_DOCUMENT: "preventWritingOnMainDocuemnt",
                    NO_AD: "noAd",
                    EXCEPTION: "exception",
                    CANNOT_FIND_AD: "cannotFindAd",
                    MISSING_DOC_OR_ADID: "missingDocOrAdid"
                },
                EVENT_ID_PATHS: {
                    bidWon: "adUnitCode"
                },
                GRANULARITY_OPTIONS: {
                    LOW: "low",
                    MEDIUM: "medium",
                    HIGH: "high",
                    AUTO: "auto",
                    DENSE: "dense",
                    CUSTOM: "custom"
                },
                TARGETING_KEYS: ["hb_bidder", "hb_adid", "hb_pb", "hb_size", "hb_deal", "hb_source", "hb_format"],
                S2S: {
                    SRC: "s2s",
                    SYNCED_BIDDERS_KEY: "pbjsSyncs"
                }
            }
        },
        30: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.isValidPriceConfig = t.getPriceBucketString = void 0;
            var r, i = n(10), v = (r = i) && r.__esModule ? r : {
                default: r
            };
            var o = n(0)
              , y = 2
              , a = {
                buckets: [{
                    min: 0,
                    max: 5,
                    increment: .5
                }]
            }
              , u = {
                buckets: [{
                    min: 0,
                    max: 20,
                    increment: .1
                }]
            }
              , d = {
                buckets: [{
                    min: 0,
                    max: 20,
                    increment: .01
                }]
            }
              , s = {
                buckets: [{
                    min: 0,
                    max: 3,
                    increment: .01
                }, {
                    min: 3,
                    max: 8,
                    increment: .05
                }, {
                    min: 8,
                    max: 20,
                    increment: .5
                }]
            }
              , c = {
                buckets: [{
                    min: 0,
                    max: 5,
                    increment: .05
                }, {
                    min: 5,
                    max: 10,
                    increment: .1
                }, {
                    min: 10,
                    max: 20,
                    increment: .5
                }]
            };
            function f(n, e, r) {
                var i = "";
                if (!m(e))
                    return i;
                var t, o, a, u, d, s, c, f, l, g = e.buckets.reduce((function(e, t) {
                    return e.max > t.max ? e : t
                }
                ), {
                    max: 0
                }), p = (0,
                v.default)(e.buckets, (function(e) {
                    if (n > g.max * r) {
                        var t = e.precision;
                        void 0 === t && (t = y),
                        i = (e.max * r).toFixed(t)
                    } else if (n <= e.max * r && n >= e.min * r)
                        return e
                }
                ));
                return p && (t = n,
                a = r,
                u = void 0 !== (o = p).precision ? o.precision : y,
                d = o.increment * a,
                s = o.min * a,
                c = Math.pow(10, u + 2),
                f = (t * c - s * c) / (d * c),
                l = Math.floor(f) * d + s,
                i = (l = Number(l.toFixed(10))).toFixed(u)),
                i
            }
            function m(e) {
                if (o.isEmpty(e) || !e.buckets || !Array.isArray(e.buckets))
                    return !1;
                var t = !0;
                return e.buckets.forEach((function(e) {
                    void 0 !== e.min && e.max && e.increment || (t = !1)
                }
                )),
                t
            }
            t.getPriceBucketString = function(e, t) {
                var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 1
                  , r = parseFloat(e);
                return isNaN(r) && (r = ""),
                {
                    low: "" === r ? "" : f(e, a, n),
                    med: "" === r ? "" : f(e, u, n),
                    high: "" === r ? "" : f(e, d, n),
                    auto: "" === r ? "" : f(e, c, n),
                    dense: "" === r ? "" : f(e, s, n),
                    custom: "" === r ? "" : f(e, t, n)
                }
            }
            ,
            t.isValidPriceConfig = m
        },
        31: function(e, t, n) {
            var o = n(44);
            e.exports = function(r, i, e) {
                if (o(r),
                void 0 === i)
                    return r;
                switch (e) {
                case 1:
                    return function(e) {
                        return r.call(i, e)
                    }
                    ;
                case 2:
                    return function(e, t) {
                        return r.call(i, e, t)
                    }
                    ;
                case 3:
                    return function(e, t, n) {
                        return r.call(i, e, t, n)
                    }
                }
                return function() {
                    return r.apply(i, arguments)
                }
            }
        },
        32: function(e, t) {
            e.exports = function(e) {
                try {
                    return !!e()
                } catch (e) {
                    return !0
                }
            }
        },
        33: function(e, t, n) {
            var h = n(31)
              , E = n(34)
              , T = n(53)
              , S = n(35)
              , r = n(54);
            e.exports = function(f, e) {
                var l = 1 == f
                  , g = 2 == f
                  , p = 3 == f
                  , v = 4 == f
                  , y = 6 == f
                  , m = 5 == f || y
                  , b = e || r;
                return function(e, t, n) {
                    for (var r, i, o = T(e), a = E(o), u = h(t, n, 3), d = S(a.length), s = 0, c = l ? b(e, d) : g ? b(e, 0) : void 0; s < d; s++)
                        if ((m || s in a) && (i = u(r = a[s], s, o),
                        f))
                            if (l)
                                c[s] = i;
                            else if (i)
                                switch (f) {
                                case 3:
                                    return !0;
                                case 5:
                                    return r;
                                case 6:
                                    return s;
                                case 2:
                                    c.push(r)
                                }
                            else if (v)
                                return !1;
                    return y ? -1 : p || v ? v : c
                }
            }
        },
        34: function(e, t, n) {
            var r = n(24);
            e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
                return "String" == r(e) ? e.split("") : Object(e)
            }
        },
        35: function(e, t, n) {
            var r = n(36)
              , i = Math.min;
            e.exports = function(e) {
                return 0 < e ? i(r(e), 9007199254740991) : 0
            }
        },
        36: function(e, t) {
            var n = Math.ceil
              , r = Math.floor;
            e.exports = function(e) {
                return isNaN(e = +e) ? 0 : (0 < e ? r : n)(e)
            }
        },
        37: function(e, t, n) {
            var r = n(24);
            e.exports = Array.isArray || function(e) {
                return "Array" == r(e)
            }
        },
        38: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.getGlobal = function() {
                return window.pbjs
            }
            ,
            window.pbjs = window.pbjs || {},
            window.pbjs.cmd = window.pbjs.cmd || [],
            window.pbjs.que = window.pbjs.que || []
        },
        39: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.targeting = t.isBidExpired = t.RENDERED = t.BID_TARGETING_SET = void 0;
            var h = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ;
            t.getHighestCpmBidsFromBidPool = B,
            t.newTargeting = c;
            var r, E = n(0), T = n(2), S = n(18), i = n(29), o = n(7), A = (r = o) && r.__esModule ? r : {
                default: r
            };
            function I(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n,
                e
            }
            var _ = n(0)
              , w = n(3)
              , C = []
              , a = t.BID_TARGETING_SET = "targetingSet"
              , u = t.RENDERED = "rendered"
              , O = 20
              , d = (t.isBidExpired = function(e) {
                return e.responseTimestamp + 1e3 * e.ttl + 1e3 > (0,
                E.timestamp)()
            }
            ,
            function(e) {
                return e && (e.status && !(0,
                A.default)([a, u], e.status) || !e.status)
            }
            );
            function B(e, n) {
                var r = []
                  , i = (0,
                E.groupBy)(e, "adUnitCode");
                return Object.keys(i).forEach((function(e) {
                    var t = (0,
                    E.groupBy)(i[e], "bidderCode");
                    Object.keys(t).forEach((function(e) {
                        return r.push(t[e].reduce(n, s()))
                    }
                    ))
                }
                )),
                r
            }
            function s(e) {
                return {
                    adUnitCode: e,
                    cpm: 0,
                    adserverTargeting: {},
                    timeToRespond: 0
                }
            }
            function c(n) {
                var g = {};
                function p(e) {
                    return "string" == typeof e ? [e] : _.isArray(e) ? e : n.getAdUnitCodes() || []
                }
                function v() {
                    return B(n.getBidsReceived().filter(d).filter(t.isBidExpired), E.getOldestHighestCpmBid)
                }
                function y() {
                    return n.getStandardBidderAdServerTargeting().map((function(e) {
                        return e.key
                    }
                    )).concat(w.TARGETING_KEYS).filter(E.uniques)
                }
                function m(r, i, e, t) {
                    return Object.keys(i.adserverTargeting).filter(o()).forEach((function(e) {
                        var t, n;
                        r.length && r.filter((n = e,
                        function(e) {
                            return e.adUnitCode === i.adUnitCode && e.adserverTargeting[n]
                        }
                        )).forEach((t = e,
                        function(e) {
                            _.isArray(e.adserverTargeting[t]) || (e.adserverTargeting[t] = [e.adserverTargeting[t]]),
                            e.adserverTargeting[t] = e.adserverTargeting[t].concat(i.adserverTargeting[t]).filter(E.uniques),
                            delete i.adserverTargeting[t]
                        }
                        ))
                    }
                    )),
                    r.push(i),
                    r
                }
                function o() {
                    var t = y();
                    return function(e) {
                        return -1 === t.indexOf(e)
                    }
                }
                function b(t) {
                    return I({}, t.adUnitCode, Object.keys(t.adserverTargeting).filter(o()).map((function(e) {
                        return I({}, e.substring(0, O), [t.adserverTargeting[e]])
                    }
                    )))
                }
                return g.resetPresetTargeting = function(e) {
                    if ((0,
                    E.isGptPubadsDefined)()) {
                        var t = p(e)
                          , r = n.getAdUnits().filter((function(e) {
                            return (0,
                            A.default)(t, e.code)
                        }
                        ));
                        window.googletag.pubads().getSlots().forEach((function(n) {
                            C.forEach((function(t) {
                                r.forEach((function(e) {
                                    e.code !== n.getAdUnitPath() && e.code !== n.getSlotElementId() || n.setTargeting(t, null)
                                }
                                ))
                            }
                            ))
                        }
                        ))
                    }
                }
                ,
                g.getAllTargeting = function(e) {
                    var r, t, i, n, o, a, u, d, s, c = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : v(), f = p(e), l = (a = f,
                    u = c,
                    d = g.getWinningBids(a, u),
                    s = y(),
                    d = d.map((function(t) {
                        return I({}, t.adUnitCode, Object.keys(t.adserverTargeting).filter((function(e) {
                            return void 0 === t.sendStandardTargeting || t.sendStandardTargeting || -1 === s.indexOf(e)
                        }
                        )).map((function(e) {
                            return I({}, "hb_deal" === e ? (e + "_" + t.bidderCode).substring(0, O) : e.substring(0, O), [t.adserverTargeting[e]])
                        }
                        )))
                    }
                    ))).concat((n = f,
                    o = c,
                    o.filter((function(e) {
                        return (0,
                        A.default)(n, e.adUnitCode)
                    }
                    )).map((function(e) {
                        return h({}, e)
                    }
                    )).reduce(m, []).map(b).filter((function(e) {
                        return e
                    }
                    )))).concat(T.config.getConfig("enableSendAllBids") ? (r = f,
                    t = c,
                    i = w.TARGETING_KEYS.concat(S.NATIVE_TARGETING_KEYS),
                    B(t, E.getHighestCpm).map((function(t) {
                        if (t.adserverTargeting && r && (_.isArray(r) && (0,
                        A.default)(r, t.adUnitCode) || "string" == typeof r && t.adUnitCode === r))
                            return I({}, t.adUnitCode, (n = t,
                            i.filter((function(e) {
                                return void 0 !== t.adserverTargeting[e]
                            }
                            )).map((function(e) {
                                return I({}, (e + "_" + n.bidderCode).substring(0, O), [n.adserverTargeting[e]])
                            }
                            ))));
                        var n
                    }
                    )).filter((function(e) {
                        return e
                    }
                    ))) : []);
                    return l.map((function(t) {
                        Object.keys(t).map((function(e) {
                            t[e].map((function(e) {
                                -1 === C.indexOf(Object.keys(e)[0]) && (C = Object.keys(e).concat(C))
                            }
                            ))
                        }
                        ))
                    }
                    )),
                    l = l.map((function(e) {
                        return I({}, Object.keys(e)[0], e[Object.keys(e)[0]].map((function(e) {
                            return I({}, Object.keys(e)[0], e[Object.keys(e)[0]].join(", "))
                        }
                        )).reduce((function(e, t) {
                            return h(t, e)
                        }
                        ), {}))
                    }
                    )).reduce((function(e, t) {
                        var n = Object.keys(t)[0];
                        return e[n] = h({}, e[n], t[n]),
                        e
                    }
                    ), {})
                }
                ,
                g.setTargetingForGPT = function(i) {
                    window.googletag.pubads().getSlots().forEach((function(r) {
                        Object.keys(i).filter((0,
                        E.isAdUnitCodeMatchingSlot)(r)).forEach((function(n) {
                            return Object.keys(i[n]).forEach((function(t) {
                                var e = i[n][t].split(",");
                                (e = 1 < e.length ? [e] : e).map((function(e) {
                                    return _.logMessage("Attempting to set key value for slot: " + r.getSlotElementId() + " key: " + t + " value: " + e),
                                    e
                                }
                                )).forEach((function(e) {
                                    r.setTargeting(t, e)
                                }
                                ))
                            }
                            ))
                        }
                        ))
                    }
                    ))
                }
                ,
                g.getWinningBids = function(e) {
                    var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : v()
                      , t = p(e);
                    return n.filter((function(e) {
                        return (0,
                        A.default)(t, e.adUnitCode)
                    }
                    )).filter((function(e) {
                        return 0 < e.cpm
                    }
                    )).map((function(e) {
                        return e.adUnitCode
                    }
                    )).filter(E.uniques).map((function(t) {
                        return n.filter((function(e) {
                            return e.adUnitCode === t ? e : null
                        }
                        )).reduce(E.getHighestCpm, s(t))
                    }
                    ))
                }
                ,
                g.setTargetingForAst = function() {
                    var r = g.getAllTargeting();
                    Object.keys(r).forEach((function(n) {
                        return Object.keys(r[n]).forEach((function(e) {
                            if (_.logMessage("Attempting to set targeting for targetId: " + n + " key: " + e + " value: " + r[n][e]),
                            _.isStr(r[n][e]) || _.isArray(r[n][e])) {
                                var t = {};
                                e.search(/pt[0-9]/) < 0 ? t[e.toUpperCase()] = r[n][e] : t[e] = r[n][e],
                                window.apntag.setKeywords(n, t)
                            }
                        }
                        ))
                    }
                    ))
                }
                ,
                g.isApntagDefined = function() {
                    if (window.apntag && _.isFn(window.apntag.setKeywords))
                        return !0
                }
                ,
                g
            }
            t.targeting = c(i.auctionManager)
        },
        4: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            t.NATIVE = "native",
            t.VIDEO = "video",
            t.BANNER = "banner"
        },
        40: function(Ny, Oy) {
            var Py;
            Py = (function() {
                return this
            }
            )();
            try {
                Py = Py || Function("return this")() || eval("this")
            } catch (e) {
                "object" == typeof window && (Py = window)
            }
            Ny.exports = Py
        },
        43: function(e, t, n) {
            "use strict";
            var r = n(16)
              , i = n(33)(5)
              , o = "find"
              , a = !0;
            o in [] && Array(1)[o]((function() {
                a = !1
            }
            )),
            r(r.P + r.F * a, "Array", {
                find: function(e) {
                    return i(this, e, 1 < arguments.length ? arguments[1] : void 0)
                }
            }),
            n(27)(o)
        },
        44: function(e, t) {
            e.exports = function(e) {
                if ("function" != typeof e)
                    throw TypeError(e + " is not a function!");
                return e
            }
        },
        45: function(e, t, n) {
            var r = n(46)
              , i = n(51);
            e.exports = n(23) ? function(e, t, n) {
                return r.f(e, t, i(1, n))
            }
            : function(e, t, n) {
                return e[t] = n,
                e
            }
        },
        46: function(e, t, n) {
            var r = n(47)
              , i = n(48)
              , o = n(50)
              , a = Object.defineProperty;
            t.f = n(23) ? Object.defineProperty : function(e, t, n) {
                if (r(e),
                t = o(t, !0),
                r(n),
                i)
                    try {
                        return a(e, t, n)
                    } catch (e) {}
                if ("get"in n || "set"in n)
                    throw TypeError("Accessors not supported!");
                return "value"in n && (e[t] = n.value),
                e
            }
        },
        47: function(e, t, n) {
            var r = n(17);
            e.exports = function(e) {
                if (!r(e))
                    throw TypeError(e + " is not an object!");
                return e
            }
        },
        48: function(e, t, n) {
            e.exports = !n(23) && !n(32)((function() {
                return 7 != Object.defineProperty(n(49)("div"), "a", {
                    get: function() {
                        return 7
                    }
                }).a
            }
            ))
        },
        487: function(e, t, n) {
            e.exports = n(488)
        },
        488: function(e, t, n) {
            "use strict";
            var r, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            , o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            , a = n(38), u = n(0), d = n(489), s = n(15), c = n(11), f = n(2), l = n(29), g = n(39), p = n(21), v = n(7), y = (r = v) && r.__esModule ? r : {
                default: r
            };
            var m = (0,
            a.getGlobal)()
              , b = n(3)
              , h = n(0)
              , E = n(8)
              , T = n(19)
              , S = n(9)
              , A = s.userSync.triggerUserSyncs
              , I = b.EVENTS
              , _ = I.ADD_AD_UNITS
              , w = I.BID_WON
              , C = I.REQUEST_BIDS
              , O = I.SET_TARGETING
              , B = I.AD_RENDER_FAILED
              , N = b.AD_RENDER_FAILED_REASON
              , R = N.PREVENT_WRITING_ON_MAIN_DOCUMENT
              , U = N.NO_AD
              , j = N.EXCEPTION
              , D = N.CANNOT_FIND_AD
              , P = N.MISSING_DOC_OR_ADID
              , k = {
                bidWon: function(e) {
                    var t = l.auctionManager.getBidsRequested().map((function(e) {
                        return e.bids.map((function(e) {
                            return e.adUnitCode
                        }
                        ))
                    }
                    )).reduce(u.flatten).filter(u.uniques);
                    return !!h.contains(t, e) || void h.logError('The "' + e + '" placement is not defined.')
                }
            };
            function x(e, t, n) {
                e.defaultView && e.defaultView.frameElement && (e.defaultView.frameElement.width = t,
                e.defaultView.frameElement.height = n)
            }
            function M(e, t, n) {
                var r = {};
                r.reason = e,
                r.message = t,
                n && (r.bid = n),
                h.logError(t),
                S.emit(B, r)
            }
            function q(e) {
                e.forEach((function(e) {
                    if (void 0 === e.called)
                        try {
                            e.call(),
                            e.called = !0
                        } catch (e) {
                            h.logError("Error processing command :", "prebid.js", e)
                        }
                }
                ))
            }
            m.bidderSettings = m.bidderSettings || {},
            m.cbTimeout = m.cbTimeout || 200,
            m.libLoaded = !0,
            m.version = "v1.13.0",
            h.logInfo("Prebid.js v1.13.0 loaded"),
            m.adUnits = m.adUnits || [],
            m.triggerUserSyncs = A,
            m.getAdserverTargetingForAdUnitCodeStr = function(e) {
                if (h.logInfo("Invoking pbjs.getAdserverTargetingForAdUnitCodeStr", arguments),
                e) {
                    var t = m.getAdserverTargetingForAdUnitCode(e);
                    return h.transformAdServerTargetingObj(t)
                }
                h.logMessage("Need to call getAdserverTargetingForAdUnitCodeStr with adunitCode")
            }
            ,
            m.getAdserverTargetingForAdUnitCode = function(e) {
                return m.getAdserverTargeting(e)[e]
            }
            ,
            m.getAdserverTargeting = function(e) {
                h.logInfo("Invoking pbjs.getAdserverTargeting", arguments);
                var t = l.auctionManager.getBidsReceived();
                return g.targeting.getAllTargeting(e, t)
            }
            ,
            m.getBidResponses = function() {
                h.logInfo("Invoking pbjs.getBidResponses", arguments);
                var e = l.auctionManager.getBidsReceived().filter(u.adUnitsFilter.bind(this, l.auctionManager.getAdUnitCodes()))
                  , n = e && e.length && e[e.length - 1].auctionId;
                return e.map((function(e) {
                    return e.adUnitCode
                }
                )).filter(u.uniques).map((function(t) {
                    return e.filter((function(e) {
                        return e.auctionId === n && e.adUnitCode === t
                    }
                    ))
                }
                )).filter((function(e) {
                    return e && e[0] && e[0].adUnitCode
                }
                )).map((function(e) {
                    return t = {},
                    n = e[0].adUnitCode,
                    r = {
                        bids: e.map(u.removeRequestId)
                    },
                    n in t ? Object.defineProperty(t, n, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[n] = r,
                    t;
                    var t, n, r
                }
                )).reduce((function(e, t) {
                    return o(e, t)
                }
                ), {})
            }
            ,
            m.getBidResponsesForAdUnitCode = function(t) {
                return {
                    bids: l.auctionManager.getBidsReceived().filter((function(e) {
                        return e.adUnitCode === t
                    }
                    )).map(u.removeRequestId)
                }
            }
            ,
            m.setTargetingForGPTAsync = function(e) {
                if (h.logInfo("Invoking pbjs.setTargetingForGPTAsync", arguments),
                (0,
                u.isGptPubadsDefined)()) {
                    var n = g.targeting.getAllTargeting(e);
                    g.targeting.resetPresetTargeting(e),
                    g.targeting.setTargetingForGPT(n),
                    Object.keys(n).forEach((function(t) {
                        Object.keys(n[t]).forEach((function(e) {
                            "hb_adid" === e && l.auctionManager.setStatusForBids(n[t][e], g.BID_TARGETING_SET)
                        }
                        ))
                    }
                    )),
                    S.emit(O, n)
                } else
                    h.logError("window.googletag is not defined on the page")
            }
            ,
            m.setTargetingForAst = function() {
                h.logInfo("Invoking pbjs.setTargetingForAn", arguments),
                g.targeting.isApntagDefined() ? (g.targeting.setTargetingForAst(),
                S.emit(O, g.targeting.getAllTargeting())) : h.logError("window.apntag is not defined on the page")
            }
            ,
            m.renderAd = function(e, t) {
                if (h.logInfo("Invoking pbjs.renderAd", arguments),
                h.logMessage("Calling renderAd with adId :" + t),
                e && t)
                    try {
                        var n = l.auctionManager.findBidByAdId(t);
                        if (n) {
                            n.status = g.RENDERED,
                            n.ad = h.replaceAuctionPrice(n.ad, n.cpm),
                            n.adUrl = h.replaceAuctionPrice(n.adUrl, n.cpm),
                            l.auctionManager.addWinningBid(n),
                            S.emit(w, n);
                            var r = n.height
                              , i = n.width
                              , o = n.ad
                              , a = n.mediaType
                              , u = n.adUrl
                              , d = n.renderer
                              , s = document.createComment("Creative " + n.creativeId + " served by " + n.bidder + " Prebid.js Header Bidding");
                            if (h.insertElement(s, e, "body"),
                            d && d.url)
                                d.render(n);
                            else if (e === document && !h.inIframe() || "video" === a) {
                                M(R, "Error trying to write ad. Ad render call ad id " + t + " was prevented from writing to the main document.", n)
                            } else if (o)
                                e.write(o),
                                e.close(),
                                x(e, i, r),
                                h.callBurl(n);
                            else if (u) {
                                var c = h.createInvisibleIframe();
                                c.height = r,
                                c.width = i,
                                c.style.display = "inline",
                                c.style.overflow = "hidden",
                                c.src = u,
                                h.insertElement(c, e, "body"),
                                x(e, i, r),
                                h.callBurl(n)
                            } else {
                                M(U, "Error trying to write ad. No ad for bid response id: " + t, n)
                            }
                        } else {
                            M(D, "Error trying to write ad. Cannot find ad by given id : " + t)
                        }
                    } catch (e) {
                        var f = "Error trying to write ad Id :" + t + " to the page:" + e.message;
                        M(j, f)
                    }
                else
                    M(P, "Error trying to write ad Id :" + t + " to the page. Missing document or adId")
            }
            ,
            m.removeAdUnit = function(e) {
                if (h.logInfo("Invoking pbjs.removeAdUnit", arguments),
                e)
                    for (var t = 0; t < m.adUnits.length; t++)
                        m.adUnits[t].code === e && m.adUnits.splice(t, 1)
            }
            ,
            m.requestBids = (0,
            p.createHook)("asyncSeries", (function() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}
                  , t = e.bidsBackHandler
                  , n = e.timeout
                  , r = e.adUnits
                  , i = e.adUnitCodes
                  , o = e.labels;
                S.emit(C);
                var a = n || f.config.getConfig("bidderTimeout");
                if (r = r || m.adUnits,
                h.logInfo("Invoking pbjs.requestBids", arguments),
                i && i.length ? r = r.filter((function(e) {
                    return (0,
                    y.default)(i, e.code)
                }
                )) : i = r && r.map((function(e) {
                    return e.code
                }
                )),
                r.forEach((function(i) {
                    var o = Object.keys(i.mediaTypes || {
                        banner: "banner"
                    })
                      , e = i.bids.map((function(e) {
                        return e.bidder
                    }
                    ))
                      , a = E.bidderRegistry;
                    e.forEach((function(t) {
                        var e = a[t]
                          , n = e && e.getSpec && e.getSpec()
                          , r = n && n.supportedMediaTypes || ["banner"];
                        o.some((function(e) {
                            return (0,
                            y.default)(r, e)
                        }
                        )) || (h.logWarn(h.unsupportedBidderMessage(i, t)),
                        i.bids = i.bids.filter((function(e) {
                            return e.bidder !== t
                        }
                        )))
                    }
                    ))
                }
                )),
                r && 0 !== r.length) {
                    var u = l.auctionManager.createAuction({
                        adUnits: r,
                        adUnitCodes: i,
                        callback: t,
                        cbTimeout: a,
                        labels: o
                    });
                    return u.callBids(),
                    u
                }
                if (h.logMessage("No adUnits configured. No bids requested."),
                "function" == typeof t)
                    try {
                        t()
                    } catch (e) {
                        h.logError("Error executing bidsBackHandler", null, e)
                    }
            }
            )),
            m.addAdUnits = function(e) {
                h.logInfo("Invoking pbjs.addAdUnits", arguments),
                h.isArray(e) ? (e.forEach((function(e) {
                    return e.transactionId = h.generateUUID()
                }
                )),
                m.adUnits.push.apply(m.adUnits, e)) : "object" === (void 0 === e ? "undefined" : i(e)) && (e.transactionId = h.generateUUID(),
                m.adUnits.push(e)),
                S.emit(_)
            }
            ,
            m.onEvent = function(e, t, n) {
                h.logInfo("Invoking pbjs.onEvent", arguments),
                h.isFn(t) ? !n || k[e].call(null, n) ? S.on(e, t, n) : h.logError('The id provided is not valid for event "' + e + '" and no handler was set.') : h.logError('The event handler provided is not a function and was not set on event "' + e + '".')
            }
            ,
            m.offEvent = function(e, t, n) {
                h.logInfo("Invoking pbjs.offEvent", arguments),
                n && !k[e].call(null, n) || S.off(e, t, n)
            }
            ,
            m.registerBidAdapter = function(e, t) {
                h.logInfo("Invoking pbjs.registerBidAdapter", arguments);
                try {
                    E.registerBidAdapter(e(), t)
                } catch (e) {
                    h.logError("Error registering bidder adapter : " + e.message)
                }
            }
            ,
            m.registerAnalyticsAdapter = function(e) {
                h.logInfo("Invoking pbjs.registerAnalyticsAdapter", arguments);
                try {
                    E.registerAnalyticsAdapter(e)
                } catch (e) {
                    h.logError("Error registering analytics adapter : " + e.message)
                }
            }
            ,
            m.createBid = function(e) {
                return h.logInfo("Invoking pbjs.createBid", arguments),
                T.createBid(e)
            }
            ,
            m.loadScript = function(e, t, n) {
                h.logInfo("Invoking pbjs.loadScript", arguments),
                (0,
                c.loadScript)(e, t, n)
            }
            ,
            m.enableAnalytics = function(e) {
                e && !h.isEmpty(e) ? (h.logInfo("Invoking pbjs.enableAnalytics for: ", e),
                E.enableAnalytics(e)) : h.logError("pbjs.enableAnalytics should be called with option {}")
            }
            ,
            m.aliasBidder = function(e, t) {
                h.logInfo("Invoking pbjs.aliasBidder", arguments),
                e && t ? E.aliasBidAdapter(e, t) : h.logError("bidderCode and alias must be passed as arguments", "pbjs.aliasBidder")
            }
            ,
            m.getAllWinningBids = function() {
                return l.auctionManager.getAllWinningBids().map(u.removeRequestId)
            }
            ,
            m.getAllPrebidWinningBids = function() {
                return l.auctionManager.getBidsReceived().filter((function(e) {
                    return e.status === g.BID_TARGETING_SET
                }
                )).map(u.removeRequestId)
            }
            ,
            m.getHighestCpmBids = function(e) {
                var t = (0,
                g.getHighestCpmBidsFromBidPool)(l.auctionManager.getBidsReceived(), u.getLatestHighestCpmBid);
                return g.targeting.getWinningBids(e, t).map(u.removeRequestId)
            }
            ,
            m.getConfig = f.config.getConfig,
            m.setConfig = f.config.setConfig,
            m.que.push((function() {
                return (0,
                d.listenMessagesFromCreative)()
            }
            )),
            m.cmd.push = function(e) {
                if ("function" == typeof e)
                    try {
                        e.call()
                    } catch (e) {
                        h.logError("Error processing command :", e.message, e.stack)
                    }
                else
                    h.logError("Commands written into pbjs.cmd.push must be wrapped in a function")
            }
            ,
            m.que.push = m.cmd.push,
            m.processQueue = function() {
                q(m.que),
                q(m.cmd)
            }
        },
        489: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.listenMessagesFromCreative = function() {
                addEventListener("message", o, !1)
            }
            ;
            var m = i(n(9))
              , b = n(18)
              , r = n(3)
              , h = n(0)
              , E = n(29)
              , T = i(n(10));
            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var S = r.EVENTS.BID_WON;
            function o(e) {
                var t, n, r, i, o, a, u, d, s, c, f, l, g, p = e.message ? "message" : "data", v = {};
                try {
                    v = JSON.parse(e[p])
                } catch (e) {
                    return
                }
                if (v.adId) {
                    var y = (0,
                    T.default)(E.auctionManager.getBidsReceived(), (function(e) {
                        return e.adId === v.adId
                    }
                    ));
                    "Prebid Request" === v.message && (t = y,
                    n = v.adServerDomain,
                    r = e.source,
                    i = t.adId,
                    o = t.ad,
                    a = t.adUrl,
                    u = t.width,
                    d = t.height,
                    i && (c = (s = t).adUnitCode,
                    f = s.width,
                    l = s.height,
                    (g = document.getElementById((0,
                    T.default)(window.googletag.pubads().getSlots().filter((0,
                    h.isSlotMatchingAdUnitCode)(c)), (function(e) {
                        return e
                    }
                    )).getSlotElementId()).querySelector("iframe")).width = "" + f,
                    g.height = "" + l,
                    r.postMessage(JSON.stringify({
                        message: "Prebid Response",
                        ad: o,
                        adUrl: a,
                        adId: i,
                        width: u,
                        height: d
                    }), n)),
                    E.auctionManager.addWinningBid(y),
                    m.default.emit(S, y)),
                    "Prebid Native" === v.message && ((0,
                    b.fireNativeTrackers)(v, y),
                    E.auctionManager.addWinningBid(y),
                    m.default.emit(S, y))
                }
            }
        },
        49: function(e, t, n) {
            var r = n(17)
              , i = n(20).document
              , o = r(i) && r(i.createElement);
            e.exports = function(e) {
                return o ? i.createElement(e) : {}
            }
        },
        50: function(e, t, n) {
            var i = n(17);
            e.exports = function(e, t) {
                if (!i(e))
                    return e;
                var n, r;
                if (t && "function" == typeof (n = e.toString) && !i(r = n.call(e)))
                    return r;
                if ("function" == typeof (n = e.valueOf) && !i(r = n.call(e)))
                    return r;
                if (!t && "function" == typeof (n = e.toString) && !i(r = n.call(e)))
                    return r;
                throw TypeError("Can't convert object to primitive value")
            }
        },
        51: function(e, t) {
            e.exports = function(e, t) {
                return {
                    enumerable: !(1 & e),
                    configurable: !(2 & e),
                    writable: !(4 & e),
                    value: t
                }
            }
        },
        52: function(e, t) {
            var n = {}.hasOwnProperty;
            e.exports = function(e, t) {
                return n.call(e, t)
            }
        },
        53: function(e, t, n) {
            var r = n(25);
            e.exports = function(e) {
                return Object(r(e))
            }
        },
        54: function(e, t, n) {
            var r = n(55);
            e.exports = function(e, t) {
                return new (r(e))(t)
            }
        },
        55: function(e, t, n) {
            var r = n(17)
              , i = n(37)
              , o = n(26)("species");
            e.exports = function(e) {
                var t;
                return i(e) && ("function" != typeof (t = e.constructor) || t !== Array && !i(t.prototype) || (t = void 0),
                r(t) && null === (t = t[o]) && (t = void 0)),
                void 0 === t ? Array : t
            }
        },
        56: function(e, t, n) {
            var r = n(13)
              , i = n(20)
              , o = "__core-js_shared__"
              , a = i[o] || (i[o] = {});
            (e.exports = function(e, t) {
                return a[e] || (a[e] = void 0 !== t ? t : {})
            }
            )("versions", []).push({
                version: r.version,
                mode: n(57) ? "pure" : "global",
                copyright: "u00A9 2018 Denis Pushkarev (zloirock.ru)"
            })
        },
        57: function(e, t) {
            e.exports = !0
        },
        58: function(e, t) {
            var n = 0
              , r = Math.random();
            e.exports = function(e) {
                return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + r).toString(36))
            }
        },
        59: function(e, t, n) {
            "use strict";
            var r = n(16)
              , i = n(60)(!0);
            r(r.P, "Array", {
                includes: function(e) {
                    return i(this, e, 1 < arguments.length ? arguments[1] : void 0)
                }
            }),
            n(27)("includes")
        },
        6: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.ajax = void 0;
            var c = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
              , f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ;
            t.ajaxBuilder = r;
            var l = n(12)
              , g = n(2)
              , p = n(0)
              , v = 4;
            t.ajax = r();
            function r() {
                var s = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 3e3;
                return function(e, t, n) {
                    var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : {};
                    try {
                        var i = void 0
                          , o = !1
                          , a = r.method || (n ? "POST" : "GET")
                          , u = "object" === (void 0 === t ? "undefined" : f(t)) && null !== t ? t : {
                            success: function() {
                                p.logMessage("xhr success")
                            },
                            error: function(e) {
                                p.logError("xhr error", null, e)
                            }
                        };
                        if ("function" == typeof t && (u.success = t),
                        window.XMLHttpRequest ? void 0 === (i = new window.XMLHttpRequest).responseType && (o = !0) : o = !0,
                        o ? ((i = new window.XDomainRequest).onload = function() {
                            u.success(i.responseText, i)
                        }
                        ,
                        i.onerror = function() {
                            u.error("error", i)
                        }
                        ,
                        g.config.getConfig("disableAjaxTimeout") || (i.ontimeout = function() {
                            p.logError("  xhr timeout after ", i.timeout, "ms")
                        }
                        ),
                        i.onprogress = function() {
                            p.logMessage("xhr onprogress")
                        }
                        ) : (i.onreadystatechange = function() {
                            if (i.readyState === v) {
                                var e = i.status;
                                200 <= e && e < 300 || 304 === e ? u.success(i.responseText, i) : u.error(i.statusText, i)
                            }
                        }
                        ,
                        g.config.getConfig("disableAjaxTimeout") || (i.ontimeout = function() {
                            p.logError("  xhr timeout after ", i.timeout, "ms")
                        }
                        )),
                        "GET" === a && n) {
                            var d = (0,
                            l.parse)(e, r);
                            c(d.search, n),
                            e = (0,
                            l.format)(d)
                        }
                        i.open(a, e),
                        g.config.getConfig("disableAjaxTimeout") || (i.timeout = s),
                        o || (r.withCredentials && (i.withCredentials = !0),
                        p._each(r.customHeaders, (function(e, t) {
                            i.setRequestHeader(t, e)
                        }
                        )),
                        r.preflight && i.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
                        i.setRequestHeader("Content-Type", r.contentType || "text/plain")),
                        "POST" === a && n ? i.send(n) : i.send()
                    } catch (e) {
                        p.logError("xhr construction", e)
                    }
                }
            }
        },
        60: function(e, t, n) {
            var d = n(61)
              , s = n(35)
              , c = n(62);
            e.exports = function(u) {
                return function(e, t, n) {
                    var r, i = d(e), o = s(i.length), a = c(n, o);
                    if (u && t != t) {
                        for (; a < o; )
                            if ((r = i[a++]) != r)
                                return !0
                    } else
                        for (; a < o; a++)
                            if ((u || a in i) && i[a] === t)
                                return u || a || 0;
                    return !u && -1
                }
            }
        },
        61: function(e, t, n) {
            var r = n(34)
              , i = n(25);
            e.exports = function(e) {
                return r(i(e))
            }
        },
        62: function(e, t, n) {
            var r = n(36)
              , i = Math.max
              , o = Math.min;
            e.exports = function(e, t) {
                return (e = r(e)) < 0 ? i(e + t, 0) : o(e, t)
            }
        },
        63: function(e, t) {
            e.exports = function e(t) {
                var n = Array.isArray(t) ? [] : {};
                for (var r in t) {
                    var i = t[r];
                    n[r] = i && "object" == typeof i ? e(i) : i
                }
                return n
            }
        },
        64: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ;
            t.setSizeConfig = a,
            t.resolveStatus = function() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}
                  , t = e.labels
                  , n = void 0 === t ? [] : t
                  , r = e.labelAll
                  , i = void 0 !== r && r
                  , o = e.activeLabels
                  , a = void 0 === o ? [] : o
                  , u = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : []
                  , d = (c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : p,
                c.reduce((function(n, e) {
                    return "object" === (void 0 === e ? "undefined" : f(e)) && "string" == typeof e.mediaQuery ? matchMedia(e.mediaQuery).matches && (Array.isArray(e.sizesSupported) && (n.shouldFilter = !0),
                    ["labels", "sizesSupported"].forEach((function(t) {
                        return (e[t] || []).forEach((function(e) {
                            return n[t][e] = !0
                        }
                        ))
                    }
                    ))) : (0,
                    l.logWarn)('sizeConfig rule missing required property "mediaQuery"'),
                    n
                }
                ), {
                    labels: {},
                    sizesSupported: {},
                    shouldFilter: !1
                }))
                  , s = void 0;
                var c;
                s = d.shouldFilter ? u.filter((function(e) {
                    return d.sizesSupported[e]
                }
                )) : u;
                return {
                    active: 0 < s.length && (0 === n.length || !i && (n.some((function(e) {
                        return d.labels[e]
                    }
                    )) || n.some((function(e) {
                        return (0,
                        g.default)(a, e)
                    }
                    ))) || i && n.reduce((function(e, t) {
                        return e ? d.labels[t] || (0,
                        g.default)(a, t) : e
                    }
                    ), !0)),
                    sizes: s
                }
            }
            ;
            var r, i = n(2), l = n(0), o = n(7), g = (r = o) && r.__esModule ? r : {
                default: r
            };
            var p = [];
            function a(e) {
                p = e
            }
            i.config.getConfig("sizeConfig", (function(e) {
                return a(e.sizeConfig)
            }
            ))
        },
        65: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.hasNonVideoBidder = t.videoBidder = t.videoAdUnit = void 0,
            t.isValidVideoBid = function(e, t) {
                var n = (0,
                o.getBidRequest)(e.adId, t)
                  , r = n && (0,
                o.deepAccess)(n, "mediaTypes.video")
                  , i = r && (0,
                o.deepAccess)(r, "context");
                if (!n || r && i !== s)
                    return a.config.getConfig("cache.url") || !e.vastXml || e.vastUrl ? !(!e.vastUrl && !e.vastXml) : ((0,
                    o.logError)('\n        This bid contains only vastXml and will not work when a prebid cache url is not specified.\n        Try enabling prebid cache with pbjs.setConfig({ cache: {url: "..."} });\n      '),
                    !1);
                return i !== s || !(!e.renderer && !n.renderer)
            }
            ;
            var r, i = n(8), o = n(0), a = n(2), u = n(7), d = (r = u) && r.__esModule ? r : {
                default: r
            };
            var s = "outstream"
              , c = (t.videoAdUnit = function(e) {
                var t = "video" === e.mediaType
                  , n = (0,
                o.deepAccess)(e, "mediaTypes.video");
                return t || n
            }
            ,
            t.videoBidder = function(e) {
                return (0,
                d.default)(i.videoAdapters, e.bidder)
            }
            );
            t.hasNonVideoBidder = function(e) {
                return e.bids.filter((function(e) {
                    return !c(e)
                }
                )).length
            }
        },
        7: function(e, t, n) {
            n(59),
            e.exports = n(13).Array.includes
        },
        8: function(e, b, t) {
            "use strict";
            var y = function(e, t) {
                if (Array.isArray(e))
                    return e;
                if (Symbol.iterator in Object(e))
                    return (function(e, t) {
                        var n = []
                          , r = !0
                          , i = !1
                          , o = void 0;
                        try {
                            for (var a, u = e[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value),
                            !t || n.length !== t); r = !0)
                                ;
                        } catch (e) {
                            i = !0,
                            o = e
                        } finally {
                            try {
                                !r && u.return && u.return()
                            } finally {
                                if (i)
                                    throw o
                            }
                        }
                        return n
                    }
                    )(e, t);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
              , f = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
              , h = t(0)
              , l = t(64)
              , g = t(18)
              , d = t(1)
              , m = t(6)
              , E = t(2)
              , T = n(t(7))
              , S = n(t(10));
            function n(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var A = t(0)
              , I = t(3)
              , _ = t(9)
              , w = void 0
              , C = {};
            b.bidderRegistry = C,
            b.aliasRegistry = {};
            var O = {};
            E.config.getConfig("s2sConfig", (function(e) {
                O = e.s2sConfig
            }
            ));
            var r = {};
            function p(e, t) {
                return e.labelAll ? {
                    labelAll: !0,
                    labels: e.labelAll,
                    activeLabels: t
                } : {
                    labelAll: !1,
                    labels: e.labelAny,
                    activeLabels: t
                }
            }
            function B(e) {
                var r = e.bidderCode
                  , d = e.auctionId
                  , s = e.bidderRequestId
                  , t = e.adUnits
                  , c = e.labels;
                return t.reduce((function(e, a) {
                    var t = (0,
                    l.resolveStatus)(p(a, c), a.sizes)
                      , n = t.active
                      , u = t.sizes;
                    return n && e.push(a.bids.filter((function(e) {
                        return e.bidder === r
                    }
                    )).reduce((function(e, t) {
                        a.mediaTypes && (A.isValidMediaTypes(a.mediaTypes) ? t = f({}, t, {
                            mediaTypes: a.mediaTypes
                        }) : A.logError("mediaTypes is not correctly configured for adunit " + a.code));
                        var n = a.nativeParams || A.deepAccess(a, "mediaTypes.native");
                        n && (t = f({}, t, {
                            nativeParams: (0,
                            g.processNativeAdUnitParams)(n)
                        })),
                        t = f({}, t, (0,
                        h.getDefinedParams)(a, ["mediaType", "renderer"]));
                        var r = (0,
                        l.resolveStatus)(p(t, c), u)
                          , i = r.active
                          , o = r.sizes;
                        return i && e.push(f({}, t, {
                            adUnitCode: a.code,
                            transactionId: a.transactionId,
                            sizes: o,
                            bidId: t.bid_id || A.getUniqueIdentifierStr(),
                            bidderRequestId: s,
                            auctionId: d
                        })),
                        e
                    }
                    ), [])),
                    e
                }
                ), []).reduce(h.flatten, []).filter((function(e) {
                    return "" !== e
                }
                ))
            }
            function N() {
                return O && O.enabled && O.testing && w
            }
            b.gdprDataHandler = {
                consentData: null,
                setConsentData: function(e) {
                    this.consentData = e
                },
                getConsentData: function() {
                    return this.consentData
                }
            },
            b.makeBidRequests = function(e, r, i, o, a) {
                var u = [];
                e = b.checkBidRequestSizes(e);
                var t = (0,
                h.getBidderCodes)(e);
                E.config.getConfig("bidderSequence") === E.RANDOM && (t = (0,
                h.shuffle)(t));
                var n, d, s, c = t, f = [];
                if (O.enabled) {
                    N() && (f = w.getSourceBidderMap(e)[w.CLIENT]);
                    var l = O.bidders;
                    c = t.filter((function(e) {
                        return !(0,
                        T.default)(l, e) || (0,
                        T.default)(f, e)
                    }
                    ));
                    var g = (n = e,
                    d = O.bidders,
                    (s = A.deepClone(n)).forEach((function(e) {
                        e.bids = e.bids.filter((function(e) {
                            return (0,
                            T.default)(d, e.bidder) && (!N() || e.finalSource !== w.CLIENT)
                        }
                        )).map((function(e) {
                            return e.bid_id = A.getUniqueIdentifierStr(),
                            e
                        }
                        ))
                    }
                    )),
                    s = s.filter((function(e) {
                        return 0 !== e.bids.length
                    }
                    )))
                      , p = A.generateUUID();
                    l.forEach((function(e) {
                        var t = A.getUniqueIdentifierStr()
                          , n = {
                            bidderCode: e,
                            auctionId: i,
                            bidderRequestId: t,
                            tid: p,
                            adUnitsS2SCopy: g,
                            bids: B({
                                bidderCode: e,
                                auctionId: i,
                                bidderRequestId: t,
                                adUnits: g,
                                labels: a
                            }),
                            auctionStart: r,
                            timeout: O.timeout,
                            src: I.S2S.SRC
                        };
                        0 !== n.bids.length && u.push(n)
                    }
                    ))
                }
                var v, y, m = (v = e,
                (y = A.deepClone(v)).forEach((function(e) {
                    e.bids = e.bids.filter((function(e) {
                        return !N() || e.finalSource !== w.SERVER
                    }
                    ))
                }
                )),
                y = y.filter((function(e) {
                    return 0 !== e.bids.length
                }
                )));
                return c.forEach((function(e) {
                    var t = A.getUniqueIdentifierStr()
                      , n = {
                        bidderCode: e,
                        auctionId: i,
                        bidderRequestId: t,
                        bids: B({
                            bidderCode: e,
                            auctionId: i,
                            bidderRequestId: t,
                            adUnits: m,
                            labels: a
                        }),
                        auctionStart: r,
                        timeout: o
                    };
                    n.bids && 0 !== n.bids.length && u.push(n)
                }
                )),
                b.gdprDataHandler.getConsentData() && u.forEach((function(e) {
                    e.gdprConsent = b.gdprDataHandler.getConsentData()
                }
                )),
                u
            }
            ,
            b.checkBidRequestSizes = function(e) {
                function a(e) {
                    return Array.isArray(e) && 2 === e.length && A.isInteger(e[0]) && A.isInteger(e[1])
                }
                return e.forEach((function(e) {
                    e.sizes && A.logWarn("Usage of adUnits.sizes will eventually be deprecated.  Please define size dimensions within the corresponding area of the mediaTypes.<object> (eg mediaTypes.banner.sizes).");
                    var t = e.mediaTypes;
                    if (t && t.banner) {
                        var n = t.banner;
                        n.sizes ? e.sizes = n.sizes : (A.logError("Detected a mediaTypes.banner object did not include sizes.  This is a required field for the mediaTypes.banner object.  Removing invalid mediaTypes.banner object from request."),
                        delete e.mediaTypes.banner)
                    }
                    if (t && t.video) {
                        var r = t.video;
                        if (r.playerSize)
                            if (Array.isArray(r.playerSize) && 1 === r.playerSize.length && r.playerSize.every(a))
                                e.sizes = r.playerSize;
                            else if (a(r.playerSize)) {
                                var i = [];
                                i.push(r.playerSize),
                                A.logInfo("Transforming video.playerSize from " + r.playerSize + " to " + i + " so it's in the proper format."),
                                e.sizes = r.playerSize = i
                            } else
                                A.logError("Detected incorrect configuration of mediaTypes.video.playerSize.  Please specify only one set of dimensions in a format like: [[640, 480]]. Removing invalid mediaTypes.video.playerSize property from request."),
                                delete e.mediaTypes.video.playerSize
                    }
                    if (t && t.native) {
                        var o = t.native;
                        o.image && o.image.sizes && !Array.isArray(o.image.sizes) && (A.logError("Please use an array of sizes for native.image.sizes field.  Removing invalid mediaTypes.native.image.sizes property from request."),
                        delete e.mediaTypes.native.image.sizes),
                        o.image && o.image.aspect_ratios && !Array.isArray(o.image.aspect_ratios) && (A.logError("Please use an array of sizes for native.image.aspect_ratios field.  Removing invalid mediaTypes.native.image.aspect_ratios property from request."),
                        delete e.mediaTypes.native.image.aspect_ratios),
                        o.icon && o.icon.sizes && !Array.isArray(o.icon.sizes) && (A.logError("Please use an array of sizes for native.icon.sizes field.  Removing invalid mediaTypes.native.icon.sizes property from request."),
                        delete e.mediaTypes.native.icon.sizes)
                    }
                }
                )),
                e
            }
            ,
            b.callBids = function(e, t, r, i) {
                if (t.length) {
                    var o = (0,
                    m.ajaxBuilder)(t[0].timeout)
                      , n = t.reduce((function(e, t) {
                        return e[Number(void 0 !== t.src && t.src === I.S2S.SRC)].push(t),
                        e
                    }
                    ), [[], []])
                      , a = y(n, 2)
                      , u = a[0]
                      , d = a[1];
                    if (d.length) {
                        var s = O.bidders
                          , c = C[O.adapter]
                          , f = d[0].tid
                          , l = d[0].adUnitsS2SCopy;
                        if (l.forEach((function(n) {
                            var e = n.bids.filter((function(t) {
                                return (0,
                                S.default)(d, (function(e) {
                                    return e.bidderCode === t.bidder && (0,
                                    S.default)(e.bids, (function(e) {
                                        return e.adUnitCode === n.code
                                    }
                                    ))
                                }
                                ))
                            }
                            ));
                            n.bids = e
                        }
                        )),
                        l = l.filter((function(e) {
                            return 0 < e.bids.length
                        }
                        )),
                        c) {
                            var g = {
                                tid: f,
                                ad_units: l
                            };
                            if (g.ad_units.length) {
                                var p = d.map((function(e) {
                                    return e.start = (0,
                                    h.timestamp)(),
                                    e.doneCbCallCount = 0,
                                    i(e.bidderRequestId)
                                }
                                ))
                                  , v = g.ad_units.reduce((function(e, t) {
                                    return e.concat((t.bids || []).reduce((function(e, t) {
                                        return e.concat(t.bidder)
                                    }
                                    ), []))
                                }
                                ), []);
                                A.logMessage("CALLING S2S HEADER BIDDERS ==== " + s.filter((function(e) {
                                    return (0,
                                    T.default)(v, e)
                                }
                                )).join(",")),
                                d.forEach((function(e) {
                                    _.emit(I.EVENTS.BID_REQUESTED, e)
                                }
                                )),
                                c.callBids(g, d, r, (function() {
                                    return p.forEach((function(e) {
                                        return e()
                                    }
                                    ))
                                }
                                ), o)
                            }
                        }
                    }
                    u.forEach((function(e) {
                        e.start = (0,
                        h.timestamp)();
                        var t = C[e.bidderCode];
                        if (t) {
                            A.logMessage("CALLING BIDDER ======= " + e.bidderCode),
                            _.emit(I.EVENTS.BID_REQUESTED, e),
                            e.doneCbCallCount = 0;
                            var n = i(e.bidderRequestId);
                            t.callBids(e, r, n, o)
                        } else
                            A.logError("Adapter trying to be called which does not exist: " + e.bidderCode + " adaptermanager.callBids")
                    }
                    ))
                } else
                    A.logWarn("callBids executed with no bidRequests.  Were they filtered by labels or sizing?")
            }
            ,
            b.videoAdapters = [],
            b.registerBidAdapter = function(e, t) {
                var n = (2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}).supportedMediaTypes
                  , r = void 0 === n ? [] : n;
                e && t ? "function" == typeof e.callBids ? (C[t] = e,
                (0,
                T.default)(r, "video") && b.videoAdapters.push(t),
                (0,
                T.default)(r, "native") && g.nativeAdapters.push(t)) : A.logError("Bidder adaptor error for bidder code: " + t + "bidder must implement a callBids() function") : A.logError("bidAdaptor or bidderCode not specified")
            }
            ,
            b.aliasBidAdapter = function(t, e) {
                var n, r;
                if (void 0 === C[e]) {
                    var i = C[t];
                    if (void 0 === i)
                        A.logError('bidderCode "' + t + '" is not an existing bidder.', "adaptermanager.aliasBidAdapter");
                    else
                        try {
                            var o = void 0
                              , a = (n = t,
                            r = [],
                            (0,
                            T.default)(b.videoAdapters, n) && r.push("video"),
                            (0,
                            T.default)(g.nativeAdapters, n) && r.push("native"),
                            r);
                            if (i.constructor.prototype != Object.prototype)
                                (o = new i.constructor).setBidderCode(e);
                            else {
                                var u = i.getSpec();
                                o = (0,
                                d.newBidder)(f({}, u, {
                                    code: e
                                })),
                                b.aliasRegistry[e] = t
                            }
                            this.registerBidAdapter(o, e, {
                                supportedMediaTypes: a
                            })
                        } catch (e) {
                            A.logError(t + " bidder does not currently support aliasing.", "adaptermanager.aliasBidAdapter")
                        }
                } else
                    A.logMessage('alias name "' + e + '" has been already specified.')
            }
            ,
            b.registerAnalyticsAdapter = function(e) {
                var t = e.adapter
                  , n = e.code;
                t && n ? "function" == typeof t.enableAnalytics ? (t.code = n,
                r[n] = t) : A.logError('Prebid Error: Analytics adaptor error for analytics "' + n + '"\n        analytics adapter must implement an enableAnalytics() function') : A.logError("Prebid Error: analyticsAdapter or analyticsCode not specified")
            }
            ,
            b.enableAnalytics = function(e) {
                A.isArray(e) || (e = [e]),
                A._each(e, (function(e) {
                    var t = r[e.provider];
                    t ? t.enableAnalytics(e) : A.logError("Prebid Error: no analytics adapter found in registry for\n        " + e.provider + ".")
                }
                ))
            }
            ,
            b.getBidAdapter = function(e) {
                return C[e]
            }
            ,
            b.setS2STestingModule = function(e) {
                w = e
            }
            ,
            b.callTimedOutBidders = function(t, n, r) {
                n = n.map((function(e) {
                    return e.params = A.getUserConfiguredParams(t, e.adUnitCode, e.bidder),
                    e.timeout = r,
                    e
                }
                )),
                n = A.groupBy(n, "bidder"),
                Object.keys(n).forEach((function(t) {
                    try {
                        var e = C[t].getSpec();
                        e && e.onTimeout && "function" == typeof e.onTimeout && (A.logInfo("Invoking " + t + ".onTimeout"),
                        e.onTimeout(n[t]))
                    } catch (e) {
                        A.logWarn("Error calling onTimeout of " + t)
                    }
                }
                ))
            }
        },
        9: function(e, t, n) {
            "use strict";
            var u, r, i = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            , d = n(0), o = n(3), a = Array.prototype.slice, s = Array.prototype.push, c = d._map(o.EVENTS, (function(e) {
                return e
            }
            )), f = o.EVENT_ID_PATHS, l = [];
            e.exports = (u = {},
            (r = {}).on = function(e, t, n) {
                if (i = e,
                d.contains(c, i)) {
                    var r = u[e] || {
                        que: []
                    };
                    n ? (r[n] = r[n] || {
                        que: []
                    },
                    r[n].que.push(t)) : r.que.push(t),
                    u[e] = r
                } else
                    d.logError("Wrong event name : " + e + " Valid event names :" + c);
                var i
            }
            ,
            r.emit = function(e) {
                !(function(e, t) {
                    d.logMessage("Emitting event for: " + e);
                    var n = t[0] || {}
                      , r = n[f[e]]
                      , i = u[e] || {
                        que: []
                    }
                      , o = d._map(i, (function(e, t) {
                        return t
                    }
                    ))
                      , a = [];
                    l.push({
                        eventType: e,
                        args: n,
                        id: r
                    }),
                    r && d.contains(o, r) && s.apply(a, i[r].que),
                    s.apply(a, i.que),
                    d._each(a, (function(e) {
                        if (e)
                            try {
                                e.apply(null, t)
                            } catch (e) {
                                d.logError("Error executing handler:", "events.js", e)
                            }
                    }
                    ))
                }
                )(e, a.call(arguments, 1))
            }
            ,
            r.off = function(e, n, r) {
                var i = u[e];
                d.isEmpty(i) || d.isEmpty(i.que) && d.isEmpty(i[r]) || r && (d.isEmpty(i[r]) || d.isEmpty(i[r].que)) || (r ? d._each(i[r].que, (function(e) {
                    var t = i[r].que;
                    e === n && t.splice(d.indexOf.call(t, e), 1)
                }
                )) : d._each(i.que, (function(e) {
                    var t = i.que;
                    e === n && t.splice(d.indexOf.call(t, e), 1)
                }
                )),
                u[e] = i)
            }
            ,
            r.get = function() {
                return u
            }
            ,
            r.getEvents = function() {
                var n = [];
                return d._each(l, (function(e) {
                    var t = i({}, e);
                    n.push(t)
                }
                )),
                n
            }
            ,
            r)
        }
    });
    pbjsChunk([127], {
        88: function(e, r, t) {
            t(89),
            e.exports = t(90)
        },
        89: function(e, r, t) {
            "use strict";
            Object.defineProperty(r, "__esModule", {
                value: !0
            }),
            r.spec = void 0;
            var a = (function(e) {
                {
                    if (e && e.__esModule)
                        return e;
                    var r = {};
                    if (null != e)
                        for (var t in e)
                            Object.prototype.hasOwnProperty.call(e, t) && (r[t] = e[t]);
                    return r.default = e,
                    r
                }
            }
            )(t(0))
              , i = t(4)
              , n = t(1)
              , d = u(t(10))
              , o = u(t(7));
            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var s = ["mimes", "minduration", "maxduration", "protocols", "startdelay", "linearity", "boxingallowed", "playbackmethod", "delivery", "pos", "api", "ext"]
              , c = r.spec = {
                code: "adkernel",
                aliases: ["headbidding"],
                supportedMediaTypes: [i.BANNER, i.VIDEO],
                isBidRequestValid: function(e) {
                    return "params"in e && void 0 !== e.params.host && "zoneId"in e.params && !isNaN(Number(e.params.zoneId))
                },
                buildRequests: function(d) {
                    var o = void 0
                      , n = d.map(p).reduce((function(e, r, t) {
                        var n = d[t]
                          , i = n.params.zoneId
                          , a = n.params.host;
                        return e[a] = e[a] || {},
                        e[a][i] = e[a][i] || [],
                        e[a][i].push(r),
                        o = n.bidderRequestId,
                        e
                    }
                    ), {})
                      , i = [];
                    return Object.keys(n).forEach((function(t) {
                        Object.keys(n[t]).forEach((function(e) {
                            var r = (function(e, r) {
                                var t = {
                                    id: r,
                                    imp: e,
                                    site: (i = a.getTopWindowLocation(),
                                    {
                                        domain: i.hostname,
                                        page: i.href.split("?")[0]
                                    }),
                                    at: 1,
                                    device: {
                                        ip: "caller",
                                        ua: "caller",
                                        js: 1,
                                        language: (n = navigator.language ? "language" : "userLanguage",
                                        navigator[n].split("-")[0])
                                    },
                                    ext: {
                                        adk_usersync: 1
                                    }
                                };
                                var n;
                                var i;
                                a.getDNT() && (t.device.dnt = 1);
                                return t
                            }
                            )(n[t][e], o);
                            i.push({
                                method: "GET",
                                url: window.location.protocol + "//" + t + "/rtbg",
                                data: {
                                    zone: Number(e),
                                    ad_type: "rtb",
                                    v: "1.2",
                                    r: JSON.stringify(r)
                                }
                            })
                        }
                        ))
                    }
                    )),
                    i
                },
                interpretResponse: function(e, r) {
                    var t = e.body;
                    if (!t.seatbid)
                        return [];
                    var n = JSON.parse(r.data.r).imp;
                    return t.seatbid.map((function(e) {
                        return e.bid
                    }
                    )).reduce((function(e, r) {
                        return e.concat(r)
                    }
                    ), []).map((function(r) {
                        var e = (0,
                        d.default)(n, (function(e) {
                            return e.id === r.impid
                        }
                        ))
                          , t = {
                            requestId: r.impid,
                            cpm: r.price,
                            creativeId: r.crid,
                            currency: "USD",
                            ttl: 360,
                            netRevenue: !0
                        };
                        return "banner"in e && (t.mediaType = i.BANNER,
                        t.width = r.w,
                        t.height = r.h,
                        t.ad = (function(e) {
                            var r = e.adm;
                            "nurl"in e && (r += a.createTrackPixelHtml(e.nurl + "&px=1"));
                            return "<!DOCTYPE html><html><head><title></title><body style='margin:0px;padding:0px;'>" + r + "</body></head>"
                        }
                        )(r)),
                        "video"in e && (t.mediaType = i.VIDEO,
                        t.vastUrl = r.nurl,
                        t.width = e.video.w,
                        t.height = e.video.h),
                        t
                    }
                    ))
                },
                getUserSyncs: function(e, r) {
                    return e.iframeEnabled && r && 0 !== r.length ? r.filter((function(e) {
                        return e.body && e.body.ext && e.body.ext.adk_usersync
                    }
                    )).map((function(e) {
                        return e.body.ext.adk_usersync
                    }
                    )).reduce((function(e, r) {
                        return e.concat(r)
                    }
                    ), []).map((function(e) {
                        return {
                            type: "iframe",
                            url: e
                        }
                    }
                    )) : []
                }
            };
            function p(r) {
                var t = {
                    id: r.bidId,
                    tagid: r.adUnitCode
                };
                if (r.mediaType === i.BANNER || a.deepAccess(r, "mediaTypes.banner") || void 0 === r.mediaTypes && void 0 === r.mediaType) {
                    var e = l(a.deepAccess(r, "mediaTypes.banner.sizes") || r.sizes);
                    t.banner = {
                        format: e.map((function(e) {
                            return {
                                w: e[0],
                                h: e[1]
                            }
                        }
                        )),
                        topframe: 0
                    }
                } else if (r.mediaType === i.VIDEO || a.deepAccess(r, "mediaTypes.video")) {
                    var n = a.deepAccess(r, "mediaTypes.video.playerSize") || l(r.sizes)[0];
                    t.video = {
                        w: n[0],
                        h: n[1]
                    },
                    r.params.video && Object.keys(r.params.video).filter((function(e) {
                        return (0,
                        o.default)(s, e)
                    }
                    )).forEach((function(e) {
                        return t.video[e] = r.params.video[e]
                    }
                    ))
                }
                return "https:" === a.getTopWindowLocation().protocol && (t.secure = 1),
                t
            }
            function l(e) {
                return 2 != e.length || a.isArray(e[0]) ? e : [e]
            }
            (0,
            n.registerBidder)(c)
        },
        90: function(e, r) {}
    }, [88]);
    pbjsChunk([118], {
        114: function(e, r, i) {
            i(115),
            e.exports = i(116)
        },
        115: function(e, r, i) {
            "use strict";
            Object.defineProperty(r, "__esModule", {
                value: !0
            }),
            r.spec = void 0;
            var t = p(["//", "/pubapi/3.0/", "/", "/", "/", "/ADTECH;v=2;cmd=bid;cors=yes;alias=", ";misc=", "", "", "", ""], ["//", "/pubapi/3.0/", "/", "/", "/", "/ADTECH;v=2;cmd=bid;cors=yes;alias=", ";misc=", "", "", "", ""])
              , n = p(["//", "/bidRequest?"], ["//", "/bidRequest?"])
              , a = p(["dcn=", "&pos=", "&cmd=bid", ""], ["dcn=", "&pos=", "&cmd=bid", ""])
              , c = (function(e) {
                {
                    if (e && e.__esModule)
                        return e;
                    var r = {};
                    if (null != e)
                        for (var i in e)
                            Object.prototype.hasOwnProperty.call(e, i) && (r[i] = e[i]);
                    return r.default = e,
                    r
                }
            }
            )(i(0))
              , o = i(1)
              , s = i(2)
              , d = i(3)
              , u = i(4);
            function p(e, r) {
                return Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(r)
                    }
                }))
            }
            var l = {
                AOL: "aol",
                ONEMOBILE: "onemobile",
                ONEDISPLAY: "onedisplay"
            }
              , b = {
                GET: "display-get"
            }
              , m = {
                GET: "mobile-get",
                POST: "mobile-post"
            }
              , f = {
                TAG: "iframe",
                TYPE: "iframe"
            }
              , v = {
                TAG: "img",
                TYPE: "image"
            }
              , h = S(t, "host", "network", "placement", "pageid", "sizeid", "alias", "misc", "bidfloor", "keyValues", "consentData")
              , g = S(n, "host")
              , O = S(a, "dcn", "pos", "dynamicParams")
              , E = {
                us: "adserver-us.adtech.advertising.com",
                eu: "adserver-eu.adtech.advertising.com",
                as: "adserver-as.adtech.advertising.com"
            };
            pbjs.aolGlobals = {
                pixelsDropped: !1
            };
            var y, x = (y = !0,
            function() {
                var e = pbjs.bidderSettings;
                y && e && e.aol && "function" == typeof e.aol.bidCpmAdjustment && (c.logWarn("bidCpmAdjustment is active for the AOL adapter. As of Prebid 0.14, AOL can bid in net u2013 please contact your accounts team to enable."),
                y = !1)
            }
            );
            function S(o) {
                for (var e = arguments.length, i = Array(1 < e ? e - 1 : 0), r = 1; r < e; r++)
                    i[r - 1] = arguments[r];
                return function() {
                    for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                        t[r] = arguments[r];
                    var n = t[t.length - 1] || {}
                      , a = [o[0]];
                    return i.forEach((function(e, r) {
                        var i = c.isInteger(e) ? t[e] : n[e];
                        a.push(i, o[r + 1])
                    }
                    )),
                    a.join("")
                }
            }
            function P(e) {
                return e === l.AOL || e === l.ONEMOBILE
            }
            function T(e) {
                if (P(e.bidder) && e.params.id && e.params.imp && e.params.imp[0]) {
                    var r = e.params.imp[0];
                    return r.id && r.tagid && (r.banner && r.banner.w && r.banner.h || r.video && r.video.mimes && r.video.minduration && r.video.maxduration)
                }
            }
            function A(e) {
                return P(e.bidder) && e.params.dcn && e.params.pos
            }
            function I(e) {
                return ((r = e.bidder) === l.AOL || r === l.ONEDISPLAY) && e.params.placement && e.params.network;
                var r
            }
            var R = r.spec = {
                code: l.AOL,
                aliases: [l.ONEMOBILE, l.ONEDISPLAY],
                supportedMediaTypes: [u.BANNER],
                isBidRequestValid: function(e) {
                    return I(e) || (A(r = e) || T(r));
                    var r
                },
                buildRequests: function(e, r) {
                    var t = this
                      , n = r ? r.gdprConsent : null;
                    return e.map((function(e) {
                        var r, i = A(r = e) ? m.GET : T(r) ? m.POST : I(r) ? b.GET : void 0;
                        if (i)
                            return t.formatBidRequest(i, e, n)
                    }
                    ))
                },
                interpretResponse: function(e, r) {
                    var i = e.body;
                    if (x(),
                    i) {
                        var t = this._parseBidResponse(i, r);
                        if (t)
                            return t
                    } else
                        c.logError("Empty bid response", r.bidderCode, i)
                },
                getUserSyncs: function(e, r) {
                    var i = r[0];
                    return s.config.getConfig("aol.userSyncOn") === d.EVENTS.BID_RESPONSE && !pbjs.aolGlobals.pixelsDropped && i && i.ext && i.ext.pixels ? (pbjs.aolGlobals.pixelsDropped = !0,
                    (function(e) {
                        var t = /\w*(?=\s)/
                          , n = /src=("|')(.*?)\1/
                          , a = [];
                        if (e) {
                            var r = e.match(/(img|iframe)[\s\S]*?src\s*=\s*("|')(.*?)\2/gi);
                            r && r.forEach((function(e) {
                                var r = e.match(t)[0]
                                  , i = e.match(n)[2];
                                r && r && a.push({
                                    type: r === v.TAG ? v.TYPE : f.TYPE,
                                    url: i
                                })
                            }
                            ))
                        }
                        return a
                    }
                    )(i.ext.pixels)) : []
                },
                formatBidRequest: function(e, r, i) {
                    var t = void 0;
                    switch (e) {
                    case b.GET:
                        t = {
                            url: this.buildMarketplaceUrl(r, i),
                            method: "GET",
                            ttl: 60
                        };
                        break;
                    case m.GET:
                        t = {
                            url: this.buildOneMobileGetUrl(r, i),
                            method: "GET",
                            ttl: 3600
                        };
                        break;
                    case m.POST:
                        t = {
                            url: this.buildOneMobileBaseUrl(r),
                            method: "POST",
                            ttl: 3600,
                            data: this.buildOpenRtbRequestData(r, i),
                            options: {
                                contentType: "application/json",
                                customHeaders: {
                                    "x-openrtb-version": "2.2"
                                }
                            }
                        }
                    }
                    return t.bidderCode = r.bidder,
                    t.bidId = r.bidId,
                    t.userSyncOn = r.params.userSyncOn,
                    t
                },
                buildMarketplaceUrl: function(e, r) {
                    var i, t, n, a = e.params, o = a.server, s = a.region || "us", d = void 0;
                    return E.hasOwnProperty(s) || (c.logWarn("Unknown region '" + s + "' for AOL bidder."),
                    s = "us"),
                    d = o || E[s],
                    a.region = s,
                    h({
                        host: d,
                        network: a.network,
                        placement: parseInt(a.placement),
                        pageid: a.pageId || 0,
                        sizeid: a.sizeId || 0,
                        alias: a.alias || c.getUniqueIdentifierStr(),
                        misc: (new Date).getTime(),
                        bidfloor: (n = a.bidFloor,
                        void 0 !== n ? ";bidfloor=" + n.toString() : ""),
                        keyValues: (i = a.keyValues,
                        t = "",
                        c._each(i, (function(e, r) {
                            t += ";kv" + r + "=" + encodeURIComponent(e)
                        }
                        )),
                        t),
                        consentData: this.formatMarketplaceConsentData(r)
                    })
                },
                buildOneMobileGetUrl: function(e, r) {
                    var i = e.params
                      , t = i.dcn
                      , n = i.pos
                      , a = i.ext
                      , o = this.buildOneMobileBaseUrl(e);
                    if (t && n) {
                        var s = this.formatOneMobileDynamicParams(a, r);
                        o += O({
                            dcn: t,
                            pos: n,
                            dynamicParams: s
                        })
                    }
                    return o
                },
                buildOneMobileBaseUrl: function(e) {
                    return g({
                        host: e.params.host || "hb.nexage.com"
                    })
                },
                formatOneMobileDynamicParams: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}
                      , r = arguments[1];
                    this.isSecureProtocol() && (e.secure = 1),
                    this.isConsentRequired(r) && (e.euconsent = r.consentString,
                    e.gdpr = 1);
                    var i = "";
                    return c._each(e, (function(e, r) {
                        i += "&" + r + "=" + encodeURIComponent(e)
                    }
                    )),
                    i
                },
                buildOpenRtbRequestData: function(e, r) {
                    var i = {
                        id: e.params.id,
                        imp: e.params.imp
                    };
                    return this.isConsentRequired(r) && (i.user = {
                        ext: {
                            consent: r.consentString
                        }
                    },
                    i.regs = {
                        ext: {
                            gdpr: 1
                        }
                    }),
                    i
                },
                isConsentRequired: function(e) {
                    return !!(e && e.consentString && e.gdprApplies)
                },
                formatMarketplaceConsentData: function(e) {
                    return this.isConsentRequired(e) ? ";euconsent=" + e.consentString + ";gdpr=1" : ""
                },
                _parseBidResponse: function(e, r) {
                    var i = void 0;
                    try {
                        i = e.seatbid[0].bid[0]
                    } catch (e) {
                        return
                    }
                    var t = void 0;
                    if (i.ext && i.ext.encp)
                        t = i.ext.encp;
                    else if (null === (t = i.price) || isNaN(t))
                        return void c.logError("Invalid price in bid response", l.AOL, bid);
                    var n = {
                        bidderCode: r.bidderCode,
                        requestId: r.bidId,
                        ad: i.adm,
                        cpm: t,
                        width: i.w,
                        height: i.h,
                        creativeId: i.crid,
                        pubapiId: e.id,
                        currency: e.cur,
                        dealId: i.dealid,
                        netRevenue: !0,
                        ttl: r.ttl
                    };
                    return e.ext && e.ext.pixels && s.config.getConfig("aol.userSyncOn") !== d.EVENTS.BID_RESPONSE && (n.ad += this.formatPixels(e.ext.pixels)),
                    n
                },
                formatPixels: function(e) {
                    return "<script>var w=window,prebid;for(var i=0;i<10;i++){w = w.parent;prebid=w.pbjs;if(prebid && prebid.aolGlobals && !prebid.aolGlobals.pixelsDropped){try{prebid.aolGlobals.pixelsDropped=true;" + e.replace(/<\/?script( type=('|")text\/javascript('|")|)?>/g, "") + "break;}catch(e){continue;}}}<\/script>"
                },
                isOneMobileBidder: P,
                isSecureProtocol: function() {
                    return "https:" === document.location.protocol
                }
            };
            (0,
            o.registerBidder)(R)
        },
        116: function(e, r) {}
    }, [114]);
    pbjsChunk([116], {
        119: function(e, r, a) {
            a(120),
            e.exports = a(121)
        },
        120: function(e, r, a) {
            "use strict";
            Object.defineProperty(r, "__esModule", {
                value: !0
            }),
            r.spec = void 0;
            var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
              , p = Object.assign || function(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var a = arguments[r];
                    for (var t in a)
                        Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t])
                }
                return e
            }
              , o = a(14)
              , u = (function(e) {
                {
                    if (e && e.__esModule)
                        return e;
                    var r = {};
                    if (null != e)
                        for (var a in e)
                            Object.prototype.hasOwnProperty.call(e, a) && (r[a] = e[a]);
                    return r.default = e,
                    r
                }
            }
            )(a(0))
              , t = a(1)
              , c = a(4)
              , m = s(a(10))
              , l = s(a(7));
            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var f = ["id", "mimes", "minduration", "maxduration", "startdelay", "skippable", "playback_method", "frameworks"]
              , y = ["age", "external_uid", "segments", "gender", "dnt", "language"]
              , v = {
                body: "description",
                cta: "ctatext",
                image: {
                    serverName: "main_image",
                    requiredParams: {
                        required: !0
                    },
                    minimumParams: {
                        sizes: [{}]
                    }
                },
                icon: {
                    serverName: "icon",
                    requiredParams: {
                        required: !0
                    },
                    minimumParams: {
                        sizes: [{}]
                    }
                },
                sponsoredBy: "sponsored_by"
            }
              , n = r.spec = {
                code: "appnexus",
                aliases: ["appnexusAst", "brealtime", "pagescience", "defymedia", "gourmetads", "matomy", "featureforward", "oftmedia", "districtm"],
                supportedMediaTypes: [c.BANNER, c.VIDEO, c.NATIVE],
                isBidRequestValid: function(e) {
                    return !!(e.params.placementId || e.params.member && e.params.invCode)
                },
                buildRequests: function(e, r) {
                    var a = e.map(g)
                      , t = (0,
                    m.default)(e, h)
                      , s = void 0;
                    t && (s = {},
                    Object.keys(t.params.user).filter((function(e) {
                        return (0,
                        l.default)(y, e)
                    }
                    )).forEach((function(e) {
                        return s[e] = t.params.user[e]
                    }
                    )));
                    var i = (0,
                    m.default)(e, _)
                      , n = i ? parseInt(i.params.member, 10) : 0
                      , d = {
                        tags: [].concat(function(e) {
                            if (Array.isArray(e)) {
                                for (var r = 0, a = Array(e.length); r < e.length; r++)
                                    a[r] = e[r];
                                return a
                            }
                            return Array.from(e)
                        }(a)),
                        user: s,
                        sdk: {
                            source: "pbjs",
                            version: "1.13.0"
                        }
                    };
                    return 0 < n && (d.member_id = n),
                    r && r.gdprConsent && (d.gdpr_consent = {
                        consent_string: r.gdprConsent.consentString,
                        consent_required: r.gdprConsent.gdprApplies
                    }),
                    {
                        method: "POST",
                        url: "//ib.adnxs.com/ut/v3/prebid",
                        data: JSON.stringify(d),
                        bidderRequest: r
                    }
                },
                interpretResponse: function(e, r) {
                    var i = this
                      , n = r.bidderRequest;
                    e = e.body;
                    var d = [];
                    if (e && !e.error)
                        return e.tags && e.tags.forEach((function(e) {
                            var r, a, t = (r = e) && r.ads && r.ads.length && (0,
                            m.default)(r.ads, (function(e) {
                                return e.rtb
                            }
                            ));
                            if (t && 0 !== t.cpm && (0,
                            l.default)(i.supportedMediaTypes, t.ad_type)) {
                                var s = (function(e, r, a) {
                                    var t = {
                                        requestId: e.uuid,
                                        cpm: r.cpm,
                                        creativeId: r.creative_id,
                                        dealId: r.deal_id,
                                        currency: "USD",
                                        netRevenue: !0,
                                        ttl: 300,
                                        appnexus: {
                                            buyerMemberId: r.buyer_member_id
                                        }
                                    };
                                    if (r.rtb.video) {
                                        if (p(t, {
                                            width: r.rtb.video.player_width,
                                            height: r.rtb.video.player_height,
                                            vastUrl: r.rtb.video.asset_url,
                                            vastImpUrl: r.notify_url,
                                            ttl: 3600
                                        }),
                                        r.renderer_url) {
                                            var s = u.deepAccess(a.bids[0], "renderer.options");
                                            p(t, {
                                                adResponse: e,
                                                renderer: (function(e, r) {
                                                    var a = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}
                                                      , t = o.Renderer.install({
                                                        id: r.renderer_id,
                                                        url: r.renderer_url,
                                                        config: a,
                                                        loaded: !1
                                                    });
                                                    try {
                                                        t.setRender(I)
                                                    } catch (e) {
                                                        u.logWarn("Prebid Error calling setRender on renderer", e)
                                                    }
                                                    return t.setEventHandlers({
                                                        impression: function() {
                                                            return u.logMessage("AppNexus outstream video impression event")
                                                        },
                                                        loaded: function() {
                                                            return u.logMessage("AppNexus outstream video loaded event")
                                                        },
                                                        ended: function() {
                                                            u.logMessage("AppNexus outstream renderer video event"),
                                                            document.querySelector("#" + e).style.display = "none"
                                                        }
                                                    }),
                                                    t
                                                }
                                                )(t.adUnitCode, r, s)
                                            }),
                                            t.adResponse.ad = t.adResponse.ads[0],
                                            t.adResponse.ad.video = t.adResponse.ad.rtb.video
                                        }
                                    } else if (r.rtb[c.NATIVE]) {
                                        var i = r.rtb[c.NATIVE];
                                        t[c.NATIVE] = {
                                            title: i.title,
                                            body: i.desc,
                                            cta: i.ctatext,
                                            sponsoredBy: i.sponsored,
                                            clickUrl: i.link.url,
                                            clickTrackers: i.link.click_trackers,
                                            impressionTrackers: i.impression_trackers,
                                            javascriptTrackers: i.javascript_trackers
                                        },
                                        i.main_img && (t.native.image = {
                                            url: i.main_img.url,
                                            height: i.main_img.height,
                                            width: i.main_img.width
                                        }),
                                        i.icon && (t.native.icon = {
                                            url: i.icon.url,
                                            height: i.icon.height,
                                            width: i.icon.width
                                        })
                                    } else {
                                        p(t, {
                                            width: r.rtb.banner.width,
                                            height: r.rtb.banner.height,
                                            ad: r.rtb.banner.content
                                        });
                                        try {
                                            var n = r.rtb.trackers[0].impression_urls[0]
                                              , d = u.createTrackPixelHtml(n);
                                            t.ad += d
                                        } catch (e) {
                                            u.logError("Error appending tracking pixel", e)
                                        }
                                    }
                                    return t
                                }
                                )(e, t, n);
                                s.mediaType = (a = t.ad_type) === c.VIDEO ? c.VIDEO : a === c.NATIVE ? c.NATIVE : c.BANNER,
                                d.push(s)
                            }
                        }
                        )),
                        d;
                    var a = "in response for " + n.bidderCode + " adapter";
                    return e && e.error && (a += ": " + e.error),
                    u.logError(a),
                    d
                },
                getUserSyncs: function(e) {
                    if (e.iframeEnabled)
                        return [{
                            type: "iframe",
                            url: "//acdn.adnxs.com/ib/static/usersync/v3/async_usersync.html"
                        }]
                }
            };
            function g(r) {
                var e, t, n, d, a = {};
                if (a.sizes = b(r.sizes),
                a.primary_size = a.sizes[0],
                a.ad_types = [],
                a.uuid = r.bidId,
                r.params.placementId ? a.id = parseInt(r.params.placementId, 10) : a.code = r.params.invCode,
                a.allow_smaller_sizes = r.params.allowSmallerSizes || !1,
                a.use_pmt_rule = r.params.usePaymentRule || !1,
                a.prebid = !0,
                a.disable_psa = !0,
                r.params.reserve && (a.reserve = r.params.reserve),
                r.params.position && (a.position = {
                    above: 1,
                    below: 2
                }[r.params.position] || 0),
                r.params.trafficSourceCode && (a.traffic_source_code = r.params.trafficSourceCode),
                r.params.privateSizes && (a.private_sizes = b(r.params.privateSizes)),
                r.params.supplyType && (a.supply_type = r.params.supplyType),
                r.params.pubClick && (a.pubclick = r.params.pubClick),
                r.params.extInvCode && (a.ext_inv_code = r.params.extInvCode),
                r.params.externalImpId && (a.external_imp_id = r.params.externalImpId),
                u.isEmpty(r.params.keywords) || (a.keywords = (e = r.params.keywords,
                t = [],
                u._each(e, (function(e, r) {
                    if (u.isArray(e)) {
                        var a = [];
                        u._each(e, (function(e) {
                            (e = u.getValueString("keywords." + r, e)) && a.push(e)
                        }
                        )),
                        e = a
                    } else {
                        if (e = u.getValueString("keywords." + r, e),
                        !u.isStr(e))
                            return;
                        e = [e]
                    }
                    t.push({
                        key: r,
                        value: e
                    })
                }
                )),
                t)),
                (r.mediaType === c.NATIVE || u.deepAccess(r, "mediaTypes." + c.NATIVE)) && (a.ad_types.push(c.NATIVE),
                r.nativeParams)) {
                    var s = (n = r.nativeParams,
                    d = {},
                    Object.keys(n).forEach((function(e) {
                        var r = v[e] && v[e].serverName || v[e] || e
                          , a = v[e] && v[e].requiredParams;
                        d[r] = p({}, a, n[e]);
                        var t = v[e] && v[e].minimumParams;
                        if (a && t) {
                            var s = Object.keys(n[e])
                              , i = Object.keys(a);
                            0 === s.filter((function(e) {
                                return !(0,
                                l.default)(i, e)
                            }
                            )).length && (d[r] = p({}, d[r], t))
                        }
                    }
                    )),
                    d);
                    a[c.NATIVE] = {
                        layouts: [s]
                    }
                }
                var i = u.deepAccess(r, "mediaTypes." + c.VIDEO)
                  , o = u.deepAccess(r, "mediaTypes.video.context");
                return (r.mediaType === c.VIDEO || i) && a.ad_types.push(c.VIDEO),
                (r.mediaType === c.VIDEO || i && "outstream" !== o) && (a.require_asset_url = !0),
                r.params.video && (a.video = {},
                Object.keys(r.params.video).filter((function(e) {
                    return (0,
                    l.default)(f, e)
                }
                )).forEach((function(e) {
                    return a.video[e] = r.params.video[e]
                }
                ))),
                (u.isEmpty(r.mediaType) && u.isEmpty(r.mediaTypes) || r.mediaType === c.BANNER || r.mediaTypes && r.mediaTypes[c.BANNER]) && a.ad_types.push(c.BANNER),
                a
            }
            function b(e) {
                var r = []
                  , a = {};
                if (u.isArray(e) && 2 === e.length && !u.isArray(e[0]))
                    a.width = parseInt(e[0], 10),
                    a.height = parseInt(e[1], 10),
                    r.push(a);
                else if ("object" === (void 0 === e ? "undefined" : i(e)))
                    for (var t = 0; t < e.length; t++) {
                        var s = e[t];
                        (a = {}).width = parseInt(s[0], 10),
                        a.height = parseInt(s[1], 10),
                        r.push(a)
                    }
                return r
            }
            function h(e) {
                return !!e.params.user
            }
            function _(e) {
                return !!parseInt(e.params.member, 10)
            }
            function I(e) {
                e.renderer.push((function() {
                    window.ANOutstreamVideo.renderAd({
                        tagId: e.adResponse.tag_id,
                        sizes: [e.getSize().split("x")],
                        targetId: e.adUnitCode,
                        uuid: e.adResponse.uuid,
                        adResponse: e.adResponse,
                        rendererOptions: e.renderer.getConfig()
                    }, function(e, r, a) {
                        e.renderer.handleVideoEvent({
                            id: r,
                            eventName: a
                        })
                    }
                    .bind(null, e))
                }
                ))
            }
            (0,
            t.registerBidder)(n)
        },
        121: function(e, r) {}
    }, [119]);
    pbjsChunk([103], {
        165: function(e, r, a) {
            a(166),
            e.exports = a(167)
        },
        166: function(e, r, a) {
            "use strict";
            Object.defineProperty(r, "__esModule", {
                value: !0
            }),
            r.spec = void 0;
            var m = (function(e) {
                {
                    if (e && e.__esModule)
                        return e;
                    var r = {};
                    if (null != e)
                        for (var a in e)
                            Object.prototype.hasOwnProperty.call(e, a) && (r[a] = e[a]);
                    return r.default = e,
                    r
                }
            }
            )(a(0))
              , i = a(1)
              , t = a(4);
            var n = "conversant"
              , s = r.spec = {
                code: n,
                aliases: ["cnvr"],
                supportedMediaTypes: [t.BANNER, t.VIDEO],
                isBidRequestValid: function(e) {
                    if (!e || !e.params)
                        return m.logWarn(n + ": Missing bid parameters"),
                        !1;
                    if (!m.isStr(e.params.site_id))
                        return m.logWarn(n + ": site_id must be specified as a string"),
                        !1;
                    if (g(e))
                        if (e.params.mimes) {
                            if (!m.isArray(e.params.mimes) || !e.params.mimes.every((function(e) {
                                return m.isStr(e)
                            }
                            )))
                                return m.logWarn(n + ": mimes must be an array of strings"),
                                !1
                        } else
                            m.logWarn(n + ": mimes should be specified for videos");
                    return !0
                },
                buildRequests: function(e, r) {
                    var a, i = m.getTopWindowLocation(), t = i.href, o = "https:" === i.protocol ? 1 : 0, d = "", p = "", u = null, n = e.map((function(e) {
                        var r = m.getBidIdParameter("bidfloor", e.params)
                          , a = o || (m.getBidIdParameter("secure", e.params) ? 1 : 0);
                        d = m.getBidIdParameter("site_id", e.params),
                        p = e.auctionId;
                        var i = (function(e) {
                            var r = void 0;
                            r = 2 === e.length && "number" == typeof e[0] && "number" == typeof e[1] ? [{
                                w: e[0],
                                h: e[1]
                            }] : m._map(e, (function(e) {
                                return {
                                    w: e[0],
                                    h: e[1]
                                }
                            }
                            ));
                            return r
                        }
                        )(e.sizes)
                          , t = {
                            id: e.bidId,
                            secure: a,
                            bidfloor: r || 0,
                            displaymanager: "Prebid.js",
                            displaymanagerver: "2.2.3"
                        };
                        if (v(e.params, "tag_id", t, "tagid"),
                        g(e)) {
                            var n = {
                                w: i[0].w,
                                h: i[0].h
                            };
                            v(e.params, "position", n, "pos"),
                            v(e.params, "mimes", n),
                            v(e.params, "maxduration", n),
                            v(e.params, "protocols", n),
                            v(e.params, "api", n),
                            t.video = n
                        } else {
                            var s = {
                                format: i
                            };
                            v(e.params, "position", s, "pos"),
                            t.banner = s
                        }
                        return e.crumbs && e.crumbs.pubcid && (u = e.crumbs.pubcid),
                        t
                    }
                    )), s = {
                        id: p,
                        imp: n,
                        site: {
                            id: d,
                            mobile: null !== document.querySelector('meta[name="viewport"][content*="width=device-width"]') ? 1 : 0,
                            page: t
                        },
                        device: (a = navigator.language ? "language" : "userLanguage",
                        {
                            h: screen.height,
                            w: screen.width,
                            dnt: "1" === navigator.doNotTrack || "1" === window.doNotTrack || "1" === navigator.msDoNoTrack || "yes" === navigator.doNotTrack ? 1 : 0,
                            language: navigator[a].split("-")[0],
                            make: navigator.vendor ? navigator.vendor : "",
                            ua: navigator.userAgent
                        }),
                        at: 1
                    }, c = {};
                    return r && r.gdprConsent && (c.consent = r.gdprConsent.consentString,
                    "boolean" == typeof r.gdprConsent.gdprApplies && (s.regs = {
                        ext: {
                            gdpr: r.gdprConsent.gdprApplies ? 1 : 0
                        }
                    })),
                    u && (c.fpc = u),
                    m.isEmpty(c) || (s.user = {
                        ext: c
                    }),
                    {
                        method: "POST",
                        url: "//web.hb.ad.cpe.dotomi.com/s2s/header/24",
                        data: s
                    }
                },
                interpretResponse: function(s, e) {
                    var o = []
                      , d = {};
                    return s = s.body,
                    e && e.data && e.data.imp && m._each(e.data.imp, (function(e) {
                        return d[e.id] = e
                    }
                    )),
                    s && m.isArray(s.seatbid) && m._each(s.seatbid, (function(e) {
                        m._each(e.bid, (function(e) {
                            var r = parseFloat(e.price);
                            if (0 < r && e.impid) {
                                var a = e.adm || ""
                                  , i = e.nurl || ""
                                  , t = d[e.impid]
                                  , n = {
                                    requestId: e.impid,
                                    currency: s.cur || "USD",
                                    cpm: r,
                                    creativeId: e.crid || "",
                                    ttl: 300,
                                    netRevenue: !0
                                };
                                t.video ? (n.vastUrl = a,
                                n.mediaType = "video",
                                n.width = t.video.w,
                                n.height = t.video.h) : (n.ad = a + '<img src="' + i + '" />',
                                n.width = e.w,
                                n.height = e.h),
                                o.push(n)
                            }
                        }
                        ))
                    }
                    )),
                    o
                }
            };
            function g(e) {
                return "video" === e.mediaType || !!m.deepAccess(e, "mediaTypes.video")
            }
            function v(e, r, a, i) {
                i = i || r;
                var t = m.getBidIdParameter(r, e);
                "" !== t && (a[i] = t)
            }
            (0,
            i.registerBidder)(s)
        },
        167: function(e, r) {}
    }, [165]);
    pbjsChunk([0], {
        248: function(e, r, t) {
            t(249),
            e.exports = t(255)
        },
        249: function(e, r, t) {
            "use strict";
            Object.defineProperty(r, "__esModule", {
                value: !0
            }),
            r.spec = void 0;
            var m = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
              , b = (function(e) {
                {
                    if (e && e.__esModule)
                        return e;
                    var r = {};
                    if (null != e)
                        for (var t in e)
                            Object.prototype.hasOwnProperty.call(e, t) && (r[t] = e[t]);
                    return r.default = e,
                    r
                }
            }
            )(t(0))
              , n = t(4)
              , h = t(2)
              , o = s(t(250))
              , i = s(t(252))
              , a = t(1);
            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var p = [n.BANNER]
              , f = 100
              , c = 60
              , l = !0
              , d = !0;
            0 !== b.getTopWindowLocation().protocol.indexOf("https") && (d = !1);
            var g = d ? "https://as-sec.casalemedia.com/cygnus" : "http://as.casalemedia.com/cygnus"
              , y = {
                JPY: 1
            };
            function u(e) {
                return (0,
                o.default)(e) && 2 === e.length && (0,
                i.default)(e[0]) && (0,
                i.default)(e[1])
            }
            var v = r.spec = {
                code: "ix",
                aliases: ["indexExchange"],
                supportedMediaTypes: p,
                isBidRequestValid: function(e) {
                    if (!u(e.params.size))
                        return !1;
                    if (!(function(e, r) {
                        if (u(e))
                            return e[0] === r[0] && e[1] === r[1];
                        for (var t = 0; t < e.length; t++)
                            if (e[t][0] === r[0] && e[t][1] === r[1])
                                return !0;
                        return !1
                    }
                    )(e.sizes, e.params.size))
                        return !1;
                    if ("string" != typeof e.params.siteId)
                        return !1;
                    var r, t, n = e.params.hasOwnProperty("bidFloor"), o = e.params.hasOwnProperty("bidFloorCur");
                    return !n && !o || n && o && (r = e.params.bidFloor,
                    t = e.params.bidFloorCur,
                    Boolean("number" == typeof r && "string" == typeof t && t.match(/^[A-Z]{3}$/)))
                },
                buildRequests: function(e, r) {
                    for (var t, n, o = [], i = null, a = null, s = 0; s < e.length; s++)
                        i = e[s],
                        (b.deepAccess(i, "mediaTypes.banner") || "banner" === i.mediaType) && (n = void 0,
                        (n = {}).id = (t = i).bidId,
                        n.banner = {},
                        n.banner.w = t.params.size[0],
                        n.banner.h = t.params.size[1],
                        n.banner.topframe = b.inIframe() ? 0 : 1,
                        n.ext = {},
                        n.ext.sid = t.params.size[0] + "x" + t.params.size[1],
                        n.ext.siteID = t.params.siteId,
                        t.params.hasOwnProperty("bidFloor") && t.params.hasOwnProperty("bidFloorCur") && (n.bidfloor = t.params.bidFloor,
                        n.bidfloorcur = t.params.bidFloorCur),
                        a = n,
                        o.push(a));
                    var p = {};
                    if (p.id = e[0].bidderRequestId,
                    p.imp = o,
                    p.site = {},
                    p.site.page = b.getTopWindowUrl(),
                    p.site.ref = b.getTopWindowReferrer(),
                    p.ext = {},
                    p.ext.source = "prebid",
                    r && r.gdprConsent) {
                        var d = r.gdprConsent;
                        d.hasOwnProperty("gdprApplies") && (p.regs = {
                            ext: {
                                gdpr: d.gdprApplies ? 1 : 0
                            }
                        }),
                        d.hasOwnProperty("consentString") && (p.user = {
                            ext: {
                                consent: d.consentString || ""
                            }
                        })
                    }
                    var u = {}
                      , f = h.config.getConfig("ix");
                    if (f) {
                        if ("object" === m(f.firstPartyData)) {
                            var c = f.firstPartyData
                              , l = "?";
                            for (var y in c)
                                c.hasOwnProperty(y) && (l += encodeURIComponent(y) + "=" + encodeURIComponent(c[y]) + "&");
                            l = l.slice(0, -1),
                            p.site.page += l
                        }
                        "number" == typeof f.timeout && (u.t = f.timeout)
                    }
                    return u.s = e[0].params.siteId,
                    u.v = 7.2,
                    u.r = JSON.stringify(p),
                    u.ac = "j",
                    u.sd = 1,
                    {
                        method: "GET",
                        url: g,
                        data: u
                    }
                },
                interpretResponse: function(e) {
                    var r = []
                      , t = null;
                    if (!e.hasOwnProperty("body") || !e.body.hasOwnProperty("seatbid"))
                        return r;
                    for (var n, o, i, a = e.body, s = a.seatbid, p = 0; p < s.length; p++)
                        if (s[p].hasOwnProperty("bid"))
                            for (var d = s[p].bid, u = 0; u < d.length; u++)
                                n = d[u],
                                o = a.cur,
                                i = void 0,
                                i = {},
                                y.hasOwnProperty(o) ? i.cpm = n.price / y[o] : i.cpm = n.price / f,
                                i.requestId = n.impid,
                                i.width = n.w,
                                i.height = n.h,
                                i.ad = n.adm,
                                i.dealId = b.deepAccess(n, "ext.dealid"),
                                i.ttl = c,
                                i.netRevenue = l,
                                i.currency = o,
                                i.creativeId = n.hasOwnProperty("crid") ? n.crid : "-",
                                t = i,
                                r.push(t);
                    return r
                }
            };
            (0,
            a.registerBidder)(v)
        },
        250: function(e, r, t) {
            t(251),
            e.exports = t(13).Array.isArray
        },
        251: function(e, r, t) {
            var n = t(16);
            n(n.S, "Array", {
                isArray: t(37)
            })
        },
        252: function(e, r, t) {
            t(253),
            e.exports = t(13).Number.isInteger
        },
        253: function(e, r, t) {
            var n = t(16);
            n(n.S, "Number", {
                isInteger: t(254)
            })
        },
        254: function(e, r, t) {
            var n = t(17)
              , o = Math.floor;
            e.exports = function(e) {
                return !n(e) && isFinite(e) && o(e) === e
            }
        },
        255: function(e, r) {}
    }, [248]);
    pbjsChunk([61], {
        309: function(e, t, r) {
            r(310),
            e.exports = r(311)
        },
        310: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.spec = void 0;
            var o = function(e, t) {
                if (Array.isArray(e))
                    return e;
                if (Symbol.iterator in Object(e))
                    return (function(e, t) {
                        var r = []
                          , n = !0
                          , i = !1
                          , a = void 0;
                        try {
                            for (var s, o = e[Symbol.iterator](); !(n = (s = o.next()).done) && (r.push(s.value),
                            !t || r.length !== t); n = !0)
                                ;
                        } catch (e) {
                            i = !0,
                            a = e
                        } finally {
                            try {
                                !n && o.return && o.return()
                            } finally {
                                if (i)
                                    throw a
                            }
                        }
                        return r
                    }
                    )(e, t);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            };
            t.resetBoPixel = function() {
                h = !0
            }
            ;
            var d = r(2)
              , n = r(1)
              , c = (function(e) {
                {
                    if (e && e.__esModule)
                        return e;
                    var t = {};
                    if (null != e)
                        for (var r in e)
                            Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t.default = e,
                    t
                }
            }
            )(r(0))
              , u = r(15)
              , p = r(4)
              , l = r(12);
            var i = [p.BANNER, p.VIDEO]
              , m = "openx"
              , h = !0;
            var a = t.spec = {
                code: m,
                supportedMediaTypes: i,
                isBidRequestValid: function(e) {
                    return !(!e.params.unit || !e.params.delDomain)
                },
                buildRequests: function(e, a) {
                    if (0 === e.length)
                        return [];
                    var s = []
                      , t = e.reduce((function(e, t) {
                        var r;
                        return r = t,
                        c.deepAccess(r, "mediaTypes.video") || r.mediaType === p.VIDEO ? e[0].push(t) : e[1].push(t),
                        e
                    }
                    ), [[], []])
                      , r = o(t, 2)
                      , n = r[0]
                      , i = r[1];
                    return 0 < i.length && s.push(function(e, t) {
                        var r = f(e, t);
                        r.auid = c._map(e, (function(e) {
                            return e.params.unit
                        }
                        )).join(","),
                        r.aus = c._map(e, (function(e) {
                            return c.parseSizesInput(e.sizes).join(",")
                        }
                        )).join("|"),
                        r.bc = e[0].params.bc || "hb_pb_2.1.1";
                        var n = []
                          , a = !1;
                        e.forEach((function(i) {
                            if (i.params.customParams) {
                                var e = c._map(Object.keys(i.params.customParams), (function(e) {
                                    return t = e,
                                    r = i.params.customParams,
                                    n = r[t],
                                    c.isArray(n) && (n = n.join(",")),
                                    (t.toLowerCase() + "=" + n.toLowerCase()).replace("+", ".").replace("/", "_");
                                    var t, r, n
                                }
                                ))
                                  , t = window.btoa(e.join("&"));
                                a = !0,
                                n.push(t)
                            } else
                                n.push("")
                        }
                        )),
                        a && (r.tps = n.join(","));
                        var i = []
                          , s = !1;
                        e.forEach((function(e) {
                            e.params.customFloor ? (i.push(1e3 * e.params.customFloor),
                            s = !0) : i.push(0)
                        }
                        )),
                        s && (r.aumfs = i.join(","));
                        return {
                            method: "GET",
                            url: "//" + e[0].params.delDomain + "/w/1.0/arj",
                            data: r,
                            payload: {
                                bids: e,
                                startTime: new Date
                            }
                        }
                    }(i, a)),
                    0 < n.length && n.forEach((function(e) {
                        var t, r, n, i;
                        s.push((r = a,
                        n = "//" + (t = e).params.delDomain + "/v/1.0/avjp",
                        i = (function(e, t) {
                            var r = f([e], t)
                              , n = c.deepAccess(e, "params.video") || {}
                              , i = c.deepAccess(e, "mediaTypes.video.context")
                              , a = c.deepAccess(e, "mediaTypes.video.playerSize")
                              , s = void 0
                              , o = void 0;
                            c.isArray(e.sizes) && 2 === e.sizes.length && !c.isArray(e.sizes[0]) ? (s = parseInt(e.sizes[0], 10),
                            o = parseInt(e.sizes[1], 10)) : c.isArray(e.sizes) && c.isArray(e.sizes[0]) && 2 === e.sizes[0].length ? (s = parseInt(e.sizes[0][0], 10),
                            o = parseInt(e.sizes[0][1], 10)) : c.isArray(a) && 2 === a.length && (s = parseInt(a[0], 10),
                            o = parseInt(a[1], 10));
                            Object.keys(n).forEach((function(e) {
                                "openrtb" === e ? (n[e].w = s || n[e].w,
                                n[e].v = o || n[e].v,
                                r[e] = JSON.stringify(n[e])) : e in r || "url" === e || (r[e] = n[e])
                            }
                            )),
                            r.auid = e.params.unit,
                            r.vwd = s || n.vwd,
                            r.vht = o || n.vht,
                            "outstream" === i && (r.vos = "101");
                            n.mimes && (r.vmimes = n.mimes);
                            return r
                        }
                        )(t, r),
                        {
                            method: "GET",
                            url: n,
                            data: i,
                            payload: {
                                bid: t,
                                startTime: new Date
                            }
                        }))
                    }
                    )),
                    s
                },
                interpretResponse: function(e, t) {
                    var r = e.body;
                    return (/avjp$/.test(t.url) ? p.VIDEO : p.BANNER) === p.VIDEO ? (function(e, t) {
                        var r = t.bid
                          , n = t.startTime
                          , i = [];
                        if (void 0 !== e && "" !== e.vastUrl && "" !== e.pub_rev) {
                            var a = (0,
                            l.parse)(e.vastUrl).search || {}
                              , s = {};
                            s.requestId = r.bidId,
                            s.bidderCode = m,
                            s.ttl = 300,
                            s.netRevenue = !0,
                            s.currency = e.currency,
                            s.cpm = Number(e.pub_rev) / 1e3,
                            s.width = e.width,
                            s.height = e.height,
                            s.creativeId = e.adid,
                            s.vastUrl = e.vastUrl,
                            s.mediaType = p.VIDEO,
                            e.ph = a.ph,
                            e.colo = a.colo,
                            e.ts = a.ts,
                            i.push(s),
                            b(p.VIDEO, e, n)
                        }
                        return i
                    }
                    )(r, t.payload) : (function(e, t) {
                        for (var r = t.bids, n = t.startTime, i = e.ads.ad, a = [], s = 0; s < i.length; s++) {
                            var o = i[s]
                              , d = parseInt(o.idx, 10)
                              , c = {};
                            if (c.requestId = r[d].bidId,
                            o.pub_rev) {
                                c.cpm = Number(o.pub_rev) / 1e3;
                                var u = o.creative[0];
                                u && (c.width = u.width,
                                c.height = u.height),
                                c.creativeId = u.id,
                                c.ad = o.html,
                                o.deal_id && (c.dealId = o.deal_id),
                                c.ttl = 300,
                                c.netRevenue = !0,
                                c.currency = o.currency,
                                o.tbd && (c.tbd = o.tbd),
                                c.ts = o.ts,
                                a.push(c),
                                b(p.BANNER, o, n)
                            }
                        }
                        return a
                    }
                    )(r, t.payload)
                },
                getUserSyncs: function(e, t) {
                    if (e.iframeEnabled)
                        return [{
                            type: "iframe",
                            url: c.deepAccess(t, "0.body.ads.pixels") || c.deepAccess(t, "0.body.pixels") || "//u.openx.net/w/1.0/pd"
                        }]
                }
            };
            function v(t) {
                for (var e in t)
                    t.hasOwnProperty(e) && (t[e] || delete t[e]);
                return c._map(Object.keys(t), (function(e) {
                    return e + "=" + t[e]
                }
                )).join("&")
            }
            function f(e, t) {
                var r = c.inIframe()
                  , n = void 0;
                if (n = {
                    ju: d.config.getConfig("pageUrl") || c.getTopWindowUrl(),
                    jr: c.getTopWindowReferrer(),
                    ch: document.charSet || document.characterSet,
                    res: screen.width + "x" + screen.height + "x" + screen.colorDepth,
                    ifr: r,
                    tz: (new Date).getTimezoneOffset(),
                    tws: (function(e) {
                        var t = void 0
                          , r = void 0
                          , n = window
                          , i = document
                          , a = i.documentElement
                          , s = void 0;
                        if (e) {
                            try {
                                n = window.top,
                                i = window.top.document
                            } catch (e) {
                                return
                            }
                            a = i.documentElement,
                            s = i.body,
                            t = n.innerWidth || a.clientWidth || s.clientWidth,
                            r = n.innerHeight || a.clientHeight || s.clientHeight
                        } else
                            a = i.documentElement,
                            t = n.innerWidth || a.clientWidth,
                            r = n.innerHeight || a.clientHeight;
                        return t + "x" + r
                    }
                    )(r),
                    be: 1,
                    dddid: c._map(e, (function(e) {
                        return e.transactionId
                    }
                    )).join(","),
                    nocache: (new Date).getTime()
                },
                c.deepAccess(t, "gdprConsent")) {
                    var i = t.gdprConsent;
                    void 0 !== i.consentString && (n.gdpr_consent = i.consentString),
                    void 0 !== i.gdprApplies && (n.gdpr = i.gdprApplies ? 1 : 0),
                    "iab" === d.config.getConfig("consentManagement.cmpApi") && (n.x_gdpr_f = 1)
                }
                return n
            }
            function b(e, t, r) {
                if (h) {
                    h = !1;
                    var n = d.config.getConfig("bidderTimeout")
                      , i = void 0;
                    window.PREBID_TIMEOUT && (n = Math.min(window.PREBID_TIMEOUT, n));
                    var a = {
                        bd: +new Date - r,
                        bp: t.pub_rev,
                        br: "0",
                        bs: c.getTopWindowLocation().hostname,
                        bt: n,
                        ts: t.ts
                    };
                    if (a.br = a.bt < a.bd ? "t" : "p",
                    e === p.VIDEO) {
                        var s = (0,
                        l.parse)(t.colo);
                        a.ph = t.ph,
                        i = "//" + s.hostname + "/w/1.0/bo?" + v(a)
                    } else {
                        var o = c.deepAccess(t, "creative.0.tracking.impression").match(/([^?]+\/)ri\?/);
                        o && 1 < o.length && (i = o[1] + "bo?" + v(a))
                    }
                    i && u.userSync.registerSync("image", m, i)
                }
            }
            (0,
            n.registerBidder)(a)
        },
        311: function(e, t) {}
    }, [309]);
    pbjsChunk([52], {
        340: function(e, r, t) {
            t(341),
            e.exports = t(342)
        },
        341: function(e, r, t) {
            "use strict";
            Object.defineProperty(r, "__esModule", {
                value: !0
            }),
            r.spec = void 0;
            var p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
              , s = (function(e) {
                {
                    if (e && e.__esModule)
                        return e;
                    var r = {};
                    if (null != e)
                        for (var t in e)
                            Object.prototype.hasOwnProperty.call(e, t) && (r[t] = e[t]);
                    return r.default = e,
                    r
                }
            }
            )(t(0))
              , a = t(1);
            var l = t(3)
              , u = "USD"
              , c = void 0
              , m = {
                kadpageurl: "",
                gender: "",
                yob: "",
                lat: "",
                lon: "",
                wiid: "",
                profId: "",
                verId: ""
            }
              , n = {
                1: "PMP",
                5: "PREF",
                6: "PMPG"
            }
              , g = 0;
            function f(e, r) {
                if (!s.isStr(r))
                    return r && s.logWarn("PubMatic: Ignoring param key: " + e + ", expects string-value, found " + (void 0 === r ? "undefined" : p(r))),
                    c;
                switch (e) {
                case "pmzoneid":
                    return r.split(",").slice(0, 50).map((function(e) {
                        return e.trim()
                    }
                    )).join();
                case "kadfloor":
                case "lat":
                case "lon":
                    return parseFloat(r) || c;
                case "yob":
                    return parseInt(r) || c;
                default:
                    return r
                }
            }
            function b(e) {
                var r;
                e.params.adUnit = "",
                e.params.adUnitIndex = "0",
                e.params.width = 0,
                e.params.height = 0,
                e.params.adSlot = (r = e.params.adSlot,
                s.isStr(r) ? r.replace(/^\s+/g, "").replace(/\s+$/g, "") : "");
                var t = e.params.adSlot;
                try {
                    var a = t.split("@");
                    if (t = a[0],
                    2 == a.length && (e.params.adUnitIndex = 2 == a[1].split(":").length ? a[1].split(":")[1] : "0"),
                    2 != (a = a[1].split(":")[0].split("x")).length)
                        return void s.logWarn("AdSlot Error: adSlot not in required format");
                    e.params.width = parseInt(a[0]),
                    e.params.height = parseInt(a[1]),
                    e.params.adUnit = t
                } catch (e) {
                    s.logWarn("AdSlot Error: adSlot not in required format")
                }
            }
            var i = r.spec = {
                code: "pubmatic",
                isBidRequestValid: function(e) {
                    return !(!e || !e.params) && (s.isStr(e.params.publisherId) ? !!s.isStr(e.params.adSlot) || (s.logWarn("PubMatic: adSlotId is mandatory and cannot be numeric. Call to OpenBid will not be sent."),
                    !1) : (s.logWarn("PubMatic Error: publisherId is mandatory and cannot be numeric. Call to OpenBid will not be sent."),
                    !1))
                },
                buildRequests: function(e, r) {
                    var t, a, n, i, o = ((t = {}).pageURL = s.getTopWindowUrl(),
                    t.refURL = s.getTopWindowReferrer(),
                    t), d = (a = o,
                    {
                        id: "" + (new Date).getTime(),
                        at: 1,
                        cur: [u],
                        imp: [],
                        site: {
                            page: a.pageURL,
                            ref: a.refURL,
                            publisher: {}
                        },
                        device: {
                            ua: navigator.userAgent,
                            js: 1,
                            dnt: "yes" == navigator.doNotTrack || "1" == navigator.doNotTrack || "1" == navigator.msDoNotTrack ? 1 : 0,
                            h: screen.height,
                            w: screen.width,
                            language: navigator.language
                        },
                        user: {},
                        ext: {}
                    });
                    if (e.forEach((function(e) {
                        var r;
                        (b(e),
                        e.params.adSlot && e.params.adUnit && e.params.adUnitIndex && e.params.width && e.params.height) ? (o.pubId = o.pubId || e.params.publisherId,
                        (o = (function(e, r) {
                            var t, a, n;
                            for (t in r.kadpageurl || (r.kadpageurl = r.pageURL),
                            m)
                                m.hasOwnProperty(t) && (a = e[t]) && ("object" === (void 0 === (n = m[t]) ? "undefined" : p(n)) && (a = n.f(a, r)),
                                s.isStr(a) ? r[t] = a : s.logWarn("PubMatic: Ignoring param : " + t + " with value : " + m[t] + ", expects string-value, found " + (void 0 === a ? "undefined" : p(a))));
                            return r
                        }
                        )(e.params, o)).transactionId = e.transactionId,
                        d.imp.push({
                            id: (r = e).bidId,
                            tagid: r.params.adUnit,
                            bidfloor: f("kadfloor", r.params.kadfloor),
                            secure: "https:" === window.location.protocol ? 1 : 0,
                            banner: {
                                pos: 0,
                                w: r.params.width,
                                h: r.params.height,
                                topframe: s.inIframe() ? 0 : 1
                            },
                            ext: {
                                pmZoneId: f("pmzoneid", r.params.pmzoneid)
                            }
                        })) : s.logWarn("PubMatic: Skipping the non-standard adslot:", e.params.adSlot, e)
                    }
                    )),
                    0 != d.imp.length)
                        return d.site.publisher.id = o.pubId.trim(),
                        g = o.pubId.trim(),
                        d.ext.wrapper = {},
                        d.ext.wrapper.profile = parseInt(o.profId) || c,
                        d.ext.wrapper.version = parseInt(o.verId) || c,
                        d.ext.wrapper.wiid = o.wiid || c,
                        d.ext.wrapper.wv = l.REPO_AND_VERSION,
                        d.ext.wrapper.transactionId = o.transactionId,
                        d.ext.wrapper.wp = "pbjs",
                        d.user.gender = o.gender ? o.gender.trim() : c,
                        d.user.geo = {},
                        r && r.gdprConsent && (d.user.ext = {
                            consent: r.gdprConsent.consentString
                        },
                        d.regs = {
                            ext: {
                                gdpr: r.gdprConsent.gdprApplies ? 1 : 0
                            }
                        }),
                        d.user.geo.lat = f("lat", o.lat),
                        d.user.geo.lon = f("lon", o.lon),
                        d.user.yob = f("yob", o.yob),
                        d.device.geo = {},
                        d.device.geo.lat = f("lat", o.lat),
                        d.device.geo.lon = f("lon", o.lon),
                        d.site.page = o.kadpageurl.trim() || d.site.page.trim(),
                        d.site.domain = (n = d.site.page,
                        (i = document.createElement("a")).href = n,
                        i.hostname),
                        {
                            method: "POST",
                            url: "//hbopenbid.pubmatic.com/translator?source=prebid-client",
                            data: JSON.stringify(d)
                        }
                },
                interpretResponse: function(e, r) {
                    var t = [];
                    try {
                        var a = JSON.parse(r.data);
                        a && a.imp && 0 < a.imp.length && a.imp.forEach((function(e) {
                            t.push({
                                requestId: e.id,
                                width: 0,
                                height: 0,
                                ttl: 300,
                                ad: "",
                                creativeId: 0,
                                netRevenue: !1,
                                cpm: 0,
                                currency: u,
                                referrer: s.getTopWindowUrl()
                            })
                        }
                        )),
                        e.body && e.body.seatbid && s.isArray(e.body.seatbid) && e.body.seatbid.forEach((function(e) {
                            e.bid && s.isArray(e.bid) && e.bid.forEach((function(r) {
                                t.forEach((function(e) {
                                    e.requestId == r.impid && (e.requestId = r.impid,
                                    e.cpm = (parseFloat(r.price) || 0).toFixed(2),
                                    e.width = r.w,
                                    e.height = r.h,
                                    e.creativeId = r.crid || r.id,
                                    e.dealId = r.dealid,
                                    e.currency = u,
                                    e.netRevenue = !1,
                                    e.ttl = 300,
                                    e.referrer = s.getTopWindowUrl(),
                                    e.ad = r.adm,
                                    r.ext && r.ext.deal_channel && (e.dealChannel = n[r.ext.deal_channel] || null))
                                }
                                ))
                            }
                            ))
                        }
                        ))
                    } catch (e) {
                        s.logError(e)
                    }
                    return t
                },
                getUserSyncs: function(e, r, t) {
                    var a = "//ads.pubmatic.com/AdServer/js/showad.js#PIX&kdntuid=1&p=" + g;
                    if (t && (a += "&gdpr=" + (t.gdprApplies ? 1 : 0),
                    a += "&gdpr_consent=" + encodeURIComponent(t.consentString || "")),
                    e.iframeEnabled)
                        return [{
                            type: "iframe",
                            url: a
                        }];
                    s.logWarn("PubMatic: Please enable iframe based user sync.")
                }
            };
            (0,
            a.registerBidder)(i)
        },
        342: function(e, r) {}
    }, [340]);
    pbjsChunk([37], {
        384: function(e, r, t) {
            t(385),
            e.exports = t(386)
        },
        385: function(e, r, t) {
            "use strict";
            Object.defineProperty(r, "__esModule", {
                value: !0
            }),
            r.spec = void 0;
            var u = function(e, r) {
                if (Array.isArray(e))
                    return e;
                if (Symbol.iterator in Object(e))
                    return (function(e, r) {
                        var t = []
                          , i = !0
                          , n = !1
                          , o = void 0;
                        try {
                            for (var a, s = e[Symbol.iterator](); !(i = (a = s.next()).done) && (t.push(a.value),
                            !r || t.length !== r); i = !0)
                                ;
                        } catch (e) {
                            n = !0,
                            o = e
                        } finally {
                            try {
                                !i && s.return && s.return()
                            } finally {
                                if (n)
                                    throw o
                            }
                        }
                        return t
                    }
                    )(e, r);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
              , p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ;
            r.masSizeOrdering = n,
            r.resetUserSync = function() {
                o = !1
            }
            ;
            var l = (function(e) {
                {
                    if (e && e.__esModule)
                        return e;
                    var r = {};
                    if (null != e)
                        for (var t in e)
                            Object.prototype.hasOwnProperty.call(e, t) && (r[t] = e[t]);
                    return r.default = e,
                    r
                }
            }
            )(t(0))
              , i = t(1)
              , f = t(2)
              , y = t(4);
            var a = "pbjs_lite_v1.13.0";
            var s = "//fastlane.rubiconproject.com/a/api/fastlane.json"
              , v = {
                1: "468x60",
                2: "728x90",
                5: "120x90",
                8: "120x600",
                9: "160x600",
                10: "300x600",
                13: "200x200",
                14: "250x250",
                15: "300x250",
                16: "336x280",
                19: "300x100",
                31: "980x120",
                32: "250x360",
                33: "180x500",
                35: "980x150",
                37: "468x400",
                38: "930x180",
                43: "320x50",
                44: "300x50",
                48: "300x300",
                53: "1024x768",
                54: "300x1050",
                55: "970x90",
                57: "970x250",
                58: "1000x90",
                59: "320x80",
                60: "320x150",
                61: "1000x1000",
                64: "580x500",
                65: "640x480",
                67: "320x480",
                68: "1800x1000",
                72: "320x320",
                73: "320x160",
                78: "980x240",
                79: "980x300",
                80: "980x400",
                83: "480x300",
                94: "970x310",
                96: "970x210",
                101: "480x320",
                102: "768x1024",
                103: "480x280",
                108: "320x240",
                113: "1000x300",
                117: "320x100",
                125: "800x250",
                126: "200x600",
                144: "980x600",
                159: "320x250",
                195: "600x300",
                199: "640x200",
                213: "1030x590",
                214: "980x360",
                232: "580x400"
            };
            l._each(v, (function(e, r) {
                return v[e] = r
            }
            ));
            var m = r.spec = {
                code: "rubicon",
                aliases: ["rubiconLite"],
                supportedMediaTypes: [y.BANNER, y.VIDEO],
                isBidRequestValid: function(e) {
                    if ("object" !== p(e.params))
                        return !1;
                    var r = e.params;
                    return !!/^\d+$/.test(r.accountId) && ("outstream" === l.deepAccess(e, "mediaTypes." + y.VIDEO + ".context") && l.logWarn("Warning: outstream video for Rubicon Client Adapter is not supported yet"),
                    m.hasVideoMediaType(e) && void 0 !== l.deepAccess(e, "mediaTypes." + y.BANNER) && l.logWarn("Warning: instream video and banner requested for same ad unit, continuing with video instream request"),
                    ("video" !== e.mediaType || void 0 !== l.deepAccess(e, "params.video.size_id")) && (!(e.mediaTypes && !m.hasVideoMediaType(e) && void 0 === e.mediaTypes.banner) && !(g(e).length < 1)))
                },
                buildRequests: function(e, o) {
                    var r = []
                      , t = e.filter(m.hasVideoMediaType).map((function(e) {
                        e.startTime = (new Date).getTime();
                        var r = e.params
                          , t = g(e)
                          , i = {
                            page_url: c(e),
                            resolution: d(),
                            account_id: r.accountId,
                            integration: a,
                            "x_source.tid": e.transactionId,
                            timeout: o.timeout - (Date.now() - o.auctionStart + 500),
                            stash_creatives: !0,
                            ae_pass_through_parameters: r.video.aeParams,
                            slots: []
                        }
                          , n = {
                            site_id: r.siteId,
                            zone_id: r.zoneId,
                            position: h(r.position),
                            floor: .01 < parseFloat(r.floor) ? r.floor : .01,
                            element_id: e.adUnitCode,
                            name: e.adUnitCode,
                            language: r.video.language,
                            width: t[0],
                            height: t[1],
                            size_id: r.video.size_id
                        };
                        return r.inventory && "object" === p(r.inventory) && (n.inventory = r.inventory),
                        r.keywords && Array.isArray(r.keywords) && (n.keywords = r.keywords),
                        r.visitor && "object" === p(r.visitor) && (n.visitor = r.visitor),
                        i.slots.push(n),
                        o.gdprConsent && ("boolean" == typeof o.gdprConsent.gdprApplies && (i.gdpr = Number(o.gdprConsent.gdprApplies)),
                        i.gdpr_consent = o.gdprConsent.consentString),
                        {
                            method: "POST",
                            url: "//fastlane-adv.rubiconproject.com/v1/auction/video",
                            data: i,
                            bidRequest: e
                        }
                    }
                    ));
                    if (!0 !== f.config.getConfig("rubicon.singleRequest"))
                        r = t.concat(e.filter((function(e) {
                            return !m.hasVideoMediaType(e)
                        }
                        )).map((function(e) {
                            var i = m.createSlotParams(e, o);
                            return {
                                method: "GET",
                                url: s,
                                data: Object.keys(i).reduce((function(e, r) {
                                    var t = i[r];
                                    return l.isStr(t) && "" !== t || l.isNumber(t) ? "" + e + r + "=" + encodeURIComponent(t) + "&" : e
                                }
                                ), "") + "slots=1&rand=" + Math.random(),
                                bidRequest: e
                            }
                        }
                        )));
                    else {
                        var n = e.filter((function(e) {
                            return !m.hasVideoMediaType(e)
                        }
                        )).reduce((function(e, r) {
                            return (e[r.params.siteId] = e[r.params.siteId] || []).push(r),
                            e
                        }
                        ), {});
                        r = t.concat(Object.keys(n).map((function(e) {
                            var r = n[e];
                            10 < r.length && (l.logWarn("single request mode has a limit of 10 bids: " + (r.length - 10) + " bids were not sent"),
                            r = r.slice(0, 10));
                            var i = m.combineSlotUrlParams(r.map((function(e) {
                                return m.createSlotParams(e, o)
                            }
                            )));
                            return {
                                method: "GET",
                                url: s,
                                data: Object.keys(i).reduce((function(e, r) {
                                    var t = i[r];
                                    return l.isStr(t) && "" !== t || l.isNumber(t) ? "" + e + r + "=" + encodeURIComponent(t) + "&" : e
                                }
                                ), "") + "slots=" + r.length + "&rand=" + Math.random(),
                                bidRequest: r
                            }
                        }
                        )))
                    }
                    return r
                },
                combineSlotUrlParams: function(n) {
                    if (1 === n.length)
                        return n[0];
                    var i = n.reduce((function(r, t, i) {
                        return Object.keys(t).forEach((function(e) {
                            r.hasOwnProperty(e) || (r[e] = new Array(n.length)),
                            r[e].splice(i, 1, t[e])
                        }
                        )),
                        r
                    }
                    ), {})
                      , o = new RegExp("^([^;]*)(;\\1)+$");
                    return Object.keys(i).forEach((function(e) {
                        var r = i[e].join(";")
                          , t = r.match(o);
                        i[e] = t ? t[1] : r
                    }
                    )),
                    i
                },
                createSlotParams: function(e, r) {
                    e.startTime = (new Date).getTime();
                    var t = e.params
                      , i = g(e)
                      , n = {
                        account_id: t.accountId,
                        site_id: t.siteId,
                        zone_id: t.zoneId,
                        size_id: i[0],
                        alt_size_ids: i.slice(1).join(",") || void 0,
                        p_pos: h(t.position),
                        rp_floor: .01 < (t.floor = parseFloat(t.floor)) ? t.floor : .01,
                        rp_secure: "https:" === location.protocol ? "1" : "0",
                        tk_flint: a,
                        "x_source.tid": e.transactionId,
                        p_screen_res: d(),
                        kw: Array.isArray(t.keywords) ? t.keywords.join(",") : "",
                        tk_user_key: t.userId,
                        "tg_fl.eid": e.code,
                        rf: c(e)
                    };
                    r.gdprConsent && ("boolean" == typeof r.gdprConsent.gdprApplies && (n.gdpr = Number(r.gdprConsent.gdprApplies)),
                    n.gdpr_consent = r.gdprConsent.consentString),
                    null !== t.visitor && "object" === p(t.visitor) && Object.keys(t.visitor).forEach((function(e) {
                        n["tg_v." + e] = t.visitor[e]
                    }
                    )),
                    null !== t.inventory && "object" === p(t.inventory) && Object.keys(t.inventory).forEach((function(e) {
                        n["tg_i." + e] = t.inventory[e]
                    }
                    ));
                    var o = (function() {
                        var e = (r = window.DigiTrust && (f.config.getConfig("digiTrustId") || window.DigiTrust.getUser({
                            member: "T9QSFKPDN9"
                        })),
                        r && r.success && r.identity || null);
                        var r;
                        if (!e || e.privacy && e.privacy.optout)
                            return [];
                        return {
                            "dt.id": e.id,
                            "dt.keyv": e.keyv,
                            "dt.pref": 0
                        }
                    }
                    )();
                    return Object.keys(o).forEach((function(e) {
                        n[e] = o[e]
                    }
                    )),
                    n
                },
                hasVideoMediaType: function(e) {
                    return void 0 !== l.deepAccess(e, "params.video.size_id") && (e.mediaType === y.VIDEO || "instream" === l.deepAccess(e, "mediaTypes." + y.VIDEO + ".context"))
                },
                interpretResponse: function(d, e) {
                    var c = e.bidRequest;
                    if (!(d = d.body) || "object" !== (void 0 === d ? "undefined" : p(d)))
                        return [];
                    var r = d.ads;
                    return "object" === (void 0 === c ? "undefined" : p(c)) && !Array.isArray(c) && m.hasVideoMediaType(c) && "object" === (void 0 === r ? "undefined" : p(r)) && (r = r[c.adUnitCode]),
                    !Array.isArray(r) || r.length < 1 ? [] : r.reduce((function(e, r, t) {
                        if ("ok" !== r.status)
                            return e;
                        var i, n = Array.isArray(c) ? c[t] : c;
                        if (n && "object" === (void 0 === n ? "undefined" : p(n))) {
                            var o = {
                                requestId: n.bidId,
                                currency: "USD",
                                creativeId: r.creative_id,
                                cpm: r.cpm || 0,
                                dealId: r.deal,
                                ttl: 300,
                                netRevenue: f.config.getConfig("rubicon.netRevenue") || !1,
                                rubicon: {
                                    advertiserId: r.advertiser,
                                    networkId: r.network
                                }
                            };
                            if (r.creative_type && (o.mediaType = r.creative_type),
                            r.creative_type === y.VIDEO)
                                o.width = n.params.video.playerWidth,
                                o.height = n.params.video.playerHeight,
                                o.vastUrl = r.creative_depot_url,
                                o.impression_id = r.impression_id,
                                o.videoCacheKey = r.impression_id;
                            else {
                                o.ad = (i = r.script,
                                "<html>\n<head><script type='text/javascript'>inDapIF=true;<\/script></head>\n<body style='margin : 0; padding: 0;'>\n\x3c!-- Rubicon Project Ad Tag --\x3e\n<div data-rp-impression-id='" + r.impression_id + "'>\n<script type='text/javascript'>" + i + "<\/script>\n</div>\n</body>\n</html>");
                                var a = v[r.size_id].split("x").map((function(e) {
                                    return Number(e)
                                }
                                ))
                                  , s = u(a, 2);
                                o.width = s[0],
                                o.height = s[1]
                            }
                            o.rubiconTargeting = (Array.isArray(r.targeting) ? r.targeting : []).reduce((function(e, r) {
                                return e[r.key] = r.values[0],
                                e
                            }
                            ), {
                                rpfl_elemid: n.adUnitCode
                            }),
                            e.push(o)
                        } else
                            l.logError("bidRequest undefined at index position:" + t, c, d);
                        return e
                    }
                    ), []).sort((function(e, r) {
                        return (r.cpm || 0) - (e.cpm || 0)
                    }
                    ))
                },
                getUserSyncs: function(e, r, t) {
                    if (!o && e.iframeEnabled) {
                        var i = "";
                        return t && "string" == typeof t.consentString && ("boolean" == typeof t.gdprApplies ? i += "?gdpr=" + Number(t.gdprApplies) + "&gdpr_consent=" + t.consentString : i += "?gdpr_consent=" + t.consentString),
                        o = !0,
                        {
                            type: "iframe",
                            url: "https://eus.rubiconproject.com/usync.html" + i
                        }
                    }
                }
            };
            function d() {
                return [window.screen.width, window.screen.height].join("x")
            }
            function c(e) {
                var r = f.config.getConfig("pageUrl");
                return e.params.referrer ? r = e.params.referrer : r || (r = l.getTopWindowUrl()),
                e.params.secure ? r.replace(/^http:/i, "https:") : r
            }
            function g(e) {
                var r, t = e.params;
                if (m.hasVideoMediaType(e)) {
                    var i = [];
                    return t.video && t.video.playerWidth && t.video.playerHeight ? i = [t.video.playerWidth, t.video.playerHeight] : Array.isArray(e.sizes) && 0 < e.sizes.length && Array.isArray(e.sizes[0]) && 1 < e.sizes[0].length && (i = e.sizes[0]),
                    i
                }
                return n(Array.isArray(t.sizes) ? t.sizes : (r = e.sizes,
                l.parseSizesInput(r).reduce((function(e, r) {
                    var t = parseInt(v[r], 10);
                    return t && e.push(t),
                    e
                }
                ), [])))
            }
            function h(e) {
                return "atf" === e || "btf" === e ? e : "unknown"
            }
            function n(e) {
                var n = [15, 2, 9];
                return e.sort((function(e, r) {
                    var t = n.indexOf(e)
                      , i = n.indexOf(r);
                    return -1 < t || -1 < i ? -1 === t ? 1 : -1 === i ? -1 : t - i : e - r
                }
                ))
            }
            var o = !1;
            (0,
            i.registerBidder)(m)
        },
        386: function(e, r) {}
    }, [384]);
    pbjsChunk([27], {
        420: function(e, r, t) {
            t(421),
            e.exports = t(422)
        },
        421: function(e, r, t) {
            "use strict";
            Object.defineProperty(r, "__esModule", {
                value: !0
            }),
            r._isInbounds = r.spec = void 0;
            var _ = function(e, r) {
                if (Array.isArray(e))
                    return e;
                if (Symbol.iterator in Object(e))
                    return (function(e, r) {
                        var t = []
                          , i = !0
                          , n = !1
                          , s = void 0;
                        try {
                            for (var o, a = e[Symbol.iterator](); !(i = (o = a.next()).done) && (t.push(o.value),
                            !r || t.length !== r); i = !0)
                                ;
                        } catch (e) {
                            n = !0,
                            s = e
                        } finally {
                            try {
                                !i && a.return && a.return()
                            } finally {
                                if (n)
                                    throw s
                            }
                        }
                        return t
                    }
                    )(e, r);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
              , s = Object.assign || function(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = arguments[r];
                    for (var i in t)
                        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                }
                return e
            }
            ;
            r._getPlatform = b;
            var i, n = t(1), g = t(0), o = t(4), a = t(10), y = (i = a) && i.__esModule ? i : {
                default: i
            };
            function d(e, r, t) {
                return r in e ? Object.defineProperty(e, r, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = t,
                e
            }
            var u = (0,
            g.generateUUID)()
              , p = r.spec = {
                code: "sonobi",
                supportedMediaTypes: [o.BANNER, o.VIDEO],
                isBidRequestValid: function(e) {
                    return !(!e.params || !e.params.ad_unit && !e.params.placement_id || !e.params.sizes && !e.sizes)
                },
                buildRequests: function(e, r) {
                    var t = e.map((function(e) {
                        var r = (function(e) {
                            if (e.params.ad_unit)
                                return e.params.ad_unit;
                            return e.params.placement_id
                        }
                        )(e);
                        return /^[\/]?[\d]+[[\/].+[\/]?]?$/.test(r) ? d({}, (r = "/" === r.charAt(0) ? r : "/" + r) + "|" + e.bidId, "" + c(e) + l(e)) : /^[0-9a-fA-F]{20}$/.test(r) && 20 === r.length ? d({}, e.bidId, r + "|" + c(e) + l(e)) : void (0,
                        g.logError)("The ad unit code or Sonobi Placement id for slot " + e.bidId + " is invalid")
                    }
                    ))
                      , i = {};
                    t.forEach((function(e) {
                        s(i, e)
                    }
                    ));
                    var n = {
                        key_maker: JSON.stringify(i),
                        ref: (0,
                        g.getTopWindowLocation)().host,
                        s: (0,
                        g.generateUUID)(),
                        pv: u,
                        vp: b(),
                        lib_name: "prebid",
                        lib_v: "1.13.0"
                    };
                    return e[0].params.hfa && (n.hfa = e[0].params.hfa),
                    e[0].params.referrer && (n.ref = e[0].params.referrer),
                    r && r.gdprConsent && (n.gdpr = r.gdprConsent.gdprApplies ? "true" : "false",
                    n.consent_string = r.gdprConsent.consentString),
                    (0,
                    g.isEmpty)(i) ? null : {
                        method: "GET",
                        url: "https://apex.go.sonobi.com/trinity.json",
                        withCredentials: !0,
                        data: n,
                        bidderRequests: e
                    }
                },
                interpretResponse: function(e, r) {
                    var v = r.bidderRequests
                      , m = e.body
                      , h = [];
                    return 0 === Object.keys(m.slots).length || Object.keys(m.slots).forEach((function(e) {
                        var r = e.split("|").slice(-1)[0]
                          , t = (0,
                        y.default)(v, (function(e) {
                            return e.bidId === r
                        }
                        ))
                          , i = (0,
                        g.deepAccess)(t, "mediaTypes.video")
                          , n = t.mediaType || (i ? "video" : null)
                          , s = I(n)
                          , o = m.slots[e];
                        if (o.sbi_aid && o.sbi_mouse && o.sbi_size) {
                            var a = o.sbi_size.split("x")
                              , d = _(a, 2)
                              , u = d[0]
                              , p = void 0 === u ? 1 : u
                              , c = d[1]
                              , l = void 0 === c ? 1 : c
                              , f = {
                                requestId: r,
                                cpm: Number(o.sbi_mouse),
                                width: Number(p),
                                height: Number(l),
                                ad: s(m.sbi_dc, o.sbi_aid),
                                ttl: 500,
                                creativeId: o.sbi_crid || o.sbi_aid,
                                aid: o.sbi_aid,
                                netRevenue: !0,
                                currency: "USD"
                            };
                            o.sbi_dozer && (f.dealId = o.sbi_dozer);
                            var b = o.sbi_ct;
                            !b || "video" !== b && "outstream" !== b || (f.mediaType = "video",
                            f.vastUrl = s(m.sbi_dc, o.sbi_aid),
                            delete f.ad,
                            delete f.width,
                            delete f.height),
                            h.push(f)
                        }
                    }
                    )),
                    h
                },
                getUserSyncs: function(e, r) {
                    var t = [];
                    try {
                        e.pixelEnabled && r[0].body.sbi_px.forEach((function(e) {
                            t.push({
                                type: e.type,
                                url: e.url
                            })
                        }
                        ))
                    } catch (e) {
                        (0,
                        g.logError)(e)
                    }
                    return t
                }
            };
            function c(e) {
                return e.params.sizes ? (0,
                g.parseSizesInput)(e.params.sizes).join(",") : (0,
                g.parseSizesInput)(e.sizes).join(",")
            }
            function l(e) {
                return e.params.floor ? "|f=" + e.params.floor : ""
            }
            var I = function(t) {
                return function(e, r) {
                    return "video" === t ? "https://" + e + "apex.go.sonobi.com/vast.xml?vid=" + r + "&ref=" + (0,
                    g.getTopWindowLocation)().host : '<script type="text/javascript" src="' + ("https://" + e + "apex.go.sonobi.com/sbi.js?aid=" + r + "&as=null&ref=" + (0,
                    g.getTopWindowLocation)().host) + '"><\/script>'
                }
            };
            var f = r._isInbounds = function() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : window;
                return function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0
                      , r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : Number.MAX_SAFE_INTEGER;
                    return t.innerWidth >= e && t.innerWidth < r
                }
            }
            ;
            function b() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : window
                  , r = f(e)
                  , t = 992
                  , i = 768;
                return r(0, 768) ? "mobile" : r(i, t) ? "tablet" : "desktop"
            }
            (0,
            n.registerBidder)(p)
        },
        422: function(e, r) {}
    }, [420]);
    pbjsChunk([26], {
        423: function(e, t, i) {
            i(424),
            e.exports = i(425)
        },
        424: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.spec = void 0;
            var d = (function(e) {
                {
                    if (e && e.__esModule)
                        return e;
                    var t = {};
                    if (null != e)
                        for (var i in e)
                            Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                    return t.default = e,
                    t
                }
            }
            )(i(0))
              , r = i(1)
              , a = i(4)
              , s = i(3);
            var n = t.spec = {
                code: "sovrn",
                supportedMediaTypes: [a.BANNER],
                isBidRequestValid: function(e) {
                    return !(!e.params.tagid || isNaN(parseFloat(e.params.tagid)) || !isFinite(e.params.tagid))
                },
                buildRequests: function(e, t) {
                    var i = d.getTopWindowLocation()
                      , r = []
                      , n = void 0;
                    d._each(e, (function(e) {
                        n = n || d.getBidIdParameter("iv", e.params),
                        r.push({
                            id: e.bidId,
                            banner: {
                                w: 1,
                                h: 1
                            },
                            tagid: String(d.getBidIdParameter("tagid", e.params)),
                            bidfloor: d.getBidIdParameter("bidfloor", e.params)
                        })
                    }
                    ));
                    var a = {
                        id: d.getUniqueIdentifierStr(),
                        imp: r,
                        site: {
                            domain: i.host,
                            page: i.host + i.pathname + i.search + i.hash
                        }
                    };
                    return n && (a.iv = n),
                    t && t.gdprConsent && (a.regs = {
                        ext: {
                            gdpr: +t.gdprConsent.gdprApplies
                        }
                    },
                    a.user = {
                        ext: {
                            consent: t.gdprConsent.consentString
                        }
                    }),
                    {
                        method: "POST",
                        url: "//ap.lijit.com/rtb/bid?src=" + s.REPO_AND_VERSION,
                        data: JSON.stringify(a),
                        options: {
                            contentType: "text/plain"
                        }
                    }
                },
                interpretResponse: function(e) {
                    var t = e.body
                      , i = t.id
                      , r = t.seatbid
                      , n = [];
                    return i && r && 0 < r.length && r[0].bid && 0 < r[0].bid.length && r[0].bid.map((function(e) {
                        n.push({
                            requestId: e.impid,
                            cpm: parseFloat(e.price),
                            width: parseInt(e.w),
                            height: parseInt(e.h),
                            creativeId: e.crid || e.id,
                            dealId: e.dealid || null,
                            currency: "USD",
                            netRevenue: !0,
                            mediaType: a.BANNER,
                            ad: decodeURIComponent(e.adm + '<img src="' + e.nurl + '">'),
                            ttl: 6e4
                        })
                    }
                    )),
                    n
                }
            };
            (0,
            r.registerBidder)(n)
        },
        425: function(e, t) {}
    }, [423]);
    pbjs.processQueue();
}
!(function(t) {
    function e(n) {
        if (i[n])
            return i[n].exports;
        var r = i[n] = {
            exports: {},
            id: n,
            loaded: !1
        };
        return t[n].call(r.exports, r, r.exports, e),
        r.loaded = !0,
        r.exports
    }
    var i = {};
    return e.m = t,
    e.c = i,
    e.p = "",
    e(0)
}
)([(function(t, e, i) {
    var n = i(1)
      , r = i(10)
      , a = i(6)
      , o = n.getMetaInfo(window);
    window.PWT = window.PWT || {},
    window.PWT.bidMap = window.PWT.bidMap || {},
    window.PWT.bidIdMap = window.PWT.bidIdMap || {},
    window.PWT.isIframe = window.PWT.isIframe || o.isInIframe,
    window.PWT.protocol = window.PWT.protocol || o.protocol,
    window.PWT.secure = window.PWT.secure || o.secure,
    window.PWT.pageURL = window.PWT.pageURL || o.pageURL,
    window.PWT.refURL = window.PWT.refURL || o.refURL,
    window.PWT.isSafeFrame = window.PWT.isSafeFrame || !1,
    window.PWT.safeFrameMessageListenerAdded = window.PWT.safeFrameMessageListenerAdded || !1,
    window.PWT.udpv = window.PWT.udpv || n.findQueryParamInURL(o.isIframe ? o.refURL : o.pageURL, "pwtv"),
    n.findQueryParamInURL(o.isIframe ? o.refURL : o.pageURL, "pwtc") && n.enableDebugLog(),
    n.findQueryParamInURL(o.isIframe ? o.refURL : o.pageURL, "pwtvc") && n.enableVisualDebugLog(),
    window.PWT.displayCreative = function(t, e) {
        n.log("In displayCreative for: " + e),
        a.displayCreative(t, e)
    }
    ,
    window.PWT.displayPMPCreative = function(t, e, i) {
        n.log("In displayPMPCreative for: " + e);
        var r = n.getBididForPMP(e, i);
        r && a.displayCreative(t, r)
    }
    ,
    window.PWT.sfDisplayCreative = function(t, e) {
        n.log("In sfDisplayCreative for: " + e),
        this.isSafeFrame = !0,
        window.parent.postMessage(JSON.stringify({
            pwt_type: "1",
            pwt_bidID: e,
            pwt_origin: window.location.protocol + "//" + window.location.hostname
        }), "*")
    }
    ,
    window.PWT.sfDisplayPMPCreative = function(t, e, i) {
        n.log("In sfDisplayPMPCreative for: " + e),
        this.isSafeFrame = !0,
        window.parent.postMessage(JSON.stringify({
            pwt_type: "1",
            pwt_bidID: n.getBididForPMP(e, i),
            pwt_origin: window.location.protocol + "//" + window.location.hostname
        }), "*")
    }
    ,
    window.OWT = {
        notifyCount: 0,
        externalBidderStatuses: {}
    },
    window.OWT.registerExternalBidders = function(t) {
        return window.OWT.notifyCount++,
        n.forEachOnArray(t, (function(t, e) {
            n.log("registerExternalBidders: " + e),
            window.OWT.externalBidderStatuses[e] = {
                id: window.OWT.notifyCount,
                status: !1
            }
        }
        )),
        window.OWT.notifyCount
    }
    ,
    window.OWT.notifyExternalBiddingComplete = function(t) {
        n.forEachOnObject(window.OWT.externalBidderStatuses, (function(e, i) {
            i && i.id === t && (n.log("notify externalBidding complete: " + e),
            window.OWT.externalBidderStatuses[e] = {
                id: i.id,
                status: !0
            })
        }
        ))
    }
    ,
    r.init(window)
}
), (function(t, e, i) {
    function n(t, e) {
        return g.call(t) === "[object " + e + "]"
    }
    var r = i(2)
      , a = i(3)
      , o = i(6)
      , d = !1;
    e.debugLogIsEnabled = d;
    var s = !1;
    e.visualDebugLogIsEnabled = s;
    var p = "Array"
      , u = "String"
      , l = "Function"
      , c = "Number"
      , g = Object.prototype.toString
      , f = this;
    e.isA = n,
    e.isFunction = function(t) {
        return f.isA(t, l)
    }
    ,
    e.isString = function(t) {
        return f.isA(t, u)
    }
    ,
    e.isArray = function(t) {
        return f.isA(t, p)
    }
    ,
    e.isNumber = function(t) {
        return f.isA(t, c)
    }
    ,
    e.isObject = function(t) {
        return "object" == typeof t && null !== t
    }
    ,
    e.isOwnProperty = function(t, e) {
        return t.hasOwnProperty ? t.hasOwnProperty(e) : !1
    }
    ,
    e.isUndefined = function(t) {
        return "undefined" == typeof t
    }
    ,
    e.enableDebugLog = function() {
        f.debugLogIsEnabled = !0
    }
    ,
    e.isDebugLogEnabled = function() {
        return f.debugLogIsEnabled
    }
    ,
    e.enableVisualDebugLog = function() {
        f.debugLogIsEnabled = !0,
        f.visualDebugLogIsEnabled = !0
    }
    ;
    var h = "[OpenWrap] : ";
    e.log = function(t) {
        f.debugLogIsEnabled && console && this.isFunction(console.log) && (this.isString(t) ? console.log((new Date).getTime() + " : " + h + t) : console.log(t))
    }
    ,
    e.getCurrentTimestampInMs = function() {
        var t = new window.Date;
        return t.getTime()
    }
    ,
    e.getCurrentTimestamp = function() {
        var t = new Date;
        return Math.round(t.getTime() / 1e3)
    }
    ;
    var I = (function() {
        var t = 0;
        return function() {
            return t++,
            t
        }
    }
    )();
    e.utilGetIncrementalInteger = I,
    e.getUniqueIdentifierStr = function() {
        return I() + window.Math.random().toString(16).substr(2)
    }
    ,
    e.copyKeyValueObject = function(t, e) {
        if (f.isObject(t) && f.isObject(e)) {
            var i = f;
            f.forEachOnObject(e, (function(n, r) {
                if (e[n] = i.isArray(r) ? r : [r],
                i.isOwnProperty(t, n)) {
                    if (!f.isArray(t[n])) {
                        var a = t[n];
                        t[n] = [a]
                    }
                    t[n].push(r)
                } else
                    t[n] = [r]
            }
            ))
        }
    }
    ,
    e.getIncrementalInteger = (function() {
        var t = 0;
        return function() {
            return t++,
            t
        }
    }
    )(),
    e.generateUUID = function() {
        var t = (new window.Date).getTime()
          , e = window.decodeURIComponent(this.pageURL).toLowerCase().replace(/[^a-z,A-Z,0-9]/gi, "")
          , i = e.length
          , n = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx-zzzzz".replace(/[xyz]/g, (function(n) {
            var r = (t + 16 * Math.random()) % 16 | 0;
            t = Math.floor(t / 16);
            var a;
            switch (n) {
            case "x":
                a = r;
                break;
            case "z":
                a = e[Math.floor(Math.random() * i)];
                break;
            default:
                a = 3 & r | 8
            }
            return a.toString(16)
        }
        ));
        return n
    }
    ;
    var m = "g"
      , w = new RegExp(r.MACROS.WIDTH,m)
      , E = new RegExp(r.MACROS.HEIGHT,m)
      , S = new RegExp(r.MACROS.AD_UNIT_ID,m)
      , D = new RegExp(r.MACROS.AD_UNIT_INDEX,m)
      , A = new RegExp(r.MACROS.INTEGER,m)
      , T = new RegExp(r.MACROS.DIV,m);
    e.generateSlotNamesFromPattern = function(t, e) {
        var i, n, r, a, o = [], d = {};
        if (f.isObject(t) && f.isFunction(t.getSizes) && (n = t.getSizes(),
        r = n.length,
        r > 0))
            for (a = 0; r > a; a++)
                n[a][0] && n[a][1] && (i = e,
                i = i.replace(S, t.getAdUnitID()).replace(w, n[a][0]).replace(E, n[a][1]).replace(D, t.getAdUnitIndex()).replace(A, f.getIncrementalInteger()).replace(T, t.getDivID()),
                f.isOwnProperty(d, i) || (d[i] = "",
                o.push(i)));
        return o
    }
    ,
    e.checkMandatoryParams = function(t, e, i) {
        var n = !1
          , r = !0;
        if (!t || !f.isObject(t) || f.isArray(t))
            return f.log(i + "provided object is invalid."),
            n;
        if (!f.isArray(e))
            return f.log(i + "provided keys must be in an array."),
            n;
        var a = e.length;
        if (0 == a)
            return r;
        for (var o = 0; a > o; o++)
            if (!f.isOwnProperty(t, e[o]))
                return f.log(i + ": " + e[o] + ", mandatory parameter not present."),
                n;
        return r
    }
    ,
    e.forEachGeneratedKey = function(t, e, i, n, d, s, p, u, l, c) {
        var g, h, I, m, w, E = s.length;
        if (E > 0 && p.length > 3)
            for (w = p.indexOf(r.MACROS.WIDTH) >= 0 && p.indexOf(r.MACROS.HEIGHT) >= 0,
            g = 0; E > g; g++) {
                var S = s[g];
                for (I = f.generateSlotNamesFromPattern(S, p),
                m = I.length,
                h = 0; m > h; h++) {
                    var D = I[h]
                      , A = null
                      , T = !1
                      , _ = S.getSizes();
                    if (null == u ? T = !0 : (A = u[D],
                    A ? f.checkMandatoryParams(A, d, t) ? T = !0 : f.log(t + ": " + D + r.MESSAGES.M9) : f.log(t + ": " + D + r.MESSAGES.M8)),
                    T) {
                        if (1 == c) {
                            var b = a.createBid(t, D);
                            b.setDefaultBidStatus(1).setReceivedTime(f.getCurrentTimestampInMs()),
                            o.setBidFromBidder(S.getDivID(), b)
                        }
                        l(t, e, i, n, D, w, S, u ? u[D] : null, _[h][0], _[h][1])
                    }
                }
            }
    }
    ,
    e.resizeWindow = function(t, e, i, n) {
        if (i && e)
            try {
                var r = t.defaultView.frameElement;
                if (n) {
                    var a = document.getElementById(n)
                      , o = a.querySelector("div");
                    o.style.height = "" + i + "px",
                    o.style.width = "" + e + "px",
                    r = a.querySelector("iframe")
                }
                r.width = "" + e,
                r.height = "" + i,
                r.style.width = "" + e + "px",
                r.style.height = "" + i + "px"
            } catch (d) {
                f.log("Creative-Resize; Error in resizing creative")
            }
    }
    ,
    e.writeIframe = function(t, e, i, n, r) {
        t.write('<iframe frameborder="0" allowtransparency="true" marginheight="0" marginwidth="0" scrolling="no" width="' + i + '" hspace="0" vspace="0" height="' + n + '"' + (r ? ' style="' + r + '"' : "") + ' src="' + e + '"></iframe>')
    }
    ,
    e.displayCreative = function(t, e) {
        f.resizeWindow(t, e.width, e.height),
        e.adHtml ? t.write(e.adHtml) : e.adUrl ? f.writeIframe(t, e.adUrl, e.width, e.height, "") : (f.log("creative details are not found"),
        f.log(e))
    }
    ,
    e.getScreenWidth = function(t) {
        var e = -1;
        return t.innerHeight ? e = t.innerWidth : t.document && t.document.documentElement && t.document.documentElement.clientWidth ? e = t.document.documentElement.clientWidth : t.document.body && (e = t.document.body.clientWidth),
        e
    }
    ,
    e.getScreenHeight = function(t) {
        var e = -1;
        return t.innerHeight ? e = t.innerHeight : t.document && t.document.documentElement && t.document.documentElement.clientHeight ? e = t.document.documentElement.clientHeight : t.document.body && (e = t.document.body.clientHeight),
        e
    }
    ,
    e.forEachOnObject = function(t, e) {
        if (f.isObject(t) && f.isFunction(e))
            for (var i in t)
                f.isOwnProperty(t, i) && e(i, t[i])
    }
    ,
    e.forEachOnArray = function(t, e) {
        if (f.isArray(t) && f.isFunction(e))
            for (var i = 0, n = t.length; n > i; i++)
                e(i, t[i])
    }
    ,
    e.trim = function(t) {
        return f.isString(t) ? t.replace(/^\s+/g, "").replace(/\s+$/g, "") : t
    }
    ,
    e.getTopFrameOfSameDomain = function(t) {
        try {
            if (t.parent.document != t.document)
                return f.getTopFrameOfSameDomain(t.parent)
        } catch (e) {}
        return t
    }
    ,
    e.metaInfo = {},
    e.getMetaInfo = function(t) {
        var e, i = {}, n = 512;
        i.pageURL = "",
        i.refURL = "",
        i.protocol = "https://",
        i.secure = 1,
        i.isInIframe = f.isIframe(t);
        try {
            e = f.getTopFrameOfSameDomain(t),
            i.refURL = (e.refurl || e.document.referrer || "").substr(0, n),
            i.pageURL = (e !== window.top && "" != e.document.referrer ? e.document.referrer : e.location.href).substr(0, n),
            i.protocol = (function(t) {
                return "http:" === t.location.protocol ? (i.secure = 0,
                "http://") : (i.secure = 1,
                "https://")
            }
            )(e)
        } catch (r) {}
        return f.metaInfo = i,
        i
    }
    ,
    e.isIframe = function(t) {
        try {
            return t.self !== t.top
        } catch (e) {
            return !1
        }
    }
    ,
    e.findInString = function(t, e) {
        return t.indexOf(e) >= 0
    }
    ,
    e.findQueryParamInURL = function(t, e) {
        return f.isOwnProperty(f.parseQueryParams(t), e)
    }
    ,
    e.parseQueryParams = function(t) {
        var e = f.createDocElement(window, "a");
        e.href = t;
        var i = {};
        if (e.search) {
            var n = e.search.replace("?", "");
            n = n.split("&"),
            f.forEachOnArray(n, (function(t, e) {
                var e = e.split("=")
                  , n = e[0] || ""
                  , r = e[1] || "";
                i[n] = r
            }
            ))
        }
        return i
    }
    ,
    e.createDocElement = function(t, e) {
        return t.document.createElement(e)
    }
    ,
    e.addHookOnFunction = function(t, e, i, n) {
        var r = t;
        if (t = e ? t.__proto__ : t,
        f.isObject(t) && f.isFunction(t[i])) {
            var a = t[i];
            t[i] = n(r, a)
        } else
            f.log("in assignNewDefination: oldReference is not a function")
    }
    ,
    e.getBididForPMP = function(t, e) {
        t = t.split(",");
        var i = t.length
          , n = e.length
          , a = ""
          , o = "";
        if (0 == i)
            return this.log("Error: Unable to find bidID as values array is empty."),
            void 0;
        for (var d = 0; n > d; d++) {
            for (var s = 0; i > s; s++)
                if (t[s].indexOf(e[d]) >= 0) {
                    a = t[s];
                    break
                }
            if ("" != a)
                break
        }
        "" == a ? (a = t[0],
        this.log("No PMP-Deal was found matching PriorityArray, So Selecting first PMP-Deal: " + a)) : this.log("Selecting PMP-Deal: " + a);
        var p = a.split(r.COMMON.DEAL_KEY_VALUE_SEPARATOR);
        return 3 == p.length && (o = p[2]),
        o ? o : (this.log("Error: bidID not found in PMP-Deal: " + a),
        void 0)
    }
    ,
    e.createInvisibleIframe = function() {
        var t = f.createDocElement(window, "iframe");
        return t.id = f.getUniqueIdentifierStr(),
        t.height = 0,
        t.width = 0,
        t.border = "0px",
        t.hspace = "0",
        t.vspace = "0",
        t.marginWidth = "0",
        t.marginHeight = "0",
        t.style.border = "0",
        t.scrolling = "no",
        t.frameBorder = "0",
        t.src = "about:self",
        t.style = "display:none",
        t
    }
    ,
    e.addMessageEventListener = function(t, e) {
        return "function" != typeof e ? (f.log("EventHandler should be a function"),
        !1) : (t.addEventListener ? t.addEventListener("message", e, !1) : t.attachEvent("onmessage", e),
        !0)
    }
    ,
    e.safeFrameCommunicationProtocol = function(t) {
        try {
            if (msgData = window.JSON.parse(t.data),
            !msgData.pwt_type)
                return;
            switch (window.parseInt(msgData.pwt_type)) {
            case 1:
                if (window.PWT.isSafeFrame)
                    return;
                var e = o.getBidById(msgData.pwt_bidID);
                if (e) {
                    var i = e.bid
                      , n = i.getAdapterID()
                      , r = e.slotid
                      , a = {
                        pwt_type: 2,
                        pwt_bid: i
                    };
                    f.vLogInfo(r, {
                        type: "disp",
                        adapter: n
                    }),
                    o.executeMonetizationPixel(r, i),
                    f.resizeWindow(window.document, i.width, i.height, r),
                    t.source.postMessage(window.JSON.stringify(a), msgData.pwt_origin)
                }
                break;
            case 2:
                if (!window.PWT.isSafeFrame)
                    return;
                if (msgData.pwt_bid) {
                    var i = msgData.pwt_bid;
                    if (i.adHtml)
                        try {
                            var d = f.createInvisibleIframe(window.document);
                            if (!d)
                                throw {
                                    message: "Failed to create invisible frame.",
                                    name: ""
                                };
                            if (d.setAttribute("width", i.width),
                            d.setAttribute("height", i.height),
                            d.style = "",
                            window.document.body.appendChild(d),
                            !d.contentWindow)
                                throw {
                                    message: "Unable to access frame window.",
                                    name: ""
                                };
                            var s = d.contentWindow.document;
                            if (!s)
                                throw {
                                    message: "Unable to access frame window document.",
                                    name: ""
                                };
                            var p = '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"><html><head><base target="_top" /><script>inDapIF=true;</script></head>';
                            p += "<body>",
                            p += "<script>var $sf = window.parent.$sf;</script>",
                            p += "<script>setInterval(function(){try{var fr = window.document.defaultView.frameElement;fr.width = window.parent.document.defaultView.innerWidth;fr.height = window.parent.document.defaultView.innerHeight;}catch(e){}}, 200);</script>",
                            p += i.adHtml,
                            p += "</body></html>",
                            s.write(p),
                            s.close()
                        } catch (u) {
                            f.log("Error in rendering creative in safe frame."),
                            f.log(u),
                            f.log("Rendering synchronously."),
                            f.displayCreative(window.document, msgData.pwt_bid)
                        }
                    else
                        i.adUrl ? f.writeIframe(window.document, i.adUrl, i.width, i.height, "") : (f.log("creative details are not found"),
                        f.log(i))
                }
            }
        } catch (u) {}
    }
    ,
    e.addMessageEventListenerForSafeFrame = function(t) {
        f.addMessageEventListener(t, f.safeFrameCommunicationProtocol)
    }
    ,
    e.getElementLocation = function(t) {
        var e, i = 0, n = 0;
        if (f.isFunction(t.getBoundingClientRect))
            e = t.getBoundingClientRect(),
            i = Math.floor(e.left),
            n = Math.floor(e.top);
        else
            for (; t; )
                i += t.offsetLeft,
                n += t.offsetTop,
                t = t.offsetParent;
        return {
            x: i,
            y: n
        }
    }
    ,
    e.createVLogInfoPanel = function(t, e) {
        var i, n, r, a = window.document;
        if (f.visualDebugLogIsEnabled && (i = a.getElementById(t),
        i && e.length && e[0][0] && e[0][1] && (r = t + "-pwtc-info",
        !f.isUndefined(a.getElementById(r))))) {
            var o = f.getElementLocation(i);
            n = a.createElement("div"),
            n.id = r,
            n.style = "position: absolute; /*top: " + o.y + "px;*/ left: " + o.x + "px; width: " + e[0][0] + "px; height: " + e[0][1] + "px; border: 1px solid rgb(255, 204, 52); padding-left: 11px; background: rgb(247, 248, 224) none repeat scroll 0% 0%; overflow: auto; z-index: 9999997; visibility: hidden;opacity:0.9;font-size:13px;font-family:monospace;";
            var d = a.createElement("img");
            d.src = f.metaInfo.protocol + "ads.pubmatic.com/AdServer/js/pwt/close.png",
            d.style = "cursor:pointer; position: absolute; top: 2px; left: " + (o.x + e[0][0] - 16 - 15) + "px; z-index: 9999998;",
            d.title = "close",
            d.onclick = function() {
                n.style.display = "none"
            }
            ,
            n.appendChild(d),
            n.appendChild(a.createElement("br"));
            for (var s = "Slot: " + t + " | ", p = 0; p < e.length; p++)
                s += (0 != p ? ", " : "") + e[p][0] + "x" + e[p][1];
            n.appendChild(a.createTextNode(s)),
            n.appendChild(a.createElement("br")),
            i.parentNode.insertBefore(n, i)
        }
    }
    ,
    e.realignVLogInfoPanel = function(t) {
        var e, i, n, r = window.document;
        if (f.visualDebugLogIsEnabled && (e = r.getElementById(t),
        e && (n = t + "-pwtc-info",
        i = r.getElementById(n)))) {
            var a = f.getElementLocation(e);
            i.style.visibility = "visible",
            i.style.left = a.x + "px",
            i.style.height = e.clientHeight + "px"
        }
    }
    ,
    e.vLogInfo = function(t, e) {
        var i, n, r = window.document;
        if (f.visualDebugLogIsEnabled) {
            var a = t + "-pwtc-info";
            if (i = r.getElementById(a)) {
                switch (e.type) {
                case "bid":
                    var o = e.latency
                      , d = e.bidDetails;
                    0 > o && (o = 0),
                    n = "Bid: " + e.bidder + (e.s2s ? "(s2s)" : "") + ": " + d.getNetEcpm() + "(" + d.getGrossEcpm() + "): " + o + "ms",
                    d.getPostTimeoutStatus() && (n += ": POST-TIMEOUT");
                    break;
                case "win-bid":
                    var d = e.bidDetails;
                    n = "Winning Bid: " + d.getAdapterID() + ": " + d.getNetEcpm();
                    break;
                case "win-bid-fail":
                    n = "There are no bids from PWT";
                    break;
                case "hr":
                    n = "----------------------";
                    break;
                case "disp":
                    n = "Displaying creative from " + e.adapter
                }
                i.appendChild(r.createTextNode(n)),
                i.appendChild(r.createElement("br"))
            }
        }
    }
    ,
    e.getExternalBidderStatus = function(t) {
        var e = !0;
        return f.forEachOnArray(t, (function(t, i) {
            e = window.OWT.externalBidderStatuses[i] ? e && window.OWT.externalBidderStatuses[i].status : e
        }
        )),
        e
    }
    ,
    e.resetExternalBidderStatus = function(t) {
        f.forEachOnArray(t, (function(t, e) {
            f.log("resetExternalBidderStatus: " + e),
            window.OWT.externalBidderStatuses[e] = void 0
        }
        ))
    }
}
), (function(t, e) {
    e.COMMON = {
        BID_PRECISION: 2,
        DEAL_KEY_FIRST_PART: "pwtdeal_",
        DEAL_KEY_VALUE_SEPARATOR: "_-_",
        PREBID_PREFIX: "PB_",
        CONFIG: "config",
        DIV_ID: "divID",
        PARAMS: "params",
        SIZES: "sizes",
        HEIGHT: "height",
        WIDTH: "width",
        SLOTS: "slots",
        KEY_GENERATION_PATTERN_VALUE: "kgpv",
        KEY_VALUE_PAIRS: "kvp",
        IMPRESSION_ID: "iid",
        PARENT_ADAPTER_PREBID: "prebid"
    },
    e.CONFIG = {
        GLOBAL: "global",
        ADAPTERS: "adapters",
        COMMON: "pwt",
        TIMEOUT: "t",
        KEY_GENERATION_PATTERN: "kgp",
        KEY_LOOKUP_MAP: "klm",
        SERVER_SIDE_KEY: "sk",
        PUBLISHER_ID: "pubid",
        PROFILE_ID: "pid",
        PROFILE_VERSION_ID: "pdvid",
        LOGGER_URL: "dataURL",
        TRACKER_URL: "winURL",
        REV_SHARE: "rev_share",
        THROTTLE: "throttle",
        BID_PASS_THROUGH: "pt",
        GLOBAL_KEY_VALUE: "gkv",
        MASK_BIDS: "maksBids",
        META_DATA_PATTERN: "metaDataPattern",
        SEND_ALL_BIDS: "sendAllBids",
        SERVER_SIDE_ENABLED: "serverSideEnabled",
        GDPR_CONSENT: "gdpr",
        CONSENT_STRING: "cns",
        GDPR_CMPAPI: "cmpApi",
        GDPR_TIMEOUT: "gdprTimeout",
        GDPR_AWC: "awc",
        DEFAULT_GDPR_CMPAPI: "iab",
        DEFAULT_GDPR_TIMEOUT: 1e4,
        DEFAULT_GDPR_AWC: "0",
        DEFAULT_GDPR_CONSENT: "0",
        DISABLE_AJAX_TIMEOUT: "disableAjaxTimeout"
    },
    e.METADATA_MACROS = {
        WIDTH: "_W_",
        HEIGHT: "_H_",
        PARTNER: "_P_",
        GROSS_ECPM: "_GE_",
        NET_ECPM: "_NE_",
        BID_COUNT: "_BC_",
        PARTNER_COUNT: "_PC_"
    },
    e.MACROS = {
        WIDTH: "_W_",
        HEIGHT: "_H_",
        AD_UNIT_ID: "_AU_",
        AD_UNIT_INDEX: "_AUI_",
        INTEGER: "_I_",
        DIV: "_DIV_"
    },
    e.SLOT_STATUS = {
        CREATED: 0,
        PARTNERS_CALLED: 1,
        TARGETING_ADDED: 2,
        DISPLAYED: 3
    },
    e.WRAPPER_TARGETING_KEYS = {
        BID_ID: "pwtsid",
        BID_STATUS: "pwtbst",
        BID_ECPM: "pwtecp",
        BID_DEAL_ID: "pwtdid",
        BID_ADAPTER_ID: "pwtpid",
        BID_SIZE: "pwtsz",
        PUBLISHER_ID: "pwtpubid",
        PROFILE_ID: "pwtprofid",
        PROFILE_VERSION_ID: "pwtverid",
        META_DATA: "pwtm"
    },
    e.IGNORE_PREBID_KEYS = {
        hb_bidder: 1,
        hb_adid: 1,
        hb_pb: 1,
        hb_size: 1,
        hb_deal: 1
    },
    e.LOGGER_PIXEL_PARAMS = {
        TIMESTAMP: "tst",
        PAGE_URL: "purl",
        TIMEOUT: "to"
    },
    e.MESSAGES = {
        M1: ": In fetchbids.",
        M2: ": Throttled.",
        M3: ": adapter must implement the fetchBids() function.",
        M4: "BidManager: entry ",
        M5: ": Callback.",
        M6: "bidAlreadExists : ",
        M7: ": Exiting from fetchBids.",
        M8: ". Config not found, ignored.",
        M9: ". Config ignored.",
        M10: "Bid is rejected as ecpm is NULL.",
        M11: "Bid is rejected as ecpm is NaN: ",
        M12: "Existing bid ecpm: ",
        M13: ", is lower than new bid ecpm ",
        M14: ", so we are replacing bid.",
        M15: ", is greater than new bid ecpm ",
        M16: ", so we are not replacing bid.",
        M17: "Post timeout bid, ignored.",
        M18: "Bid is selected.",
        M19: ": Found winning adapterID: ",
        M20: "Bid is rejected as ecpm is empty string.",
        M21: ": error in respose handler.",
        M22: "Bid is rejected as ecpm is <= 0.",
        M23: "Existing bid is default-bid with zero ecpm, thus replacing it with the new bid from partner.",
        M24: "Passsed argument is not a bidAdaptor",
        M25: "Bid details not found for bidID: "
    }
}
), (function(t, e, i) {
    function n(t, e) {
        this.adapterID = t,
        this.kgpv = e,
        this.bidID = o.getUniqueIdentifierStr(),
        this.grossEcpm = 0,
        this.netEcpm = 0,
        this.defaultBid = 0,
        this.adHtml = "",
        this.adUrl = "",
        this.height = 0,
        this.width = 0,
        this.creativeID = "",
        this.keyValuePairs = {},
        this.isPostTimeout = !1,
        this.receivedTime = 0,
        this.dealID = "",
        this.dealChannel = "",
        this.isWinningBid = !1,
        this.status = 0
    }
    var r = i(4)
      , a = i(2)
      , o = i(1);
    n.prototype.getAdapterID = function() {
        return this.adapterID
    }
    ,
    n.prototype.getBidID = function() {
        return this.bidID
    }
    ,
    n.prototype.setGrossEcpm = function(t) {
        return null === t ? (o.log(a.MESSAGES.M10),
        o.log(this),
        this) : o.isString(t) && (t = t.replace(/\s/g, ""),
        0 === t.length) ? (o.log(a.MESSAGES.M20),
        o.log(this),
        this) : window.isNaN(t) ? (o.log(a.MESSAGES.M11 + t),
        o.log(this),
        this) : (t = window.parseFloat(t.toFixed(a.COMMON.BID_PRECISION)),
        this.grossEcpm = t,
        this.netEcpm = window.parseFloat((this.grossEcpm * r.getAdapterRevShare(this.getAdapterID())).toFixed(a.COMMON.BID_PRECISION)),
        this)
    }
    ,
    n.prototype.getGrossEcpm = function() {
        return this.grossEcpm
    }
    ,
    n.prototype.getNetEcpm = function() {
        return this.netEcpm
    }
    ,
    n.prototype.setDefaultBidStatus = function(t) {
        return this.defaultBid = t,
        this
    }
    ,
    n.prototype.getDefaultBidStatus = function() {
        return this.defaultBid
    }
    ,
    n.prototype.setAdHtml = function(t) {
        return this.adHtml = t,
        this
    }
    ,
    n.prototype.getAdHtml = function() {
        return this.adHtml
    }
    ,
    n.prototype.setAdUrl = function(t) {
        return this.adUrl = t,
        this
    }
    ,
    n.prototype.getAdUrl = function() {
        return this.adUrl
    }
    ,
    n.prototype.setHeight = function(t) {
        return this.height = t,
        this
    }
    ,
    n.prototype.getHeight = function() {
        return this.height
    }
    ,
    n.prototype.setWidth = function(t) {
        return this.width = t,
        this
    }
    ,
    n.prototype.getWidth = function() {
        return this.width
    }
    ,
    n.prototype.getKGPV = function() {
        return this.kgpv
    }
    ,
    n.prototype.setKeyValuePair = function(t, e) {
        return this.keyValuePairs[t.substr(0, 20)] = e,
        this
    }
    ,
    n.prototype.getKeyValuePairs = function() {
        return this.keyValuePairs
    }
    ,
    n.prototype.setPostTimeoutStatus = function() {
        return this.isPostTimeout = !0,
        this
    }
    ,
    n.prototype.getPostTimeoutStatus = function() {
        return this.isPostTimeout
    }
    ,
    n.prototype.setReceivedTime = function(t) {
        return this.receivedTime = t,
        this
    }
    ,
    n.prototype.getReceivedTime = function() {
        return this.receivedTime
    }
    ,
    n.prototype.setDealID = function(t) {
        return t && (this.dealID = t,
        this.dealChannel = this.dealChannel || "PMP",
        this.setKeyValuePair(a.COMMON.DEAL_KEY_FIRST_PART + this.adapterID, this.dealChannel + a.COMMON.DEAL_KEY_VALUE_SEPARATOR + this.dealID + a.COMMON.DEAL_KEY_VALUE_SEPARATOR + this.bidID)),
        this
    }
    ,
    n.prototype.getDealID = function() {
        return this.dealID
    }
    ,
    n.prototype.setDealChannel = function(t) {
        return this.dealID && t && (this.dealChannel = t,
        this.setKeyValuePair(a.COMMON.DEAL_KEY_FIRST_PART + this.adapterID, this.dealChannel + a.COMMON.DEAL_KEY_VALUE_SEPARATOR + this.dealID + a.COMMON.DEAL_KEY_VALUE_SEPARATOR + this.bidID)),
        this
    }
    ,
    n.prototype.getDealChannel = function() {
        return this.dealChannel
    }
    ,
    n.prototype.setWinningBidStatus = function() {
        return this.isWinningBid = !0,
        this
    }
    ,
    n.prototype.getWinningBidStatus = function() {
        return this.isWinningBid
    }
    ,
    n.prototype.setStatus = function(t) {
        return this.status = t,
        this
    }
    ,
    n.prototype.getStatus = function() {
        return this.status
    }
    ,
    n.prototype.setSendAllBidsKeys = function() {
        this.setKeyValuePair(a.WRAPPER_TARGETING_KEYS.BID_ID + "_" + this.adapterID, this.bidID),
        this.setKeyValuePair(a.WRAPPER_TARGETING_KEYS.BID_STATUS + "_" + this.adapterID, this.getNetEcpm() > 0 ? 1 : 0),
        this.setKeyValuePair(a.WRAPPER_TARGETING_KEYS.BID_ECPM + "_" + this.adapterID, this.getNetEcpm().toFixed(a.COMMON.BID_PRECISION)),
        this.setKeyValuePair(a.WRAPPER_TARGETING_KEYS.BID_SIZE + "_" + this.adapterID, this.width + "x" + this.height)
    }
    ,
    t.exports.Bid = n,
    e.createBid = function(t, e) {
        return new n(t,e)
    }
}
), (function(t, e, i) {
    function n() {
        var t = a.COMMON.PARENT_ADAPTER_PREBID;
        if (!o.isOwnProperty(r.adapters, t)) {
            var e = {};
            e[a.CONFIG.REV_SHARE] = "0.0",
            e[a.CONFIG.THROTTLE] = "100",
            e[a.CONFIG.KEY_GENERATION_PATTERN] = "_DIV_",
            e[a.CONFIG.KEY_LOOKUP_MAP] = {},
            r.adapters[t] = e
        }
    }
    var r = i(5)
      , a = i(2)
      , o = i(1)
      , d = null;
    d = this,
    e.getPublisherId = function() {
        return o.trim(r.pwt.pubid) || "0"
    }
    ,
    e.getMataDataPattern = function() {
        return o.isString(r[a.CONFIG.COMMON][a.CONFIG.META_DATA_PATTERN]) ? r[a.CONFIG.COMMON][a.CONFIG.META_DATA_PATTERN] : null
    }
    ,
    e.getSendAllBidsStatus = function() {
        return window.parseInt(r[a.CONFIG.COMMON][a.CONFIG.SEND_ALL_BIDS]) || 0
    }
    ,
    e.getTimeout = function() {
        return window.parseInt(r.pwt.t) || 1e3
    }
    ,
    e.getDisableAjaxTimeout = function() {
        var t = r.pwt;
        return o.isOwnProperty(t, a.CONFIG.DISABLE_AJAX_TIMEOUT) ? 1 == r.pwt.disableAjaxTimeout : !0
    }
    ,
    e.getAdapterRevShare = function(t) {
        var e = r.adapters;
        return o.isOwnProperty(e[t], a.CONFIG.REV_SHARE) ? 1 - window.parseFloat(e[t][a.CONFIG.REV_SHARE]) / 100 : 1
    }
    ,
    e.getAdapterThrottle = function(t) {
        var e = r.adapters;
        return o.isOwnProperty(e[t], a.CONFIG.THROTTLE) ? 100 - window.parseFloat(e[t][a.CONFIG.THROTTLE]) : 0
    }
    ,
    e.isServerSideAdapter = function(t) {
        var e = r.adapters;
        return o.isOwnProperty(e[t], a.CONFIG.SERVER_SIDE_ENABLED) ? 1 === window.parseInt(e[t][a.CONFIG.SERVER_SIDE_ENABLED]) : !1
    }
    ,
    e.getAdapterMaskBidsStatus = function(t) {
        var e = r.adapters
          , i = {
            audienceNetwork: 1
        };
        return o.isOwnProperty(i, t) ? i[t] : o.isOwnProperty(e[t], a.CONFIG.MASK_BIDS) ? window.parseInt(e[t][a.CONFIG.MASK_BIDS]) || 0 : 0
    }
    ,
    e.getBidPassThroughStatus = function(t) {
        var e = r.adapters;
        return o.isOwnProperty(e[t], a.CONFIG.BID_PASS_THROUGH) ? window.parseInt(e[t][a.CONFIG.BID_PASS_THROUGH]) : 0
    }
    ,
    e.getProfileID = function() {
        return o.trim(r.pwt[a.CONFIG.PROFILE_ID]) || "0"
    }
    ,
    e.getProfileDisplayVersionID = function() {
        return o.trim(r.pwt[a.CONFIG.PROFILE_VERSION_ID]) || "0"
    }
    ,
    e.getAnalyticsPixelURL = function() {
        return r.pwt[a.CONFIG.LOGGER_URL] || !1
    }
    ,
    e.getMonetizationPixelURL = function() {
        return r.pwt[a.CONFIG.TRACKER_URL] || !1
    }
    ,
    e.forEachAdapter = function(t) {
        o.forEachOnObject(r.adapters, t)
    }
    ,
    e.getGdpr = function() {
        var t = r[a.CONFIG.COMMON][a.CONFIG.GDPR_CONSENT] || a.CONFIG.DEFAULT_GDPR_CONSENT;
        return "1" === t
    }
    ,
    e.getCmpApi = function() {
        return r[a.CONFIG.COMMON][a.CONFIG.GDPR_CMPAPI] || a.CONFIG.DEFAULT_GDPR_CMPAPI
    }
    ,
    e.getGdprTimeout = function() {
        var t = r[a.CONFIG.COMMON][a.CONFIG.GDPR_TIMEOUT];
        return t ? window.parseInt(t) : a.CONFIG.DEFAULT_GDPR_TIMEOUT
    }
    ,
    e.getAwc = function() {
        var t = r[a.CONFIG.COMMON][a.CONFIG.GDPR_AWC] || a.CONFIG.DEFAULT_GDPR_AWC;
        return "1" === t
    }
    ,
    e.addPrebidAdapter = n,
    e.initConfig = function() {
        d.addPrebidAdapter();
        var t = {};
        o.forEachOnObject(a.CONFIG, (function(e, i) {
            t[i] = ""
        }
        )),
        o.forEachOnObject(r.adapters, (function(e, i) {
            var n = {};
            o.forEachOnObject(i, (function(e, i) {
                o.isOwnProperty(t, e) || (n[e] = i)
            }
            )),
            o.forEachOnObject(i[a.CONFIG.KEY_LOOKUP_MAP], (function(t, e) {
                o.forEachOnObject(n, (function(t, i) {
                    e[t] = i
                }
                ))
            }
            ))
        }
        ))
    }
}
), (function(t, e) {
    e.pwt = {
        t: "2000",
        pid: "878",
        gcv: "61",
        pdvid: "27",
        pubid: "156850",
        dataURL: "t.pubmatic.com/wl?",
        winURL: "t.pubmatic.com/wt?",
        metaDataPattern: 0,
        sendAllBids: "1",
        adserver: "DFP",
        gdpr: "0",
        cmp: 0,
        gdprTimeout: 0,
        awc: 0,
        platform: "display"
    },
    e.adapters = {
        pubmatic: {
            publisherId: "156850",
            rev_share: "0.0",
            timeout: "2000",
            throttle: "100",
            pt: 0,
            serverSideEnabled: "0",
            amp: 0,
            kgp: "_DIV_@_W_x_H_",
            sk: "true"
        },
        districtm: {
            rev_share: "0.0",
            timeout: "2000",
            throttle: "100",
            serverSideEnabled: "0",
            amp: 0,
            kgp: "_DIV_@_W_x_H_",
            klm: {
                "dfp-ad-belowcontent@728x90": {
                    placementId: "12538782"
                },
                "dfp-ad-bottom@728x90": {
                    placementId: "12538792"
                },
                "dfp-ad-native@300x250": {
                    placementId: "12538786"
                },
                "dfp-ad-native@300x600": {
                    placementId: "12538786"
                },
                "dfp-ad-right1@300x1050": {
                    placementId: "12538789"
                },
                "dfp-ad-right1@300x250": {
                    placementId: "12538789"
                },
                "dfp-ad-right1@300x600": {
                    placementId: "12538789"
                },
                "dfp-ad-right2@300x250": {
                    placementId: "12538797"
                },
                "dfp-ad-right2@300x600": {
                    placementId: "12538797"
                },
                "dfp-ad-right3@160x600": {
                    placementId: "12538802"
                },
                "dfp-ad-right3@300x250": {
                    placementId: "12538802"
                },
                "dfp-ad-right3@300x600": {
                    placementId: "12538802"
                },
                "dfp-ad-right4@160x600": {
                    placementId: "12538781"
                },
                "dfp-ad-right4@300x250": {
                    placementId: "12538781"
                },
                "dfp-ad-right4@300x600": {
                    placementId: "12538781"
                },
                "dfp-ad-top@728x90": {
                    placementId: "12538784"
                },
                "dfp-ad-top@970x250": {
                    placementId: "12538784"
                },
                "dfp-ad-top@970x90": {
                    placementId: "12538784"
                }
            }
        },
        conversant: {
            rev_share: "0.0",
            timeout: "2000",
            throttle: "100",
            kgp: "_DIV_@_W_x_H_",
            klm: {
                "dfp-ad-belowcontent@728x90": {
                    site_id: "120335"
                },
                "dfp-ad-bottom@728x90": {
                    site_id: "120334"
                },
                "dfp-ad-native@300x250": {
                    site_id: "120340"
                },
                "dfp-ad-native@300x600": {
                    site_id: "120345"
                },
                "dfp-ad-right1@300x250": {
                    site_id: "120336"
                },
                "dfp-ad-right1@300x600": {
                    site_id: "120341"
                },
                "dfp-ad-right2@300x250": {
                    site_id: "120337"
                },
                "dfp-ad-right2@300x600": {
                    site_id: "120342"
                },
                "dfp-ad-right3@160x600": {
                    site_id: "120346"
                },
                "dfp-ad-right3@300x250": {
                    site_id: "120338"
                },
                "dfp-ad-right3@300x600": {
                    site_id: "120343"
                },
                "dfp-ad-right4@160x600": {
                    site_id: "120347"
                },
                "dfp-ad-right4@300x250": {
                    site_id: "120339"
                },
                "dfp-ad-right4@300x600": {
                    site_id: "120344"
                },
                "dfp-ad-top@728x90": {
                    site_id: "120333"
                }
            }
        },
        rubicon: {
            accountId: "9619",
            rev_share: "0.0",
            timeout: "2000",
            throttle: "100",
            pt: "0",
            serverSideEnabled: "0",
            amp: 0,
            kgp: "_DIV_@_W_x_H_",
            klm: {
                "dfp-ad-belowcontent@728x90": {
                    zoneId: "385872",
                    siteId: "82236",
                    floor: "0"
                },
                "dfp-ad-bottom@728x90": {
                    zoneId: "385872",
                    siteId: "82236",
                    floor: "0"
                },
                "dfp-ad-native@300x250": {
                    zoneId: "385872",
                    siteId: "82236",
                    floor: "0"
                },
                "dfp-ad-native@300x600": {
                    zoneId: "385872",
                    siteId: "82236",
                    floor: "0"
                },
                "dfp-ad-right1@300x1050": {
                    zoneId: "385872",
                    siteId: "82236",
                    floor: "0"
                },
                "dfp-ad-right1@300x250": {
                    zoneId: "385872",
                    siteId: "82236",
                    floor: "0"
                },
                "dfp-ad-right1@300x600": {
                    zoneId: "385872",
                    siteId: "82236",
                    floor: "0"
                },
                "dfp-ad-right2@300x250": {
                    zoneId: "385872",
                    siteId: "82236",
                    floor: "0"
                },
                "dfp-ad-right2@300x600": {
                    zoneId: "385872",
                    siteId: "82236",
                    floor: "0"
                },
                "dfp-ad-right3@160x600": {
                    zoneId: "385872",
                    siteId: "82236",
                    floor: "0"
                },
                "dfp-ad-right3@300x250": {
                    zoneId: "385872",
                    siteId: "82236",
                    floor: "0"
                },
                "dfp-ad-right3@300x600": {
                    zoneId: "385872",
                    siteId: "82236",
                    floor: "0"
                },
                "dfp-ad-right4@160x600": {
                    zoneId: "385872",
                    siteId: "82236",
                    floor: "0"
                },
                "dfp-ad-right4@300x250": {
                    zoneId: "385872",
                    siteId: "82236",
                    floor: "0"
                },
                "dfp-ad-right4@300x600": {
                    zoneId: "385872",
                    siteId: "82236",
                    floor: "0"
                },
                "dfp-ad-top@728x90": {
                    zoneId: "385872",
                    siteId: "82236",
                    floor: "0"
                },
                "dfp-ad-top@970x250": {
                    zoneId: "385872",
                    siteId: "82236",
                    floor: "0"
                },
                "dfp-ad-top@970x90": {
                    zoneId: "385872",
                    siteId: "82236",
                    floor: "0"
                }
            }
        },
        indexExchange: {
            rev_share: "0.0",
            timeout: "2000",
            throttle: "100",
            pt: 0,
            serverSideEnabled: "0",
            kgp: "_DIV_@_W_x_H_",
            klm: {
                "dfp-ad-bottom@728x90": {
                    siteID: "281803",
                    id: "2"
                },
                "dfp-ad-right1@300x1050": {
                    siteID: "281807",
                    id: "6"
                },
                "dfp-ad-right1@300x250": {
                    siteID: "281807",
                    id: "6"
                },
                "dfp-ad-right1@300x600": {
                    siteID: "281807",
                    id: "6"
                },
                "dfp-ad-right1@336x280": {
                    siteID: "281807",
                    id: "6"
                },
                "dfp-ad-right2@300x250": {
                    siteID: "281808",
                    id: "7"
                },
                "dfp-ad-right2@300x600": {
                    siteID: "281808",
                    id: "7"
                },
                "dfp-ad-right2@336x280": {
                    siteID: "281808",
                    id: "7"
                },
                "dfp-ad-right3@160x600": {
                    siteID: "281809",
                    id: "8"
                },
                "dfp-ad-right3@300x250": {
                    siteID: "281809",
                    id: "8"
                },
                "dfp-ad-right3@300x600": {
                    siteID: "281809",
                    id: "8"
                },
                "dfp-ad-right3@336x280": {
                    siteID: "281809",
                    id: "8"
                },
                "dfp-ad-right4@160x600": {
                    siteID: "281810",
                    id: "9"
                },
                "dfp-ad-right4@300x250": {
                    siteID: "281810",
                    id: "9"
                },
                "dfp-ad-right4@300x600": {
                    siteID: "281810",
                    id: "9"
                },
                "dfp-ad-right4@336x280": {
                    siteID: "281810",
                    id: "9"
                },
                "dfp-ad-top@728x90": {
                    siteID: "281802",
                    id: "1"
                },
                "dfp-ad-top@970x250": {
                    siteID: "281802",
                    id: "1"
                },
                "dfp-ad-top@970x400": {
                    siteID: "281802",
                    id: "1"
                },
                "dfp-ad-top@970x66": {
                    siteID: "281802",
                    id: "1"
                },
                "dfp-ad-top@970x90": {
                    siteID: "281802",
                    id: "1"
                }
            }
        },
        brealtime: {
            rev_share: "0.0",
            timeout: "2000",
            throttle: "100",
            kgp: "_DIV_@_W_x_H_",
            klm: {
                "dfp-ad-belowcontent@728x90": {
                    placementId: "13901129"
                },
                "dfp-ad-bottom@728x90": {
                    placementId: "13901127"
                },
                "dfp-ad-native@300x250": {
                    placementId: "13901134"
                },
                "dfp-ad-right1@300x250": {
                    placementId: "13901130"
                },
                "dfp-ad-right2@300x250": {
                    placementId: "13901131"
                },
                "dfp-ad-right3@300x250": {
                    placementId: "13901132"
                },
                "dfp-ad-right4@300x250": {
                    placementId: "13901133"
                },
                "dfp-ad-top@728x90": {
                    placementId: "13901096"
                }
            }
        },
        sonobi: {
            rev_share: "0.0",
            timeout: "2000",
            throttle: "100",
            kgp: "_DIV_@_W_x_H_",
            klm: {
                "dfp-ad-belowcontent@728x90": {
                    placement_id: "4efbb2adbe20714b66ce"
                },
                "dfp-ad-bottom@728x90": {
                    placement_id: "c7f05fa4de4d821a4a32"
                },
                "dfp-ad-native@300x250": {
                    placement_id: "db7a317f024d8cccb9ea"
                },
                "dfp-ad-native@300x600": {
                    placement_id: "db7a317f024d8cccb9ea"
                },
                "dfp-ad-right1@300x250": {
                    placement_id: "812afca82614df432cfd"
                },
                "dfp-ad-right1@300x600": {
                    placement_id: "812afca82614df432cfd"
                },
                "dfp-ad-right2@300x250": {
                    placement_id: "c231ea8c9e65a1c9e587"
                },
                "dfp-ad-right2@300x600": {
                    placement_id: "c231ea8c9e65a1c9e587"
                },
                "dfp-ad-right3@160x600": {
                    placement_id: "8ada3bfc1c7878b0bc94"
                },
                "dfp-ad-right3@300x250": {
                    placement_id: "8ada3bfc1c7878b0bc94"
                },
                "dfp-ad-right3@300x600": {
                    placement_id: "8ada3bfc1c7878b0bc94"
                },
                "dfp-ad-right4@160x600": {
                    placement_id: "cc1db32ba58613dc2ba1"
                },
                "dfp-ad-right4@300x250": {
                    placement_id: "cc1db32ba58613dc2ba1"
                },
                "dfp-ad-right4@300x600": {
                    placement_id: "cc1db32ba58613dc2ba1"
                },
                "dfp-ad-top@728x90": {
                    placement_id: "a9c839345ebc4c855db8"
                },
                "dfp-ad-top@970x250": {
                    placement_id: "a9c839345ebc4c855db8"
                }
            }
        },
        aol: {
            network: "9985.1",
            server: "adserver.adtechus.com",
            rev_share: "0.0",
            timeout: "2000",
            throttle: "100",
            kgp: "_DIV_@_W_x_H_",
            klm: {
                "dfp-ad-belowcontent@728x90": {
                    placement: "4934712"
                },
                "dfp-ad-bottom@728x90": {
                    placement: "4934721"
                },
                "dfp-ad-native@300x250": {
                    placement: "4934720"
                },
                "dfp-ad-native@300x600": {
                    placement: "4934719"
                },
                "dfp-ad-right1@300x1050": {
                    placement: "4934724"
                },
                "dfp-ad-right1@300x250": {
                    placement: "4934711"
                },
                "dfp-ad-right1@300x600": {
                    placement: "4934723"
                },
                "dfp-ad-right2@300x250": {
                    placement: "4934725"
                },
                "dfp-ad-right2@300x600": {
                    placement: "4934715"
                },
                "dfp-ad-right3@160x600": {
                    placement: "4934722"
                },
                "dfp-ad-right3@300x250": {
                    placement: "4934708"
                },
                "dfp-ad-right3@300x600": {
                    placement: "4934718"
                },
                "dfp-ad-right4@160x600": {
                    placement: "4934716"
                },
                "dfp-ad-right4@300x250": {
                    placement: "4934714"
                },
                "dfp-ad-right4@300x600": {
                    placement: "4934709"
                },
                "dfp-ad-top@728x90": {
                    placement: "4934710"
                },
                "dfp-ad-top@970x250": {
                    placement: "4934713"
                },
                "dfp-ad-top@970x90": {
                    placement: "4934717"
                }
            }
        },
        openx: {
            delDomain: "ibt-d.openx.net",
            rev_share: "0.0",
            timeout: "2000",
            throttle: "100",
            pt: 0,
            kgp: "_DIV_@_W_x_H_",
            klm: {
                "dfp-ad-belowcontent@728x90": {
                    unit: "540258385"
                },
                "dfp-ad-bottom@728x90": {
                    unit: "540167325"
                },
                "dfp-ad-native@300x250": {
                    unit: "540258382"
                },
                "dfp-ad-native@300x600": {
                    unit: "540258382"
                },
                "dfp-ad-right1@300x1050": {
                    unit: "540167329"
                },
                "dfp-ad-right1@300x250": {
                    unit: "540167329"
                },
                "dfp-ad-right1@300x600": {
                    unit: "540167329"
                },
                "dfp-ad-right2@300x250": {
                    unit: "540167330"
                },
                "dfp-ad-right2@300x600": {
                    unit: "540167330"
                },
                "dfp-ad-right3@160x600": {
                    unit: "540167331"
                },
                "dfp-ad-right3@300x250": {
                    unit: "540167331"
                },
                "dfp-ad-right3@300x600": {
                    unit: "540167331"
                },
                "dfp-ad-right4@160x600": {
                    unit: "540167332"
                },
                "dfp-ad-right4@300x250": {
                    unit: "540167332"
                },
                "dfp-ad-right4@300x600": {
                    unit: "540167332"
                },
                "dfp-ad-top@728x90": {
                    unit: "540167324"
                },
                "dfp-ad-top@970x250": {
                    unit: "540167324"
                },
                "dfp-ad-top@970x90": {
                    unit: "540167324"
                }
            }
        },
        adkernel: {
            host: "exchange.nativeads.com",
            rev_share: "0.0",
            timeout: "2000",
            throttle: "100",
            kgp: "_DIV_@_W_x_H_",
            klm: {
                "dfp-ad-belowcontent@728x90": {
                    zoneId: "60506"
                },
                "dfp-ad-bottom@728x90": {
                    zoneId: "59033"
                },
                "dfp-ad-native@300x250": {
                    zoneId: "60702"
                },
                "dfp-ad-native@300x600": {
                    zoneId: "60704"
                },
                "dfp-ad-right1@300x250": {
                    zoneId: "59043"
                },
                "dfp-ad-right1@300x600": {
                    zoneId: "59045"
                },
                "dfp-ad-right2@300x250": {
                    zoneId: "59047"
                },
                "dfp-ad-right2@300x600": {
                    zoneId: "59049"
                },
                "dfp-ad-right3@160x600": {
                    zoneId: "59055"
                },
                "dfp-ad-right3@300x250": {
                    zoneId: "59051"
                },
                "dfp-ad-right3@300x600": {
                    zoneId: "59053"
                },
                "dfp-ad-right4@160x600": {
                    zoneId: "59061"
                },
                "dfp-ad-right4@300x250": {
                    zoneId: "59057"
                },
                "dfp-ad-right4@300x600": {
                    zoneId: "59059"
                },
                "dfp-ad-top@728x90": {
                    zoneId: "59029"
                },
                "dfp-ad-top@970x90": {
                    zoneId: "59031"
                }
            }
        },
        sovrn: {
            throttle: "100",
            bidfloor: 0,
            timeout: "2000",
            rev_share: "0.0",
            kgp: "_DIV_@_W_x_H_",
            klm: {
                "dfp-ad-belowcontent@728x90": {
                    tagid: "580032"
                },
                "dfp-ad-bottom@728x90": {
                    tagid: "580031"
                },
                "dfp-ad-native@300x250": {
                    tagid: "580053"
                },
                "dfp-ad-native@300x600": {
                    tagid: "580054"
                },
                "dfp-ad-right1@300x250": {
                    tagid: "580037"
                },
                "dfp-ad-right1@300x600": {
                    tagid: "580049"
                },
                "dfp-ad-right2@300x250": {
                    tagid: "580038"
                },
                "dfp-ad-right2@300x600": {
                    tagid: "580050"
                },
                "dfp-ad-right3@160x600": {
                    tagid: "580047"
                },
                "dfp-ad-right3@300x250": {
                    tagid: "580039"
                },
                "dfp-ad-right3@300x600": {
                    tagid: "580051"
                },
                "dfp-ad-right4@160x600": {
                    tagid: "580048"
                },
                "dfp-ad-right4@300x250": {
                    tagid: "580040"
                },
                "dfp-ad-right4@300x600": {
                    tagid: "580052"
                },
                "dfp-ad-top@728x90": {
                    tagid: "580030"
                },
                "dfp-ad-top@970x250": {
                    tagid: "580046"
                },
                "dfp-ad-top@970x90": {
                    tagid: "580041"
                }
            }
        }
    }
}
), (function(t, e, i) {
    function n(t) {
        c.isOwnProperty(window.PWT.bidMap, t) || (window.PWT.bidMap[t] = f.createBMEntry(t))
    }
    function r(t, e, i, n) {
        window.PWT.bidMap[t].setNewBid(e, i),
        window.PWT.bidIdMap[i.getBidID()] = {
            s: t,
            a: e
        },
        0 === i.getDefaultBidStatus() && c.vLogInfo(t, {
            type: "bid",
            bidder: e + (0 !== u.getBidPassThroughStatus(e) ? "(Passthrough)" : ""),
            bidDetails: i,
            latency: n,
            s2s: u.isServerSideAdapter(e)
        })
    }
    function a(t, e, i) {
        var n = ""
          , r = 0
          , a = 0
          , d = l.METADATA_MACROS
          , s = "g";
        c.forEachOnObject(e.adapters, (function(e, i) {
            "" != i.getLastBidID() && ("pubmaticServer" !== e && a++,
            c.forEachOnObject(i.bids, (function(e, i) {
                1 != i.getDefaultBidStatus() && 1 != i.getPostTimeoutStatus() && (r++,
                n += o(t, i))
            }
            )))
        }
        )),
        0 == n.length && (n = t),
        n = n.replace(new RegExp(d.BID_COUNT,s), r),
        n = n.replace(new RegExp(d.PARTNER_COUNT,s), a),
        i[l.WRAPPER_TARGETING_KEYS.META_DATA] = encodeURIComponent(n)
    }
    function o(t, e) {
        var i = l.METADATA_MACROS
          , n = "g";
        return t.replace(new RegExp(i.PARTNER,n), e.getAdapterID()).replace(new RegExp(i.WIDTH,n), e.getWidth()).replace(new RegExp(i.HEIGHT,n), e.getHeight()).replace(new RegExp(i.GROSS_ECPM,n), e.getGrossEcpm()).replace(new RegExp(i.NET_ECPM,n), e.getNetEcpm())
    }
    function d(t) {
        var e = null
          , i = {};
        return c.forEachOnObject(t.adapters, (function(t, n) {
            var r = h.auctionBidsCallBack(t, n, i, e);
            e = r.winningBid,
            i = r.keyValuePairs
        }
        )),
        null !== u.getMataDataPattern() && a(u.getMataDataPattern(), t, i),
        {
            wb: e,
            kvp: i
        }
    }
    function s(t, e, i, n) {
        return "" != e.getLastBidID() ? (c.forEachOnObject(e.bids, (function(e, r) {
            return r.getPostTimeoutStatus() === !0 ? {
                winningBid: n,
                keyValuePairs: i
            } : (1 !== r.getDefaultBidStatus() && 1 == u.getSendAllBidsStatus() && r.setSendAllBidsKeys(),
            0 === u.getBidPassThroughStatus(t) && c.copyKeyValueObject(i, r.getKeyValuePairs()),
            0 !== u.getBidPassThroughStatus(t) ? (c.copyKeyValueObject(i, r.getKeyValuePairs()),
            {
                winningBid: n,
                keyValuePairs: i
            }) : (null == n ? n = r : n.getNetEcpm() < r.getNetEcpm() && (n = r),
            void 0))
        }
        )),
        {
            winningBid: n,
            keyValuePairs: i
        }) : {
            winningBid: n,
            keyValuePairs: i
        }
    }
    function p(t, e, i) {
        var n = e.getCreationTime();
        if (e.getAnalyticEnabledStatus() && !e.getExpiredStatus()) {
            var r = {
                sn: t,
                sz: e.getSizes(),
                ps: []
            };
            e.setExpired();
            var a = e.getImpressionID();
            i[a] = i[a] || [],
            c.forEachOnObject(e.adapters, (function(t, e) {
                1 != u.getBidPassThroughStatus(t) && "pubmaticServer" !== t && c.forEachOnObject(e.bids, (function(e, i) {
                    if (1 != u.getAdapterMaskBidsStatus(t) || i.getWinningBidStatus() !== !1) {
                        var a = i.getReceivedTime();
                        r.ps.push({
                            pn: t,
                            bidid: e,
                            db: i.getDefaultBidStatus(),
                            kgpv: i.getKGPV(),
                            psz: i.getWidth() + "x" + i.getHeight(),
                            eg: i.getGrossEcpm(),
                            en: i.getNetEcpm(),
                            di: i.getDealID(),
                            dc: i.getDealChannel(),
                            l1: a - n,
                            l2: 0,
                            t: i.getPostTimeoutStatus() === !1 ? 0 : 1,
                            wb: i.getWinningBidStatus() === !0 ? 1 : 0
                        })
                    }
                }
                ))
            }
            )),
            i[a].push(r)
        }
    }
    var u = i(4)
      , l = i(2)
      , c = i(1)
      , g = i(7)
      , f = i(8)
      , h = this;
    e.createBidEntry = n,
    e.setSizes = function(t, e) {
        h.createBidEntry(t),
        window.PWT.bidMap[t].setSizes(e)
    }
    ,
    e.setCallInitTime = function(t, e) {
        h.createBidEntry(t),
        window.PWT.bidMap[t].setAdapterEntry(e)
    }
    ,
    e.setBidFromBidder = function(t, e) {
        var i = e.getAdapterID()
          , n = (e.getBidID(),
        window.PWT.bidMap[t]);
        if (!c.isOwnProperty(window.PWT.bidMap, t))
            return c.log("BidManager is not expecting bid for " + t + ", from " + i),
            void 0;
        var r = n.getCreationTime() + u.getTimeout() < e.getReceivedTime() ? !0 : !1
          , a = e.getReceivedTime() - n.getCreationTime();
        h.createBidEntry(t),
        c.log("BdManagerSetBid: divID: " + t + ", bidderID: " + i + ", ecpm: " + e.getGrossEcpm() + ", size: " + e.getWidth() + "x" + e.getHeight() + ", postTimeout: " + r + ", defaultBid: " + e.getDefaultBidStatus()),
        r === !0 && e.setPostTimeoutStatus();
        var o = n.getLastBidIDForAdapter(i);
        if ("" != o) {
            var d = n.getBid(i, o)
              , s = 1 === d.getDefaultBidStatus();
            s || !r ? (s && c.log(l.MESSAGES.M23),
            s || d.getNetEcpm() < e.getNetEcpm() ? (c.log(l.MESSAGES.M12 + d.getNetEcpm() + l.MESSAGES.M13 + e.getNetEcpm() + l.MESSAGES.M14),
            h.storeBidInBidMap(t, i, e, a)) : c.log(l.MESSAGES.M12 + d.getNetEcpm() + l.MESSAGES.M15 + e.getNetEcpm() + l.MESSAGES.M16)) : c.log(l.MESSAGES.M17)
        } else
            c.log(l.MESSAGES.M18),
            h.storeBidInBidMap(t, i, e, a)
    }
    ,
    e.storeBidInBidMap = r,
    e.resetBid = function(t, e) {
        c.vLogInfo(t, {
            type: "hr"
        }),
        delete window.PWT.bidMap[t],
        h.createBidEntry(t),
        window.PWT.bidMap[t].setImpressionID(e)
    }
    ,
    e.createMetaDataKey = a,
    e.replaceMetaDataMacros = o,
    e.auctionBids = d,
    e.auctionBidsCallBack = s,
    e.getBid = function(t) {
        var e = null
          , i = null;
        if (c.isOwnProperty(window.PWT.bidMap, t)) {
            var n = h.auctionBids(window.PWT.bidMap[t]);
            e = n.wb,
            i = n.kvp,
            window.PWT.bidMap[t].setAnalyticEnabled(),
            e && e.getNetEcpm() > 0 ? (e.setStatus(1),
            e.setWinningBidStatus(),
            c.vLogInfo(t, {
                type: "win-bid",
                bidDetails: e
            })) : c.vLogInfo(t, {
                type: "win-bid-fail"
            })
        }
        return {
            wb: e,
            kvp: i
        }
    }
    ,
    e.getBidById = function(t) {
        if (!c.isOwnProperty(window.PWT.bidIdMap, t))
            return c.log(l.MESSAGES.M25 + t),
            null;
        var e = window.PWT.bidIdMap[t].s
          , i = window.PWT.bidIdMap[t].a;
        if (c.isOwnProperty(window.PWT.bidMap, e)) {
            c.log("BidID: " + t + ", DivID: " + e + l.MESSAGES.M19 + i);
            var n = window.PWT.bidMap[e].getBid(i, t);
            return null == n ? null : {
                bid: n,
                slotid: e
            }
        }
        return c.log(l.MESSAGES.M25 + t),
        null
    }
    ,
    e.displayCreative = function(t, e) {
        var i = h.getBidById(e);
        if (i) {
            var n = i.bid
              , r = i.slotid;
            c.displayCreative(t, n),
            c.vLogInfo(r, {
                type: "disp",
                adapter: n.getAdapterID()
            }),
            h.executeMonetizationPixel(r, n)
        }
    }
    ,
    e.executeAnalyticsPixel = function() {
        var t = {
            s: []
        }
          , e = u.getPublisherId()
          , i = g.getUserConsentDataFromLS()
          , n = ""
          , r = u.getAnalyticsPixelURL()
          , a = {};
        r && (r = c.metaInfo.protocol + r + "pubid=" + e,
        t[l.CONFIG.PUBLISHER_ID] = u.getPublisherId(),
        t[l.LOGGER_PIXEL_PARAMS.TIMEOUT] = "" + u.getTimeout(),
        t[l.LOGGER_PIXEL_PARAMS.PAGE_URL] = window.decodeURIComponent(c.metaInfo.pageURL),
        t[l.LOGGER_PIXEL_PARAMS.TIMESTAMP] = c.getCurrentTimestamp(),
        t[l.CONFIG.PROFILE_ID] = u.getProfileID(),
        t[l.CONFIG.PROFILE_VERSION_ID] = u.getProfileDisplayVersionID(),
        u.getGdpr() && (n = i && i.c ? encodeURIComponent(i.c) : "",
        t[l.CONFIG.GDPR_CONSENT] = i && i.g,
        t[l.CONFIG.CONSENT_STRING] = n,
        r += "&gdEn=" + (u.getGdpr() ? 1 : 0)),
        c.forEachOnObject(window.PWT.bidMap, (function(t, e) {
            h.analyticalPixelCallback(t, e, a)
        }
        )),
        c.forEachOnObject(a, (function(e, i) {
            i.length > 0 && (t.s = i,
            t[l.COMMON.IMPRESSION_ID] = window.encodeURIComponent(e),
            (new window.Image).src = r + "&json=" + window.encodeURIComponent(JSON.stringify(t)))
        }
        )))
    }
    ,
    e.executeMonetizationPixel = function(t, e) {
        var i = u.getMonetizationPixelURL()
          , n = u.getPublisherId();
        i && (i += "pubid=" + n,
        i += "&purl=" + window.encodeURIComponent(c.metaInfo.pageURL),
        i += "&tst=" + c.getCurrentTimestamp(),
        i += "&iid=" + window.encodeURIComponent(window.PWT.bidMap[t].getImpressionID()),
        i += "&bidid=" + window.encodeURIComponent(e.getBidID()),
        i += "&pid=" + window.encodeURIComponent(u.getProfileID()),
        i += "&pdvid=" + window.encodeURIComponent(u.getProfileDisplayVersionID()),
        i += "&slot=" + window.encodeURIComponent(t),
        i += "&pn=" + window.encodeURIComponent(e.getAdapterID()),
        i += "&en=" + window.encodeURIComponent(e.getNetEcpm()),
        i += "&eg=" + window.encodeURIComponent(e.getGrossEcpm()),
        i += "&kgpv=" + window.encodeURIComponent(e.getKGPV()),
        h.setImageSrcToPixelURL(i))
    }
    ,
    e.analyticalPixelCallback = p,
    e.setImageSrcToPixelURL = function(t) {
        var e = new window.Image;
        e.src = c.metaInfo.protocol + t
    }
    ,
    e.getAllPartnersBidStatuses = function(t, e) {
        var i = !0;
        return c.forEachOnArray(e, (function(e, n) {
            t[n] && c.forEachOnObject(t[n].adapters, (function(t, e) {
                c.forEachOnObject(e.bids, (function(t, e) {
                    i = i && 0 === e.getDefaultBidStatus()
                }
                ))
            }
            ))
        }
        )),
        i
    }
}
), (function(t, e) {
    function i(t, e) {
        return toString.call(t) === "[object " + e + "]"
    }
    var n = "OpenWrap"
      , r = 909090
      , a = function(t) {
        return i(t, "Function")
    }
      , o = (function() {
        try {
            return window.localStorage && a(window.localStorage.getItem) && a(window.localStorage.setItem)
        } catch (t) {
            return !1
        }
    }
    )()
      , d = function(t, e, i, r) {
        var a;
        if (o) {
            try {
                a = window.localStorage.getItem(n)
            } catch (d) {}
            if (a && "string" == typeof a)
                try {
                    a = JSON.parse(a)
                } catch (d) {
                    a = {}
                }
            else
                a = {};
            a && (a.hasOwnProperty(t) || (a[t] = {}),
            a[t].t = (new Date).getTime(),
            a[t][e] = i,
            "c" == e && (a[t].g = r ? 1 : 0));
            try {
                window.localStorage.setItem(n, JSON.stringify(a))
            } catch (d) {}
        }
    };
    e.setConsentDataInLS = d,
    e.isCmpFound = function() {
        return !!window.__cmp
    }
    ,
    e.getUserConsentDataFromCMP = function() {
        function t(t) {
            if (t && t.data && t.data.__cmp && t.data.__cmp.result) {
                var e = t.data.__cmp.result;
                e && e.consentData ? d(i, "c", e.consentData, e.gdprApplies) : "string" == typeof e && d(i, "c", e)
            }
        }
        function e() {
            window.__cmp("getConsentData", "vendorConsents", (function(t) {
                t && t.consentData ? d(i, "c", t.consentData, t.gdprApplies) : "string" == typeof t && d(i, "c", t)
            }
            ))
        }
        var i = r
          , n = 0
          , a = {
            __cmp: {
                callId: "iframe:" + ++n,
                command: "getConsentData"
            }
        };
        window.__cmp ? "function" == typeof window.__cmp ? e() : setTimeout((function() {
            "function" == typeof window.__cmp && e()
        }
        ), 500) : (window.top.postMessage(a, "*"),
        window.addEventListener("message", t))
    }
    ,
    e.getUserConsentDataFromLS = function() {
        var t = r
          , e = {
            c: "",
            g: 0
        };
        if (!o)
            return e;
        var i;
        try {
            i = window.localStorage.getItem(n)
        } catch (a) {}
        if (i && "string" == typeof i) {
            try {
                i = JSON.parse(i)
            } catch (a) {
                i = {}
            }
            if (i.hasOwnProperty(t)) {
                var d = i[t];
                d && d.c && d.t && d.t && parseInt(d.t, 10) > (new Date).getTime() - 864e5 && (e.c = d.c,
                e.g = d.g)
            }
        }
        return e
    }
}
), (function(t, e, i) {
    function n(t) {
        this.name = t,
        this.sizes = [],
        this.adapters = {},
        this.creationTime = a.getCurrentTimestampInMs(),
        this.impressionID = "",
        this.analyticsEnabled = !1,
        this.expired = !1
    }
    var r = i(2)
      , a = i(1)
      , o = i(9).AdapterEntry;
    n.prototype.setExpired = function() {
        return this.expired = !0,
        this
    }
    ,
    n.prototype.getExpiredStatus = function() {
        return this.expired
    }
    ,
    n.prototype.setAnalyticEnabled = function() {
        return this.analyticsEnabled = !0,
        this
    }
    ,
    n.prototype.getAnalyticEnabledStatus = function() {
        return this.analyticsEnabled
    }
    ,
    n.prototype.setNewBid = function(t, e) {
        a.isOwnProperty(this.adapters, t) || (this.adapters[t] = new o(t)),
        this.adapters[t].setNewBid(e)
    }
    ,
    n.prototype.getBid = function(t, e) {
        return a.isOwnProperty(this.adapters, t) ? this.adapters[t].getBid(e) : void 0
    }
    ,
    n.prototype.getName = function() {
        return this.name
    }
    ,
    n.prototype.getCreationTime = function() {
        return this.creationTime
    }
    ,
    n.prototype.setImpressionID = function(t) {
        return this.impressionID = t,
        this
    }
    ,
    n.prototype.getImpressionID = function() {
        return this.impressionID
    }
    ,
    n.prototype.setSizes = function(t) {
        return this.sizes = t,
        this
    }
    ,
    n.prototype.getSizes = function() {
        return this.sizes
    }
    ,
    n.prototype.setAdapterEntry = function(t) {
        return a.isOwnProperty(this.adapters, t) || (this.adapters[t] = new o(t),
        a.log(r.MESSAGES.M4 + this.name + " " + t + " " + this.adapters[t].getCallInitiatedTime())),
        this
    }
    ,
    n.prototype.getLastBidIDForAdapter = function(t) {
        return a.isOwnProperty(this.adapters, t) ? this.adapters[t].getLastBidID() : ""
    }
    ,
    t.exports.BMEntry = n,
    e.createBMEntry = function(t) {
        return new n(t)
    }
}
), (function(t, e, i) {
    function n(t) {
        this.adapterID = t,
        this.callInitiatedTime = r.getCurrentTimestampInMs(),
        this.bids = {},
        this.lastBidID = ""
    }
    var r = i(1);
    n.prototype.getCallInitiatedTime = function() {
        return this.callInitiatedTime
    }
    ,
    n.prototype.getLastBidID = function() {
        return this.lastBidID
    }
    ,
    n.prototype.getBid = function(t) {
        return r.isOwnProperty(this.bids, t) ? this.bids[t] : null
    }
    ,
    n.prototype.setNewBid = function(t) {
        delete this.bids[this.lastBidID];
        var e = t.getBidID();
        this.bids[e] = t,
        this.lastBidID = e
    }
    ,
    t.exports.AdapterEntry = n
}
), (function(t, e, i) {
    function n(t) {
        q.isObject(t) && (oe = t)
    }
    function r() {
        return oe
    }
    function a(t) {
        var e = 0;
        try {
            var i = t.getSlotId().getId().split("_");
            e = parseInt(i[i.length - 1])
        } catch (n) {}
        return e
    }
    function o(t, e) {
        if (!q.isOwnProperty(e, t))
            return !1;
        var i = e[t]
          , n = q.getScreenWidth(de.getWindowReference())
          , r = q.getScreenHeight(de.getWindowReference());
        if (q.log(t + ": responsiveSizeMapping found: screenWidth: " + n + ", screenHeight: " + r),
        q.log(i),
        !q.isArray(i))
            return !1;
        for (var a = 0, o = i.length; o > a; a++)
            if (2 == i[a].length && 2 == i[a][0].length) {
                var d = i[a][0][0]
                  , s = i[a][0][1];
                if (n >= d && r >= s) {
                    if (0 != i[a][1].length && !q.isArray(i[a][1][0])) {
                        if (2 == i[a][1].length && q.isNumber(i[a][1][0]) && q.isNumber(i[a][1][1]))
                            return [i[a][1]];
                        q.log(t + ": Unsupported mapping template."),
                        q.log(i)
                    }
                    return i[a][1]
                }
            }
        return !1
    }
    function d(t, e) {
        var i = de.getSizeFromSizeMapping(t, de.slotSizeMapping);
        if (i !== !1)
            return q.log(t + ": responsiveSizeMapping applied: "),
            q.log(i),
            i;
        var n = [];
        return q.isFunction(e.getSizes) && q.forEachOnArray(e.getSizes(), (function(e, i) {
            q.isFunction(i.getWidth) && q.isFunction(i.getHeight) ? n.push([i.getWidth(), i.getHeight()]) : (q.log(t + ", size object does not have getWidth and getHeight method. Ignoring: "),
            q.log(i))
        }
        )),
        n
    }
    function s(t, e) {
        q.isObject(t) && q.isFunction(t.getDivID) && q.isArray(e) && e[0] && e[0] == t.getDivID() && (t.setDisplayFunctionCalled(!0),
        t.setArguments(e))
    }
    function p(t, e, i) {
        if (q.isOwnProperty(de.slotsMap, t))
            i || de.slotsMap[t].setSizes(de.getAdSlotSizesArray(t, e));
        else {
            var n = Z.createSlot(t);
            n.setDivID(t),
            n.setPubAdServerObject(e),
            n.setAdUnitID(e.getAdUnitPath()),
            n.setAdUnitIndex(de.getAdUnitIndex(e)),
            n.setSizes(de.getAdSlotSizesArray(t, e)),
            n.setStatus(Y.SLOT_STATUS.CREATED),
            ee && q.isObject(JSON) && q.isFunction(JSON.stringify) && q.forEachOnArray(e.getTargetingKeys(), (function(t, i) {
                n.setKeyValue(i, e.getTargeting(i))
            }
            )),
            de.slotsMap[t] = n,
            q.createVLogInfoPanel(t, n.getSizes())
        }
    }
    function u(t) {
        if (q.isObject(t) && q.isFunction(t.getSlotId)) {
            var e = t.getSlotId();
            if (e && q.isFunction(e.getDomId))
                return e.getDomId()
        }
        return ""
    }
    function l(t, e, i) {
        q.log("Generating slotsMap"),
        q.forEachOnArray(t, (function(t, n) {
            var r = de.generateSlotName(n);
            de.storeInSlotsMap(r, n, i),
            i && q.isOwnProperty(de.slotsMap, r) && de.setDisplayFunctionCalledIfRequired(de.slotsMap[r], e)
        }
        )),
        q.log(de.slotsMap)
    }
    function c(t) {
        return q.isOwnProperty(de.slotsMap, t) ? de.slotsMap[t].getStatus() : Y.SLOT_STATUS.DISPLAYED
    }
    function g(t, e) {
        q.isOwnProperty(de.slotsMap, t) && de.slotsMap[t].updateStatusAfterRendering(e)
    }
    function f(t) {
        var e = [];
        return q.forEachOnObject(de.slotsMap, (function(i, n) {
            q.isOwnProperty(t, n.getStatus()) && e.push(i)
        }
        )),
        e
    }
    function h(t) {
        var e, i = {};
        q.isOwnProperty(de.slotsMap, t) && (e = de.slotsMap[t].getPubAdServerObject(),
        q.forEachOnArray(e.getTargetingKeys(), (function(t, n) {
            i[n] = e.getTargeting(n)
        }
        )),
        e.clearTargeting(),
        q.forEachOnObject(i, (function(t, i) {
            q.isOwnProperty(de.wrapperTargetingKeys, t) || e.setTargeting(t, i)
        }
        )))
    }
    function I(t, e, i) {
        q.forEachOnArray(t, (function(t, n) {
            if (q.isOwnProperty(de.slotsMap, n)) {
                var r = de.slotsMap[n];
                r.setStatus(Y.SLOT_STATUS.PARTNERS_CALLED),
                i && (de.removeDMTargetingFromSlot(n),
                r.setRefreshFunctionCalled(!0),
                r.setArguments(e))
            }
        }
        ))
    }
    function m(t) {
        var e = [];
        return q.forEachOnArray(t, (function(t, i) {
            e.push(de.slotsMap[i])
        }
        )),
        e
    }
    function w(t) {
        var e = {};
        return q.forEachOnObject(t, (function(t, i) {
            e[i] = ""
        }
        )),
        e
    }
    function E(t) {
        var e = J.getBid(t)
          , i = e.wb || null
          , n = e.kvp || null
          , r = de.slotsMap[t].getPubAdServerObject()
          , a = Y.IGNORE_PREBID_KEYS;
        if (q.log("DIV: " + t + " winningBid: "),
        q.log(i),
        i && i.getNetEcpm() > 0) {
            de.slotsMap[t].setStatus(Y.SLOT_STATUS.TARGETING_ADDED),
            r.setTargeting(Y.WRAPPER_TARGETING_KEYS.BID_ID, i.getBidID()),
            r.setTargeting(Y.WRAPPER_TARGETING_KEYS.BID_STATUS, i.getStatus()),
            r.setTargeting(Y.WRAPPER_TARGETING_KEYS.BID_ECPM, i.getNetEcpm().toFixed(Y.COMMON.BID_PRECISION));
            var o = i.getDealID();
            o && r.setTargeting(Y.WRAPPER_TARGETING_KEYS.BID_DEAL_ID, o),
            r.setTargeting(Y.WRAPPER_TARGETING_KEYS.BID_ADAPTER_ID, i.getAdapterID()),
            r.setTargeting(Y.WRAPPER_TARGETING_KEYS.PUBLISHER_ID, K.getPublisherId()),
            r.setTargeting(Y.WRAPPER_TARGETING_KEYS.PROFILE_ID, K.getProfileID()),
            r.setTargeting(Y.WRAPPER_TARGETING_KEYS.PROFILE_VERSION_ID, K.getProfileDisplayVersionID()),
            r.setTargeting(Y.WRAPPER_TARGETING_KEYS.BID_SIZE, i.width + "x" + i.height)
        }
        q.forEachOnObject(n, (function(t, e) {
            q.isOwnProperty(a, t) || (r.setTargeting(t, e),
            de.defineWrapperTargetingKey(t))
        }
        ))
    }
    function S(t) {
        q.isObject(de.wrapperTargetingKeys) || (de.wrapperTargetingKeys = {}),
        de.wrapperTargetingKeys[t] = ""
    }
    function D(t, e) {
        return q.isObject(t) && q.isFunction(e) ? function() {
            return te = !0,
            q.log("Disable Initial Load is called"),
            e.apply(t, arguments)
        }
        : (q.log("disableInitialLoad: originalFunction is not a function"),
        null)
    }
    function A(t, e) {
        return q.isObject(t) && q.isFunction(e) ? function() {
            return q.log("enableSingleRequest is called"),
            e.apply(t, arguments)
        }
        : (q.log("disableInitialLoad: originalFunction is not a function"),
        null)
    }
    function T(t, e) {
        return q.isObject(t) && q.isFunction(e) ? function() {
            var i = arguments
              , n = i[0] ? i[0] : null;
            return null != n && (q.isOwnProperty(ae, n) || (ae[n] = []),
            ae[n] = ae[n].concat(i[1])),
            e.apply(t, arguments)
        }
        : (q.log("setTargeting: originalFunction is not a function"),
        null)
    }
    function _(t, e) {
        return q.isObject(t) && q.isFunction(e) ? function() {
            var i = arguments[0] || window.googletag.pubads().getSlots();
            return q.forEachOnArray(i, (function(t, e) {
                delete re[de.generateSlotName(e)]
            }
            )),
            e.apply(t, arguments)
        }
        : (q.log("destroySlots: originalFunction is not a function"),
        null)
    }
    function b(t, e, i, n) {
        q.log(t),
        q.log(n),
        de.updateStatusAfterRendering(n[0], !1),
        i.apply(e, n)
    }
    function y(t, e) {
        var i = e.getStatus();
        i != Y.SLOT_STATUS.DISPLAYED && i != Y.SLOT_STATUS.TARGETING_ADDED && de.findWinningBidAndApplyTargeting(t)
    }
    function O(t, e, i) {
        de.getStatusOfSlotForDivId(i[0]) != Y.SLOT_STATUS.DISPLAYED ? de.updateStatusAndCallOriginalFunction_Display("Calling original display function after timeout with arguments, ", t, e, i) : q.log("AdSlot already rendered")
    }
    function P(t, e, i) {
        q.getExternalBidderStatus(e) && J.getAllPartnersBidStatuses(window.PWT.bidMap, e) ? (q.resetExternalBidderStatus(e),
        i()) : t > 0 && window.setTimeout((function() {
            de.executeDisplay(t - 10, e, i)
        }
        ), 10)
    }
    function v(t, e, i, n) {
        switch (t) {
        case Y.SLOT_STATUS.CREATED:
        case Y.SLOT_STATUS.PARTNERS_CALLED:
            var r = Object.keys(de.slotsMap);
            "object" == typeof window.OWT.externalBidderStatuses[n[0]] && window.OWT.externalBidderStatuses[n[0]] && de.executeDisplay(K.getTimeout(), r, (function() {
                q.forEachOnObject(de.slotsMap, (function(t, e) {
                    de.findWinningBidIfRequired_Display(t, e)
                }
                )),
                de.processDisplayCalledSlot(e, i, n)
            }
            )),
            setTimeout((function() {
                q.log("PostTimeout.. back in display function"),
                q.forEachOnObject(de.slotsMap, (function(t, e) {
                    de.findWinningBidIfRequired_Display(t, e)
                }
                )),
                de.processDisplayCalledSlot(e, i, n)
            }
            ), K.getTimeout());
            break;
        case Y.SLOT_STATUS.TARGETING_ADDED:
            de.updateStatusAndCallOriginalFunction_Display("As DM processing is already done, Calling original display function with arguments", e, i, n);
            break;
        case Y.SLOT_STATUS.DISPLAYED:
            de.updateStatusAndCallOriginalFunction_Display("As slot is already displayed, Calling original display function with arguments", e, i, n)
        }
    }
    function x(t, e, i) {
        if (t.length > 0) {
            de.updateStatusOfQualifyingSlotsBeforeCallingAdapters(t, e, i);
            var n = de.arrayOfSelectedSlots(t);
            X.callAdapters(n)
        }
    }
    function R(t, e) {
        return Q.getUserConsentDataFromCMP(),
        q.isObject(t) && q.isFunction(e) ? function() {
            if (q.log("In display function, with arguments: "),
            q.log(arguments),
            te)
                return q.log("DisableInitialLoad was called, Nothing to do"),
                e.apply(t, arguments);
            de.updateSlotsMapFromGoogleSlots(t.pubads().getSlots(), arguments, !0),
            de.displayFunctionStatusHandler(c(arguments[0]), t, e, arguments);
            var i = {};
            i[Y.SLOT_STATUS.CREATED] = "",
            de.forQualifyingSlotNamesCallAdapters(f(i), arguments, !1);
            var n = arguments[0];
            setTimeout((function() {
                q.realignVLogInfoPanel(n),
                J.executeAnalyticsPixel()
            }
            ), 2e3 + K.getTimeout())
        }
        : (q.log("display: originalFunction is not a function"),
        null)
    }
    function M(t) {
        de.displayHookIsAdded || (de.displayHookIsAdded = !0,
        q.log("Adding hook on googletag.display."),
        q.addHookOnFunction(t, !1, "display", this.newDisplayFunction))
    }
    function C(t, e, i) {
        return q.isOwnProperty(de.slotsMap, t) && de.slotsMap[t].isRefreshFunctionCalled() === !0 && de.slotsMap[t].getStatus() !== Y.SLOT_STATUS.DISPLAYED ? (de.findWinningBidAndApplyTargeting(e),
        de.updateStatusAfterRendering(e, !0),
        !0) : i
    }
    function B(t, e) {
        q.createVLogInfoPanel(t, de.slotsMap[e].getSizes()),
        q.realignVLogInfoPanel(t),
        J.executeAnalyticsPixel()
    }
    function N(t, e, i, n) {
        q.log("Executing post timeout events, arguments: "),
        q.log(n);
        var r = !1;
        q.forEachOnArray(t, (function(t, e) {
            var i = de.slotsMap[e].getDivID();
            r = de.findWinningBidIfRequired_Refresh(e, i, r),
            window.setTimeout((function() {
                de.postRederingChores(i, e)
            }
            ), 2e3)
        }
        )),
        this.callOriginalRefeshFunction(r, e, i, n)
    }
    function F(t, e, i, n) {
        t === !0 ? (q.log("Calling original refresh function post timeout"),
        i.apply(e, n)) : q.log("AdSlot already rendered")
    }
    function L(t, e) {
        var i = []
          , n = [];
        return n = 0 == t.length || null == t[0] ? e.getSlots() : t[0],
        q.forEachOnArray(n, (function(t, e) {
            var n = de.generateSlotName(e);
            n.length > 0 && (i = i.concat(n))
        }
        )),
        i
    }
    function G(t, e) {
        return Q.getUserConsentDataFromCMP(),
        q.isObject(t) && q.isFunction(e) ? function() {
            q.log("In Refresh function"),
            de.updateSlotsMapFromGoogleSlots(t.getSlots(), arguments, !1);
            var i = L(arguments, t);
            de.forQualifyingSlotNamesCallAdapters(i, arguments, !0),
            q.log("Intiating Call to original refresh function with Timeout: " + K.getTimeout() + " ms");
            var n = arguments;
            "object" == typeof window.OWT.externalBidderStatuses[i[0]] && window.OWT.externalBidderStatuses[i[0]] && de.executeDisplay(K.getTimeout(), i, (function() {
                de.postTimeoutRefreshExecution(i, t, e, n)
            }
            )),
            setTimeout((function() {
                de.postTimeoutRefreshExecution(i, t, e, n)
            }
            ), K.getTimeout())
        }
        : (q.log("refresh: originalFunction is not a function"),
        null)
    }
    function W(t, e) {
        return q.isObject(t) && q.isFunction(e) ? function() {
            return ne[de.generateSlotName(this)] = arguments[0],
            e.apply(this, arguments)
        }
        : (q.log("newSizeMappingFunction: originalFunction is not a function"),
        null)
    }
    function U(t) {
        if (q.isObject(t) && q.isFunction(t.defineSlot)) {
            var e = t.defineSlot("/Harshad", [[728, 90]], "Harshad-02051986");
            if (e)
                return q.addHookOnFunction(e, !0, "defineSizeMapping", de.newSizeMappingFunction),
                t.destroySlots([e]),
                !0
        }
        return !1
    }
    function k(t) {
        if (q.isObject(t) && q.isObject(t.googletag) && q.isFunction(t.googletag.pubads)) {
            var e = t.googletag
              , i = e.pubads();
            return q.isObject(i) ? (de.addHookOnSlotDefineSizeMapping(e),
            q.addHookOnFunction(i, !1, "disableInitialLoad", de.newDisableInitialLoadFunction),
            q.addHookOnFunction(i, !1, "enableSingleRequest", de.newEnableSingleRequestFunction),
            de.newAddHookOnGoogletagDisplay(e),
            q.addHookOnFunction(i, !1, "refresh", de.newRefreshFuncton),
            q.addHookOnFunction(i, !1, "setTargeting", de.newSetTargetingFunction),
            q.addHookOnFunction(e, !1, "destroySlots", de.newDestroySlotsFunction),
            !0) : !1
        }
        return !1
    }
    function H(t) {
        return q.isObject(t) ? (t.googletag = t.googletag || {},
        t.googletag.cmd = t.googletag.cmd || [],
        !0) : !1
    }
    function z(t) {
        if (q.isUndefined(t.google_onload_fired) && q.isObject(t.googletag) && q.isArray(t.googletag.cmd) && q.isFunction(t.googletag.cmd.unshift)) {
            q.log("Succeeded to load before GPT");
            var e = this;
            return t.googletag.cmd.unshift((function() {
                q.log("OpenWrap initialization started"),
                e.addHooks(t),
                q.log("OpenWrap initialization completed")
            }
            )),
            !0
        }
        return q.log("Failed to load before GPT"),
        !1
    }
    function j(t) {
        return q.isObject(t) && q.isObject(t.PWT) && q.isFunction(t.PWT.jsLoaded) ? (t.PWT.jsLoaded(),
        !0) : !1
    }
    function V(t) {
        t.PWT.safeFrameMessageListenerAdded || (q.addMessageEventListenerForSafeFrame(t),
        t.PWT.safeFrameMessageListenerAdded = !0)
    }
    var K = i(4)
      , Y = i(2)
      , q = i(1)
      , J = i(6)
      , Q = i(7)
      , X = i(11)
      , Z = i(13)
      , $ = !1;
    e.displayHookIsAdded = $;
    var te = !1
      , ee = !0
      , ie = {};
    e.wrapperTargetingKeys = ie;
    var ne = {};
    e.slotSizeMapping = ne;
    var re = {};
    e.slotsMap = re;
    var ae = {}
      , oe = null
      , de = this;
    e.setWindowReference = n,
    e.getWindowReference = r,
    e.getAdUnitIndex = a,
    e.getSizeFromSizeMapping = o,
    e.getAdSlotSizesArray = d,
    e.setDisplayFunctionCalledIfRequired = s,
    e.storeInSlotsMap = p,
    e.generateSlotName = u,
    e.updateSlotsMapFromGoogleSlots = l,
    e.getStatusOfSlotForDivId = c,
    e.updateStatusAfterRendering = g,
    e.getSlotNamesByStatus = f,
    e.removeDMTargetingFromSlot = h,
    e.updateStatusOfQualifyingSlotsBeforeCallingAdapters = I,
    e.arrayOfSelectedSlots = m,
    e.defineWrapperTargetingKeys = w,
    e.findWinningBidAndApplyTargeting = E,
    e.defineWrapperTargetingKey = S,
    e.newDisableInitialLoadFunction = D,
    e.newEnableSingleRequestFunction = A,
    e.newSetTargetingFunction = T,
    e.newDestroySlotsFunction = _,
    e.updateStatusAndCallOriginalFunction_Display = b,
    e.findWinningBidIfRequired_Display = y,
    e.processDisplayCalledSlot = O,
    e.executeDisplay = P,
    e.displayFunctionStatusHandler = v,
    e.forQualifyingSlotNamesCallAdapters = x,
    e.newDisplayFunction = R,
    e.newAddHookOnGoogletagDisplay = M,
    e.findWinningBidIfRequired_Refresh = C,
    e.postRederingChores = B,
    e.postTimeoutRefreshExecution = N,
    e.callOriginalRefeshFunction = F,
    e.getQualifyingSlotNamesForRefresh = L,
    e.newRefreshFuncton = G,
    e.newSizeMappingFunction = W,
    e.addHookOnSlotDefineSizeMapping = U,
    e.addHooks = k,
    e.defineGPTVariables = H,
    e.addHooksIfPossible = z,
    e.callJsLoadedIfRequired = j,
    e.initSafeFrameListener = V,
    e.init = function(t) {
        return K.initConfig(),
        q.isObject(t) ? (de.setWindowReference(t),
        de.initSafeFrameListener(t),
        de.wrapperTargetingKeys = de.defineWrapperTargetingKeys(Y.WRAPPER_TARGETING_KEYS),
        de.defineGPTVariables(t),
        X.registerAdapters(),
        de.addHooksIfPossible(t),
        de.callJsLoadedIfRequired(t),
        !0) : !1
    }
}
), (function(t, e, i) {
    function n() {
        return Math.floor(100 * Math.random())
    }
    function r(t, e, i) {
        c.forEachOnObject(t, (function(t, n) {
            I.setInitTimeForSlotsForAdapter(e, t),
            n.fB(e, i)
        }
        ))
    }
    function a(t, e) {
        c.forEachOnArray(t, (function(t, i) {
            var n = i.getDivID();
            g.resetBid(n, e),
            g.setSizes(n, c.generateSlotNamesFromPattern(i, "_W_x_H_"))
        }
        ))
    }
    function o(t, e) {
        return !(t >= u.getAdapterThrottle(e))
    }
    function d(t, e) {
        c.forEachOnObject(t, (function(t, i) {
            g.setCallInitTime(i.getDivID(), e)
        }
        ))
    }
    function s(t) {
        if (t) {
            var e = t.ID();
            c.isFunction(t.fB) ? I.registeredAdapters[e] = t : c.log(e + l.MESSAGES.M3)
        } else
            c.log(l.MESSAGES.M3),
            c.log(t)
    }
    function p() {
        I.registerAdapter(f.register())
    }
    var u = i(4)
      , l = i(2)
      , c = i(1)
      , g = i(6)
      , f = i(12)
      , h = {};
    e.registeredAdapters = h;
    var I = this;
    e.callAdapters = function(t) {
        var e = c.generateUUID();
        I.resetSlots(t, e),
        I.callAdapter(h, t, e)
    }
    ,
    e.getRandomNumberBelow100 = n,
    e.callAdapter = r,
    e.resetSlots = a,
    e.throttleAdapter = o,
    e.setInitTimeForSlotsForAdapter = d,
    e.registerAdapter = s,
    e.registerAdapters = p
}
), (function(t, e, i) {
    function n(t, e) {
        var i = f.createBid(t.bidderCode, e)
          , n = parseInt(t.pubmaticServerErrorCode);
        return i.setGrossEcpm(t.cpm),
        i.setDealID(t.dealId),
        i.setDealChannel(t.dealChannel),
        i.setAdHtml(t.ad || ""),
        i.setAdUrl(t.adUrl || ""),
        i.setWidth(t.width),
        i.setHeight(t.height),
        i.setReceivedTime(t.responseTimestamp),
        1 === n || 2 === n ? (i.setDefaultBidStatus(0),
        i.setWidth(0),
        i.setHeight(0)) : 3 === n || 5 === n ? (i.setDefaultBidStatus(1),
        i.setPostTimeoutStatus()) : n && i.setDefaultBidStatus(1),
        h.forEachOnObject(t.adserverTargeting, (function(t, e) {
            "hb_format" !== t && "hb_source" !== t && i.setKeyValuePair(t, e)
        }
        )),
        i
    }
    function r(t) {
        var pbBid = t,
            util = h,
            CONFIG = c,
            refThis = D,
            bidManager = I
        ;

        var responseID = pbBid.adUnitCode || "";
        var divID = responseID;
        //var divID = refThis.kgpvMap[responseID].divID;//old
        var temp1 = refThis.getPBCodeWithWidthAndHeight(divID, pbBid.bidderCode, pbBid.width, pbBid.height);
        var temp2 = refThis.getPBCodeWithoutWidthAndHeight(divID, pbBid.bidderCode);

        if(util.isOwnProperty(refThis.kgpvMap, temp1)){
            responseID = temp1;
        }else if(util.isOwnProperty(refThis.kgpvMap, temp2)){
            responseID = temp2;
        }else{
            util.log('Failed to find kgpv details for S2S-adapter:'+ pbBid.bidderCode);
            return;
        }


        if(util.isOwnProperty(refThis.kgpvMap, responseID)){            

            /* istanbul ignore else */
            if(pbBid.bidderCode === 'pubmaticServer'){
                pbBid.bidderCode = pbBid.originalBidder;
            }

            /* istanbul ignore else */
            if(pbBid.bidderCode && CONFIG.isServerSideAdapter(pbBid.bidderCode)){
                //  we want to change the way we create prebid request adUnits,
                //      we are using code as a key in adUnits
                //      now we want to change key for adUnits to divID
                //      so simply changing code = divID
                /*
                var divID = responseID;
                //var divID = refThis.kgpvMap[responseID].divID;//old
                var temp1 = refThis.getPBCodeWithWidthAndHeight(divID, pbBid.bidderCode, pbBid.width, pbBid.height);
                var temp2 = refThis.getPBCodeWithoutWidthAndHeight(divID, pbBid.bidderCode);

                if(util.isOwnProperty(refThis.kgpvMap, temp1)){
                    responseID = temp1;
                }else if(util.isOwnProperty(refThis.kgpvMap, temp2)){
                    responseID = temp2;
                }else{
                    util.log('Failed to find kgpv details for S2S-adapter:'+ pbBid.bidderCode);
                    return;
                }
                */
            }

            /* istanbul ignore else */
            if(pbBid.bidderCode){
                bidManager.setBidFromBidder(
                    //refThis.kgpvMap[responseID].divID,
                    divID,
                    refThis.transformPBBidToOWBid(pbBid, refThis.kgpvMap[responseID].kgpv)
                );
            }
        }else{
            util.log('Failed to find pbBid.adUnitCode in kgpvMap, pbBid.adUnitCode:'+ pbBid.adUnitCode);
        }

        /*
        var e = t.adUnitCode || "";
        if (h.isOwnProperty(D.kgpvMap, e)) {
            if ("pubmaticServer" === t.bidderCode && (t.bidderCode = t.originalBidder),
            t.bidderCode && c.isServerSideAdapter(t.bidderCode)) {
                var i = D.kgpvMap[e].divID                
                  , n = D.getPBCodeWithWidthAndHeight(i, t.bidderCode, t.width, t.height)
                  , r = D.getPBCodeWithoutWidthAndHeight(i, t.bidderCode);
                if (h.isOwnProperty(D.kgpvMap, n))
                    e = n;
                else {
                    if (!h.isOwnProperty(D.kgpvMap, r))
                        return h.log("Failed to find kgpv details for S2S-adapter:" + t.bidderCode),
                        void 0;
                    e = r
                }
            }
            t.bidderCode && I.setBidFromBidder(D.kgpvMap[e].divID, D.transformPBBidToOWBid(t, D.kgpvMap[e].kgpv))
        } else
            h.log("Failed to find pbBid.adUnitCode in kgpvMap, pbBid.adUnitCode:" + t.adUnitCode)
        */    
    }
    function a(t) {
        for (var e in t)
            if (h.isOwnProperty(t, e) && h.isOwnProperty(D.kgpvMap, e))
                for (var i = t[e], r = i.bids || [], a = 0; a < r.length; a++) {
                    var o = r[a];
                    o.bidderCode && I.setBidFromBidder(D.kgpvMap[e].divID, n(o, D.kgpvMap[e].kgpv))
                }
    }
    function o(t, e, i, n) {
        return t + "@" + e + "@" + i + "X" + n
    }
    function d(t, e) {
        return t + "@" + e
    }
    function s(t, e, i, n, r, a, o, d, s, p) {
        var u, l, g = o.getDivID();
        if (a ? (u = D.getPBCodeWithWidthAndHeight(g, t, s, p),
        l = [[s, p]]) : (u = D.getPBCodeWithoutWidthAndHeight(g, t),
        l = o.getSizes()),
        D.kgpvMap[u] = {
            kgpv: r,
            divID: g
        },
        c.isServerSideAdapter(t))
            return h.log("Not calling adapter: " + t + ", for " + r + ", as it is serverSideEnabled."),
            void 0;

        u = g;    

        h.isOwnProperty(e, u) || (e[u] = {
            code: u,
            mediaType: "banner",
            sizes: l,
            bids: []
        });
        var f = {};
        switch (h.forEachOnObject(d, (function(t, e) {
            f[t] = e
        }
        )),
        t) {
        case "pubmaticServer":
            f.publisherId = i.publisherId,
            f.adUnitIndex = "" + o.getAdUnitIndex(),
            f.adUnitId = o.getAdUnitID(),
            f.divId = o.getDivID(),
            f.adSlot = r,
            f.wiid = n,
            f.profId = c.getProfileID(),
            window.PWT.udpv && (f.verId = c.getProfileDisplayVersionID()),
            e[u].bids.push({
                bidder: t,
                params: f
            });
            break;
        case "pubmatic":
            f.publisherId = i.publisherId,
            f.adSlot = r,
            f.wiid = n,
            f.profId = c.getProfileID(),
            window.PWT.udpv && (f.verId = c.getProfileDisplayVersionID()),
            e[u].bids.push({
                bidder: t,
                params: f
            });
            break;
        case "pulsepoint":
            h.forEachOnArray(l, (function(i, n) {
                var r = {};
                h.forEachOnObject(d, (function(t, e) {
                    r[t] = e
                }
                )),
                r.cf = n[0] + "x" + n[1],
                e[u].bids.push({
                    bidder: t,
                    params: r
                })
            }
            ));
            break;
        case "adg":
            h.forEachOnArray(l, (function(i, n) {
                var r = {};
                h.forEachOnObject(d, (function(t, e) {
                    r[t] = e
                }
                )),
                r.width = n[0],
                r.height = n[1],
                e[u].bids.push({
                    bidder: t,
                    params: r
                })
            }
            ));
            break;
        case "yieldlab":
            h.forEachOnArray(l, (function(i, n) {
                var r = {};
                h.forEachOnObject(d, (function(t, e) {
                    r[t] = e
                }
                )),
                r.adSize = n[0] + "x" + n[1],
                e[u].bids.push({
                    bidder: t,
                    params: r
                })
            }
            ));
            break;
        case "indexExchange":
            h.forEachOnArray(l, (function(i, n) {
                var r = {};
                d.siteID && (r.siteId = d.siteID),
                r.size = n,
                e[u].bids.push({
                    bidder: t,
                    params: r
                })
            }
            ));
            break;
        default:
            e[u].bids.push({
                bidder: t,
                params: f
            })
        }
    }
    function p(t, e, i, n, r) {
        h.log(t + g.MESSAGES.M1),
        e && h.forEachGeneratedKey(t, n, e, r, [], i, e[g.CONFIG.KEY_GENERATION_PATTERN], e[g.CONFIG.KEY_LOOKUP_MAP] || null, D.generatedKeyCallback, !0)
    }
    function u(t, e) {
        if (window.pwtCreatePrebidNamespace(E),
        !window[E])
            return h.log("PreBid js is not loaded"),
            void 0;
        if (!h.isFunction(window[E].onEvent))
            return h.log("PreBid js onEvent method is not available"),
            void 0;
        window[E].onEvent("bidResponse", D.pbBidStreamHandler),
        window[E].logging = h.isDebugLogEnabled();
        var i = {}
          , n = m.getRandomNumberBelow100();
        c.forEachAdapter((function(r, a) {
            r !== D.parentAdapterID && (c.isServerSideAdapter(r) || 0 == m.throttleAdapter(n, r) ? (m.setInitTimeForSlotsForAdapter(t, r),
            D.generatePbConf(r, a, t, i, e)) : h.log(r + g.MESSAGES.M2))
        }
        ));
        var r = [];
        for (var a in i)
            h.isOwnProperty(i, a) && r.push(i[a]);
        if (r.length > 0 && window[E])
            console.log("Calling Prebid with this config ", r);
            try {
                if (h.isFunction(window[E].setConfig)) {
                    var o = {
                        debug: h.isDebugLogEnabled(),
                        bidderSequence: "random",
                        userSync: {
                            iframeEnabled: !0,
                            pixelEnabled: !0,
                            enabledBidders: (function() {
                                var t = [];
                                return c.forEachAdapter((function(e) {
                                    t.push(e)
                                }
                                )),
                                t
                            }
                            )(),
                            syncDelay: 2e3
                        },
                        disableAjaxTimeout: c.getDisableAjaxTimeout()
                    };
                    c.getGdpr() && (o.consentManagement = {
                        cmpApi: c.getCmpApi(),
                        timeout: c.getGdprTimeout(),
                        allowAuctionWithoutConsent: c.getAwc()
                    }),
                    window[E].setConfig(o)
                }
                if (!h.isFunction(window[E].requestBids))
                    return h.log("PreBid js requestBids function is not available"),
                    void 0;
                window[E].requestBids({
                    adUnits: r,
                    bidsBackHandler: function(t) {
                        h.log("In PreBid bidsBackHandler with bidResponses: "),
                        h.log(t)
                    },
                    timeout: c.getTimeout() - 50
                })
            } catch (d) {
                h.log("Error occured in calling PreBid."),
                h.log(d)
            }
    }
    function l() {
        return D.parentAdapterID
    }
    var c = i(4)
      , g = i(2)
      , f = i(3)
      , h = i(1)
      , I = i(6)
      , m = i(11)
      , w = (i(5),
    g.COMMON.PARENT_ADAPTER_PREBID)
      , E = "pbjs";
    e.parentAdapterID = w;
    var S = {};
    e.kgpvMap = S;
    var D = this;
    e.transformPBBidToOWBid = n,
    e.pbBidStreamHandler = r,
    e.handleBidResponses = a,
    e.getPBCodeWithWidthAndHeight = o,
    e.getPBCodeWithoutWidthAndHeight = d,
    e.generatedKeyCallback = s,
    e.generatePbConf = p,
    e.fetchBids = u,
    e.getParenteAdapterID = l,
    e.register = function() {
        return {
            fB: D.fetchBids,
            ID: D.getParenteAdapterID
        }
    }
}
), (function(t, e, i) {
    function n(t) {
        this.name = t,
        this.status = r.SLOT_STATUS.CREATED,
        this.divID = "",
        this.adUnitID = "",
        this.adUnitIndex = 0,
        this.sizes = [],
        this.keyValues = {},
        this.arguments = [],
        this.pubAdServerObject = null,
        this.displayFunctionCalled = !1,
        this.refreshFunctionCalled = !1
    }
    var r = i(2);
    n.prototype.getName = function() {
        return this.name
    }
    ,
    n.prototype.setStatus = function(t) {
        return this.status = t,
        this
    }
    ,
    n.prototype.getStatus = function() {
        return this.status
    }
    ,
    n.prototype.setDivID = function(t) {
        return this.divID = t,
        this
    }
    ,
    n.prototype.getDivID = function() {
        return this.divID
    }
    ,
    n.prototype.setAdUnitID = function(t) {
        return this.adUnitID = t,
        this
    }
    ,
    n.prototype.getAdUnitID = function() {
        return this.adUnitID
    }
    ,
    n.prototype.setAdUnitIndex = function(t) {
        return this.adUnitIndex = t,
        this
    }
    ,
    n.prototype.getAdUnitIndex = function() {
        return this.adUnitIndex
    }
    ,
    n.prototype.setSizes = function(t) {
        return this.sizes = t,
        this
    }
    ,
    n.prototype.getSizes = function() {
        return this.sizes
    }
    ,
    n.prototype.setKeyValue = function(t, e) {
        return this.keyValues[t] = e,
        this
    }
    ,
    n.prototype.setKeyValues = function(t) {
        return this.keyValues = t,
        this
    }
    ,
    n.prototype.getkeyValues = function() {
        return this.keyValues
    }
    ,
    n.prototype.setArguments = function(t) {
        return this.arguments = t,
        this
    }
    ,
    n.prototype.getArguments = function() {
        return this.arguments
    }
    ,
    n.prototype.setPubAdServerObject = function(t) {
        return this.pubAdServerObject = t,
        this
    }
    ,
    n.prototype.getPubAdServerObject = function() {
        return this.pubAdServerObject
    }
    ,
    n.prototype.setDisplayFunctionCalled = function(t) {
        return this.displayFunctionCalled = t,
        this
    }
    ,
    n.prototype.isDisplayFunctionCalled = function() {
        return this.displayFunctionCalled
    }
    ,
    n.prototype.setRefreshFunctionCalled = function(t) {
        return this.refreshFunctionCalled = t,
        this
    }
    ,
    n.prototype.isRefreshFunctionCalled = function() {
        return this.refreshFunctionCalled
    }
    ,
    n.prototype.updateStatusAfterRendering = function(t) {
        this.status = r.SLOT_STATUS.DISPLAYED,
        this.arguments = [],
        t ? this.refreshFunctionCalled = !1 : this.displayFunctionCalled = !1
    }
    ,
    t.exports.Slot = n,
    e.createSlot = function(t) {
        return new n(t)
    }
}
)]);
