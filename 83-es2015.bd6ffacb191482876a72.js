(window.webpackJsonp = window.webpackJsonp || []).push([
  [83],
  {
    kwNe: function(e, t, o) {
      'use strict';
      o.r(t);
      var r = o('Krbs'),
        n = o('fXoL'),
        c = o('MJ5V'),
        a = o('yNJT');
      let s = (() => {
        class e {}
        return (
          (e.ɵfac = function(t) {
            return new (t || e)();
          }),
          (e.ɵcmp = n.Mb({
            type: e,
            selectors: [['layout-card-over-demo']],
            decls: 2,
            vars: 1,
            consts: [[3, 'demoId']],
            template: function(e, t) {
              1 & e && (n.Yb(0, 'demo-component', 0), n.Tb(1, 'layout-card-over-demo-basic'), n.Wb()),
                2 & e && n.qc('demoId', 'layout-card-over-demo-basic');
            },
            directives: [c.a, a.a],
            styles: [''],
          })),
          e
        );
      })();
      var d = o('tyNb');
      const u = [{ path: '', component: s }];
      let i = (() => {
        class e {}
        return (
          (e.ɵmod = n.Qb({ type: e })),
          (e.ɵinj = n.Pb({
            factory: function(t) {
              return new (t || e)();
            },
            imports: [[d.f.forChild(u)], d.f],
          })),
          e
        );
      })();
      var p = o('gw4G'),
        f = o('dfpt');
      o.d(t, 'LayoutCardOverDemosModule', function() {
        return l;
      });
      let l = (() => {
        class e {}
        return (
          (e.ɵmod = n.Qb({ type: e })),
          (e.ɵinj = n.Pb({
            factory: function(t) {
              return new (t || e)();
            },
            imports: [[f.a, r.a, i, p.f]],
          })),
          e
        );
      })();
    },
  },
]);
