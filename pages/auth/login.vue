<template lang="pug">
  .section
    .container
      .content
        .mt-8.flex.flex-col
          button.button.is-primary(@click="loginGithub()") Login with Github
          button.button.is-link(@click="getFederatedLogin()") Test
          a(href="https://bareule.auth.eu-central-1.amazoncognito.com/oauth2/authorize?client_id=ef0ntsl0st26ujtc7n4nm9rfi&identity_provider=Github&response_type=token&redirect_uri=http://localhost:8888") Login with github
        sign-in(v-if="!isAuthenticated")
        LogOutButton(v-else)
</template>

<script>
import { Auth } from 'aws-amplify'
import SignIn from '@/components/auth/SignIn'
import LogOutButton from '@/components/auth/LogOutButton'
import AuthHelperMixin from '@/mixins/store-helpers/AuthHelperMixin'

export default {
  name: 'Login',
  components: { LogOutButton, SignIn },
  mixins: [AuthHelperMixin],

  props: {},
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
    getFederatedLogin () {
      Auth.federatedSignIn({ provider: 'Github' })
    },
    loginGithub () {
      window.location.href = 'https://bareule.auth.eu-central-1.amazoncognito.com/oauth2/authorize?identity_provider=Github&redirect_uri=http://localhost:8888&response_type=CODE&client_id=ef0ntsl0st26ujtc7n4nm9rfi&scope=openid email phone profile'
    }
  }
}
</script>

<style scoped lang="scss">

</style>
