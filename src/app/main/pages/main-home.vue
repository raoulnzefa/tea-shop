<template>
  <div>
    <home-carousel />
    <home-categories :categories="getCategories" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import HomeCarousel from '@/app/main/components/home-carousel.vue';
import HomeCategories from '@/app/main/components/home-categories.vue';

export default {
  components: {
    HomeCarousel,
    HomeCategories,
  },
  methods: {
    ...mapActions([
      'fetchCategories',
    ]),
  },
  computed: {
    ...mapGetters([
      'getCategories',
    ]),
  },
  mounted() {
    this.fetchCategories();
  },
};
</script>
