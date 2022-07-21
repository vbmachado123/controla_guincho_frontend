import http from '../https-commons'

const findOne = (id: number) => {
    return http.get<any>(`/user/find_one/${id}`)
}

const findAll = () => {
    return http.get<any[]>('/user/find_all')
}

const exportData = () => {
    return http.get<any>('/user/export', {
        responseType: 'blob',
    });
}

export const ProfessionalService = {
    findOne,
    findAll,
    exportData
}
