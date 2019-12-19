(window.webpackJsonp = window.webpackJsonp || []).push([
  [105],
  {
    MPz5: function(e, t, n) {
      'use strict';
      n.r(t);
      var o = n('ofXK'),
        r = n('d3UM'),
        c = n('NFeN'),
        s = n('rDig'),
        a = n('Qk+/'),
        d = n('NEPT'),
        i = n('9TPg'),
        b = n('fXoL'),
        u = n('MJ5V'),
        m = n('THUg');
      let p = (() => {
        class e {}
        return (
          (e.ɵfac = function(t) {
            return new (t || e)();
          }),
          (e.ɵcmp = b.Mb({
            type: e,
            selectors: [['tree-demo']],
            decls: 2,
            vars: 1,
            consts: [[3, 'demoId']],
            template: function(e, t) {
              1 & e && (b.Yb(0, 'demo-component', 0), b.Tb(1, 'tree-demo-basic'), b.Wb()),
                2 & e && b.qc('demoId', 'tree-demo-basic');
            },
            directives: [u.a, m.a],
            styles: [''],
          })),
          e
        );
      })();
      var f = n('tyNb');
      const l = [{ path: '', component: p }];
      let w = (() => {
        class e {}
        return (
          (e.ɵmod = b.Qb({ type: e })),
          (e.ɵinj = b.Pb({
            factory: function(t) {
              return new (t || e)();
            },
            imports: [[f.f.forChild(l)], f.f],
          })),
          e
        );
      })();
      var y = n('Krbs'),
        v = n('dY1w');
      n.d(t, 'TreeDemoModule', function() {
        return M;
      });
      let M = (() => {
        class e {}
        return (
          (e.ɵmod = b.Qb({ type: e })),
          (e.ɵinj = b.Pb({
            factory: function(t) {
              return new (t || e)();
            },
            imports: [[v.a, y.a, w, s.a, a.a, d.a, i.a, o.c, r.b, c.b]],
          })),
          e
        );
      })();
    },
  },
]);
