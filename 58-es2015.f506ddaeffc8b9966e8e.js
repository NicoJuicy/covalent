(window.webpackJsonp = window.webpackJsonp || []).push([
  [58],
  {
    auPP: function(e, t, o) {
      'use strict';
      o.r(t);
      var n = o('ofXK'),
        s = o('tyNb'),
        a = o('NFeN'),
        r = o('eTLM'),
        c = o('Q3DV'),
        b = o('fXoL'),
        i = o('GvbB'),
        u = o('bTqV');
      let l = (() => {
        class e {}
        return (
          (e.ɵfac = function(t) {
            return new (t || e)();
          }),
          (e.ɵcmp = b.Mb({
            type: e,
            selectors: [['message-demo']],
            decls: 7,
            vars: 0,
            consts: [
              [
                'label',
                'Info',
                'sublabel',
                'Maybe you want to know this',
                'color',
                'accent',
                'icon',
                'info',
                1,
                'push-bottom',
              ],
              ['label', 'Warning!', 'sublabel', "Your probably shouldn't do that!", 'color', 'warn', 'icon', 'warning'],
              ['td-message-actions', '', 'mat-button', ''],
            ],
            template: function(e, t) {
              1 & e &&
                (b.Tb(0, 'td-message', 0),
                b.Tc(1, '\n'),
                b.Yb(2, 'td-message', 1),
                b.Tc(3, '\n    '),
                b.Yb(4, 'button', 2),
                b.Tc(5, 'VIEW MORE'),
                b.Wb(),
                b.Tc(6, '\n  '),
                b.Wb());
            },
            directives: [i.a, u.b],
            styles: ['[_nghost-%COMP%]{width:70%}'],
          })),
          e
        );
      })();
      var d = o('e4Sf'),
        f = o('dE5l'),
        p = o('XkJo');
      o.d(t, 'MessageDemoModule', function() {
        return w;
      });
      const m = Object(c.c)({ overviewDemoComponent: l, id: 'message' });
      let w = (() => {
        class e {}
        return (
          (e.ɵmod = b.Qb({ type: e })),
          (e.ɵinj = b.Pb({
            factory: function(t) {
              return new (t || e)();
            },
            providers: [],
            imports: [[n.c, f.a, a.b, u.c, r.a, d.a, p.a, s.f.forChild(m)]],
          })),
          e
        );
      })();
    },
    eTLM: function(e, t, o) {
      'use strict';
      o.d(t, 'a', function() {
        return d;
      });
      var n = o('ofXK'),
        s = o('tyNb'),
        a = o('wZkO'),
        r = o('NFeN'),
        c = o('Wp6s'),
        b = o('sHJK'),
        i = o('ZI6o'),
        u = (o('p6QC'), o('SNPZ'), o('dE5l')),
        l = o('fXoL');
      let d = (() => {
        class e {}
        return (
          (e.ɵmod = l.Qb({ type: e })),
          (e.ɵinj = l.Pb({
            factory: function(t) {
              return new (t || e)();
            },
            providers: [],
            imports: [[n.c, s.f, r.b, c.e, a.f, i.a, b.a, u.a]],
          })),
          e
        );
      })();
    },
  },
]);
