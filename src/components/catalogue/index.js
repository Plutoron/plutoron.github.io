import {asyncComponent} from 'common/util'

export default asyncComponent(async () => {
  try {
    const module = await import('./catalogue')
    return module.default
  } catch (error) {
    console.log(error)
  }
  return null
})
