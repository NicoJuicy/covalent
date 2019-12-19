function _classCallCheck(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
}
(window.webpackJsonp = window.webpackJsonp || []).push([
  [65],
  {
    eTLM: function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return h;
      });
      var o = n('ofXK'),
        r = n('tyNb'),
        i = n('wZkO'),
        s = n('NFeN'),
        a = n('Wp6s'),
        c = n('sHJK'),
        d = n('ZI6o'),
        l = (n('p6QC'), n('SNPZ'), n('dE5l')),
        u = n('fXoL'),
        h = (function() {
          var t = function t() {
            _classCallCheck(this, t);
          };
          return (
            (t.ɵmod = u.Qb({ type: t })),
            (t.ɵinj = u.Pb({
              factory: function(e) {
                return new (e || t)();
              },
              providers: [],
              imports: [[o.c, r.f, s.b, a.e, i.f, d.a, c.a, l.a]],
            })),
            t
          );
        })();
    },
    znpD: function(t, e, n) {
      'use strict';
      n.r(e);
      var o,
        r = n('ofXK'),
        i = n('tyNb'),
        s = n('d3UM'),
        a = n('NFeN'),
        c = n('3Pt+'),
        d = n('eTLM'),
        l = n('Q3DV'),
        u = n('fXoL'),
        h = n('1Zcj'),
        b = ['editor'],
        f =
          (((o = function t() {
            _classCallCheck(this, t),
              (this.editorVal =
                "# Intro\nGo ahead, play around with the editor! Be sure to check out **bold** and *italic* styling, or even [links](https://google.com).\nYou can type the Markdown syntax, use the toolbar, or use shortcuts like 'cmd-b' or 'ctrl-b'.\n\n## Lists\nUnordered lists can be started using the toolbar or by typing '* ', '- ', or '+ '. Ordered lists can be started by typing '1. '.\n\n#### Unordered\n* Lists are a piece of cake\n* They even auto continue as you type\n* A double enter will end them\n* Tabs and shift-tabs work too\n\n#### Ordered\n1. Numbered lists...\n2. ...work too!\n\n## What about images?\n![Yes](https://i.imgur.com/sZlktY7.png)\n"),
              (this.simpleLineBreaks = !0);
          }).ɵfac = function(t) {
            return new (t || o)();
          }),
          (o.ɵcmp = u.Mb({
            type: o,
            selectors: [['text-editor-demo']],
            viewQuery: function(t, e) {
              var n;
              1 & t && u.Yc(b, !0), 2 & t && u.Ec((n = u.hc())) && (e._tdEditor = n.first);
            },
            decls: 2,
            vars: 1,
            consts: [
              [2, 'height', '100%'],
              [3, 'ngModel', 'ngModelChange'],
            ],
            template: function(t, e) {
              1 & t &&
                (u.Yb(0, 'div', 0),
                u.Yb(1, 'td-text-editor', 1),
                u.gc('ngModelChange', function(t) {
                  return (e.editorVal = t);
                }),
                u.Wb(),
                u.Wb()),
                2 & t && (u.Db(1), u.qc('ngModel', e.editorVal));
            },
            directives: [h.a, c.l, c.o],
            styles: ['.editor[_ngcontent-%COMP%]{height:200px}'],
          })),
          o),
        p = n('KIFd');
      n.d(e, 'TextEditorDemoModule', function() {
        return w;
      });
      var y,
        g = Object(l.c)({ overviewDemoComponent: f, id: 'text-editor' }),
        w =
          (((y = function t() {
            _classCallCheck(this, t);
          }).ɵmod = u.Qb({ type: y })),
          (y.ɵinj = u.Pb({
            factory: function(t) {
              return new (t || y)();
            },
            providers: [],
            imports: [[r.c, s.b, a.b, c.h, d.a, p.a, i.f.forChild(g)]],
          })),
          y);
    },
  },
]);
