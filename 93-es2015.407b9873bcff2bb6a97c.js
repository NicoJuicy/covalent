(window.webpackJsonp = window.webpackJsonp || []).push([
  [93],
  {
    UAKV: function(e, t, s) {
      'use strict';
      s.r(t);
      var n = s('ofXK'),
        o = s('fXoL'),
        c = s('GvbB');
      let a = (() => {
        class e {}
        return (
          (e.ɵfac = function(t) {
            return new (t || e)();
          }),
          (e.ɵcmp = o.Mb({
            type: e,
            selectors: [['message-demo-basic']],
            decls: 1,
            vars: 0,
            consts: [['label', 'Info', 'sublabel', 'Maybe you want to know this', 'color', 'accent', 'icon', 'info']],
            template: function(e, t) {
              1 & e && o.Tb(0, 'td-message', 0);
            },
            directives: [c.a],
            styles: [''],
          })),
          e
        );
      })();
      var r = s('e4Sf'),
        i = s('MJ5V');
      let l = (() => {
        class e {}
        return (
          (e.ɵfac = function(t) {
            return new (t || e)();
          }),
          (e.ɵcmp = o.Mb({
            type: e,
            selectors: [['message-demo']],
            decls: 2,
            vars: 1,
            consts: [[3, 'demoId']],
            template: function(e, t) {
              1 & e && (o.Yb(0, 'demo-component', 0), o.Tb(1, 'message-demo-basic'), o.Wb()),
                2 & e && o.qc('demoId', 'message-demo-basic');
            },
            directives: [i.a, a],
            styles: [''],
          })),
          e
        );
      })();
      var m = s('tyNb');
      const b = [{ path: '', component: l }];
      let u = (() => {
        class e {}
        return (
          (e.ɵmod = o.Qb({ type: e })),
          (e.ɵinj = o.Pb({
            factory: function(t) {
              return new (t || e)();
            },
            imports: [[m.f.forChild(b)], m.f],
          })),
          e
        );
      })();
      var d = s('Krbs');
      s.d(t, 'MessageDemoModule', function() {
        return f;
      });
      let f = (() => {
        class e {}
        return (
          (e.ɵmod = o.Qb({ type: e })),
          (e.ɵinj = o.Pb({
            factory: function(t) {
              return new (t || e)();
            },
            imports: [[d.a, u, r.a, n.c]],
          })),
          e
        );
      })();
    },
  },
]);
