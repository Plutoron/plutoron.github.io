// import {asyncComponent} from 'common/util'

// export default asyncComponent(async () => {
//   try {
//     const module = await import('./md-reader')
//     return module.default
//   } catch (error) {
//     console.log(error)
//   }
//   return null
// })
import { Suspense, lazy } from 'react'

const Home = lazy(() => import('./md-reader'))

const Main = () => (
  <Suspense fallback='加载文章中'>
    <Home />
  </Suspense>
)

export default Main
