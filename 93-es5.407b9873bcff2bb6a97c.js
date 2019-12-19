function _classCallCheck(e, s) {
  if (!(e instanceof s)) throw new TypeError('Cannot call a class as a function');
}
(window.webpackJsonp = window.webpackJsonp || []).push([
  [93],
  {
    UAKV: function(e, s, n) {
      'use strict';
      n.r(s);
      var t,
        o,
        c,
        a = n('ofXK'),
        i = n('fXoL'),
        l = n('GvbB'),
        r =
          (((t = function e() {
            _classCallCheck(this, e);
          }).ɵfac = function(e) {
            return new (e || t)();
          }),
          (t.ɵcmp = i.Mb({
            type: t,
            selectors: [['message-demo-basic']],
            decls: 1,
            vars: 0,
            consts: [['label', 'Info', 'sublabel', 'Maybe you want to know this', 'color', 'accent', 'icon', 'info']],
            template: function(e, s) {
              1 & e && i.Tb(0, 'td-message', 0);
            },
            directives: [l.a],
            styles: [''],
          })),
          t),
        f = n('e4Sf'),
        u = n('MJ5V'),
        m =
          (((o = function e() {
            _classCallCheck(this, e);
          }).ɵfac = function(e) {
            return new (e || o)();
          }),
          (o.ɵcmp = i.Mb({
            type: o,
            selectors: [['message-demo']],
            decls: 2,
            vars: 1,
            consts: [[3, 'demoId']],
            template: function(e, s) {
              1 & e && (i.Yb(0, 'demo-component', 0), i.Tb(1, 'message-demo-basic'), i.Wb()),
                2 & e && i.qc('demoId', 'message-demo-basic');
            },
            directives: [u.a, r],
            styles: [''],
          })),
          o),
        b = n('tyNb'),
        d = [{ path: '', component: m }],
        p =
          (((c = function e() {
            _classCallCheck(this, e);
          }).ɵmod = i.Qb({ type: c })),
          (c.ɵinj = i.Pb({
            factory: function(e) {
              return new (e || c)();
            },
            imports: [[b.f.forChild(d)], b.f],
          })),
          c),
        h = n('Krbs');
      n.d(s, 'MessageDemoModule', function() {
        return y;
      });
      var w,
        y =
          (((w = function e() {
            _classCallCheck(this, e);
          }).ɵmod = i.Qb({ type: w })),
          (w.ɵinj = i.Pb({
            factory: function(e) {
              return new (e || w)();
            },
            imports: [[h.a, p, f.a, a.c]],
          })),
          w);
    },
  },
]);
