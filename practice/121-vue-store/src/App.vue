<template>
  <div>
    <GolbalNav />
    <div>
      <router-view></router-view>
    </div>
    <GolbalFooter />
  </div>
</template>

<script>
  import GolbalNav from './components/GolbalNav.vue';
  import GolbalFooter from './components/GolbalFooter.vue';

  export default {
    name: 'app',
    components: {
      GolbalNav,
      GolbalFooter,
    }
  }
</script>

<style>
</style>
