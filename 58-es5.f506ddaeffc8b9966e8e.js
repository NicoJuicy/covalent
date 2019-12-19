function _classCallCheck(n, o) {
  if (!(n instanceof o)) throw new TypeError('Cannot call a class as a function');
}
(window.webpackJsonp = window.webpackJsonp || []).push([
  [58],
  {
    auPP: function(n, o, t) {
      'use strict';
      t.r(o);
      var e,
        a = t('ofXK'),
        s = t('tyNb'),
        c = t('NFeN'),
        r = t('eTLM'),
        i = t('Q3DV'),
        l = t('fXoL'),
        u = t('GvbB'),
        b = t('bTqV'),
        f =
          (((e = function n() {
            _classCallCheck(this, n);
          }).ɵfac = function(n) {
            return new (n || e)();
          }),
          (e.ɵcmp = l.Mb({
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
            template: function(n, o) {
              1 & n &&
                (l.Tb(0, 'td-message', 0),
                l.Tc(1, '\n'),
                l.Yb(2, 'td-message', 1),
                l.Tc(3, '\n    '),
                l.Yb(4, 'button', 2),
                l.Tc(5, 'VIEW MORE'),
                l.Wb(),
                l.Tc(6, '\n  '),
                l.Wb());
            },
            directives: [u.a, b.b],
            styles: ['[_nghost-%COMP%]{width:70%}'],
          })),
          e),
        d = t('e4Sf'),
        p = t('dE5l'),
        w = t('XkJo');
      t.d(o, 'MessageDemoModule', function() {
        return C;
      });
      var m,
        h = Object(i.c)({ overviewDemoComponent: f, id: 'message' }),
        C =
          (((m = function n() {
            _classCallCheck(this, n);
          }).ɵmod = l.Qb({ type: m })),
          (m.ɵinj = l.Pb({
            factory: function(n) {
              return new (n || m)();
            },
            providers: [],
            imports: [[a.c, p.a, c.b, b.c, r.a, d.a, w.a, s.f.forChild(h)]],
          })),
          m);
    },
    eTLM: function(n, o, t) {
      'use strict';
      t.d(o, 'a', function() {
        return f;
      });
      var e = t('ofXK'),
        a = t('tyNb'),
        s = t('wZkO'),
        c = t('NFeN'),
        r = t('Wp6s'),
        i = t('sHJK'),
        l = t('ZI6o'),
        u = (t('p6QC'), t('SNPZ'), t('dE5l')),
        b = t('fXoL'),
        f = (function() {
          var n = function n() {
            _classCallCheck(this, n);
          };
          return (
            (n.ɵmod = b.Qb({ type: n })),
            (n.ɵinj = b.Pb({
              factory: function(o) {
                return new (o || n)();
              },
              providers: [],
              imports: [[e.c, a.f, c.b, r.e, s.f, l.a, i.a, u.a]],
            })),
            n
          );
        })();
    },
  },
]);
