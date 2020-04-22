import axios from 'axios'

const apiLinks = {
    festivalAPI: 'https://localhost:44313/api/festivals'
}

const state = {
    festivalInfo: {
        id: '',
        name: '',
        location: {
            latitude: '',
            longitude:  ''
        },
        bio: '',
        genre: '',
        startDate: '',
        endDate: ''
    },
    festivallist: ''
}

const mutations = {
    'SET_FESTIVALS' (state, festivals) {
        state.festivallist = festivals
    },
    'SET_FESTIVALINFO' (state, festivalInfo) {
        festivalInfo.startDate = festivalInfo.startDate.substring(0, festivalInfo.startDate.indexOf('T'))
        festivalInfo.endDate = festivalInfo.endDate.substring(0, festivalInfo.endDate.indexOf('T'))
        state.festivalInfo = festivalInfo
    },
    'DELETE_INFO' (state) {
        state.festivalInfo = {
            id: '',
            name: '',
            location: {
                latitude: '',
                longitude:  ''
            },
            bio: '',
            genre: '',
            startDate: '',
            endDate: ''
        }
    },
    'UPDATE_FESTIVAL_NAME' (state, name) {
        state.festivalInfo.name = name
    },
    'UPDATE_FESTIVAL_LAT' (state, lat) {
        state.festivalInfo.location.latitude = lat
    },
    'UPDATE_FESTIVAL_LON' (state, lon) {
        state.festivalInfo.location.longitude = lon
    },
    'UPDATE_FESTIVAL_BIO' (state, bio) {
        state.festivalInfo.bio = bio
    },
    'UPDATE_FESTIVAL_GENRE' (state, genre) {
        state.festivalInfo.genre = genre
    },
    'UPDATE_FESTIVAL_STARTDATE' (state, startDate) {
        state.festivalInfo.startDate = startDate
    },
    'UPDATE_FESTIVAL_ENDDATE' (state, endDate) {
        state.festivalInfo.endDate  = endDate
    },
    'UPDATE_FESTIVAL_ID' (state, id) {
        state.festivalInfo.id  = id
    }
}

const actions = {
    createFestival: ({
        state
    }) => {
        let data = JSON.stringify({
            name: state.festivalInfo.name,
            location: {
                latitude: state.festivalInfo.location.latitude,
                longitude: state.festivalInfo.location.longitude
            },
            bio: state.festivalInfo.bio,
            genre: state.festivalInfo.genre,
            startDate: state.festivalInfo.startDate,
            endDate: state.festivalInfo.endDate
        })
        axios.post(apiLinks.festivalAPI, data, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
    },
    updateFestival: ({
        state
    }) => {
        let data = JSON.stringify({
            name: state.festivalInfo.name,
            location: {
                latitude: state.festivalInfo.location.latitude,
                longitude: state.festivalInfo.location.longitude
            },
            bio: state.festivalInfo.bio,
            genre: state.festivalInfo.genre,
            startDate: state.festivalInfo.startDate,
            endDate: state.festivalInfo.endDate
        })
        axios.put(apiLinks.festivalAPI + '/' + state.festivalInfo.id, data, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
    },
    deleteFestival: ({
        state
    }) => {
        axios.delete(apiLinks.festivalAPI + '/' + state.festivalInfo.id)
    },
    getFestivalById: ({
        commit
    }, id) => {
        axios.get(apiLinks.festivalAPI + '/' + id).then(response => {
            commit('SET_FESTIVALINFO', response.data)
        })
    },
    getFestivals: ({
        commit
    }) => {
        axios.get(apiLinks.festivalAPI).then(response => {
            commit('SET_FESTIVALS', response.data)
        })
    },
    deleteInfo: ({
        commit
    }) => {
        commit('DELETE_INFO')
    }
}

const getters = {
    festivalInfo: state => {
        return state.festivalInfo
    },
    festivallist: state => {
        return state.festivallist
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}