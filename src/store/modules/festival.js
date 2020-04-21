import axios from 'axios'
const apiLinks = {
    festivalAPI: 'https://localhost:44313/api/festivals'
}

const state = {
    festivalInfo: {
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
}

const mutations = {
    'SET_FESTIVALINFO' (state, festivalInfo) {
        state.festivalInfo = festivalInfo
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
    }
}

const actions = {
    createFestival: ({
        state,
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
    }
}

const getters = {
    festivalInfo: state => {
        return state.festivalInfo
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}