<template>
  <div class="main">
    <header>
      <router-link to="/">Home</router-link>
      <router-link to="/login">Login</router-link>
    </header>
    <h1>Create</h1>
    <form id="eventForm" @submit="createFestival">
        <div class="form-group">
          <input type="text" :value="festivalInfo.name" @input="updateFestivalName" class="form-control" placeholder="Enter festival name" autofocus>
        </div>
        <div class="form-group">
          <input type="text" :value="festivalInfo.location.latitude" @input="updateFestivalLat" class="form-control" placeholder="Enter latitude">
          <input type="text" :value="festivalInfo.location.longitude" @input="updateFestivalLon" class="form-control" placeholder="Enter longitude">
        </div>
        <div class="form-group">
          <input type="text" :value="festivalInfo.bio" @input="updateFestivalBio" class="form-control" placeholder="Enter description">
        </div>
        <div class="form-group">
          <input type="text" :value="festivalInfo.genre" @input="updateFestivalGenre" class="form-control" placeholder="Enter genre">
        </div>
        <div class="form-group">
          <input type="date" :value="festivalInfo.startDate" @input="updateFestivalStartDate" class="form-control">
        </div>
        <div class="form-group">
          <input type="date" :value="festivalInfo.endDate" @input="updateFestivalEndDate" class="form-control">
        </div>
        <button type="button" v-on:click="createFestival">Submit</button>
    </form>
    <hr>
    <ul>
      <li v-for="festival in festivallist" :key="festival.id">
        <router-link :to="`/festival/${festival.id}`">Edit {{ festival.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'festivalInfo',
      'festivallist'
    ])
  },
  methods: {
    ...mapActions([
      'createFestival'
    ]),
    updateFestivalName (e) {
      this.$store.commit('UPDATE_FESTIVAL_NAME', e.target.value)
    },
    updateFestivalLat (e) {
      this.$store.commit('UPDATE_FESTIVAL_LAT', e.target.value)
    },
    updateFestivalLon (e) {
      this.$store.commit('UPDATE_FESTIVAL_LON', e.target.value)
    },
    updateFestivalBio (e) {
      this.$store.commit('UPDATE_FESTIVAL_BIO', e.target.value)
    },
    updateFestivalGenre (e) {
      this.$store.commit('UPDATE_FESTIVAL_GENRE', e.target.value)
    },
    updateFestivalStartDate (e) {
      this.$store.commit('UPDATE_FESTIVAL_STARTDATE', e.target.value)
    },
    updateFestivalEndDate (e) {
      this.$store.commit('UPDATE_FESTIVAL_ENDDATE', e.target.value)
    }
  },
  beforeCreate () {
    this.$store.dispatch('getFestivals')
  },
  mounted () {
    this.$store.dispatch('deleteInfo')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
