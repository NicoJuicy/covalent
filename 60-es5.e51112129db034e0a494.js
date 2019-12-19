function _classCallCheck(t, o) {
  if (!(t instanceof o)) throw new TypeError('Cannot call a class as a function');
}
(window.webpackJsonp = window.webpackJsonp || []).push([
  [60],
  {
    ElaO: function(t, o, n) {
      'use strict';
      n.r(o);
      var i,
        e = n('ofXK'),
        c = n('tyNb'),
        s = n('d3UM'),
        a = n('NFeN'),
        r = n('bTqV'),
        f = n('eTLM'),
        u = n('Q3DV'),
        p = n('fXoL'),
        l = n('KQ0f'),
        b =
          (((i = function t() {
            _classCallCheck(this, t),
              (this.notificationsAttrs = [
                {
                  description:
                    'Number for the notification count.\n                  Shows number if the input is a positive number; shows no count state if boolean is "true"',
                  name: 'notifications',
                  type: 'number | boolean',
                },
                {
                  description: 'Sets the theme color of the notification tip.\n                  Defaults to "warn"',
                  name: 'color',
                  type: '"primary" | "accent" | "warn"',
                },
                {
                  description:
                    'Sets the X position of the notification tip.\n                  Defaults to "after" if it has content, else "center"',
                  name: 'positionX',
                  type: 'TdNotificationCountPositionX or "before" | "after" | "center"',
                },
                {
                  description:
                    'Sets the Y position of the notification tip.\n                  Defaults to "top" if it has content, else "center"',
                  name: 'positionY',
                  type: 'TdNotificationCountPositionY or "top" | "bottom" | "center"',
                },
              ]);
          }).ɵfac = function(t) {
            return new (t || i)();
          }),
          (i.ɵcmp = p.Mb({
            type: i,
            selectors: [['notifications-demo']],
            decls: 8,
            vars: 2,
            consts: [
              ['mat-icon-button', '', 1, 'overflow-visible'],
              [3, 'notifications', 'limit'],
            ],
            template: function(t, o) {
              1 & t &&
                (p.Yb(0, 'button', 0),
                p.Tc(1, '\n  '),
                p.Yb(2, 'td-notification-count', 1),
                p.Tc(3, '\n      '),
                p.Yb(4, 'mat-icon'),
                p.Tc(5, 'notifications'),
                p.Wb(),
                p.Tc(6, '\n  '),
                p.Wb(),
                p.Tc(7, '\n'),
                p.Wb()),
                2 & t && (p.Db(2), p.qc('notifications', 101)('limit', 50));
            },
            directives: [r.b, l.a, a.a],
            styles: [''],
          })),
          i),
        m = n('gw4G');
      n.d(o, 'NotificationsDemoModule', function() {
        return w;
      });
      var h,
        d = Object(u.c)({ overviewDemoComponent: b, id: 'notifications' }),
        w =
          (((h = function t() {
            _classCallCheck(this, t);
          }).ɵmod = p.Qb({ type: h })),
          (h.ɵinj = p.Pb({
            factory: function(t) {
              return new (t || h)();
            },
            providers: [],
            imports: [[e.c, s.b, a.b, r.c, f.a, m.i, c.f.forChild(d)]],
          })),
          h);
    },
    eTLM: function(t, o, n) {
      'use strict';
      n.d(o, 'a', function() {
        return l;
      });
      var i = n('ofXK'),
        e = n('tyNb'),
        c = n('wZkO'),
        s = n('NFeN'),
        a = n('Wp6s'),
        r = n('sHJK'),
        f = n('ZI6o'),
        u = (n('p6QC'), n('SNPZ'), n('dE5l')),
        p = n('fXoL'),
        l = (function() {
          var t = function t() {
            _classCallCheck(this, t);
          };
          return (
            (t.ɵmod = p.Qb({ type: t })),
            (t.ɵinj = p.Pb({
              factory: function(o) {
                return new (o || t)();
              },
              providers: [],
              imports: [[i.c, e.f, s.b, a.e, c.f, f.a, r.a, u.a]],
            })),
            t
          );
        })();
    },
  },
]);
