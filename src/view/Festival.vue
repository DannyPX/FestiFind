<template>
  <div class="main">
    <header>
      <router-link to="/">Home</router-link>
    </header>
    <form id="eventForm" @submit="test" method="post">
        <div class="form-group">
          <input type="text" v-model="name" class="form-control" placeholder="Enter festival name" autofocus>
        </div>
        <div class="form-group">
          <input type="text" name="location" id="location" class="form-control" placeholder="Enter location">
        </div>
        <div class="form-group">
          <input type="text" name="bio" id="bio" class="form-control" placeholder="Enter description">
        </div>
        <div class="form-group">
          <input type="text" name="genre" id="genre" class="form-control" placeholder="Enter genre">
        </div>
        <div class="form-group">
          <input type="text" name="artist" id="artist" class="form-control" placeholder="Enter artist">
        </div>
        <div class="form-group">
          <input type="date" name="start" id="start" class="form-control">
        </div>
        <div class="form-group">
          <input type="date" name="end" id="end" class="form-control">
        </div>
        <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: ""
    }
  },
  methods: {
    test: function(e) {
      alert(this.name)
      e.preventDefault();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
