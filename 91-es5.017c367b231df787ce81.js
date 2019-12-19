function _classCallCheck(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
}
function _defineProperties(t, e) {
  for (var n = 0; n < e.length; n++) {
    var o = e[n];
    (o.enumerable = o.enumerable || !1),
      (o.configurable = !0),
      'value' in o && (o.writable = !0),
      Object.defineProperty(t, o.key, o);
  }
}
function _createClass(t, e, n) {
  return e && _defineProperties(t.prototype, e), n && _defineProperties(t, n), t;
}
(window.webpackJsonp = window.webpackJsonp || []).push([
  [91],
  {
    laIH: function(t, e, n) {
      'use strict';
      n.r(e);
      var o = n('ofXK'),
        r = n('tyNb'),
        i = n('Wp6s'),
        a = n('QibW'),
        c = n('f0Cb'),
        l = n('wZkO'),
        s = n('3Pt+'),
        u = n('Q3DV'),
        d = n('eTLM'),
        m = n('fXoL'),
        p = n('l09l'),
        g = n('bTqV'),
        b = n('uBmD'),
        h = n('qDEf');
      function f(t, e) {
        if ((1 & t && (m.Yb(0, 'mat-radio-button', 10), m.Tc(1), m.Tb(2, 'br'), m.Tc(3, '\n      '), m.Wb()), 2 & t)) {
          var n = e.$implicit;
          m.qc('value', n), m.Db(1), m.Vc('\n        ', n.name, '\n        ');
        }
      }
      function v(t) {
        return JSON.stringify(t, void 0, 4);
      }
      var w,
        T = [{ url: 'https://github.com/Teradata/covalent/blob/develop/README.md' }],
        k = [
          { url: 'https://github.com/Teradata/covalent/blob/develop/README.md', title: 'Covalent' },
          { url: 'https://raw.githubusercontent.com/angular/angular/master/README.md', title: 'Angular' },
          {
            markdownString: '\n\n# Raw markdown example\n \n> Amazing\n\n1. List\n2. of\n3. items\n\n',
            title: 'Raw markdown',
          },
        ],
        y = [
          {
            title: 'Covalent',
            children: [
              {
                title: 'Components',
                children: [
                  {
                    url:
                      'https://raw.githubusercontent.com/Teradata/covalent/develop/src/platform/core/loading/README.md',
                    title: 'tdLoading',
                  },
                ],
              },
            ],
          },
          k[1],
          k[2],
        ],
        C =
          (((w = (function() {
            function t(e) {
              _classCallCheck(this, t),
                (this._markdownNavigatorWindowService = e),
                (this.options = [
                  { name: 'Multi-level', value: y },
                  { name: 'Bi-level', value: k },
                  { name: 'Single-level', value: T },
                ]),
                (this.selected = this.options[0]),
                (this.currentTree = this.selected.value),
                (this.input = v(this.currentTree)),
                (this.compareByTitle = function(t, e) {
                  return t.title === e.title;
                });
            }
            return (
              _createClass(t, [
                {
                  key: 'selectOption',
                  value: function() {
                    (this.startAt = void 0), this.use(this.selected.value);
                  },
                },
                {
                  key: 'use',
                  value: function(t) {
                    (this.currentTree = t),
                      (this.input = v(this.currentTree)),
                      this._markdownNavigatorWindowService.isOpen && this.openWindow();
                  },
                },
                {
                  key: 'applyInput',
                  value: function() {
                    this.use(JSON.parse(this.input));
                  },
                },
                {
                  key: 'demoStartAt',
                  value: function() {
                    (this.selected = this.options[0]),
                      (this.startAt = { title: 'tdLoading' }),
                      this.use(JSON.parse(JSON.stringify(this.selected.value)));
                  },
                },
                {
                  key: 'openWindow',
                  value: function() {
                    this._markdownNavigatorWindowService.open(this.windowConfig);
                  },
                },
                {
                  key: 'windowConfig',
                  get: function() {
                    return { items: this.currentTree, startAt: this.startAt, compareWith: this.compareByTitle };
                  },
                },
              ]),
              t
            );
          })()).ɵfac = function(t) {
            return new (t || w)(m.Sb(p.b));
          }),
          (w.ɵcmp = m.Mb({
            type: w,
            selectors: [['markdown-navigator-demo']],
            decls: 28,
            vars: 7,
            consts: [
              ['layout-xs', 'column', 'layout-sm', 'column', 'layout-gt-sm', 'row', 'layout-align', 'center center'],
              [
                'layout',
                'column',
                'flex',
                '30',
                'flex-xs',
                '100',
                'flex-order',
                '2',
                'flex-order-gt-sm',
                '1',
                1,
                'pad-bottom-lg',
              ],
              ['layout', 'column', 1, 'push-bottom-sm', 3, 'ngModel', 'ngModelChange', 'change'],
              [3, 'value', 4, 'ngFor', 'ngForOf'],
              ['layout-xs', 'column', 'flex-xs', '100', 'layout-align-xs', 'start start'],
              ['mat-raised-button', '', 'color', 'accent', 1, 'text-upper', 'push-bottom', 3, 'click'],
              ['mat-raised-button', '', 'color', 'none', 1, 'text-upper', 3, 'click'],
              ['flex', '', 3, 'language', 'ngModel', 'ngModelChange'],
              [
                'flex-gt-sm',
                '50',
                'layout',
                'column',
                'flex-order-sm',
                '1',
                'flex-order-xs',
                '1',
                'flex-order-gt-sm',
                '2',
                1,
                'demo-markdown-container',
              ],
              [1, 'mat-card', 'mat-elevation-z4', 'overflow-scroll', 3, 'items'],
              [3, 'value'],
            ],
            template: function(t, e) {
              1 & t &&
                (m.Tc(0, '\n'),
                m.Yb(1, 'div', 0),
                m.Tc(2, '\n  '),
                m.Yb(3, 'div', 1),
                m.Tc(4, '\n    '),
                m.Yb(5, 'mat-radio-group', 2),
                m.gc('ngModelChange', function(t) {
                  return (e.selected = t);
                })('change', function(t) {
                  return e.selectOption();
                }),
                m.Tc(6, '\n      '),
                m.Rc(7, f, 4, 2, 'mat-radio-button', 3),
                m.Tc(8, '\n    '),
                m.Wb(),
                m.Tc(9, '\n    '),
                m.Yb(10, 'div', 4),
                m.Tc(11, '\n      '),
                m.Yb(12, 'button', 5),
                m.gc('click', function(t) {
                  return e.applyInput();
                }),
                m.Tc(13, 'Try'),
                m.Wb(),
                m.Tc(14, '\n      '),
                m.Yb(15, 'button', 6),
                m.gc('click', function(t) {
                  return e.openWindow();
                }),
                m.Tc(16, '\n        Open Draggable Window\n      '),
                m.Wb(),
                m.Tc(17, '\n    '),
                m.Wb(),
                m.Tc(18, '\n    '),
                m.Yb(19, 'td-code-editor', 7),
                m.gc('ngModelChange', function(t) {
                  return (e.currentTree = t);
                }),
                m.Wb(),
                m.Tc(20, '\n  '),
                m.Wb(),
                m.Tc(21, '\n  '),
                m.Yb(22, 'div', 8),
                m.Tc(23, '\n      '),
                m.Tb(24, 'td-markdown-navigator', 9),
                m.Tc(25, '\n  '),
                m.Wb(),
                m.Tc(26, '\n'),
                m.Wb(),
                m.Tc(27, '\n')),
                2 & t &&
                  (m.Db(5),
                  m.qc('ngModel', e.selected),
                  m.Db(2),
                  m.qc('ngForOf', e.options),
                  m.Db(12),
                  m.Pc('height', 200, 'px'),
                  m.qc('language', 'json')('ngModel', e.currentTree),
                  m.Db(5),
                  m.Pc('height', 450, 'px'),
                  m.qc('items', e.currentTree));
            },
            directives: [a.b, s.l, s.o, o.s, g.b, b.a, h.a, a.a],
            styles: [
              'mat-radio-button[_ngcontent-%COMP%]{margin:8px}.demo-markdown-container[_ngcontent-%COMP%], [_nghost-%COMP%]{width:100%}.demo-markdown-container[_ngcontent-%COMP%]{max-width:400px}',
            ],
          })),
          w),
        x = n('XkJo'),
        M = n('lDlI'),
        W = n('dE5l');
      n.d(e, 'MarkdownNavigatorDemoModule', function() {
        return _;
      });
      var O,
        D = Object(u.c)({ overviewDemoComponent: C, id: 'markdown-navigator' }),
        _ =
          (((O = function t() {
            _classCallCheck(this, t);
          }).ɵmod = m.Qb({ type: O })),
          (O.ɵinj = m.Pb({
            factory: function(t) {
              return new (t || O)();
            },
            providers: [],
            imports: [[o.c, W.a, i.e, g.c, a.c, c.b, l.f, s.h, s.p, d.a, x.a, M.a, p.a, r.f.forChild(D)]],
          })),
          O);
    },
  },
]);
