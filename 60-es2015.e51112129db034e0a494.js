(window.webpackJsonp = window.webpackJsonp || []).push([
  [60],
  {
    ElaO: function(t, o, n) {
      'use strict';
      n.r(o);
      var i = n('ofXK'),
        e = n('tyNb'),
        c = n('d3UM'),
        s = n('NFeN'),
        r = n('bTqV'),
        a = n('eTLM'),
        f = n('Q3DV'),
        p = n('fXoL'),
        u = n('KQ0f');
      let b = (() => {
        class t {
          constructor() {
            this.notificationsAttrs = [
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
            ];
          }
        }
        return (
          (t.ɵfac = function(o) {
            return new (o || t)();
          }),
          (t.ɵcmp = p.Mb({
            type: t,
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
            directives: [r.b, u.a, s.a],
            styles: [''],
          })),
          t
        );
      })();
      var l = n('gw4G');
      n.d(o, 'NotificationsDemoModule', function() {
        return d;
      });
      const m = Object(f.c)({ overviewDemoComponent: b, id: 'notifications' });
      let d = (() => {
        class t {}
        return (
          (t.ɵmod = p.Qb({ type: t })),
          (t.ɵinj = p.Pb({
            factory: function(o) {
              return new (o || t)();
            },
            providers: [],
            imports: [[i.c, c.b, s.b, r.c, a.a, l.i, e.f.forChild(m)]],
          })),
          t
        );
      })();
    },
    eTLM: function(t, o, n) {
      'use strict';
      n.d(o, 'a', function() {
        return b;
      });
      var i = n('ofXK'),
        e = n('tyNb'),
        c = n('wZkO'),
        s = n('NFeN'),
        r = n('Wp6s'),
        a = n('sHJK'),
        f = n('ZI6o'),
        p = (n('p6QC'), n('SNPZ'), n('dE5l')),
        u = n('fXoL');
      let b = (() => {
        class t {}
        return (
          (t.ɵmod = u.Qb({ type: t })),
          (t.ɵinj = u.Pb({
            factory: function(o) {
              return new (o || t)();
            },
            providers: [],
            imports: [[i.c, e.f, s.b, r.e, c.f, f.a, a.a, p.a]],
          })),
          t
        );
      })();
    },
  },
]);
