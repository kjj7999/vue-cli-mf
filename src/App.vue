<template>
  <NavigationBar></NavigationBar>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </nav>
  <h1 class="text-3xl font-bold underline">Hello world!</h1>
  <router-view />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import NavigationBar from '@/components/NavigationBar.vue';

@Options({
  components: {
    NavigationBar,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
