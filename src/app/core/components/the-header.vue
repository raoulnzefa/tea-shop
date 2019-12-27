<template>
  <nav :class="getHeaderStyle">
    <div class="container">
      <div :class="$style.headerContacts">
        <div :class="$style.headerPhone">
          <i class="fa fa-phone green-icon" aria-hidden="true" />
          <span :class="$style.phone">+880 123 456 789</span>
        </div>
        <div :class="$style.headerCart">
          <router-link :to="{ name: 'cart' }" :class="$style.cartLink">
            <i class="fa fa-shopping-cart green-icon" aria-hidden="true" />
            <span :class="$style.cartPrice">$ 0.00</span>
          </router-link>
        </div>
      </div>
      <div :class="$style.headerMain">
        <div :class="$style.headerLogo">
          <img src="@/assets/images/logo.png" alt="Tea Shop">
        </div>
        <ul :class="$style.headerMenu">
          <li>
            <router-link to="/" :exact-active-class="$style.active">Home</router-link>
          </li>
          <li>
            <router-link to="/about" :exact-active-class="$style.active">About</router-link>
          </li>
          <li>
            <router-link to="/shop" :exact-active-class="$style.active">Shop</router-link>
          </li>
          <li>
            <router-link to="/blog" :exact-active-class="$style.active">Blog</router-link>
          </li>
          <li>
            <router-link to="/contacts" :exact-active-class="$style.active">Contacts</router-link>
          </li>
        </ul>
      </div>
    </div>

  </nav>
</template>

<script>
export default {
  data() {
    return {
      scrollY: null,
    };
  },
  mounted() {
    window.addEventListener('scroll', () => {
      this.scrollY = Math.round(window.scrollY);
    });
  },
  computed: {
    getHeaderStyle() {
      if (this.scrollY > 0) {
        return [this.$style.sticky, this.$style.header];
      }

      return this.$style.header;
    },
  },
};
</script>


<style lang="scss" module>
@import "@/styles/vars";

.header {
  background-color: $while-color;

  &.sticky {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),
    0 3px 1px -2px rgba(0, 0, 0, 0.2);
  }
}

.headerContacts {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 5px 0;
}

.phone {
  padding: 0 12px;
  border-right: 1px solid $text-black-color;
}

.headerCart {
  padding-left: 12px;
}

.cartLink {
  text-decoration: none;

  .cartPrice {
    padding-left: 12px;
    transition: all 0.4s ease-in-out;

    &:hover {
      color: $main-green-color;
    }
  }
}

.headerMain {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
}

.headerLogo {
  max-width: 140px;
}

.headerMenu {
  padding-left: 0;
  margin: 0;
  list-style: none;
  display: flex;

  li {
    padding-left: 24px;

    a {
      font-family: $title-font;
      font-weight: 700;
      color: $title-black-color;
      text-decoration: none;

      &:hover,
      &:active,
      &:focus,
      &.active {
        color: $main-green-color;
      }
    }
  }
}
</style>
