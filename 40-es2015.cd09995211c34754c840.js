(window.webpackJsonp = window.webpackJsonp || []).push([
  [40],
  {
    '4Q3z': function(r, e, c) {
      'use strict';
      c.r(e);
      var n = c('ofXK'),
        u = c('tyNb'),
        t = c('d3UM'),
        o = c('NFeN'),
        b = c('fXoL'),
        a = c('LrZb'),
        s = c('9kOK');
      const i = function() {
          return ['/components', 'breadcrumbs'];
        },
        d = function() {
          return { query: 1 };
        },
        m = function() {
          return { query: 2 };
        },
        f = function() {
          return { query: 3 };
        },
        p = function() {
          return { query: 4 };
        };
      let y = (() => {
        class r {}
        return (
          (r.ɵfac = function(e) {
            return new (e || r)();
          }),
          (r.ɵcmp = b.Mb({
            type: r,
            selectors: [['breadcrumbs-demo']],
            decls: 21,
            vars: 16,
            consts: [
              [1, 'pad'],
              ['td-breadcrumb', '', 3, 'routerLink', 'queryParams'],
            ],
            template: function(r, e) {
              1 & r &&
                (b.Yb(0, 'div', 0),
                b.Tc(1, '\n  '),
                b.Yb(2, 'td-breadcrumbs'),
                b.Tc(3, '\n    '),
                b.Yb(4, 'a', 1),
                b.Tc(5, 'Home'),
                b.Wb(),
                b.Tc(6, '\n    '),
                b.Yb(7, 'a', 1),
                b.Tc(8, 'Breadcrumb 1'),
                b.Wb(),
                b.Tc(9, '\n    '),
                b.Yb(10, 'a', 1),
                b.Tc(11, 'Breadcrumb 2'),
                b.Wb(),
                b.Tc(12, '\n    '),
                b.Yb(13, 'a', 1),
                b.Tc(14, 'Breadcrumb 3'),
                b.Wb(),
                b.Tc(15, '\n    '),
                b.Yb(16, 'td-breadcrumb'),
                b.Tc(17, 'Current'),
                b.Wb(),
                b.Tc(18, '\n  '),
                b.Wb(),
                b.Tc(19, '\n'),
                b.Wb(),
                b.Tc(20, '\n')),
                2 & r &&
                  (b.Db(4),
                  b.qc('routerLink', b.uc(8, i))('queryParams', b.uc(9, d)),
                  b.Db(3),
                  b.qc('routerLink', b.uc(10, i))('queryParams', b.uc(11, m)),
                  b.Db(3),
                  b.qc('routerLink', b.uc(12, i))('queryParams', b.uc(13, f)),
                  b.Db(3),
                  b.qc('routerLink', b.uc(14, i))('queryParams', b.uc(15, p)));
            },
            directives: [a.a, s.a, u.e],
            styles: [''],
          })),
          r
        );
      })();
      var T = c('eTLM'),
        l = c('Mzob'),
        q = c('Q3DV');
      c.d(e, 'BreadcrumbsDemoModule', function() {
        return v;
      });
      const w = Object(q.c)({ overviewDemoComponent: y, id: 'breadcrumbs' });
      let v = (() => {
        class r {}
        return (
          (r.ɵmod = b.Qb({ type: r })),
          (r.ɵinj = b.Pb({
            factory: function(e) {
              return new (e || r)();
            },
            providers: [],
            imports: [[n.c, t.b, o.b, T.a, l.a, u.f.forChild(w)]],
          })),
          r
        );
      })();
    },
    'eTLM': function(r, e, c) {
      'use strict';
      c.d(e, 'a', function() {
        return m;
      });
      var n = c('ofXK'),
        u = c('tyNb'),
        t = c('wZkO'),
        o = c('NFeN'),
        b = c('Wp6s'),
        a = c('sHJK'),
        s = c('ZI6o'),
        i = (c('p6QC'), c('SNPZ'), c('dE5l')),
        d = c('fXoL');
      let m = (() => {
        class r {}
        return (
          (r.ɵmod = d.Qb({ type: r })),
          (r.ɵinj = d.Pb({
            factory: function(e) {
              return new (e || r)();
            },
            providers: [],
            imports: [[n.c, u.f, o.b, b.e, t.f, s.a, a.a, i.a]],
          })),
          r
        );
      })();
    },
  },
]);
