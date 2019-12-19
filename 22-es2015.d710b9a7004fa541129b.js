(window.webpackJsonp = window.webpackJsonp || []).push([
  [22],
  {
    l09l: function(t, e, o) {
      'use strict';
      var n = o('ofXK'),
        i = o('qDEf'),
        a = o('fXoL'),
        r = o('/t3+'),
        s = o('bTqV'),
        c = o('Qu3c'),
        l = o('NFeN');
      const d = { title: 'Help', close: 'Close', dock: 'Dock', unDock: 'Undock' };
      let h = (() => {
        class t {
          constructor() {
            (this.toolbarColor = 'primary'),
              (this.toolbarHeight = 56),
              (this.docked = !1),
              (this.closed = new a.m()),
              (this.dockToggled = new a.m());
          }
          get markdownNavigatorLabels() {
            if (this.labels) {
              const { goHome: t, goBack: e, emptyState: o } = this.labels;
              return { goHome: t, goBack: e, emptyState: o };
            }
          }
          get titleLabel() {
            return (this.labels && this.labels.title) || d.title;
          }
          get closeLabel() {
            return (this.labels && this.labels.close) || d.close;
          }
          get toggleDockedStateLabel() {
            return this.docked
              ? (this.labels && this.labels.unDock) || d.unDock
              : (this.labels && this.labels.dock) || d.dock;
          }
          toggleDockedState() {
            this.dockToggled.emit(this.docked);
          }
        }
        return (
          (t.ɵfac = function(e) {
            return new (e || t)();
          }),
          (t.ɵcmp = a.Mb({
            type: t,
            selectors: [['td-markdown-navigator-window']],
            inputs: {
              items: 'items',
              labels: 'labels',
              toolbarColor: 'toolbarColor',
              startAt: 'startAt',
              compareWith: 'compareWith',
              docked: 'docked',
            },
            outputs: { closed: 'closed', dockToggled: 'dockToggled' },
            decls: 9,
            vars: 14,
            consts: [
              [1, 'td-markdown-navigator-window-toolbar', 3, 'color'],
              ['layout', 'row', 'layout-align', 'start center', 'flex', ''],
              ['flex', '', 1, 'mat-title', 'td-markdown-navigator-window-title'],
              ['mat-icon-button', '', 1, 'td-markdown-navigator-window-close', 3, 'matTooltip', 'click'],
              [3, 'items', 'labels', 'startAt', 'compareWith'],
            ],
            template: function(t, e) {
              1 & t &&
                (a.Yb(0, 'mat-toolbar', 0),
                a.Yb(1, 'mat-toolbar-row'),
                a.Yb(2, 'div', 1),
                a.Yb(3, 'span', 2),
                a.Tc(4),
                a.Wb(),
                a.Yb(5, 'button', 3),
                a.gc('click', function(t) {
                  return e.closed.emit();
                }),
                a.Yb(6, 'mat-icon'),
                a.Tc(7, ' close '),
                a.Wb(),
                a.Wb(),
                a.Wb(),
                a.Wb(),
                a.Wb(),
                a.Tb(8, 'td-markdown-navigator', 4)),
                2 & t &&
                  (a.Pc('min-height', e.toolbarHeight, 'px')('cursor', e.docked ? 'inherit' : 'move'),
                  a.qc('color', e.toolbarColor),
                  a.Db(1),
                  a.Pc('height', e.toolbarHeight, 'px')('padding-right', 0, 'px'),
                  a.Db(3),
                  a.Vc(' ', e.titleLabel, ' '),
                  a.Db(1),
                  a.qc('matTooltip', e.closeLabel),
                  a.Fb('data-test', 'close-button'),
                  a.Db(1),
                  a.Fb('aria-label', e.closeLabel),
                  a.Db(2),
                  a.Pc('display', e.docked ? 'none' : 'inherit'),
                  a.qc('items', e.items)('labels', e.markdownNavigatorLabels)('startAt', e.startAt)(
                    'compareWith',
                    e.compareWith,
                  ));
            },
            directives: [r.a, r.c, s.b, c.a, l.a, i.a],
            styles: [
              '[_nghost-%COMP%]{height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.td-markdown-navigator-window-title[_ngcontent-%COMP%]{margin-bottom:0}  .td-draggable-markdown-navigator-window-wrapper>.mat-dialog-container{padding:0}',
            ],
            changeDetection: 0,
          })),
          t
        );
      })();
      var g = o('MutI'),
        m = o('bv9b'),
        b = o('PdbM'),
        u = o('PWEM');
      const k = { bottom: '0px', right: '0px' },
        w = '360px',
        p = '56px',
        f = {
          hasBackdrop: !1,
          closeOnNavigation: !0,
          panelClass: 'td-draggable-markdown-navigator-window-wrapper',
          position: k,
          height: '75vh',
          width: w,
          maxWidth: '100vw',
        };
      let v = (() => {
          class t {
            constructor(t, e, o) {
              (this._tdDialogService = t),
                (this._document = e),
                (this.rendererFactory = o),
                (this.markdownNavigatorWindowDialog = void 0),
                (this.markdownNavigatorWindowDialogsOpen = 0),
                (this._renderer2 = o.createRenderer(void 0, void 0));
            }
            open(t) {
              this.close();
              const e = Object.assign(Object.assign({}, f), t.dialogConfig),
                { matDialogRef: o, dragRefSubject: n } = this._tdDialogService.openDraggable({
                  component: h,
                  config: e,
                  dragHandleSelectors: ['.td-markdown-navigator-window-toolbar'],
                  draggableClass: 'td-draggable-markdown-navigator-window',
                });
              return (
                (this.markdownNavigatorWindowDialog = o),
                (this.markdownNavigatorWindowDialog.componentInstance.items = t.items),
                (this.markdownNavigatorWindowDialog.componentInstance.labels = t.labels),
                (this.markdownNavigatorWindowDialog.componentInstance.startAt = t.startAt),
                (this.markdownNavigatorWindowDialog.componentInstance.compareWith = t.compareWith),
                (this.markdownNavigatorWindowDialog.componentInstance.toolbarColor =
                  'toolbarColor' in t ? t.toolbarColor : 'primary'),
                this.markdownNavigatorWindowDialogsOpen++,
                n.subscribe((t) => {
                  (this.dragRef = t),
                    (this.resizableDraggableDialog = new u.b(
                      this._document,
                      this._renderer2,
                      this.markdownNavigatorWindowDialog,
                      this.dragRef,
                    ));
                }),
                this._handleEvents(),
                this.markdownNavigatorWindowDialog
              );
            }
            close() {
              this.markdownNavigatorWindowDialog &&
                (this.resizableDraggableDialog && this.resizableDraggableDialog.detach(),
                this.markdownNavigatorWindowDialog.close());
            }
            get isOpen() {
              return this.markdownNavigatorWindowDialogsOpen > 0;
            }
            _handleEvents() {
              let t, e;
              this.markdownNavigatorWindowDialog.componentInstance.closed.subscribe(() => this.close()),
                this.markdownNavigatorWindowDialog.componentInstance.dockToggled.subscribe((o) => {
                  o
                    ? ((this.markdownNavigatorWindowDialog.componentInstance.docked = !1),
                      this.markdownNavigatorWindowDialog.updateSize(e.width, e.height),
                      this.markdownNavigatorWindowDialog.updatePosition({
                        top: '0px',
                        right: '0px',
                        bottom: '0px',
                        left: '0px',
                      }),
                      this.dragRef.setFreeDragPosition(t),
                      (this.dragRef.disabled = !1),
                      this.resizableDraggableDialog.attach())
                    : ((e = this._getDialogSize(this.markdownNavigatorWindowDialog)),
                      (t = this.dragRef.getFreeDragPosition()),
                      (this.markdownNavigatorWindowDialog.componentInstance.docked = !0),
                      this.markdownNavigatorWindowDialog.updateSize(w, p),
                      this.markdownNavigatorWindowDialog.updatePosition(k),
                      this.dragRef.reset(),
                      (this.dragRef.disabled = !0),
                      this.resizableDraggableDialog.detach());
                }),
                this.markdownNavigatorWindowDialog
                  .afterClosed()
                  .toPromise()
                  .then(() => {
                    this.markdownNavigatorWindowDialogsOpen--;
                  });
            }
            _getDialogSize(t) {
              const { width: e, height: o } = getComputedStyle(this._document.getElementById(t.id).parentElement);
              return { width: e, height: o };
            }
          }
          return (
            (t.ɵfac = function(e) {
              return new (e || t)(a.cc(u.c), a.cc(n.e), a.cc(a.F));
            }),
            (t.ɵprov = a.Ob({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        D = (() => {
          class t {}
          return (
            (t.ɵmod = a.Qb({ type: t })),
            (t.ɵinj = a.Pb({
              factory: function(e) {
                return new (e || t)();
              },
              providers: [v],
              imports: [[n.c, s.c, c.b, g.e, l.b, m.b, r.b, b.a, u.a]],
            })),
            t
          );
        })();
      o.d(e, 'a', function() {
        return D;
      }),
        o.d(e, 'b', function() {
          return v;
        });
    },
    qDEf: function(t, e, o) {
      'use strict';
      o.d(e, 'a', function() {
        return O;
      });
      var n = o('mrSG'),
        i = o('UBqq'),
        a = o('fXoL'),
        r = o('ofXK'),
        s = o('bv9b'),
        c = o('f0Cb'),
        l = o('bTqV'),
        d = o('Qu3c'),
        h = o('NFeN'),
        g = o('MutI'),
        m = o('FKr1'),
        b = o('Xva0'),
        u = o('v+MA');
      const k = ['markdownWrapper'];
      function w(t, e) {
        1 & t && a.Tb(0, 'mat-progress-bar', 5);
      }
      function p(t, e) {
        if (1 & t) {
          const t = a.Zb();
          a.Yb(0, 'button', 8),
            a.gc('click', function(e) {
              return a.Ic(t), a.kc(3).reset();
            }),
            a.Yb(1, 'mat-icon'),
            a.Tc(2, ' home '),
            a.Wb(),
            a.Wb();
        }
        if (2 & t) {
          const t = a.kc(3);
          a.qc('matTooltip', t.goHomeLabel),
            a.Fb('data-test', 'home-button'),
            a.Db(1),
            a.Fb('aria-label', t.goHomeLabel);
        }
      }
      function f(t, e) {
        if (1 & t) {
          const t = a.Zb();
          a.Yb(0, 'button', 8),
            a.gc('click', function(e) {
              return a.Ic(t), a.kc(3).goBack();
            }),
            a.Yb(1, 'mat-icon'),
            a.Tc(2, ' arrow_back '),
            a.Wb(),
            a.Wb();
        }
        if (2 & t) {
          const t = a.kc(3);
          a.qc('matTooltip', t.goBackLabel),
            a.Fb('data-test', 'back-button'),
            a.Db(1),
            a.Fb('aria-label', t.goBackLabel);
        }
      }
      function v(t, e) {
        if ((1 & t && (a.Yb(0, 'span', 9), a.Tc(1), a.Wb()), 2 & t)) {
          const t = a.kc(3);
          a.Fb('data-test', 'title'), a.Db(1), a.Vc(' ', t.currentItemTitle, ' ');
        }
      }
      function D(t, e) {
        if (
          (1 & t &&
            (a.Vb(0),
            a.Yb(1, 'div'),
            a.Rc(2, p, 3, 3, 'button', 6),
            a.Rc(3, f, 3, 3, 'button', 6),
            a.Rc(4, v, 2, 2, 'span', 7),
            a.Wb(),
            a.Tb(5, 'mat-divider'),
            a.Ub()),
          2 & t)
        ) {
          const t = a.kc(2);
          a.Db(1),
            a.Pc('display', 'flex'),
            a.Db(1),
            a.qc('ngIf', t.showHomeButton),
            a.Db(1),
            a.qc('ngIf', t.showGoBackButton),
            a.Db(1),
            a.qc('ngIf', t.currentItemTitle),
            a.Db(1),
            a.Pc('position', 'relative');
        }
      }
      function I(t, e) {
        if (1 & t) {
          const t = a.Zb();
          a.Yb(0, 'button', 12),
            a.gc('click', function(o) {
              a.Ic(t);
              const n = e.$implicit;
              return a.kc(3).handleItemSelected(n);
            }),
            a.Yb(1, 'mat-icon', 13),
            a.Tc(2, ' subject '),
            a.Wb(),
            a.Yb(3, 'span', 14),
            a.Tc(4),
            a.Wb(),
            a.Tb(5, 'mat-divider'),
            a.Wb();
        }
        if (2 & t) {
          const t = e.$implicit,
            o = a.kc(3);
          a.qc('matTooltip', o.getTitle(t)), a.Db(4), a.Vc(' ', o.getTitle(t), ' ');
        }
      }
      function M(t, e) {
        if (
          (1 & t && (a.Yb(0, 'div', 10), a.Yb(1, 'mat-action-list'), a.Rc(2, I, 6, 2, 'button', 11), a.Wb(), a.Wb()),
          2 & t)
        ) {
          const t = a.kc(2);
          a.Db(2), a.qc('ngForOf', t.currentMenuItems);
        }
      }
      function y(t, e) {
        if ((1 & t && a.Tb(0, 'td-flavored-markdown-loader', 19), 2 & t)) {
          const t = a.kc(3);
          a.qc('url', t.url)('httpOptions', t.httpOptions)('anchor', t.anchor);
        }
      }
      function W(t, e) {
        if ((1 & t && a.Tb(0, 'td-flavored-markdown', 20), 2 & t)) {
          const t = a.kc(3);
          a.qc('content', t.markdownString)('hostedUrl', t.url)('anchor', t.anchor);
        }
      }
      function T(t, e) {
        if (
          (1 & t &&
            (a.Yb(0, 'div', 15, 16),
            a.Rc(2, y, 1, 3, 'td-flavored-markdown-loader', 17),
            a.Rc(3, W, 1, 3, 'td-flavored-markdown', 18),
            a.Wb()),
          2 & t)
        ) {
          const t = a.kc(2);
          a.Db(2), a.qc('ngIf', t.showTdMarkdownLoader), a.Db(1), a.qc('ngIf', t.showTdMarkdown);
        }
      }
      function S(t, e) {
        if (
          (1 & t &&
            (a.Vb(0),
            a.Rc(1, w, 1, 0, 'mat-progress-bar', 2),
            a.Rc(2, D, 6, 5, 'ng-container', 0),
            a.Rc(3, M, 3, 1, 'div', 3),
            a.Rc(4, T, 4, 2, 'div', 4),
            a.Ub()),
          2 & t)
        ) {
          const t = a.kc();
          a.Db(1),
            a.qc('ngIf', t.loading),
            a.Db(1),
            a.qc('ngIf', t.showHeader),
            a.Db(1),
            a.qc('ngIf', t.showMenu),
            a.Db(1),
            a.qc('ngIf', t.showTdMarkdownLoader || t.showTdMarkdown);
        }
      }
      function x(t, e) {
        if (
          (1 & t &&
            (a.Yb(0, 'div', 21),
            a.Yb(1, 'mat-icon', 22),
            a.Tc(2, 'subject'),
            a.Wb(),
            a.Yb(3, 'h2'),
            a.Tc(4),
            a.Wb(),
            a.Wb()),
          2 & t)
        ) {
          const t = a.kc();
          a.Db(4), a.Uc(t.emptyStateLabel);
        }
      }
      const _ = { goHome: 'Go home', goBack: 'Go back', emptyState: 'No item(s) to display' };
      function C(t, e) {
        return t === e;
      }
      let O = (() => {
        class t {
          constructor(t, e) {
            (this._markdownUrlLoaderService = t),
              (this._changeDetectorRef = e),
              (this.historyStack = []),
              (this.currentMenuItems = []),
              (this.loading = !1);
          }
          clickListener(t) {
            const e = t.srcElement;
            var o;
            e.matches('a[href]') && ((o = e), !Object(i.d)(o) && o.pathname.endsWith('.md')) && this.handleLinkClick(t);
          }
          get showGoBackButton() {
            return this.historyStack.length > 0;
          }
          get showHomeButton() {
            return this.historyStack.length > 1;
          }
          get showHeader() {
            return this.showHomeButton || this.showGoBackButton || !!this.currentItemTitle;
          }
          get showMenu() {
            return this.currentMenuItems && this.currentMenuItems.length > 0;
          }
          get showTdMarkdownLoader() {
            return !!this.currentMarkdownItem && !!this.currentMarkdownItem.url && !this.showTdMarkdown;
          }
          get showTdMarkdown() {
            return !!this.currentMarkdownItem && !!this.currentMarkdownItem.markdownString;
          }
          get url() {
            if (this.currentMarkdownItem) return this.currentMarkdownItem.url;
          }
          get httpOptions() {
            if (this.currentMarkdownItem) return this.currentMarkdownItem.httpOptions;
          }
          get markdownString() {
            if (this.currentMarkdownItem) return this.currentMarkdownItem.markdownString;
          }
          get anchor() {
            if (this.currentMarkdownItem) return this.currentMarkdownItem.anchor;
          }
          get showEmptyState() {
            return !this.items || this.items.length < 1;
          }
          get goHomeLabel() {
            return (this.labels && this.labels.goHome) || _.goHome;
          }
          get goBackLabel() {
            return (this.labels && this.labels.goBack) || _.goBack;
          }
          get emptyStateLabel() {
            return (this.labels && this.labels.emptyState) || _.emptyState;
          }
          get currentItemTitle() {
            return this.historyStack.length < 1
              ? ''
              : this.currentMarkdownItem
              ? this.getTitle(this.currentMarkdownItem)
              : this.historyStack.length > 0
              ? this.getTitle(this.historyStack[this.historyStack.length - 1])
              : '';
          }
          ngOnChanges(t) {
            t.items && (this.reset(), this.items && this.startAt && this._jumpTo(this.startAt));
          }
          reset() {
            !this.items || 1 !== this.items.length || (this.items[0].children && 0 !== this.items[0].children.length)
              ? ((this.currentMenuItems = this.items), (this.currentMarkdownItem = void 0))
              : ((this.currentMenuItems = []), (this.currentMarkdownItem = this.items[0])),
              (this.historyStack = []),
              this._changeDetectorRef.markForCheck();
          }
          goBack() {
            if (this.historyStack.length > 1) {
              const t = this.historyStack[this.historyStack.length - 2];
              t.children && t.children.length > 0
                ? ((this.currentMenuItems = t.children), (this.currentMarkdownItem = void 0))
                : ((this.currentMenuItems = []), (this.currentMarkdownItem = t)),
                (this.historyStack = this.historyStack.slice(0, -1));
            } else this.reset();
            this._changeDetectorRef.markForCheck();
          }
          handleItemSelected(t) {
            (this.historyStack = [...this.historyStack, t]),
              !t.children || 1 !== t.children.length || (t.children[0].children && 0 !== t.children[0].children.length)
                ? t.children && t.children.length > 0
                  ? (this.currentMenuItems = t.children)
                  : ((this.currentMenuItems = []), (this.currentMarkdownItem = t))
                : ((this.currentMenuItems = []), (this.currentMarkdownItem = t.children[0])),
              this._changeDetectorRef.markForCheck();
          }
          getTitle(t) {
            if (t)
              return (
                Object(i.e)(t.anchor) ||
                t.title ||
                (function(t) {
                  if (t) {
                    const e = new URL(t);
                    if (e.hash) return Object(i.e)(e.hash);
                    {
                      const t = e.pathname.split('/');
                      return t[t.length - 1].replace(/\.[^/.]+$/, '');
                    }
                  }
                })(t.url) ||
                (function(t) {
                  if (t) {
                    const e = t.split(/[\r\n]+/).find((t) => !!t);
                    return Object(i.e)(e).trim();
                  }
                })(t.markdownString) ||
                ''
              ).trim();
          }
          _jumpTo(t) {
            this.reset(),
              this.items &&
                this.items.length > 0 &&
                (
                  (function t(e, o, n) {
                    if (e)
                      for (const i of e) {
                        if (n(i, o)) return [i];
                        const e = t(i.children, o, n);
                        if (e) return [i, ...e];
                      }
                  })(this.items, t, this.compareWith || C) || []
                ).forEach((t) => this.handleItemSelected(t)),
              this._changeDetectorRef.markForCheck();
          }
          handleLinkClick(t) {
            return Object(n.a)(this, void 0, void 0, function*() {
              t.preventDefault();
              const e = new URL(t.target.href);
              (this.loading = !0), this._changeDetectorRef.markForCheck();
              try {
                const t = yield this._markdownUrlLoaderService.load(e.href);
                this.handleItemSelected({ markdownString: t, url: e.href }),
                  (this.markdownWrapper.nativeElement.scrollTop = 0);
              } catch (o) {
                window.open(e.href, '_blank').focus();
              } finally {
                this.loading = !1;
              }
              this._changeDetectorRef.markForCheck();
            });
          }
        }
        return (
          (t.ɵfac = function(e) {
            return new (e || t)(a.Sb(i.c), a.Sb(a.h));
          }),
          (t.ɵcmp = a.Mb({
            type: t,
            selectors: [['td-markdown-navigator']],
            viewQuery: function(t, e) {
              var o;
              1 & t && a.Yc(k, !0), 2 & t && a.Ec((o = a.hc())) && (e.markdownWrapper = o.first);
            },
            hostBindings: function(t, e, o) {
              1 & t &&
                a.gc('click', function(t) {
                  return e.clickListener(t);
                });
            },
            inputs: { items: 'items', labels: 'labels', startAt: 'startAt', compareWith: 'compareWith' },
            features: [a.Bb()],
            decls: 2,
            vars: 2,
            consts: [
              [4, 'ngIf'],
              ['layout', 'column', 'layout-align', 'center center', 'class', ' empty-state', 4, 'ngIf'],
              ['mode', 'indeterminate', 'color', 'accent', 4, 'ngIf'],
              ['class', 'td-markdown-list', 4, 'ngIf'],
              ['class', 'markdown-wrapper', 4, 'ngIf'],
              ['mode', 'indeterminate', 'color', 'accent'],
              ['mat-icon-button', '', 3, 'matTooltip', 'click', 4, 'ngIf'],
              ['flex', '', 'class', 'mat-body-2 title truncate', 4, 'ngIf'],
              ['mat-icon-button', '', 3, 'matTooltip', 'click'],
              ['flex', '', 1, 'mat-body-2', 'title', 'truncate'],
              [1, 'td-markdown-list'],
              [
                'mat-list-item',
                '',
                'matTooltipPosition',
                'before',
                'matTooltipShowDelay',
                '500',
                3,
                'matTooltip',
                'click',
                4,
                'ngFor',
                'ngForOf',
              ],
              [
                'mat-list-item',
                '',
                'matTooltipPosition',
                'before',
                'matTooltipShowDelay',
                '500',
                3,
                'matTooltip',
                'click',
              ],
              ['matListIcon', ''],
              ['matLine', '', 1, 'truncate'],
              [1, 'markdown-wrapper'],
              ['markdownWrapper', ''],
              [3, 'url', 'httpOptions', 'anchor', 4, 'ngIf'],
              [3, 'content', 'hostedUrl', 'anchor', 4, 'ngIf'],
              [3, 'url', 'httpOptions', 'anchor'],
              [3, 'content', 'hostedUrl', 'anchor'],
              ['layout', 'column', 'layout-align', 'center center', 1, 'empty-state'],
              ['matListAvatar', ''],
            ],
            template: function(t, e) {
              1 & t && (a.Rc(0, S, 5, 4, 'ng-container', 0), a.Rc(1, x, 5, 1, 'div', 1)),
                2 & t && (a.qc('ngIf', !e.showEmptyState), a.Db(1), a.qc('ngIf', e.showEmptyState));
            },
            directives: [r.t, s.a, c.a, l.b, d.a, h.a, g.a, r.s, g.d, g.c, m.h, b.a, u.a, g.b],
            styles: [
              '[_nghost-%COMP%]{position:relative;height:100%;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}[_nghost-%COMP%]   .markdown-wrapper[_ngcontent-%COMP%], [_nghost-%COMP%]   .td-markdown-list[_ngcontent-%COMP%]{min-height:1px;overflow-y:auto;-webkit-box-flex:1;-ms-flex:1;flex:1;box-sizing:border-box}[_nghost-%COMP%]   .markdown-wrapper[_ngcontent-%COMP%]{padding:16px 16px 0}[_nghost-%COMP%]   .td-markdown-list[_ngcontent-%COMP%] > .mat-list[_ngcontent-%COMP%]{padding-top:0}[_nghost-%COMP%]   td-flavored-markdown-loader[_ngcontent-%COMP%]     .mat-progress-bar{top:0;left:0;right:0;position:absolute}[_nghost-%COMP%]   .title[_ngcontent-%COMP%]{display:inline-block;vertical-align:middle;margin:8px 0;padding-left:16px}.truncate[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.empty-state[_ngcontent-%COMP%]{padding:32px}.empty-state[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:4em}',
            ],
            changeDetection: 0,
          })),
          t
        );
      })();
    },
  },
]);
