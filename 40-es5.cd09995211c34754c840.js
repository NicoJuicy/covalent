function _classCallCheck(r, c) {
  if (!(r instanceof c)) throw new TypeError('Cannot call a class as a function');
}
(window.webpackJsonp = window.webpackJsonp || []).push([
  [40],
  {
    '4Q3z': function(r, c, n) {
      'use strict';
      n.r(c);
      var e,
        t = n('ofXK'),
        u = n('tyNb'),
        a = n('d3UM'),
        o = n('NFeN'),
        b = n('fXoL'),
        s = n('LrZb'),
        i = n('9kOK'),
        f = function() {
          return ['/components', 'breadcrumbs'];
        },
        d = function() {
          return { query: 1 };
        },
        m = function() {
          return { query: 2 };
        },
        l = function() {
          return { query: 3 };
        },
        p = function() {
          return { query: 4 };
        },
        y =
          (((e = function r() {
            _classCallCheck(this, r);
          }).ɵfac = function(r) {
            return new (r || e)();
          }),
          (e.ɵcmp = b.Mb({
            type: e,
            selectors: [['breadcrumbs-demo']],
            decls: 21,
            vars: 16,
            consts: [
              [1, 'pad'],
              ['td-breadcrumb', '', 3, 'routerLink', 'queryParams'],
            ],
            template: function(r, c) {
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
                  b.qc('routerLink', b.uc(8, f))('queryParams', b.uc(9, d)),
                  b.Db(3),
                  b.qc('routerLink', b.uc(10, f))('queryParams', b.uc(11, m)),
                  b.Db(3),
                  b.qc('routerLink', b.uc(12, f))('queryParams', b.uc(13, l)),
                  b.Db(3),
                  b.qc('routerLink', b.uc(14, f))('queryParams', b.uc(15, p)));
            },
            directives: [s.a, i.a, u.e],
            styles: [''],
          })),
          e),
        T = n('eTLM'),
        k = n('Mzob'),
        q = n('Q3DV');
      n.d(c, 'BreadcrumbsDemoModule', function() {
        return v;
      });
      var w,
        C = Object(q.c)({ overviewDemoComponent: y, id: 'breadcrumbs' }),
        v =
          (((w = function r() {
            _classCallCheck(this, r);
          }).ɵmod = b.Qb({ type: w })),
          (w.ɵinj = b.Pb({
            factory: function(r) {
              return new (r || w)();
            },
            providers: [],
            imports: [[t.c, a.b, o.b, T.a, k.a, u.f.forChild(C)]],
          })),
          w);
    },
    'eTLM': function(r, c, n) {
      'use strict';
      n.d(c, 'a', function() {
        return d;
      });
      var e = n('ofXK'),
        t = n('tyNb'),
        u = n('wZkO'),
        a = n('NFeN'),
        o = n('Wp6s'),
        b = n('sHJK'),
        s = n('ZI6o'),
        i = (n('p6QC'), n('SNPZ'), n('dE5l')),
        f = n('fXoL'),
        d = (function() {
          var r = function r() {
            _classCallCheck(this, r);
          };
          return (
            (r.ɵmod = f.Qb({ type: r })),
            (r.ɵinj = f.Pb({
              factory: function(c) {
                return new (c || r)();
              },
              providers: [],
              imports: [[e.c, t.f, a.b, o.e, u.f, s.a, b.a, i.a]],
            })),
            r
          );
        })();
    },
  },
]);
