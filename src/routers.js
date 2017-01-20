'use strict'
const routerMap = {
  childRoutes: [{
    path: '/',
    component: require('./containers/App').default,
    indexRoute: {
      component: require('./pages/todos/TodoPage').default
    },
    childRoutes: [
      {
        path: 'todos',
        getComponent (nextState, cb) {
          require.ensure([], (require) => {
            cb(null, require('./pages/todos/TodoPage').default)
          })
        }
      }
    ]
  }]
}
export default routerMap

