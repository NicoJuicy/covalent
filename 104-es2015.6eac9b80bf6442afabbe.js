(window.webpackJsonp = window.webpackJsonp || []).push([
  [104],
  {
    lNHO: function(e, t, n) {
      'use strict';
      n.r(t);
      var o = n('ofXK'),
        r = n('d3UM'),
        a = n('NFeN'),
        c = n('rDig'),
        s = n('dhly'),
        b = n('H9+E'),
        d = n('Qk+/'),
        i = n('NEPT'),
        u = n('QQzb'),
        m = n('fXoL'),
        p = n('MJ5V'),
        f = n('uZr7');
      let l = (() => {
        class e {}
        return (
          (e.ɵfac = function(t) {
            return new (t || e)();
          }),
          (e.ɵcmp = m.Mb({
            type: e,
            selectors: [['bar-demo']],
            decls: 2,
            vars: 1,
            consts: [[3, 'demoId']],
            template: function(e, t) {
              1 & e && (m.Yb(0, 'demo-component', 0), m.Tb(1, 'bar-demo-basic'), m.Wb()),
                2 & e && m.qc('demoId', 'bar-demo-basic');
            },
            directives: [p.a, f.a],
            styles: [''],
          })),
          e
        );
      })();
      var w = n('tyNb');
      const y = [{ path: '', component: l }];
      let v = (() => {
        class e {}
        return (
          (e.ɵmod = m.Qb({ type: e })),
          (e.ɵinj = m.Pb({
            factory: function(t) {
              return new (t || e)();
            },
            imports: [[w.f.forChild(y)], w.f],
          })),
          e
        );
      })();
      var N = n('Krbs');
      n.d(t, 'BarDemoModule', function() {
        return Q;
      });
      let Q = (() => {
        class e {}
        return (
          (e.ɵmod = m.Qb({ type: e })),
          (e.ɵinj = m.Pb({
            factory: function(t) {
              return new (t || e)();
            },
            imports: [[u.a, N.a, v, c.a, s.a, b.a, d.a, i.a, o.c, r.b, a.b]],
          })),
          e
        );
      })();
    },
  },
]);
