<template>
  <ul :class="$style.social">
    <li>
      <a href="#">
        <i class="fa fa-facebook green-icon" aria-hidden="true" />
        <span>Facebook</span>
      </a>
    </li>

    <li>
      <a href="#">
        <i class="fa fa-twitter green-icon" aria-hidden="true" />
        <span>Twitter</span>
      </a>
    </li>

    <li>
      <a href="#">
        <i class="fa fa-linkedin green-icon" aria-hidden="true" />
        <span>Linkedin</span>
      </a>
    </li>
  </ul>
</template>

<script>
export default {};
</script>

<style lang="scss" module>
@import "@/styles/vars";

.social {
  padding-left: 0;
  margin: 0;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;

  li {
    margin: 0 10px;

    &:last-child {
      margin-right: 0;
    }
  }

  a {
    text-decoration: none;
  }

  span {
    font-family: $title-font;
    color: $title-black-color;
    font-weight: 700;
    padding-left: 6px;
    transition: 0.4s;

    &:hover,
    &:focus {
      color: $main-green-color;
    }
  }
}
</style>
