export default async function ({ store, redirect, axios }) {

    if(localStorage.getItem('token')){
        await store.dispatch("auth/checkToken")
    }

    if (!store.getters["auth/isAuth"] && !localStorage.getItem('token')) {
        redirect('/login')
    }
}