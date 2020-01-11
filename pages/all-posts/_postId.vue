<template>
  <div>
    <div v-if="postStatus === 'LOADING'">Подождите</div>
    <div v-if="postStatus === 'ERROR'">Что то не так</div>
    <div v-if="postStatus === 'SUCCESS'">
      <h2>{{post.title}}</h2>
      <br>
      <p>Post number {{post.id}}</p>
      <br />
      <p>{{post.body}}</p>
    </div>
    <div v-if="selectedPostCommentsStatus === 'SUCCESS'">
      <br>
      <h2>Comments: </h2>  
      <br>
      <div v-for="p in selectedPostComments" :key="p.id">
        Email: <b>{{p.email}}</b><br><br>
        Name: <b>{{p.name}}</b><br><br>
        Post comment: <b>{{p.body}}</b><br>
        <br>
        <hr>
        <br>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: ["auth"],
  computed: {
    post() {
      return this.$store.getters["posts/selectedPost"];
    },
    postStatus() {
      return this.$store.getters["posts/selectedPostStatus"];
    },
    selectedPostComments() {
      console.log('this.$store.getters["posts/selectedPostComments"] ',this.$store.getters["posts/selectedPostComments"])
      return this.$store.getters["posts/selectedPostComments"];
    },
    selectedPostCommentsStatus() {
      return this.$store.getters["posts/selectedPostCommentsStatus"];
    }
  },
  async asyncData({ store, params }) {
    store.dispatch("posts/fetchOnePost", { postID: params.postId });
    store.dispatch("posts/fetchPostComments", { postID: params.postId });
  }
};
</script>