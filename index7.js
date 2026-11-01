/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var aa = " cannot be cast to "
  , ba = ", Size: "
  , ca = "//www.google.com/images/cleardot.gif"
  , da = ": "
  , ea = "<anonymous>"
  , fa = "BEST_EFFORT"
  , ia = "Browser is set to work offline."
  , ja = "Can't change state to "
  , ka = "Can't find variable: nc"
  , la = "Cancelled"
  , ma = "Client failure. "
  , na = "Complete"
  , oa = "Content-Type"
  , pa = "Create session failed"
  , qa = "Creating session"
  , ra = "Data received: "
  , sa = "Edge"
  , ta = "Error in protected function: "
  , va = "Ignoring callback for "
  , wa = "Invalid listener argument"
  , xa = "Missing error cause."
  , ya = "Not available"
  , za = "Not encoded with embedJspb."
  , Aa = "Object"
  , Ba = "POST"
  , Ca = "PUT"
  , Da = "Request object from transport callback not found in activeRequests"
  , Ea = "Request was aborted."
  , Fa = "Response doesn't match ArrayBuffer response type."
  , Ga = "SEVERE"
  , Ha = "Symbol.dispose"
  , Ia = "Symbol.iterator"
  , Ja = "This page must be iframed."
  , Ka = "Transfer failed"
  , La = "Transferring"
  , Ma = "Transient error"
  , Na = "Trying to send a request without a request sender for - "
  , Oa = "Unhandled "
  , Pa = "WAITING_FOR_READY"
  , Qa = "WAITING_FOR_RETRY"
  , Ra = "WorkerGlobalScope"
  , Sa = "X-Goog-Upload-Status"
  , Ta = "[...long stack...]"
  , Ua = "[exception trying to get caller]\n"
  , Va = "apps_telemetry.cross_origin_scripts"
  , Wa = "apps_telemetry.handling_error"
  , Xa = "apps_telemetry.incoming_severity"
  , Ya = "apps_telemetry.native_function_tampering."
  , Za = "apps_telemetry.native_function_tampering_detected"
  , $a = "apps_telemetry.outgoing_severity"
  , ab = "apps_telemetry.processed"
  , bb = "arraybuffer"
  , cb = "awesomium"
  , db = "base64"
  , eb = "bigint"
  , fb = "boolean"
  , gb = "cancel"
  , hb = "complete"
  , ib = "destroyedStructure"
  , jb = "document"
  , kb = "error"
  , lb = "fatal"
  , mb = "fava.request.Request"
  , nb = "fava.request.RequestQueue"
  , ob = "fromIndex: "
  , k = "function"
  , pb = "goog.Promise.then"
  , qb = "http://www.w3.org/2000/svg"
  , rb = "https://"
  , sb = "incident"
  , tb = "info_params"
  , ub = "injection-failed"
  , vb = "jsaction"
  , wb = "kaspersky-labs"
  , xb = "knownMessageType"
  , yb = "neurosurgeonundergo"
  , zb = "non_function_type"
  , Ab = "null"
  , m = "number"
  , q = "object"
  , Bb = "opt_onFulfilled should be a function."
  , Cb = "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?"
  , Db = "postmortem"
  , Eb = "progress"
  , Fb = "ready"
  , Gb = "responseObject"
  , Hb = "return"
  , Ib = "select-multiple"
  , Jb = "severity"
  , Kb = "severity-unprefixed"
  , Lb = "signal is aborted without reason"
  , Mb = "span ids must have the same number of literals and params"
  , t = "state is only maintained on arrays."
  , v = "string"
  , Nb = "symbol"
  , Ob = "text"
  , Pb = "true"
  , Qb = "uncaught error"
  , Rb = "unhandledrejection"
  , Sb = "unknown"
  , Tb = "unknown type name"
  , Ub = "unknownBinaryThrottleKey"
  , Vb = "warning"
  , Wb = "warningafterdeath"
  , Xb = "withCredentials";
function Yb() {
    return function(a) {
        return a
    }
}
function Zb() {
    return function() {}
}
function $b(a) {
    return function(b) {
        this[a] = b
    }
}
function bc(a) {
    return function() {
        return this[a]
    }
}
function x(a) {
    return function() {
        return a
    }
}
var y, cc = typeof Object.create == k ? Object.create : function(a) {
    function b() {}
    b.prototype = a;
    return new b
}
, dc = typeof Object.defineProperties == k ? Object.defineProperty : function(a, b, c) {
    if (a == Array.prototype || a == Object.prototype)
        return a;
    a[b] = c.value;
    return a
}
;
function ec(a) {
    a = [q == typeof globalThis && globalThis, a, q == typeof window && window, q == typeof self && self, q == typeof global && global];
    for (var b = 0; b < a.length; ++b) {
        var c = a[b];
        if (c && c.Math == Math)
            return c
    }
    throw Error("Cannot find global object");
}
var fc = ec(this);
function z(a, b) {
    if (b)
        a: {
            var c = fc;
            a = a.split(".");
            for (var d = 0; d < a.length - 1; d++) {
                var e = a[d];
                if (!(e in c))
                    break a;
                c = c[e]
            }
            a = a[a.length - 1];
            d = c[a];
            b = b(d);
            b != d && b != null && dc(c, a, {
                configurable: !0,
                writable: !0,
                value: b
            })
        }
}
var hc;
if (typeof Object.setPrototypeOf == k)
    hc = Object.setPrototypeOf;
else {
    var ic;
    a: {
        var jc = {
            a: !0
        }
          , kc = {};
        try {
            kc.__proto__ = jc;
            ic = kc.a;
            break a
        } catch (a) {}
        ic = !1
    }
    hc = ic ? function(a, b) {
        a.__proto__ = b;
        if (a.__proto__ !== b)
            throw new TypeError(a + " is not extensible");
        return a
    }
    : null
}
var lc = hc;
function A(a, b) {
    a.prototype = cc(b.prototype);
    a.prototype.constructor = a;
    if (lc)
        lc(a, b);
    else
        for (var c in b)
            if (c != "prototype")
                if (Object.defineProperties) {
                    var d = Object.getOwnPropertyDescriptor(b, c);
                    d && Object.defineProperty(a, c, d)
                } else
                    a[c] = b[c];
    a.pa = b.prototype
}
function mc(a) {
    var b = 0;
    return function() {
        return b < a.length ? {
            done: !1,
            value: a[b++]
        } : {
            done: !0
        }
    }
}
function C(a) {
    var b = typeof Symbol != "undefined" && Symbol.iterator && a[Symbol.iterator];
    if (b)
        return b.call(a);
    if (typeof a.length == m)
        return {
            next: mc(a)
        };
    throw Error(String(a) + " is not an iterable or ArrayLike");
}
function nc(a) {
    for (var b, c = []; !(b = a.next()).done; )
        c.push(b.value);
    return c
}
function oc(a) {
    return a instanceof Array ? a : nc(C(a))
}
function pc(a) {
    return qc(a, a)
}
function qc(a, b) {
    a.raw = b;
    Object.freeze && (Object.freeze(a),
    Object.freeze(b));
    return a
}
function rc(a, b) {
    var c;
    b && !b.done && (c = a[Hb]) && c.call(a)
}
function sc(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b)
}
var tc = typeof Object.assign == k ? Object.assign : function(a, b) {
    if (a == null)
        throw new TypeError("No nullish arg");
    a = Object(a);
    for (var c = 1; c < arguments.length; c++) {
        var d = arguments[c];
        if (d)
            for (var e in d)
                sc(d, e) && (a[e] = d[e])
    }
    return a
}
;
z("Object.assign", function(a) {
    return a || tc
});
function uc(a) {
    if (!(a instanceof Object))
        throw new TypeError("Iterator result " + a + " is not an object");
}
function D() {
    this.B = !1;
    this.o = null;
    this.C = void 0;
    this.j = 1;
    this.v = this.A = 0;
    this.G = this.l = null
}
function vc(a) {
    if (a.B)
        throw new TypeError("Generator is already running");
    a.B = !0
}
D.prototype.D = $b("C");
function wc(a, b) {
    a.l = {
        Uc: b,
        dd: !0
    };
    a.j = a.A || a.v
}
D.prototype.getNextAddressJsc = bc("j");
D.prototype.getYieldResultJsc = bc("C");
D.prototype.return = function(a) {
    this.l = {
        return: a
    };
    this.j = this.v
}
;
D.prototype[Hb] = D.prototype.return;
D.prototype.L = function(a) {
    this.l = {
        Xa: a
    };
    this.v < a ? (this.j = a,
    this.l = null) : this.j = this.v
}
;
D.prototype.jumpThroughFinallyBlocks = D.prototype.L;
D.prototype.M = function(a, b) {
    this.j = b;
    return {
        value: a
    }
}
;
D.prototype.yield = D.prototype.M;
D.prototype.Z = function(a, b) {
    a = C(a);
    var c = a.next();
    uc(c);
    if (c.done)
        this.C = c.value,
        this.j = b;
    else
        return this.o = a,
        this.M(c.value, b)
}
;
D.prototype.yieldAll = D.prototype.Z;
D.prototype.Xa = $b("j");
D.prototype.jumpTo = D.prototype.Xa;
D.prototype.P = function() {
    this.j = 0
}
;
D.prototype.jumpToEnd = D.prototype.P;
D.prototype.J = function(a, b) {
    this.A = a;
    b != void 0 && (this.v = b)
}
;
D.prototype.setCatchFinallyBlocks = D.prototype.J;
D.prototype.Y = function(a) {
    this.A = 0;
    this.v = a || 0
}
;
D.prototype.setFinallyBlock = D.prototype.Y;
D.prototype.U = function(a, b) {
    this.j = a;
    this.A = b || 0
}
;
D.prototype.leaveTryBlock = D.prototype.U;
D.prototype.H = function(a) {
    this.A = a || 0;
    a = this.l.Uc;
    this.l = null;
    return a
}
;
D.prototype.enterCatchBlock = D.prototype.H;
D.prototype.X = function(a, b, c) {
    c ? this.G[c] = this.l : this.G = [this.l];
    this.A = a || 0;
    this.v = b || 0;
    this.l = null
}
;
D.prototype.enterFinallyBlock = D.prototype.X;
D.prototype.I = function(a, b) {
    b = this.G.splice(b || 0)[0];
    (b = this.l = this.l || b) ? b.dd ? this.j = this.A || this.v : b.Xa != void 0 && this.v < b.Xa ? (this.j = b.Xa,
    this.l = null) : this.j = this.v : this.j = a
}
;
D.prototype.leaveFinallyBlock = D.prototype.I;
D.prototype.N = function(a) {
    return new xc(a)
}
;
D.prototype.forIn = D.prototype.N;
function xc(a) {
    this.o = a;
    this.j = [];
    for (var b in a)
        this.j.push(b);
    this.j.reverse()
}
xc.prototype.l = function() {
    for (; this.j.length > 0; ) {
        var a = this.j.pop();
        if (a in this.o)
            return a
    }
    return null
}
;
xc.prototype.getNext = xc.prototype.l;
function yc(a) {
    this.j = new D;
    this.l = a
}
function zc(a, b) {
    vc(a.j);
    var c = a.j.o;
    if (c)
        return Ac(a, Hb in c ? c[Hb] : function(d) {
            return {
                value: d,
                done: !0
            }
        }
        , b, a.j.return);
    a.j.return(b);
    return Bc(a)
}
function Ac(a, b, c, d) {
    try {
        var e = b.call(a.j.o, c);
        uc(e);
        if (!e.done)
            return a.j.B = !1,
            e;
        var f = e.value
    } catch (g) {
        return a.j.o = null,
        wc(a.j, g),
        Bc(a)
    }
    a.j.o = null;
    d.call(a.j, f);
    return Bc(a)
}
function Bc(a) {
    for (; a.j.j; )
        try {
            var b = a.l(a.j);
            if (b)
                return a.j.B = !1,
                {
                    value: b.value,
                    done: !1
                }
        } catch (c) {
            a.j.C = void 0,
            wc(a.j, c)
        }
    a.j.B = !1;
    if (a.j.l) {
        b = a.j.l;
        a.j.l = null;
        if (b.dd)
            throw b.Uc;
        return {
            value: b.return,
            done: !0
        }
    }
    return {
        value: void 0,
        done: !0
    }
}
function Cc(a) {
    this.next = function(b) {
        vc(a.j);
        a.j.o ? b = Ac(a, a.j.o.next, b, a.j.D) : (a.j.D(b),
        b = Bc(a));
        return b
    }
    ;
    this.throw = function(b) {
        vc(a.j);
        if (a.j.o) {
            var c = a.j.o["throw"];
            if (c)
                var d = Ac(a, c, b, a.j.D);
            else {
                b = a.j.o;
                a.j.o = null;
                try {
                    b[Hb] && (d = b[Hb](),
                    uc(d)),
                    wc(a.j, new TypeError("The iterator does not provide a 'throw' method."))
                } catch (e) {
                    wc(a.j, e)
                }
                d = Bc(a)
            }
        } else
            wc(a.j, b),
            d = Bc(a);
        return d
    }
    ;
    this.return = function(b) {
        return zc(a, b)
    }
    ;
    this[Symbol.iterator] = function() {
        return this
    }
}
function Dc(a) {
    function b(d) {
        return a.next(d)
    }
    function c(d) {
        return a.throw(d)
    }
    return new Promise(function(d, e) {
        function f(g) {
            g.done ? d(g.value) : Promise.resolve(g.value).then(b, c).then(f, e)
        }
        f(a.next())
    }
    )
}
function Ec() {
    for (var a = Number(this), b = [], c = a; c < arguments.length; c++)
        b[c - a] = arguments[c];
    return b
}
z("globalThis", function(a) {
    return a || fc
});
z("Reflect.setPrototypeOf", function(a) {
    return a ? a : lc ? function(b, c) {
        try {
            return lc(b, c),
            !0
        } catch (d) {
            return !1
        }
    }
    : null
});
z("Symbol", function(a) {
    function b(f) {
        if (this instanceof b)
            throw new TypeError("Symbol is not a constructor");
        return new c(d + (f || "") + "_" + e++,f)
    }
    function c(f, g) {
        this.j = f;
        dc(this, "description", {
            configurable: !0,
            writable: !0,
            value: g
        })
    }
    if (a)
        return a;
    c.prototype.toString = bc("j");
    var d = "jscomp_symbol_" + (Math.random() * 1E9 >>> 0) + "_"
      , e = 0;
    return b
});
z(Ia, function(a) {
    if (a)
        return a;
    a = Symbol(Ia);
    dc(Array.prototype, a, {
        configurable: !0,
        writable: !0,
        value: function() {
            return Fc(mc(this))
        }
    });
    return a
});
function Fc(a) {
    var b = (typeof Iterator != "undefined" && Iterator.prototype && !Iterator.prototype.next ? Iterator.prototype : null) || Object.prototype
      , c = cc(b);
    c.next = a;
    b[Symbol.iterator] || (c[Symbol.iterator] = function() {
        return this
    }
    );
    return c
}
z("Promise", function(a) {
    function b(g) {
        this.j = 0;
        this.o = void 0;
        this.l = [];
        this.C = !1;
        var h = this.v();
        try {
            g(h.resolve, h.reject)
        } catch (l) {
            h.reject(l)
        }
    }
    function c() {
        this.j = null
    }
    function d(g) {
        return g instanceof b ? g : new b(function(h) {
            h(g)
        }
        )
    }
    if (a)
        return a;
    c.prototype.l = function(g) {
        if (this.j == null) {
            this.j = [];
            var h = this;
            this.o(function() {
                h.A()
            })
        }
        this.j.push(g)
    }
    ;
    var e = fc.setTimeout;
    c.prototype.o = function(g) {
        e(g, 0)
    }
    ;
    c.prototype.A = function() {
        for (; this.j && this.j.length; ) {
            var g = this.j;
            this.j = [];
            for (var h = 0; h < g.length; ++h) {
                var l = g[h];
                g[h] = null;
                try {
                    l()
                } catch (n) {
                    this.v(n)
                }
            }
        }
        this.j = null
    }
    ;
    c.prototype.v = function(g) {
        this.o(function() {
            throw g;
        })
    }
    ;
    b.prototype.v = function() {
        function g(n) {
            return function(p) {
                l || (l = !0,
                n.call(h, p))
            }
        }
        var h = this
          , l = !1;
        return {
            resolve: g(this.X),
            reject: g(this.A)
        }
    }
    ;
    b.prototype.X = function(g) {
        if (g === this)
            this.A(new TypeError("A Promise cannot resolve to itself"));
        else if (g instanceof b)
            this.J(g);
        else {
            a: switch (typeof g) {
            case q:
                var h = g != null;
                break a;
            case k:
                h = !0;
                break a;
            default:
                h = !1
            }
            h ? this.H(g) : this.B(g)
        }
    }
    ;
    b.prototype.H = function(g) {
        var h = void 0;
        try {
            h = g.then
        } catch (l) {
            this.A(l);
            return
        }
        typeof h == k ? this.N(h, g) : this.B(g)
    }
    ;
    b.prototype.A = function(g) {
        this.D(2, g)
    }
    ;
    b.prototype.B = function(g) {
        this.D(1, g)
    }
    ;
    b.prototype.D = function(g, h) {
        if (this.j != 0)
            throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.j);
        this.j = g;
        this.o = h;
        this.j === 2 && this.I();
        this.M()
    }
    ;
    b.prototype.I = function() {
        var g = this;
        e(function() {
            if (g.G()) {
                var h = fc.console;
                typeof h !== "undefined" && h.error(g.o)
            }
        }, 1)
    }
    ;
    b.prototype.G = function() {
        if (this.C)
            return !1;
        var g = fc.CustomEvent
          , h = fc.Event
          , l = fc.dispatchEvent;
        if (typeof l === "undefined")
            return !0;
        typeof g === k ? g = new g(Rb,{
            cancelable: !0
        }) : typeof h === k ? g = new h(Rb,{
            cancelable: !0
        }) : (g = fc.document.createEvent("CustomEvent"),
        g.initCustomEvent(Rb, !1, !0, g));
        g.promise = this;
        g.reason = this.o;
        return l(g)
    }
    ;
    b.prototype.M = function() {
        if (this.l != null) {
            for (var g = 0; g < this.l.length; ++g)
                f.l(this.l[g]);
            this.l = null
        }
    }
    ;
    var f = new c;
    b.prototype.J = function(g) {
        var h = this.v();
        g.xb(h.resolve, h.reject)
    }
    ;
    b.prototype.N = function(g, h) {
        var l = this.v();
        try {
            g.call(h, l.resolve, l.reject)
        } catch (n) {
            l.reject(n)
        }
    }
    ;
    b.prototype.then = function(g, h) {
        function l(u, w) {
            return typeof u == k ? function(O) {
                try {
                    n(u(O))
                } catch (B) {
                    p(B)
                }
            }
            : w
        }
        var n, p, r = new b(function(u, w) {
            n = u;
            p = w
        }
        );
        this.xb(l(g, n), l(h, p));
        return r
    }
    ;
    b.prototype.catch = function(g) {
        return this.then(void 0, g)
    }
    ;
    b.prototype.xb = function(g, h) {
        function l() {
            switch (n.j) {
            case 1:
                g(n.o);
                break;
            case 2:
                h(n.o);
                break;
            default:
                throw Error("Unexpected state: " + n.j);
            }
        }
        var n = this;
        this.l == null ? f.l(l) : this.l.push(l);
        this.C = !0
    }
    ;
    b.resolve = d;
    b.reject = function(g) {
        return new b(function(h, l) {
            l(g)
        }
        )
    }
    ;
    b.race = function(g) {
        return new b(function(h, l) {
            for (var n = C(g), p = n.next(); !p.done; p = n.next())
                d(p.value).xb(h, l)
        }
        )
    }
    ;
    b.all = function(g) {
        var h = C(g)
          , l = h.next();
        return l.done ? d([]) : new b(function(n, p) {
            function r(O) {
                return function(B) {
                    u[O] = B;
                    w--;
                    w == 0 && n(u)
                }
            }
            var u = []
              , w = 0;
            do
                u.push(void 0),
                w++,
                d(l.value).xb(r(u.length - 1), p),
                l = h.next();
            while (!l.done)
        }
        )
    }
    ;
    return b
});
z("WeakMap", function(a) {
    function b(l) {
        this.j = (h += Math.random() + 1).toString();
        if (l) {
            l = C(l);
            for (var n; !(n = l.next()).done; )
                n = n.value,
                this.set(n[0], n[1])
        }
    }
    function c() {}
    function d(l) {
        var n = typeof l;
        return n === q && l !== null || n === k
    }
    function e(l) {
        if (!sc(l, g)) {
            var n = new c;
            dc(l, g, {
                value: n
            })
        }
    }
    function f(l) {
        var n = Object[l];
        n && (Object[l] = function(p) {
            if (p instanceof c)
                return p;
            Object.isExtensible(p) && e(p);
            return n(p)
        }
        )
    }
    if (function() {
        if (!a || !Object.seal)
            return !1;
        try {
            var l = Object.seal({})
              , n = Object.seal({})
              , p = new a([[l, 2], [n, 3]]);
            if (p.get(l) != 2 || p.get(n) != 3)
                return !1;
            p.delete(l);
            p.set(n, 4);
            return !p.has(l) && p.get(n) == 4
        } catch (r) {
            return !1
        }
    }())
        return a;
    var g = "$jscomp_hidden_" + Math.random();
    f("freeze");
    f("preventExtensions");
    f("seal");
    var h = 0;
    b.prototype.set = function(l, n) {
        if (!d(l))
            throw Error("Invalid WeakMap key");
        e(l);
        if (!sc(l, g))
            throw Error("WeakMap key fail: " + l);
        l[g][this.j] = n;
        return this
    }
    ;
    b.prototype.get = function(l) {
        return d(l) && sc(l, g) ? l[g][this.j] : void 0
    }
    ;
    b.prototype.has = function(l) {
        return d(l) && sc(l, g) && sc(l[g], this.j)
    }
    ;
    b.prototype.delete = function(l) {
        return d(l) && sc(l, g) && sc(l[g], this.j) ? delete l[g][this.j] : !1
    }
    ;
    return b
});
z("Map", function(a) {
    function b() {
        var h = {};
        return h.ya = h.next = h.head = h
    }
    function c(h, l) {
        var n = h[1];
        return Fc(function() {
            if (n) {
                for (; n.head != h[1]; )
                    n = n.ya;
                for (; n.next != n.head; )
                    return n = n.next,
                    {
                        done: !1,
                        value: l(n)
                    };
                n = null
            }
            return {
                done: !0,
                value: void 0
            }
        })
    }
    function d(h, l) {
        var n = l && typeof l;
        n == q || n == k ? f.has(l) ? n = f.get(l) : (n = "" + ++g,
        f.set(l, n)) : n = "p_" + l;
        var p = h[0][n];
        if (p && sc(h[0], n))
            for (h = 0; h < p.length; h++) {
                var r = p[h];
                if (l !== l && r.key !== r.key || l === r.key)
                    return {
                        id: n,
                        list: p,
                        index: h,
                        entry: r
                    }
            }
        return {
            id: n,
            list: p,
            index: -1,
            entry: void 0
        }
    }
    function e(h) {
        this[0] = {};
        this[1] = b();
        this.size = 0;
        if (h) {
            h = C(h);
            for (var l; !(l = h.next()).done; )
                l = l.value,
                this.set(l[0], l[1])
        }
    }
    if (function() {
        if (!a || typeof a != k || !a.prototype.entries || typeof Object.seal != k)
            return !1;
        try {
            var h = Object.seal({
                x: 4
            })
              , l = new a(C([[h, "s"]]));
            if (l.get(h) != "s" || l.size != 1 || l.get({
                x: 4
            }) || l.set({
                x: 4
            }, "t") != l || l.size != 2)
                return !1;
            var n = l.entries()
              , p = n.next();
            if (p.done || p.value[0] != h || p.value[1] != "s")
                return !1;
            p = n.next();
            return p.done || p.value[0].x != 4 || p.value[1] != "t" || !n.next().done ? !1 : !0
        } catch (r) {
            return !1
        }
    }())
        return a;
    var f = new WeakMap;
    e.prototype.set = function(h, l) {
        h = h === 0 ? 0 : h;
        var n = d(this, h);
        n.list || (n.list = this[0][n.id] = []);
        n.entry ? n.entry.value = l : (n.entry = {
            next: this[1],
            ya: this[1].ya,
            head: this[1],
            key: h,
            value: l
        },
        n.list.push(n.entry),
        this[1].ya.next = n.entry,
        this[1].ya = n.entry,
        this.size++);
        return this
    }
    ;
    e.prototype.delete = function(h) {
        h = d(this, h);
        return h.entry && h.list ? (h.list.splice(h.index, 1),
        h.list.length || delete this[0][h.id],
        h.entry.ya.next = h.entry.next,
        h.entry.next.ya = h.entry.ya,
        h.entry.head = null,
        this.size--,
        !0) : !1
    }
    ;
    e.prototype.clear = function() {
        this[0] = {};
        this[1] = this[1].ya = b();
        this.size = 0
    }
    ;
    e.prototype.has = function(h) {
        return !!d(this, h).entry
    }
    ;
    e.prototype.get = function(h) {
        return (h = d(this, h).entry) && h.value
    }
    ;
    e.prototype.entries = function() {
        return c(this, function(h) {
            return [h.key, h.value]
        })
    }
    ;
    e.prototype.keys = function() {
        return c(this, function(h) {
            return h.key
        })
    }
    ;
    e.prototype.values = function() {
        return c(this, function(h) {
            return h.value
        })
    }
    ;
    e.prototype.forEach = function(h, l) {
        for (var n = this.entries(), p; !(p = n.next()).done; )
            p = p.value,
            h.call(l, p[1], p[0], this)
    }
    ;
    e.prototype[Symbol.iterator] = e.prototype.entries;
    var g = 0;
    return e
});
z("Object.is", function(a) {
    return a ? a : function(b, c) {
        return b === c ? b !== 0 || 1 / b === 1 / c : b !== b && c !== c
    }
});
z("Object.setPrototypeOf", function(a) {
    return a || lc
});
z(Ha, function(a) {
    return a ? a : Symbol(Ha)
});
z("Set", function(a) {
    function b(c) {
        this.j = new Map;
        if (c) {
            c = C(c);
            for (var d; !(d = c.next()).done; )
                this.add(d.value)
        }
        this.size = this.j.size
    }
    if (function() {
        if (!a || typeof a != k || !a.prototype.entries || typeof Object.seal != k)
            return !1;
        try {
            var c = Object.seal({
                x: 4
            })
              , d = new a(C([c]));
            if (!d.has(c) || d.size != 1 || d.add(c) != d || d.size != 1 || d.add({
                x: 4
            }) != d || d.size != 2)
                return !1;
            var e = d.entries()
              , f = e.next();
            if (f.done || f.value[0] != c || f.value[1] != c)
                return !1;
            f = e.next();
            return f.done || f.value[0] == c || f.value[0].x != 4 || f.value[1] != f.value[0] ? !1 : e.next().done
        } catch (g) {
            return !1
        }
    }())
        return a;
    b.prototype.add = function(c) {
        c = c === 0 ? 0 : c;
        this.j.set(c, c);
        this.size = this.j.size;
        return this
    }
    ;
    b.prototype.delete = function(c) {
        c = this.j.delete(c);
        this.size = this.j.size;
        return c
    }
    ;
    b.prototype.clear = function() {
        this.j.clear();
        this.size = 0
    }
    ;
    b.prototype.has = function(c) {
        return this.j.has(c)
    }
    ;
    b.prototype.entries = function() {
        return this.j.entries()
    }
    ;
    b.prototype.values = function() {
        return this.j.values()
    }
    ;
    b.prototype.keys = b.prototype.values;
    b.prototype[Symbol.iterator] = b.prototype.values;
    b.prototype.forEach = function(c, d) {
        var e = this;
        this.j.forEach(function(f) {
            return c.call(d, f, f, e)
        })
    }
    ;
    return b
});
z("Array.from", function(a) {
    return a ? a : function(b, c, d) {
        c = c != null ? c : Yb();
        var e = []
          , f = typeof Symbol != "undefined" && Symbol.iterator && b[Symbol.iterator];
        if (typeof f == k) {
            b = f.call(b);
            for (var g = 0; !(f = b.next()).done; )
                e.push(c.call(d, f.value, g++))
        } else
            for (f = b.length,
            g = 0; g < f; g++)
                e.push(c.call(d, b[g], g));
        return e
    }
});
z("Object.entries", function(a) {
    return a ? a : function(b) {
        var c = [], d;
        for (d in b)
            sc(b, d) && c.push([d, b[d]]);
        return c
    }
});
z("Number.isFinite", function(a) {
    return a ? a : function(b) {
        return typeof b !== m ? !1 : !isNaN(b) && b !== Infinity && b !== -Infinity
    }
});
z("Number.MAX_SAFE_INTEGER", x(9007199254740991));
z("Number.MIN_SAFE_INTEGER", x(-9007199254740991));
z("Number.isInteger", function(a) {
    return a ? a : function(b) {
        return Number.isFinite(b) ? b === Math.floor(b) : !1
    }
});
z("Number.isSafeInteger", function(a) {
    return a ? a : function(b) {
        return Number.isInteger(b) && Math.abs(b) <= Number.MAX_SAFE_INTEGER
    }
});
function Gc(a, b, c) {
    if (a == null)
        throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
    if (b instanceof RegExp)
        throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
    return a + ""
}
z("String.prototype.startsWith", function(a) {
    return a ? a : function(b, c) {
        var d = Gc(this, b, "startsWith");
        b += "";
        var e = d.length
          , f = b.length;
        c = Math.max(0, Math.min(c | 0, d.length));
        for (var g = 0; g < f && c < e; )
            if (d[c++] != b[g++])
                return !1;
        return g >= f
    }
});
z("String.prototype.endsWith", function(a) {
    return a ? a : function(b, c) {
        var d = Gc(this, b, "endsWith");
        b += "";
        c === void 0 && (c = d.length);
        c = Math.max(0, Math.min(c | 0, d.length));
        for (var e = b.length; e > 0 && c > 0; )
            if (d[--c] != b[--e])
                return !1;
        return e <= 0
    }
});
z("Array.prototype.includes", function(a) {
    return a ? a : function(b, c) {
        var d = this;
        d instanceof String && (d = String(d));
        var e = d.length;
        c = c || 0;
        for (c < 0 && (c = Math.max(c + e, 0)); c < e; c++) {
            var f = d[c];
            if (f === b || Object.is(f, b))
                return !0
        }
        return !1
    }
});
z("String.prototype.includes", function(a) {
    return a ? a : function(b, c) {
        return Gc(this, b, "includes").indexOf(b, c || 0) !== -1
    }
});
function Hc(a, b) {
    a instanceof String && (a += "");
    var c = 0
      , d = !1;
    return Fc(function() {
        if (!d && c < a.length) {
            var e = c++;
            return {
                value: b(e, a[e]),
                done: !1
            }
        }
        d = !0;
        return {
            done: !0,
            value: void 0
        }
    })
}
z("Array.prototype.entries", function(a) {
    return a ? a : function() {
        return Hc(this, function(b, c) {
            return [b, c]
        })
    }
});
z("Math.imul", function(a) {
    return a ? a : function(b, c) {
        b = Number(b);
        c = Number(c);
        var d = b & 65535
          , e = c & 65535;
        return d * e + ((b >>> 16 & 65535) * e + d * (c >>> 16 & 65535) << 16 >>> 0) | 0
    }
});
z("Array.prototype.values", function(a) {
    return a ? a : function() {
        return Hc(this, function(b, c) {
            return c
        })
    }
});
z("Math.trunc", function(a) {
    return a ? a : function(b) {
        b = Number(b);
        if (isNaN(b) || b === Infinity || b === -Infinity || b === 0)
            return b;
        var c = Math.floor(Math.abs(b));
        return b < 0 ? -c : c
    }
});
z("String.fromCodePoint", function(a) {
    return a ? a : function(b) {
        for (var c = "", d = 0; d < arguments.length; d++) {
            var e = Number(arguments[d]);
            if (e < 0 || e > 1114111 || e !== Math.floor(e))
                throw new RangeError("invalid_code_point " + e);
            e <= 65535 ? c += String.fromCharCode(e) : (e -= 65536,
            c += String.fromCharCode(e >>> 10 & 1023 | 55296),
            c += String.fromCharCode(e & 1023 | 56320))
        }
        return c
    }
});
z("Array.prototype.find", function(a) {
    return a ? a : function(b, c) {
        a: {
            var d = this;
            d instanceof String && (d = String(d));
            for (var e = d.length, f = 0; f < e; f++) {
                var g = d[f];
                if (b.call(c, g, f, d)) {
                    b = g;
                    break a
                }
            }
            b = void 0
        }
        return b
    }
});
z("Math.log2", function(a) {
    return a ? a : function(b) {
        return Math.log(b) / Math.LN2
    }
});
z("Object.values", function(a) {
    return a ? a : function(b) {
        var c = [], d;
        for (d in b)
            sc(b, d) && c.push(b[d]);
        return c
    }
});
z("Number.isNaN", function(a) {
    return a ? a : function(b) {
        return typeof b === m && isNaN(b)
    }
});
z("Array.prototype.keys", function(a) {
    return a ? a : function() {
        return Hc(this, Yb())
    }
});
z("WeakSet", function(a) {
    function b(c) {
        this.j = new WeakMap;
        if (c) {
            c = C(c);
            for (var d; !(d = c.next()).done; )
                this.add(d.value)
        }
    }
    if (function() {
        if (!a || !Object.seal)
            return !1;
        try {
            var c = Object.seal({})
              , d = Object.seal({})
              , e = new a([c]);
            if (!e.has(c) || e.has(d))
                return !1;
            e.delete(c);
            e.add(d);
            return !e.has(c) && e.has(d)
        } catch (f) {
            return !1
        }
    }())
        return a;
    b.prototype.add = function(c) {
        this.j.set(c, !0);
        return this
    }
    ;
    b.prototype.has = function(c) {
        return this.j.has(c)
    }
    ;
    b.prototype.delete = function(c) {
        return this.j.delete(c)
    }
    ;
    return b
});
z("Object.hasOwn", function(a) {
    return a ? a : function(b, c) {
        return Object.prototype.hasOwnProperty.call(b, c)
    }
});
z("String.prototype.matchAll", function(a) {
    return a ? a : function(b) {
        if (b instanceof RegExp && !b.global)
            throw new TypeError("RegExp passed into String.prototype.matchAll() must have global tag.");
        var c = new RegExp(b,b instanceof RegExp ? void 0 : "g");
        b instanceof RegExp && (c.lastIndex = b.lastIndex);
        var d = this
          , e = !1;
        return Fc(function() {
            if (e)
                return {
                    value: void 0,
                    done: !0
                };
            var f = c.exec(d);
            if (!f)
                return e = !0,
                {
                    value: void 0,
                    done: !0
                };
            f[0] === "" && (c.lastIndex += 1);
            return {
                value: f,
                done: !1
            }
        })
    }
});
var Ic = Ic || {}
  , E = this || self;
function Jc(a, b) {
    a = a.split(".");
    for (var c = E, d; a.length && (d = a.shift()); )
        a.length || b === void 0 ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
}
function Kc(a, b) {
    var c = Lc("CLOSURE_FLAGS");
    a = c && c[a];
    return a != null ? a : b
}
function Lc(a) {
    a = a.split(".");
    for (var b = E, c = 0; c < a.length; c++)
        if (b = b[a[c]],
        b == null)
            return null;
    return b
}
function Mc(a) {
    var b = typeof a;
    return b != q ? b : a ? Array.isArray(a) ? "array" : b : Ab
}
function Nc(a) {
    var b = Mc(a);
    return b == "array" || b == q && typeof a.length == m
}
function Oc(a) {
    var b = typeof a;
    return b == q && a != null || b == k
}
function Pc(a) {
    return Object.prototype.hasOwnProperty.call(a, Qc) && a[Qc] || (a[Qc] = ++Rc)
}
var Qc = "closure_uid_" + (Math.random() * 1E9 >>> 0)
  , Rc = 0;
function Sc(a, b, c) {
    return a.call.apply(a.bind, arguments)
}
function Tc(a, b, c) {
    if (!a)
        throw Error();
    if (arguments.length > 2) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function() {
            var e = Array.prototype.slice.call(arguments);
            Array.prototype.unshift.apply(e, d);
            return a.apply(b, e)
        }
    }
    return function() {
        return a.apply(b, arguments)
    }
}
function F(a, b, c) {
    F = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? Sc : Tc;
    return F.apply(null, arguments)
}
function Uc(a, b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return function() {
        var d = c.slice();
        d.push.apply(d, arguments);
        return a.apply(this, d)
    }
}
function Vc(a) {
    (0,
    eval)(a)
}
function Wc(a) {
    return a
}
function Xc(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.pa = b.prototype;
    a.prototype = new c;
    a.prototype.constructor = a;
    a.mi = function(d, e, f) {
        for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++)
            g[h - 2] = arguments[h];
        return b.prototype[e].apply(d, g)
    }
}
;Object.create(null);
globalThis.$J2CL_PRESERVE$ = Zb();
function G() {}
G.prototype.equals = function(a) {
    return Yc(this, a)
}
;
G.prototype.ja = function() {
    return Zc(this)
}
;
G.prototype.toString = function() {
    return H($c(ad(bd(this)))) + "@" + H((this.ja() >>> 0).toString(16))
}
;
function cd(a) {
    return a != null
}
G.prototype.F = ["java.lang.Object", 0];
function dd() {}
var ed;
A(dd, G);
dd.prototype.F = ["java.lang.Number", 0];
function fd() {}
A(fd, dd);
fd.prototype.F = ["java.lang.Double", 0];
var gd;
function hd() {
    hd = Zb();
    for (var a = id([256], jd, kd), b = 0; b < 256; b = b + 1 | 0)
        ld(a, b, md(b - 128 | 0));
    gd = a
}
;function nd() {}
A(nd, G);
function od(a, b) {
    a.l = b;
    pd(a)
}
function qd(a, b) {
    a.j = b;
    rd(b, a)
}
function pd(a) {
    sd(a.j) && (Error.captureStackTrace ? Error.captureStackTrace(I(a.j, sd, td)) : I(a.j, sd, td).stack = Error().stack)
}
nd.prototype.toString = function() {
    var a = $c(ad(bd(this)))
      , b = this.l;
    return b == null ? a : H(a) + da + H(b)
}
;
function ud(a) {
    if (a != null) {
        var b = a.fe;
        if (b != null)
            return b
    }
    a instanceof TypeError ? b = vd() : (b = new wd,
    pd(b),
    qd(b, Error(b)));
    b.l = a == null ? Ab : a.toString();
    qd(b, a);
    return b
}
function xd(a) {
    return a instanceof nd
}
nd.prototype.F = ["java.lang.Throwable", 0];
function yd() {}
A(yd, nd);
yd.prototype.F = ["java.lang.Exception", 0];
function zd() {}
A(zd, yd);
function Ad(a) {
    return a instanceof zd
}
zd.prototype.F = ["java.lang.RuntimeException", 0];
function Bd() {}
A(Bd, zd);
Bd.prototype.F = ["java.lang.ArithmeticException", 0];
function Cd() {}
A(Cd, zd);
function Dd(a) {
    var b = new Cd;
    od(b, a);
    qd(b, Error(b));
    return b
}
Cd.prototype.F = ["java.lang.IndexOutOfBoundsException", 0];
function Ed(a) {
    var b;
    a.j() ? b = {
        value: a.l(),
        done: !1
    } : b = {
        value: null,
        done: !0
    };
    return b
}
;function Fd() {}
A(Fd, zd);
function Gd() {
    var a = new Fd;
    pd(a);
    qd(a, Error(a));
    return a
}
Fd.prototype.F = ["java.lang.UnsupportedOperationException", 0];
function Yc(a, b) {
    return Object.is(a, b) || a == null && b == null
}
;function Hd() {}
A(Hd, zd);
function Id() {
    var a = new Hd;
    pd(a);
    qd(a, Error(a));
    return a
}
function Jd(a) {
    var b = new Hd;
    od(b, a);
    qd(b, Error(b));
    return b
}
Hd.prototype.F = ["java.lang.IllegalStateException", 0];
function Kd(a, b) {
    b = b === void 0 ? new Set : b;
    if (b.has(a))
        return "(Recursive reference)";
    switch (typeof a) {
    case q:
        if (a) {
            var c = Object.getPrototypeOf(a);
            switch (c) {
            case Map.prototype:
            case Set.prototype:
            case Array.prototype:
                b.add(a);
                var d = "[" + Array.from(a, function(e) {
                    return Kd(e, b)
                }).join(", ") + "]";
                b.delete(a);
                c !== Array.prototype && (d = Ld(c.constructor) + "(" + d + ")");
                return d;
            case Object.prototype:
                return b.add(a),
                c = "{" + Object.entries(a).map(function(e) {
                    var f = C(e);
                    e = f.next().value;
                    f = f.next().value;
                    return e + da + Kd(f, b)
                }).join(", ") + "}",
                b.delete(a),
                c;
            default:
                return d = Aa,
                c && c.constructor && (d = Ld(c.constructor)),
                typeof a.toString === k && a.toString !== Object.prototype.toString ? d + "(" + String(a) + ")" : "(object " + d + ")"
            }
        }
        break;
    case k:
        return "function " + Ld(a);
    case m:
        if (!Number.isFinite(a))
            return String(a);
        break;
    case eb:
        return a.toString(10) + "n";
    case Nb:
        return a.toString()
    }
    return JSON.stringify(a)
}
function Ld(a) {
    var b = a.displayName;
    return b && typeof b === v || (b = a.name) && typeof b === v ? b : (a = /function\s+([^\(]+)/m.exec(String(a))) ? a[1] : "(Anonymous)"
}
;function Md(a, b, c) {
    var d = Nd
      , e = [];
    Od(b, a, e) || Pd.apply(null, [c, d, "Guard " + b.Eb().trim() + " failed:"].concat(oc(e.reverse())))
}
function Qd(a) {
    Md(a, Rd);
    return a
}
function Sd(a, b) {
    J(a, b)
}
function J(a, b) {
    var c = Nd;
    a || Pd("Guard truthy failed:", b || c || "Expected truthy, got " + Kd(a))
}
function Td(a, b) {
    a.ti = !0;
    a.Eb = typeof b === k ? b : function() {
        return b
    }
    ;
    return a
}
function Od(a, b, c, d) {
    var e = a(b, c);
    e || Ud(c, function() {
        var f = d ? (typeof d === k ? d() : d).trim() : "";
        f.length > 0 && (f += da);
        return f + "Expected " + a.Eb().trim() + ", got " + Kd(b)
    });
    return e
}
function Ud(a, b) {
    a == null || a.push((typeof b === k ? b() : b).trim())
}
var Nd = void 0;
function Vd(a) {
    return typeof a === k ? a() : a
}
function Pd() {
    throw Error(Ec.apply(0, arguments).map(Vd).filter(Boolean).join("\n").trim().replace(/:$/, ""));
}
;var Wd = Td(function(a) {
    return typeof a === m
}, m);
function Xd() {
    return Td(function(a) {
        return a > 0
    }, function() {
        return "isGreaterThan(" + Kd(0) + ")"
    })
}
var Rd = Td(function(a) {
    return typeof a === v
}, v)
  , Yd = Td(function(a) {
    return typeof a === fb
}, fb)
  , Zd = Td(function(a) {
    return typeof a === eb
}, eb)
  , ae = $d()
  , be = $d();
function $d() {
    return Td(function(a) {
        return Array.isArray(a)
    }, "Array<unknown>")
}
function ce() {
    var a = Rd;
    return Td(function(b, c) {
        return Od(be, b, c) ? b.every(function(d, e) {
            return Od(a, d, c, "At index " + e)
        }) : !1
    }, function() {
        return "Array<" + a.Eb().trim() + ">"
    })
}
function de() {
    var a = Ec.apply(0, arguments);
    return Td(function(b) {
        return a.some(function(c) {
            return c(b)
        })
    }, function() {
        return "" + a.map(function(b) {
            return b.Eb().trim()
        }).join(" | ")
    })
}
;var ee = typeof E.BigInt === k && typeof E.BigInt(0) === eb;
function fe(a) {
    var b = a;
    if (Rd(b)) {
        if (!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(b))
            throw Error("Invalid string for toGbigint: " + b);
    } else if (Wd(b) && !Number.isSafeInteger(b))
        throw Error("Invalid number for toGbigint: " + b);
    return ee ? (Zd(a) || (Md(a, de(Rd, Yd, Wd)),
    a = BigInt(a)),
    a % BigInt(2) === BigInt(ge()) ? a.toString() : a) : a = Yd(a) ? a ? "1" : "0" : Rd(a) ? a.trim() || "0" : String(a)
}
var ie = Td(function(a) {
    return ee ? he(a) : Rd(a) && /^(?:-?[1-9]\d*|0)$/.test(a)
}, "gbigint")
  , oe = Td(function(a) {
    if (ee)
        return Md(je, Zd),
        Md(ke, Zd),
        a = BigInt(a),
        a >= je && a <= ke;
    a = Qd(a);
    return a[0] === "-" ? le(a, me) : le(a, ne)
}, "isSafeInt52")
  , me = Number.MIN_SAFE_INTEGER.toString()
  , je = ee ? BigInt(Number.MIN_SAFE_INTEGER) : void 0
  , ne = Number.MAX_SAFE_INTEGER.toString()
  , ke = ee ? BigInt(Number.MAX_SAFE_INTEGER) : void 0;
function le(a, b) {
    if (a.length > b.length)
        return !1;
    if (a.length < b.length || a === b)
        return !0;
    for (var c = 0; c < a.length; c++) {
        var d = a[c]
          , e = b[c];
        if (d > e)
            return !1;
        if (d < e)
            return !0
    }
    c = Nd;
    Pd("Assertion fail:", "isInRange weird case. Value was: " + a + ". Boundary was: " + b + "." || c)
}
function he(a) {
    if (typeof a === eb)
        return a % BigInt(2) === BigInt(ge()) ? (console.error("isGbigint: got a `bigint` when we were expecting a `string`. Make sure to call `toGbigint()` when creating `gbigint` instances!"),
        !1) : !0;
    if (Rd(a)) {
        if (!/^(?:-?[1-9]\d*|0)$/.test(a))
            return !1;
        if (Number(a[a.length - 1]) % 2 === ge())
            return !0;
        console.error("isGbigint: got a `string` when we were expecting a `bigint`. Make sure to call `toGbigint()` when creating `gbigint` instances!")
    }
    return !1
}
function ge() {
    J(!0);
    var a = typeof Window === k && globalThis.top instanceof Window ? globalThis.top : globalThis;
    a.gbigintUseStrInDebugToggleVal == null && Object.defineProperties(a, {
        gbigintUseStrInDebugToggleVal: {
            value: Math.round(Math.random())
        }
    });
    return a.gbigintUseStrInDebugToggleVal
}
;function pe(a, b) {
    this.V = a | 0;
    this.R = b | 0
}
function qe(a) {
    return a.R * 4294967296 + (a.V >>> 0)
}
y = pe.prototype;
y.isSafeInteger = function() {
    var a = this.R >> 21;
    return a == 0 || a == -1 && !(this.V == 0 && this.R == -2097152)
}
;
y.toString = function(a) {
    a = a || 10;
    if (a < 2 || 36 < a)
        throw Error("radix out of range: " + a);
    if (this.isSafeInteger()) {
        var b = qe(this);
        return a == 10 ? "" + b : b.toString(a)
    }
    b = 14 - (a >> 2);
    var c = Math.pow(a, b)
      , d = re(c, c / 4294967296);
    c = this.div(d);
    var e = Math
      , f = e.abs;
    d = c.multiply(d);
    d = this.add(se(d));
    e = f.call(e, qe(d));
    f = a == 10 ? "" + e : e.toString(a);
    f.length < b && (f = "0000000000000".slice(f.length - b) + f);
    e = qe(c);
    return (a == 10 ? e : e.toString(a)) + f
}
;
function te(a) {
    return a.V == 0 && a.R == 0
}
y.ja = function() {
    return this.V ^ this.R
}
;
y.equals = function(a) {
    return a == null ? !1 : this.V == a.V && this.R == a.R
}
;
y.compare = function(a) {
    return this.R == a.R ? this.V == a.V ? 0 : this.V >>> 0 > a.V >>> 0 ? 1 : -1 : this.R > a.R ? 1 : -1
}
;
function se(a) {
    var b = ~a.V + 1 | 0;
    return re(b, ~a.R + !b | 0)
}
y.add = function(a) {
    var b = this.R >>> 16
      , c = this.R & 65535
      , d = this.V >>> 16
      , e = a.R >>> 16
      , f = a.R & 65535
      , g = a.V >>> 16;
    a = (this.V & 65535) + (a.V & 65535);
    g = (a >>> 16) + (d + g);
    d = g >>> 16;
    d += c + f;
    return re((g & 65535) << 16 | a & 65535, ((d >>> 16) + (b + e) & 65535) << 16 | d & 65535)
}
;
y.multiply = function(a) {
    if (te(this))
        return this;
    if (te(a))
        return a;
    var b = this.R >>> 16
      , c = this.R & 65535
      , d = this.V >>> 16
      , e = this.V & 65535
      , f = a.R >>> 16
      , g = a.R & 65535
      , h = a.V >>> 16;
    a = a.V & 65535;
    var l = e * a;
    var n = (l >>> 16) + d * a;
    var p = n >>> 16;
    n = (n & 65535) + e * h;
    p += n >>> 16;
    p += c * a;
    var r = p >>> 16;
    p = (p & 65535) + d * h;
    r += p >>> 16;
    p = (p & 65535) + e * g;
    r = r + (p >>> 16) + (b * a + c * h + d * g + e * f) & 65535;
    return re((n & 65535) << 16 | l & 65535, r << 16 | p & 65535)
}
;
y.div = function(a) {
    if (te(a))
        throw Error("division by zero");
    if (this.R < 0) {
        if (this.equals(ue)) {
            if (a.equals(ve) || a.equals(we))
                return ue;
            if (a.equals(ue))
                return ve;
            var b = this.R;
            b = re(this.V >>> 1 | b << 31, b >> 1);
            b = b.div(a).shiftLeft(1);
            if (b.equals(xe))
                return a.R < 0 ? ve : we;
            var c = a.multiply(b);
            c = this.add(se(c));
            return b.add(c.div(a))
        }
        return a.R < 0 ? se(this).div(se(a)) : se(se(this).div(a))
    }
    if (te(this))
        return xe;
    if (a.R < 0)
        return a.equals(ue) ? xe : se(this.div(se(a)));
    b = xe;
    for (c = this; c.compare(a) >= 0; ) {
        var d = Math.max(1, Math.floor(qe(c) / qe(a)))
          , e = Math.ceil(Math.log(d) / Math.LN2);
        e = e <= 48 ? 1 : Math.pow(2, e - 48);
        for (var f = ye(d), g = f.multiply(a); g.R < 0 || g.compare(c) > 0; )
            d -= e,
            f = ye(d),
            g = f.multiply(a);
        te(f) && (f = ve);
        b = b.add(f);
        c = c.add(se(g))
    }
    return b
}
;
y.and = function(a) {
    return re(this.V & a.V, this.R & a.R)
}
;
y.or = function(a) {
    return re(this.V | a.V, this.R | a.R)
}
;
y.xor = function(a) {
    return re(this.V ^ a.V, this.R ^ a.R)
}
;
y.shiftLeft = function(a) {
    a &= 63;
    if (a == 0)
        return this;
    var b = this.V;
    return a < 32 ? re(b << a, this.R << a | b >>> 32 - a) : re(0, b << a - 32)
}
;
function ye(a) {
    return a > 0 ? a >= 0x7fffffffffffffff ? ze : new pe(a,a / 4294967296) : a < 0 ? a <= -0x7fffffffffffffff ? ue : se(new pe(-a,-a / 4294967296)) : xe
}
function re(a, b) {
    return new pe(a,b)
}
var xe = re(0, 0)
  , ve = re(1, 0)
  , we = re(-1, -1)
  , ze = re(4294967295, 2147483647)
  , ue = re(0, 2147483648);
function I(a, b, c) {
    if (a != null && !b(a))
        throw a = H($c(Ae(a))) + aa + H($c(ad(c))),
        Be(a).j;
    return a
}
;function bd(a) {
    return a.constructor
}
function Ce(a, b, c) {
    if (Object.prototype.hasOwnProperty.call(a.prototype, b))
        return a.prototype[b];
    c = c();
    return a.prototype[b] = c
}
;function De() {}
A(De, G);
De.prototype.F = ["java.lang.Boolean", 0];
function Ee(a) {
    return ye(a)
}
function Fe(a) {
    if (!isFinite(a))
        throw a = new Bd,
        pd(a),
        qd(a, Error(a)),
        a.j;
    return a | 0
}
;function Ge() {}
A(Ge, nd);
Ge.prototype.F = ["java.lang.Error", 0];
function He() {}
A(He, Ge);
He.prototype.F = ["java.lang.AssertionError", 0];
function Ie() {}
A(Ie, G);
y = Ie.prototype;
y.add = function() {
    throw Gd().j;
}
;
y.clear = function() {
    for (var a = this.W(); a.j(); )
        a.l(),
        a.o()
}
;
y.ab = function(a) {
    return Je(this, a, !1)
}
;
y.remove = function(a) {
    return Je(this, a, !0)
}
;
y.hd = function() {
    return Ke(this, Array(this.size()))
}
;
y.lc = function(a) {
    return Ke(this, a)
}
;
y.toString = function() {
    for (var a = Le("[", "]"), b = this.W(); b.j(); ) {
        var c = b.l();
        Me(a, Yc(c, this) ? "(this Collection)" : H(c))
    }
    return a.toString()
}
;
function Je(a, b, c) {
    for (a = a.W(); a.j(); ) {
        var d = a.l();
        if (Ne(b, d))
            return c && a.o(),
            !0
    }
    return !1
}
Ie.prototype[Symbol.iterator] = function() {
    return this.W()
}
;
Ie.prototype.toArray = function() {
    return this.hd()
}
;
Ie.prototype.F = ["java.util.AbstractCollection", 0];
function wd() {}
A(wd, zd);
wd.prototype.F = ["java.lang.JsException", 0];
function Oe() {}
A(Oe, wd);
function vd() {
    var a = new Oe;
    pd(a);
    qd(a, new TypeError(a));
    return a
}
Oe.prototype.F = ["java.lang.NullPointerException", 0];
function Ne(a, b) {
    var c;
    !(c = Yc(a, b)) && (c = a != null) && (a.equals ? c = a.equals(b) : (Pe(a),
    c = Object.is(a, b)));
    return c
}
function Qe(a) {
    return a != null ? Re(a) : 0
}
;function Se(a) {
    return a >= 56320 && a <= 57343
}
;function jd() {
    this.j = 0
}
A(jd, dd);
function Te(a) {
    a > -129 && a < 128 ? (hd(),
    a = gd[a + 128 | 0]) : a = md(a);
    return a
}
function md(a) {
    var b = new jd;
    b.j = a;
    return b
}
y = jd.prototype;
y.equals = function(a) {
    return kd(a) && I(a, kd, jd).j == this.j
}
;
y.ja = bc("j");
y.toString = function() {
    return "" + this.j
}
;
y.ka = bc("j");
function kd(a) {
    return a instanceof jd
}
y.F = ["java.lang.Integer", 0];
function Ue() {}
A(Ue, dd);
Ue.prototype.F = ["java.lang.Long", 0];
function Ve() {}
function We(a) {
    return a != null && !!a.Ob
}
Ve.prototype.Ob = !0;
Ve.prototype.F = ["java.util.List", 1];
function Xe() {}
A(Xe, Ie);
y = Xe.prototype;
y.add = function(a) {
    this.Mc(this.size(), a);
    return !0
}
;
y.Mc = function() {
    throw Gd().j;
}
;
y.clear = function() {
    this.gd(0, this.size())
}
;
y.equals = function(a) {
    if (Yc(a, this))
        return !0;
    if (!We(a))
        return !1;
    a = I(a, We, Ve);
    if (this.size() != a.size())
        return !1;
    a = a.W();
    for (var b = this.W(); b.j(); ) {
        var c = b.l()
          , d = a.l();
        if (!Ne(c, d))
            return !1
    }
    return !0
}
;
y.ja = function() {
    for (var a = 1, b = this.W(); b.j(); ) {
        var c = b.l();
        a = Math.imul(31, a) + Qe(c) | 0
    }
    return a
}
;
y.indexOf = function(a) {
    for (var b = 0, c = this.size(); b < c; b = b + 1 | 0)
        if (Ne(a, this.Db(b)))
            return b;
    return -1
}
;
y.W = function() {
    var a = new Ye;
    a.B = this;
    a.v = 0;
    a.A = -1;
    return a
}
;
y.lastIndexOf = function(a) {
    for (var b = this.size() - 1 | 0; b > -1; b = b - 1 | 0)
        if (Ne(a, this.Db(b)))
            return b;
    return -1
}
;
y.rd = function() {
    throw Gd().j;
}
;
y.gd = function(a, b) {
    var c = new Ze;
    c.B = this;
    c.v = 0;
    c.A = -1;
    var d = this.size();
    $e(a, d);
    for (c.v = a; a < b; a = a + 1 | 0)
        c.l(),
        c.o()
}
;
y.Ob = !0;
y.F = ["java.util.AbstractList", 0];
function af() {}
A(af, Xe);
y = af.prototype;
y.ab = function(a) {
    return this.indexOf(a) != -1
}
;
y.Db = function(a) {
    var b = this.j.length;
    if (a < 0 || a >= b)
        throw Dd("Index: " + a + ba + b).j;
    return this.j[a]
}
;
y.indexOf = function(a) {
    a: {
        for (var b = 0, c = this.j.length; b < c; b = b + 1 | 0)
            if (Ne(a, this.j[b])) {
                a = b;
                break a
            }
        a = -1
    }
    return a
}
;
y.W = function() {
    var a = new bf;
    a.B = this;
    a.v = 0;
    a.A = -1;
    return a
}
;
y.lastIndexOf = function(a) {
    a: {
        for (var b = this.j.length - 1 | 0; b >= 0; b = b - 1 | 0)
            if (Ne(a, this.j[b])) {
                a = b;
                break a
            }
        a = -1
    }
    return a
}
;
y.rd = function(a) {
    this.Db(a);
    this.j.splice(a, 1)
}
;
y.remove = function(a) {
    a = this.indexOf(a);
    if (a == -1)
        return !1;
    this.j.splice(a, 1);
    return !0
}
;
y.size = function() {
    return this.j.length
}
;
y.lc = function(a) {
    var b = this.j.length;
    if (a.length < b) {
        var c = Array(b);
        c.ua = a.ua;
        a = c
    }
    for (c = 0; c < b; c = c + 1 | 0)
        ld(a, c, this.j[c]);
    a.length > b && ld(a, b, null);
    return a
}
;
y.Ob = !0;
y.F = ["java.util.ArrayListBase", 0];
function cf() {}
A(cf, af);
cf.prototype.add = function(a) {
    this.j.push(a);
    return !0
}
;
cf.prototype.Mc = function(a, b) {
    $e(a, this.j.length);
    this.j.splice(a, 0, b)
}
;
cf.prototype.hd = function() {
    var a = this.j
      , b = a.slice();
    b.ua = a.ua;
    return df(b, G, cd)
}
;
cf.prototype.gd = function(a, b) {
    var c = this.j.length;
    if (a < 0 || b > c)
        throw Dd(ob + a + ", toIndex: " + b + ", size: " + c).j;
    if (a > b)
        throw ef(ob + a + " > toIndex: " + b).j;
    this.j.splice(a, b - a | 0)
}
;
cf.prototype[Symbol.iterator] = function() {
    return Yc(ad(bd(this)), ad(cf)) ? this.j[Symbol.iterator]() : this.W()
}
;
cf.prototype.F = ["java.util.ArrayList", 0];
function bf() {
    this.A = this.v = 0
}
A(bf, G);
bf.prototype.j = function() {
    return this.v < this.B.j.length
}
;
bf.prototype.l = function() {
    ff(this.j());
    var a;
    this.A = (a = this.v,
    this.v = this.v + 1 | 0,
    a);
    return this.B.j[this.A]
}
;
bf.prototype.o = function() {
    gf(this.A != -1);
    var a = this.B
      , b = this.v = this.A;
    a.j.splice(b, 1);
    this.A = -1
}
;
bf.prototype.next = function() {
    return Ed(this)
}
;
bf.prototype[Symbol.iterator] = function() {
    return this
}
;
bf.prototype.F = ["java.util.ArrayListBase$1", 0];
function hf() {}
A(hf, zd);
hf.prototype.F = ["java.util.NoSuchElementException", 0];
function jf() {}
function kf(a) {
    return a != null && !!a.Pb
}
jf.prototype.Pb = !0;
jf.prototype.F = ["java.util.Map$Entry", 1];
function lf() {}
function mf(a) {
    return a != null && !!a.vc
}
lf.prototype.vc = !0;
lf.prototype.F = ["java.util.Set", 1];
function nf() {}
A(nf, Ie);
nf.prototype.equals = function(a) {
    if (Yc(a, this))
        return !0;
    if (!mf(a))
        return !1;
    a = I(a, mf, lf);
    if (a.size() != this.size())
        a = !1;
    else
        a: {
            of(a);
            for (a = a.W(); a.j(); ) {
                var b = a.l();
                if (!this.ab(b)) {
                    a = !1;
                    break a
                }
            }
            a = !0
        }
    return a
}
;
nf.prototype.ja = function() {
    return pf(this)
}
;
nf.prototype.vc = !0;
nf.prototype.F = ["java.util.AbstractSet", 0];
function qf() {}
A(qf, G);
qf.prototype.j = function() {
    return this.v.j()
}
;
qf.prototype.l = function() {
    return I(this.v.l(), kf, jf).ia()
}
;
qf.prototype.o = function() {
    this.v.o()
}
;
qf.prototype.next = function() {
    return Ed(this)
}
;
qf.prototype[Symbol.iterator] = function() {
    return this
}
;
qf.prototype.F = ["java.util.AbstractMap$2$1", 0];
function rf() {}
A(rf, Ie);
y = rf.prototype;
y.clear = function() {
    this.j.clear()
}
;
y.ab = function(a) {
    return this.j.Lc(a)
}
;
y.W = function() {
    var a = this.j.Ca().W()
      , b = new qf;
    b.v = a;
    return b
}
;
y.size = function() {
    return this.j.size()
}
;
y.F = ["java.util.AbstractMap$2", 0];
function sf() {}
A(sf, G);
y = sf.prototype;
y.ha = bc("l");
y.ia = bc("j");
y.Dc = $b("j");
y.equals = function(a) {
    if (!kf(a))
        return !1;
    a = I(a, kf, jf);
    return Ne(this.l, a.ha()) && Ne(this.j, a.ia())
}
;
y.ja = function() {
    return Qe(this.l) ^ Qe(this.j)
}
;
y.toString = function() {
    return H(this.l) + "=" + H(this.j)
}
;
y.Pb = !0;
y.F = ["java.util.AbstractMap$AbstractEntry", 0];
function tf() {}
A(tf, sf);
function uf(a, b) {
    var c = new tf;
    c.l = a;
    c.j = b;
    return c
}
tf.prototype.F = ["java.util.AbstractMap$SimpleEntry", 0];
function vf() {}
function wf(a) {
    return a != null && !!a.uc
}
vf.prototype.uc = !0;
vf.prototype.F = ["java.util.Map", 1];
function xf() {}
A(xf, G);
y = xf.prototype;
y.clear = function() {
    this.Ca().clear()
}
;
y.Bc = function(a) {
    return yf(this, a, !1) != null
}
;
y.Lc = function(a) {
    for (var b = this.Ca().W(); b.j(); ) {
        var c = I(b.l(), kf, jf).ia();
        if (Ne(a, c))
            return !0
    }
    return !1
}
;
function zf(a, b) {
    var c = b.ha();
    b = b.ia();
    var d = a.get(c);
    return !Ne(b, d) || d == null && !a.Bc(c) ? !1 : !0
}
y.equals = function(a) {
    if (Yc(a, this))
        return !0;
    if (!wf(a))
        return !1;
    a = I(a, wf, vf);
    if (this.size() != a.size())
        return !1;
    for (a = a.Ca().W(); a.j(); ) {
        var b = I(a.l(), kf, jf);
        if (!zf(this, b))
            return !1
    }
    return !0
}
;
y.get = function(a) {
    return Af(yf(this, a, !1))
}
;
y.ja = function() {
    return pf(this.Ca())
}
;
y.Cc = function() {
    throw Gd().j;
}
;
y.remove = function(a) {
    return Af(yf(this, a, !0))
}
;
y.size = function() {
    return this.Ca().size()
}
;
y.toString = function() {
    for (var a = Le("{", "}"), b = this.Ca().W(); b.j(); ) {
        var c = I(b.l(), kf, jf);
        c = H(Bf(this, c.ha())) + "=" + H(Bf(this, c.ia()));
        Me(a, c)
    }
    return a.toString()
}
;
function Bf(a, b) {
    return Yc(b, a) ? "(this Map)" : H(b)
}
y.values = function() {
    var a = new rf;
    a.j = this;
    return a
}
;
function Af(a) {
    return a == null ? null : a.ia()
}
function yf(a, b, c) {
    for (a = a.Ca().W(); a.j(); ) {
        var d = I(a.l(), kf, jf);
        if (Ne(b, d.ha()))
            return c && (d = uf(d.ha(), d.ia()),
            a.o()),
            d
    }
    return null
}
y.uc = !0;
y.F = ["java.util.AbstractMap", 0];
function Cf() {}
A(Cf, G);
Cf.prototype.toString = bc("j");
Cf.prototype.F = ["java.lang.AbstractStringBuilder", 0];
function Df(a, b) {
    return Ef(a) ? Ff(a, b) : Ff(a.j, b)
}
;function Gf() {}
A(Gf, Cf);
function Hf(a, b) {
    a.j = H(a.j) + H(b)
}
Gf.prototype.F = ["java.lang.StringBuilder", 0];
function If() {}
A(If, G);
function Le(a, b) {
    var c = new If;
    c.v = ", ".toString();
    c.o = a.toString();
    c.l = b.toString();
    c.A = H(c.o) + H(c.l);
    return c
}
function Me(a, b) {
    if (a.j == null) {
        var c = new Gf
          , d = I(of(a.o), Ef, Jf);
        c.j = d;
        a.j = c
    } else
        Hf(a.j, a.v);
    a = a.j;
    a.j = H(a.j) + H(b)
}
If.prototype.toString = function() {
    return this.j == null ? this.A : this.l.length == 0 ? this.j.toString() : H(this.j.toString()) + H(this.l)
}
;
If.prototype.F = ["java.util.StringJoiner", 0];
function pf(a) {
    var b = 0;
    for (a = a.W(); a.j(); ) {
        var c = a.l();
        b = b + Qe(c) | 0
    }
    return b
}
;function Kf() {}
A(Kf, nf);
y = Kf.prototype;
y.clear = function() {
    this.j.clear()
}
;
y.ab = function(a) {
    return kf(a) ? zf(this.j, I(a, kf, jf)) : !1
}
;
y.W = function() {
    var a = new Lf;
    a.v = this.j;
    a.M = a.v.o.W();
    a.A = a.M;
    a.B = Mf(a);
    a.C = a.v.l;
    return a
}
;
y.remove = function(a) {
    return this.ab(a) ? (a = I(a, kf, jf).ha(),
    this.j.remove(a),
    !0) : !1
}
;
y.size = function() {
    return this.j.size()
}
;
y.F = ["java.util.AbstractHashMap$EntrySet", 0];
function Lf() {
    this.B = !1;
    this.C = 0
}
A(Lf, G);
Lf.prototype.j = bc("B");
function Mf(a) {
    if (a.A.j())
        return !0;
    if (!Yc(a.A, a.M))
        return !1;
    a.A = a.v.j.W();
    return a.A.j()
}
Lf.prototype.o = function() {
    gf(this.D != null);
    if (this.v.l != this.C)
        throw Nf().j;
    this.D.o();
    this.D = null;
    this.B = Mf(this);
    this.C = this.v.l
}
;
Lf.prototype.next = function() {
    return Ed(this)
}
;
Lf.prototype[Symbol.iterator] = function() {
    return this
}
;
Lf.prototype.l = function() {
    if (this.v.l != this.C)
        throw Nf().j;
    ff(this.j());
    this.D = this.A;
    var a = I(this.A.l(), kf, jf);
    this.B = Mf(this);
    return a
}
;
Lf.prototype.F = ["java.util.AbstractHashMap$EntrySetIterator", 0];
function Of() {
    this.l = 0
}
A(Of, xf);
y = Of.prototype;
y.clear = function() {
    Pf(this)
}
;
function Pf(a) {
    var b = new Qf;
    b.l = new Map;
    b.o = a;
    a.j = b;
    b = new Rf;
    b.j = new Map;
    b.v = a;
    a.o = b;
    Sf(a)
}
function Sf(a) {
    a.l = a.l + 1 | 0
}
y.Bc = function(a) {
    return Ef(a) ? this.o.j.has(a) : Tf(a, Uf(this.j, a == null ? 0 : Re(a))) != null
}
;
y.Lc = function(a) {
    return Vf(a, this.o) || Vf(a, this.j)
}
;
function Vf(a, b) {
    for (b = b.W(); b.j(); ) {
        var c = I(b.l(), kf, jf)
          , d = a;
        c = c.ia();
        if (Ne(d, c))
            return !0
    }
    return !1
}
y.Ca = function() {
    var a = new Kf;
    a.j = this;
    return a
}
;
y.get = function(a) {
    return Ef(a) ? this.o.j.get(a) : Af(Tf(a, Uf(this.j, a == null ? 0 : Re(a))))
}
;
y.Cc = function(a, b) {
    if (Ef(a))
        Wf(this.o, a, b);
    else
        a: {
            var c = this.j
              , d = a == null ? 0 : Re(a)
              , e = Uf(c, d);
            if (e.length == 0)
                c.l.set(d, e);
            else if (d = Tf(a, e),
            d != null) {
                d.Dc(b);
                break a
            }
            ld(e, e.length, uf(a, b));
            c.j = c.j + 1 | 0;
            Sf(c.o)
        }
}
;
y.remove = function(a) {
    return Ef(a) ? Xf(this.o, a) : Yf(this.j, a)
}
;
y.size = function() {
    return this.j.j + this.o.o | 0
}
;
y.F = ["java.util.AbstractHashMap", 0];
function Zf() {
    this.v = 0
}
A(Zf, G);
Zf.prototype.j = function() {
    if (this.v < this.A.length)
        return !0;
    var a = this.D.next();
    return a.done ? !1 : (this.A = a.value[1],
    this.v = 0,
    !0)
}
;
Zf.prototype.o = function() {
    Yf(this.C, this.B.ha());
    this.v != 0 && (this.v = this.v - 1 | 0)
}
;
Zf.prototype.next = function() {
    return Ed(this)
}
;
Zf.prototype[Symbol.iterator] = function() {
    return this
}
;
Zf.prototype.l = function() {
    var a;
    return this.B = this.A[a = this.v,
    this.v = this.v + 1 | 0,
    a]
}
;
Zf.prototype.F = ["java.util.InternalHashCodeMap$1", 0];
function Qf() {
    this.j = 0
}
A(Qf, G);
function Yf(a, b) {
    for (var c = b == null ? 0 : Re(b), d = Uf(a, c), e = 0; e < d.length; e = e + 1 | 0) {
        var f = d[e];
        if (Ne(b, f.ha()))
            return d.length == 1 ? (d.length = 0,
            a.l.delete(c)) : d.splice(e, 1),
            a.j = a.j - 1 | 0,
            Sf(a.o),
            f.ia()
    }
    return null
}
function Tf(a, b) {
    for (var c = 0; c < b.length; c++) {
        var d = b[c];
        if (Ne(a, d.ha()))
            return d
    }
    return null
}
Qf.prototype.W = function() {
    var a = new Zf;
    a.C = this;
    a.D = a.C.l.entries();
    a.v = 0;
    a.A = [];
    a.B = null;
    return a
}
;
function Uf(a, b) {
    a = a.l.get(b);
    return a == null ? [] : a
}
Qf.prototype[Symbol.iterator] = function() {
    return this.W()
}
;
Qf.prototype.F = ["java.util.InternalHashCodeMap", 0];
function $f() {}
A($f, G);
$f.prototype.j = function() {
    return !this.A.done
}
;
$f.prototype.o = function() {
    Xf(this.v, this.C.value[0])
}
;
$f.prototype.next = function() {
    return Ed(this)
}
;
$f.prototype[Symbol.iterator] = function() {
    return this
}
;
$f.prototype.l = function() {
    this.C = this.A;
    this.A = this.B.next();
    var a = new ag
      , b = this.C
      , c = this.v.l;
    a.l = this.v;
    a.j = b;
    a.o = c;
    return a
}
;
$f.prototype.F = ["java.util.InternalStringMap$1", 0];
function bg() {}
A(bg, G);
y = bg.prototype;
y.equals = function(a) {
    if (!kf(a))
        return !1;
    a = I(a, kf, jf);
    return Ne(this.ha(), a.ha()) && Ne(this.ia(), a.ia())
}
;
y.ja = function() {
    return Qe(this.ha()) ^ Qe(this.ia())
}
;
y.toString = function() {
    return H(this.ha()) + "=" + H(this.ia())
}
;
y.Pb = !0;
y.F = ["java.util.AbstractMapEntry", 0];
function ag() {
    this.o = 0
}
A(ag, bg);
ag.prototype.ha = function() {
    return this.j.value[0]
}
;
ag.prototype.ia = function() {
    return this.l.l != this.o ? this.l.j.get(this.j.value[0]) : this.j.value[1]
}
;
ag.prototype.Dc = function(a) {
    Wf(this.l, this.j.value[0], a)
}
;
ag.prototype.F = ["java.util.InternalStringMap$2", 0];
function Rf() {
    this.l = this.o = 0
}
A(Rf, G);
function Wf(a, b, c) {
    var d = a.j.get(b);
    a.j.set(b, c === void 0 ? null : c);
    d === void 0 ? (a.o = a.o + 1 | 0,
    Sf(a.v)) : a.l = a.l + 1 | 0
}
function Xf(a, b) {
    var c = a.j.get(b);
    c === void 0 ? a.l = a.l + 1 | 0 : (a.j.delete(b),
    a.o = a.o - 1 | 0,
    Sf(a.v));
    return c
}
Rf.prototype.W = function() {
    var a = new $f;
    a.v = this;
    a.B = a.v.j.entries();
    a.A = a.B.next();
    return a
}
;
Rf.prototype[Symbol.iterator] = function() {
    return this.W()
}
;
Rf.prototype.F = ["java.util.InternalStringMap", 0];
function cg() {
    this.l = 0
}
A(cg, Of);
cg.prototype.F = ["java.util.HashMap", 0];
function dg() {}
A(dg, zd);
function Be(a) {
    var b = new dg;
    od(b, a);
    qd(b, Error(b));
    return b
}
dg.prototype.F = ["java.lang.ClassCastException", 0];
function eg() {}
A(eg, zd);
function ef(a) {
    var b = new eg;
    od(b, a);
    qd(b, Error(b));
    return b
}
eg.prototype.F = ["java.lang.IllegalArgumentException", 0];
function Ke(a, b) {
    var c = a.size();
    if (b.length < c) {
        var d = Array(c);
        d.ua = b.ua;
        b = d
    }
    d = b;
    a = a.W();
    for (var e = 0; e < c; e = e + 1 | 0)
        ld(d, e, a.l());
    b.length > c && ld(b, c, null);
    return b
}
;function Ye() {
    this.A = this.v = 0
}
A(Ye, G);
Ye.prototype.j = function() {
    return this.v < this.B.size()
}
;
Ye.prototype.l = function() {
    ff(this.j());
    var a;
    return this.B.Db(this.A = (a = this.v,
    this.v = this.v + 1 | 0,
    a))
}
;
Ye.prototype.o = function() {
    gf(this.A != -1);
    this.B.rd(this.A);
    this.v = this.A;
    this.A = -1
}
;
Ye.prototype.next = function() {
    return Ed(this)
}
;
Ye.prototype[Symbol.iterator] = function() {
    return this
}
;
Ye.prototype.F = ["java.util.AbstractList$IteratorImpl", 0];
function Ze() {
    Ye.call(this)
}
A(Ze, Ye);
Ze.prototype.F = ["java.util.AbstractList$ListIteratorImpl", 0];
function fg(a) {
    if (a == null)
        return 0;
    for (var b = 1, c = 0; c < a.length; c++)
        b = Math.imul(31, b) + Qe(a[c]) | 0;
    return b
}
;function gg() {}
A(gg, eg);
gg.prototype.F = ["java.lang.NumberFormatException", 0];
function hg(a) {
    switch (of(typeof a)) {
    case v:
        for (var b = 0, c = 0; c < a.length; c = c + 1 | 0)
            b = (b << 5) - b + Ff(a, c) | 0;
        return b;
    case m:
        return a = of(a),
        Math.max(Math.min(a, 2147483647), -2147483648) | 0;
    case fb:
        return of(a) ? 1231 : 1237;
    default:
        return a == null ? 0 : Zc(a)
    }
}
var ig = 0;
function Zc(a) {
    return a.xc || (Object.defineProperties(a, {
        xc: {
            value: ig = ig + 1 | 0,
            enumerable: !1
        }
    }),
    a.xc)
}
;function Re(a) {
    if (a.ja)
        return a.ja();
    Pe(a);
    return hg(a)
}
function Ae(a) {
    switch (of(typeof a)) {
    case m:
        return ad(fd);
    case fb:
        return ad(De);
    case v:
        return ad(Jf);
    case k:
        return ad(jg)
    }
    if (a instanceof pe)
        a = ad(Ue);
    else if (a instanceof G)
        a = ad(bd(a));
    else if (Array.isArray(a))
        a = (a = a.ua) ? ad(a.Na, a.La) : ad(G, 1);
    else if (a != null)
        a = ad(kg);
    else
        throw new TypeError("null.getClass()");
    return a
}
function Pe(a) {
    if (a.Tc)
        throw Error("equals and hashcode expected but not defined.");
}
;function jg() {}
function lg(a) {
    return typeof a == k || a != null && !!a.Dd
}
jg.prototype.F = ["<native function>", 1];
jg.prototype.Dd = !0;
function kg() {}
A(kg, G);
kg.prototype.F = ["<native object>", 0];
function Jf() {}
A(Jf, G);
function H(a) {
    return a == null ? Ab : a.toString()
}
function Ff(a, b) {
    mg(b, a.length);
    return a.charCodeAt(b)
}
function ng(a, b) {
    var c = a.length, d, e = Df(a, (d = b,
    b = b + 1 | 0,
    d)), f;
    return e >= 55296 && e <= 56319 && b < c && Se(f = Df(a, b)) ? 65536 + ((e & 1023) << 10) + (f & 1023) | 0 : e
}
function og(a, b) {
    return a.startsWith(I(of(b), Ef, Jf))
}
function pg(a, b) {
    mg(b, a.length + 1 | 0);
    return a.substr(b)
}
function qg(a, b, c) {
    var d = a.length;
    if (b < 0 || c > d || c < b)
        throw rg(ob + b + ", toIndex: " + c + ", length: " + d).j;
    return a.substr(b, c - b | 0)
}
function Ef(a) {
    return v === typeof a
}
Jf.prototype.F = ["java.lang.String", 0];
function td() {}
function sd(a) {
    return a instanceof Error
}
td.prototype.F = ["Error", 0];
function rd(a, b) {
    if (a instanceof Object)
        try {
            a.fe = b,
            Object.defineProperties(a, {
                cause: {
                    get: function() {
                        return b.o && b.o.j
                    }
                }
            })
        } catch (c) {}
}
;function sg() {}
A(sg, zd);
sg.prototype.F = ["java.lang.ArrayStoreException", 0];
function tg() {}
A(tg, Cd);
function rg(a) {
    var b = new tg;
    od(b, a);
    qd(b, Error(b));
    return b
}
tg.prototype.F = ["java.lang.StringIndexOutOfBoundsException", 0];
function ug() {}
A(ug, zd);
function Nf() {
    var a = new ug;
    pd(a);
    qd(a, Error(a));
    return a
}
ug.prototype.F = ["java.util.ConcurrentModificationException", 0];
function ff(a) {
    if (!a)
        throw a = new hf,
        pd(a),
        qd(a, Error(a)),
        a.j;
}
function gf(a) {
    if (!a)
        throw Id().j;
}
function of(a) {
    if (a == null)
        throw vd().j;
    return a
}
function mg(a, b) {
    if (a < 0 || a >= b)
        throw rg("Index: " + a + ba + b).j;
}
function $e(a, b) {
    if (a < 0 || a > b)
        throw Dd("Index: " + a + ba + b).j;
}
;function id(a, b, c) {
    return vg(a, {
        Na: b,
        Jb: c,
        La: a.length
    })
}
function vg(a, b) {
    var c = a[0];
    if (c == null)
        return null;
    var d = new globalThis.Array(c);
    b && (d.ua = b);
    if (a.length > 1) {
        a = a.slice(1);
        b = b && {
            Na: b.Na,
            Jb: b.Jb,
            La: b.La - 1
        };
        for (var e = 0; e < c; e++)
            d[e] = vg(a, b)
    } else if (b && (a = b.Na.lf,
    a !== void 0))
        for (b = 0; b < c; b++)
            d[b] = a;
    return d
}
function ld(a, b, c) {
    var d;
    if (!(d = c == null))
        a: {
            if (d = a.ua)
                if (d.La > 1) {
                    if (!wg(c, d.Na, d.Jb, d.La - 1)) {
                        d = !1;
                        break a
                    }
                } else if (c != null && !d.Jb(c)) {
                    d = !1;
                    break a
                }
            d = !0
        }
    if (!d)
        throw a = new sg,
        pd(a),
        qd(a, Error(a)),
        a.j;
    a[b] = c
}
function wg(a, b, c, d) {
    if (a == null || !Array.isArray(a))
        return !1;
    a = a.ua || {
        Na: G,
        La: 1
    };
    var e = a.La;
    return e == d ? (d = a.Na,
    d === b ? !0 : b && b.prototype.Cd || d && d.prototype.Cd ? !1 : c(d.prototype)) : e > d ? G == b : !1
}
function df(a, b, c) {
    if (a != null && !wg(a, b, c, 1))
        throw b = ad(b, 1),
        a = $c(Ae(a)) + aa + $c(b),
        Be(a).j;
    return a
}
;function xg(a, b) {
    this.j = a;
    this.l = b
}
A(xg, G);
function ad(a, b) {
    var c = b || 0;
    return Ce(a, "$$class/" + c, function() {
        return new xg(a,c)
    })
}
function $c(a) {
    return a.l != 0 ? H(yg("[", a.l)) + H(a.j.prototype.F[1] == 3 ? a.j.prototype.F[2] : "L" + H(a.j.prototype.F[0]) + ";") : a.j.prototype.F[0]
}
function zg(a, b) {
    return pg(a, a.lastIndexOf(b) + 1 | 0)
}
xg.prototype.toString = function() {
    return String(this.l == 0 && this.j.prototype.F[1] == 1 ? "interface " : this.l == 0 && this.j.prototype.F[1] == 3 ? "" : "class ") + H($c(this))
}
;
function yg(a, b) {
    for (var c = "", d = 0; d < b; d = d + 1 | 0)
        c = H(c) + H(a);
    return c
}
xg.prototype.F = ["java.lang.Class", 0];
function Ag(a, b) {
    if (Error.captureStackTrace)
        Error.captureStackTrace(this, Ag);
    else {
        var c = Error().stack;
        c && (this.stack = c)
    }
    a && (this.message = String(a));
    b !== void 0 && (this.cause = b);
    this.j = !0
}
Xc(Ag, Error);
Ag.prototype.name = "CustomError";
function Bg(a, b) {
    a = a.split("%s");
    for (var c = "", d = a.length - 1, e = 0; e < d; e++)
        c += a[e] + (e < b.length ? b[e] : "%s");
    Ag.call(this, c + a[d])
}
Xc(Bg, Ag);
Bg.prototype.name = "AssertionError";
function Cg(a, b, c, d) {
    var e = "Assertion failed";
    if (c) {
        e += da + c;
        var f = d
    } else
        a && (e += da + a,
        f = b);
    throw new Bg("" + e,f || []);
}
function K(a, b, c) {
    a || Cg("", null, b, Array.prototype.slice.call(arguments, 2));
    return a
}
function L(a, b, c) {
    a == null && Cg("Expected to exist: %s.", [a], b, Array.prototype.slice.call(arguments, 2));
    return a
}
function Dg(a, b) {
    throw new Bg("Failure" + (a ? da + a : ""),Array.prototype.slice.call(arguments, 1));
}
function Eg(a, b, c) {
    typeof a !== m && Cg("Expected number but got %s: %s.", [Mc(a), a], b, Array.prototype.slice.call(arguments, 2));
    return a
}
function Fg(a, b, c) {
    typeof a !== v && Cg("Expected string but got %s: %s.", [Mc(a), a], b, Array.prototype.slice.call(arguments, 2))
}
function Gg(a, b, c) {
    typeof a !== k && Cg("Expected function but got %s: %s.", [Mc(a), a], b, Array.prototype.slice.call(arguments, 2));
    return a
}
function Hg(a, b, c) {
    Oc(a) || Cg("Expected object but got %s: %s.", [Mc(a), a], b, Array.prototype.slice.call(arguments, 2));
    return a
}
function M(a, b, c) {
    Array.isArray(a) || Cg("Expected array but got %s: %s.", [Mc(a), a], b, Array.prototype.slice.call(arguments, 2));
    return a
}
function Ig(a, b, c, d) {
    a instanceof b || Cg("Expected instanceof %s but got %s.", [Jg(b), Jg(a)], c, Array.prototype.slice.call(arguments, 3));
    return a
}
function Jg(a) {
    return a instanceof Function ? a.displayName || a.name || Tb : a instanceof Object ? a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a) : a === null ? Ab : typeof a
}
;function Kg(a) {
    E.setTimeout(function() {
        throw a;
    }, 0)
}
;function Lg(a) {
    return Array.prototype.map.call(a, function(b) {
        b = b.toString(16);
        return b.length > 1 ? b : "0" + b
    }).join("")
}
;function Mg(a, b) {
    return a.lastIndexOf(b, 0) == 0
}
function Ng(a) {
    return /^[\s\xa0]*$/.test(a)
}
var Og = String.prototype.trim ? function(a) {
    return a.trim()
}
: function(a) {
    return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
}
  , Pg = /&/g
  , Qg = /</g
  , Rg = />/g
  , Sg = /"/g
  , Tg = /'/g
  , Ug = /\x00/g
  , Vg = /[\x00&<>"']/;
var Wg = Kc(610401301, !1)
  , Xg = Kc(748402147, !0)
  , Yg = Kc(283953155, Kc(1, !1));
function Zg() {
    var a = E.navigator;
    return a && (a = a.userAgent) ? a : ""
}
var $g, ah = E.navigator;
$g = ah ? ah.userAgentData || null : null;
function bh(a) {
    if (!Wg || !$g)
        return !1;
    for (var b = 0; b < $g.brands.length; b++) {
        var c = $g.brands[b].brand;
        if (c && c.indexOf(a) != -1)
            return !0
    }
    return !1
}
function N(a) {
    return Zg().indexOf(a) != -1
}
;function ch() {
    return Wg ? !!$g && $g.brands.length > 0 : !1
}
function dh() {
    return ch() ? !1 : N("Opera")
}
function eh() {
    return N("Firefox") || N("FxiOS")
}
function fh() {
    return ch() ? bh("Chromium") : (N("Chrome") || N("CriOS")) && !(ch() ? 0 : N(sa)) || N("Silk")
}
;function gh() {
    return Wg ? !!$g && !!$g.platform : !1
}
function hh() {
    return N("iPhone") && !N("iPod") && !N("iPad")
}
;var ih = Array.prototype.indexOf ? function(a, b) {
    K(a.length != null);
    return Array.prototype.indexOf.call(a, b, void 0)
}
: function(a, b) {
    if (typeof a === v)
        return typeof b !== v || b.length != 1 ? -1 : a.indexOf(b, 0);
    for (var c = 0; c < a.length; c++)
        if (c in a && a[c] === b)
            return c;
    return -1
}
  , jh = Array.prototype.lastIndexOf ? function(a, b) {
    K(a.length != null);
    return Array.prototype.lastIndexOf.call(a, b, a.length - 1)
}
: function(a, b) {
    var c = a.length - 1;
    c < 0 && (c = Math.max(0, a.length + c));
    if (typeof a === v)
        return typeof b !== v || b.length != 1 ? -1 : a.lastIndexOf(b, c);
    for (; c >= 0; c--)
        if (c in a && a[c] === b)
            return c;
    return -1
}
  , kh = Array.prototype.forEach ? function(a, b, c) {
    K(a.length != null);
    Array.prototype.forEach.call(a, b, c)
}
: function(a, b, c) {
    for (var d = a.length, e = typeof a === v ? a.split("") : a, f = 0; f < d; f++)
        f in e && b.call(c, e[f], f, a)
}
;
function lh(a, b) {
    for (var c = typeof a === v ? a.split("") : a, d = a.length - 1; d >= 0; --d)
        d in c && b.call(void 0, c[d], d, a)
}
var mh = Array.prototype.filter ? function(a, b) {
    K(a.length != null);
    return Array.prototype.filter.call(a, b, void 0)
}
: function(a, b) {
    for (var c = a.length, d = [], e = 0, f = typeof a === v ? a.split("") : a, g = 0; g < c; g++)
        if (g in f) {
            var h = f[g];
            b.call(void 0, h, g, a) && (d[e++] = h)
        }
    return d
}
  , nh = Array.prototype.some ? function(a, b) {
    K(a.length != null);
    return Array.prototype.some.call(a, b, void 0)
}
: function(a, b) {
    for (var c = a.length, d = typeof a === v ? a.split("") : a, e = 0; e < c; e++)
        if (e in d && b.call(void 0, d[e], e, a))
            return !0;
    return !1
}
;
function oh(a, b) {
    a: {
        for (var c = a.length, d = typeof a === v ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) {
                b = e;
                break a
            }
        b = -1
    }
    return b < 0 ? null : typeof a === v ? a.charAt(b) : a[b]
}
function ph(a, b) {
    return ih(a, b) >= 0
}
function qh(a, b) {
    b = ih(a, b);
    var c;
    (c = b >= 0) && rh(a, b);
    return c
}
function rh(a, b) {
    K(a.length != null);
    Array.prototype.splice.call(a, b, 1)
}
function sh(a) {
    var b = a.length;
    if (b > 0) {
        for (var c = Array(b), d = 0; d < b; d++)
            c[d] = a[d];
        return c
    }
    return []
}
function th(a, b) {
    for (var c = 1; c < arguments.length; c++) {
        var d = arguments[c];
        if (Nc(d)) {
            var e = a.length || 0
              , f = d.length || 0;
            a.length = e + f;
            for (var g = 0; g < f; g++)
                a[e + g] = d[g]
        } else
            a.push(d)
    }
}
function uh(a) {
    for (var b = 0, c = 0, d = {}; c < a.length; ) {
        var e = a[c++]
          , f = Oc(e) ? "o" + Pc(e) : (typeof e).charAt(0) + e;
        Object.prototype.hasOwnProperty.call(d, f) || (d[f] = !0,
        a[b++] = e)
    }
    a.length = b
}
function vh(a, b) {
    a.sort(b || wh)
}
function wh(a, b) {
    return a > b ? 1 : a < b ? -1 : 0
}
;function xh(a) {
    xh[" "](a);
    return a
}
xh[" "] = Zb();
dh();
var yh = ch() ? !1 : N("Trident") || N("MSIE");
N(sa);
!N("Gecko") || Zg().toLowerCase().indexOf("webkit") != -1 && !N(sa) || N("Trident") || N("MSIE") || N(sa);
var zh = Zg().toLowerCase().indexOf("webkit") != -1 && !N(sa);
zh && N("Mobile");
gh() || N("Macintosh");
gh() || N("Windows");
(gh() ? $g.platform === "Linux" : N("Linux")) || gh() || N("CrOS");
gh() || N("Android");
hh();
N("iPad");
N("iPod");
hh() || N("iPad") || N("iPod");
Zg().toLowerCase().indexOf("kaios");
var Ah = eh();
hh() || N("iPod");
N("iPad");
!N("Android") || fh() || eh() || dh() || N("Silk");
fh();
var Bh = N("Safari") && !(fh() || (ch() ? 0 : N("Coast")) || dh() || (ch() ? 0 : N(sa)) || (ch() ? bh("Microsoft Edge") : N("Edg/")) || (ch() ? bh("Opera") : N("OPR")) || eh() || N("Silk") || N("Android")) && !(hh() || N("iPad") || N("iPod"));
var Ch = {}
  , Dh = null;
function Eh(a) {
    var b = a.length
      , c = b * 3 / 4;
    c % 3 ? c = Math.floor(c) : "=.".indexOf(a[b - 1]) != -1 && (c = "=.".indexOf(a[b - 2]) != -1 ? c - 2 : c - 1);
    var d = new Uint8Array(c)
      , e = 0;
    Fh(a, function(f) {
        d[e++] = f
    });
    return e !== c ? d.subarray(0, e) : d
}
function Fh(a, b) {
    function c(l) {
        for (; d < a.length; ) {
            var n = a.charAt(d++)
              , p = Dh[n];
            if (p != null)
                return p;
            if (!Ng(n))
                throw Error("Unknown base64 encoding at char: " + n);
        }
        return l
    }
    Gh();
    for (var d = 0; ; ) {
        var e = c(-1)
          , f = c(0)
          , g = c(64)
          , h = c(64);
        if (h === 64 && e === -1)
            break;
        b(e << 2 | f >> 4);
        g != 64 && (b(f << 4 & 240 | g >> 2),
        h != 64 && b(g << 6 & 192 | h))
    }
}
function Gh() {
    if (!Dh) {
        Dh = {};
        for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; c < 5; c++) {
            var d = a.concat(b[c].split(""));
            Ch[c] = d;
            for (var e = 0; e < d.length; e++) {
                var f = d[e]
                  , g = Dh[f];
                g === void 0 ? Dh[f] = e : K(g === e)
            }
        }
    }
}
;var Hh = typeof Uint8Array !== "undefined"
  , Ih = !yh && typeof btoa === k
  , Jh = /[-_.]/g
  , Kh = {
    "-": "+",
    _: "/",
    ".": "="
};
function Lh(a) {
    return Kh[a] || ""
}
function Mh(a) {
    if (!Ih)
        return Eh(a);
    var b = Jh.test(a) ? a.replace(Jh, Lh) : a;
    try {
        var c = atob(b)
    } catch (d) {
        throw Error("invalid encoding '" + a + "': " + d);
    }
    a = new Uint8Array(c.length);
    for (b = 0; b < c.length; b++)
        a[b] = c.charCodeAt(b);
    return a
}
function Nh(a) {
    return Hh && a != null && a instanceof Uint8Array
}
function Oh(a, b) {
    var c = a.length;
    if (c !== b.length)
        return !1;
    for (var d = 0; d < c; d++)
        if (a[d] !== b[d])
            return !1;
    return !0
}
var Ph = {}
  , Qh = typeof structuredClone != "undefined";
function Rh(a, b) {
    Sh(b);
    this.j = a;
    if (a != null && a.length === 0)
        throw Error("ByteString should be constructed with non-empty values");
    this.dontPassByteStringToStructuredClone = Th
}
function Uh(a) {
    Fg(a);
    return a ? new Rh(a,Ph) : Vh()
}
function Vh() {
    return Wh || (Wh = new Rh(null,Ph))
}
function Xh(a) {
    var b = a.j;
    if (b == null)
        a = "";
    else if (typeof b === v)
        a = b;
    else {
        if (Ih) {
            for (var c = "", d = 0, e = b.length - 10240; d < e; )
                c += String.fromCharCode.apply(null, b.subarray(d, d += 10240));
            c += String.fromCharCode.apply(null, d ? b.subarray(d) : b);
            b = btoa(c)
        } else {
            K(Nc(b), "encodeByteArray takes an array as a parameter");
            c === void 0 && (c = 0);
            Gh();
            c = Ch[c];
            d = Array(Math.floor(b.length / 3));
            e = c[64] || "";
            for (var f = 0, g = 0; f < b.length - 2; f += 3) {
                var h = b[f]
                  , l = b[f + 1]
                  , n = b[f + 2]
                  , p = c[h >> 2];
                h = c[(h & 3) << 4 | l >> 4];
                l = c[(l & 15) << 2 | n >> 6];
                n = c[n & 63];
                d[g++] = "" + p + h + l + n
            }
            p = 0;
            n = e;
            switch (b.length - f) {
            case 2:
                p = b[f + 1],
                n = c[(p & 15) << 2] || e;
            case 1:
                b = b[f],
                d[g] = "" + c[b >> 2] + c[(b & 3) << 4 | p >> 4] + n + e
            }
            b = d.join("")
        }
        a = a.j = b
    }
    return a
}
function Yh(a, b) {
    Ig(b, Rh);
    if (!a.j || !b.j || a.j === b.j)
        return a.j === b.j;
    if (typeof a.j === v && typeof b.j === v) {
        var c = a.j
          , d = b.j;
        b.j.length > a.j.length && (d = a.j,
        c = b.j);
        if (c.lastIndexOf(d, 0) !== 0)
            return !1;
        for (b = d.length; b < c.length; b++)
            if (c[b] !== "=")
                return !1;
        return !0
    }
    c = L(Zh(a));
    b = L(Zh(b));
    return Oh(c, b)
}
function Zh(a) {
    Sh(Ph);
    var b = a.j;
    b == null || Nh(b) || (typeof b === v ? b = Mh(b) : (Dg("Cannot coerce to Uint8Array: " + Mc(b)),
    b = null));
    return b == null ? b : a.j = b
}
function $h(a, b) {
    if (typeof b === v)
        b = Uh(b);
    else if (b instanceof Uint8Array)
        b = new Rh(b,Ph);
    else if (!(b instanceof Rh))
        return !1;
    return Yh(a, b)
}
var Wh;
function Sh(a) {
    if (a !== Ph)
        throw Error("illegal external caller");
}
Rh.prototype.Tc = 1;
function Th() {}
;function ai(a, b, c) {
    a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
    a.__closure__error__context__984382[b] = c
}
function bi(a) {
    return a.__closure__error__context__984382 || {}
}
;var ci = {};
function di(a, b, c) {
    if (a != null) {
        var d;
        var e = (d = ci) != null ? d : ci = {};
        d = e[a] || 0;
        d >= b || (e[a] = d + 1,
        a = Error(c),
        ai(a, Jb, sb),
        Kg(a))
    }
}
;function ei() {
    return typeof BigInt === k
}
function fi() {
    var a, b;
    return typeof window === "undefined" || ((a = globalThis) == null ? void 0 : (b = a.Bf) == null ? void 0 : b["jspb.DISABLE_RANDOMIZE_SERIALIZATION"])
}
;var gi = typeof Symbol === k && typeof Symbol() === Nb;
function hi(a, b, c) {
    return typeof Symbol === k && typeof Symbol() === Nb ? (c === void 0 ? 0 : c) && Symbol.for && a ? Symbol.for(a) : a != null ? Symbol(a) : Symbol() : b
}
var ii = hi("jas", void 0, !0)
  , ji = hi("defaultInstance", "0di")
  , ki = hi("oneofCases", "1oa")
  , li = hi("internalJspbHashCode", "ijhc")
  , mi = hi("unknownBinaryFields", Symbol())
  , ni = hi(Ub, "0ub")
  , oi = hi(Ub, "0ubs")
  , pi = hi("m_m", "wi", !0)
  , qi = hi("validPivotSelector", "vps")
  , ri = hi("lazilyParseLateLoadedExtensions")
  , si = hi(xb, xb)
  , ti = hi(ib, ib);
K(Math.round(Math.log2(Math.max.apply(Math, oc(Object.values({
    wg: 1,
    tg: 2,
    qg: 4,
    ah: 8,
    bi: 16,
    Ug: 32,
    Gf: 64,
    kg: 128,
    dg: 256,
    Mh: 512,
    eg: 1024,
    lg: 2048,
    Vg: 4096,
    xg: 8192
}))))) === 13);
var ui = {
    Ce: {
        value: 0,
        configurable: !0,
        writable: !0,
        enumerable: !1
    }
}, vi = Object.defineProperties, P = gi ? L(ii) : "Ce", wi, xi = [];
yi(xi, 7);
wi = Object.freeze(xi);
function zi(a) {
    return M(a, t)[P] | 0
}
function Ai(a, b) {
    K((b & 16777215) === b);
    M(a, t);
    gi || P in a || vi(a, ui);
    a[P] |= b
}
function yi(a, b) {
    K((b & 16777215) === b);
    M(a, t);
    gi || P in a || vi(a, ui);
    a[P] = b
}
function Bi(a, b, c) {
    (c === void 0 || !c || b & 2048) && K(b & 64, "state for messages must be constructed");
    K((b & 5) === 0, "state for messages should not contain repeated field state");
    K((b & 8192) === 0, "state for messages should not contain map field state");
    if (b & 64) {
        K(b & 64);
        c = b >> 14 & 1023 || 536870912;
        var d = a.length;
        K(b & 64);
        K(c + (b & 128 ? 0 : -1) >= d - 1, "pivot %s is pointing at an index earlier than the last index of the array, length: %s", c, d);
        b & 128 && K(typeof a[0] === v, "arrays with a message_id bit must have a string in the first position, got: %s", a[0])
    }
}
function Ci(a) {
    var b = M(a, t)[P] | 0;
    Bi(a, b);
    return b
}
function Di(a) {
    return !!((M(a, t)[P] | 0) & 2)
}
function Ei(a) {
    Ai(a, 34);
    return a
}
function Fi(a) {
    Ai(a, 32);
    return a
}
function Gi(a, b) {
    Eg(b);
    K(b > 0 && b <= 1023 || 536870912 === b, "pivot must be in the range [1, 1024) or NO_PIVOT got %s", b);
    return a & -16760833 | (b & 1023) << 14
}
function Hi(a) {
    K(a & 64);
    return a & 128 ? 0 : -1
}
var Ii = Object.getOwnPropertyDescriptor(Array.prototype, "Ee");
Object.defineProperties(Array.prototype, {
    Ee: {
        get: function() {
            var a = Ki(this);
            return Ii ? Ii.get.call(this) + "|" + a : a
        },
        configurable: !0,
        enumerable: !1
    }
});
function Ki(a) {
    function b(e, f) {
        e & c && d.push(f)
    }
    var c = M(a, t)[P] | 0
      , d = [];
    b(1, "IS_REPEATED_FIELD");
    b(2, "IS_IMMUTABLE_ARRAY");
    b(4, "IS_API_FORMATTED");
    b(512, "STRING_FORMATTED");
    b(1024, "GBIGINT_FORMATTED");
    b(1024, "BINARY");
    b(8, "ONLY_MUTABLE_VALUES");
    b(16, "UNFROZEN_SHARED");
    b(32, "MUTABLE_REFERENCES_ARE_OWNED");
    b(64, "CONSTRUCTED");
    b(128, "HAS_MESSAGE_ID");
    b(256, "FROZEN_ARRAY");
    b(2048, "HAS_WRAPPER");
    b(4096, "MUTABLE_SUBSTRUCTURES");
    b(8192, "KNOWN_MAP_ARRAY");
    c & 64 && (K(c & 64),
    a = c >> 14 & 1023 || 536870912,
    a !== 536870912 && d.push("pivot: " + a));
    return d.join(",")
}
;var Q = gi && Math.random() < .5
  , R = Q ? Symbol() : void 0;
function Li(a) {
    K(S(a));
    return Q ? a[L(R)] : a.O
}
var Mi, Ni = typeof pi === Nb, Oi = {};
function S(a) {
    var b = a[pi]
      , c = b === Oi;
    K(!Mi || c === a instanceof Mi);
    if (Ni && b && !c)
        throw Error("multiple jspb runtimes detected");
    return c
}
function Pi(a) {
    return a != null && S(a)
}
var Qi = {};
function Ri(a, b) {
    Eg(a);
    K(a > 0);
    K(b === 0 || b === -1);
    return a + b
}
function Si(a, b) {
    K(b === Ti || b === void 0);
    return a + (b ? 0 : -1)
}
function Ui(a, b) {
    Eg(a);
    K(a >= 0);
    K(b === 0 || b === -1);
    return a - b
}
function Vi(a, b) {
    if (b === void 0) {
        if (b = !Wi(a))
            K(S(a)),
            a = Q ? a[L(R)] : a.O,
            b = M(a, t)[P] | 0,
            Bi(a, b),
            b = !!(2 & b);
        return b
    }
    K(S(a));
    var c = Q ? a[L(R)] : a.O;
    var d = M(c, t)[P] | 0;
    Bi(c, d);
    K(b === d);
    return !!(2 & b) && !Wi(a)
}
var Xi = {};
function Wi(a) {
    var b = a.o, c;
    (c = !b) || (K(S(a)),
    a = Q ? a[L(R)] : a.O,
    c = M(a, t)[P] | 0,
    Bi(a, c),
    c = !!(2 & c));
    K(c);
    K(b === void 0 || b === Xi);
    return b === Xi
}
function Yi(a, b) {
    K(S(a));
    var c = Q ? a[L(R)] : a.O;
    var d = M(c, t)[P] | 0;
    Bi(c, d);
    K(b === !!(2 & d));
    a.o = b ? Xi : void 0
}
var Zi = Symbol("exempted jspb subclass");
function $i(a) {
    return !Array.isArray(a) || a.length ? !1 : (M(a, t)[P] | 0) & 1 ? !0 : !1
}
var aj = typeof Symbol != "undefined" && typeof Symbol.hasInstance != "undefined";
function bj() {}
function cj(a, b) {
    var c = zi(M(a));
    b || K(!(c & 2 && c & 4 || c & 256) || Object.isFrozen(a));
    dj(a)
}
function dj(a) {
    a = M(a, t)[P] | 0;
    var b = a & 4
      , c = (512 & a ? 1 : 0) + (1024 & a ? 1 : 0);
    K(b && c <= 1 || !b && c === 0, "Expected at most 1 type-specific formatting bit, but got " + c + " with state: " + a)
}
Object.freeze({});
var ej = Object.freeze({})
  , fj = Symbol("debugExtensions")
  , Ti = {};
function gj(a, b) {
    a = M(a, t)[P] | 0;
    K(a & 64);
    a & 128 ? K(b === Ti) : K(b === void 0)
}
;var hj = 0
  , ij = 0;
function jj(a) {
    var b = a >>> 0;
    hj = b;
    ij = (a - b) / 4294967296 >>> 0
}
function kj(a) {
    if (a < 0) {
        jj(0 - a);
        var b = C(lj(hj, ij));
        a = b.next().value;
        b = b.next().value;
        hj = a >>> 0;
        ij = b >>> 0
    } else
        jj(a)
}
function mj(a, b) {
    b >>>= 0;
    a >>>= 0;
    if (b <= 2097151)
        var c = "" + (4294967296 * b + a);
    else
        ei() ? c = "" + (BigInt(b) << BigInt(32) | BigInt(a)) : (c = (a >>> 24 | b << 8) & 16777215,
        b = b >> 16 & 65535,
        a = (a & 16777215) + c * 6777216 + b * 6710656,
        c += b * 8147497,
        b *= 2,
        a >= 1E7 && (c += a / 1E7 >>> 0,
        a %= 1E7),
        c >= 1E7 && (b += c / 1E7 >>> 0,
        c %= 1E7),
        K(b),
        c = b + nj(c) + nj(a));
    return c
}
function nj(a) {
    a = String(a);
    return "0000000".slice(a.length) + a
}
function oj() {
    var a = hj
      , b = ij;
    b & 2147483648 ? ei() ? a = "" + (BigInt(b | 0) << BigInt(32) | BigInt(a >>> 0)) : (b = C(lj(a, b)),
    a = b.next().value,
    b = b.next().value,
    a = "-" + mj(a, b)) : a = mj(a, b);
    return a
}
function lj(a, b) {
    b = ~b;
    a ? a = ~a + 1 : b += 1;
    return [a, b]
}
;function pj(a) {
    return Array.prototype.slice.call(a)
}
;var qj = typeof BigInt === k ? BigInt.asIntN : void 0
  , rj = Number.isSafeInteger
  , sj = Number.isFinite
  , tj = Math.trunc;
function uj(a) {
    if (a == null || typeof a === m)
        return a;
    if (a === "NaN" || a === "Infinity" || a === "-Infinity")
        return Number(a)
}
function vj(a) {
    return a.displayName || a.name || Tb
}
var wj = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;
function xj(a) {
    switch (typeof a) {
    case eb:
        return !0;
    case m:
        return sj(a);
    case v:
        return wj.test(a);
    default:
        return !1
    }
}
function yj(a) {
    if (a != null) {
        if (!sj(a))
            throw a = Error("Expected enum as finite number but got " + Mc(a) + da + a),
            ai(a, Jb, Vb),
            a;
        a |= 0
    }
    return a
}
function zj(a) {
    if (a == null)
        return a;
    if (typeof a === v && a)
        a = +a;
    else if (typeof a !== m)
        return;
    return sj(a) ? a | 0 : void 0
}
function Aj(a) {
    K(a.indexOf(".") === -1);
    var b = a.length;
    if (a[0] === "-" ? b < 20 || b === 20 && a <= "-9223372036854775808" : b < 19 || b === 19 && a <= "9223372036854775807")
        return a;
    K(a.length > 0);
    if (a.length < 16)
        kj(Number(a));
    else if (ei())
        a = BigInt(a),
        hj = Number(a & BigInt(4294967295)) >>> 0,
        ij = Number(a >> BigInt(32) & BigInt(4294967295));
    else {
        K(a.length > 0);
        b = +(a[0] === "-");
        ij = hj = 0;
        for (var c = a.length, d = 0 + b, e = (c - b) % 6 + b; e <= c; d = e,
        e += 6)
            d = Number(a.slice(d, e)),
            ij *= 1E6,
            hj = hj * 1E6 + d,
            hj >= 4294967296 && (ij += Math.trunc(hj / 4294967296),
            ij >>>= 0,
            hj >>>= 0);
        b && (b = C(lj(hj, ij)),
        a = b.next().value,
        b = b.next().value,
        hj = a,
        ij = b)
    }
    return oj()
}
function Bj(a, b) {
    K(xj(a));
    K(b || !0);
    a = tj(a);
    rj(a) ? a = String(a) : (K(!rj(a)),
    K(Number.isInteger(a)),
    kj(a),
    a = oj());
    return a
}
function Cj(a) {
    K(typeof a === eb);
    return fe(qj(64, a))
}
function Dj(a, b) {
    b = b === void 0 ? !1 : b;
    var c = typeof a;
    if (a == null)
        return a;
    if (c === eb)
        return String(qj(64, a));
    if (xj(a))
        return c === v ? (K(xj(a)),
        K(b || !0),
        b = tj(Number(a)),
        rj(b) ? a = String(b) : (b = a.indexOf("."),
        b !== -1 && (a = a.substring(0, b)),
        a = Aj(a))) : a = Bj(a, b),
        a
}
function Ej(a) {
    var b = typeof a;
    if (a == null)
        return a;
    if (b === eb)
        return Cj(a);
    if (xj(a)) {
        if (b === v)
            b = tj(Number(a)),
            rj(b) ? a = fe(b) : (b = a.indexOf("."),
            b !== -1 && (a = a.substring(0, b)),
            a = ei() ? Cj(BigInt(a)) : fe(Aj(a)));
        else if (rj(a)) {
            K(xj(a));
            K(!0);
            a = tj(a);
            if (!rj(a)) {
                K(!rj(a));
                K(Number.isInteger(a));
                kj(a);
                b = hj;
                var c = ij;
                if (a = c & 2147483648)
                    b = ~b + 1 >>> 0,
                    c = ~c >>> 0,
                    b == 0 && (c = c + 1 >>> 0);
                var d = c * 4294967296 + (b >>> 0);
                b = Number.isSafeInteger(d) ? d : mj(b, c);
                a = typeof b === m ? a ? -b : b : a ? "-" + b : b
            }
            a = fe(a)
        } else
            a = fe(Bj(a, !0));
        return a
    }
}
function Fj(a) {
    return a == null || typeof a === v ? a : void 0
}
function Gj(a, b, c, d) {
    if (Pi(a))
        return a;
    if (!Array.isArray(a))
        return c ? d & 2 ? b[ji] || (b[ji] = Hj(b)) : new b : void 0;
    c = zi(a);
    d = c | d & 32 | d & 2;
    d !== c && yi(a, d);
    return new b(a)
}
function Hj(a) {
    a = new a;
    K(S(a));
    var b = Q ? a[L(R)] : a.O;
    Ei(b);
    return a
}
;var Ij = {};
function Jj(a) {
    return a
}
Jj[qi] = Ij;
function Kj(a) {
    return a
}
;function Lj(a, b) {
    if (typeof b === v)
        try {
            b = Mh(b)
        } catch (c) {
            return !1
        }
    return Nh(b) && Oh(a, b)
}
function Mj(a) {
    switch (a) {
    case eb:
    case v:
    case m:
        return !0;
    default:
        return !1
    }
}
function Nj(a, b) {
    if (S(a))
        K(S(a)),
        a = Q ? a[L(R)] : a.O;
    else if (!Array.isArray(a))
        return !1;
    if (S(b))
        K(S(b)),
        b = Q ? b[L(R)] : b.O;
    else if (!Array.isArray(b))
        return !1;
    return Oj(a, b, void 0, 2)
}
function Pj(a, b, c) {
    return Oj(a, b, c, 0)
}
function Oj(a, b, c, d) {
    if (a === b || a == null && b == null)
        return !0;
    if (a instanceof Map)
        return a.De(b, c);
    if (b instanceof Map)
        return b.De(a, c);
    if (a == null || b == null)
        return !1;
    if (a instanceof Rh)
        return $h(a, b);
    if (b instanceof Rh)
        return $h(b, a);
    if (Nh(a))
        return Lj(a, b);
    if (Nh(b))
        return Lj(b, a);
    var e = typeof a
      , f = typeof b;
    if (e !== q || f !== q)
        return Number.isNaN(a) || Number.isNaN(b) ? String(a) === String(b) : Mj(e) && Mj(f) ? "" + a === "" + b : e === fb && f === m || e === m && f === fb ? !a === !b : !1;
    if (S(a) || S(b))
        return Nj(a, b);
    if (a.constructor != b.constructor)
        return !1;
    if (a.constructor === Array) {
        f = M(a, t)[P] | 0;
        var g = M(b, t)[P] | 0
          , h = a.length
          , l = b.length
          , n = Math.max(h, l);
        e = f | g | 64;
        K(e & 64);
        e = e & 128 ? 0 : -1;
        if (d === 1 || (f | g) & 1)
            K(d !== 2),
            d = 1;
        else if ((f | g) & 8192)
            return K(d !== 2),
            Qj(a, b);
        f = h && a[h - 1];
        g = l && b[l - 1];
        f != null && typeof f === q && !f[ti] && f.constructor === Object || (f = null);
        g != null && typeof g === q && !g[ti] && g.constructor === Object || (g = null);
        h = h - e - +!!f;
        l = l - e - +!!g;
        for (var p = 0; p < n; p++)
            if (!Rj(Ui(p, e), a, f, h, b, g, l, e, c, d))
                return !1;
        if (f)
            for (var r in f) {
                d = a;
                n = f;
                p = h;
                var u = b
                  , w = g
                  , O = l
                  , B = e
                  , U = c
                  , ha = +r;
                if (!(!Number.isFinite(ha) || ha < p || ha < O || Rj(ha, d, n, p, u, w, O, B, U, 2)))
                    return !1
            }
        if (g)
            for (var ua in g)
                if ((r = f && ua in f) || (r = a,
                d = f,
                n = h,
                p = b,
                u = g,
                w = l,
                O = e,
                B = c,
                U = +ua,
                r = !Number.isFinite(U) || U < n || U < w ? !0 : Rj(U, r, d, n, p, u, w, O, B, 2)),
                !r)
                    return !1;
        return !0
    }
    if (a.constructor === Object)
        return Pj([a], [b]);
    throw Error("Invalid type in JSPB array: " + JSON.stringify(a) + " vs " + JSON.stringify(b));
}
function Rj(a, b, c, d, e, f, g, h, l, n) {
    b = Sj(a, b, c, d, h);
    e = Sj(a, e, f, g, h);
    n = n === 1;
    if (e == null && $i(b) || b == null && $i(e))
        return !0;
    a = n ? l : l == null ? void 0 : l.j(a);
    return Oj(b, e, a, 0)
}
function Sj(a, b, c, d, e) {
    var f;
    return (f = a < d ? b[a + e] : void 0) != null ? f : c == null ? void 0 : c[a]
}
;function Tj() {
    throw Error("please construct maps as mutable then call toImmutable");
}
if (aj) {
    var Uj = function() {
        throw Error("Cannot perform instanceof checks on ImmutableMap: please use isImmutableMap or isMutableMap to assert on the mutability of a map. See go/jspb-api-gotchas#immutable-classes for more information");
    }
      , Vj = {};
    Object.defineProperties(Tj, (Vj[Symbol.hasInstance] = {
        value: Uj,
        configurable: !1,
        writable: !1,
        enumerable: !1
    },
    Vj));
    K(Tj[Symbol.hasInstance] === Uj, "defineProperties did not work: was it monkey-patched?")
}
function Wj(a, b) {
    if (!Array.isArray(a) || !Array.isArray(b))
        return 0;
    a = "" + a[0];
    b = "" + b[0];
    return a === b ? 0 : a < b ? -1 : 1
}
function Qj(a, b) {
    if (!Array.isArray(a) || !Array.isArray(b))
        return !1;
    a = pj(a);
    b = pj(b);
    Array.prototype.sort.call(a, Wj);
    Array.prototype.sort.call(b, Wj);
    var c = a.length
      , d = b.length;
    if (c === 0 && d === 0)
        return !0;
    for (var e = 0, f = 0; e < c && f < d; ) {
        var g = void 0
          , h = a[e];
        if (!Array.isArray(h))
            return !1;
        for (var l = h[0]; e < c - 1 && Pj((g = a[e + 1])[0], l); )
            e++,
            h = g;
        var n = void 0;
        g = b[f];
        if (!Array.isArray(g))
            return !1;
        for (var p = g[0]; f < d - 1 && Pj((n = b[f + 1])[0], p); )
            f++,
            g = n;
        if (!Pj(l, p))
            return !1;
        l = void 0;
        if (!Pj(h[1], g[1], (l = void 0) == null ? void 0 : l.j(2)))
            return !1;
        e++;
        f++
    }
    return e >= c && f >= d
}
;function Xj() {}
function Yj(a, b) {
    for (var c in a)
        !isNaN(c) && b(a, +c, M(a[c]))
}
function Zj(a) {
    var b = new Xj;
    Yj(a, function(c, d, e) {
        b[d] = pj(e)
    });
    b.vd = a.vd;
    return b
}
var ak = {
    Di: !0
};
function bk(a, b) {
    b < 100 || di(oi, 1, "0ubs:" + b)
}
;function ck(a, b, c, d, e) {
    var f = d !== void 0;
    d = !!d;
    var g = Wc(mi), h;
    !f && gi && g && (h = a[g]) && Yj(h, bk);
    g = [];
    var l = a.length;
    h = 4294967295;
    var n = !1
      , p = !!(b & 64);
    if (p) {
        K(b & 64);
        var r = b & 128 ? 0 : -1
    } else
        r = void 0;
    if (!(b & 1)) {
        var u = l && a[l - 1];
        u == null || typeof u !== q || u[ti] || u.constructor !== Object ? u = void 0 : (l--,
        h = l);
        if (p && !(b & 128) && !f) {
            n = !0;
            var w;
            b = (w = dk) != null ? w : Jj;
            h = Ri(b(Ui(h, L(r)), L(r), a, u, e), L(r))
        }
    }
    e = void 0;
    for (w = 0; w < l; w++)
        if (b = a[w],
        b != null && (b = c(b, d)) != null)
            if (p && w >= h) {
                ek();
                var O = Ui(w, L(r))
                  , B = void 0;
                ((B = e) != null ? B : e = {})[O] = b
            } else
                g[w] = b;
    if (u)
        for (var U in u)
            l = u[U],
            l != null && (l = c(l, d)) != null && (w = +U,
            b = void 0,
            p && !Number.isNaN(w) && (b = Ri(w, L(r))) < h ? (ek(),
            g[L(b)] = l) : (w = void 0,
            ((w = e) != null ? w : e = {})[U] = l));
    e && (n ? g.push(e) : (K(h < 4294967295),
    g[h] = e));
    f && Wc(mi) && (M(g),
    M(a),
    K(g[mi] === void 0),
    (a = (c = Wc(mi)) ? M(a)[c] : void 0) && a instanceof Xj && (g[mi] = Zj(a)));
    return g
}
function fk(a) {
    L(a);
    switch (typeof a) {
    case m:
        return Number.isFinite(a) ? a : "" + a;
    case eb:
        return oe(a) ? Number(a) : "" + a;
    case fb:
        return a ? 1 : 0;
    case q:
        if (Array.isArray(a)) {
            cj(a);
            var b = M(a, t)[P] | 0;
            return a.length === 0 && b & 1 ? void 0 : ck(a, b, fk)
        }
        if (Pi(a))
            return gk(a);
        if (a instanceof Rh)
            return Xh(a);
        K(!(a instanceof Uint8Array));
        return
    }
    return a
}
var hk = Qh ? structuredClone : function(a) {
    M(a);
    return ck(a, 0, fk)
}
, dk;
function ik(a) {
    K(!dk);
    return gk(a)
}
function gk(a) {
    K(S(a));
    var b = Q ? a[L(R)] : a.O;
    var c = M(b, t)[P] | 0;
    Bi(b, c);
    return ck(b, c, fk, void 0, a.constructor)
}
function ek() {
    var a, b = (a = dk) != null ? a : Jj;
    K(b !== Kj)
}
function jk(a) {
    K(!dk);
    try {
        return Kj != null && Kj !== Kj && Kj[qi] !== Ij && Dg("Invalid pivot selector"),
        dk = Kj,
        a()
    } finally {
        dk = void 0
    }
}
;var kk = new WeakMap
  , lk = new WeakSet;
function mk(a, b) {
    if (!b && (kk == null ? 0 : kk.has(a)))
        return kk.get(a);
    if (lk == null ? 0 : lk.has(a))
        throw Error("this array was already transferred");
    if (!Array.isArray(a))
        throw Error("must be an array");
    if (Object.isFrozen(a) || Object.isSealed(a) || !Object.isExtensible(a))
        throw Error("arrays passed to jspb constructors must be mutable");
    b = b ? hk(a) : nk(a);
    ok(a);
    return b
}
function pk(a) {
    if (a != null)
        if (Array.isArray(a))
            ok(a);
        else if (!(typeof a !== q || a instanceof Rh)) {
            for (var b in a) {
                var c = a[b];
                a.hasOwnProperty(b) && (delete a[b],
                pk(c))
            }
            Object.defineProperty(a, "dontUseThisItBelongsToJspb", {
                enumerable: !0,
                get: qk
            });
            a.toJSON = qk;
            rk && Object.setPrototypeOf(a, rk);
            Object.freeze(a)
        }
}
var rk;
if (typeof Proxy !== "undefined") {
    var sk = qk;
    rk = new Proxy({},{
        getPrototypeOf: sk,
        setPrototypeOf: sk,
        isExtensible: sk,
        preventExtensions: sk,
        getOwnPropertyDescriptor: sk,
        defineProperty: sk,
        has: sk,
        get: sk,
        set: sk,
        deleteProperty: sk,
        apply: sk,
        construct: sk
    })
}
function ok(a) {
    if (!lk.has(a)) {
        lk.add(a);
        for (var b = 0; b < a.length; b++)
            pk(a[b]);
        if (!Object.isExtensible(a))
            throw Error("cannot transfer a frozen or sealed array");
        a.length = 1;
        a[0] = qk;
        a.toJSON = qk;
        rk && Object.setPrototypeOf(a, rk);
        Object.freeze(a)
    }
}
function qk(a, b) {
    if (b === ti)
        return !0;
    throw Error("this array or object is owned by JSPB and should not be reused, did you mean to copy it with copyJspbArray? See go/jspb-api-gotchas#construct_from_array");
}
function nk(a) {
    if (kk.has(a))
        return kk.get(a);
    var b = ck(a, 0, function(c) {
        var d = kk.get(c);
        if (d)
            return d;
        if (tk(c))
            throw Error("already transferred");
        return Array.isArray(c) ? nk(c) : c
    });
    kk.set(a, b);
    return b
}
function tk(a) {
    return a != null && typeof a === q && lk.has(a)
}
function uk(a) {
    if (kk == null ? 0 : kk.has(a))
        a = kk.get(a);
    return ck(a, 0, function(b) {
        return (kk == null ? 0 : kk.has(b)) || Array.isArray(b) ? uk(b) : fk(b)
    })
}
;function vk(a, b, c, d) {
    d = d === void 0 ? 0 : d;
    if (a != null)
        for (var e = 0; e < a.length; e++) {
            var f = a[e];
            Array.isArray(f) && cj(f)
        }
    if (a == null)
        e = 32,
        c ? (a = [c],
        e |= 128) : a = [],
        b && (e = Gi(e, b));
    else {
        if (!Array.isArray(a))
            throw Error("data passed to JSPB constructors must be an Array, got '" + JSON.stringify(a) + "' a " + Mc(a));
        e = M(a, t)[P] | 0;
        if (Xg && 1 & e)
            throw Error("Array passed to JSPB constructor is a repeated field array that belongs to another proto instance.");
        2048 & e && !(2 & e) && wk();
        if (Object.isFrozen(a) || !Object.isExtensible(a) || Object.isSealed(a))
            throw Error("data passed to JSPB constructors must be mutable");
        if (e & 256)
            throw Error("farr");
        if (e & 64)
            return (e | d) !== e && yi(a, e |= d),
            Bi(a, e),
            a;
        if (c && (e |= 128,
        c !== a[0]))
            throw Error('Expected message to have a message id: "' + c + '" in the array, got: ' + JSON.stringify(a[0]) + " a " + Mc(a[0]) + ", are you parsing with the wrong proto?");
        a: {
            c = a;
            e |= 64;
            var g = c.length;
            if (g) {
                var h = g - 1;
                f = c[h];
                if (f != null && typeof f === q && !f[ti] && f.constructor === Object) {
                    b = Hi(e);
                    g = Ui(h, b);
                    if (g >= 1024)
                        throw Error("Found a message with a sparse object at fieldNumber " + g + " is >= the limit 1024");
                    for (var l in f)
                        h = +l,
                        h < g && (h = Ri(h, b),
                        K(c[h] == null),
                        c[h] = f[l],
                        delete f[l]);
                    e = Gi(e, g);
                    break a
                }
            }
            if (b) {
                l = Math.max(b, Ui(g, Hi(e)));
                if (l > 1024)
                    throw Error("a message was constructed with an array of length " + g + " which is longer than 1024, are you using a supported serializer?");
                e = Gi(e, l)
            }
        }
    }
    yi(a, e | 64 | d);
    return a
}
function wk() {
    if (Xg)
        throw Error("Array passed to JSPB constructor already belongs to another JSPB proto instance");
}
;function xk(a) {
    K(!(2 & a));
    K(!(2048 & a));
    return !(4096 & a) && !(16 & a)
}
function yk(a, b) {
    L(a);
    if (typeof a !== q)
        return a;
    if (Array.isArray(a)) {
        cj(a);
        var c = M(a, t)[P] | 0;
        a.length === 0 && c & 1 ? a = void 0 : c & 2 || (b && xk(c) ? (Ai(a, 34),
        c & 4 && Object.freeze(a)) : a = zk(a, c, !1, b && !(c & 16)));
        return a
    }
    if (Pi(a))
        return K(Pi(a)),
        b = Li(a),
        c = Ci(b),
        Vi(a, c) ? a : Ak(a, b, c) ? Bk(a, b) : zk(b, c);
    if (a instanceof Rh)
        return a;
    K(!(a instanceof Uint8Array))
}
function Bk(a, b, c) {
    a = new a.constructor(b);
    c && Yi(a, !0);
    a.l = Xi;
    return a
}
function zk(a, b, c, d) {
    K(b === (M(a, t)[P] | 0));
    d != null || (d = !!(34 & b));
    a = ck(a, b, yk, d);
    d = 32;
    c && (d |= 2);
    b = b & 16769217 | d;
    yi(a, b);
    return a
}
function Ck(a) {
    K(S(a));
    var b = Q ? a[L(R)] : a.O;
    var c = M(b, t)[P] | 0;
    Bi(b, c);
    return Vi(a, c) ? Ak(a, b, c) ? Bk(a, b, !0) : new a.constructor(zk(b, c, !1)) : a
}
function Dk(a) {
    if (!Wi(a))
        return !1;
    var b;
    K(S(a));
    var c = b = Q ? a[L(R)] : a.O
      , d = M(c, t)[P] | 0;
    Bi(c, d);
    K(d & 2);
    b = zk(b, d);
    Ai(b, 2048);
    K(S(a));
    M(b);
    Q ? a[L(R)] = b : a.O = b;
    Yi(a, !1);
    a.l = void 0;
    return !0
}
function Ek(a) {
    var b;
    if (b = !Dk(a)) {
        K(S(a));
        b = Q ? a[L(R)] : a.O;
        var c = M(b, t)[P] | 0;
        Bi(b, c);
        b = Vi(a, c)
    }
    if (b)
        throw Error("Cannot mutate an immutable Message");
}
function Fk(a, b) {
    if (b === void 0)
        b = M(a, t)[P] | 0,
        Bi(a, b, !0);
    else {
        var c = M(a, t)[P] | 0;
        Bi(a, c, !0);
        K(b === c)
    }
    K(!(b & 2));
    b & 32 && !(b & 4096) && yi(a, b | 4096)
}
function Ak(a, b, c) {
    return Zi && a[Zi] ? !1 : c & 2 ? !0 : c & 32 && !(c & 4096) ? (yi(b, c | 2),
    Yi(a, !0),
    !0) : !1
}
;var Gk = fe(0)
  , Hk = {};
function Ik(a, b, c, d, e) {
    K(Object.isExtensible(a));
    K(S(a));
    var f = Q ? a[L(R)] : a.O;
    b = Jk(f, b, c, e);
    (c = b !== null) || (d && (a = a.l,
    K(a === void 0 || a === Xi),
    d = a !== Xi),
    c = d);
    if (c)
        return b
}
function Jk(a, b, c, d) {
    gj(a, c);
    if (b === -1)
        return null;
    var e = Si(b, c);
    K(e === Ri(b, Hi(M(a, t)[P] | 0)));
    K(e >= 0);
    var f = a.length - 1;
    if (!(f < Si(1, c))) {
        if (e >= f) {
            var g = a[f];
            if (g == null || typeof g !== q || g[ti] || g.constructor !== Object)
                if (e === f)
                    c = g;
                else
                    return;
            else {
                c = g[b];
                var h = !0
            }
        } else
            c = a[e];
        if (d && c != null) {
            d = d(c);
            if (d == null)
                return d;
            if (!Object.is(d, c))
                return h ? g[b] = d : a[e] = d,
                d
        }
        return c
    }
}
function Kk(a, b, c, d) {
    Ek(a);
    K(S(a));
    var e = Q ? a[L(R)] : a.O;
    var f = M(e, t)[P] | 0;
    Bi(e, f);
    Lk(e, f, b, c, d);
    return a
}
function Lk(a, b, c, d, e) {
    gj(a, e);
    var f = Si(c, e);
    K(f === Ri(c, Hi(M(a, t)[P] | 0)));
    K(f >= 0);
    var g = a.length - 1;
    if (g >= Si(1, e) && f >= g) {
        var h = a[g];
        if (h != null && typeof h === q && !h[ti] && h.constructor === Object)
            return h[c] = d,
            b
    }
    if (f <= g)
        return a[f] = d,
        b;
    d !== void 0 && ((g = b) == null && (b = M(a, t)[P] | 0,
    Bi(a, b),
    g = b),
    K(g & 64),
    g = g >> 14 & 1023 || 536870912,
    c >= g ? (K(g !== 536870912),
    d != null && (f = {},
    a[Si(g, e)] = (f[c] = d,
    f))) : a[f] = d);
    return b
}
function Mk(a, b) {
    if (!a)
        return a;
    K(Di(b) ? Vi(a) : !0);
    return a
}
function Nk(a, b, c) {
    c = c === void 0 ? !1 : c;
    cj(a, c);
    var d = M(a, t)[P] | 0;
    K(d & 1);
    c || (K(Object.isFrozen(a) || d & 16),
    K(Di(b) ? Object.isFrozen(a) : !0))
}
function Ok(a, b, c, d, e, f, g, h) {
    var l = b;
    f === 1 || (f !== 4 ? 0 : 2 & b || !(16 & b) && 32 & d) ? Pk(b) || (e = !a.length || g && !(4096 & b) || !!(32 & d) && xk(b),
    b |= e ? 2 : 256,
    b !== l && yi(a, b),
    Object.freeze(a)) : (f === 2 && Pk(b) && (a = pj(a),
    l = 0,
    b = Qk(b, d),
    d = L(Lk(c, d, e, a))),
    Pk(b) || (h || (b |= 16),
    b !== l && yi(a, b)));
    2 & b || xk(b) || Fk(c, d);
    return a
}
function Rk(a, b) {
    a = Jk(a, b);
    return Array.isArray(a) ? a : wi
}
function Sk(a, b) {
    2 & b && (a |= 2);
    return a | 1
}
function Pk(a) {
    return !!(2 & a) && !!(4 & a) || !!(256 & a)
}
function Tk(a) {
    a != null && (typeof a === v ? a = Uh(a) : a.constructor !== Rh && (Nh(a) ? (K(a instanceof Uint8Array || Array.isArray(a)),
    a = a.length ? new Rh(new Uint8Array(a),Ph) : Vh()) : a = void 0));
    return a
}
function Uk(a, b) {
    Ek(a);
    K(S(a));
    var c = Q ? a[L(R)] : a.O;
    var d = M(c, t)[P] | 0;
    Bi(c, d);
    Vk(c, d, b, 0);
    return a
}
function Wk(a, b, c) {
    return Xk(a, b) === c ? c : -1
}
function Xk(a, b) {
    K(S(a));
    a = Q ? a[L(R)] : a.O;
    return Yk(Zk(a), a, void 0, b)
}
function Zk(a) {
    if (gi) {
        var b;
        return (b = a[ki]) != null ? b : a[ki] = new Map
    }
    if (ki in a)
        return Ig(a[ki], Map);
    b = new Map;
    Object.defineProperty(a, ki, {
        value: b
    });
    return b
}
function Vk(a, b, c, d) {
    K(d === 0 || c.includes(d));
    var e = Zk(a)
      , f = Yk(e, a, b, c);
    f !== d && (f && Lk(a, b, f),
    e.set(c, d))
}
function Yk(a, b, c, d) {
    gj(b);
    var e = a.get(d);
    if (e != null)
        return e;
    for (var f = e = 0; f < d.length; f++) {
        var g = d[f];
        Jk(b, g) != null && (e !== 0 && (c = Lk(b, c, e)),
        e = g)
    }
    a.set(d, e);
    return e
}
function $k(a, b, c) {
    Ek(a);
    K(S(a));
    a = Q ? a[L(R)] : a.O;
    var d = M(a, t)[P] | 0;
    Bi(a, d);
    var e = Jk(a, c)
      , f = void 0 === ej;
    b = Gj(e, b, !f, d);
    if (!f || b)
        return b = Ck(b),
        e !== b && (d = Lk(a, d, c, b),
        Fk(a, d)),
        b
}
function al(a, b, c, d, e) {
    var f = !1;
    d = Jk(a, d, e, function(g) {
        var h = Gj(g, c, !1, b);
        f = h !== g && h != null;
        return h
    });
    if (d != null)
        return f && !Vi(d) && Fk(a, b),
        Mk(d, a)
}
function bl(a, b, c, d) {
    K(S(a));
    a = Q ? a[L(R)] : a.O;
    var e = M(a, t)[P] | 0;
    Bi(a, e);
    return al(a, e, b, c, d) || b[ji] || (b[ji] = Hj(b))
}
function cl(a, b, c, d) {
    K(S(a));
    var e = Q ? a[L(R)] : a.O;
    var f = M(e, t)[P] | 0;
    Bi(e, f);
    b = al(e, f, b, c, d);
    if (b == null)
        return b;
    f = M(e, t)[P] | 0;
    Bi(e, f);
    var g = f;
    Vi(a, g) || (f = Ck(b),
    f !== b && (Dk(a) && (K(S(a)),
    e = Q ? a[L(R)] : a.O,
    a = M(e, t)[P] | 0,
    Bi(e, a),
    g = a),
    b = f,
    g = Lk(e, g, c, b, d),
    Fk(e, g)));
    return Mk(b, e)
}
function dl(a, b, c) {
    K(S(a));
    var d = Q ? a[L(R)] : a.O;
    var e = M(d, t)[P] | 0;
    Bi(d, e);
    var f = e
      , g = !1
      , h = Vi(a, f);
    e = h ? 1 : 4;
    g = !!g || e === 3;
    var l = !h;
    (e === 2 || l) && Dk(a) && (K(S(a)),
    a = d = Q ? a[L(R)] : a.O,
    f = M(a, t)[P] | 0,
    Bi(a, f));
    a = Rk(d, c);
    var n = a === wi ? 7 : M(a, t)[P] | 0
      , p = Sk(n, f);
    if (h = !(4 & p)) {
        var r = a
          , u = f
          , w = !!(2 & p);
        w && (u |= 2);
        for (var O = !w, B = !0, U = 0, ha = 0; U < r.length; U++) {
            var ua = Gj(r[U], b, !1, u);
            if (ua instanceof b) {
                if (!w) {
                    var ac = Vi(ua);
                    O && (O = !ac);
                    B && (B = ac)
                }
                r[ha++] = ua
            }
        }
        ha < U && (r.length = ha);
        p |= 4;
        p = B ? p & -4097 : p | 4096;
        p = O ? p | 8 : p & -9
    }
    p !== n && (yi(a, p),
    2 & p && Object.freeze(a));
    if (l && !(8 & p || !a.length && (e === 1 || (e !== 4 ? 0 : 2 & p || !(16 & p) && 32 & f)))) {
        Pk(p) && (a = pj(a),
        p = Qk(p, f),
        f = L(Lk(d, f, c, a)));
        b = a;
        l = p;
        for (n = 0; n < b.length; n++)
            r = b[n],
            p = Ck(r),
            r !== p && (b[n] = p);
        l |= 8;
        p = l = b.length ? l | 4096 : l & -4097;
        yi(a, p)
    }
    a = Ok(a, p, d, f, c, e, h, g);
    if (!g) {
        c = a;
        e = e === 2;
        e = e === void 0 ? !1 : e;
        g = Di(d);
        f = Di(c);
        b = Object.isFrozen(c) && f;
        Nk(c, d, e);
        if (g || f)
            e ? K(f) : K(b);
        K(!!((M(c, t)[P] | 0) & 4));
        if (f && c.length)
            for (e = 0; e < 1; e++)
                Mk(c[e], d)
    }
    return a
}
function Qk(a, b) {
    return a = (2 & b ? a | 2 : a & -3) & -273
}
function el(a, b, c) {
    return fi() ? Ej(Ik(a, b, c)) : Ik(a, b, c, void 0, Ej)
}
function fl(a, b, c, d) {
    return Fj(Ik(a, b, c, d))
}
function gl(a, b) {
    a = Ik(a, b);
    return a == null ? a : sj(a) ? a | 0 : void 0
}
function hl(a, b) {
    var c = c === void 0 ? !1 : c;
    a = Ik(a, b);
    a = a == null || typeof a === fb ? a : typeof a === m ? !!a : void 0;
    return a != null ? a : c
}
function il(a, b, c) {
    c = c === void 0 ? 0 : c;
    var d;
    return (d = zj(Ik(a, b))) != null ? d : c
}
function jl(a, b) {
    var c = c === void 0 ? Gk : c;
    var d;
    return (d = el(a, b)) != null ? d : c
}
function kl(a, b) {
    var c = c === void 0 ? "" : c;
    var d;
    return (d = fl(a, b)) != null ? d : c
}
function ll(a, b) {
    var c = c === void 0 ? 0 : c;
    var d;
    return (d = gl(a, b)) != null ? d : c
}
;K(!0);
var ml;
function nl() {
    var a;
    return (a = ml) != null ? a : ml = Math.floor(Math.random() * 1E3)
}
function ol(a, b) {
    var c;
    return (c = a[li]) != null ? c : a[li] = b(a)
}
function pl(a) {
    for (var b = 1, c = a.length, d = a[c - 1]; d === "=" || d === "."; d = a[--c - 1])
        ;
    d = c - 4;
    for (var e = 0; e < d; )
        b = a.charCodeAt(e) + 31 * b | 0,
        b = a.charCodeAt(e + 1) + 31 * b | 0,
        b = a.charCodeAt(e + 2) + 31 * b | 0,
        b = a.charCodeAt(e + 3) + 31 * b | 0,
        e += 4;
    for (; e < c; )
        b = a.charCodeAt(e++) + 31 * b | 0;
    return b
}
function ql(a) {
    for (var b = 0, c = a.length, d = 0; d < c; d++) {
        var e = a[d];
        if (d !== c - 1 || e == null || typeof e !== q || e[ti] || e.constructor !== Object)
            b = b + rl(e) | 0;
        else
            for (var f in e)
                !Number.isNaN(+f) && (b = b + rl(e[f]) | 0)
    }
    return b * 17 | 0
}
function sl(a) {
    return pl(Xh(a))
}
function tl(a) {
    K(S(a));
    a = Q ? a[L(R)] : a.O;
    return ql(a)
}
function ul(a) {
    return ql([].concat(oc(a.entries())))
}
var vl = pl("1")
  , wl = pl("0");
function rl(a) {
    if (a == null)
        return 0;
    switch (typeof a) {
    case fb:
        return a ? vl : wl;
    case v:
        return pl(a);
    case q:
        if (Array.isArray(a))
            return ql(a);
        if (S(a))
            return Vi(a) ? ol(a, tl) : tl(a);
        var b = !(!a || typeof a !== q || a.v !== Qi);
        K(b === a instanceof Map);
        if (b)
            return a.j & 2 ? ol(a, ul) : ul(a);
        if (a instanceof Rh)
            return ol(a, sl);
        Dg("unknown object %s with ctor %s in Message array", a, a.constructor)
    }
    return pl(String(a))
}
;function xl(a, b, c) {
    this.preventPassingToStructuredClone = bj;
    Ig(this, xl, "The message constructor should only be used by subclasses");
    K(this.constructor !== xl, "Message is an abstract class and cannot be directly constructed");
    var d = this.constructor, e;
    if (a && ((e = a[si]) != null ? e : a[si] = d) !== d)
        throw Error("data must only be constructed with one message type");
    a = vk(a, b, c, 2048);
    K(S(this));
    M(a);
    Q ? this[L(R)] = a : this.O = a;
    K(S(this));
    a = Q ? this[L(R)] : this.O;
    b = M(a, t)[P] | 0;
    Bi(a, b);
    K(b & 64);
    K(b & 2048)
}
xl.prototype.toJSON = function() {
    return ik(this)
}
;
function yl(a, b) {
    Gg(a);
    if (b == null || b == "")
        return Ig(new a, xl);
    Fg(b);
    b = JSON.parse(b);
    if (!Array.isArray(b))
        throw Error("Expected to deserialize an Array but got " + Mc(b) + da + b);
    return new a(Fi(b))
}
function zl(a) {
    var b = Al;
    K(!0, "repeated extensions don't support getExtensionOrUndefined");
    Ig(a, b.v);
    a = Ig(a, xl);
    var c = b.j;
    K(S(a));
    var d = Li(a);
    M(d);
    var e = Wc(mi), f;
    gi && e && ((f = d[e]) == null ? void 0 : f[c]) != null && di(ni, 3, "0ub:" + c);
    a: {
        f = b.j;
        var g = g === void 0 ? !1 : g;
        if (Wc(ri) && Wc(mi) && void 0 === ri) {
            c = Li(a);
            d = c[mi];
            if (!d)
                break a;
            if (d = d.vd)
                try {
                    d(c, f, ak);
                    break a
                } catch (h) {
                    throw Error("unknown binary extension " + f);
                }
        }
        g && (K(S(a)),
        K(S(a)),
        g = Q ? a[L(R)] : a.O,
        M(g),
        (c = Wc(mi)) && c in g && (g = g[c]) && delete g[f])
    }
    b = b.ctor ? b.l(a, b.ctor, b.j, b.o) : b.l(a, b.j, null, b.o);
    return b === null ? void 0 : b
}
xl.prototype.clone = function() {
    var a = Ig(this, xl);
    K(Pi(a));
    var b = Li(a)
      , c = Ci(b);
    return Ak(a, b, c) ? Bk(a, b, !0) : new a.constructor(zk(b, c, !1))
}
;
xl.prototype.ed = function() {
    return Vi(this)
}
;
function Bl() {
    var a = E;
    a = a === void 0 ? window : a;
    var b = new Cl(Dl("K1cgmc", a));
    a = El;
    var c = new El;
    b = Fl(b);
    b === null ? a = c : (K(b.startsWith("%.@."), za),
    a = yl(a, "[" + b.substring(4)));
    K(S(a));
    c = Q ? a[L(R)] : a.O;
    b = M(c, t)[P] | 0;
    Bi(c, b);
    return Vi(a, b) ? a : Ak(a, c, b) ? Bk(a, c) : new a.constructor(zk(c, b, !0))
}
Mi = xl;
xl.prototype.Tc = 1;
xl.prototype[pi] = Oi;
xl.prototype.toString = function() {
    K(S(this));
    return (Q ? this[L(R)] : this.O).toString()
}
;
function Gl(a, b) {
    if (b == null)
        return new a;
    b = mk(b, !0);
    a = new a(Fi(b));
    Ig(a, xl);
    return a
}
function Hl(a, b) {
    Ig(a, xl);
    K(a.ed());
    b == null ? (a = a.constructor,
    a = a[ji] || (a[ji] = Hj(a))) : a = new a.constructor(Ei(mk(b, !1)));
    Ig(a, xl);
    return a
}
;function Il(a, b, c) {
    K(a > 0);
    this.j = a;
    this.v = b;
    this.ctor = c;
    this.l = cl;
    this.defaultValue = void 0;
    this.o = b.S != null ? Ti : void 0;
    K(!0, "lazyParse must be undefined or LAZILY_PARSE_LATE_LOADED_EXTENSIONS_SYMBOL")
}
Il.prototype.register = function() {
    xh(this)
}
;
function Jl(a) {
    if (a instanceof xl)
        return a.constructor.T
}
;(function() {
    var a = E.jspbGetTypeName;
    E.jspbGetTypeName = a ? function(b) {
        return a(b) || Jl(b)
    }
    : Jl
}
)();
function Kl(a) {
    if (typeof a === eb) {
        var b = Number(a);
        return Number.isSafeInteger(b) ? b : "" + a
    }
    return a
}
function Ll(a) {
    return Array.isArray(a) ? a.map(Kl) : a == null ? void 0 : Kl(a)
}
var T = xl;
function Ml(a) {
    if (Vi(a))
        throw Error("message must be mutable");
}
function Nl(a) {
    return function() {
        return a[ji] || (a[ji] = Hj(a))
    }
}
function Ol(a) {
    return function(b) {
        return yl(a, b)
    }
}
function Pl(a) {
    var b = {};
    return a[fj] = b
}
;Rh.prototype.equals = function(a) {
    return Yh(this, a)
}
;
Rh.prototype.ja = function() {
    return rl(this) + nl() | 0
}
;
xl.prototype.equals = function(a) {
    var b = this === a || this == null && a == null || !(!this || !a) && this instanceof a.constructor && Nj(this, a);
    if (this && a && this.constructor === a.constructor && !b) {
        var c = this.constructor
          , d = c.makeCrossSerializerComparisonsCompatible;
        if (d) {
            var e = ik(this);
            e = new c(e);
            d(e);
            if (Nj(e, K(a)))
                throw Error("Comparison between protos had a false negative and would have changed from false to true with type information. Please add a call to " + (c.displayName + ".makeCrossSerializerComparisonsCompatible to one or both sides of the comparison to ensure it is reliable.\n\nCompared protos were:\n") + (JSON.stringify(ik(this)) + " and " + JSON.stringify(ik(a)) + "\n"));
        }
    }
    return b
}
;
xl.prototype.ja = function() {
    return rl(this) + nl() | 0
}
;
function Ql(a) {
    K(a == null || ie(a));
    return a == null ? null : Rl(a)
}
function Rl(a) {
    K(ie(a), "Expected a gbigint, got " + a + " of type " + typeof a);
    K(oe(a), "Expected a safe int52, got " + a);
    return oe(a) ? Number(a) : String(a)
}
;function Sl(a) {
    T.call(this, a)
}
A(Sl, T);
Sl.T = "drive_storage.WrappedResourceKey";
function Tl(a) {
    T.call(this, a, 0, Tl.S)
}
A(Tl, T);
Tl.T = "fava.request.DebugInfoResponse";
Tl.S = "di";
var Ul = Nl(Tl);
function Vl(a) {
    T.call(this, a, 0, Vl.S)
}
A(Vl, T);
Vl.T = "fava.request.EndPageResponse";
Vl.S = "e";
function Wl(a) {
    T.call(this, a, 0, Wl.S)
}
A(Wl, T);
Wl.T = "fava.request.RecipientInfoResponse";
Wl.S = "f.ri";
var Xl = Nl(Wl);
function Yl(a) {
    T.call(this, a, 0, Yl.S)
}
A(Yl, T);
Yl.prototype.ta = function() {
    return fl(this, 1, Ti, Hk)
}
;
Yl.T = "fava.request.XsrfData";
Yl.S = "xsrf";
function Zl(a) {
    T.call(this, a, 1)
}
A(Zl, T);
Zl.T = "proto2.bridge.MessageSet";
var $l = Pl(Zl);
var Al = new Il(48448350,Zl,Yl);
$l[48448350] = {
    yi: Al
};
function am(a) {
    T.call(this, a)
}
A(am, T);
am.prototype.getTypeName = function() {
    return kl(this, 1).split("/").pop()
}
;
var bm = function(a) {
    return Td(function(b) {
        return b instanceof a && !Vi(b)
    }, function() {
        var b = a.T;
        b || (b = (b = a.displayName) ? b : a.name || "");
        return "MutableMessage:" + b
    })
}(am);
am.T = "google.protobuf.Any";
function cm(a, b) {
    var c = 2;
    c = c === void 0 ? 2 : c;
    this.key = a;
    this.defaultValue = !1;
    this.phase = c;
    this.flagNameForDebugging = b
}
cm.prototype.ctor = function(a) {
    return typeof a === fb ? a : this.defaultValue
}
;
function dm() {
    var a = em('[["feature named `pageObserver` was not found","feature named `hover` was not found"]]')
      , b = fm
      , c = 2;
    c = c === void 0 ? 2 : c;
    this.key = "45696263";
    this.defaultValue = a;
    this.j = b;
    this.phase = c;
    this.flagNameForDebugging = "AppsTelemetryRapidDowngradesFeature__errors_to_downgrade"
}
dm.prototype.ctor = function(a) {
    if (typeof a === v && a)
        return yl(this.j, a);
    if (!bm(a))
        return this.defaultValue.clone();
    var b;
    try {
        var c, d = this.j, e = (c = a.getTypeName()) != null ? c : "";
        if (kl(a, 1).split("/").pop() != e)
            var f = null;
        else {
            var g = typeof d === k ? d : d.constructor
              , h = g.T;
            if (h !== e)
                throw Error("tried to unpack type " + h + " out of an Any with type label " + e);
            K(S(a));
            var l = Q ? a[L(R)] : a.O;
            c = l;
            var n = M(c, t)[P] | 0;
            Bi(c, n);
            var p = n;
            var r = Jk(l, 2);
            if (Dk(a)) {
                K(S(a));
                n = l = Q ? a[L(R)] : a.O;
                var u = M(n, t)[P] | 0;
                Bi(n, u);
                p = u
            }
            if (r != null && !Array.isArray(r) && !Pi(r))
                throw Error("saw an invalid value of type '" + Mc(r) + "' in the Any.value field");
            var w = Gj(r, g, !0, p);
            if (!(w instanceof g))
                throw Error("incorrect type in any value: got " + w.constructor.displayName + ", expected " + g.displayName);
            (g = !!(2 & p)) || (w = Ck(w));
            r !== w && (Lk(l, p, 2, w),
            g || Fk(l));
            var O = w;
            K(Vi(O) === Vi(a));
            f = O
        }
    } catch (B) {
        f = null
    }
    return (b = f) != null ? b : this.defaultValue.clone()
}
;
function gm(a) {
    T.call(this, a)
}
A(gm, T);
gm.prototype.clearValue = function() {
    return Uk(this, hm)
}
;
gm.T = "experiments.proto.ClientFlag.SerializedProtoValue";
var hm = [1, 2];
function im(a) {
    T.call(this, a)
}
A(im, T);
im.prototype.clearValue = function() {
    return Uk(this, jm)
}
;
im.T = "experiments.proto.ClientFlag";
var jm = [2, 3, 4, 5, 6, 8];
function km(a) {
    T.call(this, a)
}
A(km, T);
km.prototype.Yc = function() {
    var a = Ik(this, 3, void 0, void 0, Tk);
    return a == null ? Vh() : a
}
;
km.T = "experiments.proto.ClientExperimentState";
function lm(a) {
    T.call(this, a)
}
A(lm, T);
var mm = Ol(lm);
lm.T = "experiments.proto.ClientExperimentPayload";
function fm(a) {
    T.call(this, a)
}
A(fm, T);
var em = Ol(fm);
fm.T = "experiments.proto.StringListParam";
function Dl(a, b) {
    b = b === void 0 ? window : b;
    b = b === void 0 ? window : b;
    return (b = b.WIZ_global_data) && a in b ? b[a] : null
}
;var nm;
function om() {
    return nm = nm || new pm
}
function pm() {
    var a = null;
    this.l = !0;
    var b = Dl("TSDtV", window);
    if (b = typeof b !== v ? null : b)
        try {
            K(b.startsWith("%.@."), za);
            var c = mm("[" + b.substring(4));
            a = dl(c, km, 1)[0]
        } catch (w) {
            a = JSON.parse(b);
            var d;
            this.j = (d = a == null ? void 0 : a.flags) != null ? d : {};
            this.token = (a == null ? 0 : a.token) ? Uh(a.token) : null;
            return
        }
    if (a) {
        d = C(dl(a, im, 2));
        c = d.next();
        try {
            for (; !c.done; c = d.next()) {
                var e = c.value;
                b = void 0;
                var f = e
                  , g = Wk(e, jm, 6);
                K(S(f));
                b = Q ? f[L(R)] : f.O;
                var h = Jk(b, g);
                if (Pi(h) || Array.isArray(h))
                    throw Error("Any-serialized proto flag " + jl(e, 1) + " is not supported in TS.");
            }
        } finally {
            rc(d, c)
        }
    }
    if (a) {
        e = {};
        g = C(dl(a, im, 2));
        h = g.next();
        try {
            for (; !h.done; h = g.next()) {
                var l = h.value;
                var n = jl(l, 1).toString();
                switch (Xk(l, jm)) {
                case 3:
                    e[n] = hl(l, Wk(l, jm, 3));
                    break;
                case 2:
                    e[n] = Rl(jl(l, Wk(l, jm, 2)));
                    break;
                case 4:
                    d = void 0;
                    c = l;
                    var p = Wk(l, jm, 4);
                    b = void 0;
                    b = b === void 0 ? 0 : b;
                    var r = (d = Ik(c, p, void 0, void 0, uj)) != null ? d : b;
                    e[n] = r;
                    break;
                case 5:
                    e[n] = kl(l, Wk(l, jm, 5));
                    break;
                case 6:
                    e[n] = cl(l, am, Wk(l, jm, 6), void 0);
                    break;
                case 8:
                    var u = bl(l, gm, Wk(l, jm, 8));
                    switch (Xk(u, hm)) {
                    case 1:
                        e[n] = kl(u, Wk(u, hm, 1));
                        break;
                    default:
                        throw Error("Unrecognized serialized proto value case: " + Xk(u, hm));
                    }
                    break;
                default:
                    throw Error("Unrecognized value case: " + Xk(l, jm));
                }
            }
        } finally {
            rc(g, h)
        }
        l = e
    } else
        l = {};
    this.j = l;
    this.token = a ? a.Yc() : null
}
function qm(a, b) {
    return b.phase === 1 || a.l && !(b.key in a.j) ? b.defaultValue : b.ctor(a.j[b.key])
}
pm.prototype.Yc = bc("token");
function rm(a) {
    T.call(this, a)
}
A(rm, T);
rm.T = "frameworks.client.data.binding.DataRequest";
function sm(a) {
    T.call(this, a)
}
A(sm, T);
sm.T = "frameworks.client.data.binding.BatchDataRequest";
function tm(a) {
    T.call(this, a)
}
A(tm, T);
tm.T = "google.protobuf.Timestamp";
var um = new dm;
var vm = new cm("45723104","ChromeCrashStorageOtFeature__enable_crash_storage_ot_client");
var wm = new cm("45765314","UnsupportedSevereFeature__use_unsupported_severe_client");
function xm(a) {
    T.call(this, a)
}
A(xm, T);
xm.T = "docs.experiments.ClientExperimentFlagSetting";
var ym = Nl(xm);
var zm = typeof AsyncContext !== "undefined" && typeof AsyncContext.Snapshot === k ? function(a) {
    return a && AsyncContext.Snapshot.wrap(a)
}
: Yb();
function Am(a, b) {
    this.o = a;
    this.v = b;
    this.l = 0;
    this.j = null
}
Am.prototype.get = function() {
    if (this.l > 0) {
        this.l--;
        var a = this.j;
        this.j = a.next;
        a.next = null
    } else
        a = this.o();
    return a
}
;
function Bm(a, b) {
    a.v(b);
    a.l < 100 && (a.l++,
    b.next = a.j,
    a.j = b)
}
;var Cm = []
  , Dm = []
  , Em = !1;
function Fm(a) {
    Cm[Cm.length] = a;
    if (Em)
        for (var b = 0; b < Dm.length; b++)
            a(F(Dm[b].j, Dm[b]))
}
;Fm(Zb());
function Gm() {
    this.l = this.j = null
}
Gm.prototype.add = function(a, b) {
    var c = Hm.get();
    c.set(a, b);
    this.l ? this.l.next = c : (K(!this.j),
    this.j = c);
    this.l = c
}
;
Gm.prototype.remove = function() {
    var a = null;
    this.j && (a = this.j,
    this.j = this.j.next,
    this.j || (this.l = null),
    a.next = null);
    return a
}
;
var Hm = new Am(function() {
    return new Im
}
,function(a) {
    return a.reset()
}
);
function Im() {
    this.next = this.j = this.l = null
}
Im.prototype.set = function(a, b) {
    this.l = a;
    this.j = b;
    this.next = null
}
;
Im.prototype.reset = function() {
    this.next = this.j = this.l = null
}
;
var Jm = E.console && E.console.createTask ? E.console.createTask.bind(E.console) : void 0
  , Km = Jm ? Symbol("consoleTask") : void 0;
function Lm(a, b) {
    function c() {
        var h = Ec.apply(0, arguments)
          , l = this;
        return g.run(function() {
            return a.call.apply(a, [l].concat(oc(h)))
        })
    }
    b = b === void 0 ? "anonymous" : b;
    if (Km && a[Km])
        return a;
    var d = a, e, f = (e = Mm) == null ? void 0 : e();
    a = function() {
        var h = Ec.apply(0, arguments), l, n = (l = Mm) == null ? void 0 : l();
        if (f !== n)
            throw Error(b + " was scheduled in '" + f + "' but called in '" + n + "'.\nMake sure your test awaits all async calls.\n\nTIP: To help investigate, debug the test in Chrome and look at the async portion\nof the call stack to see what originally scheduled the callback.  Then, make the\ntest wait for the relevant asynchronous work to finish.");
        return d.call.apply(d, [this].concat(oc(h)))
    }
    ;
    if (!Jm)
        return a;
    var g = Jm(a.name || b);
    c[L(Km)] = g;
    return c
}
var Mm;
var Nm, Om = !1, Pm = new Gm;
function Qm(a, b) {
    a = Lm(a, "goog.async.run");
    Nm || Rm();
    Om || (Nm(),
    Om = !0);
    Pm.add(a, b)
}
function Rm() {
    var a = Promise.resolve(void 0);
    Nm = function() {
        a.then(Sm)
    }
}
function Sm() {
    for (var a; a = Pm.remove(); ) {
        try {
            a.l.call(a.j)
        } catch (b) {
            Kg(b)
        }
        Bm(Hm, a)
    }
    Om = !1
}
;function Tm() {
    return null
}
function Um() {}
;function Vm(a) {
    if (!a)
        return !1;
    try {
        return !!a.$goog_Thenable
    } catch (b) {
        return !1
    }
}
;function Wm(a) {
    this.j = 0;
    this.C = void 0;
    this.v = this.l = this.o = null;
    this.A = this.B = !1;
    if (a != Um)
        try {
            var b = this;
            a.call(void 0, function(c) {
                Xm(b, 2, c)
            }, function(c) {
                if (!(c instanceof Ym))
                    try {
                        if (c instanceof Error)
                            throw c;
                        throw Error("Promise rejected.");
                    } catch (d) {}
                Xm(b, 3, c)
            })
        } catch (c) {
            Xm(this, 3, c)
        }
}
function Zm() {
    this.next = this.v = this.o = this.l = this.j = null;
    this.A = !1
}
Zm.prototype.reset = function() {
    this.v = this.o = this.l = this.j = null;
    this.A = !1
}
;
var $m = new Am(function() {
    return new Zm
}
,function(a) {
    a.reset()
}
);
function an(a, b, c) {
    var d = $m.get();
    d.l = a;
    d.o = b;
    d.v = c;
    return d
}
function bn() {
    var a = document.URL;
    if (a instanceof Wm)
        return a;
    var b = new Wm(Um);
    Xm(b, 2, a);
    return b
}
Wm.prototype.then = function(a, b, c) {
    a != null && Gg(a, Bb);
    b != null && Gg(b, Cb);
    return cn(this, zm(typeof a === k ? a : null), zm(typeof b === k ? b : null), c)
}
;
Wm.prototype.$goog_Thenable = !0;
function dn(a, b, c, d) {
    b != null && Gg(b, Bb);
    c != null && Gg(c, Cb);
    en(a, an(b || Um, c || null, d))
}
y = Wm.prototype;
y.finally = function(a) {
    var b = this;
    a = zm(a);
    return new Wm(function(c, d) {
        dn(b, function(e) {
            a();
            c(e)
        }, function(e) {
            a();
            d(e)
        })
    }
    )
}
;
y.Jd = function(a, b) {
    return cn(this, null, zm(a), b)
}
;
y.catch = Wm.prototype.Jd;
y.cancel = function(a) {
    if (this.j == 0) {
        var b = new Ym(a);
        Qm(function() {
            fn(this, b)
        }, this)
    }
}
;
function fn(a, b) {
    if (a.j == 0)
        if (a.o) {
            var c = a.o;
            if (c.l) {
                for (var d = 0, e = null, f = null, g = c.l; g && (g.A || (d++,
                g.j == a && (e = g),
                !(e && d > 1))); g = g.next)
                    e || (f = g);
                e && (c.j == 0 && d == 1 ? fn(c, b) : (f ? (d = f,
                K(c.l),
                K(d != null),
                d.next == c.v && (c.v = d),
                d.next = d.next.next) : gn(c),
                hn(c, e, 3, b)))
            }
            a.o = null
        } else
            Xm(a, 3, b)
}
function en(a, b) {
    a.l || a.j != 2 && a.j != 3 || jn(a);
    K(b.l != null);
    a.v ? a.v.next = b : a.l = b;
    a.v = b
}
function cn(a, b, c, d) {
    b && (b = Lm(b, pb));
    c && (c = Lm(c, pb));
    var e = an(null, null, null);
    e.j = new Wm(function(f, g) {
        e.l = b ? function(h) {
            try {
                var l = b.call(d, h);
                f(l)
            } catch (n) {
                g(n)
            }
        }
        : f;
        e.o = c ? function(h) {
            try {
                var l = c.call(d, h);
                l === void 0 && h instanceof Ym ? g(h) : f(l)
            } catch (n) {
                g(n)
            }
        }
        : g
    }
    );
    e.j.o = a;
    en(a, e);
    return e.j
}
y.df = function(a) {
    K(this.j == 1);
    this.j = 0;
    Xm(this, 2, a)
}
;
y.ef = function(a) {
    K(this.j == 1);
    this.j = 0;
    Xm(this, 3, a)
}
;
function Xm(a, b, c) {
    if (a.j == 0) {
        a === c && (b = 3,
        c = new TypeError("Promise cannot resolve to itself"));
        a.j = 1;
        a: {
            var d = c
              , e = a.df
              , f = a.ef;
            if (d instanceof Wm) {
                dn(d, e, f, a);
                var g = !0
            } else if (Vm(d))
                d.then(e, f, a),
                g = !0;
            else {
                if (Oc(d))
                    try {
                        var h = d.then;
                        if (typeof h === k) {
                            kn(d, h, e, f, a);
                            g = !0;
                            break a
                        }
                    } catch (l) {
                        f.call(a, l);
                        g = !0;
                        break a
                    }
                g = !1
            }
        }
        g || (a.C = c,
        a.j = b,
        a.o = null,
        jn(a),
        b != 3 || c instanceof Ym || ln(a, c))
    }
}
function kn(a, b, c, d, e) {
    function f(l) {
        h || (h = !0,
        d.call(e, l))
    }
    function g(l) {
        h || (h = !0,
        c.call(e, l))
    }
    var h = !1;
    try {
        b.call(a, g, f)
    } catch (l) {
        f(l)
    }
}
function jn(a) {
    a.B || (a.B = !0,
    Qm(a.me, a))
}
function gn(a) {
    var b = null;
    a.l && (b = a.l,
    a.l = b.next,
    b.next = null);
    a.l || (a.v = null);
    b != null && K(b.l != null);
    return b
}
y.me = function() {
    for (var a; a = gn(this); )
        hn(this, a, this.j, this.C);
    this.B = !1
}
;
function hn(a, b, c, d) {
    if (c == 3 && b.o && !b.A)
        for (; a && a.A; a = a.o)
            a.A = !1;
    if (b.j)
        b.j.o = null,
        mn(b, c, d);
    else
        try {
            b.A ? b.l.call(b.v) : mn(b, c, d)
        } catch (e) {
            nn.call(null, e)
        }
    Bm($m, b)
}
function mn(a, b, c) {
    b == 2 ? a.l.call(a.v, c) : a.o && a.o.call(a.v, c)
}
function ln(a, b) {
    a.A = !0;
    Qm(function() {
        a.A && nn.call(null, b)
    })
}
var nn = Kg;
function Ym(a) {
    Ag.call(this, a);
    this.j = !1
}
Xc(Ym, Ag);
Ym.prototype.name = gb;
/*

 Copyright 2005, 2007 Bob Ippolito. All Rights Reserved.
 Copyright The Closure Library Authors.
 SPDX-License-Identifier: MIT
*/
function on(a) {
    this.A = [];
    this.H = a;
    this.v = this.j = !1;
    this.o = void 0;
    this.M = this.G = this.C = !1;
    this.B = 0;
    this.l = null;
    this.D = 0
}
y = on.prototype;
y.cancel = function(a) {
    if (this.j)
        this.o instanceof on && this.o.cancel();
    else {
        if (this.l) {
            var b = this.l;
            delete this.l;
            a ? b.cancel(a) : (b.D--,
            b.D <= 0 && b.cancel())
        }
        this.H ? this.H.call(null, this) : this.M = !0;
        this.j || this.rb(new pn(this))
    }
}
;
y.Qc = function(a, b) {
    this.C = !1;
    qn(this, a, b)
}
;
function qn(a, b, c) {
    a.j = !0;
    a.o = c;
    a.v = !b;
    rn(a)
}
function sn(a) {
    if (a.j) {
        if (!a.M)
            throw new tn(a);
        a.M = !1
    }
}
y.va = function(a) {
    sn(this);
    un(a);
    qn(this, !0, a)
}
;
y.rb = function(a) {
    sn(this);
    un(a);
    qn(this, !1, a)
}
;
function vn(a) {
    throw a;
}
function un(a) {
    K(!(a instanceof on), "An execution sequence may not be initiated with a blocking Deferred.")
}
function wn(a, b, c) {
    return xn(a, b, null, c)
}
function yn(a, b, c) {
    return xn(a, null, b, c)
}
function zn(a, b, c) {
    xn(a, b, function(d) {
        var e = b.call(this, d);
        if (e === void 0)
            throw d;
        return e
    }, c)
}
y.finally = function(a) {
    var b = this;
    return An(new Promise(function(c, d) {
        xn(b, function(e) {
            a();
            c(e)
        }, function(e) {
            a();
            d(e)
        })
    }
    ))
}
;
function xn(a, b, c, d) {
    K(!a.G, "Blocking Deferreds can not be re-used");
    var e = a.j;
    e || (b === c ? b = c = zm(b) : (b = zm(b),
    c = zm(c)));
    a.A.push([b, c, d]);
    e && rn(a);
    return a
}
y.then = function(a, b, c) {
    var d, e, f = new Wm(function(g, h) {
        e = g;
        d = h
    }
    );
    xn(this, e, function(g) {
        g instanceof pn ? f.cancel() : d(g);
        return Bn
    }, this);
    return f.then(a, b, c)
}
;
on.prototype.$goog_Thenable = !0;
function Cn(a) {
    var b = new on;
    xn(a, b.va, b.rb, b);
    return b
}
function Dn(a) {
    return nh(a.A, function(b) {
        return typeof b[1] === k
    })
}
var Bn = {};
function rn(a) {
    if (a.B && a.j && Dn(a)) {
        var b = a.B
          , c = En[b];
        c && (E.clearTimeout(c.j),
        delete En[b]);
        a.B = 0
    }
    a.l && (a.l.D--,
    delete a.l);
    b = a.o;
    for (var d = c = !1; a.A.length && !a.C; ) {
        var e = a.A.shift()
          , f = e[0]
          , g = e[1];
        e = e[2];
        if (f = a.v ? g : f)
            try {
                var h = f.call(e || null, b);
                h === Bn && (h = void 0);
                h !== void 0 && (a.v = a.v && (h == b || h instanceof Error),
                a.o = b = h);
                if (Vm(b) || typeof E.Promise === k && b instanceof E.Promise)
                    d = !0,
                    a.C = !0
            } catch (l) {
                b = l,
                a.v = !0,
                Dn(a) || (c = !0)
            }
    }
    a.o = b;
    d && (h = F(a.Qc, a, !0),
    d = F(a.Qc, a, !1),
    b instanceof on ? (xn(b, h, d),
    b.G = !0) : b.then(h, d));
    c && (b = new Fn(b),
    En[b.j] = b,
    a.B = b.j)
}
function Gn(a) {
    var b = new on;
    b.va(a);
    return b
}
function An(a) {
    var b = new on;
    a.then(function(c) {
        b.va(c)
    }, function(c) {
        b.rb(c)
    });
    return b
}
function tn() {
    Ag.call(this)
}
Xc(tn, Ag);
tn.prototype.message = "Deferred has already fired";
tn.prototype.name = "AlreadyCalledError";
function pn() {
    Ag.call(this)
}
Xc(pn, Ag);
pn.prototype.message = "Deferred was canceled";
pn.prototype.name = "CanceledError";
function Fn(a) {
    this.j = E.setTimeout(F(this.o, this), 0);
    this.l = a
}
Fn.prototype.o = function() {
    K(En[this.j], "Cannot throw an error that is not scheduled.");
    delete En[this.j];
    vn(this.l)
}
;
var En = {};
function Hn(a, b) {
    this.o = b;
    this.l = a;
    pd(this);
    qd(this, Error(this))
}
A(Hn, zd);
fc.Object.defineProperties(Hn.prototype, {
    error: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            var a = Error()
              , b = this.j;
            a.fileName = b.fileName;
            a.lineNumber = b.lineNumber;
            a.columnNumber = b.columnNumber;
            a.message = b.message;
            a.name = b.name;
            a.stack = b.stack;
            a.toSource = b.toSource;
            a.cause = b.cause;
            for (var c in b)
                c.indexOf("__java$") != 0 && (a[c] = b[c]);
            return a
        }
    }
});
Hn.prototype.F = ["com.google.apps.docs.xplat.base.XplatException", 0];
function In() {}
function Jn(a) {
    return a instanceof Error
}
In.prototype.F = ["Error", 0];
function Kn() {}
A(Kn, zd);
function Ln() {
    var a = new Kn;
    pd(a);
    qd(a, Error(a));
    return a
}
function Mn(a) {
    var b = new Kn;
    od(b, a);
    qd(b, Error(b));
    return b
}
Kn.prototype.F = ["com.google.apps.docs.xplat.base.AssertionException", 0];
function Nn(a) {
    if (!a)
        throw Mn("expected a non-null reference").j;
}
function On(a, b) {
    if (!a)
        throw (b == null ? Ln() : Mn(b)).j;
}
;function Pn(a) {
    if (a == null)
        throw vd().j;
    return a
}
;function Qn(a, b) {
    a = H(a);
    b == null && (b = ["(Object[])null"]);
    var c = new Gf;
    c.j = "";
    for (var d = 0, e = 0; e < b.length; ) {
        var f = a.indexOf("%s", d);
        if (f == -1)
            break;
        c.j = H(c.j) + H(qg(H(a), d, f));
        d = void 0;
        Hf(c, Rn(b[d = e,
        e = e + 1 | 0,
        d]));
        d = f + 2 | 0
    }
    c.j = H(c.j) + H(qg(H(a), d, a.length));
    if (e < b.length) {
        for (a = " ["; e < b.length; e = e + 1 | 0)
            Hf(c, a),
            Hf(c, Rn(b[e])),
            a = ", ";
        c.j = H(c.j) + String.fromCharCode(93)
    }
    return c.toString()
}
function Rn(a) {
    if (a == null)
        return Ab;
    try {
        return a.toString()
    } catch (c) {
        var b = ud(c);
        if (b instanceof yd)
            return a = H($c(Ae(a))) + String.fromCharCode(64) + H((hg(a) >>> 0).toString(16)),
            Sn(Tn("com.google.common.base.Strings"), (Un(),
            Vn), "Exception during lenientFormat for " + H(a), b),
            "<" + H(a) + " threw " + H($c(Ae(b))) + ">";
        throw b.j;
    }
}
;function Wn() {}
var Xn, Yn, Zn, Vn;
A(Wn, G);
Wn.prototype.j = x("DUMMY");
Wn.prototype.ka = x(-1);
Wn.prototype.toString = function() {
    return this.j()
}
;
function Un() {
    Un = Zb();
    Xn = new $n;
    Yn = new ao;
    Zn = new bo;
    Vn = new co
}
Wn.prototype.F = ["java.util.logging.Level", 0];
function $n() {}
A($n, Wn);
$n.prototype.j = x("ALL");
$n.prototype.ka = x(-2147483648);
$n.prototype.F = ["java.util.logging.Level$LevelAll", 0];
function ao() {}
A(ao, Wn);
ao.prototype.j = x("INFO");
ao.prototype.ka = x(800);
ao.prototype.F = ["java.util.logging.Level$LevelInfo", 0];
function bo() {}
A(bo, Wn);
bo.prototype.j = x(Ga);
bo.prototype.ka = x(1E3);
bo.prototype.F = ["java.util.logging.Level$LevelSevere", 0];
function co() {}
A(co, Wn);
co.prototype.j = x("WARNING");
co.prototype.ka = x(900);
co.prototype.F = ["java.util.logging.Level$LevelWarning", 0];
function eo() {}
A(eo, G);
eo.prototype.F = ["java.util.logging.LogRecord", 0];
function fo() {}
A(fo, G);
function go(a) {
    return a instanceof fo
}
fo.prototype.F = ["java.util.logging.Handler", 0];
function ho() {}
var io;
A(ho, G);
function jo(a, b) {
    if (b.o.length == 0) {
        var c = new ko;
        lo = !0;
        b.j.add(c)
    }
    a.j.Cc(b.o, b)
}
function mo(a, b) {
    var c = I(a.j.get(b), no, oo);
    if (c == null) {
        b = po(b);
        c = b.o;
        var d = Math
          , e = d.max;
        var f = String.fromCodePoint(46);
        f = c.lastIndexOf(f);
        c = qg(c, 0, e.call(d, 0, f));
        c = mo(a, c);
        c != null && (b.v = c);
        jo(a, b);
        return b
    }
    return c
}
ho.prototype.F = ["java.util.logging.LogManager", 0];
function ko() {}
A(ko, fo);
ko.prototype.F = ["java.util.logging.SimpleConsoleLogHandler", 0];
function qo() {}
A(qo, G);
function ro(a, b, c, d, e) {
    (e || console.groupCollapsed == null ? console.group != null ? console.group : console.log : console.groupCollapsed).call(console, H(d) + H(c.toString()));
    d = c.j;
    console[b].call(console, d && d.stack || "");
    d = c.o;
    d != null && ro(a, b, d, "Caused by: ", !1);
    c = c.v == null ? id([0], nd, xd) : df(c.v.lc(id([0], nd, xd)), nd, xd);
    for (d = 0; d < c.length; d++)
        ro(a, b, c[d], "Suppressed: ", !1);
    console.groupEnd != null && console.groupEnd.call(console)
}
qo.prototype.F = ["javaemul.internal.ConsoleLogger", 0];
function oo() {
    this.A = !1
}
A(oo, G);
function Tn(a) {
    if (io == null) {
        var b = new ho
          , c = new cg;
        Pf(c);
        b.j = c;
        io = b;
        b = po("");
        c = (Un(),
        Yn);
        b.l = c;
        jo(io, b)
    }
    return mo(io, a)
}
function po(a) {
    var b = new oo;
    b.o = a;
    b.A = !0;
    a = new cf;
    a.j = [];
    b.j = a;
    return b
}
function Sn(a, b, c, d) {
    if (lo) {
        var e = b.ka();
        a: if (a.l != null)
            var f = a.l;
        else {
            for (f = a.v; f != null; ) {
                var g = f.l;
                if (g != null) {
                    f = g;
                    break a
                }
                f = f.v
            }
            f = (Un(),
            Yn)
        }
        e = e >= f.ka()
    } else
        e = !1;
    if (e)
        for (e = new eo,
        e.j = b,
        e.o = c,
        e.l = d; a != null; ) {
            b = df(a.j.lc(id([a.j.size()], fo, go)), fo, go);
            for (c = 0; c < b.length; c++) {
                g = b[c];
                d = e;
                f = typeof console === "undefined" ? null : new qo;
                var h;
                if (h = f != null)
                    h = d,
                    h = (g.j != null ? g.j : (Un(),
                    Xn)).ka() <= h.j.ka();
                h && (g = d.j.ka(),
                g = g >= (Un(),
                Zn).ka() ? kb : g >= (Un(),
                Vn).ka() ? "warn" : g >= (Un(),
                Yn).ka() ? "info" : "log",
                console[g].call(console, d.o),
                d.l != null && ro(f, g, d.l, "Exception: ", !0))
            }
            a = a.A ? a.v : null
        }
}
function no(a) {
    return a instanceof oo
}
var lo = !1;
oo.prototype.F = ["java.util.logging.Logger", 0];
function so() {
    this.A = this.o = !1
}
var to;
A(so, G);
y = so.prototype;
y.dispose = function() {
    if (this.o)
        var a = null;
    else
        this.o = !0,
        a = this.v == null ? to : this.v,
        this.v = null;
    if (a != null) {
        this.Ea();
        if (a.length != 0)
            for (var b = 0; b < a.length; b++)
                a[b].dispose();
        a = this.A;
        b = ad(bd(this));
        b = zg(zg(H(b.j.prototype.F[0]) + H(yg("[]", b.l)), "."), "$");
        if (!a)
            throw Mn(Qn("%s did not call super.disposeInternal()", [b])).j;
    }
}
;
y.ea = bc("o");
function uo(a, b) {
    b == null || b.ea() ? a = null : a.o ? a = b : (a.v == null && (a.v = vo()),
    a.v.push(b),
    a = null);
    a != null && a.dispose()
}
y.Ea = function() {
    On(!this.A, "disposeInternal() called multiple times");
    this.A = !0
}
;
y.toString = function() {
    return G.prototype.toString.call(this) || ""
}
;
function wo(a) {
    a.o = !1;
    a.A = !1
}
function xo() {
    xo = Zb();
    to = vo()
}
y.F = ["com.google.apps.xplat.disposable.Disposable", 0];
function yo(a) {
    if (a == null)
        return a = new nd,
        pd(a),
        qd(a, Error(a)),
        a;
    if (xd(a))
        return I(a, xd, nd);
    if (Jn(a))
        return a = I(a, Jn, In),
        ud(a);
    throw ef("Unsupported type cannot be used to create a Throwable.").j;
}
;function zo(a) {
    if (a == null)
        throw a = new Oe,
        od(a, "can't identity hash null"),
        qd(a, new TypeError(a)),
        a.j;
    return ":" + hg(a)
}
;function Ao() {}
function vo() {
    return I([], Bo, Ao)
}
function Bo(a) {
    return a instanceof Array
}
Ao.prototype.F = ["Array", 0];
/*

 Copyright Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
var Co = {};
function Do() {
    if (Co !== Co)
        throw Error("Bad secret");
}
;var Eo = globalThis.trustedTypes, Fo;
function Go() {
    var a = null;
    if (!Eo)
        return a;
    try {
        var b = Yb();
        a = Eo.createPolicy("goog#html", {
            createHTML: b,
            createScript: b,
            createScriptURL: b
        })
    } catch (c) {
        throw c;
    }
    return a
}
;var Ho = pc([""])
  , Io = qc(["\x00"], ["\\0"])
  , Jo = qc(["\n"], ["\\n"])
  , Ko = qc(["\x00"], ["\\u0000"]);
function Lo(a) {
    return a.toString().indexOf("`") === -1
}
Lo(function(a) {
    return a(Ho)
}) || Lo(function(a) {
    return a(Io)
}) || Lo(function(a) {
    return a(Jo)
}) || Lo(function(a) {
    return a(Ko)
});
function Mo(a) {
    Do();
    this.j = a
}
Mo.prototype.toString = bc("j");
new Mo("about:blank");
new Mo("about:invalid#zClosurez");
var No = [];
function Oo(a) {
    console.warn("A URL with content '" + a + "' was sanitized away.")
}
No.indexOf(Oo) === -1 && No.push(Oo);
function Po(a) {
    Do();
    this.j = a
}
Po.prototype.toString = function() {
    return this.j + ""
}
;
function Qo(a) {
    var b = E.onerror;
    E.onerror = function(c, d, e, f, g) {
        b && b(c, d, e, f, g);
        a({
            message: c,
            fileName: d,
            line: e,
            lineNumber: e,
            oi: f,
            error: g
        });
        return !1
    }
}
function Ro(a) {
    var b = Lc("window.location.href");
    a == null && (a = 'Unknown Error of type "null/undefined"');
    if (typeof a === v)
        return {
            message: a,
            name: "Unknown error",
            lineNumber: ya,
            fileName: b,
            stack: ya
        };
    var c = !1;
    try {
        var d = a.lineNumber || a.line || ya
    } catch (f) {
        d = ya,
        c = !0
    }
    try {
        var e = a.fileName || a.filename || a.sourceURL || E.$googDebugFname || b
    } catch (f) {
        e = ya,
        c = !0
    }
    b = So(a);
    return !c && a.lineNumber && a.fileName && a.stack && a.message && a.name ? {
        message: a.message,
        name: a.name,
        lineNumber: a.lineNumber,
        fileName: a.fileName,
        stack: b
    } : (c = a.message,
    c == null && (c = a.constructor && a.constructor instanceof Function ? 'Unknown Error of type "' + (a.constructor.name ? a.constructor.name : To(a.constructor)) + '"' : "Unknown Error of unknown type",
    typeof a.toString === k && Object.prototype.toString !== a.toString && (c += da + a.toString())),
    {
        message: c,
        name: a.name || "UnknownError",
        lineNumber: d,
        fileName: e,
        stack: b || ya
    })
}
function So(a, b) {
    b || (b = {});
    b[Uo(a)] = !0;
    var c = a.stack || ""
      , d = a.cause;
    d && !b[Uo(d)] && (c += "\nCaused by: ",
    d.stack && d.stack.indexOf(d.toString()) == 0 || (c += typeof d === v ? d : d.message + "\n"),
    c += So(d, b));
    a = a.errors;
    if (Array.isArray(a)) {
        d = 1;
        var e;
        for (e = 0; e < a.length && !(d > 4); e++)
            b[Uo(a[e])] || (c += "\nInner error " + d++ + da,
            a[e].stack && a[e].stack.indexOf(a[e].toString()) == 0 || (c += typeof a[e] === v ? a[e] : a[e].message + "\n"),
            c += So(a[e], b));
        e < a.length && (c += "\n... " + (a.length - e) + " more inner errors")
    }
    return c
}
function Uo(a) {
    var b = "";
    typeof a.toString === k && (b = "" + a);
    return b + a.stack
}
function Vo(a, b) {
    a instanceof Error || (a = Error(a),
    Error.captureStackTrace && Error.captureStackTrace(a, Vo));
    a.stack || (a.stack = Wo(Vo));
    if (b) {
        for (var c = 0; a["message" + c]; )
            ++c;
        a["message" + c] = String(b)
    }
    return a
}
function Xo(a, b) {
    a = Vo(a);
    if (b)
        for (var c in b)
            ai(a, c, b[c]);
    return a
}
function Yo(a) {
    var b = Zo(Yo);
    if (b)
        return b;
    b = [];
    for (var c = arguments.callee.caller, d = 0; c && (!a || d < a); ) {
        b.push(To(c));
        b.push("()\n");
        try {
            c = c.caller
        } catch (e) {
            b.push(Ua);
            break
        }
        d++;
        if (d >= 50) {
            b.push(Ta);
            break
        }
    }
    a && d >= a ? b.push("[...reached max depth limit...]") : b.push("[end]");
    return b.join("")
}
function Zo(a) {
    var b = Error();
    if (Error.captureStackTrace)
        return Error.captureStackTrace(b, a),
        String(b.stack);
    try {
        throw b;
    } catch (c) {
        b = c
    }
    return (a = b.stack) ? String(a) : null
}
function Wo(a) {
    var b;
    (b = Zo(a || Wo)) || (b = $o(a || arguments.callee.caller, []));
    return b
}
function $o(a, b) {
    var c = [];
    if (ph(b, a))
        c.push("[...circular reference...]");
    else if (a && b.length < 50) {
        c.push(To(a) + "(");
        for (var d = a.arguments, e = 0; d && e < d.length; e++) {
            e > 0 && c.push(", ");
            var f = d[e];
            switch (typeof f) {
            case q:
                f = f ? q : Ab;
                break;
            case v:
                break;
            case m:
                f = String(f);
                break;
            case fb:
                f = f ? Pb : "false";
                break;
            case k:
                f = (f = To(f)) ? f : "[fn]";
                break;
            default:
                f = typeof f
            }
            f.length > 40 && (f = f.slice(0, 40) + "...");
            c.push(f)
        }
        b.push(a);
        c.push(")\n");
        try {
            c.push($o(a.caller, b))
        } catch (g) {
            c.push(Ua)
        }
    } else
        a ? c.push(Ta) : c.push("[end]");
    return c.join("")
}
function To(a) {
    if (ap[a])
        return ap[a];
    a = String(a);
    if (!ap[a]) {
        var b = /function\s+([^\(]+)/m.exec(a);
        ap[a] = b ? b[1] : "[Anonymous]"
    }
    return ap[a]
}
var ap = {}
  , bp = Object.freeze || Yb();
function cp(a, b) {
    this.name = a;
    this.value = b
}
cp.prototype.toString = bc("name");
var dp = new cp("OFF",Infinity)
  , ep = new cp(Ga,1E3)
  , fp = new cp("WARNING",900)
  , gp = new cp("INFO",800)
  , hp = new cp("CONFIG",700)
  , ip = new cp("FINE",500);
function jp() {
    this.clear()
}
var kp;
jp.prototype.clear = Zb();
function lp() {
    kp || (kp = new jp)
}
function mp(a, b, c) {
    this.j = void 0;
    this.reset(a || dp, b, c, void 0, void 0)
}
mp.prototype.reset = function(a) {
    this.l = a;
    this.j = void 0
}
;
function np(a, b) {
    b = b === void 0 ? null : b;
    this.j = null;
    this.v = [];
    this.l = b || null;
    this.children = [];
    this.o = {
        j: function() {
            return a
        }
    }
}
function op(a) {
    if (a.j)
        return a.j;
    if (a.l)
        return op(a.l);
    Dg("Root logger has no level set.");
    return dp
}
function pp(a, b) {
    for (; a; )
        a.v.forEach(function(c) {
            c(b)
        }),
        a = a.l
}
function qp() {
    this.entries = {};
    var a = new np("");
    a.j = hp;
    this.entries[""] = a
}
var rp;
function sp(a, b) {
    var c = a.entries[b];
    if (c)
        return c;
    c = b.lastIndexOf(".");
    c = sp(a, b.slice(0, Math.max(c, 0)));
    var d = new np(b,c);
    a.entries[b] = d;
    c.children.push(d);
    return d
}
function tp() {
    rp || (rp = new qp);
    return rp
}
function up(a) {
    return sp(tp(), a).o
}
function vp(a) {
    return a ? op(sp(tp(), a.j())) : dp
}
function wp(a, b, c, d) {
    if (a && a && b && b.value >= vp(a).value) {
        b = b || dp;
        var e = sp(tp(), a.j());
        typeof c === k && (c = c());
        lp();
        a = new mp(b,c,a.j());
        a.j = d;
        pp(e, a)
    }
}
function xp(a, b, c) {
    a && wp(a, ep, b, c)
}
function yp(a, b, c) {
    a && wp(a, fp, b, c)
}
function V(a, b, c) {
    a && wp(a, gp, b, c)
}
function zp(a, b) {
    a && wp(a, ip, b)
}
;function Ap(a) {
    var b = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"'
    };
    var c = E.document.createElement("div");
    return a.replace(Bp, function(d, e) {
        var f = b[d];
        if (f)
            return f;
        e.charAt(0) == "#" && (e = Number("0" + e.slice(1)),
        isNaN(e) || (f = String.fromCharCode(e)));
        if (!f) {
            f = d + " ";
            Fo === void 0 && (Fo = Go());
            f = (e = Fo) ? e.createHTML(f) : f;
            f = new Po(f);
            if (c.nodeType === 1 && (e = c.tagName,
            /^(script|style)$/i.test(e)))
                throw d = e.toLowerCase() === "script" ? "Use setScriptTextContent with a SafeScript." : "Use setStyleTextContent with a SafeStyleSheet.",
                Error(d);
            if (f instanceof Po)
                f = f.j;
            else
                throw Error("Unexpected type when unwrapping SafeHtml");
            c.innerHTML = f;
            f = c.firstChild.nodeValue.slice(0, -1)
        }
        return b[d] = f
    })
}
function Cp(a) {
    return a.replace(/&([^;]+);/g, function(b, c) {
        switch (c) {
        case "amp":
            return "&";
        case "lt":
            return "<";
        case "gt":
            return ">";
        case "quot":
            return '"';
        default:
            return c.charAt(0) != "#" || (c = Number("0" + c.slice(1)),
            isNaN(c)) ? b : String.fromCharCode(c)
        }
    })
}
var Bp = /&([^;\s<&]+);?/g
  , Dp = String.prototype.repeat ? function(a, b) {
    return a.repeat(b)
}
: function(a, b) {
    return Array(b + 1).join(a)
}
;
function Ep(a, b) {
    if (!Number.isFinite(a))
        return String(a);
    a = String(a);
    var c = a.indexOf(".");
    c === -1 && (c = a.length);
    var d = a[0] === "-" ? "-" : "";
    d && (a = a.substring(1));
    return d + Dp("0", Math.max(0, b - c)) + a
}
function Fp(a) {
    return a == null ? "" : String(a)
}
function Gp() {
    return Math.floor(Math.random() * 2147483648).toString(36) + Math.abs(Math.floor(Math.random() * 2147483648) ^ Date.now()).toString(36)
}
function Hp(a) {
    var b = 1;
    a = a.split(":");
    for (var c = []; b > 0 && a.length; )
        c.push(a.shift()),
        b--;
    a.length && c.push(a.join(":"));
    return c
}
;function Ip(a, b, c, d, e, f, g) {
    var h = "";
    a && (h += a + ":");
    c && (h += "//",
    b && (h += b + "@"),
    h += c,
    d && (h += ":" + d));
    e && (h += e);
    f && (h += "?" + f);
    g && (h += "#" + g);
    return h
}
var Jp = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");
function Kp(a) {
    return a.match(Jp)
}
function Lp(a) {
    return a ? decodeURI(a) : a
}
function Mp(a, b) {
    if (a) {
        a = a.split("&");
        for (var c = 0; c < a.length; c++) {
            var d = a[c].indexOf("=")
              , e = null;
            if (d >= 0) {
                var f = a[c].substring(0, d);
                e = a[c].substring(d + 1)
            } else
                f = a[c];
            b(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "")
        }
    }
}
function Np(a, b) {
    if (!b)
        return a;
    var c = a.indexOf("#");
    c < 0 && (c = a.length);
    var d = a.indexOf("?");
    if (d < 0 || d > c) {
        d = c;
        var e = ""
    } else
        e = a.substring(d + 1, c);
    a = [a.slice(0, d), e, a.slice(c)];
    c = a[1];
    a[1] = b ? c ? c + "&" + b : b : c;
    return a[0] + (a[1] ? "?" + a[1] : "") + a[2]
}
function Op(a, b, c) {
    Fg(a);
    if (Array.isArray(b)) {
        M(b);
        for (var d = 0; d < b.length; d++)
            Op(a, String(b[d]), c)
    } else
        b != null && c.push(a + (b === "" ? "" : "=" + encodeURIComponent(String(b))))
}
function Pp(a, b) {
    K(Math.max(a.length - (b || 0), 0) % 2 == 0, "goog.uri.utils: Key/value lists must be even in length.");
    var c = [];
    for (b = b || 0; b < a.length; b += 2)
        Op(a[b], a[b + 1], c);
    return c.join("&")
}
function Qp(a) {
    var b = [], c;
    for (c in a)
        Op(c, a[c], b);
    return b.join("&")
}
function Rp(a, b) {
    var c = arguments.length == 2 ? Pp(arguments[1], 0) : Pp(arguments, 1);
    return Np(a, c)
}
function Sp(a, b) {
    b = Qp(b);
    return Np(a, b)
}
function Tp(a, b, c, d) {
    for (var e = c.length; (b = a.indexOf(c, b)) >= 0 && b < d; ) {
        var f = a.charCodeAt(b - 1);
        if (f == 38 || f == 63)
            if (f = a.charCodeAt(b + e),
            !f || f == 61 || f == 38 || f == 35)
                return b;
        b += e + 1
    }
    return -1
}
var Up = /#|$/
  , Vp = /[?&]($|#)/;
function Wp(a, b) {
    for (var c = a.search(Up), d = 0, e, f = []; (e = Tp(a, d, b, c)) >= 0; )
        f.push(a.substring(d, e)),
        d = Math.min(a.indexOf("&", e) + 1 || c, c);
    f.push(a.slice(d));
    return f.join("").replace(Vp, "$1")
}
;var Xp;
Xp = function(a) {
    if (!a)
        return a;
    a = Kp(typeof a === q ? a.href : a);
    var b = a[1];
    return b !== "http" && b !== "https" ? b || "" : Ip(a[1], "", a[3], a[4], a[5], a[6], "")
}
;
function Yp(a) {
    a && typeof a.dispose == k && a.dispose()
}
;function Zp(a) {
    for (var b = 0, c = arguments.length; b < c; ++b) {
        var d = arguments[b];
        Nc(d) ? Zp.apply(null, d) : Yp(d)
    }
}
;function W() {
    this.X = this.X;
    this.M = this.M
}
W.prototype.X = !1;
W.prototype.ea = bc("X");
W.prototype.dispose = function() {
    this.X || (this.X = !0,
    this.K())
}
;
W.prototype[Symbol.dispose] = function() {
    this.dispose()
}
;
function $p(a, b) {
    b = Uc(Yp, b);
    a.X ? b() : (a.M || (a.M = []),
    a.M.push(b))
}
W.prototype.K = function() {
    if (this.M)
        for (; this.M.length; )
            this.M.shift()()
}
;
function aq(a) {
    return a && typeof a.ea == k ? a.ea() : !1
}
;function bq() {
    W.call(this);
    this.o = 0;
    this.l = null
}
A(bq, W);
bq.prototype.init = function() {
    this.l = []
}
;
function cq(a, b) {
    var c = dq;
    if (b instanceof Object && !Object.isFrozen(b)) {
        var d = Xp(b.fileName || b.filename || b.sourceURL || E.$googDebugFname || location.href);
        try {
            b.fileName = d
        } catch (n) {}
    }
    if (c.o >= 3)
        throw Error("Recursive loop detected while trying to report exception. Message: " + a);
    c.o++;
    try {
        if (c.ea())
            V(c.j, "reportException was called but ErrorReporter already disposed. Message: " + a, b);
        else if (b instanceof pn)
            V(c.j, a || "goog.async.Deferred CanceledError", b);
        else if (b instanceof Ym)
            V(c.j, a || "goog.Promise CancellationError", b);
        else if ((b == null ? void 0 : b.name) === "CanceledError")
            V(c.j, a || "Wiz Pending CanceledError", b);
        else {
            if (c.j) {
                var e = c.j;
                a = a || "Exception";
                lp();
                var f = new mp(ep || dp,a,e.j());
                f.j = b;
                f.o = !0;
                var g = c.j, h;
                if (h = g) {
                    var l = f.l;
                    h = g && l ? l.value >= vp(g).value : !1
                }
                h && pp(sp(tp(), g.j()), f)
            }
            c.l && c.l.length < 10 && c.l.push(new eq(b))
        }
    } finally {
        c.o--
    }
}
bq.prototype.j = up("fava.debug.ErrorReporter");
var dq = new bq;
function eq(a) {
    this.e = a;
    this.severity = Sb
}
;function fq() {}
function gq(a) {
    return a != null && !!a.wc
}
fq.prototype.wc = !0;
fq.prototype.F = ["javax.inject.Provider", 1];
function hq() {}
function iq(a) {
    return a instanceof Object
}
hq.prototype.F = [Aa, 0];
function jq() {}
function kq(a) {
    return a instanceof Object
}
jq.prototype.F = [Aa, 0];
function lq() {}
function mq(a) {
    return a instanceof Object
}
lq.prototype.F = [Aa, 0];
var nq = {
    Ag: "build-label",
    vf: "buildLabel",
    Af: "clientLog",
    Rf: "docId",
    Rg: "mobile-app-version",
    Hh: Jb,
    th: "reportSeverity",
    ci: Kb,
    rg: "isArrayPrototypeIntact",
    sg: "isEditorElementAttached",
    Xf: "documentCharacterSet",
    ug: "isModuleLoadFailure",
    rh: "reportName",
    Hg: "locale",
    Jf: "createdOnServer",
    Zg: "numUnsavedCommands",
    Kf: "cspViolationContext",
    ph: "relatedToBrowserExtension",
    ii: "workerError",
    Sf: "docosPostLimitExceeded",
    Tf: "docosPostLimitType",
    Uf: "docosReactionLimitExceeded",
    Vf: "docosReactionLimitType",
    eh: "origin",
    Bh: "saveTakingTooLongOnClient",
    Zh: "truncatedCommentNotificationsCount",
    ai: "truncatedCommentNotificationsFromPayload",
    Xg: "nonfatalReason",
    di: "usesModuleSetsServing",
    vg: "isNestedDrawingsEnabled",
    Zf: "embeddedDrawingState"
};
function oq() {}
function pq(a) {
    return a != null && !!a.tc
}
oq.prototype.tc = !0;
oq.prototype.F = ["com.google.apps.docs.xplat.flag.FlagService", 1];
var qq;
function rq() {
    if (qq == null) {
        var a = new sq(null);
        qq = function() {
            return a
        }
    }
    var b;
    return I((b = qq,
    b()), pq, oq)
}
;function tq() {}
A(tq, G);
tq.prototype.get = function() {
    if (this.l == null) {
        var a = I(E._docs_flag_initialData, iq, hq);
        this.l = a != null ? a : I({}, iq, hq)
    }
    return this.l
}
;
tq.prototype.j = function() {
    return this.get()
}
;
tq.prototype.wc = !0;
tq.prototype.F = ["com.google.apps.docs.xplat.flag.FlagServiceHelper", 0];
function sq(a) {
    this.j = new tq;
    this.l = null;
    if (a != null)
        for (var b in a) {
            var c = b
              , d = a[b];
            if (this.l != null)
                throw Jd("Cannot use setClientFlag when comparison is enabled.").j;
            var e = I(this.j.j(), iq, hq), f;
            var g = d;
            (f = g == null || kd(g) || m === typeof g || Ef(g)) || (f = fb === typeof g);
            (f = f || Array.isArray(g)) || (g == null ? g = Ab : (f = typeof g,
            g = of(f) === q ? Array.isArray(g) ? "array" : f : f),
            f = q === g);
            if (!f)
                throw ef("Invalid value type: " + H(d)).j;
            kd(d) ? (d = I(d, kd, jd).j,
            e[c] = d) : e[c] = d != null ? d : null
        }
}
A(sq, G);
sq.prototype.clear = function() {
    this.j = new tq;
    this.l = null
}
;
sq.prototype.get = function(a) {
    uq(this, a);
    return I(this.j.j(), iq, hq)[a]
}
;
function vq(a, b) {
    a = I(a.j.j(), iq, hq);
    return b in a
}
function wq(a, b) {
    a = a.get(b);
    return typeof a == v ? a == Pb || a == "1" : !!a
}
function xq(a, b) {
    uq(a, b);
    if (!vq(a, b) || a.get(b) == null)
        return NaN;
    try {
        var c = H(a.get(b));
        ed == null && (ed = RegExp("^\\s*[+-]?(NaN|Infinity|((\\d+\\.?\\d*)|(\\.\\d+))([eE][+-]?\\d+)?[dDfF]?)\\s*$"));
        if (!ed.test(c)) {
            var d = new gg;
            od(d, 'For input string: "' + H(c) + '"');
            qd(d, Error(d));
            throw d.j;
        }
        return parseFloat(c)
    } catch (f) {
        var e = ud(f);
        if (e instanceof gg)
            return NaN;
        throw e.j;
    }
}
function yq(a, b) {
    uq(a, b);
    if (!vq(a, b))
        return "";
    a = a.get(b);
    if (a == null)
        return "";
    var c;
    if (b = m === typeof a && (c = a,
    !0)) {
        b = Ee(of(c));
        var d = Ee(of(c));
        b = b.equals(d)
    }
    return b ? "" + Ee(of(c)) : H(a)
}
function uq(a, b) {
    if (a.l != null) {
        try {
            var c = I(a.j.j(), iq, hq)[b]
        } catch (g) {
            var d = ud(g);
            if (Ad(d))
                c = ub;
            else
                throw d.j;
        }
        try {
            var e = I(I(Pn(a.l), gq, fq).j(), iq, hq)[b]
        } catch (g) {
            var f = ud(g);
            if (Ad(f))
                e = ub;
            else
                throw f.j;
        }
        if (!Ne(c, e))
            throw Jd("Logging is not supported.").j;
    }
}
sq.prototype.tc = !0;
sq.prototype.F = ["com.google.apps.docs.xplat.flag.FlagServiceImpl", 0];
function zq() {
    xo();
    so.call(this);
    wo(this)
}
A(zq, so);
zq.prototype.F = ["com.google.apps.docsshared.xplat.observable.DisposableObservable", 0];
function Aq() {
    xo();
    zq.call(this);
    this.l = I({}, mq, lq);
    this.j = null
}
A(Aq, zq);
Aq.prototype.Ea = function() {
    zq.prototype.Ea.call(this);
    var a = this.l, b;
    for (b in a)
        delete a[b];
    this.j = null
}
;
function Bq(a, b) {
    if (a.j == null) {
        var c = a.l, d = [], e;
        for (e in c)
            d.push(c[e]);
        a.j = d
    }
    a = a.j;
    for (c = 0; c < a.length; c = c + 1 | 0)
        I(a[c], lg, jg)(b)
}
Aq.prototype.F = ["com.google.apps.docsshared.xplat.observable.EventObservable", 0];
function Cq() {}
A(Cq, G);
function Dq(a) {
    return a instanceof Cq
}
Cq.prototype.F = ["com.google.apps.docsshared.xplat.observable.EventObserverTracker$ObservableObserverPair", 0];
function Eq() {
    xo();
    so.call(this);
    wo(this);
    this.j = vo()
}
A(Eq, so);
function Fq(a, b, c) {
    var d;
    a: {
        for (d = 0; d < a.j.length; d = d + 1 | 0) {
            var e = I(a.j[d], Dq, Cq);
            if (Yc(e.l, c) && Yc(e.j, b)) {
                d = !0;
                break a
            }
        }
        d = !1
    }
    if (!d) {
        a = a.j;
        c = I(c, lg, jg);
        Pn(c);
        d = b.l;
        Nn(c != null);
        if (zo(c) in d)
            throw Jd(Qn("Observer %s previously registered.", [c])).j;
        d = b.l;
        Nn(c != null);
        On(!Ef(c), "Using SimpleJsSet for Strings will produce unstable results in javascript");
        e = zo(c);
        d[e] = c !== void 0 ? c : null;
        b.j = null;
        d = new Cq;
        d.j = b;
        d.l = c;
        a.push(d)
    }
}
Eq.prototype.Ea = function() {
    for (var a = I(this.j.pop(), Dq, Cq); a != null; ) {
        var b = a.j;
        a = I(a.l, lg, jg);
        var c = b.l
          , d = a;
        Nn(d != null);
        zo(d) in c && (c = b.l,
        Nn(a != null),
        a = zo(a),
        delete c[a],
        b.j = null);
        a = I(this.j.pop(), Dq, Cq)
    }
    so.prototype.Ea.call(this)
}
;
Eq.prototype.F = ["com.google.apps.docsshared.xplat.observable.EventObserverTracker", 0];
function Gq(a) {
    Hn.call(this, a, null);
    qd(this, Error(this))
}
A(Gq, Hn);
Gq.prototype.F = ["com.google.apps.docs.xplat.net.LimitException", 0];
function Hq() {}
var Iq, Jq, Kq, Lq, Mq;
A(Hq, G);
function Nq() {
    Nq = Zb();
    Iq = new Hq;
    Jq = new Hq;
    Kq = new Hq;
    Lq = new Hq;
    Mq = new Hq
}
Hq.prototype.F = ["com.google.apps.docs.xplat.net.NetworkErrorType", 0];
function Oq(a, b, c, d) {
    xo();
    so.call(this);
    this.j = 0;
    wo(this);
    this.B = a;
    this.j = b;
    this.l = new Pq(Math.imul(c, 1E3),d)
}
A(Oq, so);
function Qq(a) {
    return (a.l.get(null) + 1 | 0) / of(a.l.o / 1E3) <= a.j
}
function Rq(a) {
    if (!Qq(a))
        throw (new Gq("Query would cause " + H(a.B) + " to exceed " + a.j + " qps.")).j;
    a = a.l;
    var b = qe(ye(Date.now()));
    Sq(a, b);
    var c = I(Tq(a.j), Uq, Vq);
    if (c == null || of(b) >= of(c.l))
        b = Wq(a, of(b)),
        c = new Vq,
        c.l = b,
        c.j = 0,
        c.v = 2147483647,
        c.o = -2147483648,
        a.j.add(c);
    c.j = c.j + 1 | 0;
    c.v = Math.min(1, c.v);
    c.o = Math.max(1, c.o)
}
Oq.prototype.F = ["com.google.apps.docs.xplat.net.QpsLimiter", 0];
function Vq() {
    this.o = this.v = this.j = 0
}
A(Vq, G);
function Uq(a) {
    return a instanceof Vq
}
Vq.prototype.F = ["com.google.apps.docs.xplat.util.BasicStat$Slot", 0];
function Pq(a) {
    this.l = this.o = 0;
    this.v = Tn("BasicStat");
    if (!(a > 50))
        throw Ln().j;
    this.o = a;
    this.l = Fe(a / 50);
    this.j = new Xq(Te(50))
}
A(Pq, G);
Pq.prototype.get = function(a) {
    return Yq(this, a, function(b, c) {
        b = I(b, kd, jd);
        c = I(c, Uq, Vq);
        return Te(b.j + c.j | 0)
    })
}
;
function Yq(a, b, c) {
    b = b != null ? of(b) : qe(ye(Date.now()));
    Sq(a, b);
    var d = 0;
    b = Wq(a, of(b));
    b = of(b) - a.o;
    for (var e = a.j.j.length - 1 | 0; e >= 0; e = e - 1 | 0) {
        var f = I(a.j.get(e), Uq, Vq);
        if (of(f.l) <= b)
            break;
        d = I(c(Te(d), f), kd, jd).j
    }
    return d
}
function Wq(a, b) {
    return a.l * Math.floor(b / a.l + 1)
}
function Sq(a, b) {
    var c = I(Tq(a.j), Uq, Vq);
    if (c != null && (c = of(c.l) - a.l,
    of(b) < of(c))) {
        b = "Went backwards in time: now=" + H(b) + ", slotStart=" + H(c) + "%d.  Resetting state.";
        c = a.v;
        var d = (Un(),
        Vn);
        Sn(c, d, b, null);
        a.j.clear()
    }
}
Pq.prototype.F = ["com.google.apps.docs.xplat.util.BasicStat", 0];
function Xq(a) {
    this.l = this.o = 0;
    a != null ? m === typeof a ? (a = of(a),
    a = Math.max(Math.min(a, 2147483647), -2147483648) | 0) : a = a instanceof pe ? of(a).V : a.ka() : a = 100;
    this.o = a;
    this.j = vo()
}
A(Xq, G);
y = Xq.prototype;
y.add = function(a) {
    var b = this.j[this.l];
    this.j[this.l] = a;
    this.l = Fe((this.l + 1 | 0) % this.o);
    return b
}
;
y.get = function(a) {
    a = Zq(this, a);
    return this.j[a]
}
;
y.set = function(a, b) {
    a = Zq(this, a);
    this.j[a] = b
}
;
y.clear = function() {
    this.l = this.j.length = 0
}
;
y.oa = function() {
    for (var a = this.j.length, b = this.j.length - this.j.length | 0, c = vo(); b < a; b = b + 1 | 0) {
        var d = c
          , e = this.get(b);
        d.push(e)
    }
    return c
}
;
y.sa = function() {
    for (var a = [], b = this.j.length, c = 0; c < b; c = c + 1 | 0) {
        var d = c
          , e = c
          , f = a;
        try {
            if (f != null && (typeof f != q || typeof f.length != m)) {
                var g = new dg;
                pd(g);
                qd(g, Error(g));
                throw g.j;
            }
        } catch (h) {
            a = ud(h);
            if (a instanceof yd)
                throw c = b = new He,
                d = H(a),
                c.o = xd(a) ? a : null,
                c.l = d,
                pd(c),
                qd(b, Error(b)),
                b.j;
            throw a.j;
        }
        f[d] = e
    }
    return a
}
;
function Tq(a) {
    return a.j.length == 0 ? null : a.get(a.j.length - 1 | 0)
}
function Zq(a, b) {
    if (b >= a.j.length)
        throw a = new Cd,
        pd(a),
        qd(a, Error(a)),
        a.j;
    return a.j.length < a.o ? b : Fe((a.l + b | 0) % a.o)
}
y.F = ["com.google.apps.docs.xplat.util.CircularBuffer", 0];
function $q() {
    this.j = 0
}
var ar, br, cr, dr, er, fr, gr, hr, ir, jr, kr, lr, mr, nr, or, pr, qr, rr, sr, tr;
A($q, G);
function ur(a, b) {
    var c = new $q;
    c.l = a;
    c.j = b;
    On(!(a in ar), "docs.xplat.net.Status.State instances should be uniquely named.");
    ar[a] = c !== void 0 ? c : null;
    return c
}
$q.prototype.toString = bc("l");
function vr() {
    vr = Zb();
    ar = I({}, kq, jq);
    er = ur("IDLE", 1);
    fr = ur("BUSY", 1);
    gr = ur("RECOVERING", 2);
    hr = ur("OFFLINE", 3);
    ir = ur("SERVER_DOWN", 3);
    cr = ur("FORBIDDEN", 4);
    dr = ur("AUTH_REQUIRED", 4);
    ur("DELTA_STALE_CLIENT", 4);
    jr = ur("SESSION_LIMIT_EXCEEDED", 5);
    kr = ur("LOCKED", 5);
    lr = ur("INCOMPATIBLE_SERVER", 5);
    mr = ur("CLIENT_ERROR", 5);
    nr = ur("CLIENT_FATAL_ERROR", 5);
    or = ur("CLIENT_FATAL_ERROR_PENDING_CHANGES", 5);
    ur("BATCH_CLIENT_ERROR", 3);
    ur("SAVE_ERROR", 5);
    pr = ur("DOCUMENT_TOO_LARGE", 5);
    qr = ur("CSE_BLOCKED_REQUEST", 5);
    rr = ur("CSE_UPGRADE_LOCKED", 5);
    ur("BATCH_SAVE_ERROR", 3);
    sr = ur("DOCS_EVERYWHERE_IMPORT_ERROR", 5);
    br = ur("POST_LIMIT_EXCEEDED_ERROR", 5);
    tr = ur("DOCS_QUOTA_EXCEEDED_ERROR", 5)
}
$q.prototype.F = ["com.google.apps.docs.xplat.net.Status$State", 0];
var wr;
function xr() {
    xr = Zb();
    wr = RegExp("^[^\\[\\{]+", "")
}
;function yr() {
    xo();
    so.call(this);
    wo(this);
    this.l = new Aq;
    this.C = new Aq;
    var a = (Nq(),
    Iq);
    this.B = new zr(a,null);
    this.D = Tn("docs.xplat.net.Status");
    this.j = (vr(),
    er);
    uo(this, this.l);
    uo(this, this.C);
    uo(this, this.B)
}
A(yr, so);
function Ar(a, b) {
    xo();
    b = b != null ? b : (vr(),
    mr);
    return a == 401 ? (vr(),
    dr) : a == 403 ? (vr(),
    cr) : a == 421 ? (vr(),
    jr) : a == 423 ? (vr(),
    kr) : a == 512 || a == 432 ? (vr(),
    sr) : a == 433 ? (vr(),
    br) : a == 434 ? (vr(),
    tr) : a == 445 ? (vr(),
    qr) : a == 202 || a == 405 || a == 409 || a == 429 || a >= 500 && a <= 599 && a != 550 ? (vr(),
    ir) : a == 413 ? (vr(),
    pr) : a >= 400 && a <= 499 || a == 550 ? b : (vr(),
    hr)
}
function Br(a, b, c, d, e) {
    var f = a.j;
    if (!Yc(b, f)) {
        var g = "Net state changed from " + H(f) + " to " + H(b)
          , h = a.D
          , l = (Un(),
        Yn);
        Sn(h, l, g, null);
        a.j = b;
        g = a.B;
        h = b.equals(cr) ? (Nq(),
        Lq) : b.equals(dr) ? (Nq(),
        Kq) : b.j >= 5 ? (Nq(),
        Mq) : b.j != 1 ? (Nq(),
        Jq) : (Nq(),
        Iq);
        Ne(g.value, h) || (l = g.value,
        g.value = h,
        Bq(g, new Cr(l,h)),
        g.B && Yp(l));
        Bq(a.l, new Dr(f,b,c,d,e))
    }
}
yr.prototype.F = ["com.google.apps.docs.xplat.net.Status", 0];
function Dr(a, b) {
    this.oldState = a;
    this.newState = b
}
A(Dr, G);
Dr.prototype.F = ["com.google.apps.docs.xplat.net.StatusEvent", 0];
function Er(a) {
    xo();
    Aq.call(this);
    this.value = a
}
A(Er, Aq);
Er.prototype.F = ["com.google.apps.docs.xplat.structs.ObservableValue", 0];
function zr(a, b) {
    xo();
    Er.call(this, a);
    this.B = !1;
    this.B = Yc(of(!0), b)
}
A(zr, Er);
zr.prototype.Ea = function() {
    this.B && Yp(this.value);
    Er.prototype.Ea.call(this)
}
;
zr.prototype.F = ["com.google.apps.docs.xplat.structs.MutableValue", 0];
function Cr(a, b) {
    this.oldValue = a;
    this.newValue = b
}
A(Cr, G);
Cr.prototype.equals = function(a) {
    if (Yc(this, a))
        return !0;
    if (!Fr(a))
        return !1;
    a = I(a, Fr, Cr);
    return Ne(this.oldValue, a.oldValue) && Ne(this.newValue, a.newValue)
}
;
Cr.prototype.ja = function() {
    return fg([this.oldValue, this.newValue])
}
;
function Fr(a) {
    return a instanceof Cr
}
Cr.prototype.F = ["com.google.apps.docs.xplat.structs.ValueChangedEvent", 0];
function Gr(a, b, c, d, e) {
    this.A = a;
    this.o = b;
    this.v = c;
    this.l = d;
    this.j = e
}
A(Gr, G);
Gr.prototype.toString = function() {
    var a = "MalformedCharacterContext(unicodeChar: " + H(this.A) + ", index: " + this.o + ", textLength: " + this.v;
    this.l != null && (a = H(a) + (", prev: " + H(this.l)));
    this.j != null && (a = H(a) + (", next: " + H(this.j)));
    return H(a) + ")"
}
;
Gr.prototype.equals = function(a) {
    var b;
    if (b = a instanceof Gr)
        a = a.toString(),
        b = Yc(of(this.toString()), a);
    return b
}
;
Gr.prototype.ja = function() {
    var a = [this.A, Te(this.o), Te(this.v), this.l, this.j];
    return fg(a)
}
;
Gr.prototype.F = ["com.google.apps.docs.xplat.text.util.MalformedCharacterContext", 0];
function Hr(a, b) {
    return b < 0 || b >= a.length ? null : "\\u" + H((ng(a, b) >>> 0).toString(16))
}
;function Ir(a) {
    try {
        return decodeURIComponent(a)
    } catch (c) {
        var b = ud(c);
        if (Ad(b))
            return null;
        throw b.j;
    }
}
;function Jr(a) {
    T.call(this, a, 0, Jr.S)
}
A(Jr, T);
Jr.T = "framework.response.EmptyResponse";
Jr.S = "f.mt";
function Kr(a) {
    T.call(this, a, 0, Kr.S)
}
A(Kr, T);
Kr.prototype.getData = function() {
    return fl(this, 4, Ti, Hk)
}
;
var Lr = Ol(Kr);
Kr.T = "framework.response.ErrorInfo";
Kr.S = "er";
var Mr = Nl(Kr);
Kr.prototype.j = function() {
    if (this != null) {
        Ml(this);
        var a = Ll(zj(Ik(this, 9, Ti, Hk)));
        var b = Ll(fl(this, 7, Ti, Hk))
          , c = Ll(zj(Ik(this, 8, Ti, Hk)))
          , d = Ll(zj(Ik(this, 5, Ti, Hk)))
          , e = Ll(fl(this, 2, Ti, Hk))
          , f = Ll(fl(this, 4, Ti, Hk))
          , g = Ll(fl(this, 1, Ti, Hk));
        var h = cl(this, Zl, 10, Ti);
        h != null ? (Ml(h),
        h = {}) : h = void 0;
        a = {
            errorCode: a,
            pi: b,
            ni: c,
            da: d,
            errorMessage: e,
            data: f,
            ui: g,
            xi: h
        }
    } else
        a = void 0;
    return a
}
;
function Nr(a, b, c) {
    for (var d in a)
        b.call(c, a[d], d, a)
}
function Or(a, b) {
    var c = {}, d;
    for (d in a)
        c[d] = b.call(void 0, a[d], d, a);
    return c
}
function Pr(a, b) {
    for (var c in a)
        if (a[c] == b)
            return !0;
    return !1
}
function Qr(a) {
    var b = {}, c;
    for (c in a)
        b[c] = a[c];
    return b
}
var Rr = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function Sr(a, b) {
    for (var c, d, e = 1; e < arguments.length; e++) {
        d = arguments[e];
        for (c in d)
            a[c] = d[c];
        for (var f = 0; f < Rr.length; f++)
            c = Rr[f],
            Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
}
;function Tr(a) {
    if (a.oa && typeof a.oa == k)
        return a.oa();
    if (typeof Map !== "undefined" && a instanceof Map || typeof Set !== "undefined" && a instanceof Set)
        return Array.from(a.values());
    if (typeof a === v)
        return a.split("");
    if (Nc(a)) {
        for (var b = [], c = a.length, d = 0; d < c; d++)
            b.push(a[d]);
        return b
    }
    b = [];
    c = 0;
    for (d in a)
        b[c++] = a[d];
    return b
}
function Ur(a) {
    if (a.sa && typeof a.sa == k)
        return a.sa();
    if (!a.oa || typeof a.oa != k) {
        if (typeof Map !== "undefined" && a instanceof Map)
            return Array.from(a.keys());
        if (!(typeof Set !== "undefined" && a instanceof Set)) {
            if (Nc(a) || typeof a === v) {
                var b = [];
                a = a.length;
                for (var c = 0; c < a; c++)
                    b.push(c);
                return b
            }
            b = [];
            c = 0;
            for (var d in a)
                b[c++] = d;
            return b
        }
    }
}
function Vr(a, b, c) {
    if (a.forEach && typeof a.forEach == k)
        a.forEach(b, c);
    else if (Nc(a) || typeof a === v)
        Array.prototype.forEach.call(a, b, c);
    else
        for (var d = Ur(a), e = Tr(a), f = e.length, g = 0; g < f; g++)
            b.call(c, e[g], d && d[g], a)
}
;function Wr(a) {
    this.v = this.D = this.o = "";
    this.B = null;
    this.A = this.l = "";
    this.C = !1;
    var b;
    a instanceof Wr ? (this.C = a.C,
    Xr(this, a.o),
    this.D = a.D,
    Yr(this, a.v),
    Zr(this, a.B),
    this.l = a.l,
    $r(this, a.j.clone()),
    this.A = a.A) : a && (b = Kp(String(a))) ? (this.C = !1,
    Xr(this, b[1] || "", !0),
    this.D = as(b[2] || ""),
    Yr(this, b[3] || "", !0),
    Zr(this, b[4]),
    this.l = as(b[5] || "", !0),
    $r(this, b[6] || "", !0),
    this.A = as(b[7] || "")) : (this.C = !1,
    this.j = new bs(null,this.C))
}
Wr.prototype.toString = function() {
    var a = []
      , b = this.o;
    b && a.push(cs(b, ds, !0), ":");
    var c = this.v;
    if (c || b == "file")
        a.push("//"),
        (b = this.D) && a.push(cs(b, ds, !0), "@"),
        a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
        c = this.B,
        c != null && a.push(":", String(c));
    if (c = this.l)
        this.v && c.charAt(0) != "/" && a.push("/"),
        a.push(cs(c, c.charAt(0) == "/" ? es : fs, !0));
    (c = this.j.toString()) && a.push("?", c);
    (c = this.A) && a.push("#", cs(c, gs));
    return a.join("")
}
;
Wr.prototype.resolve = function(a) {
    var b = this.clone()
      , c = !!a.o;
    c ? Xr(b, a.o) : c = !!a.D;
    c ? b.D = a.D : c = !!a.v;
    c ? Yr(b, a.v) : c = a.B != null;
    var d = a.l;
    if (c)
        Zr(b, a.B);
    else if (c = !!a.l) {
        if (d.charAt(0) != "/")
            if (this.v && !this.l)
                d = "/" + d;
            else {
                var e = b.l.lastIndexOf("/");
                e != -1 && (d = b.l.slice(0, e + 1) + d)
            }
        e = d;
        if (e == ".." || e == ".")
            d = "";
        else if (e.indexOf("./") != -1 || e.indexOf("/.") != -1) {
            d = Mg(e, "/");
            e = e.split("/");
            for (var f = [], g = 0; g < e.length; ) {
                var h = e[g++];
                h == "." ? d && g == e.length && f.push("") : h == ".." ? ((f.length > 1 || f.length == 1 && f[0] != "") && f.pop(),
                d && g == e.length && f.push("")) : (f.push(h),
                d = !0)
            }
            d = f.join("/")
        } else
            d = e
    }
    c ? b.l = d : c = a.j.toString() !== "";
    c ? $r(b, a.j.clone()) : c = !!a.A;
    c && (b.A = a.A);
    return b
}
;
Wr.prototype.clone = function() {
    return new Wr(this)
}
;
function Xr(a, b, c) {
    a.o = c ? as(b, !0) : b;
    a.o && (a.o = a.o.replace(/:$/, ""));
    return a
}
function Yr(a, b, c) {
    a.v = c ? as(b, !0) : b;
    return a
}
function Zr(a, b) {
    if (b) {
        b = Number(b);
        if (isNaN(b) || b < 0)
            throw Error("Bad port number " + b);
        a.B = b
    } else
        a.B = null;
    return a
}
function $r(a, b, c) {
    b instanceof bs ? (a.j = b,
    hs(a.j, a.C)) : (c || (b = cs(b, is)),
    a.j = new bs(b,a.C))
}
function js(a, b, c) {
    Array.isArray(c) || (c = [String(c)]);
    ks(a.j, b, c)
}
function ls(a) {
    return a instanceof Wr ? a.clone() : new Wr(a)
}
function as(a, b) {
    return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
}
function cs(a, b, c) {
    return typeof a === v ? (a = encodeURI(a).replace(b, ms),
    c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
    a) : null
}
function ms(a) {
    a = a.charCodeAt(0);
    return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
}
var ds = /[#\/\?@]/g
  , fs = /[#\?:]/g
  , es = /[#\?]/g
  , is = /[#\?@]/g
  , gs = /#/g;
function bs(a, b) {
    this.l = this.j = null;
    this.o = a || null;
    this.v = !!b
}
function ns(a) {
    a.j || (a.j = new Map,
    a.l = 0,
    a.o && Mp(a.o, function(b, c) {
        a.add(decodeURIComponent(b.replace(/\+/g, " ")), c)
    }))
}
y = bs.prototype;
y.add = function(a, b) {
    ns(this);
    this.o = null;
    a = os(this, a);
    var c = this.j.get(a);
    c || this.j.set(a, c = []);
    c.push(b);
    this.l = Eg(this.l) + 1;
    return this
}
;
y.remove = function(a) {
    ns(this);
    a = os(this, a);
    return this.j.has(a) ? (this.o = null,
    this.l = Eg(this.l) - this.j.get(a).length,
    this.j.delete(a)) : !1
}
;
y.clear = function() {
    this.j = this.o = null;
    this.l = 0
}
;
function ps(a, b) {
    ns(a);
    b = os(a, b);
    return a.j.has(b)
}
y.forEach = function(a, b) {
    ns(this);
    this.j.forEach(function(c, d) {
        c.forEach(function(e) {
            a.call(b, e, d, this)
        }, this)
    }, this)
}
;
y.sa = function() {
    ns(this);
    for (var a = Array.from(this.j.values()), b = Array.from(this.j.keys()), c = [], d = 0; d < b.length; d++)
        for (var e = a[d], f = 0; f < e.length; f++)
            c.push(b[d]);
    return c
}
;
y.oa = function(a) {
    ns(this);
    var b = [];
    if (typeof a === v)
        ps(this, a) && (b = b.concat(this.j.get(os(this, a))));
    else {
        a = Array.from(this.j.values());
        for (var c = 0; c < a.length; c++)
            b = b.concat(a[c])
    }
    return b
}
;
y.set = function(a, b) {
    ns(this);
    this.o = null;
    a = os(this, a);
    ps(this, a) && (this.l = Eg(this.l) - this.j.get(a).length);
    this.j.set(a, [b]);
    this.l = Eg(this.l) + 1;
    return this
}
;
y.get = function(a, b) {
    if (!a)
        return b;
    a = this.oa(a);
    return a.length > 0 ? String(a[0]) : b
}
;
function ks(a, b, c) {
    a.remove(b);
    c.length > 0 && (a.o = null,
    a.j.set(os(a, b), sh(c)),
    a.l = Eg(a.l) + c.length)
}
y.toString = function() {
    if (this.o)
        return this.o;
    if (!this.j)
        return "";
    for (var a = [], b = Array.from(this.j.keys()), c = 0; c < b.length; c++) {
        var d = b[c]
          , e = encodeURIComponent(String(d));
        d = this.oa(d);
        for (var f = 0; f < d.length; f++) {
            var g = e;
            d[f] !== "" && (g += "=" + encodeURIComponent(String(d[f])));
            a.push(g)
        }
    }
    return this.o = a.join("&")
}
;
y.clone = function() {
    var a = new bs;
    a.o = this.o;
    this.j && (a.j = new Map(this.j),
    a.l = this.l);
    return a
}
;
function os(a, b) {
    b = String(b);
    a.v && (b = b.toLowerCase());
    return b
}
function hs(a, b) {
    b && !a.v && (ns(a),
    a.o = null,
    a.j.forEach(function(c, d) {
        var e = d.toLowerCase();
        d != e && (this.remove(d),
        ks(this, e, c))
    }, a));
    a.v = b
}
;function qs() {}
qs.j = void 0;
qs.l = function() {
    return qs.j ? qs.j : qs.j = new qs
}
;
function rs() {
    var a = E.window;
    a.onbeforeunload = Zb();
    a.location.reload()
}
;function ss() {
    this.j = function() {
        rs()
    }
}
ss.prototype.notify = function() {
    window.confirm("L\u1ed7i n\u00e0y \u0111\u00e3 \u0111\u01b0\u1ee3c b\u00e1o c\u00e1o v\u1edbi Google v\u00e0 ch\u00fang t\u00f4i s\u1ebd \u0111i\u1ec1u tra l\u1ed7i s\u1edbm nh\u1ea5t c\u00f3 th\u1ec3. Vui l\u00f2ng t\u1ea3i l\u1ea1i trang n\u00e0y \u0111\u1ec3 ti\u1ebfp t\u1ee5c.") && this.j()
}
;
function ts(a, b) {
    this.type = a;
    this.currentTarget = this.target = b;
    this.defaultPrevented = this.l = !1
}
ts.prototype.stopPropagation = function() {
    this.l = !0
}
;
ts.prototype.preventDefault = function() {
    this.defaultPrevented = !0
}
;
var us = function() {
    if (!E.addEventListener || !Object.defineProperty)
        return !1;
    var a = !1
      , b = Object.defineProperty({}, "passive", {
        get: function() {
            a = !0
        }
    });
    try {
        var c = Zb();
        E.addEventListener("test", c, b);
        E.removeEventListener("test", c, b)
    } catch (d) {}
    return a
}();
function vs(a, b) {
    ts.call(this, a ? a.type : "");
    this.relatedTarget = this.currentTarget = this.target = null;
    this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
    this.key = "";
    this.charCode = this.keyCode = 0;
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
    this.state = null;
    this.pointerId = 0;
    this.pointerType = "";
    this.timeStamp = 0;
    this.j = null;
    a && this.init(a, b)
}
Xc(vs, ts);
vs.prototype.init = function(a, b) {
    var c = this.type = a.type
      , d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
    this.target = a.target || a.srcElement;
    this.currentTarget = b;
    b = a.relatedTarget;
    b || (c == "mouseover" ? b = a.fromElement : c == "mouseout" && (b = a.toElement));
    this.relatedTarget = b;
    d ? (this.clientX = d.clientX !== void 0 ? d.clientX : d.pageX,
    this.clientY = d.clientY !== void 0 ? d.clientY : d.pageY,
    this.screenX = d.screenX || 0,
    this.screenY = d.screenY || 0) : (this.offsetX = zh || a.offsetX !== void 0 ? a.offsetX : a.layerX,
    this.offsetY = zh || a.offsetY !== void 0 ? a.offsetY : a.layerY,
    this.clientX = a.clientX !== void 0 ? a.clientX : a.pageX,
    this.clientY = a.clientY !== void 0 ? a.clientY : a.pageY,
    this.screenX = a.screenX || 0,
    this.screenY = a.screenY || 0);
    this.button = a.button;
    this.keyCode = a.keyCode || 0;
    this.key = a.key || "";
    this.charCode = a.charCode || (c == "keypress" ? a.keyCode : 0);
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.pointerId = a.pointerId || 0;
    this.pointerType = a.pointerType;
    this.state = a.state;
    this.timeStamp = a.timeStamp;
    this.j = a;
    a.defaultPrevented && vs.pa.preventDefault.call(this)
}
;
vs.prototype.stopPropagation = function() {
    vs.pa.stopPropagation.call(this);
    this.j.stopPropagation ? this.j.stopPropagation() : this.j.cancelBubble = !0
}
;
vs.prototype.preventDefault = function() {
    vs.pa.preventDefault.call(this);
    var a = this.j;
    a.preventDefault ? a.preventDefault() : a.returnValue = !1
}
;
var ws = "closure_listenable_" + (Math.random() * 1E6 | 0);
function xs(a) {
    return !(!a || !a[ws])
}
;var ys = 0;
function zs(a, b, c, d, e) {
    this.listener = a;
    this.proxy = null;
    this.src = b;
    this.type = c;
    this.capture = !!d;
    this.handler = e;
    this.key = ++ys;
    this.pb = this.Sa = !1
}
function As(a) {
    a.pb = !0;
    a.listener = null;
    a.proxy = null;
    a.src = null;
    a.handler = null
}
;function Bs(a) {
    this.src = a;
    this.j = {};
    this.l = 0
}
Bs.prototype.add = function(a, b, c, d, e) {
    var f = a.toString();
    a = this.j[f];
    a || (a = this.j[f] = [],
    this.l++);
    var g = Cs(a, b, d, e);
    g > -1 ? (b = a[g],
    c || (b.Sa = !1)) : (b = new zs(b,this.src,f,!!d,e),
    b.Sa = c,
    a.push(b));
    return b
}
;
Bs.prototype.remove = function(a, b, c, d) {
    a = a.toString();
    if (!(a in this.j))
        return !1;
    var e = this.j[a];
    b = Cs(e, b, c, d);
    return b > -1 ? (As(e[b]),
    rh(e, b),
    e.length == 0 && (delete this.j[a],
    this.l--),
    !0) : !1
}
;
function Ds(a, b) {
    var c = b.type;
    c in a.j && qh(a.j[c], b) && (As(b),
    a.j[c].length == 0 && (delete a.j[c],
    a.l--))
}
function Es(a, b, c, d, e) {
    a = a.j[b.toString()];
    b = -1;
    a && (b = Cs(a, c, d, e));
    return b > -1 ? a[b] : null
}
function Cs(a, b, c, d) {
    for (var e = 0; e < a.length; ++e) {
        var f = a[e];
        if (!f.pb && f.listener == b && f.capture == !!c && f.handler == d)
            return e
    }
    return -1
}
;var Fs = "closure_lm_" + (Math.random() * 1E6 | 0)
  , Gs = {}
  , Hs = 0;
function Is(a, b, c, d, e) {
    if (d && d.once)
        return Js(a, b, c, d, e);
    if (Array.isArray(b)) {
        for (var f = 0; f < b.length; f++)
            Is(a, b[f], c, d, e);
        return null
    }
    c = Ks(c);
    xs(a) ? (d = Oc(d) ? !!d.capture : !!d,
    Ls(a),
    a = a.v.add(String(b), c, !1, d, e)) : a = Ms(a, b, c, !1, d, e);
    return a
}
function Ms(a, b, c, d, e, f) {
    if (!b)
        throw Error("Invalid event type");
    var g = Oc(e) ? !!e.capture : !!e
      , h = Ns(a);
    h || (a[Fs] = h = new Bs(a));
    c = h.add(b, c, d, g, f);
    if (c.proxy)
        return c;
    d = Os();
    c.proxy = d;
    d.src = a;
    d.listener = c;
    if (a.addEventListener)
        us || (e = g),
        e === void 0 && (e = !1),
        a.addEventListener(b.toString(), d, e);
    else if (a.attachEvent)
        a.attachEvent(Ps(b.toString()), d);
    else if (a.addListener && a.removeListener)
        K(b === "change", "MediaQueryList only has a change event"),
        a.addListener(d);
    else
        throw Error("addEventListener and attachEvent are unavailable.");
    Hs++;
    return c
}
function Os() {
    function a(c) {
        return b.call(a.src, a.listener, c)
    }
    var b = Qs;
    return a
}
function Js(a, b, c, d, e) {
    if (Array.isArray(b)) {
        for (var f = 0; f < b.length; f++)
            Js(a, b[f], c, d, e);
        return null
    }
    c = Ks(c);
    return xs(a) ? a.v.add(String(b), c, !0, Oc(d) ? !!d.capture : !!d, e) : Ms(a, b, c, !0, d, e)
}
function Rs(a, b, c, d, e) {
    if (Array.isArray(b))
        for (var f = 0; f < b.length; f++)
            Rs(a, b[f], c, d, e);
    else
        d = Oc(d) ? !!d.capture : !!d,
        c = Ks(c),
        xs(a) ? a.v.remove(String(b), c, d, e) : a && (a = Ns(a)) && (b = Es(a, b, c, d, e)) && Ss(b)
}
function Ss(a) {
    if (typeof a !== m && a && !a.pb) {
        var b = a.src;
        if (xs(b))
            Ds(b.v, a);
        else {
            var c = a.type
              , d = a.proxy;
            b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(Ps(c), d) : b.addListener && b.removeListener && b.removeListener(d);
            Hs--;
            (c = Ns(b)) ? (Ds(c, a),
            c.l == 0 && (c.src = null,
            b[Fs] = null)) : As(a)
        }
    }
}
function Ps(a) {
    return a in Gs ? Gs[a] : Gs[a] = "on" + a
}
function Qs(a, b) {
    if (a.pb)
        a = !0;
    else {
        b = new vs(b,this);
        var c = a.listener
          , d = a.handler || a.src;
        a.Sa && Ss(a);
        a = c.call(d, b)
    }
    return a
}
function Ns(a) {
    a = a[Fs];
    return a instanceof Bs ? a : null
}
var Ts = "__closure_events_fn_" + (Math.random() * 1E9 >>> 0);
function Ks(a) {
    K(a, "Listener can not be null.");
    if (typeof a === k)
        return a;
    K(a.handleEvent, "An object listener must have handleEvent method.");
    a[Ts] || (a[Ts] = function(b) {
        return a.handleEvent(b)
    }
    );
    return a[Ts]
}
Fm(function(a) {
    Qs = a(Qs)
});
function Us(a, b) {
    ts.call(this, a);
    this.error = b
}
A(Us, ts);
var Vs = /\/d\/([^\/]+)/
  , Ws = /\/d\/(e\/)?([^\/]+)/
  , Xs = /\/r\/([^\/]+)/;
function Ys(a) {
    a = Kp(a)[5] || null;
    return Vs.test(a)
}
function Zs(a, b) {
    return Ys(a) ? $s(a, b) : a
}
function $s(a, b) {
    K(Ys(a), a + " is not canonical");
    a = Kp(a);
    var c = a[5];
    c = c.replace(b, "");
    return Ip(a[1], a[2], a[3], a[4], c, a[6], a[7])
}
;function X() {
    W.call(this);
    this.v = new Bs(this);
    this.ne = this;
    this.Ia = null
}
Xc(X, W);
X.prototype[ws] = !0;
X.prototype.addEventListener = function(a, b, c, d) {
    Is(this, a, b, c, d)
}
;
X.prototype.removeEventListener = function(a, b, c, d) {
    Rs(this, a, b, c, d)
}
;
function Y(a, b) {
    Ls(a);
    var c = a.Ia;
    if (c) {
        var d = [];
        for (var e = 1; c; c = c.Ia)
            d.push(c),
            K(++e < 1E3, "infinite loop")
    }
    a = a.ne;
    c = b.type || b;
    typeof b === v ? b = new ts(b,a) : b instanceof ts ? b.target = b.target || a : (e = b,
    b = new ts(c,a),
    Sr(b, e));
    e = !0;
    var f;
    if (d)
        for (f = d.length - 1; !b.l && f >= 0; f--) {
            var g = b.currentTarget = d[f];
            e = at(g, c, !0, b) && e
        }
    b.l || (g = b.currentTarget = a,
    e = at(g, c, !0, b) && e,
    b.l || (e = at(g, c, !1, b) && e));
    if (d)
        for (f = 0; !b.l && f < d.length; f++)
            g = b.currentTarget = d[f],
            e = at(g, c, !1, b) && e
}
X.prototype.K = function() {
    X.pa.K.call(this);
    if (this.v) {
        var a = this.v, b = 0, c;
        for (c in a.j) {
            for (var d = a.j[c], e = 0; e < d.length; e++)
                ++b,
                As(d[e]);
            delete a.j[c];
            a.l--
        }
    }
    this.Ia = null
}
;
function at(a, b, c, d) {
    b = a.v.j[String(b)];
    if (!b)
        return !0;
    b = b.concat();
    for (var e = !0, f = 0; f < b.length; ++f) {
        var g = b[f];
        if (g && !g.pb && g.capture == c) {
            var h = g.listener
              , l = g.handler || g.src;
            g.Sa && Ds(a.v, g);
            e = h.call(l, d) !== !1 && e
        }
    }
    return e && !d.defaultPrevented
}
function Ls(a) {
    K(a.v, "Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?")
}
;function bt(a, b) {
    X.call(this);
    this.l = a || 1;
    this.j = b || E;
    this.o = F(this.af, this);
    this.A = Date.now()
}
Xc(bt, X);
y = bt.prototype;
y.bb = !1;
y.qa = null;
y.setInterval = function(a) {
    this.l = a;
    this.qa && this.bb ? (ct(this),
    this.start()) : this.qa && ct(this)
}
;
y.af = function() {
    if (this.bb) {
        var a = Date.now() - this.A;
        a > 0 && a < this.l * .8 ? this.qa = this.j.setTimeout(this.o, this.l - a) : (this.qa && (this.j.clearTimeout(this.qa),
        this.qa = null),
        Y(this, "tick"),
        this.bb && (ct(this),
        this.start()))
    }
}
;
y.start = function() {
    this.bb = !0;
    this.qa || (this.qa = this.j.setTimeout(this.o, this.l),
    this.A = Date.now())
}
;
function ct(a) {
    a.bb = !1;
    a.qa && (a.j.clearTimeout(a.qa),
    a.qa = null)
}
y.K = function() {
    bt.pa.K.call(this);
    ct(this);
    delete this.j
}
;
function dt(a, b, c) {
    if (typeof a === k)
        c && (a = F(a, c));
    else if (a && typeof a.handleEvent == k)
        a = F(a.handleEvent, a);
    else
        throw Error(wa);
    return Number(b) > 2147483647 ? -1 : E.setTimeout(a, b || 0)
}
;function et(a, b, c) {
    W.call(this);
    this.j = a;
    this.v = b || 0;
    this.l = c;
    this.o = F(this.le, this)
}
Xc(et, W);
y = et.prototype;
y.cb = 0;
y.K = function() {
    et.pa.K.call(this);
    ft(this);
    delete this.j;
    delete this.l
}
;
y.start = function(a) {
    ft(this);
    this.cb = dt(this.o, a !== void 0 ? a : this.v)
}
;
function ft(a) {
    a.isActive() && E.clearTimeout(a.cb);
    a.cb = 0
}
y.isActive = function() {
    return this.cb != 0
}
;
y.le = function() {
    this.cb = 0;
    this.j && this.j.call(this.l)
}
;
function gt(a, b, c, d) {
    W.call(this);
    this.l = d != null ? d : .15;
    K(this.l >= 0 && this.l <= 1);
    this.A = a;
    this.v = b;
    this.C = c;
    this.j = new et(this.D,void 0,this);
    this.B = Number.NEGATIVE_INFINITY;
    this.o = 0
}
A(gt, W);
gt.prototype.isActive = function() {
    return this.j.isActive()
}
;
gt.prototype.start = function() {
    ht(this, !1, !1)
}
;
function ht(a, b, c) {
    b && (ft(a.j),
    it(a, a.v));
    a.isActive() || (b = Math.max(0, a.B + a.o - Date.now()),
    b == 0 && (c ? b = it(a, a.v) : a.o = 0),
    a.j.start(b))
}
function it(a, b) {
    b > 0 && a.l != 0 && (b = Math.floor(b * (1 - a.l + Math.random() * a.l * 2)));
    return a.o = b
}
gt.prototype.D = function() {
    this.B = Date.now();
    it(this, Math.min(Math.max(this.o * 2, this.v), this.C));
    this.A()
}
;
gt.prototype.K = function() {
    this.j.dispose();
    delete this.j;
    delete this.A;
    W.prototype.K.call(this)
}
;
function jt(a) {
    W.call(this);
    this.l = a;
    this.j = {}
}
Xc(jt, W);
var kt = [];
function lt(a, b, c, d) {
    Array.isArray(c) || (c && (kt[0] = c.toString()),
    c = kt);
    for (var e = 0; e < c.length; e++) {
        var f = Is(b, c[e], d || a.handleEvent, !1, a.l || a);
        if (!f)
            break;
        a.j[f.key] = f
    }
}
function mt(a, b, c) {
    nt(a, b, hb, c)
}
function nt(a, b, c, d, e, f) {
    if (Array.isArray(c))
        for (var g = 0; g < c.length; g++)
            nt(a, b, c[g], d, e, f);
    else
        (b = Js(b, c, d || a.handleEvent, e, f || a.l || a)) && (a.j[b.key] = b)
}
function ot(a, b, c, d, e, f) {
    if (Array.isArray(c))
        for (var g = 0; g < c.length; g++)
            ot(a, b, c[g], d, e, f);
    else
        d = d || a.handleEvent,
        e = Oc(e) ? !!e.capture : !!e,
        f = f || a.l || a,
        d = Ks(d),
        e = !!e,
        c = xs(b) ? Es(b.v, String(c), d, e, f) : b ? (b = Ns(b)) ? Es(b, c, d, e, f) : null : null,
        c && (Ss(c),
        delete a.j[c.key])
}
function pt(a) {
    Nr(a.j, function(b, c) {
        this.j.hasOwnProperty(c) && Ss(b)
    }, a);
    a.j = {}
}
jt.prototype.K = function() {
    jt.pa.K.call(this);
    pt(this)
}
;
jt.prototype.handleEvent = function() {
    throw Error("EventHandler.handleEvent not implemented");
}
;
function qt(a, b, c, d, e, f, g) {
    g = g === void 0 ? !0 : g;
    W.call(this);
    var h = this;
    this.j = a;
    this.j.G = 1E4;
    this.ca = b;
    this.v = f;
    this.l = new gt(function() {
        return h.H()
    }
    ,3E4,36E5);
    this.A = 0;
    this.B = null;
    this.N = new Oq("errorsender",1,8,d);
    $p(this, this.N);
    this.J = !1;
    this.D = null;
    this.I = new Set;
    this.C = new jt(this);
    K(c == null || c > 0);
    this.la = c || 10;
    this.Y = e || null;
    lt(this.C, this.j, hb, this.ga);
    lt(this.C, this.j, Fb, this.H);
    this.U = null;
    this.G = new Eq;
    $p(this, this.G);
    this.v && Fq(this.G, this.v.l, function() {
        K(h.v);
        h.v.j.j >= 3 && (h.U = (vr(),
        hr));
        h.v.j.j >= 3 || h.U !== (vr(),
        hr) || rt(h)
    });
    this.L = g;
    this.Z = {}
}
A(qt, W);
function st(a, b, c, d, e) {
    wq(a.ca, "docs-dafjera") && (b = Zs(Zs(b, Xs), Vs));
    var f = wn(wn(Gn(a.o.length), function(g) {
        if (!(g >= this.la))
            return this.L && (b = Rp(b, "errorSender_enqueueTimeMs", Date.now().toString())),
            g = {},
            g.u = b,
            g.m = c,
            g.c = d,
            g.h = e,
            this.o.push(g),
            Gn()
    }, a), a.H, a);
    zn(f, function() {
        this.I.delete(f)
    }, a);
    a.I.add(f)
}
qt.prototype.H = function() {
    var a = this.v && this.v.j.j >= 3
      , b = this.ea() || this.j.isActive() || this.l.isActive() || this.J;
    return a || b ? Gn() : tt(this)
}
;
function tt(a) {
    return function() {
        return wn(Gn(a.o[0] !== void 0 ? a.o[0] : null), function(b) {
            return ut(a, b)
        })
    }()
}
function ut(a, b) {
    if (a.l.isActive() || a.j.isActive() || a.J)
        return Gn();
    if (!b)
        return ft(a.l.j),
        Gn();
    if (b.u.length > 4E3)
        return vt(a);
    try {
        Rq(a.N);
        a.D = new on;
        var c = b.u;
        a.Y != null && (c = Rp(c, "reportingSessionId", a.Y));
        a.A > 0 && (c = Rp(c, "retryCount", a.A));
        a.B != null && (c = Rp(c, "previousErrorSendStatus", a.B));
        a.L && (c = Rp(c, "errorSender_sendTimeMs", Date.now().toString()),
        c = Rp(c, "errorSenderType", a.P()),
        b.errorSender_frontIndex && (c = Rp(c, "errorSender_frontIndex", b.errorSender_frontIndex)),
        b.errorSender_nextIndex && (c = Rp(c, "errorSender_nextIndex", b.errorSender_nextIndex)),
        b.errorSender_queueSize && (c = Rp(c, "errorSender_queueSize", b.errorSender_queueSize)));
        a.Z = b;
        var d = b.m
          , e = b.c
          , f = b.h;
        return wn(wn(vt(a), function() {
            wt(a.j, c, d, e, f)
        }), function() {
            return a.D
        })
    } catch (g) {
        if (yo(g) instanceof Gq)
            a.J = !0;
        else
            throw Xo(g, {
                "docs-origin-class": "docs.debug.ErrorSender"
            });
    }
    return Gn()
}
qt.prototype.ga = function() {
    var a = this.j.ma()
      , b = K(this.D)
      , c = xt(this.j) || a >= 400 && a <= 500
      , d = this.A > 3;
    c || d ? (this.A = 0,
    this.B = null,
    ft(this.l.j),
    wn(Gn(), function() {
        b.va()
    })) : (this.A++,
    this.B = a === -1 ? this.j.A : a,
    rt(this),
    this.o.push(this.Z),
    Gn(),
    b.va())
}
;
function rt(a) {
    a.A != 1 || a.l.isActive() ? a.l.start() : ht(a.l, !0, !0)
}
qt.prototype.K = function() {
    Zp(this.C, this.l, this.j, this.G);
    this.I.clear();
    W.prototype.K.call(this)
}
;
qt.prototype.P = x("BaseErrorSender");
function yt(a, b, c, d, e) {
    qt.call(this, a, b, c, void 0, d, e, void 0);
    this.o = []
}
A(yt, qt);
function vt(a) {
    a.o.shift();
    return Gn()
}
yt.prototype.P = x("MemoryErrorSender");
yt.prototype.K = function() {
    delete this.o;
    qt.prototype.K.call(this)
}
;
var zt;
function At(a) {
    var b;
    ((b = zt) != null ? b : zt = []).push(a)
}
;function Bt(a, b) {
    var c = c === void 0 ? !1 : c;
    K(a, "Invalid service id + " + a);
    var d = d || [];
    for (var e = 0; e < d.length; e++)
        K(d[e], "Invalid dependency " + d[e] + " (index in dependency array: " + e + ") for service " + a);
    this.l = a;
    this.j = b || null;
    Ct(this, d, c)
}
Bt.prototype.toString = bc("l");
function Ct(a, b, c) {
    c = c === void 0 ? !1 : c;
    K(!0, "Error while adding dependencies. The dependencies cannot be changed after they were read.");
    if (c) {
        if (!a.j)
            throw Error("A module ID must be set on the Fava ServiceId " + a.l + " in order to modify extra edges.");
        b.map(function(d) {
            return d.j
        }).forEach(function(d) {
            At(function(e) {
                e.j(K(a.j), d)
            })
        })
    }
}
;new Bt("a");
function Dt(a) {
    this.j = Hl(ym(), hk(a));
    a = il(this.j, 1);
    this.l = Math.floor(Math.random() * 100) < a
}
Dt.prototype.toString = function() {
    var a = "{bool=" + !(this.l ? !hl(this.j, 5) : !hl(this.j, 2)) + ', string="'
      , b = this.l ? fl(this.j, 6, void 0, Hk) : kl(this.j, 3);
    a = a + (b != null ? String(b) : "") + '", int=';
    b = this.l ? zj(Ik(this.j, 7, void 0, Hk)) : il(this.j, 4, -1);
    return a + (b != null ? Number(b) : -1) + "}"
}
;
function Et(a) {
    this.j = new Map;
    this.l = [];
    if (a = a.get("docs-cei")) {
        Hg(a);
        var b = a.i;
        b && th(this.l, b);
        a = a.cf || {};
        for (var c in a)
            this.j.set(c, new Dt(a[c]))
    }
}
Et.prototype.get = function(a) {
    return this.j.get(a) || null
}
;
function Ft() {
    for (var a in Array.prototype)
        return !1;
    return !0
}
;var Gt = ['window[("_callback_" + expid)] is not a function', "Cannot read properties of null (reading 'readyState')", "request failed on client side"]
  , Ht = [/(undefined|constructor).*YT|YT.*(undefined|constructor)/];
function Cl(a) {
    this.j = a
}
function Fl(a) {
    var b = a.j;
    if (b == null)
        return null;
    if (typeof b === v)
        return b;
    throw new TypeError("Invalid string data <K1cgmc>: " + a.j + " (typeof " + typeof a.j + ")");
}
Cl.prototype.toString = function() {
    var a = Fl(this);
    if (a === null) {
        if ("K1cgmc".includes("-"))
            throw Error("Data K1cgmc not defined. Most likely because you need to replace - with camelcase. More information http://go/wiz-errors#data-not-found");
        throw Error("Data K1cgmc not defined.");
    }
    return a
}
;
function It(a) {
    T.call(this, a, 10)
}
A(It, T);
It.T = "apps.framework.logging.AppsFrameworkExtension.WebReports.WebReportInfo";
var Jt = Pl(It);
function Kt(a) {
    T.call(this, a)
}
A(Kt, T);
Kt.prototype.Nb = function(a) {
    if (a != null && typeof a !== v)
        throw Error("Expected a string or null or undefined but got " + a + " a " + Mc(a));
    Kk(this, 7, a)
}
;
Kt.T = "apps.telemetry.proto.AppsTelemetryExtension.WebDimensions";
function Lt(a) {
    T.call(this, a)
}
A(Lt, T);
function Mt(a) {
    return bl(a, Kt, Wk(a, Nt, 4))
}
Lt.T = "apps.telemetry.proto.AppsTelemetryExtension.AppsTelemetryDimensions";
var Nt = [4, 5];
function Ot(a) {
    T.call(this, a)
}
A(Ot, T);
Ot.T = "apps.telemetry.proto.AppsTelemetryExtension.CrashReportInfo";
function Pt(a) {
    T.call(this, a)
}
A(Pt, T);
Pt.T = "apps.telemetry.proto.AppsTelemetryExtension.JsError";
function El(a) {
    T.call(this, a)
}
A(El, T);
function Qt(a) {
    return bl(a, Lt, 1)
}
El.T = "apps.telemetry.proto.AppsTelemetryExtension";
function Rt(a) {
    T.call(this, a, 1)
}
A(Rt, T);
Rt.T = "logs.proto.wireless.performance.mobile.MetricExtension";
var St = Pl(Rt);
function Tt(a) {
    T.call(this, a, 1)
}
A(Tt, T);
Tt.T = "logs.proto.wireless.performance.mobile.ios.MetricExtension";
var Ut = Pl(Tt);
Jt[1001] = {
    ji: new Il(1001,It,El)
};
St[29] = {
    li: new Il(29,Rt,El)
};
Ut[9] = {
    ki: new Il(9,Tt,El)
};
function Vt() {
    this.j = Bl()
}
Vt.prototype.Va = function() {
    var a = new Map, b, c = (b = this.j) == null ? void 0 : Mt(Qt(b));
    if (c == null ? 0 : gl(c, 2) != null) {
        var d;
        (b = (d = ll(c, 2)) == null ? void 0 : d.toString()) && a.set("canaryanalysisservertestgroup", b);
        if (c == null)
            var e = void 0;
        else if ((c = cl(c, tm, 3)) == null)
            e = void 0;
        else {
            d = Number;
            e = e === void 0 ? "0" : e;
            var f;
            b = (f = fi() ? Dj(Ik(c, 1), !0) : Dj(Ik(c, 1, void 0, void 0, Ej))) != null ? f : e;
            e = d(b);
            f = il(c, 2);
            e = (new Date(e * 1E3 + f / 1E6)).valueOf().toString()
        }
        e && a.set("serverstarttimemillis", e)
    }
    var g, h;
    (e = (g = this.j) == null ? void 0 : (h = cl(g, Lt, 1)) == null ? void 0 : ll(h, 6)) && a.set("clientApp", String(e));
    return a
}
;
function Wt(a, b) {
    this.width = a;
    this.height = b
}
y = Wt.prototype;
y.clone = function() {
    return new Wt(this.width,this.height)
}
;
y.toString = function() {
    return "(" + this.width + " x " + this.height + ")"
}
;
y.aspectRatio = function() {
    return this.width / this.height
}
;
y.ceil = function() {
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this
}
;
y.floor = function() {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this
}
;
y.round = function() {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
}
;
function Xt(a, b) {
    Nr(b, function(c, d) {
        d == "style" ? a.style.cssText = c : d == "class" ? a.className = c : d == "for" ? a.htmlFor = c : Yt.hasOwnProperty(d) ? a.setAttribute(Yt[d], c) : Mg(d, "aria-") || Mg(d, "data-") ? a.setAttribute(d, c) : a[d] = c
    })
}
var Yt = {
    cellpadding: "cellPadding",
    cellspacing: "cellSpacing",
    colspan: "colSpan",
    frameborder: "frameBorder",
    height: "height",
    maxlength: "maxLength",
    nonce: "nonce",
    role: "role",
    rowspan: "rowSpan",
    type: "type",
    usemap: "useMap",
    valign: "vAlign",
    width: "width"
};
function Zt(a, b, c) {
    return $t(document, arguments)
}
function $t(a, b) {
    var c = b[1]
      , d = au(a, String(b[0]));
    c && (typeof c === v ? d.className = c : Array.isArray(c) ? d.className = c.join(" ") : Xt(d, c));
    b.length > 2 && bu(a, d, b);
    return d
}
function bu(a, b, c) {
    function d(h) {
        h && b.appendChild(typeof h === v ? a.createTextNode(h) : h)
    }
    for (var e = 2; e < c.length; e++) {
        var f = c[e];
        if (!Nc(f) || Oc(f) && f.nodeType > 0)
            d(f);
        else {
            a: {
                if (f && typeof f.length == m) {
                    if (Oc(f)) {
                        var g = typeof f.item == k || typeof f.item == v;
                        break a
                    }
                    if (typeof f === k) {
                        g = typeof f.item == k;
                        break a
                    }
                }
                g = !1
            }
            kh(g ? sh(f) : f, d)
        }
    }
}
function au(a, b) {
    b = String(b);
    a.contentType === "application/xhtml+xml" && (b = b.toLowerCase());
    return a.createElement(b)
}
function cu() {
    this.j = E.document || document
}
cu.prototype.l = function(a, b, c) {
    return $t(this.j, arguments)
}
;
function du() {
    function a() {}
    this.j = a.call.bind(a.toString)
}
du.prototype.Va = function() {
    var a = new Map;
    eu() && a.set("apps_telemetry.screen_tampered", Pb);
    a: {
        var b = C(Array.prototype)
          , c = b.next();
        try {
            for (; !c.done; c = b.next()) {
                var d = !0;
                break a
            }
        } finally {
            rc(b, c)
        }
        d = !1
    }
    d && a.set("apps_telemetry.array_prototype_tampered", Pb);
    fu() || a.set("apps_telemetry.canvas_creation_broken", Pb);
    !gu() && E.navigator && E.navigator.webdriver && a.set("apps_telemetry.webdriver", Pb);
    d = !1;
    b = C(hu);
    c = b.next();
    try {
        for (; !c.done; c = b.next()) {
            var e = c.value
              , f = iu(e.key);
            f === 0 ? (a.set("apps_telemetry.automation_property_present." + e.fa, Pb),
            d = !0) : f === 2 && a.set("apps_telemetry.automation_property_check_failed." + e.fa, Pb)
        }
    } finally {
        rc(b, c)
    }
    d && a.set("apps_telemetry.automation_detected", Pb);
    e = !1;
    f = C(ju);
    d = f.next();
    try {
        for (; !d.done; d = f.next()) {
            var g = d.value
              , h = g.fa
              , l = ku(this, g.name, g.Cb);
            if (!l.Oa) {
                var n = l.reason;
                a.set(Ya + h + ".reason", n);
                n === zb && a.set(Ya + h + ".type", l.type);
                e = !0
            }
        }
    } finally {
        rc(f, d)
    }
    e && a.set(Za, Pb);
    return a
}
;
function eu() {
    if (gu())
        return !1;
    var a = E.screen
      , b = !(a instanceof Screen);
    if (Bh || Ah)
        return b;
    try {
        var c = Zb();
        a.addEventListener("change", c);
        a.removeEventListener("change", c)
    } catch (d) {
        b = !0
    }
    return b
}
function fu() {
    function a(b) {
        try {
            var c = new Wt(1,500);
            return (b ? au(document, "CANVAS") : new OffscreenCanvas(c.width,c.height)).getContext("2d") != null
        } catch (d) {
            return !1
        }
    }
    return a(!1) && (gu() || a(!0))
}
function gu() {
    return Ra in E && typeof E.WorkerGlobalScope === k && self instanceof E.WorkerGlobalScope
}
function iu(a) {
    if (gu() || !E)
        return 1;
    try {
        if (a in E || E.document && a in E.document)
            return 0
    } catch (b) {
        return 2
    }
    return 1
}
function ku(a, b, c) {
    try {
        var d = c()
    } catch (f) {
        return {
            Oa: !1,
            reason: "not_reachable"
        }
    }
    c = lu(d);
    if (c !== k)
        return {
            Oa: !1,
            reason: zb,
            type: c
        };
    try {
        var e = a.j(d)
    } catch (f) {
        return {
            Oa: !1,
            reason: "to_string_failed"
        }
    }
    a = mu.exec(e);
    return a ? (a = a[1]) ? a !== b ? {
        Oa: !1,
        reason: "likely_wrong_native_function"
    } : {
        Oa: !0
    } : {
        Oa: !1,
        reason: "likely_bound_function"
    } : {
        Oa: !1,
        reason: "likely_non_native_source"
    }
}
function lu(a) {
    switch (typeof a) {
    case k:
        return k;
    case "undefined":
        return "undefined";
    case fb:
        return fb;
    case m:
        return m;
    case v:
        return v;
    case q:
        return a === null ? Ab : q;
    case Nb:
        return Nb;
    case eb:
        return eb;
    default:
        return Sb
    }
}
var hu = [{
    key: "Cypress",
    fa: "cypress"
}, {
    key: "$cdc_asdjflasutopfhvcZLmcfl_",
    fa: "selenium"
}, {
    key: "$wdc_",
    fa: "chrome_driver"
}, {
    key: "domAutomationController",
    fa: "chromium_automation"
}, {
    key: "callPhantom",
    fa: "phantomjs"
}, {
    key: "windmill",
    fa: "windmill"
}, {
    key: "____LocationIntercept",
    fa: cb
}, {
    key: cb,
    fa: cb
}, {
    key: "ubot",
    fa: "ubot"
}, {
    key: "cefsharp_CreatePromise",
    fa: "cefsharp"
}, {
    key: "__nightmare",
    fa: "nightmare"
}]
  , ju = [{
    fa: "Object.getOwnPropertyDescriptor",
    name: "getOwnPropertyDescriptor",
    Cb: function() {
        return Object.getOwnPropertyDescriptor
    }
}, {
    fa: "global.addEventListener",
    name: "addEventListener",
    Cb: function() {
        return E.addEventListener
    }
}, {
    fa: "global.fetch",
    name: "fetch",
    Cb: function() {
        return E.fetch
    }
}, {
    fa: "global.Math.random",
    name: "random",
    Cb: function() {
        return E.Math.random
    }
}]
  , mu = /^function\s*(?:\s([a-zA-Z_$][\w$]+))?\(\) \{\s+\[native code\]\s+\}$/;
var nu = []
  , ou = []
  , pu = [RegExp("_0x[a-f0-9]{4,6} is not defined$"), RegExp("[Zz]otero"), RegExp('^Not found$|^Unknown Error of type "string": Not found$')]
  , qu = "egfdjlfmgnehecnclamagfafdccgfndp mndnfokpggljbaajbnioimlmbfngpief mlkejohendkgipaomdopolhpbihbhfnf kgonammgkackdilhodbgbmodpepjocdp klbcgckkldhdhonijdbnhhaiedfkllef pmehocpgjmkenlokgjfkaichfjdhpeol cjlaeehoipngghikfjogbdkpbdgebppb ghbmnnjooekpmoecnnnilnnbdlolhkhi lmjegmlicamnimmfhcmpkclmigmmcbeh gmbmikajjgmnabiglmofipeabaddhgne lpcaedmchfhocbbapmcbpinfpgnhiddi gbkeegbaiigmenfmjfclcdgdpimamgkj adokjfanaflbkibffcbhihgihpgijcei iklnnbgdcppplombffihcijanngoeifm".split(" ")
  , ru = [RegExp("chrome-extension://([^/]+)", "g"), RegExp("moz-extension://([^/]+)", "g"), RegExp("ms-browser-extension://([^/]+)", "g"), RegExp("webkit-masked-url://([^/]+)", "g"), RegExp("safari-web-extension://([^/]+)", "g"), RegExp("webpack://(jam-extension)/", "g")]
  , su = [RegExp("^Permission denied$"), RegExp("index out of range: \\d+ \\+ \\d+ > \\d+"), RegExp("getReadMode(Config|Render|Extract)"), RegExp("Request timeout (?:[a-zA-Z0-9_-]*Distributor|DefineExpirationForLanguagePacks)\\.getValue"), RegExp("Request timeout is(?:Dictate|MathOcr|Prediction)Available"), RegExp("Request timeout get(?:DictionariesByLanguageId|WordMisspellings|WordCompletions|SelectedText)"), RegExp("Request timeout (?:sendAnalyticsEvent|addToPlaylist|playLetters|stopPlay)")]
  , tu = [RegExp("at file:///|@file:///|phantomjs|node:electron|py-scrap|eval code|Program Files"), RegExp("_0x[a-f0-9]+.*anonymous")]
  , uu = [RegExp("Script https://meet\\.google\\.com/.*meetsw.*load failed"), RegExp("A bad HTTP response code \\(\\d+\\) was received when fetching the script")]
  , vu = [RegExp("Error loading.*Consecutive load failures"), RegExp("Failed to load module.*Consecutive load failures")];
function wu(a, b) {
    this.ac = a;
    this.yb = b
}
function xu(a, b) {
    return (b = a.j(b)) ? {
        ac: a.ac,
        yb: a.yb,
        rc: b.toUpperCase()
    } : null
}
;function yu() {
    wu.call(this, 1, 1)
}
A(yu, wu);
yu.prototype.j = function(a) {
    a: {
        a = zu(a);
        var b = !1
          , c = C(ru)
          , d = c.next();
        try {
            for (; !d.done; d = c.next()) {
                var e = a.matchAll(d.value)
                  , f = C(e)
                  , g = f.next();
                try {
                    for (; !g.done; g = f.next()) {
                        var h = g.value[1];
                        if (h) {
                            if (qu.includes(h)) {
                                var l = !1;
                                break a
                            }
                            b = !0
                        }
                    }
                } finally {
                    rc(f, g)
                }
            }
        } finally {
            rc(c, d)
        }
        l = b
    }
    return l ? Vb : null
}
;
function Au(a, b, c) {
    c = c === void 0 ? Bu : c;
    wu.call(this, a, b);
    this.l = c
}
A(Au, wu);
Au.prototype.j = function(a) {
    var b = typeof a.l.get(Va) === v ? a.l.get(Va) : ""
      , c = a.l.get(Za) === Pb
      , d = zu(a)
      , e = d.includes("blob:")
      , f = C(this.l)
      , g = f.next();
    try {
        for (; !g.done; g = f.next()) {
            var h = g.value
              , l = h.errorMessage
              , n = h.Mb
              , p = n === void 0 ? [] : n
              , r = h.Aa
              , u = r === void 0 ? [] : r
              , w = h.Kb
              , O = w === void 0 ? !1 : w
              , B = h.ec
              , U = h.jd
              , ha = U === void 0 ? !1 : U;
            if ((B === void 0 ? 0 : B) ? a.message === l : d.includes(l)) {
                var ua = p.some(function(Ji) {
                    return b.includes(Ji)
                })
                  , ac = u.some(function(Ji) {
                    return a.j.includes(Ji)
                });
                p = O && e;
                ha = ha && c;
                if (ua || ac || p || ha)
                    return Vb
            }
        }
    } finally {
        rc(f, g)
    }
    return null
}
;
var Bu = [{
    errorMessage: "Cannot read properties of undefined (reading 'addListener')",
    Kb: !0,
    Mb: ["infird.com"]
}, {
    errorMessage: "browser_polyfill_default(...).runtime.getManifest is not a function",
    Kb: !0,
    Mb: ["infird.com"]
}, {
    errorMessage: 'fileName":',
    Mb: ["walkme.com"]
}, {
    errorMessage: "] is not a function",
    Kb: !0
}, {
    errorMessage: "(reading 'toLowerCase')",
    Kb: !0,
    Aa: ["__aiNetCmd__"]
}, {
    errorMessage: "Cannot read properties of undefined",
    Aa: ["recaptcha"]
}, {
    errorMessage: "a is not defined",
    ec: !0,
    Aa: [ea]
}, {
    errorMessage: "i is not defined",
    ec: !0,
    Aa: [ea]
}, {
    errorMessage: "Failed to fetch",
    Aa: ["__DLD__", "frontend.min.js"]
}, {
    errorMessage: "Maximum call stack size exceeded",
    jd: !0
}, {
    errorMessage: "Unexpected end of JSON input",
    Aa: ["facebook.net"]
}, {
    errorMessage: "Unexpected token ':'",
    Mb: ["bpdocajohhnfgbohbmfjeienbcihjlcg"]
}, {
    errorMessage: "Cannot read properties of null (reading 'offsetTop')",
    ec: !0,
    Aa: [ea]
}, {
    errorMessage: "Math.random is not a function",
    jd: !0
}];
function Cu(a, b, c, d, e) {
    e = e === void 0 ? new Map : e;
    this.message = a;
    this.j = b;
    this.cause = c;
    this.severity = d;
    this.l = e
}
function Du(a) {
    return (a = a.cause) ? a.message + "\n" + a.j + "\n" + Du(a) : ""
}
function zu(a) {
    return a.message + "\n" + a.j + "\n" + Du(a)
}
function Eu() {
    this.severity = this.j = this.message = "";
    this.l = new Map
}
function Fu(a, b) {
    a.message = b;
    return a
}
function Gu(a) {
    return new Cu(a.message,a.j,a.cause,a.severity,a.l)
}
;function Hu(a) {
    return a instanceof Error || a && a.message !== void 0 ? a.message : Iu(a)
}
function Ju(a) {
    return a instanceof Error || a && a.stack !== void 0 ? a.stack || "" : ""
}
function Ku(a, b) {
    var c = a && a.cause !== void 0;
    if (b >= 3 || !c)
        return null;
    c = new Eu;
    a = a.cause;
    if (Lu(a)) {
        if (Fu(c, Hu(a)),
        c.j = Ju(a),
        b = Ku(a, b + 1))
            c.cause = b
    } else
        Fu(c, Iu(a));
    return Gu(c)
}
function Lu(a) {
    return a instanceof Error || !!a && a.message !== void 0 && a.stack !== void 0
}
function Iu(a) {
    try {
        return Lu(a) ? a.message + "\n" + a.stack : a && a instanceof Object ? JSON.stringify(a) : String(a)
    } catch (b) {
        return String(a)
    }
}
function Mu(a, b, c) {
    c = c === void 0 ? new Map : c;
    var d = Fu(new Eu, Hu(a));
    d.j = Ju(a);
    d.l = c;
    if (a = Ku(a, 0))
        d.cause = a;
    b && (d.severity = b);
    return Gu(d)
}
;function Nu(a, b, c, d) {
    wu.call(this, c, d);
    this.l = a;
    this.o = b
}
A(Nu, wu);
Nu.prototype.j = function(a) {
    var b = Du(a);
    return Ou(a.message, this.l) || Ou(a.j, this.o) || Ou(b, this.l) || Ou(b, this.o) ? Vb : null
}
;
function Ou(a, b) {
    b = C(b);
    var c = b.next();
    try {
        for (; !c.done; c = b.next())
            if (c.value.test(a))
                return !0
    } finally {
        rc(b, c)
    }
    return !1
}
;function Pu(a, b, c, d, e) {
    wu.call(this, c, d);
    this.l = a;
    this.Aa = b;
    this.matchType = e
}
A(Pu, wu);
Pu.prototype.j = function(a) {
    switch (this.matchType) {
    case 0:
        a: {
            var b = a.message;
            a = C(this.l);
            var c = a.next();
            try {
                for (; !c.done; c = a.next())
                    if (b === c.value) {
                        var d = !0;
                        break a
                    }
            } finally {
                rc(a, c)
            }
            d = !1
        }
        return d ? Vb : null;
    case 1:
        a: {
            d = a.message;
            a = C(this.l);
            c = a.next();
            try {
                for (; !c.done; c = a.next())
                    if (d.startsWith(c.value)) {
                        b = !0;
                        break a
                    }
            } finally {
                rc(a, c)
            }
            b = !1
        }
        return b ? Vb : null;
    case 2:
        return d = zu(a),
        Qu(d, this.l) || Qu(d, this.Aa) ? Vb : null;
    default:
        return null
    }
}
;
function Qu(a, b) {
    b = C(b);
    var c = b.next();
    try {
        for (; !c.done; c = b.next())
            if (a.includes(c.value))
                return !0
    } finally {
        rc(b, c)
    }
    return !1
}
function Ru(a, b, c) {
    return new Pu(a,b,c,0,2)
}
;function Su(a, b, c) {
    wu.call(this, a, b);
    this.l = c()
}
A(Su, wu);
Su.prototype.j = function() {
    return this.l ? null : "unsupported_severe"
}
;
var Tu = [new yu, Ru(["Trusted Type", "TrustedHTML", "TrustedScript", "cannot communicate with background", "zaloJSV2", wb, "@user-script", "Object Not Found Matching Id", "contextChanged", "Not implemented on this platform", "Extension context invalidated", yb, "realTimeClData", "Failed to execute 'querySelectorAll' on 'Document'", "Promise.all(...).then(...).catch(...).finally is not a function", "Error executing Chrome API, chrome.tabs", "Identifier 'originalPrompt' has already been declared", "User rejected the request", "Could not inject ethereum provider because it's not your default extension", "Cannot redefine property: googletag", "Can't find variable: HTMLDialogElement", "Identifier 'listenerName' has already been declared", "Cannot read properties of undefined (reading 'info')", 'Permission denied to access property "type"', "Error: Promise timed out", "Request timeout ToolbarStatus", ka, "imtgo", "ton is not a function", "__renderMessageNode is not defined", "Cannot redefine property: ethereum", "unknown action:", "Receiving end does not exist", "get-frame-manager-configuration", "Key not found", "'isAWS'", "Identifier 'contentScriptListenerRegistered' has already been declared", "window.ethereum.selectedAddress", "extDomain is not defined", "No Listener: tabs:outgoing.message.ready", "This script should only be loaded in a browser extension", "Identifier 'initCoreHelpers' has already been declared", "undefined is not an object (evaluating 't.tab.customFillData')", "No tab with id:", "The browser is shutting down.", "User mapping loading timeout", "Internal JSON-RPC error", "TOKEN_EXPIRED", "A listener indicated an asynchronous response by returning true", "You must authenticate your request with an API key", "Could not inject tron provider", "DAB is not enabled."], ["puppeteer", wb, "@user-script", "jsQuilting", "linkbolic", yb, "tlscdn", "https://cdnjs.cloudflare.com/ajax/libs/mathjax/", "secured-pixel.com", ka, "imtgo", "_simulateEvent", "goguardian", "SnapTube.value"], 1), new Nu(pu,ou,1,0), Ru("status is 0, navigator.onLine =;Network sync is disabled. Aborting a network request of int type;The service is currently unavailable.;Internal error encountered.;data does not exist in AF cache;There was an error during the transport or processing of this request;Failed to load gapi;Rpc failed due to xhr error. error code: 6, error:  [0];An interceptor has requested that the request be retried;8,\"generic\";A network error occurred;NetworkError: Connection failure due to HTTP 401;NetworkError: Failed to execute 'importScripts' on 'WorkerGlobalScope';Load failed".split(";"), nu, 2), new Nu([],ou,2,0), new Nu(su,tu,3,0), Ru(["Kg is not defined", Qb, "The play method is not allowed by the user agent or the platform in the current context, possibly because the user denied permission.", "Illegal invocation", "Script error", "zCommon", "can't access dead object", "Java exception was raised during method invocation", "pauseVideo is not a function", "ResizeObserver loop", "wallet must has at least one account", "xbrowser is not defined", "jQuery is not defined", "Cannot read properties of null (reading 'requestAnimationFrame')", "Class extends value undefined is not a constructor or null", "GM3TooltipService: No tooltip with id", "Mole was disposed", "getInitialTopicListResponse is missing for stream rendering", "getPeopleById call preempted", "The operation is insecure", "class heritage", "The play() request was interrupted", "args.site.enabledFeatures is undefined", "frappe is not defined", "Cannot set properties of undefined (setting 'hidden')", "Identifier 'checkOngoingMeeting' has already been declared", "AutofillCallbackHandler", "invalid wire type", "zp_token", "isReCreate", "HTMLOUT is not defined", "Shopify root is null", "CanvasMaskingStrategy_Redact", "_chromeNamespace", "feature named `performanceMetrics`", "feature named `webCompat`", "Cannot redefine property: webdriver", "reCAPTCHA Timeout", "feature named `pageObserver` was not found", "feature named `hover` was not found", "TimeoutError: operation timed out", "Sink type mismatch violation blocked by CSP", "__firefox__", ": Java object is gone", "Cannot read properties of undefined (reading 'domInteractive')", ": t is not defined", "sendMessage(). Tab not found.", "Can't find variable: __gCrWeb", "WKWebView API client did not respond to this postMessage", "The provider is disconnected from all chains", "The user aborted a request.", "Task was cancelled.", "lettersVoicesDistributor", "proxy version mismatch: server is rel"], ["postUserData", "inline.cdn.mcas.ms", "evaluating 'n.standardSelectors'"], 3), new Nu(uu,ou,5,0), Ru("Service worker registration is disabled by MDA;An unknown error occurred when fetching the script;Operation has been aborted;Timed out while trying to start the Service Worker;The Service Worker system has shutdown;The user denied permission to use Service Worker;The script resource is behind a redirect, which is disallowed;The document is in an invalid state;ServiceWorker script evaluation failed;ServiceWorker cannot be started;Failed to access storage;Worker disallowed;encountered an error during installation".split(";"), nu, 5), new Nu(vu,vu,4,0), Ru(["Timeout reached for loading script https://www.gstatic.com/_/apps-fileview/_/js/", "Error while loading script https://www.gstatic.com/_/apps-fileview/_/js/"], nu, 4)]
  , Uu = new Set([Ga, "SEVERE_AFTER_INITIAL", "UNKNOWN", "FATAL", ""]);
function Vu(a) {
    this.l = a;
    this.j = !1
}
function Wu(a, b, c, d) {
    var e = [Error(Qb).message];
    c = c === void 0 ? !1 : c;
    d = d === void 0 ? x(!0) : d;
    var f = [];
    b.length > 0 && f.push(Xu(b));
    f.push.apply(f, oc(Tu));
    a = C(a);
    b = a.next();
    try {
        for (; !b.done; b = a.next())
            f.push(b.value)
    } finally {
        rc(a, b)
    }
    e.length > 0 && f.push(new Pu(e,[],3,5,0));
    f.push(new Au(3,0));
    c && f.push(new Su(8,0,d));
    return new Vu(f)
}
function Yu(a, b) {
    var c = "missing"
      , d = new Map
      , e = !0;
    try {
        c = b.severity;
        a.j && d.set("apps_telemetry.after_downgraded_severe", Pb);
        var f = C(a.l)
          , g = f.next();
        try {
            for (; !g.done; g = f.next()) {
                var h = g.value;
                try {
                    var l = xu(h, b);
                    if (l) {
                        var n = c
                          , p = Zu(a, c) ? l.rc : c;
                        $u(l, n, p).forEach(function(u, w) {
                            d.set(w, u)
                        });
                        c = p;
                        break
                    }
                } catch (u) {
                    e = !1;
                    var r = Mu(u, c);
                    d.set(Wa, zu(r) + "\n\nclassifier: " + h.constructor.name)
                }
            }
        } finally {
            rc(f, g)
        }
    } catch (u) {
        e = !1,
        a = Mu(u, c),
        d.set(Wa, zu(a))
    }
    d.set(ab, String(e));
    return {
        rc: c,
        dc: d
    }
}
function $u(a, b, c) {
    var d = new Map;
    d.set("apps_telemetry.classification", a.ac.toString());
    d.set("apps_telemetry.classification_code", a.yb ? a.yb.toString() : "");
    d.set(Xa, b);
    d.set($a, c);
    return d
}
function Zu(a, b) {
    return Uu.has(b.toUpperCase()) ? a.j = !0 : !1
}
function Xu(a) {
    var b = [];
    a = C(a);
    var c = a.next();
    try {
        for (; !c.done; c = a.next())
            b.push(new RegExp(c.value))
    } finally {
        rc(a, c)
    }
    return new Nu(b,b,7,0)
}
;function av() {}
av.prototype.Va = function() {
    if (Ra in E && typeof E.WorkerGlobalScope === k && self instanceof E.WorkerGlobalScope)
        return new Map;
    try {
        var a = Array.from(document.querySelectorAll("script")).filter(this.l).slice(0, 30).map(this.j).join("\n")
    } catch (b) {
        a = "Error getting cross-origin scripts"
    }
    return (new Map).set(Va, a)
}
;
av.prototype.l = function(a) {
    var b = new RegExp(/^(?:https?:\/\/)?(?:[a-zA-Z0-9-]+\.)*google\.com(?:$|[\/#?])/);
    return (a = a.getAttribute("src")) ? !(a.startsWith("/") || b.test(a)) : !1
}
;
av.prototype.j = function(a) {
    return a.innerHTML ? a.outerHTML.slice(0, a.outerHTML.indexOf(a.innerHTML)) : a.outerHTML
}
;
function bv() {}
bv.prototype.Va = function() {
    try {
        var a = performance.getEntriesByType("resource").slice(-5).map(function(b) {
            return Xp(b.name)
        }).join("\n")
    } catch (b) {
        a = "Error getting last 5 resources"
    }
    return (new Map).set("apps_telemetry.resources", a)
}
;
/*

Math.uuid.js (v1.4)
http://www.broofa.com
mailto:robert@broofa.com
Copyright (c) 2010 Robert Kieffer
Dual licensed under the MIT and GPL licenses.
*/
var cv = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
function dv() {
    var a = [], b;
    a[8] = a[13] = a[18] = a[23] = "-";
    a[14] = "4";
    for (b = 0; b < 36; b++)
        if (!a[b]) {
            var c = 0 | Math.random() * 16;
            a[b] = cv[b == 19 ? c & 3 | 8 : c]
        }
    return a.join("")
}
;function ev(a, b) {
    var c = b === void 0 ? {} : b;
    b = c.cc;
    b = b === void 0 ? [] : b;
    var d = c.We;
    d = d === void 0 ? [] : d;
    var e = c.Sc;
    e = e === void 0 ? [] : e;
    var f = c.ff;
    var g = c.sessionId;
    g = g === void 0 ? dv() : g;
    c = c.Ze;
    this.o = Wu(b, d, f === void 0 ? !1 : f, c === void 0 ? x(!0) : c);
    this.j = [new du, new av, new bv];
    this.j.push.apply(this.j, oc(e));
    this.sessionId = g;
    var h;
    this.v = (h = E.performance) == null ? void 0 : h.timeOrigin;
    this.l = a;
    this.l.Nb(g)
}
function fv(a, b, c, d) {
    d["apps_telemetry.session_id"] = a.sessionId;
    d["apps_telemetry.session_start_time_ms"] = String(a.v);
    ab in d && (d["apps_telemetry.multi_processed"] = Pb);
    var e = a.Va();
    (a = gv(a, b, c, e)) && hv(e, a.dc);
    e.forEach(function(g, h) {
        d[h] = g
    });
    var f;
    return (f = a == null ? void 0 : a.rc) != null ? f : c
}
function gv(a, b, c, d) {
    var e = null
      , f = null;
    try {
        e = Mu(b, c, d),
        f = Yu(a.o, e)
    } catch (g) {
        return iv(d, g, ab),
        null
    }
    a.l.kd(e, f);
    return f
}
ev.prototype.Va = function() {
    var a = new Map;
    try {
        var b = C(this.j)
          , c = b.next();
        try {
            for (; !c.done; c = b.next())
                c.value.Va().forEach(function(d, e) {
                    a.set(e, d)
                })
        } finally {
            rc(b, c)
        }
    } catch (d) {
        iv(a, d, "apps_telemetry.annotated")
    }
    return a
}
;
function hv(a, b) {
    b.forEach(function(c, d) {
        a.set(d, c)
    })
}
function iv(a, b, c) {
    a.set(c, "false");
    a.set(Wa, Iu(b))
}
;var jv = new Set([1, 6, 7, 2, 0]);
function kv() {
    var a = Mt(Qt(Bl()))
      , b = ll(a, 1)
      , c = ll(a, 5);
    return [b, c].every(function(d) {
        return jv.has(d)
    })
}
;function lv(a) {
    try {
        return qm(om(), a)
    } catch (b) {
        return !1
    }
}
;function mv(a, b) {
    var c = a = a === void 0 ? {} : a;
    a = c.Sc;
    a = a === void 0 ? [] : a;
    var d = c.cc;
    d = d === void 0 ? [] : d;
    var e = c.Ad;
    e = e === void 0 ? [] : e;
    var f = c.Xe;
    f = f === void 0 ? [] : f;
    var g = c.zi;
    g = g === void 0 ? [] : g;
    var h = c.Ai;
    h = h === void 0 ? [] : h;
    c = c.sessionId;
    c = c === void 0 ? void 0 : c;
    try {
        var l = qm(om(), um)
          , n = void 0;
        K(S(l));
        var p = Q ? l[L(R)] : l.O;
        var r = M(p, t)[P] | 0;
        Bi(p, r);
        var u = r;
        var w = Vi(l, u) ? 1 : 4;
        n = !!n || w === 3;
        if (w === 2 && Dk(l)) {
            K(S(l));
            p = Q ? l[L(R)] : l.O;
            var O = M(p, t)[P] | 0;
            Bi(p, O);
            u = O
        }
        var B = Rk(p, 1)
          , U = B === wi ? 7 : M(B, t)[P] | 0
          , ha = Sk(U, u);
        dj(B);
        if (l = 4 & ha ? !1 : !0) {
            4 & ha && (B = pj(B),
            U = 0,
            ha = Qk(ha, u),
            u = L(Lk(p, u, 1, B)));
            for (O = r = 0; r < B.length; r++) {
                var ua = Fj(B[r]);
                ua != null && (B[O++] = ua)
            }
            O < r && (B.length = O);
            ua = ha |= 4;
            ua &= -513;
            ha = ua & -1025;
            ha &= -4097
        }
        ha !== U && (yi(B, ha),
        2 & ha && Object.freeze(B));
        B = Ok(B, ha, p, u, 1, w, l, n);
        dj(B);
        n || Nk(B, p);
        var ac = B
    } catch (Ji) {
        ac = []
    }
    p = lv(wm);
    u = [];
    w = u.concat;
    B = [];
    e.length > 0 && B.push(Ru(e, [], 6));
    f.length > 0 && B.push(new Nu(f,[],6,0));
    g.length > 0 && B.push(new Pu(g,[],6,5,0));
    h.length > 0 && B.push(new Pu(h,[],6,5,1));
    return new ev(b,{
        cc: w.call(u, oc(B), oc(d)),
        We: ac,
        Sc: [new Vt].concat(oc(a)),
        ff: p,
        sessionId: c,
        Ze: kv
    })
}
;function nv() {}
nv.prototype.kd = Zb();
nv.prototype.Nb = Zb();
function ov(a) {
    a = a === void 0 ? {} : a;
    return mv(a, new nv)
}
;function pv(a) {
    return a ? a.split("\n").filter(function(b) {
        return b.trim() && !b.includes(Lb)
    }).length : 0
}
function qv() {
    wu.call(this, 3, 0)
}
A(qv, wu);
qv.prototype.j = function(a) {
    a: {
        for (; a; ) {
            var b = a.message.includes(Lb)
              , c = pv(a.j);
            c = c === 1 || c === 2;
            if (!b || !c) {
                a = !1;
                break a
            }
            a = a.cause
        }
        a = !0
    }
    return a ? Vb : null
}
;
var Z = new Set;
J(!0, "Event name <wZVHld> may not contain ':' or ';'");
if (Z.has("wZVHld"))
    throw Error("Event <wZVHld> has already been declared.");
Z.add("wZVHld");
J(!0, "Event name <nDa8ic> may not contain ':' or ';'");
if (Z.has("nDa8ic"))
    throw Error("Event <nDa8ic> has already been declared.");
Z.add("nDa8ic");
J(!0, "Event name <o07HZc> may not contain ':' or ';'");
if (Z.has("o07HZc"))
    throw Error("Event <o07HZc> has already been declared.");
Z.add("o07HZc");
J(!0, "Event name <UjQMac> may not contain ':' or ';'");
if (Z.has("UjQMac"))
    throw Error("Event <UjQMac> has already been declared.");
Z.add("UjQMac");
J(!0, "Event name <ti6hGc> may not contain ':' or ';'");
if (Z.has("ti6hGc"))
    throw Error("Event <ti6hGc> has already been declared.");
Z.add("ti6hGc");
J(!0, "Event name <ZYIfFd> may not contain ':' or ';'");
if (Z.has("ZYIfFd"))
    throw Error("Event <ZYIfFd> has already been declared.");
Z.add("ZYIfFd");
J(!0, "Event name <TGB85e> may not contain ':' or ';'");
if (Z.has("TGB85e"))
    throw Error("Event <TGB85e> has already been declared.");
Z.add("TGB85e");
J(!0, "Event name <RXQi4b> may not contain ':' or ';'");
if (Z.has("RXQi4b"))
    throw Error("Event <RXQi4b> has already been declared.");
Z.add("RXQi4b");
J(!0, "Event name <sn54Q> may not contain ':' or ';'");
if (Z.has("sn54Q"))
    throw Error("Event <sn54Q> has already been declared.");
Z.add("sn54Q");
J(!0, "Event name <eQsQB> may not contain ':' or ';'");
if (Z.has("eQsQB"))
    throw Error("Event <eQsQB> has already been declared.");
Z.add("eQsQB");
J(!0, "Event name <CGLD0d> may not contain ':' or ';'");
if (Z.has("CGLD0d"))
    throw Error("Event <CGLD0d> has already been declared.");
Z.add("CGLD0d");
J(!0, "Event name <ZpywWb> may not contain ':' or ';'");
if (Z.has("ZpywWb"))
    throw Error("Event <ZpywWb> has already been declared.");
Z.add("ZpywWb");
J(!0, "Event name <O1htCb> may not contain ':' or ';'");
if (Z.has("O1htCb"))
    throw Error("Event <O1htCb> has already been declared.");
Z.add("O1htCb");
J(!0, "Event name <k9KYye> may not contain ':' or ';'");
if (Z.has("k9KYye"))
    throw Error("Event <k9KYye> has already been declared.");
Z.add("k9KYye");
J(!0, "Event name <g6cJHd> may not contain ':' or ';'");
if (Z.has("g6cJHd"))
    throw Error("Event <g6cJHd> has already been declared.");
Z.add("g6cJHd");
J(!0, "Event name <otb29e> may not contain ':' or ';'");
if (Z.has("otb29e"))
    throw Error("Event <otb29e> has already been declared.");
Z.add("otb29e");
J(!0, "Event name <FNFY6c> may not contain ':' or ';'");
if (Z.has("FNFY6c"))
    throw Error("Event <FNFY6c> has already been declared.");
Z.add("FNFY6c");
J(!0, "Event name <TvD9Pc> may not contain ':' or ';'");
if (Z.has("TvD9Pc"))
    throw Error("Event <TvD9Pc> has already been declared.");
Z.add("TvD9Pc");
J(!0, "Event name <AHmuwe> may not contain ':' or ';'");
if (Z.has("AHmuwe"))
    throw Error("Event <AHmuwe> has already been declared.");
Z.add("AHmuwe");
J(!0, "Event name <O22p3e> may not contain ':' or ';'");
if (Z.has("O22p3e"))
    throw Error("Event <O22p3e> has already been declared.");
Z.add("O22p3e");
J(!0, "Event name <JIbuQc> may not contain ':' or ';'");
if (Z.has("JIbuQc"))
    throw Error("Event <JIbuQc> has already been declared.");
Z.add("JIbuQc");
J(!0, "Event name <ih4XEb> may not contain ':' or ';'");
if (Z.has("ih4XEb"))
    throw Error("Event <ih4XEb> has already been declared.");
Z.add("ih4XEb");
J(!0, "Event name <sPvj8e> may not contain ':' or ';'");
if (Z.has("sPvj8e"))
    throw Error("Event <sPvj8e> has already been declared.");
Z.add("sPvj8e");
J(!0, "Event name <GvneHb> may not contain ':' or ';'");
if (Z.has("GvneHb"))
    throw Error("Event <GvneHb> has already been declared.");
Z.add("GvneHb");
J(!0, "Event name <rcuQ6b> may not contain ':' or ';'");
if (Z.has("rcuQ6b"))
    throw Error("Event <rcuQ6b> has already been declared.");
Z.add("rcuQ6b");
J(!0, "Event name <dyRcpb> may not contain ':' or ';'");
if (Z.has("dyRcpb"))
    throw Error("Event <dyRcpb> has already been declared.");
Z.add("dyRcpb");
J(!0, "Event name <u0pjoe> may not contain ':' or ';'");
if (Z.has("u0pjoe"))
    throw Error("Event <u0pjoe> has already been declared.");
Z.add("u0pjoe");
try {
    var rv, sv, tv = (sv = (rv = window) == null ? void 0 : rv.top) != null ? sv : E;
    tv.U3bHHf != null || (tv.U3bHHf = 0);
    tv.U3bHHf++
} catch (a) {
    E.U3bHHf != null || (E.U3bHHf = 0),
    E.U3bHHf++
}
;var uv = Symbol("mCJjCd");
function vv(a, b) {
    b.hasOwnProperty("displayName") || (b.displayName = a.toString());
    b[uv] = a
}
;var wv;
if (E == null ? 0 : (wv = E.Symbol) == null ? 0 : wv.for) {
    var xv = Symbol.for("google.goem");
    E[xv] || (E[xv] = new WeakMap)
}
;"#".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08");
function yv(a, b) {
    var c = a.__wiz;
    c || (c = a.__wiz = {});
    return c[b.toString()]
}
;/*

 Copyright 2024 Google, Inc
 SPDX-License-Identifier: MIT
*/
var zv = Object.create(null);
var Av = {};
function Bv(a) {
    var b = document.body;
    J(b === b.ownerDocument.body);
    J(b, "The element must not be null.");
    var c = Og(b.getAttribute(vb) || "");
    var d = ["u0pjoe"];
    var e = C(d)
      , f = e.next();
    try {
        for (; !f.done; f = e.next()) {
            var g = f.value;
            var h = c;
            if (h) {
                var l = zv[h];
                if (l)
                    var n = !!l[g.toString()];
                else {
                    var p = Av[g.toString()];
                    p || (p = new RegExp("(^\\s*" + g + "\\s*:|[\\s;]" + g + "\\s*:)"),
                    Av[g.toString()] = p);
                    n = p.test(h)
                }
            } else
                n = !1;
            n || (c && !/;$/.test(c) && (c += ";"),
            c += g + ":.CLIENT",
            Cv(b, c));
            var r = yv(b, g);
            r ? r.push(a) : b.__wiz[g.toString()] = [a]
        }
    } finally {
        rc(e, f)
    }
    return {
        et: d,
        ie: a,
        el: b
    }
}
function Cv(a, b) {
    a.setAttribute(vb, b);
    "__jsaction" in a && delete a.__jsaction
}
;function Dv(a) {
    W.call(this);
    this.l = a
}
Xc(Dv, W);
Dv.prototype.j = function(a) {
    return Ev(this, Gg(a))
}
;
function Fv(a, b) {
    Gg(b);
    return b[Gv(a, !1)] || b
}
function Gv(a, b) {
    return (b ? "__wrapper_" : "__protected_") + Pc(a) + "__"
}
function Ev(a, b) {
    var c = Gv(a, !0);
    b[c] || ((b[c] = Hv(a, b))[Gv(a, !1)] = b);
    return b[c]
}
function Hv(a, b) {
    function c() {
        if (a.ea())
            return b.apply(this, arguments);
        try {
            return b.apply(this, arguments)
        } catch (d) {
            Iv(a, d)
        }
    }
    c[Gv(a, !1)] = b;
    return c
}
function Iv(a, b) {
    if (!(b && typeof b === q && typeof b.message === v && b.message.indexOf(ta) == 0 || typeof b === v && b.indexOf(ta) == 0))
        throw a.l(b),
        new Jv(b);
}
function Kv(a) {
    var b = b || E.window || E.globalThis;
    "onunhandledrejection" in b && (b.onunhandledrejection = function(c) {
        Iv(a, c && c.reason ? c.reason : Error(Qb))
    }
    )
}
function Lv(a, b) {
    var c = E.window || E.globalThis
      , d = c[b];
    if (!d)
        throw Error(b + " not on global?");
    c[b] = function(e, f) {
        typeof e === v && (e = Uc(Vc, e));
        e && (arguments[0] = e = Ev(a, e));
        if (d.apply)
            return d.apply(this, arguments);
        var g = e;
        if (arguments.length > 2) {
            var h = Array.prototype.slice.call(arguments, 2);
            g = function() {
                e.apply(this, h)
            }
        }
        return d(g, f)
    }
    ;
    c[b][Gv(a, !1)] = d
}
Dv.prototype.K = function() {
    var a = E.window || E.globalThis;
    a.setTimeout = Fv(this, a.setTimeout);
    a.setInterval = Fv(this, a.setInterval);
    Dv.pa.K.call(this)
}
;
function Jv(a) {
    Ag.call(this, ta + (a && a.message ? String(a.message) : String(a)), a);
    (a = a && a.stack) && typeof a === v && (this.stack = a)
}
Xc(Jv, Ag);
function Mv(a) {
    switch (a) {
    case 200:
    case 201:
    case 202:
    case 204:
    case 206:
    case 304:
    case 1223:
        return !0;
    default:
        return !1
    }
}
;function Nv() {}
;var Ov;
function Pv() {}
Xc(Pv, Nv);
Pv.prototype.l = function() {
    return new XMLHttpRequest
}
;
Ov = new Pv;
function Qv(a) {
    X.call(this);
    this.headers = new Map;
    this.Y = a || null;
    this.o = !1;
    this.j = null;
    this.U = this.I = "";
    this.A = 0;
    this.H = "";
    this.D = this.P = this.J = this.L = !1;
    this.G = 0;
    this.N = null;
    this.B = "";
    this.C = !1
}
Xc(Qv, X);
Qv.prototype.l = up("goog.net.XhrIo");
var Rv = /^https?$/i
  , Sv = [Ba, Ca]
  , Tv = [];
y = Qv.prototype;
y.je = function() {
    this.dispose();
    qh(Tv, this)
}
;
function wt(a, b, c, d, e) {
    if (a.j)
        throw Error("[goog.net.XhrIo] Object is active with another request=" + a.I + "; newUri=" + b);
    if (typeof c === v)
        var f = c;
    else if (c) {
        var g = c;
        f = g.method;
        d != null || (d = g.body);
        e != null || (e = g.headers)
    }
    f = f ? f.toUpperCase() : "GET";
    a.I = b;
    a.H = "";
    a.A = 0;
    a.U = f;
    a.L = !1;
    a.o = !0;
    a.j = a.bc(g);
    a.j.onreadystatechange = zm(F(a.pd, a));
    try {
        zp(a.l, Uv(a, "Opening Xhr")),
        a.P = !0,
        a.j.open(f, String(b), !0),
        a.P = !1
    } catch (u) {
        zp(a.l, Uv(a, "Error opening Xhr: " + u.message));
        Vv(a, u);
        return
    }
    b = d || "";
    c = new Map(a.headers);
    if (e)
        if (Object.getPrototypeOf(e) === Object.prototype)
            for (var h in e)
                c.set(h, e[h]);
        else if (typeof e.keys === k && typeof e.get === k) {
            h = C(e.keys());
            d = h.next();
            try {
                for (; !d.done; d = h.next()) {
                    var l = d.value;
                    c.set(l, e.get(l))
                }
            } finally {
                rc(h, d)
            }
        } else
            throw Error("Unknown input type for opt_headers: " + String(e));
    e = Array.from(c.keys()).find(function(u) {
        return "content-type" == u.toLowerCase()
    });
    l = E.FormData && b instanceof E.FormData;
    !ph(Sv, f) || e || l || c.set(oa, "application/x-www-form-urlencoded;charset=utf-8");
    f = C(c);
    e = f.next();
    try {
        for (; !e.done; e = f.next()) {
            var n = C(e.value)
              , p = n.next().value
              , r = n.next().value;
            a.j.setRequestHeader(p, r)
        }
    } finally {
        rc(f, e)
    }
    a.B && (a.j.responseType = a.B);
    Xb in a.j && a.j.withCredentials !== a.C && (a.j.withCredentials = a.C);
    try {
        Wv(a),
        a.G > 0 && (zp(a.l, Uv(a, "Will abort after " + a.G + "ms if incomplete")),
        a.N = setTimeout(a.Kd.bind(a), a.G)),
        zp(a.l, Uv(a, "Sending request")),
        a.J = !0,
        a.j.send(b),
        a.J = !1
    } catch (u) {
        zp(a.l, Uv(a, "Send error: " + u.message)),
        Vv(a, u)
    }
}
y.bc = function(a) {
    return this.Y ? this.Y.l(a) : Ov.l()
}
;
y.Kd = function() {
    typeof Ic != "undefined" && this.j && (this.H = "Timed out after " + this.G + "ms, aborting",
    this.A = 8,
    zp(this.l, Uv(this, this.H)),
    Y(this, "timeout"),
    this.abort(8))
}
;
function Vv(a, b) {
    a.o = !1;
    a.j && (a.D = !0,
    a.j.abort(),
    a.D = !1);
    a.H = b;
    a.A = 5;
    Xv(a);
    Yv(a)
}
function Xv(a) {
    a.L || (a.L = !0,
    Y(a, hb),
    Y(a, kb))
}
y.abort = function(a) {
    this.j && this.o && (zp(this.l, Uv(this, "Aborting")),
    this.o = !1,
    this.D = !0,
    this.j.abort(),
    this.D = !1,
    this.A = a || 7,
    Y(this, hb),
    Y(this, "abort"),
    Yv(this))
}
;
y.K = function() {
    this.j && (this.o && (this.o = !1,
    this.D = !0,
    this.j.abort(),
    this.D = !1),
    Yv(this, !0));
    Qv.pa.K.call(this)
}
;
y.pd = function() {
    this.ea() || (this.P || this.J || this.D ? Zv(this) : this.mc())
}
;
y.mc = function() {
    Zv(this)
}
;
function Zv(a) {
    if (a.o && typeof Ic != "undefined")
        if (a.J && $v(a) == 4)
            setTimeout(a.pd.bind(a), 0);
        else if (Y(a, "readystatechange"),
        $v(a) == 4) {
            zp(a.l, Uv(a, "Request complete"));
            a.o = !1;
            try {
                if (xt(a))
                    Y(a, hb),
                    Y(a, "success");
                else {
                    a.A = 6;
                    try {
                        var b = $v(a) > 2 ? a.j.statusText : ""
                    } catch (c) {
                        zp(a.l, "Can not get status: " + c.message),
                        b = ""
                    }
                    a.H = b + " [" + a.ma() + "]";
                    Xv(a)
                }
            } finally {
                Yv(a)
            }
        }
}
function Yv(a, b) {
    if (a.j) {
        Wv(a);
        var c = a.j;
        a.j = null;
        b || Y(a, Fb);
        try {
            c.onreadystatechange = null
        } catch (d) {
            xp(a.l, "Problem encountered resetting onreadystatechange: " + d.message)
        }
    }
}
function Wv(a) {
    a.N && (clearTimeout(a.N),
    a.N = null)
}
y.isActive = function() {
    return !!this.j
}
;
function xt(a) {
    var b = a.ma(), c;
    if (!(c = Mv(b))) {
        if (b = b === 0)
            a = Kp(String(a.I))[1] || null,
            !a && E.self && E.self.location && (a = E.self.location.protocol.slice(0, -1)),
            b = !Rv.test(a ? a.toLowerCase() : "");
        c = b
    }
    return c
}
function $v(a) {
    return a.j ? a.j.readyState : 0
}
y.ma = function() {
    try {
        return $v(this) > 2 ? this.j.status : -1
    } catch (a) {
        return -1
    }
}
;
y.ba = function() {
    try {
        return this.j ? this.j.responseText : ""
    } catch (a) {
        return zp(this.l, "Can not get responseText: " + a.message),
        ""
    }
}
;
function aw(a) {
    try {
        if (!a.j)
            return null;
        if ("response" in a.j)
            return a.j.response;
        switch (a.B) {
        case "":
        case Ob:
            return a.j.responseText;
        case bb:
            if ("mozResponseArrayBuffer" in a.j)
                return a.j.mozResponseArrayBuffer
        }
        xp(a.l, "Response type " + a.B + " is not supported on this browser");
        return null
    } catch (b) {
        return zp(a.l, "Can not get response: " + b.message),
        null
    }
}
y.getAllResponseHeaders = function() {
    return this.j && $v(this) >= 2 ? this.j.getAllResponseHeaders() || "" : ""
}
;
function bw(a) {
    var b = {};
    a = a.getAllResponseHeaders().split("\r\n");
    for (var c = 0; c < a.length; c++)
        if (!Ng(a[c])) {
            var d = Hp(a[c])
              , e = d[0];
            d = d[1];
            if (typeof d === v) {
                d = d.trim();
                var f = b[e] || [];
                b[e] = f;
                f.push(d)
            }
        }
    return Or(b, function(g) {
        return g.join(", ")
    })
}
function Uv(a, b) {
    return b + " [" + a.U + " " + a.I + " " + a.ma() + "]"
}
Fm(function(a) {
    Qv.prototype.mc = a(Qv.prototype.mc)
});
function cw(a, b, c) {
    X.call(this);
    this.A = b || null;
    this.o = {};
    this.B = dw;
    this.D = a;
    if (!c) {
        this.j = null;
        this.j = new Dv(F(this.l, this));
        Lv(this.j, "setTimeout");
        Lv(this.j, "setInterval");
        a = this.j;
        b = E.window || E.globalThis;
        c = ["requestAnimationFrame", "mozRequestAnimationFrame", "webkitAnimationFrame", "msRequestAnimationFrame"];
        for (var d = 0; d < c.length; d++) {
            var e = c[d];
            c[d] in b && Lv(a, e)
        }
        a = this.j;
        Em = !0;
        b = F(a.j, a);
        for (c = 0; c < Cm.length; c++)
            Cm[c](b);
        Dm.push(a)
    }
}
Xc(cw, X);
function ew(a, b) {
    ts.call(this, "c");
    this.error = a;
    this.Ha = b
}
Xc(ew, ts);
var fw = up("goog.debug.ErrorReporter");
function gw(a, b) {
    return new cw(a,b,void 0)
}
function dw(a, b, c, d) {
    if (d instanceof Map) {
        var e = {};
        d = C(d);
        var f = d.next();
        try {
            for (; !f.done; f = d.next()) {
                var g = C(f.value)
                  , h = g.next().value
                  , l = g.next().value;
                e[h] = l
            }
        } finally {
            rc(d, f)
        }
    } else
        e = d;
    g = new Qv;
    Tv.push(g);
    g.v.add(Fb, g.je, !0, void 0, void 0);
    wt(g, a, b, c, e)
}
function hw(a, b) {
    a.B = b
}
cw.prototype.l = function(a, b) {
    a = a.error || a;
    b = b ? Qr(b) : {};
    a instanceof Error && Sr(b, bi(a));
    var c = Ro(a);
    if (this.A)
        try {
            this.A(c, b, a)
        } catch (r) {
            xp(fw, "Context provider threw an exception: " + r.message)
        }
    var d = c.message.substring(0, 1900);
    if (!(a instanceof Ag) || a.j) {
        a = c.fileName;
        var e = c.lineNumber
          , f = c.stack;
        try {
            var g = Rp(this.D, "script", a, kb, d, "line", e);
            a: {
                for (var h in this.o) {
                    var l = !1;
                    break a
                }
                l = !0
            }
            l || (g = Sp(g, this.o));
            l = {};
            l.trace = f;
            if (b)
                for (var n in b)
                    l["context." + n] = b[n];
            var p = Qp(l);
            this.B(g, Ba, p, this.C)
        } catch (r) {
            V(fw, "Error occurred in sending an error report.\n\nscript:" + a + "\nline:" + e + "\nerror:" + d + "\ntrace:" + f)
        }
    }
    try {
        Y(this, new ew(c,b))
    } catch (r) {}
}
;
cw.prototype.K = function() {
    Yp(this.j);
    cw.pa.K.call(this)
}
;
function iw(a) {
    a = a === void 0 ? new jw : a;
    X.call(this);
    var b = this;
    this.H = {};
    this.j = null;
    this.N = {};
    this.P = new jt(this);
    this.Bb = a.B;
    this.U = a.G;
    this.Ba = a.M;
    var c;
    this.Ja = (c = a.v) != null ? c : !1;
    this.ca = a.A;
    this.xa = a.H;
    c = K(a.j);
    this.ra = (a.o || ov)({
        Ad: Gt,
        Xe: Ht,
        cc: [new qv]
    });
    this.Ab = a.X;
    this.A = new ss;
    var d = new Qv;
    kw(this, c);
    this.I = new yt(d,c,void 0,void 0,void 0);
    $p(this, this.I);
    this.l = yq(c, "docs-sup") + yq(c, "docs-jepp") + "/jserror";
    if (d = yq(c, "jobset"))
        this.l = Rp(this.l, "jobset", d);
    if (d = yq(c, "docs-ci"))
        this.l = Rp(this.l, "id", d);
    d = yq(c, "docs-pid");
    wq(c, "docs-eaotx") && d && (this.l = Rp(this.l, "ouid", d));
    this.C = xq(c, "docs-srmoe") || 0;
    K(this.C >= 0 && this.C <= 1);
    this.gb = wq(c, "docs-oesf");
    this.D = xq(c, "docs-srmour") || 0;
    K(this.D >= 0 && this.D <= 1);
    this.zb = wq(c, "docs-oursf");
    d = this.D > 0 && Math.random() < this.D;
    this.fb = wq(c, "docs-wesf");
    this.Ja && lw(this);
    nn = function(g) {
        return mw(b, g, "promise rejection")
    }
    ;
    var e = xq(c, "docs-srmdue") || 0;
    K(e >= 0 && e <= 1);
    if (e > 0 && Math.random() < e) {
        var f = wq(c, "docs-duesf");
        vn = function(g) {
            mw(b, g, "deferred error", f, "isDeferredUnhandledErrback")
        }
    } else
        vn = Zb();
    e = xq(c, "docs-srmxue") || 0;
    K(e >= 0 && e <= 1);
    e = e > 0 && Math.random() < e;
    wq(c, "docs-xduesf");
    e && xo();
    d && (d = new Dv(function(g) {
        g = nw(g, "native promise rejection");
        var h = {};
        h = (h.isUnhandledRejection = Pb,
        h);
        b.zb ? ow(b, g, h) : b.info(g, h)
    }
    ),
    Kv(d),
    $p(this, d));
    this.L = null;
    typeof document !== "undefined" && document.body && (this.L = Bv(function(g) {
        var h = {};
        h = (h.isWizError = Pb,
        h);
        g = C(g.data.errors);
        var l = g.next();
        try {
            for (; !l.done; l = g.next()) {
                var n = l.value.error;
                b.fb ? ow(b, n, h) : b.info(n, h)
            }
        } finally {
            rc(g, l)
        }
    }));
    this.ga = up("docs.debug.ErrorReporter");
    (this.G = a.l) && K(this.ca);
    this.B = !1;
    this.J = !0;
    this.o = !1;
    this.Z = yq(c, "docs-jern");
    this.na = a.D;
    this.la = a.C.concat(Object.values(nq))
}
A(iw, X);
function lw(a) {
    var b = b === void 0 ? !1 : b;
    if (pw) {
        if (qw != null)
            throw Error('ErrorReporter already installed. at "' + qw.stack + '"');
        throw Error("ErrorReporter already installed.");
    }
    pw = !0;
    qw = Error();
    a.j = gw(a.l, function(e, f, g) {
        return rw(a, e, f, g)
    });
    var c = {};
    a.Ba && (c["X-No-Abort"] = "1");
    a.j.C = c;
    hw(a.j, function(e, f, g, h) {
        a.J && st(a.I, e, f, g, h)
    });
    if (a.C > 0 && Math.random() < a.C) {
        c = {};
        var d = (c.isWindowOnError = Pb,
        c);
        a.gb ? Qo(function(e) {
            ow(a, e.error instanceof Error ? e.error : Error(e.message), d)
        }) : Qo(function(e) {
            a.log(e.error instanceof Error ? e.error : Error(e.message), d)
        })
    }
    lt(a.P, a.j, "c", function(e) {
        var f = b;
        f = f === void 0 ? !1 : f;
        e.Ha.severity = e.Ha[Kb] || e.Ha.severity;
        var g = e.Ha.severity;
        (g = g == lb || g == Db) && !a.ca && (a.Bb && !f ? a.A.notify(e, e.Ha) : a.A.notify(void 0, e.Ha));
        Y(a, new Us(g ? "a" : "b",e.error,e.Ha))
    })
}
function kw(a, b) {
    b = new Et(b);
    var c = b.j, d;
    for (d in c) {
        var e = c[d];
        e && (a.N["expflag-" + d] = e.toString())
    }
    a.N.experimentIds = b.l.join(",")
}
function sw(a, b) {
    a.A = b
}
function tw(a, b, c) {
    a.H[b] = c
}
function ow(a, b, c) {
    a.o = !1;
    uw(b, lb);
    vw(a, b);
    if (!a.j) {
        if (b instanceof Hn)
            throw b.j;
        throw Xo(b);
    }
    a.j.l(b, ww(a, b, c));
    if (a.xa) {
        c = ww(a, b, c);
        c.is_forceFatal = 1;
        var d = b instanceof Hn ? b.j : b;
        rw(a, d, c);
        b = Xo(d);
        a = ", context:" + JSON.stringify(ww(a, d, c));
        b.message += a;
        throw b;
    }
}
function xw(a, b, c, d) {
    a.o = d || !1;
    uw(b, Vb);
    vw(a, b, c);
    a.j && a.j.l(b, ww(a, b, c))
}
iw.prototype.info = function(a, b, c) {
    this.o = c || !1;
    uw(a, sb);
    vw(this, a, b);
    this.j && this.j.l(a, ww(this, a, b))
}
;
iw.prototype.log = function(a, b, c) {
    this.o = !!c;
    uw(a, sb);
    vw(this, a, b);
    this.j && this.j.l(a, ww(this, a, b))
}
;
function nw(a, b) {
    if (a && typeof a === q && a.type === kb) {
        var c = a.error;
        a = JSON.stringify({
            error: c && c.message ? c.message : xa,
            stack: c && c.stack ? c.stack : xa,
            message: a.message,
            filename: a.filename,
            lineno: a.lineno,
            colno: a.colno,
            type: a.type
        });
        b = Error(Oa + b + " with ErrorEvent: " + a)
    } else
        b = typeof a === v ? Error(Oa + b + " with: " + a) : typeof a === m ? Error(Oa + b + " with number: " + a) : a == null ? Error(Oa + b + ' with "null/undefined"') : a;
    return b
}
function mw(a, b, c, d, e) {
    d = d === void 0 ? !0 : d;
    b = nw(b, c);
    c = {};
    e && (c[e] = Pb);
    d ? ow(a, b, c) : a.info(b, c)
}
function ww(a, b, c) {
    b instanceof Hn && (b = b.j);
    c = c ? Qr(c) : {};
    c.severity = bi(b).severity;
    (b = b && b.reportSeverity) && (c.reportSeverity = b);
    a.U && (c.errorGroupId = a.U);
    return c
}
function yw(a, b) {
    if (a && typeof a === q && !a.message && a.constructor && a.constructor instanceof Function && (a.constructor.name ? a.constructor.name : To(a.constructor)) === Aa) {
        b.unknownErrorToStringResult = Object.prototype.toString.call(a);
        for (var c = JSON, d = c.stringify, e = {}, f = Object.keys(a), g = 0, h = 0; h < f.length && g < 10; h++) {
            var l = f[h];
            try {
                typeof a[l] !== k && (e[l] = String(a[l]).substring(0, 100),
                g++)
            } catch (n) {}
        }
        b.unknownErrorContent = d.call(c, e)
    }
}
function rw(a, b, c, d) {
    var e = a.B;
    try {
        a.Y(b, c, d)
    } catch (g) {
        throw e && !a.G && (a.J = !1),
        a.B = !0,
        c.provideLogDataError = g.message,
        c.severity || (c.severity = lb),
        Xo(g);
    } finally {
        if (c[Kb] = c.severity || lb,
        c.severity = "" + c[Kb],
        !a.na)
            for (var f in c)
                typeof c[f] === m || c[f] instanceof Number || typeof c[f] === fb || c[f] instanceof Boolean || a.la.includes(f) || f in c && delete c[f]
    }
}
iw.prototype.Y = function(a, b, c) {
    yw(c || a, b);
    for (var d in this.H)
        try {
            b[d] = this.H[d](a)
        } catch (f) {}
    b.errorReportTimeMs || (b.errorReportTimeMs = Date.now().toString());
    Object.assign(b, this.N);
    lp();
    c = b.severity || lb;
    (d = b.reportSeverity || a && a.reportSeverity) && (d = zw(d.toLowerCase())) && (c = d);
    this.Ab || (c = fv(this.ra, a, c, b));
    this.Z && (b.reportName = this.Z + "_" + c);
    b.isArrayPrototypeIntact = Ft().toString();
    if (!(Ra in E && self instanceof E.WorkerGlobalScope)) {
        try {
            var e = !!document.getElementById("docs-editor")
        } catch (f) {
            e = !1
        }
        b.isEditorElementAttached = e.toString()
    }
    b.documentCharacterSet = document.characterSet;
    b.origin = String(E.origin);
    e = a.stack || "";
    if (e.trim().length == 0 || e == ya)
        b["stacklessError-reportingStack"] = Wo(iw.prototype.Y),
        [a.message].concat(oc(Object.keys(b)), oc(Object.values(b))).some(function(f) {
            return f && f.includes("<eye3")
        }) || (b.eye3Hint = "<eye3-stackless title='Stackless JS Error - " + a.name + "'/>");
    this.B && !this.G ? (this.J = this.o,
    c == lb ? c = Db : c == sb && (c = Wb)) : c == lb && (this.B = !0);
    this.o = !1;
    b.severity = c
}
;
function vw(a, b, c) {
    b = Ro(b instanceof Hn ? b.j : b);
    yp(a.ga, b.message + " at " + b.fileName + ":" + b.lineNumber + "\n" + b.stack + (typeof c === "undefined" ? "" : "\ncontext: " + JSON.stringify(c)))
}
iw.prototype.K = function() {
    pw = !1;
    if (this.L) {
        var a = this.L
          , b = C(a.et)
          , c = b.next();
        try {
            for (; !c.done; c = b.next()) {
                var d = c.value
                  , e = yv(a.el, d);
                if (e && (qh(e, a.ie),
                !e.length)) {
                    var f = a.el
                      , g = Og(f.getAttribute(vb) || "")
                      , h = d + ":.CLIENT";
                    g = g.replace(h + ";", "");
                    g = g.replace(h, "");
                    Cv(f, g)
                }
            }
        } finally {
            rc(b, c)
        }
    }
    Zp(this.P, this.j, this.I);
    X.prototype.K.call(this)
}
;
var pw = !1
  , qw = null;
function jw() {
    this.G = this.j = void 0;
    this.H = this.B = !1;
    this.v = void 0;
    this.M = this.l = this.A = !1;
    this.D = !0;
    this.C = [];
    this.X = !1;
    this.o = void 0
}
function uw(a, b) {
    a instanceof Hn && (a = a.j);
    ai(a, Jb, b)
}
function zw(a) {
    if (!a)
        return null;
    switch (a) {
    case "severe":
    case lb:
        return lb;
    case Vb:
        return Vb;
    case "info":
    case Sb:
    case sb:
        return sb;
    case Db:
        return Db;
    case Wb:
        return Wb;
    default:
        return null
    }
}
;var Aw = ["There are too many scripts running simultaneously for this Google user account.", "Too many simultaneous invocations:", "Authorization is required to perform that action", "Authorisation is required to perform that action", "You do not have permission to access the requested document"];
function Bw() {
    var a = this;
    this.promise = new Promise(function(b, c) {
        a.resolve = b;
        a.reject = c
    }
    )
}
;function Cw() {
    this.o = window.crashReport;
    this.v = new Bw;
    this.j = 0;
    this.l = new Map
}
Cw.prototype.initialize = function(a) {
    a = a === void 0 ? 10240 : a;
    var b = this, c, d, e, f, g, h, l, n, p, r, u;
    return Dc(new Cc(new yc(function(w) {
        switch (w.j) {
        case 1:
            if (b.j !== 0)
                return w.return(b.v.promise);
            b.j = 1;
            w.J(2, 3);
            return w.M(b.o.initialize(a), 5);
        case 5:
            b.v.resolve();
            b.j = 2;
            c = C(b.l);
            d = c.next();
            try {
                for (; !d.done; d = c.next())
                    e = d.value,
                    f = C(e),
                    g = f.next().value,
                    h = f.next().value,
                    l = g,
                    n = h,
                    p = void 0,
                    b.set(l, (p = n) != null ? p : "")
            } finally {
                rc(c, d)
            }
        case 3:
            w.X();
            b.l.clear();
            w.I(4);
            break;
        case 2:
            r = w.H();
            b.j = 3;
            u = Error("Failed to initialize crash storage", {
                cause: r
            });
            u.reportSeverity = Vb;
            b.v.reject(u);
            w.Xa(3);
            break;
        case 4:
            return w.return(b.v.promise)
        }
    }
    )))
}
;
Cw.prototype.cd = function() {
    return this.j !== 0
}
;
Cw.prototype.set = function(a, b) {
    if (this.j !== 3)
        if (this.j !== 2)
            this.l.size < 100 || this.l.has(a) ? this.l.set(a, b) : this.l.set("cache_full", Pb);
        else
            try {
                this.o.set(a, b)
            } catch (c) {}
}
;
Cw.prototype.delete = function(a) {
    if (this.j !== 3)
        if (this.j !== 2)
            this.l.delete(a);
        else
            try {
                typeof this.o.delete === k ? this.o.delete(a) : this.o.remove(a)
            } catch (b) {}
}
;
function Dw() {
    this.j = !1
}
Dw.prototype.initialize = function() {
    this.j = !0;
    return Promise.resolve()
}
;
Dw.prototype.cd = bc("j");
Dw.prototype.set = Zb();
Dw.prototype.delete = Zb();
var Ew = new Dw;
var Fw = [Ga, "FATAL"];
function Gw() {
    this.l = this.o = 1;
    this.j = new El
}
Gw.prototype.kd = function(a, b) {
    var c = b == null ? void 0 : b.dc.get($a);
    a = c != null ? c : a.severity;
    if (a = this.o === 1 && !!a && Fw.includes(a.toUpperCase()))
        this.o = 2;
    b = b == null ? void 0 : b.dc.get(Xa);
    if (c = this.l === 1 && !!b && !!c && b.toUpperCase() !== c.toUpperCase())
        this.l = 2;
    if (a || c) {
        c = $k(this.j, Pt, 3);
        b = new Ot;
        b = Kk(b, 1, yj(this.o));
        b = Kk(b, 2, yj(this.l));
        if (b != null) {
            a = b;
            var d = L(Ot);
            if (!(a instanceof d))
                throw Error("Expected instanceof " + vj(d) + " but got " + (a && vj(a.constructor)));
        } else
            b = void 0;
        Kk(c, 5, b);
        b && !Vi(b) && (K(S(c)),
        c = Q ? c[L(R)] : c.O,
        Fk(c));
        Hw(this)
    }
}
;
Gw.prototype.Nb = function(a) {
    a: {
        var b = $k(this.j, Lt, 1);
        var c = Nt;
        Ek(b);
        if (void 0 === ej) {
            if (Wk(b, c, 4) !== 4) {
                b = void 0;
                break a
            }
        } else {
            K(S(b));
            var d = Q ? b[L(R)] : b.O;
            Vk(d, void 0, c, 4)
        }
        b = $k(b, Kt, 4)
    }
    b.Nb(a);
    Hw(this)
}
;
function Hw(a) {
    Ew.set("appsTelemetryCrashReportData", JSON.stringify(ik(a.j)))
}
;function Iw(a, b, c, d, e, f, g, h) {
    W.call(this);
    this.l = a;
    this.o = b;
    this.C = c;
    this.A = d;
    this.j = e;
    this.v = f;
    this.D = g;
    this.B = h
}
A(Iw, W);
function Jw() {}
Jw.prototype.j = Zb();
function Kw(a, b) {
    this.j = a[E.Symbol.iterator]();
    this.l = b
}
Kw.prototype[Symbol.iterator] = function() {
    return this
}
;
Kw.prototype.next = function() {
    var a = this.j.next();
    return {
        value: a.done ? void 0 : this.l.call(void 0, a.value),
        done: a.done
    }
}
;
function Lw(a, b) {
    return new Kw(a,b)
}
;function Mw() {}
Mw.prototype.next = function() {
    return Nw
}
;
var Nw = bp({
    done: !0,
    value: void 0
});
Mw.prototype.Ra = function() {
    return this
}
;
function Ow(a) {
    if (a instanceof Pw || a instanceof Qw || a instanceof Rw)
        return a;
    if (typeof a.next == k)
        return new Pw(function() {
            return a
        }
        );
    if (typeof a[Symbol.iterator] == k)
        return new Pw(function() {
            return a[Symbol.iterator]()
        }
        );
    if (typeof a.Ra == k)
        return new Pw(function() {
            return a.Ra()
        }
        );
    throw Error("Not an iterator or iterable.");
}
function Pw(a) {
    this.j = a
}
Pw.prototype.Ra = function() {
    return new Qw(this.j())
}
;
Pw.prototype[Symbol.iterator] = function() {
    return new Rw(this.j())
}
;
Pw.prototype.l = function() {
    return new Rw(this.j())
}
;
function Qw(a) {
    this.j = a
}
A(Qw, Mw);
Qw.prototype.next = function() {
    return this.j.next()
}
;
Qw.prototype[Symbol.iterator] = function() {
    return new Rw(this.j)
}
;
Qw.prototype.l = function() {
    return new Rw(this.j)
}
;
function Rw(a) {
    Pw.call(this, function() {
        return a
    });
    this.o = a
}
A(Rw, Pw);
Rw.prototype.next = function() {
    return this.o.next()
}
;
function Sw(a, b) {
    this.l = {};
    this.j = [];
    this.o = this.size = 0;
    var c = arguments.length;
    if (c > 1) {
        if (c % 2)
            throw Error("Uneven number of arguments");
        for (var d = 0; d < c; d += 2)
            this.set(arguments[d], arguments[d + 1])
    } else if (a)
        if (a instanceof Sw)
            for (c = a.sa(),
            d = 0; d < c.length; d++)
                this.set(c[d], a.get(c[d]));
        else
            for (d in a)
                this.set(d, a[d])
}
y = Sw.prototype;
y.oa = function() {
    Tw(this);
    for (var a = [], b = 0; b < this.j.length; b++)
        a.push(this.l[this.j[b]]);
    return a
}
;
y.sa = function() {
    Tw(this);
    return this.j.concat()
}
;
y.has = function(a) {
    return Uw(this.l, a)
}
;
y.equals = function(a, b) {
    if (this === a)
        return !0;
    if (this.size != a.size)
        return !1;
    b = b || Vw;
    Tw(this);
    for (var c, d = 0; c = this.j[d]; d++)
        if (!b(this.get(c), a.get(c)))
            return !1;
    return !0
}
;
function Vw(a, b) {
    return a === b
}
y.clear = function() {
    this.l = {};
    this.o = this.size = this.j.length = 0
}
;
y.remove = function(a) {
    return this.delete(a)
}
;
y.delete = function(a) {
    return Uw(this.l, a) ? (delete this.l[a],
    --this.size,
    this.o++,
    this.j.length > 2 * this.size && Tw(this),
    !0) : !1
}
;
function Tw(a) {
    if (a.size != a.j.length) {
        for (var b = 0, c = 0; b < a.j.length; ) {
            var d = a.j[b];
            Uw(a.l, d) && (a.j[c++] = d);
            b++
        }
        a.j.length = c
    }
    if (a.size != a.j.length) {
        b = {};
        for (d = c = 0; c < a.j.length; ) {
            var e = a.j[c];
            Uw(b, e) || (a.j[d++] = e,
            b[e] = 1);
            c++
        }
        a.j.length = d
    }
}
y.get = function(a, b) {
    return Uw(this.l, a) ? this.l[a] : b
}
;
y.set = function(a, b) {
    Uw(this.l, a) || (this.size += 1,
    this.j.push(a),
    this.o++);
    this.l[a] = b
}
;
y.forEach = function(a, b) {
    for (var c = this.sa(), d = 0; d < c.length; d++) {
        var e = c[d]
          , f = this.get(e);
        a.call(b, f, e, this)
    }
}
;
y.clone = function() {
    return new Sw(this)
}
;
y.keys = function() {
    return Ow(this.Ra(!0)).l()
}
;
y.values = function() {
    return Ow(this.Ra(!1)).l()
}
;
y.entries = function() {
    var a = this;
    return Lw(this.keys(), function(b) {
        return [b, a.get(b)]
    })
}
;
y.Ra = function(a) {
    Tw(this);
    var b = 0
      , c = this.o
      , d = this
      , e = new Mw;
    e.next = function() {
        if (c != d.o)
            throw Error("The map has changed since the iterator was created");
        if (b >= d.j.length)
            return Nw;
        var f = d.j[b++];
        return {
            value: a ? f : d.l[f],
            done: !1
        }
    }
    ;
    return e
}
;
function Uw(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b)
}
;function Ww(a) {
    for (var b = [], c = Xw, d = a.elements, e, f, g = 0; e = d.item(g); g++) {
        var h = e;
        if (h.form == a && !h.disabled && e.tagName != "FIELDSET")
            switch (f = h.name,
            h.type.toLowerCase()) {
            case "file":
            case "submit":
            case "reset":
            case "button":
                break;
            case Ib:
                e = Yw(e);
                if (e != null)
                    for (var l = 0; h = e[l]; l++)
                        c(b, f, h);
                break;
            default:
                e = Yw(e),
                e != null && c(b, f, e)
            }
    }
    d = a.getElementsByTagName("INPUT");
    for (g = 0; f = d[g]; g++)
        e = f,
        e.form == a && e.type.toLowerCase() == "image" && (f = e.name,
        c(b, f, e.value),
        c(b, f + ".x", "0"),
        c(b, f + ".y", "0"));
    return b.join("&")
}
function Xw(a, b, c) {
    a.push(encodeURIComponent(b) + "=" + encodeURIComponent(c))
}
function Yw(a) {
    var b = a.type;
    if (typeof b === v)
        switch (b.toLowerCase()) {
        case "checkbox":
        case "radio":
            return a.checked ? a.value : null;
        case "select-one":
            return b = a.selectedIndex,
            b >= 0 ? a.options[b].value : null;
        case Ib:
            b = [];
            for (var c, d = 0; c = a.options[d]; d++)
                c.selected && b.push(c.value);
            return b.length ? b : null
        }
    a = a.value;
    return a != null ? a : null
}
;function Zw(a, b, c) {
    c != null && c != "" && th(a, [b, c])
}
function $w(a) {
    dt(function() {
        throw a;
    })
}
function ax(a, b) {
    try {
        a.apply(E, Array.prototype.slice.call(arguments, 1))
    } catch (c) {
        $w(c)
    }
}
;function bx(a, b) {
    this.H = a.eei;
    this.A = a.actionPrefix;
    this.M = a.callbackTimeout;
    this.v = a.facadeOrigin;
    this.j = !!this.v;
    this.X = a.functionNames;
    this.C = a.clientSideProperties;
    this.D = a.userHtml;
    this.B = JSON.parse(a.ncc);
    this.o = b;
    this.l = ls(window.location);
    this.I = this.l.j.get("mid");
    this.G = this.l.j.get("csid")
}
function cx(a) {
    if (a.o != null)
        try {
            return a.o.getState()
        } catch (b) {}
}
;function dx() {}
function ex(a, b, c) {
    return fx(b, c).then(function(d) {
        gx.j ? hx.j(5, a, d) : history.pushState(a, "", d)
    }).then(Zb())
}
function ix(a, b, c) {
    return fx(b, c).then(function(d) {
        gx.j ? hx.j(6, a, d) : history.replaceState(a, "", d)
    })
}
function fx(a, b) {
    return (gx.j ? hx.j(4) : bn()).then(function(c) {
        c = new Wr(c);
        if (b || b === "")
            c.A = b;
        if (a || a === "") {
            c.j.clear();
            for (var d in a)
                (a[d] || a[d] === "") && js(c, d, a[d])
        }
        d = c.toString();
        return d.startsWith("#") ? "?" + d : d
    })
}
function jx() {
    return (gx.j ? hx.j(4) : bn()).then(function(a) {
        a = new Wr(a);
        for (var b = a.j, c = b.sa(), d = {}, e = {}, f = 0; f < c.length; f++)
            d[c[f]] = b.get(c[f]),
            e[c[f]] = a.j.oa(c[f]);
        return {
            parameter: d,
            parameters: e,
            hash: a.A
        }
    })
}
function kx(a) {
    dx = a
}
function lx(a) {
    jx().then(function(b) {
        dx({
            state: a,
            location: b
        })
    })
}
function mx() {
    gx.j || window.addEventListener("popstate", function(a) {
        return lx(a.state)
    })
}
;function nx(a, b, c, d) {
    this.path = a;
    this.j = b;
    this.arity = c;
    d && (this.type = d)
}
function ox() {
    this.j = {}
}
;function px(a) {
    T.call(this, a, 0, px.S)
}
A(px, T);
px.T = "maestro.warden.WardenInitializationStatusPayload";
px.S = "wisp";
function qx(a) {
    Ag.call(this);
    this.message = "AppContext is disposed, cannot get " + a.join(", ") + "."
}
A(qx, Ag);
function rx(a) {
    W.call(this);
    this.id = sx++;
    this.H = [];
    this.l = {};
    this.A = {};
    this.B = {};
    this.j = {};
    this.D = {};
    this.C = a ? a.C : new X;
    this.I = !a;
    this.o = null;
    a && (this.o = a,
    this.B = a.B,
    this.j = a.j,
    this.A = a.A);
    a = tx(this);
    this != a && (a.v ? a.v.push(this) : a.v = [this])
}
A(rx, W);
function tx(a) {
    for (; a.o; )
        a = a.o;
    return a
}
rx.prototype.get = function(a) {
    var b;
    a: {
        for (b = this; b; b = b.o) {
            if (b.ea())
                throw new qx([a]);
            if (b.l[a]) {
                b = b.l[a][0];
                break a
            }
            if (b.D[a])
                break
        }
        if (b = this.B[a]) {
            b = b(this);
            if (b == null)
                throw Error("Factory method for service " + a + " returned null or undefined.");
            ux(this, a, b)
        } else
            b = null
    }
    b == null && this.J && (b = {
        BOGUS: "Service " + a + " was not registered"
    });
    if (b == null)
        throw Error('Service for "' + a + '" is not registered');
    return b
}
;
function ux(a, b, c) {
    if (a.ea())
        Yp(c);
    else {
        K(!a.l[b], 'Service for "%s" is already registered', b);
        a.H.push(b);
        a.l[b] = [c, !0];
        for (var d = vx(a, a, b), e = 0; e < d.length; e++)
            d[e].va(null);
        delete a.A[b];
        b instanceof Bt && vv(b, c.constructor)
    }
}
function vx(a, b, c) {
    var d = []
      , e = a.j[c];
    e && (lh(e, function(f) {
        var g;
        a: {
            for (g = f.he; g; ) {
                if (g == b) {
                    g = !0;
                    break a
                }
                g = g.o
            }
            g = !1
        }
        g && (d.push(f.d),
        qh(e, f))
    }),
    e.length == 0 && delete a.j[c]);
    return d
}
function wx(a, b) {
    a.j && Nr(a.j, function(c, d, e) {
        lh(c, function(f) {
            f.he == b && qh(c, f)
        });
        c.length == 0 && delete e[d]
    })
}
rx.prototype.K = function() {
    if (tx(this) == this) {
        var a = this.v;
        if (a)
            for (; a.length; )
                a[0].dispose()
    } else {
        a = tx(this).v;
        for (var b = 0; b < a.length; b++)
            if (a[b] == this) {
                a.splice(b, 1);
                break
            }
    }
    for (var c in this.l)
        a = this.l[c],
        a[1] && a[0].dispose && a[0].dispose();
    this.l = null;
    this.I && this.C.dispose();
    wx(this, this);
    this.j = null;
    Yp(this.G);
    this.D = this.G = null;
    W.prototype.K.call(this)
}
;
var sx = 1;
var xx = new Bt("byfTOb","byfTOb");
var yx = up("fava.core.Timer");
function zx(a, b, c, d) {
    var e = typeof b === k;
    !e && aq(b) ? xp(yx, a, Error("Timer listener already disposed")) : e && aq(d) && xp(yx, a, Error("Timer handler already disposed"));
    if (!(e || b && typeof b.handleEvent == k))
        throw Error(wa);
    a = F(Ax, null, a, b, d);
    return E.setTimeout(a, c || 0)
}
function Ax(a, b, c) {
    zp(yx, "Callback for " + a);
    typeof b === k ? aq(c) ? yp(yx, va + a + " after handler disposed") : b.call(c) : b && typeof b.handleEvent == k && (aq(b) ? yp(yx, va + a + " after listener disposed") : b.handleEvent.call(b))
}
;function Bx(a, b) {
    this.o = a;
    this.v = b;
    if (!c) {
        var c = new Wr(ca);
        c.j.set("zx", Gp())
    }
    this.l = c
}
y = Bx.prototype;
y.Fa = up("goog.net.NetworkTester");
y.Ec = 1E4;
y.qb = !1;
y.wb = 0;
y.sb = null;
y.qc = null;
y.setTimeout = $b("Ec");
y.start = function() {
    if (this.qb)
        throw Error("NetworkTester.start called when already running");
    this.qb = !0;
    V(this.Fa, "Starting");
    this.wb = 0;
    Cx(this)
}
;
function Cx(a) {
    a.wb++;
    navigator !== null && "onLine" in navigator && !navigator.onLine ? (V(a.Fa, ia),
    dt(F(a.nb, a, !1), 0)) : (V(a.Fa, "Loading image (attempt " + a.wb + ") at " + a.l),
    a.j = new Image,
    a.j.onload = F(a.Je, a),
    a.j.onerror = F(a.Ie, a),
    a.j.onabort = F(a.He, a),
    a.sb = dt(a.Ke, a.Ec, a),
    a.j.src = String(a.l))
}
y.Je = function() {
    V(this.Fa, "Image loaded");
    this.nb(!0)
}
;
y.Ie = function() {
    V(this.Fa, "Image load error");
    this.nb(!1)
}
;
y.He = function() {
    V(this.Fa, "Image load aborted");
    this.nb(!1)
}
;
y.Ke = function() {
    V(this.Fa, "Image load timed out");
    this.nb(!1)
}
;
y.nb = function(a) {
    this.j && (this.j.onload = null,
    this.j.onerror = null,
    this.j = this.j.onabort = null);
    this.sb && (E.clearTimeout(this.sb),
    this.sb = null);
    this.qc && (E.clearTimeout(this.qc),
    this.qc = null);
    a ? (this.qb = !1,
    this.o.call(this.v, !0)) : this.wb <= 0 ? Cx(this) : (this.qb = !1,
    this.o.call(this.v, !1))
}
;
function Dx() {
    X.call(this);
    this.j = new Bx(this.Le,this);
    this.l = 51E3 + Math.round(18E3 * Math.random())
}
A(Dx, X);
y = Dx.prototype;
y.Le = function(a) {
    this.kc = Date.now();
    this.od(a)
}
;
y.od = function(a) {
    V(this.Pa, "Last network check returned " + a);
    this.ld = a;
    Y(this, "f")
}
;
y.Pa = up("fava.net.NetworkTester");
y.kc = 0;
y.ld = !0;
function Ex() {
    this.j = new Dx
}
vv(xx, Ex);
function Fx(a) {
    if (typeof a === k) {
        var b = new a instanceof xl;
        J(b);
        a = new a;
        a = !Vi(a);
        J(a)
    } else if (typeof a === q)
        b = a.ed(),
        J(b),
        J(a instanceof xl);
    else
        throw Error("need a ctor or default instance");
}
;Fx(rm);
Fx(sm);
function Gx(a, b, c, d, e, f) {
    this.o = a;
    this.l = b;
    (b === void 0 || b <= 0) && cq(null, Error("RequestErrorInfo created with invalid code " + b + ", request.path " + (a && a.o.l)));
    this.C = c == 1;
    this.v = d;
    this.B = e;
    this.j = f
}
function Hx(a) {
    if (a.C)
        a = !1;
    else {
        var b;
        if (b = !!a.o)
            a: switch (b = a.o,
            b.Ua) {
            case "RETRY":
                b = !0;
                break a;
            case "FAIL":
                b = !1;
                break a;
            case fa:
                b = a.v || a.o.eb;
                b = a.l >= 500 && b < 3 ? !0 : !1;
                break a;
            default:
                throw Error("Unknown failure strategy: " + b.Ua);
            }
        a = b
    }
    return a
}
Gx.prototype.toString = function() {
    return String(this.l)
}
;
Gx.prototype.A = function() {
    var a, b;
    return (b = this.sc) != null ? b : this.sc = (a = this.j) == null ? void 0 : bw(a)
}
;
function Ix() {
    W.call(this);
    this.v = !1;
    this.B = null
}
A(Ix, W);
Ix.prototype.D = x(0);
Ix.prototype.transfer = function(a) {
    Jx(this, a)
}
;
function Jx(a, b) {
    a.o.Xb(b);
    a.B = b
}
function Kx(a) {
    return Hg(a.B, "getActiveRequest called when the active request was null")
}
function Lx(a, b) {
    switch (a) {
    case 1:
    case 3:
        return 8;
    case 9:
        return 13;
    case 4:
        return NaN;
    case 7:
        return 100;
    case 6:
        return b || 7;
    case 8:
        return 101;
    case 5:
        return 9;
    default:
        return 102
    }
}
Ix.prototype.Qb = Zb();
function Mx(a, b) {
    if (a.A) {
        var c = a.G.call(null);
        if (c !== void 0) {
            var d = b.A;
            d ? (b = d.elements[a.A],
            b || (b = d.ownerDocument.createElement("input"),
            b.setAttribute("name", a.A),
            b.setAttribute("hidden", !0),
            d.appendChild(b)),
            b.value = c) : Nx(b, a.A, c)
        }
    }
}
;function Ox(a) {
    this.A = a.Gi || null;
    this.o = a.Ye || !1;
    this.v = a.Ei || !1;
    if (this.o && this.v)
        throw Error("streamBinaryChunks and streamTextChunks cannot both be true.");
    this.j = void 0
}
Xc(Ox, Nv);
Ox.prototype.l = function(a) {
    var b = new Px(this.A,this.o,this.v);
    this.j && (b.C = this.j);
    a && (b.o = a);
    return b
}
;
function Px(a, b, c) {
    X.call(this);
    this.U = a;
    this.G = b;
    this.J = c || !1;
    this.C = void 0;
    this.status = this.readyState = 0;
    this.responseType = this.responseText = this.response = this.statusText = "";
    this.onreadystatechange = null;
    this.I = new Headers;
    this.l = null;
    this.P = "GET";
    this.A = "";
    this.j = !1;
    this.D = up("goog.net.FetchXmlHttp");
    this.L = this.B = this.H = null;
    this.N = new AbortController;
    this.o = void 0
}
Xc(Px, X);
y = Px.prototype;
y.open = function(a, b, c) {
    K(!!c, "Only async requests are supported.");
    if (this.readyState != 0)
        throw this.abort(),
        Error("Error reopening a connection");
    this.P = a;
    this.A = b;
    this.readyState = 1;
    Qx(this)
}
;
y.send = function(a) {
    if (this.readyState != 1)
        throw this.abort(),
        Error("need to call open() first. ");
    var b, c = ((b = this.o) == null ? 0 : b.signal) ? AbortSignal.any([this.o.signal, this.N.signal]) : this.N.signal;
    if (c.aborted)
        throw this.abort(),
        Error(Ea);
    this.j = !0;
    var d, e, f, g;
    b = Object.assign({}, this.o, {
        headers: this.I,
        method: this.P,
        credentials: (f = (d = this.o) == null ? void 0 : d.credentials) != null ? f : this.C,
        cache: (g = (e = this.o) == null ? void 0 : e.cache) != null ? g : void 0,
        signal: c
    });
    a && (b.body = a);
    (this.U || E).fetch(new Request(this.A,b)).then(this.Be.bind(this), this.Gb.bind(this))
}
;
y.abort = function() {
    var a = this;
    this.response = this.G || this.J ? [] : "";
    this.responseText = "";
    this.I = new Headers;
    this.status = 0;
    this.N.abort(Ea);
    this.B && this.B.cancel(Ea).catch(function(b) {
        return yp(a.D, "Fetch reader cancellation error.", b)
    });
    this.readyState >= 1 && this.j && this.readyState != 4 && (this.j = !1,
    Rx(this));
    this.readyState = 0
}
;
y.Be = function(a) {
    if (this.j && (this.H = a,
    this.l || (this.status = this.H.status,
    this.statusText = this.H.statusText,
    this.l = a.headers,
    this.readyState = 2,
    Qx(this)),
    this.j && (this.readyState = 3,
    Qx(this),
    this.j)))
        if (this.responseType === bb)
            a.arrayBuffer().then(this.ze.bind(this), this.Gb.bind(this));
        else if (a.body && E.ReadableStream) {
            this.B = a.body.getReader();
            if (this.G || this.J) {
                if (this.responseType)
                    throw Error('responseType must be empty for "streamBinaryChunks" or "streamTextChunks" mode responses.');
                this.response = []
            } else
                this.response = this.responseText = "";
            this.G || (this.L = new TextDecoder);
            Sx(this)
        } else
            a.text().then(this.Ae.bind(this), this.Gb.bind(this))
}
;
function Sx(a) {
    a.B.read().then(a.te.bind(a)).catch(a.Gb.bind(a))
}
y.te = function(a) {
    if (this.j) {
        var b = a.value;
        if (this.G)
            a.value && this.response.push(b || new Uint8Array(0));
        else if (b = b ? this.L.decode(b, {
            stream: !a.done
        }) : "")
            this.J ? this.response.push(b) : this.response = this.responseText += b;
        a.done ? Rx(this) : Qx(this);
        this.readyState == 3 && Sx(this)
    }
}
;
y.Ae = function(a) {
    this.j && (this.response = this.responseText = a,
    Rx(this))
}
;
y.ze = function(a) {
    this.j && (this.response = a,
    Rx(this))
}
;
y.Gb = function(a) {
    yp(this.D, "Failed to fetch url " + this.A, a instanceof Error ? a : Error(a));
    this.j && Rx(this)
}
;
function Rx(a) {
    a.readyState = 4;
    a.H = null;
    a.B = null;
    a.L = null;
    Qx(a)
}
y.setRequestHeader = function(a, b) {
    this.I.append(a, b)
}
;
y.getResponseHeader = function(a) {
    return this.l ? this.l.get(a.toLowerCase()) || "" : (yp(this.D, "Attempting to get response header but no headers have been received for url: " + this.A),
    "")
}
;
y.getAllResponseHeaders = function() {
    if (!this.l)
        return yp(this.D, "Attempting to get all response headers but no headers have been received for url: " + this.A),
        "";
    for (var a = [], b = this.l.entries(), c = b.next(); !c.done; )
        c = c.value,
        a.push(c[0] + da + c[1]),
        c = b.next();
    return a.join("\r\n")
}
;
function Qx(a) {
    a.onreadystatechange && a.onreadystatechange.call(a)
}
Object.defineProperty(Px.prototype, Xb, {
    get: function() {
        return this.C === "include"
    },
    set: function(a) {
        this.C = a ? "include" : "same-origin"
    }
});
var Tx;
function Ux(a, b) {
    a = (new Response(a)).body.pipeThrough(new CompressionStream(b));
    return (new Response(a)).blob()
}
function Vx(a, b, c) {
    Ix.call(this);
    c || (Yg ? (Tx || (c = new Ox({
        Ye: !1
    }),
    c.j = "same-origin",
    Tx = c),
    c = new Qv(Tx)) : c = new Qv);
    this.j = c;
    this.H = a;
    this.C = null;
    this.j.headers.set("X-Same-Domain", "1");
    Is(this.j, hb, this.Fc, !1, this);
    Is(this.j, Fb, this.bd, !1, this);
    this.l = b;
    this.aborted = !1
}
A(Vx, Ix);
y = Vx.prototype;
y.Qb = function(a) {
    this.j.C = a
}
;
y.K = function() {
    Rs(this.j, hb, this.Fc, !1, this);
    Rs(this.j, Fb, this.bd, !1, this);
    this.j.dispose();
    Ix.prototype.K.call(this)
}
;
y.transfer = function(a) {
    var b = this;
    this.aborted = !1;
    Jx(this, a);
    js(a.o, "rt", this.H);
    var c = a.N
      , d = Object.assign({}, a.td, {
        method: a.v
    });
    if (Wx(a)) {
        V(this.l, "Transferring request via XHR with body data");
        Mx(this, a);
        var e = Xx(a)
          , f = a.Pc;
        e && f ? Ux(e, f).then(function(g) {
            b.ea() || b.aborted || b.B !== a || (c.set("Content-Encoding", f),
            wt(b.j, Yx(a), d, g, c))
        }) : wt(this.j, Yx(a), d, e, c)
    } else
        V(this.l, "Transferring request via XHR " + a.v),
        wt(this.j, Yx(a), d, null, c)
}
;
y.abort = function(a) {
    if (!this.aborted)
        if (this.aborted = !0,
        this.C = a,
        this.j.isActive())
            this.j.abort(7);
        else if (this.B) {
            Zx(this, a || 100);
            var b;
            (b = this.o) == null || b.Bd(this)
        }
}
;
y.Fc = function(a) {
    V(this.l, "XHR request done");
    a = a.target;
    Kx(this).da = a.ma();
    if (xt(a)) {
        if (a.ba().length > 0 || Array.isArray(aw(a)) || a.ma() == 204) {
            this.I(a);
            return
        }
        cq(null, Error('Empty 200 response for "' + String(a.I) + '". If this is unexpected, make sure that you are returning an EmptyResponse from your XHR action.'));
        this.C = 104
    }
    this.fc(a)
}
;
y.bd = function() {
    V(this.l, "XHR ready for next request");
    this.o.Bd(this)
}
;
function Xx(a) {
    var b = a.B;
    if (b) {
        var c = "";
        b.forEach(function(d, e) {
            c += encodeURIComponent(String(e)) + "=" + encodeURIComponent(String(d)) + "&"
        });
        return c
    }
    return a.A ? Ww(a.A) : ""
}
y.fc = function(a) {
    var b = this.C;
    this.C = 0;
    var c = a.ma();
    var d = a.A;
    yp(this.l, "Xhr connection error: http status = " + c);
    var e = a.ba();
    (e = $x.exec(e)) && yp(this.l, "Additional details:\n" + e[1]);
    if (b)
        var f = b;
    else
        d == 6 && (b = a.ba(),
        f = (f = b.match(ay)) ? 700 + parseInt(f[1], 10) : (f = b.match(by)) ? Number("6" + f[1]) : null);
    f || (f = Lx(d, c));
    c = f;
    a.ba();
    Zx(this, c, void 0, a)
}
;
function Wx(a) {
    var b = a.B != null || a.A != null;
    return !a.L || b
}
function Zx(a, b, c, d) {
    var e = Kx(a);
    e.da != null || (e.da = d == null ? void 0 : d.ma());
    b = new Gx(e,b,void 0,void 0,c,d);
    a.o.nc(e, b)
}
var ay = RegExp("var gmail_error\\s*=\\s*(\\d+)", "m")
  , by = RegExp("var rc\\s*=\\s*(\\d+)", "m")
  , $x = /(?:Additional details|Detailed Technical Info)[\s\S]*?<pre[^>]*>([\s\S]*?)<\/pre>/i;
function cy(a, b) {
    typeof b === v ? (K(b, "NamespacedType does not allow empty type string"),
    K(!/[:]/.test(b), 'NamespacedType does not allow ":" in type string: ' + b)) : K(b >= 0, "NamespacedType does not allow negative type number");
    K(a, "NamespacedType does not accept undefined or null namespace");
    this.l = b;
    a = this.constructor;
    a.Zb || (a.Zb = {});
    b = this.toString();
    K(!a.Zb[b], "Registering duplicate namespaced type " + b);
    a.Zb[b] = this
}
cy.prototype.toString = function() {
    this.j || (this.j = "lib:" + this.l);
    return this.j
}
;
function dy(a, b) {
    cy.call(this, a, b)
}
A(dy, cy);
var ey;
ey = {};
var fy = new function() {
    K(!ey.hasOwnProperty("lib"), "Attempt to create a second Namespace with name: lib");
    K(!/[^0-9a-zA-Z._]/.test("lib"), "Attempt to create a Namespace with invalid characters: lib");
    ey.lib = this
}
;
function gy(a) {
    a && (Ql(el(a, 1, Ti)),
    fl(a, 2, Ti, Hk),
    fl(a, 3, Ti, Hk),
    Ql(el(a, 4, Ti)),
    fl(a, 13, Ti, Hk))
}
var hy = new gy;
function iy(a) {
    if (this.C = a)
        a = this.C.Gc,
        jy(this),
        this.Ua = a;
    this.o = new Wr;
    this.v = Ba;
    this.Y = ky++;
    ly || (a = new Date,
    ly = a.getHours() * 3600 + a.getMinutes() * 60 + a.getSeconds());
    this.X = 1 + ly + this.Y * 1E5;
    this.N = new Sw
}
var ly;
new dy(fy,"f_req");
var ky = 0;
y = iy.prototype;
y.Ld = up(mb);
y.jc = !0;
y.Rb = -1;
y.Vc = -1;
y.fd = -1;
y.sd = hy;
y.eb = 0;
y.Ua = fa;
function jy(a) {
    if (a.M)
        throw Error("Can't change request once send is called");
}
y.Pe = function() {
    this.Ua = "FAIL";
    this.C.abort(this, 101)
}
;
function my(a) {
    if (a.M)
        throw Error("Request already started");
    a.Ua == fa && (K(a.l, "The BEST_EFFORT failure strategy requires a response handler but none was provided. Url: %s", Yx(a)),
    K(a.l.ib, "The BEST_EFFORT failure strategy requires an error handler, but none was provided. Url: %s", Yx(a)));
    Yo(10);
    if (!a.X) {
        var b = "No request id for [" + Yx(a) + "]"
          , c = Error("Request: " + Yx(a));
        cq(b, c)
    }
    js(a.o, "_reqid", a.X);
    b = a.C;
    b.ea() ? ny(b, a, 107) : (Y(b, new oy("h",a)),
    V(py, "Enqueing request " + Yx(a)),
    b.A.l.push(a),
    qy(b));
    a.M = !0;
    a.Rb >= 0 && (a.D = zx(mb, a.Pe, a.Rb, a))
}
y.abort = function() {
    if (!this.M)
        throw Error("Can't abort a request that wasn't started");
    this.complete || (this.Ua = "FAIL",
    this.C.abort(this))
}
;
y.getData = function(a) {
    return this.I ? this.I[a] : null
}
;
function ry(a) {
    return !!a.l && !(typeof a.l.ea == k && a.l.ea())
}
function sy(a, b) {
    ry(a) && a.l.ye && a.l.ye(a, b())
}
function ty(a, b) {
    var c = a.Ld
      , d = "Error response for [" + Yx(a) + "] :\n";
    if (b.j) {
        var e = b.j();
        if (typeof e == "undefined")
            e = "undefined";
        else if (e == null)
            e = "NULL";
        else {
            var f = [], g;
            for (g in e)
                if (typeof e[g] !== k) {
                    var h = g + " = ";
                    try {
                        h += e[g]
                    } catch (l) {
                        h += "*** " + l + " ***"
                    }
                    f.push(h)
                }
            e = f.join("\n")
        }
    } else
        e = JSON.stringify(ik(b));
    yp(c, d + e);
    a.J = b;
    ry(a) && a.l.ib && a.l.ib(a)
}
function uy(a, b) {
    a.complete = !0;
    a.D && (E.clearTimeout(a.D),
    a.D = null);
    ry(a) && (a.H && a.l.ib && a.l.ib(a),
    a.l.Ma && a.l.Ma(a, b))
}
function Yx(a) {
    return String(a.o.clone())
}
function Nx(a, b, c) {
    a.B || (a.B = new bs);
    Array.isArray(c) || (c = [String(c)]);
    ph(Sv, a.v) || (a.v = Ba);
    ks(a.B, b, c)
}
function vy(a, b, c) {
    if (b instanceof bs) {
        var d = b.sa();
        uh(d);
        for (var e = 0; e < d.length; e++) {
            var f = d[e]
              , g = b.oa(f);
            c ? Nx(a, f, g) : js(a.o, f, g)
        }
    } else
        Vr(b, function(h, l) {
            c ? Nx(this, l, h) : js(this.o, l, h)
        }, a)
}
;function wy(a) {
    M(a);
    var b;
    if (a.length !== 0 && typeof (b = a[0]) === v && b)
        return b
}
;function xy(a) {
    return jk(function() {
        return uk(a)
    })
}
;function yy(a, b, c, d, e, f) {
    b = "Error code = " + b;
    c && (b += ", Path = " + c);
    d && (b += ", Message = " + d);
    c = f == null ? void 0 : f.da;
    c != null && (b += ", HTTP status = " + c);
    e && (b += ", " + e.B);
    Ag.call(this, b);
    this.name = a
}
A(yy, Ag);
function zy(a) {
    if (tk(a))
        a = xy(a);
    else {
        if (a instanceof xl)
            return a.constructor.S;
        if (!Array.isArray(a))
            return
    }
    if (a.length) {
        var b = a[0];
        if (typeof b === v)
            return wy(a);
        if (typeof b === q) {
            if (tk(b))
                return wy(xy(b));
            if (b instanceof xl)
                return b.constructor.S;
            if (Array.isArray(b))
                return wy(b)
        }
    }
}
function Ay(a, b) {
    var c = "UNKNOWN IDS"
      , d = "UNKNOWN IDS";
    try {
        c = a.map(function(e) {
            return e.S
        }).join(", "),
        d = b.map(function(e) {
            return zy(e)
        }).join(", ")
    } catch (e) {}
    return "Expected protos: [" + c + "]. Returned protos: [" + d + "]."
}
function By(a, b, c, d) {
    yy.call(this, "TooManyProtosError", 108, c, "The RequestService interface only supports a single received proto (be it data or error). " + (a && b ? Ay(a, b) : ""), void 0, d)
}
A(By, yy);
function Cy(a, b, c, d) {
    yy.call(this, "ExpectedProtoNotFound", 109, c, "The expected response proto was not returned by the server." + Ay(a, b), void 0, d)
}
A(Cy, yy);
function Dy() {
    this.v = [];
    this.o = {};
    Ey(this, 1E3)
}
function Ey(a, b) {
    b = Math.min(3E5, Math.max(b, 1E3));
    a.md = Math.round(.85 * b) + Math.round(.3 * b * Math.random())
}
function Fy(a) {
    var b = new Gy;
    a.j = b
}
y = Dy.prototype;
y.hb = bc("lb");
y.Yb = function() {
    return this.lb == this.mb
}
;
y.reset = function() {
    this.A = this.l = null
}
;
y.oc = 0;
y.mb = -1;
y.lb = 0;
y.za = 0;
y.Md = 0;
y.md = 0;
function oy(a) {
    ts.call(this, a)
}
A(oy, ts);
function Gy() {
    Ag.call(this);
    this.message = "Retryable Server Error"
}
Xc(Gy, Ag);
function Hy() {
    this.j = [];
    this.l = []
}
function Iy(a) {
    a.j.length === 0 && (a.j = a.l,
    a.j.reverse(),
    a.l = [])
}
Hy.prototype.clear = function() {
    this.j = [];
    this.l = []
}
;
Hy.prototype.remove = function(a) {
    var b = this.j;
    var c = jh(b, a);
    c >= 0 ? (rh(b, c),
    b = !0) : b = !1;
    return b || qh(this.l, a)
}
;
Hy.prototype.oa = function() {
    for (var a = [], b = this.j.length - 1; b >= 0; --b)
        a.push(this.j[b]);
    b = this.l.length;
    for (var c = 0; c < b; ++c)
        a.push(this.l[c]);
    return a
}
;
function Jy() {
    X.call(this);
    X.call(this);
    this.A = new Hy;
    this.C = new Sw;
    this.j = [];
    this.l = [];
    this.o = [];
    this.D = new jt(this);
    new Sw
}
Xc(Jy, X);
var py = up(nb);
y = Jy.prototype;
y.Wa = null;
y.Sb = "READY";
y.Gc = fa;
y.dispose = function() {
    for (var a = 0; a < this.l.length; a++) {
        var b = this.l[a].j;
        b.za && (E.clearTimeout(b.za),
        b.za = 0)
    }
    this.ea() || (Jy.pa.dispose.call(this),
    this.A.clear(),
    Ky(this));
    for (a = 0; a < this.o.length; a++)
        this.o[a].dispose();
    this.l.length = this.j.length = 0;
    this.D.dispose()
}
;
function Ly(a, b) {
    var c = {};
    c.Bd = F(a.bf, a);
    c.nc = F(a.nc, a);
    c.Lb = F(a.Lb, a);
    c.si = F(a.we, a);
    c.Fb = F(a.se, a);
    c.Yb = F(a.ge, a);
    c.ri = F(a.oe, a);
    c.hb = F(a.pe, a);
    c.Ci = F(a.ob, a);
    c.Xb = F(a.Xb, a);
    b.o = c;
    b.Qb(!1);
    a.o.push(b);
    zp(py, "Registered a new transport. Transport Count = " + a.o.length)
}
y.abort = function(a, b) {
    My(this, a, b)
}
;
function My(a, b, c) {
    c = typeof c === m ? c : 100;
    ph(a.j, b) ? (b.j.oc = c,
    (a = b.j) && a.l && a.l.abort(a.oc)) : a.A.remove(b) && ny(a, b, c)
}
function Ny(a, b) {
    var c = null
      , d = {}
      , e = mh(a.o, function(n) {
        var p = Pc(n);
        d[p] = n.D(b);
        return !!d[p]
    });
    vh(e, F(a.ke, null, d, a.o));
    for (var f = 0, g = e.length, h = 0; h < g && !c; h++) {
        var l = e[h];
        if (!l.v) {
            c = l;
            break
        }
        l = d[Pc(l)];
        if (h == g - 1 || l > d[Pc(e[h + 1])])
            for (; !c && f <= h; )
                if (c = e[f++],
                Oy(a, c) < 1)
                    if (c = c.clone())
                        Ly(a, c);
                    else {
                        if (l == 1)
                            throw Error("Cannot clone REQUIRED transport");
                    }
                else
                    throw Error("Too many transports allocated.");
    }
    return c
}
y.ke = function(a, b, c, d) {
    var e = Pc(c)
      , f = Pc(d);
    return a[e] < a[f] ? 1 : a[e] > a[f] ? -1 : c.v && !d.v ? 1 : !c.v && d.v ? -1 : ih(b, d) - ih(b, c)
}
;
function Oy(a, b) {
    var c = 0;
    b = b.constructor;
    a = a.o;
    for (var d = a.length, e = 0; e < d; e++)
        a[e].constructor === b && c++;
    return c
}
y.Xb = function(a) {
    K(ph(this.j, a), Da);
    if (this.C.size !== 0)
        for (var b = Array.from(this.C.keys()), c = 0; c < b.length; c++) {
            var d = b[c]
              , e = this.C.get(d);
            V(py, "Adding additional param: " + d + "=" + e);
            js(a.o, d, e);
            this.C.delete(d)
        }
}
;
function Py(a, b) {
    switch (b) {
    case "READY":
    case Pa:
        a.j.length >= 1 && V(py, ja + b + " because max capacity reached. ");
        break;
    case "ACTIVE":
    case Qa:
    case "RETRY_TIMER":
        if (a.j.length == 0)
            throw Error(ja + b + " if there is no active request");
    }
    b != a.Sb && (a.Sb = b,
    Y(a, new oy("g")),
    a.H && a.H.Bi())
}
function qy(a) {
    if (a.Sb != "READY")
        V(py, "Not ready - not transferring");
    else {
        var b = a.A;
        Iy(b);
        b = b.j;
        if ((b = b[b.length - 1]) && a.j.length < 1) {
            var c = a.A;
            Iy(c);
            c.j.pop();
            b.j = new Dy;
            a.j.push(b);
            Qy(a, b)
        }
    }
}
function Qy(a, b) {
    var c = Yx(b);
    V(py, "Sending request to " + c);
    c = b.j;
    c.lb = 0;
    c.mb = -1;
    c = Date.now();
    b.Vc == -1 && (b.Vc = c);
    b.fd = c;
    b.eb++;
    try {
        Py(a, "ACTIVE");
        try {
            var d = b.j;
            d.oc = 0;
            var e = d.l;
            if (!e) {
                e = Ny(a, b);
                if (!e)
                    throw Error("No acceptable transport for " + b);
                e.v = !0;
                d.l = e
            }
            d.j = null;
            V(py, "ActiveRequests:" + a.j.length + " Transports:" + a.o.length);
            e.transfer(b);
            a.Wa || (V(py, "Starting heartbeat timer"),
            a.Wa = zx(nb, a.nd, 3E4, a))
        } catch (f) {
            throw xp(py, "Exception thrown in transferRequest: " + f),
            xp(py, Wo()),
            f;
        }
    } catch (f) {
        throw xp(py, "Exception thrown in transferNextRequest: " + f),
        xp(py, Wo()),
        f;
    }
}
y.se = function(a, b) {
    this.Fb(a, b)
}
;
y.Fb = function(a, b) {
    K(ph(this.j, a), Da);
    for (var c = a.j, d = 0; d < b.length; d++) {
        var e = b[d];
        c.lb++;
        tk(e) && (e = xy(e));
        var f = e[0];
        f !== Wl.S && c.v.push(e);
        c.hb();
        if (f == Wl.S)
            Ry(this, a, e);
        else if (f == Tl.S)
            Sy(a, e);
        else {
            if (f == Vl.S) {
                var g = a;
                Ty(g);
                Uy(g, new Vl(e))
            }
            this.ob(a)
        }
        V(py, ra + f)
    }
}
;
y.we = function(a, b, c) {
    K(ph(this.j, a), Da);
    var d = a.j;
    d.lb++;
    d.o = c;
    tk(b) && (b = xy(b));
    c = b[0];
    c !== Wl.S && d.v.push(b);
    d.hb();
    c == Wl.S ? Ry(this, a, b) : c == Tl.S ? Sy(a, b) : (c == Vl.S && (Ty(a),
    Uy(a, new Vl(b))),
    this.ob(a));
    V(py, ra + c)
}
;
function Ry(a, b, c) {
    c = Hl(Xl(), c).clone();
    (c = fl(c, 1, Ti, Hk)) && a.I && c != a.I && (b.j.j = Error(106))
}
function Sy(a, b) {
    try {
        var c = Hl(Ul(), b).clone()
          , d = new gy(c);
        a.sd = d
    } catch (e) {
        Kg(e),
        a.j.j = e
    }
}
function Uy(a, b) {
    a = a.j;
    var c = zj(Ik(b, 1, Ti, Hk));
    a.mb = c;
    var d;
    ((d = Ql(el(b, 4, Ti))) != null ? d : 0) > 0 && (b = Ql(el(b, 4, Ti)),
    K(b > 0, "Bytes transferred has to be a positive number."))
}
y.ob = function(a) {
    K(ph(this.j, a), Da);
    var b = a.j
      , c = b.v
      , d = b.o;
    c.length && (b.v = [],
    b.o = {},
    Vy(a, c, d))
}
;
function Vy(a, b, c) {
    var d = a ? a.j : null;
    if (!d || !d.j)
        try {
            a == null || sy(a, function() {
                return xy(b)
            });
            for (var e = {}, f = 0; f < b.length; e = {
                Ka: void 0
            },
            f++) {
                e.Ka = b[f];
                tk(e.Ka) && (e.Ka = xy(e.Ka));
                var g = e.Ka[0];
                if (a)
                    if (g == Kr.S) {
                        var h = Hl(Mr(), e.Ka).clone()
                          , l = zj(Ik(h, 5, Ti, Hk));
                        if (l >= 500 && l < 700) {
                            var n = new Gx(a,l,!1,a.eb);
                            if (Hx(n)) {
                                d.A = n;
                                Fy(d);
                                break
                            }
                        }
                        ty(a, h)
                    } else
                        ry(a) && a.l.Zc && a.l.Zc(a, g, e.Ka, c)
            }
        } catch (p) {
            Kg(p),
            d && (d.j = p)
        }
}
y.ge = function(a) {
    K(ph(this.j, a), Da);
    return a.j.Yb()
}
;
y.pe = function(a) {
    K(ph(this.j, a), Da);
    return a.j.hb()
}
;
y.oe = function(a) {
    K(ph(this.j, a), Da);
    return a.j.mb
}
;
y.Lb = function(a, b) {
    b = b === void 0 ? {} : b;
    var c = a.j;
    c.o = b;
    this.ob(a);
    K(ph(this.j, a), Da);
    var d = c.j;
    if (d || !c.Yb()) {
        var e;
        d ? d instanceof Gy ? e = c.A : e = new Gx(a,d.message == 106 ? 106 : 12,!0) : (b = "Missing data arrays. Expected " + c.mb + ", received " + c.hb(),
        e = new Gx(a,103,!1,a.eb,b),
        this.G && Wy(a),
        yp(py, b));
        Xy(this, a, e);
        return !1
    }
    V(py, "Success");
    e = b;
    a.H = !1;
    a.G = null;
    a.Rb = -1;
    uy(a, e);
    Y(this, new oy("i",a));
    qh(this.l, a);
    Py(this, Pa);
    return !0
}
;
y.nc = function(a, b) {
    K(ph(this.j, a), Da);
    this.G && b.l == 103 && Wy(a);
    this.ob(a);
    Xy(this, a, b)
}
;
function Xy(a, b, c) {
    K(ph(a.j, b), Da);
    V(py, "Error caught: " + c.l);
    b.j.A = c;
    b.sd = hy;
    Hx(c) ? (V(py, "Waiting to retry request"),
    c = a.l,
    ph(c, b) || c.push(b),
    b.j.za = -1,
    b = Qa) : (Hx(c) && xp(py, "Failing retry request because we are offline: " + Yx(b)),
    V(py, "Failing request"),
    qh(a.l, b),
    ny(a, b, c),
    b = Pa);
    Py(a, b)
}
y.bf = function(a) {
    var b = oh(this.j, function(c) {
        return c.j.l == a
    });
    K(b, "Could not find an active request that uses this transport.");
    ph(this.l, b) || (a.v = !1,
    b.j.reset(),
    qh(this.j, b));
    Ky(this);
    V(py, "Transport is ready for next request");
    kh(this.l, this.Fe, this);
    this.j.length < 1 && (Py(this, "READY"),
    qy(this))
}
;
y.Fe = function(a) {
    var b = a.j;
    if (b.za == -1) {
        var c = a.o.j.get("f.retries");
        vy(a, {
            "f.retries": (c ? Number(c) : 0) + 1
        }, !1);
        c = b.md;
        b.Md = Date.now() + c;
        a = zx(nb, F(this.Ne, this, a), c);
        b.za = a;
        Ey(b, 2 * c);
        Py(this, "RETRY_TIMER")
    }
}
;
y.Ne = function(a) {
    var b = a.j;
    b.za && (E.clearTimeout(b.za),
    b.za = 0);
    Qy(this, a)
}
;
function Ky(a) {
    a.Wa && (V(py, "Stopping heartbeat timer"),
    E.clearTimeout(a.Wa),
    a.Wa = null)
}
y.nd = function() {
    V(py, "Performing heartbeat check");
    this.Wa = zx(nb, this.nd, 3E4, this);
    this.Oc()
}
;
y.Oc = function() {
    if (this.j.length != 0 && this.B)
        for (var a = this.j.length, b = 0; b < a; b++) {
            var c = this.j[b]
              , d = Date.now()
              , e = c.fd;
            if (e > -1 && d - e > 6E4)
                if (d = this.B,
                V(d.Pa, "Network check requested"),
                e = Date.now(),
                e - d.kc > d.l ? (d.j.qb ? V(d.Pa, "Network check already in progress") : navigator !== null && "onLine" in navigator && !navigator.onLine ? (V(d.Pa, ia),
                d.kc = e - d.l + 1E3,
                zx("Async notification of browser offline", F(d.od, d, !1), 0)) : (V(d.Pa, "Running network check"),
                e = new Wr(ca),
                e.j.set("zx", Gp()),
                d.j.l = e,
                d.j.start()),
                d = !0) : (V(d.Pa, "Network check was run recently - not rerunning."),
                d = !1),
                d)
                    break;
                else
                    this.B.ld || (V(py, "Aborting long request because network test failed"),
                    My(this, c, 1))
        }
}
;
function Wy(a) {
    js(a.o, "nrt", a.eb);
    var b = a.j.l;
    b instanceof Vx && (b = b.j.ba(),
    b != null && Nx(a, "rhma", b))
}
function ny(a, b, c) {
    typeof c === m && (c = new Gx(b,c));
    Y(a, new oy("j",b,c));
    a = c;
    b.H = !0;
    b.G = a;
    var d;
    uy(b, a == null ? void 0 : (d = a.A) == null ? void 0 : d.call(a))
}
function Ty(a) {
    var b = a.P;
    if (!b || b <= 0)
        a.P = Date.now()
}
;var Yy = new Bt("LEikZe","LEikZe");
function Zy(a) {
    Sd(a.split(".").every(function(b) {
        return /^[a-zA-Z_$][a-zA-Z_$0-9]*$/.test(b)
    }), function() {
        return 'minifiedNameString must be a JavaScript identifier, got "' + a + '"'
    })
}
;var $y = Symbol("noPiiBlessed");
function az(a) {
    this.Ge = a
}
function bz(a) {
    Fg(a);
    if ($y !== $y)
        throw Error();
    return new az(a)
}
;var cz = "_" + String(Math.random()).slice(1, 4);
function dz(a) {
    var b = Ec.apply(1, arguments);
    Md(a, ce());
    Md(b, ae);
    J(a.length === b.length + 1, Mb);
    Md(a.length, Xd(), Mb);
    var c = a[0];
    if (a.length === 1)
        return Md(c.length, Xd(), "span ids cannot be empty"),
        c + cz;
    c = [0, c + (ez ? "" : cz)];
    for (var d = 0; d < b.length; d++) {
        var e = b[d];
        if (e instanceof az) {
            var f = c
              , g = f.push;
            if (!(e instanceof az))
                throw Error();
            g.call(f, 2, e.Ge)
        } else
            typeof e === m ? c.push(2, String(e)) : c.push(1, e);
        c.push(0, a[d + 1] + (ez ? "" : cz))
    }
    return JSON.stringify(c)
}
var ez = "YxoQge" !== "a" + cz;
var fz = new Set;
function gz() {
    return ["No root trace was ever created in this execution context; There are ", fz.size, " other active traces."]
}
var hz = globalThis;
Object.hasOwn(hz, "traceContext") || Object.defineProperty(hz, "traceContext", {
    get: gz
});
function iz(a, b) {
    if (!ez) {
        if (typeof a !== v)
            throw new TypeError("id: '" + a + "' is not a SpanId");
        if (a[0] === "[") {
            a = JSON.parse(a);
            Md(a, ae);
            for (var c = 0; c < a.length; c += 2) {
                var d = a[c];
                J(d === 0 || d === 1 || d === 2 || d === 3);
                var e = Qd(a[c + 1]);
                switch (d) {
                case 0:
                    Md(e, Rd);
                    ez || J(e.endsWith(cz));
                    break;
                case 1:
                    continue;
                case 2:
                    Md(e, Rd);
                    break;
                case 3:
                    Zy(e);
                    break;
                default:
                    throw Error("unexpected value " + d + "!");
                }
            }
        }
    }
    return b()
}
;var jz = pc(["BqgkJe", "OWXEXe"])
  , kz = pc(["IE0Oi", "cESSm", "OWXEXe"])
  , lz = pc(["xK4gQc", "V1GM4b", "OWXEXe"]);
function mz(a, b, c, d, e) {
    this.C = [];
    this.M = !1;
    this.B = b;
    this.A = c;
    this.v = d;
    this.l = e;
    this.H = a.C;
    this.o = new on;
    this.G = new on(this.re.bind(this));
    a = this.l.gf ? a.l : a.A;
    this.j = new iy(a);
    if (this.l.transport)
        throw Error("Invalid FcDataTransportType");
    this.j.o.l = this.B;
    a = this.j;
    b = this.l.method;
    K(!a.A && !a.B || ph(Sv, b), "Request has body data already and cannot use an HTTP method that does not support sending a body.");
    a.v = b;
    this.l.ud && (this.j.ud = this.l.ud);
    if (typeof this.l.host === v) {
        var f = Kp(this.l.host)[1] || null;
        var g = Lp(Kp(this.l.host)[3] || null);
        var h = Number(Kp(this.l.host)[4] || null) || null
    }
    f = f || this.l.scheme;
    typeof f === v && Xr(this.j.o, f);
    g = g || this.l.domain;
    typeof g === v && Yr(this.j.o, g);
    typeof h === m && Zr(this.j.o, h);
    f = this.j;
    (g = !ph(Sv, this.j.v)) && ph(Sv, f.v) ? f.v = "GET" : g || ph(Sv, f.v) || (f.v = Ba);
    jy(f);
    f.L = g;
    this.j.td = this.l.td;
    this.j.Pc = this.l.Pc;
    nz(this);
    if (this.A) {
        if (ph(Sv, this.j.v)) {
            f = this.A;
            try {
                var l = f instanceof HTMLFormElement
            } catch (n) {
                l = typeof f === q && f.nodeType === 1 && typeof f.style === q && typeof f.ownerDocument === q && f.tagName.toLowerCase() === "form"
            }
            if (l) {
                l = this.j;
                jy(l);
                l.jc = !1;
                l = this.j;
                f = this.A;
                jy(l);
                if (l.jc)
                    throw Error("fava.request.Request.setBodyForm: Can not set body form for a background request.");
                l.A = f
            } else
                this.A instanceof xl ? (l = this.j,
                f = this.A,
                l.Z = f,
                Nx(l, "f.req", JSON.stringify(ik(f)))) : vy(this.j, this.A, !0)
        } else
            vy(this.j, this.A, !1);
        this.l.jb && (jy(this.j),
        l = this.j,
        jy(l),
        l.U = !0)
    }
    oz(this);
    this.D = up("fava.request.RequestWrapper")
}
function pz(a, b) {
    for (var c = {}, d = 0; d < b.length; d++)
        c[b[d].S] = b[d];
    b = [];
    d = [];
    for (var e = 0; e < a.length; e++) {
        var f = a[e];
        if (!tk(f) && f instanceof xl) {
            var g = c[f.constructor.S];
            f instanceof Kr ? d.push(f) : g && b.push(f)
        } else if (g = wy(tk(f) ? xy(f) : f),
        g = c[g]) {
            if (!((g == null ? void 0 : g.prototype) instanceof xl))
                throw Error("value " + g + " was not a mutable message constructor");
            g = g[ji] || (g[ji] = Hj(g));
            f = Hl(g, f).clone();
            b.push(f)
        }
    }
    return {
        Za: b,
        Ta: d
    }
}
y = mz.prototype;
y.jf = function(a) {
    a = a.data;
    for (var b = 0; b < a.length; b++) {
        var c = a[b];
        if (!tk(c) && c instanceof Gx)
            throw c;
    }
    return a
}
;
y.hf = function(a) {
    a = a.data;
    if (this.v.length === 0)
        return null;
    var b = pz(a, this.v);
    if (b.Za.length === 0 && b.Ta.length === 0)
        throw new Cy(this.v,a,this.B,this.j);
    return [].concat(oc(b.Za), oc(b.Ta))
}
;
y.kf = function(a) {
    a = a.data;
    if (this.v.length === 0)
        return null;
    var b = pz(a, this.v)
      , c = b.Za;
    b = b.Ta;
    if (c.length === 0 && b.length === 0)
        throw new Cy(this.v,a,this.B,this.j);
    if (c.length === 1 && b.length === 0)
        return c[0];
    if (c.length === 0 && b.length === 1)
        throw b[0];
    throw new By(this.v,a,this.B,this.j);
}
;
y.cancel = function() {
    this.o.cancel()
}
;
function qz(a, b, c) {
    a.H.forEach(function(d) {
        var e = d.l();
        Array.isArray(e) || (e = [e]);
        var f = pz(b, e)
          , g = f.Za;
        f = f.Ta;
        if (!e.length || g.length)
            try {
                d.v(g, c)
            } catch (h) {
                throw h;
            }
        if (f.length)
            try {
                d.o(f, c)
            } catch (h) {
                throw h;
            }
    })
}
function rz(a, b, c) {
    c = c === void 0 ? {} : c;
    if (a.l.jb) {
        b = [b];
        qz(a, b, c);
        b = pz(b, a.v);
        var d;
        b.Za.length > 0 ? d = b.Za[0] : b.Ta.length > 0 && (d = b.Ta[0]);
        if (d) {
            var e;
            iz(dz(jz, bz((e = d.constructor.S) != null ? e : Sb)), function() {
                return a.l.jb(d, c)
            })
        }
    } else
        a.C.push(b)
}
function nz(a) {
    var b = {}
      , c = a.G;
    b.ib = function(d) {
        if (c.j)
            yp(a.D, "Error received after deferred has already fired: " + Yx(d));
        else {
            var e = d.G;
            if (e)
                c.rb(e);
            else {
                var f;
                rz(a, d.J, (f = d.j) == null ? void 0 : f.o)
            }
        }
    }
    ;
    b.Ma = function(d, e) {
        if (c.j)
            a.M || yp(a.D, "Request complete event after deferred has already fired: " + Yx(d));
        else {
            d = Sb;
            if (a.C.length > 0) {
                var f = a.C[0];
                tk(f) ? d = wy(xy(f)) : f instanceof xl ? d = f.constructor.S : Array.isArray(f) && (d = wy(f))
            }
            var g;
            iz(dz(kz, a.C.length, bz((g = d) != null ? g : Sb)), function() {
                c.va({
                    data: a.C,
                    sc: e
                });
                return c
            })
        }
    }
    ;
    b.Zc = function(d, e, f, g) {
        rz(a, f, g)
    }
    ;
    b.Fi = !0;
    a.j.l = b
}
function oz(a) {
    a.H.forEach(function(b) {
        b.j && wn(a.o, b.j, b)
    });
    wn(a.o, function(b) {
        my(b);
        return yn(Cn(a.G), function(c) {
            c instanceof pn && a.G.cancel()
        })
    });
    a.l.jb ? wn(a.o, x(null)) : (wn(a.o, function(b) {
        qz(a, b.data, b.sc)
    }),
    a.l.Nc ? wn(a.o, a.hf, a) : a.l.qd ? wn(a.o, a.jf, a) : wn(a.o, a.kf, a));
    yn(a.o, a.ue, a)
}
function sz(a) {
    return iz(dz(lz, bz(a.j.v), bz(a.j.o.l)), function() {
        a.o.va(a.j);
        return a.o
    })
}
y.ue = function(a) {
    if (!(a instanceof pn)) {
        if (!this.l.qd && a instanceof Gx) {
            var b = a.l;
            if (b == 100 && this.M)
                return new pn(this.o);
            var c;
            throw new yy("TransportError",b,this.B,"There was an error during the transport or processing of this request.",a,(c = a.o) != null ? c : void 0);
        }
        throw a;
    }
}
;
y.re = function() {
    this.j && (V(this.D, "Aborting request because Deferred was canceled. " + Yx(this.j)),
    this.M = !0,
    this.j.abort())
}
;
y.toString = function() {
    return Yx(this.j)
}
;
function tz(a) {
    Vx.call(this, "j", a || up("fava.request.XhrTransport"))
}
A(tz, Vx);
tz.prototype.D = function(a) {
    var b = a.A, c;
    if (c = b)
        a: {
            b = b.elements;
            var d;
            for (c = 0; d = b[c]; c++)
                if (!d.disabled && d.type && d.type.toLowerCase() == "file") {
                    c = !0;
                    break a
                }
            c = !1
        }
    return c ? 0 : a.jc && !a.U ? .9 : .5
}
;
tz.prototype.clone = function() {
    var a = new tz
      , b = this.G;
    a.A = this.A;
    a.G = b;
    this.j.C && a.Qb(!0);
    return a
}
;
tz.prototype.I = function(a) {
    var b = a.ba();
    b = b.substring(b.indexOf("\n"));
    var c = Kx(this);
    try {
        var d = window.JSON.parse(b)
    } catch (e) {
        yp(this.l, "Xhr parse error");
        V(this.l, b);
        V(this.l, "Exception: " + e);
        Zx(this, 10, void 0, a);
        return
    }
    Array.isArray(d) ? this.o.Fb(c, d[0]) : yp(this.l, "Empty XHR response received");
    this.o.Lb(c, bw(a))
}
;
tz.prototype.fc = function(a) {
    var b = a.ba();
    b = b.substring(b.indexOf("\n"));
    try {
        var c = window.JSON.parse(b)
    } catch (d) {}
    Array.isArray(c) ? (b = Kx(this),
    this.o.Fb(b, c[0]),
    this.o.Lb(b, bw(a))) : (V(this.l, "No ErrorResponse found in content."),
    Vx.prototype.fc.call(this, a))
}
;
var uz = {
    Nc: !1,
    domain: void 0,
    jb: null,
    method: Ba,
    qd: !1,
    scheme: void 0,
    host: void 0,
    gf: !1
};
function vz(a, b, c, d) {
    X.call(this);
    this.o = null;
    this.C = [];
    this.B = null;
    this.D = uz;
    X.call(this);
    b || (b = new Jy,
    Ly(b, new tz));
    this.l = b;
    c || (c = new Jy,
    Ly(c, new tz));
    this.A = c;
    this.o = d || null;
    this.j = [];
    this.l && this.j.push(this.l);
    this.A && this.j.push(this.A)
}
A(vz, X);
function wz(a, b) {
    var c = "/wardeninit"
      , d = Jr;
    var e = {};
    if (c.startsWith("http")) {
        c = Kp(c);
        e = c[1] || void 0;
        var f = c[3] || void 0
          , g = c[4];
        c = c[5] || "";
        e = {
            scheme: e,
            host: f ? (e ? e + "://" : "") + f + (g ? ":" + g : "") : void 0
        }
    }
    g = [];
    f = {};
    d && (typeof d === k || Array.isArray(d)) ? d && (g = Array.isArray(d) ? d : [d]) : d && (f = d);
    d = g;
    Object.assign(e, f);
    e = Object.assign({}, Object.assign({}, a.D), e);
    K(!(e.jb && e.Nc), "Incremental and batched responses are incompatible.");
    b = new mz(a,c,b || null,d,e);
    a.B || (a.B = b,
    Yo(10));
    return sz(b)
}
vz.prototype.K = function() {
    this.j.forEach(Yp);
    Yp(this.o);
    X.prototype.K.call(this)
}
;
vz.prototype.initialize = function(a) {
    a = a.get(xx).j;
    var b = this.l;
    b.B = a;
    b.B && lt(b.D, b.B, "f", b.Oc);
    this.o = null
}
;
vv(Yy, vz);
function xz() {
    var a = new rx
      , b = new Ex(a);
    ux(a, xx, b);
    b = new vz(a,void 0,void 0,void 0);
    ux(a, Yy, b);
    this.j = b;
    this.j.initialize(a);
    a = this.j;
    a.G = fa;
    a = C(a.j);
    b = a.next();
    try {
        for (; !b.done; b = a.next())
            b.value.Gc = fa
    } finally {
        rc(a, b)
    }
}
function yz(a, b) {
    xn(wz(a.j, b), Zb(), function(c) {
        console.log(c)
    }, a)
}
;function zz(a, b) {
    a != null && this.Qa.apply(this, arguments)
}
y = zz.prototype;
y.Ga = "";
y.set = function(a) {
    this.Ga = "" + a
}
;
y.Qa = function(a, b, c) {
    this.Ga += String(a);
    if (b != null)
        for (var d = 1; d < arguments.length; d++)
            this.Ga += arguments[d];
    return this
}
;
y.clear = function() {
    this.Ga = ""
}
;
y.toString = bc("Ga");
function Az(a, b, c, d) {
    this.Ba = b;
    this.ca = a;
    this.o = c;
    this.ra = d;
    this.M = "";
    this.j = void 0;
    this.l = null;
    this.N = Ob;
    this.I = {};
    this.A = 3;
    this.U = !1;
    this.v = Um;
    this.C = !1;
    this.X = Tm;
    this.J = !1;
    this.B = Um;
    this.D = -1;
    this.la = this.G = this.Y = this.Z = this.H = !1
}
Az.prototype.setTimeout = function(a) {
    this.D = a;
    return this
}
;
Az.prototype.withCredentials = function() {
    this.G = !0;
    return this
}
;
Az.prototype.validate = function() {
    this.l != "GET" && this.l != "HEAD" || K(!this.j, "GET and HEAD methods do not support request content.");
    this.H && (K(Bz(this), "Scotty uploads are only supported for string, query arrays, and buffers."),
    this.l && K(this.l == Ba, "Scotty uploads can be used only for POST methods."))
}
;
function Cz(a) {
    if (a.Z) {
        var b = a.M;
        var c = Kp(b)[5] || null;
        Ws.test(c) && (b = $s(b, Xs),
        b = $s(b, Ws))
    } else
        b = a.M;
    c = yq(a.o, "docs-ucd");
    if (!a.Y || !c)
        return b;
    if (!b)
        return rb + c;
    if (b.startsWith("/"))
        return rb + c + b;
    throw Error("Attempted to override domain on url prefix with domain");
}
function Dz(a) {
    return Cz(a) + Ez(a)
}
function Ez(a) {
    return a.Z ? (a = Wp(a.ca, "id"),
    Wp(a, "resourcekey")) : a.ca
}
function Fz(a) {
    if (Array.isArray(a.j)) {
        var b = a.j;
        try {
            if (wq(a.o, "docs-net-cbfd") && E.FormData) {
                K(!!E.FormData, "FormData not defined");
                for (var c = new E.FormData, d = 0; d < b.length; d += 2)
                    c.append(b[d], b[d + 1]);
                var e = c
            } else
                e = Pp(b);
            return e
        } catch (r) {
            if (r instanceof URIError && r.message == "URI malformed") {
                e = [];
                for (c = 1; c < b.length; c += 2) {
                    d = "" + b[c];
                    for (var f = vo(), g = 0; g < d.length; g = g + 1 | 0) {
                        var h = ng(d, g);
                        var l = !1;
                        var n = Ff(d, g);
                        n = n >= 55296 && n <= 56319;
                        var p = Se(Ff(d, g));
                        n ? l = !(h >= 65536 && h <= 1114111) : p && (g > 0 ? (l = ng(d, g - 1 | 0),
                        l = !(l >= 65536 && l <= 1114111)) : l = !0);
                        l && (h = "\\u" + H((h >>> 0).toString(16)),
                        l = Hr(d, g - 1 | 0),
                        n = Hr(d, g + 1 | 0),
                        f.push(new Gr(h,g,d.length,l,n)))
                    }
                    e = e.concat(f)
                }
                b = "{" + H(e.join("; ")) + "}";
                a = Dz(a).substr(0, 100);
                throw Xo(r, {
                    illegal_request_content: b,
                    request_uri: a
                });
            }
            throw Xo(r, {
                "docs-origin-class": "docs.net.AbstractRequestBuilder"
            });
        }
    }
    return a.j
}
function Bz(a) {
    return typeof a.j === v || Array.isArray(a.j) || Gz && a.j instanceof Blob
}
var Gz = typeof Blob === k && Blob.prototype.hasOwnProperty("size");
function Hz(a, b) {
    b = b === void 0 ? 3E4 : b;
    this.A = a;
    this.j = this.v = this.l = 0;
    this.o = b;
    for (a = Iz; a < this.o; )
        a *= 2;
    this.B = a
}
function Jz(a, b) {
    if (wq(a.A, "docs-irbfes"))
        if (a.j === 0 || b === 2)
            b = Iz;
        else if (b === 1)
            b = a.l < 4 ? Iz : a.j < a.o ? a.j * 2 : a.B;
        else if (b === 3)
            b = a.j < Math.max(a.o, 18E4) ? a.j * 2 : a.j;
        else
            throw Error("Invalid RetryType");
    else {
        var c = b != 2 && !(a.l < 4);
        b = Iz;
        c && a.j != 0 && (b = a.j < a.o ? a.j * 2 : a.j)
    }
    a.j = b;
    return Math.max(0, b - (Date.now() - a.v))
}
var Iz = 5E3 * (.75 + Math.random() * .5);
function Kz(a, b) {
    ts.call(this, "k", a);
    this.j = b
}
A(Kz, ts);
function Lz(a, b, c, d, e, f, g, h, l, n, p, r, u, w, O, B) {
    X.call(this);
    this.aa = a;
    this.Z = b;
    this.C = c;
    this.l = d;
    this.G = u || (c ? Ba : "GET");
    this.J = n;
    this.N = e;
    this.D = f;
    this.L = g;
    this.U = h;
    this.Y = l;
    this.H = r;
    this.I = Qr(w);
    this.ca = O;
    this.Ya = new Hz(rq(),B);
    this.Hc = up("docs.net.RequestInternal")
}
A(Lz, X);
Lz.prototype.Ma = function(a) {
    this.reset();
    Y(this, new Kz(this,a))
}
;
function Mz(a) {
    return {
        ReqUri: a.aa,
        ReqContent: a.C,
        ReqMethod: a.G
    }
}
Lz.prototype.reset = Zb();
Lz.prototype.K = function() {
    Y(this, "l");
    this.reset();
    delete this.D;
    delete this.N;
    X.prototype.K.call(this)
}
;
function Nz(a) {
    if (Oz(a) && a.A != null && Mg(Pz(a), ")]}'\n")) {
        try {
            var b = Qz(a)
        } catch (c) {
            return null
        }
        if (Array.isArray(b) && (a = b[0],
        Array.isArray(a) && a[0] == Kr.S))
            return Lr(JSON.stringify(a))
    }
    return null
}
function Rz(a) {
    a = Nz(a);
    if (!a)
        return null;
    var b;
    return (a = (b = cl(a, Zl, 10, Ti)) == null ? void 0 : zl(b)) ? a : null
}
function Sz(a) {
    return a.l == 409 && a.wa["x-active-lock"] == "CSE_UPGRADE"
}
;function Tz(a, b, c, d, e) {
    ts.call(this, a);
    this.j = this.cause = null;
    this.errorCode = b;
    this.da = c;
    this.o = e
}
A(Tz, ts);
Tz.prototype.Ib = function() {
    return this.type == "o" || this.type == "p"
}
;
function Uz(a, b, c, d, e, f, g) {
    this.A = a;
    this.o = b || Ob;
    this.v = Ng(Fp(c)) ? null : c;
    this.l = d !== void 0 ? d : 200;
    this.wa = {};
    if (f)
        for (var h in f)
            this.wa[h.toLowerCase()] = f[h];
    this.j = e !== void 0 ? e : 0;
    this.C = g || {};
    this.B = void 0;
    a != null && (this.o == Ob ? K(typeof a === v, "Response doesn't match string response type.") : this.o == bb ? K(ArrayBuffer != null && a instanceof ArrayBuffer, Fa) : this.o == "blob" ? K(Blob != null && a instanceof Blob, Fa) : this.o == jb ? K(Document != null && a instanceof Document, "Response doesn't match Document response type.") : K(!1, "Unknown response type: " + this.o))
}
function Vz(a) {
    switch (a) {
    case bb:
        return bb;
    case "blob":
        return "blob";
    case jb:
        return jb;
    case Ob:
        return Ob;
    case "":
        return Ob;
    default:
        throw Error("Unsupported XHR Response Type: " + a);
    }
}
function Pz(a) {
    K(Oz(a), "Cannot get string for response of type: " + a.o + ". Use Response.getRawResponse().");
    return a.A || ""
}
function Oz(a) {
    return a.o == Ob
}
function Qz(a) {
    if (a.B === void 0) {
        var b = Pz(a);
        xr();
        b = b.replace(wr, "");
        if (b)
            if (of(b) === Ab)
                var c = null;
            else {
                for (var d = b.length, e = 0; e < d && Ff(b, e) <= 32; )
                    e = e + 1 | 0;
                for (var f = d; f > e && Ff(b, f - 1 | 0) <= 32; )
                    f = f - 1 | 0;
                b = e > 0 || f < d ? qg(b, e, f) : b;
                try {
                    c = JSON.parse(b)
                } catch (g) {
                    a = ud(g);
                    if (Ad(a))
                        throw c = new eg,
                        b = "Error parsing JSON: " + H(a.l),
                        c.o = a,
                        c.l = b,
                        pd(c),
                        qd(c, Error(c)),
                        c.j;
                    throw a.j;
                }
                if (!(c instanceof Object))
                    throw Id().j;
            }
        else
            c = null;
        a.B = c
    }
    return a.B
}
function Wz(a) {
    var b = a.l
      , c = a.j
      , d = a.o
      , e = a.v;
    if (Oz(a)) {
        var f = Pz(a);
        f = f.indexOf("&") != -1 ? jb in E ? Ap(f) : Cp(f) : f;
        f.length > 50 && (f = f.substring(0, 47) + "...");
        Vg.test(f) && (f.indexOf("&") != -1 && (f = f.replace(Pg, "&amp;")),
        f.indexOf("<") != -1 && (f = f.replace(Qg, "&lt;")),
        f.indexOf(">") != -1 && (f = f.replace(Rg, "&gt;")),
        f.indexOf('"') != -1 && (f = f.replace(Sg, "&quot;")),
        f.indexOf("'") != -1 && (f = f.replace(Tg, "&#39;")),
        f.indexOf("\x00") != -1 && (f = f.replace(Ug, "&#0;")));
        f += "   (truncated)"
    } else
        f = Gb;
    b = {
        RespStatus: b,
        RespErr: c,
        RespType: d,
        RespContentType: e,
        RespString: f
    };
    Object.assign(b, a.C);
    return b
}
function Xz(a) {
    if (a.wa["x-restart"] == "NOW")
        return new Tz("r",a.j,a.l,function() {
            return Qz(a)
        }
        );
    if (a.j == 7)
        return null;
    var b = Yz(a) ? "o" : Zz(a) ? "p" : a.j == 0 ? "n" : "m";
    return new Tz(b,a.j,a.l,function() {
        return Qz(a)
    }
    ,a.j == 6 && a.l == 500 ? Nz(a) : null)
}
function Yz(a) {
    var b = a.j
      , c = a.l;
    return a.j == 0 ? b != 0 || c != 0 || Oz(a) && a.A != null ? !1 : !0 : b == 8 || b == 5 || b == 6 && (c <= 0 || c == 503 || c == 405) ? !0 : !1
}
function Zz(a) {
    var b = a.l;
    return a.j == 6 && (b == 202 || b == 401 || b == 403 || b == 409 && !Sz(a) || b == 429 || b == 433 || b >= 500 && b <= 599 && b != 503 && b != 512 && b != 550) || b == 400 && Rz(a) != null ? !0 : b == 200 ? a.v == null || Nz(a) ? !0 : $z(a) : !1
}
function $z(a) {
    if (a.l == 200 && a.v != null && !Nz(a) && Oz(a)) {
        if (Ng(Fp(a.A)))
            return !0;
        if (Mg(Pz(a), ")]}'\n"))
            try {
                return Qz(a) == null
            } catch (b) {}
    }
    return !1
}
var aA = up("docs.net.ResponseImpl");
function bA() {
    X.call(this)
}
Xc(bA, X);
function cA(a) {
    ts.call(this, a)
}
Xc(cA, ts);
y = bA.prototype;
y.Jc = x(null);
y.Kc = x(null);
y.ba = x(null);
y.start = Zb();
y.cancel = Zb();
function dA() {
    X.call(this)
}
Xc(dA, bA);
dA.prototype.zd = Zb();
function eA(a, b) {
    this.l = a;
    this.j = b;
    this.o = !0
}
eA.prototype.tb = x(null);
eA.prototype.Da = x(!1);
eA.prototype.Hb = x(!1);
eA.prototype.kb = x(!1);
function fA(a) {
    X.call(this);
    this.l = a
}
Xc(fA, X);
function gA(a) {
    ts.call(this, a)
}
Xc(gA, ts);
var hA = {
    Wb: "w",
    ub: "x",
    ERROR: "y",
    yc: "z"
};
function iA(a, b) {
    ts.call(this, a);
    this.Ib = !!b
}
Xc(iA, gA);
y = fA.prototype;
y.Ub = x(null);
y.ba = x(null);
y.Vb = x(null);
y.Tb = x(null);
y.start = Zb();
y.cancel = Zb();
function jA(a, b, c) {
    X.call(this);
    kA++;
    this.l = "select";
    this.j = c;
    $p(this, this.j);
    this.B = "";
    this.A = Ba;
    this.C = {};
    this.D = "";
    this.G = !1;
    this.o = new jt(this);
    $p(this, this.o)
}
A(jA, X);
jA.prototype.ba = function() {
    return this.j.ba()
}
;
jA.prototype.start = function() {
    var a = this;
    K(this.l == "select" || this.l == gb, "Can only start items in state SELECT or CANCEL.");
    K(this.B, "Url must be specified.");
    K(this.A == Ba || this.A == Ca, "HTTP method must be POST or PUT.");
    lt(this.o, this.j, hA.Wb, function() {
        Y(a, new lA("B",a))
    });
    lt(this.o, this.j, hA.ub, function() {
        a.l = hb;
        Y(a, new lA("C",a))
    });
    lt(this.o, this.j, hA.ERROR, function(b) {
        a.l = kb;
        Y(a, new mA("D",a,b.Ib))
    });
    this.j.start(this.B, this.A, this.C, this.D, this.G);
    this.l = "start";
    Y(this, new lA("A",this))
}
;
jA.prototype.cancel = function() {
    K(this.l == "start", "Can only cancel items in state START.");
    this.j.cancel();
    this.l = gb;
    pt(this.o);
    Y(this, new lA("E",this))
}
;
function lA(a, b) {
    ts.call(this, a);
    this.item = b
}
A(lA, ts);
function mA(a, b, c) {
    lA.call(this, a, b);
    this.Ib = !!c
}
A(mA, lA);
var kA = 0;
function nA(a, b, c, d, e, f, g, h, l, n, p, r, u, w, O, B, U, ha) {
    if (p <= 0)
        throw Error("Please specify a progress timeout for the Scotty request. Received -" + p);
    Lz.call(this, a, "", b, c, d, e, f, g, h, l, n, p, Ba, O, B, ha);
    var ua = this;
    this.ra = r;
    this.P = u;
    this.ga = U;
    this.la = w;
    this.j = null;
    this.A = new jt(this);
    this.B = new et(function() {
        if (oA(ua)) {
            yp(ua.o, "Scotty upload for [" + ua.aa + "] seem to be having issues. Cancelling upload....");
            var ac = new Uz("",Ob,null,0,8,{},Mz(ua));
            ua.Ma(ac)
        }
    }
    ,p);
    this.o = up("docs.net.ScottyRequest")
}
A(nA, Lz);
y = nA.prototype;
y.Ic = function(a) {
    K(this.j == null, "Previous upload item still active while resending a scotty request.");
    K(!this.B.isActive(), "Previous upload timeout still active while resending a scotty request.");
    var b = this.C;
    K(typeof b === v || b instanceof Blob, "Scotty request is supported for string or Blob content only.");
    if (typeof b === v) {
        var c = this.P;
        var d = b.length;
        b = new pA(b,"raw","",void 0);
        b.o = !0;
        b = qA(c.j.j, b);
        d = new jA("",d,b);
        Y(c, new rA([d],null));
        c = d
    } else
        c = this.P,
        d = new sA(b,"docs_blob"),
        d.o = !0,
        b = qA(c.j.j, d),
        d = new jA("docs_blob",d.j,b),
        Y(c, new rA([d],null)),
        c = d;
    this.j = c;
    c = {};
    d = qs.l();
    d = d.j == void 0 ? yq(this.ga, "gaia_session_id") : d.j;
    Ng(Fp(d)) || Object.assign(c, {
        authuser: d
    });
    Object.assign(c, a.j.j);
    d = this.j;
    c = Sp(this.ra, c);
    d.B = c;
    this.j.A = this.G;
    c = {};
    Object.assign(c, this.I, Qr(a.o));
    this.j.C = Qr(c);
    c = {};
    d = Lp(Kp(this.aa)[5] || null);
    c.httpaction = d;
    if (d = Kp(this.aa)[6] || null) {
        d = new bs(d);
        b = d.sa();
        for (var e = 0; e < b.length; e++) {
            var f = b[e];
            c[f] = d.get(f)
        }
    }
    Object.assign(c, a.j.j);
    a = this.j;
    c = this.la.stringify(c);
    a.D = c;
    this.j.G = !0;
    nt(this.A, this.j, "C", this.Te);
    nt(this.A, this.j, "D", this.Ue);
    lt(this.A, this.j, "B", this.Ve);
    this.j.start();
    this.B.start()
}
;
y.Te = function() {
    if (this.j) {
        var a = this.j.j.Ub();
        V(this.o, "Scotty upload completed for [" + this.aa + "] ResponseCode [" + a + "]");
        var b = this.j.j.Vb() || {}, c = {}, d;
        for (d in b)
            c[d.toLowerCase()] = b[d];
        b = c["content-type"] || null;
        a = new Uz(this.j.ba(),Ob,b,a,Mv(a) ? 0 : 6,c,Mz(this));
        this.Ma(a)
    } else
        yp(this.o, "Scotty upload complete event received when the upload item is not NaN" + this.aa + "]")
}
;
y.Ue = function() {
    if (this.j) {
        yp(this.o, "Scotty upload failed for [" + this.aa + "] Error [" + this.j.j.Tb() + "]");
        var a = new Uz("",Ob,null,0,5,{},Mz(this));
        this.Ma(a)
    } else
        yp(this.o, "Scotty upload error event received when the upload item is not set [" + this.aa + "]")
}
;
y.Ve = function() {
    oA(this) ? this.B.start() : yp(this.o, "Scotty upload progress event received when there is no upload in progress [" + this.aa + "]")
}
;
function oA(a) {
    return a.j != null && a.j.l == "start"
}
y.reset = function() {
    ft(this.B);
    this.j && (oA(this) && this.j.cancel(),
    Yp(this.j),
    this.j = null);
    pt(this.A)
}
;
y.K = function() {
    Zp(this.B, this.A);
    Lz.prototype.K.call(this)
}
;
function tA(a, b, c) {
    c === void 0 && (c = a.size);
    return a.slice ? a.slice(b, c) : null
}
;var uA = new WeakMap;
function vA(a) {
    function b(e) {
        e = C(e);
        e.next();
        e = nc(e);
        return c(d, e)
    }
    var c = c === void 0 ? wA : c;
    var d = Pc(a);
    return function() {
        var e = Ec.apply(0, arguments)
          , f = this || E
          , g = uA.get(f);
        g || (g = {},
        uA.set(f, g));
        f = g;
        g = [this].concat(oc(e));
        e = b ? b(g) : g;
        if (Object.prototype.hasOwnProperty.call(f, e))
            f = f[e];
        else {
            var h = C(g);
            g = h.next().value;
            h = nc(h);
            g = a.apply(g, h);
            f = f[e] = g
        }
        return f
    }
}
function wA(a, b) {
    a = [a];
    for (var c = b.length - 1; c >= 0; --c)
        a.push(typeof b[c], b[c]);
    return a.join("\v")
}
;function xA(a) {
    var b = {};
    a = a.replace(/\r/g, "").split("\n");
    for (var c = 0; c < a.length; c++) {
        var d = a[c]
          , e = d.indexOf(":");
        e < 0 || (b[d.substring(0, e)] = d.substring(e + 2, d.length))
    }
    return b
}
function yA(a) {
    var b = "";
    Nr(a, function(c, d) {
        b += d + da + c + "\r\n"
    });
    return b
}
var zA = vA(function() {
    if (!E.Blob)
        return !1;
    var a = new Uint8Array(100);
    try {
        var b = new Blob([a])
    } catch (c) {
        return !1
    }
    return b.size != 100 ? !1 : !0
})
  , AA = vA(function() {
    if (!E.Blob)
        return !1;
    var a = new Uint8Array(100);
    try {
        var b = new Blob([a])
    } catch (c) {
        return !1
    }
    return tA(b, 0, 1) === null ? !1 : !0
});
function sA(a, b) {
    eA.call(this, b, a.size);
    this.v = a
}
A(sA, eA);
y = sA.prototype;
y.tb = bc("v");
y.Da = function() {
    return AA()
}
;
y.Hb = x(!0);
y.kb = x(!1);
y.Rc = function() {
    K(!1, "Form transfer not supported.");
    return null
}
;
var BA = {
    Id: ["BC", "AD"],
    Hd: ["Before Christ", "Anno Domini"],
    Qd: "JFMAMJJASOND".split(""),
    Xd: "JFMAMJJASOND".split(""),
    Pd: "January February March April May June July August September October November December".split(" "),
    Wd: "January February March April May June July August September October November December".split(" "),
    Td: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
    Zd: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
    de: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
    be: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
    Vd: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
    ae: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
    Rd: "SMTWTFS".split(""),
    Yd: "SMTWTFS".split(""),
    Ud: ["Q1", "Q2", "Q3", "Q4"],
    Sd: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
    Ed: ["AM", "PM"],
    Fd: ["EEEE, MMMM d, y", "MMMM d, y", "MMM d, y", "M/d/yy"],
    ce: ["h:mm:ss\u202fa zzzz", "h:mm:ss\u202fa z", "h:mm:ss\u202fa", "h:mm\u202fa"],
    Gd: ["{1} 'at' {0}", "{1} 'at' {0}", "{1}, {0}", "{1}, {0}"],
    zc: 6,
    ee: [5, 6],
    Ac: 5
};
BA = {
    Id: ["TCN", "SCN"],
    Hd: ["Tr\u01b0\u1edbc Ch\u00faa Gi\u00e1ng Sinh", "Sau C\u00f4ng Nguy\u00ean"],
    Qd: "1 2 3 4 5 6 7 8 9 10 11 12".split(" "),
    Xd: "1 2 3 4 5 6 7 8 9 10 11 12".split(" "),
    Pd: "th\u00e1ng 1;th\u00e1ng 2;th\u00e1ng 3;th\u00e1ng 4;th\u00e1ng 5;th\u00e1ng 6;th\u00e1ng 7;th\u00e1ng 8;th\u00e1ng 9;th\u00e1ng 10;th\u00e1ng 11;th\u00e1ng 12".split(";"),
    Wd: "Th\u00e1ng 1;Th\u00e1ng 2;Th\u00e1ng 3;Th\u00e1ng 4;Th\u00e1ng 5;Th\u00e1ng 6;Th\u00e1ng 7;Th\u00e1ng 8;Th\u00e1ng 9;Th\u00e1ng 10;Th\u00e1ng 11;Th\u00e1ng 12".split(";"),
    Td: "thg 1;thg 2;thg 3;thg 4;thg 5;thg 6;thg 7;thg 8;thg 9;thg 10;thg 11;thg 12".split(";"),
    Zd: "Th\u00e1ng 1;Th\u00e1ng 2;Th\u00e1ng 3;Th\u00e1ng 4;Th\u00e1ng 5;Th\u00e1ng 6;Th\u00e1ng 7;Th\u00e1ng 8;Th\u00e1ng 9;Th\u00e1ng 10;Th\u00e1ng 11;Th\u00e1ng 12".split(";"),
    de: "Ch\u1ee7 Nh\u1eadt;Th\u1ee9 Hai;Th\u1ee9 Ba;Th\u1ee9 T\u01b0;Th\u1ee9 N\u0103m;Th\u1ee9 S\u00e1u;Th\u1ee9 B\u1ea3y".split(";"),
    be: "Ch\u1ee7 Nh\u1eadt;Th\u1ee9 Hai;Th\u1ee9 Ba;Th\u1ee9 T\u01b0;Th\u1ee9 N\u0103m;Th\u1ee9 S\u00e1u;Th\u1ee9 B\u1ea3y".split(";"),
    Vd: "CN;Th\u1ee9 2;Th\u1ee9 3;Th\u1ee9 4;Th\u1ee9 5;Th\u1ee9 6;Th\u1ee9 7".split(";"),
    ae: "CN;Th\u1ee9 2;Th\u1ee9 3;Th\u1ee9 4;Th\u1ee9 5;Th\u1ee9 6;Th\u1ee9 7".split(";"),
    Rd: "CN T2 T3 T4 T5 T6 T7".split(" "),
    Yd: "CN T2 T3 T4 T5 T6 T7".split(" "),
    Ud: ["Q1", "Q2", "Q3", "Q4"],
    Sd: ["Qu\u00fd 1", "Qu\u00fd 2", "Qu\u00fd 3", "Qu\u00fd 4"],
    Ed: ["SA", "CH"],
    Fd: ["EEEE, d MMMM, y", "d MMMM, y", "d MMM, y", "d/M/yy"],
    ce: ["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"],
    Gd: ["'l\u00fac' {0} {1}", "'l\u00fac' {0} {1}", "{0} {1}", "{0} {1}"],
    zc: 0,
    ee: [5, 6],
    Ac: 6
};
function CA(a) {
    typeof a === m ? (this.j = DA(a, 0, 1),
    EA(this, 1)) : Oc(a) ? (this.j = DA(a.getFullYear(), a.getMonth(), a.getDate()),
    EA(this, a.getDate())) : (this.j = new Date(Date.now()),
    a = this.j.getDate(),
    this.j.setHours(0),
    this.j.setMinutes(0),
    this.j.setSeconds(0),
    this.j.setMilliseconds(0),
    EA(this, a))
}
function DA(a, b, c) {
    b = new Date(a,b,c);
    a >= 0 && a < 100 && b.setFullYear(b.getFullYear() - 1900);
    return b
}
y = CA.prototype;
y.Wc = BA.zc;
y.Xc = BA.Ac;
y.clone = function() {
    var a = new CA(this.j);
    a.Wc = this.Wc;
    a.Xc = this.Xc;
    return a
}
;
y.getFullYear = function() {
    return this.j.getFullYear()
}
;
y.getMonth = function() {
    return this.j.getMonth()
}
;
y.getDate = function() {
    return this.j.getDate()
}
;
y.set = function(a) {
    this.j = new Date(a.getFullYear(),a.getMonth(),a.getDate())
}
;
y.add = function(a) {
    if (a.o || a.l) {
        var b = this.getMonth() + a.l + a.o * 12
          , c = this.getFullYear() + Math.floor(b / 12);
        b %= 12;
        b < 0 && (b += 12);
        a: {
            switch (b) {
            case 1:
                var d = c % 4 != 0 || c % 100 == 0 && c % 400 != 0 ? 28 : 29;
                break a;
            case 5:
            case 8:
            case 10:
            case 3:
                d = 30;
                break a
            }
            d = 31
        }
        d = Math.min(d, this.getDate());
        this.j.setDate(1);
        this.j.setFullYear(c);
        this.j.setMonth(b);
        this.j.setDate(d)
    }
    a.j && (c = this.getFullYear(),
    b = c >= 0 && c <= 99 ? -1900 : 0,
    a = new Date((new Date(c,this.getMonth(),this.getDate(),12)).getTime() + a.j * 864E5),
    this.j.setDate(1),
    this.j.setFullYear(a.getFullYear() + b),
    this.j.setMonth(a.getMonth()),
    this.j.setDate(a.getDate()),
    EA(this, a.getDate()))
}
;
function FA(a) {
    var b = a.getFullYear()
      , c = b < 0 ? "-" : b >= 1E4 ? "+" : "";
    return [c + Ep(Math.abs(b), c ? 6 : 4), Ep(a.getMonth() + 1, 2), Ep(a.getDate(), 2)].join("") + ""
}
y.equals = function(a) {
    return !(!a || this.getFullYear() != a.getFullYear() || this.getMonth() != a.getMonth() || this.getDate() != a.getDate())
}
;
y.toString = function() {
    return FA(this)
}
;
function EA(a, b) {
    a.getDate() != b && a.j.setUTCHours(a.j.getUTCHours() + (a.getDate() < b ? 1 : -1))
}
y.valueOf = function() {
    return this.j.valueOf()
}
;
function GA(a, b, c, d, e, f, g, h) {
    X.call(this);
    this.J = a;
    this.C = b;
    this.P = c;
    this.L = d;
    this.D = e || null;
    this.B = f || null;
    this.I = g ? Qr(g) : {};
    this.N = !!h;
    this.G = "";
    a = new CA;
    this.l = "scotty-" + Gp() + "-" + FA(a);
    this.j = null;
    this.o = 0;
    this.A = null;
    this.H = new jt(this);
    $p(this, this.H)
}
A(GA, dA);
y = GA.prototype;
y.zd = $b("G");
y.Jc = function() {
    return this.j && this.j.status || null
}
;
y.Kc = bc("A");
y.ba = function() {
    return this.j && this.j.responseText || null
}
;
y.start = function() {
    var a = this;
    K(!this.j, "Transfer already in progress.");
    this.j = new XMLHttpRequest;
    this.j.upload && (this.j.upload.onprogress = function(b) {
        a.o = b.loaded;
        Y(a, new cA("s"))
    }
    );
    this.j.onload = function(b) {
        a.o = a.P;
        a.A = xA(b.target.getAllResponseHeaders());
        Y(a, new cA("t"))
    }
    ;
    this.j.onerror = function() {
        Y(a, new cA("u"))
    }
    ;
    this.j.open(Ba, this.J);
    Nr(this.I, function(b, c) {
        a.j.setRequestHeader(c, b)
    });
    this.j.setRequestHeader(oa, "multipart/form-data; boundary=" + this.l);
    this.j.withCredentials = this.N;
    this.j.send(HA(this))
}
;
y.cancel = function() {
    this.j && this.j.abort()
}
;
function HA(a) {
    var b = ["--", a.l, "\r\n", 'Content-Disposition: form-data; name="metadata"\r\n\r\n' + a.G + "\r\n", "--", a.l, "\r\n", 'Content-Disposition: form-data; name="Filedata"' + (a.D ? '; filename="' + a.D + '"' : "") + "\r\n" + (a.B ? "Content-Type: " + a.B + "\r\n" : "") + "Content-Transfer-Encoding: " + a.L + "\r\n", "\r\n", a.C, "\r\n", "--", a.l, "--\r\n"];
    return typeof a.C === v ? b.join("") : new Blob(b)
}
;function pA(a, b, c, d) {
    var e = null;
    zA() && (e = d ? new Blob([a],{
        type: d
    }) : new Blob([a]));
    if (e)
        var f = e.size;
    else {
        f = [];
        for (var g = 0, h = 0; h < a.length; h++) {
            var l = a.charCodeAt(h);
            l < 128 ? f[g++] = l : (l < 2048 ? f[g++] = l >> 6 | 192 : ((l & 64512) == 55296 && h + 1 < a.length && (a.charCodeAt(h + 1) & 64512) == 56320 ? (l = 65536 + ((l & 1023) << 10) + (a.charCodeAt(++h) & 1023),
            f[g++] = l >> 18 | 240,
            f[g++] = l >> 12 & 63 | 128) : f[g++] = l >> 12 | 224,
            f[g++] = l >> 6 & 63 | 128),
            f[g++] = l & 63 | 128)
        }
        f = f.length
    }
    eA.call(this, c, f);
    this.D = f;
    this.A = e;
    this.C = a;
    this.v = b;
    this.B = d || void 0
}
Xc(pA, eA);
y = pA.prototype;
y.tb = bc("A");
y.Da = function() {
    return this.v != db && AA()
}
;
y.Hb = function() {
    return this.v != db && zA()
}
;
y.kb = x(!0);
y.Rc = function(a, b, c) {
    return new GA(a,this.A || this.C,this.D,this.v == db ? db : "binary",this.l,this.B,b,c)
}
;
function IA(a) {
    K(a.kb(), "Multipart transfer must be supported.");
    fA.call(this, a);
    this.j = null;
    this.o = "Ready";
    this.B = "";
    this.A = new jt(this);
    $p(this, this.A)
}
A(IA, fA);
y = IA.prototype;
y.Ub = function() {
    return this.j && this.j.Jc() || null
}
;
y.ba = function() {
    return this.j && this.j.ba() || null
}
;
y.Vb = function() {
    return this.j && this.j.Kc() || null
}
;
y.Tb = function() {
    return this.B || null
}
;
y.start = function(a, b, c, d, e) {
    K(this.o == "Ready", "Can only start an upload once.");
    this.o = La;
    a = new Wr(a);
    a.j.set("upload_protocol", "multipart");
    a = a.toString();
    this.j = this.l.Rc(a, c, e);
    this.j.zd(d);
    lt(this.A, this.j, "s", this.Nd);
    lt(this.A, this.j, "t", this.Se);
    lt(this.A, this.j, ["u", "v"], this.Re);
    this.j.start()
}
;
y.cancel = function() {
    K(this.o == La, "Can only cancel an upload in progress.");
    this.j && this.j.cancel();
    this.o = la;
    Y(this, new gA(hA.yc))
}
;
y.Nd = function() {
    Y(this, new gA(hA.Wb))
}
;
y.Se = function() {
    this.o = na;
    Y(this, new gA(hA.ub))
}
;
y.Re = function() {
    this.B = Ka;
    this.o = "Error";
    Y(this, new gA(hA.ERROR))
}
;
function JA() {}
;function KA() {
    Qv.call(this)
}
A(KA, Qv);
KA.prototype.bc = function() {
    var a = Qv.prototype.bc.call(this);
    a.upload && (a.upload.onprogress = F(this.Z, this));
    return a
}
;
KA.prototype.Z = function(a) {
    K(a.type === Eb, "goog.net.EventType.PROGRESS is of the same type as raw XHR progress.");
    Y(this, a)
}
;
function LA(a, b) {
    X.call(this);
    this.C = a;
    this.hc = this.l = null;
    this.o = 0;
    this.D = Infinity;
    this.G = b || 5E6;
    this.j = null;
    this.A = up("goog.crypt.BlobHasher")
}
Xc(LA, X);
LA.prototype.hash = function(a) {
    this.abort();
    this.C.reset();
    this.l = a;
    this.hc = null;
    this.o = 0;
    Y(this, "started");
    MA(this)
}
;
function NA(a, b) {
    K(b >= 0, "Hashing limit must be non-negative.");
    a.D = b;
    a.l && !a.j && MA(a)
}
LA.prototype.abort = function() {
    this.j && (this.j.abort(),
    this.j = null);
    this.l && (this.l = null,
    Y(this, "abort"))
}
;
function MA(a) {
    K(a.l, "A hash computation must be in progress.");
    if (a.o < a.l.size)
        if (a.D <= a.o)
            Y(a, "throttled");
        else {
            a.j = new FileReader;
            a.j.onload = F(a.H, a);
            a.j.onerror = F(a.B, a);
            var b = Math.min(Math.min(a.D, a.l.size) - a.o, a.G)
              , c = tA(a.l, a.o, a.o + b);
            c && c.size == b ? a.j.readAsArrayBuffer ? a.j.readAsArrayBuffer(c) : a.j.readAsBinaryString ? a.j.readAsBinaryString(c) : (xp(a.A, "Failed calling the chunk reader"),
            a.B()) : (xp(a.A, "Failed slicing the blob"),
            a.B())
        }
    else {
        b = a.C;
        c = Array((b.o < 56 ? b.l : b.l * 2) - b.o);
        c[0] = 128;
        for (var d = 1; d < c.length - 8; ++d)
            c[d] = 0;
        d = b.v * 8;
        for (var e = c.length - 8; e < c.length; ++e)
            c[e] = d & 255,
            d /= 256;
        OA(b, c);
        c = Array(16);
        for (e = d = 0; e < 4; ++e)
            for (var f = 0; f < 32; f += 8)
                c[d++] = b.j[e] >>> f & 255;
        a.hc = c;
        a.l = null;
        Y(a, hb)
    }
}
LA.prototype.H = function() {
    V(this.A, "Successfully loaded a chunk");
    var a = null;
    this.j.result instanceof Array || typeof this.j.result === v ? a = this.j.result : E.ArrayBuffer && E.Uint8Array && this.j.result instanceof ArrayBuffer && (a = new Uint8Array(this.j.result));
    a ? (OA(this.C, a),
    this.o += a.length,
    this.j = null,
    Y(this, Eb),
    MA(this)) : (xp(this.A, "Failed reading the chunk"),
    this.B())
}
;
LA.prototype.B = function() {
    this.l = this.j = null;
    Y(this, kb)
}
;
function PA() {
    this.l = -1
}
;function QA() {
    this.l = 64;
    this.j = Array(4);
    this.A = Array(this.l);
    this.v = this.o = 0;
    this.reset()
}
Xc(QA, PA);
QA.prototype.reset = function() {
    this.j[0] = 1732584193;
    this.j[1] = 4023233417;
    this.j[2] = 2562383102;
    this.j[3] = 271733878;
    this.v = this.o = 0
}
;
function RA(a, b, c) {
    c || (c = 0);
    var d = Array(16);
    if (typeof b === v)
        for (var e = 0; e < 16; ++e)
            d[e] = b.charCodeAt(c++) | b.charCodeAt(c++) << 8 | b.charCodeAt(c++) << 16 | b.charCodeAt(c++) << 24;
    else
        for (e = 0; e < 16; ++e)
            d[e] = b[c++] | b[c++] << 8 | b[c++] << 16 | b[c++] << 24;
    b = a.j[0];
    c = a.j[1];
    e = a.j[2];
    var f = a.j[3];
    var g = b + (f ^ c & (e ^ f)) + d[0] + 3614090360 & 4294967295;
    b = c + (g << 7 & 4294967295 | g >>> 25);
    g = f + (e ^ b & (c ^ e)) + d[1] + 3905402710 & 4294967295;
    f = b + (g << 12 & 4294967295 | g >>> 20);
    g = e + (c ^ f & (b ^ c)) + d[2] + 606105819 & 4294967295;
    e = f + (g << 17 & 4294967295 | g >>> 15);
    g = c + (b ^ e & (f ^ b)) + d[3] + 3250441966 & 4294967295;
    c = e + (g << 22 & 4294967295 | g >>> 10);
    g = b + (f ^ c & (e ^ f)) + d[4] + 4118548399 & 4294967295;
    b = c + (g << 7 & 4294967295 | g >>> 25);
    g = f + (e ^ b & (c ^ e)) + d[5] + 1200080426 & 4294967295;
    f = b + (g << 12 & 4294967295 | g >>> 20);
    g = e + (c ^ f & (b ^ c)) + d[6] + 2821735955 & 4294967295;
    e = f + (g << 17 & 4294967295 | g >>> 15);
    g = c + (b ^ e & (f ^ b)) + d[7] + 4249261313 & 4294967295;
    c = e + (g << 22 & 4294967295 | g >>> 10);
    g = b + (f ^ c & (e ^ f)) + d[8] + 1770035416 & 4294967295;
    b = c + (g << 7 & 4294967295 | g >>> 25);
    g = f + (e ^ b & (c ^ e)) + d[9] + 2336552879 & 4294967295;
    f = b + (g << 12 & 4294967295 | g >>> 20);
    g = e + (c ^ f & (b ^ c)) + d[10] + 4294925233 & 4294967295;
    e = f + (g << 17 & 4294967295 | g >>> 15);
    g = c + (b ^ e & (f ^ b)) + d[11] + 2304563134 & 4294967295;
    c = e + (g << 22 & 4294967295 | g >>> 10);
    g = b + (f ^ c & (e ^ f)) + d[12] + 1804603682 & 4294967295;
    b = c + (g << 7 & 4294967295 | g >>> 25);
    g = f + (e ^ b & (c ^ e)) + d[13] + 4254626195 & 4294967295;
    f = b + (g << 12 & 4294967295 | g >>> 20);
    g = e + (c ^ f & (b ^ c)) + d[14] + 2792965006 & 4294967295;
    e = f + (g << 17 & 4294967295 | g >>> 15);
    g = c + (b ^ e & (f ^ b)) + d[15] + 1236535329 & 4294967295;
    c = e + (g << 22 & 4294967295 | g >>> 10);
    g = b + (e ^ f & (c ^ e)) + d[1] + 4129170786 & 4294967295;
    b = c + (g << 5 & 4294967295 | g >>> 27);
    g = f + (c ^ e & (b ^ c)) + d[6] + 3225465664 & 4294967295;
    f = b + (g << 9 & 4294967295 | g >>> 23);
    g = e + (b ^ c & (f ^ b)) + d[11] + 643717713 & 4294967295;
    e = f + (g << 14 & 4294967295 | g >>> 18);
    g = c + (f ^ b & (e ^ f)) + d[0] + 3921069994 & 4294967295;
    c = e + (g << 20 & 4294967295 | g >>> 12);
    g = b + (e ^ f & (c ^ e)) + d[5] + 3593408605 & 4294967295;
    b = c + (g << 5 & 4294967295 | g >>> 27);
    g = f + (c ^ e & (b ^ c)) + d[10] + 38016083 & 4294967295;
    f = b + (g << 9 & 4294967295 | g >>> 23);
    g = e + (b ^ c & (f ^ b)) + d[15] + 3634488961 & 4294967295;
    e = f + (g << 14 & 4294967295 | g >>> 18);
    g = c + (f ^ b & (e ^ f)) + d[4] + 3889429448 & 4294967295;
    c = e + (g << 20 & 4294967295 | g >>> 12);
    g = b + (e ^ f & (c ^ e)) + d[9] + 568446438 & 4294967295;
    b = c + (g << 5 & 4294967295 | g >>> 27);
    g = f + (c ^ e & (b ^ c)) + d[14] + 3275163606 & 4294967295;
    f = b + (g << 9 & 4294967295 | g >>> 23);
    g = e + (b ^ c & (f ^ b)) + d[3] + 4107603335 & 4294967295;
    e = f + (g << 14 & 4294967295 | g >>> 18);
    g = c + (f ^ b & (e ^ f)) + d[8] + 1163531501 & 4294967295;
    c = e + (g << 20 & 4294967295 | g >>> 12);
    g = b + (e ^ f & (c ^ e)) + d[13] + 2850285829 & 4294967295;
    b = c + (g << 5 & 4294967295 | g >>> 27);
    g = f + (c ^ e & (b ^ c)) + d[2] + 4243563512 & 4294967295;
    f = b + (g << 9 & 4294967295 | g >>> 23);
    g = e + (b ^ c & (f ^ b)) + d[7] + 1735328473 & 4294967295;
    e = f + (g << 14 & 4294967295 | g >>> 18);
    g = c + (f ^ b & (e ^ f)) + d[12] + 2368359562 & 4294967295;
    c = e + (g << 20 & 4294967295 | g >>> 12);
    g = b + (c ^ e ^ f) + d[5] + 4294588738 & 4294967295;
    b = c + (g << 4 & 4294967295 | g >>> 28);
    g = f + (b ^ c ^ e) + d[8] + 2272392833 & 4294967295;
    f = b + (g << 11 & 4294967295 | g >>> 21);
    g = e + (f ^ b ^ c) + d[11] + 1839030562 & 4294967295;
    e = f + (g << 16 & 4294967295 | g >>> 16);
    g = c + (e ^ f ^ b) + d[14] + 4259657740 & 4294967295;
    c = e + (g << 23 & 4294967295 | g >>> 9);
    g = b + (c ^ e ^ f) + d[1] + 2763975236 & 4294967295;
    b = c + (g << 4 & 4294967295 | g >>> 28);
    g = f + (b ^ c ^ e) + d[4] + 1272893353 & 4294967295;
    f = b + (g << 11 & 4294967295 | g >>> 21);
    g = e + (f ^ b ^ c) + d[7] + 4139469664 & 4294967295;
    e = f + (g << 16 & 4294967295 | g >>> 16);
    g = c + (e ^ f ^ b) + d[10] + 3200236656 & 4294967295;
    c = e + (g << 23 & 4294967295 | g >>> 9);
    g = b + (c ^ e ^ f) + d[13] + 681279174 & 4294967295;
    b = c + (g << 4 & 4294967295 | g >>> 28);
    g = f + (b ^ c ^ e) + d[0] + 3936430074 & 4294967295;
    f = b + (g << 11 & 4294967295 | g >>> 21);
    g = e + (f ^ b ^ c) + d[3] + 3572445317 & 4294967295;
    e = f + (g << 16 & 4294967295 | g >>> 16);
    g = c + (e ^ f ^ b) + d[6] + 76029189 & 4294967295;
    c = e + (g << 23 & 4294967295 | g >>> 9);
    g = b + (c ^ e ^ f) + d[9] + 3654602809 & 4294967295;
    b = c + (g << 4 & 4294967295 | g >>> 28);
    g = f + (b ^ c ^ e) + d[12] + 3873151461 & 4294967295;
    f = b + (g << 11 & 4294967295 | g >>> 21);
    g = e + (f ^ b ^ c) + d[15] + 530742520 & 4294967295;
    e = f + (g << 16 & 4294967295 | g >>> 16);
    g = c + (e ^ f ^ b) + d[2] + 3299628645 & 4294967295;
    c = e + (g << 23 & 4294967295 | g >>> 9);
    g = b + (e ^ (c | ~f)) + d[0] + 4096336452 & 4294967295;
    b = c + (g << 6 & 4294967295 | g >>> 26);
    g = f + (c ^ (b | ~e)) + d[7] + 1126891415 & 4294967295;
    f = b + (g << 10 & 4294967295 | g >>> 22);
    g = e + (b ^ (f | ~c)) + d[14] + 2878612391 & 4294967295;
    e = f + (g << 15 & 4294967295 | g >>> 17);
    g = c + (f ^ (e | ~b)) + d[5] + 4237533241 & 4294967295;
    c = e + (g << 21 & 4294967295 | g >>> 11);
    g = b + (e ^ (c | ~f)) + d[12] + 1700485571 & 4294967295;
    b = c + (g << 6 & 4294967295 | g >>> 26);
    g = f + (c ^ (b | ~e)) + d[3] + 2399980690 & 4294967295;
    f = b + (g << 10 & 4294967295 | g >>> 22);
    g = e + (b ^ (f | ~c)) + d[10] + 4293915773 & 4294967295;
    e = f + (g << 15 & 4294967295 | g >>> 17);
    g = c + (f ^ (e | ~b)) + d[1] + 2240044497 & 4294967295;
    c = e + (g << 21 & 4294967295 | g >>> 11);
    g = b + (e ^ (c | ~f)) + d[8] + 1873313359 & 4294967295;
    b = c + (g << 6 & 4294967295 | g >>> 26);
    g = f + (c ^ (b | ~e)) + d[15] + 4264355552 & 4294967295;
    f = b + (g << 10 & 4294967295 | g >>> 22);
    g = e + (b ^ (f | ~c)) + d[6] + 2734768916 & 4294967295;
    e = f + (g << 15 & 4294967295 | g >>> 17);
    g = c + (f ^ (e | ~b)) + d[13] + 1309151649 & 4294967295;
    c = e + (g << 21 & 4294967295 | g >>> 11);
    g = b + (e ^ (c | ~f)) + d[4] + 4149444226 & 4294967295;
    b = c + (g << 6 & 4294967295 | g >>> 26);
    g = f + (c ^ (b | ~e)) + d[11] + 3174756917 & 4294967295;
    f = b + (g << 10 & 4294967295 | g >>> 22);
    g = e + (b ^ (f | ~c)) + d[2] + 718787259 & 4294967295;
    e = f + (g << 15 & 4294967295 | g >>> 17);
    g = c + (f ^ (e | ~b)) + d[9] + 3951481745 & 4294967295;
    c = e + (g << 21 & 4294967295 | g >>> 11);
    a.j[0] = a.j[0] + b & 4294967295;
    a.j[1] = a.j[1] + c & 4294967295;
    a.j[2] = a.j[2] + e & 4294967295;
    a.j[3] = a.j[3] + f & 4294967295
}
function OA(a, b) {
    if (c === void 0)
        var c = b.length;
    for (var d = c - a.l, e = a.A, f = a.o, g = 0; g < c; ) {
        if (f == 0)
            for (; g <= d; )
                RA(a, b, g),
                g += a.l;
        if (typeof b === v)
            for (; g < c; ) {
                if (e[f++] = b.charCodeAt(g++),
                f == a.l) {
                    RA(a, e);
                    f = 0;
                    break
                }
            }
        else
            for (; g < c; )
                if (e[f++] = b[g++],
                f == a.l) {
                    RA(a, e);
                    f = 0;
                    break
                }
    }
    a.o = f;
    a.v += c
}
;function SA(a, b) {
    K(a.Da() || a.Hb(), "Chunk or raw transfer must be supported.");
    fA.call(this, a);
    this.Ab = this.I = this.Bb = this.gb = null;
    this.Z = !1;
    this.la = this.G = null;
    this.N = a.j;
    this.H = 0;
    this.ga = null;
    this.Ba = this.xa = 0;
    this.j = "Ready";
    this.Y = this.fb = this.Ja = null;
    this.U = "";
    this.L = this.D = this.J = this.zb = null;
    this.C = new jt(this);
    $p(this, this.C);
    this.na = new jt(this);
    $p(this, this.na);
    this.B = 0;
    this.o = this.ra = this.P = null;
    this.ca = b || Number.MAX_VALUE;
    this.A = up("scotty.protocol.ResumableProtocol")
}
Xc(SA, fA);
y = SA.prototype;
y.Ub = bc("Ja");
y.ba = bc("fb");
y.Vb = bc("Y");
y.Tb = function() {
    return this.U ? this.U + da + this.zb : null
}
;
y.start = function(a, b, c, d, e) {
    K(this.j == "Ready" || this.j == la, "Can only start protocol in state READY or CANCEL.");
    K(b == Ca || b == Ba, "HTTP method must be PUT or POST.");
    this.gb = a;
    this.Bb = b;
    this.I = Qr(c);
    this.Ab = d;
    this.Z = !!e;
    this.j = qa;
    this.I["X-Goog-Upload-Protocol"] = "resumable";
    this.I["X-Goog-Upload-Command"] = "start";
    this.l.j != null && (this.I["X-Goog-Upload-Content-Length"] = this.l.j);
    this.l.l != null && /^[\040-\176]*$/.test(this.l.l) && (this.I["X-Goog-Upload-File-Name"] = this.l.l);
    this.l.o && TA(this);
    this.xd()
}
;
y.cancel = function() {
    K(this.j == qa || this.j == La, "Can only cancel protocol in state START or TRANSFER.");
    pt(this.C);
    pt(this.na);
    this.j == qa && this.J && this.J.abort();
    this.j == La && (this.D && this.D.abort(),
    this.L && this.L.abort(),
    this.P && E.clearTimeout(this.P));
    this.o && this.o.abort();
    V(this.A, "Sending cancel request to url: " + this.G);
    wt(new Qv, this.la, Ca, "", {
        "X-Goog-Upload-Command": gb
    });
    this.j = la;
    this.B = this.H = 0;
    Y(this, new gA(hA.yc))
}
;
function TA(a) {
    var b = a.l.tb();
    b && (a.o = new LA(new QA),
    lt(a.na, a.o, hb, function(c) {
        this.ra = Lg(c.target.hc);
        this.o = null
    }),
    NA(a.o, 1048576),
    a.o.hash(b))
}
y.xd = function() {
    V(this.A, "Sending start request to url: " + this.gb);
    this.J = new KA;
    pt(this.C);
    lt(this.C, this.J, hb, this.Oe);
    this.J.C = this.Z;
    wt(this.J, this.gb, K(this.Bb), this.Ab, this.I)
}
;
y.Oe = function(a) {
    var b = a.target.ma()
      , c = a.target.ba();
    a = xA(a.target.getAllResponseHeaders());
    V(this.A, "Got start response. " + UA(b, a, c));
    var d = VA(a, Sa)
      , e = VA(a, "X-Goog-Upload-URL");
    if (d == "final")
        this.Ja = b,
        this.Y = a,
        this.fb = c,
        this.j = na,
        Y(this, new gA(hA.ub));
    else if (b == 200 && d == "active" && e) {
        this.G = e;
        this.la = VA(a, "X-Goog-Upload-Control-URL") || null;
        e = VA(a, "X-Goog-Upload-Chunk-Granularity") || null;
        d = 1;
        if (e && (d = parseInt(e, 10),
        isNaN(d) || d <= 0)) {
            WA(this, pa, "Invalid chunk granularity: " + e + ". " + UA(b, a, c));
            return
        }
        b = this.l.j;
        this.N = Math.floor(b / d) * d;
        this.ga = Math.floor(1073741824 / d) * d;
        this.l.Da() || (this.ga = b,
        this.N != b && (this.N = 0));
        this.j = La;
        this.B = 0;
        this.yd(0)
    } else
        b >= 400 && b < 500 ? WA(this, pa, ma + UA(b, a, c)) : (XA(this, this.xd),
        this.B++)
}
;
y.yd = function(a) {
    var b = this.l
      , c = b.j;
    b.Da() || a == c || (a = 0);
    var d = a >= this.N
      , e = d ? c : Math.min(this.N, this.ga + a);
    this.xa = a;
    this.Ba = e;
    var f = this.G
      , g = {
        "X-Goog-Upload-Command": "upload" + (d ? ", finalize" : ""),
        "X-Goog-Upload-Offset": a
    };
    d && (this.ra ? g["X-Goog-Upload-Entity-MD5"] = this.ra : this.o && (this.o.abort(),
    this.o = null));
    this.D = new KA;
    this.D.C = this.Z;
    pt(this.C);
    lt(this.C, this.D, Eb, this.Od);
    lt(this.C, this.D, hb, this.Qe);
    a == c ? (V(this.A, "Sending 0-byte finalize request to url: " + f),
    wt(this.D, this.G, Ca, "", g)) : (c = this.l.tb(),
    K(c, "Blob must be non-null."),
    b.Da() ? (V(this.A, "Sending chunk transfer request [" + a + ", " + e + ") to url: " + f),
    K(a >= 0 && e <= c.size && a <= e, "Start and end are not valid."),
    wt(this.D, this.G, Ca, tA(c, a, e), g)) : (V(this.A, "Sending raw transfer request to url: " + f),
    wt(this.D, this.G, Ca, c, g)))
}
;
y.Od = function(a) {
    this.H = this.xa + a.loaded;
    Y(this, new gA(hA.Wb));
    this.o && NA(this.o, this.H + 1048576)
}
;
y.Qe = function(a) {
    var b = a.target.ma();
    if (b === void 0 || b == -1)
        XA(this, this.wd),
        this.B++;
    else {
        var c = xA(a.target.getAllResponseHeaders());
        a = a.target.ba();
        this.H = this.Ba;
        V(this.A, "Got transfer response. " + UA(b, c, a));
        YA(this, b, c, a, !0)
    }
}
;
y.wd = function() {
    V(this.A, "Sending query request to url: " + this.G);
    this.L = new KA;
    pt(this.C);
    lt(this.C, this.L, hb, this.Me);
    wt(this.L, this.la, Ca, "", {
        "X-Goog-Upload-Command": "query"
    })
}
;
y.Me = function(a) {
    var b = a.target;
    a = b.ma();
    var c = xA(b.getAllResponseHeaders());
    b = b.ba();
    V(this.A, "Got query response. " + UA(a, c, b));
    YA(this, a, c, b, !1)
}
;
function YA(a, b, c, d, e) {
    var f = VA(c, Sa);
    if (f == "final")
        a.j = na,
        a.B = 0,
        a.Ja = b,
        a.Y = c,
        a.fb = d,
        Y(a, new gA(hA.ub));
    else {
        var g = parseInt(VA(c, "X-Goog-Upload-Size-Received"), 10);
        e && isNaN(g) && (g = a.Ba);
        b != 200 || f != "active" || isNaN(g) ? (b >= 400 && b < 500 && WA(a, Ka, ma + UA(b, c, d)),
        XA(a, a.wd),
        a.B++) : (a.H = g,
        g > a.xa && (a.B = 0),
        XA(a, F(a.yd, a, g)))
    }
}
function WA(a, b, c) {
    a.U = b;
    a.zb = c;
    a.j = "Error";
    a.H = 0;
    Y(a, new iA(hA.ERROR,b == Ma))
}
function XA(a, b) {
    var c = [0, 5E3, 1E4, 15E3, 3E4, 6E4]
      , d = 0;
    d = a.B < c.length ? c[a.B] : c[c.length - 1];
    if (d > a.ca)
        WA(a, Ma, "Max retries exceeded");
    else {
        a.ca !== void 0 && (d = Math.min(Math.max(d, 0), a.ca));
        var e = F(b, a);
        d > 0 ? a.P = dt(function() {
            this.P = null;
            e()
        }, d, a) : e()
    }
}
function UA(a, b, c) {
    return "Response code: " + a + "\nHeaders:\n" + yA(b) + "\nBody:\n" + c
}
function VA(a, b) {
    return a[b] || a[b.toLowerCase()]
}
;function ZA(a) {
    this.j = a
}
A(ZA, JA);
function qA(a, b) {
    if (b.Da() && b.kb())
        return b.j > 2097152 ? new SA(b,a.j) : new IA(b);
    if (b.Da())
        return new SA(b,a.j);
    if (b.kb())
        return new IA(b);
    if (b.Hb())
        return new SA(b,a.j);
    throw Error("Item supports no transfer types.");
}
;function $A() {
    X.call(this)
}
A($A, X);
function rA() {
    ts.call(this, "F")
}
A(rA, ts);
function aB(a) {
    X.call(this);
    this.j = a
}
A(aB, $A);
function bB() {
    this.j = new ZA(void 0)
}
;function cB() {
    K(E.JSON !== void 0, "JSON not defined")
}
cB.prototype.stringify = function(a) {
    return E.JSON.stringify(a, void 0)
}
;
cB.prototype.parse = function(a) {
    return E.JSON.parse(a, void 0)
}
;
function dB(a, b, c, d, e, f) {
    Az.call(this, b, c, d, e);
    this.na = a;
    this.Ia = f || yq(d, "docs-net-udur");
    this.xa = new aB(new bB);
    this.L = new cB;
    this.Ja = xq(d, "docs-net-udpt")
}
A(dB, Az);
dB.prototype.P = function() {
    if (!this.H)
        throw Error("Scotty request cannot be built when upload is not allowed for a request.");
    var a = this.D;
    a <= 0 && (a = this.Ja);
    if (this.Y)
        throw Error("Scotty request is not compatible with forUserContent");
    var b = Ez(this);
    var c = this.L;
    if (!Bz(this))
        throw Error("GetUploadContent() called when upload content is not available");
    if (typeof this.j === v)
        c = this.j;
    else if (Gz && this.j instanceof Blob)
        c = this.j;
    else {
        K(!!c, "Need JSON Stringifier to convert query array to string");
        for (var d = this.j, e = new zz("{"), f = 0; f < d.length; f += 2)
            f > 0 && e.Qa(","),
            e.Qa(c.stringify(d[f])).Qa(":").Qa(c.stringify(d[f + 1]));
        e.Qa("}");
        c = e.toString()
    }
    return new nA(b,c,this.A,this.B,this.v,this.C,this.X,this.J,this.N,this.U,a,this.Ia,this.xa,this.L,this.I,this.G,this.o)
}
;
dB.prototype.ga = function(a) {
    if (!this.na)
        throw Error(Na + Dz(this));
    eB(this.na, a)
}
;
function fB(a, b, c, d, e, f) {
    this.A = a;
    this.v = b;
    this.j = c;
    this.o = d;
    this.l = e;
    this.B = f
}
fB.prototype.errorCode = bc("l");
function gB(a, b, c, d, e, f, g, h, l, n, p, r, u, w, O, B, U, ha) {
    Lz.call(this, a, b, c, d, e, f, g, h, l, n, p, r, u, w, O, ha);
    this.B = B;
    this.j = null;
    this.o = new jt(this);
    this.A = U
}
A(gB, Lz);
gB.prototype.Ic = function(a) {
    var b = this;
    K(this.j == null, "Resending request when previous attempt is still in progress.");
    this.j = this.B();
    mt(this.o, this.j, function() {
        zp(b.Hc, "handleXhrComplete_() for " + b.aa);
        b.aa.includes("/save");
        var e = b.Ma
          , f = b.j;
        try {
            var g = f.B == "" ? f.ba() : aw(f)
        } catch (U) {
            g = ""
        }
        var h = f.B;
        a: {
            try {
                if (f.j && $v(f) == 4) {
                    var l = f.j.getResponseHeader(oa);
                    var n = l === null ? void 0 : l
                } else
                    n = void 0;
                var p = n;
                break a
            } catch (U) {
                p = null;
                break a
            }
            p = void 0
        }
        var r = new fB(g,h,p,f.ma(),f.A,f.getAllResponseHeaders());
        f = Mz(b);
        p = r.A;
        n = Vz(r.v);
        l = r.j;
        g = r.o;
        h = r.errorCode();
        var u = {};
        r = C(r.B.split("\r\n"));
        var w = r.next();
        try {
            for (; !w.done; w = r.next()) {
                var O = w.value;
                if (!Ng(Fp(O))) {
                    var B = O.indexOf(da);
                    B == -1 ? yp(aA, "Unable to parse line: " + O) : u[O.substr(0, B)] = O.substr(B + 2)
                }
            }
        } finally {
            rc(r, w)
        }
        O = new Uz(p,n,l,g,h,u,f);
        e.call(b, O)
    });
    this.j.G = Math.max(0, this.H);
    this.J != Ob && (this.j.B = hB(this.J));
    this.j.C = this.ca;
    var c = Sp(this.Z + this.aa, a.j.j)
      , d = {};
    Object.assign(d, this.I, Qr(a.o));
    this.A && this.H > 0 && (d["X-Client-Deadline-Ms"] = this.H + (c.includes("/delta") ? 5E3 : 0));
    this.aa.includes("/save");
    wt(this.j, c, this.G, this.C, d)
}
;
gB.prototype.reset = function() {
    this.j && (this.j.dispose(),
    this.j = null)
}
;
gB.prototype.K = function() {
    Yp(this.o);
    Lz.prototype.K.call(this)
}
;
function hB(a) {
    switch (a) {
    case bb:
        return bb;
    case "blob":
        return "blob";
    case jb:
        return jb;
    default:
        return ""
    }
}
;function iB(a, b, c, d, e, f) {
    Az.call(this, b, c, d, e);
    this.L = a;
    this.na = !!f
}
A(iB, Az);
iB.prototype.P = function() {
    var a = this.D;
    a < 0 && (a = this.na ? 4E4 : 2E4);
    return new gB(Ez(this),Cz(this),Fz(this),this.A,this.B,this.v,this.C,this.X,this.J,this.N,this.U,a,this.l,this.I,this.G,function() {
        return new Qv
    }
    ,wq(this.o, "docs-ecdh") && !this.la,void 0)
}
;
iB.prototype.ga = function(a) {
    if (!this.L)
        throw Error(Na + Dz(this));
    eB(this.L, a)
}
;
function jB(a, b, c, d, e, f) {
    Az.call(this, b, c, d, e);
    this.L = a;
    this.Ia = wq(d, "docs-net-usud");
    this.xa = xq(d, "docs-net-udmi");
    this.na = f
}
A(jB, Az);
jB.prototype.P = function() {
    var a = null, b;
    if (b = this.Ia && this.H) {
        if (!Bz(this))
            throw Error("GetUploadContentLength() called when upload content is not available");
        if (Array.isArray(this.j)) {
            b = 0;
            for (var c = this.j, d = 0; d < c.length; d++) {
                var e = c[d];
                typeof e === v && (b += e.length)
            }
        } else
            b = Gz && this.j instanceof Blob ? this.j.size : this.j.length;
        b = b > this.xa
    }
    b && (a = new dB(this.L,Ez(this),this.Ba,this.o,this.ra,this.na));
    a == null && (a = new iB(this.L,Ez(this),this.Ba,this.o,this.ra));
    b = a;
    b.M = this.M;
    b.Z = this.Z;
    b.j = this.j;
    b.l = this.l;
    b.N = this.N;
    b.A = this.A;
    b.U = this.U;
    b.v = this.v;
    b.C = this.C;
    b.X = this.X;
    b.J = this.J;
    b.B = this.B;
    b.D = this.D;
    b.H = this.H;
    b.I = Qr(this.I);
    b.Y = this.Y;
    b.G = this.G;
    b.la = this.la;
    return a.P()
}
;
jB.prototype.ga = function(a) {
    if (!this.L)
        throw Error(Na + Dz(this));
    eB(this.L, a)
}
;
function kB() {
    this.j = void 0
}
;function lB(a, b) {
    this.l = a;
    this.j = b
}
lB.prototype.notify = function(a, b) {
    this.j != null && this.j.l() && this.j.j() || this.l.notify(a, b)
}
;
function mB(a) {
    this.j = a ? Qr(a) : {};
    this.l = null
}
mB.prototype.ta = function() {
    return this.j.token || null
}
;
function nB(a, b, c, d) {
    X.call(this);
    this.o = d ? Qr(d) : oB;
    this.A = "";
    this.l = up("docs.net.RequestUrlState");
    if (!c) {
        c = a.get(tb);
        typeof c === v ? a = JSON.parse(c) : (c = I({}, iq, hq),
        uq(a, tb),
        vq(a, tb) ? (a = a.get(tb),
        a = a != null ? a : c) : a = c,
        a = I(a, iq, hq));
        c = a;
        a = Or(c, String);
        if (d = E._docs_coldstart_url) {
            a: {
                try {
                    var e = String.fromCodePoint(35);
                    var f = d.indexOf(e);
                    var g = f < 0 ? null : pg(d, f + 1 | 0);
                    var h = g == null ? null : decodeURIComponent(g)
                } catch (l) {
                    h = ud(l);
                    if (Ad(h)) {
                        h = I({}, kq, jq);
                        break a
                    }
                    throw h.j;
                }
                g = h;
                h = I({}, kq, jq);
                if (g)
                    for (Nn(!0),
                    g = g.split("&"),
                    f = 0; f < g.length; f++)
                        e = g[f],
                        Nn(!0),
                        d = e.split("="),
                        d.length == 2 && (e = Ir(I(d[0], Ef, Jf)),
                        d = Ir(I(d[1], Ef, Jf)),
                        e && d && (h[e] = d !== void 0 ? d : null))
            }
            h = h.resourcekey
        } else
            h = null;
        h ? a.resourcekey = h : c.resourcekey && (c = Gl(Sl, hk(c.resourcekey)),
        c = fl(c, 2, void 0, Hk),
        c != null && (a.resourcekey = c));
        c = new mB(a)
    }
    this.j = c;
    b = (b || E).location.href;
    a = b.search(Up);
    c = Tp(b, 0, "authkey", a);
    if (c < 0)
        b = null;
    else {
        h = b.indexOf("&", c);
        if (h < 0 || h > a)
            h = a;
        b = decodeURIComponent(b.slice(c + 8, h !== -1 ? h : 0).replace(/\+/g, " "))
    }
    b && (V(this.l, "setAuthKey(" + b + ")"),
    pB(this, "authkey", b))
}
A(nB, X);
function qB(a, b) {
    V(a.l, "setUrlPrefix(" + b + ")");
    var c = og(b, rb) || og(b, "http://");
    c = og(b, "/") || og(b, "//") || c;
    var d = !b.endsWith(I(of("/"), Ef, Jf));
    if (!(b.length == 0 || c && d))
        throw Ln().j;
    a.A = b
}
function rB(a, b) {
    V(a.l, "setTfeParam(" + b + ")");
    pB(a, "tfe", b)
}
function pB(a, b, c) {
    var d = a.j;
    if (c) {
        if (d.j[b] = c,
        d.l && (b = d.ta()))
            d.l.va(b),
            d.l = null
    } else
        delete d.j[b];
    Y(a, "H")
}
nB.prototype.ta = function() {
    return this.j.ta()
}
;
var sB = new function() {
    this.j = {};
    this.j["X-Same-Domain"] = "1"
}
  , oB = Qr(sB.j);
function tB(a, b, c) {
    X.call(this);
    var d = this;
    this.o = a;
    this.B = function(e) {
        return void rB(d.o, e)
    }
    ;
    this.j = null;
    up("docs.net.BrowserChannelService");
    this.A = new jt(this);
    lt(this.A, this.o, "H", this.C);
    if (this.l = c)
        tw(this.l, "browserChannel_lastStatusCode", function() {
            return d.j ? String(d.j.B()) : Ab
        }),
        tw(this.l, "browserChannel_currentError", function() {
            return d.j ? String(d.j.A()) : Ab
        }),
        tw(this.l, "browserChannel_channel_id", function() {
            return d.j ? String(d.j.v()) : Ab
        });
    c == null || wq(b, "icso")
}
A(tB, X);
function uB(a) {
    K(a.j != null, "isBrowserChannelOk() called when browser channel is not present");
    return a.j.l()
}
tB.prototype.C = function() {
    this.j && this.j.C(this.o.j.j)
}
;
tB.prototype.K = function() {
    this.j && !this.j.ea() && (this.j.unsubscribe("tfe_changed", this.B),
    this.j.j(),
    this.j.D());
    this.j = null;
    Yp(this.A);
    X.prototype.K.call(this)
}
;
function vB(a, b) {
    W.call(this);
    this.j = [];
    this.A = a;
    (this.o = b || null) && $p(this, this.o);
    this.l = this.v = null;
    this.o && (this.l = new bt(500),
    this.v = new jt(this),
    lt(this.v, this.l, "tick", this.B))
}
A(vB, W);
vB.prototype.reset = function() {
    this.j = [];
    this.l && ct(this.l)
}
;
vB.prototype.remove = function(a) {
    qh(this.j, a);
    this.j.length == 0 && this.l && ct(this.l)
}
;
vB.prototype.B = function() {
    for (; this.j.length > 0 && Qq(this.o); )
        Rq(this.o),
        this.A(this.j.shift());
    this.j.length == 0 && this.l && ct(this.l)
}
;
vB.prototype.K = function() {
    Yp(this.v);
    Yp(this.l);
    W.prototype.K.call(this)
}
;
function wB() {
    W.call(this);
    this.j = {}
}
A(wB, W);
wB.prototype.Sa = function(a, b, c) {
    var d = this;
    if (typeof a === k)
        c && (a = F(a, c));
    else if (a && typeof a.handleEvent == k)
        a = F(a.handleEvent, a);
    else
        throw Error(wa);
    var e = new xB;
    b = dt(function() {
        var f = a
          , g = e.j;
        g !== null && delete d.j[g];
        f()
    }, b);
    this.j[b] = !0;
    return e.j = b
}
;
wB.prototype.clear = function(a) {
    a !== null && delete this.j[a];
    E.clearTimeout(a)
}
;
wB.prototype.K = function() {
    for (var a in this.j)
        this.clear(Number(a));
    W.prototype.K.call(this)
}
;
function xB() {
    this.j = null
}
;function yB(a, b, c, d, e, f, g, h, l, n, p, r) {
    X.call(this);
    var u = this;
    this.ca = a;
    this.N = b;
    this.I = n || null;
    this.B = new nB(b,c,f,h);
    $p(this, this.B);
    this.G = new jt(this);
    $p(this, this.G);
    this.j = d || null;
    d && (a = this.j,
    sw(a, new lB(a.A,this.I)),
    lt(this.G, a, "a", this.ve));
    this.C = p || new tB(this.B,this.N,this.j);
    $p(this, this.C);
    this.l = e || new yr;
    this.Y = l || null;
    this.P = r || null;
    this.L = new wB;
    $p(this, this.L);
    this.A = [];
    this.J = [];
    this.H = new vB(function(w) {
        if (!(u.l.j.j >= 5)) {
            u.l.j == (vr(),
            er) && Br(u.l, (vr(),
            fr));
            nt(u.G, w, "k", u.ad);
            zB(w);
            var O = u.B;
            for (U in O.j.j) {
                var B = w.aa;
                if (Tp(B, 0, U, B.search(Up)) >= 0)
                    throw Error("Request for uri " + w.aa + " already contains reserved additional param " + U);
            }
            var U = w.Ya;
            B = Date.now();
            U.l++;
            U.v = B;
            U = w.Ya.l;
            U > 1 && zp(w.Hc, "Request failed, retrying (n=" + U + ")");
            w.Ic(O)
        }
    }
    ,g);
    $p(this, this.H);
    this.D = up("docs.net.NetService");
    this.o = (vr(),
    mr);
    this.ga = new Aq;
    $p(this, this.ga);
    this.U = new Aq;
    $p(this, this.U);
    this.Z = new Eq;
    $p(this, this.Z);
    lt(this.G, this.C, "G", this.qe)
}
A(yB, X);
function eB(a, b) {
    if (b.ea())
        zp(a.D, "Trying to send a disposed request. Ignoring..."),
        a.j && a.j.log(Error("Trying to send a disposed request."));
    else {
        zB(b);
        var c = a.A;
        ph(c, b) || c.push(b);
        a: {
            c = a.H;
            if (c.o) {
                if (!Qq(c.o) || c.j.length != 0) {
                    c.j.push(b);
                    c.l.start();
                    break a
                }
                Rq(c.o)
            }
            c.A(b)
        }
        nt(a.G, b, "l", a.xe)
    }
}
y = yB.prototype;
y.ad = function(a) {
    var b = a.target;
    zB(b);
    var c = a.j;
    c.wa["x-restart"] == "SOON" && Bq(this.l.C, null);
    AB(this, c);
    this.j && $z(c) && b.l != 1 && (b.aa.startsWith("/logImpressions") || b.aa.startsWith("/naLogImpressions") || this.j.log(Error("blank JSON response"), Wz(c)));
    if (a = Ig(Xz(c), Tz)) {
        var d = !0
          , e = !1
          , f = Sz(c);
        if (a.type == "n") {
            try {
                zp(this.D, "A request succeeded."),
                b.N(c),
                BB(this, b)
            } catch (p) {
                try {
                    var g = {
                        XhrNetEvent_requestUri: b.aa,
                        XhrNetEvent_contentType: c.v,
                        XhrNetEvent_responseType: c.o,
                        XhrNetEvent_errorCode: c.j,
                        XhrNetEvent_statusCode: c.l,
                        XhrNetEvent_isStringResponseType: Oz(c),
                        XhrNetEvent_responseServerHeader: c.wa.server || c.wa.server,
                        XhrNetEvent_mobileNativeResponseUrl: c.wa.mobilenativeredirectresponseurl || "(not set)",
                        XhrNetEvent_certificateChains: c.wa.certificatechains || "(not set)",
                        XhrNetEvent_responseObjectLength: Pz(c).length,
                        XhrNetEvent_responseObject: Oz(c) ? CB(Pz(c)) : Gb
                    }
                } catch (r) {
                    g = {
                        XhrNetEvent_contextObjectError: r.toString()
                    }
                }
                var h;
                if (a.type == "n" && ((h = c.v) == null ? 0 : h.includes("text/html")) && c.l == 200) {
                    a = new Tz("m",5,a.da,x(null),g);
                    this.j && xw(this.j, p, g, null);
                    b.D(a);
                    !b.L == 0 && (d = !1);
                    BB(this, b);
                    b.dispose();
                    d && Y(this, a);
                    return
                }
                xp(this.D, "Failed to handle SUCCESS: " + p.toString() + "\n" + p.stack);
                a = new Tz("q",a.errorCode,a.da,function() {
                    return Qz(c)
                }
                ,g);
                a.cause = p;
                a.j = "n";
                BB(this, b, this.o)
            }
            b.dispose()
        } else if (a.Ib())
            switch (DB(this, a, b, c)) {
            case 4:
                e = !0;
                a.j = a.type;
                a.type = "m";
                break;
            case 1:
                a.j = a.type;
                a.type = "m";
                break;
            case 3:
                d = !1;
                break;
            case 2:
                EB(this, a)
            }
        else
            a.type == "r" && (this.j && this.j.info(Error("Incompatible server")),
            BB(this, b, (vr(),
            lr)),
            d = !1);
        if (a.type == "m") {
            zp(this.D, "A request failed, abandoning it.");
            EB(this, a);
            try {
                if (b.D(a),
                !b.L == 0 && (d = !1),
                f)
                    BB(this, b, (vr(),
                    rr));
                else if (b.Y)
                    BB(this, b);
                else {
                    var l = b.U(a);
                    if (l || e)
                        BB(this, b, l || (vr(),
                        mr));
                    else {
                        var n = Ar(a.da, this.o);
                        (this.o && n == this.o || n == (vr(),
                        mr)) && this.j && this.j.log(Error("Converted a 4xx error to a generic client error when handling response."), {
                            XhrNetEvent_type: "ERROR",
                            XhrNetEvent_httpStatus: a.da.toString(),
                            shouldDispatch: d
                        });
                        BB(this, b, n)
                    }
                }
            } catch (p) {
                xp(this.D, "Failed to handle ERROR, caused further error: " + p.toString() + "\n" + p.stack),
                a = new Tz("q",a.errorCode,a.da,function() {
                    return Qz(c)
                }
                ),
                a.cause = p,
                a.j = "m",
                BB(this, b, this.o)
            }
            b.dispose()
        }
        d && Y(this, a)
    }
}
;
function EB(a, b) {
    b.o instanceof Kr && (b = fl(b.o, 2, Ti, Hk)) && xp(a.D, "Server response sent error: " + b)
}
y.xe = function(a) {
    a = a.target;
    zB(a);
    ph(this.H.j, a) ? this.H.remove(a) : ph(this.A, a) && (ot(this.G, a, "k", this.ad),
    BB(this, a));
    qh(this.A, a);
    qh(this.J, a)
}
;
function BB(a, b, c) {
    var d = a.l.j
      , e = d
      , f = c || (vr(),
    hr);
    c = !c;
    qh(a.A, b);
    qh(a.J, b);
    K(!ph(a.H.j, b), "Request completed while in rate limited queue.");
    K(d != (vr(),
    er), "Request completed with NetService in IDLE state - illegal");
    K(f.j >= 3, "Must be an offline state");
    if (!(d.j >= 5))
        if (f.j >= 5)
            Br(a.l, f, b.aa);
        else {
            var g = a.C.j != null || nh(a.A, function(h) {
                return h.l == 3
            });
            if (d == fr)
                c || !g ? a.A.length == 0 && (e = er) : (FB(a),
                e = f);
            else if (K(b.l == 3 || g || !1, "Offline without a browser channel, guaranteed delivery request, or an offline observer - illegal."),
            c)
                if (a.A.length > 0)
                    e = gr,
                    GB(a);
                else {
                    if (a.C.j == null || uB(a.C))
                        e = er
                }
            else
                e = f;
            Br(a.l, e, b.aa)
        }
}
function DB(a, b, c, d) {
    var e = !1;
    if (b.da == 200) {
        var f = Nz(d);
        if (f) {
            var g;
            if (f = (g = zl(bl(f, Zl, 10, Ti))) == null ? void 0 : g.ta())
                HB(a, f),
                e = !0
        }
    }
    b.da == 400 && (d = Rz(d)) && d.ta() && (HB(a, d.ta()),
    e = !0);
    b.da == 409 && rB(a.B, null);
    d = a.l.j.j >= 5;
    g = b.type == "p";
    if (!d && e && c.Ya.l <= 1)
        return IB(a, c, 2),
        3;
    f = b.da === 0 ? 1 : 3;
    if (!d && c.l != 1 && c.Ya.l < 4)
        return IB(a, c, f),
        3;
    if (c.l == 3) {
        if (d)
            return 2;
        a.C.j == null || g ? IB(a, c, f) : a.J.push(c)
    } else
        return e ? 4 : 1;
    FB(a);
    e = Ar(b.da, a.o);
    (a.o && e == a.o || e == (vr(),
    mr)) && a.j && a.j.log(Error("Converted a 4xx error to a generic client error for a transient failure."), {
        XhrNetEvent_type: function(h) {
            switch (h) {
            case "n":
                return "SUCCESS";
            case "m":
                return "ERROR";
            case "o":
                return "NETWORK_WARNING";
            case "p":
                return "SERVER_WARNING";
            case "q":
                return "CLIENT_ERROR";
            case "r":
                return "RESTART_NOW";
            default:
                return "UNKNOWN"
            }
        }(b.type),
        XhrNetEvent_httpStatus: b.da.toString()
    });
    Br(a.l, e, c.aa, null, !(c.l != 1 && c.Ya.l < 4));
    return 2
}
function FB(a) {
    a.C.j != null && a.l.j.j == 1 && (a = a.C,
    K(a.j != null, "recycleBrowserChannel() called when browser channel is not present"),
    a.j.j(),
    a.j.o())
}
y.ma = bc("l");
function IB(a, b, c) {
    c = Jz(b.Ya, c);
    a.L.Sa(function() {
        return eB(a, b)
    }, c)
}
y.qe = function(a) {
    var b = this.l.j;
    b.j >= 5 || (a.o ? b.j != 1 && (this.A.length > 0 ? (Br(this.l, (vr(),
    gr)),
    GB(this)) : Br(this.l, (vr(),
    er))) : (b = Ar(a.j, this.o),
    (this.o && b == this.o || b == (vr(),
    mr)) && this.j && this.j.log(Error("Converted a 4xx error to a generic client error for unhealthy browser channel state change."), {
        XhrNetEvent_httpStatus: a.j.toString()
    }),
    Br(this.l, b, null, a.j)))
}
;
function AB(a, b) {
    if (a.P) {
        var c;
        ((c = b.wa["x-reload"]) == null ? void 0 : c.toLowerCase()) === Pb && a.P.j(!0)
    }
}
function GB(a) {
    zp(a.D, "restartSuspendedRequest_()");
    var b = a.J.shift();
    b && eB(a, b)
}
function HB(a, b) {
    var c = a.B;
    V(c.l, "setXsrfToken(" + b + ")");
    c.j.j.at && pB(c, "at", b);
    pB(c, "token", b);
    Bq(a.U, null)
}
y.ta = function() {
    return this.B.ta()
}
;
y.ve = function() {
    var a = this.I != null && this.I.l() && this.I.j() ? (vr(),
    or) : (vr(),
    nr);
    Br(this.l, a)
}
;
y.K = function() {
    Zp(this.A);
    X.prototype.K.call(this)
}
;
function JB(a) {
    return a.replace(/[0-9a-zA-Z]/g, "a").replace(/[^\u0000-\u007F]/g, "b")
}
function CB(a) {
    return a.length <= 100 ? JB(a) : JB(a.substring(0, 50)) + " (truncated) " + JB(a.substring(a.length - 50))
}
function zB(a) {
    a.aa.includes("/save")
}
;function KB(a) {
    var b = gx, c, d;
    this.j = b;
    c || (c = function(e) {
        return new yB(e,rq())
    }
    );
    d || (d = function() {
        return new Jw
    }
    );
    this.l = c(new kB);
    qB(this.l.B, b.A);
    HB(this.l, a);
    this.v = d(5, 10);
    this.o = F(this.v.j, this.v)
}
KB.prototype.A = function(a, b, c, d, e) {
    var f = this.l;
    a = "/" + a;
    K(Mg(a, "/"));
    a = new jB(f,a,f,f.N,f.Y,f.ca.j);
    a.M = f.B.A;
    a.B = Uc(this.C, this.o, b);
    a.v = Uc(this.B, this.o, c);
    a.C = !1;
    b = a.setTimeout(this.j.M);
    e = LB(this, !1, e);
    c = [b.ca];
    th(c, e);
    b.ca = Rp.apply(null, c);
    d != null && (b.j = d);
    b.A = 1;
    b.validate();
    d = b.P();
    b.ga(d)
}
;
function LB(a, b, c) {
    var d = ["nocache_id", Pc({})];
    if (c !== void 0)
        for (var e in c)
            d.push(e),
            d.push(c[e]);
    a: {
        c = a.j;
        if (c.o != null)
            try {
                var f = c.o.getSessionId();
                break a
            } catch (g) {}
        f = c.G
    }
    Zw(d, "csid", f);
    Zw(d, "mid", a.j.I);
    Zw(d, "mctx", cx(a.j));
    Zw(d, "eei", a.j.H);
    Zw(d, "func");
    Zw(d, "token", b ? a.l.ta() : null);
    return d
}
KB.prototype.C = function(a, b, c) {
    a();
    ax(b, Qz(c))
}
;
KB.prototype.B = function(a, b, c) {
    a();
    a = Error("L\u1ed7i k\u1ebft n\u1ed1i do HTTP " + c.da);
    a.name = "NetworkError";
    ax(b, a)
}
;
function MB(a, b, c, d) {
    var e = window;
    this.v = gx;
    this.H = e;
    this.B = a;
    this.o = b;
    this.X = c;
    this.M = d;
    this.G = F(this.C, this);
    this.l = {};
    this.I = 0;
    this.H.addEventListener("message", this.G, !1)
}
MB.prototype.C = function(a) {
    if (a.origin == this.v.v) {
        a = a.data;
        var b = a[1];
        if (b == 100)
            if (b = a[3],
            typeof b != m)
                console.error("Unknown request ID from facade response: " + b);
            else {
                var c = this.l[b];
                delete this.l[b];
                typeof c != k ? console.error("Invalid request callback: " + c) : c(a[2])
            }
        else
            b == 101 ? lx(a[2]) : console.error("Unknown request type: " + b)
    } else if (b = this.o,
    c = a.origin,
    c != b ? (console.log("dropping postMessage.. was from host " + c + " but expected host " + b),
    b = !1) : b = !0,
    b) {
        b = a.data;
        a = null;
        try {
            a = JSON.parse(b)
        } catch (e) {
            return
        }
        b = a.rq;
        if (b == "xhr")
            NB(this, a, "callback", "xhrr");
        else if (b == "post")
            NB(this, a, "postid", "postr");
        else if (b == "fpr")
            NB(this, a, "postresponse", "fprr", !0);
        else if (b == "xhh") {
            c = a.eid;
            b = JSON.parse(a.cn);
            var d = b.hfarg;
            a = this.M;
            b = b.hfp;
            c = F(this.A, this, {
                eid: c,
                rq: "xhhr"
            });
            (a = a.j[b]) ? (c && a.type === "hftc" && (d = d ? d : [],
            d.push(c)),
            b = a.j.apply(E, d),
            c && a.type === "hftr" && (b instanceof Wm ? b.then(c) : c(b))) : console.log("host function path " + b + " not found")
        } else
            console.log("unknown request type: " + b)
    }
}
;
MB.prototype.j = function(a, b) {
    var c = arguments
      , d = this;
    return new Wm(function(e, f) {
        var g = d.v;
        g.j || f("Not running in facade.");
        f = ++d.I;
        d.l[f] = e;
        e = {};
        e[1] = a;
        c.length > 1 && (e[2] = Array.prototype.slice.call(c, 1));
        e[3] = f;
        window.parent.postMessage(e, g.v)
    }
    )
}
;
function NB(a, b, c, d, e) {
    var f = e ? null : b.cn;
    e = e ? b.cn : null;
    var g = {};
    g.eid = b.eid;
    g.rq = d;
    b = a.X;
    d = F(a.A, a, g);
    a = F(a.D, a, g);
    b.A.call(b, c, d, a, f, e)
}
MB.prototype.A = function(a, b) {
    a.sucr = b;
    a = JSON.stringify(a);
    this.B.postMessage(a, this.o)
}
;
MB.prototype.D = function(a, b) {
    a.failr = b.toString();
    a = JSON.stringify(a);
    this.B.postMessage(a, this.o)
}
;
var OB = {
    mf: "activedescendant",
    sf: "atomic",
    tf: "autocomplete",
    wf: "busy",
    zf: "checked",
    Cf: "colindex",
    If: "controls",
    Lf: "current",
    Nf: "describedby",
    Qf: "disabled",
    Yf: "dropeffect",
    ag: "expanded",
    bg: "flowto",
    fg: "grabbed",
    jg: "haspopup",
    ng: "hidden",
    pg: "invalid",
    yg: "label",
    zg: "labelledby",
    Bg: "level",
    Gg: "live",
    Sg: "multiline",
    Tg: "multiselectable",
    dh: "orientation",
    fh: "owns",
    gh: "posinset",
    ih: "pressed",
    nh: "readonly",
    qh: "relevant",
    wh: "required",
    Ah: "rowindex",
    Eh: "selected",
    Gh: "setsize",
    Jh: "sort",
    ei: "valuemax",
    fi: "valuemin",
    gi: "valuenow",
    hi: "valuetext"
};
var PB;
var QB = {
    nf: "alert",
    pf: "alertdialog",
    qf: "application",
    rf: "article",
    uf: "banner",
    xf: "button",
    yf: "checkbox",
    Df: "columnheader",
    Ef: "combobox",
    Ff: "complementary",
    Hf: "contentinfo",
    Mf: "definition",
    Of: "dialog",
    Pf: "directory",
    Wf: jb,
    cg: "form",
    gg: "grid",
    hg: "gridcell",
    ig: "group",
    mg: "heading",
    og: "img",
    Cg: "link",
    Dg: "list",
    Eg: "listbox",
    Fg: "listitem",
    Ig: "log",
    Jg: "main",
    Kg: "marquee",
    Lg: "math",
    Mg: "menu",
    Ng: "menubar",
    Og: "menuitem",
    Pg: "menuitemcheckbox",
    Qg: "menuitemradio",
    Wg: "navigation",
    Yg: "note",
    bh: "option",
    hh: "presentation",
    jh: "progressbar",
    kh: "radio",
    mh: "radiogroup",
    oh: "region",
    xh: "row",
    yh: "rowgroup",
    zh: "rowheader",
    Ch: "scrollbar",
    Dh: "search",
    Fh: "separator",
    Ih: "slider",
    Kh: "spinbutton",
    Lh: "status",
    Nh: "switch",
    Oh: "tab",
    Ph: "tablist",
    Qh: "tabpanel",
    Rh: "textbox",
    Sh: "textinfo",
    Th: "timer",
    Uh: "toolbar",
    Vh: "tooltip",
    Wh: "tree",
    Xh: "treegrid",
    Yh: "treeitem"
};
function RB(a, b) {
    b ? (K(Pr(QB, b), "No such ARIA role " + b),
    a.setAttribute("role", b)) : a.removeAttribute("role")
}
function SB(a, b, c) {
    Array.isArray(c) && (c = c.join(" "));
    K(b, "ARIA attribute cannot be empty.");
    K(Pr(OB, b), "No such ARIA attribute " + b);
    var d = "aria-" + b;
    c === "" || c == void 0 ? (PB || (c = {},
    PB = (c.atomic = !1,
    c.autocomplete = "none",
    c.dropeffect = "none",
    c.haspopup = !1,
    c.live = "off",
    c.multiline = !1,
    c.multiselectable = !1,
    c.orientation = "vertical",
    c.readonly = !1,
    c.relevant = "additions text",
    c.required = !1,
    c.sort = "none",
    c.busy = !1,
    c.disabled = !1,
    c.hidden = !1,
    c.invalid = "false",
    c)),
    c = PB,
    b in c ? a.setAttribute(d, c[b]) : a.removeAttribute(d)) : a.setAttribute(d, c)
}
;function TB(a) {
    return typeof a.className == v ? a.className : a.getAttribute && a.getAttribute("class") || ""
}
function UB(a, b) {
    if (a.classList)
        a.classList.add(b);
    else if (a.classList ? !a.classList.contains(b) : !ph(a.classList ? a.classList : TB(a).match(/\S+/g) || [], b)) {
        var c = TB(a);
        b = c + (c.length > 0 ? " " + b : b);
        typeof a.className == v ? a.className = b : a.setAttribute && a.setAttribute("class", b)
    }
}
;var gx = null
  , hx = null
  , VB = new jw;
VB.v = !0;
VB.B = !1;
VB.l = !0;
VB.A = !0;
var WB = rq();
VB.j = WB;
VB.o = function() {
    var a = {
        Ad: Aw
    };
    a = a === void 0 ? {} : a;
    if (!Ew.cd()) {
        try {
            var b = lv(vm)
        } catch (c) {
            b = !1
        }
        Ew = b && window.crashReport ? new Cw : new Dw;
        Ew.initialize()
    }
    return mv(a, new Gw)
}
;
var XB;
XB = new iw(VB);
function YB() {
    return "sandbox" in au(document, "IFRAME") && !yh
}
function ZB(a, b) {
    function c() {
        UB(d, "warning-banner-bar-hidden")
    }
    var d = K(a.j.getElementById(Vb));
    UB(d, "warning-banner-bar");
    a = Zt("DIV", "warning-banner-buttons");
    b && (b = Zt("A", $B(b), "B\u00e1o c\u00e1o sai ph\u1ea1m"),
    a.appendChild(b));
    a.appendChild(Zt("A", $B("https://developers.google.com/apps-script"), "T\u00ecm hi\u1ec3u th\u00eam"));
    b = Zt("DIV", {
        "class": "warning-banner-text",
        id: "warning-text"
    }, "\u1ee8ng d\u1ee5ng n\u00e0y do m\u1ed9t ng\u01b0\u1eddi d\u00f9ng Google Apps Script t\u1ea1o");
    var e = Zt("SPAN", "warning-banner-icon", aC("M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"));
    e = Zt("DIV", "warning-banner-header", e, b);
    a = Zt("DIV", "warning-banner", e, a);
    e = Zt("DIV", "warning-banner-close-icon", aC("M6.4 19 5 17.6l5.6-5.6L5 6.4 6.4 5l5.6 5.6L17.6 5 19 6.4 13.4 12l5.6 5.6-1.4 1.4-5.6-5.6Z"));
    e.setAttribute("tabIndex", "0");
    e.addEventListener("click", c);
    e.addEventListener("keypress", function(f) {
        f.key == "Enter" && c()
    });
    RB(d, "banner");
    SB(d, "live", "assertive");
    SB(d, "labelledby", "warning-text");
    RB(e, "button");
    SB(e, "label", "B\u1ecf qua");
    RB(b, "alert");
    d.appendChild(a);
    d.appendChild(e)
}
function aC(a) {
    var b = document.createElementNS(qb, "path");
    b.setAttribute("d", a);
    a = document.createElementNS(qb, "svg");
    a.setAttribute("aria-hidden", Pb);
    a.setAttribute("viewbox", "0 0 24 24");
    a.setAttribute("width", "24px");
    a.setAttribute("height", "24px");
    a.appendChild(b);
    return a
}
function $B(a) {
    return {
        "class": "warning-link",
        href: a,
        target: "_blank"
    }
}
function bC(a, b) {
    var c = Ec.apply(2, arguments);
    if (b) {
        var d = document.getElementById("warning-bar-table");
        d && d && d.parentNode && d.parentNode.removeChild(d)
    }
    (d = document.getElementById("sandboxFrame")) && d && d.parentNode && d.parentNode.removeChild(d);
    cC.apply(null, [a].concat(oc(c)))
}
function cC(a) {
    for (var b = Ec.apply(1, arguments), c = a || new cu, d = 0; d < b.length; d++) {
        var e = c.l("DIV", "userSandboxText")
          , f = e
          , g = b[d];
        K(f != null, "goog.dom.setTextContent expects a non-null value for node");
        if ("textContent" in f)
            f.textContent = g;
        else if (f.nodeType == 3)
            f.data = String(g);
        else if (f.firstChild && f.firstChild.nodeType == 3) {
            for (; f.lastChild != f.firstChild; )
                f.removeChild(K(f.lastChild));
            f.firstChild.data = String(g)
        } else {
            for (var h, l = f; h = l.firstChild; )
                l.removeChild(h);
            h = f;
            K(h, "Node cannot be null or undefined.");
            f.appendChild((h.nodeType == 9 ? h : h.ownerDocument || h.document).createTextNode(String(g)))
        }
        f = document.body;
        K(f != null && e != null, "goog.dom.appendChild expects non-null arguments");
        f.appendChild(e)
    }
}
Jc("goog.script.init", function(a, b, c, d, e, f, g, h, l) {
    l = l === void 0 ? XB : l;
    e = new cu;
    if (YB()) {
        a = JSON.parse(a);
        gx = new bx(a,c);
        a = ls(gx.v);
        f = Zr(Yr(Xr(new Wr, a.o), a.v), a.B);
        a = c ? c.hostFunctions : [];
        if (gx.B.awhs && !cx(gx)) {
            mx();
            c = [];
            c.push({
                path: "google.script.history.push",
                invoke: ex,
                arity: 3
            });
            c.push({
                path: "google.script.history.replace",
                invoke: ix,
                arity: 3
            });
            c.push({
                path: "google.script.url.getLocation",
                invoke: jx,
                arity: 1,
                type: "hftr"
            });
            c.push({
                path: "google.script.history.setChangeHandler",
                invoke: kx,
                arity: 1,
                type: "hftc"
            });
            for (var n = 0; n < c.length; n++)
                a.push(c[n])
        }
        if (gx.B.bniw && window.top === window)
            ow(l, Error(Ja)),
            console.error(Ja);
        else {
            gx.j && (l = {
                1: 1
            },
            l[2] = document.title,
            window.parent.postMessage(l, f.toString()));
            c = new ox;
            l = [];
            for (f = 0; f < a.length; f++) {
                n = a[f];
                var p = n.path
                  , r = c.j
                  , u = p;
                p = new nx(p,n.invoke,n.arity,n.type);
                if (r !== null && u in r)
                    throw Error('The object already contains the key "' + u + '"');
                r[u] = p;
                l.push(n.type ? {
                    hfp: n.path,
                    hfa: n.arity,
                    hft: n.type
                } : {
                    hfp: n.path,
                    hfa: n.arity
                })
            }
            f = document.getElementById("sandboxFrame");
            a = f.contentWindow;
            b = new KB(b);
            (n = gx.j ? window.parent === window.top : window.self === window.top) && d && ZB(e, h);
            h = new xz;
            e = new px;
            e = Kk(e, 1, yj(n ? 1 : 2), Ti);
            d ? Kk(e, 2, yj(2), Ti) : Kk(e, 2, yj(1), Ti);
            yz(h, e);
            hx = new MB(a,g,b,c);
            d = gx;
            d = new Iw(g,gx.D,gx.X,l,gx.C,(d.l.o ? d.l.o : "http") + "://" + d.l.v + (d.l.B != null ? ":" + d.l.B : "") + gx.A,LB(b, !0),f.title);
            f.onload = null;
            h = a.postMessage;
            d = JSON.stringify({
                uh: d.o,
                sh: d.l,
                sfns: d.C,
                hfns: d.A,
                cspns: d.j,
                apre: d.v,
                aparm: d.D,
                ift: d.B
            });
            h.call(a, d, g)
        }
    } else
        xw(l, Error("Iframe sandboxing is not supported.")),
        bC(e, d, "D\u01b0\u1eddng nh\u01b0 tr\u00ecnh duy\u1ec7t c\u1ee7a b\u1ea1n kh\u00f4ng h\u1ed7 tr\u1ee3 m\u1ed9t t\u00ednh n\u0103ng b\u1ea3o m\u1eadt m\u00e0 \u1ee9ng d\u1ee5ng n\u00e0y c\u1ea7n.", "Vui l\u00f2ng n\u00e2ng c\u1ea5p tr\u00ecnh duy\u1ec7t n\u1ebfu b\u1ea1n mu\u1ed1n d\u00f9ng \u1ee9ng d\u1ee5ng n\u00e0y.")
});
Jc("goog.script.isSupported", YB);
