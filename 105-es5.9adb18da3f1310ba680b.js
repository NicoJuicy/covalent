function _classCallCheck(e, n) {
  if (!(e instanceof n)) throw new TypeError('Cannot call a class as a function');
}
(window.webpackJsonp = window.webpackJsonp || []).push([
  [105],
  {
    MPz5: function(e, n, t) {
      'use strict';
      t.r(n);
      var o,
        c,
        a = t('ofXK'),
        s = t('d3UM'),
        r = t('NFeN'),
        i = t('rDig'),
        f = t('Qk+/'),
        l = t('NEPT'),
        d = t('9TPg'),
        u = t('fXoL'),
        b = t('MJ5V'),
        p = t('THUg'),
        m =
          (((o = function e() {
            _classCallCheck(this, e);
          }).ɵfac = function(e) {
            return new (e || o)();
          }),
          (o.ɵcmp = u.Mb({
            type: o,
            selectors: [['tree-demo']],
            decls: 2,
            vars: 1,
            consts: [[3, 'demoId']],
            template: function(e, n) {
              1 & e && (u.Yb(0, 'demo-component', 0), u.Tb(1, 'tree-demo-basic'), u.Wb()),
                2 & e && u.qc('demoId', 'tree-demo-basic');
            },
            directives: [b.a, p.a],
            styles: [''],
          })),
          o),
        w = t('tyNb'),
        h = [{ path: '', component: m }],
        C =
          (((c = function e() {
            _classCallCheck(this, e);
          }).ɵmod = u.Qb({ type: c })),
          (c.ɵinj = u.Pb({
            factory: function(e) {
              return new (e || c)();
            },
            imports: [[w.f.forChild(h)], w.f],
          })),
          c),
        y = t('Krbs'),
        k = t('dY1w');
      t.d(n, 'TreeDemoModule', function() {
        return M;
      });
      var T,
        M =
          (((T = function e() {
            _classCallCheck(this, e);
          }).ɵmod = u.Qb({ type: T })),
          (T.ɵinj = u.Pb({
            factory: function(e) {
              return new (e || T)();
            },
            imports: [[k.a, y.a, C, i.a, f.a, l.a, d.a, a.c, s.b, r.b]],
          })),
          T);
    },
  },
]);
