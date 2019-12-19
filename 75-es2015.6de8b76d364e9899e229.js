(window.webpackJsonp = window.webpackJsonp || []).push([
  [75],
  {
    mTnQ: function(e, t, n) {
      'use strict';
      n.r(t);
      var o = n('ofXK'),
        r = n('fXoL'),
        d = n('uBmD'),
        c = n('3Pt+');
      let s = (() => {
        class e {
          constructor() {
            this.editorVal =
              '\n  SELECT department_number, sampleid \n  FROM department\n  SAMPLE .25, .25, .50\n  ORDER BY sampleid;\n  \n  SELECT department_number, sampleid \n  FROM department\n  SAMPLE  3, 5, 8\n  ORDER BY sampleid;\n  ';
          }
        }
        return (
          (e.ɵfac = function(t) {
            return new (t || e)();
          }),
          (e.ɵcmp = r.Mb({
            type: e,
            selectors: [['code-editor-demo-basic']],
            decls: 1,
            vars: 2,
            consts: [['flex', '', 1, 'editor', 2, 'height', '300px', 3, 'language', 'ngModel', 'ngModelChange']],
            template: function(e, t) {
              1 & e &&
                (r.Yb(0, 'td-code-editor', 0),
                r.gc('ngModelChange', function(e) {
                  return (t.editorVal = e);
                }),
                r.Wb()),
                2 & e && r.qc('language', 'sql')('ngModel', t.editorVal);
            },
            directives: [d.a, c.l, c.o],
            styles: [''],
          })),
          e
        );
      })();
      var a = n('lDlI'),
        i = n('MJ5V');
      let l = (() => {
        class e {}
        return (
          (e.ɵfac = function(t) {
            return new (t || e)();
          }),
          (e.ɵcmp = r.Mb({
            type: e,
            selectors: [['code-editor-demo']],
            decls: 2,
            vars: 1,
            consts: [[3, 'demoId']],
            template: function(e, t) {
              1 & e && (r.Yb(0, 'demo-component', 0), r.Tb(1, 'code-editor-demo-basic'), r.Wb()),
                2 & e && r.qc('demoId', 'code-editor-demo-basic');
            },
            directives: [i.a, s],
            styles: [''],
          })),
          e
        );
      })();
      var m = n('tyNb');
      const u = [{ path: '', component: l }];
      let p = (() => {
        class e {}
        return (
          (e.ɵmod = r.Qb({ type: e })),
          (e.ɵinj = r.Pb({
            factory: function(t) {
              return new (t || e)();
            },
            imports: [[m.f.forChild(u)], m.f],
          })),
          e
        );
      })();
      var b = n('Krbs');
      n.d(t, 'CodeEditorDemoModule', function() {
        return f;
      });
      let f = (() => {
        class e {}
        return (
          (e.ɵmod = r.Qb({ type: e })),
          (e.ɵinj = r.Pb({
            factory: function(t) {
              return new (t || e)();
            },
            imports: [[b.a, p, a.a, o.c, c.h]],
          })),
          e
        );
      })();
    },
  },
]);
