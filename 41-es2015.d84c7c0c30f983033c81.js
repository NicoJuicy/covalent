(window.webpackJsonp = window.webpackJsonp || []).push([
  [41],
  {
    cOPH: function(e, n, t) {
      'use strict';
      t.r(n);
      var s = t('ofXK'),
        o = t('tyNb'),
        r = t('eTLM'),
        i = t('Q3DV'),
        c = t('fXoL'),
        p = t('Bpzi'),
        d = t('3Pt+');
      let a = (() => {
        class e {
          constructor() {
            (this.strings = ['stepper', 'expansion-panel', 'markdown', 'highlight', 'loading']),
              (this.stringsModel = this.strings.slice(0, 2));
          }
        }
        return (
          (e.ɵfac = function(n) {
            return new (n || e)();
          }),
          (e.ɵcmp = c.Mb({
            type: e,
            selectors: [['chips-demo']],
            decls: 2,
            vars: 1,
            consts: [['placeholder', 'Type here and press enter', 3, 'ngModel', 'ngModelChange']],
            template: function(e, n) {
              1 & e &&
                (c.Yb(0, 'td-chips', 0),
                c.gc('ngModelChange', function(e) {
                  return (n.stringsModel = e);
                }),
                c.Wb(),
                c.Tc(1, '\n')),
                2 & e && c.qc('ngModel', n.stringsModel);
            },
            directives: [p.c, d.l, d.o],
            styles: ['[_nghost-%COMP%]{width:80%}'],
          })),
          e
        );
      })();
      var l = t('gw4G');
      t.d(n, 'ChipsDemoModule', function() {
        return f;
      });
      const u = Object(i.c)({ overviewDemoComponent: a, id: 'chips' });
      let f = (() => {
        class e {}
        return (
          (e.ɵmod = c.Qb({ type: e })),
          (e.ɵinj = c.Pb({
            factory: function(n) {
              return new (n || e)();
            },
            providers: [],
            imports: [[s.c, d.h, r.a, l.a, o.f.forChild(u)]],
          })),
          e
        );
      })();
    },
    eTLM: function(e, n, t) {
      'use strict';
      t.d(n, 'a', function() {
        return u;
      });
      var s = t('ofXK'),
        o = t('tyNb'),
        r = t('wZkO'),
        i = t('NFeN'),
        c = t('Wp6s'),
        p = t('sHJK'),
        d = t('ZI6o'),
        a = (t('p6QC'), t('SNPZ'), t('dE5l')),
        l = t('fXoL');
      let u = (() => {
        class e {}
        return (
          (e.ɵmod = l.Qb({ type: e })),
          (e.ɵinj = l.Pb({
            factory: function(n) {
              return new (n || e)();
            },
            providers: [],
            imports: [[s.c, o.f, i.b, c.e, r.f, d.a, p.a, a.a]],
          })),
          e
        );
      })();
    },
  },
]);
