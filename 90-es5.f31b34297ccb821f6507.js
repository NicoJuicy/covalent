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
  [90],
  {
    prFk: function(e, t, n) {
      'use strict';
      n.r(t);
      var o,
        i,
        r,
        a = n('ofXK'),
        s = n('fXoL'),
        c = n('l09l'),
        l = n('bTqV'),
        u =
          (((o = (function() {
            function e(t) {
              _classCallCheck(this, e),
                (this._markdownNavigatorWindowService = t),
                (this.windowOpen = !1),
                (this.oneItem = [{ url: 'https://github.com/Teradata/covalent/blob/develop/README.md' }]),
                (this.options = [{ name: 'One item', value: this.oneItem }]),
                (this.selected = this.options[0]),
                (this.currentItems = this.selected.value);
            }
            return (
              _createClass(e, [
                {
                  key: 'openDialog',
                  value: function() {
                    var e = this;
                    this.windowOpen && this.closeDialog(),
                      (this.ref = this._markdownNavigatorWindowService.open({ items: this.currentItems })),
                      this.ref.afterOpened().subscribe(function() {
                        e.windowOpen = !0;
                      }),
                      this.ref.afterClosed().subscribe(function() {
                        e.windowOpen = !1;
                      });
                  },
                },
                {
                  key: 'closeDialog',
                  value: function() {
                    this.ref.close();
                  },
                },
              ]),
              e
            );
          })()).ɵfac = function(e) {
            return new (e || o)(s.Sb(c.b));
          }),
          (o.ɵcmp = s.Mb({
            type: o,
            selectors: [['markdown-navigator-demo-basic']],
            decls: 2,
            vars: 0,
            consts: [['mat-raised-button', '', 'color', 'primary', 3, 'click']],
            template: function(e, t) {
              1 & e &&
                (s.Yb(0, 'button', 0),
                s.gc('click', function(e) {
                  return t.openDialog();
                }),
                s.Tc(1, '\n  Open Markdown Navigator\n'),
                s.Wb());
            },
            directives: [l.b],
            styles: [''],
          })),
          o),
        d = n('MJ5V'),
        f =
          (((i = function e() {
            _classCallCheck(this, e);
          }).ɵfac = function(e) {
            return new (e || i)();
          }),
          (i.ɵcmp = s.Mb({
            type: i,
            selectors: [['markdown-navigator-demo']],
            decls: 2,
            vars: 1,
            consts: [[3, 'demoId']],
            template: function(e, t) {
              1 & e && (s.Yb(0, 'demo-component', 0), s.Tb(1, 'markdown-navigator-demo-basic'), s.Wb()),
                2 & e && s.qc('demoId', 'markdown-navigator-demo-basic');
            },
            directives: [d.a, u],
            styles: [''],
          })),
          i),
        p = n('tyNb'),
        m = [{ path: '', component: f }],
        b =
          (((r = function e() {
            _classCallCheck(this, e);
          }).ɵmod = s.Qb({ type: r })),
          (r.ɵinj = s.Pb({
            factory: function(e) {
              return new (e || r)();
            },
            imports: [[p.f.forChild(m)], p.f],
          })),
          r),
        h = n('Krbs');
      n.d(t, 'MarkdownNavigatorDemoModule', function() {
        return v;
      });
      var w,
        v =
          (((w = function e() {
            _classCallCheck(this, e);
          }).ɵmod = s.Qb({ type: w })),
          (w.ɵinj = s.Pb({
            factory: function(e) {
              return new (e || w)();
            },
            imports: [[h.a, b, c.a, a.c, l.c]],
          })),
          w);
    },
  },
]);
