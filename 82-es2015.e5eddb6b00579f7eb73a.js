(window.webpackJsonp = window.webpackJsonp || []).push([
  [82],
  {
    n4Pm: function(e, t, r) {
      'use strict';
      r.r(t);
      var o = r('ofXK'),
        n = r('fXoL'),
        s = r('7yon');
      let a = (() => {
        class e {
          constructor() {
            this.data = {
              stringProperty: 'This is a string',
              dateProperty: new Date(),
              numberProperty: 1e4,
              booleanProperty: !0,
              numberArray: [1, 2, 3, 4, 5, 6],
              arrayOfArrays: [
                [1, [2, 3]],
                [3, 4],
              ],
              objectArray: [{ prop: void 0 }, {}],
              functionProperty: (e, t) => {},
              undefinedProperty: void 0,
              longNameeeeeeeeeeeProoooopeeeeeeeeeeertyy: 'got truncated',
              emptyObject: {},
              emptyArray: [],
            };
          }
        }
        return (
          (e.ɵfac = function(t) {
            return new (t || e)();
          }),
          (e.ɵcmp = n.Mb({
            type: e,
            selectors: [['json-formatter-demo-basic']],
            decls: 1,
            vars: 2,
            consts: [[3, 'data', 'levelsOpen']],
            template: function(e, t) {
              1 & e && n.Tb(0, 'td-json-formatter', 0), 2 & e && n.qc('data', t.data)('levelsOpen', 2);
            },
            directives: [s.a],
            styles: [''],
          })),
          e
        );
      })();
      var c = r('ZSBC'),
        i = r('MJ5V');
      let d = (() => {
        class e {}
        return (
          (e.ɵfac = function(t) {
            return new (t || e)();
          }),
          (e.ɵcmp = n.Mb({
            type: e,
            selectors: [['json-formatter-demo']],
            decls: 2,
            vars: 1,
            consts: [[3, 'demoId']],
            template: function(e, t) {
              1 & e && (n.Yb(0, 'demo-component', 0), n.Tb(1, 'json-formatter-demo-basic'), n.Wb()),
                2 & e && n.qc('demoId', 'json-formatter-demo-basic');
            },
            directives: [i.a, a],
            styles: [''],
          })),
          e
        );
      })();
      var p = r('tyNb');
      const m = [{ path: '', component: d }];
      let u = (() => {
        class e {}
        return (
          (e.ɵmod = n.Qb({ type: e })),
          (e.ɵinj = n.Pb({
            factory: function(t) {
              return new (t || e)();
            },
            imports: [[p.f.forChild(m)], p.f],
          })),
          e
        );
      })();
      var f = r('Krbs');
      r.d(t, 'JsonFormatterDemoModule', function() {
        return y;
      });
      let y = (() => {
        class e {}
        return (
          (e.ɵmod = n.Qb({ type: e })),
          (e.ɵinj = n.Pb({
            factory: function(t) {
              return new (t || e)();
            },
            imports: [[f.a, u, c.a, o.c]],
          })),
          e
        );
      })();
    },
  },
]);
