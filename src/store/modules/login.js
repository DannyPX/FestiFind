import axios from 'axios'
const apiLinks = {
    userAPI: 'https://localhost:44313/api/user'
}

const state = {
    credentials: {
        email: '',
        password: ''
    }
}

const mutations = {
    'UPDATE_EMAIL' (state, email) {
        state.email = email
    },
    'UPDATE_PASSWORD' (state, password) {
        state.password = password
    }
}

const actions = {
    loginAccount: ({
        state
    }) => {
        let data = JSON.stringify({
            email: state.email,
            password: state.password
        })
        axios.post(apiLinks.userAPI, data, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
    }
}

const getters = {
    credentials: state => {
        return state.credentials
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}