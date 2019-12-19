function _classCallCheck(o, n) {
  if (!(o instanceof n)) throw new TypeError('Cannot call a class as a function');
}
(window.webpackJsonp = window.webpackJsonp || []).push([
  [83],
  {
    kwNe: function(o, n, t) {
      'use strict';
      t.r(n);
      var e,
        c,
        a = t('Krbs'),
        s = t('fXoL'),
        r = t('MJ5V'),
        i = t('yNJT'),
        l =
          (((e = function o() {
            _classCallCheck(this, o);
          }).ɵfac = function(o) {
            return new (o || e)();
          }),
          (e.ɵcmp = s.Mb({
            type: e,
            selectors: [['layout-card-over-demo']],
            decls: 2,
            vars: 1,
            consts: [[3, 'demoId']],
            template: function(o, n) {
              1 & o && (s.Yb(0, 'demo-component', 0), s.Tb(1, 'layout-card-over-demo-basic'), s.Wb()),
                2 & o && s.qc('demoId', 'layout-card-over-demo-basic');
            },
            directives: [r.a, i.a],
            styles: [''],
          })),
          e),
        d = t('tyNb'),
        f = [{ path: '', component: l }],
        u =
          (((c = function o() {
            _classCallCheck(this, o);
          }).ɵmod = s.Qb({ type: c })),
          (c.ɵinj = s.Pb({
            factory: function(o) {
              return new (o || c)();
            },
            imports: [[d.f.forChild(f)], d.f],
          })),
          c),
        p = t('gw4G'),
        m = t('dfpt');
      t.d(n, 'LayoutCardOverDemosModule', function() {
        return w;
      });
      var b,
        w =
          (((b = function o() {
            _classCallCheck(this, o);
          }).ɵmod = s.Qb({ type: b })),
          (b.ɵinj = s.Pb({
            factory: function(o) {
              return new (o || b)();
            },
            imports: [[m.a, a.a, u, p.f]],
          })),
          b);
    },
  },
]);
