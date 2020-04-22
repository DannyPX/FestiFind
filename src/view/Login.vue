<template>
  <div class="main">
    <header>
      <router-link to="/festival">Festival</router-link>
      <router-link to="/">Home</router-link>
    </header>
    <form id="loginForm" @submit="loginAccount">
        <div class="form-group">
            <input type="email" :value="credentials.email" @input="updateEmail" class="form-control" placeholder="Enter email" autofocus>
        </div>
        <div class="form-group">
            <input type="password" :value="credentials.password" @input="updatePassword" class="form-control" placeholder="Enter password">
        </div>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    computed: {
        ...mapGetters([
            'credentials'
        ])
    },
    methods: {
        ...mapActions([
            'loginAccount'
        ]),
        updateEmail(e) {
            this.$store.commit('UPDATE_EMAIL', e.target.value)
        },
        updatePassword(e) {
            this.$store.commit('UPDATE_PASSWORD', e.target.value)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
