function _classCallCheck(n, t) {
  if (!(n instanceof t)) throw new TypeError('Cannot call a class as a function');
}
(window.webpackJsonp = window.webpackJsonp || []).push([
  [85],
  {
    z54b: function(n, t, o) {
      'use strict';
      o.r(t);
      var a,
        s,
        c = o('Krbs'),
        e = o('gw4G'),
        i = o('hz0R'),
        l = o('tyNb'),
        r = o('fXoL'),
        u = o('MJ5V'),
        f = o('MNZh'),
        d = [
          {
            path: '',
            component:
              ((a = function n() {
                _classCallCheck(this, n);
              }),
              (a.ɵfac = function(n) {
                return new (n || a)();
              }),
              (a.ɵcmp = r.Mb({
                type: a,
                selectors: [['layout-nav-list-demo']],
                decls: 2,
                vars: 1,
                consts: [[3, 'demoId']],
                template: function(n, t) {
                  1 & n && (r.Yb(0, 'demo-component', 0), r.Tb(1, 'layout-nav-list-demo-basic'), r.Wb()),
                    2 & n && r.qc('demoId', 'layout-nav-list-demo-basic');
                },
                directives: [u.a, f.a],
                styles: [''],
              })),
              a),
          },
        ],
        p =
          (((s = function n() {
            _classCallCheck(this, n);
          }).ɵmod = r.Qb({ type: s })),
          (s.ɵinj = r.Pb({
            factory: function(n) {
              return new (n || s)();
            },
            imports: [[l.f.forChild(d)], l.f],
          })),
          s);
      o.d(t, 'LayoutNavListDemosModule', function() {
        return m;
      });
      var b,
        m =
          (((b = function n() {
            _classCallCheck(this, n);
          }).ɵmod = r.Qb({ type: b })),
          (b.ɵinj = r.Pb({
            factory: function(n) {
              return new (n || b)();
            },
            imports: [[i.a, c.a, p, e.f]],
          })),
          b);
    },
  },
]);
