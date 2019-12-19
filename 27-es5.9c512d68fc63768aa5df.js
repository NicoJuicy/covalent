function _classCallCheck(e, t) {
  if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
}
function _defineProperties(e, t) {
  for (var n = 0; n < t.length; n++) {
    var i = t[n];
    (i.enumerable = i.enumerable || !1),
      (i.configurable = !0),
      'value' in i && (i.writable = !0),
      Object.defineProperty(e, i.key, i);
  }
}
function _createClass(e, t, n) {
  return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e;
}
function _possibleConstructorReturn(e, t) {
  return !t || ('object' != typeof t && 'function' != typeof t) ? _assertThisInitialized(e) : t;
}
function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function _getPrototypeOf(e) {
  return (_getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
}
function _inherits(e, t) {
  if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function');
  (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })),
    t && _setPrototypeOf(e, t);
}
function _setPrototypeOf(e, t) {
  return (_setPrototypeOf =
    Object.setPrototypeOf ||
    function(e, t) {
      return (e.__proto__ = t), e;
    })(e, t);
}
(window.webpackJsonp = window.webpackJsonp || []).push([
  [27],
  {
    '7Okg': function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return r;
      });
      var i = n('fXoL'),
        a = n('rDig'),
        o = ['td-tree', ''],
        r = (function() {
          var e = (function(e) {
            function t(e) {
              return (
                _classCallCheck(this, t), _possibleConstructorReturn(this, _getPrototypeOf(t).call(this, 'tree', e))
              );
            }
            return (
              _inherits(t, e),
              _createClass(t, [
                {
                  key: 'getConfig',
                  value: function() {
                    return {
                      zlevel: this.zlevel,
                      z: this.z,
                      left: this.left,
                      top: this.top,
                      right: this.right,
                      bottom: this.bottom,
                      width: this.width,
                      height: this.height,
                      layout: this.layout,
                      orient: this.orient,
                      symbol: this.symbol,
                      symbolSize: this.symbolSize,
                      symbolRotate: this.symbolRotate,
                      symbolKeepAspect: this.symbolKeepAspect,
                      roam: this.roam,
                      expandAndCollapse: this.expandAndCollapse,
                      initialTreeDepth: this.initialTreeDepth,
                      itemStyle: this.itemStyle,
                      label: this.label,
                      lineStyle: this.lineStyle,
                      leaves: this.leaves,
                      emphasis: this.emphasis,
                    };
                  },
                },
              ]),
              t
            );
          })(a.c);
          return (
            (e.ɵfac = function(t) {
              return new (t || e)(i.Sb(a.b));
            }),
            (e.ɵcmp = i.Mb({
              type: e,
              selectors: [['td-chart-series', 'td-tree', '']],
              inputs: {
                config: 'config',
                id: 'id',
                name: 'name',
                color: 'color',
                data: 'data',
                animation: 'animation',
                animationThreshold: 'animationThreshold',
                animationDuration: 'animationDuration',
                animationEasing: 'animationEasing',
                animationDelay: 'animationDelay',
                animationDurationUpdate: 'animationDurationUpdate',
                animationEasingUpdate: 'animationEasingUpdate',
                animationDelayUpdate: 'animationDelayUpdate',
                tooltip: 'tooltip',
                zlevel: 'zlevel',
                z: 'z',
                left: 'left',
                top: 'top',
                right: 'right',
                bottom: 'bottom',
                width: 'width',
                height: 'height',
                layout: 'layout',
                orient: 'orient',
                symbol: 'symbol',
                symbolSize: 'symbolSize',
                symbolRotate: 'symbolRotate',
                symbolKeepAspect: 'symbolKeepAspect',
                roam: 'roam',
                expandAndCollapse: 'expandAndCollapse',
                initialTreeDepth: 'initialTreeDepth',
                itemStyle: 'itemStyle',
                label: 'label',
                lineStyle: 'lineStyle',
                leaves: 'leaves',
                emphasis: 'emphasis',
              },
              features: [
                i.Cb([
                  {
                    provide: a.c,
                    useExisting: Object(i.V)(function() {
                      return e;
                    }),
                  },
                ]),
                i.Ab,
              ],
              attrs: o,
              decls: 0,
              vars: 0,
              template: function(e, t) {},
              encapsulation: 2,
              changeDetection: 0,
            })),
            e
          );
        })();
    },
    '9TPg': function(e, t, n) {
      'use strict';
      var i,
        a = n('ofXK'),
        o = (n('75ev'), n('7Okg'), n('fXoL')),
        r =
          (((i = function e() {
            _classCallCheck(this, e);
          }).ɵmod = o.Qb({ type: i })),
          (i.ɵinj = o.Pb({
            factory: function(e) {
              return new (e || i)();
            },
            imports: [[a.c]],
          })),
          i);
      n.d(t, 'a', function() {
        return r;
      });
    },
    'Fa/5': function(e, t, n) {
      var i = n('ProS');
      n('y2l5'), n('q/+u');
      var a = n('f5Yq'),
        o = n('h8O9');
      n('Ae16'), i.registerVisual(a('scatter', 'circle')), i.registerLayout(o('scatter'));
    },
    'H82R': function(e, t, n) {
      'use strict';
      n.r(t);
      var i = n('ofXK'),
        a = n('d3UM'),
        o = n('NFeN'),
        r = n('rDig'),
        s = n('Qk+/'),
        c = n('NEPT'),
        l = n('Krbs'),
        u = (n('H9+E'), n('9U8r'), n('dhly')),
        h = (n('a4k1'), n('9TPg'), n('fXoL')),
        m = n('MJ5V'),
        p = n('mrSG'),
        d = n('MpVW'),
        f = n('kmnG'),
        b = n('cvES'),
        y = n('cpAi'),
        g = n('WKB1'),
        v = n('Y0Ja'),
        T = n('NEJn'),
        S = n('Zfzs'),
        w = n('FKr1');
      function _(e, t) {
        if ((1 & e && (h.Yb(0, 'mat-option', 11), h.Tc(1), h.Wb()), 2 & e)) {
          var n = t.$implicit;
          h.qc('value', n), h.Db(1), h.Vc('\n        ', n, '\n      ');
        }
      }
      function D(e, t) {
        if (
          (1 & e &&
            (h.Vb(0),
            h.Tc(1, '\n          '),
            h.Yb(2, 'div', 0),
            h.Tc(3, '\n            '),
            h.Yb(4, 'mat-icon'),
            h.Tc(5, '\n              '),
            h.Yb(6, 'span', 13),
            h.Tc(7, 'account_balance'),
            h.Wb(),
            h.Tc(8, '\n            '),
            h.Wb(),
            h.Tc(9, '\n            '),
            h.Yb(10, 'span', 14),
            h.Tc(11),
            h.Wb(),
            h.Tc(12, '\n          '),
            h.Wb(),
            h.Tc(13, '\n          '),
            h.Yb(14, 'div', 15),
            h.Tc(15),
            h.lc(16, 'date'),
            h.Wb(),
            h.Tc(17, '\n        '),
            h.Ub()),
          2 & e)
        ) {
          var n = h.kc().$implicit;
          h.Db(11),
            h.Vc('\n              ', n.seriesName + ': ' + n.value[1], '\n            '),
            h.Db(4),
            h.Vc('at ', h.nc(16, 2, n.name, 'medium'), '');
        }
      }
      function x(e, t) {
        if ((1 & e && (h.Tc(0, '\n        '), h.Rc(1, D, 18, 5, 'ng-container', 12), h.Tc(2, '\n      ')), 2 & e)) {
          var n = t.$implicit;
          h.Db(1), h.qc('ngIf', n);
        }
      }
      function C(e, t) {
        if (
          (1 & e &&
            (h.Vb(0),
            h.Tc(1, '\n          '),
            h.Yb(2, 'div', 0),
            h.Tc(3, '\n            '),
            h.Yb(4, 'mat-icon'),
            h.Tc(5, '\n              '),
            h.Yb(6, 'span', 16),
            h.Tc(7, 'attach_money'),
            h.Wb(),
            h.Tc(8, '\n            '),
            h.Wb(),
            h.Tc(9, '\n            '),
            h.Yb(10, 'span', 14),
            h.Tc(11),
            h.Wb(),
            h.Tc(12, '\n          '),
            h.Wb(),
            h.Tc(13, '\n          '),
            h.Yb(14, 'div', 15),
            h.Tc(15),
            h.lc(16, 'date'),
            h.Wb(),
            h.Tc(17, '\n        '),
            h.Ub()),
          2 & e)
        ) {
          var n = h.kc().$implicit;
          h.Db(11),
            h.Vc('\n              ', n.seriesName + ': ' + n.value[1], '\n            '),
            h.Db(4),
            h.Vc('at ', h.nc(16, 2, n.name, 'medium'), '');
        }
      }
      function O(e, t) {
        if ((1 & e && (h.Tc(0, '\n        '), h.Rc(1, C, 18, 5, 'ng-container', 12), h.Tc(2, '\n      ')), 2 & e)) {
          var n = t.$implicit;
          h.Db(1), h.qc('ngIf', n);
        }
      }
      var I,
        P,
        z,
        k = function() {
          return { show: !1 };
        },
        W = function() {
          return ['2018-10-29T03:27:33.932Z', 200];
        },
        Y = function(e) {
          return { name: '2018-10-29T03:27:33.932Z', value: e };
        },
        R = function() {
          return ['2018-10-30T03:27:33.932Z', 50];
        },
        A = function(e) {
          return { name: '2018-10-30T03:27:33.932Z', value: e };
        },
        L = function() {
          return ['2018-10-31T03:27:33.932Z', 100];
        },
        N = function(e) {
          return { name: '2018-10-31T03:27:33.932Z', value: e };
        },
        V = function(e, t, n) {
          return [e, t, n];
        },
        q = function() {
          return ['2018-10-29T03:28:59.797Z', 200];
        },
        U = function(e) {
          return { name: '2018-10-29T03:28:59.797Z', value: e };
        },
        j = function() {
          return ['2018-10-29T13:28:59.797Z', 50];
        },
        E = function(e) {
          return { name: '2018-10-29T13:28:59.797Z', value: e };
        },
        Z = function() {
          return ['2018-11-01T03:28:59.797Z', 100];
        },
        M = function(e) {
          return { name: '2018-11-01T03:28:59.797Z', value: e };
        },
        F =
          (((P = (function() {
            function e(t, n) {
              _classCallCheck(this, e),
                (this._cdr = t),
                (this.themeSelector = n),
                (this.today = new Date()),
                (this.themes = Object(r.e)()),
                (this.config = {
                  xAxis: [{ show: !0, type: 'time', boundaryGap: !1 }],
                  yAxis: [{ show: !0, type: 'value', axisLabel: { inside: !0 } }],
                  series: [
                    {
                      name: 'Revenue',
                      type: 'line',
                      itemStyle: { opacity: 0.95, color: '#007373' },
                      data: [
                        { name: this.today.toISOString(), value: [this.today.toISOString(), 200] },
                        {
                          name: new Date(this.today.getTime() + 864e5).toISOString(),
                          value: [new Date(this.today.getTime() + 864e5).toISOString(), 50],
                        },
                        {
                          name: new Date(this.today.getTime() + 1728e5).toISOString(),
                          value: [new Date(this.today.getTime() + 1728e5).toISOString(), 100],
                        },
                      ],
                    },
                    {
                      name: 'Sales',
                      type: 'line',
                      itemStyle: { opacity: 0.95, color: '#1B98C6' },
                      data: [
                        { name: this.today.toISOString(), value: [this.today.toISOString(), 200] },
                        {
                          name: new Date(this.today.getTime() + 36e6).toISOString(),
                          value: [new Date(this.today.getTime() + 36e6).toISOString(), 50],
                        },
                        {
                          name: new Date(this.today.getTime() + 2592e5).toISOString(),
                          value: [new Date(this.today.getTime() + 2592e5).toISOString(), 100],
                        },
                      ],
                    },
                  ],
                  tooltip: { show: !0, trigger: 'axis', showContent: !0 },
                });
            }
            return (
              _createClass(e, [
                {
                  key: 'ngOnInit',
                  value: function() {
                    return Object(p.a)(
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
            return new (e || P)(h.Sb(h.h), h.Sb(d.a));
          }),
          (P.ɵcmp = h.Mb({
            type: P,
            selectors: [['line-demo-basic']],
            decls: 40,
            vars: 49,
            consts: [
              ['layout', 'row', 'layout-align', 'start center'],
              ['hide-xs', '', 1, 'mat-subheading-2', 'pad-left', 'pad-right', 'push-bottom-none'],
              ['floatLabel', 'never'],
              [3, 'value', 'valueChange'],
              [3, 'value', 4, 'ngFor', 'ngForOf'],
              [3, 'themeName'],
              [3, 'trigger'],
              [3, 'show', 'position', 'type', 'splitLine', 'boundaryGap'],
              [3, 'show', 'type'],
              ['td-line', '', 3, 'symbolSize', 'data', 'name', 'symbol'],
              ['tdTooltipFormatter', ''],
              [3, 'value'],
              [4, 'ngIf'],
              [1, 'tc-accent'],
              [1, 'mat-caption', 'pad-left-sm'],
              [1, 'mat-caption'],
              [1, 'tc-primary'],
            ],
            template: function(e, t) {
              1 & e &&
                (h.Yb(0, 'div', 0),
                h.Tc(1, '\n  '),
                h.Yb(2, 'div', 1),
                h.Tc(3, '\n    Chart Theme:\n  '),
                h.Wb(),
                h.Tc(4, '\n  '),
                h.Yb(5, 'mat-form-field', 2),
                h.Tc(6, '\n    '),
                h.Yb(7, 'mat-select', 3),
                h.gc('valueChange', function(e) {
                  return (t.selectedTheme = e);
                })('valueChange', function(e) {
                  return t.selectChartTheme(e);
                }),
                h.Tc(8, '\n      '),
                h.Rc(9, _, 2, 2, 'mat-option', 4),
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
                h.Tb(17, 'td-chart-tooltip', 6),
                h.Tc(18, '\n  '),
                h.Tb(19, 'td-chart-x-axis', 7),
                h.Tc(20, '\n  '),
                h.Tb(21, 'td-chart-y-axis', 8),
                h.Tc(22, '\n  '),
                h.Yb(23, 'td-chart-series', 9),
                h.Tc(24, '\n    '),
                h.Yb(25, 'td-chart-series-tooltip'),
                h.Tc(26, '\n      '),
                h.Rc(27, x, 3, 1, 'ng-template', 10),
                h.Tc(28, '\n    '),
                h.Wb(),
                h.Tc(29, '\n  '),
                h.Wb(),
                h.Tc(30, '\n  '),
                h.Yb(31, 'td-chart-series', 9),
                h.Tc(32, '\n    '),
                h.Yb(33, 'td-chart-series-tooltip'),
                h.Tc(34, '\n      '),
                h.Rc(35, O, 3, 1, 'ng-template', 10),
                h.Tc(36, '\n    '),
                h.Wb(),
                h.Tc(37, '\n  '),
                h.Wb(),
                h.Tc(38, '\n'),
                h.Wb(),
                h.Tc(39, '\n')),
                2 & e &&
                  (h.Db(7),
                  h.qc('value', t.selectedTheme),
                  h.Db(2),
                  h.qc('ngForOf', t.themes),
                  h.Db(5),
                  h.Pc('height', 300, 'px'),
                  h.qc('themeName', h.mc(15, 20, t.themeSelector.selected$)),
                  h.Db(3),
                  h.qc('trigger', 'item'),
                  h.Db(2),
                  h.qc('show', !0)('position', 'top')('type', 'time')('splitLine', h.uc(22, k))('boundaryGap', !1),
                  h.Db(2),
                  h.qc('show', !0)('type', 'value'),
                  h.Db(2),
                  h.qc('symbolSize', 14)(
                    'data',
                    h.xc(32, V, h.vc(24, Y, h.uc(23, W)), h.vc(27, A, h.uc(26, R)), h.vc(30, N, h.uc(29, L))),
                  )('name', 'Revenue')('symbol', 'roundRect'),
                  h.Db(8),
                  h.qc('symbolSize', 14)(
                    'data',
                    h.xc(45, V, h.vc(37, U, h.uc(36, q)), h.vc(40, E, h.uc(39, j)), h.vc(43, M, h.uc(42, Z))),
                  )('name', 'Sales')('symbol', 'roundRect'));
            },
            directives: [f.b, a.a, i.s, b.a, y.a, g.a, v.a, T.a, S.a, y.b, w.k, i.t, o.a],
            pipes: [i.b, i.f],
            styles: [''],
            changeDetection: 0,
          })),
          P),
        K =
          (((I = function e() {
            _classCallCheck(this, e);
          }).ɵfac = function(e) {
            return new (e || I)();
          }),
          (I.ɵcmp = h.Mb({
            type: I,
            selectors: [['line-demo']],
            decls: 2,
            vars: 1,
            consts: [[3, 'demoId']],
            template: function(e, t) {
              1 & e && (h.Yb(0, 'demo-component', 0), h.Tb(1, 'line-demo-basic'), h.Wb()),
                2 & e && h.qc('demoId', 'line-demo-basic');
            },
            directives: [m.a, F],
            styles: [''],
          })),
          I),
        X = n('tyNb'),
        G = [{ path: '', component: K }],
        J =
          (((z = function e() {
            _classCallCheck(this, e);
          }).ɵmod = h.Qb({ type: z })),
          (z.ɵinj = h.Pb({
            factory: function(e) {
              return new (e || z)();
            },
            imports: [[X.f.forChild(G)], X.f],
          })),
          z);
      n.d(t, 'LineDemoModule', function() {
        return H;
      });
      var $,
        H =
          ((($ = function e() {
            _classCallCheck(this, e);
          }).ɵmod = h.Qb({ type: $ })),
          ($.ɵinj = h.Pb({
            factory: function(e) {
              return new (e || $)();
            },
            imports: [[l.a, J, r.a, s.a, c.a, u.a, i.c, a.b, o.b]],
          })),
          $);
    },
    'q/+u': function(e, t, n) {
      var i = n('ProS'),
        a = n('9wZj'),
        o = n('yWXo'),
        r = n('h8O9');
      i.extendChartView({
        type: 'scatter',
        render: function(e, t, n) {
          var i = e.getData();
          this._updateSymbolDraw(i, e).updateData(i), (this._finished = !0);
        },
        incrementalPrepareRender: function(e, t, n) {
          var i = e.getData();
          this._updateSymbolDraw(i, e).incrementalPrepareUpdate(i), (this._finished = !1);
        },
        incrementalRender: function(e, t, n) {
          this._symbolDraw.incrementalUpdate(e, t.getData()), (this._finished = e.end === t.getData().count());
        },
        updateTransform: function(e, t, n) {
          var i = e.getData();
          if ((this.group.dirty(), !this._finished || i.count() > 1e4 || !this._symbolDraw.isPersistent()))
            return { update: !0 };
          var a = r().reset(e);
          a.progress && a.progress({ start: 0, end: i.count() }, i), this._symbolDraw.updateLayout(i);
        },
        _updateSymbolDraw: function(e, t) {
          var n = this._symbolDraw,
            i = t.pipelineContext.large;
          return (
            (n && i === this._isLargeDraw) ||
              (n && n.remove(),
              (n = this._symbolDraw = i ? new o() : new a()),
              (this._isLargeDraw = i),
              this.group.removeAll()),
            this.group.add(n.group),
            n
          );
        },
        remove: function(e, t) {
          this._symbolDraw && this._symbolDraw.remove(!0), (this._symbolDraw = null);
        },
        dispose: function() {},
      });
    },
    'y2l5': function(e, t, n) {
      var i = n('MwEJ'),
        a = n('T4UG').extend({
          type: 'series.scatter',
          dependencies: ['grid', 'polar', 'geo', 'singleAxis', 'calendar'],
          getInitialData: function(e, t) {
            return i(this.getSource(), this);
          },
          brushSelector: 'point',
          getProgressive: function() {
            var e = this.option.progressive;
            return null == e ? (this.option.large ? 5e3 : this.get('progressive')) : e;
          },
          getProgressiveThreshold: function() {
            var e = this.option.progressiveThreshold;
            return null == e ? (this.option.large ? 1e4 : this.get('progressiveThreshold')) : e;
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
      e.exports = a;
    },
    'yWXo': function(e, t, n) {
      var i = n('IwbS'),
        a = n('oVpE').createSymbol,
        o = n('OS9S'),
        r = i.extendShape({
          shape: { points: null },
          symbolProxy: null,
          buildPath: function(e, t) {
            var n = t.points,
              i = t.size,
              a = this.symbolProxy,
              o = a.shape;
            if (!((e.getContext ? e.getContext() : e) && i[0] < 4))
              for (var r = 0; r < n.length; ) {
                var s = n[r++],
                  c = n[r++];
                isNaN(s) ||
                  isNaN(c) ||
                  ((o.x = s - i[0] / 2),
                  (o.y = c - i[1] / 2),
                  (o.width = i[0]),
                  (o.height = i[1]),
                  a.buildPath(e, o, !0));
              }
          },
          afterBrush: function(e) {
            var t = this.shape,
              n = t.points,
              i = t.size;
            if (i[0] < 4) {
              this.setTransform(e);
              for (var a = 0; a < n.length; ) {
                var o = n[a++],
                  r = n[a++];
                isNaN(o) || isNaN(r) || e.fillRect(o - i[0] / 2, r - i[1] / 2, i[0], i[1]);
              }
              this.restoreTransform(e);
            }
          },
          findDataIndex: function(e, t) {
            for (
              var n = this.shape,
                i = n.points,
                a = n.size,
                o = Math.max(a[0], 4),
                r = Math.max(a[1], 4),
                s = i.length / 2 - 1;
              s >= 0;
              s--
            ) {
              var c = 2 * s,
                l = i[c] - o / 2,
                u = i[c + 1] - r / 2;
              if (e >= l && t >= u && e <= l + o && t <= u + r) return s;
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
        (c.updateData = function(e) {
          this.group.removeAll();
          var t = new r({ rectHover: !0, cursor: 'default' });
          t.setShape({ points: e.getLayout('symbolPoints') }),
            this._setCommon(t, e),
            this.group.add(t),
            (this._incremental = null);
        }),
        (c.updateLayout = function(e) {
          if (!this._incremental) {
            var t = e.getLayout('symbolPoints');
            this.group.eachChild(function(e) {
              null != e.startIndex &&
                (t = new Float32Array(t.buffer, 4 * e.startIndex * 2, 2 * (e.endIndex - e.startIndex))),
                e.setShape('points', t);
            });
          }
        }),
        (c.incrementalPrepareUpdate = function(e) {
          this.group.removeAll(),
            this._clearIncremental(),
            e.count() > 2e6
              ? (this._incremental || (this._incremental = new o({ silent: !0 })), this.group.add(this._incremental))
              : (this._incremental = null);
        }),
        (c.incrementalUpdate = function(e, t) {
          var n;
          this._incremental
            ? ((n = new r()), this._incremental.addDisplayable(n, !0))
            : (((n = new r({
                rectHover: !0,
                cursor: 'default',
                startIndex: e.start,
                endIndex: e.end,
              })).incremental = !0),
              this.group.add(n)),
            n.setShape({ points: t.getLayout('symbolPoints') }),
            this._setCommon(n, t, !!this._incremental);
        }),
        (c._setCommon = function(e, t, n) {
          var i = t.hostModel,
            o = t.getVisual('symbolSize');
          e.setShape('size', o instanceof Array ? o : [o, o]),
            (e.symbolProxy = a(t.getVisual('symbol'), 0, 0, 0, 0)),
            (e.setColor = e.symbolProxy.setColor);
          var r = e.shape.size[0] < 4;
          e.useStyle(i.getModel('itemStyle').getItemStyle(r ? ['color', 'shadowBlur', 'shadowColor'] : ['color']));
          var s = t.getVisual('color');
          s && e.setColor(s),
            n ||
              ((e.seriesIndex = i.seriesIndex),
              e.on('mousemove', function(t) {
                e.dataIndex = null;
                var n = e.findDataIndex(t.offsetX, t.offsetY);
                n >= 0 && (e.dataIndex = n + (e.startIndex || 0));
              }));
        }),
        (c.remove = function() {
          this._clearIncremental(), (this._incremental = null), this.group.removeAll();
        }),
        (c._clearIncremental = function() {
          var e = this._incremental;
          e && e.clearDisplaybles();
        }),
        (e.exports = s);
    },
  },
]);
