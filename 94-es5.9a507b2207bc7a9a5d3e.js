function _classCallCheck(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
}
(window.webpackJsonp = window.webpackJsonp || []).push([
  [94],
  {
    cyhw: function(t, e, n) {
      'use strict';
      n.r(e);
      var c,
        i,
        s,
        o = n('ofXK'),
        r = n('fXoL'),
        a = n('2Fvg'),
        u = n('tyNb'),
        l = n('8XMI'),
        p = function() {
          return { exact: !0 };
        },
        v = function() {
          return ['/components', 'nav-steps'];
        },
        b = function() {
          return ['/components', 'nav-steps', 'route2'];
        },
        d = function() {
          return ['/components', 'nav-steps', 'route3'];
        },
        f =
          (((c = function t() {
            _classCallCheck(this, t);
          }).ɵfac = function(t) {
            return new (t || c)();
          }),
          (c.ɵcmp = r.Mb({
            type: c,
            selectors: [['nav-steps-demo-basic']],
            decls: 11,
            vars: 23,
            consts: [
              ['td-steps', '', 'horizontal', ''],
              [
                'td-step-link',
                '',
                'routerLinkActive',
                '',
                3,
                'routerLinkActiveOptions',
                'routerLink',
                'state',
                'label',
                'sublabel',
                'active',
              ],
              ['rla', 'routerLinkActive'],
              [
                'td-step-link',
                '',
                'routerLinkActive',
                '',
                3,
                'routerLinkActiveOptions',
                'routerLink',
                'state',
                'label',
                'disabled',
                'active',
              ],
              ['rla2', 'routerLinkActive'],
              [
                'td-step-link',
                '',
                'routerLinkActive',
                '',
                3,
                'routerLinkActiveOptions',
                'routerLink',
                'state',
                'label',
                'active',
              ],
              ['rla3', 'routerLinkActive'],
            ],
            template: function(t, e) {
              if (
                (1 & t &&
                  (r.Yb(0, 'nav', 0),
                  r.Tc(1, '\n        '),
                  r.Tb(2, 'a', 1, 2),
                  r.Tc(4, '\n        '),
                  r.Tb(5, 'a', 3, 4),
                  r.Tc(7, '\n        '),
                  r.Tb(8, 'a', 5, 6),
                  r.Tc(10, '\n'),
                  r.Wb()),
                2 & t)
              ) {
                var n = r.Fc(3),
                  c = r.Fc(6),
                  i = r.Fc(9);
                r.Db(2),
                  r.qc('routerLinkActiveOptions', r.uc(17, p))('routerLink', r.uc(18, v))('state', 'complete')(
                    'label',
                    '1st step',
                  )('sublabel', 'some description')('active', n.isActive),
                  r.Db(3),
                  r.qc('routerLinkActiveOptions', r.uc(19, p))('routerLink', r.uc(20, b))('state', 'complete')(
                    'label',
                    '2nd step',
                  )('disabled', !0)('active', c.isActive),
                  r.Db(3),
                  r.qc('routerLinkActiveOptions', r.uc(21, p))('routerLink', r.uc(22, d))('state', 'required')(
                    'label',
                    '3rd step',
                  )('active', i.isActive);
              }
            },
            directives: [a.a, u.e, l.a, u.d],
            styles: [''],
          })),
          c),
        k = n('ezQP'),
        m = n('MJ5V'),
        L = [
          {
            path: '',
            component:
              ((i = function t() {
                _classCallCheck(this, t);
              }),
              (i.ɵfac = function(t) {
                return new (t || i)();
              }),
              (i.ɵcmp = r.Mb({
                type: i,
                selectors: [['nav-steps-demo']],
                decls: 2,
                vars: 1,
                consts: [[3, 'demoId']],
                template: function(t, e) {
                  1 & t && (r.Yb(0, 'demo-component', 0), r.Tb(1, 'nav-steps-demo-basic'), r.Wb()),
                    2 & t && r.qc('demoId', 'nav-steps-demo-basic');
                },
                directives: [m.a, f],
                styles: [''],
              })),
              i),
          },
        ],
        h =
          (((s = function t() {
            _classCallCheck(this, t);
          }).ɵmod = r.Qb({ type: s })),
          (s.ɵinj = r.Pb({
            factory: function(t) {
              return new (t || s)();
            },
            imports: [[u.f.forChild(L)], u.f],
          })),
          s),
        A = n('Krbs');
      n.d(e, 'NavStepsDemoModule', function() {
        return C;
      });
      var w,
        C =
          (((w = function t() {
            _classCallCheck(this, t);
          }).ɵmod = r.Qb({ type: w })),
          (w.ɵinj = r.Pb({
            factory: function(t) {
              return new (t || w)();
            },
            imports: [[A.a, h, k.a, o.c]],
          })),
          w);
    },
  },
]);
