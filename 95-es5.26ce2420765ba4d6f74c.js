function _classCallCheck(n, t) {
  if (!(n instanceof t)) throw new TypeError('Cannot call a class as a function');
}
(window.webpackJsonp = window.webpackJsonp || []).push([
  [95],
  {
    BbNC: function(n, t, o) {
      'use strict';
      o.r(t);
      var c,
        i,
        s,
        e = o('ofXK'),
        a = o('fXoL'),
        f = o('bTqV'),
        l = o('KQ0f'),
        r = o('NFeN'),
        b =
          (((c = function n() {
            _classCallCheck(this, n);
          }).ɵfac = function(n) {
            return new (n || c)();
          }),
          (c.ɵcmp = a.Mb({
            type: c,
            selectors: [['notifications-demo-basic']],
            decls: 8,
            vars: 2,
            consts: [
              ['mat-icon-button', '', 1, 'overflow-visible'],
              [3, 'notifications', 'limit'],
            ],
            template: function(n, t) {
              1 & n &&
                (a.Yb(0, 'button', 0),
                a.Tc(1, '\n    '),
                a.Yb(2, 'td-notification-count', 1),
                a.Tc(3, '\n        '),
                a.Yb(4, 'mat-icon'),
                a.Tc(5, 'notifications'),
                a.Wb(),
                a.Tc(6, '\n    '),
                a.Wb(),
                a.Tc(7, '\n'),
                a.Wb()),
                2 & n && (a.Db(2), a.qc('notifications', 101)('limit', 50));
            },
            directives: [f.b, l.a, r.a],
            styles: [''],
          })),
          c),
        u = o('4QqR'),
        m = o('MJ5V'),
        d =
          (((i = function n() {
            _classCallCheck(this, n);
          }).ɵfac = function(n) {
            return new (n || i)();
          }),
          (i.ɵcmp = a.Mb({
            type: i,
            selectors: [['notifications-demo']],
            decls: 2,
            vars: 1,
            consts: [[3, 'demoId']],
            template: function(n, t) {
              1 & n && (a.Yb(0, 'demo-component', 0), a.Tb(1, 'notifications-demo-basic'), a.Wb()),
                2 & n && a.qc('demoId', 'notifications-demo-basic');
            },
            directives: [m.a, b],
            styles: [''],
          })),
          i),
        p = o('tyNb'),
        h = [{ path: '', component: d }],
        w =
          (((s = function n() {
            _classCallCheck(this, n);
          }).ɵmod = a.Qb({ type: s })),
          (s.ɵinj = a.Pb({
            factory: function(n) {
              return new (n || s)();
            },
            imports: [[p.f.forChild(h)], p.f],
          })),
          s),
        C = o('Krbs');
      o.d(t, 'NotificationsDemoModule', function() {
        return v;
      });
      var y,
        v =
          (((y = function n() {
            _classCallCheck(this, n);
          }).ɵmod = a.Qb({ type: y })),
          (y.ɵinj = a.Pb({
            factory: function(n) {
              return new (n || y)();
            },
            imports: [[C.a, w, u.a, e.c, r.b, f.c]],
          })),
          y);
    },
  },
]);
