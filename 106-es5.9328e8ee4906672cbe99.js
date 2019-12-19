function _classCallCheck(e, n) {
  if (!(e instanceof n)) throw new TypeError('Cannot call a class as a function');
}
(window.webpackJsonp = window.webpackJsonp || []).push([
  [106],
  {
    'C+P1': function(e, n, t) {
      'use strict';
      t.r(n);
      var o = t('ofXK'),
        r = t('tk/3'),
        l = t('NFeN'),
        a = t('f0Cb'),
        i = t('MutI'),
        u = t('XhcP'),
        d = t('/t3+'),
        c = t('Wp6s'),
        h = t('bTqV'),
        p = t('zkoq'),
        s = t('wZkO'),
        f = t('FKr1'),
        b = t('STbY'),
        m = t('Qu3c'),
        C = t('B7SF'),
        w = t('sHJK'),
        P = t('qeof'),
        M = t('ZI6o'),
        v = t('RJWD'),
        k = t('dE5l'),
        y = t('Kl+F'),
        D = t('XvKp'),
        j = t('aWCS'),
        O = t('tyNb'),
        W = t('sZfy'),
        q = t('W6/J'),
        E = [
          {
            path: 'echarts',
            children: [
              { component: j.a, path: '', data: { category: 'echarts' } },
              { path: 'getting-started', component: q.a, data: { resourceUrl: 'platform/echarts/README.md' } },
              { path: 'chart', children: Object(W.c)({ id: 'chart', overviewDemoComponent: '' }) },
              {
                path: 'combination',
                loadChildren: function() {
                  return Promise.all([t.e(1), t.e(2), t.e(3), t.e(4), t.e(9), t.e(68)])
                    .then(t.bind(null, 'WJ7O'))
                    .then(function(e) {
                      return e.CombinationModule;
                    });
                },
              },
              {
                path: 'bar',
                loadChildren: function() {
                  return Promise.all([t.e(1), t.e(2), t.e(3), t.e(4), t.e(9), t.e(0), t.e(67)])
                    .then(t.bind(null, '8nql'))
                    .then(function(e) {
                      return e.BarModule;
                    });
                },
              },
              {
                path: 'graph',
                loadChildren: function() {
                  return Promise.all([t.e(1), t.e(8), t.e(16), t.e(32)])
                    .then(t.bind(null, 'jBo2'))
                    .then(function(e) {
                      return e.GraphModule;
                    });
                },
              },
              {
                path: 'line',
                loadChildren: function() {
                  return Promise.all([t.e(1), t.e(3), t.e(4), t.e(33)])
                    .then(t.bind(null, 'yWiE'))
                    .then(function(e) {
                      return e.LineModule;
                    });
                },
              },
              {
                path: 'map',
                loadChildren: function() {
                  return Promise.all([
                    t.e(1),
                    t.e(2),
                    t.e(3),
                    t.e(4),
                    t.e(5),
                    t.e(6),
                    t.e(8),
                    t.e(10),
                    t.e(11),
                    t.e(14),
                    t.e(69),
                  ])
                    .then(t.bind(null, 'sPDB'))
                    .then(function(e) {
                      return e.MapModule;
                    });
                },
              },
              {
                path: 'pie',
                loadChildren: function() {
                  return Promise.all([t.e(1), t.e(2), t.e(6), t.e(0), t.e(34)])
                    .then(t.bind(null, 'SAd7'))
                    .then(function(e) {
                      return e.PieModule;
                    });
                },
              },
              {
                path: 'sankey',
                loadChildren: function() {
                  return Promise.all([t.e(1), t.e(11), t.e(19), t.e(70)])
                    .then(t.bind(null, 'O+h4'))
                    .then(function(e) {
                      return e.SankeyModule;
                    });
                },
              },
              {
                path: 'scatter',
                loadChildren: function() {
                  return Promise.all([t.e(1), t.e(3), t.e(0), t.e(29)])
                    .then(t.bind(null, 'kpj+'))
                    .then(function(e) {
                      return e.ScatterModule;
                    });
                },
              },
              {
                path: 'tree',
                loadChildren: function() {
                  return Promise.all([t.e(1), t.e(2), t.e(5), t.e(17), t.e(71)])
                    .then(t.bind(null, 'NqoG'))
                    .then(function(e) {
                      return e.TreeModule;
                    });
                },
              },
              {
                path: 'treemap',
                loadChildren: function() {
                  return Promise.all([t.e(1), t.e(10), t.e(20), t.e(35)])
                    .then(t.bind(null, 'Vdog'))
                    .then(function(e) {
                      return e.TreemapModule;
                    });
                },
              },
              {
                path: 'wordcloud',
                loadChildren: function() {
                  return Promise.all([t.e(1), t.e(18), t.e(72)])
                    .then(t.bind(null, 'fuDi'))
                    .then(function(e) {
                      return e.WordcloudModule;
                    });
                },
              },
              { path: 'tooltip', children: Object(W.c)({ id: 'tooltip', overviewDemoComponent: '' }) },
              { path: 'axis', children: Object(W.c)({ id: 'axis', overviewDemoComponent: '' }) },
              { path: 'toolbox', children: Object(W.c)({ id: 'toolbox', overviewDemoComponent: '' }) },
              { path: 'dataset', children: Object(W.c)({ id: 'dataset', overviewDemoComponent: '' }) },
            ],
          },
        ],
        J = O.f.forChild(E),
        S = t('fXoL');
      t.d(n, 'EchartsModule', function() {
        return K;
      });
      var g,
        K =
          (((g = function e() {
            _classCallCheck(this, e);
          }).ɵmod = S.Qb({ type: g })),
          (g.ɵinj = S.Pb({
            factory: function(e) {
              return new (e || g)();
            },
            imports: [
              [
                o.c,
                l.b,
                a.b,
                u.d,
                d.b,
                i.e,
                c.e,
                h.c,
                p.a,
                s.f,
                f.q,
                b.b,
                r.b,
                m.b,
                C.a,
                w.a,
                P.a,
                M.a,
                v.a,
                k.a,
                J,
                y.a,
                D.a,
              ],
            ],
          })),
          g);
    },
  },
]);
