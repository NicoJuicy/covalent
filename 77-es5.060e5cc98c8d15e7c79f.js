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
  [77],
  {
    THbC: function(e, t, n) {
      'use strict';
      n.r(t);
      var o,
        i,
        c,
        s = n('ofXK'),
        r = n('bTqV'),
        a = n('fXoL'),
        l = n('PWEM'),
        u =
          (((o = (function() {
            function e(t) {
              _classCallCheck(this, e), (this._dialogService = t);
            }
            return (
              _createClass(e, [
                {
                  key: 'openAlert',
                  value: function() {
                    this._dialogService.openAlert({
                      title: 'Alert',
                      disableClose: !0,
                      message: 'This is how simple it is to create an alert with this wrapper service.',
                    });
                  },
                },
              ]),
              e
            );
          })()).ɵfac = function(e) {
            return new (e || o)(a.Sb(l.c));
          }),
          (o.ɵcmp = a.Mb({
            type: o,
            selectors: [['dialogs-demo-basic']],
            decls: 2,
            vars: 0,
            consts: [['mat-raised-button', '', 'color', 'primary', 1, 'text-upper', 3, 'click']],
            template: function(e, t) {
              1 & e &&
                (a.Yb(0, 'button', 0),
                a.gc('click', function(e) {
                  return t.openAlert();
                }),
                a.Tc(1, 'Open Alert'),
                a.Wb());
            },
            directives: [r.b],
            styles: [''],
          })),
          o),
        f = n('MJ5V'),
        p =
          (((i = function e() {
            _classCallCheck(this, e);
          }).ɵfac = function(e) {
            return new (e || i)();
          }),
          (i.ɵcmp = a.Mb({
            type: i,
            selectors: [['dialogs-demo']],
            decls: 2,
            vars: 1,
            consts: [[3, 'demoId']],
            template: function(e, t) {
              1 & e && (a.Yb(0, 'demo-component', 0), a.Tb(1, 'dialogs-demo-basic'), a.Wb()),
                2 & e && a.qc('demoId', 'dialogs-demo-basic');
            },
            directives: [f.a, u],
            styles: [''],
          })),
          i),
        d = n('tyNb'),
        b = [{ path: '', component: p }],
        m =
          (((c = function e() {
            _classCallCheck(this, e);
          }).ɵmod = a.Qb({ type: c })),
          (c.ɵinj = a.Pb({
            factory: function(e) {
              return new (e || c)();
            },
            imports: [[d.f.forChild(b)], d.f],
          })),
          c),
        h = n('Krbs');
      n.d(t, 'DialogsDemoModule', function() {
        return C;
      });
      var w,
        C =
          (((w = function e() {
            _classCallCheck(this, e);
          }).ɵmod = a.Qb({ type: w })),
          (w.ɵinj = a.Pb({
            factory: function(e) {
              return new (e || w)();
            },
            imports: [[h.a, m, l.a, s.c, r.c]],
          })),
          w);
    },
  },
]);
