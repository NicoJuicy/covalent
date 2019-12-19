function _classCallCheck(n, e) {
  if (!(n instanceof e)) throw new TypeError('Cannot call a class as a function');
}
(window.webpackJsonp = window.webpackJsonp || []).push([
  [92],
  {
    fVCe: function(n, e, o) {
      'use strict';
      o.r(e);
      var t,
        c,
        s,
        a = o('ofXK'),
        i = o('fXoL'),
        r = o('H4p7'),
        d =
          (((t = function n() {
            _classCallCheck(this, n);
          }).ɵfac = function(n) {
            return new (n || t)();
          }),
          (t.ɵcmp = i.Mb({
            type: t,
            selectors: [['markdown-demo-basic']],
            decls: 2,
            vars: 0,
            template: function(n, e) {
              1 & n &&
                (i.Yb(0, 'td-markdown'),
                i.Tc(1, '\n  # Heading (h1)\n  ## Sub Heading (H2)\n  ### Steps (H3)\n'),
                i.Wb());
            },
            directives: [r.a],
            styles: [''],
          })),
          t),
        l = o('UBqq'),
        f = o('MJ5V'),
        m =
          (((c = function n() {
            _classCallCheck(this, n);
          }).ɵfac = function(n) {
            return new (n || c)();
          }),
          (c.ɵcmp = i.Mb({
            type: c,
            selectors: [['markdown-demo']],
            decls: 2,
            vars: 1,
            consts: [[3, 'demoId']],
            template: function(n, e) {
              1 & n && (i.Yb(0, 'demo-component', 0), i.Tb(1, 'markdown-demo-basic'), i.Wb()),
                2 & n && i.qc('demoId', 'markdown-demo-basic');
            },
            directives: [f.a, d],
            styles: [''],
          })),
          c),
        u = o('tyNb'),
        p = [{ path: '', component: m }],
        b =
          (((s = function n() {
            _classCallCheck(this, n);
          }).ɵmod = i.Qb({ type: s })),
          (s.ɵinj = i.Pb({
            factory: function(n) {
              return new (n || s)();
            },
            imports: [[u.f.forChild(p)], u.f],
          })),
          s),
        w = o('Krbs');
      o.d(e, 'MarkdownDemoModule', function() {
        return k;
      });
      var h,
        k =
          (((h = function n() {
            _classCallCheck(this, n);
          }).ɵmod = i.Qb({ type: h })),
          (h.ɵinj = i.Pb({
            factory: function(n) {
              return new (n || h)();
            },
            imports: [[w.a, b, l.a, a.c]],
          })),
          h);
    },
  },
]);
