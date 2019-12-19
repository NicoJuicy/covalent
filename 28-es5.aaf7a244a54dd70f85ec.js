function _classCallCheck(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
}
function _defineProperties(t, e) {
  for (var n = 0; n < e.length; n++) {
    var i = e[n];
    (i.enumerable = i.enumerable || !1),
      (i.configurable = !0),
      'value' in i && (i.writable = !0),
      Object.defineProperty(t, i.key, i);
  }
}
function _createClass(t, e, n) {
  return e && _defineProperties(t.prototype, e), n && _defineProperties(t, n), t;
}
(window.webpackJsonp = window.webpackJsonp || []).push([
  [28],
  {
    '7hwW': function(t, e, n) {
      'use strict';
      n.r(e);
      var i = n('ofXK'),
        r = n('d3UM'),
        o = n('NFeN'),
        a = n('rDig'),
        s = n('Qk+/'),
        c = n('NEPT'),
        u = n('a4k1'),
        l = n('mrSG'),
        h = n('fXoL'),
        f = n('MpVW'),
        m = n('kmnG'),
        d = n('cvES'),
        p = n('cpAi'),
        b = n('WKB1'),
        g = n('Y0Ja'),
        y = n('Nffh'),
        v = n('FKr1');
      function w(t, e) {
        if ((1 & t && (h.Yb(0, 'mat-option', 11), h.Tc(1), h.Wb()), 2 & t)) {
          var n = e.$implicit;
          h.qc('value', n), h.Db(1), h.Vc('\n        ', n, '\n      ');
        }
      }
      function T(t, e) {
        if (
          (1 & t &&
            (h.Vb(0),
            h.Tc(1, '\n        '),
            h.Yb(2, 'div', 0),
            h.Tc(3, '\n          '),
            h.Yb(4, 'mat-icon'),
            h.Tc(5, 'person'),
            h.Wb(),
            h.Tc(6, '\n          '),
            h.Yb(7, 'span', 13),
            h.Tc(8),
            h.Wb(),
            h.Tc(9, '\n        '),
            h.Wb(),
            h.Tc(10, '\n      '),
            h.Ub()),
          2 & t)
        ) {
          var n = h.kc().$implicit;
          h.Db(4),
            h.Pc('color', n.color),
            h.Db(4),
            h.Vc('\n            ', n.seriesName + ': ' + n.value[1], '\n          ');
        }
      }
      function _(t, e) {
        if ((1 & t && (h.Tc(0, '\n      '), h.Rc(1, T, 11, 2, 'ng-container', 12), h.Tc(2, '\n    ')), 2 & t)) {
          var n = e.$implicit;
          h.Db(1), h.qc('ngIf', n);
        }
      }
      var S,
        C,
        D,
        x = function() {
          return [28604, 77, 17096869, 'Australia', 1990];
        },
        k = function() {
          return [31163, 77.4, 27662440, 'Canada', 1990];
        },
        P = function() {
          return [1516, 68, 1154605773, 'China', 1990];
        },
        I = function() {
          return [13670, 74.7, 10582082, 'Cuba', 1990];
        },
        N = function() {
          return [28599, 75, 4986705, 'Finland', 1990];
        },
        z = function() {
          return [29476, 77.1, 56943299, 'France', 1990];
        },
        O = function() {
          return [31476, 75.4, 78958237, 'Germany', 1990];
        },
        F = function() {
          return [28666, 78.1, 254830, 'Iceland', 1990];
        },
        K = function() {
          return [1777, 57.7, 870601776, 'India', 1990];
        },
        q = function() {
          return [29550, 79.1, 122249285, 'Japan', 1990];
        },
        R = function() {
          return [2076, 67.9, 20194354, 'North Korea', 1990];
        },
        A = function() {
          return [12087, 72, 42972254, 'South Korea', 1990];
        },
        M = function() {
          return [24021, 75.4, 3397534, 'New Zealand', 1990];
        },
        G = function() {
          return [43296, 76.8, 4240375, 'Norway', 1990];
        },
        W = function() {
          return [10088, 70.8, 38195258, 'Poland', 1990];
        },
        U = function() {
          return [19349, 69.6, 147568552, 'Russia', 1990];
        },
        L = function() {
          return [10670, 67.3, 53994605, 'Turkey', 1990];
        },
        V = function() {
          return [26424, 75.7, 57110117, 'United Kingdom', 1990];
        },
        Y = function() {
          return [37062, 75.4, 252847810, 'United States', 1990];
        },
        j = function(t, e, n, i, r, o, a, s, c, u, l, h, f, m, d, p, b, g, y) {
          return [t, e, n, i, r, o, a, s, c, u, l, h, f, m, d, p, b, g, y];
        },
        E = function() {
          return [44056, 81.8, 23968973, 'Australia', 2015];
        },
        J = function() {
          return [43294, 81.7, 35939927, 'Canada', 2015];
        },
        X = function() {
          return [13334, 76.9, 1376048943, 'China', 2015];
        },
        B = function() {
          return [21291, 78.5, 11389562, 'Cuba', 2015];
        },
        H = function() {
          return [38923, 80.8, 5503457, 'Finland', 2015];
        },
        Q = function() {
          return [37599, 81.9, 64395345, 'France', 2015];
        },
        Z = function() {
          return [44053, 81.1, 80688545, 'Germany', 2015];
        },
        $ = function() {
          return [42182, 82.8, 329425, 'Iceland', 2015];
        },
        tt = function() {
          return [5903, 66.8, 1311050527, 'India', 2015];
        },
        et = function() {
          return [36162, 83.5, 126573481, 'Japan', 2015];
        },
        nt = function() {
          return [1390, 71.4, 25155317, 'North Korea', 2015];
        },
        it = function() {
          return [34644, 80.7, 50293439, 'South Korea', 2015];
        },
        rt = function() {
          return [34186, 80.6, 4528526, 'New Zealand', 2015];
        },
        ot = function() {
          return [64304, 81.6, 5210967, 'Norway', 2015];
        },
        at = function() {
          return [24787, 77.3, 38611794, 'Poland', 2015];
        },
        st = function() {
          return [23038, 73.13, 143456918, 'Russia', 2015];
        },
        ct = function() {
          return [19360, 76.5, 78665830, 'Turkey', 2015];
        },
        ut = function() {
          return [38225, 81.4, 64715810, 'United Kingdom', 2015];
        },
        lt = function() {
          return [53354, 79.1, 321773631, 'United States', 2015];
        },
        ht =
          (((S = (function() {
            function t(e, n) {
              _classCallCheck(this, t),
                (this._cdr = e),
                (this.themeSelector = n),
                (this.themes = Object(a.e)()),
                (this.config = {
                  tooltip: { show: !0 },
                  legend: { right: 10, data: ['1990', '2015'] },
                  xAxis: [{ show: !0 }],
                  yAxis: [{ show: !0 }],
                  series: [
                    {
                      name: '1990',
                      data: [
                        [28604, 77, 17096869, 'Australia', 1990],
                        [31163, 77.4, 27662440, 'Canada', 1990],
                        [1516, 68, 1154605773, 'China', 1990],
                        [13670, 74.7, 10582082, 'Cuba', 1990],
                        [28599, 75, 4986705, 'Finland', 1990],
                        [29476, 77.1, 56943299, 'France', 1990],
                        [31476, 75.4, 78958237, 'Germany', 1990],
                        [28666, 78.1, 254830, 'Iceland', 1990],
                        [1777, 57.7, 870601776, 'India', 1990],
                        [29550, 79.1, 122249285, 'Japan', 1990],
                        [2076, 67.9, 20194354, 'North Korea', 1990],
                        [12087, 72, 42972254, 'South Korea', 1990],
                        [24021, 75.4, 3397534, 'New Zealand', 1990],
                        [43296, 76.8, 4240375, 'Norway', 1990],
                        [10088, 70.8, 38195258, 'Poland', 1990],
                        [19349, 69.6, 147568552, 'Russia', 1990],
                        [10670, 67.3, 53994605, 'Turkey', 1990],
                        [26424, 75.7, 57110117, 'United Kingdom', 1990],
                        [37062, 75.4, 252847810, 'United States', 1990],
                      ],
                      type: 'scatter',
                      itemStyle: { opacity: 0.75, color: '#007373' },
                      symbolSize: function(t) {
                        return Math.sqrt(t[2]) / 500;
                      },
                      label: {
                        show: !0,
                        formatter: function(t) {
                          return t.data[3];
                        },
                        position: 'top',
                      },
                    },
                    {
                      name: '2015',
                      data: [
                        [44056, 81.8, 23968973, 'Australia', 2015],
                        [43294, 81.7, 35939927, 'Canada', 2015],
                        [13334, 76.9, 1376048943, 'China', 2015],
                        [21291, 78.5, 11389562, 'Cuba', 2015],
                        [38923, 80.8, 5503457, 'Finland', 2015],
                        [37599, 81.9, 64395345, 'France', 2015],
                        [44053, 81.1, 80688545, 'Germany', 2015],
                        [42182, 82.8, 329425, 'Iceland', 2015],
                        [5903, 66.8, 1311050527, 'India', 2015],
                        [36162, 83.5, 126573481, 'Japan', 2015],
                        [1390, 71.4, 25155317, 'North Korea', 2015],
                        [34644, 80.7, 50293439, 'South Korea', 2015],
                        [34186, 80.6, 4528526, 'New Zealand', 2015],
                        [64304, 81.6, 5210967, 'Norway', 2015],
                        [24787, 77.3, 38611794, 'Poland', 2015],
                        [23038, 73.13, 143456918, 'Russia', 2015],
                        [19360, 76.5, 78665830, 'Turkey', 2015],
                        [38225, 81.4, 64715810, 'United Kingdom', 2015],
                        [53354, 79.1, 321773631, 'United States', 2015],
                      ],
                      type: 'scatter',
                      itemStyle: { opacity: 0.75, color: '#1B98C6' },
                      symbolSize: function(t) {
                        return Math.sqrt(t[2]) / 500;
                      },
                      label: {
                        show: !0,
                        formatter: function(t) {
                          return t.data[3];
                        },
                        position: 'top',
                      },
                    },
                  ],
                });
            }
            return (
              _createClass(t, [
                {
                  key: 'ngOnInit',
                  value: function() {
                    return Object(l.a)(
                      this,
                      void 0,
                      void 0,
                      regeneratorRuntime.mark(function t() {
                        return regeneratorRuntime.wrap(
                          function(t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  (this.selectedTheme = this.themeSelector.selected), this._cdr.markForCheck();
                                case 1:
                                case 'end':
                                  return t.stop();
                              }
                          },
                          t,
                          this,
                        );
                      }),
                    );
                  },
                },
                {
                  key: 'selectChartTheme',
                  value: function(t) {
                    this.themeSelector.select(t);
                  },
                },
                {
                  key: 'symbolSize',
                  value: function(t) {
                    return Math.sqrt(t[2]) / 500;
                  },
                },
              ]),
              t
            );
          })()).ɵfac = function(t) {
            return new (t || S)(h.Sb(h.h), h.Sb(f.a));
          }),
          (S.ɵcmp = h.Mb({
            type: S,
            selectors: [['scatter-demo-basic']],
            decls: 30,
            vars: 97,
            consts: [
              ['layout', 'row', 'layout-align', 'start center'],
              ['hide-xs', '', 1, 'mat-subheading-2', 'pad-left', 'pad-right', 'push-bottom-none'],
              ['floatLabel', 'never'],
              [3, 'value', 'valueChange'],
              [3, 'value', 4, 'ngFor', 'ngForOf'],
              [3, 'themeName'],
              [3, 'trigger'],
              ['tdTooltipFormatter', ''],
              [3, 'show', 'position', 'type', 'boundaryGap'],
              [3, 'show', 'type'],
              ['td-scatter', '', 3, 'data', 'name', 'symbolSize'],
              [3, 'value'],
              [4, 'ngIf'],
              [1, 'mat-caption', 'pad-left-sm'],
            ],
            template: function(t, e) {
              1 & t &&
                (h.Yb(0, 'div', 0),
                h.Tc(1, '\n  '),
                h.Yb(2, 'div', 1),
                h.Tc(3, '\n    Chart Theme:\n  '),
                h.Wb(),
                h.Tc(4, '\n  '),
                h.Yb(5, 'mat-form-field', 2),
                h.Tc(6, '\n    '),
                h.Yb(7, 'mat-select', 3),
                h.gc('valueChange', function(t) {
                  return (e.selectedTheme = t);
                })('valueChange', function(t) {
                  return e.selectChartTheme(t);
                }),
                h.Tc(8, '\n      '),
                h.Rc(9, w, 2, 2, 'mat-option', 4),
                h.Tc(10, '\n    '),
                h.Wb(),
                h.Tc(11, '\n  '),
                h.Wb(),
                h.Tc(12, '\n'),
                h.Wb(),
                h.Tc(13, '\n'),
                h.Yb(14, 'td-chart', 5),
                h.lc(15, 'async'),
                h.Tc(16, '\n  '),
                h.Yb(17, 'td-chart-tooltip', 6),
                h.Tc(18, '\n    '),
                h.Rc(19, _, 3, 1, 'ng-template', 7),
                h.Tc(20, '\n  '),
                h.Wb(),
                h.Tc(21, '\n  '),
                h.Tb(22, 'td-chart-x-axis', 8),
                h.Tc(23, '\n  '),
                h.Tb(24, 'td-chart-y-axis', 9),
                h.Tc(25, '\n  '),
                h.Tb(26, 'td-chart-series', 10),
                h.Tc(27, '\n  '),
                h.Tb(28, 'td-chart-series', 10),
                h.Tc(29, '\n'),
                h.Wb()),
                2 & t &&
                  (h.Db(7),
                  h.qc('value', e.selectedTheme),
                  h.Db(2),
                  h.qc('ngForOf', e.themes),
                  h.Db(5),
                  h.Pc('height', 300, 'px'),
                  h.qc('themeName', h.mc(15, 17, e.themeSelector.selected$)),
                  h.Db(3),
                  h.qc('trigger', 'item'),
                  h.Db(5),
                  h.qc('show', !0)('position', 'bottom')('type', 'value')('boundaryGap', !0),
                  h.Db(2),
                  h.qc('show', !0)('type', 'value'),
                  h.Db(2),
                  h.qc(
                    'data',
                    h.Dc(38, j, [
                      h.uc(19, x),
                      h.uc(20, k),
                      h.uc(21, P),
                      h.uc(22, I),
                      h.uc(23, N),
                      h.uc(24, z),
                      h.uc(25, O),
                      h.uc(26, F),
                      h.uc(27, K),
                      h.uc(28, q),
                      h.uc(29, R),
                      h.uc(30, A),
                      h.uc(31, M),
                      h.uc(32, G),
                      h.uc(33, W),
                      h.uc(34, U),
                      h.uc(35, L),
                      h.uc(36, V),
                      h.uc(37, Y),
                    ]),
                  )('name', '1990')('symbolSize', e.symbolSize),
                  h.Db(2),
                  h.qc(
                    'data',
                    h.Dc(77, j, [
                      h.uc(58, E),
                      h.uc(59, J),
                      h.uc(60, X),
                      h.uc(61, B),
                      h.uc(62, H),
                      h.uc(63, Q),
                      h.uc(64, Z),
                      h.uc(65, $),
                      h.uc(66, tt),
                      h.uc(67, et),
                      h.uc(68, nt),
                      h.uc(69, it),
                      h.uc(70, rt),
                      h.uc(71, ot),
                      h.uc(72, at),
                      h.uc(73, st),
                      h.uc(74, ct),
                      h.uc(75, ut),
                      h.uc(76, lt),
                    ]),
                  )('name', '2015')('symbolSize', e.symbolSize));
            },
            directives: [m.b, r.a, i.s, d.a, p.a, p.b, b.a, g.a, y.a, v.k, i.t, o.a],
            pipes: [i.b],
            styles: [''],
            changeDetection: 0,
          })),
          S),
        ft = n('MJ5V'),
        mt =
          (((C = function t() {
            _classCallCheck(this, t);
          }).ɵfac = function(t) {
            return new (t || C)();
          }),
          (C.ɵcmp = h.Mb({
            type: C,
            selectors: [['scatter-demo']],
            decls: 2,
            vars: 1,
            consts: [[3, 'demoId']],
            template: function(t, e) {
              1 & t && (h.Yb(0, 'demo-component', 0), h.Tb(1, 'scatter-demo-basic'), h.Wb()),
                2 & t && h.qc('demoId', 'scatter-demo-basic');
            },
            directives: [ft.a, ht],
            styles: [''],
          })),
          C),
        dt = n('tyNb'),
        pt = [{ path: '', component: mt }],
        bt =
          (((D = function t() {
            _classCallCheck(this, t);
          }).ɵmod = h.Qb({ type: D })),
          (D.ɵinj = h.Pb({
            factory: function(t) {
              return new (t || D)();
            },
            imports: [[dt.f.forChild(pt)], dt.f],
          })),
          D),
        gt = n('Krbs');
      n.d(e, 'ScatterDemoModule', function() {
        return vt;
      });
      var yt,
        vt =
          (((yt = function t() {
            _classCallCheck(this, t);
          }).ɵmod = h.Qb({ type: yt })),
          (yt.ɵinj = h.Pb({
            factory: function(t) {
              return new (t || yt)();
            },
            imports: [[gt.a, bt, a.a, s.a, c.a, u.a, i.c, r.b, o.b]],
          })),
          yt);
    },
    'BGHn': function(t, e, n) {
      'use strict';
      n.d(e, 'b', function() {
        return c;
      }),
        n.d(e, 'a', function() {
          return u;
        });
      var i = n('fXoL'),
        r = n('rDig'),
        o = n('ofXK'),
        a = ['toolboxContent'];
      function s(t, e) {}
      var c = (function() {
          var t = function t() {
            _classCallCheck(this, t);
          };
          return (
            (t.ɵfac = function(e) {
              return new (e || t)();
            }),
            (t.ɵdir = i.Nb({ type: t, selectors: [['ng-template', 'tdViewDataFormatter', '']] })),
            t
          );
        })(),
        u = (function() {
          var t = (function() {
            function t(e, n, i) {
              _classCallCheck(this, t),
                (this._changeDetectorRef = e),
                (this._elementRef = n),
                (this._optionsService = i),
                (this._state = {}),
                (this.config = {}),
                (this.show = !0),
                (this.showTitle = !0),
                (this.transitionDuration = 0.5),
                (this.left = 'auto'),
                (this.top = 'auto'),
                (this.right = 'auto'),
                (this.bottom = 'auto'),
                (this.width = 'auto'),
                (this.height = 'auto');
            }
            return (
              _createClass(t, [
                {
                  key: 'ngOnChanges',
                  value: function() {
                    this._setOptions();
                  },
                },
                {
                  key: 'ngOnDestroy',
                  value: function() {
                    this._removeOption();
                  },
                },
                {
                  key: '_setOptions',
                  value: function() {
                    this._checkFormatterTemplate();
                    var t = Object(r.d)(
                      this._state,
                      {
                        show: this.show,
                        name: this.trigger,
                        orient: this.orient,
                        itemSize: this.itemSize,
                        itemGap: this.itemGap,
                        showTitle: this.showTitle,
                        label: this.label,
                        feature: this.feature,
                        iconStyle: this.iconStyle,
                        zlevel: this.zlevel,
                        z: this.z,
                        transitionDuration: this.transitionDuration,
                        left: this.left,
                        top: this.top,
                        right: this.right,
                        bottom: this.bottom,
                        width: this.width,
                        height: this.height,
                      },
                      this.config ? this.config : {},
                    );
                    this._optionsService.setOption('toolbox', t);
                  },
                },
                {
                  key: '_removeOption',
                  value: function() {
                    this._optionsService.clearOption('toolbox');
                  },
                },
                {
                  key: '_checkFormatterTemplate',
                  value: function() {
                    this.formatterTemplate &&
                      (this.feature = Object.assign(Object.assign({}, this.feature), {
                        dataView: Object.assign(Object.assign({}, this.feature.dataView), {
                          optionToContent: this._optionToContentFormatter(),
                        }),
                      }));
                  },
                },
                {
                  key: '_optionToContentFormatter',
                  value: function() {
                    var t = this;
                    return function() {
                      return t._changeDetectorRef.markForCheck(), t._elementRef.nativeElement.innerHTML;
                    };
                  },
                },
              ]),
              t
            );
          })();
          return (
            (t.ɵfac = function(e) {
              return new (e || t)(i.Sb(i.h), i.Sb(i.k), i.Sb(r.b));
            }),
            (t.ɵcmp = i.Mb({
              type: t,
              selectors: [['td-chart-toolbox']],
              contentQueries: function(t, e, n) {
                var r;
                1 & t && i.Kb(n, c, !0, i.M), 2 & t && i.Ec((r = i.hc())) && (e.formatterTemplate = r.first);
              },
              viewQuery: function(t, e) {
                var n;
                1 & t && i.Nc(a, !0), 2 & t && i.Ec((n = i.hc())) && (e.fullTemplate = n.first);
              },
              inputs: {
                config: 'config',
                show: 'show',
                trigger: 'trigger',
                orient: 'orient',
                itemSize: 'itemSize',
                itemGap: 'itemGap',
                showTitle: 'showTitle',
                label: 'label',
                feature: 'feature',
                iconStyle: 'iconStyle',
                zlevel: 'zlevel',
                z: 'z',
                transitionDuration: 'transitionDuration',
                left: 'left',
                top: 'top',
                right: 'right',
                bottom: 'bottom',
                width: 'width',
                height: 'height',
              },
              features: [i.Bb()],
              decls: 2,
              vars: 1,
              consts: [
                [3, 'ngTemplateOutlet'],
                ['toolboxContent', ''],
              ],
              template: function(t, e) {
                1 & t && i.Rc(0, s, 0, 0, 'ng-template', 0, 1, i.Sc),
                  2 & t && i.qc('ngTemplateOutlet', e.formatterTemplate);
              },
              directives: [o.A],
              encapsulation: 2,
              changeDetection: 0,
            })),
            t
          );
        })();
    },
    'Fa/5': function(t, e, n) {
      var i = n('ProS');
      n('y2l5'), n('q/+u');
      var r = n('f5Yq'),
        o = n('h8O9');
      n('Ae16'), i.registerVisual(r('scatter', 'circle')), i.registerLayout(o('scatter'));
    },
    'NEPT': function(t, e, n) {
      'use strict';
      var i,
        r = n('ofXK'),
        o = (n('sRwP'), n('BGHn'), n('fXoL')),
        a =
          (((i = function t() {
            _classCallCheck(this, t);
          }).ɵmod = o.Qb({ type: i })),
          (i.ɵinj = o.Pb({
            factory: function(t) {
              return new (t || i)();
            },
            imports: [[r.c]],
          })),
          i);
      n.d(e, 'a', function() {
        return a;
      });
    },
    'q/+u': function(t, e, n) {
      var i = n('ProS'),
        r = n('9wZj'),
        o = n('yWXo'),
        a = n('h8O9');
      i.extendChartView({
        type: 'scatter',
        render: function(t, e, n) {
          var i = t.getData();
          this._updateSymbolDraw(i, t).updateData(i), (this._finished = !0);
        },
        incrementalPrepareRender: function(t, e, n) {
          var i = t.getData();
          this._updateSymbolDraw(i, t).incrementalPrepareUpdate(i), (this._finished = !1);
        },
        incrementalRender: function(t, e, n) {
          this._symbolDraw.incrementalUpdate(t, e.getData()), (this._finished = t.end === e.getData().count());
        },
        updateTransform: function(t, e, n) {
          var i = t.getData();
          if ((this.group.dirty(), !this._finished || i.count() > 1e4 || !this._symbolDraw.isPersistent()))
            return { update: !0 };
          var r = a().reset(t);
          r.progress && r.progress({ start: 0, end: i.count() }, i), this._symbolDraw.updateLayout(i);
        },
        _updateSymbolDraw: function(t, e) {
          var n = this._symbolDraw,
            i = e.pipelineContext.large;
          return (
            (n && i === this._isLargeDraw) ||
              (n && n.remove(),
              (n = this._symbolDraw = i ? new o() : new r()),
              (this._isLargeDraw = i),
              this.group.removeAll()),
            this.group.add(n.group),
            n
          );
        },
        remove: function(t, e) {
          this._symbolDraw && this._symbolDraw.remove(!0), (this._symbolDraw = null);
        },
        dispose: function() {},
      });
    },
    'y2l5': function(t, e, n) {
      var i = n('MwEJ'),
        r = n('T4UG').extend({
          type: 'series.scatter',
          dependencies: ['grid', 'polar', 'geo', 'singleAxis', 'calendar'],
          getInitialData: function(t, e) {
            return i(this.getSource(), this);
          },
          brushSelector: 'point',
          getProgressive: function() {
            var t = this.option.progressive;
            return null == t ? (this.option.large ? 5e3 : this.get('progressive')) : t;
          },
          getProgressiveThreshold: function() {
            var t = this.option.progressiveThreshold;
            return null == t ? (this.option.large ? 1e4 : this.get('progressiveThreshold')) : t;
          },
          defaultOption: {
            coordinateSystem: 'cartesian2d',
            zlevel: 0,
            z: 2,
            legendHoverLink: !0,
            hoverAnimation: !0,
            symbolSize: 10,
            large: !1,
            largeThreshold: 2e3,
            itemStyle: { opacity: 0.8 },
          },
        });
      t.exports = r;
    },
    'yWXo': function(t, e, n) {
      var i = n('IwbS'),
        r = n('oVpE').createSymbol,
        o = n('OS9S'),
        a = i.extendShape({
          shape: { points: null },
          symbolProxy: null,
          buildPath: function(t, e) {
            var n = e.points,
              i = e.size,
              r = this.symbolProxy,
              o = r.shape;
            if (!((t.getContext ? t.getContext() : t) && i[0] < 4))
              for (var a = 0; a < n.length; ) {
                var s = n[a++],
                  c = n[a++];
                isNaN(s) ||
                  isNaN(c) ||
                  ((o.x = s - i[0] / 2),
                  (o.y = c - i[1] / 2),
                  (o.width = i[0]),
                  (o.height = i[1]),
                  r.buildPath(t, o, !0));
              }
          },
          afterBrush: function(t) {
            var e = this.shape,
              n = e.points,
              i = e.size;
            if (i[0] < 4) {
              this.setTransform(t);
              for (var r = 0; r < n.length; ) {
                var o = n[r++],
                  a = n[r++];
                isNaN(o) || isNaN(a) || t.fillRect(o - i[0] / 2, a - i[1] / 2, i[0], i[1]);
              }
              this.restoreTransform(t);
            }
          },
          findDataIndex: function(t, e) {
            for (
              var n = this.shape,
                i = n.points,
                r = n.size,
                o = Math.max(r[0], 4),
                a = Math.max(r[1], 4),
                s = i.length / 2 - 1;
              s >= 0;
              s--
            ) {
              var c = 2 * s,
                u = i[c] - o / 2,
                l = i[c + 1] - a / 2;
              if (t >= u && e >= l && t <= u + o && e <= l + a) return s;
            }
            return -1;
          },
        });
      function s() {
        this.group = new i.Group();
      }
      var c = s.prototype;
      (c.isPersistent = function() {
        return !this._incremental;
      }),
        (c.updateData = function(t) {
          this.group.removeAll();
          var e = new a({ rectHover: !0, cursor: 'default' });
          e.setShape({ points: t.getLayout('symbolPoints') }),
            this._setCommon(e, t),
            this.group.add(e),
            (this._incremental = null);
        }),
        (c.updateLayout = function(t) {
          if (!this._incremental) {
            var e = t.getLayout('symbolPoints');
            this.group.eachChild(function(t) {
              null != t.startIndex &&
                (e = new Float32Array(e.buffer, 4 * t.startIndex * 2, 2 * (t.endIndex - t.startIndex))),
                t.setShape('points', e);
            });
          }
        }),
        (c.incrementalPrepareUpdate = function(t) {
          this.group.removeAll(),
            this._clearIncremental(),
            t.count() > 2e6
              ? (this._incremental || (this._incremental = new o({ silent: !0 })), this.group.add(this._incremental))
              : (this._incremental = null);
        }),
        (c.incrementalUpdate = function(t, e) {
          var n;
          this._incremental
            ? ((n = new a()), this._incremental.addDisplayable(n, !0))
            : (((n = new a({
                rectHover: !0,
                cursor: 'default',
                startIndex: t.start,
                endIndex: t.end,
              })).incremental = !0),
              this.group.add(n)),
            n.setShape({ points: e.getLayout('symbolPoints') }),
            this._setCommon(n, e, !!this._incremental);
        }),
        (c._setCommon = function(t, e, n) {
          var i = e.hostModel,
            o = e.getVisual('symbolSize');
          t.setShape('size', o instanceof Array ? o : [o, o]),
            (t.symbolProxy = r(e.getVisual('symbol'), 0, 0, 0, 0)),
            (t.setColor = t.symbolProxy.setColor);
          var a = t.shape.size[0] < 4;
          t.useStyle(i.getModel('itemStyle').getItemStyle(a ? ['color', 'shadowBlur', 'shadowColor'] : ['color']));
          var s = e.getVisual('color');
          s && t.setColor(s),
            n ||
              ((t.seriesIndex = i.seriesIndex),
              t.on('mousemove', function(e) {
                t.dataIndex = null;
                var n = t.findDataIndex(e.offsetX, e.offsetY);
                n >= 0 && (t.dataIndex = n + (t.startIndex || 0));
              }));
        }),
        (c.remove = function() {
          this._clearIncremental(), (this._incremental = null), this.group.removeAll();
        }),
        (c._clearIncremental = function() {
          var t = this._incremental;
          t && t.clearDisplaybles();
        }),
        (t.exports = s);
    },
  },
]);
