(window.webpackJsonp = window.webpackJsonp || []).push([
  [65],
  {
    eTLM: function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return b;
      });
      var o = n('ofXK'),
        r = n('tyNb'),
        i = n('wZkO'),
        s = n('NFeN'),
        d = n('Wp6s'),
        c = n('sHJK'),
        a = n('ZI6o'),
        u = (n('p6QC'), n('SNPZ'), n('dE5l')),
        l = n('fXoL');
      let b = (() => {
        class t {}
        return (
          (t.ɵmod = l.Qb({ type: t })),
          (t.ɵinj = l.Pb({
            factory: function(e) {
              return new (e || t)();
            },
            providers: [],
            imports: [[o.c, r.f, s.b, d.e, i.f, a.a, c.a, u.a]],
          })),
          t
        );
      })();
    },
    znpD: function(t, e, n) {
      'use strict';
      n.r(e);
      var o = n('ofXK'),
        r = n('tyNb'),
        i = n('d3UM'),
        s = n('NFeN'),
        d = n('3Pt+'),
        c = n('eTLM'),
        a = n('Q3DV'),
        u = n('fXoL'),
        l = n('1Zcj');
      const b = ['editor'];
      let p = (() => {
        class t {
          constructor() {
            (this.editorVal =
              "# Intro\nGo ahead, play around with the editor! Be sure to check out **bold** and *italic* styling, or even [links](https://google.com).\nYou can type the Markdown syntax, use the toolbar, or use shortcuts like 'cmd-b' or 'ctrl-b'.\n\n## Lists\nUnordered lists can be started using the toolbar or by typing '* ', '- ', or '+ '. Ordered lists can be started by typing '1. '.\n\n#### Unordered\n* Lists are a piece of cake\n* They even auto continue as you type\n* A double enter will end them\n* Tabs and shift-tabs work too\n\n#### Ordered\n1. Numbered lists...\n2. ...work too!\n\n## What about images?\n![Yes](https://i.imgur.com/sZlktY7.png)\n"),
              (this.simpleLineBreaks = !0);
          }
        }
        return (
          (t.ɵfac = function(e) {
            return new (e || t)();
          }),
          (t.ɵcmp = u.Mb({
            type: t,
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
            directives: [l.a, d.l, d.o],
            styles: ['.editor[_ngcontent-%COMP%]{height:200px}'],
          })),
          t
        );
      })();
      var h = n('KIFd');
      n.d(e, 'TextEditorDemoModule', function() {
        return y;
      });
      const f = Object(a.c)({ overviewDemoComponent: p, id: 'text-editor' });
      let y = (() => {
        class t {}
        return (
          (t.ɵmod = u.Qb({ type: t })),
          (t.ɵinj = u.Pb({
            factory: function(e) {
              return new (e || t)();
            },
            providers: [],
            imports: [[o.c, i.b, s.b, d.h, c.a, h.a, r.f.forChild(f)]],
          })),
          t
        );
      })();
    },
  },
]);
