(window.webpackJsonp = window.webpackJsonp || []).push([
  [57],
  {
    '5ffT': function(n, e, t) {
      'use strict';
      t.r(e);
      var o = t('ofXK'),
        r = t('tyNb'),
        s = t('d3UM'),
        a = t('NFeN'),
        c = t('UBqq'),
        i = t('eTLM'),
        d = t('Q3DV'),
        u = t('fXoL'),
        p = t('H4p7');
      let f = (() => {
        class n {
          jumpToH1() {
            this.anchor = 'heading-1';
          }
          jumpToH2() {
            this.anchor = 'heading-2';
          }
        }
        return (
          (n.ɵfac = function(e) {
            return new (e || n)();
          }),
          (n.ɵcmp = u.Mb({
            type: n,
            selectors: [['markdown-demo']],
            decls: 2,
            vars: 0,
            template: function(n, e) {
              1 & n &&
                (u.Yb(0, 'td-markdown'),
                u.Tc(1, '\n    # Heading (h1)\n    ## Sub Heading (H2)\n    ### Steps (H3)\n'),
                u.Wb());
            },
            directives: [p.a],
            styles: ['[_nghost-%COMP%]{width:80%}'],
          })),
          n
        );
      })();
      t.d(e, 'MarkdownDemoModule', function() {
        return w;
      });
      const b = Object(d.c)({ overviewDemoComponent: f, id: 'markdown-parser' });
      let w = (() => {
        class n {}
        return (
          (n.ɵmod = u.Qb({ type: n })),
          (n.ɵinj = u.Pb({
            factory: function(e) {
              return new (e || n)();
            },
            providers: [],
            imports: [[o.c, s.b, a.b, i.a, c.a, r.f.forChild(b)]],
          })),
          n
        );
      })();
    },
    'eTLM': function(n, e, t) {
      'use strict';
      t.d(e, 'a', function() {
        return f;
      });
      var o = t('ofXK'),
        r = t('tyNb'),
        s = t('wZkO'),
        a = t('NFeN'),
        c = t('Wp6s'),
        i = t('sHJK'),
        d = t('ZI6o'),
        u = (t('p6QC'), t('SNPZ'), t('dE5l')),
        p = t('fXoL');
      let f = (() => {
        class n {}
        return (
          (n.ɵmod = p.Qb({ type: n })),
          (n.ɵinj = p.Pb({
            factory: function(e) {
              return new (e || n)();
            },
            providers: [],
            imports: [[o.c, r.f, a.b, c.e, s.f, d.a, i.a, u.a]],
          })),
          n
        );
      })();
    },
  },
]);
