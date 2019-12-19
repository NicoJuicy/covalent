function _classCallCheck(c, r) {
  if (!(c instanceof r)) throw new TypeError('Cannot call a class as a function');
}
(window.webpackJsonp = window.webpackJsonp || []).push([
  [73],
  {
    XbLF: function(c, r, e) {
      'use strict';
      e.r(r);
      var n,
        t,
        a,
        u = e('ofXK'),
        o = e('fXoL'),
        s = e('LrZb'),
        b = e('9kOK'),
        i = e('tyNb'),
        m = function() {
          return ['/components', 'breadcrumbs', 'examples'];
        },
        d = function() {
          return { query: 1 };
        },
        f = function() {
          return { query: 2 };
        },
        l = function() {
          return { query: 3 };
        },
        p = function() {
          return { query: 4 };
        },
        y =
          (((n = function c() {
            _classCallCheck(this, c);
          }).ɵfac = function(c) {
            return new (c || n)();
          }),
          (n.ɵcmp = o.Mb({
            type: n,
            selectors: [['breadcrumbs-demo-basic']],
            decls: 17,
            vars: 16,
            consts: [['td-breadcrumb', '', 3, 'routerLink', 'queryParams']],
            template: function(c, r) {
              1 & c &&
                (o.Yb(0, 'td-breadcrumbs'),
                o.Tc(1, '\n  '),
                o.Yb(2, 'a', 0),
                o.Tc(3, 'Home'),
                o.Wb(),
                o.Tc(4, '\n  '),
                o.Yb(5, 'a', 0),
                o.Tc(6, 'Breadcrumb 1'),
                o.Wb(),
                o.Tc(7, '\n  '),
                o.Yb(8, 'a', 0),
                o.Tc(9, 'Breadcrumb 2'),
                o.Wb(),
                o.Tc(10, '\n  '),
                o.Yb(11, 'a', 0),
                o.Tc(12, 'Breadcrumb 3'),
                o.Wb(),
                o.Tc(13, '\n    '),
                o.Yb(14, 'td-breadcrumb'),
                o.Tc(15, 'Manage List'),
                o.Wb(),
                o.Tc(16, '\n'),
                o.Wb()),
                2 & c &&
                  (o.Db(2),
                  o.qc('routerLink', o.uc(8, m))('queryParams', o.uc(9, d)),
                  o.Db(3),
                  o.qc('routerLink', o.uc(10, m))('queryParams', o.uc(11, f)),
                  o.Db(3),
                  o.qc('routerLink', o.uc(12, m))('queryParams', o.uc(13, l)),
                  o.Db(3),
                  o.qc('routerLink', o.uc(14, m))('queryParams', o.uc(15, p)));
            },
            directives: [s.a, b.a, i.e],
            styles: [''],
          })),
          n),
        q = e('Mzob'),
        h = e('MJ5V'),
        k = [
          {
            path: '',
            component:
              ((t = function c() {
                _classCallCheck(this, c);
              }),
              (t.ɵfac = function(c) {
                return new (c || t)();
              }),
              (t.ɵcmp = o.Mb({
                type: t,
                selectors: [['breadcrumbs-demo']],
                decls: 2,
                vars: 1,
                consts: [[3, 'demoId']],
                template: function(c, r) {
                  1 & c && (o.Yb(0, 'demo-component', 0), o.Tb(1, 'breadcrumbs-demo-basic'), o.Wb()),
                    2 & c && o.qc('demoId', 'breadcrumbs-demo-basic');
                },
                directives: [h.a, y],
                styles: [''],
              })),
              t),
          },
        ],
        T =
          (((a = function c() {
            _classCallCheck(this, c);
          }).ɵmod = o.Qb({ type: a })),
          (a.ɵinj = o.Pb({
            factory: function(c) {
              return new (c || a)();
            },
            imports: [[i.f.forChild(k)], i.f],
          })),
          a),
        w = e('Krbs');
      e.d(r, 'BreadcrumbsDemoModule', function() {
        return L;
      });
      var C,
        L =
          (((C = function c() {
            _classCallCheck(this, c);
          }).ɵmod = o.Qb({ type: C })),
          (C.ɵinj = o.Pb({
            factory: function(c) {
              return new (c || C)();
            },
            imports: [[w.a, T, q.a, u.c]],
          })),
          C);
    },
  },
]);
