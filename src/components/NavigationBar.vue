<template>
  <nav class="flex flex-wrap items-center justify-between p-3 bg-teal-500">
    <div class="flex items-center flex-shrink-0 mr-6 text-white">
      <span class="nav-title"> Navigation Bar </span>
    </div>
    <div class="flex-grow block w-full lg:flex lg:w-auto lg:items-center">
      <div class="text-sm lg:flex-grow">
        <router-link to="/" class="nav-item"> Home </router-link>
        <router-link to="/about" class="nav-item"> About </router-link>
        <a class="nav-item"> Blog </a>
      </div>
      <div>
        <a href="#" class="nav-btn"> Download</a>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class NavigationBar extends Vue {}
</script>

<style scoped>
.nav-title {
  @apply text-xl font-semibold tracking-tight;
}

.nav-item {
  @apply mt-4 mr-4 block text-teal-200 hover:text-white lg:mt-0 lg:inline-block;
}

.nav-btn {
  @apply mt-4 inline-block rounded border border-white px-5 py-2 text-sm leading-none text-white lg:mt-0;
}

.nav-btn:hover {
  @apply border-transparent bg-white text-teal-500;
}
</style>
