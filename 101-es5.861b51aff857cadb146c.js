function _classCallCheck(t, n) {
  if (!(t instanceof n)) throw new TypeError('Cannot call a class as a function');
}
(window.webpackJsonp = window.webpackJsonp || []).push([
  [101],
  {
    JyjR: function(t, n, e) {
      'use strict';
      e.r(n);
      var c,
        o,
        s,
        a = e('ofXK'),
        l = e('fXoL'),
        i = e('3PiT'),
        b = e('3Pt+'),
        r = e('b6uI'),
        u =
          (((c = function t() {
            _classCallCheck(this, t), (this.value = '');
          }).ɵfac = function(t) {
            return new (t || c)();
          }),
          (c.ɵcmp = l.Mb({
            type: c,
            selectors: [['tab-select-demo-basic']],
            decls: 14,
            vars: 1,
            consts: [
              ['backgroundColor', 'accent', 'stretchTabs', '', 3, 'ngModel', 'ngModelChange'],
              ['value', 'dogs'],
              ['value', 'cats'],
              ['value', 'bunnies'],
              ['value', 'hamsters', 'disabled', ''],
            ],
            template: function(t, n) {
              1 & t &&
                (l.Yb(0, 'td-tab-select', 0),
                l.gc('ngModelChange', function(t) {
                  return (n.value = t);
                }),
                l.Tc(1, '\n    '),
                l.Yb(2, 'td-tab-option', 1),
                l.Tc(3, '\n    Dogs\n    '),
                l.Wb(),
                l.Tc(4, '\n    '),
                l.Yb(5, 'td-tab-option', 2),
                l.Tc(6, '\n    Cats\n    '),
                l.Wb(),
                l.Tc(7, '\n    '),
                l.Yb(8, 'td-tab-option', 3),
                l.Tc(9, '\n    Bunnies\n    '),
                l.Wb(),
                l.Tc(10, '\n    '),
                l.Yb(11, 'td-tab-option', 4),
                l.Tc(12, '\n    Hamsters\n    '),
                l.Wb(),
                l.Tc(13, '\n'),
                l.Wb()),
                2 & t && l.qc('ngModel', n.value);
            },
            directives: [i.a, b.l, b.o, r.a],
            styles: [''],
          })),
          c),
        d = e('dbyk'),
        f = e('MJ5V'),
        p =
          (((o = function t() {
            _classCallCheck(this, t);
          }).ɵfac = function(t) {
            return new (t || o)();
          }),
          (o.ɵcmp = l.Mb({
            type: o,
            selectors: [['tab-select-demo']],
            decls: 2,
            vars: 1,
            consts: [[3, 'demoId']],
            template: function(t, n) {
              1 & t && (l.Yb(0, 'demo-component', 0), l.Tb(1, 'tab-select-demo-basic'), l.Wb()),
                2 & t && l.qc('demoId', 'tab-select-demo-basic');
            },
            directives: [f.a, u],
            styles: [''],
          })),
          o),
        m = e('tyNb'),
        h = [{ path: '', component: p }],
        C =
          (((s = function t() {
            _classCallCheck(this, t);
          }).ɵmod = l.Qb({ type: s })),
          (s.ɵinj = l.Pb({
            factory: function(t) {
              return new (t || s)();
            },
            imports: [[m.f.forChild(h)], m.f],
          })),
          s),
        T = e('Krbs');
      e.d(n, 'TabSelectDemoModule', function() {
        return w;
      });
      var v,
        w =
          (((v = function t() {
            _classCallCheck(this, t);
          }).ɵmod = l.Qb({ type: v })),
          (v.ɵinj = l.Pb({
            factory: function(t) {
              return new (t || v)();
            },
            imports: [[T.a, C, d.a, a.c, b.h]],
          })),
          v);
    },
  },
]);
