(window.webpackJsonp = window.webpackJsonp || []).push([
  [81],
  {
    C8DH: function(n, e, t) {
      'use strict';
      t.r(e);
      var o = t('ofXK'),
        i = t('fXoL'),
        s = t('P3Mj');
      let c = (() => {
        class n {}
        return (
          (n.ɵfac = function(e) {
            return new (e || n)();
          }),
          (n.ɵcmp = i.Mb({
            type: n,
            selectors: [['highlight-demo-basic']],
            decls: 4,
            vars: 0,
            consts: [['lang', 'css']],
            template: function(n, e) {
              1 & n &&
                (i.Yb(0, 'td-highlight', 0),
                i.Tc(1, '    \n    '),
                i.Tc(
                  2,
                  '   \n      pre {\n        display: block;\n        overflow-x: auto;\n        padding: 0;\n        margin: 0;\n        background: #002451;\n        color: white;\n        font-family: Menlo, Monaco, "Andale Mono", "lucida console", "Courier New", monospace;\n        line-height: 1.45;\n        tab-size: 2;\n        -webkit-font-smoothing: auto;\n        -webkit-text-size-adjust: none;\n        position: relative;\n        border-radius: 2px;\n      }\n    ',
                ),
                i.Tc(3, '\n  '),
                i.Wb());
            },
            directives: [s.a],
            styles: [''],
          })),
          n
        );
      })();
      var r = t('XkJo'),
        a = t('MJ5V');
      let l = (() => {
        class n {}
        return (
          (n.ɵfac = function(e) {
            return new (e || n)();
          }),
          (n.ɵcmp = i.Mb({
            type: n,
            selectors: [['highlight-demo']],
            decls: 2,
            vars: 1,
            consts: [[3, 'demoId']],
            template: function(n, e) {
              1 & n && (i.Yb(0, 'demo-component', 0), i.Tb(1, 'highlight-demo-basic'), i.Wb()),
                2 & n && i.qc('demoId', 'highlight-demo-basic');
            },
            directives: [a.a, c],
            styles: [''],
          })),
          n
        );
      })();
      var d = t('tyNb');
      const u = [{ path: '', component: l }];
      let b = (() => {
        class n {}
        return (
          (n.ɵmod = i.Qb({ type: n })),
          (n.ɵinj = i.Pb({
            factory: function(e) {
              return new (e || n)();
            },
            imports: [[d.f.forChild(u)], d.f],
          })),
          n
        );
      })();
      var h = t('Krbs');
      t.d(e, 'HighlightDemoModule', function() {
        return p;
      });
      let p = (() => {
        class n {}
        return (
          (n.ɵmod = i.Qb({ type: n })),
          (n.ɵinj = i.Pb({
            factory: function(e) {
              return new (e || n)();
            },
            imports: [[h.a, b, r.a, o.c]],
          })),
          n
        );
      })();
    },
  },
]);
