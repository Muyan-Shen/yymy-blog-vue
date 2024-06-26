import {jwtDecode} from 'jwt-decode'
import router from '@/router'
const app = {
	state: {
		user: null,
		token: null,
		exp: null
	},
	mutations: {
		SET_USER: (state, user) => {
			state.user = user
		},
		SET_TOKEN: (state, token) => {
			state.token = token
			//state.exp = jwtDecode(token).exp * 1000 // ms
			state.exp = new Date().getTime()+60*1000*1000
		},
		CLEARALL: (state) => {
			state.user = null
			state.token = null
			state.exp = null
			sessionStorage.clear()
		}
	},
	actions: {
		setLoginInfo({commit}, user) {
			commit('SET_USER', user)
			commit('SET_TOKEN', user.token)
		},
		logout({commit}) {
			commit('CLEARALL')
		}
	}
}

export default app