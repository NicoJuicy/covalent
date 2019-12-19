function _classCallCheck(e, t) {
  if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
}
(window.webpackJsonp = window.webpackJsonp || []).push([
  [99],
  {
    FGu0: function(e, t, n) {
      'use strict';
      n.r(t);
      var c,
        i,
        s,
        o = n('ofXK'),
        a = n('fXoL'),
        u = n('XhcP'),
        r = n('vQWy'),
        l = n('bTqV'),
        b = n('NFeN'),
        d = n('/t3+'),
        m =
          (((c = function e() {
            _classCallCheck(this, e);
          }).ɵfac = function(e) {
            return new (e || c)();
          }),
          (c.ɵcmp = a.Mb({
            type: c,
            selectors: [['sidesheet-demo-basic']],
            decls: 47,
            vars: 2,
            consts: [
              [1, 'relative'],
              ['fullscreen', ''],
              ['position', 'end', 'mode', 'side', 3, 'opened'],
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
                var n = a.Zb();
                a.Yb(0, 'div', 0),
                  a.Tc(1, '\n        '),
                  a.Yb(2, 'mat-sidenav-container', 1),
                  a.Tc(3, '\n          '),
                  a.Yb(4, 'mat-sidenav', 2, 3),
                  a.Tc(6, '\n            '),
                  a.Yb(7, 'td-sidesheet'),
                  a.Tc(8, '\n              '),
                  a.Yb(9, 'td-sidesheet-header'),
                  a.Tc(10, '\n                '),
                  a.Yb(11, 'td-sidesheet-title'),
                  a.Tc(12, 'Sidesheet title'),
                  a.Wb(),
                  a.Tc(13, '\n                '),
                  a.Yb(14, 'button', 4),
                  a.Tc(15, '\n                  '),
                  a.Yb(16, 'mat-icon', 5),
                  a.gc('click', function(e) {
                    return a.Ic(n), a.Fc(5).toggle();
                  }),
                  a.Tc(17, 'close'),
                  a.Wb(),
                  a.Tc(18, '\n                '),
                  a.Wb(),
                  a.Tc(19, '\n              '),
                  a.Wb(),
                  a.Tc(20, '\n              '),
                  a.Yb(21, 'td-sidesheet-content'),
                  a.Tc(22, '\n                '),
                  a.Yb(23, 'p'),
                  a.Tc(
                    24,
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin feugiat aliquet sem, a molestie dolor molestie placerat. Donec convallis sodales magna, nec varius tellus tincidunt lacinia. Vivamus sollicitudin finibus imperdiet. Quisque mattis quis mauris a facilisis. Maecenas tristique sem molestie diam varius viverra. Duis egestas mi neque, a posuere libero pellentesque quis. Sed ornare metus augue, vitae maximus lorem euismod vel. Curabitur finibus nisl ac purus efficitur tempor. Morbi fermentum lorem fermentum justo cursus, nec volutpat mi blandit. In nec accumsan quam, eget venenatis arcu.',
                  ),
                  a.Wb(),
                  a.Tc(25, '\n              '),
                  a.Wb(),
                  a.Tc(26, '\n              '),
                  a.Yb(27, 'td-sidesheet-actions'),
                  a.Tc(28, '\n                '),
                  a.Yb(29, 'button', 6),
                  a.Tc(30, 'action'),
                  a.Wb(),
                  a.Tc(31, '\n                '),
                  a.Yb(32, 'button', 7),
                  a.Tc(33, 'cancel'),
                  a.Wb(),
                  a.Tc(34, '\n              '),
                  a.Wb(),
                  a.Tc(35, '\n            '),
                  a.Wb(),
                  a.Tc(36, '  \n          '),
                  a.Wb(),
                  a.Tc(37, '\n          '),
                  a.Yb(38, 'mat-toolbar', 8),
                  a.Tc(39, '\n            '),
                  a.Tb(40, 'span', 9),
                  a.Tc(41, '\n            '),
                  a.Yb(42, 'button', 10),
                  a.gc('click', function(e) {
                    return a.Ic(n), a.Fc(5).toggle();
                  }),
                  a.Tc(43, '\n              Toggle Sidesheet\n            '),
                  a.Wb(),
                  a.Tc(44, '\n          '),
                  a.Wb(),
                  a.Tc(45, '\n          Content goes here\n        '),
                  a.Wb(),
                  a.Tc(46, '\n      '),
                  a.Wb();
              }
              2 & e && (a.Pc('height', '300px'), a.Db(4), a.qc('opened', !0));
            },
            directives: [u.b, u.a, r.b, r.d, r.e, l.b, b.a, r.c, r.a, d.a],
            styles: [''],
          })),
          c),
        f = n('FN9e'),
        p = n('MJ5V'),
        T =
          (((i = function e() {
            _classCallCheck(this, e);
          }).ɵfac = function(e) {
            return new (e || i)();
          }),
          (i.ɵcmp = a.Mb({
            type: i,
            selectors: [['sidesheet-demo']],
            decls: 2,
            vars: 1,
            consts: [[3, 'demoId']],
            template: function(e, t) {
              1 & e && (a.Yb(0, 'demo-component', 0), a.Tb(1, 'sidesheet-demo-basic'), a.Wb()),
                2 & e && a.qc('demoId', 'sidesheet-demo-basic');
            },
            directives: [p.a, m],
            styles: [''],
          })),
          i),
        h = n('tyNb'),
        v = [{ path: '', component: T }],
        g =
          (((s = function e() {
            _classCallCheck(this, e);
          }).ɵmod = a.Qb({ type: s })),
          (s.ɵinj = a.Pb({
            factory: function(e) {
              return new (e || s)();
            },
            imports: [[h.f.forChild(v)], h.f],
          })),
          s),
        W = n('Krbs');
      n.d(t, 'SidesheetDemoModule', function() {
        return C;
      });
      var Y,
        C =
          (((Y = function e() {
            _classCallCheck(this, e);
          }).ɵmod = a.Qb({ type: Y })),
          (Y.ɵinj = a.Pb({
            factory: function(e) {
              return new (e || Y)();
            },
            imports: [[W.a, g, f.a, o.c, b.b, u.d, l.c, d.b]],
          })),
          Y);
    },
  },
]);
