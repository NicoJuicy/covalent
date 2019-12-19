function _classCallCheck(e, t) {
  if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
}
(window.webpackJsonp = window.webpackJsonp || []).push([
  [62],
  {
    eTLM: function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return d;
      });
      var i = n('ofXK'),
        c = n('tyNb'),
        s = n('wZkO'),
        o = n('NFeN'),
        a = n('Wp6s'),
        r = n('sHJK'),
        u = n('ZI6o'),
        l = (n('p6QC'), n('SNPZ'), n('dE5l')),
        b = n('fXoL'),
        d = (function() {
          var e = function e() {
            _classCallCheck(this, e);
          };
          return (
            (e.ɵmod = b.Qb({ type: e })),
            (e.ɵinj = b.Pb({
              factory: function(t) {
                return new (t || e)();
              },
              providers: [],
              imports: [[i.c, c.f, o.b, a.e, s.f, u.a, r.a, l.a]],
            })),
            e
          );
        })();
    },
    mneG: function(e, t, n) {
      'use strict';
      n.r(t);
      var i,
        c = n('ofXK'),
        s = n('tyNb'),
        o = n('Wp6s'),
        a = n('f0Cb'),
        r = n('NFeN'),
        u = n('XhcP'),
        l = n('wZkO'),
        b = n('/t3+'),
        d = n('eTLM'),
        m = n('XkJo'),
        f = n('FN9e'),
        p = n('Q3DV'),
        T = n('fXoL'),
        h = n('vQWy'),
        v = n('bTqV'),
        g = n('Qu3c'),
        W =
          (((i = function e() {
            _classCallCheck(this, e);
          }).ɵfac = function(e) {
            return new (e || i)();
          }),
          (i.ɵcmp = T.Mb({
            type: i,
            selectors: [['sidesheet-demo']],
            decls: 48,
            vars: 2,
            consts: [
              [1, 'relative'],
              ['fullscreen', ''],
              ['position', 'end', 'mode', 'side', 'flex-xs', '100', 3, 'opened'],
              ['sidesheet', ''],
              ['mat-icon-button', '', 'td-sidesheet-header-action', ''],
              ['matTooltipPosition', 'before', 'matTooltip', 'Close', 3, 'click'],
              ['mat-raised-button', '', 'color', 'accent', 1, 'text-upper'],
              ['mat-button', '', 1, 'text-upper'],
              ['layout', 'row', 'layout-align', 'start center', 'flex', ''],
              ['flex', ''],
              ['mat-button', '', 3, 'click'],
            ],
            template: function(e, t) {
              if (1 & e) {
                var n = T.Zb();
                T.Yb(0, 'div', 0),
                  T.Tc(1, '\n  '),
                  T.Yb(2, 'mat-sidenav-container', 1),
                  T.Tc(3, '\n    '),
                  T.Yb(4, 'mat-sidenav', 2, 3),
                  T.Tc(6, '\n      '),
                  T.Yb(7, 'td-sidesheet'),
                  T.Tc(8, '\n        '),
                  T.Yb(9, 'td-sidesheet-header'),
                  T.Tc(10, '\n          '),
                  T.Yb(11, 'td-sidesheet-title'),
                  T.Tc(12, 'Sidesheet title'),
                  T.Wb(),
                  T.Tc(13, '\n          '),
                  T.Yb(14, 'button', 4),
                  T.Tc(15, '\n            '),
                  T.Yb(16, 'mat-icon', 5),
                  T.gc('click', function(e) {
                    return T.Ic(n), T.Fc(5).toggle();
                  }),
                  T.Tc(17, 'close'),
                  T.Wb(),
                  T.Tc(18, '\n          '),
                  T.Wb(),
                  T.Tc(19, '\n        '),
                  T.Wb(),
                  T.Tc(20, '\n        '),
                  T.Yb(21, 'td-sidesheet-content'),
                  T.Tc(22, '\n          '),
                  T.Yb(23, 'p'),
                  T.Tc(
                    24,
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin feugiat aliquet sem, a molestie dolor molestie placerat. Donec convallis sodales magna, nec varius tellus tincidunt lacinia. Vivamus sollicitudin finibus imperdiet. Quisque mattis quis mauris a facilisis. Maecenas tristique sem molestie diam varius viverra. Duis egestas mi neque, a posuere libero pellentesque quis. Sed ornare metus augue, vitae maximus lorem euismod vel. Curabitur finibus nisl ac purus efficitur tempor. Morbi fermentum lorem fermentum justo cursus, nec volutpat mi blandit. In nec accumsan quam, eget venenatis arcu.',
                  ),
                  T.Wb(),
                  T.Tc(25, '\n        '),
                  T.Wb(),
                  T.Tc(26, '\n        '),
                  T.Yb(27, 'td-sidesheet-actions'),
                  T.Tc(28, '\n          '),
                  T.Yb(29, 'button', 6),
                  T.Tc(30, 'action'),
                  T.Wb(),
                  T.Tc(31, '\n          '),
                  T.Yb(32, 'button', 7),
                  T.Tc(33, 'cancel'),
                  T.Wb(),
                  T.Tc(34, '\n        '),
                  T.Wb(),
                  T.Tc(35, '\n      '),
                  T.Wb(),
                  T.Tc(36, '  \n    '),
                  T.Wb(),
                  T.Tc(37, '\n    '),
                  T.Yb(38, 'mat-toolbar', 8),
                  T.Tc(39, '\n      '),
                  T.Tb(40, 'span', 9),
                  T.Tc(41, '\n      '),
                  T.Yb(42, 'button', 10),
                  T.gc('click', function(e) {
                    return T.Ic(n), T.Fc(5).toggle();
                  }),
                  T.Tc(43, '\n        Toggle Sidesheet\n      '),
                  T.Wb(),
                  T.Tc(44, '\n    '),
                  T.Wb(),
                  T.Tc(45, '\n    Content goes here\n  '),
                  T.Wb(),
                  T.Tc(46, '\n'),
                  T.Wb(),
                  T.Tc(47, '\n');
              }
              2 & e && (T.Pc('height', '300px'), T.Db(4), T.qc('opened', !0));
            },
            directives: [u.b, u.a, h.b, h.d, h.e, v.b, r.a, g.a, h.c, h.a, b.a],
            styles: ['[_nghost-%COMP%]{width:100%}'],
            changeDetection: 0,
          })),
          i);
      n.d(t, 'SidesheetDemoModule', function() {
        return Y;
      });
      var C,
        w = Object(p.c)({ overviewDemoComponent: W, id: 'sidesheet' }),
        Y =
          (((C = function e() {
            _classCallCheck(this, e);
          }).ɵmod = T.Qb({ type: C })),
          (C.ɵinj = T.Pb({
            factory: function(e) {
              return new (e || C)();
            },
            providers: [],
            imports: [[c.c, u.d, b.b, v.c, o.e, a.b, r.b, u.d, l.f, b.b, d.a, m.a, f.a, s.f.forChild(w)]],
          })),
          C);
    },
  },
]);
