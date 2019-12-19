(window.webpackJsonp = window.webpackJsonp || []).push([
  [85],
  {
    z54b: function(t, n, o) {
      'use strict';
      o.r(n);
      var e = o('Krbs'),
        s = o('gw4G'),
        a = o('hz0R'),
        c = o('tyNb'),
        r = o('fXoL'),
        i = o('MJ5V'),
        u = o('MNZh');
      const d = [
        {
          path: '',
          component: (() => {
            class t {}
            return (
              (t.ɵfac = function(n) {
                return new (n || t)();
              }),
              (t.ɵcmp = r.Mb({
                type: t,
                selectors: [['layout-nav-list-demo']],
                decls: 2,
                vars: 1,
                consts: [[3, 'demoId']],
                template: function(t, n) {
                  1 & t && (r.Yb(0, 'demo-component', 0), r.Tb(1, 'layout-nav-list-demo-basic'), r.Wb()),
                    2 & t && r.qc('demoId', 'layout-nav-list-demo-basic');
                },
                directives: [i.a, u.a],
                styles: [''],
              })),
              t
            );
          })(),
        },
      ];
      let l = (() => {
        class t {}
        return (
          (t.ɵmod = r.Qb({ type: t })),
          (t.ɵinj = r.Pb({
            factory: function(n) {
              return new (n || t)();
            },
            imports: [[c.f.forChild(d)], c.f],
          })),
          t
        );
      })();
      o.d(n, 'LayoutNavListDemosModule', function() {
        return b;
      });
      let b = (() => {
        class t {}
        return (
          (t.ɵmod = r.Qb({ type: t })),
          (t.ɵinj = r.Pb({
            factory: function(n) {
              return new (n || t)();
            },
            imports: [[a.a, e.a, l, s.f]],
          })),
          t
        );
      })();
    },
  },
]);
