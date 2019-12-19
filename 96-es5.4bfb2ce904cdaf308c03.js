function _classCallCheck(n, t) {
  if (!(n instanceof t)) throw new TypeError('Cannot call a class as a function');
}
(window.webpackJsonp = window.webpackJsonp || []).push([
  [96],
  {
    A3cJ: function(n, t, c) {
      'use strict';
      c.r(t);
      var e,
        a,
        o,
        s = c('ofXK'),
        i = c('fXoL'),
        r = c('mOPi'),
        l =
          (((e = function n() {
            _classCallCheck(this, n);
          }).ɵfac = function(n) {
            return new (n || e)();
          }),
          (e.ɵcmp = i.Mb({
            type: e,
            selectors: [['paging-demo-basic']],
            decls: 3,
            vars: 5,
            consts: [
              [3, 'firstLast', 'pageSize', 'total'],
              ['pagingBar', ''],
            ],
            template: function(n, t) {
              if ((1 & n && (i.Yb(0, 'td-paging-bar', 0, 1), i.Tc(2), i.Wb()), 2 & n)) {
                var c = i.Fc(1);
                i.qc('firstLast', !0)('pageSize', 100)('total', 1345),
                  i.Db(2),
                  i.Wc('\n    ', c.range, ' of ', c.total, '\n');
              }
            },
            directives: [r.a],
            styles: [''],
          })),
          e),
        f = c('nCcV'),
        p = c('MJ5V'),
        u =
          (((a = function n() {
            _classCallCheck(this, n);
          }).ɵfac = function(n) {
            return new (n || a)();
          }),
          (a.ɵcmp = i.Mb({
            type: a,
            selectors: [['paging-demo']],
            decls: 2,
            vars: 1,
            consts: [[3, 'demoId']],
            template: function(n, t) {
              1 & n && (i.Yb(0, 'demo-component', 0), i.Tb(1, 'paging-demo-basic'), i.Wb()),
                2 & n && i.qc('demoId', 'paging-demo-basic');
            },
            directives: [p.a, l],
            styles: [''],
          })),
          a),
        d = c('tyNb'),
        b = [{ path: '', component: u }],
        m =
          (((o = function n() {
            _classCallCheck(this, n);
          }).ɵmod = i.Qb({ type: o })),
          (o.ɵinj = i.Pb({
            factory: function(n) {
              return new (n || o)();
            },
            imports: [[d.f.forChild(b)], d.f],
          })),
          o),
        g = c('Krbs');
      c.d(t, 'PagingDemoModule', function() {
        return C;
      });
      var h,
        C =
          (((h = function n() {
            _classCallCheck(this, n);
          }).ɵmod = i.Qb({ type: h })),
          (h.ɵinj = i.Pb({
            factory: function(n) {
              return new (n || h)();
            },
            imports: [[g.a, m, f.a, s.c]],
          })),
          h);
    },
  },
]);
