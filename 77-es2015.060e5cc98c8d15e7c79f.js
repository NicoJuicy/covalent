(window.webpackJsonp = window.webpackJsonp || []).push([
  [77],
  {
    THbC: function(e, t, o) {
      'use strict';
      o.r(t);
      var r = o('ofXK'),
        s = o('bTqV'),
        c = o('fXoL'),
        n = o('PWEM');
      let i = (() => {
        class e {
          constructor(e) {
            this._dialogService = e;
          }
          openAlert() {
            this._dialogService.openAlert({
              title: 'Alert',
              disableClose: !0,
              message: 'This is how simple it is to create an alert with this wrapper service.',
            });
          }
        }
        return (
          (e.ɵfac = function(t) {
            return new (t || e)(c.Sb(n.c));
          }),
          (e.ɵcmp = c.Mb({
            type: e,
            selectors: [['dialogs-demo-basic']],
            decls: 2,
            vars: 0,
            consts: [['mat-raised-button', '', 'color', 'primary', 1, 'text-upper', 3, 'click']],
            template: function(e, t) {
              1 & e &&
                (c.Yb(0, 'button', 0),
                c.gc('click', function(e) {
                  return t.openAlert();
                }),
                c.Tc(1, 'Open Alert'),
                c.Wb());
            },
            directives: [s.b],
            styles: [''],
          })),
          e
        );
      })();
      var a = o('MJ5V');
      let l = (() => {
        class e {}
        return (
          (e.ɵfac = function(t) {
            return new (t || e)();
          }),
          (e.ɵcmp = c.Mb({
            type: e,
            selectors: [['dialogs-demo']],
            decls: 2,
            vars: 1,
            consts: [[3, 'demoId']],
            template: function(e, t) {
              1 & e && (c.Yb(0, 'demo-component', 0), c.Tb(1, 'dialogs-demo-basic'), c.Wb()),
                2 & e && c.qc('demoId', 'dialogs-demo-basic');
            },
            directives: [a.a, i],
            styles: [''],
          })),
          e
        );
      })();
      var d = o('tyNb');
      const p = [{ path: '', component: l }];
      let u = (() => {
        class e {}
        return (
          (e.ɵmod = c.Qb({ type: e })),
          (e.ɵinj = c.Pb({
            factory: function(t) {
              return new (t || e)();
            },
            imports: [[d.f.forChild(p)], d.f],
          })),
          e
        );
      })();
      var b = o('Krbs');
      o.d(t, 'DialogsDemoModule', function() {
        return m;
      });
      let m = (() => {
        class e {}
        return (
          (e.ɵmod = c.Qb({ type: e })),
          (e.ɵinj = c.Pb({
            factory: function(t) {
              return new (t || e)();
            },
            imports: [[b.a, u, n.a, r.c, s.c]],
          })),
          e
        );
      })();
    },
  },
]);
