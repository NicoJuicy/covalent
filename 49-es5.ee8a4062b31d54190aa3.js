function _classCallCheck(e, t) {
  if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
}
(window.webpackJsonp = window.webpackJsonp || []).push([
  [49],
  {
    eTLM: function(e, t, o) {
      'use strict';
      o.d(t, 'a', function() {
        return u;
      });
      var n = o('ofXK'),
        r = o('tyNb'),
        a = o('wZkO'),
        s = o('NFeN'),
        c = o('Wp6s'),
        i = o('sHJK'),
        f = o('ZI6o'),
        p = (o('p6QC'), o('SNPZ'), o('dE5l')),
        d = o('fXoL'),
        u = (function() {
          var e = function e() {
            _classCallCheck(this, e);
          };
          return (
            (e.ɵmod = d.Qb({ type: e })),
            (e.ɵinj = d.Pb({
              factory: function(t) {
                return new (t || e)();
              },
              providers: [],
              imports: [[n.c, r.f, s.b, c.e, a.f, f.a, i.a, p.a]],
            })),
            e
          );
        })();
    },
    q0n7: function(e, t, o) {
      'use strict';
      o.r(t);
      var n,
        r = o('ofXK'),
        a = o('tyNb'),
        s = o('Wp6s'),
        c = o('f0Cb'),
        i = o('eTLM'),
        f = o('XkJo'),
        p = o('ZSBC'),
        d = o('Q3DV'),
        u = o('fXoL'),
        l = o('7yon'),
        y =
          (((n = function e() {
            _classCallCheck(this, e),
              (this.data = {
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
                functionProperty: function(e, t) {},
                undefinedProperty: void 0,
                longNameeeeeeeeeeeProoooopeeeeeeeeeeertyy: 'got truncated',
                emptyObject: {},
                emptyArray: [],
              });
          }).ɵfac = function(e) {
            return new (e || n)();
          }),
          (n.ɵcmp = u.Mb({
            type: n,
            selectors: [['json-formatter-demo']],
            decls: 1,
            vars: 2,
            consts: [[1, 'pad-md', 3, 'data', 'levelsOpen']],
            template: function(e, t) {
              1 & e && u.Tb(0, 'td-json-formatter', 0), 2 & e && u.qc('data', t.data)('levelsOpen', 2);
            },
            directives: [l.a],
            styles: ['[_nghost-%COMP%]{width:100%}[_nghost-%COMP%]   td-json-formatter[_ngcontent-%COMP%]{width:100%}'],
          })),
          n),
        m = o('dE5l');
      o.d(t, 'JsonFormatterDemoModule', function() {
        return h;
      });
      var b,
        C = Object(d.c)({ overviewDemoComponent: y, id: 'json-formatter' }),
        h =
          (((b = function e() {
            _classCallCheck(this, e);
          }).ɵmod = u.Qb({ type: b })),
          (b.ɵinj = u.Pb({
            factory: function(e) {
              return new (e || b)();
            },
            providers: [],
            imports: [[r.c, s.e, c.b, m.a, i.a, f.a, p.a, a.f.forChild(C)]],
          })),
          b);
    },
  },
]);
