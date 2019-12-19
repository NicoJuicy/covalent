(window.webpackJsonp = window.webpackJsonp || []).push([
  [80],
  {
    OMbk: function(e, n, o) {
      'use strict';
      o.r(n);
      var t = o('ofXK'),
        r = o('fXoL'),
        c = o('v+MA');
      let s = (() => {
        class e {}
        return (
          (e.ɵfac = function(n) {
            return new (n || e)();
          }),
          (e.ɵcmp = r.Mb({
            type: e,
            selectors: [['flavored-markdown-demo-basic']],
            decls: 2,
            vars: 0,
            template: function(e, n) {
              1 & e &&
                (r.Yb(0, 'td-flavored-markdown'),
                r.Tc(
                  1,
                  '\n    ## Checkboxes\n\n    - [x] My checkbox\n    - [x] My second checkbox\n    - [ ] My empty checkbox\n\n    ## List\n\n    + One\n      + subline\n    + Two\n    + Three\n      + subline\n      + second subline\n',
                ),
                r.Wb());
            },
            directives: [c.a],
            styles: [''],
          })),
          e
        );
      })();
      var a = o('PdbM'),
        d = o('MJ5V');
      let b = (() => {
        class e {}
        return (
          (e.ɵfac = function(n) {
            return new (n || e)();
          }),
          (e.ɵcmp = r.Mb({
            type: e,
            selectors: [['flavored-markdown-demo']],
            decls: 2,
            vars: 1,
            consts: [[3, 'demoId']],
            template: function(e, n) {
              1 & e && (r.Yb(0, 'demo-component', 0), r.Tb(1, 'flavored-markdown-demo-basic'), r.Wb()),
                2 & e && r.qc('demoId', 'flavored-markdown-demo-basic');
            },
            directives: [d.a, s],
            styles: [''],
          })),
          e
        );
      })();
      var i = o('tyNb');
      const l = [{ path: '', component: b }];
      let m = (() => {
        class e {}
        return (
          (e.ɵmod = r.Qb({ type: e })),
          (e.ɵinj = r.Pb({
            factory: function(n) {
              return new (n || e)();
            },
            imports: [[i.f.forChild(l)], i.f],
          })),
          e
        );
      })();
      var u = o('Krbs');
      o.d(n, 'FlavoredMarkdownDemoModule', function() {
        return f;
      });
      let f = (() => {
        class e {}
        return (
          (e.ɵmod = r.Qb({ type: e })),
          (e.ɵinj = r.Pb({
            factory: function(n) {
              return new (n || e)();
            },
            imports: [[u.a, m, a.a, t.c]],
          })),
          e
        );
      })();
    },
  },
]);
