<template>
  <div>
    <Header></Header>
    <div class="container">
      <nuxt />
    </div>
  </div>
</template>
<script>
import Header from "~/components/Header.vue";

export default {
  components: { Header }
};
</script>
<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.container {
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
}
</style>
