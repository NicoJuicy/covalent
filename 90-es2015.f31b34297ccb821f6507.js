(window.webpackJsonp = window.webpackJsonp || []).push([
  [90],
  {
    prFk: function(e, t, o) {
      'use strict';
      o.r(t);
      var n = o('ofXK'),
        r = o('fXoL'),
        s = o('l09l'),
        i = o('bTqV');
      let a = (() => {
        class e {
          constructor(e) {
            (this._markdownNavigatorWindowService = e),
              (this.windowOpen = !1),
              (this.oneItem = [{ url: 'https://github.com/Teradata/covalent/blob/develop/README.md' }]),
              (this.options = [{ name: 'One item', value: this.oneItem }]),
              (this.selected = this.options[0]),
              (this.currentItems = this.selected.value);
          }
          openDialog() {
            this.windowOpen && this.closeDialog(),
              (this.ref = this._markdownNavigatorWindowService.open({ items: this.currentItems })),
              this.ref.afterOpened().subscribe(() => {
                this.windowOpen = !0;
              }),
              this.ref.afterClosed().subscribe(() => {
                this.windowOpen = !1;
              });
          }
          closeDialog() {
            this.ref.close();
          }
        }
        return (
          (e.ɵfac = function(t) {
            return new (t || e)(r.Sb(s.b));
          }),
          (e.ɵcmp = r.Mb({
            type: e,
            selectors: [['markdown-navigator-demo-basic']],
            decls: 2,
            vars: 0,
            consts: [['mat-raised-button', '', 'color', 'primary', 3, 'click']],
            template: function(e, t) {
              1 & e &&
                (r.Yb(0, 'button', 0),
                r.gc('click', function(e) {
                  return t.openDialog();
                }),
                r.Tc(1, '\n  Open Markdown Navigator\n'),
                r.Wb());
            },
            directives: [i.b],
            styles: [''],
          })),
          e
        );
      })();
      var c = o('MJ5V');
      let d = (() => {
        class e {}
        return (
          (e.ɵfac = function(t) {
            return new (t || e)();
          }),
          (e.ɵcmp = r.Mb({
            type: e,
            selectors: [['markdown-navigator-demo']],
            decls: 2,
            vars: 1,
            consts: [[3, 'demoId']],
            template: function(e, t) {
              1 & e && (r.Yb(0, 'demo-component', 0), r.Tb(1, 'markdown-navigator-demo-basic'), r.Wb()),
                2 & e && r.qc('demoId', 'markdown-navigator-demo-basic');
            },
            directives: [c.a, a],
            styles: [''],
          })),
          e
        );
      })();
      var l = o('tyNb');
      const m = [{ path: '', component: d }];
      let p = (() => {
        class e {}
        return (
          (e.ɵmod = r.Qb({ type: e })),
          (e.ɵinj = r.Pb({
            factory: function(t) {
              return new (t || e)();
            },
            imports: [[l.f.forChild(m)], l.f],
          })),
          e
        );
      })();
      var u = o('Krbs');
      o.d(t, 'MarkdownNavigatorDemoModule', function() {
        return b;
      });
      let b = (() => {
        class e {}
        return (
          (e.ɵmod = r.Qb({ type: e })),
          (e.ɵinj = r.Pb({
            factory: function(t) {
              return new (t || e)();
            },
            imports: [[u.a, p, s.a, n.c, i.c]],
          })),
          e
        );
      })();
    },
  },
]);
