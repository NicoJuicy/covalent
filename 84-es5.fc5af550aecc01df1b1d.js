function _classCallCheck(n, t) {
  if (!(n instanceof t)) throw new TypeError('Cannot call a class as a function');
}
(window.webpackJsonp = window.webpackJsonp || []).push([
  [84],
  {
    '1JK3': function(n, t, e) {
      'use strict';
      e.r(t);
      var o,
        a,
        s = e('Krbs'),
        c = e('fXoL'),
        i = e('MJ5V'),
        l = e('h49U'),
        r =
          (((o = function n() {
            _classCallCheck(this, n);
          }).ɵfac = function(n) {
            return new (n || o)();
          }),
          (o.ɵcmp = c.Mb({
            type: o,
            selectors: [['layout-management-list-demo']],
            decls: 2,
            vars: 1,
            consts: [[3, 'demoId']],
            template: function(n, t) {
              1 & n && (c.Yb(0, 'demo-component', 0), c.Tb(1, 'layout-management-list-demo-basic'), c.Wb()),
                2 & n && c.qc('demoId', 'layout-management-list-demo-basic');
            },
            directives: [i.a, l.a],
            styles: [''],
          })),
          o),
        m = e('YJC3'),
        u = e('tyNb'),
        f = [{ path: '', component: r }],
        d =
          (((a = function n() {
            _classCallCheck(this, n);
          }).ɵmod = c.Qb({ type: a })),
          (a.ɵinj = c.Pb({
            factory: function(n) {
              return new (n || a)();
            },
            imports: [[u.f.forChild(f)], u.f],
          })),
          a),
        p = e('gw4G');
      e.d(t, 'LayoutManagementListDemosModule', function() {
        return h;
      });
      var b,
        h =
          (((b = function n() {
            _classCallCheck(this, n);
          }).ɵmod = c.Qb({ type: b })),
          (b.ɵinj = c.Pb({
            factory: function(n) {
              return new (n || b)();
            },
            imports: [[m.a, s.a, d, p.f]],
          })),
          b);
    },
  },
]);
