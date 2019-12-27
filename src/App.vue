<template>
  <div id="app">
    <the-header />
    <router-view class="main-content"/>
    <the-footer />
  </div>
</template>

<script>
import TheHeader from '@/app/core/components/the-header.vue';
import TheFooter from '@/app/core/components/the-footer.vue';

export default {
  components: {
    TheHeader,
    TheFooter,
  },
};

</script>

<style lang="scss">
@import "styles/base";

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex-grow: 1;
}
</style>
