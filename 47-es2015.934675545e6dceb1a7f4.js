(window.webpackJsonp = window.webpackJsonp || []).push([
  [47],
  {
    '6ehE': function(e, n, o) {
      'use strict';
      o.r(n);
      var t = o('ofXK'),
        r = o('tyNb'),
        c = o('Wp6s'),
        s = o('f0Cb'),
        a = o('wZkO'),
        d = o('eTLM'),
        i = o('PdbM'),
        f = o('XkJo'),
        b = o('Q3DV'),
        u = o('fXoL'),
        l = o('v+MA');
      let p = (() => {
        class e {}
        return (
          (e.ɵfac = function(n) {
            return new (n || e)();
          }),
          (e.ɵcmp = u.Mb({
            type: e,
            selectors: [['flavored-markdown-demo']],
            decls: 2,
            vars: 0,
            template: function(e, n) {
              1 & e &&
                (u.Yb(0, 'td-flavored-markdown'),
                u.Tc(
                  1,
                  '\n    ## Checkboxes\n\n    - [x] My checkbox\n    - [x] My second checkbox\n    - [ ] My empty checkbox\n\n    ## List\n\n    + One\n      + subline\n    + Two\n    + Three\n      + subline\n      + second subline\n',
                ),
                u.Wb());
            },
            directives: [l.a],
            styles: ['[_nghost-%COMP%]{width:90%}'],
          })),
          e
        );
      })();
      o.d(n, 'FlavoredMarkdownDemoModule', function() {
        return m;
      });
      const w = Object(b.c)({ overviewDemoComponent: p, id: 'flavored-markdown' });
      let m = (() => {
        class e {}
        return (
          (e.ɵmod = u.Qb({ type: e })),
          (e.ɵinj = u.Pb({
            factory: function(n) {
              return new (n || e)();
            },
            providers: [],
            imports: [[t.c, c.e, s.b, a.f, d.a, i.a, f.a, r.f.forChild(w)]],
          })),
          e
        );
      })();
    },
    'eTLM': function(e, n, o) {
      'use strict';
      o.d(n, 'a', function() {
        return u;
      });
      var t = o('ofXK'),
        r = o('tyNb'),
        c = o('wZkO'),
        s = o('NFeN'),
        a = o('Wp6s'),
        d = o('sHJK'),
        i = o('ZI6o'),
        f = (o('p6QC'), o('SNPZ'), o('dE5l')),
        b = o('fXoL');
      let u = (() => {
        class e {}
        return (
          (e.ɵmod = b.Qb({ type: e })),
          (e.ɵinj = b.Pb({
            factory: function(n) {
              return new (n || e)();
            },
            providers: [],
            imports: [[t.c, r.f, s.b, a.e, c.f, i.a, d.a, f.a]],
          })),
          e
        );
      })();
    },
  },
]);
