function _classCallCheck(e, n) {
  if (!(e instanceof n)) throw new TypeError('Cannot call a class as a function');
}
(window.webpackJsonp = window.webpackJsonp || []).push([
  [75],
  {
    mTnQ: function(e, n, t) {
      'use strict';
      t.r(n);
      var o,
        c,
        a,
        s = t('ofXK'),
        i = t('fXoL'),
        d = t('uBmD'),
        r = t('3Pt+'),
        l =
          (((o = function e() {
            _classCallCheck(this, e),
              (this.editorVal =
                '\n  SELECT department_number, sampleid \n  FROM department\n  SAMPLE .25, .25, .50\n  ORDER BY sampleid;\n  \n  SELECT department_number, sampleid \n  FROM department\n  SAMPLE  3, 5, 8\n  ORDER BY sampleid;\n  ');
          }).ɵfac = function(e) {
            return new (e || o)();
          }),
          (o.ɵcmp = i.Mb({
            type: o,
            selectors: [['code-editor-demo-basic']],
            decls: 1,
            vars: 2,
            consts: [['flex', '', 1, 'editor', 2, 'height', '300px', 3, 'language', 'ngModel', 'ngModelChange']],
            template: function(e, n) {
              1 & e &&
                (i.Yb(0, 'td-code-editor', 0),
                i.gc('ngModelChange', function(e) {
                  return (n.editorVal = e);
                }),
                i.Wb()),
                2 & e && i.qc('language', 'sql')('ngModel', n.editorVal);
            },
            directives: [d.a, r.l, r.o],
            styles: [''],
          })),
          o),
        m = t('lDlI'),
        u = t('MJ5V'),
        p =
          (((c = function e() {
            _classCallCheck(this, e);
          }).ɵfac = function(e) {
            return new (e || c)();
          }),
          (c.ɵcmp = i.Mb({
            type: c,
            selectors: [['code-editor-demo']],
            decls: 2,
            vars: 1,
            consts: [[3, 'demoId']],
            template: function(e, n) {
              1 & e && (i.Yb(0, 'demo-component', 0), i.Tb(1, 'code-editor-demo-basic'), i.Wb()),
                2 & e && i.qc('demoId', 'code-editor-demo-basic');
            },
            directives: [u.a, l],
            styles: [''],
          })),
          c),
        f = t('tyNb'),
        b = [{ path: '', component: p }],
        h =
          (((a = function e() {
            _classCallCheck(this, e);
          }).ɵmod = i.Qb({ type: a })),
          (a.ɵinj = i.Pb({
            factory: function(e) {
              return new (e || a)();
            },
            imports: [[f.f.forChild(b)], f.f],
          })),
          a),
        C = t('Krbs');
      t.d(n, 'CodeEditorDemoModule', function() {
        return w;
      });
      var g,
        w =
          (((g = function e() {
            _classCallCheck(this, e);
          }).ɵmod = i.Qb({ type: g })),
          (g.ɵinj = i.Pb({
            factory: function(e) {
              return new (e || g)();
            },
            imports: [[C.a, h, m.a, s.c, r.h]],
          })),
          g);
    },
  },
]);
