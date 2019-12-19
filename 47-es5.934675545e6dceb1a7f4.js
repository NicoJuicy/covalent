function _classCallCheck(n, e) {
  if (!(n instanceof e)) throw new TypeError('Cannot call a class as a function');
}
(window.webpackJsonp = window.webpackJsonp || []).push([
  [47],
  {
    '6ehE': function(n, e, o) {
      'use strict';
      o.r(e);
      var t,
        c = o('ofXK'),
        r = o('tyNb'),
        s = o('Wp6s'),
        a = o('f0Cb'),
        i = o('wZkO'),
        f = o('eTLM'),
        l = o('PdbM'),
        d = o('XkJo'),
        u = o('Q3DV'),
        b = o('fXoL'),
        p = o('v+MA'),
        w =
          (((t = function n() {
            _classCallCheck(this, n);
          }).ɵfac = function(n) {
            return new (n || t)();
          }),
          (t.ɵcmp = b.Mb({
            type: t,
            selectors: [['flavored-markdown-demo']],
            decls: 2,
            vars: 0,
            template: function(n, e) {
              1 & n &&
                (b.Yb(0, 'td-flavored-markdown'),
                b.Tc(
                  1,
                  '\n    ## Checkboxes\n\n    - [x] My checkbox\n    - [x] My second checkbox\n    - [ ] My empty checkbox\n\n    ## List\n\n    + One\n      + subline\n    + Two\n    + Three\n      + subline\n      + second subline\n',
                ),
                b.Wb());
            },
            directives: [p.a],
            styles: ['[_nghost-%COMP%]{width:90%}'],
          })),
          t);
      o.d(e, 'FlavoredMarkdownDemoModule', function() {
        return v;
      });
      var h,
        k = Object(u.c)({ overviewDemoComponent: w, id: 'flavored-markdown' }),
        v =
          (((h = function n() {
            _classCallCheck(this, n);
          }).ɵmod = b.Qb({ type: h })),
          (h.ɵinj = b.Pb({
            factory: function(n) {
              return new (n || h)();
            },
            providers: [],
            imports: [[c.c, s.e, a.b, i.f, f.a, l.a, d.a, r.f.forChild(k)]],
          })),
          h);
    },
    'eTLM': function(n, e, o) {
      'use strict';
      o.d(e, 'a', function() {
        return u;
      });
      var t = o('ofXK'),
        c = o('tyNb'),
        r = o('wZkO'),
        s = o('NFeN'),
        a = o('Wp6s'),
        i = o('sHJK'),
        f = o('ZI6o'),
        l = (o('p6QC'), o('SNPZ'), o('dE5l')),
        d = o('fXoL'),
        u = (function() {
          var n = function n() {
            _classCallCheck(this, n);
          };
          return (
            (n.ɵmod = d.Qb({ type: n })),
            (n.ɵinj = d.Pb({
              factory: function(e) {
                return new (e || n)();
              },
              providers: [],
              imports: [[t.c, c.f, s.b, a.e, r.f, f.a, i.a, l.a]],
            })),
            n
          );
        })();
    },
  },
]);
