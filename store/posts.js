export const state = () => ({
    posts: [],
    postsStatus: null,
    selectedPost: null,
    selectedPostStatus: null,
    selectedPostComments: null,
    selectedPostCommentsStatus: null
})

export const mutations = {
    setPosts(state, posts) {
        state.posts = posts
        state.postsStatus = 'SUCCESS'
    },
    setSelectedPost(state, post) {
        state.selectedPost = post
        state.selectedPostStatus = 'SUCCESS'
    },
    setCommentsSelectedPost(state, comments) {
        state.selectedPostComments = comments
        state.selectedPostCommentsStatus = 'SUCCESS'
    },
    setStatus(state, key, status) {
        state[key] = status
    }
}

export const actions = {
    async fetchPosts({ commit }) {
        try {
            commit('setStatus', 'postsStatus', 'LODING')
            const res = await this.$axios.$get('https://jsonplaceholder.typicode.com/posts?_limit=100')
            commit('setPosts', res)
        } catch{
            commit('setStatus', 'postsStatus', 'ERROR')
        }
    },
    async fetchOnePost({ commit }, payload) {
        try {
            commit('setStatus', 'selectedPostStatus', 'LODING')
            const res = await this.$axios.$get(`https://jsonplaceholder.typicode.com/posts/${payload.postID}`)
            commit('setSelectedPost', res)
        } catch{
            commit('setStatus', 'selectedPostStatus', 'ERROR')
        }
    },
    async fetchPostComments({ commit }, payload) {
        try {
            commit('setStatus', 'selectedPostCommentsStatus', 'LODING')
            const res = await this.$axios.$get(`https://jsonplaceholder.typicode.com/posts/${payload.postID}/comments`)
            commit('setCommentsSelectedPost', res)
        } catch{
            commit('setStatus', 'selectedPostCommentsStatus', 'ERROR')
        }
    }
}

export const getters = {
    posts: (s) => s.posts,
    postsStatus: (s) => s.postsStatus,
    selectedPost: (s) => s.selectedPost,
    selectedPostStatus: (s) => s.selectedPostStatus,
    selectedPostComments: (s) => s.selectedPostComments,
    selectedPostCommentsStatus: (s) => s.selectedPostCommentsStatus
}