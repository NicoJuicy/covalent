(window.webpackJsonp = window.webpackJsonp || []).push([
  [89],
  {
    '6ut1': function(t, e, n) {
      'use strict';
      n.r(e);
      var o = n('ofXK'),
        a = n('fXoL'),
        r = n('qeof'),
        c = n('80CR'),
        i = n('bTqV');
      function d(t, e) {
        1 & t &&
          (a.Yb(0, 'div'),
          a.Tc(1, '\n    '),
          a.Yb(2, 'div', 3),
          a.Tc(3, '\n        loading content...\n    '),
          a.Wb(),
          a.Tc(4, '\n'),
          a.Wb());
      }
      let s = (() => {
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
            return new (e || t)(a.Sb(r.b));
          }),
          (t.ɵcmp = a.Mb({
            type: t,
            selectors: [['loading-demo-basic']],
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
                (a.Rc(0, d, 5, 0, 'div', 0),
                a.Tc(1, '\n'),
                a.Yb(2, 'div', 1),
                a.Tc(3, '\n  '),
                a.Yb(4, 'button', 2),
                a.gc('click', function(t) {
                  return e.toggleOverlayStarSyntax();
                }),
                a.Tc(5, 'Toggle Loader'),
                a.Wb(),
                a.Tc(6, '\n'),
                a.Wb()),
                2 & t &&
                  a.qc('tdLoading', 'overlayStarSyntax')('tdLoadingMode', 'indeterminate')('tdLoadingType', 'circle')(
                    'tdLoadingStrategy',
                    'overlay',
                  )('tdLoadingColor', 'accent');
            },
            directives: [c.a, i.b],
            styles: [''],
          })),
          t
        );
      })();
      var l = n('MJ5V');
      let y = (() => {
        class t {}
        return (
          (t.ɵfac = function(e) {
            return new (e || t)();
          }),
          (t.ɵcmp = a.Mb({
            type: t,
            selectors: [['loading-demo']],
            decls: 2,
            vars: 1,
            consts: [[3, 'demoId']],
            template: function(t, e) {
              1 & t && (a.Yb(0, 'demo-component', 0), a.Tb(1, 'loading-demo-basic'), a.Wb()),
                2 & t && a.qc('demoId', 'loading-demo-basic');
            },
            directives: [l.a, s],
            styles: [''],
          })),
          t
        );
      })();
      var b = n('tyNb');
      const g = [{ path: '', component: y }];
      let u = (() => {
        class t {}
        return (
          (t.ɵmod = a.Qb({ type: t })),
          (t.ɵinj = a.Pb({
            factory: function(e) {
              return new (e || t)();
            },
            imports: [[b.f.forChild(g)], b.f],
          })),
          t
        );
      })();
      var v = n('Krbs');
      n.d(e, 'LoadingDemoModule', function() {
        return p;
      });
      let p = (() => {
        class t {}
        return (
          (t.ɵmod = a.Qb({ type: t })),
          (t.ɵinj = a.Pb({
            factory: function(e) {
              return new (e || t)();
            },
            imports: [[v.a, u, r.a, o.c, i.c]],
          })),
          t
        );
      })();
    },
  },
]);
