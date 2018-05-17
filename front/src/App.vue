<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import router from './router'
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'app',
    mounted: function () {
      this.$el.addEventListener('click', this.onClick);
      this.$el.addEventListener('backbutton', this.backbutton);
    },
    beforeDestroy: function () {
      this.$el.removeEventListener('click', this.onClick);
      this.$el.removeEventListener('backbutton', this.backbutton);
      // document.removeEventListener('click', this.onClick)
    },
    computed: mapGetters([
        'startTime'
    ]),
    methods: {
      
      onClick: function (ev) {
        var clickTime = new Date();
        //si startTime
        if(this.startTime == 0){
          router.push('/');
        }else {
          this.$store.dispatch('setAverageTime', clickTime)
        }
      },
      backbutton: function (ev) {
        console.log("ev")
        console.log(ev)
      }

    },
  }
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
  position: absolute;
  width: 100%;
  height: 100%;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
