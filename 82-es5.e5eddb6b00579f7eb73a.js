function _classCallCheck(e, t) {
  if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
}
(window.webpackJsonp = window.webpackJsonp || []).push([
  [82],
  {
    n4Pm: function(e, t, o) {
      'use strict';
      o.r(t);
      var n,
        r,
        a,
        s = o('ofXK'),
        c = o('fXoL'),
        i = o('7yon'),
        f =
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
          (n.ɵcmp = c.Mb({
            type: n,
            selectors: [['json-formatter-demo-basic']],
            decls: 1,
            vars: 2,
            consts: [[3, 'data', 'levelsOpen']],
            template: function(e, t) {
              1 & e && c.Tb(0, 'td-json-formatter', 0), 2 & e && c.qc('data', t.data)('levelsOpen', 2);
            },
            directives: [i.a],
            styles: [''],
          })),
          n),
        l = o('ZSBC'),
        p = o('MJ5V'),
        d =
          (((r = function e() {
            _classCallCheck(this, e);
          }).ɵfac = function(e) {
            return new (e || r)();
          }),
          (r.ɵcmp = c.Mb({
            type: r,
            selectors: [['json-formatter-demo']],
            decls: 2,
            vars: 1,
            consts: [[3, 'demoId']],
            template: function(e, t) {
              1 & e && (c.Yb(0, 'demo-component', 0), c.Tb(1, 'json-formatter-demo-basic'), c.Wb()),
                2 & e && c.qc('demoId', 'json-formatter-demo-basic');
            },
            directives: [p.a, f],
            styles: [''],
          })),
          r),
        m = o('tyNb'),
        u = [{ path: '', component: d }],
        y =
          (((a = function e() {
            _classCallCheck(this, e);
          }).ɵmod = c.Qb({ type: a })),
          (a.ɵinj = c.Pb({
            factory: function(e) {
              return new (e || a)();
            },
            imports: [[m.f.forChild(u)], m.f],
          })),
          a),
        b = o('Krbs');
      o.d(t, 'JsonFormatterDemoModule', function() {
        return w;
      });
      var h,
        w =
          (((h = function e() {
            _classCallCheck(this, e);
          }).ɵmod = c.Qb({ type: h })),
          (h.ɵinj = c.Pb({
            factory: function(e) {
              return new (e || h)();
            },
            imports: [[b.a, y, l.a, s.c]],
          })),
          h);
    },
  },
]);
