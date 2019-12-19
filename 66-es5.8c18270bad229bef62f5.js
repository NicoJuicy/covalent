function _classCallCheck(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
}
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
        b = n('fXoL'),
        h = (function() {
          var t = function t() {
            _classCallCheck(this, t);
          };
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
      var a,
        o,
        i,
        c,
        s = n('7hH2'),
        r = n('XhcP'),
        l = n('ofXK'),
        m = n('fXoL'),
        b = (n('ZI6o'), n('Cb7K'), n('tyNb')),
        h = n('f3AP'),
        p = n('W6/J'),
        u = n('Wp6s'),
        d = n('f0Cb'),
        T = n('P3Mj'),
        g = n('bTqV'),
        f = n('MutI'),
        y = n('NFeN'),
        W = n('FKr1'),
        Y =
          (((c = function t() {
            _classCallCheck(this, t), (this.routeAnimation = !0), (this.classAnimation = !0);
          }).ɵfac = function(t) {
            return new (t || c)();
          }),
          (c.ɵcmp = m.Mb({
            type: c,
            selectors: [['docs-angular-material']],
            hostBindings: function(t, e, n) {
              1 & t && m.Eb(2),
                2 & t && (m.Xc('@routeAnimation', e.routeAnimation), m.Ib('td-route-animation', e.classAnimation));
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
                (m.Yb(0, 'section', 0),
                m.Yb(1, 'h1', 1),
                m.Tc(2, 'Angular Material'),
                m.Wb(),
                m.Yb(3, 'p', 2),
                m.Tc(4, ' Material Design components '),
                m.Wb(),
                m.Wb(),
                m.Yb(5, 'section'),
                m.Yb(6, 'h3'),
                m.Tc(7, 'Core Components'),
                m.Wb(),
                m.Yb(8, 'p'),
                m.Tc(
                  9,
                  'The UI Platform is built on top of @angular/material components which are the core of Covalent.',
                ),
                m.Wb(),
                m.Yb(10, 'h3'),
                m.Tc(11, 'New & Custom Components'),
                m.Wb(),
                m.Yb(12, 'p'),
                m.Tc(
                  13,
                  ' With the UI Platform and your app usage, we suggest to follow the official material spec as closely as possible for these reasons: ',
                ),
                m.Wb(),
                m.Yb(14, 'ul'),
                m.Yb(15, 'li'),
                m.Tc(16, 'So our products remain consistent'),
                m.Wb(),
                m.Yb(17, 'li'),
                m.Tc(18, 'To be able to use public material design resources'),
                m.Wb(),
                m.Yb(19, 'li'),
                m.Tc(20, 'To onboard new hires more easily'),
                m.Wb(),
                m.Yb(21, 'li'),
                m.Tc(22, 'So devs can easily work on multiple products'),
                m.Wb(),
                m.Yb(23, 'li'),
                m.Tc(24, 'To enable easy updates and pull down the latest'),
                m.Wb(),
                m.Wb(),
                m.Yb(25, 'p'),
                m.Tc(
                  26,
                  " Obviously we'll need to extend and customize material, but when doing so try to submit to the main UI Platform repo and collaborate with others to ensure standards. ",
                ),
                m.Wb(),
                m.Yb(27, 'a', 3),
                m.Tc(28, 'Components'),
                m.Wb(),
                m.Yb(29, 'a', 4),
                m.Tc(30, 'Github Repo'),
                m.Wb(),
                m.Wb(),
                m.Yb(31, 'mat-card', 5),
                m.Yb(32, 'mat-card-title'),
                m.Tc(33, 'Resources'),
                m.Wb(),
                m.Tb(34, 'mat-divider'),
                m.Yb(35, 'mat-nav-list'),
                m.Yb(36, 'a', 6),
                m.Yb(37, 'mat-icon'),
                m.Tc(38, 'launch'),
                m.Wb(),
                m.Yb(39, 'span', 7),
                m.Tc(40, 'Why Angular Material?'),
                m.Wb(),
                m.Wb(),
                m.Tb(41, 'mat-divider'),
                m.Yb(42, 'a', 8),
                m.Yb(43, 'mat-icon'),
                m.Tc(44, 'launch'),
                m.Wb(),
                m.Yb(45, 'span', 7),
                m.Tc(46, 'Angular Material Docs Site'),
                m.Wb(),
                m.Wb(),
                m.Tb(47, 'mat-divider'),
                m.Yb(48, 'a', 9),
                m.Yb(49, 'mat-icon'),
                m.Tc(50, 'launch'),
                m.Wb(),
                m.Yb(51, 'span', 7),
                m.Tc(52, 'Angular Material Feature Status'),
                m.Wb(),
                m.Wb(),
                m.Wb(),
                m.Wb());
            },
            directives: [g.a, u.a, u.g, d.a, f.g, f.d, y.a, W.h],
            styles: [''],
            data: { animation: [h.b] },
          })),
          c),
        v =
          (((i = function t() {
            _classCallCheck(this, t), (this.routeAnimation = !0), (this.classAnimation = !0);
          }).ɵfac = function(t) {
            return new (t || i)();
          }),
          (i.ɵcmp = m.Mb({
            type: i,
            selectors: [['docs-icons']],
            hostBindings: function(t, e, n) {
              1 & t && m.Eb(2),
                2 & t && (m.Xc('@routeAnimation', e.routeAnimation), m.Ib('td-route-animation', e.classAnimation));
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
                (m.Yb(0, 'section', 0),
                m.Tc(1, '\n  '),
                m.Yb(2, 'h1', 1),
                m.Tc(3, 'Material Design Icons'),
                m.Wb(),
                m.Tc(4, '\n\n  '),
                m.Yb(5, 'p', 2),
                m.Tc(6, '\n    Access 1000+ SVG or Font icons\n  '),
                m.Wb(),
                m.Tc(7, '\n'),
                m.Wb(),
                m.Tc(8, '\n\n'),
                m.Yb(9, 'section', 3),
                m.Tc(10, '\n    '),
                m.Yb(11, 'h3', 4),
                m.Tc(12, 'Font Icons'),
                m.Wb(),
                m.Tc(13, '\n    '),
                m.Tb(14, 'mat-divider'),
                m.Tc(15, '\n    '),
                m.Yb(16, 'p'),
                m.Tc(17, 'Font icons using ligatures are the default option and simple to use:'),
                m.Wb(),
                m.Tc(18, '\n    '),
                m.Yb(19, 'td-highlight', 5),
                m.Tc(20, '\n      '),
                m.Tc(21, ' <mat-icon>home</mat-icon> '),
                m.Tc(22, '\n    '),
                m.Wb(),
                m.Tc(23, '\n    '),
                m.Yb(24, 'p', 6),
                m.Tc(25, '\n      which renders\n      '),
                m.Yb(26, 'mat-icon'),
                m.Tc(27, 'home'),
                m.Wb(),
                m.Tc(28, '\n    '),
                m.Wb(),
                m.Tc(29, '\n\n    '),
                m.Yb(30, 'h3', 4),
                m.Tc(31, 'SVG Icons (from Safe URLS)'),
                m.Wb(),
                m.Tc(32, '\n    '),
                m.Tb(33, 'mat-divider'),
                m.Tc(34, '\n    '),
                m.Yb(35, 'p'),
                m.Tc(
                  36,
                  '\n      SVG icons have to be sanitized before they can be used with [DomSanitizer] and then icons need to be registered in\n      [MatIconRegistry] so it can be referred later on:\n    ',
                ),
                m.Wb(),
                m.Tc(37, '\n    '),
                m.Yb(38, 'p'),
                m.Tc(39, 'Typescript:'),
                m.Wb(),
                m.Tc(40, '\n    '),
                m.Yb(41, 'td-highlight', 7),
                m.Tc(42, '\n      '),
                m.Tc(
                  43,
                  " \n      import { DomSanitizer } from '@angular/platform-browser'; \n      import { MatIconRegistry } from '@angular/material/icon';\n      ...\n      ...\n      constructor(private _iconRegistry: MatIconRegistry, private _domSanitizer:DomSanitizer) { \n        this._iconRegistry.addSvgIconInNamespace('assets', 'sun',\n        this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/sun.svg')); \n      } ",
                ),
                m.Tc(44, '\n    '),
                m.Wb(),
                m.Tc(45, '\n    '),
                m.Yb(46, 'p'),
                m.Tc(47, 'HTML:'),
                m.Wb(),
                m.Tc(48, '\n    '),
                m.Yb(49, 'td-highlight', 8),
                m.Tc(50, '\n      '),
                m.Tc(51, ' <mat-icon svgIcon="assets:sun"></mat-icon> '),
                m.Tc(52, '\n    '),
                m.Wb(),
                m.Tc(53, '\n  '),
                m.Yb(54, 'a', 9),
                m.Tc(55, 'Search Icons'),
                m.Wb(),
                m.Tc(56, '\n  '),
                m.Wb(),
                m.Tc(57, '\n\n'));
            },
            directives: [d.a, T.a, y.a, g.a],
            styles: [''],
            data: { animation: [h.b] },
          })),
          i),
        w =
          (((o = function t() {
            _classCallCheck(this, t), (this.routeAnimation = !0), (this.classAnimation = !0);
          }).ɵfac = function(t) {
            return new (t || o)();
          }),
          (o.ɵcmp = m.Mb({
            type: o,
            selectors: [['docs-theme']],
            hostBindings: function(t, e, n) {
              1 & t && m.Eb(2),
                2 & t && (m.Xc('@routeAnimation', e.routeAnimation), m.Ib('td-route-animation', e.classAnimation));
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
                (m.Yb(0, 'section', 0),
                m.Tc(1, '\n    '),
                m.Yb(2, 'h1', 1),
                m.Tc(3, 'Custom Theme'),
                m.Wb(),
                m.Tc(4, '\n  \n    '),
                m.Yb(5, 'p', 2),
                m.Tc(6, '\n        SCSS variables to customize the color scheme\n    '),
                m.Wb(),
                m.Tc(7, '\n  '),
                m.Wb(),
                m.Tc(8, '\n  \n  '),
                m.Yb(9, 'section', 3),
                m.Tc(10, '\n      '),
                m.Yb(11, 'h3', 4),
                m.Tc(12, 'SCSS Variables'),
                m.Wb(),
                m.Tc(13, '\n      '),
                m.Tb(14, 'mat-divider'),
                m.Tc(15, '\n   \n\n    '),
                m.Yb(16, 'p'),
                m.Tc(17, 'Simply edit the /theme.scss file and update these SCSS variables:'),
                m.Wb(),
                m.Tc(18, '\n    '),
                m.Yb(19, 'td-highlight', 5),
                m.Tc(
                  20,
                  "\n        @import '~@angular/material/theming';\n        @import '~@covalent/core/theming/all-theme';\n        @import '~@covalent/markdown/markdown-theme';\n        @import '~@covalent/highlight/highlight-theme';\n        // Plus imports for other components in your app.\n  \n        // Define a custom typography config that overrides the font-family\n        // or any typography level.\n        $typography: mat-typography-config(\n          $font-family: 'Roboto, monospace',\n          $headline: mat-typography-level(32px, 48px, 700)\n        );\n  \n        @include mat-core($typography); // $typography is an **optional** argument for the mat-core\n  \n        // Define the palettes for your theme using the Material Design palettes available in palette.scss\n        // (imported above). For each palette, you can optionally specify a default, lighter, and darker\n        // hue.\n        $primary: mat-palette($mat-blue, 700);\n        $accent:  mat-palette($mat-orange, 800, A100, A400);\n  \n        // The warn palette is optional (defaults to red).\n        $warn:    mat-palette($mat-red, 600);\n  \n        // Create the theme object (a Sass map containing all of the palettes).\n        $theme: mat-light-theme($primary, $accent, $warn);\n  \n        // Include theme styles for core and each component used in your app.\n        // Alternatively, you can import and @include the theme mixins for each component\n        // that you are using.\n        @include angular-material-theme($theme);\n        @include covalent-theme($theme, $typography); // $typography is an **optional** argument for the covalent-theme\n        @include covalent-markdown-theme($theme);\n        @include covalent-highlight-theme();\n    ",
                ),
                m.Wb(),
                m.Tc(21, '\n    '),
                m.Yb(22, 'p'),
                m.Tc(23, '\n      Color palettes and hues follow the official\n      '),
                m.Yb(24, 'a', 6),
                m.Tc(25, 'Material Design Spec'),
                m.Wb(),
                m.Tc(26, '.\n    '),
                m.Wb(),
                m.Tc(27, '\n  '),
                m.Tb(28, 'mat-divider'),
                m.Tc(29, '\n    '),
                m.Yb(30, 'a', 7),
                m.Tc(31, 'Theming Docs'),
                m.Wb(),
                m.Tc(32, '\n\n'),
                m.Wb());
            },
            directives: [d.a, T.a, g.a],
            styles: ['.mat-fab-position-bottom-right[_ngcontent-%COMP%]{bottom:20px}'],
            data: { animation: [h.b] },
          })),
          o),
        S =
          (((a = function t() {
            _classCallCheck(this, t), (this.routeAnimation = !0), (this.classAnimation = !0);
          }).ɵfac = function(t) {
            return new (t || a)();
          }),
          (a.ɵcmp = m.Mb({
            type: a,
            selectors: [['utility-sass-mixins']],
            hostBindings: function(t, e, n) {
              1 & t && m.Eb(2),
                2 & t && (m.Xc('@routeAnimation', e.routeAnimation), m.Ib('td-route-animation', e.classAnimation));
            },
            decls: 1,
            vars: 0,
            consts: [['resourceUrl', 'docs/UTILITY_MIXINS.md']],
            template: function(t, e) {
              1 & t && m.Tb(0, 'td-readme-loader', 0);
            },
            directives: [p.a],
            styles: [''],
            data: { animation: [h.b] },
          })),
          a),
        C = n('dE5l'),
        A = n('/t3+'),
        I = n('STbY'),
        k = n('gw4G'),
        _ = n('XkJo'),
        M = n('Kl+F'),
        x = n('zzB2'),
        $ = n('eTLM'),
        D = b.f.forChild([
          {
            children: [
              { path: '', redirectTo: 'get-started' },
              {
                path: 'get-started',
                children: [
                  { path: '', redirectTo: 'what-is-covalent' },
                  { path: 'overview', component: p.a, data: { resourceUrl: 'docs/GETTING_STARTED.md' } },
                  { path: 'angular', component: Y },
                  { path: 'what-is-covalent', component: p.a, data: { resourceUrl: 'docs/WHAT_IS_COVALENT.md' } },
                ],
              },
              {
                path: 'theming',
                children: [
                  { path: '', redirectTo: 'icon-sets' },
                  { path: 'sass-mixins', component: S },
                  { path: 'icon-sets', component: v },
                  { path: 'custom-theme', component: w },
                ],
              },
            ],
            path: 'docs',
          },
        ]);
      n.d(e, 'DocsModule', function() {
        return P;
      });
      var N,
        P =
          (((N = function t() {
            _classCallCheck(this, t);
          }).ɵmod = m.Qb({ type: N })),
          (N.ɵinj = m.Pb({
            factory: function(t) {
              return new (t || N)();
            },
            imports: [[l.c, b.f, r.d, g.c, f.e, y.b, u.e, A.b, I.b, k.f, k.g, _.a, C.a, s.a, x.a, $.a, M.a, D]],
          })),
          N);
    },
  },
]);
