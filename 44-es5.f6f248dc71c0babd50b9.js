function _classCallCheck(e, t) {
  if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
}
function _defineProperties(e, t) {
  for (var o = 0; o < t.length; o++) {
    var n = t[o];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function _createClass(e, t, o) {
  return t && _defineProperties(e.prototype, t), o && _defineProperties(e, o), e;
}
(window.webpackJsonp = window.webpackJsonp || []).push([
  [44],
  {
    'O9/a': function(e, t, o) {
      'use strict';
      o.r(t);
      var n,
        i = o('ofXK'),
        r = o('tyNb'),
        a = o('d3UM'),
        c = o('NFeN'),
        s = o('PWEM'),
        l = o('eTLM'),
        p = o('Q3DV'),
        f = o('fXoL'),
        u = o('gw4G'),
        m = o('bTqV'),
        d =
          (((n = (function() {
            function e(t) {
              _classCallCheck(this, e),
                (this._dialogService = t),
                (this.routeAnimation = !0),
                (this.classAnimation = !0),
                (this.dialogServiceMethods = [
                  {
                    description: 'Opens an alert dialog with the provided config.',
                    name: 'openAlert',
                    type: 'function(IAlertConfig): MatDialogRef<TdAlertDialogComponent>',
                  },
                  {
                    description: 'Opens a confirm dialog with the provided config.',
                    name: 'openConfirm',
                    type: 'function(IConfirmConfig): MatDialogRef<TdConfirmDialogComponent>',
                  },
                  {
                    description: 'Opens a prompt dialog with the provided config.',
                    name: 'openPrompt',
                    type: 'function(IPromptConfig): MatDialogRef<TdPromptDialogComponent>',
                  },
                  {
                    description:
                      'Wrapper function over the open() method in MatDialog.\n                  Opens a modal dialog containing the given component.',
                    name: 'open',
                    type: 'function<T>(component: ComponentType<T>, config: MatDialogConfig): MatDialogRef<T>',
                  },
                  {
                    description:
                      'Wrapper function over the closeAll() method in MatDialog.\n                  Closes all of the currently-open dialogs.',
                    name: 'closeAll',
                    type: 'function()',
                  },
                ]);
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
                {
                  key: 'openConfirm',
                  value: function() {
                    this._dialogService.openConfirm({
                      title: 'Confirm',
                      message: 'This is how simple it is to create a confirm with this wrapper service. Do you agree?',
                      cancelButton: 'Disagree',
                      acceptButton: 'Agree',
                      width: '500px',
                    });
                  },
                },
                {
                  key: 'openPrompt',
                  value: function() {
                    this._dialogService.openPrompt({
                      title: 'Prompt',
                      message:
                        'This is how simple it is to create a prompt with this wrapper service. Prompt something.',
                      value: 'Populated value',
                      cancelButton: 'Cancel',
                      acceptButton: 'Ok',
                    });
                  },
                },
              ]),
              e
            );
          })()).ɵfac = function(e) {
            return new (e || n)(f.Sb(u.o));
          }),
          (n.ɵcmp = f.Mb({
            type: n,
            selectors: [['dialogs-demo']],
            hostBindings: function(e, t, o) {
              1 & e && f.Eb(2),
                2 & e && (f.Xc('@routeAnimation', t.routeAnimation), f.Ib('td-route-animation', t.classAnimation));
            },
            decls: 2,
            vars: 0,
            consts: [['mat-raised-button', '', 'color', 'primary', 1, 'text-upper', 3, 'click']],
            template: function(e, t) {
              1 & e &&
                (f.Yb(0, 'button', 0),
                f.gc('click', function(e) {
                  return t.openAlert();
                }),
                f.Tc(1, 'Open Alert'),
                f.Wb());
            },
            directives: [m.b],
            styles: [''],
          })),
          n);
      o.d(t, 'DialogsDemoModule', function() {
        return v;
      });
      var h,
        g = Object(p.c)({ overviewDemoComponent: d, id: 'dialogs' }),
        v =
          (((h = function e() {
            _classCallCheck(this, e);
          }).ɵmod = f.Qb({ type: h })),
          (h.ɵinj = f.Pb({
            factory: function(e) {
              return new (e || h)();
            },
            providers: [],
            imports: [[i.c, a.b, c.b, m.c, l.a, s.a, r.f.forChild(g)]],
          })),
          h);
    },
    'eTLM': function(e, t, o) {
      'use strict';
      o.d(t, 'a', function() {
        return u;
      });
      var n = o('ofXK'),
        i = o('tyNb'),
        r = o('wZkO'),
        a = o('NFeN'),
        c = o('Wp6s'),
        s = o('sHJK'),
        l = o('ZI6o'),
        p = (o('p6QC'), o('SNPZ'), o('dE5l')),
        f = o('fXoL'),
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
              imports: [[n.c, i.f, a.b, c.e, r.f, l.a, s.a, p.a]],
            })),
            e
          );
        })();
    },
  },
]);
