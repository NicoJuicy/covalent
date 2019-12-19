(window.webpackJsonp = window.webpackJsonp || []).push([
  [98],
  {
    L2de: function(e, r, t) {
      'use strict';
      t.r(r);
      var c = t('ofXK'),
        n = t('3Pt+'),
        a = t('tyNb'),
        s = t('bTqV'),
        o = t('jaxi'),
        i = t('Wp6s'),
        p = t('f0Cb'),
        h = t('kmnG'),
        u = t('qFsG'),
        b = t('NFeN'),
        d = t('QibW'),
        l = t('/t3+'),
        m = t('eTLM'),
        f = t('E+l/'),
        w = t('Q3DV'),
        T = t('fXoL'),
        v = t('s7rV'),
        W = t('t9Tc');
      let y = (() => {
        class e {
          constructor() {
            this.searchInputTerm = '';
          }
        }
        return (
          (e.ɵfac = function(r) {
            return new (r || e)();
          }),
          (e.ɵcmp = T.Mb({
            type: e,
            selectors: [['search-demo']],
            decls: 10,
            vars: 0,
            consts: [
              [1, 'push-bottom-lg'],
              [1, 'mat-caption', 'tc-grey-700', 'push-none'],
              ['appearance', 'standard', 'placeholder', 'Search here', 3, 'search', 'clear'],
              [1, 'push-bottom'],
              ['placeholder', 'Search here', 'showUnderline', 'true', 'alwaysVisible', 'true', 3, 'clear'],
            ],
            template: function(e, r) {
              1 & e &&
                (T.Yb(0, 'div', 0),
                T.Tc(1, ' Search Input '),
                T.Yb(2, 'p', 1),
                T.Tc(3, 'Appearance: standard'),
                T.Wb(),
                T.Yb(4, 'td-search-input', 2),
                T.gc('search', function(e) {
                  return (r.searchInputTerm = e);
                })('clear', function(e) {
                  return (r.searchInputTerm = '');
                }),
                T.Wb(),
                T.Wb(),
                T.Yb(5, 'div', 3),
                T.Tc(6, ' Search Box '),
                T.Yb(7, 'p', 1),
                T.Tc(8, ' Search input with animations '),
                T.Wb(),
                T.Yb(9, 'td-search-box', 4),
                T.gc('clear', function(e) {
                  return (r.searchInputTerm = '');
                }),
                T.Wb(),
                T.Wb());
            },
            directives: [v.a, W.a],
            styles: ['[_nghost-%COMP%]{width:80%}'],
            changeDetection: 0,
          })),
          e
        );
      })();
      t.d(r, 'SearchDemoModule', function() {
        return S;
      });
      const g = Object(w.c)({ overviewDemoComponent: y, id: 'search' });
      let S = (() => {
        class e {}
        return (
          (e.ɵmod = T.Qb({ type: e })),
          (e.ɵinj = T.Pb({
            factory: function(r) {
              return new (r || e)();
            },
            providers: [],
            imports: [[c.c, n.h, n.p, s.c, o.c, i.e, p.b, h.d, b.b, u.c, d.c, l.b, m.a, f.a, a.f.forChild(g)]],
          })),
          e
        );
      })();
    },
  },
]);
