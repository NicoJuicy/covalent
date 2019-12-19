(window.webpackJsonp = window.webpackJsonp || []).push([
  [64],
  {
    dHS1: function(e, t, n) {
      'use strict';
      n.r(t);
      var o = n('ofXK'),
        c = n('tyNb'),
        a = n('d3UM'),
        s = n('NFeN'),
        r = n('eTLM'),
        b = n('Q3DV'),
        u = n('fXoL'),
        i = n('3PiT'),
        l = n('3Pt+'),
        d = n('b6uI');
      let p = (() => {
        class e {
          constructor() {
            this.value = '';
          }
        }
        return (
          (e.ɵfac = function(t) {
            return new (t || e)();
          }),
          (e.ɵcmp = u.Mb({
            type: e,
            selectors: [['tab-select-demo']],
            decls: 17,
            vars: 2,
            consts: [
              ['backgroundColor', 'accent', 'stretchTabs', '', 3, 'ngModel', 'ngModelChange'],
              ['value', 'dogs'],
              ['value', 'cats'],
              ['value', 'bunnies'],
              ['value', 'hamsters', 'disabled', ''],
            ],
            template: function(e, t) {
              1 & e &&
                (u.Yb(0, 'p'),
                u.Tc(1),
                u.Wb(),
                u.Tc(2, '\n\n'),
                u.Yb(3, 'td-tab-select', 0),
                u.gc('ngModelChange', function(e) {
                  return (t.value = e);
                }),
                u.Tc(4, '\n    '),
                u.Yb(5, 'td-tab-option', 1),
                u.Tc(6, '\n    Dogs\n    '),
                u.Wb(),
                u.Tc(7, '\n    '),
                u.Yb(8, 'td-tab-option', 2),
                u.Tc(9, '\n    Cats\n    '),
                u.Wb(),
                u.Tc(10, '\n    '),
                u.Yb(11, 'td-tab-option', 3),
                u.Tc(12, '\n    Bunnies\n    '),
                u.Wb(),
                u.Tc(13, '\n    '),
                u.Yb(14, 'td-tab-option', 4),
                u.Tc(15, '\n    Hamsters\n    '),
                u.Wb(),
                u.Tc(16, '\n'),
                u.Wb()),
                2 & e && (u.Db(1), u.Vc('\n  Selected Tab: ', t.value, '\n'), u.Db(2), u.qc('ngModel', t.value));
            },
            directives: [i.a, l.l, l.o, d.a],
            styles: [''],
          })),
          e
        );
      })();
      var f = n('gw4G');
      n.d(t, 'TabSelectDemoModule', function() {
        return T;
      });
      const v = Object(b.c)({ overviewDemoComponent: p, id: 'tab-select' });
      let T = (() => {
        class e {}
        return (
          (e.ɵmod = u.Qb({ type: e })),
          (e.ɵinj = u.Pb({
            factory: function(t) {
              return new (t || e)();
            },
            providers: [],
            imports: [[o.c, l.h, a.b, s.b, r.a, f.k, c.f.forChild(v)]],
          })),
          e
        );
      })();
    },
    eTLM: function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return d;
      });
      var o = n('ofXK'),
        c = n('tyNb'),
        a = n('wZkO'),
        s = n('NFeN'),
        r = n('Wp6s'),
        b = n('sHJK'),
        u = n('ZI6o'),
        i = (n('p6QC'), n('SNPZ'), n('dE5l')),
        l = n('fXoL');
      let d = (() => {
        class e {}
        return (
          (e.ɵmod = l.Qb({ type: e })),
          (e.ɵinj = l.Pb({
            factory: function(t) {
              return new (t || e)();
            },
            providers: [],
            imports: [[o.c, c.f, s.b, r.e, a.f, u.a, b.a, i.a]],
          })),
          e
        );
      })();
    },
  },
]);
