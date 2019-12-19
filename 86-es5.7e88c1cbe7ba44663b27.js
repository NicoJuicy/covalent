function _classCallCheck(n, t) {
  if (!(n instanceof t)) throw new TypeError('Cannot call a class as a function');
}
(window.webpackJsonp = window.webpackJsonp || []).push([
  [86],
  {
    LC9I: function(n, t, o) {
      'use strict';
      o.r(t);
      var a,
        e,
        c = o('Krbs'),
        s = o('gw4G'),
        i = o('fXoL'),
        r = o('MJ5V'),
        l = o('eusM'),
        u =
          (((a = function n() {
            _classCallCheck(this, n);
          }).ɵfac = function(n) {
            return new (n || a)();
          }),
          (a.ɵcmp = i.Mb({
            type: a,
            selectors: [['layout-nav-demo']],
            decls: 2,
            vars: 1,
            consts: [[3, 'demoId']],
            template: function(n, t) {
              1 & n && (i.Yb(0, 'demo-component', 0), i.Tb(1, 'layout-nav-demo-basic'), i.Wb()),
                2 & n && i.qc('demoId', 'layout-nav-demo-basic');
            },
            directives: [r.a, l.a],
            styles: [
              '[_nghost-%COMP%]   mat-sidenav.mat-sidenav[_ngcontent-%COMP%]    {max-width:100px;min-width:100px}',
            ],
          })),
          a),
        d = o('UTcn'),
        f = o('tyNb'),
        m = [{ path: '', component: u }],
        p =
          (((e = function n() {
            _classCallCheck(this, n);
          }).ɵmod = i.Qb({ type: e })),
          (e.ɵinj = i.Pb({
            factory: function(n) {
              return new (n || e)();
            },
            imports: [[f.f.forChild(m)], f.f],
          })),
          e);
      o.d(t, 'LayoutNavDemosModule', function() {
        return h;
      });
      var b,
        h =
          (((b = function n() {
            _classCallCheck(this, n);
          }).ɵmod = i.Qb({ type: b })),
          (b.ɵinj = i.Pb({
            factory: function(n) {
              return new (n || b)();
            },
            imports: [[d.a, c.a, p, s.f]],
          })),
          b);
    },
  },
]);
