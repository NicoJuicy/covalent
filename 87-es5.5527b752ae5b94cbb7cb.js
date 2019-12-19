function _classCallCheck(n, o) {
  if (!(n instanceof o)) throw new TypeError('Cannot call a class as a function');
}
(window.webpackJsonp = window.webpackJsonp || []).push([
  [87],
  {
    hPyA: function(n, o, t) {
      'use strict';
      t.r(o);
      var e,
        c,
        a = t('Krbs'),
        s = t('fXoL'),
        i = t('MJ5V'),
        r = t('qPm/'),
        l =
          (((e = function n() {
            _classCallCheck(this, n);
          }).ɵfac = function(n) {
            return new (n || e)();
          }),
          (e.ɵcmp = s.Mb({
            type: e,
            selectors: [['layout-demo']],
            decls: 2,
            vars: 1,
            consts: [[3, 'demoId']],
            template: function(n, o) {
              1 & n && (s.Yb(0, 'demo-component', 0), s.Tb(1, 'layout-demo-basic'), s.Wb()),
                2 & n && s.qc('demoId', 'layout-demo-basic');
            },
            directives: [i.a, r.a],
            styles: [''],
          })),
          e),
        u = t('tweE'),
        f = t('tyNb'),
        d = [{ path: '', component: l }],
        m =
          (((c = function n() {
            _classCallCheck(this, n);
          }).ɵmod = s.Qb({ type: c })),
          (c.ɵinj = s.Pb({
            factory: function(n) {
              return new (n || c)();
            },
            imports: [[f.f.forChild(d)], f.f],
          })),
          c),
        p = t('gw4G');
      t.d(o, 'LayoutDemosModule', function() {
        return w;
      });
      var b,
        w =
          (((b = function n() {
            _classCallCheck(this, n);
          }).ɵmod = s.Qb({ type: b })),
          (b.ɵinj = s.Pb({
            factory: function(n) {
              return new (n || b)();
            },
            imports: [[u.a, a.a, m, p.f]],
          })),
          b);
    },
  },
]);
