<template>
  <div :class="$style.categoriesSection">
    <div class="container">
      <h2>Tea is a drink of health</h2>
      <h3>& beauty for you</h3>
      <p :class="$style.categoriesText">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type
        specimen book. It has survived.scrambled it to make a type specimen book. It has
        survived
      </p>
      <div :class="$style.categoriesMain">
        <div v-for="category in getPromoCategories"
             :key="category.id"
             :class="$style.categoryItem">
          <h5>{{ category.name }}</h5>
          <p>{{ category.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    categories: {
      type: Array,
      required: true,
    },
  },
  computed: {
    getPromoCategories() {
      return this.categories.filter(category => category.image);
    },
  },
};
</script>

<style lang="scss" module>
@import "@/styles/vars";

.categoriesSection {
  background-image: url("../../../assets/img/product-bg.png");
  background-position: top left;
  background-repeat: no-repeat;
  background-size: 300px;
  background-color: $light-grey-bg-color;
  padding: 80px 0;
  text-align: center;

  h3 {
    font-weight: 400;
    margin-bottom: 15px;
  }

  .categoriesText {
    max-width: 750px;
    margin: 0 auto 50px;
  }
}

.categoriesMain {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;

  .categoryItem {
    width: calc(25% - 30px);
    margin: 0 15px;
    padding: 42px 10px;
    background-color: $while-color;
    transition: .4s;

    &:hover,
    &:focus {
      box-shadow: 0 0 37px #cfcfcf;
    }

    h5 {
      font-family: $main-font;
      font-size: 18px;
      line-height: 18px;
      margin-bottom: 15px;
    }
  }
}
</style>
