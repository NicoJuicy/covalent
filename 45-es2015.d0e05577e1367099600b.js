(window.webpackJsonp = window.webpackJsonp || []).push([
  [45],
  {
    eTLM: function(e, n, t) {
      'use strict';
      t.d(n, 'a', function() {
        return f;
      });
      var c = t('ofXK'),
        r = t('tyNb'),
        i = t('wZkO'),
        o = t('NFeN'),
        s = t('Wp6s'),
        a = t('sHJK'),
        l = t('ZI6o'),
        m = (t('p6QC'), t('SNPZ'), t('dE5l')),
        u = t('fXoL');
      let f = (() => {
        class e {}
        return (
          (e.ɵmod = u.Qb({ type: e })),
          (e.ɵinj = u.Pb({
            factory: function(n) {
              return new (n || e)();
            },
            providers: [],
            imports: [[c.c, r.f, o.b, s.e, i.f, l.a, a.a, m.a]],
          })),
          e
        );
      })();
    },
    gNzS: function(e, n, t) {
      'use strict';
      t.r(n);
      var c = t('ofXK'),
        r = t('tyNb'),
        i = t('d3UM'),
        o = t('NFeN'),
        s = t('/OM5'),
        a = t('eTLM'),
        l = t('Q3DV'),
        m = t('fXoL'),
        u = t('7RBA'),
        f = t('AzUz');
      function p(e, n) {
        if ((1 & e && (m.Yb(0, 'span'), m.Tc(1), m.Wb()), 2 & e)) {
          const e = m.kc(3).$implicit;
          m.Db(1), m.Vc('Min length value: ', e.minLength, '');
        }
      }
      function b(e, n) {
        if ((1 & e && (m.Yb(0, 'span'), m.Tc(1), m.Wb()), 2 & e)) {
          const e = m.kc(3).$implicit;
          m.Db(1), m.Vc('Max length value: ', e.minLength, '');
        }
      }
      function d(e, n) {
        if (
          (1 & e &&
            (m.Yb(0, 'span'),
            m.Tc(1, '\n          '),
            m.Rc(2, p, 2, 1, 'span', 3),
            m.Tc(3, '\n          '),
            m.Rc(4, b, 2, 1, 'span', 3),
            m.Tc(5, '\n        '),
            m.Wb()),
          2 & e)
        ) {
          const e = m.kc().control;
          m.Db(2), m.qc('ngIf', e.hasError('minlength')), m.Db(2), m.qc('ngIf', e.hasError('maxlength'));
        }
      }
      function h(e, n) {
        if ((1 & e && (m.Tc(0, '\n        '), m.Rc(1, d, 6, 2, 'span', 3), m.Tc(2, '\n    ')), 2 & e)) {
          const e = n.control;
          m.Db(1), m.qc('ngIf', e.touched || !e.pristine);
        }
      }
      function g(e, n) {
        if ((1 & e && (m.Tc(0, '\n    '), m.Rc(1, h, 3, 1, 'ng-template', 2), m.Tc(2, '\n  ')), 2 & e)) {
          const e = n.$implicit;
          m.Db(1), m.qc('tdDynamicFormsError', e.name);
        }
      }
      let y = (() => {
        class e {
          constructor() {
            this.textElements = [
              { name: 'input', hint: 'this is an input hint', type: s.b.Input, required: !1, flex: 50 },
              { name: 'required-input', label: 'Input Label', type: s.b.Input, required: !0, flex: 50 },
              { name: 'text-length', label: 'Text Length', type: s.b.Input, minLength: 4, maxLength: 12, flex: 50 },
              { name: 'text', type: s.c.Text, required: !1, default: 'Default', flex: 50, disabled: !0 },
              { name: 'textarea', hint: 'this is a textarea hint', type: s.b.Textarea, required: !1 },
              { name: 'required-password', label: 'Password Label', type: s.b.Password, required: !0 },
            ];
          }
        }
        return (
          (e.ɵfac = function(n) {
            return new (n || e)();
          }),
          (e.ɵcmp = m.Mb({
            type: e,
            selectors: [['dynamic-forms-demo']],
            decls: 4,
            vars: 2,
            consts: [
              [3, 'elements'],
              ['ngFor', '', 3, 'ngForOf'],
              [3, 'tdDynamicFormsError'],
              [4, 'ngIf'],
            ],
            template: function(e, n) {
              1 & e &&
                (m.Yb(0, 'td-dynamic-forms', 0),
                m.Tc(1, '\n  '),
                m.Rc(2, g, 3, 1, 'ng-template', 1),
                m.Tc(3, '\n'),
                m.Wb()),
                2 & e && (m.qc('elements', n.textElements), m.Db(2), m.qc('ngForOf', n.textElements));
            },
            directives: [u.a, c.s, f.c, c.t],
            styles: [''],
          })),
          e
        );
      })();
      t.d(n, 'DynamicFormsDemoModule', function() {
        return T;
      });
      const x = Object(l.c)({ overviewDemoComponent: y, id: 'dynamic-forms' });
      let T = (() => {
        class e {}
        return (
          (e.ɵmod = m.Qb({ type: e })),
          (e.ɵinj = m.Pb({
            factory: function(n) {
              return new (n || e)();
            },
            providers: [],
            imports: [[c.c, i.b, o.b, s.a, a.a, r.f.forChild(x)]],
          })),
          e
        );
      })();
    },
  },
]);
