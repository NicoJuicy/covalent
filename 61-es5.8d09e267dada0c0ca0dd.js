function _defineProperties(e, n) {
  for (var t = 0; t < n.length; t++) {
    var a = n[t];
    (a.enumerable = a.enumerable || !1),
      (a.configurable = !0),
      'value' in a && (a.writable = !0),
      Object.defineProperty(e, a.key, a);
  }
}
function _createClass(e, n, t) {
  return n && _defineProperties(e.prototype, n), t && _defineProperties(e, t), e;
}
function _classCallCheck(e, n) {
  if (!(e instanceof n)) throw new TypeError('Cannot call a class as a function');
}
(window.webpackJsonp = window.webpackJsonp || []).push([
  [61],
  {
    eTLM: function(e, n, t) {
      'use strict';
      t.d(n, 'a', function() {
        return p;
      });
      var a = t('ofXK'),
        r = t('tyNb'),
        i = t('wZkO'),
        c = t('NFeN'),
        o = t('Wp6s'),
        s = t('sHJK'),
        f = t('ZI6o'),
        u = (t('p6QC'), t('SNPZ'), t('dE5l')),
        l = t('fXoL'),
        p = (function() {
          var e = function e() {
            _classCallCheck(this, e);
          };
          return (
            (e.ɵmod = l.Qb({ type: e })),
            (e.ɵinj = l.Pb({
              factory: function(n) {
                return new (n || e)();
              },
              providers: [],
              imports: [[a.c, r.f, c.b, o.e, i.f, f.a, s.a, u.a]],
            })),
            e
          );
        })();
    },
    tGDC: function(e, n, t) {
      'use strict';
      t.r(n);
      var a,
        r = t('ofXK'),
        i = t('tyNb'),
        c = t('eTLM'),
        o = t('nCcV'),
        s = t('Q3DV'),
        f = t('fXoL'),
        u = t('f0Cb'),
        l = t('mOPi'),
        p =
          (((a = (function() {
            function e() {
              _classCallCheck(this, e), (this.firstLast = !0);
            }
            return (
              _createClass(e, [
                {
                  key: 'change',
                  value: function(e) {
                    this.event = e;
                  },
                },
              ]),
              e
            );
          })()).ɵfac = function(e) {
            return new (e || a)();
          }),
          (a.ɵcmp = f.Mb({
            type: a,
            selectors: [['paging-demo']],
            decls: 7,
            vars: 5,
            consts: [
              [3, 'firstLast', 'pageSize', 'total', 'change'],
              ['pagingBar', ''],
            ],
            template: function(e, n) {
              if (
                (1 & e &&
                  (f.Tc(0, '\n\n'),
                  f.Tb(1, 'mat-divider'),
                  f.Tc(2, '\n\n'),
                  f.Yb(3, 'td-paging-bar', 0, 1),
                  f.gc('change', function(e) {
                    return n.change(e);
                  }),
                  f.Tc(5),
                  f.Wb(),
                  f.Tc(6, '\n\n')),
                2 & e)
              ) {
                var t = f.Fc(4);
                f.Db(3),
                  f.qc('firstLast', n.firstLast)('pageSize', 100)('total', 1345),
                  f.Db(2),
                  f.Wc('\n  ', t.range, ' of ', t.total, '\n');
              }
            },
            directives: [u.a, l.a],
            styles: ['[_nghost-%COMP%]{width:80%}'],
            changeDetection: 0,
          })),
          a);
      t.d(n, 'PagingDemoModule', function() {
        return g;
      });
      var b,
        d = Object(s.c)({ overviewDemoComponent: p, id: 'paging' }),
        g =
          (((b = function e() {
            _classCallCheck(this, e);
          }).ɵmod = f.Qb({ type: b })),
          (b.ɵinj = f.Pb({
            factory: function(e) {
              return new (e || b)();
            },
            providers: [],
            imports: [[r.c, u.b, c.a, o.a, i.f.forChild(d)]],
          })),
          b);
    },
  },
]);
