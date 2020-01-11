<template>
  <div class="posts-container">
    <div class="post" v-for="p of posts" :key="p.id">
      <a @click.prevent="openSelectedPost(p.id)" href="#">
        <h3>{{p.title}}</h3>
      </a>
      <p>{{p.body}}</p>
      <br />
    </div>
  </div>
</template>

<script>
export default {
  middleware: ['auth'],
  computed: {
    posts() {
      return this.$store.getters["posts/posts"];
    }
  },
  async asyncData({ store }) {
    store.dispatch("posts/fetchPosts");
  },
  methods: {
    openSelectedPost(postID) {
      this.$router.push(`/all-posts/${postID}`);
    }
  }
};
</script>

<style scoped>
.posts-container {
  display: flex;
  flex-wrap: wrap;
}
.post {
  width: 200px;
  border: 1px solid #333;
  border-radius: 4px;
  box-sizing: border-box;
  margin: 10px;
  padding: 10px;
}
</style>