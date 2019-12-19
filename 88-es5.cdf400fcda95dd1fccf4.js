function _classCallCheck(n, o) {
  if (!(n instanceof o)) throw new TypeError('Cannot call a class as a function');
}
(window.webpackJsonp = window.webpackJsonp || []).push([
  [88],
  {
    Ygk0: function(n, o, t) {
      'use strict';
      t.r(o);
      var a,
        s,
        c = t('fXoL'),
        e = t('MJ5V'),
        i = t('1HR5'),
        r =
          (((a = function n() {
            _classCallCheck(this, n);
          }).ɵfac = function(n) {
            return new (n || a)();
          }),
          (a.ɵcmp = c.Mb({
            type: a,
            selectors: [['loading-mask-demo']],
            decls: 2,
            vars: 1,
            consts: [[3, 'demoId']],
            template: function(n, o) {
              1 & n && (c.Yb(0, 'demo-component', 0), c.Tb(1, 'loading-mask-demo-basic'), c.Wb()),
                2 & n && c.qc('demoId', 'loading-mask-demo-basic');
            },
            directives: [e.a, i.a],
            styles: [''],
          })),
          a),
        l = t('Krbs'),
        d = t('RqAS'),
        f = t('tyNb'),
        m = [{ path: '', component: r }],
        u =
          (((s = function n() {
            _classCallCheck(this, n);
          }).ɵmod = c.Qb({ type: s })),
          (s.ɵinj = c.Pb({
            factory: function(n) {
              return new (n || s)();
            },
            imports: [[f.f.forChild(m)], f.f],
          })),
          s);
      t.d(o, 'LoadingMaskDemosModule', function() {
        return b;
      });
      var p,
        b =
          (((p = function n() {
            _classCallCheck(this, n);
          }).ɵmod = c.Qb({ type: p })),
          (p.ɵinj = c.Pb({
            factory: function(n) {
              return new (n || p)();
            },
            imports: [[d.a, l.a, u]],
          })),
          p);
    },
  },
]);
