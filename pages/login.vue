<template>
  <div>
    <form @submit.prevent="onSubmit">
      <input required type="text" v-model="name" />
      <input required type="password" v-model="password" />
      <button :disabled="authState === 'LOADING'" type="submit">Submit</button>
      <div v-if="authState === 'ERROR'">Please check values!</div>
      <div v-if="authState === 'LOADING'">Wait</div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      password: ""
    };
  },
  computed: {
    authState() {
      return this.$store.getters["auth/authState"];
    },
    isAuth() {
      return this.$store.getters["auth/isAuth"];
    }
  },
  methods: {
    onSubmit() {
      this.$store.dispatch("auth/logIn", {
          name: this.name,
          password: this.password,
          cb: () => this.$router.push('/')
        });
    }
  }
};
</script>

<style scoped>
input,
button {
  width: 300px;
  padding: 10px 15px;
  display: block;
  margin: 10px auto;
}

div {
  width: 300px;
  text-align: center;
  margin: 30px auto;
  color: red;
  font-size: 23px;
}
</style>