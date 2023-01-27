export interface Route {
  pathname: string,
  name: string,
}

export const routes: Route[] = [
  {
    pathname: '/',
    name: 'Home'
  },
  {
    pathname: '/about',
    name: 'About'
  },
  {
    pathname: '/portfolio',
    name: 'Portfolio'
  },
  {
    pathname: '/contact',
    name: 'Contact'
  }
]