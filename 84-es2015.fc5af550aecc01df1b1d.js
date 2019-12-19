(window.webpackJsonp = window.webpackJsonp || []).push([
  [84],
  {
    '1JK3': function(t, e, n) {
      'use strict';
      n.r(e);
      var o = n('Krbs'),
        a = n('fXoL'),
        s = n('MJ5V'),
        r = n('h49U');
      let c = (() => {
        class t {}
        return (
          (t.ɵfac = function(e) {
            return new (e || t)();
          }),
          (t.ɵcmp = a.Mb({
            type: t,
            selectors: [['layout-management-list-demo']],
            decls: 2,
            vars: 1,
            consts: [[3, 'demoId']],
            template: function(t, e) {
              1 & t && (a.Yb(0, 'demo-component', 0), a.Tb(1, 'layout-management-list-demo-basic'), a.Wb()),
                2 & t && a.qc('demoId', 'layout-management-list-demo-basic');
            },
            directives: [s.a, r.a],
            styles: [''],
          })),
          t
        );
      })();
      var i = n('YJC3'),
        m = n('tyNb');
      const u = [{ path: '', component: c }];
      let l = (() => {
        class t {}
        return (
          (t.ɵmod = a.Qb({ type: t })),
          (t.ɵinj = a.Pb({
            factory: function(e) {
              return new (e || t)();
            },
            imports: [[m.f.forChild(u)], m.f],
          })),
          t
        );
      })();
      var d = n('gw4G');
      n.d(e, 'LayoutManagementListDemosModule', function() {
        return p;
      });
      let p = (() => {
        class t {}
        return (
          (t.ɵmod = a.Qb({ type: t })),
          (t.ɵinj = a.Pb({
            factory: function(e) {
              return new (e || t)();
            },
            imports: [[i.a, o.a, l, d.f]],
          })),
          t
        );
      })();
    },
  },
]);
