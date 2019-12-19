(window.webpackJsonp = window.webpackJsonp || []).push([
  [86],
  {
    LC9I: function(t, n, e) {
      'use strict';
      e.r(n);
      var o = e('Krbs'),
        a = e('gw4G'),
        s = e('fXoL'),
        c = e('MJ5V'),
        r = e('eusM');
      let i = (() => {
        class t {}
        return (
          (t.ɵfac = function(n) {
            return new (n || t)();
          }),
          (t.ɵcmp = s.Mb({
            type: t,
            selectors: [['layout-nav-demo']],
            decls: 2,
            vars: 1,
            consts: [[3, 'demoId']],
            template: function(t, n) {
              1 & t && (s.Yb(0, 'demo-component', 0), s.Tb(1, 'layout-nav-demo-basic'), s.Wb()),
                2 & t && s.qc('demoId', 'layout-nav-demo-basic');
            },
            directives: [c.a, r.a],
            styles: [
              '[_nghost-%COMP%]   mat-sidenav.mat-sidenav[_ngcontent-%COMP%]    {max-width:100px;min-width:100px}',
            ],
          })),
          t
        );
      })();
      var d = e('UTcn'),
        u = e('tyNb');
      const m = [{ path: '', component: i }];
      let p = (() => {
        class t {}
        return (
          (t.ɵmod = s.Qb({ type: t })),
          (t.ɵinj = s.Pb({
            factory: function(n) {
              return new (n || t)();
            },
            imports: [[u.f.forChild(m)], u.f],
          })),
          t
        );
      })();
      e.d(n, 'LayoutNavDemosModule', function() {
        return l;
      });
      let l = (() => {
        class t {}
        return (
          (t.ɵmod = s.Qb({ type: t })),
          (t.ɵinj = s.Pb({
            factory: function(n) {
              return new (n || t)();
            },
            imports: [[d.a, o.a, p, a.f]],
          })),
          t
        );
      })();
    },
  },
]);
