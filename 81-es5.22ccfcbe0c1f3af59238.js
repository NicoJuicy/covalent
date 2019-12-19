function _classCallCheck(n, o) {
  if (!(n instanceof o)) throw new TypeError('Cannot call a class as a function');
}
(window.webpackJsonp = window.webpackJsonp || []).push([
  [81],
  {
    C8DH: function(n, o, t) {
      'use strict';
      t.r(o);
      var e,
        i,
        c,
        s = t('ofXK'),
        a = t('fXoL'),
        l = t('P3Mj'),
        r =
          (((e = function n() {
            _classCallCheck(this, n);
          }).ɵfac = function(n) {
            return new (n || e)();
          }),
          (e.ɵcmp = a.Mb({
            type: e,
            selectors: [['highlight-demo-basic']],
            decls: 4,
            vars: 0,
            consts: [['lang', 'css']],
            template: function(n, o) {
              1 & n &&
                (a.Yb(0, 'td-highlight', 0),
                a.Tc(1, '    \n    '),
                a.Tc(
                  2,
                  '   \n      pre {\n        display: block;\n        overflow-x: auto;\n        padding: 0;\n        margin: 0;\n        background: #002451;\n        color: white;\n        font-family: Menlo, Monaco, "Andale Mono", "lucida console", "Courier New", monospace;\n        line-height: 1.45;\n        tab-size: 2;\n        -webkit-font-smoothing: auto;\n        -webkit-text-size-adjust: none;\n        position: relative;\n        border-radius: 2px;\n      }\n    ',
                ),
                a.Tc(3, '\n  '),
                a.Wb());
            },
            directives: [l.a],
            styles: [''],
          })),
          e),
        h = t('XkJo'),
        d = t('MJ5V'),
        f =
          (((i = function n() {
            _classCallCheck(this, n);
          }).ɵfac = function(n) {
            return new (n || i)();
          }),
          (i.ɵcmp = a.Mb({
            type: i,
            selectors: [['highlight-demo']],
            decls: 2,
            vars: 1,
            consts: [[3, 'demoId']],
            template: function(n, o) {
              1 & n && (a.Yb(0, 'demo-component', 0), a.Tb(1, 'highlight-demo-basic'), a.Wb()),
                2 & n && a.qc('demoId', 'highlight-demo-basic');
            },
            directives: [d.a, r],
            styles: [''],
          })),
          i),
        u = t('tyNb'),
        p = [{ path: '', component: f }],
        b =
          (((c = function n() {
            _classCallCheck(this, n);
          }).ɵmod = a.Qb({ type: c })),
          (c.ɵinj = a.Pb({
            factory: function(n) {
              return new (n || c)();
            },
            imports: [[u.f.forChild(p)], u.f],
          })),
          c),
        m = t('Krbs');
      t.d(o, 'HighlightDemoModule', function() {
        return w;
      });
      var g,
        w =
          (((g = function n() {
            _classCallCheck(this, n);
          }).ɵmod = a.Qb({ type: g })),
          (g.ɵinj = a.Pb({
            factory: function(n) {
              return new (n || g)();
            },
            imports: [[m.a, b, h.a, s.c]],
          })),
          g);
    },
  },
]);
