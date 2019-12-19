(window.webpackJsonp = window.webpackJsonp || []).push([
  [48],
  {
    OGK2: function(n, e, o) {
      'use strict';
      o.r(e);
      var t = o('ofXK'),
        i = o('tyNb'),
        r = o('Wp6s'),
        s = o('f0Cb'),
        c = o('eTLM'),
        a = o('XkJo'),
        l = o('Q3DV'),
        d = o('fXoL'),
        u = o('P3Mj');
      let f = (() => {
        class n {}
        return (
          (n.ɵfac = function(e) {
            return new (e || n)();
          }),
          (n.ɵcmp = d.Mb({
            type: n,
            selectors: [['highlight-demo']],
            decls: 4,
            vars: 0,
            consts: [['lang', 'css']],
            template: function(n, e) {
              1 & n &&
                (d.Yb(0, 'td-highlight', 0),
                d.Tc(1, '    \n    '),
                d.Tc(
                  2,
                  '   \n      pre {\n        display: block;\n        overflow-x: auto;\n        padding: 0;\n        margin: 0;\n        background: #002451;\n        color: white;\n        font-family: Menlo, Monaco, "Andale Mono", "lucida console", "Courier New", monospace;\n        line-height: 1.45;\n        tab-size: 2;\n        -webkit-font-smoothing: auto;\n        -webkit-text-size-adjust: none;\n        position: relative;\n        border-radius: 2px;\n      }\n    ',
                ),
                d.Tc(3, '\n  '),
                d.Wb());
            },
            directives: [u.a],
            styles: ['[_nghost-%COMP%]{width:80%}'],
          })),
          n
        );
      })();
      var p = o('dE5l');
      o.d(e, 'HighlightDemoModule', function() {
        return h;
      });
      const b = Object(l.c)({ overviewDemoComponent: f, id: 'highlight' });
      let h = (() => {
        class n {}
        return (
          (n.ɵmod = d.Qb({ type: n })),
          (n.ɵinj = d.Pb({
            factory: function(e) {
              return new (e || n)();
            },
            providers: [],
            imports: [[t.c, r.e, s.b, p.a, c.a, a.a, i.f.forChild(b)]],
          })),
          n
        );
      })();
    },
    eTLM: function(n, e, o) {
      'use strict';
      o.d(e, 'a', function() {
        return f;
      });
      var t = o('ofXK'),
        i = o('tyNb'),
        r = o('wZkO'),
        s = o('NFeN'),
        c = o('Wp6s'),
        a = o('sHJK'),
        l = o('ZI6o'),
        d = (o('p6QC'), o('SNPZ'), o('dE5l')),
        u = o('fXoL');
      let f = (() => {
        class n {}
        return (
          (n.ɵmod = u.Qb({ type: n })),
          (n.ɵinj = u.Pb({
            factory: function(e) {
              return new (e || n)();
            },
            providers: [],
            imports: [[t.c, i.f, s.b, c.e, r.f, l.a, a.a, d.a]],
          })),
          n
        );
      })();
    },
  },
]);
