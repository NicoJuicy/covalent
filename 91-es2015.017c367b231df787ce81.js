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
        g = n('l09l'),
        p = n('bTqV'),
        b = n('uBmD'),
        h = n('qDEf');
      function v(t, e) {
        if ((1 & t && (m.Yb(0, 'mat-radio-button', 10), m.Tc(1), m.Tb(2, 'br'), m.Tc(3, '\n      '), m.Wb()), 2 & t)) {
          const t = e.$implicit;
          m.qc('value', t), m.Db(1), m.Vc('\n        ', t.name, '\n        ');
        }
      }
      function w(t) {
        return JSON.stringify(t, void 0, 4);
      }
      const f = [{ url: 'https://github.com/Teradata/covalent/blob/develop/README.md' }],
        T = [
          { url: 'https://github.com/Teradata/covalent/blob/develop/README.md', title: 'Covalent' },
          { url: 'https://raw.githubusercontent.com/angular/angular/master/README.md', title: 'Angular' },
          {
            markdownString: '\n\n# Raw markdown example\n \n> Amazing\n\n1. List\n2. of\n3. items\n\n',
            title: 'Raw markdown',
          },
        ],
        x = [
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
          T[1],
          T[2],
        ];
      let k = (() => {
        class t {
          constructor(t) {
            (this._markdownNavigatorWindowService = t),
              (this.options = [
                { name: 'Multi-level', value: x },
                { name: 'Bi-level', value: T },
                { name: 'Single-level', value: f },
              ]),
              (this.selected = this.options[0]),
              (this.currentTree = this.selected.value),
              (this.input = w(this.currentTree)),
              (this.compareByTitle = (t, e) => t.title === e.title);
          }
          get windowConfig() {
            return { items: this.currentTree, startAt: this.startAt, compareWith: this.compareByTitle };
          }
          selectOption() {
            (this.startAt = void 0), this.use(this.selected.value);
          }
          use(t) {
            (this.currentTree = t),
              (this.input = w(this.currentTree)),
              this._markdownNavigatorWindowService.isOpen && this.openWindow();
          }
          applyInput() {
            this.use(JSON.parse(this.input));
          }
          demoStartAt() {
            (this.selected = this.options[0]),
              (this.startAt = { title: 'tdLoading' }),
              this.use(JSON.parse(JSON.stringify(this.selected.value)));
          }
          openWindow() {
            this._markdownNavigatorWindowService.open(this.windowConfig);
          }
        }
        return (
          (t.ɵfac = function(e) {
            return new (e || t)(m.Sb(g.b));
          }),
          (t.ɵcmp = m.Mb({
            type: t,
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
                m.Rc(7, v, 4, 2, 'mat-radio-button', 3),
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
            directives: [a.b, s.l, s.o, o.s, p.b, b.a, h.a, a.a],
            styles: [
              'mat-radio-button[_ngcontent-%COMP%]{margin:8px}.demo-markdown-container[_ngcontent-%COMP%], [_nghost-%COMP%]{width:100%}.demo-markdown-container[_ngcontent-%COMP%]{max-width:400px}',
            ],
          })),
          t
        );
      })();
      var y = n('XkJo'),
        M = n('lDlI'),
        W = n('dE5l');
      n.d(e, 'MarkdownNavigatorDemoModule', function() {
        return D;
      });
      const C = Object(u.c)({ overviewDemoComponent: k, id: 'markdown-navigator' });
      let D = (() => {
        class t {}
        return (
          (t.ɵmod = m.Qb({ type: t })),
          (t.ɵinj = m.Pb({
            factory: function(e) {
              return new (e || t)();
            },
            providers: [],
            imports: [[o.c, W.a, i.e, p.c, a.c, c.b, l.f, s.h, s.p, d.a, y.a, M.a, g.a, r.f.forChild(C)]],
          })),
          t
        );
      })();
    },
  },
]);
