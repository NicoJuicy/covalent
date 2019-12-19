(window.webpackJsonp = window.webpackJsonp || []).push([
  [99],
  {
    FGu0: function(e, t, n) {
      'use strict';
      n.r(t);
      var c = n('ofXK'),
        i = n('fXoL'),
        s = n('XhcP'),
        o = n('vQWy'),
        a = n('bTqV'),
        r = n('NFeN'),
        u = n('/t3+');
      let b = (() => {
        class e {}
        return (
          (e.ɵfac = function(t) {
            return new (t || e)();
          }),
          (e.ɵcmp = i.Mb({
            type: e,
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
                const e = i.Zb();
                i.Yb(0, 'div', 0),
                  i.Tc(1, '\n        '),
                  i.Yb(2, 'mat-sidenav-container', 1),
                  i.Tc(3, '\n          '),
                  i.Yb(4, 'mat-sidenav', 2, 3),
                  i.Tc(6, '\n            '),
                  i.Yb(7, 'td-sidesheet'),
                  i.Tc(8, '\n              '),
                  i.Yb(9, 'td-sidesheet-header'),
                  i.Tc(10, '\n                '),
                  i.Yb(11, 'td-sidesheet-title'),
                  i.Tc(12, 'Sidesheet title'),
                  i.Wb(),
                  i.Tc(13, '\n                '),
                  i.Yb(14, 'button', 4),
                  i.Tc(15, '\n                  '),
                  i.Yb(16, 'mat-icon', 5),
                  i.gc('click', function(t) {
                    return i.Ic(e), i.Fc(5).toggle();
                  }),
                  i.Tc(17, 'close'),
                  i.Wb(),
                  i.Tc(18, '\n                '),
                  i.Wb(),
                  i.Tc(19, '\n              '),
                  i.Wb(),
                  i.Tc(20, '\n              '),
                  i.Yb(21, 'td-sidesheet-content'),
                  i.Tc(22, '\n                '),
                  i.Yb(23, 'p'),
                  i.Tc(
                    24,
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin feugiat aliquet sem, a molestie dolor molestie placerat. Donec convallis sodales magna, nec varius tellus tincidunt lacinia. Vivamus sollicitudin finibus imperdiet. Quisque mattis quis mauris a facilisis. Maecenas tristique sem molestie diam varius viverra. Duis egestas mi neque, a posuere libero pellentesque quis. Sed ornare metus augue, vitae maximus lorem euismod vel. Curabitur finibus nisl ac purus efficitur tempor. Morbi fermentum lorem fermentum justo cursus, nec volutpat mi blandit. In nec accumsan quam, eget venenatis arcu.',
                  ),
                  i.Wb(),
                  i.Tc(25, '\n              '),
                  i.Wb(),
                  i.Tc(26, '\n              '),
                  i.Yb(27, 'td-sidesheet-actions'),
                  i.Tc(28, '\n                '),
                  i.Yb(29, 'button', 6),
                  i.Tc(30, 'action'),
                  i.Wb(),
                  i.Tc(31, '\n                '),
                  i.Yb(32, 'button', 7),
                  i.Tc(33, 'cancel'),
                  i.Wb(),
                  i.Tc(34, '\n              '),
                  i.Wb(),
                  i.Tc(35, '\n            '),
                  i.Wb(),
                  i.Tc(36, '  \n          '),
                  i.Wb(),
                  i.Tc(37, '\n          '),
                  i.Yb(38, 'mat-toolbar', 8),
                  i.Tc(39, '\n            '),
                  i.Tb(40, 'span', 9),
                  i.Tc(41, '\n            '),
                  i.Yb(42, 'button', 10),
                  i.gc('click', function(t) {
                    return i.Ic(e), i.Fc(5).toggle();
                  }),
                  i.Tc(43, '\n              Toggle Sidesheet\n            '),
                  i.Wb(),
                  i.Tc(44, '\n          '),
                  i.Wb(),
                  i.Tc(45, '\n          Content goes here\n        '),
                  i.Wb(),
                  i.Tc(46, '\n      '),
                  i.Wb();
              }
              2 & e && (i.Pc('height', '300px'), i.Db(4), i.qc('opened', !0));
            },
            directives: [s.b, s.a, o.b, o.d, o.e, a.b, r.a, o.c, o.a, u.a],
            styles: [''],
          })),
          e
        );
      })();
      var l = n('FN9e'),
        d = n('MJ5V');
      let m = (() => {
        class e {}
        return (
          (e.ɵfac = function(t) {
            return new (t || e)();
          }),
          (e.ɵcmp = i.Mb({
            type: e,
            selectors: [['sidesheet-demo']],
            decls: 2,
            vars: 1,
            consts: [[3, 'demoId']],
            template: function(e, t) {
              1 & e && (i.Yb(0, 'demo-component', 0), i.Tb(1, 'sidesheet-demo-basic'), i.Wb()),
                2 & e && i.qc('demoId', 'sidesheet-demo-basic');
            },
            directives: [d.a, b],
            styles: [''],
          })),
          e
        );
      })();
      var p = n('tyNb');
      const T = [{ path: '', component: m }];
      let f = (() => {
        class e {}
        return (
          (e.ɵmod = i.Qb({ type: e })),
          (e.ɵinj = i.Pb({
            factory: function(t) {
              return new (t || e)();
            },
            imports: [[p.f.forChild(T)], p.f],
          })),
          e
        );
      })();
      var h = n('Krbs');
      n.d(t, 'SidesheetDemoModule', function() {
        return v;
      });
      let v = (() => {
        class e {}
        return (
          (e.ɵmod = i.Qb({ type: e })),
          (e.ɵinj = i.Pb({
            factory: function(t) {
              return new (t || e)();
            },
            imports: [[h.a, f, l.a, c.c, r.b, s.d, a.c, u.b]],
          })),
          e
        );
      })();
    },
  },
]);
