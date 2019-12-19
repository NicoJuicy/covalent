function _toConsumableArray(t) {
  return _arrayWithoutHoles(t) || _iterableToArray(t) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError('Invalid attempt to spread non-iterable instance');
}
function _iterableToArray(t) {
  if (Symbol.iterator in Object(t) || '[object Arguments]' === Object.prototype.toString.call(t)) return Array.from(t);
}
function _arrayWithoutHoles(t) {
  if (Array.isArray(t)) {
    for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
    return n;
  }
}
function _classCallCheck(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
}
function _defineProperties(t, e) {
  for (var n = 0; n < e.length; n++) {
    var o = e[n];
    (o.enumerable = o.enumerable || !1),
      (o.configurable = !0),
      'value' in o && (o.writable = !0),
      Object.defineProperty(t, o.key, o);
  }
}
function _createClass(t, e, n) {
  return e && _defineProperties(t.prototype, e), n && _defineProperties(t, n), t;
}
(window.webpackJsonp = window.webpackJsonp || []).push([
  [22],
  {
    l09l: function(t, e, n) {
      'use strict';
      var o,
        r,
        i,
        a = n('ofXK'),
        c = n('qDEf'),
        s = n('fXoL'),
        l = n('/t3+'),
        d = n('bTqV'),
        h = n('Qu3c'),
        u = n('NFeN'),
        g = 'Help',
        m = 'Close',
        b = 'Dock',
        k = 'Undock',
        f =
          (((o = (function() {
            function t() {
              _classCallCheck(this, t),
                (this.toolbarColor = 'primary'),
                (this.toolbarHeight = 56),
                (this.docked = !1),
                (this.closed = new s.m()),
                (this.dockToggled = new s.m());
            }
            return (
              _createClass(t, [
                {
                  key: 'toggleDockedState',
                  value: function() {
                    this.dockToggled.emit(this.docked);
                  },
                },
                {
                  key: 'markdownNavigatorLabels',
                  get: function() {
                    if (this.labels) {
                      var t = this.labels;
                      return { goHome: t.goHome, goBack: t.goBack, emptyState: t.emptyState };
                    }
                  },
                },
                {
                  key: 'titleLabel',
                  get: function() {
                    return (this.labels && this.labels.title) || g;
                  },
                },
                {
                  key: 'closeLabel',
                  get: function() {
                    return (this.labels && this.labels.close) || m;
                  },
                },
                {
                  key: 'toggleDockedStateLabel',
                  get: function() {
                    return this.docked
                      ? (this.labels && this.labels.unDock) || k
                      : (this.labels && this.labels.dock) || b;
                  },
                },
              ]),
              t
            );
          })()).ɵfac = function(t) {
            return new (t || o)();
          }),
          (o.ɵcmp = s.Mb({
            type: o,
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
                (s.Yb(0, 'mat-toolbar', 0),
                s.Yb(1, 'mat-toolbar-row'),
                s.Yb(2, 'div', 1),
                s.Yb(3, 'span', 2),
                s.Tc(4),
                s.Wb(),
                s.Yb(5, 'button', 3),
                s.gc('click', function(t) {
                  return e.closed.emit();
                }),
                s.Yb(6, 'mat-icon'),
                s.Tc(7, ' close '),
                s.Wb(),
                s.Wb(),
                s.Wb(),
                s.Wb(),
                s.Wb(),
                s.Tb(8, 'td-markdown-navigator', 4)),
                2 & t &&
                  (s.Pc('min-height', e.toolbarHeight, 'px')('cursor', e.docked ? 'inherit' : 'move'),
                  s.qc('color', e.toolbarColor),
                  s.Db(1),
                  s.Pc('height', e.toolbarHeight, 'px')('padding-right', 0, 'px'),
                  s.Db(3),
                  s.Vc(' ', e.titleLabel, ' '),
                  s.Db(1),
                  s.qc('matTooltip', e.closeLabel),
                  s.Fb('data-test', 'close-button'),
                  s.Db(1),
                  s.Fb('aria-label', e.closeLabel),
                  s.Db(2),
                  s.Pc('display', e.docked ? 'none' : 'inherit'),
                  s.qc('items', e.items)('labels', e.markdownNavigatorLabels)('startAt', e.startAt)(
                    'compareWith',
                    e.compareWith,
                  ));
            },
            directives: [l.a, l.c, d.b, h.a, u.a, c.a],
            styles: [
              '[_nghost-%COMP%]{height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.td-markdown-navigator-window-title[_ngcontent-%COMP%]{margin-bottom:0}  .td-draggable-markdown-navigator-window-wrapper>.mat-dialog-container{padding:0}',
            ],
            changeDetection: 0,
          })),
          o),
        w = n('MutI'),
        p = n('bv9b'),
        v = n('PdbM'),
        y = n('PWEM'),
        D = { bottom: '0px', right: '0px' },
        I = {
          hasBackdrop: !1,
          closeOnNavigation: !0,
          panelClass: 'td-draggable-markdown-navigator-window-wrapper',
          position: D,
          height: '75vh',
          width: '360px',
          maxWidth: '100vw',
        },
        M =
          (((i = (function() {
            function t(e, n, o) {
              _classCallCheck(this, t),
                (this._tdDialogService = e),
                (this._document = n),
                (this.rendererFactory = o),
                (this.markdownNavigatorWindowDialog = void 0),
                (this.markdownNavigatorWindowDialogsOpen = 0),
                (this._renderer2 = o.createRenderer(void 0, void 0));
            }
            return (
              _createClass(t, [
                {
                  key: 'open',
                  value: function(t) {
                    var e = this;
                    this.close();
                    var n = Object.assign(Object.assign({}, I), t.dialogConfig),
                      o = this._tdDialogService.openDraggable({
                        component: f,
                        config: n,
                        dragHandleSelectors: ['.td-markdown-navigator-window-toolbar'],
                        draggableClass: 'td-draggable-markdown-navigator-window',
                      }),
                      r = o.matDialogRef,
                      i = o.dragRefSubject;
                    return (
                      (this.markdownNavigatorWindowDialog = r),
                      (this.markdownNavigatorWindowDialog.componentInstance.items = t.items),
                      (this.markdownNavigatorWindowDialog.componentInstance.labels = t.labels),
                      (this.markdownNavigatorWindowDialog.componentInstance.startAt = t.startAt),
                      (this.markdownNavigatorWindowDialog.componentInstance.compareWith = t.compareWith),
                      (this.markdownNavigatorWindowDialog.componentInstance.toolbarColor =
                        'toolbarColor' in t ? t.toolbarColor : 'primary'),
                      this.markdownNavigatorWindowDialogsOpen++,
                      i.subscribe(function(t) {
                        (e.dragRef = t),
                          (e.resizableDraggableDialog = new y.b(
                            e._document,
                            e._renderer2,
                            e.markdownNavigatorWindowDialog,
                            e.dragRef,
                          ));
                      }),
                      this._handleEvents(),
                      this.markdownNavigatorWindowDialog
                    );
                  },
                },
                {
                  key: 'close',
                  value: function() {
                    this.markdownNavigatorWindowDialog &&
                      (this.resizableDraggableDialog && this.resizableDraggableDialog.detach(),
                      this.markdownNavigatorWindowDialog.close());
                  },
                },
                {
                  key: '_handleEvents',
                  value: function() {
                    var t,
                      e,
                      n = this;
                    this.markdownNavigatorWindowDialog.componentInstance.closed.subscribe(function() {
                      return n.close();
                    }),
                      this.markdownNavigatorWindowDialog.componentInstance.dockToggled.subscribe(function(o) {
                        o
                          ? ((n.markdownNavigatorWindowDialog.componentInstance.docked = !1),
                            n.markdownNavigatorWindowDialog.updateSize(e.width, e.height),
                            n.markdownNavigatorWindowDialog.updatePosition({
                              top: '0px',
                              right: '0px',
                              bottom: '0px',
                              left: '0px',
                            }),
                            n.dragRef.setFreeDragPosition(t),
                            (n.dragRef.disabled = !1),
                            n.resizableDraggableDialog.attach())
                          : ((e = n._getDialogSize(n.markdownNavigatorWindowDialog)),
                            (t = n.dragRef.getFreeDragPosition()),
                            (n.markdownNavigatorWindowDialog.componentInstance.docked = !0),
                            n.markdownNavigatorWindowDialog.updateSize('360px', '56px'),
                            n.markdownNavigatorWindowDialog.updatePosition(D),
                            n.dragRef.reset(),
                            (n.dragRef.disabled = !0),
                            n.resizableDraggableDialog.detach());
                      }),
                      this.markdownNavigatorWindowDialog
                        .afterClosed()
                        .toPromise()
                        .then(function() {
                          n.markdownNavigatorWindowDialogsOpen--;
                        });
                  },
                },
                {
                  key: '_getDialogSize',
                  value: function(t) {
                    var e = getComputedStyle(this._document.getElementById(t.id).parentElement);
                    return { width: e.width, height: e.height };
                  },
                },
                {
                  key: 'isOpen',
                  get: function() {
                    return this.markdownNavigatorWindowDialogsOpen > 0;
                  },
                },
              ]),
              t
            );
          })()).ɵfac = function(t) {
            return new (t || i)(s.cc(y.c), s.cc(a.e), s.cc(s.F));
          }),
          (i.ɵprov = s.Ob({ token: i, factory: i.ɵfac })),
          i),
        W =
          (((r = function t() {
            _classCallCheck(this, t);
          }).ɵmod = s.Qb({ type: r })),
          (r.ɵinj = s.Pb({
            factory: function(t) {
              return new (t || r)();
            },
            providers: [M],
            imports: [[a.c, d.c, h.b, w.e, u.b, p.b, l.b, v.a, y.a]],
          })),
          r);
      n.d(e, 'a', function() {
        return W;
      }),
        n.d(e, 'b', function() {
          return M;
        });
    },
    qDEf: function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return N;
      });
      var o = n('mrSG'),
        r = n('UBqq'),
        i = n('fXoL'),
        a = n('ofXK'),
        c = n('bv9b'),
        s = n('f0Cb'),
        l = n('bTqV'),
        d = n('Qu3c'),
        h = n('NFeN'),
        u = n('MutI'),
        g = n('FKr1'),
        m = n('Xva0'),
        b = n('v+MA'),
        k = ['markdownWrapper'];
      function f(t, e) {
        1 & t && i.Tb(0, 'mat-progress-bar', 5);
      }
      function w(t, e) {
        if (1 & t) {
          var n = i.Zb();
          i.Yb(0, 'button', 8),
            i.gc('click', function(t) {
              return i.Ic(n), i.kc(3).reset();
            }),
            i.Yb(1, 'mat-icon'),
            i.Tc(2, ' home '),
            i.Wb(),
            i.Wb();
        }
        if (2 & t) {
          var o = i.kc(3);
          i.qc('matTooltip', o.goHomeLabel),
            i.Fb('data-test', 'home-button'),
            i.Db(1),
            i.Fb('aria-label', o.goHomeLabel);
        }
      }
      function p(t, e) {
        if (1 & t) {
          var n = i.Zb();
          i.Yb(0, 'button', 8),
            i.gc('click', function(t) {
              return i.Ic(n), i.kc(3).goBack();
            }),
            i.Yb(1, 'mat-icon'),
            i.Tc(2, ' arrow_back '),
            i.Wb(),
            i.Wb();
        }
        if (2 & t) {
          var o = i.kc(3);
          i.qc('matTooltip', o.goBackLabel),
            i.Fb('data-test', 'back-button'),
            i.Db(1),
            i.Fb('aria-label', o.goBackLabel);
        }
      }
      function v(t, e) {
        if ((1 & t && (i.Yb(0, 'span', 9), i.Tc(1), i.Wb()), 2 & t)) {
          var n = i.kc(3);
          i.Fb('data-test', 'title'), i.Db(1), i.Vc(' ', n.currentItemTitle, ' ');
        }
      }
      function y(t, e) {
        if (
          (1 & t &&
            (i.Vb(0),
            i.Yb(1, 'div'),
            i.Rc(2, w, 3, 3, 'button', 6),
            i.Rc(3, p, 3, 3, 'button', 6),
            i.Rc(4, v, 2, 2, 'span', 7),
            i.Wb(),
            i.Tb(5, 'mat-divider'),
            i.Ub()),
          2 & t)
        ) {
          var n = i.kc(2);
          i.Db(1),
            i.Pc('display', 'flex'),
            i.Db(1),
            i.qc('ngIf', n.showHomeButton),
            i.Db(1),
            i.qc('ngIf', n.showGoBackButton),
            i.Db(1),
            i.qc('ngIf', n.currentItemTitle),
            i.Db(1),
            i.Pc('position', 'relative');
        }
      }
      function D(t, e) {
        if (1 & t) {
          var n = i.Zb();
          i.Yb(0, 'button', 12),
            i.gc('click', function(t) {
              i.Ic(n);
              var o = e.$implicit;
              return i.kc(3).handleItemSelected(o);
            }),
            i.Yb(1, 'mat-icon', 13),
            i.Tc(2, ' subject '),
            i.Wb(),
            i.Yb(3, 'span', 14),
            i.Tc(4),
            i.Wb(),
            i.Tb(5, 'mat-divider'),
            i.Wb();
        }
        if (2 & t) {
          var o = e.$implicit,
            r = i.kc(3);
          i.qc('matTooltip', r.getTitle(o)), i.Db(4), i.Vc(' ', r.getTitle(o), ' ');
        }
      }
      function I(t, e) {
        if (
          (1 & t && (i.Yb(0, 'div', 10), i.Yb(1, 'mat-action-list'), i.Rc(2, D, 6, 2, 'button', 11), i.Wb(), i.Wb()),
          2 & t)
        ) {
          var n = i.kc(2);
          i.Db(2), i.qc('ngForOf', n.currentMenuItems);
        }
      }
      function M(t, e) {
        if ((1 & t && i.Tb(0, 'td-flavored-markdown-loader', 19), 2 & t)) {
          var n = i.kc(3);
          i.qc('url', n.url)('httpOptions', n.httpOptions)('anchor', n.anchor);
        }
      }
      function W(t, e) {
        if ((1 & t && i.Tb(0, 'td-flavored-markdown', 20), 2 & t)) {
          var n = i.kc(3);
          i.qc('content', n.markdownString)('hostedUrl', n.url)('anchor', n.anchor);
        }
      }
      function _(t, e) {
        if (
          (1 & t &&
            (i.Yb(0, 'div', 15, 16),
            i.Rc(2, M, 1, 3, 'td-flavored-markdown-loader', 17),
            i.Rc(3, W, 1, 3, 'td-flavored-markdown', 18),
            i.Wb()),
          2 & t)
        ) {
          var n = i.kc(2);
          i.Db(2), i.qc('ngIf', n.showTdMarkdownLoader), i.Db(1), i.qc('ngIf', n.showTdMarkdown);
        }
      }
      function C(t, e) {
        if (
          (1 & t &&
            (i.Vb(0),
            i.Rc(1, f, 1, 0, 'mat-progress-bar', 2),
            i.Rc(2, y, 6, 5, 'ng-container', 0),
            i.Rc(3, I, 3, 1, 'div', 3),
            i.Rc(4, _, 4, 2, 'div', 4),
            i.Ub()),
          2 & t)
        ) {
          var n = i.kc();
          i.Db(1),
            i.qc('ngIf', n.loading),
            i.Db(1),
            i.qc('ngIf', n.showHeader),
            i.Db(1),
            i.qc('ngIf', n.showMenu),
            i.Db(1),
            i.qc('ngIf', n.showTdMarkdownLoader || n.showTdMarkdown);
        }
      }
      function T(t, e) {
        if (
          (1 & t &&
            (i.Yb(0, 'div', 21),
            i.Yb(1, 'mat-icon', 22),
            i.Tc(2, 'subject'),
            i.Wb(),
            i.Yb(3, 'h2'),
            i.Tc(4),
            i.Wb(),
            i.Wb()),
          2 & t)
        ) {
          var n = i.kc();
          i.Db(4), i.Uc(n.emptyStateLabel);
        }
      }
      var S = 'Go home',
        x = 'Go back',
        O = 'No item(s) to display';
      function P(t, e) {
        return t === e;
      }
      var N = (function() {
        var t = (function() {
          function t(e, n) {
            _classCallCheck(this, t),
              (this._markdownUrlLoaderService = e),
              (this._changeDetectorRef = n),
              (this.historyStack = []),
              (this.currentMenuItems = []),
              (this.loading = !1);
          }
          return (
            _createClass(t, [
              {
                key: 'clickListener',
                value: function(t) {
                  var e,
                    n = t.srcElement;
                  n.matches('a[href]') &&
                    ((e = n), !Object(r.d)(e) && e.pathname.endsWith('.md')) &&
                    this.handleLinkClick(t);
                },
              },
              {
                key: 'ngOnChanges',
                value: function(t) {
                  t.items && (this.reset(), this.items && this.startAt && this._jumpTo(this.startAt));
                },
              },
              {
                key: 'reset',
                value: function() {
                  !this.items ||
                  1 !== this.items.length ||
                  (this.items[0].children && 0 !== this.items[0].children.length)
                    ? ((this.currentMenuItems = this.items), (this.currentMarkdownItem = void 0))
                    : ((this.currentMenuItems = []), (this.currentMarkdownItem = this.items[0])),
                    (this.historyStack = []),
                    this._changeDetectorRef.markForCheck();
                },
              },
              {
                key: 'goBack',
                value: function() {
                  if (this.historyStack.length > 1) {
                    var t = this.historyStack[this.historyStack.length - 2];
                    t.children && t.children.length > 0
                      ? ((this.currentMenuItems = t.children), (this.currentMarkdownItem = void 0))
                      : ((this.currentMenuItems = []), (this.currentMarkdownItem = t)),
                      (this.historyStack = this.historyStack.slice(0, -1));
                  } else this.reset();
                  this._changeDetectorRef.markForCheck();
                },
              },
              {
                key: 'handleItemSelected',
                value: function(t) {
                  (this.historyStack = [].concat(_toConsumableArray(this.historyStack), [t])),
                    !t.children ||
                    1 !== t.children.length ||
                    (t.children[0].children && 0 !== t.children[0].children.length)
                      ? t.children && t.children.length > 0
                        ? (this.currentMenuItems = t.children)
                        : ((this.currentMenuItems = []), (this.currentMarkdownItem = t))
                      : ((this.currentMenuItems = []), (this.currentMarkdownItem = t.children[0])),
                    this._changeDetectorRef.markForCheck();
                },
              },
              {
                key: 'getTitle',
                value: function(t) {
                  if (t)
                    return (
                      Object(r.e)(t.anchor) ||
                      t.title ||
                      (function(t) {
                        if (t) {
                          var e = new URL(t);
                          if (e.hash) return Object(r.e)(e.hash);
                          var n = e.pathname.split('/');
                          return n[n.length - 1].replace(/\.[^/.]+$/, '');
                        }
                      })(t.url) ||
                      (function(t) {
                        if (t) {
                          var e = t.split(/[\r\n]+/).find(function(t) {
                            return !!t;
                          });
                          return Object(r.e)(e).trim();
                        }
                      })(t.markdownString) ||
                      ''
                    ).trim();
                },
              },
              {
                key: '_jumpTo',
                value: function(t) {
                  var e = this;
                  this.reset(),
                    this.items &&
                      this.items.length > 0 &&
                      (
                        (function t(e, n, o) {
                          if (e) {
                            var r = !0,
                              i = !1,
                              a = void 0;
                            try {
                              for (var c, s = e[Symbol.iterator](); !(r = (c = s.next()).done); r = !0) {
                                var l = c.value;
                                if (o(l, n)) return [l];
                                var d = t(l.children, n, o);
                                if (d) return [l].concat(_toConsumableArray(d));
                              }
                            } catch (h) {
                              (i = !0), (a = h);
                            } finally {
                              try {
                                r || null == s.return || s.return();
                              } finally {
                                if (i) throw a;
                              }
                            }
                          }
                        })(this.items, t, this.compareWith || P) || []
                      ).forEach(function(t) {
                        return e.handleItemSelected(t);
                      }),
                    this._changeDetectorRef.markForCheck();
                },
              },
              {
                key: 'handleLinkClick',
                value: function(t) {
                  return Object(o.a)(
                    this,
                    void 0,
                    void 0,
                    regeneratorRuntime.mark(function e() {
                      var n, o;
                      return regeneratorRuntime.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  t.preventDefault(),
                                  (n = new URL(t.target.href)),
                                  (this.loading = !0),
                                  this._changeDetectorRef.markForCheck(),
                                  (e.prev = 3),
                                  (e.next = 6),
                                  this._markdownUrlLoaderService.load(n.href)
                                );
                              case 6:
                                (o = e.sent),
                                  this.handleItemSelected({ markdownString: o, url: n.href }),
                                  (this.markdownWrapper.nativeElement.scrollTop = 0),
                                  (e.next = 13);
                                break;
                              case 10:
                                (e.prev = 10), (e.t0 = e.catch(3)), window.open(n.href, '_blank').focus();
                              case 13:
                                return (e.prev = 13), (this.loading = !1), e.finish(13);
                              case 16:
                                this._changeDetectorRef.markForCheck();
                              case 17:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[3, 10, 13, 16]],
                      );
                    }),
                  );
                },
              },
              {
                key: 'showGoBackButton',
                get: function() {
                  return this.historyStack.length > 0;
                },
              },
              {
                key: 'showHomeButton',
                get: function() {
                  return this.historyStack.length > 1;
                },
              },
              {
                key: 'showHeader',
                get: function() {
                  return this.showHomeButton || this.showGoBackButton || !!this.currentItemTitle;
                },
              },
              {
                key: 'showMenu',
                get: function() {
                  return this.currentMenuItems && this.currentMenuItems.length > 0;
                },
              },
              {
                key: 'showTdMarkdownLoader',
                get: function() {
                  return !!this.currentMarkdownItem && !!this.currentMarkdownItem.url && !this.showTdMarkdown;
                },
              },
              {
                key: 'showTdMarkdown',
                get: function() {
                  return !!this.currentMarkdownItem && !!this.currentMarkdownItem.markdownString;
                },
              },
              {
                key: 'url',
                get: function() {
                  if (this.currentMarkdownItem) return this.currentMarkdownItem.url;
                },
              },
              {
                key: 'httpOptions',
                get: function() {
                  if (this.currentMarkdownItem) return this.currentMarkdownItem.httpOptions;
                },
              },
              {
                key: 'markdownString',
                get: function() {
                  if (this.currentMarkdownItem) return this.currentMarkdownItem.markdownString;
                },
              },
              {
                key: 'anchor',
                get: function() {
                  if (this.currentMarkdownItem) return this.currentMarkdownItem.anchor;
                },
              },
              {
                key: 'showEmptyState',
                get: function() {
                  return !this.items || this.items.length < 1;
                },
              },
              {
                key: 'goHomeLabel',
                get: function() {
                  return (this.labels && this.labels.goHome) || S;
                },
              },
              {
                key: 'goBackLabel',
                get: function() {
                  return (this.labels && this.labels.goBack) || x;
                },
              },
              {
                key: 'emptyStateLabel',
                get: function() {
                  return (this.labels && this.labels.emptyState) || O;
                },
              },
              {
                key: 'currentItemTitle',
                get: function() {
                  return this.historyStack.length < 1
                    ? ''
                    : this.currentMarkdownItem
                    ? this.getTitle(this.currentMarkdownItem)
                    : this.historyStack.length > 0
                    ? this.getTitle(this.historyStack[this.historyStack.length - 1])
                    : '';
                },
              },
            ]),
            t
          );
        })();
        return (
          (t.ɵfac = function(e) {
            return new (e || t)(i.Sb(r.c), i.Sb(i.h));
          }),
          (t.ɵcmp = i.Mb({
            type: t,
            selectors: [['td-markdown-navigator']],
            viewQuery: function(t, e) {
              var n;
              1 & t && i.Yc(k, !0), 2 & t && i.Ec((n = i.hc())) && (e.markdownWrapper = n.first);
            },
            hostBindings: function(t, e, n) {
              1 & t &&
                i.gc('click', function(t) {
                  return e.clickListener(t);
                });
            },
            inputs: { items: 'items', labels: 'labels', startAt: 'startAt', compareWith: 'compareWith' },
            features: [i.Bb()],
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
              1 & t && (i.Rc(0, C, 5, 4, 'ng-container', 0), i.Rc(1, T, 5, 1, 'div', 1)),
                2 & t && (i.qc('ngIf', !e.showEmptyState), i.Db(1), i.qc('ngIf', e.showEmptyState));
            },
            directives: [a.t, c.a, s.a, l.b, d.a, h.a, u.a, a.s, u.d, u.c, g.h, m.a, b.a, u.b],
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
