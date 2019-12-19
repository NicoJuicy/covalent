(window.webpackJsonp = window.webpackJsonp || []).push([
  [87],
  {
    hPyA: function(t, e, o) {
      'use strict';
      o.r(e);
      var n = o('Krbs'),
        r = o('fXoL'),
        s = o('MJ5V'),
        c = o('qPm/');
      let a = (() => {
        class t {}
        return (
          (t.ɵfac = function(e) {
            return new (e || t)();
          }),
          (t.ɵcmp = r.Mb({
            type: t,
            selectors: [['layout-demo']],
            decls: 2,
            vars: 1,
            consts: [[3, 'demoId']],
            template: function(t, e) {
              1 & t && (r.Yb(0, 'demo-component', 0), r.Tb(1, 'layout-demo-basic'), r.Wb()),
                2 & t && r.qc('demoId', 'layout-demo-basic');
            },
            directives: [s.a, c.a],
            styles: [''],
          })),
          t
        );
      })();
      var u = o('tweE'),
        i = o('tyNb');
      const d = [{ path: '', component: a }];
      let m = (() => {
        class t {}
        return (
          (t.ɵmod = r.Qb({ type: t })),
          (t.ɵinj = r.Pb({
            factory: function(e) {
              return new (e || t)();
            },
            imports: [[i.f.forChild(d)], i.f],
          })),
          t
        );
      })();
      var l = o('gw4G');
      o.d(e, 'LayoutDemosModule', function() {
        return p;
      });
      let p = (() => {
        class t {}
        return (
          (t.ɵmod = r.Qb({ type: t })),
          (t.ɵinj = r.Pb({
            factory: function(e) {
              return new (e || t)();
            },
            imports: [[u.a, n.a, m, l.f]],
          })),
          t
        );
      })();
    },
  },
]);
