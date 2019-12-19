(window.webpackJsonp = window.webpackJsonp || []).push([
  [61],
  {
    eTLM: function(t, n, e) {
      'use strict';
      e.d(n, 'a', function() {
        return g;
      });
      var c = e('ofXK'),
        o = e('tyNb'),
        r = e('wZkO'),
        a = e('NFeN'),
        i = e('Wp6s'),
        s = e('sHJK'),
        f = e('ZI6o'),
        p = (e('p6QC'), e('SNPZ'), e('dE5l')),
        u = e('fXoL');
      let g = (() => {
        class t {}
        return (
          (t.ɵmod = u.Qb({ type: t })),
          (t.ɵinj = u.Pb({
            factory: function(n) {
              return new (n || t)();
            },
            providers: [],
            imports: [[c.c, o.f, a.b, i.e, r.f, f.a, s.a, p.a]],
          })),
          t
        );
      })();
    },
    tGDC: function(t, n, e) {
      'use strict';
      e.r(n);
      var c = e('ofXK'),
        o = e('tyNb'),
        r = e('eTLM'),
        a = e('nCcV'),
        i = e('Q3DV'),
        s = e('fXoL'),
        f = e('f0Cb'),
        p = e('mOPi');
      let u = (() => {
        class t {
          constructor() {
            this.firstLast = !0;
          }
          change(t) {
            this.event = t;
          }
        }
        return (
          (t.ɵfac = function(n) {
            return new (n || t)();
          }),
          (t.ɵcmp = s.Mb({
            type: t,
            selectors: [['paging-demo']],
            decls: 7,
            vars: 5,
            consts: [
              [3, 'firstLast', 'pageSize', 'total', 'change'],
              ['pagingBar', ''],
            ],
            template: function(t, n) {
              if (
                (1 & t &&
                  (s.Tc(0, '\n\n'),
                  s.Tb(1, 'mat-divider'),
                  s.Tc(2, '\n\n'),
                  s.Yb(3, 'td-paging-bar', 0, 1),
                  s.gc('change', function(t) {
                    return n.change(t);
                  }),
                  s.Tc(5),
                  s.Wb(),
                  s.Tc(6, '\n\n')),
                2 & t)
              ) {
                const t = s.Fc(4);
                s.Db(3),
                  s.qc('firstLast', n.firstLast)('pageSize', 100)('total', 1345),
                  s.Db(2),
                  s.Wc('\n  ', t.range, ' of ', t.total, '\n');
              }
            },
            directives: [f.a, p.a],
            styles: ['[_nghost-%COMP%]{width:80%}'],
            changeDetection: 0,
          })),
          t
        );
      })();
      e.d(n, 'PagingDemoModule', function() {
        return b;
      });
      const g = Object(i.c)({ overviewDemoComponent: u, id: 'paging' });
      let b = (() => {
        class t {}
        return (
          (t.ɵmod = s.Qb({ type: t })),
          (t.ɵinj = s.Pb({
            factory: function(n) {
              return new (n || t)();
            },
            providers: [],
            imports: [[c.c, f.b, r.a, a.a, o.f.forChild(g)]],
          })),
          t
        );
      })();
    },
  },
]);
