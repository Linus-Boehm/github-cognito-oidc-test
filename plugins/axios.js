
import { AUTH_REAUTHENTICATE } from '@/types/auth/actions'

export default function ({ $axios, error, store, redirect }, inject) {
  $axios.defaults.timeout = 5000
  $axios.onError((e) => {
    if (e.message === 'Network Error') {
      console.log('Redirect Network Error')
      return error({ statusCode: 598, message: 'Network Error' })
    }
  })
  try {
    store.dispatch(AUTH_REAUTHENTICATE).then((e) => {}).catch((e) => {})
  } catch (e) {

  }
}
