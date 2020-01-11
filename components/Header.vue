<template>
  <div class="header-menu--wrap">
    <ul class="header-menu">
      <li class="header-menu--item">
        <nuxt-link
          to="/"
          exact
          class="header-menu--link"
          active-class="header-menu--link-active"
        >Home</nuxt-link>
      </li>
      <li v-if="isAuth" class="header-menu--item">
        <nuxt-link
          to="/all-posts"
          class="header-menu--link"
          active-class="header-menu--link-active"
        >All posts</nuxt-link>
      </li>
      <li v-if="isAuth" class="header-menu--item">
        <nuxt-link
          to="/about"
          class="header-menu--link"
          active-class="header-menu--lin k-active"
        >About</nuxt-link>
      </li>
      <li class="header-menu--item" v-if="!isAuth">
        <nuxt-link
          to="/login"
          class="header-menu--link"
          active-class="header-menu--link-active"
        >Login</nuxt-link>
      </li>
      <li v-else>
        <div class="header-menu--link" @click="logOut">Logout</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    isAuth() {
      return this.$store.getters["auth/isAuth"];
    }
  },
  methods: {
    logOut() {
      return this.$store.dispatch("auth/logOut", {
        cb: () => this.$router.push("/")
      });
    }
  }
};
</script>

<style scoped>
.header-menu--wrap {
  background: #ececec;
  border-radius: 3px;
  padding: 20px;
}

.header-menu {
  width: 100%;
  max-width: 500px;
  margin: auto;
  display: flex;
  list-style: none;
  background: #ececec;
}

.header-menu--item {
  margin-left: 20px;
}

.header-menu--link {
  padding: 10px 15px;
  text-decoration: none;
  display: block;
  color: #a2a2a2;
  font-weight: 600;
  font-size: 14px;
}

.header-menu--link-active {
  color: #333;
}
</style>
