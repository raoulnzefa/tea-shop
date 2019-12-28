<template>
  <div :class="$style.carouselContainer">
    <VueSlickCarousel ref="carousel"
                      :arrows="false"
                      :fade="true"
                      :dots="false">
      <div v-for="slide in slides" :class="$style.sliderItem"
           :key="slide.id">
        <div :class="$style.sliderContent">
          <h3 :class="$style.slideTitle">{{ slide.title }}</h3>
          <h2 :class="$style.slideBigTitle">{{ slide.bigTitle }}</h2>
          <p :class="$style.slideText">{{ slide.text }}</p>
          <router-link :class="$style.slideLink"
                       to="/shop">
            Shop Now
          </router-link>
        </div>
      </div>
    </VueSlickCarousel>

    <div :class="$style.arrowsContainer">
      <div :class="$style.arrows">
        <button :class="$style.arrowBtn" @click="prevSlide">
          <i class="fa fa-long-arrow-left green-icon" aria-hidden="true" />
        </button>
        <button :class="$style.arrowBtn" @click="nextSlide">
          <i class="fa fa-long-arrow-right green-icon" aria-hidden="true" />
        </button>
      </div>
      <app-social :class="$style.social"/>
    </div>
  </div>

</template>

<script>

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import VueSlickCarousel from 'vue-slick-carousel';

export default {
  components: { VueSlickCarousel },
  data() {
    return {
      slides: [
        {
          id: 1,
          title: 'We have',
          bigTitle: 'something',
          text: 'special even for your refined taste',
        },
        {
          id: 2,
          title: 'Title 2',
          text: 'lorem ipsum',
        },
        {
          id: 3,
          title: 'Title 3',
          text: 'lorem ipsum',
        },
        {
          id: 4,
          title: 'Title 4',
          text: 'lorem ipsum',
        },
      ],
    };
  },
  methods: {
    prevSlide() {
      this.$refs.carousel.prev();
    },
    nextSlide() {
      this.$refs.carousel.next();
    },
  },
};
</script>

<style lang="scss" module>
@import "@/styles/vars";

.sliderItem {
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  .sliderContent {
    height: 100%;
    max-width: 1170px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}

.slideTitle {
  font-size: 48px;
  line-height: 48px;
  color: $while-color;
  text-transform: uppercase;
}

.slideBigTitle {
  font-size: 80px;
  line-height: 80px;
  color: $while-color;
  text-transform: uppercase;
}

.slideText {
  font-family: $title-font;
  font-weight: 700;
  color: $while-color;
  font-size: 20px;
  margin-bottom: 25px;
}

.slideLink {
  font-family: $title-font;
  display: inline-block;
  color: $while-color;
  background: $main-green-color;
  padding: 10px 30px;
  text-transform: uppercase;
  border-radius: 2px;
  max-width: 172px;
  font-weight: 700;
  text-align: center;
  transition: .4s;
  text-decoration: none;
  position: relative;
  cursor: pointer;
  z-index: 10;

  &::after {
    content: "";
    height: 100%;
    width: 100%;
    background: $while-color;
    top: 0;
    left: 0;
    z-index: -1;
    position: absolute;
    border-radius: 2px;
    transition: .4s;
    transform: scaleX(0);
    opacity: .1;
  }

  &:hover,
  &:focus {
    color: $title-black-color;

    &::after {
      transform: scaleX(1);
    }
  }
}

.carouselContainer {
  position: relative;
}

.arrowsContainer {
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: right;

  .arrows {
    max-width: 1170px;
    margin: 0 auto;
    display: block;
  }

  .arrowBtn {
    width: 20px;
    height: 20px;
    margin-left: 20px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;

    i {
      font-size: 20px;
    }
  }
}

.social {
  max-width: 1170px;
  margin: 10px auto 20px;
  justify-content: flex-end;

  li a span {
    color: $while-color;
  }
}
</style>

<style lang="scss">
.slick-slider .slick-slide {
  height: 720px;
  background-position: center;
  background-size: cover;

  &:nth-child(1) {
    background-image: url('../../../assets/img/slider1.jpg');
  }

  &:nth-child(2) {
    background-image: url('../../../assets/img/slider2.jpg');
  }

  &:nth-child(3) {
    background-image: url('../../../assets/img/slider3.jpg');
  }

  &:nth-child(4) {
    background-image: url('../../../assets/img/slider4.jpg');
  }

  & > div {
    height: 100%;
  }
}
</style>
