function _classCallCheck(e, n) {
  if (!(e instanceof n)) throw new TypeError('Cannot call a class as a function');
}
(window.webpackJsonp = window.webpackJsonp || []).push([
  [42],
  {
    eTLM: function(e, n, t) {
      'use strict';
      t.d(n, 'a', function() {
        return f;
      });
      var o = t('ofXK'),
        r = t('tyNb'),
        a = t('wZkO'),
        i = t('NFeN'),
        c = t('Wp6s'),
        s = t('sHJK'),
        d = t('ZI6o'),
        l = (t('p6QC'), t('SNPZ'), t('dE5l')),
        u = t('fXoL'),
        f = (function() {
          var e = function e() {
            _classCallCheck(this, e);
          };
          return (
            (e.ɵmod = u.Qb({ type: e })),
            (e.ɵinj = u.Pb({
              factory: function(n) {
                return new (n || e)();
              },
              providers: [],
              imports: [[o.c, r.f, i.b, c.e, a.f, d.a, s.a, l.a]],
            })),
            e
          );
        })();
    },
    xntv: function(e, n, t) {
      'use strict';
      t.r(n);
      var o,
        r = t('ofXK'),
        a = t('tyNb'),
        i = t('d3UM'),
        c = t('NFeN'),
        s = t('3Pt+'),
        d = t('lDlI'),
        l = t('eTLM'),
        u = t('Q3DV'),
        f = t('fXoL'),
        p = t('uBmD'),
        m =
          (((o = function e() {
            _classCallCheck(this, e),
              (this.editorVal =
                '\n  SELECT department_number, sampleid \n  FROM department\n  SAMPLE .25, .25, .50\n  ORDER BY sampleid;\n  \n  SELECT department_number, sampleid \n  FROM department\n  SAMPLE  3, 5, 8\n  ORDER BY sampleid;\n  ');
          }).ɵfac = function(e) {
            return new (e || o)();
          }),
          (o.ɵcmp = f.Mb({
            type: o,
            selectors: [['code-editor-demo']],
            decls: 2,
            vars: 2,
            consts: [
              [
                'flex',
                '',
                1,
                'editor',
                2,
                'height',
                '350px',
                'width',
                '750px',
                3,
                'language',
                'ngModel',
                'ngModelChange',
              ],
            ],
            template: function(e, n) {
              1 & e &&
                (f.Yb(0, 'td-code-editor', 0),
                f.gc('ngModelChange', function(e) {
                  return (n.editorVal = e);
                }),
                f.Wb(),
                f.Tc(1, '\n')),
                2 & e && f.qc('language', 'sql')('ngModel', n.editorVal);
            },
            directives: [p.a, s.l, s.o],
            styles: [''],
          })),
          o);
      t.d(n, 'CodeEditorDemoModule', function() {
        return C;
      });
      var b,
        h = Object(u.c)({ overviewDemoComponent: m, id: 'code-editor' }),
        C =
          (((b = function e() {
            _classCallCheck(this, e);
          }).ɵmod = f.Qb({ type: b })),
          (b.ɵinj = f.Pb({
            factory: function(e) {
              return new (e || b)();
            },
            providers: [],
            imports: [[r.c, i.b, c.b, s.h, d.a, l.a, a.f.forChild(h)]],
          })),
          b);
    },
  },
]);
