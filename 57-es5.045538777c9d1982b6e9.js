function _classCallCheck(e, n) {
  if (!(e instanceof n)) throw new TypeError('Cannot call a class as a function');
}
function _defineProperties(e, n) {
  for (var t = 0; t < n.length; t++) {
    var o = n[t];
    (o.enumerable = o.enumerable || !1),
      (o.configurable = !0),
      'value' in o && (o.writable = !0),
      Object.defineProperty(e, o.key, o);
  }
}
function _createClass(e, n, t) {
  return n && _defineProperties(e.prototype, n), t && _defineProperties(e, t), e;
}
(window.webpackJsonp = window.webpackJsonp || []).push([
  [57],
  {
    '5ffT': function(e, n, t) {
      'use strict';
      t.r(n);
      var o,
        r = t('ofXK'),
        a = t('tyNb'),
        i = t('d3UM'),
        c = t('NFeN'),
        s = t('UBqq'),
        f = t('eTLM'),
        u = t('Q3DV'),
        l = t('fXoL'),
        d = t('H4p7'),
        p =
          (((o = (function() {
            function e() {
              _classCallCheck(this, e);
            }
            return (
              _createClass(e, [
                {
                  key: 'jumpToH1',
                  value: function() {
                    this.anchor = 'heading-1';
                  },
                },
                {
                  key: 'jumpToH2',
                  value: function() {
                    this.anchor = 'heading-2';
                  },
                },
              ]),
              e
            );
          })()).ɵfac = function(e) {
            return new (e || o)();
          }),
          (o.ɵcmp = l.Mb({
            type: o,
            selectors: [['markdown-demo']],
            decls: 2,
            vars: 0,
            template: function(e, n) {
              1 & e &&
                (l.Yb(0, 'td-markdown'),
                l.Tc(1, '\n    # Heading (h1)\n    ## Sub Heading (H2)\n    ### Steps (H3)\n'),
                l.Wb());
            },
            directives: [d.a],
            styles: ['[_nghost-%COMP%]{width:80%}'],
          })),
          o);
      t.d(n, 'MarkdownDemoModule', function() {
        return w;
      });
      var b,
        h = Object(u.c)({ overviewDemoComponent: p, id: 'markdown-parser' }),
        w =
          (((b = function e() {
            _classCallCheck(this, e);
          }).ɵmod = l.Qb({ type: b })),
          (b.ɵinj = l.Pb({
            factory: function(e) {
              return new (e || b)();
            },
            providers: [],
            imports: [[r.c, i.b, c.b, f.a, s.a, a.f.forChild(h)]],
          })),
          b);
    },
    'eTLM': function(e, n, t) {
      'use strict';
      t.d(n, 'a', function() {
        return d;
      });
      var o = t('ofXK'),
        r = t('tyNb'),
        a = t('wZkO'),
        i = t('NFeN'),
        c = t('Wp6s'),
        s = t('sHJK'),
        f = t('ZI6o'),
        u = (t('p6QC'), t('SNPZ'), t('dE5l')),
        l = t('fXoL'),
        d = (function() {
          var e = function e() {
            _classCallCheck(this, e);
          };
          return (
            (e.ɵmod = l.Qb({ type: e })),
            (e.ɵinj = l.Pb({
              factory: function(n) {
                return new (n || e)();
              },
              providers: [],
              imports: [[o.c, r.f, i.b, c.e, a.f, f.a, s.a, u.a]],
            })),
            e
          );
        })();
    },
  },
]);
