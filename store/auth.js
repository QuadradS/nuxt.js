function fakeAuthRequest({ name, password }) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(name === 'ADMIN' &&  password === 'PASSWORD'){
                 resolve('ncbfuip3w4tegvp7c9uwqidoujl')
            }else{
                reject()
            }
            
        }, 1000)
    })
}

function fakeCheckTokenRequest(token) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(token){
                 resolve('ncbfuip3w4tegvp7c9uwqidoujl')
            }else{
                reject()
            }
            
        }, 1000)
    })
}
// I did not use here an api because in the jsonplaceholden does not have the auth api
// ----------------- 


export const state = () => ({
    token: null,
    isAuth: false,
    authState: null
})

export const mutations = {
    setAuthToken(state, token) {
        state.token = token
        state.isAuth = true
        state.authState = null
    },
    logOut(state) {
        state.token = null
        state.isAuth = false
        state.authState = null
        localStorage.removeItem('token')

    },
    setAuthError(state) {
        state.token = null
        state.isAuth = false
        state.authState = 'ERROR'
    },
    setAuthState(state, authState) {
        state.authState = authState
    }
}

export const actions = {
    async checkToken({ commit }) {
        try {
            commit('setAuthState', 'LOADING')
            const res = await fakeCheckTokenRequest(localStorage.getItem('token'))
            localStorage.setItem('token',res)
            commit('setAuthToken', res)
        } catch{
            localStorage.removeItem('token')
            commit('logOut')
        }
    },
    async logIn({ commit }, { name, password, cb }) {
        try {
            commit('setAuthState', 'LOADING')
            const res = await fakeAuthRequest({ name, password })
            localStorage.setItem('token',res)
            commit('setAuthToken', res)
            cb()
        } catch(e){
            commit('setAuthError')
        }
    },
    logOut({ commit },{cb}) {
        commit('logOut')
        cb()
    }
}

export const getters = {
    authState: (s) => s.authState,
    isAuth: (s) => s.isAuth
}