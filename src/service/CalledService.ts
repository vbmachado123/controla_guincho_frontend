import http from '../https-commons'

const findAll = () => {
    return http.get<any[]>('/called/find_all')
}

const findOne = (id: number) => {
    return http.get<any>(`/called/find_one/${id}`)
}

const findTypes = () => {
    return http.get<any[]>('/called/find_types')
}

const create = (request: Object) => {
    return http.post<any[]>('/called', request)
}

const create_one = (request: Object) => {
    return http.post<any[]>('/called/create_one', request, {
        withCredentials: false,
        headers: {
            "Access-Control-Allow-Origin": "http://localhost:3000",
            "Access-Control-Allow-Headers": "Authorization",
            "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
            "Content-Type": "application/json;charset=UTF-8"
        }
    })
}

export const CalledService = {
    findAll, findOne, findTypes, create, create_one
}