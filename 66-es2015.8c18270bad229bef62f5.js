(window.webpackJsonp = window.webpackJsonp || []).push([
  [66],
  {
    eTLM: function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return h;
      });
      var a = n('ofXK'),
        o = n('tyNb'),
        i = n('wZkO'),
        c = n('NFeN'),
        s = n('Wp6s'),
        r = n('sHJK'),
        l = n('ZI6o'),
        m = (n('p6QC'), n('SNPZ'), n('dE5l')),
        b = n('fXoL');
      let h = (() => {
        class t {}
        return (
          (t.ɵmod = b.Qb({ type: t })),
          (t.ɵinj = b.Pb({
            factory: function(e) {
              return new (e || t)();
            },
            providers: [],
            imports: [[a.c, o.f, c.b, s.e, i.f, l.a, r.a, m.a]],
          })),
          t
        );
      })();
    },
    w8w1: function(t, e, n) {
      'use strict';
      n.r(e);
      var a = n('7hH2'),
        o = n('XhcP'),
        i = n('ofXK'),
        c = n('fXoL'),
        s = (n('ZI6o'), n('Cb7K'), n('tyNb')),
        r = n('f3AP'),
        l = n('W6/J'),
        m = n('Wp6s'),
        b = n('f0Cb'),
        h = n('P3Mj'),
        p = n('bTqV'),
        u = n('MutI'),
        d = n('NFeN'),
        T = n('FKr1');
      let g = (() => {
          class t {
            constructor() {
              (this.routeAnimation = !0), (this.classAnimation = !0);
            }
          }
          return (
            (t.ɵfac = function(e) {
              return new (e || t)();
            }),
            (t.ɵcmp = c.Mb({
              type: t,
              selectors: [['docs-angular-material']],
              hostBindings: function(t, e, n) {
                1 & t && c.Eb(2),
                  2 & t && (c.Xc('@routeAnimation', e.routeAnimation), c.Ib('td-route-animation', e.classAnimation));
              },
              decls: 53,
              vars: 0,
              consts: [
                [1, 'push-bottom-xl'],
                [1, 'push-bottom-sm', 'mat-display-1'],
                [1, 'tc-grey-600', 'push-bottom-md'],
                [
                  'mat-button',
                  '',
                  'color',
                  'accent',
                  'target',
                  '_blank',
                  'href',
                  'https://material.angular.io/components',
                  1,
                  'text-upper',
                ],
                ['mat-button', '', 'target', '_blank', 'href', 'https://github.com/angular/material2', 1, 'text-upper'],
                [1, 'push-bottom-xxl'],
                [
                  'mat-list-item',
                  '',
                  'href',
                  'https://medium.com/@kyleledbetter/why-we-re-doubling-down-on-material-design-for-our-enterprise-web-apps-ce7d36d498db',
                  'target',
                  '_blank',
                ],
                ['matLine', ''],
                ['mat-list-item', '', 'href', 'https://material.angular.io/', 'target', '_blank'],
                [
                  'mat-list-item',
                  '',
                  'href',
                  'https://github.com/angular/material2#available-features',
                  'target',
                  '_blank',
                ],
              ],
              template: function(t, e) {
                1 & t &&
                  (c.Yb(0, 'section', 0),
                  c.Yb(1, 'h1', 1),
                  c.Tc(2, 'Angular Material'),
                  c.Wb(),
                  c.Yb(3, 'p', 2),
                  c.Tc(4, ' Material Design components '),
                  c.Wb(),
                  c.Wb(),
                  c.Yb(5, 'section'),
                  c.Yb(6, 'h3'),
                  c.Tc(7, 'Core Components'),
                  c.Wb(),
                  c.Yb(8, 'p'),
                  c.Tc(
                    9,
                    'The UI Platform is built on top of @angular/material components which are the core of Covalent.',
                  ),
                  c.Wb(),
                  c.Yb(10, 'h3'),
                  c.Tc(11, 'New & Custom Components'),
                  c.Wb(),
                  c.Yb(12, 'p'),
                  c.Tc(
                    13,
                    ' With the UI Platform and your app usage, we suggest to follow the official material spec as closely as possible for these reasons: ',
                  ),
                  c.Wb(),
                  c.Yb(14, 'ul'),
                  c.Yb(15, 'li'),
                  c.Tc(16, 'So our products remain consistent'),
                  c.Wb(),
                  c.Yb(17, 'li'),
                  c.Tc(18, 'To be able to use public material design resources'),
                  c.Wb(),
                  c.Yb(19, 'li'),
                  c.Tc(20, 'To onboard new hires more easily'),
                  c.Wb(),
                  c.Yb(21, 'li'),
                  c.Tc(22, 'So devs can easily work on multiple products'),
                  c.Wb(),
                  c.Yb(23, 'li'),
                  c.Tc(24, 'To enable easy updates and pull down the latest'),
                  c.Wb(),
                  c.Wb(),
                  c.Yb(25, 'p'),
                  c.Tc(
                    26,
                    " Obviously we'll need to extend and customize material, but when doing so try to submit to the main UI Platform repo and collaborate with others to ensure standards. ",
                  ),
                  c.Wb(),
                  c.Yb(27, 'a', 3),
                  c.Tc(28, 'Components'),
                  c.Wb(),
                  c.Yb(29, 'a', 4),
                  c.Tc(30, 'Github Repo'),
                  c.Wb(),
                  c.Wb(),
                  c.Yb(31, 'mat-card', 5),
                  c.Yb(32, 'mat-card-title'),
                  c.Tc(33, 'Resources'),
                  c.Wb(),
                  c.Tb(34, 'mat-divider'),
                  c.Yb(35, 'mat-nav-list'),
                  c.Yb(36, 'a', 6),
                  c.Yb(37, 'mat-icon'),
                  c.Tc(38, 'launch'),
                  c.Wb(),
                  c.Yb(39, 'span', 7),
                  c.Tc(40, 'Why Angular Material?'),
                  c.Wb(),
                  c.Wb(),
                  c.Tb(41, 'mat-divider'),
                  c.Yb(42, 'a', 8),
                  c.Yb(43, 'mat-icon'),
                  c.Tc(44, 'launch'),
                  c.Wb(),
                  c.Yb(45, 'span', 7),
                  c.Tc(46, 'Angular Material Docs Site'),
                  c.Wb(),
                  c.Wb(),
                  c.Tb(47, 'mat-divider'),
                  c.Yb(48, 'a', 9),
                  c.Yb(49, 'mat-icon'),
                  c.Tc(50, 'launch'),
                  c.Wb(),
                  c.Yb(51, 'span', 7),
                  c.Tc(52, 'Angular Material Feature Status'),
                  c.Wb(),
                  c.Wb(),
                  c.Wb(),
                  c.Wb());
              },
              directives: [p.a, m.a, m.g, b.a, u.g, u.d, d.a, T.h],
              styles: [''],
              data: { animation: [r.b] },
            })),
            t
          );
        })(),
        f = (() => {
          class t {
            constructor() {
              (this.routeAnimation = !0), (this.classAnimation = !0);
            }
          }
          return (
            (t.ɵfac = function(e) {
              return new (e || t)();
            }),
            (t.ɵcmp = c.Mb({
              type: t,
              selectors: [['docs-icons']],
              hostBindings: function(t, e, n) {
                1 & t && c.Eb(2),
                  2 & t && (c.Xc('@routeAnimation', e.routeAnimation), c.Ib('td-route-animation', e.classAnimation));
              },
              decls: 58,
              vars: 0,
              consts: [
                [1, 'push-bottom-xl'],
                [1, 'push-bottom-sm', 'mat-display-1'],
                [1, 'tc-grey-600', 'push-bottom-md'],
                [1, 'push-bottom-xxl'],
                [1, 'push-bottom-sm', 'mat-title'],
                ['lang', 'html'],
                [1, 'push-bottom-lg'],
                ['lang', 'typescript'],
                ['lang', 'html', 1, 'push-bottom-lg'],
                [
                  'mat-button',
                  '',
                  'color',
                  'accent',
                  'target',
                  '_blank',
                  'href',
                  'https://material.io/icons/',
                  1,
                  'text-upper',
                ],
              ],
              template: function(t, e) {
                1 & t &&
                  (c.Yb(0, 'section', 0),
                  c.Tc(1, '\n  '),
                  c.Yb(2, 'h1', 1),
                  c.Tc(3, 'Material Design Icons'),
                  c.Wb(),
                  c.Tc(4, '\n\n  '),
                  c.Yb(5, 'p', 2),
                  c.Tc(6, '\n    Access 1000+ SVG or Font icons\n  '),
                  c.Wb(),
                  c.Tc(7, '\n'),
                  c.Wb(),
                  c.Tc(8, '\n\n'),
                  c.Yb(9, 'section', 3),
                  c.Tc(10, '\n    '),
                  c.Yb(11, 'h3', 4),
                  c.Tc(12, 'Font Icons'),
                  c.Wb(),
                  c.Tc(13, '\n    '),
                  c.Tb(14, 'mat-divider'),
                  c.Tc(15, '\n    '),
                  c.Yb(16, 'p'),
                  c.Tc(17, 'Font icons using ligatures are the default option and simple to use:'),
                  c.Wb(),
                  c.Tc(18, '\n    '),
                  c.Yb(19, 'td-highlight', 5),
                  c.Tc(20, '\n      '),
                  c.Tc(21, ' <mat-icon>home</mat-icon> '),
                  c.Tc(22, '\n    '),
                  c.Wb(),
                  c.Tc(23, '\n    '),
                  c.Yb(24, 'p', 6),
                  c.Tc(25, '\n      which renders\n      '),
                  c.Yb(26, 'mat-icon'),
                  c.Tc(27, 'home'),
                  c.Wb(),
                  c.Tc(28, '\n    '),
                  c.Wb(),
                  c.Tc(29, '\n\n    '),
                  c.Yb(30, 'h3', 4),
                  c.Tc(31, 'SVG Icons (from Safe URLS)'),
                  c.Wb(),
                  c.Tc(32, '\n    '),
                  c.Tb(33, 'mat-divider'),
                  c.Tc(34, '\n    '),
                  c.Yb(35, 'p'),
                  c.Tc(
                    36,
                    '\n      SVG icons have to be sanitized before they can be used with [DomSanitizer] and then icons need to be registered in\n      [MatIconRegistry] so it can be referred later on:\n    ',
                  ),
                  c.Wb(),
                  c.Tc(37, '\n    '),
                  c.Yb(38, 'p'),
                  c.Tc(39, 'Typescript:'),
                  c.Wb(),
                  c.Tc(40, '\n    '),
                  c.Yb(41, 'td-highlight', 7),
                  c.Tc(42, '\n      '),
                  c.Tc(
                    43,
                    " \n      import { DomSanitizer } from '@angular/platform-browser'; \n      import { MatIconRegistry } from '@angular/material/icon';\n      ...\n      ...\n      constructor(private _iconRegistry: MatIconRegistry, private _domSanitizer:DomSanitizer) { \n        this._iconRegistry.addSvgIconInNamespace('assets', 'sun',\n        this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/sun.svg')); \n      } ",
                  ),
                  c.Tc(44, '\n    '),
                  c.Wb(),
                  c.Tc(45, '\n    '),
                  c.Yb(46, 'p'),
                  c.Tc(47, 'HTML:'),
                  c.Wb(),
                  c.Tc(48, '\n    '),
                  c.Yb(49, 'td-highlight', 8),
                  c.Tc(50, '\n      '),
                  c.Tc(51, ' <mat-icon svgIcon="assets:sun"></mat-icon> '),
                  c.Tc(52, '\n    '),
                  c.Wb(),
                  c.Tc(53, '\n  '),
                  c.Yb(54, 'a', 9),
                  c.Tc(55, 'Search Icons'),
                  c.Wb(),
                  c.Tc(56, '\n  '),
                  c.Wb(),
                  c.Tc(57, '\n\n'));
              },
              directives: [b.a, h.a, d.a, p.a],
              styles: [''],
              data: { animation: [r.b] },
            })),
            t
          );
        })(),
        y = (() => {
          class t {
            constructor() {
              (this.routeAnimation = !0), (this.classAnimation = !0);
            }
          }
          return (
            (t.ɵfac = function(e) {
              return new (e || t)();
            }),
            (t.ɵcmp = c.Mb({
              type: t,
              selectors: [['docs-theme']],
              hostBindings: function(t, e, n) {
                1 & t && c.Eb(2),
                  2 & t && (c.Xc('@routeAnimation', e.routeAnimation), c.Ib('td-route-animation', e.classAnimation));
              },
              decls: 33,
              vars: 0,
              consts: [
                [1, 'push-bottom-xl'],
                [1, 'push-bottom-sm', 'mat-display-1'],
                [1, 'tc-grey-600', 'push-bottom-md'],
                [1, 'push-bottom-xxl'],
                [1, 'push-bottom-sm', 'mat-title'],
                ['lang', 'scss'],
                ['href', 'https://material.google.com/style/color.html', 'target', '_blank'],
                [
                  'mat-button',
                  '',
                  'color',
                  'accent',
                  'target',
                  '_blank',
                  'href',
                  'https://material.angular.io/guide/theming',
                  1,
                  'text-upper',
                ],
              ],
              template: function(t, e) {
                1 & t &&
                  (c.Yb(0, 'section', 0),
                  c.Tc(1, '\n    '),
                  c.Yb(2, 'h1', 1),
                  c.Tc(3, 'Custom Theme'),
                  c.Wb(),
                  c.Tc(4, '\n  \n    '),
                  c.Yb(5, 'p', 2),
                  c.Tc(6, '\n        SCSS variables to customize the color scheme\n    '),
                  c.Wb(),
                  c.Tc(7, '\n  '),
                  c.Wb(),
                  c.Tc(8, '\n  \n  '),
                  c.Yb(9, 'section', 3),
                  c.Tc(10, '\n      '),
                  c.Yb(11, 'h3', 4),
                  c.Tc(12, 'SCSS Variables'),
                  c.Wb(),
                  c.Tc(13, '\n      '),
                  c.Tb(14, 'mat-divider'),
                  c.Tc(15, '\n   \n\n    '),
                  c.Yb(16, 'p'),
                  c.Tc(17, 'Simply edit the /theme.scss file and update these SCSS variables:'),
                  c.Wb(),
                  c.Tc(18, '\n    '),
                  c.Yb(19, 'td-highlight', 5),
                  c.Tc(
                    20,
                    "\n        @import '~@angular/material/theming';\n        @import '~@covalent/core/theming/all-theme';\n        @import '~@covalent/markdown/markdown-theme';\n        @import '~@covalent/highlight/highlight-theme';\n        // Plus imports for other components in your app.\n  \n        // Define a custom typography config that overrides the font-family\n        // or any typography level.\n        $typography: mat-typography-config(\n          $font-family: 'Roboto, monospace',\n          $headline: mat-typography-level(32px, 48px, 700)\n        );\n  \n        @include mat-core($typography); // $typography is an **optional** argument for the mat-core\n  \n        // Define the palettes for your theme using the Material Design palettes available in palette.scss\n        // (imported above). For each palette, you can optionally specify a default, lighter, and darker\n        // hue.\n        $primary: mat-palette($mat-blue, 700);\n        $accent:  mat-palette($mat-orange, 800, A100, A400);\n  \n        // The warn palette is optional (defaults to red).\n        $warn:    mat-palette($mat-red, 600);\n  \n        // Create the theme object (a Sass map containing all of the palettes).\n        $theme: mat-light-theme($primary, $accent, $warn);\n  \n        // Include theme styles for core and each component used in your app.\n        // Alternatively, you can import and @include the theme mixins for each component\n        // that you are using.\n        @include angular-material-theme($theme);\n        @include covalent-theme($theme, $typography); // $typography is an **optional** argument for the covalent-theme\n        @include covalent-markdown-theme($theme);\n        @include covalent-highlight-theme();\n    ",
                  ),
                  c.Wb(),
                  c.Tc(21, '\n    '),
                  c.Yb(22, 'p'),
                  c.Tc(23, '\n      Color palettes and hues follow the official\n      '),
                  c.Yb(24, 'a', 6),
                  c.Tc(25, 'Material Design Spec'),
                  c.Wb(),
                  c.Tc(26, '.\n    '),
                  c.Wb(),
                  c.Tc(27, '\n  '),
                  c.Tb(28, 'mat-divider'),
                  c.Tc(29, '\n    '),
                  c.Yb(30, 'a', 7),
                  c.Tc(31, 'Theming Docs'),
                  c.Wb(),
                  c.Tc(32, '\n\n'),
                  c.Wb());
              },
              directives: [b.a, h.a, p.a],
              styles: ['.mat-fab-position-bottom-right[_ngcontent-%COMP%]{bottom:20px}'],
              data: { animation: [r.b] },
            })),
            t
          );
        })(),
        W = (() => {
          class t {
            constructor() {
              (this.routeAnimation = !0), (this.classAnimation = !0);
            }
          }
          return (
            (t.ɵfac = function(e) {
              return new (e || t)();
            }),
            (t.ɵcmp = c.Mb({
              type: t,
              selectors: [['utility-sass-mixins']],
              hostBindings: function(t, e, n) {
                1 & t && c.Eb(2),
                  2 & t && (c.Xc('@routeAnimation', e.routeAnimation), c.Ib('td-route-animation', e.classAnimation));
              },
              decls: 1,
              vars: 0,
              consts: [['resourceUrl', 'docs/UTILITY_MIXINS.md']],
              template: function(t, e) {
                1 & t && c.Tb(0, 'td-readme-loader', 0);
              },
              directives: [l.a],
              styles: [''],
              data: { animation: [r.b] },
            })),
            t
          );
        })();
      var Y = n('dE5l'),
        v = n('/t3+'),
        w = n('STbY'),
        S = n('gw4G'),
        A = n('XkJo'),
        I = n('Kl+F'),
        M = n('zzB2'),
        x = n('eTLM');
      const $ = s.f.forChild([
        {
          children: [
            { path: '', redirectTo: 'get-started' },
            {
              path: 'get-started',
              children: [
                { path: '', redirectTo: 'what-is-covalent' },
                { path: 'overview', component: l.a, data: { resourceUrl: 'docs/GETTING_STARTED.md' } },
                { path: 'angular', component: g },
                { path: 'what-is-covalent', component: l.a, data: { resourceUrl: 'docs/WHAT_IS_COVALENT.md' } },
              ],
            },
            {
              path: 'theming',
              children: [
                { path: '', redirectTo: 'icon-sets' },
                { path: 'sass-mixins', component: W },
                { path: 'icon-sets', component: f },
                { path: 'custom-theme', component: y },
              ],
            },
          ],
          path: 'docs',
        },
      ]);
      n.d(e, 'DocsModule', function() {
        return k;
      });
      let k = (() => {
        class t {}
        return (
          (t.ɵmod = c.Qb({ type: t })),
          (t.ɵinj = c.Pb({
            factory: function(e) {
              return new (e || t)();
            },
            imports: [[i.c, s.f, o.d, p.c, u.e, d.b, m.e, v.b, w.b, S.f, S.g, A.a, Y.a, a.a, M.a, x.a, I.a, $]],
          })),
          t
        );
      })();
    },
  },
]);
