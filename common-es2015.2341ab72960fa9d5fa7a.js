(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    '1HR5': function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return i;
      });
      var a = n('fXoL'),
        o = n('M3/k');
      let i = (() => {
        class t {}
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
            directives: [o.a],
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
      var a = n('ofXK'),
        o = (n('wDdD'), n('r7o9'), n('fXoL'));
      let i = (() => {
        class t {}
        return (
          (t.ɵmod = o.Qb({ type: t })),
          (t.ɵinj = o.Pb({
            factory: function(e) {
              return new (e || t)();
            },
            imports: [[a.c]],
          })),
          t
        );
      })();
      n.d(e, 'a', function() {
        return i;
      });
    },
    'Krbs': function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return u;
      });
      var a = n('ofXK'),
        o = (n('MJ5V'), n('wZkO')),
        i = n('Wp6s'),
        c = n('NFeN'),
        s = n('bTqV'),
        r = n('XkJo'),
        l = n('tk/3'),
        b = n('/t3+'),
        d = n('f0Cb'),
        m = n('fXoL');
      let u = (() => {
        class t {}
        return (
          (t.ɵmod = m.Qb({ type: t })),
          (t.ɵinj = m.Pb({
            factory: function(e) {
              return new (e || t)();
            },
            imports: [[r.a, b.b, a.c, o.f, i.e, c.b, s.c, l.b, d.b]],
          })),
          t
        );
      })();
    },
    'M3/k': function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return i;
      });
      var a = n('fXoL');
      const o = ['animSpan'];
      let i = (() => {
        class t {
          constructor() {
            (this._defaultAnimationDuration = '1.3s'),
              (this.borderRadius = '4px'),
              (this.width = '110px'),
              (this.height = '16px'),
              (this.animated = !0),
              (this.animationDuration = this._defaultAnimationDuration);
          }
          ngOnInit() {
            this.animationDuration !== this._defaultAnimationDuration &&
              (this.animSpan.nativeElement.style.animationDuration = this.animationDuration);
          }
        }
        return (
          (t.ɵfac = function(e) {
            return new (e || t)();
          }),
          (t.ɵcmp = a.Mb({
            type: t,
            selectors: [['td-loading-mask']],
            viewQuery: function(t, e) {
              var n;
              1 & t && a.Nc(o, !0), 2 & t && a.Ec((n = a.hc())) && (e.animSpan = n.first);
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
        return v;
      });
      var a = n('cp0P'),
        o = n('HDdC'),
        i = n('lJxs'),
        c = n('JIr8'),
        s = n('fXoL'),
        r = n('tk/3'),
        l = n('Wp6s'),
        b = n('/t3+'),
        d = n('bTqV'),
        m = n('NFeN'),
        u = n('ofXK'),
        p = n('f0Cb'),
        h = n('wZkO'),
        f = n('P3Mj');
      function g(t, e) {
        if ((1 & t && (s.Yb(0, 'mat-tab', 9), s.Yb(1, 'td-highlight', 10), s.Tc(2), s.Wb(), s.Wb()), 2 & t)) {
          const t = s.kc(2);
          s.Db(2), s.Vc(' ', t.stylesFile, ' ');
        }
      }
      function T(t, e) {
        if (
          (1 & t &&
            (s.Yb(0, 'mat-tab-group'),
            s.Yb(1, 'mat-tab', 4),
            s.Yb(2, 'td-highlight', 5),
            s.Tc(3),
            s.Wb(),
            s.Wb(),
            s.Yb(4, 'mat-tab', 6),
            s.Yb(5, 'td-highlight', 7),
            s.Tc(6),
            s.Wb(),
            s.Wb(),
            s.Rc(7, g, 3, 1, 'mat-tab', 8),
            s.Wb()),
          2 & t)
        ) {
          const t = s.kc();
          s.Db(3),
            s.Vc(' ', t.htmlFile, ' '),
            s.Db(3),
            s.Vc(' ', t.typescriptFile, ' '),
            s.Db(1),
            s.qc('ngIf', t.stylesFile);
        }
      }
      const y = ['*'];
      let v = (() => {
        class t {
          constructor(t) {
            (this._http = t), (this.viewCode = !1);
          }
          toggleCodeView() {
            const t = this.demoId.indexOf('-demo-'),
              e = this.demoId.slice(0, t);
            Object(a.a)({
              typescript: this._http.get(`assets/demos/${e}/demos/${this.demoId}/${this.demoId}.component.ts`, {
                responseType: 'text',
              }),
              html: this._http.get(`assets/demos/${e}/demos/${this.demoId}/${this.demoId}.component.html`, {
                responseType: 'text',
              }),
              styles: this._http.get(`assets/demos/${e}/demos/${this.demoId}/${this.demoId}.component.scss`, {
                responseType: 'text',
              }),
            })
              .pipe(
                Object(i.a)((t) => ({ typescript: t.typescript, html: t.html, styles: t.styles })),
                Object(c.a)(
                  (t) =>
                    new o.a((e) => {
                      try {
                        e.error(t);
                      } catch (n) {
                        e.error(t);
                      }
                    }),
                ),
              )
              .subscribe((t) => {
                (this.typescriptFile = t.typescript),
                  (this.htmlFile = t.html),
                  (this.stylesFile = t.styles),
                  (this.viewCode = !this.viewCode);
              });
          }
        }
        return (
          (t.ɵfac = function(e) {
            return new (e || t)(s.Sb(r.a));
          }),
          (t.ɵcmp = s.Mb({
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
                (s.pc(),
                s.Yb(0, 'mat-card', 0),
                s.Yb(1, 'mat-toolbar-row'),
                s.Yb(2, 'span'),
                s.Tc(3),
                s.Wb(),
                s.Tb(4, 'span', 1),
                s.Yb(5, 'button', 2),
                s.gc('click', function(t) {
                  return e.toggleCodeView();
                }),
                s.Yb(6, 'mat-icon'),
                s.Tc(7, 'code'),
                s.Wb(),
                s.Wb(),
                s.Wb(),
                s.Rc(8, T, 8, 3, 'mat-tab-group', 3),
                s.Tb(9, 'mat-divider'),
                s.Yb(10, 'mat-card-content'),
                s.oc(11),
                s.Wb(),
                s.Wb()),
                2 & t && (s.Db(3), s.Uc(e.demoId), s.Db(5), s.qc('ngIf', e.viewCode));
            },
            directives: [l.a, b.c, d.b, m.a, u.t, p.a, l.c, h.b, h.a, f.a],
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
        return m;
      });
      var a = n('fXoL'),
        o = n('jsKt'),
        i = n('OnDD'),
        c = n('MutI'),
        s = n('NFeN'),
        r = n('CoBt'),
        l = n('tINP'),
        b = n('bTqV'),
        d = n('aOv5');
      let m = (() => {
        class t {}
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
            directives: [o.a, i.a, c.g, c.d, s.a, r.c, i.b, l.a, b.b, d.c],
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
        o = n('rDig');
      const i = ['td-scatter', ''];
      let c = (() => {
        class t extends o.c {
          constructor(t) {
            super('scatter', t);
          }
          getConfig() {
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
          }
        }
        return (
          (t.ɵfac = function(e) {
            return new (e || t)(a.Sb(o.b));
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
            features: [a.Cb([{ provide: o.c, useExisting: Object(a.V)(() => t) }]), a.Ab],
            attrs: i,
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
      var a = n('ofXK'),
        o = n('bSwM'),
        i = n('MutI'),
        c = n('TkLV'),
        s = n('XkJo'),
        r = n('UBqq'),
        l = (n('LTfs'), n('Xva0'), n('bv9b')),
        b = n('fXoL');
      let d = (() => {
        class t {}
        return (
          (t.ɵmod = b.Qb({ type: t })),
          (t.ɵinj = b.Pb({
            factory: function(e) {
              return new (e || t)();
            },
            imports: [[a.c, o.b, i.e, l.b, c.a, s.a, r.a]],
          })),
          t
        );
      })();
      n.d(e, 'a', function() {
        return d;
      });
    },
    'QQzb': function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return d;
      });
      var a = n('ofXK'),
        o = n('d3UM'),
        i = n('NFeN'),
        c = n('rDig'),
        s = n('H9+E'),
        r = n('Qk+/'),
        l = n('NEPT'),
        b = (n('uZr7'), n('fXoL'));
      let d = (() => {
        class t {}
        return (
          (t.ɵmod = b.Qb({ type: t })),
          (t.ɵinj = b.Pb({
            factory: function(e) {
              return new (e || t)();
            },
            imports: [[c.a, s.a, r.a, l.a, a.c, o.b, i.b]],
          })),
          t
        );
      })();
    },
    'RqAS': function(t, e, n) {
      'use strict';
      var a = n('ofXK'),
        o = (n('M3/k'), n('fXoL'));
      let i = (() => {
        class t {}
        return (
          (t.ɵmod = o.Qb({ type: t })),
          (t.ɵinj = o.Pb({
            factory: function(e) {
              return new (e || t)();
            },
            imports: [[a.c]],
          })),
          t
        );
      })();
      n('1HR5'),
        n.d(e, 'a', function() {
          return c;
        });
      let c = (() => {
        class t {}
        return (
          (t.ɵmod = o.Qb({ type: t })),
          (t.ɵinj = o.Pb({
            factory: function(e) {
              return new (e || t)();
            },
            imports: [[i]],
          })),
          t
        );
      })();
    },
    'UTcn': function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return l;
      });
      var a = n('ofXK'),
        o = n('gw4G'),
        i = (n('eusM'), n('MutI')),
        c = n('NFeN'),
        s = n('bTqV'),
        r = n('fXoL');
      let l = (() => {
        class t {}
        return (
          (t.ɵmod = r.Qb({ type: t })),
          (t.ɵinj = r.Pb({
            factory: function(e) {
              return new (e || t)();
            },
            imports: [[a.c, o.f, i.e, c.b, s.c]],
          })),
          t
        );
      })();
    },
    'XvKp': function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return d;
      });
      var a = n('ofXK'),
        o = n('Wp6s'),
        i = n('NFeN'),
        c = n('MutI'),
        s = (n('aWCS'), n('gw4G')),
        r = n('tyNb'),
        l = n('dE5l'),
        b = n('fXoL');
      let d = (() => {
        class t {}
        return (
          (t.ɵmod = b.Qb({ type: t })),
          (t.ɵinj = b.Pb({
            factory: function(e) {
              return new (e || t)();
            },
            imports: [[a.c, r.f, c.e, i.b, o.e, s.e, s.g, s.b, l.a]],
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
        o = (n('h49U'), n('gw4G')),
        i = n('MutI'),
        c = n('bTqV'),
        s = n('NFeN'),
        r = n('/t3+'),
        l = n('fXoL');
      let b = (() => {
        class t {}
        return (
          (t.ɵmod = l.Qb({ type: t })),
          (t.ɵinj = l.Pb({
            factory: function(e) {
              return new (e || t)();
            },
            imports: [[a.c, o.f, i.e, c.c, s.b, r.b]],
          })),
          t
        );
      })();
    },
    'a4k1': function(t, e, n) {
      'use strict';
      var a = n('ofXK'),
        o = (n('Fa/5'), n('Nffh'), n('fXoL'));
      let i = (() => {
        class t {}
        return (
          (t.ɵmod = o.Qb({ type: t })),
          (t.ɵinj = o.Pb({
            factory: function(e) {
              return new (e || t)();
            },
            imports: [[a.c]],
          })),
          t
        );
      })();
      n.d(e, 'a', function() {
        return i;
      });
    },
    'aWCS': function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return v;
      });
      var a = n('f3AP'),
        o = n('EkIA'),
        i = n('fXoL'),
        c = n('ZI6o'),
        s = n('tyNb'),
        r = n('ofXK'),
        l = n('Wp6s'),
        b = n('NFeN'),
        d = n('qB+f');
      function m(t, e) {
        if ((1 & t && (i.Yb(0, 'div', 16), i.Tc(1), i.lc(2, 'truncate'), i.Wb()), 2 & t)) {
          const t = i.kc(2).$implicit;
          i.Db(1), i.Vc(' ', i.mc(2, 1, t.description), ' ');
        }
      }
      const u = function(t) {
        return { 'no-description': t };
      };
      function p(t, e) {
        if (
          (1 & t &&
            (i.Yb(0, 'div', 10),
            i.Yb(1, 'mat-card', 11),
            i.Yb(2, 'mat-icon', 12),
            i.Tc(3),
            i.Wb(),
            i.Yb(4, 'div'),
            i.Yb(5, 'div', 13),
            i.Yb(6, 'span', 14),
            i.Tc(7),
            i.Wb(),
            i.Wb(),
            i.Rc(8, m, 3, 3, 'div', 15),
            i.Wb(),
            i.Wb(),
            i.Wb()),
          2 & t)
        ) {
          const t = i.kc().$implicit,
            e = i.kc(2).$implicit;
          i.Db(1),
            i.qc('routerLink', t.route)('ngClass', i.vc(6, u, !(null != t && t.description))),
            i.Db(1),
            i.sc('ngClass', 'tc-', t.color || e.color || 'grey-600', ''),
            i.Db(1),
            i.Vc(' ', t.icon, ' '),
            i.Db(4),
            i.Uc(t.name),
            i.Db(1),
            i.qc('ngIf', null == t ? null : t.description);
        }
      }
      function h(t, e) {
        if ((1 & t && (i.Vb(0), i.Rc(1, p, 9, 8, 'div', 9), i.Ub()), 2 & t)) {
          const t = e.$implicit;
          i.Db(1), i.qc('ngIf', 'Overview' !== t.name);
        }
      }
      function f(t, e) {
        if (
          (1 & t &&
            (i.Yb(0, 'div', 6),
            i.Yb(1, 'h3', 7),
            i.Tc(2),
            i.Wb(),
            i.Yb(3, 'div', 8),
            i.Rc(4, h, 2, 1, 'ng-container', 3),
            i.Wb(),
            i.Wb()),
          2 & t)
        ) {
          const t = i.kc().$implicit;
          i.Db(2), i.Uc(t.name), i.Db(2), i.qc('ngForOf', t.views);
        }
      }
      function g(t, e) {
        if ((1 & t && (i.Yb(0, 'section'), i.Rc(1, f, 5, 2, 'div', 5), i.Wb()), 2 & t)) {
          const t = e.$implicit;
          i.Db(1),
            i.qc(
              'ngIf',
              !(
                1 === (null == t ? null : null == t.views ? null : t.views.length) &&
                'Overview' === (null == t ? null : null == t.views[0] ? null : t.views[0].name)
              ),
            );
        }
      }
      function T(t, e) {
        if (
          (1 & t &&
            (i.Yb(0, 'section', 17),
            i.Yb(1, 'div', 18),
            i.Yb(2, 'h1', 19),
            i.Tc(3, 'External Components'),
            i.Wb(),
            i.Yb(4, 'h3', 20),
            i.Tc(5, ' Recommended but not maintained by Covalent '),
            i.Wb(),
            i.Wb(),
            i.Yb(6, 'div', 8),
            i.Yb(7, 'div', 10),
            i.Yb(8, 'a', 21),
            i.Yb(9, 'mat-card', 22),
            i.Yb(10, 'mat-icon', 23),
            i.Tc(11, 'layers'),
            i.Wb(),
            i.Yb(12, 'div'),
            i.Yb(13, 'div', 24),
            i.Tc(14, 'Angular Material'),
            i.Wb(),
            i.Yb(15, 'div', 25),
            i.Tc(16, 'A short description about the component.'),
            i.Wb(),
            i.Wb(),
            i.Wb(),
            i.Wb(),
            i.Wb(),
            i.Wb(),
            i.Wb()),
          2 & t)
        ) {
          const t = i.kc();
          i.Db(4), i.Pc('max-width', 468, 'px'), i.Db(4), i.qc('href', t.angularDocsURL, i.Jc);
        }
      }
      const y = 'https://material.angular.io/';
      let v = (() => {
        class t {
          constructor(t, e) {
            (this.media = t),
              (this.route = e),
              (this.routeAnimation = !0),
              (this.classAnimation = !0),
              (this.angularDocsURL = y);
          }
          ngOnInit() {
            this.route.data.subscribe((t) => {
              (this.category = o.a.find((e) => e.name.toLowerCase() === t.category)),
                (this.categoryGroups = this.category.routeGroups);
            });
          }
        }
        return (
          (t.ɵfac = function(e) {
            return new (e || t)(i.Sb(c.b), i.Sb(s.a));
          }),
          (t.ɵcmp = i.Mb({
            type: t,
            selectors: [['component-overview']],
            hostBindings: function(t, e, n) {
              1 & t && i.Eb(2),
                2 & t && (i.Xc('@routeAnimation', e.routeAnimation), i.Ib('td-route-animation', e.classAnimation));
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
                (i.Yb(0, 'div', 0),
                i.Yb(1, 'h1', 1),
                i.Tc(2),
                i.Wb(),
                i.Yb(3, 'h3', 2),
                i.Tc(4),
                i.Wb(),
                i.Wb(),
                i.Rc(5, g, 2, 1, 'section', 3),
                i.Rc(6, T, 17, 2, 'section', 4)),
                2 & t &&
                  (i.Db(2),
                  i.Uc(e.category.name),
                  i.Db(1),
                  i.Pc('max-width', 468, 'px'),
                  i.Db(1),
                  i.Uc(e.category.description),
                  i.Db(1),
                  i.qc('ngForOf', e.categoryGroups),
                  i.Db(1),
                  i.qc('ngIf', 'Components' === e.category.name));
            },
            directives: [r.s, r.t, l.a, s.c, r.q, b.a],
            pipes: [d.a],
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
        return s;
      });
      var a = n('ofXK'),
        o = n('Wp6s'),
        i = n('PdbM'),
        c = (n('W6/J'), n('fXoL'));
      let s = (() => {
        class t {}
        return (
          (t.ɵmod = c.Qb({ type: t })),
          (t.ɵinj = c.Pb({
            factory: function(e) {
              return new (e || t)();
            },
            imports: [[a.c, o.e, i.a]],
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
        o = (n('yNJT'), n('gw4G')),
        i = n('NFeN'),
        c = n('MutI'),
        s = n('bTqV'),
        r = n('fXoL');
      let l = (() => {
        class t {}
        return (
          (t.ɵmod = r.Qb({ type: t })),
          (t.ɵinj = r.Pb({
            factory: function(e) {
              return new (e || t)();
            },
            imports: [[a.c, o.f, i.b, c.e, s.c]],
          })),
          t
        );
      })();
    },
    'eusM': function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return d;
      });
      var a = n('fXoL'),
        o = n('jsKt'),
        i = n('OnDD'),
        c = n('MutI'),
        s = n('NFeN'),
        r = n('CoBt'),
        l = n('hqDj'),
        b = n('bTqV');
      let d = (() => {
        class t {}
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
            directives: [o.a, i.a, c.g, c.d, s.a, r.c, i.b, l.a, b.b],
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
        return p;
      });
      var a = n('fXoL'),
        o = n('jsKt'),
        i = n('OnDD'),
        c = n('MutI'),
        s = n('NFeN'),
        r = n('CoBt'),
        l = n('hqDj'),
        b = n('bTqV'),
        d = n('4Cys'),
        m = n('/t3+'),
        u = n('wPHC');
      let p = (() => {
        class t {}
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
            directives: [o.a, i.a, c.g, c.d, s.a, r.c, i.b, l.a, b.b, d.a, m.a, u.c],
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
        o = n('gw4G'),
        i = (n('MNZh'), n('MutI')),
        c = n('NFeN'),
        s = n('bTqV'),
        r = n('fXoL');
      let l = (() => {
        class t {}
        return (
          (t.ɵmod = r.Qb({ type: t })),
          (t.ɵinj = r.Pb({
            factory: function(e) {
              return new (e || t)();
            },
            imports: [[a.c, o.f, i.e, c.b, s.c]],
          })),
          t
        );
      })();
    },
    'qPm/': function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return i;
      });
      var a = n('fXoL'),
        o = n('jsKt');
      let i = (() => {
        class t {}
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
            directives: [o.a],
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
        o = n('rDig');
      const i = ['td-pie', ''];
      let c = (() => {
        class t extends o.c {
          constructor(t) {
            super('pie', t);
          }
          getConfig() {
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
          }
        }
        return (
          (t.ɵfac = function(e) {
            return new (e || t)(a.Sb(o.b));
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
            features: [a.Cb([{ provide: o.c, useExisting: Object(a.V)(() => t) }]), a.Ab],
            attrs: i,
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
        o = (n('qPm/'), n('gw4G')),
        i = n('fXoL');
      let c = (() => {
        class t {}
        return (
          (t.ɵmod = i.Qb({ type: t })),
          (t.ɵinj = i.Pb({
            factory: function(e) {
              return new (e || t)();
            },
            imports: [[a.c, o.f]],
          })),
          t
        );
      })();
    },
    'uZr7': function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return Q;
      });
      var a = n('mrSG'),
        o = n('rDig'),
        i = n('fXoL'),
        c = n('MpVW'),
        s = n('kmnG'),
        r = n('d3UM'),
        l = n('ofXK'),
        b = n('cvES'),
        d = n('KQIT'),
        m = n('BGHn'),
        u = n('cpAi'),
        p = n('WKB1'),
        h = n('Y0Ja'),
        f = n('q5+X'),
        g = n('FKr1'),
        T = n('NFeN');
      function y(t, e) {
        if ((1 & t && (i.Yb(0, 'mat-option', 15), i.Tc(1), i.Wb()), 2 & t)) {
          const t = e.$implicit;
          i.qc('value', t), i.Db(1), i.Vc('\n        ', t, '\n      ');
        }
      }
      function v(t, e) {
        if ((1 & t && (i.Yb(0, 'td', 21), i.Tc(1), i.Wb()), 2 & t)) {
          const t = e.ngIf,
            n = i.kc().index;
          i.Db(1), i.Vc('\n                ', t[n], '\n              ');
        }
      }
      function x(t, e) {
        if ((1 & t && (i.Yb(0, 'td', 21), i.Tc(1), i.Wb()), 2 & t)) {
          const t = e.ngIf,
            n = i.kc().index;
          i.Db(1), i.Vc('\n                ', t[n], '\n              ');
        }
      }
      const w = function() {
          return [150, 130, 150, 120, 150, 120];
        },
        W = function() {
          return [80, 122, 80, 120, 80, 120];
        };
      function Y(t, e) {
        if (
          (1 & t &&
            (i.Vb(0),
            i.Tc(1, '\n            '),
            i.Yb(2, 'tr', 20),
            i.Tc(3, '\n              '),
            i.Yb(4, 'td', 21),
            i.Tc(5),
            i.Wb(),
            i.Tc(6, '\n              '),
            i.Rc(7, v, 2, 1, 'td', 22),
            i.Tc(8, '\n              '),
            i.Rc(9, x, 2, 1, 'td', 22),
            i.Tc(10, '\n            '),
            i.Wb(),
            i.Tc(11, '\n          '),
            i.Ub()),
          2 & t)
        ) {
          const t = e.$implicit;
          i.Db(5), i.Uc(t), i.Db(2), i.qc('ngIf', i.uc(3, w)), i.Db(2), i.qc('ngIf', i.uc(4, W));
        }
      }
      const k = function() {
        return ['Electronics', 'Toys', 'Grocery', 'Appliances', 'Automotive', 'Sports'];
      };
      function D(t, e) {
        if (
          (1 & t &&
            (i.Tc(0, '\n      '),
            i.Yb(1, 'table', 16),
            i.Tc(2, '\n        '),
            i.Yb(3, 'thead'),
            i.Tc(4, '\n          '),
            i.Yb(5, 'tr', 17),
            i.Tc(6, '\n            '),
            i.Yb(7, 'th', 18),
            i.Tc(8, 'Category'),
            i.Wb(),
            i.Tc(9, '\n            '),
            i.Yb(10, 'th', 18),
            i.Tc(11),
            i.Wb(),
            i.Tc(12, '\n            '),
            i.Yb(13, 'th', 18),
            i.Tc(14),
            i.Wb(),
            i.Tc(15, '\n          '),
            i.Wb(),
            i.Tc(16, '\n        '),
            i.Wb(),
            i.Tc(17, '\n        '),
            i.Yb(18, 'tbody'),
            i.Tc(19, '\n          '),
            i.Rc(20, Y, 12, 5, 'ng-container', 19),
            i.Tc(21, '\n        '),
            i.Wb(),
            i.Tc(22, '\n      '),
            i.Wb(),
            i.Tc(23, '\n    ')),
          2 & t)
        ) {
          const t = i.kc();
          i.Db(11),
            i.Uc(t.config.series[0].name),
            i.Db(3),
            i.Uc(t.config.series[1].name),
            i.Db(6),
            i.qc('ngForOf', i.uc(3, k));
        }
      }
      function L(t, e) {
        if (
          (1 & t &&
            (i.Vb(0),
            i.Tc(1, '\n        '),
            i.Yb(2, 'div', 24),
            i.Tc(3, '\n          '),
            i.Yb(4, 'mat-icon'),
            i.Tc(5, '\n            '),
            i.Yb(6, 'span'),
            i.Tc(7, 'people'),
            i.Wb(),
            i.Tc(8, '\n          '),
            i.Wb(),
            i.Tc(9, '\n          '),
            i.Yb(10, 'span', 25),
            i.Tc(11),
            i.Wb(),
            i.Tc(12, '\n        '),
            i.Wb(),
            i.Tc(13, '\n      '),
            i.Ub()),
          2 & t)
        ) {
          const t = i.kc().$implicit;
          i.Db(6),
            i.Pc('color', t.color),
            i.Db(5),
            i.Wc('\n            ', t.seriesName ? t.seriesName : t.name, ': ', t.value, '\n          ');
        }
      }
      function C(t, e) {
        if ((1 & t && (i.Tc(0, '\n      '), i.Rc(1, L, 14, 3, 'ng-container', 23), i.Tc(2, '\n    ')), 2 & t)) {
          const t = e.$implicit;
          i.Db(1), i.qc('ngIf', t);
        }
      }
      const I = function() {
          return ['Electronics', 150, 80];
        },
        A = function() {
          return ['Toys', 130, 122];
        },
        M = function() {
          return ['Grocery', 150, 80];
        },
        O = function() {
          return ['Appliances', 120, 120];
        },
        P = function() {
          return ['Automotive', 150, 80];
        },
        S = function() {
          return ['Sports', 120, 120];
        },
        q = function(t, e, n, a, o, i) {
          return [t, e, n, a, o, i];
        },
        X = function() {
          return ['Data View', 'Turn Off', 'Refresh'];
        },
        N = function(t) {
          return { readOnly: !0, title: 'View Data', lang: t };
        },
        _ = function() {
          return { zoom: 'Zoom', back: 'Back' };
        },
        F = function(t) {
          return { title: t };
        },
        R = function() {
          return ['line', 'bar', 'stack', 'tiled'];
        },
        V = function() {
          return { line: 'Line', bar: 'Bar', stack: 'Stack', tiled: 'Tiled' };
        },
        U = function(t, e) {
          return { type: t, title: e };
        },
        j = function() {
          return { title: 'Restore' };
        },
        K = function(t, e, n, a) {
          return { dataView: t, dataZoom: e, magicType: n, restore: a };
        },
        z = function() {
          return { type: 'dotted' };
        },
        E = function(t) {
          return { lineStyle: t };
        },
        B = function() {
          return { name: 'Average', value: 30, xAxis: 1, yAxis: 30 };
        },
        $ = function(t) {
          return [t];
        },
        H = function(t) {
          return { data: t };
        };
      let Q = (() => {
        class t {
          constructor(t, e) {
            (this._cdr = t),
              (this.themeSelector = e),
              (this.themes = Object(o.e)()),
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
          ngOnInit() {
            return Object(a.a)(this, void 0, void 0, function*() {
              (this.selectedTheme = this.themeSelector.selected), this._cdr.markForCheck();
            });
          }
          selectChartTheme(t) {
            this.themeSelector.select(t);
          }
        }
        return (
          (t.ɵfac = function(e) {
            return new (e || t)(i.Sb(i.h), i.Sb(c.a));
          }),
          (t.ɵcmp = i.Mb({
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
                (i.Yb(0, 'div', 0),
                i.Tc(1, '\n  '),
                i.Yb(2, 'div', 1),
                i.Tc(3, '\n    Chart Theme:\n  '),
                i.Wb(),
                i.Tc(4, '\n  '),
                i.Yb(5, 'mat-form-field', 2),
                i.Tc(6, '\n    '),
                i.Yb(7, 'mat-select', 3),
                i.gc('valueChange', function(t) {
                  return (e.selectedTheme = t);
                })('valueChange', function(t) {
                  return e.selectChartTheme(t);
                }),
                i.Tc(8, '\n      '),
                i.Rc(9, y, 2, 2, 'mat-option', 4),
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
                i.Tb(17, 'td-chart-dataset', 6),
                i.Tc(18, '\n  '),
                i.Yb(19, 'td-chart-toolbox', 7),
                i.Tc(20, '\n    '),
                i.Rc(21, D, 24, 4, 'ng-template', 8),
                i.Tc(22, '\n  '),
                i.Wb(),
                i.Tc(23, '\n  '),
                i.Yb(24, 'td-chart-tooltip', 9),
                i.Tc(25, '\n    '),
                i.Rc(26, C, 3, 1, 'ng-template', 10),
                i.Tc(27, '\n  '),
                i.Wb(),
                i.Tc(28, '\n  '),
                i.Tb(29, 'td-chart-x-axis', 11),
                i.Tc(30, '\n  '),
                i.Tb(31, 'td-chart-y-axis', 12),
                i.Tc(32, '\n  '),
                i.Tb(33, 'td-chart-series', 13),
                i.Tc(34, '\n  '),
                i.Tb(35, 'td-chart-series', 14),
                i.Tc(36, '\n'),
                i.Wb(),
                i.Tc(37, '\n')),
                2 & t &&
                  (i.Db(7),
                  i.qc('value', e.selectedTheme),
                  i.Db(2),
                  i.qc('ngForOf', e.themes),
                  i.Db(5),
                  i.Pc('height', 300, 'px'),
                  i.qc('themeName', i.mc(15, 22, e.themeSelector.selected$)),
                  i.Db(3),
                  i.qc(
                    'source',
                    i.Ac(30, q, i.uc(24, I), i.uc(25, A), i.uc(26, M), i.uc(27, O), i.uc(28, P), i.uc(29, S)),
                  ),
                  i.Db(2),
                  i.qc('show', !0)('right', 30)('top', 10)(
                    'feature',
                    i.yc(
                      49,
                      K,
                      i.vc(38, N, i.uc(37, X)),
                      i.vc(41, F, i.uc(40, _)),
                      i.wc(45, U, i.uc(43, R), i.uc(44, V)),
                      i.uc(48, j),
                    ),
                  ),
                  i.Db(5),
                  i.qc('trigger', 'item'),
                  i.Db(5),
                  i.qc('show', !0)('position', 'bottom')('type', 'category')('boundaryGap', !0),
                  i.Db(2),
                  i.qc('show', !0)('type', 'value')('position', 'right')('max', 300)(
                    'splitLine',
                    i.vc(55, E, i.uc(54, z)),
                  ),
                  i.Db(2),
                  i.qc('name', 'Today'),
                  i.Db(2),
                  i.qc('name', 'Yesterday')('markLine', i.vc(60, H, i.vc(58, $, i.uc(57, B)))));
            },
            directives: [s.b, r.a, l.s, b.a, d.a, m.a, m.b, u.a, u.b, p.a, h.a, f.a, g.k, l.t, T.a],
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
        return m;
      });
      var a = n('fXoL'),
        o = n('jsKt'),
        i = n('OnDD'),
        c = n('MutI'),
        s = n('NFeN'),
        r = n('CoBt'),
        l = n('hqDj'),
        b = n('bTqV'),
        d = n('Szcy');
      let m = (() => {
        class t {}
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
            directives: [o.a, i.a, c.g, c.d, s.a, r.c, i.b, l.a, b.b, d.a],
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
