function _classCallCheck(n, e) {
  if (!(n instanceof e)) throw new TypeError('Cannot call a class as a function');
}
(window.webpackJsonp = window.webpackJsonp || []).push([
  [74],
  {
    hrRY: function(n, e, s) {
      'use strict';
      s.r(e);
      var t,
        c,
        o,
        i = s('ofXK'),
        a = s('fXoL'),
        l = s('Bpzi'),
        r = s('3Pt+'),
        p =
          (((t = function n() {
            _classCallCheck(this, n),
              (this.strings = ['stepper', 'expansion-panel', 'markdown', 'highlight', 'loading']),
              (this.stringsModel = this.strings.slice(0, 2));
          }).ɵfac = function(n) {
            return new (n || t)();
          }),
          (t.ɵcmp = a.Mb({
            type: t,
            selectors: [['chips-demo-basic']],
            decls: 1,
            vars: 1,
            consts: [['placeholder', 'Type here', 3, 'ngModel', 'ngModelChange']],
            template: function(n, e) {
              1 & n &&
                (a.Yb(0, 'td-chips', 0),
                a.gc('ngModelChange', function(n) {
                  return (e.stringsModel = n);
                }),
                a.Wb()),
                2 & n && a.qc('ngModel', e.stringsModel);
            },
            directives: [l.c, r.l, r.o],
            styles: [''],
          })),
          t),
        d = s('9X6E'),
        h = s('MJ5V'),
        f =
          (((c = function n() {
            _classCallCheck(this, n);
          }).ɵfac = function(n) {
            return new (n || c)();
          }),
          (c.ɵcmp = a.Mb({
            type: c,
            selectors: [['chips-demo']],
            decls: 2,
            vars: 1,
            consts: [[3, 'demoId']],
            template: function(n, e) {
              1 & n && (a.Yb(0, 'demo-component', 0), a.Tb(1, 'chips-demo-basic'), a.Wb()),
                2 & n && a.qc('demoId', 'chips-demo-basic');
            },
            directives: [h.a, p],
            styles: [''],
          })),
          c),
        u = s('tyNb'),
        m = [{ path: '', component: f }],
        b =
          (((o = function n() {
            _classCallCheck(this, n);
          }).ɵmod = a.Qb({ type: o })),
          (o.ɵinj = a.Pb({
            factory: function(n) {
              return new (n || o)();
            },
            imports: [[u.f.forChild(m)], u.f],
          })),
          o),
        g = s('Krbs');
      s.d(e, 'ChipsDemoModule', function() {
        return w;
      });
      var C,
        w =
          (((C = function n() {
            _classCallCheck(this, n);
          }).ɵmod = a.Qb({ type: C })),
          (C.ɵinj = a.Pb({
            factory: function(n) {
              return new (n || C)();
            },
            imports: [[g.a, b, d.a, i.c, r.h]],
          })),
          C);
    },
  },
]);
