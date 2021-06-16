!(function () {
  function n() {
    function n(n) {
      p.level = n
    }
    function e(n, e) {
      p.info(n, "event emitted"),
        (e = c(e || {})),
        (e.meta = e.meta || {}),
        (e.meta.type = n),
        u.push(e),
        r(),
        (v.listeners = f(v.listeners, function (n) {
          return !n.disposed
        }))
    }
    function o(n, e, o) {
      function r() {
        return (
          p.info("Replaying events"),
          t(function () {
            s(v.events, function (t) {
              c.disposed || (l(n, t.meta.type) && e.call(o, t))
            })
          }),
          f
        )
      }
      function i() {
        return p.info("Disposing event handler"), (c.disposed = !0), f
      }
      p.info("Attaching event handler for", n)
      var c = { type: n, callback: e, disposed: !1, context: o || window }
      v.listeners.push(c)
      var f = { replay: r, dispose: i }
      return f
    }
    function t(n) {
      p.info("Calling event handlers"), a++
      try {
        n()
      } catch (n) {
        p.error("UV API Error", n.stack)
      }
      a--, r()
    }
    function r() {
      if (
        (0 === u.length && p.info("No more events to process"),
        u.length > 0 && a > 0 && p.info("Event will be processed later"),
        u.length > 0 && 0 === a)
      ) {
        p.info("Processing event")
        var n = u.shift()
        v.events.push(n),
          t(function () {
            s(v.listeners, function (e) {
              if (!e.disposed && l(e.type, n.meta.type))
                try {
                  e.callback.call(e.context, n)
                } catch (n) {
                  p.error("Error emitting UV event", n.stack)
                }
            })
          })
      }
    }
    function i(n, e, o) {
      var t = v.on(n, function () {
        e.apply(o || window, arguments), t.dispose()
      })
      return t
    }
    function s(n, e) {
      for (var o = n.length, t = 0; t < o; t++) e(n[t], t)
    }
    function c(n) {
      var e = {}
      for (var o in n) n.hasOwnProperty(o) && (e[o] = n[o])
      return e
    }
    function l(n, e) {
      return "string" == typeof n ? n === e : n.test(e)
    }
    function f(n, e) {
      for (var o = n.length, t = [], r = 0; r < o; r++) e(n[r]) && t.push(n[r])
      return t
    }
    var u = [],
      a = 0,
      p = {
        info: function () {
          p.level > n.INFO ||
            (console && console.info && console.info.apply(console, arguments))
        },
        error: function () {
          p.level > n.ERROR ||
            (console &&
              console.error &&
              console.error.apply(console, arguments))
        },
      }
    ;(n.ALL = 0), (n.INFO = 1), (n.ERROR = 2), (n.OFF = 3), n(n.ERROR)
    var v = { on: o, emit: e, once: i, events: [], listeners: [], logLevel: n }
    return v
  }
  "object" == typeof module && module.exports
    ? (module.exports = n)
    : window && void 0 === window.uv && (window.uv = n())
})()
