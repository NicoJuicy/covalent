(window.webpackJsonp = window.webpackJsonp || []).push([
  [44],
  {
    'O9/a': function(e, o, t) {
      'use strict';
      t.r(o);
      var i = t('ofXK'),
        n = t('tyNb'),
        r = t('d3UM'),
        a = t('NFeN'),
        s = t('PWEM'),
        c = t('eTLM'),
        p = t('Q3DV'),
        l = t('fXoL'),
        m = t('gw4G'),
        d = t('bTqV');
      let f = (() => {
        class e {
          constructor(e) {
            (this._dialogService = e),
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
          openAlert() {
            this._dialogService.openAlert({
              title: 'Alert',
              disableClose: !0,
              message: 'This is how simple it is to create an alert with this wrapper service.',
            });
          }
          openConfirm() {
            this._dialogService.openConfirm({
              title: 'Confirm',
              message: 'This is how simple it is to create a confirm with this wrapper service. Do you agree?',
              cancelButton: 'Disagree',
              acceptButton: 'Agree',
              width: '500px',
            });
          }
          openPrompt() {
            this._dialogService.openPrompt({
              title: 'Prompt',
              message: 'This is how simple it is to create a prompt with this wrapper service. Prompt something.',
              value: 'Populated value',
              cancelButton: 'Cancel',
              acceptButton: 'Ok',
            });
          }
        }
        return (
          (e.ɵfac = function(o) {
            return new (o || e)(l.Sb(m.o));
          }),
          (e.ɵcmp = l.Mb({
            type: e,
            selectors: [['dialogs-demo']],
            hostBindings: function(e, o, t) {
              1 & e && l.Eb(2),
                2 & e && (l.Xc('@routeAnimation', o.routeAnimation), l.Ib('td-route-animation', o.classAnimation));
            },
            decls: 2,
            vars: 0,
            consts: [['mat-raised-button', '', 'color', 'primary', 1, 'text-upper', 3, 'click']],
            template: function(e, o) {
              1 & e &&
                (l.Yb(0, 'button', 0),
                l.gc('click', function(e) {
                  return o.openAlert();
                }),
                l.Tc(1, 'Open Alert'),
                l.Wb());
            },
            directives: [d.b],
            styles: [''],
          })),
          e
        );
      })();
      t.d(o, 'DialogsDemoModule', function() {
        return g;
      });
      const u = Object(p.c)({ overviewDemoComponent: f, id: 'dialogs' });
      let g = (() => {
        class e {}
        return (
          (e.ɵmod = l.Qb({ type: e })),
          (e.ɵinj = l.Pb({
            factory: function(o) {
              return new (o || e)();
            },
            providers: [],
            imports: [[i.c, r.b, a.b, d.c, c.a, s.a, n.f.forChild(u)]],
          })),
          e
        );
      })();
    },
    'eTLM': function(e, o, t) {
      'use strict';
      t.d(o, 'a', function() {
        return d;
      });
      var i = t('ofXK'),
        n = t('tyNb'),
        r = t('wZkO'),
        a = t('NFeN'),
        s = t('Wp6s'),
        c = t('sHJK'),
        p = t('ZI6o'),
        l = (t('p6QC'), t('SNPZ'), t('dE5l')),
        m = t('fXoL');
      let d = (() => {
        class e {}
        return (
          (e.ɵmod = m.Qb({ type: e })),
          (e.ɵinj = m.Pb({
            factory: function(o) {
              return new (o || e)();
            },
            providers: [],
            imports: [[i.c, n.f, a.b, s.e, r.f, p.a, c.a, l.a]],
          })),
          e
        );
      })();
    },
  },
]);
