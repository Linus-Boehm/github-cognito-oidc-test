import Vue from 'vue'
import Amplify, * as AmplifyModules from 'aws-amplify'
import { AmplifyPlugin, AmplifyEventBus } from 'aws-amplify-vue'
const oauth = {
  domain: 'bareule.auth.eu-central-1.amazoncognito.com',
  scope: ['phone', 'email', 'profile', 'openid', 'aws.cognito.signin.user.admin'],
  redirectSignIn: 'http://localhost:8888',
  responseType: 'code'
}
Amplify.configure({
  Auth: {
    oauth,
    identityPoolRegion: 'eu-central-1',
    identityPoolId: process.env.COGNITO_IDENTITY_POOL_ID,
    region: 'eu-central-1',
    userPoolId: process.env.COGNITO_USER_POOL_ID,
    userPoolWebClientId: process.env.COGNITO_USER_POOL_CLIENT_ID
  }
})
Vue.use(AmplifyPlugin, AmplifyModules)

Object.defineProperty(Vue.prototype, '$AmplifyEventBus', { value: AmplifyEventBus })
