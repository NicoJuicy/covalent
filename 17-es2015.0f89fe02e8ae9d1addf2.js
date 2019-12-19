(window.webpackJsonp = window.webpackJsonp || []).push([
  [17],
  {
    '7Okg': function(e, n, t) {
      'use strict';
      t.d(n, 'a', function() {
        return i;
      });
      var a = t('fXoL'),
        u = t('rDig');
      const r = ['td-tree', ''];
      let i = (() => {
        class e extends u.c {
          constructor(e) {
            super('tree', e);
          }
          getConfig() {
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
          }
        }
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
            features: [a.Cb([{ provide: u.c, useExisting: Object(a.V)(() => e) }]), a.Ab],
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
      var a = t('ofXK'),
        u = (t('75ev'), t('7Okg'), t('fXoL'));
      let r = (() => {
        class e {}
        return (
          (e.ɵmod = u.Qb({ type: e })),
          (e.ɵinj = u.Pb({
            factory: function(n) {
              return new (n || e)();
            },
            imports: [[a.c]],
          })),
          e
        );
      })();
      t.d(n, 'a', function() {
        return r;
      });
    },
    'BGHn': function(e, n, t) {
      'use strict';
      t.d(n, 'b', function() {
        return o;
      }),
        t.d(n, 'a', function() {
          return c;
        });
      var a = t('fXoL'),
        u = t('rDig'),
        r = t('ofXK');
      const i = ['toolboxContent'];
      function l(e, n) {}
      let o = (() => {
          class e {}
          return (
            (e.ɵfac = function(n) {
              return new (n || e)();
            }),
            (e.ɵdir = a.Nb({ type: e, selectors: [['ng-template', 'tdViewDataFormatter', '']] })),
            e
          );
        })(),
        c = (() => {
          class e {
            constructor(e, n, t) {
              (this._changeDetectorRef = e),
                (this._elementRef = n),
                (this._optionsService = t),
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
            ngOnChanges() {
              this._setOptions();
            }
            ngOnDestroy() {
              this._removeOption();
            }
            _setOptions() {
              this._checkFormatterTemplate();
              const e = Object(u.d)(
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
            }
            _removeOption() {
              this._optionsService.clearOption('toolbox');
            }
            _checkFormatterTemplate() {
              this.formatterTemplate &&
                (this.feature = Object.assign(Object.assign({}, this.feature), {
                  dataView: Object.assign(Object.assign({}, this.feature.dataView), {
                    optionToContent: this._optionToContentFormatter(),
                  }),
                }));
            }
            _optionToContentFormatter() {
              return () => (this._changeDetectorRef.markForCheck(), this._elementRef.nativeElement.innerHTML);
            }
          }
          return (
            (e.ɵfac = function(n) {
              return new (n || e)(a.Sb(a.h), a.Sb(a.k), a.Sb(u.b));
            }),
            (e.ɵcmp = a.Mb({
              type: e,
              selectors: [['td-chart-toolbox']],
              contentQueries: function(e, n, t) {
                var u;
                1 & e && a.Kb(t, o, !0, a.M), 2 & e && a.Ec((u = a.hc())) && (n.formatterTemplate = u.first);
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
                1 & e && a.Rc(0, l, 0, 0, 'ng-template', 0, 1, a.Sc),
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
        l = t('x3X8').getDefaultLabel;
      function o(e, n, t) {
        r.Group.call(this), this.updateData(e, n, t);
      }
      var c = o.prototype,
        m = (o.getSymbolSize = function(e, n) {
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
          l = u(e, -1, -1, 2, 2, i, r);
        l.attr({ z2: 100, culling: !0, scale: s(a) }), (l.drift = v), (this._symbolType = e), this.add(l);
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
            l = a !== this._symbolType;
          if (l) {
            var o = e.getItemVisual(n, 'symbolKeepAspect');
            this._createSymbol(a, e, n, i, o);
          } else ((c = this.childAt(0)).silent = !1), r.updateProps(c, { scale: s(i) }, u, n);
          if ((this._updateCommon(e, n, i, t), l)) {
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
      function g() {
        !r.isInEmphasis(this) && y.call(this);
      }
      function b() {
        !r.isInEmphasis(this) && S.call(this);
      }
      function y() {
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
        var o = this.childAt(0),
          c = e.hostModel,
          m = e.getItemVisual(n, 'color');
        'image' !== o.type && o.useStyle({ strokeNoScale: !0 });
        var v = u && u.itemStyle,
          D = u && u.hoverItemStyle,
          T = u && u.symbolRotate,
          C = u && u.symbolOffset,
          x = u && u.labelModel,
          I = u && u.hoverLabelModel,
          L = u && u.hoverAnimation,
          A = u && u.cursorStyle;
        if (!u || e.hasItemOption) {
          var w = u && u.itemModel ? u.itemModel : e.getItemModel(n);
          (v = w.getModel(f).getItemStyle(['color'])),
            (D = w.getModel(h).getItemStyle()),
            (T = w.getShallow('symbolRotate')),
            (C = w.getShallow('symbolOffset')),
            (x = w.getModel(d)),
            (I = w.getModel(p)),
            (L = w.getShallow('hoverAnimation')),
            (A = w.getShallow('cursor'));
        } else D = a.extend({}, D);
        var O = o.style;
        o.attr('rotation', ((T || 0) * Math.PI) / 180 || 0),
          C && o.attr('position', [i(C[0], t[0]), i(C[1], t[1])]),
          A && o.attr('cursor', A),
          o.setColor(m, u && u.symbolInnerColor),
          o.setStyle(v);
        var E = e.getItemVisual(n, 'opacity');
        null != E && (O.opacity = E);
        var z = e.getItemVisual(n, 'liftZ'),
          F = o.__z2Origin;
        null != z
          ? null == F && ((o.__z2Origin = o.z2), (o.z2 += z))
          : null != F && ((o.z2 = F), (o.__z2Origin = null));
        var M = u && u.useNameLabel;
        r.setLabelStyle(O, D, x, I, {
          labelFetcher: c,
          labelDataIndex: n,
          defaultText: function(n, t) {
            return M ? e.getName(n) : l(e, n);
          },
          isRectText: !0,
          autoColor: m,
        }),
          o
            .off('mouseover')
            .off('mouseout')
            .off('emphasis')
            .off('normal'),
          (o.hoverStyle = D),
          r.setHoverStyle(o),
          (o.__symbolOriginalScale = s(t)),
          L &&
            c.isAnimationEnabled() &&
            o
              .on('mouseover', g)
              .on('mouseout', b)
              .on('emphasis', y)
              .on('normal', S);
      }),
        (c.fadeOut = function(e, n) {
          var t = this.childAt(0);
          (this.silent = t.silent = !0),
            (!n || !n.keepLabel) && (t.style.text = null),
            r.updateProps(t, { style: { opacity: 0 }, scale: [0, 0] }, this._seriesModel, this.dataIndex, e);
        }),
        a.inherits(o, r.Group),
        (e.exports = o);
    },
    'NEPT': function(e, n, t) {
      'use strict';
      var a = t('ofXK'),
        u = (t('sRwP'), t('BGHn'), t('fXoL'));
      let r = (() => {
        class e {}
        return (
          (e.ɵmod = u.Qb({ type: e })),
          (e.ɵinj = u.Pb({
            factory: function(n) {
              return new (n || e)();
            },
            imports: [[a.c]],
          })),
          e
        );
      })();
      t.d(n, 'a', function() {
        return r;
      });
    },
    'THUg': function(e, n, t) {
      'use strict';
      t.d(n, 'a', function() {
        return Du;
      });
      var a = t('mrSG'),
        u = t('ProS'),
        r = t('rDig'),
        i = t('fXoL'),
        l = t('MpVW'),
        o = t('kmnG'),
        c = t('d3UM'),
        m = t('ofXK'),
        s = t('cvES'),
        v = t('cpAi'),
        f = t('7Okg'),
        h = t('FKr1'),
        d = t('NFeN');
      function p(e, n) {
        if ((1 & e && (i.Yb(0, 'mat-option', 9), i.Tc(1), i.Wb()), 2 & e)) {
          const e = n.$implicit;
          i.qc('value', e), i.Db(1), i.Vc('\n        ', e, '\n      ');
        }
      }
      function g(e, n) {
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
          const e = i.kc().$implicit;
          i.Db(11), i.Uc(e.name);
        }
      }
      function b(e, n) {
        if ((1 & e && (i.Tc(0, '\n      '), i.Rc(1, g, 14, 1, 'ng-container', 10), i.Tc(2, '\n    ')), 2 & e)) {
          const e = n.$implicit;
          i.Db(1), i.qc('ngIf', e);
        }
      }
      const y = function() {
          return { name: 'AgglomerativeCluster', value: 3938 };
        },
        S = function() {
          return { name: 'CommunityStructure', value: 3812 };
        },
        D = function() {
          return { name: 'HierarchicalCluster', value: 6714 };
        },
        T = function() {
          return { name: 'MergeEdge', value: 743 };
        },
        C = function(e, n, t, a) {
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
        A = function() {
          return { name: 'MaxFlowMinCut', value: 7840 };
        },
        w = function() {
          return { name: 'ShortestPaths', value: 5914 };
        },
        O = function() {
          return { name: 'SpanningTree', value: 3416 };
        },
        E = function(e, n, t, a, u) {
          return [e, n, t, a, u];
        },
        z = function(e) {
          return { name: 'graph', children: e };
        },
        F = function() {
          return { name: 'AspectRatioBanker', value: 7074 };
        },
        M = function(e) {
          return [e];
        },
        P = function(e) {
          return { name: 'optimization', children: e };
        },
        R = function(e, n, t) {
          return [e, n, t];
        },
        _ = function(e) {
          return { name: 'analytics', collapsed: !0, children: e };
        },
        V = function() {
          return { name: 'Easing', value: 17010 };
        },
        k = function() {
          return { name: 'FunctionSequence', value: 5842 };
        },
        N = function() {
          return { name: 'ArrayInterpolator', value: 1983 };
        },
        B = function() {
          return { name: 'ColorInterpolator', value: 2047 };
        },
        q = function() {
          return { name: 'DateInterpolator', value: 1375 };
        },
        G = function() {
          return { name: 'Interpolator', value: 8746 };
        },
        U = function() {
          return { name: 'MatrixInterpolator', value: 2202 };
        },
        K = function() {
          return { name: 'NumberInterpolator', value: 1382 };
        },
        H = function() {
          return { name: 'ObjectInterpolator', value: 1629 };
        },
        j = function() {
          return { name: 'PointInterpolator', value: 1675 };
        },
        X = function() {
          return { name: 'RectangleInterpolator', value: 2042 };
        },
        Y = function(e, n, t, a, u, r, i, l, o) {
          return [e, n, t, a, u, r, i, l, o];
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
        re = function(e, n, t, a, u, r, i, l, o, c, m, s) {
          return [e, n, t, a, u, r, i, l, o, c, m, s];
        },
        ie = function(e) {
          return { name: 'animate', children: e };
        },
        le = function() {
          return { name: 'Converters', value: 721 };
        },
        oe = function() {
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
        ge = function() {
          return { name: 'DataTable', value: 772 };
        },
        be = function() {
          return { name: 'DataUtil', value: 3322 };
        },
        ye = function(e, n, t, a, u, r, i) {
          return [e, n, t, a, u, r, i];
        },
        Se = function(e) {
          return { name: 'data', collapsed: !0, children: e };
        },
        De = function() {
          return { name: 'DirtySprite', value: 8833 };
        },
        Te = function() {
          return { name: 'LineSprite', value: 1732 };
        },
        Ce = function() {
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
        Ae = function(e) {
          return { name: 'flex', collapsed: !0, children: e };
        },
        we = function() {
          return { name: 'DragForce', value: 1082 };
        },
        Oe = function() {
          return { name: 'GravityForce', value: 1336 };
        },
        Ee = function() {
          return { name: 'IForce', value: 319 };
        },
        ze = function() {
          return { name: 'NBodyForce', value: 10498 };
        },
        Fe = function() {
          return { name: 'Particle', value: 2822 };
        },
        Me = function() {
          return { name: 'Simulation', value: 9983 };
        },
        Pe = function() {
          return { name: 'Spring', value: 2213 };
        },
        Re = function() {
          return { name: 'SpringForce', value: 1681 };
        },
        _e = function(e, n, t, a, u, r, i, l) {
          return [e, n, t, a, u, r, i, l];
        },
        Ve = function(e) {
          return { name: 'physics', children: e };
        },
        ke = function() {
          return { name: 'AggregateExpression', value: 1616 };
        },
        Ne = function() {
          return { name: 'And', value: 1027 };
        },
        Be = function() {
          return { name: 'Arithmetic', value: 3891 };
        },
        qe = function() {
          return { name: 'Average', value: 891 };
        },
        Ge = function() {
          return { name: 'BinaryExpression', value: 2893 };
        },
        Ue = function() {
          return { name: 'Comparison', value: 5103 };
        },
        Ke = function() {
          return { name: 'CompositeExpression', value: 3677 };
        },
        He = function() {
          return { name: 'Count', value: 781 };
        },
        je = function() {
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
        ln = function() {
          return { name: 'distinct', value: 292 };
        },
        on = function() {
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
        gn = function() {
          return { name: 'max', value: 283 };
        },
        bn = function() {
          return { name: 'min', value: 283 };
        },
        yn = function() {
          return { name: 'mod', value: 591 };
        },
        Sn = function() {
          return { name: 'mul', value: 603 };
        },
        Dn = function() {
          return { name: 'neq', value: 599 };
        },
        Tn = function() {
          return { name: 'not', value: 386 };
        },
        Cn = function() {
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
        An = function() {
          return { name: 'stddev', value: 363 };
        },
        wn = function() {
          return { name: 'sub', value: 600 };
        },
        On = function() {
          return { name: 'sum', value: 280 };
        },
        En = function() {
          return { name: 'update', value: 307 };
        },
        zn = function() {
          return { name: 'variance', value: 335 };
        },
        Fn = function() {
          return { name: 'where', value: 299 };
        },
        Mn = function() {
          return { name: 'xor', value: 354 };
        },
        Pn = function() {
          return { name: '-', value: 264 };
        },
        Rn = function(e, n, t, a, u, r, i, l, o, c, m, s, v, f, h, d, p, g, b, y, S, D, T, C, x, I, L, A, w, O, E, z) {
          return [e, n, t, a, u, r, i, l, o, c, m, s, v, f, h, d, p, g, b, y, S, D, T, C, x, I, L, A, w, O, E, z];
        },
        _n = function(e) {
          return { name: 'methods', children: e };
        },
        Vn = function() {
          return { name: 'Minimum', value: 843 };
        },
        kn = function() {
          return { name: 'Not', value: 1554 };
        },
        Nn = function() {
          return { name: 'Or', value: 970 };
        },
        Bn = function() {
          return { name: 'Query', value: 13896 };
        },
        qn = function() {
          return { name: 'Range', value: 1594 };
        },
        Gn = function() {
          return { name: 'StringUtil', value: 4130 };
        },
        Un = function() {
          return { name: 'Sum', value: 791 };
        },
        Kn = function() {
          return { name: 'Variable', value: 1124 };
        },
        Hn = function() {
          return { name: 'Variance', value: 1876 };
        },
        jn = function() {
          return { name: 'Xor', value: 1101 };
        },
        Xn = function(e, n, t, a, u, r, i, l, o, c, m, s, v, f, h, d, p, g, b, y, S, D, T, C, x, I, L, A, w) {
          return [e, n, t, a, u, r, i, l, o, c, m, s, v, f, h, d, p, g, b, y, S, D, T, C, x, I, L, A, w];
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
        rt = function(e, n, t, a, u, r, i, l, o, c) {
          return [e, n, t, a, u, r, i, l, o, c];
        },
        it = function(e) {
          return { name: 'scale', children: e };
        },
        lt = function() {
          return { name: 'Arrays', value: 8258 };
        },
        ot = function() {
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
        gt = function() {
          return { name: 'IEvaluable', value: 335 };
        },
        bt = function() {
          return { name: 'IPredicate', value: 383 };
        },
        yt = function() {
          return { name: 'IValueProxy', value: 874 };
        },
        St = function() {
          return { name: 'DenseMatrix', value: 3165 };
        },
        Dt = function() {
          return { name: 'IMatrix', value: 2815 };
        },
        Tt = function() {
          return { name: 'SparseMatrix', value: 3366 };
        },
        Ct = function(e) {
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
        At = function() {
          return { name: 'Palette', value: 1229 };
        },
        wt = function() {
          return { name: 'ShapePalette', value: 2059 };
        },
        Ot = function() {
          return { name: 'SizePalette', value: 2291 };
        },
        Et = function(e) {
          return { name: 'palette', children: e };
        },
        zt = function() {
          return { name: 'Property', value: 5559 };
        },
        Ft = function() {
          return { name: 'Shapes', value: 19118 };
        },
        Mt = function() {
          return { name: 'Sort', value: 6887 };
        },
        Pt = function() {
          return { name: 'Stats', value: 6557 };
        },
        Rt = function() {
          return { name: 'Strings', value: 22026 };
        },
        _t = function(e, n, t, a, u, r, i, l, o, c, m, s, v, f, h, d, p, g, b) {
          return [e, n, t, a, u, r, i, l, o, c, m, s, v, f, h, d, p, g, b];
        },
        Vt = function(e) {
          return { name: 'util', collapsed: !0, children: e };
        },
        kt = function() {
          return { name: 'Axes', value: 1302 };
        },
        Nt = function() {
          return { name: 'Axis', value: 24593 };
        },
        Bt = function() {
          return { name: 'AxisGridLine', value: 652 };
        },
        qt = function() {
          return { name: 'AxisLabel', value: 636 };
        },
        Gt = function() {
          return { name: 'CartesianAxes', value: 6703 };
        },
        Ut = function(e) {
          return { name: 'axis', children: e };
        },
        Kt = function() {
          return { name: 'AnchorControl', value: 2138 };
        },
        Ht = function() {
          return { name: 'ClickControl', value: 3824 };
        },
        jt = function() {
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
        na = function(e, n, t, a, u, r, i, l, o, c, m) {
          return [e, n, t, a, u, r, i, l, o, c, m];
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
        la = function() {
          return { name: 'NodeSprite', value: 19382 };
        },
        oa = function() {
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
        ga = function() {
          return { name: 'DataEvent', value: 2313 };
        },
        ba = function() {
          return { name: 'SelectionEvent', value: 1880 };
        },
        ya = function() {
          return { name: 'TooltipEvent', value: 1701 };
        },
        Sa = function() {
          return { name: 'VisualizationEvent', value: 1117 };
        },
        Da = function(e) {
          return { name: 'events', children: e };
        },
        Ta = function() {
          return { name: 'Legend', value: 20859 };
        },
        Ca = function() {
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
        Aa = function() {
          return { name: 'Distortion', value: 6314 };
        },
        wa = function() {
          return { name: 'FisheyeDistortion', value: 3444 };
        },
        Oa = function(e) {
          return { name: 'distortion', children: e };
        },
        Ea = function() {
          return { name: 'ColorEncoder', value: 3179 };
        },
        za = function() {
          return { name: 'Encoder', value: 4060 };
        },
        Fa = function() {
          return { name: 'PropertyEncoder', value: 4138 };
        },
        Ma = function() {
          return { name: 'ShapeEncoder', value: 1690 };
        },
        Pa = function() {
          return { name: 'SizeEncoder', value: 1830 };
        },
        Ra = function(e) {
          return { name: 'encoder', children: e };
        },
        _a = function() {
          return { name: 'FisheyeTreeFilter', value: 5219 };
        },
        Va = function() {
          return { name: 'GraphDistanceFilter', value: 3165 };
        },
        ka = function() {
          return { name: 'VisibilityFilter', value: 3509 };
        },
        Na = function(e) {
          return { name: 'filter', children: e };
        },
        Ba = function() {
          return { name: 'IOperator', value: 1286 };
        },
        qa = function() {
          return { name: 'Labeler', value: 9956 };
        },
        Ga = function() {
          return { name: 'RadialLabeler', value: 3899 };
        },
        Ua = function() {
          return { name: 'StackedAreaLabeler', value: 3202 };
        },
        Ka = function(e) {
          return { name: 'label', children: e };
        },
        Ha = function() {
          return { name: 'AxisLayout', value: 6725 };
        },
        ja = function() {
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
        iu = function(e, n, t, a, u, r, i, l, o, c, m, s, v, f, h) {
          return [e, n, t, a, u, r, i, l, o, c, m, s, v, f, h];
        },
        lu = function(e) {
          return { name: 'layout', children: e };
        },
        ou = function() {
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
        gu = function() {
          return [2.5, 5];
        },
        bu = function(e) {
          return { padding: e, fontSize: 9, distance: 5, position: 'right' };
        },
        yu = function(e) {
          return { label: e };
        },
        Su = function(e) {
          return { padding: e, borderRadius: 10, fontSize: 9, distance: 5, position: 'left' };
        };
      let Du = (() => {
        class e {
          constructor(e, n) {
            (this._cdr = e),
              (this.themeSelector = n),
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
              u.util.each(this.data[0].children, (e, n) => n % 2 == 0 && (e.collapsed = !0));
          }
          ngOnInit() {
            return Object(a.a)(this, void 0, void 0, function*() {
              (this.selectedTheme = this.themeSelector.selected), this._cdr.markForCheck();
            });
          }
          selectChartTheme(e) {
            this.themeSelector.select(e);
          }
        }
        return (
          (e.ɵfac = function(n) {
            return new (n || e)(i.Sb(i.h), i.Sb(l.a));
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
                i.Rc(19, b, 3, 1, 'ng-template', 7),
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
                      M,
                      i.vc(
                        581,
                        pu,
                        i.Dc(570, rt, [
                          i.vc(
                            49,
                            _,
                            i.xc(
                              45,
                              R,
                              i.vc(25, x, i.yc(20, C, i.uc(16, y), i.uc(17, S), i.uc(18, D), i.uc(19, T))),
                              i.vc(38, z, i.zc(32, E, i.uc(27, I), i.uc(28, L), i.uc(29, A), i.uc(30, w), i.uc(31, O))),
                              i.vc(43, P, i.vc(41, M, i.uc(40, F))),
                            ),
                          ),
                          i.vc(
                            96,
                            ie,
                            i.Dc(83, re, [
                              i.uc(51, V),
                              i.uc(52, k),
                              i.vc(
                                72,
                                Q,
                                i.Dc(62, Y, [
                                  i.uc(53, N),
                                  i.uc(54, B),
                                  i.uc(55, q),
                                  i.uc(56, G),
                                  i.uc(57, U),
                                  i.uc(58, K),
                                  i.uc(59, H),
                                  i.uc(60, j),
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
                              ye,
                              i.vc(
                                109,
                                ve,
                                i.zc(103, E, i.uc(98, le), i.uc(99, oe), i.uc(100, ce), i.uc(101, me), i.uc(102, se)),
                              ),
                              i.uc(111, fe),
                              i.uc(112, he),
                              i.uc(113, de),
                              i.uc(114, pe),
                              i.uc(115, ge),
                              i.uc(116, be),
                            ),
                          ),
                          i.vc(136, Ie, i.yc(131, C, i.uc(127, De), i.uc(128, Te), i.uc(129, Ce), i.uc(130, xe))),
                          i.vc(141, Ae, i.vc(139, M, i.uc(138, Le))),
                          i.vc(
                            160,
                            Ve,
                            i.Cc(
                              151,
                              _e,
                              i.uc(143, we),
                              i.uc(144, Oe),
                              i.uc(145, Ee),
                              i.uc(146, ze),
                              i.uc(147, Fe),
                              i.uc(148, Me),
                              i.uc(149, Pe),
                              i.uc(150, Re),
                            ),
                          ),
                          i.vc(
                            287,
                            Yn,
                            i.Dc(257, Xn, [
                              i.uc(162, ke),
                              i.uc(163, Ne),
                              i.uc(164, Be),
                              i.uc(165, qe),
                              i.uc(166, Ge),
                              i.uc(167, Ue),
                              i.uc(168, Ke),
                              i.uc(169, He),
                              i.uc(170, je),
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
                                _n,
                                i.Dc(212, Rn, [
                                  i.uc(180, tn),
                                  i.uc(181, an),
                                  i.uc(182, un),
                                  i.uc(183, rn),
                                  i.uc(184, ln),
                                  i.uc(185, on),
                                  i.uc(186, cn),
                                  i.uc(187, mn),
                                  i.uc(188, sn),
                                  i.uc(189, vn),
                                  i.uc(190, fn),
                                  i.uc(191, hn),
                                  i.uc(192, dn),
                                  i.uc(193, pn),
                                  i.uc(194, gn),
                                  i.uc(195, bn),
                                  i.uc(196, yn),
                                  i.uc(197, Sn),
                                  i.uc(198, Dn),
                                  i.uc(199, Tn),
                                  i.uc(200, Cn),
                                  i.uc(201, xn),
                                  i.uc(202, In),
                                  i.uc(203, Ln),
                                  i.uc(204, An),
                                  i.uc(205, wn),
                                  i.uc(206, On),
                                  i.uc(207, En),
                                  i.uc(208, zn),
                                  i.uc(209, Fn),
                                  i.uc(210, Mn),
                                  i.uc(211, Pn),
                                ]),
                              ),
                              i.uc(247, Vn),
                              i.uc(248, kn),
                              i.uc(249, Nn),
                              i.uc(250, Bn),
                              i.uc(251, qn),
                              i.uc(252, Gn),
                              i.uc(253, Un),
                              i.uc(254, Kn),
                              i.uc(255, Hn),
                              i.uc(256, jn),
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
                            Vt,
                            i.Dc(355, _t, [
                              i.uc(312, lt),
                              i.uc(313, ot),
                              i.uc(314, ct),
                              i.uc(315, mt),
                              i.uc(316, st),
                              i.uc(317, vt),
                              i.vc(323, pt, i.wc(320, dt, i.uc(318, ft), i.uc(319, ht))),
                              i.uc(325, gt),
                              i.uc(326, bt),
                              i.uc(327, yt),
                              i.vc(335, Ct, i.xc(331, R, i.uc(328, St), i.uc(329, Dt), i.uc(330, Tt))),
                              i.uc(337, xt),
                              i.uc(338, It),
                              i.vc(348, Et, i.yc(343, C, i.uc(339, Lt), i.uc(340, At), i.uc(341, wt), i.uc(342, Ot))),
                              i.uc(350, zt),
                              i.uc(351, Ft),
                              i.uc(352, Mt),
                              i.uc(353, Pt),
                              i.uc(354, Rt),
                            ]),
                          ),
                          i.vc(
                            568,
                            du,
                            i.Bc(
                              560,
                              ye,
                              i.vc(
                                388,
                                Ut,
                                i.zc(382, E, i.uc(377, kt), i.uc(378, Nt), i.uc(379, Bt), i.uc(380, qt), i.uc(381, Gt)),
                              ),
                              i.vc(
                                413,
                                ta,
                                i.Dc(401, na, [
                                  i.uc(390, Kt),
                                  i.uc(391, Ht),
                                  i.uc(392, jt),
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
                                  i.uc(419, la),
                                  i.vc(
                                    429,
                                    va,
                                    i.yc(424, C, i.uc(420, oa), i.uc(421, ca), i.uc(422, ma), i.uc(423, sa)),
                                  ),
                                  i.uc(431, fa),
                                  i.uc(432, ha),
                                  i.uc(433, da),
                                ]),
                              ),
                              i.vc(455, Da, i.yc(450, C, i.uc(446, ga), i.uc(447, ba), i.uc(448, ya), i.uc(449, Sa))),
                              i.vc(464, Ia, i.xc(460, R, i.uc(457, Ta), i.uc(458, Ca), i.uc(459, xa))),
                              i.vc(
                                557,
                                fu,
                                i.Dc(545, na, [
                                  i.vc(473, Oa, i.xc(469, R, i.uc(466, La), i.uc(467, Aa), i.uc(468, wa))),
                                  i.vc(
                                    486,
                                    Ra,
                                    i.zc(
                                      480,
                                      E,
                                      i.uc(475, Ea),
                                      i.uc(476, za),
                                      i.uc(477, Fa),
                                      i.uc(478, Ma),
                                      i.uc(479, Pa),
                                    ),
                                  ),
                                  i.vc(495, Na, i.xc(491, R, i.uc(488, _a), i.uc(489, Va), i.uc(490, ka))),
                                  i.uc(497, Ba),
                                  i.vc(505, Ka, i.xc(501, R, i.uc(498, qa), i.uc(499, Ga), i.uc(500, Ua))),
                                  i.vc(
                                    538,
                                    lu,
                                    i.Dc(522, iu, [
                                      i.uc(507, Ha),
                                      i.uc(508, ja),
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
                                  i.uc(540, ou),
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
                  )('initialTreeDepth', 2)('symbolSize', 10)('leaves', i.vc(588, yu, i.vc(586, bu, i.uc(585, gu))))(
                    'label',
                    i.vc(591, Su, i.uc(590, gu)),
                  ));
            },
            directives: [o.b, c.a, m.s, s.a, v.a, v.b, f.a, h.k, m.t, d.a],
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
        l = t('Qk+/'),
        o = t('NEPT'),
        c = t('9TPg'),
        m = (t('THUg'), t('fXoL'));
      let s = (() => {
        class e {}
        return (
          (e.ɵmod = m.Qb({ type: e })),
          (e.ɵinj = m.Pb({
            factory: function(n) {
              return new (n || e)();
            },
            imports: [[i.a, l.a, o.a, c.a, a.c, u.b, r.b]],
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
              l = e.get('symbolSize'),
              o = e.get('symbolKeepAspect');
            if (
              (r.setVisual({ legendSymbol: t || i, symbol: i, symbolSize: l, symbolKeepAspect: o }),
              !a.isSeriesFiltered(e))
            )
              return {
                dataEach:
                  r.hasItemOption || 'function' == typeof l
                    ? function(n, t) {
                        if ('function' == typeof l) {
                          var a = e.getRawValue(t),
                            u = e.getDataParams(t);
                          n.setItemVisual(t, 'symbolSize', l(a, u));
                        }
                        if (n.hasItemOption) {
                          var r = n.getItemModel(t),
                            i = r.getShallow('symbol', !0),
                            o = r.getShallow('symbolSize', !0),
                            c = r.getShallow('symbolKeepAspect', !0);
                          null != i && n.setItemVisual(t, 'symbol', i),
                            null != o && n.setItemVisual(t, 'symbolSize', o),
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
            var l = a(e, n, t[i]);
            r.push(l);
          }
          return r.join(' ');
        }
      };
    },
  },
]);
