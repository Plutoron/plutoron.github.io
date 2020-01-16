import { Suspense, lazy } from 'react'

const Home = lazy(() => import('./md-reader'))

const Main = () => (
  <Suspense fallback='加载文章中'>
    <Home />
  </Suspense>
)

export default Main
