(window.webpackJsonp = window.webpackJsonp || []).push([
  [10],
  {
    '2uGb': function(e, t, o) {
      var i = o('ProS');
      o('ko1b'), o('s2lz'), o('RBEP');
      var r = o('kMLO'),
        n = o('nKiI');
      i.registerVisual(r), i.registerLayout(n);
    },
    '5s0K': function(e, t, o) {
      var i = o('bYtY');
      t.createWrap = function() {
        var e,
          t = [],
          o = {};
        return {
          add: function(e, r, n, a, l) {
            return (
              i.isString(a) && ((l = a), (a = 0)),
              !o[e.id] && ((o[e.id] = 1), t.push({ el: e, target: r, time: n, delay: a, easing: l }), !0)
            );
          },
          done: function(t) {
            return (e = t), this;
          },
          start: function() {
            for (var i = t.length, r = 0, n = t.length; r < n; r++) {
              var a = t[r];
              a.el.animateTo(a.target, a.time, a.delay, a.easing, l);
            }
            return this;
            function l() {
              --i || ((t.length = 0), (o = {}), e && e());
            }
          },
        };
      };
    },
    '9hCq': function(e, t, o) {
      var i = o('IwbS'),
        r = o('+TT/'),
        n = o('bYtY'),
        a = o('VaxA').wrapTreePathInfo,
        l = 5;
      function s(e) {
        (this.group = new i.Group()), e.add(this.group);
      }
      function u(e, t, o, i, r, n) {
        var a = [
          [r ? e : e - l, t],
          [e + o, t],
          [e + o, t + i],
          [r ? e : e - l, t + i],
        ];
        return !n && a.splice(2, 0, [e + o + l, t + i / 2]), !r && a.push([e, t + i / 2]), a;
      }
      function d(e, t, o) {
        e.eventData = {
          componentType: 'series',
          componentSubType: 'treemap',
          componentIndex: t.componentIndex,
          seriesIndex: t.componentIndex,
          seriesName: t.name,
          seriesType: 'treemap',
          selfType: 'breadcrumb',
          nodeData: { dataIndex: o && o.dataIndex, name: o && o.name },
          treePathInfo: o && a(o, t),
        };
      }
      (s.prototype = {
        constructor: s,
        render: function(e, t, o, i) {
          var n = e.getModel('breadcrumb'),
            a = this.group;
          if ((a.removeAll(), n.get('show') && o)) {
            var l = n.getModel('itemStyle'),
              s = l.getModel('textStyle'),
              u = {
                pos: { left: n.get('left'), right: n.get('right'), top: n.get('top'), bottom: n.get('bottom') },
                box: { width: t.getWidth(), height: t.getHeight() },
                emptyItemWidth: n.get('emptyItemWidth'),
                totalWidth: 0,
                renderList: [],
              };
            this._prepare(o, u, s), this._renderContent(e, u, l, s, i), r.positionElement(a, u.pos, u.box);
          }
        },
        _prepare: function(e, t, o) {
          for (var i = e; i; i = i.parentNode) {
            var r = i.getModel().get('name'),
              n = o.getTextRect(r),
              a = Math.max(n.width + 16, t.emptyItemWidth);
            (t.totalWidth += a + 8), t.renderList.push({ node: i, text: r, width: a });
          }
        },
        _renderContent: function(e, t, o, a, l) {
          for (
            var s = 0,
              h = t.emptyItemWidth,
              c = e.get('breadcrumb.height'),
              p = r.getAvailableSize(t.pos, t.box),
              f = t.totalWidth,
              g = t.renderList,
              v = g.length - 1;
            v >= 0;
            v--
          ) {
            var m = g[v],
              y = m.node,
              x = m.width,
              w = m.text;
            f > p.width && ((f -= x - h), (x = h), (w = null));
            var b = new i.Polygon({
              shape: { points: u(s, 0, x, c, v === g.length - 1, 0 === v) },
              style: n.defaults(o.getItemStyle(), {
                lineJoin: 'bevel',
                text: w,
                textFill: a.getTextColor(),
                textFont: a.getFont(),
              }),
              z: 10,
              onclick: n.curry(l, y),
            });
            this.group.add(b), d(b, e, y), (s += x + 8);
          }
        },
        remove: function() {
          this.group.removeAll();
        },
      }),
        (e.exports = s);
    },
    'RBEP': function(e, t, o) {
      for (
        var i = o('ProS'),
          r = o('VaxA'),
          n = function() {},
          a = ['treemapZoomToNode', 'treemapRender', 'treemapMove'],
          l = 0;
        l < a.length;
        l++
      )
        i.registerAction({ type: a[l], update: 'updateView' }, n);
      i.registerAction({ type: 'treemapRootToNode', update: 'updateView' }, function(e, t) {
        t.eachComponent({ mainType: 'series', subType: 'treemap', query: e }, function(t, o) {
          var i = r.retrieveTargetInfo(e, ['treemapZoomToNode', 'treemapRootToNode'], t);
          if (i) {
            var n = t.getViewRoot();
            n && (e.direction = r.aboveViewRoot(n, i.node) ? 'rollUp' : 'drillDown'), t.resetViewRoot(i.node);
          }
        });
      });
    },
    'VaxA': function(e, t, o) {
      var i = o('bYtY');
      function r(e) {
        for (var t = []; e; ) (e = e.parentNode) && t.push(e);
        return t.reverse();
      }
      (t.retrieveTargetInfo = function(e, t, o) {
        if (e && i.indexOf(t, e.type) >= 0) {
          var r = o.getData().tree.root,
            n = e.targetNode;
          if (('string' == typeof n && (n = r.getNodeById(n)), n && r.contains(n))) return { node: n };
          var a = e.targetNodeId;
          if (null != a && (n = r.getNodeById(a))) return { node: n };
        }
      }),
        (t.getPathToRoot = r),
        (t.aboveViewRoot = function(e, t) {
          var o = r(e);
          return i.indexOf(o, t) >= 0;
        }),
        (t.wrapTreePathInfo = function(e, t) {
          for (var o = []; e; ) {
            var i = e.dataIndex;
            o.push({ name: e.name, dataIndex: i, value: t.getRawValue(i) }), (e = e.parentNode);
          }
          return o.reverse(), o;
        });
    },
    'XxSj': function(e, t, o) {
      var i = o('bYtY'),
        r = o('Qe9p'),
        n = o('OELB').linearMap,
        a = i.each,
        l = i.isObject,
        s = -1,
        u = function(e) {
          var t = e.mappingMethod,
            o = e.type,
            r = (this.option = i.clone(e));
          (this.type = o), (this.mappingMethod = t), (this._normalizeData = w[t]);
          var n = d[o];
          (this.applyVisual = n.applyVisual),
            (this.getColorMapper = n.getColorMapper),
            (this._doMap = n._doMap[t]),
            'piecewise' === t
              ? (h(r),
                (function(e) {
                  var t = e.pieceList;
                  (e.hasSpecialVisual = !1),
                    i.each(t, function(t, o) {
                      (t.originIndex = o), null != t.visual && (e.hasSpecialVisual = !0);
                    });
                })(r))
              : 'category' === t
              ? r.categories
                ? (function(e) {
                    var t = e.categories,
                      o = e.visual,
                      r = (e.categoryMap = {});
                    if (
                      (a(t, function(e, t) {
                        r[e] = t;
                      }),
                      !i.isArray(o))
                    ) {
                      var n = [];
                      i.isObject(o)
                        ? a(o, function(e, t) {
                            var o = r[t];
                            n[null != o ? o : s] = e;
                          })
                        : (n[s] = o),
                        (o = x(e, n));
                    }
                    for (var l = t.length - 1; l >= 0; l--) null == o[l] && (delete r[t[l]], t.pop());
                  })(r)
                : h(r, !0)
              : (i.assert('linear' !== t || r.dataExtent), h(r));
        };
      u.prototype = {
        constructor: u,
        mapValueToVisual: function(e) {
          var t = this._normalizeData(e);
          return this._doMap(t, e);
        },
        getNormalizer: function() {
          return i.bind(this._normalizeData, this);
        },
      };
      var d = (u.visualHandlers = {
        color: {
          applyVisual: f('color'),
          getColorMapper: function() {
            var e = this.option;
            return i.bind(
              'category' === e.mappingMethod
                ? function(e, t) {
                    return !t && (e = this._normalizeData(e)), g.call(this, e);
                  }
                : function(t, o, i) {
                    var n = !!i;
                    return (
                      !o && (t = this._normalizeData(t)),
                      (i = r.fastLerp(t, e.parsedVisual, i)),
                      n ? i : r.stringify(i, 'rgba')
                    );
                  },
              this,
            );
          },
          _doMap: {
            linear: function(e) {
              return r.stringify(r.fastLerp(e, this.option.parsedVisual), 'rgba');
            },
            category: g,
            piecewise: function(e, t) {
              var o = y.call(this, t);
              return null == o && (o = r.stringify(r.fastLerp(e, this.option.parsedVisual), 'rgba')), o;
            },
            fixed: v,
          },
        },
        colorHue: c(function(e, t) {
          return r.modifyHSL(e, t);
        }),
        colorSaturation: c(function(e, t) {
          return r.modifyHSL(e, null, t);
        }),
        colorLightness: c(function(e, t) {
          return r.modifyHSL(e, null, null, t);
        }),
        colorAlpha: c(function(e, t) {
          return r.modifyAlpha(e, t);
        }),
        opacity: { applyVisual: f('opacity'), _doMap: m([0, 1]) },
        liftZ: { applyVisual: f('liftZ'), _doMap: { linear: v, category: v, piecewise: v, fixed: v } },
        symbol: {
          applyVisual: function(e, t, o) {
            var r = this.mapValueToVisual(e);
            if (i.isString(r)) o('symbol', r);
            else if (l(r)) for (var n in r) r.hasOwnProperty(n) && o(n, r[n]);
          },
          _doMap: {
            linear: p,
            category: g,
            piecewise: function(e, t) {
              var o = y.call(this, t);
              return null == o && (o = p.call(this, e)), o;
            },
            fixed: v,
          },
        },
        symbolSize: { applyVisual: f('symbolSize'), _doMap: m([0, 1]) },
      });
      function h(e, t) {
        var o = e.visual,
          r = [];
        i.isObject(o)
          ? a(o, function(e) {
              r.push(e);
            })
          : null != o && r.push(o),
          t || 1 !== r.length || { color: 1, symbol: 1 }.hasOwnProperty(e.type) || (r[1] = r[0]),
          x(e, r);
      }
      function c(e) {
        return {
          applyVisual: function(t, o, i) {
            (t = this.mapValueToVisual(t)), i('color', e(o('color'), t));
          },
          _doMap: m([0, 1]),
        };
      }
      function p(e) {
        var t = this.option.visual;
        return t[Math.round(n(e, [0, 1], [0, t.length - 1], !0))] || {};
      }
      function f(e) {
        return function(t, o, i) {
          i(e, this.mapValueToVisual(t));
        };
      }
      function g(e) {
        var t = this.option.visual;
        return t[this.option.loop && e !== s ? e % t.length : e];
      }
      function v() {
        return this.option.visual[0];
      }
      function m(e) {
        return {
          linear: function(t) {
            return n(t, e, this.option.visual, !0);
          },
          category: g,
          piecewise: function(t, o) {
            var i = y.call(this, o);
            return null == i && (i = n(t, e, this.option.visual, !0)), i;
          },
          fixed: v,
        };
      }
      function y(e) {
        var t = this.option,
          o = t.pieceList;
        if (t.hasSpecialVisual) {
          var i = o[u.findPieceIndex(e, o)];
          if (i && i.visual) return i.visual[this.type];
        }
      }
      function x(e, t) {
        return (
          (e.visual = t),
          'color' === e.type &&
            (e.parsedVisual = i.map(t, function(e) {
              return r.parse(e);
            })),
          t
        );
      }
      var w = {
        linear: function(e) {
          return n(e, this.option.dataExtent, [0, 1], !0);
        },
        piecewise: function(e) {
          var t = this.option.pieceList,
            o = u.findPieceIndex(e, t, !0);
          if (null != o) return n(o, [0, t.length - 1], [0, 1], !0);
        },
        category: function(e) {
          var t = this.option.categories ? this.option.categoryMap[e] : e;
          return null == t ? s : t;
        },
        fixed: i.noop,
      };
      function b(e, t, o) {
        return e ? t <= o : t < o;
      }
      (u.listVisualTypes = function() {
        var e = [];
        return (
          i.each(d, function(t, o) {
            e.push(o);
          }),
          e
        );
      }),
        (u.addVisualHandler = function(e, t) {
          d[e] = t;
        }),
        (u.isValidType = function(e) {
          return d.hasOwnProperty(e);
        }),
        (u.eachVisual = function(e, t, o) {
          i.isObject(e) ? i.each(e, t, o) : t.call(o, e);
        }),
        (u.mapVisual = function(e, t, o) {
          var r,
            n = i.isArray(e) ? [] : i.isObject(e) ? {} : ((r = !0), null);
          return (
            u.eachVisual(e, function(e, i) {
              var a = t.call(o, e, i);
              r ? (n = a) : (n[i] = a);
            }),
            n
          );
        }),
        (u.retrieveVisuals = function(e) {
          var t,
            o = {};
          return (
            e &&
              a(d, function(i, r) {
                e.hasOwnProperty(r) && ((o[r] = e[r]), (t = !0));
              }),
            t ? o : null
          );
        }),
        (u.prepareVisualTypes = function(e) {
          if (l(e)) {
            var t = [];
            a(e, function(e, o) {
              t.push(o);
            }),
              (e = t);
          } else {
            if (!i.isArray(e)) return [];
            e = e.slice();
          }
          return (
            e.sort(function(e, t) {
              return 'color' === t && 'color' !== e && 0 === e.indexOf('color') ? 1 : -1;
            }),
            e
          );
        }),
        (u.dependsOn = function(e, t) {
          return 'color' === t ? !(!e || 0 !== e.indexOf(t)) : e === t;
        }),
        (u.findPieceIndex = function(e, t, o) {
          for (var i, r = 1 / 0, n = 0, a = t.length; n < a; n++) {
            var l = t[n].value;
            if (null != l) {
              if (l === e || ('string' == typeof l && l === e + '')) return n;
              o && h(l, n);
            }
          }
          for (n = 0, a = t.length; n < a; n++) {
            var s = t[n],
              u = s.interval,
              d = s.close;
            if (u) {
              if (u[0] === -1 / 0) {
                if (b(d[1], e, u[1])) return n;
              } else if (u[1] === 1 / 0) {
                if (b(d[0], u[0], e)) return n;
              } else if (b(d[0], u[0], e) && b(d[1], e, u[1])) return n;
              o && h(u[0], n), o && h(u[1], n);
            }
          }
          if (o) return e === 1 / 0 ? t.length - 1 : e === -1 / 0 ? 0 : i;
          function h(t, o) {
            var n = Math.abs(t - e);
            n < r && ((r = n), (i = o));
          }
        }),
        (e.exports = u);
    },
    'kMLO': function(e, t, o) {
      var i = o('XxSj'),
        r = o('Qe9p'),
        n = o('bYtY'),
        a = n.isArray;
      function l(e) {
        var t = s(e, 'color');
        if (t) {
          var o = s(e, 'colorAlpha'),
            i = s(e, 'colorSaturation');
          return i && (t = r.modifyHSL(t, null, null, i)), o && (t = r.modifyAlpha(t, o)), t;
        }
      }
      function s(e, t) {
        var o = e[t];
        if (null != o && 'none' !== o) return o;
      }
      function u(e, t) {
        var o = e.get(t);
        return a(o) && o.length ? { name: t, range: o } : null;
      }
      e.exports = {
        seriesType: 'treemap',
        reset: function(e, t, o, a) {
          var s = e.getData().tree,
            d = s.root,
            h = e.getModel('itemStyle');
          d.isRemoved() ||
            (function e(t, o, a, s, d, h) {
              var c = t.getModel(),
                p = t.getLayout();
              if (p && !p.invisible && p.isInView) {
                var f,
                  g = t.getModel('itemStyle'),
                  v = (function(e, t, o, i) {
                    var r = n.extend({}, t);
                    return (
                      n.each(['color', 'colorAlpha', 'colorSaturation'], function(n) {
                        var a = e.get(n, !0);
                        null == a && o && (a = o[n]),
                          null == a && (a = t[n]),
                          null == a && (a = i.get(n)),
                          null != a && (r[n] = a);
                      }),
                      r
                    );
                  })(g, o, a[t.depth], s),
                  m = g.get('borderColor'),
                  y = g.get('borderColorSaturation');
                null != y &&
                  (m = (function(e, t) {
                    return null != t ? r.modifyHSL(t, null, null, e) : null;
                  })(y, (f = l(v)))),
                  t.setVisual('borderColor', m);
                var x = t.viewChildren;
                if (x && x.length) {
                  var w = (function(e, t, o, r, n, a) {
                    if (a && a.length) {
                      var l =
                        u(t, 'color') ||
                        (null != n.color && 'none' !== n.color && (u(t, 'colorAlpha') || u(t, 'colorSaturation')));
                      if (l) {
                        var s = t.get('visualMin'),
                          d = t.get('visualMax'),
                          h = o.dataExtent.slice();
                        null != s && s < h[0] && (h[0] = s), null != d && d > h[1] && (h[1] = d);
                        var c = t.get('colorMappingBy'),
                          p = { type: l.name, dataExtent: h, visual: l.range };
                        'color' !== p.type || ('index' !== c && 'id' !== c)
                          ? (p.mappingMethod = 'linear')
                          : ((p.mappingMethod = 'category'), (p.loop = !0));
                        var f = new i(p);
                        return (f.__drColorMappingBy = c), f;
                      }
                    }
                  })(0, c, p, 0, v, x);
                  n.each(x, function(t, o) {
                    if (t.depth >= d.length || t === d[t.depth]) {
                      var i = (function(e, t, o, i, r, a) {
                        var l = n.extend({}, t);
                        if (r) {
                          var s = r.type,
                            u = 'color' === s && r.__drColorMappingBy,
                            d =
                              'index' === u
                                ? i
                                : 'id' === u
                                ? a.mapIdToIndex(o.getId())
                                : o.getValue(e.get('visualDimension'));
                          l[s] = r.mapValueToVisual(d);
                        }
                        return l;
                      })(c, v, t, o, w, h);
                      e(t, i, a, s, d, h);
                    }
                  });
                } else (f = l(v)), t.setVisual('color', f);
              }
            })(
              d,
              {},
              n.map(s.levelModels, function(e) {
                return e ? e.get('itemStyle') : null;
              }),
              h,
              e.getViewRoot().getAncestors(),
              e,
            );
        },
      };
    },
    'ko1b': function(e, t, o) {
      var i = o('bYtY'),
        r = o('T4UG'),
        n = o('Bsck'),
        a = o('Qxkt'),
        l = o('7aKB'),
        s = l.encodeHTML,
        u = l.addCommas,
        d = o('VaxA').wrapTreePathInfo,
        h = r.extend({
          type: 'series.treemap',
          layoutMode: 'box',
          dependencies: ['grid', 'polar'],
          _viewRoot: null,
          defaultOption: {
            progressive: 0,
            hoverLayerThreshold: 1 / 0,
            left: 'center',
            top: 'middle',
            right: null,
            bottom: null,
            width: '80%',
            height: '80%',
            sort: !0,
            clipWindow: 'origin',
            squareRatio: 0.5 * (1 + Math.sqrt(5)),
            leafDepth: null,
            drillDownIcon: '\u25b6',
            zoomToNodeRatio: 0.1024,
            roam: !0,
            nodeClick: 'zoomToNode',
            animation: !0,
            animationDurationUpdate: 900,
            animationEasing: 'quinticInOut',
            breadcrumb: {
              show: !0,
              height: 22,
              left: 'center',
              top: 'bottom',
              emptyItemWidth: 25,
              itemStyle: {
                color: 'rgba(0,0,0,0.7)',
                borderColor: 'rgba(255,255,255,0.7)',
                borderWidth: 1,
                shadowColor: 'rgba(150,150,150,1)',
                shadowBlur: 3,
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                textStyle: { color: '#fff' },
              },
              emphasis: { textStyle: {} },
            },
            label: { show: !0, distance: 0, padding: 5, position: 'inside', color: '#fff', ellipsis: !0 },
            upperLabel: {
              show: !1,
              position: [0, '50%'],
              height: 20,
              color: '#fff',
              ellipsis: !0,
              verticalAlign: 'middle',
            },
            itemStyle: {
              color: null,
              colorAlpha: null,
              colorSaturation: null,
              borderWidth: 0,
              gapWidth: 0,
              borderColor: '#fff',
              borderColorSaturation: null,
            },
            emphasis: {
              upperLabel: { show: !0, position: [0, '50%'], color: '#fff', ellipsis: !0, verticalAlign: 'middle' },
            },
            visualDimension: 0,
            visualMin: null,
            visualMax: null,
            color: [],
            colorAlpha: null,
            colorSaturation: null,
            colorMappingBy: 'index',
            visibleMin: 10,
            childrenVisibleMin: null,
            levels: [],
          },
          getInitialData: function(e, t) {
            var o = { name: e.name, children: e.data };
            !(function e(t) {
              var o = 0;
              i.each(t.children, function(t) {
                e(t);
                var r = t.value;
                i.isArray(r) && (r = r[0]), (o += r);
              });
              var r = t.value;
              i.isArray(r) && (r = r[0]),
                (null == r || isNaN(r)) && (r = o),
                r < 0 && (r = 0),
                i.isArray(t.value) ? (t.value[0] = r) : (t.value = r);
            })(o);
            var r = e.levels || [];
            r = e.levels = (function(e, t) {
              var o,
                r = t.get('color');
              if (r)
                return (
                  i.each((e = e || []), function(e) {
                    var t = new a(e),
                      i = t.get('color');
                    (t.get('itemStyle.color') || (i && 'none' !== i)) && (o = !0);
                  }),
                  o || ((e[0] || (e[0] = {})).color = r.slice()),
                  e
                );
            })(r, t);
            var l = {};
            return (l.levels = r), n.createTree(o, this, l).data;
          },
          optionUpdated: function() {
            this.resetViewRoot();
          },
          formatTooltip: function(e) {
            var t = this.getData(),
              o = this.getRawValue(e),
              r = i.isArray(o) ? u(o[0]) : u(o),
              n = t.getName(e);
            return s(n + ': ' + r);
          },
          getDataParams: function(e) {
            var t = r.prototype.getDataParams.apply(this, arguments),
              o = this.getData().tree.getNodeByDataIndex(e);
            return (t.treePathInfo = d(o, this)), t;
          },
          setLayoutInfo: function(e) {
            (this.layoutInfo = this.layoutInfo || {}), i.extend(this.layoutInfo, e);
          },
          mapIdToIndex: function(e) {
            var t = this._idIndexMap;
            t || ((t = this._idIndexMap = i.createHashMap()), (this._idIndexMapCount = 0));
            var o = t.get(e);
            return null == o && t.set(e, (o = this._idIndexMapCount++)), o;
          },
          getViewRoot: function() {
            return this._viewRoot;
          },
          resetViewRoot: function(e) {
            e ? (this._viewRoot = e) : (e = this._viewRoot);
            var t = this.getRawData().tree.root;
            (e && (e === t || t.contains(e))) || (this._viewRoot = t);
          },
        });
      e.exports = h;
    },
    'nKiI': function(e, t, o) {
      var i = o('bYtY'),
        r = o('mFDi'),
        n = o('OELB'),
        a = n.parsePercent,
        l = n.MAX_SAFE_INTEGER,
        s = o('+TT/'),
        u = o('VaxA'),
        d = Math.max,
        h = Math.min,
        c = i.retrieve,
        p = i.each,
        f = ['itemStyle', 'borderWidth'],
        g = ['itemStyle', 'gapWidth'],
        v = ['upperLabel', 'show'],
        m = ['upperLabel', 'height'];
      function y(e, t, o) {
        for (var i, r = 0, n = 1 / 0, a = 0, l = e.length; a < l; a++)
          (i = e[a].getLayout().area) && (i < n && (n = i), i > r && (r = i));
        var s = e.area * e.area,
          u = t * t * o;
        return s ? d((u * r) / s, s / (u * n)) : 1 / 0;
      }
      function x(e, t, o, i, r) {
        var n = t === o.width ? 0 : 1,
          a = 1 - n,
          l = ['x', 'y'],
          s = ['width', 'height'],
          u = o[l[n]],
          c = t ? e.area / t : 0;
        (r || c > o[s[a]]) && (c = o[s[a]]);
        for (var p = 0, f = e.length; p < f; p++) {
          var g = e[p],
            v = {},
            m = c ? g.getLayout().area / c : 0,
            y = (v[s[a]] = d(c - 2 * i, 0)),
            x = o[l[n]] + o[s[n]] - u,
            w = p === f - 1 || x < m ? x : m,
            b = (v[s[n]] = d(w - 2 * i, 0));
          (v[l[a]] = o[l[a]] + h(i, y / 2)), (v[l[n]] = u + h(i, b / 2)), (u += w), g.setLayout(v, !0);
        }
        (o[l[a]] += c), (o[s[a]] -= c);
      }
      function w(e) {
        return e.get(v) ? e.get(m) : 0;
      }
      e.exports = {
        seriesType: 'treemap',
        reset: function(e, t, o, n) {
          var v = o.getWidth(),
            m = o.getHeight(),
            b = e.option,
            _ = s.getLayoutRect(e.getBoxLayoutParams(), { width: o.getWidth(), height: o.getHeight() }),
            M = b.size || [],
            I = a(c(_.width, M[0]), v),
            V = a(c(_.height, M[1]), m),
            T = n && n.type,
            R = u.retrieveTargetInfo(n, ['treemapZoomToNode', 'treemapRootToNode'], e),
            L = 'treemapRender' === T || 'treemapMove' === T ? n.rootRect : null,
            N = e.getViewRoot(),
            S = u.getPathToRoot(N);
          if ('treemapMove' !== T) {
            var C =
                'treemapZoomToNode' === T
                  ? (function(e, t, o, i, r) {
                      var n,
                        a = (t || {}).node,
                        s = [i, r];
                      if (!a || a === o) return s;
                      for (var u = i * r, d = u * e.option.zoomToNodeRatio; (n = a.parentNode); ) {
                        for (var h = 0, c = n.children, p = 0, g = c.length; p < g; p++) h += c[p].getValue();
                        var v = a.getValue();
                        if (0 === v) return s;
                        d *= h / v;
                        var m = n.getModel(),
                          y = m.get(f);
                        (d += 4 * y * y + (3 * y + Math.max(y, w(m))) * Math.pow(d, 0.5)) > l && (d = l), (a = n);
                      }
                      d < u && (d = u);
                      var x = Math.pow(d / u, 0.5);
                      return [i * x, r * x];
                    })(e, R, N, I, V)
                  : L
                  ? [L.width, L.height]
                  : [I, V],
              A = b.sort;
            A && 'asc' !== A && 'desc' !== A && (A = 'desc');
            var D = { squareRatio: b.squareRatio, sort: A, leafDepth: b.leafDepth };
            N.hostTree.clearLayouts(),
              N.setLayout({ x: 0, y: 0, width: C[0], height: C[1], area: C[0] * C[1] }),
              (function e(t, o, r, n) {
                var a, l;
                if (!t.isRemoved()) {
                  var s = t.getLayout();
                  (a = s.width), (l = s.height);
                  var u = t.getModel(),
                    c = u.get(f),
                    v = u.get(g) / 2,
                    m = w(u),
                    b = Math.max(c, m),
                    _ = c - v,
                    M = b - v;
                  (u = t.getModel()), t.setLayout({ borderWidth: c, upperHeight: b, upperLabelHeight: m }, !0);
                  var I = (a = d(a - 2 * _, 0)) * (l = d(l - _ - M, 0)),
                    V = (function(e, t, o, r, n, a) {
                      var l = e.children || [],
                        s = r.sort;
                      'asc' !== s && 'desc' !== s && (s = null);
                      var u = null != r.leafDepth && r.leafDepth <= a;
                      if (n && !u) return (e.viewChildren = []);
                      !(function(e, t) {
                        t &&
                          e.sort(function(e, o) {
                            var i = 'asc' === t ? e.getValue() - o.getValue() : o.getValue() - e.getValue();
                            return 0 === i ? ('asc' === t ? e.dataIndex - o.dataIndex : o.dataIndex - e.dataIndex) : i;
                          });
                      })(
                        (l = i.filter(l, function(e) {
                          return !e.isRemoved();
                        })),
                        s,
                      );
                      var d = (function(e, t, o) {
                        for (var i = 0, r = 0, n = t.length; r < n; r++) i += t[r].getValue();
                        var a = e.get('visualDimension');
                        if (t && t.length)
                          if ('value' === a && o)
                            (l = [t[t.length - 1].getValue(), t[0].getValue()]), 'asc' === o && l.reverse();
                          else {
                            var l = [1 / 0, -1 / 0];
                            p(t, function(e) {
                              var t = e.getValue(a);
                              t < l[0] && (l[0] = t), t > l[1] && (l[1] = t);
                            });
                          }
                        else l = [NaN, NaN];
                        return { sum: i, dataExtent: l };
                      })(t, l, s);
                      if (0 === d.sum) return (e.viewChildren = []);
                      if (
                        ((d.sum = (function(e, t, o, i, r) {
                          if (!i) return o;
                          for (var n = e.get('visibleMin'), a = r.length, l = a, s = a - 1; s >= 0; s--) {
                            var u = r['asc' === i ? a - s - 1 : s].getValue();
                            (u / o) * t < n && ((l = s), (o -= u));
                          }
                          return r.splice('asc' === i ? 0 : l, a - l), o;
                        })(t, o, d.sum, s, l)),
                        0 === d.sum)
                      )
                        return (e.viewChildren = []);
                      for (var h = 0, c = l.length; h < c; h++) {
                        var f = (l[h].getValue() / d.sum) * o;
                        l[h].setLayout({ area: f });
                      }
                      return (
                        u && (l.length && e.setLayout({ isLeafRoot: !0 }, !0), (l.length = 0)),
                        (e.viewChildren = l),
                        e.setLayout({ dataExtent: d.dataExtent }, !0),
                        l
                      );
                    })(t, u, I, o, r, n);
                  if (V.length) {
                    var T = { x: _, y: M, width: a, height: l },
                      R = h(a, l),
                      L = 1 / 0,
                      N = [];
                    N.area = 0;
                    for (var S = 0, C = V.length; S < C; ) {
                      var A = V[S];
                      N.push(A), (N.area += A.getLayout().area);
                      var D = y(N, R, o.squareRatio);
                      D <= L
                        ? (S++, (L = D))
                        : ((N.area -= N.pop().getLayout().area),
                          x(N, R, T, v, !1),
                          (R = h(T.width, T.height)),
                          (N.length = N.area = 0),
                          (L = 1 / 0));
                    }
                    if ((N.length && x(N, R, T, v, !0), !r)) {
                      var W = u.get('childrenVisibleMin');
                      null != W && I < W && (r = !0);
                    }
                    for (S = 0, C = V.length; S < C; S++) e(V[S], o, r, n + 1);
                  }
                }
              })(N, D, !1, 0);
            var W = N.getLayout();
            p(S, function(e, t) {
              var o = (S[t + 1] || N).getValue();
              e.setLayout(i.extend({ dataExtent: [o, o], borderWidth: 0, upperHeight: 0 }, W));
            });
          }
          var k = e.getData().tree.root;
          k.setLayout(
            (function(e, t, o) {
              if (t) return { x: t.x, y: t.y };
              var i = { x: 0, y: 0 };
              if (!o) return i;
              var r = o.node,
                n = r.getLayout();
              if (!n) return i;
              for (var a = [n.width / 2, n.height / 2], l = r; l; ) {
                var s = l.getLayout();
                (a[0] += s.x), (a[1] += s.y), (l = l.parentNode);
              }
              return { x: e.width / 2 - a[0], y: e.height / 2 - a[1] };
            })(_, L, R),
            !0,
          ),
            e.setLayoutInfo(_),
            (function e(t, o, i, n, a) {
              var l = t.getLayout(),
                s = i[a],
                u = s && s === t;
              if (!((s && !u) || (a === i.length && t !== n))) {
                t.setLayout({ isInView: !0, invisible: !u && !o.intersect(l), isAboveViewRoot: u }, !0);
                var d = new r(o.x - l.x, o.y - l.y, o.width, o.height);
                p(t.viewChildren || [], function(t) {
                  e(t, d, i, n, a + 1);
                });
              }
            })(k, new r(-_.x, -_.y, v, m), S, N, 0);
        },
      };
    },
    's2lz': function(e, t, o) {
      var i = o('ProS'),
        r = o('bYtY'),
        n = o('IwbS'),
        a = o('gPAo'),
        l = o('VaxA'),
        s = o('9hCq'),
        u = o('SgGq'),
        d = o('mFDi'),
        h = o('Fofx'),
        c = o('5s0K'),
        p = o('KCsZ'),
        f = r.bind,
        g = n.Group,
        v = n.Rect,
        m = r.each,
        y = ['label'],
        x = ['emphasis', 'label'],
        w = ['upperLabel'],
        b = ['emphasis', 'upperLabel'],
        _ = 10,
        M = 1,
        I = 2,
        V = p([
          ['fill', 'color'],
          ['stroke', 'strokeColor'],
          ['lineWidth', 'strokeWidth'],
          ['shadowBlur'],
          ['shadowOffsetX'],
          ['shadowOffsetY'],
          ['shadowColor'],
        ]),
        T = function(e) {
          var t = V(e);
          return (t.stroke = t.fill = t.lineWidth = null), t;
        },
        R = i.extendChartView({
          type: 'treemap',
          init: function(e, t) {
            (this._storage = { nodeGroup: [], background: [], content: [] }), (this._state = 'ready');
          },
          render: function(e, t, o, i) {
            var n = t.findComponents({ mainType: 'series', subType: 'treemap', query: i });
            if (!(r.indexOf(n, e) < 0)) {
              (this.seriesModel = e), (this.api = o), (this.ecModel = t);
              var a = l.retrieveTargetInfo(i, ['treemapZoomToNode', 'treemapRootToNode'], e),
                s = i && i.type,
                u = e.layoutInfo,
                d = !this._oldTree,
                h = this._storage,
                c =
                  'treemapRootToNode' === s && a && h
                    ? { rootNodeGroup: h.nodeGroup[a.node.getRawIndex()], direction: i.direction }
                    : null,
                p = this._giveContainerGroup(u),
                f = this._doRender(p, e, c);
              d || (s && 'treemapZoomToNode' !== s && 'treemapRootToNode' !== s)
                ? f.renderFinally()
                : this._doAnimation(p, f, e, c),
                this._resetController(o),
                this._renderBreadcrumb(e, o, a);
            }
          },
          _giveContainerGroup: function(e) {
            var t = this._containerGroup;
            return (
              t || ((t = this._containerGroup = new g()), this._initEvents(t), this.group.add(t)),
              t.attr('position', [e.x, e.y]),
              t
            );
          },
          _doRender: function(e, t, o) {
            var i = t.getData().tree,
              n = this._oldTree,
              l = { nodeGroup: [], background: [], content: [] },
              s = { nodeGroup: [], background: [], content: [] },
              u = this._storage,
              d = [],
              h = r.curry(L, t, s, u, o, l, d);
            !(function e(t, o, i, n, l) {
              function s(e) {
                return e.getId();
              }
              function u(r, a) {
                var s = null != r ? t[r] : null,
                  u = null != a ? o[a] : null,
                  d = h(s, u, i, l);
                d && e((s && s.viewChildren) || [], (u && u.viewChildren) || [], d, n, l + 1);
              }
              n
                ? ((o = t),
                  m(t, function(e, t) {
                    !e.isRemoved() && u(t, t);
                  }))
                : new a(o, t, s, s)
                    .add(u)
                    .update(u)
                    .remove(r.curry(u, null))
                    .execute();
            })(i.root ? [i.root] : [], n && n.root ? [n.root] : [], e, i === n || !n, 0);
            var c = (function(e) {
              var t = { nodeGroup: [], background: [], content: [] };
              return (
                e &&
                  m(e, function(e, o) {
                    var i = t[o];
                    m(e, function(e) {
                      e && (i.push(e), (e.__tmWillDelete = 1));
                    });
                  }),
                t
              );
            })(u);
            return (
              (this._oldTree = i),
              (this._storage = s),
              {
                lastsForAnimation: l,
                willDeleteEls: c,
                renderFinally: function() {
                  m(c, function(e) {
                    m(e, function(e) {
                      e.parent && e.parent.remove(e);
                    });
                  }),
                    m(d, function(e) {
                      (e.invisible = !0), e.dirty();
                    });
                },
              }
            );
          },
          _doAnimation: function(e, t, o, i) {
            if (o.get('animation')) {
              var n = o.get('animationDurationUpdate'),
                a = o.get('animationEasing'),
                l = c.createWrap();
              m(t.willDeleteEls, function(e, t) {
                m(e, function(e, o) {
                  if (!e.invisible) {
                    var r,
                      s = e.parent;
                    if (i && 'drillDown' === i.direction)
                      r =
                        s === i.rootNodeGroup
                          ? {
                              shape: { x: 0, y: 0, width: s.__tmNodeWidth, height: s.__tmNodeHeight },
                              style: { opacity: 0 },
                            }
                          : { style: { opacity: 0 } };
                    else {
                      var u = 0,
                        d = 0;
                      s.__tmWillDelete || ((u = s.__tmNodeWidth / 2), (d = s.__tmNodeHeight / 2)),
                        (r =
                          'nodeGroup' === t
                            ? { position: [u, d], style: { opacity: 0 } }
                            : { shape: { x: u, y: d, width: 0, height: 0 }, style: { opacity: 0 } });
                    }
                    r && l.add(e, r, n, a);
                  }
                });
              }),
                m(
                  this._storage,
                  function(e, o) {
                    m(e, function(e, i) {
                      var s = t.lastsForAnimation[o][i],
                        u = {};
                      s &&
                        ('nodeGroup' === o
                          ? s.old && ((u.position = e.position.slice()), e.attr('position', s.old))
                          : (s.old && ((u.shape = r.extend({}, e.shape)), e.setShape(s.old)),
                            s.fadein
                              ? (e.setStyle('opacity', 0), (u.style = { opacity: 1 }))
                              : 1 !== e.style.opacity && (u.style = { opacity: 1 })),
                        l.add(e, u, n, a));
                    });
                  },
                  this,
                ),
                (this._state = 'animating'),
                l
                  .done(
                    f(function() {
                      (this._state = 'ready'), t.renderFinally();
                    }, this),
                  )
                  .start();
            }
          },
          _resetController: function(e) {
            var t = this._controller;
            t ||
              ((t = this._controller = new u(e.getZr())).enable(this.seriesModel.get('roam')),
              t.on('pan', f(this._onPan, this)),
              t.on('zoom', f(this._onZoom, this)));
            var o = new d(0, 0, e.getWidth(), e.getHeight());
            t.setPointerChecker(function(e, t, i) {
              return o.contain(t, i);
            });
          },
          _clearController: function() {
            var e = this._controller;
            e && (e.dispose(), (e = null));
          },
          _onPan: function(e) {
            if ('animating' !== this._state && (Math.abs(e.dx) > 3 || Math.abs(e.dy) > 3)) {
              var t = this.seriesModel.getData().tree.root;
              if (!t) return;
              var o = t.getLayout();
              if (!o) return;
              this.api.dispatchAction({
                type: 'treemapMove',
                from: this.uid,
                seriesId: this.seriesModel.id,
                rootRect: { x: o.x + e.dx, y: o.y + e.dy, width: o.width, height: o.height },
              });
            }
          },
          _onZoom: function(e) {
            var t = e.originX,
              o = e.originY;
            if ('animating' !== this._state) {
              var i = this.seriesModel.getData().tree.root;
              if (!i) return;
              var r = i.getLayout();
              if (!r) return;
              var n = new d(r.x, r.y, r.width, r.height),
                a = this.seriesModel.layoutInfo;
              (t -= a.x), (o -= a.y);
              var l = h.create();
              h.translate(l, l, [-t, -o]),
                h.scale(l, l, [e.scale, e.scale]),
                h.translate(l, l, [t, o]),
                n.applyTransform(l),
                this.api.dispatchAction({
                  type: 'treemapRender',
                  from: this.uid,
                  seriesId: this.seriesModel.id,
                  rootRect: { x: n.x, y: n.y, width: n.width, height: n.height },
                });
            }
          },
          _initEvents: function(e) {
            e.on(
              'click',
              function(e) {
                if ('ready' === this._state) {
                  var t = this.seriesModel.get('nodeClick', !0);
                  if (t) {
                    var o = this.findTarget(e.offsetX, e.offsetY);
                    if (o) {
                      var i = o.node;
                      if (i.getLayout().isLeafRoot) this._rootToNode(o);
                      else if ('zoomToNode' === t) this._zoomToNode(o);
                      else if ('link' === t) {
                        var r = i.hostTree.data.getItemModel(i.dataIndex),
                          n = r.get('link', !0),
                          a = r.get('target', !0) || 'blank';
                        n && window.open(n, a);
                      }
                    }
                  }
                }
              },
              this,
            );
          },
          _renderBreadcrumb: function(e, t, o) {
            o ||
              (o =
                null != e.get('leafDepth', !0)
                  ? { node: e.getViewRoot() }
                  : this.findTarget(t.getWidth() / 2, t.getHeight() / 2)) ||
              (o = { node: e.getData().tree.root }),
              (this._breadcrumb || (this._breadcrumb = new s(this.group))).render(
                e,
                t,
                o.node,
                f(function(t) {
                  'animating' !== this._state &&
                    (l.aboveViewRoot(e.getViewRoot(), t)
                      ? this._rootToNode({ node: t })
                      : this._zoomToNode({ node: t }));
                }, this),
              );
          },
          remove: function() {
            this._clearController(),
              this._containerGroup && this._containerGroup.removeAll(),
              (this._storage = { nodeGroup: [], background: [], content: [] }),
              (this._state = 'ready'),
              this._breadcrumb && this._breadcrumb.remove();
          },
          dispose: function() {
            this._clearController();
          },
          _zoomToNode: function(e) {
            this.api.dispatchAction({
              type: 'treemapZoomToNode',
              from: this.uid,
              seriesId: this.seriesModel.id,
              targetNode: e.node,
            });
          },
          _rootToNode: function(e) {
            this.api.dispatchAction({
              type: 'treemapRootToNode',
              from: this.uid,
              seriesId: this.seriesModel.id,
              targetNode: e.node,
            });
          },
          findTarget: function(e, t) {
            var o;
            return (
              this.seriesModel.getViewRoot().eachNode(
                { attr: 'viewChildren', order: 'preorder' },
                function(i) {
                  var r = this._storage.background[i.getRawIndex()];
                  if (r) {
                    var n = r.transformCoordToLocal(e, t),
                      a = r.shape;
                    if (!(a.x <= n[0] && n[0] <= a.x + a.width && a.y <= n[1] && n[1] <= a.y + a.height)) return !1;
                    o = { node: i, offsetX: n[0], offsetY: n[1] };
                  }
                },
                this,
              ),
              o
            );
          },
        });
      function L(e, t, o, i, a, l, s, u, d, h) {
        if (s) {
          var c = s.getLayout();
          if (c && c.isInView) {
            var p = c.width,
              f = c.height,
              m = c.borderWidth,
              _ = c.invisible,
              R = s.getRawIndex(),
              L = u && u.getRawIndex(),
              S = s.viewChildren,
              C = c.upperHeight,
              A = S && S.length,
              D = s.getModel('itemStyle'),
              W = s.getModel('emphasis.itemStyle'),
              k = z('nodeGroup', g);
            if (k) {
              if (
                (d.add(k),
                k.attr('position', [c.x || 0, c.y || 0]),
                (k.__tmNodeWidth = p),
                (k.__tmNodeHeight = f),
                c.isAboveViewRoot)
              )
                return k;
              var P = z('background', v, h, M);
              if (
                (P &&
                  (function(t, o, i) {
                    (o.dataIndex = s.dataIndex),
                      (o.seriesIndex = e.seriesIndex),
                      o.setShape({ x: 0, y: 0, width: p, height: f });
                    var r = s.getVisual('borderColor', !0),
                      a = W.get('borderColor');
                    H(o, function() {
                      var e = T(D);
                      e.fill = r;
                      var t = V(W);
                      if (((t.fill = a), i)) {
                        var l = p - 2 * m;
                        O(e, t, r, l, C, { x: m, y: 0, width: l, height: C });
                      } else e.text = t.text = null;
                      o.setStyle(e), n.setHoverStyle(o, t);
                    }),
                      t.add(o);
                  })(k, P, A && c.upperHeight),
                !A)
              ) {
                var G = z('content', v, h, I);
                G &&
                  (function(t, o) {
                    (o.dataIndex = s.dataIndex), (o.seriesIndex = e.seriesIndex);
                    var i = Math.max(p - 2 * m, 0),
                      r = Math.max(f - 2 * m, 0);
                    (o.culling = !0), o.setShape({ x: m, y: m, width: i, height: r });
                    var a = s.getVisual('color', !0);
                    H(o, function() {
                      var e = T(D);
                      e.fill = a;
                      var t = V(W);
                      O(e, t, a, i, r), o.setStyle(e), n.setHoverStyle(o, t);
                    }),
                      t.add(o);
                  })(k, G);
              }
              return k;
            }
          }
        }
        function H(e, t) {
          _ ? !e.invisible && l.push(e) : (t(), e.__tmWillVisible || (e.invisible = !1));
        }
        function O(t, o, i, a, l, u) {
          var d = s.getModel(),
            h = r.retrieve(
              e.getFormattedLabel(s.dataIndex, 'normal', null, null, u ? 'upperLabel' : 'label'),
              d.get('name'),
            );
          if (!u && c.isLeafRoot) {
            var p = e.get('drillDownIcon', !0);
            h = p ? p + ' ' + h : h;
          }
          var f = d.getModel(u ? w : y),
            g = d.getModel(u ? b : x),
            v = f.getShallow('show');
          n.setLabelStyle(t, o, f, g, { defaultText: v ? h : null, autoColor: i, isRectText: !0 }),
            u && (t.textRect = r.clone(u)),
            (t.truncate = v && f.get('ellipsis') ? { outerWidth: a, outerHeight: l, minChar: 2 } : null);
        }
        function z(e, n, l, u) {
          var d = null != L && o[e][L],
            h = a[e];
          return (
            d
              ? ((o[e][L] = null),
                (function(e, t, o) {
                  (e[R] = {}).old = 'nodeGroup' === o ? t.position.slice() : r.extend({}, t.shape);
                })(h, d, e))
              : _ ||
                (((d = new n({ z: N(l, u) })).__tmDepth = l),
                (d.__tmStorageName = e),
                (function(e, t, o) {
                  var r = (e[R] = {}),
                    n = s.parentNode;
                  if (n && (!i || 'drillDown' === i.direction)) {
                    var l = 0,
                      u = 0,
                      d = a.background[n.getRawIndex()];
                    !i && d && d.old && ((l = d.old.width), (u = d.old.height)),
                      (r.old = 'nodeGroup' === o ? [0, u] : { x: l, y: u, width: 0, height: 0 });
                  }
                  r.fadein = 'nodeGroup' !== o;
                })(h, 0, e)),
            (t[e][R] = d)
          );
        }
      }
      function N(e, t) {
        var o = e * _ + t;
        return (o - 1) / o;
      }
      e.exports = R;
    },
  },
]);
