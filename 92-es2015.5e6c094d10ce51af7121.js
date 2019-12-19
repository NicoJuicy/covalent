(window.webpackJsonp = window.webpackJsonp || []).push([
  [92],
  {
    fVCe: function(e, n, t) {
      'use strict';
      t.r(n);
      var o = t('ofXK'),
        r = t('fXoL'),
        c = t('H4p7');
      let s = (() => {
        class e {}
        return (
          (e.ɵfac = function(n) {
            return new (n || e)();
          }),
          (e.ɵcmp = r.Mb({
            type: e,
            selectors: [['markdown-demo-basic']],
            decls: 2,
            vars: 0,
            template: function(e, n) {
              1 & e &&
                (r.Yb(0, 'td-markdown'),
                r.Tc(1, '\n  # Heading (h1)\n  ## Sub Heading (H2)\n  ### Steps (H3)\n'),
                r.Wb());
            },
            directives: [c.a],
            styles: [''],
          })),
          e
        );
      })();
      var a = t('UBqq'),
        d = t('MJ5V');
      let i = (() => {
        class e {}
        return (
          (e.ɵfac = function(n) {
            return new (n || e)();
          }),
          (e.ɵcmp = r.Mb({
            type: e,
            selectors: [['markdown-demo']],
            decls: 2,
            vars: 1,
            consts: [[3, 'demoId']],
            template: function(e, n) {
              1 & e && (r.Yb(0, 'demo-component', 0), r.Tb(1, 'markdown-demo-basic'), r.Wb()),
                2 & e && r.qc('demoId', 'markdown-demo-basic');
            },
            directives: [d.a, s],
            styles: [''],
          })),
          e
        );
      })();
      var m = t('tyNb');
      const u = [{ path: '', component: i }];
      let p = (() => {
        class e {}
        return (
          (e.ɵmod = r.Qb({ type: e })),
          (e.ɵinj = r.Pb({
            factory: function(n) {
              return new (n || e)();
            },
            imports: [[m.f.forChild(u)], m.f],
          })),
          e
        );
      })();
      var b = t('Krbs');
      t.d(n, 'MarkdownDemoModule', function() {
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
            imports: [[b.a, p, a.a, o.c]],
          })),
          e
        );
      })();
    },
  },
]);
