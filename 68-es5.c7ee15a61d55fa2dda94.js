function _classCallCheck(e, t) {
  if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
}
function _defineProperties(e, t) {
  for (var n = 0; n < t.length; n++) {
    var a = t[n];
    (a.enumerable = a.enumerable || !1),
      (a.configurable = !0),
      'value' in a && (a.writable = !0),
      Object.defineProperty(e, a.key, a);
  }
}
function _createClass(e, t, n) {
  return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e;
}
(window.webpackJsonp = window.webpackJsonp || []).push([
  [68],
  {
    WJ7O: function(e, t, n) {
      'use strict';
      n.r(t);
      var a = n('ofXK'),
        c = n('tyNb'),
        r = n('d3UM'),
        i = n('NFeN'),
        o = n('eTLM'),
        s = n('rDig'),
        l = n('dhly'),
        u = n('H9+E'),
        h = n('Qk+/'),
        m = n('NEPT'),
        d = n('sZfy'),
        f = n('mrSG'),
        b = n('fXoL'),
        p = n('MpVW'),
        v = n('kmnG'),
        y = n('cvES'),
        T = n('WKB1'),
        g = n('Y0Ja'),
        w = n('q5+X'),
        C = n('NEJn'),
        x = n('FKr1');
      function k(e, t) {
        if ((1 & e && (b.Yb(0, 'mat-option', 10), b.Tc(1), b.Wb()), 2 & e)) {
          var n = t.$implicit;
          b.qc('value', n), b.Db(1), b.Vc('\n        ', n, '\n      ');
        }
      }
      var A,
        P = function() {
          return { show: !0 };
        },
        _ = function(e) {
          return { tooltip: e };
        },
        D = function() {
          return ['Electronics', 'Toys', 'Grocery', 'Appliances', 'Automotive', 'Sports'];
        },
        N = function() {
          return [150, 130, 150, 120, 150, 120];
        },
        S = function() {
          return [80, 122, 80, 120, 80, 120];
        },
        O =
          (((A = (function() {
            function e(t, n) {
              _classCallCheck(this, e),
                (this._cdr = t),
                (this.themeSelector = n),
                (this.themes = Object(s.e)()),
                (this.config = {
                  xAxis: [{ data: ['Electronics', 'Toys', 'Grocery', 'Appliances', 'Automotive', 'Sports'] }],
                  yAxis: [{ show: !0, type: 'value', axisLabel: { inside: !1 }, min: 0, max: 300 }],
                  series: [
                    {
                      type: 'bar',
                      markPoint: { data: [{ name: 'Target', value: 130, xAxis: 1, yAxis: 130 }] },
                      name: 'Yesterday',
                      data: [150, 130, 150, 120, 150, 120],
                    },
                    {
                      type: 'line',
                      markPoint: {
                        data: [{ name: 'Target', value: 100, xAxis: 1, yAxis: 121 }],
                        symbolRotate: 180,
                        label: { offset: [0, 10] },
                      },
                      markLine: { data: [{ name: 'Average', value: 30, xAxis: 1, yAxis: 30 }], symbol: 'circle' },
                      name: 'Today',
                      data: [80, 122, 80, 120, 80, 120],
                    },
                  ],
                  tooltip: { show: !0, trigger: 'item', showContent: !0 },
                });
            }
            return (
              _createClass(e, [
                {
                  key: 'ngOnInit',
                  value: function() {
                    return Object(f.a)(
                      this,
                      void 0,
                      void 0,
                      regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(
                          function(e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  (this.selectedTheme = this.themeSelector.selected), this._cdr.markForCheck();
                                case 1:
                                case 'end':
                                  return e.stop();
                              }
                          },
                          e,
                          this,
                        );
                      }),
                    );
                  },
                },
                {
                  key: 'selectChartTheme',
                  value: function(e) {
                    this.themeSelector.select(e);
                  },
                },
              ]),
              e
            );
          })()).ɵfac = function(e) {
            return new (e || A)(b.Sb(b.h), b.Sb(p.a));
          }),
          (A.ɵcmp = b.Mb({
            type: A,
            selectors: [['types-combination']],
            decls: 26,
            vars: 23,
            consts: [
              ['layout', 'row', 'layout-align', 'start center'],
              ['hide-xs', '', 1, 'mat-subheading-2', 'pad-left', 'pad-right', 'push-bottom-none'],
              ['floatLabel', 'never'],
              [3, 'value', 'valueChange'],
              [3, 'value', 4, 'ngFor', 'ngForOf'],
              [3, 'themeName', 'config'],
              [3, 'show', 'data'],
              [3, 'show', 'type', 'min', 'max'],
              ['td-bar', '', 3, 'data', 'name'],
              ['td-line', '', 3, 'data', 'name'],
              [3, 'value'],
            ],
            template: function(e, t) {
              1 & e &&
                (b.Yb(0, 'div', 0),
                b.Tc(1, '\n  '),
                b.Yb(2, 'div', 1),
                b.Tc(3, '\n    Chart Theme:\n  '),
                b.Wb(),
                b.Tc(4, '\n  '),
                b.Yb(5, 'mat-form-field', 2),
                b.Tc(6, '\n    '),
                b.Yb(7, 'mat-select', 3),
                b.gc('valueChange', function(e) {
                  return (t.selectedTheme = e);
                })('valueChange', function(e) {
                  return t.selectChartTheme(e);
                }),
                b.Tc(8, '\n      '),
                b.Rc(9, k, 2, 2, 'mat-option', 4),
                b.Tc(10, '\n    '),
                b.Wb(),
                b.Tc(11, '\n  '),
                b.Wb(),
                b.Tc(12, '\n'),
                b.Wb(),
                b.Tc(13, '\n'),
                b.Yb(14, 'td-chart', 5),
                b.lc(15, 'async'),
                b.Tc(16, '\n  '),
                b.Tb(17, 'td-chart-x-axis', 6),
                b.Tc(18, '\n  '),
                b.Tb(19, 'td-chart-y-axis', 7),
                b.Tc(20, '\n  '),
                b.Tb(21, 'td-chart-series', 8),
                b.Tc(22, '\n  '),
                b.Tb(23, 'td-chart-series', 9),
                b.Tc(24, '\n'),
                b.Wb(),
                b.Tc(25, '\n')),
                2 & e &&
                  (b.Db(7),
                  b.qc('value', t.selectedTheme),
                  b.Db(2),
                  b.qc('ngForOf', t.themes),
                  b.Db(5),
                  b.Pc('height', 300, 'px'),
                  b.qc('themeName', b.mc(15, 15, t.themeSelector.selected$))('config', b.vc(18, _, b.uc(17, P))),
                  b.Db(3),
                  b.qc('show', !0)('data', b.uc(20, D)),
                  b.Db(2),
                  b.qc('show', !0)('type', 'value')('min', 0)('max', 300),
                  b.Db(2),
                  b.qc('data', b.uc(21, N))('name', 'Yesterday'),
                  b.Db(2),
                  b.qc('data', b.uc(22, S))('name', 'Today'));
            },
            directives: [v.b, r.a, a.s, y.a, T.a, g.a, w.a, C.a, x.k],
            pipes: [a.b],
            styles: ['[_nghost-%COMP%]{width:100%}'],
            changeDetection: 0,
          })),
          A),
        W = n('dE5l');
      n.d(t, 'CombinationModule', function() {
        return Y;
      });
      var q,
        E = Object(d.c)({ overviewDemoComponent: O, id: 'combination' }),
        Y =
          (((q = function e() {
            _classCallCheck(this, e);
          }).ɵmod = b.Qb({ type: q })),
          (q.ɵinj = b.Pb({
            factory: function(e) {
              return new (e || q)();
            },
            providers: [],
            imports: [[a.c, r.b, i.b, s.a, l.a, u.a, h.a, m.a, o.a, W.a, c.f.forChild(E)]],
          })),
          q);
    },
    eTLM: function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return m;
      });
      var a = n('ofXK'),
        c = n('tyNb'),
        r = n('wZkO'),
        i = n('NFeN'),
        o = n('Wp6s'),
        s = n('sHJK'),
        l = n('ZI6o'),
        u = (n('p6QC'), n('SNPZ'), n('dE5l')),
        h = n('fXoL'),
        m = (function() {
          var e = function e() {
            _classCallCheck(this, e);
          };
          return (
            (e.ɵmod = h.Qb({ type: e })),
            (e.ɵinj = h.Pb({
              factory: function(t) {
                return new (t || e)();
              },
              providers: [],
              imports: [[a.c, c.f, i.b, o.e, r.f, l.a, s.a, u.a]],
            })),
            e
          );
        })();
    },
  },
]);
