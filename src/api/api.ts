import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'd52e3685-0649-42b7-b391-4c3f9bc98d5c'
    }
})

export const userAPI = {

    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId: number) {
        console.warn("Obsolete method. Please profileAPI object.")
        return profileAPI.getProfile(userId)

    }
}

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status: string) {
        return instance.put("profile/status",{status:status})
    }
}


export const authAPI = {
    me() {
       return instance.get(`auth/me`)
    },
    login(email: string,password: string,rememberMe: boolean = false) {
        return instance.post(`/auth/login`, {email,password,rememberMe})
    },
    logout() {
        return instance.delete(`/auth/login`)
    }

}


