(window.webpackJsonp = window.webpackJsonp || []).push([
  [68],
  {
    WJ7O: function(e, t, n) {
      'use strict';
      n.r(t);
      var a = n('ofXK'),
        c = n('tyNb'),
        o = n('d3UM'),
        i = n('NFeN'),
        r = n('eTLM'),
        s = n('rDig'),
        l = n('dhly'),
        m = n('H9+E'),
        u = n('Qk+/'),
        d = n('NEPT'),
        h = n('sZfy'),
        b = n('mrSG'),
        f = n('fXoL'),
        p = n('MpVW'),
        T = n('kmnG'),
        y = n('cvES'),
        v = n('WKB1'),
        g = n('Y0Ja'),
        w = n('q5+X'),
        x = n('NEJn'),
        A = n('FKr1');
      function C(e, t) {
        if ((1 & e && (f.Yb(0, 'mat-option', 10), f.Tc(1), f.Wb()), 2 & e)) {
          const e = t.$implicit;
          f.qc('value', e), f.Db(1), f.Vc('\n        ', e, '\n      ');
        }
      }
      const k = function() {
          return { show: !0 };
        },
        D = function(e) {
          return { tooltip: e };
        },
        N = function() {
          return ['Electronics', 'Toys', 'Grocery', 'Appliances', 'Automotive', 'Sports'];
        },
        S = function() {
          return [150, 130, 150, 120, 150, 120];
        },
        W = function() {
          return [80, 122, 80, 120, 80, 120];
        };
      let q = (() => {
        class e {
          constructor(e, t) {
            (this._cdr = e),
              (this.themeSelector = t),
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
          ngOnInit() {
            return Object(b.a)(this, void 0, void 0, function*() {
              (this.selectedTheme = this.themeSelector.selected), this._cdr.markForCheck();
            });
          }
          selectChartTheme(e) {
            this.themeSelector.select(e);
          }
        }
        return (
          (e.ɵfac = function(t) {
            return new (t || e)(f.Sb(f.h), f.Sb(p.a));
          }),
          (e.ɵcmp = f.Mb({
            type: e,
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
                (f.Yb(0, 'div', 0),
                f.Tc(1, '\n  '),
                f.Yb(2, 'div', 1),
                f.Tc(3, '\n    Chart Theme:\n  '),
                f.Wb(),
                f.Tc(4, '\n  '),
                f.Yb(5, 'mat-form-field', 2),
                f.Tc(6, '\n    '),
                f.Yb(7, 'mat-select', 3),
                f.gc('valueChange', function(e) {
                  return (t.selectedTheme = e);
                })('valueChange', function(e) {
                  return t.selectChartTheme(e);
                }),
                f.Tc(8, '\n      '),
                f.Rc(9, C, 2, 2, 'mat-option', 4),
                f.Tc(10, '\n    '),
                f.Wb(),
                f.Tc(11, '\n  '),
                f.Wb(),
                f.Tc(12, '\n'),
                f.Wb(),
                f.Tc(13, '\n'),
                f.Yb(14, 'td-chart', 5),
                f.lc(15, 'async'),
                f.Tc(16, '\n  '),
                f.Tb(17, 'td-chart-x-axis', 6),
                f.Tc(18, '\n  '),
                f.Tb(19, 'td-chart-y-axis', 7),
                f.Tc(20, '\n  '),
                f.Tb(21, 'td-chart-series', 8),
                f.Tc(22, '\n  '),
                f.Tb(23, 'td-chart-series', 9),
                f.Tc(24, '\n'),
                f.Wb(),
                f.Tc(25, '\n')),
                2 & e &&
                  (f.Db(7),
                  f.qc('value', t.selectedTheme),
                  f.Db(2),
                  f.qc('ngForOf', t.themes),
                  f.Db(5),
                  f.Pc('height', 300, 'px'),
                  f.qc('themeName', f.mc(15, 15, t.themeSelector.selected$))('config', f.vc(18, D, f.uc(17, k))),
                  f.Db(3),
                  f.qc('show', !0)('data', f.uc(20, N)),
                  f.Db(2),
                  f.qc('show', !0)('type', 'value')('min', 0)('max', 300),
                  f.Db(2),
                  f.qc('data', f.uc(21, S))('name', 'Yesterday'),
                  f.Db(2),
                  f.qc('data', f.uc(22, W))('name', 'Today'));
            },
            directives: [T.b, o.a, a.s, y.a, v.a, g.a, w.a, x.a, A.k],
            pipes: [a.b],
            styles: ['[_nghost-%COMP%]{width:100%}'],
            changeDetection: 0,
          })),
          e
        );
      })();
      var O = n('dE5l');
      n.d(t, 'CombinationModule', function() {
        return E;
      });
      const Y = Object(h.c)({ overviewDemoComponent: q, id: 'combination' });
      let E = (() => {
        class e {}
        return (
          (e.ɵmod = f.Qb({ type: e })),
          (e.ɵinj = f.Pb({
            factory: function(t) {
              return new (t || e)();
            },
            providers: [],
            imports: [[a.c, o.b, i.b, s.a, l.a, m.a, u.a, d.a, r.a, O.a, c.f.forChild(Y)]],
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
      var a = n('ofXK'),
        c = n('tyNb'),
        o = n('wZkO'),
        i = n('NFeN'),
        r = n('Wp6s'),
        s = n('sHJK'),
        l = n('ZI6o'),
        m = (n('p6QC'), n('SNPZ'), n('dE5l')),
        u = n('fXoL');
      let d = (() => {
        class e {}
        return (
          (e.ɵmod = u.Qb({ type: e })),
          (e.ɵinj = u.Pb({
            factory: function(t) {
              return new (t || e)();
            },
            providers: [],
            imports: [[a.c, c.f, i.b, r.e, o.f, l.a, s.a, m.a]],
          })),
          e
        );
      })();
    },
  },
]);
