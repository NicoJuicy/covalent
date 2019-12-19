(window.webpackJsonp = window.webpackJsonp || []).push([
  [96],
  {
    A3cJ: function(t, e, n) {
      'use strict';
      n.r(e);
      var c = n('ofXK'),
        o = n('fXoL'),
        a = n('mOPi');
      let s = (() => {
        class t {}
        return (
          (t.ɵfac = function(e) {
            return new (e || t)();
          }),
          (t.ɵcmp = o.Mb({
            type: t,
            selectors: [['paging-demo-basic']],
            decls: 3,
            vars: 5,
            consts: [
              [3, 'firstLast', 'pageSize', 'total'],
              ['pagingBar', ''],
            ],
            template: function(t, e) {
              if ((1 & t && (o.Yb(0, 'td-paging-bar', 0, 1), o.Tc(2), o.Wb()), 2 & t)) {
                const t = o.Fc(1);
                o.qc('firstLast', !0)('pageSize', 100)('total', 1345),
                  o.Db(2),
                  o.Wc('\n    ', t.range, ' of ', t.total, '\n');
              }
            },
            directives: [a.a],
            styles: [''],
          })),
          t
        );
      })();
      var r = n('nCcV'),
        i = n('MJ5V');
      let p = (() => {
        class t {}
        return (
          (t.ɵfac = function(e) {
            return new (e || t)();
          }),
          (t.ɵcmp = o.Mb({
            type: t,
            selectors: [['paging-demo']],
            decls: 2,
            vars: 1,
            consts: [[3, 'demoId']],
            template: function(t, e) {
              1 & t && (o.Yb(0, 'demo-component', 0), o.Tb(1, 'paging-demo-basic'), o.Wb()),
                2 & t && o.qc('demoId', 'paging-demo-basic');
            },
            directives: [i.a, s],
            styles: [''],
          })),
          t
        );
      })();
      var d = n('tyNb');
      const f = [{ path: '', component: p }];
      let l = (() => {
        class t {}
        return (
          (t.ɵmod = o.Qb({ type: t })),
          (t.ɵinj = o.Pb({
            factory: function(e) {
              return new (e || t)();
            },
            imports: [[d.f.forChild(f)], d.f],
          })),
          t
        );
      })();
      var b = n('Krbs');
      n.d(e, 'PagingDemoModule', function() {
        return u;
      });
      let u = (() => {
        class t {}
        return (
          (t.ɵmod = o.Qb({ type: t })),
          (t.ɵinj = o.Pb({
            factory: function(e) {
              return new (e || t)();
            },
            imports: [[b.a, l, r.a, c.c]],
          })),
          t
        );
      })();
    },
  },
]);
