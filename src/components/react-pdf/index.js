import { Suspense, lazy } from 'react'

const Home = lazy(() => import('./react-pdf'))

const Main = () => (
  <Suspense fallback='加载文章中'>
    <Home />
  </Suspense>
)

export default Main
