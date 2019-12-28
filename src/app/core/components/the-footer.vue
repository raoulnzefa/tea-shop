<template>
  <div :class="$style.footer">
    <app-logo :class="$style.footerLogo"/>
    <app-social />
    <div :class="$style.footerBottom">
      <p>2019 All Right Reserved</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" module>
@import "@/styles/vars";

.footer {
  background-image: url('../../../assets/img/footer-bg.jpg');
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
}

.footerLogo {
  margin-bottom: 40px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: calc(100% + 20px);
    height: 1px;
    width: 100px;
    background: $title-black-color;
    left: 50%;
    margin-left: -50px;
  }
}

.footerBottom {
  width: 100%;
  margin-top: 80px;
  padding: 16px 0;
  background-color: rgba(255,255,255,.6);
  text-align: center;
}
</style>
