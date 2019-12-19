(window.webpackJsonp = window.webpackJsonp || []).push([
  [88],
  {
    Ygk0: function(n, e, o) {
      'use strict';
      o.r(e);
      var t = o('fXoL'),
        s = o('MJ5V'),
        a = o('1HR5');
      let r = (() => {
        class n {}
        return (
          (n.ɵfac = function(e) {
            return new (e || n)();
          }),
          (n.ɵcmp = t.Mb({
            type: n,
            selectors: [['loading-mask-demo']],
            decls: 2,
            vars: 1,
            consts: [[3, 'demoId']],
            template: function(n, e) {
              1 & n && (t.Yb(0, 'demo-component', 0), t.Tb(1, 'loading-mask-demo-basic'), t.Wb()),
                2 & n && t.qc('demoId', 'loading-mask-demo-basic');
            },
            directives: [s.a, a.a],
            styles: [''],
          })),
          n
        );
      })();
      var c = o('Krbs'),
        i = o('RqAS'),
        d = o('tyNb');
      const m = [{ path: '', component: r }];
      let u = (() => {
        class n {}
        return (
          (n.ɵmod = t.Qb({ type: n })),
          (n.ɵinj = t.Pb({
            factory: function(e) {
              return new (e || n)();
            },
            imports: [[d.f.forChild(m)], d.f],
          })),
          n
        );
      })();
      o.d(e, 'LoadingMaskDemosModule', function() {
        return l;
      });
      let l = (() => {
        class n {}
        return (
          (n.ɵmod = t.Qb({ type: n })),
          (n.ɵinj = t.Pb({
            factory: function(e) {
              return new (e || n)();
            },
            imports: [[i.a, c.a, u]],
          })),
          n
        );
      })();
    },
  },
]);
