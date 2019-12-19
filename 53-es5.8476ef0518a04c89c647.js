function _classCallCheck(n, o) {
  if (!(n instanceof o)) throw new TypeError('Cannot call a class as a function');
}
(window.webpackJsonp = window.webpackJsonp || []).push([
  [53],
  {
    eTLM: function(n, o, t) {
      'use strict';
      t.d(o, 'a', function() {
        return p;
      });
      var e = t('ofXK'),
        r = t('tyNb'),
        a = t('wZkO'),
        c = t('NFeN'),
        i = t('Wp6s'),
        s = t('sHJK'),
        u = t('ZI6o'),
        f = (t('p6QC'), t('SNPZ'), t('dE5l')),
        l = t('fXoL'),
        p = (function() {
          var n = function n() {
            _classCallCheck(this, n);
          };
          return (
            (n.ɵmod = l.Qb({ type: n })),
            (n.ɵinj = l.Pb({
              factory: function(o) {
                return new (o || n)();
              },
              providers: [],
              imports: [[e.c, r.f, c.b, i.e, a.f, u.a, s.a, f.a]],
            })),
            n
          );
        })();
    },
    swtb: function(n, o, t) {
      'use strict';
      t.r(o),
        t.d(o, 'LayoutNavDemoModule', function() {
          return l;
        });
      var e = t('tyNb'),
        r = t('NFeN'),
        a = t('eTLM'),
        c = t('Q3DV'),
        i = t('UTcn'),
        s = t('eusM'),
        u = t('fXoL'),
        f = Object(c.c)({ overviewDemoComponent: s.a, id: 'layout-nav' }),
        l = (function() {
          var n = function n() {
            _classCallCheck(this, n);
          };
          return (
            (n.ɵmod = u.Qb({ type: n })),
            (n.ɵinj = u.Pb({
              factory: function(o) {
                return new (o || n)();
              },
              providers: [],
              imports: [[i.a, r.b, e.f.forChild(f), a.a]],
            })),
            n
          );
        })();
    },
  },
]);
