function _possibleConstructorReturn(t, e) {
  return !e || ('object' != typeof e && 'function' != typeof e) ? _assertThisInitialized(t) : e;
}
function _assertThisInitialized(t) {
  if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function _getPrototypeOf(t) {
  return (_getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t);
      })(t);
}
function _inherits(t, e) {
  if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function');
  (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })),
    e && _setPrototypeOf(t, e);
}
function _setPrototypeOf(t, e) {
  return (_setPrototypeOf =
    Object.setPrototypeOf ||
    function(t, e) {
      return (t.__proto__ = e), t;
    })(t, e);
}
function _defineProperties(t, e) {
  for (var n = 0; n < e.length; n++) {
    var a = e[n];
    (a.enumerable = a.enumerable || !1),
      (a.configurable = !0),
      'value' in a && (a.writable = !0),
      Object.defineProperty(t, a.key, a);
  }
}
function _createClass(t, e, n) {
  return e && _defineProperties(t.prototype, e), n && _defineProperties(t, n), t;
}
function _classCallCheck(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
}
(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    '1HR5': function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return o;
      });
      var a = n('fXoL'),
        i = n('M3/k'),
        o = (function() {
          var t = function t() {
            _classCallCheck(this, t);
          };
          return (
            (t.ɵfac = function(e) {
              return new (e || t)();
            }),
            (t.ɵcmp = a.Mb({
              type: t,
              selectors: [['loading-mask-demo-basic']],
              decls: 12,
              vars: 0,
              consts: [
                [1, 'loading-mask-example'],
                ['width', '100%', 'height', '40px'],
                ['width', '80%'],
                ['width', '40%'],
              ],
              template: function(t, e) {
                1 & t &&
                  (a.Yb(0, 'div', 0),
                  a.Tc(1, '\n'),
                  a.Yb(2, 'td-loading-mask', 1),
                  a.Tc(3, '\n'),
                  a.Wb(),
                  a.Tc(4, '\n'),
                  a.Yb(5, 'td-loading-mask', 2),
                  a.Tc(6, '\n'),
                  a.Wb(),
                  a.Tc(7, '\n'),
                  a.Yb(8, 'td-loading-mask', 3),
                  a.Tc(9, '\n'),
                  a.Wb(),
                  a.Tc(10, '\n'),
                  a.Wb(),
                  a.Tc(11, '\n\n'));
              },
              directives: [i.a],
              styles: [
                '.loading-mask-example[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:200px}.loading-mask-example[_ngcontent-%COMP%]   td-loading-mask[_ngcontent-%COMP%]{margin-bottom:8px}',
              ],
            })),
            t
          );
        })();
    },
    '9U8r': function(t, e, n) {
      'use strict';
      var a,
        i = n('ofXK'),
        o = (n('wDdD'), n('r7o9'), n('fXoL')),
        c =
          (((a = function t() {
            _classCallCheck(this, t);
          }).ɵmod = o.Qb({ type: a })),
          (a.ɵinj = o.Pb({
            factory: function(t) {
              return new (t || a)();
            },
            imports: [[i.c]],
          })),
          a);
      n.d(e, 'a', function() {
        return c;
      });
    },
    'Krbs': function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return m;
      });
      var a = n('ofXK'),
        i = (n('MJ5V'), n('wZkO')),
        o = n('Wp6s'),
        c = n('NFeN'),
        r = n('bTqV'),
        s = n('XkJo'),
        l = n('tk/3'),
        b = n('/t3+'),
        u = n('f0Cb'),
        d = n('fXoL'),
        m = (function() {
          var t = function t() {
            _classCallCheck(this, t);
          };
          return (
            (t.ɵmod = d.Qb({ type: t })),
            (t.ɵinj = d.Pb({
              factory: function(e) {
                return new (e || t)();
              },
              imports: [[s.a, b.b, a.c, i.f, o.e, c.b, r.c, l.b, u.b]],
            })),
            t
          );
        })();
    },
    'M3/k': function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return o;
      });
      var a = n('fXoL'),
        i = ['animSpan'],
        o = (function() {
          var t = (function() {
            function t() {
              _classCallCheck(this, t),
                (this._defaultAnimationDuration = '1.3s'),
                (this.borderRadius = '4px'),
                (this.width = '110px'),
                (this.height = '16px'),
                (this.animated = !0),
                (this.animationDuration = this._defaultAnimationDuration);
            }
            return (
              _createClass(t, [
                {
                  key: 'ngOnInit',
                  value: function() {
                    this.animationDuration !== this._defaultAnimationDuration &&
                      (this.animSpan.nativeElement.style.animationDuration = this.animationDuration);
                  },
                },
              ]),
              t
            );
          })();
          return (
            (t.ɵfac = function(e) {
              return new (e || t)();
            }),
            (t.ɵcmp = a.Mb({
              type: t,
              selectors: [['td-loading-mask']],
              viewQuery: function(t, e) {
                var n;
                1 & t && a.Nc(i, !0), 2 & t && a.Ec((n = a.hc())) && (e.animSpan = n.first);
              },
              hostBindings: function(t, e, n) {
                1 & t && a.Eb(4),
                  2 & t &&
                    (a.Pc('border-radius', e.borderRadius)('width', e.width)('height', e.height),
                    a.Ib('td-loading-mask-animated', e.animated));
              },
              inputs: {
                borderRadius: 'borderRadius',
                width: 'width',
                height: 'height',
                animated: 'animated',
                animationDuration: 'animationDuration',
              },
              decls: 2,
              vars: 0,
              consts: [['animSpan', '']],
              template: function(t, e) {
                1 & t && a.Tb(0, 'span', null, 0);
              },
              styles: [
                '.td-loading-mask-animated[_nghost-%COMP%]{-webkit-transform:translateZ(0);transform:translateZ(0)}[_nghost-%COMP%]{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;background-color:rgba(0,0,0,.051);position:relative;overflow:hidden;height:16px;width:90px}.td-loading-mask-animated[_nghost-%COMP%]   span[_ngcontent-%COMP%]{height:100%;width:130%;background:-webkit-gradient(linear,left top,right top,from(rgba(250,250,250,.098)),color-stop(45%,rgba(0,0,0,.057)));background:linear-gradient(to right,rgba(250,250,250,.098),rgba(0,0,0,.057) 45%);display:block;position:absolute;left:-130%;-webkit-animation:1.9s linear infinite loading;animation:1.9s linear infinite loading}@-webkit-keyframes loading{0%{left:-130%}100%,35%{left:130%}}@keyframes loading{0%{left:-130%}100%,35%{left:130%}}',
              ],
            })),
            t
          );
        })();
    },
    'MJ5V': function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return T;
      });
      var a = n('cp0P'),
        i = n('HDdC'),
        o = n('lJxs'),
        c = n('JIr8'),
        r = n('fXoL'),
        s = n('tk/3'),
        l = n('Wp6s'),
        b = n('/t3+'),
        u = n('bTqV'),
        d = n('NFeN'),
        m = n('ofXK'),
        f = n('f0Cb'),
        h = n('wZkO'),
        p = n('P3Mj');
      function g(t, e) {
        if ((1 & t && (r.Yb(0, 'mat-tab', 9), r.Yb(1, 'td-highlight', 10), r.Tc(2), r.Wb(), r.Wb()), 2 & t)) {
          var n = r.kc(2);
          r.Db(2), r.Vc(' ', n.stylesFile, ' ');
        }
      }
      function v(t, e) {
        if (
          (1 & t &&
            (r.Yb(0, 'mat-tab-group'),
            r.Yb(1, 'mat-tab', 4),
            r.Yb(2, 'td-highlight', 5),
            r.Tc(3),
            r.Wb(),
            r.Wb(),
            r.Yb(4, 'mat-tab', 6),
            r.Yb(5, 'td-highlight', 7),
            r.Tc(6),
            r.Wb(),
            r.Wb(),
            r.Rc(7, g, 3, 1, 'mat-tab', 8),
            r.Wb()),
          2 & t)
        ) {
          var n = r.kc();
          r.Db(3),
            r.Vc(' ', n.htmlFile, ' '),
            r.Db(3),
            r.Vc(' ', n.typescriptFile, ' '),
            r.Db(1),
            r.qc('ngIf', n.stylesFile);
        }
      }
      var y = ['*'],
        T = (function() {
          var t = (function() {
            function t(e) {
              _classCallCheck(this, t), (this._http = e), (this.viewCode = !1);
            }
            return (
              _createClass(t, [
                {
                  key: 'toggleCodeView',
                  value: function() {
                    var t = this,
                      e = this.demoId.indexOf('-demo-'),
                      n = this.demoId.slice(0, e);
                    Object(a.a)({
                      typescript: this._http.get(
                        'assets/demos/'
                          .concat(n, '/demos/')
                          .concat(this.demoId, '/')
                          .concat(this.demoId, '.component.ts'),
                        { responseType: 'text' },
                      ),
                      html: this._http.get(
                        'assets/demos/'
                          .concat(n, '/demos/')
                          .concat(this.demoId, '/')
                          .concat(this.demoId, '.component.html'),
                        { responseType: 'text' },
                      ),
                      styles: this._http.get(
                        'assets/demos/'
                          .concat(n, '/demos/')
                          .concat(this.demoId, '/')
                          .concat(this.demoId, '.component.scss'),
                        { responseType: 'text' },
                      ),
                    })
                      .pipe(
                        Object(o.a)(function(t) {
                          return { typescript: t.typescript, html: t.html, styles: t.styles };
                        }),
                        Object(c.a)(function(t) {
                          return new i.a(function(e) {
                            try {
                              e.error(t);
                            } catch (n) {
                              e.error(t);
                            }
                          });
                        }),
                      )
                      .subscribe(function(e) {
                        (t.typescriptFile = e.typescript),
                          (t.htmlFile = e.html),
                          (t.stylesFile = e.styles),
                          (t.viewCode = !t.viewCode);
                      });
                  },
                },
              ]),
              t
            );
          })();
          return (
            (t.ɵfac = function(e) {
              return new (e || t)(r.Sb(s.a));
            }),
            (t.ɵcmp = r.Mb({
              type: t,
              selectors: [['demo-component']],
              inputs: { demoId: 'demoId' },
              ngContentSelectors: y,
              decls: 12,
              vars: 2,
              consts: [
                [1, 'push-none', 'demo-card', 'overflow-hidden'],
                ['flex', ''],
                ['mat-icon-button', '', 3, 'click'],
                [4, 'ngIf'],
                ['label', 'HTML'],
                ['lang', 'html'],
                ['label', 'TS'],
                ['lang', 'typescript'],
                ['label', 'SCSS', 4, 'ngIf'],
                ['label', 'SCSS'],
                ['lang', 'scss'],
              ],
              template: function(t, e) {
                1 & t &&
                  (r.pc(),
                  r.Yb(0, 'mat-card', 0),
                  r.Yb(1, 'mat-toolbar-row'),
                  r.Yb(2, 'span'),
                  r.Tc(3),
                  r.Wb(),
                  r.Tb(4, 'span', 1),
                  r.Yb(5, 'button', 2),
                  r.gc('click', function(t) {
                    return e.toggleCodeView();
                  }),
                  r.Yb(6, 'mat-icon'),
                  r.Tc(7, 'code'),
                  r.Wb(),
                  r.Wb(),
                  r.Wb(),
                  r.Rc(8, v, 8, 3, 'mat-tab-group', 3),
                  r.Tb(9, 'mat-divider'),
                  r.Yb(10, 'mat-card-content'),
                  r.oc(11),
                  r.Wb(),
                  r.Wb()),
                  2 & t && (r.Db(3), r.Uc(e.demoId), r.Db(5), r.qc('ngIf', e.viewCode));
              },
              directives: [l.a, b.c, u.b, d.a, m.t, f.a, l.c, h.b, h.a, p.a],
              styles: [
                '.demo-card[_ngcontent-%COMP%]{box-shadow:0 1px 1px 0 rgba(60,64,67,.08),0 1px 3px 1px rgba(60,64,67,.16)}.demo-card[_ngcontent-%COMP%]   .mat-toolbar-row[_ngcontent-%COMP%]{background-color:#f5f5f5;height:56px}',
              ],
            })),
            t
          );
        })();
    },
    'MNZh': function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return d;
      });
      var a = n('fXoL'),
        i = n('jsKt'),
        o = n('OnDD'),
        c = n('MutI'),
        r = n('NFeN'),
        s = n('CoBt'),
        l = n('tINP'),
        b = n('bTqV'),
        u = n('aOv5'),
        d = (function() {
          var t = function t() {
            _classCallCheck(this, t);
          };
          return (
            (t.ɵfac = function(e) {
              return new (e || t)();
            }),
            (t.ɵcmp = a.Mb({
              type: t,
              selectors: [['layout-nav-list-demo-basic']],
              decls: 47,
              vars: 0,
              consts: [
                ['sidenavWidth', '280px', 1, 'layout-nav-list-demo'],
                [
                  'flex',
                  '',
                  'sidenavTitle',
                  'Covalent',
                  'logo',
                  'teradata-dark',
                  'name',
                  'Firstname Lastname',
                  'email',
                  'firstname.lastname@company.com',
                ],
                ['mat-list-item', ''],
                ['mat-list-item', '', 'tdLayoutToggle', ''],
                ['td-navigation-drawer-menu', ''],
                [
                  'logo',
                  'assets:teradata',
                  'toolbarTitle',
                  'Covalent',
                  'navigationRoute',
                  '/',
                  'opened',
                  'true',
                  'mode',
                  'side',
                ],
                ['mat-icon-button', '', 'td-menu-button', '', 'tdLayoutToggle', ''],
                ['td-sidenav-content', ''],
                ['td-toolbar-content', ''],
                ['mat-button', '', 'tdLayoutNavListToggle', ''],
              ],
              template: function(t, e) {
                1 & t &&
                  (a.Yb(0, 'td-layout', 0),
                  a.Tc(1, '\n  '),
                  a.Yb(2, 'td-navigation-drawer', 1),
                  a.Tc(3, '\n    '),
                  a.Yb(4, 'mat-nav-list'),
                  a.Tc(5, '\n      '),
                  a.Yb(6, 'a', 2),
                  a.Yb(7, 'mat-icon'),
                  a.Tc(8, 'home'),
                  a.Wb(),
                  a.Tc(9, 'Home'),
                  a.Wb(),
                  a.Tc(10, '\n      '),
                  a.Yb(11, 'a', 3),
                  a.Yb(12, 'mat-icon'),
                  a.Tc(13, 'close'),
                  a.Wb(),
                  a.Tc(14, 'Close Drawer'),
                  a.Wb(),
                  a.Tc(15, '\n    '),
                  a.Wb(),
                  a.Tc(16, '\n    '),
                  a.Yb(17, 'div', 4),
                  a.Tc(18, '\n      '),
                  a.Yb(19, 'mat-nav-list'),
                  a.Tc(20, '\n        '),
                  a.Yb(21, 'a', 2),
                  a.Yb(22, 'mat-icon'),
                  a.Tc(23, 'account_box'),
                  a.Wb(),
                  a.Tc(24, 'Profile'),
                  a.Wb(),
                  a.Tc(25, '\n      '),
                  a.Wb(),
                  a.Tc(26, '\n    '),
                  a.Wb(),
                  a.Tc(27, '\n  '),
                  a.Wb(),
                  a.Tc(28, '\n  '),
                  a.Yb(29, 'td-layout-nav-list', 5),
                  a.Tc(30, '\n    '),
                  a.Yb(31, 'button', 6),
                  a.Tc(32, '\n      '),
                  a.Yb(33, 'mat-icon'),
                  a.Tc(34, 'menu'),
                  a.Wb(),
                  a.Tc(35, '\n    '),
                  a.Wb(),
                  a.Tc(36, '\n    '),
                  a.Yb(37, 'div', 7),
                  a.Tc(38, '\n      Sidenav content here\n    '),
                  a.Wb(),
                  a.Tc(39, '\n    '),
                  a.Yb(40, 'div', 8),
                  a.Tc(41, '\n      '),
                  a.Yb(42, 'button', 9),
                  a.Tc(43, '\n        Toggle\n      '),
                  a.Wb(),
                  a.Tc(44, '\n    '),
                  a.Wb(),
                  a.Tc(45, '\n    Content goes here\n  '),
                  a.Wb(),
                  a.Tc(46, '\n'),
                  a.Wb());
              },
              directives: [i.a, o.a, c.g, c.d, r.a, s.c, o.b, l.a, b.b, u.c],
              styles: [
                '.layout-nav-list-demo[_ngcontent-%COMP%]{position:relative;width:100%;height:500px}[_nghost-%COMP%]{width:100%}',
              ],
            })),
            t
          );
        })();
    },
    'Nffh': function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return c;
      });
      var a = n('fXoL'),
        i = n('rDig'),
        o = ['td-scatter', ''],
        c = (function() {
          var t = (function(t) {
            function e(t) {
              return (
                _classCallCheck(this, e), _possibleConstructorReturn(this, _getPrototypeOf(e).call(this, 'scatter', t))
              );
            }
            return (
              _inherits(e, t),
              _createClass(e, [
                {
                  key: 'getConfig',
                  value: function() {
                    return {
                      coordinateSystem: this.coordinateSystem,
                      xAxisIndex: this.xAxisIndex,
                      yAxisIndex: this.yAxisIndex,
                      polarIndex: this.polarIndex,
                      geoIndex: this.geoIndex,
                      calendarIndex: this.calendarIndex,
                      hoverAnimation: this.hoverAnimation,
                      legendHoverLink: this.legendHoverLink,
                      symbol: this.symbol,
                      symbolSize: this.symbolSize,
                      symbolRotate: this.symbolRotate,
                      symbolKeepAspect: this.symbolKeepAspect,
                      symbolOffset: this.symbolOffset,
                      large: this.large,
                      largeThreshold: this.largeThreshold,
                      cursor: this.cursor,
                      label: this.label,
                      itemStyle: this.itemStyle,
                      emphasis: this.emphasis,
                      progressive: this.progressive,
                      progressiveThreshold: this.progressiveThreshold,
                      dimensions: this.dimensions,
                      encode: this.encode,
                      seriesLayoutBy: this.seriesLayoutBy,
                      datasetIndex: this.datasetIndex,
                      markPoint: this.markPoint,
                      markLine: this.markLine,
                      markArea: this.markArea,
                      zlevel: this.zlevel,
                      z: this.z,
                      silent: this.silent,
                    };
                  },
                },
              ]),
              e
            );
          })(i.c);
          return (
            (t.ɵfac = function(e) {
              return new (e || t)(a.Sb(i.b));
            }),
            (t.ɵcmp = a.Mb({
              type: t,
              selectors: [['td-chart-series', 'td-scatter', '']],
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
                coordinateSystem: 'coordinateSystem',
                xAxisIndex: 'xAxisIndex',
                yAxisIndex: 'yAxisIndex',
                polarIndex: 'polarIndex',
                geoIndex: 'geoIndex',
                calendarIndex: 'calendarIndex',
                hoverAnimation: 'hoverAnimation',
                legendHoverLink: 'legendHoverLink',
                symbol: 'symbol',
                symbolSize: 'symbolSize',
                symbolRotate: 'symbolRotate',
                symbolKeepAspect: 'symbolKeepAspect',
                symbolOffset: 'symbolOffset',
                large: 'large',
                largeThreshold: 'largeThreshold',
                cursor: 'cursor',
                label: 'label',
                itemStyle: 'itemStyle',
                emphasis: 'emphasis',
                progressive: 'progressive',
                progressiveThreshold: 'progressiveThreshold',
                dimensions: 'dimensions',
                encode: 'encode',
                seriesLayoutBy: 'seriesLayoutBy',
                datasetIndex: 'datasetIndex',
                markPoint: 'markPoint',
                markLine: 'markLine',
                markArea: 'markArea',
                zlevel: 'zlevel',
                z: 'z',
                silent: 'silent',
              },
              features: [
                a.Cb([
                  {
                    provide: i.c,
                    useExisting: Object(a.V)(function() {
                      return t;
                    }),
                  },
                ]),
                a.Ab,
              ],
              attrs: o,
              decls: 0,
              vars: 0,
              template: function(t, e) {},
              encapsulation: 2,
              changeDetection: 0,
            })),
            t
          );
        })();
    },
    'PdbM': function(t, e, n) {
      'use strict';
      n('v+MA');
      var a,
        i = n('ofXK'),
        o = n('bSwM'),
        c = n('MutI'),
        r = n('TkLV'),
        s = n('XkJo'),
        l = n('UBqq'),
        b = (n('LTfs'), n('Xva0'), n('bv9b')),
        u = n('fXoL'),
        d =
          (((a = function t() {
            _classCallCheck(this, t);
          }).ɵmod = u.Qb({ type: a })),
          (a.ɵinj = u.Pb({
            factory: function(t) {
              return new (t || a)();
            },
            imports: [[i.c, o.b, c.e, b.b, r.a, s.a, l.a]],
          })),
          a);
      n.d(e, 'a', function() {
        return d;
      });
    },
    'QQzb': function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return u;
      });
      var a = n('ofXK'),
        i = n('d3UM'),
        o = n('NFeN'),
        c = n('rDig'),
        r = n('H9+E'),
        s = n('Qk+/'),
        l = n('NEPT'),
        b = (n('uZr7'), n('fXoL')),
        u = (function() {
          var t = function t() {
            _classCallCheck(this, t);
          };
          return (
            (t.ɵmod = b.Qb({ type: t })),
            (t.ɵinj = b.Pb({
              factory: function(e) {
                return new (e || t)();
              },
              imports: [[c.a, r.a, s.a, l.a, a.c, i.b, o.b]],
            })),
            t
          );
        })();
    },
    'RqAS': function(t, e, n) {
      'use strict';
      var a,
        i = n('ofXK'),
        o = (n('M3/k'), n('fXoL')),
        c =
          (((a = function t() {
            _classCallCheck(this, t);
          }).ɵmod = o.Qb({ type: a })),
          (a.ɵinj = o.Pb({
            factory: function(t) {
              return new (t || a)();
            },
            imports: [[i.c]],
          })),
          a);
      n('1HR5'),
        n.d(e, 'a', function() {
          return s;
        });
      var r,
        s =
          (((r = function t() {
            _classCallCheck(this, t);
          }).ɵmod = o.Qb({ type: r })),
          (r.ɵinj = o.Pb({
            factory: function(t) {
              return new (t || r)();
            },
            imports: [[c]],
          })),
          r);
    },
    'UTcn': function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return l;
      });
      var a = n('ofXK'),
        i = n('gw4G'),
        o = (n('eusM'), n('MutI')),
        c = n('NFeN'),
        r = n('bTqV'),
        s = n('fXoL'),
        l = (function() {
          var t = function t() {
            _classCallCheck(this, t);
          };
          return (
            (t.ɵmod = s.Qb({ type: t })),
            (t.ɵinj = s.Pb({
              factory: function(e) {
                return new (e || t)();
              },
              imports: [[a.c, i.f, o.e, c.b, r.c]],
            })),
            t
          );
        })();
    },
    'XvKp': function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return u;
      });
      var a = n('ofXK'),
        i = n('Wp6s'),
        o = n('NFeN'),
        c = n('MutI'),
        r = (n('aWCS'), n('gw4G')),
        s = n('tyNb'),
        l = n('dE5l'),
        b = n('fXoL'),
        u = (function() {
          var t = function t() {
            _classCallCheck(this, t);
          };
          return (
            (t.ɵmod = b.Qb({ type: t })),
            (t.ɵinj = b.Pb({
              factory: function(e) {
                return new (e || t)();
              },
              imports: [[a.c, s.f, c.e, o.b, i.e, r.e, r.g, r.b, l.a]],
            })),
            t
          );
        })();
    },
    'YJC3': function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return b;
      });
      var a = n('ofXK'),
        i = (n('h49U'), n('gw4G')),
        o = n('MutI'),
        c = n('bTqV'),
        r = n('NFeN'),
        s = n('/t3+'),
        l = n('fXoL'),
        b = (function() {
          var t = function t() {
            _classCallCheck(this, t);
          };
          return (
            (t.ɵmod = l.Qb({ type: t })),
            (t.ɵinj = l.Pb({
              factory: function(e) {
                return new (e || t)();
              },
              imports: [[a.c, i.f, o.e, c.c, r.b, s.b]],
            })),
            t
          );
        })();
    },
    'a4k1': function(t, e, n) {
      'use strict';
      var a,
        i = n('ofXK'),
        o = (n('Fa/5'), n('Nffh'), n('fXoL')),
        c =
          (((a = function t() {
            _classCallCheck(this, t);
          }).ɵmod = o.Qb({ type: a })),
          (a.ɵinj = o.Pb({
            factory: function(t) {
              return new (t || a)();
            },
            imports: [[i.c]],
          })),
          a);
      n.d(e, 'a', function() {
        return c;
      });
    },
    'aWCS': function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return T;
      });
      var a = n('f3AP'),
        i = n('EkIA'),
        o = n('fXoL'),
        c = n('ZI6o'),
        r = n('tyNb'),
        s = n('ofXK'),
        l = n('Wp6s'),
        b = n('NFeN'),
        u = n('qB+f');
      function d(t, e) {
        if ((1 & t && (o.Yb(0, 'div', 16), o.Tc(1), o.lc(2, 'truncate'), o.Wb()), 2 & t)) {
          var n = o.kc(2).$implicit;
          o.Db(1), o.Vc(' ', o.mc(2, 1, n.description), ' ');
        }
      }
      var m = function(t) {
        return { 'no-description': t };
      };
      function f(t, e) {
        if (
          (1 & t &&
            (o.Yb(0, 'div', 10),
            o.Yb(1, 'mat-card', 11),
            o.Yb(2, 'mat-icon', 12),
            o.Tc(3),
            o.Wb(),
            o.Yb(4, 'div'),
            o.Yb(5, 'div', 13),
            o.Yb(6, 'span', 14),
            o.Tc(7),
            o.Wb(),
            o.Wb(),
            o.Rc(8, d, 3, 3, 'div', 15),
            o.Wb(),
            o.Wb(),
            o.Wb()),
          2 & t)
        ) {
          var n = o.kc().$implicit,
            a = o.kc(2).$implicit;
          o.Db(1),
            o.qc('routerLink', n.route)('ngClass', o.vc(6, m, !(null != n && n.description))),
            o.Db(1),
            o.sc('ngClass', 'tc-', n.color || a.color || 'grey-600', ''),
            o.Db(1),
            o.Vc(' ', n.icon, ' '),
            o.Db(4),
            o.Uc(n.name),
            o.Db(1),
            o.qc('ngIf', null == n ? null : n.description);
        }
      }
      function h(t, e) {
        if ((1 & t && (o.Vb(0), o.Rc(1, f, 9, 8, 'div', 9), o.Ub()), 2 & t)) {
          var n = e.$implicit;
          o.Db(1), o.qc('ngIf', 'Overview' !== n.name);
        }
      }
      function p(t, e) {
        if (
          (1 & t &&
            (o.Yb(0, 'div', 6),
            o.Yb(1, 'h3', 7),
            o.Tc(2),
            o.Wb(),
            o.Yb(3, 'div', 8),
            o.Rc(4, h, 2, 1, 'ng-container', 3),
            o.Wb(),
            o.Wb()),
          2 & t)
        ) {
          var n = o.kc().$implicit;
          o.Db(2), o.Uc(n.name), o.Db(2), o.qc('ngForOf', n.views);
        }
      }
      function g(t, e) {
        if ((1 & t && (o.Yb(0, 'section'), o.Rc(1, p, 5, 2, 'div', 5), o.Wb()), 2 & t)) {
          var n = e.$implicit;
          o.Db(1),
            o.qc(
              'ngIf',
              !(
                1 === (null == n ? null : null == n.views ? null : n.views.length) &&
                'Overview' === (null == n ? null : null == n.views[0] ? null : n.views[0].name)
              ),
            );
        }
      }
      function v(t, e) {
        if (
          (1 & t &&
            (o.Yb(0, 'section', 17),
            o.Yb(1, 'div', 18),
            o.Yb(2, 'h1', 19),
            o.Tc(3, 'External Components'),
            o.Wb(),
            o.Yb(4, 'h3', 20),
            o.Tc(5, ' Recommended but not maintained by Covalent '),
            o.Wb(),
            o.Wb(),
            o.Yb(6, 'div', 8),
            o.Yb(7, 'div', 10),
            o.Yb(8, 'a', 21),
            o.Yb(9, 'mat-card', 22),
            o.Yb(10, 'mat-icon', 23),
            o.Tc(11, 'layers'),
            o.Wb(),
            o.Yb(12, 'div'),
            o.Yb(13, 'div', 24),
            o.Tc(14, 'Angular Material'),
            o.Wb(),
            o.Yb(15, 'div', 25),
            o.Tc(16, 'A short description about the component.'),
            o.Wb(),
            o.Wb(),
            o.Wb(),
            o.Wb(),
            o.Wb(),
            o.Wb(),
            o.Wb()),
          2 & t)
        ) {
          var n = o.kc();
          o.Db(4), o.Pc('max-width', 468, 'px'), o.Db(4), o.qc('href', n.angularDocsURL, o.Jc);
        }
      }
      var y = 'https://material.angular.io/',
        T = (function() {
          var t = (function() {
            function t(e, n) {
              _classCallCheck(this, t),
                (this.media = e),
                (this.route = n),
                (this.routeAnimation = !0),
                (this.classAnimation = !0),
                (this.angularDocsURL = y);
            }
            return (
              _createClass(t, [
                {
                  key: 'ngOnInit',
                  value: function() {
                    var t = this;
                    this.route.data.subscribe(function(e) {
                      (t.category = i.a.find(function(t) {
                        return t.name.toLowerCase() === e.category;
                      })),
                        (t.categoryGroups = t.category.routeGroups);
                    });
                  },
                },
              ]),
              t
            );
          })();
          return (
            (t.ɵfac = function(e) {
              return new (e || t)(o.Sb(c.b), o.Sb(r.a));
            }),
            (t.ɵcmp = o.Mb({
              type: t,
              selectors: [['component-overview']],
              hostBindings: function(t, e, n) {
                1 & t && o.Eb(2),
                  2 & t && (o.Xc('@routeAnimation', e.routeAnimation), o.Ib('td-route-animation', e.classAnimation));
              },
              decls: 7,
              vars: 5,
              consts: [
                [1, 'pad-right-sm', 'pad-left-sm'],
                [1, 'mat-display-1', 'push-bottom', 'text-caps'],
                [1, 'mat-subheading-2', 'tc-grey-600', 'push-bottom-xl'],
                [4, 'ngFor', 'ngForOf'],
                ['class', 'pad-bottom-xxl', 4, 'ngIf'],
                ['class', 'push-bottom-lg pad-bottom-xs', 4, 'ngIf'],
                [1, 'push-bottom-lg', 'pad-bottom-xs'],
                [1, 'mat-subheading-1', 'tc-grey-600', 'push-bottom-xs', 'pad-right-sm', 'pad-left-sm'],
                ['layout', 'row', 'layout-wrap', ''],
                ['flex-xs', '100', 'flex-sm', '33', 'flex-md', '33', 'flex-gt-md', '25', 4, 'ngIf'],
                ['flex-xs', '100', 'flex-sm', '33', 'flex-md', '33', 'flex-gt-md', '25'],
                [
                  'layout',
                  'column',
                  'layout-align',
                  'space-between start',
                  1,
                  'component-card',
                  'cursor-pointer',
                  3,
                  'routerLink',
                  'ngClass',
                ],
                [3, 'ngClass'],
                [1, 'push-bottom-xs'],
                [1, 'mat-subheading-2'],
                ['class', 'tc-grey-600 mat-caption component-card-body', 4, 'ngIf'],
                [1, 'tc-grey-600', 'mat-caption', 'component-card-body'],
                [1, 'pad-bottom-xxl'],
                [1, 'pad-right-sm', 'pad-left-sm', 'pad-top-xl'],
                [1, 'mat-display-1', 'push-bottom-md'],
                [1, 'mat-subheading-2', 'tc-grey-600', 'push-bottom-lg'],
                ['target', '_blank', 3, 'href'],
                ['layout', 'column', 'layout-align', 'space-between start', 1, 'component-card', 'cursor-pointer'],
                [1, 'icon-component', 'tc-deep-purple-800'],
                [1, 'mat-subheading-2', 'push-bottom-xs'],
                [1, 'tc-grey-600', 'mat-caption'],
              ],
              template: function(t, e) {
                1 & t &&
                  (o.Yb(0, 'div', 0),
                  o.Yb(1, 'h1', 1),
                  o.Tc(2),
                  o.Wb(),
                  o.Yb(3, 'h3', 2),
                  o.Tc(4),
                  o.Wb(),
                  o.Wb(),
                  o.Rc(5, g, 2, 1, 'section', 3),
                  o.Rc(6, v, 17, 2, 'section', 4)),
                  2 & t &&
                    (o.Db(2),
                    o.Uc(e.category.name),
                    o.Db(1),
                    o.Pc('max-width', 468, 'px'),
                    o.Db(1),
                    o.Uc(e.category.description),
                    o.Db(1),
                    o.qc('ngForOf', e.categoryGroups),
                    o.Db(1),
                    o.qc('ngIf', 'Components' === e.category.name));
              },
              directives: [s.s, s.t, l.a, r.c, s.q, b.a],
              pipes: [u.a],
              styles: [
                '[_nghost-%COMP%]{margin-bottom:200px}.component-card[_ngcontent-%COMP%]{-webkit-transition:.3s cubic-bezier(0,0,.2,1);transition:all .3s cubic-bezier(0,0,.2,1);display:-webkit-box;display:-ms-flexbox;display:flex;height:144px;padding:16px 16px 20px;box-sizing:border-box;box-shadow:0 1px 1px 0 rgba(60,64,67,.08),0 1px 3px 1px rgba(60,64,67,.16)}.component-card[_ngcontent-%COMP%]   .component-card-body[_ngcontent-%COMP%]{height:40px;overflow:hidden;white-space:normal;word-break:break-word;-webkit-line-clamp:2;display:-webkit-box;text-overflow:ellipsis;-webkit-box-orient:vertical}.component-card.no-description[_ngcontent-%COMP%]{height:104px;padding:20px 16px 16px}.component-card[_ngcontent-%COMP%]:hover{box-shadow:0 1px 3px 1px rgba(60,64,67,.2),0 2px 8px 4px rgba(60,64,67,.1);-webkit-transform:translateY(-1px);-ms-transform:translateY(-1px);transform:translateY(-1px)}',
              ],
              data: { animation: [a.b] },
            })),
            t
          );
        })();
    },
    'dE5l': function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return r;
      });
      var a = n('ofXK'),
        i = n('Wp6s'),
        o = n('PdbM'),
        c = (n('W6/J'), n('fXoL')),
        r = (function() {
          var t = function t() {
            _classCallCheck(this, t);
          };
          return (
            (t.ɵmod = c.Qb({ type: t })),
            (t.ɵinj = c.Pb({
              factory: function(e) {
                return new (e || t)();
              },
              imports: [[a.c, i.e, o.a]],
            })),
            t
          );
        })();
    },
    'dfpt': function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return l;
      });
      var a = n('ofXK'),
        i = (n('yNJT'), n('gw4G')),
        o = n('NFeN'),
        c = n('MutI'),
        r = n('bTqV'),
        s = n('fXoL'),
        l = (function() {
          var t = function t() {
            _classCallCheck(this, t);
          };
          return (
            (t.ɵmod = s.Qb({ type: t })),
            (t.ɵinj = s.Pb({
              factory: function(e) {
                return new (e || t)();
              },
              imports: [[a.c, i.f, o.b, c.e, r.c]],
            })),
            t
          );
        })();
    },
    'eusM': function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return u;
      });
      var a = n('fXoL'),
        i = n('jsKt'),
        o = n('OnDD'),
        c = n('MutI'),
        r = n('NFeN'),
        s = n('CoBt'),
        l = n('hqDj'),
        b = n('bTqV'),
        u = (function() {
          var t = function t() {
            _classCallCheck(this, t);
          };
          return (
            (t.ɵfac = function(e) {
              return new (e || t)();
            }),
            (t.ɵcmp = a.Mb({
              type: t,
              selectors: [['layout-nav-demo-basic']],
              decls: 38,
              vars: 0,
              consts: [
                ['sidenavWidth', '280px', 1, 'layout-nav-demo'],
                [
                  'flex',
                  '',
                  'sidenavTitle',
                  'Covalent',
                  'logo',
                  'teradata-dark',
                  'name',
                  'Firstname Lastname',
                  'email',
                  'firstname.lastname@company.com',
                ],
                ['mat-list-item', ''],
                ['mat-list-item', '', 'tdLayoutToggle', ''],
                ['td-navigation-drawer-menu', ''],
                ['logo', 'assets:teradata', 'toolbarTitle', 'Covalent', 'navigationRoute', '/'],
                ['mat-icon-button', '', 'td-menu-button', '', 'tdLayoutToggle', ''],
              ],
              template: function(t, e) {
                1 & t &&
                  (a.Yb(0, 'td-layout', 0),
                  a.Tc(1, '\n  '),
                  a.Yb(2, 'td-navigation-drawer', 1),
                  a.Tc(3, '\n    '),
                  a.Yb(4, 'mat-nav-list'),
                  a.Tc(5, '\n      '),
                  a.Yb(6, 'a', 2),
                  a.Yb(7, 'mat-icon'),
                  a.Tc(8, 'home'),
                  a.Wb(),
                  a.Tc(9, 'Home'),
                  a.Wb(),
                  a.Tc(10, '\n      '),
                  a.Yb(11, 'a', 3),
                  a.Yb(12, 'mat-icon'),
                  a.Tc(13, 'close'),
                  a.Wb(),
                  a.Tc(14, 'Close Drawer'),
                  a.Wb(),
                  a.Tc(15, '\n    '),
                  a.Wb(),
                  a.Tc(16, '\n    '),
                  a.Yb(17, 'div', 4),
                  a.Tc(18, '\n      '),
                  a.Yb(19, 'mat-nav-list'),
                  a.Tc(20, '\n        '),
                  a.Yb(21, 'a', 2),
                  a.Yb(22, 'mat-icon'),
                  a.Tc(23, 'account_box'),
                  a.Wb(),
                  a.Tc(24, 'Profile'),
                  a.Wb(),
                  a.Tc(25, '\n      '),
                  a.Wb(),
                  a.Tc(26, '\n    '),
                  a.Wb(),
                  a.Tc(27, '\n  '),
                  a.Wb(),
                  a.Tc(28, '\n  '),
                  a.Yb(29, 'td-layout-nav', 5),
                  a.Tc(30, '\n    '),
                  a.Yb(31, 'button', 6),
                  a.Tc(32, '\n      '),
                  a.Yb(33, 'mat-icon'),
                  a.Tc(34, 'menu'),
                  a.Wb(),
                  a.Tc(35, '\n    '),
                  a.Wb(),
                  a.Tc(36, '\n    Content goes here\n  '),
                  a.Wb(),
                  a.Tc(37, '\n'),
                  a.Wb());
              },
              directives: [i.a, o.a, c.g, c.d, r.a, s.c, o.b, l.a, b.b],
              styles: [
                '.layout-nav-demo[_ngcontent-%COMP%]{position:relative;width:100%;height:500px}[_nghost-%COMP%]{width:100%}',
              ],
            })),
            t
          );
        })();
    },
    'h49U': function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return f;
      });
      var a = n('fXoL'),
        i = n('jsKt'),
        o = n('OnDD'),
        c = n('MutI'),
        r = n('NFeN'),
        s = n('CoBt'),
        l = n('hqDj'),
        b = n('bTqV'),
        u = n('4Cys'),
        d = n('/t3+'),
        m = n('wPHC'),
        f = (function() {
          var t = function t() {
            _classCallCheck(this, t);
          };
          return (
            (t.ɵfac = function(e) {
              return new (e || t)();
            }),
            (t.ɵcmp = a.Mb({
              type: t,
              selectors: [['layout-management-list-demo-basic']],
              decls: 53,
              vars: 0,
              consts: [
                ['sidenavWidth', '280px', 1, 'layout-management-list-demo'],
                [
                  'flex',
                  '',
                  'sidenavTitle',
                  'Covalent',
                  'logo',
                  'teradata-dark',
                  'name',
                  'Firstname Lastname',
                  'email',
                  'firstname.lastname@company.com',
                ],
                ['mat-list-item', ''],
                ['mat-list-item', '', 'tdLayoutToggle', ''],
                ['td-navigation-drawer-menu', ''],
                ['logo', 'assets:teradata', 'toolbarTitle', 'Covalent', 'navigationRoute', '/'],
                ['mat-icon-button', '', 'td-menu-button', '', 'tdLayoutToggle', ''],
                ['opened', 'true', 'mode', 'side'],
                ['td-sidenav-content', ''],
                ['mat-button', '', 'tdLayoutManageListToggle', ''],
              ],
              template: function(t, e) {
                1 & t &&
                  (a.Yb(0, 'td-layout', 0),
                  a.Tc(1, '\n  '),
                  a.Yb(2, 'td-navigation-drawer', 1),
                  a.Tc(3, '\n    '),
                  a.Yb(4, 'mat-nav-list'),
                  a.Tc(5, '\n      '),
                  a.Yb(6, 'a', 2),
                  a.Yb(7, 'mat-icon'),
                  a.Tc(8, 'home'),
                  a.Wb(),
                  a.Tc(9, 'Home'),
                  a.Wb(),
                  a.Tc(10, '\n      '),
                  a.Yb(11, 'a', 3),
                  a.Yb(12, 'mat-icon'),
                  a.Tc(13, 'close'),
                  a.Wb(),
                  a.Tc(14, 'Close Drawer'),
                  a.Wb(),
                  a.Tc(15, '\n    '),
                  a.Wb(),
                  a.Tc(16, '\n    '),
                  a.Yb(17, 'div', 4),
                  a.Tc(18, '\n      '),
                  a.Yb(19, 'mat-nav-list'),
                  a.Tc(20, '\n        '),
                  a.Yb(21, 'a', 2),
                  a.Yb(22, 'mat-icon'),
                  a.Tc(23, 'account_box'),
                  a.Wb(),
                  a.Tc(24, 'Profile'),
                  a.Wb(),
                  a.Tc(25, '\n      '),
                  a.Wb(),
                  a.Tc(26, '\n    '),
                  a.Wb(),
                  a.Tc(27, '\n  '),
                  a.Wb(),
                  a.Tc(28, '\n  '),
                  a.Yb(29, 'td-layout-nav', 5),
                  a.Tc(30, '\n    '),
                  a.Yb(31, 'button', 6),
                  a.Tc(32, '\n      '),
                  a.Yb(33, 'mat-icon'),
                  a.Tc(34, 'menu'),
                  a.Wb(),
                  a.Tc(35, '\n    '),
                  a.Wb(),
                  a.Tc(36, '\n    '),
                  a.Yb(37, 'td-layout-manage-list', 7),
                  a.Tc(38, '\n      '),
                  a.Yb(39, 'mat-toolbar', 8),
                  a.Tc(40, 'Nav Title'),
                  a.Wb(),
                  a.Tc(41, '\n      '),
                  a.Yb(42, 'div', 8),
                  a.Tc(43, '\n        Sidenav content here\n      '),
                  a.Wb(),
                  a.Tc(44, '\n      '),
                  a.Yb(45, 'mat-toolbar'),
                  a.Tc(46, '\n        '),
                  a.Yb(47, 'button', 9),
                  a.Tc(48, '\n          Toggle\n        '),
                  a.Wb(),
                  a.Tc(49, '\n        Content Title\n      '),
                  a.Wb(),
                  a.Tc(50, '\n      Content goes here\n    '),
                  a.Wb(),
                  a.Tc(51, '\n  '),
                  a.Wb(),
                  a.Tc(52, '\n'),
                  a.Wb());
              },
              directives: [i.a, o.a, c.g, c.d, r.a, s.c, o.b, l.a, b.b, u.a, d.a, m.c],
              styles: [
                '.layout-management-list-demo[_ngcontent-%COMP%]{position:relative;width:100%;height:500px}[_nghost-%COMP%]{width:100%}',
              ],
            })),
            t
          );
        })();
    },
    'hz0R': function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return l;
      });
      var a = n('ofXK'),
        i = n('gw4G'),
        o = (n('MNZh'), n('MutI')),
        c = n('NFeN'),
        r = n('bTqV'),
        s = n('fXoL'),
        l = (function() {
          var t = function t() {
            _classCallCheck(this, t);
          };
          return (
            (t.ɵmod = s.Qb({ type: t })),
            (t.ɵinj = s.Pb({
              factory: function(e) {
                return new (e || t)();
              },
              imports: [[a.c, i.f, o.e, c.b, r.c]],
            })),
            t
          );
        })();
    },
    'qPm/': function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return o;
      });
      var a = n('fXoL'),
        i = n('jsKt'),
        o = (function() {
          var t = function t() {
            _classCallCheck(this, t);
          };
          return (
            (t.ɵfac = function(e) {
              return new (e || t)();
            }),
            (t.ɵcmp = a.Mb({
              type: t,
              selectors: [['layout-demo-basic']],
              decls: 5,
              vars: 3,
              consts: [
                [1, 'layout-demo', 3, 'mode', 'opened', 'sidenavWidth'],
                ['td-sidenav-content', ''],
              ],
              template: function(t, e) {
                1 & t &&
                  (a.Yb(0, 'td-layout', 0),
                  a.Tc(1, '\n  '),
                  a.Yb(2, 'div', 1),
                  a.Tc(3, '\n   .. more sidenav content\n  '),
                  a.Wb(),
                  a.Tc(4, '\n  .. main content\n'),
                  a.Wb()),
                  2 & t && a.qc('mode', 'side')('opened', !0)('sidenavWidth', '257px');
              },
              directives: [i.a],
              styles: [
                '.layout-demo[_ngcontent-%COMP%]{position:relative;width:100%;height:500px}[_nghost-%COMP%]{width:100%}',
              ],
            })),
            t
          );
        })();
    },
    'r7o9': function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return c;
      });
      var a = n('fXoL'),
        i = n('rDig'),
        o = ['td-pie', ''],
        c = (function() {
          var t = (function(t) {
            function e(t) {
              return (
                _classCallCheck(this, e), _possibleConstructorReturn(this, _getPrototypeOf(e).call(this, 'pie', t))
              );
            }
            return (
              _inherits(e, t),
              _createClass(e, [
                {
                  key: 'getConfig',
                  value: function() {
                    return {
                      legendHoverLink: this.legendHoverLink,
                      label: this.label,
                      itemStyle: this.itemStyle,
                      emphasis: this.emphasis,
                      selectedMode: this.selectedMode,
                      selectedOffset: this.selectedOffset,
                      clockwise: this.clockwise,
                      startAngle: this.startAngle,
                      minAngle: this.minAngle,
                      minShowLabelAngle: this.minShowLabelAngle,
                      roseType: this.roseType,
                      avoidLabelOverlap: this.avoidLabelOverlap,
                      stillShowZeroSum: this.stillShowZeroSum,
                      cursor: this.cursor,
                      labelLine: this.labelLine,
                      seriesLayoutBy: this.seriesLayoutBy,
                      datasetIndex: this.datasetIndex,
                      markPoint: this.markPoint,
                      markLine: this.markLine,
                      markArea: this.markArea,
                      zlevel: this.zlevel,
                      z: this.z,
                      center: this.center,
                      radius: this.radius,
                    };
                  },
                },
              ]),
              e
            );
          })(i.c);
          return (
            (t.ɵfac = function(e) {
              return new (e || t)(a.Sb(i.b));
            }),
            (t.ɵcmp = a.Mb({
              type: t,
              selectors: [['td-chart-series', 'td-pie', '']],
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
                legendHoverLink: 'legendHoverLink',
                hoverAnimation: 'hoverAnimation',
                hoverOffset: 'hoverOffset',
                selectedMode: 'selectedMode',
                selectedOffset: 'selectedOffset',
                clockwise: 'clockwise',
                startAngle: 'startAngle',
                minAngle: 'minAngle',
                minShowLabelAngle: 'minShowLabelAngle',
                roseType: 'roseType',
                avoidLabelOverlap: 'avoidLabelOverlap',
                stillShowZeroSum: 'stillShowZeroSum',
                cursor: 'cursor',
                labelLine: 'labelLine',
                label: 'label',
                itemStyle: 'itemStyle',
                emphasis: 'emphasis',
                seriesLayoutBy: 'seriesLayoutBy',
                datasetIndex: 'datasetIndex',
                markPoint: 'markPoint',
                markLine: 'markLine',
                markArea: 'markArea',
                zlevel: 'zlevel',
                z: 'z',
                center: 'center',
                radius: 'radius',
              },
              features: [
                a.Cb([
                  {
                    provide: i.c,
                    useExisting: Object(a.V)(function() {
                      return t;
                    }),
                  },
                ]),
                a.Ab,
              ],
              attrs: o,
              decls: 0,
              vars: 0,
              template: function(t, e) {},
              encapsulation: 2,
              changeDetection: 0,
            })),
            t
          );
        })();
    },
    'tweE': function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return c;
      });
      var a = n('ofXK'),
        i = (n('qPm/'), n('gw4G')),
        o = n('fXoL'),
        c = (function() {
          var t = function t() {
            _classCallCheck(this, t);
          };
          return (
            (t.ɵmod = o.Qb({ type: t })),
            (t.ɵinj = o.Pb({
              factory: function(e) {
                return new (e || t)();
              },
              imports: [[a.c, i.f]],
            })),
            t
          );
        })();
    },
    'uZr7': function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return G;
      });
      var a = n('mrSG'),
        i = n('rDig'),
        o = n('fXoL'),
        c = n('MpVW'),
        r = n('kmnG'),
        s = n('d3UM'),
        l = n('ofXK'),
        b = n('cvES'),
        u = n('KQIT'),
        d = n('BGHn'),
        m = n('cpAi'),
        f = n('WKB1'),
        h = n('Y0Ja'),
        p = n('q5+X'),
        g = n('FKr1'),
        v = n('NFeN');
      function y(t, e) {
        if ((1 & t && (o.Yb(0, 'mat-option', 15), o.Tc(1), o.Wb()), 2 & t)) {
          var n = e.$implicit;
          o.qc('value', n), o.Db(1), o.Vc('\n        ', n, '\n      ');
        }
      }
      function T(t, e) {
        if ((1 & t && (o.Yb(0, 'td', 21), o.Tc(1), o.Wb()), 2 & t)) {
          var n = e.ngIf,
            a = o.kc().index;
          o.Db(1), o.Vc('\n                ', n[a], '\n              ');
        }
      }
      function x(t, e) {
        if ((1 & t && (o.Yb(0, 'td', 21), o.Tc(1), o.Wb()), 2 & t)) {
          var n = e.ngIf,
            a = o.kc().index;
          o.Db(1), o.Vc('\n                ', n[a], '\n              ');
        }
      }
      var w = function() {
          return [150, 130, 150, 120, 150, 120];
        },
        k = function() {
          return [80, 122, 80, 120, 80, 120];
        };
      function C(t, e) {
        if (
          (1 & t &&
            (o.Vb(0),
            o.Tc(1, '\n            '),
            o.Yb(2, 'tr', 20),
            o.Tc(3, '\n              '),
            o.Yb(4, 'td', 21),
            o.Tc(5),
            o.Wb(),
            o.Tc(6, '\n              '),
            o.Rc(7, T, 2, 1, 'td', 22),
            o.Tc(8, '\n              '),
            o.Rc(9, x, 2, 1, 'td', 22),
            o.Tc(10, '\n            '),
            o.Wb(),
            o.Tc(11, '\n          '),
            o.Ub()),
          2 & t)
        ) {
          var n = e.$implicit;
          o.Db(5), o.Uc(n), o.Db(2), o.qc('ngIf', o.uc(3, w)), o.Db(2), o.qc('ngIf', o.uc(4, k));
        }
      }
      var W = function() {
        return ['Electronics', 'Toys', 'Grocery', 'Appliances', 'Automotive', 'Sports'];
      };
      function Y(t, e) {
        if (
          (1 & t &&
            (o.Tc(0, '\n      '),
            o.Yb(1, 'table', 16),
            o.Tc(2, '\n        '),
            o.Yb(3, 'thead'),
            o.Tc(4, '\n          '),
            o.Yb(5, 'tr', 17),
            o.Tc(6, '\n            '),
            o.Yb(7, 'th', 18),
            o.Tc(8, 'Category'),
            o.Wb(),
            o.Tc(9, '\n            '),
            o.Yb(10, 'th', 18),
            o.Tc(11),
            o.Wb(),
            o.Tc(12, '\n            '),
            o.Yb(13, 'th', 18),
            o.Tc(14),
            o.Wb(),
            o.Tc(15, '\n          '),
            o.Wb(),
            o.Tc(16, '\n        '),
            o.Wb(),
            o.Tc(17, '\n        '),
            o.Yb(18, 'tbody'),
            o.Tc(19, '\n          '),
            o.Rc(20, C, 12, 5, 'ng-container', 19),
            o.Tc(21, '\n        '),
            o.Wb(),
            o.Tc(22, '\n      '),
            o.Wb(),
            o.Tc(23, '\n    ')),
          2 & t)
        ) {
          var n = o.kc();
          o.Db(11),
            o.Uc(n.config.series[0].name),
            o.Db(3),
            o.Uc(n.config.series[1].name),
            o.Db(6),
            o.qc('ngForOf', o.uc(3, W));
        }
      }
      function D(t, e) {
        if (
          (1 & t &&
            (o.Vb(0),
            o.Tc(1, '\n        '),
            o.Yb(2, 'div', 24),
            o.Tc(3, '\n          '),
            o.Yb(4, 'mat-icon'),
            o.Tc(5, '\n            '),
            o.Yb(6, 'span'),
            o.Tc(7, 'people'),
            o.Wb(),
            o.Tc(8, '\n          '),
            o.Wb(),
            o.Tc(9, '\n          '),
            o.Yb(10, 'span', 25),
            o.Tc(11),
            o.Wb(),
            o.Tc(12, '\n        '),
            o.Wb(),
            o.Tc(13, '\n      '),
            o.Ub()),
          2 & t)
        ) {
          var n = o.kc().$implicit;
          o.Db(6),
            o.Pc('color', n.color),
            o.Db(5),
            o.Wc('\n            ', n.seriesName ? n.seriesName : n.name, ': ', n.value, '\n          ');
        }
      }
      function _(t, e) {
        if ((1 & t && (o.Tc(0, '\n      '), o.Rc(1, D, 14, 3, 'ng-container', 23), o.Tc(2, '\n    ')), 2 & t)) {
          var n = e.$implicit;
          o.Db(1), o.qc('ngIf', n);
        }
      }
      var L = function() {
          return ['Electronics', 150, 80];
        },
        O = function() {
          return ['Toys', 130, 122];
        },
        P = function() {
          return ['Grocery', 150, 80];
        },
        I = function() {
          return ['Appliances', 120, 120];
        },
        A = function() {
          return ['Automotive', 150, 80];
        },
        M = function() {
          return ['Sports', 120, 120];
        },
        S = function(t, e, n, a, i, o) {
          return [t, e, n, a, i, o];
        },
        q = function() {
          return ['Data View', 'Turn Off', 'Refresh'];
        },
        X = function(t) {
          return { readOnly: !0, title: 'View Data', lang: t };
        },
        N = function() {
          return { zoom: 'Zoom', back: 'Back' };
        },
        R = function(t) {
          return { title: t };
        },
        F = function() {
          return ['line', 'bar', 'stack', 'tiled'];
        },
        j = function() {
          return { line: 'Line', bar: 'Bar', stack: 'Stack', tiled: 'Tiled' };
        },
        V = function(t, e) {
          return { type: t, title: e };
        },
        U = function() {
          return { title: 'Restore' };
        },
        z = function(t, e, n, a) {
          return { dataView: t, dataZoom: e, magicType: n, restore: a };
        },
        K = function() {
          return { type: 'dotted' };
        },
        E = function(t) {
          return { lineStyle: t };
        },
        B = function() {
          return { name: 'Average', value: 30, xAxis: 1, yAxis: 30 };
        },
        H = function(t) {
          return [t];
        },
        Q = function(t) {
          return { data: t };
        },
        G = (function() {
          var t = (function() {
            function t(e, n) {
              _classCallCheck(this, t),
                (this._cdr = e),
                (this.themeSelector = n),
                (this.themes = Object(i.e)()),
                (this.config = {
                  toolbox: {
                    showTitle: !0,
                    top: 0,
                    right: '30px',
                    show: !0,
                    feature: {
                      dataView: { title: 'View Data', lang: ['Data View', 'Turn Off', 'Refresh'] },
                      dataZoom: { title: { zoom: 'Zoom', back: 'Back' } },
                      magicType: {
                        type: ['line', 'bar', 'stack', 'tiled'],
                        title: { line: 'Line', bar: 'Bar', stack: 'Stack', tiled: 'Tiled' },
                      },
                      restore: { title: 'Restore' },
                    },
                  },
                  xAxis: [
                    { data: ['Electronics', 'Toys', 'Grocery', 'Appliances', 'Automotive', 'Sports'] },
                    { show: !0, type: 'time', boundaryGap: !1 },
                  ],
                  yAxis: [{ show: !0, type: 'value', axisLabel: { inside: !1 }, max: 300 }],
                  series: [
                    {
                      type: 'bar',
                      itemStyle: { opacity: 0.95, color: '#007373' },
                      markPoint: { data: [{ name: 'test', value: 130, xAxis: 1, yAxis: 130 }] },
                      name: 'Yesterday',
                      data: [150, 130, 150, 120, 150, 120],
                    },
                    {
                      type: 'bar',
                      itemStyle: { opacity: 0.95, color: '#1B98C6' },
                      markPoint: { data: [{ name: 'Target', value: 80, xAxis: 1, yAxis: 121 }] },
                      markLine: { data: [{ name: 'Average', value: 30, xAxis: 1, yAxis: 30 }], symbol: 'circle' },
                      name: 'Today',
                      data: [80, 122, 80, 120, 80, 120],
                    },
                  ],
                  tooltip: { show: !0, trigger: 'item', showContent: !0 },
                });
            }
            return (
              _createClass(t, [
                {
                  key: 'ngOnInit',
                  value: function() {
                    return Object(a.a)(
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
              ]),
              t
            );
          })();
          return (
            (t.ɵfac = function(e) {
              return new (e || t)(o.Sb(o.h), o.Sb(c.a));
            }),
            (t.ɵcmp = o.Mb({
              type: t,
              selectors: [['bar-demo-basic']],
              decls: 38,
              vars: 62,
              consts: [
                ['flex', '', 'layout', 'row', 'layout-align', 'start center'],
                ['hide-xs', '', 1, 'mat-subheading-2', 'pad-left', 'pad-right', 'push-bottom-none'],
                ['floatLabel', 'never'],
                [3, 'value', 'valueChange'],
                [3, 'value', 4, 'ngFor', 'ngForOf'],
                [3, 'themeName'],
                [3, 'source'],
                [3, 'show', 'right', 'top', 'feature'],
                ['tdViewDataFormatter', ''],
                [3, 'trigger'],
                ['tdTooltipFormatter', ''],
                [3, 'show', 'position', 'type', 'boundaryGap'],
                [3, 'show', 'type', 'position', 'max', 'splitLine'],
                ['td-bar', '', 3, 'name'],
                ['td-bar', '', 3, 'name', 'markLine'],
                [3, 'value'],
                ['td-data-table', ''],
                ['td-data-table-column-row', ''],
                ['td-data-table-column', ''],
                [4, 'ngFor', 'ngForOf'],
                ['td-data-table-row', ''],
                ['td-data-table-cell', ''],
                ['td-data-table-cell', '', 4, 'ngIf'],
                [4, 'ngIf'],
                ['layout', 'row', 'layout-align', 'start center'],
                [1, 'mat-caption', 'pad-left-sm'],
              ],
              template: function(t, e) {
                1 & t &&
                  (o.Yb(0, 'div', 0),
                  o.Tc(1, '\n  '),
                  o.Yb(2, 'div', 1),
                  o.Tc(3, '\n    Chart Theme:\n  '),
                  o.Wb(),
                  o.Tc(4, '\n  '),
                  o.Yb(5, 'mat-form-field', 2),
                  o.Tc(6, '\n    '),
                  o.Yb(7, 'mat-select', 3),
                  o.gc('valueChange', function(t) {
                    return (e.selectedTheme = t);
                  })('valueChange', function(t) {
                    return e.selectChartTheme(t);
                  }),
                  o.Tc(8, '\n      '),
                  o.Rc(9, y, 2, 2, 'mat-option', 4),
                  o.Tc(10, '\n    '),
                  o.Wb(),
                  o.Tc(11, '\n  '),
                  o.Wb(),
                  o.Tc(12, '\n'),
                  o.Wb(),
                  o.Tc(13, '\n'),
                  o.Yb(14, 'td-chart', 5),
                  o.lc(15, 'async'),
                  o.Tc(16, '\n  '),
                  o.Tb(17, 'td-chart-dataset', 6),
                  o.Tc(18, '\n  '),
                  o.Yb(19, 'td-chart-toolbox', 7),
                  o.Tc(20, '\n    '),
                  o.Rc(21, Y, 24, 4, 'ng-template', 8),
                  o.Tc(22, '\n  '),
                  o.Wb(),
                  o.Tc(23, '\n  '),
                  o.Yb(24, 'td-chart-tooltip', 9),
                  o.Tc(25, '\n    '),
                  o.Rc(26, _, 3, 1, 'ng-template', 10),
                  o.Tc(27, '\n  '),
                  o.Wb(),
                  o.Tc(28, '\n  '),
                  o.Tb(29, 'td-chart-x-axis', 11),
                  o.Tc(30, '\n  '),
                  o.Tb(31, 'td-chart-y-axis', 12),
                  o.Tc(32, '\n  '),
                  o.Tb(33, 'td-chart-series', 13),
                  o.Tc(34, '\n  '),
                  o.Tb(35, 'td-chart-series', 14),
                  o.Tc(36, '\n'),
                  o.Wb(),
                  o.Tc(37, '\n')),
                  2 & t &&
                    (o.Db(7),
                    o.qc('value', e.selectedTheme),
                    o.Db(2),
                    o.qc('ngForOf', e.themes),
                    o.Db(5),
                    o.Pc('height', 300, 'px'),
                    o.qc('themeName', o.mc(15, 22, e.themeSelector.selected$)),
                    o.Db(3),
                    o.qc(
                      'source',
                      o.Ac(30, S, o.uc(24, L), o.uc(25, O), o.uc(26, P), o.uc(27, I), o.uc(28, A), o.uc(29, M)),
                    ),
                    o.Db(2),
                    o.qc('show', !0)('right', 30)('top', 10)(
                      'feature',
                      o.yc(
                        49,
                        z,
                        o.vc(38, X, o.uc(37, q)),
                        o.vc(41, R, o.uc(40, N)),
                        o.wc(45, V, o.uc(43, F), o.uc(44, j)),
                        o.uc(48, U),
                      ),
                    ),
                    o.Db(5),
                    o.qc('trigger', 'item'),
                    o.Db(5),
                    o.qc('show', !0)('position', 'bottom')('type', 'category')('boundaryGap', !0),
                    o.Db(2),
                    o.qc('show', !0)('type', 'value')('position', 'right')('max', 300)(
                      'splitLine',
                      o.vc(55, E, o.uc(54, K)),
                    ),
                    o.Db(2),
                    o.qc('name', 'Today'),
                    o.Db(2),
                    o.qc('name', 'Yesterday')('markLine', o.vc(60, Q, o.vc(58, H, o.uc(57, B)))));
              },
              directives: [r.b, s.a, l.s, b.a, u.a, d.a, d.b, m.a, m.b, f.a, h.a, p.a, g.k, l.t, v.a],
              pipes: [l.b],
              styles: ['[_nghost-%COMP%]{width:100%}'],
              changeDetection: 0,
            })),
            t
          );
        })();
    },
    'yNJT': function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return d;
      });
      var a = n('fXoL'),
        i = n('jsKt'),
        o = n('OnDD'),
        c = n('MutI'),
        r = n('NFeN'),
        s = n('CoBt'),
        l = n('hqDj'),
        b = n('bTqV'),
        u = n('Szcy'),
        d = (function() {
          var t = function t() {
            _classCallCheck(this, t);
          };
          return (
            (t.ɵfac = function(e) {
              return new (e || t)();
            }),
            (t.ɵcmp = a.Mb({
              type: t,
              selectors: [['layout-card-over-demo-basic']],
              decls: 41,
              vars: 0,
              consts: [
                ['sidenavWidth', '280px', 1, 'layout-card-over-demo'],
                [
                  'flex',
                  '',
                  'sidenavTitle',
                  'Covalent',
                  'logo',
                  'teradata-dark',
                  'name',
                  'Firstname Lastname',
                  'email',
                  'firstname.lastname@company.com',
                ],
                ['mat-list-item', ''],
                ['mat-list-item', '', 'tdLayoutToggle', ''],
                ['td-navigation-drawer-menu', ''],
                ['logo', 'assets:teradata', 'toolbarTitle', 'Covalent', 'navigationRoute', '/'],
                ['mat-icon-button', '', 'td-menu-button', '', 'tdLayoutToggle', ''],
                ['cardTitle', 'Covalent', 'cardSubtitle', 'Card Over Layout Demo'],
              ],
              template: function(t, e) {
                1 & t &&
                  (a.Yb(0, 'td-layout', 0),
                  a.Tc(1, '\n  '),
                  a.Yb(2, 'td-navigation-drawer', 1),
                  a.Tc(3, '\n    '),
                  a.Yb(4, 'mat-nav-list'),
                  a.Tc(5, '\n      '),
                  a.Yb(6, 'a', 2),
                  a.Yb(7, 'mat-icon'),
                  a.Tc(8, 'home'),
                  a.Wb(),
                  a.Tc(9, 'Home'),
                  a.Wb(),
                  a.Tc(10, '\n      '),
                  a.Yb(11, 'a', 3),
                  a.Yb(12, 'mat-icon'),
                  a.Tc(13, 'close'),
                  a.Wb(),
                  a.Tc(14, 'Close Drawer'),
                  a.Wb(),
                  a.Tc(15, '\n    '),
                  a.Wb(),
                  a.Tc(16, '\n    '),
                  a.Yb(17, 'div', 4),
                  a.Tc(18, '\n      '),
                  a.Yb(19, 'mat-nav-list'),
                  a.Tc(20, '\n        '),
                  a.Yb(21, 'a', 2),
                  a.Yb(22, 'mat-icon'),
                  a.Tc(23, 'account_box'),
                  a.Wb(),
                  a.Tc(24, 'Profile'),
                  a.Wb(),
                  a.Tc(25, '\n      '),
                  a.Wb(),
                  a.Tc(26, '\n    '),
                  a.Wb(),
                  a.Tc(27, '\n  '),
                  a.Wb(),
                  a.Tc(28, '\n  '),
                  a.Yb(29, 'td-layout-nav', 5),
                  a.Tc(30, '\n    '),
                  a.Yb(31, 'button', 6),
                  a.Tc(32, '\n      '),
                  a.Yb(33, 'mat-icon'),
                  a.Tc(34, 'menu'),
                  a.Wb(),
                  a.Tc(35, '\n    '),
                  a.Wb(),
                  a.Tc(36, '\n    '),
                  a.Yb(37, 'td-layout-card-over', 7),
                  a.Tc(38, '\n      Content goes here\n    '),
                  a.Wb(),
                  a.Tc(39, '\n  '),
                  a.Wb(),
                  a.Tc(40, '\n'),
                  a.Wb());
              },
              directives: [i.a, o.a, c.g, c.d, r.a, s.c, o.b, l.a, b.b, u.a],
              styles: [
                '.layout-card-over-demo[_ngcontent-%COMP%]{position:relative;width:100%;height:500px}[_nghost-%COMP%]{width:100%}',
              ],
            })),
            t
          );
        })();
    },
  },
]);
