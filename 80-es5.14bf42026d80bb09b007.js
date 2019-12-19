function _classCallCheck(n, e) {
  if (!(n instanceof e)) throw new TypeError('Cannot call a class as a function');
}
(window.webpackJsonp = window.webpackJsonp || []).push([
  [80],
  {
    OMbk: function(n, e, o) {
      'use strict';
      o.r(e);
      var c,
        t,
        s,
        a = o('ofXK'),
        r = o('fXoL'),
        i = o('v+MA'),
        l =
          (((c = function n() {
            _classCallCheck(this, n);
          }).ɵfac = function(n) {
            return new (n || c)();
          }),
          (c.ɵcmp = r.Mb({
            type: c,
            selectors: [['flavored-markdown-demo-basic']],
            decls: 2,
            vars: 0,
            template: function(n, e) {
              1 & n &&
                (r.Yb(0, 'td-flavored-markdown'),
                r.Tc(
                  1,
                  '\n    ## Checkboxes\n\n    - [x] My checkbox\n    - [x] My second checkbox\n    - [ ] My empty checkbox\n\n    ## List\n\n    + One\n      + subline\n    + Two\n    + Three\n      + subline\n      + second subline\n',
                ),
                r.Wb());
            },
            directives: [i.a],
            styles: [''],
          })),
          c),
        d = o('PdbM'),
        f = o('MJ5V'),
        b =
          (((t = function n() {
            _classCallCheck(this, n);
          }).ɵfac = function(n) {
            return new (n || t)();
          }),
          (t.ɵcmp = r.Mb({
            type: t,
            selectors: [['flavored-markdown-demo']],
            decls: 2,
            vars: 1,
            consts: [[3, 'demoId']],
            template: function(n, e) {
              1 & n && (r.Yb(0, 'demo-component', 0), r.Tb(1, 'flavored-markdown-demo-basic'), r.Wb()),
                2 & n && r.qc('demoId', 'flavored-markdown-demo-basic');
            },
            directives: [f.a, l],
            styles: [''],
          })),
          t),
        u = o('tyNb'),
        m = [{ path: '', component: b }],
        p =
          (((s = function n() {
            _classCallCheck(this, n);
          }).ɵmod = r.Qb({ type: s })),
          (s.ɵinj = r.Pb({
            factory: function(n) {
              return new (n || s)();
            },
            imports: [[u.f.forChild(m)], u.f],
          })),
          s),
        w = o('Krbs');
      o.d(e, 'FlavoredMarkdownDemoModule', function() {
        return k;
      });
      var h,
        k =
          (((h = function n() {
            _classCallCheck(this, n);
          }).ɵmod = r.Qb({ type: h })),
          (h.ɵinj = r.Pb({
            factory: function(n) {
              return new (n || h)();
            },
            imports: [[w.a, p, d.a, a.c]],
          })),
          h);
    },
  },
]);
