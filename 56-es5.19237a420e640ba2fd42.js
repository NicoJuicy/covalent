function _classCallCheck(e, t) {
  if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
}
function _defineProperties(e, t) {
  for (var n = 0; n < t.length; n++) {
    var a = t[n];
    (a.enumerable = a.enumerable || !1),
      (a.configurable = !0),
      'value' in a && (a.writable = !0),
      Object.defineProperty(e, a.key, a);
  }
}
function _createClass(e, t, n) {
  return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e;
}
(window.webpackJsonp = window.webpackJsonp || []).push([
  [56],
  {
    M1TA: function(e, t, n) {
      'use strict';
      n.r(t);
      var a = n('ofXK'),
        o = n('3Pt+'),
        r = n('tyNb'),
        i = n('bTqV'),
        c = n('Wp6s'),
        d = n('f0Cb'),
        l = n('kmnG'),
        s = n('NFeN'),
        f = n('qFsG'),
        u = n('MutI'),
        y = n('1jcm'),
        b = n('wZkO'),
        p = n('eTLM'),
        v = n('XkJo'),
        g = n('qeof'),
        S = n('Q3DV'),
        h = n('f3AP'),
        m = n('fXoL'),
        C = n('gw4G'),
        w = n('80CR');
      function L(e, t) {
        1 & e &&
          (m.Yb(0, 'div'),
          m.Tc(1, '\n    '),
          m.Yb(2, 'div', 3),
          m.Tc(3, '\n        loading content...\n    '),
          m.Wb(),
          m.Tc(4, '\n'),
          m.Wb());
      }
      var T,
        k =
          (((T = (function() {
            function e(t) {
              _classCallCheck(this, e), (this._loadingService = t), (this.overlayStarSyntax = !1);
            }
            return (
              _createClass(e, [
                {
                  key: 'toggleOverlayStarSyntax',
                  value: function() {
                    (this.overlayStarSyntax = !this.overlayStarSyntax),
                      this.overlayStarSyntax
                        ? this._loadingService.register('overlayStarSyntax')
                        : this._loadingService.resolve('overlayStarSyntax');
                  },
                },
              ]),
              e
            );
          })()).ɵfac = function(e) {
            return new (e || T)(m.Sb(C.p));
          }),
          (T.ɵcmp = m.Mb({
            type: T,
            selectors: [['loading-demo']],
            decls: 7,
            vars: 5,
            consts: [
              [4, 'tdLoading', 'tdLoadingMode', 'tdLoadingType', 'tdLoadingStrategy', 'tdLoadingColor'],
              ['layout', 'row'],
              ['mat-raised-button', '', 'color', 'primary', 1, 'text-upper', 3, 'click'],
              [1, 'pad', 'text-center'],
            ],
            template: function(e, t) {
              1 & e &&
                (m.Rc(0, L, 5, 0, 'div', 0),
                m.Tc(1, '\n'),
                m.Yb(2, 'div', 1),
                m.Tc(3, '\n  '),
                m.Yb(4, 'button', 2),
                m.gc('click', function(e) {
                  return t.toggleOverlayStarSyntax();
                }),
                m.Tc(5, 'Toggle Loader'),
                m.Wb(),
                m.Tc(6, '\n'),
                m.Wb()),
                2 & e &&
                  m.qc('tdLoading', 'overlayStarSyntax')('tdLoadingMode', 'indeterminate')('tdLoadingType', 'circle')(
                    'tdLoadingStrategy',
                    'overlay',
                  )('tdLoadingColor', 'accent');
            },
            directives: [w.a, i.b],
            styles: [''],
            data: { animation: [h.b] },
            changeDetection: 0,
          })),
          T),
        _ = n('dE5l');
      n.d(t, 'LoadingDemoModule', function() {
        return M;
      });
      var x,
        P = Object(S.c)({ overviewDemoComponent: k, id: 'loading' }),
        M =
          (((x = function e() {
            _classCallCheck(this, e);
          }).ɵmod = m.Qb({ type: x })),
          (x.ɵinj = m.Pb({
            factory: function(e) {
              return new (e || x)();
            },
            providers: [],
            imports: [
              [a.c, o.h, o.p, i.c, c.e, d.b, l.d, s.b, f.c, u.e, y.b, b.f, _.a, p.a, v.a, g.a, r.f.forChild(P)],
            ],
          })),
          x);
    },
    eTLM: function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return u;
      });
      var a = n('ofXK'),
        o = n('tyNb'),
        r = n('wZkO'),
        i = n('NFeN'),
        c = n('Wp6s'),
        d = n('sHJK'),
        l = n('ZI6o'),
        s = (n('p6QC'), n('SNPZ'), n('dE5l')),
        f = n('fXoL'),
        u = (function() {
          var e = function e() {
            _classCallCheck(this, e);
          };
          return (
            (e.ɵmod = f.Qb({ type: e })),
            (e.ɵinj = f.Pb({
              factory: function(t) {
                return new (t || e)();
              },
              providers: [],
              imports: [[a.c, o.f, i.b, c.e, r.f, l.a, d.a, s.a]],
            })),
            e
          );
        })();
    },
  },
]);
