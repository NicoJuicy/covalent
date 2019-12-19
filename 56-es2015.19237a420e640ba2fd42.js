(window.webpackJsonp = window.webpackJsonp || []).push([
  [56],
  {
    M1TA: function(t, e, n) {
      'use strict';
      n.r(e);
      var o = n('ofXK'),
        a = n('3Pt+'),
        r = n('tyNb'),
        i = n('bTqV'),
        c = n('Wp6s'),
        d = n('f0Cb'),
        s = n('kmnG'),
        l = n('NFeN'),
        y = n('qFsG'),
        b = n('MutI'),
        g = n('1jcm'),
        u = n('wZkO'),
        v = n('eTLM'),
        p = n('XkJo'),
        f = n('qeof'),
        S = n('Q3DV'),
        m = n('f3AP'),
        L = n('fXoL'),
        w = n('gw4G'),
        T = n('80CR');
      function h(t, e) {
        1 & t &&
          (L.Yb(0, 'div'),
          L.Tc(1, '\n    '),
          L.Yb(2, 'div', 3),
          L.Tc(3, '\n        loading content...\n    '),
          L.Wb(),
          L.Tc(4, '\n'),
          L.Wb());
      }
      let x = (() => {
        class t {
          constructor(t) {
            (this._loadingService = t), (this.overlayStarSyntax = !1);
          }
          toggleOverlayStarSyntax() {
            (this.overlayStarSyntax = !this.overlayStarSyntax),
              this.overlayStarSyntax
                ? this._loadingService.register('overlayStarSyntax')
                : this._loadingService.resolve('overlayStarSyntax');
          }
        }
        return (
          (t.ɵfac = function(e) {
            return new (e || t)(L.Sb(w.p));
          }),
          (t.ɵcmp = L.Mb({
            type: t,
            selectors: [['loading-demo']],
            decls: 7,
            vars: 5,
            consts: [
              [4, 'tdLoading', 'tdLoadingMode', 'tdLoadingType', 'tdLoadingStrategy', 'tdLoadingColor'],
              ['layout', 'row'],
              ['mat-raised-button', '', 'color', 'primary', 1, 'text-upper', 3, 'click'],
              [1, 'pad', 'text-center'],
            ],
            template: function(t, e) {
              1 & t &&
                (L.Rc(0, h, 5, 0, 'div', 0),
                L.Tc(1, '\n'),
                L.Yb(2, 'div', 1),
                L.Tc(3, '\n  '),
                L.Yb(4, 'button', 2),
                L.gc('click', function(t) {
                  return e.toggleOverlayStarSyntax();
                }),
                L.Tc(5, 'Toggle Loader'),
                L.Wb(),
                L.Tc(6, '\n'),
                L.Wb()),
                2 & t &&
                  L.qc('tdLoading', 'overlayStarSyntax')('tdLoadingMode', 'indeterminate')('tdLoadingType', 'circle')(
                    'tdLoadingStrategy',
                    'overlay',
                  )('tdLoadingColor', 'accent');
            },
            directives: [T.a, i.b],
            styles: [''],
            data: { animation: [m.b] },
            changeDetection: 0,
          })),
          t
        );
      })();
      var k = n('dE5l');
      n.d(e, 'LoadingDemoModule', function() {
        return C;
      });
      const M = Object(S.c)({ overviewDemoComponent: x, id: 'loading' });
      let C = (() => {
        class t {}
        return (
          (t.ɵmod = L.Qb({ type: t })),
          (t.ɵinj = L.Pb({
            factory: function(e) {
              return new (e || t)();
            },
            providers: [],
            imports: [
              [o.c, a.h, a.p, i.c, c.e, d.b, s.d, l.b, y.c, b.e, g.b, u.f, k.a, v.a, p.a, f.a, r.f.forChild(M)],
            ],
          })),
          t
        );
      })();
    },
    eTLM: function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return b;
      });
      var o = n('ofXK'),
        a = n('tyNb'),
        r = n('wZkO'),
        i = n('NFeN'),
        c = n('Wp6s'),
        d = n('sHJK'),
        s = n('ZI6o'),
        l = (n('p6QC'), n('SNPZ'), n('dE5l')),
        y = n('fXoL');
      let b = (() => {
        class t {}
        return (
          (t.ɵmod = y.Qb({ type: t })),
          (t.ɵinj = y.Pb({
            factory: function(e) {
              return new (e || t)();
            },
            providers: [],
            imports: [[o.c, a.f, i.b, c.e, r.f, s.a, d.a, l.a]],
          })),
          t
        );
      })();
    },
  },
]);
