(window.webpackJsonp = window.webpackJsonp || []).push([
  [97],
  {
    '/qT2': function(e, r, t) {
      'use strict';
      t.r(r);
      var c = t('ofXK'),
        n = t('fXoL'),
        s = t('s7rV');
      let o = (() => {
        class e {
          constructor() {
            this.searchInputTerm = '';
          }
        }
        return (
          (e.ɵfac = function(r) {
            return new (r || e)();
          }),
          (e.ɵcmp = n.Mb({
            type: e,
            selectors: [['search-demo-basic']],
            decls: 1,
            vars: 0,
            consts: [['placeholder', 'Search here', 3, 'search', 'clear']],
            template: function(e, r) {
              1 & e &&
                (n.Yb(0, 'td-search-input', 0),
                n.gc('search', function(e) {
                  return (r.searchInputTerm = e);
                })('clear', function(e) {
                  return (r.searchInputTerm = '');
                }),
                n.Wb());
            },
            directives: [s.a],
            styles: [''],
          })),
          e
        );
      })();
      var a = t('E+l/'),
        u = t('MJ5V');
      let i = (() => {
        class e {}
        return (
          (e.ɵfac = function(r) {
            return new (r || e)();
          }),
          (e.ɵcmp = n.Mb({
            type: e,
            selectors: [['search-demo']],
            decls: 2,
            vars: 1,
            consts: [[3, 'demoId']],
            template: function(e, r) {
              1 & e && (n.Yb(0, 'demo-component', 0), n.Tb(1, 'search-demo-basic'), n.Wb()),
                2 & e && n.qc('demoId', 'search-demo-basic');
            },
            directives: [u.a, o],
            styles: [''],
          })),
          e
        );
      })();
      var l = t('tyNb');
      const p = [{ path: '', component: i }];
      let d = (() => {
        class e {}
        return (
          (e.ɵmod = n.Qb({ type: e })),
          (e.ɵinj = n.Pb({
            factory: function(r) {
              return new (r || e)();
            },
            imports: [[l.f.forChild(p)], l.f],
          })),
          e
        );
      })();
      var m = t('Krbs');
      t.d(r, 'SearchDemoModule', function() {
        return f;
      });
      let f = (() => {
        class e {}
        return (
          (e.ɵmod = n.Qb({ type: e })),
          (e.ɵinj = n.Pb({
            factory: function(r) {
              return new (r || e)();
            },
            imports: [[m.a, d, a.a, c.c]],
          })),
          e
        );
      })();
    },
  },
]);
