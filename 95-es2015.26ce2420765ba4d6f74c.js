(window.webpackJsonp = window.webpackJsonp || []).push([
  [95],
  {
    BbNC: function(t, n, o) {
      'use strict';
      o.r(n);
      var i = o('ofXK'),
        c = o('fXoL'),
        e = o('bTqV'),
        s = o('KQ0f'),
        a = o('NFeN');
      let r = (() => {
        class t {}
        return (
          (t.ɵfac = function(n) {
            return new (n || t)();
          }),
          (t.ɵcmp = c.Mb({
            type: t,
            selectors: [['notifications-demo-basic']],
            decls: 8,
            vars: 2,
            consts: [
              ['mat-icon-button', '', 1, 'overflow-visible'],
              [3, 'notifications', 'limit'],
            ],
            template: function(t, n) {
              1 & t &&
                (c.Yb(0, 'button', 0),
                c.Tc(1, '\n    '),
                c.Yb(2, 'td-notification-count', 1),
                c.Tc(3, '\n        '),
                c.Yb(4, 'mat-icon'),
                c.Tc(5, 'notifications'),
                c.Wb(),
                c.Tc(6, '\n    '),
                c.Wb(),
                c.Tc(7, '\n'),
                c.Wb()),
                2 & t && (c.Db(2), c.qc('notifications', 101)('limit', 50));
            },
            directives: [e.b, s.a, a.a],
            styles: [''],
          })),
          t
        );
      })();
      var b = o('4QqR'),
        f = o('MJ5V');
      let u = (() => {
        class t {}
        return (
          (t.ɵfac = function(n) {
            return new (n || t)();
          }),
          (t.ɵcmp = c.Mb({
            type: t,
            selectors: [['notifications-demo']],
            decls: 2,
            vars: 1,
            consts: [[3, 'demoId']],
            template: function(t, n) {
              1 & t && (c.Yb(0, 'demo-component', 0), c.Tb(1, 'notifications-demo-basic'), c.Wb()),
                2 & t && c.qc('demoId', 'notifications-demo-basic');
            },
            directives: [f.a, r],
            styles: [''],
          })),
          t
        );
      })();
      var l = o('tyNb');
      const m = [{ path: '', component: u }];
      let d = (() => {
        class t {}
        return (
          (t.ɵmod = c.Qb({ type: t })),
          (t.ɵinj = c.Pb({
            factory: function(n) {
              return new (n || t)();
            },
            imports: [[l.f.forChild(m)], l.f],
          })),
          t
        );
      })();
      var p = o('Krbs');
      o.d(n, 'NotificationsDemoModule', function() {
        return w;
      });
      let w = (() => {
        class t {}
        return (
          (t.ɵmod = c.Qb({ type: t })),
          (t.ɵinj = c.Pb({
            factory: function(n) {
              return new (n || t)();
            },
            imports: [[p.a, d, b.a, i.c, a.b, e.c]],
          })),
          t
        );
      })();
    },
  },
]);
