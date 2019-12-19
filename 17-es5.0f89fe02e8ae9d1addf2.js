function _classCallCheck(e, n) {
  if (!(e instanceof n)) throw new TypeError('Cannot call a class as a function');
}
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
function _possibleConstructorReturn(e, n) {
  return !n || ('object' != typeof n && 'function' != typeof n) ? _assertThisInitialized(e) : n;
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
function _inherits(e, n) {
  if ('function' != typeof n && null !== n) throw new TypeError('Super expression must either be null or a function');
  (e.prototype = Object.create(n && n.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })),
    n && _setPrototypeOf(e, n);
}
function _setPrototypeOf(e, n) {
  return (_setPrototypeOf =
    Object.setPrototypeOf ||
    function(e, n) {
      return (e.__proto__ = n), e;
    })(e, n);
}
(window.webpackJsonp = window.webpackJsonp || []).push([
  [17],
  {
    '7Okg': function(e, n, t) {
      'use strict';
      t.d(n, 'a', function() {
        return i;
      });
      var a = t('fXoL'),
        u = t('rDig'),
        r = ['td-tree', ''],
        i = (function() {
          var e = (function(e) {
            function n(e) {
              return (
                _classCallCheck(this, n), _possibleConstructorReturn(this, _getPrototypeOf(n).call(this, 'tree', e))
              );
            }
            return (
              _inherits(n, e),
              _createClass(n, [
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
              n
            );
          })(u.c);
          return (
            (e.ɵfac = function(n) {
              return new (n || e)(a.Sb(u.b));
            }),
            (e.ɵcmp = a.Mb({
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
                a.Cb([
                  {
                    provide: u.c,
                    useExisting: Object(a.V)(function() {
                      return e;
                    }),
                  },
                ]),
                a.Ab,
              ],
              attrs: r,
              decls: 0,
              vars: 0,
              template: function(e, n) {},
              encapsulation: 2,
              changeDetection: 0,
            })),
            e
          );
        })();
    },
    '9TPg': function(e, n, t) {
      'use strict';
      var a,
        u = t('ofXK'),
        r = (t('75ev'), t('7Okg'), t('fXoL')),
        i =
          (((a = function e() {
            _classCallCheck(this, e);
          }).ɵmod = r.Qb({ type: a })),
          (a.ɵinj = r.Pb({
            factory: function(e) {
              return new (e || a)();
            },
            imports: [[u.c]],
          })),
          a);
      t.d(n, 'a', function() {
        return i;
      });
    },
    'BGHn': function(e, n, t) {
      'use strict';
      t.d(n, 'b', function() {
        return l;
      }),
        t.d(n, 'a', function() {
          return c;
        });
      var a = t('fXoL'),
        u = t('rDig'),
        r = t('ofXK'),
        i = ['toolboxContent'];
      function o(e, n) {}
      var l = (function() {
          var e = function e() {
            _classCallCheck(this, e);
          };
          return (
            (e.ɵfac = function(n) {
              return new (n || e)();
            }),
            (e.ɵdir = a.Nb({ type: e, selectors: [['ng-template', 'tdViewDataFormatter', '']] })),
            e
          );
        })(),
        c = (function() {
          var e = (function() {
            function e(n, t, a) {
              _classCallCheck(this, e),
                (this._changeDetectorRef = n),
                (this._elementRef = t),
                (this._optionsService = a),
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
              _createClass(e, [
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
                    var e = Object(u.d)(
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
                    this._optionsService.setOption('toolbox', e);
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
                    var e = this;
                    return function() {
                      return e._changeDetectorRef.markForCheck(), e._elementRef.nativeElement.innerHTML;
                    };
                  },
                },
              ]),
              e
            );
          })();
          return (
            (e.ɵfac = function(n) {
              return new (n || e)(a.Sb(a.h), a.Sb(a.k), a.Sb(u.b));
            }),
            (e.ɵcmp = a.Mb({
              type: e,
              selectors: [['td-chart-toolbox']],
              contentQueries: function(e, n, t) {
                var u;
                1 & e && a.Kb(t, l, !0, a.M), 2 & e && a.Ec((u = a.hc())) && (n.formatterTemplate = u.first);
              },
              viewQuery: function(e, n) {
                var t;
                1 & e && a.Nc(i, !0), 2 & e && a.Ec((t = a.hc())) && (n.fullTemplate = t.first);
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
              features: [a.Bb()],
              decls: 2,
              vars: 1,
              consts: [
                [3, 'ngTemplateOutlet'],
                ['toolboxContent', ''],
              ],
              template: function(e, n) {
                1 & e && a.Rc(0, o, 0, 0, 'ng-template', 0, 1, a.Sc),
                  2 & e && a.qc('ngTemplateOutlet', n.formatterTemplate);
              },
              directives: [r.A],
              encapsulation: 2,
              changeDetection: 0,
            })),
            e
          );
        })();
    },
    'FBjb': function(e, n, t) {
      var a = t('bYtY'),
        u = t('oVpE').createSymbol,
        r = t('IwbS'),
        i = t('OELB').parsePercent,
        o = t('x3X8').getDefaultLabel;
      function l(e, n, t) {
        r.Group.call(this), this.updateData(e, n, t);
      }
      var c = l.prototype,
        m = (l.getSymbolSize = function(e, n) {
          var t = e.getItemVisual(n, 'symbolSize');
          return t instanceof Array ? t.slice() : [+t, +t];
        });
      function s(e) {
        return [e[0] / 2, e[1] / 2];
      }
      function v(e, n) {
        this.parent.drift(e, n);
      }
      (c._createSymbol = function(e, n, t, a, r) {
        this.removeAll();
        var i = n.getItemVisual(t, 'color'),
          o = u(e, -1, -1, 2, 2, i, r);
        o.attr({ z2: 100, culling: !0, scale: s(a) }), (o.drift = v), (this._symbolType = e), this.add(o);
      }),
        (c.stopSymbolAnimation = function(e) {
          this.childAt(0).stopAnimation(e);
        }),
        (c.getSymbolPath = function() {
          return this.childAt(0);
        }),
        (c.getScale = function() {
          return this.childAt(0).scale;
        }),
        (c.highlight = function() {
          this.childAt(0).trigger('emphasis');
        }),
        (c.downplay = function() {
          this.childAt(0).trigger('normal');
        }),
        (c.setZ = function(e, n) {
          var t = this.childAt(0);
          (t.zlevel = e), (t.z = n);
        }),
        (c.setDraggable = function(e) {
          var n = this.childAt(0);
          (n.draggable = e), (n.cursor = e ? 'move' : 'pointer');
        }),
        (c.updateData = function(e, n, t) {
          this.silent = !1;
          var a = e.getItemVisual(n, 'symbol') || 'circle',
            u = e.hostModel,
            i = m(e, n),
            o = a !== this._symbolType;
          if (o) {
            var l = e.getItemVisual(n, 'symbolKeepAspect');
            this._createSymbol(a, e, n, i, l);
          } else ((c = this.childAt(0)).silent = !1), r.updateProps(c, { scale: s(i) }, u, n);
          if ((this._updateCommon(e, n, i, t), o)) {
            var c = this.childAt(0),
              v = t && t.fadeIn,
              f = { scale: c.scale.slice() };
            v && (f.style = { opacity: c.style.opacity }),
              (c.scale = [0, 0]),
              v && (c.style.opacity = 0),
              r.initProps(c, f, u, n);
          }
          this._seriesModel = u;
        });
      var f = ['itemStyle'],
        h = ['emphasis', 'itemStyle'],
        d = ['label'],
        p = ['emphasis', 'label'];
      function y() {
        !r.isInEmphasis(this) && b.call(this);
      }
      function g() {
        !r.isInEmphasis(this) && S.call(this);
      }
      function b() {
        if (!this.incremental && !this.useHoverLayer) {
          var e = this.__symbolOriginalScale,
            n = e[1] / e[0];
          this.animateTo(
            { scale: [Math.max(1.1 * e[0], e[0] + 3), Math.max(1.1 * e[1], e[1] + 3 * n)] },
            400,
            'elasticOut',
          );
        }
      }
      function S() {
        this.incremental ||
          this.useHoverLayer ||
          this.animateTo({ scale: this.__symbolOriginalScale }, 400, 'elasticOut');
      }
      (c._updateCommon = function(e, n, t, u) {
        var l = this.childAt(0),
          c = e.hostModel,
          m = e.getItemVisual(n, 'color');
        'image' !== l.type && l.useStyle({ strokeNoScale: !0 });
        var v = u && u.itemStyle,
          T = u && u.hoverItemStyle,
          C = u && u.symbolRotate,
          D = u && u.symbolOffset,
          x = u && u.labelModel,
          I = u && u.hoverLabelModel,
          L = u && u.hoverAnimation,
          O = u && u.cursorStyle;
        if (!u || e.hasItemOption) {
          var w = u && u.itemModel ? u.itemModel : e.getItemModel(n);
          (v = w.getModel(f).getItemStyle(['color'])),
            (T = w.getModel(h).getItemStyle()),
            (C = w.getShallow('symbolRotate')),
            (D = w.getShallow('symbolOffset')),
            (x = w.getModel(d)),
            (I = w.getModel(p)),
            (L = w.getShallow('hoverAnimation')),
            (O = w.getShallow('cursor'));
        } else T = a.extend({}, T);
        var A = l.style;
        l.attr('rotation', ((C || 0) * Math.PI) / 180 || 0),
          D && l.attr('position', [i(D[0], t[0]), i(D[1], t[1])]),
          O && l.attr('cursor', O),
          l.setColor(m, u && u.symbolInnerColor),
          l.setStyle(v);
        var _ = e.getItemVisual(n, 'opacity');
        null != _ && (A.opacity = _);
        var E = e.getItemVisual(n, 'liftZ'),
          P = l.__z2Origin;
        null != E
          ? null == P && ((l.__z2Origin = l.z2), (l.z2 += E))
          : null != P && ((l.z2 = P), (l.__z2Origin = null));
        var z = u && u.useNameLabel;
        r.setLabelStyle(A, T, x, I, {
          labelFetcher: c,
          labelDataIndex: n,
          defaultText: function(n, t) {
            return z ? e.getName(n) : o(e, n);
          },
          isRectText: !0,
          autoColor: m,
        }),
          l
            .off('mouseover')
            .off('mouseout')
            .off('emphasis')
            .off('normal'),
          (l.hoverStyle = T),
          r.setHoverStyle(l),
          (l.__symbolOriginalScale = s(t)),
          L &&
            c.isAnimationEnabled() &&
            l
              .on('mouseover', y)
              .on('mouseout', g)
              .on('emphasis', b)
              .on('normal', S);
      }),
        (c.fadeOut = function(e, n) {
          var t = this.childAt(0);
          (this.silent = t.silent = !0),
            (!n || !n.keepLabel) && (t.style.text = null),
            r.updateProps(t, { style: { opacity: 0 }, scale: [0, 0] }, this._seriesModel, this.dataIndex, e);
        }),
        a.inherits(l, r.Group),
        (e.exports = l);
    },
    'NEPT': function(e, n, t) {
      'use strict';
      var a,
        u = t('ofXK'),
        r = (t('sRwP'), t('BGHn'), t('fXoL')),
        i =
          (((a = function e() {
            _classCallCheck(this, e);
          }).ɵmod = r.Qb({ type: a })),
          (a.ɵinj = r.Pb({
            factory: function(e) {
              return new (e || a)();
            },
            imports: [[u.c]],
          })),
          a);
      t.d(n, 'a', function() {
        return i;
      });
    },
    'THUg': function(e, n, t) {
      'use strict';
      t.d(n, 'a', function() {
        return Tu;
      });
      var a = t('mrSG'),
        u = t('ProS'),
        r = t('rDig'),
        i = t('fXoL'),
        o = t('MpVW'),
        l = t('kmnG'),
        c = t('d3UM'),
        m = t('ofXK'),
        s = t('cvES'),
        v = t('cpAi'),
        f = t('7Okg'),
        h = t('FKr1'),
        d = t('NFeN');
      function p(e, n) {
        if ((1 & e && (i.Yb(0, 'mat-option', 9), i.Tc(1), i.Wb()), 2 & e)) {
          var t = n.$implicit;
          i.qc('value', t), i.Db(1), i.Vc('\n        ', t, '\n      ');
        }
      }
      function y(e, n) {
        if (
          (1 & e &&
            (i.Vb(0),
            i.Tc(1, '\n        '),
            i.Yb(2, 'div', 0),
            i.Tc(3, '\n          '),
            i.Yb(4, 'mat-icon', 11),
            i.Tc(5, '\n            '),
            i.Yb(6, 'span', 12),
            i.Tc(7, 'info'),
            i.Wb(),
            i.Tc(8, '\n          '),
            i.Wb(),
            i.Tc(9, '\n          '),
            i.Yb(10, 'span'),
            i.Tc(11),
            i.Wb(),
            i.Tc(12, '\n        '),
            i.Wb(),
            i.Tc(13, '\n      '),
            i.Ub()),
          2 & e)
        ) {
          var t = i.kc().$implicit;
          i.Db(11), i.Uc(t.name);
        }
      }
      function g(e, n) {
        if ((1 & e && (i.Tc(0, '\n      '), i.Rc(1, y, 14, 1, 'ng-container', 10), i.Tc(2, '\n    ')), 2 & e)) {
          var t = n.$implicit;
          i.Db(1), i.qc('ngIf', t);
        }
      }
      var b = function() {
          return { name: 'AgglomerativeCluster', value: 3938 };
        },
        S = function() {
          return { name: 'CommunityStructure', value: 3812 };
        },
        T = function() {
          return { name: 'HierarchicalCluster', value: 6714 };
        },
        C = function() {
          return { name: 'MergeEdge', value: 743 };
        },
        D = function(e, n, t, a) {
          return [e, n, t, a];
        },
        x = function(e) {
          return { name: 'cluster', children: e };
        },
        I = function() {
          return { name: 'BetweennessCentrality', value: 3534 };
        },
        L = function() {
          return { name: 'LinkDistance', value: 5731 };
        },
        O = function() {
          return { name: 'MaxFlowMinCut', value: 7840 };
        },
        w = function() {
          return { name: 'ShortestPaths', value: 5914 };
        },
        A = function() {
          return { name: 'SpanningTree', value: 3416 };
        },
        _ = function(e, n, t, a, u) {
          return [e, n, t, a, u];
        },
        E = function(e) {
          return { name: 'graph', children: e };
        },
        P = function() {
          return { name: 'AspectRatioBanker', value: 7074 };
        },
        z = function(e) {
          return [e];
        },
        F = function(e) {
          return { name: 'optimization', children: e };
        },
        M = function(e, n, t) {
          return [e, n, t];
        },
        k = function(e) {
          return { name: 'analytics', collapsed: !0, children: e };
        },
        R = function() {
          return { name: 'Easing', value: 17010 };
        },
        V = function() {
          return { name: 'FunctionSequence', value: 5842 };
        },
        N = function() {
          return { name: 'ArrayInterpolator', value: 1983 };
        },
        B = function() {
          return { name: 'ColorInterpolator', value: 2047 };
        },
        j = function() {
          return { name: 'DateInterpolator', value: 1375 };
        },
        q = function() {
          return { name: 'Interpolator', value: 8746 };
        },
        G = function() {
          return { name: 'MatrixInterpolator', value: 2202 };
        },
        U = function() {
          return { name: 'NumberInterpolator', value: 1382 };
        },
        K = function() {
          return { name: 'ObjectInterpolator', value: 1629 };
        },
        H = function() {
          return { name: 'PointInterpolator', value: 1675 };
        },
        X = function() {
          return { name: 'RectangleInterpolator', value: 2042 };
        },
        Y = function(e, n, t, a, u, r, i, o, l) {
          return [e, n, t, a, u, r, i, o, l];
        },
        Q = function(e) {
          return { name: 'interpolate', children: e };
        },
        W = function() {
          return { name: 'ISchedulable', value: 1041 };
        },
        J = function() {
          return { name: 'Parallel', value: 5176 };
        },
        Z = function() {
          return { name: 'Pause', value: 449 };
        },
        $ = function() {
          return { name: 'Scheduler', value: 5593 };
        },
        ee = function() {
          return { name: 'Sequence', value: 5534 };
        },
        ne = function() {
          return { name: 'Transition', value: 9201 };
        },
        te = function() {
          return { name: 'Transitioner', value: 19975 };
        },
        ae = function() {
          return { name: 'TransitionEvent', value: 1116 };
        },
        ue = function() {
          return { name: 'Tween', value: 6006 };
        },
        re = function(e, n, t, a, u, r, i, o, l, c, m, s) {
          return [e, n, t, a, u, r, i, o, l, c, m, s];
        },
        ie = function(e) {
          return { name: 'animate', children: e };
        },
        oe = function() {
          return { name: 'Converters', value: 721 };
        },
        le = function() {
          return { name: 'DelimitedTextConverter', value: 4294 };
        },
        ce = function() {
          return { name: 'GraphMLConverter', value: 9800 };
        },
        me = function() {
          return { name: 'IDataConverter', value: 1314 };
        },
        se = function() {
          return { name: 'JSONConverter', value: 2220 };
        },
        ve = function(e) {
          return { name: 'converters', children: e };
        },
        fe = function() {
          return { name: 'DataField', value: 1759 };
        },
        he = function() {
          return { name: 'DataSchema', value: 2165 };
        },
        de = function() {
          return { name: 'DataSet', value: 586 };
        },
        pe = function() {
          return { name: 'DataSource', value: 3331 };
        },
        ye = function() {
          return { name: 'DataTable', value: 772 };
        },
        ge = function() {
          return { name: 'DataUtil', value: 3322 };
        },
        be = function(e, n, t, a, u, r, i) {
          return [e, n, t, a, u, r, i];
        },
        Se = function(e) {
          return { name: 'data', collapsed: !0, children: e };
        },
        Te = function() {
          return { name: 'DirtySprite', value: 8833 };
        },
        Ce = function() {
          return { name: 'LineSprite', value: 1732 };
        },
        De = function() {
          return { name: 'RectSprite', value: 3623 };
        },
        xe = function() {
          return { name: 'TextSprite', value: 10066 };
        },
        Ie = function(e) {
          return { name: 'display', children: e };
        },
        Le = function() {
          return { name: 'FlareVis', value: 4116 };
        },
        Oe = function(e) {
          return { name: 'flex', collapsed: !0, children: e };
        },
        we = function() {
          return { name: 'DragForce', value: 1082 };
        },
        Ae = function() {
          return { name: 'GravityForce', value: 1336 };
        },
        _e = function() {
          return { name: 'IForce', value: 319 };
        },
        Ee = function() {
          return { name: 'NBodyForce', value: 10498 };
        },
        Pe = function() {
          return { name: 'Particle', value: 2822 };
        },
        ze = function() {
          return { name: 'Simulation', value: 9983 };
        },
        Fe = function() {
          return { name: 'Spring', value: 2213 };
        },
        Me = function() {
          return { name: 'SpringForce', value: 1681 };
        },
        ke = function(e, n, t, a, u, r, i, o) {
          return [e, n, t, a, u, r, i, o];
        },
        Re = function(e) {
          return { name: 'physics', children: e };
        },
        Ve = function() {
          return { name: 'AggregateExpression', value: 1616 };
        },
        Ne = function() {
          return { name: 'And', value: 1027 };
        },
        Be = function() {
          return { name: 'Arithmetic', value: 3891 };
        },
        je = function() {
          return { name: 'Average', value: 891 };
        },
        qe = function() {
          return { name: 'BinaryExpression', value: 2893 };
        },
        Ge = function() {
          return { name: 'Comparison', value: 5103 };
        },
        Ue = function() {
          return { name: 'CompositeExpression', value: 3677 };
        },
        Ke = function() {
          return { name: 'Count', value: 781 };
        },
        He = function() {
          return { name: 'DateUtil', value: 4141 };
        },
        Xe = function() {
          return { name: 'Distinct', value: 933 };
        },
        Ye = function() {
          return { name: 'Expression', value: 5130 };
        },
        Qe = function() {
          return { name: 'ExpressionIterator', value: 3617 };
        },
        We = function() {
          return { name: 'Fn', value: 3240 };
        },
        Je = function() {
          return { name: 'If', value: 2732 };
        },
        Ze = function() {
          return { name: 'IsA', value: 2039 };
        },
        $e = function() {
          return { name: 'Literal', value: 1214 };
        },
        en = function() {
          return { name: 'Match', value: 3748 };
        },
        nn = function() {
          return { name: 'Maximum', value: 843 };
        },
        tn = function() {
          return { name: 'add', value: 593 };
        },
        an = function() {
          return { name: 'and', value: 330 };
        },
        un = function() {
          return { name: 'average', value: 287 };
        },
        rn = function() {
          return { name: 'count', value: 277 };
        },
        on = function() {
          return { name: 'distinct', value: 292 };
        },
        ln = function() {
          return { name: 'div', value: 595 };
        },
        cn = function() {
          return { name: 'eq', value: 594 };
        },
        mn = function() {
          return { name: 'fn', value: 460 };
        },
        sn = function() {
          return { name: 'gt', value: 603 };
        },
        vn = function() {
          return { name: 'gte', value: 625 };
        },
        fn = function() {
          return { name: 'iff', value: 748 };
        },
        hn = function() {
          return { name: 'isa', value: 461 };
        },
        dn = function() {
          return { name: 'lt', value: 597 };
        },
        pn = function() {
          return { name: 'lte', value: 619 };
        },
        yn = function() {
          return { name: 'max', value: 283 };
        },
        gn = function() {
          return { name: 'min', value: 283 };
        },
        bn = function() {
          return { name: 'mod', value: 591 };
        },
        Sn = function() {
          return { name: 'mul', value: 603 };
        },
        Tn = function() {
          return { name: 'neq', value: 599 };
        },
        Cn = function() {
          return { name: 'not', value: 386 };
        },
        Dn = function() {
          return { name: 'or', value: 323 };
        },
        xn = function() {
          return { name: 'orderby', value: 307 };
        },
        In = function() {
          return { name: 'range', value: 772 };
        },
        Ln = function() {
          return { name: 'select', value: 296 };
        },
        On = function() {
          return { name: 'stddev', value: 363 };
        },
        wn = function() {
          return { name: 'sub', value: 600 };
        },
        An = function() {
          return { name: 'sum', value: 280 };
        },
        _n = function() {
          return { name: 'update', value: 307 };
        },
        En = function() {
          return { name: 'variance', value: 335 };
        },
        Pn = function() {
          return { name: 'where', value: 299 };
        },
        zn = function() {
          return { name: 'xor', value: 354 };
        },
        Fn = function() {
          return { name: '-', value: 264 };
        },
        Mn = function(e, n, t, a, u, r, i, o, l, c, m, s, v, f, h, d, p, y, g, b, S, T, C, D, x, I, L, O, w, A, _, E) {
          return [e, n, t, a, u, r, i, o, l, c, m, s, v, f, h, d, p, y, g, b, S, T, C, D, x, I, L, O, w, A, _, E];
        },
        kn = function(e) {
          return { name: 'methods', children: e };
        },
        Rn = function() {
          return { name: 'Minimum', value: 843 };
        },
        Vn = function() {
          return { name: 'Not', value: 1554 };
        },
        Nn = function() {
          return { name: 'Or', value: 970 };
        },
        Bn = function() {
          return { name: 'Query', value: 13896 };
        },
        jn = function() {
          return { name: 'Range', value: 1594 };
        },
        qn = function() {
          return { name: 'StringUtil', value: 4130 };
        },
        Gn = function() {
          return { name: 'Sum', value: 791 };
        },
        Un = function() {
          return { name: 'Variable', value: 1124 };
        },
        Kn = function() {
          return { name: 'Variance', value: 1876 };
        },
        Hn = function() {
          return { name: 'Xor', value: 1101 };
        },
        Xn = function(e, n, t, a, u, r, i, o, l, c, m, s, v, f, h, d, p, y, g, b, S, T, C, D, x, I, L, O, w) {
          return [e, n, t, a, u, r, i, o, l, c, m, s, v, f, h, d, p, y, g, b, S, T, C, D, x, I, L, O, w];
        },
        Yn = function(e) {
          return { name: 'query', collapsed: !0, children: e };
        },
        Qn = function() {
          return { name: 'IScaleMap', value: 2105 };
        },
        Wn = function() {
          return { name: 'LinearScale', value: 1316 };
        },
        Jn = function() {
          return { name: 'LogScale', value: 3151 };
        },
        Zn = function() {
          return { name: 'OrdinalScale', value: 3770 };
        },
        $n = function() {
          return { name: 'QuantileScale', value: 2435 };
        },
        et = function() {
          return { name: 'QuantitativeScale', value: 4839 };
        },
        nt = function() {
          return { name: 'RootScale', value: 1756 };
        },
        tt = function() {
          return { name: 'Scale', value: 4268 };
        },
        at = function() {
          return { name: 'ScaleType', value: 1821 };
        },
        ut = function() {
          return { name: 'TimeScale', value: 5833 };
        },
        rt = function(e, n, t, a, u, r, i, o, l, c) {
          return [e, n, t, a, u, r, i, o, l, c];
        },
        it = function(e) {
          return { name: 'scale', children: e };
        },
        ot = function() {
          return { name: 'Arrays', value: 8258 };
        },
        lt = function() {
          return { name: 'Colors', value: 10001 };
        },
        ct = function() {
          return { name: 'Dates', value: 8217 };
        },
        mt = function() {
          return { name: 'Displays', value: 12555 };
        },
        st = function() {
          return { name: 'Filter', value: 2324 };
        },
        vt = function() {
          return { name: 'Geometry', value: 10993 };
        },
        ft = function() {
          return { name: 'FibonacciHeap', value: 9354 };
        },
        ht = function() {
          return { name: 'HeapNode', value: 1233 };
        },
        dt = function(e, n) {
          return [e, n];
        },
        pt = function(e) {
          return { name: 'heap', children: e };
        },
        yt = function() {
          return { name: 'IEvaluable', value: 335 };
        },
        gt = function() {
          return { name: 'IPredicate', value: 383 };
        },
        bt = function() {
          return { name: 'IValueProxy', value: 874 };
        },
        St = function() {
          return { name: 'DenseMatrix', value: 3165 };
        },
        Tt = function() {
          return { name: 'IMatrix', value: 2815 };
        },
        Ct = function() {
          return { name: 'SparseMatrix', value: 3366 };
        },
        Dt = function(e) {
          return { name: 'math', children: e };
        },
        xt = function() {
          return { name: 'Maths', value: 17705 };
        },
        It = function() {
          return { name: 'Orientation', value: 1486 };
        },
        Lt = function() {
          return { name: 'ColorPalette', value: 6367 };
        },
        Ot = function() {
          return { name: 'Palette', value: 1229 };
        },
        wt = function() {
          return { name: 'ShapePalette', value: 2059 };
        },
        At = function() {
          return { name: 'SizePalette', value: 2291 };
        },
        _t = function(e) {
          return { name: 'palette', children: e };
        },
        Et = function() {
          return { name: 'Property', value: 5559 };
        },
        Pt = function() {
          return { name: 'Shapes', value: 19118 };
        },
        zt = function() {
          return { name: 'Sort', value: 6887 };
        },
        Ft = function() {
          return { name: 'Stats', value: 6557 };
        },
        Mt = function() {
          return { name: 'Strings', value: 22026 };
        },
        kt = function(e, n, t, a, u, r, i, o, l, c, m, s, v, f, h, d, p, y, g) {
          return [e, n, t, a, u, r, i, o, l, c, m, s, v, f, h, d, p, y, g];
        },
        Rt = function(e) {
          return { name: 'util', collapsed: !0, children: e };
        },
        Vt = function() {
          return { name: 'Axes', value: 1302 };
        },
        Nt = function() {
          return { name: 'Axis', value: 24593 };
        },
        Bt = function() {
          return { name: 'AxisGridLine', value: 652 };
        },
        jt = function() {
          return { name: 'AxisLabel', value: 636 };
        },
        qt = function() {
          return { name: 'CartesianAxes', value: 6703 };
        },
        Gt = function(e) {
          return { name: 'axis', children: e };
        },
        Ut = function() {
          return { name: 'AnchorControl', value: 2138 };
        },
        Kt = function() {
          return { name: 'ClickControl', value: 3824 };
        },
        Ht = function() {
          return { name: 'Control', value: 1353 };
        },
        Xt = function() {
          return { name: 'ControlList', value: 4665 };
        },
        Yt = function() {
          return { name: 'DragControl', value: 2649 };
        },
        Qt = function() {
          return { name: 'ExpandControl', value: 2832 };
        },
        Wt = function() {
          return { name: 'HoverControl', value: 4896 };
        },
        Jt = function() {
          return { name: 'IControl', value: 763 };
        },
        Zt = function() {
          return { name: 'PanZoomControl', value: 5222 };
        },
        $t = function() {
          return { name: 'SelectionControl', value: 7862 };
        },
        ea = function() {
          return { name: 'TooltipControl', value: 8435 };
        },
        na = function(e, n, t, a, u, r, i, o, l, c, m) {
          return [e, n, t, a, u, r, i, o, l, c, m];
        },
        ta = function(e) {
          return { name: 'controls', children: e };
        },
        aa = function() {
          return { name: 'Data', value: 20544 };
        },
        ua = function() {
          return { name: 'DataList', value: 19788 };
        },
        ra = function() {
          return { name: 'DataSprite', value: 10349 };
        },
        ia = function() {
          return { name: 'EdgeSprite', value: 3301 };
        },
        oa = function() {
          return { name: 'NodeSprite', value: 19382 };
        },
        la = function() {
          return { name: 'ArrowType', value: 698 };
        },
        ca = function() {
          return { name: 'EdgeRenderer', value: 5569 };
        },
        ma = function() {
          return { name: 'IRenderer', value: 353 };
        },
        sa = function() {
          return { name: 'ShapeRenderer', value: 2247 };
        },
        va = function(e) {
          return { name: 'render', children: e };
        },
        fa = function() {
          return { name: 'ScaleBinding', value: 11275 };
        },
        ha = function() {
          return { name: 'Tree', value: 7147 };
        },
        da = function() {
          return { name: 'TreeBuilder', value: 9930 };
        },
        pa = function(e) {
          return { name: 'data', children: e };
        },
        ya = function() {
          return { name: 'DataEvent', value: 2313 };
        },
        ga = function() {
          return { name: 'SelectionEvent', value: 1880 };
        },
        ba = function() {
          return { name: 'TooltipEvent', value: 1701 };
        },
        Sa = function() {
          return { name: 'VisualizationEvent', value: 1117 };
        },
        Ta = function(e) {
          return { name: 'events', children: e };
        },
        Ca = function() {
          return { name: 'Legend', value: 20859 };
        },
        Da = function() {
          return { name: 'LegendItem', value: 4614 };
        },
        xa = function() {
          return { name: 'LegendRange', value: 10530 };
        },
        Ia = function(e) {
          return { name: 'legend', children: e };
        },
        La = function() {
          return { name: 'BifocalDistortion', value: 4461 };
        },
        Oa = function() {
          return { name: 'Distortion', value: 6314 };
        },
        wa = function() {
          return { name: 'FisheyeDistortion', value: 3444 };
        },
        Aa = function(e) {
          return { name: 'distortion', children: e };
        },
        _a = function() {
          return { name: 'ColorEncoder', value: 3179 };
        },
        Ea = function() {
          return { name: 'Encoder', value: 4060 };
        },
        Pa = function() {
          return { name: 'PropertyEncoder', value: 4138 };
        },
        za = function() {
          return { name: 'ShapeEncoder', value: 1690 };
        },
        Fa = function() {
          return { name: 'SizeEncoder', value: 1830 };
        },
        Ma = function(e) {
          return { name: 'encoder', children: e };
        },
        ka = function() {
          return { name: 'FisheyeTreeFilter', value: 5219 };
        },
        Ra = function() {
          return { name: 'GraphDistanceFilter', value: 3165 };
        },
        Va = function() {
          return { name: 'VisibilityFilter', value: 3509 };
        },
        Na = function(e) {
          return { name: 'filter', children: e };
        },
        Ba = function() {
          return { name: 'IOperator', value: 1286 };
        },
        ja = function() {
          return { name: 'Labeler', value: 9956 };
        },
        qa = function() {
          return { name: 'RadialLabeler', value: 3899 };
        },
        Ga = function() {
          return { name: 'StackedAreaLabeler', value: 3202 };
        },
        Ua = function(e) {
          return { name: 'label', children: e };
        },
        Ka = function() {
          return { name: 'AxisLayout', value: 6725 };
        },
        Ha = function() {
          return { name: 'BundledEdgeRouter', value: 3727 };
        },
        Xa = function() {
          return { name: 'CircleLayout', value: 9317 };
        },
        Ya = function() {
          return { name: 'CirclePackingLayout', value: 12003 };
        },
        Qa = function() {
          return { name: 'DendrogramLayout', value: 4853 };
        },
        Wa = function() {
          return { name: 'ForceDirectedLayout', value: 8411 };
        },
        Ja = function() {
          return { name: 'IcicleTreeLayout', value: 4864 };
        },
        Za = function() {
          return { name: 'IndentedTreeLayout', value: 3174 };
        },
        $a = function() {
          return { name: 'Layout', value: 7881 };
        },
        eu = function() {
          return { name: 'NodeLinkTreeLayout', value: 12870 };
        },
        nu = function() {
          return { name: 'PieLayout', value: 2728 };
        },
        tu = function() {
          return { name: 'RadialTreeLayout', value: 12348 };
        },
        au = function() {
          return { name: 'RandomLayout', value: 870 };
        },
        uu = function() {
          return { name: 'StackedAreaLayout', value: 9121 };
        },
        ru = function() {
          return { name: 'TreeMapLayout', value: 9191 };
        },
        iu = function(e, n, t, a, u, r, i, o, l, c, m, s, v, f, h) {
          return [e, n, t, a, u, r, i, o, l, c, m, s, v, f, h];
        },
        ou = function(e) {
          return { name: 'layout', children: e };
        },
        lu = function() {
          return { name: 'Operator', value: 2490 };
        },
        cu = function() {
          return { name: 'OperatorList', value: 5248 };
        },
        mu = function() {
          return { name: 'OperatorSequence', value: 4190 };
        },
        su = function() {
          return { name: 'OperatorSwitch', value: 2581 };
        },
        vu = function() {
          return { name: 'SortOperator', value: 2023 };
        },
        fu = function(e) {
          return { name: 'operator', children: e };
        },
        hu = function() {
          return { name: 'Visualization', value: 16540 };
        },
        du = function(e) {
          return { name: 'vis', children: e };
        },
        pu = function(e) {
          return { name: 'flare', children: e };
        },
        yu = function() {
          return [2.5, 5];
        },
        gu = function(e) {
          return { padding: e, fontSize: 9, distance: 5, position: 'right' };
        },
        bu = function(e) {
          return { label: e };
        },
        Su = function(e) {
          return { padding: e, borderRadius: 10, fontSize: 9, distance: 5, position: 'left' };
        },
        Tu = (function() {
          var e = (function() {
            function e(n, t) {
              _classCallCheck(this, e),
                (this._cdr = n),
                (this.themeSelector = t),
                (this.themes = Object(r.e)()),
                (this.data = [
                  {
                    name: 'flare',
                    children: [
                      {
                        name: 'analytics',
                        children: [
                          {
                            name: 'cluster',
                            children: [
                              { name: 'AgglomerativeCluster', value: 3938 },
                              { name: 'CommunityStructure', value: 3812 },
                              { name: 'HierarchicalCluster', value: 6714 },
                              { name: 'MergeEdge', value: 743 },
                            ],
                          },
                          {
                            name: 'graph',
                            children: [
                              { name: 'BetweennessCentrality', value: 3534 },
                              { name: 'LinkDistance', value: 5731 },
                              { name: 'MaxFlowMinCut', value: 7840 },
                              { name: 'ShortestPaths', value: 5914 },
                              { name: 'SpanningTree', value: 3416 },
                            ],
                          },
                          { name: 'optimization', children: [{ name: 'AspectRatioBanker', value: 7074 }] },
                        ],
                      },
                      {
                        name: 'animate',
                        children: [
                          { name: 'Easing', value: 17010 },
                          { name: 'FunctionSequence', value: 5842 },
                          {
                            name: 'interpolate',
                            children: [
                              { name: 'ArrayInterpolator', value: 1983 },
                              { name: 'ColorInterpolator', value: 2047 },
                              { name: 'DateInterpolator', value: 1375 },
                              { name: 'Interpolator', value: 8746 },
                              { name: 'MatrixInterpolator', value: 2202 },
                              { name: 'NumberInterpolator', value: 1382 },
                              { name: 'ObjectInterpolator', value: 1629 },
                              { name: 'PointInterpolator', value: 1675 },
                              { name: 'RectangleInterpolator', value: 2042 },
                            ],
                          },
                          { name: 'ISchedulable', value: 1041 },
                          { name: 'Parallel', value: 5176 },
                          { name: 'Pause', value: 449 },
                          { name: 'Scheduler', value: 5593 },
                          { name: 'Sequence', value: 5534 },
                          { name: 'Transition', value: 9201 },
                          { name: 'Transitioner', value: 19975 },
                          { name: 'TransitionEvent', value: 1116 },
                          { name: 'Tween', value: 6006 },
                        ],
                      },
                      {
                        name: 'data',
                        children: [
                          {
                            name: 'converters',
                            children: [
                              { name: 'Converters', value: 721 },
                              { name: 'DelimitedTextConverter', value: 4294 },
                              { name: 'GraphMLConverter', value: 9800 },
                              { name: 'IDataConverter', value: 1314 },
                              { name: 'JSONConverter', value: 2220 },
                            ],
                          },
                          { name: 'DataField', value: 1759 },
                          { name: 'DataSchema', value: 2165 },
                          { name: 'DataSet', value: 586 },
                          { name: 'DataSource', value: 3331 },
                          { name: 'DataTable', value: 772 },
                          { name: 'DataUtil', value: 3322 },
                        ],
                      },
                      {
                        name: 'display',
                        children: [
                          { name: 'DirtySprite', value: 8833 },
                          { name: 'LineSprite', value: 1732 },
                          { name: 'RectSprite', value: 3623 },
                          { name: 'TextSprite', value: 10066 },
                        ],
                      },
                      { name: 'flex', children: [{ name: 'FlareVis', value: 4116 }] },
                      {
                        name: 'physics',
                        children: [
                          { name: 'DragForce', value: 1082 },
                          { name: 'GravityForce', value: 1336 },
                          { name: 'IForce', value: 319 },
                          { name: 'NBodyForce', value: 10498 },
                          { name: 'Particle', value: 2822 },
                          { name: 'Simulation', value: 9983 },
                          { name: 'Spring', value: 2213 },
                          { name: 'SpringForce', value: 1681 },
                        ],
                      },
                      {
                        name: 'query',
                        children: [
                          { name: 'AggregateExpression', value: 1616 },
                          { name: 'And', value: 1027 },
                          { name: 'Arithmetic', value: 3891 },
                          { name: 'Average', value: 891 },
                          { name: 'BinaryExpression', value: 2893 },
                          { name: 'Comparison', value: 5103 },
                          { name: 'CompositeExpression', value: 3677 },
                          { name: 'Count', value: 781 },
                          { name: 'DateUtil', value: 4141 },
                          { name: 'Distinct', value: 933 },
                          { name: 'Expression', value: 5130 },
                          { name: 'ExpressionIterator', value: 3617 },
                          { name: 'Fn', value: 3240 },
                          { name: 'If', value: 2732 },
                          { name: 'IsA', value: 2039 },
                          { name: 'Literal', value: 1214 },
                          { name: 'Match', value: 3748 },
                          { name: 'Maximum', value: 843 },
                          {
                            name: 'methods',
                            children: [
                              { name: 'add', value: 593 },
                              { name: 'and', value: 330 },
                              { name: 'average', value: 287 },
                              { name: 'count', value: 277 },
                              { name: 'distinct', value: 292 },
                              { name: 'div', value: 595 },
                              { name: 'eq', value: 594 },
                              { name: 'fn', value: 460 },
                              { name: 'gt', value: 603 },
                              { name: 'gte', value: 625 },
                              { name: 'iff', value: 748 },
                              { name: 'isa', value: 461 },
                              { name: 'lt', value: 597 },
                              { name: 'lte', value: 619 },
                              { name: 'max', value: 283 },
                              { name: 'min', value: 283 },
                              { name: 'mod', value: 591 },
                              { name: 'mul', value: 603 },
                              { name: 'neq', value: 599 },
                              { name: 'not', value: 386 },
                              { name: 'or', value: 323 },
                              { name: 'orderby', value: 307 },
                              { name: 'range', value: 772 },
                              { name: 'select', value: 296 },
                              { name: 'stddev', value: 363 },
                              { name: 'sub', value: 600 },
                              { name: 'sum', value: 280 },
                              { name: 'update', value: 307 },
                              { name: 'variance', value: 335 },
                              { name: 'where', value: 299 },
                              { name: 'xor', value: 354 },
                              { name: '-', value: 264 },
                            ],
                          },
                          { name: 'Minimum', value: 843 },
                          { name: 'Not', value: 1554 },
                          { name: 'Or', value: 970 },
                          { name: 'Query', value: 13896 },
                          { name: 'Range', value: 1594 },
                          { name: 'StringUtil', value: 4130 },
                          { name: 'Sum', value: 791 },
                          { name: 'Variable', value: 1124 },
                          { name: 'Variance', value: 1876 },
                          { name: 'Xor', value: 1101 },
                        ],
                      },
                      {
                        name: 'scale',
                        children: [
                          { name: 'IScaleMap', value: 2105 },
                          { name: 'LinearScale', value: 1316 },
                          { name: 'LogScale', value: 3151 },
                          { name: 'OrdinalScale', value: 3770 },
                          { name: 'QuantileScale', value: 2435 },
                          { name: 'QuantitativeScale', value: 4839 },
                          { name: 'RootScale', value: 1756 },
                          { name: 'Scale', value: 4268 },
                          { name: 'ScaleType', value: 1821 },
                          { name: 'TimeScale', value: 5833 },
                        ],
                      },
                      {
                        name: 'util',
                        children: [
                          { name: 'Arrays', value: 8258 },
                          { name: 'Colors', value: 10001 },
                          { name: 'Dates', value: 8217 },
                          { name: 'Displays', value: 12555 },
                          { name: 'Filter', value: 2324 },
                          { name: 'Geometry', value: 10993 },
                          {
                            name: 'heap',
                            children: [
                              { name: 'FibonacciHeap', value: 9354 },
                              { name: 'HeapNode', value: 1233 },
                            ],
                          },
                          { name: 'IEvaluable', value: 335 },
                          { name: 'IPredicate', value: 383 },
                          { name: 'IValueProxy', value: 874 },
                          {
                            name: 'math',
                            children: [
                              { name: 'DenseMatrix', value: 3165 },
                              { name: 'IMatrix', value: 2815 },
                              { name: 'SparseMatrix', value: 3366 },
                            ],
                          },
                          { name: 'Maths', value: 17705 },
                          { name: 'Orientation', value: 1486 },
                          {
                            name: 'palette',
                            children: [
                              { name: 'ColorPalette', value: 6367 },
                              { name: 'Palette', value: 1229 },
                              { name: 'ShapePalette', value: 2059 },
                              { name: 'SizePalette', value: 2291 },
                            ],
                          },
                          { name: 'Property', value: 5559 },
                          { name: 'Shapes', value: 19118 },
                          { name: 'Sort', value: 6887 },
                          { name: 'Stats', value: 6557 },
                          { name: 'Strings', value: 22026 },
                        ],
                      },
                      {
                        name: 'vis',
                        children: [
                          {
                            name: 'axis',
                            children: [
                              { name: 'Axes', value: 1302 },
                              { name: 'Axis', value: 24593 },
                              { name: 'AxisGridLine', value: 652 },
                              { name: 'AxisLabel', value: 636 },
                              { name: 'CartesianAxes', value: 6703 },
                            ],
                          },
                          {
                            name: 'controls',
                            children: [
                              { name: 'AnchorControl', value: 2138 },
                              { name: 'ClickControl', value: 3824 },
                              { name: 'Control', value: 1353 },
                              { name: 'ControlList', value: 4665 },
                              { name: 'DragControl', value: 2649 },
                              { name: 'ExpandControl', value: 2832 },
                              { name: 'HoverControl', value: 4896 },
                              { name: 'IControl', value: 763 },
                              { name: 'PanZoomControl', value: 5222 },
                              { name: 'SelectionControl', value: 7862 },
                              { name: 'TooltipControl', value: 8435 },
                            ],
                          },
                          {
                            name: 'data',
                            children: [
                              { name: 'Data', value: 20544 },
                              { name: 'DataList', value: 19788 },
                              { name: 'DataSprite', value: 10349 },
                              { name: 'EdgeSprite', value: 3301 },
                              { name: 'NodeSprite', value: 19382 },
                              {
                                name: 'render',
                                children: [
                                  { name: 'ArrowType', value: 698 },
                                  { name: 'EdgeRenderer', value: 5569 },
                                  { name: 'IRenderer', value: 353 },
                                  { name: 'ShapeRenderer', value: 2247 },
                                ],
                              },
                              { name: 'ScaleBinding', value: 11275 },
                              { name: 'Tree', value: 7147 },
                              { name: 'TreeBuilder', value: 9930 },
                            ],
                          },
                          {
                            name: 'events',
                            children: [
                              { name: 'DataEvent', value: 2313 },
                              { name: 'SelectionEvent', value: 1880 },
                              { name: 'TooltipEvent', value: 1701 },
                              { name: 'VisualizationEvent', value: 1117 },
                            ],
                          },
                          {
                            name: 'legend',
                            children: [
                              { name: 'Legend', value: 20859 },
                              { name: 'LegendItem', value: 4614 },
                              { name: 'LegendRange', value: 10530 },
                            ],
                          },
                          {
                            name: 'operator',
                            children: [
                              {
                                name: 'distortion',
                                children: [
                                  { name: 'BifocalDistortion', value: 4461 },
                                  { name: 'Distortion', value: 6314 },
                                  { name: 'FisheyeDistortion', value: 3444 },
                                ],
                              },
                              {
                                name: 'encoder',
                                children: [
                                  { name: 'ColorEncoder', value: 3179 },
                                  { name: 'Encoder', value: 4060 },
                                  { name: 'PropertyEncoder', value: 4138 },
                                  { name: 'ShapeEncoder', value: 1690 },
                                  { name: 'SizeEncoder', value: 1830 },
                                ],
                              },
                              {
                                name: 'filter',
                                children: [
                                  { name: 'FisheyeTreeFilter', value: 5219 },
                                  { name: 'GraphDistanceFilter', value: 3165 },
                                  { name: 'VisibilityFilter', value: 3509 },
                                ],
                              },
                              { name: 'IOperator', value: 1286 },
                              {
                                name: 'label',
                                children: [
                                  { name: 'Labeler', value: 9956 },
                                  { name: 'RadialLabeler', value: 3899 },
                                  { name: 'StackedAreaLabeler', value: 3202 },
                                ],
                              },
                              {
                                name: 'layout',
                                children: [
                                  { name: 'AxisLayout', value: 6725 },
                                  { name: 'BundledEdgeRouter', value: 3727 },
                                  { name: 'CircleLayout', value: 9317 },
                                  { name: 'CirclePackingLayout', value: 12003 },
                                  { name: 'DendrogramLayout', value: 4853 },
                                  { name: 'ForceDirectedLayout', value: 8411 },
                                  { name: 'IcicleTreeLayout', value: 4864 },
                                  { name: 'IndentedTreeLayout', value: 3174 },
                                  { name: 'Layout', value: 7881 },
                                  { name: 'NodeLinkTreeLayout', value: 12870 },
                                  { name: 'PieLayout', value: 2728 },
                                  { name: 'RadialTreeLayout', value: 12348 },
                                  { name: 'RandomLayout', value: 870 },
                                  { name: 'StackedAreaLayout', value: 9121 },
                                  { name: 'TreeMapLayout', value: 9191 },
                                ],
                              },
                              { name: 'Operator', value: 2490 },
                              { name: 'OperatorList', value: 5248 },
                              { name: 'OperatorSequence', value: 4190 },
                              { name: 'OperatorSwitch', value: 2581 },
                              { name: 'SortOperator', value: 2023 },
                            ],
                          },
                          { name: 'Visualization', value: 16540 },
                        ],
                      },
                    ],
                  },
                ]),
                (this.config = {
                  grid: { borderColor: 'transparent' },
                  xAxis: { show: !1 },
                  yAxis: { show: !1 },
                  tooltip: { trigger: 'item', triggerOn: 'mousemove' },
                  series: [
                    {
                      type: 'tree',
                      data: this.data,
                      top: '10%',
                      left: '10%',
                      bottom: '10%',
                      right: '10%',
                      itemStyle: { borderColor: '#F2724B', color: '#F2724B' },
                      label: { distance: 5, position: 'left', fontSize: 9 },
                      leaves: { label: { distance: 5, fontSize: 9, position: 'right' } },
                      expandAndCollapse: !0,
                      animationDuration: 550,
                      animationDurationUpdate: 750,
                    },
                  ],
                }),
                u.util.each(this.data[0].children, function(e, n) {
                  return n % 2 == 0 && (e.collapsed = !0);
                });
            }
            return (
              _createClass(e, [
                {
                  key: 'ngOnInit',
                  value: function() {
                    return Object(a.a)(
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
          })();
          return (
            (e.ɵfac = function(n) {
              return new (n || e)(i.Sb(i.h), i.Sb(o.a));
            }),
            (e.ɵcmp = i.Mb({
              type: e,
              selectors: [['tree-demo-basic']],
              decls: 25,
              vars: 593,
              consts: [
                ['layout', 'row', 'layout-align', 'start center'],
                ['hide-xs', '', 1, 'mat-subheading-2', 'pad-left', 'pad-right', 'push-bottom-none'],
                ['floatLabel', 'never'],
                [3, 'value', 'valueChange'],
                [3, 'value', 4, 'ngFor', 'ngForOf'],
                [3, 'themeName'],
                [3, 'trigger'],
                ['tdTooltipFormatter', ''],
                [
                  'td-tree',
                  '',
                  3,
                  'top',
                  'left',
                  'bottom',
                  'right',
                  'data',
                  'initialTreeDepth',
                  'symbolSize',
                  'leaves',
                  'label',
                ],
                [3, 'value'],
                [4, 'ngIf'],
                [1, 'push-right-sm'],
                [1, 'tc-blue-300'],
              ],
              template: function(e, n) {
                1 & e &&
                  (i.Yb(0, 'div', 0),
                  i.Tc(1, '\n  '),
                  i.Yb(2, 'div', 1),
                  i.Tc(3, '\n    Chart Theme:\n  '),
                  i.Wb(),
                  i.Tc(4, '\n  '),
                  i.Yb(5, 'mat-form-field', 2),
                  i.Tc(6, '\n    '),
                  i.Yb(7, 'mat-select', 3),
                  i.gc('valueChange', function(e) {
                    return (n.selectedTheme = e);
                  })('valueChange', function(e) {
                    return n.selectChartTheme(e);
                  }),
                  i.Tc(8, '\n      '),
                  i.Rc(9, p, 2, 2, 'mat-option', 4),
                  i.Tc(10, '\n    '),
                  i.Wb(),
                  i.Tc(11, '\n  '),
                  i.Wb(),
                  i.Tc(12, '\n'),
                  i.Wb(),
                  i.Tc(13, '\n'),
                  i.Yb(14, 'td-chart', 5),
                  i.lc(15, 'async'),
                  i.Tc(16, '\n  '),
                  i.Yb(17, 'td-chart-tooltip', 6),
                  i.Tc(18, '\n    '),
                  i.Rc(19, g, 3, 1, 'ng-template', 7),
                  i.Tc(20, '\n  '),
                  i.Wb(),
                  i.Tc(21, '\n  '),
                  i.Tb(22, 'td-chart-series', 8),
                  i.Tc(23, '\n'),
                  i.Wb(),
                  i.Tc(24, '\n')),
                  2 & e &&
                    (i.Db(7),
                    i.qc('value', n.selectedTheme),
                    i.Db(2),
                    i.qc('ngForOf', n.themes),
                    i.Db(5),
                    i.Pc('height', 800, 'px'),
                    i.qc('themeName', i.mc(15, 14, n.themeSelector.selected$)),
                    i.Db(3),
                    i.qc('trigger', 'item'),
                    i.Db(5),
                    i.qc('top', '10%')('left', '10%')('bottom', '10%')('right', '30%')(
                      'data',
                      i.vc(
                        583,
                        z,
                        i.vc(
                          581,
                          pu,
                          i.Dc(570, rt, [
                            i.vc(
                              49,
                              k,
                              i.xc(
                                45,
                                M,
                                i.vc(25, x, i.yc(20, D, i.uc(16, b), i.uc(17, S), i.uc(18, T), i.uc(19, C))),
                                i.vc(
                                  38,
                                  E,
                                  i.zc(32, _, i.uc(27, I), i.uc(28, L), i.uc(29, O), i.uc(30, w), i.uc(31, A)),
                                ),
                                i.vc(43, F, i.vc(41, z, i.uc(40, P))),
                              ),
                            ),
                            i.vc(
                              96,
                              ie,
                              i.Dc(83, re, [
                                i.uc(51, R),
                                i.uc(52, V),
                                i.vc(
                                  72,
                                  Q,
                                  i.Dc(62, Y, [
                                    i.uc(53, N),
                                    i.uc(54, B),
                                    i.uc(55, j),
                                    i.uc(56, q),
                                    i.uc(57, G),
                                    i.uc(58, U),
                                    i.uc(59, K),
                                    i.uc(60, H),
                                    i.uc(61, X),
                                  ]),
                                ),
                                i.uc(74, W),
                                i.uc(75, J),
                                i.uc(76, Z),
                                i.uc(77, $),
                                i.uc(78, ee),
                                i.uc(79, ne),
                                i.uc(80, te),
                                i.uc(81, ae),
                                i.uc(82, ue),
                              ]),
                            ),
                            i.vc(
                              125,
                              Se,
                              i.Bc(
                                117,
                                be,
                                i.vc(
                                  109,
                                  ve,
                                  i.zc(103, _, i.uc(98, oe), i.uc(99, le), i.uc(100, ce), i.uc(101, me), i.uc(102, se)),
                                ),
                                i.uc(111, fe),
                                i.uc(112, he),
                                i.uc(113, de),
                                i.uc(114, pe),
                                i.uc(115, ye),
                                i.uc(116, ge),
                              ),
                            ),
                            i.vc(136, Ie, i.yc(131, D, i.uc(127, Te), i.uc(128, Ce), i.uc(129, De), i.uc(130, xe))),
                            i.vc(141, Oe, i.vc(139, z, i.uc(138, Le))),
                            i.vc(
                              160,
                              Re,
                              i.Cc(
                                151,
                                ke,
                                i.uc(143, we),
                                i.uc(144, Ae),
                                i.uc(145, _e),
                                i.uc(146, Ee),
                                i.uc(147, Pe),
                                i.uc(148, ze),
                                i.uc(149, Fe),
                                i.uc(150, Me),
                              ),
                            ),
                            i.vc(
                              287,
                              Yn,
                              i.Dc(257, Xn, [
                                i.uc(162, Ve),
                                i.uc(163, Ne),
                                i.uc(164, Be),
                                i.uc(165, je),
                                i.uc(166, qe),
                                i.uc(167, Ge),
                                i.uc(168, Ue),
                                i.uc(169, Ke),
                                i.uc(170, He),
                                i.uc(171, Xe),
                                i.uc(172, Ye),
                                i.uc(173, Qe),
                                i.uc(174, We),
                                i.uc(175, Je),
                                i.uc(176, Ze),
                                i.uc(177, $e),
                                i.uc(178, en),
                                i.uc(179, nn),
                                i.vc(
                                  245,
                                  kn,
                                  i.Dc(212, Mn, [
                                    i.uc(180, tn),
                                    i.uc(181, an),
                                    i.uc(182, un),
                                    i.uc(183, rn),
                                    i.uc(184, on),
                                    i.uc(185, ln),
                                    i.uc(186, cn),
                                    i.uc(187, mn),
                                    i.uc(188, sn),
                                    i.uc(189, vn),
                                    i.uc(190, fn),
                                    i.uc(191, hn),
                                    i.uc(192, dn),
                                    i.uc(193, pn),
                                    i.uc(194, yn),
                                    i.uc(195, gn),
                                    i.uc(196, bn),
                                    i.uc(197, Sn),
                                    i.uc(198, Tn),
                                    i.uc(199, Cn),
                                    i.uc(200, Dn),
                                    i.uc(201, xn),
                                    i.uc(202, In),
                                    i.uc(203, Ln),
                                    i.uc(204, On),
                                    i.uc(205, wn),
                                    i.uc(206, An),
                                    i.uc(207, _n),
                                    i.uc(208, En),
                                    i.uc(209, Pn),
                                    i.uc(210, zn),
                                    i.uc(211, Fn),
                                  ]),
                                ),
                                i.uc(247, Rn),
                                i.uc(248, Vn),
                                i.uc(249, Nn),
                                i.uc(250, Bn),
                                i.uc(251, jn),
                                i.uc(252, qn),
                                i.uc(253, Gn),
                                i.uc(254, Un),
                                i.uc(255, Kn),
                                i.uc(256, Hn),
                              ]),
                            ),
                            i.vc(
                              310,
                              it,
                              i.Dc(299, rt, [
                                i.uc(289, Qn),
                                i.uc(290, Wn),
                                i.uc(291, Jn),
                                i.uc(292, Zn),
                                i.uc(293, $n),
                                i.uc(294, et),
                                i.uc(295, nt),
                                i.uc(296, tt),
                                i.uc(297, at),
                                i.uc(298, ut),
                              ]),
                            ),
                            i.vc(
                              375,
                              Rt,
                              i.Dc(355, kt, [
                                i.uc(312, ot),
                                i.uc(313, lt),
                                i.uc(314, ct),
                                i.uc(315, mt),
                                i.uc(316, st),
                                i.uc(317, vt),
                                i.vc(323, pt, i.wc(320, dt, i.uc(318, ft), i.uc(319, ht))),
                                i.uc(325, yt),
                                i.uc(326, gt),
                                i.uc(327, bt),
                                i.vc(335, Dt, i.xc(331, M, i.uc(328, St), i.uc(329, Tt), i.uc(330, Ct))),
                                i.uc(337, xt),
                                i.uc(338, It),
                                i.vc(348, _t, i.yc(343, D, i.uc(339, Lt), i.uc(340, Ot), i.uc(341, wt), i.uc(342, At))),
                                i.uc(350, Et),
                                i.uc(351, Pt),
                                i.uc(352, zt),
                                i.uc(353, Ft),
                                i.uc(354, Mt),
                              ]),
                            ),
                            i.vc(
                              568,
                              du,
                              i.Bc(
                                560,
                                be,
                                i.vc(
                                  388,
                                  Gt,
                                  i.zc(
                                    382,
                                    _,
                                    i.uc(377, Vt),
                                    i.uc(378, Nt),
                                    i.uc(379, Bt),
                                    i.uc(380, jt),
                                    i.uc(381, qt),
                                  ),
                                ),
                                i.vc(
                                  413,
                                  ta,
                                  i.Dc(401, na, [
                                    i.uc(390, Ut),
                                    i.uc(391, Kt),
                                    i.uc(392, Ht),
                                    i.uc(393, Xt),
                                    i.uc(394, Yt),
                                    i.uc(395, Qt),
                                    i.uc(396, Wt),
                                    i.uc(397, Jt),
                                    i.uc(398, Zt),
                                    i.uc(399, $t),
                                    i.uc(400, ea),
                                  ]),
                                ),
                                i.vc(
                                  444,
                                  pa,
                                  i.Dc(434, Y, [
                                    i.uc(415, aa),
                                    i.uc(416, ua),
                                    i.uc(417, ra),
                                    i.uc(418, ia),
                                    i.uc(419, oa),
                                    i.vc(
                                      429,
                                      va,
                                      i.yc(424, D, i.uc(420, la), i.uc(421, ca), i.uc(422, ma), i.uc(423, sa)),
                                    ),
                                    i.uc(431, fa),
                                    i.uc(432, ha),
                                    i.uc(433, da),
                                  ]),
                                ),
                                i.vc(455, Ta, i.yc(450, D, i.uc(446, ya), i.uc(447, ga), i.uc(448, ba), i.uc(449, Sa))),
                                i.vc(464, Ia, i.xc(460, M, i.uc(457, Ca), i.uc(458, Da), i.uc(459, xa))),
                                i.vc(
                                  557,
                                  fu,
                                  i.Dc(545, na, [
                                    i.vc(473, Aa, i.xc(469, M, i.uc(466, La), i.uc(467, Oa), i.uc(468, wa))),
                                    i.vc(
                                      486,
                                      Ma,
                                      i.zc(
                                        480,
                                        _,
                                        i.uc(475, _a),
                                        i.uc(476, Ea),
                                        i.uc(477, Pa),
                                        i.uc(478, za),
                                        i.uc(479, Fa),
                                      ),
                                    ),
                                    i.vc(495, Na, i.xc(491, M, i.uc(488, ka), i.uc(489, Ra), i.uc(490, Va))),
                                    i.uc(497, Ba),
                                    i.vc(505, Ua, i.xc(501, M, i.uc(498, ja), i.uc(499, qa), i.uc(500, Ga))),
                                    i.vc(
                                      538,
                                      ou,
                                      i.Dc(522, iu, [
                                        i.uc(507, Ka),
                                        i.uc(508, Ha),
                                        i.uc(509, Xa),
                                        i.uc(510, Ya),
                                        i.uc(511, Qa),
                                        i.uc(512, Wa),
                                        i.uc(513, Ja),
                                        i.uc(514, Za),
                                        i.uc(515, $a),
                                        i.uc(516, eu),
                                        i.uc(517, nu),
                                        i.uc(518, tu),
                                        i.uc(519, au),
                                        i.uc(520, uu),
                                        i.uc(521, ru),
                                      ]),
                                    ),
                                    i.uc(540, lu),
                                    i.uc(541, cu),
                                    i.uc(542, mu),
                                    i.uc(543, su),
                                    i.uc(544, vu),
                                  ]),
                                ),
                                i.uc(559, hu),
                              ),
                            ),
                          ]),
                        ),
                      ),
                    )('initialTreeDepth', 2)('symbolSize', 10)('leaves', i.vc(588, bu, i.vc(586, gu, i.uc(585, yu))))(
                      'label',
                      i.vc(591, Su, i.uc(590, yu)),
                    ));
              },
              directives: [l.b, c.a, m.s, s.a, v.a, v.b, f.a, h.k, m.t, d.a],
              pipes: [m.b],
              styles: ['[_nghost-%COMP%]{width:100%}'],
              changeDetection: 0,
            })),
            e
          );
        })();
    },
    'dY1w': function(e, n, t) {
      'use strict';
      t.d(n, 'a', function() {
        return s;
      });
      var a = t('ofXK'),
        u = t('d3UM'),
        r = t('NFeN'),
        i = t('rDig'),
        o = t('Qk+/'),
        l = t('NEPT'),
        c = t('9TPg'),
        m = (t('THUg'), t('fXoL')),
        s = (function() {
          var e = function e() {
            _classCallCheck(this, e);
          };
          return (
            (e.ɵmod = m.Qb({ type: e })),
            (e.ɵinj = m.Pb({
              factory: function(n) {
                return new (n || e)();
              },
              imports: [[i.a, o.a, l.a, c.a, a.c, u.b, r.b]],
            })),
            e
          );
        })();
    },
    'f5Yq': function(e, n) {
      e.exports = function(e, n, t) {
        return {
          seriesType: e,
          performRawSeries: !0,
          reset: function(e, a, u) {
            var r = e.getData(),
              i = e.get('symbol') || n,
              o = e.get('symbolSize'),
              l = e.get('symbolKeepAspect');
            if (
              (r.setVisual({ legendSymbol: t || i, symbol: i, symbolSize: o, symbolKeepAspect: l }),
              !a.isSeriesFiltered(e))
            )
              return {
                dataEach:
                  r.hasItemOption || 'function' == typeof o
                    ? function(n, t) {
                        if ('function' == typeof o) {
                          var a = e.getRawValue(t),
                            u = e.getDataParams(t);
                          n.setItemVisual(t, 'symbolSize', o(a, u));
                        }
                        if (n.hasItemOption) {
                          var r = n.getItemModel(t),
                            i = r.getShallow('symbol', !0),
                            l = r.getShallow('symbolSize', !0),
                            c = r.getShallow('symbolKeepAspect', !0);
                          null != i && n.setItemVisual(t, 'symbol', i),
                            null != l && n.setItemVisual(t, 'symbolSize', l),
                            null != c && n.setItemVisual(t, 'symbolKeepAspect', c);
                        }
                      }
                    : null,
              };
          },
        };
      };
    },
    'x3X8': function(e, n, t) {
      var a = t('KxfA').retrieveRawValue;
      n.getDefaultLabel = function(e, n) {
        var t = e.mapDimension('defaultedLabel', !0),
          u = t.length;
        if (1 === u) return a(e, n, t[0]);
        if (u) {
          for (var r = [], i = 0; i < t.length; i++) {
            var o = a(e, n, t[i]);
            r.push(o);
          }
          return r.join(' ');
        }
      };
    },
  },
]);
