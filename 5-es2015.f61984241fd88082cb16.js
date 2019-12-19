(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    '2B6p': function(e, t) {
      t.updateCenterAndZoom = function(e, t, n) {
        var o = e.getZoom(),
          i = e.getCenter(),
          r = t.zoom,
          a = e.dataToPoint(i);
        if (
          (null != t.dx && null != t.dy && ((a[0] -= t.dx), (a[1] -= t.dy), (i = e.pointToData(a)), e.setCenter(i)),
          null != r)
        ) {
          if (n) {
            var s = n.min || 0;
            r = Math.max(Math.min(o * r, n.max || 1 / 0), s) / o;
          }
          (e.scale[0] *= r), (e.scale[1] *= r);
          var d = e.position,
            h = (t.originY - d[1]) * (r - 1);
          (d[0] -= (t.originX - d[0]) * (r - 1)),
            (d[1] -= h),
            e.updateTransform(),
            (i = e.pointToData(a)),
            e.setCenter(i),
            e.setZoom(r * o);
        }
        return { center: e.getCenter(), zoom: e.getZoom() };
      };
    },
    '75ev': function(e, t, n) {
      var o = n('ProS');
      n('IWNH'), n('bNin'), n('v5uJ');
      var i = n('f5Yq'),
        r = n('yik8');
      o.registerVisual(i('tree', 'circle')), o.registerLayout(r);
    },
    'Ae+d': function(e, t) {
      (t.updateViewOnPan = function(e, t, n) {
        var o = e.target,
          i = o.position;
        (i[0] += t), (i[1] += n), o.dirty();
      }),
        (t.updateViewOnZoom = function(e, t, n, o) {
          var i = e.target,
            r = e.zoomLimit,
            a = i.position,
            s = i.scale,
            d = (e.zoom = e.zoom || 1);
          if (((d *= t), r)) {
            var h = r.min || 0;
            d = Math.max(Math.min(r.max || 1 / 0, d), h);
          }
          var l = d / e.zoom;
          (e.zoom = d),
            (a[0] -= (n - a[0]) * (l - 1)),
            (a[1] -= (o - a[1]) * (l - 1)),
            (s[0] *= l),
            (s[1] *= l),
            i.dirty();
        });
    },
    'Bsck': function(e, t, n) {
      var o = n('bYtY'),
        i = n('Qxkt'),
        r = n('Mdki'),
        a = n('YXkt'),
        s = n('sdST'),
        d = function(e, t) {
          (this.name = e || ''),
            (this.depth = 0),
            (this.height = 0),
            (this.parentNode = null),
            (this.dataIndex = -1),
            (this.children = []),
            (this.viewChildren = []),
            (this.hostTree = t);
        };
      function h(e, t, n) {
        (this._nodes = []),
          (this.hostModel = e),
          (this.levelModels = o.map(t || [], function(t) {
            return new i(t, e, e.ecModel);
          })),
          (this.leavesModel = new i(n || {}, e, e.ecModel));
      }
      (d.prototype = {
        constructor: d,
        isRemoved: function() {
          return this.dataIndex < 0;
        },
        eachNode: function(e, t, n) {
          'function' == typeof e && ((n = t), (t = e), (e = null)), o.isString((e = e || {})) && (e = { order: e });
          var i,
            r = e.order || 'preorder',
            a = this[e.attr || 'children'];
          'preorder' === r && (i = t.call(n, this));
          for (var s = 0; !i && s < a.length; s++) a[s].eachNode(e, t, n);
          'postorder' === r && t.call(n, this);
        },
        updateDepthAndHeight: function(e) {
          var t = 0;
          this.depth = e;
          for (var n = 0; n < this.children.length; n++) {
            var o = this.children[n];
            o.updateDepthAndHeight(e + 1), o.height > t && (t = o.height);
          }
          this.height = t + 1;
        },
        getNodeById: function(e) {
          if (this.getId() === e) return this;
          for (var t = 0, n = this.children, o = n.length; t < o; t++) {
            var i = n[t].getNodeById(e);
            if (i) return i;
          }
        },
        contains: function(e) {
          if (e === this) return !0;
          for (var t = 0, n = this.children, o = n.length; t < o; t++) {
            var i = n[t].contains(e);
            if (i) return i;
          }
        },
        getAncestors: function(e) {
          for (var t = [], n = e ? this : this.parentNode; n; ) t.push(n), (n = n.parentNode);
          return t.reverse(), t;
        },
        getValue: function(e) {
          var t = this.hostTree.data;
          return t.get(t.getDimension(e || 'value'), this.dataIndex);
        },
        setLayout: function(e, t) {
          this.dataIndex >= 0 && this.hostTree.data.setItemLayout(this.dataIndex, e, t);
        },
        getLayout: function() {
          return this.hostTree.data.getItemLayout(this.dataIndex);
        },
        getModel: function(e) {
          if (!(this.dataIndex < 0)) {
            var t,
              n = this.hostTree,
              o = n.data.getItemModel(this.dataIndex),
              i = this.getLevelModel();
            return (
              i ||
                (0 !== this.children.length && (0 === this.children.length || !1 !== this.isExpand)) ||
                (t = this.getLeavesModel()),
              o.getModel(e, (i || t || n.hostModel).getModel(e))
            );
          }
        },
        getLevelModel: function() {
          return (this.hostTree.levelModels || [])[this.depth];
        },
        getLeavesModel: function() {
          return this.hostTree.leavesModel;
        },
        setVisual: function(e, t) {
          this.dataIndex >= 0 && this.hostTree.data.setItemVisual(this.dataIndex, e, t);
        },
        getVisual: function(e, t) {
          return this.hostTree.data.getItemVisual(this.dataIndex, e, t);
        },
        getRawIndex: function() {
          return this.hostTree.data.getRawIndex(this.dataIndex);
        },
        getId: function() {
          return this.hostTree.data.getId(this.dataIndex);
        },
        isAncestorOf: function(e) {
          for (var t = e.parentNode; t; ) {
            if (t === this) return !0;
            t = t.parentNode;
          }
          return !1;
        },
        isDescendantOf: function(e) {
          return e !== this && e.isAncestorOf(this);
        },
      }),
        (h.prototype = {
          constructor: h,
          type: 'tree',
          eachNode: function(e, t, n) {
            this.root.eachNode(e, t, n);
          },
          getNodeByDataIndex: function(e) {
            var t = this.data.getRawIndex(e);
            return this._nodes[t];
          },
          getNodeByName: function(e) {
            return this.root.getNodeByName(e);
          },
          update: function() {
            for (var e = this.data, t = this._nodes, n = 0, o = t.length; n < o; n++) t[n].dataIndex = -1;
            for (n = 0, o = e.count(); n < o; n++) t[e.getRawIndex(n)].dataIndex = n;
          },
          clearLayouts: function() {
            this.data.clearItemLayouts();
          },
        }),
        (h.createTree = function(e, t, n) {
          var i = new h(t, n.levels, n.leaves),
            l = [],
            u = 1;
          !(function e(t, n) {
            var r = t.value;
            (u = Math.max(u, o.isArray(r) ? r.length : 1)), l.push(t);
            var a = new d(t.name, i);
            n
              ? (function(e, t) {
                  e.parentNode !== t && (t.children.push(e), (e.parentNode = t));
                })(a, n)
              : (i.root = a),
              i._nodes.push(a);
            var s = t.children;
            if (s) for (var h = 0; h < s.length; h++) e(s[h], a);
          })(e),
            i.root.updateDepthAndHeight(0);
          var c = s(l, { coordDimensions: ['value'], dimensionsCount: u }),
            f = new a(c, t);
          return f.initData(l), r({ mainData: f, struct: i, structAttr: 'tree' }), i.update(), i;
        }),
        (e.exports = h);
    },
    'IWNH': function(e, t, n) {
      var o = n('T4UG'),
        i = n('Bsck'),
        r = n('7aKB').encodeHTML,
        a = o.extend({
          type: 'series.tree',
          layoutInfo: null,
          layoutMode: 'box',
          getInitialData: function(e) {
            var t = { name: e.name, children: e.data },
              n = {};
            n.leaves = e.leaves || {};
            var o = i.createTree(t, this, n),
              r = 0;
            o.eachNode('preorder', function(e) {
              e.depth > r && (r = e.depth);
            });
            var a = e.expandAndCollapse && e.initialTreeDepth >= 0 ? e.initialTreeDepth : r;
            return (
              o.root.eachNode('preorder', function(e) {
                var t = e.hostTree.data.getRawDataItem(e.dataIndex);
                e.isExpand = t && null != t.collapsed ? !t.collapsed : e.depth <= a;
              }),
              o.data
            );
          },
          getOrient: function() {
            var e = this.get('orient');
            return 'horizontal' === e ? (e = 'LR') : 'vertical' === e && (e = 'TB'), e;
          },
          setZoom: function(e) {
            this.option.zoom = e;
          },
          setCenter: function(e) {
            this.option.center = e;
          },
          formatTooltip: function(e) {
            for (
              var t = this.getData().tree,
                n = t.root.children[0],
                o = t.getNodeByDataIndex(e),
                i = o.getValue(),
                a = o.name;
              o && o !== n;

            )
              (a = o.parentNode.name + '.' + a), (o = o.parentNode);
            return r(a + (isNaN(i) || null == i ? '' : ' : ' + i));
          },
          defaultOption: {
            zlevel: 0,
            z: 2,
            coordinateSystem: 'view',
            left: '12%',
            top: '12%',
            right: '12%',
            bottom: '12%',
            layout: 'orthogonal',
            roam: !1,
            nodeScaleRatio: 0.4,
            center: null,
            zoom: 1,
            orient: 'LR',
            symbol: 'emptyCircle',
            symbolSize: 7,
            expandAndCollapse: !0,
            initialTreeDepth: 2,
            lineStyle: { color: '#ccc', width: 1.5, curveness: 0.5 },
            itemStyle: { color: 'lightsteelblue', borderColor: '#c23531', borderWidth: 1.5 },
            label: { show: !0, color: '#555' },
            leaves: { label: { show: !0 } },
            animationEasing: 'linear',
            animationDuration: 700,
            animationDurationUpdate: 1e3,
          },
        });
      e.exports = a;
    },
    'Itpr': function(e, t, n) {
      var o = n('+TT/');
      function i(e) {
        var t = e.children;
        return t.length && e.isExpand ? t[t.length - 1] : e.hierNode.thread;
      }
      function r(e) {
        var t = e.children;
        return t.length && e.isExpand ? t[0] : e.hierNode.thread;
      }
      function a(e, t, n) {
        return e.hierNode.ancestor.parentNode === t.parentNode ? e.hierNode.ancestor : n;
      }
      function s(e, t, n) {
        var o = n / (t.hierNode.i - e.hierNode.i);
        (t.hierNode.change -= o),
          (t.hierNode.shift += n),
          (t.hierNode.modifier += n),
          (t.hierNode.prelim += n),
          (e.hierNode.change += o);
      }
      function d(e, t) {
        return e.parentNode === t.parentNode ? 1 : 2;
      }
      (t.init = function(e) {
        e.hierNode = {
          defaultAncestor: null,
          ancestor: e,
          prelim: 0,
          modifier: 0,
          change: 0,
          shift: 0,
          i: 0,
          thread: null,
        };
        for (var t, n, o = [e]; (t = o.pop()); )
          if (((n = t.children), t.isExpand && n.length))
            for (var i = n.length - 1; i >= 0; i--) {
              var r = n[i];
              (r.hierNode = {
                defaultAncestor: null,
                ancestor: r,
                prelim: 0,
                modifier: 0,
                change: 0,
                shift: 0,
                i,
                thread: null,
              }),
                o.push(r);
            }
      }),
        (t.firstWalk = function(e, t) {
          var n = e.isExpand ? e.children : [],
            o = e.parentNode.children,
            d = e.hierNode.i ? o[e.hierNode.i - 1] : null;
          if (n.length) {
            !(function(e) {
              for (var t = e.children, n = t.length, o = 0, i = 0; --n >= 0; ) {
                var r = t[n];
                (r.hierNode.prelim += o),
                  (r.hierNode.modifier += o),
                  (o += r.hierNode.shift + (i += r.hierNode.change));
              }
            })(e);
            var h = (n[0].hierNode.prelim + n[n.length - 1].hierNode.prelim) / 2;
            d
              ? ((e.hierNode.prelim = d.hierNode.prelim + t(e, d)), (e.hierNode.modifier = e.hierNode.prelim - h))
              : (e.hierNode.prelim = h);
          } else d && (e.hierNode.prelim = d.hierNode.prelim + t(e, d));
          e.parentNode.hierNode.defaultAncestor = (function(e, t, n, o) {
            if (t) {
              for (
                var d = e,
                  h = e,
                  l = h.parentNode.children[0],
                  u = t,
                  c = d.hierNode.modifier,
                  f = h.hierNode.modifier,
                  p = l.hierNode.modifier,
                  m = u.hierNode.modifier;
                (u = i(u)), (h = r(h)), u && h;

              ) {
                (d = i(d)), (l = r(l)), (d.hierNode.ancestor = e);
                var g = u.hierNode.prelim + m - h.hierNode.prelim - f + o(u, h);
                g > 0 && (s(a(u, e, n), e, g), (f += g), (c += g)),
                  (m += u.hierNode.modifier),
                  (f += h.hierNode.modifier),
                  (c += d.hierNode.modifier),
                  (p += l.hierNode.modifier);
              }
              u && !i(d) && ((d.hierNode.thread = u), (d.hierNode.modifier += m - c)),
                h && !r(l) && ((l.hierNode.thread = h), (l.hierNode.modifier += f - p), (n = e));
            }
            return n;
          })(e, d, e.parentNode.hierNode.defaultAncestor || o[0], t);
        }),
        (t.secondWalk = function(e) {
          e.setLayout({ x: e.hierNode.prelim + e.parentNode.hierNode.modifier }, !0),
            (e.hierNode.modifier += e.parentNode.hierNode.modifier);
        }),
        (t.separation = function(e) {
          return arguments.length ? e : d;
        }),
        (t.radialCoordinate = function(e, t) {
          var n = {};
          return (e -= Math.PI / 2), (n.x = t * Math.cos(e)), (n.y = t * Math.sin(e)), n;
        }),
        (t.getViewRect = function(e, t) {
          return o.getLayoutRect(e.getBoxLayoutParams(), { width: t.getWidth(), height: t.getHeight() });
        });
    },
    'Mdki': function(e, t, n) {
      var o = n('bYtY'),
        i = o.each,
        r = '\0__link_datas',
        a = '\0__link_mainData';
      function s(e, t) {
        if (this[a] === this) {
          var n = o.extend({}, this[r]);
          (n[this.dataType] = t), u(t, n, e);
        } else c(t, this.dataType, this[a], e);
        return t;
      }
      function d(e, t) {
        return e.struct && e.struct.update(this), t;
      }
      function h(e, t) {
        return (
          i(t[r], function(n, o) {
            n !== t && c(n.cloneShallow(), o, t, e);
          }),
          t
        );
      }
      function l(e) {
        var t = this[a];
        return null == e || null == t ? t : t[r][e];
      }
      function u(e, t, n) {
        (e[r] = {}),
          i(t, function(t, o) {
            c(t, o, e, n);
          });
      }
      function c(e, t, n, o) {
        (n[r][t] = e),
          (e[a] = n),
          (e.dataType = t),
          o.struct && ((e[o.structAttr] = o.struct), (o.struct[o.datasAttr[t]] = e)),
          (e.getLinkedData = l);
      }
      e.exports = function(e) {
        var t = e.mainData,
          n = e.datas;
        n || ((n = { main: t }), (e.datasAttr = { main: 'data' })),
          (e.datas = e.mainData = null),
          u(t, n, e),
          i(n, function(n) {
            i(t.TRANSFERABLE_METHODS, function(t) {
              n.wrapMethod(t, o.curry(s, e));
            });
          }),
          t.wrapMethod('cloneShallow', o.curry(h, e)),
          i(t.CHANGABLE_METHODS, function(n) {
            t.wrapMethod(n, o.curry(d, e));
          }),
          o.assert(n[t.dataType] === t);
      };
    },
    'SgGq': function(e, t, n) {
      var o = n('bYtY'),
        i = n('H6uX'),
        r = n('YH21'),
        a = n('pP6R');
      function s(e) {
        (this._zr = e), (this._opt = {});
        var t = o.bind,
          n = t(d, this),
          r = t(h, this),
          a = t(l, this),
          s = t(u, this),
          f = t(c, this);
        i.call(this),
          (this.setPointerChecker = function(e) {
            this.pointerChecker = e;
          }),
          (this.enable = function(t, i) {
            this.disable(),
              (this._opt = o.defaults(o.clone(i) || {}, {
                zoomOnMouseWheel: !0,
                moveOnMouseMove: !0,
                moveOnMouseWheel: !1,
                preventDefaultMouseMove: !0,
              })),
              null == t && (t = !0),
              (!0 !== t && 'move' !== t && 'pan' !== t) ||
                (e.on('mousedown', n), e.on('mousemove', r), e.on('mouseup', a)),
              (!0 !== t && 'scale' !== t && 'zoom' !== t) || (e.on('mousewheel', s), e.on('pinch', f));
          }),
          (this.disable = function() {
            e.off('mousedown', n),
              e.off('mousemove', r),
              e.off('mouseup', a),
              e.off('mousewheel', s),
              e.off('pinch', f);
          }),
          (this.dispose = this.disable),
          (this.isDragging = function() {
            return this._dragging;
          }),
          (this.isPinching = function() {
            return this._pinching;
          });
      }
      function d(e) {
        if (!(r.isMiddleOrRightButtonOnMouseUpDown(e) || (e.target && e.target.draggable))) {
          var t = e.offsetX,
            n = e.offsetY;
          this.pointerChecker && this.pointerChecker(e, t, n) && ((this._x = t), (this._y = n), (this._dragging = !0));
        }
      }
      function h(e) {
        if (
          this._dragging &&
          m('moveOnMouseMove', e, this._opt) &&
          'pinch' !== e.gestureEvent &&
          !a.isTaken(this._zr, 'globalPan')
        ) {
          var t = e.offsetX,
            n = e.offsetY,
            o = this._x,
            i = this._y,
            s = t - o,
            d = n - i;
          (this._x = t),
            (this._y = n),
            this._opt.preventDefaultMouseMove && r.stop(e.event),
            p(this, 'pan', 'moveOnMouseMove', e, { dx: s, dy: d, oldX: o, oldY: i, newX: t, newY: n });
        }
      }
      function l(e) {
        r.isMiddleOrRightButtonOnMouseUpDown(e) || (this._dragging = !1);
      }
      function u(e) {
        var t = m('zoomOnMouseWheel', e, this._opt),
          n = m('moveOnMouseWheel', e, this._opt),
          o = e.wheelDelta,
          i = Math.abs(o),
          r = e.offsetX,
          a = e.offsetY;
        if (0 !== o && (t || n)) {
          if (t) {
            var s = i > 3 ? 1.4 : i > 1 ? 1.2 : 1.1;
            f(this, 'zoom', 'zoomOnMouseWheel', e, { scale: o > 0 ? s : 1 / s, originX: r, originY: a });
          }
          if (n) {
            var d = Math.abs(o);
            f(this, 'scrollMove', 'moveOnMouseWheel', e, {
              scrollDelta: (o > 0 ? 1 : -1) * (d > 3 ? 0.4 : d > 1 ? 0.15 : 0.05),
              originX: r,
              originY: a,
            });
          }
        }
      }
      function c(e) {
        a.isTaken(this._zr, 'globalPan') ||
          f(this, 'zoom', null, e, { scale: e.pinchScale > 1 ? 1.1 : 1 / 1.1, originX: e.pinchX, originY: e.pinchY });
      }
      function f(e, t, n, o, i) {
        e.pointerChecker && e.pointerChecker(o, i.originX, i.originY) && (r.stop(o.event), p(e, t, n, o, i));
      }
      function p(e, t, n, i, r) {
        (r.isAvailableBehavior = o.bind(m, null, n, i)), e.trigger(t, r);
      }
      function m(e, t, n) {
        var i = n[e];
        return !e || (i && (!o.isString(i) || t.event[i + 'Key']));
      }
      o.mixin(s, i), (e.exports = s);
    },
    'bMXI': function(e, t, n) {
      var o = n('bYtY'),
        i = n('QBsz'),
        r = n('Fofx'),
        a = n('mFDi'),
        s = n('DN4a'),
        d = i.applyTransform;
      function h() {
        s.call(this);
      }
      function l(e) {
        (this.name = e), s.call(this), (this._roamTransformable = new h()), (this._rawTransformable = new h());
      }
      function u(e, t, n, o) {
        var i = n.seriesModel,
          r = i ? i.coordinateSystem : null;
        return r === this ? r[e](o) : null;
      }
      o.mixin(h, s),
        (l.prototype = {
          constructor: l,
          type: 'view',
          dimensions: ['x', 'y'],
          setBoundingRect: function(e, t, n, o) {
            return (this._rect = new a(e, t, n, o)), this._rect;
          },
          getBoundingRect: function() {
            return this._rect;
          },
          setViewRect: function(e, t, n, o) {
            this.transformTo(e, t, n, o), (this._viewRect = new a(e, t, n, o));
          },
          transformTo: function(e, t, n, o) {
            var i = this.getBoundingRect(),
              r = this._rawTransformable;
            (r.transform = i.calculateTransform(new a(e, t, n, o))), r.decomposeTransform(), this._updateTransform();
          },
          setCenter: function(e) {
            e && ((this._center = e), this._updateCenterAndZoom());
          },
          setZoom: function(e) {
            e = e || 1;
            var t = this.zoomLimit;
            t && (null != t.max && (e = Math.min(t.max, e)), null != t.min && (e = Math.max(t.min, e))),
              (this._zoom = e),
              this._updateCenterAndZoom();
          },
          getDefaultCenter: function() {
            var e = this.getBoundingRect();
            return [e.x + e.width / 2, e.y + e.height / 2];
          },
          getCenter: function() {
            return this._center || this.getDefaultCenter();
          },
          getZoom: function() {
            return this._zoom || 1;
          },
          getRoamTransform: function() {
            return this._roamTransformable.getLocalTransform();
          },
          _updateCenterAndZoom: function() {
            var e = this._rawTransformable.getLocalTransform(),
              t = this._roamTransformable,
              n = this.getDefaultCenter(),
              o = this.getCenter(),
              r = this.getZoom();
            (o = i.applyTransform([], o, e)),
              (n = i.applyTransform([], n, e)),
              (t.origin = o),
              (t.position = [n[0] - o[0], n[1] - o[1]]),
              (t.scale = [r, r]),
              this._updateTransform();
          },
          _updateTransform: function() {
            var e = this._roamTransformable,
              t = this._rawTransformable;
            (t.parent = e),
              e.updateTransform(),
              t.updateTransform(),
              r.copy(this.transform || (this.transform = []), t.transform || r.create()),
              (this._rawTransform = t.getLocalTransform()),
              (this.invTransform = this.invTransform || []),
              r.invert(this.invTransform, this.transform),
              this.decomposeTransform();
          },
          getViewRect: function() {
            return this._viewRect;
          },
          getViewRectAfterRoam: function() {
            var e = this.getBoundingRect().clone();
            return e.applyTransform(this.transform), e;
          },
          dataToPoint: function(e, t, n) {
            var o = t ? this._rawTransform : this.transform;
            return (n = n || []), o ? d(n, e, o) : i.copy(n, e);
          },
          pointToData: function(e) {
            var t = this.invTransform;
            return t ? d([], e, t) : [e[0], e[1]];
          },
          convertToPixel: o.curry(u, 'dataToPoint'),
          convertFromPixel: o.curry(u, 'pointToData'),
          containPoint: function(e) {
            return this.getViewRectAfterRoam().contain(e[0], e[1]);
          },
        }),
        o.mixin(l, s),
        (e.exports = l);
    },
    'bNin': function(e, t, n) {
      var o = n('bYtY'),
        i = n('IwbS'),
        r = n('FBjb'),
        a = n('Itpr').radialCoordinate,
        s = n('ProS'),
        d = n('4mN7'),
        h = n('bMXI'),
        l = n('Ae+d'),
        u = n('SgGq'),
        c = n('xSat').onIrrelevantElement,
        f = s.extendChartView({
          type: 'tree',
          init: function(e, t) {
            (this._mainGroup = new i.Group()),
              (this._controller = new u(t.getZr())),
              (this._controllerHost = { target: this.group }),
              this.group.add(this._mainGroup);
          },
          render: function(e, t, n, o) {
            var i = e.getData(),
              r = e.layoutInfo,
              a = this._mainGroup,
              s = e.get('layout');
            a.attr('position', 'radial' === s ? [r.x + r.width / 2, r.y + r.height / 2] : [r.x, r.y]),
              this._updateViewCoordSys(e),
              this._updateController(e, t, n);
            var d = this._data,
              h = {
                expandAndCollapse: e.get('expandAndCollapse'),
                layout: s,
                orient: e.getOrient(),
                curvature: e.get('lineStyle.curveness'),
                symbolRotate: e.get('symbolRotate'),
                symbolOffset: e.get('symbolOffset'),
                hoverAnimation: e.get('hoverAnimation'),
                useNameLabel: !0,
                fadeIn: !0,
              };
            i
              .diff(d)
              .add(function(t) {
                p(i, t) && g(i, t, null, a, e, h);
              })
              .update(function(t, n) {
                var o = d.getItemGraphicEl(n);
                p(i, t) ? g(i, t, o, a, e, h) : o && v(d, n, o, a, e, h);
              })
              .remove(function(t) {
                var n = d.getItemGraphicEl(t);
                n && v(d, t, n, a, e, h);
              })
              .execute(),
              (this._nodeScaleRatio = e.get('nodeScaleRatio')),
              this._updateNodeAndLinkScale(e),
              !0 === h.expandAndCollapse &&
                i.eachItemGraphicEl(function(t, o) {
                  t.off('click').on('click', function() {
                    n.dispatchAction({ type: 'treeExpandAndCollapse', seriesId: e.id, dataIndex: o });
                  });
                }),
              (this._data = i);
          },
          _updateViewCoordSys: function(e) {
            var t = e.getData(),
              n = [];
            t.each(function(e) {
              var o = t.getItemLayout(e);
              !o || isNaN(o.x) || isNaN(o.y) || n.push([+o.x, +o.y]);
            });
            var o = [],
              i = [];
            d.fromPoints(n, o, i),
              i[0] - o[0] == 0 && ((i[0] += 1), (o[0] -= 1)),
              i[1] - o[1] == 0 && ((i[1] += 1), (o[1] -= 1));
            var r = (e.coordinateSystem = new h());
            (r.zoomLimit = e.get('scaleLimit')),
              r.setBoundingRect(o[0], o[1], i[0] - o[0], i[1] - o[1]),
              r.setCenter(e.get('center')),
              r.setZoom(e.get('zoom')),
              this.group.attr({ position: r.position, scale: r.scale }),
              (this._viewCoordSys = r);
          },
          _updateController: function(e, t, n) {
            var o = this._controller,
              i = this._controllerHost,
              r = this.group;
            o.setPointerChecker(function(t, o, i) {
              var a = r.getBoundingRect();
              return a.applyTransform(r.transform), a.contain(o, i) && !c(t, n, e);
            }),
              o.enable(e.get('roam')),
              (i.zoomLimit = e.get('scaleLimit')),
              (i.zoom = e.coordinateSystem.getZoom()),
              o
                .off('pan')
                .off('zoom')
                .on(
                  'pan',
                  function(t) {
                    l.updateViewOnPan(i, t.dx, t.dy),
                      n.dispatchAction({ seriesId: e.id, type: 'treeRoam', dx: t.dx, dy: t.dy });
                  },
                  this,
                )
                .on(
                  'zoom',
                  function(t) {
                    l.updateViewOnZoom(i, t.scale, t.originX, t.originY),
                      n.dispatchAction({
                        seriesId: e.id,
                        type: 'treeRoam',
                        zoom: t.scale,
                        originX: t.originX,
                        originY: t.originY,
                      }),
                      this._updateNodeAndLinkScale(e);
                  },
                  this,
                );
          },
          _updateNodeAndLinkScale: function(e) {
            var t = e.getData(),
              n = this._getNodeGlobalScale(e),
              o = [n, n];
            t.eachItemGraphicEl(function(e, t) {
              e.attr('scale', o);
            });
          },
          _getNodeGlobalScale: function(e) {
            var t = e.coordinateSystem;
            if ('view' !== t.type) return 1;
            var n = this._nodeScaleRatio,
              o = t.scale,
              i = (o && o[0]) || 1;
            return ((t.getZoom() - 1) * n + 1) / i;
          },
          dispose: function() {
            this._controller && this._controller.dispose(), (this._controllerHost = {});
          },
          remove: function() {
            this._mainGroup.removeAll(), (this._data = null);
          },
        });
      function p(e, t) {
        var n = e.getItemLayout(t);
        return n && !isNaN(n.x) && !isNaN(n.y) && 'none' !== e.getItemVisual(t, 'symbol');
      }
      function m(e, t, n) {
        return (
          (n.itemModel = t),
          (n.itemStyle = t.getModel('itemStyle').getItemStyle()),
          (n.hoverItemStyle = t.getModel('emphasis.itemStyle').getItemStyle()),
          (n.lineStyle = t.getModel('lineStyle').getLineStyle()),
          (n.labelModel = t.getModel('label')),
          (n.hoverLabelModel = t.getModel('emphasis.label')),
          (n.symbolInnerColor = !1 === e.isExpand && 0 !== e.children.length ? n.itemStyle.fill : '#fff'),
          n
        );
      }
      function g(e, t, n, a, s, d) {
        var h = !n,
          l = e.tree.getNodeByDataIndex(t),
          u = l.getModel(),
          c = ((d = m(l, u, d)), e.tree.root),
          f = l.parentNode === c ? l : l.parentNode || l,
          p = e.getItemGraphicEl(f.dataIndex),
          g = f.getLayout(),
          v = p ? { x: p.position[0], y: p.position[1], rawX: p.__radialOldRawX, rawY: p.__radialOldRawY } : g,
          x = l.getLayout();
        h ? (n = new r(e, t, d)).attr('position', [v.x, v.y]) : n.updateData(e, t, d),
          (n.__radialOldRawX = n.__radialRawX),
          (n.__radialOldRawY = n.__radialRawY),
          (n.__radialRawX = x.rawX),
          (n.__radialRawY = x.rawY),
          a.add(n),
          e.setItemGraphicEl(t, n),
          i.updateProps(n, { position: [x.x, x.y] }, s);
        var N = n.getSymbolPath();
        if ('radial' === d.layout) {
          var _,
            w,
            T = c.children[0],
            M = T.getLayout(),
            I = T.children.length;
          if (x.x === M.x && !0 === l.isExpand) {
            var L = {};
            (L.x = (T.children[0].getLayout().x + T.children[I - 1].getLayout().x) / 2),
              (L.y = (T.children[0].getLayout().y + T.children[I - 1].getLayout().y) / 2),
              (_ = Math.atan2(L.y - M.y, L.x - M.x)) < 0 && (_ = 2 * Math.PI + _),
              (w = L.x < M.x) && (_ -= Math.PI);
          } else
            (_ = Math.atan2(x.y - M.y, x.x - M.x)) < 0 && (_ = 2 * Math.PI + _),
              0 === l.children.length || (0 !== l.children.length && !1 === l.isExpand)
                ? (w = x.x < M.x) && (_ -= Math.PI)
                : (w = x.x > M.x) || (_ -= Math.PI);
          N.setStyle({
            textPosition: w ? 'left' : 'right',
            textRotation: -_,
            textOrigin: 'center',
            verticalAlign: 'middle',
          });
        }
        if (l.parentNode && l.parentNode !== c) {
          var b = n.__edge;
          b ||
            (b = n.__edge = new i.BezierCurve({
              shape: y(d, v, v),
              style: o.defaults({ opacity: 0, strokeNoScale: !0 }, d.lineStyle),
            })),
            i.updateProps(b, { shape: y(d, g, x), style: { opacity: 1 } }, s),
            a.add(b);
        }
      }
      function v(e, t, n, o, r, a) {
        for (
          var s,
            d = e.tree.getNodeByDataIndex(t),
            h = e.tree.root,
            l = d.getModel(),
            u = ((a = m(d, l, a)), d.parentNode === h ? d : d.parentNode || d);
          null == (s = u.getLayout());

        )
          u = u.parentNode === h ? u : u.parentNode || u;
        i.updateProps(n, { position: [s.x + 1, s.y + 1] }, r, function() {
          o.remove(n), e.setItemGraphicEl(t, null);
        }),
          n.fadeOut(null, { keepLabel: !0 });
        var c = n.__edge;
        c &&
          i.updateProps(c, { shape: y(a, s, s), style: { opacity: 0 } }, r, function() {
            o.remove(c);
          });
      }
      function y(e, t, n) {
        var o,
          i,
          r,
          s,
          d,
          h,
          l,
          u,
          c = e.orient;
        if ('radial' === e.layout) {
          (h = n.rawX), (u = n.rawY);
          var f = a((d = t.rawX), (l = t.rawY)),
            p = a(d, l + (u - l) * e.curvature),
            m = a(h, u + (l - u) * e.curvature),
            g = a(h, u);
          return { x1: f.x, y1: f.y, x2: g.x, y2: g.y, cpx1: p.x, cpy1: p.y, cpx2: m.x, cpy2: m.y };
        }
        return (
          (d = t.x),
          (l = t.y),
          (h = n.x),
          (u = n.y),
          ('LR' !== c && 'RL' !== c) ||
            ((o = d + (h - d) * e.curvature), (i = l), (r = h + (d - h) * e.curvature), (s = u)),
          ('TB' !== c && 'BT' !== c) ||
            ((o = d), (i = l + (u - l) * e.curvature), (r = h), (s = u + (l - u) * e.curvature)),
          { x1: d, y1: l, x2: h, y2: u, cpx1: o, cpy1: i, cpx2: r, cpy2: s }
        );
      }
      e.exports = f;
    },
    'bZqE': function(e, t) {
      (t.eachAfter = function(e, t, n) {
        for (var o, i = [e], r = []; (o = i.pop()); )
          if ((r.push(o), o.isExpand)) {
            var a = o.children;
            if (a.length) for (var s = 0; s < a.length; s++) i.push(a[s]);
          }
        for (; (o = r.pop()); ) t(o, n);
      }),
        (t.eachBefore = function(e, t) {
          for (var n, o = [e]; (n = o.pop()); )
            if ((t(n), n.isExpand)) {
              var i = n.children;
              if (i.length) for (var r = i.length - 1; r >= 0; r--) o.push(i[r]);
            }
        });
    },
    'v5uJ': function(e, t, n) {
      var o = n('ProS'),
        i = n('2B6p').updateCenterAndZoom;
      o.registerAction({ type: 'treeExpandAndCollapse', event: 'treeExpandAndCollapse', update: 'update' }, function(
        e,
        t,
      ) {
        t.eachComponent({ mainType: 'series', subType: 'tree', query: e }, function(t) {
          var n = e.dataIndex,
            o = t.getData().tree.getNodeByDataIndex(n);
          o.isExpand = !o.isExpand;
        });
      }),
        o.registerAction({ type: 'treeRoam', event: 'treeRoam', update: 'none' }, function(e, t) {
          t.eachComponent({ mainType: 'series', subType: 'tree', query: e }, function(t) {
            var n = i(t.coordinateSystem, e);
            t.setCenter && t.setCenter(n.center), t.setZoom && t.setZoom(n.zoom);
          });
        });
    },
    'yik8': function(e, t, n) {
      var o = n('bZqE'),
        i = o.eachAfter,
        r = o.eachBefore,
        a = n('Itpr'),
        s = a.init,
        d = a.firstWalk,
        h = a.secondWalk,
        l = a.separation,
        u = a.radialCoordinate,
        c = a.getViewRect;
      e.exports = function(e, t) {
        e.eachSeriesByType('tree', function(e) {
          !(function(e, t) {
            var n = c(e, t);
            e.layoutInfo = n;
            var o = e.get('layout'),
              a = 0,
              f = 0,
              p = null;
            'radial' === o
              ? ((a = 2 * Math.PI),
                (f = Math.min(n.height, n.width) / 2),
                (p = l(function(e, t) {
                  return (e.parentNode === t.parentNode ? 1 : 2) / e.depth;
                })))
              : ((a = n.width), (f = n.height), (p = l()));
            var m = e.getData().tree.root,
              g = m.children[0];
            if (g) {
              s(m), i(g, d, p), (m.hierNode.modifier = -g.hierNode.prelim), r(g, h);
              var v = g,
                y = g,
                x = g;
              r(g, function(e) {
                var t = e.getLayout().x;
                t < v.getLayout().x && (v = e), t > y.getLayout().x && (y = e), e.depth > x.depth && (x = e);
              });
              var N = v === y ? 1 : p(v, y) / 2,
                _ = N - v.getLayout().x,
                w = 0,
                T = 0,
                M = 0,
                I = 0;
              if ('radial' === o)
                (w = a / (y.getLayout().x + N + _)),
                  (T = f / (x.depth - 1 || 1)),
                  r(g, function(e) {
                    M = (e.getLayout().x + _) * w;
                    var t = u(M, (I = (e.depth - 1) * T));
                    e.setLayout({ x: t.x, y: t.y, rawX: M, rawY: I }, !0);
                  });
              else {
                var L = e.getOrient();
                'RL' === L || 'LR' === L
                  ? ((T = f / (y.getLayout().x + N + _)),
                    (w = a / (x.depth - 1 || 1)),
                    r(g, function(e) {
                      (I = (e.getLayout().x + _) * T),
                        e.setLayout({ x: (M = 'LR' === L ? (e.depth - 1) * w : a - (e.depth - 1) * w), y: I }, !0);
                    }))
                  : ('TB' !== L && 'BT' !== L) ||
                    ((w = a / (y.getLayout().x + N + _)),
                    (T = f / (x.depth - 1 || 1)),
                    r(g, function(e) {
                      (M = (e.getLayout().x + _) * w),
                        e.setLayout({ x: M, y: (I = 'TB' === L ? (e.depth - 1) * T : f - (e.depth - 1) * T) }, !0);
                    }));
              }
            }
          })(e, t);
        });
      };
    },
  },
]);
