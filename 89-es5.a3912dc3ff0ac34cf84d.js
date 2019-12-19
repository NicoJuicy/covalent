function _classCallCheck(e, t) {
  if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
}
function _defineProperties(e, t) {
  for (var n = 0; n < t.length; n++) {
    var o = t[n];
    (o.enumerable = o.enumerable || !1),
      (o.configurable = !0),
      'value' in o && (o.writable = !0),
      Object.defineProperty(e, o.key, o);
  }
}
function _createClass(e, t, n) {
  return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e;
}
(window.webpackJsonp = window.webpackJsonp || []).push([
  [89],
  {
    '6ut1': function(e, t, n) {
      'use strict';
      n.r(t);
      var o = n('ofXK'),
        a = n('fXoL'),
        r = n('qeof'),
        i = n('80CR'),
        c = n('bTqV');
      function l(e, t) {
        1 & e &&
          (a.Yb(0, 'div'),
          a.Tc(1, '\n    '),
          a.Yb(2, 'div', 3),
          a.Tc(3, '\n        loading content...\n    '),
          a.Wb(),
          a.Tc(4, '\n'),
          a.Wb());
      }
      var s,
        d,
        u,
        y =
          (((s = (function() {
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
            return new (e || s)(a.Sb(r.b));
          }),
          (s.ɵcmp = a.Mb({
            type: s,
            selectors: [['loading-demo-basic']],
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
                (a.Rc(0, l, 5, 0, 'div', 0),
                a.Tc(1, '\n'),
                a.Yb(2, 'div', 1),
                a.Tc(3, '\n  '),
                a.Yb(4, 'button', 2),
                a.gc('click', function(e) {
                  return t.toggleOverlayStarSyntax();
                }),
                a.Tc(5, 'Toggle Loader'),
                a.Wb(),
                a.Tc(6, '\n'),
                a.Wb()),
                2 & e &&
                  a.qc('tdLoading', 'overlayStarSyntax')('tdLoadingMode', 'indeterminate')('tdLoadingType', 'circle')(
                    'tdLoadingStrategy',
                    'overlay',
                  )('tdLoadingColor', 'accent');
            },
            directives: [i.a, c.b],
            styles: [''],
          })),
          s),
        f = n('MJ5V'),
        b =
          (((d = function e() {
            _classCallCheck(this, e);
          }).ɵfac = function(e) {
            return new (e || d)();
          }),
          (d.ɵcmp = a.Mb({
            type: d,
            selectors: [['loading-demo']],
            decls: 2,
            vars: 1,
            consts: [[3, 'demoId']],
            template: function(e, t) {
              1 & e && (a.Yb(0, 'demo-component', 0), a.Tb(1, 'loading-demo-basic'), a.Wb()),
                2 & e && a.qc('demoId', 'loading-demo-basic');
            },
            directives: [f.a, y],
            styles: [''],
          })),
          d),
        g = n('tyNb'),
        p = [{ path: '', component: b }],
        v =
          (((u = function e() {
            _classCallCheck(this, e);
          }).ɵmod = a.Qb({ type: u })),
          (u.ɵinj = a.Pb({
            factory: function(e) {
              return new (e || u)();
            },
            imports: [[g.f.forChild(p)], g.f],
          })),
          u),
        S = n('Krbs');
      n.d(t, 'LoadingDemoModule', function() {
        return h;
      });
      var m,
        h =
          (((m = function e() {
            _classCallCheck(this, e);
          }).ɵmod = a.Qb({ type: m })),
          (m.ɵinj = a.Pb({
            factory: function(e) {
              return new (e || m)();
            },
            imports: [[S.a, v, r.a, o.c, c.c]],
          })),
          m);
    },
  },
]);
