(window.webpackJsonp = window.webpackJsonp || []).push([
  [73],
  {
    XbLF: function(r, e, c) {
      'use strict';
      c.r(e);
      var n = c('ofXK'),
        t = c('fXoL'),
        u = c('LrZb'),
        a = c('9kOK'),
        b = c('tyNb');
      const o = function() {
          return ['/components', 'breadcrumbs', 'examples'];
        },
        s = function() {
          return { query: 1 };
        },
        m = function() {
          return { query: 2 };
        },
        d = function() {
          return { query: 3 };
        },
        i = function() {
          return { query: 4 };
        };
      let f = (() => {
        class r {}
        return (
          (r.ɵfac = function(e) {
            return new (e || r)();
          }),
          (r.ɵcmp = t.Mb({
            type: r,
            selectors: [['breadcrumbs-demo-basic']],
            decls: 17,
            vars: 16,
            consts: [['td-breadcrumb', '', 3, 'routerLink', 'queryParams']],
            template: function(r, e) {
              1 & r &&
                (t.Yb(0, 'td-breadcrumbs'),
                t.Tc(1, '\n  '),
                t.Yb(2, 'a', 0),
                t.Tc(3, 'Home'),
                t.Wb(),
                t.Tc(4, '\n  '),
                t.Yb(5, 'a', 0),
                t.Tc(6, 'Breadcrumb 1'),
                t.Wb(),
                t.Tc(7, '\n  '),
                t.Yb(8, 'a', 0),
                t.Tc(9, 'Breadcrumb 2'),
                t.Wb(),
                t.Tc(10, '\n  '),
                t.Yb(11, 'a', 0),
                t.Tc(12, 'Breadcrumb 3'),
                t.Wb(),
                t.Tc(13, '\n    '),
                t.Yb(14, 'td-breadcrumb'),
                t.Tc(15, 'Manage List'),
                t.Wb(),
                t.Tc(16, '\n'),
                t.Wb()),
                2 & r &&
                  (t.Db(2),
                  t.qc('routerLink', t.uc(8, o))('queryParams', t.uc(9, s)),
                  t.Db(3),
                  t.qc('routerLink', t.uc(10, o))('queryParams', t.uc(11, m)),
                  t.Db(3),
                  t.qc('routerLink', t.uc(12, o))('queryParams', t.uc(13, d)),
                  t.Db(3),
                  t.qc('routerLink', t.uc(14, o))('queryParams', t.uc(15, i)));
            },
            directives: [u.a, a.a, b.e],
            styles: [''],
          })),
          r
        );
      })();
      var p = c('Mzob'),
        l = c('MJ5V');
      const y = [
        {
          path: '',
          component: (() => {
            class r {}
            return (
              (r.ɵfac = function(e) {
                return new (e || r)();
              }),
              (r.ɵcmp = t.Mb({
                type: r,
                selectors: [['breadcrumbs-demo']],
                decls: 2,
                vars: 1,
                consts: [[3, 'demoId']],
                template: function(r, e) {
                  1 & r && (t.Yb(0, 'demo-component', 0), t.Tb(1, 'breadcrumbs-demo-basic'), t.Wb()),
                    2 & r && t.qc('demoId', 'breadcrumbs-demo-basic');
                },
                directives: [l.a, f],
                styles: [''],
              })),
              r
            );
          })(),
        },
      ];
      let q = (() => {
        class r {}
        return (
          (r.ɵmod = t.Qb({ type: r })),
          (r.ɵinj = t.Pb({
            factory: function(e) {
              return new (e || r)();
            },
            imports: [[b.f.forChild(y)], b.f],
          })),
          r
        );
      })();
      var T = c('Krbs');
      c.d(e, 'BreadcrumbsDemoModule', function() {
        return w;
      });
      let w = (() => {
        class r {}
        return (
          (r.ɵmod = t.Qb({ type: r })),
          (r.ɵinj = t.Pb({
            factory: function(e) {
              return new (e || r)();
            },
            imports: [[T.a, q, p.a, n.c]],
          })),
          r
        );
      })();
    },
  },
]);
