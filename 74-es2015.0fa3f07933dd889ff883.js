(window.webpackJsonp = window.webpackJsonp || []).push([
  [74],
  {
    hrRY: function(e, t, n) {
      'use strict';
      n.r(t);
      var s = n('ofXK'),
        o = n('fXoL'),
        c = n('Bpzi'),
        r = n('3Pt+');
      let i = (() => {
        class e {
          constructor() {
            (this.strings = ['stepper', 'expansion-panel', 'markdown', 'highlight', 'loading']),
              (this.stringsModel = this.strings.slice(0, 2));
          }
        }
        return (
          (e.ɵfac = function(t) {
            return new (t || e)();
          }),
          (e.ɵcmp = o.Mb({
            type: e,
            selectors: [['chips-demo-basic']],
            decls: 1,
            vars: 1,
            consts: [['placeholder', 'Type here', 3, 'ngModel', 'ngModelChange']],
            template: function(e, t) {
              1 & e &&
                (o.Yb(0, 'td-chips', 0),
                o.gc('ngModelChange', function(e) {
                  return (t.stringsModel = e);
                }),
                o.Wb()),
                2 & e && o.qc('ngModel', t.stringsModel);
            },
            directives: [c.c, r.l, r.o],
            styles: [''],
          })),
          e
        );
      })();
      var a = n('9X6E'),
        l = n('MJ5V');
      let d = (() => {
        class e {}
        return (
          (e.ɵfac = function(t) {
            return new (t || e)();
          }),
          (e.ɵcmp = o.Mb({
            type: e,
            selectors: [['chips-demo']],
            decls: 2,
            vars: 1,
            consts: [[3, 'demoId']],
            template: function(e, t) {
              1 & e && (o.Yb(0, 'demo-component', 0), o.Tb(1, 'chips-demo-basic'), o.Wb()),
                2 & e && o.qc('demoId', 'chips-demo-basic');
            },
            directives: [l.a, i],
            styles: [''],
          })),
          e
        );
      })();
      var p = n('tyNb');
      const u = [{ path: '', component: d }];
      let h = (() => {
        class e {}
        return (
          (e.ɵmod = o.Qb({ type: e })),
          (e.ɵinj = o.Pb({
            factory: function(t) {
              return new (t || e)();
            },
            imports: [[p.f.forChild(u)], p.f],
          })),
          e
        );
      })();
      var m = n('Krbs');
      n.d(t, 'ChipsDemoModule', function() {
        return b;
      });
      let b = (() => {
        class e {}
        return (
          (e.ɵmod = o.Qb({ type: e })),
          (e.ɵinj = o.Pb({
            factory: function(t) {
              return new (t || e)();
            },
            imports: [[m.a, h, a.a, s.c, r.h]],
          })),
          e
        );
      })();
    },
  },
]);
