(window.webpackJsonp = window.webpackJsonp || []).push([
  [101],
  {
    JyjR: function(t, e, n) {
      'use strict';
      n.r(e);
      var c = n('ofXK'),
        o = n('fXoL'),
        s = n('3PiT'),
        a = n('3Pt+'),
        r = n('b6uI');
      let b = (() => {
        class t {
          constructor() {
            this.value = '';
          }
        }
        return (
          (t.ɵfac = function(e) {
            return new (e || t)();
          }),
          (t.ɵcmp = o.Mb({
            type: t,
            selectors: [['tab-select-demo-basic']],
            decls: 14,
            vars: 1,
            consts: [
              ['backgroundColor', 'accent', 'stretchTabs', '', 3, 'ngModel', 'ngModelChange'],
              ['value', 'dogs'],
              ['value', 'cats'],
              ['value', 'bunnies'],
              ['value', 'hamsters', 'disabled', ''],
            ],
            template: function(t, e) {
              1 & t &&
                (o.Yb(0, 'td-tab-select', 0),
                o.gc('ngModelChange', function(t) {
                  return (e.value = t);
                }),
                o.Tc(1, '\n    '),
                o.Yb(2, 'td-tab-option', 1),
                o.Tc(3, '\n    Dogs\n    '),
                o.Wb(),
                o.Tc(4, '\n    '),
                o.Yb(5, 'td-tab-option', 2),
                o.Tc(6, '\n    Cats\n    '),
                o.Wb(),
                o.Tc(7, '\n    '),
                o.Yb(8, 'td-tab-option', 3),
                o.Tc(9, '\n    Bunnies\n    '),
                o.Wb(),
                o.Tc(10, '\n    '),
                o.Yb(11, 'td-tab-option', 4),
                o.Tc(12, '\n    Hamsters\n    '),
                o.Wb(),
                o.Tc(13, '\n'),
                o.Wb()),
                2 & t && o.qc('ngModel', e.value);
            },
            directives: [s.a, a.l, a.o, r.a],
            styles: [''],
          })),
          t
        );
      })();
      var l = n('dbyk'),
        d = n('MJ5V');
      let u = (() => {
        class t {}
        return (
          (t.ɵfac = function(e) {
            return new (e || t)();
          }),
          (t.ɵcmp = o.Mb({
            type: t,
            selectors: [['tab-select-demo']],
            decls: 2,
            vars: 1,
            consts: [[3, 'demoId']],
            template: function(t, e) {
              1 & t && (o.Yb(0, 'demo-component', 0), o.Tb(1, 'tab-select-demo-basic'), o.Wb()),
                2 & t && o.qc('demoId', 'tab-select-demo-basic');
            },
            directives: [d.a, b],
            styles: [''],
          })),
          t
        );
      })();
      var i = n('tyNb');
      const p = [{ path: '', component: u }];
      let m = (() => {
        class t {}
        return (
          (t.ɵmod = o.Qb({ type: t })),
          (t.ɵinj = o.Pb({
            factory: function(e) {
              return new (e || t)();
            },
            imports: [[i.f.forChild(p)], i.f],
          })),
          t
        );
      })();
      var f = n('Krbs');
      n.d(e, 'TabSelectDemoModule', function() {
        return v;
      });
      let v = (() => {
        class t {}
        return (
          (t.ɵmod = o.Qb({ type: t })),
          (t.ɵinj = o.Pb({
            factory: function(e) {
              return new (e || t)();
            },
            imports: [[f.a, m, l.a, c.c, a.h]],
          })),
          t
        );
      })();
    },
  },
]);
