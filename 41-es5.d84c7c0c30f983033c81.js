function _classCallCheck(n, e) {
  if (!(n instanceof e)) throw new TypeError('Cannot call a class as a function');
}
(window.webpackJsonp = window.webpackJsonp || []).push([
  [41],
  {
    cOPH: function(n, e, t) {
      'use strict';
      t.r(e);
      var s,
        o = t('ofXK'),
        i = t('tyNb'),
        c = t('eTLM'),
        r = t('Q3DV'),
        a = t('fXoL'),
        l = t('Bpzi'),
        p = t('3Pt+'),
        d =
          (((s = function n() {
            _classCallCheck(this, n),
              (this.strings = ['stepper', 'expansion-panel', 'markdown', 'highlight', 'loading']),
              (this.stringsModel = this.strings.slice(0, 2));
          }).ɵfac = function(n) {
            return new (n || s)();
          }),
          (s.ɵcmp = a.Mb({
            type: s,
            selectors: [['chips-demo']],
            decls: 2,
            vars: 1,
            consts: [['placeholder', 'Type here and press enter', 3, 'ngModel', 'ngModelChange']],
            template: function(n, e) {
              1 & n &&
                (a.Yb(0, 'td-chips', 0),
                a.gc('ngModelChange', function(n) {
                  return (e.stringsModel = n);
                }),
                a.Wb(),
                a.Tc(1, '\n')),
                2 & n && a.qc('ngModel', e.stringsModel);
            },
            directives: [l.c, p.l, p.o],
            styles: ['[_nghost-%COMP%]{width:80%}'],
          })),
          s),
        f = t('gw4G');
      t.d(e, 'ChipsDemoModule', function() {
        return g;
      });
      var h,
        u = Object(r.c)({ overviewDemoComponent: d, id: 'chips' }),
        g =
          (((h = function n() {
            _classCallCheck(this, n);
          }).ɵmod = a.Qb({ type: h })),
          (h.ɵinj = a.Pb({
            factory: function(n) {
              return new (n || h)();
            },
            providers: [],
            imports: [[o.c, p.h, c.a, f.a, i.f.forChild(u)]],
          })),
          h);
    },
    eTLM: function(n, e, t) {
      'use strict';
      t.d(e, 'a', function() {
        return f;
      });
      var s = t('ofXK'),
        o = t('tyNb'),
        i = t('wZkO'),
        c = t('NFeN'),
        r = t('Wp6s'),
        a = t('sHJK'),
        l = t('ZI6o'),
        p = (t('p6QC'), t('SNPZ'), t('dE5l')),
        d = t('fXoL'),
        f = (function() {
          var n = function n() {
            _classCallCheck(this, n);
          };
          return (
            (n.ɵmod = d.Qb({ type: n })),
            (n.ɵinj = d.Pb({
              factory: function(e) {
                return new (e || n)();
              },
              providers: [],
              imports: [[s.c, o.f, c.b, r.e, i.f, l.a, a.a, p.a]],
            })),
            n
          );
        })();
    },
  },
]);
