import Main from './views/Main'
import Second from './views/Second'
import Third from './views/Third'

export const routes = [
  {
    component: Main,
    path: '/',
  },
  {
    component: Second,
    path: '/second',
  },
  {
    component: Third,
    path: '/third',
  }
]