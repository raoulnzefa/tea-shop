<template>
  <div>
    <home-carousel />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import HomeCarousel from '@/app/main/components/home-carousel.vue';

export default {
  components: {
    HomeCarousel,
  },
  methods: {
    ...mapActions([
      'fetchProducts',
    ]),
  },
  mounted() {
    this.fetchProducts();
  },
};
</script>
