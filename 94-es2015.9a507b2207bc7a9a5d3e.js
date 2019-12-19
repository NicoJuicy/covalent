(window.webpackJsonp = window.webpackJsonp || []).push([
  [94],
  {
    cyhw: function(t, e, n) {
      'use strict';
      n.r(e);
      var r = n('ofXK'),
        c = n('fXoL'),
        s = n('2Fvg'),
        i = n('tyNb'),
        o = n('8XMI');
      const a = function() {
          return { exact: !0 };
        },
        u = function() {
          return ['/components', 'nav-steps'];
        },
        p = function() {
          return ['/components', 'nav-steps', 'route2'];
        },
        l = function() {
          return ['/components', 'nav-steps', 'route3'];
        };
      let v = (() => {
        class t {}
        return (
          (t.ɵfac = function(e) {
            return new (e || t)();
          }),
          (t.ɵcmp = c.Mb({
            type: t,
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
                  (c.Yb(0, 'nav', 0),
                  c.Tc(1, '\n        '),
                  c.Tb(2, 'a', 1, 2),
                  c.Tc(4, '\n        '),
                  c.Tb(5, 'a', 3, 4),
                  c.Tc(7, '\n        '),
                  c.Tb(8, 'a', 5, 6),
                  c.Tc(10, '\n'),
                  c.Wb()),
                2 & t)
              ) {
                const t = c.Fc(3),
                  e = c.Fc(6),
                  n = c.Fc(9);
                c.Db(2),
                  c.qc('routerLinkActiveOptions', c.uc(17, a))('routerLink', c.uc(18, u))('state', 'complete')(
                    'label',
                    '1st step',
                  )('sublabel', 'some description')('active', t.isActive),
                  c.Db(3),
                  c.qc('routerLinkActiveOptions', c.uc(19, a))('routerLink', c.uc(20, p))('state', 'complete')(
                    'label',
                    '2nd step',
                  )('disabled', !0)('active', e.isActive),
                  c.Db(3),
                  c.qc('routerLinkActiveOptions', c.uc(21, a))('routerLink', c.uc(22, l))('state', 'required')(
                    'label',
                    '3rd step',
                  )('active', n.isActive);
              }
            },
            directives: [s.a, i.e, o.a, i.d],
            styles: [''],
          })),
          t
        );
      })();
      var b = n('ezQP'),
        d = n('MJ5V');
      const m = [
        {
          path: '',
          component: (() => {
            class t {}
            return (
              (t.ɵfac = function(e) {
                return new (e || t)();
              }),
              (t.ɵcmp = c.Mb({
                type: t,
                selectors: [['nav-steps-demo']],
                decls: 2,
                vars: 1,
                consts: [[3, 'demoId']],
                template: function(t, e) {
                  1 & t && (c.Yb(0, 'demo-component', 0), c.Tb(1, 'nav-steps-demo-basic'), c.Wb()),
                    2 & t && c.qc('demoId', 'nav-steps-demo-basic');
                },
                directives: [d.a, v],
                styles: [''],
              })),
              t
            );
          })(),
        },
      ];
      let k = (() => {
        class t {}
        return (
          (t.ɵmod = c.Qb({ type: t })),
          (t.ɵinj = c.Pb({
            factory: function(e) {
              return new (e || t)();
            },
            imports: [[i.f.forChild(m)], i.f],
          })),
          t
        );
      })();
      var f = n('Krbs');
      n.d(e, 'NavStepsDemoModule', function() {
        return L;
      });
      let L = (() => {
        class t {}
        return (
          (t.ɵmod = c.Qb({ type: t })),
          (t.ɵinj = c.Pb({
            factory: function(e) {
              return new (e || t)();
            },
            imports: [[f.a, k, b.a, r.c]],
          })),
          t
        );
      })();
    },
  },
]);
