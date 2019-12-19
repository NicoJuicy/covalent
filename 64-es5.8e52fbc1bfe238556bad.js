function _classCallCheck(n, e) {
  if (!(n instanceof e)) throw new TypeError('Cannot call a class as a function');
}
(window.webpackJsonp = window.webpackJsonp || []).push([
  [64],
  {
    dHS1: function(n, e, t) {
      'use strict';
      t.r(e);
      var c,
        o = t('ofXK'),
        a = t('tyNb'),
        s = t('d3UM'),
        i = t('NFeN'),
        r = t('eTLM'),
        l = t('Q3DV'),
        b = t('fXoL'),
        u = t('3PiT'),
        d = t('3Pt+'),
        f = t('b6uI'),
        p =
          (((c = function n() {
            _classCallCheck(this, n), (this.value = '');
          }).ɵfac = function(n) {
            return new (n || c)();
          }),
          (c.ɵcmp = b.Mb({
            type: c,
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
            template: function(n, e) {
              1 & n &&
                (b.Yb(0, 'p'),
                b.Tc(1),
                b.Wb(),
                b.Tc(2, '\n\n'),
                b.Yb(3, 'td-tab-select', 0),
                b.gc('ngModelChange', function(n) {
                  return (e.value = n);
                }),
                b.Tc(4, '\n    '),
                b.Yb(5, 'td-tab-option', 1),
                b.Tc(6, '\n    Dogs\n    '),
                b.Wb(),
                b.Tc(7, '\n    '),
                b.Yb(8, 'td-tab-option', 2),
                b.Tc(9, '\n    Cats\n    '),
                b.Wb(),
                b.Tc(10, '\n    '),
                b.Yb(11, 'td-tab-option', 3),
                b.Tc(12, '\n    Bunnies\n    '),
                b.Wb(),
                b.Tc(13, '\n    '),
                b.Yb(14, 'td-tab-option', 4),
                b.Tc(15, '\n    Hamsters\n    '),
                b.Wb(),
                b.Tc(16, '\n'),
                b.Wb()),
                2 & n && (b.Db(1), b.Vc('\n  Selected Tab: ', e.value, '\n'), b.Db(2), b.qc('ngModel', e.value));
            },
            directives: [u.a, d.l, d.o, f.a],
            styles: [''],
          })),
          c),
        v = t('gw4G');
      t.d(e, 'TabSelectDemoModule', function() {
        return C;
      });
      var T,
        h = Object(l.c)({ overviewDemoComponent: p, id: 'tab-select' }),
        C =
          (((T = function n() {
            _classCallCheck(this, n);
          }).ɵmod = b.Qb({ type: T })),
          (T.ɵinj = b.Pb({
            factory: function(n) {
              return new (n || T)();
            },
            providers: [],
            imports: [[o.c, d.h, s.b, i.b, r.a, v.k, a.f.forChild(h)]],
          })),
          T);
    },
    eTLM: function(n, e, t) {
      'use strict';
      t.d(e, 'a', function() {
        return d;
      });
      var c = t('ofXK'),
        o = t('tyNb'),
        a = t('wZkO'),
        s = t('NFeN'),
        i = t('Wp6s'),
        r = t('sHJK'),
        l = t('ZI6o'),
        b = (t('p6QC'), t('SNPZ'), t('dE5l')),
        u = t('fXoL'),
        d = (function() {
          var n = function n() {
            _classCallCheck(this, n);
          };
          return (
            (n.ɵmod = u.Qb({ type: n })),
            (n.ɵinj = u.Pb({
              factory: function(e) {
                return new (e || n)();
              },
              providers: [],
              imports: [[c.c, o.f, s.b, i.e, a.f, l.a, r.a, b.a]],
            })),
            n
          );
        })();
    },
  },
]);
